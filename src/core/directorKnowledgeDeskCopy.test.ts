import assert from "node:assert/strict";
import test from "node:test";

import {
  DIRECTOR_KNOWLEDGE_CATEGORIES,
  DIRECTOR_KNOWLEDGE_SOURCES,
} from "./directorKnowledge.js";
import { FILM_DIRECTOR_KNOWLEDGE_COPY } from "./directorKnowledgeDeskCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const stringKeys = [
  "launcherTitle",
  "launcherTerms",
  "deskAria",
  "kicker",
  "title",
  "description",
  "closeAria",
  "tabsAria",
  "workflowTab",
  "terminologyTab",
  "searchLabel",
  "searchPlaceholder",
  "categoryLabel",
  "allCategories",
  "phaseLabel",
  "allPhases",
  "reset",
  "results",
  "noResults",
  "selectTerm",
  "learned",
  "markLearned",
  "definition",
  "directorUse",
  "example",
  "evidence",
  "sourcesSummary",
  "sourcesDescription",
] as const;

test("Film Director knowledge desk copy covers all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_KNOWLEDGE_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact category and source keysets", () => {
  const categoryIds = DIRECTOR_KNOWLEDGE_CATEGORIES.map((item) => item.id).sort();
  const sourceIds = DIRECTOR_KNOWLEDGE_SOURCES.map((source) => source.id).sort();

  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_KNOWLEDGE_COPY[language];

    for (const key of stringKeys) assert.ok(copy[key].trim().length > 0, `${language}:${key}`);
    for (const value of Object.values(copy.stats)) assert.ok(value.trim().length > 0, `${language}:stats`);
    for (const value of Object.values(copy.phases)) assert.ok(value.trim().length > 0, `${language}:phases`);
    for (const value of Object.values(copy.levels)) assert.ok(value.trim().length > 0, `${language}:levels`);

    assert.deepEqual(Object.keys(copy.categories).sort(), categoryIds, `${language}:categories`);
    assert.deepEqual(Object.keys(copy.sourceScopes).sort(), sourceIds, `${language}:sourceScopes`);

    for (const categoryId of categoryIds) assert.ok(copy.categories[categoryId].trim().length > 0, `${language}:${categoryId}`);
    for (const sourceId of sourceIds) {
      const scope = copy.sourceScopes[sourceId];
      assert.ok(scope?.trim().length, `${language}:${sourceId}`);
    }
  }
});

test("NB display preserves canonical category labels and source scopes", () => {
  const copy = FILM_DIRECTOR_KNOWLEDGE_COPY.nb;
  for (const category of DIRECTOR_KNOWLEDGE_CATEGORIES) {
    assert.equal(copy.categories[category.id], category.label, `category:${category.id}`);
  }
  for (const source of DIRECTOR_KNOWLEDGE_SOURCES) {
    assert.equal(copy.sourceScopes[source.id], source.scope, `source:${source.id}`);
  }
});

test("EN, FR and PT localize terminology chrome without changing canonical IDs", () => {
  assert.deepEqual(
    [
      FILM_DIRECTOR_KNOWLEDGE_COPY.en.terminologyTab,
      FILM_DIRECTOR_KNOWLEDGE_COPY.en.categories.camera_lens,
      FILM_DIRECTOR_KNOWLEDGE_COPY.en.definition,
    ],
    ["Terminology", "Camera and lenses", "Definition"],
  );
  assert.deepEqual(
    [
      FILM_DIRECTOR_KNOWLEDGE_COPY.fr.terminologyTab,
      FILM_DIRECTOR_KNOWLEDGE_COPY.fr.categories.camera_lens,
      FILM_DIRECTOR_KNOWLEDGE_COPY.fr.definition,
    ],
    ["Terminologie", "Caméra et optiques", "Définition"],
  );
  assert.deepEqual(
    [
      FILM_DIRECTOR_KNOWLEDGE_COPY.pt.terminologyTab,
      FILM_DIRECTOR_KNOWLEDGE_COPY.pt.categories.camera_lens,
      FILM_DIRECTOR_KNOWLEDGE_COPY.pt.definition,
    ],
    ["Terminologia", "Câmara e objetivas", "Definição"],
  );

  for (const language of ["en", "fr", "pt"] as const) {
    assert.notEqual(FILM_DIRECTOR_KNOWLEDGE_COPY[language].title, FILM_DIRECTOR_KNOWLEDGE_COPY.nb.title, `${language}:title`);
    assert.notEqual(FILM_DIRECTOR_KNOWLEDGE_COPY[language].searchLabel, FILM_DIRECTOR_KNOWLEDGE_COPY.nb.searchLabel, `${language}:searchLabel`);
    assert.notEqual(FILM_DIRECTOR_KNOWLEDGE_COPY[language].sourceScopes["dga-process"], FILM_DIRECTOR_KNOWLEDGE_COPY.nb.sourceScopes["dga-process"], `${language}:source`);
  }
});
