import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { requiemForADreamFilmHistoryProfile } from "./scenarioFilmStudyAddictionBodyMontageRequiem";
import { crematorFilmHistoryProfile } from "./scenarioFilmStudyCzechoslovakCremator";
import { daisiesFilmHistoryProfile } from "./scenarioFilmStudyPostwarEuropeanDaisies";
import { taxidermiaFilmHistoryProfile } from "./scenarioFilmStudyHungarianGrotesqueTaxidermia";

const taxidermiaDonors = [
  crematorFilmHistoryProfile,
  daisiesFilmHistoryProfile,
  requiemForADreamFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTaxidermiaFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === taxidermiaFilmHistoryProfile.scenarioId
    ? taxidermiaFilmHistoryProfile
    : undefined;
}

export function getTaxidermiaFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === taxidermiaFilmHistoryProfile.scenarioId
    ? taxidermiaDonors
    : undefined;
}
