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

const scenarioId = "scenario_the_story_of_the_kelly_gang_1906";

test("The Story of the Kelly Gang materializes as the Chapter 4 feature-transition anchor", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "The Story of the Kelly Gang");
  assert.equal(scenario.film.year, 1906);
  assert.equal(scenario.film.title_type, "Feature");
  assert.equal(scenario.film.runtime_mins, 60);
  assert.deepEqual(scenario.film.directors, ["Charles Tait"]);
  assert.equal(scenario.source.list_id, "manual_chapter_four_industry_expansion_2026");
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

test("The Story of the Kelly Gang locks five-reel feature scale and location production", () => {
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

  assert.match(text, /five[- ]reel|five reels|4000 feet/i);
  assert.match(text, /location|Heidelberg|outside Melbourne/i);
  assert.match(text, /Tait/i);
  assert.match(text, /Johnson|Gibson|producer-exhibitor|producer\/exhibitor/i);
  assert.match(text, /tour|circulation|exhibition/i);
});

test("The Story of the Kelly Gang preserves the fragmentary archive boundary", () => {
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

  assert.match(text, /fragment|incomplete|not.*intact|lost complete/i);
  assert.match(text, /reconstruct|restor/i);
  assert.doesNotMatch(text, /complete surviving (?:film|print)|intact surviving (?:film|print)/i);
});

test("The Story of the Kelly Gang separates silent production from live exhibition sound", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const sound = profile.technicalHighlights.find((item) => item.area === "sound_design");
  assert.equal(sound?.status, "source_verified");
  assert.match(sound?.note ?? "", /silent/i);
  assert.match(sound?.note ?? "", /lecturer/i);
  assert.match(sound?.note ?? "", /live|behind-the-scenes/i);
  assert.match(sound?.note ?? "", /not synchronized|not.*production sound/i);
});

test("The Story of the Kelly Gang avoids a lone-inventor feature myth", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [profile.before, profile.moment, profile.after, profile.historyQuestion].join(" ");
  assert.match(text, /broader international|single-film|single inventor|rather than/i);
  assert.doesNotMatch(text, /Charles Tait invented (?:the )?feature|Australia invented (?:the )?feature/i);

  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
});

test("The Story of the Kelly Gang is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
