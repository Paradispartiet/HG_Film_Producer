import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { presentVerifiedFilmStatement } from "./productionCaseFilmStatementCopy.js";
import { CANONICAL_BREATHLESS_STATEMENTS, BREATHLESS_PRODUCTION_STATEMENT_ROWS } from "./productionCaseBreathlessStatements.js";
const briefSource = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");

const id = "scenario_breathless_1960";

test("Breathless has 22 immutable canonical brief claims in the source order", () => {
  const start = briefSource.indexOf(`  ${id}: {`);
  const end = briefSource.indexOf("\n  },", start);
  assert.ok(start > 0 && end > start, "Missing canonical Breathless brief");
  const section = briefSource.slice(start, end);
  const logline = section.match(/logline: ("[^"]+")/);
  assert.ok(logline?.[1], "Missing canonical logline");
  const fieldNames = [
    "genreTargets", "toneTargets", "screenplayTargets", "cinematographyTargets",
    "editingTargets", "soundTargets", "learningGoals",
  ];
  const actual = [JSON.parse(logline[1])];
  for (const field of fieldNames) {
    const startOfField = section.indexOf(`${field}: [`);
    assert.ok(startOfField > 0, `Missing field: ${field}`);
    const arrayStart = section.indexOf("[", startOfField);
    const arrayEnd = section.indexOf("]", arrayStart);
    actual.push(...JSON.parse(section.slice(arrayStart, arrayEnd + 1)));
  }

  assert.equal(actual.length, 22);
  assert.equal(new Set(actual).size, 22);
  assert.deepEqual(actual, [...CANONICAL_BREATHLESS_STATEMENTS]);
  assert.equal(BREATHLESS_PRODUCTION_STATEMENT_ROWS.length, 22);
  // Localizing the case does not silently upgrade editorial verification.
  assert.match(section, /verificationStatus: "needs_research"/);
});

test("all Breathless brief claims have faithful exact-match EN/NB/FR/PT presentations", () => {
  for (const row of BREATHLESS_PRODUCTION_STATEMENT_ROWS) {
    for (const language of FILMWORK_LANGUAGES) {
      const translated = presentVerifiedFilmStatement(language, "production_case", id, row[0]);
      const expected = row[language === "en" ? 0 : language === "nb" ? 1 : language === "fr" ? 2 : 3];
      assert.equal(translated, expected);
      assert.ok(translated.trim());
      if (language !== "en") assert.notEqual(translated, row[0], language);
    }
  }
});

test("Breathless translations fail closed for revised claims, other films and seed briefs", () => {
  const claim = "Make editing feel restless";
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(language, "production_case", id, claim + " (revised)"), claim + " (revised)");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_bicycle_thieves_1948", claim), claim);
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", id, claim), claim);
  }
});
