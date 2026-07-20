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

const expectedVerifiedCount = 48;

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
  for (const scenarioId of silentFoundationIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
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
