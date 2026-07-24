import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { theVanishingFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityVanishing";
import { cureFilmHistoryProfile } from "./scenarioFilmStudyJapaneseAmbiguityCure";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";
import { theGameFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureTheGame";

const theGameDonors = [
  bartonFinkFilmHistoryProfile,
  cureFilmHistoryProfile,
  theVanishingFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheGameFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === theGameFilmHistoryProfile.scenarioId
    ? theGameFilmHistoryProfile
    : undefined;
}

export function getTheGameFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theGameFilmHistoryProfile.scenarioId
    ? theGameDonors
    : undefined;
}
