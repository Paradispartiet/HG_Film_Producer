import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const dataDirectory = path.join(root, "src", "ui", "data");
const resolvedPath = path.join(root, "docs", "film-history-chapter-eighteen-atlas-resolved.json");
const completionPath = path.join(root, "docs", "film-history-chapter-eighteen-completion.json");
const chapter19ResolvedPath = path.join(root, "docs", "film-history-chapter-nineteen-atlas-resolved.json");
const filmStudyCoveragePath = path.join(root, "src", "core", "filmStudyCoverage.ts");
const filmStudyMapPath = path.join(dataDirectory, "scenarioFilmStudyMap.ts");

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function readJson(filePath) {
  return JSON.parse(readText(filePath));
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function collectLiteralScenarioIds(filePrefix) {
  const ids = [];
  for (const fileName of readdirSync(dataDirectory)) {
    if (!fileName.startsWith(filePrefix) || !fileName.endsWith(".ts")) continue;
    const source = readText(path.join(dataDirectory, fileName));
    for (const match of source.matchAll(/scenarioId\s*:\s*"([^"]+)"/g)) ids.push(match[1]);
  }
  return ids;
}

function listNames(directory) {
  return readdirSync(path.join(root, directory)).map((name) => `${directory}/${name}`);
}

const resolved = readJson(resolvedPath);
const completion = readJson(completionPath);
const chapter19 = readJson(chapter19ResolvedPath);

invariant(resolved.chapter?.number === 18, "Chapter 18 completion audit must read the Chapter 18 resolved Atlas.");
invariant(resolved.chapter?.period === "2000–2019", "Chapter 18 period drifted from 2000–2019.");
invariant(resolved.atlas?.expectedCount === 539, `Chapter 18 expected Atlas count drifted: ${resolved.atlas?.expectedCount}`);
invariant(resolved.atlas?.actualCount === 539, `Chapter 18 Atlas is not closed at 539/539: ${resolved.atlas?.actualCount}`);
invariant(resolved.verificationIndex?.literalVerifiedScenarioIds === 539, `Production Verification census is not closed at 539: ${resolved.verificationIndex?.literalVerifiedScenarioIds}`);
invariant(Array.isArray(resolved.candidates) && resolved.candidates.length === 82, `Chapter 18 candidate census is not 82: ${resolved.candidates?.length}`);
invariant(resolved.byDecision?.USE_EXISTING?.length === 82, `Chapter 18 USE_EXISTING census is not 82: ${resolved.byDecision?.USE_EXISTING?.length}`);
for (const decision of ["P0", "P1", "P2", "EXISTING_REQUIRED"]) {
  invariant(Array.isArray(resolved.byDecision?.[decision]) && resolved.byDecision[decision].length === 0, `Chapter 18 ${decision} queue is not empty.`);
}
invariant(Array.isArray(resolved.recommendedNewProductionCases) && resolved.recommendedNewProductionCases.length === 0, "Chapter 18 still recommends new Production Cases.");

const candidateScenarioIds = resolved.candidates.map((candidate) => candidate.scenarioId);
invariant(candidateScenarioIds.every((scenarioId) => typeof scenarioId === "string" && scenarioId.length > 0), "Every Chapter 18 candidate must resolve to a canonical scenarioId.");
invariant(new Set(candidateScenarioIds).size === 82, "Chapter 18 candidate scenarioIds are not unique.");
invariant(resolved.candidates.every((candidate) => candidate.decision === "USE_EXISTING" && candidate.matches === 1 && candidate.productionVerified === true), "Every Chapter 18 candidate must be one matched, production-verified USE_EXISTING case.");

const literalVerificationIds = collectLiteralScenarioIds("scenarioProductionVerification");
const verificationIds = new Set(literalVerificationIds);
invariant(verificationIds.size === 544, `Global Production Verification registry must contain exactly 544 unique scenarioIds after the fifth Chapter 19 case: ${verificationIds.size}`);
invariant(candidateScenarioIds.every((scenarioId) => verificationIds.has(scenarioId)), "At least one Chapter 18 candidate is missing its Production Verification record.");

const literalFilmStudyIds = collectLiteralScenarioIds("scenarioFilmStudy");
const filmStudyIds = new Set(literalFilmStudyIds);
invariant(candidateScenarioIds.every((scenarioId) => filmStudyIds.has(scenarioId)), "At least one Chapter 18 candidate is missing its source-backed Film Study profile.");

const filmStudyCoverageSource = readText(filmStudyCoveragePath);
const filmStudyAreaIds = [...filmStudyCoverageSource.matchAll(/\{ id: "([^"]+)", label: "[^"]+", group: "(?:history|craft)" \}/g)].map((match) => match[1]);
invariant(filmStudyAreaIds.length === 17, `Film Study coverage contract drifted from 17 areas: ${filmStudyAreaIds.length}`);
invariant(new Set(filmStudyAreaIds).size === 17, "Film Study area IDs are not unique.");
invariant(readText(filmStudyMapPath).includes("const coverage = completeFilmStudyCoverage("), "Film Study map no longer completes every profile through the 17-area coverage contract.");

