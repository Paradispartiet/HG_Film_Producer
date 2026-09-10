import fs from 'node:fs';

const coveragePath = 'data/film/film_history_representation_coverage_v1.json';
const atlasPath = 'docs/film-history-chapter-sixteen-atlas-resolved.json';
const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
const atlas = JSON.parse(fs.readFileSync(atlasPath, 'utf8'));

if (!Array.isArray(coverage.scenario_reviews) || coverage.scenario_reviews.length !== 141) {
  throw new Error(`Expected 141 existing scenario reviews, got ${coverage.scenario_reviews?.length}`);
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
const chapter16AtlasIds = collectUseExisting(atlas);

const MODERN = 'modern_popular_commercial_cinema_as_industry';
const GENRE = 'genre_industries_horror_action_comedy_romance_exploitation_local_popular';
const TRANSNATIONAL = 'decolonial_transnational_historiography';
const MODERNISM = 'modernism_new_waves_alternative_movements';
const JAPAN = 'japan_industry_system';
const CHINA = 'china_industry_system';
const INDIA = 'india_modern_industry_system';
const LATAM = 'latin_america_beyond_single_movement';

const mapped = (scenario_id, development_ids, evidence_paths, rationale) => ({
  scenario_id,
  review_state: 'MAPPED',
  development_ids,
  evidence_paths,
  rationale,
});
const reviewed = (scenario_id, rationale, evidence_paths = undefined) => ({
  scenario_id,
  review_state: 'REVIEWED_NO_MAPPING',
  development_ids: [],
  ...(evidence_paths ? { evidence_paths } : {}),
  rationale,
});

const reviews = [
  reviewed('scenario_raging_bull_1980', 'The verified United Artists/Chartoff-Winkler case documents controlled black-and-white studio-auteur production, boxing choreography and post-production craft, but the current matrix has no exact 1980s American studio-auteur development and formal prestige alone does not justify a forced mapping.'),
  mapped('scenario_the_shining_1980', [GENRE], ['src/ui/data/scenarioProductionVerification.ts'], 'The verified Warner/Elstree production anchors horror to prolonged studio production, controlled set construction and specialist camera/craft work, adding a concrete late-studio horror workflow to the already triangulated genre-industry row.'),
  mapped('scenario_mephisto_1981', [TRANSNATIONAL], ['src/ui/data/scenarioProductionVerificationMephisto.ts'], 'The verified Hungarian-West German-Austrian production documents cross-border financing, institutions and labor, making an exact European transnational production system rather than a nationality label.'),
  mapped('scenario_raiders_of_the_lost_ark_1981', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationRaidersLostArk.ts'], 'The verified Lucasfilm/Paramount case documents large-scale multi-country location and stage production, effects infrastructure and studio distribution. It therefore adds exact blockbuster and adventure-genre industrial evidence.'),
  mapped('scenario_missing_1982', [TRANSNATIONAL], ['src/ui/data/scenarioProductionVerificationMissing.ts'], 'The verified Universal/PolyGram case documents a multinational production using Mexico for Chile and a cross-border institutional production package, supplying exact transnational political-production evidence.'),
  mapped('scenario_blade_runner_1982', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationBladeRunner.ts'], 'The verified Ladd Company/Warner case documents expensive science-fiction worldbuilding, specialist effects/design labor and commercial studio distribution, grounding genre and popular-cinema industry in production infrastructure.'),
  mapped('scenario_et_the_extra_terrestrial_1982', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationETExtraTerrestrial.ts'], 'The verified Amblin/Universal case documents coordinated commercial studio production and effects-driven family science fiction, adding another exact mass-audience genre-production model.'),
  reviewed('scenario_rumble_fish_1983', 'The scenario is production-verified and useful for 1980s American auteur practice, but the current matrix has no exact development row for this formation and visual style alone is insufficient to force a modernism or genre-system mapping.'),
  mapped('scenario_the_ballad_of_narayama_1983', [JAPAN], ['src/ui/data/scenarioProductionVerification1980sPoliticalPalmeSystemsBatch.ts'], 'The verified Toei/Imamura case anchors a distinct 1980s Japanese company, labor and location-production system, extending the already triangulated Japan-industry row with a later institutional model.'),
  mapped('scenario_sugar_cane_alley_1983', [TRANSNATIONAL], ['src/ui/data/scenarioProductionVerificationSugarCaneAlley.ts'], 'The verified Martinique-France case documents postcolonial location production and French-Caribbean production/circulation structures, providing exact transnational production evidence rather than representation by setting alone.'),
  reviewed('scenario_blood_simple_1984', 'The verified independent American production is important for low-budget production history, but it is photochemical rather than digital and the current matrix has no exact 1980s microbudget-independent row; it is therefore not backfilled into the later microbudget-digital development.'),
  reviewed('scenario_paris_texas_1984', 'The scenario is an important transatlantic art-cinema case, but this Chapter 16 pass does not have an exact permanent PV evidence path for the claimed co-production mechanism. It remains reviewed without mapping rather than relying on a guessed file or nationality proxy.'),
  mapped('scenario_yellow_earth_1984', [CHINA, MODERNISM], ['src/ui/data/scenarioProductionVerificationYellowEarth.ts'], 'The verified Guangxi Film Studio case documents regional-studio production and the Fifth Generation institutional/formal break, grounding both Mainland Chinese industry history and alternative-movement practice in exact production organization.'),
  mapped('scenario_the_terminator_1984', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationTerminator.ts'], 'The verified Hemdale/Pacific Western/Orion case documents independent financing, tightly constrained genre production and commercial distribution, adding a distinct low-budget-to-mainstream action/science-fiction industry model.'),
  reviewed('scenario_come_and_see_1985', 'The verified Mosfilm/Belarusfilm case strongly documents Soviet state-studio war production, but the current matrix has no Soviet-state-production development row and war subject matter alone does not justify a generic genre mapping.'),
  reviewed('scenario_tampopo_1985', 'The scenario is production-verified and relevant to 1980s Japanese cinema, but this pass does not establish an exact additional industrial mechanism needed by the already triangulated Japan row. It is kept reviewed without a guessed evidence path or tokenistic nationality mapping.'),
  reviewed('scenario_my_beautiful_laundrette_1985', 'The verified Channel 4/Film on Four case documents broadcaster-financed 16 mm production and later 35 mm theatrical expansion, but the present matrix has no dedicated broadcaster-to-theatrical workflow row; it is kept reviewed without a forced proxy mapping.'),
  mapped('scenario_police_story_1985', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationPoliceStory.ts'], 'The verified Golden Harvest/Jackie Chan Stunt Team case documents Hong Kong commercial action production, specialist stunt labor and company infrastructure, supplying exact popular-cinema and genre-industry evidence.'),
  mapped('scenario_the_official_story_1985', [LATAM], ['src/ui/data/scenarioProductionVerificationOfficialStory.ts'], 'The verified Argentine post-dictatorship production adds a national and institutional production system distinct from the Cuban and Chilean cases already mapped, strengthening Latin America as multiple concrete systems rather than one movement.'),
  mapped('scenario_back_to_the_future_1985', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationBackToTheFuture.ts'], 'The verified Amblin/Universal case documents coordinated commercial studio production, effects work and mass-market science-fiction/comedy organization, supplying exact blockbuster-era genre-industry evidence.'),
  reviewed('scenario_down_by_law_1986', 'The production-verified independent feature is a strong American art-cinema case, but the matrix has no exact 1980s US independent-development row and its alternative style alone is insufficient to force a movement mapping.'),
  mapped('scenario_aliens_1986', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationAliens.ts'], 'The verified Brandywine/20th Century Fox case documents franchise continuation, British studio infrastructure, specialist effects labor and action/science-fiction production at commercial scale.'),
  reviewed('scenario_shes_gotta_have_it_1986', 'The verified microbudget Super 16 case is crucial independent-production evidence, but the current open matrix row is explicitly microbudget digital workflow and distribution. A photochemical 1986 case cannot close or map to that later digital development by analogy.'),
  mapped('scenario_a_better_tomorrow_1986', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationABetterTomorrow.ts'], 'The verified Hong Kong case documents commercial crime/action production and a repeatable genre-company system, adding exact non-Hollywood popular-production evidence.'),
  mapped('scenario_yeelen_1987', [TRANSNATIONAL], ['src/ui/data/scenarioProductionVerificationYeelen.ts'], 'The verified Mali-Burkina Faso-France-GDR case documents cross-border financing, institutions and production labor, supplying exact African-European transnational production-system evidence.'),
  mapped('scenario_robocop_1987', [MODERN, GENRE], ['src/ui/data/scenarioProductionVerificationRoboCop.ts'], 'The verified Orion case documents commercial science-fiction/action production, effects and specialist craft inside an industrial genre package, strengthening the mass-market and genre-system rows.'),
  reviewed('scenario_pelle_the_conqueror_1987', 'The verified Danish-Swedish historical production is relevant Nordic and European co-production history, but the current matrix has no exact modern Nordic co-production row; award status or nationality alone cannot justify a proxy mapping.'),
  reviewed('scenario_landscape_in_the_mist_1988', 'The permanent Production Verification record directly verifies the Greek-French-Italian 35 mm co-production, named production partners and production crafts. The current matrix still has no dedicated Balkan/Greek transnational row, so the case remains reviewed without mapping rather than being forced into another geography.', ['src/ui/data/scenarioProductionVerificationEuropeanPoeticMemorySystemsBatch.ts']),
  reviewed('scenario_cinema_paradiso_1988', 'The film is production-verified, but its projection booth, cinema venue and spectators are fictional narrative content. That cannot be treated as factual exhibition or audience-history evidence, so no viewing-history mapping is made.'),
  mapped('scenario_salaam_bombay_1988', [INDIA, TRANSNATIONAL], ['src/ui/data/scenarioProductionVerificationSalaamBombay.ts'], 'The verified Bombay location production documents Mirabai Films, Channel Four, Cadrage, La Sept, NFDC and Doordarshan across India/UK/France, plus workshop-based child performance and documentary-informed research. This is exact modern Indian financing and industrial-organization evidence sufficient for India status 2, while one case is insufficient for status 3.'),
  reviewed('scenario_a_city_of_sadness_1989', 'The verified Taiwan production is important Chinese-language and Taiwan New Cinema history, but Taiwan is not Mainland China and the current matrix has no Taiwan-industry row. It is therefore not misclassified into china_industry_system.'),
  mapped('scenario_do_the_right_thing_1989', [MODERN], ['src/ui/data/scenarioProductionVerificationDoTheRightThing.ts'], 'The verified 40 Acres and a Mule/Universal case documents Black-led mid-budget production inside mainstream studio distribution, providing exact commercial-industry evidence without reducing the case to identity representation.'),
  mapped('scenario_sex_lies_and_videotape_1989', [MODERN], ['src/ui/data/scenarioProductionVerificationAmericanIndependentBreakthroughsBatch.ts'], 'The verified case documents Sundance market visibility followed by Miramax acquisition and specialty theatrical distribution, making independent-to-commercial distribution economics concrete rather than treating festival prestige as the evidence.'),
  reviewed('scenario_black_rain_imamura_1989', 'The production-verified Imamura feature is relevant to late-1980s Japanese historical cinema, but the current review does not establish a distinct additional industrial mechanism needed by the already triangulated Japan row; it is kept reviewed without tokenistic nationality mapping.'),
];

if (reviews.length !== 34) throw new Error(`Expected 34 Chapter 16 reviews, got ${reviews.length}`);
const ids = reviews.map((review) => review.scenario_id);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate Chapter 16 scenario review id');
for (const id of ids) {
  if (!chapter16AtlasIds.has(id)) throw new Error(`Chapter 16 atlas does not mark ${id} USE_EXISTING`);
}
const existingIds = new Set(coverage.scenario_reviews.map((review) => review.scenario_id));
for (const id of ids) {
  if (existingIds.has(id)) throw new Error(`Scenario already reviewed before Chapter 16: ${id}`);
}
for (const review of reviews) {
  for (const evidencePath of review.evidence_paths ?? []) {
    if (!fs.existsSync(evidencePath)) throw new Error(`Missing permanent evidence path for ${review.scenario_id}: ${evidencePath}`);
  }
}
const landscapePath = 'src/ui/data/scenarioProductionVerificationEuropeanPoeticMemorySystemsBatch.ts';
const landscape = reviews.find((review) => review.scenario_id === 'scenario_landscape_in_the_mist_1988');
if (!landscape || landscape.review_state !== 'REVIEWED_NO_MAPPING' || landscape.evidence_paths?.length !== 1 || landscape.evidence_paths[0] !== landscapePath) {
  throw new Error('Landscape in the Mist must remain REVIEWED_NO_MAPPING with its exact permanent PV path');
}
const landscapePv = fs.readFileSync(landscapePath, 'utf8');
if (!landscapePv.includes('scenarioId: "scenario_landscape_in_the_mist_1988"') || !landscapePv.includes('status: "verified"')) {
  throw new Error('Landscape in the Mist permanent PV record is missing or not verified');
}

const india = coverage.developments.find((row) => row.development_id === INDIA);
if (!india || india.declared_status !== 0) throw new Error(`Expected India status 0, got ${india?.declared_status}`);
india.declared_status = 2;

const pather = coverage.scenario_reviews.find((review) => review.scenario_id === 'scenario_pather_panchali_1955');
if (!pather) throw new Error('Missing Pather Panchali review');
pather.rationale = 'The verified case documents intermittent Bengal location production, a three-year funding struggle, Government of West Bengal support, MoMA finishing assistance, imported raw stock, non-star casting and international circulation. These facts supply exact postcolonial/transnational financing and production evidence. At the Chapter 13 review this case alone did not establish a modern Indian industry system; Chapter 16 later adds Salaam Bombay as separate modern financing and institutional evidence.';

coverage.scenario_reviews.push(...reviews);
coverage.audited_at = '2026-09-10';

if (coverage.scenario_reviews.length !== 175) throw new Error(`Expected 175 final reviews, got ${coverage.scenario_reviews.length}`);
if (coverage.developments.find((row) => row.development_id === INDIA)?.declared_status !== 2) throw new Error('India status failed to materialize at 2');
if (coverage.closure_contract?.selection_may_be_called_representationally_audited !== false) throw new Error('Closure must remain fail-closed after Chapter 16');

fs.writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);
console.log('Chapter 16 representation audit materialized: 141 -> 175 reviews; India 0 -> 2; closure remains fail-closed.');
