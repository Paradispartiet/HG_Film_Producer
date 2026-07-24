import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const dataDirectory = path.join(root, "src", "ui", "data");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");

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
  for (const match of value.matchAll(pattern)) {
    strings.push(JSON.parse(`"${match[1]}"`));
  }
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
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === quote) {
        quote = null;
      }
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
  if (!declaration || declaration.index === undefined) {
    throw new Error(`Could not locate definitions array in ${fileName}`);
  }
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
  return [scenario.title, scenario.originalTitle].filter(Boolean).map(normalizeTitle);
}

function definitionTitles(definition) {
  return [definition.title, definition.originalTitle, ...definition.aliases].filter(Boolean).map(normalizeTitle);
}

function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const acceptedTitles = new Set(definitionTitles(definition));
  return scenarioTitles(scenario).some((title) => acceptedTitles.has(title));
}

function duplicateValues(values) {
  const seen = new Set();
  const duplicates = new Set();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates].sort();
}

function collectLiteralScenarioIds(fileNames) {
  const origins = new Map();
  const pattern = /\bscenarioId\s*:\s*"(scenario_[a-z0-9_]+)"/g;
  for (const fileName of fileNames) {
    const source = readText(path.join(dataDirectory, fileName));
    for (const match of source.matchAll(pattern)) {
      const scenarioId = match[1];
      const files = origins.get(scenarioId) ?? [];
      if (!files.includes(fileName)) files.push(fileName);
      origins.set(scenarioId, files);
    }
  }
  return origins;
}

function sortedObject(counts) {
  return Object.fromEntries(
    [...counts.entries()].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0])),
  );
}

function increment(counts, key) {
  counts.set(key, (counts.get(key) ?? 0) + 1);
}

function decade(year) {
  return `${Math.floor(year / 10) * 10}s`;
}

const seedFile = JSON.parse(readText(seedPath));
const seedScenarioIds = seedFile.scenarios.map((scenario) => scenario.id);
const seedDuplicates = duplicateValues(seedScenarioIds);
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

