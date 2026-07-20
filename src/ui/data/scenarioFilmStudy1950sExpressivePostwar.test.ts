import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  create1950sExpressivePostwarFilmHistoryChoices,
  get1950sExpressivePostwarFilmHistoryProfile,
  resolve1950sExpressivePostwarFilmStudyMap,
} from "./scenarioFilmStudy1950sExpressivePostwarBatch.js";

const scenarioIds = [
  "scenario_la_strada_1954",
  "scenario_the_night_of_the_hunter_1955",
  "scenario_the_seventh_seal_1957",
  "scenario_touch_of_evil_1958",
] as const;

test("1950s expressive postwar batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolve1950sExpressivePostwarFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("1950s expressive postwar choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = get1950sExpressivePostwarFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = create1950sExpressivePostwarFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
