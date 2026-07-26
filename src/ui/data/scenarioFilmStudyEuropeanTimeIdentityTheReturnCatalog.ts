import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { satantangoFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentitySatantango";
import { theReturnFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityTheReturn";
import { theWhiteRibbonFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityWhiteRibbon";
import { whereIsTheFriendsHouseFilmHistoryProfile } from "./scenarioFilmStudyMinimalistRoadWhereFriendsHouse";

const donors = [
  theWhiteRibbonFilmHistoryProfile,
  satantangoFilmHistoryProfile,
  whereIsTheFriendsHouseFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheReturnFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === theReturnFilmHistoryProfile.scenarioId
    ? theReturnFilmHistoryProfile
    : undefined;
}

export function getTheReturnFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theReturnFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
