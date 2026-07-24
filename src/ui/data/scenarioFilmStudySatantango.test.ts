import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanTimeIdentitySystemsFilmHistoryChoices,
  getEuropeanTimeIdentitySystemsFilmHistoryProfile,
  resolveEuropeanTimeIdentitySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanTimeIdentitySystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_satantango_1994";

test("Sátántangó resolves as a source-backed European time-and-identity system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveEuropeanTimeIdentitySystemsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 15);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 9);
});

test("Sátántangó receives dedicated donors without entering existing donor choices", () => {
  const profile = getEuropeanTimeIdentitySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const choices = createEuropeanTimeIdentitySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices.some((choice) => choice.label.includes("prewar village inquiry")));
  assert.ok(choices.some((choice) => choice.label.includes("post-reunification Berlin recursion")));

  for (const existingScenarioId of [
    "scenario_the_vanishing_1988",
    "scenario_run_lola_run_1998",
    "scenario_the_white_ribbon_2009",
    "scenario_phoenix_2014",
  ]) {
    const existingProfile = getEuropeanTimeIdentitySystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createEuropeanTimeIdentitySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("120 shooting days")), false);
  }
});
