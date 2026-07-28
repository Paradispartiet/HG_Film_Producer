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
  getHerFilmHistoryDonors,
  getHerFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsHerCatalog";
import {
  getHugoFilmHistoryDonors,
  getHugoFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsHugoCatalog";
import {
  getMoonriseKingdomFilmHistoryDonors,
  getMoonriseKingdomFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsMoonriseKingdomCatalog";
import {
  getRushFilmHistoryDonors,
  getRushFilmHistoryProfile,
} from "./scenarioFilmStudyConstructedWorldsRushCatalog";
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
  return getRushFilmHistoryProfile(scenarioId)
    ?? getHerFilmHistoryProfile(scenarioId)
    ?? getTheImpossibleFilmHistoryProfile(scenarioId)
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
  const rushDonors = getRushFilmHistoryDonors(profile);
  const herDonors = getHerFilmHistoryDonors(profile);
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
  const donors: readonly FilmHistoryProfile[] = (rushDonors
    ?? herDonors
    ?? impossibleDonors
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
  const start = rushDonors
    ? 2
    : herDonors || impossibleDonors || moonriseDonors || hugoDonors || walleDonors || dogvilleDonors || thePianistDonors
      ? 0
      : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const rushMatch = "This matches the documented relationship among Morgan's Hunt-Lauda two-hander, Howard's independently scaled historical reconstruction, Hemsworth and Brühl's opposed performance systems, real and replica Formula One cars, substitute circuits, Dod Mantle's mixed digital cameras and vintage lenses, Hanley and Hill's BAFTA-winning edit, exact historic-engine recording, Zimmer's score and integrated practical-digital race effects.";
  const rushPartial = "This is another real body, labour or public-performance sports system, but it does not combine two Formula One rivals, a reconstructed 1976 championship, real historic machinery, multi-camera digital speed, period paddocks, engine-specific sound and a mutually defining biographical structure in the same way.";
  const rushMiss = "This places the film inside the wrong relationship between historical sports biography, two-driver rivalry, practical racing danger, substituted circuits, digital cameras with vintage optics, performance-led race editing, exact engine identity, score and invisible effects.";
  const herMatch = "This matches the documented relationship among Jonze's voice-led romance, Phoenix's embodied listening, Johansson's reconstructed postproduction performance, Barrett and Serdena's Los Angeles-Shanghai future, Storm's warm historical-future wardrobe, van Hoytema's intimate colour image, Zumbrunnen and Buchanan's unseen-partner editing, Klyce's discreet interface sound and Arcade Fire's emotional score.";
  const herPartial = "This is another real artificial-world, mediated-relationship or technology-character system, but it does not combine an invisible operating-system lover, warm non-dystopian urban design, 35 mm intimacy, rewritten voice performance and romantic editing in the same way.";
  const herMiss = "This places the film inside the wrong relationship between near-future worldbuilding, disembodied performance, humane interface design, photochemical observation, editorial absence, sound, music and romantic structure.";
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
  const impossibleMatch = "This matches the documented relationship among Maria Belón's survivor testimony, Bayona and Sánchez's restricted family viewpoint, Thailand locations, Spanish water tanks, controlled actor rigs, one-third-scale resort models, Faura's Super 35 and high-speed image, fragmented editing, overwhelming water sound, Velázquez's respectful score and practical-digital destruction.";
  const impossiblePartial = "This is another real water, historical-survival or large practical-digital production system, but it does not combine one family's 2004 tsunami testimony, Thailand locations, controlled currents, miniature resort destruction, prosthetic injury, hospital search and separated family viewpoint in the same way.";
  const impossibleMiss = "This places the film inside the wrong relationship between witness-based historical reconstruction, family survival, actor safety, water engineering, scale models, Super 35 photography, high-speed capture, editing, sound, music and digital integration.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: rushDonors
        ? rushMatch
        : herDonors
          ? herMatch
          : impossibleDonors
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
      feedback: rushDonors
        ? rushPartial
        : herDonors
          ? herPartial
          : impossibleDonors
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
      feedback: rushDonors
        ? rushMiss
        : herDonors
          ? herMiss
          : impossibleDonors
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
