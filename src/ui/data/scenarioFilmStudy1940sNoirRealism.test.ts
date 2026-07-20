import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  create1940sNoirRealismFilmHistoryChoices,
  get1940sNoirRealismFilmHistoryProfile,
  resolve1940sNoirRealismFilmStudyMap,
} from "./scenarioFilmStudy1940sNoirRealismBatch.js";

const scenarioIds = [
  "scenario_double_indemnity_1944",
  "scenario_brief_encounter_1945",
  "scenario_rome_open_city_1945",
  "scenario_the_third_man_1949",
] as const;

test("1940s noir and realism batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolve1940sNoirRealismFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("1940s noir and realism choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = get1940sNoirRealismFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = create1940sNoirRealismFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
