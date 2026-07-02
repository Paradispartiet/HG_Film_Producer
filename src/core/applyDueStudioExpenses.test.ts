import assert from "node:assert/strict";
import test from "node:test";

import type { StudioExpense } from "../domain/career.js";
import { asStudioExpenseId } from "../domain/ids.js";
import { applyDueStudioExpenses } from "./applyDueStudioExpenses.js";
import { createCareerState } from "./createCareerState.js";
import { createStudio } from "./createStudio.js";
import { startCareerYear } from "./startCareerYear.js";

const recurringRent: StudioExpense = {
  id: asStudioExpenseId("studio_expense_test_rent"),
  title: "Rent",
  category: "office",
  amount: 24_000,
  recurring: true,
  quarter: "q1",
  note: "Test fixture."
};

const oneTimeSlate: StudioExpense = {
  id: asStudioExpenseId("studio_expense_test_slate"),
  title: "Development slate",
  category: "development",
  amount: 40_000,
  recurring: false,
  quarter: "q1",
  note: "Test fixture."
};

const marketingRetainer: StudioExpense = {
  id: asStudioExpenseId("studio_expense_test_marketing"),
  title: "Marketing retainer",
  category: "marketing",
  amount: 28_000,
  recurring: true,
  quarter: "q4",
  note: "Test fixture."
};

const allExpenses = [recurringRent, oneTimeSlate, marketingRetainer];

test("applyDueStudioExpenses charges recurring and one-time expenses due in year 1", () => {
  const studio = createStudio({ name: "Test Studio", startingMoney: 500_000 });
  const careerState = createCareerState(studio, 1);

  const result = applyDueStudioExpenses(careerState, allExpenses);

  assert.deepEqual(result.appliedExpenses.map((expense) => expense.id), [recurringRent.id, oneTimeSlate.id]);
  assert.equal(result.careerState.studio.money, 500_000 - 24_000 - 40_000);

  const year = result.careerState.years.find((entry) => entry.year === 1);
  assert.equal(year?.expenses.length, 2);
});

test("applyDueStudioExpenses skips one-time expenses after year 1 but keeps charging recurring ones", () => {
  const studio = createStudio({ name: "Test Studio", startingMoney: 500_000 });
  const yearTwoState = startCareerYear(createCareerState(studio, 1), 2);

  const result = applyDueStudioExpenses(yearTwoState, allExpenses);

  assert.deepEqual(result.appliedExpenses.map((expense) => expense.id), [recurringRent.id]);
  assert.equal(result.careerState.studio.money, 500_000 - 24_000);
});

test("applyDueStudioExpenses ignores expenses due in a different quarter", () => {
  const studio = createStudio({ name: "Test Studio", startingMoney: 500_000 });
  const careerState = createCareerState(studio, 1);

  const result = applyDueStudioExpenses(careerState, [marketingRetainer]);

  assert.equal(result.appliedExpenses.length, 0);
  assert.equal(result.careerState.studio.money, 500_000);
});
