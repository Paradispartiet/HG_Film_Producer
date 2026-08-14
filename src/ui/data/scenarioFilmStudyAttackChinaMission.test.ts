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

const scenarioId = "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900";

test("Attack on a China Mission materializes as a Chapter 3 version-history Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "Attack on a China Mission - Bluejackets to the Rescue");
  assert.equal(scenario.film.year, 1900);
  assert.equal(scenario.film.title_type, "Short");
  assert.equal(scenario.film.runtime_mins, 1);
  assert.deepEqual(scenario.film.directors, ["James Williamson"]);
  assert.deepEqual(scenario.film.genres, ["Drama", "War", "Short"]);
  assert.equal(scenario.scenario_type, "action_adventure_production");
  assert.equal(scenario.source.list_id, "manual_chapter_three_narrative_expansion_2026");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 11);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 6);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 5);
});

test("Attack on a China Mission locks artefact integrity before formal first claims", () => {
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

  assert.match(text, /1950/);
  assert.match(text, /1985/);
  assert.match(text, /reconstruct/i);
  assert.match(text, /catalog/i);
  assert.match(text, /single[- ]camera|single[- ]position/i);
  assert.match(text, /reverse/i);
  assert.match(text, /artefact|artifact|provenance/i);
  assert.match(text, /not.*first|no.*first|cannot.*first|without.*first|single birth/i);

  const verification = getProductionCaseVerification(scenarioId);
  assert.ok(verification);
  const verificationText = [verification.summary, ...verification.sources.map((source) => source.note)].join(" ");
  assert.match(verificationText, /Dulac/i);
  assert.match(verificationText, /Gaudreault/i);
  assert.match(verificationText, /two copies|1950.*1985/i);
  assert.match(verificationText, /classical conception|modern/i);
});

test("Attack on a China Mission keeps fiction, racist characterisation and imperial framing explicit", () => {
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
    ...profile.technicalHighlights.map((item) => item.note),
  ].join(" ");

  assert.match(text, /fiction|reconstruction/i);
  assert.match(text, /not actuality|rather than.*actuality|fiction.*not.*actuality/i);
  assert.match(text, /racist/i);
  assert.match(text, /imperial/i);
  assert.match(text, /Boxer/i);
  assert.match(text, /British.*rescue|British.*naval|sailors/i);
  assert.doesNotMatch(text, /authentic footage from China|documentary footage from China/i);
});

test("Attack on a China Mission preserves silent-production boundaries", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const sound = profile.technicalHighlights.find((item) => item.area === "sound_design");
  assert.equal(sound?.status, "not_central");
  assert.match(sound?.note ?? "", /silent/i);
  assert.match(sound?.note ?? "", /does not invent synchronized|not.*synchronized|staged spectacle/i);
});

test("Attack on a China Mission preserves normal silent-foundations history choices", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Attack on a China Mission is unique in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
