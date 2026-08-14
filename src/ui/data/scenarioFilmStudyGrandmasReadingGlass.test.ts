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

const scenarioId = "scenario_grandmas_reading_glass_1900";

test("Grandma's Reading Glass materializes as the first Chapter 3 narrative-form Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Grandma's Reading Glass");
  assert.equal(scenario.film.year, 1900);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 1);
  assert.deepEqual(scenario.film.directors, ["G. A. Smith"]);
  assert.deepEqual(scenario.film.genres, ["Fiction", "Short"]);
  assert.equal(scenario.scenario_type, "character_drama_production");
  assert.equal(scenario.source.list_id, "manual_chapter_three_narrative_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 9);
  assert.equal(study?.verification?.status, "verified");
  assert.ok((study?.verification?.sources.length ?? 0) >= 7);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 6);
});

test("Grandma's Reading Glass locks the documented looking sequence and anti-invention safeguard", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const text = [
    profile.period,
    profile.before,
    profile.moment,
    profile.after,
    profile.historyQuestion,
    ...profile.technicalHighlights.map((item) => item.note),
  ].join(" ");

  assert.match(text, /newspaper/i);
  assert.match(text, /watch mechanism|watch/i);
  assert.match(text, /canary/i);
  assert.match(text, /grandmother'?s eye|grandma'?s eye/i);
  assert.match(text, /kitten|cat/i);
  assert.match(text, /circular/i);
  assert.match(text, /point-of-view|point of view|viewpoint/i);
  assert.match(text, /not.*invent|without.*invent|single.*invent|does not require a first/i);

  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(verification);
  const verificationText = [verification.summary, ...verification.sources.map((source) => source.note)].join(" ");
  assert.match(verificationText, /Screen Archive South East/i);
  assert.match(verificationText, /University of Bologna|Dagrada/i);
  assert.match(verificationText, /not.*identical|does not.*function exactly|anachronistic|later classical/i);
});

test("Grandma's Reading Glass preserves normal silent-foundations history choices", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Grandma's Reading Glass is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
