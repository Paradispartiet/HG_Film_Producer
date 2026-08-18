from pathlib import Path

path = Path("scripts/film-history-chapter-eleven-atlas-audit.mjs")
text = path.read_text()
start = text.index("function parseDefinitions")
end = text.index("function matchesCandidate", start)

replacement = r'''function parseQuotedStrings(value) {
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

'''

path.write_text(text[:start] + replacement + text[end:])
print("Replaced Chapter 11 simplified parser with canonical Production Case Atlas semantics")
