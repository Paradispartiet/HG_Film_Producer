import { readFileSync, writeFileSync } from 'node:fs';

const COVERAGE = 'data/film/film_history_representation_coverage_v1.json';

function read(path) { return readFileSync(path, 'utf8'); }
function write(path, content) { writeFileSync(path, content); }
function assert(condition, message) { if (!condition) throw new Error(message); }

function enrichSingleRecord(path, sentence, sourceObject) {
  let source = read(path);
  const summaryMatch = source.match(/summary: "([^"]*)",/);
  assert(summaryMatch, `summary not found in ${path}`);
  assert(!summaryMatch[1].includes(sentence), `summary enrichment already present in ${path}`);
  source = source.replace(summaryMatch[0], `summary: "${summaryMatch[1]} ${sentence}",`);
  const close = '\n  ]\n} as const satisfies ProductionCaseVerificationRecord;';
  assert(source.includes(close), `single-record close marker not found in ${path}`);
  source = source.replace(close, `,\n${sourceObject}\n  ]\n} as const satisfies ProductionCaseVerificationRecord;`);
  write(path, source);
}

function enrichBatchRecord(path, scenarioId, sentence, sourceObject) {
  let source = read(path);
  const needle = `scenarioId: "${scenarioId}"`;
  const start = source.indexOf(needle);
  assert(start >= 0, `${scenarioId} not found in ${path}`);
  const next = source.indexOf('\n  {\n    scenarioId:', start + needle.length);
  const end = next >= 0 ? next : source.length;
  let block = source.slice(start, end);
  const summaryMatch = block.match(/summary: "([^"]*)",/);
  assert(summaryMatch, `summary not found for ${scenarioId}`);
  block = block.replace(summaryMatch[0], `summary: "${summaryMatch[1]} ${sentence}",`);
  const closeIndex = block.lastIndexOf('\n    ]');
  assert(closeIndex >= 0, `source close not found for ${scenarioId}`);
  block = `${block.slice(0, closeIndex - 1)},\n${sourceObject}${block.slice(closeIndex)}`;
  source = source.slice(0, start) + block + source.slice(end);
  write(path, source);
}

const powerDogPath = 'src/ui/data/scenarioProductionVerificationThePowerOfTheDog.ts';
enrichSingleRecord(
  powerDogPath,
  'Screen International documents the project as a Netflix-backed negative pickup: Netflix became the major financier, bought international rights with stated territorial exceptions, and accepted a built-in theatrical window, while See-Saw retained the producer-led assembly and additional-financing role; this supports a bounded streaming-feature financing, rights and release-window model without inventing a full recoupment waterfall.',
  `    {\n      title: "AFM Q&A: See-Saw Films’ Simon Gillis on why star-led projects are still key",\n      publisher: "Screen International",\n      url: "https://www.screendaily.com/features/afm-qanda-see-saw-films-simon-gillis-on-why-star-led-projects-are-still-key/5144605.article",\n      sourceKind: "trade_feature",\n      supports: ["overall"],\n      note: "Producer interview documenting a theatrical window inside the Netflix deal and defining the arrangement as a negative pickup rather than a Netflix production, with producer-side financial and creative control retained after the deal was secured."\n    },\n    {\n      title: "See-Saw Films co-founders on firing up ‘The Power Of The Dog’ and letting go of box office success",\n      publisher: "Screen International",\n      url: "https://www.screendaily.com/features/see-saw-films-co-founders-on-firing-up-the-power-of-the-dog-and-letting-go-of-box-office-success/5168431.article",\n      sourceKind: "trade_feature",\n      supports: ["overall"],\n      note: "Producer interview documenting Netflix as the major financier, See-Saw/Cross City financing work, limited theatrical release before Netflix availability, and the different back-end/IP trade-offs of streaming deals."\n    }`
);

const dontLookUpPath = 'src/ui/data/scenarioProductionVerificationDontLookUp.ts';
enrichSingleRecord(
  dontLookUpPath,
  'Producer Kevin Messick documents that Paramount balked at the production scale implied by the reported USD 75 million budget, while Netflix supplied the necessary budget and global distribution reach; this is retained as a platform-backed feature-production economics case without inferring undisclosed rights or recoupment terms.',
  `    {\n      title: "Kevin Messick on his thriving filmmaking relationship with ‘Don’t Look Up’ director Adam McKay",\n      publisher: "Screen International",\n      url: "https://www.screendaily.com/features/kevin-messick-on-his-thriving-filmmaking-relationship-with-dont-look-up-director-adam-mckay/5168483.article",\n      sourceKind: "trade_feature",\n      supports: ["overall"],\n      note: "Direct producer interview documenting Paramount's reluctance at the reported budget level, Netflix stepping in with the necessary production budget and desired global reach, and the pandemic-era production burden."\n    }`
);

