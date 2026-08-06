import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createCrimeNoirTransformationsFilmHistoryChoices,
  getCrimeNoirTransformationsFilmHistoryProfile,
  resolveCrimeNoirTransformationsFilmStudyMap,
} from "./scenarioFilmStudyCrimeNoirTransformationsBatch.js";
import { getHatefulEightFilmHistoryDonors } from "./scenarioFilmStudyCrimeNoirHatefulEightCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_hateful_eight_2015";

test("The Hateful Eight resolves as a source-backed chamber western and 70mm crime system", () => {
  const scenarios = getClassicFilmScenarios();
  const scenario = scenarios.find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenarios.findIndex((candidate) => candidate.id === scenarioId) + 1, 102);
  assert.equal(scenario.film.runtime_mins, 168);
  assert.deepEqual(scenario.film.directors, ["Quentin Tarantino"]);
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama", "Mystery", "Thriller", "Western"]);
  assert.equal(scenario.scenario_type, "crime_thriller_production");

  const study = resolveCrimeNoirTransformationsFilmStudyMap(
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

test("The Hateful Eight receives exact winter, chamber mystery and Tarantino donors", () => {
  const profile = getCrimeNoirTransformationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getHatefulEightFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_fargo_1996",
      "scenario_the_maltese_falcon_1941",
      "scenario_true_romance_1993",
    ],
  );

  const choices = createCrimeNoirTransformationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("revisionist chamber western"));
  assert.ok(choices[0]?.label.includes("Ultra Panavision 70"));
  assert.ok(choices[0]?.label.includes("weather-responsive Telluride production"));
});

test("The Hateful Eight integration preserves established crime-noir profiles and choices", () => {
  for (const existingScenarioId of [
    "scenario_the_maltese_falcon_1941",
    "scenario_out_of_the_past_1947",
    "scenario_true_romance_1993",
    "scenario_fargo_1996",
    "scenario_nightcrawler_2014",
  ]) {
    const existingProfile = getCrimeNoirTransformationsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("Ultra Panavision 70"), false);

    const choices = createCrimeNoirTransformationsFilmHistoryChoices(existingProfile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
