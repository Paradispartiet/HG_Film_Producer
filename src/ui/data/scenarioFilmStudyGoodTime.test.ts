import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_good_time_2017";

test("Good Time resolves as a source-backed New York independent crime-pressure system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 117);
  assert.equal(scenario.film.runtime_mins, 102);
  assert.deepEqual(scenario.film.directors, ["Benny Safdie", "Josh Safdie"]);
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama", "Thriller"]);
  assert.equal(scenario.scenario_type, "crime_thriller_production");

  const study = resolveIndependentStorytellingFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
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

test("Good Time receives exact independent crime-resourcefulness donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "american_independent_genre_resourcefulness");
  assert.deepEqual(getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId), [
    "scenario_blood_simple_1984",
    "scenario_reservoir_dogs_1992",
    "scenario_el_mariachi_1992",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Good Time integration preserves existing Blood Simple donor behavior", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_blood_simple_1984");
  assert.ok(profile);
  assert.ok(!getIndependentStorytellingDonors(profile).some((donor) => donor.scenarioId === scenarioId));
});
