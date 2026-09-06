import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_monster_2023";
const BASE_ATLAS = 606;
const BASE_PV = 606;
const BASE_CANDIDATES = 84;
const BASE_USE_EXISTING = 82;
const BASE_CANNES_UNRESOLVED = 8;
const NEXT_ATLAS = 607;
const NEXT_PV = 607;
const NEXT_CANDIDATES = 85;
const NEXT_USE_EXISTING = 83;

const files = {
  expansion: "src/core/chapterNineteenMonsterExpansion.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenMonster.ts",
  pv: "src/ui/data/scenarioProductionVerificationMonster.ts",
  filmScenarios: "src/ui/data/filmScenarios.ts",
  filmStudyMap: "src/ui/data/scenarioFilmStudyMap.ts",
  pvRegistry: "src/ui/data/scenarioProductionVerificationRegistry.ts",
  productionAudit: "scripts/production-case-rest-audit.mjs",
  chapter19Audit: "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  chapter18Completion: "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  chapter19Contract: "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  chapter19Resolved: "docs/film-history-chapter-nineteen-atlas-resolved.json",
  cannesResolved: "docs/film-history-chapter-nineteen-cannes-major-prizes-audit.json",
};

const read = (p) => readFileSync(path.join(root, p), "utf8");
const write = (p, text) => writeFileSync(path.join(root, p), text);
const readJson = (p) => JSON.parse(read(p));
function invariant(condition, message) { if (!condition) throw new Error(message); }
function replaceOnce(p, before, after) {
  const source = read(p);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${p}: required marker missing: ${before.slice(0, 240)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: marker is not unique: ${before.slice(0, 240)}`);
  write(p, source.slice(0, first) + after + source.slice(first + before.length));
}
function replaceCount(p, before, after, expectedCount) {
  const source = read(p);
  const actual = source.split(before).length - 1;
  if (actual !== expectedCount) throw new Error(`${p}: expected ${expectedCount} occurrences, found ${actual}: ${before}`);
  write(p, source.split(before).join(after));
}
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules" || name === "dist") continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out); else out.push(full);
  }
  return out;
}

const before = readJson(files.chapter19Resolved);
const beforeCannes = readJson(files.cannesResolved);
invariant(before.atlas?.actualCount === BASE_ATLAS && before.atlas?.expectedCount === BASE_ATLAS, `Expected committed ${BASE_ATLAS}/${BASE_ATLAS} Atlas baseline.`);
invariant(before.verificationIndex?.literalVerifiedScenarioIds === BASE_PV, `Expected committed ${BASE_PV} PV baseline.`);
invariant(before.candidates?.length === BASE_CANDIDATES, `Expected ${BASE_CANDIDATES} Chapter 19 candidates.`);
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Monster.");
invariant(!before.candidates?.some((item) => item.title === "Monster" || item.originalTitle === "Kaibutsu" || item.scenarioId === SCENARIO_ID), "Monster is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Monster.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Monster" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Monster must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "About Dry Grasses" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "About Dry Grasses must be second in the Cannes queue before Monster materialization.");
const before2023 = beforeCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(before2023?.unresolvedFilms === 3, `Expected three unresolved Cannes 2023 films before materialization, found ${before2023?.unresolvedFilms}.`);

const allowedIdentityPaths = new Set([
  files.expansion,
  "src/core/chapterNineteenMonsterExpansion.test.ts",
  files.filmStudy,
  files.pv,
  "scripts/TEMP-materialize-ch19-monster.mjs",
  ".github/workflows/TEMP-ch19-monster-materialize.yml",
]);
const identityHits = [];
const titlePattern = /\b(?:title|originalTitle|original_title)\s*:\s*"(?:Monster|Kaibutsu|怪物|L'Innocence)"/;
const aliasPattern = /\baliases\s*:\s*\[[^\]]*"(?:Monster|Kaibutsu|怪物|L'Innocence)"/s;
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if ((!rel.startsWith("src/core/") && !rel.startsWith("src/ui/data/")) || !/\.ts$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  const text = readFileSync(full, "utf8");
  if (text.includes(SCENARIO_ID) || titlePattern.test(text) || aliasPattern.test(text)) identityHits.push(rel);
}
invariant(identityHits.length === 0, `Pre-existing Monster/Kaibutsu identity or alias found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenFallenLeavesExpansion } from "../../core/chapterNineteenFallenLeavesExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenFallenLeavesExpansion } from "../../core/chapterNineteenFallenLeavesExpansion.js";\nimport { mergeChapterNineteenMonsterExpansion } from "../../core/chapterNineteenMonsterExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenFallenLeavesScenarios = mergeChapterNineteenFallenLeavesExpansion(chapterNineteenThePotAuFeuScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenFallenLeavesScenarios);',
  'const chapterNineteenFallenLeavesScenarios = mergeChapterNineteenFallenLeavesExpansion(chapterNineteenThePotAuFeuScenarios);\nconst chapterNineteenMonsterScenarios = mergeChapterNineteenMonsterExpansion(chapterNineteenFallenLeavesScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenMonsterScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_fallen_leaves_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_fallen_leaves_expansion_2026+manual_chapter_nineteen_monster_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { fallenLeavesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFallenLeaves";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { fallenLeavesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFallenLeaves";\nimport { monsterFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenMonster";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [fallenLeavesFilmHistoryProfile.scenarioId]: fallenLeavesFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [fallenLeavesFilmHistoryProfile.scenarioId]: fallenLeavesFilmHistoryProfile,\n  [monsterFilmHistoryProfile.scenarioId]: monsterFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { fallenLeavesProductionCaseVerification } from "./scenarioProductionVerificationFallenLeaves";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { fallenLeavesProductionCaseVerification } from "./scenarioProductionVerificationFallenLeaves";\nimport { monsterProductionCaseVerification } from "./scenarioProductionVerificationMonster";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  fallenLeavesProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  fallenLeavesProductionCaseVerification,\n  monsterProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenFallenLeavesExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenFallenLeavesExpansion.ts",\n  "chapterNineteenMonsterExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const fallenLeavesNeedles = [\'"title": "Fallen Leaves"\', \'title: "Fallen Leaves"\', \'Kuolleet lehdet\', \'Les Feuilles mortes\', \'scenario_fallen_leaves_2023\'];\n',
  'const fallenLeavesNeedles = [\'"title": "Fallen Leaves"\', \'title: "Fallen Leaves"\', \'Kuolleet lehdet\', \'Les Feuilles mortes\', \'scenario_fallen_leaves_2023\'];\nconst monsterNeedles = [\'"title": "Monster"\', \'title: "Monster"\', \'"originalTitle": "Kaibutsu"\', \'Monster (Kaibutsu)\', \'怪物\', \'L\\\'Innocence\', \'scenario_monster_2023\'];\n');
