import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { happyTogetherFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalHappyTogether";
import { millenniumMamboFilmHistoryProfile } from "./scenarioFilmStudyEastAsianMillenniumMambo";
import { tropicalMaladyFilmHistoryProfile } from "./scenarioFilmStudyAsianLandscapeTropicalMalady";
import { lastLifeInTheUniverseFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalLastLifeUniverse";

const donors = [
  happyTogetherFilmHistoryProfile,
  millenniumMamboFilmHistoryProfile,
  tropicalMaladyFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getLastLifeInTheUniverseFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === lastLifeInTheUniverseFilmHistoryProfile.scenarioId
    ? lastLifeInTheUniverseFilmHistoryProfile
    : undefined;
}

export function getLastLifeInTheUniverseFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === lastLifeInTheUniverseFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
