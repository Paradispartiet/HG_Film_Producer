import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getRushFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsRushCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_rush_2013";

test("Rush resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Biography", "Drama", "Sport"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveConstructedWorldsFilmStudyMap(scenario, brief);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual([
    study?.coverageSummary.sourceVerified,
    study?.coverageSummary.mapped,
    study?.coverageSummary.notCentral,
  ], [16, 1, 0]);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Rush receives its exact cross-tradition donor set", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getRushFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_the_impossible_2012",
    "scenario_the_motorcycle_diaries_2004",
    "scenario_the_wrestler_2008",
  ]);
  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("Hunt-Lauda two-hander"));
  assert.ok(choices[1]?.feedback.includes("public-performance sports system"));
  assert.ok(choices[2]?.feedback.includes("historical sports biography"));
  assert.ok(choices[1]?.label.includes("American independent body realism"));
  assert.ok(choices[2]?.label.includes("tsunami"));
});

test("existing constructed-world choices do not receive Rush feedback", () => {
  const existingIds = [
    "scenario_the_impossible_2012",
    "scenario_her_2013",
    "scenario_moonrise_kingdom_2012",
    "scenario_hugo_2011",
  ];
  const markers = [
    "Hunt-Lauda two-hander",
    "public-performance sports system",
    "historical sports biography",
  ];
  for (const existingId of existingIds) {
    const profile = getConstructedWorldsFilmHistoryProfile(existingId);
    assert.ok(profile);
    const choices = createConstructedWorldsFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
  }
});
