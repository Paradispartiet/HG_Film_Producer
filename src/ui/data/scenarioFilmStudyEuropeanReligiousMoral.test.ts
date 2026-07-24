import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanPoliticalFeministModernismFilmHistoryChoices,
  getEuropeanPoliticalFeministModernismFilmHistoryProfile,
  resolveEuropeanPoliticalFeministModernismFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPoliticalFeministModernismBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioIds = [
  "scenario_viridiana_1961",
  "scenario_the_gospel_according_to_st_matthew_1964",
  "scenario_au_hasard_balthazar_1966",
] as const;

test("European religious and moral modernism batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const study = resolveEuropeanPoliticalFeministModernismFilmStudyMap(
      scenario,
      resolveScenarioProductionBrief(scenario),
    );
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok((study?.verification?.sources.length ?? 0) >= 4);
  }
});

test("European religious and moral modernism choices compare three distinct systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getEuropeanPoliticalFeministModernismFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createEuropeanPoliticalFeministModernismFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
