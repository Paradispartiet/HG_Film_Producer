import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { presentFilmCaseContent, presentVerifiedFilmStatement } from "./productionCaseFilmStatementCopy.js";
import { presentSeedFallbackText } from "./productionCaseSeedPresentation.js";
import { CANONICAL_IDIOTS_STATEMENTS, IDIOTS_PRODUCTION_STATEMENT_ROWS } from "./productionCaseIdiotsStatements.js";

const id = "scenario_the_idiots_1998";
const source = readFileSync("src/core/chapterSeventeenTheIdiotsExpansion.ts", "utf8");
const fallbackSource = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");
const matchPremise = source.match(/premise: ("(?:[^"\\]|\\.)*"),/);
const matchGoals = source.match(/learningGoals: \[([\s\S]*?)\],\n\s*phases: \[/);
if (!matchPremise || !matchGoals) throw new Error("The Idiots canonical source fields missing");
const logline: string = JSON.parse(matchPremise[1]);
const learningGoals: string[] = [...matchGoals[1].matchAll(/"(?:[^"\\]|\\.)*"/g)].map((part) => JSON.parse(part[0]));
const genericSeedFields = [
  "Treat this as an imported seed pending film-specific design",
  "Keep choices readable",
  "Focus the central conflict",
  "Use the seeded learning goals as provisional guidance",
  "Choose spaces that support the conflict",
  "Frame the player task clearly",
  "Keep story turns legible",
  "Build rhythm around consequences",
  "Support tone without overexplaining",
  "Use silence and texture as pressure",
];
const canonical = [logline, "Comedy", "Drama", ...genericSeedFields, ...learningGoals];

test("The Idiots preserves source identity and the unchanged seeded brief fallback contract", () => {
  assert.match(source, /id: "scenario_the_idiots_1998"/);
  assert.match(source, /title: "The Idiots"/);
  assert.match(fallbackSource, /briefType: "seed_fallback"/);
  assert.match(fallbackSource, /verificationStatus: "seeded"/);
  assert.ok(fallbackSource.includes("getFallbackScenarioProductionBrief(scenario)"));
  assert.equal(learningGoals.length, 18);
  assert.equal(canonical.length, 31);
});

test("twenty exact film-specific translation keys are sourced and immutable", () => {
  assert.equal(CANONICAL_IDIOTS_STATEMENTS.length, 20);
  assert.equal(new Set(CANONICAL_IDIOTS_STATEMENTS).size, 20);
  assert.deepEqual([...CANONICAL_IDIOTS_STATEMENTS], [logline, "Comedy", ...learningGoals]);
  for (const text of CANONICAL_IDIOTS_STATEMENTS) {
    assert.ok(text === "Comedy" || source.includes(JSON.stringify(text)), `Source drift: ${text}`);
  }
});

test("all 31 original seeded text values display without leakage in the four supported languages", () => {
  const known: ReadonlyMap<string, readonly [string, string, string, string]> =
    new Map(IDIOTS_PRODUCTION_STATEMENT_ROWS.map((row) =>
      [row[0], row] as const));
  for (const value of canonical) for (const language of FILMWORK_LANGUAGES) {
    const translated = presentFilmCaseContent(language, "seed_fallback", id, value);
    const expected = known.get(value)?.[language === "en" ? 0 : language === "nb" ? 1 : language === "fr" ? 2 : 3]
      ?? presentSeedFallbackText(language, "seed_fallback", value);
    assert.equal(translated, expected);
    assert.ok(translated.trim());
    if (language !== "en") assert.notEqual(translated, value, `Untranslated seeded statement ${language}: ${value}`);
  }
});

test("The Idiots keeps canonical unknown, other-film and grading source claims", () => {
  const claim = CANONICAL_IDIOTS_STATEMENTS[0];
  assert.ok(claim);
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", id, claim), claim);
    assert.equal(presentFilmCaseContent(language, "seed_fallback", id, claim + " changed"), claim + " changed");
    assert.equal(presentFilmCaseContent(language, "seed_fallback", "scenario_the_celebration_1998", claim), claim);
    assert.equal(presentFilmCaseContent(language, "production_case", id, claim), claim);
  }
});
