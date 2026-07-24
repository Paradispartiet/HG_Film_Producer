import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createCrimeNoirTransformationsFilmHistoryChoices,
  getCrimeNoirTransformationsFilmHistoryProfile,
  resolveCrimeNoirTransformationsFilmStudyMap,
} from "./scenarioFilmStudyCrimeNoirTransformationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_true_romance_1993";

test("True Romance resolves as a source-backed postmodern crime-romance system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveCrimeNoirTransformationsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 14);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 9);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 6);
});

test("True Romance receives dedicated crime-noir donors without changing existing profiles", () => {
  const profile = getCrimeNoirTransformationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const choices = createCrimeNoirTransformationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_the_maltese_falcon_1941",
    "scenario_the_lost_weekend_1945",
    "scenario_out_of_the_past_1947",
    "scenario_band_of_outsiders_1964",
  ]) {
    const existingProfile = getCrimeNoirTransformationsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createCrimeNoirTransformationsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("video-store screenplay")), false);
  }
});
