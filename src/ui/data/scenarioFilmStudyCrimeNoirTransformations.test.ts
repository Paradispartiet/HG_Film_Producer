import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createCrimeNoirTransformationsFilmHistoryChoices,
  getCrimeNoirTransformationsFilmHistoryProfile,
  resolveCrimeNoirTransformationsFilmStudyMap,
} from "./scenarioFilmStudyCrimeNoirTransformationsBatch.js";

const scenarioIds = [
  "scenario_the_maltese_falcon_1941",
  "scenario_the_lost_weekend_1945",
  "scenario_out_of_the_past_1947",
  "scenario_band_of_outsiders_1964",
] as const;

test("crime and noir transformations batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveCrimeNoirTransformationsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("crime and noir transformations choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getCrimeNoirTransformationsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createCrimeNoirTransformationsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
