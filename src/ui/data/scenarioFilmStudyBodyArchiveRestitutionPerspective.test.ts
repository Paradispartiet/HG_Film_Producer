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
  "scenario_happening_2021",
  "scenario_all_the_beauty_and_the_bloodshed_2022",
  "scenario_dahomey_2024",
  "scenario_nickel_boys_2024",
] as const;

test("body, archive, restitution and perspective batch resolves complete source-backed maps", () => {
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

test("body, archive, restitution and perspective choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createIndependentStorytellingFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
