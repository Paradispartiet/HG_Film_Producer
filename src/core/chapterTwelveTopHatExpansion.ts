import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTwelveTopHatExpansionDefinitions = [
  {
    id: "scenario_top_hat_1935",
    title: "Top Hat",
    originalTitle: "Top Hat",
    aliases: [],
    year: 1935,
    titleType: "Feature",
    runtimeMins: 100,
    directors: ["Mark Sandrich"],
    genres: ["Musical", "Romantic comedy"],
    premise: "Build Top Hat as an RKO Astaire-Rogers musical production system rather than a generic elegance/dance preset or a copy of Warner's Berkeley model. AFI records RKO Radio Pictures as production and distribution company, Pandro S. Berman producing, Mark Sandrich directing, Dwight Taylor and Allan Scott scripting, David Abel photographing, Van Nest Polglase with Carroll Clark on art direction, William Hamilton editing, Thomas Little dressing sets, Bernard Newman supplying gowns, Max Steiner as music director, Hugh McDowell Jr. recording sound, Philip Faulkner recording music, Vernon Walker on photographic effects, William Hetzler as dance director and Hermes Pan staging ensembles. Irving Berlin wrote the five featured songs and participated in script conferences; modern-source production history in AFI documents Sandrich starting work in December 1934, Astaire spending five weeks rehearsing, Taylor and Scott revising separately through Sandrich/Berman/Berlin, continued script polishing during photography and 125 rehearsal hours for The Piccolino. Principal production ran 8 April to 5 June 1935 with RCA Victor sound, black-and-white photography, a 99–100 minute release form and PCA certificate no. 1099. Preserve full-body dance, rehearsal, music, costume, art-deco space and camera duration as coordinated craft without claiming every general Astaire technique or later Astaire-dolly detail was necessarily used on every Top Hat number. Treat the feathered Cheek to Cheek dress problem, censor changes to language and Beddini characterization, July preview cuts, later reissue shortening and varying prints as production/version history rather than trivia. Keep later box-office success, four Academy nominations and 1990 National Film Registry selection downstream from production choices.",
    sourceId: "afi_top_hat_1935",
    sourceUrl: "https://catalog.afi.com/Film/6707-TOP-HAT",
    scenarioType: "rko_astaire_rogers_musical_rehearsal_full_body_dance_art_deco_post_pca",
    requiredChoicesSeed: {
      screenplay: ["taylor_scott_berlin_script_song_integration", "sandrich_berman_revision_pipeline", "post_pca_censorship_without_total_causality"],
      camera: ["abel_full_body_dance_coordination", "polglase_clark_space_for_duration", "no_universal_astaire_dolly_claim"],
      editing: ["hamilton_dance_duration_and_comedy_rhythm", "preview_cuts_as_version_history", "99_100_minute_release_provenance"],
      sound: ["rca_victor_system", "mcdowell_faulkner_recording_labor", "berlin_music_rehearsal_playback_coordination"],
      themes: ["film_history", "studio_system", "rko", "astaire_rogers", "musical_cycle", "rehearsal", "dance_for_camera", "art_deco", "pca", "version_history"],
    },
    learningGoals: [
      "Model Top Hat as an RKO production/distribution pipeline rather than a universal Astaire-Rogers style button.",
      "Keep Pandro S. Berman's producing, Mark Sandrich's direction, Taylor/Scott writing and Irving Berlin's song/script participation separately attributable.",
      "Distinguish Astaire/Pan rehearsal-and-dance authorship from Sandrich's overall film direction and from RKO's camera, art, editing and sound departments.",
      "Use AFI's five-week Astaire rehearsal and 125-hour Piccolino rehearsal history to model preparation as production labor rather than effortless star magic.",
      "Keep David Abel photography, Polglase/Clark art direction, Hamilton editing, Thomas Little set dressing and Bernard Newman gowns visible as specialized craft.",
      "Preserve Hugh McDowell Jr. recording, Philip Faulkner music recording and RCA Victor sound without inventing microphones, channel layouts or playback equipment.",
      "Treat PCA certificate 1099 and documented dialogue/character censorship as bounded post-1934 regulation rather than a single switch explaining every creative choice.",
      "Use the Cheek to Cheek feather-dress problem as an interaction among costume, performance, floor, camera and retakes, not as a star anecdote detached from production.",
      "Preserve July preview cuts, variable prints and later reissue shortening as version history instead of asserting one immutable circulating cut.",
      "Compare RKO's full-body dance-and-duration priorities with Berkeley's camera-created mass choreography without ranking one musical system as universally superior.",
      "Keep later box office, Academy nominations and National Film Registry status as reception/preservation outcomes rather than production causes.",
    ],
    phases: [
      { id: "pitch", label: "Build an RKO star-pair musical system", player_task: "Frame Berman, Sandrich, Astaire-Rogers, Berlin and RKO departments as a coordinated production before later canonization enters." },
      { id: "research", label: "Lock rehearsal, PCA and version chronology", player_task: "Separate documented Top Hat practices from general Astaire-film techniques and later reissue history." },
      { id: "screenplay", label: "Interlock song, story and misunderstanding", player_task: "Coordinate Taylor, Scott, Sandrich, Berman and Berlin while preserving ongoing revisions during production." },
      { id: "casting", label: "Direct pairing, ensemble and comic timing", player_task: "Build Astaire, Rogers, Horton, Broderick, Blore and Rhodes as an ensemble rather than reducing the film to two stars." },
      { id: "production_design", label: "Create art-deco space for full-body movement", player_task: "Coordinate Polglase, Clark, Little and Newman so design and costume support choreography without swallowing performer movement." },
      { id: "cinematography", label: "Keep dance legible in duration", player_task: "Use Abel's credited photography to preserve bodies, spatial relations and camera timing without importing unsupported general Astaire hardware claims." },
      { id: "editing", label: "Balance duration, farce and preview response", player_task: "Use Hamilton's edit to preserve dance continuity and comic rhythm while treating July cuts and later print differences as version history." },
      { id: "sound", label: "Coordinate songs, recording and taps", player_task: "Use RCA Victor, McDowell and Faulkner with Berlin's music and rehearsal process without fabricating recording technology." },
      { id: "release", label: "Release under PCA and later version drift", player_task: "Keep certificate 1099, censor interventions, previews, box office, nominations, reissues and Registry status in chronological order." },
    ],
  },
] as const;

export function mergeChapterTwelveTopHatExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTwelveTopHatExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_twelve_top_hat_verified",
      source: { list_id: "manual_chapter_twelve_top_hat_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
