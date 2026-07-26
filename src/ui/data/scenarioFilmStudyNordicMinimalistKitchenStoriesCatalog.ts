import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { forceMajeureFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorForceMajeure";
import { matchFactoryGirlFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistMatchFactoryGirl";
import { songsFromSecondFloorFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistSongsFromSecondFloor";
import { kitchenStoriesFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistKitchenStories";

const donors = [
  matchFactoryGirlFilmHistoryProfile,
  songsFromSecondFloorFilmHistoryProfile,
  forceMajeureFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getKitchenStoriesFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === kitchenStoriesFilmHistoryProfile.scenarioId
    ? kitchenStoriesFilmHistoryProfile
    : undefined;
}

export function getKitchenStoriesFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === kitchenStoriesFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
