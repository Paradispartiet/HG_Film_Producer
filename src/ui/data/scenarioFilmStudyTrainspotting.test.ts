import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getTrainspottingFilmHistoryDonors } from "./scenarioFilmStudyBritishIrishPlaceBodyTrainspottingCatalog.js";
import {
  createBritishIrishPlaceBodySystemsFilmHistoryChoices,
  getBritishIrishPlaceBodySystemsFilmHistoryProfile,
  resolveBritishIrishPlaceBodySystemsFilmStudyMap,
} from "./scenarioFilmStudyBritishIrishPlaceBodySystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_trainspotting_1996";

test("Trainspotting resolves as a source-backed British-Irish place and body system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveBritishIrishPlaceBodySystemsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Trainspotting receives dedicated donors without entering existing British-Irish choices", () => {
  const profile = getBritishIrishPlaceBodySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getTrainspottingFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_naked_1993",
      "scenario_leaving_las_vegas_1995",
      "scenario_la_haine_1995",
    ],
  );

  const choices = createBritishIrishPlaceBodySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_kes_1969",
    "scenario_naked_1993",
    "scenario_hunger_2008",
    "scenario_the_banshees_of_inisherin_2022",
    "scenario_in_the_name_of_the_father_1993",
  ]) {
    const existingProfile = getBritishIrishPlaceBodySystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createBritishIrishPlaceBodySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("£1.5 million")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Calton Athletic")), false);
  }
});
