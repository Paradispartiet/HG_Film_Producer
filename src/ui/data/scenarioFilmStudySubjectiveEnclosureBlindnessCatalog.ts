import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { mySkinnySisterFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceMySkinnySister";
import { tropicalMaladyFilmHistoryProfile } from "./scenarioFilmStudyAsianLandscapeTropicalMalady";
import { cureFilmHistoryProfile } from "./scenarioFilmStudyJapaneseAmbiguityCure";
import { elephantFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingElephant";
import { safeFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentSafe";
import { threeIronFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanThreeIron";
import { theHostFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanTheHost";
import { theWailingFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanTheWailing";
import { theImpossibleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsTheImpossibleCatalog";
import { anomalisaFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureAnomalisa";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";
import { beingJohnMalkovichFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBeingJohnMalkovich";
import { blindnessFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBlindness";
import { nerveFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureNerve";
import { onBodyAndSoulFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureOnBodyAndSoul";
import { roomFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureRoom";
import { terrifiedFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureTerrified";
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

const onBodyAndSoulDonors = [
  anomalisaFilmHistoryProfile,
  threeIronFilmHistoryProfile,
  tropicalMaladyFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const terrifiedDonors = [
  theWailingFilmHistoryProfile,
  cureFilmHistoryProfile,
  bartonFinkFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBlindnessFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  if (scenarioId === nerveFilmHistoryProfile.scenarioId) return nerveFilmHistoryProfile;
  if (scenarioId === onBodyAndSoulFilmHistoryProfile.scenarioId) return onBodyAndSoulFilmHistoryProfile;
  if (scenarioId === roomFilmHistoryProfile.scenarioId) return roomFilmHistoryProfile;
  if (scenarioId === terrifiedFilmHistoryProfile.scenarioId) return terrifiedFilmHistoryProfile;
  return scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessFilmHistoryProfile
    : undefined;
}

export function getBlindnessFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === nerveFilmHistoryProfile.scenarioId) return nerveDonors;
  if (profile.scenarioId === onBodyAndSoulFilmHistoryProfile.scenarioId) return onBodyAndSoulDonors;
  if (profile.scenarioId === roomFilmHistoryProfile.scenarioId) return roomDonors;
  if (profile.scenarioId === terrifiedFilmHistoryProfile.scenarioId) return terrifiedDonors;
  return profile.scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessDonors
    : undefined;
}
