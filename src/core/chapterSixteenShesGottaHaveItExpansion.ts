import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenShesGottaHaveItExpansionDefinitions = [
  {
    id: "scenario_shes_gotta_have_it_1986",
    title: "She's Gotta Have It",
    originalTitle: "She's Gotta Have It",
    year: 1986,
    titleType: "Movie",
    runtimeMins: 84,
    directors: ["Spike Lee"],
    genres: ["Comedy", "Romance"],
    premise: "Build She's Gotta Have It as a Brooklyn microbudget independent production whose form grew directly out of financing limits, concentrated locations, Super 16mm capture, black-and-white photography, one deliberate color sequence, a twelve-day shoot and a later scramble to finance a 35mm blow-up. AFI traces the project back to the collapse of Spike Lee's planned 1984 Messenger feature when financing could not be secured; Lee then wrote a film he could make within his means. AMPAS production notes summarized by AFI record permission to transfer an $18,000 New York State Council on the Arts grant from Messenger, while an earlier $20,000 American Film Institute grant was rescinded. AFI also records final funding acknowledgements to the New York State Council on the Arts, New York Foundation of the Arts, Jerome Foundation and Brooklyn Arts Cultural Association with Black Filmmaker Foundation assistance. Preserve these funding layers separately from the later reported $175,000 final budget. A New York Times report cited by AFI states that principal photography took twelve days and cost $175,000; Criterion likewise gives $175,000 as final cost including post-production. AFI records that the picture was shot in black and white with one color sequence, originated on Super 16mm and required new fundraising for a 35mm blow-up after acceptance into the January 1986 San Francisco Film Festival. Do not infer an undocumented camera body, lens series, film-stock emulsion, focal-length map or exposure recipe from the Super 16 format: AFI credits TCS for cameras and lenses but does not identify a complete package. Ernest Dickerson is the cinematographer, Wynn Thomas production designer, John Michael Reefer costume designer, Spike Lee editor, Barry Alexander Brown sound designer and Bill Lee composer. AFI separately credits production sound recordists Steve Ning, Carol Everson and Paul Holtzman, boom operator Marcus Turner and downstream sound-effects, Foley, ADR and mix roles, so production sound, sound design, post sound and music must remain distinct. End credits state that the film was shot entirely in Brooklyn, specifically Fort Greene, Bedford-Stuyvesant, Brooklyn Heights, Downtown Brooklyn, Crown Heights and the Ferry Bank Restaurant. AFI also records that Lee worked with a non-union crew and without film permits or insurance. Treat those facts only as historical evidence of a resource-constrained 1985 independent production and as a contemporary safety/legal boundary: never recommend unpermitted, uninsured or labor-noncompliant production as a model to imitate. AFI records that Lee cast himself as Mars Blackmon because he could not afford another actor and used family and friends across the production, while Bill Lee composed the score, Joie Lee acted and David Lee handled still photography. Keep necessity-driven labor structure visible without romanticizing unpaid or unsafe work. The film's January 1986 festival acceptance, 35mm blow-up, Island Pictures distribution, MPAA rating cuts, 8 August 1986 release, later box office success and 2019 National Film Registry selection are downstream circulation, regulation, reception and preservation history rather than proof of how every shot was made.",
    sourceId: "afi_shes_gotta_have_it_1986",
    sourceUrl: "https://catalog.afi.com/Film/57471-SHES-GOTTAHAVEIT",
    scenarioType: "brooklyn_microbudget_super16_black_white_color_insert_guerrilla_independent_distribution",
    requiredChoicesSeed: {
      screenplay: ["post_messenger_makeable_within_means_script", "nola_research_questionnaire_distinct_from_final_fiction", "brooklyn_relationship_structure"],
      camera: ["ernest_dickerson_super_16_black_white_system", "single_color_sequence_as_deliberate_exception", "no_invented_camera_body_lens_stock_focal_length_or_exposure_recipe"],
      editing: ["spike_lee_editorial_structure", "super16_to_35mm_blowup_after_festival_acceptance", "mpaa_rating_cuts_as_distribution_regulation"],
      sound: ["production_sound_separate_from_barry_alexander_brown_sound_design_and_bill_lee_music", "multiple_post_sound_roles_kept_distinct", "no_invented_recorder_microphone_console_or_mix_hardware"],
      themes: ["film_history", "1980s", "black_independent_cinema", "brooklyn", "microbudget", "spike_lee", "ernest_dickerson", "wynn_thomas", "bill_lee", "barry_alexander_brown", "forty_acres_and_a_mule", "super_16", "black_and_white", "color_sequence", "twelve_day_shoot", "grant_financing", "independent_distribution", "island_pictures", "35mm_blowup", "location_production", "production_safety", "labor_structure", "mpaa_rating", "festival_circulation", "national_film_registry"],
    },
    learningGoals: [
      "Model She's Gotta Have It as a production designed to fit available means after the failed financing of Messenger rather than as a generic story of indie spontaneity.",
      "Separate the transferred $18,000 New York State Council on the Arts grant, other credited grant support and the later $175,000 final-budget figure instead of collapsing them into one funding claim.",
      "Treat the twelve-day schedule as a documented production constraint, not as a recommended universal pace for low-budget filmmaking.",
      "Preserve the documented Super 16 origin, black-and-white photography and single color sequence without inventing an unsupported camera body, lens series, stock emulsion or exposure recipe.",
      "Understand the 35mm blow-up as a post-production and circulation response after San Francisco Film Festival acceptance, not as the original capture format.",
      "Keep the entirely Brooklyn location system explicit across Fort Greene, Bedford-Stuyvesant, Brooklyn Heights, Downtown Brooklyn and Crown Heights instead of reducing the city to atmosphere.",
      "Keep Ernest Dickerson's cinematography distinct from Wynn Thomas's production design, John Michael Reefer's costumes and Spike Lee's editing.",
      "Keep production sound recording, Barry Alexander Brown's sound design, Foley/ADR/effects editorial, mixing and Bill Lee's music as separate audio systems.",
      "Treat family-and-friend labor and Lee casting himself for cost reasons as evidence of a resource-constrained production structure rather than as proof that every role was unpaid or informal.",
      "Treat AFI's documented non-union, unpermitted and uninsured production conditions only as historical risk evidence and explicitly reject them as a contemporary production recommendation.",
      "Keep grant financing, production spending, festival acceptance, distributor acquisition, ratings-board cuts, theatrical release and later box-office performance as distinct stages of the film's economic history.",
      "Use the research questionnaire circulated among thirty-five women as screenplay-development evidence while keeping interview research separate from the fictional character and finished film.",
      "Recognize the one color dance sequence as a deliberate formal exception within a predominantly black-and-white production rather than as evidence of a mixed-format workflow for every sequence.",
      "Keep Island Pictures distribution and MPAA rating negotiations downstream from principal photography while recognizing their effect on the version that reached theaters.",
      "Avoid inventing unsupported camera, lens, stock, lighting-ratio, sound-recorder, microphone, mix-console, laboratory or exact day-by-day production details beyond the documented evidence.",
    ],
    phases: [
      { id: "development", label: "Rewrite ambition around a film that can actually be financed", player_task: "Start from the failed Messenger financing and build a makeable screenplay around available money, locations and collaborators without confusing constraint with lack of design." },
      { id: "research", label: "Turn interview research into fiction without treating it as documentary testimony", player_task: "Use the documented questionnaire circulated among thirty-five women as development evidence while keeping Nola Darling a fictional construction." },
      { id: "financing", label: "Assemble grants and small-scale financing without flattening the budget history", player_task: "Track the transferred NYSCA grant, other credited funding bodies and the later $175,000 final cost as separate finance layers." },
      { id: "casting_labor", label: "Build a cast and crew within severe resource limits", player_task: "Model Lee's self-casting and family/friend participation as production-economy decisions while maintaining legal, labor and safety boundaries for contemporary practice." },
      { id: "brooklyn_locations", label: "Make Brooklyn the production geography rather than a generic backdrop", player_task: "Coordinate the documented Fort Greene, Bedford-Stuyvesant, Brooklyn Heights, Downtown Brooklyn and Crown Heights locations without inventing permits, fees or exact daily call sheets." },
      { id: "cinematography", label: "Build a Super 16 black-and-white system with one color exception", player_task: "Use Dickerson's credited cinematography, Super 16 origin and one color sequence while leaving unsupported camera-body, lens, stock and exposure details unset." },
      { id: "design_performance", label: "Coordinate performance, production design and costume within a minimal-resource environment", player_task: "Keep Thomas's design, Reefer's costume work and actor performance distinct even when the production relies heavily on real Brooklyn spaces and personal networks." },
      { id: "sound_music", label: "Separate location sound, sound design, post sound and score", player_task: "Keep the credited recordists and boom work distinct from Brown's sound design, effects/Foley/ADR work, mixing and Bill Lee's music without inventing hardware." },
      { id: "postproduction", label: "Finish the film and finance the 35mm blow-up", player_task: "Treat Lee's editing, the Super 16-to-35mm blow-up and festival-triggered fundraising as distinct post-production and exhibition problems." },
      { id: "distribution_release", label: "Move from festival acceptance to rated theatrical distribution", player_task: "Track San Francisco acceptance, Island Pictures distribution, MPAA cuts and the 8 August 1986 release separately from later box office and National Film Registry recognition." },
    ],
  },
] as const;

export function mergeChapterSixteenShesGottaHaveItExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenShesGottaHaveItExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_shes_gotta_have_it_verified",
      source: { list_id: "manual_chapter_sixteen_shes_gotta_have_it_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
