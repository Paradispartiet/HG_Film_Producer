import assert from "node:assert/strict";
import test from "node:test";

import { countFilmHistoryChapterWords } from "./filmHistoryChapterOne.js";
import {
  filmHistoryBookChapters,
  filmHistoryBookParts,
  getFilmHistoryBookChapter,
} from "./filmHistoryBook.js";

test("Film History book has six parts and thirty canonical chapters", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookChapters.length, 30);
  assert.deepEqual(filmHistoryBookChapters.map((chapter) => chapter.number), Array.from({ length: 30 }, (_, index) => index + 1));
  assert.equal(new Set(filmHistoryBookChapters.map((chapter) => chapter.id)).size, 30);
});

test("Chapter 1 satisfies the full editorial definition rather than the old baseline", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  assert.equal(chapter.status, "full");
  assert.equal(chapter.title, "From motion studies to cinema");
  assert.equal(chapter.period, "1870s–1905");
  assert.equal(chapter.sections.length, 12);
  assert.ok(chapter.learningObjectives.length >= 8);
  assert.ok(chapter.keyTerms.length >= 15);
  assert.ok(chapter.sources.length >= 25);
  assert.match(chapter.summary, /not invented once/i);

  const wordCount = countFilmHistoryChapterWords(chapter);
  assert.ok(wordCount >= 10_000, `Chapter 1 must contain at least 10,000 words; found ${wordCount}`);
  assert.ok(wordCount <= 12_500, `Chapter 1 should remain within the planned chapter scale; found ${wordCount}`);
});

test("every Chapter 1 section has resolvable source provenance", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  const sourceIds = new Set(chapter.sources.map((source) => source.id));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.every((source) => source.url.startsWith("https://")));
  for (const section of chapter.sections) {
    assert.ok(section.sourceIds.length > 0, `${section.id} must cite at least one source`);
    for (const sourceId of section.sourceIds) {
      assert.ok(sourceIds.has(sourceId), `${section.id} references unknown source ${sourceId}`);
    }
  }
});

test("Chapter 1 keeps the audited Film Atlas role and gap matrix", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  assert.equal(chapter.filmReferences.length, 11);

  const byDecision = (decision: "P0" | "P1" | "P2" | "use_existing_atlas_case") =>
    chapter.filmReferences.filter((reference) => reference.atlasDecision === decision).map((reference) => reference.title).sort();

  assert.deepEqual(byDecision("P0"), ["Blacksmith Scene", "The Great Train Robbery", "Workers Leaving the Lumière Factory"].sort());
  assert.deepEqual(byDecision("P1"), ["Fire!", "Life of an American Fireman", "Rescued by Rover"].sort());
  assert.deepEqual(byDecision("P2"), ["Annabelle Serpentine Dance", "Arrival of a Train at La Ciotat", "L'Arroseur arrosé", "The Big Swallow"].sort());
  assert.deepEqual(byDecision("use_existing_atlas_case"), ["A Trip to the Moon"]);

  const trip = chapter.filmReferences.find((reference) => reference.title === "A Trip to the Moon" && reference.year === 1902);
  assert.ok(trip);
  assert.equal(trip.role, "anchor_film");
  assert.equal(trip.atlasScenarioId, "scenario_a_trip_to_the_moon_1902");

  assert.deepEqual(
    chapter.filmReferences.filter((reference) => reference.role === "anchor_film").map((reference) => reference.title).sort(),
    ["A Trip to the Moon", "Blacksmith Scene", "The Great Train Robbery", "Workers Leaving the Lumière Factory"].sort(),
  );
});

test("pre-cinema apparatus and motion studies remain Historical Objects, not fake Production Cases", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  assert.ok(chapter.historicalObjects.length >= 4);
  assert.ok(chapter.historicalObjects.every((item) => item.role === "historical_object"));
  assert.ok(chapter.historicalObjects.every((item) => item.atlasDecision === "no_production_case"));
  assert.ok(chapter.historicalObjects.some((item) => /Muybridge/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Marey/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Kinetoscope/i.test(item.label)));
});

