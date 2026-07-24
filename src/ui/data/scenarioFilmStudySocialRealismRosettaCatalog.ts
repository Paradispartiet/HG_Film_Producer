import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { wendyAndLucyFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityWendyLucy";
import { happeningFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveHappening";
import { theRiderFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityTheRider";
import { rosettaFilmHistoryProfile } from "./scenarioFilmStudySocialRealismRosetta";

const rosettaDonors = [
  wendyAndLucyFilmHistoryProfile,
  happeningFilmHistoryProfile,
  theRiderFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getRosettaFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === rosettaFilmHistoryProfile.scenarioId
    ? rosettaFilmHistoryProfile
    : undefined;
}

export function getRosettaFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === rosettaFilmHistoryProfile.scenarioId
    ? rosettaDonors
    : undefined;
}
