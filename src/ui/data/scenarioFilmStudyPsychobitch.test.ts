import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { createIndependentStorytellingFilmHistoryChoices, resolveIndependentStorytellingFilmStudyMap } from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getPriorityIndieFinalDonors, getPriorityIndieFinalProfile } from "./scenarioFilmStudyPriorityIndieFinalCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_psychobitch_2019";

test("Psychobitch resolves as a source-backed Gjøvik youth-pressure drama", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 146);
  assert.equal(scenario.film.title, "Psychobitch");
  assert.equal(scenario.film.year, 2019);
  assert.equal(scenario.film.runtime_mins, 109);
  assert.deepEqual(scenario.film.directors, ["Martin Lund"]);
  assert.deepEqual(scenario.film.genres, ["Drama"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 8);
  assert.equal(study?.coverageSummary.mapped, 8);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 6);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 6);
  const text = [study?.historyProfile?.period, study?.historyProfile?.moment, study?.historyProfile?.after].join(" ");
  assert.match(text, /Generation Performance|conformity/i);
  assert.match(text, /Gjøvik/i);
  assert.match(text, /snow/i);
});

test("Psychobitch receives exact outsider, place and youth-pressure donors", () => {
  const profile = getPriorityIndieFinalProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getPriorityIndieFinalDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_ghost_world_2001",
    "scenario_columbus_2017",
    "scenario_capernaum_2018",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("Psychobitch specialty route does not enter the general priority-indie donor pool", () => {
  const profile = getPriorityIndieFinalProfile("scenario_ghost_world_2001");
  assert.ok(profile);
  assert.ok(!getPriorityIndieFinalDonors(profile)?.some((donor) => donor.scenarioId === scenarioId));
});
