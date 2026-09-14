import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_SHOT_FIELDS } from "./directorProject.js";
import { FILM_DIRECTOR_SHOT_COPY } from "./filmDirectorShotCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const shotSizes = [
  "Extreme wide",
  "Wide",
  "Full",
  "Medium",
  "Medium close-up",
  "Close-up",
  "Extreme close-up",
  "Insert",
  "Point of view",
] as const;

const stringKeys = [
  "kicker",
  "title",
  "description",
  "addShot",
  "emptyTitle",
  "emptyDescription",
  "addFirstShot",
  "moveShotUpAria",
  "moveShotDownAria",
  "duplicateShot",
  "deleteShot",
  "chooseSize",
] as const;

test("Film Director shot copy covers all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_SHOT_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact shot field and stored size keysets", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_SHOT_COPY[language];
    for (const key of stringKeys) assert.ok(copy[key].trim().length > 0, `${language}:${key}`);
    assert.deepEqual(Object.keys(copy.fields).sort(), [...DIRECTOR_SHOT_FIELDS].sort(), `${language}:fields`);
    assert.deepEqual(Object.keys(copy.shotSizes).sort(), [...shotSizes].sort(), `${language}:shotSizes`);
    for (const field of DIRECTOR_SHOT_FIELDS) assert.ok(copy.fields[field].trim().length > 0, `${language}:${field}`);
    for (const value of shotSizes) assert.ok(copy.shotSizes[value].trim().length > 0, `${language}:${value}`);
    assert.ok(copy.shotTitleFallback(4).includes("4"), `${language}:shotTitleFallback`);
    assert.ok(copy.fieldsDefined(3, 9).includes("3") && copy.fieldsDefined(3, 9).includes("9"), `${language}:fieldsDefined`);
  }
});

test("NB localizes shot cards while stored shot-size values remain canonical", () => {
  const copy = FILM_DIRECTOR_SHOT_COPY.nb;
  assert.deepEqual(
    [copy.title, copy.addShot, copy.fields.shotSize, copy.fields.lens, copy.duplicateShot, copy.deleteShot],
    ["Innstillingskort", "+ Legg til innstilling", "Utsnitt", "Optikk / brennviddeuttrykk", "Dupliser", "Slett"],
  );
  assert.deepEqual(
    [copy.shotSizes["Extreme wide"], copy.shotSizes.Wide, copy.shotSizes.Medium, copy.shotSizes["Close-up"], copy.shotSizes["Point of view"]],
    ["Ultratotal", "Total", "Halvtotal", "Nær", "Subjektivt kamera (POV)"],
  );
});

test("FR localizes shot cards and professional shot scales", () => {
  const copy = FILM_DIRECTOR_SHOT_COPY.fr;
  assert.deepEqual(
    [copy.title, copy.addShot, copy.fields.shotSize, copy.fields.lens, copy.duplicateShot, copy.deleteShot],
    ["Fiches de plan", "+ Ajouter un plan", "Échelle de plan", "Focale / comportement optique", "Dupliquer", "Supprimer"],
  );
  assert.deepEqual(
    [copy.shotSizes.Full, copy.shotSizes.Medium, copy.shotSizes["Medium close-up"], copy.shotSizes["Close-up"], copy.shotSizes["Point of view"]],
    ["Plan en pied", "Plan moyen", "Plan rapproché poitrine", "Gros plan", "Plan subjectif"],
  );
});

test("PT localizes shot cards and keeps canonical option values as keys", () => {
  const copy = FILM_DIRECTOR_SHOT_COPY.pt;
  assert.deepEqual(
    [copy.title, copy.addShot, copy.fields.shotSize, copy.fields.lens, copy.duplicateShot, copy.deleteShot],
    ["Cartões de plano", "+ Adicionar plano", "Escala do plano", "Objetiva / comportamento focal", "Duplicar", "Eliminar"],
  );
  assert.deepEqual(
    [copy.shotSizes.Wide, copy.shotSizes.Full, copy.shotSizes.Medium, copy.shotSizes["Close-up"], copy.shotSizes["Point of view"]],
    ["Plano geral", "Plano de corpo inteiro", "Plano médio", "Grande plano", "Plano subjetivo"],
  );
});

test("NB, FR and PT shot-editor chrome does not silently fall back to English", () => {
  for (const language of ["nb", "fr", "pt"] as const) {
    const copy = FILM_DIRECTOR_SHOT_COPY[language];
    assert.notEqual(copy.title, FILM_DIRECTOR_SHOT_COPY.en.title, `${language}:title`);
    assert.notEqual(copy.emptyDescription, FILM_DIRECTOR_SHOT_COPY.en.emptyDescription, `${language}:emptyDescription`);
    assert.notEqual(copy.fields.shotSize, FILM_DIRECTOR_SHOT_COPY.en.fields.shotSize, `${language}:shotSize`);
    assert.notEqual(copy.shotSizes["Point of view"], FILM_DIRECTOR_SHOT_COPY.en.shotSizes["Point of view"], `${language}:pov`);
  }
});
