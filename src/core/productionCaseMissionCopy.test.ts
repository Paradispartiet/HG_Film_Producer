import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  PRODUCTION_CASE_MISSION_PHASES,
  PRODUCTION_CASE_MISSION_UI_COPY,
  getProductionCaseChoiceFeedback,
  getProductionCaseMissionPresentation,
} from "./productionCaseMissionCopy.js";

test("Production Case mission copy covers every FilmWork language and all six stable phases", () => {
  assert.deepEqual(Object.keys(PRODUCTION_CASE_MISSION_UI_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
  assert.deepEqual(PRODUCTION_CASE_MISSION_PHASES, [
    "case_orientation",
    "screenplay",
    "cinematography",
    "editing",
    "sound",
    "reflection",
  ]);

  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(PRODUCTION_CASE_MISSION_UI_COPY[language].phases).sort(), [...PRODUCTION_CASE_MISSION_PHASES].sort());
    for (const phase of PRODUCTION_CASE_MISSION_PHASES) {
      const presentation = getProductionCaseMissionPresentation(language, phase, "Test Film");
      assert.ok(presentation.title.trim(), `${language}:${phase}:title`);
      assert.ok(presentation.prompt.trim(), `${language}:${phase}:prompt`);
      assert.ok(presentation.learningFocus.trim(), `${language}:${phase}:learningFocus`);
    }
  }
});

test("case orientation keeps the canonical film title while localizing the surrounding prompt", () => {
  const english = getProductionCaseMissionPresentation("en", "case_orientation", "Le Samouraï");
  const norwegian = getProductionCaseMissionPresentation("nb", "case_orientation", "Le Samouraï");
  const french = getProductionCaseMissionPresentation("fr", "case_orientation", "Le Samouraï");
  const portuguese = getProductionCaseMissionPresentation("pt", "case_orientation", "Le Samouraï");

  for (const presentation of [english, norwegian, french, portuguese]) {
    assert.ok(presentation.prompt.includes("Le Samouraï"));
  }
  assert.notEqual(norwegian.prompt, english.prompt);
  assert.notEqual(french.prompt, english.prompt);
  assert.notEqual(portuguese.prompt, english.prompt);
});

test("all six mission presentations are language-specific without changing their phase identities", () => {
  for (const phase of PRODUCTION_CASE_MISSION_PHASES) {
    const english = getProductionCaseMissionPresentation("en", phase, "Test Film");
    for (const language of ["nb", "fr", "pt"] as const) {
      const localized = getProductionCaseMissionPresentation(language, phase, "Test Film");
      assert.notEqual(localized.title, english.title, `${language}:${phase}:title`);
      assert.notEqual(localized.prompt, english.prompt, `${language}:${phase}:prompt`);
      assert.notEqual(localized.learningFocus, english.learningFocus, `${language}:${phase}:learningFocus`);
    }
  }
});

test("phase labels are localized independently of mission ids and progress semantics", () => {
  assert.equal(PRODUCTION_CASE_MISSION_UI_COPY.en.currentPhase, "Current phase");
  assert.equal(PRODUCTION_CASE_MISSION_UI_COPY.nb.currentPhase, "Aktiv fase");
  assert.equal(PRODUCTION_CASE_MISSION_UI_COPY.fr.currentPhase, "Phase en cours");
  assert.equal(PRODUCTION_CASE_MISSION_UI_COPY.pt.currentPhase, "Fase atual");
  assert.notEqual(PRODUCTION_CASE_MISSION_UI_COPY.nb.completePhase, PRODUCTION_CASE_MISSION_UI_COPY.en.completePhase);
  assert.notEqual(PRODUCTION_CASE_MISSION_UI_COPY.fr.undoComplete, PRODUCTION_CASE_MISSION_UI_COPY.en.undoComplete);
  assert.notEqual(PRODUCTION_CASE_MISSION_UI_COPY.pt.learningLabel, PRODUCTION_CASE_MISSION_UI_COPY.en.learningLabel);
});

test("choice feedback localizes generated copy while preserving donor film titles and canonical quality", () => {
  const partial = "Close in craft — but this is how The Third Man solves this phase, not this film.";
  const miss = "That is The Third Man's answer — a different production logic than this case.";

  assert.equal(getProductionCaseChoiceFeedback("en", "match", "Matches the case"), "Matches the case");
  assert.equal(getProductionCaseChoiceFeedback("nb", "match", "Matches the case"), "Passer til caset");
  assert.ok(getProductionCaseChoiceFeedback("fr", "partial", partial).includes("The Third Man"));
  assert.ok(getProductionCaseChoiceFeedback("pt", "miss", miss).includes("The Third Man"));
  assert.notEqual(getProductionCaseChoiceFeedback("fr", "partial", partial), partial);
  assert.notEqual(getProductionCaseChoiceFeedback("pt", "miss", miss), miss);
});

test("unexpected generated feedback fails closed to canonical text", () => {
  const unexpectedPartial = "Editorially revised partial feedback";
  const unexpectedMiss = "Editorially revised miss feedback";
  assert.equal(getProductionCaseChoiceFeedback("nb", "partial", unexpectedPartial), unexpectedPartial);
  assert.equal(getProductionCaseChoiceFeedback("fr", "miss", unexpectedMiss), unexpectedMiss);
});
