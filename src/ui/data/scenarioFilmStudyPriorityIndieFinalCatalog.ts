import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { reservoirDogsFilmHistoryProfile } from "./scenarioFilmStudyAmericanGenreReservoirDogs";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";
import { capernaumFilmHistoryProfile } from "./scenarioFilmStudyCapernaum";
import { shopliftersFilmHistoryProfile } from "./scenarioFilmStudyShoplifters";
import { theGuiltyFilmHistoryProfile } from "./scenarioFilmStudyTheGuilty";
import { theHouseThatJackBuiltFilmHistoryProfile } from "./scenarioFilmStudyTheHouseThatJackBuilt";
import { leavingNeverlandFilmHistoryProfile } from "./scenarioFilmStudyLeavingNeverland";
import { onceUponATimeInHollywoodFilmHistoryProfile } from "./scenarioFilmStudyOnceUponATimeInHollywood";
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
  if (scenarioId === theGuiltyFilmHistoryProfile.scenarioId) return theGuiltyFilmHistoryProfile;
  if (scenarioId === theHouseThatJackBuiltFilmHistoryProfile.scenarioId) return theHouseThatJackBuiltFilmHistoryProfile;
  if (scenarioId === leavingNeverlandFilmHistoryProfile.scenarioId) return leavingNeverlandFilmHistoryProfile;
  if (scenarioId === onceUponATimeInHollywoodFilmHistoryProfile.scenarioId) return onceUponATimeInHollywoodFilmHistoryProfile;
  return profilesByScenarioId.get(scenarioId);
}

export function getPriorityIndieFinalDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === shopliftersFilmHistoryProfile.scenarioId) {
    return [stillWalkingFilmHistoryProfile, theChildFilmHistoryProfile, capernaumFilmHistoryProfile];
  }
  if (profile.scenarioId === theGuiltyFilmHistoryProfile.scenarioId) {
    return [reservoirDogsFilmHistoryProfile, soundOfMetalFilmHistoryProfile, bartonFinkFilmHistoryProfile];
  }
  if (profile.scenarioId === theHouseThatJackBuiltFilmHistoryProfile.scenarioId) {
    return [bartonFinkFilmHistoryProfile, reservoirDogsFilmHistoryProfile, theGuiltyFilmHistoryProfile];
  }
  if (profile.scenarioId === leavingNeverlandFilmHistoryProfile.scenarioId) {
    return [theGuiltyFilmHistoryProfile, soundOfMetalFilmHistoryProfile, capernaumFilmHistoryProfile];
  }
  if (profile.scenarioId === onceUponATimeInHollywoodFilmHistoryProfile.scenarioId) {
    return [reservoirDogsFilmHistoryProfile, bartonFinkFilmHistoryProfile, columbusFilmHistoryProfile];
  }
  if (!profilesByScenarioId.has(profile.scenarioId)) return undefined;
  return profiles
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}