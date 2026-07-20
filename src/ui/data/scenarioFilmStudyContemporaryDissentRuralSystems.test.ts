import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createContemporaryDissentRuralSystemsFilmHistoryChoices,
  getContemporaryDissentRuralSystemsFilmHistoryProfile,
  resolveContemporaryDissentRuralSystemsFilmStudyMap,
} from "./scenarioFilmStudyContemporaryDissentRuralSystemsBatch.js";

const scenarioIds = [
  "scenario_synonyms_2019",
  "scenario_there_is_no_evil_2020",
  "scenario_bad_luck_banging_or_loony_porn_2021",
  "scenario_alcarras_2022",
] as const;

test("contemporary dissent rural systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveContemporaryDissentRuralSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("contemporary dissent rural systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getContemporaryDissentRuralSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createContemporaryDissentRuralSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
