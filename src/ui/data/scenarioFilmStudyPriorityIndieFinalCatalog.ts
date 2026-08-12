import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { capernaumFilmHistoryProfile } from "./scenarioFilmStudyCapernaum";
import { shopliftersFilmHistoryProfile } from "./scenarioFilmStudyShoplifters";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";
import { theChildFilmHistoryProfile } from "./scenarioFilmStudySocialRealismTheChild";
import { columbusFilmHistoryProfile } from "./scenarioFilmStudyPriorityIndieColumbus";
import { ghostWorldFilmHistoryProfile } from "./scenarioFilmStudyPriorityIndieGhostWorld";
import { redRocketFilmHistoryProfile } from "./scenarioFilmStudyPriorityIndieRedRocket";

const profiles = [
  ghostWorldFilmHistoryProfile,
  columbusFilmHistoryProfile,
  redRocketFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const profilesByScenarioId = new Map<string, FilmHistoryProfile>(
  profiles.map((profile) => [profile.scenarioId, profile] as const),
);

export function getPriorityIndieFinalProfile(scenarioId: string): FilmHistoryProfile | undefined {
  if (scenarioId === shopliftersFilmHistoryProfile.scenarioId) return shopliftersFilmHistoryProfile;
  return profilesByScenarioId.get(scenarioId);
}

export function getPriorityIndieFinalDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === shopliftersFilmHistoryProfile.scenarioId) {
    return [
      stillWalkingFilmHistoryProfile,
      theChildFilmHistoryProfile,
      capernaumFilmHistoryProfile,
    ];
  }
  if (!profilesByScenarioId.has(profile.scenarioId)) return undefined;
  return profiles
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}
