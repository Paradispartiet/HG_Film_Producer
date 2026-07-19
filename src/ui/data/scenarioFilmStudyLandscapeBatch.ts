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

const landscapeCinemaProfiles = {
  scenario_no_country_for_old_men_2007: {
    scenarioId: "scenario_no_country_for_old_men_2007",
    period: "Mid-2000s American neo-western and precision location thriller",
    traditions: ["Neo-western", "Border crime cinema", "Sound-led suspense"],
    before: "The film inherits the western's border landscape, film noir's pursuit structure and Cormac McCarthy's fatalistic crime world, while reducing explanatory dialogue and heroic control.",
    moment: "Carefully scouted New Mexico and West Texas spaces, storyboarded visual decisions, restrained acting, direct violence and an exceptionally sparse music track make terrain, objects and small sounds carry the pursuit.",
    after: "The case remains useful for teaching how a contemporary western can create suspense through geography, physical procedure and acoustic detail without conventional musical prompting or excessive coverage.",
    historyQuestion: "Which production system best explains how No Country for Old Men turns border landscape and near-silence into a modern western thriller?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Institutional and craft accounts place the film inside a contemporary border setting shaped by western and crime traditions." },
      { area: "movement_and_tradition", status: "source_verified", note: "The film revises western pursuit, noir fatalism and procedural suspense through a deliberately stripped-down contemporary form." },
      { area: "industry_and_production_context", status: "source_verified", note: "The production used extensive scouting, planning and location work across New Mexico and West Texas." },
      { area: "reception_and_legacy", status: "mapped", note: "The film is an established teaching case for neo-western form and sound-led suspense, while broader influence claims remain outside the current evidence set." },
      { area: "screenplay", status: "source_verified", note: "Sparse dialogue, withheld information and physical action preserve the adaptation's fatalistic pursuit structure." },
      { area: "directing", status: "source_verified", note: "The Coens coordinate storyboarded geography, matter-of-fact violence, behavioral detail and controlled silence rather than explanatory emphasis." },
      { area: "performance", status: "mapped", note: "Physical behavior, pauses and minimal speech carry character intention; dedicated actor-level research remains pending." },
      { area: "production_design", status: "mapped", note: "Motels, roads, weapons, vehicles and ordinary objects become procedural clues and threats, but the design department still needs dedicated sourcing." },
      { area: "costume_makeup", status: "research_pending", note: "Costume and physical appearance support the period and regional world but have not received a department-level source review." },
      { area: "cinematography", status: "source_verified", note: "Deakins' location photography uses stark terrain, controlled framing and readable pursuit geography without romanticizing the landscape." },
      { area: "lighting", status: "mapped", note: "Naturalistic day and night work support the direct visual system, but a dedicated lighting account remains pending." },
      { area: "camera_format", status: "mapped", note: "The current sources document the visual method and locations but do not yet support a complete camera-and-lens package record." },
      { area: "editing", status: "source_verified", note: "The edit alternates procedure, pursuit and absence while refusing to over-explain violence or provide conventional payoff coverage." },
      { area: "sound_design", status: "source_verified", note: "Designed weapons, footsteps, wind, room resonance and dynamic contrast carry suspense in the near-absence of score." },
      { area: "music", status: "source_verified", note: "The exceptionally limited conventional score is a deliberate part of the film's acoustic restraint rather than missing decoration." },
      { area: "effects_animation", status: "not_central", note: "Effects are secondary to location, practical action, performance, editing and sound." },
      { area: "documentary_method", status: "not_central", note: "The film uses observed physical detail but is not organized around documentary or research-based nonfiction method." },
    ],
  },
  scenario_into_the_wild_2007: {
    scenarioId: "scenario_into_the_wild_2007",
    period: "Mid-2000s American road film and location-based biographical adaptation",
    traditions: ["Road movie", "Biographical adaptation", "Wilderness journey cinema"],
    before: "The film follows the American road movie, nature writing and biographical cinema, in which movement through real geography becomes a search for identity and freedom.",
    moment: "An extended production revisits actual journey locations across changing seasons, accommodates physical transformation and weather, and uses nonlinear Alaska passages, 35mm photography, design and music to bind many regions into one subjective memory journey.",
    after: "The case is useful for teaching how a biography can be built through dispersed geography, interrupted production and editorial structure rather than a single continuous location or strictly chronological account.",
    historyQuestion: "Which production history best explains how Into the Wild converts a real journey across many places and seasons into one coherent subjective road film?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The production retraces a documented late-twentieth-century journey and connects biography to specific American landscapes and communities." },
      { area: "movement_and_tradition", status: "source_verified", note: "Road-movie movement, wilderness cinema and biographical adaptation are joined through real-location production." },
      { area: "industry_and_production_context", status: "source_verified", note: "The shoot was spread across months and actual locations, with weather, seasons and the actor's physical transformation shaping scheduling and continuity." },
      { area: "reception_and_legacy", status: "mapped", note: "AFI recognition supports the film's cultural position, while claims of wider formal influence remain deliberately unmade." },
      { area: "screenplay", status: "source_verified", note: "The adaptation selects episodes from a real life and places Alaska throughout the film rather than saving it for a purely chronological conclusion." },
      { area: "directing", status: "source_verified", note: "Sean Penn coordinates physical journey, real places, changing seasons and performance so landscape remains dramatic experience rather than travel illustration." },
      { area: "performance", status: "source_verified", note: "Physical transformation, weather exposure and location-based action make the central performance part of the production chronology." },
      { area: "production_design", status: "source_verified", note: "The production designer's work connects actual environments, period detail and the material traces of the journey across many regions." },
      { area: "costume_makeup", status: "mapped", note: "Clothing and bodily change register travel, season and deterioration, but dedicated costume and makeup sources remain pending." },
      { area: "cinematography", status: "source_verified", note: "35mm location photography distinguishes regions and seasons while preserving the journey as a coherent visual experience." },
      { area: "lighting", status: "mapped", note: "Available weather and natural environments are central, but a dedicated cinematographer account of the lighting strategy is still needed." },
      { area: "camera_format", status: "source_verified", note: "Institutional records confirm 35mm color production; a complete lens and camera package remains outside the current source set." },
      { area: "editing", status: "source_verified", note: "Jay Cassidy describes intercutting Alaska with earlier travel, controlling geography, memory and physical continuity across an interrupted shoot." },
      { area: "sound_design", status: "mapped", note: "Environmental sound and journey transitions support place, but the sound department still needs dedicated source mapping." },
      { area: "music", status: "source_verified", note: "Composer and production-team testimony establishes music as a structural bridge between regions, memory and emotional movement." },
      { area: "effects_animation", status: "not_central", note: "The method prioritizes real locations, physical performance and editorial construction over effects spectacle." },
      { area: "documentary_method", status: "source_verified", note: "Research, real journey locations and biographical source material inform the fiction without turning it into documentary reconstruction." },
    ],
  },
  scenario_winter_s_bone_2010: {
    scenarioId: "scenario_winter_s_bone_2010",
    period: "Late-2000s American independent regional realism and rural noir",
    traditions: ["Regional realism", "Rural noir", "Female quest and western revision"],
    before: "The film combines the investigative quest and western passage through hostile territory with American regional realism's attention to labor, family networks and material survival.",
    moment: "Years of Ozarks research, a local liaison, real homes and objects, local and professional performers, a 24.5-day RED One shoot and a concentrated Missouri holler make regional knowledge part of writing, casting, design and photography.",
    after: "The case provides a model for studying how independent fiction can work with a living community and its material culture while actively resisting generic rural stereotypes.",
    historyQuestion: "Which production approach best explains how Winter's Bone becomes both a rural noir and a carefully researched regional portrait?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The film's social world is grounded in contemporary Ozarks family, property and survival conditions researched with regional participants." },
      { area: "movement_and_tradition", status: "source_verified", note: "Regional realism, rural noir and a young woman's investigative passage reshape familiar western and crime structures." },
      { area: "industry_and_production_context", status: "source_verified", note: "A 24.5-day independent RED One production concentrated much of its work in one holler and relied on local properties, knowledge and labor." },
      { area: "reception_and_legacy", status: "mapped", note: "The film is a strong teaching case for regional representation and independent production; wider influence remains outside the present verification." },
      { area: "screenplay", status: "source_verified", note: "The adaptation turns family obligation and a property deadline into a geographically precise investigation shaped by local social codes." },
      { area: "directing", status: "source_verified", note: "Granik uses research, local consultation and restrained observation to build tension without converting the community into exotic threat." },
      { area: "performance", status: "source_verified", note: "Professional and local performers share the world, and some roles draw directly on presence, speech and behavior found during regional casting." },
      { area: "production_design", status: "source_verified", note: "Real homes, tools, animals and found objects provide lived material detail instead of a generalized production-designed poverty aesthetic." },
      { area: "costume_makeup", status: "source_verified", note: "A small wardrobe budget, clothing exchanges with residents and worn practical layers preserve regional use, climate and economic reality." },
      { area: "cinematography", status: "source_verified", note: "The RED One and real Ozarks locations capture winter texture, distance and enclosure as parts of the investigation." },
      { area: "lighting", status: "mapped", note: "The image relies heavily on practical regional conditions, but a dedicated lighting account remains pending." },
      { area: "camera_format", status: "source_verified", note: "The production account confirms RED One digital capture within the fast independent schedule." },
      { area: "editing", status: "mapped", note: "The case brief maps clue control and performance rhythm, but an editor-level production account is still needed." },
      { area: "sound_design", status: "mapped", note: "Homes, woods, machinery and silence shape regional tension, but sound-team verification remains pending." },
      { area: "music", status: "mapped", note: "Regional musical culture contributes to the world, but the score and source-music system still need dedicated research." },
      { area: "effects_animation", status: "not_central", note: "The film's method depends on place, people, practical action and material detail rather than effects." },
      { area: "documentary_method", status: "source_verified", note: "Long research, local liaison work, regional casting and use of real properties give the scripted fiction a documented ethnographic discipline." },
    ],
  },
  scenario_beasts_of_the_southern_wild_2012: {
    scenarioId: "scenario_beasts_of_the_southern_wild_2012",
    period: "Early-2010s American collective independent filmmaking and magical regional realism",
    traditions: ["Magical realism", "Regional independent cinema", "Documentary-influenced 16mm fiction"],
    before: "The film draws on child-perspective storytelling, southern regional cinema, Les Blank's observational documentaries, nature films and handmade collective production.",
    moment: "Court 13 works with South Louisiana communities, nonprofessional performers and local craftspeople; salvaged environments, long rehearsal and improvisation, reactive Easyrig movement, 16mm capture and an extended edit keep the invented Bathtub inside Hushpuppy's physical and imaginative point of view.",
    after: "The case demonstrates how a fictional world can be built collectively from environmental research, local material knowledge and a strict subjective perspective without separating realism from fantasy.",
    historyQuestion: "Which historical and production tradition best explains how Beasts of the Southern Wild combines community reality, handmade fantasy and a child's point of view?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The fiction grows from South Louisiana land loss, island communities and environmental vulnerability researched during development." },
      { area: "movement_and_tradition", status: "source_verified", note: "Regional independent cinema, magical realism and documentary observation are combined inside a collective 16mm production." },
      { area: "industry_and_production_context", status: "source_verified", note: "Court 13's collective method, Sundance development support and local collaboration shape writing, casting, building, shooting and postproduction." },
      { area: "reception_and_legacy", status: "mapped", note: "Sundance and Cannes records establish the film's festival position, while broader influence claims remain deliberately unmade." },
      { area: "screenplay", status: "source_verified", note: "Research and community encounters reshape the original stage material into an absolute child-perspective story of land, family and imagined catastrophe." },
      { area: "directing", status: "source_verified", note: "Zeitlin organizes months of rehearsal, interviews and improvisation around Hushpuppy's perception rather than conventional adult exposition." },
      { area: "performance", status: "source_verified", note: "Nonprofessional performers contribute presence, speech and local knowledge through a long collaborative preparation process." },
      { area: "production_design", status: "source_verified", note: "Local craftspeople and the collective build homes, boats and objects through salvaged material logic that belongs to the Bathtub's lived economy." },
      { area: "costume_makeup", status: "mapped", note: "Costume and physical texture support the handmade world, but dedicated department-level sourcing remains pending." },
      { area: "cinematography", status: "source_verified", note: "A reactive, interested camera follows Hushpuppy's attention and gives the fantasy the instability and intimacy of observed life." },
      { area: "lighting", status: "mapped", note: "Natural environments and night work shaped the production, but the precise lighting strategy still needs dedicated verification." },
      { area: "camera_format", status: "source_verified", note: "The filmmakers identify 16mm capture and Easyrig-supported movement as deliberate choices for texture, mobility and point of view." },
      { area: "editing", status: "source_verified", note: "The extended edit protects Hushpuppy's point of view and finds a structure capable of moving between community detail, memory, myth and disaster." },
      { area: "sound_design", status: "mapped", note: "Weather, animals, water, machinery and voice create the Bathtub's density, but a dedicated sound-team account remains pending." },
      { area: "music", status: "mapped", note: "The score contributes scale and emotional propulsion, but its composition and recording process still need a separate source audit." },
      { area: "effects_animation", status: "mapped", note: "The aurochs and heightened disaster imagery are important, but effects and creature construction require dedicated technical sourcing." },
      { area: "documentary_method", status: "source_verified", note: "Environmental research, local collaboration, interviews, nonprofessional performance and an observational camera feed directly into the scripted fantasy." },
    ],
  },
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

export function getLandscapeFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return landscapeCinemaProfiles[scenarioId as keyof typeof landscapeCinemaProfiles];
}

export function resolveLandscapeFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getLandscapeFilmHistoryProfile(scenario.id);
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

export function createLandscapeFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const donors = Object.values(landscapeCinemaProfiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: "This connects the film's landscape, historical position and documented production method.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: "This is a real location-cinema method, but it belongs to a different regional and production tradition.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: "This places the film inside the wrong historical, regional and technical system.",
    }] : []),
  ];
}
