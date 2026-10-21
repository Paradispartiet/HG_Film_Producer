import assert from "node:assert/strict";

import { careerRunActions } from "../src/ui/state/careerRunState.js";
import { createProjectSetupRun, projectSetupData } from "../src/ui/demo/createProjectSetupRun.js";
import { createProjectRunContext } from "../src/ui/demo/createProjectRunContext.js";
import { createScriptDevelopmentResult } from "../src/ui/demo/createDevelopmentStepRun.js";
import {
  createPreProductionResult,
  getActorCandidates,
  getCrewCandidatesByDiscipline,
  getPreProductionLocationOptions,
} from "../src/ui/demo/createPreProductionStepRun.js";
import { getShootPreparation, resolveNextShootDay } from "../src/ui/demo/createShootStepRun.js";
import { createPostProductionStepResult, getPostProductionOptions } from "../src/ui/demo/createPostProductionStepRun.js";
import { createReleaseStepResult, getReleaseStepOptions } from "../src/ui/demo/createReleaseStepRun.js";

function requireFirst<T>(items: readonly T[], label: string): T {
  const item = items[0];
  assert.ok(item, `Missing ${label} fixture`);
  return item;
}


/** Build a genuine completed Film One using every production phase. No test-only
 * data shape is invented: this is also the browser resume fixture.
 */
export function buildCompletedFilmOneCareerState() {
  const initialOptions = projectSetupData;
  const startingRun = createProjectSetupRun({
    studioName: "Career Journey Test",
    startingMoneyPreset: "indie_studio",
    strategicGoalId: requireFirst(initialOptions.strategicGoals, "goal").id,
    projectTitle: "First Film",
    genreId: requireFirst(initialOptions.genres, "genre").id,
    scale: "indie",
    scriptTemplateId: requireFirst(initialOptions.scriptTemplates, "script").id,
  });
  const context = createProjectRunContext(startingRun);
  let state = careerRunActions.startStudio(startingRun);
  const filmOneId = requireFirst(state.projects, "Film One").id;
  const development = createScriptDevelopmentResult(context);
  state = careerRunActions.applyDevelopmentAction(state, filmOneId, development);
  state = careerRunActions.finishDevelopment(state, filmOneId);
  assert.ok(state.projects[0]?.developmentResult);

  const location = requireFirst(getPreProductionLocationOptions(context, development), "location");
  const crew = getCrewCandidatesByDiscipline(development, context.careerState)
    .map((group) => requireFirst(group.candidates, group.discipline).id);
  const actors = getActorCandidates(development, context.careerState).slice(0, 2).map((actor) => actor.id);
  assert.equal(actors.length, 2);
  const preProduction = createPreProductionResult(context, development, {
    locationId: location.id,
    crewMemberIds: crew,
    actorIds: actors,
  });
  state = careerRunActions.lockPreProduction(state, filmOneId, preProduction);

  const shoot = getShootPreparation(context, development, preProduction);
  const event = requireFirst(shoot.availableProductionEvents, "production event").event.id;
  const numberOfDays = shoot.productionSchedule.shootDays.length;
  assert.ok(numberOfDays > 0);
  const firstDay = resolveNextShootDay(shoot, [], { selectedProductionEventId: event });
  state = careerRunActions.resolveShootDay(state, filmOneId, firstDay);
  assert.equal(state.projects[0]?.shootDayResults.length, 1);
  const noReplay = careerRunActions.resolveShootDay(state, filmOneId, firstDay);
  assert.equal(noReplay, state, "Double-click on the same shoot day must not replay the day");

  let completedDays = [firstDay];
  for (let day = 1; day < numberOfDays; day += 1) {
    const result = resolveNextShootDay(shoot, completedDays, { selectedProductionEventId: event });
    state = careerRunActions.resolveShootDay(state, filmOneId, result);
    completedDays = [...completedDays, result];
  }
  const shootResult = state.projects[0]?.shootResult;
  assert.ok(shootResult, "All shooting days should yield an evaluated shoot");

  const finishing = getPostProductionOptions();
  const postProduction = createPostProductionStepResult(context, preProduction, shootResult, {
    editDecisionId: requireFirst(finishing.editDecisions, "edit").id,
    soundDecisionId: requireFirst(finishing.soundDecisions, "sound").id,
    musicDecisionId: requireFirst(finishing.musicDecisions, "music").id,
    colorDecisionId: requireFirst(finishing.colorDecisions, "color").id,
    trailerStrategyId: requireFirst(finishing.trailerStrategies, "trailer").id,
  });
  state = careerRunActions.lockPostProduction(state, filmOneId, postProduction);

  const distribution = getReleaseStepOptions();
  const released = createReleaseStepResult(context, development, preProduction, shootResult, postProduction, {
    releaseStrategyId: requireFirst(distribution.releaseStrategies, "strategy").id,
    festivalId: requireFirst(distribution.festivals, "festival").id,
  });
  state = careerRunActions.releaseFilm(state, filmOneId, released);
  state = careerRunActions.applyCareerResult(state, filmOneId);
  const applied = state.projects[0]?.careerApplicationResult;
  assert.ok(applied);
  assert.equal(applied.updatedCareerState.completedFilms.length, 1);
  assert.equal(applied.completedFilmRecord.projectId, context.filmProjectState.id);
  const finishedFilmOne = state.projects[0];
  assert.ok(finishedFilmOne);

  return { state, context, applied, filmOneId, finishedFilmOne };
}
