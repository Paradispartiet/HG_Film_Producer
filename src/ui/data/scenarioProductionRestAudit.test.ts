import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";
import { getProductionCaseVerificationRecords } from "./scenarioProductionVerificationRegistry.js";

type CountMap = Record<string, number>;

type AuditScenario = {
  readonly id: string;
  readonly title: string;
  readonly year: number;
  readonly directors: readonly string[];
  readonly genres: readonly string[];
  readonly status: string;
  readonly sourceListId: string;
  readonly briefType: "production_case" | "seed_fallback";
  readonly hasProfile: boolean;
};

function increment(target: CountMap, key: string): void {
  target[key] = (target[key] ?? 0) + 1;
}

function sortedCounts(values: CountMap): CountMap {
  return Object.fromEntries(
    Object.entries(values).sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0])),
  );
}

function decadeLabel(year: number): string {
  return `${Math.floor(year / 10) * 10}s`;
}

function duplicateValues(values: readonly string[]): readonly string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates].sort();
}

function scanFilmHistoryProfileIds(): {
  readonly ids: ReadonlySet<string>;
  readonly origins: Readonly<Record<string, readonly string[]>>;
  readonly scannedFiles: readonly string[];
} {
  const dataDirectory = path.join(process.cwd(), "src", "ui", "data");
  assert.ok(existsSync(dataDirectory), `Missing source directory: ${dataDirectory}`);

  const scannedFiles = readdirSync(dataDirectory)
    .filter((fileName) => fileName.startsWith("scenarioFilmStudy"))
    .filter((fileName) => fileName.endsWith(".ts"))
    .filter((fileName) => !fileName.endsWith(".test.ts"))
    .sort();

  const origins = new Map<string, string[]>();
  const scenarioIdPattern = /scenarioId\s*:\s*["'`](scenario_[a-z0-9_]+)["'`]/g;

  for (const fileName of scannedFiles) {
    const source = readFileSync(path.join(dataDirectory, fileName), "utf8");
    if (!source.includes("FilmHistoryProfile")) continue;
    for (const match of source.matchAll(scenarioIdPattern)) {
      const scenarioId = match[1];
      const files = origins.get(scenarioId) ?? [];
      if (!files.includes(fileName)) files.push(fileName);
      origins.set(scenarioId, files);
    }
  }

  return {
    ids: new Set(origins.keys()),
    origins: Object.fromEntries(
      [...origins.entries()]
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([scenarioId, files]) => [scenarioId, [...files].sort()] as const),
    ),
    scannedFiles,
  };
}

