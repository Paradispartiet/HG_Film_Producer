import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_DEVELOPMENT_COPY } from "./studioCareerDevelopmentCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;
const pathIds = ["mentor", "location", "script"] as const;

test("studio career development copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_DEVELOPMENT_COPY), languages);
  for (const language of languages) {
    assert.deepEqual(Object.keys(STUDIO_CAREER_DEVELOPMENT_COPY[language].paths), pathIds);
  }
});

test("development phase chrome is localized without changing canonical path ids", () => {
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.en.paths.mentor.title, "Ask a mentor");
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.nb.paths.mentor.title, "Spør en mentor");
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.fr.location.runScout, "Lancer le repérage");
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.pt.script.selectedTemplate, "Modelo selecionado");
});

test("development helpers preserve dynamic project and progress values", () => {
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.nb.panel.eyebrow("Film 2"), "Utvikling av Film 2");
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.fr.panel.heading("Film 3"), "Développer Film 3");
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.pt.progress(2), "2 de 3 ações de desenvolvimento aplicadas.");
  assert.equal(STUDIO_CAREER_DEVELOPMENT_COPY.en.progress(1), "1 of 3 development action applied.");
});
