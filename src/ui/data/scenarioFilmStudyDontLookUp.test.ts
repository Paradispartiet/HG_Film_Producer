import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { createIndependentStorytellingFilmHistoryChoices, resolveIndependentStorytellingFilmStudyMap } from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getPriorityIndieFinalDonors, getPriorityIndieFinalProfile } from "./scenarioFilmStudyPriorityIndieFinalCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_don_t_look_up_2021";

test("Don't Look Up resolves as a source-backed political-media apocalypse satire", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 158);
  assert.equal(scenario.source.list_id, "imdb_ls000064637");
  assert.equal(scenario.status, "imported_seed_needs_film_specific_design");
  assert.equal(scenario.film.title, "Don't Look Up");
  assert.equal(scenario.film.year, 2021);
  assert.equal(scenario.film.runtime_mins, 138);
  assert.deepEqual(scenario.film.directors, ["Adam McKay"]);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Drama", "Sci-Fi"]);
  assert.equal(scenario.scenario_type, "period_production_strategy");

  const study = resolveIndependentStorytellingFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 5);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 5);
  const text = [study?.historyProfile?.period, study?.historyProfile?.moment, study?.historyProfile?.after].join(" ");
  assert.match(text, /political-thriller|political satire/i);
  assert.match(text, /35mm/i);
  assert.match(text, /montage/i);
});

test("Don't Look Up receives exact satire, ensemble and mediated-crisis donors", () => {
  const profile = getPriorityIndieFinalProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getPriorityIndieFinalDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_barton_fink_1991",
    "scenario_once_upon_a_time_in_hollywood_2019",
    "scenario_the_guilty_2018",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("Don't Look Up specialty route does not enter the general priority donor pool", () => {
  const generic = getPriorityIndieFinalProfile("scenario_ghost_world_2001");
  assert.ok(generic);
  assert.ok(!getPriorityIndieFinalDonors(generic)?.some((donor) => donor.scenarioId === scenarioId));
});
