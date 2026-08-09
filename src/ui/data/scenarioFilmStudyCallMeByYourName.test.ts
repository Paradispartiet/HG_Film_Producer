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

const scenarioId = "scenario_call_me_by_your_name_2017";

test("Call Me by Your Name resolves as a source-backed Northern Italian desire and memory system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 139);
  assert.equal(scenario.film.runtime_mins, 132);
  assert.deepEqual(scenario.film.directors, ["Luca Guadagnino"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

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

test("Call Me by Your Name receives exact desire, self-authorship and embodied coming-of-age donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "independent_desire_identity_authorship");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_pariah_2011",
      "scenario_the_souvenir_2019",
      "scenario_fish_tank_2009",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Call Me by Your Name integration does not enter existing generic donor pools", () => {
  const pariahProfile = getIndependentStorytellingFilmHistoryProfile("scenario_pariah_2011");
  assert.ok(pariahProfile);
  assert.deepEqual(
    getIndependentStorytellingDonors(pariahProfile).map((donor) => donor.scenarioId),
    [
      "scenario_fish_tank_2009",
      "scenario_poison_1991",
      "scenario_the_souvenir_2019",
    ],
  );
});
