import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createIntimateFestivalBodyCareSystemsFilmHistoryChoices,
  getIntimateFestivalBodyCareSystemsFilmHistoryProfile,
  resolveIntimateFestivalBodyCareSystemsFilmStudyMap,
} from "./scenarioFilmStudyIntimateFestivalBodyCareSystemsBatch.js";

const scenarioIds = [
  "scenario_vera_drake_2004",
  "scenario_the_wrestler_2008",
  "scenario_the_milk_of_sorrow_2009",
  "scenario_somewhere_2010",
] as const;

test("intimate festival body care systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveIntimateFestivalBodyCareSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("intimate festival body care systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getIntimateFestivalBodyCareSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createIntimateFestivalBodyCareSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
