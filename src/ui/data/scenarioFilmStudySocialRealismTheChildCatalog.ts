import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { wendyAndLucyFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityWendyLucy";
import { happeningFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveHappening";
import { rosettaFilmHistoryProfile } from "./scenarioFilmStudySocialRealismRosetta";
import { theChildFilmHistoryProfile } from "./scenarioFilmStudySocialRealismTheChild";

const theChildDonors = [
  rosettaFilmHistoryProfile,
  wendyAndLucyFilmHistoryProfile,
  happeningFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheChildFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === theChildFilmHistoryProfile.scenarioId
    ? theChildFilmHistoryProfile
    : undefined;
}

export function getTheChildFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theChildFilmHistoryProfile.scenarioId
    ? theChildDonors
    : undefined;
}
