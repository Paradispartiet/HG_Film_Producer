import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenAvatarWayOfWaterExpansionDefinitions = [
  {
    id: "scenario_avatar_the_way_of_water_2022",
    title: "Avatar: The Way of Water",
    originalTitle: "Avatar: The Way of Water",
    aliases: [],
    year: 2022,
    titleType: "Movie",
    runtimeMins: 192,
    directors: ["James Cameron"],
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    sourceId: "20th_century_avatar_way_of_water_2022",
    sourceUrl: "https://www.20thcenturystudios.com/movies/avatar-the-way-of-water",
    scenarioType: "performance_capture_underwater_volume_virtual_camera_simulcam_depth_compositing_sony_venice_fusion_3d_hfr_stereoscopic_weta_fx_water_simulation_facial_performance_eyeline_techvis_editorial_virtual_production_2022",
    premise: "Build Avatar: The Way of Water as the sixth source-first Chapter 19 Production Case and treat performance capture, virtual cinematography, live-action stereoscopic photography, visual effects, editorial and exhibition as linked but distinct systems. 20th Century Studios anchors James Cameron as director, James Cameron and Jon Landau as producers and a 192-minute release runtime. American Cinematographer documents Russell Carpenter ASC as cinematographer, Sony VENICE-based redesigned Fusion stereoscopic rigs for live-action work, 48fps capture in selected material, a custom underwater performance-capture volume at Manhattan Beach Studios and a virtual-camera process that Cameron deliberately uncoupled from the actors' performance capture once rough staging had been established. Underwater capture required title-specific R&D rather than a dry-for-wet shortcut: the team found a near-ultraviolet marker wavelength that travelled through water more effectively than conventional infrared, waterproofed capture cameras, controlled surface reflections with floating beads and built practical interaction pieces inside the tank so performers had real geometry to push, pull and swim against. The same ASC account documents a 12-to-16-camera video-reference array used to preserve editable actor performances and a new Simulcam workflow that registered practical and CG elements in shared 3D space for near-real-time framing. Weta FX records the scale and boundaries of its work: 3,240 VFX shots in a 3,289-shot final film, 2,225 water shots, a new water-simulation toolset, a strain-based facial-performance system, a performance-driven cable-cam eyeline system and machine-learning-assisted depth compositing for real-time live-action/CG occlusion. These figures describe Weta FX's documented contribution and must not be generalized into a complete whole-film labor census or an assertion that every shot used the same technique. The Third Floor documents previs, environment assembly, VCAM work in Weta FX's Gazebo engine, techvis built from scans of physical sets and on-set Simulcam supervision connecting real camera positions, actors, tanks, vehicles and virtual environments. Editorial is not a downstream cleanup stage: title-specific workflow reporting with editor Stephen Rivkin describes performance-capture dailies being selected first, digital characters/environments populated around approved performances, virtual-camera shots built from those performances and approved camera decisions then sent toward final Weta FX rendering, while live-action templates guided photography where human performers had to match virtual material. Sound remains its own production layer: title-specific sound-team interviews identify Christopher Boyes, Gwendolyn Yates Whittle, Dick Bernstein, Michael Hedges and Julian Howarth among the principal sound collaborators and describe an unusually clarity-driven mix strategy for a visually dense film. The player must coordinate screenplay continuity, performance capture, breath-hold and water safety, facial and body data, underwater marker visibility, reference video, virtual-camera staging, techvis, eyelines, practical interaction sets, live-action stereo photography, VENICE/Fusion engineering, Simulcam registration, HFR decisions, VFX turnover, water and facial simulation, editorial iteration, sound clarity, score integration, stereoscopic composition, premium-format delivery and evidence boundaries while refusing unsupported exact budget shares, full actor training logs, complete capture-camera counts for every session, proprietary marker specifications, exhaustive software versions, whole-film vendor labor allocations, per-shot render costs, full editorial storage topology, exact color-management transforms for every deliverable, complete sound plug-in chains or claims that box-office/awards outcomes prove production authorship.",
    requiredChoicesSeed: {
      screenplay: ["james_cameron", "sully_family_arc", "reef_migration", "water_culture_worldbuilding", "performance_capture_script_continuity", "runtime_provenance"],
      camera: ["russell_carpenter", "sony_venice", "fusion_3d", "stereoscopic_alignment", "hfr_48fps", "virtual_camera", "simulcam", "underwater_live_action", "shot_parameters_unknown"],
      editing: ["stephen_rivkin", "performance_select_first", "reference_video_matrix", "virtual_camera_second_pass", "live_action_template", "vfx_turnover", "multi_year_editorial", "delivery_versioning"],
      sound: ["christopher_boyes", "gwendolyn_yates_whittle", "dick_bernstein", "michael_hedges", "julian_howarth", "clarity_is_king", "aquatic_world_sound", "mix_chain_unknown"],
      themes: ["film_history", "2022", "avatar_the_way_of_water", "james_cameron", "jon_landau", "russell_carpenter", "stephen_rivkin", "joe_letteri", "weta_fx", "the_third_floor", "performance_capture", "underwater_capture", "virtual_cinematography", "simulcam", "depth_compositing", "sony_venice", "fusion_3d", "stereoscopic", "hfr", "water_simulation", "facial_performance", "eyeline_system", "techvis", "virtual_production", "chapter19"]
    },
    learningGoals: [
      "Explain Avatar: The Way of Water as the sixth source-first Chapter 19 Production Case and distinguish performance capture, virtual cinematography, live-action photography, VFX rendering and stereoscopic exhibition as separate production layers.",
      "Use the 20th Century Studios 192-minute record as the canonical playable runtime anchor.",
      "Identify James Cameron as director and James Cameron with Jon Landau as producers from the studio record.",
      "Identify Russell Carpenter ASC as cinematographer for the live-action photography documented by American Cinematographer.",
      "Explain why the film's virtual-production history cannot be reduced to LED-wall production: its title-specific system centers performance capture, VCAM, Simulcam, techvis and later live-action/VFX integration.",
      "Explain the distinction between performance capture and a conventional photographed final image: capture records actor movement and expression that later drive digital characters.",
      "Explain why Cameron deliberately uncoupled the virtual-camera process from performance capture after rough staging so directing attention could return to actor performance.",
      "Explain why editable multi-angle reference video was critical to preserving actor-performance choices before final virtual camera and rendering decisions.",
      "Identify the documented 12-to-16-camera reference array as session-level evidence without claiming an invariant camera count for every day of production.",
      "Explain the underwater performance-capture volume as a purpose-built production environment rather than a generic swimming tank.",
      "Explain why conventional infrared motion-capture illumination was unsuitable underwater and why the production developed a near-ultraviolet solution.",
      "Keep proprietary wavelength values, sensor modifications and marker chemistry unresolved unless title-specific sources disclose them.",
      "Explain how waterproof capture-camera housings were part of the underwater data-acquisition problem rather than merely safety accessories.",
      "Explain why floating beads were used on the water surface to suppress reflections that generated false capture data while preserving safe performer access to the surface.",
      "Explain why practical interaction geometry remained necessary inside a virtual production: actors still need real surfaces to grab, push, climb and swim around.",
      "Explain the movable underwater platform as a schedule and set-change solution without inventing a complete tank engineering specification.",
      "Explain the difference between breath-hold performance, water-safety procedure and digital character simulation; none substitutes for the others.",
      "Explain Simulcam as registration of practical and virtual elements in shared 3D space for near-real-time framing rather than as proof that final VFX were completed on set.",
      "Explain Weta FX's depth-compositing workflow as an on-set integration aid that handled occlusion between plate and CG elements while final rendering remained a later process.",
      "Identify The Third Floor's documented role in previs, environment assembly, techvis and Simulcam support without converting that contribution into ownership of the whole virtual-production pipeline.",
      "Explain how scans of physical sets could feed techvis so camera positions, actor marks, water tanks, vehicles and specialty rigs were evaluated against virtual geometry before shooting.",
      "Identify Weta FX's Gazebo engine as documented in The Third Floor's VCAM workflow while keeping the complete software stack unresolved.",
      "Explain why virtual-camera lensing is a cinematography decision even when no physical production camera is recording the final CG image at that moment.",
      "Explain the live-action/virtual handoff problem: physical camera movement, lens choice, lighting and actor position must match previously approved virtual camera decisions.",
      "Identify Sony VENICE as the documented live-action camera platform for the film.",
      "Explain the redesigned Fusion 3D rig as a stereoscopic live-action system using VENICE/Rialto components rather than a generic label for all image capture.",
      "Explain why stereoscopic alignment requires controlled interocular/convergence geometry and precise rig calibration without inventing per-shot settings.",
      "Explain the documented 48fps use as a motion/stereoscopic strategy for selected material while preserving 24fps and presentation-version distinctions.",
      "Reject the claim that a high-frame-rate master means every shot or every exhibition version runs at 48fps.",
      "Explain how Weta FX's new water-simulation toolset complemented real underwater actor motion rather than replacing the need for believable captured performance.",
      "Use Weta FX's 3,240 VFX-shot and 2,225 water-shot figures as vendor-published scope evidence rather than a universal labor or cost metric.",
      "Explain Weta FX's strain-based facial-performance system as an attempt to separate deeper facial musculature behavior from surface skin response for more controllable digital acting.",
      "Explain the performance-driven cable-cam eyeline system as a way to place a CG character's facial performance at the correct spatial position for a live-action actor.",
      "Explain why accurate eyelines are a production-performance problem as well as a VFX compositing problem.",
      "Explain the editorial order documented for the production: select performance-capture takes, populate digital characters/environments, create virtual-camera shots, approve them and then advance toward final VFX rendering.",
      "Explain why this workflow means the film can be edited around actor performance before conventional final shots exist.",
      "Explain live-action templates as blueprints for photographing human performers so their plates match approved virtual staging.",
      "Keep exact editorial software versions, shared-storage architecture, proxy codecs, turnover scripts and database topology unresolved unless directly sourced.",
      "Explain the importance of long-form iteration between editorial, virtual production and VFX rather than treating those departments as a one-way pipeline.",
      "Identify Christopher Boyes and the documented supervising/re-recording sound team as distinct authors within the final soundtrack.",
      "Explain the sound team's 'clarity is king' principle as a response to visual density: the track prioritizes story-relevant sonic information instead of reproducing every possible sound.",
      "Explain aquatic-world sound design as authored world-building distinct from the water simulation that creates the image.",
      "Keep exact microphones, hydrophones, production recorders, DAW versions, plug-ins, stems and final mix routing outside the verified layer unless title-specific sources establish them.",
      "Explain stereoscopic composition and premium-format delivery as exhibition constraints that feed back into camera and VFX decisions without proving creative authorship by distributors or exhibitors.",
      "Separate technical innovation claims from reception claims: awards, box office and premium-format circulation do not establish who designed a production system.",
      "Maintain an uncertainty register for budget allocations, actor training totals, exact capture-marker specifications, complete camera counts, whole-film vendor labor shares, render-cost accounting, software versions, editorial infrastructure, color transforms and sound-chain details.",
      "Explain the film's historical significance as a mature 2022 virtual-production system in which performance, underwater physics, virtual camera, live-action stereo photography, VFX simulation, editorial and theatrical presentation are mutually dependent.",
      "Build a closing production audit that checks runtime/credit provenance, capture-versus-camera boundaries, underwater R&D, VCAM/Simulcam evidence, live-action stereo integration, Weta FX scope, editorial order, sound authorship and unresolved claims before production verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Avatar 2 evidence hierarchy", player_task: "Separate studio runtime/credits, ASC camera testimony, Weta FX technical reporting, The Third Floor visualization records and title-specific editorial/sound interviews before promoting claims." },
      { id: "runtime_credits", label: "Lock runtime and principal credits", player_task: "Use the 20th Century Studios 192-minute record and documented principal production credits as the institutional anchor." },
      { id: "script_continuity", label: "Protect sequel continuity", player_task: "Track family, reef migration and returning-character continuity while keeping later Avatar sequels outside this scenario's production claims." },
      { id: "performance_plan", label: "Plan performance before pixels", player_task: "Treat actor performance as primary creative material before virtual-camera and final-render decisions." },
      { id: "underwater_training", label: "Prepare underwater performance", player_task: "Coordinate breath-hold work, rehearsal and safety without turning training anecdotes into unsourced universal performance metrics." },
      { id: "underwater_volume", label: "Build the underwater capture volume", player_task: "Use the documented custom tank/volume as a data-capture environment with controlled light, water movement and performer access." },
      { id: "marker_visibility", label: "Solve underwater marker visibility", player_task: "Replace ineffective conventional infrared behavior with the documented near-ultraviolet approach while keeping proprietary wavelength details bounded." },
      { id: "reflection_control", label: "Suppress false surface data", player_task: "Control water-surface reflections with the documented floating-bead method while maintaining safe access to air." },
      { id: "capture_interaction_sets", label: "Give performers physical geometry", player_task: "Build only the underwater set elements actors physically touch or move through so captured motion has believable constraints." },
      { id: "reference_video", label: "Record editable performance reference", player_task: "Use the documented multi-angle video-reference array to preserve performance choices for editorial without assuming one fixed camera count." },
      { id: "performance_select", label: "Select performances first", player_task: "Choose actor takes before committing to final virtual-camera framing so editorial remains performance-led." },
      { id: "virtual_character_population", label: "Populate digital characters and environments", player_task: "Apply approved capture performances to the digital world as an intermediate editorial/visualization state rather than a final render." },
      { id: "virtual_camera", label: "Lens the approved performance virtually", player_task: "Use VCAM to find staging, focal relationships and camera movement after performance selection." },
      { id: "uncouple_vcam", label: "Separate VCAM from acting focus", player_task: "Follow Cameron's documented practice of setting the virtual camera aside once staging is understood so performance direction remains primary." },
      { id: "previs_techvis", label: "Join previs to techvis", player_task: "Use concept art, script, virtual assets and physical-set scans to test sequence geometry and equipment constraints." },
      { id: "simulcam_registration", label: "Register real and virtual space", player_task: "Align practical camera, set and CG coordinate systems so on-set framing preserves correct scale and position." },
      { id: "eyeline_system", label: "Give actors accurate CG eyelines", player_task: "Use the documented performance-driven monitor/eyeline system where appropriate so live performers react to the correct spatial target." },
      { id: "live_action_template", label: "Build live-action templates", player_task: "Translate approved virtual staging into camera, actor and lighting targets for physical photography." },
      { id: "venice_fusion", label: "Configure VENICE Fusion stereo", player_task: "Use the documented VENICE/Rialto-based Fusion rig while keeping exact shot-by-shot body/lens/rig settings unresolved." },
      { id: "stereo_alignment", label: "Calibrate stereoscopic geometry", player_task: "Protect interocular, convergence and rig alignment as image-engineering decisions rather than decorative 3D metadata." },
      { id: "hfr_strategy", label: "Choose HFR selectively", player_task: "Use 48fps where motion clarity and stereoscopic needs justify it while maintaining 24fps/version boundaries." },
      { id: "live_virtual_match", label: "Match practical photography to virtual shots", player_task: "Align camera movement, lens behavior, actor marks and lighting with the approved virtual camera without assuming every virtual element is final." },
      { id: "depth_compositing", label: "Preview occlusion in real time", player_task: "Use the documented depth-compositing system to judge plate/CG overlap on set while preserving final compositing as later work." },
      { id: "water_simulation", label: "Simulate digital water behavior", player_task: "Coordinate captured human movement with Weta FX water systems for splashes, spray, thin film and interaction without replacing the captured performance." },
      { id: "facial_performance", label: "Preserve digital facial acting", player_task: "Use the documented strain-based system to translate actor expression while keeping artistic adjustment and final animation authorship visible." },
      { id: "vfx_turnover", label: "Turn approved shots toward final VFX", player_task: "Advance editorially approved virtual-camera work into final asset, animation, simulation, lighting and compositing stages." },
      { id: "vendor_scope", label: "Bound Weta FX evidence", player_task: "Use Weta FX's published shot/water counts for its documented contribution without inventing complete whole-film labor or cost allocation." },
      { id: "editorial_iteration", label: "Iterate edit and virtual production", player_task: "Keep performance, camera, live-action and VFX decisions revisable through the multi-year editorial process rather than enforcing a false one-way pipeline." },
      { id: "sound_clarity", label: "Mix for narrative clarity", player_task: "Prioritize story-relevant dialogue, effects and music so sonic density supports rather than competes with the image." },
      { id: "aquatic_sound", label: "Author Pandora's aquatic sound world", player_task: "Design water, creature and environment sound as its own storytelling system distinct from visual water simulation." },
      { id: "stereo_delivery", label: "Audit stereoscopic and HFR delivery", player_task: "Check composition, depth and motion behavior across supported theatrical versions without assuming one universal projection configuration." },
      { id: "unknowns_register", label: "Maintain the Avatar 2 unknowns register", player_task: "Track budget shares, training totals, proprietary marker specs, complete camera counts, vendor labor, render costs, software versions, editorial infrastructure, color transforms and sound chains explicitly." },
      { id: "delivery_review", label: "Audit the complete Avatar 2 production system", player_task: "Verify credits, runtime, performance-capture boundaries, underwater R&D, VCAM/Simulcam, stereo live action, VFX scope, editorial order, sound roles and remaining unknowns before production verification." }
    ]
  }
] as const;

export function mergeChapterNineteenAvatarWayOfWaterExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenAvatarWayOfWaterExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_avatar_way_of_water_verified",
      source: { list_id: "manual_chapter_nineteen_avatar_way_of_water_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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