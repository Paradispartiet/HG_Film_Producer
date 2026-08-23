import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 487;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
  "chapterThreeNarrativeExpansion.ts",
  "chapterFourIndustryExpansion.ts",
  "chapterFiveInternationalExpansion.ts",
  "chapterSixHollywoodExpansion.ts",
  "chapterSevenWeimarExpansion.ts",
  "chapterEightFrenchAvantGardeExpansion.ts",
  "chapterNineSovietMontageExpansion.ts",
  "chapterTenSilentCinemasExpansion.ts",
  "chapterTenLaborersLoveExpansion.ts",
  "chapterTenAThrowOfDiceExpansion.ts",
  "chapterTenGrowthOfTheSoilExpansion.ts",
  "chapterTenOrochiExpansion.ts",
  "chapterTenRedHeroineExpansion.ts",
  "chapterTenHaxanExpansion.ts",
  "chapterElevenJazzSingerExpansion.ts",
  "chapterElevenBlackmailExpansion.ts",
  "chapterElevenApplauseExpansion.ts",
  "chapterElevenNeighborsWifeExpansion.ts",
  "chapterElevenBroadwayMelodyExpansion.ts",
  "chapterElevenSousLesToitsExpansion.ts",
  "chapterElevenEnthusiasmExpansion.ts",
  "chapterElevenBlueAngelExpansion.ts",
  "chapterTwelvePublicEnemyExpansion.ts",
  "chapterTwelveDraculaExpansion.ts",
  "chapterTwelve42ndStreetExpansion.ts",
  "chapterTwelveScarfaceExpansion.ts",
  "chapterTwelveItHappenedOneNightExpansion.ts",
  "chapterTwelveTopHatExpansion.ts",
  "chapterTwelveGoneWithTheWindExpansion.ts",
  "chapterThirteenPaisanExpansion.ts",
  "chapterThirteenRedShoesExpansion.ts",
  "chapterThirteenSunsetBoulevardExpansion.ts",
  "chapterThirteenLosOlvidadosExpansion.ts",
  "chapterThirteenUgetsuExpansion.ts",
  "chapterThirteenAManEscapedExpansion.ts",
  "chapterFourteenBlackGirlExpansion.ts",
  "chapterFourteenMemoriesUnderdevelopmentExpansion.ts",
  "chapterFifteenToukiBoukiExpansion.ts",
  "chapterFifteenManilaClawsLightExpansion.ts",
  "chapterFifteenBattleChilePartOneExpansion.ts",
  "chapterSixteenRaidersLostArkExpansion.ts",
  "chapterSixteenYellowEarthExpansion.ts",
  "chapterSixteenMyBeautifulLaundretteExpansion.ts",
  "chapterSixteenPoliceStoryExpansion.ts",
  "chapterSixteenOfficialStoryExpansion.ts",
  "chapterSixteenYeelenExpansion.ts",
  "chapterSixteenDoTheRightThingExpansion.ts",
  "chapterSixteenMephistoExpansion.ts",
  "chapterSixteenMissingExpansion.ts",
  "chapterSixteenBladeRunnerExpansion.ts",
  "chapterSixteenETExtraTerrestrialExpansion.ts",
  "chapterSixteenSugarCaneAlleyExpansion.ts",
  "chapterSixteenTerminatorExpansion.ts",
  "chapterSixteenComeAndSeeExpansion.ts",
  "chapterSixteenBackToTheFutureExpansion.ts",
  "chapterSixteenAliensExpansion.ts",
  "chapterSixteenShesGottaHaveItExpansion.ts",
  "chapterSixteenABetterTomorrowExpansion.ts",
  "chapterSixteenRoboCopExpansion.ts",
  "chapterSixteenSalaamBombayExpansion.ts",
  "chapterSixteenRagingBullExpansion.ts",
  "chapterSeventeenHyenasExpansion.ts",
  "chapterSeventeenSankofaExpansion.ts",
  "chapterSeventeenChungkingExpressExpansion.ts",
  "chapterSeventeenBanditQueenExpansion.ts",
  "chapterSeventeenToyStoryExpansion.ts",
  "chapterSeventeenTheMatrixExpansion.ts",
  "chapterSeventeenShiriExpansion.ts",
  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",
  "chapterSeventeenBoyzNTheHoodExpansion.ts",
  "chapterSeventeenTheLivingEndExpansion.ts",
  "chapterSeventeenThePianoExpansion.ts",
  "chapterSeventeenThreeColoursRedExpansion.ts",
  "chapterSeventeenPulpFictionExpansion.ts",
  "chapterSeventeenHoopDreamsExpansion.ts",
  "chapterSeventeenTheWhiteBalloonExpansion.ts",
  "chapterSeventeenFireExpansion.ts",
  "chapterSeventeenTitanicExpansion.ts",
  "chapterSeventeenPrincessMononokeExpansion.ts",
  "modernCanonExpansion.ts",
  "priorityIndieExpansion.ts",
  "eastAsianAuteurExpansion.ts",
  "japaneseAuteurExpansion.ts",
  "southKoreanCinemaExpansion.ts",
  "southSoutheastAsianExpansion.ts",
  "festivalWinners1981To2009Expansion.ts",
  "festivalWinners2010To2024Expansion.ts",
  "scandinavianEuropeanExpansion.ts",
  "easternIberianBritishExpansion.ts",
  "italyFranceGermanyBeneluxExpansion.ts",
];

