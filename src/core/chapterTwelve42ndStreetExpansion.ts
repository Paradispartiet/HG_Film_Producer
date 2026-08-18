import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTwelve42ndStreetExpansionDefinitions = [
  {
    id: "scenario_42nd_street_1933",
    title: "42nd Street",
    originalTitle: "42nd Street",
    aliases: ["Forty-Second Street"],
    year: 1933,
    titleType: "Feature",
    runtimeMins: 89,
    directors: ["Lloyd Bacon"],
    genres: ["Musical", "Show business"],
    premise: "Build 42nd Street as a Warner Bros. production-system case in which backstage narrative, Depression economics, music, choreography, camera, sound and studio scheduling are coordinated rather than reduced to a generic musical preset. AFI records Warner Bros. Pictures as production company, Warner Bros. and The Vitaphone Corp. as distributors, Lloyd Bacon as director after Mervyn LeRoy was replaced due to illness, Darryl F. Zanuck as producer and Hal B. Wallis as supervisor. Rian James and James Seymour adapt Bradford Ropes's novel; Sol Polito heads photography with Michael Joyce as second camera and Speed Mitchell assisting; Jack Okey handles art direction; Frank Ware and Thomas Pratt edit; Orry-Kelly supplies gowns; Leo F. Forbstein is Vitaphone orchestra director; Nathan Levinson and Dolph Thomas are credited for sound; and Busby Berkeley is explicitly credited with creating and staging the dances and ensembles. AFI documents a 28-day shooting schedule, a $340,000 cost, Western Electric sound and an 89-minute runtime. BFI describes Berkeley's production method as synchronizing musical sequences to pre-recorded tracks so the camera could move freely through large studio sets, and identifies 42nd Street as the key breakthrough where choreography is designed for the camera rather than merely recording a theatrical stage. Preserve the distinction between Bacon's direction of the film and Berkeley's dance/ensemble authorship; do not rewrite Berkeley as sole director. Treat chorus bodies, sexuality, labor discipline and Depression precarity critically rather than rewarding spectacle or exploitation as a neutral genre formula. Do not invent a specific crane model, lens package, film stock, microphone type, number of dancers, rehearsal duration or shot-by-shot rigging unless separately sourced.",
    sourceId: "afi_42nd_street_1933",
    sourceUrl: "https://catalog.afi.com/Film/3955-42ND-STREET",
    scenarioType: "warner_backstage_musical_berkeley_camera_choreography_pre_recorded_music_depression_studio_pipeline",
    requiredChoicesSeed: {
      screenplay: ["ropes_novel_to_backstage_screenplay", "depression_show_business_economy", "bacon_film_direction_vs_berkeley_dance_authorship"],
      camera: ["polito_berkeley_camera_choreography", "second_camera_department_coordination", "no_invented_rig_or_lens_claims"],
      editing: ["ware_pratt_music_dance_continuity", "backstage_to_spectacle_structure", "89_minute_release_provenance"],
      sound: ["western_electric_sound", "levinson_thomas_sound_department", "forbstein_vitaphone_orchestra_and_pre_recorded_track_coordination"],
      themes: ["film_history", "studio_system", "musical_cycle", "warner_bros", "busby_berkeley", "camera_choreography", "depression_economy", "chorus_labor", "sound_music_pipeline"],
    },
    learningGoals: [
      "Model 42nd Street as a Warner Bros. studio pipeline that coordinates producing, writing, choreography, photography, art, editing, music, sound, costume and publicity.",
      "Keep Lloyd Bacon's film direction distinct from Busby Berkeley's credited creation and staging of dances and ensembles.",
      "Use AFI's 28-day schedule and $340,000 cost as industrial constraints rather than treating spectacle as unlimited creative freedom.",
      "Connect Berkeley's camera-oriented choreography to Sol Polito's photography and the documented second-camera department without inventing unsourced hardware.",
      "Use BFI's pre-recorded-track account to explain how synchronization could free camera movement while keeping the exact recording workflow source-bounded.",
      "Keep Rian James and James Seymour's screenplay adaptation separate from Bradford Ropes's novel and from the later Broadway stage adaptation.",
      "Attribute music and songs correctly: Harry Warren and Al Dubin write the songs, while Leo F. Forbstein is credited as Vitaphone orchestra director.",
      "Keep Nathan Levinson and Dolph Thomas visible as sound labor and connect Levinson's department to the film's Academy sound nomination without turning an award outcome into a production cause.",
      "Keep Jack Okey, Orry-Kelly, Frank Ware and Thomas Pratt visible as specialized craft contributors rather than folding every visual choice into Berkeley's authorship.",
      "Analyze chorus labor, body display, gender and Depression-era precarity critically; spectacle must not erase the workers whose synchronized bodies make it possible.",
      "Treat later musical canonization and National Film Registry status as reception/preservation evidence, not as instructions available to the 1932 production team.",
    ],
    phases: [
      { id: "pitch", label: "A backstage musical under Depression pressure", player_task: "Frame Warner's musical as a budgeted show-business production where financial precarity, rehearsal labor and spectacle must coexist." },
      { id: "research", label: "Lock Bacon, Berkeley and department boundaries", player_task: "Separate film direction, dance authorship, camera, art, editing, music, sound and costume credits before building any musical set piece." },
      { id: "screenplay", label: "Turn Ropes into a backstage production machine", player_task: "Adapt the novel through James and Seymour while organizing auditions, rehearsals, crisis and opening night around production labor." },
      { id: "casting", label: "Build an ensemble, not a star-only vehicle", player_task: "Coordinate Baxter, Daniels, Keeler, Rogers, Powell and the chorus as differentiated performers within a demanding rehearsal hierarchy." },
      { id: "production_design", label: "Scale Okey's studio space for choreography", player_task: "Design stages and scenic transitions that can support Berkeley's ensemble geometry while remaining achievable inside the documented schedule and budget." },
      { id: "cinematography", label: "Choreograph bodies for the camera", player_task: "Coordinate Polito, second camera and Berkeley so movement is composed cinematically rather than treated as a static record of a stage routine." },
      { id: "editing", label: "Move from rehearsal realism to musical abstraction", player_task: "Use Ware and Pratt's editing role to manage rhythm, continuity and transitions between backstage causality and camera-created spectacle." },
      { id: "sound", label: "Synchronize songs, orchestra and camera freedom", player_task: "Coordinate Western Electric sound, Levinson/Thomas and Forbstein with Berkeley's pre-recorded-track method without inventing undocumented recording hardware." },
      { id: "release", label: "Sell the musical without erasing its labor", player_task: "Place Warner/Vitaphone distribution, the 42nd Street Special publicity stunt, later awards and Registry status after the production decisions that made the film." },
    ],
  },
] as const;

export function mergeChapterTwelve42ndStreetExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTwelve42ndStreetExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_twelve_42nd_street_verified",
      source: { list_id: "manual_chapter_twelve_42nd_street_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
