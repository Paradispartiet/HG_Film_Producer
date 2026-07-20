import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createLateSilentEarlySoundFilmHistoryChoices,
  getLateSilentEarlySoundFilmHistoryProfile,
  resolveLateSilentEarlySoundFilmStudyMap,
} from "./scenarioFilmStudyLateSilentEarlySoundBatch.js";

const scenarioIds = [
  "scenario_the_passion_of_joan_of_arc_1928",
  "scenario_man_with_a_movie_camera_1929",
  "scenario_m_1931",
  "scenario_city_lights_1931",
] as const;

test("late silent and early sound batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveLateSilentEarlySoundFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("late silent and early sound choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getLateSilentEarlySoundFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createLateSilentEarlySoundFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
