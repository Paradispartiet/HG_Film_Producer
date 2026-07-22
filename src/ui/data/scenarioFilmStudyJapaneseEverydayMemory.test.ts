import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createJapaneseEverydayMemoryFilmHistoryChoices,
  getJapaneseEverydayMemoryFilmHistoryProfile,
  resolveJapaneseEverydayMemoryFilmStudyMap,
} from "./scenarioFilmStudyJapaneseEverydayMemoryBatch.js";

const scenarioIds = [
  "scenario_tampopo_1985",
  "scenario_black_rain_imamura_1989",
  "scenario_after_life_1998",
  "scenario_still_walking_2008",
] as const;

test("Japanese everyday memory batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveJapaneseEverydayMemoryFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
    assert.ok((study?.verification?.sources.length ?? 0) >= 4);
  }
});

test("Japanese everyday memory choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getJapaneseEverydayMemoryFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createJapaneseEverydayMemoryFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
