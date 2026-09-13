import assert from "node:assert/strict";
import test from "node:test";

import {
  DIRECTOR_KNOWLEDGE_CATEGORIES,
  DIRECTOR_TERMS,
} from "./directorKnowledge.js";
import {
  DIRECTOR_CATEGORY_USE_FR,
  DIRECTOR_CATEGORY_USE_PT,
  DIRECTOR_TERM_COPY_FR,
  DIRECTOR_TERM_COPY_PT,
  getDirectorTermDisplay,
} from "./directorDisplay.js";

const BASE_TERM_IDS = DIRECTOR_TERMS.map((term) => term.id);
const SORTED_BASE_TERM_IDS = [...BASE_TERM_IDS].sort();
const SORTED_CATEGORY_IDS = DIRECTOR_KNOWLEDGE_CATEGORIES.map((category) => category.id).sort();

test("locks the canonical base Director vocabulary at 162 unique ids before extensions", () => {
  assert.equal(BASE_TERM_IDS.length, 162);
  assert.equal(new Set(BASE_TERM_IDS).size, 162);
});

test("French and Portuguese Director display copy cover exactly the canonical 162 base ids", () => {
  assert.deepEqual(Object.keys(DIRECTOR_TERM_COPY_FR).sort(), SORTED_BASE_TERM_IDS);
  assert.deepEqual(Object.keys(DIRECTOR_TERM_COPY_PT).sort(), SORTED_BASE_TERM_IDS);
});

test("French and Portuguese category-use copy cover exactly the canonical 12 categories", () => {
  assert.deepEqual(Object.keys(DIRECTOR_CATEGORY_USE_FR).sort(), SORTED_CATEGORY_IDS);
  assert.deepEqual(Object.keys(DIRECTOR_CATEGORY_USE_PT).sort(), SORTED_CATEGORY_IDS);
});

test("localized base copy contains non-empty labels, definitions and examples", () => {
  for (const [language, copy] of [["fr", DIRECTOR_TERM_COPY_FR], ["pt", DIRECTOR_TERM_COPY_PT]] as const) {
    for (const id of BASE_TERM_IDS) {
      const localized = copy[id];
      assert.ok(localized, `${language}:${id}:missing`);
      assert.ok(localized.label.trim().length > 0, `${language}:${id}:label`);
      assert.ok(localized.definition.trim().length > 20, `${language}:${id}:definition`);
      assert.ok(localized.example.trim().length > 10, `${language}:${id}:example`);
    }
  }
});

test("English and Norwegian display keep the current canonical term data unchanged", () => {
  const term = DIRECTOR_TERMS.find((candidate) => candidate.id === "scene_objective");
  assert.ok(term);
  for (const language of ["en", "nb"] as const) {
    const display = getDirectorTermDisplay(language, term);
    assert.equal(display.primaryTerm, term.term);
    assert.equal(display.localizedTerm, term.norwegian);
    assert.equal(display.definition, term.definition);
    assert.equal(display.directorUse, term.directorUse);
    assert.equal(display.example, term.example);
  }
});

test("French and Portuguese display resolve localized base copy", () => {
  const term = DIRECTOR_TERMS.find((candidate) => candidate.id === "scene_objective");
  assert.ok(term);
  const fr = getDirectorTermDisplay("fr", term);
  const pt = getDirectorTermDisplay("pt", term);
  assert.equal(fr.localizedTerm, "Objectif de scène");
  assert.equal(pt.localizedTerm, "Objetivo de cena");
  assert.notEqual(fr.definition, term.definition);
  assert.notEqual(pt.definition, term.definition);
});


test("Portuguese cheat keeps the canonical English label while localized prose remains available", () => {
  const term = DIRECTOR_TERMS.find((candidate) => candidate.id === "cheat");
  assert.ok(term);
  const display = getDirectorTermDisplay("pt", term);
  assert.equal(display.primaryTerm, "Cheat");
  assert.equal(display.localizedTerm, "Cheat");
  assert.notEqual(display.definition, term.definition);
  assert.notEqual(display.example, term.example);
});

test("runtime extensions may grow beyond 162 and fall back to canonical display", async () => {
  const baseIds = new Set(BASE_TERM_IDS);
  await import("./directorKnowledgeExtensions.js");
  const extensionTerms = DIRECTOR_TERMS.filter((term) => !baseIds.has(term.id));
  assert.ok(extensionTerms.length > 0);

  for (const term of extensionTerms) {
    for (const language of ["fr", "pt"] as const) {
      const display = getDirectorTermDisplay(language, term);
      assert.equal(display.primaryTerm, term.term, `${language}:${term.id}:primary`);
      assert.equal(display.localizedTerm, term.norwegian, `${language}:${term.id}:label`);
      assert.equal(display.definition, term.definition, `${language}:${term.id}:definition`);
      assert.equal(display.directorUse, term.directorUse, `${language}:${term.id}:directorUse`);
      assert.equal(display.example, term.example, `${language}:${term.id}:example`);
    }
  }
});
