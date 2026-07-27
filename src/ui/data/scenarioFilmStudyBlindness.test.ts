import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getBlindnessFilmHistoryDonors,
} from "./scenarioFilmStudySubjectiveEnclosureBlindnessCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_blindness_2008";

test("Blindness resolves as a source-backed sensory-enclosure production system", () => {
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
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Blindness receives dedicated sensory-collapse donors without entering existing choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const donors = getBlindnessFilmHistoryDonors(profile);
  assert.deepEqual(
    donors?.map((donor) => donor.scenarioId),
    [
      "scenario_safe_1995",
      "scenario_sound_of_metal_2019",
      "scenario_the_host_2006",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices.find((choice) => choice.quality === "partial")?.feedback.includes("subjective-enclosure"));
  assert.ok(choices.find((choice) => choice.quality === "match")?.label.includes("white-blindness epidemic"));

  for (const existingScenarioId of [
    "scenario_eyes_wide_shut_1999",
    "scenario_being_john_malkovich_1999",
    "scenario_the_game_1997",
    "scenario_safe_1995",
    "scenario_sound_of_metal_2019",
    "scenario_the_host_2006",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(
      existingChoices.some((choice) => choice.label.includes("white-blindness epidemic")),
      false,
      existingScenarioId,
    );
  }
});
