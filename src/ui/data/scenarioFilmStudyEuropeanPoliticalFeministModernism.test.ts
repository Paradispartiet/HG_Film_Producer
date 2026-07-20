import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createEuropeanPoliticalFeministModernismFilmHistoryChoices,
  getEuropeanPoliticalFeministModernismFilmHistoryProfile,
  resolveEuropeanPoliticalFeministModernismFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPoliticalFeministModernismBatch.js";

const scenarioIds = [
  "scenario_cleo_from_5_to_7_1962",
  "scenario_the_conformist_1970",
  "scenario_jeanne_dielman_1975",
  "scenario_beau_travail_1999",
] as const;

test("European political and feminist modernism batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveEuropeanPoliticalFeministModernismFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("European political and feminist modernism choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getEuropeanPoliticalFeministModernismFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createEuropeanPoliticalFeministModernismFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
