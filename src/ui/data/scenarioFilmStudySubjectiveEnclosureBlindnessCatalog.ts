import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { safeFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentSafe";
import { theHostFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanTheHost";
import { blindnessFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBlindness";

const blindnessDonors = [
  safeFilmHistoryProfile,
  soundOfMetalFilmHistoryProfile,
  theHostFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBlindnessFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessFilmHistoryProfile
    : undefined;
}

export function getBlindnessFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === blindnessFilmHistoryProfile.scenarioId
    ? blindnessDonors
    : undefined;
}
