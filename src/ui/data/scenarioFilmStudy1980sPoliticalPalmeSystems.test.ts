import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  create1980sPoliticalPalmeSystemsFilmHistoryChoices,
  get1980sPoliticalPalmeSystemsFilmHistoryProfile,
  resolve1980sPoliticalPalmeSystemsFilmStudyMap,
} from "./scenarioFilmStudy1980sPoliticalPalmeSystemsBatch.js";

const scenarioIds = [
  "scenario_man_of_iron_1981",
  "scenario_yol_1982",
  "scenario_the_ballad_of_narayama_1983",
  "scenario_when_father_was_away_on_business_1985",
] as const;

test("1980s political Palme systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolve1980sPoliticalPalmeSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("1980s political Palme systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = get1980sPoliticalPalmeSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = create1980sPoliticalPalmeSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
