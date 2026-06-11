import assert from "node:assert/strict";
import test from "node:test";

import { applyProductionEvent } from "./applyProductionEvent.js";
import { createProductionSchedule } from "./createProductionSchedule.js";
import { estimateSceneShootDifficulty } from "./estimateSceneShootDifficulty.js";
import { evaluateShootResult } from "./evaluateShootResult.js";
import { resolveShootDay } from "./resolveShootDay.js";
import { createFilmProject } from "./createFilmProject.js";
import { asGenreId, asSceneFunctionId, asSceneId } from "../domain/ids.js";
import type { Scene } from "../domain/script.js";
import { loadFilmData } from "../data/filmData.js";

const project = createFilmProject({
  id: "film_project_shoot_test",
  title: "Shoot Test",
  genreId: asGenreId("genre_drama"),
  scale: "mid_budget",
  budget: 1_000_000
});

const scenes: readonly Scene[] = [
  {
    id: asSceneId("scene_shoot_one"),
    title: "First setup",
    functionId: asSceneFunctionId("scene_function_opening"),
    locationId: null,
    characterIds: [],
    mood: "controlled",
    conflictLevel: 30,
    pacing: 40,
    emotionalWeight: 35,
    techniqueIdsUsed: []
  },
  {
    id: asSceneId("scene_shoot_two"),
    title: "Difficult confrontation",
    functionId: asSceneFunctionId("scene_function_confrontation"),
    locationId: null,
    characterIds: [],
    mood: "volatile",
    conflictLevel: 90,
    pacing: 80,
    emotionalWeight: 90,
    techniqueIdsUsed: []
  }
];

test("production event seeds cover the required first shoot scenarios", () => {
  const events = loadFilmData().productionEvents;

  assert.equal(events.length, 16);
  assert.equal(new Set(events.map((event) => event.id)).size, events.length);
  assert.ok(events.some((event) => event.title === "Bad weather closes the set"));
  assert.ok(events.some((event) => event.title === "Safety pause"));
  assert.ok(events.some((event) => event.possibleUpside));
});

test("schedules group scenes, allocate the project budget, and do not mutate scenes", () => {
  const schedule = createProductionSchedule(project, scenes);

  assert.equal(schedule.totalPlannedDays, 1);
  assert.equal(schedule.shootDays[0]?.sceneIds.length, 2);
  assert.equal(schedule.plannedBudget + schedule.contingencyBudget, project.budget);
  assert.equal(schedule.shootDays.reduce((sum, day) => sum + day.plannedCost, 0), schedule.plannedBudget);
  assert.deepEqual(scenes.map((scene) => scene.techniqueIdsUsed), [[], []]);
});

test("difficulty responds to dramatic, technical, location, and cast pressure", () => {
  const easy = estimateSceneShootDifficulty(scenes[0] ?? fail(), { locationLogistics: 10, actorCount: 1 });
  const hard = estimateSceneShootDifficulty(scenes[1] ?? fail(), { locationLogistics: 90, actorCount: 6 });

  assert.ok(hard.difficultyScore > easy.difficultyScore);
  assert.equal(hard.locationLogistics, 90);
  assert.equal(hard.castLoad, 90);
  assert.ok(hard.difficultyScore <= 100);
});

test("events are applied immutably and duplicate applications have no second cost", () => {
  const schedule = createProductionSchedule(project, scenes);
  const shootDay = schedule.shootDays[0] ?? fail();
  const event = loadFilmData().productionEvents.find((candidate) => candidate.id === "production_event_transport_delay") ?? fail();
  const applied = applyProductionEvent(shootDay, event);
  const duplicate = applyProductionEvent(applied.shootDay, event);

  assert.equal(shootDay.status, "planned");
  assert.deepEqual(shootDay.eventIds, []);
  assert.equal(applied.shootDay.status, "delayed");
  assert.deepEqual(applied.shootDay.eventIds, [event.id]);
  assert.equal(duplicate.costDelta, 0);
  assert.equal(duplicate.delayDays, 0);
});

test("shoot resolution and evaluation account for event cost, delay, and upside", () => {
  const schedule = createProductionSchedule(project, scenes);
  const shootDay = schedule.shootDays[0] ?? fail();
  const events = loadFilmData().productionEvents;
  const delay = events.find((event) => event.id === "production_event_transport_delay") ?? fail();
  const upside = events.find((event) => event.id === "production_event_actor_improvisation") ?? fail();
  const withDelay = applyProductionEvent(shootDay, delay).shootDay;
  const withBoth = applyProductionEvent(withDelay, upside).shootDay;
  const result = resolveShootDay(withBoth, scenes, events);
  const evaluation = evaluateShootResult(project, schedule, [result]);

  assert.equal(result.scheduleDeltaDays, 1);
  assert.equal(result.costSpent, shootDay.plannedCost + delay.costImpact + upside.costImpact);
  assert.deepEqual(result.completedSceneIds, shootDay.sceneIds);
  assert.equal(evaluation.completedDays, 1);
  assert.equal(evaluation.delayedDays, 1);
  assert.ok(evaluation.overall >= 0 && evaluation.overall <= 100);
});

function fail(): never {
  throw new Error("Missing test fixture.");
}
