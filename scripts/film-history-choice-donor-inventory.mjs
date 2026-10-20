import assert from "node:assert/strict";
import { build } from "esbuild";

/**
 * Runtime-derived donor inventory for Film Study's three source-verified
 * translation pilots. The quiz selects two *other* films as distractors;
 * do not translate them without verifying their actual canonical donors.
 *
 * Bundling executes the same TypeScript data module as the UI, rather than
 * guessing its source IDs or re-implementing its donor-selection algorithm.
 * esbuild is provided by this project's existing Vite toolchain.
 */
const targets = [
  "scenario_12_angry_men_1957",
  "scenario_the_machinist_2004",
  "scenario_the_lives_of_others_2006",
];

const result = await build({
  entryPoints: ["src/ui/data/scenarioFilmStudyMap.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  logLevel: "warning",
});
assert.equal(result.outputFiles.length, 1, "Expected one bundled scenario study module");
const bytes = Buffer.from(result.outputFiles[0].text);
const moduleUrl = `data:text/javascript;base64,${bytes.toString("base64")}`;
const { createFilmHistoryChoices, getSourceBackedFilmHistoryIds, getSourceBackedFilmHistoryProfile } =
  await import(moduleUrl);

const sourceIds = getSourceBackedFilmHistoryIds();
const profiles = sourceIds.map((id) => getSourceBackedFilmHistoryProfile(id));
assert.ok(profiles.length > 100, "Historical source inventory unexpectedly small");

const inventory = targets.map((scenarioId) => {
  const profile = getSourceBackedFilmHistoryProfile(scenarioId);
  assert.ok(profile, `Missing verified profile: ${scenarioId}`);
  const choices = createFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  const rows = choices.map((choice) => {
    const candidates = profiles.filter((donor) => `${donor.period}: ${donor.moment}` === choice.label);
    assert.equal(candidates.length, 1, `Missing or ambiguous exact donor: ${scenarioId} ${choice.quality}`);
    const source = candidates[0];
    assert.equal(choice.quality === "match", source.scenarioId === scenarioId, "Answer must preserve its grading");
    return {
      quality: choice.quality,
      choiceId: choice.id,
      sourceScenarioId: source.scenarioId,
      period: source.period,
      moment: source.moment,
      canonicalOption: choice.label,
    };
  });
  return { scenarioId, choices: rows };
});
console.log("FILM_HISTORY_DONOR_INVENTORY=" + JSON.stringify(inventory));
