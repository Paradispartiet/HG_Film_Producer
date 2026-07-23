import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioIds = [
  "scenario_tropical_malady_2004",
  "scenario_still_life_2006",
  "scenario_secret_sunshine_2007",
  "scenario_poetry_2010",
] as const;

test("Asian landscape batch resolves source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario);
    const study = resolveIndependentStorytellingFilmStudyMap(
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

test("Asian landscape choices compare three systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createIndependentStorytellingFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
