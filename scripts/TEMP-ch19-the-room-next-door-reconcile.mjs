import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import process from "node:process";

const ROOM_ID = "scenario_the_room_next_door_2024";
const ATLAS_PATH = "scripts/film-history-chapter-nineteen-atlas-audit.mjs";
const CH18_PATH = "scripts/film-history-chapter-eighteen-completion-audit.mjs";
const TEST_PATH = "src/core/filmHistoryChapterNineteenAuditContract.test.ts";
const RESOLVED_PATH = "docs/film-history-chapter-nineteen-atlas-resolved.json";
const FILM_STUDY_PATH = "src/ui/data/scenarioFilmStudyContemporaryEuropeanSocialCareRoomNextDoor.ts";
const PV_PATH = "src/ui/data/scenarioProductionVerificationContemporaryEuropeanSocialCareSystemsBatch.ts";
const TEMP_SCRIPT = "scripts/TEMP-ch19-the-room-next-door-reconcile.mjs";
const TEMP_WORKFLOW = ".github/workflows/TEMP-ch19-the-room-next-door-reconcile.yml";

function read(path) {
  return readFileSync(path, "utf8");
}
function write(path, content) {
  writeFileSync(path, content);
}
function replaceOnce(path, before, after) {
  const source = read(path);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: missing exact anchor: ${before.slice(0, 180)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: exact anchor is duplicated: ${before.slice(0, 180)}`);
  write(path, source.slice(0, first) + after + source.slice(first + before.length));
}
function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

const immutableStudy = read(FILM_STUDY_PATH);
const immutablePv = read(PV_PATH);
invariant(immutableStudy.includes(`scenarioId: "${ROOM_ID}"`), "Existing Room Next Door Film Study identity is missing.");
invariant(immutablePv.includes(`scenarioId: "${ROOM_ID}"`), "Existing Room Next Door PV identity is missing.");
invariant(immutablePv.includes('status: "verified"'), "Existing Room Next Door PV batch no longer contains verified records.");

replaceOnce(
  ATLAS_PATH,
  `const allBeautyNeedles = ['"title": "All the Beauty and the Bloodshed"', 'title: "All the Beauty and the Bloodshed"'];\n`,
  `const allBeautyNeedles = ['"title": "All the Beauty and the Bloodshed"', 'title: "All the Beauty and the Bloodshed"'];\nconst roomNextDoorNeedles = ['"title": "The Room Next Door"', 'title: "The Room Next Door"'];\n`,
);

replaceOnce(
  ATLAS_PATH,
  `const baseSource = readFileSync(basePath, "utf8");`,
  `const roomNextDoorCandidate = \`\n  {\n    "title": "The Room Next Door",\n    "originalTitle": "The Room Next Door",\n    "year": 2024,\n    "aliases": [],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Venice 2024 Golden Lion reconciliation: reuse the existing canonical scenario_the_room_next_door_2024, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."\n  },\`;\n\nconst baseSource = readFileSync(basePath, "utf8");`,
);

replaceOnce(
  ATLAS_PATH,
  `if (allBeautyNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains All the Beauty and the Bloodshed; consolidate the wrapper deliberately before continuing.");\n`,
  `if (allBeautyNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains All the Beauty and the Bloodshed; consolidate the wrapper deliberately before continuing.");\nif (roomNextDoorNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Room Next Door; consolidate the wrapper deliberately before continuing.");\n`,
);

replaceOnce(
  ATLAS_PATH,
  `.replace(insertionMarker, \`${'${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}'}\`);`,
  `.replace(insertionMarker, \`${'${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}'}\`);`,
);

for (const path of [TEST_PATH]) {
  replaceOnce(
    path,
    `  "All the Beauty and the Bloodshed",\n  "Tenet",`,
    `  "All the Beauty and the Bloodshed",\n  "The Room Next Door",\n  "Tenet",`,
  );
  replaceOnce(
    path,
    `  "All the Beauty and the Bloodshed",\n  "Nomadland",`,
    `  "All the Beauty and the Bloodshed",\n  "The Room Next Door",\n  "Nomadland",`,
  );
}

replaceOnce(
  TEST_PATH,
  `test("Chapter 19 locks exactly sixty-four candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 64);\n  assert.equal(resolved.candidates.length, 64);\n  const expectedCandidatesByYear = new Map([[2020, 10], [2021, 11], [2022, 12], [2023, 10], [2024, 11], [2025, 10]]);`,
  `test("Chapter 19 locks exactly sixty-five candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 65);\n  assert.equal(resolved.candidates.length, 65);\n  const expectedCandidatesByYear = new Map([[2020, 10], [2021, 11], [2022, 12], [2023, 10], [2024, 12], [2025, 10]]);`,
);
replaceOnce(TEST_PATH, `  assert.equal(exactP1Priority.length, 37);`, `  assert.equal(exactP1Priority.length, 38);`);
replaceOnce(TEST_PATH, `  assert.equal(exactUseExisting.length, 62);`, `  assert.equal(exactUseExisting.length, 63);`);
replaceOnce(
  TEST_PATH,
  `  assert.equal(allBeauty.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
  `  assert.equal(allBeauty.productionVerified, true);\n\n  const roomNextDoor = resolved.candidates.find((candidate) => candidate.title === "The Room Next Door");\n  assert.ok(roomNextDoor);\n  assert.equal(roomNextDoor.decision, "USE_EXISTING");\n  assert.equal(roomNextDoor.scenarioId, "${ROOM_ID}");\n  assert.equal(roomNextDoor.matches, 1);\n  assert.equal(roomNextDoor.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
);

replaceOnce(
  CH18_PATH,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 64, "Chapter 19 current candidate set must contain exactly 64 candidates after Triangle of Sadness, Drømmer, Happening and All the Beauty and the Bloodshed reconciliation.");`,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 65, "Chapter 19 current candidate set must contain exactly 65 candidates after Triangle of Sadness, Drømmer, Happening, All the Beauty and the Bloodshed and The Room Next Door reconciliation.");`,
);
replaceOnce(
  CH18_PATH,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === 62 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 62 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === 63 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 63 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
);
replaceOnce(
  CH18_PATH,
  `invariant(allTheBeautyAndTheBloodshed?.decision === "USE_EXISTING" && allTheBeautyAndTheBloodshed?.scenarioId === "scenario_all_the_beauty_and_the_bloodshed_2022" && allTheBeautyAndTheBloodshed?.matches === 1 && allTheBeautyAndTheBloodshed?.productionVerified === true, "All the Beauty and the Bloodshed is not closed as one existing production-verified Chapter 19 case.");\nconst tenet =`,
  `invariant(allTheBeautyAndTheBloodshed?.decision === "USE_EXISTING" && allTheBeautyAndTheBloodshed?.scenarioId === "scenario_all_the_beauty_and_the_bloodshed_2022" && allTheBeautyAndTheBloodshed?.matches === 1 && allTheBeautyAndTheBloodshed?.productionVerified === true, "All the Beauty and the Bloodshed is not closed as one existing production-verified Chapter 19 case.");\nconst theRoomNextDoor = chapter19.candidates.find((candidate) => candidate.title === "The Room Next Door");\ninvariant(theRoomNextDoor?.decision === "USE_EXISTING" && theRoomNextDoor?.scenarioId === "${ROOM_ID}" && theRoomNextDoor?.matches === 1 && theRoomNextDoor?.productionVerified === true, "The Room Next Door is not closed as one existing production-verified Chapter 19 case.");\nconst tenet =`,
);

execFileSync(process.execPath, [ATLAS_PATH, `--write=${RESOLVED_PATH}`], { stdio: "inherit" });

const resolved = JSON.parse(read(RESOLVED_PATH));
invariant(resolved.atlas?.expectedCount === 591 && resolved.atlas?.actualCount === 591, `Atlas invariant drifted: ${resolved.atlas?.actualCount}/${resolved.atlas?.expectedCount}`);
invariant(resolved.verificationIndex?.literalVerifiedScenarioIds === 591, `PV invariant drifted: ${resolved.verificationIndex?.literalVerifiedScenarioIds}`);
invariant(resolved.candidates?.length === 65, `Expected 65 candidates, got ${resolved.candidates?.length}`);
invariant(resolved.byDecision?.USE_EXISTING?.length === 63, `Expected 63 USE_EXISTING, got ${resolved.byDecision?.USE_EXISTING?.length}`);
invariant(resolved.byDecision?.P2?.length === 2, `Expected 2 P2, got ${resolved.byDecision?.P2?.length}`);
const room = resolved.candidates.find((item) => item.title === "The Room Next Door");
invariant(room?.scenarioId === ROOM_ID && room?.matches === 1 && room?.productionVerified === true && room?.decision === "USE_EXISTING", "The Room Next Door did not resolve to the existing verified identity.");
invariant(resolved.candidates.filter((item) => item.scenarioId === ROOM_ID).length === 1, "The Room Next Door scenario identity is duplicated in Chapter 19 candidates.");

const festival = JSON.parse(execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs"], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }));
const festivalRoom = festival.obligations.find((item) => item.title === "The Room Next Door");
invariant(festivalRoom?.status === "PRODUCTION_VERIFIED" && festivalRoom?.scenarioId === ROOM_ID, `Festival gate did not close Room Next Door: ${festivalRoom?.status}`);
invariant(festival.correctiveQueue?.[0]?.order === 6 && festival.correctiveQueue?.[0]?.title === "There Is No Evil", `Expected There Is No Evil as next correction, got ${festival.correctiveQueue?.[0]?.title}`);

invariant(read(FILM_STUDY_PATH) === immutableStudy, "The Room Next Door Film Study changed during candidate reconciliation.");
invariant(read(PV_PATH) === immutablePv, "The Room Next Door Production Verification changed during candidate reconciliation.");

unlinkSync(TEMP_SCRIPT);
unlinkSync(TEMP_WORKFLOW);

console.log(JSON.stringify({
  atlas: `${resolved.atlas.actualCount}/${resolved.atlas.expectedCount}`,
  productionVerificationIds: resolved.verificationIndex.literalVerifiedScenarioIds,
  candidates: resolved.candidates.length,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p2: resolved.byDecision.P2.length,
  roomNextDoor: room,
  nextCorrection: festival.correctiveQueue[0],
  immutableStudy: true,
  immutablePv: true,
}, null, 2));
