import assert from "node:assert/strict";
import test from "node:test";
import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan, TestScreeningResult } from "../domain/post.js";
import { STUDIO_CAREER_DRAMATURGY_IDS, getStudioCareerDramaturgyEffect } from "./studioCareerDramaturgy.js";
import { STUDIO_CAREER_DRAMATURGY_COPY } from "./studioCareerDramaturgyCopy.js";
import { runTestScreening, type ScriptCraftScores } from "./runTestScreening.js";

const project = {
  id: "dramaturgy_project", actorIds: ["actor_a", "actor_b"]
} as unknown as FilmProject;
const plan = {
  projectId: project.id, editDecisionIds: ["edit"],
  soundDecisionIds: ["sound"], musicDecisionIds: ["music"], colorDecisionIds: ["color"]
} as unknown as PostProductionPlan;
const script: ScriptCraftScores = { conflict: 75, pacing: 45, emotion: 65 };
const footage = { completedScenes: 8, missingScenes: 2, recordedScenes: 10 };

function screening(id?: typeof STUDIO_CAREER_DRAMATURGY_IDS[number], craft = script): TestScreeningResult {
  return runTestScreening(project, plan, undefined, undefined, 65,
    "balanced", craft, footage, undefined, id);
}

test("legacy careers and unselected dramaturgy keep identical baseline screening", () => {
  const baseline = runTestScreening(project, plan, undefined, undefined, 65, "balanced", script, footage);
  assert.deepEqual(screening(), baseline);
  assert.deepEqual(screening("original"), baseline);
  assert.deepEqual(getStudioCareerDramaturgyEffect("obsolete" as "scene_order"), getStudioCareerDramaturgyEffect());
});

test("each drama choice changes the real screening with understandable tradeoffs", () => {
  const old = screening("original");
  const turning = screening("turning_point");
  const conflict = screening("conflict");
  const suspense = screening("suspense");
  const sequence = screening("scene_order");

  assert.ok(turning.emotionScore > old.emotionScore);
  assert.ok(conflict.audienceHookScore > old.audienceHookScore);
  assert.ok(conflict.pacingScore < old.pacingScore);
  assert.ok(suspense.confusionRisk > old.confusionRisk);
  assert.ok(suspense.audienceHookScore > old.audienceHookScore);
  assert.ok(sequence.pacingScore > old.pacingScore);
  assert.notDeepEqual(sequence, old);
  for (const result of [turning, conflict, suspense, sequence]) {
    assert.match(result.notes.join(" "), /Dramaturgical revision/);
    for (const axis of ["clarityScore", "pacingScore", "emotionScore", "audienceHookScore", "confusionRisk"] as const) {
      assert.ok(result[axis] >= 0 && result[axis] <= 100);
    }
  }
});

test("real draft and incomplete recorded scenes inform the outcomes", () => {
  const strongConflict = getStudioCareerDramaturgyEffect("conflict", { conflict: 95, pacing: 55, emotion: 55 });
  const weakConflict = getStudioCareerDramaturgyEffect("conflict", { conflict: 20, pacing: 55, emotion: 55 });
  assert.ok(strongConflict.audienceHook > weakConflict.audienceHook);
  const complete = getStudioCareerDramaturgyEffect("scene_order", script, { ...footage, missingScenes: 0 });
  const incomplete = getStudioCareerDramaturgyEffect("scene_order", script, footage);
  assert.ok(complete.clarity > incomplete.clarity);
  assert.ok(complete.pacing > incomplete.pacing);
  assert.ok(getStudioCareerDramaturgyEffect("suspense", script, footage).clarity <
    getStudioCareerDramaturgyEffect("suspense", script).clarity);
});

test("dramaturgy remains four-language multiple choice, with real craft explanations", () => {
  for (const language of ["nb", "en", "fr", "pt"] as const) {
    const copy = STUDIO_CAREER_DRAMATURGY_COPY[language];
    assert.ok(copy.heading.length > 10);
    assert.ok(copy.note.length > 50);
    assert.ok(copy.scriptContext(80, 60).includes("80"));
    assert.ok(copy.footageContext(2).includes("2"));
    for (const id of STUDIO_CAREER_DRAMATURGY_IDS) {
      assert.ok(copy.options[id].title.length >= 10, language + ":" + id);
      assert.ok(copy.options[id].reason.length >= 20, language + ":" + id);
      assert.ok(copy.options[id].tradeoff.length >= 20, language + ":" + id);
    }
  }
});
