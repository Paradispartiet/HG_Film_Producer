import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenBroadwayMelodyExpansionDefinitions = [
  {
    id: "scenario_the_broadway_melody_1929",
    title: "The Broadway Melody",
    originalTitle: "The Broadway Melody",
    aliases: ["Broadway Melody"],
    year: 1929,
    titleType: "Feature",
    runtimeMins: 100,
    directors: ["Harry Beaumont"],
    genres: ["Musical", "Comedy-drama"],
    premise: "Build The Broadway Melody as MGM's 1929 early-sound musical production system rather than as a generic milestone slogan. AFI records Harry Beaumont directing, Edmund Goulding's story, Sarah Y. Mason continuity, Norman Houston and James Gleason dialogue, John Arnold photography, Cedric Gibbons art direction, Sam S. Zimbalist editing the sound version, William LeVanway editing the separate silent version, David Cox wardrobe, Douglas Shearer as recording engineer and George Cunningham staging ensemble numbers. The production began 19 October 1928; MGM marketed the picture as 'All Talking All Singing All Dancing,' yet also issued a much shorter silent version for theatres not equipped for sound. AFI identifies Movietone, ten reels/9,372 feet for the sound version, a 5,943-foot silent version and an original two-strip Technicolor 'Wedding of the Painted Doll' sequence whose color element is now lost. BFI documents the studio's practical difficulty balancing live orchestra, singing, dialogue and dance and the later playback solution for the Painted Doll number. The player must coordinate dialogue and chorus/tap sound, camera/staging, orchestral recording, song rights, ensemble choreography, sound-versus-silent version control and theatre capability without treating every musical number as live-recorded in one immutable form or claiming that the surviving black-and-white presentation preserves the original color state. Preserve labor and reception boundaries: Shearer's recording engineering, Arnold's photography, Cunningham's ensemble staging, Gibbons' design, the Brown/Freed songs and separate editors remain distinct; the later Academy Award belongs to reception/legacy, not evidence for how a shot or track was made.",
    sourceId: "afi_the_broadway_melody_1929",
    sourceUrl: "https://catalog.afi.com/Film/3068-THE-BROADWAY-MELODY",
    scenarioType: "mgm_movietone_early_musical_live_balance_playback_silent_version_technicolor_theatre_conversion_production",
    requiredChoicesSeed: {
      screenplay: ["goulding_mason_houston_gleason_story_dialogue_structure", "song_as_plot_action_not_insert", "sound_and_silent_version_structure"],
      camera: ["john_arnold_ensemble_visibility", "soundstage_camera_constraint_tradeoffs", "painted_doll_color_sequence_provenance"],
      editing: ["zimbalist_sound_version", "levanway_silent_version", "playback_and_live_recording_provenance"],
      sound: ["douglas_shearer_movietone_recording", "dialogue_orchestra_tap_balance", "theatre_sound_capability_and_silent_release"],
      themes: ["film_history", "sound_transition", "mgm_musical", "movietone", "playback", "silent_version", "two_strip_technicolor", "ensemble_choreography", "music_rights"],
    },
    learningGoals: [
      "Model The Broadway Melody as MGM's first sound-picture production system and an early studio musical, not as proof that the musical form or synchronized sound began with one film.",
      "Keep Movietone sound-on-film distinct from Vitaphone sound-on-disc and from the domestic systems used in other Chapter 11 cases.",
      "Differentiate labor: Beaumont directs, Arnold photographs, Gibbons designs, Zimbalist edits the sound version, LeVanway edits the silent version, Shearer records sound and Cunningham stages ensemble numbers.",
      "Balance dialogue, singing, orchestra and audible tap/chorus movement as simultaneous production problems rather than reducing musical sound to a single microphone or song track.",
      "Preserve the silent release as a separate production/exhibition state for unequipped theatres; its much shorter footage is not merely a sound print with audio removed.",
      "Treat playback as a historically specific solution for the reworked Painted Doll number and distinguish it from live recording and from modern post-production workflows.",
      "Preserve the original two-strip Technicolor production state while noting that the surviving Painted Doll sequence is now available only in black and white; archive survival is not original production intent.",
      "Connect Nacio Herb Brown and Arthur Freed songs to narrative, rehearsal, rights and performance workflow instead of treating music as detachable decoration.",
      "Keep the film's later Outstanding Picture win and MGM musical legacy in reception history rather than using awards as evidence for production technique.",
    ],
    phases: [
      { id: "pitch", label: "A studio musical system", player_task: "Define how dialogue, songs, dance and backstage action require coordinated image/sound production while keeping a viable silent-version strategy for unequipped theatres." },
      { id: "research", label: "MGM, Movietone and crew attribution", player_task: "Lock AFI/LOC/BFI evidence for MGM, Beaumont, Arnold, Gibbons, Shearer, Cunningham, the separate editors, sound/silent versions and Technicolor sequence before choosing production tactics." },
      { id: "screenplay", label: "Story, dialogue and songs", player_task: "Coordinate Goulding's story, Mason's continuity, Houston/Gleason dialogue and Brown/Freed songs so musical numbers advance character and plot rather than interrupting them." },
      { id: "casting", label: "Speech, singing and dance", player_task: "Direct Bessie Love, Anita Page, Charles King and ensemble performance so dialogue, singing, movement and visual readability coexist under early recording constraints." },
      { id: "production_design", label: "Gibbons builds the revue world", player_task: "Design rehearsal, backstage and proscenium spaces that support microphones, orchestra, chorus formations and clear visual separation without inventing unsupported stage hardware." },
      { id: "cinematography", label: "Arnold photographs sound and spectacle", player_task: "Frame dialogue and long-shot ensemble numbers so individual performers remain legible while respecting early-sound recording constraints and the distinct Painted Doll color sequence." },
      { id: "editing", label: "Two editors, two release states", player_task: "Build the sound version through Zimbalist and the shorter silent version through LeVanway as separate editorial products; keep playback/live-recording provenance explicit." },
      { id: "sound", label: "Shearer balances the musical", player_task: "Coordinate Movietone dialogue, orchestra, songs and audible dance under Douglas Shearer's recording responsibility, solving balance and synchronization without back-projecting modern multitrack freedom." },
      { id: "release", label: "Sound theatres and silent theatres", player_task: "Prepare distinct sound and silent release states, preserve Technicolor provenance and model uneven theatre conversion while keeping later awards/legacy outside production evidence." },
    ],
  },
] as const;

export function mergeChapterElevenBroadwayMelodyExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenBroadwayMelodyExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_broadway_melody_verified",
      source: { list_id: "manual_chapter_eleven_broadway_melody_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
