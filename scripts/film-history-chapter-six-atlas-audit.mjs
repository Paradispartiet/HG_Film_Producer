import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 402;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
  "chapterThreeNarrativeExpansion.ts",
  "chapterFourIndustryExpansion.ts",
  "chapterFiveInternationalExpansion.ts",
  "chapterSixHollywoodExpansion.ts",
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
    title: "The Birth of a Nation",
    year: 1915,
    aliases: ["The Clansman"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Essential critical evidence for feature-scale continuity, national road-show circulation, censorship conflict and the commercial power of racist historical propaganda. Chapter 3 already carries Griffith parallel editing through The Lonely Villa, so this remains book-level analysis rather than a redundant or ethically misleading imitate-this-film Production Case.",
  },
  {
    title: "The Cheat",
    year: 1915,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P1",
    chapterFunction: "Famous Players-Lasky feature production under Cecil B. DeMille: controlled studio lighting, selective framing and performance staging show classical legibility becoming compatible with a distinctive house style inside an expanding company system.",
  },
  {
    title: "Intolerance",
    year: 1916,
    aliases: ["Intolerance: Love's Struggle Throughout the Ages"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Large-scale parallel construction and independent road-show ambition are indispensable formal comparisons, but the editing function overlaps Chapter 3 and does not need another dedicated Production Case here.",
  },
  {
    title: "The Kid",
    year: 1921,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Chaplin's feature-length integration of comedy and pathos is important star-producer evidence, but The Gold Rush provides a later and more production-distinct case for the same independent star-author model.",
  },
  {
    title: "Safety Last!",
    year: 1923,
    aliases: ["Safety Last"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Harold Lloyd's star comedy and carefully engineered urban stunt geography broaden the star-system comparison, while the existing The General already carries silent physical-action gameplay strongly enough to keep this book-only.",
  },
  {
    title: "The Covered Wagon",
    year: 1923,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Paramount-scale western production and location spectacle are useful evidence for genre planning and national distribution, but the chapter can teach those industrial systems without creating a redundant spectacle case.",
  },
  {
    title: "Greed",
    year: 1924,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "A crucial case for authorship, studio control, post-production power and surviving-version historiography during the Metro-to-MGM transition; retained as analysis rather than a gameplay model that would falsely imply one canonical director-approved release version.",
  },
  {
    title: "The Gold Rush",
    year: 1925,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Chaplin's star-producer model and United Artists distribution provide the chapter's strongest counterexample to the vertically integrated majors while combining feature-scale comedy, controlled studio production, location material and internationally marketable star authorship.",
  },
  {
    title: "The Big Parade",
    year: 1925,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "MGM prestige production, war genre and mass-market success are major studio-system evidence, but Wings provides a more distinct production-logistics case while The Crowd provides a stronger MGM continuity-and-organization case.",
  },
  {
    title: "Ben-Hur: A Tale of the Christ",
    year: 1925,
    aliases: ["Ben-Hur"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "MGM spectacle, costly location work and production transfer show consolidation and managerial intervention at scale, but the production function overlaps other large studio spectacles and remains book-level evidence.",
  },
  {
    title: "The General",
    year: 1926,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_the_general_1926",
    chapterFunction: "Existing Atlas anchor for readable action geography, practical stunt planning, feature comedy and causal continuity in the mature silent period.",
  },
  {
    title: "Flesh and the Devil",
    year: 1926,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "MGM melodrama and the marketable Garbo-Gilbert star pairing make star construction and studio style visible, but It offers a cleaner Production Case around star image, publicity and modern consumer culture.",
  },
  {
    title: "It",
    year: 1927,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P1",
    chapterFunction: "Paramount star-vehicle production around Clara Bow connects performance, costume, publicity, consumer modernity and national distribution, giving the chapter a Production Case where the star system is a production-and-marketing system rather than celebrity trivia.",
  },
  {
    title: "Wings",
    year: 1927,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P1",
    chapterFunction: "Paramount feature logistics at blockbuster scale: aerial photography, second-unit coordination, military cooperation, effects, continuity and genre spectacle provide a distinct studio-planning Production Case.",
  },
  {
    title: "Sunrise: A Song of Two Humans",
    year: 1927,
    aliases: ["Sunrise"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Fox's importation of F. W. Murnau and European-influenced camera, design and effects practices demonstrates transatlantic labor and style transfer, but its fuller formal genealogy belongs beside the dedicated Weimar chapter.",
  },
  {
    title: "The Crowd",
    year: 1928,
    aliases: [],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "MGM studio organization, large-scale urban staging, effects and location integration serve an unusually ordinary protagonist through lucid classical continuity, making the film a strong case for how an industrial system can support rather than erase stylistic and social specificity.",
  },
  {
    title: "The Cameraman",
    year: 1928,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Keaton's move into MGM is valuable evidence for the absorption of independent comic authorship into studio procedure, but the existing The General already supplies the stronger Keaton gameplay case.",
  },
  {
    title: "Show People",
    year: 1928,
    aliases: [],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Hollywood's self-representation, studio labor, stardom and genre hierarchy make useful reflexive book evidence without requiring another standalone Production Case.",
  },
];

const historicalObjects = [
  ["Hollywood production cluster and specialist service firms", "Studios depended on laboratories, equipment suppliers, craftspeople and other specialist firms concentrated in Southern California; the industrial cluster is infrastructure, not a film Production Case."],
  ["Famous Players-Lasky and Paramount distribution", "National distribution, standardized publicity and increasingly coordinated production tied individual features to a company-wide market system rather than to isolated producers."],
  ["Loew's and MGM vertical integration", "The merger and theater-owning corporate structure linked production, distribution and exhibition while managerial systems coordinated stars, units, facilities and release planning."],
  ["First National exhibitor-distributor network", "The exhibitor-backed company demonstrates that consolidation was contested and that access to screens could organize production power from the exhibition side."],
  ["United Artists distribution consortium", "Chaplin, Pickford, Fairbanks and Griffith created a distribution vehicle for independently controlled productions; it is an institutional countermodel, not itself a Production Case."],
  ["Run-zone-clearance, block booking and theater chains", "Release sequencing, territorial clearance, packages of films and theater ownership shaped where and how pictures earned money; these are distribution/exhibition systems rather than film scenarios."],
  ["Continuity as collaborative production practice", "Script breakdown, coverage, eyeline and directional consistency, matching action and editorial selection became repeatable labor practices across departments, not inventions attributable to one director or one film."],
  ["Contract stars, publicity departments and fan culture", "Studios and distributors manufactured recognizable screen identities through casting, contracts, still photography, advertising, press relations and repeated genre association."],
  ["Genre cycles and production planning", "Westerns, comedies, melodramas, war films and other recurring forms allowed companies to coordinate audience expectation, stars, sets, crews and marketing without making every film identical."],
  ["MPPDA and industry self-regulation", "The Motion Picture Producers and Distributors of America, founded in 1922, coordinated industry policy and public legitimacy; the institution belongs to industrial history rather than Production Case gameplay."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: ["It", "The Cheat", "The Crowd", "The General", "The Gold Rush"],
  P0: [],
  P1: ["Wings"],
  P2: [
    "Ben-Hur: A Tale of the Christ",
    "Flesh and the Devil",
    "Greed",
    "Intolerance",
    "Safety Last!",
    "Show People",
    "Sunrise: A Song of Two Humans",
    "The Big Parade",
    "The Birth of a Nation",
    "The Cameraman",
    "The Covered Wagon",
    "The Kid",
  ],
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
  auditDate: "2026-08-15",
  chapter: {
    number: 6,
    title: "Classical continuity and the Hollywood system",
    period: "1914–1929",
    scope: "Mature silent Hollywood as both a narrative system and an industrial system: continuity practices, studios, distribution and exhibition power, stars, genres, labor organization and countermodels to vertical integration.",
    thesis: "Classical Hollywood was not invented by one director or one film. It emerged as repeatable collaborative practice tied to industrial consolidation: films became legible across large markets while studios coordinated labor, stars, genres, publicity, distribution and exhibition at increasing scale.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

console.log("HG_FILM_HISTORY_CHAPTER_SIX_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_SIX_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 6 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
