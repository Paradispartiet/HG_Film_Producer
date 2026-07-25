import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { mysteryTrainFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingMysteryTrain";
import { smokeFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSmoke";
import { downByLawFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDownByLaw";
import { theMillionDollarHotelFilmHistoryProfile } from "./scenarioFilmStudyOutsiderHotelMusicMillionDollarHotel";

const donors = [
  mysteryTrainFilmHistoryProfile,
  smokeFilmHistoryProfile,
  downByLawFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheMillionDollarHotelFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === theMillionDollarHotelFilmHistoryProfile.scenarioId
    ? theMillionDollarHotelFilmHistoryProfile
    : undefined;
}

export function getTheMillionDollarHotelFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theMillionDollarHotelFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
