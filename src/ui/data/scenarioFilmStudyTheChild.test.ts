import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getTheChildFilmHistoryDonors } from "./scenarioFilmStudySocialRealismTheChildCatalog.js";
import { getRosettaFilmHistoryDonors } from "./scenarioFilmStudySocialRealismRosettaCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_child_2005";

test("The Child resolves as a source-backed Seraing fatherhood and restitution system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("The Child receives dedicated donors without changing Rosetta choices", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getTheChildFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_rosetta_1999",
      "scenario_wendy_and_lucy_2008",
      "scenario_happening_2021",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const rosettaProfile = getIndependentStorytellingFilmHistoryProfile("scenario_rosetta_1999");
  assert.ok(rosettaProfile);
  assert.equal(getTheChildFilmHistoryDonors(rosettaProfile), undefined);
  assert.deepEqual(
    getRosettaFilmHistoryDonors(rosettaProfile)?.map((donor) => donor.scenarioId),
    [
      "scenario_wendy_and_lucy_2008",
      "scenario_happening_2021",
      "scenario_the_rider_2017",
    ],
  );

  const rosettaChoices = createIndependentStorytellingFilmHistoryChoices(rosettaProfile);
  assert.equal(rosettaChoices.some((choice) => choice.feedback.includes("infant")), false);
  assert.equal(rosettaChoices.some((choice) => choice.feedback.includes("fatherhood")), false);
});
