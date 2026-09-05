import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const SCENARIO_ID = "scenario_close_2022";
const BASE_ATLAS = 598;
const BASE_PV = 598;
const BASE_CANDIDATES = 75;
const BASE_USE_EXISTING = 73;
const BASE_CANNES_UNRESOLVED = 17;
const NEXT_CANDIDATES = BASE_CANDIDATES + 1;
const NEXT_USE_EXISTING = BASE_USE_EXISTING + 1;

const files = {
  chapter19Audit: "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  chapter18Completion: "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  chapter19Contract: "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  chapter19Resolved: "docs/film-history-chapter-nineteen-atlas-resolved.json",
  cannesResolved: "docs/film-history-chapter-nineteen-cannes-major-prizes-audit.json",
  filmStudy: "src/ui/data/scenarioFilmStudyClose.ts",
  productionVerification: "src/ui/data/scenarioProductionVerificationClose.ts",
  filmStudyCatalog: "src/ui/data/scenarioFilmStudyPriorityIndieFinalCatalog.ts",
  productionVerificationBatch: "src/ui/data/scenarioProductionVerificationPriorityIndieFinalBatch.ts",
  sourceExpansion: "src/core/italyFranceGermanyBeneluxExpansion.ts",
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
const beforeExpansionOrder = JSON.stringify(before.atlas?.expansionOrder ?? []);

invariant(before.atlas?.actualCount === BASE_ATLAS && before.atlas?.expectedCount === BASE_ATLAS, `Expected committed ${BASE_ATLAS}/${BASE_ATLAS} Atlas baseline.`);
invariant(before.verificationIndex?.literalVerifiedScenarioIds === BASE_PV, `Expected committed ${BASE_PV} PV baseline.`);
invariant(before.candidates?.length === BASE_CANDIDATES, `Expected ${BASE_CANDIDATES} Chapter 19 candidates.`);
invariant(before.byDecision?.USE_EXISTING?.length === BASE_USE_EXISTING && before.byDecision?.P2?.length === 2, "Unexpected committed decision census before Close reconciliation.");
invariant(!before.candidates?.some((item) => item.title === "Close"), "Close is already present in the Chapter 19 candidate matrix; refusing duplicate reconciliation.");
invariant(beforeCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED, `Expected ${BASE_CANNES_UNRESOLVED} unresolved Cannes films before Close.`);
invariant(beforeCannes.correctiveQueue?.[0]?.title === "Close" && beforeCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Close must be the first unresolved Cannes film and enter as MISSING_CANDIDATE.");
invariant(beforeCannes.correctiveQueue?.[1]?.title === "Stars at Noon" && beforeCannes.correctiveQueue?.[1]?.status === "MISSING_CANDIDATE", "Stars at Noon must be second in the Cannes queue before Close reconciliation.");

invariant(read(files.sourceExpansion).includes(`id: "${SCENARIO_ID}"`) && read(files.sourceExpansion).includes('title: "Close"'), "Canonical scenario_close_2022 is missing from the Italy/France/Germany/Benelux expansion.");
invariant(read(files.filmStudy).includes(`scenarioId: "${SCENARIO_ID}"`), "Close Film Study identity is missing.");
invariant(read(files.productionVerification).includes(`scenarioId: "${SCENARIO_ID}"`) && read(files.productionVerification).includes('status: "verified"'), "Close Production Verification identity is missing or unverified.");
invariant(read(files.filmStudyCatalog).includes("closeFilmHistoryProfile") && read(files.filmStudyCatalog).includes("closeFilmHistoryProfile.scenarioId"), "Close Film Study is not wired into the runtime catalog.");
invariant(read(files.productionVerificationBatch).includes("closeProductionCaseVerification"), "Close Production Verification is not wired into the verification batch.");

const identityHits = [];
for (const full of walk(root)) {
  const rel = path.relative(root, full).replaceAll("\\", "/");
  if (!/\.(?:ts|mjs|json|yml)$/.test(rel)) continue;
  const source = readFileSync(full, "utf8");
  if (source.includes(SCENARIO_ID)) identityHits.push(rel);
}
invariant(identityHits.includes(files.sourceExpansion), "Close canonical source identity census lost the expansion definition.");
invariant(identityHits.includes(files.filmStudy), "Close identity census lost the Film Study.");
invariant(identityHits.includes(files.productionVerification), "Close identity census lost Production Verification.");

replaceOnce(
  files.chapter19Audit,
  'const nitramNeedles = [\'"title": "Nitram"\', \'title: "Nitram"\', \'scenario_nitram_2021\'];\n',
  'const nitramNeedles = [\'"title": "Nitram"\', \'title: "Nitram"\', \'scenario_nitram_2021\'];\nconst closeNeedles = [\'"title": "Close"\', \'title: "Close"\', \'scenario_close_2022\'];\n',
);

const closeCandidateBlock = `const closeCandidate = \`\n  {\n    "title": "Close",\n    "originalTitle": "Close",\n    "year": 2022,\n    "aliases": [],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Cannes 2022 joint Grand Prix reconciliation: reuse the existing canonical scenario_close_2022, its source-backed 17-area Film Study and verified Production Case from the Italy/France/Germany/Benelux expansion instead of materializing a duplicate Atlas/PV identity."\n  },\`;\n\n`;
replaceOnce(files.chapter19Audit, 'const baseSource = readFileSync(basePath, "utf8");\n', closeCandidateBlock + 'const baseSource = readFileSync(basePath, "utf8");\n');
replaceOnce(
  files.chapter19Audit,
  'if (nitramNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Nitram; consolidate the wrapper deliberately before continuing.");\n',
  'if (nitramNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Nitram; consolidate the wrapper deliberately before continuing.");\nif (closeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Close; consolidate the wrapper deliberately before continuing.");\n',
);
replaceOnce(
  files.chapter19Audit,
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}${nitramCandidate}`);',
  '${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}${nitramCandidate}${closeCandidate}`);',
);

