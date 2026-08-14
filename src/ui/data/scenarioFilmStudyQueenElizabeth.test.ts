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

test("Queen Elizabeth materializes as the Chapter 4 prestige-feature and distribution case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Queen Elizabeth");
  assert.equal(scenario.film.original_title, "Les Amours de la reine Élisabeth");
  assert.equal(scenario.film.year, 1912);
  assert.equal(scenario.film.title_type, "Feature");
  assert.equal(scenario.film.runtime_mins, 47);
  assert.deepEqual(scenario.film.directors, ["Louis Mercanton", "Henri Desfontaines", "Gaston Roudès"]);
  assert.equal(scenario.source.list_id, "manual_chapter_four_industry_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 10);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 4);
});

test("Queen Elizabeth locks Film d'Art, Bernhardt, Moreau and Poiret into one prestige system", () => {
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
    ...profile.technicalHighlights.map((item) => item.note),
  ].join(" ");

  assert.match(text, /Film d'Art|Le Film d'Art/i);
  assert.match(text, /Sarah Bernhardt/i);
  assert.match(text, /Émile Moreau|Emile Moreau/i);
  assert.match(text, /Paul Poiret/i);
  assert.match(text, /prestige|stage/i);
});

test("Queen Elizabeth separates French production from Zukor's United States rights and presentation", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(profile);
  assert.ok(verification);
  const text = [
    profile.before,
    profile.moment,
    profile.after,
    profile.historyQuestion,
    ...profile.technicalHighlights.map((item) => item.note),
    verification.summary,
    ...verification.sources.map((source) => source.note),
  ].join(" ");

  assert.match(text, /Adolph Zukor|Zukor/i);
  assert.match(text, /rights|distribution|presentation|investment/i);
  assert.match(text, /Le Film d'Art|French production/i);
  assert.doesNotMatch(text, /Zukor directed/i);
  assert.doesNotMatch(text, /Zukor (?:solely )?produced the French film/i);
});

test("Queen Elizabeth preserves cataloguing and runtime-version boundaries", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(scenario);
  assert.ok(profile);
  const text = [
    scenario.production_challenge,
    ...scenario.learning_goals_seed,
    profile.moment,
    profile.after,
    ...profile.technicalHighlights.map((item) => item.note),
  ].join(" ");

  assert.match(text, /Mercanton/i);
  assert.match(text, /Desfontaines/i);
  assert.match(text, /Roudès|Roudes/i);
  assert.match(text, /catalog|attribution/i);
  assert.match(text, /47/);
  assert.match(text, /45/);
  assert.match(text, /36/);
  assert.match(text, /version|print|copy|runtime/i);
  assert.doesNotMatch(text, /one complete original version survives|definitive complete original print/i);
});

test("Queen Elizabeth keeps the photographed film silent and accompaniment exhibition-specific", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const sound = profile.technicalHighlights.find((item) => item.area === "sound_design");
  const music = profile.technicalHighlights.find((item) => item.area === "music");
  assert.equal(sound?.status, "source_verified");
  assert.match(sound?.note ?? "", /silent/i);
  assert.match(sound?.note ?? "", /accompaniment/i);
  assert.match(sound?.note ?? "", /exhibition|not synchronized/i);
  assert.equal(music?.status, "not_central");
  assert.doesNotMatch(music?.note ?? "", /definitive original synchronized score/i);
});

test("Queen Elizabeth avoids a single-film feature and Paramount origin myth", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [profile.before, profile.moment, profile.after, profile.historyQuestion].join(" ");
  assert.match(text, /broader transition|did not single-handedly|part of/i);
  assert.doesNotMatch(text, /Queen Elizabeth invented (?:the )?feature/i);
  assert.doesNotMatch(text, /Queen Elizabeth created Paramount by itself/i);

  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("Queen Elizabeth is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
