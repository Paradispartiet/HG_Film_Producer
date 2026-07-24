import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { bloodSimpleFilmHistoryProfile } from "./scenarioFilmStudyAmericanGenreBloodSimple";
import { clockersFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirClockers";
import { fargoFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirFargo";
import { outOfThePastFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirOutOfThePast";

const fargoDonors = [
  bloodSimpleFilmHistoryProfile,
  clockersFilmHistoryProfile,
  outOfThePastFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getFargoFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === fargoFilmHistoryProfile.scenarioId
    ? fargoFilmHistoryProfile
    : undefined;
}

export function getFargoFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === fargoFilmHistoryProfile.scenarioId
    ? fargoDonors
    : undefined;
}
