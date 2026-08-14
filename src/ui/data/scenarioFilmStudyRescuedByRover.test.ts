import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_rescued_by_rover_1905";

test("Rescued by Rover materializes as the final Chapter 1 P1 Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Rescued by Rover");
  assert.equal(scenario.film.year, 1905);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 0);
  assert.deepEqual(scenario.film.directors, ["Lewin Fitzhamon"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Family", "Short"]);
  assert.equal(scenario.scenario_type, "character_drama_production");
  assert.equal(scenario.source.list_id, "manual_chapter_one_early_cinema_expansion_2026");
  assert.equal(scenario.source.imdb_id, "manual_rescued_by_rover_1905");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 10);
  assert.equal(study?.coverageSummary.mapped, 5);
  assert.equal(study?.coverageSummary.notCentral, 2);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 3);
});

test("Rescued by Rover locks route continuity, version history and anti-inventor safeguards", () => {
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

  assert.match(profileText, /repeated route|repeatedly travels|reuses recognizable|route/i);
  assert.match(profileText, /stable geography|spatial|landmark|screen direction/i);
  assert.match(profileText, /Blair/i);
  assert.match(profileText, /replacement|remade|multiple versions|negative|prints/i);
  assert.match(profileText, /not.*invent|without claiming|rather than.*invention|no single/i);

  const editing = profile.technicalHighlights.find((item) => item.area === "editing");
  assert.equal(editing?.status, "source_verified");
  assert.match(editing?.note ?? "", /repeated routes|matched directional movement|causal geography/i);
});

test("Rescued by Rover keeps the normal silent-foundations history-choice contract", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Rescued by Rover is not duplicated in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
