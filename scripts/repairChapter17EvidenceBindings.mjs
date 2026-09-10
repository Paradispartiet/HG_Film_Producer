import fs from 'node:fs';
import path from 'node:path';

const coveragePath = 'data/film/film_history_representation_coverage_v1.json';
const atlasPath = 'docs/film-history-chapter-seventeen-atlas-resolved.json';
const registryPath = 'src/ui/data/scenarioProductionVerificationRegistry.ts';

const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
const atlas = JSON.parse(fs.readFileSync(atlasPath, 'utf8'));

if (!Array.isArray(coverage.scenario_reviews) || coverage.scenario_reviews.length !== 226) {
  throw new Error(`Expected 226 existing scenario reviews, got ${coverage.scenario_reviews?.length}`);
}
if (coverage.baseline?.expected_production_verified_core_scenarios !== 613) {
  throw new Error(`Frozen core changed from 613: ${coverage.baseline?.expected_production_verified_core_scenarios}`);
}
if (coverage.closure_contract?.selection_may_be_called_representationally_audited !== false) {
  throw new Error('Representation closure must remain fail-closed during Chapter 17 evidence repair');
}

const collectUseExisting = (value, out = new Set()) => {
  if (Array.isArray(value)) {
    for (const item of value) collectUseExisting(item, out);
    return out;
  }
  if (value && typeof value === 'object') {
    if (value.decision === 'USE_EXISTING' && typeof value.scenarioId === 'string') out.add(value.scenarioId);
    for (const child of Object.values(value)) collectUseExisting(child, out);
  }
  return out;
};

const chapter17Ids = collectUseExisting(atlas);
if (chapter17Ids.size !== 51) throw new Error(`Expected 51 Chapter 17 USE_EXISTING ids, got ${chapter17Ids.size}`);

const registry = fs.readFileSync(registryPath, 'utf8');
const importedModules = new Set(['./scenarioProductionVerification']);
for (const match of registry.matchAll(/from\s+["'](\.\/scenarioProductionVerification[^"']*)["']/g)) {
  importedModules.add(match[1]);
}

const importedFiles = [];
for (const moduleName of importedModules) {
  const relative = moduleName.replace(/^\.\//, '');
  const filePath = path.posix.join('src/ui/data', `${relative}.ts`);
  if (!fs.existsSync(filePath)) throw new Error(`Registry-imported PV module missing: ${filePath}`);
  importedFiles.push(filePath);
}

const exactDefinitionMap = new Map();
for (const filePath of importedFiles) {
  const text = fs.readFileSync(filePath, 'utf8');
  for (const id of chapter17Ids) {
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const exactDefinition = new RegExp(`scenarioId\\s*:\\s*["']${escaped}["']`);
    if (!exactDefinition.test(text)) continue;
    const paths = exactDefinitionMap.get(id) ?? [];
    paths.push(filePath);
    exactDefinitionMap.set(id, paths);
  }
}

for (const id of chapter17Ids) {
  const candidates = exactDefinitionMap.get(id) ?? [];
  if (candidates.length !== 1) {
    throw new Error(`Expected exactly one registry-imported exact PV definition for ${id}, got ${candidates.length}: ${candidates.join(', ')}`);
  }
}

const original = JSON.parse(JSON.stringify(coverage));
const reviewById = new Map(coverage.scenario_reviews.map((review) => [review.scenario_id, review]));
let changed = 0;
for (const id of chapter17Ids) {
  const review = reviewById.get(id);
  if (!review) throw new Error(`Missing Chapter 17 review for ${id}`);
  const canonicalPath = exactDefinitionMap.get(id)[0];
  if (review.evidence_paths?.length !== 1 || review.evidence_paths[0] !== canonicalPath) changed += 1;
  review.evidence_paths = [canonicalPath];
}

const sanitize = (doc) => {
  const copy = JSON.parse(JSON.stringify(doc));
  for (const review of copy.scenario_reviews ?? []) {
    if (chapter17Ids.has(review.scenario_id)) delete review.evidence_paths;
  }
  return copy;
};
if (JSON.stringify(sanitize(original)) !== JSON.stringify(sanitize(coverage))) {
  throw new Error('Repair changed Chapter 17 audit content beyond evidence_paths');
}

for (const id of chapter17Ids) {
  const review = reviewById.get(id);
  const evidencePath = review.evidence_paths?.[0];
  if (!evidencePath || !fs.existsSync(evidencePath)) throw new Error(`Missing repaired evidence path for ${id}`);
  const text = fs.readFileSync(evidencePath, 'utf8');
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!new RegExp(`scenarioId\\s*:\\s*["']${escaped}["']`).test(text)) {
    throw new Error(`Repaired path does not define ${id}: ${evidencePath}`);
  }
}

fs.writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);
console.log(`Chapter 17 evidence binding repair complete: ${changed} of 51 paths corrected; all 51 now point to exact registry-imported PV definitions.`);
