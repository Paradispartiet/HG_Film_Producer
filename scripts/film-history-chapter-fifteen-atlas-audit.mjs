import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 448;

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
  ["Bonnie and Clyde", "Bonnie and Clyde", 1967, [], "chapter_fourteen_handoff", "EXISTING_REQUIRED", "Pre-1969 American handoff: producer-star leverage, location work, ratings-era violence and studio distribution establish New Hollywood as an industrial transition."],
  ["Memories of Underdevelopment", "Memorias del subdesarrollo", 1968, ["Memorias del subdesarrollo"], "chapter_fourteen_handoff", "EXISTING_REQUIRED", "ICAIC carries revolutionary institutional cinema across the boundary and prevents American counterculture from becoming the chapter's only genealogy."],
  ["The Cremator", "Spalovač mrtvol", 1969, ["Spalovac mrtvol"], "anchor_film", "EXISTING_REQUIRED", "Czechoslovak political pressure, grotesque subjectivity and institutional complicity mark the 1969 threshold."],
  ["Kes", "Kes", 1969, [], "major_comparison", "EXISTING_REQUIRED", "Regional labor, education, dialect and location realism keep British social production inside a decade often narrated through American auteurism."],
  ["Easy Rider", "Easy Rider", 1969, [], "major_comparison", "P2", "Independent-to-studio distribution, road production and youth-market economics are useful comparisons, but stronger verified New Hollywood anchors already carry the core industrial thesis."],
  ["The Conformist", "Il conformista", 1970, ["Il Conformista"], "anchor_film", "EXISTING_REQUIRED", "Political memory, European co-production, modernist design and mobile color cinematography anchor transnational 1970s production grammar."],
  ["Wanda", "Wanda", 1970, [], "major_comparison", "P2", "Female-authored American independent production is a valuable countercase, while Jeanne Dielman remains the indispensable feminist-modernist production anchor."],
  ["A Clockwork Orange", "A Clockwork Orange", 1971, [], "anchor_film", "EXISTING_REQUIRED", "British-based Warner production joins controlled craft, violence controversy, music and studio distribution in the ratings era."],
  ["The Godfather", "The Godfather", 1972, [], "anchor_film", "EXISTING_REQUIRED", "Paramount, Coppola, Puzo, Willis and the ensemble make producer-director conflict, location work, period design and prestige scale concrete."],
  ["Aguirre, the Wrath of God", "Aguirre, der Zorn Gottes", 1972, ["Aguirre Wrath of God"], "anchor_film", "EXISTING_REQUIRED", "Small-company and broadcaster finance, extreme locations and physical logistics anchor New German Cinema outside the American studio model."],
  ["Mean Streets", "Mean Streets", 1973, [], "anchor_film", "EXISTING_REQUIRED", "Small-budget finance, neighborhood specificity, popular-music licensing and distribution transition make a distinct New Hollywood production system."],
  ["Amarcord", "Amarcord", 1973, [], "major_comparison", "EXISTING_REQUIRED", "Cinecittà reconstruction keeps studio design, memory and fascist history visible alongside the decade's location-realism narratives."],
  ["The Spirit of the Beehive", "El espíritu de la colmena", 1973, ["El espiritu de la colmena"], "anchor_film", "EXISTING_REQUIRED", "Spanish censorship-era memory, childhood perception and rural production provide an independent national production history."],
  ["Touki Bouki", "Touki Bouki", 1973, ["Journey of the Hyena"], "anchor_film", "P1", "Mambéty is the strongest African 1970s gap candidate: Senegalese space, postcolonial desire, montage, music and independent production prevent Africa from disappearing after Chapter 14."],
  ["Scenes from a Marriage", "Scener ur ett äktenskap", 1974, ["Scener ur ett aktenskap"], "major_comparison", "EXISTING_REQUIRED", "Television-to-theatrical production makes broadcaster finance, 16 mm economics, serial form and alternate distribution windows explicit."],
  ["Ali: Fear Eats the Soul", "Angst essen Seele auf", 1974, ["Fear Eats the Soul"], "anchor_film", "EXISTING_REQUIRED", "Rapid Tango-Film production joins television-era New German Cinema, melodrama, migration, racism and location interiors."],
  ["Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles", "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", 1975, ["Jeanne Dielman"], "anchor_film", "EXISTING_REQUIRED", "Domestic labor, feminist authorship, fixed framing, duration, direct sound and Belgian institutional support are indispensable to 1970s modernism."],
  ["Jaws", "Jaws", 1975, [], "anchor_film", "EXISTING_REQUIRED", "Universal's ocean production connects practical-effects failure, location risk, editorial withholding, music and wide-release marketing to blockbuster emergence."],
  ["Dog Day Afternoon", "Dog Day Afternoon", 1975, [], "anchor_film", "EXISTING_REQUIRED", "Brooklyn rehearsal, practical geography, media feedback, near-real-time editing and scoreless institutional sound form another New Hollywood system."],
  ["Manila in the Claws of Light", "Maynila sa mga Kuko ng Liwanag", 1975, ["Manila in the Claws of Neon", "Maynila sa mga kuko ng liwanag"], "anchor_film", "P1", "Brocka is the strongest Southeast Asian 1970s gap candidate: Manila labor, urban exploitation, location realism and Philippine production history cannot be represented by post-2000 Asian cases."],
  ["The Battle of Chile: Part I", "La batalla de Chile: La insurrección de la burguesía", 1975, ["The Battle of Chile", "The Battle of Chile, Part I", "La batalla de Chile", "La insurreccion de la burguesia"], "anchor_film", "P1", "Guzmán is the strongest Latin American political-production gap candidate: collective documentary labor, coup-era risk, portable nonfiction practice and transnational post-production make politics material."],
  ["Cría cuervos", "Cría cuervos", 1976, ["Cria cuervos"], "anchor_film", "EXISTING_REQUIRED", "Transition-era Spain links domestic space, childhood subjectivity, memory and censorship to political transformation."],
  ["Taxi Driver", "Taxi Driver", 1976, [], "anchor_film", "EXISTING_REQUIRED", "New York location production, antihero subjectivity, optical color intervention and post-Vietnam urban politics become one integrated production system."],
  ["Killer of Sheep", "Killer of Sheep", 1977, [], "anchor_film", "EXISTING_REQUIRED", "UCLA/L.A. Rebellion production anchors Black American independent cinema through 16 mm weekend labor, Watts locations, multi-role authorship, music rights and delayed circulation."],
  ["Star Wars", "Star Wars", 1977, ["Star Wars: Episode IV - A New Hope", "Star Wars Episode IV A New Hope"], "anchor_film", "EXISTING_REQUIRED", "Lucasfilm, Fox and ILM make blockbuster transformation an infrastructure history of effects R&D, British stage production, editing, sound, licensing and distribution."],
  ["The Marriage of Maria Braun", "Die Ehe der Maria Braun", 1979, [], "anchor_film", "EXISTING_REQUIRED", "Broadcaster participation, international sales, postwar economic history and melodrama close the decade through New German Cinema's production institutions."],
  ["Apocalypse Now", "Apocalypse Now", 1979, [], "major_comparison", "P2", "Large-scale independent-studio production crisis is useful for auteur power, location risk, sound and long post-production, but is not a chapter blocker once the core systems are covered."],
  ["Alien", "Alien", 1979, [], "major_comparison", "P2", "Late-1970s studio science fiction is useful for design, effects and sound comparison, while Star Wars already carries the indispensable effects-infrastructure function."],
].map(([title, originalTitle, year, aliases, role, decisionIfMissing, chapterFunction]) => ({
  title,
  originalTitle,
  year,
  aliases,
  role,
  decisionIfMissing,
  chapterFunction,
}));

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
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function parseQuotedStrings(value) {
  const strings = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) strings.push(JSON.parse(`"${match[1]}"`));
  return strings;
}

