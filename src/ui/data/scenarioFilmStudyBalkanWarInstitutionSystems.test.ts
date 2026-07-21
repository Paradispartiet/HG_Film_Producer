import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createBalkanWarInstitutionSystemsFilmHistoryChoices,
  getBalkanWarInstitutionSystemsFilmHistoryProfile,
  resolveBalkanWarInstitutionSystemsFilmStudyMap,
} from "./scenarioFilmStudyBalkanWarInstitutionSystemsBatch.js";

const scenarioIds = [
  "scenario_before_the_rain_1994",
  "scenario_underground_1995",
  "scenario_no_mans_land_2001",
  "scenario_quo_vadis_aida_2020",
] as const;

test("Balkan war institution systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveBalkanWarInstitutionSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("Balkan war institution systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getBalkanWarInstitutionSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createBalkanWarInstitutionSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
