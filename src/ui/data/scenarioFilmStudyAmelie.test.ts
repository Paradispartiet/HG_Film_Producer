import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanPoeticMemorySystemsFilmHistoryChoices,
  getEuropeanPoeticMemorySystemsFilmHistoryProfile,
  resolveEuropeanPoeticMemorySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPoeticMemorySystemsBatch.js";
import { getAmelieFilmHistoryDonors } from "./scenarioFilmStudyWhimsicalUrbanRomanceAmelieCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_amelie_2001";

test("Amélie resolves as a source-backed whimsical urban romance and miniature system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveEuropeanPoeticMemorySystemsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Amélie receives dedicated colour, city and subjective-fantasy donors without changing existing choices", () => {
  const profile = getEuropeanPoeticMemorySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getAmelieFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_double_life_of_veronique_1991",
      "scenario_run_lola_run_1998",
      "scenario_being_john_malkovich_1999",
    ],
  );

  const choices = createEuropeanPoeticMemorySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_amarcord_1973",
    "scenario_l_atalante_1934",
    "scenario_the_spirit_of_the_beehive_1973",
    "scenario_landscape_in_the_mist_1988",
    "scenario_the_double_life_of_veronique_1991",
    "scenario_cinema_paradiso_1988",
  ]) {
    const existingProfile = getEuropeanPoeticMemorySystemsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createEuropeanPoeticMemorySystemsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("miniature-intervention romance")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("Amélie")), false);
  }
});
