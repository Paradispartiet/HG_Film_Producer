import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getTheImpossibleFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsTheImpossibleCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_impossible_2012";

test("The Impossible resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Drama", "History", "Thriller"]);
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

test("The Impossible receives its exact isolated donor set", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getTheImpossibleFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_jaws_1975",
    "scenario_the_pianist_2002",
    "scenario_hugo_2011",
  ]);
  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("Maria Belón's survivor testimony"));
  assert.ok(choices[1]?.feedback.includes("controlled currents"));
  assert.ok(choices[2]?.feedback.includes("water engineering"));
});

test("existing constructed-world choices do not receive The Impossible feedback", () => {
  const existingIds = [
    "scenario_moonrise_kingdom_2012",
    "scenario_hugo_2011",
    "scenario_the_pianist_2002",
    "scenario_jaws_1975",
  ];
  const markers = [
    "Maria Belón's survivor testimony",
    "controlled currents",
    "water engineering",
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
