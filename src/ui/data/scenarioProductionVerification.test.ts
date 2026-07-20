import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getProductionCaseVerification,
  getProductionCaseVerificationRecords,
  getVerifiedProductionCaseIds,
} from "./scenarioProductionVerificationRegistry.js";

const silentFoundationIds = [
  "scenario_a_trip_to_the_moon_1902",
  "scenario_the_cabinet_of_dr_caligari_1920",
  "scenario_nosferatu_1922",
  "scenario_battleship_potemkin_1925",
] as const;

const silentStudioSystemIds = [
  "scenario_the_general_1926",
  "scenario_the_phantom_carriage_1921",
  "scenario_metropolis_1927",
  "scenario_frankenstein_1931",
] as const;

const lateSilentEarlySoundIds = [
  "scenario_the_passion_of_joan_of_arc_1928",
  "scenario_man_with_a_movie_camera_1929",
  "scenario_m_1931",
  "scenario_city_lights_1931",
] as const;

const productionSystems1930sIds = [
  "scenario_king_kong_1933",
  "scenario_modern_times_1936",
  "scenario_snow_white_and_the_seven_dwarfs_1937",
  "scenario_the_rules_of_the_game_1939",
] as const;

const expectedVerifiedCount = 60;

test("verification records are sourced and refer to playable scenarios", () => {
  const records = getProductionCaseVerificationRecords();
  const scenarioIds = new Set(getClassicFilmScenarios().map((scenario) => scenario.id));
  assert.equal(records.length, expectedVerifiedCount);
  assert.equal(new Set(records.map((record) => record.scenarioId)).size, records.length);
  for (const record of records) {
    assert.equal(record.status, "verified");
    assert.match(record.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(record.summary.trim().length >= 40);
    assert.ok(scenarioIds.has(record.scenarioId), `Unknown scenario ${record.scenarioId}`);
    assert.ok(record.sources.length >= 2);
    assert.ok(new Set(record.sources.map((source) => source.publisher)).size >= 2);
    for (const source of record.sources) {
      assert.match(source.url, /^https:\/\//);
      assert.ok(source.title.trim().length > 0);
      assert.ok(source.publisher.trim().length > 0);
      assert.ok(source.note.trim().length >= 30);
      assert.ok(source.supports.length > 0);
    }
  }
});

test("silent cinema foundations are verified with four sources each", () => {
  for (const scenarioId of silentFoundationIds) assert.ok((getProductionCaseVerification(scenarioId)?.sources.length ?? 0) >= 4);
});

test("silent and early studio systems are verified with five sources each", () => {
  for (const scenarioId of silentStudioSystemIds) assert.ok((getProductionCaseVerification(scenarioId)?.sources.length ?? 0) >= 5);
});

test("late silent and early sound systems are verified with four sources each", () => {
  for (const scenarioId of lateSilentEarlySoundIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("1930s production systems are verified with four sources each", () => {
  for (const scenarioId of productionSystems1930sIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("verification lookup and ID list expose the same registry", () => {
  const ids = getVerifiedProductionCaseIds();
  assert.equal(ids.length, expectedVerifiedCount);
  assert.equal(new Set(ids).size, ids.length);
  for (const scenarioId of ids) assert.equal(getProductionCaseVerification(scenarioId)?.scenarioId, scenarioId);
  assert.equal(getProductionCaseVerification("scenario_not_verified"), undefined);
});
