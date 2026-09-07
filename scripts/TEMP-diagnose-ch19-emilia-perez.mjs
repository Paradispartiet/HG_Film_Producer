import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const probeRoots = ["src/core", "src/ui/data", "data"];
const probes = [
  "Emilia Pérez",
  "Emilia Perez",
  "Jacques Audiard",
  "scenario_emilia_perez_2024",
  "scenario_emilia_perez_audiard_2024",
  "Karla Sofía Gascón",
  "Karla Sofia Gascon",
  "Zoe Saldana",
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
  cannes2024Unresolved: cannes.coverageByYear?.find((item) => item.year === 2024)?.unresolvedFilms ?? null,
  queueLeader: cannes.correctiveQueue?.[0]?.title ?? null,
};

if (baseline.atlas !== "608/608") throw new Error(`Expected locked 608/608 baseline, got ${baseline.atlas}`);
if (baseline.productionVerificationIds !== 608) throw new Error(`Expected 608 PV IDs, got ${baseline.productionVerificationIds}`);
if (baseline.candidates !== 87) throw new Error(`Expected 87 candidates, got ${baseline.candidates}`);
if (baseline.useExisting !== 85 || baseline.p2 !== 2) throw new Error(`Expected 85 USE_EXISTING / 2 P2, got ${baseline.useExisting}/${baseline.p2}`);
if (baseline.cannesUnresolved !== 5 || baseline.cannes2024Unresolved !== 3) throw new Error(`Expected Cannes unresolved 5 / 2024 unresolved 3, got ${baseline.cannesUnresolved}/${baseline.cannes2024Unresolved}`);
if (baseline.queueLeader !== "Emilia Pérez") throw new Error(`Expected Emilia Pérez queue leader, got ${baseline.queueLeader}`);

const strongIdentityProbes = new Set(["Emilia Pérez", "Emilia Perez", "scenario_emilia_perez_2024", "scenario_emilia_perez_audiard_2024"]);
const strongHits = hits.map((hit) => ({ ...hit, matched: hit.matched.filter((probe) => strongIdentityProbes.has(probe)) })).filter((hit) => hit.matched.length);

console.log(JSON.stringify({ baseline, probes, hits, strongHits, classification: strongHits.length ? "REUSE_REQUIRES_MANUAL_RESOLUTION" : "NO_STRONG_IDENTITY_HIT" }, null, 2));
