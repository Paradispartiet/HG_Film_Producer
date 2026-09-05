import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_compartment_no_6_2021";
const BASE_ATLAS = 594;
const BASE_PV = 594;
const BASE_CANDIDATES = 71;
const BASE_USE_EXISTING = 69;
const BASE_CANNES_UNRESOLVED = 21;
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
  if (first < 0) throw new Error(`${p}: required marker missing: ${before.slice(0, 140)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: marker is not unique: ${before.slice(0, 140)}`);
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

// Fail closed on the committed, deployed canonical baseline. The standalone authored PV file
// already contains the next literal scenarioId, so pre-wiring live registry counts are not a valid baseline.
const before = readJson(files.chapter19Resolved);
const beforeCannes = readJson(files.cannesResolved);
if (before.atlas?.actualCount !== BASE_ATLAS || before.atlas?.expectedCount !== BASE_ATLAS) throw new Error(`Expected committed ${BASE_ATLAS}/${BASE_ATLAS} Atlas baseline, found ${before.atlas?.actualCount}/${before.atlas?.expectedCount}.`);
if (before.verificationIndex?.literalVerifiedScenarioIds !== BASE_PV) throw new Error(`Expected committed ${BASE_PV} PV baseline, found ${before.verificationIndex?.literalVerifiedScenarioIds}.`);
if (before.candidates?.length !== BASE_CANDIDATES) throw new Error(`Expected ${BASE_CANDIDATES} Chapter 19 candidates, found ${before.candidates?.length}.`);
if (before.byDecision?.USE_EXISTING?.length !== BASE_USE_EXISTING || before.byDecision?.P2?.length !== 2) throw new Error(`Unexpected committed decision census before Compartment No. 6.`);
if (before.candidates?.some((item) => item.title === "Compartment No. 6" || item.scenarioId === SCENARIO_ID)) throw new Error("Compartment No. 6 is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
if (beforeCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED || beforeCannes.correctiveQueue?.[0]?.title !== "Compartment No. 6") throw new Error(`Expected Compartment No. 6 as leader of a ${BASE_CANNES_UNRESOLVED}-film Cannes queue.`);
if (beforeCannes.correctiveQueue?.[0]?.status !== "MISSING_CANDIDATE") throw new Error(`Compartment No. 6 must enter materialization from MISSING_CANDIDATE, found ${beforeCannes.correctiveQueue?.[0]?.status}.`);

const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenCompartmentNo6Expansion.ts",
  "src/core/chapterNineteenCompartmentNo6Expansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenCompartmentNo6.ts",
  "src/ui/data/scenarioProductionVerificationCompartmentNo6.ts",
  "scripts/TEMP-materialize-ch19-compartment-no-6.mjs",
  ".github/workflows/TEMP-ch19-compartment-no-6-materialize.yml",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json|yml)$/.test(rel)) continue;
  if (allowedIdentityPaths.has(rel)) continue;
  const text = readFileSync(full, "utf8");
  if (text.includes(SCENARIO_ID)) identityHits.push(rel);
}
if (identityHits.length) throw new Error(`Pre-existing Compartment No. 6 scenario identity found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenAHeroExpansion } from "../../core/chapterNineteenAHeroExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenAHeroExpansion } from "../../core/chapterNineteenAHeroExpansion.js";\nimport { mergeChapterNineteenCompartmentNo6Expansion } from "../../core/chapterNineteenCompartmentNo6Expansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenAHeroScenarios = mergeChapterNineteenAHeroExpansion(chapterNineteenFatherMotherSisterBrotherScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenAHeroScenarios);',
  'const chapterNineteenAHeroScenarios = mergeChapterNineteenAHeroExpansion(chapterNineteenFatherMotherSisterBrotherScenarios);\nconst chapterNineteenCompartmentNo6Scenarios = mergeChapterNineteenCompartmentNo6Expansion(chapterNineteenAHeroScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenCompartmentNo6Scenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_a_hero_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_a_hero_expansion_2026+manual_chapter_nineteen_compartment_no_6_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { aHeroFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAHero";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { aHeroFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAHero";\nimport { compartmentNo6FilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenCompartmentNo6";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [aHeroFilmHistoryProfile.scenarioId]: aHeroFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [aHeroFilmHistoryProfile.scenarioId]: aHeroFilmHistoryProfile,\n  [compartmentNo6FilmHistoryProfile.scenarioId]: compartmentNo6FilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { aHeroProductionCaseVerification } from "./scenarioProductionVerificationAHero";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { aHeroProductionCaseVerification } from "./scenarioProductionVerificationAHero";\nimport { compartmentNo6ProductionCaseVerification } from "./scenarioProductionVerificationCompartmentNo6";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  aHeroProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  aHeroProductionCaseVerification,\n  compartmentNo6ProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenAHeroExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenAHeroExpansion.ts",\n  "chapterNineteenCompartmentNo6Expansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  "const aHeroNeedles = ['\"title\": \"A Hero\"', 'title: \"A Hero\"', '\"originalTitle\": \"Ghahreman\"', 'scenario_a_hero_2021'];\n",
  "const aHeroNeedles = ['\"title\": \"A Hero\"', 'title: \"A Hero\"', '\"originalTitle\": \"Ghahreman\"', 'scenario_a_hero_2021'];\nconst compartmentNo6Needles = ['\"title\": \"Compartment No. 6\"', 'title: \"Compartment No. 6\"', '\"originalTitle\": \"Hytti nro 6\"', 'scenario_compartment_no_6_2021'];\n");
const compartmentCandidate = `
const compartmentNo6Candidate = \`
  {
    "title": "Compartment No. 6",
    "originalTitle": "Hytti nro 6",
    "year": 2021,
    "aliases": ["Hytti Nro 6", "Hytti Nro. 6", "Hytti No 6", "Compartment No.6", "Compartment No 6"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2021 Grand Prix source-first case: materialize one new Compartment No. 6/Hytti nro 6 Atlas/PV identity after strict reuse reconciliation, lock the documented 28-day Russian production, 2-perf ARRICAM LT/Zeiss Super Speed/VISION3 500T photochemical workflow, train simulation, hidden-mic constraint and explicit runtime/aspect-ratio source discrepancies without inventing unsupported finance or post detail."
  },\`;

`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', compartmentCandidate + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (aHeroNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains A Hero/Ghahreman; consolidate the wrapper deliberately before continuing.");\n',
  'if (aHeroNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains A Hero/Ghahreman; consolidate the wrapper deliberately before continuing.");\nif (compartmentNo6Needles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Compartment No. 6/Hytti nro 6; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}${thereIsNoEvilCandidate}${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}${fatherMotherCandidate}${aHeroCandidate}`);',
  '${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}${thereIsNoEvilCandidate}${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}${fatherMotherCandidate}${aHeroCandidate}${compartmentNo6Candidate}`);');

