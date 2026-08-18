import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 416;

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
  "chapterNineSovietMontageExpansion.ts",
  "chapterTenSilentCinemasExpansion.ts",
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
    title: "A Page of Madness",
    originalTitle: "Kurutta ichipeiji",
    year: 1926,
    aliases: ["Kurutta ippēji", "Kurutta Ichipeiji"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    expectedScenarioId: "scenario_a_page_of_madness_1926",
    chapterFunction: "Kinugasa and the New Perceptions circle provide the chapter's essential Japanese avant-garde anchor: independent production, subjective modernism, rediscovery after loss and exhibition whose original intelligibility depended partly on benshi performance rather than intertitles alone.",
  },
  {
    title: "Laborer's Love",
    originalTitle: "Laogong zhi aiqing",
    year: 1922,
    aliases: ["Labourer's Love", "Romance of a Fruit Peddler"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "The surviving Mingxing short anchors early Shanghai studio practice, urban comedy, May Fourth-era social modernity and the problem of reconstructing a film culture from an exceptionally small surviving corpus.",
  },
  {
    title: "A Throw of Dice",
    originalTitle: "Prapancha Pash",
    year: 1929,
    aliases: ["Prapancha Pash", "Schicksalswürfel"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "Himansu Rai and Franz Osten's India/Germany/United Kingdom collaboration anchors transnational silent production in India: location shooting, star-producer agency, international finance/circulation and the need to keep modern restoration scores distinct from original production sound.",
  },
  {
    title: "Growth of the Soil",
    originalTitle: "Markens grøde",
    year: 1921,
    aliases: ["Markens grode", "Segen der Erde", "The Growth of the Soil"],
    role: "anchor_film",
    decisionIfMissing: "P0",
    chapterFunction: "The Norwegian Hamsun adaptation supplies a distinct national production problem in long-form literary adaptation, landscape/location work, tinting/toning, local exhibition and the tension between prestigious source material and a still-developing domestic film industry.",
  },
  {
    title: "Orochi",
    originalTitle: "Orochi",
    year: 1925,
    aliases: ["Serpent"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "Buntaro Futagawa and star-producer Tsumasaburo Bando add independent star-company economics, chanbara action choreography, print preservation by a performer-producer and the later continuity of benshi presentation.",
  },
  {
    title: "The Red Heroine",
    originalTitle: "Hongxia",
    year: 1929,
    aliases: ["Red Heroine"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "The only surviving section of the Red Knight-Errant serial provides a playable route into late-1920s Shanghai wuxia serial production, female action stardom, practical/trick effects, tinting and the ethics of treating a fragment as a fragment rather than a complete serial.",
  },
  {
    title: "Häxan",
    originalTitle: "Häxan",
    year: 1922,
    aliases: ["Haxan", "Witchcraft Through the Ages"],
    role: "major_comparison",
    decisionIfMissing: "P1",
    chapterFunction: "Benjamin Christensen's Scandinavian production makes research, lecture form, staged reenactment, elaborate design/effects, censorship and the ethics of pseudo-documentary authority into a production problem distinct from The Phantom Carriage.",
  },
  {
    title: "Afgrunden",
    originalTitle: "Afgrunden",
    year: 1910,
    aliases: ["The Abyss"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_afgrunden_1910",
    chapterFunction: "The existing Danish Production Case supplies Asta Nielsen, Nordisk-era performance and international circulation at the opening edge of the chapter's silent-system history.",
  },
  {
    title: "The Phantom Carriage",
    originalTitle: "Körkarlen",
    year: 1921,
    aliases: ["Korkarlen", "The Phantom Chariot"],
    role: "anchor_film",
    decisionIfMissing: "EXISTING_REQUIRED",
    expectedScenarioId: "scenario_the_phantom_carriage_1921",
    chapterFunction: "The existing Swedish Production Case anchors literary adaptation, location-based visual culture, in-camera multiple exposure and the international prestige of the Swedish silent golden age.",
  },
  { title: "Crossroads", originalTitle: "Jūjiro", year: 1928, aliases: ["Jujiro", "Crossways"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Kinugasa's second avant-garde feature extends psychological jidaigeki and international art-cinema circulation; A Page of Madness already carries the distinct Japanese experimental Production Case." },
  { title: "Souls on the Road", originalTitle: "Rojō no Reikon", year: 1921, aliases: ["Rojo no Reikon"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "An early Japanese feature connects Shochiku-era modernization, Western dramatic influence and emerging studio practice without requiring a second broad institutional case." },
  { title: "The Romance of the Western Chamber", originalTitle: "Xixiang ji", year: 1927, aliases: ["Romance of the Western Chamber"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The surviving fragment of Minxin's lavish costume production broadens Chinese studio scale, tinting and literary adaptation while Laborer's Love and Red Heroine cover the more distinct playable production problems." },
  { title: "The Burning of the Red Lotus Temple", originalTitle: "Huoshao Hongliansi", year: 1928, aliases: ["Burning of the Red Lotus Temple"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The lost multi-part wuxia phenomenon remains essential book evidence for serial economics, special-effects spectacle, censorship and survival bias but cannot support a fabricated complete Production Case." },
  { title: "Raja Harishchandra", originalTitle: "Raja Harishchandra", year: 1913, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Dadasaheb Phalke's landmark Indian production is indispensable to industrial history, but only fragments survive; the chapter treats surviving material and historical documentation without inventing a full-film playable reconstruction." },
  { title: "Kaliya Mardan", originalTitle: "Kaliya Mardan", year: 1919, aliases: ["Kaliya Mardan (The Childhood of Krishna)"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Phalke's mythological production broadens performance, effects and indigenous production practice while the chapter avoids reducing Indian silent cinema to a single origin story." },
  { title: "The Light of Asia", originalTitle: "Prem Sanyas", year: 1925, aliases: ["Die Leuchte Asiens"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The first Rai/Osten transnational feature establishes the collaboration later continued by Shiraz and A Throw of Dice; the latter supplies the canonical playable endpoint." },
  { title: "Shiraz", originalTitle: "Shiraz: A Romance of India", year: 1928, aliases: ["Shiraz", "Shiraz: A Romance of India"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Rai and Osten's Indian/British/German location epic broadens design, costume and co-production history while A Throw of Dice carries the distinct transnational Production Case." },
  { title: "Ingeborg Holm", originalTitle: "Ingeborg Holm", year: 1913, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Sjöström's social melodrama expands Swedish realism and performance history before the prestige-era supernatural techniques represented by The Phantom Carriage." },
  { title: "The Outlaw and His Wife", originalTitle: "Berg-Ejvind och hans hustru", year: 1918, aliases: ["The Outlaw and His Wife (Berg-Ejvind och hans hustru)"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Sjöström's elemental landscape production is a major Swedish comparison, but The Phantom Carriage already supplies a distinct playable Swedish production problem." },
  { title: "Sir Arne's Treasure", originalTitle: "Herr Arnes pengar", year: 1919, aliases: ["Sir Arne's Treasure (Herr Arnes pengar)"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Mauritz Stiller, Selma Lagerlöf adaptation and Julius Jaenzon's landscape photography broaden the Swedish golden age without requiring another closely overlapping Production Case." },
  { title: "Erotikon", originalTitle: "Erotikon", year: 1920, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Stiller's sophisticated comedy broadens genre, performance and urban modernity beyond the landscape-heavy image of Swedish silent cinema." },
  { title: "Gösta Berling's Saga", originalTitle: "Gösta Berlings saga", year: 1924, aliases: ["Gosta Berling's Saga", "The Saga of Gosta Berling"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "Stiller's large-scale Lagerlöf adaptation and Greta Garbo's breakthrough broaden star formation and prestige production while existing/P1 Scandinavian cases cover distinct gameplay." },
  { title: "The Sentimental Bloke", originalTitle: "The Sentimental Bloke", year: 1919, aliases: [], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The Australian feature broadens vernacular performance, location work and a film culture often omitted from canonical silent-era narratives." },
  { title: "El automóvil gris", originalTitle: "El automóvil gris", year: 1919, aliases: ["The Grey Automobile", "The Gray Automobile", "El automovil gris"], role: "comparative_film", decisionIfMissing: "P2", chapterFunction: "The Mexican crime serial broadens location, actuality/fiction mixture and Latin American silent production while remaining book-level comparison in this chapter." },
];

const historicalObjects = [
  ["Benshi, live narration, intertitles and silent-era accompaniment", "Japanese silent exhibition often relied on benshi performance, while other territories used different combinations of intertitles and live music; 'silent' must not be treated as one universal mute presentation format."],
  ["Japanese studios, independent star companies, jidaigeki and chanbara production", "Shochiku-era modernization and independent performer-producers such as Tsumasaburo Bando created different production and distribution models; genres and companies are institutional context rather than fake films."],
  ["Shanghai studios, Mingxing/Minxin networks and urban Chinese modernity", "Early Chinese production grew through rapidly changing companies, writers, performers and urban exhibition circuits; a tiny surviving corpus must not be mistaken for the whole industry."],
  ["Wuxia serial culture, special effects, censorship and fragment survival", "Late-1920s martial-arts serials could run across many installments and later face official bans; surviving fragments such as Red Heroine require explicit limits on what historians can reconstruct."],
  ["Phalke, mythological production and early Indian studio formation", "Indian silent production developed indigenous entrepreneurship, mythological genres and performance practices before sound; origin stories remain contextual history rather than a single founder preset."],
  ["Himansu Rai, Franz Osten and transnational Indian-European co-production", "Light of Asia, Shiraz and A Throw of Dice combined Indian star-producer agency, German direction/technical collaboration and international finance/circulation; co-production is not evidence of national purity."],
  ["Swedish golden-age studios, literary adaptation and landscape aesthetics", "Sjöström, Stiller, cinematographers, companies and authors such as Selma Lagerlöf built prestige through adaptation, performance and location work; the production system matters beyond auteur labels."],
  ["Danish Nordisk, Asta Nielsen and Scandinavian transnational circulation", "Danish companies and performers were major international forces before and during the 1910s, linking national production to export markets and mobile careers rather than isolated national canons."],
  ["Norwegian silent production, literary prestige and location culture", "Norwegian features such as Growth of the Soil developed through small domestic companies, literary adaptation and demanding location work; preservation and later restoration shape what can now be studied."],
  ["Nitrate loss, incomplete survival, archive reconstruction and canon bias", "Most silent films from several chapter regions are lost or incomplete. Surviving titles are evidence conditioned by preservation, rediscovery and archive policy, not a statistically representative sample of historical production."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const expectedDecisions = {
  USE_EXISTING: ["A Page of Madness", "Afgrunden", "The Phantom Carriage"],
  P0: ["A Throw of Dice", "Growth of the Soil", "Laborer's Love"],
  P1: ["Häxan", "Orochi", "The Red Heroine"],
  P2: ["Crossroads", "El automóvil gris", "Erotikon", "Gösta Berling's Saga", "Ingeborg Holm", "Kaliya Mardan", "Raja Harishchandra", "Shiraz", "Sir Arne's Treasure", "Souls on the Road", "The Burning of the Red Lotus Temple", "The Light of Asia", "The Outlaw and His Wife", "The Romance of the Western Chamber", "The Sentimental Bloke"],
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
function acceptedTitles(item) { return [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(normalizeTitle).filter(Boolean); }
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
  auditDate: "2026-08-18",
  chapter: {
    number: 10,
    id: "silent-beyond-west",
    title: "Silent cinemas beyond the usual canon",
    period: "1910s–1929",
    scope: "Japanese benshi/studio/independent production, Shanghai Chinese studios and wuxia serials, Indian indigenous and transnational silent production, Scandinavian and Norwegian film systems, and the archival survival problem that shapes the modern canon.",
    thesis: "Silent cinema was never one Hollywood-European system: production companies, live narration, genres, colonial and transnational finance, literary adaptation, location practices and archive survival created distinct film cultures whose differences must remain visible rather than being flattened into a generic world-cinema supplement.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary },
  candidates: candidateResults,
  byDecision,
  historicalObjects,
  boundaryNotes: [
    "The Burning of the Red Lotus Temple is historically central to wuxia serial production but no complete film survives; the book may analyze documented production and reception, while gameplay must not fabricate a complete surviving Production Case.",
    "Only fragments of Raja Harishchandra survive. Its industrial importance is preserved without pretending the extant footage supplies a complete feature-level production record.",
    "Red Heroine is the only surviving section of a larger serial; any Production Case must model the surviving self-contained section and explicitly preserve the missing-series boundary.",
    "A Page of Madness was originally exhibited in a culture of benshi narration. Lack of conventional intertitles must not be interpreted as evidence that historical audiences were meant to receive the surviving image track without live interpretive performance.",
    "Major sound-era landmarks including Alam Ara (1931) and later Japanese/Chinese sound transitions are deferred to the sound-transition chapter rather than pulled backward into a chapter ending in 1929.",
  ],
  safeguards: [
    "Archive survival is not representativeness: a surviving film receives no automatic claim to typify its national cinema, and lost works remain visible as documented absences.",
    "Japan, China, India, Denmark, Sweden, Norway, Australia and Mexico remain distinct production contexts; 'non-Western' or 'world cinema' is never used as a substitute for institutional specificity.",
    "Benshi, live music, translated intertitles and touring exhibition are historical presentation systems, not missing-data defects or synchronized production sound.",
    "Colonial and transnational co-production must identify who financed, produced, performed, photographed and circulated a film rather than assigning pure national ownership by location alone.",
    "Modern restoration scores, reconstructed tints and archive assemblies remain distinct from original production elements and are labeled as later presentation/restoration work.",
  ],
  recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1],
  remainingBookReferenceOnlyFilms: byDecision.P2,
  structuralProblems,
};

mkdirSync(path.join(root, "docs"), { recursive: true });
writeFileSync(path.join(root, "docs", "film-history-chapter-ten-atlas-resolved.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log("HG_FILM_HISTORY_CHAPTER_TEN_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_TEN_ATLAS_AUDIT_END");
if (structuralProblems.length > 0) { console.error(`Film History Chapter 10 Atlas audit found ${structuralProblems.length} structural problem(s).`); process.exitCode = 1; }
