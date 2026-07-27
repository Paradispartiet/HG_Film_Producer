import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { secretsAndLiesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSecretsLies";
import { theSavagesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceTheSavages";
import { theSonsRoomFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSonsRoom";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";

const theSavagesDonors = [
  secretsAndLiesFilmHistoryProfile,
  theSonsRoomFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheSavagesFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === theSavagesFilmHistoryProfile.scenarioId
    ? theSavagesFilmHistoryProfile
    : undefined;
}

export function getTheSavagesFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theSavagesFilmHistoryProfile.scenarioId
    ? theSavagesDonors
    : undefined;
}