function findMatchingBracket(source, startIndex, openCharacter, closeCharacter) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = startIndex; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      continue;
    }
    if (character === openCharacter) depth += 1;
    if (character === closeCharacter) {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  throw new Error(`Unclosed ${openCharacter} beginning at ${startIndex}`);
}

function extractTopLevelObjects(arraySource) {
  const objects = [];
  let index = 0;
  while (index < arraySource.length) {
    if (arraySource[index] !== "{") {
      index += 1;
      continue;
    }
    const endIndex = findMatchingBracket(arraySource, index, "{", "}");
    objects.push(arraySource.slice(index, endIndex + 1));
    index = endIndex + 1;
  }
  return objects;
}

function stringField(objectSource, fieldName, required = true) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (!match) {
    if (!required) return undefined;
    throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`);
  }
  return JSON.parse(`"${match[1]}"`);
}

function numberField(objectSource, fieldName) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*(\\d+)`));
  if (!match) throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`);
  return Number(match[1]);
}

function stringArrayField(objectSource, fieldName, required = true) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*\\[([^\\]]*)\\]`));
  if (!match) {
    if (!required) return [];
    throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`);
  }
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
  return {
    fileName,
    status,
    sourceListId,
    definitions: objectSources.map((objectSource) => ({
      id: stringField(objectSource, "id"),
      title: stringField(objectSource, "title"),
      originalTitle: stringField(objectSource, "originalTitle"),
      aliases: stringArrayField(objectSource, "aliases", false),
      year: numberField(objectSource, "year"),
      directors: stringArrayField(objectSource, "directors"),
      genres: stringArrayField(objectSource, "genres"),
    })),
  };
}

function scenarioTitles(scenario) {
  return [scenario.title, scenario.originalTitle].filter(Boolean).map(normalize);
}

function definitionTitles(definition) {
  return [definition.title, definition.originalTitle, ...definition.aliases].filter(Boolean).map(normalize);
}

function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const acceptedTitles = new Set(definitionTitles(definition));
  return scenarioTitles(scenario).some((title) => acceptedTitles.has(title));
}

function buildAtlas() {
  const seedFile = JSON.parse(readText(seedPath));
  const scenarios = seedFile.scenarios.map((scenario) => ({
    id: scenario.id,
    title: scenario.film.title,
    originalTitle: scenario.film.original_title,
    year: scenario.film.year,
    directors: scenario.film.directors,
    genres: scenario.film.genres,
    status: scenario.status,
    sourceListId: scenario.source.list_id,
    origin: "film_scenarios_seed.json",
  }));
  const expansionStats = [];
  for (const fileName of expansionFiles) {
    const expansion = parseExpansion(fileName);
    let appended = 0;
    let matchedExisting = 0;
    for (const definition of expansion.definitions) {
      const existing = scenarios.find((scenario) => matchesDefinition(scenario, definition));
      if (existing) {
        matchedExisting += 1;
        continue;
      }
      scenarios.push({
        id: definition.id,
        title: definition.title,
        originalTitle: definition.originalTitle,
        year: definition.year,
        directors: definition.directors,
        genres: definition.genres,
        status: expansion.status,
        sourceListId: expansion.sourceListId,
        origin: fileName,
      });
      appended += 1;
    }
    expansionStats.push({
      fileName,
      definitions: expansion.definitions.length,
      appended,
      matchedExisting,
      status: expansion.status,
      sourceListId: expansion.sourceListId,
    });
  }
  return { scenarios, expansionStats };
}

function matchesCandidate(scenario, candidate) {
  if (scenario.year !== candidate.year) return false;
  const candidateTitles = [candidate.title, candidate.originalTitle, ...(candidate.aliases ?? [])].map(normalize);
  return [scenario.title, scenario.originalTitle]
    .map(normalize)
    .some((title) => title && candidateTitles.includes(title));
}

const atlas = buildAtlas();
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) {
  throw new Error(`Chapter 15 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
}

