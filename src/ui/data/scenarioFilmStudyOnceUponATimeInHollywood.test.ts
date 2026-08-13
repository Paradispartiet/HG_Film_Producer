import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveIndependentStorytellingFilmStudyMap } from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getPriorityIndieFinalDonors, getPriorityIndieFinalProfile } from "./scenarioFilmStudyPriorityIndieFinalCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_once_upon_a_time_in_hollywood_2019";

test("2019 Hollywood case resolves as a source-backed period production", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.equal(scenario.source.position, 156);
  assert.equal(scenario.film.year, 2019);
  assert.equal(scenario.film.runtime_mins, 161);
  assert.equal(scenario.scenario_type, "character_comedy_production");
  const study = resolveIndependentStorytellingFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.sources.length, 6);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 6);
  const profile = getPriorityIndieFinalProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getPriorityIndieFinalDonors(profile)?.length, 3);
});

test("2019 Hollywood specialty route stays outside the general donor pool", () => {
  const profile = getPriorityIndieFinalProfile("scenario_ghost_world_2001");
  assert.ok(profile);
  assert.ok(!getPriorityIndieFinalDonors(profile)?.some((donor) => donor.scenarioId === scenarioId));
});