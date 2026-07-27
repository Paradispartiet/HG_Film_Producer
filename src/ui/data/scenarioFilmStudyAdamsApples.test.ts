import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createNordicMinimalistSocialSystemsFilmHistoryChoices,
  getNordicMinimalistSocialSystemsFilmHistoryProfile,
  resolveNordicMinimalistSocialSystemsFilmStudyMap,
} from "./scenarioFilmStudyNordicMinimalistSocialSystemsBatch.js";
import { getAdamsApplesFilmHistoryDonors } from "./scenarioFilmStudyNordicMinimalistAdamsApplesCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_adam_s_apples_2005";

test("Adam's Apples resolves as a source-backed Danish theological grotesque rehabilitation fable", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveNordicMinimalistSocialSystemsFilmStudyMap(
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

test("Adam's Apples receives dedicated donors without changing existing Nordic minimalist choices", () => {
  const profile = getNordicMinimalistSocialSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getAdamsApplesFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_songs_from_the_second_floor_2000",
      "scenario_kitchen_stories_2003",
      "scenario_the_man_without_a_past_2002",
    ],
  );

  const choices = createNordicMinimalistSocialSystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_the_match_factory_girl_1990",
    "scenario_songs_from_the_second_floor_2000",
    "scenario_the_man_without_a_past_2002",
    "scenario_oslo_august_31st_2011",
    "scenario_kitchen_stories_2003",
    "scenario_noi_the_albino_2003",
  ]) {
    const existingProfile = getNordicMinimalistSocialSystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    assert.equal(getAdamsApplesFilmHistoryDonors(existingProfile), undefined);
    const existingChoices = createNordicMinimalistSocialSystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("Book of Job")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("How Deep Is Your Love")), false);
  }
});
