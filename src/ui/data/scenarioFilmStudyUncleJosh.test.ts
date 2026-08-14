import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_uncle_josh_at_the_moving_picture_show_1902";

test("Uncle Josh materializes as the final Chapter 2 spectator Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Uncle Josh at the Moving Picture Show");
  assert.equal(scenario.film.year, 1902);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 2);
  assert.deepEqual(scenario.film.directors, ["Edwin S. Porter"]);
  assert.deepEqual(scenario.film.genres, ["Comedy", "Short"]);
  assert.equal(scenario.scenario_type, "character_drama_production");
  assert.equal(scenario.source.list_id, "manual_chapter_two_exhibition_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 3);
});

test("Uncle Josh locks projection-space and anti-naive-spectator safeguards", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [
    profile.period,
    profile.before,
    profile.moment,
    profile.after,
    profile.historyQuestion,
    ...profile.technicalHighlights.map((item) => item.note),
  ].join(" ");

  assert.match(text, /dancing girl/i);
  assert.match(text, /express train/i);
  assert.match(text, /country couple/i);
  assert.match(text, /screen/i);
  assert.match(text, /operator|projectionist/i);
  assert.match(text, /rube|comic stereotype/i);
  assert.match(text, /not documentary|not.*proof|fictional spectator/i);
  assert.match(text, /naïve|naive|credulous/i);

  const documentary = profile.technicalHighlights.find((item) => item.area === "documentary_method");
  assert.equal(documentary?.status, "not_central");
  assert.match(documentary?.note ?? "", /not.*documentary|fictional/i);
});

test("Uncle Josh preserves normal silent-foundations history choices", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Uncle Josh is not duplicated in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
