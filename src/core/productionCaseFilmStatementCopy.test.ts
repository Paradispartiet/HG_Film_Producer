import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  CANONICAL_12_ANGRY_MEN_STATEMENTS,
  CANONICAL_LOST_IN_TRANSLATION_STATEMENTS,
  CANONICAL_BICYCLE_THIEVES_STATEMENTS,
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

const lostInTranslationScenarioId = "scenario_lost_in_translation_2003";
const lostBriefSource = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");

test("Lost in Translation translations cover exactly 22 source-verified original claims", () => {
  const start = lostBriefSource.indexOf("  scenario_lost_in_translation_2003: {");
  const end = lostBriefSource.indexOf("\n  },", start);
  assert.ok(start > 0 && end > start);
  const canonicalSource = lostBriefSource.slice(start, end);
  assert.equal(CANONICAL_LOST_IN_TRANSLATION_STATEMENTS.length, 22);
  assert.equal(new Set(CANONICAL_LOST_IN_TRANSLATION_STATEMENTS).size, 22);
  for (const original of CANONICAL_LOST_IN_TRANSLATION_STATEMENTS) {
    assert.ok(canonicalSource.includes(JSON.stringify(original)), `Canonical brief drifted: ${original}`);
    for (const language of FILMWORK_LANGUAGES) {
      const translated = presentVerifiedFilmStatement(language, "production_case", lostInTranslationScenarioId, original);
      assert.ok(translated.trim());
      if (language === "en") assert.equal(translated, original);
      else assert.notEqual(translated, original, `${language}: ${original}`);
    }
  }
});

test("Lost in Translation translation only affects its exact original film statements", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", lostInTranslationScenarioId, "Romantic melancholy"), "Romantic melancholy");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_other_film_2003", "Romantic melancholy"), "Romantic melancholy");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", lostInTranslationScenarioId, "Unknown revised source claim"), "Unknown revised source claim");
  }
});

const bicycleScenarioId = "scenario_bicycle_thieves_1948";

test("Bicycle Thieves source brief has 22 positions and exactly 21 unique, source-locked translated statements", () => {
  const start = lostBriefSource.indexOf("  scenario_bicycle_thieves_1948: {");
  const end = lostBriefSource.indexOf("\n  },", start);
  assert.ok(start >= 0 && end > start, "Bicycle Thieves source section is missing");
  const section = lostBriefSource.slice(start, end);
  assert.equal(CANONICAL_BICYCLE_THIEVES_STATEMENTS.length, 21);
  assert.equal(new Set(CANONICAL_BICYCLE_THIEVES_STATEMENTS).size, 21);
  for (const original of CANONICAL_BICYCLE_THIEVES_STATEMENTS) {
    assert.ok(section.includes(JSON.stringify(original)), `Canonical Bicycle Thieves brief claim drifted: ${original}`);
    for (const language of FILMWORK_LANGUAGES) {
      const presented = presentVerifiedFilmStatement(language, "production_case", bicycleScenarioId, original);
      assert.ok(presented.trim());
      if (language === "en") assert.equal(presented, original);
      else assert.notEqual(presented, original, `${language}: ${original}`);
    }
  }
  const repeated = "Make one object carry a life";
  assert.equal(section.split(JSON.stringify(repeated)).length - 1, 2, "Expected one repeated learning goal among 22 positions");
});

test("Bicycle Thieves presentation stays separate from canonical seed and unrelated film statements", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentVerifiedFilmStatement(language, "seed_fallback", bicycleScenarioId, "Social realist drama"), "Social realist drama");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", "scenario_other_film_1948", "Social realist drama"), "Social realist drama");
    assert.equal(presentVerifiedFilmStatement(language, "production_case", bicycleScenarioId, "Updated source claim"), "Updated source claim");
  }
});
