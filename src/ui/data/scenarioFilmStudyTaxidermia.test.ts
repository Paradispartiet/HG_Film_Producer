import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getRequiemForADreamFilmHistoryDonors } from "./scenarioFilmStudyAddictionBodyMontageRequiemCatalog.js";
import { getTaxidermiaFilmHistoryDonors } from "./scenarioFilmStudyHungarianGrotesqueTaxidermiaCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_taxidermia_2006";

test("Taxidermia resolves as a source-backed Hungarian body-history grotesque system", () => {
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

test("Taxidermia receives dedicated donors without changing Requiem for a Dream choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getTaxidermiaFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_cremator_1969",
      "scenario_daisies_1966",
      "scenario_requiem_for_a_dream_2000",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const requiemProfile = getIndependentStorytellingFilmHistoryProfile("scenario_requiem_for_a_dream_2000");
  assert.ok(requiemProfile);
  assert.equal(getTaxidermiaFilmHistoryDonors(requiemProfile), undefined);
  assert.deepEqual(
    getRequiemForADreamFilmHistoryDonors(requiemProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_trainspotting_1996",
      "scenario_leaving_las_vegas_1995",
      "scenario_sound_of_metal_2019",
    ],
  );

  const requiemChoices = createIndependentStorytellingFilmHistoryChoices(requiemProfile);
  assert.equal(requiemChoices.some((choice) => choice.feedback.includes("taxidermy")), false);
  assert.equal(requiemChoices.some((choice) => choice.feedback.includes("Hungarian")), false);
});
