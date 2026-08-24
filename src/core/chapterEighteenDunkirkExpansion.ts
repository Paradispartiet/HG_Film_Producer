import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenDunkirkExpansionDefinitions = [
  {
    id: "scenario_dunkirk_2017",
    title: "Dunkirk",
    originalTitle: "Dunkirk",
    year: 2017,
    titleType: "Movie",
    runtimeMins: 106,
    directors: ["Christopher Nolan"],
    genres: ["Action", "Drama", "History", "Thriller", "War"],
    sourceId: "kodak_dunkirk_imax_2017",
    sourceUrl: "https://www.kodak.com/en/motion/blog-post/dunkirk-imax/",
    scenarioType: "interlocking_land_sea_air_time_scales_imax_15perf_system65_5perf_photochemical_location_aerial_practical_vfx_sound_music_2017",
    premise: "Build Dunkirk as Chapter 18's photochemical large-format countercurrent inside digital convergence: a production in which screenplay geometry, real locations, aircraft and vessels, two 65mm capture systems, optical finishing, invisible digital effects, editing, sound and music had to function as one time-pressure machine. Christopher Nolan's DGA interview documents a precise mathematical structure developed before the script: fictional characters move through land, sea and air strands with different durations, minimal backstory and dialogue, and suspense created by compressing and elongating time until the strands converge. The same interview preserves performance and directing boundaries: young roles were cast with young performers, experienced and first-time screen actors worked inside a primarily nonverbal ensemble, and Mark Rylance used bounded improvisations between scripted boat scenes. Do not convert fictional compression into a claim that any protagonist is a literal historical eyewitness or that experiential force proves documentary accuracy. Kodak's direct Hoyte van Hoytema account records a 75-day shoot beginning in Dunkirk, roughly 6,000 extras, an estimated 75 percent 15-perf 65mm IMAX capture and the remainder 5-perf 65mm on the same Kodak stocks. ASC reports the IMAX share more conservatively at approximately 70 percent; preserve this as source variance rather than inventing a false exact percentage. The quiet 5-perf cameras were used primarily where production dialogue mattered because IMAX cameras were too noisy and Nolan wanted to avoid replacing dialogue later. That is a title-specific sound-and-camera allocation, not proof that 5-perf is aesthetically secondary or that all IMAX footage is silent. VISION3 250D was the daylight workhorse and VISION3 500T served night/tungsten work. Van Hoytema describes natural or available-light priorities, handheld operation with dolly-grip support, underwater housing, and special engineering for ships and aircraft; ASC adds Dan Sasaki's custom optics and periscope system. The production worked across Dunkirk's changing beach and tides, IJsselmeer sea material, Dorset aerial work and Los Angeles water stages, so geography, weather, marine safety, aircraft safety, period control and format logistics cannot be collapsed into a generic location shoot. FotoKem processed the negative and Dan Muscarella timed the photochemical finish; deliverables included 15-perf IMAX and 5-perf 70mm prints plus digital masters. Do not call the DCP the source master or confuse 65mm camera negative with 70mm exhibition prints. Large-format capture did not eliminate effects. Overall VFX supervisor Andrew Jackson documents 429 VFX shots by a 260-person team over roughly eighteen months, worked at 6.1K with 70mm and IMAX film-out review. Full-size aircraft, large miniatures, practical crashes, ships, hydraulic sets, explosions, smoke, painted cut-out soldiers and more than 1,000 foreground extras supplied photographed material; photogrammetry, LiDAR, crowd simulation, compositing, paint, environment cleanup and CG components extended or corrected it. The aerial unit used an Aerostar, helicopter and Yak-52 camera platforms, with previs as a practical choreography guide rather than a frame-by-frame command. Preserve the actual hybrid: 'as much in camera as practical' is not 'no CGI', and 429 VFX shots do not make the film a primarily synthetic production. Lee Smith's direct editing interview records an initially near-silent assembly because IMAX guide sound was largely unusable, early collaboration with Richard King, format-aware editorial tracking, weekly full-film screenings, and sound bridges withheld or introduced according to when the timelines converge. King began sound research and recording before photography, including Spitfires, period diesel boats, guns and surf, while the Stuka siren was designed rather than presented as an untouched archival recording. Nolan and Smith integrated Zimmer's score, King's effects and the edit through a ticking pulse, Shepard-tone logic, evolving component tracks and manipulated Elgar material. Keep these layers distinct even when they interlock: the ticking pulse is not production sync sound, Shepard-tone organization is not one continuously audible pure tone, designed Stuka terror is not an unmediated historical recording, and later awards do not validate the film's historical or technical claims.",
    requiredChoicesSeed: {
      screenplay: ["land_week_sea_day_air_hour", "fictional_composite_characters", "minimal_dialogue_backstory", "converging_suspense_structure", "historical_claim_boundary"],
      camera: ["imax_15perf_65mm", "system65_5perf_dialogue", "vision3_250d_workhorse", "vision3_500t_nights", "handheld_large_format", "custom_periscope_optics", "marine_aerial_safety"],
      editing: ["format_aware_conform", "near_silent_first_assembly", "weekly_whole_film_review", "timeline_convergence", "photochemical_finish", "imax_70mm_digital_deliverables"],
      sound: ["preproduction_field_recording", "designed_stuka_siren", "perspective_specific_sound", "ticking_pulse", "shepard_structure", "music_effects_integration", "elgar_transformation"],
      themes: ["film_history", "2017", "dunkirk", "christopher_nolan", "emma_thomas", "hoyte_van_hoytema", "lee_smith", "richard_king", "hans_zimmer", "nathan_crowley", "andrew_jackson", "dan_muscarella", "dan_sasaki", "imax_15_perf", "system_65_5_perf", "kodak_250d", "kodak_500t", "photochemical_finish", "land_sea_air", "one_week_one_day_one_hour", "practical_effects", "invisible_vfx", "aerial_unit", "location_logistics", "large_format_exhibition"],
    },
    learningGoals: [
      "Explain Dunkirk as a coordinated production system rather than reducing it to IMAX spectacle.",
      "Trace how the land, sea and air durations turn screenplay structure into a scheduling, coverage, editing and sound problem.",
      "Distinguish fictional composite characters from literal eyewitness biography and documentary evidence.",
      "Explain why minimal dialogue and backstory increase the burden carried by blocking, image, cut, effects and sound.",
      "Describe the ensemble's mix of young, first-time and experienced performers without treating nonverbal acting as absence of direction.",
      "Preserve Mark Rylance's bounded boat improvisations as additions between scripted scenes rather than an improvised-film claim.",
      "Distinguish 15-perf 65mm IMAX capture from 5-perf 65mm capture and 70mm exhibition.",
      "Explain the approximately 70-to-75-percent IMAX source variance instead of asserting a false exact ratio.",
      "Connect 5-perf dialogue photography to IMAX camera noise and the desire to minimize later dialogue replacement.",
      "Explain why that dialogue allocation does not make 5-perf imagery creatively unimportant.",
      "Identify VISION3 250D as the daylight workhorse and VISION3 500T as the night/tungsten stock without inventing a universal exposure recipe.",
      "Explain how handheld large-format work depended on grip support, short takes, underwater buoyancy and safety systems.",
      "Connect Dan Sasaki's custom lenses and periscope system to restricted aircraft interiors and subjective viewpoints.",
      "Map Dunkirk, IJsselmeer, Dorset and Los Angeles water-stage work to distinct production needs rather than one seamless real location.",
      "Explain how tide, weather, marine units, aviation and period control affected the schedule.",
      "Separate FotoKem negative processing and Dan Muscarella's photochemical timing from digital mastering and release versions.",
      "Explain why a DCP or IMAX Laser master is a deliverable rather than evidence of a digital intermediate source master.",
      "Reject the false opposition between practical photography and VFX in a film with 429 documented VFX shots.",
      "Trace how full-size aircraft, miniatures, practical crashes and digital corrections were combined.",
      "Explain how painted soldier cut-outs, foreground extras and CG crowd simulation operated at different viewing scales.",
      "Describe previs as a safety and choreography guide whose live-action execution remained responsive to unplanned events.",
      "Explain the 6.1K VFX and film-out review burden created by large-format resolution.",
      "Connect the near-silent first assembly to noisy IMAX guide tracks and early editorial sound construction.",
      "Explain how weekly full-film screenings protect the interlocking timeline structure from locally attractive but globally damaging cuts.",
      "Describe why sound bridges are withheld before timeline convergence and become available as temporal relations clarify.",
      "Distinguish recorded Spitfires, boats, guns and surf from designed, layered and perspective-shaped final effects.",
      "Explain why the Stuka siren acknowledges historical reference without pretending to be an untouched period recording.",
      "Describe the ticking pulse and Shepard-tone logic as organizational devices shared across edit, sound and score.",
      "Explain how Zimmer's score components, King's effects and Smith's cut were repeatedly rebuilt together rather than mixed as sealed departments.",
      "Treat the transformed Elgar material as an editorial-musical decision, not a claim that the historical evacuation carried its own score.",
      "Keep photochemical persistence distinct from nostalgia and avoid treating film capture as inherently more truthful than digital capture.",
      "Keep awards and reception downstream from production evidence and historical interpretation.",
      "Compare Dunkirk with Moonlight: both use format and sound constraints to protect performance, but one scales across large-format land/sea/air logistics while the other concentrates a one-camera digital workflow around intimate performance and place.",
      "Compare Dunkirk with Son of Saul: both restrict omniscient war imagery, but Dunkirk braids three geographies and durations while Son of Saul remains attached to one character through a single-lens 35mm rule.",
      "Separate documented workflow claims, aesthetic analysis and historical claims throughout the case.",
    ],
    phases: [
      { id: "history_boundary", label: "Define the historical and fictional boundary", player_task: "Map Operation Dynamo sources, then build fictional composite viewpoints that convey bounded experiences without claiming any protagonist is a literal witness." },
      { id: "time_geometry", label: "Lock land, sea and air durations", player_task: "Design one-week, one-day and one-hour strands whose pressure curves can converge while each remains spatially and causally legible." },
      { id: "nonverbal_script", label: "Write for image and sound", player_task: "Remove explanatory backstory that other departments can carry, while retaining the dialogue required for action, character and geography." },
      { id: "ensemble_cast", label: "Build the cross-experience ensemble", player_task: "Combine age-appropriate newcomers and experienced performers, plan nonverbal beats precisely and create bounded room for rehearsal discoveries." },
      { id: "format_test", label: "Test both large-format paths", player_task: "Compare 15-perf IMAX and 5-perf 65mm for resolution, camera noise, mobility, close work, dialogue and downstream conform before allocating scenes." },
      { id: "dialogue_allocation", label: "Protect production dialogue", player_task: "Use quieter 5-perf cameras where intelligible synchronous speech matters, without relegating those scenes to a secondary visual standard." },
      { id: "stock_plan", label: "Assign daylight and night stocks", player_task: "Use 250D as the daylight workhorse and 500T for night/tungsten requirements, then test matching and latitude in each large-format path." },
      { id: "location_matrix", label: "Separate location functions", player_task: "Assign Dunkirk, IJsselmeer, Dorset and Los Angeles water facilities to the beach, sea, air and sinking-ship problems they can safely solve." },
      { id: "tide_weather", label: "Schedule the real environment", player_task: "Build tide, wind, daylight, weather, crowd, period-dressing and marine-safety windows into the daily plan instead of treating nature as free production value." },
      { id: "handheld_support", label: "Mobilize the large-format camera", player_task: "Design grip support, restraint and underwater procedures that make handheld responsiveness possible without hiding the camera's mass or safety cost." },
      { id: "aircraft_optics", label: "Engineer the cockpit viewpoint", player_task: "Test custom lenses, periscope paths and mounts with aircraft specialists so the camera can enter restricted spaces without guessing at undocumented geometry." },
      { id: "aerial_previs", label: "Previsualize for safe live action", player_task: "Use previs to establish readable aerial beats, flight paths and safety coordination while allowing photographed weather and aircraft motion to reshape individual shots." },
      { id: "practical_elements", label: "Capture physical scale in layers", player_task: "Coordinate full-size aircraft and ships, large miniatures, practical explosions, hydraulic ship sections, extras, smoke and painted crowd fences as separate controllable elements." },
      { id: "vfx_plan", label: "Design invisible digital support", player_task: "Plan photogrammetry, LiDAR, crowd simulation, paint, compositing and CG corrections around photographed plates rather than claiming practical capture eliminates VFX." },
      { id: "large_format_review", label: "Review effects at release resolution", player_task: "Develop at 6.1K, inspect full-resolution quadrants, and budget 5-perf 70mm then 15-perf IMAX film-out cycles for effects that must survive giant-screen projection." },
      { id: "near_silent_assembly", label: "Cut without dependable guide sound", player_task: "Assemble image and structure from noisy IMAX material, create temporary orientation effects, and bring sound editorial in early enough to make screenings meaningful." },
      { id: "timeline_edit", label: "Protect three clocks in one cut", player_task: "Track format and chronology, screen the entire film weekly, and test every compression, extension and cross-cut against the final convergence." },
      { id: "sound_research", label: "Record the physical sound world", player_task: "Begin before photography and record aircraft, period diesel engines, guns, surf and environmental perspectives instead of relying on a generic war library." },
      { id: "stuka_design", label: "Construct historically bounded terror", player_task: "Use period reference to design the Stuka siren for subjective force while labeling it as a modern reconstruction rather than authentic sync or archive audio." },
      { id: "score_clock", label: "Build the shared pressure pulse", player_task: "Coordinate ticking, Shepard-like escalation, component score tracks and sound effects so tension can rise across different clocks without becoming an undifferentiated wall." },
      { id: "convergence_mix", label: "Let time strands meet sonically", player_task: "Keep spatial and temporal transitions distinct before convergence, then introduce bridges and rhythmic alignment only where the story's clocks genuinely meet." },
      { id: "photochemical_finish", label: "Conform and time the negative", player_task: "Coordinate FotoKem processing, optical conform and Dan Muscarella's color timing across 15-perf and 5-perf material while preserving format provenance." },
      { id: "release_versions", label: "Author format-specific deliverables", player_task: "Review 15-perf IMAX prints, 5-perf 70mm prints, IMAX Laser and standard DCP masters without calling every version identical or projecting later remastering backward." },
      { id: "method_audit", label: "Audit every realism claim", player_task: "Separate historical record, fictional compression, capture format, practical element, VFX intervention, sound reconstruction, score device, release format and later reception before final approval." },
    ],
  },
] as const;

export function mergeChapterEighteenDunkirkExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenDunkirkExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_dunkirk_verified",
      source: { list_id: "manual_chapter_eighteen_dunkirk_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
