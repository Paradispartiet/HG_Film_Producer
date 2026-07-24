import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";

type AuditScenario = {
  readonly id: string;
  readonly title: string;
  readonly year: number;
};

type AuditReport = {
  readonly totals: {
    readonly playableScenarios: number;
    readonly verifiedProductionCases: number;
    readonly unverifiedProductionCases: number;
    readonly sourceBackedProfiles: number;
    readonly filmSpecificProductionBriefs: number;
    readonly seedFallbackProductionBriefs: number;
    readonly scenariosWithoutSourceBackedProfile: number;
  };
  readonly unverifiedDistributions: {
    readonly byOrigin: Readonly<Record<string, number>>;
    readonly byDecade: Readonly<Record<string, number>>;
    readonly byGenre: Readonly<Record<string, number>>;
  };
  readonly unverified: readonly AuditScenario[];
};

function replaceCount(document: string, label: string, value: number): string {
  const pattern = new RegExp(`(\\| ${label.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")} \\| )\\d+( \\|)`);
  assert.match(document, pattern, `Missing count row ${label}`);
  return document.replace(pattern, `$1${value}$2`);
}

function replaceDistribution(
  document: string,
  values: Readonly<Record<string, number>>,
  formatLabel: (label: string) => string,
): string {
  let next = document;
  for (const [label, value] of Object.entries(values)) {
    const rendered = formatLabel(label);
    const pattern = new RegExp(`(\\| ${rendered.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")} \\| )\\d+( \\|)`);
    assert.match(next, pattern, `Missing distribution row ${label}`);
    next = next.replace(pattern, `$1${value}$2`);
  }
  return next;
}

function escapeCell(value: string): string {
  return value.replace(/\|/g, "\\|");
}

test("capture updated Down by Law rest audit document", () => {
  const output = execFileSync(process.execPath, ["scripts/production-case-rest-audit.mjs"], {
    encoding: "utf8",
  });
  const startMarker = "HG_FILM_PRODUCER_REST_AUDIT_START\n";
  const endMarker = "\nHG_FILM_PRODUCER_REST_AUDIT_END";
  const start = output.indexOf(startMarker);
  const end = output.indexOf(endMarker);
  assert.notEqual(start, -1);
  assert.notEqual(end, -1);
  const report = JSON.parse(output.slice(start + startMarker.length, end)) as AuditReport;

  let document = readFileSync("docs/PRODUCTION_CASE_REST_AUDIT.md", "utf8");
  document = replaceCount(document, "Playable scenarios", report.totals.playableScenarios);
  document = replaceCount(document, "Source-verified Production Cases", report.totals.verifiedProductionCases);
  document = replaceCount(document, "Remaining unverified Production Cases", report.totals.unverifiedProductionCases);
  document = replaceCount(document, "Source-backed Film Study profiles", report.totals.sourceBackedProfiles);
  document = replaceCount(document, "Film-specific production briefs", report.totals.filmSpecificProductionBriefs);
  document = replaceCount(document, "Seed fallback briefs", report.totals.seedFallbackProductionBriefs);
  document = replaceCount(document, "Scenarios without source-backed profile", report.totals.scenariosWithoutSourceBackedProfile);
  document = document.replace(/After correction, all \d+ verified records and profiles/, `After correction, all ${report.totals.verifiedProductionCases} verified records and profiles`);

  document = replaceDistribution(document, report.unverifiedDistributions.byOrigin, (label) => `\\`${label}\\``);
  document = replaceDistribution(document, report.unverifiedDistributions.byDecade, (label) => label);
  document = replaceDistribution(document, report.unverifiedDistributions.byGenre, (label) => label);

  const listHeader = "| # | Year | Film | Scenario ID |\n|---:|---:|---|---|\n";
  const listStart = document.indexOf(listHeader);
  const methodStart = document.indexOf("\n## Audit method", listStart);
  assert.notEqual(listStart, -1);
  assert.notEqual(methodStart, -1);
  const rows = report.unverified
    .map((scenario, index) => `| ${index + 1} | ${scenario.year} | ${escapeCell(scenario.title)} | \\`${scenario.id}\\` |`)
    .join("\n");
  document = `${document.slice(0, listStart + listHeader.length)}${rows}\n${document.slice(methodStart)}`;

  console.log(`DOWN_BY_LAW_REST_AUDIT_BASE64:${Buffer.from(document, "utf8").toString("base64")}`);
  assert.fail("Down by Law rest audit capture complete");
});
