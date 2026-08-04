import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import {
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import { getFortyFiveYearsFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformance45YearsCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_45_years_2015";

test("45 Years resolves as a source-backed British 35 mm marriage-memory chamber system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance"]);

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
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "family_performance_grief_power");
});

test("45 Years receives exact marriage, domestic-memory and bereavement-routine donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const expectedDonors = [
    "scenario_scenes_from_a_marriage_1974",
    "scenario_still_walking_2008",
    "scenario_the_sons_room_2001",
  ];

  assert.deepEqual(
    getFortyFiveYearsFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    expectedDonors,
  );
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    expectedDonors,
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("35 mm"));
  assert.ok(choices[0]?.label.includes("marriage"));
});

test("45 Years integration preserves existing delegated family profiles", () => {
  for (const existingScenarioId of [
    "scenario_the_savages_2007",
    "scenario_blue_jasmine_2013",
    "scenario_scenes_from_a_marriage_1974",
    "scenario_secrets_and_lies_1996",
    "scenario_dancer_in_the_dark_2000",
    "scenario_the_sons_room_2001",
    "scenario_winter_sleep_2014",
    "scenario_mommy_2014",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("anniversary countdown"), false);
    assert.equal(existingProfile.moment.includes("attic slides"), false);
  }
});
