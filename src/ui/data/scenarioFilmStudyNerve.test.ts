import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getBlindnessFilmHistoryDonors } from "./scenarioFilmStudySubjectiveEnclosureBlindnessCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_nerve_2016";

test("Nerve resolves as a source-backed social-media live-game action system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 107);
  assert.equal(scenario.film.runtime_mins, 96);
  assert.deepEqual(scenario.film.directors, ["Henry Joost", "Ariel Schulman"]);
  assert.deepEqual(scenario.film.genres, ["Adventure", "Crime", "Drama", "Thriller"]);

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
  assert.equal(study?.verification?.sources.length, 12);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 12);
});

test("Nerve receives exact performed-reality, youth-space and mediated-identity donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getBlindnessFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_game_1997",
      "scenario_elephant_2003",
      "scenario_being_john_malkovich_1999",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("social-media techno-thriller"));
  assert.ok(choices[0]?.label.includes("New York"));
  assert.ok(choices[0]?.label.includes("Watcher"));
});

test("Nerve integration preserves Blindness and Room donor systems", () => {
  const blindnessProfile = getIndependentStorytellingFilmHistoryProfile("scenario_blindness_2008");
  assert.ok(blindnessProfile);
  assert.deepEqual(
    getBlindnessFilmHistoryDonors(blindnessProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_safe_1995",
      "scenario_sound_of_metal_2019",
      "scenario_the_host_2006",
    ],
  );

  const roomProfile = getIndependentStorytellingFilmHistoryProfile("scenario_room_2015");
  assert.ok(roomProfile);
  assert.deepEqual(
    getBlindnessFilmHistoryDonors(roomProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_blindness_2008",
      "scenario_the_impossible_2012",
      "scenario_my_skinny_sister_2015",
    ],
  );
});
