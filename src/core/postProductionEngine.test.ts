import assert from "node:assert/strict";
import test from "node:test";

import { loadFilmData } from "../data/filmData.js";
import { asActorId, asGenreId } from "../domain/ids.js";
import { applyColorDecision } from "./applyColorDecision.js";
import { applyEditDecision } from "./applyEditDecision.js";
import { applyMusicDecision } from "./applyMusicDecision.js";
import { applySoundDecision } from "./applySoundDecision.js";
import { calculateFilmResult } from "./calculateFilmResult.js";
import { createFilmProject } from "./createFilmProject.js";
import { createPostProductionPlan } from "./createPostProductionPlan.js";
import { createTrailerCut } from "./createTrailerCut.js";
import { evaluatePostProduction } from "./evaluatePostProduction.js";
import { runTestScreening } from "./runTestScreening.js";

const data = loadFilmData();
const project = {
  ...createFilmProject({
    id: "film_project_post_test",
    title: "Post Test",
    genreId: asGenreId("genre_drama"),
    scale: "indie",
    budget: 800_000
  }),
  actorIds: [asActorId("actor_post_test")]
};

const edit = data.editDecisions[0] ?? fail();
const sound = data.soundDecisions[0] ?? fail();
const music = data.musicDecisions[0] ?? fail();
const color = data.colorDecisions[0] ?? fail();
const trailerStrategy = data.trailerStrategies[0] ?? fail();

test("post-production seed catalogues provide stable professional coverage", () => {
  assert.equal(data.editDecisions.length, 8);
  assert.equal(data.soundDecisions.length, 6);
  assert.equal(data.musicDecisions.length, 6);
  assert.equal(data.colorDecisions.length, 6);
  assert.equal(data.trailerStrategies.length, 7);

  const allIds = [
    ...data.editDecisions,
    ...data.soundDecisions,
    ...data.musicDecisions,
    ...data.colorDecisions,
    ...data.trailerStrategies
  ].map((entry) => entry.id);
  assert.equal(new Set(allIds).size, allIds.length);
});

test("craft decisions apply immutably and duplicate applications have no second cost", () => {
  const initial = createPostProductionPlan(project);
  const first = applyEditDecision(initial, edit);
  const duplicate = applyEditDecision(first.plan, edit);

  assert.equal(initial.status, "planned");
  assert.deepEqual(initial.editDecisionIds, []);
  assert.equal(first.plan.status, "editing");
  assert.deepEqual(first.plan.editDecisionIds, [edit.id]);
  assert.equal(first.costDelta, edit.cost);
  assert.equal(duplicate.alreadyApplied, true);
  assert.equal(duplicate.costDelta, 0);
  assert.equal(duplicate.plan, first.plan);
});

test("screening, trailer, and post evaluation are deterministic and bounded", () => {
  let plan = createPostProductionPlan(project);
  plan = applyEditDecision(plan, edit).plan;
  plan = applySoundDecision(plan, sound).plan;
  plan = applyMusicDecision(plan, music).plan;
  plan = applyColorDecision(plan, color).plan;

  const screening = runTestScreening(project, plan);
  const repeatedScreening = runTestScreening(project, plan);
  const trailer = createTrailerCut(project, plan, trailerStrategy);
  const evaluation = evaluatePostProduction(
    project,
    plan,
    { edits: [edit], sound: [sound], music: [music], color: [color] },
    screening,
    trailer
  );

  assert.deepEqual(screening, repeatedScreening);
  for (const score of [
    screening.clarityScore,
    screening.pacingScore,
    screening.emotionScore,
    screening.audienceHookScore,
    evaluation.lockedCutQuality,
    evaluation.overall
  ]) {
    assert.ok(score >= 0 && score <= 100);
  }
  assert.equal(evaluation.totalCost, edit.cost + sound.cost + music.cost + color.cost + trailer.cost);
});

test("film results remain backward compatible and account for post cost and quality", () => {
  const plan = applyColorDecision(
    applyMusicDecision(
      applySoundDecision(
        applyEditDecision(createPostProductionPlan(project), edit).plan,
        sound
      ).plan,
      music
    ).plan,
    color
  ).plan;
  const screening = runTestScreening(project, plan);
  const trailer = createTrailerCut(project, plan, trailerStrategy);
  const post = evaluatePostProduction(
    project,
    plan,
    { edits: [edit], sound: [sound], music: [music], color: [color] },
    screening,
    trailer
  );
  const baseline = calculateFilmResult(project);
  const withPost = calculateFilmResult(project, undefined, post);

  assert.equal(withPost.budgetSpent, baseline.budgetSpent + post.totalCost);
  assert.ok(withPost.quality >= baseline.quality);
});

function fail(): never {
  throw new Error("Missing post-production test fixture.");
}
