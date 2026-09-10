import fs from 'node:fs';
import path from 'node:path';

const coveragePath = 'data/film/film_history_representation_coverage_v1.json';
const atlasPath = 'docs/film-history-chapter-seventeen-atlas-resolved.json';
const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
const atlas = JSON.parse(fs.readFileSync(atlasPath, 'utf8'));

if (!Array.isArray(coverage.scenario_reviews) || coverage.scenario_reviews.length !== 175) {
  throw new Error(`Expected 175 existing scenario reviews, got ${coverage.scenario_reviews?.length}`);
}
if (!Array.isArray(coverage.development_matrix)) throw new Error('Missing development_matrix');
if (coverage.baseline?.expected_production_verified_core_scenarios !== 613) {
  throw new Error(`Expected frozen 613-scenario core, got ${coverage.baseline?.expected_production_verified_core_scenarios}`);
}
if (coverage.baseline?.core_selection_frozen_during_audit !== true) {
  throw new Error('Core selection must remain frozen during representation audit');
}
if (atlas.atlas?.expectedCount !== 539 || atlas.atlas?.actualCount !== 539) {
  throw new Error(`Expected Chapter 17 atlas 539/539, got ${atlas.atlas?.expectedCount}/${atlas.atlas?.actualCount}`);
}

const developmentStatusesBefore = new Map(
  coverage.development_matrix.map((row) => [row.development_id, row.declared_status]),
);

const chapterEntries = new Map();
const collectUseExisting = (value) => {
  if (Array.isArray(value)) {
    for (const item of value) collectUseExisting(item);
    return;
  }
  if (!value || typeof value !== 'object') return;
  if (value.decision === 'USE_EXISTING' && typeof value.scenarioId === 'string') {
    if (value.productionVerified !== true || value.matches !== 1) {
      throw new Error(`Chapter 17 atlas entry is not exact production-verified 1:1: ${value.scenarioId}`);
    }
    const previous = chapterEntries.get(value.scenarioId);
    if (previous && JSON.stringify(previous) !== JSON.stringify(value)) {
      throw new Error(`Conflicting Chapter 17 atlas entries for ${value.scenarioId}`);
    }
    chapterEntries.set(value.scenarioId, value);
  }
  for (const child of Object.values(value)) collectUseExisting(child);
};
collectUseExisting(atlas);

if (chapterEntries.size !== 51) {
  throw new Error(`Expected 51 Chapter 17 USE_EXISTING scenarios, got ${chapterEntries.size}`);
}
if (!Array.isArray(atlas.byDecision?.USE_EXISTING) || atlas.byDecision.USE_EXISTING.length !== 51) {
  throw new Error(`Expected byDecision.USE_EXISTING length 51, got ${atlas.byDecision?.USE_EXISTING?.length}`);
}
for (const key of ['P0', 'P1', 'P2', 'EXISTING_REQUIRED']) {
  if (!Array.isArray(atlas.byDecision?.[key]) || atlas.byDecision[key].length !== 0) {
    throw new Error(`Chapter 17 atlas still has unresolved ${key} entries`);
  }
}

const walk = (dir, predicate, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, predicate, out);
    else if (predicate(full)) out.push(full.split(path.sep).join('/'));
  }
  return out;
};
const pvCandidates = [
  ...walk('src/ui/data', (file) => path.basename(file).startsWith('scenarioProductionVerification') && file.endsWith('.ts')),
  ...walk('docs', (file) => file.endsWith('.md') && path.basename(file).includes('PRODUCTION_CASE_VERIFICATION')),
];