const inspectedPermanentPaths = [
  ...listNames(".github/workflows"),
  ...listNames("scripts"),
  ...listNames("docs"),
];
const forbiddenTemporaryPaths = inspectedPermanentPaths.filter((filePath) =>
  /(?:^|\/)TEMP-|chapter[-_ ]?18.*(?:materializ|diagnostic)|ch18.*(?:materializ|diagnostic)|the[-_ ]new[-_ ]world.*diagnostic/i.test(filePath),
);
invariant(forbiddenTemporaryPaths.length === 0, `Temporary artifacts remain: ${forbiddenTemporaryPaths.join(", ")}`);

invariant(completion.schemaVersion === "1.0", "Chapter 18 completion schemaVersion must remain 1.0.");
invariant(completion.status === "complete", "Chapter 18 canonical completion status is not complete.");
invariant(completion.completedOn === "2026-08-28", "Chapter 18 completion date drifted.");
invariant(completion.chapter?.number === 18 && completion.chapter?.id === resolved.chapter.id && completion.chapter?.period === resolved.chapter.period, "Chapter 18 completion metadata does not match the resolved Atlas.");
invariant(completion.baseline?.mainCommitBeforeClosure === "a2568689cb4414ebeaea7764aeb0dc6194a8d09a", "Chapter 18 completion baseline no longer points to the post-The-New-World main commit.");
invariant(completion.proof?.atlas === "539/539", "Chapter 18 completion proof must lock the 539/539 Atlas.");
invariant(completion.proof?.candidateCount === 82 && completion.proof?.useExistingCount === 82, "Chapter 18 completion proof must lock all 82 candidates as USE_EXISTING.");
invariant(completion.proof?.productionVerifiedScenarioIds === 539, "Chapter 18 completion proof must lock 539 Production Verification IDs.");
invariant(completion.proof?.filmStudyAreaCount === 17, "Chapter 18 completion proof must lock the 17-area Film Study contract.");
invariant(completion.proof?.unresolved?.P0 === 0 && completion.proof?.unresolved?.P1 === 0 && completion.proof?.unresolved?.P2 === 0 && completion.proof?.unresolved?.EXISTING_REQUIRED === 0, "Chapter 18 completion proof contains an unresolved queue.");
invariant(completion.proof?.allCandidatesProductionVerified === true, "Chapter 18 completion proof must require Production Verification for every candidate.");
invariant(completion.proof?.allCandidatesHaveFilmStudy === true, "Chapter 18 completion proof must require Film Study coverage for every candidate.");
invariant(completion.proof?.temporaryArtifacts === 0, "Chapter 18 completion proof must require zero temporary artifacts.");

