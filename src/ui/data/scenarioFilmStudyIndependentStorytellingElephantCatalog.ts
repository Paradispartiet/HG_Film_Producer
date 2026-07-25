import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { satantangoFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentitySatantango";
import { jeanneDielmanFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoliticalJeanneDielman";
import { rosettaFilmHistoryProfile } from "./scenarioFilmStudySocialRealismRosetta";
import { elephantFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingElephant";

const donors = [
  satantangoFilmHistoryProfile,
  jeanneDielmanFilmHistoryProfile,
  rosettaFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getElephantFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === elephantFilmHistoryProfile.scenarioId
    ? elephantFilmHistoryProfile
    : undefined;
}

export function getElephantFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === elephantFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
