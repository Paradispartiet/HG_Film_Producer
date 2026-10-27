import assert from "node:assert/strict";
import test from "node:test";
import type { FilmProject } from "../domain/film.js";
import type { MusicDecision, PostProductionPlan, SoundDecision } from "../domain/post.js";
import { runTestScreening } from "./runTestScreening.js";

const project = { id: "sound_music_craft", actorIds: ["lead"] } as unknown as FilmProject;
const plan = {
  projectId: project.id, editDecisionIds: ["edit"], soundDecisionIds: ["sound"],
  musicDecisionIds: ["music"], colorDecisionIds: ["color"]
} as unknown as PostProductionPlan;

const sound = (id: string, clarityEffect: number, immersionEffect: number): SoundDecision =>
  ({ id, clarityEffect, immersionEffect, statChanges: {} }) as unknown as SoundDecision;
const music = (id: string, emotionEffect: number, identityEffect: number, pacing = 0): MusicDecision =>
  ({ id, emotionEffect, identityEffect, statChanges: { pacing } }) as unknown as MusicDecision;

test("selected sound and music decisions change the measured screening, not just the final craft grade", () => {
  const reference = runTestScreening(project, plan);
  const restrained = runTestScreening(project, plan, undefined, undefined, undefined, "balanced",
    undefined, undefined, { sound: sound("soft", 2, 2), music: music("quiet", -2, 1) });
  const crafted = runTestScreening(project, plan, undefined, undefined, undefined, "balanced",
    undefined, undefined, { sound: sound("clear_dialogue", 15, 13), music: music("pulse", 15, 13, 9) });
  assert.ok(crafted.clarityScore > restrained.clarityScore);
  assert.ok(crafted.pacingScore > restrained.pacingScore);
  assert.ok(crafted.emotionScore > restrained.emotionScore);
  assert.ok(crafted.audienceHookScore > restrained.audienceHookScore);
  assert.ok(crafted.confusionRisk < restrained.confusionRisk);
  assert.ok(crafted.notes.some(note => note.includes("clear_dialogue") && note.includes("pulse")));
  assert.ok(!reference.notes.some(note => note.includes("Selected sound mix")));
});

test("craft values are clamped and absent legacy decisions keep the original result", () => {
  const old = runTestScreening(project, plan, undefined, undefined, 50);
  assert.deepEqual(old, runTestScreening(project, plan, undefined, undefined, 50, "balanced"));
  const extreme = runTestScreening(project, plan, undefined, undefined, 90, "bold_cut",
    undefined, undefined, { sound: sound("extreme", 400, 400), music: music("extreme", 400, 400, 400) });
  for (const key of ["clarityScore", "pacingScore", "emotionScore", "audienceHookScore", "confusionRisk"] as const) {
    assert.ok(extreme[key] >= 0 && extreme[key] <= 100);
  }
});
