import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { beforeSunriseFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunrise";
import { mysteryTrainFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingMysteryTrain";
import { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";
import { viveLAmourFilmHistoryProfile } from "./scenarioFilmStudyEastAsianViveLAmour";

const beforeSunriseDonors = [
  mysteryTrainFilmHistoryProfile,
  scenesFromAMarriageFilmHistoryProfile,
  viveLAmourFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBeforeSunriseFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === beforeSunriseFilmHistoryProfile.scenarioId
    ? beforeSunriseFilmHistoryProfile
    : undefined;
}

export function getBeforeSunriseFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === beforeSunriseFilmHistoryProfile.scenarioId
    ? beforeSunriseDonors
    : undefined;
}
