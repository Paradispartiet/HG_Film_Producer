import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { clerksFilmHistoryProfile } from "./scenarioFilmStudyAmericanGenreClerks";
import { elMariachiFilmHistoryProfile } from "./scenarioFilmStudyAmericanGenreElMariachi";
import { metropolitanFilmHistoryProfile } from "./scenarioFilmStudyAmericanGenreMetropolitan";
import { slackerFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSlacker";

const clerksDonors = [
  metropolitanFilmHistoryProfile,
  slackerFilmHistoryProfile,
  elMariachiFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getClerksFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === clerksFilmHistoryProfile.scenarioId
    ? clerksFilmHistoryProfile
    : undefined;
}

export function getClerksFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === clerksFilmHistoryProfile.scenarioId
    ? clerksDonors
    : undefined;
}
