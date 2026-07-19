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

const constructedWorldsProfiles = {
  scenario_groundhog_day_1993: {
    scenarioId: "scenario_groundhog_day_1993",
    period: "Early-1990s American high-concept comedy transformed into an existential time-loop fable",
    traditions: ["High-concept comedy", "Time-loop narrative", "Small-town transformation story"],
    before: "The film inherits supernatural comedy, conversion narratives and the classical rule that a comic premise must remain legible even while character behavior changes around it.",
    moment: "The production turns one repeated day into a coordinated craft system: recurring town geography and actions stay recognizable while performance, shot emphasis, editorial duration and musical cues change Phil's relation to the same events.",
    after: "Its National Film Registry status and continuing use as the reference point for later loop narratives make it a durable teaching case for separating repeated plot information from accumulating character knowledge.",
    historyQuestion: "Which production method best explains how Groundhog Day repeats the same events without making the film itself feel mechanically repetitive?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Academy and Library of Congress records place the film inside early-1990s American comedy and its later preservation history." },
      { area: "movement_and_tradition", status: "source_verified", note: "The high-concept loop is treated as an existential and moral transformation structure rather than an explained science-fiction mechanism." },
      { area: "industry_and_production_context", status: "source_verified", note: "The Academy craft panel and editorial testimony document a coordinated production whose screenplay, photography, editing and music all had to sustain recognizable repetition." },
      { area: "reception_and_legacy", status: "source_verified", note: "The film entered the National Film Registry in 2006 and remains the central historical comparison for subsequent time-loop stories." },
      { area: "screenplay", status: "source_verified", note: "Danny Rubin and Harold Ramis organize a single day into repeatable beats whose meaning changes as Phil remembers, predicts and finally responds differently." },
      { area: "directing", status: "source_verified", note: "Ramis preserves the clarity of each recurring event while shifting comic timing, emotional emphasis and Phil's behavior across repetitions." },
      { area: "performance", status: "mapped", note: "Bill Murray's changing intention makes matching situations feel different, but a dedicated actor-level production account remains pending." },
      { area: "production_design", status: "mapped", note: "The town square, hotel, diner and streets form a memorized circuit that lets the audience recognize variations; department-level sourcing remains pending." },
      { area: "costume_makeup", status: "mapped", note: "Repeated wardrobe helps stabilize the day while Phil's behavior changes, but costume continuity has not received dedicated verification." },
      { area: "cinematography", status: "source_verified", note: "John Bailey's photography keeps recurring geography and actions readable so variation can be carried by performance, framing emphasis and duration." },
      { area: "lighting", status: "mapped", note: "Weather and continuity had to preserve the day, but the complete lighting strategy still needs a dedicated cinematographer account." },
      { area: "camera_format", status: "research_pending", note: "The current evidence set does not yet record the complete camera, stock and lens package." },
      { area: "editing", status: "source_verified", note: "The edit compresses, abbreviates and reorders familiar beats as Phil gains knowledge, preventing every loop from requiring full replay." },
      { area: "sound_design", status: "mapped", note: "Recurring alarm, broadcast and town sounds establish the daily reset, but the sound department still needs dedicated research." },
      { area: "music", status: "source_verified", note: "Music-editor testimony shows how recurring songs and score changes help distinguish repetition, comic phase and emotional development." },
      { area: "effects_animation", status: "not_central", note: "The loop is created through writing, continuity, performance and editing rather than visible effects." },
      { area: "documentary_method", status: "not_central", note: "Documentary or nonfiction method is not central to this controlled studio comedy." },
    ],
  },
  scenario_the_truman_show_1998: {
    scenarioId: "scenario_the_truman_show_1998",
    period: "Late-1990s Hollywood media satire at the threshold of reality television and networked self-surveillance",
    traditions: ["Media satire", "Surveillance cinema", "Manufactured-utopia drama"],
    before: "The film draws on television commercials, hidden-camera entertainment, suburban utopias and stories in which an ordinary person discovers that the apparent world is a controlled stage.",
    moment: "Extensive rewrites move the premise from a dark New York nightmare to bright Seahaven; Seaside, Florida, commercial lighting, obstructed hidden-camera angles, vignettes, deliberately unreal effects and broadcast-controlled music make the pleasant town itself the mechanism of captivity.",
    after: "Its 2025 National Film Registry selection confirms how the film's artificial town, corporate spectatorship and continuous observation became historically sharper as reality television, social media and self-broadcast culture expanded.",
    historyQuestion: "Which historical craft system best explains why Seahaven looks comforting, commercial and visibly watched at the same time?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The film was produced before the global reality-TV boom and is now preserved for its cultural, historical and aesthetic significance." },
      { area: "movement_and_tradition", status: "source_verified", note: "Media satire, surveillance imagery, television-commercial polish and a manufactured-utopia narrative are fused into one studio feature." },
      { area: "industry_and_production_context", status: "source_verified", note: "The project underwent extensive rewriting and used the master-planned community of Seaside as the practical base of Seahaven, supplemented by studio and visual-effects work." },
      { area: "reception_and_legacy", status: "source_verified", note: "Library of Congress selection and later institutional accounts support its continuing relevance to reality television, privacy and performed identity." },
      { area: "screenplay", status: "source_verified", note: "Andrew Niccol's darker urban conception was repeatedly rewritten with Peter Weir into a sunnier world whose emotional accessibility makes the control system more disturbing." },
      { area: "directing", status: "source_verified", note: "Weir coordinates sincere performance, commercial cheerfulness, hidden observation and gradual formal breakdown without revealing the entire mechanism at once." },
      { area: "performance", status: "mapped", note: "Jim Carrey balances rehearsed social routine with growing suspicion while the surrounding cast performs both character and in-world television actor; dedicated performance sourcing remains pending." },
      { area: "production_design", status: "source_verified", note: "Seaside's planned architecture, immaculate streets and added digital extensions create a town that is simultaneously usable location, brand image and prison set." },
      { area: "costume_makeup", status: "mapped", note: "Bright coordinated wardrobe helps sustain the commercialized social surface, but the costume department has not yet received dedicated verification." },
      { area: "cinematography", status: "source_verified", note: "Unusual camera positions, foreground obstruction and vignetted frames imitate cameras concealed inside the objects and architecture of Truman's life." },
      { area: "lighting", status: "source_verified", note: "The too-bright commercial and sitcom surface makes Seahaven inviting while exposing its artificial control." },
      { area: "camera_format", status: "mapped", note: "The sources verify lens effects and surveillance framing but not yet the complete camera, stock and lens package." },
      { area: "editing", status: "mapped", note: "The edit alternates Truman's experience, control-room intervention and audience response, but editor-level process research remains pending." },
      { area: "sound_design", status: "mapped", note: "Broadcast cues, staged weather, control-room voices and ruptures in the town's routine shape the artificial world; dedicated sound-team sourcing remains pending." },
      { area: "music", status: "source_verified", note: "Peter Weir's soundtrack design distinguishes music chosen by Christof inside the broadcast from Dallwitz and Glass material functioning across the feature." },
      { area: "effects_animation", status: "source_verified", note: "Digital building extensions, horizon shaping and intentionally slightly unreal effects enlarge Seahaven without erasing its studio-created quality." },
      { area: "documentary_method", status: "not_central", note: "The film imitates observational television but remains a fully staged fiction about the ethics of documentary-like surveillance." },
    ],
  },
  scenario_moon_2009: {
    scenarioId: "scenario_moon_2009",
    period: "Late-2000s British independent science fiction reviving miniature and controlled-stage craft inside a digital-effects workflow",
    traditions: ["1970s industrial science fiction", "Contained chamber drama", "Hybrid miniature and digital effects"],
    before: "The film openly inherits the working-class space environments of Alien, Outland and Silent Running, where technology looks used, labor is repetitive and isolation is a material condition rather than abstract spectacle.",
    moment: "A screenplay written for a limited budget, one principal actor and a controlled studio base joins a full lunar set, miniature vehicles and terrain, motion-control photography, split-screen and body-double performance, digital compositing and a restrained robot design.",
    after: "The case remains useful for showing how independent science fiction can create scale by designing the script, set, performance and effects pipeline together instead of treating visual effects as a later layer of spectacle.",
    historyQuestion: "Which production strategy best explains how Moon achieves a large science-fiction world while remaining a contained actor-led independent film?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The film belongs to late-2000s British independent production while deliberately reviving the material vocabulary of late-1970s and early-1980s industrial science fiction." },
      { area: "movement_and_tradition", status: "source_verified", note: "Contained chamber drama, blue-collar space cinema and model-based effects are combined with contemporary digital compositing." },
      { area: "industry_and_production_context", status: "source_verified", note: "Duncan Jones designed the script around a small cast, limited budget, controlled stage and effects methods selected for maximum production value." },
      { area: "reception_and_legacy", status: "mapped", note: "The production is a strong teaching reference for hybrid practical-digital science fiction, while wider influence claims remain outside the current evidence set." },
      { area: "screenplay", status: "source_verified", note: "The story was written specifically for Sam Rockwell and around constraints that made one location, repeated labor and encounters with another self dramatically productive." },
      { area: "directing", status: "source_verified", note: "Jones coordinates actor eyelines, physical interaction, set geography, miniature exteriors and invisible compositing so technical display never replaces the character conflict." },
      { area: "performance", status: "source_verified", note: "Rockwell differentiates two versions of the same worker while split-screen, doubles and precisely staged object exchanges preserve believable shared space." },
      { area: "production_design", status: "source_verified", note: "The bunker-like base, industrial corridors, rover and harvester miniatures continue the used-future design tradition inside a tightly controlled studio build." },
      { area: "costume_makeup", status: "mapped", note: "Work clothing and physical deterioration support labor and identity, but costume and makeup still need dedicated department-level sourcing." },
      { area: "cinematography", status: "source_verified", note: "Studio photography, miniature model stages and matched clone coverage create a consistent practical base for digital augmentation." },
      { area: "lighting", status: "mapped", note: "The base uses motivated industrial sources and the lunar exteriors require model-stage control, but the complete lighting strategy remains pending." },
      { area: "camera_format", status: "research_pending", note: "The current evidence set does not yet document the complete live-action and model-unit camera and lens packages." },
      { area: "editing", status: "source_verified", note: "Split-screen and composite construction preserve conversational rhythm and ordinary physical interaction instead of calling attention to the clone effect." },
      { area: "sound_design", status: "mapped", note: "Machinery, ventilation, communication delay and Gerty's calm voice define the working environment, but sound-team verification remains pending." },
      { area: "music", status: "research_pending", note: "The score has not yet received a dedicated source review." },
      { area: "effects_animation", status: "source_verified", note: "Miniatures, wire-pulled vehicles, physical lunar terrain, CG augmentation, Gerty animation and clone composites form a deliberately hybrid effects system." },
      { area: "documentary_method", status: "not_central", note: "The production seeks material plausibility but is not organized around documentary or nonfiction method." },
    ],
  },
  scenario_midnight_in_paris_2011: {
    scenarioId: "scenario_midnight_in_paris_2011",
    period: "Early-2010s transnational European-location comedy using photochemical craft to separate imagined historical Paris from the present",
    traditions: ["City film", "Time-travel romantic comedy", "Nostalgia and period fantasy"],
    before: "The film follows city symphonies, romantic travel films and fantasies of entering a culturally idealized past, while making nostalgia itself the dramatic problem rather than treating historical Paris as neutral truth.",
    moment: "Paris locations are researched and redressed within the frame; modern and vintage Cooke lenses, changing focal lengths, Kodak stocks, processing, lighting and warmer period palettes distinguish the present, the 1920s and the Belle Époque without explanatory effects transitions.",
    after: "The case demonstrates how a location-based fantasy can make historical periods immediately readable through coordinated optics, light, design, props, vehicles and performance while still revealing that every golden age contains its own longing for another past.",
    historyQuestion: "Which production history best explains how Midnight in Paris makes several eras readable while keeping them inside one continuous city and one romantic-comedy tone?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The transnational production opened Cannes in 2011 and builds its story around contemporary fascination with interwar artistic Paris and the Belle Époque." },
      { area: "movement_and_tradition", status: "source_verified", note: "The city film, romantic time-travel comedy and period fantasy are joined to a critique of golden-age nostalgia." },
      { area: "industry_and_production_context", status: "source_verified", note: "A seven-week location shoot and preparation period relied on Paris research, constrained street control and precise frame-specific redressing rather than wholesale reconstruction." },
      { area: "reception_and_legacy", status: "mapped", note: "Cannes and institutional records establish the film's international position, while broader influence claims remain outside the present research." },
      { area: "screenplay", status: "source_verified", note: "The midnight rule carries Gil between eras and turns each historical encounter into evidence that nostalgia repeats across generations." },
      { area: "directing", status: "mapped", note: "Woody Allen keeps the fantasy conversational and treats historical figures as comic-dramatic encounters; a fuller directing-process source remains pending." },
      { area: "performance", status: "mapped", note: "Contemporary naturalism and heightened historical characterizations share one comic rhythm, but dedicated actor-level research remains pending." },
      { area: "production_design", status: "source_verified", note: "Façades, cafés, furniture, posters, cars and interiors are changed only where the camera sees them, turning present-day streets into several historical layers." },
      { area: "costume_makeup", status: "mapped", note: "Wardrobe, hair and makeup are essential era markers but still need a dedicated department-level source audit." },
      { area: "cinematography", status: "source_verified", note: "The present uses sharper modern optics and wider moving views, while the 1920s and later historical passages use older lenses, longer focal lengths and increasingly warm atmosphere." },
      { area: "lighting", status: "source_verified", note: "Period exteriors are kept darker to evoke pre-modern illumination, while the Belle Époque adds haze, backlight and a still warmer red-gold image." },
      { area: "camera_format", status: "source_verified", note: "AFI and cinematography reporting document Kodak film, processing changes and different generations of Cooke lenses used to distinguish time periods." },
      { area: "editing", status: "mapped", note: "The edit treats midnight transitions with clarity and restraint, but Alisa Lepselter's detailed process has not yet been separately sourced." },
      { area: "sound_design", status: "research_pending", note: "Street ambience, clocks and period spaces remain to be documented through sound-team sources." },
      { area: "music", status: "mapped", note: "Period source music helps make each Paris legible, but the complete music-selection process still needs dedicated verification." },
      { area: "effects_animation", status: "not_central", note: "Time travel is established primarily through vehicles, locations, design, light, lenses and performance rather than effects spectacle." },
      { area: "documentary_method", status: "mapped", note: "Historical research informs the designed fantasy, but the film does not claim documentary reconstruction." },
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

export function getConstructedWorldsFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return constructedWorldsProfiles[scenarioId as keyof typeof constructedWorldsProfiles];
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
  const donors = Object.values(constructedWorldsProfiles)
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
      feedback: "This connects the film's constructed world, historical position and documented craft system.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: "This is a real constructed-world method, but it belongs to a different historical and production system.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: "This places the film inside the wrong temporal, spatial and technical tradition.",
    }] : []),
  ];
}
