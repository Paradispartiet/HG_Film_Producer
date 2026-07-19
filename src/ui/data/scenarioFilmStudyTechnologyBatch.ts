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

const technologyHistoryProfiles = {
  scenario_halloween_1978: {
    scenarioId: "scenario_halloween_1978",
    period: "Late-1970s American independent horror and the emergence of the modern slasher",
    traditions: ["Independent horror", "Slasher formation", "Anamorphic suspense staging"],
    before: "The film draws on point-of-view horror, suburban threat and earlier stalking narratives, but strips the method down to patient framing, withheld violence and repeated visual misdirection.",
    moment: "A tightly controlled independent production uses Panavision anamorphic space, a long masked opening, foreground-background threat, economical long takes and Carpenter's spare piano theme to make ordinary streets and houses unsafe.",
    after: "Its enormous cycle of imitators made many of its devices seem generic, while the original remains a key teaching case for how framing, editing, music and restraint established the modern slasher's visual grammar.",
    historyQuestion: "Which historical explanation best connects Halloween's independent production method to the formation of modern slasher cinema?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The Library of Congress places the film at the dawn of the modern slasher cycle and distinguishes its restraint from later imitators." },
      { area: "movement_and_tradition", status: "source_verified", note: "Point-of-view stalking, suburban vulnerability and minimal gore form a historically important slasher grammar." },
      { area: "industry_and_production_context", status: "source_verified", note: "The independent production organizes long takes and simple setups as both an economical method and a suspense system." },
      { area: "reception_and_legacy", status: "source_verified", note: "National Film Registry recognition and the documented wave of imitations support its continuing historical importance." },
      { area: "directing", status: "source_verified", note: "Carpenter and Cundey organize red herrings, double scares, misdirection and delayed revelation as a repeatable suspense method." },
      { area: "performance", status: "mapped", note: "Stillness, glances and physical vulnerability support the stalking design; dedicated performance research remains pending." },
      { area: "production_design", status: "mapped", note: "Ordinary suburban homes, streets and doorways become a spatial threat system without spectacle-oriented design." },
      { area: "costume_makeup", status: "mapped", note: "The mask and dark silhouette are central visual identifiers, but their design history still needs dedicated source review." },
      { area: "cinematography", status: "source_verified", note: "Anamorphic widescreen and point-of-view movement turn empty frame edges and background depth into lurking space." },
      { area: "lighting", status: "source_verified", note: "Controlled pools of light, shadowed doorways and reveal timing are documented parts of the scare construction." },
      { area: "camera_format", status: "source_verified", note: "Dean Cundey confirms Panavision anamorphic photography and the extended moving point-of-view opening." },
      { area: "editing", status: "source_verified", note: "Tense editing, withheld revelation and patient long-take structure control when threat becomes legible." },
      { area: "sound_design", status: "source_verified", note: "Silence, off-screen uncertainty and abrupt sonic emphasis support suspense rather than constant impact." },
      { area: "music", status: "source_verified", note: "Carpenter's recurring piano theme is identified by the Library of Congress as a defining part of the film's effect." },
      { area: "effects_animation", status: "not_central", note: "The film's historical method depends on framing and suspense more than effects or graphic gore." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to this controlled fiction production." },
    ],
  },
  scenario_tangerine_2015: {
    scenarioId: "scenario_tangerine_2015",
    period: "Mid-2010s microbudget digital cinema and the normalization of smartphone feature production",
    traditions: ["American independent cinema", "Street-level location filmmaking", "Mobile-phone cinematography"],
    before: "The film follows low-budget location cinema, collaborative social realism and earlier consumer-digital experiments that used lightweight tools to work outside conventional production scale.",
    moment: "Three iPhone 5s cameras, FiLMiC Pro, anamorphic adapters, compact stabilization, saturated grading and a small crew make rapid public-location shooting compatible with first-time performers and a kinetic Los Angeles story.",
    after: "Its Sundance breakthrough and later institutional attention made it a durable example of smartphone capture becoming a credible feature-film choice rather than merely a novelty or test format.",
    historyQuestion: "Which production history best explains why Tangerine's phone camera changes performance, location access and visual energy at the same time?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Sundance documents the film's place in 2015 independent cinema and its importance for trans representation and resourceful production." },
      { area: "movement_and_tradition", status: "source_verified", note: "The film joins microbudget street cinema with a historically visible smartphone-production breakthrough." },
      { area: "industry_and_production_context", status: "source_verified", note: "A very small budget and crew made the iPhone workflow an organic production solution rather than a marketing stunt." },
      { area: "reception_and_legacy", status: "source_verified", note: "Sundance and technical retrospectives describe the film as changing perceptions of mobile feature filmmaking." },
      { area: "screenplay", status: "source_verified", note: "Baker describes collaborative development shaped by the lead performers' knowledge and a planned ensemble collision at Donut Time." },
      { area: "directing", status: "source_verified", note: "The discreet camera permits rapid street work, close actor access and a performance-led comic pace." },
      { area: "performance", status: "source_verified", note: "The familiar, non-intimidating phone camera supported first-time actors while trans performers helped shape the world and dialogue." },
      { area: "production_design", status: "mapped", note: "Real shops, streets, transit and the Donut Time location form the production world rather than constructed sets." },
      { area: "costume_makeup", status: "research_pending", note: "Costume, hair and makeup are visible character systems but still require dedicated department-level sourcing." },
      { area: "cinematography", status: "source_verified", note: "The phone image, anamorphic adapters, stabilization and intentionally saturated treatment produce the kinetic widescreen look." },
      { area: "lighting", status: "mapped", note: "Available Los Angeles light is central to the image, but a dedicated lighting account is still needed." },
      { area: "camera_format", status: "source_verified", note: "The equipment record specifies three iPhone 5s cameras, FiLMiC Pro, Moondog anamorphic adapters and Steadicam Smoothee." },
      { area: "editing", status: "source_verified", note: "The project record identifies Final Cut Pro editing and DaVinci Resolve grading within the mobile-production workflow." },
      { area: "sound_design", status: "source_verified", note: "The climax used extensive lavalier coverage so overlapping ensemble dialogue could be shaped in postproduction." },
      { area: "music", status: "mapped", note: "Music adds speed and city texture, but the soundtrack still needs its own source audit." },
      { area: "effects_animation", status: "not_central", note: "Effects are not central; the digital transformation occurs primarily through capture, stabilization and grading." },
      { area: "documentary_method", status: "mapped", note: "Discreet public-location shooting and collaboration with performers create observational immediacy inside scripted fiction." },
    ],
  },
  scenario_the_lighthouse_2019: {
    scenarioId: "scenario_the_lighthouse_2019",
    period: "Late-2010s historical horror using reconstructed early-photographic technology",
    traditions: ["Maritime gothic", "Expressionist chamber horror", "Photochemical period reconstruction"],
    before: "The production draws on maritime folklore, nineteenth-century photography, early cinema ratios and chamber dramas that trap performers inside an increasingly unstable space.",
    moment: "35mm Double-X black-and-white stock, a custom filter emulating orthochromatic response, vintage Baltars, custom Petzval lenses, a 1.19 frame and a working location-built lighthouse make the 1890 setting material rather than decorative.",
    after: "The film provides a contemporary reference for recreating an earlier image technology through coordinated stock, optics, filtration, format, design and lighting instead of applying a generic vintage effect in postproduction.",
    historyQuestion: "Which technical history best explains why The Lighthouse looks like an invented artifact from an earlier photographic era?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The production aligns an 1890 setting with researched lighthouse construction and early photographic response." },
      { area: "movement_and_tradition", status: "source_verified", note: "Maritime gothic and expressionist chamber horror are joined to an explicitly historical photographic system." },
      { area: "industry_and_production_context", status: "source_verified", note: "A 35-day single-camera production built a working period lighthouse and weathered severe coastal conditions." },
      { area: "reception_and_legacy", status: "mapped", note: "The case is already useful as a technical reference, but broader influence claims remain deliberately unmade." },
      { area: "screenplay", status: "mapped", note: "Repetition, labor and power struggle structure the two-hander; dedicated screenplay sourcing remains pending." },
      { area: "directing", status: "source_verified", note: "Eggers and Blaschke coordinate confinement, period research, formal framing and heightened optical moments as one system." },
      { area: "performance", status: "mapped", note: "The square frame and single-camera pressure intensify the two performances, but acting-method research remains pending." },
      { area: "production_design", status: "source_verified", note: "The location-built lighthouse included a working Fresnel lens and was designed to withstand the exposed coastal shoot." },
      { area: "costume_makeup", status: "research_pending", note: "Costume, grime and facial texture matter to the period image but need dedicated sources." },
      { area: "cinematography", status: "source_verified", note: "The 1.19 frame balances portraits against vertical architecture and traps the two characters together." },
      { area: "lighting", status: "source_verified", note: "Extensive testing coordinated hard monochrome light with the custom spectral response and vintage lenses." },
      { area: "camera_format", status: "source_verified", note: "The documented package combines Double-X 5222, Millennium XL2, Baltars, custom Petzvals and orthochromatic-emulation filtration." },
      { area: "editing", status: "mapped", note: "Repetition and hallucination shape the rhythm, but the edit still needs an editor-level source." },
      { area: "sound_design", status: "mapped", note: "Wind, machinery, sea and foghorn pressure are central to the case brief but await dedicated sound-team verification." },
      { area: "music", status: "research_pending", note: "The score has not yet received dedicated source mapping." },
      { area: "effects_animation", status: "mapped", note: "Selective in-camera and postproduction techniques support heightened images, but effects are secondary to optics and physical design." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to this highly controlled historical fiction." },
    ],
  },
  scenario_the_favourite_2018: {
    scenarioId: "scenario_the_favourite_2018",
    period: "Late-2010s revisionist period cinema shaped by contemporary wide-angle staging",
    traditions: ["Period court drama", "Power-game chamber cinema", "Available-light 35mm production"],
    before: "The film inherits royal court drama and candlelit period cinema, but rejects stately coverage and decorative fullness in favor of visual distortion, sparse scale and unstable movement.",
    moment: "Real Hatfield House interiors, 35mm negative, natural and candle light, 6mm-to-10mm lenses, fisheye distortion, reflective surfaces and fluid camera movement turn court politics into a spatial contest.",
    after: "The case demonstrates how period cinema can preserve material history while using conspicuously contemporary lenses and movement to interpret power rather than imitate a neutral historical look.",
    historyQuestion: "Which production strategy best explains how The Favourite makes an eighteenth-century court feel physically modern and psychologically unstable?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The design mixes real historic interiors and period objects with deliberate invention instead of claiming documentary reconstruction." },
      { area: "movement_and_tradition", status: "source_verified", note: "The film revises court drama through available-light 35mm photography, fisheye distortion and actor-led spatial play." },
      { area: "industry_and_production_context", status: "source_verified", note: "Hatfield House locations, a small design team and limited artificial lighting require departments to solve image construction together." },
      { area: "reception_and_legacy", status: "mapped", note: "The film is a strong teaching case for revisionist period form, while broader influence claims remain pending." },
      { area: "screenplay", status: "mapped", note: "Status reversals, intimacy and manipulation shape the drama; dedicated writer-level sourcing remains pending." },
      { area: "directing", status: "source_verified", note: "Lanthimos rejects conventional coverage and treats the camera, actors and huge rooms as a fluid power system." },
      { area: "performance", status: "mapped", note: "Ensemble timing and bodily status games are central but need dedicated performance sourcing." },
      { area: "production_design", status: "source_verified", note: "Reflective floors, mirrors, fabrics, sparse furnishings and designed objects help real locations carry both power and available light." },
      { area: "costume_makeup", status: "mapped", note: "Costume strongly separates rank and character, but detailed costume verification remains a separate research task." },
      { area: "cinematography", status: "source_verified", note: "Extreme wide and fisheye lenses make bodies small, expose ceilings and corners and distort rooms into strategic arenas." },
      { area: "lighting", status: "source_verified", note: "Day interiors rely on window light; night interiors use composed candle sources and reflective design surfaces." },
      { area: "camera_format", status: "source_verified", note: "The production used 35mm negative with very wide lenses, including 10mm and 6mm fisheye views." },
      { area: "editing", status: "source_verified", note: "The rejection of conventional coverage and use of fluid spatial shots shape an edit organized around rivalry and reversal." },
      { area: "sound_design", status: "mapped", note: "Dialogue, rooms and formal social sound support power shifts, but sound-team sourcing remains pending." },
      { area: "music", status: "mapped", note: "Music sharpens courtly unease and rivalry but still needs a dedicated source audit." },
      { area: "effects_animation", status: "not_central", note: "The primary distortions come from lenses, blocking, design and movement rather than effects spectacle." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to this deliberately revisionist period fiction." },
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

export function getTechnologyFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return technologyHistoryProfiles[scenarioId as keyof typeof technologyHistoryProfiles];
}

export function resolveTechnologyFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getTechnologyFilmHistoryProfile(scenario.id);
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

export function createTechnologyFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const donors = Object.values(technologyHistoryProfiles)
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
      feedback: "This connects the film's historical position directly to its documented production method.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: "This is a real film-historical explanation, but it belongs to a different production tradition.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: "This places the film inside the wrong historical and technical system.",
    }] : []),
  ];
}
