import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterThirteenAManEscapedExpansionDefinitions = [
  {
    id: "scenario_a_man_escaped_1956",
    title: "A Man Escaped",
    originalTitle: "Un condamné à mort s'est échappé",
    aliases: ["Un condamne a mort s'est echappe", "Le vent souffle où il veut", "Le vent souffle ou il veut"],
    year: 1956,
    titleType: "Feature",
    runtimeMins: 101,
    directors: ["Robert Bresson"],
    genres: ["Drama", "Prison Film", "Resistance"],
    premise: "Build A Man Escaped as a French postwar resistance-production case in which historical testimony, Montluc Prison, studio reconstruction, nonprofessional models, object-centered action and radically precise sound are one production system. La Cinémathèque française identifies S.N.E.G./Société Nouvelle des Établissements Gaumont and Nouvelles Éditions de Films as production companies; Robert Sussfeld as producer and production director; Jean Thuillier and Alain Poiré as executive producers; Robert Bresson as director, screenwriter and dialogue writer from André Devigny's account; Léonce-Henri Burel as director of photography; Henri Raichi as camera operator; Pierre-André Bertrand as sound engineer; Pierre Charbonnier as set designer; Raymond Lamy as editor; Annie Dubouillon as script supervisor; Irénée Leriche as unit manager; and Louis Malle as technical collaborator. Criterion documents François Leterrier as a philosophy student chosen over Devigny's proposed military athlete, virtually all performers as nonprofessionals, and a production split between studio sets and the actual Montluc Prison, with the escape sequence alternating between both. The Mémorial national de la prison de Montluc independently records filming at Montluc in June 1956. Preserve Devigny's material testimony as production evidence: Criterion records that his original rope and hooks survived at the prison and were used as references for Fontaine's escape implements. Preserve the sourced technical specificity: Criterion records a fixed 50 mm focal length throughout the film and studio rerecording of all dialogue, with Bresson repeatedly drilling lines and assembling preferred word takes. Use sound as spatial evidence rather than decoration: footsteps, doors, keys, bells, trains, gunfire, offscreen movement and Fontaine's controlled voice-over make unseen prison space actionable. Canonically use Criterion's 101-minute black-and-white 1.33:1 form while preserving Cinémathèque's 95-minute and BFI's 102-minute institutional listings as runtime provenance rather than inventing alternate narrative cuts. Keep Mozart's pre-existing music, Cannes' unanimous 1957 Best Director prize and later restoration downstream from production. Do not invent film stock, camera body, microphone models, lighting ratios, recording-stage equipment, exact shot counts, dialogue-take counts for every line, or unsupported claims that all interiors were built or all cast members were first-time performers.",
    sourceId: "criterion_a_man_escaped_1956",
    sourceUrl: "https://www.criterion.com/films/27848-a-man-escaped",
    scenarioType: "bresson_postwar_resistance_montluc_studio_models_object_process_offscreen_sound_escape",
    requiredChoicesSeed: {
      screenplay: ["bresson_devigny_testimony_adaptation", "title_reveals_escape_process_over_suspense", "voiceover_action_and_spiritual_structure"],
      camera: ["burel_raichi_fixed_50mm_source_bounded", "montluc_studio_spatial_continuity", "no_invented_camera_body_stock_lighting_package"],
      editing: ["lamy_object_action_rhythm", "studio_location_escape_intercutting", "preserve_95_101_102_runtime_provenance"],
      sound: ["bertrand_offscreen_prison_information", "studio_rerecorded_dialogue_precision", "mozart_kyrie_punctuated_use"],
      themes: ["film_history", "postwar_france", "resistance_memory", "montluc", "imprisonment", "freedom", "process", "nonprofessional_models", "offscreen_space", "sound", "objects", "studio_location_hybrid", "historical_testimony"],
    },
    learningGoals: [
      "Model A Man Escaped as a Gaumont/NEF production with Sussfeld, Thuillier and Poiré visible rather than treating Bresson's authorship as the whole industrial story.",
      "Use André Devigny's published account and factual-adviser role as historical inputs while preserving the documented differences between Devigny's experience and Fontaine's fiction.",
      "Treat the title's disclosed outcome as a production-form decision that shifts attention from whether escape occurs to the exact labor, perception, faith and cooperation required to achieve it.",
      "Preserve Montluc as a real production location: the national memorial dates filming there to June 1956, while Criterion documents studio work alongside the actual prison.",
      "Use the preserved rope and hooks from Devigny's escape as evidence that Fontaine's tools were materially researched rather than generic prison-break props.",
      "Keep Léonce-Henri Burel's cinematography and Henri Raichi's camera operation attributable, and use Criterion's fixed-50-mm account without inventing camera bodies, stock or lighting ratios.",
      "Model François Leterrier and the largely nonprofessional cast through Bresson's model-based performance method: repeated physical action, neutralized delivery, hands, faces and voices become editable film material.",
      "Keep Pierre Charbonnier's design distinct from the actual Montluc location so sparse prison space is understood as a location-studio construction rather than untouched documentary reality.",
      "Treat Raymond Lamy's editing as central to process: object manipulation, glances, doors, hands and offscreen threats gain force through shot order even when dramatic acting is suppressed.",
      "Use Pierre-André Bertrand's sound labor to make offscreen prison space legible through footsteps, keys, doors, bells, gunfire and trains before or without visual confirmation.",
      "Preserve Criterion's documentation that dialogue was rerecorded in studio and intensively repeated under Bresson's direction, while refusing unsupported microphone, stage or mixing-chain details.",
      "Keep Mozart's pre-existing sacred music, the 1957 Cannes directing prize and later 2K restoration as separate music/reception/preservation layers rather than retroactive explanations of production.",
    ],
    phases: [
      { id: "pitch", label: "Make a known escape about process rather than outcome", player_task: "Start from a title that already reveals success and build dramatic force from material preparation, perception, cooperation and time rather than a concealed ending." },
      { id: "research", label: "Translate Devigny's testimony into source-bounded fiction", player_task: "Map Devigny's 1943 Montluc escape, preserved implements and adviser role while marking where Fontaine's fictional biography and ending diverge from the historical account." },
      { id: "screenplay", label: "Write action, voice-over and faith as one structure", player_task: "Use Bresson's adaptation to coordinate precise escape procedure, restrained narration, encounters with other prisoners and the tension between individual will and help from others." },
      { id: "casting", label: "Build characters from models and repeated actions", player_task: "Direct Leterrier, Le Clainche and the largely nonprofessional ensemble through controlled gesture, voice and physical routine rather than conventional expressive acting." },
      { id: "production_design", label: "Join real Montluc to sparse studio prison space", player_task: "Coordinate Charbonnier's sets with Montluc location material so doors, walls, yards, rooflines and escape obstacles remain spatially coherent across real and constructed environments." },
      { id: "cinematography", label: "Constrain vision to Fontaine's practical attention", player_task: "Use Burel and Raichi's fixed-50-mm source-bounded system to privilege hands, faces, doors and restricted viewpoints without inventing camera-body, stock or lighting technology." },
      { id: "editing", label: "Turn objects and unseen threats into action", player_task: "Use Lamy's cutting to connect spoon, door, wire, rope, hooks, glances and offscreen sounds so repetitive labor accumulates causal force rather than becoming montage shorthand." },
      { id: "sound", label: "Build the prison beyond the frame", player_task: "Use Bertrand's sound system, rerecorded dialogue, voice-over and punctuated Mozart so unseen guards, spaces and opportunities remain as concrete as visible walls." },
      { id: "release", label: "Separate escape history, Cannes and preservation", player_task: "Keep Devigny's wartime history, the 1956 film, the unanimous 1957 Cannes directing prize and later restoration as distinct chronological layers." },
    ],
  },
] as const;

export function mergeChapterThirteenAManEscapedExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterThirteenAManEscapedExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_thirteen_a_man_escaped_verified",
      source: { list_id: "manual_chapter_thirteen_a_man_escaped_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
