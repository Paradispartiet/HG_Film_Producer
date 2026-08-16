import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 404;

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
    title: "The Cabinet of Dr. Caligari", year: 1920, aliases: ["Das Cabinet des Dr. Caligari"], role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_cabinet_of_dr_caligari_1920",
    chapterFunction: "Expressionist production-design anchor: Decla studio construction, painted light and shadow, angular architecture, stylized performance and the frame-story problem make design itself a narrative and psychological system."
  },
  {
    title: "Nosferatu", year: 1922, aliases: ["Nosferatu: A Symphony of Horror", "Nosferatu, eine Symphonie des Grauens"], role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_nosferatu_1922",
    chapterFunction: "Prana-Film location-and-design counterpoint to Caligari: unauthorized Dracula adaptation, Albin Grau design, Fritz Arno Wagner photography and uncanny use of real architecture show that Weimar horror was not synonymous with painted studio Expressionism."
  },
  {
    title: "The Last Laugh", year: 1924, aliases: ["Der letzte Mann", "The Last Man"], role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Kammerspielfilm and the unchained-camera problem are explicit canonical Chapter 7 requirements. Murnau, Carl Mayer, Emil Jannings and Karl Freund turn a socially compressed hotel story into mobile-camera subjectivity, making this the clearest missing Production Case rather than another Expressionist-design duplicate."
  },
  {
    title: "Dr. Mabuse, the Gambler", year: 1922, aliases: ["Dr. Mabuse, der Spieler", "Dr. Mabuse the Gambler"], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Lang's two-part crime epic is essential book evidence for Weimar modernity, disguise, finance, surveillance and serial-scale urban control, but its crime/identity gameplay overlaps existing Fantômas and later Lang cases more than it adds a new Chapter 7 production problem."
  },
  {
    title: "Warning Shadows", year: 1923, aliases: ["Schatten", "Warning Shadows: A Nocturnal Hallucination"], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Arthur Robison's shadow-driven chamber experiment broadens Expressionist lighting and psychological-space analysis, but Caligari and Nosferatu already provide stronger playable design/horror anchors."
  },
  {
    title: "Die Nibelungen", year: 1924, aliases: ["Die Nibelungen: Siegfried"], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "UFA prestige, monumental design, mass choreography and mythic national imagery are major industrial evidence, while Metropolis already supplies the more production-distinct UFA-scale design/effects case."
  },
  {
    title: "The Joyless Street", year: 1925, aliases: ["Die freudlose Gasse"], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Pabst's urban social melodrama is useful for distinguishing street realism and social observation from Expressionism, but Pandora's Box gives the chapter a cleaner non-Expressionist Production Case around performance, modernity and New Objectivity-era tendencies."
  },
  {
    title: "Variety", year: 1925, aliases: ["Varieté", "Vaudeville"], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "E. A. Dupont and Karl Freund make mobile camera and circus space central to desire and spectacle; retained as comparison because The Last Laugh is the stronger canonical unchained-camera teaching case."
  },
  {
    title: "Faust", year: 1926, aliases: ["Faust: A German Folktale", "Faust – Eine deutsche Volkssage"], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Murnau's UFA fantasy extends monumental design, lighting, miniatures and effects, but those functions overlap the existing Metropolis and Nosferatu production cases."
  },
  {
    title: "Metropolis", year: 1927, aliases: [], role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_metropolis_1927",
    chapterFunction: "Existing UFA anchor for industrial scale, architectural design, mass choreography, Schüfftan/miniature effects, multiple cinematographers, Huppertz's score and severe version/reconstruction history."
  },
  {
    title: "Pandora's Box", year: 1929, aliases: ["Die Büchse der Pandora", "Pandora's Box"], role: "anchor_film",
    decisionIfMissing: "P1",
    chapterFunction: "Pabst and Louise Brooks provide the chapter's strongest playable counterweight to Expressionism: performance-centered modernity, sexual economy, social observation and New Objectivity-era tendencies show why Weimar cinema cannot be reduced to distorted sets and horror."
  },
  {
    title: "Asphalt", year: 1929, aliases: [], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "UFA street-film production and elaborate constructed urban space are valuable evidence for late-Weimar realism and studio artifice working together, but the design/modernity function is sufficiently covered by Metropolis plus Pandora's Box."
  },
  {
    title: "Diary of a Lost Girl", year: 1929, aliases: ["Tagebuch einer Verlorenen"], role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Pabst/Brooks social melodrama extends the chapter's gender, institutional and New Objectivity-era comparison, while Pandora's Box is the more distinct Production Case for the same performer-director axis."
  },
];

