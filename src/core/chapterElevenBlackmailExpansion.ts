import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenBlackmailExpansionDefinitions = [
  {
    id: "scenario_blackmail_1929",
    title: "Blackmail",
    originalTitle: "Blackmail",
    aliases: [],
    year: 1929,
    titleType: "Feature",
    runtimeMins: 82,
    directors: ["Alfred Hitchcock"],
    genres: ["Thriller", "Crime"],
    premise: "Build Blackmail as a 1929 British International Pictures transition production made in distinct silent and sound versions, not as a single fixed text or a generic 'first talkie' milestone. BFI documents Alfred Hitchcock directing, John Maxwell producing, Charles Bennett's play as the adaptation source, Anny Ondra starring, the project beginning as a silent production, and the later sound version becoming Britain's first feature-length talkie. The player must preserve version control across silent and sound material, distinguish location work from Elstree studio recording, and use synchronized dialogue and effects for dramatic purpose rather than treating early sound as a technical gimmick. BFI archive material documents Hitchcock experimenting with sound at Elstree and Joan Barry speaking Alice's lines off camera while Ondra mouthed them; this live dubbing solution must be taught as a historically specific response to casting, accent expectations and recording constraints, not as a universal early-sound workflow. The production case must also preserve the different formal strengths of the silent and sound versions, including the sound version's psychologically selective use of repeated words and offscreen sound. No unsupported claim about a specific recording brand or microphone model may be introduced unless an institutional source is added.",
    sourceId: "bfi_blackmail_1929",
    sourceUrl: "https://www.bfi.org.uk/film/bc5f7958-d424-517f-b707-791d7bc8ed55/blackmail",
    scenarioType: "bip_dual_silent_sound_elstree_live_dubbing_psychological_sound_version_control_production",
    requiredChoicesSeed: {
      screenplay: ["dual_version_structure", "bennett_play_adaptation", "sound_for_psychological_subjectivity"],
      camera: ["silent_version_visual_fluency", "sound_version_recording_constraints", "jack_cox_location_attribution"],
      editing: ["silent_sound_version_divergence", "dialogue_and_effect_cue_control", "british_museum_climax_provenance"],
      sound: ["elstree_sound_experimentation", "joan_barry_live_dubbing", "psychological_sound_selectivity"],
      themes: ["film_history", "sound_transition", "british_cinema", "dual_versions", "live_dubbing", "psychological_sound", "studio_location_workflow", "version_control"],
    },
    learningGoals: [
      "Model Blackmail as two historically distinct 1929 versions, silent and sound, rather than collapsing them into one canonical cut.",
      "Explain why transition-era producers still needed silent versions for cinemas that had not yet converted to sound, so technological adoption remained uneven.",
      "Preserve British International Pictures and Elstree as the industrial setting for the sound conversion while keeping London location work materially distinct from studio recording.",
      "Teach Joan Barry's off-camera speech for Anny Ondra as live dubbing performed during photography, not later digital ADR and not evidence that Ondra gave the audible dialogue performance.",
      "Use the sound version's selective repetition and offscreen cues as examples of sound shaping subjectivity, including the well-known breakfast 'knife' sequence, without implying that all early sound cinema was static or dialogue-led.",
      "Keep Jack Cox's documented location-camera work separate from unsupported claims about specific lenses, cameras, microphone brands or recording systems.",
      "Compare the silent version's visual fluency with the sound version's new expressive resources without treating one medium as automatically superior.",
      "Preserve restoration and archival boundaries: surviving silent and sound versions, later restorations, and modern presentation scores are evidence states, not interchangeable original production elements.",
      "Connect the case to the broader British conversion economy: studio investment, theatre wiring, performer voice expectations and parallel-version distribution all affected production choices.",
    ],
    phases: [
      { id: "pitch", label: "Two versions, one transition problem", player_task: "Define why both silent and sound versions must exist and what each version needs to communicate without assuming the whole exhibition market has converted." },
      { id: "research", label: "BIP, Elstree and version evidence", player_task: "Lock BFI evidence for British International Pictures, Elstree experimentation, silent/sound version status, Joan Barry's live dubbing and the film's London locations before making technical claims." },
      { id: "screenplay", label: "Adapt Bennett across silent and sound forms", player_task: "Shape the Charles Bennett adaptation so scenes remain legible in silent form while selected dialogue and sound cues in the sound version carry distinct dramatic information." },
      { id: "casting", label: "Performance and audible voice attribution", player_task: "Direct Anny Ondra's visible performance while crediting Joan Barry's off-camera spoken contribution correctly; do not erase either performer or universalize accent replacement as a neutral rule." },
      { id: "production_design", label: "Elstree interiors and London spaces", player_task: "Coordinate studio interiors with real London settings and reconstruction needs while keeping studio acoustics, location shooting and the British Museum climax as separate production problems." },
      { id: "cinematography", label: "Visual continuity across versions", player_task: "Preserve the silent version's mobile visual storytelling while adapting selected sound-version setups to recording needs, with Jack Cox's documented location-camera contribution correctly bounded." },
      { id: "editing", label: "Version divergence, not duplicate export", player_task: "Track shot and scene differences between silent and sound versions and maintain exact provenance for dialogue passages, effects cues and visual-only sequences." },
      { id: "sound", label: "Live dubbing and psychological sound", player_task: "Stage Elstree recording experiments, Joan Barry's live off-camera dialogue and selective sound cues such as repeated words/offscreen noise without inventing unsupported hardware claims." },
      { id: "release", label: "Britain's conversion remained uneven", player_task: "Release silent and sound versions to different exhibition conditions, preserving the sound version's historical importance without claiming that one premiere instantly ended British silent cinema." },
    ],
  },
] as const;

export function mergeChapterElevenBlackmailExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenBlackmailExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_blackmail_verified",
      source: {
        list_id: "manual_chapter_eleven_blackmail_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: definition.titleType,
        runtime_mins: definition.runtimeMins,
        directors: definition.directors,
        genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0,
        user_rating: 0,
      },
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
