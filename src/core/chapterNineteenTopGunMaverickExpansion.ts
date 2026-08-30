import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenTopGunMaverickExpansionDefinitions = [
  {
    id: "scenario_top_gun_maverick_2022",
    title: "Top Gun: Maverick",
    originalTitle: "Top Gun: Maverick",
    aliases: ["Top Gun Maverick"],
    year: 2022,
    titleType: "Movie",
    runtimeMins: 131,
    directors: ["Joseph Kosinski"],
    genres: ["Action", "Drama"],
    sourceId: "paramount_top_gun_maverick_2022",
    sourceUrl: "https://www.paramountpictures.com/movies/top-gun-maverick",
    scenarioType: "industrial_scale_technical_us_navy_aerial_production_sony_venice_6k_rialto_six_camera_fa18_cockpit_navair_engineering_actor_camera_operation_real_flight_multi_platform_aerial_capture_800_hour_editorial_vfx_practical_digital_hybrid_mask_dialogue_dolby_imax_darkstar_skunk_works_2022",
    premise: "Build Top Gun: Maverick as Chapter 19's industrial-scale/technical rotation case by treating aircraft, performers, camera engineering, Navy safety approval, editorial, VFX and sound as one coordinated production system rather than repeating the slogan that the flying is simply 'real.' Paramount records Joseph Kosinski's 131-minute feature, while BBFC records distinct 130-minute 2D and 2D IMAX cinema versions, so runtime and exhibition variants must remain versioned rather than collapsed. American Cinematographer documents Claudio Miranda ASC's Sony VENICE 6K production, including a six-camera F/A-18F cockpit configuration with standard VENICE bodies and Rialto sensor extensions, compact E-mount lenses, internal ND, and separate forward- and actor-facing views. NAVAIR engineers had to approve the system: cockpit hardware was selectively removed, custom plates and housings were engineered, ejection paths had to remain clear, and the rigs were subjected to shock, vibration and wind-tunnel testing. The same source documents exterior aircraft mounts plus dedicated aerial platforms including an L-39 CineJet, a Phenom 300 with Shotover systems and an H125 helicopter, while ground-to-air units used very long lenses. Actors could not be treated as passive subjects once airborne. Production reporting and crew interviews document a months-long flight-training program and a workflow in which actors entered F/A-18Fs behind Navy pilots, ran rehearsed scenes, checked practical details and triggered the camera system themselves because the director and camera crew could not ride with them or monitor a live feed. Production sound mixer Mark Weingarten separately documents a Navy-approved in-flight dialogue path through the survival-vest/oxygen-mask communications connection, first through wireless recording and then Lectrosonics PDR recorders synchronized to picture; he reports that the in-flight dialogue ultimately came from this production system rather than being rebuilt through looping. The result generated an editorial problem as large as the capture problem: Kosinski and editor Eddie Hamilton describe roughly 800 hours of footage, with Hamilton embedded near the aerial unit so material could be reviewed quickly, organized and used to plan further sorties. VFX supervisor Ryan Tudhope and Kosinski make the essential boundary explicit: real aerial plates remained the photographic foundation, but Method Studios and additional vendors performed substantial digital aircraft work, environment work, cleanup, cosmetic work and complex sequence construction. The film therefore cannot be taught as 'no CGI'; it is a practical-digital hybrid whose VFX were designed to inherit real light, motion, atmosphere and aircraft photography. Lockheed Martin separately documents Skunk Works collaboration on the fictional Darkstar design and build, demonstrating that even a short concept-aircraft sequence combined production design, aerospace engineering knowledge and physical fabrication. Company 3 credits Stefan Sonnenfeld for color and finishing, while ASC records dual 2.39:1 and 1.90:1 IMAX framing and Sony VENICE as the camera platform. The Chapter 19 production lesson is coordination under constraints: Navy operational priorities, aircraft safety, actor tolerance, fixed airborne exposure, multiple camera platforms, enormous footage volume, editorial feedback, VFX continuity, synchronized production sound and premium-format delivery all interact. Exact sortie-by-sortie Navy schedules, every camera body and lens serial, complete codec/frame-rate/media settings, full aerial camera count on every day, all actor training hours, classified or unpublished NAVAIR engineering documentation, complete VFX shot/vendor allocation, full digital asset topology, exact DI transforms for every theatrical master, complete production-sound metadata, full ADR ledger outside the documented in-flight claim, detailed music recording workflow, insurance terms, Navy reimbursement structure and final financing/recoupment remain outside the verified layer unless title-specific public evidence establishes them.",
    requiredChoicesSeed: {
      screenplay: ["legacy_sequel_without_replication", "mission_geography_readability", "performance_and_action_interlock", "131_minute_paramount_runtime_anchor", "exhibition_versioning_boundary"],
      camera: ["sony_venice_6k", "rialto_extension_system", "six_camera_fa18f_cockpit", "navair_engineered_mounts", "real_flight_aerial_platforms", "fixed_airborne_exposure", "imax_1_90_and_scope_2_39"],
      editing: ["aerial_editorial_embedded_near_unit", "roughly_800_hours_footage", "sortie_feedback_loop", "real_plate_vfx_integration", "company3_finish"],
      sound: ["survival_vest_mask_dialogue_capture", "lectrosonics_pdr_inflight_recording", "timecode_sync", "inflight_dialogue_production_recorded", "dolby_atmos_delivery"],
      themes: ["film_history", "2022", "top_gun_maverick", "joseph_kosinski", "claudio_miranda", "industrial_scale_technical", "navy", "navair", "sony_venice", "rialto", "fa18", "aerial_cinematography", "actor_training", "production_sound", "eddie_hamilton", "ryan_tudhope", "visual_effects", "practical_digital_hybrid", "darkstar", "skunk_works", "imax", "chapter19"]
    },
    learningGoals: [
      "Explain why Top Gun: Maverick is Chapter 19's industrial-scale/technical rotation case rather than merely an example of blockbuster spectacle.",
      "Use Paramount's 131-minute record as the main runtime anchor while keeping BBFC's 130-minute 2D and IMAX cinema versions as explicit version evidence.",
      "Identify Joseph Kosinski as director and Claudio Miranda ASC as cinematographer without collapsing camera engineering, aerial coordination, editing, sound and VFX into director-only authorship.",
      "Identify Sony VENICE as the principal digital cinema platform and explain why the detachable Rialto sensor system mattered inside the F/A-18F cockpit.",
      "Explain the documented six-camera cockpit configuration as a spatial coverage system rather than a generic multi-camera claim.",
      "Distinguish standard VENICE bodies from Rialto sensor extensions inside the cockpit.",
      "Explain why compact E-mount lenses and VENICE internal ND were production-enabling choices under ejection-path and clearance constraints.",
      "Explain NAVAIR's role as engineering and safety authority for camera installation rather than treating Navy cooperation as a promotional footnote.",
      "Identify shock, vibration and wind-tunnel testing as concrete validation steps for flight-mounted camera equipment.",
      "Explain why selectively removing nonessential cockpit hardware created space without implying filmmakers could alter flight-critical systems at will.",
      "Distinguish cockpit interior rigs, exterior F/A-18 mounts, air-to-air camera aircraft, helicopter platforms and ground-to-air telephoto units.",
      "Explain why multiple aerial platforms solve different speed, endurance, angle and lens problems instead of duplicating coverage.",
      "Explain fixed airborne exposure as a planning constraint when the cinematographer cannot ride with the actor or continuously adjust the cameras.",
      "Use Miranda's backlight strategy to connect sun position, flight path, terrain and exposure planning.",
      "Explain why a real-flight performance workflow required actors to become limited camera operators once airborne.",
      "Identify the actor-triggered camera system as a production-control handoff created by the physical impossibility of sending the camera crew into the F/A-18F with them.",
      "Explain why rehearsals on the ground had to encode eyelines, dialogue, body position, camera triggering and flight choreography before takeoff.",
      "Treat months-long actor flight training as performance and production preparation rather than proof that actors piloted the Navy jets during photographed scenes.",
      "Distinguish the Navy pilot flying the aircraft from the actor performing and operating the recording controls in the rear seat.",
      "Explain how production sound had to coexist with oxygen masks, survival gear, aircraft communications and foreign-object-damage constraints.",
      "Identify the survival-vest communications connection as the documented path used to access mask-microphone dialogue.",
      "Identify Lectrosonics PDR recorders and picture-sound timecode synchronization as title-specific in-flight sound evidence.",
      "Explain the evidentiary difference between production-recorded in-flight dialogue and a general claim that the entire feature used no ADR.",
      "Explain why roughly 800 hours of photographed material transformed aerial cinematography into an editorial data-management problem.",
      "Explain why Eddie Hamilton's proximity to the aerial unit enabled footage review to feed back into subsequent flight planning.",
      "Treat sortie planning, capture, ingest, editorial review and later sorties as a feedback loop rather than a linear shoot-then-edit pipeline.",
      "Reject the claim that real aircraft photography means the final aerial sequences contain no visual effects.",
      "Explain practical-digital hybridity as the use of real motion, light, atmosphere and performance plates that are then extended, modified, cleaned or re-authored through VFX.",
      "Identify Ryan Tudhope as overall VFX supervisor and Method Studios as the lead vendor while keeping the full vendor shot allocation unresolved.",
      "Explain why digital aircraft assets and substitutions can preserve the photographic credibility of real aerial plates instead of negating them.",
      "Distinguish heavy 3D work, 2D graphics, cosmetic work, cleanup and environment modification as different VFX problem classes.",
      "Explain Darkstar as a production-design and engineering-collaboration case supported by Lockheed Martin Skunk Works rather than as evidence of a real operational aircraft.",
      "Explain why a physically fabricated Darkstar element can coexist with digital effects and still remain a useful production-design teaching case.",
      "Identify Company 3 and Stefan Sonnenfeld as the documented color/finishing layer without inventing unpublished LUTs or transform settings.",
      "Identify the film's 2.39:1 and 1.90:1 IMAX framing strategy and keep framing from being confused with camera sensor resolution.",
      "Explain premium-format delivery as a downstream constraint that can influence acquisition and framing choices but does not prove every shot used identical framing or lens coverage.",
      "Separate production engineering evidence from marketing language such as 'IMAX quality' or 'real flying' whenever the underlying technical record is more precise.",
      "Explain how Navy operational needs constrained the film's schedule and why production could not simply commandeer aircraft or airspace.",
      "Treat safety approval, actor tolerance, daylight, weather, terrain, aircraft availability and editorial need as interacting scheduling constraints.",
      "Keep exact Navy reimbursement rates and contractual arrangements outside the verified craft layer unless primary documentation is intentionally added.",
      "Keep complete camera body/lens serials, codecs, frame rates, media configuration and every exterior mount unresolved beyond the documented package.",
      "Keep full VFX shot counts by vendor, asset topology, software versions and replacement ratios unresolved unless production or vendor evidence establishes them.",
      "Keep complete DI transforms, every theatrical master, final conform architecture and archival deliverables unresolved beyond credited finishing and documented aspect ratios.",
      "Keep the exact full-film ADR ledger separate from the documented claim that in-flight dialogue was production-recorded through the mask/vest system.",
      "Build a closing production audit that can distinguish what was physically flown, what was photographed, what performers controlled, what Navy engineers approved, what editorial shaped, what VFX changed and what remains unknown."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Top Gun evidence hierarchy", player_task: "Separate studio metadata, ASC craft reporting, Navy/NAVAIR engineering records, department interviews, vendor records and secondary reporting before promoting claims." },
      { id: "runtime_versioning", label: "Lock runtime and versions", player_task: "Use Paramount's 131-minute record as the main anchor while tracking BBFC 130-minute cinema and IMAX variants separately." },
      { id: "navy_constraints", label: "Model Navy operational constraints", player_task: "Plan production around Navy aircraft, personnel, airspace and operational priorities rather than assuming film scheduling has priority." },
      { id: "cockpit_engineering", label: "Engineer the F/A-18F cockpit", player_task: "Create camera positions only after flight-critical hardware, clearance and ejection-path constraints are mapped with NAVAIR." },
      { id: "six_camera_layout", label: "Build six-camera cockpit coverage", player_task: "Use the documented combination of VENICE bodies and Rialto extensions to cover actor performance and forward flight geography." },
      { id: "lens_clearance", label: "Protect lens and ejection clearance", player_task: "Select compact lenses and internal ND so camera hardware stays within the approved cockpit envelope." },
      { id: "qualification_testing", label: "Qualify the flight rigs", player_task: "Require NAVAIR shock, vibration and wind-tunnel validation before treating cockpit or exterior mounts as flight-ready." },
      { id: "exterior_mounts", label: "Plan exterior aircraft cameras", player_task: "Use approved exterior housings and positions as a separate coverage layer from the cockpit system." },
      { id: "air_to_air", label: "Assign air-to-air platforms", player_task: "Match CineJet and Phenom/Shotover platforms to speed, endurance and shot-design requirements rather than using one aircraft for every aerial problem." },
      { id: "helicopter_layer", label: "Use helicopter contrast", player_task: "Deploy the H125/Shotover layer when a slower camera platform makes fighter speed legible." },
      { id: "ground_to_air", label: "Build ground-to-air coverage", player_task: "Use long-lens ground positions to add spatial scale and tracking views that cockpit and chase aircraft cannot supply." },
      { id: "sun_path", label: "Plan the sun and flight path", player_task: "Map terrain, weather and flight direction so actor-facing cameras can preserve the intended backlight before exposure is locked." },
      { id: "actor_training", label: "Train performers for airborne production", player_task: "Prepare cast for G-load, scene continuity, eyelines, practical checks and recording-control responsibilities before F/A-18F flights." },
      { id: "ground_rehearsal", label: "Rehearse the cockpit scene on the ground", player_task: "Encode dialogue, eyelines, body position, camera timing and flight beats before the actor is isolated from the directing crew in the air." },
      { id: "camera_handoff", label: "Hand camera control to the actor", player_task: "Use the synchronized trigger only after the actor can execute the scene and recording procedure without an onboard camera operator." },
      { id: "mask_sound", label: "Capture dialogue through survival gear", player_task: "Route mask-microphone audio through the approved survival-vest connection without interfering with oxygen or aircraft communications." },
      { id: "pdr_recording", label: "Record synchronized in-flight sound", player_task: "Use the documented PDR/timecode workflow as a self-contained airborne sound path coordinated with picture capture." },
      { id: "fod_minimization", label: "Minimize foreign-object risk", player_task: "Reduce loose equipment and redundant audio hardware when FOD risk outweighs the benefit of extra recording paths." },
      { id: "sortie_ingest", label: "Ingest every sortie quickly", player_task: "Move multi-camera aerial material into editorial fast enough to determine what coverage is missing before subsequent flights." },
      { id: "embedded_editor", label: "Embed editorial near aerial production", player_task: "Keep Eddie Hamilton's review loop close to the flying unit so captured material can affect future shot requests." },
      { id: "footage_scale", label: "Manage the 800-hour footage problem", player_task: "Treat hundreds of hours of multi-camera footage as a logging, comparison, continuity and story-construction problem rather than raw abundance." },
      { id: "action_edit", label: "Construct readable aerial action", player_task: "Build geography and emotional beats from many real-flight angles instead of selecting shots only for maximum kinetic intensity." },
      { id: "vfx_plate_strategy", label: "Define the real-plate VFX strategy", player_task: "Use real aerial photography as motion/light reference while allowing digital aircraft, environments and cleanup where story or safety requires them." },
      { id: "vendor_handoffs", label: "Coordinate VFX vendors", player_task: "Separate lead-vendor 3D work, additional vendor contributions, graphics and cosmetic tasks while preserving shared editorial targets." },
      { id: "darkstar", label: "Design and build Darkstar", player_task: "Use Skunk Works collaboration as a production-design engineering input without confusing the fictional aircraft with a public real-world program." },
      { id: "color_finish", label: "Finish at Company 3", player_task: "Preserve credited color and finishing responsibility while keeping unpublished grading transforms and final-master internals unresolved." },
      { id: "imax_scope", label: "Protect dual framing", player_task: "Audit compositions for 2.39:1 and 1.90:1 IMAX presentation without assuming every shot shares identical sensor coverage." },
      { id: "hybrid_boundary", label: "Audit practical versus digital claims", player_task: "For each aerial beat, distinguish real aircraft/performance plates from digital replacement, augmentation, cleanup and environment work." },
      { id: "unknowns", label: "Maintain technical unknowns", player_task: "Keep undocumented serials, codecs, full sortie logs, VFX allocation, DI transforms, contracts and complete ADR metadata outside the verified layer." },
      { id: "delivery_review", label: "Audit the complete Top Gun production system", player_task: "Verify Navy constraints, camera engineering, actor handoff, aerial capture, production sound, editorial feedback, VFX hybridity, Darkstar fabrication, finishing, versioning and unknowns before Production Verification." }
    ]
  }
] as const;

export function mergeChapterNineteenTopGunMaverickExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenTopGunMaverickExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_top_gun_maverick_verified",
      source: { list_id: "manual_chapter_nineteen_top_gun_maverick_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
