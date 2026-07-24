import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { satantangoFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentitySatantango";

const satantangoDonorScenarioIds = [
  "scenario_the_white_ribbon_2009",
  "scenario_run_lola_run_1998",
  "scenario_the_vanishing_1988",
] as const;

export function getSatantangoFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === satantangoFilmHistoryProfile.scenarioId
    ? satantangoFilmHistoryProfile
    : undefined;
}

export function getSatantangoDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === satantangoFilmHistoryProfile.scenarioId
    ? satantangoDonorScenarioIds
    : undefined;
}
