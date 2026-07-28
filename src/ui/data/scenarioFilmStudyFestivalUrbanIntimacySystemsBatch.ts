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
import {
  getBeforeSunriseFilmHistoryDonors,
  getBeforeSunriseFilmHistoryProfile,
} from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunriseCatalog";
import {
  getBeforeSunsetFilmHistoryDonors,
  getBeforeSunsetFilmHistoryProfile,
} from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunsetCatalog";
import { blackCoalThinIceFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyBlackCoal";
import { blueWarmestColourFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyBlue";
import { fromAfarFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyFromAfar";
import {
  getTheLunchboxFilmHistoryDonors,
  getTheLunchboxFilmHistoryProfile,
} from "./scenarioFilmStudyFestivalUrbanIntimacyLunchboxCatalog";
import { pietaFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyPieta";

const profiles = {
  [pietaFilmHistoryProfile.scenarioId]: pietaFilmHistoryProfile,
  [blueWarmestColourFilmHistoryProfile.scenarioId]: blueWarmestColourFilmHistoryProfile,
  [blackCoalThinIceFilmHistoryProfile.scenarioId]: blackCoalThinIceFilmHistoryProfile,
  [fromAfarFilmHistoryProfile.scenarioId]: fromAfarFilmHistoryProfile,
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

export function getFestivalUrbanIntimacySystemsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getTheLunchboxFilmHistoryProfile(scenarioId)
    ?? getBeforeSunsetFilmHistoryProfile(scenarioId)
    ?? getBeforeSunriseFilmHistoryProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveFestivalUrbanIntimacySystemsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getFestivalUrbanIntimacySystemsFilmHistoryProfile(scenario.id);
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

export function createFestivalUrbanIntimacySystemsFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const lunchboxDonors = getTheLunchboxFilmHistoryDonors(profile);
  const beforeSunsetDonors = getBeforeSunsetFilmHistoryDonors(profile);
  const beforeSunriseDonors = getBeforeSunriseFilmHistoryDonors(profile);
  const donors = lunchboxDonors ?? beforeSunsetDonors ?? beforeSunriseDonors ?? Object.values(profiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = lunchboxDonors || beforeSunsetDonors ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const matchFeedback = lunchboxDonors
    ? "This matches the documented relationship among Batra's dabbawala research, an India-France-Germany independent production, physically separated central performances, real Mumbai kitchens, offices, trains and delivery routes, parallel routine editing, 26 hours of specific city recordings, restrained Max Richter music and a handwritten correspondence structure carried by one practical lunchbox."
    : beforeSunsetDonors
      ? "This matches the documented relationship among nine years of real actor ageing, Linklater-Delpy-Hawke collaborative writing, an eighty-minute departing-flight deadline, a fifteen-day Paris production, fixed dialogue, long Steadicam movement, natural light, continuity editing, practical city sound and apartment music that becomes the final decision."
      : beforeSunriseDonors
        ? "This matches the documented relationship between Vienna co-production, collaborative dialogue writing, intensive rehearsal, two-person performance, real-location movement, 35mm observation, reaction-shot editing and near-real-time romantic duration."
        : "This matches the documented relationship between festival-era urban pressure, intimacy, class, violence, performance, image, editing and sound.";
  const partialFeedback = lunchboxDonors
    ? "This is another real adult city-intimacy system organised by elapsed time and exact words, but it places its central pair together in Paris rather than using food preparation, delivery labour, letters and parallel Mumbai routines to make physical separation productive."
    : beforeSunsetDonors
      ? "This is another real dialogue, relationship or urban-duration system, but it does not combine a sequel after nine actual years, one Paris afternoon, a flight deadline, collaborative actor-authorship and unobtrusive real-time camera movement in the same way."
      : beforeSunriseDonors
        ? "This is another real dialogue, city or one-night intimacy system, but it organizes ensemble geography, marital confrontation or urban solitude through a different balance of writing, rehearsal, camera duration, editing and sound."
        : "This is a real festival-era intimacy system, but it organizes industrial violence, embodied desire, noir investigation, class distance and actor process differently.";
  const missFeedback = lunchboxDonors
    ? "This places the film inside the wrong relationship between anonymous urban intervention, designed fairy-tale geography and graphic cause-and-effect; The Lunchbox instead depends on documentary-informed delivery logistics, ordinary domestic labour, restrained realism, correspondence and a couple who remain spatially apart."
    : beforeSunsetDonors
      ? "This places the film inside the wrong relationship between elapsed production time, sequel authorship, adult disappointment, Paris geography, real-time dialogue, natural-light continuity, editing and music-led open ending."
      : beforeSunriseDonors
        ? "This places the film inside the wrong relationship between transnational financing, Vienna location production, collaborative dialogue, two-person performance, near-real-time movement and romantic duration."
        : "This assigns the film to the wrong historical, industrial and formal urban-intimacy production logic.";
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
