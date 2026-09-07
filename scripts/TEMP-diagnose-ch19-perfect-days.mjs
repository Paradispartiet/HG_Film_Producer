import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const probeRoots = ["src/core", "src/ui/data", "data"];
const probes = [
  "Perfect Days",
  "Perfect Days 2023",
  "Wim Wenders",
  "scenario_perfect_days_2023",
  "scenario_perfect_days_wenders_2023",
  "Yakusho",
];

const normalize = (value) => String(value ?? "")
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const normalizedProbes = probes.map((probe) => [probe, normalize(probe)]);
const files = [];
function walk(relativePath) {
  const absolutePath = path.join(root, relativePath);
  for (const name of readdirSync(absolutePath)) {
    const childRelative = path.join(relativePath, name);
    const childAbsolute = path.join(root, childRelative);
    const stat = statSync(childAbsolute);
    if (stat.isDirectory()) walk(childRelative);
    else if (/\.(?:ts|tsx|js|mjs|json|md)$/i.test(name)) files.push(childRelative);
  }
}
for (const probeRoot of probeRoots) walk(probeRoot);

const hits = [];
for (const relativePath of files) {
  const source = readFileSync(path.join(root, relativePath), "utf8");
  const normalizedSource = normalize(source);
  const matched = normalizedProbes.filter(([, normalizedProbe]) => normalizedSource.includes(normalizedProbe)).map(([probe]) => probe);
  if (matched.length) hits.push({ path: relativePath, matched });
}

const cannes = JSON.parse(readFileSync(path.join(root, "docs/film-history-chapter-nineteen-cannes-major-prizes-audit.json"), "utf8"));
const atlas = JSON.parse(readFileSync(path.join(root, "docs/film-history-chapter-nineteen-atlas-resolved.json"), "utf8"));
const baseline = {
  atlas: `${cannes.technicalBaseline.atlasActual}/${cannes.technicalBaseline.atlasExpected}`,
  productionVerificationIds: cannes.technicalBaseline.productionVerificationIds,
  candidates: cannes.technicalBaseline.chapterNineteenCandidates,
  useExisting: atlas.byDecision?.USE_EXISTING?.length ?? null,
  p2: atlas.byDecision?.P2?.length ?? null,
  cannesUnresolved: cannes.summary.unresolvedFilms,
  cannes2023Unresolved: cannes.coverageByYear?.find((item) => item.year === 2023)?.unresolvedFilms ?? null,
  queueLeader: cannes.correctiveQueue?.[0]?.title ?? null,
};

if (baseline.atlas !== "607/607") throw new Error(`Expected locked 607/607 baseline, got ${baseline.atlas}`);
if (baseline.productionVerificationIds !== 607) throw new Error(`Expected 607 PV IDs, got ${baseline.productionVerificationIds}`);
if (baseline.candidates !== 86) throw new Error(`Expected 86 candidates, got ${baseline.candidates}`);
if (baseline.useExisting !== 84 || baseline.p2 !== 2) throw new Error(`Expected 84 USE_EXISTING / 2 P2, got ${baseline.useExisting}/${baseline.p2}`);
if (baseline.cannesUnresolved !== 6 || baseline.cannes2023Unresolved !== 1) throw new Error(`Expected Cannes unresolved 6 / 2023 unresolved 1, got ${baseline.cannesUnresolved}/${baseline.cannes2023Unresolved}`);
if (baseline.queueLeader !== "Perfect Days") throw new Error(`Expected Perfect Days queue leader, got ${baseline.queueLeader}`);

const strongIdentityProbes = new Set(["Perfect Days", "Perfect Days 2023", "scenario_perfect_days_2023", "scenario_perfect_days_wenders_2023"]);
const strongHits = hits.map((hit) => ({ ...hit, matched: hit.matched.filter((probe) => strongIdentityProbes.has(probe)) })).filter((hit) => hit.matched.length);

console.log(JSON.stringify({ baseline, probes, hits, strongHits, classification: strongHits.length ? "REUSE_REQUIRES_MANUAL_RESOLUTION" : "NO_STRONG_IDENTITY_HIT" }, null, 2));
