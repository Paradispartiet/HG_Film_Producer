import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getDogvilleFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsDogvilleCatalog.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_dogville_2003";

test("Dogville resolves as a source-backed chalk-stage moral laboratory", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveConstructedWorldsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 0);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Dogville receives dedicated artificial-town, architectural and von Trier digital donors without changing existing choices", () => {
  const profile = getConstructedWorldsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getDogvilleFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_the_truman_show_1998",
      "scenario_playtime_1967",
      "scenario_dancer_in_the_dark_2000",
    ],
  );

  const choices = createConstructedWorldsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  for (const existingScenarioId of [
    "scenario_a_clockwork_orange_1971",
    "scenario_groundhog_day_1993",
    "scenario_the_truman_show_1998",
    "scenario_moon_2009",
    "scenario_midnight_in_paris_2011",
    "scenario_brazil_1985",
    "scenario_forrest_gump_1994",
    "scenario_the_pianist_2002",
  ]) {
    const existingProfile = getConstructedWorldsFilmHistoryProfile(existingScenarioId);
    assert.ok(existingProfile);
    const existingChoices = createConstructedWorldsFilmHistoryChoices(existingProfile);
    assert.equal(existingChoices.some((choice) => choice.label.includes("chalk-stage")), false);
    assert.equal(existingChoices.some((choice) => choice.feedback.includes("invisible doors")), false);
  }
});
