import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { forrestGumpFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsForrestGump";

const forrestGumpDonorScenarioIds = [
  "scenario_the_truman_show_1998",
  "scenario_midnight_in_paris_2011",
  "scenario_groundhog_day_1993",
] as const;

export function getForrestGumpFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === forrestGumpFilmHistoryProfile.scenarioId
    ? forrestGumpFilmHistoryProfile
    : undefined;
}

export function getForrestGumpDonorScenarioIds(
  profile: FilmHistoryProfile,
): readonly string[] | undefined {
  return profile.scenarioId === forrestGumpFilmHistoryProfile.scenarioId
    ? forrestGumpDonorScenarioIds
    : undefined;
}
