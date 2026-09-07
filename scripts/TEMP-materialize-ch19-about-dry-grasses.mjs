import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_about_dry_grasses_2023";
const BASE_ATLAS = 606;
const BASE_PV = 606;
const BASE_CANDIDATES = 85;
const BASE_USE_EXISTING = 83;
const BASE_CANNES_UNRESOLVED = 7;
const NEXT_ATLAS = 607;
const NEXT_PV = 607;
const NEXT_CANDIDATES = 86;
const NEXT_USE_EXISTING = 84;
const NEXT_CANNES_UNRESOLVED = 6;

const files = {
  expansion: "src/core/chapterNineteenAboutDryGrassesExpansion.ts",
  test: "src/core/chapterNineteenAboutDryGrassesExpansion.test.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenAboutDryGrasses.ts",
  pv: "src/ui/data/scenarioProductionVerificationAboutDryGrasses.ts",
  filmScenarios: "src/ui/data/filmScenarios.ts",
  filmStudyMap: "src/ui/data/scenarioFilmStudyMap.ts",
  pvRegistry: "src/ui/data/scenarioProductionVerificationRegistry.ts",
  productionAudit: "scripts/production-case-rest-audit.mjs",
  chapter19Audit: "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  chapter18Completion: "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  chapter19Contract: "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  chapter19Resolved: "docs/film-history-chapter-nineteen-atlas-resolved.json",
  cannesAudit: "scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs",
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
function normalize(value) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before About Dry Grasses.");
invariant(!before.candidates?.some((item) => item.title === "About Dry Grasses" || item.originalTitle === "Kuru Otlar Üstüne" || item.scenarioId === SCENARIO_ID), "About Dry Grasses is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before About Dry Grasses.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "About Dry Grasses" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "About Dry Grasses must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Perfect Days", "Perfect Days must be second in the Cannes queue before materialization.");
const before2023 = beforeCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(before2023?.unresolvedFilms === 2, `Expected two unresolved Cannes 2023 films before materialization, found ${before2023?.unresolvedFilms}.`);

for (const p of [files.expansion, files.test, files.filmStudy, files.pv]) invariant(read(p).includes(SCENARIO_ID), `${p}: new canonical scenario ID is missing.`);
invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length >= 2, "Expansion must define and test/use the canonical ID.");
invariant((read(files.filmStudy).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Film Study must contain exactly one literal canonical scenario ID.");
invariant((read(files.pv).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "PV must contain exactly one literal canonical scenario ID.");

const allowedNewPaths = new Set([
  files.expansion,
  files.test,
  files.filmStudy,
  files.pv,
  "scripts/TEMP-diagnose-ch19-about-dry-grasses.mjs",
  "scripts/TEMP-materialize-ch19-about-dry-grasses.mjs",
  ".github/workflows/TEMP-ch19-about-dry-grasses-diagnostic.yml",
]);
const probes = ["About Dry Grasses", "Kuru Otlar Üstüne", "Kuru Otlar Ustune", SCENARIO_ID, "scenario_kuru_otlar_ustune_2023"].map(normalize);
const preExistingHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (allowedNewPaths.has(rel)) continue;
  if (!(rel.startsWith("src/core/") || rel.startsWith("src/ui/data/") || rel === "data/film/scenarios/film_scenarios_seed.json")) continue;
  if (!/\.(?:ts|tsx|js|mjs|json)$/.test(rel)) continue;
  const source = normalize(readFileSync(full, "utf8"));
  if (probes.some((probe) => source.includes(probe))) preExistingHits.push(rel);
}
invariant(preExistingHits.length === 0, `Pre-existing About Dry Grasses/Kuru Otlar identity found outside new source-first files: ${preExistingHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenFallenLeavesExpansion } from "../../core/chapterNineteenFallenLeavesExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenFallenLeavesExpansion } from "../../core/chapterNineteenFallenLeavesExpansion.js";\nimport { mergeChapterNineteenAboutDryGrassesExpansion } from "../../core/chapterNineteenAboutDryGrassesExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenFallenLeavesScenarios = mergeChapterNineteenFallenLeavesExpansion(chapterNineteenThePotAuFeuScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenFallenLeavesScenarios);',
  'const chapterNineteenFallenLeavesScenarios = mergeChapterNineteenFallenLeavesExpansion(chapterNineteenThePotAuFeuScenarios);\nconst chapterNineteenAboutDryGrassesScenarios = mergeChapterNineteenAboutDryGrassesExpansion(chapterNineteenFallenLeavesScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenAboutDryGrassesScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_fallen_leaves_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_fallen_leaves_expansion_2026+manual_chapter_nineteen_about_dry_grasses_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { fallenLeavesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFallenLeaves";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { fallenLeavesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFallenLeaves";\nimport { aboutDryGrassesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAboutDryGrasses";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [fallenLeavesFilmHistoryProfile.scenarioId]: fallenLeavesFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [fallenLeavesFilmHistoryProfile.scenarioId]: fallenLeavesFilmHistoryProfile,\n  [aboutDryGrassesFilmHistoryProfile.scenarioId]: aboutDryGrassesFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { fallenLeavesProductionCaseVerification } from "./scenarioProductionVerificationFallenLeaves";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { fallenLeavesProductionCaseVerification } from "./scenarioProductionVerificationFallenLeaves";\nimport { aboutDryGrassesProductionCaseVerification } from "./scenarioProductionVerificationAboutDryGrasses";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  fallenLeavesProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  fallenLeavesProductionCaseVerification,\n  aboutDryGrassesProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenFallenLeavesExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenFallenLeavesExpansion.ts",\n  "chapterNineteenAboutDryGrassesExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const monsterNeedles = [\'"title": "Monster"\', \'title: "Monster"\', \'"originalTitle": "Kaibutsu"\', \'Monster (Kaibutsu)\', \'scenario_monster_kore_eda_2023\'];\n',
  'const monsterNeedles = [\'"title": "Monster"\', \'title: "Monster"\', \'"originalTitle": "Kaibutsu"\', \'Monster (Kaibutsu)\', \'scenario_monster_kore_eda_2023\'];\nconst aboutDryGrassesNeedles = [\'"title": "About Dry Grasses"\', \'title: "About Dry Grasses"\', \'"originalTitle": "Kuru Otlar Üstüne"\', \'Kuru Otlar Ustune\', \'scenario_about_dry_grasses_2023\'];\n');
const aboutCandidate = `
const aboutDryGrassesCandidate = \`
  {
    "title": "About Dry Grasses",
    "originalTitle": "Kuru Otlar Üstüne",
    "year": 2023,
    "aliases": ["Kuru Otlar Ustune"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Actress source-first case: materialize one new About Dry Grasses/Kuru Otlar Üstüne identity only after tree-wide reuse checks are negative; preserve 2023 production metadata separately from 2021 Eastern Anatolia photography; lock 4K Sony VENICE/Cooke Anamorphic SF 2X/24fps/Scope, pandemic-winter location production, full-script editorial reduction, credited sound/VFX/grade chains and explicit format provenance without inventing unsupported budget, equipment, VFX-census or mastering detail."
  },\`;
`;
replaceOnce(files.chapter19Audit, '\nconst baseSource = readFileSync(basePath, "utf8");', `${aboutCandidate}\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (monsterNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Monster/Kaibutsu; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (monsterNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Monster/Kaibutsu; consolidate the wrapper deliberately before continuing.");\nif (aboutDryGrassesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains About Dry Grasses/Kuru Otlar Üstüne; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${fallenLeavesCandidate}${monsterCandidate}`);',
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 606, `Global Production Verification registry must remain exactly 606 unique scenarioIds after Monster reuse reconciliation: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 607, `Global Production Verification registry must contain exactly 607 unique scenarioIds after About Dry Grasses Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 606, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 606.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 607, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 607.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 85, "Chapter 19 current candidate set must contain exactly 85 candidates after Cannes major-prizes reconciliation adds Monster by reuse.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 86, "Chapter 19 current candidate set must contain exactly 86 candidates after Cannes major-prizes source-first materialization adds About Dry Grasses.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 83 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 83 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 84 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 84 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'invariant(monster?.decision === "USE_EXISTING" && monster?.scenarioId === "scenario_monster_kore_eda_2023" && monster?.matches === 1 && monster?.productionVerified === true, "Monster is not reconciled as one existing production-verified Chapter 19 Cannes major-prizes case.");',
  'invariant(monster?.decision === "USE_EXISTING" && monster?.scenarioId === "scenario_monster_kore_eda_2023" && monster?.matches === 1 && monster?.productionVerified === true, "Monster is not reconciled as one existing production-verified Chapter 19 Cannes major-prizes case.");\nconst aboutDryGrasses = chapter19.candidates.find((candidate) => candidate.title === "About Dry Grasses");\ninvariant(aboutDryGrasses?.decision === "USE_EXISTING" && aboutDryGrasses?.scenarioId === "scenario_about_dry_grasses_2023" && aboutDryGrasses?.matches === 1 && aboutDryGrasses?.productionVerified === true, "About Dry Grasses is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");');

replaceCount(files.chapter19Contract, '  "Monster",\n', '  "Monster",\n  "About Dry Grasses",\n', 3);
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 606;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 607;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 606);', 'assert.equal(resolved.atlas.expectedCount, 607);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 606);', 'assert.equal(resolved.atlas.actualCount, 607);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 606);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 607);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-five candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-six candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 85);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 86);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 85);', 'assert.equal(resolved.candidates.length, 86);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 14], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 15], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 58);', 'assert.equal(exactP1Priority.length, 59);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 83);', 'assert.equal(exactUseExisting.length, 84);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(monster.productionVerified, true);',
  '  assert.equal(monster.productionVerified, true);\n\n  const aboutDryGrasses = resolved.candidates.find((candidate) => candidate.title === "About Dry Grasses");\n  assert.ok(aboutDryGrasses);\n  assert.equal(aboutDryGrasses.year, 2023);\n  assert.equal(aboutDryGrasses.decision, "USE_EXISTING");\n  assert.equal(aboutDryGrasses.scenarioId, "scenario_about_dry_grasses_2023");\n  assert.equal(aboutDryGrasses.matches, 1);\n  assert.equal(aboutDryGrasses.productionVerified, true);');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [files.cannesAudit, `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} PV IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Unexpected decision census after About Dry Grasses materialization.");
const candidate = after.candidates.find((item) => item.title === "About Dry Grasses");
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, "About Dry Grasses did not close as one production-verified USE_EXISTING candidate.");
invariant(afterCannes.summary?.unresolvedFilms === NEXT_CANNES_UNRESOLVED && afterCannes.correctiveQueue?.length === NEXT_CANNES_UNRESOLVED, `Expected ${NEXT_CANNES_UNRESOLVED} unresolved Cannes films after materialization.`);
invariant(afterCannes.correctiveQueue?.[0]?.title === "Perfect Days", `Expected Perfect Days as next Cannes queue leader, found ${afterCannes.correctiveQueue?.[0]?.title}.`);
const after2023 = afterCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(after2023?.unresolvedFilms === 1, `Expected one unresolved Cannes 2023 film after materialization, found ${after2023?.unresolvedFilms}.`);
const awarded = afterCannes.awardedFilms?.find((item) => item.title === "About Dry Grasses");
invariant(awarded?.scenarioId === SCENARIO_ID && awarded?.productionVerified === true && awarded?.status === "PRODUCTION_VERIFIED", "Cannes audit did not resolve About Dry Grasses to the new canonical scenario.");

console.log(JSON.stringify({
  scenarioId: SCENARIO_ID,
  atlas: `${BASE_ATLAS}->${after.atlas.actualCount}`,
  productionVerificationIds: `${BASE_PV}->${after.verificationIndex.literalVerifiedScenarioIds}`,
  candidates: `${BASE_CANDIDATES}->${after.candidates.length}`,
  useExisting: `${BASE_USE_EXISTING}->${after.byDecision.USE_EXISTING.length}`,
  p2: after.byDecision.P2.length,
  cannesUnresolved: `${BASE_CANNES_UNRESOLVED}->${afterCannes.summary.unresolvedFilms}`,
  cannes2023Unresolved: `${before2023.unresolvedFilms}->${after2023.unresolvedFilms}`,
  nextCannesCase: afterCannes.correctiveQueue[0]?.title,
}, null, 2));
