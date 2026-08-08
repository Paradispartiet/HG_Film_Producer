import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getCafeSocietyFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsCafeSocietyCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_cafe_society_2016";

test("Café Society resolves as a source-backed 1930s Hollywood-New York constructed world", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 108);
  assert.equal(scenario.film.runtime_mins, 96);
  assert.deepEqual(scenario.film.directors, ["Woody Allen"]);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Drama", "Romance"]);
  assert.equal(scenario.scenario_type, "romantic_comedy_drama_production");

  const study = resolveConstructedWorldsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 2);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Café Society receives exact period-city, urban-romance and controlled-design donors", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getCafeSocietyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_midnight_in_paris_2011",
      "scenario_her_2013",
      "scenario_moonrise_kingdom_2012",
    ],
  );

  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("1930s Hollywood"));
  assert.ok(choices[0]?.label.includes("Vittorio Storaro"));
  assert.ok(choices[0]?.label.includes("jazz"));
  assert.ok(choices[0]?.feedback.includes("F65"));
  assert.ok(choices[0]?.feedback.includes("Loquasto"));
});

test("Café Society integration preserves established Constructed Worlds choices", () => {
  for (const existingScenarioId of [
    "scenario_groundhog_day_1993",
    "scenario_the_truman_show_1998",
    "scenario_forrest_gump_1994",
    "scenario_the_pianist_2002",
    "scenario_dogville_2003",
    "scenario_walle_2008",
    "scenario_hugo_2011",
    "scenario_midnight_in_paris_2011",
    "scenario_moonrise_kingdom_2012",
    "scenario_the_impossible_2012",
    "scenario_her_2013",
    "scenario_inside_out_2015",
    "scenario_land_of_mine_2015",
    "scenario_the_brand_new_testament_2015",
    "scenario_a_monster_calls_2016",
  ]) {
    const existingProfile = getConstructedWorldsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("Bobby Dorfman"), false);

    const choices = createConstructedWorldsFilmHistoryChoices(existingProfile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
