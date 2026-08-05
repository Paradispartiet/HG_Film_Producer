import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getLastLifeInTheUniverseFilmHistoryDonors } from "./scenarioFilmStudyAsianTransnationalLastLifeUniverseCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getIndependentStorytellingProfileGroup } from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_dheepan_2015";

test("Dheepan resolves as a source-backed Tamil false-family refugee and siege system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Drama", "Crime"]);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Dheepan receives exact social realism, territorial violence and embodied survival donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "asian_transnational_urban_identity");

  assert.deepEqual(
    getLastLifeInTheUniverseFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_child_2005",
      "scenario_gran_torino_2008",
      "scenario_rosetta_1999",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Tamil-language refugee cinema"));
  assert.ok(choices[0]?.label.includes("Sony F55"));
  assert.ok(choices.slice(1).some((choice) => choice.label.includes("Seraing") || choice.label.includes("Detroit") || choice.label.includes("labour")));
});

test("Dheepan integration preserves established transnational and social-realist profiles", () => {
  for (const existingScenarioId of [
    "scenario_last_life_in_the_universe_2003",
    "scenario_happy_together_1997",
    "scenario_cyclo_1995",
    "scenario_return_to_seoul_2022",
    "scenario_the_child_2005",
    "scenario_gran_torino_2008",
    "scenario_rosetta_1999",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("borrow the papers of a dead family"), false);
    assert.equal(existingProfile.moment.includes("Sony F55"), false);
  }
});
