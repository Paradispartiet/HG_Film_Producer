import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { tasteOfCherryFilmHistoryProfile } from "./scenarioFilmStudyMinimalistRoadTasteOfCherry";

const tasteOfCherryDonorScenarioIds = [
  "scenario_stranger_than_paradise_1984",
  "scenario_paris_texas_1984",
  "scenario_nebraska_2013",
] as const;

export function getTasteOfCherryFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === tasteOfCherryFilmHistoryProfile.scenarioId
    ? tasteOfCherryFilmHistoryProfile
    : undefined;
}

export function getTasteOfCherryDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === tasteOfCherryFilmHistoryProfile.scenarioId
    ? tasteOfCherryDonorScenarioIds
    : undefined;
}
