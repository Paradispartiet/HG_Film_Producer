import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenEvesBayouExpansionDefinitions = [
  {
    id: "scenario_eves_bayou_1997",
    title: "Eve's Bayou",
    originalTitle: "Eve's Bayou",
    year: 1997,
    titleType: "Movie",
    runtimeMins: 109,
    directors: ["Kasi Lemmons"],
    genres: ["Drama"],
    premise: "Build Eve's Bayou as a 1997 American independent feature in which Black woman-led authorship, a Louisiana regional setting, a 1962 period world and a child's unstable memory structure are production systems rather than generic atmosphere. Kasi Lemmons wrote and directed the film as her feature-directing debut. Credit records consistently identify Amy Vincent as cinematographer, Terilyn A. Shropshire as editor and Terence Blanchard as composer, while producer credits include Caldecot Chubb and Samuel L. Jackson. The production therefore belongs in 1990s Black independent cinema without reducing that history to urban, male-centered narratives. Preserve Eve Batiste's child-centered point of view, contradictory recollection, family testimony, dreams/visions and adult secrecy as distinct narrative layers: gameplay must never treat a remembered or supernatural image as automatically objective evidence. Treat the Louisiana setting as material production context and the 1962 setting as a coordinated location, production-design, costume, prop and performance problem without inventing exact parish-by-parish location schedules or unsupported department ledgers. Amy Vincent's cinematography credit is firm; the case should study how framing, movement, exposure, color and spatial point of view can distinguish memory, observation and vision, but it must not invent lens packages, film stocks, filters, lighting ratios, laboratory timing or camera-body details absent from reviewed sources. Terilyn A. Shropshire's editorial role should remain visible because the film's chronology depends on separating present action, recollection, competing accounts and visions without flattening them into one omniscient timeline. Terence Blanchard's score is a separate expressive system from dialogue, environmental sound and silence; do not invent recording studios, microphones, track counts or mix-console specifications. Use 109 minutes for the 1997 theatrical scenario and keep later restoration, home-video and director's-cut presentation history downstream rather than projecting later mastering choices back onto the original production. The Library of Congress National Film Registry's later preservation recognition belongs to reception/legacy, not original production evidence. Do not invent an exact production budget, financing split, shoot length, daily page count, location count, child-performance method, visual-effects technique or camera/sound package where the reviewed sources do not support it.",
    sourceId: "loc_national_film_registry_eves_bayou_1997",
    sourceUrl: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
    scenarioType: "black_woman_led_us_independent_louisiana_period_memory_subjectivity_1997",
    requiredChoicesSeed: {
      screenplay: ["kasi_lemmons_writer_director_authority", "eve_child_point_of_view", "contradictory_memory_not_objective_record"],
      camera: ["amy_vincent_cinematography_credit", "louisiana_period_world_as_visual_system", "no_invented_lens_stock_filter_or_lighting_ratio"],
      editing: ["terilyn_shropshire_editorial_credit", "memory_vision_and_present_time_boundaries", "109_min_1997_theatrical_version"],
      sound: ["terence_blanchard_score_credit", "dialogue_music_environment_and_silence_distinct", "no_invented_recording_or_mix_specs"],
      themes: ["film_history", "1990s", "eves_bayou", "kasi_lemmons", "black_independent_cinema", "black_women_filmmakers", "louisiana", "1962", "southern_gothic", "child_point_of_view", "memory", "unreliable_recollection", "family_testimony", "visions", "amy_vincent", "terilyn_shropshire", "terence_blanchard", "regional_production", "version_boundary"],
    },
    learningGoals: [
      "Place Eve's Bayou inside 1990s Black independent cinema while preserving its Black woman-led authorship, Louisiana regional setting and family-centered narrative specificity.",
      "Keep Kasi Lemmons' screenplay and direction together as a central authorial system without collapsing producer, cinematography, editing or music labor into auteur shorthand.",
      "Treat the film's 1962 Louisiana world as a coordinated location, design, costume, prop and performance problem rather than as decorative Southern atmosphere.",
      "Preserve Eve Batiste's child-centered point of view as a production and storytelling constraint on what the audience can know.",
      "Distinguish observed events, remembered events, competing family testimony, dreams and visions instead of treating every image as objective evidence.",
      "Use Amy Vincent's cinematography credit as the basis for studying visual point of view without inventing lenses, film stocks, filters, lighting ratios or laboratory specifications.",
      "Keep camera framing, movement, exposure and color as separate choices that can support memory and subjectivity even when exact equipment is not documented.",
      "Treat Louisiana as material regional production context without inventing exact location schedules, parish counts or unsupported travel logistics.",
      "Keep period production design and costume logic distinct from cinematography; a 1962 look is not reducible to one camera or color recipe.",
      "Keep child and adult performance systems visible while avoiding invented claims about rehearsal, safeguarding or directing methods not documented in reviewed sources.",
      "Use Terilyn A. Shropshire's editing credit to model chronology, recollection, competing accounts and visions as an editorial architecture.",
      "Do not let editorial clarity erase ambiguity: the film can distinguish temporal layers while leaving memory and testimony contested.",
      "Keep Terence Blanchard's score distinct from dialogue, environmental sound and silence rather than treating all sound as one mood track.",
      "Avoid invented recording studio, microphone, track-count, ADR, Foley or mix-console details absent from the reviewed evidence.",
      "Use 109 minutes for the 1997 theatrical production case and keep later director's-cut or restoration presentations as downstream versions.",
      "Treat later National Film Registry preservation recognition as reception and legacy evidence, not as proof of original production technique.",
      "Do not invent an exact budget, financing split, shoot length, daily page count or effects method where the reviewed sources do not establish one.",
      "Use the case to broaden Chapter 17 beyond blockbuster, digital-transition and urban-indie narratives by retaining regional Black women's authorship as an industrial and aesthetic fact.",
    ],
    phases: [
      { id: "development_and_authorship", label: "Build the story around Eve's limited knowledge", player_task: "Keep Lemmons' writer-director authority and Eve's child-centered perspective visible while separating what Eve sees, remembers, hears and imagines." },
      { id: "independent_packaging", label: "Package a Black independent family drama", player_task: "Keep writer-director, producers and distributor/financing functions distinct; do not invent an exact budget or financing split without direct evidence." },
      { id: "louisiana_regional_world", label: "Root the production in Louisiana", player_task: "Treat regional place as production context while leaving exact location counts, parish schedules and travel logistics unset unless sourced." },
      { id: "period_world_1962", label: "Coordinate the 1962 period world", player_task: "Align locations, design, costume, props and performance without reducing the period look to a single color or camera recipe." },
      { id: "child_centered_performance", label: "Direct a family story through Eve's perspective", player_task: "Preserve the child/adult information imbalance and avoid inventing rehearsal or child-performance methods absent from production evidence." },
      { id: "subjective_cinematography", label: "Give memory, observation and vision distinct visual logic", player_task: "Use Amy Vincent's credited cinematography as the craft anchor but leave unsupported lens, stock, filter, camera-body and lighting-ratio details unset." },
      { id: "memory_and_vision_structure", label: "Keep contradictory memories and visions legible", player_task: "Do not label a remembered, narrated or supernatural image as objective fact merely because the audience sees it." },
      { id: "editing_and_temporal_clarity", label: "Cut between present action and unstable recollection", player_task: "Use Shropshire's editorial role to separate temporal and testimonial layers while preserving unresolved ambiguity." },
      { id: "score_and_sound", label: "Build sound without collapsing its layers", player_task: "Keep Blanchard's score, dialogue, environment and silence distinct and do not invent recording/mixing hardware or track architecture." },
      { id: "theatrical_version_and_legacy", label: "Lock the 1997 theatrical case before later versions", player_task: "Use the 109-minute 1997 theatrical version for gameplay; keep later director's-cut/restoration and National Film Registry history downstream." },
    ],
  },
] as const;

export function mergeChapterSeventeenEvesBayouExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenEvesBayouExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Eves Bayou"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_eves_bayou_verified",
      source: { list_id: "manual_chapter_seventeen_eves_bayou_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
