import assert from "node:assert/strict";
import { build } from "esbuild";

/**
 * Runtime-derived donor inventory for Film Study's nine source-verified
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
  "scenario_lost_in_translation_2003",
  "scenario_bicycle_thieves_1948",
  "scenario_vertigo_1958",
  "scenario_breathless_1960",
  "scenario_the_400_blows_1959",
  "scenario_the_shining_1980",
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

const translationBundle = await build({
  entryPoints: ["src/core/filmStudyVerifiedDonorChoices.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  logLevel: "warning",
});
assert.equal(translationBundle.outputFiles.length, 1, "Expected one donor presentation module");
const { FILM_STUDY_VERIFIED_DONOR_CHOICES, canonicalFilmStudyOptionFingerprint, presentVerifiedFilmStudyDonorChoice, presentVerifiedFilmStudyDonorChoiceSummary } =
  await import(`data:text/javascript;base64,${Buffer.from(translationBundle.outputFiles[0].text).toString("base64")}`);

let checkedDonorChoices = 0;
for (const item of inventory) {
  const expected = FILM_STUDY_VERIFIED_DONOR_CHOICES[item.scenarioId];
  assert.ok(expected, `Missing donor translations: ${item.scenarioId}`);
  const donorChoices = item.choices.filter((choice) => choice.quality !== "match");
  assert.equal(donorChoices.length, 2);
  for (const choice of donorChoices) {
    const entry = expected[choice.quality];
    assert.ok(entry, `Missing translated donor: ${item.scenarioId} ${choice.quality}`);
    assert.equal(entry.donorScenarioId, choice.sourceScenarioId, "Historical donor identity changed");
    assert.ok(choice.canonicalOption.startsWith(entry.preview), "Historical donor preview changed");
    assert.deepEqual(canonicalFilmStudyOptionFingerprint(choice.canonicalOption), {
      length: entry.canonicalLength,
      hash: entry.canonicalHash,
    }, `Historical donor statement drifted: ${item.scenarioId} ${choice.quality}`);
    assert.equal(presentVerifiedFilmStudyDonorChoice("en", item.scenarioId, choice.quality, choice.canonicalOption), choice.canonicalOption);
    for (const lang of ["en", "nb", "fr", "pt"]) {
      const condensed = presentVerifiedFilmStudyDonorChoiceSummary(lang, item.scenarioId, choice.quality, choice.canonicalOption);
      assert.equal(condensed, entry.summary[lang], `Wrong summary: ${item.scenarioId} ${choice.quality} ${lang}`);
      assert.ok(condensed.trim().length >= 20 && condensed.length < 115, "Too long or empty answer title");
      assert.equal(presentVerifiedFilmStudyDonorChoiceSummary(lang, item.scenarioId, choice.quality, choice.canonicalOption + " revised"),
        undefined, "Changed historical claim must never get an old short title");
    }
    for (const language of ["nb", "fr", "pt"]) {
      const localized = presentVerifiedFilmStudyDonorChoice(language, item.scenarioId, choice.quality, choice.canonicalOption);
      assert.equal(localized, entry.text[language], `Wrong translation: ${item.scenarioId} ${choice.quality} ${language}`);
      assert.ok(localized.trim().length > 60, "Unexpectedly short translated historical statement");
      assert.notEqual(localized, choice.canonicalOption, "Original English statement leaked");
      assert.equal(presentVerifiedFilmStudyDonorChoice(language, item.scenarioId, choice.quality, choice.canonicalOption + " revised"),
        choice.canonicalOption + " revised", "Revised claims must fail closed");
    }
    checkedDonorChoices += 1;
  }
}
assert.equal(checkedDonorChoices, 18);
console.log("FILM_HISTORY_TRANSLATED_DONOR_CHOICES=" + checkedDonorChoices);

console.log("FILM_HISTORY_DONOR_INVENTORY=" + JSON.stringify(inventory));
