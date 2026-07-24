import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getEyesWideShutFilmHistoryDonors } from "./scenarioFilmStudySubjectiveEnclosureEyesWideShutCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_eyes_wide_shut_1999";

test("Eyes Wide Shut resolves as a source-backed subjective enclosure system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 15);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Eyes Wide Shut receives dedicated ritual-enclosure donors without changing existing choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getEyesWideShutFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_game_1997",
      "scenario_kagemusha_1980",
      "scenario_barton_fink_1991",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_burning_2018",
    "scenario_an_elephant_sitting_still_2018",
    "scenario_kagemusha_1980",
    "scenario_barton_fink_1991",
    "scenario_the_game_1997",
    "scenario_being_john_malkovich_1999",
    "scenario_the_big_lebowski_1998",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Schnitzler adaptation")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("masked ritual")), false);
  }
});
