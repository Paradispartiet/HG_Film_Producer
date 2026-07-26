import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { lastLifeInTheUniverseFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalLastLifeUniverse";
import { viveLAmourFilmHistoryProfile } from "./scenarioFilmStudyEastAsianViveLAmour";
import { oasisFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanOasis";
import { threeIronFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanThreeIron";

const donors = [
  viveLAmourFilmHistoryProfile,
  oasisFilmHistoryProfile,
  lastLifeInTheUniverseFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getThreeIronFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === threeIronFilmHistoryProfile.scenarioId
    ? threeIronFilmHistoryProfile
    : undefined;
}

export function getThreeIronFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === threeIronFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
