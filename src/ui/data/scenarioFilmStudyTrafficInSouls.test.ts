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

const scenarioId = "scenario_traffic_in_souls_1913";

test("Traffic in Souls materializes as the final Chapter 4 American feature-economy case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Traffic in Souls");
  assert.equal(scenario.film.original_title, "Traffic in Souls");
  assert.equal(scenario.film.year, 1913);
  assert.equal(scenario.film.title_type, "Feature");
  assert.equal(scenario.film.runtime_mins, 88);
  assert.deepEqual(scenario.film.directors, ["George Loane Tucker"]);
  assert.equal(scenario.source.list_id, "manual_chapter_four_industry_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 11);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 5);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 4);
});

test("Traffic in Souls separates IMP production from Universal distribution", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(scenario);
  assert.ok(profile);
  assert.ok(verification);
  const text = [
    scenario.production_challenge,
    ...scenario.learning_goals_seed,
    ...scenario.phases.map((phase) => phase.player_task),
    profile.moment,
    profile.after,
    ...profile.technicalHighlights.map((item) => item.note),
    verification.summary,
    ...verification.sources.map((source) => source.note),
  ].join(" ");

  assert.match(text, /IMP|Independent Moving Picture/i);
  assert.match(text, /Universal/i);
  assert.match(text, /produc/i);
  assert.match(text, /distribut/i);
  assert.doesNotMatch(text, /Universal directed/i);
  assert.doesNotMatch(text, /IMP distributed the film through its own Universal division/i);
});

test("Traffic in Souls preserves secret production and collaborative post-production", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [profile.moment, profile.after, ...profile.technicalHighlights.map((item) => item.note)].join(" ");
  assert.match(text, /secret/i);
  assert.match(text, /Jack Cohn/i);
  assert.match(text, /Walter MacNamara/i);
  assert.match(text, /six[- ]reel/i);
  assert.match(text, /Tucker.*England|after Tucker/i);
  assert.doesNotMatch(text, /Tucker alone completed every stage of post-production/i);
});

test("Traffic in Souls separates reform publicity from verified authorization", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(scenario);
  assert.ok(profile);
  assert.ok(verification);
  const text = [
    scenario.production_challenge,
    ...scenario.learning_goals_seed,
    ...scenario.phases.map((phase) => phase.player_task),
    profile.after,
    profile.historyQuestion,
    ...profile.technicalHighlights.map((item) => item.note),
    verification.summary,
    ...verification.sources.map((source) => source.note),
  ].join(" ");

  assert.match(text, /Rockefeller/i);
  assert.match(text, /deni|not authorized|no authorization/i);
  assert.match(text, /publicity|advertis|promotional/i);
  assert.doesNotMatch(text, /Rockefeller (?:Commission|investigation|Bureau).*approved the film/i);
  assert.doesNotMatch(text, /official Rockefeller film/i);
});

test("Traffic in Souls treats period vice discourse as staged melodrama rather than documentary fact", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const documentary = profile.technicalHighlights.find((item) => item.area === "documentary_method");
  const context = profile.technicalHighlights.find((item) => item.area === "historical_context");
  assert.equal(documentary?.status, "source_verified");
  assert.match(documentary?.note ?? "", /staged melodrama/i);
  assert.match(documentary?.note ?? "", /not documentary/i);
  assert.match(context?.note ?? "", /historical language|not endorsed|analys/i);
  assert.doesNotMatch([documentary?.note, context?.note].join(" "), /neutral scientific category/i);
});

test("Traffic in Souls keeps preserved 35 mm presentation and silent accompaniment boundaries explicit", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const cameraFormat = profile.technicalHighlights.find((item) => item.area === "camera_format");
  const sound = profile.technicalHighlights.find((item) => item.area === "sound_design");
  const music = profile.technicalHighlights.find((item) => item.area === "music");
  assert.equal(cameraFormat?.status, "source_verified");
  assert.match(cameraFormat?.note ?? "", /35 mm/i);
  assert.match(cameraFormat?.note ?? "", /preserv/i);
  assert.match(cameraFormat?.note ?? "", /not every|not.*negative/i);
  assert.equal(sound?.status, "source_verified");
  assert.match(sound?.note ?? "", /silent/i);
  assert.match(sound?.note ?? "", /accompaniment/i);
  assert.equal(music?.status, "not_central");
  assert.doesNotMatch(music?.note ?? "", /unique synchronized 1913 original score/i);
});

test("Traffic in Souls is contextualized as an early feature, not a lone invention", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [profile.before, profile.moment, profile.after, profile.historyQuestion].join(" ");
  assert.match(text, /wider international|broader|among the earliest|early American/i);
  assert.doesNotMatch(text, /invented (?:the )?American feature/i);
  assert.doesNotMatch(text, /first feature film ever made/i);

  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("Traffic in Souls is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