replaceOnce(files.chapter18Completion,
  `invariant(verificationIds.size === ${BASE_PV}, \`Global Production Verification registry must contain exactly ${BASE_PV} unique scenarioIds after A Hero Chapter 19 materialization: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${NEXT_PV}, \`Global Production Verification registry must contain exactly ${NEXT_PV} unique scenarioIds after Compartment No. 6 Chapter 19 materialization: \${verificationIds.size}\`);`);
replaceOnce(files.chapter18Completion,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${BASE_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${BASE_ATLAS}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${NEXT_ATLAS}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${NEXT_ATLAS}.");`);
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 71, "Chapter 19 current candidate set must contain exactly 71 candidates after Cannes major-prizes reconciliation adds A Hero.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 72, "Chapter 19 current candidate set must contain exactly 72 candidates after Cannes major-prizes reconciliation adds Compartment No. 6.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 69 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 69 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 70 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 70 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const aHero = chapter19.candidates.find((candidate) => candidate.title === "A Hero");\ninvariant(aHero?.decision === "USE_EXISTING" && aHero?.scenarioId === "scenario_a_hero_2021" && aHero?.matches === 1 && aHero?.productionVerified === true, "A Hero is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\n',
  'const aHero = chapter19.candidates.find((candidate) => candidate.title === "A Hero");\ninvariant(aHero?.decision === "USE_EXISTING" && aHero?.scenarioId === "scenario_a_hero_2021" && aHero?.matches === 1 && aHero?.productionVerified === true, "A Hero is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst compartmentNo6 = chapter19.candidates.find((candidate) => candidate.title === "Compartment No. 6");\ninvariant(compartmentNo6?.decision === "USE_EXISTING" && compartmentNo6?.scenarioId === "scenario_compartment_no_6_2021" && compartmentNo6?.matches === 1 && compartmentNo6?.productionVerified === true, "Compartment No. 6 is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\n');

replaceCount(files.chapter19Contract,
  '  "A Hero",\n  "Tenet",',
  '  "A Hero",\n  "Compartment No. 6",\n  "Tenet",', 2);
replaceOnce(files.chapter19Contract,
  '  "A Hero",\n  "Nomadland",',
  '  "A Hero",\n  "Compartment No. 6",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 594;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 595;/);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.expectedCount, 594);', 'assert.equal(resolved.atlas.expectedCount, 595);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.atlas.actualCount, 594);', 'assert.equal(resolved.atlas.actualCount, 595);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 594);', 'assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 595);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy-one candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly seventy-two candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 71);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 72);');
replaceOnce(files.chapter19Contract, 'assert.equal(resolved.candidates.length, 71);', 'assert.equal(resolved.candidates.length, 72);');
replaceOnce(files.chapter19Contract, 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 13], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);', 'const expectedCandidatesByYear = new Map([[2020, 11], [2021, 14], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactP1Priority.length, 44);', 'assert.equal(exactP1Priority.length, 45);');
replaceOnce(files.chapter19Contract, 'assert.equal(exactUseExisting.length, 69);', 'assert.equal(exactUseExisting.length, 70);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(aHero.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(aHero.productionVerified, true);\n\n  const compartmentNo6 = resolved.candidates.find((candidate) => candidate.title === "Compartment No. 6");\n  assert.ok(compartmentNo6);\n  assert.equal(compartmentNo6.year, 2021);\n  assert.equal(compartmentNo6.decision, "USE_EXISTING");\n  assert.equal(compartmentNo6.scenarioId, "scenario_compartment_no_6_2021");\n  assert.equal(compartmentNo6.matches, 1);\n  assert.equal(compartmentNo6.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
if (after.atlas?.actualCount !== NEXT_ATLAS || after.atlas?.expectedCount !== NEXT_ATLAS) throw new Error(`Compartment No. 6 materialization did not produce exact ${NEXT_ATLAS}/${NEXT_ATLAS}: ${after.atlas?.actualCount}/${after.atlas?.expectedCount}.`);
if (after.verificationIndex?.literalVerifiedScenarioIds !== NEXT_PV) throw new Error(`Compartment No. 6 materialization did not produce exact ${NEXT_PV} PV IDs: ${after.verificationIndex?.literalVerifiedScenarioIds}.`);
if (after.candidates?.length !== NEXT_CANDIDATES) throw new Error(`Compartment No. 6 materialization did not produce exact ${NEXT_CANDIDATES} candidates: ${after.candidates?.length}.`);
if (after.byDecision?.USE_EXISTING?.length !== NEXT_USE_EXISTING || after.byDecision?.P2?.length !== 2) throw new Error(`Decision census drifted after Compartment No. 6: ${JSON.stringify(after.byDecision)}`);
const compartmentNo6 = after.candidates.find((item) => item.title === "Compartment No. 6");
if (!compartmentNo6 || compartmentNo6.scenarioId !== SCENARIO_ID || compartmentNo6.matches !== 1 || compartmentNo6.productionVerified !== true || compartmentNo6.decision !== "USE_EXISTING") throw new Error(`Compartment No. 6 did not close as one production-verified identity: ${JSON.stringify(compartmentNo6)}`);
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenCompartmentNo6Expansion.ts");
if (!expansion || expansion.definitions !== 1 || expansion.appended !== 1 || expansion.matchedExisting !== 0) throw new Error(`Compartment No. 6 must be proven as appended:1/matchedExisting:0, found ${JSON.stringify(expansion)}.`);
if (after.byDecision?.P2?.length !== 2 || after.byDecision.P2[0] !== "Days" || after.byDecision.P2[1] !== "The Green Knight") throw new Error(`P2 queue changed unexpectedly: ${JSON.stringify(after.byDecision?.P2)}`);
if (afterCannes.summary?.unresolvedFilms !== BASE_CANNES_UNRESOLVED - 1 || afterCannes.summary?.missingCandidateFilms !== BASE_CANNES_UNRESOLVED - 1) throw new Error(`Cannes queue did not reduce exactly 21→20: ${JSON.stringify(afterCannes.summary)}`);
if (afterCannes.correctiveQueue?.length !== BASE_CANNES_UNRESOLVED - 1 || afterCannes.correctiveQueue?.[0]?.title !== "Annette") throw new Error(`Expected Annette as next Cannes leader after Compartment No. 6, found ${afterCannes.correctiveQueue?.[0]?.title}.`);
const awardFilm = afterCannes.awardedFilms?.find((item) => item.title === "Compartment No. 6");
if (!awardFilm || awardFilm.status !== "PRODUCTION_VERIFIED" || awardFilm.scenarioId !== SCENARIO_ID || awardFilm.atlasMatches !== 1) throw new Error(`Cannes audit did not close Compartment No. 6: ${JSON.stringify(awardFilm)}`);

console.log(JSON.stringify({
  baseline: { atlas: BASE_ATLAS, pv: BASE_PV, candidates: BASE_CANDIDATES, useExisting: BASE_USE_EXISTING, cannesUnresolved: BASE_CANNES_UNRESOLVED },
  materialized: { atlas: after.atlas.actualCount, pv: after.verificationIndex.literalVerifiedScenarioIds, candidates: after.candidates.length, useExisting: after.byDecision.USE_EXISTING.length, cannesUnresolved: afterCannes.summary.unresolvedFilms },
  compartmentNo6,
  expansion,
  nextCannesLeader: afterCannes.correctiveQueue[0]?.title,
  p2: after.byDecision.P2,
}, null, 2));
