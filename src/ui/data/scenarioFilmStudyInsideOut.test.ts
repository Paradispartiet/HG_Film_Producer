import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getInsideOutFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsInsideOutCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_inside_out_2015";

test("Inside Out resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Animation", "Adventure", "Comedy", "Drama", "Family", "Fantasy"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveConstructedWorldsFilmStudyMap(scenario, brief);
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

test("Inside Out receives its exact isolated donor set", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getInsideOutFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_walle_2008",
    "scenario_her_2013",
    "scenario_anomalisa_2015",
  ]);
  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("daughter-inspired emotion research"));
  assert.ok(choices[1]?.feedback.includes("Joy-Sadness journey"));
  assert.ok(choices[2]?.feedback.includes("geometry-light rendering"));
});

test("existing constructed-world choices do not receive Inside Out feedback", () => {
  const existingIds = [
    "scenario_walle_2008",
    "scenario_her_2013",
    "scenario_anomalisa_2015",
    "scenario_hugo_2011",
  ];
  const markers = [
    "daughter-inspired emotion research",
    "Joy-Sadness journey",
    "geometry-light rendering",
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
