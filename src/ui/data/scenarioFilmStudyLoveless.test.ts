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

const scenarioId = "scenario_loveless_2017";

test("Loveless resolves as a source-backed family-breakdown and missing-child production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 125);
  assert.equal(scenario.film.runtime_mins, 127);
  assert.deepEqual(scenario.film.directors, ["Andrey Zvyagintsev"]);
  assert.deepEqual(scenario.film.genres, ["Drama"]);
  assert.equal(scenario.scenario_type, "family_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
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

test("Loveless receives exact family-performance grief-and-power donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "family_performance_grief_power");
  assert.deepEqual(getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId), [
    "scenario_winter_sleep_2014",
    "scenario_scenes_from_a_marriage_1973",
    "scenario_the_sons_room_2001",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Loveless integration preserves existing Winter Sleep donor behavior", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_winter_sleep_2014");
  assert.ok(profile);
  assert.ok(!getIndependentStorytellingDonors(profile).some((donor) => donor.scenarioId === scenarioId));
});
