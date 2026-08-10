import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_terrified_2017";

function donorIds(id: string): readonly string[] {
  const profile = getIndependentStorytellingFilmHistoryProfile(id);
  assert.ok(profile, `Missing profile ${id}`);
  return getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId);
}

test("Terrified resolves as a source-backed connected-suburb paranormal production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 142);
  assert.equal(scenario.film.runtime_mins, 87);
  assert.deepEqual(scenario.film.directors, ["Demián Rugna"]);
  assert.deepEqual(scenario.film.genres, ["Horror"]);
  assert.equal(scenario.scenario_type, "horror_production");

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

test("Terrified receives exact spatial-horror and uncertainty donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "subjective_enclosure_performance");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_the_wailing_2016",
      "scenario_cure_1997",
      "scenario_barton_fink_1991",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const profileText = JSON.stringify(profile);
  assert.match(profileText, /Ciudad Jardín/);
  assert.match(profileText, /RED Epic Dragon/);
  assert.match(profileText, /Leica R/);
  assert.match(profileText, /6K/);
});

test("Terrified specialty routing preserves established subjective-enclosure donors", () => {
  assert.deepEqual(donorIds("scenario_blindness_2008"), [
    "scenario_safe_1995",
    "scenario_sound_of_metal_2019",
    "scenario_the_host_2006",
  ]);
  assert.deepEqual(donorIds("scenario_room_2015"), [
    "scenario_blindness_2008",
    "scenario_the_impossible_2012",
    "scenario_my_skinny_sister_2015",
  ]);
  assert.deepEqual(donorIds("scenario_nerve_2016"), [
    "scenario_the_game_1997",
    "scenario_elephant_2003",
    "scenario_being_john_malkovich_1999",
  ]);
  assert.deepEqual(donorIds("scenario_on_body_and_soul_2017"), [
    "scenario_anomalisa_2015",
    "scenario_3_iron_2004",
    "scenario_tropical_malady_2004",
  ]);
});
