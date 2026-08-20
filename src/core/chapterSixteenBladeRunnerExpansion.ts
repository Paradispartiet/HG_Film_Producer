import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenBladeRunnerExpansionDefinitions = [
  {
    id: "scenario_blade_runner_1982",
    title: "Blade Runner",
    originalTitle: "Blade Runner",
    aliases: ["Dangerous Days", "Mechanismo"],
    year: 1982,
    titleType: "Movie",
    runtimeMins: 117,
    directors: ["Ridley Scott"],
    genres: ["Science Fiction", "Thriller"],
    premise: "Build Blade Runner as a 1982 Ladd Company / Sir Run Run Shaw production distributed by Warner Bros., rooted in Philip K. Dick's 1968 novel Do Androids Dream of Electric Sheep? and developed through a documented screenplay path involving Hampton Fancher and David Peoples. AFI records earlier adaptation interest from Herb Jaffe, Filmways involvement when Ridley Scott became attached, working titles Dangerous Days and Mechanismo, and Michael Deeley's choice of Blade Runner as the final title. Preserve that development history without turning every proposed cast member, abandoned title or preliminary financing report into final production fact. AFI identifies Michael Deeley as producer, Brian Kelly and Hampton Fancher as executive producers, Ivor Powell as associate producer, Scott as director, Fancher and Peoples as credited screenwriters, Jordan Cronenweth as director of photography, Lawrence G. Paull as production designer, Syd Mead as visual futurist, David Snyder as art director, Terry Rawlings as supervising editor, Marsha Nakashima as editor, Charles Knode and Michael Kaplan as costume designers, Vangelis as composer/arranger/performer/producer, Bud Alper as sound mixer, and Douglas Trumbull, Richard Yuricich and David Dryer as special photographic effects supervisors. AFI places production at The Burbank Studios and Los Angeles locations including the Bradbury Building and Frank Lloyd Wright's Ennis House, while the old New York Street set was redressed into the film's dense future city. American Cinematographer's July 1982 production reporting documents Cronenweth's high-contrast noir approach using backlight, shafts of light, smoke, rain, neon practicals, reflective uplight and controlled low-contrast filtration; it also documents the optical-axis reflected-light method used for the replicant eye glow, the reuse/redress of major sets, the cold-storage Ice Room, Spinner cockpit lighting rigs and close coordination between live-action photography and effects. Keep these techniques attributable to the reported scenes and departments rather than generalizing every shot to one recipe. American Cinematographer separately documents Paull and Mead's retrofit/accretion design logic: industrial-design thinking, vehicles and architecture built as layered systems, a congested street level and the Tyrell pyramid/office as a contrasting corporate environment. Treat this as designed fiction, not a forecast of actual 2019 Los Angeles or a neutral representation of Asian cities. The special-effects account by David Dryer records Entertainment Effects Group's more-than-50-person team, over 90 effects shots made, miniature photography extending roughly ten months, extensive 65mm effects photography, motion-control passes, matte painting, optical compositing, front projection, interactive lighting and smoke-room miniature work. Preserve the distinction between 35mm live-action presentation and 65mm effects-element photography; do not collapse the effects workflow into a claim that the entire picture was photographed in 65mm. AFI records Panavision presentation, Technicolor color and Dolby Stereo in selected theaters, while the catalog also preserves 114, 117 and 124 minute versions. The 1982 theatrical voice-over, the 1992 director's-cut release and the 2007 Final Cut belong to version/reception history downstream from principal production. Do not invent one uncontested budget number where AFI preserves conflicting contemporary figures, unsupported principal-photography dates, a universal lens/focal-length package, film-stock emulsion, scene-by-scene exposure ratios, sound-recorder or microphone models, or unverified authorship claims about later cuts.",
    sourceId: "afi_blade_runner_1982",
    sourceUrl: "https://catalog.afi.com/Film/68260-BLADE-RUNNER",
    scenarioType: "ladd_company_burbank_retrofit_future_noir_65mm_effects_version_history_production",
    requiredChoicesSeed: {
      screenplay: ["philip_k_dick_source_fancher_peoples_credited_screenplay", "development_titles_and_abandoned_paths_kept_separate", "theatrical_voiceover_and_later_cuts_downstream"],
      camera: ["jordan_cronenweth_noir_backlight_shafts_smoke_neon", "burbank_backlot_and_los_angeles_location_system", "live_action_and_65mm_effects_photography_kept_distinct"],
      editing: ["terry_rawlings_supervising_editor_marsha_nakashima_editor", "version_history_not_collapsed_into_one_cut", "no_invented_edit_room_chronology"],
      sound: ["bud_alper_production_sound_vangelis_score_distinct", "dolby_stereo_selected_theaters_supported", "no_invented_recorder_microphone_or_mix_hardware"],
      themes: ["film_history", "1980s", "science_fiction", "future_noir", "ridley_scott", "philip_k_dick", "hampton_fancher", "david_peoples", "jordan_cronenweth", "lawrence_g_paull", "syd_mead", "retrofit_design", "burbank_backlot", "bradbury_building", "ennis_house", "panavision", "technicolor", "dolby_stereo", "miniatures", "matte_painting", "motion_control", "65mm_effects", "alternate_cuts", "preservation_and_version_history"],
    },
    learningGoals: [
      "Model Blade Runner as a Ladd Company / Sir Run Run Shaw production distributed by Warner Bros., with Michael Deeley producing and Ridley Scott directing, rather than as an abstract cyberpunk text detached from production institutions.",
      "Trace the adaptation from Philip K. Dick's novel through earlier option/development history, Filmways-era planning, Hampton Fancher and David Peoples, and the Dangerous Days/Mechanismo working titles without treating abandoned paths as final credits.",
      "Separate the film's final credited screenplay by Fancher and Peoples from later debate over narration, cuts and authorship of subsequent versions.",
      "Use The Burbank Studios backlot, the Bradbury Building and the Ennis House as sourced components of the Los Angeles production geography while keeping designed future-Los-Angeles distinct from documentary city evidence.",
      "Understand Lawrence G. Paull's production design and Syd Mead's visual-futurist work as an industrial-design system of retrofit, accretion, vehicles, signage, architecture and social hierarchy.",
      "Keep David Snyder's art direction, the illustration team, set decorators, props and construction labor visible alongside Paull and Mead instead of attributing the city to a single designer.",
      "Use Jordan Cronenweth's documented high contrast, backlight, smoke, rain, neon practicals, shafts of light and reflective uplight as scene-grounded cinematography evidence rather than a generic recipe applied to every image.",
      "Distinguish AFI's Panavision/Technicolor presentation record from unsupported claims about one universal lens package, film stock, focal length or exposure ratio.",
      "Keep live-action photography separate from Entertainment Effects Group's 65mm effects-element photography, motion-control passes, miniatures, matte painting, optical compositing and front projection.",
      "Understand why 65mm was selected for most effects work as an image-quality strategy through multiple optical generations, without claiming the complete feature was photographed in 65mm.",
      "Keep Terry Rawlings's supervising-editor credit and Marsha Nakashima's editor credit distinct while treating the 1982 theatrical version, 1992 director's cut and 2007 Final Cut as downstream version history.",
      "Separate Bud Alper's production-sound role, dialogue/sound editing and dubbing credits from Vangelis's composed, arranged, performed and produced score.",
      "Treat the replicant eye glow, Spinner movement illusion, Tyrell-office projection work and rooftop matte integration as specifically documented techniques rather than reverse-engineering undocumented shots.",
      "Use the conflicting contemporary $22 million and $30 million reports as evidence that the budget record is not singular enough to teach one figure as uncontested fact.",
      "Treat later awards, critical canonization, home-video circulation and alternate cuts as reception/preservation history, not evidence for how the original production was photographed, designed or edited.",
    ],
    phases: [
      { id: "development", label: "Move from Dick's novel to a producible studio package", player_task: "Track earlier adaptation interest, Filmways-era planning, Scott's attachment, Fancher/Peoples screenplay work and the title path without converting abandoned development into final credit." },
      { id: "screenplay", label: "Build detective structure from a transformed literary source", player_task: "Keep Dick's novel, Fancher/Peoples screenwriting and later narration/version history separate so adaptation decisions remain attributable." },
      { id: "world_design", label: "Design a retrofit future rather than a pristine forecast", player_task: "Coordinate Paull, Mead, Snyder, illustrators, set decoration, props and construction around layered infrastructure, signage, vehicles and social hierarchy." },
      { id: "locations", label: "Fuse backlot reconstruction with Los Angeles landmarks", player_task: "Use The Burbank Studios, Bradbury Building, Ennis House and other sourced locations as production spaces while preserving the distinction between real Los Angeles and the fictional 2019 city." },
      { id: "cinematography", label: "Create future noir through controlled light and atmosphere", player_task: "Use Cronenweth's documented contrast, backlight, smoke, rain, neon, shafts and reflective uplight while avoiding unsupported universal lens, stock or exposure claims." },
      { id: "camera_effects_interface", label: "Coordinate live action with photographic effects", player_task: "Plan scenes so live-action framing, front projection, matte boundaries and later effects passes can integrate without pretending the entire image pipeline used one format." },
      { id: "effects", label: "Build the city through miniatures, mattes, motion control and optical compositing", player_task: "Use EEG's documented 65mm effects photography, motion-control system, miniature atmosphere and interactive lighting while keeping shot-specific claims within the sources." },
      { id: "editing", label: "Shape investigation, pursuit and revelation while preserving version boundaries", player_task: "Keep Rawlings and Nakashima's credited editorial roles visible and do not fold the theatrical narration, 1992 cut and 2007 Final Cut into one production chronology." },
      { id: "sound_music", label: "Separate location sound, editorial/dubbing work and Vangelis's score", player_task: "Coordinate credited sound departments and Vangelis's score without inventing recorder, microphone, ADR or mix-console hardware." },
      { id: "release_versions", label: "Separate 1982 production from later cut and preservation history", player_task: "Track the 1982 release and its multiple runtime records, then place 1992 and 2007 versions, awards and home-video circulation downstream from principal production." },
    ],
  },
] as const;

export function mergeChapterSixteenBladeRunnerExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenBladeRunnerExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_blade_runner_verified",
      source: { list_id: "manual_chapter_sixteen_blade_runner_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
