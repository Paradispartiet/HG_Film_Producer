import assert from "node:assert/strict";
import test from "node:test";

import type { CareerMilestone, CompletedFilmRecord, StudioExpense, StudioIncome } from "../domain/career.js";
import {
  asCareerMilestoneId,
  asFilmProjectId,
  asGenreId,
  asStudioExpenseId,
  asStudioIncomeId
} from "../domain/ids.js";
import { loadFilmData } from "../data/filmData.js";
import { advanceCareerQuarter } from "./advanceCareerQuarter.js";
import { applyCareerMilestone } from "./applyCareerMilestone.js";
import { applyStudioExpense } from "./applyStudioExpense.js";
import { applyStudioIncome } from "./applyStudioIncome.js";
import { createCareerState } from "./createCareerState.js";
import { createStudio } from "./createStudio.js";
import { evaluateCareerYear } from "./evaluateCareerYear.js";
import { evaluateStudioIdentity } from "./evaluateStudioIdentity.js";
import { recordCompletedFilm } from "./recordCompletedFilm.js";
import { selectNextStrategicGoal } from "./selectNextStrategicGoal.js";

const expense: StudioExpense = {
  id: asStudioExpenseId("studio_expense_test_office"),
  title: "Test office",
  category: "office",
  amount: 20_000,
  recurring: true,
  quarter: "q1",
  note: "Test fixture."
};

const income: StudioIncome = {
  id: asStudioIncomeId("studio_income_test_release"),
  title: "Test release",
  amount: 80_000,
  sourceProjectId: asFilmProjectId("film_project_test"),
  quarter: "q1",
  note: "Test fixture."
};

const film: CompletedFilmRecord = {
  projectId: asFilmProjectId("film_project_test"),
  title: "Test Film",
  year: 1,
  genreId: asGenreId("genre_drama"),
  scale: "indie",
  quality: 78,
  audienceAppeal: 68,
  criticalAppeal: 82,
  grossRevenue: 900_000,
  netRevenue: 80_000,
  awardsWon: 1,
  reputationDelta: 8,
  prestigeDelta: 6,
  identityTags: ["arthouse", "local"]
};

test("career cashflow and filmography remain immutable and feed evaluations", () => {
  const studio = createStudio({ name: "Test Studio", startingMoney: 200_000 });
  const initial = createCareerState(studio, 1);
  const withIncome = applyStudioIncome(initial, income);
  const withExpense = applyStudioExpense(withIncome, expense);
  const withFilm = recordCompletedFilm(withExpense, film);

  assert.equal(initial.studio.money, 200_000);
  assert.equal(withFilm.studio.money, 260_000);
  assert.equal(withFilm.completedFilms.length, 1);
  assert.equal(recordCompletedFilm(withFilm, film), withFilm);

  const year = evaluateCareerYear(withFilm, 1);
  assert.equal(year.profit, 60_000);
  assert.equal(year.filmsCompleted, 1);
  assert.equal(year.awardMomentum, 25);

  const identity = evaluateStudioIdentity(withFilm);
  assert.ok(identity.strongestTags.includes("arthouse"));
  assert.ok(identity.identityTags.includes("low_budget"));
  assert.equal(identity.craftScore, 78);
});

test("quarter advancement opens a single next-year snapshot", () => {
  let career = createCareerState(createStudio({ name: "Quarter Studio" }), 1);
  career = advanceCareerQuarter(career);
  career = advanceCareerQuarter(career);
  career = advanceCareerQuarter(career);
  career = advanceCareerQuarter(career);

  assert.equal(career.currentYear, 2);
  assert.equal(career.currentQuarter, "q1");
  assert.deepEqual(career.years.map((year) => year.year), [1, 2]);
});

test("milestones apply rewards once after requirements are met", () => {
  const milestone: CareerMilestone = {
    id: asCareerMilestoneId("career_milestone_test_first_film"),
    title: "First film",
    description: "Complete one film.",
    requiredMoney: 0,
    requiredReputation: 0,
    requiredPrestige: 0,
    requiredCompletedFilms: 1,
    requiredIdentityTags: ["arthouse"],
    rewards: { money: 10_000, reputation: 2, identityTags: ["prestige"] },
    note: "Test fixture."
  };
  const initial = createCareerState(createStudio({ name: "Milestone Studio" }), 1);
  const unmet = applyCareerMilestone(initial, milestone);
  assert.equal(unmet.rewardsApplied, false);

  const eligible = recordCompletedFilm(initial, film);
  const achieved = applyCareerMilestone(eligible, milestone);
  const repeated = applyCareerMilestone(achieved.careerState, milestone);

  assert.equal(achieved.rewardsApplied, true);
  assert.equal(achieved.careerState.studio.money, initial.studio.money + 10_000);
  assert.ok(achieved.careerState.identityTags.includes("prestige"));
  assert.equal(repeated.alreadyAchieved, true);
  assert.equal(repeated.careerState, achieved.careerState);
});


test("career seed catalogues provide stable gameplay coverage", () => {
  const data = loadFilmData();
  assert.equal(data.studioExpenses.length, 11);
  assert.equal(data.careerMilestones.length, 12);
  assert.equal(data.strategicGoals.length, 10);
  assert.equal(new Set(data.studioExpenses.map((item) => item.id)).size, data.studioExpenses.length);
  assert.equal(new Set(data.careerMilestones.map((item) => item.id)).size, data.careerMilestones.length);
  assert.equal(new Set(data.strategicGoals.map((item) => item.id)).size, data.strategicGoals.length);
});

test("strategic goals activate only once", () => {
  const goal = loadFilmData().strategicGoals[0];
  assert.ok(goal);
  const initial = createCareerState(createStudio({ name: "Goal Studio" }), 1);
  const selected = selectNextStrategicGoal(initial, goal);
  const repeated = selectNextStrategicGoal(selected.careerState, goal);

  assert.equal(selected.alreadyActive, false);
  assert.equal(selected.careerState.activeStrategicGoalIds.length, 1);
  assert.equal(repeated.alreadyActive, true);
  assert.equal(repeated.careerState, selected.careerState);
});