const resolvedCandidates = candidates.map((candidate) => {
  const matches = atlas.scenarios.filter((scenario) => matchesCandidate(scenario, candidate));
  if (matches.length > 1) throw new Error(`${candidate.title}: expected at most one Atlas match, found ${matches.length}`);
  const match = matches[0] ?? null;
  if (candidate.decisionIfMissing === "EXISTING_REQUIRED" && !match) {
    throw new Error(`${candidate.title}: required existing Atlas case is missing`);
  }
  return {
    ...candidate,
    decision: match ? "USE_EXISTING" : candidate.decisionIfMissing,
    scenarioId: match?.id ?? null,
    matches: matches.length,
    origin: match?.origin ?? null,
  };
});

const byDecision = { USE_EXISTING: [], P0: [], P1: [], P2: [], EXISTING_REQUIRED: [] };
for (const candidate of resolvedCandidates) byDecision[candidate.decision].push(candidate.title);

const boundaryNotes = [
  "Chapter 15 is organized as 1969–1979. Bonnie and Clyde (1967) and Memories of Underdevelopment (1968) remain explicit Chapter 14 handoffs because they establish two different preconditions for the decade: American studio transition and revolutionary institutional cinema.",
  "New Hollywood is one axis, not the chapter's synonym. European modernism, New German Cinema, Black American independent production, African postcolonial cinema, Latin American political documentary and Southeast Asian urban political cinema retain separate institutions and genealogies.",
  "The 1975–1977 Jaws-Star Wars transition is treated as a production-distribution-exhibition shift, not as a claim that the blockbuster abruptly replaced personal or political filmmaking.",
  "The chapter ends in 1979 before 1980s franchise consolidation, home video, intensified conglomeration and a different independent/festival ecology become the next organizing problem.",
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
  atlas: {
    expectedCount: EXPECTED_ATLAS_COUNT,
    actualCount: atlas.scenarios.length,
    expansionOrder: atlas.expansionStats,
  },
  candidates: resolvedCandidates,
  byDecision,
  recommendedNewProductionCases: resolvedCandidates
    .filter((item) => item.decision === "P0" || item.decision === "P1")
    .map((item) => item.title),
  historicalObjects,
  boundaryNotes,
  safeguards,
};

const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}

console.log(JSON.stringify(report, null, 2));