const historicalObjects = [
  ["UFA and vertically scaled German studio infrastructure", "UFA concentrated studios, capital, specialist labor and international ambitions across multiple production modes; the company is infrastructure rather than a film scenario."],
  ["Decla-Bioscop, Decla and postwar company consolidation", "Caligari's production context and subsequent consolidation show a changing company landscape before and around UFA dominance; corporate history is not reducible to one title."],
  ["Expressionist design culture across film, theatre and visual art", "Distorted architecture, painted light, graphic surfaces and stylized bodies circulated across arts and productions; Expressionism is a historical tendency, not one reproducible preset."],
  ["Kammerspielfilm and chamber-scale social drama", "Small casts, concentrated spaces, psychological pressure and everyday social status form a tendency distinct from monumental Expressionist spectacle; the category exceeds any single film."],
  ["Entfesselte Kamera / unchained-camera practice", "Mobile camera rigs, elevators, tracks and motivated movement made camera subjectivity a collaborative technical practice; the method is infrastructure across productions rather than an invention owned by one shot."],
  ["Film architecture, studio construction and artificial city space", "Weimar productions used both real locations and increasingly ambitious constructed environments; designers, builders, cinematographers and effects workers jointly made architecture perform narrative work."],
  ["Inflation, stabilization and changing production economics", "Hyperinflation, currency stabilization and shifting export conditions changed costs, financing and international strategy during the 1920s; macroeconomic conditions are historical context, not a Production Case."],
  ["Transatlantic circulation of Weimar labor and style", "Directors, cinematographers, actors and designers moved between German and American production, carrying techniques without making influence a one-way national transfer."],
  ["Censorship, adaptation rights and legal vulnerability", "Nosferatu's Dracula litigation and wider censorship/rights regimes show that production and circulation depended on legal permissions and surviving versions; legal infrastructure is not a film scenario."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: ["Metropolis", "Nosferatu", "The Cabinet of Dr. Caligari", "The Last Laugh"],
  P0: [],
  P1: ["Pandora's Box"],
  P2: ["Asphalt", "Diary of a Lost Girl", "Die Nibelungen", "Dr. Mabuse, the Gambler", "Faust", "The Joyless Street", "Variety", "Warning Shadows"],
};

function readText(filePath) { return readFileSync(filePath, "utf8"); }
function normalizeTitle(value) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
}
function parseQuotedStrings(value) {
  const result = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) result.push(JSON.parse(`"${match[1]}"`));
  return result;
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
    if (character === '"' || character === "'" || character === "`") { quote = character; continue; }
    if (character === openCharacter) depth += 1;
    if (character === closeCharacter) { depth -= 1; if (depth === 0) return index; }
  }
  throw new Error(`Unclosed ${openCharacter} beginning at ${startIndex}`);
}
function extractTopLevelObjects(arraySource) {
  const objects = [];
  let index = 0;
  while (index < arraySource.length) {
    if (arraySource[index] !== "{") { index += 1; continue; }
    const endIndex = findMatchingBracket(arraySource, index, "{", "}");
    objects.push(arraySource.slice(index, endIndex + 1));
    index = endIndex + 1;
  }
  return objects;
}
function stringField(objectSource, fieldName) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (!match) throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`);
  return JSON.parse(`"${match[1]}"`);
}
function numberField(objectSource, fieldName) {
  const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*(\\d+)`));
  if (!match) throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`);
  return Number(match[1]);
}
function aliasesField(objectSource) {
  const match = objectSource.match(/\baliases\s*:\s*\[([^\]]*)\]/);
  return match ? parseQuotedStrings(match[1]) : [];
}
function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Could not locate definitions array in ${fileName}`);
  const arrayStart = source.indexOf("[", declaration.index);
  const arrayEnd = findMatchingBracket(source, arrayStart, "[", "]");
  return extractTopLevelObjects(source.slice(arrayStart + 1, arrayEnd)).map((objectSource) => ({
    id: stringField(objectSource, "id"),
    title: stringField(objectSource, "title"),
    originalTitle: stringField(objectSource, "originalTitle"),
    aliases: aliasesField(objectSource),
    year: numberField(objectSource, "year"),
  }));
}
function acceptedTitles(item) { return [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(normalizeTitle); }
function matches(left, right) {
  if (left.id && right.id && left.id === right.id) return true;
  if (left.year !== right.year) return false;
  const rightTitles = new Set(acceptedTitles(right));
  return acceptedTitles(left).some((title) => rightTitles.has(title));
}
function sameList(left, right) { return JSON.stringify([...left].sort()) === JSON.stringify([...right].sort()); }

const seed = JSON.parse(readText(seedPath));
const atlas = seed.scenarios.map((scenario) => ({
  id: scenario.id,
  title: scenario.film.title,
  originalTitle: scenario.film.original_title,
  aliases: [],
  year: scenario.film.year,
  origin: "film_scenarios_seed.json",
}));
const expansionSummary = [];
for (const fileName of expansionFiles) {
  let appended = 0;
  let matchedExisting = 0;
  for (const definition of parseExpansion(fileName)) {
    if (atlas.some((scenario) => matches(scenario, definition))) { matchedExisting += 1; continue; }
    atlas.push({ ...definition, origin: fileName });
    appended += 1;
  }
  expansionSummary.push({ fileName, appended, matchedExisting });
}

const candidateResults = candidates.map((candidate) => {
  const found = atlas.filter((scenario) => matches(scenario, candidate));
  if (found.length === 0) return { ...candidate, decision: candidate.decisionIfMissing, scenarioId: null, matches: 0 };
  if (found.length > 1) return { ...candidate, decision: "AMBIGUOUS", scenarioId: null, matches: found.length };
  return { ...candidate, decision: "USE_EXISTING", scenarioId: found[0].id, matches: 1, origin: found[0].origin };
});
const byDecision = Object.fromEntries(["USE_EXISTING", "P0", "P1", "P2", "AMBIGUOUS", "EXISTING_REQUIRED"].map((decision) => [decision, candidateResults.filter((candidate) => candidate.decision === decision).map((candidate) => candidate.title)]));
const structuralProblems = [];
if (atlas.length !== EXPECTED_ATLAS_COUNT) structuralProblems.push(`Expected ${EXPECTED_ATLAS_COUNT} Atlas films, found ${atlas.length}`);
for (const result of candidateResults) {
  if (result.decision === "AMBIGUOUS") structuralProblems.push(`${result.title} matched ${result.matches} Atlas scenarios`);
  if (result.expectedScenarioId && result.scenarioId !== result.expectedScenarioId) structuralProblems.push(`${result.title} must resolve to ${result.expectedScenarioId}, found ${result.scenarioId ?? result.decision}`);
}
for (const [decision, expectedTitles] of Object.entries(expectedDecisions)) {
  if (!sameList(byDecision[decision] ?? [], expectedTitles)) structuralProblems.push(`${decision} must equal ${expectedTitles.join(" | ")}; found ${(byDecision[decision] ?? []).join(" | ")}`);
}
if ((byDecision.AMBIGUOUS ?? []).length > 0) structuralProblems.push(`Ambiguous candidates: ${byDecision.AMBIGUOUS.join(", ")}`);

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-15",
  chapter: {
    number: 7,
    title: "Weimar cinema and Expressionism",
    period: "1919–1929",
    scope: "German studios, Expressionist design, Kammerspielfilm, mobile camera work and competing realist/modern tendencies in Weimar cinema, with UFA as an industrial axis rather than a synonym for the whole period.",
    thesis: "Weimar cinema cannot be reduced to Expressionist horror. Distorted design, chamber drama, mobile camera subjectivity, UFA-scale production and more observational late-1920s tendencies coexisted and competed, while German labor and style circulated internationally.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

console.log("HG_FILM_HISTORY_CHAPTER_SEVEN_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_SEVEN_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 7 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
