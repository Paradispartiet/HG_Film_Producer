import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { theRiderFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityTheRider";
import { mississippiMasalaFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalMississippiMasala";
import { theStraightStoryFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalStraightStory";
import { granTorinoFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGranTorino";

const granTorinoDonors = [
  theStraightStoryFilmHistoryProfile,
  mississippiMasalaFilmHistoryProfile,
  theRiderFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getGranTorinoFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === granTorinoFilmHistoryProfile.scenarioId
    ? granTorinoFilmHistoryProfile
    : undefined;
}

export function getGranTorinoFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === granTorinoFilmHistoryProfile.scenarioId
    ? granTorinoDonors
    : undefined;
}
