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

const scenarioId = "scenario_the_lonely_villa_1909";

test("The Lonely Villa materializes as the final Chapter 3 P0 Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "The Lonely Villa");
  assert.equal(scenario.film.year, 1909);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 10);
  assert.deepEqual(scenario.film.directors, ["D. W. Griffith"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "Short"]);
  assert.equal(scenario.scenario_type, "character_drama_production");
  assert.equal(scenario.source.list_id, "manual_chapter_three_narrative_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 10);
  assert.equal(study?.verification?.status, "verified");
  assert.ok((study?.verification?.sources.length ?? 0) >= 6);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 6);
});

test("The Lonely Villa locks telephone parallel action and rejects the Griffith invention myth", () => {
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

  assert.match(text, /telephone/i);
  assert.match(text, /family/i);
  assert.match(text, /burglar/i);
  assert.match(text, /husband/i);
  assert.match(text, /rescue/i);
  assert.match(text, /Fort Lee/i);
  assert.match(text, /New York|Biograph.*studio/i);
  assert.match(text, /parallel editing|parallel narrative|alternat/i);
  assert.match(text, /Au Téléphone|Au Telephone/i);
  assert.match(text, /not.*invent|rather than.*invent|without.*invent|already.*international/i);

  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(verification);
  const verificationText = [
    verification.summary,
    ...verification.sources.flatMap((source) => [source.publisher, source.note]),
  ].join(" ");
  assert.match(verificationText, /Library of Congress/i);
  assert.match(verificationText, /AFI/i);
  assert.match(verificationText, /Oxford Academic|Screen/i);
  assert.match(verificationText, /University of California Press/i);
  assert.match(verificationText, /University of Illinois Press/i);
  assert.match(verificationText, /not.*invent|already.*international|mythmaker|rather than.*invent/i);
});

test("The Lonely Villa preserves normal silent-foundations history choices", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("The Lonely Villa is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
