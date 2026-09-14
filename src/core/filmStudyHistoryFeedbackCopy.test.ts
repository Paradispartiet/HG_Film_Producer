import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  SILENT_FOUNDATIONS_HISTORY_FEEDBACK,
  formatFilmStudyHistoryFeedback,
} from "./filmStudyHistoryFeedbackCopy.js";

const FEEDBACK_KEYS = ["match", "partial", "miss"] as const;

test("Silent Foundations history feedback covers the exact three canonical outcomes", () => {
  assert.deepEqual(Object.keys(SILENT_FOUNDATIONS_HISTORY_FEEDBACK).sort(), [...FEEDBACK_KEYS].sort());
});

test("English preserves every canonical Silent Foundations feedback string", () => {
  for (const key of FEEDBACK_KEYS) {
    const entry = SILENT_FOUNDATIONS_HISTORY_FEEDBACK[key];
    assert.equal(entry.en, entry.canonical, key);
    assert.equal(formatFilmStudyHistoryFeedback("en", entry.canonical), entry.canonical, key);
  }
});

test("NB, FR, and PT localize every Silent Foundations feedback outcome", () => {
  for (const language of ["nb", "fr", "pt"] as const) {
    for (const key of FEEDBACK_KEYS) {
      const entry = SILENT_FOUNDATIONS_HISTORY_FEEDBACK[key];
      assert.ok(entry[language].trim().length > 0, `${language}:${key}`);
      assert.notEqual(entry[language], entry.canonical, `${language}:${key}`);
      assert.equal(formatFilmStudyHistoryFeedback(language, entry.canonical), entry[language], `${language}:${key}`);
    }
  }
});

test("every FilmWork language resolves all known Silent Foundations feedback strings", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const key of FEEDBACK_KEYS) {
      const entry = SILENT_FOUNDATIONS_HISTORY_FEEDBACK[key];
      assert.ok(formatFilmStudyHistoryFeedback(language, entry.canonical).trim().length > 0, `${language}:${key}`);
    }
  }
});

test("feedback outside the Silent Foundations contract fails closed to canonical", () => {
  const unknown = "A future Film Study feedback string outside the localized contract.";
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(formatFilmStudyHistoryFeedback(language, unknown), unknown, language);
  }
});
