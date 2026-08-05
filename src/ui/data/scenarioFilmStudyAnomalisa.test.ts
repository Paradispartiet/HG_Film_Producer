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
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_anomalisa_2015";

test("Anomalisa resolves as a source-backed adult stop-motion subjective-enclosure case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Animation", "Comedy", "Drama", "Romance"]);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 15);
  assert.equal(study?.coverageSummary.mapped, 1);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Anomalisa receives exact identity, hotel-enclosure and nocturnal-subjectivity donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "subjective_enclosure_performance");

  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_being_john_malkovich_1999",
      "scenario_barton_fink_1991",
      "scenario_eyes_wide_shut_1999",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("crowdfunded adult stop-motion"));
  assert.ok(choices[0]?.label.includes("3D-printed gypsum"));
  assert.ok(choices[1]?.feedback.includes("subjective-enclosure"));
  assert.ok(choices[2]?.feedback.includes("enclosure"));
  assert.equal(choices.some((choice) => choice.feedback.includes("seven-and-a-half floor")), false);
});

test("Anomalisa integration preserves existing subjective-enclosure profiles", () => {
  for (const existingScenarioId of [
    "scenario_being_john_malkovich_1999",
    "scenario_barton_fink_1991",
    "scenario_eyes_wide_shut_1999",
    "scenario_in_the_house_2012",
    "scenario_amy_2015",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("Canon 7D"), false);
    assert.equal(existingProfile.moment.includes("Tom Noonan's repeated voice"), false);
    assert.equal(existingProfile.moment.includes("118,089"), false);
  }
});
