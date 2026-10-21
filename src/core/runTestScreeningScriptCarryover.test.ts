import assert from "node:assert/strict";
import { test } from "node:test";
import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan } from "../domain/post.js";
import { runTestScreening } from "./runTestScreening.js";

const project = {
  id: "script_screening_project",
  actorIds: ["actor_1", "actor_2"]
} as unknown as FilmProject;

const plan = {
  projectId: project.id,
  editDecisionIds: ["edit_1"],
  soundDecisionIds: ["sound_1"],
  musicDecisionIds: ["music_1"],
  colorDecisionIds: ["color_1"]
} as unknown as PostProductionPlan;

test("script evidence changes actual test-screening outcome in both directions", () => {
  const strong = runTestScreening(project, plan, undefined, undefined, 90);
  const weak = runTestScreening(project, plan, undefined, undefined, 20);
  for (const key of ["clarityScore", "pacingScore", "emotionScore", "audienceHookScore"] as const) {
    assert.ok(strong[key] > weak[key], `${key} should respond to script craft evidence`);
    assert.ok(strong[key] >= 0 && strong[key] <= 100);
    assert.ok(weak[key] >= 0 && weak[key] <= 100);
  }
  assert.ok(strong.confusionRisk < weak.confusionRisk);
  assert.match(strong.notes.join(" "), /90\/100/);
  assert.match(weak.notes.join(" "), /20\/100/);
});

test("legacy screenings are unchanged when no script draft is supplied", () => {
  const legacy = runTestScreening(project, plan);
  const neutral = runTestScreening(project, plan, undefined, undefined, 55);
  for (const key of ["clarityScore", "pacingScore", "emotionScore", "audienceHookScore", "confusionRisk"] as const) {
    assert.equal(neutral[key], legacy[key]);
  }
  assert.equal(legacy.notes.length, 2);
  assert.equal(neutral.notes.length, 3);
  assert.deepEqual(legacy.recommendedChanges, neutral.recommendedChanges);
});

test("out-of-range and invalid draft scores cannot escape the score bounds", () => {
  const capped = runTestScreening(project, plan, undefined, undefined, 200);
  const hundred = runTestScreening(project, plan, undefined, undefined, 100);
  assert.equal(capped.clarityScore, hundred.clarityScore);
  const invalid = runTestScreening(project, plan, undefined, undefined, Number.NaN);
  assert.deepEqual(invalid, runTestScreening(project, plan));
});
