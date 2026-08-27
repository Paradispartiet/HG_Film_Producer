import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenTreeOfLifeExpansionDefinitions = [
  {
    id: "scenario_tree_of_life_2011",
    title: "The Tree of Life",
    originalTitle: "The Tree of Life",
    aliases: ["Tree of Life"],
    year: 2011,
    titleType: "Movie",
    runtimeMins: 138,
    directors: ["Terrence Malick"],
    genres: ["Drama"],
    sourceId: "cannes_tree_of_life_2011",
    sourceUrl: "https://www.festival-cannes.com/en/f/the-tree-of-life/",
    scenarioType: "us_texas_35mm_65mm_imax_photochemical_available_light_spherical_documentary_method_nonprofessional_children_practical_digital_science_vfx_4k_di_2011",
    premise: "Build The Tree of Life as a source-first Chapter 18 Production Case about a 2011 American feature in which Terrence Malick, Emmanuel Lubezki, Jack Fisk, five credited editors and a distributed visual-effects team coordinated photochemical acquisition, available-light agility, documentary-style performance capture, period location design, nonlinear editorial assembly and a creation sequence that deliberately mixed photographed physical phenomena with scientific simulation and digital compositing. Festival de Cannes anchors the released feature at 138 minutes, credits Malick as writer-director, Lubezki as cinematographer, Fisk as production designer, Alexandre Desplat as composer, and Hank Corwin, Jay Rabinowitz, Mark Yoshikawa, Daniel Rezende and Billy Weber as editors. Lubezki's title-specific cinematography interview documents an acquisition system using 35 mm, regular 65 mm and IMAX film; ARRI LT and 235 cameras for the 35 mm work; a Panavision camera for 65 mm scenes; generally ARRI Master Prime spherical lenses; Kodak Vision2 500T 5218 and 200T 5217 stocks; a 1.85:1 release frame; and a preference for available light that still had two or three acknowledged exceptions, including an HMI-assisted church interior. The same testimony records an agile workflow in which scenes could be rewritten, moved or postponed rather than conventionally relit, Jack Fisk added windows to a principal house to create usable natural-light sources, six blocks of a Texas town were dressed for near-360-degree shooting, remote landscape units usually photographed on 35 mm, and Lubezki/Jörg Widmer exchanged remote iris control through extreme exposure changes. It also documents LaserPacific and EFilm as postproduction facilities and a full 4K DI path kept deliberately simple, without heavy secondary color correction. AFI's production record, drawing on studio production notes and contemporary reporting, identifies Smithville, Texas as the primary location, records three matched houses used as one dramatic home so production could shift with changing light, documents the dressing and physical alteration of neighborhood space, and states that the three young O'Brien brothers were non-actors selected after a year-long search among more than 10,000 children without conventional scripted auditions. Visual-effects supervisor Dan Glass documents a creation-sequence pipeline that cannot truthfully be reduced either to CGI or to no-CGI: Douglas Trumbull's Austin skunkworks generated fluid, dye, smoke, dry-ice, flare, high-speed and other photographed elements; additional plates came from real locations and scientific imagery; Dr. Volker Bromm and NCSA supplied a Population III star simulation; concept art translated scientific data into an aesthetic target; and Double Negative and other vendors composited and digitally constructed shots around those foundations. The player must therefore coordinate format provenance, available-light scheduling, exposure continuity, wide/spherical mobile camera work, period geography, nonprofessional-child performance, multi-editor handoff, 4K DI restraint, practical-effects experimentation, scientific-consultant boundaries and digital VFX integration while refusing unsupported shot-to-format attribution, claims that every scene used only natural light, claims that the creation sequence contains no CGI, exact total footage or shooting ratio, exact lens-to-shot mapping, unverified sound-workflow details, unverified edit ownership for individual sequences, and any conversion of scientific consultation into proof that the film is a scientific documentary.",
    requiredChoicesSeed: {
      screenplay: ["malick_screenplay_anchor", "personal_memory_boundary", "grace_nature_structure", "cosmic_family_intercut", "voiceover_fragmentation"],
      camera: ["35mm_65mm_imax_boundary", "arri_lt_235_35mm", "panavision_65mm", "master_prime_spherical", "kodak_5218_5217", "available_light_dogma", "limited_hmi_exceptions", "remote_iris_operation", "other_unit_format_boundary"],
      editing: ["five_editor_credit_integrity", "mark_yoshikawa_pull_together", "nonlinear_associative_structure", "cosmic_family_handoff", "4k_di_restraint", "shot_ownership_unknowns"],
      sound: ["desplat_credit_boundary", "classical_music_source_boundary", "dialogue_voiceover_environment_balance", "sound_workflow_unknowns"],
      themes: ["film_history", "2011", "tree_of_life", "terrence_malick", "emmanuel_lubezki", "jack_fisk", "hank_corwin", "jay_rabinowitz", "mark_yoshikawa", "daniel_rezende", "billy_weber", "alexandre_desplat", "35mm", "65mm", "imax", "photochemical", "available_light", "spherical_lenses", "4k_di", "smithville_texas", "nonprofessional_children", "douglas_trumbull", "dan_glass", "practical_effects", "digital_compositing", "scientific_simulation"]
    },
    learningGoals: [
      "Explain The Tree of Life as a coordinated production system rather than reducing it to Terrence Malick's visual style or the creation montage alone.",
      "Identify Terrence Malick as credited writer and director while keeping biographical parallels to his Texas childhood distinct from literal autobiography.",
      "Use the Cannes 138-minute record as the released-version anchor and keep later alternate or extended cuts outside this production case unless separately versioned.",
      "Identify Emmanuel Lubezki as director of photography and distinguish his title-specific testimony from generic descriptions of the later Malick-Lubezki style.",
      "Explain why the film belongs inside Chapter 18 even though principal live-action capture remained substantially photochemical during accelerating digital convergence.",
      "Identify the documented mix of 35 mm, regular 65 mm and IMAX acquisition while keeping shot-level format allocation unknown unless a source establishes it.",
      "Identify ARRI LT and 235 cameras as documented tools for the 35 mm work and avoid extending that hardware claim to every unit or effects element.",
      "Identify a Panavision camera as documented for 65 mm scenes while keeping the exact body model unknown unless a title-specific source establishes it.",
      "Identify ARRI Master Primes as the generally used spherical lens family and distinguish a general lens package from exact lens-to-shot mapping.",
      "Identify Kodak Vision2 500T 5218 and 200T 5217 as documented negative stocks and avoid inventing exposure indexes, push/pull processing or stock allocation by scene.",
      "Explain why the filmmakers chose spherical rather than anamorphic capture for this film and connect that choice to focus flexibility around moving children without turning it into a universal rule.",
      "Explain the 1.85:1 framing choice as a released-image parameter rather than evidence about every source element's native aspect ratio.",
      "Explain Lubezki and Malick's available-light method as a production discipline that changed scheduling, blocking, design and camera readiness.",
      "Reject the absolute claim that the feature used no artificial light: Lubezki explicitly describes two or three exceptions, including HMI light through church windows.",
      "Explain why a production may move, rewrite or postpone a scene instead of adding fixtures when available light is treated as a governing constraint.",
      "Explain how sun, wind, rain and changing weather could become photographed story material rather than continuity problems to eliminate.",
      "Explain why a small equipment footprint can increase camera mobility and make near-continuous shooting possible while increasing readiness demands on art, wardrobe and performers.",
      "Describe Lubezki and Jörg Widmer's remote-iris handoff as an exposure-control strategy for mobile shots that pass through radically different natural-light levels.",
      "Explain why an extreme iris change documented as an example should not be generalized into a claim about every moving shot.",
      "Identify Jack Fisk as production designer and explain how production design enabled the available-light camera strategy instead of functioning only as period decoration.",
      "Explain how adding windows to a principal house created usable natural-light sources without treating those modifications as conventional movie lighting.",
      "Explain how dressing multiple blocks of Smithville expanded shooting direction and reduced the need to hide modern intrusions shot by shot.",
      "Explain the three matched-house strategy as a way to follow changing light while preserving one dramatic home, without claiming three houses were newly constructed.",
      "Explain why removing or masking modern infrastructure is a production-design intervention with continuity, municipal and restoration consequences.",
      "Treat the transplanted live oak and other documented neighborhood alterations as examples of large-scale location design rather than as evidence that the whole town was rebuilt.",
      "Identify Smithville as the principal Texas location while preserving the distinction between family-drama locations and remote landscape or effects plates.",
      "Explain why landscape footage from Iceland, Palau, Hawaii, southern Chile and other locations can belong to the same film while carrying separate unit and format provenance.",
      "Preserve Lubezki's warning against diminishing remote landscape crews as merely 'second unit' while still tracking unit-specific evidence separately.",
      "Identify the three young O'Brien brothers as non-actors selected after a year-long search among more than 10,000 children according to production notes summarized by AFI.",
      "Explain why auditions without conventional script readings and restricted story knowledge can be performance methods, not evidence that the film had no screenplay.",
      "Explain how the children's natural personalities could inform characterization while keeping performer welfare, consent and direction responsibilities explicit.",
      "Distinguish documentary-style capture from documentary status: spontaneous behavior and mobile available-light photography do not make the family narrative nonfiction.",
      "Identify all five credited editors—Hank Corwin, Jay Rabinowitz, Daniel Rezende, Billy Weber and Mark Yoshikawa—and avoid assigning individual scenes to them without direct evidence.",
      "Use Mark Yoshikawa's account that several editors worked on the film and that he stayed from beginning to end to model editorial coordination without erasing the other four credits.",
      "Explain how a large, associative edit can coordinate childhood fragments, adult memory, cosmology, natural history and voice-over without requiring classical scene continuity.",
      "Treat the creation sequence as an integrated production/postproduction object rather than as an detachable effects reel.",
      "Identify Dan Glass as visual-effects supervisor and Douglas Trumbull as a key practical-effects consultant while preserving the larger vendor and artist network.",
      "Describe the Austin skunkworks experiments as photographed physical phenomena involving fluids, dyes, smoke, dry ice, flares, high-speed capture and other materials.",
      "Reject the simplification that the creation sequence was made without CGI: documented shots also used simulation, digital reconstruction, compositing and vendor work.",
      "Explain how practical photographed textures and digital compositing can be deliberately combined so that neither method alone defines the final image.",
      "Identify Dr. Volker Bromm's Population III work and NCSA simulation as a scientific-data foundation for specific early-universe imagery without generalizing that provenance to every cosmic shot.",
      "Explain why concept artists and VFX vendors can transform scientific data aesthetically while still preserving traceable scientific constraints.",
      "Keep Hubble/probe imagery, location plates, practical elements, simulations, digital creatures and compositing as distinct source classes in the effects provenance ledger.",
      "Explain why scientific advisers can constrain representation without converting a poetic feature into a scientific documentary or proving every cosmological image literally correct.",
      "Explain the 4K DI as a digital-convergence stage following photochemical capture and identify LaserPacific and EFilm as documented postproduction facilities.",
      "Describe the DI's reported restraint—no windows and no heavy secondary color correction—as an authored post strategy rather than as absence of digital postproduction.",
      "Explain why preserving photographed light in the DI requires color-management discipline even when the stated creative goal is minimal alteration.",
      "Identify Alexandre Desplat as credited composer while keeping the film's extensive pre-existing music and exact cue construction separate unless title-specific evidence is added.",
      "Keep production sound, sound editing, re-recording and music editorial details outside the verified technical layer when the current source set does not establish them.",
      "Use the 2011 Palme d'Or as reception evidence only, never as evidence for a production technique.",
      "Reject unsupported claims about a single camera format, universal natural-light purity, exact shooting ratio, total footage, exact shot-to-lens mapping, exact VFX shot counts or edit ownership by sequence.",
      "Connect uncertainty to production decision-making: preserve exact documented hardware where evidence is strong and leave shot-level allocation unknown where evidence stops.",
      "Build a production plan that protects child performers, available-light timing, neighborhood restoration, remote-unit safety, large-format stock handling, scientific provenance and cross-vendor VFX handoff without converting improvisation into disorder."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the evidence hierarchy", player_task: "Separate Cannes/AFI identity records, Lubezki's cinematography testimony, Fisk/location records, editor testimony and Dan Glass's VFX account before promoting details into production facts." },
      { id: "released_version", label: "Lock the released version", player_task: "Use the 138-minute Cannes version as the canonical production-case runtime and keep later cuts separately versioned." },
      { id: "personal_memory_boundary", label: "Bound autobiographical inference", player_task: "Use documented Texas-childhood parallels as context without treating the O'Brien family as a one-to-one biography of Malick." },
      { id: "format_matrix", label: "Build the format matrix", player_task: "Track 35 mm, regular 65 mm and IMAX as documented capture classes and refuse shot-level allocation without direct evidence." },
      { id: "camera_package", label: "Lock camera provenance", player_task: "Assign ARRI LT/235 to documented 35 mm work and a Panavision camera to documented 65 mm work while leaving unsupported model and unit details open." },
      { id: "lens_package", label: "Lock spherical lens provenance", player_task: "Use generally documented ARRI Master Primes as the lens-family anchor without inventing focal-length maps for scenes." },
      { id: "stock_package", label: "Lock negative stocks", player_task: "Track Kodak Vision2 5218 and 5217 as documented stocks while keeping exposure, processing and scene allocation unresolved." },
      { id: "aspect_ratio", label: "Protect framing provenance", player_task: "Keep the 1.85:1 release frame separate from the native geometry of large-format and effects source elements." },
      { id: "available_light", label: "Schedule around available light", player_task: "Treat changing sun and weather as schedule inputs; move, rewrite or defer scenes when the natural-light condition is wrong." },
      { id: "lighting_exceptions", label: "Register lighting exceptions", player_task: "Record the small number of acknowledged artificial-light exceptions, including the HMI-assisted church, instead of claiming absolute natural-light purity." },
      { id: "mobile_camera", label: "Keep the camera mobile", player_task: "Minimize equipment and maintain operator readiness so unplanned movement and fleeting environmental events can be photographed safely." },
      { id: "iris_handoff", label: "Engineer exposure handoff", player_task: "Coordinate remote iris control between Lubezki and Jörg Widmer for moving shots that traverse large exposure changes." },
      { id: "smithville_design", label: "Create a shootable town", player_task: "Dress a broad Smithville area, conceal period-breaking infrastructure and preserve restoration obligations so the camera can turn freely." },
      { id: "matched_houses", label: "Follow light across matched houses", player_task: "Use three houses dressed as one dramatic home to preserve continuity while moving the company to the best available light." },
      { id: "window_design", label: "Design natural-light apertures", player_task: "Use Fisk's documented added windows as production-design light sources rather than defaulting to hidden fixtures." },
      { id: "location_restoration", label: "Track physical interventions", player_task: "Log tree, fence, shed, utility and neighborhood modifications with permissions and restoration responsibilities." },
      { id: "child_casting", label: "Cast nonprofessional children", player_task: "Model the year-long search and non-scripted audition method while protecting child consent, education, working hours and guardian coordination." },
      { id: "restricted_script", label: "Control information without erasing agency", player_task: "Use restricted story knowledge only where justified by the documented performance method and keep child-performer welfare ahead of surprise." },
      { id: "documentary_capture", label: "Capture unrehearsed moments", player_task: "Keep camera and departments ready for spontaneous behavior without confusing documentary-style method with nonfiction status." },
      { id: "remote_units", label: "Track landscape units", player_task: "Preserve location, unit, format and operator provenance for remote landscape material instead of folding it into an anonymous second-unit bucket." },
      { id: "editorial_credits", label: "Protect five-editor credit", player_task: "Keep Corwin, Rabinowitz, Rezende, Weber and Yoshikawa visible and reject unsupported sequence ownership." },
      { id: "editorial_integration", label: "Coordinate the long editorial handoff", player_task: "Use Yoshikawa's beginning-to-end integration role as one documented handoff fact without diminishing the work of the other editors." },
      { id: "associative_structure", label: "Build associative continuity", player_task: "Coordinate family fragments, adult memory, cosmology, voice-over and natural-history imagery through recurrence and rhythm rather than only scene logic." },
      { id: "skunkworks", label: "Run practical VFX experiments", player_task: "Generate controlled fluid, dye, smoke, dry-ice, flare and high-speed elements with metadata so useful accidents remain traceable." },
      { id: "science_sources", label: "Lock scientific provenance", player_task: "Track which cosmic images derive from scientific simulations or institutional imagery and keep their scope distinct from artistic extrapolation." },
      { id: "population_three", label: "Translate Population III data", player_task: "Use the Bromm/NCSA simulation as the foundation for the documented first-star work, then record each artistic transformation applied downstream." },
      { id: "vfx_hybrid", label: "Integrate practical and digital VFX", player_task: "Combine photographed phenomena, location plates, simulations, CG, concept work and compositing while rejecting both all-CGI and no-CGI myths." },
      { id: "vendor_handoff", label: "Preserve vendor handoff", player_task: "Track in-house Austin work, Double Negative and other vendors by shot and source class so experimental provenance survives compositing." },
      { id: "science_boundary", label: "Keep science claims bounded", player_task: "Use adviser feedback and simulations as evidence for constrained representations, not as certification that the feature is a scientific documentary." },
      { id: "di_path", label: "Run the 4K DI", player_task: "Preserve the documented LaserPacific/EFilm 4K path and maintain traceability from photochemical originals to digital masters." },
      { id: "grade_restraint", label: "Protect photographed light in grade", player_task: "Honor the reported no-window/no-heavy-secondary approach while documenting every necessary departure rather than pretending grading did not occur." },
      { id: "music_boundary", label: "Separate score and source music", player_task: "Credit Alexandre Desplat while leaving exact pre-existing music cue provenance to a dedicated evidence layer." },
      { id: "unknowns_register", label: "Maintain the unknowns register", player_task: "Keep exact shot-format, shot-lens, exposure, total-footage, VFX-count, sound-chain and editor-to-sequence claims unresolved unless a title-specific source proves them." },
      { id: "chapter18_position", label: "Position the photochemical/digital hybrid", player_task: "Explain how photochemical capture, large-format imaging, 4K DI, digital compositing and scientific simulation coexist inside Chapter 18's digital-convergence history." }
    ]
  }
] as const;

export function mergeChapterEighteenTreeOfLifeExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenTreeOfLifeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_tree_of_life_verified",
      source: { list_id: "manual_chapter_eighteen_tree_of_life_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
