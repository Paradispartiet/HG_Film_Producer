import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import test from "node:test";

const documentPath = "docs/PRODUCTION_CASE_REST_AUDIT.md";
const auditPath = "/tmp/where-friends-house-rest-audit.json";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeCell(value: string): string {
  return value.replace(/\|/g, "\\|");
}

function replaceCount(document: string, label: string, value: number): string {
  const pattern = new RegExp(`(\\| ${escapeRegExp(label)} \\| )\\d+( \\|)`);
  assert.match(document, pattern, `Missing count row: ${label}`);
  return document.replace(pattern, `$1${value}$2`);
}

function replaceSectionTable(
  document: string,
  title: string,
  rows: readonly string[],
): string {
  const sectionStart = document.indexOf(`## ${title}`);
  assert.notEqual(sectionStart, -1, `Missing section: ${title}`);
  const nextSection = document.indexOf("\n## ", sectionStart + 3);
  assert.notEqual(nextSection, -1, `Missing section after: ${title}`);
  const tableStart = document.indexOf("|", sectionStart);
  assert.ok(tableStart > sectionStart && tableStart < nextSection, `Missing table: ${title}`);
  const firstHeaderEnd = document.indexOf("\n", tableStart);
  const secondHeaderEnd = document.indexOf("\n", firstHeaderEnd + 1);
  assert.ok(firstHeaderEnd > tableStart && secondHeaderEnd > firstHeaderEnd);
  return `${document.slice(0, secondHeaderEnd + 1)}${rows.join("\n")}\n${document.slice(nextSection)}`;
}

test("update Production Case rest audit for Where Is the Friend's House", () => {
  execFileSync(process.execPath, [
    "scripts/production-case-rest-audit.mjs",
    `--write=${auditPath}`,
  ], { stdio: "ignore" });

  const report = JSON.parse(readFileSync(auditPath, "utf8")) as {
    totals: {
      playableScenarios: number;
      verifiedProductionCases: number;
      unverifiedProductionCases: number;
      sourceBackedProfiles: number;
      filmSpecificProductionBriefs: number;
      seedFallbackProductionBriefs: number;
      scenariosWithoutSourceBackedProfile: number;
    };
    unverifiedDistributions: {
      byOrigin: Record<string, number>;
      byDecade: Record<string, number>;
      byGenre: Record<string, number>;
    };
    unverified: readonly {
      year: number;
      title: string;
      id: string;
    }[];
  };

  assert.equal(report.totals.verifiedProductionCases, 261);
  assert.equal(report.totals.unverifiedProductionCases, 117);
  assert.equal(report.unverified[0]?.id, "scenario_cinema_paradiso_1988");

  let document = readFileSync(documentPath, "utf8");
  document = replaceCount(document, "Playable scenarios", report.totals.playableScenarios);
  document = replaceCount(document, "Source-verified Production Cases", report.totals.verifiedProductionCases);
  document = replaceCount(document, "Remaining unverified Production Cases", report.totals.unverifiedProductionCases);
  document = replaceCount(document, "Source-backed Film Study profiles", report.totals.sourceBackedProfiles);
  document = replaceCount(document, "Film-specific production briefs", report.totals.filmSpecificProductionBriefs);
  document = replaceCount(document, "Seed fallback briefs", report.totals.seedFallbackProductionBriefs);
  document = replaceCount(document, "Scenarios without source-backed profile", report.totals.scenariosWithoutSourceBackedProfile);
  document = document.replace(
    /After correction, all \d+ verified records and profiles/,
    `After correction, all ${report.totals.verifiedProductionCases} verified records and profiles`,
  );

  document = replaceSectionTable(
    document,
    "Remaining work by origin",
    Object.entries(report.unverifiedDistributions.byOrigin).map(
      ([label, count]) => `| \`${label}\` | ${count} |`,
    ),
  );
  document = replaceSectionTable(
    document,
    "Remaining work by decade",
    Object.entries(report.unverifiedDistributions.byDecade).map(
      ([label, count]) => `| ${label} | ${count} |`,
    ),
  );
  document = replaceSectionTable(
    document,
    "Remaining work by genre",
    Object.entries(report.unverifiedDistributions.byGenre).map(
      ([label, count]) => `| ${label} | ${count} |`,
    ),
  );

  const listHeader = "| # | Year | Film | Scenario ID |\n|---:|---:|---|---|\n";
  const listStart = document.indexOf(listHeader);
  const methodStart = document.indexOf("\n## Audit method", listStart);
  assert.notEqual(listStart, -1);
  assert.notEqual(methodStart, -1);
  const rows = report.unverified.map(
    (scenario, index) => `| ${index + 1} | ${scenario.year} | ${escapeCell(scenario.title)} | \`${scenario.id}\` |`,
  );
  document = `${document.slice(0, listStart + listHeader.length)}${rows.join("\n")}\n${document.slice(methodStart)}`;

  writeFileSync(documentPath, document, "utf8");
});
