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
import { bandOfOutsidersFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirBandOfOutsiders";
import {
  getClockersDonorScenarioIds,
  getClockersFilmHistoryProfile,
} from "./scenarioFilmStudyCrimeNoirClockersCatalog";
import {
  getFargoFilmHistoryDonors,
  getFargoFilmHistoryProfile,
} from "./scenarioFilmStudyCrimeNoirFargoCatalog";
import { lostWeekendFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirLostWeekend";
import { malteseFalconFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirMalteseFalcon";
import {
  getMesrineKillerInstinctFilmHistoryDonors,
  getMesrineKillerInstinctFilmHistoryProfile,
} from "./scenarioFilmStudyCrimeNoirMesrineKillerInstinctCatalog";
import {
  getMesrinePublicEnemyFilmHistoryDonors,
  getMesrinePublicEnemyFilmHistoryProfile,
} from "./scenarioFilmStudyCrimeNoirMesrinePublicEnemyCatalog";
import { outOfThePastFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirOutOfThePast";
import {
  getTrueRomanceDonorScenarioIds,
  getTrueRomanceFilmHistoryProfile,
} from "./scenarioFilmStudyCrimeNoirTrueRomanceCatalog";

const profiles = {
  [malteseFalconFilmHistoryProfile.scenarioId]: malteseFalconFilmHistoryProfile,
  [lostWeekendFilmHistoryProfile.scenarioId]: lostWeekendFilmHistoryProfile,
  [outOfThePastFilmHistoryProfile.scenarioId]: outOfThePastFilmHistoryProfile,
  [bandOfOutsidersFilmHistoryProfile.scenarioId]: bandOfOutsidersFilmHistoryProfile,
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

export function getCrimeNoirTransformationsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getTrueRomanceFilmHistoryProfile(scenarioId)
    ?? getClockersFilmHistoryProfile(scenarioId)
    ?? getMesrinePublicEnemyFilmHistoryProfile(scenarioId)
    ?? getMesrineKillerInstinctFilmHistoryProfile(scenarioId)
    ?? getFargoFilmHistoryProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveCrimeNoirTransformationsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getCrimeNoirTransformationsFilmHistoryProfile(scenario.id);
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

export function createCrimeNoirTransformationsFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const trueRomanceDonorIds = getTrueRomanceDonorScenarioIds(profile);
  const clockersDonorIds = getClockersDonorScenarioIds(profile);
  const mesrinePublicEnemyDonors = getMesrinePublicEnemyFilmHistoryDonors(profile);
  const mesrineDonors = getMesrineKillerInstinctFilmHistoryDonors(profile);
  const fargoDonors = getFargoFilmHistoryDonors(profile);
  const priorityDonorIds = trueRomanceDonorIds ?? clockersDonorIds;
  const priorityDonors = priorityDonorIds?.map(
    (scenarioId) => profiles[scenarioId as keyof typeof profiles],
  ).filter(Boolean) as readonly FilmHistoryProfile[] | undefined;
  const donors = mesrinePublicEnemyDonors ?? mesrineDonors ?? fargoDonors ?? priorityDonors ?? Object.values(profiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const matchFeedback = mesrinePublicEnemyDonors
    ? "This matches the documented relationship between a concluding biographical chapter, public self-staging, media pressure, psychological paranoia, wider performance space, colour 35 mm Scope photography, episodic acceleration and circular fatalism."
    : mesrineDonors
      ? "This matches the documented relationship between a two-film historical biography, contested memoir evidence, international production, physical star transformation, colour 35 mm photography, episodic editing, detailed sound and public self-mythology."
      : fargoDonors
        ? "This matches Fargo's documented relationship between fabricated factual authority, regional crime writing, precise casting, small-crew winter locations, restrained 35mm observation, practical lighting, manufactured snow and Scandinavian-inflected orchestral music."
        : clockersDonorIds
          ? "This matches the documented relationship between literary crime adaptation, Black Brooklyn authorship, field research, location production, new performers, cross-processed film, subjective flashback and social consequence."
          : "This matches the documented relationship between crime tradition, industrial production conditions and the film's specific performance, image, editing and sound system.";
  const partialFeedback = mesrinePublicEnemyDonors
    ? "This is another real crime or noir production system, but it does not combine the Mesrine diptych's later public identity, media performance, changing disguises, multi-axis pursuit form and return to a known endpoint in the same way."
    : mesrineDonors
      ? "This is another real crime or noir production system, but it does not combine a two-part biography, reverse-ordered physical transformation, France-Canada production, disputed memoir evidence and changing public identity in the same way."
      : fargoDonors
        ? "This is another real noir or regional crime-production system, but it does not combine Fargo's false true-story frame, Minnesota speech and casting, bright horizonless snowscapes, restrained observational camera and grave folk-derived score."
        : trueRomanceDonorIds
          ? "This is another real crime or noir production system, but it organizes fatalism, classical investigation or New Wave play without True Romance's postmodern lovers-on-the-run screenplay, studio road scale and hopeful ending."
          : clockersDonorIds
            ? "This is another real crime, addiction or youth-noir production system, but it does not combine Clockers' Universal-to-Spike-Lee adaptation history, Brooklyn housing-project research, Black ensemble authorship and experimental Ektachrome process."
            : "This is a real crime or noir production system, but it organizes adaptation, studio control, location work, performance and narrative time differently.";
  const missFeedback = mesrinePublicEnemyDonors
    ? "This places the film inside the wrong relationship between historical evidence, public mythology, media visibility, psychological pursuit, period craft, performance space, episodic time and fatal closure."
    : mesrineDonors
      ? "This places the film inside the wrong relationship between historical evidence, biographical selection, international production, star transformation, period craft, episodic time, sound and public mythology."
      : fargoDonors
        ? "This places the film inside the wrong relationship between regional authorship, factual deception, banal economic crime, winter geography, practical-location craft, tonal violence and moral comedy."
        : trueRomanceDonorIds
          ? "This places the film inside the wrong relationship between video-store cinephilia, ensemble dialogue, outlaw romance, widescreen colour, ratings edits and director-writer version history."
          : clockersDonorIds
            ? "This places the film inside the wrong relationship between police procedure, drug-economy social pressure, Brooklyn location research, reconstructed evidence imagery, cross-processing and subjective urban realism."
            : "This assigns the film to the wrong historical, industrial and stylistic crime-production logic.";
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
