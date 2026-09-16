import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "./studioCareerPostProductionCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;
const decisionTypes = ["edit", "sound", "music", "color"] as const;

test("studio career post-production copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_POST_PRODUCTION_COPY), languages);
  for (const language of languages) {
    assert.deepEqual(Object.keys(STUDIO_CAREER_POST_PRODUCTION_COPY[language].decisionCard.types), decisionTypes);
  }
});

test("post-production chrome localizes panel, decisions and screening labels", () => {
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.nb.panel.heading("first film", "Northbound"), "Klipperom og ferdigstillingsbord");
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.fr.edit.heading, "Façonner le montage");
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.pt.trailer.riskCost, "Risco / custo");
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.nb.screening.recommendedChanges, "Anbefalte endringer");
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.fr.result.metrics.lockedCut, "Montage verrouillé");
});

test("post-production dynamic copy preserves project and numeric values", () => {
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.en.panel.selectedCount(3), "3/5 finishing choices selected");
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.nb.panel.lockButton("film 2"), "Lås postproduksjon for Film 2");
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.fr.result.totalCost("1 250 $US"), "Coût total de finition 1 250 $US");
  assert.equal(STUDIO_CAREER_POST_PRODUCTION_COPY.pt.result.nextMessage("film 3"), "Próximo passo: lançar Film 3");
});
