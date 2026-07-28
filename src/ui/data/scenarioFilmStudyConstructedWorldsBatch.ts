import {
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  summarizeFilmStudyCoverage,
  type FilmStudyCoverageOverride,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "./filmScenarios";
import type {
  FilmHistoryChoice,
  FilmHistoryProfile,
  ScenarioFilmStudyMap,
} from "./scenarioFilmStudyMap";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";
import { brazilFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsBrazil";
import { coreConstructedWorldsProfiles } from "./scenarioFilmStudyConstructedWorldsCoreCatalog";
import {
  getDogvilleFilmHistoryDonors,
  getDogvilleFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsDogvilleCatalog";
import {
  getForrestGumpDonorScenarioIds,
  getForrestGumpFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsForrestGumpCatalog";
import {
  getHugoFilmHistoryDonors,
  getHugoFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsHugoCatalog";
import {
  getMoonriseKingdomFilmHistoryDonors,
  getMoonriseKingdomFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsMoonriseKingdomCatalog";
import {
  getTheImpossibleFilmHistoryDonors,
  getTheImpossibleFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsTheImpossibleCatalog";
import {
  getThePianistFilmHistoryDonors,
  getThePianistFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsPianistCatalog";
import {
  getWalleDonorScenarioIds,
  getWalleFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsWalleCatalog";

const constructedWorldsProfiles = {
  ...coreConstructedWorldsProfiles,
  [brazilFilmHistoryProfile.scenarioId]: brazilFilmHistoryProfile,
} as const satisfies Record<string, FilmHistoryProfile>;

function statusRank(status: FilmStudyCoverageOverride["status"]): number {
  if (status === "source_verified") return 4;
  if (status === "mapped") return 3;
  if (status === "not_central") return 2;
  return 1;
}

function mergeCoverageOverrides(
  ...overrideSets: readonly (readonly FilmStudyCoverageOverride[])[]
): readonly FilmStudyCoverageOverride[] {
  const merged = new Map<string, FilmStudyCoverageOverride>();
  for (const overrides of overrideSets) {
    for (const override of overrides) {
      const existing = merged.get(override.area);
      if (!existing || statusRank(override.status) >= statusRank(existing.status)) {
        merged.set(override.area, override);
      }
    }
  }
  return [...merged.values()];
}

function briefOverrides(brief: ScenarioProductionBrief): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "screenplay", status: "mapped", note: brief.screenplayTargets.join(" · ") },
    { area: "cinematography", status: "mapped", note: brief.cinematographyTargets.join(" · ") },
    { area: "editing", status: "mapped", note: brief.editingTargets.join(" · ") },
    { area: "sound_design", status: "mapped", note: brief.soundTargets.join(" · ") },
  ];
}

function profileOverrides(profile: FilmHistoryProfile): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "historical_context", status: "source_verified", note: profile.period },
    { area: "movement_and_tradition", status: "source_verified", note: profile.traditions.join(" · ") },
    { area: "industry_and_production_context", status: "source_verified", note: profile.moment },
    { area: "reception_and_legacy", status: profile.technicalHighlights.find((item) => item.area === "reception_and_legacy")?.status ?? "mapped", note: profile.after },
    ...profile.technicalHighlights,
  ];
}

export function getConstructedWorldsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return getTheImpossibleFilmHistoryProfile(scenarioId)
    ?? getMoonriseKingdomFilmHistoryProfile(scenarioId)
    ?? getHugoFilmHistoryProfile(scenarioId)
    ?? getWalleFilmHistoryProfile(scenarioId)
    ?? getDogvilleFilmHistoryProfile(scenarioId)
    ?? getThePianistFilmHistoryProfile(scenarioId)
    ?? getForrestGumpFilmHistoryProfile(scenarioId)
    ?? constructedWorldsProfiles[scenarioId as keyof typeof constructedWorldsProfiles];
}

export function resolveConstructedWorldsFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getConstructedWorldsFilmHistoryProfile(scenario.id);
  if (!historyProfile) return undefined;
  const verification = getProductionCaseVerification(scenario.id);
  const coverage = completeFilmStudyCoverage(mergeCoverageOverrides(
    briefOverrides(brief),
    profileOverrides(historyProfile),
  ));
  return {
    scenarioId: scenario.id,
    title: scenario.film.title,
    year: scenario.film.year,
    broadEra: getFilmHistoryEra(scenario.film.year),
    historyStatus: "source_backed",
    historyProfile,
    coverage,
    coverageSummary: summarizeFilmStudyCoverage(coverage),
    verification,
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

export function createConstructedWorldsFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const impossibleDonors = getTheImpossibleFilmHistoryDonors(profile);
  const moonriseDonors = getMoonriseKingdomFilmHistoryDonors(profile);
  const hugoDonors = getHugoFilmHistoryDonors(profile);
  const walleDonorIds = getWalleDonorScenarioIds(profile);
  const walleDonors = walleDonorIds?.flatMap((scenarioId) => {
    const candidate = constructedWorldsProfiles[scenarioId as keyof typeof constructedWorldsProfiles];
    return candidate ? [candidate] : [];
  });
  const dogvilleDonors = getDogvilleFilmHistoryDonors(profile);
  const thePianistDonors = getThePianistFilmHistoryDonors(profile);
  const forrestGumpDonorScenarioIds = getForrestGumpDonorScenarioIds(profile);
  const donors: readonly FilmHistoryProfile[] = (impossibleDonors
    ?? moonriseDonors
    ?? hugoDonors
    ?? walleDonors
    ?? dogvilleDonors
    ?? thePianistDonors
    ?? (forrestGumpDonorScenarioIds
      ? forrestGumpDonorScenarioIds.flatMap((scenarioId) => {
        const candidate = constructedWorldsProfiles[scenarioId as keyof typeof constructedWorldsProfiles];
        return candidate ? [candidate] : [];
      })
      : Object.values(coreConstructedWorldsProfiles)))
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = impossibleDonors || moonriseDonors || hugoDonors || walleDonors || dogvilleDonors || thePianistDonors ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const forrestGumpPartial = "This is another real constructed-world system built from repetition, historical periods or controlled reality, but it does not combine autobiographical narration, national archive, invisible body effects, popular music and studio melodrama in the same way.";
  const forrestGumpMiss = "This places the film inside the wrong relationship between fictional memory, American history, period design, performance, anamorphic photography, archival compositing, editing, sound and music.";
  const thePianistMatch = "This matches the documented production relationship among Szpilman's survivor memoir, Polanski's restricted viewpoint, the French-Polish-German-British co-production, Warsaw-Babelsberg-Jüterbog reconstruction, Brody's bodily survival performance, Starski and Sheppard's historical material world, Edelman's restrained 35 mm image, the progressively emptied sound field and Chopin as profession, memory and identity.";
  const thePianistPartial = "This is another real wartime, reconstructed-city or historical-memory system, but it does not combine one civilian survivor's access to shelter, food, sight and music with the same multinational reconstruction of occupied and destroyed Warsaw.";
  const thePianistMiss = "This places the film inside the wrong relationship between survivor testimony, Holocaust history, restricted civilian viewpoint, reconstructed urban destruction, bodily depletion, 35 mm observation, silence, practical sound and piano performance.";
  const dogvilleMatch = "This matches the documented production relationship among the prologue-and-nine-chapter moral parable, post-Dogme theatrical abstraction, Peter Grant's chalk town, exposed ensemble performance, mobile digital close-ups, computer-controlled stage light, sound-created invisible architecture, Baroque counterpoint and composited overhead views.";
  const dogvillePartial = "This is another real artificial-town, total-space or von Trier digital-performance system, but it does not make absent walls, visible neighbours, narrated chapters, mime and off-screen sound the same moral laboratory.";
  const dogvilleMiss = "This places the film inside the wrong relationship between theatrical abstraction, social surveillance, ensemble exposure, digital camera mobility, stage lighting, narrated structure, invisible doors, sparse props and composited geography.";
  const walleMatch = "This matches the documented relationship between silent-comedy robot performance, ecological worldbuilding, color-scripted environments, simulated photographed-camera behavior, Ben Burtt's vocal-mechanical sound and orchestral-pop musical memory.";
  const wallePartial = "This is another real constructed-world production, but it does not combine dialogue-light animation, consumer dystopia, virtual 70 mm camera research, robot sound language and an Earth-to-space ecological romance in the same way.";
  const walleMiss = "This places the film inside the wrong relationship between animation, silent visual storytelling, environmental design, virtual optics, editing, sound identity, music and ecological return.";
  const hugoMatch = "This matches the documented relationship between Scorsese's Méliès adaptation, native paired-camera 3D, Ferretti's constructed station and Paris, period performance and costume, Richardson's stereoscopic image, Schoonmaker's spatial editing, award-winning sound, Shore's score and integrated practical-digital effects.";
  const hugoPartial = "This is another real constructed-world, mechanical-character or reconstructed-city system, but it does not combine a 1930s station mystery, cinema preservation, native 3D depth, clockwork geography and recovered Méliès spectacle in the same way.";
  const hugoMiss = "This places the film inside the wrong relationship between film history, period reconstruction, stereoscopic digital photography, mechanical production design, editing, sound, music, visual effects and preservation.";
  const moonriseMatch = "This matches the documented relationship among Anderson and Coppola's 1965 runaway screenplay, Rhode Island locations, Stockhausen's hand-built island geography, Walicka Maimone's researched costumes, Yeoman's Super 16 tableaux, Weisblum's diagrammatic editing, Britten records, Desplat's score and the approaching storm.";
  const moonrisePartial = "This is another real period, child-centred or meticulously constructed world, but it does not combine scout procedure, island maps, handmade refuge, frontal ensemble staging, Super 16 texture, private record listening and hurricane-scale reunion in the same way.";
  const moonriseMiss = "This places the film inside the wrong relationship between 1965 research, child performance, island location design, scout material culture, costume, Super 16 photography, graphic editing, sound, music and weather effects.";
  const impossibleMatch = "This matches the documented relationship among María Belón's survivor account, Bayona and Sánchez's family-centred reconstruction, actual Thai locations, tank-bound actor performance, full-scale debris, one-third-scale resort miniatures, Faura's restricted camera, Ruiz and Vilaplana's parallel search edit, practical sound, Velázquez's score and El Ranchito's digital extensions.";
  const impossiblePartial = "This is another real survival, historical-reconstruction or large-effects system, but it does not combine one family's tsunami testimony, Thai resort and hospital geography, full-scale water, miniatures, prosthetic injury, restricted family viewpoints and practical-digital destruction in the same way.";
  const impossibleMiss = "This places the film inside the wrong relationship between survivor testimony, historical disaster, family separation, Thai location authenticity, tank performance, miniature destruction, mobile Scope photography, editing, sound, score and visual effects.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: impossibleDonors
        ? impossibleMatch
        : moonriseDonors
          ? moonriseMatch
          : hugoDonors
            ? hugoMatch
            : walleDonors
              ? walleMatch
              : dogvilleDonors
                ? dogvilleMatch
                : thePianistDonors
                  ? thePianistMatch
                  : "This connects the film's constructed world, historical position and documented craft system.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: impossibleDonors
        ? impossiblePartial
        : moonriseDonors
          ? moonrisePartial
          : hugoDonors
            ? hugoPartial
            : walleDonors
              ? wallePartial
              : dogvilleDonors
                ? dogvillePartial
                : thePianistDonors
                  ? thePianistPartial
                  : forrestGumpDonorScenarioIds
                    ? forrestGumpPartial
                    : "This is a real constructed-world method, but it belongs to a different historical and production system.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: impossibleDonors
        ? impossibleMiss
        : moonriseDonors
          ? moonriseMiss
          : hugoDonors
            ? hugoMiss
            : walleDonors
              ? walleMiss
              : dogvilleDonors
                ? dogvilleMiss
                : thePianistDonors
                  ? thePianistMiss
                  : forrestGumpDonorScenarioIds
                    ? forrestGumpMiss
                    : "This places the film inside the wrong temporal, spatial and technical tradition.",
    }] : []),
  ];
}
