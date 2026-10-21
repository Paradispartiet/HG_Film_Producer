import assert from "node:assert/strict";
import { test } from "node:test";
import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan } from "../domain/post.js";
import { getStudioCareerEditingApproach } from "./studioCareerEditingApproach.js";
import { runTestScreening } from "./runTestScreening.js";

const project = {
  id: "editing_tradeoff_project",
  actorIds: ["actor_1", "actor_2"]
} as unknown as FilmProject;
const plan = {
  projectId: project.id,
  editDecisionIds: ["edit_1"],
  soundDecisionIds: ["sound_1"],
  musicDecisionIds: ["music_1"],
  colorDecisionIds: ["color_1"]
} as unknown as PostProductionPlan;

test("editing approaches alter the actual screening rather than just the description", () => {
  const baseline = runTestScreening(project, plan);
  const story = runTestScreening(project, plan, undefined, undefined, undefined, "story_first");
  const bold = runTestScreening(project, plan, undefined, undefined, undefined, "bold_cut");
  assert.ok(story.clarityScore > baseline.clarityScore);
  assert.ok(story.pacingScore > baseline.pacingScore);
  assert.ok(story.emotionScore < baseline.emotionScore);
  assert.ok(bold.clarityScore < baseline.clarityScore);
  assert.ok(bold.pacingScore < baseline.pacingScore);
  assert.ok(bold.emotionScore > baseline.emotionScore);
  assert.ok(bold.audienceHookScore > baseline.audienceHookScore);
  assert.ok(story.confusionRisk < bold.confusionRisk);
  assert.match(story.notes.join(" "), /story_first/);
  assert.match(bold.notes.join(" "), /bold_cut/);
});

test("balanced and legacy saves preserve the precise old behavior", () => {
  const baseline = runTestScreening(project, plan, undefined, undefined, 55);
  const balanced = runTestScreening(project, plan, undefined, undefined, 55, "balanced");
  assert.deepEqual(balanced, baseline);
  assert.deepEqual(getStudioCareerEditingApproach(undefined), getStudioCareerEditingApproach("balanced"));
  assert.deepEqual(
    getStudioCareerEditingApproach("no-longer-supported" as "bold_cut"),
    getStudioCareerEditingApproach("balanced")
  );
});

test("script readiness still applies and all scores remain in bounds", () => {
  for (const approach of ["balanced", "story_first", "bold_cut"] as const) {
    const strong = runTestScreening(project, plan, undefined, undefined, 90, approach);
    const weak = runTestScreening(project, plan, undefined, undefined, 10, approach);
    assert.ok(strong.clarityScore > weak.clarityScore);
    for (const screening of [strong, weak]) {
      for (const key of ["clarityScore", "pacingScore", "emotionScore", "audienceHookScore", "confusionRisk"] as const) {
        assert.ok(screening[key] >= 0 && screening[key] <= 100);
      }
    }
  }
});
