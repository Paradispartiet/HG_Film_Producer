import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenGoodfellasExpansionDefinitions = [
  {
    id: "scenario_goodfellas_1990",
    title: "Goodfellas",
    originalTitle: "Goodfellas",
    year: 1990,
    titleType: "Movie",
    runtimeMins: 146,
    directors: ["Martin Scorsese"],
    genres: ["Crime", "Drama"],
    premise: "Build Goodfellas as a 1990 American studio-auteur boundary case whose adaptation, location production, camera choreography, editing, music and release pressure remain analytically distinct from the decade's independent and digital-production stories. AFI records Martin Scorsese as director, Nicholas Pileggi and Scorsese as screenwriters, Irwin Winkler as producer, Michael Ballhaus as cinematographer, Thelma Schoonmaker as editor, Kristi Zea as production designer, Irwin Winkler Productions and Warner Bros. Pictures as production companies, and Warner Bros. as distributor. The screenplay derives from Pileggi's 1985 book Wiseguy; AFI's production history states that Scorsese read the book while making The Color of Money and that Scorsese and Pileggi had completed a script by the end of 1986. Production was underway in New York City by May 1989 and principal photography was completed by August, with New York and New Jersey locations including Astoria, JFK cargo buildings, the Copacabana, Fort Lee and other period environments used to construct the film's multi-decade criminal world. AFI describes the Copacabana entrance as a roughly three-minute tracking shot and notes that the location was physically altered with a temporary wall to make the route more circuitous. The American Society of Cinematographers' Ballhaus retrospective documents a visual strategy using very wide and long focal-length extremes, high angles, harsh/direct lighting, rich color and darkness; it also records that Ballhaus, Steadicam operator Larry McConkey and assistant director Joe Reidy blocked the Copacabana move with Scorsese, which Scorsese remembered taking about twelve takes. The same ASC source documents Ballhaus's dolly/zoom idea for the diner scene in which Henry Hill senses danger from Jimmy. These are bounded craft facts, not permission to invent a complete shot list, exact lens package or universal lighting recipe. AFI credits Camera and Lenses by Arriflex and lists Dolby Stereo SR in selected theatres, but those catalog/presentation facts do not establish exact camera bodies, lens series, film stock, production-sound hardware, track architecture, laboratory route or release-print genealogy. Thelma Schoonmaker's credited editing labor must remain distinct from preview and ratings pressure: AFI records that violent material was reduced after an initial X rating and that a preview reportedly produced substantial walkouts, but those downstream interventions do not justify inventing a complete cut chronology. Music is a major historical system: AFI lists an extensive body of pre-existing songs while the Library of Congress describes the soundtrack as weaving pop tunes through the decades the film spans. Preserve institutional runtime disagreement—AFI 146 minutes and BFI 145 minutes—rather than asserting one universal version. Do not invent an exact final budget, exhaustive location schedule, unsourced take counts beyond the approximate Copacabana recollection, camera bodies, lens models, film stocks, filtration, exposure settings, edit hardware, music-clearance deal terms, complete cue chronology, sound-post topology or definitive version genealogy.",
    sourceId: "afi_goodfellas_1990",
    sourceUrl: "https://catalog.afi.com/Film/55206-GOODFELLAS",
    scenarioType: "american_studio_auteur_gangster_adaptation_location_camera_choreography_music_editing_1990",
    requiredChoicesSeed: {
      screenplay: ["wiseguy_research_adaptation", "pileggi_scorsese_screenplay", "historical_source_distinct_from_dramatic_construction"],
      camera: ["ballhaus_extreme_wide_and_long_strategy", "copacabana_three_minute_steadicam_choreography", "diner_dolly_zoom_turning_point", "no_invented_camera_lens_stock_package"],
      editing: ["schoonmaker_authored_temporal_system", "ratings_and_preview_pressure_kept_distinct", "afi_bfi_runtime_disagreement_preserved"],
      sound: ["preexisting_pop_music_as_historical_structure", "production_sound_distinct_from_music_and_exhibition_format", "no_invented_sound_post_chain"],
      themes: ["film_history", "1990s", "goodfellas", "martin_scorsese", "nicholas_pileggi", "irwin_winkler", "michael_ballhaus", "thelma_schoonmaker", "kristi_zea", "warner_bros", "studio_auteur", "gangster_film", "location_production", "copacabana", "steadicam", "larry_mcconkey", "joe_reidy", "dolly_zoom", "preexisting_music", "adaptation", "preview_screening", "ratings_pressure", "studio_indie_boundary"],
    },
    learningGoals: [
      "Place Goodfellas as a large American studio-auteur boundary case inside Chapter 17 without treating it as representative of the decade's independent sector.",
      "Distinguish Pileggi's Wiseguy source research from Scorsese and Pileggi's authored screenplay adaptation.",
      "Keep Irwin Winkler Productions and Warner Bros. Pictures production roles distinct from Warner Bros. distribution and later canonization.",
      "Use the spring-summer 1989 New York-area production record as bounded schedule evidence without inventing a daily shooting calendar.",
      "Explain how Astoria, JFK cargo facilities, the Copacabana, Fort Lee and other locations functioned as production geography without fabricating an exhaustive ledger.",
      "Keep Kristi Zea's production-design authorship visible alongside practical location transformation.",
      "Explain why the temporary Copacabana wall is evidence of production design serving camera choreography rather than proof that every location was similarly rebuilt.",
      "Treat Michael Ballhaus's wide/long focal-length extremes, high angles, harsh/direct light, rich color and darkness as documented strategies rather than a generic Scorsese template.",
      "Reconstruct the approximately three-minute Copacabana Steadicam shot as coordinated blocking among Ballhaus, Larry McConkey, Joe Reidy and Scorsese.",
      "Keep Scorsese's recollection of about twelve Copacabana takes approximate rather than converting it into a universal or exact production count.",
      "Explain the diner dolly/zoom as a specifically documented turning-point device suggested and executed by Ballhaus.",
      "Treat AFI's Arriflex camera-and-lenses credit as bounded equipment evidence without inventing exact body, lens-series or stock choices.",
      "Keep cinematography, production design and camera operation as distinct labor systems even when they converge inside long moving shots.",
      "Keep Thelma Schoonmaker's editorial authorship separate from ratings revisions, preview response and distribution strategy.",
      "Treat the initial X-rating problem and later violence reduction as documented version/release pressure without fabricating a complete cut genealogy.",
      "Use the preview walkout report as evidence of audience/release pressure rather than a quantitative model of editorial causation.",
      "Explain how pre-existing popular music structures chronology, memory and tone while remaining distinct from production sound.",
      "Keep credited sound labor and Dolby Stereo SR selected-theatre presentation distinct from unsupported assumptions about recording and mix architecture.",
      "Preserve AFI's 146-minute and BFI's 145-minute records as institutional runtime/version disagreement.",
      "Keep Ray Liotta's Henry Hill performance, ensemble casting and the use of people with real organized-crime experience distinct from documentary truth claims.",
      "Treat real-life source material and location realism as components of fiction production rather than evidence that the feature is documentary.",
      "Use Library of Congress preservation/canon evidence only as downstream reception, not as evidence about the 1989 production workflow.",
      "Do not invent exact budget, complete shot list, full take counts, camera/lens/stock package, filtration, exposure values, edit hardware, music-clearance terms, track layout, laboratory chain or definitive cut history where reviewed sources do not establish them.",
    ],
    phases: [
      { id: "source_book_and_adaptation", label: "Convert Wiseguy research into an authored screenplay", player_task: "Separate Pileggi's nonfiction source record from the Scorsese/Pileggi screenplay's selection, compression, voiceover and dramatic organization." },
      { id: "studio_package_and_boundary", label: "Build a studio-auteur production package", player_task: "Keep Irwin Winkler Productions and Warner Bros. production roles distinct from Warner distribution and from the independent-production systems elsewhere in Chapter 17." },
      { id: "casting_and_lived_reference", label: "Cast performance against a researched criminal milieu", player_task: "Use Ray Liotta and the ensemble within a fiction-performance system while treating people with real organized-crime experience as casting/context evidence, not documentary authentication." },
      { id: "location_period_world", label: "Construct a multi-decade New York-area world on location", player_task: "Coordinate documented New York and New Jersey locations with production design while avoiding an invented exhaustive location or day-by-day schedule." },
      { id: "copacabana_design_and_route", label: "Alter space to make the Copacabana route possible", player_task: "Treat the temporary wall and circuitous backstage path as a specific production-design intervention serving the long moving shot." },
      { id: "ballhaus_visual_strategy", label: "Coordinate focal-length extremes, angle, color and darkness", player_task: "Apply the documented Ballhaus strategy selectively while leaving exact camera body, lens series, stock, filtration and exposure values unset." },
      { id: "copacabana_steadicam", label: "Block the approximately three-minute Copacabana Steadicam shot", player_task: "Coordinate Ballhaus, Larry McConkey, Joe Reidy, performers and background action; keep the reported '12 takes or so' explicitly approximate." },
      { id: "diner_dolly_zoom", label: "Use a dolly/zoom to mark a relationship turning point", player_task: "Model the specifically documented Ballhaus move without projecting it into a general rule for every scene." },
      { id: "editing_and_temporal_density", label: "Shape voiceover, incident, ellipsis and acceleration in editorial construction", player_task: "Keep Thelma Schoonmaker's credited editorial authorship central while distinguishing the finished narrative system from later ratings and preview interventions." },
      { id: "music_as_historical_structure", label: "Build chronology and affect through pre-existing popular music", player_task: "Treat song selection as a structured editorial/music system across decades while leaving licensing negotiations and complete cue chronology unset unless sourced." },
      { id: "sound_and_exhibition_boundary", label: "Separate production sound, post sound and selected-theatre presentation", player_task: "Keep AFI's credited sound labor and Dolby Stereo SR listing visible without inventing microphones, recorders, track layouts or mixing-console architecture." },
      { id: "ratings_preview_and_release", label: "Handle ratings and preview pressure as downstream version constraints", player_task: "Record the X-rating revision and preview walkout evidence without inventing a full alternate-cut history or assigning every editorial choice to audience testing." },
      { id: "runtime_and_preservation_boundary", label: "Preserve runtime disagreement and later canonization as separate layers", player_task: "Keep AFI 146 minutes and BFI 145 minutes as competing institutional records, and keep National Film Registry selection downstream from original production evidence." },
    ],
  },
] as const;

export function mergeChapterSeventeenGoodfellasExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenGoodfellasExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_goodfellas_verified",
      source: { list_id: "manual_chapter_seventeen_goodfellas_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
