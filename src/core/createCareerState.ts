import type { CareerState, CareerYear } from "../domain/career.js";
import type { Studio } from "../domain/film.js";

const DEFAULT_STARTING_YEAR = 1;

/** Create an immutable career ledger around an existing studio. */
export function createCareerState(studio: Studio, startingYear = DEFAULT_STARTING_YEAR): CareerState {
  const firstYear: CareerYear = {
    year: startingYear,
    startingMoney: studio.money,
    endingMoney: studio.money,
    expenses: [],
    income: [],
    completedFilmIds: [],
    reputationStart: studio.reputation,
    reputationEnd: studio.reputation,
    prestigeStart: studio.prestige,
    prestigeEnd: studio.prestige,
    notes: ["Career year opened."]
  };

  return {
    studio,
    currentYear: startingYear,
    currentQuarter: "q1",
    years: [firstYear],
    completedFilms: [],
    activeStrategicGoalIds: [],
    achievedMilestoneIds: [],
    identityTags: [],
    notes: [`Career started in year ${startingYear}.`]
  };
}
