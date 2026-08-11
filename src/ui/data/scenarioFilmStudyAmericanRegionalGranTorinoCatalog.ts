import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { gasFoodLodgingFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGasFoodLodging";
import { georgeWashingtonFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGeorgeWashington";
import { theFloridaProjectFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalFloridaProject";
import { theRiderFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityTheRider";
import { wendyAndLucyFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityWendyLucy";
import { mississippiMasalaFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalMississippiMasala";
import { theStraightStoryFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalStraightStory";
import { granTorinoFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGranTorino";

const granTorinoDonors = [
  theStraightStoryFilmHistoryProfile,
  mississippiMasalaFilmHistoryProfile,
  theRiderFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const theFloridaProjectDonors = [
  georgeWashingtonFilmHistoryProfile,
  gasFoodLodgingFilmHistoryProfile,
  wendyAndLucyFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getGranTorinoFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  if (scenarioId === theFloridaProjectFilmHistoryProfile.scenarioId) return theFloridaProjectFilmHistoryProfile;
  return scenarioId === granTorinoFilmHistoryProfile.scenarioId
    ? granTorinoFilmHistoryProfile
    : undefined;
}

export function getGranTorinoFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === theFloridaProjectFilmHistoryProfile.scenarioId) return theFloridaProjectDonors;
  return profile.scenarioId === granTorinoFilmHistoryProfile.scenarioId
    ? granTorinoDonors
    : undefined;
}
