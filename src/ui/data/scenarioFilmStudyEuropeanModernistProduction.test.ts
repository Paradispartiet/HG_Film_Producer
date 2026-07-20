import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createEuropeanModernistProductionFilmHistoryChoices,
  getEuropeanModernistProductionFilmHistoryProfile,
  resolveEuropeanModernistProductionFilmStudyMap,
} from "./scenarioFilmStudyEuropeanModernistProductionBatch.js";

const scenarioIds = [
  "scenario_hiroshima_mon_amour_1959",
  "scenario_8_1_2_1963",
  "scenario_the_umbrellas_of_cherbourg_1964",
  "scenario_the_battle_of_algiers_1966",
] as const;

test("European modernist production batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveEuropeanModernistProductionFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("European modernist production choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getEuropeanModernistProductionFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createEuropeanModernistProductionFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
