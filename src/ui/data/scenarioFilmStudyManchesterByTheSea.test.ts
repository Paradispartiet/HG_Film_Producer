import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getAntoniasLineFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformanceAntoniasLineCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_manchester_by_the_sea_2016";

test("Manchester by the Sea resolves as a source-backed Cape Ann family-grief system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 110);
  assert.equal(scenario.film.runtime_mins, 137);
  assert.deepEqual(scenario.film.directors, ["Kenneth Lonergan"]);
  assert.deepEqual(scenario.film.genres, ["Drama"]);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 12);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 12);
});

test("Manchester by the Sea receives exact grief, nonlinear-memory and regional-place donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getAntoniasLineFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_sons_room_2001",
      "scenario_the_broken_circle_breakdown_2012",
      "scenario_the_straight_story_1999",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Cape Ann"));
  assert.ok(choices[0]?.label.includes("nonlinear"));
  assert.ok(choices.slice(1).some((choice) => choice.label.includes("Italian family realism") || choice.label.includes("Belgian nonlinear")));
});

test("Manchester integration preserves Antonia's Line and Broken Circle donor systems", () => {
  const antoniaProfile = getIndependentStorytellingFilmHistoryProfile("scenario_antonia_s_line_1995");
  assert.ok(antoniaProfile);
  assert.deepEqual(
    getAntoniasLineFilmHistoryDonors(antoniaProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_daughters_of_the_dust_1991",
      "scenario_secrets_and_lies_1996",
      "scenario_still_walking_2008",
    ],
  );

  for (const existingScenarioId of [
    "scenario_the_sons_room_2001",
    "scenario_the_broken_circle_breakdown_2012",
    "scenario_the_straight_story_1999",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("Cape Ann"), false);
  }
});
