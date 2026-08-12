import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { daughtersOfTheDustFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDaughtersOfTheDust";
import { norteFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingNorte";
import { birdsOfPassageFilmHistoryProfile } from "./scenarioFilmStudyPriorityIndieBirdsOfPassage";
import { columbusFilmHistoryProfile } from "./scenarioFilmStudyPriorityIndieColumbus";
import { ghostWorldFilmHistoryProfile } from "./scenarioFilmStudyPriorityIndieGhostWorld";
import { redRocketFilmHistoryProfile } from "./scenarioFilmStudyPriorityIndieRedRocket";
import { marlinaFilmHistoryProfile } from "./scenarioFilmStudySouthSoutheastAsianMarlina";

const legacyProfiles = [
  ghostWorldFilmHistoryProfile,
  columbusFilmHistoryProfile,
  redRocketFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const profiles = [
  ...legacyProfiles,
  birdsOfPassageFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const profilesByScenarioId = new Map<string, FilmHistoryProfile>(
  profiles.map((profile) => [profile.scenarioId, profile] as const),
);
const legacyProfilesByScenarioId = new Map<string, FilmHistoryProfile>(
  legacyProfiles.map((profile) => [profile.scenarioId, profile] as const),
);

export function getPriorityIndieFinalProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return profilesByScenarioId.get(scenarioId);
}

export function getPriorityIndieFinalDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === birdsOfPassageFilmHistoryProfile.scenarioId) {
    return [
      norteFilmHistoryProfile,
      marlinaFilmHistoryProfile,
      daughtersOfTheDustFilmHistoryProfile,
    ];
  }
  if (!legacyProfilesByScenarioId.has(profile.scenarioId)) return undefined;
  return legacyProfiles
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}
