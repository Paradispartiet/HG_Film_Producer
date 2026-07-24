import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import {
  createEuropeanPoeticMemorySystemsFilmHistoryChoices,
  getEuropeanPoeticMemorySystemsFilmHistoryProfile,
  resolveEuropeanPoeticMemorySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPoeticMemorySystemsBatch.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const cases = [
  {
    scenarioId: "scenario_a_clockwork_orange_1971",
    getProfile: getConstructedWorldsFilmHistoryProfile,
    resolveStudy: resolveConstructedWorldsFilmStudyMap,
    createChoices: createConstructedWorldsFilmHistoryChoices,
  },
  {
    scenarioId: "scenario_amarcord_1973",
    getProfile: getEuropeanPoeticMemorySystemsFilmHistoryProfile,
    resolveStudy: resolveEuropeanPoeticMemorySystemsFilmStudyMap,
    createChoices: createEuropeanPoeticMemorySystemsFilmHistoryChoices,
  },
  {
    scenarioId: "scenario_scenes_from_a_marriage_1974",
    getProfile: getIndependentStorytellingFilmHistoryProfile,
    resolveStudy: resolveIndependentStorytellingFilmStudyMap,
    createChoices: createIndependentStorytellingFilmHistoryChoices,
  },
] as const;

test("final 1970s films resolve through their actual Film Study families", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const item of cases) {
    const scenario = scenarios.get(item.scenarioId);
    assert.ok(scenario, `Missing scenario ${item.scenarioId}`);
    const study = item.resolveStudy(scenario, resolveScenarioProductionBrief(scenario));
    assert.equal(study?.scenarioId, item.scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.equal(study?.verification?.status, "verified");
    assert.ok((study?.verification?.sources.length ?? 0) >= 4);
  }
});

test("final 1970s films retain three real family-specific comparison choices", () => {
  for (const item of cases) {
    const profile = item.getProfile(item.scenarioId);
    assert.ok(profile, `Missing profile ${item.scenarioId}`);
    const choices = item.createChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(
      new Set(choices.map((choice) => choice.quality)),
      new Set(["match", "partial", "miss"]),
    );
  }
});
