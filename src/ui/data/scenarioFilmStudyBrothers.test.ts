import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getTheSavagesFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformanceTheSavagesCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getIndependentStorytellingProfileGroup } from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_brothers_2015";

test("Brothers resolves as a source-backed longitudinal family documentary", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Documentary", "Drama"]);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 12);
  assert.equal(study?.coverageSummary.mapped, 4);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Brothers receives exact archive, domestic-time and documentary-intimacy donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "family_performance_grief_power");

  assert.deepEqual(
    getTheSavagesFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_all_the_beauty_and_the_bloodshed_2022",
      "scenario_still_walking_2008",
      "scenario_paris_is_burning_1990",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("eight-year childhood-time chronicle"));
  assert.ok(choices[0]?.label.includes("450 hours of footage"));
  assert.ok(choices.slice(1).some((choice) => /family|archive|community/i.test(choice.label)));
});

test("Brothers integration preserves established family and documentary profiles", () => {
  for (const existingScenarioId of [
    "scenario_the_savages_2007",
    "scenario_blue_jasmine_2013",
    "scenario_45_years_2015",
    "scenario_still_walking_2008",
    "scenario_all_the_beauty_and_the_bloodshed_2022",
    "scenario_paris_is_burning_1990",
    "scenario_amy_2015",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("Markus and Lukas"), false);
    assert.equal(existingProfile.moment.includes("450 hours of footage"), false);
  }
});
