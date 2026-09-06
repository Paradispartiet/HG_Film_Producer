import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_holy_spider_2022";
const BASE_ATLAS = 602;
const BASE_PV = 602;
const BASE_CANDIDATES = 80;
const BASE_USE_EXISTING = 78;
const BASE_CANNES_UNRESOLVED = 12;
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
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Holy Spider.");
invariant(!before.candidates?.some((item) => item.title === "Holy Spider" || item.originalTitle === "Holy Spider" || item.scenarioId === SCENARIO_ID), "Holy Spider is already present in the Chapter 19 candidate matrix; refusing duplicate materialization.");
invariant(beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Holy Spider.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Holy Spider" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Holy Spider must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Broker" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "Broker must be second in the Cannes queue before Holy Spider materialization.");

const allowedIdentityPaths = new Set([
  "src/core/chapterNineteenHolySpiderExpansion.ts",
  "src/core/chapterNineteenHolySpiderExpansion.test.ts",
  "src/ui/data/scenarioFilmStudyChapterNineteenHolySpider.ts",
  "src/ui/data/scenarioProductionVerificationHolySpider.ts",
  "scripts/TEMP-materialize-ch19-holy-spider.mjs",
  ".github/workflows/TEMP-ch19-holy-spider-materialize.yml",
]);
const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if ((!rel.startsWith("src/core/") && !rel.startsWith("src/ui/data/")) || !/\.ts$/.test(rel) || allowedIdentityPaths.has(rel)) continue;
  const text = readFileSync(full, "utf8");
  if (text.includes(SCENARIO_ID) || text.includes("Holy Spider") || text.includes("Les Nuits de Mashhad") || text.includes("Ankabut-e moqaddas") || text.includes("عنکبوت مقدس")) identityHits.push(rel);
}
invariant(identityHits.length === 0, `Pre-existing Holy Spider identity or alias found outside source-first files: ${identityHits.join(", ")}`);

replaceOnce(files.filmScenarios,
  'import { mergeChapterNineteenToriAndLokitaExpansion } from "../../core/chapterNineteenToriAndLokitaExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
  'import { mergeChapterNineteenToriAndLokitaExpansion } from "../../core/chapterNineteenToriAndLokitaExpansion.js";\nimport { mergeChapterNineteenHolySpiderExpansion } from "../../core/chapterNineteenHolySpiderExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n');
replaceOnce(files.filmScenarios,
  'const chapterNineteenToriAndLokitaScenarios = mergeChapterNineteenToriAndLokitaExpansion(chapterNineteenTheEightMountainsScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenToriAndLokitaScenarios);',
  'const chapterNineteenToriAndLokitaScenarios = mergeChapterNineteenToriAndLokitaExpansion(chapterNineteenTheEightMountainsScenarios);\nconst chapterNineteenHolySpiderScenarios = mergeChapterNineteenHolySpiderExpansion(chapterNineteenToriAndLokitaScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenHolySpiderScenarios);');
replaceOnce(files.filmScenarios,
  '+manual_chapter_nineteen_tori_and_lokita_expansion_2026+manual_chapter_nineteen_eo_expansion_2026',
  '+manual_chapter_nineteen_tori_and_lokita_expansion_2026+manual_chapter_nineteen_holy_spider_expansion_2026+manual_chapter_nineteen_eo_expansion_2026');

replaceOnce(files.filmStudyMap,
  'import { toriAndLokitaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenToriAndLokita";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
  'import { toriAndLokitaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenToriAndLokita";\nimport { holySpiderFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenHolySpider";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n');
replaceOnce(files.filmStudyMap,
  '  [toriAndLokitaFilmHistoryProfile.scenarioId]: toriAndLokitaFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n',
  '  [toriAndLokitaFilmHistoryProfile.scenarioId]: toriAndLokitaFilmHistoryProfile,\n  [holySpiderFilmHistoryProfile.scenarioId]: holySpiderFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n');

replaceOnce(files.pvRegistry,
  'import { toriAndLokitaProductionCaseVerification } from "./scenarioProductionVerificationToriAndLokita";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
  'import { toriAndLokitaProductionCaseVerification } from "./scenarioProductionVerificationToriAndLokita";\nimport { holySpiderProductionCaseVerification } from "./scenarioProductionVerificationHolySpider";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n');
replaceOnce(files.pvRegistry,
  '  toriAndLokitaProductionCaseVerification,\n  eoProductionCaseVerification,\n',
  '  toriAndLokitaProductionCaseVerification,\n  holySpiderProductionCaseVerification,\n  eoProductionCaseVerification,\n');

