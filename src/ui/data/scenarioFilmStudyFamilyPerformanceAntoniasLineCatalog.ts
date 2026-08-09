import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { theStraightStoryFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalStraightStory";
import { brokenCircleBreakdownFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceBrokenCircleBreakdownCatalog";
import { manchesterByTheSeaFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceManchesterByTheSea";
import { secretsAndLiesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSecretsLies";
import { theSonsRoomFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSonsRoom";
import { antoniasLineFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceAntoniasLine";
import { daughtersOfTheDustFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDaughtersOfTheDust";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";

const antoniasLineDonors = [
  daughtersOfTheDustFilmHistoryProfile,
  secretsAndLiesFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const manchesterByTheSeaDonors = [
  theSonsRoomFilmHistoryProfile,
  brokenCircleBreakdownFilmHistoryProfile,
  theStraightStoryFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getAntoniasLineFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  if (scenarioId === manchesterByTheSeaFilmHistoryProfile.scenarioId) return manchesterByTheSeaFilmHistoryProfile;
  return scenarioId === antoniasLineFilmHistoryProfile.scenarioId
    ? antoniasLineFilmHistoryProfile
    : undefined;
}

export function getAntoniasLineFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === manchesterByTheSeaFilmHistoryProfile.scenarioId) return manchesterByTheSeaDonors;
  return profile.scenarioId === antoniasLineFilmHistoryProfile.scenarioId
    ? antoniasLineDonors
    : undefined;
}
