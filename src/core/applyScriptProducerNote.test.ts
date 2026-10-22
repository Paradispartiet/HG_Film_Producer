import assert from "node:assert/strict";
import { test } from "node:test";
import type { Scene } from "../domain/script.js";
import { applyScriptProducerNote, SCRIPT_PRODUCER_NOTE_IDS } from "./applyScriptProducerNote.js";

const scene = { conflictLevel: 45, pacing: 52, emotionalWeight: 58, techniqueIdsUsed: [] } as unknown as Scene;

test("producer script notes offer distinct narrative tradeoffs without mutating the draft", () => {
  const original = [scene];
  const character = applyScriptProducerNote(original, "character_depth")[0]!;
  const stakes = applyScriptProducerNote(original, "dramatic_stakes")[0]!;
  const momentum = applyScriptProducerNote(original, "scene_momentum")[0]!;
  assert.equal(character.emotionalWeight, 74);
  assert.equal(character.pacing, 44);
  assert.equal(stakes.conflictLevel, 61);
  assert.equal(stakes.pacing, 48);
  assert.equal(momentum.pacing, 70);
  assert.equal(momentum.conflictLevel, 40);
  assert.deepEqual(original, [scene]);
  assert.equal(applyScriptProducerNote(original), original);
  assert.deepEqual(SCRIPT_PRODUCER_NOTE_IDS, ["character_depth", "dramatic_stakes", "scene_momentum"]);
});

test("script note revisions clamp the evaluation dials to 0–100", () => {
  const extreme = { ...scene, pacing: 95, conflictLevel: 97, emotionalWeight: 4 } as Scene;
  const character = applyScriptProducerNote([extreme], "character_depth")[0]!;
  const stakes = applyScriptProducerNote([extreme], "dramatic_stakes")[0]!;
  const momentum = applyScriptProducerNote([extreme], "scene_momentum")[0]!;
  assert.equal(stakes.conflictLevel, 100);
  assert.equal(momentum.pacing, 100);
  assert.equal(character.emotionalWeight, 20);
  assert.throws(() => applyScriptProducerNote([scene], "camera_angle" as never), /Unknown script note/);
});
