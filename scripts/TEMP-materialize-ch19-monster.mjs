import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_monster_kore_eda_2023";
const BASE_ATLAS = 606;
const BASE_PV = 606;
const BASE_CANDIDATES = 84;
const BASE_USE_EXISTING = 82;
const NEXT_CANDIDATES = 85;
const NEXT_USE_EXISTING = 83;

const files = {
  chapter19Audit: "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  chapter18Completion: "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  chapter19Contract: "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  chapter19Resolved: "docs/film-history-chapter-nineteen-atlas-resolved.json",
  cannesResolved: "docs/film-history-chapter-nineteen-cannes-major-prizes-audit.json",
  cannesAudit: "scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs",
  canonicalFilmStudy: "src/ui/data/scenarioFilmStudyJapaneseAmbiguityMonster.ts",
  canonicalPv: "src/ui/data/scenarioProductionVerificationJapaneseAmbiguityDialogueBatch.ts",
  duplicateFilmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenMonster.ts",
  duplicatePv: "src/ui/data/scenarioProductionVerificationMonster.ts",
};

const abs = (p) => path.join(root, p);
const read = (p) => readFileSync(abs(p), "utf8");
const write = (p, value) => writeFileSync(abs(p), value);
const readJson = (p) => JSON.parse(read(p));
function invariant(condition, message) {
  if (!condition) throw new Error(message);
}
function replaceOnce(p, before, after) {
  const source = read(p);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${p}: required marker missing: ${before.slice(0, 220)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: marker is not unique: ${before.slice(0, 220)}`);
  write(p, source.slice(0, first) + after + source.slice(first + before.length));
}
function replaceCount(p, before, after, expectedCount) {
  const source = read(p);
  const actual = source.split(before).length - 1;
  if (actual !== expectedCount) throw new Error(`${p}: expected ${expectedCount} occurrences, found ${actual}: ${before}`);
  write(p, source.split(before).join(after));
}
function run(script, args = []) {
  return execFileSync(process.execPath, [script, ...args], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
    stdio: ["ignore", "pipe", "inherit"],
  });
}

const before = readJson(files.chapter19Resolved);
const beforeCannes = readJson(files.cannesResolved);
invariant(before.atlas?.expectedCount === BASE_ATLAS && before.atlas?.actualCount === BASE_ATLAS, `Expected locked Atlas ${BASE_ATLAS}/${BASE_ATLAS}.`);
invariant(before.verificationIndex?.literalVerifiedScenarioIds === BASE_PV, `Expected locked PV census ${BASE_PV}.`);
invariant(before.candidates?.length === BASE_CANDIDATES, `Expected ${BASE_CANDIDATES} Chapter 19 candidates before Monster reconciliation.`);
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected Chapter 19 decision census before Monster reconciliation.");
invariant(!before.candidates?.some((item) => item.title === "Monster" || item.originalTitle === "Kaibutsu" || item.scenarioId === SCENARIO_ID), "Monster is already in the Chapter 19 candidate matrix; refusing duplicate reconciliation.");
invariant(beforeCannes.technicalBaseline?.atlasActual === BASE_ATLAS && beforeCannes.technicalBaseline?.productionVerificationIds === BASE_PV && beforeCannes.technicalBaseline?.chapterNineteenCandidates === BASE_CANDIDATES, "Unexpected Cannes technical baseline before Monster reconciliation.");
invariant(beforeCannes.summary?.unresolvedFilms === 8 && beforeCannes.correctiveQueue?.length === 8, "Expected eight unresolved Cannes films before Monster reconciliation.");
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Monster" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Monster must be the first unresolved Cannes film before reconciliation.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "About Dry Grasses", "About Dry Grasses must be the next Cannes film after Monster.");

const canonicalFilmStudy = read(files.canonicalFilmStudy);
invariant(canonicalFilmStudy.includes(`scenarioId: "${SCENARIO_ID}"`), "Canonical Monster Film Study identity is missing; refusing reconciliation.");
const canonicalPv = read(files.canonicalPv);
const pvIndex = canonicalPv.indexOf(`scenarioId: "${SCENARIO_ID}"`);
invariant(pvIndex >= 0, "Canonical Monster Production Verification identity is missing; refusing reconciliation.");
invariant(canonicalPv.slice(pvIndex, pvIndex + 1200).includes('status: "verified"'), "Canonical Monster Production Verification is not verified; refusing reconciliation.");

for (const duplicate of [files.duplicateFilmStudy, files.duplicatePv]) {
  invariant(existsSync(abs(duplicate)), `${duplicate}: expected obsolete branch-local duplicate before cleanup.`);
  unlinkSync(abs(duplicate));
}

replaceOnce(
  files.chapter19Audit,
  "const fallenLeavesNeedles = ['\"title\": \"Fallen Leaves\"', 'title: \"Fallen Leaves\"', 'Kuolleet lehdet', 'Les Feuilles mortes', 'scenario_fallen_leaves_2023'];\n",
  "const fallenLeavesNeedles = ['\"title\": \"Fallen Leaves\"', 'title: \"Fallen Leaves\"', 'Kuolleet lehdet', 'Les Feuilles mortes', 'scenario_fallen_leaves_2023'];\nconst monsterNeedles = ['\"title\": \"Monster\"', 'title: \"Monster\"', '\"originalTitle\": \"Kaibutsu\"', 'Monster (Kaibutsu)', 'scenario_monster_kore_eda_2023'];\n",
);

const monsterCandidate = `
const monsterCandidate = \`
  {
    "title": "Monster",
    "originalTitle": "Kaibutsu",
    "year": 2023,
    "aliases": ["Monster (Kaibutsu)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Screenplay reconciliation: reuse the existing canonical scenario_monster_kore_eda_2023, its source-backed 17-area Film Study and its verified Production Verification instead of materializing a duplicate Atlas or PV identity."
  },\`;
`;
replaceOnce(files.chapter19Audit, "\nconst baseSource = readFileSync(basePath, \"utf8\");", `${monsterCandidate}\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(
  files.chapter19Audit,
  'if (fallenLeavesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Fallen Leaves/Kuolleet lehdet; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (fallenLeavesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Fallen Leaves/Kuolleet lehdet; consolidate the wrapper deliberately before continuing.");\nif (monsterNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Monster/Kaibutsu; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
);
replaceOnce(files.chapter19Audit, "${fallenLeavesCandidate}`);", "${fallenLeavesCandidate}${monsterCandidate}`);");

replaceOnce(
  files.chapter18Completion,
  'invariant(verificationIds.size === 606, `Global Production Verification registry must contain exactly 606 unique scenarioIds after Fallen Leaves Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 606, `Global Production Verification registry must remain exactly 606 unique scenarioIds after Monster reuse reconciliation: ${verificationIds.size}`);',
);
replaceOnce(
  files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 84, "Chapter 19 current candidate set must contain exactly 84 candidates after Cannes major-prizes reconciliation adds Fallen Leaves.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 85, "Chapter 19 current candidate set must contain exactly 85 candidates after Cannes major-prizes reconciliation adds Monster by reuse.");',
);
replaceOnce(
  files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 82 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 82 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 83 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 83 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
const completionMonsterAssertion = 'const monster = chapter19.candidates.find((candidate) => candidate.title === "Monster");\ninvariant(monster?.decision === "USE_EXISTING" && monster?.scenarioId === "scenario_monster_kore_eda_2023" && monster?.matches === 1 && monster?.productionVerified === true, "Monster is not reconciled as one existing production-verified Chapter 19 Cannes major-prizes case.");\n';
replaceOnce(
  files.chapter18Completion,
  'const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  `${completionMonsterAssertion}const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");`,
);

replaceCount(
  files.chapter19Contract,
  '  "Fallen Leaves",\n  "Tenet",',
  '  "Fallen Leaves",\n  "Monster",\n  "Tenet",',
  2,
);
replaceOnce(
  files.chapter19Contract,
  '  "Fallen Leaves",\n  "Nomadland",',
  '  "Fallen Leaves",\n  "Monster",\n  "Nomadland",',
);
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-four candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-five candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 84);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 85);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 84);', 'assert.equal(resolved.candidates.length, 85);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 13], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 14], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 57);', 'assert.equal(exactP1Priority.length, 58);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 82);', 'assert.equal(exactUseExisting.length, 83);');
const contractMonsterAssertion = `  const monster = resolved.candidates.find((candidate) => candidate.title === "Monster");
  assert.ok(monster);
  assert.equal(monster.year, 2023);
  assert.equal(monster.decision, "USE_EXISTING");
  assert.equal(monster.scenarioId, "scenario_monster_kore_eda_2023");
  assert.equal(monster.matches, 1);
  assert.equal(monster.productionVerified, true);

`;
replaceOnce(
  files.chapter19Contract,
  '  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  `${contractMonsterAssertion}  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");`,
);

