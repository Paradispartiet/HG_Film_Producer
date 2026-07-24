import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { cinemaParadisoFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoeticMemoryCinemaParadiso";

const cinemaParadisoDonorScenarioIds = [
  "scenario_amarcord_1973",
  "scenario_the_spirit_of_the_beehive_1973",
  "scenario_landscape_in_the_mist_1988",
] as const;

export function getCinemaParadisoFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === cinemaParadisoFilmHistoryProfile.scenarioId
    ? cinemaParadisoFilmHistoryProfile
    : undefined;
}

export function getCinemaParadisoDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === cinemaParadisoFilmHistoryProfile.scenarioId
    ? cinemaParadisoDonorScenarioIds
    : undefined;
}
