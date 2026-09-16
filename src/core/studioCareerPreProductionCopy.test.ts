import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_PRE_PRODUCTION_COPY } from "./studioCareerPreProductionCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;
const disciplines = ["directing", "cinematography", "editing"] as const;

test("studio career pre-production copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_PRE_PRODUCTION_COPY), languages);
  for (const language of languages) {
    assert.deepEqual(Object.keys(STUDIO_CAREER_PRE_PRODUCTION_COPY[language].crew.disciplines), disciplines);
  }
});

test("pre-production chrome and discipline labels are localized without changing canonical ids", () => {
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.en.panel.lock, "Lock pre-production");
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.nb.location.heading, "Bekreft produksjonsbasen");
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.fr.crew.disciplines.cinematography, "Directeur de la photographie");
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.pt.casting.heading, "Formar o elenco principal");
});

test("pre-production helpers preserve project and selection values", () => {
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.nb.panel.eyebrow("Film 2"), "Start preproduksjon for Film 2");
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.fr.returning.workedTogether(2), "2 films ensemble");
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.pt.returning.workedTogether(1), "Trabalhou em conjunto num filme");
  assert.equal(STUDIO_CAREER_PRE_PRODUCTION_COPY.nb.panel.selectionSummary(2, 3), "2/3 nøkkelcrew · 3 skuespillere valgt");
});
