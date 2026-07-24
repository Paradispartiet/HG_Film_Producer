import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { balthazarFilmHistoryProfile } from "./scenarioFilmStudyEuropeanReligiousBalthazar";
import { gospelMatthewFilmHistoryProfile } from "./scenarioFilmStudyEuropeanReligiousGospelMatthew";
import { viridianaFilmHistoryProfile } from "./scenarioFilmStudyEuropeanReligiousViridiana";

const profiles = [
  viridianaFilmHistoryProfile,
  gospelMatthewFilmHistoryProfile,
  balthazarFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const profilesByScenarioId = new Map<string, FilmHistoryProfile>(
  profiles.map((profile) => [profile.scenarioId, profile] as const),
);

export function getEuropeanReligiousMoralProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return profilesByScenarioId.get(scenarioId);
}

export function getEuropeanReligiousMoralDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (!profilesByScenarioId.has(profile.scenarioId)) return undefined;
  return profiles
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}
