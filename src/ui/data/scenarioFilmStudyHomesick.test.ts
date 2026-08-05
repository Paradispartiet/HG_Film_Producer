import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getMommyFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformanceMommyCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getIndependentStorytellingProfileGroup } from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_homesick_2015";

test("Homesick resolves as a source-backed Norwegian taboo-family intimacy system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.deepEqual(scenario.film.genres, ["Drama"]);

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
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Homesick receives exact hidden-kinship, destructive-intimacy and chamber donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "family_performance_grief_power");

  assert.deepEqual(
    getMommyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_secrets_and_lies_1996",
      "scenario_the_souvenir_2019",
      "scenario_scenes_from_a_marriage_1974",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices[0]?.label.includes("Norwegian taboo-family chamber drama"));
  assert.ok(choices[0]?.label.includes("painterly"));
  assert.ok(choices.slice(1).some((choice) => choice.label.includes("devised ensemble") || choice.label.includes("autobiographical art cinema")));
});

test("Homesick integration preserves Mommy and established family-intimacy profiles", () => {
  for (const existingScenarioId of [
    "scenario_mommy_2014",
    "scenario_secrets_and_lies_1996",
    "scenario_the_souvenir_2019",
    "scenario_scenes_from_a_marriage_1974",
    "scenario_dheepan_2015",
    "scenario_drifters_2015",
  ]) {
    const existingProfile = getIndependentStorytellingFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile, `Missing existing profile ${existingScenarioId}`);
    assert.notEqual(existingProfile.scenarioId, scenarioId);
    assert.equal(existingProfile.moment.includes("dismantle an earlier soulmate-revelation screenplay"), false);
    assert.equal(existingProfile.moment.includes("physically matched half-sibling"), false);
  }

  const mommyProfile = getIndependentStorytellingFilmHistoryProfile("scenario_mommy_2014");
  assert.ok(mommyProfile);
  assert.deepEqual(
    getMommyFilmHistoryDonors(mommyProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_dancer_in_the_dark_2000",
      "scenario_elephant_2003",
      "scenario_secrets_and_lies_1996",
    ],
  );
});
