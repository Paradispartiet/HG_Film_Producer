import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterSeventeen } from "./filmHistoryChapterSeventeen.js";

test("Chapter 17 holds eighteen readable articles from distinct postwar Asian cinemas", () => {
  const chapter = filmHistoryChapterSeventeen;
  assert.equal(chapter.number, 17);
  assert.equal(chapter.id, "postwar-japan-asia");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 18);
  assert.equal(chapter.sections.reduce((count, section) => count + section.paragraphs.length, 0), 54);
  const prose = chapter.sections.flatMap(section => section.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 3_600, `Chapter 17 has only ${words} words`);
  assert.match(prose, /Japanese studio|Japanese film/i);
  assert.match(prose, /Bengal|Bengali/);
  assert.match(prose, /South Korean/);
  assert.match(prose, /Hong Kong/);
});

test("Chapter 17 has distinct sourced articles and no missing or unused source identifiers", () => {
  const chapter = filmHistoryChapterSeventeen;
  const ids = new Set(chapter.sources.map(source => source.id));
  assert.equal(ids.size, chapter.sources.length);
  assert.ok(ids.size >= 25);
  assert.equal(new Set(chapter.sections.map(section => section.id)).size, chapter.sections.length);
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://")));
  const used = new Set<string>();
  for (const article of chapter.sections) {
    assert.ok(article.paragraphs.length >= 3);
    assert.ok(article.paragraphs.every(paragraph => paragraph.length >= 200), article.id);
    assert.ok(article.sourceIds.length >= 2);
    for (const id of article.sourceIds) {
      assert.ok(ids.has(id), `Unknown source ${id} in ${article.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size);
});

test("Chapter 17 does not invent existing Atlas cases before a case-by-case audit", () => {
  const chapter = filmHistoryChapterSeventeen;
  assert.equal(chapter.filmReferences.length, 16);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 10);
  assert.ok(chapter.historicalObjects.every(object => object.role === "historical_object" && object.atlasDecision === "no_production_case"));
});


test("Chapter 17 film-specific Criterion provenance protects narrative and version distinctions", () => {
  const chapter = filmHistoryChapterSeventeen;
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sources.length, 31);
  const sourceIds = new Map(chapter.sources.map((s) => [s.id, s.url]));
  const article = (id: string) => {
    const found = chapter.sections.find((section) => section.id === id);
    assert.ok(found, `Missing film article ${id}`);
    return found;
  };
  assert.equal(sourceIds.get("ch17_criterion_rashomon"), "https://www.criterion.com/films/307-rashomon");
  assert.equal(sourceIds.get("ch17_criterion_ikiru"), "https://www.criterion.com/films/353");
  assert.equal(sourceIds.get("ch17_criterion_godzilla"), "https://www.criterion.com/films/27755-godzilla");
  assert.ok(article("ch17_rashomon").sourceIds.includes("ch17_criterion_rashomon"));
  assert.ok(article("ch17_ikiru").sourceIds.includes("ch17_criterion_ikiru"));
  assert.ok(article("ch17_godzilla").sourceIds.includes("ch17_criterion_godzilla"));
  assert.match(article("ch17_ikiru").paragraphs.join(" "), /recollections at his funeral/);
  assert.match(article("ch17_godzilla").paragraphs.join(" "), /1956 US release/);
});
