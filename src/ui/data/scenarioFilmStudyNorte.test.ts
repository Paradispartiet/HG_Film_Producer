import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import {
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_norte_the_end_of_history_2013";

test("Norte resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.equal(scenario.film.title, "Norte, the End of History");
  assert.equal(scenario.film.year, 2013);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveIndependentStorytellingFilmStudyMap(scenario, brief);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.deepEqual([
    study?.coverageSummary.sourceVerified,
    study?.coverageSummary.mapped,
    study?.coverageSummary.notCentral,
  ], [14, 2, 1]);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Norte receives a dedicated cross-tradition donor set without geographic grouping", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "general");
  assert.deepEqual(getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId), [
    "scenario_satantango_1994",
    "scenario_elephant_2003",
    "scenario_rosetta_1999",
  ]);
  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.label.includes("four hours of parallel moral time"));
});

test("Crash retains its existing donor branch after Norte registration", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_crash_2004");
  assert.ok(profile);
  assert.deepEqual(getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId), [
    "scenario_smoke_1995",
    "scenario_elephant_2003",
    "scenario_the_big_lebowski_1998",
  ]);
});