replaceOnce(
  files.chapter18Completion,
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 75, "Chapter 19 current candidate set must contain exactly 75 candidates after Cannes major-prizes reconciliation adds Nitram.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 76, "Chapter 19 current candidate set must contain exactly 76 candidates after Cannes major-prizes reconciliation reuses Close.");',
);
replaceOnce(
  files.chapter18Completion,
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 73 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 73 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 74 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 74 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  files.chapter18Completion,
  'const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");\n',
  'const close = chapter19.candidates.find((candidate) => candidate.title === "Close");\ninvariant(close?.decision === "USE_EXISTING" && close?.scenarioId === "scenario_close_2022" && close?.matches === 1 && close?.productionVerified === true, "Close is not reconciled as one existing production-verified Chapter 19 Cannes major-prizes case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");\n',
);

replaceCount(files.chapter19Contract, '  "Nitram",\n  "Tenet",', '  "Nitram",\n  "Close",\n  "Tenet",', 2);
replaceOnce(files.chapter19Contract, '  "Nitram",\n  "Nomadland",', '  "Nitram",\n  "Close",\n  "Nomadland",');
replaceOnce(files.chapter19Contract, 'test("Chapter 19 locks exactly seventy-five candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly seventy-six candidates across 2020-2025", () => {');
replaceOnce(files.chapter19Contract, '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 75);\n  assert.equal(resolved.candidates.length, 75);\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 13], [2023, 11], [2024, 12], [2025, 11]]);', '  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 76);\n  assert.equal(resolved.candidates.length, 76);\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 17], [2022, 14], [2023, 11], [2024, 12], [2025, 11]]);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactP1Priority.length, 48);', '  assert.equal(exactP1Priority.length, 49);');
replaceOnce(files.chapter19Contract, '  assert.equal(exactUseExisting.length, 73);', '  assert.equal(exactUseExisting.length, 74);');
replaceOnce(
  files.chapter19Contract,
  '  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");\n',
  '  const close = resolved.candidates.find((candidate) => candidate.title === "Close");\n  assert.ok(close);\n  assert.equal(close.year, 2022);\n  assert.equal(close.decision, "USE_EXISTING");\n  assert.equal(close.scenarioId, "scenario_close_2022");\n  assert.equal(close.matches, 1);\n  assert.equal(close.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");\n',
);

