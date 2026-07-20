import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { createFilmResearchQueue, summarizeFilmResearch } from "./filmResearchStatus.js";
import { getVerifiedProductionCaseIds } from "./scenarioProductionVerificationRegistry.js";

const silentFoundationIds = new Set([
  "scenario_a_trip_to_the_moon_1902",
  "scenario_the_cabinet_of_dr_caligari_1920",
  "scenario_nosferatu_1922",
  "scenario_battleship_potemkin_1925",
]);

test("research queue derives verified status from the source registry", () => {
  const scenarios = getClassicFilmScenarios();
  const queue = createFilmResearchQueue(scenarios);
  const summary = summarizeFilmResearch(queue);

  assert.equal(summary.total, scenarios.length);
  assert.equal(summary.verified, getVerifiedProductionCaseIds().length);
  assert.equal(summary.needsResearch + summary.seeded + summary.verified, summary.total);

  const silentItems = queue.filter((candidate) => silentFoundationIds.has(candidate.scenarioId));
  assert.equal(silentItems.length, silentFoundationIds.size);
  for (const item of silentItems) assert.equal(item.status, "verified");
});
