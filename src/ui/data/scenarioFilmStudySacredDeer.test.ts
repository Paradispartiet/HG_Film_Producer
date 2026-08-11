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

const scenarioId = "scenario_the_killing_of_a_sacred_deer_2017";

function donorIds(id: string): readonly string[] {
  const profile = getIndependentStorytellingFilmHistoryProfile(id);
  assert.ok(profile, `Missing profile ${id}`);
  return getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId);
}

test("The Killing of a Sacred Deer resolves as a source-backed clinical-family sacrifice system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 151);
  assert.equal(scenario.film.runtime_mins, 121);
  assert.deepEqual(scenario.film.directors, ["Yorgos Lanthimos"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Horror", "Mystery", "Thriller"]);
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
  assert.equal(study?.verification?.sources.length, 12);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 12);
});

test("The Killing of a Sacred Deer receives exact ritual, clinical-ambiguity and family-curse donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "subjective_enclosure_performance");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_eyes_wide_shut_1999",
      "scenario_cure_1997",
      "scenario_the_wailing_2016",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const profileText = JSON.stringify(profile);
  assert.match(profileText, /Cincinnati/);
  assert.match(profileText, /35 mm/);
  assert.match(profileText, /10 mm/);
  assert.match(profileText, /Iphigenia/);
});

test("Sacred Deer specialty routing preserves the existing Terrified donor sequence", () => {
  assert.deepEqual(donorIds("scenario_terrified_2017"), [
    "scenario_the_wailing_2016",
    "scenario_cure_1997",
    "scenario_barton_fink_1991",
  ]);
});
