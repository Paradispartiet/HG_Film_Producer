import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 394;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
  "chapterThreeNarrativeExpansion.ts",
  "chapterFourIndustryExpansion.ts",
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
    title: "Rescued by Rover",
    year: 1905,
    aliases: ["Rover"],
    role: "comparative_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_rescued_by_rover_1905",
    chapterFunction: "Company-scale repeatability, replacement negatives and a commercially successful production whose reproducibility was an industrial problem as well as a formal one.",
  },
  {
    title: "The Story of the Kelly Gang",
    year: 1906,
    aliases: ["Story of the Kelly Gang"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    expectedScenarioId: "scenario_the_story_of_the_kelly_gang_1906",
    chapterFunction: "Feature-length transition: exhibitor-producers, multi-reel scale, location production, touring circulation and the economics of a film designed to sustain an hour-long dramatic attraction.",
  },
  {
    title: "L'Assassinat du duc de Guise",
    year: 1908,
    aliases: ["The Assassination of the Duke of Guise", "The Assassination of the Duc de Guise"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Book-level Film d'Art comparison for prestige culture and the movement toward longer, higher-status programmes without requiring a separate Production Case here.",
  },
  {
    title: "The Lonely Villa",
    year: 1909,
    aliases: ["Lonely Villa"],
    role: "comparative_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_the_lonely_villa_1909",
    chapterFunction: "Biograph studio/location organization as a company workflow during rapid industrial consolidation.",
  },
  {
    title: "Queen Elizabeth",
    year: 1912,
    aliases: ["La Reine Elisabeth", "La Reine Élisabeth", "Les Amours de la reine Élisabeth", "Les Amours de la reine Elisabeth", "The Loves of Queen Elizabeth"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    expectedScenarioId: "scenario_queen_elizabeth_1912",
    chapterFunction: "Prestige performer, imported multi-reel feature and distribution entrepreneurship at the moment longer films became commercially viable in the United States.",
  },
  {
    title: "Traffic in Souls",
    year: 1913,
    aliases: ["While New York Sleeps", "While New York Sleeps: A Photodrama of Today"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    expectedScenarioId: "scenario_traffic_in_souls_1913",
    chapterFunction: "Early American feature economics: independent production, sustained feature booking and a non-literary sensational subject that tested the commercial logic of longer films.",
  },
  {
    title: "Quo Vadis?",
    year: 1913,
    aliases: ["Quo Vadis"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Book-level evidence for the imported European epic and the international pressure behind feature-length exhibition; stronger Production Case priority belongs to the Chapter 5 international-cinema audit.",
  },
  {
    title: "Cabiria",
    year: 1914,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Book-level terminal comparison for feature spectacle and international circulation at the Chapter 4/5 boundary; do not auto-produce before the Chapter 5 audit.",
  },
];

const historicalObjects = [
  ["Film exchanges and print rental", "The shift from print sales toward rental distribution changed how exhibitors accessed programmes and how producers could regularize circulation."],
  ["Nickelodeons and purpose-built theatres", "Permanent venues created daily demand and a stable exhibition market; they are institutions, not film Production Cases."],
  ["Edison patent litigation and license agreements", "Patent claims and licensing shaped competition before and during the formation of the Motion Picture Patents Company."],
  ["Motion Picture Patents Company (MPPC)", "The 1908 patent pool linked producers, exchanges, theatres and film-stock supply in an attempt to regulate the American market."],
  ["General Film Company", "The MPPC-linked distribution company consolidated licensed exchanges and made distribution structure itself a site of industrial power."],
  ["Independent producers and distributors", "The independent sector challenged licensed-company control and helped create alternative feature-production and distribution strategies."],
  ["Multi-reel and feature booking practices", "Feature length was not only an aesthetic category: longer films changed pricing, programme structure, risk, touring and theatre booking."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: ["Queen Elizabeth", "Rescued by Rover", "The Lonely Villa", "The Story of the Kelly Gang", "Traffic in Souls"],
  P0: [],
  P1: [],
  P2: ["Cabiria", "L'Assassinat du duc de Guise", "Quo Vadis?"],
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
  schemaVersion: "1.2",
  auditDate: "2026-08-14",
  chapter: {
    number: 4,
    title: "Companies, patents and the feature transition",
    period: "1905–1914",
    scope: "The reorganization of production and circulation through film exchanges, rental, permanent theatres, patent/licensing systems, company consolidation, independent competition and the move toward multi-reel features.",
    thesis: "The feature transition was an industrial reorganization as well as a change in film length: longer films became viable through new relations among production, distribution, exhibition, capital, stars and market power.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

console.log("HG_FILM_HISTORY_CHAPTER_FOUR_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_FOUR_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 4 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
