import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { presentVerifiedFilmStatement } from "./productionCaseFilmStatementCopy.js";
import { CANONICAL_SHINING_STATEMENTS, SHINING_PRODUCTION_STATEMENT_ROWS } from "./productionCaseShiningStatements.js";

const id = "scenario_the_shining_1980";
const source = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");

test("The Shining 22 source statements stay in their canonical order", () => {
  const start = source.indexOf(`  ${id}: {`);
  const end = source.indexOf("\n  },", start);
  assert.ok(start >= 0 && end > start);
  const section = source.slice(start, end);
  const logline = section.match(/logline: ("[^"]+")/);
  assert.ok(logline?.[1]);
  const fields = ["genreTargets", "toneTargets", "screenplayTargets", "cinematographyTargets", "editingTargets", "soundTargets", "learningGoals"];
  const original = [JSON.parse(logline[1])];
  for (const field of fields) {
    const from = section.indexOf(`${field}: [`);
    assert.ok(from >= 0);
    const opening = section.indexOf("[", from);
    const closing = section.indexOf("]", opening);
    original.push(...JSON.parse(section.slice(opening, closing + 1)));
  }
  assert.equal(original.length, 22);
  assert.equal(new Set(original).size, 22);
  assert.deepEqual(original, [...CANONICAL_SHINING_STATEMENTS]);
  assert.equal(SHINING_PRODUCTION_STATEMENT_ROWS.length, 22);
  // The brief itself is not silently promoted to a new verification status.
  assert.match(section, /verificationStatus: "needs_research"/);
});

test("every exact canonical The Shining claim renders EN/NB/FR/PT", () => {
  for (const row of SHINING_PRODUCTION_STATEMENT_ROWS) {
    for (const language of FILMWORK_LANGUAGES) {
      const actual = presentVerifiedFilmStatement(language, "production_case", id, row[0]);
      const expected = row[language === "en" ? 0 : language === "nb" ? 1 : language === "fr" ? 2 : 3];
      assert.equal(actual, expected);
      assert.ok(actual.trim());
      if (language !== "en") assert.notEqual(actual, row[0]);
    }
  }
});

test("The Shining display-only copy fails closed for drift and unrelated films", () => {
  const text = "Use symmetry as unease";
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(language, "production_case", id, text + " revised"), text + " revised");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_the_400_blows_1959", text), text);
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", id, text), text);
  }
});
