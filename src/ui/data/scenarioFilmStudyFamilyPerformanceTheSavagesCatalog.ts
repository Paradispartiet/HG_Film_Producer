import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { mississippiMasalaFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalMississippiMasala";
import { allTheBeautyAndTheBloodshedFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveAllBeauty";
import { beforeSunriseFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunrise";
import { safeFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentSafe";
import { blueJasmineFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceBlueJasmine";
import {
  getFortyFiveYearsFilmHistoryDonors,
  getFortyFiveYearsFilmHistoryProfile,
} from "./scenarioFilmStudyFamilyPerformance45YearsCatalog";
import { lovelessFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceLoveless";
import { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";
import { secretsAndLiesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSecretsLies";
import { theBigSickFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceTheBigSick";
import { theSavagesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceTheSavages";
import { theSonsRoomFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSonsRoom";
import { winterSleepFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceWinterSleep";
import { brothersFilmHistoryProfile } from "./scenarioFilmStudyLongitudinalFamilyBrothers";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";
import { parisIsBurningFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentParisIsBurning";

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

const brothersDonors = [
  allTheBeautyAndTheBloodshedFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
  parisIsBurningFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const lovelessDonors = [
  winterSleepFilmHistoryProfile,
  scenesFromAMarriageFilmHistoryProfile,
  theSonsRoomFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const theBigSickDonors = [
  theSavagesFilmHistoryProfile,
  mississippiMasalaFilmHistoryProfile,
  beforeSunriseFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheSavagesFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  const fortyFiveYearsProfile = getFortyFiveYearsFilmHistoryProfile(scenarioId);
  if (fortyFiveYearsProfile) return fortyFiveYearsProfile;
  if (scenarioId === blueJasmineFilmHistoryProfile.scenarioId) return blueJasmineFilmHistoryProfile;
  if (scenarioId === brothersFilmHistoryProfile.scenarioId) return brothersFilmHistoryProfile;
  if (scenarioId === lovelessFilmHistoryProfile.scenarioId) return lovelessFilmHistoryProfile;
  if (scenarioId === theBigSickFilmHistoryProfile.scenarioId) return theBigSickFilmHistoryProfile;
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
  if (profile.scenarioId === brothersFilmHistoryProfile.scenarioId) return brothersDonors;
  if (profile.scenarioId === lovelessFilmHistoryProfile.scenarioId) return lovelessDonors;
  if (profile.scenarioId === theBigSickFilmHistoryProfile.scenarioId) return theBigSickDonors;
  return profile.scenarioId === theSavagesFilmHistoryProfile.scenarioId
    ? theSavagesDonors
    : undefined;
}
