import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenThreeColoursRedExpansionDefinitions = [
  {
    id: "scenario_three_colours_red_1994",
    title: "Three Colours: Red",
    originalTitle: "Trois couleurs: Rouge",
    year: 1994,
    titleType: "Movie",
    runtimeMins: 99,
    directors: ["Krzysztof Kieślowski"],
    genres: ["Drama", "Romance"],
    premise: "Build Three Colours: Red as a 1994 Swiss-French-Polish transnational co-production whose production history depends on finance, screenplay collaboration, Geneva performance/staging, Piotr Sobociński's cinematography, Claude Lenoir's production design, Corinne Jorry's costumes, Jacques Witta's editing, Jean-Claude Laureux and William Flageollet's sound work, and Zbigniew Preisner's score rather than on a generic claim that the film is simply 'red'. Festival de Cannes records Switzerland/France/Poland, Kieślowski direction, Kieślowski and Krzysztof Piesiewicz screenplay, Sobociński cinematography, Preisner music, Witta editing, Lenoir production design and 95 minutes. BFI records France/Switzerland/Poland, Marin Karmitz producing and 99 minutes, while also listing Agnieszka Holland, Edward Zebrowski and Piotr Sobociński among the writing contributors. Criterion clarifies the credit structure by listing Kieślowski and Piesiewicz as screenplay writers and Holland, Zebrowski and Sobociński as screenplay consultants; preserve that distinction rather than flattening all five into identical authorship. BFI Southbank programme notes document the production companies MK2 Productions, France 3 Cinéma, CAB Productions and Zespół Filmowy 'Tor', with Canal+ participation, Eurimages support, Télévision Suisse Romande co-production, Swiss Federal Office of Culture support, Yvon Crenn as executive producer, Marin Karmitz presenting, Gérard Ruey as production manager and Emmanuel Finkiel as first assistant director. Teach this as a layered European co-production/public-support structure rather than treating country labels as sufficient finance evidence. A 2023 Guardian oral-history feature provides participant testimony from Piesiewicz and Irène Jacob: the shoot was in Geneva; Jacob says the first three weeks covered scenes in the judge's house, she and Jean-Louis Trintignant rehearsed their relative standing/sitting positions, Kieślowski often watched beside the camera, and Kieślowski with Sobociński sought ways to convey feeling through camera movement. Jacob specifically recalls the opening crane shot rising into the building and describes the chiaroscuro lighting as unusually present. Preserve those production observations, but do not reverse-engineer an undocumented camera body, lens, stock, crane model, lighting package, exposure or lab recipe. Criterion credits David Campbell as Technocrane operator and Riccardo Brunner as Steadicam operator, but those job credits do not prove that every moving shot used either system. Production design, costume and colour remain related but distinct: Lenoir and Jorry are credited separately, and the visible red motif may be analysed from the finished film, but no universal red filter, stock, LUT, printer-light or costume-to-camera formula is inferred. Piesiewicz's Guardian account explains the trilogy's liberty/equality/fraternity concept and the judge's eavesdropping premise; the fictional surveillance device is narrative material, not instruction for real-world interception. Editing and sound remain separate finishing systems: Criterion credits Witta, Laureux and Flageollet, and Piesiewicz says it was in the editing room that Kieślowski's construction became especially apparent. Kieślowski's 1994 Sight and Sound interview is historical context for the trilogy and his retirement, not evidence for undocumented production technique. Runtime/date catalogues vary: Cannes gives 95 minutes/1994, BFI and Criterion give 99 minutes/1994, and Cinémathèque française catalogues the film as 1993/96 minutes while documenting the same transnational production network. Use 99 minutes as canonical gameplay runtime because BFI and Criterion converge there, while preserving 95/96/99 and 1993/1994 as catalogue/version variance. Later Criterion HD/4K restoration and modern audio tracks are downstream preservation/release history and must not be projected backward onto the original production. Do not invent camera bodies, lenses, stocks, filters, exposure, lighting ratios, lab timing, crane geometry, sound hardware, ADR/Foley workflow, music-recording setup, exact budget allocations, shooting-day totals, permits or surveillance methods absent from the reviewed sources.",
    sourceId: "bfi_three_colours_red_1994",
    sourceUrl: "https://www.bfi.org.uk/film/ab9fc02d-7f6b-586c-90c6-8b2458fabef1/trois-couleurs-rouge",
    scenarioType: "european_transnational_geneva_camera_movement_chiaroscuro_co_production",
    requiredChoicesSeed: {
      screenplay: ["kieslowski_piesiewicz_primary_screenplay", "consultants_holland_zebrowski_sobocinski_distinct", "fraternity_and_surveillance_as_narrative_not_instruction"],
      camera: ["sobocinski_camera_movement_and_chiaroscuro", "opening_crane_testimony_source_bound", "no_invented_camera_lens_stock_filter_exposure_or_lab"],
      editing: ["jacques_witta_editorial_authorship", "trilogy_overlap_context_not_schedule_invention", "runtime_version_variance_preserved"],
      sound: ["laureux_sound_and_flageollet_mixer_roles", "preisner_score_separate", "no_invented_sound_hardware_adr_foley_or_mix_recipe"],
      themes: ["film_history", "1990s", "three_colours_red", "three_colors_red", "switzerland", "france", "poland", "geneva", "transnational_co_production", "mk2", "france_3_cinema", "cab_productions", "film_studio_tor", "canal_plus", "eurimages", "television_suisse_romande", "swiss_federal_office_culture", "kieslowski", "piesiewicz", "piotr_sobocinski", "claude_lenoir", "corinne_jorry", "jacques_witta", "jean_claude_laureux", "william_flageollet", "zbigniew_preisner", "camera_movement", "chiaroscuro", "runtime_variance", "restoration_boundary"],
    },
    learningGoals: [
      "Model Three Colours: Red as a Swiss-French-Polish co-production system rather than a placeless auteur object.",
      "Keep MK2, France 3 Cinéma, CAB Productions and Film Studio Tor distinct from Canal+ participation, Eurimages support, TSR co-production and Swiss federal cultural support.",
      "Keep Marin Karmitz, Yvon Crenn, Gérard Ruey and Emmanuel Finkiel in their documented producing/management/assistant-directing roles without inventing contract or budget allocations.",
      "Distinguish Kieślowski/Piesiewicz screenplay authorship from Holland/Zebrowski/Sobociński screenplay-consultant contributions.",
      "Use the Geneva shoot and the first three weeks in the judge's house only as participant-reported scheduling/location evidence, not as a complete production calendar.",
      "Treat Jacob and Trintignant's rehearsed relative positions as a performance/blocking system linked to camera and power relations.",
      "Use the source-reported opening crane movement and Sobociński/Kieślowski camera-emotion collaboration without inventing camera body, lens, stock or crane engineering.",
      "Treat chiaroscuro as participant-described lighting character while leaving undocumented fixtures, ratios, exposure and filtration unset.",
      "Keep Claude Lenoir's production design and Corinne Jorry's costumes distinct from cinematography even when all contribute to the film's red motif.",
      "Do not convert the finished film's red motif into a universal red-filter, stock, LUT or printer-light recipe.",
      "Keep Technocrane and Steadicam operator credits as department evidence rather than assigning those tools to every moving shot.",
      "Keep Jacques Witta's editing distinct from screenplay consultation and from overlapping trilogy production pressure.",
      "Keep Jean-Claude Laureux's sound role, William Flageollet's sound-mixer role and Zbigniew Preisner's music as separate production systems.",
      "Treat the judge's fictional eavesdropping as narrative/ethical material, never as practical surveillance instruction.",
      "Preserve 95/96/99-minute and 1993/1994 catalogue variance while using 99 minutes as canonical gameplay runtime.",
      "Keep later HD/4K restoration and modern audio-track metadata downstream from original production technique.",
      "Do not infer budgets, full shooting schedules, permits, camera/lab recipes, sound hardware or surveillance methods absent from reviewed sources.",
    ],
    phases: [
      { id: "co_production_package", label: "Assemble a layered European co-production", player_task: "Map MK2/France 3/CAB/Tor production against Canal+, Eurimages, TSR and Swiss cultural support without collapsing participation, co-production and public support into one finance role." },
      { id: "screenplay_and_consultation", label: "Separate primary screenplay from consultant collaboration", player_task: "Credit Kieślowski and Piesiewicz as primary screenplay writers while preserving Holland, Zebrowski and Sobociński as consultants/collaborators rather than flattening all writing credits." },
      { id: "geneva_location_plan", label: "Build the Geneva production around documented spaces", player_task: "Use Geneva and the participant-reported first three weeks in the judge's house without inventing a full location ledger, permits, unit moves or day-by-day schedule." },
      { id: "performance_and_blocking", label: "Rehearse unequal positions as dramatic geometry", player_task: "Use Jacob's account of rehearsing standing/sitting relationships with Trintignant to coordinate performance, set and camera while avoiding unsupported shot-by-shot reconstruction." },
      { id: "design_costume_colour", label: "Coordinate design and costume without a one-filter myth", player_task: "Keep Lenoir and Jorry's departments distinct and use the finished red motif analytically; do not invent dye, filter, stock, LUT or printer-light formulas." },
      { id: "camera_movement", label: "Use movement to make connection and intrusion felt", player_task: "Use the source-reported opening crane and Sobociński/Kieślowski camera-emotion collaboration while leaving undocumented camera body, lens, stock, movement geometry and exposure unset." },
      { id: "lighting_and_chiaroscuro", label: "Shape emotional presence through chiaroscuro", player_task: "Treat Jacob's chiaroscuro testimony as evidence for lighting intent, not as a license to invent fixtures, ratios, filtration or lab timing." },
      { id: "edit_structure", label: "Construct convergence in Jacques Witta's edit", player_task: "Keep Witta's editorial authorship distinct from screenplay and camera collaboration; use trilogy overlap only as production-pressure context, not a fabricated post schedule." },
      { id: "sound_and_music", label: "Finish with separate sound and score systems", player_task: "Keep Laureux, Flageollet and Preisner distinct and avoid inventing recorders, microphones, ADR/Foley sessions, consoles, music-stage details or mix layouts." },
      { id: "release_versions_restoration", label: "Preserve catalogue and restoration boundaries", player_task: "Use 99 minutes canonically while retaining 95/96-minute and 1993/1994 records; keep later Criterion restoration/audio metadata downstream from the original production." },
    ],
  },
] as const;

export function mergeChapterSeventeenThreeColoursRedExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenThreeColoursRedExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Three Colors: Red", "Trois couleurs rouge"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_three_colours_red_verified",
      source: { list_id: "manual_chapter_seventeen_three_colours_red_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
