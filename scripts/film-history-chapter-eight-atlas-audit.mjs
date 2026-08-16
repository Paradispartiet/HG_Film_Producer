import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 406;

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
  {
    title: "The Passion of Joan of Arc",
    originalTitle: "La Passion de Jeanne d'Arc",
    year: 1928,
    aliases: ["The Passion of Joan of Arc"],
    role: "comparative_anchor",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_the_passion_of_joan_of_arc_1928",
    chapterFunction: "Existing French-produced silent anchor for radical close-up, sparse design, discontinuous eyelines and performance intensity. It broadens the French production field without being falsely relabeled as a core Impressionist or Surrealist manifesto.",
  },
  {
    title: "Cœur fidèle",
    originalTitle: "Cœur fidèle",
    year: 1923,
    aliases: ["Coeur fidèle", "Coeur fidele", "Faithful Heart"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Jean Epstein's central French Impressionist case for photogénie, subjective camera, rhythmic editing and the fairground sequence: a distinct production problem in turning perception and emotion into image rhythm rather than classical continuity alone.",
  },
  {
    title: "Napoléon",
    originalTitle: "Napoléon vu par Abel Gance",
    year: 1927,
    aliases: ["Napoleon", "Napoléon"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Abel Gance's large-scale production and exhibition experiment connects mobile camera work, rapid montage, multiple-image techniques, tinting and the Polyvision triptych to feature-scale logistics and version history.",
  },
  {
    title: "Un Chien Andalou",
    originalTitle: "Un chien andalou",
    year: 1929,
    aliases: ["An Andalusian Dog"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Buñuel and Dalí's Surrealist collaboration provides a distinct low-budget production problem in automatic-writing logic, discontinuous association, alternative exhibition and provocative imagery, with explicit safeguards against reenacting animal or bodily harm as gameplay.",
  },
  {
    title: "The Smiling Madame Beudet",
    originalTitle: "La Souriante Madame Beudet",
    year: 1923,
    aliases: ["La souriante Madame Beudet", "The Smiling Mme Beudet"],
    role: "anchor_film",
    decisionIfMissing: "P1",
    chapterFunction: "Germaine Dulac's domestic subjectivity makes superimposition, fantasy insert, gesture and restricted social space serve a woman's interior life, widening Impressionist gameplay beyond a male-only canon and beyond spectacle.",
  },
  {
    title: "Entr'acte",
    originalTitle: "Entr'acte",
    year: 1924,
    aliases: ["Entr’acte"],
    role: "anchor_film",
    decisionIfMissing: "P1",
    chapterFunction: "René Clair, Francis Picabia and Erik Satie connect Dada, ballet, commissioned intermission cinema, variable-speed imagery and cross-art collaboration to alternative institutions and event-based exhibition rather than normal feature distribution.",
  },
  {
    title: "La Roue",
    originalTitle: "La Roue",
    year: 1923,
    aliases: ["The Wheel"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Gance's long-form railway melodrama is crucial for accelerated montage, multi-camera production and extreme version history, but Napoléon carries the more distinct Gance Production Case while La Roue remains indispensable book evidence.",
  },
  {
    title: "Ballet mécanique",
    originalTitle: "Ballet mécanique",
    year: 1924,
    aliases: ["Ballet Mecanique", "Ballet mécanique"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Léger and Murphy's machine-body abstraction is a core pure-cinema comparison, but its nonnarrative rhythmic function can remain book-level beside Entr'acte and the later experimental-film chapter rather than generating redundant gameplay.",
  },
  {
    title: "La Coquille et le Clergyman",
    originalTitle: "La Coquille et le Clergyman",
    year: 1928,
    aliases: ["The Seashell and the Clergyman", "La Coquille et le clergyman"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Dulac and Artaud's contested Surrealist/psychological collaboration is essential for authorship, dream logic and gendered interpretation, but Un Chien Andalou and Madame Beudet provide clearer distinct gameplay poles without duplicating Dulac.",
  },
  {
    title: "The Fall of the House of Usher",
    originalTitle: "La Chute de la maison Usher",
    year: 1928,
    aliases: ["La Chute de la maison Usher"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Epstein's Poe adaptation extends photogénie through slow motion, superimposition, rhythm and material atmosphere, but Cœur fidèle already supplies the stronger foundational Epstein Production Case.",
  },
  {
    title: "Ménilmontant",
    originalTitle: "Ménilmontant",
    year: 1926,
    aliases: ["Menilmontant"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Kirsanoff's independent urban melodrama is valuable for title-light visual narration, location texture and subjective editing but overlaps the Impressionist perception problem already assigned to Cœur fidèle.",
  },
  {
    title: "Emak-Bakia",
    originalTitle: "Emak-Bakia",
    year: 1926,
    aliases: ["Emak Bakia"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Man Ray's cinegraphic experiment broadens abstraction, rayograph-like imagery and artist-film production, but belongs as book-level pure-cinema evidence rather than another short-form Production Case.",
  },
  {
    title: "L'Étoile de mer",
    originalTitle: "L'Étoile de mer",
    year: 1928,
    aliases: ["L'Etoile de mer", "The Starfish"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Man Ray's collaboration with Robert Desnos expands distorted vision, poetic text and Surrealist association while overlapping the short-form experimental production functions of the stronger anchor cases.",
  },
  {
    title: "L'Inhumaine",
    originalTitle: "L'Inhumaine",
    year: 1924,
    aliases: ["The Inhuman Woman"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Marcel L'Herbier's cross-art feature is important for modernist architecture, design and international artistic collaboration, but those production-design functions overlap existing large-scale design cases and can remain book-level here.",
  },
  {
    title: "L'Âge d'Or",
    originalTitle: "L'Âge d'Or",
    year: 1930,
    aliases: ["L'Age d'Or", "The Golden Age"],
    role: "comparative_film",
    decisionIfMissing: "P2",
    chapterFunction: "Buñuel's patron-funded 1930 Surrealist feature is vital for sound-era provocation, censorship and alternative patronage, but Un Chien Andalou is the cleaner silent-era Surrealist Production Case and Chapter 11 owns the sound transition.",
  },
];

const historicalObjects = [
  ["Photogénie and French Impressionist film theory", "Delluc, Epstein, Dulac and others theorized cinema's capacity to transform objects, faces, movement and duration. Photogénie is a contested critical concept, not a camera preset or measurable gameplay score."],
  ["Film criticism, journals, ciné-clubs and specialist cinemas", "Writing, clubs and venues helped define audiences and vocabularies for film art outside mainstream commercial circulation; these institutions enabled movements but are not films."],
  ["Independent producers, patrons and alternative financing", "Avant-garde work depended on small companies, private money, artist networks and sometimes wealthy patrons, creating different freedoms and dependencies from vertically integrated studios."],
  ["Dada and Surrealist artist networks", "Film intersected with poetry, painting, performance and anti-bourgeois artistic movements. Those networks shaped collaboration and exhibition but should not be converted into a single reproducible style recipe."],
  ["Cinéma pur and abstract moving-image practice", "Artists explored rhythm, shape, repetition, speed and photographic transformation without conventional narrative obligations; the practice spans many shorts rather than one canonical Production Case."],
  ["Alternative exhibition and event cinema", "Studio des Ursulines, Studio 28, theatre/ballet programs and ciné-club screenings created contexts where short experimental works could circulate and provoke audiences outside standard feature programs."],
  ["Cross-art production design and modernist collaboration", "Architects, painters, musicians, poets and designers entered film production, making French avant-garde cinema a collaborative art-world system rather than a director-only phenomenon."],
  ["Gender, authorship and unequal canon formation", "Germaine Dulac and other women were central to French avant-garde production and theory; later canons and attribution disputes can obscure that labor and must be handled explicitly."],
  ["Censorship, scandal and representational harm", "Provocation could trigger censorship or political reaction, while shocking images may involve real harm or vulnerable bodies. Historical analysis does not turn dangerous or exploitative acts into player objectives."],
  ["Restoration, alternate cuts and reconstructed accompaniment", "La Roue, Napoléon and many shorts survive through complex restoration histories. Modern runtimes, music and reconstructed versions must remain distinct from original production and exhibition states."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: ["Cœur fidèle", "The Passion of Joan of Arc"],
  P0: ["Napoléon", "Un Chien Andalou"],
  P1: ["Entr'acte", "The Smiling Madame Beudet"],
  P2: ["Ballet mécanique", "Emak-Bakia", "L'Inhumaine", "L'Âge d'Or", "L'Étoile de mer", "La Coquille et le Clergyman", "La Roue", "Ménilmontant", "The Fall of the House of Usher"],
};

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
function sameList(left, right) { return JSON.stringify([...left].sort()) === JSON.stringify([...right].sort()); }

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
  if (found.length === 0) return { ...candidate, decision: candidate.decisionIfMissing, scenarioId: null, matches: 0 };
  if (found.length > 1) return { ...candidate, decision: "AMBIGUOUS", scenarioId: null, matches: found.length };
  return { ...candidate, decision: "USE_EXISTING", scenarioId: found[0].id, matches: 1, origin: found[0].origin };
});
for (const result of candidateResults) {
  if (result.decision === "AMBIGUOUS") throw new Error(`${result.title} matched ${result.matches} Atlas scenarios`);
  if (result.expectedScenarioId && result.scenarioId !== result.expectedScenarioId) throw new Error(`${result.title} must resolve to ${result.expectedScenarioId}, found ${result.scenarioId ?? result.decision}`);
}
const byDecision = Object.fromEntries(["USE_EXISTING", "P0", "P1", "P2", "EXISTING_REQUIRED"].map((decision) => [decision, candidateResults.filter((candidate) => candidate.decision === decision).map((candidate) => candidate.title)]));
const structuralProblems = [];
for (const [decision, expectedTitles] of Object.entries(expectedDecisions)) {
  if (!sameList(byDecision[decision] ?? [], expectedTitles)) structuralProblems.push(`${decision} must equal ${expectedTitles.join(" | ")}; found ${(byDecision[decision] ?? []).join(" | ")}`);
}
if ((byDecision.EXISTING_REQUIRED ?? []).length > 0) structuralProblems.push(`Required existing candidates are missing: ${byDecision.EXISTING_REQUIRED.join(", ")}`);
const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-16",
  chapter: {
    number: 8,
    id: "french-avant-gardes",
    title: "French Impressionism, Surrealism and the avant-gardes",
    period: "1918–1930",
    scope: "Photogénie, subjective vision, French Impressionist feature practice, Dada and Surrealist networks, cinéma pur, cross-art collaboration, alternative financing/exhibition and version-aware preservation.",
    thesis: "French avant-garde cinema was not one anti-commercial style: feature producers, critics, artists, patrons, specialist venues and independent filmmakers used different production scales to make perception, rhythm, abstraction and Surrealist association into cinema-specific problems.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

mkdirSync(path.join(root, "docs"), { recursive: true });
writeFileSync(path.join(root, "docs", "film-history-chapter-eight-atlas-resolved.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log("HG_FILM_HISTORY_CHAPTER_EIGHT_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_EIGHT_ATLAS_AUDIT_END");

if (structuralProblems.length > 0) {
  console.error(`Film History Chapter 8 Atlas audit found ${structuralProblems.length} structural problem(s).`);
  process.exitCode = 1;
}
