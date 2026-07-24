import { bloodSimpleFilmHistoryProfile } from "./scenarioFilmStudyAmericanGenreBloodSimple";
import { theBigLebowskiFilmHistoryProfile } from "./scenarioFilmStudyAmericanGenreBigLebowski";
import { fargoFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirFargo";
import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";

const theBigLebowskiDonors = [
  bloodSimpleFilmHistoryProfile,
  fargoFilmHistoryProfile,
  bartonFinkFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheBigLebowskiFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === theBigLebowskiFilmHistoryProfile.scenarioId
    ? theBigLebowskiFilmHistoryProfile
    : undefined;
}

export function getTheBigLebowskiFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theBigLebowskiFilmHistoryProfile.scenarioId
    ? theBigLebowskiDonors
    : undefined;
}
