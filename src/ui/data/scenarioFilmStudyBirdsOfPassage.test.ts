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

const scenarioId = "scenario_birds_of_passage_2018";

test("Birds of Passage resolves as a source-backed Wayuu marimbera crime epic", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 150);
  assert.equal(scenario.film.runtime_mins, 125);
  assert.deepEqual(scenario.film.directors, ["Cristina Gallego", "Ciro Guerra"]);
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama"]);
  assert.equal(scenario.scenario_type, "crime_thriller_production");

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
  assert.equal(study?.verification?.sources.length, 5);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 5);

  const historyProfile = study?.historyProfile;
  assert.ok(historyProfile);
  const profileText = [
    historyProfile.period,
    historyProfile.moment,
    historyProfile.after,
    ...historyProfile.technicalHighlights.map((item) => item.note),
  ].join(" ");
  assert.match(profileText, /Wayuu/);
  assert.match(profileText, /3-perf 35 mm/);
  assert.match(profileText, /La Guajira/);
});

test("Birds of Passage receives exact culture, researched-violence and regional-genre donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "general");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_daughters_of_the_dust_1991",
      "scenario_a_touch_of_sin_2013",
      "scenario_marlina_the_murderer_in_four_acts_2017",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Birds of Passage specialty route does not enter the general donor pool", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_daughters_of_the_dust_1991");
  assert.ok(profile);
  assert.ok(
    !getIndependentStorytellingDonors(profile).some((donor) => donor.scenarioId === scenarioId),
  );
});
