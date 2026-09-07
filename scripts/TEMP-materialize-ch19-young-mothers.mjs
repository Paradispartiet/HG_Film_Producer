import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const SCENARIO_ID = "scenario_young_mothers_2025";
const BASE_ATLAS = 611;
const BASE_PV = 611;
const BASE_CANDIDATES = 90;
const BASE_USE_EXISTING = 88;
const BASE_CANNES_UNRESOLVED = 2;
const NEXT_ATLAS = 612;
const NEXT_PV = 612;
const NEXT_CANDIDATES = 91;
const NEXT_USE_EXISTING = 89;
const NEXT_CANNES_UNRESOLVED = 1;

const files = {
  expansion: "src/core/chapterNineteenYoungMothersExpansion.ts",
  test: "src/core/chapterNineteenYoungMothersExpansion.test.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenYoungMothers.ts",
  pv: "src/ui/data/scenarioProductionVerificationYoungMothers.ts",
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Young Mothers.");
invariant(!before.candidates?.some((item) => normalize(item.title) === normalize("Young Mothers") || normalize(item.originalTitle) === normalize("Jeunes Mères") || item.scenarioId === SCENARIO_ID), "Young Mothers is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Young Mothers.`);
invariant(normalize(beforeCannes.correctiveQueue?.[0]?.title) === normalize("Young Mothers") && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Young Mothers must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
const before2025 = beforeCannes.coverageByYear?.find((item) => item.year === 2025);
invariant(before2025?.unresolvedFilms === 2, `Expected two unresolved Cannes 2025 films before materialization, found ${before2025?.unresolvedFilms}.`);

for (const p of [files.expansion, files.test, files.filmStudy, files.pv]) invariant(read(p).includes(SCENARIO_ID), `${p}: new canonical scenario ID is missing.`);
invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Expansion must define exactly one literal canonical scenario ID.");
invariant(read(files.test).includes(SCENARIO_ID), "Expansion test must lock the canonical scenario ID.");
invariant((read(files.filmStudy).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Film Study must contain exactly one literal canonical scenario ID.");
invariant((read(files.pv).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "PV must contain exactly one literal canonical scenario ID.");

const allowedNewPaths = new Set([
  files.expansion, files.test, files.filmStudy, files.pv,
  "scripts/TEMP-materialize-ch19-young-mothers.mjs",
  ".github/workflows/TEMP-ch19-young-mothers-materialize.yml",
]);
const probes = ["Young Mothers", "Jeunes Mères", "Jeunes Meres", "Young Mothers (2025)", SCENARIO_ID, "scenario_jeunes_meres_2025", "scenario_young_mothers_dardenne_2025"].map(normalize);
const preExistingHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (allowedNewPaths.has(rel)) continue;
  if (!(rel.startsWith("src/core/") || rel.startsWith("src/ui/data/") || rel === "data/film/scenarios/film_scenarios_seed.json")) continue;
  if (!/\.(?:ts|tsx|js|mjs|json)$/.test(rel)) continue;
  const source = normalize(readFileSync(full, "utf8"));
  if (probes.some((probe) => source.includes(probe))) preExistingHits.push(rel);
}
invariant(preExistingHits.length === 0, `Pre-existing Young Mothers identity found outside new source-first files: ${preExistingHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenKindsOfKindnessExpansion } from "../../core/chapterNineteenKindsOfKindnessExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenKindsOfKindnessExpansion } from "../../core/chapterNineteenKindsOfKindnessExpansion.js";\nimport { mergeChapterNineteenYoungMothersExpansion } from "../../core/chapterNineteenYoungMothersExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenKindsOfKindnessScenarios = mergeChapterNineteenKindsOfKindnessExpansion(chapterNineteenGrandTourScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenKindsOfKindnessScenarios);',
  'const chapterNineteenKindsOfKindnessScenarios = mergeChapterNineteenKindsOfKindnessExpansion(chapterNineteenGrandTourScenarios);\nconst chapterNineteenYoungMothersScenarios = mergeChapterNineteenYoungMothersExpansion(chapterNineteenKindsOfKindnessScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenYoungMothersScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_kinds_of_kindness_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_kinds_of_kindness_expansion_2026+manual_chapter_nineteen_young_mothers_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { kindsOfKindnessFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKindsOfKindness";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { kindsOfKindnessFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKindsOfKindness";\nimport { youngMothersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenYoungMothers";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [kindsOfKindnessFilmHistoryProfile.scenarioId]: kindsOfKindnessFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [kindsOfKindnessFilmHistoryProfile.scenarioId]: kindsOfKindnessFilmHistoryProfile,\n  [youngMothersFilmHistoryProfile.scenarioId]: youngMothersFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { kindsOfKindnessProductionCaseVerification } from "./scenarioProductionVerificationKindsOfKindness";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { kindsOfKindnessProductionCaseVerification } from "./scenarioProductionVerificationKindsOfKindness";\nimport { youngMothersProductionCaseVerification } from "./scenarioProductionVerificationYoungMothers";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  kindsOfKindnessProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  kindsOfKindnessProductionCaseVerification,\n  youngMothersProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenKindsOfKindnessExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenKindsOfKindnessExpansion.ts",\n  "chapterNineteenYoungMothersExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const kindsOfKindnessNeedles = [\'"title": "Kinds of Kindness"\', \'title: "Kinds of Kindness"\', \'Kinds of Kindness (2024)\', \'scenario_kinds_of_kindness_2024\', \'scenario_kinds_of_kindness_lanthimos_2024\'];\n',
  'const kindsOfKindnessNeedles = [\'"title": "Kinds of Kindness"\', \'title: "Kinds of Kindness"\', \'Kinds of Kindness (2024)\', \'scenario_kinds_of_kindness_2024\', \'scenario_kinds_of_kindness_lanthimos_2024\'];\nconst youngMothersNeedles = [\'"title": "Young Mothers"\', \'title: "Young Mothers"\', \'"originalTitle": "Jeunes Mères"\', \'Jeunes Meres\', \'Young Mothers (2025)\', \'scenario_young_mothers_2025\', \'scenario_jeunes_meres_2025\'];\n');
const youngMothersCandidate = `
  {
    "title": "Young Mothers",
    "originalTitle": "Jeunes Mères",
    "year": 2025,
    "aliases": ["Jeunes Meres", "Young Mothers (2025)", "Jeunes Mères (2025)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2025 Best Screenplay source-first case: materialize one new Young Mothers / Jeunes Mères identity only after tree-wide reuse checks are negative; preserve the real Liège maternal-home location, Dardenne long-sequence-shot and rehearsal method, RED V-Raptor plus Leitz Hugo 8K full-frame handheld natural-light pipeline, planned 52-day versus actual 38-day infant-sensitive schedule, LUT/DIT/ten-day Resolve-grade chain and explicit Cannes 104/César 105-minute discrepancy without inventing unsupported finance, sound-hardware, editorial, VFX, safety or delivery detail."
  },`;
replaceOnce(files.chapter19Audit, '\nconst baseSource = readFileSync(basePath, "utf8");', `\nconst youngMothersCandidate = \`${youngMothersCandidate}\`;\n\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (kindsOfKindnessNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Kinds of Kindness; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (kindsOfKindnessNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Kinds of Kindness; consolidate the wrapper deliberately before continuing.");\nif (youngMothersNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Young Mothers/Jeunes Mères; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}${emiliaPerezCandidate}${grandTourCandidate}${kindsOfKindnessCandidate}`);',
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}${emiliaPerezCandidate}${grandTourCandidate}${kindsOfKindnessCandidate}${youngMothersCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 611, `Global Production Verification registry must contain exactly 611 unique scenarioIds after Kinds of Kindness Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 612, `Global Production Verification registry must contain exactly 612 unique scenarioIds after Young Mothers Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 611, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 611.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 612, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 612.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 90, "Chapter 19 current candidate set must contain exactly 90 candidates after Cannes major-prizes source-first materialization adds Kinds of Kindness.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 91, "Chapter 19 current candidate set must contain exactly 91 candidates after Cannes major-prizes source-first materialization adds Young Mothers.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 88 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 88 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 89 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 89 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'invariant(kindsOfKindness?.decision === "USE_EXISTING" && kindsOfKindness?.scenarioId === "scenario_kinds_of_kindness_2024" && kindsOfKindness?.matches === 1 && kindsOfKindness?.productionVerified === true, "Kinds of Kindness is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'invariant(kindsOfKindness?.decision === "USE_EXISTING" && kindsOfKindness?.scenarioId === "scenario_kinds_of_kindness_2024" && kindsOfKindness?.matches === 1 && kindsOfKindness?.productionVerified === true, "Kinds of Kindness is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst youngMothers = chapter19.candidates.find((candidate) => candidate.title === "Young Mothers");\ninvariant(youngMothers?.decision === "USE_EXISTING" && youngMothers?.scenarioId === "scenario_young_mothers_2025" && youngMothers?.matches === 1 && youngMothers?.productionVerified === true, "Young Mothers is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract, '  "Kinds of Kindness",\n', '  "Kinds of Kindness",\n  "Young Mothers",\n', 3);
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 611;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 612;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 611);', 'assert.equal(resolved.atlas.expectedCount, 612);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 611);', 'assert.equal(resolved.atlas.actualCount, 612);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 611);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 612);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly ninety candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly ninety-one candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 90);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 91);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 90);', 'assert.equal(resolved.candidates.length, 91);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 15], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 15], [2025, 12]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 63);', 'assert.equal(exactP1Priority.length, 64);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 88);', 'assert.equal(exactUseExisting.length, 89);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(kindsOfKindness.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(kindsOfKindness.productionVerified, true);\n\n  const youngMothers = resolved.candidates.find((candidate) => candidate.title === "Young Mothers");\n  assert.ok(youngMothers);\n  assert.equal(youngMothers.year, 2025);\n  assert.equal(youngMothers.decision, "USE_EXISTING");\n  assert.equal(youngMothers.scenarioId, "scenario_young_mothers_2025");\n  assert.equal(youngMothers.matches, 1);\n  assert.equal(youngMothers.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [files.cannesAudit, `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} PV IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Unexpected decision census after Young Mothers materialization.");
const candidate = after.candidates.find((item) => normalize(item.title) === normalize("Young Mothers"));
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, "Young Mothers did not close as one production-verified USE_EXISTING candidate.");
invariant(afterCannes.summary?.unresolvedFilms === NEXT_CANNES_UNRESOLVED && afterCannes.correctiveQueue?.length === NEXT_CANNES_UNRESOLVED, `Expected ${NEXT_CANNES_UNRESOLVED} unresolved Cannes films after materialization.`);
invariant(!afterCannes.correctiveQueue?.some((item) => normalize(item.title) === normalize("Young Mothers")), "Young Mothers remains in the Cannes corrective queue after materialization.");
const after2025 = afterCannes.coverageByYear?.find((item) => item.year === 2025);
invariant(after2025?.unresolvedFilms === 1, `Expected one unresolved Cannes 2025 film after materialization, found ${after2025?.unresolvedFilms}.`);
const awarded = afterCannes.awardedFilms?.find((item) => normalize(item.title) === normalize("Young Mothers"));
invariant(awarded?.scenarioId === SCENARIO_ID && awarded?.productionVerified === true && awarded?.status === "PRODUCTION_VERIFIED", "Cannes audit did not resolve Young Mothers to the new canonical scenario.");
invariant(normalize(afterCannes.correctiveQueue?.[0]?.title) === normalize("The Little Sister"), `Expected The Little Sister to become the next Cannes case, found ${afterCannes.correctiveQueue?.[0]?.title}.`);

console.log(JSON.stringify({
  scenarioId: SCENARIO_ID,
  atlas: `${BASE_ATLAS}->${after.atlas.actualCount}`,
  productionVerificationIds: `${BASE_PV}->${after.verificationIndex.literalVerifiedScenarioIds}`,
  candidates: `${BASE_CANDIDATES}->${after.candidates.length}`,
  useExisting: `${BASE_USE_EXISTING}->${after.byDecision.USE_EXISTING.length}`,
  p2: after.byDecision.P2.length,
  cannesUnresolved: `${BASE_CANNES_UNRESOLVED}->${afterCannes.summary.unresolvedFilms}`,
  cannes2025Unresolved: `${before2025.unresolvedFilms}->${after2025.unresolvedFilms}`,
  nextCannesCase: afterCannes.correctiveQueue[0]?.title,
}, null, 2));
