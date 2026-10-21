import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { presentVerifiedFilmStatement } from "./productionCaseFilmStatementCopy.js";
import { CANONICAL_FESTEN_STATEMENTS, FESTEN_PRODUCTION_STATEMENT_ROWS } from "./productionCaseFestenStatements.js";

const id = "scenario_the_celebration_1998";
const source = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");

test("Festen retains its 22 exact original production-brief statements", () => {
  const start = source.indexOf(`  ${id}: {`);
  const end = source.indexOf("\n  },", start);
  assert.ok(start >= 0 && end > start);
  const section = source.slice(start, end);
  const logline = section.match(/logline: ("[^"]+")/);
  assert.ok(logline?.[1]);
  const fields = ["genreTargets", "toneTargets", "screenplayTargets", "cinematographyTargets", "editingTargets", "soundTargets", "learningGoals"];
  const canonical = [JSON.parse(logline[1])];
  for (const field of fields) {
    const from = section.indexOf(`${field}: [`);
    assert.ok(from >= 0, field);
    const opening = section.indexOf("[", from);
    const closing = section.indexOf("]", opening);
    canonical.push(...JSON.parse(section.slice(opening, closing + 1)));
  }
  assert.equal(canonical.length, 22);
  assert.equal(new Set(canonical).size, 22);
  assert.deepEqual(canonical, [...CANONICAL_FESTEN_STATEMENTS]);
  assert.equal(FESTEN_PRODUCTION_STATEMENT_ROWS.length, 22);
  assert.match(section, /verificationStatus: "needs_research"/);
});

test("Festen: all 22 canonical brief statements display in EN/NB/FR/PT", () => {
  for (const row of FESTEN_PRODUCTION_STATEMENT_ROWS) {
    for (const language of FILMWORK_LANGUAGES) {
      const actual = presentVerifiedFilmStatement(language, "production_case", id, row[0]);
      const expected = row[language === "en" ? 0 : language === "nb" ? 1 : language === "fr" ? 2 : 3];
      assert.equal(actual, expected);
      assert.ok(actual.trim());
      if (language !== "en") assert.notEqual(actual, row[0]);
    }
  }
});

test("Festen: unreviewed claims, seed fallback and other films remain canonical", () => {
  const claim = "Use handheld immediacy";
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(language, "production_case", id, claim + " revised"), claim + " revised");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_the_shining_1980", claim), claim);
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", id, claim), claim);
  }
});