replaceOnce(files.productionAudit, `const EXPECTED_PLAYABLE_SCENARIOS = ${BASE_ATLAS};`, `const EXPECTED_PLAYABLE_SCENARIOS = ${NEXT_ATLAS};`);
replaceOnce(files.productionAudit, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${BASE_PV};`, `const EXPECTED_VERIFIED_PRODUCTION_CASES = ${NEXT_PV};`);
replaceOnce(files.productionAudit,
  '  "chapterNineteenToriAndLokitaExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n',
  '  "chapterNineteenToriAndLokitaExpansion.ts",\n  "chapterNineteenHolySpiderExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n');

replaceOnce(files.chapter19Audit, `const EXPECTED_ATLAS_COUNT = ${BASE_ATLAS};`, `const EXPECTED_ATLAS_COUNT = ${NEXT_ATLAS};`);
replaceOnce(files.chapter19Audit,
  'const toriAndLokitaNeedles = [\'"title": "Tori and Lokita"\', \'title: "Tori and Lokita"\', \'"originalTitle": "Tori et Lokita"\', \'Tori & Lokita\', \'scenario_tori_and_lokita_2022\'];\n',
  'const toriAndLokitaNeedles = [\'"title": "Tori and Lokita"\', \'title: "Tori and Lokita"\', \'"originalTitle": "Tori et Lokita"\', \'Tori & Lokita\', \'scenario_tori_and_lokita_2022\'];\nconst holySpiderNeedles = [\'"title": "Holy Spider"\', \'title: "Holy Spider"\', \'Les Nuits de Mashhad\', \'Ankabut-e moqaddas\', \'scenario_holy_spider_2022\'];\n');
const candidateBlock = `const holySpiderCandidate = \`
  {
    "title": "Holy Spider",
    "originalTitle": "Holy Spider",
    "year": 2022,
    "aliases": ["Les Nuits de Mashhad", "Ankabut-e moqaddas", "عنکبوت مقدس"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 Best Actress source-first case: materialize one new Holy Spider Atlas/PV identity after strict English/French/Persian alias-aware reuse reconciliation; preserve Cannes productionYear 2022 separately from the documented 35-day Jordan principal photography in 2021; lock the failed Iran/Turkey paths, Amman-for-Mashhad production, ALEXA Mini LF/Signature Prime evidence, 4K/2.39:1 catalogue format and explicit 115/117/118-minute runtime discrepancy without inventing unsupported budget, camera, lighting, sound, VFX or post detail."
  },\`;

`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', candidateBlock + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(files.chapter19Audit,
  'if (toriAndLokitaNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Tori and Lokita/Tori et Lokita; consolidate the wrapper deliberately before continuing.");\n',
  'if (toriAndLokitaNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Tori and Lokita/Tori et Lokita; consolidate the wrapper deliberately before continuing.");\nif (holySpiderNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Holy Spider/Les Nuits de Mashhad; consolidate the wrapper deliberately before continuing.");\n');
replaceOnce(files.chapter19Audit,
  '${toriAndLokitaCandidate}`);',
  '${toriAndLokitaCandidate}${holySpiderCandidate}`);');
replaceOnce(files.chapter19Audit,
  ".replace('auditDate: \"2026-08-28\"', 'auditDate: \"2026-09-05\"')",
  ".replace('auditDate: \"2026-08-28\"', 'auditDate: \"2026-09-06\"')");

replaceOnce(files.chapter18Completion,
  'invariant(verificationIds.size === 602, `Global Production Verification registry must contain exactly 602 unique scenarioIds after Tori and Lokita Chapter 19 materialization: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 603, `Global Production Verification registry must contain exactly 603 unique scenarioIds after Holy Spider Chapter 19 materialization: ${verificationIds.size}`);');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 602, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 602.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 603, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 603.");');
replaceOnce(files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 80, "Chapter 19 current candidate set must contain exactly 80 candidates after Cannes major-prizes reconciliation adds Tori and Lokita.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 81, "Chapter 19 current candidate set must contain exactly 81 candidates after Cannes major-prizes reconciliation adds Holy Spider.");');
replaceOnce(files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 78 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 78 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 79 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 79 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");');
replaceOnce(files.chapter18Completion,
  'const toriAndLokita = chapter19.candidates.find((candidate) => candidate.title === "Tori and Lokita");\ninvariant(toriAndLokita?.decision === "USE_EXISTING" && toriAndLokita?.scenarioId === "scenario_tori_and_lokita_2022" && toriAndLokita?.matches === 1 && toriAndLokita?.productionVerified === true, "Tori and Lokita is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const toriAndLokita = chapter19.candidates.find((candidate) => candidate.title === "Tori and Lokita");\ninvariant(toriAndLokita?.decision === "USE_EXISTING" && toriAndLokita?.scenarioId === "scenario_tori_and_lokita_2022" && toriAndLokita?.matches === 1 && toriAndLokita?.productionVerified === true, "Tori and Lokita is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst holySpider = chapter19.candidates.find((candidate) => candidate.title === "Holy Spider");\ninvariant(holySpider?.decision === "USE_EXISTING" && holySpider?.scenarioId === "scenario_holy_spider_2022" && holySpider?.matches === 1 && holySpider?.productionVerified === true, "Holy Spider is not closed as one new production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");');

replaceCount(files.chapter19Contract,
  '  "Tori and Lokita",\n  "Tenet",',
  '  "Tori and Lokita",\n  "Holy Spider",\n  "Tenet",',
  2);
replaceOnce(files.chapter19Contract,
  '  "Tori and Lokita",\n  "Nomadland",',
  '  "Tori and Lokita",\n  "Holy Spider",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 602;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 603;/);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.expectedCount, 602);', '  assert.equal(resolved.atlas.expectedCount, 603);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.atlas.actualCount, 602);', '  assert.equal(resolved.atlas.actualCount, 603);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 602);', '  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 603);');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly eighty candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly eighty-one candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 80);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 81);');
