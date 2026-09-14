import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  PRODUCTION_CASE_BRIEF_COPY,
  PRODUCTION_CASE_BRIEF_SECTION_KEYS,
  formatProductionCaseBriefTitle,
  getProductionCaseBriefIntro,
  getProductionCaseVerificationLabel,
} from "./productionCaseBriefCopy.js";

test("Production Case brief copy covers all FilmWork languages", () => {
  assert.deepEqual(Object.keys(PRODUCTION_CASE_BRIEF_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every localized brief surface covers the same seven stable section keys", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(PRODUCTION_CASE_BRIEF_COPY[language].sections).sort(), [...PRODUCTION_CASE_BRIEF_SECTION_KEYS].sort(), language);
    for (const key of PRODUCTION_CASE_BRIEF_SECTION_KEYS) {
      assert.ok(PRODUCTION_CASE_BRIEF_COPY[language].sections[key].trim().length > 0, `${language}:${key}`);
    }
  }
});

test("production brief title localization is presentation-only and fails closed for unknown title shapes", () => {
  const canonical = "The Test Film production brief";
  assert.equal(formatProductionCaseBriefTitle("en", canonical), canonical);
  assert.equal(formatProductionCaseBriefTitle("nb", canonical), "The Test Film · produksjonsbrief");
  assert.equal(formatProductionCaseBriefTitle("fr", canonical), "The Test Film · brief de production");
  assert.equal(formatProductionCaseBriefTitle("pt", canonical), "The Test Film · brief de produção");
  assert.equal(formatProductionCaseBriefTitle("nb", "Editorial title without suffix"), "Editorial title without suffix");
});

test("brief intro keeps the film title while fallback copy stays independent of corpus text", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const productionCase = getProductionCaseBriefIntro(language, "production_case", "Film X");
    const fallback = getProductionCaseBriefIntro(language, "seed_fallback", "Film X");
    assert.ok(productionCase.includes("Film X"), `${language}:production-case-title`);
    assert.ok(fallback.trim().length > 0, `${language}:fallback`);
    assert.notEqual(productionCase, fallback, `${language}:distinct-intro`);
  }
});

test("verification and learning-status chrome is keyed by stable canonical states", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.ok(getProductionCaseVerificationLabel(language, "seeded"));
    assert.ok(getProductionCaseVerificationLabel(language, "needs_research"));
    assert.ok(getProductionCaseVerificationLabel(language, "verified"));
    assert.deepEqual(Object.keys(PRODUCTION_CASE_BRIEF_COPY[language].flow.learningStatus).sort(), ["completed", "in_progress", "not_started"]);
  }
});

test("dynamic chrome preserves counts, mission titles, and verification dates", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const flow = PRODUCTION_CASE_BRIEF_COPY[language].flow;
    assert.match(flow.phasesComplete(2, 6), /2.*6/);
    assert.match(flow.phasesStudied(6, 6), /6.*6/);
    assert.match(flow.clearlyIdentified(4), /4/);
    assert.match(flow.worthComparingAgain(2), /2/);
    assert.ok(flow.chooseExplanationAriaLabel("Visual system").includes("Visual system"));
    assert.ok(flow.verifiedAt("2026-09-14").includes("2026-09-14"));
  }
});
