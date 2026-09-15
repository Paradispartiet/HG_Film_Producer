import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK,
  CZECHOSLOVAK_NEW_WAVE_HISTORY_FEEDBACK,
  EUROPEAN_POLITICAL_FEMINIST_MODERNISM_HISTORY_FEEDBACK,
  EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK,
  LATE_SILENT_EARLY_SOUND_HISTORY_FEEDBACK,
  NOIR_REALISM_1940S_HISTORY_FEEDBACK,
  POSTWAR_EUROPEAN_MODERNISM_HISTORY_FEEDBACK,
  PRODUCTION_SYSTEMS_1930S_HISTORY_FEEDBACK,
  SILENT_FOUNDATIONS_HISTORY_FEEDBACK,
  SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK,
  formatFilmStudyHistoryFeedback,
} from "./filmStudyHistoryFeedbackCopy.js";

const FEEDBACK_KEYS = ["match", "partial", "miss"] as const;
const FEEDBACK_CONTRACTS = [
  ["Silent Foundations", SILENT_FOUNDATIONS_HISTORY_FEEDBACK],
  ["Silent Studio Systems", SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK],
  ["Late Silent / Early Sound", LATE_SILENT_EARLY_SOUND_HISTORY_FEEDBACK],
  ["1930s Production Systems", PRODUCTION_SYSTEMS_1930S_HISTORY_FEEDBACK],
  ["1940s Noir / Realism", NOIR_REALISM_1940S_HISTORY_FEEDBACK],
  ["1950s Asian Postwar", ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK],
  ["Postwar European Modernism", POSTWAR_EUROPEAN_MODERNISM_HISTORY_FEEDBACK],
  ["Czechoslovak New Wave", CZECHOSLOVAK_NEW_WAVE_HISTORY_FEEDBACK],
  ["European Political / Feminist Modernism", EUROPEAN_POLITICAL_FEMINIST_MODERNISM_HISTORY_FEEDBACK],
  ["European Religious / Moral Modernism", EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK],
] as const;

test("localized Film Study history feedback contracts cover the exact three canonical outcomes", () => {
  for (const [label, contract] of FEEDBACK_CONTRACTS) {
    assert.deepEqual(Object.keys(contract).sort(), [...FEEDBACK_KEYS].sort(), label);
  }
});

test("1930s Production Systems reuses the existing identical miss feedback contract", () => {
  assert.strictEqual(PRODUCTION_SYSTEMS_1930S_HISTORY_FEEDBACK.miss, SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK.miss);
});

test("Postwar European Modernism reuses the existing identical postwar miss feedback contract", () => {
  assert.strictEqual(POSTWAR_EUROPEAN_MODERNISM_HISTORY_FEEDBACK.miss, ASIAN_POSTWAR_1950S_HISTORY_FEEDBACK.miss);
});

test("English preserves every canonical localized Film Study history feedback string", () => {
  for (const [label, contract] of FEEDBACK_CONTRACTS) {
    for (const key of FEEDBACK_KEYS) {
      const entry = contract[key];
      assert.equal(entry.en, entry.canonical, `${label}:${key}`);
      assert.equal(formatFilmStudyHistoryFeedback("en", entry.canonical), entry.canonical, `${label}:${key}`);
    }
  }
});

test("NB, FR, and PT localize every known Film Study history feedback outcome", () => {
  for (const language of ["nb", "fr", "pt"] as const) {
    for (const [label, contract] of FEEDBACK_CONTRACTS) {
      for (const key of FEEDBACK_KEYS) {
        const entry = contract[key];
        assert.ok(entry[language].trim().length > 0, `${language}:${label}:${key}`);
        assert.notEqual(entry[language], entry.canonical, `${language}:${label}:${key}`);
        assert.equal(formatFilmStudyHistoryFeedback(language, entry.canonical), entry[language], `${language}:${label}:${key}`);
      }
    }
  }
});

test("every FilmWork language resolves all known localized Film Study history feedback strings", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const [label, contract] of FEEDBACK_CONTRACTS) {
      for (const key of FEEDBACK_KEYS) {
        const entry = contract[key];
        assert.ok(formatFilmStudyHistoryFeedback(language, entry.canonical).trim().length > 0, `${language}:${label}:${key}`);
      }
    }
  }
});

test("feedback outside the localized Film Study history contract fails closed to canonical", () => {
  const unknown = "A future Film Study feedback string outside the localized contract.";
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(formatFilmStudyHistoryFeedback(language, unknown), unknown, language);
  }
});
