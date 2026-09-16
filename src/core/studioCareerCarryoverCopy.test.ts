import assert from "node:assert/strict";
import test from "node:test";
import { getStudioIdentityTagLabel, STUDIO_CAREER_CARRYOVER_COPY } from "./studioCareerCarryoverCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;

test("studio carryover copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_CARRYOVER_COPY), languages);
});

test("studio carryover chrome is localized", () => {
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.nb.studioCarryover, "Videreført studio");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.fr.money, "Trésorerie");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.pt.completedFilms, "Filmes concluídos");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.en.studioIdentity, "Studio identity");
});

test("studio carryover dynamic labels preserve film, year, and quarter values", () => {
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.en.afterSourceFilm("film 2"), "Studio after Film 2");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.nb.afterSourceFilm("film 3"), "Studio etter Film 3");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.fr.period(2028, "Q2"), "Année 2028 · Q2");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.pt.period(2029, "Q4"), "Ano 2029 · Q4");
});

test("canonical studio identity tags receive presentation-only localized labels", () => {
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.nb.identityTags.low_budget, "lavbudsjett");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.fr.identityTags.technical_craft, "savoir-faire technique");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.pt.identityTags.talent_lab, "laboratório de talentos");
  assert.equal(STUDIO_CAREER_CARRYOVER_COPY.en.identityTags.international, "international");
});

test("career result identity tags resolve localized presentation labels fail-closed", () => {
  assert.equal(getStudioIdentityTagLabel("nb", "low_budget"), "lavbudsjett");
  assert.equal(getStudioIdentityTagLabel("fr", "technical_craft"), "savoir-faire technique");
  assert.equal(getStudioIdentityTagLabel("pt", "talent_lab"), "laboratório de talentos");
  assert.throws(() => getStudioIdentityTagLabel("en", "unknown_tag"), /Unknown studio identity tag: unknown_tag/);
});
