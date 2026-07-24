import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { trainspottingFilmHistoryProfile } from "./scenarioFilmStudyBritishIrishPlaceBodyTrainspotting";
import { nakedFilmHistoryProfile } from "./scenarioFilmStudyBritishIrishPlaceBodyNaked";
import { leavingLasVegasFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityLeavingLasVegas";
import { laHaineFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureLaHaine";

const trainspottingDonors = [
  nakedFilmHistoryProfile,
  leavingLasVegasFilmHistoryProfile,
  laHaineFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTrainspottingFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === trainspottingFilmHistoryProfile.scenarioId
    ? trainspottingFilmHistoryProfile
    : undefined;
}

export function getTrainspottingFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === trainspottingFilmHistoryProfile.scenarioId
    ? trainspottingDonors
    : undefined;
}
