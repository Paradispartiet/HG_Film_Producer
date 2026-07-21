import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createEuropean1960sSpaceSystemsFilmHistoryChoices,
  getEuropean1960sSpaceSystemsFilmHistoryProfile,
  resolveEuropean1960sSpaceSystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropean1960sSpaceSystemsBatch.js";

const scenarioIds = [
  "scenario_l_avventura_1960",
  "scenario_last_year_at_marienbad_1961",
  "scenario_playtime_1967",
  "scenario_the_leopard_1963",
] as const;

test("European 1960s space systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveEuropean1960sSpaceSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("European 1960s space systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getEuropean1960sSpaceSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createEuropean1960sSpaceSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
