import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createCzechoslovakNewWaveFilmHistoryChoices,
  getCzechoslovakNewWaveFilmHistoryProfile,
  resolveCzechoslovakNewWaveFilmStudyMap,
} from "./scenarioFilmStudyCzechoslovakNewWaveBatch.js";

const scenarioIds = [
  "scenario_closely_watched_trains_1966",
  "scenario_the_firemens_ball_1967",
  "scenario_marketa_lazarova_1967",
  "scenario_the_cremator_1969",
] as const;

test("Czechoslovak New Wave batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveCzechoslovakNewWaveFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("Czechoslovak New Wave choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getCzechoslovakNewWaveFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createCzechoslovakNewWaveFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
