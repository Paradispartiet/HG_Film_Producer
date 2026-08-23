import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenBoysDontCryExpansionDefinitions = [
  {
    id: "scenario_boys_dont_cry_1999",
    title: "Boys Don't Cry",
    originalTitle: "Boys Don't Cry",
    year: 1999,
    titleType: "Movie",
    runtimeMins: 114,
    directors: ["Kimberly Peirce"],
    genres: ["Drama", "Biography"],
    premise: "Build Boys Don't Cry as a 1999 American independent production whose historical-biographical method, performance preparation, visual planning, editorial testing and specialty distribution must remain distinct. Kimberly Peirce directed and co-wrote with Andy Bienen after years of research into Brandon Teena's life and murder. In a contemporaneous Filmmaker Magazine interview, Peirce describes roughly five-and-a-half years of research, including time in Nebraska, interviews, trial attendance, public court transcripts and repeated source cross-checking; she also describes the legal vetting required to connect screenplay material to usable sources and life-story rights. The same interview documents a three-year search for the lead, a final casting breakthrough only weeks before production, and Hilary Swank's four-week transformation preparation with voice and physical training. Peirce describes extensive storyboarding that could be revised on set, close camera placement and dolly movement for intimacy, explicit point-of-view decisions, and a visual strategy combining realist and more heightened or mythic modes rather than treating the film as neutral docudrama. Intimate scenes were carefully mapped and choreographed before performance. Peirce also states that seven audience screenings of roughly one hundred people each shaped the edit and helped compress repeated exposition while clarifying the shift from transformation story to love story. AFI credits producers Jeffrey Sharp, John Hart, Eva Kolodner and Christine Vachon; cinematographer Jim Denault; production designer Michael Shaw; editors Lee Percy and Tracy Granger; composer Nathan Larson; Killer Films and Hart-Sharp Entertainment as production companies; and Fox Searchlight Pictures as distributor. AFI records a 114-minute duration while BFI records 118 minutes, so catalog runtime disagreement must be preserved rather than flattened into a false single-version certainty. Contemporary Los Angeles Times reporting places filming in and around Dallas beginning in October 1998 and reports a production budget below two million dollars; Yale film notes describe a five-week October-November 1998 shoot in and around Greenville, Texas, substituting for Nebraska. These are production-location and scale reports, not permission to invent an exact final budget, exact daily schedule or complete location ledger. Do not invent camera bodies, lenses, film stock, lighting package, lab route, microphone system, edit hardware, shooting ratio, take counts, exact scene-by-scene source provenance or a definitive cut history where reviewed sources do not establish them.",
    sourceId: "filmmaker_boys_dont_cry_1999",
    sourceUrl: "https://filmmakermagazine.com/archives/issues/fall1999/boys.php",
    scenarioType: "american_independent_biographical_queer_research_performance_storyboard_test_screening_1999",
    requiredChoicesSeed: {
      screenplay: ["research_and_rights_vetted_biographical_screenplay", "love_story_and_transformation_structure", "historical_record_distinct_from_dramatic_compression"],
      camera: ["storyboarded_realism_and_heightened_subjectivity", "close_point_of_view_and_dolly_intimacy", "no_invented_camera_lens_stock_or_lab_chain"],
      editing: ["seven_audience_screenings_inform_structure", "compress_repeated_exposition", "runtime_version_disagreement_preserved"],
      performance: ["three_year_lead_search", "four_week_swank_transformation_preparation", "mapped_intimacy_choreography"],
      themes: ["film_history", "1990s", "boys_dont_cry", "kimberly_peirce", "andy_bienen", "christine_vachon", "killer_films", "hart_sharp", "fox_searchlight", "hilary_swank", "chloe_sevigny", "jim_denault", "lee_percy", "tracy_granger", "nathan_larson", "biographical_ethics", "trans_history", "new_queer_cinema_afterlife", "american_independent_cinema", "texas_for_nebraska", "test_screenings", "production_distribution_boundary"],
    },
    learningGoals: [
      "Place Boys Don't Cry within late-1990s American independent and queer-film production without reducing it to either awards history or a generic true-story adaptation.",
      "Distinguish Brandon Teena's historical life and murder from the film's researched, legally vetted and dramatically compressed screenplay.",
      "Explain why Peirce's years of interviews, Nebraska research, trial attendance and court-record work were production inputs rather than a guarantee that every scene is literal transcription.",
      "Keep life-story rights, public records, cross-checked journalism and dramatic invention as different source categories.",
      "Treat Peirce and Andy Bienen's screenplay as an authored structure shaped by research, not as a documentary transcript.",
      "Explain how a three-year lead search became a material production constraint and why casting remained unresolved until shortly before shooting.",
      "Treat Hilary Swank's four-week voice, physical and social transformation preparation as documented performance work without claiming it reproduces Brandon Teena's lived experience exactly.",
      "Keep Chloë Sevigny and the wider ensemble inside a performance system shaped by research, casting and scene-specific direction rather than retrospective awards narratives.",
      "Explain why intimate scenes could be rigorously mapped and choreographed while still allowing performers to inhabit them organically.",
      "Use Peirce's extensive storyboarding as evidence of visual pre-planning while preserving her statement that boards were often changed on set.",
      "Distinguish realist influences from the film's heightened, mythic and subjective passages instead of calling the whole visual system documentary realism.",
      "Keep close camera placement, dolly movement and Brandon-centered point-of-view choices as documented directing/cinematography decisions without inventing lenses or camera bodies.",
      "Keep Jim Denault's cinematography credit distinct from unsupported claims about exact stocks, filtration, lighting fixtures or exposure settings.",
      "Keep Michael Shaw's production-design credit visible while avoiding invented set-build or location-dressing details.",
      "Explain how seven audience screenings informed structural editing decisions and the compression of repeated exposition.",
      "Keep Lee Percy and Tracy Granger's credited editing labor visible alongside Peirce's account of story-level changes made through audience feedback.",
      "Preserve the AFI/BFI runtime disagreement of 114 versus 118 minutes as catalog/version uncertainty rather than silently choosing one as universally definitive.",
      "Treat the Dallas/Greenville-area Texas shoot substituting for Nebraska as a production-geography decision while keeping historical Falls City distinct from filming location.",
      "Use contemporary reporting of a budget below two million dollars only as a scale boundary, not as an invented exact final cost or spending ledger.",
      "Keep Killer Films/Hart-Sharp production and Fox Searchlight distribution as distinct industrial layers.",
      "Keep Nathan Larson's credited music separate from production sound and from the film's broader country/road cultural texture.",
      "Do not invent camera package, film stock, lighting kit, sound system, edit hardware, lab path, shooting ratio, take count, exact daily schedule or definitive cut history where reviewed sources do not establish them.",
    ],
    phases: [
      { id: "research_and_historical_record", label: "Build the film from a layered historical record", player_task: "Organize interviews, Nebraska field research, trial observation, court transcripts and cross-checked journalism while keeping historical evidence distinct from dramatic reconstruction." },
      { id: "rights_and_legal_vetting", label: "Convert research into usable screenplay material", player_task: "Track life-story permissions, public-domain records and sourced descriptions so the production can dramatize responsibly without pretending legal clearance makes every detail historically certain." },
      { id: "screenplay_distillation", label: "Shape research into a tragic love-story structure", player_task: "Use Peirce and Bienen's authored screenplay to compress repetition and foreground character desire while marking omissions and composites as adaptation choices rather than missing history." },
      { id: "casting_brandon", label: "Resolve a three-year lead-casting problem", player_task: "Treat the late discovery of Hilary Swank as a production constraint tied to screen presence, passing within the film's fiction and the need for an unknown lead." },
      { id: "performance_transformation", label: "Prepare the lead through voice, physical and behavioral work", player_task: "Model the documented four-week preparation as actor training without turning it into a claim that performance can reproduce a trans person's lived identity." },
      { id: "storyboards_and_visual_grammar", label: "Pre-plan a visual grammar that can change on set", player_task: "Use extensive storyboards, film references and shot structures as preparation while preserving Peirce's practice of revising boards when locations and performances demanded it." },
      { id: "intimacy_and_point_of_view", label: "Choreograph intimacy and camera subjectivity", player_task: "Map intimate action carefully, favor close proximity and selected Brandon-centered perspective, and keep documented dolly movement distinct from unsupported lens or rig specifications." },
      { id: "texas_for_nebraska", label: "Build Nebraska through Texas production geography", player_task: "Use the reported Dallas/Greenville-area shoot as a substitution decision while separating actual Nebraska research sites from Texas filming locations and avoiding a fabricated full location ledger." },
      { id: "cinematography_and_design", label: "Coordinate image and environment across realism and heightened passages", player_task: "Keep Jim Denault's cinematography and Michael Shaw's production design visible while leaving camera, stock, lighting and build details unset unless directly sourced." },
      { id: "editing_and_audience_screenings", label: "Use seven audience screenings to test narrative structure", player_task: "Track how audience response helped Peirce and the editors compress repeated exposure beats and clarify the film's early transformation-to-love-story transition." },
      { id: "runtime_and_version_boundary", label: "Preserve catalog disagreement instead of inventing one universal runtime", player_task: "Record AFI's 114-minute and BFI's 118-minute durations as competing institutional records unless a specific version can be proven." },
      { id: "production_and_distribution", label: "Separate independent production from specialty distribution", player_task: "Keep Killer Films and Hart-Sharp's production role distinct from Fox Searchlight's distribution and from later critical/awards reception." },
    ],
  },
] as const;

export function mergeChapterSeventeenBoysDontCryExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenBoysDontCryExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_boys_dont_cry_verified",
      source: { list_id: "manual_chapter_seventeen_boys_dont_cry_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
