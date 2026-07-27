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
import { centralStationFilmHistoryProfile } from "./scenarioFilmStudyFestivalJourneyCentralStation";
import { eternityDayFilmHistoryProfile } from "./scenarioFilmStudyFestivalJourneyEternityDay";
import { headOnFilmHistoryProfile } from "./scenarioFilmStudyFestivalJourneyHeadOn";
import { motorcycleDiariesFilmHistoryProfile } from "./scenarioFilmStudyFestivalJourneyMotorcycleDiaries";
import { pelleFilmHistoryProfile } from "./scenarioFilmStudyFestivalJourneyPelle";

const profiles = {
  [pelleFilmHistoryProfile.scenarioId]: pelleFilmHistoryProfile,
  [centralStationFilmHistoryProfile.scenarioId]: centralStationFilmHistoryProfile,
  [eternityDayFilmHistoryProfile.scenarioId]: eternityDayFilmHistoryProfile,
  [headOnFilmHistoryProfile.scenarioId]: headOnFilmHistoryProfile,
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

export function getFestivalJourneyDisplacementSystemsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  if (scenarioId === motorcycleDiariesFilmHistoryProfile.scenarioId) return motorcycleDiariesFilmHistoryProfile;
  return profiles[scenarioId as keyof typeof profiles];
}

export function resolveFestivalJourneyDisplacementSystemsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getFestivalJourneyDisplacementSystemsFilmHistoryProfile(scenario.id);
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

export function createFestivalJourneyDisplacementSystemsFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const donors = profile.scenarioId === motorcycleDiariesFilmHistoryProfile.scenarioId
    ? [centralStationFilmHistoryProfile, eternityDayFilmHistoryProfile, headOnFilmHistoryProfile]
    : Object.values(profiles)
      .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
      .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = profile.scenarioId === motorcycleDiariesFilmHistoryProfile.scenarioId
    ? 0
    : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: profile.scenarioId === motorcycleDiariesFilmHistoryProfile.scenarioId
        ? "This matches the documented relationship among the two memoirs, multi-country route research, political coming-of-age, regional performers and non-actors, mobile film photography, natural light, practical period environments, episodic editing, location sound and acoustic music."
        : "This matches the documented relationship between migration or displacement, festival-era production, location, performance, image, editing, sound and journey structure.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: profile.scenarioId === motorcycleDiariesFilmHistoryProfile.scenarioId
        ? "This is another real journey, border or ethical-transformation production system, but it does not combine Guevara and Granado's 1952 route, memoir adaptation, political awakening, regional non-actors, mobile Super 16 work and continental identity in the same way."
        : "This is a real journey or border production system, but it organizes class, geography, memory, performance, music and national identity differently.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: profile.scenarioId === motorcycleDiariesFilmHistoryProfile.scenarioId
        ? "This places the film inside the wrong relationship between historical biography, actual route, Latin American social observation, improvisation, photochemical location production, editing and music."
        : "This assigns the film to the wrong historical, industrial and formal journey-production logic.",
    }] : []),
  ];
}
