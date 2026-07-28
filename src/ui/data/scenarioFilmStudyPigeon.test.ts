import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createNordicMinimalistSocialSystemsFilmHistoryChoices,
  getNordicMinimalistSocialSystemsFilmHistoryProfile,
  resolveNordicMinimalistSocialSystemsFilmStudyMap,
} from "./scenarioFilmStudyNordicMinimalistSocialSystemsBatch.js";
import { getAPigeonSatFilmHistoryDonors } from "./scenarioFilmStudyNordicMinimalistPigeonCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014";

test("A Pigeon Sat resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Drama", "Fantasy"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveNordicMinimalistSocialSystemsFilmStudyMap(scenario, brief);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual([
    study?.coverageSummary.sourceVerified,
    study?.coverageSummary.mapped,
    study?.coverageSummary.notCentral,
  ], [14, 2, 1]);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("A Pigeon Sat receives its exact studio-tableau donor set", () => {
  const profile = getNordicMinimalistSocialSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getAPigeonSatFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_songs_from_the_second_floor_2000",
    "scenario_playtime_1967",
    "scenario_kitchen_stories_2003",
  ]);
  const choices = createNordicMinimalistSocialSystemsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("final Living Trilogy chapter"));
  assert.ok(choices[1]?.feedback.includes("hand-built Studio 24 hyperreality"));
  assert.ok(choices[2]?.feedback.includes("Living Trilogy completion"));
  assert.ok(choices[1]?.label.includes("four-year studio production"));
  assert.ok(choices[2]?.label.includes("Tativille production"));
});

test("existing Nordic minimalist choices do not receive A Pigeon Sat feedback", () => {
  const existingIds = [
    "scenario_songs_from_the_second_floor_2000",
    "scenario_the_match_factory_girl_1990",
    "scenario_kitchen_stories_2003",
    "scenario_noi_the_albino_2003",
    "scenario_adam_s_apples_2005",
  ];
  const markers = [
    "final Living Trilogy chapter",
    "hand-built Studio 24 hyperreality",
    "Living Trilogy completion",
  ];
  for (const existingId of existingIds) {
    const profile = getNordicMinimalistSocialSystemsFilmHistoryProfile(existingId);
    assert.ok(profile);
    const choices = createNordicMinimalistSocialSystemsFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
  }
});
