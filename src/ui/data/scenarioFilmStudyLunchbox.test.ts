import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createFestivalUrbanIntimacySystemsFilmHistoryChoices,
  getFestivalUrbanIntimacySystemsFilmHistoryProfile,
  resolveFestivalUrbanIntimacySystemsFilmStudyMap,
} from "./scenarioFilmStudyFestivalUrbanIntimacySystemsBatch.js";
import { getTheLunchboxFilmHistoryDonors } from "./scenarioFilmStudyFestivalUrbanIntimacyLunchboxCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_lunchbox_2013";

test("The Lunchbox resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveFestivalUrbanIntimacySystemsFilmStudyMap(scenario, brief);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual([
    study?.coverageSummary.sourceVerified,
    study?.coverageSummary.mapped,
    study?.coverageSummary.notCentral,
  ], [14, 2, 1]);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("The Lunchbox receives its exact epistolary urban-intimacy donor set", () => {
  const profile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getTheLunchboxFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_before_sunset_2004",
    "scenario_vive_l_amour_1994",
    "scenario_amelie_2001",
  ]);
  const choices = createFestivalUrbanIntimacySystemsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("Batra's dabbawala research"));
  assert.ok(choices[1]?.feedback.includes("food preparation, delivery labour, letters"));
  assert.ok(choices[2]?.feedback.includes("anonymous urban intervention"));
  assert.ok(choices[1]?.label.includes("Paris"));
  assert.ok(choices[2]?.label.includes("Taiwan"));
});

test("existing urban-intimacy choices do not receive The Lunchbox feedback", () => {
  const existingIds = [
    "scenario_before_sunrise_1995",
    "scenario_before_sunset_2004",
    "scenario_pieta_2012",
    "scenario_blue_is_the_warmest_colour_2013",
    "scenario_from_afar_2015",
  ];
  const markers = [
    "Batra's dabbawala research",
    "food preparation, delivery labour, letters",
    "anonymous urban intervention",
  ];
  for (const existingId of existingIds) {
    const profile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(existingId);
    assert.ok(profile);
    const choices = createFestivalUrbanIntimacySystemsFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
  }
});
