import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { safeFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentSafe";
import { blueJasmineFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceBlueJasmine";
import {
  getFortyFiveYearsFilmHistoryDonors,
  getFortyFiveYearsFilmHistoryProfile,
} from "./scenarioFilmStudyFamilyPerformance45YearsCatalog";
import { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";
import { secretsAndLiesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSecretsLies";
import { theSavagesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceTheSavages";
import { theSonsRoomFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSonsRoom";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";

const theSavagesDonors = [
  secretsAndLiesFilmHistoryProfile,
  theSonsRoomFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const blueJasmineDonors = [
  scenesFromAMarriageFilmHistoryProfile,
  secretsAndLiesFilmHistoryProfile,
  safeFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheSavagesFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  const fortyFiveYearsProfile = getFortyFiveYearsFilmHistoryProfile(scenarioId);
  if (fortyFiveYearsProfile) return fortyFiveYearsProfile;
  if (scenarioId === blueJasmineFilmHistoryProfile.scenarioId) return blueJasmineFilmHistoryProfile;
  return scenarioId === theSavagesFilmHistoryProfile.scenarioId
    ? theSavagesFilmHistoryProfile
    : undefined;
}

export function getTheSavagesFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  const fortyFiveYearsDonors = getFortyFiveYearsFilmHistoryDonors(profile);
  if (fortyFiveYearsDonors) return fortyFiveYearsDonors;
  if (profile.scenarioId === blueJasmineFilmHistoryProfile.scenarioId) return blueJasmineDonors;
  return profile.scenarioId === theSavagesFilmHistoryProfile.scenarioId
    ? theSavagesDonors
    : undefined;
}