replaceOnce(files.chapter19Contract, '  assert.equal(resolved.candidates.length, 80);', '  assert.equal(resolved.candidates.length, 81);');
replaceOnce(files.chapter19Contract,
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 18], [2023, 11], [2024, 12], [2025, 11]]);',
  '  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 19], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 53);', '  assert.equal(exactP1Priority.length, 54);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 78);', '  assert.equal(exactUseExisting.length, 79);');
replaceOnce(files.chapter19Contract,
  '  assert.equal(toriAndLokita.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  assert.equal(toriAndLokita.productionVerified, true);\n\n  const holySpider = resolved.candidates.find((candidate) => candidate.title === "Holy Spider");\n  assert.ok(holySpider);\n  assert.equal(holySpider.year, 2022);\n  assert.equal(holySpider.decision, "USE_EXISTING");\n  assert.equal(holySpider.scenarioId, "scenario_holy_spider_2022");\n  assert.equal(holySpider.matches, 1);\n  assert.equal(holySpider.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");');

execFileSync(process.execPath, [files.chapter19Audit, `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
execFileSync(process.execPath, ["scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs", `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
invariant(after.atlas?.actualCount === NEXT_ATLAS && after.atlas?.expectedCount === NEXT_ATLAS, `Holy Spider materialization did not produce exact ${NEXT_ATLAS}/${NEXT_ATLAS}.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === NEXT_PV, `Holy Spider materialization did not produce exact ${NEXT_PV} PV IDs.`);
invariant(after.candidates?.length === NEXT_CANDIDATES, `Holy Spider materialization did not produce ${NEXT_CANDIDATES} candidates.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING && after.byDecision?.P2?.length === 2, "Post-materialization decision census is not 79 USE_EXISTING / 2 P2.");
const holySpider = after.candidates.find((candidate) => candidate.title === "Holy Spider");
invariant(holySpider?.scenarioId === SCENARIO_ID && holySpider?.decision === "USE_EXISTING" && holySpider?.matches === 1 && holySpider?.productionVerified === true, "Holy Spider did not close as exactly one production-verified USE_EXISTING identity.");
const expansion = after.atlas?.expansionOrder?.find((item) => item.fileName === "chapterNineteenHolySpiderExpansion.ts");
invariant(expansion?.definitions === 1 && expansion?.appended === 1 && expansion?.matchedExisting === 0, "Holy Spider expansion order must prove one genuinely appended scenario and zero reuse matches.");
invariant(after.candidates.filter((candidate) => candidate.year === 2022).length === 19, "2022 Chapter 19 candidate bucket did not advance from 18 to 19.");
invariant(afterCannes.technicalBaseline?.atlasExpected === NEXT_ATLAS && afterCannes.technicalBaseline?.atlasActual === NEXT_ATLAS && afterCannes.technicalBaseline?.productionVerificationIds === NEXT_PV && afterCannes.technicalBaseline?.chapterNineteenCandidates === NEXT_CANDIDATES, "Cannes technical baseline did not advance with Holy Spider.");
const holySpiderObligations = afterCannes.obligations?.filter((item) => item.title === "Holy Spider") ?? [];
invariant(holySpiderObligations.length > 0 && holySpiderObligations.every((item) => item.status === "PRODUCTION_VERIFIED" && item.scenarioId === SCENARIO_ID && item.productionVerified === true && item.atlasMatches === 1), "Cannes Holy Spider obligation is not production-verified against one scenario identity.");
invariant(afterCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED - 1, "Cannes corrective queue did not shrink by exactly one film.");
invariant(!afterCannes.correctiveQueue?.some((item) => item.title === "Holy Spider"), "Holy Spider remains in the Cannes corrective queue after materialization.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "Broker" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Broker is not the next Cannes queue leader after Holy Spider.");
invariant(afterCannes.summary?.unresolvedFilms === BASE_CANNES_UNRESOLVED - 1 && afterCannes.summary?.missingCandidateFilms === BASE_CANNES_UNRESOLVED - 1, "Cannes unresolved/missing film counts did not fall to 11.");
const p2 = [...(after.byDecision?.P2 ?? [])].sort();
invariant(JSON.stringify(p2) === JSON.stringify(["Days", "The Green Knight"].sort()), "Deferred P2 set changed during Holy Spider materialization.");

console.log(JSON.stringify({
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  productionVerificationIds: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2,
  holySpider,
  expansion,
  cannesUnresolved: afterCannes.correctiveQueue.length,
  nextCannesLeader: afterCannes.correctiveQueue[0],
}, null, 2));
