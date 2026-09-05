import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_boy_from_heaven_2022";
const BASE_ATLAS = 599;
const BASE_PV = 599;
const BASE_CANDIDATES = 77;
const BASE_USE_EXISTING = 75;
const BASE_CANNES_UNRESOLVED = 15;
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Boy from Heaven.");
invariant(!before.candidates?.some((item) => item.title === "Boy from Heaven" || item.scenarioId === SCENARIO_ID), "Boy from Heaven is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Boy from Heaven.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Boy from Heaven" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Boy from Heaven must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "The Eight Mountains" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "The Eight Mountains must be second in the Cannes queue before Boy from Heaven materialization.");

const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenBoyFromHeavenExpansion.ts",
  "src/core/chapterNineteenBoyFromHeavenExpansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenBoyFromHeaven.ts",
  "src/ui/data/scenarioProductionVerificationBoyFromHeaven.ts",
  "scripts/TEMP-materialize-ch19-boy-from-heaven.mjs",
  ".github/workflows/TEMP-ch19-boy-from-heaven-materialize.yml",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json|yml)$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  if (readFileSync(full, "utf8").includes(SCENARIO_ID)) identityHits.push(rel);
}
invariant(identityHits.length === 0, `Pre-existing Boy from Heaven scenario identity found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenStarsAtNoonExpansion } from "../../core/chapterNineteenStarsAtNoonExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenStarsAtNoonExpansion } from "../../core/chapterNineteenStarsAtNoonExpansion.js";\nimport { mergeChapterNineteenBoyFromHeavenExpansion } from "../../core/chapterNineteenBoyFromHeavenExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenStarsAtNoonScenarios = mergeChapterNineteenStarsAtNoonExpansion(chapterNineteenNitramScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenStarsAtNoonScenarios);',
  'const chapterNineteenStarsAtNoonScenarios = mergeChapterNineteenStarsAtNoonExpansion(chapterNineteenNitramScenarios);\nconst chapterNineteenBoyFromHeavenScenarios = mergeChapterNineteenBoyFromHeavenExpansion(chapterNineteenStarsAtNoonScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenBoyFromHeavenScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_stars_at_noon_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_stars_at_noon_expansion_2026+manual_chapter_nineteen_boy_from_heaven_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { starsAtNoonFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenStarsAtNoon";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { starsAtNoonFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenStarsAtNoon";\nimport { boyFromHeavenFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenBoyFromHeaven";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [starsAtNoonFilmHistoryProfile.scenarioId]: starsAtNoonFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [starsAtNoonFilmHistoryProfile.scenarioId]: starsAtNoonFilmHistoryProfile,\n  [boyFromHeavenFilmHistoryProfile.scenarioId]: boyFromHeavenFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { starsAtNoonProductionCaseVerification } from "./scenarioProductionVerificationStarsAtNoon";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { starsAtNoonProductionCaseVerification } from "./scenarioProductionVerificationStarsAtNoon";\nimport { boyFromHeavenProductionCaseVerification } from "./scenarioProductionVerificationBoyFromHeaven";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  starsAtNoonProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  starsAtNoonProductionCaseVerification,\n  boyFromHeavenProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenStarsAtNoonExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenStarsAtNoonExpansion.ts",\n  "chapterNineteenBoyFromHeavenExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const starsAtNoonNeedles = [\'"title": "Stars at Noon"\', \'title: "Stars at Noon"\', \'scenario_stars_at_noon_2022\'];\n',
  'const starsAtNoonNeedles = [\'"title": "Stars at Noon"\', \'title: "Stars at Noon"\', \'scenario_stars_at_noon_2022\'];\nconst boyFromHeavenNeedles = [\'"title": "Boy from Heaven"\', \'title: "Boy from Heaven"\', \'"originalTitle": "Walad Min Al Janna"\', \'Cairo Conspiracy\', \'scenario_boy_from_heaven_2022\'];\n');
const boyCandidateBlock = `const boyFromHeavenCandidate = \`\n  {\n    "title": "Boy from Heaven",\n    "originalTitle": "Walad Min Al Janna",\n    "year": 2022,\n    "aliases": ["Cairo Conspiracy", "Walad min al-Janna", "La Conspiration du Caire"],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Cannes 2022 Best Screenplay source-first case: materialize one new Boy from Heaven/Walad Min Al Janna Atlas/PV identity after strict alias-aware reuse reconciliation; preserve Cannes productionYear 2022 separately from 2021 principal photography; lock Covid-delay/Istanbul-Süleymaniye production, €6.5m transnational budget/network, ALEXA LF/4K ARRIRAW/single Scorpio 40mm scope cinematography and runtime-version boundaries without inventing unsupported schedule, equipment, finance or post detail."\n  },\`;\n\n`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', boyCandidateBlock + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (starsAtNoonNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Stars at Noon; consolidate the wrapper deliberately before continuing.");\n',
  'if (starsAtNoonNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Stars at Noon; consolidate the wrapper deliberately before continuing.");\nif (boyFromHeavenNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Boy from Heaven/Walad Min Al Janna/Cairo Conspiracy; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${closeCandidate}${starsAtNoonCandidate}`);',
  '${closeCandidate}${starsAtNoonCandidate}${boyFromHeavenCandidate}`);');

