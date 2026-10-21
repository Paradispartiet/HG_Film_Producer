import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getClassicFilmScenarios } from "../ui/data/filmScenarios.js";
import { resolveScenarioProductionBrief } from "../ui/data/scenarioProductionBriefs.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { presentFilmCaseContent, presentVerifiedFilmStatement } from "./productionCaseFilmStatementCopy.js";
import { presentSeedFallbackText } from "./productionCaseSeedPresentation.js";
import { CANONICAL_IDIOTS_STATEMENTS, IDIOTS_PRODUCTION_STATEMENT_ROWS } from "./productionCaseIdiotsStatements.js";

const id = "scenario_the_idiots_1998";
const source = readFileSync("src/core/chapterSeventeenTheIdiotsExpansion.ts", "utf8");
const scenario = getClassicFilmScenarios().find((item) => item.id === id);
if (!scenario) throw new Error("The Idiots scenario missing from catalogue");
const brief = resolveScenarioProductionBrief(scenario);

test("The Idiots retains its original seed fallback gameplay and source ID", () => {
  assert.equal(brief.scenarioId, id);
  assert.equal(brief.briefType, "seed_fallback");
  assert.equal(brief.verificationStatus, "seeded");
  assert.equal(brief.learningGoals.length, 18);
  assert.equal(brief.genreTargets.length, 2);
  assert.deepEqual(brief.genreTargets, ["Comedy", "Drama"]);
});

test("source-locked The Idiots has twenty unique film-specific presentation keys", () => {
  assert.equal(CANONICAL_IDIOTS_STATEMENTS.length, 20);
  assert.equal(new Set(CANONICAL_IDIOTS_STATEMENTS).size, 20);
  assert.deepEqual(CANONICAL_IDIOTS_STATEMENTS,
    [brief.logline, "Comedy", ...brief.learningGoals]);
  for (const text of CANONICAL_IDIOTS_STATEMENTS) {
    assert.ok(text === "Comedy" || source.includes(JSON.stringify(text)), `Source drift: ${text}`);
  }
});

test("all 31 active seeded brief strings display in all four languages without changing source", () => {
  const actual = [
    brief.logline, ...brief.genreTargets, ...brief.toneTargets, ...brief.screenplayTargets,
    ...brief.cinematographyTargets, ...brief.editingTargets, ...brief.soundTargets, ...brief.learningGoals,
  ];
  assert.equal(actual.length, 31);
  const known = new Map(IDIOTS_PRODUCTION_STATEMENT_ROWS.map((row) => [row[0], row]));
  for (const value of actual) {
    for (const lang of FILMWORK_LANGUAGES) {
      const translated = presentFilmCaseContent(lang, brief.briefType, id, value);
      const expected = known.get(value)?.[lang === "en" ? 0 : lang === "nb" ? 1 : lang === "fr" ? 2 : 3]
        ?? presentSeedFallbackText(lang, "seed_fallback", value);
      assert.equal(translated, expected);
      assert.ok(translated.trim());
      if (lang !== "en") assert.notEqual(translated, value, `Untranslated seeded statement ${lang}: ${value}`);
    }
  }
});

test("unknown source claims, different cases and original grading stay unchanged", () => {
  const claim = CANONICAL_IDIOTS_STATEMENTS[0];
  assert.ok(claim);
  for (const lang of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(lang, "seed_fallback", id, claim), claim);
    assert.equal(presentFilmCaseContent(lang, "seed_fallback", id, claim + " changed"), claim + " changed");
    assert.equal(presentFilmCaseContent(lang, "seed_fallback", "scenario_the_celebration_1998", claim), claim);
    assert.equal(presentFilmCaseContent(lang, "production_case", id, claim), claim);
  }
});
