import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_great_train_robbery_1903";

test("The Great Train Robbery materializes as the final Chapter 1 P0 Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "The Great Train Robbery");
  assert.equal(scenario.film.original_title, "The Great Train Robbery");
  assert.equal(scenario.film.year, 1903);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 0);
  assert.deepEqual(scenario.film.directors, ["Edwin S. Porter"]);
  assert.deepEqual(scenario.film.genres, ["Action", "Crime", "Western", "Short"]);
  assert.equal(scenario.scenario_type, "action_adventure_production");
  assert.equal(scenario.source.list_id, "manual_chapter_one_early_cinema_expansion_2026");
  assert.equal(scenario.source.imdb_id, "manual_the_great_train_robbery_1903");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 4);
  assert.equal(study?.coverageSummary.notCentral, 2);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 4);

  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const profileText = [
    profile.period,
    profile.before,
    profile.moment,
    profile.after,
    profile.historyQuestion,
    ...profile.technicalHighlights.map((item) => item.note),
  ].join(" ");
  assert.match(profileText, /studio/i);
  assert.match(profileText, /New Jersey|railway|railroad/i);
  assert.match(profileText, /double exposure/i);
  assert.match(profileText, /moving train/i);
  assert.match(profileText, /hand-(?:applied|painted)|hand-painted/i);
  assert.match(profileText, /two lines of action|robbers.*posse|posse.*robbers/i);
  assert.match(profileText, /invent(?:ed|or).*editing/i);
  assert.match(profileText, /avoid|reject|not a claim|rather than|erase/i);
});

test("The Great Train Robbery keeps the normal silent-foundations history-choice contract", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("The Great Train Robbery is not duplicated in the playable Film Atlas", () => {
  const matching = getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId);
  assert.equal(matching.length, 1);
});
