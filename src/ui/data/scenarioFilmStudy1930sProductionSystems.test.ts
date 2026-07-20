import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  create1930sProductionSystemsFilmHistoryChoices,
  get1930sProductionSystemsFilmHistoryProfile,
  resolve1930sProductionSystemsFilmStudyMap,
} from "./scenarioFilmStudy1930sProductionSystemsBatch.js";

const scenarioIds = [
  "scenario_king_kong_1933",
  "scenario_modern_times_1936",
  "scenario_snow_white_and_the_seven_dwarfs_1937",
  "scenario_the_rules_of_the_game_1939",
] as const;

test("1930s production systems resolve complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const study = resolve1930sProductionSystemsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("1930s production choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = get1930sProductionSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = create1930sProductionSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
