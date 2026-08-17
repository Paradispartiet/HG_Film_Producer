import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 410;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
  "chapterThreeNarrativeExpansion.ts",
  "chapterFourIndustryExpansion.ts",
  "chapterFiveInternationalExpansion.ts",
  "chapterSixHollywoodExpansion.ts",
  "chapterSevenWeimarExpansion.ts",
  "chapterEightFrenchAvantGardeExpansion.ts",
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
  { title: "Strike", originalTitle: "Stachka", year: 1925, aliases: ["Стачка"] },
  { title: "Battleship Potemkin", originalTitle: "Bronenosets Potemkin", year: 1925, aliases: ["The Battleship Potemkin", "Броненосец Потёмкин"] },
  { title: "October", originalTitle: "Oktyabr", year: 1928, aliases: ["October: Ten Days That Shook the World", "Октябрь"] },
  { title: "The General Line", originalTitle: "Staroye i novoye", year: 1929, aliases: ["Old and New", "The Old and the New", "Старое и новое"] },
  { title: "Mother", originalTitle: "Mat", year: 1926, aliases: ["Мать"] },
  { title: "The End of St. Petersburg", originalTitle: "Konets Sankt-Peterburga", year: 1927, aliases: ["The End of Saint Petersburg", "Конец Санкт-Петербурга"] },
  { title: "Storm over Asia", originalTitle: "Potomok Chingis-Khana", year: 1928, aliases: ["The Heir to Genghis Khan", "Потомок Чингисхана"] },
  { title: "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks", originalTitle: "Neobychainye priklyucheniya mistera Vesta v strane bolshevikov", year: 1924, aliases: ["Mr. West in the Land of the Bolsheviks", "The Extraordinary Adventures of Mr West in the Land of the Bolsheviks"] },
  { title: "By the Law", originalTitle: "Po zakonu", year: 1926, aliases: ["According to the Law", "Dura Lex", "По закону"] },
  { title: "Kino-Eye", originalTitle: "Kinoglaz", year: 1924, aliases: ["Kino Eye", "Киноглаз"] },
  { title: "A Sixth Part of the World", originalTitle: "Shestaya chast mira", year: 1926, aliases: ["The Sixth Part of the World", "Шестая часть мира"] },
  { title: "The Eleventh Year", originalTitle: "Odinnadtsatyy", year: 1928, aliases: ["The Eleventh", "Одиннадцатый"] },
  { title: "Man with a Movie Camera", originalTitle: "Chelovek s kinoapparatom", year: 1929, aliases: ["The Man with a Movie Camera", "Человек с киноаппаратом"] },
  { title: "Enthusiasm", originalTitle: "Entuziazm: Simfoniya Donbassa", year: 1931, aliases: ["Enthusiasm: Symphony of the Donbas", "Symphony of the Donbas"] },
  { title: "Zvenigora", originalTitle: "Zvenyhora", year: 1928, aliases: ["Звенигора"] },
  { title: "Arsenal", originalTitle: "Arsenal", year: 1929, aliases: ["Арсенал"] },
  { title: "Earth", originalTitle: "Zemlya", year: 1930, aliases: ["Земля"] },
  { title: "The Fall of the Romanov Dynasty", originalTitle: "Padenie dinastii Romanovykh", year: 1927, aliases: ["The Fall of the Romanov Dynasty", "Падение династии Романовых"] },
  { title: "The Great Road", originalTitle: "Velikiy put", year: 1927, aliases: ["The Great Way", "Великий путь"] },
  { title: "The New Babylon", originalTitle: "Novyy Vavilon", year: 1929, aliases: ["New Babylon", "Новый Вавилон"] },
  { title: "Bed and Sofa", originalTitle: "Tretya Meshchanskaya", year: 1927, aliases: ["Third Meshchanskaya", "Третья Мещанская"] },
  { title: "Fragment of an Empire", originalTitle: "Oblomok imperii", year: 1929, aliases: ["A Fragment of an Empire", "Обломок империи"] },
];

function readText(filePath) { return readFileSync(filePath, "utf8"); }
function normalizeTitle(value) { return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim(); }
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
    else if (character === closeCharacter) { depth -= 1; if (depth === 0) return index; }
  }
  throw new Error(`Unmatched ${openCharacter}${closeCharacter}`);
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
  if (left.year !== right.year) return false;
  const rightTitles = new Set(acceptedTitles(right));
  return acceptedTitles(left).some((title) => rightTitles.has(title));
}

const seed = JSON.parse(readText(seedPath));
const atlas = seed.scenarios.map((scenario) => ({ id: scenario.id, title: scenario.film.title, originalTitle: scenario.film.original_title, aliases: [], year: scenario.film.year, origin: "film_scenarios_seed.json" }));
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
if (atlas.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Expected ${EXPECTED_ATLAS_COUNT} Atlas films, found ${atlas.length}`);

const candidateResults = candidates.map((candidate) => {
  const found = atlas.filter((scenario) => matches(scenario, candidate));
  return {
    ...candidate,
    matches: found.length,
    found: found.map(({ id, title, originalTitle, year, origin }) => ({ id, title, originalTitle, year, origin })),
  };
});

const report = {
  schemaVersion: "diagnostic-1.0",
  auditDate: "2026-08-17",
  chapter: { number: 9, id: "soviet-montage", title: "Soviet montage: revolution, form and propaganda", period: "1917–1934" },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
};
mkdirSync(path.join(root, "docs"), { recursive: true });
writeFileSync(path.join(root, "docs", "film-history-chapter-nine-atlas-diagnostic.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify(report, null, 2));