test("Chapter 2 is a full source-backed exhibition-history chapter", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  assert.equal(chapter.status, "full");
  assert.equal(chapter.title, "Projection, programmes and audiences");
  assert.equal(chapter.period, "1895–1907");
  assert.equal(chapter.sections.length, 12);
  assert.ok(chapter.learningObjectives.length >= 8);
  assert.ok(chapter.keyTerms.length >= 15);
  assert.ok(chapter.sources.length >= 25);
  assert.match(chapter.summary, /exhibitors assembled programmes/i);

  const wordCount = countFilmHistoryChapterWords(chapter);
  assert.ok(wordCount >= 8_000, `Chapter 2 must contain at least 8,000 words; found ${wordCount}`);
  assert.ok(wordCount <= 12_500, `Chapter 2 should remain within the planned chapter scale; found ${wordCount}`);
});

test("every Chapter 2 section has dense resolvable source provenance", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  const sourceIds = new Set(chapter.sources.map((source) => source.id));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.every((source) => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some((source) => source.publisher === "Library of Congress"));
  assert.ok(chapter.sources.some((source) => /British Film Institute|BFI/.test(source.publisher)));
  assert.ok(chapter.sources.some((source) => source.publisher === "National Science and Media Museum"));

  for (const section of chapter.sections) {
    assert.ok(section.paragraphs.length >= 5, `${section.id} must contain at least five substantive paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} must cite at least two sources`);
    for (const sourceId of section.sourceIds) {
      assert.ok(sourceIds.has(sourceId), `${section.id} references unknown source ${sourceId}`);
    }
  }
});

test("Chapter 2 keeps the completed audited Film Atlas matrix", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  assert.equal(chapter.filmReferences.length, 8);

  const byDecision = (decision: "P0" | "P1" | "P2" | "use_existing_atlas_case") =>
    chapter.filmReferences.filter((reference) => reference.atlasDecision === decision).map((reference) => reference.title).sort();

  assert.deepEqual(byDecision("P0"), []);
  assert.deepEqual(byDecision("P1"), []);
  assert.deepEqual(byDecision("P2"), ["May Irwin Kiss", "Sedgwick's Bioscope Showfront at Pendlebury Wakes"].sort());
  assert.deepEqual(
    byDecision("use_existing_atlas_case"),
    [
      "A Trip to the Moon",
      "Employees Leaving Brown's Atlas Works, Sheffield",
      "The Corbett–Fitzsimmons Fight",
      "The Great Train Robbery",
      "Uncle Josh at the Moving Picture Show",
      "Workers Leaving the Lumière Factory",
    ].sort(),
  );

  const existing = chapter.filmReferences.filter((reference) => reference.atlasDecision === "use_existing_atlas_case");
  assert.equal(existing.length, 6);
  assert.ok(existing.every((reference) => Boolean(reference.atlasScenarioId)), "all Chapter 2 reused Atlas cases need canonical scenario IDs");
});

test("Chapter 2 keeps exhibition infrastructure outside fake Production Cases", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  assert.equal(chapter.historicalObjects.length, 8);
  assert.ok(chapter.historicalObjects.every((item) => item.role === "historical_object"));
  assert.ok(chapter.historicalObjects.every((item) => item.atlasDecision === "no_production_case"));
  assert.ok(chapter.historicalObjects.some((item) => /Grand Café/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Vitascope/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /catalogues/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Nickelodeon/i.test(item.label)));
});

