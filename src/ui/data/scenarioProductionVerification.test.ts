import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getProductionCaseVerification,
  getProductionCaseVerificationRecords,
  getVerifiedProductionCaseIds,
} from "./scenarioProductionVerificationRegistry.js";

const historicBatchIds = [
  "scenario_bicycle_thieves_1948",
  "scenario_vertigo_1958",
  "scenario_breathless_1960",
  "scenario_the_shining_1980",
] as const;

const productionMethodBatchIds = [
  "scenario_one_flew_over_the_cuckoo_s_nest_1975",
  "scenario_the_celebration_1998",
  "scenario_waltz_with_bashir_2008",
  "scenario_mad_max_fury_road_2015",
] as const;

const modernCraftBatchIds = [
  "scenario_district_9_2009",
  "scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014",
  "scenario_boyhood_2014",
  "scenario_ex_machina_2014",
] as const;

test("verification records are sourced and refer to playable scenarios", () => {
  const records = getProductionCaseVerificationRecords();
  const scenarioIds = new Set(getClassicFilmScenarios().map((scenario) => scenario.id));

  assert.equal(records.length, 16);
  assert.equal(new Set(records.map((record) => record.scenarioId)).size, records.length);

  for (const record of records) {
    assert.equal(record.status, "verified");
    assert.match(record.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(record.summary.trim().length >= 40);
    assert.ok(scenarioIds.has(record.scenarioId), `Unknown scenario ${record.scenarioId}`);
    assert.ok(record.sources.length >= 2, `${record.scenarioId} needs at least two sources`);
    assert.ok(
      new Set(record.sources.map((source) => source.publisher)).size >= 2,
      `${record.scenarioId} needs sources from at least two publishers`,
    );

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

test("production-method verification batch is present in the registry", () => {
  for (const scenarioId of productionMethodBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 3);
  }
});

test("modern craft verification batch is present in the registry", () => {
  for (const scenarioId of modernCraftBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("verification lookup and ID list expose the same registry", () => {
  const ids = getVerifiedProductionCaseIds();
  assert.equal(ids.length, 16);
  assert.equal(new Set(ids).size, ids.length);

  for (const scenarioId of ids) {
    assert.equal(getProductionCaseVerification(scenarioId)?.scenarioId, scenarioId);
  }

  assert.equal(getProductionCaseVerification("scenario_not_verified"), undefined);
});
