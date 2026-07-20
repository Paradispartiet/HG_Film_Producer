import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createFestivalJourneyDisplacementSystemsFilmHistoryChoices,
  getFestivalJourneyDisplacementSystemsFilmHistoryProfile,
  resolveFestivalJourneyDisplacementSystemsFilmStudyMap,
} from "./scenarioFilmStudyFestivalJourneyDisplacementSystemsBatch.js";

const scenarioIds = [
  "scenario_pelle_the_conqueror_1987",
  "scenario_central_station_1998",
  "scenario_eternity_and_a_day_1998",
  "scenario_head_on_2004",
] as const;

test("festival journey displacement systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveFestivalJourneyDisplacementSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("festival journey displacement systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getFestivalJourneyDisplacementSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createFestivalJourneyDisplacementSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
