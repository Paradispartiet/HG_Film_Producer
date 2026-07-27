import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { laHaineFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureLaHaine";
import { mesrineKillerInstinctFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirMesrineKillerInstinct";
import { mesrinePublicEnemyFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirMesrinePublicEnemy";
import { outOfThePastFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirOutOfThePast";

const mesrinePublicEnemyDonors = [
  mesrineKillerInstinctFilmHistoryProfile,
  laHaineFilmHistoryProfile,
  outOfThePastFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getMesrinePublicEnemyFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === mesrinePublicEnemyFilmHistoryProfile.scenarioId
    ? mesrinePublicEnemyFilmHistoryProfile
    : undefined;
}

export function getMesrinePublicEnemyFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === mesrinePublicEnemyFilmHistoryProfile.scenarioId
    ? mesrinePublicEnemyDonors
    : undefined;
}
