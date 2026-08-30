import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenTitaneExpansionDefinitions = [
  {
    id: "scenario_titane_2021",
    title: "Titane",
    originalTitle: "Titane",
    aliases: [],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 108,
    directors: ["Julia Ducournau"],
    genres: ["Drama", "Horror", "Sci-Fi"],
    sourceId: "festival_cannes_titane_2021",
    sourceUrl: "https://www.festival-cannes.com/en/f/titane/",
    scenarioType: "auteur_festival_french_belgian_body_horror_alexa_mini_lf_zeiss_supreme_prime_spherical_large_format_precise_preplanned_light_colour_camera_ronin_technocrane_magnetic_handoff_location_fire_station_practical_prosthetics_silicone_latex_schedule_constraint_selective_vfx_mac_guff_layered_editing_m141_grade_2021",
    premise: "Build Titane as Chapter 19's auteur/festival rotation case by treating Julia Ducournau's body-horror authorship as a coordinated production system rather than reducing the film to shock imagery. Cannes records the 2021 France-Belgium production at 108 minutes and its Palme d'Or, with Ducournau as director and screenwriter and Kazak Productions as the production contact. Cinematographer Ruben Impens SBC describes a deliberately modern, saturated and contrasty large-format image built with ARRI ALEXA Mini LF and ZEISS Supreme Prime spherical lenses, chosen for wide-angle definition, fast apertures and close-focus flexibility. The visual system was heavily planned: Ducournau and Impens worked scene by scene through light, angles and colour contrasts; the film alternates handheld proximity with stylized static or mechanically choreographed shots rather than using movement opportunistically. The opening car-show oner demonstrates this precision: B-camera operator Baptiste Nicolaï describes a Ronin-to-Technocrane handoff using an electronic magnet, rehearsed with dancers and Agathe Rousselle's double before principal photography. Cinematography World records a forty-day summer-2020 shoot, chiefly on French locations, including an old squat building redressed as the fire station, followed by roughly two weeks of grading with Peter Bernaers at M141 in Paris. Ducournau's practical-effects method is equally structural. In interviews she explains that Olivier Afonso and Atelier 69 developed silicone and latex prosthetics through laboratory tests; by the final transformation Rousselle could be covered in prosthetics from face to thighs, and application or repair time became a daily scheduling constraint. Ducournau emphasizes that prosthetics matter not only as visible effects but as physical companions to performance. This practical layer did not exclude digital work: she credits Mac Guff and Martial Vallanchon for visual effects, including the final scene, and separately explains that the nose-breaking gag combined a prosthetic performance setup with VFX joining two shots. Editorial authorship begins before the cutting room. Ducournau identifies editor Jean-Christophe Bouzy as a long-term collaborator brought into story-structure discussions during writing; she describes abandoning a conventional three-act scheme for a layered form whose baroque surface is gradually stripped away. Music and montage participate in the same formal arc, moving from aggressive rhythmic/atonal material toward tonal and sacred closure. The case therefore teaches authored precision under bodily, spatial and time constraints: large-format capture, spherical lensing, planned colour and light, exact camera choreography, practical prosthetics, location transformation, performer embodiment, selective digital support, structural editing and finishing remain distinct evidence layers that converge in one film. Exact daily camera reports, every lens/focal-length use by shot, exposure/codec/media metadata, full prosthetic fabrication recipes and application times, complete VFX shot counts and vendor allocations, all M141 grading transforms, complete sound-recording and mix metadata, detailed score-recording workflow, final financing/recoupment and pandemic safety protocols remain outside the verified layer unless title-specific public evidence establishes them.",
    requiredChoicesSeed: {
      screenplay: ["layered_structure_over_three_act", "editor_as_structure_consultant", "body_transformation_arc", "108_minute_cannes_anchor"],
      camera: ["alexa_mini_lf", "zeiss_supreme_primes", "spherical_large_format", "planned_colour_contrast", "ronin_to_technocrane_handoff", "location_fire_station"],
      editing: ["jean_christophe_bouzy", "layer_shedding_structure", "camera_choreography_continuity", "m141_peter_bernaers_grade"],
      sound: ["music_as_structural_arc", "sound_detail_supports_body_horror", "full_sound_metadata_bounded"],
      themes: ["film_history", "2021", "titane", "julia_ducournau", "ruben_impens", "auteur_festival", "palme_dor", "large_format", "prosthetics", "olivier_afonso", "atelier_69", "mac_guff", "practical_digital_hybrid", "body_horror", "chapter19"]
    },
    learningGoals: [
      "Explain why Titane is Chapter 19's auteur/festival rotation case rather than simply a body-horror shock case.",
      "Use Cannes to anchor the film as a 2021 France-Belgium production with a 108-minute runtime and Palme d'Or status.",
      "Identify Julia Ducournau as director and screenwriter while preserving department-level authorship for camera, effects, editing and finishing.",
      "Identify Ruben Impens SBC as cinematographer and explain the choice of large-format digital capture.",
      "Identify ARRI ALEXA Mini LF and ZEISS Supreme Primes as the documented camera/lens combination.",
      "Explain why spherical rather than anamorphic lenses served the desired framing, close-focus and wide-angle definition.",
      "Explain how large-format wide lenses could preserve environmental detail while still allowing controlled fall-off.",
      "Treat saturated, contrasty colour as a planned visual system rather than a post-production accident.",
      "Explain Ducournau and Impens's scene-by-scene planning of light, angles and colour contrasts.",
      "Distinguish handheld proximity, stylized static framing and mechanically choreographed camera movement as purposeful modes.",
      "Explain why a second camera was used selectively rather than automatically when it compromised the primary composition.",
      "Reconstruct the opening car-show shot as a rehearsed Ronin-to-Technocrane handoff rather than a generic oner.",
      "Identify the electronic-magnet transfer as a grip/camera coordination solution whose success depended on precise timing.",
      "Explain why dancers, a double, camera operator, crane operator and grip had to rehearse one shared movement system.",
      "Use the forty-day summer-2020 shoot as a production-scale anchor without inventing undocumented daily schedules.",
      "Explain how an old squat building was transformed into the fire-station location while preserving the authenticity Impens sought from location work.",
      "Identify Peter Bernaers and M141 as the documented grading layer and keep unpublished grade transforms unresolved.",
      "Explain Olivier Afonso and Atelier 69's prosthetic work as a long-prepared practical-effects system.",
      "Identify silicone and latex tests as part of the prosthetic-development process.",
      "Explain how face-to-thigh prosthetics at the end of the film affected performer endurance and daily scheduling.",
      "Treat prosthetics as an acting interface as well as an effects surface, following Ducournau's own production logic.",
      "Explain why prosthetic repair time is a production constraint that affects coverage and schedule decisions.",
      "Reject a false practical-versus-digital binary: Titane combines prosthetics with selective visual-effects intervention.",
      "Identify Mac Guff and Martial Vallanchon as documented visual-effects collaborators.",
      "Explain the nose-breaking gag as two photographed actions joined with VFX while using a prosthetic nose for the aftermath.",
      "Keep the exact VFX shot count and full vendor division unresolved unless stronger vendor evidence is added.",
      "Explain Jean-Christophe Bouzy's role as editor and early structure consultant without misrepresenting consultation as co-writing pages.",
      "Explain Ducournau's move away from a conventional three-act scheme toward a layered structure.",
      "Connect the gradual shedding of visual/narrative excess to editing and scene order rather than treating it only as theme.",
      "Explain how music participates in the structural move from aggressive, atonal energy toward tonal closure.",
      "Separate documented musical-structural intent from undocumented scoring-session or mix-stage details.",
      "Explain why physical texture, wet surfaces, metal reflections and colour anchors are coordinated across design, lighting and cinematography.",
      "Treat the fire-station sequences as a combination of location choice, redressing, real-fire preparation, performance and camera planning.",
      "Keep complete stunt, fire-safety and practical-fire technical records outside the verified layer unless title-specific documentation is added.",
      "Separate festival recognition from craft evidence: the Palme d'Or establishes reception/position, not how a particular shot was made.",
      "Explain why Titane's visual precision is compatible with bodily instability and narrative unpredictability.",
      "Distinguish a documented production fact, a filmmaker interpretation and a finished-film formal reading when building the Film Study profile.",
      "Keep exact camera serials, daily focal-length logs, codec/frame-rate/media settings and exposure records unresolved.",
      "Keep complete prosthetic recipes, molds, application durations and repair logs unresolved beyond the published production testimony.",
      "Keep complete sound-recording, ADR, foley and final-mix metadata unresolved where the current source set is not department-specific.",
      "Build a closing audit that can distinguish planned image design, camera choreography, prosthetic embodiment, selective VFX, editorial structure, music function, finishing and unknowns."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Titane evidence hierarchy", player_task: "Separate Cannes metadata, cinematographer/AC testimony, director interviews, effects testimony and finishing evidence before promoting claims." },
      { id: "festival_anchor", label: "Lock the Cannes anchor", player_task: "Record 2021, France-Belgium, 108 minutes and Palme d'Or without treating the prize as evidence for technical claims." },
      { id: "visual_plan", label: "Design the visual system", player_task: "Map light, angle and colour contrasts scene by scene before choosing camera movement." },
      { id: "camera_package", label: "Choose large-format spherical capture", player_task: "Use ALEXA Mini LF and ZEISS Supreme Primes for the documented balance of definition, speed, close focus and spherical rendering." },
      { id: "depth_and_space", label: "Balance depth and environment", player_task: "Use wide focal lengths and controlled apertures so environmental detail remains present without flattening the characters." },
      { id: "movement_modes", label: "Assign camera movement modes", player_task: "Choose handheld, static or mechanical movement according to scene function instead of adding motion for production value." },
      { id: "opening_oner", label: "Rehearse the car-show oner", player_task: "Coordinate performer, dancers, double, Ronin operator, Technocrane, grip and magnet handoff as one timed system." },
      { id: "two_camera_boundary", label: "Protect the A-camera composition", player_task: "Use B camera only when it can contribute without forcing unacceptable compromise on the principal frame." },
      { id: "location_strategy", label: "Build from real locations", player_task: "Use location texture as part of the visual design and redress the squat building into the fire station without erasing its physical character." },
      { id: "fire_station", label: "Prepare the fire-station sequences", player_task: "Coordinate location, real-fire preparation, blocking, lighting and camera access before shooting the most demanding station material." },
      { id: "prosthetic_concept", label: "Define the bodily transformation", player_task: "Translate Ducournau's organic-metal references into prosthetic tests before final fabrication." },
      { id: "materials_tests", label: "Test silicone and latex", player_task: "Compare materials for believable skin-metal integration while preserving performance and repairability." },
      { id: "application_schedule", label: "Budget prosthetic application time", player_task: "Treat full-body application and touchups as schedule-critical work rather than invisible prep." },
      { id: "performance_interface", label: "Integrate prosthetics with performance", player_task: "Use the physical prosthetic presence to support Rousselle's embodiment instead of assuming all transformation can be deferred to post." },
      { id: "repair_contingency", label: "Plan prosthetic repairs", player_task: "Protect coverage and schedule against peeling or damage that may require lengthy repairs." },
      { id: "selective_vfx", label: "Define selective digital support", player_task: "Reserve VFX for joins, cleanup and transformations that strengthen rather than replace the practical foundation." },
      { id: "nose_gag", label: "Construct the nose-breaking gag", player_task: "Join separately photographed movement and prosthetic aftermath with VFX while preserving the tactile illusion." },
      { id: "final_transformation", label: "Coordinate the final transformation", player_task: "Combine extensive prosthetics, performance, photography and Mac Guff/Martial Vallanchon VFX without collapsing their contributions." },
      { id: "editorial_structure", label: "Build the layered structure", player_task: "Use Jean-Christophe Bouzy's structural collaboration and editing to replace a conventional three-act progression with controlled shedding of layers." },
      { id: "music_arc", label: "Shape the musical arc", player_task: "Track the move from aggressive rhythmic/atonal material toward tonal closure as part of the film's structural transformation." },
      { id: "colour_finish", label: "Finish the colour at M141", player_task: "Carry the planned warm/cool contrasts and saturation into the grade while keeping unpublished transforms outside the verified layer." },
      { id: "practical_digital_audit", label: "Audit practical and digital effects", player_task: "For each transformation beat, distinguish prosthetic material, photographed performance and digital intervention rather than labeling the scene with one effects category." },
      { id: "formal_reading_boundary", label: "Separate evidence from interpretation", player_task: "Mark where the source proves a production method and where the Film Study offers a formal reading of the finished result." },
      { id: "unknowns", label: "Maintain technical unknowns", player_task: "Keep daily camera reports, complete effect recipes, VFX counts, sound metadata and grade transforms unresolved unless stronger sources are added." },
      { id: "delivery_review", label: "Audit the complete Titane system", player_task: "Verify festival metadata, visual planning, camera package, choreography, locations, prosthetics, selective VFX, editorial structure, music function, finishing and bounded unknowns before Production Verification." }
    ]
  }
] as const;

export function mergeChapterNineteenTitaneExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenTitaneExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_titane_verified",
      source: { list_id: "manual_chapter_nineteen_titane_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
