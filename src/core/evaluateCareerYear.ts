import type { CareerState, CareerYearEvaluation } from "../domain/career.js";

/** Score one career year from its ledger, studio growth, output, and award momentum. */
export function evaluateCareerYear(careerState: CareerState, year: number): CareerYearEvaluation {
  const careerYear = careerState.years.find((candidate) => candidate.year === year);
  if (!careerYear) {
    throw new Error(`Career year ${year} does not exist.`);
  }

  const income = careerYear.income.reduce((sum, entry) => sum + entry.amount, 0);
  const expenses = careerYear.expenses.reduce((sum, entry) => sum + entry.amount, 0);
  const profit = income - expenses;
  const cashHealth = clamp(50 + careerYear.endingMoney / 40_000 + profit / 20_000);
  const reputationGrowth = careerYear.reputationEnd - careerYear.reputationStart;
  const prestigeGrowth = careerYear.prestigeEnd - careerYear.prestigeStart;
  const yearFilms = careerState.completedFilms.filter((film) =>
    careerYear.completedFilmIds.includes(film.projectId));
  const filmsCompleted = yearFilms.length;
  const awardsWon = yearFilms.reduce((sum, film) => sum + film.awardsWon, 0);
  const awardMomentum = clamp(awardsWon * 25 + Math.max(0, prestigeGrowth) * 5);
  const profitScore = clamp(50 + profit / 20_000);
  const growthScore = clamp(50 + reputationGrowth * 5 + prestigeGrowth * 6);
  const outputScore = clamp(filmsCompleted * 35);
  const overall = clamp(
    cashHealth * 0.3 + profitScore * 0.25 + growthScore * 0.2
      + outputScore * 0.15 + awardMomentum * 0.1
  );

  return {
    year,
    profit,
    cashHealth,
    reputationGrowth,
    prestigeGrowth,
    filmsCompleted,
    awardMomentum,
    overall,
    notes: [
      "Profit is recorded income minus recorded studio expenses.",
      "Overall weights cash health 30%, profit 25%, reputation/prestige growth 20%, output 15%, and awards 10%."
    ]
  };
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
