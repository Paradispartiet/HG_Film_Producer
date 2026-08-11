import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createModernNordicBehaviorSystemsFilmHistoryChoices,
  getModernNordicBehaviorSystemsFilmHistoryProfile,
  resolveModernNordicBehaviorSystemsFilmStudyMap,
} from "./scenarioFilmStudyModernNordicBehaviorSystemsBatch.js";
import { getASomewhatGentleManFilmHistoryDonors } from "./scenarioFilmStudyModernNordicBehaviorSomewhatGentleManCatalog.js";
import { getTheSquareFilmHistoryDonors } from "./scenarioFilmStudyModernNordicBehaviorTheSquareCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_square_2017";

function donorIds(id: string): readonly string[] {
  const profile = getModernNordicBehaviorSystemsFilmHistoryProfile(id);
  assert.ok(profile, `Missing Modern Nordic profile ${id}`);
  const donors = id === scenarioId
    ? getTheSquareFilmHistoryDonors(profile)
    : getASomewhatGentleManFilmHistoryDonors(profile);
  assert.ok(donors, `Missing specialty donors ${id}`);
  return donors.map((donor) => donor.scenarioId);
}

test("The Square resolves as a source-backed institutional behavioural satire", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 122);
  assert.equal(scenario.film.runtime_mins, 151);
  assert.deepEqual(scenario.film.directors, ["Ruben Östlund"]);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Drama"]);
  assert.equal(scenario.scenario_type, "character_comedy_production");

  const study = resolveModernNordicBehaviorSystemsFilmStudyMap(
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
  assert.equal(study?.verification?.sources.length, 12);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 12);
});

test("The Square receives exact social-behaviour and institutional-comedy donors", () => {
  const profile = getModernNordicBehaviorSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(donorIds(scenarioId), [
    "scenario_force_majeure_2014",
    "scenario_toni_erdmann_2016",
    "scenario_triangle_of_sadness_2022",
  ]);

  const choices = createModernNordicBehaviorSystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const profileText = JSON.stringify(profile);
  assert.match(profileText, /Värnamo/);
  assert.match(profileText, /ARRI ALEXA/);
  assert.match(profileText, /1\.85:1/);
  assert.match(profileText, /Terry Notary/);
});

test("The Square specialty preserves the existing A Somewhat Gentle Man donor sequence", () => {
  assert.deepEqual(donorIds("scenario_a_somewhat_gentle_man_2010"), [
    "scenario_force_majeure_2014",
    "scenario_another_round_2020",
    "scenario_the_worst_person_in_the_world_2021",
  ]);
});
