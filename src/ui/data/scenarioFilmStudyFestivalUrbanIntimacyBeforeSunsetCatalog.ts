import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { beforeSunsetFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunset";
import { beforeSunriseFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunrise";
import { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";
import { viveLAmourFilmHistoryProfile } from "./scenarioFilmStudyEastAsianViveLAmour";

const beforeSunsetDonors = [
  beforeSunriseFilmHistoryProfile,
  scenesFromAMarriageFilmHistoryProfile,
  viveLAmourFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBeforeSunsetFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === beforeSunsetFilmHistoryProfile.scenarioId
    ? beforeSunsetFilmHistoryProfile
    : undefined;
}

export function getBeforeSunsetFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === beforeSunsetFilmHistoryProfile.scenarioId
    ? beforeSunsetDonors
    : undefined;
}
