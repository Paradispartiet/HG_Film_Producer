import {
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  summarizeFilmStudyCoverage,
  type FilmStudyCoverageOverride,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "./filmScenarios";
import {
  getIndependentStorytellingCatalogProfile,
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
  type IndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog";
import type {
  FilmHistoryChoice,
  FilmHistoryProfile,
  ScenarioFilmStudyMap,
} from "./scenarioFilmStudyMap";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";

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
    {
      area: "reception_and_legacy",
      status: profile.technicalHighlights.find((item) => item.area === "reception_and_legacy")?.status ?? "mapped",
      note: profile.after,
    },
    ...profile.technicalHighlights,
  ];
}

export function getIndependentStorytellingFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return getIndependentStorytellingCatalogProfile(scenarioId);
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

function partialFeedback(group: IndependentStorytellingProfileGroup): string {
  const feedback: Record<IndependentStorytellingProfileGroup, string> = {
    general: "This is a real independent storytelling system, but it belongs to another balance of place, genre, memory, documentary evidence, performance and visual construction.",
    south_korean_genre: "This is a real South Korean production system, but it organizes historical pressure, performance, genre, location, effects, editing and sound differently.",
    south_southeast_asian: "This is a real South or Southeast Asian production system, but it organizes institution, performance, landscape, duration, genre and sound differently.",
    hong_kong_taiwan_urban_time: "This is a real Hong Kong or Taiwan urban-time system, but it organizes memory, architecture, duration, performance, music and exhibition space differently.",
    chinese_language_space_genre: "This is a real Chinese-language production system, but it organizes ritual, geography, historical genre, violence, duration and immersive space differently.",
    asian_transnational_urban_identity: "This is a real Asian transnational urban-identity system, but it organizes migration, labour, romance, surveillance, time and belonging differently.",
    japanese_ambiguity_dialogue: "This is a real Japanese ambiguity-and-dialogue production system, but it organizes hypnosis, coincidence, institutional viewpoint, environmental procedure, performance and sound differently.",
  };
  return feedback[group];
}

function missFeedback(group: IndependentStorytellingProfileGroup): string {
  const feedback: Record<IndependentStorytellingProfileGroup, string> = {
    general: "This places the film inside the wrong historical relationship between place, narration, media mixture, performance and image-making.",
    south_korean_genre: "This places the film inside the wrong South Korean historical and production logic.",
    south_southeast_asian: "This places the film inside the wrong South or Southeast Asian institutional and production logic.",
    hong_kong_taiwan_urban_time: "This places the film inside the wrong Hong Kong or Taiwan relationship between city, memory, duration and spectatorship.",
    chinese_language_space_genre: "This places the film inside the wrong Chinese-language relationship between history, space, violence, genre and cinematic duration.",
    asian_transnational_urban_identity: "This places the film inside the wrong relationship between Asian city, displacement, divided identity, social systems and return.",
    japanese_ambiguity_dialogue: "This places the film inside the wrong Japanese relationship between uncertainty, conversation, institutional pressure, landscape and moral interpretation.",
  };
  return feedback[group];
}

export function createIndependentStorytellingFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const group = getIndependentStorytellingProfileGroup(profile.scenarioId);
  const donors = getIndependentStorytellingDonors(profile);
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
      feedback: partialFeedback(group),
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: missFeedback(group),
    }] : []),
  ];
}
