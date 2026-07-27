import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createFestivalJourneyDisplacementSystemsFilmHistoryChoices,
  getFestivalJourneyDisplacementSystemsFilmHistoryProfile,
  getMotorcycleDiariesFilmHistoryDonors,
  resolveFestivalJourneyDisplacementSystemsFilmStudyMap,
} from "./scenarioFilmStudyFestivalJourneyDisplacementSystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_motorcycle_diaries_2004";

test("The Motorcycle Diaries resolves as a source-backed Latin American route-awakening system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveFestivalJourneyDisplacementSystemsFilmStudyMap(
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

test("The Motorcycle Diaries receives dedicated donors without changing existing festival-journey choices", () => {
  const profile = getFestivalJourneyDisplacementSystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getMotorcycleDiariesFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_central_station_1998",
      "scenario_eternity_and_a_day_1998",
      "scenario_head_on_2004",
    ],
  );

  const choices = createFestivalJourneyDisplacementSystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_pelle_the_conqueror_1987",
    "scenario_central_station_1998",
    "scenario_eternity_and_a_day_1998",
    "scenario_head_on_2004",
  ]) {
    const existingProfile = getFestivalJourneyDisplacementSystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    assert.equal(getMotorcycleDiariesFilmHistoryDonors(existingProfile), undefined);
    const existingChoices = createFestivalJourneyDisplacementSystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Guevara and Granado")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("Super 16")), false);
  }
});