replaceOnce(files.chapter18Completion,
  `invariant(verificationIds.size === ${BASE_PV}, \`Global Production Verification registry must contain exactly ${BASE_PV} unique scenarioIds after Stars at Noon Chapter 19 materialization: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${NEXT_PV}, \`Global Production Verification registry must contain exactly ${NEXT_PV} unique scenarioIds after Boy from Heaven Chapter 19 materialization: \${verificationIds.size}\`);`);
replaceOnce(files.chapter18Completion,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${BASE_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${BASE_ATLAS}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${NEXT_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${NEXT_ATLAS}.");`);
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 77, "Chapter 19 current candidate set must contain exactly 77 candidates after Cannes major-prizes reconciliation adds Stars at Noon.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 78, "Chapter 19 current candidate set must contain exactly 78 candidates after Cannes major-prizes reconciliation adds Boy from Heaven.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 75 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 75 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 76 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 76 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const starsAtNoon = chapter19.candidates.find((candidate) => candidate.title === "Stars at Noon");\ninvariant(starsAtNoon?.decision === "USE_EXISTING" && starsAtNoon?.scenarioId === "scenario_stars_at_noon_2022" && starsAtNoon?.matches === 1 && starsAtNoon?.productionVerified === true, "Stars at Noon is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");\n',
  'const starsAtNoon = chapter19.candidates.find((candidate) => candidate.title === "Stars at Noon");\ninvariant(starsAtNoon?.decision === "USE_EXISTING" && starsAtNoon?.scenarioId === "scenario_stars_at_noon_2022" && starsAtNoon?.matches === 1 && starsAtNoon?.productionVerified === true, "Stars at Noon is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst boyFromHeaven = chapter19.candidates.find((candidate) => candidate.title === "Boy from Heaven");\ninvariant(boyFromHeaven?.decision === "USE_EXISTING" && boyFromHeaven?.scenarioId === "scenario_boy_from_heaven_2022" && boyFromHeaven?.matches === 1 && boyFromHeaven?.productionVerified === true, "Boy from Heaven is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");\n');

replaceCount(files.chapter19Contract, '  "Stars at Noon",\n  "Tenet",', '  "Stars at Noon",\n  "Boy from Heaven",\n  "Tenet",', 2);
replaceOnce(files.chapter19Contract, '  "Stars at Noon",\n  "Nomadland",', '  "Stars at Noon",\n  "Boy from Heaven",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 599;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 600;/);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.expectedCount, 599);', '  assert.equal(resolved.atlas.expectedCount, 600);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.actualCount, 599);', '  assert.equal(resolved.atlas.actualCount, 600);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 599);', '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 600);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy-seven candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly seventy-eight candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 77);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 78);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.candidates.length, 77);', '  assert.equal(resolved.candidates.length, 78);');
replaceOnce(files.chapter19Contract, '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 15], [2023, 11], [2024, 12], [2025, 11]]);', '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 16], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 50);', '  assert.equal(exactP1Priority.length, 51);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 75);', '  assert.equal(exactUseExisting.length, 76);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(starsAtNoon.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(starsAtNoon.productionVerified, true);\n\n  const boyFromHeaven = resolved.candidates.find((candidate) => candidate.title === "Boy from Heaven");\n  assert.ok(boyFromHeaven);\n  assert.equal(boyFromHeaven.year, 2022);\n  assert.equal(boyFromHeaven.decision, "USE_EXISTING");\n  assert.equal(boyFromHeaven.scenarioId, "scenario_boy_from_heaven_2022");\n  assert.equal(boyFromHeaven.matches, 1);\n  assert.equal(boyFromHeaven.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.actualCount === NEXT_ATLAS && after.atlas?.expectedCount === NEXT_ATLAS, `Boy from Heaven materialization did not produce exact ${NEXT_ATLAS}/${NEXT_ATLAS}.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Boy from Heaven materialization did not produce exact ${NEXT_PV} PV IDs.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Boy from Heaven materialization did not produce ${NEXT_CANDIDATES} candidates.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Post-materialization decision census is not 76 USE_EXISTING / 2 P2.");
const boyFromHeaven = after.candidates.find((candidate) => candidate.title === "Boy from Heaven");
invariant(boyFromHeaven?.scenarioId === SCENARIO_ID && boyFromHeaven?.decision === "USE_EXISTING" && boyFromHeaven?.matches === 1 && boyFromHeaven?.productionVerified === true, "Boy from Heaven did not close as exactly one production-verified USE_EXISTING identity.");
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenBoyFromHeavenExpansion.ts");
invariant(expansion?.definitions === 1 && expansion?.appended === 1 && expansion?.matchedExisting === 0, "Boy from Heaven expansion order must prove one genuinely appended scenario and zero reuse matches.");
invariant(after.candidates.filter((candidate) => candidate.year === 2022).length === 16, "2022 Chapter 19 candidate bucket did not advance from 15 to 16.");
invariant(afterCannes.technicalBaseline?.atlasExpected === NEXT_ATLAS && afterCannes.technicalBaseline?.atlasActual === NEXT_ATLAS && afterCannes.technicalBaseline?.productionVerificationIds === NEXT_PV && afterCannes.technicalBaseline?.chapterNineteenCandidates === NEXT_CANDIDATES, "Cannes technical baseline did not advance with Boy from Heaven.");
const boyObligations = afterCannes.obligations?.filter((item) => item.title === "Boy from Heaven") ?? [];
invariant(boyObligations.length > 0 && boyObligations.every((item) => item.status === "PRODUCTION_VERIFIED" && item.scenarioId === SCENARIO_ID && item.productionVerified === true && item.atlasMatches === 1), "Cannes Boy from Heaven obligation is not production-verified against one scenario identity.");
invariant(afterCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED - 1, "Cannes corrective queue did not shrink by exactly one film.");
invariant(!afterCannes.correctiveQueue?.some((item) => item.title === "Boy from Heaven"), "Boy from Heaven remains in the Cannes corrective queue after materialization.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "The Eight Mountains" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "The Eight Mountains is not the next Cannes queue leader after Boy from Heaven.");
invariant(afterCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED - 1 && afterCannes.summary?.missingCandidateFilms === BASE_CANNES_UNRESOLVED - 1, "Cannes unresolved/missing film counts did not fall to 14.");
const p2 = [...(after.byDecision?.P2 ?? [])].sort();
invariant(JSON.stringify(p2) === JSON.stringify(["Days", "The Green Knight"].sort()), "Deferred P2 set changed during Boy from Heaven materialization.");

console.log(JSON.stringify({
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  pv: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2,
  boyFromHeaven,
  expansion,
  cannesUnresolved: afterCannes.correctiveQueue.length,
  nextCannesLeader: afterCannes.correctiveQueue[0],
}, null, 2));
