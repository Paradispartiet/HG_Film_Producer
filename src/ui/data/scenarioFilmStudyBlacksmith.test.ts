import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_blacksmith_scene_1893";

test("Blacksmith Scene materializes as the Chapter 1 Kinetoscope-era Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Blacksmith Scene");
  assert.equal(scenario.film.year, 1893);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 0);
  assert.deepEqual(scenario.film.directors, ["William K. L. Dickson", "William Heise"]);
  assert.deepEqual(scenario.film.genres, ["Documentary", "Short"]);
  assert.equal(scenario.scenario_type, "documentary_production");
  assert.equal(scenario.source.list_id, "manual_chapter_one_early_cinema_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 3);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 3);

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
  assert.match(profileText, /Black Maria/i);
  assert.match(profileText, /Kinetograph/i);
  assert.match(profileText, /Kinetoscope/i);
  assert.match(profileText, /single (?:continuous|unedited) take|single, unedited take/i);
  assert.match(profileText, /laboratory employees/i);
  assert.match(profileText, /sunlight/i);
});

test("Blacksmith Scene keeps the normal silent-foundations history-choice contract", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Blacksmith Scene is not duplicated in the playable Film Atlas", () => {
  const matching = getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId);
  assert.equal(matching.length, 1);
});
