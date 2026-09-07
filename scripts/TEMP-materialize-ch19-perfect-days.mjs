import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_perfect_days_2023";
const BASE_ATLAS = 607;
const BASE_PV = 607;
const BASE_CANDIDATES = 86;
const BASE_USE_EXISTING = 84;
const BASE_CANNES_UNRESOLVED = 6;
const NEXT_ATLAS = 608;
const NEXT_PV = 608;
const NEXT_CANDIDATES = 87;
const NEXT_USE_EXISTING = 85;
const NEXT_CANNES_UNRESOLVED = 5;

const files = {
  expansion: "src/core/chapterNineteenPerfectDaysExpansion.ts",
  test: "src/core/chapterNineteenPerfectDaysExpansion.test.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenPerfectDays.ts",
  pv: "src/ui/data/scenarioProductionVerificationPerfectDays.ts",
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Perfect Days.");
invariant(!before.candidates?.some((item) => item.title === "Perfect Days" || item.scenarioId === SCENARIO_ID), "Perfect Days is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Perfect Days.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Perfect Days" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Perfect Days must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Emilia Pérez", "Emilia Pérez must be second in the Cannes queue before materialization.");
const before2023 = beforeCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(before2023?.unresolvedFilms === 1, `Expected one unresolved Cannes 2023 film before materialization, found ${before2023?.unresolvedFilms}.`);

for (const p of [files.expansion, files.test, files.filmStudy, files.pv]) invariant(read(p).includes(SCENARIO_ID), `${p}: new canonical scenario ID is missing.`);
invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Expansion must define exactly one literal canonical scenario ID.");
invariant(read(files.test).includes(SCENARIO_ID), "Expansion test must lock the canonical scenario ID.");
invariant((read(files.filmStudy).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Film Study must contain exactly one literal canonical scenario ID.");
invariant((read(files.pv).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "PV must contain exactly one literal canonical scenario ID.");

const allowedNewPaths = new Set([
  files.expansion,
  files.test,
  files.filmStudy,
  files.pv,
  "scripts/TEMP-diagnose-ch19-perfect-days.mjs",
  "scripts/TEMP-materialize-ch19-perfect-days.mjs",
  ".github/workflows/TEMP-ch19-perfect-days-diagnostic.yml",
]);
const probes = ["Perfect Days", SCENARIO_ID, "scenario_perfect_days_wenders_2023"].map(normalize);
const preExistingHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (allowedNewPaths.has(rel)) continue;
  if (!(rel.startsWith("src/core/") || rel.startsWith("src/ui/data/") || rel === "data/film/scenarios/film_scenarios_seed.json")) continue;
  if (!/\.(?:ts|tsx|js|mjs|json)$/.test(rel)) continue;
  const source = normalize(readFileSync(full, "utf8"));
  if (probes.some((probe) => source.includes(probe))) preExistingHits.push(rel);
}
invariant(preExistingHits.length === 0, `Pre-existing Perfect Days identity found outside new source-first files: ${preExistingHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenAboutDryGrassesExpansion } from "../../core/chapterNineteenAboutDryGrassesExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenAboutDryGrassesExpansion } from "../../core/chapterNineteenAboutDryGrassesExpansion.js";\nimport { mergeChapterNineteenPerfectDaysExpansion } from "../../core/chapterNineteenPerfectDaysExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenAboutDryGrassesScenarios = mergeChapterNineteenAboutDryGrassesExpansion(chapterNineteenFallenLeavesScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenAboutDryGrassesScenarios);',
  'const chapterNineteenAboutDryGrassesScenarios = mergeChapterNineteenAboutDryGrassesExpansion(chapterNineteenFallenLeavesScenarios);\nconst chapterNineteenPerfectDaysScenarios = mergeChapterNineteenPerfectDaysExpansion(chapterNineteenAboutDryGrassesScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenPerfectDaysScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_about_dry_grasses_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_about_dry_grasses_expansion_2026+manual_chapter_nineteen_perfect_days_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { aboutDryGrassesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAboutDryGrasses";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { aboutDryGrassesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAboutDryGrasses";\nimport { perfectDaysFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenPerfectDays";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [aboutDryGrassesFilmHistoryProfile.scenarioId]: aboutDryGrassesFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [aboutDryGrassesFilmHistoryProfile.scenarioId]: aboutDryGrassesFilmHistoryProfile,\n  [perfectDaysFilmHistoryProfile.scenarioId]: perfectDaysFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { aboutDryGrassesProductionCaseVerification } from "./scenarioProductionVerificationAboutDryGrasses";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { aboutDryGrassesProductionCaseVerification } from "./scenarioProductionVerificationAboutDryGrasses";\nimport { perfectDaysProductionCaseVerification } from "./scenarioProductionVerificationPerfectDays";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  aboutDryGrassesProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  aboutDryGrassesProductionCaseVerification,\n  perfectDaysProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenAboutDryGrassesExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenAboutDryGrassesExpansion.ts",\n  "chapterNineteenPerfectDaysExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const aboutDryGrassesNeedles = [\'"title": "About Dry Grasses"\', \'title: "About Dry Grasses"\', \'"originalTitle": "Kuru Otlar Üstüne"\', \'Kuru Otlar Ustune\', \'scenario_about_dry_grasses_2023\'];\n',
  'const aboutDryGrassesNeedles = [\'"title": "About Dry Grasses"\', \'title: "About Dry Grasses"\', \'"originalTitle": "Kuru Otlar Üstüne"\', \'Kuru Otlar Ustune\', \'scenario_about_dry_grasses_2023\'];\nconst perfectDaysNeedles = [\'"title": "Perfect Days"\', \'title: "Perfect Days"\', \'scenario_perfect_days_2023\', \'scenario_perfect_days_wenders_2023\'];\n');
const perfectCandidate = `
const perfectDaysCandidate = \`
  {
    "title": "Perfect Days",
    "originalTitle": "Perfect Days",
    "year": 2023,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Actor source-first case: materialize one new Perfect Days identity only after seed/tree-wide reuse checks are negative; preserve the October 2022 sixteen-day Tokyo shoot separately from 2023 production metadata; lock the sourced shoulder-camera documentary-like fiction method, Sony VENICE/Canon K35 family evidence, 1.33 DCP/5.1 catalogue record and explicit 123/124/125-minute plus 1.33/1.85 provenance discrepancies without inventing unsupported camera-generation, finance, sound, VFX or mastering detail."
  },\`;
`;
replaceOnce(files.chapter19Audit, '\nconst baseSource = readFileSync(basePath, "utf8");', `${perfectCandidate}\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (aboutDryGrassesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains About Dry Grasses/Kuru Otlar Üstüne; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (aboutDryGrassesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains About Dry Grasses/Kuru Otlar Üstüne; consolidate the wrapper deliberately before continuing.");\nif (perfectDaysNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Perfect Days; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}`);',
  '${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}`);');
replaceOnce(files.chapter19Audit,
  ".replace('auditDate: \"2026-08-28\"', 'auditDate: \"2026-09-06\"')",
  ".replace('auditDate: \"2026-08-28\"', 'auditDate: \"2026-09-07\"')");

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 607, `Global Production Verification registry must contain exactly 607 unique scenarioIds after About Dry Grasses Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 608, `Global Production Verification registry must contain exactly 608 unique scenarioIds after Perfect Days Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 607, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 607.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 608, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 608.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 86, "Chapter 19 current candidate set must contain exactly 86 candidates after Cannes major-prizes source-first materialization adds About Dry Grasses.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 87, "Chapter 19 current candidate set must contain exactly 87 candidates after Cannes major-prizes source-first materialization adds Perfect Days.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 84 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 84 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 85 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 85 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'invariant(aboutDryGrasses?.decision === "USE_EXISTING" && aboutDryGrasses?.scenarioId === "scenario_about_dry_grasses_2023" && aboutDryGrasses?.matches === 1 && aboutDryGrasses?.productionVerified === true, "About Dry Grasses is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");',
  'invariant(aboutDryGrasses?.decision === "USE_EXISTING" && aboutDryGrasses?.scenarioId === "scenario_about_dry_grasses_2023" && aboutDryGrasses?.matches === 1 && aboutDryGrasses?.productionVerified === true, "About Dry Grasses is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst perfectDays = chapter19.candidates.find((candidate) => candidate.title === "Perfect Days");\ninvariant(perfectDays?.decision === "USE_EXISTING" && perfectDays?.scenarioId === "scenario_perfect_days_2023" && perfectDays?.matches === 1 && perfectDays?.productionVerified === true, "Perfect Days is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");');

replaceCount(files.chapter19Contract, '  "About Dry Grasses",\n', '  "About Dry Grasses",\n  "Perfect Days",\n', 3);
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 607;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 608;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 607);', 'assert.equal(resolved.atlas.expectedCount, 608);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 607);', 'assert.equal(resolved.atlas.actualCount, 608);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 607);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 608);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-six candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-seven candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 86);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 87);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 86);', 'assert.equal(resolved.candidates.length, 87);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 15], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 59);', 'assert.equal(exactP1Priority.length, 60);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 84);', 'assert.equal(exactUseExisting.length, 85);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(aboutDryGrasses.productionVerified, true);',
  '  assert.equal(aboutDryGrasses.productionVerified, true);\n\n  const perfectDays = resolved.candidates.find((candidate) => candidate.title === "Perfect Days");\n  assert.ok(perfectDays);\n  assert.equal(perfectDays.year, 2023);\n  assert.equal(perfectDays.decision, "USE_EXISTING");\n  assert.equal(perfectDays.scenarioId, "scenario_perfect_days_2023");\n  assert.equal(perfectDays.matches, 1);\n  assert.equal(perfectDays.productionVerified, true);');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [files.cannesAudit, `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} PV IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, `Expected ${NEXT_USE_EXISTING} USE_EXISTING / 2 P2 after materialization.`);
const perfect = after.candidates?.find((item) => item.title === "Perfect Days");
invariant(perfect?.scenarioId === SCENARIO_ID && perfect?.matches === 1 && perfect?.productionVerified === true && perfect?.decision === "USE_EXISTING", "Perfect Days did not resolve to one production-verified USE_EXISTING identity.");
invariant(afterCannes.summary?.unresolvedFilms === NEXT_CANNES_UNRESOLVED && afterCannes.correctiveQueue?.length === NEXT_CANNES_UNRESOLVED, `Expected Cannes unresolved queue to fall to ${NEXT_CANNES_UNRESOLVED}.`);
invariant(!afterCannes.correctiveQueue?.some((item) => item.title === "Perfect Days"), "Perfect Days remains in the Cannes corrective queue after materialization.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "Emilia Pérez", `Expected Emilia Pérez as next Cannes queue leader, got ${afterCannes.correctiveQueue?.[0]?.title}.`);
const after2023 = afterCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(after2023?.unresolvedFilms === 0, `Expected Cannes 2023 unresolved count to close at zero, found ${after2023?.unresolvedFilms}.`);

console.log(JSON.stringify({
  scenarioId: SCENARIO_ID,
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  productionVerificationIds: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2.length,
  cannesUnresolved: afterCannes.summary.unresolvedFilms,
  cannes2023Unresolved: after2023.unresolvedFilms,
  nextCannesQueueLeader: afterCannes.correctiveQueue[0]?.title ?? null,
}, null, 2));
