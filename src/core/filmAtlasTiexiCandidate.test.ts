import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
const read = (name: string) => JSON.parse(readFileSync(name, "utf8"));
test("West of the Tracks is a distinct six-phase study candidate, not a verified case", () => {
  const candidate = read("data/film/candidates/west-of-the-tracks-2002.json");
  const pulse = read("data/film/candidates/pulse-2001.json");
  assert.equal(candidate.identity.title, "West of the Tracks");
  assert.equal(candidate.identity.year, 2002);
  assert.equal(candidate.identity.directors[0], "Wang Bing");
  assert.equal(candidate.identity.originalTitle, "Tie Xi Qu");
  assert.match(candidate.identity.runtimeNote, /2002.*2003.*545.*551.*554.*558/);
  assert.ok(candidate.questions.some((q: {bestSupportedOptionId: string}) => q.bestSupportedOptionId === "ledger"));
  assert.equal(candidate.book.chapter, 27);
  assert.equal(candidate.book.decision, "P2");
  assert.equal(candidate.review.runtimeAdmission, false);
  assert.equal(candidate.review.bookLinkApproved, false);
  assert.equal(candidate.review.studyPreview, true);
  assert.notEqual(candidate.routeSlug, pulse.routeSlug);
  assert.notEqual(candidate.candidateId, pulse.candidateId);
  assert.equal(candidate.phases.length, 6);
  assert.equal(candidate.questions.length, 6);
  assert.deepEqual(candidate.phases.map((p: {questionId: string}) => p.questionId), candidate.questions.map((q: {id: string}) => q.id));
  const ids = new Set(candidate.sources.map((s: {id: string}) => s.id));
  assert.equal(ids.size, candidate.sources.length);
  for (const p of candidate.article.paragraphs) for (const id of p.sourceIds) assert.ok(ids.has(id));
  for (const q of candidate.questions) {
    assert.equal(q.options.length, 3);
    assert.equal(q.options.filter((o: {id: string}) => o.id === q.bestSupportedOptionId).length, 1);
    for (const id of q.sourceIds) assert.ok(ids.has(id));
    for (const lang of ["en","nb","fr","pt"]) {
      assert.ok(q.prompt[lang].length > 20);
      assert.ok(q.explanation[lang].length > 45);
      for (const o of q.options) assert.ok(o.label[lang].length > 12);
    }
  }
  const registry = readFileSync("src/ui/data/filmStudyCandidates.ts", "utf8");
  assert.match(registry, /west-of-the-tracks-2002\.json/);
  const book = readFileSync("src/core/filmHistoryChapterTwentySeven.ts", "utf8");
  assert.match(book, /"title": "West of the Tracks",\s*"year": 2002/);
});
