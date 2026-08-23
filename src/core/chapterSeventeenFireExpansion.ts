import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenFireExpansionDefinitions = [
  {
    id: "scenario_fire_1996",
    title: "Fire",
    originalTitle: "Fire",
    year: 1996,
    titleType: "Movie",
    runtimeMins: 104,
    directors: ["Deepa Mehta"],
    genres: ["Drama", "Romance"],
    premise: "Build Fire as Deepa Mehta's 1996 India/Canada production about contemporary middle-class New Delhi, not as a production case defined only by the protests that followed its later Indian release. TIFF's Canadian Film Encyclopedia records Trial by Fire Films, 35mm colour, 104 minutes, Deepa Mehta as writer/director/producer, Bobby Bedi as producer, Giles Nuttgens as cinematographer, Barry Farrell as editor, Konrad Skreta as sound and A.R. Rahman as composer. BFI independently lists Bobby Bedi, Deepa Mehta and Anne Masson as producers. UCLA adds Aradhana Seth as production designer and confirms 35mm/104 minutes. FemFilm records Trial by Fire Films Inc. together with Kaleidescope India (Pvt.) and gives 108 minutes; preserve that production-company/runtime variance rather than overwriting the convergent 104-minute institutional record. Contemporary 1996 reporting quotes Mehta describing the decision, just before production, to return from a planned Hindi version to the original English and identifies Nuttgens and Bedi as deliberate pre-production collaborators. Treat this as a documented late language decision, not as evidence that every scene was improvised or that Hindi disappears from all surviving versions; current Mongrel metadata lists Hindi and English. Mehta's director statement says she wanted to demystify exoticized images of India by focusing on contemporary middle-class life, while a later first-person interview explains that her scripts visualize colour, set design and lighting in detail and associates Fire with a red palette. Keep those statements as authorial/design evidence without reverse-engineering an unsupported shot-by-shot colour recipe. The reviewed sources establish 35mm and Nuttgens's cinematography but do not establish a complete camera body, lens set, stock, exposure, filtration, lab or lighting package, so do not invent one. Keep Aradhana Seth's production design, Barry Farrell's editing, Konrad Skreta's sound and A.R. Rahman's music as separate craft systems. The film's later protests, withdrawals and censorship controversies in India are distribution/reception history: they matter for circulation and public debate but do not prove undocumented facts about the original shoot. Modern productions involving intimate or sensitive performance require explicit performer consent, closed-set/intimacy practices where appropriate, anti-harassment protections and applicable labor rules; the absence of detailed 1996 intimacy-process evidence is not permission to invent it. Use 104 minutes canonically while retaining FemFilm's 108-minute database record as version/catalogue variance.",
    sourceId: "tiff_cfe_fire_1996",
    sourceUrl: "https://cfe.tiff.net/canadianfilmencyclopedia/content/films/fire",
    scenarioType: "india_canada_trial_by_fire_middle_class_delhi_35mm_colour_authorship_distribution_controversy",
    requiredChoicesSeed: {
      screenplay: ["mehta_contemporary_middle_class_delhi_framework", "late_language_decision_preserved", "later_controversy_separate_from_script_production"],
      camera: ["giles_nuttgens_35mm_credit", "colour_design_intent_without_invented_recipe", "no_unsourced_camera_lens_stock_exposure_lab"],
      editing: ["barry_farrell_editorial_authorship", "104_min_canonical_with_108_variance", "production_editing_separate_from_later_release_history"],
      sound: ["konrad_skreta_sound_credit", "ar_rahman_music_separate", "no_invented_recording_adr_foley_mix_hardware"],
      themes: ["film_history", "1990s", "fire_1996", "deepa_mehta", "india_canada", "trial_by_fire_films", "kaleidoscope_india", "bobby_bedi", "anne_masson", "giles_nuttgens", "aradhana_seth", "barry_farrell", "konrad_skreta", "ar_rahman", "35mm", "colour_design", "language_decision", "distribution_controversy_boundary", "intimacy_consent_boundary", "runtime_variance"],
    },
    learningGoals: [
      "Model Fire as a specific India/Canada production and not merely as a censorship or protest event.",
      "Keep Trial by Fire Films, Kaleidoscope India and producer credits source-specific rather than collapsing every company/producer role into one entity.",
      "Distinguish Mehta's writer/director/producer authorship from Bobby Bedi, Anne Masson and other production roles.",
      "Preserve the contemporary account of a late language decision without assuming that every surviving version has identical language balance.",
      "Use Mehta's middle-class New Delhi and anti-exoticizing intent as authorial context, not as proof that every detail is sociological documentary evidence.",
      "Use Giles Nuttgens as source-backed cinematographer and 35mm colour as source-backed format while leaving unsupported camera/lens/stock details unset.",
      "Treat Mehta's red-palette and detailed script-visualization comments as design evidence without inventing shot-by-shot lighting or colorimetry.",
      "Keep Aradhana Seth's production design distinct from cinematography and from Mehta's broader visual authorship.",
      "Keep Barry Farrell's editing distinct from later censorship, withdrawal and release-version history.",
      "Keep Konrad Skreta's sound and A.R. Rahman's music as separate systems and do not invent recording or mix hardware.",
      "Preserve 104 minutes as canonical runtime while retaining the 108-minute FemFilm record as catalogue/version variance.",
      "Separate original production evidence from later festival awards, protests, censorship and distribution controversies.",
      "Do not infer an exact budget, schedule, crew size, location ledger, permit history or lab workflow from later profiles or reviews.",
      "Treat the New Delhi setting as production context without inventing every filming location solely from screen geography.",
      "For present-day sensitive or intimate performance, require explicit consent, appropriate closed-set/intimacy practice and applicable labor protections.",
      "Do not infer historical intimacy-coordination methods when the reviewed sources do not document them.",
      "Keep writing, performance, design, cinematography, editing, sound, music and circulation as collaborating but distinct production systems.",
    ],
    phases: [
      { id: "package_and_producers", label: "Build the India/Canada production package", player_task: "Map Trial by Fire Films, Kaleidoscope India and producer roles from sources without inventing ownership or finance relationships." },
      { id: "script_and_language", label: "Lock story intent and the late language decision", player_task: "Preserve Mehta's contemporary-middle-class aim and the documented switch back toward English without treating language choice as proof of improvisation." },
      { id: "cast_and_sensitive_performance", label: "Plan performance around character and consent", player_task: "Use the documented cast while requiring explicit modern consent and appropriate safeguards for sensitive or intimate material; do not invent a 1996 protocol." },
      { id: "design_and_colour", label: "Translate visualized writing into design", player_task: "Keep Mehta's red-palette/design intention and Aradhana Seth's production design visible without reverse-engineering unsupported colour or lighting formulas." },
      { id: "camera_and_format", label: "Photograph the drama on source-backed 35mm", player_task: "Credit Giles Nuttgens and 35mm colour while leaving camera body, lens, stock, filtration, exposure and lab details unset unless sourced." },
      { id: "delhi_world", label: "Construct contemporary New Delhi as lived space", player_task: "Use the middle-class Delhi framework without inventing a complete location, permit or street-control ledger." },
      { id: "editing", label: "Shape family drama before release controversy", player_task: "Credit Barry Farrell and keep original editorial construction separate from later certification, withdrawal and distribution events." },
      { id: "sound_and_music", label: "Separate dramatic sound from score", player_task: "Credit Konrad Skreta and A.R. Rahman independently; leave unsourced ADR, Foley, recorder, workstation and mix-layout details unset." },
      { id: "finish_and_runtime", label: "Lock the film without false version certainty", player_task: "Use 104 minutes canonically and retain 108 as a catalogue/version record rather than silently choosing one universal duration." },
      { id: "release_and_controversy", label: "Track circulation without rewriting production history", player_task: "Treat festivals, Indian release protests, withdrawals and censorship debate as downstream circulation evidence, not as proof of undocumented on-set technique." },
    ],
  },
] as const;

export function mergeChapterSeventeenFireExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenFireExpansionDefinitions) {
    const acceptedTitles = [definition.title].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_fire_verified",
      source: { list_id: "manual_chapter_seventeen_fire_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
