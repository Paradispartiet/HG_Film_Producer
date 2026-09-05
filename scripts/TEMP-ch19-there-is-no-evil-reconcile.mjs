import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";

const SCENARIO_ID = "scenario_there_is_no_evil_2020";
const ATLAS_PATH = "scripts/film-history-chapter-nineteen-atlas-audit.mjs";
const CH18_PATH = "scripts/film-history-chapter-eighteen-completion-audit.mjs";
const TEST_PATH = "src/core/filmHistoryChapterNineteenAuditContract.test.ts";
const RESOLVED_PATH = "docs/film-history-chapter-nineteen-atlas-resolved.json";
const FILM_STUDY_PATH = "src/ui/data/scenarioFilmStudyContemporaryDissentThereIsNoEvil.ts";
const PV_PATH = "src/ui/data/scenarioProductionVerificationContemporaryDissentRuralSystemsBatch.ts";
const TEMP_SCRIPT = "scripts/TEMP-ch19-there-is-no-evil-reconcile.mjs";
const TEMP_WORKFLOW = ".github/workflows/TEMP-ch19-there-is-no-evil-reconcile.yml";

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
invariant(immutableStudy.includes(`scenarioId: "${SCENARIO_ID}"`), "Existing There Is No Evil Film Study identity is missing.");
invariant(immutablePv.includes(`scenarioId: "${SCENARIO_ID}"`), "Existing There Is No Evil PV identity is missing.");

replaceOnce(
  ATLAS_PATH,
  `const roomNextDoorNeedles = ['"title": "The Room Next Door"', 'title: "The Room Next Door"'];\n`,
  `const roomNextDoorNeedles = ['"title": "The Room Next Door"', 'title: "The Room Next Door"'];\nconst thereIsNoEvilNeedles = ['"title": "There Is No Evil"', 'title: "There Is No Evil"'];\n`,
);
replaceOnce(
  ATLAS_PATH,
  `const baseSource = readFileSync(basePath, "utf8");`,
  `const thereIsNoEvilCandidate = \`\n  {\n    "title": "There Is No Evil",\n    "originalTitle": "Sheytan vojud nadarad",\n    "year": 2020,\n    "aliases": ["There is no Evil"],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Berlinale 2020 Golden Bear reconciliation: reuse the existing canonical scenario_there_is_no_evil_2020, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."\n  },\`;\n\nconst baseSource = readFileSync(basePath, "utf8");`,
);
replaceOnce(
  ATLAS_PATH,
  `if (roomNextDoorNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Room Next Door; consolidate the wrapper deliberately before continuing.");\n`,
  `if (roomNextDoorNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Room Next Door; consolidate the wrapper deliberately before continuing.");\nif (thereIsNoEvilNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains There Is No Evil; consolidate the wrapper deliberately before continuing.");\n`,
);
replaceOnce(
  ATLAS_PATH,
  '.replace(insertionMarker, `${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}`);',
  '.replace(insertionMarker, `${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}${thereIsNoEvilCandidate}`);',
);

insertAfterInConstArray(TEST_PATH, "exactCandidateTitles", "The Room Next Door", "There Is No Evil");
insertAfterInConstArray(TEST_PATH, "exactP1Priority", "The Room Next Door", "There Is No Evil");
insertAfterInConstArray(TEST_PATH, "exactUseExisting", "The Room Next Door", "There Is No Evil");

