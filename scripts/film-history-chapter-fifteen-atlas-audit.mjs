import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 445;

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
  { title: "Bonnie and Clyde", originalTitle: "Bonnie and Clyde", year: 1967, aliases: [], role: "chapter_fourteen_handoff", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_bonnie_and_clyde_1967", chapterFunction: "Penn and Beatty provide the pre-1969 American handoff: producer-star leverage, location work, European formal influence, ratings-era violence and studio distribution show why New Hollywood is an industrial transition rather than a single generation or style." },
  { title: "Memories of Underdevelopment", originalTitle: "Memorias del subdesarrollo", year: 1968, aliases: ["Memorias del subdesarrollo"], role: "chapter_fourteen_handoff", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_memories_of_underdevelopment_1968", chapterFunction: "Alea and ICAIC carry revolutionary institutional cinema across the chapter boundary, preserving a political-production genealogy that cannot be reduced to American counterculture." },
  { title: "The Cremator", originalTitle: "Spalovač mrtvol", year: 1969, aliases: ["Spalovac mrtvol"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_cremator_1969", chapterFunction: "Herz's Czechoslovak case makes political pressure, grotesque subjectivity and institutional complicity visible at the 1969 threshold after the Prague Spring rupture." },
  { title: "Kes", originalTitle: "Kes", year: 1969, aliases: [], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_kes_1969", chapterFunction: "Loach's Yorkshire production keeps regional labor, education, dialect, social realism and location practice inside a decade often narrated through American auteurism." },
  { title: "Easy Rider", originalTitle: "Easy Rider", year: 1969, aliases: [], role: "major_comparison", decisionIfMissing: "P2", chapterFunction: "A useful independent-to-studio distribution comparison for youth markets, road production and countercultural economics, but not a blocker because the chapter already has stronger verified New Hollywood industrial anchors." },
  { title: "The Conformist", originalTitle: "Il conformista", year: 1970, aliases: ["Il Conformista"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_conformist_1970", chapterFunction: "Bertolucci, Storaro and Scarfiotti connect political memory, co-production, modernist design and mobile color cinematography to the decade's transnational production grammar." },
  { title: "Wanda", originalTitle: "Wanda", year: 1970, aliases: [], role: "major_comparison", decisionIfMissing: "P2", chapterFunction: "Loden's independently made American feature is a valuable female-authored countercase to male-centered New Hollywood, but Jeanne Dielman already supplies the chapter's indispensable feminist-modernist production anchor." },
  { title: "A Clockwork Orange", originalTitle: "A Clockwork Orange", year: 1971, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_a_clockwork_orange_1971", chapterFunction: "Kubrick's British-based Warner production joins existing modernist architecture, controlled craft, violence controversy, music and studio distribution in a major ratings-era production system." },
  { title: "The Godfather", originalTitle: "The Godfather", year: 1972, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_godfather_1972", chapterFunction: "Paramount, Coppola, Puzo, Willis and the ensemble make studio power, producer-director conflict, location work, period design and prestige blockbuster scale concrete." },
  { title: "Aguirre, the Wrath of God", originalTitle: "Aguirre, der Zorn Gottes", year: 1972, aliases: ["Aguirre Wrath of God"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_aguirre_the_wrath_of_god_1972", chapterFunction: "Herzog's Peru production anchors New German Cinema through small-company and broadcaster finance, extreme locations, physical logistics and a production model distinct from American studio auteurism." },
  { title: "Mean Streets", originalTitle: "Mean Streets", year: 1973, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_mean_streets_1973", chapterFunction: "Scorsese's independently financed personal crime film makes neighborhood specificity, small-budget production, popular-music licensing and distribution transition visible inside New Hollywood." },
  { title: "Amarcord", originalTitle: "Amarcord", year: 1973, aliases: [], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_amarcord_1973", chapterFunction: "Fellini's Cinecittà reconstruction prevents the decade from being equated with location realism: memory, studio design, fascist history and episodic ensemble production coexist with the new cinemas." },
  { title: "The Spirit of the Beehive", originalTitle: "El espíritu de la colmena", year: 1973, aliases: ["El espiritu de la colmena"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_spirit_of_the_beehive_1973", chapterFunction: "Erice's Spanish case makes censorship-era memory, childhood perception, rural production and oblique political form part of the decade's post-authoritarian cinema." },
  { title: "Touki Bouki", originalTitle: "Touki Bouki", year: 1973, aliases: ["Journey of the Hyena"], role: "anchor_film", decisionIfMissing: "P1", chapterFunction: "Mambéty is the strongest missing African 1970s production anchor: Senegalese urban and rural space, postcolonial desire, montage, music and independent production history prevent Africa from disappearing after Chapter 14's Sembène case." },
  { title: "Scenes from a Marriage", originalTitle: "Scener ur ett äktenskap", year: 1974, aliases: ["Scener ur ett aktenskap"], role: "major_comparison", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_scenes_from_a_marriage_1974", chapterFunction: "Bergman's television-to-theatrical production is a key reminder that 1970s cinema was shaped by broadcasters, 16 mm economics, serial form, repertory actors and alternate distribution windows." },
  { title: "Ali: Fear Eats the Soul", originalTitle: "Angst essen Seele auf", year: 1974, aliases: ["Fear Eats the Soul"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_ali_fear_eats_the_soul_1974", chapterFunction: "Fassbinder's compressed Tango-Film production joins television-era New German Cinema, melodrama, migration, racism, location interiors and rapid ensemble practice." },
  { title: "Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles", originalTitle: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", year: 1975, aliases: ["Jeanne Dielman"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975", chapterFunction: "Akerman and Mangolte make domestic labor, feminist authorship, fixed framing, duration, direct household sound, production constraint and Belgian institutional support indispensable to the chapter's account of 1970s modernism." },
  { title: "Jaws", originalTitle: "Jaws", year: 1975, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_jaws_1975", chapterFunction: "Universal's ocean production makes practical-effects failure, location risk, editorial withholding, music and wide-release marketing central to the emergence of the modern blockbuster." },
  { title: "Dog Day Afternoon", originalTitle: "Dog Day Afternoon", year: 1975, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_dog_day_afternoon_1975", chapterFunction: "Lumet's Brooklyn production turns rehearsal, practical geography, media feedback, near-real-time editing and scoreless institutional sound into a distinct New Hollywood system." },
  { title: "Manila in the Claws of Light", originalTitle: "Maynila sa mga Kuko ng Liwanag", year: 1975, aliases: ["Manila in the Claws of Neon", "Maynila sa mga kuko ng liwanag"], role: "anchor_film", decisionIfMissing: "P1", chapterFunction: "Brocka is the strongest missing Southeast Asian 1970s production anchor: Manila labor, urban exploitation, location realism and Philippine independent-commercial production history cannot be represented by post-2000 Asian cases." },
  { title: "The Battle of Chile: Part I", originalTitle: "La batalla de Chile: La insurrección de la burguesía", year: 1975, aliases: ["The Battle of Chile", "The Battle of Chile, Part I", "La batalla de Chile", "La insurreccion de la burguesia"], role: "anchor_film", decisionIfMissing: "P1", chapterFunction: "Guzmán's collective documentary practice is the strongest missing Latin American political-production anchor: lightweight nonfiction work, coup-era risk, collective labor and transnational post-production make political cinema a material practice rather than a message category." },
  { title: "Cría cuervos", originalTitle: "Cría cuervos", year: 1976, aliases: ["Cria cuervos"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_cria_cuervos_1976", chapterFunction: "Saura's transition-era production links domestic space, childhood subjectivity, memory, censorship and Spain's political transformation through a distinct national production history." },
  { title: "Taxi Driver", originalTitle: "Taxi Driver", year: 1976, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_taxi_driver_1976", chapterFunction: "Scorsese, Schrader, Chapman, Herrmann and the editing team turn New York location production, antihero subjectivity, optical color intervention and post-Vietnam urban politics into a tightly integrated production system." },
  { title: "Killer of Sheep", originalTitle: "Killer of Sheep", year: 1977, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_killer_of_sheep_1977", chapterFunction: "Burnett's UCLA/L.A. Rebellion production anchors Black American independent cinema through 16 mm weekend labor, Watts locations, nonprofessional performance, multi-role authorship, music rights and delayed circulation." },
  { title: "Star Wars", originalTitle: "Star Wars", year: 1977, aliases: ["Star Wars: Episode IV - A New Hope", "Star Wars Episode IV A New Hope"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_star_wars_1977", chapterFunction: "Lucasfilm, Fox and ILM make blockbuster transformation an infrastructure history: effects R&D, British stage production, editing reconstruction, sound design, licensing and global distribution." },
  { title: "The Marriage of Maria Braun", originalTitle: "Die Ehe der Maria Braun", year: 1979, aliases: [], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_marriage_of_maria_braun_1979", chapterFunction: "Fassbinder's Albatros-Trio-WDR production closes the decade with broadcaster participation, international sales, postwar economic history and melodrama as an industrial as well as aesthetic system." },
  { title: "Apocalypse Now", originalTitle: "Apocalypse Now", year: 1979, aliases: [], role: "major_comparison", decisionIfMissing: "P2", chapterFunction: "Coppola's large-scale independent-studio production crisis is a valuable comparison for auteur power, location risk, sound and post-production duration, but is not required to establish the chapter once the core systems are covered." },
  { title: "Alien", originalTitle: "Alien", year: 1979, aliases: [], role: "major_comparison", decisionIfMissing: "P2", chapterFunction: "Scott's Fox production is a useful genre-industrial comparison for design departments, effects, sound and late-1970s studio science fiction, but Star Wars already supplies the chapter's indispensable effects-infrastructure anchor." },
];

const historicalObjects = [
  ["New Hollywood as an industrial transition", "Studio restructuring, youth markets, producer-star packages, location production and director leverage changed American filmmaking unevenly; no single auteur style defines the formation."],
  ["Ratings, censorship and contested representation", "The post-Code ratings environment altered what could be shown and marketed, but violence, sexuality, race and politics remain title-specific production and circulation questions."],
  ["Conglomerates, packages and producer power", "Corporate ownership, agencies, producers, stars and distributors shape development, budgets, casting, final cut and release alongside directors."],
  ["Location production and regional specificity", "New York, Yorkshire, Dakar, Manila, Brussels, Bavaria, Peru and other sites are production environments with labor, weather, access, sound and social histories, not generic realism backdrops."],
  ["Television, public funding and co-production", "Broadcasters, public funds and cross-border partners underpin New German Cinema, Scandinavian television work and European modernism in ways distinct from Hollywood finance."],
  ["Feminist modernism and gendered labor", "Domestic work, duration, authorship, performance and production labor make feminist film history material rather than a checklist of themes or filmmaker identities."],
  ["Black American independent production and the L.A. Rebellion", "University infrastructure, 16 mm economies, community casting, labor, music rights, restoration and delayed distribution form a production history distinct from the New Hollywood studio story."],
  ["Third Cinema, revolutionary documentary and political circulation", "Collective production, portable nonfiction technology, censorship, state violence, exile, solidarity networks and alternative circulation shape political cinema beyond textual ideology."],
  ["Blockbuster production, distribution and exhibition", "Jaws and Star Wars connect location or effects risk to marketing, release scale, exhibition capacity, merchandising and repeatable franchise economics; blockbuster is not a synonym for a successful film."],
  ["Special effects, sound and post-production infrastructure", "Motion-control photography, optical work, practical effects, multitrack sound, music and increasingly specialized post-production labor reshape what studios can build, mix and distribute."],
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
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Chapter 15 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
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
  "Chapter 15 is organized as 1969–1979. Bonnie and Clyde (1967) and Memories of Underdevelopment (1968) remain explicit Chapter 14 handoffs because they establish two different preconditions for the decade: American studio transition and revolutionary institutional cinema.",
  "New Hollywood is one axis, not the chapter's synonym. European modernism, New German Cinema, Black American independent production, African postcolonial cinema, Latin American political documentary and Southeast Asian urban political cinema retain separate institutions and genealogies.",
  "The 1975–1977 Jaws-Star Wars transition is treated as a production-distribution-exhibition shift, not as a claim that the blockbuster abruptly replaced personal or political filmmaking.",
  "The chapter ends in 1979 because The Marriage of Maria Braun and the late-New-Hollywood comparison cases form a coherent boundary before 1980s franchise consolidation, home video, intensified conglomeration and a different independent/festival ecology become the next organizing problem.",
  "Television films, 16 mm independent work, documentaries, studio features and international co-productions remain comparable only at the level of production systems; their formats, labor relations, audiences and circulation routes are never flattened into one scale.",
];
const safeguards = [
  "New Hollywood is not auteur freedom versus the studio system. Producers, corporations, agencies, stars, craftspeople, unions, distributors and exhibitors remain causal production actors.",
  "Blockbuster is not a box-office adjective. Release pattern, marketing, exhibition, effects or location infrastructure, sound, merchandising and repeatable corporate strategy require title-specific evidence.",
  "No generic 1970s look is allowed. Film stock, lenses, handheld work, zooms, available light, widescreen, color processing and sound practices require film-specific sources.",
  "Political cinema is production history as well as ideology: finance, collective labor, censorship, state violence, exile, equipment, post-production and circulation must be documented.",
  "Third Cinema is not a catch-all label for films from Latin America, Africa or Asia. Movements, manifestos, national institutions and individual productions remain historically specific.",
  "Black American independent cinema and the L.A. Rebellion are not diversity supplements to New Hollywood; their university infrastructure, community relations, finance, labor and circulation form distinct production histories.",
  "Feminist film history is not reduced to director identity or themes. Authorship, domestic and professional labor, performance, framing, duration, sound, finance and institutional access must remain visible.",
  "National cinemas are not branches of American or French movements. Senegalese, Philippine, Cuban, Chilean, Spanish, West German and other cases enter through their own institutions and production conditions.",
  "Festival recognition, restoration and later canonization are downstream circulation layers. They never substitute for original production evidence or imply that later Western recognition created the film's historical importance.",
  "Restored runtimes, aspect ratios, color grades and sound presentations remain separate from original production and release evidence unless provenance is explicit.",
];
const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-20",
  chapter: {
    number: 15,
    id: "new-hollywood-political-cinemas-blockbuster-transformation",
    title: "New Hollywood, political cinemas and blockbuster transformation",
    period: "1969–1979",
    scope: "Cinema from the post-1968 industrial and political break through the end of the 1970s: New Hollywood and its corporate conditions, Black American independent production, feminist modernism, New German Cinema, European and Spanish political memory, African and Latin American political production, Southeast Asian urban cinema, television and public funding, and the distribution-effects-sound infrastructures of blockbuster transformation.",
    thesis: "The 1970s were not a single auteur decade followed by the blockbuster. Corporate restructuring, independent and university production, public television and film funds, postcolonial and revolutionary institutions, feminist formal practice, location labor, new sound and effects systems, changing censorship and new release strategies produced several overlapping cinemas whose conflicts are visible only when production, labor and circulation remain as important as style.",
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
