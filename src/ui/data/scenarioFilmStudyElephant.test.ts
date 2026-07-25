import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getElephantFilmHistoryDonors } from "./scenarioFilmStudyIndependentStorytellingElephantCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_elephant_2003";

test("Elephant resolves as a source-backed school-corridor repeated-time system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Elephant receives dedicated duration, routine and embodied-observation donors without changing existing choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getElephantFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_satantango_1994",
      "scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975",
      "scenario_rosetta_1999",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_satantango_1994",
    "scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975",
    "scenario_rosetta_1999",
    "scenario_eyes_wide_shut_1999",
    "scenario_being_john_malkovich_1999",
    "scenario_the_game_1997",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("Portland school corridors")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("Columbine without one causal answer")), false);
  }
});
