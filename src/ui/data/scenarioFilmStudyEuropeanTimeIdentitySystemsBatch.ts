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
import { theVanishingFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityVanishing";
import { runLolaRunFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityRunLolaRun";
import { theWhiteRibbonFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityWhiteRibbon";
import { phoenixFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityPhoenix";
import {
  getSatantangoDonorScenarioIds,
  getSatantangoFilmHistoryProfile,
} from "./scenarioFilmStudyEuropeanTimeIdentitySatantangoCatalog";
import {
  getCharacterFilmHistoryDonors,
  getCharacterFilmHistoryProfile,
} from "./scenarioFilmStudyEuropeanTimeIdentityCharacterCatalog";
import {
  getTheReturnFilmHistoryDonors,
  getTheReturnFilmHistoryProfile,
} from "./scenarioFilmStudyEuropeanTimeIdentityTheReturnCatalog";

const coreProfiles = {
  [theVanishingFilmHistoryProfile.scenarioId]: theVanishingFilmHistoryProfile,
  [runLolaRunFilmHistoryProfile.scenarioId]: runLolaRunFilmHistoryProfile,
  [theWhiteRibbonFilmHistoryProfile.scenarioId]: theWhiteRibbonFilmHistoryProfile,
  [phoenixFilmHistoryProfile.scenarioId]: phoenixFilmHistoryProfile,
} as const satisfies Record<string, FilmHistoryProfile>;

const satantangoFilmHistoryProfile = getSatantangoFilmHistoryProfile("scenario_satantango_1994");

const profiles = {
  ...coreProfiles,
  ...(satantangoFilmHistoryProfile
    ? { [satantangoFilmHistoryProfile.scenarioId]: satantangoFilmHistoryProfile }
    : {}),
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

export function getEuropeanTimeIdentitySystemsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getTheReturnFilmHistoryProfile(scenarioId)
    ?? getCharacterFilmHistoryProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveEuropeanTimeIdentitySystemsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getEuropeanTimeIdentitySystemsFilmHistoryProfile(scenario.id);
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

function getChoiceDonors(profile: FilmHistoryProfile): FilmHistoryProfile[] {
  const theReturnDonors = getTheReturnFilmHistoryDonors(profile);
  if (theReturnDonors) return [...theReturnDonors];

  const characterDonors = getCharacterFilmHistoryDonors(profile);
  if (characterDonors) return [...characterDonors];

  const dedicatedIds = getSatantangoDonorScenarioIds(profile);
  if (dedicatedIds) {
    const donors: FilmHistoryProfile[] = [];
    for (const scenarioId of dedicatedIds) {
      const candidate = coreProfiles[scenarioId as keyof typeof coreProfiles];
      if (candidate) donors.push(candidate);
    }
    return donors;
  }

  return Object.values(coreProfiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}

export function createEuropeanTimeIdentitySystemsFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const theReturnDonors = getTheReturnFilmHistoryDonors(profile);
  const characterDonors = getCharacterFilmHistoryDonors(profile);
  const donors = getChoiceDonors(profile);
  const start = theReturnDonors || characterDonors || getSatantangoDonorScenarioIds(profile) ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const matchFeedback = theReturnDonors
    ? "This matches the documented production relationship among an unexplained paternal return, two opposed child viewpoints, a seven-day road and island journey, Ren Film production, Lavronenko-Garin-Dobronravov performance, Krichman's colour 35 mm landscape, Pakhomova's practical spaces, Mogilevsky's tightening edit, Dergachev's restrained music and sound and the film's unresolved spiritual authority."
    : characterDonors
      ? "This matches the documented relationship among Bordewijk's two source texts, a murder-confession frame, multinational reconstruction of prewar Rotterdam, monumental period design, 35 mm colour, controlled performance, nonlinear memory and forceful music."
      : "This matches the documented relationship between European suspense, historical control, recursive time, identity performance, image, editing, music and sound.";
  const partialFeedback = theReturnDonors
    ? "This is another real European system of authoritarian family life, durational landscape or child-centred moral travel, but it does not combine a father's unexplained return, two brothers' conflicting belief, physical training, road movement, fog, boat labour, island secrecy and sudden bereavement in the same way."
    : characterDonors
      ? "This is another real European time-and-identity production system, but it organises procedural obsession, authoritarian history or postwar identity rehearsal without Character's father-son debt struggle, social ascent and composite prewar city."
      : "This is a real European time-and-identity production system, but it organises procedural knowledge, recursive velocity, historical suspicion and postwar rehearsal differently.";
  const missFeedback = theReturnDonors
    ? "This places the film inside the wrong relationship between post-Soviet family authority, child perception, withheld backstory, practical journey geography, colour 35 mm landscape, religious imagery, environmental sound, paternal discipline and catastrophic loss."
    : characterDonors
      ? "This places the film inside the wrong relationship between literary adaptation, murder framing, social ambition, paternal authority, reconstructed urban history, period design and psychological melodrama."
      : "This assigns the film to the wrong historical, temporal and audiovisual production logic.";
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
