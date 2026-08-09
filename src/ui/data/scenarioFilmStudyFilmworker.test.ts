import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getFilmworkerFilmHistoryDonors } from "./scenarioFilmStudyMusicDocumentaryFilmworkerCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_filmworker_2017";

test("Filmworker resolves as a source-backed archive, witness and invisible-labor documentary system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 140);
  assert.equal(scenario.film.runtime_mins, 94);
  assert.deepEqual(scenario.film.directors, ["Tony Zierra"]);
  assert.deepEqual(scenario.film.genres, ["Documentary", "Biography"]);
  assert.equal(scenario.scenario_type, "documentary_production");

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 12);
  assert.equal(study?.coverageSummary.mapped, 4);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 11);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 11);
});

test("Filmworker receives exact archive-biography and documentary-authorship donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(
    getFilmworkerFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_amy_2015",
      "scenario_searching_for_sugar_man_2012",
      "scenario_american_splendor_2003",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.match(choices.find((choice) => choice.quality === "match")?.feedback ?? "", /Vitali|filmworker|production labor/i);
});
