import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getBeforeSunsetFilmHistoryDonors } from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunsetCatalog.js";
import {
  createFestivalUrbanIntimacySystemsFilmHistoryChoices,
  getFestivalUrbanIntimacySystemsFilmHistoryProfile,
  resolveFestivalUrbanIntimacySystemsFilmStudyMap,
} from "./scenarioFilmStudyFestivalUrbanIntimacySystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_before_sunset_2004";

test("Before Sunset resolves as a source-backed Paris real-time reunion dialogue system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveFestivalUrbanIntimacySystemsFilmStudyMap(
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

test("Before Sunset receives dedicated continuity, verbal-intimacy and urban-duration donors without changing existing choices", () => {
  const profile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getBeforeSunsetFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_before_sunrise_1995",
      "scenario_scenes_from_a_marriage_1974",
      "scenario_vive_l_amour_1994",
    ],
  );

  const choices = createFestivalUrbanIntimacySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_before_sunrise_1995",
    "scenario_pieta_2012",
    "scenario_blue_is_the_warmest_colour_2013",
    "scenario_black_coal_thin_ice_2014",
    "scenario_from_afar_2015",
  ]) {
    const existingProfile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createFestivalUrbanIntimacySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("fifteen-day Paris production")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("departing-flight deadline")), false);
  }
});
