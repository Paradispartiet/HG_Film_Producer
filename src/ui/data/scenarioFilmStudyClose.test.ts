import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { createIndependentStorytellingFilmHistoryChoices, resolveIndependentStorytellingFilmStudyMap } from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getPriorityIndieFinalDonors, getPriorityIndieFinalProfile } from "./scenarioFilmStudyPriorityIndieFinalCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_close_2022";

test("Close resolves as a source-backed body-centred coming-of-age drama", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.list_id, "manual_italy_france_germany_benelux_expansion_2026");
  assert.equal(scenario.status, "manual_italy_france_germany_benelux_case_needs_source_verification");
  assert.equal(scenario.film.title, "Close");
  assert.equal(scenario.film.year, 2022);
  assert.equal(scenario.film.runtime_mins, 0);
  assert.deepEqual(scenario.film.directors, ["Lukas Dhont"]);
  assert.deepEqual(scenario.film.genres, ["Drama"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 5);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 6);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 6);
  const text = [study?.historyProfile?.period, study?.historyProfile?.moment, study?.historyProfile?.after].join(" ");
  assert.match(text, /bodily|body/i);
  assert.match(text, /first-time/i);
  assert.match(text, /110 hours|seven-month/i);
});

test("Close receives exact adolescent-pressure, young-performance and reciprocal-gaze donors", () => {
  const profile = getPriorityIndieFinalProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getPriorityIndieFinalDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_psychobitch_2019",
    "scenario_capernaum_2018",
    "scenario_portrait_of_a_lady_on_fire_2019",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("Close specialty route does not enter the general priority donor pool", () => {
  const generic = getPriorityIndieFinalProfile("scenario_ghost_world_2001");
  assert.ok(generic);
  assert.ok(!getPriorityIndieFinalDonors(generic)?.some((donor) => donor.scenarioId === scenarioId));
});
