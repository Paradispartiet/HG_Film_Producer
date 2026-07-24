import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getLeavingLasVegasFilmHistoryDonors } from "./scenarioFilmStudyAmericanPrecarityLeavingLasVegasCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_leaving_las_vegas_1995";

test("Leaving Las Vegas resolves as a source-backed American precarity and body-care system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Leaving Las Vegas receives dedicated donors without entering existing independent choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getLeavingLasVegasFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_sound_of_metal_2019",
      "scenario_safe_1995",
      "scenario_wendy_and_lucy_2008",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_wendy_and_lucy_2008",
    "scenario_the_rider_2017",
    "scenario_sound_of_metal_2019",
    "scenario_never_rarely_sometimes_always_2020",
    "scenario_safe_1995",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("twenty-eight-day")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Vivienne Westwood")), false);
  }
});
