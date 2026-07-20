import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getProductionCaseVerification,
  getProductionCaseVerificationRecords,
  getVerifiedProductionCaseIds,
} from "./scenarioProductionVerificationRegistry.js";

const verificationBatches = [
  { name: "historic", minimumSources: 3, scenarioIds: ["scenario_bicycle_thieves_1948", "scenario_vertigo_1958", "scenario_breathless_1960", "scenario_the_shining_1980"] },
  { name: "production method", minimumSources: 3, scenarioIds: ["scenario_one_flew_over_the_cuckoo_s_nest_1975", "scenario_the_celebration_1998", "scenario_waltz_with_bashir_2008", "scenario_mad_max_fury_road_2015"] },
  { name: "modern craft", minimumSources: 4, scenarioIds: ["scenario_district_9_2009", "scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014", "scenario_boyhood_2014", "scenario_ex_machina_2014"] },
  { name: "cross era", minimumSources: 3, scenarioIds: ["scenario_it_s_a_wonderful_life_1946", "scenario_the_400_blows_1959", "scenario_the_road_warrior_1981", "scenario_victoria_2015"] },
  { name: "technology history", minimumSources: 3, scenarioIds: ["scenario_halloween_1978", "scenario_tangerine_2015", "scenario_the_lighthouse_2019", "scenario_the_favourite_2018"] },
  { name: "landscape cinema", minimumSources: 4, scenarioIds: ["scenario_no_country_for_old_men_2007", "scenario_into_the_wild_2007", "scenario_winter_s_bone_2010", "scenario_beasts_of_the_southern_wild_2012"] },
  { name: "constructed worlds", minimumSources: 4, scenarioIds: ["scenario_groundhog_day_1993", "scenario_the_truman_show_1998", "scenario_moon_2009", "scenario_midnight_in_paris_2011"] },
  { name: "minimalist road", minimumSources: 4, scenarioIds: ["scenario_stranger_than_paradise_1984", "scenario_paris_texas_1984", "scenario_the_bothersome_man_2006", "scenario_nebraska_2013"] },
  { name: "European pressure", minimumSources: 4, scenarioIds: ["scenario_dogtooth_2009", "scenario_the_hunt_2012", "scenario_the_measure_of_a_man_2015", "scenario_revanche_2008"] },
  { name: "independent storytelling", minimumSources: 4, scenarioIds: ["scenario_mystery_train_1989", "scenario_smoke_1995", "scenario_the_man_who_wasn_t_there_2001", "scenario_american_splendor_2003"] },
  { name: "silent cinema foundations", minimumSources: 4, scenarioIds: ["scenario_a_trip_to_the_moon_1902", "scenario_the_cabinet_of_dr_caligari_1920", "scenario_nosferatu_1922", "scenario_battleship_potemkin_1925"] },
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
    assert.ok(record.sources.length >= 2, `${record.scenarioId} needs at least two sources`);
    assert.ok(new Set(record.sources.map((source) => source.publisher)).size >= 2, `${record.scenarioId} needs sources from at least two publishers`);
    for (const source of record.sources) {
      assert.match(source.url, /^https:\/\//);
      assert.ok(source.title.trim().length > 0);
      assert.ok(source.publisher.trim().length > 0);
      assert.ok(source.note.trim().length >= 30);
      assert.ok(source.supports.length > 0);
    }
  }
});

for (const batch of verificationBatches) {
  test(`${batch.name} verification batch is present in the registry`, () => {
    for (const scenarioId of batch.scenarioIds) {
      const record = getProductionCaseVerification(scenarioId);
      assert.equal(record?.scenarioId, scenarioId);
      assert.equal(record?.status, "verified");
      assert.ok((record?.sources.length ?? 0) >= batch.minimumSources, `${scenarioId} needs at least ${batch.minimumSources} sources`);
    }
  });
}

test("verification lookup and ID list expose the same registry", () => {
  const ids = getVerifiedProductionCaseIds();
  assert.equal(ids.length, expectedVerifiedCount);
  assert.equal(new Set(ids).size, ids.length);
  for (const scenarioId of ids) assert.equal(getProductionCaseVerification(scenarioId)?.scenarioId, scenarioId);
  assert.equal(getProductionCaseVerification("scenario_not_verified"), undefined);
});
