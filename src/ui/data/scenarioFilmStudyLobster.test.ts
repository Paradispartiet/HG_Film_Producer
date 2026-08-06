import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanPressureFilmHistoryChoices,
  getEuropeanPressureFilmHistoryProfile,
  resolveEuropeanPressureFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPressureBatch.js";
import { getLobsterFilmHistoryDonors } from "./scenarioFilmStudyEuropeanPressureLobsterCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_lobster_2015";

test("The Lobster resolves as a source-backed speculative romance and social-pressure system", () => {
  const scenarios = getClassicFilmScenarios();
  const scenario = scenarios.find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenarios.findIndex((candidate) => candidate.id === scenarioId) + 1, 78);
  assert.equal(scenario.film.runtime_mins, 119);
  assert.deepEqual(scenario.film.directors, ["Yorgos Lanthimos"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance", "Sci-Fi", "Thriller"]);
  assert.equal(scenario.scenario_type, "speculative_production");

  const study = resolveEuropeanPressureFilmStudyMap(
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

test("The Lobster receives exact rule, intimacy and hotel-alienation donors", () => {
  const profile = getEuropeanPressureFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getLobsterFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_dogtooth_2009",
      "scenario_her_2013",
      "scenario_anomalisa_2015",
    ],
  );

  const choices = createEuropeanPressureFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("speculative romance"));
  assert.ok(choices[0]?.label.includes("seven-week County Kerry location shoot"));
  assert.ok(choices[0]?.label.includes("ARRI Alexa"));
});

test("The Lobster integration preserves established European-pressure profiles and choices", () => {
  for (const existingScenarioId of [
    "scenario_dogtooth_2009",
    "scenario_the_hunt_2012",
    "scenario_the_measure_of_a_man_2015",
    "scenario_revanche_2008",
    "scenario_la_haine_1995",
    "scenario_4_months_3_weeks_and_2_days_2007",
  ]) {
    const existingProfile = getEuropeanPressureFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("45-day deadline"), false);

    const choices = createEuropeanPressureFilmHistoryChoices(existingProfile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
