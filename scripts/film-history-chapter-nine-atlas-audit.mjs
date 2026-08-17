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
  {
    title: "Battleship Potemkin",
    originalTitle: "Bronenosets Potemkin",
    year: 1925,
    aliases: ["The Battleship Potemkin", "Броненосец Потёмкин"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_battleship_potemkin_1925",
    chapterFunction: "Eisenstein's existing anchor for collision montage, mass action, temporal expansion/compression, political persuasion and the difference between historical event and constructed revolutionary representation.",
  },
  {
    title: "Man with a Movie Camera",
    originalTitle: "Chelovek s kinoapparatom",
    year: 1929,
    aliases: ["The Man with a Movie Camera", "Человек с киноаппаратом"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_man_with_a_movie_camera_1929",
    chapterFunction: "Vertov, Elizaveta Svilova and Mikhail Kaufman's existing anchor for kino-eye, documentary construction, self-reflexive production, urban montage and collective authorship.",
  },
  {
    title: "Mother",
    originalTitle: "Mat",
    year: 1926,
    aliases: ["Мать"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Pudovkin provides the essential contrast to Eisenstein: linkage and accumulation of shots build character, emotion and revolutionary causality through a feature-scale adaptation rather than collision alone.",
  },
  {
    title: "The Fall of the Romanov Dynasty",
    originalTitle: "Padenie dinastii Romanovykh",
    year: 1927,
    aliases: ["Падение династии Романовых"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Esfir Shub makes archival search, found-footage selection, recontextualization, intertitles, preservation and editorial authorship into a distinct compilation-montage production problem.",
  },
  {
    title: "Earth",
    originalTitle: "Zemlya",
    year: 1930,
    aliases: ["Земля"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Dovzhenko adds Ukrainian production context, lyrical and associative montage, landscape, collectivization propaganda and the need to distinguish a film's commission from the historical catastrophe understood in hindsight.",
  },
  {
    title: "October",
    originalTitle: "Oktyabr",
    year: 1928,
    aliases: ["October: Ten Days That Shook the World", "Октябрь"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "A state anniversary commission turns historical reconstruction, nonprofessional casting, intellectual montage and politically compelled recutting into a production problem distinct from Potemkin's 1905 mass-action model.",
  },
  {
    title: "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks",
    originalTitle: "Neobychainye priklyucheniya mistera Vesta v strane bolshevikov",
    year: 1924,
    aliases: ["Mr. West in the Land of the Bolsheviks", "The Extraordinary Adventures of Mr West in the Land of the Bolsheviks"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "Kuleshov's workshop turns American genre borrowing, rapid constructive editing, physical performance, satire and pedagogy into a practical counterpart to the abstract Kuleshov-effect discussion.",
  },
  { title: "Strike", originalTitle: "Stachka", year: 1925, aliases: ["Стачка"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Eisenstein's first feature is important for montage of attractions and collective protagonist, but Potemkin already carries the core playable collision-montage problem." },
  { title: "The General Line", originalTitle: "Staroye i novoye", year: 1929, aliases: ["Old and New", "The Old and the New", "Старое и новое"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Eisenstein's collectivization film extends intellectual and sensuous montage, but Earth supplies the more distinct Ukrainian and propaganda-versus-poetics Production Case." },
  { title: "The End of St. Petersburg", originalTitle: "Konets Sankt-Peterburga", year: 1927, aliases: ["The End of Saint Petersburg", "Конец Санкт-Петербурга"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Pudovkin's revolutionary trilogy broadens historical scale after Mother without requiring a second linkage-centered Production Case." },
  { title: "Storm over Asia", originalTitle: "Potomok Chingis-Khana", year: 1928, aliases: ["The Heir to Genghis Khan", "Потомок Чингисхана"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Pudovkin's colonial-border narrative raises imperial and ethnographic representation questions, but Mother remains the cleaner anchor for his montage theory." },
  { title: "By the Law", originalTitle: "Po zakonu", year: 1926, aliases: ["According to the Law", "Dura Lex", "По закону"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Kuleshov's chamber adaptation is useful for constructive geography and resource economy; Mr. West provides the broader workshop, genre and political-satire gameplay case." },
  { title: "Kino-Eye", originalTitle: "Kinoglaz", year: 1924, aliases: ["Kino Eye", "Киноглаз"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Vertov's early feature-like nonfiction statement establishes kino-eye principles, while Man with a Movie Camera already carries the mature collective documentary-production case." },
  { title: "A Sixth Part of the World", originalTitle: "Shestaya chast mira", year: 1926, aliases: ["The Sixth Part of the World", "Шестая часть мира"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Vertov's geographically expansive commission develops interval montage and state-economic representation without needing a second Vertov scenario." },
  { title: "The Eleventh Year", originalTitle: "Odinnadtsatyy", year: 1928, aliases: ["The Eleventh", "Одиннадцатый"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Industrial imagery and rhythmic construction lead directly toward Man with a Movie Camera and remain book-level comparative evidence." },
  { title: "Zvenigora", originalTitle: "Zvenyhora", year: 1928, aliases: ["Звенигора"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The first part of Dovzhenko's Ukrainian trilogy supplies myth-history comparison; Earth carries the distinct playable culmination." },
  { title: "Arsenal", originalTitle: "Arsenal", year: 1929, aliases: ["Арсенал"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Dovzhenko's anti-war tension, speed and stillness deepen the Ukrainian trilogy, but Earth remains the stronger separate production/propaganda problem." },
  { title: "The Great Road", originalTitle: "Velikiy put", year: 1927, aliases: ["The Great Way", "Великий путь"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Shub's additional compilation work broadens archival montage after The Fall of the Romanov Dynasty without requiring redundant found-footage gameplay." },
  { title: "The New Babylon", originalTitle: "Novyy Vavilon", year: 1929, aliases: ["New Babylon", "Новый Вавилон"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "FEKS, constructivist performance and Shostakovich's score expand the field beyond the canonical montage theorists and remain book-level comparison." },
  { title: "Bed and Sofa", originalTitle: "Tretya Meshchanskaya", year: 1927, aliases: ["Third Meshchanskaya", "Третья Мещанская"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Abram Room's social satire prevents Soviet cinema from collapsing into revolutionary epics while remaining outside the core montage-production queue." },
  { title: "Fragment of an Empire", originalTitle: "Oblomok imperii", year: 1929, aliases: ["A Fragment of an Empire", "Обломок империи"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Fridrikh Ermler's memory and social transformation provide an additional montage-era comparison rather than a required distinct Production Case." },
];

const historicalObjects = [
  ["Kuleshov workshop, VGIK and the Kuleshov effect", "The workshop and editing experiment belong to pedagogy and theory; the Kuleshov effect is not a magic reaction preset or a claim that one surviving shot pair explains all montage."],
  ["Competing montage theories: collision, linkage, intervals and intellectual montage", "Eisenstein, Pudovkin, Vertov and others theorized editing differently; the chapter must compare their arguments rather than turn 'Soviet montage' into one universal cut formula."],
  ["Nationalization, Narkompros, Goskino, Sovkino and Mezhrabpom production institutions", "Revolutionary film culture depended on changing state, semi-state and cooperative production/distribution structures; institutions are production context, not fake films."],
  ["Agit-trains, agit-trucks, newsreels and mobile exhibition", "Film circulated as political information and education through non-theatrical infrastructures reaching workers, soldiers and rural audiences; distribution practice is not a Production Case by itself."],
  ["Proletkult, theatre of attractions, constructivism and FEKS", "Theatre, design, circus, eccentric performance and constructivist practice fed film form across several groups without constituting one reusable visual style preset."],
  ["Kino-Pravda, kino-eye and collective documentary labor", "Vertov's program depended on camera operators and editors including Mikhail Kaufman and Elizaveta Svilova; documentary construction and collective labor must remain visible rather than being reduced to a lone-director myth."],
  ["VUFKU and Ukrainian Soviet cinema", "Kyiv, Odesa and Kharkiv production institutions and filmmakers including Dovzhenko and Vertov complicate the habit of treating every Soviet film as culturally or institutionally Russian."],
  ["State commissions, censorship and political recutting", "Anniversary films and propaganda commissions could be altered as official politics changed; October's removal of Trotsky material is a history/evidence problem, not a gameplay instruction to falsify archives."],
  ["Import re-editing, film-stock scarcity and archival reuse", "Soviet editors including Esfir Shub transformed imported and inherited footage under material and ideological constraints; re-editing is labor and institutional practice, not automatically creative consent from the original makers."],
  ["Propaganda, collectivization, violence and historical hindsight", "Political purpose must be distinguished from later historical knowledge: films about revolution, class conflict and collectivization are evidence of production and ideology, not neutral records or templates for endorsing state violence."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: ["Battleship Potemkin", "Man with a Movie Camera"],
  P0: ["Earth", "Mother", "The Fall of the Romanov Dynasty"],
  P1: ["October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks"],
  P2: ["A Sixth Part of the World", "Arsenal", "Bed and Sofa", "By the Law", "Fragment of an Empire", "Kino-Eye", "Strike", "Storm over Asia", "The Eleventh Year", "The End of St. Petersburg", "The General Line", "The Great Road", "The New Babylon", "Zvenigora"],
};

function readText(filePath) { return readFileSync(filePath, "utf8"); }
function normalizeTitle(value) { return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim(); }
function parseQuotedStrings(value) { const result = []; const pattern = /"((?:\\.|[^"\\])*)"/g; for (const match of value.matchAll(pattern)) result.push(JSON.parse(`"${match[1]}"`)); return result; }
function findMatchingBracket(source, startIndex, openCharacter, closeCharacter) {
  let depth = 0; let quote = null; let escaped = false;
  for (let index = startIndex; index < source.length; index += 1) {
    const character = source[index];
    if (quote) { if (escaped) escaped = false; else if (character === "\\") escaped = true; else if (character === quote) quote = null; continue; }
    if (character === '"' || character === "'" || character === "`") { quote = character; continue; }
    if (character === openCharacter) depth += 1;
    else if (character === closeCharacter) { depth -= 1; if (depth === 0) return index; }
  }
  throw new Error(`Unmatched ${openCharacter}${closeCharacter}`);
}
function extractTopLevelObjects(arraySource) { const objects = []; let index = 0; while (index < arraySource.length) { if (arraySource[index] !== "{") { index += 1; continue; } const endIndex = findMatchingBracket(arraySource, index, "{", "}"); objects.push(arraySource.slice(index, endIndex + 1)); index = endIndex + 1; } return objects; }
function stringField(objectSource, fieldName) { const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`)); if (!match) throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`); return JSON.parse(`"${match[1]}"`); }
function numberField(objectSource, fieldName) { const match = objectSource.match(new RegExp(`\\b${fieldName}\\s*:\\s*(\\d+)`)); if (!match) throw new Error(`Missing ${fieldName}: ${objectSource.slice(0, 160)}`); return Number(match[1]); }
function aliasesField(objectSource) { const match = objectSource.match(/\baliases\s*:\s*\[([^\]]*)\]/); return match ? parseQuotedStrings(match[1]) : []; }
function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Could not locate definitions array in ${fileName}`);
  const arrayStart = source.indexOf("[", declaration.index);
  const arrayEnd = findMatchingBracket(source, arrayStart, "[", "]");
  return extractTopLevelObjects(source.slice(arrayStart + 1, arrayEnd)).map((objectSource) => ({ id: stringField(objectSource, "id"), title: stringField(objectSource, "title"), originalTitle: stringField(objectSource, "originalTitle"), aliases: aliasesField(objectSource), year: numberField(objectSource, "year") }));
}
function acceptedTitles(item) { return [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(normalizeTitle); }
function matches(left, right) { if (left.id && right.id && left.id === right.id) return true; if (left.year !== right.year) return false; const rightTitles = new Set(acceptedTitles(right)); return acceptedTitles(left).some((title) => rightTitles.has(title)); }
function sameList(left, right) { return JSON.stringify([...left].sort()) === JSON.stringify([...right].sort()); }

const seed = JSON.parse(readText(seedPath));
const atlas = seed.scenarios.map((scenario) => ({ id: scenario.id, title: scenario.film.title, originalTitle: scenario.film.original_title, aliases: [], year: scenario.film.year, origin: "film_scenarios_seed.json" }));
const expansionSummary = [];
for (const fileName of expansionFiles) {
  let appended = 0; let matchedExisting = 0;
  for (const definition of parseExpansion(fileName)) {
    if (atlas.some((scenario) => matches(scenario, definition))) { matchedExisting += 1; continue; }
    atlas.push({ ...definition, origin: fileName }); appended += 1;
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
for (const [decision, expectedTitles] of Object.entries(expectedDecisions)) if (!sameList(byDecision[decision] ?? [], expectedTitles)) structuralProblems.push(`${decision} must equal ${expectedTitles.join(" | ")}; found ${(byDecision[decision] ?? []).join(" | ")}`);
if ((byDecision.EXISTING_REQUIRED ?? []).length > 0) structuralProblems.push(`Required existing candidates are missing: ${byDecision.EXISTING_REQUIRED.join(", ")}`);

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-17",
  chapter: {
    number: 9,
    id: "soviet-montage",
    title: "Revolution and Soviet Montage",
    period: "1917–1930",
    scope: "Kuleshov pedagogy, competing montage theories, revolutionary fiction, kino-eye documentary, compilation film, Ukrainian Soviet production, state institutions, propaganda and political/historical reconstruction.",
    thesis: "Soviet montage was not one editing recipe: Kuleshov, Eisenstein, Pudovkin, Vertov, Shub, Dovzhenko and others worked through different institutions and theories to make editing a site of perception, political argument, historical construction and documentary authorship.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  boundaryNotes: [
    "Enthusiasm / Symphony of the Donbas (1931) is intentionally deferred to the sound-transition chapter because Chapter 9's canonical period ends in 1930 and its key production problem is asynchronous/contrapuntal recorded sound.",
    "The Odessa Steps sequence in Battleship Potemkin is analyzed as constructed revolutionary representation, not treated as neutral documentary footage of a historical massacre on those steps.",
    "Earth's collectivization commission is kept distinct from later knowledge of forced collectivization and the Holodomor; historical hindsight constrains interpretation but is not back-projected as Dovzhenko's documented production intention.",
  ],
  safeguards: [
    "The Kuleshov effect is a contested pedagogical/theoretical construct, not a universal viewer-response formula or gameplay multiplier.",
    "Eisenstein collision, Pudovkin linkage and Vertov interval/kino-eye theories must remain distinguishable rather than becoming one Soviet montage preset.",
    "Soviet does not mean Russian: VUFKU, Ukrainian locations and Ukrainian filmmakers must remain institutionally and culturally visible where supported by evidence.",
    "State commission, propaganda purpose, censorship and archival alteration must remain distinct historical claims; the game never rewards falsifying evidence or endorsing political violence.",
    "Esfir Shub's archival research and editing labor must be credited as authorship rather than reduced to anonymous reuse of existing footage.",
  ],
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

mkdirSync(path.join(root, "docs"), { recursive: true });
writeFileSync(path.join(root, "docs", "film-history-chapter-nine-atlas-resolved.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log("HG_FILM_HISTORY_CHAPTER_NINE_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_NINE_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) { console.error(`Film History Chapter 9 Atlas audit found ${structuralProblems.length} structural problem(s).`); process.exitCode = 1; }
