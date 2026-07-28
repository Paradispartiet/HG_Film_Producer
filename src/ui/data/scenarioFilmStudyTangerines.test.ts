import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createBalkanWarInstitutionSystemsFilmHistoryChoices,
  getBalkanWarInstitutionSystemsFilmHistoryProfile,
  resolveBalkanWarInstitutionSystemsFilmStudyMap,
} from "./scenarioFilmStudyBalkanWarInstitutionSystemsBatch.js";
import { getTangerinesFilmHistoryDonors } from "./scenarioFilmStudyBalkanWarInstitutionTangerines.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_tangerines_2013";

test("Tangerines resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Drama", "War"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveBalkanWarInstitutionSystemsFilmStudyMap(scenario, brief);
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

test("Tangerines receives its exact contained-war donor set", () => {
  const profile = getBalkanWarInstitutionSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getTangerinesFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_no_mans_land_2001",
    "scenario_before_the_rain_1994",
    "scenario_quo_vadis_aida_2020",
  ]);
  const choices = createBalkanWarInstitutionSystemsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("rapidly written shelter screenplay"));
  assert.ok(choices[1]?.feedback.includes("one civilian host"));
  assert.ok(choices[2]?.feedback.includes("Estonian-settler history"));
  assert.ok(choices[1]?.label.includes("contained battlefield drama"));
  assert.ok(choices[2]?.label.includes("circular war narrative"));
});

test("existing Balkan war choices do not receive Tangerines feedback", () => {
  const existingIds = [
    "scenario_before_the_rain_1994",
    "scenario_underground_1995",
    "scenario_no_mans_land_2001",
    "scenario_quo_vadis_aida_2020",
  ];
  const markers = [
    "rapidly written shelter screenplay",
    "one civilian host",
    "Estonian-settler history",
  ];
  for (const existingId of existingIds) {
    const profile = getBalkanWarInstitutionSystemsFilmHistoryProfile(existingId);
    assert.ok(profile);
    const choices = createBalkanWarInstitutionSystemsFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
  }
});
