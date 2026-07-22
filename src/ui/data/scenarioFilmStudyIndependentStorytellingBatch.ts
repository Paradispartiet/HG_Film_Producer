import {
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  summarizeFilmStudyCoverage,
  type FilmStudyCoverageOverride,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "./filmScenarios";
import type {
  FilmHistoryChoice,
  FilmHistoryProfile,
  ScenarioFilmStudyMap,
} from "./scenarioFilmStudyMap";
import { americanSplendorFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingAmericanSplendor";
import { daughtersOfTheDustFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDaughtersOfTheDust";
import { killerOfSheepFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingKillerOfSheep";
import { manWhoWasntThereFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingManWhoWasntThere";
import { mysteryTrainFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingMysteryTrain";
import { sexLiesVideotapeFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSexLiesVideotape";
import { slackerFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSlacker";
import { smokeFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSmoke";
import { afterLifeFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryAfterLife";
import { blackRainImamuraFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryBlackRain";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";
import { tampopoFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryTampopo";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";

const independentStorytellingProfiles = {
  [tampopoFilmHistoryProfile.scenarioId]: tampopoFilmHistoryProfile,
  [killerOfSheepFilmHistoryProfile.scenarioId]: killerOfSheepFilmHistoryProfile,
  [mysteryTrainFilmHistoryProfile.scenarioId]: mysteryTrainFilmHistoryProfile,
  [blackRainImamuraFilmHistoryProfile.scenarioId]: blackRainImamuraFilmHistoryProfile,
  [sexLiesVideotapeFilmHistoryProfile.scenarioId]: sexLiesVideotapeFilmHistoryProfile,
  [slackerFilmHistoryProfile.scenarioId]: slackerFilmHistoryProfile,
  [daughtersOfTheDustFilmHistoryProfile.scenarioId]: daughtersOfTheDustFilmHistoryProfile,
  [smokeFilmHistoryProfile.scenarioId]: smokeFilmHistoryProfile,
  [afterLifeFilmHistoryProfile.scenarioId]: afterLifeFilmHistoryProfile,
  [manWhoWasntThereFilmHistoryProfile.scenarioId]: manWhoWasntThereFilmHistoryProfile,
  [americanSplendorFilmHistoryProfile.scenarioId]: americanSplendorFilmHistoryProfile,
  [stillWalkingFilmHistoryProfile.scenarioId]: stillWalkingFilmHistoryProfile,
} as const satisfies Record<string, FilmHistoryProfile>;

function statusRank(status: FilmStudyCoverageOverride["status"]): number {
  if (status === "source_verified") return 4;
  if (status === "mapped") return 3;
  if (status === "not_central") return 2;
  return 1;
}

function mergeCoverageOverrides(
  ...overrideSets: readonly (readonly FilmStudyCoverageOverride[])[]
): readonly FilmStudyCoverageOverride[] {
  const merged = new Map<string, FilmStudyCoverageOverride>();
  for (const overrides of overrideSets) {
    for (const override of overrides) {
      const existing = merged.get(override.area);
      if (!existing || statusRank(override.status) >= statusRank(existing.status)) {
        merged.set(override.area, override);
      }
    }
  }
  return [...merged.values()];
}

function briefOverrides(brief: ScenarioProductionBrief): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "screenplay", status: "mapped", note: brief.screenplayTargets.join(" · ") },
    { area: "cinematography", status: "mapped", note: brief.cinematographyTargets.join(" · ") },
    { area: "editing", status: "mapped", note: brief.editingTargets.join(" · ") },
    { area: "sound_design", status: "mapped", note: brief.soundTargets.join(" · ") },
  ];
}

function profileOverrides(profile: FilmHistoryProfile): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "historical_context", status: "source_verified", note: profile.period },
    { area: "movement_and_tradition", status: "source_verified", note: profile.traditions.join(" · ") },
    { area: "industry_and_production_context", status: "source_verified", note: profile.moment },
    { area: "reception_and_legacy", status: profile.technicalHighlights.find((item) => item.area === "reception_and_legacy")?.status ?? "mapped", note: profile.after },
    ...profile.technicalHighlights,
  ];
}

export function getIndependentStorytellingFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return independentStorytellingProfiles[scenarioId as keyof typeof independentStorytellingProfiles];
}

export function resolveIndependentStorytellingFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getIndependentStorytellingFilmHistoryProfile(scenario.id);
  if (!historyProfile) return undefined;
  const verification = getProductionCaseVerification(scenario.id);
  const coverage = completeFilmStudyCoverage(mergeCoverageOverrides(
    briefOverrides(brief),
    profileOverrides(historyProfile),
  ));
  return {
    scenarioId: scenario.id,
    title: scenario.film.title,
    year: scenario.film.year,
    broadEra: getFilmHistoryEra(scenario.film.year),
    historyStatus: "source_backed",
    historyProfile,
    coverage,
    coverageSummary: summarizeFilmStudyCoverage(coverage),
    verification,
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

export function createIndependentStorytellingFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const donors = Object.values(independentStorytellingProfiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: "This connects the film's historical position directly to its documented relationship between place, narrative structure, image system, media form and production method.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: "This is a real independent storytelling system, but it belongs to another balance of place, genre, memory, documentary evidence, performance and visual construction.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: "This places the film inside the wrong historical relationship between place, narration, media mixture, performance and image-making.",
    }] : []),
  ];
}
