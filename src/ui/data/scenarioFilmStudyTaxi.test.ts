import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createContemporaryDissentRuralSystemsFilmHistoryChoices,
  getContemporaryDissentRuralSystemsFilmHistoryProfile,
  getTaxiFilmHistoryDonors,
  resolveContemporaryDissentRuralSystemsFilmStudyMap,
} from "./scenarioFilmStudyContemporaryDissentRuralSystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_taxi_2015";

test("Taxi resolves as a source-backed clandestine Tehran in-car docufiction system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Drama"]);
  assert.equal(scenario.scenario_type, "character_comedy_production");

  const study = resolveContemporaryDissentRuralSystemsFilmStudyMap(
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

test("Taxi receives exact Iranian road, censorship and child-observation donors", () => {
  const profile = getContemporaryDissentRuralSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getTaxiFilmHistoryDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_taste_of_cherry_1997",
      "scenario_there_is_no_evil_2020",
      "scenario_where_is_the_friend_s_house_1987",
    ],
  );

  const choices = createContemporaryDissentRuralSystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Iranian dissident docufiction"));
  assert.ok(choices[0]?.label.includes("dashboard-mounted digital cameras"));
});

test("Taxi integration preserves the established contemporary dissent profiles", () => {
  for (const existingScenarioId of [
    "scenario_synonyms_2019",
    "scenario_there_is_no_evil_2020",
    "scenario_bad_luck_banging_or_loony_porn_2021",
    "scenario_alcarras_2022",
  ]) {
    const existingProfile = getContemporaryDissentRuralSystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("dashboard-mounted digital cameras"), false);

    const choices = createContemporaryDissentRuralSystemsFilmHistoryChoices(existingProfile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
