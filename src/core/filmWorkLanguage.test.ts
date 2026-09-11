import assert from "node:assert/strict";
import test from "node:test";

import {
  FILMWORK_LANGUAGE_STORAGE_KEY,
  coerceFilmWorkLanguage,
  getFilmWorkHtmlLanguage,
  getFilmWorkIntlLocale,
  resolveFilmWorkLanguage,
} from "./filmWorkLanguage.js";

test("FilmWork language storage key is stable and isolated from course progress", () => {
  assert.equal(FILMWORK_LANGUAGE_STORAGE_KEY, "hg_filmwork_language_v1");
  assert.equal(FILMWORK_LANGUAGE_STORAGE_KEY.startsWith("hg_film_school_"), false);
});

test("language coercion normalizes supported Norwegian and English locale forms", () => {
  assert.equal(coerceFilmWorkLanguage("nb"), "nb");
  assert.equal(coerceFilmWorkLanguage("nb-NO"), "nb");
  assert.equal(coerceFilmWorkLanguage("no"), "nb");
  assert.equal(coerceFilmWorkLanguage("nn-NO"), "nb");
  assert.equal(coerceFilmWorkLanguage("en"), "en");
  assert.equal(coerceFilmWorkLanguage("en-US"), "en");
  assert.equal(coerceFilmWorkLanguage("de-DE"), undefined);
});

test("stored preference wins and browser language is only a fallback", () => {
  assert.equal(resolveFilmWorkLanguage("en", "nb-NO"), "en");
  assert.equal(resolveFilmWorkLanguage("nb", "en-US"), "nb");
  assert.equal(resolveFilmWorkLanguage(undefined, "nb-NO"), "nb");
  assert.equal(resolveFilmWorkLanguage(undefined, "en-US"), "en");
  assert.equal(resolveFilmWorkLanguage(undefined, "fr-FR"), "en");
});

test("language maps to explicit document and Intl locales", () => {
  assert.equal(getFilmWorkHtmlLanguage("nb"), "nb");
  assert.equal(getFilmWorkHtmlLanguage("en"), "en");
  assert.equal(getFilmWorkIntlLocale("nb"), "nb-NO");
  assert.equal(getFilmWorkIntlLocale("en"), "en-GB");
});
