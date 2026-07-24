import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createMinimalistRoadFilmHistoryChoices,
  getMinimalistRoadFilmHistoryProfile,
  resolveMinimalistRoadFilmStudyMap,
} from "./scenarioFilmStudyMinimalistRoadBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_where_is_the_friend_s_house_1987";

test("Where Is the Friend's House resolves as a source-backed Koker journey system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveMinimalistRoadFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 13);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 6);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 5);
});

test("Where Is the Friend's House receives dedicated journey donors without changing existing profiles", () => {
  const profile = getMinimalistRoadFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const choices = createMinimalistRoadFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const existingProfile = getMinimalistRoadFilmHistoryProfile("scenario_stranger_than_paradise_1984");
  assert.ok(existingProfile);
  const existingChoices = createMinimalistRoadFilmHistoryChoices(existingProfile);
  assert.equal(existingChoices.some((choice) => choice.label.includes("Koker")), false);
});
