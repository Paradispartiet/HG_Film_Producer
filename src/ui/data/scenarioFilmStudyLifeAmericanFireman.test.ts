import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_life_of_an_american_fireman_1903";

test("Life of an American Fireman materializes as the second Chapter 1 P1 Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Life of an American Fireman");
  assert.equal(scenario.film.year, 1903);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 0);
  assert.deepEqual(scenario.film.directors, ["Edwin S. Porter"]);
  assert.deepEqual(scenario.film.genres, ["Action", "Drama", "Short"]);
  assert.equal(scenario.scenario_type, "action_adventure_production");
  assert.equal(scenario.source.list_id, "manual_chapter_one_early_cinema_expansion_2026");
  assert.equal(scenario.source.imdb_id, "manual_life_of_an_american_fireman_1903");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 9);
  assert.equal(study?.coverageSummary.mapped, 7);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 4);
});

test("Life of an American Fireman permanently separates the original from the later cross-cut re-edit", () => {
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

  assert.match(profileText, /paper print/i);
  assert.match(profileText, /inside|interior/i);
  assert.match(profileText, /outside|exterior/i);
  assert.match(profileText, /later.*cross-cut|cross-cut.*later/i);
  assert.match(profileText, /mistaken|mistake|disproved|corrected|distinct/i);
  assert.match(profileText, /300 firefighters|hundreds of firefighters/i);

  const editing = profile.technicalHighlights.find((item) => item.area === "editing");
  assert.equal(editing?.status, "source_verified");
  assert.match(editing?.note ?? "", /paper-print|paper print/i);
  assert.match(editing?.note ?? "", /not alternated|rather than cross-cut|later cross-cut/i);
});

test("Life of an American Fireman keeps the normal silent-foundations history-choice contract", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Life of an American Fireman is not duplicated in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
