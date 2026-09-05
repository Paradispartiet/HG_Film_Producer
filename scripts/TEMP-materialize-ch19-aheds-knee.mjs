import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_aheds_knee_2021";
const BASE_ATLAS = 596;
const BASE_PV = 596;
const BASE_CANDIDATES = 73;
const BASE_USE_EXISTING = 71;
const BASE_CANNES_UNRESOLVED = 19;
const NEXT_ATLAS = BASE_ATLAS + 1;
const NEXT_PV = BASE_PV + 1;
const NEXT_CANDIDATES = BASE_CANDIDATES + 1;
const NEXT_USE_EXISTING = BASE_USE_EXISTING + 1;

const files = {
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

function replaceOnce(p, before, after) {
  const source = read(p);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${p}: required marker missing: ${before.slice(0, 180)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: marker is not unique: ${before.slice(0, 180)}`);
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
if (before.atlas?.actualCount !== BASE_ATLAS || before.atlas?.expectedCount !== BASE_ATLAS) throw new Error(`Expected committed ${BASE_ATLAS}/${BASE_ATLAS} Atlas baseline.`);
if (before.verificationIndex?.literalVerifiedScenarioIds !== BASE_PV) throw new Error(`Expected committed ${BASE_PV} PV baseline.`);
if (before.candidates?.length !== BASE_CANDIDATES) throw new Error(`Expected ${BASE_CANDIDATES} Chapter 19 candidates.`);
if (before.byDecision?.USE_EXISTING?.length !== BASE_USE_EXISTING || before.byDecision?.P2?.length !== 2) throw new Error("Unexpected committed decision census before Ahed's Knee.");
if (before.candidates?.some((item) => item.title === "Ahed's Knee" || item.scenarioId === SCENARIO_ID)) throw new Error("Ahed's Knee is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
if (beforeCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED || beforeCannes.correctiveQueue?.[0]?.title !== "Ahed's Knee") throw new Error(`Expected Ahed's Knee as leader of a ${BASE_CANNES_UNRESOLVED}-film Cannes queue.`);
if (beforeCannes.correctiveQueue?.[0]?.status !== "MISSING_CANDIDATE") throw new Error(`Ahed's Knee must enter from MISSING_CANDIDATE, found ${beforeCannes.correctiveQueue?.[0]?.status}.`);

const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenAhedsKneeExpansion.ts",
  "src/core/chapterNineteenAhedsKneeExpansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenAhedsKnee.ts",
  "src/ui/data/scenarioProductionVerificationAhedsKnee.ts",
  "scripts/TEMP-materialize-ch19-aheds-knee.mjs",
  ".github/workflows/TEMP-ch19-aheds-knee-materialize.yml",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json|yml)$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  if (readFileSync(full, "utf8").includes(SCENARIO_ID)) identityHits.push(rel);
}
if (identityHits.length) throw new Error(`Pre-existing Ahed's Knee scenario identity found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenAnnetteExpansion } from "../../core/chapterNineteenAnnetteExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenAnnetteExpansion } from "../../core/chapterNineteenAnnetteExpansion.js";\nimport { mergeChapterNineteenAhedsKneeExpansion } from "../../core/chapterNineteenAhedsKneeExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenAnnetteScenarios = mergeChapterNineteenAnnetteExpansion(chapterNineteenCompartmentNo6Scenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenAnnetteScenarios);',
  'const chapterNineteenAnnetteScenarios = mergeChapterNineteenAnnetteExpansion(chapterNineteenCompartmentNo6Scenarios);\nconst chapterNineteenAhedsKneeScenarios = mergeChapterNineteenAhedsKneeExpansion(chapterNineteenAnnetteScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenAhedsKneeScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_annette_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_annette_expansion_2026+manual_chapter_nineteen_aheds_knee_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { annetteFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnnette";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { annetteFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnnette";\nimport { ahedsKneeFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAhedsKnee";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [annetteFilmHistoryProfile.scenarioId]: annetteFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [annetteFilmHistoryProfile.scenarioId]: annetteFilmHistoryProfile,\n  [ahedsKneeFilmHistoryProfile.scenarioId]: ahedsKneeFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { annetteProductionCaseVerification } from "./scenarioProductionVerificationAnnette";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { annetteProductionCaseVerification } from "./scenarioProductionVerificationAnnette";\nimport { ahedsKneeProductionCaseVerification } from "./scenarioProductionVerificationAhedsKnee";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  annetteProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  annetteProductionCaseVerification,\n  ahedsKneeProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenAnnetteExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenAnnetteExpansion.ts",\n  "chapterNineteenAhedsKneeExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  "const annetteNeedles = ['\"title\": \"Annette\"', 'title: \"Annette\"', 'scenario_annette_2021'];\n",
  "const annetteNeedles = ['\"title\": \"Annette\"', 'title: \"Annette\"', 'scenario_annette_2021'];\nconst ahedsKneeNeedles = ['\"title\": \"Ahed\\'s Knee\"', 'title: \"Ahed\\'s Knee\"', '\"originalTitle\": \"Ha’berech\"', 'scenario_aheds_knee_2021'];\n");
const ahedsKneeCandidate = `
const ahedsKneeCandidate = \`
  {
    "title": "Ahed's Knee",
    "originalTitle": "Ha’berech",
    "year": 2021,
    "aliases": ["Ha'berech", "Le Genou d'Ahed"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2021 joint Jury Prize source-first case: materialize one new Ahed's Knee/Ha’berech Atlas/PV identity after strict reuse reconciliation; lock the sourced 18-day Arava shoot, schedule-driven risk, camera-as-actor collaboration with Shai Goldman and bounded 2.39:1 exhibition metadata without inventing unsupported camera, lighting, finance, sound, VFX, grade or mastering detail."
  },\`;

`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', ahedsKneeCandidate + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (annetteNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Annette; consolidate the wrapper deliberately before continuing.");\n',
  'if (annetteNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Annette; consolidate the wrapper deliberately before continuing.");\nif (ahedsKneeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Ahed\\'s Knee/Ha’berech; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}`);',
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}`);');

