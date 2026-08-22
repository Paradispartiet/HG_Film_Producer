import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenBoyzNTheHoodExpansionDefinitions = [
  {
    id: "scenario_boyz_n_the_hood_1991",
    title: "Boyz n the Hood",
    originalTitle: "Boyz n the Hood",
    year: 1991,
    titleType: "Movie",
    runtimeMins: 108,
    directors: ["John Singleton"],
    genres: ["Drama"],
    premise: "Build Boyz n the Hood as John Singleton's 1991 Columbia Pictures feature debut through the interaction of studio greenlighting, young Black authorship, South Central Los Angeles location production, community participation, performance, camera/art departments, editing and sound, without reducing the film to a generic 'gang movie' or treating one production as a template for all New Black cinema. AFI records Singleton as writer-director, Steve Nicolaides as producer, Charles Mills as director of photography, Bruce Cannon as editor, Bruce Bellamy as art director/production designer and Columbia Pictures as production and distribution company, with 108-minute duration and a 12 July 1991 release. AFI's production history states that during a Columbia internship Singleton submitted the script to executive Stephanie Allain, who brought it to studio chief Frank Price; Columbia initially offered Singleton $100,000 to walk away, but he refused and insisted on directing, after which Price greenlit the film with the twenty-three-year-old first-time feature director. Preserve this as a documented negotiation over authorship and directing control, not a universal route into studio production. USC independently identifies the screenplay as work Singleton developed as a student and later directed because it drew on his life. AFI reports that principal photography began 1 October 1990 in South Central Los Angeles and that production notes in Academy library files described three local gang members serving as consultants on wardrobe, vocal emphasis and dialogue changes, a predominantly African-American crew, security from LAPD and Fruit of Islam, and many background performers drawn from neighborhood spectators. Singleton's Television Academy oral history similarly discusses filming in his old neighborhood, casting, real-life inspiration and his intent to build a Black-led crew. These records show community/location production choices, but consultant participation, local casting or demographic crew composition must not be treated as automatic proof of factual accuracy or as a modern consent protocol. Present-day comparable work requires informed consent, clearly scoped community consultation, privacy/safeguarding, appropriate compensation, qualified location/security planning and avoidance of coercion or tokenism. Performance is another distinct system: AFI records Ice Cube using his own South Central experience for Doughboy, while the ensemble included Cuba Gooding Jr., Morris Chestnut, Nia Long, Laurence Fishburne, Angela Bassett, Regina King and others. Personal experience may inform performance, but do not infer undocumented improvisation, actor research or trauma exposure. Camera evidence is deliberately bounded. AFI credits Charles Mills, camera operator Tony Gaudioz, chief lighting technician Eli Harris and notes Arriflex cameras and lenses supplied by Clairmont. That establishes an Arriflex/Clairmont equipment relationship but not exact body models, focal lengths, film stock, filters, exposure, lighting ratios, laboratory process or shot-by-shot package. AFI also records Technicolor prints and Dolby Stereo in selected theatres; these release/print facts do not by themselves establish every original capture or post-production specification. Keep Bruce Bellamy's art direction, Darryle Johnson/Shirlene Williams wardrobe, Bruce Cannon's editing, Stanley Clarke's original score, Veda Campbell's production sound and Patrick Drummond's supervising sound editing as separate craft layers. AFI reports a $5.7-$6 million budget range from various sources; retain it as attributed reporting, not an audited ledger. The film premiered in Cannes Un Certain Regard on 13 May 1991, and Cannes preserves Singleton/Mills/Clarke/Cannon/Bellamy credits and a 108-minute record. Academy records Singleton's directing and original-screenplay nominations; Library of Congress records its 2002 National Film Registry selection. Festival reception, awards, later canonization and release controversies are downstream evidence and must not be used to invent production technique. The film's representation of violence, policing and Black life is historically and politically consequential, but plot, title cards, box office, later criticism and National Film Registry status are not factual certification of every social claim. Avoid invented exact shooting end date, daily schedule, location list, permit/security procedures, consultant contracts, camera/lens/stock/filter/exposure data, weapons or stunt procedures, sound hardware, ADR/Foley workflow, edit system or distribution economics absent from the reviewed sources.",
    sourceId: "afi_boyz_n_the_hood_1991",
    sourceUrl: "https://catalog.afi.com/Film/58786-BOYZ-N-THE-HOOD",
    scenarioType: "columbia_south_central_first_feature_black_authorship_community_location_production",
    requiredChoicesSeed: {
      screenplay: ["singleton_student_script_and_columbia_greenlight", "autobiographical_elements_not_total_factuality", "studio_notes_distinct_from_final_authorship"],
      camera: ["charles_mills_arriflex_clairmont_source_boundary", "eli_harris_lighting_separate", "no_invented_body_lens_stock_filter_exposure_or_lab"],
      editing: ["bruce_cannon_editorial_authorship", "editing_distinct_from_studio_notes_and_script_revision", "release_reception_not_edit_proof"],
      sound: ["veda_campbell_production_sound", "patrick_drummond_sound_editing_separate", "stanley_clarke_music_separate_from_sound"],
      themes: ["film_history", "1990s", "boyz_n_the_hood", "john_singleton", "columbia_pictures", "south_central_los_angeles", "black_authorship", "community_production", "new_black_cinema_plural", "steve_nicolaides", "charles_mills", "bruce_bellamy", "bruce_cannon", "stanley_clarke", "veda_campbell", "patrick_drummond", "arriflex", "clairmont", "budget_range", "representation_safeguards", "registry_downstream"],
    },
    learningGoals: [
      "Model Boyz n the Hood as a Columbia-financed studio feature shaped by Singleton's authorship and South Central production rather than as an unmediated community document.",
      "Reconstruct the Columbia internship-to-greenlight path while preserving Singleton's documented refusal to surrender directing control.",
      "Treat Singleton's young age and first-feature status as production history, not a lone-genius myth that erases producer, studio, crew or community labor.",
      "Use AFI's 1 October 1990 production start and South Central Los Angeles location evidence without inventing a complete schedule or location ledger.",
      "Preserve the documented predominantly African-American crew and Singleton's Black-led crew intent without claiming every department member's identity or reducing crew composition to symbolism.",
      "Treat local background casting and three gang-member consultants as documented production choices, not automatic guarantees of authenticity or factual truth.",
      "Apply present-day informed consent, safeguarding, compensation, privacy and clearly scoped community consultation to comparable community-based work.",
      "Keep Charles Mills cinematography and Eli Harris lighting responsibilities distinct, and retain Arriflex/Clairmont only at the equipment-supply level AFI supports.",
      "Do not invent exact camera bodies, focal lengths, stocks, filters, exposure, lighting ratios or laboratory processes absent from authoritative evidence.",
      "Keep Bruce Bellamy art direction and Darryle Johnson/Shirlene Williams wardrobe separate from location choice and cinematography.",
      "Keep Bruce Cannon's editing distinct from screenplay development, Columbia notes and later release controversy.",
      "Keep Veda Campbell production sound, Patrick Drummond supervising sound editing and Stanley Clarke's score as separate craft systems.",
      "Preserve AFI's $5.7-$6 million reported budget range rather than presenting one figure as an audited final cost.",
      "Use 108 minutes as canonical gameplay runtime because AFI and Cannes converge there.",
      "Treat Cannes selection, Academy nominations and the 2002 National Film Registry selection as downstream reception/legacy evidence.",
      "Treat New Black cinema and 1990s Black filmmaking as plural industrial/aesthetic histories rather than a single gang-film or realist production template.",
      "Avoid inferring weapon procedures, stunt practice, consultant contracts, exact security plans, actor-research methods, sound hardware, edit system or distribution economics absent from the reviewed sources.",
    ],
    phases: [
      { id: "script_and_greenlight", label: "Move a student screenplay into Columbia without surrendering directing authorship", player_task: "Track Singleton's USC/script background, Stephanie Allain/Frank Price route and documented refusal of the walk-away offer without turning it into a universal studio-career recipe." },
      { id: "package_and_budget", label: "Package a first feature inside Columbia's studio system", player_task: "Keep Columbia, Singleton and Steve Nicolaides roles distinct and preserve the $5.7-$6m reported range without inventing financing terms or a final audited ledger." },
      { id: "community_and_location_plan", label: "Build production relationships in South Central Los Angeles", player_task: "Use the documented local consultants, neighborhood background casting and Black-led crew context while requiring present-day consent, compensation, safeguarding and properly scoped community liaison." },
      { id: "casting_and_performance", label: "Cast emerging and established performers around lived and scripted character detail", player_task: "Preserve Ice Cube's documented use of personal experience without assuming undocumented improvisation, trauma-mining or research methods for the ensemble." },
      { id: "camera_lighting_art", label: "Coordinate Charles Mills, lighting and Bruce Bellamy's visual environment", player_task: "Retain AFI's Arriflex/Clairmont supply credit and named departments while leaving unsupported body, lens, stock, filter, exposure and lab specifications unset." },
      { id: "wardrobe_and_local_detail", label: "Shape wardrobe, language and neighborhood detail through departments and consultation", player_task: "Keep wardrobe departments and consultants distinct; consultation can inform detail but cannot certify the whole film as factual or substitute for contemporary ethical review." },
      { id: "principal_photography", label: "Shoot the feature in South Central from the documented October 1990 start", player_task: "Use the verified start/location record while leaving exact end date, daily schedule, permit map, security deployment and unit-size reconstruction unset." },
      { id: "editing", label: "Shape character, violence and consequence in Bruce Cannon's final edit", player_task: "Keep editorial authorship separate from screenplay/studio notes and do not use later controversy or awards as evidence for undocumented cutting methods." },
      { id: "sound_and_music", label: "Finish production sound, sound editing and Stanley Clarke's score as separate systems", player_task: "Credit Veda Campbell, Patrick Drummond and Stanley Clarke separately and avoid inventing microphones, recorders, ADR/Foley workflow or mix-stage hardware." },
      { id: "release_and_legacy", label: "Separate Cannes, theatrical release and later canonization from original production", player_task: "Use 108 minutes canonically and keep Cannes, Academy nominations, National Film Registry recognition and release controversy downstream from making the film." },
    ],
  },
] as const;

export function mergeChapterSeventeenBoyzNTheHoodExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenBoyzNTheHoodExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Boyz N the Hood"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_boyz_n_the_hood_verified",
      source: { list_id: "manual_chapter_seventeen_boyz_n_the_hood_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
