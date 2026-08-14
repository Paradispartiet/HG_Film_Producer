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
    title: "Queen Elizabeth",
    year: 1912,
    aliases: ["La Reine Elisabeth", "La Reine Élisabeth", "Les Amours de la reine Élisabeth", "Les Amours de la reine Elisabeth", "The Loves of Queen Elizabeth"],
    role: "comparative_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_queen_elizabeth_1912",
    chapterFunction: "French prestige production and Sarah Bernhardt's transatlantic star value, coupled to the United States import-rights business that helped normalize multi-reel features.",
  },
  {
    title: "Traffic in Souls",
    year: 1913,
    aliases: ["While New York Sleeps", "While New York Sleeps: A Photodrama of Today"],
    role: "comparative_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_traffic_in_souls_1913",
    chapterFunction: "American independent feature production and distribution as a comparison with the European export systems transforming the same market.",
  },
  {
    title: "Fantômas",
    year: 1913,
    aliases: ["Fantomas"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Gaumont-scale French genre production: recurring criminal identity, popular-literary adaptation, serial continuity and international circulation inside an established company system.",
  },
  {
    title: "Cabiria",
    year: 1914,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Italian feature spectacle at export scale: large production design, historical epic form, prestige authorship, music and worldwide circulation immediately before World War I.",
  },
  {
    title: "Afgrunden",
    year: 1910,
    aliases: ["The Abyss", "Der Abgrund", "Woman Always Pays"],
    role: "comparative_film",
    decisionIfMissing: "P1",
    chapterFunction: "Danish erotic melodrama and Asta Nielsen's screen-star breakthrough, showing how performance style and star identity could travel beyond a small national production market.",
  },
  {
    title: "Atlantis",
    year: 1913,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P1",
    chapterFunction: "Nordisk Film's ambitious international feature strategy: literary prestige, transatlantic narrative scale, differentiated endings and a production designed for export markets.",
  },
  {
    title: "L'Assassinat du duc de Guise",
    year: 1908,
    aliases: ["The Assassination of the Duke of Guise", "The Assassination of the Duc de Guise"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Film d'Art prestige culture and Pathé-linked circulation remain important book evidence, but Queen Elizabeth and Fantômas carry stronger distinct Production Case functions.",
  },
  {
    title: "The White Slave Trade",
    year: 1910,
    aliases: ["Den hvide Slavehandel"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Danish multi-reel competition and rapid imitation are valuable for the chapter text, but Afgrunden and Atlantis provide less version-confused Production Case anchors.",
  },
  {
    title: "L'Inferno",
    year: 1911,
    aliases: ["Inferno", "Dante's Inferno"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Italian feature-length literary spectacle before Cabiria; retained as book-level evidence so the chapter does not create redundant epic Production Cases.",
  },
  {
    title: "Quo Vadis?",
    year: 1913,
    aliases: ["Quo Vadis"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "A major Italian epic-export comparison that demonstrates the cycle Cabiria crowns; Chapter 5 resolves the Chapter 4 deferral by keeping it book-only rather than duplicating the same gameplay function.",
  },
  {
    title: "The Student of Prague",
    year: 1913,
    aliases: ["Der Student von Prag"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "German prewar art-film and star/auteur organization provide a bridge toward later German cinema without pre-empting the dedicated German silent chapter.",
  },
  {
    title: "Ingeborg Holm",
    year: 1913,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Swedish social drama broadens the prewar map while remaining better suited to the later chapter on silent cinemas beyond the usual canon.",
  },
  {
    title: "Raja Harishchandra",
    year: 1913,
    aliases: ["Raja Harischandra"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Essential evidence that prewar feature production was not confined to Europe and the United States, but its fuller production/exhibition history belongs to Chapter 10 rather than a tokenized case here.",
  },
];

const historicalObjects = [
  ["Pathé Frères production-distribution network", "A vertically coordinated international company and catalogue system; the institution itself is not a film Production Case."],
  ["Gaumont production and serial infrastructure", "Company organization made recurring characters and regular genre production scalable across markets."],
  ["Nordisk Film export network", "Branch offices and foreign distribution made a small national industry unusually international before World War I."],
  ["Italian historical-epic production centres", "Turin and Rome companies concentrated capital, sets, crowds and prestige around long-form spectacle."],
  ["Transnational star circulation", "Performers such as Sarah Bernhardt, Asta Nielsen and Valdemar Psilander became marketable identities across national borders."],
  ["Territorial rights, intertitles and versioning", "International circulation depended on rights sales, translated intertitles, local exhibition and sometimes market-specific versions or endings."],
  ["Film catalogues, trade press and export advertising", "International markets were built through industrial information systems as well as through the films themselves."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: ["Queen Elizabeth", "Traffic in Souls"],
  P0: ["Cabiria", "Fantômas"],
  P1: ["Afgrunden", "Atlantis"],
  P2: ["Ingeborg Holm", "L'Assassinat du duc de Guise", "L'Inferno", "Quo Vadis?", "Raja Harishchandra", "The Student of Prague", "The White Slave Trade"],
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
  auditDate: "2026-08-14",
  chapter: {
    number: 5,
    title: "Cinema becomes international",
    period: "1907–1914",
    scope: "Prewar cinema as a transnational system in which French, Italian, Danish, American and other production centres competed through export networks, stars, genres and increasingly long feature-scale attractions.",
    thesis: "National cinemas were international from the start: companies, performers, stories, rights, prints and exhibition practices moved across borders, and feature scale became one of several strategies for winning export markets.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

console.log("HG_FILM_HISTORY_CHAPTER_FIVE_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_FIVE_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 5 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
