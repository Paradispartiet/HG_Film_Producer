import assert from "node:assert/strict";
import { test } from "node:test";
import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan } from "../domain/post.js";
import { runTestScreening } from "./runTestScreening.js";
import { getStudioCareerFootageContinuityPenalty, getStudioCareerFootageEvidence } from "./studioCareerFootageEditing.js";

const day = (done: string[], delayed: string[], takeQuality: number) => ({
  shootDayResult: { completedSceneIds: done, delayedSceneIds: delayed, takeQuality }
});

test("edit-room evidence uses confirmed scenes and later recovered footage", () => {
  const footage = getStudioCareerFootageEvidence([
    day(["one"], ["two"], 75),
    day(["two"], ["three"], 48),
    day(["four"], [], 81)
  ]);
  assert.deepEqual(footage, {
    recordedScenes: 4, completedScenes: 3, missingScenes: 1,
    lowestQualityDay: { dayNumber: 2, takeQuality: 48 }
  });
  assert.equal(getStudioCareerFootageContinuityPenalty(footage, "balanced"), 3);
  assert.equal(getStudioCareerFootageContinuityPenalty(footage, "story_first"), 2);
});

test("legacy reports without real scene lists do not invent missing footage", () => {
  assert.equal(getStudioCareerFootageEvidence([]), undefined);
  assert.equal(getStudioCareerFootageEvidence([{}]), undefined);
  assert.equal(getStudioCareerFootageEvidence([
    { shootDayResult: { completedSceneIds: ["one"] } }
  ]), undefined);
  assert.equal(getStudioCareerFootageEvidence([
    { shootDayResult: { completedSceneIds: ["one"], delayedSceneIds: [], takeQuality: NaN } }
  ])?.lowestQualityDay, undefined);
  assert.equal(getStudioCareerFootageContinuityPenalty(undefined, "bold_cut"), 0);
});

test("gaps change the screening; complete footage keeps the legacy score", () => {
  const project = { id: "film", actorIds: [] } as unknown as FilmProject;
  const plan = { projectId: "film", editDecisionIds: ["edit"], soundDecisionIds: ["sound"],
    musicDecisionIds: ["music"], colorDecisionIds: ["color"] } as unknown as PostProductionPlan;
  const full = getStudioCareerFootageEvidence([day(["a", "b", "c"], [], 80)]);
  const gaps = getStudioCareerFootageEvidence([day(["a", "b"], ["c"], 80)]);
  const base = runTestScreening(project, plan);
  const same = runTestScreening(project, plan, undefined, undefined, undefined, "balanced", undefined, full);
  const limited = runTestScreening(project, plan, undefined, undefined, undefined, "balanced", undefined, gaps);
  const story = runTestScreening(project, plan, undefined, undefined, undefined, "story_first", undefined, gaps);
  const storyBaseline = runTestScreening(project, plan, undefined, undefined, undefined, "story_first");
  assert.deepEqual(same, base);
  assert.equal(limited.clarityScore, base.clarityScore - 4);
  assert.equal(limited.pacingScore, base.pacingScore - 4);
  assert.equal(story.clarityScore, storyBaseline.clarityScore - 2);
  assert.equal(story.pacingScore, storyBaseline.pacingScore - 2);
  assert.match(limited.notes.join(" "), /recorded scenes/);
});