replaceOnce(
  TEST_PATH,
  `test("Chapter 19 locks exactly sixty-five candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 65);\n  assert.equal(resolved.candidates.length, 65);\n  const expectedCandidatesByYear = new Map([[2020, 10], [2021, 11], [2022, 12], [2023, 10], [2024, 12], [2025, 10]]);`,
  `test("Chapter 19 locks exactly sixty-six candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 66);\n  assert.equal(resolved.candidates.length, 66);\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 11], [2022, 12], [2023, 10], [2024, 12], [2025, 10]]);`,
);
replaceOnce(TEST_PATH, `  assert.equal(exactP1Priority.length, 38);`, `  assert.equal(exactP1Priority.length, 39);`);
replaceOnce(TEST_PATH, `  assert.equal(exactUseExisting.length, 63);`, `  assert.equal(exactUseExisting.length, 64);`);
replaceOnce(
  TEST_PATH,
  `  assert.equal(roomNextDoor.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
  `  assert.equal(roomNextDoor.productionVerified, true);\n\n  const thereIsNoEvil = resolved.candidates.find((candidate) => candidate.title === "There Is No Evil");\n  assert.ok(thereIsNoEvil);\n  assert.equal(thereIsNoEvil.decision, "USE_EXISTING");\n  assert.equal(thereIsNoEvil.scenarioId, "${SCENARIO_ID}");\n  assert.equal(thereIsNoEvil.matches, 1);\n  assert.equal(thereIsNoEvil.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
);

replaceOnce(
  CH18_PATH,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 65, "Chapter 19 current candidate set must contain exactly 65 candidates after Triangle of Sadness, Drømmer, Happening, All the Beauty and the Bloodshed and The Room Next Door reconciliation.");`,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 66, "Chapter 19 current candidate set must contain exactly 66 candidates after Triangle of Sadness, Drømmer, Happening, All the Beauty and the Bloodshed, The Room Next Door and There Is No Evil reconciliation.");`,
);
replaceOnce(
  CH18_PATH,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === 63 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 63 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === 64 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 64 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
);
replaceOnce(
  CH18_PATH,
  `invariant(theRoomNextDoor?.decision === "USE_EXISTING" && theRoomNextDoor?.scenarioId === "scenario_the_room_next_door_2024" && theRoomNextDoor?.matches === 1 && theRoomNextDoor?.productionVerified === true, "The Room Next Door is not closed as one existing production-verified Chapter 19 case.");\nconst tenet =`,
  `invariant(theRoomNextDoor?.decision === "USE_EXISTING" && theRoomNextDoor?.scenarioId === "scenario_the_room_next_door_2024" && theRoomNextDoor?.matches === 1 && theRoomNextDoor?.productionVerified === true, "The Room Next Door is not closed as one existing production-verified Chapter 19 case.");\nconst thereIsNoEvil = chapter19.candidates.find((candidate) => candidate.title === "There Is No Evil");\ninvariant(thereIsNoEvil?.decision === "USE_EXISTING" && thereIsNoEvil?.scenarioId === "${SCENARIO_ID}" && thereIsNoEvil?.matches === 1 && thereIsNoEvil?.productionVerified === true, "There Is No Evil is not closed as one existing production-verified Chapter 19 case.");\nconst tenet =`,
);

execFileSync(process.execPath, [ATLAS_PATH, `--write=${RESOLVED_PATH}`], { stdio: "inherit" });
const resolved = JSON.parse(read(RESOLVED_PATH));
invariant(resolved.atlas?.expectedCount === 591 && resolved.atlas?.actualCount === 591, `Atlas invariant drifted: ${resolved.atlas?.actualCount}/${resolved.atlas?.expectedCount}`);
invariant(resolved.verificationIndex?.literalVerifiedScenarioIds === 591, `PV invariant drifted: ${resolved.verificationIndex?.literalVerifiedScenarioIds}`);
invariant(resolved.candidates?.length === 66, `Expected 66 candidates, got ${resolved.candidates?.length}`);
invariant(resolved.byDecision?.USE_EXISTING?.length === 64, `Expected 64 USE_EXISTING, got ${resolved.byDecision?.USE_EXISTING?.length}`);
invariant(resolved.byDecision?.P2?.length === 2, `Expected 2 P2, got ${resolved.byDecision?.P2?.length}`);
const film = resolved.candidates.find((item) => item.title === "There Is No Evil");
invariant(film?.scenarioId === SCENARIO_ID && film?.matches === 1 && film?.productionVerified === true && film?.decision === "USE_EXISTING", "There Is No Evil did not resolve to the existing verified identity.");
invariant(resolved.candidates.filter((item) => item.scenarioId === SCENARIO_ID).length === 1, "There Is No Evil scenario identity is duplicated in Chapter 19 candidates.");

const festival = JSON.parse(execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs"], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }));
const obligation = festival.obligations.find((item) => item.title === "There Is No Evil");
invariant(obligation?.status === "PRODUCTION_VERIFIED" && obligation?.scenarioId === SCENARIO_ID, `Festival gate did not close There Is No Evil: ${obligation?.status}`);
invariant(festival.correctiveQueue?.[0]?.order === 7 && festival.correctiveQueue?.[0]?.title === "Bad Luck Banging or Loony Porn", `Expected Bad Luck Banging or Loony Porn next, got ${festival.correctiveQueue?.[0]?.title}`);

invariant(read(FILM_STUDY_PATH) === immutableStudy, "There Is No Evil Film Study changed during candidate reconciliation.");
invariant(read(PV_PATH) === immutablePv, "There Is No Evil Production Verification changed during candidate reconciliation.");

unlinkSync(TEMP_SCRIPT);
unlinkSync(TEMP_WORKFLOW);
console.log(JSON.stringify({ atlas: `${resolved.atlas.actualCount}/${resolved.atlas.expectedCount}`, productionVerificationIds: resolved.verificationIndex.literalVerifiedScenarioIds, candidates: resolved.candidates.length, useExisting: resolved.byDecision.USE_EXISTING.length, p2: resolved.byDecision.P2.length, thereIsNoEvil: film, nextCorrection: festival.correctiveQueue[0], immutableStudy: true, immutablePv: true }, null, 2));
