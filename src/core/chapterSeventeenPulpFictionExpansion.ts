import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenPulpFictionExpansionDefinitions = [
  {
    id: "scenario_pulp_fiction_1994",
    title: "Pulp Fiction",
    originalTitle: "Pulp Fiction",
    year: 1994,
    titleType: "Movie",
    runtimeMins: 154,
    directors: ["Quentin Tarantino"],
    genres: ["Crime", "Drama"],
    premise: "Build Pulp Fiction as a 1994 U.S. specialty/independent production whose history depends on development and finance, screenplay/story-credit structure, ensemble casting, Andrzej Sekuła cinematography, Sally Menke editing, David Wasco/Sandy Reynolds-Wasco design, Betsy Heimann costume, sound/post departments and Miramax distribution/marketing rather than on a later myth that dialogue or nonlinear chronology alone made the film. Festival de Cannes records Quentin Tarantino direction, Quentin Tarantino and Roger Avary screenplay/dialogue credits, Sekuła cinematography, Menke editing, Wasco production design and 149 minutes. The Academy's 1995 award record provides the more precise final writing distinction: screenplay by Quentin Tarantino; stories by Quentin Tarantino and Roger Avary. BFI Southbank programme notes likewise list Tarantino screenplay and 'based on stories by' Avary/Tarantino, with Miramax presenting, Band Apart and Jersey Films as productions, Lawrence Bender producing, Danny DeVito/Michael Shamberg/Stacey Sher as executive producers, Bob Weinstein/Harvey Weinstein/Richard N. Gladstein as co-executive producers, and Paul Hellerman as production manager. Preserve these roles rather than flattening Miramax, A Band Apart and Jersey Films into one generic company function. Contemporary Le Monde reporting from Cannes quotes Bender describing a budget well below $10 million, actors reducing fees, an initial completion-bond refusal and Film Finance ultimately providing the bond; Bender says the film finished on planned schedule and budget. A 2024 Variety oral history gives later retrospective detail: Bender says the target was $6–8 million, the budget was $8.5 million including contingency, and $500,000 was returned for an $8 million final cost. Keep the contemporaneous and retrospective figures separately attributed instead of treating them as one audited ledger. DFI records A Band Apart, Jersey Films and Miramax Films as production companies, 154 minutes, anamorphic, Deluxe and Dolby SR. Cannes gives 149 minutes; AFI Silver also gives 154, while AFI's current watch-page metadata gives 165. Use 154 minutes as canonical gameplay runtime because multiple archival/exhibition records converge there, while retaining 149/154/165 as catalogue/version variance. BFI programme notes document Sekuła, camera operator Michael Levine, Steadicam operators Robert Gorelick/John Nuler and gaffer Vance Trussell, but do not establish a complete camera-body/lens/stock/exposure package; do not import 5245 or other technical details from Reservoir Dogs simply because Sekuła and Tarantino re-teamed. Design is likewise departmental: David Wasco production design, Sandy Reynolds-Wasco set decoration, Charles Collum art direction, Betsy Heimann costume and Kurtzman Nicotero Berger makeup effects remain distinct. In a later first-person design interview, Sandy Reynolds-Wasco recalls deliberately using contrasting set colors to mark shifts between story environments and describes Jimmy's wallpaper as a specific design choice; treat that testimony as design intent, not a universal palette formula. BFI credits Sally Menke editing and Jere P. Huggins additional editing. Nonlinear ordering should be studied as editorial/narrative construction, but no exact edit-system, cut count or post schedule is inferred. Sound remains separate: BFI credits production sound mixer Ken King, re-recording mixers Rick Ash and Dean A. Zupancic, ADR mixer Jeff Courtie and Foley performers Joan/Catherine Rowe with mixer Ezra Dweck; DFI records Dolby SR. Do not infer microphones, recorders, workstation, ADR/Foley dates or exact theatrical channel layout. Music supervision by Karyn Rachtman and consultants Chuck Kelley/Laura Lovelace is distinct from production sound; the film's source-music identity does not justify inventing licensing fees or session details. BFI also credits Larry Fioritto for special effects and Ken Lesco as stunt coordinator. Violence, firearms, overdose treatment and stunt scenes in the fiction are not real-world medical, weapons or stunt instructions. Present-day production requires qualified stunt/special-effects/armory/medical personnel, controlled props, performer-specific rehearsal, emergency planning and applicable labor/safety rules. The Palme d'Or, Oscar and later marketing/legacy are downstream reception evidence, not proof of production technique. Do not invent camera/lens/stock, lighting ratios, film-processing details beyond DFI's Deluxe record, exact locations/schedule, actor contracts, bond terms, weapon loads, effects recipes, medical procedures, sound hardware, music-license amounts or edit-system settings absent from reviewed sources.",
    sourceId: "dfi_pulp_fiction_1994",
    sourceUrl: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/pulp-fiction",
    scenarioType: "us_specialty_independent_story_structure_ensemble_design_editing_distribution",
    requiredChoicesSeed: {
      screenplay: ["tarantino_screenplay_avary_tarantino_stories", "nonlinear_structure_as_written_and_edited_system", "fictional_crime_medical_events_not_instruction"],
      camera: ["sekula_cinematography_department", "anamorphic_source_verified_only", "no_imported_reservoir_dogs_camera_lens_stock_exposure_recipe"],
      editing: ["sally_menke_editorial_authorship", "nonlinear_chronology_without_invented_cut_count", "runtime_variance_149_154_165_preserved"],
      sound: ["ken_king_production_sound_separate_from_rerecording_adr_foley", "dolby_sr_source_verified", "no_invented_sound_hardware_or_mix_recipe"],
      themes: ["film_history", "1990s", "pulp_fiction", "independent_cinema", "specialty_distribution", "miramax", "a_band_apart", "jersey_films", "lawrence_bender", "quentin_tarantino", "roger_avary", "andrzej_sekula", "sally_menke", "david_wasco", "sandy_reynolds_wasco", "betsy_heimann", "ensemble_casting", "nonlinear_structure", "production_design", "anamorphic", "deluxe", "dolby_sr", "runtime_variance", "safety_boundary"],
    },
    learningGoals: [
      "Model Pulp Fiction through A Band Apart/Jersey/Miramax/Bender production and distribution roles rather than using 'independent' as a style label.",
      "Keep contemporary Bender testimony about a sub-$10m budget/completion bond distinct from later $8.5m-contingency/$8m-final retrospective reporting.",
      "Separate Tarantino screenplay credit from Tarantino-and-Avary story credit using the Academy and BFI credit structure.",
      "Treat ensemble casting and reduced-fee reporting as production/economic evidence without inventing individual contracts, points or salary amounts.",
      "Use Andrzej Sekuła as verified DP while refusing to import Reservoir Dogs' camera/stock package into Pulp Fiction without film-specific proof.",
      "Use DFI's anamorphic/Deluxe/Dolby SR metadata only at the level actually documented, without inventing camera body, lens series, stock, lab timing or mix layout.",
      "Keep camera operators, Steadicam operators and gaffer as distinct credited craft roles rather than assigning a tool to every shot.",
      "Keep David Wasco production design, Sandy Reynolds-Wasco set decoration, Charles Collum art direction and Betsy Heimann costume distinct.",
      "Use Sandy Reynolds-Wasco's contrasting-set-color testimony as design intent, not a universal palette or lighting formula.",
      "Keep Sally Menke's editorial authorship central to nonlinear construction without inventing edit software, cut counts or post schedules.",
      "Preserve 149/154/165-minute catalogue variance while using 154 minutes as canonical gameplay runtime.",
      "Keep production sound, re-recording, ADR, Foley and music supervision as separate departments.",
      "Do not infer microphones, recorders, workstations, Foley/ADR schedules, soundtrack licensing fees or exact theatrical channel layouts absent from sources.",
      "Keep special effects and stunt coordination separate from fictional violence; current work requires qualified safety personnel and controlled protocols.",
      "Treat overdose, firearms and crime scenes as fiction rather than medical, weapons or criminal instruction.",
      "Keep Cannes/Academy success and Miramax marketing downstream from evidence about how scenes were produced.",
      "Do not infer complete shooting schedules, locations, union arrangements, bond terms, camera/lab recipes or effects procedures beyond source evidence.",
    ],
    phases: [
      { id: "development_finance", label: "Package a low-budget specialty feature without flattening the deal", player_task: "Separate A Band Apart/Jersey/Miramax and Bender's producer role; preserve contemporaneous sub-$10m/bond testimony and later $8.5m-to-$8m reporting as distinct evidence." },
      { id: "screenplay_story_structure", label: "Build interlocking stories with precise authorship", player_task: "Credit Tarantino screenplay and Tarantino/Avary stories separately; design chronology without treating final nonlinear order as proof of one drafting method." },
      { id: "ensemble_casting", label: "Assemble the ensemble within the production model", player_task: "Use reduced-fee reporting only as aggregate economic evidence and do not invent actor-by-actor salaries, backend points or contracts." },
      { id: "camera_format", label: "Photograph the feature with a documented but bounded camera record", player_task: "Use Sekuła and DFI's anamorphic record while leaving camera bodies, lenses, stocks, exposure and any Reservoir Dogs-derived package unset." },
      { id: "design_costume", label: "Differentiate story worlds through design and costume", player_task: "Keep Wasco, Reynolds-Wasco, Collum and Heimann distinct; use contrasting-set-color testimony without inventing palette, paint, lighting or fabric formulas." },
      { id: "performance_and_blocking", label: "Coordinate dialogue-heavy ensemble performance", player_task: "Plan coverage and blocking from the script/performance needs without inventing rehearsal counts, take counts or actor-direction anecdotes not in reviewed sources." },
      { id: "editing_chronology", label: "Construct nonlinear chronology in the edit", player_task: "Keep Sally Menke's editorial authorship visible; preserve story order as a structural choice without inventing software, cut counts or exact post calendar." },
      { id: "sound_music", label: "Finish sound and source-music systems separately", player_task: "Keep Ken King, Ash/Zupancic, ADR/Foley credits and music supervision distinct; retain Dolby SR only as documented and leave hardware/licensing details unset." },
      { id: "effects_stunts_safety", label: "Stage fictional violence under modern safety controls", player_task: "Keep special effects and stunt coordination separate; use qualified armory/effects/stunt/medical personnel and controlled props, rehearsal and emergency planning rather than deriving procedures from the film." },
      { id: "release_versions_legacy", label: "Separate release versions, prizes and marketing from production", player_task: "Use 154 minutes canonically while preserving 149/165 records; keep Cannes Palme d'Or, Oscar recognition and later Miramax legacy downstream from original craft evidence." },
    ],
  },
] as const;

export function mergeChapterSeventeenPulpFictionExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenPulpFictionExpansionDefinitions) {
    const acceptedTitles = [definition.title].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_pulp_fiction_verified",
      source: { list_id: "manual_chapter_seventeen_pulp_fiction_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
