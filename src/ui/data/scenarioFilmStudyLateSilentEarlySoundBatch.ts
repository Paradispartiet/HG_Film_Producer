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
import { passionOfJoanFilmHistoryProfile } from "./scenarioFilmStudyLateSilentJoan";
import { manWithMovieCameraFilmHistoryProfile } from "./scenarioFilmStudyLateSilentMovieCamera";
import { mFilmHistoryProfile } from "./scenarioFilmStudyEarlySoundM";
import { cityLightsFilmHistoryProfile } from "./scenarioFilmStudyEarlySoundCityLights";

const profiles = {
  [passionOfJoanFilmHistoryProfile.scenarioId]: passionOfJoanFilmHistoryProfile,
  [manWithMovieCameraFilmHistoryProfile.scenarioId]: manWithMovieCameraFilmHistoryProfile,
  [mFilmHistoryProfile.scenarioId]: mFilmHistoryProfile,
  [cityLightsFilmHistoryProfile.scenarioId]: cityLightsFilmHistoryProfile,
} as const satisfies Record<string, FilmHistoryProfile>;

function rank(status: FilmStudyCoverageOverride["status"]): number {
  if (status === "source_verified") return 4;
  if (status === "mapped") return 3;
  if (status === "not_central") return 2;
  return 1;
}

function merge(...sets: readonly (readonly FilmStudyCoverageOverride[])[]): readonly FilmStudyCoverageOverride[] {
  const output = new Map<string, FilmStudyCoverageOverride>();
  for (const set of sets) for (const item of set) {
    const current = output.get(item.area);
    if (!current || rank(item.status) >= rank(current.status)) output.set(item.area, item);
  }
  return [...output.values()];
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

export function getLateSilentEarlySoundFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return profiles[scenarioId as keyof typeof profiles];
}

export function resolveLateSilentEarlySoundFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getLateSilentEarlySoundFilmHistoryProfile(scenario.id);
  if (!historyProfile) return undefined;
  const coverage = completeFilmStudyCoverage(merge(briefCoverage(brief), profileCoverage(historyProfile)));
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

function hash(value: string): number {
  let output = 0;
  for (let index = 0; index < value.length; index += 1) output = (output * 31 + value.charCodeAt(index)) >>> 0;
  return output;
}

export function createLateSilentEarlySoundFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const donors = Object.values(profiles).filter((candidate) => candidate.scenarioId !== profile.scenarioId).sort((a, b) => a.scenarioId.localeCompare(b.scenarioId));
  const start = hash(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  return [
    { id: `${profile.scenarioId}-history-match`, label: `${profile.period}: ${profile.moment}`, quality: "match", feedback: "This matches the documented relation between historical transition, production method and film form." },
    ...(near ? [{ id: `${profile.scenarioId}-history-partial`, label: `${near.period}: ${near.moment}`, quality: "partial" as const, feedback: "This is a real transition-era system, but it organizes image, editing, performance and sound differently." }] : []),
    ...(far ? [{ id: `${profile.scenarioId}-history-miss`, label: `${far.period}: ${far.moment}`, quality: "miss" as const, feedback: "This assigns the film to the wrong production tradition and transition strategy." }] : []),
  ];
}
