import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_nitram_2021";
const BASE_ATLAS = 597;
const BASE_PV = 597;
const BASE_CANDIDATES = 74;
const BASE_USE_EXISTING = 72;
const BASE_CANNES_UNRESOLVED = 18;
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
if (before.byDecision?.USE_EXISTING?.length !== BASE_USE_EXISTING || before.byDecision?.P2?.length !== 2) throw new Error("Unexpected committed decision census before Nitram.");
if (before.candidates?.some((item) => item.title === "Nitram" || item.scenarioId === SCENARIO_ID)) throw new Error("Nitram is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
if (beforeCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED || beforeCannes.correctiveQueue?.[0]?.title !== "Nitram") throw new Error(`Expected Nitram as leader of an ${BASE_CANNES_UNRESOLVED}-film Cannes queue.`);
if (beforeCannes.correctiveQueue?.[0]?.status !== "MISSING_CANDIDATE") throw new Error(`Nitram must enter from MISSING_CANDIDATE, found ${beforeCannes.correctiveQueue?.[0]?.status}.`);
if (beforeCannes.correctiveQueue?.[1]?.title !== "Close" || beforeCannes.correctiveQueue?.[1]?.status !== "MISSING_CANDIDATE") throw new Error("Close must be the second unresolved Cannes film before Nitram materialization.");

const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenNitramExpansion.ts",
  "src/core/chapterNineteenNitramExpansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenNitram.ts",
  "src/ui/data/scenarioProductionVerificationNitram.ts",
  "scripts/TEMP-materialize-ch19-nitram.mjs",
  ".github/workflows/TEMP-ch19-nitram-materialize.yml",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json|yml)$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  if (readFileSync(full, "utf8").includes(SCENARIO_ID)) identityHits.push(rel);
}
if (identityHits.length) throw new Error(`Pre-existing Nitram scenario identity found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenAhedsKneeExpansion } from "../../core/chapterNineteenAhedsKneeExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenAhedsKneeExpansion } from "../../core/chapterNineteenAhedsKneeExpansion.js";\nimport { mergeChapterNineteenNitramExpansion } from "../../core/chapterNineteenNitramExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenAhedsKneeScenarios = mergeChapterNineteenAhedsKneeExpansion(chapterNineteenAnnetteScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenAhedsKneeScenarios);',
  'const chapterNineteenAhedsKneeScenarios = mergeChapterNineteenAhedsKneeExpansion(chapterNineteenAnnetteScenarios);\nconst chapterNineteenNitramScenarios = mergeChapterNineteenNitramExpansion(chapterNineteenAhedsKneeScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenNitramScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_aheds_knee_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_aheds_knee_expansion_2026+manual_chapter_nineteen_nitram_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { ahedsKneeFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAhedsKnee";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { ahedsKneeFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAhedsKnee";\nimport { nitramFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenNitram";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [ahedsKneeFilmHistoryProfile.scenarioId]: ahedsKneeFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [ahedsKneeFilmHistoryProfile.scenarioId]: ahedsKneeFilmHistoryProfile,\n  [nitramFilmHistoryProfile.scenarioId]: nitramFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { ahedsKneeProductionCaseVerification } from "./scenarioProductionVerificationAhedsKnee";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { ahedsKneeProductionCaseVerification } from "./scenarioProductionVerificationAhedsKnee";\nimport { nitramProductionCaseVerification } from "./scenarioProductionVerificationNitram";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  ahedsKneeProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  ahedsKneeProductionCaseVerification,\n  nitramProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenAhedsKneeExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenAhedsKneeExpansion.ts",\n  "chapterNineteenNitramExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  "const ahedsKneeNeedles = ['\\\"title\\\": \\\"Ahed\\'s Knee\\\"', 'title: \\\"Ahed\\'s Knee\\\"', '\\\"originalTitle\\\": \\\"Ha’berech\\\"', 'scenario_aheds_knee_2021'];\n",
  "const ahedsKneeNeedles = ['\\\"title\\\": \\\"Ahed\\'s Knee\\\"', 'title: \\\"Ahed\\'s Knee\\\"', '\\\"originalTitle\\\": \\\"Ha’berech\\\"', 'scenario_aheds_knee_2021'];\nconst nitramNeedles = ['\\\"title\\\": \\\"Nitram\\\"', 'title: \\\"Nitram\\\"', 'scenario_nitram_2021'];\n");
const nitramCandidateBlock =
  'const nitramCandidate = `\n' +
  '  {\n' +
  '    "title": "Nitram",\n' +
  '    "originalTitle": "Nitram",\n' +
  '    "year": 2021,\n' +
  '    "aliases": [],\n' +
  '    "role": "major_comparison",\n' +
  '    "decisionIfMissing": "P1",\n' +
  '    "chapterFunction": "Cannes 2021 Best Actor source-first case: materialize one new Nitram Atlas/PV identity after strict reuse reconciliation; preserve productionYear 2020 separately from film/award year 2021; lock the sourced 24-day Geelong lockdown production, Alexa Mini S35/Panavision Ultra Speeds workflow and explicit 1.55:1-versus-1.43:1 source discrepancy without inventing unsupported finance, camera, sound, VFX or mastering detail."\n' +
  '  },`;\n\n';
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', nitramCandidateBlock + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (ahedsKneeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Ahed\'s Knee/Ha’berech; consolidate the wrapper deliberately before continuing.");\n',
  'if (ahedsKneeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Ahed\'s Knee/Ha’berech; consolidate the wrapper deliberately before continuing.");\nif (nitramNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Nitram; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}`);',
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}${nitramCandidate}`);');

replaceOnce(files.chapter18Completion,
  `invariant(verificationIds.size === ${BASE_PV}, \`Global Production Verification registry must contain exactly ${BASE_PV} unique scenarioIds after Ahed's Knee Chapter 19 materialization: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${NEXT_PV}, \`Global Production Verification registry must contain exactly ${NEXT_PV} unique scenarioIds after Nitram Chapter 19 materialization: \${verificationIds.size}\`);`);
