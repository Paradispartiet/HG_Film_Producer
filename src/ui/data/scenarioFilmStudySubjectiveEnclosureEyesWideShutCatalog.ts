import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";
import { kagemushaFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureKagemusha";
import { theGameFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureTheGame";
import { eyesWideShutFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureEyesWideShut";

const eyesWideShutDonors = [
  theGameFilmHistoryProfile,
  kagemushaFilmHistoryProfile,
  bartonFinkFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getEyesWideShutFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === eyesWideShutFilmHistoryProfile.scenarioId
    ? eyesWideShutFilmHistoryProfile
    : undefined;
}

export function getEyesWideShutFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === eyesWideShutFilmHistoryProfile.scenarioId
    ? eyesWideShutDonors
    : undefined;
}
