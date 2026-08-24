import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 501;

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
  "chapterSeventeenEvesBayouExpansion.ts",
  "chapterSeventeenTheIdiotsExpansion.ts",
  "chapterSeventeenRinguExpansion.ts",
  "chapterSeventeenBlairWitchProjectExpansion.ts",
  "chapterSeventeenBoysDontCryExpansion.ts",
  "chapterSeventeenGoodfellasExpansion.ts",
  "chapterEighteenGleanersExpansion.ts",
  "chapterEighteenInTheMoodForLoveExpansion.ts",
  "chapterEighteenAtanarjuatExpansion.ts",
  "chapterEighteenSpiritedAwayExpansion.ts",
  "chapterEighteenRussianArkExpansion.ts",
  "chapterEighteenCityOfGodExpansion.ts",
  "chapterEighteenAttackOfTheClonesExpansion.ts",
  "chapterEighteenCollateralExpansion.ts",
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
  { title: "Hiroshima mon amour", originalTitle: "Hiroshima mon amour", year: 1959, aliases: [], role: "chapter_thirteen_handoff", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_hiroshima_mon_amour_1959", chapterFunction: "Resnais and Duras turn a documentary commission into a Franco-Japanese fiction about memory, war and representation; it is the Left Bank handoff from Chapter 13 into modernist production." },
  { title: "The 400 Blows", originalTitle: "Les quatre cents coups", year: 1959, aliases: ["Les 400 coups", "The 400 Blows"], role: "chapter_thirteen_handoff", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_400_blows_1959", chapterFunction: "Truffaut's debut is the indispensable Cahiers-side New Wave case: youth production, Paris locations, a new performer, mobile observation and the industrial break represented by a first feature." },
  { title: "Breathless", originalTitle: "À bout de souffle", year: 1960, aliases: ["A bout de souffle", "Breathless"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_breathless_1960", chapterFunction: "Godard's first feature tests the most consequential production-language break in the early New Wave: location shooting, small-unit practice, direct address, discontinuous cutting and post-synchronized sound." },
  { title: "L'Avventura", originalTitle: "L'avventura", year: 1960, aliases: ["L Avventura", "The Adventure"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_l_avventura_1960", chapterFunction: "Antonioni's troubled island production shifts modernism toward duration, landscape, missing causality and precarious location logistics without treating Italian cinema as a French New Wave derivative." },
  { title: "Last Year at Marienbad", originalTitle: "L'Année dernière à Marienbad", year: 1961, aliases: ["L Annee derniere a Marienbad", "Last Year in Marienbad"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_last_year_at_marienbad_1961", chapterFunction: "Resnais and Robbe-Grillet make writing, découpage, architecture, studio-location control and unstable time the material system of Left Bank modernism." },
  { title: "Jules and Jim", originalTitle: "Jules et Jim", year: 1962, aliases: ["Jules & Jim"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_jules_and_jim_1962", chapterFunction: "Truffaut's Carrosse production develops New Wave mobility through adaptation, Raoul Coutard photography, narration, archival material and accelerated historical montage." },
  { title: "Cléo from 5 to 7", originalTitle: "Cléo de 5 à 7", year: 1962, aliases: ["Cleo from 5 to 7", "Cleo de 5 a 7"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_cleo_from_5_to_7_1962", chapterFunction: "Varda's Paris-time structure is the strongest missing Left Bank/feminist counterweight: urban location work, duration, gendered spectatorship, performance and documentary-fiction observation." },
  { title: "8½", originalTitle: "8½", year: 1963, aliases: ["8 1/2", "8 1 2", "Eight and a Half"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_8_1_2_1963", chapterFunction: "Fellini's Italian-French production turns creative blockage, studio labor, spectacle, memory and dream into a self-reflexive production system." },
  { title: "Contempt", originalTitle: "Le Mépris", year: 1963, aliases: ["Le Mepris", "Contempt"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_contempt_1963", chapterFunction: "Godard's prestige co-production exposes producer pressure, star image, widescreen color, adaptation and film-industry self-reflexivity inside rather than outside commercial production." },
  { title: "The Leopard", originalTitle: "Il Gattopardo", year: 1963, aliases: ["Il gattopardo", "The Leopard"], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_leopard_1963", chapterFunction: "Visconti's large-scale historical production prevents modernism from collapsing into small crews: large-format color, elaborate design, political history and international co-production coexist with New Wave economies." },
  { title: "The Umbrellas of Cherbourg", originalTitle: "Les Parapluies de Cherbourg", year: 1964, aliases: ["Umbrellas of Cherbourg"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_umbrellas_of_cherbourg_1964", chapterFunction: "Demy and Legrand make continuous singing, color design, studio discipline and social time into a modernist musical system rather than a rejection of genre craft." },
  { title: "Black Girl", originalTitle: "La Noire de…", year: 1966, aliases: ["La Noire de...", "La Noire de", "Black Girl"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_black_girl_1966", chapterFunction: "Sembène is the essential missing decolonization case: Senegal-France relations, migration, labor, voice, authorship and African production history cannot be represented only through European films about empire." },
  { title: "The Battle of Algiers", originalTitle: "La battaglia di Algeri", year: 1966, aliases: ["La Bataille d Alger", "The Battle of Algiers"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_battle_of_algiers_1966", chapterFunction: "Pontecorvo, Solinas and Yacef join Algerian-Italian financing, nonprofessional casting, Algiers locations and newsreel-like craft to anti-colonial political reconstruction." },
  { title: "Closely Watched Trains", originalTitle: "Ostře sledované vlaky", year: 1966, aliases: ["Ostre sledovane vlaky", "Closely Observed Trains"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_closely_watched_trains_1966", chapterFunction: "Menzel and Hrabal anchor the Czechoslovak New Wave through state-studio production, ordinary wartime space, comic performance and anti-heroic resistance." },
  { title: "Daisies", originalTitle: "Sedmikrásky", year: 1966, aliases: ["Sedmikrasky", "Daisies"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_daisies_1966", chapterFunction: "Chytilová is the missing experimental and feminist Czechoslovak countercase: color, collage, performance, material destruction and censorship broaden the chapter beyond male-centered realist New Waves." },
  { title: "The Firemen's Ball", originalTitle: "Hoří, má panenko", year: 1967, aliases: ["Hori ma panenko", "The Firemens Ball", "The Firemen's Ball"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_firemens_ball_1967", chapterFunction: "Forman's Czech-Italian location production, nonprofessional ensemble and censorship history make institutional satire a concrete production system." },
  { title: "PlayTime", originalTitle: "PlayTime", year: 1967, aliases: ["Playtime"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_playtime_1967", chapterFunction: "Tati's Tativille, 65/70 mm scale and constructed sound world prove that 1960s formal modernism also operated through enormous purpose-built infrastructure and financial risk." },
  { title: "Memories of Underdevelopment", originalTitle: "Memorias del subdesarrollo", year: 1968, aliases: ["Memorias del subdesarrollo", "Memories of Underdevelopment"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_memories_of_underdevelopment_1968", chapterFunction: "Alea's Cuban case is the strongest missing revolutionary-cinema counterweight: post-revolution institutions, archival material, essayistic montage and decolonial modernity expand the chapter beyond Europe and Algeria." },
];

const historicalObjects = [
  ["French New Wave as a critical and industrial formation", "The label groups overlapping but non-identical careers, producers, critics and first-feature conditions; Cahiers filmmakers and the Left Bank are compared rather than collapsed into one aesthetic recipe."],
  ["Auteur criticism and production authorship", "Director-centered criticism changed reception and practice, but producers, writers, performers and craftspeople remain material authors of each production."],
  ["Lightweight cameras, faster stocks and portable sound", "New equipment could reduce crew size and increase location mobility, but every film must prove its actual camera, stock, sound and post-synchronization practice rather than inherit a generic New Wave kit."],
  ["Location production and the transformed city", "Paris, Rome, Hiroshima, Algiers, Prague and other cities become production environments through permits, traffic, weather, labor, architecture and social observation, not merely spontaneous backdrops."],
  ["Modernist time, space and narration", "Ellipsis, duration, discontinuity, direct address, ambiguity and self-reflexivity are constructed through screenplay, staging, camera, editing and sound rather than treated as abstract style tags."],
  ["Festivals, cinematheques, subtitling and art-cinema distribution", "Cannes, Venice, archives, critics and distributors accelerated transnational circulation, but international recognition remains downstream from production and never creates a national cinema retroactively."],
  ["State support, television and co-production", "Public finance, national studios, television partners and cross-border co-productions shape access to equipment, labor, locations and distribution differently across countries."],
  ["Decolonization and revolutionary cinema", "Independence struggles, anti-colonial movements and new national institutions changed who could produce, represent and circulate images; these histories are not exotic subject matter or aesthetic bonuses."],
  ["New Waves beyond France", "Italian, Czechoslovak, African, Cuban and other modernisms have distinct institutions and genealogies; resemblance to France is never the criterion for historical importance."],
  ["Censorship, gender, race and political conflict", "State censorship, colonial hierarchy, gendered labor and political repression materially affect scripts, casting, production and circulation and require historically specific evidence."],
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
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Chapter 14 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
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
  "Chapter 14 begins at the explicit Chapter 13 handoff year 1959. The 400 Blows and Hiroshima mon amour are boundary films, but they represent different French production formations rather than one unified New Wave method.",
  "Cahiers critics-turned-directors and the Left Bank overlap in period and circulation but not in identical production practice; Resnais, Varda, Truffaut and Godard must remain film-specific.",
  "Italian modernism, Czechoslovak New Wave, Senegalese and Cuban cinema, and Algerian anti-colonial production are not branches of a French template. Each enters through its own institutions, labor, politics and craft evidence.",
  "The chapter runs through 1968 because the political and production shocks around decolonization, censorship, Prague Spring and the wider 1968 crisis form a coherent endpoint before later New Hollywood and 1970s political-industrial systems become the organizing problem.",
  "Large-scale films such as The Leopard and PlayTime remain inside the chapter to prevent a false equation between modernism and cheap handheld production.",
];
const safeguards = [
  "New Wave is not a camera preset. Handheld work, lightweight gear, natural light, direct sound, post-synchronization and jump cutting require title-specific production evidence.",
  "Auteur analysis never erases producers, writers, performers, cinematographers, editors, designers, sound workers or public institutions from production history.",
  "The Left Bank and Cahiers groups remain analytically distinct even when festivals and later criticism group them under a broader French New Wave moment.",
  "Modernist ambiguity is constructed craft: screenplay, blocking, camera movement, duration, editing, sound and performance must explain how uncertainty is made.",
  "Decolonization is a material political history, not an aesthetic theme. African, Algerian and Cuban cases are assessed through production ownership, institutions, labor, representation and circulation.",
  "Festivals and later canonization are downstream circulation layers. Cannes or Venice recognition never substitutes for production evidence or imply Western discovery created the cinema being recognized.",
  "State-supported and commercial systems coexist with independent and low-budget work; no simple freedom-versus-studio narrative is allowed.",
  "Gender, race, colonial hierarchy and censorship are production conditions where evidenced, not symbolic diversity tags or quality bonuses.",
  "Restorations, reissues and current aspect-ratio or soundtrack presentations remain separate from original production and release evidence.",
];
const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-19",
  chapter: {
    number: 14,
    id: "new-waves-modernism-decolonization",
    title: "New Waves, modernism and decolonization",
    period: "1959–1968",
    scope: "Cinema from the 1959 French breakthrough through the late-1960s expansion of modernist and politically transformed production: Cahiers and Left Bank practices, Italian modernism, Czechoslovak New Wave, decolonization and revolutionary cinema, changing location technologies, state and co-production systems, and art-cinema circulation.",
    thesis: "The 1960s did not replace classical cinema with one New Wave style. New production systems emerged through criticism, first-feature economics, location practice, changing equipment, state support, co-production, decolonization, censorship and modernist experiments in time, space, performance and sound; their similarities matter only when their different institutions and material conditions remain visible.",
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
