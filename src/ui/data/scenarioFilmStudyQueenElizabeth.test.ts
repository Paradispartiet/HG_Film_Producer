import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry.js";

const scenarioId = "scenario_queen_elizabeth_1912";

test("Queen Elizabeth materializes as a Chapter 4 prestige-feature case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Queen Elizabeth");
  assert.equal(scenario.film.original_title, "La Reine Elisabeth");
  assert.equal(scenario.film.year, 1912);
  assert.equal(scenario.film.title_type, "Feature");
  assert.equal(scenario.film.runtime_mins, 47);
  assert.ok(scenario.film.directors.includes("Louis Mercanton"));
  assert.equal(scenario.source.list_id, "manual_chapter_four_industry_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 4);
});

test("Queen Elizabeth locks four-reel, 35mm and transatlantic feature scale", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(scenario);
  assert.ok(profile);
  const text = [
    scenario.production_challenge,
    ...scenario.learning_goals_seed,
    ...scenario.phases.map((phase) => phase.player_task),
    profile.period,
    profile.moment,
    profile.after,
    ...profile.technicalHighlights.map((item) => item.note),
  ].join(" ");

  assert.match(text, /four[- ]reel|four reels/i);
  assert.match(text, /35mm|35 mm/i);
  assert.match(text, /Film d'Art/i);
  assert.match(text, /Sarah Bernhardt/i);
  assert.match(text, /Zukor|Famous Players/i);
  assert.match(text, /U\.S\.|United States|transatlantic|rights/i);
});

test("Queen Elizabeth keeps restored runtime distinct from reel-scale evidence", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(scenario);
  assert.ok(profile);
  assert.ok(verification);
  assert.equal(scenario.film.runtime_mins, 47);

  const text = [
    scenario.production_challenge,
    ...scenario.learning_goals_seed,
    profile.moment,
    ...profile.technicalHighlights.map((item) => item.note),
    verification.summary,
    ...verification.sources.map((source) => source.note),
  ].join(" ");
  assert.match(text, /47 minutes|47-minute|47 min/i);
  assert.match(text, /36-minute|36 minutes|36 min/i);
  assert.match(text, /projection|restor/i);
  assert.match(text, /runtime.*vari|vari.*runtime|projection-speed/i);
});

test("Queen Elizabeth separates silent production from accompaniment", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const sound = profile.technicalHighlights.find((item) => item.area === "sound_design");
  const music = profile.technicalHighlights.find((item) => item.area === "music");
  assert.equal(sound?.status, "source_verified");
  assert.match(sound?.note ?? "", /silent/i);
  assert.match(sound?.note ?? "", /accompaniment/i);
  assert.match(sound?.note ?? "", /not synchronized|rather than synchronized/i);
  assert.equal(music?.status, "not_central");
});

test("Queen Elizabeth avoids a lone-inventor feature or star-system myth", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [profile.before, profile.moment, profile.after, profile.historyQuestion].join(" ");
  assert.match(text, /broader transition|international|single film|single.*created|lone-inventor/i);
  assert.doesNotMatch(text, /Queen Elizabeth invented (?:the )?feature|Sarah Bernhardt invented (?:the )?star system|Zukor invented (?:the )?feature/i);

  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("Queen Elizabeth is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
