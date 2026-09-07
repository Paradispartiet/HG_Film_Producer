import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const resolved = JSON.parse(readFileSync(path.join(root, "docs/film-history-chapter-nineteen-atlas-resolved.json"), "utf8"));
const cannes = JSON.parse(readFileSync(path.join(root, "docs/film-history-chapter-nineteen-cannes-major-prizes-audit.json"), "utf8"));

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

invariant(resolved.atlas?.actualCount === 606 && resolved.atlas?.expectedCount === 606, `Expected locked Atlas 606/606, found ${resolved.atlas?.actualCount}/${resolved.atlas?.expectedCount}.`);
invariant(resolved.verificationIndex?.literalVerifiedScenarioIds === 606, `Expected 606 Production Verification IDs, found ${resolved.verificationIndex?.literalVerifiedScenarioIds}.`);
invariant(resolved.candidates?.length === 85, `Expected 85 Chapter 19 candidates, found ${resolved.candidates?.length}.`);
invariant(resolved.byDecision?.USE_EXISTING?.length === 83, `Expected 83 USE_EXISTING candidates, found ${resolved.byDecision?.USE_EXISTING?.length}.`);
invariant(resolved.byDecision?.P2?.length === 2, `Expected 2 P2 candidates, found ${resolved.byDecision?.P2?.length}.`);
invariant(cannes.summary?.unresolvedFilms === 7, `Expected 7 unresolved Cannes films, found ${cannes.summary?.unresolvedFilms}.`);
invariant(cannes.correctiveQueue?.[0]?.title === "About Dry Grasses", `Expected About Dry Grasses as Cannes queue leader, found ${cannes.correctiveQueue?.[0]?.title}.`);
const cannes2023 = cannes.coverageByYear?.find((item) => item.year === 2023);
invariant(cannes2023?.unresolvedFilms === 2, `Expected 2 unresolved Cannes 2023 films, found ${cannes2023?.unresolvedFilms}.`);

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const probes = [
  "About Dry Grasses",
  "Kuru Otlar Üstüne",
  "Kuru Otlar Ustune",
  "Kuru Otlar",
  "Nuri Bilge Ceylan",
  "scenario_about_dry_grasses_2023",
  "scenario_kuru_otlar_ustune_2023",
];
const normalizedProbes = probes.map((probe) => [probe, normalize(probe)]);
const roots = ["src/core", "src/ui/data", "data"];
const extensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json"]);

function walk(directory, files = []) {
  for (const name of readdirSync(directory)) {
    const full = path.join(directory, name);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else if (extensions.has(path.extname(name))) files.push(full);
  }
  return files;
}

const hits = [];
for (const relativeRoot of roots) {
  for (const full of walk(path.join(root, relativeRoot))) {
    const relative = path.relative(root, full).replaceAll("\\", "/");
    const source = readFileSync(full, "utf8");
    const normalized = normalize(source);
    const matched = normalizedProbes.filter(([, probe]) => normalized.includes(probe)).map(([label]) => label);
    if (matched.length) hits.push({ path: relative, matched });
  }
}

const identityHits = hits.filter(({ path: filePath }) =>
  filePath.startsWith("src/core/") ||
  filePath.startsWith("src/ui/data/scenarioFilmStudy") ||
  filePath.startsWith("src/ui/data/scenarioProductionVerification") ||
  filePath.endsWith("film_scenarios_seed.json")
);

console.log(JSON.stringify({
  baseline: {
    atlas: `${resolved.atlas.actualCount}/${resolved.atlas.expectedCount}`,
    productionVerificationIds: resolved.verificationIndex.literalVerifiedScenarioIds,
    candidates: resolved.candidates.length,
    useExisting: resolved.byDecision.USE_EXISTING.length,
    p2: resolved.byDecision.P2.length,
    cannesUnresolved: cannes.summary.unresolvedFilms,
    cannes2023Unresolved: cannes2023.unresolvedFilms,
    queueLeader: cannes.correctiveQueue[0].title,
  },
  probes,
  hits,
  identityHits,
  identityHitCount: identityHits.length,
  classification: identityHits.length === 0 ? "NO_CANONICAL_IDENTITY_HIT" : "REUSE_REQUIRES_MANUAL_RESOLUTION",
}, null, 2));
