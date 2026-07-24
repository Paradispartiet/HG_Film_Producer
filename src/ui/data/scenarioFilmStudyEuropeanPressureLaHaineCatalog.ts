import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { laHaineFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureLaHaine";

const laHaineDonorScenarioIds = [
  "scenario_the_measure_of_a_man_2015",
  "scenario_revanche_2008",
  "scenario_the_hunt_2012",
] as const;

export function getLaHaineFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === laHaineFilmHistoryProfile.scenarioId
    ? laHaineFilmHistoryProfile
    : undefined;
}

export function getLaHaineDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === laHaineFilmHistoryProfile.scenarioId
    ? laHaineDonorScenarioIds
    : undefined;
}
