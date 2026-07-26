import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanTimeIdentitySystemsFilmHistoryChoices,
  getEuropeanTimeIdentitySystemsFilmHistoryProfile,
  resolveEuropeanTimeIdentitySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanTimeIdentitySystemsBatch.js";
import { getTheReturnFilmHistoryDonors } from "./scenarioFilmStudyEuropeanTimeIdentityTheReturnCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_return_2003";

test("The Return resolves as a source-backed Russian father-son island trial system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveEuropeanTimeIdentitySystemsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("The Return receives dedicated authoritarian-child, durational-landscape and child-ethics donors without changing existing choices", () => {
  const profile = getEuropeanTimeIdentitySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getTheReturnFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_white_ribbon_2009",
      "scenario_satantango_1994",
      "scenario_where_is_the_friend_s_house_1987",
    ],
  );

  const choices = createEuropeanTimeIdentitySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_the_white_ribbon_2009",
    "scenario_satantango_1994",
    "scenario_where_is_the_friend_s_house_1987",
    "scenario_the_vanishing_1988",
    "scenario_phoenix_2014",
    "scenario_character_1997",
  ]) {
    const existingProfile = getEuropeanTimeIdentitySystemsFilmHistoryProfile(existingScenarioId)
      ?? (existingScenarioId === "scenario_where_is_the_friend_s_house_1987" ? profile : undefined);
    if (!existingProfile || existingScenarioId === "scenario_where_is_the_friend_s_house_1987") continue;
    const existingChoices = createEuropeanTimeIdentitySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("uninhabited island")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("father's unexplained return")), false);
  }
});
