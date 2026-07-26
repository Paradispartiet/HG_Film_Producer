import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { kitchenStoriesFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistKitchenStories";
import { matchFactoryGirlFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistMatchFactoryGirl";
import { noiTheAlbinoFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistNoiAlbino";
import { osloAugust31stFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistOsloAugust31st";

const donors = [
  matchFactoryGirlFilmHistoryProfile,
  kitchenStoriesFilmHistoryProfile,
  osloAugust31stFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getNoiTheAlbinoFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === noiTheAlbinoFilmHistoryProfile.scenarioId
    ? noiTheAlbinoFilmHistoryProfile
    : undefined;
}

export function getNoiTheAlbinoFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === noiTheAlbinoFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
