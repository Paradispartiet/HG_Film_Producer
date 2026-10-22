import assert from "node:assert/strict";
import { test } from "node:test";
import type { Scene } from "../domain/script.js";
import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan } from "../domain/post.js";
import type { ShootDay } from "../domain/shoot.js";
import { applyScriptProducerNote } from "./applyScriptProducerNote.js";
import { estimateSceneShootDifficulty } from "./estimateSceneShootDifficulty.js";
import { resolveShootDay } from "./resolveShootDay.js";
import { runTestScreening } from "./runTestScreening.js";

const scene = {
  id: "scene_one", conflictLevel: 50, emotionalWeight: 50, pacing: 50,
  techniqueIdsUsed: [], characterIds: []
} as unknown as Scene;
const day = {
  id: "day_one", sceneIds: [scene.id], eventIds: [], status: "planned", plannedCost: 10_000
} as unknown as ShootDay;

test("approved producer notes change the actual scenes seen by the shoot resolver", () => {
  const originalScenes = [scene];
  const character = applyScriptProducerNote(originalScenes, "character_depth");
  const stakes = applyScriptProducerNote(originalScenes, "dramatic_stakes");
  const momentum = applyScriptProducerNote(originalScenes, "scene_momentum");
  assert.equal(character[0]?.emotionalWeight, 66);
  assert.equal(stakes[0]?.conflictLevel, 66);
  assert.equal(momentum[0]?.pacing, 68);
  assert.ok(estimateSceneShootDifficulty(character[0]!).difficultyScore > estimateSceneShootDifficulty(scene).difficultyScore);
  assert.ok(resolveShootDay(day, stakes).takeQuality < resolveShootDay(day, originalScenes).takeQuality);
  assert.equal(resolveShootDay(day, character).costSpent, resolveShootDay(day, originalScenes).costSpent, "No hidden production cost");
  assert.deepEqual(originalScenes, [scene], "Approval never mutates source scenes");
});

const project = { id: "film_1", actorIds: ["lead", "partner"] } as unknown as FilmProject;
const plan = {
  projectId: project.id,
  editDecisionIds: ["edit_1"], soundDecisionIds: ["sound_1"],
  musicDecisionIds: ["music_1"], colorDecisionIds: ["color_1"]
} as unknown as PostProductionPlan;

test("screenings reflect distinct real screenplay axes, not just one overall script score", () => {
  const character = runTestScreening(project, plan, undefined, undefined, 60, "balanced", {
    conflict: 55, pacing: 43, emotion: 85
  });
  const stakes = runTestScreening(project, plan, undefined, undefined, 60, "balanced", {
    conflict: 85, pacing: 45, emotion: 55
  });
  const momentum = runTestScreening(project, plan, undefined, undefined, 60, "balanced", {
    conflict: 48, pacing: 88, emotion: 42
  });
  assert.ok(character.emotionScore > momentum.emotionScore);
  assert.ok(momentum.pacingScore > character.pacingScore);
  assert.ok(stakes.clarityScore > character.clarityScore);
  assert.ok(character.audienceHookScore > stakes.audienceHookScore);
  assert.ok(character.notes.some((note) => note.includes("Approved screenplay craft")));
});

test("legacy screenings remain unchanged without approved screenplay axes", () => {
  const old = runTestScreening(project, plan, undefined, undefined, 60, "balanced");
  const newOptional = runTestScreening(project, plan, undefined, undefined, 60, "balanced", undefined);
  assert.deepEqual(newOptional, old);
  assert.equal(old.notes.some((note) => note.includes("Approved screenplay craft")), false);
});
