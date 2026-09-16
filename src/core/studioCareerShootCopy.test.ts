import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_SHOOT_COPY } from "./studioCareerShootCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;
const statuses = ["planned", "completed", "delayed", "cancelled"] as const;

test("studio career shoot copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_SHOOT_COPY), languages);
  for (const language of languages) {
    assert.deepEqual(Object.keys(STUDIO_CAREER_SHOOT_COPY[language].schedule.statuses), statuses);
  }
});

test("shoot chrome localizes project, day and evaluation labels", () => {
  assert.equal(STUDIO_CAREER_SHOOT_COPY.nb.projectLabel("first film"), "første film");
  assert.equal(STUDIO_CAREER_SHOOT_COPY.nb.panel.heading("film 2"), "Film 2 – opptak");
  assert.equal(STUDIO_CAREER_SHOOT_COPY.fr.schedule.dayOf(2, 5), "Jour 2 sur 5");
  assert.equal(STUDIO_CAREER_SHOOT_COPY.pt.event.delayDays(1), "1 dia");
  assert.equal(STUDIO_CAREER_SHOOT_COPY.fr.schedule.statuses.delayed, "Retardé");
});

test("shoot dynamic copy preserves numeric values", () => {
  assert.equal(STUDIO_CAREER_SHOOT_COPY.en.panel.resolveDay(3), "Resolve day 3");
  assert.equal(STUDIO_CAREER_SHOOT_COPY.nb.dayResult.scheduleDelta(2), "2 dager");
  assert.equal(STUDIO_CAREER_SHOOT_COPY.pt.evaluation.overall(87), "Geral 87");
});
