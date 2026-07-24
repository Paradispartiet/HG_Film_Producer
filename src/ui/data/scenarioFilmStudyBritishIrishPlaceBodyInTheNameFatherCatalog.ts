import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { inTheNameOfTheFatherFilmHistoryProfile } from "./scenarioFilmStudyBritishIrishPlaceBodyInTheNameFather";

const inTheNameOfTheFatherDonorScenarioIds = [
  "scenario_hunger_2008",
  "scenario_kes_1969",
  "scenario_naked_1993",
] as const;

export function getInTheNameOfTheFatherFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === inTheNameOfTheFatherFilmHistoryProfile.scenarioId
    ? inTheNameOfTheFatherFilmHistoryProfile
    : undefined;
}

export function getInTheNameOfTheFatherDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === inTheNameOfTheFatherFilmHistoryProfile.scenarioId
    ? inTheNameOfTheFatherDonorScenarioIds
    : undefined;
}
