import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getFargoFilmHistoryDonors } from "./scenarioFilmStudyCrimeNoirFargoCatalog.js";
import {
  createCrimeNoirTransformationsFilmHistoryChoices,
  getCrimeNoirTransformationsFilmHistoryProfile,
  resolveCrimeNoirTransformationsFilmStudyMap,
} from "./scenarioFilmStudyCrimeNoirTransformationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_fargo_1996";

test("Fargo resolves as a source-backed regional neo-noir production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveCrimeNoirTransformationsFilmStudyMap(
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

test("Fargo receives dedicated donors without entering existing crime-noir choices", () => {
  const profile = getCrimeNoirTransformationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getFargoFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_blood_simple_1984",
      "scenario_clockers_1995",
      "scenario_out_of_the_past_1947",
    ],
  );

  const choices = createCrimeNoirTransformationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_the_maltese_falcon_1941",
    "scenario_the_lost_weekend_1945",
    "scenario_out_of_the_past_1947",
    "scenario_band_of_outsiders_1964",
    "scenario_true_romance_1993",
    "scenario_clockers_1995",
  ]) {
    const existingProfile = getCrimeNoirTransformationsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createCrimeNoirTransformationsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("horizonless snowfields")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("fabricated true-story")), false);
  }
});
