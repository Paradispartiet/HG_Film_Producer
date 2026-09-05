import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_tori_and_lokita_2022";
const BASE_ATLAS = 601;
const BASE_PV = 601;
const BASE_CANDIDATES = 79;
const BASE_USE_EXISTING = 77;
const BASE_CANNES_UNRESOLVED = 13;
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Tori and Lokita.");
invariant(!before.candidates?.some((item) => item.title === "Tori and Lokita" || item.originalTitle === "Tori et Lokita" || item.scenarioId === SCENARIO_ID), "Tori and Lokita is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Tori and Lokita.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Tori and Lokita" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Tori and Lokita must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Holy Spider" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "Holy Spider must be second in the Cannes queue before Tori and Lokita materialization.");

const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenToriAndLokitaExpansion.ts",
  "src/core/chapterNineteenToriAndLokitaExpansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenToriAndLokita.ts",
  "src/ui/data/scenarioProductionVerificationToriAndLokita.ts",
  "scripts/TEMP-materialize-ch19-tori-and-lokita.mjs",
  ".github/workflows/TEMP-ch19-tori-and-lokita-materialize.yml",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json|yml)$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  const text = readFileSync(full, "utf8");
  if (text.includes(SCENARIO_ID)) identityHits.push(rel);
}
invariant(identityHits.length === 0, `Pre-existing Tori and Lokita scenario identity found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenTheEightMountainsExpansion } from "../../core/chapterNineteenTheEightMountainsExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenTheEightMountainsExpansion } from "../../core/chapterNineteenTheEightMountainsExpansion.js";\nimport { mergeChapterNineteenToriAndLokitaExpansion } from "../../core/chapterNineteenToriAndLokitaExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenTheEightMountainsScenarios = mergeChapterNineteenTheEightMountainsExpansion(chapterNineteenBoyFromHeavenScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenTheEightMountainsScenarios);',
  'const chapterNineteenTheEightMountainsScenarios = mergeChapterNineteenTheEightMountainsExpansion(chapterNineteenBoyFromHeavenScenarios);\nconst chapterNineteenToriAndLokitaScenarios = mergeChapterNineteenToriAndLokitaExpansion(chapterNineteenTheEightMountainsScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenToriAndLokitaScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_the_eight_mountains_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_the_eight_mountains_expansion_2026+manual_chapter_nineteen_tori_and_lokita_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { theEightMountainsFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheEightMountains";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { theEightMountainsFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheEightMountains";\nimport { toriAndLokitaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenToriAndLokita";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [theEightMountainsFilmHistoryProfile.scenarioId]: theEightMountainsFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [theEightMountainsFilmHistoryProfile.scenarioId]: theEightMountainsFilmHistoryProfile,\n  [toriAndLokitaFilmHistoryProfile.scenarioId]: toriAndLokitaFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { theEightMountainsProductionCaseVerification } from "./scenarioProductionVerificationTheEightMountains";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { theEightMountainsProductionCaseVerification } from "./scenarioProductionVerificationTheEightMountains";\nimport { toriAndLokitaProductionCaseVerification } from "./scenarioProductionVerificationToriAndLokita";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  theEightMountainsProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  theEightMountainsProductionCaseVerification,\n  toriAndLokitaProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenTheEightMountainsExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenTheEightMountainsExpansion.ts",\n  "chapterNineteenToriAndLokitaExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const theEightMountainsNeedles = [\'"title": "The Eight Mountains"\', \'title: "The Eight Mountains"\', \'"originalTitle": "Le otto montagne"\', \'Les Huit Montagnes\', \'scenario_the_eight_mountains_2022\'];\n',
  'const theEightMountainsNeedles = [\'"title": "The Eight Mountains"\', \'title: "The Eight Mountains"\', \'"originalTitle": "Le otto montagne"\', \'Les Huit Montagnes\', \'scenario_the_eight_mountains_2022\'];\nconst toriAndLokitaNeedles = [\'"title": "Tori and Lokita"\', \'title: "Tori and Lokita"\', \'"originalTitle": "Tori et Lokita"\', \'Tori & Lokita\', \'scenario_tori_and_lokita_2022\'];\n');

const candidateBlock = `const toriAndLokitaCandidate = \`
  {
    "title": "Tori and Lokita",
    "originalTitle": "Tori et Lokita",
    "year": 2022,
    "aliases": ["Tori & Lokita"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 75th Anniversary Prize source-first case: materialize one new Tori and Lokita/Tori et Lokita Atlas/PV identity after strict alias-aware reuse reconciliation; preserve Cannes productionYear 2022 separately from 2021 principal photography; lock the Liège/Wallonia 11-week location shoot, five-week rehearsal method, actor-height handheld RED Komodo/40mm system, RED Monstro low-light night configuration, sparse naturalistic lighting and diegetic-sound boundaries without inventing unsupported data, sound-hardware, finance or post detail."
  },\`;

`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', candidateBlock + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (theEightMountainsNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Eight Mountains/Le otto montagne; consolidate the wrapper deliberately before continuing.");\n',
  'if (theEightMountainsNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Eight Mountains/Le otto montagne; consolidate the wrapper deliberately before continuing.");\nif (toriAndLokitaNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Tori and Lokita/Tori et Lokita; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${theEightMountainsCandidate}`);',
  '${theEightMountainsCandidate}${toriAndLokitaCandidate}`);');

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 601, `Global Production Verification registry must contain exactly 601 unique scenarioIds after The Eight Mountains Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 602, `Global Production Verification registry must contain exactly 602 unique scenarioIds after Tori and Lokita Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 601, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 601.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 602, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 602.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 79, "Chapter 19 current candidate set must contain exactly 79 candidates after Cannes major-prizes reconciliation adds The Eight Mountains.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 80, "Chapter 19 current candidate set must contain exactly 80 candidates after Cannes major-prizes reconciliation adds Tori and Lokita.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 77 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 77 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 78 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 78 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const theEightMountains = chapter19.candidates.find((candidate) => candidate.title === "The Eight Mountains");\ninvariant(theEightMountains?.decision === "USE_EXISTING" && theEightMountains?.scenarioId === "scenario_the_eight_mountains_2022" && theEightMountains?.matches === 1 && theEightMountains?.productionVerified === true, "The Eight Mountains is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const theEightMountains = chapter19.candidates.find((candidate) => candidate.title === "The Eight Mountains");\ninvariant(theEightMountains?.decision === "USE_EXISTING" && theEightMountains?.scenarioId === "scenario_the_eight_mountains_2022" && theEightMountains?.matches === 1 && theEightMountains?.productionVerified === true, "The Eight Mountains is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst toriAndLokita = chapter19.candidates.find((candidate) => candidate.title === "Tori and Lokita");\ninvariant(toriAndLokita?.decision === "USE_EXISTING" && toriAndLokita?.scenarioId === "scenario_tori_and_lokita_2022" && toriAndLokita?.matches === 1 && toriAndLokita?.productionVerified === true, "Tori and Lokita is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract,
  '  "The Eight Mountains",\n  "Tenet",',
  '  "The Eight Mountains",\n  "Tori and Lokita",\n  "Tenet",',
  2);
replaceOnce(files.chapter19Contract,
  '  "The Eight Mountains",\n  "Nomadland",',
  '  "The Eight Mountains",\n  "Tori and Lokita",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 601;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 602;/);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.expectedCount, 601);', '  assert.equal(resolved.atlas.expectedCount, 602);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.actualCount, 601);', '  assert.equal(resolved.atlas.actualCount, 602);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 601);', '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 602);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy-nine candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 79);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 80);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.candidates.length, 79);', '  assert.equal(resolved.candidates.length, 80);');
replaceOnce(files.chapter19Contract,
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 17], [2023, 11], [2024, 12], [2025, 11]]);',
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 18], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 52);', '  assert.equal(exactP1Priority.length, 53);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 77);', '  assert.equal(exactUseExisting.length, 78);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(theEightMountains.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(theEightMountains.productionVerified, true);\n\n  const toriAndLokita = resolved.candidates.find((candidate) => candidate.title === "Tori and Lokita");\n  assert.ok(toriAndLokita);\n  assert.equal(toriAndLokita.year, 2022);\n  assert.equal(toriAndLokita.decision, "USE_EXISTING");\n  assert.equal(toriAndLokita.scenarioId, "scenario_tori_and_lokita_2022");\n  assert.equal(toriAndLokita.matches, 1);\n  assert.equal(toriAndLokita.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.actualCount === NEXT_ATLAS && after.atlas?.expectedCount === NEXT_ATLAS, `Tori and Lokita materialization did not produce exact ${NEXT_ATLAS}/${NEXT_ATLAS}.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Tori and Lokita materialization did not produce exact ${NEXT_PV} PV IDs.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Tori and Lokita materialization did not produce ${NEXT_CANDIDATES} candidates.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Post-materialization decision census is not 78 USE_EXISTING / 2 P2.");
const toriAndLokita = after.candidates.find((candidate) => candidate.title === "Tori and Lokita");
invariant(toriAndLokita?.scenarioId === SCENARIO_ID && toriAndLokita?.decision === "USE_EXISTING" && toriAndLokita?.matches === 1 && toriAndLokita?.productionVerified === true, "Tori and Lokita did not close as exactly one production-verified USE_EXISTING identity.");
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenToriAndLokitaExpansion.ts");
invariant(expansion?.definitions === 1 && expansion?.appended === 1 && expansion?.matchedExisting === 0, "Tori and Lokita expansion order must prove one genuinely appended scenario and zero reuse matches.");
invariant(after.candidates.filter((candidate) => candidate.year === 2022).length === 18, "2022 Chapter 19 candidate bucket did not advance from 17 to 18.");
invariant(afterCannes.technicalBaseline?.atlasExpected === NEXT_ATLAS && afterCannes.technicalBaseline?.atlasActual === NEXT_ATLAS && afterCannes.technicalBaseline?.productionVerificationIds === NEXT_PV && afterCannes.technicalBaseline?.chapterNineteenCandidates === NEXT_CANDIDATES, "Cannes technical baseline did not advance with Tori and Lokita.");
const toriObligations = afterCannes.obligations?.filter((item) => item.title === "Tori and Lokita") ?? [];
invariant(toriObligations.length > 0 && toriObligations.every((item) => item.status === "PRODUCTION_VERIFIED" && item.scenarioId === SCENARIO_ID && item.productionVerified === true && item.atlasMatches === 1), "Cannes Tori and Lokita obligation is not production-verified against one scenario identity.");
invariant(afterCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED - 1, "Cannes corrective queue did not shrink by exactly one film.");
invariant(!afterCannes.correctiveQueue?.some((item) => item.title === "Tori and Lokita"), "Tori and Lokita remains in the Cannes corrective queue after materialization.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "Holy Spider" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Holy Spider is not the next Cannes queue leader after Tori and Lokita.");
invariant(afterCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED - 1 && afterCannes.summary?.missingCandidateFilms === BASE_CANNES_UNRESOLVED - 1, "Cannes unresolved/missing film counts did not fall to 12.");
const p2 = [...(after.byDecision?.P2 ?? [])].sort();
invariant(JSON.stringify(p2) === JSON.stringify(["Days", "The Green Knight"].sort()), "Deferred P2 set changed during Tori and Lokita materialization.");

console.log(JSON.stringify({
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  productionVerificationIds: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2,
  toriAndLokita,
  expansion,
  cannesUnresolved: afterCannes.correctiveQueue.length,
  nextCannesLeader: afterCannes.correctiveQueue[0],
}, null, 2));
