import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  create1960sScaleIndependentFilmHistoryChoices,
  get1960sScaleIndependentFilmHistoryProfile,
  resolve1960sScaleIndependentFilmStudyMap,
} from "./scenarioFilmStudy1960sScaleIndependentBatch.js";

const scenarioIds = [
  "scenario_psycho_1960",
  "scenario_lawrence_of_arabia_1962",
  "scenario_2001_a_space_odyssey_1968",
  "scenario_night_of_the_living_dead_1968",
] as const;

test("1960s scale and independent batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolve1960sScaleIndependentFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("1960s scale and independent choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = get1960sScaleIndependentFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = create1960sScaleIndependentFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
