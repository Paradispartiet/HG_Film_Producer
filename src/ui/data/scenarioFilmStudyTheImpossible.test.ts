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
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveConstructedWorldsFilmStudyMap(scenario, brief);

  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual(
    [
      study?.coverageSummary.sourceVerified,
      study?.coverageSummary.mapped,
      study?.coverageSummary.notCentral,
    ],
    [14, 2, 1],
  );
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("The Impossible receives its exact isolated disaster-reconstruction donors", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getTheImpossibleFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_jaws_1975",
    "scenario_the_pianist_2002",
    "scenario_hugo_2011",
  ]);

  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.equal(choices[0]?.quality, "match");
  assert.ok(choices[0]?.feedback.includes("survivor account"));
});

test("existing constructed-world cases do not receive The Impossible feedback", () => {
  const existing = [
    "scenario_moonrise_kingdom_2012",
    "scenario_hugo_2011",
    "scenario_the_pianist_2002",
    "scenario_jaws_1975",
  ];

  for (const existingScenarioId of existing) {
    const profile = getConstructedWorldsFilmHistoryProfile(existingScenarioId);
    if (!profile) continue;
    const choices = createConstructedWorldsFilmHistoryChoices(profile);
    assert.equal(choices.some((choice) => choice.feedback.includes("survivor account")), false);
    assert.equal(choices.some((choice) => choice.feedback.includes("one-third-scale resort")), false);
  }
});
