import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { happeningFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveHappening";
import { laHaineFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureLaHaine";
import { theChildFilmHistoryProfile } from "./scenarioFilmStudySocialRealismTheChild";
import { fourMonthsFilmHistoryProfile } from "./scenarioFilmStudyRomanianPressureFourMonths";

const fourMonthsDonors = [
  happeningFilmHistoryProfile,
  theChildFilmHistoryProfile,
  laHaineFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getFourMonthsFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === fourMonthsFilmHistoryProfile.scenarioId
    ? fourMonthsFilmHistoryProfile
    : undefined;
}

export function getFourMonthsFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === fourMonthsFilmHistoryProfile.scenarioId
    ? fourMonthsDonors
    : undefined;
}
