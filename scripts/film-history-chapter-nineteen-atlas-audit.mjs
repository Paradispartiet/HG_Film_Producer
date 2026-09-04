import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = 539;
const BASE_EXPECTED_ATLAS_COUNT = 590;
const EXPECTED_ATLAS_COUNT = 591;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(scriptDir, "film-history-chapter-nineteen-atlas-audit-base.mjs");
const insertionMarker = "const candidates = [";
const triangleNeedles = ['"title": "Triangle of Sadness"', 'title: "Triangle of Sadness"'];
const drommerNeedles = ['"title": "Drømmer"', 'title: "Drømmer"'];

const triangleCandidate = `
  {
    "title": "Triangle of Sadness",
    "originalTitle": "Triangle of Sadness",
    "year": 2022,
    "aliases": ["Sans filtre"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 Palme d'Or reconciliation: reuse the existing verified production case rather than materializing a duplicate Atlas scenario."
  },`;

const drommerCandidate = `
  {
    "title": "Drømmer",
    "originalTitle": "Drømmer",
    "year": 2024,
    "aliases": ["Dreams", "Dreams (Sex Love)", "Dreams (Sex, Love)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2025 Golden Bear corrective case: preserve 2024 as film year, materialize the source-backed Norwegian Production Case, and keep award year separate from production chronology."
  },`;

const baseSource = readFileSync(basePath, "utf8");
const requiredBaselineConstants = [
  `const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = ${CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT};`,
  `const EXPECTED_ATLAS_COUNT = ${BASE_EXPECTED_ATLAS_COUNT};`,
];
for (const baselineConstant of requiredBaselineConstants) {
  if (!baseSource.includes(baselineConstant)) throw new Error(`Chapter 19 base audit lost required baseline contract: ${baselineConstant}`);
}
if (triangleNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Triangle of Sadness; consolidate the wrapper deliberately before continuing.");
if (drommerNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Drømmer; consolidate the wrapper deliberately before continuing.");
if (!baseSource.includes(insertionMarker)) throw new Error("Chapter 19 candidate insertion marker is missing; refusing to run a partially reconciled audit.");

const reconciledSource = baseSource
  .replace(`const EXPECTED_ATLAS_COUNT = ${BASE_EXPECTED_ATLAS_COUNT};`, `const EXPECTED_ATLAS_COUNT = ${EXPECTED_ATLAS_COUNT};`)
  .replace('auditDate: "2026-08-28"', 'auditDate: "2026-09-04"')
  .replace(insertionMarker, `${insertionMarker}${triangleCandidate}${drommerCandidate}`);
const temporaryAuditPath = path.join(scriptDir, `.film-history-chapter-nineteen-atlas-audit-reconciled-${process.pid}.mjs`);

try {
  writeFileSync(temporaryAuditPath, reconciledSource);
  const stdout = execFileSync(process.execPath, [temporaryAuditPath, ...process.argv.slice(2)], {
    cwd: process.cwd(), encoding: "utf8", maxBuffer: 32 * 1024 * 1024, stdio: ["ignore", "pipe", "inherit"],
  });
  process.stdout.write(stdout);
} finally {
  try { unlinkSync(temporaryAuditPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}
