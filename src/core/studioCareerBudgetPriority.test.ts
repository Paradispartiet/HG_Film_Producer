import assert from "node:assert/strict";
import { test } from "node:test";
import type { ProductionTeamEvaluation } from "../domain/crew.js";
import type { FilmProject } from "../domain/film.js";
import { calculateFilmResult } from "./calculateFilmResult.js";
import { applyBudgetPriority, previewBudgetPriority } from "./studioCareerBudgetPriority.js";

const project = {
  id: "budget_choice_project", scale: "indie", budget: 800_000,
  crewMemberIds: ["director", "camera", "editor"],
  actorIds: ["actor_1", "actor_2"],
  locationIds: ["location_1"], techniqueIdsUsed: []
} as unknown as FilmProject;
const original: ProductionTeamEvaluation = {
  projectId: project.id,
  crewScore: 65, castScore: 65, chemistryScore: 55,
  reliabilityScore: 68, budgetPressure: 35, overall: 65, notes: ["Baseline"]
};

test("funded priorities improve different craft measures with a real additional film cost", () => {
  const reserve = applyBudgetPriority(original, project.budget, "reserve");
  const cast = applyBudgetPriority(original, project.budget, "cast_focus");
  const crew = applyBudgetPriority(original, project.budget, "crew_focus");

  assert.equal(reserve.teamEvaluation, original, "Holding reserve must be a genuine no-spend baseline");
  assert.equal(reserve.budgetPriority.investmentCost, 0);
  assert.equal(cast.budgetPriority.investmentCost, 48_000);
  assert.equal(crew.budgetPriority.investmentCost, 48_000);
  assert.equal(cast.teamEvaluation.castScore, 74);
  assert.equal(cast.teamEvaluation.chemistryScore, 59);
  assert.equal(cast.teamEvaluation.crewScore, original.crewScore);
  assert.equal(crew.teamEvaluation.crewScore, 74);
  assert.equal(crew.teamEvaluation.reliabilityScore, 72);
  assert.equal(crew.teamEvaluation.castScore, original.castScore);
  assert.equal(crew.teamEvaluation.budgetPressure, original.budgetPressure);

  const baselineFilm = calculateFilmResult(project, reserve.teamEvaluation);
  const castFilm = calculateFilmResult(project, cast.teamEvaluation, undefined, cast.budgetPriority.investmentCost);
  const crewFilm = calculateFilmResult(project, crew.teamEvaluation, undefined, crew.budgetPriority.investmentCost);
  assert.equal(castFilm.budgetSpent - baselineFilm.budgetSpent, 48_000);
  assert.equal(crewFilm.budgetSpent - baselineFilm.budgetSpent, 48_000);
  assert.ok(castFilm.audienceAppeal > baselineFilm.audienceAppeal);
  assert.ok(crewFilm.quality > baselineFilm.quality);
  assert.equal(castFilm.budgetSpent, crewFilm.budgetSpent);
  assert.equal(calculateFilmResult(project, original).budgetSpent, baselineFilm.budgetSpent);
});

test("priorities are bounded, optional, deterministic and safe without a budget", () => {
  assert.equal(previewBudgetPriority(0, "cast_focus"), 0);
  assert.equal(previewBudgetPriority(-1, "crew_focus"), 0);
  assert.equal(previewBudgetPriority(Number.NaN, "cast_focus"), 0);
  assert.equal(previewBudgetPriority(800_000), 0);
  assert.deepEqual(applyBudgetPriority(original, project.budget), applyBudgetPriority(original, project.budget, "reserve"));
  assert.equal(applyBudgetPriority(original, 0, "crew_focus").teamEvaluation, original);
  const nearCap = { ...original, castScore: 98, chemistryScore: 99 };
  const boosted = applyBudgetPriority(nearCap, project.budget, "cast_focus");
  assert.equal(boosted.teamEvaluation.castScore, 100);
  assert.equal(boosted.teamEvaluation.chemistryScore, 100);
  assert.equal(boosted.budgetPriority.castGain, 2);
  assert.equal(boosted.budgetPriority.chemistryGain, 1);
  assert.throws(() => calculateFilmResult(project, original, undefined, -10), /finite non-negative/);
});

test("reserve preserves previously calculated film results exactly", () => {
  const existing = calculateFilmResult(project, original);
  const newSave = applyBudgetPriority(original, project.budget, "reserve");
  assert.deepEqual(calculateFilmResult(project, newSave.teamEvaluation, undefined, newSave.budgetPriority.investmentCost), existing);
});
