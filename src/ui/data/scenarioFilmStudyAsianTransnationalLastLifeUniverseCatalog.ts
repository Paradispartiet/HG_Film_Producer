import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { granTorinoFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGranTorino";
import { happyTogetherFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalHappyTogether";
import { dheepanFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalDheepan";
import { millenniumMamboFilmHistoryProfile } from "./scenarioFilmStudyEastAsianMillenniumMambo";
import { rosettaFilmHistoryProfile } from "./scenarioFilmStudySocialRealismRosetta";
import { theChildFilmHistoryProfile } from "./scenarioFilmStudySocialRealismTheChild";
import { tropicalMaladyFilmHistoryProfile } from "./scenarioFilmStudyAsianLandscapeTropicalMalady";
import { lastLifeInTheUniverseFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalLastLifeUniverse";

const lastLifeDonors = [
  happyTogetherFilmHistoryProfile,
  millenniumMamboFilmHistoryProfile,
  tropicalMaladyFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const dheepanDonors = [
  theChildFilmHistoryProfile,
  granTorinoFilmHistoryProfile,
  rosettaFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getLastLifeInTheUniverseFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  if (scenarioId === dheepanFilmHistoryProfile.scenarioId) return dheepanFilmHistoryProfile;
  return scenarioId === lastLifeInTheUniverseFilmHistoryProfile.scenarioId
    ? lastLifeInTheUniverseFilmHistoryProfile
    : undefined;
}

export function getLastLifeInTheUniverseFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === dheepanFilmHistoryProfile.scenarioId) return dheepanDonors;
  return profile.scenarioId === lastLifeInTheUniverseFilmHistoryProfile.scenarioId
    ? lastLifeDonors
    : undefined;
}
