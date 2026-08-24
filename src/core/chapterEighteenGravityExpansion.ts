import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenGravityExpansionDefinitions = [
  {
    id: "scenario_gravity_2013",
    title: "Gravity",
    originalTitle: "Gravity",
    year: 2013,
    titleType: "Movie",
    runtimeMins: 91,
    directors: ["Alfonso Cuarón"],
    genres: ["Drama", "Science Fiction", "Thriller"],
    sourceId: "framestore_gravity_2013",
    sourceUrl: "https://www.framestore.com/work/gravity",
    scenarioType: "previs_edit_prelight_techvis_led_lightbox_robot_camera_face_capture_cg_space_spatial_sound_2013",
    premise: "Build Gravity as a Chapter 18 anchor for a VFX-led production system in which editorial, previs, digital lighting, technical planning, performance capture, photography, CG construction, stereoscopy and sound design developed as one interdependent pipeline. Framestore records that the film was planned and created in London from pre-production previs and postvis through filming and extensive post, and that its initial wire-and-partial-set approach expanded until, in most shots, the faces were the principal photographed elements while suits, spacecraft, Earth, stars, debris and environments were computer-generated. This is not evidence that photography or performance disappeared. It means Emmanuel Lubezki, Alfonso Cuarón, Tim Webber, editor Mark Sanger, the cast and the VFX teams had to determine camera, timing, light, eyelines and bodily action before the final image existed. Framestore's production history says the entire film was made in previs as Cuarón's de facto editorial tool; the opening shot alone took about three months to block, the visualization enterprise ran for roughly two years, and the final previs became a detailed blueprint rather than a disposable pitch animation. Lubezki and Framestore then converted creative previs into physically reasoned digital prelight. Techvis translated the desired screen image into stage layouts, robot moves, actor rigs and LED playback, because the physical camera often had to move around a relatively stable performer to create the apparent zero-gravity motion designed in animation. Preserve those stages as distinct: previs decides story, framing and timing; prelight solves the virtual illumination; techvis makes the plan shootable; principal photography records performance and selected practical elements; final VFX rebuilds the world at finished quality. The 20-by-10-foot Light Box used 196 LED panels with 4,096 bulbs each to reproduce changing color, intensity and direction from Earth, sun and virtual surroundings on faces. It also gave actors moving visual references, but its coarse imagery was lighting and orientation material, not the final in-camera space background. Bot & Dolly motion-control robots moved an ARRI ALEXA around performers with pre-programmed paths while other rigs, including a twelve-wire system, addressed shots needing more of the body. ARRI's own history identifies ALEXA capture with Master Prime lenses; do not turn that bounded equipment record into a claim that every finished pixel was photographed through that package. Mark Sanger says the film was blocked in editorial eighteen months before shooting, that there was no conventional coverage, and that practical performances were selected and integrated back into evolving animation. Editing therefore happened before, during and after photography: a near-locked plan made the shoot possible, while performance takes and the interaction between picture edit and VFX still reshaped the finished film. Preserve the sound system as equally upstream. Glenn Freemantle began with a 45-minute previs in December 2010 and established the contact-and-vibration rule: external events in vacuum are silent unless transmitted through a touched object, suit, breath, heartbeat, radio or interior atmosphere. Skip Lievsay spatialized dialogue with bodies and screen geography rather than fixing every voice to the center channel, while Steven Price's score used manipulated orchestral and electronic materials as part of the moving spatial field. Gravity was initially mixed in 7.1 and extended into Dolby Atmos; do not imply Atmos created the underlying concept after the fact. AFI verifies Cuarón and Jonás Cuarón as writers, Alfonso Cuarón and David Heyman as producers, Lubezki as cinematographer, Cuarón and Sanger as editors, Andy Nicholson as production designer and a 91-minute runtime. Keep awards and Venice circulation as reception evidence rather than proof of method. Do not call the Light Box a modern LED-volume background system, do not say the actors simply floated, do not claim the whole film was motion capture, do not erase practical capsule/interior work, do not confuse prelight with final rendering, and do not present simulated zero gravity or the film's orbital geography as documentary proof of scientific accuracy.",
    requiredChoicesSeed: {
      screenplay: ["survival_path_as_spatial_problem", "long_take_information_design", "previs_as_editorial_blueprint", "performance_beats_before_final_image", "no_false_scientific_documentary_claim"],
      camera: ["alexa_master_prime_boundary", "robot_motion_control", "lightbox_face_photography", "actor_camera_inverse_motion", "prelight_to_techvis_translation", "no_false_all_pixels_photographed_claim"],
      editing: ["eighteen_month_preblock", "no_conventional_coverage", "previs_edit_lock", "performance_take_integration", "vfx_edit_feedback_loop", "stereo_version_tracking"],
      sound: ["contact_vibration_rule", "vacuum_silence", "breath_heartbeat_interior", "spatial_dialogue", "score_sound_coordination", "seven_one_to_atmos_boundary"],
      themes: ["film_history", "2013", "gravity", "alfonso_cuaron", "jonas_cuaron", "david_heyman", "emmanuel_lubezki", "tim_webber", "mark_sanger", "andy_nicholson", "sandra_bullock", "framestore", "previsualization", "prelight", "techvis", "light_box", "led_lighting", "bot_and_dolly", "motion_control", "arri_alexa", "master_prime", "face_capture", "cgi_environment", "stereoscopy", "glenn_freemantle", "skip_lievsay", "steven_price", "contact_sound", "dolby_atmos", "runtime_boundary"],
    },
    learningGoals: [
      "Explain why Gravity is a VFX-led production-system case rather than merely a film with many effects shots.",
      "Distinguish creative previs, digital prelight, techvis, principal photography and final VFX as separate production stages with different decisions.",
      "Explain why making the entire film in previs turned visualization into Cuarón's editorial and greenlight instrument rather than a disposable planning aid.",
      "Use Framestore's three-month opening-shot block and roughly two-year visualization process as bounded project evidence, not a universal previs schedule.",
      "Explain how long-take design makes timing, screen direction, eyelines and performance beats interdependent before photography.",
      "Preserve Mark Sanger's evidence that the film was blocked in editorial eighteen months before shooting and had no conventional coverage.",
      "Explain why an advanced edit was necessary for the Light Box, robot camera paths, actor cues and VFX work to remain synchronized.",
      "Keep preplanned production distinct from immutability: performance selections and VFX/editorial feedback continued to reshape the film after photography.",
      "Explain digital prelight as Lubezki and Framestore's simulation of light behavior in the virtual scene, not as the final rendered image.",
      "Explain techvis as the translation from desired screen-space action into safe, executable stage, camera, light and performer movement.",
      "Describe the Light Box as an LED illumination and actor-orientation system, not as a modern in-camera LED background volume.",
      "Use the verified 20-by-10-foot, 196-panel, 4,096-bulb-per-panel boundary without turning engineering counts into the historical argument by themselves.",
      "Explain why moving a robot-mounted camera and animated light around a relatively stable actor can create apparent zero-gravity movement without inverting performer strain.",
      "Keep the twelve-wire rig and practical capsule/interior work visible alongside the face-in-CG Light Box method.",
      "Preserve Framestore's bounded claim that, in the majority of shots, faces were the principal photographed elements while suits and space environments were CG.",
      "Do not infer that photography was irrelevant: face exposure, color, focus, expression, eyelines and exact motion-control timing had to match the virtual world.",
      "Use ARRI's ALEXA and Master Prime record as an acquisition boundary without claiming that all finished imagery came from the camera package.",
      "Explain how actors used LED imagery as moving reference for virtual objects and surroundings that would only be finished months later.",
      "Treat Andy Nicholson's production design as extending across practical interiors and virtual spacecraft/environment construction rather than disappearing into VFX.",
      "Explain why zero-gravity animation required both physical reference and deliberate departure from weight-trained animation habits.",
      "Keep stereoscopic intent separate from photographic capture: CG could be rendered natively in stereo while other imagery was converted and integrated.",
      "Explain why performance takes were selected and composited into the existing animation before further editorial and VFX refinement.",
      "Preserve sound's early role: Freemantle designed and mixed a 45-minute previs before ordinary principal photography began.",
      "Explain the contact-and-vibration rule: vacuum carries no airborne effects, but a character can hear vibration through touched structures, suit and body.",
      "Distinguish external vacuum silence from breath, heartbeat, radio, capsule atmosphere, score and contact-transmitted sound.",
      "Explain Lievsay's spatial-dialogue strategy in which voices follow bodies and scene geography instead of remaining fixed in the center channel.",
      "Treat Price's score and sound design as coordinated spatial materials while preserving their distinct authorship and functions.",
      "Keep the original 7.1 mix and later Atmos extension distinct: Atmos expanded placement but did not retroactively invent the contact-sound concept.",
      "Use AFI's 91-minute runtime and principal credits while keeping Venice opening and awards in reception history rather than production proof.",
      "Compare Gravity with Avatar: both integrate virtual planning and performance, but Gravity often moves camera, light and CG world around photographed faces rather than centering performance-capture characters.",
      "Compare Gravity with The Social Network: both require disciplined digital coordination, but Gravity locks editorial into previs, robotics, LED light and CG construction rather than a live-action RED-to-conform pipeline.",
      "Compare Gravity with A Separation: both engineer apparent immediacy, yet one hides planning inside handheld 35mm locations while the other exposes planning as a prerequisite for nearly every photographed and synthetic element.",
    ],
    phases: [
      { id: "spatial_script", label: "Turn survival beats into a continuous spatial route", player_task: "Map character position, velocity, orientation, oxygen, radio contact and destination through every long take so suspense remains legible before any final environment exists." },
      { id: "previs_edit", label: "Make the film in previs as the first editorial system", player_task: "Block camera, action, dialogue and duration in a complete animated edit that can guide greenlight, performance, lighting, stage engineering and final shot construction." },
      { id: "long_take_lock", label: "Lock enough timing to make the impossible shoot executable", player_task: "Commit the long-take handoffs and critical beats before photography while marking the limited places where performance selection or later VFX can still reshape timing." },
      { id: "digital_prelight", label: "Prelight the virtual orbit with Lubezki", player_task: "Simulate sun, Earth bounce, darkness and moving environmental color on the previs so the photographed faces will receive lighting that belongs to the future CG world." },
      { id: "techvis_translation", label: "Translate the screen image into stage mechanics", player_task: "Convert previs and prelight into robot trajectories, Light Box playback, actor orientation, rig geometry, lens clearance and safe stage layouts rather than asking performers to reproduce impossible screen motion literally." },
      { id: "performance_cues", label: "Give actors exact virtual geography and beats", player_task: "Walk Sandra Bullock and George Clooney through the previs, provide moving LED reference and rehearse timed eyelines, hands and dialogue while protecting emotional performance inside the technical constraints." },
      { id: "lightbox", label: "Drive face lighting with the 20-by-10-foot LED Light Box", player_task: "Program the 196-panel Light Box from prelight data to reproduce changing direction, color and intensity on the actors, using its imagery for illumination and orientation rather than as the final background." },
      { id: "robot_camera", label: "Move the ALEXA around the performer with synchronized robotics", player_task: "Run the Bot & Dolly motion-control camera path in sync with Light Box playback and the actor's cues, validating speed, stopping distance and safety before each performance take." },
      { id: "face_capture", label: "Photograph the human performance that survives the CG rebuild", player_task: "Capture exposed, focused faces and precise expression timing with the verified ALEXA/Master Prime boundary while retaining tracking, eyeline and light information for final suit and environment integration." },
      { id: "practical_rigs", label: "Use wire and practical interior methods where faces are not enough", player_task: "Deploy the twelve-wire rig and practical capsule or station elements for shots requiring body rotation, contact or usable interior surfaces without pretending one zero-gravity technique solves every sequence." },
      { id: "cg_world", label: "Build suits, spacecraft, Earth and debris as photographed space", player_task: "Refine animation, geometry, materials, atmosphere, cloth, reflections and destruction from previs quality to final imagery while preserving the established camera, performance and lighting logic." },
      { id: "zero_g_animation", label: "Remove terrestrial weight cues without removing readable motion", player_task: "Use physics reference and astronaut consultation to sustain momentum, counter-rotation and contact behavior, then keep character action clear enough that the audience can follow danger and intention." },
      { id: "stereo", label: "Carry depth intent through native CG stereo and conversion", player_task: "Track convergence, screen plane, scale and comfort across rendered and converted material so stereoscopy supports isolation and spatial orientation without being mistaken for the live-action camera format." },
      { id: "performance_edit", label: "Select takes inside the prebuilt animation", player_task: "Choose practical performances, matte them over the animated cut and evaluate how expression and timing change the scene before issuing tightly tracked editorial updates to VFX." },
      { id: "vfx_edit_loop", label: "Keep picture edit and VFX from outrunning each other", player_task: "Annotate every timing or animation change, update the shared cut and propagate consequences across lighting, simulation, sound and stereo so no department builds against a stale version." },
      { id: "sound_previs", label: "Design the sound law on the 45-minute previs", player_task: "Establish the contact, vibration, radio, breath, heartbeat and silence rules before principal photography so image timing, performance and later sound recording share the same point of audition." },
      { id: "contact_sound", label: "Hear vacuum events only through character contact", player_task: "Build impacts and machinery from contact recordings and body-borne vibration when Stone touches the source, withholding ordinary airborne effects when no physical transmission path exists." },
      { id: "spatial_mix", label: "Move dialogue, effects and Price's score through the theater", player_task: "Attach voices to bodies and scene geography, coordinate Freemantle's design with Price's manipulated score, finish the 7.1 logic and extend it into Atmos without sacrificing clarity or the vacuum boundary." },
      { id: "method_boundary", label: "Describe the hybrid method without inventing a single-tech miracle", player_task: "Document which pixels, performances, rigs, lights, cameras, interiors, stereo stages and sounds are practical or synthetic, and keep awards, scientific plausibility and later LED-volume practice outside claims the production evidence cannot prove." },
    ],
  },
] as const;

export function mergeChapterEighteenGravityExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenGravityExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_gravity_verified",
      source: { list_id: "manual_chapter_eighteen_gravity_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
