import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import test from "node:test";

function replaceOnce(source: string, before: string, after: string, label: string): string {
  const first = source.indexOf(before);
  assert.notEqual(first, -1, `Missing ${label}`);
  assert.equal(source.indexOf(before, first + before.length), -1, `Duplicate ${label}`);
  return `${source.slice(0, first)}${after}${source.slice(first + before.length)}`;
}

test("apply Where Is the Friend's House integration files", () => {
  const batchPath = "src/ui/data/scenarioFilmStudyMinimalistRoadBatch.ts";
  let batch = readFileSync(batchPath, "utf8");
  if (!batch.includes("getWhereIsTheFriendsHouseFilmHistoryProfile")) {
    batch = replaceOnce(
      batch,
      'import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";',
      'import {\n  getWhereIsTheFriendsHouseDonorScenarioIds,\n  getWhereIsTheFriendsHouseFilmHistoryProfile,\n} from "./scenarioFilmStudyMinimalistRoadWhereFriendsHouseCatalog";\nimport { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";',
      "minimalist-road catalog import",
    );
    batch = replaceOnce(
      batch,
      'export function getMinimalistRoadFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {\n  return minimalistRoadProfiles[scenarioId as keyof typeof minimalistRoadProfiles];\n}',
      'export function getMinimalistRoadFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {\n  return getWhereIsTheFriendsHouseFilmHistoryProfile(scenarioId)\n    ?? minimalistRoadProfiles[scenarioId as keyof typeof minimalistRoadProfiles];\n}',
      "minimalist-road profile resolver",
    );
    batch = replaceOnce(
      batch,
      '  const donors = Object.values(minimalistRoadProfiles)\n    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)\n    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));',
      '  const priorityDonorIds = getWhereIsTheFriendsHouseDonorScenarioIds(profile);\n  const priorityDonors = priorityDonorIds?.map(\n    (scenarioId) => minimalistRoadProfiles[scenarioId as keyof typeof minimalistRoadProfiles],\n  ).filter(Boolean) as readonly FilmHistoryProfile[] | undefined;\n  const donors = priorityDonors ?? Object.values(minimalistRoadProfiles)\n    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)\n    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));',
      "minimalist-road donor selection",
    );
    batch = replaceOnce(
      batch,
      '      feedback: "This is a real minimalist or road-cinema production history, but it belongs to another industrial, regional and technical system.",',
      '      feedback: priorityDonors\n        ? "This is another real minimalist journey system, but it organizes adult alienation, transatlantic landscape or digital regional memory through a different production logic."\n        : "This is a real minimalist or road-cinema production history, but it belongs to another industrial, regional and technical system.",',
      "minimalist-road partial feedback",
    );
    batch = replaceOnce(
      batch,
      '      feedback: "This places the film inside the wrong historical relationship between location, design, performance and image-making.",',
      '      feedback: priorityDonors\n        ? "This places the film inside the wrong relationship between a child\'s ethical quest, village geography, nonprofessional performance, repetition and documentary observation."\n        : "This places the film inside the wrong historical relationship between location, design, performance and image-making.",',
      "minimalist-road miss feedback",
    );
    writeFileSync(batchPath, batch, "utf8");
  }

  const registryPath = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let registry = readFileSync(registryPath, "utf8");
  if (!registry.includes("whereIsTheFriendsHouseVerificationRecords")) {
    registry = replaceOnce(
      registry,
      'import { downByLawVerificationRecords } from "./scenarioProductionVerificationDownByLaw";',
      'import { downByLawVerificationRecords } from "./scenarioProductionVerificationDownByLaw";\nimport { whereIsTheFriendsHouseVerificationRecords } from "./scenarioProductionVerificationWhereFriendsHouse";',
      "verification import",
    );
    registry = replaceOnce(
      registry,
      '  ...downByLawVerificationRecords,',
      '  ...downByLawVerificationRecords,\n  ...whereIsTheFriendsHouseVerificationRecords,',
      "verification spread",
    );
    writeFileSync(registryPath, registry, "utf8");
  }

  const verificationTestPath = "src/ui/data/scenarioProductionVerification.test.ts";
  let verificationTest = readFileSync(verificationTestPath, "utf8");
  if (!verificationTest.includes("Where Is the Friend's House child-centred Koker journey system")) {
    verificationTest = replaceOnce(
      verificationTest,
      '  ["Down by Law independent outsider-location production system", ["scenario_down_by_law_1986"], 5],',
      '  ["Down by Law independent outsider-location production system", ["scenario_down_by_law_1986"], 5],\n  ["Where Is the Friend\'s House child-centred Koker journey system", ["scenario_where_is_the_friend_s_house_1987"], 5],',
      "verification group",
    );
    verificationTest = replaceOnce(
      verificationTest,
      "const expectedVerifiedCount = 260;",
      "const expectedVerifiedCount = 261;",
      "verified count",
    );
    writeFileSync(verificationTestPath, verificationTest, "utf8");
  }

  assert.match(readFileSync(batchPath, "utf8"), /getWhereIsTheFriendsHouseFilmHistoryProfile/);
  assert.match(readFileSync(registryPath, "utf8"), /whereIsTheFriendsHouseVerificationRecords/);
  assert.match(readFileSync(verificationTestPath, "utf8"), /const expectedVerifiedCount = 261;/);
});
