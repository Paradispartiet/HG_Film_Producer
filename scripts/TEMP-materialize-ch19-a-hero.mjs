import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_a_hero_2021";
const BASE_ATLAS = 593;
const BASE_PV = 593;
const BASE_CANDIDATES = 70;
const BASE_CANNES_UNRESOLVED = 22;
const NEXT_ATLAS = BASE_ATLAS + 1;
const NEXT_PV = BASE_PV + 1;
const NEXT_CANDIDATES = BASE_CANDIDATES + 1;

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
function replaceOnce(p, before, after) {
  const source = read(p);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${p}: required marker missing: ${before.slice(0, 120)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: marker is not unique: ${before.slice(0, 120)}`);
  write(p, source.slice(0, first) + after + source.slice(first + before.length));
}
function replaceCount(p, before, after, expectedCount) {
  const source = read(p);
  const actual = source.split(before).length - 1;
  if (actual !== expectedCount) throw new Error(`${p}: expected ${expectedCount} occurrences of marker, found ${actual}: ${before}`);
  write(p, source.split(before).join(after));
}
function runJson(script, extra = []) {
  return JSON.parse(execFileSync(process.execPath, [script, ...extra], { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }));
}
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules" || name === "dist") continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out); else out.push(full);
  }
  return out;
}

// Fail closed on the deployed diagnostic baseline.
const before = runJson(files.chapter19Audit);
const beforeCannes = runJson("scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs");
if (before.atlas?.actualCount !== BASE_ATLAS || before.atlas?.expectedCount !== BASE_ATLAS) throw new Error(`Expected ${BASE_ATLAS}/${BASE_ATLAS} Atlas baseline, found ${before.atlas?.actualCount}/${before.atlas?.expectedCount}.`);
if (before.verificationIndex?.literalVerifiedScenarioIds !== BASE_PV) throw new Error(`Expected ${BASE_PV} PV baseline, found ${before.verificationIndex?.literalVerifiedScenarioIds}.`);
if (before.candidates?.length !== BASE_CANDIDATES) throw new Error(`Expected ${BASE_CANDIDATES} Chapter 19 candidates, found ${before.candidates?.length}.`);
if (before.candidates?.some((item) => item.title === "A Hero" || item.scenarioId === SCENARIO_ID)) throw new Error("A Hero is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
if (beforeCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED || beforeCannes.correctiveQueue?.[0]?.title !== "A Hero") throw new Error(`Expected A Hero as leader of a ${BASE_CANNES_UNRESOLVED}-film Cannes queue.`);
if (beforeCannes.correctiveQueue?.[0]?.status !== "MISSING_CANDIDATE") throw new Error(`A Hero must enter materialization from MISSING_CANDIDATE, found ${beforeCannes.correctiveQueue?.[0]?.status}.`);

// Strong flat reconciliation: before global wiring, the identity may occur only in the source-first files authored on this branch.
const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenAHeroExpansion.ts",
  "src/core/chapterNineteenAHeroExpansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenAHero.ts",
  "src/ui/data/scenarioProductionVerificationAHero.ts",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json)$/.test(rel)) continue;
  if (allowedIdentityPaths.has(rel)) continue;
  const text = readFileSync(full, "utf8");
  if (text.includes(SCENARIO_ID)) identityHits.push(rel);
}
if (identityHits.length) throw new Error(`Pre-existing A Hero scenario identity found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenFatherMotherSisterBrotherExpansion } from "../../core/chapterNineteenFatherMotherSisterBrotherExpansion.js";\n',
  'import { mergeChapterNineteenFatherMotherSisterBrotherExpansion } from "../../core/chapterNineteenFatherMotherSisterBrotherExpansion.js";\nimport { mergeChapterNineteenAHeroExpansion } from "../../core/chapterNineteenAHeroExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenFatherMotherSisterBrotherScenarios);',
  'const chapterNineteenAHeroScenarios = mergeChapterNineteenAHeroExpansion(chapterNineteenFatherMotherSisterBrotherScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenAHeroScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_father_mother_sister_brother_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_father_mother_sister_brother_expansion_2026+manual_chapter_nineteen_a_hero_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { fatherMotherSisterBrotherFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFatherMotherSisterBrother";\n',
  'import { fatherMotherSisterBrotherFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFatherMotherSisterBrother";\nimport { aHeroFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAHero";\n');
