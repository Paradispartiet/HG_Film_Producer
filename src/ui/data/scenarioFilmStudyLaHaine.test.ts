import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getLaHaineDonorScenarioIds } from "./scenarioFilmStudyEuropeanPressureLaHaineCatalog.js";
import {
  createEuropeanPressureFilmHistoryChoices,
  getEuropeanPressureFilmHistoryProfile,
  resolveEuropeanPressureFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPressureBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_la_haine_1995";

test("La Haine resolves as a source-backed European social-pressure system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveEuropeanPressureFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 4);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("La Haine receives dedicated donors without entering existing European-pressure choices", () => {
  const profile = getEuropeanPressureFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getLaHaineDonorScenarioIds(profile),
    [
      "scenario_the_measure_of_a_man_2015",
      "scenario_revanche_2008",
      "scenario_the_hunt_2012",
    ],
  );

  const choices = createEuropeanPressureFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_dogtooth_2009",
    "scenario_the_hunt_2012",
    "scenario_the_measure_of_a_man_2015",
    "scenario_revanche_2008",
  ]) {
    const existingProfile = getEuropeanPressureFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createEuropeanPressureFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Chanteloup-les-Vignes")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("offscreen gunshots")), false);
  }
});
