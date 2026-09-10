import fs from 'node:fs';
import path from 'node:path';

const coveragePath = 'data/film/film_history_representation_coverage_v1.json';
const atlasPath = 'docs/film-history-chapter-eighteen-atlas-resolved.json';
const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
const atlas = JSON.parse(fs.readFileSync(atlasPath, 'utf8'));

if (!Array.isArray(coverage.scenario_reviews) || coverage.scenario_reviews.length !== 226) {
  throw new Error(`Expected 226 existing reviews, got ${coverage.scenario_reviews?.length}`);
}
if (coverage.baseline?.expected_production_verified_core_scenarios !== 613) {
  throw new Error(`Expected frozen 613 core, got ${coverage.baseline?.expected_production_verified_core_scenarios}`);
}
if (coverage.baseline?.core_selection_frozen_during_audit !== true) throw new Error('Core must remain frozen');
if (atlas.chapter?.number !== 18 || atlas.atlas?.expectedCount !== 539 || atlas.atlas?.actualCount !== 539) {
  throw new Error(`Unexpected Chapter 18 atlas contract: chapter=${atlas.chapter?.number} count=${atlas.atlas?.expectedCount}/${atlas.atlas?.actualCount}`);
}

const entries = new Map();
const walkValue = (v) => {
  if (Array.isArray(v)) { for (const x of v) walkValue(x); return; }
  if (!v || typeof v !== 'object') return;
  if (v.decision === 'USE_EXISTING' && typeof v.scenarioId === 'string') {
    if (v.matches !== 1 || v.productionVerified !== true) throw new Error(`Non-exact USE_EXISTING: ${v.scenarioId}`);
    const prior = entries.get(v.scenarioId);
    if (prior && JSON.stringify(prior) !== JSON.stringify(v)) throw new Error(`Conflicting atlas entries: ${v.scenarioId}`);
    entries.set(v.scenarioId, v);
  }
  for (const x of Object.values(v)) walkValue(x);
};
walkValue(atlas);

const byDecision = {};
for (const key of ['USE_EXISTING','P0','P1','P2','EXISTING_REQUIRED']) byDecision[key] = Array.isArray(atlas.byDecision?.[key]) ? atlas.byDecision[key].length : null;
const reviewed = new Set(coverage.scenario_reviews.map((r) => r.scenario_id));
const newEntries = [...entries.entries()].filter(([id]) => !reviewed.has(id));
const alreadyReviewed = [...entries.keys()].filter((id) => reviewed.has(id));

const pvDir = 'src/ui/data';
const pvFiles = fs.readdirSync(pvDir)
  .filter((name) => name.startsWith('scenarioProductionVerification') && name.endsWith('.ts'))
  .map((name) => path.posix.join(pvDir, name));
const exactPaths = new Map();
for (const [id] of newEntries) exactPaths.set(id, []);
for (const file of pvFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const [id] of newEntries) {
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const exact = new RegExp(`scenarioId\\s*:\\s*["']${escaped}["']`).test(text);
    if (exact) exactPaths.get(id).push(file);
  }
}
const bad = [...exactPaths].filter(([, files]) => files.length !== 1);
if (bad.length) throw new Error(`Exact PV definition cardinality failures:\n${bad.map(([id, files]) => `${id}: ${files.length} [${files.join(', ')}]`).join('\n')}`);

const openRows = coverage.development_matrix
  .filter((r) => r.declared_status === 0 || r.declared_status === 1)
  .map((r) => ({development_id:r.development_id, declared_status:r.declared_status, rationale:r.rationale ?? r.notes ?? null}));
const status2Rows = coverage.development_matrix.filter((r) => r.declared_status === 2).map((r) => r.development_id);

console.log(JSON.stringify({
  chapter: atlas.chapter,
  atlasCount: `${atlas.atlas.expectedCount}/${atlas.atlas.actualCount}`,
  byDecision,
  uniqueUseExisting: entries.size,
  alreadyReviewedCount: alreadyReviewed.length,
  alreadyReviewed,
  newReviewCount: newEntries.length,
  expectedFinalReviewCount: coverage.scenario_reviews.length + newEntries.length,
  openRows,
  status2Rows,
  newEntries: newEntries.map(([id, e]) => ({scenarioId:id, title:e.title ?? e.filmTitle ?? e.name ?? null, year:e.year ?? null, role:e.role ?? null, chapterFunction:e.chapterFunction ?? null, origin:e.origin ?? null, exactPvPath:exactPaths.get(id)[0]})),
}, null, 2));
