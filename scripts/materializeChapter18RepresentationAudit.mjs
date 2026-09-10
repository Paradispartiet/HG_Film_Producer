import fs from 'node:fs';
import path from 'node:path';

const coveragePath = 'data/film/film_history_representation_coverage_v1.json';
const atlasPath = 'docs/film-history-chapter-eighteen-atlas-resolved.json';
const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
const atlas = JSON.parse(fs.readFileSync(atlasPath, 'utf8'));

if (!Array.isArray(coverage.scenario_reviews) || coverage.scenario_reviews.length !== 226) {
  throw new Error(`Expected 226 existing scenario reviews, got ${coverage.scenario_reviews?.length}`);
}
if (!Array.isArray(coverage.development_matrix)) throw new Error('Missing development_matrix');
if (coverage.status !== 'OPEN_GAPS_FAIL_CLOSED') throw new Error(`Unexpected audit status: ${coverage.status}`);
if (coverage.baseline?.expected_production_verified_core_scenarios !== 613) {
  throw new Error(`Expected frozen 613-scenario core, got ${coverage.baseline?.expected_production_verified_core_scenarios}`);
}
if (coverage.baseline?.core_selection_frozen_during_audit !== true) throw new Error('Core selection must remain frozen');
if (atlas.chapter?.number !== 18 || atlas.atlas?.expectedCount !== 539 || atlas.atlas?.actualCount !== 539) {
  throw new Error(`Expected Chapter 18 atlas 539/539, got chapter=${atlas.chapter?.number} ${atlas.atlas?.expectedCount}/${atlas.atlas?.actualCount}`);
}
if (!Array.isArray(atlas.byDecision?.USE_EXISTING) || atlas.byDecision.USE_EXISTING.length !== 82) {
  throw new Error(`Expected 82 Chapter 18 USE_EXISTING entries, got ${atlas.byDecision?.USE_EXISTING?.length}`);
}
for (const key of ['P0', 'P1', 'P2', 'EXISTING_REQUIRED']) {
  if (!Array.isArray(atlas.byDecision?.[key]) || atlas.byDecision[key].length !== 0) {
    throw new Error(`Chapter 18 atlas still has unresolved ${key} entries`);
  }
}

const statusesBefore = new Map(coverage.development_matrix.map((r) => [r.development_id, r.declared_status]));
const chapterEntries = new Map();
const collect = (value) => {
  if (Array.isArray(value)) { for (const item of value) collect(item); return; }
  if (!value || typeof value !== 'object') return;
  if (value.decision === 'USE_EXISTING' && typeof value.scenarioId === 'string') {
    if (value.productionVerified !== true || value.matches !== 1) {
      throw new Error(`Chapter 18 entry is not exact production-verified 1:1: ${value.scenarioId}`);
    }
    const prior = chapterEntries.get(value.scenarioId);
    if (prior && JSON.stringify(prior) !== JSON.stringify(value)) throw new Error(`Conflicting Chapter 18 entry: ${value.scenarioId}`);
    chapterEntries.set(value.scenarioId, value);
  }
  for (const child of Object.values(value)) collect(child);
};
collect(atlas);
if (chapterEntries.size !== 82) throw new Error(`Expected 82 unique Chapter 18 scenarios, got ${chapterEntries.size}`);

const existingIds = new Set(coverage.scenario_reviews.map((r) => r.scenario_id));
for (const id of chapterEntries.keys()) if (existingIds.has(id)) throw new Error(`Chapter 18 scenario already reviewed: ${id}`);

const pvDir = 'src/ui/data';
const pvFiles = fs.readdirSync(pvDir)
  .filter((name) => name.startsWith('scenarioProductionVerification') && name.endsWith('.ts'))
  .map((name) => path.posix.join(pvDir, name));
const exactPaths = new Map([...chapterEntries.keys()].map((id) => [id, []]));
for (const file of pvFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const id of chapterEntries.keys()) {
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`scenarioId\\s*:\\s*["']${escaped}["']`).test(text)) exactPaths.get(id).push(file);
  }
}
for (const [id, files] of exactPaths) {
  if (files.length !== 1) throw new Error(`Expected exactly one exact PV definition for ${id}, got ${files.length}: ${files.join(', ')}`);
}

const SOUTH_KOREA = 'south_korea_industry_system';
const mappings = new Map([
  ['scenario_oldboy_2003', [SOUTH_KOREA]],
  ['scenario_parasite_2019', [SOUTH_KOREA]],
]);
const rationales = new Map([
  ['scenario_oldboy_2003', 'The exact KOFIC-backed Production Verification record identifies Eggfilm and ShowEast as production companies, a dated South Korean release, Cineclick Asia international sales, producer/line-producer roles and differentiated cinematography, design, post, sound, VFX and martial-arts labor. It therefore adds a concrete 2003 production/export organization to the existing Shiri industry evidence rather than treating Korean nationality or later canon status as the mapping.'],
  ['scenario_parasite_2019', 'The exact Production Verification record identifies Barunson E&A production, CJ Entertainment international sales, the Korean release, purpose-built production infrastructure, large-format capture, editorial workflow and specialist sound-post organization. Together with Shiri and Oldboy, this supplies a later, differently organized South Korean production/distribution system and supports 2→3 triangulation across company structure, export/distribution and production scale.'],
]);

