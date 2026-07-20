import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createModernNordicBehaviorSystemsFilmHistoryChoices,
  getModernNordicBehaviorSystemsFilmHistoryProfile,
  resolveModernNordicBehaviorSystemsFilmStudyMap,
} from "./scenarioFilmStudyModernNordicBehaviorSystemsBatch.js";

const scenarioIds = [
  "scenario_force_majeure_2014",
  "scenario_woman_at_war_2018",
  "scenario_another_round_2020",
  "scenario_the_worst_person_in_the_world_2021",
] as const;

test("modern Nordic behavior systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveModernNordicBehaviorSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("modern Nordic behavior systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getModernNordicBehaviorSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createModernNordicBehaviorSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
