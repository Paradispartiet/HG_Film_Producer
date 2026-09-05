import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenAnnetteExpansionDefinitions = [
  {
    id: "scenario_annette_2021",
    title: "Annette",
    originalTitle: "Annette",
    aliases: [],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 140,
    directors: ["Leos Carax"],
    genres: ["Drama", "Musical", "Romance"],
    sourceId: "annette_cannes_2021",
    sourceUrl: "https://www.festival-cannes.com/en/f/annette/",
    scenarioType: "award_priority_cannes_2021_best_director_production_year_2020_live_singing_sony_venice_xocn_practical_puppet_transnational_production",
    premise: "Build Annette as the next unresolved Cannes-major-prizes source-first Production Case. Festival de Cannes locks the film to the 2021 Competition and Best Director award while separately recording production year 2020, 140 minutes, France/Germany/Belgium/Japan/Mexico, Leos Carax direction and screenplay with Ron and Russell Mael, Caroline Champetier cinematography, Florian Sanson production design, Nelly Quettier editing, Sparks music, a five-person sound credit and CG Cinéma with multiple minority-production partners. Sony's direct production record locks Sony VENICE, ZEISS Supreme Prime and Angenieux Optimo lenses, X-OCN ST and a Sony a7S II B camera. Carax's official press-book interview locks an almost wholly musical production approach in which actors sang live on set, with pre-records retained as backup rather than treated as the default performance track; it also locks the practical Annette puppet workflow, with Estelle Charlier creating faces at different ages and Romuald Collinet handling body/technical work, additional puppeteers at times, actors sometimes puppeteering, and post-production used to erase puppeteers when they could not hide completely. The same press book and Le Monde interview lock a 16-week shoot with only one week in Los Angeles, while Belgium and Germany doubled much of Los Angeles because a full LA shoot was unaffordable. Preserve chronology explicitly: Chapter 19 filmYear 2021, Cannes productionYear 2020, and no invented exact principal-photography dates. Exact budget and coproduction shares, the full fifteen-week non-LA schedule, focal-length-by-shot mapping, exposure/ND/shutter choices, complete lighting package, live-vocal microphone/recorder/playback routing, full music-post architecture, grading/color pipeline, VFX census beyond documented puppeteer erasure, and mastering/delivery lineage remain unresolved.",
    requiredChoicesSeed: {
      screenplay: ["carax_ron_mael_russell_mael", "sparks_original_story_music", "almost_entirely_sung_form", "eight_year_development_context"],
      camera: ["sony_venice", "zeiss_supreme_prime", "angenieux_optimo", "xocn_st", "sony_a7s_ii_bcam"],
      performance: ["live_singing_on_set", "prerecord_backup", "opera_voice_blend_boundary", "physical_performance_constraints"],
      puppet: ["estelle_charlier_faces", "romuald_collinet_body_technical", "on_set_puppeteering", "limited_post_erasure"],
      locations: ["los_angeles_one_week", "belgium_la_doubling", "germany_la_doubling", "sixteen_week_schedule_boundary"],
      themes: ["film_history", "2021", "production_year_2020", "cannes_best_director", "leos_carax", "sparks", "musical", "live_vocals", "practical_puppetry", "digital_cinematography", "chapter19"]
    },
    learningGoals: [
      "Explain why Annette must be materialized only after reuse reconciliation proves no existing Atlas/PV identity.",
      "Keep film/award year 2021 separate from Cannes production year 2020.",
      "Use 140 minutes as the Cannes runtime without inventing alternate runtime metadata.",
      "Identify France, Germany, Belgium, Japan and Mexico as the Cannes-listed production countries.",
      "Identify Leos Carax as director and co-screenwriter with Ron Mael and Russell Mael.",
      "Identify Caroline Champetier, Florian Sanson and Nelly Quettier in their Cannes-credited cinematography, production-design and editing roles.",
      "Identify Sparks as music/original-story authors while separating their long development history from the later film production year.",
      "Use Cannes' Best Director award as the selection obligation, not as proof of technical production detail.",
      "Identify Sony VENICE, ZEISS Supreme Prime, Angenieux Optimo and X-OCN ST from Sony's direct production record.",
      "Identify Sony a7S II as the direct-Sony B-camera claim and avoid silently replacing it with conflicting secondary-source model claims.",
      "Explain Carax's live-singing choice as a production constraint affecting actors, camera, sound and budget rather than merely a musical aesthetic.",
      "Preserve the official press-book distinction between live performance and pre-recorded backup material.",
      "Keep exact live-vocal microphone, recorder, playback, monitoring and synchronization topology unresolved unless directly sourced.",
      "Explain why Carax rejected a digital baby/3D approach in favor of a tangible hand-crafted puppet present on set.",
      "Identify Estelle Charlier as responsible for Annette's faces at different ages and Romuald Collinet for body/technical construction.",
      "Use the sourced on-set puppeteering model: Charlier/Collinet always present when puppet Annette was used, sometimes with one or two additional puppeteers, with actors occasionally puppeteering too.",
      "Limit the post-production puppet claim to documented removal of visible puppeteers rather than declaring the film VFX-free.",
      "Lock a 16-week shoot while preserving the absence of exact start/end dates in the core source set.",
      "Lock only one week of shooting in Los Angeles and the documented use of Belgium and Germany to recreate much of LA for cost reasons.",
      "Do not infer the detailed geography or day-by-day schedule of the remaining fifteen weeks.",
      "Separate the five-country production-country list from exact financing ownership, recoupment or partner percentages.",
      "Identify the Cannes-listed five-person sound credit without inventing role-by-role routing or post assignments beyond sourced evidence.",
      "Recognize the film as an almost entirely sung rock opera and distinguish music authorship, on-set vocal capture and later music mixing as separate production systems.",
      "Do not infer focal lengths, camera ISO, shutter, ND or exposure strategy from the named camera/lens package.",
      "Do not infer a complete lighting package from visual appearance; treat only directly sourced practical-light examples as verified.",
      "Keep grading software, color-management pipeline, editorial storage/conform topology and final mastering lineage unresolved.",
      "Close the case only when one unique scenario, a complete 17-area Film Study, one PV record and the Cannes corrective audit all agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock Cannes Best Director obligation", player_task: "Use the award to establish selection priority without treating it as production evidence." },
      { id: "reconciliation", label: "Prove Annette identity is absent", player_task: "Search Atlas, Film Study, PV, branch and PR history before materializing." },
      { id: "chronology", label: "Separate film and production years", player_task: "Keep 2021 film/award year distinct from Cannes production year 2020." },
      { id: "development", label: "Map Sparks-to-Carax development", player_task: "Treat the long musical development as pre-production history, not principal photography." },
      { id: "screenplay_music", label: "Build a sung narrative", player_task: "Coordinate Carax and the Mael brothers around an almost entirely sung dramatic form." },
      { id: "live_vocals", label: "Capture singing on set", player_task: "Use live performance with backup pre-records while preserving unsourced sound-routing details." },
      { id: "performance", label: "Direct constrained musical performance", player_task: "Account for singing while acting and moving rather than assuming conventional lip-sync." },
      { id: "camera_system", label: "Lock the Sony VENICE package", player_task: "Use VENICE, Supreme Prime, Optimo and X-OCN ST without inventing exposure settings." },
      { id: "b_camera_boundary", label: "Preserve direct-source B-camera evidence", player_task: "Use Sony a7S II from Sony and do not silently harmonize secondary conflicts." },
      { id: "la_strategy", label: "Rebuild Los Angeles across Europe", player_task: "Use one LA week plus Belgium/Germany doubling, without inventing the rest of the schedule." },
      { id: "production_design", label: "Coordinate fantasy LA and stage worlds", player_task: "Use Florian Sanson's credit while bounding construction details to sourced evidence." },
      { id: "puppet_design", label: "Create Annette physically", player_task: "Coordinate Charlier faces and Collinet body/technical work rather than defaulting to CG." },
      { id: "puppet_performance", label: "Operate the puppet on set", player_task: "Integrate hidden puppeteers and occasional actor puppeteering into blocking and camera." },
      { id: "effects_boundary", label: "Bound post intervention", player_task: "Use documented puppeteer erasure only; leave the wider effects census unresolved." },
      { id: "editing", label: "Shape the rock-opera feature", player_task: "Use Nelly Quettier's edit credit without inventing edit-system infrastructure." },
      { id: "music_post", label: "Separate score, vocals and mix", player_task: "Use Sparks and documented music personnel while keeping the full signal chain open." },
      { id: "sound", label: "Map Cannes sound credits", player_task: "Preserve the five-person sound credit and unresolved role/equipment topology." },
      { id: "coproduction", label: "Map the multinational production", player_task: "Separate countries/companies from unsourced ownership or recoupment shares." },
      { id: "budget_boundary", label: "Use cost pressure only where sourced", player_task: "Use LA-to-Europe doubling as documented budget pressure, without inventing a total budget." },
      { id: "post_boundary", label: "Freeze unsupported post detail", player_task: "Keep grade, complete VFX, color-management and mastering lineage open." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Map source-verified facts and research-pending boundaries across the coverage contract." },
      { id: "production_verification", label: "Close the Cannes corrective case", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenAnnetteExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenAnnetteExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_annette_verified",
      source: { list_id: "manual_chapter_nineteen_annette_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