const monsterCandidateBlock = `
const monsterCandidate = \`
  {
    "title": "Monster",
    "originalTitle": "Kaibutsu",
    "year": 2023,
    "aliases": ["Monster (Kaibutsu)", "怪物", "L'Innocence"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Screenplay source-first case: materialize one new Monster/Kaibutsu identity after strict English/Japanese/French alias-aware structural reuse reconciliation; preserve Cannes production year 2023 separately from sourced 2022 Suwa principal photography; lock digital capture, the three-perspective camera grammar, script-led child-performance method, 126-minute/2.39:1/7.1+5.1 format evidence and the bounded Ryuichi Sakamoto collaboration without inventing camera body, lens, codec, budget, VFX, data, sound-hardware or mastering details."
  },\`;
`;
replaceOnce(files.chapter19Audit,
  '\nconst baseSource = readFileSync(basePath, "utf8");',
  `${monsterCandidateBlock}\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (fallenLeavesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Fallen Leaves/Kuolleet lehdet; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (fallenLeavesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Fallen Leaves/Kuolleet lehdet; consolidate the wrapper deliberately before continuing.");\nif (monsterNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Monster/Kaibutsu; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${thePotAuFeuCandidate}${fallenLeavesCandidate}`);',
  '${thePotAuFeuCandidate}${fallenLeavesCandidate}${monsterCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 606, `Global Production Verification registry must contain exactly 606 unique scenarioIds after Fallen Leaves Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 607, `Global Production Verification registry must contain exactly 607 unique scenarioIds after Monster Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 606, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 606.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 607, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 607.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 84, "Chapter 19 current candidate set must contain exactly 84 candidates after Cannes major-prizes reconciliation adds Fallen Leaves.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 85, "Chapter 19 current candidate set must contain exactly 85 candidates after Cannes major-prizes reconciliation adds Monster.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 82 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 82 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 83 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 83 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const fallenLeaves = chapter19.candidates.find((candidate) => candidate.title === "Fallen Leaves");\ninvariant(fallenLeaves?.decision === "USE_EXISTING" && fallenLeaves?.scenarioId === "scenario_fallen_leaves_2023" && fallenLeaves?.matches === 1 && fallenLeaves?.productionVerified === true, "Fallen Leaves is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const fallenLeaves = chapter19.candidates.find((candidate) => candidate.title === "Fallen Leaves");\ninvariant(fallenLeaves?.decision === "USE_EXISTING" && fallenLeaves?.scenarioId === "scenario_fallen_leaves_2023" && fallenLeaves?.matches === 1 && fallenLeaves?.productionVerified === true, "Fallen Leaves is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst monster = chapter19.candidates.find((candidate) => candidate.title === "Monster");\ninvariant(monster?.decision === "USE_EXISTING" && monster?.scenarioId === "scenario_monster_2023" && monster?.matches === 1 && monster?.productionVerified === true, "Monster is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract,
  '  "Fallen Leaves",\n  "Tenet",',
  '  "Fallen Leaves",\n  "Monster",\n  "Tenet",',
  2);
