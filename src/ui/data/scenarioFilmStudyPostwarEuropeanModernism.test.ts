import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createPostwarEuropeanModernismFilmHistoryChoices,
  getPostwarEuropeanModernismFilmHistoryProfile,
  resolvePostwarEuropeanModernismFilmStudyMap,
} from "./scenarioFilmStudyPostwarEuropeanModernismBatch.js";

const scenarioIds = [
  "scenario_ordet_1955",
  "scenario_ashes_and_diamonds_1958",
  "scenario_persona_1966",
  "scenario_daisies_1966",
] as const;

test("postwar European modernism batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolvePostwarEuropeanModernismFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("postwar European modernism choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getPostwarEuropeanModernismFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createPostwarEuropeanModernismFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
