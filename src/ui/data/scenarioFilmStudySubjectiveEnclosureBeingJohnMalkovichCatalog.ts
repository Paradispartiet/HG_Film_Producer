import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { kagemushaFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureKagemusha";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";
import { theGameFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureTheGame";
import { beingJohnMalkovichFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBeingJohnMalkovich";

const beingJohnMalkovichDonors = [
  bartonFinkFilmHistoryProfile,
  kagemushaFilmHistoryProfile,
  theGameFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBeingJohnMalkovichFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === beingJohnMalkovichFilmHistoryProfile.scenarioId
    ? beingJohnMalkovichFilmHistoryProfile
    : undefined;
}

export function getBeingJohnMalkovichFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === beingJohnMalkovichFilmHistoryProfile.scenarioId
    ? beingJohnMalkovichDonors
    : undefined;
}
