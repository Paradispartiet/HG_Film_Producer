import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { trueRomanceFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirTrueRomance";

const trueRomanceDonorScenarioIds = [
  "scenario_band_of_outsiders_1964",
  "scenario_out_of_the_past_1947",
  "scenario_the_maltese_falcon_1941",
] as const;

export function getTrueRomanceFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === trueRomanceFilmHistoryProfile.scenarioId
    ? trueRomanceFilmHistoryProfile
    : undefined;
}

export function getTrueRomanceDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === trueRomanceFilmHistoryProfile.scenarioId
    ? trueRomanceDonorScenarioIds
    : undefined;
}
