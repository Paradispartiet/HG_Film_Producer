import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const SCENARIO_ID = "scenario_kinds_of_kindness_2024";
const BASE_ATLAS = 610;
const BASE_PV = 610;
const BASE_CANDIDATES = 89;
const BASE_USE_EXISTING = 87;
const BASE_CANNES_UNRESOLVED = 3;
const NEXT_ATLAS = 611;
const NEXT_PV = 611;
const NEXT_CANDIDATES = 90;
const NEXT_USE_EXISTING = 88;
const NEXT_CANNES_UNRESOLVED = 2;

const files = {
  expansion: "src/core/chapterNineteenKindsOfKindnessExpansion.ts",
  test: "src/core/chapterNineteenKindsOfKindnessExpansion.test.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenKindsOfKindness.ts",
  pv: "src/ui/data/scenarioProductionVerificationKindsOfKindness.ts",
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Kinds of Kindness.");
invariant(!before.candidates?.some((item) => normalize(item.title) === normalize("Kinds of Kindness") || item.scenarioId === SCENARIO_ID), "Kinds of Kindness is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Kinds of Kindness.`);
invariant(normalize(beforeCannes.correctiveQueue?.[0]?.title) === normalize("Kinds of Kindness") && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Kinds of Kindness must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
const before2024 = beforeCannes.coverageByYear?.find((item) => item.year === 2024);
invariant(before2024?.unresolvedFilms === 1, `Expected one unresolved Cannes 2024 film before materialization, found ${before2024?.unresolvedFilms}.`);

for (const p of [files.expansion, files.test, files.filmStudy, files.pv]) invariant(read(p).includes(SCENARIO_ID), `${p}: new canonical scenario ID is missing.`);
invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Expansion must define exactly one literal canonical scenario ID.");
invariant(read(files.test).includes(SCENARIO_ID), "Expansion test must lock the canonical scenario ID.");
invariant((read(files.filmStudy).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Film Study must contain exactly one literal canonical scenario ID.");
invariant((read(files.pv).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "PV must contain exactly one literal canonical scenario ID.");

const allowedNewPaths = new Set([
  files.expansion, files.test, files.filmStudy, files.pv,
  "scripts/TEMP-materialize-ch19-kinds-of-kindness.mjs",
  ".github/workflows/TEMP-ch19-kinds-of-kindness-materialize.yml",
]);
const probes = ["Kinds of Kindness", "Kinds of Kindness (2024)", SCENARIO_ID, "scenario_kinds_of_kindness_lanthimos_2024"].map(normalize);
const preExistingHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (allowedNewPaths.has(rel)) continue;
  if (!(rel.startsWith("src/core/") || rel.startsWith("src/ui/data/") || rel === "data/film/scenarios/film_scenarios_seed.json")) continue;
  if (!/\.(?:ts|tsx|js|mjs|json)$/.test(rel)) continue;
  const source = normalize(readFileSync(full, "utf8"));
  if (probes.some((probe) => source.includes(probe))) preExistingHits.push(rel);
}
invariant(preExistingHits.length === 0, `Pre-existing Kinds of Kindness identity found outside new source-first files: ${preExistingHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenGrandTourExpansion } from "../../core/chapterNineteenGrandTourExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenGrandTourExpansion } from "../../core/chapterNineteenGrandTourExpansion.js";\nimport { mergeChapterNineteenKindsOfKindnessExpansion } from "../../core/chapterNineteenKindsOfKindnessExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenGrandTourScenarios = mergeChapterNineteenGrandTourExpansion(chapterNineteenEmiliaPerezScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenGrandTourScenarios);',
  'const chapterNineteenGrandTourScenarios = mergeChapterNineteenGrandTourExpansion(chapterNineteenEmiliaPerezScenarios);\nconst chapterNineteenKindsOfKindnessScenarios = mergeChapterNineteenKindsOfKindnessExpansion(chapterNineteenGrandTourScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenKindsOfKindnessScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_perfect_days_expansion_2026+manual_chapter_nineteen_emilia_perez_expansion_2026+manual_chapter_nineteen_grand_tour_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_perfect_days_expansion_2026+manual_chapter_nineteen_emilia_perez_expansion_2026+manual_chapter_nineteen_grand_tour_expansion_2026+manual_chapter_nineteen_kinds_of_kindness_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { grandTourFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGrandTour";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { grandTourFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGrandTour";\nimport { kindsOfKindnessFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKindsOfKindness";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [grandTourFilmHistoryProfile.scenarioId]: grandTourFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [grandTourFilmHistoryProfile.scenarioId]: grandTourFilmHistoryProfile,\n  [kindsOfKindnessFilmHistoryProfile.scenarioId]: kindsOfKindnessFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { grandTourProductionCaseVerification } from "./scenarioProductionVerificationGrandTour";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { grandTourProductionCaseVerification } from "./scenarioProductionVerificationGrandTour";\nimport { kindsOfKindnessProductionCaseVerification } from "./scenarioProductionVerificationKindsOfKindness";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  grandTourProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  grandTourProductionCaseVerification,\n  kindsOfKindnessProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenGrandTourExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenGrandTourExpansion.ts",\n  "chapterNineteenKindsOfKindnessExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const grandTourNeedles = [\'"title": "Grand Tour"\', \'title: "Grand Tour"\', \'Grand Tour (2024)\', \'scenario_grand_tour_2024\', \'scenario_grand_tour_miguel_gomes_2024\'];\n',
  'const grandTourNeedles = [\'"title": "Grand Tour"\', \'title: "Grand Tour"\', \'Grand Tour (2024)\', \'scenario_grand_tour_2024\', \'scenario_grand_tour_miguel_gomes_2024\'];\nconst kindsOfKindnessNeedles = [\'"title": "Kinds of Kindness"\', \'title: "Kinds of Kindness"\', \'Kinds of Kindness (2024)\', \'scenario_kinds_of_kindness_2024\', \'scenario_kinds_of_kindness_lanthimos_2024\'];\n');
const kindsOfKindnessCandidate = `
  {
    "title": "Kinds of Kindness",
    "originalTitle": "Kinds of Kindness",
    "year": 2024,
    "aliases": ["Kinds of Kindness (2024)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2024 Best Actor source-first case: materialize one new Kinds of Kindness identity only after tree-wide reuse checks are negative; preserve the New Orleans location-first triptych production, recurring ensemble, predominantly single-camera ARRICAM ST 35mm anamorphic method, bounded four-camera car-crash exception, VISION3/DOUBLE-X stock allocation, FotoKem 4K scan and Company3/Cinelab post chain, pre-picture piano/choir score development and the explicit Cannes 165/Searchlight 164-minute runtime discrepancy without inventing unsupported finance, exposure, sound-hardware, VFX, safety, underwater-camera, editorial or delivery detail."
  },`;
replaceOnce(files.chapter19Audit, '\nconst baseSource = readFileSync(basePath, "utf8");', `\nconst kindsOfKindnessCandidate = \`${kindsOfKindnessCandidate}\`;\n\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (grandTourNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Grand Tour; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (grandTourNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Grand Tour; consolidate the wrapper deliberately before continuing.");\nif (kindsOfKindnessNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Kinds of Kindness; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}${emiliaPerezCandidate}${grandTourCandidate}`);',
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}${emiliaPerezCandidate}${grandTourCandidate}${kindsOfKindnessCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 610, `Global Production Verification registry must contain exactly 610 unique scenarioIds after Grand Tour Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 611, `Global Production Verification registry must contain exactly 611 unique scenarioIds after Kinds of Kindness Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 610, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 610.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 611, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 611.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 89, "Chapter 19 current candidate set must contain exactly 89 candidates after Cannes major-prizes source-first materialization adds Grand Tour.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 90, "Chapter 19 current candidate set must contain exactly 90 candidates after Cannes major-prizes source-first materialization adds Kinds of Kindness.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 87 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 87 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 88 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 88 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'invariant(grandTour?.decision === "USE_EXISTING" && grandTour?.scenarioId === "scenario_grand_tour_2024" && grandTour?.matches === 1 && grandTour?.productionVerified === true, "Grand Tour is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");',
  'invariant(grandTour?.decision === "USE_EXISTING" && grandTour?.scenarioId === "scenario_grand_tour_2024" && grandTour?.matches === 1 && grandTour?.productionVerified === true, "Grand Tour is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst kindsOfKindness = chapter19.candidates.find((candidate) => candidate.title === "Kinds of Kindness");\ninvariant(kindsOfKindness?.decision === "USE_EXISTING" && kindsOfKindness?.scenarioId === "scenario_kinds_of_kindness_2024" && kindsOfKindness?.matches === 1 && kindsOfKindness?.productionVerified === true, "Kinds of Kindness is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");');

replaceCount(files.chapter19Contract, '  "Grand Tour",\n', '  "Grand Tour",\n  "Kinds of Kindness",\n', 3);
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 610;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 611;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 610);', 'assert.equal(resolved.atlas.expectedCount, 611);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 610);', 'assert.equal(resolved.atlas.actualCount, 611);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 610);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 611);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-nine candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly ninety candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 89);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 90);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 89);', 'assert.equal(resolved.candidates.length, 90);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 14], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 15], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 62);', 'assert.equal(exactP1Priority.length, 63);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 87);', 'assert.equal(exactUseExisting.length, 88);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(grandTour.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(grandTour.productionVerified, true);\n\n  const kindsOfKindness = resolved.candidates.find((candidate) => candidate.title === "Kinds of Kindness");\n  assert.ok(kindsOfKindness);\n  assert.equal(kindsOfKindness.year, 2024);\n  assert.equal(kindsOfKindness.decision, "USE_EXISTING");\n  assert.equal(kindsOfKindness.scenarioId, "scenario_kinds_of_kindness_2024");\n  assert.equal(kindsOfKindness.matches, 1);\n  assert.equal(kindsOfKindness.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [files.cannesAudit, `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} PV IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Unexpected decision census after Kinds of Kindness materialization.");
const candidate = after.candidates.find((item) => normalize(item.title) === normalize("Kinds of Kindness"));
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, "Kinds of Kindness did not close as one production-verified USE_EXISTING candidate.");
invariant(afterCannes.summary?.unresolvedFilms === NEXT_CANNES_UNRESOLVED && afterCannes.correctiveQueue?.length === NEXT_CANNES_UNRESOLVED, `Expected ${NEXT_CANNES_UNRESOLVED} unresolved Cannes films after materialization.`);
invariant(!afterCannes.correctiveQueue?.some((item) => normalize(item.title) === normalize("Kinds of Kindness")), "Kinds of Kindness remains in the Cannes corrective queue after materialization.");
const after2024 = afterCannes.coverageByYear?.find((item) => item.year === 2024);
invariant(after2024?.unresolvedFilms === 0, `Expected zero unresolved Cannes 2024 films after materialization, found ${after2024?.unresolvedFilms}.`);
const awarded = afterCannes.awardedFilms?.find((item) => normalize(item.title) === normalize("Kinds of Kindness"));
invariant(awarded?.scenarioId === SCENARIO_ID && awarded?.productionVerified === true && awarded?.status === "PRODUCTION_VERIFIED", "Cannes audit did not resolve Kinds of Kindness to the new canonical scenario.");
invariant(normalize(afterCannes.correctiveQueue?.[0]?.title) === normalize("Young Mothers"), `Expected Young Mothers to become the next Cannes case, found ${afterCannes.correctiveQueue?.[0]?.title}.`);

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
