import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { buffalo66FilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalBuffalo66";
import { chameleonStreetFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalChameleonStreet";
import { gasFoodLodgingFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGasFoodLodging";
import { mysteryTrainFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingMysteryTrain";

const buffalo66Donors = [
  gasFoodLodgingFilmHistoryProfile,
  chameleonStreetFilmHistoryProfile,
  mysteryTrainFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBuffalo66FilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === buffalo66FilmHistoryProfile.scenarioId
    ? buffalo66FilmHistoryProfile
    : undefined;
}

export function getBuffalo66FilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === buffalo66FilmHistoryProfile.scenarioId
    ? buffalo66Donors
    : undefined;
}
