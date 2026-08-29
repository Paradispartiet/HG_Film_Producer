import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenWolfwalkersExpansionDefinitions = [
  {
    id: "scenario_wolfwalkers_2020",
    title: "Wolfwalkers",
    originalTitle: "Wolfwalkers",
    aliases: ["WolfWalkers"],
    year: 2020,
    titleType: "Movie",
    runtimeMins: 103,
    directors: ["Tomm Moore", "Ross Stewart"],
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
    sourceId: "bfi_wolfwalkers_catalogue",
    sourceUrl: "https://www.bfi.org.uk/film/b5f20c84-ff7c-5dff-bdea-942e6cb89999/wolfwalkers",
    scenarioType: "hand_drawn_2d_kilkenny_forest_graphic_split_wolfvision_hybrid_3d_previs_vr_blender_graphite_paper_transnational_animation_apple_tv_2020",
    premise: "Build Wolfwalkers as the third source-first Chapter 19 Production Case and keep five systems distinct: a predominantly hand-drawn 2D feature-production language, a story-driven graphic split between ordered Kilkenny and the freer forest, the exceptional Wolfvision subsystem that used 3D/VR previs before hand-rendered paper output, a transnational European animation-production context, and a December 2020 Apple TV+ release that belongs to circulation history rather than proof of production financing or authorship. The BFI catalogue records Tomm Moore and Ross Stewart as directors, Paul Young, Nora Twomey, Tomm Moore and Stéphan Roelants as producers, Will Collins as writer and a 103-minute running time; BFI labels the record 2019, while Apple records a December 11, 2020 release, so the Chapter 19 scenario uses the matrix's 2020 release-year convention without pretending institutional catalogues share one year field. Apple identifies Cartoon Saloon and Melusine Productions as production companies, while contemporary production reporting also identifies Folivari in the wider production partnership; those records establish a transnational production context without licensing unsupported country-by-country financing shares, spend, staffing or rights allocations. Moore's 2017 production account makes hand drawing a storytelling system rather than a nostalgia label: Puritan/English-authority spaces use an ascetic block-print logic, the forest loosens into ink, watercolor and scribbly pencil, and linework becomes more expressive with character mood. Kilkenny research was locally grounded around Cartoon Saloon's own city, but the case keeps historical research distinct from claims that the fictional Lord Protector or every built environment is a literal reconstruction. Wolfvision is treated as a bounded special pipeline, not evidence that Wolfwalkers became a 3D feature. Cartoon Brew's Annecy work-in-progress reporting documents 3D software for dynamic z-axis camera movement new to the studio; Blender's production interview with Eimhin McNamara documents 3D previs, VR blocking, Blender camera control and cleanup, Grease Pencil and animated 2D assets, followed by printing digital linework as a light guide, hand tracing/embellishing in graphite on paper, scanning and compositing. Moore and Stewart separately describe Wolfvision as roughly three minutes of the film and extraordinarily labor-intensive, with CG used to map movement before the visible result was rendered by hand on paper. The Blender interview gives a 22-month full-production figure and 18 months of McNamara involvement, while the directors describe Wolfvision as spanning the length of production and almost three years; these differently scoped testimonies are preserved rather than forced into one exact master schedule. Story development is also production work: Cartoon Brew's account of Iker Maidagan's process describes Cartoon Saloon's first proper story team and five animatics across about a year and a half, but that story-artist testimony is not generalized into a universal studio workflow. The player must coordinate story iteration, historical and local research, co-direction, production design, expressive line systems, hand-drawn character animation, layout and perspective, Wolfvision previs, VR and Blender handoffs, paper/graphite rendering, scan/composite continuity, editorial iteration, transnational production coordination and platform-era delivery while refusing unsupported exact budget, financing percentages, complete crew census, every software package or version, per-shot frame rate, full exposure or color pipeline, exact drawing count, paper/graphite inventory, scanner settings, compositing-node graph, render-farm topology, edit software/version, sound chain, score stems, final mix topology or a claim that Apple TV+ distribution proves who financed or creatively controlled the production.",
    requiredChoicesSeed: {
      screenplay: ["will_collins", "moore_stewart_story_collaboration", "five_animatics", "kilkenny_history_folklore", "graphic_storytelling", "release_year_provenance"],
      camera: ["nonlinear_perspective", "kilkenny_block_print", "forest_loose_line", "wolfvision_subjective_camera", "3d_previs", "vr_blocking", "blender_camera_control", "shot_parameters_unknown"],
      editing: ["story_team_iteration", "animatic_revision", "wolfvision_handoff", "paper_scan_composite", "dual_visual_system_continuity", "runtime_provenance"],
      sound: ["voice_performance", "music_sound_mapped_not_overclaimed", "forest_city_contrast", "recording_chain_unknown"],
      themes: ["film_history", "2020", "wolfwalkers", "cartoon_saloon", "melusine", "tomm_moore", "ross_stewart", "will_collins", "paul_young", "nora_twomey", "stephan_roelants", "hand_drawn_2d", "kilkenny", "forest", "block_print", "expressive_line", "wolfvision", "eimhin_mcnamara", "3d_previs", "vr", "blender", "grease_pencil", "graphite", "paper", "scan_composite", "transnational_animation", "apple_tv_plus", "chapter19"]
    },
    learningGoals: [
      "Explain Wolfwalkers as the third Chapter 19 Production Case and identify hand-drawn 2D production as its dominant visual system.",
      "Use the BFI 103-minute running time as the playable runtime anchor while preserving harmless catalogue differences.",
      "Explain why the Chapter 19 scenario uses 2020 as its release-year convention even though BFI labels its catalogue record 2019.",
      "Identify Tomm Moore and Ross Stewart as co-directors without collapsing their collaboration into one-author mythology.",
      "Identify Will Collins as writer and Paul Young, Nora Twomey, Tomm Moore and Stéphan Roelants as BFI-listed producers.",
      "Identify Cartoon Saloon and Melusine Productions as Apple-listed production companies without converting distribution metadata into financing shares.",
      "Explain that contemporary production reporting also places Folivari in the production partnership while keeping exact legal and financing structure source-bounded.",
      "Explain hand drawing as an authored storytelling system rather than an anti-CG slogan.",
      "Identify the ordered Kilkenny/Puritan graphic system as block-print-like and geometrically constrained.",
      "Identify the forest and wolfwalker language as looser, more expressive ink, watercolor and pencil drawing.",
      "Explain how linework changes with character mood and therefore participates in performance and story meaning.",
      "Explain why local Kilkenny research matters to production design while refusing a claim of literal historical reconstruction for every image.",
      "Separate documented 17th-century visual research from the film's deliberate fictionalization of political history and folklore.",
      "Explain non-linear perspective as part of the film's graphic design rather than a production error to be corrected toward photorealism.",
      "Identify Wolfvision as a bounded subjective-camera subsystem rather than the visual method for the whole feature.",
      "Explain that 3D software enabled dynamic camera movement and z-axis travel in Wolfvision while the feature remained predominantly hand-drawn.",
      "Identify Eimhin McNamara as the Blender-documented key Wolfvision production figure and preserve spelling against conflicting secondary references.",
      "Explain the use of 3D previsualization and VR blocking as planning systems rather than proof that final Wolfvision backgrounds were delivered as conventional CG renders.",
      "Identify Blender as one tool in the Wolfvision pipeline for camera control and cleanup, not the sole software platform for the whole film.",
      "Identify Grease Pencil and imported 2D assets as documented parts of McNamara's hybrid workflow without inventing exact version requirements.",
      "Explain the documented print-to-paper step: digital linework could be printed as a light guide for hand tracing and embellishment.",
      "Explain graphite/pencil work on paper as final visible craft input while preserving scanning and compositing as necessary digital handoffs.",
      "Reject the false binary that a hand-drawn final image means no digital production tools were used.",
      "Reject the opposite false binary that 3D previs makes Wolfwalkers a 3D-animated feature.",
      "Identify Wolfvision as roughly three minutes of finished screen time in the directors' production account.",
      "Treat the directors' description of Wolfvision as almost-three-years work and McNamara's 22-month full-production/18-month involvement account as differently scoped testimony.",
      "Refuse to force differently scoped production-duration testimony into one unsupported exact master schedule.",
      "Explain why an unusually short finished sequence can consume disproportionate production labor when it requires a bespoke hybrid pipeline.",
      "Keep the directors' 12-frames-per-second Wolfvision description bounded to that cited subsystem rather than applying it to the whole film.",
      "Keep exact frame-by-frame software, timing charts and exposure sheets unresolved unless title-specific records establish them.",
      "Explain Cartoon Saloon's first proper story-team account as a title-specific development change rather than a universal feature-animation rule.",
      "Identify five animatics across roughly a year and a half as Iker Maidagan's documented story-development account.",
      "Explain animatics as a production decision surface where staging, pacing, visual ideas and script changes can be tested before final animation.",
      "Keep deleted-scene history and story-artist testimony distinct from final-film canonical events.",
      "Explain how city/forest design differences must survive layout, animation, color, compositing and editorial continuity.",
      "Explain how Wolfvision requires handoff discipline between previs geometry, virtual camera, drawn overlays, printed guides, paper rendering, scanning and compositing.",
      "Keep exact scanner models, DPI, paper stock, graphite grades and compositing settings outside the verified layer unless directly sourced.",
      "Explain how scent color in Wolfvision is a story-readable sensory device rather than evidence for one universal color rule across the feature.",
      "Explain why transnational animation production should be documented through named companies and institutional records instead of inferred from distribution territories.",
      "Keep exact country-level spending, tax incentives, public-funding shares and crew allocation unresolved unless stronger production records establish them.",
      "Treat Apple TV+'s December 11, 2020 release as circulation history rather than proof of production financing or creative control.",
      "Explain Wolfwalkers as evidence for animation plurality in Chapter 19: hand-drawn feature craft persisted alongside mature CG, real-time and platform-era systems.",
      "Keep exact whole-film drawing count, asset count, shot count, software inventory, renderer use and render-farm topology unresolved.",
      "Keep sound design and score inside the Film Study map as production areas without promoting undocumented recording or mix specifications.",
      "Explain how voice performance, drawn acting, line quality and layout combine as distinct authorship inputs without claiming generic motion capture.",
      "Maintain an uncertainty register for budget, financing, schedule scope, complete crew census, software/version map, drawing counts, timing, scan/composite parameters, edit system, sound chain and final mix.",
      "Explain Wolfwalkers' Chapter 19 significance as a hand-drawn European co-production whose most technically conspicuous passage uses digital/VR/3D planning in service of paper-and-pencil imagery.",
      "Build a closing production audit that checks year/runtime provenance, co-direction, story development, city/forest graphic systems, Wolfvision boundaries, hybrid tool handoffs, transnational production and distribution separation before verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Wolfwalkers evidence hierarchy", player_task: "Separate BFI catalogue metadata, Apple release/company records, Moore/Stewart interviews, Cartoon Brew development reporting and Blender's McNamara workflow account before promoting claims." },
      { id: "year_runtime_provenance", label: "Lock year and runtime provenance", player_task: "Use 103 minutes as the playable runtime and preserve BFI's 2019 catalogue label beside the Chapter 19 matrix's 2020 release convention." },
      { id: "co_direction", label: "Map co-direction", player_task: "Keep Tomm Moore and Ross Stewart's shared directing authorship explicit through story, design and production decisions." },
      { id: "story_team", label: "Build the story-team loop", player_task: "Use the documented proper-story-team change and close director collaboration without turning one production's organization into a universal template." },
      { id: "animatic_iterations", label: "Version the animatics", player_task: "Track the documented five-animatic development process while keeping deleted material distinct from final continuity." },
      { id: "kilkenny_research", label: "Ground Kilkenny research", player_task: "Use local architecture, history and landscape as design reference while preserving deliberate historical fiction." },
      { id: "city_graphic_system", label: "Build the ordered city system", player_task: "Maintain block-print-like geometry and visual constraint for English/Puritan authority spaces." },
      { id: "forest_graphic_system", label: "Build the freer forest system", player_task: "Maintain loose ink, watercolor and scribbly-pencil energy as a distinct visual grammar." },
      { id: "expressive_line", label: "Make linework perform", player_task: "Let line quality respond to emotion and movement without losing character readability or production consistency." },
      { id: "nonlinear_perspective", label: "Protect graphic perspective", player_task: "Treat flattened and non-linear perspective as authored composition rather than an error to be normalized." },
      { id: "wolfvision_scope", label: "Bound Wolfvision", player_task: "Lock Wolfvision as a small subjective subsystem and refuse to generalize its 3D-assisted methods to the whole feature." },
      { id: "wolfvision_camera", label: "Previsualize Wolfvision movement", player_task: "Use 3D spatial blocking for dynamic z-axis travel while preserving final hand-rendered design goals." },
      { id: "vr_blocking", label: "Block spaces in VR", player_task: "Use the documented Oculus/VR workflow as Wolfvision planning evidence without inventing exact hardware or software versions." },
      { id: "blender_handoff", label: "Use Blender as a bounded tool", player_task: "Coordinate camera control, cleanup and selected spatial work without converting Blender into a whole-film pipeline claim." },
      { id: "grease_pencil", label: "Annotate hybrid layouts", player_task: "Use documented Grease Pencil drawing/notes alongside 2D assets as an intermediate design layer." },
      { id: "print_guides", label: "Prepare paper guides", player_task: "Convert digital linework into light printed guides while preserving provenance between previs and hand rendering." },
      { id: "graphite_render", label: "Render Wolfvision by hand", player_task: "Trace and embellish movement on paper with graphite/pencil without pretending all digital handoffs disappear." },
      { id: "scan_composite", label: "Return drawings to the composite", player_task: "Scan and integrate paper work while keeping exact DPI, scanner, color-management and node settings unresolved." },
      { id: "scent_language", label: "Map scent as color", player_task: "Use selective color to make wolf sensory information readable without applying the device indiscriminately across the feature." },
      { id: "character_animation", label: "Coordinate drawn acting", player_task: "Align voice, gesture, facial expression and expressive line without converting the process into generic performance capture." },
      { id: "city_forest_continuity", label: "Protect cross-world continuity", player_task: "Maintain narrative geography while allowing city and forest to obey deliberately different visual rules." },
      { id: "wolfvision_timing", label: "Bound Wolfvision timing claims", player_task: "Keep the directors' roughly three-minute and 12fps descriptions tied to Wolfvision rather than the whole feature." },
      { id: "schedule_testimony", label: "Reconcile schedule testimony", player_task: "Preserve differently scoped production-duration accounts instead of inventing one false exact schedule." },
      { id: "transnational_production", label: "Map production partners", player_task: "Track Cartoon Saloon, Melusine and supported partner records without inferring country-by-country spend or staffing." },
      { id: "production_finance_boundary", label: "Bound financing claims", player_task: "Keep development/public-funding and company evidence separate from unsupported final financing percentages." },
      { id: "editorial_iteration", label: "Version editorial continuity", player_task: "Carry story and visual-system revisions through editorial without inventing the edit software or conform topology." },
      { id: "sound_map", label: "Map sound without overclaiming", player_task: "Keep dialogue, city, forest and Wolfvision sound as distinct production layers while leaving undocumented recording chains unresolved." },
      { id: "platform_release", label: "Separate Apple TV+ circulation", player_task: "Treat the December 11, 2020 Apple TV+ release as distribution history rather than production authorship." },
      { id: "animation_plurality", label: "Position hand-drawn animation in 2020", player_task: "Explain why sophisticated hand-drawn production persists alongside CG and platform-era distribution without framing one method as technologically obsolete." },
      { id: "unknowns_register", label: "Maintain the Wolfwalkers unknowns register", player_task: "Track budget, financing, schedule scope, crew census, software versions, drawings, scan/composite, editing and sound unknowns explicitly." },
      { id: "delivery_review", label: "Audit the complete Wolfwalkers production system", player_task: "Verify provenance, co-direction, story iteration, graphic systems, Wolfvision boundaries, hybrid tool handoffs, production partners and release separation before production verification." }
    ]
  }
] as const;

export function mergeChapterNineteenWolfwalkersExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenWolfwalkersExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_wolfwalkers_verified",
      source: { list_id: "manual_chapter_nineteen_wolfwalkers_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