const candidates = [
  { title: "The Maltese Falcon", originalTitle: "The Maltese Falcon", year: 1941, aliases: [], role: "handoff_precursor", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_maltese_falcon_1941", chapterFunction: "Warner hard-boiled production is the Chapter 12 handoff into the mature noir cycle; it remains a precursor rather than moving the whole 1941 studio system into Chapter 13." },

  { title: "Double Indemnity", originalTitle: "Double Indemnity", year: 1944, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_double_indemnity_1944", chapterFunction: "Paramount noir joins Production Code negotiation, fatalist adaptation, voice-recorded confession, studio craft and a visual system later grouped under film noir." },
  { title: "Brief Encounter", originalTitle: "Brief Encounter", year: 1945, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_brief_encounter_1945", chapterFunction: "Cineguild's wartime-end melodrama contrasts railway-location production, restrained performance, memory structure and recorded music with American noir and Italian street realism." },
  { title: "Rome, Open City", originalTitle: "Roma città aperta", year: 1945, aliases: ["Roma citta aperta", "Rome Open City"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_rome_open_city_1945", chapterFunction: "Rossellini's post-liberation Rome production anchors occupation history, damaged infrastructure, street locations, mixed stock and the emergence of Italian neorealism." },
  { title: "Bicycle Thieves", originalTitle: "Ladri di biciclette", year: 1948, aliases: ["The Bicycle Thief", "Bicycle Thieves"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_bicycle_thieves_1948", chapterFunction: "De Sica's postwar Rome production makes location work, nonprofessional casting, economic precarity and controlled découpage concrete without treating realism as uncrafted immediacy." },
  { title: "The Third Man", originalTitle: "The Third Man", year: 1949, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_third_man_1949", chapterFunction: "Occupied Vienna turns postwar ruins, multinational production, multiple location units, expressionist-noir photography and source-like zither music into a reconstruction-era production system." },
  { title: "Rashomon", originalTitle: "Rashōmon", year: 1950, aliases: ["Rashomon"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_rashomon_1950", chapterFunction: "Daiei's postwar Japanese production expands the chapter beyond Euro-American realism through contradictory testimony, monumental set construction, forest photography and international festival circulation." },
  { title: "Tokyo Story", originalTitle: "Tōkyō monogatari", year: 1953, aliases: ["Tokyo monogatari"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_tokyo_story_1953", chapterFunction: "Shochiku's mature postwar studio practice shows that postwar cinema also included highly controlled domestic minimalism, fixed camera height and understated ensemble production." },
  { title: "Seven Samurai", originalTitle: "Shichinin no samurai", year: 1954, aliases: ["Seven Samurai"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_seven_samurai_1954", chapterFunction: "Toho's large postwar production combines historical research, constructed village space, location weather, multiple cameras, horse action and editorial geography at industrial scale." },
  { title: "La Strada", originalTitle: "La strada", year: 1954, aliases: [], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_la_strada_1954", chapterFunction: "Fellini's road production marks a documented move from neorealist inheritance toward poetic fable, performance stylization and a recurring musical theme." },
  { title: "Pather Panchali", originalTitle: "Pather Panchali", year: 1955, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_pather_panchali_1955", chapterFunction: "Ray's intermittent Bengal location production makes funding scarcity, government support, non-star casting, location observation and transnational art-cinema circulation visible outside Europe and Japan." },
  { title: "Ordet", originalTitle: "Ordet", year: 1955, aliases: ["The Word"], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_ordet_1955", chapterFunction: "Dreyer's Danish long-take chamber production counters any assumption that postwar realism required handheld location spontaneity or rapid cutting." },
  { title: "The Night of the Hunter", originalTitle: "The Night of the Hunter", year: 1955, aliases: [], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_night_of_the_hunter_1955", chapterFunction: "Paul Gregory and Charles Laughton's independent American production shows postwar expressionism, child viewpoint and studio-built moral fable alongside noir and social realism." },
  { title: "The Seventh Seal", originalTitle: "Det sjunde inseglet", year: 1957, aliases: ["The Seventh Seal"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_seventh_seal_1957", chapterFunction: "Svensk Filmindustri's limited-budget production links theatre ensemble, medieval source imagery, controlled black-and-white photography and the international postwar art-cinema circuit." },
  { title: "Ashes and Diamonds", originalTitle: "Popiół i diament", year: 1958, aliases: ["Popiol i diament"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_ashes_and_diamonds_1958", chapterFunction: "The Polish Film School case places liberation, political transition, one-day structure, state production and expressive black-and-white design inside the chapter's reconstruction problem." },
  { title: "Touch of Evil", originalTitle: "Touch of Evil", year: 1958, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_touch_of_evil_1958", chapterFunction: "Universal/Welles border noir provides a late-cycle studio comparison through location streets, mobile staging, source-music conception and contested postproduction." },
  { title: "Vertigo", originalTitle: "Vertigo", year: 1958, aliases: [], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_vertigo_1958", chapterFunction: "Hitchcock's VistaVision studio-location production shows mature postwar Hollywood color, optical effects, subjective camera engineering and score-driven obsession without reducing the era to realism." },

  { title: "Out of the Past", originalTitle: "Out of the Past", year: 1947, aliases: ["Build My Gallows High"], role: "missing_core_probe", decisionIfMissing: "P0", chapterFunction: "RKO fatalist noir is the strongest gap probe for mature postwar noir: location-studio hybridity, flashback construction, low-key photography, star persona and fatalism." },
  { title: "The Lost Weekend", originalTitle: "The Lost Weekend", year: 1945, aliases: [], role: "major_comparison", decisionIfMissing: "P1", chapterFunction: "Paramount's researched social-problem noir broadens postwar darkness beyond crime into addiction, urban location work, subjective effects and institutional representation." },
  { title: "Paisan", originalTitle: "Paisà", year: 1946, aliases: ["Paisa", "Paisan"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_paisan_1946", chapterFunction: "Rossellini's episodic liberation film tests whether Rome, Open City alone is enough to teach multilingual location production, regional movement and Allied/civilian encounters." },
  { title: "The Red Shoes", originalTitle: "The Red Shoes", year: 1948, aliases: [], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_the_red_shoes_1948", chapterFunction: "Powell and Pressburger's British Technicolor ballet production prevents postwar cinema from becoming synonymous with monochrome scarcity by integrating performance, design, color, optical work, dance and music." },
  { title: "Sunset Boulevard", originalTitle: "Sunset Blvd.", year: 1950, aliases: ["Sunset Boulevard", "Sunset Blvd"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_sunset_boulevard_1950", chapterFunction: "Wilder's Paramount production extends noir into self-reflexive studio history, voice-over death narration, location/studio contrast and industrial memory." },
  { title: "Los olvidados", originalTitle: "Los olvidados", year: 1950, aliases: ["The Young and the Damned"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_los_olvidados_1950", chapterFunction: "Buñuel's Mexico City production is a deliberate non-European social-realist comparison joining location poverty, professional and nonprofessional performance, dream imagery and postwar urban modernity." },
  { title: "Ugetsu", originalTitle: "Ugetsu monogatari", year: 1953, aliases: ["Ugetsu"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_ugetsu_1953", chapterFunction: "Mizoguchi and Daiei provide a postwar Japanese alternative to Kurosawa through long-take staging, period reconstruction, spectral transitions and studio-location integration." },
  { title: "Gategutter", originalTitle: "Gategutter", year: 1949, aliases: [], role: "major_comparison", decisionIfMissing: "P1", chapterFunction: "Norwegian east-Oslo social cinema tests postwar reconstruction through local streets, youth experience and national production conditions rather than importing Italian neorealism as a universal template." },
  { title: "A Man Escaped", originalTitle: "Un condamné à mort s'est échappé", year: 1956, aliases: ["Un condamne a mort s'est echappe", "A Man Escaped"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_a_man_escaped_1956", chapterFunction: "Bresson's resistance-prison production adds materially precise gesture, offscreen sound, non-star performance and controlled repetition to the postwar realism spectrum." },

  { title: "Germany Year Zero", originalTitle: "Germania anno zero", year: 1948, aliases: ["Germany Year Zero"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Rossellini's Berlin ruins extend reconstruction geography but remain comparison-level because Rome, Open City and Paisan already test the core neorealist production problem." },
  { title: "Nights of Cabiria", originalTitle: "Le notti di Cabiria", year: 1957, aliases: ["Nights of Cabiria"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Fellini's Rome location-performance system shows post-neorealist continuity after La Strada without requiring another core case unless a later audit exposes a gap." },
  { title: "Wild Strawberries", originalTitle: "Smultronstället", year: 1957, aliases: ["Smultronstallet", "Wild Strawberries"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Bergman's road-memory drama broadens subjective postwar modernism but stays comparison-level beside The Seventh Seal and Ordet." },
  { title: "Hiroshima mon amour", originalTitle: "Hiroshima mon amour", year: 1959, aliases: [], role: "chapter_fourteen_handoff", decisionIfMissing: "P2", chapterFunction: "Resnais and Duras join documentary memory, international co-production and fractured modernism at the exit boundary; primary New Wave/modernist analysis belongs in Chapter 14." },
  { title: "The 400 Blows", originalTitle: "Les quatre cents coups", year: 1959, aliases: ["The 400 Blows", "Les 400 coups"], role: "chapter_fourteen_handoff", decisionIfMissing: "P2", chapterFunction: "Truffaut's Paris location debut marks the New Wave boundary and is retained as a handoff rather than allowing Chapter 13 to absorb the next production regime." },
];

const historicalObjects = [
  ["War, occupation, liberation and reconstruction", "Destroyed infrastructure, displaced populations, occupation regimes and rebuilding changed access to streets, studios, labor, materials and stories; these are historical conditions, not atmosphere presets."],
  ["Film noir as a retrospective critical category", "The films now grouped as noir were produced through distinct studios, crime traditions, wartime/postwar pressures and craft systems; the later label cannot substitute for film-specific evidence."],
  ["Italian neorealism and the politics of realism", "Location work, nonprofessional performers, social observation and postwar conditions mattered, but neorealism was crafted, heterogeneous and never a universal recipe for authenticity."],
  ["Postwar studio continuity and independent production", "Classical studios did not disappear after 1945; studio assignments, independent packages, national companies and state systems coexisted with location-centered production."],
  ["Location production, post-synchronization and mobile units", "Street access, weather, transport, lightweight practice and post-synced sound altered workflows differently by country; scarcity and mobility must remain production-specific."],
  ["Festivals, subtitling, export and art-cinema circulation", "Venice, Cannes, distributors, cinematheques and subtitled prints changed international visibility, but festival recognition is downstream from production and must not be mistaken for authorship."],
  ["Decolonization, national cinemas and transnational exchange", "Postwar cinema expanded through colonial breakdown, new states, public funding, co-production and cross-border circulation; Europe and Hollywood are not universal baselines."],
  ["Black-and-white, color, widescreen and special-process coexistence", "Monochrome realism, Technicolor spectacle, VistaVision and optical work coexisted; technological chronology must not become a simple progress ladder."],
  ["Cold War institutions, censorship and social-problem filmmaking", "State systems, the PCA, occupation authorities, anti-communism and national censorship affected scripts, labor and circulation differently and require film-specific attribution."],
  ["Race, class, gender, empire, trauma and memory", "Postwar representation includes poverty, genocide, colonialism, migration, gendered labor and racial hierarchy; historical harm is analyzed critically rather than rewarded as period authenticity."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

function normalize(value) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
}
function readText(filePath) { return readFileSync(filePath, "utf8"); }
function parseQuotedStrings(value) {
  const strings = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) strings.push(JSON.parse(`"${match[1]}"`));
  return strings;
}
function findMatchingBracket(source, startIndex, openCharacter, closeCharacter) {
  let depth = 0; let quote = null; let escaped = false;
  for (let index = startIndex; index < source.length; index += 1) {
    const character = source[index];
    if (quote) { if (escaped) escaped = false; else if (character === "\\") escaped = true; else if (character === quote) quote = null; continue; }
    if (character === '"' || character === "'" || character === "`") { quote = character; continue; }
    if (character === openCharacter) depth += 1;
    if (character === closeCharacter) { depth -= 1; if (depth === 0) return index; }
  }
  throw new Error(`Unclosed ${openCharacter} beginning at ${startIndex}`);
}
function extractTopLevelObjects(arraySource) {
  const objects = []; let index = 0;
  while (index < arraySource.length) {
    if (arraySource[index] !== "{") { index += 1; continue; }
    const endIndex = findMatchingBracket(arraySource, index, "{", "}");
    objects.push(arraySource.slice(index, endIndex + 1)); index = endIndex + 1;
  }
  return objects;
}
function stringField(objectSource, fieldName, required = true) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (!match) { if (!required) return undefined; throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`); }
  return JSON.parse(`"${match[1]}"`);
}
function numberField(objectSource, fieldName) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*(\\d+)`));
  if (!match) throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`); return Number(match[1]);
}
function stringArrayField(objectSource, fieldName, required = true) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*\\[([^\\]]*)\\]`));
  if (!match) { if (!required) return []; throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`); }
  return parseQuotedStrings(match[1]);
}
function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Could not locate definitions array in ${fileName}`);
  const arrayStart = source.indexOf("[", declaration.index);
  const arrayEnd = findMatchingBracket(source, arrayStart, "[", "]");
  const objectSources = extractTopLevelObjects(source.slice(arrayStart + 1, arrayEnd));
  const status = source.match(/\bstatus\s*:\s*"([^"]+)"/)?.[1] ?? "manual_expansion_needs_source_verification";
  const sourceListId = source.match(/\blist_id\s*:\s*"([^"]+)"/)?.[1] ?? fileName.replace(/\.ts$/, "");
  return { fileName, status, sourceListId, definitions: objectSources.map((objectSource) => ({ id: stringField(objectSource, "id"), title: stringField(objectSource, "title"), originalTitle: stringField(objectSource, "originalTitle"), aliases: stringArrayField(objectSource, "aliases", false), year: numberField(objectSource, "year"), directors: stringArrayField(objectSource, "directors"), genres: stringArrayField(objectSource, "genres") })) };
}
function scenarioTitles(scenario) { return [scenario.title, scenario.originalTitle].filter(Boolean).map(normalize); }
function definitionTitles(definition) { return [definition.title, definition.originalTitle, ...definition.aliases].filter(Boolean).map(normalize); }
function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const acceptedTitles = new Set(definitionTitles(definition));
  return scenarioTitles(scenario).some((title) => acceptedTitles.has(title));
}
function buildAtlas() {
  const seedFile = JSON.parse(readText(seedPath));
  const scenarios = seedFile.scenarios.map((scenario) => ({ id: scenario.id, title: scenario.film.title, originalTitle: scenario.film.original_title, year: scenario.film.year, directors: scenario.film.directors, genres: scenario.film.genres, status: scenario.status, sourceListId: scenario.source.list_id, origin: "film_scenarios_seed.json" }));
  const expansionStats = [];
  for (const fileName of expansionFiles) {
    const expansion = parseExpansion(fileName); let appended = 0; let matchedExisting = 0;
    for (const definition of expansion.definitions) {
      const existing = scenarios.find((scenario) => matchesDefinition(scenario, definition));
      if (existing) { matchedExisting += 1; continue; }
      scenarios.push({ id: definition.id, title: definition.title, originalTitle: definition.originalTitle, year: definition.year, directors: definition.directors, genres: definition.genres, status: expansion.status, sourceListId: expansion.sourceListId, origin: fileName }); appended += 1;
    }
    expansionStats.push({ fileName, definitions: expansion.definitions.length, appended, matchedExisting, status: expansion.status, sourceListId: expansion.sourceListId });
  }
  return { scenarios, expansionStats };
}
function matchesCandidate(scenario, candidate) {
  if (scenario.year !== candidate.year) return false;
  const candidateTitles = [candidate.title, candidate.originalTitle, ...(candidate.aliases ?? [])].map(normalize);
  return [scenario.title, scenario.originalTitle].map(normalize).some((title) => title && candidateTitles.includes(title));
}

const atlas = buildAtlas();
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Chapter 13 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
const resolvedCandidates = candidates.map((candidate) => {
  const matches = atlas.scenarios.filter((scenario) => matchesCandidate(scenario, candidate));
  if (matches.length > 1) throw new Error(`${candidate.title}: expected at most one Atlas match, found ${matches.length}`);
  const match = matches[0] ?? null;
  if (candidate.decisionIfMissing === "EXISTING_REQUIRED") {
    if (!match) throw new Error(`${candidate.title}: required existing Atlas case is missing`);
    if (candidate.expectedScenarioId && match.id !== candidate.expectedScenarioId) throw new Error(`${candidate.title}: expected ${candidate.expectedScenarioId}, found ${match.id}`);
  }
  return { ...candidate, decision: match ? "USE_EXISTING" : candidate.decisionIfMissing, scenarioId: match?.id ?? null, matches: matches.length, origin: match?.origin ?? null };
});
const byDecision = { USE_EXISTING: [], P0: [], P1: [], P2: [], EXISTING_REQUIRED: [] };
for (const candidate of resolvedCandidates) byDecision[candidate.decision].push(candidate.title);

const boundaryNotes = [
  "Chapter 13 begins where Chapter 12 explicitly hands off mature noir: the classical studio system persists, but wartime endings, occupation, reconstruction, location practice and new national/transnational production conditions become the primary questions.",
  "The Maltese Falcon remains a Chapter 12-era precursor and bridge. Double Indemnity and Out of the Past test the mature noir cycle without pretending that noir was a single contemporary studio movement or visual recipe.",
  "Rome, Open City and Bicycle Thieves anchor Italian neorealism, but the chapter must compare rather than universalize their location, casting and social-observation practices.",
  "Rashomon, Tokyo Story, Seven Samurai and Pather Panchali make the postwar story explicitly global; festival discovery must not be narrated as the moment these cinemas came into existence.",
  "The Seventh Seal, Ordet and Ashes and Diamonds demonstrate distinct Nordic and East-European institutions and styles rather than one generic European art-cinema preset.",
  "Hiroshima mon amour and The 400 Blows sit at the exit boundary. Their primary New Wave and modernist production analysis belongs in Chapter 14.",
  "Chapter 13 ends before portable-camera/recorder New Wave practice becomes the organizing problem; 1959 is a boundary year, not a claim that all cinema changed at once.",
];
const safeguards = [
  "Realism is a production strategy, not the absence of craft. Location shooting, nonprofessional casting, long takes, available light, post-synchronization and sparse design require film-specific evidence and deliberate organization.",
  "Film noir is a retrospective category with contested boundaries. It must never trigger a generic low-key-lighting, venetian-blind or fatalism preset without evidence from the individual production.",
  "Postwar scarcity is not universal: Technicolor, VistaVision, studio sets, optical effects, large crews and costly productions coexist with damaged infrastructure and small location units.",
  "Nonprofessional performance is not automatic authenticity. Casting, rehearsal, direction, labor conditions and the relation between professional and nonprofessional performers remain attributable choices.",
  "Festivals, prizes, subtitling and later canonization are circulation and reception history, not proof that a film was created for international prestige or discovered by Western institutions.",
  "Decolonization, occupation, genocide, class poverty, race and empire require historically specific framing. Trauma or deprivation must never become an aesthetic quality bonus.",
  "Postwar world cinema is not defined by distance from Hollywood. Japanese, Indian, Nordic, Polish, Mexican, British, Italian and American systems are compared on their own institutional and production terms.",
  "Original release, censorship, alternate versions, reissues, restorations and modern digital presentations remain distinct evidence layers.",
];
const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-19",
  chapter: {
    number: 13,
    id: "postwar-noir-realism-reconstruction",
    title: "Postwar noir, realism and reconstruction",
    period: "1944–1959",
    scope: "Cinema across the end of the Second World War and the first postwar decade-and-a-half: mature film noir, British wartime-end and postwar production, Italian neorealism, occupation and reconstruction, location practice, postwar studio continuity, emerging art-cinema circulation, and globally distinct Japanese, Indian, Nordic, East-European and Latin American production systems.",
    thesis: "Postwar cinema did not replace studio craft with one new realism. It multiplied production systems: noir reworked studio and location crime traditions; neorealism rebuilt cinema around streets, social observation and constrained infrastructure; national studios, independent packages and state systems developed distinct responses to war, reconstruction and decolonization; and international circulation connected these practices without making them stylistically uniform.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.scenarios.length, expansionOrder: atlas.expansionStats },
  candidates: resolvedCandidates,
  byDecision,
  recommendedNewProductionCases: resolvedCandidates.filter((item) => item.decision === "P0" || item.decision === "P1").map((item) => item.title),
  historicalObjects,
  boundaryNotes,
  safeguards,
};
const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath); mkdirSync(path.dirname(absolute), { recursive: true }); writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}
console.log(JSON.stringify(report, null, 2));
