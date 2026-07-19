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

const minimalistRoadProfiles = {
  scenario_stranger_than_paradise_1984: {
    scenarioId: "scenario_stranger_than_paradise_1984",
    period: "Early-1980s American independent cinema and transatlantic minimalist road film",
    traditions: ["American independent cinema", "Deadpan minimalism", "Road movie and European art-cinema influence"],
    before: "The film draws on Ozu, Bresson, avant-garde duration and the American road movie, but removes conventional scenic discovery, dramatic escalation and expressive coverage.",
    moment: "Leftover black-and-white stock, a tiny independent production, fixed master-shot vignettes, black frames between scenes, musician-performers and deliberately ordinary locations turn material limitation into a complete comic and temporal system.",
    after: "Its Cannes breakthrough, National Film Registry preservation and documented influence make it a durable model for how independent cinema can create identity through framing, duration, ellipsis and tone rather than production scale.",
    historyQuestion: "Which historical production system best explains why Stranger Than Paradise feels both like an American road movie and a rejection of normal road-movie movement?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Cannes, BFI and Library of Congress records place the film at a defining early-1980s moment for American independent cinema." },
      { area: "movement_and_tradition", status: "source_verified", note: "BFI connects the film to Ozu, Bresson and the avant-garde while Criterion identifies its deadpan reshaping of offbeat Americana and the road movie." },
      { area: "industry_and_production_context", status: "source_verified", note: "The first section was made with leftover stock donated by Wim Wenders, and the feature's limited means became a formal production principle." },
      { area: "reception_and_legacy", status: "source_verified", note: "The Caméra d'Or and 2002 National Film Registry selection support the film's established historical and preservation significance." },
      { area: "screenplay", status: "source_verified", note: "Short encounters, repetition and anticlimax replace conventional plot escalation, turning failures of communication into the dramatic engine." },
      { area: "directing", status: "source_verified", note: "Jarmusch organizes action as self-contained master-shot scenes and lets timing, stillness and behavior produce comedy without emphatic coverage." },
      { area: "performance", status: "mapped", note: "Musician-performers use flat delivery, pauses and restrained physical behavior; a dedicated actor-level source review remains pending." },
      { area: "production_design", status: "mapped", note: "Sparse apartments, roadside interiors and interchangeable destinations support the anti-spectacular road structure, but department-level sourcing remains pending." },
      { area: "costume_makeup", status: "mapped", note: "Clothing creates outsider cool and social distance, but dedicated costume research has not yet been completed." },
      { area: "cinematography", status: "source_verified", note: "Tom DiCillo's black-and-white master shots maintain distance and give each location the same restrained observational weight." },
      { area: "lighting", status: "mapped", note: "The monochrome image favors simple, readable spaces, while a detailed lighting account remains pending." },
      { area: "camera_format", status: "source_verified", note: "The production's leftover black-and-white film stock is documented as both a practical condition and the basis of the visual system." },
      { area: "editing", status: "source_verified", note: "Long self-contained shots separated by black frames turn omission and dead time into the film's defining rhythm." },
      { area: "sound_design", status: "mapped", note: "Sparse dialogue, environmental quiet and abrupt music entrances reinforce distance, but sound-team sourcing remains pending." },
      { area: "music", status: "mapped", note: "John Lurie's music helps define the film's cultural and tonal world, while a dedicated score source review remains pending." },
      { area: "effects_animation", status: "not_central", note: "The film's method depends on duration, framing, performance and ellipsis rather than effects." },
      { area: "documentary_method", status: "mapped", note: "Real locations and restrained observation provide documentary texture inside a rigorously scripted minimalist form." },
    ],
  },
  scenario_paris_texas_1984: {
    scenarioId: "scenario_paris_texas_1984",
    period: "Mid-1980s New German Cinema encounter with the American road movie",
    traditions: ["New German Cinema", "American road movie", "Location-led color modernism"],
    before: "Wenders brings the restless travel, alienation and transatlantic perspective of New German Cinema into dialogue with western landscapes, American road films and Sam Shepard's border mythology.",
    moment: "Months of scouting, chronological shooting, real desert and city locations, available light, expressive primary color, changing story material and Ry Cooder's slide-guitar score make geography and production order part of the characters' emotional recovery.",
    after: "Its Palme d'Or, restorations and continuing craft study preserve it as a central example of how a non-American production can reinterpret American space through location, color, music and performance.",
    historyQuestion: "Which historical explanation best connects Paris, Texas's European authorship to its unusually physical and emotionally specific view of American space?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Cannes records the film as a German-French production whose 1984 reception placed a European road-film perspective at the center of international cinema." },
      { area: "movement_and_tradition", status: "source_verified", note: "The film joins New German Cinema's outsider perspective to the American western, road movie and Sam Shepard's border writing." },
      { area: "industry_and_production_context", status: "source_verified", note: "Extensive scouting, remote-location access, chronological shooting and evolving story material made production geography an active writing tool." },
      { area: "reception_and_legacy", status: "source_verified", note: "The Palme d'Or, FIPRESCI recognition and multiple supervised restorations document the film's long international afterlife." },
      { area: "screenplay", status: "source_verified", note: "The screenplay developed around movement, silence, recovered family history and locations that could reshape the route and scenes during production." },
      { area: "directing", status: "source_verified", note: "Wenders builds the film chronologically and allows location, performance and duration to alter the emotional meaning of the journey." },
      { area: "performance", status: "mapped", note: "Harry Dean Stanton's silence and gradual return to speech are central, but dedicated performance sourcing remains pending." },
      { area: "production_design", status: "mapped", note: "Motels, highways, peep-show architecture and suburban interiors create stages of emotional distance; a department-level source review remains pending." },
      { area: "costume_makeup", status: "mapped", note: "Travis's red cap, suit and changing physical presentation are strong identifiers, but costume research remains incomplete." },
      { area: "cinematography", status: "source_verified", note: "Robby Müller uses found light, landscape scale, reflections and saturated color to make each location carry psychological meaning." },
      { area: "lighting", status: "source_verified", note: "Müller explicitly describes choosing locations partly for their existing light and preserving available light instead of imposing a generic lit look." },
      { area: "camera_format", status: "mapped", note: "The photochemical production and restored image are documented, while the complete camera, stock and lens package still needs dedicated verification." },
      { area: "editing", status: "source_verified", note: "Chronological production and long scene duration let the emotional journey accumulate through spatial transitions rather than rapid plot compression." },
      { area: "sound_design", status: "mapped", note: "Road, room and telephone acoustics separate characters and spaces, but a dedicated sound-team account remains pending." },
      { area: "music", status: "source_verified", note: "Cannes and Criterion records identify Ry Cooder's score as a principal creative element connecting landscape, memory and movement." },
      { area: "effects_animation", status: "not_central", note: "The film's image system depends on real geography, light, color and architecture rather than effects construction." },
      { area: "documentary_method", status: "source_verified", note: "Location scouting photography and responsiveness to disappearing or changing places give the fiction a documented observational foundation." },
    ],
  },
  scenario_the_bothersome_man_2006: {
    scenarioId: "scenario_the_bothersome_man_2006",
    period: "Mid-2000s Nordic absurdist dystopia and design-led social satire",
    traditions: ["Nordic absurdism", "Dystopian comedy", "Architectural social satire"],
    before: "The film develops the writer-director team's earlier absurd short-film language and draws on dystopian fable, Kafkaesque bureaucracy and Scandinavian design culture rather than effects-heavy science fiction.",
    moment: "A Norwegian-Icelandic 35mm production coordinates sterile architecture, immaculate lifestyle interiors, flat social behavior, controlled color, dry violence and restrained music to make comfort itself feel imprisoning.",
    after: "The film remains useful for teaching how production design, performance and tonal control can create a complete speculative world without exposition-heavy worldbuilding or technological spectacle.",
    historyQuestion: "Which production strategy best explains how The Bothersome Man turns Scandinavian comfort, design and social calm into a dystopian threat?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Nordic institutional and filmmaker sources place the film inside a mid-2000s Scandinavian debate about model welfare, lifestyle conformity and emotional absence." },
      { area: "movement_and_tradition", status: "source_verified", note: "The film combines dystopian fable, absurd comedy and the established Lien-Schreiner short-film style rather than conventional science-fiction spectacle." },
      { area: "industry_and_production_context", status: "source_verified", note: "The Norwegian-Icelandic feature brought together established cinematography, editing, composition and production-design departments around a tightly controlled world." },
      { area: "reception_and_legacy", status: "mapped", note: "Nordic recognition supports its regional significance, while broader claims of international influence remain outside the current evidence set." },
      { area: "screenplay", status: "source_verified", note: "Per Schreiner's radio-play premise and long collaboration with Lien build the world through withheld explanation, repeated social rituals and Andreas's resistance." },
      { area: "directing", status: "source_verified", note: "Lien describes using fantasy and nightmare imagery to free the film's visual and dramatic language from ordinary realism." },
      { area: "performance", status: "mapped", note: "Deadpan social behavior and Andreas's increasing disturbance create the tonal conflict, but actor-level sourcing remains pending." },
      { area: "production_design", status: "source_verified", note: "Institutional credits and the film's documented lifestyle-world premise establish production design as a primary carrier of the dystopia." },
      { area: "costume_makeup", status: "mapped", note: "Clean, anonymous professional clothing supports social uniformity, but dedicated costume and makeup research remains pending." },
      { area: "cinematography", status: "source_verified", note: "John Christian Rosenlund's 35mm photography presents the city and interiors with clean surfaces, compositional calm and controlled estrangement." },
      { area: "lighting", status: "mapped", note: "Flat, comfortable illumination supports the false perfection of the world, while a detailed lighting account remains pending." },
      { area: "camera_format", status: "source_verified", note: "Cinemateket records the film's 35mm format, grounding the sterile visual world in photochemical production rather than digital abstraction." },
      { area: "editing", status: "source_verified", note: "Vidar Flataukan's credited edit supports abrupt tonal changes, repetition and the matter-of-fact presentation of bodily violence and impossible events." },
      { area: "sound_design", status: "mapped", note: "Controlled ambience and the contrast between bland surfaces and disturbing action are central, but sound-team sourcing remains pending." },
      { area: "music", status: "source_verified", note: "Institutional records identify Ginge Anvik's score as part of the coordinated production system, while detailed compositional analysis remains limited." },
      { area: "effects_animation", status: "mapped", note: "Selective practical and postproduction work supports impossible events, but effects remain subordinate to design and tone." },
      { area: "documentary_method", status: "not_central", note: "The film is a controlled allegorical construction rather than a documentary-influenced production." },
    ],
  },
  scenario_nebraska_2013: {
    scenarioId: "scenario_nebraska_2013",
    period: "Early-2010s American regional road cinema using digital black-and-white reconstruction",
    traditions: ["Midwestern regional cinema", "Father-son road movie", "Modern black-and-white photography"],
    before: "The film inherits the American road movie, regional comedy-drama and monochrome references such as Paper Moon and The Last Picture Show, while rejecting nostalgic polish in favor of weathered faces and ordinary towns.",
    moment: "Real Nebraska locations, local actors, Alexa color capture, black-and-white monitoring, older C-series anamorphic lenses, grain treatment and design prepared for monochrome create an austere contemporary image despite commercial pressure to preserve a color version.",
    after: "The case demonstrates how digital capture can recreate a disciplined black-and-white production system through testing, location, color-aware design, optics and grading rather than applying a casual desaturation filter.",
    historyQuestion: "Which production history best explains why Nebraska's digital black-and-white image feels tied to both contemporary regional life and older American road cinema?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Director and cinematographer accounts place the film inside contemporary Midwestern regional life and a period when commercial distribution strongly favored color." },
      { area: "movement_and_tradition", status: "source_verified", note: "The production explicitly draws on American black-and-white road and regional films while continuing Alexander Payne's location-based social observation." },
      { area: "industry_and_production_context", status: "source_verified", note: "Studio resistance to monochrome required a color-capture workflow that preserved alternate deliverables while protecting the intended black-and-white release." },
      { area: "reception_and_legacy", status: "mapped", note: "The film is a clear teaching case for digital monochrome production, while broad influence claims remain deliberately unmade." },
      { area: "screenplay", status: "source_verified", note: "A modest father-son journey uses repeated towns, family encounters and failed expectations to build comedy and regret without conventional road-film triumph." },
      { area: "directing", status: "source_verified", note: "Payne coordinates local casting, real locations, ensemble timing and restrained observation so the regional world remains specific rather than picturesque." },
      { area: "performance", status: "source_verified", note: "Papamichael and Payne discuss weathered faces, Bruce Dern's presence and local actors as central reasons the monochrome and location strategy works." },
      { area: "production_design", status: "source_verified", note: "Locations and design were prepared with the final monochrome conversion in mind, using tonal separation rather than relying on recorded color alone." },
      { area: "costume_makeup", status: "mapped", note: "Practical regional clothing and facial texture are important to the monochrome image, but dedicated department-level sourcing remains pending." },
      { area: "cinematography", status: "source_verified", note: "Phedon Papamichael uses widescreen black-and-white composition to connect plains, small towns and faces without turning the region into scenic spectacle." },
      { area: "lighting", status: "source_verified", note: "Camera tests and on-set monochrome monitoring let the crew judge tonal contrast, low light and facial texture for the intended final image." },
      { area: "camera_format", status: "source_verified", note: "The documented system used ARRI Alexa color capture, 4:3 anamorphic mode, older Panavision C-series lenses and added grain benchmarked against Double-X." },
      { area: "editing", status: "mapped", note: "Road progression and ensemble pauses shape the film's melancholy humor, while editor-level sourcing remains pending." },
      { area: "sound_design", status: "mapped", note: "Wind, vehicles, bars and domestic quiet support regional space, but a dedicated sound-team source review remains pending." },
      { area: "music", status: "mapped", note: "The score supports the journey's modest tone, while dedicated composition research remains pending." },
      { area: "effects_animation", status: "not_central", note: "The central transformation is the planned monochrome image pipeline rather than effects spectacle." },
      { area: "documentary_method", status: "source_verified", note: "Real locations and local actors give the fiction an observational regional foundation without turning it into documentary." },
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

export function getMinimalistRoadFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return minimalistRoadProfiles[scenarioId as keyof typeof minimalistRoadProfiles];
}

export function resolveMinimalistRoadFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getMinimalistRoadFilmHistoryProfile(scenario.id);
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

export function createMinimalistRoadFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const donors = Object.values(minimalistRoadProfiles)
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
      feedback: "This connects the film's historical position directly to its documented use of road space, minimalism, design and image technology.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: "This is a real minimalist or road-cinema production history, but it belongs to another industrial, regional and technical system.",
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: "This places the film inside the wrong historical relationship between location, design, performance and image-making.",
    }] : []),
  ];
}
