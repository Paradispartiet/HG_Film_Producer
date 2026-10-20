import assert from "node:assert/strict";
import test from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { PRODUCTION_CASE_REFLECTION_COPY } from "./productionCaseReflectionCopy.js";

const categories = ["genre", "tone", "screenplay", "cinematography", "editing", "sound", "learning"] as const;
const phases = ["development", "pre_production", "shoot", "post_production", "release"] as const;
const assessments = ["reconsider", "partial", "clear"] as const;
const verificationStatuses = ["needs_research", "seeded", "verified"] as const;

test("Production Case reflection copy covers every language and display-only key", () => {
  assert.deepEqual(Object.keys(PRODUCTION_CASE_REFLECTION_COPY), [...FILMWORK_LANGUAGES]);
  for (const language of FILMWORK_LANGUAGES) {
    const copy = PRODUCTION_CASE_REFLECTION_COPY[language];
    for (const field of [copy.checklist.eyebrow, copy.checklist.heading, copy.checklist.intro,
      copy.alignment.eyebrow, copy.alignment.heading, copy.alignment.note,
      copy.result.eyebrow, copy.result.heading, copy.result.whatToReview, copy.result.note,
      copy.phases.eyebrow, copy.phases.heading, copy.phases.intro, copy.phases.noTargets,
      copy.phases.caseShootDescription,
      copy.recap.eyebrow, copy.recap.heading, copy.recap.identified, copy.recap.review,
      copy.recap.noSelected, copy.recap.noRemaining, copy.recap.replay,
      copy.recap.sourceVerified, copy.recap.openSource]) assert.ok(field.trim(), language);
    assert.deepEqual(Object.keys(copy.checklist.categories), [...categories], language);
    assert.deepEqual(Object.keys(copy.phases.caseTitles), [...phases], language);
    assert.deepEqual(Object.keys(copy.phases.seedTitles), [...phases], language);
    assert.deepEqual(Object.keys(copy.phases.seedDescriptions), [...phases], language);
    assert.deepEqual(Object.keys(copy.alignment.summaries), [...assessments], language);
    assert.deepEqual(Object.keys(copy.recap.intros), [...assessments], language);
    assert.deepEqual(Object.keys(copy.recap.verificationNotes), [...verificationStatuses], language);
    assert.equal(copy.recap.sourceCount(3, "2026-01-01").includes("3"), true, language);
    assert.ok(copy.recap.sourceCount(3, "2026-01-01").includes("2026-01-01"), language);
    assert.ok(copy.recap.compareMethod("Camera A").includes("Camera A"), language);
  }
});

test("English presentation preserves canonical visible wording", () => {
  const copy = PRODUCTION_CASE_REFLECTION_COPY.en;
  assert.equal(copy.checklist.heading, "Production method checklist");
  assert.equal(copy.alignment.summaries.reconsider,
    "Compare the selected approaches with the documented film method and revisit the explanations that do not fit yet.");
  assert.equal(copy.recap.heading, "Case report");
  assert.equal(copy.recap.sourceCount(2, "2026-01-01"), "2 documented sources · verified 2026-01-01");
  assert.equal(copy.phases.caseTitles.shoot, "Image and sound on set");
});

test("Norwegian French and Portuguese present visible reflection chrome in their language", () => {
  assert.equal(PRODUCTION_CASE_REFLECTION_COPY.nb.checklist.heading, "Sjekkliste for produksjonsmetoder");
  assert.equal(PRODUCTION_CASE_REFLECTION_COPY.fr.alignment.heading, "Comparer les méthodes");
  assert.equal(PRODUCTION_CASE_REFLECTION_COPY.pt.recap.heading, "Relatório do caso");
  assert.equal(PRODUCTION_CASE_REFLECTION_COPY.nb.checklist.categories.sound, "Lyd");
  assert.equal(PRODUCTION_CASE_REFLECTION_COPY.pt.phases.caseTitles.shoot, "Imagem e som no plateau");
  assert.equal(PRODUCTION_CASE_REFLECTION_COPY.fr.recap.compareMethod("Caméra A"), "Comparer la méthode : Caméra A");
});
