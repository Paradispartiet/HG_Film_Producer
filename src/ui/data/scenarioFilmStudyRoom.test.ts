import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getBlindnessFilmHistoryDonors } from "./scenarioFilmStudySubjectiveEnclosureBlindnessCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getIndependentStorytellingProfileGroup } from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_room_2015";

test("Room resolves as a source-backed child-perspective captivity and recovery system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Drama", "Thriller"]);
  assert.equal(scenario.scenario_type, "crime_thriller_production");

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
});

test("Room receives exact enclosure, family-survival and child-viewpoint donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "subjective_enclosure_performance");

  assert.deepEqual(
    getBlindnessFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_blindness_2008",
      "scenario_the_impossible_2012",
      "scenario_my_skinny_sister_2015",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Irish-Canadian literary adaptation"));
  assert.ok(choices[0]?.label.includes("real-size Room"));
  assert.ok(choices[0]?.label.includes("lens physically inside"));
});

test("Room integration preserves Blindness and its established donors", () => {
  for (const existingScenarioId of [
    "scenario_blindness_2008",
    "scenario_safe_1995",
    "scenario_sound_of_metal_2019",
    "scenario_the_host_2006",
    "scenario_the_impossible_2012",
    "scenario_my_skinny_sister_2015",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("real-size Room"), false);
  }

  const blindnessProfile = getIndependentStorytellingFilmHistoryProfile("scenario_blindness_2008");
  assert.ok(blindnessProfile);
  assert.deepEqual(
    getBlindnessFilmHistoryDonors(blindnessProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_safe_1995",
      "scenario_sound_of_metal_2019",
      "scenario_the_host_2006",
    ],
  );
});
