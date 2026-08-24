import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenAvatarExpansionDefinitions = [
  {
    id: "scenario_avatar_2009",
    title: "Avatar",
    originalTitle: "Avatar",
    year: 2009,
    titleType: "Movie",
    runtimeMins: 161,
    directors: ["James Cameron"],
    genres: ["Adventure", "Science Fiction"],
    sourceId: "asc_avatar_2010",
    sourceUrl: "https://theasc.com/article/avatar/",
    scenarioType: "performance_capture_virtual_camera_simulcam_fusion_3d_weta_virtual_production_2009",
    premise: "Build Avatar as a Chapter 18 anchor for virtual production rather than reducing it to a generic CGI milestone. American Cinematographer documents two linked virtual-cinematography tools: a tracked handheld virtual camera that let James Cameron see motion-capture performers as their Na'vi characters inside the digital environment, and SimulCam, which tracked a live-action camera so CG environments and characters could be composited into the camera view and onset monitors in real time. This changed directing, framing, blocking and art direction before final rendering: camera movement, scale, virtual dolly/crane behavior, character eyelines and background action could be explored as if the virtual environment were a photographable set. ASC also documents that MotionBuilder environments were built before practical construction and used for virtual tech scouts, blocking and lighting plans, so production design and cinematography migrated upstream into a shared virtual workspace. Preserve the distinction between performance capture and finished animation: recorded actor motion and facial-performance data were inputs that Weta Digital interpreted, refined and rendered; the final Na'vi images were not direct photographic recordings of actors. Preserve the distinction between virtual camera and SimulCam: the former is not an optical camera at all, while the latter registers a physical live-action camera into the CG world for mixed real-time viewing. For live-action 3-D photography, Vince Pace and Cameron's Fusion 3-D Camera System provided paired-camera stereoscopic capture with controllable interocular distance, convergence, zoom, focus, iris and mirror balance, and could be configured for handheld and Steadicam work. Do not collapse stereoscopy into performance capture: they are separate systems that meet in the final movie. ASC records that roughly 70 percent of the film was motion capture and the remainder live action, but treat that as Mauro Fiore's bounded production account rather than a universal category rule. The same source records about 18 months of motion-capture work followed by live-action photography at Stone Street Studios in Wellington, where practical sets and greenscreen elements had to match a virtual world already designed. Post Magazine's Cameron interview independently describes the virtual camera and Simulcamera logic, while Joe Letteri describes Avatar as a shift from putting CG characters into live-action plates toward performers working inside an entirely virtual world and camera decisions being made during capture. Sound must remain a parallel authored system: Mix documents Chris Boyes as sound designer/effects mixer, Gary Summers on dialogue re-recording, Andy Nelson on music re-recording, Tony Johnson as production mixer, and James Horner's score, with Cameron reviewing 3-D image action against spatial sound placement. AFI and BFI converge on James Cameron, Jon Landau, Mauro Fiore, editors Stephen Rivkin/John Refoua/Cameron, production designers Rick Carter/Robert Stromberg and a 161-minute release, while some other catalogues list 160 or 162; use 161 for gameplay and preserve version/institution differences. Do not claim Avatar invented motion capture, facial capture, stereoscopic cinema or CGI. Its historical significance here is the integration of performance capture, real-time virtual cinematography, SimulCam, stereoscopic live action, virtual scouting/design, iterative VFX and final theatrical 3-D into one director-facing production system.",
    requiredChoicesSeed: {
      screenplay: ["cameron_screenplay_world_rules", "performance_scene_requirements", "human_navi_scale_logic", "no_false_technology_drives_story_claim"],
      camera: ["tracked_virtual_camera", "simulcam_live_composite", "fusion_3d_stereo_rig", "interocular_convergence_control", "virtual_scale_operation", "live_action_virtual_world_registration"],
      editing: ["performance_capture_review", "virtual_camera_take_selection", "3d_screening_notes", "live_action_vfx_turnover", "depth_of_field_metadata", "no_false_final_render_on_set"],
      sound: ["production_sound_boundary", "boyes_sound_design", "summers_dialogue_mix", "nelson_music_mix", "horner_score", "3d_spatial_sound_review"],
      themes: ["film_history", "2009", "avatar", "james_cameron", "mauro_fiore", "jon_landau", "virtual_production", "performance_capture", "facial_capture", "virtual_camera", "simulcam", "motionbuilder", "fusion_3d", "stereoscopy", "interocular", "convergence", "weta_digital", "joe_letteri", "rick_carter", "robert_stromberg", "stephen_rivkin", "john_refoua", "chris_boyes", "gary_summers", "andy_nelson", "james_horner", "runtime_boundary"],
    },
    learningGoals: [
      "Explain why Avatar is best treated as an integrated virtual-production system rather than merely as a film with extensive CGI.",
      "Distinguish the tracked handheld virtual camera from a physical optical camera: it is a tracked interface that renders a view into the virtual world.",
      "Distinguish SimulCam from the virtual camera: SimulCam registers a real live-action camera into the digital scene and composites virtual elements into the onset view.",
      "Explain how real-time virtual viewing changed framing, eyelines, blocking and background-action decisions before final VFX rendering.",
      "Explain how virtual scale let Cameron operate from the physical stage floor while framing from Na'vi eye height or simulated crane positions.",
      "Treat MotionBuilder environments as production spaces used for virtual scouting, blocking and lighting planning before practical construction.",
      "Explain why virtual tech scouting moves cinematography, production design and stage engineering decisions earlier in the schedule.",
      "Keep performance capture distinct from final character animation: actor data is interpreted and refined by animation/VFX teams rather than copied mechanically into the final image.",
      "Keep facial performance work distinct from body motion capture and from later facial-animation interpretation.",
      "Preserve Joe Letteri's historical boundary: Avatar moved performers into a virtual world rather than simply inserting a CG character into a photographed plate.",
      "Explain the Fusion 3-D Camera System as paired stereoscopic live-action capture with controlled interocular distance and convergence, not as the same system as performance capture.",
      "Explain why interocular and convergence controls are creative and comfort variables in stereoscopic staging rather than fixed camera specs.",
      "Keep practical live-action sets and greenscreen photography visible alongside the virtual-production pipeline; Avatar is not a wholly synthetic image source.",
      "Use Mauro Fiore's roughly 70-percent motion-capture statement as a bounded production account rather than an exact ontology for every finished shot.",
      "Explain why about 18 months of performance-capture work and later Wellington live-action photography form distinct but interdependent production phases.",
      "Show how SimulCam let actors and camera operators respond to CG character/environment placement during live-action photography rather than imagining all compositing blindly.",
      "Explain why virtual-camera takes still required later review, re-operation, depth-of-field decisions and Weta refinement before final shots existed.",
      "Keep production design authorship visible: Rick Carter and Robert Stromberg's environments were not replaced by software; virtual tools changed how design could be explored and communicated.",
      "Treat VFX as a long downstream interpretation/rendering process, not as an automatic consequence of motion-capture data.",
      "Explain why photorealism in the Tree of Souls and other bioluminescent environments still required iterative lighting and rendering judgement after capture.",
      "Keep live-action cinematography by Mauro Fiore distinct from virtual cinematography while showing how both were planned against the same digital world.",
      "Explain how 3-D review affected camera notes and spatial composition without claiming every creative decision was dictated by stereoscopy.",
      "Keep sound production, sound design, dialogue re-recording and music re-recording as separate responsibilities in the final mix.",
      "Use Chris Boyes, Gary Summers and Andy Nelson to explain why large-scale sound mixing divides effects, dialogue and music responsibilities instead of treating 'sound' as one job.",
      "Connect James Horner's score to a mix where music, dialogue and effects were balanced against an image designed for stereoscopic immersion.",
      "Use 161 minutes for gameplay because AFI and BFI converge there while preserving 160/162-minute records as catalogue/release-version differences.",
      "Do not claim Avatar invented motion capture, facial capture, stereoscopic cinema, virtual cameras or CGI; its Chapter 18 importance is integration and production-scale convergence.",
      "Compare Avatar with Attack of the Clones: both transform digital production, but Avatar shifts director-facing production design and character work into a real-time virtual stage rather than centering all-digital photographic acquisition.",
      "Compare Avatar with Zodiac: Zodiac's digital history is data custody and conform, while Avatar's is real-time scene visualization, performance capture, stereo live action and VFX integration.",
      "Compare Avatar with Slumdog Millionaire: Slumdog uses small digital equipment to enter difficult real locations; Avatar uses tracked digital tools to make an unbuilt world operational during production.",
    ],
    phases: [
      { id: "world_build", label: "Turn the screenplay's world rules into buildable virtual geography", player_task: "Define scale, terrain, architecture, ecology and human/Na'vi spatial relationships early enough that art, VFX, blocking and camera departments work inside the same coordinate system." },
      { id: "performance_volume", label: "Capture actor performance in a tracked volume", player_task: "Record body and facial performance as source data while keeping actor intent, eyelines, prop relationships and character scale traceable for later animation." },
      { id: "virtual_camera", label: "Direct inside the digital world with a tracked virtual camera", player_task: "Use the tracked virtual camera to frame captured performances, rehearse coverage and explore scaled handheld, dolly and crane behavior without pretending the device is an optical camera." },
      { id: "virtual_scout", label: "Scout and block the unbuilt sets before construction", player_task: "Walk the MotionBuilder environments, test staging and identify practical stage limits so design and camera problems are solved before Wellington construction." },
      { id: "virtual_light", label: "Pre-plan lighting against virtual geometry", player_task: "Place and test lighting ideas in the virtual sets, then translate those plans to real stages with known ceiling, beam and rigging constraints." },
      { id: "simulcam", label: "Register live action to the CG world in real time", player_task: "Track the live-action camera so SimulCam can composite virtual characters, environments and pre-recorded action into the viewfinder and monitors for framing and interaction decisions." },
      { id: "scale_alignment", label: "Maintain human and Na'vi scale across physical and virtual space", player_task: "Calibrate virtual camera scale and eyelines so a camera operated at human height can frame from a Na'vi viewpoint without breaking spatial continuity." },
      { id: "fusion_3d", label: "Capture live action with the Fusion stereoscopic rig", player_task: "Set paired-camera interocular distance and convergence for the shot, then coordinate zoom, focus, iris, mirror balance and movement without confusing stereo photography with performance capture." },
      { id: "live_action_stage", label: "Photograph practical actors and sets inside a predesigned virtual world", player_task: "Shoot the Wellington live-action material and greenscreen elements so practical lighting, set edges, camera metadata and virtual extensions remain compatible." },
      { id: "virtual_take_review", label: "Review virtual-camera work as editable cinematography", player_task: "Screen captured shots in 3-D, refine camera motion, depth-of-field cues and scene detail, and prepare explicit notes for Weta rather than treating the onset preview as final imagery." },
      { id: "performance_translation", label: "Translate captured acting into final Na'vi performance", player_task: "Preserve body, eye and facial intent while animation teams solve anatomy, scale, cloth, hair and facial behavior that capture data alone cannot finish." },
      { id: "environment_render", label: "Turn virtual production assets into photoreal final environments", player_task: "Refine geometry, materials, atmosphere, vegetation, lighting and bioluminescence until Weta's final renders support the photographed and captured performance instead of merely matching the low-resolution onset preview." },
      { id: "stereo_vfx", label: "Carry stereoscopic intent through VFX", player_task: "Maintain depth relationships and convergence intent through compositing and rendering so virtual characters and practical photography occupy a coherent 3-D space." },
      { id: "editorial", label: "Edit performance capture, live action and VFX development together", player_task: "Use Stephen Rivkin, John Refoua and Cameron's editorial structure to track story performance while shots evolve from capture/reference to virtual-camera choices and final VFX." },
      { id: "sound_world", label: "Design Pandora as an acoustic world, not a generic effects library", player_task: "Build creature, vehicle, environment and battle sound under Chris Boyes while keeping dialogue intelligible and separating designed effects from production recordings." },
      { id: "final_mix", label: "Balance effects, dialogue and Horner's score for a stereoscopic theatrical experience", player_task: "Coordinate Boyes on effects, Gary Summers on dialogue and Andy Nelson on music so spatial movement supports the 3-D image without sacrificing narrative clarity." },
      { id: "runtime_boundary", label: "Keep release-duration records inspectable", player_task: "Use 161 minutes for gameplay because AFI and BFI agree there, while retaining 160/162-minute institutional and catalogue records as version metadata." },
      { id: "innovation_boundary", label: "Describe integration without inventing firsts", player_task: "Credit Avatar for production-scale integration of performance capture, virtual cinematography, SimulCam, stereo live action and VFX while explicitly avoiding claims that it invented those individual technologies." },
    ],
  },
] as const;

export function mergeChapterEighteenAvatarExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenAvatarExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_avatar_verified",
      source: { list_id: "manual_chapter_eighteen_avatar_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
