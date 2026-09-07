import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const SCENARIO_ID = "scenario_emilia_perez_2024";
const BASE_ATLAS = 608;
const BASE_PV = 608;
const BASE_CANDIDATES = 87;
const BASE_USE_EXISTING = 85;
const BASE_CANNES_UNRESOLVED = 5;
const NEXT_ATLAS = 609;
const NEXT_PV = 609;
const NEXT_CANDIDATES = 88;
const NEXT_USE_EXISTING = 86;
const NEXT_CANNES_UNRESOLVED = 4;

const files = {
  expansion: "src/core/chapterNineteenEmiliaPerezExpansion.ts",
  test: "src/core/chapterNineteenEmiliaPerezExpansion.test.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenEmiliaPerez.ts",
  pv: "src/ui/data/scenarioProductionVerificationEmiliaPerez.ts",
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Emilia Perez.");
invariant(!before.candidates?.some((item) => normalize(item.title) === normalize("Emilia Pérez") || item.scenarioId === SCENARIO_ID), "Emilia Perez is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Emilia Perez.`);
invariant(normalize(beforeCannes.correctiveQueue?.[0]?.title) === normalize("Emilia Pérez") && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Emilia Perez must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
const before2024 = beforeCannes.coverageByYear?.find((item) => item.year === 2024);
invariant(before2024?.unresolvedFilms === 3, `Expected three unresolved Cannes 2024 films before materialization, found ${before2024?.unresolvedFilms}.`);

for (const p of [files.expansion, files.test, files.filmStudy, files.pv]) invariant(read(p).includes(SCENARIO_ID), `${p}: new canonical scenario ID is missing.`);
invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Expansion must define exactly one literal canonical scenario ID.");
invariant(read(files.test).includes(SCENARIO_ID), "Expansion test must lock the canonical scenario ID.");
invariant((read(files.filmStudy).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Film Study must contain exactly one literal canonical scenario ID.");
invariant((read(files.pv).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "PV must contain exactly one literal canonical scenario ID.");

const allowedNewPaths = new Set([
  files.expansion, files.test, files.filmStudy, files.pv,
  "scripts/TEMP-diagnose-ch19-emilia-perez.mjs",
  "scripts/TEMP-materialize-ch19-emilia-perez.mjs",
  ".github/workflows/TEMP-ch19-emilia-perez-diagnostic.yml",
]);
const probes = ["Emilia Pérez", "Emilia Perez", SCENARIO_ID, "scenario_emilia_perez_audiard_2024"].map(normalize);
const preExistingHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (allowedNewPaths.has(rel)) continue;
  if (!(rel.startsWith("src/core/") || rel.startsWith("src/ui/data/") || rel === "data/film/scenarios/film_scenarios_seed.json")) continue;
  if (!/\.(?:ts|tsx|js|mjs|json)$/.test(rel)) continue;
  const source = normalize(readFileSync(full, "utf8"));
  if (probes.some((probe) => source.includes(probe))) preExistingHits.push(rel);
}
invariant(preExistingHits.length === 0, `Pre-existing Emilia Perez identity found outside new source-first files: ${preExistingHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenPerfectDaysExpansion } from "../../core/chapterNineteenPerfectDaysExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenPerfectDaysExpansion } from "../../core/chapterNineteenPerfectDaysExpansion.js";\nimport { mergeChapterNineteenEmiliaPerezExpansion } from "../../core/chapterNineteenEmiliaPerezExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenPerfectDaysScenarios = mergeChapterNineteenPerfectDaysExpansion(chapterNineteenAboutDryGrassesScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenPerfectDaysScenarios);',
  'const chapterNineteenPerfectDaysScenarios = mergeChapterNineteenPerfectDaysExpansion(chapterNineteenAboutDryGrassesScenarios);\nconst chapterNineteenEmiliaPerezScenarios = mergeChapterNineteenEmiliaPerezExpansion(chapterNineteenPerfectDaysScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenEmiliaPerezScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_perfect_days_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_perfect_days_expansion_2026+manual_chapter_nineteen_emilia_perez_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { perfectDaysFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenPerfectDays";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { perfectDaysFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenPerfectDays";\nimport { emiliaPerezFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEmiliaPerez";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [perfectDaysFilmHistoryProfile.scenarioId]: perfectDaysFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [perfectDaysFilmHistoryProfile.scenarioId]: perfectDaysFilmHistoryProfile,\n  [emiliaPerezFilmHistoryProfile.scenarioId]: emiliaPerezFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { perfectDaysProductionCaseVerification } from "./scenarioProductionVerificationPerfectDays";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { perfectDaysProductionCaseVerification } from "./scenarioProductionVerificationPerfectDays";\nimport { emiliaPerezProductionCaseVerification } from "./scenarioProductionVerificationEmiliaPerez";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  perfectDaysProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  perfectDaysProductionCaseVerification,\n  emiliaPerezProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenPerfectDaysExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenPerfectDaysExpansion.ts",\n  "chapterNineteenEmiliaPerezExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const perfectDaysNeedles = [\'"title": "Perfect Days"\', \'title: "Perfect Days"\', \'scenario_perfect_days_2023\', \'scenario_perfect_days_wenders_2023\'];\n',
  'const perfectDaysNeedles = [\'"title": "Perfect Days"\', \'title: "Perfect Days"\', \'scenario_perfect_days_2023\', \'scenario_perfect_days_wenders_2023\'];\nconst emiliaPerezNeedles = [\'"title": "Emilia Pérez"\', \'title: "Emilia Pérez"\', \'Emilia Perez\', \'scenario_emilia_perez_2024\', \'scenario_emilia_perez_audiard_2024\'];\n');
const emiliaCandidate = `
const emiliaPerezCandidate = \`
  {
    "title": "Emilia Pérez",
    "originalTitle": "Emilia Pérez",
    "year": 2024,
    "aliases": ["Emilia Perez"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2024 Jury Prize and ensemble Best Actress source-first case: materialize one new Emilia Pérez identity only after tree-wide reuse checks are negative; preserve Pathé 2023 and Cannes 2024 production-year provenance, lock the sourced 55-day Paris-studio/Mexico City split, Sony VENICE 1/2 full-frame 8K workflow, choreography-led camera, large Bry set/lighting system and approximately 500 effects shots without inventing unsupported finance, data, sound, DI or mastering detail."
  },\`;
`;
replaceOnce(files.chapter19Audit, '\nconst baseSource = readFileSync(basePath, "utf8");', `${emiliaCandidate}\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (perfectDaysNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Perfect Days; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (perfectDaysNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Perfect Days; consolidate the wrapper deliberately before continuing.");\nif (emiliaPerezNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Emilia Pérez; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}`);',
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}${emiliaPerezCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 608, `Global Production Verification registry must contain exactly 608 unique scenarioIds after Perfect Days Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 609, `Global Production Verification registry must contain exactly 609 unique scenarioIds after Emilia Perez Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 608, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 608.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 609, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 609.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 87, "Chapter 19 current candidate set must contain exactly 87 candidates after Cannes major-prizes source-first materialization adds Perfect Days.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 88, "Chapter 19 current candidate set must contain exactly 88 candidates after Cannes major-prizes source-first materialization adds Emilia Perez.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 85 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 85 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 86 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 86 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'invariant(perfectDays?.decision === "USE_EXISTING" && perfectDays?.scenarioId === "scenario_perfect_days_2023" && perfectDays?.matches === 1 && perfectDays?.productionVerified === true, "Perfect Days is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");',
  'invariant(perfectDays?.decision === "USE_EXISTING" && perfectDays?.scenarioId === "scenario_perfect_days_2023" && perfectDays?.matches === 1 && perfectDays?.productionVerified === true, "Perfect Days is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst emiliaPerez = chapter19.candidates.find((candidate) => candidate.title === "Emilia Pérez");\ninvariant(emiliaPerez?.decision === "USE_EXISTING" && emiliaPerez?.scenarioId === "scenario_emilia_perez_2024" && emiliaPerez?.matches === 1 && emiliaPerez?.productionVerified === true, "Emilia Pérez is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");');

replaceCount(files.chapter19Contract, '  "Perfect Days",\n', '  "Perfect Days",\n  "Emilia Pérez",\n', 3);
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 608;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 609;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 608);', 'assert.equal(resolved.atlas.expectedCount, 609);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 608);', 'assert.equal(resolved.atlas.actualCount, 609);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 608);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 609);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-seven candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-eight candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 87);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 88);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 87);', 'assert.equal(resolved.candidates.length, 88);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 13], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 60);', 'assert.equal(exactP1Priority.length, 61);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 85);', 'assert.equal(exactUseExisting.length, 86);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(perfectDays.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(perfectDays.productionVerified, true);\n\n  const emiliaPerez = resolved.candidates.find((candidate) => candidate.title === "Emilia Pérez");\n  assert.ok(emiliaPerez);\n  assert.equal(emiliaPerez.year, 2024);\n  assert.equal(emiliaPerez.decision, "USE_EXISTING");\n  assert.equal(emiliaPerez.scenarioId, "scenario_emilia_perez_2024");\n  assert.equal(emiliaPerez.matches, 1);\n  assert.equal(emiliaPerez.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [files.cannesAudit, `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} PV IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Unexpected decision census after Emilia Perez materialization.");
const candidate = after.candidates.find((item) => normalize(item.title) === normalize("Emilia Pérez"));
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, "Emilia Perez did not close as one production-verified USE_EXISTING candidate.");
invariant(afterCannes.summary?.unresolvedFilms === NEXT_CANNES_UNRESOLVED && afterCannes.correctiveQueue?.length === NEXT_CANNES_UNRESOLVED, `Expected ${NEXT_CANNES_UNRESOLVED} unresolved Cannes films after materialization.`);
invariant(!afterCannes.correctiveQueue?.some((item) => normalize(item.title) === normalize("Emilia Pérez")), "Emilia Perez remains in the Cannes corrective queue after materialization.");
const after2024 = afterCannes.coverageByYear?.find((item) => item.year === 2024);
invariant(after2024?.unresolvedFilms === 2, `Expected two unresolved Cannes 2024 films after materialization, found ${after2024?.unresolvedFilms}.`);
const awarded = afterCannes.awardedFilms?.find((item) => normalize(item.title) === normalize("Emilia Pérez"));
invariant(awarded?.scenarioId === SCENARIO_ID && awarded?.productionVerified === true && awarded?.status === "PRODUCTION_VERIFIED", "Cannes audit did not resolve Emilia Perez to the new canonical scenario.");

console.log(JSON.stringify({
  scenarioId: SCENARIO_ID,
  atlas: `${BASE_ATLAS}->${after.atlas.actualCount}`,
  productionVerificationIds: `${BASE_PV}->${after.verificationIndex.literalVerifiedScenarioIds}`,
  candidates: `${BASE_CANDIDATES}->${after.candidates.length}`,
  useExisting: `${BASE_USE_EXISTING}->${after.byDecision.USE_EXISTING.length}`,
  p2: after.byDecision.P2.length,
  cannesUnresolved: `${BASE_CANNES_UNRESOLVED}->${afterCannes.summary.unresolvedFilms}`,
  cannes2024Unresolved: `${before2024.unresolvedFilms}->${after2024.unresolvedFilms}`,
  nextCannesCase: afterCannes.correctiveQueue[0]?.title,
}, null, 2));
