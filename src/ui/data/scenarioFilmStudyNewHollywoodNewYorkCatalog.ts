import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { dogDayAfternoonFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodNewYorkDogDayAfternoon";
import { manhattanFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodNewYorkManhattan";
import { meanStreetsFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodNewYorkMeanStreets";
import { taxiDriverFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodNewYorkTaxiDriver";

const profiles = [
  meanStreetsFilmHistoryProfile,
  dogDayAfternoonFilmHistoryProfile,
  taxiDriverFilmHistoryProfile,
  manhattanFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const profilesByScenarioId = new Map<string, FilmHistoryProfile>(
  profiles.map((profile) => [profile.scenarioId, profile] as const),
);

export function getNewHollywoodNewYorkProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return profilesByScenarioId.get(scenarioId);
}

export function getNewHollywoodNewYorkDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  if (!profilesByScenarioId.has(profile.scenarioId)) return undefined;
  return profiles
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}
