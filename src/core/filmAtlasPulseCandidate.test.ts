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
  assert.equal(candidate.questions.length, 6);
  assert.equal(candidate.phases.length, 6);
  assert.deepEqual(candidate.phases.map((p: {questionId: string}) => p.questionId), candidate.questions.map((q: {id: string}) => q.id));
  assert.equal(new Set(candidate.phases.map((p: {id: string}) => p.id)).size, 6);
  for (const phase of candidate.phases) for (const lang of ["en", "nb", "fr", "pt"]) {
    assert.ok(phase.title[lang].length > 3);
    assert.ok(phase.deliverable[lang].length > 30);
  }
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
  const page = readFileSync("src/ui/components/FilmStudyCandidatePage.tsx", "utf8");
  const history = readFileSync("src/ui/components/FilmHistoryExperience.tsx", "utf8");
  assert.match(atlas, /getFilmStudyCandidateBySlug\(route\.filmSlug\)/);
  assert.match(atlas, /<FilmStudyCandidatePage key=/);
  assert.match(book, /!scenario \? findFilmStudyCandidateForReference\(activeChapter\.number, reference\.title, reference\.year\)/);
  assert.match(history, /onOpenStudyCandidate=/);
  assert.equal(candidate.routeSlug, "candidate-pulse-2001");
  assert.match(page, /candidate\.identity\.title/);
  assert.match(page, /workshopOverride=\{candidateWorkshop\}/);
  assert.match(page, /not a verified playable Production Case/);
  assert.doesNotMatch(page, /localStorage|setProductionCaseMissionChoice|writeProductionCaseProgress/);
});

test("Pulse admission assessment preserves the existing audited representation gate", () => {
  const contract = JSON.parse(readFileSync("data/film/film_history_representation_coverage_v1.json", "utf8"));
  const assessment = candidate.review.admissionAssessment;
  assert.equal(assessment.status, "not_eligible_on_current_evidence");
  assert.equal(assessment.auditedCoreCount, contract.baseline.expected_production_verified_core_scenarios);
  assert.equal(contract.candidate_admission_gate.default, "REJECT_NEW_IDENTITY");
  for (const check of assessment.developmentChecks) {
    const row = contract.development_matrix.find((r: {development_id: string}) => r.development_id === check.id);
    assert.equal(row?.declared_status, check.declaredStatus);
  }
  for (const id of assessment.existingComparisonIds) {
    assert.ok(contract.scenario_reviews.some((row: {scenario_id: string}) => row.scenario_id === id));
  }
  assert.match(assessment.reason, /not evidence of digital acquisition/);
  assert.equal(candidate.review.runtimeAdmission, false);
});

test("Candidate preview registration is independent of canonical admission", () => {
  const registry = readFileSync("src/ui/data/filmStudyCandidates.ts", "utf8");
  const page = readFileSync("src/ui/components/FilmStudyCandidatePage.tsx", "utf8");
  assert.match(registry, /const editorialCandidates: readonly FilmStudyCandidate\[\] = \[pulse, searching, host, unfriended, profile, timecode\]/);
  assert.match(registry, /!candidate\.review\.runtimeAdmission && !candidate\.review\.bookLinkApproved/);
  assert.match(registry, /candidate\.identity\.year === year/);
  assert.match(registry, /matches\.length === 1/);
  assert.match(page, /key=\{candidate\.candidateId\} scenarioId=/);
  assert.doesNotMatch(page, /candidate-pulse-2001|Kiyoshi Kurosawa/);
  for (const lang of ["en", "nb", "fr", "pt"]) assert.ok(candidate.workshopIntroduction[lang].length > 20);
});
