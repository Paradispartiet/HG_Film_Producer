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

const crossEraBatchIds = [
  "scenario_it_s_a_wonderful_life_1946",
  "scenario_the_400_blows_1959",
  "scenario_the_road_warrior_1981",
  "scenario_victoria_2015",
] as const;

const technologyHistoryBatchIds = [
  "scenario_halloween_1978",
  "scenario_tangerine_2015",
  "scenario_the_lighthouse_2019",
  "scenario_the_favourite_2018",
] as const;

const landscapeCinemaBatchIds = [
  "scenario_no_country_for_old_men_2007",
  "scenario_into_the_wild_2007",
  "scenario_winter_s_bone_2010",
  "scenario_beasts_of_the_southern_wild_2012",
] as const;

const constructedWorldsBatchIds = [
  "scenario_groundhog_day_1993",
  "scenario_the_truman_show_1998",
  "scenario_moon_2009",
  "scenario_midnight_in_paris_2011",
] as const;

const minimalistRoadBatchIds = [
  "scenario_stranger_than_paradise_1984",
  "scenario_paris_texas_1984",
  "scenario_the_bothersome_man_2006",
  "scenario_nebraska_2013",
] as const;

const europeanPressureBatchIds = [
  "scenario_dogtooth_2009",
  "scenario_the_hunt_2012",
  "scenario_the_measure_of_a_man_2015",
  "scenario_revanche_2008",
] as const;

const independentStorytellingBatchIds = [
  "scenario_mystery_train_1989",
  "scenario_smoke_1995",
  "scenario_the_man_who_wasn_t_there_2001",
  "scenario_american_splendor_2003",
] as const;

test("verification records are sourced and refer to playable scenarios", () => {
  const records = getProductionCaseVerificationRecords();
  const scenarioIds = new Set(getClassicFilmScenarios().map((scenario) => scenario.id));

  assert.equal(records.length, 44);
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

test("cross-era verification batch is present in the registry", () => {
  for (const scenarioId of crossEraBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 3);
  }
});

test("technology-history verification batch is present in the registry", () => {
  for (const scenarioId of technologyHistoryBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 3);
  }
});

test("landscape-cinema verification batch is present in the registry", () => {
  for (const scenarioId of landscapeCinemaBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("constructed-worlds verification batch is present in the registry", () => {
  for (const scenarioId of constructedWorldsBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("minimalist-road verification batch is present in the registry", () => {
  for (const scenarioId of minimalistRoadBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("European-pressure verification batch is present in the registry", () => {
  for (const scenarioId of europeanPressureBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("independent-storytelling verification batch is present in the registry", () => {
  for (const scenarioId of independentStorytellingBatchIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.scenarioId, scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("verification lookup and ID list expose the same registry", () => {
  const ids = getVerifiedProductionCaseIds();
  assert.equal(ids.length, 44);
  assert.equal(new Set(ids).size, ids.length);

  for (const scenarioId of ids) {
    assert.equal(getProductionCaseVerification(scenarioId)?.scenarioId, scenarioId);
  }

  assert.equal(getProductionCaseVerification("scenario_not_verified"), undefined);
});
