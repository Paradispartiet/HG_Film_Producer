import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getLastLifeInTheUniverseFilmHistoryDonors } from "./scenarioFilmStudyAsianTransnationalLastLifeUniverseCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_last_life_in_the_universe_2003";

test("Last Life in the Universe resolves as a source-backed multilingual dreamspace-displacement system", () => {
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

test("Last Life in the Universe receives dedicated transnational-intimacy, urban-time and Thai-dream donors without changing existing choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getLastLifeInTheUniverseFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_happy_together_1997",
      "scenario_millennium_mambo_2001",
      "scenario_tropical_malady_2004",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_happy_together_1997",
    "scenario_millennium_mambo_2001",
    "scenario_tropical_malady_2004",
    "scenario_cyclo_1995",
    "scenario_infernal_affairs_2002",
    "scenario_return_to_seoul_2022",
    "scenario_elephant_2003",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createIndependentStorytellingFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("Thai-Japanese-Dutch production")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("music dissolves into room tone")), false);
  }
});
