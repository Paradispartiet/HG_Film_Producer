import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(scriptDir, "film-history-chapter-nineteen-atlas-audit-base.mjs");
const insertionMarker = "const candidates = [";
const triangleNeedle = 'title: "Triangle of Sadness"';

const triangleCandidate = `
  {
    year: 2022,
    title: "Triangle of Sadness",
    originalTitle: "Triangle of Sadness",
    aliases: ["Sans filtre"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction:
      "Cannes 2022 Palme d'Or reconciliation: reuse the existing verified production case rather than materializing a duplicate Atlas scenario.",
  },`;

const baseSource = readFileSync(basePath, "utf8");
if (baseSource.includes(triangleNeedle)) {
  throw new Error("Chapter 19 base audit already contains Triangle of Sadness; remove the reconciliation wrapper and consolidate the candidate directly.");
}
if (!baseSource.includes(insertionMarker)) {
  throw new Error("Chapter 19 candidate insertion marker is missing; refusing to run a partially reconciled audit.");
}

const reconciledSource = baseSource.replace(
  insertionMarker,
  `${insertionMarker}${triangleCandidate}`,
);
const temporaryAuditPath = path.join(
  scriptDir,
  `.film-history-chapter-nineteen-atlas-audit-reconciled-${process.pid}.mjs`,
);

try {
  writeFileSync(temporaryAuditPath, reconciledSource);
  const stdout = execFileSync(
    process.execPath,
    [temporaryAuditPath, ...process.argv.slice(2)],
    {
      cwd: process.cwd(),
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
      stdio: ["ignore", "pipe", "inherit"],
    },
  );
  process.stdout.write(stdout);
} finally {
  try {
    unlinkSync(temporaryAuditPath);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}