const tenetPath = 'src/ui/data/scenarioProductionVerificationTenet.ts';
enrichSingleRecord(
  tenetPath,
  'Variety later documented an explicit production-economic consequence of the pandemic theatrical strategy: Warner Bros. agreed to proceed with the reopened-cinema release on condition that Christopher Nolan forgo certain fees, which the studio later repaid with a seven-figure check; this supports the window decision as an economic production/distribution trade-off rather than merely a release-date fact.',
  `    {\n      title: "Christopher Nolan’s New Movie Landed at Universal Despite Warner Bros.’ Attempt to Lure Him Back With Seven-Figure ‘Tenet’ Check",\n      publisher: "Variety",\n      url: "https://variety.com/2024/film/news/christopher-nolan-new-movie-universal-warner-bros-tenet-check-1236181651/",\n      sourceKind: "trade_feature",\n      supports: ["overall"],\n      note: "Industry reporting documenting that Warner Bros. proceeded with Tenet's pandemic theatrical release on condition Nolan forgo certain fees and that the studio later repaid those waived fees with a seven-figure check."\n    }`
);

const technologyPath = 'src/ui/data/scenarioProductionVerificationTechnologyBatch.ts';
enrichBatchRecord(
  technologyPath,
  'scenario_tangerine_2015',
  'Filmmaker Magazine documents the reported USD 100,000 budget as fronted by Duplass Brothers Productions and Through Films, followed by Magnolia’s worldwide-rights acquisition and a four-screen-to-incremental theatrical rollout; this connects the already verified low-cost iPhone/post workflow to independent financing and downstream distribution without recasting Magnolia as the production commissioner.',
  `      {\n        title: "Hits & Misses: How Seven Films from Sundance 2015 Performed",\n        publisher: "Filmmaker Magazine",\n        url: "https://filmmakermagazine.com/96898-hits-misses-4/",\n        sourceKind: "trade_feature",\n        supports: ["overall", "cinematography", "editing"],\n        note: "Industry case study documenting the reported USD 100,000 financing from Duplass Brothers Productions and Through Films, Magnolia's worldwide-rights acquisition and the staged theatrical rollout after Sundance."\n      }`
);

const brutalistPath = 'src/ui/data/scenarioProductionVerificationTheBrutalist.ts';
enrichSingleRecord(
  brutalistPath,
  'Respeecher’s project account further documents a human-in-the-loop voice-conversion workflow built on the performers’ original recordings, native-speaker pronunciation guidance and sound-team iteration; its published production policy requires explicit voice-owner consent, so the case can teach bounded AI use together with a concrete consent and labor-control boundary rather than treating synthetic speech as autonomous performance replacement.',
  `    {\n      title: "Respeecher Helps Perfect Hungarian Pronunciation for Award-Winning Performance in The Brutalist",\n      publisher: "Respeecher",\n      url: "https://www.respeecher.com/case-studies/respeecher-helps-perfect-hungarian-pronunciation-for-award-winning-performance-in-the-brutalist",\n      sourceKind: "archive_feature",\n      supports: ["overall", "editing", "sound"],\n      note: "Vendor case study documenting pronunciation-only voice conversion, preservation of the actors' original emotional performances, native-speaker guidance and iterative collaboration between sound specialists and the film team."\n    },\n    {\n      title: "AI Voices for Film & TV Production | Ethical Hollywood-Quality Voice Cloning",\n      publisher: "Respeecher",\n      url: "https://www.respeecher.com/film-tv-production",\n      sourceKind: "archive_feature",\n      supports: ["overall", "sound"],\n      note: "Vendor production-policy record stating explicit consent and permission requirements for cloned/generated voices and describing the human sound-engineer/ML workflow used for film production."\n    }`
);

const coverage = JSON.parse(read(COVERAGE));
const rows = new Map(coverage.development_matrix.map((row) => [row.development_id, row]));
function setStatus(id, status, triangulationBasis) {
  const row = rows.get(id);
  assert(row, `development row missing: ${id}`);
  assert(row.declared_status === 0, `${id} expected status 0, got ${row.declared_status}`);
  row.declared_status = status;
  if (status === 3) row.triangulation_basis = triangulationBasis;
}