const expansionBriefScenarioIds = new Set();
const expansionSummaries = [];
for (const fileName of expansionFiles) {
  const expansion = parseExpansion(fileName);
  let appended = 0;
  let matchedExisting = 0;
  for (const definition of expansion.definitions) {
    const existing = scenarios.find((scenario) => matchesDefinition(scenario, definition));
    if (existing) {
      matchedExisting += 1;
      expansionBriefScenarioIds.add(existing.id);
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
    expansionBriefScenarioIds.add(definition.id);
    appended += 1;
  }
  expansionSummaries.push({
    fileName,
    definitions: expansion.definitions.length,
    appended,
    matchedExisting,
    status: expansion.status,
    sourceListId: expansion.sourceListId,
  });
}

const finalScenarioIds = scenarios.map((scenario) => scenario.id);
const finalScenarioIdSet = new Set(finalScenarioIds);
const finalScenarioDuplicates = duplicateValues(finalScenarioIds);

const dataFiles = readdirSync(dataDirectory).filter((fileName) => fileName.endsWith(".ts")).sort();
const verificationFiles = dataFiles
  .filter((fileName) => fileName.startsWith("scenarioProductionVerification"))
  .filter((fileName) => !fileName.endsWith(".test.ts"))
  .filter((fileName) => fileName !== "scenarioProductionVerificationRegistry.ts");
const profileFiles = dataFiles
  .filter((fileName) => fileName.startsWith("scenarioFilmStudy"))
  .filter((fileName) => !fileName.endsWith(".test.ts"));

const verificationOrigins = collectLiteralScenarioIds(verificationFiles);
const profileOrigins = collectLiteralScenarioIds(profileFiles);
const verificationIds = [...verificationOrigins.keys()].sort();
const profileIds = [...profileOrigins.keys()].sort();
const verificationIdSet = new Set(verificationIds);
const profileIdSet = new Set(profileIds);

const manualBriefSource = readText(path.join(dataDirectory, "scenarioProductionBriefs.ts"));
const manualBriefIds = new Set(
  [...manualBriefSource.matchAll(/^\s*(scenario_[a-z0-9_]+)\s*:\s*\{/gm)].map((match) => match[1]),
);
const filmSpecificBriefIds = new Set([...manualBriefIds, ...expansionBriefScenarioIds]);

const unverified = scenarios
  .filter((scenario) => !verificationIdSet.has(scenario.id))
  .map((scenario) => ({
    ...scenario,
    briefType: filmSpecificBriefIds.has(scenario.id) ? "production_case" : "seed_fallback",
    profileStatus: profileIdSet.has(scenario.id) ? "source_backed_profile" : "missing_profile",
  }))
  .sort((left, right) => left.year - right.year || left.title.localeCompare(right.title));
const fallbackBriefs = scenarios
  .filter((scenario) => !filmSpecificBriefIds.has(scenario.id))
  .sort((left, right) => left.year - right.year || left.title.localeCompare(right.title));
const missingProfiles = scenarios
  .filter((scenario) => !profileIdSet.has(scenario.id))
  .sort((left, right) => left.year - right.year || left.title.localeCompare(right.title));

const orphanVerificationIds = verificationIds.filter((scenarioId) => !finalScenarioIdSet.has(scenarioId));
const orphanProfileIds = profileIds.filter((scenarioId) => !finalScenarioIdSet.has(scenarioId));
const verifiedWithoutProfile = verificationIds.filter((scenarioId) => !profileIdSet.has(scenarioId));
const profilesWithoutVerification = profileIds.filter((scenarioId) => !verificationIdSet.has(scenarioId));
const duplicateVerificationIds = [...verificationOrigins.entries()]
  .filter(([, files]) => files.length > 1)
  .map(([scenarioId, files]) => ({ scenarioId, files }));
const duplicateProfileIds = [...profileOrigins.entries()]
  .filter(([, files]) => files.length > 1)
  .map(([scenarioId, files]) => ({ scenarioId, files }));

const byOrigin = new Map();
const bySourceList = new Map();
const byStatus = new Map();
const byDecade = new Map();
const byGenre = new Map();
const byBriefType = new Map();
for (const scenario of unverified) {
  increment(byOrigin, scenario.origin);
  increment(bySourceList, scenario.sourceListId);
  increment(byStatus, scenario.status);
  increment(byDecade, decade(scenario.year));
  increment(byBriefType, scenario.briefType);
  for (const genre of scenario.genres) increment(byGenre, genre);
}

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-07-24",
  catalogConstruction: {
    seedDeclaredCount: seedFile.scenario_count,
    seedActualCount: seedFile.scenarios.length,
    expansionOrder: expansionSummaries,
  },
  totals: {
    playableScenarios: scenarios.length,
    verifiedProductionCases: verificationIds.length,
    unverifiedProductionCases: unverified.length,
    sourceBackedProfiles: profileIds.length,
    filmSpecificProductionBriefs: scenarios.filter((scenario) => filmSpecificBriefIds.has(scenario.id)).length,
    seedFallbackProductionBriefs: fallbackBriefs.length,
    scenariosWithoutSourceBackedProfile: missingProfiles.length,
    scenariosMissingVerificationAndProfile: unverified.filter((scenario) => scenario.profileStatus === "missing_profile").length,
  },
  integrity: {
    seedDuplicateScenarioIds: seedDuplicates,
    finalDuplicateScenarioIds: finalScenarioDuplicates,
    duplicateVerificationIds,
    duplicateProfileIds,
    orphanVerificationIds,
    orphanProfileIds,
    verifiedWithoutProfile,
    profilesWithoutVerification,
  },
  unverifiedDistributions: {
    byOrigin: sortedObject(byOrigin),
    bySourceList: sortedObject(bySourceList),
    byStatus: sortedObject(byStatus),
    byDecade: sortedObject(byDecade),
    byGenre: sortedObject(byGenre),
    byBriefType: sortedObject(byBriefType),
  },
  unverified,
  seedFallbackBriefs: fallbackBriefs.map((scenario) => ({
    id: scenario.id,
    title: scenario.title,
    year: scenario.year,
    origin: scenario.origin,
  })),
  profilesWithoutVerification,
  verifiedWithoutProfile,
};

const json = `${JSON.stringify(report, null, 2)}\n`;
const writeArgument = process.argv.find((argument) => argument.startsWith("--write="));
if (writeArgument) {
  const outputPath = path.resolve(root, writeArgument.slice("--write=".length));
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, json, "utf8");
}

console.log("HG_FILM_PRODUCER_REST_AUDIT_START");
console.log(json.trimEnd());
console.log("HG_FILM_PRODUCER_REST_AUDIT_END");

const structuralProblems = [
  ...seedDuplicates,
  ...finalScenarioDuplicates,
  ...duplicateVerificationIds.map((item) => item.scenarioId),
  ...orphanVerificationIds,
];
if (process.argv.includes("--capture")) {
  console.error("Controlled audit capture run");
  process.exitCode = 1;
} else if (structuralProblems.length > 0) {
  console.error(`Production Case rest audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
