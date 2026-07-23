import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import {
  createSouthKoreanGenreSystemsFilmHistoryChoices,
  getSouthKoreanGenreSystemsFilmHistoryProfile,
  resolveSouthKoreanGenreSystemsFilmStudyMap,
} from "./scenarioFilmStudySouthKoreanGenreSystemsBatch.js";

const scenarioIds = [
  "scenario_peppermint_candy_1999",
  "scenario_oasis_2002",
  "scenario_the_host_2006",
  "scenario_the_wailing_2016",
] as const;

test("South Korean genre systems batch resolves complete source-backed maps", () => {
  const scenarios = new Map(getClassicFilmScenarios().map((scenario) => [scenario.id, scenario]));
  for (const scenarioId of scenarioIds) {
    const scenario = scenarios.get(scenarioId);
    assert.ok(scenario, `Missing scenario ${scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = resolveSouthKoreanGenreSystemsFilmStudyMap(scenario, brief);
    assert.equal(study?.scenarioId, scenarioId);
    assert.equal(study?.historyStatus, "source_backed");
    assert.equal(study?.coverage.length, 17);
    assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
    assert.ok(study?.verification);
    assert.ok((study?.verification?.sources.length ?? 0) >= 4);
  }
});

test("South Korean genre systems choices compare three real systems", () => {
  for (const scenarioId of scenarioIds) {
    const profile = getSouthKoreanGenreSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createSouthKoreanGenreSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
