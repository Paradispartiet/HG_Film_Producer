import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 384;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
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
  { title: "Blacksmith Scene", year: 1893, aliases: ["Blacksmithing Scene", "The Blacksmith Shop"], role: "anchor_film", decisionIfMissing: "P0", expectedScenarioId: "scenario_blacksmith_scene_1893", chapterFunction: "Dickson/Heise, Black Maria, Kinetograph/Kinetoscope-era production and a repeatable natural-light studio system." },
  { title: "Workers Leaving the Lumière Factory", year: 1895, aliases: ["Workers Leaving the Lumiere Factory", "La Sortie de l'Usine Lumière à Lyon", "Sortie d'usine"], role: "anchor_film", decisionIfMissing: "P0", expectedScenarioId: "scenario_workers_leaving_lumiere_factory_1895", chapterFunction: "Actuality, Lumière production practice, framing, event timing and multiple versions." },
  { title: "L'Arroseur arrosé", year: 1895, aliases: ["L'Arroseur arrose", "The Sprinkler Sprinkled"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "A compact staged gag demonstrating that early Lumière cinema was not limited to actuality." },
  { title: "Arrival of a Train at La Ciotat", year: 1896, aliases: ["The Arrival of a Train at La Ciotat", "Arrival of a Train", "L'Arrivée d'un train en gare de La Ciotat"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Actuality, depth, movement through the frame and the historiography of early spectatorship myths." },
  { title: "Annabelle Serpentine Dance", year: 1895, aliases: ["Annabelle's Serpentine Dance", "Serpentine Dance by Annabelle"], role: "historical_object", decisionIfMissing: "P2", chapterFunction: "Performance, attraction and the relationship between recorded movement, stage culture and applied colour." },
  { title: "The Big Swallow", year: 1901, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Camera proximity, scale change and direct experimentation with the spectator-camera relationship." },
  { title: "Fire!", year: 1901, aliases: ["Fire"], role: "comparative_film", decisionIfMissing: "P1", expectedScenarioId: "scenario_fire_1901", chapterFunction: "Multi-shot action, matching movement and the construction of connected film space in early British cinema." },
  { title: "A Trip to the Moon", year: 1902, aliases: ["Le voyage dans la lune"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_a_trip_to_the_moon_1902", chapterFunction: "The chapter's principal close reading of trick film, theatrical staging, designed screen space and transformation effects." },
  { title: "Life of an American Fireman", year: 1903, aliases: ["The Life of an American Fireman"], role: "comparative_film", decisionIfMissing: "P1", expectedScenarioId: "scenario_life_of_an_american_fireman_1903", chapterFunction: "Original scene-based rescue construction and the version-history problem created by a later cross-cut re-edit once mistaken for Porter's original." },
  { title: "The Great Train Robbery", year: 1903, aliases: ["Great Train Robbery"], role: "anchor_film", decisionIfMissing: "P0", expectedScenarioId: "scenario_the_great_train_robbery_1903", chapterFunction: "Narrative scale, multiple locations, action, effects, shot construction and historically specific pre-continuity organization without an inventor-of-editing myth." },
  { title: "Rescued by Rover", year: 1905, aliases: [], role: "comparative_film", decisionIfMissing: "P1", expectedScenarioId: "scenario_rescued_by_rover_1905", chapterFunction: "Repeated routes, stable landmarks, animal performance and causal shot order as a bridge toward more systematic spatial continuity." },
];

const historicalObjects = [
  "Eadweard Muybridge motion studies",
  "Étienne-Jules Marey chronophotography",
  "Kinetograph / Kinetoscope / Black Maria",
  "Cinématographe and competing projection systems",
].map((label) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE" }));

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
  let depth = 0, quote = null, escaped = false;
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
    id: stringField(objectSource, "id"), title: stringField(objectSource, "title"), originalTitle: stringField(objectSource, "originalTitle"), aliases: aliasesField(objectSource), year: numberField(objectSource, "year"),
  }));
}
function acceptedTitles(item) { return [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(normalizeTitle); }
function matches(left, right) {
  if (left.id && right.id && left.id === right.id) return true;
  if (left.year !== right.year) return false;
  const rightTitles = new Set(acceptedTitles(right));
  return acceptedTitles(left).some((title) => rightTitles.has(title));
}

const seed = JSON.parse(readText(seedPath));
const atlas = seed.scenarios.map((scenario) => ({ id: scenario.id, title: scenario.film.title, originalTitle: scenario.film.original_title, aliases: [], year: scenario.film.year, origin: "film_scenarios_seed.json" }));
const expansionSummary = [];
for (const fileName of expansionFiles) {
  let appended = 0, matchedExisting = 0;
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
if (byDecision.P0.length > 0) structuralProblems.push(`P0 backlog must be empty: ${byDecision.P0.join(", ")}`);
if (byDecision.P1.length > 0) structuralProblems.push(`P1 backlog must be empty: ${byDecision.P1.join(", ")}`);

const report = {
  schemaVersion: "1.1", auditDate: "2026-08-14",
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults, byDecision, historicalObjects,
  remainingProductionCases: { P0: byDecision.P0, P1: byDecision.P1, P2BookReferenceOnly: byDecision.P2 },
  structuralProblems,
};
console.log("HG_FILM_HISTORY_CHAPTER_ONE_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_ONE_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 1 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