test("Chapters 1–10 remain full; Chapters 11–27 are readable drafts; 28–30 remain outlines", () => {
  const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 10);
  assert.equal(completed.length, 10);
  assert.ok(completed.every((chapter) => chapter.status === "full"));
  assert.ok(completed.every((chapter) => chapter.sections.length > 0));

  const sound = filmHistoryBookChapters.find((chapter) => chapter.number === 11);
  assert.equal(sound?.status, "draft");
  assert.ok((sound?.sections.length ?? 0) >= 9);
  assert.ok((sound?.sources.length ?? 0) >= 15);

  const genres = filmHistoryBookChapters.find((chapter) => chapter.number === 12);
  assert.equal(genres?.status, "draft");
  assert.equal(genres?.sections.length, 16);
  assert.ok((genres?.sources.length ?? 0) >= 20);

  const europe = filmHistoryBookChapters.find((chapter) => chapter.number === 13);
  assert.equal(europe?.status, "draft");
  assert.equal(europe?.sections.length, 16);
  assert.ok((europe?.sources.length ?? 0) >= 20);

  const nonfiction = filmHistoryBookChapters.find((chapter) => chapter.number === 14);
  assert.equal(nonfiction?.status, "draft");
  assert.equal(nonfiction?.sections.length, 16);
  assert.ok((nonfiction?.sources.length ?? 0) >= 25);

  const wartime = filmHistoryBookChapters.find((chapter) => chapter.number === 15);
  assert.equal(wartime?.status, "draft");
  assert.equal(wartime?.sections.length, 16);
  assert.ok((wartime?.sources.length ?? 0) >= 30);

  const neorealism = filmHistoryBookChapters.find((chapter) => chapter.number === 16);
  assert.equal(neorealism?.status, "draft");
  assert.equal(neorealism?.sections.length, 16);
  assert.ok((neorealism?.sources.length ?? 0) >= 25);

  const asia = filmHistoryBookChapters.find((chapter) => chapter.number === 17);
  assert.equal(asia?.status, "draft");
  assert.equal(asia?.sections.length, 18);
  assert.ok((asia?.sources.length ?? 0) >= 25);

  const hollywood = filmHistoryBookChapters.find((chapter) => chapter.number === 18);
  assert.equal(hollywood?.status, "draft");
  assert.equal(hollywood?.sections.length, 20);
  assert.ok((hollywood?.sources.length ?? 0) >= 30);

  const newWaves = filmHistoryBookChapters.find((chapter) => chapter.number === 19);
  assert.equal(newWaves?.status, "draft");
  assert.equal(newWaves?.sections.length, 21);
  assert.ok((newWaves?.sources.length ?? 0) >= 30);

  const decolonization = filmHistoryBookChapters.find((chapter) => chapter.number === 20);
  assert.equal(decolonization?.status, "draft");
  assert.equal(decolonization?.sections.length, 22);
  assert.ok((decolonization?.sources.length ?? 0) >= 30);

  const newHollywood = filmHistoryBookChapters.find((chapter) => chapter.number === 21);
  assert.equal(newHollywood?.status, "draft");
  assert.equal(newHollywood?.sections.length, 23);
  assert.ok((newHollywood?.sources.length ?? 0) >= 40);

  const counterCinema = filmHistoryBookChapters.find((chapter) => chapter.number === 22);
  assert.equal(counterCinema?.status, "draft");
  assert.equal(counterCinema?.sections.length, 25);
  assert.ok((counterCinema?.sources.length ?? 0) >= 40);

  const popularAsia = filmHistoryBookChapters.find((chapter) => chapter.number === 23);
  assert.equal(popularAsia?.status, "draft");
  assert.equal(popularAsia?.sections.length, 26);
  assert.ok((popularAsia?.sources.length ?? 0) >= 35);

  const homeVideo = filmHistoryBookChapters.find((chapter) => chapter.number === 24);
  assert.equal(homeVideo?.status, "draft");
  assert.equal(homeVideo?.sections.length, 24);
  assert.ok((homeVideo?.sources.length ?? 0) >= 30);

  const festival = filmHistoryBookChapters.find((chapter) => chapter.number === 25);
  assert.equal(festival?.status, "draft");
  assert.equal(festival?.sections.length, 25);
  assert.ok((festival?.sources.length ?? 0) >= 45);

  const transnational = filmHistoryBookChapters.find((chapter) => chapter.number === 26);
  assert.equal(transnational?.status, "draft");
  assert.equal(transnational?.sections.length, 22);
  assert.ok((transnational?.sources.length ?? 0) >= 40);

  const digital = filmHistoryBookChapters.find((chapter) => chapter.number === 27);
  assert.equal(digital?.status, "draft");
  assert.equal(digital?.sections.length, 23);
  assert.ok((digital?.sources.length ?? 0) >= 35);

  const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 27);
  assert.equal(remaining.length, 3);
  assert.ok(remaining.every((chapter) => chapter.status === "outline"));
  assert.ok(remaining.every((chapter) => chapter.sections.length === 0));
  assert.ok(remaining.every((chapter) => chapter.summary.length > 40));
  assert.ok(remaining.every((chapter) => chapter.learningObjectives.length >= 3));
});

