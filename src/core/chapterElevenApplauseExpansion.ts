import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenApplauseExpansionDefinitions = [
  {
    id: "scenario_applause_1929",
    title: "Applause",
    originalTitle: "Applause",
    aliases: [],
    year: 1929,
    titleType: "Feature",
    runtimeMins: 80,
    directors: ["Rouben Mamoulian"],
    genres: ["Drama", "Music"],
    premise: "Build Applause as a 1929 Paramount Famous Lasky early-sound production whose problem is how to preserve mobile, location-aware cinema while recording synchronized dialogue, songs and city sound under noisy-camera constraints. AFI records Rouben Mamoulian directing, Garrett Fort adapting Beth Brown's novel, George Folsey photographing, John Bassler editing and Ernest F. Zatorsky as recording engineer; interiors were made at Paramount's Astoria Studios and exteriors across New York City. AFI identifies the sound process as Movietone, notes a silent version also existed, and records Mamoulian's use of two simultaneous sound tracks. Library of Congress Mamoulian material shows soundproof camera booths used to stop camera noise reaching microphones, while MoMA and Museum of the Moving Image emphasize the film's unusually fluid camera and use of New York street and subway sound. The player must therefore solve camera-noise isolation, movement, microphone placement, track separation, urban ambience, dialogue/music balance and silent-version compatibility without claiming that early sound automatically forced immobile staging. Preserve labor attribution and evidence boundaries: Folsey's photography, Zatorsky's recording, Bassler's editing, Astoria production and location sound/image work remain distinct; modern restoration sound, later interviews and retrospective reputation are not interchangeable with original production elements.",
    sourceId: "afi_applause_1929",
    sourceUrl: "https://catalog.afi.com/Film/2614-APPLAUSE",
    scenarioType: "paramount_astoria_movietone_mobile_camera_dual_track_urban_sound_booth_isolation_production",
    requiredChoicesSeed: {
      screenplay: ["beth_brown_garrett_fort_adaptation", "dialogue_song_visual_balance", "silent_version_compatibility"],
      camera: ["folsey_mobile_camera_strategy", "soundproof_booth_noise_isolation", "astoria_location_visual_continuity"],
      editing: ["bassler_sound_image_rhythm", "parallel_track_cue_control", "sound_and_silent_version_provenance"],
      sound: ["zatorsky_movietone_recording", "simultaneous_sound_tracks", "new_york_ambient_sound_and_offscreen_cues"],
      themes: ["film_history", "sound_transition", "paramount_astoria", "movietone", "camera_mobility", "soundproof_camera_booth", "urban_ambience", "backstage_melodrama"],
    },
    learningGoals: [
      "Model Applause as an early sound film that actively pursued camera mobility rather than accepting static stage-bound framing as a permanent technical rule.",
      "Explain why soundproof camera booths were used in 1929: noisy cameras could contaminate microphone recordings, so isolation was an engineering tradeoff with consequences for movement and staging.",
      "Keep AFI's documented Movietone process separate from generic sound-on-disc systems and from unsupported claims about individual microphone models.",
      "Differentiate production labor: Mamoulian directs, Folsey photographs, Bassler edits and Zatorsky records sound; innovation is not credited to one auteur alone.",
      "Use Astoria interiors and New York exteriors, including street/subway environments, to model how location imagery and urban ambience widened early-talkie space beyond a sealed soundstage.",
      "Treat two simultaneous sound tracks as a production and post-combination problem: separate sonic material must remain attributable and synchronized rather than being described as modern digital multitracking.",
      "Preserve the existence of a silent version and distinguish its exhibition needs from the Movietone sound version instead of treating silence as merely a missing soundtrack.",
      "Analyze songs, dialogue, offscreen cues and ambient sound as narrative resources in a backstage melodrama rather than as demonstrations of novelty for their own sake.",
      "Keep original sound/image evidence distinct from later restorations, retrospective interviews and modern playback conditions.",
    ],
    phases: [
      { id: "pitch", label: "A moving talkie, not photographed theatre", player_task: "Define how camera movement, dialogue, songs and New York ambience will carry story together without assuming sound requires fixed frontal staging." },
      { id: "research", label: "Astoria, Movietone and crew attribution", player_task: "Lock AFI/LOC/MoMA evidence for the Paramount Astoria workflow, Movietone, Folsey, Bassler, Zatorsky, soundproof camera booths and city locations before making technical choices." },
      { id: "screenplay", label: "Adaptation for image, speech and song", player_task: "Adapt Beth Brown through Garrett Fort's screen structure so dialogue and songs add information while visual action remains legible and the separate silent-version boundary stays explicit." },
      { id: "casting", label: "Performance for intimate microphones and mobile framing", player_task: "Direct Helen Morgan, Joan Peers and ensemble performance for speech, song and visual rhythm without turning early microphone limits into exaggerated acting rules." },
      { id: "production_design", label: "Backstage density and Astoria control", player_task: "Build crowded backstage and performance spaces that can be photographed dynamically while allowing camera-noise isolation and workable recording positions." },
      { id: "cinematography", label: "Folsey versus the noisy camera", player_task: "Plan mobile compositions and New York exteriors while choosing when soundproof booth constraints, camera placement or visual continuity should dominate." },
      { id: "editing", label: "Bassler's sound-image rhythm", player_task: "Cut movement, montage, dialogue, songs and offscreen cues while maintaining exact sync and provenance between sound and silent release states." },
      { id: "sound", label: "Zatorsky, Movietone and parallel tracks", player_task: "Record speech, music and city ambience with historically bounded Movietone-era methods, manage simultaneous tracks, and avoid inventing unsupported microphone hardware." },
      { id: "release", label: "Sound and silent exhibition states", player_task: "Prepare the Movietone sound version and the documented silent alternative for different theatre capabilities without pretending conversion happened everywhere at once." },
    ],
  },
] as const;

export function mergeChapterElevenApplauseExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenApplauseExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_applause_verified",
      source: { list_id: "manual_chapter_eleven_applause_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
