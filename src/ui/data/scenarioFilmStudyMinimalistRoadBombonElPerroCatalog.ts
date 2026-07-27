import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { bombonElPerroFilmHistoryProfile } from "./scenarioFilmStudyMinimalistRoadBombonElPerro";
import {
  getWhereIsTheFriendsHouseDonorScenarioIds,
  getWhereIsTheFriendsHouseFilmHistoryProfile,
} from "./scenarioFilmStudyMinimalistRoadWhereFriendsHouseCatalog";

const bombonElPerroDonorScenarioIds = [
  "scenario_stranger_than_paradise_1984",
  "scenario_paris_texas_1984",
  "scenario_nebraska_2013",
] as const;

export function getBombonElPerroFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return getWhereIsTheFriendsHouseFilmHistoryProfile(scenarioId)
    ?? (scenarioId === bombonElPerroFilmHistoryProfile.scenarioId
      ? bombonElPerroFilmHistoryProfile
      : undefined);
}

export function getBombonElPerroDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return getWhereIsTheFriendsHouseDonorScenarioIds(profile)
    ?? (profile.scenarioId === bombonElPerroFilmHistoryProfile.scenarioId
      ? bombonElPerroDonorScenarioIds
      : undefined);
}
