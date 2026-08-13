import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { createIndependentStorytellingFilmHistoryChoices, resolveIndependentStorytellingFilmStudyMap } from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getPriorityIndieFinalDonors, getPriorityIndieFinalProfile } from "./scenarioFilmStudyPriorityIndieFinalCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_portrait_of_a_lady_on_fire_2019";

test("Portrait of a Lady on Fire resolves as a source-backed reciprocal-gaze period romance", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.list_id, "manual_italy_france_germany_benelux_expansion_2026");
  assert.equal(scenario.film.title, "Portrait of a Lady on Fire");
  assert.equal(scenario.film.original_title, "Portrait de la jeune fille en feu");
  assert.equal(scenario.film.year, 2019);
  assert.equal(scenario.film.runtime_mins, 0);
  assert.deepEqual(scenario.film.directors, ["Céline Sciamma"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance"]);
  assert.equal(scenario.scenario_type, "romance_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 6);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 6);
  const text = [study?.historyProfile?.period, study?.historyProfile?.moment, study?.historyProfile?.after].join(" ");
  assert.match(text, /MONSTRO|7K|large-format/i);
  assert.match(text, /music|score/i);
  assert.match(text, /Brittany|château/i);
});

test("Portrait of a Lady on Fire receives exact composition, memory and sound donors", () => {
  const profile = getPriorityIndieFinalProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getPriorityIndieFinalDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_columbus_2017",
    "scenario_still_walking_2008",
    "scenario_sound_of_metal_2019",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("Portrait of a Lady on Fire specialty route does not enter the general priority-indie donor pool", () => {
  const profile = getPriorityIndieFinalProfile("scenario_ghost_world_2001");
  assert.ok(profile);
  assert.ok(!getPriorityIndieFinalDonors(profile)?.some((donor) => donor.scenarioId === scenarioId));
});
