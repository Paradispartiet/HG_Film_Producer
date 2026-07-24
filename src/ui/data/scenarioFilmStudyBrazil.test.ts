import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { brazilFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsBrazil.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_brazil_1985";
const establishedScenarioIds = [
  "scenario_a_clockwork_orange_1971",
  "scenario_groundhog_day_1993",
  "scenario_the_truman_show_1998",
  "scenario_moon_2009",
  "scenario_midnight_in_paris_2011",
] as const;

test("Brazil resolves as its own source-backed constructed-world system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveConstructedWorldsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 14);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 5);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 4);
});

test("Brazil choices compare three distinct constructed-world production systems", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.equal(profile, brazilFilmHistoryProfile);

  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Brazil remains a one-way extension of the established donor pool", () => {
  for (const establishedScenarioId of establishedScenarioIds) {
    const profile = getConstructedWorldsFilmHistoryProfile(establishedScenarioId);
    assert.ok(profile, `Missing established profile ${establishedScenarioId}`);
    const choices = createConstructedWorldsFilmHistoryChoices(profile);
    assert.ok(choices.every((choice) => !choice.label.includes(brazilFilmHistoryProfile.moment)));
  }
});
