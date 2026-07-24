import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getTheGameFilmHistoryDonors } from "./scenarioFilmStudySubjectiveEnclosureTheGameCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_game_1997";

test("The Game resolves as a source-backed subjective enclosure and performed-reality system", () => {
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

test("The Game receives dedicated donors without entering existing independent choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getTheGameFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_barton_fink_1991",
      "scenario_cure_1997",
      "scenario_the_vanishing_1988",
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
    "scenario_cure_1997",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Consumer Recreation Services")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Filoli")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("forty-foot moon box")), false);
  }
});
