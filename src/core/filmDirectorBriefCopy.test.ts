import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import { FILM_DIRECTOR_BRIEF_COPY } from "./filmDirectorBriefCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const groupIds = ["concept", "staging", "image", "timeSound", "feasibility"] as const;
const fieldIds = DIRECTOR_BRIEF_FIELDS.map((field) => field.id);

test("Film Director brief copy covers all four FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_BRIEF_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact brief group and field keysets", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_BRIEF_COPY[language];
    assert.deepEqual(Object.keys(copy.groups).sort(), [...groupIds].sort(), `${language}:groups`);
    assert.deepEqual(Object.keys(copy.fields).sort(), [...fieldIds].sort(), `${language}:fields`);
    assert.ok(copy.ariaLabel.trim().length > 0, `${language}:ariaLabel`);
    assert.ok(copy.defined.trim().length > 0, `${language}:defined`);
    assert.ok(copy.open.trim().length > 0, `${language}:open`);
    for (const groupId of groupIds) assert.ok(copy.groups[groupId].trim().length > 0, `${language}:${groupId}`);
    for (const fieldId of fieldIds) {
      assert.ok(copy.fields[fieldId].label.trim().length > 0, `${language}:${fieldId}:label`);
      assert.ok(copy.fields[fieldId].prompt.trim().length > 0, `${language}:${fieldId}:prompt`);
    }
  }
});

test("NB localizes the active-scene brief chrome", () => {
  const copy = FILM_DIRECTOR_BRIEF_COPY.nb;
  assert.deepEqual(
    [copy.groups.concept, copy.groups.staging, copy.groups.image, copy.groups.timeSound, copy.groups.feasibility],
    ["Konsept", "Iscenesettelse", "Bilde", "Tid og lyd", "Gjennomførbarhet"],
  );
  assert.deepEqual(
    [copy.fields.sceneTitle.label, copy.fields.performanceDirection.label, copy.fields.shotPlan.label, copy.fields.editingRhythm.label, copy.defined, copy.open],
    ["Scenetittel", "Skuespillerregi", "Innstillingsplan", "Klipperytme", "Definert", "Åpen"],
  );
});

test("FR localizes the active-scene brief chrome", () => {
  const copy = FILM_DIRECTOR_BRIEF_COPY.fr;
  assert.deepEqual(
    [copy.groups.concept, copy.groups.staging, copy.groups.image, copy.groups.timeSound, copy.groups.feasibility],
    ["Concept", "Mise en scène", "Image", "Temps et son", "Faisabilité"],
  );
  assert.deepEqual(
    [copy.fields.sceneTitle.label, copy.fields.performanceDirection.label, copy.fields.shotPlan.label, copy.fields.editingRhythm.label, copy.defined, copy.open],
    ["Titre de la scène", "Direction d’acteurs", "Plan de découpage", "Rythme du montage", "Défini", "Ouvert"],
  );
});

test("PT localizes the active-scene brief chrome", () => {
  const copy = FILM_DIRECTOR_BRIEF_COPY.pt;
  assert.deepEqual(
    [copy.groups.concept, copy.groups.staging, copy.groups.image, copy.groups.timeSound, copy.groups.feasibility],
    ["Conceito", "Encenação", "Imagem", "Tempo e som", "Viabilidade"],
  );
  assert.deepEqual(
    [copy.fields.sceneTitle.label, copy.fields.performanceDirection.label, copy.fields.shotPlan.label, copy.fields.editingRhythm.label, copy.defined, copy.open],
    ["Título da cena", "Direção de atores", "Planificação dos planos", "Ritmo de montagem", "Definido", "Em aberto"],
  );
});

test("localized brief prompts are not silently falling back to canonical English", () => {
  for (const language of ["nb", "fr", "pt"] as const) {
    for (const fieldId of fieldIds) {
      assert.notEqual(FILM_DIRECTOR_BRIEF_COPY[language].fields[fieldId].prompt, FILM_DIRECTOR_BRIEF_COPY.en.fields[fieldId].prompt, `${language}:${fieldId}:prompt`);
    }
  }
});
