import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getMoonriseKingdomFilmHistoryDonors } from "./scenarioFilmStudyConstructedWorldsMoonriseKingdomCatalog.js";
import { getBrokenCircleBreakdownFilmHistoryDonors } from "./scenarioFilmStudyFamilyPerformanceBrokenCircleBreakdownCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { getSearchingForSugarManFilmHistoryDonors } from "./scenarioFilmStudyMusicDocumentarySearchingForSugarManCatalog.js";
import { getInTheHouseFilmHistoryDonors } from "./scenarioFilmStudySubjectiveEnclosureInTheHouseCatalog.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

type Case = {
  readonly scenarioId: string;
  readonly expected: readonly [number, number, number];
  readonly resolver: "independent" | "constructed";
};

const cases: readonly Case[] = [
  {
    scenarioId: "scenario_in_the_house_2012",
    expected: [13, 3, 1],
    resolver: "independent",
  },
  {
    scenarioId: "scenario_moonrise_kingdom_2012",
    expected: [15, 1, 1],
    resolver: "constructed",
  },
  {
    scenarioId: "scenario_searching_for_sugar_man_2012",
    expected: [13, 3, 1],
    resolver: "independent",
  },
  {
    scenarioId: "scenario_the_broken_circle_breakdown_2012",
    expected: [14, 2, 1],
    resolver: "independent",
  },
];

test("the next four 2012 scenarios resolve as source-backed Production Cases", () => {
  const scenarios = getClassicFilmScenarios();
  for (const item of cases) {
    const scenario = scenarios.find((candidate) => candidate.id === item.scenarioId);
    assert.ok(scenario, `Missing scenario ${item.scenarioId}`);
    const brief = resolveScenarioProductionBrief(scenario);
    const study = item.resolver === "constructed"
      ? resolveConstructedWorldsFilmStudyMap(scenario, brief)
      : resolveIndependentStorytellingFilmStudyMap(scenario, brief);
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

test("the next four 2012 cases receive exact isolated donor sets", () => {
  const inTheHouse = getIndependentStorytellingFilmHistoryProfile("scenario_in_the_house_2012");
  assert.ok(inTheHouse);
  assert.deepEqual(getInTheHouseFilmHistoryDonors(inTheHouse)?.map((donor) => donor.scenarioId), [
    "scenario_the_game_1997",
    "scenario_barton_fink_1991",
    "scenario_being_john_malkovich_1999",
  ]);
  assert.equal(createIndependentStorytellingFilmHistoryChoices(inTheHouse).length, 3);

  const moonrise = getConstructedWorldsFilmHistoryProfile("scenario_moonrise_kingdom_2012");
  assert.ok(moonrise);
  assert.deepEqual(getMoonriseKingdomFilmHistoryDonors(moonrise)?.map((donor) => donor.scenarioId), [
    "scenario_hugo_2011",
    "scenario_midnight_in_paris_2011",
    "scenario_the_truman_show_1998",
  ]);
  assert.equal(createConstructedWorldsFilmHistoryChoices(moonrise).length, 3);

  const sugarMan = getIndependentStorytellingFilmHistoryProfile("scenario_searching_for_sugar_man_2012");
  assert.ok(sugarMan);
  assert.deepEqual(getSearchingForSugarManFilmHistoryDonors(sugarMan)?.map((donor) => donor.scenarioId), [
    "scenario_all_the_beauty_and_the_bloodshed_2022",
    "scenario_paris_is_burning_1990",
    "scenario_american_splendor_2003",
  ]);
  assert.equal(createIndependentStorytellingFilmHistoryChoices(sugarMan).length, 3);

  const brokenCircle = getIndependentStorytellingFilmHistoryProfile("scenario_the_broken_circle_breakdown_2012");
  assert.ok(brokenCircle);
  assert.deepEqual(getBrokenCircleBreakdownFilmHistoryDonors(brokenCircle)?.map((donor) => donor.scenarioId), [
    "scenario_scenes_from_a_marriage_1974",
    "scenario_dancer_in_the_dark_2000",
    "scenario_the_sons_room_2001",
  ]);
  assert.equal(createIndependentStorytellingFilmHistoryChoices(brokenCircle).length, 3);
});

test("existing resolver choices do not receive the new 2012 feedback", () => {
  const checks = [
    createIndependentStorytellingFilmHistoryChoices(
      getIndependentStorytellingFilmHistoryProfile("scenario_the_game_1997")!,
    ),
    createIndependentStorytellingFilmHistoryChoices(
      getIndependentStorytellingFilmHistoryProfile("scenario_all_the_beauty_and_the_bloodshed_2022")!,
    ),
    createIndependentStorytellingFilmHistoryChoices(
      getIndependentStorytellingFilmHistoryProfile("scenario_the_savages_2007")!,
    ),
    createConstructedWorldsFilmHistoryChoices(
      getConstructedWorldsFilmHistoryProfile("scenario_hugo_2011")!,
    ),
  ];
  const newMarkers = [
    "weekly school writing",
    "South African fan investigation",
    "bluegrass theatre",
    "1965 runaway screenplay",
  ];
  for (const choices of checks) {
    for (const marker of newMarkers) {
      assert.equal(choices.some((choice) => choice.feedback.includes(marker)), false, marker);
    }
  }
});
