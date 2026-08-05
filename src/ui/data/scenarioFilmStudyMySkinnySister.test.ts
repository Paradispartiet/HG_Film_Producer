import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getMommyFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformanceMommyCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getIndependentStorytellingProfileGroup } from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_my_skinny_sister_2015";

test("My Skinny Sister resolves as a source-backed child-centred sibling and body-care system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Drama"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(
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

test("My Skinny Sister receives exact youth-care, athletic-body and domestic-observation donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "family_performance_grief_power");

  assert.deepEqual(
    getMommyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_mommy_2014",
      "scenario_the_rider_2017",
      "scenario_still_walking_2008",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Swedish sibling-perspective body drama"));
  assert.ok(choices[0]?.label.includes("year-long search"));
});

test("My Skinny Sister integration preserves Mommy, Homesick and their established donors", () => {
  for (const existingScenarioId of [
    "scenario_mommy_2014",
    "scenario_homesick_2015",
    "scenario_the_rider_2017",
    "scenario_still_walking_2008",
    "scenario_secrets_and_lies_1996",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("year-long search and hundreds of auditions"), false);
  }

  const mommyProfile = getIndependentStorytellingFilmHistoryProfile("scenario_mommy_2014");
  assert.ok(mommyProfile);
  assert.deepEqual(
    getMommyFilmHistoryDonors(mommyProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_dancer_in_the_dark_2000",
      "scenario_elephant_2003",
      "scenario_secrets_and_lies_1996",
    ],
  );

  const homesickProfile = getIndependentStorytellingFilmHistoryProfile("scenario_homesick_2015");
  assert.ok(homesickProfile);
  assert.deepEqual(
    getMommyFilmHistoryDonors(homesickProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_secrets_and_lies_1996",
      "scenario_the_souvenir_2019",
      "scenario_scenes_from_a_marriage_1974",
    ],
  );
});
