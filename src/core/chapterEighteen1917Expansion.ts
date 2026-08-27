import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteen1917ExpansionDefinitions = [
  {
    id: "scenario_1917_2019",
    title: "1917",
    originalTitle: "1917",
    aliases: [],
    year: 2019,
    titleType: "Movie",
    runtimeMins: 119,
    directors: ["Sam Mendes"],
    genres: ["Drama", "War"],
    sourceId: "bfi_1917_2019",
    sourceUrl: "https://www.bfi.org.uk/film/83d6a46e-e55d-5b93-a820-f23a96eb5c77/1917",
    scenarioType: "continuous_take_illusion_real_time_wwi_alexa_mini_lf_signature_primes_trinity_rehearsal_led_set_design_wireless_sound_hidden_stitches_vfx_2019",
    premise: "Build 1917 as a source-first Chapter 18 Production Case about how writing for apparent real time, months of rehearsal, set geometry, camera movement, lightweight large-format digital capture, performance timing, production sound, editorial seam design, practical effects and invisible VFX became one interdependent production system. BFI anchors the released 2019 feature at 119 minutes and credits Sam Mendes as director, Mendes and Krysty Wilson-Cairns as writers, Roger Deakins as cinematographer and the principal production team. Mendes and Wilson-Cairns designed the script around a continuous-journey idea, but the released film is not one literal take: the production created an illusion of continuity from multiple long takes and a major temporal break around Schofield's blackout. Motion Picture Association interviews document roughly four months of rehearsal in which actor timing, camera blocking and set length were solved together before construction. Dennis Gassner's production design therefore had to build trenches, bunkers, ruins, roads and village spaces to exact performance-and-camera durations rather than as static backgrounds. ARRI documents 1917 as the first feature to use prototype ALEXA Mini LF cameras, paired with ARRI Signature Primes and TRINITY stabilization. Deakins states that roughly 99 percent of the film used a 40 mm Signature Prime, with a 47 mm choice in the river and a 35 mm in the German basement; the player must preserve those as documented exceptions rather than invent a full lens-by-shot map. Camera movement passed through TRINITY, Steadicam-like operation, cranes, vehicles and other handoff systems, so the compact camera body and rig choreography were structural dependencies. Production sound mixer Stuart Wilson describes a site-specific wireless network, hundreds of meters of fiber in trenches, hidden antennas in sandbag-like housings and lavaliers integrated with costume because the camera could look in every direction and dialogue synchronization could not depend on ordinary boom positions. Editor Lee Smith participated in prep to help find and protect invisible transition points, then monitored incoming footage closely enough that weak material could trigger reshoots rather than being treated as infinitely repairable in post. Sound editor Oliver Tarney describes deliberately modulating density and silence so continuous visual motion did not become continuous sensory overload. VFX supervisor Guillaume Rocheron describes effects designed around the moving takes: stitching, set extensions, environmental work, plane transitions, river work and digitally completed architecture had to preserve camera geometry and motion rather than announce themselves as spectacle. The player must coordinate script timing, rehearsal, geography, art department dimensions, actor endurance, background action, camera handoffs, focus, wireless sound, weather/light continuity, practical explosions, stunts, prosthetics, editorial seam placement, VFX ownership, sound pacing and delivery while refusing unsupported exact total budget, exact shooting-day count, complete stitch count, full lens map, universal exposure settings, complete lighting inventory, exact rig geometry, proprietary camera handoff mechanics, complete radio-frequency map, every hidden-cut location, VFX vendor/shot totals, render settings, DI node graphs, sound hardware topology and final mix automation unless title-specific records establish them.",
    requiredChoicesSeed: {
      screenplay: ["real_time_structure", "continuous_journey", "two_soldier_mission", "blackout_time_break", "rehearsal_before_lock", "geography_drives_duration"],
      camera: ["alexa_mini_lf", "signature_primes", "40mm_primary", "47mm_river", "35mm_basement", "trinity", "camera_handoffs", "large_format_compact_body"],
      editing: ["lee_smith", "seams_designed_in_prep", "reshoot_over_patch", "hidden_stitches", "continuity_illusion", "vfx_editorial_handoff"],
      sound: ["stuart_wilson", "fiber_network", "hidden_antennas", "costume_lavs", "oliver_tarney", "density_and_release", "sync_priority"],
      themes: ["film_history", "2019", "1917", "sam_mendes", "krysty_wilson_cairns", "roger_deakins", "dennis_gassner", "lee_smith", "stuart_wilson", "oliver_tarney", "guillaume_rocheron", "world_war_one", "continuous_take_illusion", "real_time", "alexa_mini_lf", "signature_primes", "trinity", "large_format", "rehearsal", "production_design", "wireless_sound", "invisible_vfx", "digital_convergence"]
    },
    learningGoals: [
      "Explain 1917 as a coordinated writing, rehearsal, design, camera, performance, sound, editorial and VFX system rather than as a single-camera stunt.",
      "Use BFI's 119-minute record as the canonical runtime anchor and preserve alternate catalogue or exhibition timings only as version metadata.",
      "Identify Sam Mendes as director and co-writer with Krysty Wilson-Cairns while keeping Roger Deakins, Dennis Gassner, Lee Smith, Stuart Wilson and other department authors distinct.",
      "Explain why the script's apparent-real-time mandate changes production planning before principal photography rather than being an effect added after shooting.",
      "Distinguish the released film's continuous-shot illusion from a claim that the feature was captured as one literal unbroken take.",
      "Preserve the major temporal discontinuity around Schofield's blackout instead of describing the full 119 minutes as one uninterrupted real-time interval.",
      "Explain how roughly four months of rehearsal let actors, camera, art department, sound and assistant directors solve duration and movement before sets were finalized.",
      "Treat rehearsal timing as a measurement input for trench length, road length, doorway placement, stunt timing and background-action density.",
      "Explain why a set could not simply be shortened later without changing dialogue duration, actor pace and camera path.",
      "Identify Dennis Gassner's production design as moving-camera architecture rather than static historical decoration.",
      "Explain how battlefield research and large reference collections informed trench, bunker, ruin and village construction without turning reference quantity into proof of literal historical replication.",
      "Separate practical location geography from narrative geography: English and Scottish locations could stand in for the Western Front while still requiring internally coherent movement.",
      "Explain why every reset, explosion, background crossing and practical effect had to survive unusually long takes.",
      "Identify ALEXA Mini LF as the prototype large-format camera used for the feature and explain why compact form factor mattered to the camera-path design.",
      "Identify ARRI Signature Primes as the documented lens family and keep lens evidence title-specific.",
      "Use Deakins's statement that roughly 99 percent of the film used a 40 mm Signature Prime without converting that into an unsupported claim that every shot used 40 mm.",
      "Preserve the documented 47 mm river exception and 35 mm German-basement exception without inventing additional focal-length assignments.",
      "Explain why large-format capture and a relatively longer-lens feel could coexist with intimate moving-camera proximity.",
      "Identify TRINITY as a central stabilization system while preserving other rig and operator handoffs as separate movement solutions.",
      "Explain camera handoffs as choreography: body, operator, rig, focus, actor path and set clearance must all align at the transfer point.",
      "Reject a generic statement that all movement was handheld or all movement was Steadicam-like; the production used multiple support systems.",
      "Explain why camera size and weight were production-design variables when the lens had to travel through trenches, windows, vehicles and tight passages.",
      "Keep exact rig geometry, proprietary brackets, wire lengths and handoff hardware unresolved unless stronger camera-department records establish them.",
      "Explain why focus pulling on long moving takes is a planned performance task rather than a post-production correction.",
      "Treat weather and daylight continuity as scheduling constraints because adjacent apparent-continuity sections must join credibly.",
      "Separate documented camera system facts from unsupported universal ISO, shutter, aperture, filtration or white-balance values.",
      "Identify Stuart Wilson as production sound mixer and explain why a 360-degree moving camera reduces normal boom-placement options.",
      "Explain the trench fiber network as production infrastructure for robust radio/sound coverage rather than as a decorative technical detail.",
      "Explain why hidden antenna housings and costume-integrated lavaliers were coordinated with art and costume departments.",
      "Keep exact transmitter models, frequencies, recorder topology, microphone models and radio maps outside the locked layer unless title-specific sound records establish them.",
      "Explain why synchronized production dialogue remained a priority even in a film with extensive post sound and VFX.",
      "Identify Lee Smith as editor and explain why editing began during prep through seam planning, timing and risk identification.",
      "Explain why a hidden cut works best when movement, framing, lighting, texture and action all give the editor a motivated transition surface.",
      "Treat reshooting an inadequate long take as a legitimate production response rather than assuming every continuity problem should be repaired digitally.",
      "Keep the exact number and location of hidden cuts unresolved unless a title-specific authoritative breakdown establishes them.",
      "Explain how VFX stitching differs from ordinary montage: the objective is to preserve apparent continuous camera space and time across separately captured material.",
      "Identify Guillaume Rocheron's VFX supervision as integrated with production design and camera planning rather than downstream spectacle work.",
      "Explain set extension as a way to enlarge no-man's-land, village and environmental scale while matching practical camera perspective and motion.",
      "Explain why the plane sequence can combine practical and digital elements across a continuous transition without reducing the effect to one department.",
      "Keep exact VFX vendor shot totals, software versions, render settings, scan methods and compositing recipes unresolved unless stronger records establish them.",
      "Identify Oliver Tarney's sound-post role and explain why continuous camera motion does not require continuous maximum sound density.",
      "Explain sound contrast as pacing: quieter relational passages can create recovery space before later intensity returns.",
      "Separate production sound, sound editing/design, music and final rerecording rather than collapsing them into one generic sound layer.",
      "Explain why prosthetics, blood rigs and practical effects must be designed for duration, resetability and microphone compatibility in long takes.",
      "Treat actor stamina and repeatability as technical production constraints when performances involve long runs, crawls, water work or complex timing.",
      "Explain why background performers and vehicles must be choreographed to the same time map as leads and camera.",
      "Treat safety holds and failed practical effects as valid reasons to reset rather than rewarding completion of a take at unsafe cost.",
      "Separate historical research from production proof: authentic references do not establish the exact material, location or construction method of every object seen on screen.",
      "Explain 1917's Chapter 18 significance as a case where digital large-format capture, compact stabilization, wireless infrastructure and invisible VFX enabled a production form built around physical rehearsal and practical space.",
      "Contrast 1917 with effects-heavy digital cinema in which coverage is fragmented, showing that digital convergence can also support unusually continuous physical staging.",
      "Maintain an uncertainty register for exact total budget, shooting days, stitch count, complete lens map, exposure settings, lighting inventory, rig geometry, RF topology, VFX shot counts, DI settings and final mix automation.",
      "Build a closing production audit that checks runtime provenance, script-time logic, rehearsal evidence, set-length timing, camera/lens boundaries, handoff safety, sound infrastructure, editorial seams, VFX ownership and delivery state before verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the 1917 evidence hierarchy", player_task: "Separate BFI metadata, ARRI camera testimony, Mendes/Wilson-Cairns writing accounts, department interviews and later reception before promoting claims." },
      { id: "released_version", label: "Lock the 119-minute production anchor", player_task: "Use BFI's 119-minute version as canonical and preserve alternate timings only when tied to a specific version or exhibition record." },
      { id: "real_time_script", label: "Map the apparent-real-time script", player_task: "Break the story into continuous-duration sections and the blackout discontinuity before blocking sets or camera paths." },
      { id: "rehearsal_calendar", label: "Schedule the four-month rehearsal system", player_task: "Treat rehearsal as cross-department production rather than actor-only preparation." },
      { id: "floor_blocking", label: "Block performance before construction", player_task: "Measure dialogue, walking pace, pauses, action and camera movement on rehearsal floors before final set dimensions are approved." },
      { id: "set_length", label: "Convert time into set length", player_task: "Translate performance duration into trench, road, bunker and village dimensions while retaining reset and safety access." },
      { id: "historical_reference", label: "Audit WWI reference material", player_task: "Use photographs, museum material and battlefield research to guide design without claiming every built detail is a literal copy." },
      { id: "location_map", label: "Map practical location geography", player_task: "Track each English/Scottish location against the fictional route and the handoff needs between built and natural environments." },
      { id: "camera_prototype", label: "Protect the Mini LF prototype dependency", player_task: "Treat ALEXA Mini LF availability, backups and weight limits as risk items because the production used early prototype bodies." },
      { id: "lens_strategy", label: "Lock the documented lens boundaries", player_task: "Use 40 mm as the dominant documented lens while preserving the 47 mm river and 35 mm basement exceptions without inventing a full lens map." },
      { id: "large_format", label: "Model large-format depth and proximity", player_task: "Test blocking and focus for the Mini LF/Signature Prime combination instead of assuming a generic large-format look." },
      { id: "trinity", label: "Build TRINITY operating plans", player_task: "Assign TRINITY where its vertical precision and fluid movement solve the designed path, then define safe transitions to other support systems." },
      { id: "camera_handoffs", label: "Rehearse camera handoffs", player_task: "Choreograph operator, rig, lens, focus, actors, extras and set clearance at every transfer point before a full take." },
      { id: "focus_path", label: "Map focus as choreography", player_task: "Create repeatable distance marks and actor-path contingencies for long moving takes while keeping exact focus hardware unresolved." },
      { id: "weather_light", label: "Protect weather and light continuity", player_task: "Match adjacent apparent-continuity sections by sky, direction, intensity and atmosphere while preserving documented exceptions." },
      { id: "sound_network", label: "Design the trench sound network", player_task: "Plan fiber, radio coverage and receiver positions so dialogue remains stable while the camera sees in every direction." },
      { id: "hidden_antennas", label: "Integrate antennas with art department", player_task: "Hide mobile antenna infrastructure in period-compatible housings without compromising RF performance or camera sightlines." },
      { id: "costume_lavs", label: "Coordinate lavaliers with costume", player_task: "Build repeatable microphone placement into wardrobe while monitoring rustle, sweat, movement and continuity." },
      { id: "background_action", label: "Time background action", player_task: "Map extras, vehicles, animals and distant events to the same timecode logic as leads and camera." },
      { id: "practical_effects", label: "Integrate practical effects", player_task: "Place explosions, debris, blood and mechanical effects on a resettable timing plan with camera and performer safety gates." },
      { id: "prosthetics", label: "Design duration-safe prosthetics", player_task: "Test blood flow, appliance durability, reset time and microphone noise across the full length of the relevant take." },
      { id: "stunt_safety", label: "Gate stunt and water safety", player_task: "Allow a take to fail if performer, water, explosion, vehicle or rig safety margins are exceeded." },
      { id: "editorial_prep", label: "Place editorial inside prep", player_task: "Have editorial review timing and seam opportunities before production so impossible joins are discovered before expensive set completion." },
      { id: "seam_design", label: "Design invisible transition surfaces", player_task: "Use motivated occlusion, darkness, movement or geometry as candidate join points while keeping the exact final stitch inventory unresolved." },
      { id: "daily_review", label: "Review long takes immediately", player_task: "Escalate continuity, timing or performance defects while locations and departments can still repeat the sequence." },
      { id: "reshoot_gate", label: "Prefer robust reshoot over fragile patch", player_task: "If a long take is structurally weak, decide whether to reshoot rather than assuming post can repair every failure." },
      { id: "vfx_stitch", label: "Build continuity-preserving VFX stitches", player_task: "Track camera pose, lens, motion blur, light, texture and action across every approved digital join." },
      { id: "set_extensions", label: "Extend practical environments", player_task: "Use digital work to enlarge no-man's-land, ruins and village geography while matching the practical camera path." },
      { id: "plane_transition", label: "Coordinate the plane sequence", player_task: "Separate practical aircraft interaction, blue-screen/CG transitions, debris, fire, performance and final composite ownership." },
      { id: "sound_density", label: "Shape tension and recovery in sound", player_task: "Use Oliver Tarney's documented principle of reducing density after major peaks so continuous imagery still has dramatic breathing room." },
      { id: "music_sound_boundary", label: "Protect music/sound boundaries", player_task: "Keep score, production sound, designed effects, ambience and rerecording as distinct authored layers." },
      { id: "unknowns_register", label: "Maintain the 1917 unknowns register", player_task: "Track budget, shooting days, stitch count, full lens map, exposure, lighting inventory, rig geometry, RF map, VFX totals, DI nodes and final mix settings explicitly." },
      { id: "chapter18_position", label: "Position 1917 in digital convergence", player_task: "Explain how compact large-format capture, stabilization, wireless infrastructure and invisible VFX amplified a rehearsal-heavy physical production rather than replacing it." },
      { id: "delivery_review", label: "Audit the complete 1917 production system", player_task: "Verify runtime, real-time structure, rehearsal, set timing, camera/lens boundaries, handoff safety, sound infrastructure, editorial seams, VFX ownership and final delivery before closure." }
    ]
  }
] as const;

export function mergeChapterEighteen1917Expansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteen1917ExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_1917_verified",
      source: { list_id: "manual_chapter_eighteen_1917_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
