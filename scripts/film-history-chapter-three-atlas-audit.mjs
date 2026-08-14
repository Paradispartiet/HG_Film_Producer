import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const core = path.join(root, "src", "core");
const EXPECTED_ATLAS_COUNT = 393;
const expansionFiles = [
  "earlyCinemaExpansion.ts", "chapterOneEarlyCinemaExpansion.ts", "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts", "chapterThreeNarrativeExpansion.ts", "chapterFourIndustryExpansion.ts",
  "modernCanonExpansion.ts", "priorityIndieExpansion.ts", "eastAsianAuteurExpansion.ts", "japaneseAuteurExpansion.ts",
  "southKoreanCinemaExpansion.ts", "southSoutheastAsianExpansion.ts", "festivalWinners1981To2009Expansion.ts",
  "festivalWinners2010To2024Expansion.ts", "scandinavianEuropeanExpansion.ts", "easternIberianBritishExpansion.ts",
  "italyFranceGermanyBeneluxExpansion.ts",
];
const candidates = [
  ["Cendrillon", 1899, ["Cinderella"], "P2"],
  ["Grandma's Reading Glass", 1900, ["Grandmother's Reading Glass", "Grandmas Reading Glass"], "P0", "scenario_grandmas_reading_glass_1900"],
  ["Attack on a China Mission - Bluejackets to the Rescue", 1900, ["Attack on a China Mission", "Attack on a China Mission – Bluejackets to the Rescue", "Attack on a China Mission: Bluejackets to the Rescue", "Attack on a China Mission (Bluejackets to the Rescue)"], "P1", "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900"],
  ["Histoire d'un crime", 1901, ["History of a Crime", "The Story of a Crime", "Story of a Crime"], "P1", "scenario_histoire_d_un_crime_1901"],
  ["Stop Thief!", 1901, ["Stop Thief"], "P2"],
  ["Fire!", 1901, ["Fire"], "EXISTING_REQUIRED", "scenario_fire_1901"],
  ["A Trip to the Moon", 1902, ["Le voyage dans la lune"], "EXISTING_REQUIRED", "scenario_a_trip_to_the_moon_1902"],
  ["Life of an American Fireman", 1903, ["The Life of an American Fireman"], "EXISTING_REQUIRED", "scenario_life_of_an_american_fireman_1903"],
  ["The Great Train Robbery", 1903, ["Great Train Robbery"], "EXISTING_REQUIRED", "scenario_the_great_train_robbery_1903"],
  ["Mary Jane's Mishap", 1903, ["Mary Jane’s Mishap", "Mary Jane's Mishap; or, Don't Fool with the Paraffin", "Mary Jane’s Mishap; or, Don’t Fool with the Paraffin"], "P2"],
  ["Rescued by Rover", 1905, ["Rover"], "EXISTING_REQUIRED", "scenario_rescued_by_rover_1905"],
  ["The Lonely Villa", 1909, ["Lonely Villa"], "P0", "scenario_the_lonely_villa_1909"],
  ["The Lonedale Operator", 1911, ["Lonedale Operator"], "P2"],
].map(([title, year, aliases, decisionIfMissing, expectedScenarioId]) => ({ title, year, aliases, decisionIfMissing, expectedScenarioId }));
const expectedDecisions = {
  USE_EXISTING: ["A Trip to the Moon", "Attack on a China Mission - Bluejackets to the Rescue", "Fire!", "Grandma's Reading Glass", "Histoire d'un crime", "Life of an American Fireman", "Rescued by Rover", "The Great Train Robbery", "The Lonely Villa"],
  P0: [], P1: [], P2: ["Cendrillon", "Mary Jane's Mishap", "Stop Thief!", "The Lonedale Operator"],
};
const historicalObjects = ["Magic-lantern and theatrical tableau traditions", "Film catalogues, synopses and shot descriptions", "Paper-print copyright deposits", "Intertitles, lecturers and other narrative framing", "Remakes, replacement negatives and re-edited versions", "Editing conventions as historical practices"].map((label) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE" }));

const norm = (value) => String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
function matching(source, start, open, close) {
  let depth = 0, quote = null, escaped = false;
  for (let i = start; i < source.length; i += 1) {
    const c = source[i];
    if (quote) { if (escaped) escaped = false; else if (c === "\\") escaped = true; else if (c === quote) quote = null; continue; }
    if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
    if (c === open) depth += 1;
    if (c === close && --depth === 0) return i;
  }
  throw new Error(`Unclosed ${open} at ${start}`);
}
function objects(source) {
  const out = [];
  for (let i = 0; i < source.length;) {
    if (source[i] !== "{") { i += 1; continue; }
    const end = matching(source, i, "{", "}"); out.push(source.slice(i, end + 1)); i = end + 1;
  }
  return out;
}
const str = (obj, field) => JSON.parse(`"${obj.match(new RegExp(`\\b${field}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`))?.[1] ?? (() => { throw new Error(`Missing ${field}`); })()}"`);
const num = (obj, field) => Number(obj.match(new RegExp(`\\b${field}\\s*:\\s*(\\d+)`))?.[1] ?? (() => { throw new Error(`Missing ${field}`); })());
function aliases(obj) {
  const body = obj.match(/\baliases\s*:\s*\[([^\]]*)\]/)?.[1] ?? "";
  return [...body.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) => JSON.parse(`"${m[1]}"`));
}
function definitions(fileName) {
  const source = readFileSync(path.join(core, fileName), "utf8");
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Missing definitions in ${fileName}`);
  const start = source.indexOf("[", declaration.index), end = matching(source, start, "[", "]");
  return objects(source.slice(start + 1, end)).map((obj) => ({ id: str(obj, "id"), title: str(obj, "title"), originalTitle: str(obj, "originalTitle"), aliases: aliases(obj), year: num(obj, "year") }));
}
const titles = (item) => [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(norm);
const matches = (left, right) => left.id && right.id && left.id === right.id || left.year === right.year && titles(left).some((title) => new Set(titles(right)).has(title));
const same = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());

const seed = JSON.parse(readFileSync(path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json"), "utf8"));
const atlas = seed.scenarios.map((s) => ({ id: s.id, title: s.film.title, originalTitle: s.film.original_title, aliases: [], year: s.film.year, origin: "film_scenarios_seed.json" }));
const expansionSummary = [];
for (const fileName of expansionFiles) {
  let appended = 0, matchedExisting = 0;
  for (const definition of definitions(fileName)) {
    if (atlas.some((scenario) => matches(scenario, definition))) { matchedExisting += 1; continue; }
    atlas.push({ ...definition, origin: fileName }); appended += 1;
  }
  expansionSummary.push({ fileName, appended, matchedExisting });
}
const candidateResults = candidates.map((candidate) => {
  const found = atlas.filter((scenario) => matches(scenario, candidate));
  if (!found.length) return { ...candidate, decision: candidate.decisionIfMissing, scenarioId: null, matches: 0 };
  if (found.length > 1) return { ...candidate, decision: "AMBIGUOUS", scenarioId: null, matches: found.length };
  return { ...candidate, decision: "USE_EXISTING", scenarioId: found[0].id, matches: 1, origin: found[0].origin };
});
const byDecision = Object.fromEntries(["USE_EXISTING", "P0", "P1", "P2", "AMBIGUOUS"].map((decision) => [decision, candidateResults.filter((c) => c.decision === decision).map((c) => c.title)]));
const structuralProblems = [];
if (atlas.length !== EXPECTED_ATLAS_COUNT) structuralProblems.push(`Expected ${EXPECTED_ATLAS_COUNT} Atlas films, found ${atlas.length}`);
for (const result of candidateResults) {
  if (result.decision === "AMBIGUOUS") structuralProblems.push(`${result.title} matched ${result.matches} Atlas scenarios`);
  if (result.expectedScenarioId && result.scenarioId !== result.expectedScenarioId) structuralProblems.push(`${result.title} must resolve to ${result.expectedScenarioId}, found ${result.scenarioId ?? result.decision}`);
}
for (const [decision, expected] of Object.entries(expectedDecisions)) if (!same(byDecision[decision] ?? [], expected)) structuralProblems.push(`${decision} must equal ${expected.join(" | ")}; found ${(byDecision[decision] ?? []).join(" | ")}`);
const report = { schemaVersion: "1.4", auditDate: "2026-08-14", chapter: { number: 3, title: "From views to stories", period: "1896–1912", thesis: "Narrative cinema developed through historically specific organizations of viewpoint, space, causality and time rather than one inventor breakthrough." }, atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.length, expansionOrder: expansionSummary }, candidates: candidateResults, byDecision, historicalObjects, recommendedNewProductionCases: [...byDecision.P0, ...byDecision.P1], remainingBookReferenceOnlyFilms: byDecision.P2, structuralProblems };
console.log("HG_FILM_HISTORY_CHAPTER_THREE_ATLAS_AUDIT_START");
console.log(JSON.stringify(report, null, 2));
console.log("HG_FILM_HISTORY_CHAPTER_THREE_ATLAS_AUDIT_END");
if (structuralProblems.length) { console.error(`Film History Chapter 3 Atlas audit found ${structuralProblems.length} structural problem(s).`); process.exitCode = 1; }
