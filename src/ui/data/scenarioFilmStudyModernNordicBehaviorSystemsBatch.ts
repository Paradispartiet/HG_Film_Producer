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
import { anotherRoundFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorAnotherRound";
import { forceMajeureFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorForceMajeure";
import {
  getASomewhatGentleManFilmHistoryDonors,
  getASomewhatGentleManFilmHistoryProfile,
} from "./scenarioFilmStudyModernNordicBehaviorSomewhatGentleManCatalog";
import {
  getTheSquareFilmHistoryDonors,
  getTheSquareFilmHistoryProfile,
} from "./scenarioFilmStudyModernNordicBehaviorTheSquareCatalog";
import { womanAtWarFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorWomanAtWar";
import { worstPersonFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorWorstPerson";

const profiles = {
  [forceMajeureFilmHistoryProfile.scenarioId]: forceMajeureFilmHistoryProfile,
  [womanAtWarFilmHistoryProfile.scenarioId]: womanAtWarFilmHistoryProfile,
  [anotherRoundFilmHistoryProfile.scenarioId]: anotherRoundFilmHistoryProfile,
  [worstPersonFilmHistoryProfile.scenarioId]: worstPersonFilmHistoryProfile,
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

export function getModernNordicBehaviorSystemsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getTheSquareFilmHistoryProfile(scenarioId)
    ?? getASomewhatGentleManFilmHistoryProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveModernNordicBehaviorSystemsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getModernNordicBehaviorSystemsFilmHistoryProfile(scenario.id);
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

export function createModernNordicBehaviorSystemsFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const theSquareDonors = getTheSquareFilmHistoryDonors(profile);
  const somewhatGentleManDonors = getASomewhatGentleManFilmHistoryDonors(profile);
  const specialDonors = theSquareDonors ?? somewhatGentleManDonors;
  const donors = specialDonors ?? Object.values(profiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = specialDonors ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const isTheSquare = Boolean(theSquareDonors);
  const match = isTheSquare
    ? "This matches the documented relationship among the real Värnamo trust-square experiment, Plattform's European museum satire, Östlund's situation-led repeated performance, Wenzel's ALEXA 1.85:1 shallow-focus observation, Åsberg's institution design and an edit built from prolonged social tests rather than conventional comic coverage."
    : somewhatGentleManDonors
      ? "This matches the documented relationship between Kim Fupz Aakeson's revised screenplay, compact Oslo production, ageing Nordic ensemble, deadpan crime behaviour, cold practical image, pause-led editing, ordinary sound and dry musical counterpoint."
      : "This matches the documented relationship between modern Nordic social conditions, performance experiment, location, image, editing, sound and genre design.";
  const partial = isTheSquare
    ? "This is another real behavioural or institutional comedy system, but it does not combine a public-art field experiment, contemporary-museum prestige, repeated social tests, gala bystander choreography and Östlund/Wenzel's deliberately altered 1.85:1 visual method in the same way."
    : somewhatGentleManDonors
      ? "This is another real modern Nordic behaviour system, but it does not combine post-prison reintegration, low-level revenge, ageing sexuality, compact Oslo factory locations and deadpan ensemble timing in the same way."
      : "This is a real modern Nordic production system, but it organizes behaviour, social pressure, landscape, performance, music and subjective form differently.";
  const miss = isTheSquare
    ? "This places the film inside the wrong relationship between public trust, cultural institutions, privileged social performance, contemporary-art design, long-take observation, repeated behaviour, situation-led editing and spectatorship."
    : somewhatGentleManDonors
      ? "This places the film inside the wrong relationship between Nordic crime comedy, ageing dignity, practical Oslo production, restrained performance, cold visual tone, editing pauses, sound and music."
      : "This assigns the film to the wrong Nordic historical, industrial and formal production logic.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: match,
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: partial,
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: miss,
    }] : []),
  ];
}
