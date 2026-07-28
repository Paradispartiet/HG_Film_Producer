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
import { beforeTheRainFilmHistoryProfile } from "./scenarioFilmStudyBalkanWarInstitutionBeforeRain";
import { noMansLandFilmHistoryProfile } from "./scenarioFilmStudyBalkanWarInstitutionNoMansLand";
import { quoVadisAidaFilmHistoryProfile } from "./scenarioFilmStudyBalkanWarInstitutionQuoVadisAida";
import {
  getTangerinesFilmHistoryDonors,
  getTangerinesFilmHistoryProfile,
} from "./scenarioFilmStudyBalkanWarInstitutionTangerines";
import { undergroundFilmHistoryProfile } from "./scenarioFilmStudyBalkanWarInstitutionUnderground";

const profiles = {
  [beforeTheRainFilmHistoryProfile.scenarioId]: beforeTheRainFilmHistoryProfile,
  [undergroundFilmHistoryProfile.scenarioId]: undergroundFilmHistoryProfile,
  [noMansLandFilmHistoryProfile.scenarioId]: noMansLandFilmHistoryProfile,
  [quoVadisAidaFilmHistoryProfile.scenarioId]: quoVadisAidaFilmHistoryProfile,
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

export function getBalkanWarInstitutionSystemsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getTangerinesFilmHistoryProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveBalkanWarInstitutionSystemsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getBalkanWarInstitutionSystemsFilmHistoryProfile(scenario.id);
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

export function createBalkanWarInstitutionSystemsFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const tangerinesDonors = getTangerinesFilmHistoryDonors(profile);
  const donors = tangerinesDonors
    ?? Object.values(profiles)
      .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
      .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = tangerinesDonors ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const tangerinesMatch = "This matches the documented relationship among Urushadze's rapidly written shelter screenplay, the 1992 Abkhazian conflict, the Estonian-Georgian co-production, Guria standing in for Abkhazia, four restrained performances, Telia's house-workshop-orchard geography, Kotov's widescreen reframing and contrasted light, Kuranov's lulls and ruptures, Felt and Kallaste's fragile domestic sound field and Diasamidze's restrained recurring score.";
  const tangerinesPartial = "This is another real contained antiwar system built around enemy proximity and a practical spatial problem, but it does not organise one civilian host, two wounded enemies, agricultural work, hospitality and a threatened domestic truce in the same way.";
  const tangerinesMiss = "This places the film inside the wrong relationship between the Abkhazian war, Estonian-settler history, chamber performance, shelter, harvest labour, restrained widescreen observation, interrupted silence, music and antiwar moral change.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: tangerinesDonors
        ? tangerinesMatch
        : "This matches the documented relationship between Balkan war history, production geography, institutions, narrative form, performance, image, editing, music and sound.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: tangerinesDonors
        ? tangerinesPartial
        : "This is a real Balkan war-production system, but it organises circular time, historical grotesque, contained satire and civilian institutional reconstruction differently.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: tangerinesDonors
        ? tangerinesMiss
        : "This assigns the film to the wrong historical, industrial and formal war-production logic.",
    }] : []),
  ];
}
