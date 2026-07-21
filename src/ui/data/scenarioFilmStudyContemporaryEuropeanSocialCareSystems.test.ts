import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createContemporaryEuropeanSocialCareSystemsFilmHistoryChoices,
  getContemporaryEuropeanSocialCareSystemsFilmHistoryProfile,
  resolveContemporaryEuropeanSocialCareSystemsFilmStudyMap,
} from "./scenarioFilmStudyContemporaryEuropeanSocialCareSystemsBatch.js";

const scenarioIds = [
  "scenario_toni_erdmann_2016",
  "scenario_triangle_of_sadness_2022",
  "scenario_aftersun_2022",
  "scenario_the_room_next_door_2024",
] as const;

test("contemporary European social care systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveContemporaryEuropeanSocialCareSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("contemporary European social care systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getContemporaryEuropeanSocialCareSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createContemporaryEuropeanSocialCareSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
