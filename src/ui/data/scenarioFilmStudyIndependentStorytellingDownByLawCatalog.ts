import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { mysteryTrainFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingMysteryTrain";
import { patersonFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingPaterson";
import { slackerFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSlacker";
import { smokeFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSmoke";
import { downByLawFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDownByLaw";

const downByLawDonors = [
  mysteryTrainFilmHistoryProfile,
  slackerFilmHistoryProfile,
  smokeFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const patersonDonors = [
  downByLawFilmHistoryProfile,
  mysteryTrainFilmHistoryProfile,
  smokeFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getDownByLawFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  if (scenarioId === patersonFilmHistoryProfile.scenarioId) return patersonFilmHistoryProfile;
  return scenarioId === downByLawFilmHistoryProfile.scenarioId
    ? downByLawFilmHistoryProfile
    : undefined;
}

export function getDownByLawFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === patersonFilmHistoryProfile.scenarioId) return patersonDonors;
  if (profile.scenarioId !== downByLawFilmHistoryProfile.scenarioId) return undefined;
  return [...downByLawDonors].sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}
