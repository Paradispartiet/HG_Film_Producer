import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

/**
 * Canonical Film History chapters 27–30 Atlas identity crosswalk.
 * Reuses the same 37 registered expansion file names, normalized title/year
 * identity and deduplication logic as the Chapter 11 inventory audit.
 * By default checks chapters 27 and 28 for backwards-compatible tests.
 * Use --chapters=27,28,29,30 to audit all four final book chapters.
 * Finding a definition NEVER means the case is researched, playable or approved.
 */
const root = process.cwd();
const read = (p) => readFileSync(path.join(root, p), "utf8");
const normalize = (value) => String(value ?? "").normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "").toLowerCase()
  .replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();

function closing(text, start, left, right) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const character = text[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'" || character === "\`") {
      quote = character;
      continue;
    }
    if (character === left) depth += 1;
    if (character === right && --depth === 0) return index;
  }
  throw new Error("Unclosed " + left + " beginning at " + start);
}
function objects(text) {
  const results = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== "{") continue;
    const end = closing(text, i, "{", "}");
    results.push(text.slice(i, end + 1));
    i = end;
  }
  return results;
}
const stringField = (text, key, required = true) => {
  const pattern = new RegExp("\\b" + key + "\\s*:\\s*\"((?:\\\\.|[^\"\\\\])*)\"");
  const found = text.match(pattern);
  if (!found && required) throw new Error("Missing " + key + ": " + text.slice(0, 150));
  return found ? JSON.parse('"' + found[1] + '"') : null;
};
const numberField = (text, key) => {
  const match = text.match(new RegExp("\\b" + key + "\\s*:\\s*(\\d+)"));
  if (!match) throw new Error("Missing numeric field " + key);
  return Number(match[1]);
};
const stringsField = (text, key) => {
  const match = text.match(new RegExp("\\b" + key + "\\s*:\\s*\\[([^\\]]*)\\]"));
  return match ? [...match[1].matchAll(/"((?:\\.|[^"\\])*)"/g)]
    .map(value => JSON.parse('"' + value[1] + '"')) : [];
};
const sourceScript = read("scripts/film-history-chapter-eleven-atlas-audit.mjs");
const fileArray = sourceScript.match(/const expansionFiles = \[([\s\S]*?)\];/);
if (!fileArray) throw new Error("Cannot locate canonical Atlas expansion file list");
const files = [...fileArray[1].matchAll(/"([^"]+\.ts)"/g)].map(match => match[1]);

function parseDefinitions(file) {
  const code = read(path.join("src/core", file));
  const declaration = code.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) {
    throw new Error("Cannot locate Atlas definitions in " + file);
  }
  const begin = code.indexOf("[", declaration.index);
  const end = closing(code, begin, "[", "]");
  const status = code.match(/\bstatus\s*:\s*"([^"]+)"/)?.[1] ?? "unverified_definition_status";
  return objects(code.slice(begin + 1, end)).map(object => ({
    id: stringField(object, "id"),
    title: stringField(object, "title"),
    originalTitle: stringField(object, "originalTitle"),
    aliases: stringsField(object, "aliases"),
    year: numberField(object, "year"),
    origin: file, status,
  }));
}
const seed = JSON.parse(read("data/film/scenarios/film_scenarios_seed.json"));
const scenarios = seed.scenarios.map(value => ({
  id: value.id, title: value.film.title, originalTitle: value.film.original_title,
  aliases: [], year: value.film.year, status: value.status, origin: "film_scenarios_seed.json",
}));
const expansionStats = [];
for (const file of files) {
  const definitions = parseDefinitions(file);
  let appended = 0;
  for (const definition of definitions) {
    const names = [definition.title, definition.originalTitle, ...definition.aliases].map(normalize);
    const exists = scenarios.some(s => s.id === definition.id ||
      (s.year === definition.year && [s.title, s.originalTitle].some(t => names.includes(normalize(t)))));
    if (exists) continue;
    scenarios.push(definition);
    appended += 1;
  }
  expansionStats.push({ file, definitions: definitions.length, appended });
}
if (scenarios.length !== 430) {
  throw new Error("Expected 430 unique canonical Atlas scenarios, found " + scenarios.length);
}

