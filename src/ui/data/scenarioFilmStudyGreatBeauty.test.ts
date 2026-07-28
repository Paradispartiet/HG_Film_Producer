import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanPoeticMemorySystemsFilmHistoryChoices,
  getEuropeanPoeticMemorySystemsFilmHistoryProfile,
  resolveEuropeanPoeticMemorySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPoeticMemorySystemsBatch.js";
import { getTheGreatBeautyFilmHistoryDonors } from "./scenarioFilmStudyEuropeanPoeticMemoryGreatBeautyCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_great_beauty_2013";

test("The Great Beauty resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Drama"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveEuropeanPoeticMemorySystemsFilmStudyMap(scenario, brief);
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

test("The Great Beauty receives its exact Italian modernist donor set", () => {
  const profile = getEuropeanPoeticMemorySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getTheGreatBeautyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_8_1_2_1963",
    "scenario_l_avventura_1960",
    "scenario_amarcord_1973",
  ]);
  const choices = createEuropeanPoeticMemorySystemsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("Jep's novel-like Roman circuit"));
  assert.ok(choices[1]?.feedback.includes("ageing writer's Roman social panorama"));
  assert.ok(choices[2]?.feedback.includes("baroque city-and-memory production system"));
  assert.ok(choices[1]?.label.includes("artistic crisis"));
  assert.ok(choices[2]?.label.includes("landscape alienation"));
});

test("existing poetic-memory choices do not receive The Great Beauty feedback", () => {
  const existingIds = [
    "scenario_amarcord_1973",
    "scenario_cinema_paradiso_1988",
    "scenario_amelie_2001",
    "scenario_the_double_life_of_veronique_1991",
  ];
  const markers = [
    "Jep's novel-like Roman circuit",
    "ageing writer's Roman social panorama",
    "baroque city-and-memory production system",
  ];
  for (const existingId of existingIds) {
    const profile = getEuropeanPoeticMemorySystemsFilmHistoryProfile(existingId);
    assert.ok(profile);
    const choices = createEuropeanPoeticMemorySystemsFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
  }
});
