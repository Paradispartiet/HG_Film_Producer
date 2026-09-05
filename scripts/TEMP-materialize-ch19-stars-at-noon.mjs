import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_stars_at_noon_2022";
const BASE_ATLAS = 598;
const BASE_PV = 598;
const BASE_CANDIDATES = 76;
const BASE_USE_EXISTING = 74;
const BASE_CANNES_UNRESOLVED = 16;
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

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function replaceOnce(p, before, after) {
  const source = read(p);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${p}: required marker missing: ${before.slice(0, 200)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: marker is not unique: ${before.slice(0, 200)}`);
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Stars at Noon.");
invariant(!before.candidates?.some((item) => item.title === "Stars at Noon" || item.scenarioId === SCENARIO_ID), "Stars at Noon is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Stars at Noon.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Stars at Noon" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Stars at Noon must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Boy from Heaven" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "Boy from Heaven must be second in the Cannes queue before Stars at Noon materialization.");

const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenStarsAtNoonExpansion.ts",
  "src/core/chapterNineteenStarsAtNoonExpansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenStarsAtNoon.ts",
  "src/ui/data/scenarioProductionVerificationStarsAtNoon.ts",
  "scripts/TEMP-materialize-ch19-stars-at-noon.mjs",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json|yml)$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  if (readFileSync(full, "utf8").includes(SCENARIO_ID)) identityHits.push(rel);
}
invariant(identityHits.length === 0, `Pre-existing Stars at Noon scenario identity found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenNitramExpansion } from "../../core/chapterNineteenNitramExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenNitramExpansion } from "../../core/chapterNineteenNitramExpansion.js";\nimport { mergeChapterNineteenStarsAtNoonExpansion } from "../../core/chapterNineteenStarsAtNoonExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenNitramScenarios = mergeChapterNineteenNitramExpansion(chapterNineteenAhedsKneeScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenNitramScenarios);',
  'const chapterNineteenNitramScenarios = mergeChapterNineteenNitramExpansion(chapterNineteenAhedsKneeScenarios);\nconst chapterNineteenStarsAtNoonScenarios = mergeChapterNineteenStarsAtNoonExpansion(chapterNineteenNitramScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenStarsAtNoonScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_nitram_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_nitram_expansion_2026+manual_chapter_nineteen_stars_at_noon_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { nitramFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenNitram";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { nitramFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenNitram";\nimport { starsAtNoonFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenStarsAtNoon";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [nitramFilmHistoryProfile.scenarioId]: nitramFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [nitramFilmHistoryProfile.scenarioId]: nitramFilmHistoryProfile,\n  [starsAtNoonFilmHistoryProfile.scenarioId]: starsAtNoonFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { nitramProductionCaseVerification } from "./scenarioProductionVerificationNitram";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { nitramProductionCaseVerification } from "./scenarioProductionVerificationNitram";\nimport { starsAtNoonProductionCaseVerification } from "./scenarioProductionVerificationStarsAtNoon";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  nitramProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  nitramProductionCaseVerification,\n  starsAtNoonProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenNitramExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenNitramExpansion.ts",\n  "chapterNineteenStarsAtNoonExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const closeNeedles = [\'"title": "Close"\', \'title: "Close"\', \'scenario_close_2022\'];\n',
  'const closeNeedles = [\'"title": "Close"\', \'title: "Close"\', \'scenario_close_2022\'];\nconst starsAtNoonNeedles = [\'"title": "Stars at Noon"\', \'title: "Stars at Noon"\', \'scenario_stars_at_noon_2022\'];\n');
const starsCandidateBlock = `const starsAtNoonCandidate = \`\n  {\n    "title": "Stars at Noon",\n    "originalTitle": "Stars at Noon",\n    "year": 2022,\n    "aliases": [],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Cannes 2022 joint Grand Prix source-first case: materialize one new Stars at Noon Atlas/PV identity after strict tree-wide reuse reconciliation; lock the sourced Panama-for-Nicaragua production substitution, mixed Panamanian/French production context, ALEXA Mini plus anamorphic TechnoCooke evidence, 2.39/5.1 delivery and explicit 135/137/138-minute catalogue discrepancy without inventing unsupported schedule, finance or post-production detail."\n  },\`;\n\n`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', starsCandidateBlock + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (closeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Close; consolidate the wrapper deliberately before continuing.");\n',
  'if (closeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Close; consolidate the wrapper deliberately before continuing.");\nif (starsAtNoonNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Stars at Noon; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}${nitramCandidate}${closeCandidate}`);',
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}${nitramCandidate}${closeCandidate}${starsAtNoonCandidate}`);');

replaceOnce(files.chapter18Completion,
  `invariant(verificationIds.size === ${BASE_PV}, \`Global Production Verification registry must contain exactly ${BASE_PV} unique scenarioIds after Nitram Chapter 19 materialization: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${NEXT_PV}, \`Global Production Verification registry must contain exactly ${NEXT_PV} unique scenarioIds after Stars at Noon Chapter 19 materialization: \${verificationIds.size}\`);`);
