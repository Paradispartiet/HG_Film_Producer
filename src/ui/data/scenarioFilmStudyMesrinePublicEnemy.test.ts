import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getMesrineKillerInstinctFilmHistoryDonors } from "./scenarioFilmStudyCrimeNoirMesrineKillerInstinctCatalog.js";
import { getMesrinePublicEnemyFilmHistoryDonors } from "./scenarioFilmStudyCrimeNoirMesrinePublicEnemyCatalog.js";
import {
  createCrimeNoirTransformationsFilmHistoryChoices,
  getCrimeNoirTransformationsFilmHistoryProfile,
  resolveCrimeNoirTransformationsFilmStudyMap,
} from "./scenarioFilmStudyCrimeNoirTransformationsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_mesrine_public_enemy_no_1_2008";

test("Mesrine Public Enemy resolves as a source-backed media-paranoia endgame", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveCrimeNoirTransformationsFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("Mesrine Public Enemy receives dedicated donors without changing Killer Instinct", () => {
  const profile = getCrimeNoirTransformationsFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  assert.deepEqual(
    getMesrinePublicEnemyFilmHistoryDonors(profile)?.map((donor) => donor.scenarioId),
    [
      "scenario_mesrine_killer_instinct_2008",
      "scenario_la_haine_1995",
      "scenario_out_of_the_past_1947",
    ],
  );

  const choices = createCrimeNoirTransformationsFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);

  const killerInstinct = getCrimeNoirTransformationsFilmHistoryProfile("scenario_mesrine_killer_instinct_2008");
  assert.ok(killerInstinct);
  assert.deepEqual(
    getMesrineKillerInstinctFilmHistoryDonors(killerInstinct)?.map((donor) => donor.scenarioId),
    [
      "scenario_fargo_1996",
      "scenario_clockers_1995",
      "scenario_true_romance_1993",
    ],
  );
  assert.equal(
    createCrimeNoirTransformationsFilmHistoryChoices(killerInstinct)
      .some((choice) => choice.label.includes("media-age outlaw mythology")),
    false,
  );
});
