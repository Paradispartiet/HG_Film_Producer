import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getThreeIronFilmHistoryDonors } from "./scenarioFilmStudySouthKoreanThreeIronCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_3_iron_2004";

test("3-Iron resolves as a source-backed silent empty-house occupation-romance system", () => {
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

test("3-Iron receives dedicated empty-space, Korean subjective-romance and dreamspace donors without changing existing choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getThreeIronFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_vive_l_amour_1994",
      "scenario_oasis_2002",
      "scenario_last_life_in_the_universe_2003",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_peppermint_candy_1999",
    "scenario_oasis_2002",
    "scenario_the_host_2006",
    "scenario_the_wailing_2016",
    "scenario_vive_l_amour_1994",
    "scenario_last_life_in_the_universe_2003",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("empty urban homes")), false);
    assert.equal(existingChoices.some((choice) => choice.label.includes("golf-ball violence")), false);
  }
});
