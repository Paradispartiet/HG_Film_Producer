import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getTasteOfCherryDonorScenarioIds } from "./scenarioFilmStudyMinimalistRoadTasteOfCherryCatalog.js";
import {
  createMinimalistRoadFilmHistoryChoices,
  getMinimalistRoadFilmHistoryProfile,
  resolveMinimalistRoadFilmStudyMap,
} from "./scenarioFilmStudyMinimalistRoadBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_taste_of_cherry_1997";

test("Taste of Cherry resolves as a source-backed minimalist road system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveMinimalistRoadFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 12);
  assert.equal(study?.coverageSummary.mapped, 4);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Taste of Cherry receives dedicated donors without entering existing minimalist-road choices", () => {
  const profile = getMinimalistRoadFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getTasteOfCherryDonorScenarioIds(profile),
    [
      "scenario_stranger_than_paradise_1984",
      "scenario_paris_texas_1984",
      "scenario_nebraska_2013",
    ],
  );

  const choices = createMinimalistRoadFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_stranger_than_paradise_1984",
    "scenario_paris_texas_1984",
    "scenario_the_bothersome_man_2006",
    "scenario_nebraska_2013",
    "scenario_where_is_the_friend_s_house_1987",
  ]) {
    const existingProfile = getMinimalistRoadFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createMinimalistRoadFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("video epilogue")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("separately")), false);
  }
});
