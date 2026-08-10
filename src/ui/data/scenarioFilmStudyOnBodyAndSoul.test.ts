import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_on_body_and_soul_2017";

test("On Body and Soul resolves as a source-backed slaughterhouse-body shared-dream system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 116);
  assert.equal(scenario.film.runtime_mins, 116);
  assert.deepEqual(scenario.film.directors, ["Ildikó Enyedi"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Fantasy", "Mystery", "Romance"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

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

test("On Body and Soul receives exact material-reality to subjective-dream donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "subjective_enclosure_performance");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_anomalisa_2015",
      "scenario_3_iron_2004",
      "scenario_tropical_malady_2004",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("On Body and Soul specialty routing leaves the existing subjective generic donor pool unchanged", () => {
  const burningProfile = getIndependentStorytellingFilmHistoryProfile("scenario_burning_2018");
  assert.ok(burningProfile);
  assert.deepEqual(
    getIndependentStorytellingDonors(burningProfile).map((donor) => donor.scenarioId),
    [
      "scenario_an_elephant_sitting_still_2018",
      "scenario_anomalisa_2015",
      "scenario_barton_fink_1991",
      "scenario_kagemusha_1980",
    ],
  );
});
