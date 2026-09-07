import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const SCENARIO_ID = "scenario_the_little_sister_2025";
const BASE_ATLAS = 612;
const BASE_PV = 612;
const BASE_CANDIDATES = 91;
const BASE_USE_EXISTING = 89;
const BASE_CANNES_UNRESOLVED = 1;
const NEXT_ATLAS = 613;
const NEXT_PV = 613;
const NEXT_CANDIDATES = 92;
const NEXT_USE_EXISTING = 90;
const NEXT_CANNES_UNRESOLVED = 0;

const files = {
  expansion: "src/core/chapterNineteenTheLittleSisterExpansion.ts",
  test: "src/core/chapterNineteenTheLittleSisterExpansion.test.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenTheLittleSister.ts",
  pv: "src/ui/data/scenarioProductionVerificationTheLittleSister.ts",
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before The Little Sister.");
invariant(!before.candidates?.some((item) => normalize(item.title) === normalize("The Little Sister") || normalize(item.originalTitle) === normalize("La Petite Dernière") || item.scenarioId === SCENARIO_ID), "The Little Sister is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, "Expected exactly one unresolved Cannes film before The Little Sister.");
invariant(normalize(beforeCannes.correctiveQueue?.[0]?.title) === normalize("The Little Sister") && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "The Little Sister must be the sole unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.summary?.cannesMajorPrizesCompletionProven === false && beforeCannes.summary?.filmHistoricalSelectionCompletionProven === false, "Unexpected Cannes/film-history completion state before final corrective case.");
const before2025 = beforeCannes.coverageByYear?.find((item) => item.year === 2025);
invariant(before2025?.unresolvedFilms === 1, `Expected one unresolved Cannes 2025 film before materialization, found ${before2025?.unresolvedFilms}.`);

for (const p of [files.expansion, files.test, files.filmStudy, files.pv]) invariant(read(p).includes(SCENARIO_ID), `${p}: new canonical scenario ID is missing.`);
invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Expansion must define exactly one literal canonical scenario ID.");
invariant((read(files.filmStudy).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Film Study must contain exactly one literal canonical scenario ID.");
invariant((read(files.pv).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "PV must contain exactly one literal canonical scenario ID.");

const allowedNewPaths = new Set([
  files.expansion, files.test, files.filmStudy, files.pv,
  "scripts/TEMP-materialize-ch19-the-little-sister.mjs",
  ".github/workflows/TEMP-ch19-the-little-sister-materialize.yml",
]);
const probes = ["The Little Sister", "La Petite Dernière", "La Petite Derniere", "The Little Sister (2025)", SCENARIO_ID, "scenario_la_petite_derniere_2025", "scenario_little_sister_2025"].map(normalize);
const preExistingHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (allowedNewPaths.has(rel)) continue;
  if (!(rel.startsWith("src/core/") || rel.startsWith("src/ui/data/") || rel === "data/film/scenarios/film_scenarios_seed.json")) continue;
  if (!/\.(?:ts|tsx|js|mjs|json)$/.test(rel)) continue;
  const source = normalize(readFileSync(full, "utf8"));
  if (probes.some((probe) => source.includes(probe))) preExistingHits.push(rel);
}
invariant(preExistingHits.length === 0, `Pre-existing The Little Sister identity found outside new source-first files: ${preExistingHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenYoungMothersExpansion } from "../../core/chapterNineteenYoungMothersExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenYoungMothersExpansion } from "../../core/chapterNineteenYoungMothersExpansion.js";\nimport { mergeChapterNineteenTheLittleSisterExpansion } from "../../core/chapterNineteenTheLittleSisterExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenYoungMothersScenarios = mergeChapterNineteenYoungMothersExpansion(chapterNineteenKindsOfKindnessScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenYoungMothersScenarios);',
  'const chapterNineteenYoungMothersScenarios = mergeChapterNineteenYoungMothersExpansion(chapterNineteenKindsOfKindnessScenarios);\nconst chapterNineteenTheLittleSisterScenarios = mergeChapterNineteenTheLittleSisterExpansion(chapterNineteenYoungMothersScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenTheLittleSisterScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_young_mothers_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_young_mothers_expansion_2026+manual_chapter_nineteen_the_little_sister_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { youngMothersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenYoungMothers";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { youngMothersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenYoungMothers";\nimport { theLittleSisterFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheLittleSister";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [youngMothersFilmHistoryProfile.scenarioId]: youngMothersFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [youngMothersFilmHistoryProfile.scenarioId]: youngMothersFilmHistoryProfile,\n  [theLittleSisterFilmHistoryProfile.scenarioId]: theLittleSisterFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { youngMothersProductionCaseVerification } from "./scenarioProductionVerificationYoungMothers";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { youngMothersProductionCaseVerification } from "./scenarioProductionVerificationYoungMothers";\nimport { theLittleSisterProductionCaseVerification } from "./scenarioProductionVerificationTheLittleSister";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  youngMothersProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  youngMothersProductionCaseVerification,\n  theLittleSisterProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenYoungMothersExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenYoungMothersExpansion.ts",\n  "chapterNineteenTheLittleSisterExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const youngMothersNeedles = [\'"title": "Young Mothers"\', \'title: "Young Mothers"\', \'"originalTitle": "Jeunes Mères"\', \'Jeunes Meres\', \'Young Mothers (2025)\', \'scenario_young_mothers_2025\', \'scenario_jeunes_meres_2025\'];\n',
  'const youngMothersNeedles = [\'"title": "Young Mothers"\', \'title: "Young Mothers"\', \'"originalTitle": "Jeunes Mères"\', \'Jeunes Meres\', \'Young Mothers (2025)\', \'scenario_young_mothers_2025\', \'scenario_jeunes_meres_2025\'];\nconst theLittleSisterNeedles = [\'"title": "The Little Sister"\', \'title: "The Little Sister"\', \'"originalTitle": "La Petite Dernière"\', \'La Petite Derniere\', \'The Little Sister (2025)\', \'scenario_the_little_sister_2025\', \'scenario_la_petite_derniere_2025\'];\n');
const theLittleSisterCandidate = `
  {
    "title": "The Little Sister",
    "originalTitle": "La Petite Dernière",
    "year": 2025,
    "aliases": ["La Petite Derniere", "The Little Sister (2025)", "La Petite Dernière (2025)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2025 Best Actress source-first case: materialize one new The Little Sister / La Petite Dernière identity only after tree-wide reuse checks are negative; preserve the more-than-one-year professional/non-professional casting and field-research path, two-season winter/spring structure, three-ALEXA-Mini long-take multicamera handheld method, natural-light/max-prelight strategy, early parallel editorial start, winter-still LUT and Germany-grade chain, and explicit Cannes 106/Cannes-hosted press-kit 107-minute runtime discrepancy without inventing unsupported budget, lens/codec/data, sound-hardware, VFX, safety or mastering detail."
  },`;
replaceOnce(files.chapter19Audit, '\nconst baseSource = readFileSync(basePath, "utf8");', `\nconst theLittleSisterCandidate = \`${theLittleSisterCandidate}\`;\n\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (youngMothersNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Young Mothers/Jeunes Mères; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))',
  'if (youngMothersNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Young Mothers/Jeunes Mères; consolidate the wrapper deliberately before continuing.");\nif (theLittleSisterNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Little Sister/La Petite Dernière; consolidate the wrapper deliberately before continuing.");\nif (!baseSource.includes(insertionMarker))');
replaceOnce(files.chapter19Audit,
  '${grandTourCandidate}${kindsOfKindnessCandidate}${youngMothersCandidate}`);',
  '${grandTourCandidate}${kindsOfKindnessCandidate}${youngMothersCandidate}${theLittleSisterCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 612, `Global Production Verification registry must contain exactly 612 unique scenarioIds after Young Mothers Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 613, `Global Production Verification registry must contain exactly 613 unique scenarioIds after The Little Sister Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 612, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 612.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 613, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 613.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 91, "Chapter 19 current candidate set must contain exactly 91 candidates after Cannes major-prizes source-first materialization adds Young Mothers.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 92, "Chapter 19 current candidate set must contain exactly 92 candidates after Cannes major-prizes source-first materialization adds The Little Sister.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 89 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 89 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 90 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 90 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const youngMothers = chapter19.candidates.find((candidate) => candidate.title === "Young Mothers");\ninvariant(youngMothers?.decision === "USE_EXISTING" && youngMothers?.scenarioId === "scenario_young_mothers_2025" && youngMothers?.matches === 1 && youngMothers?.productionVerified === true, "Young Mothers is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const youngMothers = chapter19.candidates.find((candidate) => candidate.title === "Young Mothers");\ninvariant(youngMothers?.decision === "USE_EXISTING" && youngMothers?.scenarioId === "scenario_young_mothers_2025" && youngMothers?.matches === 1 && youngMothers?.productionVerified === true, "Young Mothers is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst theLittleSister = chapter19.candidates.find((candidate) => candidate.title === "The Little Sister");\ninvariant(theLittleSister?.decision === "USE_EXISTING" && theLittleSister?.scenarioId === "scenario_the_little_sister_2025" && theLittleSister?.matches === 1 && theLittleSister?.productionVerified === true, "The Little Sister is not closed as the final production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract, '  "Young Mothers",\n', '  "Young Mothers",\n  "The Little Sister",\n', 3);
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 612;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 613;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 612);', 'assert.equal(resolved.atlas.expectedCount, 613);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 612);', 'assert.equal(resolved.atlas.actualCount, 613);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 612);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 613);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly ninety-one candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly ninety-two candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 91);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 92);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 91);', 'assert.equal(resolved.candidates.length, 92);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 15], [2025, 12]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 16], [2024, 15], [2025, 13]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 64);', 'assert.equal(exactP1Priority.length, 65);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 89);', 'assert.equal(exactUseExisting.length, 90);');
replaceOnce(files.chapter19Contract,
  '  const youngMothers = resolved.candidates.find((candidate) => candidate.title === "Young Mothers");\n  assert.ok(youngMothers);\n  assert.equal(youngMothers.year, 2025);\n  assert.equal(youngMothers.decision, "USE_EXISTING");\n  assert.equal(youngMothers.scenarioId, "scenario_young_mothers_2025");\n  assert.equal(youngMothers.matches, 1);\n  assert.equal(youngMothers.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  const youngMothers = resolved.candidates.find((candidate) => candidate.title === "Young Mothers");\n  assert.ok(youngMothers);\n  assert.equal(youngMothers.year, 2025);\n  assert.equal(youngMothers.decision, "USE_EXISTING");\n  assert.equal(youngMothers.scenarioId, "scenario_young_mothers_2025");\n  assert.equal(youngMothers.matches, 1);\n  assert.equal(youngMothers.productionVerified, true);\n\n  const theLittleSister = resolved.candidates.find((candidate) => candidate.title === "The Little Sister");\n  assert.ok(theLittleSister);\n  assert.equal(theLittleSister.year, 2025);\n  assert.equal(theLittleSister.decision, "USE_EXISTING");\n  assert.equal(theLittleSister.scenarioId, "scenario_the_little_sister_2025");\n  assert.equal(theLittleSister.matches, 1);\n  assert.equal(theLittleSister.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [files.cannesAudit, `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} PV IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Unexpected decision census after The Little Sister materialization.");
const candidate = after.candidates.find((item) => normalize(item.title) === normalize("The Little Sister"));
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, "The Little Sister did not close as one production-verified USE_EXISTING candidate.");
invariant(afterCannes.status === "complete", `Expected complete Cannes audit after final case, found ${afterCannes.status}.`);
invariant(afterCannes.summary?.unresolvedFilms === NEXT_CANNES_UNRESOLVED && afterCannes.correctiveQueue?.length === 0, "Cannes corrective queue did not close to zero.");
invariant(afterCannes.summary?.missingCandidateFilms === 0, "Cannes audit still contains a missing candidate after final materialization.");
invariant(afterCannes.summary?.cannesMajorPrizesCompletionProven === true, "Cannes major-prizes completion was not proven after final case.");
invariant(afterCannes.summary?.filmHistoricalSelectionCompletionProven === false, "Cannes closure must not falsely prove overall Chapter 19 film-historical selection completion.");
const after2025 = afterCannes.coverageByYear?.find((item) => item.year === 2025);
invariant(after2025?.unresolvedFilms === 0 && after2025?.productionVerifiedFilms === after2025?.uniqueAwardedFilms, "Cannes 2025 did not close to full unique-film production verification.");
const awarded = afterCannes.awardedFilms?.find((item) => normalize(item.title) === normalize("The Little Sister"));
invariant(awarded?.scenarioId === SCENARIO_ID && awarded?.productionVerified === true && awarded?.status === "PRODUCTION_VERIFIED", "Cannes audit did not resolve The Little Sister to the new canonical scenario.");

console.log(JSON.stringify({
  scenarioId: SCENARIO_ID,
  atlas: `${BASE_ATLAS}->${after.atlas.actualCount}`,
  productionVerificationIds: `${BASE_PV}->${after.verificationIndex.literalVerifiedScenarioIds}`,
  candidates: `${BASE_CANDIDATES}->${after.candidates.length}`,
  useExisting: `${BASE_USE_EXISTING}->${after.byDecision.USE_EXISTING.length}`,
  p2: after.byDecision.P2.length,
  cannesUnresolved: `${BASE_CANNES_UNRESOLVED}->${afterCannes.summary.unresolvedFilms}`,
  cannes2025Unresolved: `${before2025.unresolvedFilms}->${after2025.unresolvedFilms}`,
  cannesMajorPrizesCompletionProven: afterCannes.summary.cannesMajorPrizesCompletionProven,
  nextPhaseAfterClosure: afterCannes.nextPhaseAfterClosure,
}, null, 2));
