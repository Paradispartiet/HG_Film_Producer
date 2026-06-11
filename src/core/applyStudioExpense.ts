import type { CareerState, StudioExpense } from "../domain/career.js";

/** Deduct an operating expense and append it to the current career-year ledger. */
export function applyStudioExpense(careerState: CareerState, expense: StudioExpense): CareerState {
  const money = careerState.studio.money - expense.amount;

  return {
    ...careerState,
    studio: { ...careerState.studio, money },
    years: careerState.years.map((careerYear) => careerYear.year === careerState.currentYear
      ? {
          ...careerYear,
          endingMoney: money,
          expenses: [...careerYear.expenses, expense],
          reputationEnd: careerState.studio.reputation,
          prestigeEnd: careerState.studio.prestige
        }
      : careerYear)
  };
}
