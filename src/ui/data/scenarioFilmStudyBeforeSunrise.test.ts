import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getBeforeSunriseFilmHistoryDonors,
} from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunriseCatalog.js";
import {
  createFestivalUrbanIntimacySystemsFilmHistoryChoices,
  getFestivalUrbanIntimacySystemsFilmHistoryProfile,
  resolveFestivalUrbanIntimacySystemsFilmStudyMap,
} from "./scenarioFilmStudyFestivalUrbanIntimacySystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_before_sunrise_1995";

test("Before Sunrise resolves as a source-backed festival urban-intimacy system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveFestivalUrbanIntimacySystemsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 6);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Before Sunrise receives dedicated donors without entering existing urban-intimacy choices", () => {
  const profile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const donors = getBeforeSunriseFilmHistoryDonors(profile);
  assert.deepEqual(
    donors?.map((donor) => donor.scenarioId),
    [
      "scenario_mystery_train_1989",
      "scenario_scenes_from_a_marriage_1974",
      "scenario_vive_l_amour_1994",
    ],
  );

  const choices = createFestivalUrbanIntimacySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_pieta_2012",
    "scenario_blue_is_the_warmest_colour_2013",
    "scenario_black_coal_thin_ice_2014",
    "scenario_from_afar_2015",
  ]) {
    const existingProfile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createFestivalUrbanIntimacySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Vienna Film Financing Fund")), false);
  }
});
