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
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";
import { dogtoothFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureDogtooth";
import { huntFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureHunt";
import {
  getLaHaineDonorScenarioIds,
  getLaHaineFilmHistoryProfile,
} from "./scenarioFilmStudyEuropeanPressureLaHaineCatalog";
import { measureOfAManFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureMeasure";
import { revancheFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureRevanche";
import {
  getFourMonthsFilmHistoryDonors,
  getFourMonthsFilmHistoryProfile,
} from "./scenarioFilmStudyRomanianPressureFourMonthsCatalog";

const europeanPressureProfiles = {
  [dogtoothFilmHistoryProfile.scenarioId]: dogtoothFilmHistoryProfile,
  [huntFilmHistoryProfile.scenarioId]: huntFilmHistoryProfile,
  [measureOfAManFilmHistoryProfile.scenarioId]: measureOfAManFilmHistoryProfile,
  [revancheFilmHistoryProfile.scenarioId]: revancheFilmHistoryProfile,
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

export function getEuropeanPressureFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getFourMonthsFilmHistoryProfile(scenarioId)
    ?? getLaHaineFilmHistoryProfile(scenarioId)
    ?? europeanPressureProfiles[scenarioId as keyof typeof europeanPressureProfiles];
}

export function resolveEuropeanPressureFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getEuropeanPressureFilmHistoryProfile(scenario.id);
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

export function createEuropeanPressureFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const fourMonthsDonors = getFourMonthsFilmHistoryDonors(profile);
  const laHaineDonorIds = getLaHaineDonorScenarioIds(profile);
  const laHaineDonors = laHaineDonorIds?.map(
    (scenarioId) => europeanPressureProfiles[scenarioId as keyof typeof europeanPressureProfiles],
  ).filter(Boolean) as readonly FilmHistoryProfile[] | undefined;
  const donors = fourMonthsDonors ?? laHaineDonors ?? Object.values(europeanPressureProfiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = fourMonthsDonors || laHaineDonorIds ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const matchFeedback = fourMonthsDonors
    ? "This matches the documented relationship among testimony-derived illegal-abortion history, Mobra Films production, one-day procedural structure, exact performance, real locations, widescreen one-shot staging, offscreen action, long-take editing, reconstructed practical sound and withheld music."
    : laHaineDonorIds
      ? "This matches the documented relationship between police violence, banlieue social pressure, twenty-four-hour structure, local preparation, black-and-white 35mm, shifting camera scale, countdown editing, environmental music and offscreen sound."
      : "This connects the film's social pressure directly to its documented historical position, production conditions, performance system and image strategy.";
  const partialFeedback = fourMonthsDonors
    ? "This is another real bodily-autonomy, moral-procedure or one-day social-pressure system, but it does not combine 1987 Romanian abortion illegality, dormitory barter, hotel coercion, exact dialogue, long-take widescreen framing and offscreen practical sound in the same way."
    : laHaineDonorIds
      ? "This is another real European social-pressure system, but it organizes labor procedure, rural criminal consequence or community accusation through a different relationship between location, performance, camera duration and institutional power."
      : "This is a real European system for staging social pressure, but it belongs to another relationship between realism, allegory, genre and production method.";
  const missFeedback = fourMonthsDonors
    ? "This places the film inside the wrong relationship between Ceaușescu-era reproductive control, testimony-based writing, one-day logistics, female friendship, coercion, real-location period detail, subjective camera movement, ellipsis, offscreen sound and refusal of explanatory music."
    : laHaineDonorIds
      ? "This places the film inside the wrong relationship between banlieue preparation, minority youth ensemble, wide-versus-long-lens geography, hip-hop environment, clock rhythm, gunshot punctuation and fatal police escalation."
      : "This places the film inside the wrong historical balance of institution, performance, camera restraint and narrative form.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: matchFeedback,
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: partialFeedback,
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: missFeedback,
    }] : []),
  ];
}
