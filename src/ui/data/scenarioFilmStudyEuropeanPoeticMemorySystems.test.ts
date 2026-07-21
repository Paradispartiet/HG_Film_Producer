import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createEuropeanPoeticMemorySystemsFilmHistoryChoices,
  getEuropeanPoeticMemorySystemsFilmHistoryProfile,
  resolveEuropeanPoeticMemorySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPoeticMemorySystemsBatch.js";

const scenarioIds = [
  "scenario_l_atalante_1934",
  "scenario_the_spirit_of_the_beehive_1973",
  "scenario_landscape_in_the_mist_1988",
  "scenario_the_double_life_of_veronique_1991",
] as const;

test("European poetic memory systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveEuropeanPoeticMemorySystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("European poetic memory systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getEuropeanPoeticMemorySystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createEuropeanPoeticMemorySystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});