replaceOnce(files.chapter18Completion,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${BASE_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${BASE_ATLAS}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${NEXT_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${NEXT_ATLAS}.");`);
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 74, "Chapter 19 current candidate set must contain exactly 74 candidates after Cannes major-prizes reconciliation adds Ahed\'s Knee.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 75, "Chapter 19 current candidate set must contain exactly 75 candidates after Cannes major-prizes reconciliation adds Nitram.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 72 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 72 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 73 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 73 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const ahedsKnee = chapter19.candidates.find((candidate) => candidate.title === "Ahed\'s Knee");\ninvariant(ahedsKnee?.decision === "USE_EXISTING" && ahedsKnee?.scenarioId === "scenario_aheds_knee_2021" && ahedsKnee?.matches === 1 && ahedsKnee?.productionVerified === true, "Ahed\'s Knee is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const ahedsKnee = chapter19.candidates.find((candidate) => candidate.title === "Ahed\'s Knee");\ninvariant(ahedsKnee?.decision === "USE_EXISTING" && ahedsKnee?.scenarioId === "scenario_aheds_knee_2021" && ahedsKnee?.matches === 1 && ahedsKnee?.productionVerified === true, "Ahed\'s Knee is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst nitram = chapter19.candidates.find((candidate) => candidate.title === "Nitram");\ninvariant(nitram?.decision === "USE_EXISTING" && nitram?.scenarioId === "scenario_nitram_2021" && nitram?.matches === 1 && nitram?.productionVerified === true, "Nitram is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract, '  "Ahed\'s Knee",\n  "Tenet",', '  "Ahed\'s Knee",\n  "Nitram",\n  "Tenet",', 2);
replaceOnce(files.chapter19Contract, '  "Ahed\'s Knee",\n  "Nomadland",', '  "Ahed\'s Knee",\n  "Nitram",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 597;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 598;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 597);', 'assert.equal(resolved.atlas.expectedCount, 598);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 597);', 'assert.equal(resolved.atlas.actualCount, 598);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 597);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 598);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy-four candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly seventy-five candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 74);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 75);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 74);', 'assert.equal(resolved.candidates.length, 75);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 16], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 47);', 'assert.equal(exactP1Priority.length, 48);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 72);', 'assert.equal(exactUseExisting.length, 73);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(ahedsKnee.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(ahedsKnee.productionVerified, true);\n\n  const nitram = resolved.candidates.find((candidate) => candidate.title === "Nitram");\n  assert.ok(nitram);\n  assert.equal(nitram.year, 2021);\n  assert.equal(nitram.decision, "USE_EXISTING");\n  assert.equal(nitram.scenarioId, "scenario_nitram_2021");\n  assert.equal(nitram.matches, 1);\n  assert.equal(nitram.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
if (after.atlas?.actualCount !== NEXT_ATLAS || after.atlas?.expectedCount !== NEXT_ATLAS) throw new Error(`Nitram materialization did not produce exact ${NEXT_ATLAS}/${NEXT_ATLAS}.`);
if (after.verificationIndex?.literalVerifiedScenarioIds !== NEXT_PV) throw new Error(`Nitram materialization did not produce exact ${NEXT_PV} PV IDs.`);
if (after.candidates?.length !== NEXT_CANDIDATES) throw new Error(`Nitram materialization did not produce ${NEXT_CANDIDATES} candidates.`);
if (after.byDecision?.USE_EXISTING?.length !== NEXT_USE_EXISTING || after.byDecision?.P2?.length !== 2) throw new Error("Post-materialization decision census is not 73 USE_EXISTING / 2 P2.");
const nitram = after.candidates.find((candidate) => candidate.title === "Nitram");
if (nitram?.scenarioId !== SCENARIO_ID || nitram?.decision !== "USE_EXISTING" || nitram?.matches !== 1 || nitram?.productionVerified !== true) throw new Error("Nitram did not close as exactly one production-verified USE_EXISTING identity.");
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenNitramExpansion.ts");
if (expansion?.definitions !== 1 || expansion?.appended !== 1 || expansion?.matchedExisting !== 0) throw new Error("Nitram expansion order must prove one genuinely appended scenario and zero reuse matches.");
if (after.candidates.filter((candidate) => candidate.year === 2021).length !== 17) throw new Error("2021 Chapter 19 candidate bucket did not advance from 16 to 17.");
if (afterCannes.technicalBaseline?.atlasExpected !== NEXT_ATLAS || afterCannes.technicalBaseline?.atlasActual !== NEXT_ATLAS || afterCannes.technicalBaseline?.productionVerificationIds !== NEXT_PV || afterCannes.technicalBaseline?.chapterNineteenCandidates !== NEXT_CANDIDATES) throw new Error("Cannes technical baseline did not advance with Nitram.");
const nitramObligations = afterCannes.obligations?.filter((item) => item.title === "Nitram") ?? [];
if (!nitramObligations.length || nitramObligations.some((item) => item.status !== "PRODUCTION_VERIFIED" || item.scenarioId !== SCENARIO_ID || item.productionVerified !== true || item.atlasMatches !== 1)) throw new Error("Cannes Nitram obligation is not production-verified against one scenario identity.");
if (afterCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED - 1) throw new Error("Cannes corrective queue did not shrink by exactly one film.");
if (afterCannes.correctiveQueue?.some((item) => item.title === "Nitram")) throw new Error("Nitram remains in the Cannes corrective queue after materialization.");
if (afterCannes.correctiveQueue?.[0]?.title !== "Close" || afterCannes.correctiveQueue?.[0]?.status !== "MISSING_CANDIDATE") throw new Error("Close is not the next Cannes queue leader after Nitram.");
if (afterCannes.summary?.unresolvedFilms !== BASE_CANNES_UNRESOLVED - 1 || afterCannes.summary?.missingCandidateFilms !== BASE_CANNES_UNRESOLVED - 1) throw new Error("Cannes unresolved/missing film counts did not fall to 17.");
const p2 = [...(after.byDecision?.P2 ?? [])].sort();
if (JSON.stringify(p2) !== JSON.stringify(["Days", "The Green Knight"].sort())) throw new Error("Deferred P2 set changed during Nitram materialization.");

console.log(JSON.stringify({
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  pv: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2,
  nitram,
  expansion,
  cannesUnresolved: afterCannes.correctiveQueue.length,
  nextCannesLeader: afterCannes.correctiveQueue[0],
}, null, 2));
