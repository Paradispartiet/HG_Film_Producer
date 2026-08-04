import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getAmyFilmHistoryDonors } from "./scenarioFilmStudyMusicDocumentaryAmyCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_amy_2015";

test("Amy resolves as a source-backed archival music and media-pressure documentary", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Documentary", "Biography", "Music"]);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 5);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Amy receives exact music-archive, artist-archive and community-performance donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const expectedDonors = [
    "scenario_searching_for_sugar_man_2012",
    "scenario_all_the_beauty_and_the_bloodshed_2022",
    "scenario_paris_is_burning_1990",
  ];

  assert.deepEqual(
    getAmyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    expectedDonors,
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("archival music documentary"));
  assert.ok(choices[0]?.feedback.includes("off-screen witness testimony"));
  assert.ok(choices[1]?.label.includes("music documentary"));
  assert.ok(choices[2]?.label.includes("artist"));
});

test("Amy integration preserves the existing archive and music-documentary profiles", () => {
  for (const existingScenarioId of [
    "scenario_searching_for_sugar_man_2012",
    "scenario_all_the_beauty_and_the_bloodshed_2022",
    "scenario_paris_is_burning_1990",
    "scenario_american_splendor_2003",
    "scenario_in_the_house_2012",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("Amy Winehouse"), false);
    assert.equal(existingProfile.moment.includes("lyric captions"), false);
  }
});
