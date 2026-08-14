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

const scenarioId = "scenario_histoire_d_un_crime_1901";

test("Histoire d'un crime materializes as the final Chapter 3 narrative-time Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Histoire d'un crime");
  assert.equal(scenario.film.year, 1901);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 6);
  assert.deepEqual(scenario.film.directors, ["Ferdinand Zecca"]);
  assert.deepEqual(scenario.film.genres, ["Crime", "Drama", "Short"]);
  assert.equal(scenario.scenario_type, "character_drama_production");
  assert.equal(scenario.source.list_id, "manual_chapter_three_narrative_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 11);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 5);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 5);
});

test("Histoire d'un crime locks represented memory without a first-flashback myth", () => {
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

  assert.match(text, /prison|cell/i);
  assert.match(text, /memory|recollection|remembered|past/i);
  assert.match(text, /separate scenic plane|two scenic|above|below/i);
  assert.match(text, /tableau/i);
  assert.match(text, /Pathé/i);
  assert.match(text, /Zecca/i);
  assert.match(text, /not.*first|without.*first|does not.*first|no.*first/i);

  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(verification);
  const verificationText = [verification.summary, ...verification.sources.map((source) => `${source.publisher} ${source.note}`)].join(" ");
  assert.match(verificationText, /CNC|Centre national du cinéma/i);
  assert.match(verificationText, /Pathé/i);
  assert.match(verificationText, /1901/);
  assert.match(verificationText, /historical|archive/i);
});

test("Histoire d'un crime keeps fiction, penal spectacle and Pathé production organization explicit", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(scenario);
  assert.ok(profile);
  const text = [
    scenario.production_challenge,
    ...scenario.learning_goals_seed,
    ...scenario.phases.map((phase) => phase.player_task),
    profile.before,
    profile.moment,
    profile.after,
  ].join(" ");

  assert.match(text, /crime/i);
  assert.match(text, /execution|punishment|penal/i);
  assert.match(text, /Pathé/i);
  assert.match(text, /production service|production system|organized production|genre/i);
  assert.doesNotMatch(text, /actuality footage|documentary footage/i);
});

test("Histoire d'un crime preserves silent-production boundaries", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const sound = profile.technicalHighlights.find((item) => item.area === "sound_design");
  assert.equal(sound?.status, "not_central");
  assert.match(sound?.note ?? "", /silent/i);
  assert.match(sound?.note ?? "", /not.*synchronized|must not.*synchronized|later.*accompaniment/i);
});

test("Histoire d'un crime preserves normal silent-foundations history choices", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Histoire d'un crime is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