replaceOnce(files.filmStudyMap,
  '  [fatherMotherSisterBrotherFilmHistoryProfile.scenarioId]: fatherMotherSisterBrotherFilmHistoryProfile,\n',
  '  [fatherMotherSisterBrotherFilmHistoryProfile.scenarioId]: fatherMotherSisterBrotherFilmHistoryProfile,\n  [aHeroFilmHistoryProfile.scenarioId]: aHeroFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { fatherMotherSisterBrotherProductionCaseVerification } from "./scenarioProductionVerificationFatherMotherSisterBrother";\n',
  'import { fatherMotherSisterBrotherProductionCaseVerification } from "./scenarioProductionVerificationFatherMotherSisterBrother";\nimport { aHeroProductionCaseVerification } from "./scenarioProductionVerificationAHero";\n');
replaceOnce(files.pvRegistry,
  '  fatherMotherSisterBrotherProductionCaseVerification,\n',
  '  fatherMotherSisterBrotherProductionCaseVerification,\n  aHeroProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenFatherMotherSisterBrotherExpansion.ts",\n',
  '  "chapterNineteenFatherMotherSisterBrotherExpansion.ts",\n  "chapterNineteenAHeroExpansion.ts",\n');

// Extend the Chapter 19 wrapper; the closed Chapter 18 base remains 539 and the wrapper base remains 590.
replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const fatherMotherNeedles = [\'"title": "Father Mother Sister Brother"\', \'title: "Father Mother Sister Brother"\'];\n',
  'const fatherMotherNeedles = [\'"title": "Father Mother Sister Brother"\', \'title: "Father Mother Sister Brother"\'];\nconst aHeroNeedles = [\'"title": "A Hero"\', \'title: "A Hero"\', \'"originalTitle": "Ghahreman"\', \'scenario_a_hero_2021\'];\n');
const aHeroCandidate = `\nconst aHeroCandidate = \`\n  {\n    "title": "A Hero",\n    "originalTitle": "Ghahreman",\n    "year": 2021,\n    "aliases": ["GHAHREMAN", "Un héros", "Un Heros"],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Cannes 2021 Grand Prix source-first case: materialize one new A Hero/Ghahreman Atlas/PV identity after strict reuse reconciliation, and lock the documented Shiraz realist-production context, ten-month character-backstory rehearsal, ALEXA Mini LF/Signature Prime photography, 2K 2.39:1/5.1 delivery and Iran/France production network without inventing unsupported technical, financial or post detail."\n  },\`;\n\n`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', aHeroCandidate + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (fatherMotherNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Father Mother Sister Brother; consolidate the wrapper deliberately before continuing.");\n',
  'if (fatherMotherNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Father Mother Sister Brother; consolidate the wrapper deliberately before continuing.");\nif (aHeroNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains A Hero/Ghahreman; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}${fatherMotherCandidate}`);',
  '${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}${fatherMotherCandidate}${aHeroCandidate}`);');

replaceOnce(files.chapter18Completion,
  `invariant(verificationIds.size === ${BASE_PV}, \`Global Production Verification registry must contain exactly ${BASE_PV} unique scenarioIds after Father Mother Sister Brother Chapter 19 materialization: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${NEXT_PV}, \`Global Production Verification registry must contain exactly ${NEXT_PV} unique scenarioIds after A Hero Chapter 19 materialization: \${verificationIds.size}\`);`);
