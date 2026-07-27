import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { getTheClassDonorScenarioIds } from "./scenarioFilmStudyContemporaryEuropeanSocialCareTheClassCatalog.js";
import {
  createContemporaryEuropeanSocialCareSystemsFilmHistoryChoices,
  getContemporaryEuropeanSocialCareSystemsFilmHistoryProfile,
  resolveContemporaryEuropeanSocialCareSystemsFilmStudyMap,
} from "./scenarioFilmStudyContemporaryEuropeanSocialCareSystemsBatch.js";
import { getWalleDonorScenarioIds } from "./scenarioFilmStudyConstructedWorldsWalleCatalog.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getAProphetFilmHistoryDonors } from "./scenarioFilmStudyCrimeNoirAProphetCatalog.js";
import {
  createCrimeNoirTransformationsFilmHistoryChoices,
  getCrimeNoirTransformationsFilmHistoryProfile,
  resolveCrimeNoirTransformationsFilmStudyMap,
} from "./scenarioFilmStudyCrimeNoirTransformationsBatch.js";
import { getAlamarDonorScenarioIds } from "./scenarioFilmStudyMinimalistRoadAlamarCatalog.js";
import {
  createMinimalistRoadFilmHistoryChoices,
  getMinimalistRoadFilmHistoryProfile,
  resolveMinimalistRoadFilmStudyMap,
} from "./scenarioFilmStudyMinimalistRoadBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

type Case = {
  readonly scenarioId: string;
  readonly expected: readonly [number, number, number];
  readonly resolve: typeof resolveConstructedWorldsFilmStudyMap;
};

const cases: readonly Case[] = [
  {
    scenarioId: "scenario_the_class_2008",
    expected: [13, 3, 1],
    resolve: resolveContemporaryEuropeanSocialCareSystemsFilmStudyMap,
  },
  {
    scenarioId: "scenario_walle_2008",
    expected: [15, 1, 1],
    resolve: resolveConstructedWorldsFilmStudyMap,
  },
  {
    scenarioId: "scenario_a_prophet_2009",
    expected: [14, 2, 1],
    resolve: resolveCrimeNoirTransformationsFilmStudyMap,
  },
  {
    scenarioId: "scenario_alamar_2009",
    expected: [12, 4, 1],
    resolve: resolveMinimalistRoadFilmStudyMap,
  },
];

test("the next four scenarios resolve as source-backed Production Cases", () => {
  const scenarios = getClassicFilmScenarios();
  for (const item of cases) {
    const scenario = scenarios.find((candidate) => candidate.id === item.scenarioId);
    assert.ok(scenario, `Missing scenario ${item.scenarioId}`);
    const study = item.resolve(scenario, resolveScenarioProductionBrief(scenario));
    assert.equal(study?.historyStatus, "source_backed", item.scenarioId);
    assert.equal(study?.coverage.length, 17, item.scenarioId);
    assert.deepEqual(
      [
        study?.coverageSummary.sourceVerified,
        study?.coverageSummary.mapped,
        study?.coverageSummary.notCentral,
      ],
      item.expected,
      item.scenarioId,
    );
    assert.equal(study?.verification?.status, "verified", item.scenarioId);
    assert.equal(study?.verification?.sources.length, 4, item.scenarioId);
    assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 4, item.scenarioId);
  }
});

test("the next four cases receive exact isolated donor sets", () => {
  const theClass = getContemporaryEuropeanSocialCareSystemsFilmHistoryProfile("scenario_the_class_2008");
  assert.ok(theClass);
  assert.deepEqual(getTheClassDonorScenarioIds(theClass), [
    "scenario_toni_erdmann_2016",
    "scenario_aftersun_2022",
    "scenario_the_room_next_door_2024",
  ]);
  assert.equal(createContemporaryEuropeanSocialCareSystemsFilmHistoryChoices(theClass).length, 3);

  const walle = getConstructedWorldsFilmHistoryProfile("scenario_walle_2008");
  assert.ok(walle);
  assert.deepEqual(getWalleDonorScenarioIds(walle), [
    "scenario_2001_a_space_odyssey_1968",
    "scenario_star_wars_1977",
    "scenario_brazil_1985",
  ]);
  assert.equal(createConstructedWorldsFilmHistoryChoices(walle).length, 3);

  const prophet = getCrimeNoirTransformationsFilmHistoryProfile("scenario_a_prophet_2009");
  assert.ok(prophet);
  assert.deepEqual(getAProphetFilmHistoryDonors(prophet)?.map((donor) => donor.scenarioId), [
    "scenario_clockers_1995",
    "scenario_mesrine_killer_instinct_2008",
    "scenario_out_of_the_past_1947",
  ]);
  assert.equal(createCrimeNoirTransformationsFilmHistoryChoices(prophet).length, 3);

  const alamar = getMinimalistRoadFilmHistoryProfile("scenario_alamar_2009");
  assert.ok(alamar);
  assert.deepEqual(getAlamarDonorScenarioIds(alamar), [
    "scenario_stranger_than_paradise_1984",
    "scenario_paris_texas_1984",
    "scenario_nebraska_2013",
  ]);
  assert.equal(createMinimalistRoadFilmHistoryChoices(alamar).length, 3);
});

test("existing resolver choices do not receive the new batch feedback", () => {
  const checks = [
    createContemporaryEuropeanSocialCareSystemsFilmHistoryChoices(
      getContemporaryEuropeanSocialCareSystemsFilmHistoryProfile("scenario_toni_erdmann_2016")!,
    ),
    createConstructedWorldsFilmHistoryChoices(
      getConstructedWorldsFilmHistoryProfile("scenario_dogville_2003")!,
    ),
    createCrimeNoirTransformationsFilmHistoryChoices(
      getCrimeNoirTransformationsFilmHistoryProfile("scenario_mesrine_killer_instinct_2008")!,
    ),
    createMinimalistRoadFilmHistoryChoices(
      getMinimalistRoadFilmHistoryProfile("scenario_bombon_el_perro_2004")!,
    ),
  ];
  const newMarkers = ["school-year workshop", "silent-comedy robot", "purpose-built prison", "reef ecosystem"];
  for (const choices of checks) {
    for (const marker of newMarkers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, marker);
    }
  }
});
