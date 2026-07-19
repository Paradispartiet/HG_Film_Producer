import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getProductionCaseVerification,
  getProductionCaseVerificationRecords,
  getVerifiedProductionCaseIds,
} from "./scenarioProductionVerification.js";

const historicBatchIds = [
  "scenario_bicycle_thieves_1948",
  "scenario_vertigo_1958",
  "scenario_breathless_1960",
  "scenario_the_shining_1980",
] as const;

test("verification records are sourced and refer to playable scenarios", () => {
  const records = getProductionCaseVerificationRecords();
  const scenarioIds = new Set(getClassicFilmScenarios().map((scenario) => scenario.id));

  assert.equal(records.length, 8);
  assert.equal(new Set(records.map((record) => record.scenarioId)).size, records.length);

  for (const record of records) {
    assert.equal(record.status, "verified");
    assert.match(record.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(record.summary.trim().length >= 40);
    assert.ok(scenarioIds.has(record.scenarioId), `Unknown scenario ${record.scenarioId}`);
    assert.ok(record.sources.length >= 2, `${record.scenarioId} needs at least two sources`);

    for (const source of record.sources) {
      assert.match(source.url, /^https:\/\//);
      assert.ok(source.title.trim().length > 0);
      assert.ok(source.publisher.trim().length > 0);
      assert.ok(source.note.trim().length >= 30);
      assert.ok(source.supports.length > 0);
    }
  }
});

test("historic verification batch is present in the registry", () => {
  for (const scenarioId of historicBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 3);
  }
});

test("verification lookup and ID list expose the same registry", () => {
  const ids = getVerifiedProductionCaseIds();
  assert.equal(ids.length, 8);
  assert.equal(new Set(ids).size, ids.length);

  for (const scenarioId of ids) {
    assert.equal(getProductionCaseVerification(scenarioId)?.scenarioId, scenarioId);
  }

  assert.equal(getProductionCaseVerification("scenario_not_verified"), undefined);
});
