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
  getAdamsApplesFilmHistoryDonors,
  getAdamsApplesFilmHistoryProfile,
} from "./scenarioFilmStudyNordicMinimalistAdamsApplesCatalog";
import {
  getKitchenStoriesFilmHistoryDonors,
  getKitchenStoriesFilmHistoryProfile,
} from "./scenarioFilmStudyNordicMinimalistKitchenStoriesCatalog";
import { manWithoutPastFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistManWithoutPast";
import { matchFactoryGirlFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistMatchFactoryGirl";
import {
  getNoiTheAlbinoFilmHistoryDonors,
  getNoiTheAlbinoFilmHistoryProfile,
} from "./scenarioFilmStudyNordicMinimalistNoiAlbinoCatalog";
import { osloAugust31stFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistOsloAugust31st";
import {
  getAPigeonSatFilmHistoryDonors,
  getAPigeonSatFilmHistoryProfile,
} from "./scenarioFilmStudyNordicMinimalistPigeonCatalog";
import { songsFromSecondFloorFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistSongsFromSecondFloor";

const profiles = {
  [matchFactoryGirlFilmHistoryProfile.scenarioId]: matchFactoryGirlFilmHistoryProfile,
  [songsFromSecondFloorFilmHistoryProfile.scenarioId]: songsFromSecondFloorFilmHistoryProfile,
  [manWithoutPastFilmHistoryProfile.scenarioId]: manWithoutPastFilmHistoryProfile,
  [osloAugust31stFilmHistoryProfile.scenarioId]: osloAugust31stFilmHistoryProfile,
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

export function getNordicMinimalistSocialSystemsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getAPigeonSatFilmHistoryProfile(scenarioId)
    ?? getAdamsApplesFilmHistoryProfile(scenarioId)
    ?? getNoiTheAlbinoFilmHistoryProfile(scenarioId)
    ?? getKitchenStoriesFilmHistoryProfile(scenarioId)
    ?? profiles[scenarioId as keyof typeof profiles];
}

export function resolveNordicMinimalistSocialSystemsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getNordicMinimalistSocialSystemsFilmHistoryProfile(scenario.id);
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

export function createNordicMinimalistSocialSystemsFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const pigeonDonors = getAPigeonSatFilmHistoryDonors(profile);
  const adamsApplesDonors = getAdamsApplesFilmHistoryDonors(profile);
  const noiDonors = getNoiTheAlbinoFilmHistoryDonors(profile);
  const kitchenStoriesDonors = getKitchenStoriesFilmHistoryDonors(profile);
  const specialDonors = pigeonDonors ?? adamsApplesDonors ?? noiDonors ?? kitchenStoriesDonors;
  const donors = specialDonors ?? Object.values(profiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = specialDonors ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: pigeonDonors
        ? "This matches the documented production relationship among the final Living Trilogy chapter, Studio 24 independence, linked death-and-existence vignettes, two novelty salesmen, hand-built hyperreal rooms, trompe-l'oeil depth, nonprofessional faces, pale costume and makeup, fixed digital deep-focus tableaux, exact scene ordering, environmental sound, recurring songs and selective visual effects."
        : adamsApplesDonors
          ? "This matches the documented production relationship among a modern Book of Job screenplay, Danish-German production, a rural rehabilitation micro-community, cast-specific writing, repeated ensemble rehearsal, 35 mm CinemaScope deadpan, controlled design, emotionally disciplined editing, restrained sound, pop-song counterpoint and award-winning disasters around the apple tree and Ivan's body."
          : noiDonors
            ? "This matches the documented production relationship among the New Icelandic Wave, a twelve-year character idea, European coproduction, a snow-dependent Westfjords settlement, Tómas Lemarquis and a locally recruited ensemble, Rasmus Videbæk's 35 mm white-landscape and dark-interior contrast, the basement refuge, Daniel Dencik's deadpan cutting, Pétur Einarsson's practical sound, Slowblow's restrained music and the avalanche that turns imagined escape into physical catastrophe."
            : kitchenStoriesDonors
              ? "This matches the documented production relationship among postwar Swedish home research, Norwegian-Swedish coproduction, the no-contact observation protocol, Calmeyer and Norström's restrained friendship, Billy Johansson's kitchen-chair-caravan design, Philip Øgaard's 35 mm framing, patient editing, practical silence and Hans Mathisen's music."
              : "This matches the documented relationship between Nordic social conditions, production scale, performance, spatial design, image, editing and sound.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: pigeonDonors
        ? "This is another real constructed tableau, ensemble or social-comedy production system, but it does not combine the closing Living Trilogy perspective, death prologue, recurring novelty salesmen, historical anachronism, corpse-pale human types, hand-built Studio 24 hyperreality and organised cruelty inside the same static moral gaze."
        : adamsApplesDonors
          ? "This is another real Nordic deadpan, damaged-community or moral-rehabilitation production system, but it does not combine a neo-Nazi and a denial-driven priest, the Book of Job, apple-pie labour, repeated cast rehearsal, pastoral CinemaScope, escalating tree catastrophes, grotesque bodily damage and How Deep Is Your Love in the same way."
          : noiDonors
            ? "This is another real Nordic outsider, deadpan or socially confined production system, but it does not combine one rebellious teenager, a plausible invented fjord village, amateur community performance, school and petrol-station routine, a basement refuge, tropical escape images, dangerous snow and sudden avalanche rupture in the same way."
            : kitchenStoriesDonors
              ? "This is another real Nordic deadpan, institutional or observational production system, but it does not combine an elevated observation chair, a ban on contact, postwar kitchen science, cross-border mistrust and friendship through the same practical domestic space."
              : "This is a real Nordic minimalist or social production system, but it organizes studio control, location, performance, narrative time and colour differently.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: pigeonDonors
        ? "This places the film inside the wrong relationship between Roy Andersson's independent studio, Living Trilogy completion, vignette structure, fixed deep-focus observation, hyperreal set construction, pale ensemble choreography, historical time collapse, environmental sound, music and effects-supported social allegory."
        : adamsApplesDonors
          ? "This places the film inside the wrong relationship between Danish black comedy, theological fable, rehabilitation institution, ensemble preparation, controlled wide-screen framing, emotional editing, sound restraint, popular music, practical violence and visual-effects-supported miracle."
          : noiDonors
            ? "This places the film inside the wrong relationship between Icelandic youth, institutional boredom, remote geography, professional and nonprofessional performance, winter production, 35 mm landscape, dark interiors, basement safety, practical sound, minimalist music, black comedy and catastrophic escape."
            : kitchenStoriesDonors
              ? "This places the film inside the wrong relationship between functionalist research, observer and subject, postwar national identity, kitchen architecture, male solitude, deadpan performance, silence and reciprocal care."
              : "This assigns the film to the wrong historical, industrial and stylistic Nordic production logic.",
    }] : []),
  ];
}
