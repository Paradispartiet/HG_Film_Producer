import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createBritishIrishPlaceBodySystemsFilmHistoryChoices,
  getBritishIrishPlaceBodySystemsFilmHistoryProfile,
  resolveBritishIrishPlaceBodySystemsFilmStudyMap,
} from "./scenarioFilmStudyBritishIrishPlaceBodySystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_in_the_name_of_the_father_1993";

test("In the Name of the Father resolves as a source-backed miscarriage-of-justice prison system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveBritishIrishPlaceBodySystemsFilmStudyMap(
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

test("In the Name of the Father receives dedicated British-Irish donors without changing existing profiles", () => {
  const profile = getBritishIrishPlaceBodySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const choices = createBritishIrishPlaceBodySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_kes_1969",
    "scenario_naked_1993",
    "scenario_hunger_2008",
    "scenario_the_banshees_of_inisherin_2022",
  ]) {
    const existingProfile = getBritishIrishPlaceBodySystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createBritishIrishPlaceBodySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Guildford Four")), false);
  }
});
