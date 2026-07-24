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
  "scenario_poison_1991",
  "scenario_fish_tank_2009",
  "scenario_pariah_2011",
  "scenario_the_souvenir_2019",
] as const;

test("independent desire, identity and authorship batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
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

test("independent desire, identity and authorship choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createIndependentStorytellingFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
