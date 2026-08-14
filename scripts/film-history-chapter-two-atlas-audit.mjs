import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 390;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
  "chapterThreeNarrativeExpansion.ts",
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
    title: "Workers Leaving the Lumière Factory",
    year: 1895,
    aliases: ["Workers Leaving the Lumiere Factory", "La Sortie de l'Usine Lumière à Lyon", "Sortie d'usine"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_workers_leaving_lumiere_factory_1895",
    chapterFunction: "Connect the Lumière projected-programme breakthrough to a film already produced for the 1895 demonstration and exhibition system.",
  },
  {
    title: "May Irwin Kiss",
    year: 1896,
    aliases: ["May Irwin kiss", "The May Irwin Kiss", "The Kiss", "Kiss"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Vaudeville celebrity, newspaper promotion and a highly popular Vitascope subject show how familiar stage performance was repackaged for projected film audiences.",
  },
  {
    title: "The Corbett-Fitzsimmons Fight",
    year: 1897,
    aliases: ["The Corbett–Fitzsimmons Fight", "Corbett-Fitzsimmons Fight", "Corbett Fitzsimmons Fight", "The Corbett and Fitzsimmons Fight"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    expectedScenarioId: "scenario_the_corbett_fitzsimmons_fight_1897",
    chapterFunction: "A feature-length event whose proprietary Veriscope format, controlled projection, live commentary, territorial distribution and ticket economics make exhibition part of the production system.",
  },
  {
    title: "Employees Leaving Brown's Atlas Works, Sheffield",
    year: 1901,
    aliases: ["Employees Leaving Brown's Atlas Works", "Employees Leaving Brown’s Atlas Works, Sheffield"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    expectedScenarioId: "scenario_employees_leaving_browns_atlas_works_sheffield_1901",
    chapterFunction: "Mitchell and Kenyon's local-film business model turns the people photographed into the paying audience and makes commissioning, staging and exhibition inseparable.",
  },
  {
    title: "Sedgwick's Bioscope Showfront at Pendlebury Wakes",
    year: 1901,
    aliases: ["Sedgwick’s Bioscope Showfront at Pendlebury Wakes", "Sedgwicks Bioscope Showfront at Pendlebury Wakes"],
    role: "historical_object",
    decisionIfMissing: "P2",
    chapterFunction: "Direct evidence of fairground showmanship, repeated daily screenings and the relationship between filmmakers and travelling bioscope exhibitors; book-level use is sufficient.",
  },
  {
    title: "Uncle Josh at the Moving Picture Show",
    year: 1902,
    aliases: ["Uncle Josh at the moving picture show", "Uncle Josh and the Moving Picture Show"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    expectedScenarioId: "scenario_uncle_josh_at_the_moving_picture_show_1902",
    chapterFunction: "A reflexive comedy that stages spectator behaviour, a projection screen and the projectionist, allowing the chapter to distinguish fictional audience stereotypes from documented audience history.",
  },
  {
    title: "A Trip to the Moon",
    year: 1902,
    aliases: ["Le voyage dans la lune"],
    role: "comparative_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_a_trip_to_the_moon_1902",
    chapterFunction: "Reuse the existing case for international circulation, programme value and the commercial afterlife of a highly exportable attraction film.",
  },
  {
    title: "The Great Train Robbery",
    year: 1903,
    aliases: ["Great Train Robbery"],
    role: "comparative_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_the_great_train_robbery_1903",
    chapterFunction: "Reuse the existing case to show how exhibitors retained agency over presentation, including the flexible placement of the direct-address bandit shot.",
  },
];

const historicalObjects = [
  ["Lumière Grand Café programme, 28 December 1895", "Programme composition matters more than treating one title as a self-sufficient modern screening."],
  ["Vitascope / Koster and Bial's Music Hall exhibition, 23 April 1896", "Projection machinery entered an existing variety-theatre bill rather than instantly creating a standalone cinema institution."],
  ["Vitascope advertising poster and exhibitor publicity", "Advertising sold projection itself as an attraction and made the watching audience part of the spectacle's public image."],
  ["Edison film catalogues and exhibitor-selected programme order", "Exhibitors selected and sequenced short subjects, so the programme—not an individual film alone—was a key unit of early cinema experience."],
  ["Fairground and travelling-show bioscope exhibition", "Travelling exhibitors, showfronts and local commissioning connected filmmaking to seasonal leisure economies and geographically specific audiences."],
  ["Nickelodeon storefront theatre, c. 1905–1908", "Dedicated, frequent low-cost screenings changed audience access and helped make film exhibition a stable urban institution."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: [
    "A Trip to the Moon",
    "Employees Leaving Brown's Atlas Works, Sheffield",
    "The Corbett-Fitzsimmons Fight",
    "The Great Train Robbery",
    "Uncle Josh at the Moving Picture Show",
    "Workers Leaving the Lumière Factory",
  ],
  P0: [],
  P1: [],
  P2: ["May Irwin Kiss", "Sedgwick's Bioscope Showfront at Pendlebury Wakes"],
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

const byDecision = Object.fromEntries(["USE_EXISTING", "P0", "P1", "P2", "AMBIGUOUS", "EXISTING_REQUIRED"].map((decision) => [
  decision,
  candidateResults.filter((candidate) => candidate.decision === decision).map((candidate) => candidate.title),
]));

const structuralProblems = [];
if (atlas.length !== EXPECTED_ATLAS_COUNT) structuralProblems.push(`Expected ${EXPECTED_ATLAS_COUNT} Atlas films, found ${atlas.length}`);
for (const result of candidateResults) {
  if (result.decision === "AMBIGUOUS") structuralProblems.push(`${result.title} matched ${result.matches} Atlas scenarios`);
  if (result.expectedScenarioId && result.scenarioId !== result.expectedScenarioId) {
    structuralProblems.push(`${result.title} must resolve to ${result.expectedScenarioId}, found ${result.scenarioId ?? result.decision}`);
  }
}
for (const [decision, expectedTitles] of Object.entries(expectedDecisions)) {
  if (!sameList(byDecision[decision] ?? [], expectedTitles)) {
    structuralProblems.push(`${decision} must equal ${expectedTitles.join(" | ")}; found ${(byDecision[decision] ?? []).join(" | ")}`);
  }
}
if ((byDecision.AMBIGUOUS ?? []).length > 0) structuralProblems.push(`Ambiguous candidates: ${byDecision.AMBIGUOUS.join(", ")}`);

const report = {
  schemaVersion: "1.3",
  auditDate: "2026-08-14",
  chapter: {
    number: 2,
    title: "Projection, programmes and audiences",
    scope: "Overlapping the late 1890s and early 1900s: projection venues, programme construction, exhibition economics, showmanship and the emergence of dedicated film audiences before the book turns fully to narrative form in Chapter 3.",
    thesis: "Cinema became a mass medium not only because films could be made, but because exhibitors assembled programmes, adapted presentation to specific venues and cultivated audiences whose demand reshaped production and distribution.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

console.log("HG_FILM_HISTORY_CHAPTER_TWO_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_TWO_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 2 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}