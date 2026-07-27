import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { clockersFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirClockers";
import { fargoFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirFargo";
import { mesrineKillerInstinctFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirMesrineKillerInstinct";
import { trueRomanceFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirTrueRomance";

const mesrineKillerInstinctDonors = [
  fargoFilmHistoryProfile,
  clockersFilmHistoryProfile,
  trueRomanceFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getMesrineKillerInstinctFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === mesrineKillerInstinctFilmHistoryProfile.scenarioId
    ? mesrineKillerInstinctFilmHistoryProfile
    : undefined;
}

export function getMesrineKillerInstinctFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === mesrineKillerInstinctFilmHistoryProfile.scenarioId
    ? mesrineKillerInstinctDonors
    : undefined;
}