function chapterFilms(number) {
  const chapterNames = { 27: "TwentySeven", 28: "TwentyEight", 29: "TwentyNine", 30: "Thirty" };
  const name = chapterNames[number];
  if (!name) throw new Error("Unsupported book chapter " + number);
  const file = "src/core/filmHistoryChapter" + name + ".ts";
  const code = read(file);
  const match = code.match(/const filmReferences: readonly FilmHistoryBookFilmReference\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error("Missing canonical book film references for chapter " + number);
  return JSON.parse(match[1]).map(film => ({
    chapter: number, title: film.title, year: film.year, atlasDecision: film.atlasDecision,
    hasPlayableScenarioId: film.atlasScenarioId !== undefined,
  }));
}
const explicitChapters = process.argv.find(value => value.startsWith("--chapters="))?.slice("--chapters=".length);
const chosenChapters = explicitChapters ? explicitChapters.split(",").map(Number) : [27, 28];
if (chosenChapters.length < 1 || new Set(chosenChapters).size !== chosenChapters.length || chosenChapters.some(n => ![27, 28, 29, 30].includes(n))) throw new Error("Invalid --chapters selection");
const references = chosenChapters.flatMap(chapterFilms);
const crosswalk = references.map(film => {
  const hits = scenarios.filter(s =>
    s.year === film.year &&
    [s.title, s.originalTitle, ...(s.aliases || [])].some(t => normalize(t) === normalize(film.title))
  );
  if (hits.length > 1) {
    throw new Error("Ambiguous Atlas identity " + film.title + " (" + film.year + ")");
  }
  const hit = hits[0] ?? null;
  return {
    chapter: film.chapter, title: film.title, year: film.year,
    identity: hit ? "EXISTING_DEFINITION_UNREVIEWED" : "NO_EXACT_TITLE_YEAR_MATCH",
    scenarioId: hit?.id ?? null, scenarioTitle: hit?.title ?? null,
    scenarioOrigin: hit?.origin ?? null, scenarioStatus: hit?.status ?? null,
    bookDecision: film.atlasDecision, playableLinkPresent: film.hasPlayableScenarioId,
  };
});
const matched = crosswalk.filter(row => row.scenarioId !== null);
const report = {
  schemaVersion: "1.0", auditDate: "2026-11-20",
  scope: "Full 430-scenario canonical identity-only audit; title/original title/expansion alias plus exact year. No film-specific case approval or independent film-history fact sign-off.",
  atlas: { expectedCount: 430, actualCount: scenarios.length, seedCount: seed.scenarios.length,
    expansionModules: files.length, expansionStats },
  chapters: Object.fromEntries(chosenChapters.map(number => [number, crosswalk.filter(x => x.chapter === number).length])),
  totals: { candidates: crosswalk.length, existingDefinitions: matched.length,
    noExactMatch: crosswalk.length - matched.length, approvedPlayableLinks: crosswalk.filter(x => x.playableLinkPresent).length },
  crosswalk, safeguards: [
    "Existing unreviewed definition is not approval to play or a verified historical analysis",
    "Keep all film references P2 until individual source, identity and production checks",
    "A missing exact match does not establish that every alternate title or indirect film identity is absent",
    "Do not confuse a film with a similarly named title from another year",
    "Do not fabricate Atlas scenario identifiers for films not found in the inventory",
  ],
};
const write = process.argv.find(value => value.startsWith("--write="))?.slice("--write=".length);
if (write) {
  const output = path.resolve(root, write);
  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(output, JSON.stringify(report, null, 2) + "\n");
}
console.log(JSON.stringify(report));
