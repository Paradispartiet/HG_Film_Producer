import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createNewGermanCinemaSystemsFilmHistoryChoices,
  getNewGermanCinemaSystemsFilmHistoryProfile,
  resolveNewGermanCinemaSystemsFilmStudyMap,
} from "./scenarioFilmStudyNewGermanCinemaSystemsBatch.js";

const scenarioIds = [
  "scenario_aguirre_the_wrath_of_god_1972",
  "scenario_ali_fear_eats_the_soul_1974",
  "scenario_the_marriage_of_maria_braun_1979",
  "scenario_wings_of_desire_1987",
] as const;

test("New German Cinema systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveNewGermanCinemaSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("New German Cinema choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getNewGermanCinemaSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createNewGermanCinemaSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
