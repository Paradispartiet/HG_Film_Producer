import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { leavingLasVegasFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityLeavingLasVegas";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { wendyAndLucyFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityWendyLucy";
import { safeFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentSafe";

const leavingLasVegasDonors = [
  soundOfMetalFilmHistoryProfile,
  safeFilmHistoryProfile,
  wendyAndLucyFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getLeavingLasVegasFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === leavingLasVegasFilmHistoryProfile.scenarioId
    ? leavingLasVegasFilmHistoryProfile
    : undefined;
}

export function getLeavingLasVegasFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === leavingLasVegasFilmHistoryProfile.scenarioId
    ? leavingLasVegasDonors
    : undefined;
}
