import assert from "node:assert/strict";
import test from "node:test";

import {
  FILM_DIRECTOR_PROJECT_COPY,
  formatFilmDirectorProjectSavedTime,
} from "./filmDirectorProjectCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

test("Film Director project chrome copy covers all four FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_PROJECT_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language provides non-empty project chrome copy", () => {
  const keys = [
    "heroKicker",
    "heroDescription",
    "projectProgress",
    "referenceFilm",
    "openFilmAnalysis",
    "clearProject",
    "projectCopied",
    "copyFailed",
    "copyCompleteProject",
    "savedOnThisDevice",
    "lastProjectChange",
    "scenesInProject",
    "shotCardsPlanned",
    "decisionsDefined",
    "notRecorded",
  ] as const;
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_PROJECT_COPY[language];
    for (const key of keys) assert.ok(copy[key].trim().length > 0, `${language}:${key}`);
    assert.ok(copy.progressAria(73).includes("73"), `${language}:progressAria`);
    assert.ok(copy.sceneShotCount(2, 3).includes("2"), `${language}:sceneShotCount scenes`);
    assert.ok(copy.sceneShotCount(2, 3).includes("3"), `${language}:sceneShotCount shots`);
  }
});

test("project reset confirmation preserves canonical Film Director naming", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const confirmation = FILM_DIRECTOR_PROJECT_COPY[language].clearProjectConfirm("Persona");
    assert.ok(confirmation.includes("Film Director"), `${language}:product name`);
    assert.ok(confirmation.includes("Persona"), `${language}:film title`);
  }
});

test("NB, FR and PT localize the upper project chrome", () => {
  assert.deepEqual(
    [FILM_DIRECTOR_PROJECT_COPY.nb.referenceFilm, FILM_DIRECTOR_PROJECT_COPY.nb.projectProgress, FILM_DIRECTOR_PROJECT_COPY.nb.clearProject],
    ["Referansefilm", "Prosjektfremdrift", "Tøm prosjekt"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_PROJECT_COPY.fr.referenceFilm, FILM_DIRECTOR_PROJECT_COPY.fr.projectProgress, FILM_DIRECTOR_PROJECT_COPY.fr.clearProject],
    ["Film de référence", "Avancement du projet", "Effacer le projet"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_PROJECT_COPY.pt.referenceFilm, FILM_DIRECTOR_PROJECT_COPY.pt.projectProgress, FILM_DIRECTOR_PROJECT_COPY.pt.clearProject],
    ["Filme de referência", "Progresso do projeto", "Limpar projeto"],
  );
});

test("scene and shot counts use language-aware singular and plural labels", () => {
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.en.sceneShotCount(1, 2), "1 scene · 2 shots");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.nb.sceneShotCount(1, 2), "1 scene · 2 innstillinger");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.fr.sceneShotCount(2, 1), "2 scènes · 1 plan");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.pt.sceneShotCount(2, 2), "2 cenas · 2 planos");
});

test("saved time uses the FilmWork locale and falls back deterministically", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(formatFilmDirectorProjectSavedTime(language, "not-a-date"), FILM_DIRECTOR_PROJECT_COPY[language].notRecorded, `${language}:fallback`);
    const formatted = formatFilmDirectorProjectSavedTime(language, "2026-09-14T06:53:30.000Z");
    assert.notEqual(formatted, FILM_DIRECTOR_PROJECT_COPY[language].notRecorded, `${language}:valid timestamp`);
    assert.ok(formatted.includes("2026"), `${language}:year`);
  }
});
