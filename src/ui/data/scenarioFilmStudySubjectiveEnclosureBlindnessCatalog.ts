import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { mySkinnySisterFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceMySkinnySister";
import { elephantFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingElephant";
import { safeFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentSafe";
import { theHostFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanTheHost";
import { theImpossibleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsTheImpossibleCatalog";
import { beingJohnMalkovichFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBeingJohnMalkovich";
import { blindnessFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBlindness";
import { nerveFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureNerve";
import { roomFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureRoom";
import { theGameFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureTheGame";

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

const nerveDonors = [
  theGameFilmHistoryProfile,
  elephantFilmHistoryProfile,
  beingJohnMalkovichFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBlindnessFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  if (scenarioId === nerveFilmHistoryProfile.scenarioId) return nerveFilmHistoryProfile;
  if (scenarioId === roomFilmHistoryProfile.scenarioId) return roomFilmHistoryProfile;
  return scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessFilmHistoryProfile
    : undefined;
}

export function getBlindnessFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === nerveFilmHistoryProfile.scenarioId) return nerveDonors;
  if (profile.scenarioId === roomFilmHistoryProfile.scenarioId) return roomDonors;
  return profile.scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessDonors
    : undefined;
}