invariant(chapter19.status === "foundation_established", "Chapter 19 source-first foundation is not established.");
invariant(chapter19.chapter?.number === 19 && chapter19.chapter?.period === "2020–present" && chapter19.chapter?.candidateBaseline === "2020–2025", "Chapter 19 scope or candidate baseline drifted.");
invariant(chapter19.governance?.openCurrentPeriod === true && chapter19.governance?.currentYearExcludedFromFrozenBaseline === 2026, "Chapter 19 must remain an open current-period chapter with 2026 excluded from the frozen baseline.");
invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 544, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 544.");
invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 60, "Chapter 19 foundation must contain exactly 60 baseline candidates.");
invariant(chapter19.byDecision?.USE_EXISTING?.length === 12 && chapter19.byDecision?.P0?.length === 17 && chapter19.byDecision?.P1?.length === 27 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 12 USE_EXISTING / 17 P0 / 27 P1 / 4 P2 / 0 EXISTING_REQUIRED.");
const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");
invariant(tenet?.decision === "USE_EXISTING" && tenet?.scenarioId === "scenario_tenet_2020" && tenet?.matches === 1 && tenet?.productionVerified === true, "Tenet is not closed as the first production-verified Chapter 19 USE_EXISTING case.");
const soul = chapter19.candidates.find((candidate) => candidate.title === "Soul");
invariant(soul?.decision === "USE_EXISTING" && soul?.scenarioId === "scenario_soul_2020" && soul?.matches === 1 && soul?.productionVerified === true, "Soul is not closed as the second production-verified Chapter 19 USE_EXISTING case.");
const wolfwalkers = chapter19.candidates.find((candidate) => candidate.title === "Wolfwalkers");
invariant(wolfwalkers?.decision === "USE_EXISTING" && wolfwalkers?.scenarioId === "scenario_wolfwalkers_2020" && wolfwalkers?.matches === 1 && wolfwalkers?.productionVerified === true, "Wolfwalkers is not closed as the third production-verified Chapter 19 USE_EXISTING case.");
const dune = chapter19.candidates.find((candidate) => candidate.title === "Dune");
invariant(dune?.decision === "USE_EXISTING" && dune?.scenarioId === "scenario_dune_2021" && dune?.matches === 1 && dune?.productionVerified === true, "Dune is not closed as the fourth production-verified Chapter 19 USE_EXISTING case.");
const flee = chapter19.candidates.find((candidate) => candidate.title === "Flee");
invariant(flee?.decision === "USE_EXISTING" && flee?.scenarioId === "scenario_flee_2021" && flee?.matches === 1 && flee?.productionVerified === true, "Flee is not closed as the fifth production-verified Chapter 19 USE_EXISTING case.");

invariant(completion.nextPhase?.status === "foundation_established" && completion.nextPhase?.chapter === 19 && completion.nextPhase?.firstDeliverable === "source-first scope and candidate matrix", "Chapter 18 handoff must point to the established Chapter 19 source-first matrix.");
invariant(completion.nextPhase?.firstDeliverablePath === "docs/film-history-chapter-nineteen-atlas-resolved.json", "Chapter 18 handoff must point to the canonical Chapter 19 resolved matrix.");
invariant(completion.nextPhase?.productionCasesMayStartAfterMatrix === true, "Chapter 19 Production Cases must remain gated on the established matrix.");

console.log(JSON.stringify({
  chapter: 18,
  status: completion.status,
  atlas: completion.proof.atlas,
  candidates: completion.proof.candidateCount,
  useExisting: completion.proof.useExistingCount,
  productionVerifiedScenarioIds: verificationIds.size,
  filmStudyAreaCount: filmStudyAreaIds.length,
  unresolved: completion.proof.unresolved,
  temporaryArtifacts: forbiddenTemporaryPaths.length,
  nextPhase: completion.nextPhase,
  chapter19Foundation: {
    status: chapter19.status,
    candidates: chapter19.candidates.length,
    byDecision: Object.fromEntries(Object.entries(chapter19.byDecision).map(([key, value]) => [key, value.length])),
  },
}, null, 2));