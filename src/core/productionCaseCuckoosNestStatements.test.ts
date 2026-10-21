import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { presentVerifiedFilmStatement } from "./productionCaseFilmStatementCopy.js";
import { CANONICAL_CUCKOOS_NEST_STATEMENTS, CUCKOOS_NEST_PRODUCTION_STATEMENT_ROWS } from "./productionCaseCuckoosNestStatements.js";

const id = "scenario_one_flew_over_the_cuckoo_s_nest_1975";
const source = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");

test("Cuckoo's Nest retains exactly 22 original canonical brief statements", () => {
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
  assert.deepEqual(original, [...CANONICAL_CUCKOOS_NEST_STATEMENTS]);
  assert.equal(CUCKOOS_NEST_PRODUCTION_STATEMENT_ROWS.length, 22);
  assert.match(section, /verificationStatus: "needs_research"/);
});

test("all Cuckoo's Nest translations preserve exact EN/NB/FR/PT source identity", () => {
  for (const row of CUCKOOS_NEST_PRODUCTION_STATEMENT_ROWS) {
    for (const language of FILMWORK_LANGUAGES) {
      const displayed = presentVerifiedFilmStatement(language, "production_case", id, row[0]);
      const expected = row[language === "en" ? 0 : language === "nb" ? 1 : language === "fr" ? 2 : 3];
      assert.equal(displayed, expected);
      assert.ok(displayed.trim());
      if (language !== "en") assert.notEqual(displayed, row[0]);
    }
  }
});

test("Cuckoo's Nest fails closed for changed and other-film statements", () => {
  const claim = "Track power through blocking";
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(language, "production_case", id, claim + " revised"), claim + " revised");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_the_shining_1980", claim), claim);
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", id, claim), claim);
  }
});
