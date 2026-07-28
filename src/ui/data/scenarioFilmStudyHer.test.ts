import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getHerFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsHerCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_her_2013";

test("Her resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Drama", "Romance", "Sci-Fi"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveConstructedWorldsFilmStudyMap(scenario, brief);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual([
    study?.coverageSummary.sourceVerified,
    study?.coverageSummary.mapped,
    study?.coverageSummary.notCentral,
  ], [15, 1, 1]);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 11);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 9);
});

test("Her receives its exact isolated donor set", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getHerFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_the_truman_show_1998",
    "scenario_moon_2009",
    "scenario_walle_2008",
  ]);
  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("Phoenix's embodied listening"));
  assert.ok(choices[1]?.feedback.includes("invisible operating-system lover"));
  assert.ok(choices[2]?.feedback.includes("disembodied performance"));
});

test("existing constructed-world choices do not receive Her feedback", () => {
  const existingIds = [
    "scenario_the_truman_show_1998",
    "scenario_moon_2009",
    "scenario_walle_2008",
    "scenario_the_impossible_2012",
  ];
  const markers = [
    "Phoenix's embodied listening",
    "invisible operating-system lover",
    "disembodied performance",
  ];
  for (const existingId of existingIds) {
    const profile = getConstructedWorldsFilmHistoryProfile(existingId);
    if (!profile) continue;
    const choices = createConstructedWorldsFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
  }
});
