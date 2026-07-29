import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createCrimeNoirTransformationsFilmHistoryChoices,
  getCrimeNoirTransformationsFilmHistoryProfile,
  resolveCrimeNoirTransformationsFilmStudyMap,
} from "./scenarioFilmStudyCrimeNoirTransformationsBatch.js";
import { getNightcrawlerFilmHistoryDonors } from "./scenarioFilmStudyCrimeNoirNightcrawlerCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_nightcrawler_2014";

test("Nightcrawler resolves as a source-backed hybrid-format Los Angeles crime-image market system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama", "Thriller"]);

  const study = resolveCrimeNoirTransformationsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 15);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Nightcrawler receives exact nocturnal antihero, media-event and researched urban-crime donors", () => {
  const profile = getCrimeNoirTransformationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const expectedDonors = [
    "scenario_taxi_driver_1976",
    "scenario_dog_day_afternoon_1975",
    "scenario_clockers_1995",
  ];

  assert.deepEqual(
    getNightcrawlerFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    expectedDonors,
  );

  const choices = createCrimeNoirTransformationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Alexa/35 mm"));
  assert.ok(choices[0]?.label.includes("local-news"));
});

test("Nightcrawler integration preserves existing crime and noir profiles", () => {
  for (const existingScenarioId of [
    "scenario_the_maltese_falcon_1941",
    "scenario_true_romance_1993",
    "scenario_clockers_1995",
    "scenario_fargo_1996",
    "scenario_mesrine_killer_instinct_2008",
    "scenario_mesrine_public_enemy_no_1_2008",
    "scenario_a_prophet_2009",
  ]) {
    const existingProfile = getCrimeNoirTransformationsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("Howard Raishbrook"), false);
    assert.equal(existingProfile.moment.includes("Alexa XT"), false);
  }
});