test("full Production Case catalog rest audit", () => {
  const scenarios = getClassicFilmScenarios();
  const verificationRecords = getProductionCaseVerificationRecords();
  const scenarioIds = scenarios.map((scenario) => scenario.id);
  const verificationIds = verificationRecords.map((record) => record.scenarioId);
  const scenarioIdSet = new Set(scenarioIds);
  const verificationIdSet = new Set(verificationIds);
  const profileScan = scanFilmHistoryProfileIds();

  const duplicateScenarioIds = duplicateValues(scenarioIds);
  const duplicateVerificationIds = duplicateValues(verificationIds);
  const orphanVerificationIds = [...verificationIdSet].filter((scenarioId) => !scenarioIdSet.has(scenarioId)).sort();
  const orphanProfileIds = [...profileScan.ids].filter((scenarioId) => !scenarioIdSet.has(scenarioId)).sort();
  const verifiedWithoutProfile = [...verificationIdSet].filter((scenarioId) => !profileScan.ids.has(scenarioId)).sort();
  const profilesWithoutVerification = [...profileScan.ids].filter((scenarioId) => !verificationIdSet.has(scenarioId)).sort();

  const sourceQualityProblems = verificationRecords.flatMap((record) => {
    const publishers = new Set(record.sources.map((source) => source.publisher));
    const problems: string[] = [];
    if (record.sources.length < 2) problems.push("fewer_than_two_sources");
    if (publishers.size < 2) problems.push("fewer_than_two_publishers");
    if (record.sources.some((source) => !source.url.startsWith("https://"))) problems.push("non_https_source");
    if (record.sources.some((source) => source.supports.length === 0)) problems.push("source_without_supported_area");
    return problems.map((problem) => `${record.scenarioId}:${problem}`);
  });

  const auditScenarios: AuditScenario[] = scenarios.map((scenario) => {
    const brief = resolveScenarioProductionBrief(scenario);
    return {
      id: scenario.id,
      title: scenario.film.title,
      year: scenario.film.year,
      directors: scenario.film.directors,
      genres: scenario.film.genres,
      status: scenario.status,
      sourceListId: scenario.source.list_id,
      briefType: brief.briefType,
      hasProfile: profileScan.ids.has(scenario.id),
    };
  });

  const unverified = auditScenarios
    .filter((scenario) => !verificationIdSet.has(scenario.id))
    .sort((left, right) => left.year - right.year || left.title.localeCompare(right.title));
  const fallbackBriefs = auditScenarios
    .filter((scenario) => scenario.briefType === "seed_fallback")
    .sort((left, right) => left.year - right.year || left.title.localeCompare(right.title));
  const missingProfiles = auditScenarios
    .filter((scenario) => !scenario.hasProfile)
    .sort((left, right) => left.year - right.year || left.title.localeCompare(right.title));
  const missingVerificationAndProfile = unverified.filter((scenario) => !scenario.hasProfile);

  const bySourceList: CountMap = {};
  const byStatus: CountMap = {};
  const byDecade: CountMap = {};
  const byGenre: CountMap = {};
  for (const scenario of unverified) {
    increment(bySourceList, scenario.sourceListId);
    increment(byStatus, scenario.status);
    increment(byDecade, decadeLabel(scenario.year));
    for (const genre of scenario.genres) increment(byGenre, genre);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      playableScenarios: scenarios.length,
      verifiedProductionCases: verificationRecords.length,
      unverifiedProductionCases: unverified.length,
      sourceBackedProfileIdsFound: profileScan.ids.size,
      filmSpecificProductionBriefs: auditScenarios.filter((scenario) => scenario.briefType === "production_case").length,
      seedFallbackProductionBriefs: fallbackBriefs.length,
      scenariosWithoutSourceBackedProfile: missingProfiles.length,
      scenariosMissingVerificationAndProfile: missingVerificationAndProfile.length,
    },
    integrity: {
      duplicateScenarioIds,
      duplicateVerificationIds,
      orphanVerificationIds,
      orphanProfileIds,
      verifiedWithoutProfile,
      profilesWithoutVerification,
      sourceQualityProblems,
    },
    unverifiedDistributions: {
      bySourceList: sortedCounts(bySourceList),
      byStatus: sortedCounts(byStatus),
      byDecade: sortedCounts(byDecade),
      byGenre: sortedCounts(byGenre),
    },
    unverified,
    seedFallbackBriefs: fallbackBriefs,
    scenariosWithoutSourceBackedProfile: missingProfiles,
    profileOrigins: profileScan.origins,
    scannedFilmStudyFiles: profileScan.scannedFiles,
  };

  console.log("HG_FILM_PRODUCER_REST_AUDIT_START");
  console.log(JSON.stringify(report, null, 2));
  console.log("HG_FILM_PRODUCER_REST_AUDIT_END");

  assert.deepEqual(duplicateScenarioIds, []);
  assert.deepEqual(duplicateVerificationIds, []);
  assert.deepEqual(orphanVerificationIds, []);
  assert.deepEqual(sourceQualityProblems, []);
  assert.equal(verificationIdSet.size, verificationRecords.length);
  assert.equal(scenarioIdSet.size, scenarios.length);
});
