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

test("language coercion normalizes supported English, Norwegian, French and Portuguese locale forms", () => {
  assert.equal(coerceFilmWorkLanguage("nb"), "nb");
  assert.equal(coerceFilmWorkLanguage("nb-NO"), "nb");
  assert.equal(coerceFilmWorkLanguage("no"), "nb");
  assert.equal(coerceFilmWorkLanguage("nn-NO"), "nb");
  assert.equal(coerceFilmWorkLanguage("en"), "en");
  assert.equal(coerceFilmWorkLanguage("en-US"), "en");
  assert.equal(coerceFilmWorkLanguage("fr"), "fr");
  assert.equal(coerceFilmWorkLanguage("fr-CA"), "fr");
  assert.equal(coerceFilmWorkLanguage("pt"), "pt");
  assert.equal(coerceFilmWorkLanguage("pt-BR"), "pt");
  assert.equal(coerceFilmWorkLanguage("pt-PT"), "pt");
  assert.equal(coerceFilmWorkLanguage("de-DE"), undefined);
});

test("stored preference wins and browser language is only a fallback", () => {
  assert.equal(resolveFilmWorkLanguage("en", "nb-NO"), "en");
  assert.equal(resolveFilmWorkLanguage("nb", "en-US"), "nb");
  assert.equal(resolveFilmWorkLanguage("fr", "en-US"), "fr");
  assert.equal(resolveFilmWorkLanguage("pt", "fr-FR"), "pt");
  assert.equal(resolveFilmWorkLanguage(undefined, "nb-NO"), "nb");
  assert.equal(resolveFilmWorkLanguage(undefined, "en-US"), "en");
  assert.equal(resolveFilmWorkLanguage(undefined, "fr-FR"), "fr");
  assert.equal(resolveFilmWorkLanguage(undefined, "pt-BR"), "pt");
  assert.equal(resolveFilmWorkLanguage(undefined, "de-DE"), "en");
});

test("language maps to explicit document and Intl locales", () => {
  assert.equal(getFilmWorkHtmlLanguage("en"), "en");
  assert.equal(getFilmWorkHtmlLanguage("nb"), "nb");
  assert.equal(getFilmWorkHtmlLanguage("fr"), "fr");
  assert.equal(getFilmWorkHtmlLanguage("pt"), "pt");
  assert.equal(getFilmWorkIntlLocale("en"), "en-GB");
  assert.equal(getFilmWorkIntlLocale("nb"), "nb-NO");
  assert.equal(getFilmWorkIntlLocale("fr"), "fr-FR");
  assert.equal(getFilmWorkIntlLocale("pt"), "pt-PT");
});
