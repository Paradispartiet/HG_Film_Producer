import assert from "node:assert/strict";
import test from "node:test";
import { careerRunActions } from "../src/ui/state/careerRunState.js";
import { createNextProjectStepResult, getNextProjectOptions } from "../src/ui/demo/createNextProjectStepRun.js";
import { buildCompletedFilmOneCareerState } from "./studio-career-lifecycle-setup.js";

function requireFirst<T>(items: readonly T[], label: string): T {
  const item = items[0];
  assert.ok(item, `Missing ${label} fixture`);
  return item;
}

test("real six-phase Film One continues into Film Two without losing historical progress", () => {
  const { state: completedState, context, applied, filmOneId, finishedFilmOne } = buildCompletedFilmOneCareerState();
  let state = completedState;
  const nextOptions = getNextProjectOptions();
  const nextRun = createNextProjectStepResult(context, applied, {
    projectTitle: "Second Film",
    genreId: requireFirst(nextOptions.genres, "Film Two genre").id,
    scriptTemplateId: requireFirst(nextOptions.scriptTemplates, "Film Two script").id,
    scale: "indie",
  });
  state = careerRunActions.startNextProject(state, nextRun);
  assert.equal(state.projects.length, 2);
  const filmTwo = state.projects[1];
  assert.ok(filmTwo);
  assert.equal(filmTwo.projectNumber, 2);
  assert.equal(filmTwo.run.project.title, "Second Film");
  assert.equal(filmTwo.developmentResult, null);
  assert.deepEqual(filmTwo.run.pipelineSteps[0]?.label, "Studio carried forward");
  assert.equal(filmTwo.run.pipelineSteps.at(-1)?.score, 10);

  const duplicate = careerRunActions.startNextProject(state, nextRun);
  assert.equal(duplicate, state, "Rapid duplicate Next Film actions must not create Film Three");
  const staleEdit = careerRunActions.selectDevelopmentPath(state, filmOneId, "script");
  assert.equal(staleEdit, state, "Editing film history must never erase Film Two");
  const replay = careerRunActions.applyCareerResult(state, filmOneId);
  assert.equal(replay, state, "Historical career result must not apply twice");
  const activeChoice = careerRunActions.selectDevelopmentPath(state, filmTwo.id, "script");
  assert.notEqual(activeChoice, state);
  assert.equal(activeChoice.projects[0], finishedFilmOne);
  assert.equal(activeChoice.projects.length, 2);
  assert.equal(activeChoice.projects[1]?.selectedDevelopmentPath, "script");

  const restored = JSON.parse(JSON.stringify(activeChoice)) as typeof activeChoice;
  assert.equal(restored.projects[0]?.careerApplicationResult?.updatedCareerState.completedFilms.length, 1);
  assert.equal(restored.projects[1]?.selectedDevelopmentPath, "script");
});
