import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_workers_leaving_lumiere_factory_1895";

test("Workers Leaving the Lumière Factory materializes as the Chapter 1 actuality Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Workers Leaving the Lumière Factory");
  assert.equal(scenario.film.original_title, "La Sortie de l'usine Lumière à Lyon");
  assert.equal(scenario.film.year, 1895);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 0);
  assert.deepEqual(scenario.film.directors, ["Louis Lumière"]);
  assert.deepEqual(scenario.film.genres, ["Documentary", "Short"]);
  assert.equal(scenario.scenario_type, "documentary_production");
  assert.equal(scenario.source.list_id, "manual_chapter_one_early_cinema_expansion_2026");
  assert.equal(scenario.source.imdb_id, "manual_workers_leaving_lumiere_factory_1895");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 8);
  assert.equal(study?.coverageSummary.mapped, 6);
  assert.equal(study?.coverageSummary.notCentral, 3);
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
  assert.match(profileText, /Cinématographe/i);
  assert.match(profileText, /actuality/i);
  assert.match(profileText, /factory gate/i);
  assert.match(profileText, /multiple (?:surviving )?versions|version history/i);
  assert.match(profileText, /fixed/i);
  assert.match(profileText, /event timing|start timing|short roll/i);
});

test("Workers Leaving keeps the normal silent-foundations history-choice contract", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Workers Leaving is not duplicated in the playable Film Atlas", () => {
  const matching = getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId);
  assert.equal(matching.length, 1);
});
