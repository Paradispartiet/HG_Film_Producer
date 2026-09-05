import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";

const CASE_ID = "scenario_bad_luck_banging_or_loony_porn_2021";
const TITLE = "Bad Luck Banging or Loony Porn";
const ATLAS_PATH = "scripts/film-history-chapter-nineteen-atlas-audit.mjs";
const CH18_PATH = "scripts/film-history-chapter-eighteen-completion-audit.mjs";
const TEST_PATH = "src/core/filmHistoryChapterNineteenAuditContract.test.ts";
const RESOLVED_PATH = "docs/film-history-chapter-nineteen-atlas-resolved.json";
const FILM_STUDY_PATH = "src/ui/data/scenarioFilmStudyContemporaryDissentBadLuck.ts";
const PV_PATH = "src/ui/data/scenarioProductionVerificationContemporaryDissentRuralSystemsBatch.ts";
const TEMP_SCRIPT = "scripts/TEMP-ch19-bad-luck-banging-reconcile.mjs";
const TEMP_WORKFLOW = ".github/workflows/TEMP-ch19-bad-luck-banging-reconcile.yml";

const read = (path) => readFileSync(path, "utf8");
const write = (path, content) => writeFileSync(path, content);
function invariant(condition, message) { if (!condition) throw new Error(message); }
function replaceOnce(path, before, after) {
  const source = read(path);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: missing exact anchor: ${before.slice(0, 180)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: exact anchor duplicated: ${before.slice(0, 180)}`);
  write(path, source.slice(0, first) + after + source.slice(first + before.length));
}
function insertAfterInConstArray(path, constName, needle, addition) {
  const source = read(path);
  const startMarker = `const ${constName} = [`;
  const start = source.indexOf(startMarker);
  if (start < 0) throw new Error(`${path}: missing ${constName}`);
  const end = source.indexOf("] as const;", start);
  if (end < 0) throw new Error(`${path}: missing end for ${constName}`);
  const block = source.slice(start, end);
  const anchor = `  ${JSON.stringify(needle)},`;
  const pos = block.indexOf(anchor);
  if (pos < 0 || block.indexOf(anchor, pos + anchor.length) >= 0) throw new Error(`${path}: ${needle} missing or duplicated in ${constName}`);
  const updated = block.slice(0, pos + anchor.length) + `\n  ${JSON.stringify(addition)},` + block.slice(pos + anchor.length);
  write(path, source.slice(0, start) + updated + source.slice(end));
}

const immutableStudy = read(FILM_STUDY_PATH);
const immutablePv = read(PV_PATH);
invariant(immutableStudy.includes(`scenarioId: "${CASE_ID}"`), "Existing Bad Luck Film Study identity is missing.");
invariant(immutablePv.includes(`scenarioId: "${CASE_ID}"`), "Existing Bad Luck PV identity is missing.");

replaceOnce(
  ATLAS_PATH,
  `const thereIsNoEvilNeedles = ['"title": "There Is No Evil"', 'title: "There Is No Evil"'];\n`,
  `const thereIsNoEvilNeedles = ['"title": "There Is No Evil"', 'title: "There Is No Evil"'];\nconst badLuckNeedles = ['"title": "Bad Luck Banging or Loony Porn"', 'title: "Bad Luck Banging or Loony Porn"'];\n`,
);
replaceOnce(
  ATLAS_PATH,
  `const baseSource = readFileSync(basePath, "utf8");`,
  `const badLuckCandidate = \`\n  {\n    "title": "Bad Luck Banging or Loony Porn",\n    "originalTitle": "Babardeală cu bucluc sau porno balamuc",\n    "year": 2021,\n    "aliases": [],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Berlinale 2021 Golden Bear reconciliation: reuse the existing canonical scenario_bad_luck_banging_or_loony_porn_2021, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."\n  },\`;\n\nconst baseSource = readFileSync(basePath, "utf8");`,
);
replaceOnce(
  ATLAS_PATH,
  `if (thereIsNoEvilNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains There Is No Evil; consolidate the wrapper deliberately before continuing.");\n`,
  `if (thereIsNoEvilNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains There Is No Evil; consolidate the wrapper deliberately before continuing.");\nif (badLuckNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Bad Luck Banging or Loony Porn; consolidate the wrapper deliberately before continuing.");\n`,
);
replaceOnce(
  ATLAS_PATH,
  '.replace(insertionMarker, `${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}${thereIsNoEvilCandidate}`);',
  '.replace(insertionMarker, `${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}${thereIsNoEvilCandidate}${badLuckCandidate}`);',
);

insertAfterInConstArray(TEST_PATH, "exactCandidateTitles", "There Is No Evil", TITLE);
insertAfterInConstArray(TEST_PATH, "exactP1Priority", "There Is No Evil", TITLE);
insertAfterInConstArray(TEST_PATH, "exactUseExisting", "There Is No Evil", TITLE);

replaceOnce(
  TEST_PATH,
  `test("Chapter 19 locks exactly sixty-six candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 66);\n  assert.equal(resolved.candidates.length, 66);\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 11], [2022, 12], [2023, 10], [2024, 12], [2025, 10]]);`,
  `test("Chapter 19 locks exactly sixty-seven candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 67);\n  assert.equal(resolved.candidates.length, 67);\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 12], [2022, 12], [2023, 10], [2024, 12], [2025, 10]]);`,
);
replaceOnce(TEST_PATH, `  assert.equal(exactP1Priority.length, 39);`, `  assert.equal(exactP1Priority.length, 40);`);
replaceOnce(TEST_PATH, `  assert.equal(exactUseExisting.length, 64);`, `  assert.equal(exactUseExisting.length, 65);`);
replaceOnce(
  TEST_PATH,
  `  assert.equal(thereIsNoEvil.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
  `  assert.equal(thereIsNoEvil.productionVerified, true);\n\n  const badLuck = resolved.candidates.find((candidate) => candidate.title === "${TITLE}");\n  assert.ok(badLuck);\n  assert.equal(badLuck.decision, "USE_EXISTING");\n  assert.equal(badLuck.scenarioId, "${CASE_ID}");\n  assert.equal(badLuck.matches, 1);\n  assert.equal(badLuck.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
);

replaceOnce(
  CH18_PATH,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 66, "Chapter 19 current candidate set must contain exactly 66 candidates after Triangle of Sadness, Drømmer, Happening, All the Beauty and the Bloodshed, The Room Next Door and There Is No Evil reconciliation.");`,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 67, "Chapter 19 current candidate set must contain exactly 67 candidates after Triangle of Sadness, Drømmer, Happening, All the Beauty and the Bloodshed, The Room Next Door, There Is No Evil and Bad Luck Banging or Loony Porn reconciliation.");`,
);
replaceOnce(
  CH18_PATH,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === 64 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 64 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === 65 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 65 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
);
replaceOnce(
  CH18_PATH,
  `invariant(thereIsNoEvil?.decision === "USE_EXISTING" && thereIsNoEvil?.scenarioId === "scenario_there_is_no_evil_2020" && thereIsNoEvil?.matches === 1 && thereIsNoEvil?.productionVerified === true, "There Is No Evil is not closed as one existing production-verified Chapter 19 case.");\nconst tenet =`,
  `invariant(thereIsNoEvil?.decision === "USE_EXISTING" && thereIsNoEvil?.scenarioId === "scenario_there_is_no_evil_2020" && thereIsNoEvil?.matches === 1 && thereIsNoEvil?.productionVerified === true, "There Is No Evil is not closed as one existing production-verified Chapter 19 case.");\nconst badLuck = chapter19.candidates.find((candidate) => candidate.title === "${TITLE}");\ninvariant(badLuck?.decision === "USE_EXISTING" && badLuck?.scenarioId === "${CASE_ID}" && badLuck?.matches === 1 && badLuck?.productionVerified === true, "Bad Luck Banging or Loony Porn is not closed as one existing production-verified Chapter 19 case.");\nconst tenet =`,
);

execFileSync(process.execPath, [ATLAS_PATH, `--write=${RESOLVED_PATH}`], { stdio: "inherit" });
const resolved = JSON.parse(read(RESOLVED_PATH));
invariant(resolved.atlas?.actualCount === 591 && resolved.atlas?.expectedCount === 591, "Atlas must remain 591/591");
invariant(resolved.verificationIndex?.literalVerifiedScenarioIds === 591, "PV identity count must remain 591");
invariant(resolved.candidates?.length === 67, `Expected 67 candidates, got ${resolved.candidates?.length}`);
invariant(resolved.byDecision?.USE_EXISTING?.length === 65, `Expected 65 USE_EXISTING, got ${resolved.byDecision?.USE_EXISTING?.length}`);
invariant(resolved.byDecision?.P2?.length === 2, `Expected 2 P2, got ${resolved.byDecision?.P2?.length}`);
const item = resolved.candidates.find((candidate) => candidate.title === TITLE);
invariant(item?.scenarioId === CASE_ID && item?.matches === 1 && item?.productionVerified === true && item?.decision === "USE_EXISTING", "Bad Luck did not resolve to existing verified identity");
invariant(resolved.candidates.filter((candidate) => candidate.scenarioId === CASE_ID).length === 1, "Bad Luck identity duplicated in candidate matrix");

const festival = JSON.parse(execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs"], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }));
const obligation = festival.obligations.find((candidate) => candidate.title === TITLE);
invariant(obligation?.status === "PRODUCTION_VERIFIED" && obligation?.scenarioId === CASE_ID, `Festival gate did not close Bad Luck: ${obligation?.status}`);
invariant(festival.correctiveQueue?.[0]?.order === 8 && festival.correctiveQueue?.[0]?.title === "Alcarràs", `Expected Alcarràs next, got ${festival.correctiveQueue?.[0]?.title}`);

invariant(read(FILM_STUDY_PATH) === immutableStudy, "Bad Luck Film Study changed during candidate reconciliation");
invariant(read(PV_PATH) === immutablePv, "Bad Luck PV batch changed during candidate reconciliation");

unlinkSync(TEMP_SCRIPT);
unlinkSync(TEMP_WORKFLOW);
console.log(JSON.stringify({ atlas: "591/591", candidates: 67, useExisting: 65, p2: 2, case: item, nextCorrection: festival.correctiveQueue[0], immutableStudy: true, immutablePv: true }, null, 2));
