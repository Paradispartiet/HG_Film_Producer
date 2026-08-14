import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 387;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
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
    title: "Cendrillon",
    year: 1899,
    aliases: ["Cinderella"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Book-level comparison for Méliès's early multiple-tableau fairy-tale construction. A Trip to the Moon already supplies the stronger playable Méliès production case, so a second trick-film case is not required.",
  },
  {
    title: "Grandma's Reading Glass",
    year: 1900,
    aliases: ["Grandmother's Reading Glass", "Grandmas Reading Glass"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "G. A. Smith alternates the boy's viewing situation with magnified point-of-view inserts, making viewpoint and analytical shot relation a distinct playable problem not covered by the existing multi-scene cases.",
  },
  {
    title: "Attack on a China Mission - Bluejackets to the Rescue",
    year: 1900,
    aliases: ["Attack on a China Mission", "Attack on a China Mission – Bluejackets to the Rescue", "Attack on a China Mission: Bluejackets to the Rescue"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    chapterFunction: "James Williamson's surviving version history moves from a single camera position to added opening scenes and an inserted reverse view of the rescue, making construction of connected screen space and version history directly playable while requiring explicit colonial/racist-representation context.",
  },
  {
    title: "Histoire d'un crime",
    year: 1901,
    aliases: ["History of a Crime", "The Story of a Crime", "Story of a Crime"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    chapterFunction: "Ferdinand Zecca's Pathé crime film organizes a multi-tableau causal story around imprisonment, recollection and execution, giving the chapter a French case for narrative time and represented memory rather than another chase-only example.",
  },
  {
    title: "Stop Thief!",
    year: 1901,
    aliases: ["Stop Thief"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Williamson's clear three-shot chase is valuable evidence for causal movement across shots, but Fire!, The Great Train Robbery and Rescued by Rover already provide stronger playable development of connected action and route continuity.",
  },
  {
    title: "Fire!",
    year: 1901,
    aliases: ["Fire"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_fire_1901",
    chapterFunction: "Reuse the existing case for connected multi-shot action and constructed space in Williamson's rescue film without calling it the single invention of continuity.",
  },
  {
    title: "A Trip to the Moon",
    year: 1902,
    aliases: ["Le voyage dans la lune"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_a_trip_to_the_moon_1902",
    chapterFunction: "Reuse the existing Méliès case for multiple tableaux, theatrical staging, transformation effects and sustained fantasy construction without treating tableau style as merely failed later continuity.",
  },
  {
    title: "Life of an American Fireman",
    year: 1903,
    aliases: ["The Life of an American Fireman"],
    role: "comparative_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_life_of_an_american_fireman_1903",
    chapterFunction: "Reuse the existing case to teach repeated rescue action in the original 1903 structure and the historiographic danger of treating a later cross-cut re-edit as Porter's original montage.",
  },
  {
    title: "The Great Train Robbery",
    year: 1903,
    aliases: ["Great Train Robbery"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_the_great_train_robbery_1903",
    chapterFunction: "Reuse the existing case for causal multi-scene action across studio and locations while preserving the flexible direct-address bandit shot and rejecting single-inventor editing myths.",
  },
  {
    title: "Mary Jane's Mishap",
    year: 1903,
    aliases: ["Mary Jane’s Mishap", "Mary Jane's Mishap; or, Don't Fool with the Paraffin", "Mary Jane’s Mishap; or, Don’t Fool with the Paraffin"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Book-level comparison for G. A. Smith's increasingly sophisticated alternation of wider staging and closer views. Grandma's Reading Glass carries the stronger distinct Production Case need for analytical viewpoint.",
  },
  {
    title: "Rescued by Rover",
    year: 1905,
    aliases: ["Rover"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_rescued_by_rover_1905",
    chapterFunction: "Reuse the existing case for repeated routes, stable geography, causal order and replacement/re-shot version history as continuity becomes more systematic.",
  },
  {
    title: "The Lonely Villa",
    year: 1909,
    aliases: ["Lonely Villa"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Biograph's home-invasion rescue provides the necessary later-period anchor for sustained parallel action among threatened family, absent husband and rescuers, showing systematic narrative integration without claiming Griffith invented cross-cutting.",
  },
  {
    title: "The Lonedale Operator",
    year: 1911,
    aliases: ["Lonedale Operator"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Book-level end-point comparison for Griffith/Biograph's denser parallel editing, close views and suspense construction. Once The Lonely Villa is playable, another Griffith rescue case would add less distinct gameplay value than historical comparison value.",
  },
];

const historicalObjects = [
  ["Magic-lantern and theatrical tableau traditions", "Narrative staging and sequential visual culture predate cinema; they provide context without becoming fake film Production Cases or a single linear origin story."],
  ["Film catalogues, synopses and shot descriptions", "Contemporary sales descriptions help reconstruct intended action and sequence, but promotional copy must not be treated as neutral formal analysis."],
  ["Paper-print copyright deposits", "Paper-print evidence is crucial for reconstructing original American film order and for distinguishing surviving original structures from later re-edits."],
  ["Intertitles, lecturers and other narrative framing", "Story information could exist outside photographed dramatic action; internal film narration became more systematic without instantly eliminating live or textual explanation."],
  ["Remakes, replacement negatives and re-edited versions", "Version history must remain explicit because later cuts can falsely make an early film appear to use a technique absent from its original form."],
  ["Editing conventions as historical practices", "Point-of-view inserts, analytical cutting, scene linkage and parallel editing are methods to be learned through films, not stand-alone fictional Production Cases."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: [
    "A Trip to the Moon",
    "Fire!",
    "Life of an American Fireman",
    "Rescued by Rover",
    "The Great Train Robbery",
  ],
  P0: ["Grandma's Reading Glass", "The Lonely Villa"],
  P1: ["Attack on a China Mission - Bluejackets to the Rescue", "Histoire d'un crime"],
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
  schemaVersion: "1.0",
  auditDate: "2026-08-14",
  chapter: {
    number: 3,
    title: "From views to stories",
    period: "1896–1912",
    scope: "The transition from single-view staging and attraction toward analytical viewpoint, linked scenes, narrative time, route continuity and increasingly systematic parallel action. The audit rejects both a one-inventor editing story and the idea that mature classical continuity appeared all at once.",
    thesis: "Narrative cinema did not replace attractions in one breakthrough. Filmmakers gradually learned to organize viewpoint, space, causality and time across shots while retaining tableau staging, tricks, direct address and other earlier forms.",
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