replaceOnce(files.chapter18Completion,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${BASE_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${BASE_ATLAS}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${NEXT_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${NEXT_ATLAS}.");`);
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 70, "Chapter 19 current candidate set must contain exactly 70 candidates after the festival top-prize reconciliation through Father Mother Sister Brother.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 71, "Chapter 19 current candidate set must contain exactly 71 candidates after Cannes major-prizes reconciliation adds A Hero.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 68 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 68 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 69 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 69 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'invariant(fatherMotherSisterBrother?.decision === "USE_EXISTING" && fatherMotherSisterBrother?.scenarioId === "scenario_father_mother_sister_brother_2025" && fatherMotherSisterBrother?.matches === 1 && fatherMotherSisterBrother?.productionVerified === true, "Father Mother Sister Brother is not closed as one new production-verified Chapter 19 case.");\n',
  'invariant(fatherMotherSisterBrother?.decision === "USE_EXISTING" && fatherMotherSisterBrother?.scenarioId === "scenario_father_mother_sister_brother_2025" && fatherMotherSisterBrother?.matches === 1 && fatherMotherSisterBrother?.productionVerified === true, "Father Mother Sister Brother is not closed as one new production-verified Chapter 19 case.");\nconst aHero = chapter19.candidates.find((candidate) => candidate.title === "A Hero");\ninvariant(aHero?.decision === "USE_EXISTING" && aHero?.scenarioId === "scenario_a_hero_2021" && aHero?.matches === 1 && aHero?.productionVerified === true, "A Hero is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\n');

// Contract arrays and exact census.
replaceCount(files.chapter19Contract,
  '  "Father Mother Sister Brother",\n  "Tenet",',
  '  "Father Mother Sister Brother",\n  "A Hero",\n  "Tenet",', 2);
replaceOnce(files.chapter19Contract,
  '  "Father Mother Sister Brother",\n  "Nomadland",',
  '  "Father Mother Sister Brother",\n  "A Hero",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 593;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 594;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 593);', 'assert.equal(resolved.atlas.expectedCount, 594);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 593);', 'assert.equal(resolved.atlas.actualCount, 594);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 593);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 594);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly seventy-one candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 70);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 71);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 70);', 'assert.equal(resolved.candidates.length, 71);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 12], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 13], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 43);', 'assert.equal(exactP1Priority.length, 44);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 68);', 'assert.equal(exactUseExisting.length, 69);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(fatherMotherSisterBrother.productionVerified, true);\n',
  '  assert.equal(fatherMotherSisterBrother.productionVerified, true);\n\n  const aHero = resolved.candidates.find((candidate) => candidate.title === "A Hero");\n  assert.ok(aHero);\n  assert.equal(aHero.year, 2021);\n  assert.equal(aHero.decision, "USE_EXISTING");\n  assert.equal(aHero.scenarioId, "scenario_a_hero_2021");\n  assert.equal(aHero.matches, 1);\n  assert.equal(aHero.productionVerified, true);\n');

// Regenerate canonical reports from the now-wired implementation.
execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = JSON.parse(read(files.chapter19Resolved));
const afterCannes = JSON.parse(read(files.cannesResolved));
if (after.atlas?.actualCount !== NEXT_ATLAS || after.atlas?.expectedCount !== NEXT_ATLAS) throw new Error(`A Hero materialization did not produce exact ${NEXT_ATLAS}/${NEXT_ATLAS}: ${after.atlas?.actualCount}/${after.atlas?.expectedCount}.`);
if (after.verificationIndex?.literalVerifiedScenarioIds !== NEXT_PV) throw new Error(`A Hero materialization did not produce exact ${NEXT_PV} PV IDs: ${after.verificationIndex?.literalVerifiedScenarioIds}.`);
if (after.candidates?.length !== NEXT_CANDIDATES) throw new Error(`A Hero materialization did not produce exact ${NEXT_CANDIDATES} candidates: ${after.candidates?.length}.`);
const aHero = after.candidates.find((item) => item.title === "A Hero");
if (!aHero || aHero.scenarioId !== SCENARIO_ID || aHero.matches !== 1 || aHero.productionVerified !== true || aHero.decision !== "USE_EXISTING") throw new Error(`A Hero did not close as one production-verified identity: ${JSON.stringify(aHero)}`);
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenAHeroExpansion.ts");
if (!expansion || expansion.definitions !== 1 || expansion.appended !== 1 || expansion.matchedExisting !== 0) throw new Error(`A Hero must be proven as appended:1/matchedExisting:0, found ${JSON.stringify(expansion)}.`);
if (after.byDecision?.P2?.length !== 2 || after.byDecision.P2[0] !== "Days" || after.byDecision.P2[1] !== "The Green Knight") throw new Error(`P2 queue changed unexpectedly: ${JSON.stringify(after.byDecision?.P2)}`);
if (afterCannes.summary?.unresolvedFilms !== BASE_CANNES_UNRESOLVED - 1 || afterCannes.summary?.missingCandidateFilms !== BASE_CANNES_UNRESOLVED - 1) throw new Error(`Cannes queue did not reduce exactly 22→21: ${JSON.stringify(afterCannes.summary)}`);
if (afterCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED - 1 || afterCannes.correctiveQueue?.[0]?.title !== "Compartment No. 6") throw new Error(`Expected Compartment No. 6 as next Cannes leader after A Hero, found ${afterCannes.correctiveQueue?.[0]?.title}.`);
const aHeroAward = afterCannes.awardedFilms?.find((item) => item.title === "A Hero");
if (!aHeroAward || aHeroAward.status !== "PRODUCTION_VERIFIED" || aHeroAward.scenarioId !== SCENARIO_ID || aHeroAward.atlasMatches !== 1) throw new Error(`Cannes audit did not close A Hero: ${JSON.stringify(aHeroAward)}`);

console.log(JSON.stringify({
  baseline: { atlas: BASE_ATLAS, pv: BASE_PV, candidates: BASE_CANDIDATES, cannesUnresolved: BASE_CANNES_UNRESOLVED },
  materialized: { atlas: after.atlas.actualCount, pv: after.verificationIndex.literalVerifiedScenarioIds, candidates: after.candidates.length, cannesUnresolved: afterCannes.summary.unresolvedFilms },
  aHero,
  expansion,
  nextCannesLeader: afterCannes.correctiveQueue[0]?.title,
  p2: after.byDecision.P2,
}, null, 2));
