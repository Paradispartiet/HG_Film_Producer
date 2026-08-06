import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getBrandNewTestamentFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsBrandNewTestamentCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_brand_new_testament_2015";

test("The Brand New Testament resolves as a source-backed child-led Brussels constructed world", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Fantasy"]);
  assert.equal(scenario.scenario_type, "comedy_production");

  const study = resolveConstructedWorldsFilmStudyMap(
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
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("The Brand New Testament receives exact absurdist, theatrical and child-world donors", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getBrandNewTestamentFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_brazil_1985",
      "scenario_dogville_2003",
      "scenario_moonrise_kingdom_2012",
    ],
  );

  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Belgian-French-Luxembourg absurdist fantasy comedy"));
  assert.ok(choices[0]?.label.includes("frontal church-like symmetry"));
  assert.ok(choices[0]?.label.includes("Sony F65/F55"));
});

test("The Brand New Testament integration preserves established constructed-world profiles and choices", () => {
  for (const existingScenarioId of [
    "scenario_brazil_1985",
    "scenario_dogville_2003",
    "scenario_moonrise_kingdom_2012",
    "scenario_her_2013",
    "scenario_inside_out_2015",
  ]) {
    const existingProfile = getConstructedWorldsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("six new apostles"), false);

    const choices = createConstructedWorldsFilmHistoryChoices(existingProfile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});
