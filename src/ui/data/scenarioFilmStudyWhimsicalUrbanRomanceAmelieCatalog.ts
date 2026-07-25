import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { doubleLifeOfVeroniqueFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoeticMemoryDoubleLifeVeronique";
import { runLolaRunFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityRunLolaRun";
import { beingJohnMalkovichFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBeingJohnMalkovich";
import { amelieFilmHistoryProfile } from "./scenarioFilmStudyWhimsicalUrbanRomanceAmelie";

const donors = [
  doubleLifeOfVeroniqueFilmHistoryProfile,
  runLolaRunFilmHistoryProfile,
  beingJohnMalkovichFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getAmelieFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === amelieFilmHistoryProfile.scenarioId
    ? amelieFilmHistoryProfile
    : undefined;
}

export function getAmelieFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === amelieFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
