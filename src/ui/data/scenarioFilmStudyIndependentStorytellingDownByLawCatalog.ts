import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { mysteryTrainFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingMysteryTrain";
import { slackerFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSlacker";
import { smokeFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSmoke";
import { downByLawFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDownByLaw";

const downByLawDonors = [
  mysteryTrainFilmHistoryProfile,
  slackerFilmHistoryProfile,
  smokeFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getDownByLawFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === downByLawFilmHistoryProfile.scenarioId
    ? downByLawFilmHistoryProfile
    : undefined;
}

export function getDownByLawFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId !== downByLawFilmHistoryProfile.scenarioId) return undefined;
  return [...downByLawDonors].sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}
