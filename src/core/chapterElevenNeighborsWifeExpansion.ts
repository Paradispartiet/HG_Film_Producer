import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenNeighborsWifeExpansionDefinitions = [
  {
    id: "scenario_the_neighbors_wife_and_mine_1931",
    title: "The Neighbor's Wife and Mine",
    originalTitle: "マダムと女房",
    aliases: ["Madamu to Nyobo", "Madamu to Nyōbō", "Madame and Wife", "The Neighbour's Wife and Mine"],
    year: 1931,
    titleType: "Feature",
    runtimeMins: 56,
    directors: ["Heinosuke Gosho"],
    genres: ["Comedy", "Drama"],
    premise: "Build The Neighbor's Wife and Mine as a 1931 Shochiku Kamata full-talkie whose production problem is not simply 'adding dialogue' but reorganizing Japanese studio craft around synchronous recording while silent films, sound-version films and benshi-era exhibition still coexisted. Shochiku documents Heinosuke Gosho directing, Komatsu Kitamura writing, Bunjiro Mizutani photographing, Shochiku distributing and the film being recorded synchronously throughout with three cameras running together so sound would not break across cuts. NFAJ records Shochiku Kinema (Kamata), 35mm black-and-white, 56 minutes, Takeo and Haruo Tsuchihashi in sound recording, the Tsuchihashi-style Shochiku-Phone process, sound assistants, lighting, art direction, stage construction, decoration, songs and live bands. The player must coordinate simultaneous dialogue recording, multiple-camera coverage, camera movement under sync constraints, radio/jazz/music cues and everyday noises such as clocks, cats and neighborhood sound without projecting modern multitrack/postproduction practice backward. Preserve the uneven Japanese transition: Shochiku's successful full-talkie is important because sound became dramatically productive here, not because all Japanese silent/benshi practice vanished in 1931. Preserve labor and evidence boundaries: Gosho's direction, Mizutani's photography, the Tsuchihashi brothers' recording system, art/lighting crews, performers and bands remain distinct; later prints, subtitles and restoration playback are not original production evidence.",
    sourceId: "nfaj_madamu_to_nyobo_1931",
    sourceUrl: "https://nfad.nfaj.go.jp/det.php?data_id=1766",
    scenarioType: "shochiku_kamata_tsuchihashi_full_sync_three_camera_everyday_sound_japanese_transition_production",
    requiredChoicesSeed: {
      screenplay: ["kitamura_everyday_comedy_structure", "sound_as_story_action_not_novelty", "silent_benshi_transition_context"],
      camera: ["mizutani_three_camera_sync_coverage", "movement_with_simultaneous_recording", "kamata_space_and_continuity"],
      editing: ["continuous_sound_across_camera_changes", "multi_camera_sync_selection", "original_talkie_version_provenance"],
      sound: ["tsuchihashi_shochiku_phone_sync", "radio_jazz_clock_cat_everyday_sound", "dialogue_music_noise_balance"],
      themes: ["film_history", "sound_transition", "sho­chiku_kamata", "tsuchihashi_system", "japanese_talkie", "three_camera_sync", "everyday_sound", "benshi_transition"],
    },
    learningGoals: [
      "Model The Neighbor's Wife and Mine as a successful Japanese full-talkie built around synchronous recording rather than as a claim that Japanese cinema instantly abandoned silence in 1931.",
      "Explain why Shochiku used three cameras during full synchronous recording: coverage could change across cuts while maintaining continuous recorded sound instead of repeatedly stopping the sonic event.",
      "Keep the Tsuchihashi brothers' Shochiku-Phone system distinct from Vitaphone sound-on-disc, Movietone and other foreign systems rather than collapsing early sound into one technology.",
      "Differentiate production labor: Gosho directs, Kitamura writes, Mizutani photographs, Takeo and Haruo Tsuchihashi record sound, and lighting/art/stage crews solve separate production problems.",
      "Use radio, jazz, voices, clocks, cats and neighborhood noise as story-bearing material: sound disrupts, attracts, times and motivates action rather than merely proving that the film can talk.",
      "Treat camera movement and multiple-camera coverage as active solutions within synchronous-recording constraints instead of teaching the myth that early talkies were necessarily static.",
      "Preserve Shochiku Kamata as an institutional production system, connecting studio research, domestic sound engineering, distribution and theatre conversion without assigning every innovation to one auteur.",
      "Keep the Japanese transition uneven: full talkies, silent films, sound versions, recorded benshi and part-talkies overlapped through the early 1930s.",
      "Separate original 1931 production evidence from later archive prints, subtitles, transfers and playback conditions.",
    ],
    phases: [
      { id: "pitch", label: "Sound as dramatic action", player_task: "Pitch a domestic comedy in which voices, jazz, radio and everyday noises actively change behavior; do not reduce the project to a technology demonstration." },
      { id: "research", label: "Kamata and the Tsuchihashi system", player_task: "Lock Shochiku/NFAJ evidence for Kamata, Gosho, Kitamura, Mizutani, the Tsuchihashi brothers, three-camera synchronous recording, bands and craft departments before choosing production tactics." },
      { id: "screenplay", label: "Write noises into causality", player_task: "Structure the playwright's interruptions so dialogue, music and ordinary sounds motivate actions and comic reversals while visual behavior remains legible." },
      { id: "casting", label: "Speech inside shomin-geki rhythm", player_task: "Direct Atsushi Watanabe, Kinuyo Tanaka and the ensemble for conversational timing and visual comedy without treating talkie performance as louder or more theatrical by default." },
      { id: "production_design", label: "Homes, walls and audible neighbors", player_task: "Design domestic and neighboring spaces so offscreen sound, doors, walls and room relationships have clear dramatic geography while preserving credited Kamata art/stage labor." },
      { id: "cinematography", label: "Three cameras under sync", player_task: "Coordinate Mizutani's framing, movement and three-camera coverage so cuts can vary viewpoint without breaking a continuous recorded event." },
      { id: "editing", label: "Cut image while sound continues", player_task: "Select synchronized camera angles and preserve sound continuity across cuts without inventing modern post-sync or digital multitrack freedom." },
      { id: "sound", label: "Tsuchihashi-Phone and everyday noise", player_task: "Record dialogue, radio, jazz, songs, clocks, cats and neighborhood ambience as differentiated story cues while keeping the domestic Shochiku-Phone system historically distinct." },
      { id: "release", label: "A talkie in an uneven transition", player_task: "Release the full-talkie through Shochiku while modeling theatres and audiences still sharing a market with silent, sound-version and benshi practices rather than declaring an overnight conversion." },
    ],
  },
] as const;

export function mergeChapterElevenNeighborsWifeExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenNeighborsWifeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_neighbors_wife_verified",
      source: { list_id: "manual_chapter_eleven_neighbors_wife_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: {
        title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType,
        runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0, user_rating: 0,
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
