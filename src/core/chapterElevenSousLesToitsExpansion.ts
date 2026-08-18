import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenSousLesToitsExpansionDefinitions = [
  {
    id: "scenario_sous_les_toits_de_paris_1930",
    title: "Sous les toits de Paris",
    originalTitle: "Sous les toits de Paris",
    aliases: ["Under the Roofs of Paris"],
    year: 1930,
    titleType: "Feature",
    runtimeMins: 90,
    directors: ["René Clair"],
    genres: ["Romance", "Comedy", "Musical"],
    premise: "Build Sous les toits de Paris as a 1930 France-Germany Tobis early-sound production in which René Clair uses the limits of synchronized sound deliberately rather than merely accepting them. La Cinémathèque française records Société des Films Sonores Tobis as producer, Frank Clifford as production director, Georges Périnal and Georges Raulet in photography, Hermann Storr and Walter Morhenn as sound engineers, Lazare Meerson and Alexandre Trauner as set designers, René Hubert for costume, René Le Hénaff and Clair editing, and Armand Bernard/André Gailhard for music. BFI documents the stylized studio Paris, the moving opening camera, sound growing louder as the camera approaches its source, tenement noise passing through floors, doors that cut sound off, a stuck gramophone and a knife fight whose image and sound are deliberately separated. The player must coordinate constructed urban geography, camera movement, dialogue/song synchronization, offscreen sound, selective silence, music/noise perspective and editorial sound-image separation without assuming continuous synchronization is the desired norm. Preserve provenance boundaries: the 2019 4K restoration documented by the Cinémathèque/TF1 Studio derives from a nitrate image negative, a French sound negative and a safety element; restoration assembly and modern playback are not original 1930 production elements. Preserve institutional specificity: Tobis production, French/German financing context, Clair's direction, Meerson/Trauner design, Périnal/Raulet photography, Storr/Morhenn sound and Le Hénaff/Clair editing remain differentiated rather than collapsed into a single auteur or generic 'European sound' label.",
    sourceId: "cinematheque_sous_les_toits_de_paris_1930",
    sourceUrl: "https://www.cinematheque.fr/film/47691.html",
    scenarioType: "tobis_french_studio_selective_sync_offscreen_sound_moving_camera_silence_restoration_provenance_production",
    requiredChoicesSeed: {
      screenplay: ["clair_sparse_dialogue_song_structure", "sound_source_and_silence_as_story", "offscreen_action_without_expository_overload"],
      camera: ["perinal_raulet_moving_camera_sound_perspective", "meerson_trauner_studio_geography", "image_sound_separation_intent"],
      editing: ["le_henaff_clair_selective_sync", "doors_darkness_train_sound_transitions", "restoration_element_provenance"],
      sound: ["storr_morhenn_selective_synchronization", "offscreen_tenement_gramophone_train_noise", "silence_and_distance_as_mix_choices"],
      themes: ["film_history", "sound_transition", "french_early_sound", "tobis", "selective_sync", "offscreen_sound", "studio_space", "moving_camera", "restoration_provenance"],
    },
    learningGoals: [
      "Model Sous les toits de Paris as an early sound film that uses selective synchronization and deliberate silence as expressive production choices rather than as technological deficiencies.",
      "Differentiate Tobis production-company provenance from unsupported claims about the exact recording hardware used on every scene.",
      "Keep production labor distinct: Clair directs/writes, Périnal and Raulet photograph, Storr and Morhenn engineer sound, Meerson and Trauner design, Le Hénaff and Clair edit, and Bernard/Gailhard compose music.",
      "Use constructed studio geography to make offscreen sound intelligible: floors, doors, streets, rooms and distance determine what the audience hears and when.",
      "Coordinate moving camera and changing sound perspective so the soundtrack can grow with proximity to a source without treating sound as a static attachment to the frame.",
      "Treat doors, darkness, trains and a sticking gramophone as production tools for controlling information, rhythm and point of audition rather than as decorative sound effects.",
      "Preserve the distinction between synchronized dialogue/song and deliberately non-synchronous or offscreen sound-image relationships.",
      "Keep the 2019 4K restoration's nitrate-image, French-sound-negative and safety-element provenance separate from claims about the original 1930 release state.",
      "Place Clair's strategy within France's uneven sound transition without treating Hollywood dialogue practice as the universal norm or 'French sound' as one homogeneous system.",
    ],
    phases: [
      { id: "pitch", label: "Sound is selective, not continuous", player_task: "Define which dialogue and song moments need direct synchronization and where offscreen sound, silence or image/sound separation carries the scene." },
      { id: "research", label: "Tobis, crew and restoration provenance", player_task: "Lock Cinémathèque/BFI evidence for production company, crew, constructed studio space, sound strategies and restoration elements before designing choices." },
      { id: "screenplay", label: "Write sources, distances and absences", player_task: "Structure Clair's sparse dialogue, songs and street action so sound sources can move offscreen, be blocked by architecture or disappear without confusing narrative causality." },
      { id: "casting", label: "Performance across speech and silence", player_task: "Direct Albert Préjean, Pola Illery, Gaston Modot and ensemble so gesture, song, dialogue and reaction remain legible when sound is withheld or displaced." },
      { id: "production_design", label: "Meerson and Trauner build audible Paris", player_task: "Construct streets, rooms, floors, doors and sightlines that give offscreen voices, music and noise a believable spatial source without pretending the studio set is documentary Paris." },
      { id: "cinematography", label: "Move toward and away from sound", player_task: "Coordinate Périnal/Raulet camera movement with sound perspective and studio geography so image movement and sonic distance can reinforce or contradict one another deliberately." },
      { id: "editing", label: "Cut synchronization strategically", player_task: "Use Le Hénaff/Clair editing to decide when sound continues, disappears, precedes or outlasts an image while preserving clear version/restoration provenance." },
      { id: "sound", label: "Storr and Morhenn shape point of audition", player_task: "Balance dialogue, song, gramophone, tenement noise, train sound and selective silence as spatial and dramatic information rather than as a continuous demonstration track." },
      { id: "release", label: "1930 production versus restored presentation", player_task: "Release the film with its Tobis/France-Germany context intact and keep modern 4K restoration elements, transfer choices and playback conditions explicitly separate from original production claims." },
    ],
  },
] as const;

export function mergeChapterElevenSousLesToitsExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenSousLesToitsExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_sous_les_toits_verified",
      source: { list_id: "manual_chapter_eleven_sous_les_toits_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
