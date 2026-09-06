import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_fallen_leaves_2023";
const BASE_ATLAS = 605;
const BASE_PV = 605;
const BASE_CANDIDATES = 83;
const BASE_USE_EXISTING = 81;
const BASE_CANNES_UNRESOLVED = 9;
const NEXT_ATLAS = 606;
const NEXT_PV = 606;
const NEXT_CANDIDATES = 84;
const NEXT_USE_EXISTING = 82;

const files = {
  expansion: "src/core/chapterNineteenFallenLeavesExpansion.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenFallenLeaves.ts",
  pv: "src/ui/data/scenarioProductionVerificationFallenLeaves.ts",
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Fallen Leaves.");
invariant(!before.candidates?.some((item) => item.title === "Fallen Leaves" || item.originalTitle === "Kuolleet lehdet" || item.scenarioId === SCENARIO_ID), "Fallen Leaves is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Fallen Leaves.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Fallen Leaves" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Fallen Leaves must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Monster" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "Monster must be second in the Cannes queue before Fallen Leaves materialization.");
const before2023 = beforeCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(before2023?.unresolvedFilms === 4, `Expected four unresolved Cannes 2023 films before materialization, found ${before2023?.unresolvedFilms}.`);

const allowedIdentityPaths = new Set([
  files.expansion,
  "src/core/chapterNineteenFallenLeavesExpansion.test.ts",
  files.filmStudy,
  files.pv,
  "scripts/TEMP-materialize-ch19-fallen-leaves.mjs",
  ".github/workflows/TEMP-ch19-fallen-leaves-materialize.yml",
]);
const identityHits = [];
const titlePattern = /\b(?:title|originalTitle|original_title)\s*:\s*"(?:Fallen Leaves|Kuolleet lehdet|Les Feuilles mortes|Fallende Blätter)"/;
const aliasPattern = /\baliases\s*:\s*\[[^\]]*"(?:Fallen Leaves|Kuolleet lehdet|Les Feuilles mortes|Fallende Blätter)"/s;
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if ((!rel.startsWith("src/core/") && !rel.startsWith("src/ui/data/")) || !/\.ts$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  const text = readFileSync(full, "utf8");
  if (text.includes(SCENARIO_ID) || titlePattern.test(text) || aliasPattern.test(text)) identityHits.push(rel);
}
invariant(identityHits.length === 0, `Pre-existing Fallen Leaves identity or alias found outside source-first files: ${identityHits.join(", ")}`);

// Add the already researched direct Vatanen/Pöysti source before canonicalization so every named production-method claim is represented in the locked PV source list.
replaceOnce(files.pv,
`    {
      title: "Fallen Leaves",
      publisher: "Pandora Film Produktion",`,
`    {
      title: "Fallen Leaves, a Finnish Romcom to Rival Notting Hill",
      publisher: "AnOther",
      url: "https://www.anothermag.com/design-living/15285/fallen-leaves-film-review-aki-kaurismaki-jussi-vatanen-alma-poysti-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Direct Alma Pöysti and Jussi Vatanen interview supporting Kaurismäki's one-take preference, minimal conventional rehearsal, long-take staging and the need to preserve rhythm inside the frame."
    },
    {
      title: "Fallen Leaves",
      publisher: "Pandora Film Produktion",`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenThePotAuFeuExpansion } from "../../core/chapterNineteenThePotAuFeuExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenThePotAuFeuExpansion } from "../../core/chapterNineteenThePotAuFeuExpansion.js";\nimport { mergeChapterNineteenFallenLeavesExpansion } from "../../core/chapterNineteenFallenLeavesExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenThePotAuFeuScenarios = mergeChapterNineteenThePotAuFeuExpansion(chapterNineteenBrokerScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenThePotAuFeuScenarios);',
  'const chapterNineteenThePotAuFeuScenarios = mergeChapterNineteenThePotAuFeuExpansion(chapterNineteenBrokerScenarios);\nconst chapterNineteenFallenLeavesScenarios = mergeChapterNineteenFallenLeavesExpansion(chapterNineteenThePotAuFeuScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenFallenLeavesScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_the_pot_au_feu_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_the_pot_au_feu_expansion_2026+manual_chapter_nineteen_fallen_leaves_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { thePotAuFeuFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenThePotAuFeu";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { thePotAuFeuFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenThePotAuFeu";\nimport { fallenLeavesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFallenLeaves";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [thePotAuFeuFilmHistoryProfile.scenarioId]: thePotAuFeuFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [thePotAuFeuFilmHistoryProfile.scenarioId]: thePotAuFeuFilmHistoryProfile,\n  [fallenLeavesFilmHistoryProfile.scenarioId]: fallenLeavesFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { thePotAuFeuProductionCaseVerification } from "./scenarioProductionVerificationThePotAuFeu";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { thePotAuFeuProductionCaseVerification } from "./scenarioProductionVerificationThePotAuFeu";\nimport { fallenLeavesProductionCaseVerification } from "./scenarioProductionVerificationFallenLeaves";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  thePotAuFeuProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  thePotAuFeuProductionCaseVerification,\n  fallenLeavesProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenThePotAuFeuExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenThePotAuFeuExpansion.ts",\n  "chapterNineteenFallenLeavesExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const thePotAuFeuNeedles = [\'"title": "The Pot-au-Feu"\', \'title: "The Pot-au-Feu"\', \'La Passion de Dodin Bouffant\', \'The Taste of Things\', \'scenario_the_pot_au_feu_2023\'];\n',
  'const thePotAuFeuNeedles = [\'"title": "The Pot-au-Feu"\', \'title: "The Pot-au-Feu"\', \'La Passion de Dodin Bouffant\', \'The Taste of Things\', \'scenario_the_pot_au_feu_2023\'];\nconst fallenLeavesNeedles = [\'"title": "Fallen Leaves"\', \'title: "Fallen Leaves"\', \'Kuolleet lehdet\', \'Les Feuilles mortes\', \'scenario_fallen_leaves_2023\'];\n');
const fallenCandidateBlock = `
const fallenLeavesCandidate = \`
  {
    "title": "Fallen Leaves",
    "originalTitle": "Kuolleet lehdet",
    "year": 2023,
    "aliases": ["Les Feuilles mortes", "Fallende Blätter"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Jury Prize source-first case: materialize one new Fallen Leaves/Kuolleet lehdet identity after strict English/Finnish/French alias-aware structural reuse reconciliation; preserve Cannes productionYear 2023 separately from documented second-half-August 2022 Helsinki/Kallio shooting; lock 35mm, ARRI Analog/Ultra Prime/ARRI Fresnel family evidence, one-take/minimal-rehearsal production method, 1.85:1 and Dolby 5.1 catalogue formats, and bounded SES public support without inventing exact camera body, stock/lab, sound hardware, VFX, budget shares or mastering lineage."
  },\`;
`;
replaceOnce(files.chapter19Audit,
  '\nconst baseSource = readFileSync(basePath, "utf8");',
  `${fallenCandidateBlock}\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (thePotAuFeuNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Pot-au-Feu/La Passion de Dodin Bouffant/The Taste of Things; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (thePotAuFeuNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Pot-au-Feu/La Passion de Dodin Bouffant/The Taste of Things; consolidate the wrapper deliberately before continuing.");\nif (fallenLeavesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Fallen Leaves/Kuolleet lehdet; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${thePotAuFeuCandidate}`);',
  '${thePotAuFeuCandidate}${fallenLeavesCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 605, `Global Production Verification registry must contain exactly 605 unique scenarioIds after The Pot-au-Feu Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 606, `Global Production Verification registry must contain exactly 606 unique scenarioIds after Fallen Leaves Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 605, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 605.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 606, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 606.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 83, "Chapter 19 current candidate set must contain exactly 83 candidates after Cannes major-prizes reconciliation adds The Pot-au-Feu.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 84, "Chapter 19 current candidate set must contain exactly 84 candidates after Cannes major-prizes reconciliation adds Fallen Leaves.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 81 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 81 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 82 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 82 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const thePotAuFeu = chapter19.candidates.find((candidate) => candidate.title === "The Pot-au-Feu");\ninvariant(thePotAuFeu?.decision === "USE_EXISTING" && thePotAuFeu?.scenarioId === "scenario_the_pot_au_feu_2023" && thePotAuFeu?.matches === 1 && thePotAuFeu?.productionVerified === true, "The Pot-au-Feu is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const thePotAuFeu = chapter19.candidates.find((candidate) => candidate.title === "The Pot-au-Feu");\ninvariant(thePotAuFeu?.decision === "USE_EXISTING" && thePotAuFeu?.scenarioId === "scenario_the_pot_au_feu_2023" && thePotAuFeu?.matches === 1 && thePotAuFeu?.productionVerified === true, "The Pot-au-Feu is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst fallenLeaves = chapter19.candidates.find((candidate) => candidate.title === "Fallen Leaves");\ninvariant(fallenLeaves?.decision === "USE_EXISTING" && fallenLeaves?.scenarioId === "scenario_fallen_leaves_2023" && fallenLeaves?.matches === 1 && fallenLeaves?.productionVerified === true, "Fallen Leaves is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract,
  '  "The Pot-au-Feu",\n  "Tenet",',
  '  "The Pot-au-Feu",\n  "Fallen Leaves",\n  "Tenet",',
  2);
