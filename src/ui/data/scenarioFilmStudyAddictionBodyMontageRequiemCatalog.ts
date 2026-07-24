import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { trainspottingFilmHistoryProfile } from "./scenarioFilmStudyBritishIrishPlaceBodyTrainspotting";
import { leavingLasVegasFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityLeavingLasVegas";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { requiemForADreamFilmHistoryProfile } from "./scenarioFilmStudyAddictionBodyMontageRequiem";

const donors = [
  trainspottingFilmHistoryProfile,
  leavingLasVegasFilmHistoryProfile,
  soundOfMetalFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getRequiemForADreamFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === requiemForADreamFilmHistoryProfile.scenarioId
    ? requiemForADreamFilmHistoryProfile
    : undefined;
}

export function getRequiemForADreamFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === requiemForADreamFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
