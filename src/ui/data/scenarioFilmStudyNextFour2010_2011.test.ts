import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getASomewhatGentleManFilmHistoryDonors,
  getASomewhatGentleManFilmHistoryProfile,
} from "./scenarioFilmStudyModernNordicBehaviorSomewhatGentleManCatalog.js";
import {
  createModernNordicBehaviorSystemsFilmHistoryChoices,
  getModernNordicBehaviorSystemsFilmHistoryProfile,
  resolveModernNordicBehaviorSystemsFilmStudyMap,
} from "./scenarioFilmStudyModernNordicBehaviorSystemsBatch.js";
import {
  getTrollHunterFilmHistoryDonors,
  getTrollHunterFilmHistoryProfile,
} from "./scenarioFilmStudyNorwegianPostwarTrollHunterCatalog.js";
import {
  createNorwegianPostwarGenreSystemsFilmHistoryChoices,
  getNorwegianPostwarGenreSystemsFilmHistoryProfile,
  resolveNorwegianPostwarGenreSystemsFilmStudyMap,
} from "./scenarioFilmStudyNorwegianPostwarGenreSystemsBatch.js";
import {
  getDetachmentFilmHistoryDonors,
  getDetachmentFilmHistoryProfile,
} from "./scenarioFilmStudyAmericanPrecarityDetachmentCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import {
  getHugoFilmHistoryDonors,
  getHugoFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsHugoCatalog.js";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "./scenarioFilmStudyConstructedWorldsBatch.js";
import { getScenarioProductionBrief } from "./scenarioProductionBriefs.js";

function scenario(scenarioId: string) {
  const found = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(found, `Missing scenario ${scenarioId}`);
  return found;
}

function brief(scenarioId: string) {
  const found = getScenarioProductionBrief(scenarioId);
  assert.ok(found, `Missing brief ${scenarioId}`);
  return found;
}

function coverageCounts(coverage: readonly { readonly status: string }[]): readonly [number, number, number] {
  return [
    coverage.filter((item) => item.status === "source_verified").length,
    coverage.filter((item) => item.status === "mapped").length,
    coverage.filter((item) => item.status === "not_central").length,
  ];
}

const cases = [
  {
    scenarioId: "scenario_a_somewhat_gentle_man_2010",
    expectedCoverage: [14, 2, 1] as const,
    expectedSources: 4,
    expectedDonors: [
      "scenario_force_majeure_2014",
      "scenario_another_round_2020",
      "scenario_the_worst_person_in_the_world_2021",
    ],
    profile: getASomewhatGentleManFilmHistoryProfile,
    donors: getASomewhatGentleManFilmHistoryDonors,
    resolvedProfile: getModernNordicBehaviorSystemsFilmHistoryProfile,
    resolve: resolveModernNordicBehaviorSystemsFilmStudyMap,
    choices: createModernNordicBehaviorSystemsFilmHistoryChoices,
  },
  {
    scenarioId: "scenario_troll_hunter_2010",
    expectedCoverage: [15, 1, 1] as const,
    expectedSources: 4,
    expectedDonors: [
      "scenario_de_dodes_tjern_1958",
      "scenario_insomnia_1997",
      "scenario_fjols_til_fjells_1957",
    ],
    profile: getTrollHunterFilmHistoryProfile,
    donors: getTrollHunterFilmHistoryDonors,
    resolvedProfile: getNorwegianPostwarGenreSystemsFilmHistoryProfile,
    resolve: resolveNorwegianPostwarGenreSystemsFilmStudyMap,
    choices: createNorwegianPostwarGenreSystemsFilmHistoryChoices,
  },
  {
    scenarioId: "scenario_detachment_2011",
    expectedCoverage: [13, 3, 1] as const,
    expectedSources: 5,
    expectedDonors: [
      "scenario_wendy_and_lucy_2008",
      "scenario_sound_of_metal_2019",
      "scenario_never_rarely_sometimes_always_2020",
    ],
    profile: getDetachmentFilmHistoryProfile,
    donors: getDetachmentFilmHistoryDonors,
    resolvedProfile: getIndependentStorytellingFilmHistoryProfile,
    resolve: resolveIndependentStorytellingFilmStudyMap,
    choices: createIndependentStorytellingFilmHistoryChoices,
  },
  {
    scenarioId: "scenario_hugo_2011",
    expectedCoverage: [16, 0, 1] as const,
    expectedSources: 4,
    expectedDonors: [
      "scenario_walle_2008",
      "scenario_brazil_1985",
      "scenario_the_pianist_2002",
    ],
    profile: getHugoFilmHistoryProfile,
    donors: getHugoFilmHistoryDonors,
    resolvedProfile: getConstructedWorldsFilmHistoryProfile,
    resolve: resolveConstructedWorldsFilmStudyMap,
    choices: createConstructedWorldsFilmHistoryChoices,
  },
] as const;

for (const item of cases) {
  test(`${item.scenarioId} resolves as a complete source-backed Production Case`, () => {
    const directProfile = item.profile(item.scenarioId);
    assert.ok(directProfile);
    assert.equal(item.resolvedProfile(item.scenarioId)?.scenarioId, item.scenarioId);

    const map = item.resolve(scenario(item.scenarioId), brief(item.scenarioId));
    assert.ok(map);
    assert.equal(map.historyStatus, "source_backed");
    assert.equal(map.historyProfile?.scenarioId, item.scenarioId);
    assert.equal(map.coverage.length, 17);
    assert.deepEqual(coverageCounts(map.coverage), item.expectedCoverage);
    assert.equal(map.verification?.status, "verified");
    assert.equal(map.verification?.sources.length, item.expectedSources);
    assert.ok(new Set(map.verification?.sources.map((source) => source.publisher)).size >= 4);

    const donors = item.donors(directProfile);
    assert.deepEqual(donors?.map((donor) => donor.scenarioId), item.expectedDonors);

    const choices = item.choices(directProfile);
    assert.equal(choices.length, 3);
    assert.deepEqual(choices.map((choice) => choice.quality), ["match", "partial", "miss"]);
  });
}

test("the four new donor branches do not leak into established choices", () => {
  const forceMajeure = getModernNordicBehaviorSystemsFilmHistoryProfile("scenario_force_majeure_2014");
  const insomnia = getNorwegianPostwarGenreSystemsFilmHistoryProfile("scenario_insomnia_1997");
  const wendyAndLucy = getIndependentStorytellingFilmHistoryProfile("scenario_wendy_and_lucy_2008");
  const walle = getConstructedWorldsFilmHistoryProfile("scenario_walle_2008");
  assert.ok(forceMajeure && insomnia && wendyAndLucy && walle);

  assert.ok(createModernNordicBehaviorSystemsFilmHistoryChoices(forceMajeure)
    .every((choice) => !choice.feedback.includes("post-prison reintegration")));
  assert.ok(createNorwegianPostwarGenreSystemsFilmHistoryChoices(insomnia)
    .every((choice) => !choice.feedback.includes("state troll management")));
  assert.ok(createIndependentStorytellingFilmHistoryChoices(wendyAndLucy)
    .every((choice) => !choice.feedback.includes("public-school crisis")));
  assert.ok(createConstructedWorldsFilmHistoryChoices(walle)
    .every((choice) => !choice.feedback.includes("Méliès adaptation")));
});
