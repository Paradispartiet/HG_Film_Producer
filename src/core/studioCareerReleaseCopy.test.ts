import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_RELEASE_COPY } from "./studioCareerReleaseCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;
const channels = ["festival", "theatrical_limited", "theatrical_wide", "streaming", "tv", "educational", "direct_digital"] as const;
const sentiments = ["negative", "mixed", "positive", "acclaim"] as const;

test("studio career release copy covers every FilmWork language and release enum", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_RELEASE_COPY), languages);
  for (const language of languages) {
    assert.deepEqual(Object.keys(STUDIO_CAREER_RELEASE_COPY[language].strategy.channels), channels);
    assert.deepEqual(Object.keys(STUDIO_CAREER_RELEASE_COPY[language].reviews.sentiments), sentiments);
  }
});

test("release chrome localizes strategy, festival, results and outcome labels", () => {
  assert.equal(STUDIO_CAREER_RELEASE_COPY.nb.panel.eyebrow, "Distribusjon og festivaler");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.fr.strategy.heading, "Choisir une stratégie de sortie");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.pt.festival.notSelected, "Não selecionado");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.nb.revenue.netRevenue, "Nettoinntekt");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.fr.awards.nominations, "Nominations");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.pt.outcome.overall, "Global");
});

test("release dynamic copy preserves project labels and numeric values", () => {
  assert.equal(STUDIO_CAREER_RELEASE_COPY.en.panel.releaseButton("film 2"), "Release Film 2");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.nb.panel.releaseButton("film 3"), "Lanser Film 3");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.fr.outcome.releasedHeading("first film"), "Premier film sorti");
  assert.equal(STUDIO_CAREER_RELEASE_COPY.pt.audience.viewers, "Espectadores");
});
