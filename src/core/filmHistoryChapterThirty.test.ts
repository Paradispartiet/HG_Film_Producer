import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterThirty } from "./filmHistoryChapterThirty.js";

test("Final Film History chapter provides thirty substantive documentary and contemporary-form essays", () => {
  const chapter = filmHistoryChapterThirty;
  assert.equal(chapter.id, "contemporary-forms");
  assert.equal(chapter.number, 30);
  assert.equal(chapter.period, "2000s–present");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 30);
  assert.equal(chapter.sections.reduce((n, s) => n + s.paragraphs.length, 0), 90);
  const prose = chapter.sections.flatMap(s => s.paragraphs).join(" ");
  const wordCount = prose.trim().split(/\s+/).length;
  assert.ok(wordCount >= 6_000, `Final chapter has only ${wordCount} words`);
  for (const topic of [
    /essay film/i,/Agnès Varda/,/The Gleaners and I/,/The Beaches of Agnès/,
    /Stories We Tell/,/The Act of Killing/,/The Missing Picture/,
    /Waltz with Bashir/,/Flee/,/Cameraperson/,/Hale County/,/Leviathan/,
    /Collective/,/This Is Not a Film/,/All the Beauty and the Bloodshed/,
    /20 Days in Mariupol/,/Tangerine/,/Searching/,/Host/,/Life in a Day/,
    /The Mandalorian/,/LED/,/virtual production/,/online festivals?/i,
    /preservation/,/access/,/labour/
  ]) assert.match(prose, topic);
});

test("Final chapter has fifty distinct research links, all attached to essays", () => {
  const chapter = filmHistoryChapterThirty;
  assert.equal(chapter.sources.length, 50);
  const sourceIds = new Set(chapter.sources.map(s => s.id));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.equal(new Set(chapter.sources.map(s => s.url)).size, chapter.sources.length);
  assert.ok(chapter.sources.every(s => s.url.startsWith("https://") && s.title.length > 12 && s.publisher.length > 5));
  assert.ok(chapter.sources.some(s => s.publisher === "American Society of Cinematographers"));
  assert.ok(chapter.sources.some(s => s.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.some(s => s.publisher === "British Film Institute"));
  const used = new Set<string>();
  const articleIds = new Set<string>();
  for (const essay of chapter.sections) {
    assert.match(essay.id, /^ch30_/);
    assert.ok(!articleIds.has(essay.id), essay.id);
    articleIds.add(essay.id);
    assert.equal(essay.paragraphs.length, 3, essay.id);
    assert.ok(essay.paragraphs.every(p => p.length >= 350), `Short paragraph: ${essay.id}`);
    assert.ok(essay.sourceIds.length >= 2, essay.id);
    for (const id of essay.sourceIds) {
      assert.ok(sourceIds.has(id), `Unknown source ID ${id} in ${essay.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, sourceIds.size, "Final chapter has unreferenced source entries");
});

test("Final chapter keeps research films distinct from playable Film Atlas cases", () => {
  const chapter = filmHistoryChapterThirty;
  assert.equal(chapter.filmReferences.length, 20);
  assert.ok(chapter.filmReferences.every(f => f.atlasDecision === "P2" && f.atlasScenarioId === undefined));
  assert.ok(chapter.filmReferences.every(f => f.year >= 2000 && f.year <= 2026));
  assert.equal(chapter.historicalObjects.length, 20);
  assert.ok(chapter.historicalObjects.every(o => o.role === "historical_object" && o.atlasDecision === "no_production_case"));
});
