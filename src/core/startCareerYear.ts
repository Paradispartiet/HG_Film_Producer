import type { CareerState, CareerYear } from "../domain/career.js";

/** Move to a year and create its opening snapshot once. */
export function startCareerYear(careerState: CareerState, year: number): CareerState {
  if (careerState.years.some((careerYear) => careerYear.year === year)) {
    return careerState.currentYear === year
      ? careerState
      : { ...careerState, currentYear: year, currentQuarter: "q1" };
  }

  const careerYear: CareerYear = {
    year,
    startingMoney: careerState.studio.money,
    endingMoney: careerState.studio.money,
    expenses: [],
    income: [],
    completedFilmIds: [],
    reputationStart: careerState.studio.reputation,
    reputationEnd: careerState.studio.reputation,
    prestigeStart: careerState.studio.prestige,
    prestigeEnd: careerState.studio.prestige,
    notes: ["Career year opened."]
  };

  return {
    ...careerState,
    currentYear: year,
    currentQuarter: "q1",
    years: [...careerState.years, careerYear].sort((left, right) => left.year - right.year),
    notes: [...careerState.notes, `Started career year ${year}.`]
  };
}
