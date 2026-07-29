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
import { getMommyFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformanceMommyCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_mommy_2014";

test("Mommy resolves as a source-backed Quebec square-frame family and pop-music system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Drama"]);

  const study = resolveIndependentStorytellingFilmStudyMap(
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
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "family_performance_grief_power");
});

test("Mommy receives exact music-release, square-youth and family-performance donors without changing existing profiles", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const expectedDonors = [
    "scenario_dancer_in_the_dark_2000",
    "scenario_elephant_2003",
    "scenario_secrets_and_lies_1996",
  ];

  assert.deepEqual(
    getMommyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
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
  assert.ok(choices[0]?.label.includes("1:1"));
  assert.ok(choices[0]?.label.includes("35 mm"));

  for (const existingScenarioId of [
    "scenario_dancer_in_the_dark_2000",
    "scenario_elephant_2003",
    "scenario_secrets_and_lies_1996",
    "scenario_the_sons_room_2001",
    "scenario_winter_sleep_2014",
    "scenario_the_savages_2007",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("College Boy"), false);
    assert.equal(existingProfile.moment.includes("two controlled expansions"), false);
  }
});
