import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createTechnologyFilmHistoryChoices,
  getItFollowsTechnologyFilmHistoryDonors,
  getTechnologyFilmHistoryProfile,
  resolveTechnologyFilmStudyMap,
} from "./scenarioFilmStudyTechnologyBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_it_follows_2014";

test("It Follows resolves as a complete source-backed Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario);
  assert.deepEqual(scenario.film.genres, ["Horror", "Mystery", "Thriller"]);
  const brief = resolveScenarioProductionBrief(scenario);
  const study = resolveTechnologyFilmStudyMap(scenario, brief);
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

test("It Follows receives its exact walking-curse spatial-dread donor set", () => {
  const profile = getTechnologyFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.deepEqual(getItFollowsTechnologyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId), [
    "scenario_halloween_1978",
    "scenario_cure_1997",
    "scenario_the_vanishing_1988",
  ]);
  const choices = createTechnologyFilmHistoryChoices(profile);
  assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  assert.ok(choices[0]?.feedback.includes("transmitted walking curse"));
  assert.ok(choices[1]?.feedback.includes("temporally mixed Detroit design"));
  assert.ok(choices[2]?.feedback.includes("walking-speed pursuit"));
  assert.ok(choices[1]?.label.includes("modern slasher"));
  assert.ok(choices[2]?.label.includes("procedural uncertainty"));
});

test("existing technology-history choices remain isolated from It Follows", () => {
  const existingIds = [
    "scenario_halloween_1978",
    "scenario_tangerine_2015",
    "scenario_the_lighthouse_2019",
    "scenario_the_favourite_2018",
  ];
  const markers = [
    "transmitted walking curse",
    "temporally mixed Detroit design",
    "walking-speed pursuit",
  ];
  for (const existingId of existingIds) {
    const profile = getTechnologyFilmHistoryProfile(existingId);
    assert.ok(profile);
    assert.equal(getItFollowsTechnologyFilmHistoryDonors(profile), undefined);
    const choices = createTechnologyFilmHistoryChoices(profile);
    for (const marker of markers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, `${existingId}: ${marker}`);
    }
    assert.equal(choices.some((choice) => choice.label.includes("It Follows")), false, existingId);
  }
});
