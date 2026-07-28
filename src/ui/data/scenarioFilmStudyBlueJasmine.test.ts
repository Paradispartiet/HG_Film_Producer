import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getTheSavagesFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformanceTheSavagesCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_blue_jasmine_2013";

test("Blue Jasmine resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.equal(scenario.film.title, "Blue Jasmine");
  assert.equal(scenario.film.year, 2013);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveIndependentStorytellingFilmStudyMap(scenario, brief);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual([
    study?.coverageSummary.sourceVerified,
    study?.coverageSummary.mapped,
    study?.coverageSummary.notCentral,
  ], [14, 2, 1]);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Blue Jasmine receives its exact isolated donor set", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getTheSavagesFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_scenes_from_a_marriage_1974",
    "scenario_secrets_and_lies_1996",
    "scenario_safe_1995",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.label.includes("class-collapse tragicomedy"));
});

test("The Savages donor branch remains unchanged", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_the_savages_2007");
  assert.ok(profile);
  assert.deepEqual(getTheSavagesFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_secrets_and_lies_1996",
    "scenario_the_sons_room_2001",
    "scenario_still_walking_2008",
  ]);
});