replaceOnce(files.chapter19Contract,
  '  "Fallen Leaves",\n  "Nomadland",',
  '  "Fallen Leaves",\n  "Monster",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 606;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 607;/);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.expectedCount, 606);', '  assert.equal(resolved.atlas.expectedCount, 607);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.actualCount, 606);', '  assert.equal(resolved.atlas.actualCount, 607);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 606);', '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 607);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-four candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-five candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 84);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 85);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.candidates.length, 84);', '  assert.equal(resolved.candidates.length, 85);');
replaceOnce(files.chapter19Contract,
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 13], [2024, 12], [2025, 11]]);',
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 14], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 57);', '  assert.equal(exactP1Priority.length, 58);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 82);', '  assert.equal(exactUseExisting.length, 83);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(fallenLeaves.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(fallenLeaves.productionVerified, true);\n\n  const monster = resolved.candidates.find((candidate) => candidate.title === "Monster");\n  assert.ok(monster);\n  assert.equal(monster.year, 2023);\n  assert.equal(monster.decision, "USE_EXISTING");\n  assert.equal(monster.scenarioId, "scenario_monster_2023");\n  assert.equal(monster.matches, 1);\n  assert.equal(monster.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} Production Verification IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} Chapter 19 candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING, `Expected ${NEXT_USE_EXISTING} USE_EXISTING candidates after materialization.`);
invariant(JSON.stringify(after.byDecision?.P2) === JSON.stringify(["Days", "The Green Knight"]), `P2 queue drifted: ${JSON.stringify(after.byDecision?.P2)}`);
invariant(after.byDecision?.P0?.length === 0 && after.byDecision?.P1?.length === 0 && after.byDecision?.EXISTING_REQUIRED?.length === 0, "Resolved Chapter 19 queue gained an unexpected unresolved decision.");
const candidate = after.candidates.find((item) => item.title === "Monster");
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, `Monster candidate did not resolve to one production-verified identity: ${JSON.stringify(candidate)}`);
invariant(candidate?.origin === "chapterNineteenMonsterExpansion.ts", `Unexpected Monster candidate origin: ${candidate?.origin}`);
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenMonsterExpansion.ts");
invariant(expansion?.definitions === 1 && expansion?.appended === 1 && expansion?.matchedExisting === 0, `Monster expansion did not prove 1 definition / 1 append / 0 reuse: ${JSON.stringify(expansion)}`);
invariant(after.candidates.filter((item) => item.year === 2023).length === 14, "Chapter 19 2023 candidate bucket did not advance from 13 to 14.");
invariant(afterCannes.summary?.unresolvedFilms === 7 && afterCannes.summary?.missingCandidateFilms === 7, `Cannes unresolved census did not fall to 7/7: ${JSON.stringify(afterCannes.summary)}`);
invariant(afterCannes.correctiveQueue?.length === 7, `Expected 7 remaining Cannes corrective cases, found ${afterCannes.correctiveQueue?.length}.`);
invariant(!afterCannes.correctiveQueue.some((item) => item.title === "Monster"), "Monster remains in the Cannes corrective queue after materialization.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "About Dry Grasses" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", `About Dry Grasses is not the next Cannes queue leader: ${JSON.stringify(afterCannes.correctiveQueue?.[0])}`);
const after2023 = afterCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(after2023?.unresolvedFilms === 2, `Cannes 2023 unresolved census did not fall from 3 to 2: ${JSON.stringify(after2023)}`);

console.log(`Monster materialization proven: ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas, ${NEXT_PV} PV, ${NEXT_CANDIDATES} candidates, ${NEXT_USE_EXISTING} USE_EXISTING, Cannes unresolved 7, next About Dry Grasses.`);
