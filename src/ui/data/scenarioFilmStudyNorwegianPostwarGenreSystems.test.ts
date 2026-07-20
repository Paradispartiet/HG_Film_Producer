import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createNorwegianPostwarGenreSystemsFilmHistoryChoices,
  getNorwegianPostwarGenreSystemsFilmHistoryProfile,
  resolveNorwegianPostwarGenreSystemsFilmStudyMap,
} from "./scenarioFilmStudyNorwegianPostwarGenreSystemsBatch.js";

const scenarioIds = [
  "scenario_gategutter_1949",
  "scenario_fjols_til_fjells_1957",
  "scenario_de_dodes_tjern_1958",
  "scenario_insomnia_1997",
] as const;

test("Norwegian postwar genre batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveNorwegianPostwarGenreSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
  }
});

test("Norwegian postwar genre choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getNorwegianPostwarGenreSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createNorwegianPostwarGenreSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
