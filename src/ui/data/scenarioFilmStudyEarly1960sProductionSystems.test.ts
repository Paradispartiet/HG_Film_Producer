import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createEarly1960sProductionSystemsFilmHistoryChoices,
  getEarly1960sProductionSystemsFilmHistoryProfile,
  resolveEarly1960sProductionSystemsFilmStudyMap,
} from "./scenarioFilmStudyEarly1960sProductionSystemsBatch.js";

const scenarioIds = [
  "scenario_breakfast_at_tiffany_s_1961",
  "scenario_jules_and_jim_1962",
  "scenario_contempt_1963",
  "scenario_dr_strangelove_1964",
] as const;

test("early 1960s production systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveEarly1960sProductionSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("early 1960s production systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getEarly1960sProductionSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createEarly1960sProductionSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
