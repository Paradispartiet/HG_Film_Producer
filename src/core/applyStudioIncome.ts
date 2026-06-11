import type { CareerState, StudioIncome } from "../domain/career.js";

/** Add studio income and append it to the current career-year ledger. */
export function applyStudioIncome(careerState: CareerState, income: StudioIncome): CareerState {
  const money = careerState.studio.money + income.amount;

  return {
    ...careerState,
    studio: { ...careerState.studio, money },
    years: careerState.years.map((careerYear) => careerYear.year === careerState.currentYear
      ? {
          ...careerYear,
          endingMoney: money,
          income: [...careerYear.income, income],
          reputationEnd: careerState.studio.reputation,
          prestigeEnd: careerState.studio.prestige
        }
      : careerYear)
  };
}
