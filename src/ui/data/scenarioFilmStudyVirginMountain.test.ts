import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createNordicMinimalistSocialSystemsFilmHistoryChoices,
  getNordicMinimalistSocialSystemsFilmHistoryProfile,
  resolveNordicMinimalistSocialSystemsFilmStudyMap,
} from "./scenarioFilmStudyNordicMinimalistSocialSystemsBatch.js";
import { getVirginMountainFilmHistoryDonors } from "./scenarioFilmStudyNordicMinimalistVirginMountainCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_virgin_mountain_2015";

test("Virgin Mountain resolves as a source-backed actor-specific Icelandic outsider system", () => {
  const scenarios = getClassicFilmScenarios();
  const scenario = scenarios.find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenarios.findIndex((candidate) => candidate.id === scenarioId) + 1, 120);
  assert.equal(scenario.film.runtime_mins, 94);
  assert.deepEqual(scenario.film.directors, ["Dagur Kári"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

  const study = resolveNordicMinimalistSocialSystemsFilmStudyMap(
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

test("Virgin Mountain receives exact Icelandic outsider, adult renewal and male-solitude donors", () => {
  const profile = getNordicMinimalistSocialSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getVirginMountainFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_noi_the_albino_2003",
      "scenario_the_man_without_a_past_2002",
      "scenario_kitchen_stories_2003",
    ],
  );

  const choices = createNordicMinimalistSocialSystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Gunnar Jónsson"));
  assert.ok(choices[0]?.label.includes("Icelandic-Danish"));
  assert.ok(choices[0]?.label.includes("year-long"));
});

test("Virgin Mountain integration preserves established Nordic-minimalist profiles and choices", () => {
  for (const existingScenarioId of [
    "scenario_the_match_factory_girl_1990",
    "scenario_songs_from_the_second_floor_2000",
    "scenario_the_man_without_a_past_2002",
    "scenario_kitchen_stories_2003",
    "scenario_noi_the_albino_2003",
    "scenario_adam_s_apples_2005",
    "scenario_oslo_august_31st_2011",
    "scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014",
  ]) {
    const existingProfile = getNordicMinimalistSocialSystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("year-long search for the ending"), false);

    const choices = createNordicMinimalistSocialSystemsFilmHistoryChoices(existingProfile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
