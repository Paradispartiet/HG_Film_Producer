import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createEuropeanPoeticMemorySystemsFilmHistoryChoices,
  getEuropeanPoeticMemorySystemsFilmHistoryProfile,
  resolveEuropeanPoeticMemorySystemsFilmStudyMap,
} from "./scenarioFilmStudyEuropeanPoeticMemorySystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_cinema_paradiso_1988";

test("Cinema Paradiso resolves as a source-backed communal cinema-memory system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveEuropeanPoeticMemorySystemsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 13);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 6);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 5);
});

test("Cinema Paradiso receives dedicated poetic-memory donors without changing existing profiles", () => {
  const profile = getEuropeanPoeticMemorySystemsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const choices = createEuropeanPoeticMemorySystemsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const existingProfile = getEuropeanPoeticMemorySystemsFilmHistoryProfile("scenario_amarcord_1973");
  assert.ok(existingProfile);
  const existingChoices = createEuropeanPoeticMemorySystemsFilmHistoryChoices(existingProfile);
  assert.equal(existingChoices.some((choice) => choice.label.includes("communal film culture")), false);
});
