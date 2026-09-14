import assert from "node:assert/strict";
import test from "node:test";

import {
  FILM_DIRECTOR_SHELL_COPY,
  FILM_DIRECTOR_SHELL_NAV_IDS,
} from "./filmDirectorShellCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const EXPECTED_NAV_IDS = ["home", "producer", "atlas", "director", "school", "history", "research"].sort();

test("Film Director shell copy covers all four FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_SHELL_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("Film Director shell navigation covers exactly the seven canonical sections", () => {
  assert.deepEqual([...FILM_DIRECTOR_SHELL_NAV_IDS].sort(), EXPECTED_NAV_IDS);
  for (const language of FILMWORK_LANGUAGES) {
    const labels = FILM_DIRECTOR_SHELL_COPY[language].navLabels;
    assert.deepEqual(Object.keys(labels).sort(), EXPECTED_NAV_IDS, `${language}:nav ids`);
    for (const id of FILM_DIRECTOR_SHELL_NAV_IDS) {
      assert.ok(labels[id].trim().length > 0, `${language}:${id}`);
    }
  }
});

test("FilmWork product navigation names remain canonical in every language", () => {
  const canonical = {
    producer: "Film Producer",
    atlas: "Film Atlas",
    director: "Film Director",
    school: "Film School",
    history: "Film History",
  } as const;
  for (const language of FILMWORK_LANGUAGES) {
    const labels = FILM_DIRECTOR_SHELL_COPY[language].navLabels;
    for (const id of Object.keys(canonical) as (keyof typeof canonical)[]) {
      assert.equal(labels[id], canonical[id], `${language}:${id}`);
    }
  }
});

test("every language provides non-empty shell chrome and error copy", () => {
  const keys = [
    "navAria",
    "noFilmsAvailable",
    "unknownFilmAddress",
    "filmNotFound",
    "noReferenceMatchesPrefix",
    "openDirector",
    "footerDetail",
  ] as const;
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_SHELL_COPY[language];
    for (const key of keys) assert.ok(copy[key].trim().length > 0, `${language}:${key}`);
  }
});

test("Film Director document title keeps canonical product naming", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_SHELL_COPY[language];
    assert.equal(copy.documentTitle(undefined), "Film Director · FilmWork", `${language}:empty title`);
    assert.equal(copy.documentTitle("Touki Bouki"), "Touki Bouki · Film Director · FilmWork", `${language}:film title`);
  }
});

test("NB, FR and PT localize the generic navigation labels", () => {
  assert.deepEqual(
    [FILM_DIRECTOR_SHELL_COPY.nb.navLabels.home, FILM_DIRECTOR_SHELL_COPY.nb.navLabels.research],
    ["Forside", "Forskning"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_SHELL_COPY.fr.navLabels.home, FILM_DIRECTOR_SHELL_COPY.fr.navLabels.research],
    ["Accueil", "Recherche"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_SHELL_COPY.pt.navLabels.home, FILM_DIRECTOR_SHELL_COPY.pt.navLabels.research],
    ["Início", "Investigação"],
  );
});
