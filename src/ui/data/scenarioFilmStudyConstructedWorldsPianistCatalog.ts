import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { romeOpenCityFilmHistoryProfile } from "./scenarioFilmStudy1940sRomeOpenCity";
import { battleOfAlgiersFilmHistoryProfile } from "./scenarioFilmStudyEuropeanModernistBattleOfAlgiers";
import { phoenixFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityPhoenix";
import { thePianistFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsPianist";

const donors = [
  romeOpenCityFilmHistoryProfile,
  battleOfAlgiersFilmHistoryProfile,
  phoenixFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getThePianistFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === thePianistFilmHistoryProfile.scenarioId
    ? thePianistFilmHistoryProfile
    : undefined;
}

export function getThePianistFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === thePianistFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
