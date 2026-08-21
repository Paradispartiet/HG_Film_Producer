import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 465;

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
  { title: "King Kong", originalTitle: "King Kong", year: 1933, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_king_kong_1933", chapterFunction: "RKO special-effects adventure integrates miniature/stop-motion work, composite photography, score and synchronized effects inside a mature studio pipeline." },
  { title: "Modern Times", originalTitle: "Modern Times", year: 1936, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_modern_times_1936", chapterFunction: "Chaplin's independent production tests the classical system from its edge: long production, constructed factory space, synchronized score/effects and selective resistance to dialogue." },
  { title: "Snow White and the Seven Dwarfs", originalTitle: "Snow White and the Seven Dwarfs", year: 1937, aliases: ["Snow White"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_snow_white_and_the_seven_dwarfs_1937", chapterFunction: "Disney's feature-animation pipeline exposes departmental specialization, personality animation, multiplane photography, Technicolor, music and industrial scale." },
  { title: "The Rules of the Game", originalTitle: "La Règle du jeu", year: 1939, aliases: ["La Regle du jeu", "Rules of the Game"], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_rules_of_the_game_1939", chapterFunction: "Renoir's independent French production provides a necessary comparison to Hollywood continuity and studio hierarchy through ensemble staging, deep space, long takes and reconstruction history." },
  { title: "Stagecoach", originalTitle: "Stagecoach", year: 1939, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_stagecoach_1939", chapterFunction: "Walter Wanger/Ford western production connects genre, stars, Monument Valley location work, stunt specialization, continuity editing and prestige distribution." },
  { title: "The Wizard of Oz", originalTitle: "The Wizard of Oz", year: 1939, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_wizard_of_oz_1939", chapterFunction: "MGM's musical-fantasy pipeline integrates adaptation, pre-scoring, Technicolor, art direction, costume, makeup, effects, editing and star performance." },
  { title: "Citizen Kane", originalTitle: "Citizen Kane", year: 1941, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_citizen_kane_1941", chapterFunction: "RKO/Mercury production reveals how unusual contractual autonomy can work inside studio infrastructure across screenplay, deep focus, sets, optical work, editing, overlapping dialogue and score." },
  { title: "Casablanca", originalTitle: "Casablanca", year: 1942, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_casablanca_1942", chapterFunction: "Warner Bros. wartime production anchors collaborative studio authorship, continuing script revision, lot construction, multinational casting, continuity departments, music and topical release." },

  { title: "The Public Enemy", originalTitle: "The Public Enemy", year: 1931, aliases: [], role: "missing_core_case", decisionIfMissing: "P0", expectedScenarioId: "scenario_the_public_enemy_1931", chapterFunction: "Warner gangster production is the clearest missing case for genre cycles, star voice/persona, urban violence, studio economy and the pre-Code/Code boundary." },
  { title: "Dracula", originalTitle: "Dracula", year: 1931, aliases: ["Drácula"], role: "missing_core_case", decisionIfMissing: "P0", expectedScenarioId: "scenario_dracula_1931", chapterFunction: "Universal horror and the English/Spanish parallel-production history make studio house style, night-shift versioning, performance, sets, sound and genre branding concrete." },
  { title: "42nd Street", originalTitle: "42nd Street", year: 1933, aliases: ["Forty-Second Street"], role: "missing_core_case", decisionIfMissing: "P0", expectedScenarioId: "scenario_42nd_street_1933", chapterFunction: "Warner's backstage musical and Busby Berkeley production system expose choreography for camera, studio scheduling, song recording, massed bodies, editing and Depression-era genre economics." },

  { title: "Frankenstein", originalTitle: "Frankenstein", year: 1931, aliases: [], role: "major_comparison", decisionIfMissing: "P1", chapterFunction: "Universal's monster cycle broadens horror into makeup, laboratory design, performance iconography, censorship and reusable studio genre infrastructure." },
  { title: "Scarface", originalTitle: "Scarface", year: 1932, aliases: ["Scarface: The Shame of the Nation", "Scarface, The Shame of a Nation", "The Menace", "The Scar"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_scarface_1932", chapterFunction: "Howard Hawks/Howard Hughes production sharpens the relation among gangster-cycle competition, censorship negotiation, violence, star image and release delay." },
  { title: "It Happened One Night", originalTitle: "It Happened One Night", year: 1934, aliases: ["Night Bus"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_it_happened_one_night_1934", chapterFunction: "Columbia's screwball breakthrough tests how a smaller studio could organize stars, location work, dialogue rhythm and genre formula into prestige success." },
  { title: "Top Hat", originalTitle: "Top Hat", year: 1935, aliases: [], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_top_hat_1935", chapterFunction: "RKO's Astaire-Rogers musical provides a contrasting musical system built around full-body dance, art-deco space, song, rehearsal, camera duration and star pairing." },
  { title: "Gone with the Wind", originalTitle: "Gone with the Wind", year: 1939, aliases: [], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_gone_with_the_wind_1939", chapterFunction: "Selznick's prestige epic exposes producer-centered package production, Technicolor, multiple directors, large-scale design and effects while requiring explicit critique of Lost Cause mythology and racist representation." },

  { title: "Duck Soup", originalTitle: "Duck Soup", year: 1933, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Paramount/Marx comedy broadens studio comedy, dialogue, music and anarchic performance without duplicating the core studio-system cases." },
  { title: "Bride of Frankenstein", originalTitle: "Bride of Frankenstein", year: 1935, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Universal's sequel shows genre-cycle refinement, returning departments and house style after Frankenstein." },
  { title: "Swing Time", originalTitle: "Swing Time", year: 1936, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "A second Astaire-Rogers musical remains comparison-level unless Top Hat leaves an unresolved production-system gap." },
  { title: "Bringing Up Baby", originalTitle: "Bringing Up Baby", year: 1938, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "RKO screwball production extends dialogue timing, star pairing, animal work and controlled chaos without requiring another core comedy case." },
  { title: "The Adventures of Robin Hood", originalTitle: "The Adventures of Robin Hood", year: 1938, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Warner's Technicolor adventure broadens color, action, costume, scoring and prestige genre production." },
  { title: "His Girl Friday", originalTitle: "His Girl Friday", year: 1940, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Columbia/Hawks rapid dialogue and overlapping performance provide a mature continuity-era sound comparison after the sound transition is complete." },
  { title: "The Maltese Falcon", originalTitle: "The Maltese Falcon", year: 1941, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Warner's crime production helps bridge gangster and emerging noir systems, but noir's mature cycle belongs primarily in the following chapter." },
  { title: "Meet Me in St. Louis", originalTitle: "Meet Me in St. Louis", year: 1944, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "MGM's integrated musical-family production demonstrates the mature studio musical after the 1930s transition and genre consolidation." },
];

const historicalObjects = [
  ["Vertically integrated studios, the Big Five and the Little Three", "Production, distribution and exhibition power shaped budgets, release access and house practices; corporate structure is an institutional object, not a fake film."],
  ["Block booking, theatre ownership and the A/B-picture economy", "Packages, owned theatres, double features and supporting pictures structured demand and production volume beyond individual prestige films."],
  ["The Production Code Administration and censorship negotiation", "The PCA influenced scripts, representation, violence and sexuality after 1934, but Code enforcement varied by film and must not become a universal causal preset."],
  ["Long-term contracts, stars and studio labor allocation", "Actors, directors, writers and craftspeople worked through contracts, loans and assignments; the star system is labor organization as well as publicity."],
  ["Departmental specialization and continuity production", "Art, camera, costume, makeup, editing, sound, music, effects and production management formed coordinated pipelines whose authorship must remain attributable."],
  ["Genre cycles, house styles and audience expectation", "Gangster, horror, musical, western, screwball, animation and prestige cycles organized risk and reuse without making genre a deterministic recipe."],
  ["Backlots, sound stages, location units and standing sets", "Studio space enabled controlled continuity and reuse while location work remained a significant alternative; neither mode is inherently more authentic."],
  ["Technicolor, animation and special-effects pipelines", "Color separation, animation departments, miniatures, optical composites and effects photography are industrial systems with specialized labor, not generic spectacle buttons."],
  ["Guilds, unions, credits and invisible labor", "Growing specialization and collective organization changed bargaining and attribution; credited authorship never exhausts the workforce behind a studio film."],
  ["Race, gender, class, colonial myth and representational constraint", "Studio genres circulated stereotypes and exclusions alongside formal innovation; racist, sexist or colonial conventions are historical structures to analyze critically, never quality presets."],
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
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Chapter 12 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
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
  "Chapter 12 begins after the sound-transition problem: synchronized sound is now infrastructure, while studio organization, genre cycles and departmental coordination become the primary production questions.",
  "The Public Enemy, Dracula and 42nd Street are explicit Chapter 11 handoffs whose primary genre-system analysis belongs here; they are P0 rather than newly invented priorities.",
  "King Kong, Modern Times, Snow White and the Seven Dwarfs, Stagecoach, The Wizard of Oz, Citizen Kane and Casablanca already exist as verified Production Cases and must be reused, not rematerialized.",
  "The Rules of the Game remains a deliberate non-Hollywood comparison: Chapter 12 must not mistake classical Hollywood practice for a universal global norm.",
  "Gone with the Wind can only be used with explicit critique of Lost Cause mythology, slavery erasure and racist representation; production scale never neutralizes ideology.",
  "No genre label is a complete production explanation: studio, producer, department, labor, technology, censorship, budget and release evidence remain film-specific.",
];
const safeguards = [
  "Studio-system gameplay must preserve company and departmental attribution; a generic Hollywood preset cannot replace producer, craft, labor or technology evidence.",
  "Production Code enforcement is historically bounded and negotiated. The PCA must not be treated as a single switch that explains every narrative or representational choice after 1934.",
  "Genre cycles organize expectation and reuse but do not determine one correct style; gangster, horror, musical, western, screwball, animation and prestige films require distinct evidence-backed workflows.",
  "Star images are produced through contracts, publicity, performance, costume, camera, writing and distribution; later fame must not be projected backward as the sole cause of production decisions.",
  "Technicolor, animation, miniatures, optical composites and stunt work are specialized labor systems. Spectacle must never erase credited and uncredited craft contributions.",
  "Race, gender, class, disability, sexuality and colonial mythology must be analyzed as historical representational structures, never rewarded as authentic genre stereotypes.",
  "Archive, reissue, restoration and modern presentation states remain separate from original production and release evidence.",
  "Classical Hollywood is not world cinema's universal baseline; comparative films and non-Hollywood production systems must remain visible where the chapter makes broader claims.",
];
const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-18",
  chapter: {
    number: 12,
    id: "studio-genre-system",
    title: "The studio and genre system",
    period: "1930–1945",
    scope: "The consolidation of classical studio production after the sound transition: vertical integration, departmental labor, stars and contracts, genre cycles, censorship, sound stages and locations, Technicolor, animation, special effects, music, continuity practice and wartime studio production, with explicit non-Hollywood comparison.",
    thesis: "Classical studio cinema was not a single style but an industrial coordination system: companies managed recurring genres, stars, departments, technologies, censorship and distribution at scale while individual productions negotiated those systems differently.",
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