setStatus('microbudget_digital_workflows_and_independent_distribution', 2);
setStatus('microbudget_digital_and_self_distribution', 2);
setStatus('streaming_native_feature_production_economics', 3, 'The Power of the Dog documents a producer-assembled negative-pickup structure with Netflix as major financier, territorial-rights allocation and a built-in theatrical window, while Don’t Look Up documents Netflix directly supplying the budget and global reach that a conventional studio declined at the requested production scale. Together they triangulate distinct streaming-feature financing and distribution models without treating later platform acquisition as equivalent to platform-native production.');
setStatus('streaming_native_feature_economics', 3, 'The Power of the Dog provides an exact negative-pickup, financing, rights and theatrical-window model, while Don’t Look Up provides a complementary platform-backed budget-and-global-reach model after a conventional studio declined the requested scale. The pair establishes two materially different streaming-era feature economics pathways while keeping undisclosed recoupment and rights details bounded.');
setStatus('theatrical_windows_and_release_strategy', 2);
setStatus('generative_ai_and_machine_learning_in_production_or_post', 2);
setStatus('franchise_blockbuster_and_mass_audience_industrial_model', 2);

const reviews = coverage.scenario_reviews;
assert(Array.isArray(reviews), 'scenario_reviews missing');
function mapReview(scenarioId, developmentIds, evidencePaths, rationaleSentence) {
  let review = reviews.find((item) => item.scenario_id === scenarioId);
  if (!review) {
    review = {
      scenario_id: scenarioId,
      review_state: 'MAPPED',
      rationale: rationaleSentence,
      development_ids: [...developmentIds],
      evidence_paths: [...evidencePaths],
    };
    reviews.push(review);
    return;
  }
  review.review_state = 'MAPPED';
  review.rationale = `${review.rationale} ${rationaleSentence}`;
  review.development_ids = [...new Set([...(review.development_ids ?? []), ...developmentIds])];
  review.evidence_paths = [...new Set([...(review.evidence_paths ?? []), ...evidencePaths])];
}

mapReview(
  'scenario_tangerine_2015',
  ['microbudget_digital_workflows_and_independent_distribution', 'microbudget_digital_and_self_distribution'],
  [technologyPath],
  'The permanent PV now binds the already verified iPhone/post-production workflow to the reported USD 100,000 independent financing and Magnolia worldwide-rights/theatrical rollout, satisfying both microbudget-digital distribution rows without inventing a self-commissioning studio model.'
);
mapReview(
  'scenario_the_power_of_the_dog_2021',
  ['streaming_native_feature_production_economics', 'streaming_native_feature_economics'],
  [powerDogPath],
  'The enriched PV documents Netflix as major financier inside a producer-led negative-pickup structure, with international-rights allocation, additional producer-side financing and a built-in theatrical window, so the scenario now maps directly to both streaming-feature economics rows.'
);
mapReview(
  'scenario_don_t_look_up_2021',
  ['streaming_native_feature_production_economics', 'streaming_native_feature_economics'],
  [dontLookUpPath],
  'The enriched PV documents Netflix supplying the production budget and global reach after Paramount declined the requested production scale, providing a complementary platform-backed feature-financing model while leaving undisclosed rights and recoupment terms unclaimed.'
);
mapReview(
  'scenario_tenet_2020',
  ['theatrical_windows_and_release_strategy'],
  [tenetPath],
  'The enriched PV ties the pandemic theatrical-release decision to a concrete economic concession: Warner Bros. required Nolan to forgo certain fees to proceed with the reopened-cinema strategy, later repaying them, which satisfies the production-economic consequence requirement.'
);
mapReview(
  'scenario_the_brutalist_2024',
  ['generative_ai_and_machine_learning_in_production_or_post'],
  [brutalistPath],
  'The permanent PV now combines bounded Hungarian-only Respeecher use and explicit non-use boundaries with a human-in-the-loop sound workflow and a documented consent policy, satisfying the exact AI-use plus labor/rights implication requirement without claiming generative authorship.'
);
mapReview(
  'scenario_rrr_2022',
  ['franchise_blockbuster_and_mass_audience_industrial_model'],
  ['src/ui/data/scenarioProductionVerificationRrr.ts'],
  'The existing permanent PV documents industrial-scale production organization, premium IMAX/3D exhibition and subsequent global platform circulation, providing one exact large-scale mass-audience production/distribution case while avoiding unsupported recoupment claims.'
);

write(COVERAGE, `${JSON.stringify(coverage, null, 2)}\n`);
console.log('Representation gap enrichment materialized.');
