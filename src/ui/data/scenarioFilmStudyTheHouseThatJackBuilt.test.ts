import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import {
  getPriorityIndieFinalDonors,
  getPriorityIndieFinalProfile,
} from "./scenarioFilmStudyPriorityIndieFinalCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_house_that_jack_built_2018";

test("The House That Jack Built resolves as source-backed mixed-media auteur horror", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 154);
  assert.equal(scenario.film.title, "The House That Jack Built");
  assert.equal(scenario.film.year, 2018);
  assert.equal(scenario.film.runtime_mins, 152);
  assert.equal(scenario.scenario_type, "horror_production");
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama", "Horror"]);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 6);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 7);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 6);

  const historyProfile = study?.historyProfile;
  assert.ok(historyProfile);
  const profileText = [
    historyProfile.period,
    historyProfile.moment,
    historyProfile.after,
    ...historyProfile.technicalHighlights.map((item) => item.note),
  ].join(" ");
  assert.match(profileText, /five incidents|five-incident/i);
  assert.match(profileText, /Dalsland/i);
  assert.match(profileText, /Studio Fares|Trollhättan/i);
  assert.match(profileText, /GoPro/i);
  assert.match(profileText, /YouTube/i);
  assert.match(profileText, /1000/i);
  assert.match(profileText, /in[- ]camera/i);
});

test("The House That Jack Built receives exact auteur-form, chamber-crime and procedural donors", () => {
  const profile = getPriorityIndieFinalProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(
    getPriorityIndieFinalDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_barton_fink_1991",
      "scenario_reservoir_dogs_1992",
      "scenario_the_guilty_2018",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("The House That Jack Built specialty route does not enter the general priority-indie donor pool", () => {
  const profile = getPriorityIndieFinalProfile("scenario_ghost_world_2001");
  assert.ok(profile);
  assert.ok(
    !getPriorityIndieFinalDonors(profile)?.some((donor) => donor.scenarioId === scenarioId),
  );
});
