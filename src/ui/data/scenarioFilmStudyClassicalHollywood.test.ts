import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createClassicalHollywoodFilmHistoryChoices,
  getClassicalHollywoodFilmHistoryProfile,
  resolveClassicalHollywoodFilmStudyMap,
} from "./scenarioFilmStudyClassicalHollywoodBatch.js";

const scenarioIds = [
  "scenario_stagecoach_1939",
  "scenario_the_wizard_of_oz_1939",
  "scenario_citizen_kane_1941",
  "scenario_casablanca_1942",
] as const;

test("classical Hollywood batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveClassicalHollywoodFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("classical Hollywood choices compare three real studio systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getClassicalHollywoodFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createClassicalHollywoodFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
