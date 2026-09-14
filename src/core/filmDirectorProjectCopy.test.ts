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
    "projectScenes",
    "addScene",
    "duplicateScene",
    "deleteScene",
    "sceneAutosaveNote",
    "sceneCopied",
    "copyActiveScene",
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
    assert.ok(copy.sceneTitleFallback(4).includes("4"), `${language}:sceneTitleFallback`);
    assert.ok(copy.sceneCardSummary(6, 16, 2).includes("6/16"), `${language}:sceneCardSummary decisions`);
    assert.ok(copy.sceneCardSummary(6, 16, 2).includes("2"), `${language}:sceneCardSummary shots`);
    assert.ok(copy.scenePosition(2, 5).includes("2"), `${language}:scenePosition current`);
    assert.ok(copy.scenePosition(2, 5).includes("5"), `${language}:scenePosition total`);
    assert.ok(copy.activeSceneSummary(7, 16, 3).includes("7/16"), `${language}:activeSceneSummary decisions`);
    assert.ok(copy.activeSceneSummary(7, 16, 3).includes("3"), `${language}:activeSceneSummary shots`);
  }
});

test("project reset confirmation preserves canonical Film Director naming", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const confirmation = FILM_DIRECTOR_PROJECT_COPY[language].clearProjectConfirm("Persona");
    assert.ok(confirmation.includes("Film Director"), `${language}:product name`);
    assert.ok(confirmation.includes("Persona"), `${language}:film title`);
  }
});

test("scene delete confirmation preserves explicit titles and localizes the untitled fallback", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.ok(FILM_DIRECTOR_PROJECT_COPY[language].deleteSceneConfirm("Kitchen scene").includes("Kitchen scene"), `${language}:scene title`);
  }
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.en.deleteSceneConfirm(""), "Delete this scene and all of its shot cards?");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.nb.deleteSceneConfirm(""), "Slette denne scenen og alle innstillingskortene?");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.fr.deleteSceneConfirm(""), "Supprimer cette scène et toutes ses fiches de plan ?");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.pt.deleteSceneConfirm(""), "Eliminar esta cena e todos os respetivos cartões de plano?");
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

test("NB, FR and PT localize the scene sidebar and active-scene heading", () => {
  assert.deepEqual(
    [FILM_DIRECTOR_PROJECT_COPY.nb.projectScenes, FILM_DIRECTOR_PROJECT_COPY.nb.addScene, FILM_DIRECTOR_PROJECT_COPY.nb.duplicateScene, FILM_DIRECTOR_PROJECT_COPY.nb.deleteScene, FILM_DIRECTOR_PROJECT_COPY.nb.copyActiveScene],
    ["Prosjektscener", "+ Legg til scene", "Dupliser scene", "Slett scene", "Kopier aktiv scene"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_PROJECT_COPY.fr.projectScenes, FILM_DIRECTOR_PROJECT_COPY.fr.addScene, FILM_DIRECTOR_PROJECT_COPY.fr.duplicateScene, FILM_DIRECTOR_PROJECT_COPY.fr.deleteScene, FILM_DIRECTOR_PROJECT_COPY.fr.copyActiveScene],
    ["Scènes du projet", "+ Ajouter une scène", "Dupliquer la scène", "Supprimer la scène", "Copier la scène active"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_PROJECT_COPY.pt.projectScenes, FILM_DIRECTOR_PROJECT_COPY.pt.addScene, FILM_DIRECTOR_PROJECT_COPY.pt.duplicateScene, FILM_DIRECTOR_PROJECT_COPY.pt.deleteScene, FILM_DIRECTOR_PROJECT_COPY.pt.copyActiveScene],
    ["Cenas do projeto", "+ Adicionar cena", "Duplicar cena", "Eliminar cena", "Copiar cena ativa"],
  );
});

test("scene titles, positions and shot counts use language-aware scene chrome", () => {
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.en.scenePosition(2, 4), "Scene 2 of 4");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.nb.scenePosition(2, 4), "Scene 2 av 4");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.fr.scenePosition(2, 4), "Scène 2 sur 4");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.pt.scenePosition(2, 4), "Cena 2 de 4");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.en.sceneCardSummary(5, 16, 1), "5/16 decisions · 1 shot");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.nb.sceneCardSummary(5, 16, 2), "5/16 beslutninger · 2 innstillinger");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.fr.activeSceneSummary(5, 16, 1), "5/16 décisions de réalisation · 1 plan");
  assert.equal(FILM_DIRECTOR_PROJECT_COPY.pt.activeSceneSummary(5, 16, 2), "5/16 decisões de realização · 2 planos");
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
