import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getLandOfMineFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsLandOfMineCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_land_of_mine_2015";

test("Land of Mine resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.equal(scenario.film.title, "Land of Mine");
  assert.equal(scenario.film.year, 2015);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveConstructedWorldsFilmStudyMap(scenario, brief);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual([
    study?.coverageSummary.sourceVerified,
    study?.coverageSummary.mapped,
    study?.coverageSummary.notCentral,
  ], [13, 3, 1]);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Land of Mine receives its exact isolated donor set", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getLandOfMineFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_the_pianist_2002",
    "scenario_the_impossible_2012",
    "scenario_the_battle_of_algiers_1966",
  ]);
  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("Oksbøl coast"));
  assert.ok(choices[1]?.feedback.includes("mine-clearing procedure"));
  assert.ok(choices[2]?.feedback.includes("controlled explosions"));
});

test("existing constructed-world choices do not receive Land of Mine feedback", () => {
  const existingIds = [
    "scenario_the_pianist_2002",
    "scenario_the_impossible_2012",
    "scenario_the_battle_of_algiers_1966",
    "scenario_inside_out_2015",
  ];
  const markers = [
    "Oksbøl coast",
    "mine-clearing procedure",
    "controlled explosions",
  ];
  for (const existingId of existingIds) {
    const profile = getConstructedWorldsFilmHistoryProfile(existingId);
    if (!profile) continue;
    const choices = createConstructedWorldsFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
  }
});
