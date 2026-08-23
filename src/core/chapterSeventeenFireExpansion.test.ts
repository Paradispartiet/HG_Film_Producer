import assert from "node:assert/strict";
import test from "node:test";
import { chapterSeventeenFireExpansionDefinitions, mergeChapterSeventeenFireExpansion } from "./chapterSeventeenFireExpansion.js";

const definition = chapterSeventeenFireExpansionDefinitions[0];

test("Fire source-first definition locks identity and runtime", () => {
  assert.equal(definition.id, "scenario_fire_1996");
  assert.equal(definition.title, "Fire");
  assert.equal(definition.year, 1996);
  assert.equal(definition.runtimeMins, 104);
  assert.deepEqual(definition.directors, ["Deepa Mehta"]);
  assert.equal(definition.learningGoals.length, 17);
  assert.equal(definition.phases.length, 10);
});

test("Fire preserves production-company, craft and language boundaries", () => {
  assert.match(definition.premise, /Trial by Fire Films/);
  assert.match(definition.premise, /Kaleidescope India/);
  assert.match(definition.premise, /Giles Nuttgens/);
  assert.match(definition.premise, /Aradhana Seth/);
  assert.match(definition.premise, /Barry Farrell/);
  assert.match(definition.premise, /Konrad Skreta/);
  assert.match(definition.premise, /A\.R\. Rahman/);
  assert.match(definition.premise, /late language decision/);
});

test("Fire refuses unsupported camera and intimacy-process precision", () => {
  assert.match(definition.premise, /do not establish a complete camera body, lens set, stock, exposure, filtration, lab or lighting package/);
  assert.ok(definition.learningGoals.some((goal) => goal.includes("explicit consent") && goal.includes("labor protections")));
  assert.ok(definition.learningGoals.some((goal) => goal.includes("Do not infer historical intimacy-coordination methods")));
});

test("Fire keeps production separate from downstream controversy and runtime variance", () => {
  assert.ok(definition.learningGoals.some((goal) => goal.includes("later festival awards, protests, censorship and distribution controversies")));
  assert.match(definition.premise, /104 minutes canonically/);
  assert.match(definition.premise, /108-minute/);
});

test("Fire merge is deterministic", () => {
  const merged = mergeChapterSeventeenFireExpansion([]);
  assert.equal(merged.length, 1);
  const first = merged[0];
  assert.ok(first);
  assert.equal(first.id, "scenario_fire_1996");
  assert.equal(first.status, "manual_chapter_seventeen_fire_verified");
  const second = mergeChapterSeventeenFireExpansion(merged);
  assert.equal(second.length, 1);
});