const reviews = [];
for (const [scenarioId, entry] of chapterEntries) {
  const evidencePath = exactPaths.get(scenarioId)[0];
  const developmentIds = mappings.get(scenarioId) ?? [];
  if (developmentIds.length) {
    reviews.push({
      scenario_id: scenarioId,
      review_state: 'MAPPED',
      development_ids: developmentIds,
      evidence_paths: [evidencePath],
      rationale: rationales.get(scenarioId),
    });
    continue;
  }
  const title = entry.title ?? entry.originalTitle ?? scenarioId;
  const functionText = typeof entry.chapterFunction === 'string' ? entry.chapterFunction : 'The Chapter 18 atlas assigns this exact production-verified case a period-specific comparison function.';
  reviews.push({
    scenario_id: scenarioId,
    review_state: 'REVIEWED_NO_MAPPING',
    development_ids: [],
    evidence_paths: [evidencePath],
    rationale: `${title} is exact USE_EXISTING and production-verified in the Chapter 18 atlas. ${functionText} This pass does not establish a direct additional mapping from the title to an eligible Chapter 18 representation gap beyond the explicitly evidenced South Korea lift; it remains REVIEWED_NO_MAPPING rather than using period, digital format, geography, festival status, platform association or chapter placement as a proxy.`,
  });
}
if (reviews.length !== 82) throw new Error(`Expected 82 generated reviews, got ${reviews.length}`);
if (new Set(reviews.map((r) => r.scenario_id)).size !== 82) throw new Error('Duplicate Chapter 18 generated reviews');

coverage.scenario_reviews.push(...reviews);
if (coverage.scenario_reviews.length !== 308) throw new Error(`Expected final 308 reviews, got ${coverage.scenario_reviews.length}`);
if (new Set(coverage.scenario_reviews.map((r) => r.scenario_id)).size !== coverage.scenario_reviews.length) throw new Error('Duplicate scenario_reviews after Chapter 18 append');

const sk = coverage.development_matrix.find((r) => r.development_id === SOUTH_KOREA);
if (!sk) throw new Error('Missing south_korea_industry_system row');
if (sk.declared_status !== 2) throw new Error(`Expected South Korea status 2 before Chapter 18, got ${sk.declared_status}`);
sk.declared_status = 3;
sk.triangulation_basis = 'Chapter 17 established exact modern South Korean industry coverage through Shiri: KangJeGyu Films, Samsung investment/distribution activity, Korea Technology Finance Corporation support, named Korean craft/effects labor and domestic plus overseas circulation. Chapter 18 adds two complementary exact cases rather than nationality tokens. Oldboy documents Eggfilm and ShowEast production, KOFIC release data, Cineclick Asia international sales, producer/line-producer roles and a differentiated post/craft labor structure. Parasite documents Barunson E&A production, CJ Entertainment international sales, purpose-built set infrastructure, large-format production and specialist editorial/sound-post organization. Across 1999, 2003 and 2019 the mapped cases triangulate financing/company organization, domestic release, export/international sales, production scale and changing specialist labor, supporting status 3.';

const statusesAfter = new Map(coverage.development_matrix.map((r) => [r.development_id, r.declared_status]));
const changed = [];
for (const [id, before] of statusesBefore) {
  const after = statusesAfter.get(id);
  if (before !== after) changed.push([id, before, after]);
}
if (changed.length !== 1 || changed[0][0] !== SOUTH_KOREA || changed[0][1] !== 2 || changed[0][2] !== 3) {
  throw new Error(`Unexpected development status changes: ${JSON.stringify(changed)}`);
}

for (const id of ['nigeria_nollywood_industry_system','microbudget_digital_workflows_and_independent_distribution','streaming_native_feature_production_economics']) {
  const row = coverage.development_matrix.find((r) => r.development_id === id);
  if (!row || row.declared_status !== 0) throw new Error(`${id} must remain fail-closed at 0 in Chapter 18`);
}
for (const row of coverage.development_matrix.filter((r) => r.chapter === 19)) {
  if (statusesBefore.get(row.development_id) !== row.declared_status) throw new Error(`Chapter 18 changed Chapter 19 row ${row.development_id}`);
}
if (coverage.status !== 'OPEN_GAPS_FAIL_CLOSED') throw new Error('Overall representation audit must remain fail-closed');
if (coverage.baseline.expected_production_verified_core_scenarios !== 613) throw new Error('Frozen core changed');

fs.writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);
console.log(`Chapter 18 materialized: 82 reviews, 226→308; South Korea 2→3 only; 613 core frozen; overall audit remains fail-closed.`);
