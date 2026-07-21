import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createBritishIrishPlaceBodySystemsFilmHistoryChoices,
  getBritishIrishPlaceBodySystemsFilmHistoryProfile,
  resolveBritishIrishPlaceBodySystemsFilmStudyMap,
} from "./scenarioFilmStudyBritishIrishPlaceBodySystemsBatch.js";

const scenarioIds = [
  "scenario_kes_1969",
  "scenario_naked_1993",
  "scenario_hunger_2008",
  "scenario_the_banshees_of_inisherin_2022",
] as const;

test("British Irish place body systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveBritishIrishPlaceBodySystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("British Irish place body systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getBritishIrishPlaceBodySystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createBritishIrishPlaceBodySystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
