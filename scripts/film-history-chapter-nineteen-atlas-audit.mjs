import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = 539;
const BASE_EXPECTED_ATLAS_COUNT = 590;
const EXPECTED_ATLAS_COUNT = 593;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(scriptDir, "film-history-chapter-nineteen-atlas-audit-base.mjs");
const insertionMarker = "const candidates = [";
const triangleNeedles = ['"title": "Triangle of Sadness"', 'title: "Triangle of Sadness"'];
const drommerNeedles = ['"title": "Drømmer"', 'title: "Drømmer"'];
const happeningNeedles = ['"title": "Happening"', 'title: "Happening"'];
const allBeautyNeedles = ['"title": "All the Beauty and the Bloodshed"', 'title: "All the Beauty and the Bloodshed"'];
const roomNextDoorNeedles = ['"title": "The Room Next Door"', 'title: "The Room Next Door"'];
const thereIsNoEvilNeedles = ['"title": "There Is No Evil"', 'title: "There Is No Evil"'];
const badLuckNeedles = ['"title": "Bad Luck Banging or Loony Porn"', 'title: "Bad Luck Banging or Loony Porn"'];
const alcarrasNeedles = ['"title": "Alcarràs"', 'title: "Alcarràs"'];
const adamantNeedles = ['"title": "On the Adamant"', 'title: "On the Adamant"', '"originalTitle": "Sur l\'Adamant"'];
const fatherMotherNeedles = ['"title": "Father Mother Sister Brother"', 'title: "Father Mother Sister Brother"'];

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

const happeningCandidate = `
  {
    "title": "Happening",
    "originalTitle": "L'Événement",
    "year": 2021,
    "aliases": ["L'Evenement", "L’Evénement"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2021 Golden Lion reconciliation: reuse the existing canonical scenario_happening_2021 and its Production Verification, while strengthening the established Film Study/PV with direct ARRI, CNC and Île-de-France evidence instead of materializing a duplicate Atlas identity."
  },`;

const allBeautyCandidate = `
  {
    "title": "All the Beauty and the Bloodshed",
    "originalTitle": "All the Beauty and the Bloodshed",
    "year": 2022,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2022 Golden Lion reconciliation: reuse the existing canonical scenario_all_the_beauty_and_the_bloodshed_2022 and its single Production Verification identity, while adding the source-backed Film Study and strengthening direct production evidence instead of materializing a duplicate Atlas case."
  },`;

const roomNextDoorCandidate = `
  {
    "title": "The Room Next Door",
    "originalTitle": "The Room Next Door",
    "year": 2024,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2024 Golden Lion reconciliation: reuse the existing canonical scenario_the_room_next_door_2024, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const thereIsNoEvilCandidate = `
  {
    "title": "There Is No Evil",
    "originalTitle": "Sheytan vojud nadarad",
    "year": 2020,
    "aliases": ["There is no Evil"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2020 Golden Bear reconciliation: reuse the existing canonical scenario_there_is_no_evil_2020, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const badLuckCandidate = `
  {
    "title": "Bad Luck Banging or Loony Porn",
    "originalTitle": "Babardeală cu bucluc sau porno balamuc",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2021 Golden Bear reconciliation: reuse the existing canonical scenario_bad_luck_banging_or_loony_porn_2021, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const alcarrasCandidate = `
  {
    "title": "Alcarràs",
    "originalTitle": "Alcarràs",
    "year": 2022,
    "aliases": ["Alcarras"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2022 Golden Bear reconciliation: reuse the existing canonical scenario_alcarras_2022, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const adamantCandidate = `
  {
    "title": "On the Adamant",
    "originalTitle": "Sur l'Adamant",
    "year": 2023,
    "aliases": ["Sur l’Adamant"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2023 Golden Bear source-first case: materialize a new documentary Atlas/PV identity, preserve Unifrance productionYear 2022 separately from Chapter 19 filmYear 2023, and lock the documented small-crew observational, editing and sound-production boundaries without inventing unsupported technical detail."
  },`;

const fatherMotherCandidate = `
  {
    "title": "Father Mother Sister Brother",
    "originalTitle": "Father Mother Sister Brother",
    "year": 2025,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2025 Golden Lion source-first case: materialize the final correctionOrder-10 top-prize obligation as one new Atlas/PV identity and lock its three-country triptych production, approximate ten-day-per-section schedule, split cinematography/design units, 1.85 DCP/5.1 delivery and transnational production boundaries without inventing unsupported technical or financial detail."
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
if (happeningNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Happening; consolidate the wrapper deliberately before continuing.");
if (allBeautyNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains All the Beauty and the Bloodshed; consolidate the wrapper deliberately before continuing.");
if (roomNextDoorNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Room Next Door; consolidate the wrapper deliberately before continuing.");
if (thereIsNoEvilNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains There Is No Evil; consolidate the wrapper deliberately before continuing.");
if (badLuckNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Bad Luck Banging or Loony Porn; consolidate the wrapper deliberately before continuing.");
if (alcarrasNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Alcarràs; consolidate the wrapper deliberately before continuing.");
if (adamantNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains On the Adamant; consolidate the wrapper deliberately before continuing.");
if (fatherMotherNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Father Mother Sister Brother; consolidate the wrapper deliberately before continuing.");
if (!baseSource.includes(insertionMarker)) throw new Error("Chapter 19 candidate insertion marker is missing; refusing to run a partially reconciled audit.");

const reconciledSource = baseSource
  .replace(`const EXPECTED_ATLAS_COUNT = ${BASE_EXPECTED_ATLAS_COUNT};`, `const EXPECTED_ATLAS_COUNT = ${EXPECTED_ATLAS_COUNT};`)
  .replace('auditDate: "2026-08-28"', 'auditDate: "2026-09-05"')
  .replace(insertionMarker, `${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}${thereIsNoEvilCandidate}${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}${fatherMotherCandidate}`);
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
