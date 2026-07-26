import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getKitchenStoriesFilmHistoryDonors } from "./scenarioFilmStudyNordicMinimalistKitchenStoriesCatalog.js";
import {
  createNordicMinimalistSocialSystemsFilmHistoryChoices,
  getNordicMinimalistSocialSystemsFilmHistoryProfile,
  resolveNordicMinimalistSocialSystemsFilmStudyMap,
} from "./scenarioFilmStudyNordicMinimalistSocialSystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_kitchen_stories_2003";

test("Kitchen Stories resolves as a source-backed postwar home-research friendship system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveNordicMinimalistSocialSystemsFilmStudyMap(
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

test("Kitchen Stories receives dedicated Nordic observation donors without changing existing choices", () => {
  const profile = getNordicMinimalistSocialSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getKitchenStoriesFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_match_factory_girl_1990",
      "scenario_songs_from_the_second_floor_2000",
      "scenario_force_majeure_2014",
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
  ]) {
    const existingProfile = getNordicMinimalistSocialSystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createNordicMinimalistSocialSystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("observation chair")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("ban on contact")), false);
  }
});
