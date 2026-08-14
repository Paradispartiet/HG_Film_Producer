import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 393;

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
  { title: "Cendrillon", year: 1899, aliases: ["Cinderella"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Book-level comparison for Méliès's early multiple-tableau fairy-tale construction." },
  { title: "Grandma's Reading Glass", year: 1900, aliases: ["Grandmother's Reading Glass", "Grandmas Reading Glass"], role: "anchor_film", decisionIfMissing: "P0", expectedScenarioId: "scenario_grandmas_reading_glass_1900", chapterFunction: "Analytical viewpoint and motivated magnified inserts." },
  { title: "Attack on a China Mission - Bluejackets to the Rescue", year: 1900, aliases: ["Attack on a China Mission", "Attack on a China Mission – Bluejackets to the Rescue", "Attack on a China Mission: Bluejackets to the Rescue", "Attack on a China Mission (Bluejackets to the Rescue)"], role: "comparative_film", decisionIfMissing: "P1", expectedScenarioId: "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900", chapterFunction: "Version history, connected screen space, archive provenance and imperial representation." },
  { title: "Histoire d'un crime", year: 1901, aliases: ["History of a Crime", "The Story of a Crime", "Story of a Crime"], role: "comparative_film", decisionIfMissing: "P1", expectedScenarioId: "scenario_histoire_d_un_crime_1901", chapterFunction: "Pathé crime drama using multiple tableaux and represented recollection to organize narrative time." },
  { title: "Stop Thief!", year: 1901, aliases: ["Stop Thief"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Book-level chase comparison." },
  { title: "Fire!", year: 1901, aliases: ["Fire"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_fire_1901", chapterFunction: "Connected multi-shot action and constructed space." },
  { title: "A Trip to the Moon", year: 1902, aliases: ["Le voyage dans la lune"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_a_trip_to_the_moon_1902", chapterFunction: "Multiple tableaux, theatrical staging and sustained fantasy construction." },
  { title: "Life of an American Fireman", year: 1903, aliases: ["The Life of an American Fireman"], role: "comparative_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_life_of_an_american_fireman_1903", chapterFunction: "Original repeated rescue action and later re-edit historiography." },
  { title: "The Great Train Robbery", year: 1903, aliases: ["Great Train Robbery"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_great_train_robbery_1903", chapterFunction: "Causal multi-scene action without an inventor-of-editing myth." },
  { title: "Mary Jane's Mishap", year: 1903, aliases: ["Mary Jane’s Mishap", "Mary Jane's Mishap; or, Don't Fool with the Paraffin", "Mary Jane’s Mishap; or, Don’t Fool with the Paraffin"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Book-level analytical-cutting comparison." },
  { title: "Rescued by Rover", year: 1905, aliases: ["Rover"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_rescued_by_rover_1905", chapterFunction: "Repeated routes, stable geography, causal order and version history." },
  { title: "The Lonely Villa", year: 1909, aliases: ["Lonely Villa"], role: "anchor_film", decisionIfMissing: "P0", expectedScenarioId: "scenario_the_lonely_villa_1909", chapterFunction: "Sustained parallel action and narrative convergence without a Griffith-invented-cross-cutting myth." },
  { title: "The Lonedale Operator", year: 1911, aliases: ["Lonedale Operator"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Book-level later comparison for denser parallel editing and suspense." },
];

const historicalObjects = [
  ["Magic-lantern and theatrical tableau traditions", "Narrative staging and sequential visual culture predate cinema."],
  ["Film catalogues, synopses and shot descriptions", "Sales descriptions are evidence but not neutral formal analysis."],
  ["Paper-print copyright deposits", "Version evidence can distinguish original structures from later re-edits."],
  ["Intertitles, lecturers and other narrative framing", "Narrative information could exist outside photographed dramatic action."],
  ["Remakes, replacement negatives and re-edited versions", "Version history must remain explicit."],
  ["Editing conventions as historical practices", "Point-of-view inserts, analytical cutting, represented memory, scene linkage and parallel editing are methods, not fake Production Cases."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: [
    "A Trip to the Moon",
    "Attack on a China Mission - Bluejackets to the Rescue",
    "Fire!",
    "Grandma's Reading Glass",
    "Histoire d'un crime",
    "Life of an American Fireman",
    "Rescued by Rover",
    "The Great Train Robbery",
    "The Lonely Villa",
  ],
  P0: [],
  P1: [],
  P2: ["Cendrillon", "Mary Jane's Mishap", "Stop Thief!", "The Lonedale Operator"],
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
  schemaVersion: "1.3",
  auditDate: "2026-08-14",
  chapter: {
    number: 3,
    title: "From views to stories",
    period: "1896–1912",
    scope: "The transition from single-view staging and attraction toward analytical viewpoint, linked scenes, narrative time, route continuity and increasingly systematic parallel action.",
    thesis: "Narrative cinema did not replace attractions in one breakthrough; filmmakers gradually organized viewpoint, space, causality and time across shots while retaining earlier forms.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

console.log("HG_FILM_HISTORY_CHAPTER_THREE_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_THREE_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 3 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
