import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { secretsAndLiesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSecretsLies";
import { antoniasLineFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceAntoniasLine";
import { daughtersOfTheDustFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDaughtersOfTheDust";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";

const antoniasLineDonors = [
  daughtersOfTheDustFilmHistoryProfile,
  secretsAndLiesFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getAntoniasLineFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === antoniasLineFilmHistoryProfile.scenarioId
    ? antoniasLineFilmHistoryProfile
    : undefined;
}

export function getAntoniasLineFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === antoniasLineFilmHistoryProfile.scenarioId
    ? antoniasLineDonors
    : undefined;
}
