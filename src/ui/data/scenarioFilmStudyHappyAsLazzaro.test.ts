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

const scenarioId = "scenario_happy_as_lazzaro_2018";

test("Happy as Lazzaro resolves as a source-backed rural-to-urban magical-realist production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 153);
  assert.equal(scenario.film.runtime_mins, 128);
  assert.deepEqual(scenario.film.directors, ["Alice Rohrwacher"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Fantasy", "Mystery"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 5);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 6);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 6);

  const historyProfile = study?.historyProfile;
  assert.ok(historyProfile);
  const profileText = [
    historyProfile.period,
    historyProfile.moment,
    historyProfile.after,
    ...historyProfile.technicalHighlights.map((item) => item.note),
  ].join(" ");
  assert.match(profileText, /tobacco/i);
  assert.match(profileText, /Super 16/);
  assert.match(profileText, /ARRI 416/);
  assert.match(profileText, /nonprofessional/i);
});

test("Happy as Lazzaro receives exact realism-to-myth, land-memory and rural-time donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "general");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_tropical_malady_2004",
      "scenario_daughters_of_the_dust_1991",
      "scenario_satantango_1994",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Happy as Lazzaro specialty route does not enter the general donor pool", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_daughters_of_the_dust_1991");
  assert.ok(profile);
  assert.ok(
    !getIndependentStorytellingDonors(profile).some((donor) => donor.scenarioId === scenarioId),
  );
});