test("Chapter 12 carries 16 distinct source-resolved film articles with canonical Atlas references", () => {
  const chapter = getFilmHistoryBookChapter("hollywood-genres");
  assert.ok(chapter);
  assert.equal(chapter.number, 12);
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 16);
  assert.ok(countFilmHistoryChapterWords(chapter) >= 4_000);

  const sectionIds = new Set(chapter.sections.map((section) => section.id));
  const sourceIds = new Set(chapter.sources.map((source) => source.id));
  assert.equal(sectionIds.size, chapter.sections.length);
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.every((source) => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some((source) => source.publisher === "Library of Congress"));
  assert.ok(chapter.sources.some((source) => /British Film Institute|BFI/.test(source.publisher)));
  for (const section of chapter.sections) {
    assert.ok(section.paragraphs.length >= 3, `Article ${section.id} has too few paragraphs`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.length >= 200), `Article ${section.id} is underdeveloped`);
    assert.ok(section.sourceIds.length >= 2, `Article ${section.id} needs independent source references`);
    for (const id of section.sourceIds) assert.ok(sourceIds.has(id), `Unknown Chapter 12 source ${id}`);
  }

  const linked = chapter.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const bookOnly = chapter.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.equal(linked.length, 17, "preserve 17 existing Chapter 12 Atlas scenarios");
  assert.equal(bookOnly.length, 9, "retain seven audited P2 comparisons and two book-only comparisons");
  assert.ok(linked.every((film) => film.atlasScenarioId?.startsWith("scenario_")));
  assert.equal(chapter.filmReferences.length, 26);
  assert.ok(chapter.historicalObjects.length >= 10);
  assert.ok(chapter.historicalObjects.every((item) => item.atlasDecision === "no_production_case"));
});

test("Chapter 13 adds sixteen sourced European film-history articles without adopting the mismatched postwar Atlas audit", () => {
  const chapter = getFilmHistoryBookChapter("europe-crisis");
  assert.ok(chapter);
  assert.equal(chapter.number, 13);
  assert.equal(chapter.period, "1930–1945");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 16);
  assert.ok(countFilmHistoryChapterWords(chapter) >= 4_000);
  assert.equal(chapter.sections.flatMap((s) => s.paragraphs).length, 48);

  const articleIds = new Set(chapter.sections.map((s) => s.id));
  const sourceIds = new Set(chapter.sources.map((s) => s.id));
  assert.equal(articleIds.size, 16);
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.length >= 25);
  assert.ok(chapter.sources.some((s) => /Holocaust Memorial Museum/.test(s.publisher)));
  assert.ok(chapter.sources.some((s) => /British Film Institute|BFI/.test(s.publisher)));
  assert.ok(chapter.sources.every((s) => s.url.startsWith("https://")));

  for (const section of chapter.sections) {
    assert.match(section.id, /^ch13_/);
    assert.equal(section.paragraphs.length, 3);
    assert.ok(section.paragraphs.every((text) => text.length >= 200));
    assert.ok(section.sourceIds.length >= 2);
    for (const id of section.sourceIds) assert.ok(sourceIds.has(id), `Unknown Chapter 13 source ${id}`);
  }

  assert.equal(chapter.filmReferences.length, 13);
  const atlasRefs = chapter.filmReferences.filter((f) => f.atlasDecision === "use_existing_atlas_case");
  assert.equal(atlasRefs.length, 1);
  assert.equal(atlasRefs[0]?.atlasScenarioId, "scenario_the_rules_of_the_game_1939");
  assert.equal(chapter.filmReferences.filter((f) => f.atlasDecision === "P2").length, 12);
  assert.ok(chapter.filmReferences.filter((f) => f.atlasDecision === "P2").every((f) => !f.atlasScenarioId));
  assert.ok(chapter.historicalObjects.length >= 10);
  assert.ok(chapter.historicalObjects.every((o) => o.atlasDecision === "no_production_case"));
});