replaceOnce(files.chapter19Contract,
  '  "The Pot-au-Feu",\n  "Nomadland",',
  '  "The Pot-au-Feu",\n  "Fallen Leaves",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 605;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 606;/);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.expectedCount, 605);', '  assert.equal(resolved.atlas.expectedCount, 606);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.actualCount, 605);', '  assert.equal(resolved.atlas.actualCount, 606);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 605);', '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 606);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-three candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-four candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 83);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 84);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.candidates.length, 83);', '  assert.equal(resolved.candidates.length, 84);');
replaceOnce(files.chapter19Contract,
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 12], [2024, 12], [2025, 11]]);',
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 13], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 56);', '  assert.equal(exactP1Priority.length, 57);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 81);', '  assert.equal(exactUseExisting.length, 82);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(thePotAuFeu.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(thePotAuFeu.productionVerified, true);\n\n  const fallenLeaves = resolved.candidates.find((candidate) => candidate.title === "Fallen Leaves");\n  assert.ok(fallenLeaves);\n  assert.equal(fallenLeaves.year, 2023);\n  assert.equal(fallenLeaves.decision, "USE_EXISTING");\n  assert.equal(fallenLeaves.scenarioId, "scenario_fallen_leaves_2023");\n  assert.equal(fallenLeaves.matches, 1);\n  assert.equal(fallenLeaves.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

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
const candidate = after.candidates.find((item) => item.title === "Fallen Leaves");
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, `Fallen Leaves candidate did not resolve to one production-verified identity: ${JSON.stringify(candidate)}`);
invariant(candidate?.origin === "chapterNineteenFallenLeavesExpansion.ts", `Unexpected Fallen Leaves candidate origin: ${candidate?.origin}`);
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenFallenLeavesExpansion.ts");
invariant(expansion?.definitions === 1 && expansion?.appended === 1 && expansion?.matchedExisting === 0, `Fallen Leaves expansion did not prove 1 definition / 1 append / 0 reuse: ${JSON.stringify(expansion)}`);
invariant(after.candidates.filter((item) => item.year === 2023).length === 13, "Chapter 19 2023 candidate bucket did not advance from 12 to 13.");
invariant(afterCannes.summary?.unresolvedFilms === 8 && afterCannes.summary?.missingCandidateFilms === 8, `Cannes unresolved census did not fall to 8/8: ${JSON.stringify(afterCannes.summary)}`);
invariant(afterCannes.correctiveQueue?.length === 8, `Expected 8 remaining Cannes corrective cases, found ${afterCannes.correctiveQueue?.length}.`);
invariant(!afterCannes.correctiveQueue.some((item) => item.title === "Fallen Leaves"), "Fallen Leaves remains in the Cannes corrective queue after materialization.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "Monster" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", `Monster is not the next Cannes queue leader: ${JSON.stringify(afterCannes.correctiveQueue?.[0])}`);
const after2023 = afterCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(after2023?.unresolvedFilms === 3, `Cannes 2023 unresolved census did not fall from 4 to 3: ${JSON.stringify(after2023)}`);

console.log(`Fallen Leaves materialization proven: ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas, ${NEXT_PV} PV, ${NEXT_CANDIDATES} candidates, ${NEXT_USE_EXISTING} USE_EXISTING, Cannes unresolved 8, next Monster.`);