const fileCache = new Map();
const read = (file) => {
  if (!fileCache.has(file)) fileCache.set(file, fs.readFileSync(file, 'utf8'));
  return fileCache.get(file);
};
const findEvidencePath = (scenarioId) => {
  const markers = [
    `scenarioId: "${scenarioId}"`,
    `scenarioId: '${scenarioId}'`,
    `\"scenario_id\": \"${scenarioId}\"`,
    scenarioId,
  ];
  const matches = [];
  for (const file of pvCandidates) {
    const text = read(file);
    if (!markers.some((marker) => text.includes(marker))) continue;
    const isTs = file.endsWith('.ts');
    const verified = isTs
      ? /status\s*:\s*["']verified["']/.test(text)
      : /verified|verification status|production verification/i.test(text);
    if (verified) matches.push(file);
  }
  if (matches.length === 0) throw new Error(`No permanent verified PV path found for ${scenarioId}`);
  matches.sort((a, b) => a.length - b.length || a.localeCompare(b));
  return matches[0];
};

const ANIMATION = 'animation_technique_labor_and_delivery_history';
const INDIA = 'india_modern_industry_system';
const SOUTH_KOREA = 'south_korea_industry_system';
const MENA = 'mena_industry_systems';
const LABOR = 'labor_union_vfx_outsourcing_intimacy_coordination_post_history';
const MICRO_DIGITAL = 'microbudget_digital_workflows_and_independent_distribution';

const mappings = new Map([
  ['scenario_toy_story_1995', [ANIMATION, LABOR]],
  ['scenario_princess_mononoke_1997', [ANIMATION]],
  ['scenario_bandit_queen_1994', [INDIA]],
  ['scenario_taste_of_cherry_1997', [MENA]],
  ['scenario_the_white_balloon_1995', [MENA]],
  ['scenario_the_matrix_1999', [LABOR]],
  ['scenario_shiri_1999', [SOUTH_KOREA]],
]);

const mappingRationales = new Map([
  ['scenario_toy_story_1995', 'The exact verified Pixar record documents a Disney/Pixar feature agreement, proprietary Menv/Marionette and RenderMan pipeline, technical direction, rendering, animation, editing and sound as distinct labor layers. It supplies one side of the animation 2→3 triangulation and exact digital-pipeline labor evidence for the broader VFX/post-labor row.'],
  ['scenario_princess_mononoke_1997', 'The exact verified Studio Ghibli record documents a predominantly hand-drawn feature with partial digital paint, CG, photography/compositing, dedicated departments and Silicon Graphics infrastructure. Its hybrid transition complements Toy Story’s fully computer-animated pipeline, justifying animation 2→3 by technique and labor organization rather than medium labels.'],
  ['scenario_bandit_queen_1994', 'The exact verified India-UK Film Four/Kaleidoscope case documents cross-border production, contemporary 35 mm production records, reported financing scale, adaptation-rights litigation and certification/version constraints. Together with the existing Salaam Bombay financing/institution case, it supplies a distinct rights/regulation and co-production dimension sufficient for India 2→3 without treating nationality alone as evidence.'],
  ['scenario_taste_of_cherry_1997', 'The exact verified Iran-France case documents Abbas Kiarostami Productions, a resource-limited writer-director-editor-producer model, export/censorship difficulty and later specialty acquisition. It is concrete Iranian production/circulation-system evidence for MENA, but not by itself a claim about the whole region.'],
  ['scenario_the_white_balloon_1995', 'The exact verified Iranian case documents IRIB Channel Two, Ferdos Films, Farabi Cinema Foundation/world-rights roles and source-specific production attribution. Alongside Taste of Cherry it establishes exact Iranian institutional variation, supporting conservative MENA status 2 while regional breadth remains untriangulated.'],
  ['scenario_the_matrix_1999', 'The exact verified Warner/Village Roadshow/Silver Pictures case documents Sydney production infrastructure, Australian crews, Manex and Animal Logic VFX work, array-based bullet-time photography and named editing/sound/VFX labor. It supplies exact VFX/post-production labor evidence, but not the union/intimacy breadth required for status 3.'],
  ['scenario_shiri_1999', 'The exact verified KOFIC-backed record documents KangJeGyu Films, Samsung investment/distribution activity, Korea Technology Finance Corporation support, production economics, named Korean craft/effects labor and domestic plus overseas theatrical circulation. That is exact modern South Korean industry-system evidence sufficient for status 2, while one title remains insufficient for triangulation.'],
]);

const existingIds = new Set(coverage.scenario_reviews.map((review) => review.scenario_id));
const reviews = [];
for (const [scenarioId, entry] of chapterEntries) {
  if (existingIds.has(scenarioId)) throw new Error(`Scenario already reviewed before Chapter 17: ${scenarioId}`);
  const evidencePath = findEvidencePath(scenarioId);
  const developmentIds = mappings.get(scenarioId) ?? [];
  if (developmentIds.length > 0) {
    const rationale = mappingRationales.get(scenarioId);
    if (!rationale) throw new Error(`Missing mapping rationale for ${scenarioId}`);
    reviews.push({
      scenario_id: scenarioId,
      review_state: 'MAPPED',
      development_ids: developmentIds,
      evidence_paths: [evidencePath],
      rationale,
    });
    continue;
  }

  let rationale;
  if (scenarioId === 'scenario_the_celebration_1998') {
    rationale = 'The Chapter 17 atlas identifies Festen as a decisive consumer-digital-video production case, but the open matrix row requires the combined chain of low-cost digital capture/post, microbudget organization and independent or self-directed distribution. Digital acquisition alone does not prove that full system, so this remains REVIEWED_NO_MAPPING rather than forcing microbudget-digital status.';
  } else if (scenarioId === 'scenario_the_idiots_1998') {
    rationale = 'The exact verified Dogme 95 record documents video-origin, handheld, location-driven production and keeps acquisition distinct from theatrical presentation, but it does not establish the full required microbudget digital capture/post plus independent/self-directed distribution system. It therefore remains REVIEWED_NO_MAPPING and the microbudget-digital row stays fail-closed.';
  } else {
    const title = entry.title ?? scenarioId;
    rationale = `${title} is exact USE_EXISTING and production-verified in the Chapter 17 atlas, and its permanent PV record has been bound below. This pass does not establish a direct additional mapping from that title to one of the still-open matrix developments beyond the explicitly evidenced Chapter 17 lifts; it remains REVIEWED_NO_MAPPING rather than using period, genre, geography, festival status or chapter placement as a proxy.`;
  }
  reviews.push({
    scenario_id: scenarioId,
    review_state: 'REVIEWED_NO_MAPPING',
    development_ids: [],
    evidence_paths: [evidencePath],
    rationale,
  });
}

if (reviews.length !== 51) throw new Error(`Expected 51 Chapter 17 reviews, got ${reviews.length}`);
if (new Set(reviews.map((review) => review.scenario_id)).size !== 51) throw new Error('Duplicate Chapter 17 review id');
for (const review of reviews) {
  for (const evidencePath of review.evidence_paths) {
    if (!fs.existsSync(evidencePath)) throw new Error(`Missing bound evidence path for ${review.scenario_id}: ${evidencePath}`);
  }
}

const setStatus = (developmentId, expectedBefore, after, triangulationBasis = undefined) => {
  const row = coverage.development_matrix.find((candidate) => candidate.development_id === developmentId);
  if (!row) throw new Error(`Missing development row ${developmentId}`);
  if (row.declared_status !== expectedBefore) {
    throw new Error(`Expected ${developmentId} status ${expectedBefore}, got ${row.declared_status}`);
  }
  row.declared_status = after;
  if (triangulationBasis) row.triangulation_basis = triangulationBasis;
};

setStatus(
  ANIMATION,
  2,
  3,
  'Chapter 17 triangulates two materially different exact animation production systems. Toy Story documents Pixar/Disney feature development, proprietary Menv/Marionette animation, RenderMan rendering, technical-direction labor and a fully computer-generated feature pipeline. Princess Mononoke contrasts Studio Ghibli’s predominantly hand-drawn storyboard-led workflow with partial digital paint, CG, photography/compositing and dedicated digital departments. Together they distinguish fully computer-generated and hybrid hand-drawn/digital workflows across software, rendering, department structure and delivery-era transition rather than treating animation as one technique.',
);
setStatus(
  INDIA,
  2,
  3,
  'Chapter 16 established exact modern Indian industry coverage through Salaam Bombay: Mirabai Films, Channel Four, Cadrage, La Sept, NFDC and Doordarshan supplied a multi-institution India/UK/France financing and production network. Chapter 17 adds Bandit Queen as a materially different India-UK Film Four/Kaleidoscope production with documented production scale, adaptation-rights litigation and certification/version constraints. The pair triangulates financing/institutional organization against rights/regulation and co-production structure rather than counting two Indian titles.',
);
setStatus(SOUTH_KOREA, 0, 2);
setStatus(MENA, 0, 2);
setStatus(LABOR, 0, 2);

const salaam = coverage.scenario_reviews.find((review) => review.scenario_id === 'scenario_salaam_bombay_1988');
if (!salaam || !salaam.development_ids?.includes(INDIA)) throw new Error('Missing existing Salaam Bombay India mapping');
salaam.rationale = 'The verified Bombay location production documents Mirabai Films, Channel Four, Cadrage, La Sept, NFDC and Doordarshan across India/UK/France, plus workshop-based child performance and documentary-informed research. Chapter 16 used this as exact modern Indian financing and industrial-organization evidence for status 2. Chapter 17 later adds Bandit Queen as a complementary India-UK production with distinct rights, certification and co-production evidence, allowing India to be triangulated at status 3 without treating nationality alone as coverage.';

coverage.scenario_reviews.push(...reviews);
coverage.audited_at = '2026-09-10';

if (coverage.scenario_reviews.length !== 226) {
  throw new Error(`Expected 226 final reviews, got ${coverage.scenario_reviews.length}`);
}
const intendedStatuses = new Map([
  [ANIMATION, 3],
  [INDIA, 3],
  [SOUTH_KOREA, 2],
  [MENA, 2],
  [LABOR, 2],
]);
for (const row of coverage.development_matrix) {
  const before = developmentStatusesBefore.get(row.development_id);
  if (before === undefined) throw new Error(`Unexpected development row: ${row.development_id}`);
  const expected = intendedStatuses.has(row.development_id) ? intendedStatuses.get(row.development_id) : before;
  if (row.declared_status !== expected) {
    throw new Error(`Unexpected status change for ${row.development_id}: ${before} -> ${row.declared_status}; expected ${expected}`);
  }
}
if (coverage.development_matrix.find((row) => row.development_id === MICRO_DIGITAL)?.declared_status !== 0) {
  throw new Error('Microbudget digital workflow row must remain fail-closed at 0 after Chapter 17');
}
for (const row of coverage.development_matrix.filter((candidate) => candidate.chapter === 19)) {
  if (row.declared_status !== developmentStatusesBefore.get(row.development_id)) {
    throw new Error(`Chapter 19 row changed during Chapter 17 audit: ${row.development_id}`);
  }
}
if (coverage.closure_contract?.selection_may_be_called_representationally_audited !== false) {
  throw new Error('Overall selection closure must remain fail-closed after Chapter 17');
}
if (coverage.status !== 'OPEN_GAPS_FAIL_CLOSED') {
  throw new Error(`Coverage status must remain OPEN_GAPS_FAIL_CLOSED, got ${coverage.status}`);
}

fs.writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);
console.log('Chapter 17 representation audit materialized: 175 -> 226 reviews; animation 2->3; India 2->3; South Korea 0->2; MENA 0->2; VFX/post labor 0->2; closure remains fail-closed.');