test("Chapter 14 provides sixteen researched documentary animation and experimental film essays", () => {
  const chapter = getFilmHistoryBookChapter("documentary-animation-experiment");
  assert.ok(chapter);
  assert.equal(chapter.number, 14);
  assert.equal(chapter.period, "1920s–1945");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 16);
  assert.equal(chapter.sections.flatMap((s) => s.paragraphs).length, 48);
  assert.ok(countFilmHistoryChapterWords(chapter) >= 4_000);

  const articleIds = new Set(chapter.sections.map((s) => s.id));
  const sourceIds = new Set(chapter.sources.map((s) => s.id));
  assert.equal(articleIds.size, 16);
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.length >= 25);
  assert.ok(chapter.sources.some((s) => s.publisher === "Library of Congress"));
  assert.ok(chapter.sources.some((s) => /British Film Institute|BFI/.test(s.publisher)));
  assert.ok(chapter.sources.some((s) => s.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.every((s) => s.url.startsWith("https://")));

  const usedSourceIds = new Set(chapter.sections.flatMap((s) => s.sourceIds));
  assert.equal(usedSourceIds.size, chapter.sources.length);
  for (const section of chapter.sections) {
    assert.match(section.id, /^ch14_/);
    assert.equal(section.paragraphs.length, 3);
    assert.ok(section.paragraphs.every((text) => text.length >= 350));
    assert.ok(section.sourceIds.length >= 2);
    for (const id of section.sourceIds) assert.ok(sourceIds.has(id), `Unknown Chapter 14 source ${id}`);
  }

  const existing = chapter.filmReferences.filter((f) => f.atlasDecision === "use_existing_atlas_case");
  assert.deepEqual(
    existing.map((f) => [f.title, f.atlasScenarioId]).sort(),
    [
      ["Man with a Movie Camera", "scenario_man_with_a_movie_camera_1929"],
      ["Entr'acte", "scenario_entr_acte_1924"],
      ["Un Chien Andalou", "scenario_un_chien_andalou_1929"]
    ].sort()
  );
  const bookOnly = chapter.filmReferences.filter((f) => f.atlasDecision === "P2");
  assert.equal(bookOnly.length, 11);
  assert.ok(bookOnly.every((f) => !f.atlasScenarioId));
  assert.equal(chapter.filmReferences.length, 14);
  assert.ok(chapter.historicalObjects.length >= 12);
  assert.ok(chapter.historicalObjects.every((h) => h.atlasDecision === "no_production_case"));
});

