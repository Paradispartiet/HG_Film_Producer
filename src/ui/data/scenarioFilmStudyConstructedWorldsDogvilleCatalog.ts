import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { coreConstructedWorldsProfiles } from "./scenarioFilmStudyConstructedWorldsCoreCatalog";
import { playtimeFilmHistoryProfile } from "./scenarioFilmStudyEuropean1960sSpacePlaytime";
import { dancerInTheDarkFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceDancerDark";
import { dogvilleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsDogville";

const donors = [
  coreConstructedWorldsProfiles.scenario_the_truman_show_1998,
  playtimeFilmHistoryProfile,
  dancerInTheDarkFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getDogvilleFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === dogvilleFilmHistoryProfile.scenarioId
    ? dogvilleFilmHistoryProfile
    : undefined;
}

export function getDogvilleFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === dogvilleFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
