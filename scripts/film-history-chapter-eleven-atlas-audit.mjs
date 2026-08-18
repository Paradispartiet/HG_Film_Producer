import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 424;

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
  {
    title: "M",
    originalTitle: "M",
    year: 1931,
    aliases: ["M - Eine Stadt sucht einen Mörder", "M – Eine Stadt sucht einen Mörder"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_m_1931",
    chapterFunction: "Lang's existing first-talkie case anchors offscreen sound, leitmotif, strategic silence, sound bridges and Tobis-Klangfilm inside Weimar urban production.",
  },
  {
    title: "City Lights",
    originalTitle: "City Lights",
    year: 1931,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_city_lights_1931",
    chapterFunction: "Chaplin's existing case anchors deliberate resistance to dialogue, synchronized score/effects and the survival of visual-pantomime production inside the talkie economy.",
  },
  {
    title: "The Jazz Singer",
    originalTitle: "The Jazz Singer",
    year: 1927,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P0",
    expectedScenarioId: "scenario_the_jazz_singer_1927",
    chapterFunction: "Warner Bros.' Vitaphone part-talkie makes sound-on-disc synchronization, theatre wiring, music-and-dialogue bursts, industrial adoption and blackface/Jewish-performance ethics unavoidable production questions.",
  },
  {
    title: "Blackmail",
    originalTitle: "Blackmail",
    year: 1929,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P0",
    expectedScenarioId: "scenario_blackmail_1929",
    chapterFunction: "Hitchcock's dual silent/sound production anchors transition economics, version comparison, location/studio strategy, psychological sound and live off-camera dubbing for Anny Ondra.",
  },
  {
    title: "Applause",
    originalTitle: "Applause",
    year: 1929,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Mamoulian's early Paramount talkie anchors mobile-camera ambition, separated microphone recording, post-combination, offscreen cues and sound bridges rather than treating early sound as inherently static.",
  },
  {
    title: "The Neighbor's Wife and Mine",
    originalTitle: "Madamu to nyōbō",
    year: 1931,
    aliases: ["Madamu to Nyobo", "Madame and Wife", "マダムと女房"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Gosho and Shochiku Kamata provide the essential Japanese sound-transition case: domestic sound recording, 24fps-era workflow, popular music/noise, everyday performance and an industry still sharing space with benshi-era silent practice.",
  },
  {
    title: "The Broadway Melody",
    originalTitle: "The Broadway Melody",
    year: 1929,
    aliases: ["Broadway Melody"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "MGM's all-talkie backstage musical exposes soundstage conversion, live orchestral balance, two-strip Technicolor and the emergence of playback/post-production synchronization.",
  },
  {
    title: "Sous les toits de Paris",
    originalTitle: "Sous les toits de Paris",
    year: 1930,
    aliases: ["Under the Roofs of Paris"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "René Clair and Lazare Meerson make French studio space, moving camera, selective synchronization, offscreen sound and deliberate silence into a production system distinct from Hollywood dialogue recording.",
  },
  {
    title: "Enthusiasm",
    originalTitle: "Entuziazm: Simfoniya Donbassa",
    year: 1930,
    aliases: ["Enthusiasm: Symphony of the Donbas", "Symphony of the Donbas", "Entuziazm"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "Vertov's Soviet sound experiment turns industrial and location recording, non-synchronization, voice/machinery montage and political documentary construction into a distinct early-sound workflow.",
  },
  {
    title: "The Blue Angel",
    originalTitle: "Der blaue Engel",
    year: 1930,
    aliases: ["Der blaue Engel"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "UFA, Erich Pommer, Tobis-Klangfilm and German/English version production make language markets, studio recording, star performance and version control into a distinct sound-transition problem.",
  },
  { title: "Lights of New York", originalTitle: "Lights of New York", year: 1928, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The first all-talking feature broadens Warner/Vitaphone transition history beyond the part-talkie Jazz Singer without requiring a second closely overlapping disc-sound case." },
  { title: "Hallelujah", originalTitle: "Hallelujah!", year: 1929, aliases: ["Hallelujah!"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Vidor's all-Black MGM production broadens post-synchronized location sound, music, representation and race while requiring explicit critique of stereotype and segregated exhibition markets." },
  { title: "The Love Parade", originalTitle: "The Love Parade", year: 1929, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Lubitsch integrates operetta, dialogue, offscreen action and contrapuntal sound, broadening musical form without duplicating the Broadway Melody's industrial conversion case." },
  { title: "Le Million", originalTitle: "Le Million", year: 1931, aliases: ["The Million"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Clair's later sound-image counterpoint extends the French argument after Sous les toits de Paris and remains book-level comparison unless already playable." },
  { title: "The Threepenny Opera", originalTitle: "Die Dreigroschenoper", year: 1931, aliases: ["Die Dreigroschenoper", "L'Opéra de quat'sous"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Pabst's German/French production broadens multilingual-version economics, music and cross-market casting without requiring another P1 if Blue Angel carries the language-version production problem." },
  { title: "Atlantic", originalTitle: "Atlantic", year: 1929, aliases: ["Atlantik"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "British International Pictures' multilingual sound production broadens the economic response to language fragmentation at the start of European talkies." },
  { title: "The Congress Dances", originalTitle: "Der Kongreß tanzt", year: 1931, aliases: ["Der Kongress tanzt", "Congress Dances"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "UFA's multilingual musical-comedy production broadens language-version and star-market strategy after The Blue Angel." },
  { title: "Love Me Tonight", originalTitle: "Love Me Tonight", year: 1932, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Mamoulian's mature musical sound design shows how quickly the transition's experiments could become integrated style, without duplicating Applause's foundational case." },
  { title: "I Was Born, But...", originalTitle: "Umarete wa mita keredo", year: 1932, aliases: ["I Was Born, But…", "Otona no miru ehon - Umarete wa mita keredo"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Ozu's silent feature keeps Japanese transition chronology honest: successful talkies did not instantly erase silent production or benshi-era habits." },
  { title: "The Goddess", originalTitle: "Shennü", year: 1934, aliases: ["Shen nu", "神女"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The major 1934 Shanghai silent feature keeps Chinese transition chronology uneven and prevents first-talkie milestones from being mistaken for immediate industry-wide conversion." },
  { title: "Sing-Song Girl Red Peony", originalTitle: "Genü hongmudan", year: 1931, aliases: ["Sing-Song Red Peony", "Songstress Red Peony", "歌女红牡丹"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Mingxing's sound-on-disc milestone is indispensable to Chinese sound history, but surviving-production evidence and extant-film status must be established before any full Production Case is contemplated." },
  { title: "Alam Ara", originalTitle: "Alam Ara", year: 1931, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "India's landmark early talkie is essential to sound-transition history, but loss of the feature blocks a fabricated complete Production Case and shifts emphasis to documented production/exhibition evidence." },
  { title: "The Public Enemy", originalTitle: "The Public Enemy", year: 1931, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Dialogue, gunfire and star voice help define early sound gangster production, but the distinct genre-system case belongs primarily to Chapter 12." },
  { title: "Dracula", originalTitle: "Dracula", year: 1931, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Universal's English/Spanish parallel productions are important multilingual/night-shift evidence, but the horror production system belongs primarily to Chapter 12." },
  { title: "42nd Street", originalTitle: "42nd Street", year: 1933, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Warner's Busby Berkeley musical shows the stabilized early-1930s studio musical system and is deferred primarily to Chapter 12 after the transition itself is explained." },
  { title: "King Kong", originalTitle: "King Kong", year: 1933, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "RKO's integrated effects, score and sound design demonstrate the transition's mature consequences, but the effects/horror-adventure production system belongs primarily to Chapter 12." },
];

const historicalObjects = [
  ["Vitaphone and sound-on-disc synchronization", "Warner Bros.' disc system synchronized 16-inch records with film reels and required projection discipline, disc handling and theatre equipment; the technology is an infrastructure object, not a film scenario."],
  ["Sound-on-film systems: Movietone, Photophone and Tobis-Klangfilm", "Optical sound placed recorded information on film and reorganized production, laboratory and projection practice across competing industrial systems; patents and formats remain institutional context rather than fake films."],
  ["24fps standardization, camera motors, booths and blimps", "Reliable synchronized recording pushed standardized projection speed and forced noisy cameras and sets to be modified, enclosed or redesigned; these are cross-film production constraints, not a single Production Case."],
  ["Microphones, booms, mixers, dubbing and playback", "Early sound crews developed microphone placement, multiple-source recording, mixing, postsynchronization and playback techniques that progressively freed actors and cameras from the first talkies' constraints."],
  ["Theatre wiring, exhibitor capital and dual silent/sound release", "Cinema owners faced major conversion costs, so silent, part-talkie and full-sound versions overlapped; transition speed varied by territory and theatre rather than changing overnight after one premiere."],
  ["Multilingual versions, dubbing, subtitles and accent markets", "Recorded language fractured export markets and reshaped casting, star labour, studio scheduling and translation; simultaneous-language versions were an industrial response before dubbing and subtitling stabilized."],
  ["Music rights, orchestras, playback and the early screen musical", "Recorded songs tied film production more tightly to music publishing, orchestration, rehearsal and synchronization while playback and post-production practice emerged unevenly across studios."],
  ["Race, blackface, voice and segregated sound-era markets", "The Jazz Singer and Hallelujah expose how synchronized voice entered industries structured by blackface, racial stereotyping, segregation and unequal access; technological novelty never neutralizes representational ethics."],
  ["Benshi, Shochiku-Phone and Japan's uneven conversion", "Japanese sound adoption coexisted with powerful benshi culture and continuing silent production, so talkie history must include exhibition labour, domestic recording systems and a slower institutional transition."],
  ["China and India: uneven infrastructure, sound-on-disc experiments and lost first talkies", "Chinese and Indian producers adopted sound amid equipment costs, language and performance traditions and severe archival loss; first-talkie milestones do not prove immediate or uniform conversion and cannot justify fabricated lost-film gameplay."],
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
  return [scenario.title, scenario.originalTitle].map(normalize).some((title) => title && candidateTitles.includes(title));
}

const atlas = buildAtlas();
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) {
  throw new Error(`Chapter 11 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
}

const resolvedCandidates = candidates.map((candidate) => {
  const matches = atlas.scenarios.filter((scenario) => matchesCandidate(scenario, candidate));
  if (matches.length > 1) throw new Error(`${candidate.title}: expected at most one Atlas match, found ${matches.length}`);
  const match = matches[0] ?? null;
  if (candidate.decisionIfMissing === "EXISTING_REQUIRED") {
    if (!match) throw new Error(`${candidate.title}: required existing Atlas case is missing`);
    if (candidate.expectedScenarioId && match.id !== candidate.expectedScenarioId) {
      throw new Error(`${candidate.title}: expected ${candidate.expectedScenarioId}, found ${match.id}`);
    }
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
  "The Jazz Singer is a part-talkie using Vitaphone sound-on-disc, not a fully spoken feature and not the instantaneous replacement of silent cinema; theatre wiring and simultaneous silent exhibition remain part of the transition story.",
  "Blackmail survives in materially distinct silent and sound versions. The sound version's live off-camera dubbing of Anny Ondra by Joan Barry is production evidence, not permission to overwrite performer/voice authorship.",
  "City Lights is deliberately dialogue-free but uses a synchronized score and selected effects; resistance to spoken dialogue is part of the sound transition rather than evidence that the film belongs outside the chapter.",
  "Japan's successful talkies did not instantly eliminate benshi or silent production. The Neighbor's Wife and Mine must be contextualized inside Shochiku's domestic recording system and a slower exhibition transition.",
  "Sing-Song Girl Red Peony and Alam Ara are historically central first-talkie landmarks, but archival survival must be established independently from milestone status; lost or incomplete films cannot be fabricated into complete Production Cases.",
  "Genre stabilization after the transition is deferred where appropriate: The Public Enemy, Dracula, 42nd Street and King Kong remain Chapter 11 comparisons even if their primary production-system analysis belongs to Chapter 12.",
];

const safeguards = [
  "Sound was an industrial transition, not a single invention or premiere: production, post-production, distribution, theatre conversion and audience access changed at different speeds.",
  "Sound-on-disc, sound-on-film and synchronized-score systems must remain technically distinct; a modern soundtrack file is not evidence that every historical element was recorded or synchronized the same way.",
  "Silent, part-talkie and full-sound versions are separate release states. One version must never silently overwrite another in scenario evidence or runtime claims.",
  "Recorded language changed export economics. Multilingual versions, dubbing, subtitles, accent prejudice and performer/voice labour must be attributed rather than flattened into a generic dialogue field.",
  "Early sound restrictions do not justify a universal static-camera myth: filmmakers rapidly developed mobile-camera, multi-microphone, mixing, postsynchronization, playback and expressive offscreen-sound strategies.",
  "Japan, China, India, the United States, Britain, France, Germany and the Soviet Union follow different sound-transition chronologies; first-talkie dates are not universal conversion dates.",
  "Blackface, racial stereotyping, segregated markets, gendered voice judgments and accent discrimination are historical production/reception structures to analyze critically, never performance-quality presets to reward.",
  "Archive survival remains separate from milestone status: lost first talkies may be historically central while still being inappropriate for complete playable reconstruction.",
];

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-18",
  chapter: {
    number: 11,
    id: "sound-transition",
    title: "The sound transition",
    period: "1927–1934",
    scope: "Sound-on-disc and sound-on-film adoption, studio and theatre conversion, microphones/camera mobility, recording/mixing/dubbing/playback, early sound aesthetics, multilingual markets and uneven transitions across the United States, Britain, France, Germany, the Soviet Union, Japan, China and India.",
    thesis: "Recorded sound reorganized cinema through competing technologies, capital investment, new crew roles, language markets and changing film form; the transition was uneven, and creative filmmakers quickly turned technical constraints into expressive sound-image systems.",
  },
  atlas: {
    expectedCount: EXPECTED_ATLAS_COUNT,
    actualCount: atlas.scenarios.length,
    expansionOrder: atlas.expansionStats,
  },
  candidates: resolvedCandidates,
  byDecision,
  recommendedNewProductionCases: resolvedCandidates.filter((item) => item.decision === "P0" || item.decision === "P1").map((item) => item.title),
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
