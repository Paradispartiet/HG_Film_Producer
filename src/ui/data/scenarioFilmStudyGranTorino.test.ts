import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getGranTorinoFilmHistoryDonors,
} from "./scenarioFilmStudyAmericanRegionalGranTorinoCatalog.js";
import {
  getTheStraightStoryFilmHistoryDonors,
} from "./scenarioFilmStudyAmericanRegionalStraightStoryCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_gran_torino_2008";

test("Gran Torino resolves as a source-backed Detroit community production system", () => {
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

test("Gran Torino receives dedicated donors without changing The Straight Story", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const donors = getGranTorinoFilmHistoryDonors(profile);
  assert.deepEqual(
    donors?.map((donor) => donor.scenarioId),
    [
      "scenario_the_straight_story_1999",
      "scenario_mississippi_masala_1991",
      "scenario_the_rider_2017",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices.find((choice) => choice.quality === "partial")?.feedback.includes("regional"));

  const straightStory = getIndependentStorytellingFilmHistoryProfile("scenario_the_straight_story_1999");
  assert.ok(straightStory);
  assert.deepEqual(
    getTheStraightStoryFilmHistoryDonors(straightStory)?.map((donor) => donor.scenarioId),
    [
      "scenario_wendy_and_lucy_2008",
      "scenario_george_washington_2000",
      "scenario_gas_food_lodging_1992",
    ],
  );
  assert.equal(
    createIndependentStorytellingFilmHistoryChoices(straightStory)
      .some((choice) => choice.label.includes("Hmong American")),
    false,
  );
});
