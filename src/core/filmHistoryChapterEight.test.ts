import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterEight, filmHistoryChapterEightSources } from "./filmHistoryChapterEight.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";

const canonicalUseExistingScenarioIds = [
  "scenario_the_passion_of_joan_of_arc_1928",
  "scenario_coeur_fidele_1923",
  "scenario_napoleon_1927",
  "scenario_un_chien_andalou_1929",
  "scenario_the_smiling_madame_beudet_1923",
  "scenario_entr_acte_1924",
] as const;

const canonicalUseExistingTitles = [
  "The Passion of Joan of Arc",
  "Cœur fidèle",
  "Napoléon",
  "Un Chien Andalou",
  "The Smiling Madame Beudet",
  "Entr'acte",
] as const;

const canonicalP2Titles = [
  "Ballet mécanique",
  "Emak-Bakia",
  "L'Inhumaine",
  "L'Âge d'Or",
  "L'Étoile de mer",
  "La Coquille et le Clergyman",
  "La Roue",
  "Ménilmontant",
  "The Fall of the House of Usher",
] as const;

const historicalObjectLabels = [
  "Photogénie and French Impressionist film theory",
  "Film criticism, journals, ciné-clubs and specialist cinemas",
  "Independent producers, patrons and alternative financing",
  "Dada and Surrealist artist networks",
  "Cinéma pur and abstract moving-image practice",
  "Alternative exhibition and event cinema",
  "Cross-art production design and modernist collaboration",
  "Gender, authorship and unequal canon formation",
  "Censorship, scandal and representational harm",
  "Restoration, alternate cuts and reconstructed accompaniment",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterEight.summary,
    ...filmHistoryChapterEight.learningObjectives,
    ...filmHistoryChapterEight.keyTerms,
    ...filmHistoryChapterEight.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterEight.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterEight.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

function sorted<T extends string>(values: readonly T[]): T[] {
  return [...values].sort((left, right) => left.localeCompare(right));
}

test("Chapter 8 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterEight.id, "french-avant-gardes");
  assert.equal(filmHistoryChapterEight.number, 8);
  assert.equal(filmHistoryChapterEight.title, "French Impressionism, Surrealism and the avant-gardes");
  assert.equal(filmHistoryChapterEight.period, "1918–1930");
  assert.equal(filmHistoryChapterEight.status, "full");
  assert.equal(filmHistoryChapterEight.sections.length, 15);
  assert.ok(filmHistoryChapterEight.learningObjectives.length >= 14);
  assert.ok(filmHistoryChapterEight.keyTerms.length >= 25);

  const ids = filmHistoryChapterEight.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch8_")));
  for (const section of filmHistoryChapterEight.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30000, "Chapter 8 full text is too thin for the canonical full gate");
});

test("Chapter 8 source bank is complete, unique, HTTPS and actually used", () => {
  assert.ok(filmHistoryChapterEightSources.length >= 40);
  assert.equal(new Set(filmHistoryChapterEightSources.map((source) => source.id)).size, filmHistoryChapterEightSources.length);
  assert.equal(new Set(filmHistoryChapterEightSources.map((source) => source.url)).size, filmHistoryChapterEightSources.length);
  const sourceIds = new Set(filmHistoryChapterEightSources.map((source) => source.id));
  const usedSourceIds = new Set(filmHistoryChapterEight.sections.flatMap((section) => section.sourceIds));
  for (const source of filmHistoryChapterEightSources) {
    assert.match(source.id, /^ch8_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
    assert.ok(usedSourceIds.has(source.id), `unused Chapter 8 source: ${source.id}`);
  }
  for (const section of filmHistoryChapterEight.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 8 preserves the completed six-case Atlas matrix and nine P2 comparisons", () => {
  const useExisting = filmHistoryChapterEight.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const p2 = filmHistoryChapterEight.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.deepEqual(sorted(useExisting.map((film) => film.title)), sorted(canonicalUseExistingTitles));
  assert.deepEqual(sorted(useExisting.map((film) => film.atlasScenarioId ?? "")), sorted(canonicalUseExistingScenarioIds));
  assert.deepEqual(sorted(p2.map((film) => film.title)), sorted(canonicalP2Titles));
  assert.ok(p2.every((film) => film.atlasScenarioId === undefined));
  assert.equal(filmHistoryChapterEight.filmReferences.length, 15);
  assert.equal(filmHistoryChapterEight.filmReferences.some((film) => film.atlasDecision === "P0" || film.atlasDecision === "P1"), false);
});

test("Chapter 8 theory and institutions remain historical context, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterEight.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterEight.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 90);
  }
});

test("Chapter 8 keeps historiographic, ethical, authorship and version safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /not one anti-commercial style|remain plural|intersecting historical formations/i);
  assert.match(text, /photogénie[\s\S]{0,2400}not.*preset|cannot responsibly be implemented as a numeric/i);
  assert.match(text, /Dulac[\s\S]{0,4200}feminist[\s\S]{0,4200}authorship|gender, authorship/i);
  assert.match(text, /La Coquille[\s\S]{0,4200}Artaud[\s\S]{0,4200}authorship|authorship conflict/i);
  assert.match(text, /Un Chien Andalou[\s\S]{0,5200}injur|animal[\s\S]{0,2200}gameplay/i);
  assert.match(text, /Napoléon[\s\S]{0,5200}Opéra|Apollo[\s\S]{0,5200}restoration|Grande Version/i);
  assert.match(text, /Entr'acte[\s\S]{0,4200}1967[\s\S]{0,4200}restor/i);
  assert.match(text, /sound[\s\S]{0,3200}did not instantly erase silent craft|silent-era accompaniment[\s\S]{0,3200}synchronized/i);
});

test("canonical book resolves Chapter 8 as full without changing the thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  assert.equal(getFilmHistoryBookChapter("french-avant-gardes"), filmHistoryChapterEight);
});
