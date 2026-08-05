import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getRosettaFilmHistoryDonors } from "./scenarioFilmStudySocialRealismRosettaCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_drifters_2015";

test("Drifters resolves as a source-backed Swedish marginal-community survival system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Drama", "Crime"]);

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
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Drifters receives exact embodied precarity, homelessness and restitution donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getRosettaFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_rosetta_1999",
      "scenario_wendy_and_lucy_2008",
      "scenario_the_child_2005",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Swedish social-political thriller"));
  assert.ok(choices[0]?.label.includes("ninety percent"));
  assert.ok(choices.slice(1).some((choice) => choice.label.includes("Seraing") || choice.label.includes("Oregon")));
});

test("Drifters integration preserves established social-realist and precarity profiles", () => {
  for (const existingScenarioId of [
    "scenario_rosetta_1999",
    "scenario_wendy_and_lucy_2008",
    "scenario_the_child_2005",
    "scenario_happening_2021",
    "scenario_the_rider_2017",
    "scenario_dheepan_2015",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("illegal caravan settlement outside Stockholm"), false);
    assert.equal(existingProfile.moment.includes("ninety percent of the people on screen"), false);
  }

  const rosettaProfile = getIndependentStorytellingFilmHistoryProfile("scenario_rosetta_1999");
  assert.ok(rosettaProfile);
  assert.deepEqual(
    getRosettaFilmHistoryDonors(rosettaProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_wendy_and_lucy_2008",
      "scenario_happening_2021",
      "scenario_the_rider_2017",
    ],
  );
});
