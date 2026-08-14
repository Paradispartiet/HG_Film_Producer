import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");

const EXPECTED_ATLAS_COUNT = 378;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
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
    title: "Blacksmith Scene",
    year: 1893,
    aliases: ["The Blacksmith Shop", "Blacksmithing Scene"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Edison/Dickson, Black Maria, Kinetoscope-era production and the emergence of a repeatable production environment.",
  },
  {
    title: "Workers Leaving the Lumière Factory",
    year: 1895,
    aliases: ["Workers Leaving the Lumiere Factory", "La Sortie de l'Usine Lumière à Lyon", "Sortie d'usine"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Actuality, Lumière production practice, framing, depth and modern life as moving-image subject.",
  },
  {
    title: "L'Arroseur arrosé",
    year: 1895,
    aliases: ["L'Arroseur arrose", "The Sprinkler Sprinkled"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "A compact staged gag demonstrating that early Lumière cinema was not limited to actuality.",
  },
  {
    title: "Arrival of a Train at La Ciotat",
    year: 1896,
    aliases: ["The Arrival of a Train at La Ciotat", "Arrival of a Train", "L'Arrivée d'un train en gare de La Ciotat"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Actuality, depth, movement through the frame and the historiography of early spectatorship myths.",
  },
  {
    title: "Annabelle Serpentine Dance",
    year: 1895,
    aliases: ["Annabelle's Serpentine Dance", "Serpentine Dance by Annabelle"],
    role: "historical_object",
    decisionIfMissing: "P2",
    chapterFunction: "Performance, attraction and the relationship between recorded movement, stage culture and applied colour.",
  },
  {
    title: "The Big Swallow",
    year: 1901,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Camera proximity, scale change and direct experimentation with the spectator-camera relationship.",
  },
  {
    title: "Fire!",
    year: 1901,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P1",
    chapterFunction: "Multi-shot action, matching movement and the construction of film space in early British cinema.",
  },
  {
    title: "A Trip to the Moon",
    year: 1902,
    aliases: ["Le voyage dans la lune"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_a_trip_to_the_moon_1902",
    chapterFunction: "The chapter's principal close reading of trick film, theatrical staging, designed screen space and transformation effects.",
  },
  {
    title: "Life of an American Fireman",
    year: 1903,
    aliases: ["The Life of an American Fireman"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    chapterFunction: "Multi-shot construction and the historiographic problem created by a later cross-cut re-edit once mistaken for the original.",
  },
  {
    title: "The Great Train Robbery",
    year: 1903,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Narrative scale, multiple locations, action, shot construction and the myth that one film suddenly invented narrative editing.",
  },
  {
    title: "Rescued by Rover",
    year: 1905,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P1",
    chapterFunction: "A bridge from early multi-shot experimentation toward more systematic spatial and causal continuity.",
  },
];

const historicalObjects = [
  {
    label: "Eadweard Muybridge motion studies",
    role: "historical_object",
    atlasDecision: "NO_PRODUCTION_CASE",
    chapterFunction: "Sequential photography as a way to analyse movement over time.",
  },
  {
    label: "Étienne-Jules Marey chronophotography",
    role: "historical_object",
    atlasDecision: "NO_PRODUCTION_CASE",
    chapterFunction: "Chronophotographic analysis and the technical/conceptual prehistory of recording movement.",
  },
  {
    label: "Kinetograph / Kinetoscope / Black Maria",
    role: "historical_object",
    atlasDecision: "NO_PRODUCTION_CASE",
    chapterFunction: "Apparatus and production environment needed to explain cinema as a system rather than a single film.",
  },
  {
    label: "Cinématographe and competing projection systems",
    role: "historical_object",
    atlasDecision: "NO_PRODUCTION_CASE",
    chapterFunction: "Projection and portability as system changes, while detailed exhibition history remains reserved for Chapter 2.",
  },
];

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function normalizeTitle(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseQuotedStrings(value) {
  const strings = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) strings.push(JSON.parse(`"${match[1]}"`));
  return strings;
}

function stringField(objectSource, fieldName, required = true) {
  const pattern = new RegExp(`\\b${fieldName}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`);
  const match = objectSource.match(pattern);
  if (!match) {
    if (!required) return undefined;
    throw new Error(`Missing ${fieldName} in expansion definition: ${objectSource.slice(0, 160)}`);
  }
  return JSON.parse(`"${match[1]}"`);
}

function numberField(objectSource, fieldName) {
  const pattern = new RegExp(`\\b${fieldName}\\s*:\\s*(\\d+)`);
  const match = objectSource.match(pattern);
  if (!match) throw new Error(`Missing ${fieldName} in expansion definition: ${objectSource.slice(0, 160)}`);
  return Number(match[1]);
}

function stringArrayField(objectSource, fieldName, required = true) {
  const pattern = new RegExp(`\\b${fieldName}\\s*:\\s*\\[([^\\]]*)\\]`);
  const match = objectSource.match(pattern);
  if (!match) {
    if (!required) return [];
    throw new Error(`Missing ${fieldName} in expansion definition: ${objectSource.slice(0, 160)}`);
  }
  return parseQuotedStrings(match[1]);
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
    if (character === "\"" || character === "'" || character === "`") {
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

function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Could not locate definitions array in ${fileName}`);
  const arrayStart = source.indexOf("[", declaration.index);
  const arrayEnd = findMatchingBracket(source, arrayStart, "[", "]");
  const objectSources = extractTopLevelObjects(source.slice(arrayStart + 1, arrayEnd));
  return objectSources.map((objectSource) => ({
    id: stringField(objectSource, "id"),
    title: stringField(objectSource, "title"),
    originalTitle: stringField(objectSource, "originalTitle"),
    aliases: stringArrayField(objectSource, "aliases", false),
    year: numberField(objectSource, "year"),
    origin: fileName,
  }));
}

function acceptedScenarioTitles(scenario) {
  return [scenario.title, scenario.originalTitle, ...(scenario.aliases ?? [])]
    .filter(Boolean)
    .map(normalizeTitle);
}

function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const accepted = new Set(acceptedScenarioTitles(definition));
  return acceptedScenarioTitles(scenario).some((title) => accepted.has(title));
}

function buildAtlasCatalog() {
  const seedFile = JSON.parse(readText(seedPath));
  const scenarios = seedFile.scenarios.map((scenario) => ({
    id: scenario.id,
    title: scenario.film.title,
    originalTitle: scenario.film.original_title,
    aliases: [],
    year: scenario.film.year,
    origin: "film_scenarios_seed.json",
  }));
  const expansionSummary = [];

  for (const fileName of expansionFiles) {
    const definitions = parseExpansion(fileName);
    let appended = 0;
    let matchedExisting = 0;
    for (const definition of definitions) {
      const existing = scenarios.find((scenario) => matchesDefinition(scenario, definition));
      if (existing) {
        matchedExisting += 1;
        continue;
      }
      scenarios.push(definition);
      appended += 1;
    }
    expansionSummary.push({ fileName, definitions: definitions.length, appended, matchedExisting });
  }

  return { scenarios, expansionSummary, seedDeclaredCount: seedFile.scenario_count, seedActualCount: seedFile.scenarios.length };
}

function auditCandidate(candidate, scenarios) {
  const accepted = new Set([candidate.title, ...candidate.aliases].map(normalizeTitle));
  const matches = scenarios.filter((scenario) => {
    if (scenario.year !== candidate.year) return false;
    return acceptedScenarioTitles(scenario).some((title) => accepted.has(title));
  });
  const atlasStatus = matches.length === 0 ? "missing" : matches.length === 1 ? "existing" : "ambiguous_multiple_matches";
  const decision = atlasStatus === "existing" ? "USE_EXISTING_ATLAS_CASE" : candidate.decisionIfMissing;
  return {
    title: candidate.title,
    year: candidate.year,
    role: candidate.role,
    atlasStatus,
    decision,
    chapterFunction: candidate.chapterFunction,
    matches: matches.map((match) => ({ id: match.id, title: match.title, originalTitle: match.originalTitle, year: match.year, origin: match.origin })),
  };
}

const catalog = buildAtlasCatalog();
const candidateAudit = candidates.map((candidate) => auditCandidate(candidate, catalog.scenarios));
const existing = candidateAudit.filter((candidate) => candidate.atlasStatus === "existing");
const missing = candidateAudit.filter((candidate) => candidate.atlasStatus === "missing");
const ambiguous = candidateAudit.filter((candidate) => candidate.atlasStatus === "ambiguous_multiple_matches");
const requiredExisting = candidates.filter((candidate) => candidate.decisionIfMissing === "EXISTING_REQUIRED");
const missingRequiredExisting = requiredExisting.filter((candidate) => {
  const result = candidateAudit.find((item) => item.title === candidate.title && item.year === candidate.year);
  return !result || result.atlasStatus !== "existing" || result.matches[0]?.id !== candidate.expectedScenarioId;
});

const byDecision = Object.fromEntries(
  ["P0", "P1", "P2", "USE_EXISTING_ATLAS_CASE"].map((decision) => [
    decision,
    candidateAudit.filter((candidate) => candidate.decision === decision).map((candidate) => `${candidate.title} (${candidate.year})`),
  ]),
);

const report = {
  schemaVersion: "1.0",
  chapter: {
    id: "motion-before-cinema",
    number: 1,
    title: "From motion studies to cinema",
    period: "1870s–1905",
  },
  atlas: {
    expectedCount: EXPECTED_ATLAS_COUNT,
    actualCount: catalog.scenarios.length,
    seedDeclaredCount: catalog.seedDeclaredCount,
    seedActualCount: catalog.seedActualCount,
    expansionOrder: catalog.expansionSummary,
  },
  totals: {
    candidates: candidateAudit.length,
    existing: existing.length,
    missing: missing.length,
    ambiguous: ambiguous.length,
  },
  byDecision,
  candidates: candidateAudit,
  historicalObjects,
};

console.log("HG_FILM_HISTORY_CHAPTER_ONE_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_ONE_ATLAS_AUDIT_END");

const structuralProblems = [];
if (catalog.scenarios.length !== EXPECTED_ATLAS_COUNT) structuralProblems.push(`Expected ${EXPECTED_ATLAS_COUNT} Atlas films, found ${catalog.scenarios.length}`);
if (ambiguous.length > 0) structuralProblems.push(`${ambiguous.length} candidate(s) matched more than one Atlas film`);
if (missingRequiredExisting.length > 0) structuralProblems.push(`Required existing Atlas case missing or moved: ${missingRequiredExisting.map((candidate) => candidate.title).join(", ")}`);

if (structuralProblems.length > 0) {
  for (const problem of structuralProblems) console.error(problem);
  process.exitCode = 1;
}
