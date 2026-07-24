import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { characterFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityCharacter";
import { theVanishingFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityVanishing";
import { theWhiteRibbonFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityWhiteRibbon";
import { phoenixFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityPhoenix";

const characterDonors = [
  theVanishingFilmHistoryProfile,
  theWhiteRibbonFilmHistoryProfile,
  phoenixFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getCharacterFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === characterFilmHistoryProfile.scenarioId
    ? characterFilmHistoryProfile
    : undefined;
}

export function getCharacterFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === characterFilmHistoryProfile.scenarioId
    ? characterDonors
    : undefined;
}
