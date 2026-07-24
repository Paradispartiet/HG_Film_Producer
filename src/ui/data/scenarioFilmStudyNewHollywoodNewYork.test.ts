import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createNewHollywoodBlockbusterFilmHistoryChoices,
  getNewHollywoodBlockbusterFilmHistoryProfile,
  resolveNewHollywoodBlockbusterFilmStudyMap,
} from "./scenarioFilmStudyNewHollywoodBlockbusterBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioIds = [
  "scenario_mean_streets_1973",
  "scenario_dog_day_afternoon_1975",
  "scenario_taxi_driver_1976",
  "scenario_manhattan_1979",
] as const;

test("1970s New York batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const study = resolveNewHollywoodBlockbusterFilmStudyMap(
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

test("1970s New York choices compare four real production systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getNewHollywoodBlockbusterFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createNewHollywoodBlockbusterFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
