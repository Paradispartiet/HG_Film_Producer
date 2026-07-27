import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanPressureFilmHistoryChoices,
  getEuropeanPressureFilmHistoryProfile,
  resolveEuropeanPressureFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPressureBatch.js";
import { getLaHaineDonorScenarioIds } from "./scenarioFilmStudyEuropeanPressureLaHaineCatalog.js";
import { getFourMonthsFilmHistoryDonors } from "./scenarioFilmStudyRomanianPressureFourMonthsCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_4_months_3_weeks_and_2_days_2007";

test("4 Months resolves as a source-backed Romanian procedural-pressure system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveEuropeanPressureFilmStudyMap(
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

test("4 Months receives dedicated donors without changing La Haine choices", () => {
  const profile = getEuropeanPressureFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getFourMonthsFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_happening_2021",
      "scenario_the_child_2005",
      "scenario_la_haine_1995",
    ],
  );

  const choices = createEuropeanPressureFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const laHaineProfile = getEuropeanPressureFilmHistoryProfile("scenario_la_haine_1995");
  assert.ok(laHaineProfile);
  assert.equal(getFourMonthsFilmHistoryDonors(laHaineProfile), undefined);
  assert.deepEqual(
    getLaHaineDonorScenarioIds(laHaineProfile),
    [
      "scenario_the_measure_of_a_man_2015",
      "scenario_revanche_2008",
      "scenario_the_hunt_2012",
    ],
  );

  const laHaineChoices = createEuropeanPressureFilmHistoryChoices(laHaineProfile);
  assert.equal(laHaineChoices.some((choice) => choice.feedback.includes("abortion")), false);
  assert.equal(laHaineChoices.some((choice) => choice.feedback.includes("Otilia")), false);
});
