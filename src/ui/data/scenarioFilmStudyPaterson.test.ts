import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getDownByLawFilmHistoryDonors } from "./scenarioFilmStudyIndependentStorytellingDownByLawCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_paterson_2016";

test("Paterson resolves as a source-backed working-routine and poetry production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 111);
  assert.equal(scenario.film.runtime_mins, 118);
  assert.deepEqual(scenario.film.directors, ["Jim Jarmusch"]);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Drama", "Romance"]);
  assert.equal(scenario.scenario_type, "romantic_comedy_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 15);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 12);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 12);
});

test("Paterson receives exact Jarmusch, city-recurrence and everyday-observation donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getDownByLawFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_down_by_law_1986",
      "scenario_mystery_train_1989",
      "scenario_smoke_1995",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Paterson integration preserves Down by Law donor system", () => {
  const downByLawProfile = getIndependentStorytellingFilmHistoryProfile("scenario_down_by_law_1986");
  assert.ok(downByLawProfile);

  assert.deepEqual(
    getDownByLawFilmHistoryDonors(downByLawProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_mystery_train_1989",
      "scenario_slacker_1990",
      "scenario_smoke_1995",
    ],
  );
});
