import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { wendyAndLucyFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityWendyLucy";
import { happeningFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveHappening";
import { theRiderFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityTheRider";
import { driftersFilmHistoryProfile } from "./scenarioFilmStudySocialRealismDrifters";
import { rosettaFilmHistoryProfile } from "./scenarioFilmStudySocialRealismRosetta";
import { theChildFilmHistoryProfile } from "./scenarioFilmStudySocialRealismTheChild";

const rosettaDonors = [
  wendyAndLucyFilmHistoryProfile,
  happeningFilmHistoryProfile,
  theRiderFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const driftersDonors = [
  rosettaFilmHistoryProfile,
  wendyAndLucyFilmHistoryProfile,
  theChildFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getRosettaFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  if (scenarioId === driftersFilmHistoryProfile.scenarioId) return driftersFilmHistoryProfile;
  return scenarioId === rosettaFilmHistoryProfile.scenarioId
    ? rosettaFilmHistoryProfile
    : undefined;
}

export function getRosettaFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === driftersFilmHistoryProfile.scenarioId) return driftersDonors;
  return profile.scenarioId === rosettaFilmHistoryProfile.scenarioId
    ? rosettaDonors
    : undefined;
}
