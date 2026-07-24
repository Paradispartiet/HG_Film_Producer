import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { wendyAndLucyFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityWendyLucy";
import { gasFoodLodgingFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGasFoodLodging";
import { georgeWashingtonFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalGeorgeWashington";
import { theStraightStoryFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalStraightStory";

const donors = [
  wendyAndLucyFilmHistoryProfile,
  georgeWashingtonFilmHistoryProfile,
  gasFoodLodgingFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheStraightStoryFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === theStraightStoryFilmHistoryProfile.scenarioId
    ? theStraightStoryFilmHistoryProfile
    : undefined;
}

export function getTheStraightStoryFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theStraightStoryFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
