import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanTimeIdentitySystemsFilmHistoryChoices,
  getEuropeanTimeIdentitySystemsFilmHistoryProfile,
  resolveEuropeanTimeIdentitySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanTimeIdentitySystemsBatch.js";
import { getLeviathanFilmHistoryDonors } from "./scenarioFilmStudyEuropeanTimeIdentityLeviathanCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_leviathan_2014";

test("Leviathan resolves as a source-backed Barents state-church property tragedy", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama"]);

  const study = resolveEuropeanTimeIdentitySystemsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Leviathan receives exact family-authority, institutional-violence and property-power donors without changing existing choices", () => {
  const profile = getEuropeanTimeIdentitySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getLeviathanFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_return_2003",
      "scenario_the_white_ribbon_2009",
      "scenario_winter_sleep_2014",
    ],
  );

  const choices = createEuropeanTimeIdentitySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices.some((choice) => choice.feedback.includes("one-take demolition")));
  assert.ok(choices.some((choice) => choice.feedback.includes("whale")));

  for (const existingScenarioId of [
    "scenario_the_return_2003",
    "scenario_the_white_ribbon_2009",
    "scenario_satantango_1994",
    "scenario_the_vanishing_1988",
    "scenario_phoenix_2014",
    "scenario_character_1997",
  ]) {
    const existingProfile = getEuropeanTimeIdentitySystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    const existingChoices = createEuropeanTimeIdentitySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("one-take demolition")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("fabricated whale")), false);
  }
});
