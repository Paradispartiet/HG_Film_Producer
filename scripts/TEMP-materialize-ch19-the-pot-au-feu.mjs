import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_the_pot_au_feu_2023";
const BASE_ATLAS = 604;
const BASE_PV = 604;
const BASE_CANDIDATES = 82;
const BASE_USE_EXISTING = 80;
const BASE_CANNES_UNRESOLVED = 10;
const NEXT_ATLAS = 605;
const NEXT_PV = 605;
const NEXT_CANDIDATES = 83;
const NEXT_USE_EXISTING = 81;

const files = {
  expansion: "src/core/chapterNineteenThePotAuFeuExpansion.ts",
  filmStudy: "src/ui/data/scenarioFilmStudyChapterNineteenThePotAuFeu.ts",
  pv: "src/ui/data/scenarioProductionVerificationThePotAuFeu.ts",
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
function invariant(condition, message) { if (!condition) throw new Error(message); }
function replaceOnce(p, before, after) {
  const source = read(p);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${p}: required marker missing: ${before.slice(0, 220)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${p}: marker is not unique: ${before.slice(0, 220)}`);
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before The Pot-au-Feu.");
invariant(!before.candidates?.some((item) => item.title === "The Pot-au-Feu" || item.originalTitle === "La Passion de Dodin Bouffant" || item.scenarioId === SCENARIO_ID), "The Pot-au-Feu is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED && beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before The Pot-au-Feu.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "The Pot-au-Feu" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "The Pot-au-Feu must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Fallen Leaves" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "Fallen Leaves must be second in the Cannes queue before The Pot-au-Feu materialization.");
const before2023 = beforeCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(before2023?.unresolvedFilms === 5, `Expected five unresolved Cannes 2023 films before materialization, found ${before2023?.unresolvedFilms}.`);

const allowedIdentityPaths = new Set([
  files.expansion,
  "src/core/chapterNineteenThePotAuFeuExpansion.test.ts",
  files.filmStudy,
  files.pv,
  "scripts/TEMP-materialize-ch19-the-pot-au-feu.mjs",
  ".github/workflows/TEMP-ch19-the-pot-au-feu-materialize.yml",
]);
const identityHits = [];
const titlePattern = /\b(?:title|originalTitle|original_title)\s*:\s*"(?:The Pot-au-Feu|The Taste of Things|La Passion de Dodin Bouffant|La passion de Dodin Bouffant)"/;
const aliasPattern = /\baliases\s*:\s*\[[^\]]*"(?:The Pot-au-Feu|The Taste of Things|La Passion de Dodin Bouffant|La passion de Dodin Bouffant)"/s;
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if ((!rel.startsWith("src/core/") && !rel.startsWith("src/ui/data/")) || !/\.ts$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  const text = readFileSync(full, "utf8");
  if (text.includes(SCENARIO_ID) || titlePattern.test(text) || aliasPattern.test(text)) identityHits.push(rel);
}
invariant(identityHits.length === 0, `Pre-existing The Pot-au-Feu identity or alias found outside source-first files: ${identityHits.join(", ")}`);

// Remove one search-snippet-only music exception before canonicalization; retain only claims anchored in the locked source list.
replaceOnce(files.expansion,
  "; apart from a late piano transcription from Massenet's Thaïs, music is not treated as a continuous score layer.",
  "; the locked source base therefore treats the film as deliberately score-light without asserting an unsupported musical-exception catalogue.");
replaceOnce(files.expansion,
  'music: ["no_conventional_score", "late_thais_piano_transcription_exception", "material_sound_replaces_score_function"],',
  'music: ["no_conventional_score", "material_sound_replaces_score_function", "musical_exception_catalogue_unresolved"],');
replaceOnce(files.expansion,
  '"Preserve the film\'s near-absence of score as a directorial sound decision, with the late Thaïs piano transcription as a bounded exception.",',
  '"Preserve the no-conventional-score decision as a sourced directorial sound choice without adding unsupported musical exceptions.",');
replaceOnce(files.expansion,
  '{ id: "music_boundary", label: "Reject an unnecessary score", player_task: "Preserve the no-conventional-score decision and the late Thaïs exception." },',
  '{ id: "music_boundary", label: "Reject an unnecessary score", player_task: "Preserve the sourced no-conventional-score decision while keeping any exception catalogue unresolved." },');
replaceOnce(files.filmStudy,
  "Apart from a late piano transcription from Massenet's Thaïs, the film avoids a conventional score.",
  "The locked source base supports the absence of a conventional score; any specific musical-exception catalogue remains unresolved.");
replaceOnce(files.filmStudy,
  "Apart from a late piano transcription from Massenet's Thaïs, the film is treated as intentionally score-light rather than as having an undocumented composer workflow.",
  "The film is treated as intentionally score-light from Hùng's direct account; a detailed musical-exception catalogue is not inferred from the locked sources.");
replaceOnce(files.pv,
  "; apart from a late piano transcription from Massenet's Thaïs, music is intentionally sparse.",
  "; the locked source base supports an intentionally sparse, no-conventional-score design without extending to an unsupported exception catalogue.");

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenBrokerExpansion } from "../../core/chapterNineteenBrokerExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenBrokerExpansion } from "../../core/chapterNineteenBrokerExpansion.js";\nimport { mergeChapterNineteenThePotAuFeuExpansion } from "../../core/chapterNineteenThePotAuFeuExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenBrokerScenarios = mergeChapterNineteenBrokerExpansion(chapterNineteenHolySpiderScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenBrokerScenarios);',
  'const chapterNineteenBrokerScenarios = mergeChapterNineteenBrokerExpansion(chapterNineteenHolySpiderScenarios);\nconst chapterNineteenThePotAuFeuScenarios = mergeChapterNineteenThePotAuFeuExpansion(chapterNineteenBrokerScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenThePotAuFeuScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_broker_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_broker_expansion_2026+manual_chapter_nineteen_the_pot_au_feu_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { brokerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenBroker";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { brokerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenBroker";\nimport { thePotAuFeuFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenThePotAuFeu";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [brokerFilmHistoryProfile.scenarioId]: brokerFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [brokerFilmHistoryProfile.scenarioId]: brokerFilmHistoryProfile,\n  [thePotAuFeuFilmHistoryProfile.scenarioId]: thePotAuFeuFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { brokerProductionCaseVerification } from "./scenarioProductionVerificationBroker";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { brokerProductionCaseVerification } from "./scenarioProductionVerificationBroker";\nimport { thePotAuFeuProductionCaseVerification } from "./scenarioProductionVerificationThePotAuFeu";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  brokerProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  brokerProductionCaseVerification,\n  thePotAuFeuProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenBrokerExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenBrokerExpansion.ts",\n  "chapterNineteenThePotAuFeuExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const brokerNeedles = [\'"title": "Broker"\', \'title: "Broker"\', \'Les Bonnes Étoiles\', \'Beurokeo\', \'브로커\', \'scenario_broker_2022\'];\n',
  'const brokerNeedles = [\'"title": "Broker"\', \'title: "Broker"\', \'Les Bonnes Étoiles\', \'Beurokeo\', \'브로커\', \'scenario_broker_2022\'];\nconst thePotAuFeuNeedles = [\'"title": "The Pot-au-Feu"\', \'title: "The Pot-au-Feu"\', \'La Passion de Dodin Bouffant\', \'The Taste of Things\', \'scenario_the_pot_au_feu_2023\'];\n');
const potCandidate = `
const thePotAuFeuCandidate = \`
  {
    "title": "The Pot-au-Feu",
    "originalTitle": "La Passion de Dodin Bouffant",
    "year": 2023,
    "aliases": ["The Taste of Things", "La passion de Dodin Bouffant"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Director source-first case: materialize one new The Pot-au-Feu/La Passion de Dodin Bouffant/The Taste of Things Atlas/PV identity after strict alias-aware structural reuse reconciliation; preserve Cannes productionYear 2023 separately from the March 31-May 18, 2022 Maine-et-Loire production; lock the Château de Raguin spatial system, real-food/Steadicam choreography, sole Sony Venice plus 35mm Summilux-C evidence, sourced lighting and material-sound method, and 134/135-minute runtime discrepancy without inventing unsupported data, VFX, finance or mastering detail."
  },\`;
`;
replaceOnce(files.chapter19Audit, '\nconst baseSource = readFileSync(basePath, "utf8");', `${potCandidate}\nconst baseSource = readFileSync(basePath, "utf8");`);
replaceOnce(files.chapter19Audit,
  'if (brokerNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Broker/Les Bonnes Étoiles/Beurokeo; consolidate the wrapper deliberately before continuing.");\n',
  'if (brokerNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Broker/Les Bonnes Étoiles/Beurokeo; consolidate the wrapper deliberately before continuing.");\nif (thePotAuFeuNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Pot-au-Feu/La Passion de Dodin Bouffant/The Taste of Things; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${toriAndLokitaCandidate}${holySpiderCandidate}${brokerCandidate}`);',
  '${toriAndLokitaCandidate}${holySpiderCandidate}${brokerCandidate}${thePotAuFeuCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 604, `Global Production Verification registry must contain exactly 604 unique scenarioIds after Broker Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 605, `Global Production Verification registry must contain exactly 605 unique scenarioIds after The Pot-au-Feu Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 604, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 604.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 605, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 605.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 82, "Chapter 19 current candidate set must contain exactly 82 candidates after Cannes major-prizes reconciliation adds Broker.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 83, "Chapter 19 current candidate set must contain exactly 83 candidates after Cannes major-prizes reconciliation adds The Pot-au-Feu.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 80 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 80 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 81 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 81 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const broker = chapter19.candidates.find((candidate) => candidate.title === "Broker");\ninvariant(broker?.decision === "USE_EXISTING" && broker?.scenarioId === "scenario_broker_2022" && broker?.matches === 1 && broker?.productionVerified === true, "Broker is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const broker = chapter19.candidates.find((candidate) => candidate.title === "Broker");\ninvariant(broker?.decision === "USE_EXISTING" && broker?.scenarioId === "scenario_broker_2022" && broker?.matches === 1 && broker?.productionVerified === true, "Broker is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst thePotAuFeu = chapter19.candidates.find((candidate) => candidate.title === "The Pot-au-Feu");\ninvariant(thePotAuFeu?.decision === "USE_EXISTING" && thePotAuFeu?.scenarioId === "scenario_the_pot_au_feu_2023" && thePotAuFeu?.matches === 1 && thePotAuFeu?.productionVerified === true, "The Pot-au-Feu is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract,
  '  "Broker",\n  "Tenet",',
  '  "Broker",\n  "The Pot-au-Feu",\n  "Tenet",',
  2);
replaceOnce(files.chapter19Contract,
  '  "Broker",\n  "Nomadland",',
  '  "Broker",\n  "The Pot-au-Feu",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 604;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 605;/);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.expectedCount, 604);', '  assert.equal(resolved.atlas.expectedCount, 605);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.actualCount, 604);', '  assert.equal(resolved.atlas.actualCount, 605);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 604);', '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 605);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty-two candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-three candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 82);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 83);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.candidates.length, 82);', '  assert.equal(resolved.candidates.length, 83);');
replaceOnce(files.chapter19Contract,
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 11], [2024, 12], [2025, 11]]);',
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 20], [2023, 12], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 55);', '  assert.equal(exactP1Priority.length, 56);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 80);', '  assert.equal(exactUseExisting.length, 81);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(broker.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(broker.productionVerified, true);\n\n  const thePotAuFeu = resolved.candidates.find((candidate) => candidate.title === "The Pot-au-Feu");\n  assert.ok(thePotAuFeu);\n  assert.equal(thePotAuFeu.year, 2023);\n  assert.equal(thePotAuFeu.decision, "USE_EXISTING");\n  assert.equal(thePotAuFeu.scenarioId, "scenario_the_pot_au_feu_2023");\n  assert.equal(thePotAuFeu.matches, 1);\n  assert.equal(thePotAuFeu.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [path.join(root, "scripts/film-history-chapter-nineteen-atlas-audit.mjs")], { cwd: root, stdio: "inherit" });
execFileSync(process.execPath, [path.join(root, "scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs")], { cwd: root, stdio: "inherit" });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.expectedCount === NEXT_ATLAS && after.atlas?.actualCount === NEXT_ATLAS, `Expected ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas after materialization.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Expected ${NEXT_PV} Production Verification IDs after materialization.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Expected ${NEXT_CANDIDATES} Chapter 19 candidates after materialization.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING, `Expected ${NEXT_USE_EXISTING} USE_EXISTING candidates after materialization.`);
invariant(JSON.stringify(after.byDecision?.P2) === JSON.stringify(["Days", "The Green Knight"]), `P2 queue drifted: ${JSON.stringify(after.byDecision?.P2)}`);
invariant(after.byDecision?.P0?.length === 0 && after.byDecision?.P1?.length === 0 && after.byDecision?.EXISTING_REQUIRED?.length === 0, "Resolved Chapter 19 queue gained an unexpected unresolved decision.");
const candidate = after.candidates.find((item) => item.title === "The Pot-au-Feu");
invariant(candidate?.decision === "USE_EXISTING" && candidate?.scenarioId === SCENARIO_ID && candidate?.matches === 1 && candidate?.productionVerified === true, `The Pot-au-Feu candidate did not resolve to one production-verified identity: ${JSON.stringify(candidate)}`);
invariant(candidate?.origin === "chapterNineteenThePotAuFeuExpansion.ts", `Unexpected The Pot-au-Feu candidate origin: ${candidate?.origin}`);
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenThePotAuFeuExpansion.ts");
invariant(expansion?.definitions === 1 && expansion?.appended === 1 && expansion?.matchedExisting === 0, `The Pot-au-Feu expansion did not prove 1 definition / 1 append / 0 reuse: ${JSON.stringify(expansion)}`);
invariant(after.candidates.filter((item) => item.year === 2023).length === 12, "Chapter 19 2023 candidate bucket did not advance from 11 to 12.");
invariant(afterCannes.summary?.unresolvedFilms === 9 && afterCannes.summary?.missingCandidateFilms === 9, `Cannes unresolved census did not fall to 9/9: ${JSON.stringify(afterCannes.summary)}`);
invariant(afterCannes.correctiveQueue?.length === 9, `Expected 9 remaining Cannes corrective cases, found ${afterCannes.correctiveQueue?.length}.`);
invariant(!afterCannes.correctiveQueue.some((item) => item.title === "The Pot-au-Feu"), "The Pot-au-Feu remains in the Cannes corrective queue after materialization.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "Fallen Leaves" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", `Fallen Leaves is not the next Cannes queue leader: ${JSON.stringify(afterCannes.correctiveQueue?.[0])}`);
const after2023 = afterCannes.coverageByYear?.find((item) => item.year === 2023);
invariant(after2023?.unresolvedFilms === 4, `Cannes 2023 unresolved census did not fall from 5 to 4: ${JSON.stringify(after2023)}`);

console.log(`The Pot-au-Feu materialization proven: ${NEXT_ATLAS}/${NEXT_ATLAS} Atlas, ${NEXT_PV} PV, ${NEXT_CANDIDATES} candidates, ${NEXT_USE_EXISTING} USE_EXISTING, Cannes unresolved 9, next Fallen Leaves.`);
