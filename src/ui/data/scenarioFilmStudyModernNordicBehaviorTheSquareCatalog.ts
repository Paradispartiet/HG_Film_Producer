import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { toniErdmannFilmHistoryProfile } from "./scenarioFilmStudyContemporaryEuropeanSocialCareToniErdmann";
import { triangleOfSadnessFilmHistoryProfile } from "./scenarioFilmStudyContemporaryEuropeanSocialCareTriangle";
import { forceMajeureFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorForceMajeure";
import { theSquareFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorTheSquare";

const donors = [
  forceMajeureFilmHistoryProfile,
  toniErdmannFilmHistoryProfile,
  triangleOfSadnessFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheSquareFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === theSquareFilmHistoryProfile.scenarioId
    ? theSquareFilmHistoryProfile
    : undefined;
}

export function getTheSquareFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theSquareFilmHistoryProfile.scenarioId ? donors : undefined;
}
