import assert from "node:assert/strict";
import test from "node:test";
import { chapterSeventeenTheWhiteBalloonExpansionDefinitions, mergeChapterSeventeenTheWhiteBalloonExpansion } from "./chapterSeventeenTheWhiteBalloonExpansion.js";

const definition = chapterSeventeenTheWhiteBalloonExpansionDefinitions[0];

test("The White Balloon source-first definition locks identity and runtime", () => {
  assert.equal(definition.id, "scenario_the_white_balloon_1995");
  assert.equal(definition.title, "The White Balloon");
  assert.equal(definition.originalTitle, "Badkonak-e sefid");
  assert.equal(definition.year, 1995);
  assert.equal(definition.runtimeMins, 85);
  assert.deepEqual(definition.directors, ["Jafar Panahi"]);
  assert.equal(definition.learningGoals.length, 17);
  assert.equal(definition.phases.length, 10);
});

test("The White Balloon preserves institutional and authorship boundaries", () => {
  assert.match(definition.premise, /IRIB Channel Two/);
  assert.match(definition.premise, /Ferdos Films/);
  assert.match(definition.premise, /Farabi Cinema Foundation/);
  assert.match(definition.premise, /Abbas Kiarostami/);
  assert.match(definition.premise, /Parviz Shahbazi/);
  assert.match(definition.premise, /Farzad Jodat/);
  assert.match(definition.premise, /Mehdi Dejbodi/);
  assert.match(definition.premise, /real time/);
});

test("The White Balloon keeps child-performance evidence inside modern welfare safeguards", () => {
  assert.ok(definition.learningGoals.some((goal) => goal.includes("script-in-snippets") && goal.includes("historical evidence")));
  assert.ok(definition.learningGoals.some((goal) => goal.includes("guardian consent") && goal.includes("regulated hours")));
  const childPhase = definition.phases.find((phase) => phase.id === "child_casting_and_welfare");
  assert.ok(childPhase);
  assert.match(childPhase.player_task, /guardian consent/);
  assert.match(childPhase.player_task, /welfare supervision/);
});

test("The White Balloon refuses unsupported technical precision and preserves version variance", () => {
  assert.match(definition.premise, /do not establish a camera body, lens set, film stock, exposure, lighting diagram, lab process or sound hardware/);
  assert.match(definition.premise, /85 minutes canonically/);
  assert.match(definition.premise, /ACMI's 82-minute holding/);
  assert.ok(definition.learningGoals.some((goal) => goal.includes("Avoid invented budget, schedule, crew-size")));
});

test("The White Balloon merge is deterministic and deduplicates title aliases", () => {
  const merged = mergeChapterSeventeenTheWhiteBalloonExpansion([]);
  assert.equal(merged.length, 1);
  const first = merged[0];
  assert.ok(first);
  assert.equal(first.id, "scenario_the_white_balloon_1995");
  assert.equal(first.status, "manual_chapter_seventeen_the_white_balloon_verified");
  const second = mergeChapterSeventeenTheWhiteBalloonExpansion(merged);
  assert.equal(second.length, 1);
});