test("Chapter 15 has sixteen sourced essays, verified existing Atlas references and no borrowed 1970s matrix", () => {
  const chapter = getFilmHistoryBookChapter("war-propaganda");
  assert.ok(chapter);
  assert.equal(chapter.number, 15);
  assert.equal(chapter.period, "1939–1945");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 16);
  assert.equal(chapter.sections.flatMap((s) => s.paragraphs).length, 48);
  assert.ok(countFilmHistoryChapterWords(chapter) >= 4_200);

  const sectionIds = new Set(chapter.sections.map((s) => s.id));
  const sourceIds = new Set(chapter.sources.map((s) => s.id));
  assert.equal(sectionIds.size, 16);
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.length >= 30);
  assert.ok(chapter.sources.some((s) => s.publisher === "Library of Congress"));
  assert.ok(chapter.sources.some((s) => /British Film Institute/.test(s.publisher)));
  assert.ok(chapter.sources.some((s) => /Holocaust Memorial Museum/.test(s.publisher)));
  assert.ok(chapter.sources.every((s) => s.url.startsWith("https://")));

  const usedIds = new Set(chapter.sections.flatMap((s) => s.sourceIds));
  assert.equal(usedIds.size, sourceIds.size);
  for (const section of chapter.sections) {
    assert.match(section.id, /^ch15_/);
    assert.equal(section.paragraphs.length, 3);
    assert.ok(section.paragraphs.every((text) => text.length >= 350));
    assert.ok(section.sourceIds.length >= 2);
    for (const id of section.sourceIds) assert.ok(sourceIds.has(id), `Unknown Chapter 15 source ${id}`);
  }

  assert.equal(chapter.filmReferences.length, 15);
  const existing = chapter.filmReferences.filter((f) => f.atlasDecision === "use_existing_atlas_case");
  assert.deepEqual(
    existing.map((f) => [f.title, f.atlasScenarioId]).sort(),
    [
      ["Casablanca", "scenario_casablanca_1942"],
      ["Rome, Open City", "scenario_rome_open_city_1945"],
    ].sort(),
  );
  const bookOnly = chapter.filmReferences.filter((f) => f.atlasDecision === "P2");
  assert.equal(bookOnly.length, 13);
  assert.ok(bookOnly.every((f) => f.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 12);
  assert.ok(chapter.historicalObjects.every((h) => h.atlasDecision === "no_production_case"));
});

test("Chapter 16 has sixteen sourced Italian neorealist film articles without reusing the unrelated 1980s Atlas audit", () => {
  const chapter = getFilmHistoryBookChapter("italian-neorealism");
  assert.ok(chapter);
  assert.equal(chapter.number, 16);
  assert.equal(chapter.period, "1943–1954");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 16);
  assert.equal(chapter.sections.flatMap((s) => s.paragraphs).length, 48);
  assert.ok(countFilmHistoryChapterWords(chapter) >= 4_300);

  const sectionIds = new Set(chapter.sections.map((s) => s.id));
  const sourceIds = new Set(chapter.sources.map((s) => s.id));
  assert.equal(sectionIds.size, 16);
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.equal(chapter.sources.length, 30);
  assert.ok(chapter.sources.some((s) => /British Film Institute|BFI/.test(s.publisher)));
  assert.ok(chapter.sources.some((s) => s.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.every((s) => s.url.startsWith("https://")));

  const used = new Set(chapter.sections.flatMap((s) => s.sourceIds));
  assert.equal(used.size, sourceIds.size);
  for (const section of chapter.sections) {
    assert.match(section.id, /^ch16_/);
    assert.equal(section.paragraphs.length, 3);
    assert.ok(section.paragraphs.every((p) => p.length >= 350));
    assert.ok(section.sourceIds.length >= 2);
    for (const id of section.sourceIds) assert.ok(sourceIds.has(id), `Unknown Chapter 16 source ${id}`);
  }

  const linked = chapter.filmReferences.filter((f) => f.atlasDecision === "use_existing_atlas_case");
  assert.deepEqual(
    linked.map((f) => [f.title, f.atlasScenarioId]).sort(),
    [
      ["Rome, Open City", "scenario_rome_open_city_1945"],
      ["Paisan", "scenario_paisan_1946"],
      ["Bicycle Thieves", "scenario_bicycle_thieves_1948"],
      ["La Strada", "scenario_la_strada_1954"],
    ].sort()
  );
  const bookOnly = chapter.filmReferences.filter((f) => f.atlasDecision === "P2");
  assert.equal(bookOnly.length, 11);
  assert.equal(chapter.filmReferences.length, 15);
  assert.ok(bookOnly.every((f) => f.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 12);
  assert.ok(chapter.historicalObjects.every((o) => o.atlasDecision === "no_production_case"));
});
