import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  CANONICAL_12_ANGRY_MEN_STATEMENTS,
  presentVerifiedFilmStatement,
} from "./productionCaseFilmStatementCopy.js";

const scenarioId = "scenario_12_angry_men_1957";
const expectedStatements = [
  "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.",
  "Chamber drama", "Jury-room conflict", "Ensemble debate",
  "Claustrophobic", "Combative", "Increasingly doubtful",
  "Build tension through argument", "Let doubt shift alliances", "Turn evidence into character conflict",
  "Use one-room blocking", "Track power through positions", "Tighten faces as pressure rises",
  "Shape dialogue rhythm", "Cut on argument turns", "Hold reactions after challenges",
  "Make voices the engine", "Use room tone as heat", "Let silence follow key doubts",
  "Sustain drama without spectacle", "Use blocking as persuasion", "Escalate through performance",
] as const;

test("12 Angry Men source-specific statement list matches the existing 22 canonical claims", () => {
  assert.deepEqual(CANONICAL_12_ANGRY_MEN_STATEMENTS, expectedStatements);
  assert.equal(new Set(CANONICAL_12_ANGRY_MEN_STATEMENTS).size, 22);
});

test("each canonical statement has a checked presentation in EN NB FR PT", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const canonical of expectedStatements) {
      const presented = presentVerifiedFilmStatement(language, "production_case", scenarioId, canonical);
      assert.ok(presented.trim(), language);
      if (language === "en") assert.equal(presented, canonical);
      else assert.notEqual(presented, canonical, `${language}: ${canonical}`);
    }
  }
});

test("Norwegian French and Portuguese preserve documentary meaning in sample claims", () => {
  assert.equal(presentVerifiedFilmStatement("nb", "production_case", scenarioId, "Use one-room blocking"), "Bruk plassering og bevegelser i ett rom");
  assert.equal(presentVerifiedFilmStatement("fr", "production_case", scenarioId, "Let doubt shift alliances"), "Laissez le doute modifier les alliances");
  assert.equal(presentVerifiedFilmStatement("pt", "production_case", scenarioId, "Make voices the engine"), "Faça das vozes o motor da ação");
});

test("unknown, seed and unrelated claims always fail closed to exact authored text", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const raw = "An editorially updated note on Sidney Lumet's camera choices.";
    assert.equal(presentVerifiedFilmStatement(language, "production_case", scenarioId, raw), raw);
    assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_the_machinist_2004", "Chamber drama"), "Chamber drama");
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", scenarioId, "Chamber drama"), "Chamber drama");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", scenarioId, "12 Angry Men"), "12 Angry Men");
  }
});