execFileSync(process.execPath, [path.join(root, files.chapter19Audit), `--write=${files.chapter19Resolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
execFileSync(process.execPath, [path.join(root, "scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs"), `--write=${files.cannesResolved}`], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });

const after = readJson(files.chapter19Resolved);
const afterCannes = readJson(files.cannesResolved);
const closeCandidate = after.candidates?.find((item) => item.title === "Close");
const closeObligation = afterCannes.obligations?.find((item) => item.title === "Close" && item.awardYear === 2022);

invariant(after.atlas?.expectedCount === BASE_ATLAS && after.atlas?.actualCount === BASE_ATLAS, `Close reconciliation must keep Atlas at ${BASE_ATLAS}/${BASE_ATLAS}.`);
invariant(after.verificationIndex?.literalVerifiedScenarioIds === BASE_PV, `Close reconciliation must keep Production Verification IDs at ${BASE_PV}.`);
invariant(JSON.stringify(after.atlas?.expansionOrder ?? []) === beforeExpansionOrder, "Close reconciliation changed Atlas expansion order; refusing a hidden materialization.");
invariant(after.candidates?.length === NEXT_CANDIDATES, `Close reconciliation must produce ${NEXT_CANDIDATES} candidates.`);
invariant(after.byDecision?.USE_EXISTING?.length === NEXT_USE_EXISTING, `Close reconciliation must produce ${NEXT_USE_EXISTING} USE_EXISTING candidates.`);
invariant(after.byDecision?.P2?.length === 2 && after.byDecision.P2.includes("Days") && after.byDecision.P2.includes("The Green Knight"), "Close reconciliation changed the intentional P2 queue.");
invariant(closeCandidate?.scenarioId === SCENARIO_ID && closeCandidate?.decision === "USE_EXISTING" && closeCandidate?.matches === 1 && closeCandidate?.productionVerified === true, "Close did not reconcile to exactly one existing production-verified scenario.");
invariant(closeCandidate?.origin === "italyFranceGermanyBeneluxExpansion.ts", `Close resolved from unexpected origin: ${closeCandidate?.origin}`);
invariant(afterCannes.technicalBaseline?.atlasExpected === BASE_ATLAS && afterCannes.technicalBaseline?.atlasActual === BASE_ATLAS && afterCannes.technicalBaseline?.productionVerificationIds === BASE_PV, "Cannes audit technical baseline changed during reuse reconciliation.");
invariant(afterCannes.technicalBaseline?.chapterNineteenCandidates === NEXT_CANDIDATES, "Cannes audit did not observe the new Close candidate.");
invariant(closeObligation?.candidateDecision === "USE_EXISTING" && closeObligation?.scenarioId === SCENARIO_ID && closeObligation?.atlasMatches === 1 && closeObligation?.productionVerified === true && closeObligation?.status === "PRODUCTION_VERIFIED", "Close Cannes obligation did not close as PRODUCTION_VERIFIED.");
invariant(afterCannes.correctiveQueue?.length === BASE_CANNES_UNRESOLVED - 1, "Close reconciliation did not reduce the Cannes corrective queue by exactly one.");
invariant(afterCannes.correctiveQueue?.[0]?.title === "Stars at Noon" && afterCannes.correctiveQueue?.[0]?.status === "MISSING_CANDIDATE", "Stars at Noon is not the next Cannes queue leader after Close.");
invariant(!afterCannes.correctiveQueue?.some((item) => item.title === "Close"), "Close remains in the Cannes corrective queue after reconciliation.");

console.log(JSON.stringify({
  close: { scenarioId: closeCandidate.scenarioId, decision: closeCandidate.decision, matches: closeCandidate.matches, productionVerified: closeCandidate.productionVerified, origin: closeCandidate.origin },
  atlas: `${after.atlas.actualCount}/${after.atlas.expectedCount}`,
  productionVerificationIds: after.verificationIndex.literalVerifiedScenarioIds,
  candidates: after.candidates.length,
  useExisting: after.byDecision.USE_EXISTING.length,
  p2: after.byDecision.P2,
  cannesCorrectiveQueue: afterCannes.correctiveQueue.length,
  nextCannesLeader: afterCannes.correctiveQueue[0]?.title ?? null,
}, null, 2));
