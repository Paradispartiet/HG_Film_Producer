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

const scenarioId = "scenario_shoplifters_2018";

test("Shoplifters resolves as a source-backed chosen-family 35mm production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 148);
  assert.equal(scenario.film.runtime_mins, 121);
  assert.deepEqual(scenario.film.directors, ["Hirokazu Koreeda"]);
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama", "Thriller"]);
  assert.equal(scenario.scenario_type, "crime_thriller_production");

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
  assert.match(profileText, /35mm/i);
  assert.match(profileText, /3-perf/i);
  assert.match(profileText, /500T/i);
  assert.match(profileText, /video-assist/i);
  assert.match(profileText, /chosen family|chosen kinship/i);
});

test("Shoplifters receives exact Kore-eda domestic, social-realist and child-survival donors", () => {
  const profile = getPriorityIndieFinalProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(
    getPriorityIndieFinalDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_still_walking_2008",
      "scenario_the_child_2005",
      "scenario_capernaum_2018",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Shoplifters specialty route does not enter the priority-indie donor pool", () => {
  const profile = getPriorityIndieFinalProfile("scenario_ghost_world_2001");
  assert.ok(profile);
  assert.ok(
    !getPriorityIndieFinalDonors(profile)?.some((donor) => donor.scenarioId === scenarioId),
  );
});
