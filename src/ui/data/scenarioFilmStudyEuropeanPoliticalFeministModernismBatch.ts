import {
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  summarizeFilmStudyCoverage,
  type FilmStudyCoverageOverride,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { FilmHistoryChoice, FilmHistoryProfile, ScenarioFilmStudyMap } from "./scenarioFilmStudyMap";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";
import { beauTravailFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoliticalBeauTravail";
import { cleoFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoliticalCleo";
import { conformistFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoliticalConformist";
import { jeanneDielmanFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoliticalJeanneDielman";
import {
  getEuropeanReligiousMoralDonors,
  getEuropeanReligiousMoralProfile,
} from "./scenarioFilmStudyEuropeanReligiousMoralCatalog";

const profiles = {
  [cleoFilmHistoryProfile.scenarioId]: cleoFilmHistoryProfile,
  [conformistFilmHistoryProfile.scenarioId]: conformistFilmHistoryProfile,
  [jeanneDielmanFilmHistoryProfile.scenarioId]: jeanneDielmanFilmHistoryProfile,
  [beauTravailFilmHistoryProfile.scenarioId]: beauTravailFilmHistoryProfile,
} as const satisfies Record<string, FilmHistoryProfile>;

function rank(status: FilmStudyCoverageOverride["status"]): number {
  if (status === "source_verified") return 4;
  if (status === "mapped") return 3;
  if (status === "not_central") return 2;
  return 1;
}

function mergeCoverage(...sets: readonly (readonly FilmStudyCoverageOverride[])[]): readonly FilmStudyCoverageOverride[] {
  const merged = new Map<string, FilmStudyCoverageOverride>();
  for (const set of sets) {
    for (const item of set) {
      const current = merged.get(item.area);
      if (!current || rank(item.status) >= rank(current.status)) merged.set(item.area, item);
    }
  }
  return [...merged.values()];
}

function briefCoverage(brief: ScenarioProductionBrief): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "screenplay", status: "mapped", note: brief.screenplayTargets.join(" · ") },
    { area: "cinematography", status: "mapped", note: brief.cinematographyTargets.join(" · ") },
    { area: "editing", status: "mapped", note: brief.editingTargets.join(" · ") },
    { area: "sound_design", status: "mapped", note: brief.soundTargets.join(" · ") },
  ];
}

function profileCoverage(profile: FilmHistoryProfile): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "historical_context", status: "source_verified", note: profile.period },
    { area: "movement_and_tradition", status: "source_verified", note: profile.traditions.join(" · ") },
    { area: "industry_and_production_context", status: "source_verified", note: profile.moment },
    { area: "reception_and_legacy", status: "source_verified", note: profile.after },
    ...profile.technicalHighlights,
  ];
}

export function getEuropeanPoliticalFeministModernismFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return getEuropeanReligiousMoralProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveEuropeanPoliticalFeministModernismFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getEuropeanPoliticalFeministModernismFilmHistoryProfile(scenario.id);
  if (!historyProfile) return undefined;
  const coverage = completeFilmStudyCoverage(mergeCoverage(briefCoverage(brief), profileCoverage(historyProfile)));
  return {
    scenarioId: scenario.id,
    title: scenario.film.title,
    year: scenario.film.year,
    broadEra: getFilmHistoryEra(scenario.film.year),
    historyStatus: "source_backed",
    historyProfile,
    coverage,
    coverageSummary: summarizeFilmStudyCoverage(coverage),
    verification: getProductionCaseVerification(scenario.id),
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  return hash;
}

export function createEuropeanPoliticalFeministModernismFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const religiousMoralDonors = getEuropeanReligiousMoralDonors(profile);
  const donors = religiousMoralDonors ?? Object.values(profiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const religiousPartial = "This is another documented European religious or moral modernist system, but it builds ethical pressure through a different relation between institution, performance, landscape, objects, editing and sound.";
  const religiousMiss = "This assigns the film to the wrong relationship between belief, property, sacred representation, bodily restraint, social institution and audiovisual form.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: religiousMoralDonors
        ? "This matches the documented relationship between European moral history, belief, institutions and the film's concrete production system."
        : "This matches the documented relationship between political or feminist history and the film's concrete production system.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: religiousMoralDonors
        ? religiousPartial
        : "This is a real European modernist production system, but it organizes time, bodies, space, memory and sound differently.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: religiousMoralDonors
        ? religiousMiss
        : "This assigns the film to the wrong political, feminist and formal production logic.",
    }] : []),
  ];
}