replaceOnce(files.chapter18Completion,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${BASE_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${BASE_ATLAS}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${NEXT_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${NEXT_ATLAS}.");`);
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 76, "Chapter 19 current candidate set must contain exactly 76 candidates after Cannes major-prizes reconciliation reuses Close.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 77, "Chapter 19 current candidate set must contain exactly 77 candidates after Cannes major-prizes reconciliation adds Stars at Noon.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 74 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 74 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 75 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 75 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");\n',
  'const starsAtNoon = chapter19.candidates.find((candidate) => candidate.title === "Stars at Noon");\ninvariant(starsAtNoon?.decision === "USE_EXISTING" && starsAtNoon?.scenarioId === "scenario_stars_at_noon_2022" && starsAtNoon?.matches === 1 && starsAtNoon?.productionVerified === true, "Stars at Noon is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");\n');

replaceCount(files.chapter19Contract, '  "Close",\n  "Tenet",', '  "Close",\n  "Stars at Noon",\n  "Tenet",', 2);
replaceOnce(files.chapter19Contract, '  "Close",\n  "Nomadland",', '  "Close",\n  "Stars at Noon",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 598;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 599;/);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.expectedCount, 598);', '  assert.equal(resolved.atlas.expectedCount, 599);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.actualCount, 598);', '  assert.equal(resolved.atlas.actualCount, 599);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 598);', '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 599);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy-six candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly seventy-seven candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 76);\n  assert.equal(resolved.candidates.length, 76);\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 14], [2023, 11], [2024, 12], [2025, 11]]);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 77);\n  assert.equal(resolved.candidates.length, 77);\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 15], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 49);', '  assert.equal(exactP1Priority.length, 50);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 74);', '  assert.equal(exactUseExisting.length, 75);');
replaceOnce(files.chapter19Contract,
  '  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");\n',
  '  const starsAtNoon = resolved.candidates.find((candidate) => candidate.title === "Stars at Noon");\n  assert.ok(starsAtNoon);\n  assert.equal(starsAtNoon.year, 2022);\n  assert.equal(starsAtNoon.decision, "USE_EXISTING");\n  assert.equal(starsAtNoon.scenarioId, "scenario_stars_at_noon_2022");\n  assert.equal(starsAtNoon.matches, 1);\n  assert.equal(starsAtNoon.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");\n');

execFileSync(process.execPath, [path.join(root, files.chapter19Audit), `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [path.join(root, "scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs"), `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
const candidate = after.candidates?.find((item) => item.title === "Stars at Noon");
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenStarsAtNoonExpansion.ts");
const obligation = afterCannes.obligations?.find((item) => item.title === "Stars at Noon" && item.awardYear === 2022);

invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Stars at Noon must advance Atlas exactly to ${NEXT_ATLAS}/${NEXT_ATLAS}.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Stars at Noon must advance Production Verification IDs exactly to ${NEXT_PV}.`);
invariant(expansion?.definitions === 1 && expansion?.appended === 1 && expansion?.matchedExisting === 0, `Stars at Noon expansion did not prove one genuinely appended identity: ${JSON.stringify(expansion)}`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Stars at Noon must produce ${NEXT_CANDIDATES} candidates.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING, `Stars at Noon must produce ${NEXT_USE_EXISTING} USE_EXISTING candidates.`);
invariant(after.byDecision?.P2?.length === 2 && after.byDecision.P2.includes("Days") && after.byDecision.P2.includes("The Green Knight"), "Stars at Noon changed the intentional P2 queue.");
invariant(after.candidates?.filter((item) => item.year === 2022).length === 15, "Stars at Noon must advance the 2022 candidate bucket to 15.");
invariant(candidate?.scenarioId === SCENARIO_ID && candidate?.decision === "USE_EXISTING" && candidate?.matches === 1 && candidate?.productionVerified === true, "Stars at Noon did not resolve to exactly one production-verified scenario.");
invariant(candidate?.origin === "chapterNineteenStarsAtNoonExpansion.ts", `Stars at Noon resolved from unexpected origin: ${candidate?.origin}`);
invariant(afterCannes.technicalBaseline?.atlasExpected === NEXT_ATLAS && afterCannes.technicalBaseline?.atlasActual === NEXT_ATLAS && afterCannes.technicalBaseline?.productionVerificationIds === NEXT_PV, "Cannes audit technical baseline did not advance exactly with Stars at Noon.");
invariant(afterCannes.technicalBaseline?.chapterNineteenCandidates === NEXT_CANDIDATES, "Cannes audit did not observe the Stars at Noon candidate.");
invariant(obligation?.candidateDecision === "USE_EXISTING" && obligation?.scenarioId === SCENARIO_ID && obligation?.atlasMatches === 1 && obligation?.productionVerified === true && obligation?.status === "PRODUCTION_VERIFIED", "Stars at Noon Cannes obligation did not close as PRODUCTION_VERIFIED.");
invariant(afterCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED - 1, "Stars at Noon did not reduce the Cannes corrective queue by exactly one.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "Boy from Heaven" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Boy from Heaven is not the next Cannes queue leader after Stars at Noon.");
invariant(!afterCannes.correctiveQueue?.some((item) => item.title === "Stars at Noon"), "Stars at Noon remains in the Cannes corrective queue after materialization.");

console.log(JSON.stringify({
  starsAtNoon: { scenarioId: candidate.scenarioId, decision: candidate.decision, matches: candidate.matches, productionVerified: candidate.productionVerified, origin: candidate.origin },
  expansion,
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  productionVerificationIds: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2,
  cannesCorrectiveQueue: afterCannes.correctiveQueue.length,
  nextCannesLeader: afterCannes.correctiveQueue[0]?.title ?? null,
}, null, 2));
