import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { mySkinnySisterFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceMySkinnySister";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { safeFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentSafe";
import { theHostFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanTheHost";
import { theImpossibleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsTheImpossibleCatalog";
import { blindnessFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBlindness";
import { roomFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureRoom";

const blindnessDonors = [
  safeFilmHistoryProfile,
  soundOfMetalFilmHistoryProfile,
  theHostFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const roomDonors = [
  blindnessFilmHistoryProfile,
  theImpossibleFilmHistoryProfile,
  mySkinnySisterFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBlindnessFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  if (scenarioId === roomFilmHistoryProfile.scenarioId) return roomFilmHistoryProfile;
  return scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessFilmHistoryProfile
    : undefined;
}

export function getBlindnessFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === roomFilmHistoryProfile.scenarioId) return roomDonors;
  return profile.scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessDonors
    : undefined;
}
