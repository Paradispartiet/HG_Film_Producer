import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { clockersFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirClockers";

const clockersDonorScenarioIds = [
  "scenario_the_lost_weekend_1945",
  "scenario_out_of_the_past_1947",
  "scenario_band_of_outsiders_1964",
] as const;

export function getClockersFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === clockersFilmHistoryProfile.scenarioId
    ? clockersFilmHistoryProfile
    : undefined;
}

export function getClockersDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === clockersFilmHistoryProfile.scenarioId
    ? clockersDonorScenarioIds
    : undefined;
}