replaceOnce(files.chapter18Completion,
  `invariant(verificationIds.size === ${BASE_PV}, \`Global Production Verification registry must contain exactly ${BASE_PV} unique scenarioIds after Annette Chapter 19 materialization: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${NEXT_PV}, \`Global Production Verification registry must contain exactly ${NEXT_PV} unique scenarioIds after Ahed's Knee Chapter 19 materialization: \${verificationIds.size}\`);`);
replaceOnce(files.chapter18Completion,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${BASE_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${BASE_ATLAS}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${NEXT_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${NEXT_ATLAS}.");`);
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 73, "Chapter 19 current candidate set must contain exactly 73 candidates after Cannes major-prizes reconciliation adds Annette.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 74, "Chapter 19 current candidate set must contain exactly 74 candidates after Cannes major-prizes reconciliation adds Ahed\\'s Knee.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 71 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 71 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 72 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 72 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const annette = chapter19.candidates.find((candidate) => candidate.title === "Annette");\ninvariant(annette?.decision === "USE_EXISTING" && annette?.scenarioId === "scenario_annette_2021" && annette?.matches === 1 && annette?.productionVerified === true, "Annette is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\n',
  'const annette = chapter19.candidates.find((candidate) => candidate.title === "Annette");\ninvariant(annette?.decision === "USE_EXISTING" && annette?.scenarioId === "scenario_annette_2021" && annette?.matches === 1 && annette?.productionVerified === true, "Annette is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst ahedsKnee = chapter19.candidates.find((candidate) => candidate.title === "Ahed\\'s Knee");\ninvariant(ahedsKnee?.decision === "USE_EXISTING" && ahedsKnee?.scenarioId === "scenario_aheds_knee_2021" && ahedsKnee?.matches === 1 && ahedsKnee?.productionVerified === true, "Ahed\\'s Knee is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\n');

replaceCount(files.chapter19Contract, '  "Annette",\n  "Tenet",', '  "Annette",\n  "Ahed\\'s Knee",\n  "Tenet",', 2);
replaceOnce(files.chapter19Contract, '  "Annette",\n  "Nomadland",', '  "Annette",\n  "Ahed\\'s Knee",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 596;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 597;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 596);', 'assert.equal(resolved.atlas.expectedCount, 597);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 596);', 'assert.equal(resolved.atlas.actualCount, 597);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 596);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 597);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy-three candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly seventy-four candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 73);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 74);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 73);', 'assert.equal(resolved.candidates.length, 74);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 15], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 16], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 46);', 'assert.equal(exactP1Priority.length, 47);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 71);', 'assert.equal(exactUseExisting.length, 72);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(annette.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(annette.productionVerified, true);\n\n  const ahedsKnee = resolved.candidates.find((candidate) => candidate.title === "Ahed\\'s Knee");\n  assert.ok(ahedsKnee);\n  assert.equal(ahedsKnee.year, 2021);\n  assert.equal(ahedsKnee.decision, "USE_EXISTING");\n  assert.equal(ahedsKnee.scenarioId, "scenario_aheds_knee_2021");\n  assert.equal(ahedsKnee.matches, 1);\n  assert.equal(ahedsKnee.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
if (after.atlas?.actualCount !== NEXT_ATLAS || after.atlas?.expectedCount !== NEXT_ATLAS) throw new Error(`Ahed's Knee materialization did not produce exact ${NEXT_ATLAS}/${NEXT_ATLAS}.`);
if (after.verificationIndex?.literalVerifiedScenarioIds !== NEXT_PV) throw new Error(`Ahed's Knee materialization did not produce exact ${NEXT_PV} PV IDs.`);
if (after.candidates?.length !== NEXT_CANDIDATES) throw new Error(`Ahed's Knee materialization did not produce ${NEXT_CANDIDATES} candidates.`);
if (after.byDecision?.USE_EXISTING?.length !== NEXT_USE_EXISTING || after.byDecision?.P2?.length !== 2) throw new Error("Post-materialization decision census is not 72 USE_EXISTING / 2 P2.");
const ahedsKnee = after.candidates.find((candidate) => candidate.title === "Ahed's Knee");
if (ahedsKnee?.scenarioId !== SCENARIO_ID || ahedsKnee?.decision !== "USE_EXISTING" || ahedsKnee?.matches !== 1 || ahedsKnee?.productionVerified !== true) throw new Error("Ahed's Knee did not close as exactly one production-verified USE_EXISTING identity.");
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenAhedsKneeExpansion.ts");
if (expansion?.definitions !== 1 || expansion?.appended !== 1 || expansion?.matchedExisting !== 0) throw new Error("Ahed's Knee expansion order must prove one genuinely appended scenario and zero reuse matches.");
if (after.candidates.filter((candidate) => candidate.year === 2021).length !== 16) throw new Error("2021 Chapter 19 candidate bucket did not advance from 15 to 16.");
if (afterCannes.technicalBaseline?.atlasExpected !== NEXT_ATLAS || afterCannes.technicalBaseline?.atlasActual !== NEXT_ATLAS || afterCannes.technicalBaseline?.productionVerificationIds !== NEXT_PV || afterCannes.technicalBaseline?.chapterNineteenCandidates !== NEXT_CANDIDATES) throw new Error("Cannes technical baseline did not advance with Ahed's Knee.");
const ahedsKneeObligations = afterCannes.obligations?.filter((item) => item.title === "Ahed's Knee") ?? [];
if (!ahedsKneeObligations.length || ahedsKneeObligations.some((item) => item.status !== "PRODUCTION_VERIFIED" || item.scenarioId !== SCENARIO_ID || item.productionVerified !== true || item.atlasMatches !== 1)) throw new Error("Cannes Ahed's Knee obligation is not production-verified against one scenario identity.");
if (afterCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED - 1) throw new Error("Cannes corrective queue did not shrink by exactly one film.");
if (afterCannes.correctiveQueue?.some((item) => item.title === "Ahed's Knee")) throw new Error("Ahed's Knee remains in the Cannes corrective queue after materialization.");
if (afterCannes.correctiveQueue?.[0]?.title !== "Nitram" || afterCannes.correctiveQueue?.[0]?.status !== "MISSING_CANDIDATE") throw new Error("Nitram is not the next Cannes queue leader after Ahed's Knee.");
if (afterCannes.summary?.unresolvedFilms !== BASE_CANNES_UNRESOLVED - 1 || afterCannes.summary?.missingCandidateFilms !== BASE_CANNES_UNRESOLVED - 1) throw new Error("Cannes unresolved/missing film counts did not fall to 18.");
const p2 = [...(after.byDecision?.P2 ?? [])].sort();
if (JSON.stringify(p2) !== JSON.stringify(["Days", "The Green Knight"].sort())) throw new Error("Deferred P2 set changed during Ahed's Knee materialization.");

console.log(JSON.stringify({
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  pv: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2,
  ahedsKnee,
  expansion,
  cannesUnresolved: afterCannes.correctiveQueue.length,
  nextCannesLeader: afterCannes.correctiveQueue[0],
}, null, 2));
