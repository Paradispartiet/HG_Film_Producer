import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
const candidate = JSON.parse(readFileSync("data/film/candidates/pulse-2001.json", "utf8"));
test("Pulse candidate remains separate from canonical playable admission", () => {
  assert.equal(candidate.status, "editorial_candidate_not_admitted");
  assert.equal(candidate.identity.year, 2001);
  assert.equal(candidate.identity.originalTitle, "Kairo");
  assert.equal(candidate.book.decision, "P2");
  assert.equal(candidate.review.runtimeAdmission, false);
  assert.equal(candidate.review.bookLinkApproved, false);
  assert.equal(candidate.questions.length, 3);
  const sourceIds = new Set(candidate.sources.map((s: {id: string}) => s.id));
  for (const p of candidate.article.paragraphs) {
    assert.ok(p.text.length > 200);
    for (const id of p.sourceIds) assert.ok(sourceIds.has(id), id);
  }
  for (const q of candidate.questions) {
    assert.equal(q.options.length, 3);
    assert.equal(q.options.filter((o: {id: string}) => o.id === q.bestSupportedOptionId).length, 1);
    for (const id of q.sourceIds) assert.ok(sourceIds.has(id), id);
    for (const lang of ["en", "nb", "fr", "pt"]) {
      assert.ok(q.prompt[lang].length > 20);
      assert.ok(q.explanation[lang].length > 45);
      for (const o of q.options) assert.ok(o.label[lang].length > 12);
    }
  }
});

test("Pulse candidate has a dedicated Atlas and Chapter 28 study route, not a canonical scenario", () => {
  const atlas = readFileSync("src/ui/components/FilmAtlasExperience.tsx", "utf8");
  const book = readFileSync("src/ui/components/FilmHistoryBook.tsx", "utf8");
  const page = readFileSync("src/ui/components/PulseCandidatePage.tsx", "utf8");
  const history = readFileSync("src/ui/components/FilmHistoryExperience.tsx", "utf8");
  assert.match(atlas, /route\.filmSlug === PULSE_CANDIDATE_SLUG/);
  assert.match(atlas, /<PulseCandidatePage language=/);
  assert.match(book, /activeChapter\.number === 28 && !scenario && pulseCandidateMatches/);
  assert.match(history, /onOpenPulseCandidate=/);
  assert.match(page, /candidate-pulse-2001/);
  assert.match(page, /workshopOverride=\{candidateWorkshop\}/);
  assert.match(page, /not a verified playable Production Case/);
  assert.doesNotMatch(page, /localStorage|setProductionCaseMissionChoice|writeProductionCaseProgress/);
});
