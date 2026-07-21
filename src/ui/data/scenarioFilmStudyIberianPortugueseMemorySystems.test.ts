import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createIberianPortugueseMemorySystemsFilmHistoryChoices,
  getIberianPortugueseMemorySystemsFilmHistoryProfile,
  resolveIberianPortugueseMemorySystemsFilmStudyMap,
} from "./scenarioFilmStudyIberianPortugueseMemorySystemsBatch.js";

const scenarioIds = [
  "scenario_cria_cuervos_1976",
  "scenario_all_about_my_mother_1999",
  "scenario_tabu_2012",
  "scenario_horse_money_2014",
] as const;

test("Iberian Portuguese memory systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveIberianPortugueseMemorySystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("Iberian Portuguese memory systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getIberianPortugueseMemorySystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createIberianPortugueseMemorySystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