run(files.chapter19Audit, [`--write=${files.chapter19Resolved}`]);
const after = readJson(files.chapter19Resolved);
invariant(after.atlas?.expectedCount === BASE_ATLAS && after.atlas?.actualCount === BASE_ATLAS, "Monster reconciliation changed the Atlas census; refusing to continue.");
invariant(after.verificationIndex?.literalVerifiedScenarioIds === BASE_PV, "Monster reconciliation changed the PV census; refusing to continue.");
invariant(after.candidates?.length === NEXT_CANDIDATES, `Monster reconciliation must produce ${NEXT_CANDIDATES} candidates.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Monster reconciliation produced the wrong decision census.");
const monster = after.candidates.find((item) => item.title === "Monster");
invariant(monster?.scenarioId === SCENARIO_ID && monster?.decision === "USE_EXISTING" && monster?.matches === 1 && monster?.productionVerified === true, "Monster did not resolve to the existing canonical production-verified identity.");

run(files.cannesAudit, [`--write=${files.cannesResolved}`]);
const afterCannes = readJson(files.cannesResolved);
invariant(afterCannes.technicalBaseline?.atlasExpected === BASE_ATLAS && afterCannes.technicalBaseline?.atlasActual === BASE_ATLAS, "Cannes reconciliation changed Atlas 606/606.");
invariant(afterCannes.technicalBaseline?.productionVerificationIds === BASE_PV, "Cannes reconciliation changed the 606 PV census.");
invariant(afterCannes.technicalBaseline?.chapterNineteenCandidates === NEXT_CANDIDATES, "Cannes audit did not see the 85-candidate matrix.");
invariant(afterCannes.summary?.unresolvedFilms === 7 && afterCannes.correctiveQueue?.length === 7, "Cannes unresolved queue must move 8 -> 7 after Monster.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "About Dry Grasses", "About Dry Grasses must become the next Cannes corrective queue leader.");
const after2023 = afterCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(after2023?.unresolvedFilms === 2, `Cannes 2023 unresolved films must move 3 -> 2, found ${after2023?.unresolvedFilms}.`);
const monsterAward = afterCannes.awardedFilms?.find((item) => item.title === "Monster");
invariant(monsterAward?.candidatePresent === true && monsterAward?.candidateDecision === "USE_EXISTING" && monsterAward?.scenarioId === SCENARIO_ID && monsterAward?.atlasMatches === 1 && monsterAward?.productionVerified === true && monsterAward?.status === "PRODUCTION_VERIFIED", "Cannes Monster obligation did not close against the canonical identity.");

invariant(!existsSync(abs(files.duplicateFilmStudy)) && !existsSync(abs(files.duplicatePv)), "Obsolete branch-local Monster Film Study/PV files survived reconciliation cleanup.");
console.log(JSON.stringify({
  scenarioId: SCENARIO_ID,
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  productionVerificationIds: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: `${BASE_CANDIDATES}->${after.candidates.length}`,
  useExisting: `${BASE_USE_EXISTING}->${after.byDecision.USE_EXISTING.length}`,
  cannesUnresolved: `8->${afterCannes.summary.unresolvedFilms}`,
  cannes2023Unresolved: `3->${after2023.unresolvedFilms}`,
  nextCannesCase: afterCannes.correctiveQueue[0].title,
}, null, 2));
