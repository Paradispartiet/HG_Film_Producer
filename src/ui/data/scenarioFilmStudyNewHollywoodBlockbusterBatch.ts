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
import { bonnieAndClydeFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodBonnieAndClyde";
import { godfatherFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodGodfather";
import { jawsFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodJaws";
import {
  getNewHollywoodNewYorkDonors,
  getNewHollywoodNewYorkProfile,
} from "./scenarioFilmStudyNewHollywoodNewYorkCatalog";
import { starWarsFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodStarWars";

const profiles = {
  [bonnieAndClydeFilmHistoryProfile.scenarioId]: bonnieAndClydeFilmHistoryProfile,
  [godfatherFilmHistoryProfile.scenarioId]: godfatherFilmHistoryProfile,
  [jawsFilmHistoryProfile.scenarioId]: jawsFilmHistoryProfile,
  [starWarsFilmHistoryProfile.scenarioId]: starWarsFilmHistoryProfile,
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

export function getNewHollywoodBlockbusterFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getNewHollywoodNewYorkProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveNewHollywoodBlockbusterFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getNewHollywoodBlockbusterFilmHistoryProfile(scenario.id);
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

export function createNewHollywoodBlockbusterFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const newYorkDonors = getNewHollywoodNewYorkDonors(profile);
  const donors = newYorkDonors ?? Object.values(profiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const partialFeedback = newYorkDonors
    ? "This is another real 1970s New York production system, but it organizes subculture, institutional procedure, subjective nightmare or romanticized city space through a different balance of performance, camera, editing, sound and music."
    : "This is a real New Hollywood-era production system, but it organizes location, performance, image, editing, effects and sound differently.";
  const missFeedback = newYorkDonors
    ? "This assigns the film to the wrong relationship between New York geography, antihero performance, production economy, image design, editing, sound and public space."
    : "This assigns the film to the wrong New Hollywood production tradition and craft logic.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: "This matches the documented relationship between New Hollywood production conditions and the film's specific craft system.",
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
