import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_employees_leaving_browns_atlas_works_sheffield_1901";

test("Brown's Atlas Works materializes as a Chapter 2 local-audience Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Employees Leaving Brown's Atlas Works, Sheffield");
  assert.equal(scenario.film.year, 1901);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 2);
  assert.deepEqual(scenario.film.directors, ["Sagar Mitchell", "James Kenyon"]);
  assert.deepEqual(scenario.film.genres, ["Documentary", "Short"]);
  assert.equal(scenario.scenario_type, "documentary_production");
  assert.equal(scenario.source.list_id, "manual_chapter_two_exhibition_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 8);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 3);
});

test("Brown's Atlas Works locks local-audience and staged-actuality safeguards", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [profile.period, profile.before, profile.moment, profile.after, profile.historyQuestion, ...profile.technicalHighlights.map((item) => item.note)].join(" ");

  assert.match(text, /marshalled|marshaling|staging/i);
  assert.match(text, /showmen|showman|fairground/i);
  assert.match(text, /paying audience|paying audiences|local audience/i);
  assert.match(text, /recognition|recognizable|see themselves/i);
  assert.match(text, /uncertain|possible|not asserted/i);
  assert.doesNotMatch(text, /untouched transparent record|purely passive observation/i);
});

test("Brown's Atlas Works preserves normal silent-foundations history choices", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Brown's Atlas Works is not duplicated in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
