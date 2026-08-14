import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "./scenarioFilmStudySilentFoundationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_corbett_fitzsimmons_fight_1897";

test("The Corbett-Fitzsimmons Fight materializes as the Chapter 2 P0 Production Case", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.film.title, "The Corbett–Fitzsimmons Fight");
  assert.equal(scenario.film.year, 1897);
  assert.equal(scenario.film.title_type, "Feature");
  assert.equal(scenario.film.runtime_mins, 100);
  assert.deepEqual(scenario.film.directors, ["Enoch J. Rector"]);
  assert.deepEqual(scenario.film.genres, ["Documentary", "Sport"]);
  assert.equal(scenario.scenario_type, "documentary_production");
  assert.equal(scenario.source.list_id, "manual_chapter_two_exhibition_expansion_2026");
  assert.equal(scenario.source.imdb_id, "manual_the_corbett_fitzsimmons_fight_1897");
  assert.deepEqual(scenario.manual_enrichment_needed, []);

  const study = resolveSilentFoundationsFilmStudyMap(scenario, resolveScenarioProductionBrief(scenario));
  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 11);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 4);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 4);
});

test("Corbett-Fitzsimmons locks event-cinema, Veriscope and version safeguards", () => {
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

  assert.match(profileText, /three adjacent|three Veriscope|three-camera/i);
  assert.match(profileText, /63mm|proprietary|wide format/i);
  assert.match(profileText, /live expert commentary|commentary/i);
  assert.match(profileText, /territorial|States Rights|rights/i);
  assert.match(profileText, /Lubin.*facsimile|facsimile.*Lubin/i);
  assert.match(profileText, /William Brady.*rather than producer|erroneous.*Brady|Brady.*manager/i);

  const format = profile.technicalHighlights.find((item) => item.area === "camera_format");
  assert.equal(format?.status, "source_verified");
  assert.match(format?.note ?? "", /63mm|proprietary/i);

  const editing = profile.technicalHighlights.find((item) => item.area === "editing");
  assert.equal(editing?.status, "source_verified");
  assert.match(editing?.note ?? "", /camera handoff|three-camera|Lubin/i);
});

test("Corbett-Fitzsimmons preserves the normal silent-foundations history-choice contract", () => {
  const profile = getSilentFoundationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  const choices = createSilentFoundationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Corbett-Fitzsimmons is not duplicated in the playable Film Atlas", () => {
  assert.equal(getClassicFilmScenarios().filter((scenario) => scenario.id === scenarioId).length, 1);
});
