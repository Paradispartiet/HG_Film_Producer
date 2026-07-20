import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createNordicMinimalistSocialSystemsFilmHistoryChoices,
  getNordicMinimalistSocialSystemsFilmHistoryProfile,
  resolveNordicMinimalistSocialSystemsFilmStudyMap,
} from "./scenarioFilmStudyNordicMinimalistSocialSystemsBatch.js";

const scenarioIds = [
  "scenario_the_match_factory_girl_1990",
  "scenario_songs_from_the_second_floor_2000",
  "scenario_the_man_without_a_past_2002",
  "scenario_oslo_august_31st_2011",
] as const;

test("Nordic minimalist social systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveNordicMinimalistSocialSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("Nordic minimalist social systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getNordicMinimalistSocialSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createNordicMinimalistSocialSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
