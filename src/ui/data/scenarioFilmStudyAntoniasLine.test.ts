import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getAntoniasLineFilmHistoryDonors,
} from "./scenarioFilmStudyFamilyPerformanceAntoniasLineCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_antonia_s_line_1995";

test("Antonia's Line resolves as a source-backed family-performance system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 4);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 9);
});

test("Antonia's Line receives dedicated family donors without entering existing choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const donors = getAntoniasLineFilmHistoryDonors(profile);
  assert.deepEqual(
    donors?.map((donor) => donor.scenarioId),
    [
      "scenario_daughters_of_the_dust_1991",
      "scenario_secrets_and_lies_1996",
      "scenario_still_walking_2008",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices.find((choice) => choice.quality === "partial")?.feedback.includes("family-performance"));

  for (const existingScenarioId of [
    "scenario_scenes_from_a_marriage_1974",
    "scenario_secrets_and_lies_1996",
    "scenario_dancer_in_the_dark_2000",
    "scenario_the_sons_room_2001",
    "scenario_winter_sleep_2014",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("seven years securing finance")), false);
  }
});
