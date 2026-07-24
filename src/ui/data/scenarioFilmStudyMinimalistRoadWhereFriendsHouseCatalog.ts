import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import {
  getTasteOfCherryDonorScenarioIds,
  getTasteOfCherryFilmHistoryProfile,
} from "./scenarioFilmStudyMinimalistRoadTasteOfCherryCatalog";
import { whereIsTheFriendsHouseFilmHistoryProfile } from "./scenarioFilmStudyMinimalistRoadWhereFriendsHouse";

const whereIsTheFriendsHouseDonorScenarioIds = [
  "scenario_stranger_than_paradise_1984",
  "scenario_paris_texas_1984",
  "scenario_nebraska_2013",
] as const;

export function getWhereIsTheFriendsHouseFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return getTasteOfCherryFilmHistoryProfile(scenarioId)
    ?? (scenarioId === whereIsTheFriendsHouseFilmHistoryProfile.scenarioId
      ? whereIsTheFriendsHouseFilmHistoryProfile
      : undefined);
}

export function getWhereIsTheFriendsHouseDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return getTasteOfCherryDonorScenarioIds(profile)
    ?? (profile.scenarioId === whereIsTheFriendsHouseFilmHistoryProfile.scenarioId
      ? whereIsTheFriendsHouseDonorScenarioIds
      : undefined);
}
