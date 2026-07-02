import type { CareerState, StudioExpense } from "../domain/career.js";
import { applyStudioExpense } from "./applyStudioExpense.js";

export interface DueStudioExpensesResult {
  readonly careerState: CareerState;
  readonly appliedExpenses: readonly StudioExpense[];
}

/**
 * Apply the studio expenses due for the career state's current quarter.
 * Recurring expenses fire every year; one-time expenses fire only in year 1,
 * since later years have already absorbed their one-time setup cost.
 */
export function applyDueStudioExpenses(
  careerState: CareerState,
  expenses: readonly StudioExpense[]
): DueStudioExpensesResult {
  const dueExpenses = expenses.filter((expense) =>
    expense.quarter === careerState.currentQuarter
      && (expense.recurring || careerState.currentYear === 1));

  const updatedCareerState = dueExpenses.reduce(
    (state, expense) => applyStudioExpense(state, expense),
    careerState
  );

  return { careerState: updatedCareerState, appliedExpenses: dueExpenses };
}
