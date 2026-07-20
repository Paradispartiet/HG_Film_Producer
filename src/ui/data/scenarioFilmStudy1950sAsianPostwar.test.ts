import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  create1950sAsianPostwarFilmHistoryChoices,
  get1950sAsianPostwarFilmHistoryProfile,
  resolve1950sAsianPostwarFilmStudyMap,
} from "./scenarioFilmStudy1950sAsianPostwarBatch.js";

const scenarioIds = [
  "scenario_rashomon_1950",
  "scenario_tokyo_story_1953",
  "scenario_seven_samurai_1954",
  "scenario_pather_panchali_1955",
] as const;

test("1950s Asian postwar batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolve1950sAsianPostwarFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("1950s Asian postwar choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = get1950sAsianPostwarFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = create1950sAsianPostwarFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
