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

const scenarioId = "scenario_tradgardsgatan_2017";

test("Trädgårdsgatan resolves as a source-backed collective Swedish family-memory drama", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 118);
  assert.equal(scenario.film.runtime_mins, 110);
  assert.deepEqual(scenario.film.directors, ["Olof Spaak"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 5);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 11);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);

  const profileText = [
    study?.historyProfile.period,
    study?.historyProfile.moment,
    study?.historyProfile.after,
    ...(study?.historyProfile.technicalHighlights.map((item) => item.note) ?? []),
  ].join(" ");
  assert.match(profileText, /Köpingebro/);
  assert.match(profileText, /Sofie Palage/);
  assert.match(profileText, /lived together|bodde|collective/i);
});

test("Trädgårdsgatan receives exact autobiographical-memory, family-truth and place-based donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "family_performance_grief_power");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_the_souvenir_2019",
      "scenario_secrets_and_lies_1996",
      "scenario_the_rider_2017",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Trädgårdsgatan specialty route preserves the existing Homesick donor sequence", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_homesick_2015");
  assert.ok(profile);
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_secrets_and_lies_1996",
      "scenario_the_souvenir_2019",
      "scenario_scenes_from_a_marriage_1974",
    ],
  );
});
