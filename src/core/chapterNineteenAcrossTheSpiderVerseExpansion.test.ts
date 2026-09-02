import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenAcrossTheSpiderVerseExpansionDefinitions, mergeChapterNineteenAcrossTheSpiderVerseExpansion } from "./chapterNineteenAcrossTheSpiderVerseExpansion.js";

test("Across the Spider-Verse source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenAcrossTheSpiderVerseExpansionDefinitions.length, 1);
  const film = chapterNineteenAcrossTheSpiderVerseExpansionDefinitions[0];
  assert.equal(film.id, "scenario_spider_man_across_the_spider_verse_2023");
  assert.equal(film.title, "Spider-Man: Across the Spider-Verse");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 140);
  assert.deepEqual(film.directors, ["Joaquim Dos Santos", "Kemp Powers", "Justin K. Thompson"]);
  assert.match(film.scenarioType, /six_worlds/);
  assert.match(film.scenarioType, /600_plus_characters/);
  assert.match(film.scenarioType, /flixiverse_patchy_bomby_rebelle_kismet/);
  assert.ok(film.premise.includes("139m55s"));
  assert.ok(film.premise.includes("134m19s"));
  assert.ok(film.premise.includes("139m57s"));
  assert.ok(film.premise.includes("more than 600 new characters"));
  assert.ok(film.premise.includes("FlixiVerse"));
  assert.ok(film.premise.includes("Patchy Bomby"));
  assert.ok(film.premise.includes("Rebelle"));
  assert.ok(film.premise.includes("Kismet"));
  assert.ok(film.premise.includes("three years"));
  assert.ok(film.premise.includes("custom brush-stroking tool"));
  assert.ok(film.premise.includes("millions of brushes"));
  assert.ok(film.premise.includes("Xerox"));
  assert.ok(film.premise.includes("Indian and Indian-American artists"));
  assert.ok(film.premise.includes("Mike Andrews"));
  assert.ok(film.premise.includes("Daniel Pemberton"));
  assert.ok(film.premise.includes("Michael Semanick"));
  assert.ok(film.premise.includes("does not establish the complete final budget"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("flixiverse_virtual_scouting"));
  assert.ok(film.requiredChoicesSeed.editing.includes("storyboards_as_preproduction"));
  assert.ok(film.requiredChoicesSeed.sound.includes("score_world_palettes"));
});

test("Across the Spider-Verse expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenAcrossTheSpiderVerseExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_spider_man_across_the_spider_verse_2023");
  const twice = mergeChapterNineteenAcrossTheSpiderVerseExpansion(once);
  assert.equal(twice.length, 1);
});
