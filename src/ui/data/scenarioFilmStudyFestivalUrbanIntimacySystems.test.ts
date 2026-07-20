import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createFestivalUrbanIntimacySystemsFilmHistoryChoices,
  getFestivalUrbanIntimacySystemsFilmHistoryProfile,
  resolveFestivalUrbanIntimacySystemsFilmStudyMap,
} from "./scenarioFilmStudyFestivalUrbanIntimacySystemsBatch.js";

const scenarioIds = [
  "scenario_pieta_2012",
  "scenario_blue_is_the_warmest_colour_2013",
  "scenario_black_coal_thin_ice_2014",
  "scenario_from_afar_2015",
] as const;

test("festival urban intimacy systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveFestivalUrbanIntimacySystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("festival urban intimacy systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createFestivalUrbanIntimacySystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
