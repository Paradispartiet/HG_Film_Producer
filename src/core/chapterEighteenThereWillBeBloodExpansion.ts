import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenThereWillBeBloodExpansionDefinitions = [
  {
    id: "scenario_there_will_be_blood_2007",
    title: "There Will Be Blood",
    originalTitle: "There Will Be Blood",
    aliases: [],
    year: 2007,
    titleType: "Movie",
    runtimeMins: 158,
    directors: ["Paul Thomas Anderson"],
    genres: ["Drama"],
    sourceId: "bfi_there_will_be_blood_2007",
    sourceUrl: "https://www.bfi.org.uk/film/a36f4303-906f-55a0-a906-c4116a9faebe/there-will-be-blood",
    scenarioType: "usa_marfa_anamorphic_35mm_panavision_photochemical_practical_period_town_oil_derrick_fire_pyro_2007",
    premise: "Build There Will Be Blood as a source-first Chapter 18 Production Case about a 2007 US feature in which Paul Thomas Anderson, cinematographer Robert Elswit ASC, production designer Jack Fisk, editor Dylan Tichenor, costume designer Mark Bridges and their collaborators constructed an early-20th-century oil world through location choice, built geography, anamorphic 35mm photography, photochemical finishing, practical fire effects and tightly integrated sound and score. BFI and AFI identify the 158-minute film, Anderson as director and screenwriter, Daniel Day-Lewis and Paul Dano in principal roles, and the principal producing context. American Cinematographer documents Anderson's decision to shoot anamorphic rather than Super 35, Panavision Panaflex Platinum and Millennium XL cameras, modified C-Series and E-Series anamorphic lenses, Super High Speed lenses, anamorphized spherical SP lenses and a vintage 43mm Pathé-derived lens, with Kodak Vision2 50D 5201 for day work and Vision2 200T 5217 for night work. ASC also records a fully photochemical workflow with printed dailies and no digital intermediate, while allowing a small number of digital effects for tasks such as multiplying oil wells or removing modern landscape elements. Marfa, Texas doubled for turn-of-the-century Bakersfield because the ranch allowed long views with little modern contamination; Fisk laid out the church, Sunday ranch, railroad, town and oil field as one physical geography, and later accounts describe Little Boston as a built town whose relationship to the railroad came from observing Marfa itself. The oil-derrick fire is treated as a high-risk special-effects operation rather than a generic spectacle beat: ASC records an approximately 80-foot pine derrick, multiple protected and unattended cameras, a practical fuel jet, real fire, an ILM-assisted initial explosion, environmental soil testing, remote pumping and an unplanned same-night collapse after the structure could not safely be left smoldering. The player must coordinate period research, location geography, construction, anamorphic lens testing, slow-stock exposure, practical fire safety, environmental controls, performance, editorial continuity, sound editing and Jonny Greenwood's score while keeping undocumented per-shot focal lengths, exposure settings, camera counts outside named setups, exact VFX totals and generalized claims about all period-production practice outside the verified layer.",
    requiredChoicesSeed: {
      screenplay: ["oil_adaptation_boundary", "plainview_character_system", "period_research_boundary", "runtime_version_boundary", "dialogue_silence_structure"],
      camera: ["anamorphic_35mm_primary", "panavision_modified_lens_sets", "vision2_50d_day", "vision2_200t_night", "photochemical_no_di", "marfa_360_geography", "derrick_multi_camera_fire", "vintage_43mm_boundary"],
      editing: ["geography_before_coverage", "fire_sequence_continuity", "long_take_to_cut_handoff", "performance_axis", "photochemical_dailies_feedback"],
      sound: ["industrial_drilling_sound", "fire_event_sound", "period_ambience", "sound_editing_boundary", "greenwood_score_boundary"],
      themes: ["film_history", "2007", "there_will_be_blood", "paul_thomas_anderson", "robert_elswit", "jack_fisk", "dylan_tichenor", "mark_bridges", "jonny_greenwood", "marfa", "anamorphic_35mm", "panavision", "kodak_vision2", "photochemical", "practical_fire", "oil_derrick", "period_town", "environmental_safety"]
    },
    learningGoals: [
      "Explain There Will Be Blood as a coordinated production system rather than only as a story of oil, religion and ambition.",
      "Identify Paul Thomas Anderson as director and screenwriter and preserve Upton Sinclair's Oil! as adaptation provenance rather than a scene-by-scene production blueprint.",
      "Use the institutional 158-minute record as the playable runtime anchor while keeping alternate public runtimes as version provenance.",
      "Identify Robert Elswit as cinematographer, Jack Fisk as production designer and Dylan Tichenor as editor from authoritative records.",
      "Identify Mark Bridges as costume designer and treat wardrobe as period-world construction rather than decorative surface.",
      "Identify Jonny Greenwood's score as an authored musical layer distinct from production sound and sound editing.",
      "Explain why Marfa, Texas could double for historical California through horizon control, railroad access and minimal modern contamination.",
      "Explain Fisk's layout of church, ranch, railroad, town and oil field as production geography even when the film avoids obvious establishing diagrams.",
      "Describe Little Boston as a built period town informed by observation of Marfa's relationship to the railroad.",
      "Explain why production design, blocking and cinematography had to share the same physical map before coverage decisions were made.",
      "Identify anamorphic 35mm as the primary capture strategy rather than Super 35 or digital acquisition.",
      "Record Panaflex Platinum and Millennium XL bodies as documented camera systems without assuming one body for every shot.",
      "Distinguish modified Panavision C-Series and E-Series lenses from the Super High Speed and anamorphized SP options used for specific visual needs.",
      "Treat the vintage 43mm Pathé-derived lens as a special option, not the film's default lens.",
      "Explain how extensive lens testing was used to control flare, contrast, softness, vignetting and period feeling.",
      "Record Kodak Vision2 50D 5201 as the documented day stock and Vision2 200T 5217 as the documented night stock.",
      "Explain why slow stock and day-exterior production made scheduling, sun position and exposure discipline part of production planning.",
      "Explain that printed dailies and a photochemical finish created a different feedback loop from a digital-intermediate workflow.",
      "State explicitly that ASC records no digital intermediate for the film.",
      "Separate the small number of documented digital effects from the primarily photographed and physically constructed production world.",
      "Model the mine sequences as a combination of real location work and a separate built mine set rather than one homogeneous place.",
      "Explain why camera and lighting safety in the mine had to account for actors working far below overhead rigs.",
      "Describe the oil derrick as a practical pine structure and a central production-design object rather than a postproduction replacement.",
      "Explain why the derrick burn required special-effects, camera, stunt, wardrobe, fire and environmental teams to operate as one safety system.",
      "Record the practical fuel jet and real fire while keeping the ILM-assisted initial explosion separate from the rest of the pyro sequence.",
      "Explain why remote pumping and spark control were safety-critical for petroleum-based effects.",
      "Explain why soil testing before and after the burn was part of the production's environmental accountability.",
      "Describe the use of simulated non-toxic fluid before fuel as a way to protect the ground during setup and testing.",
      "Explain why an unplanned same-night derrick collapse changed coverage, continuity and editorial options.",
      "Model magic-hour versus night matching as an editorial and photographic consequence of a one-time practical event.",
      "Explain why fire-lit reverses create both visual authenticity and severe limits on actor, crew and camera placement.",
      "Treat flameproofed wardrobe and crew fire-protection suits as distinct safety measures with different exposure zones.",
      "Explain how practical fire color on faces differs from recreating the same effect entirely with artificial lighting.",
      "Connect period costume, local extras and heat exposure to scheduling, continuity and performer welfare.",
      "Explain why background performers must support the same period and behavioral system as principal cast rather than draw attention to themselves.",
      "Keep Daniel Day-Lewis's character preparation and wardrobe choices separate from claims about a universal acting method for the production.",
      "Identify Dylan Tichenor's editorial role while keeping cinematography, production design, sound and effects as separate upstream handoffs.",
      "Explain how long-duration staging and selective cutting can preserve the feeling of physical labor and geography.",
      "Use Academy film-editing recognition only as reception evidence, not as a substitute for production-process documentation.",
      "Separate industrial drilling sound, dialogue, ambience, effects editing, re-recording and Greenwood's score as distinct sound layers.",
      "Explain Greenwood's process of writing substantial music to the film's world and story rather than only composing one cue per finished scene.",
      "Keep score authorship separate from claims about Academy original-score eligibility or award status unless directly sourced.",
      "Explain why a period-production case must distinguish historical research used by filmmakers from independent historical truth about early oil capitalism.",
      "Reject unsupported claims about exact per-shot focal lengths, T-stops, shutter angles, filters, camera bodies or stock pushes unless title-specific evidence establishes them.",
      "Reject unsupported claims about total VFX-shot count, exact number of cameras across the whole production or digital replacement of practical sets.",
      "Connect source uncertainty to production decisions: when a parameter is not documented, keep it unknown instead of filling the gap with a plausible industry default.",
      "Explain why There Will Be Blood is historically useful in Chapter 18 despite its photochemical capture: digital convergence did not erase mature analogue production systems, and the film demonstrates an intentionally photochemical countercurrent inside the 2000s.",
      "Build a production plan that protects landscape, performers and crew while preserving a one-time practical fire event and a coherent period geography."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the evidence hierarchy", player_task: "Separate BFI/AFI identity and credits, ASC camera and effects evidence, Jack Fisk design testimony, Academy reception records and Greenwood's score testimony before converting details into production facts." },
      { id: "adaptation_boundary", label: "Set the adaptation boundary", player_task: "Use Oil! as literary provenance while keeping the screenplay's specific construction under Anderson's credited adaptation." },
      { id: "period_research", label: "Lock the period-research boundary", player_task: "Use historical reference to build a credible production world without treating the film as an independent historical authority on oil capitalism." },
      { id: "marfa_location", label: "Choose Marfa geography", player_task: "Prioritize open horizons, railroad access and the ability to shoot multiple directions without modern contamination." },
      { id: "world_layout", label: "Lay out the production world", player_task: "Place church, ranch, railroad, town and derrick so blocking and camera geography remain coherent even when the film avoids explanatory master shots." },
      { id: "little_boston", label: "Build Little Boston", player_task: "Translate period research and Marfa's railroad relationship into a functional one-street town that can support actors, extras, vehicles and camera movement." },
      { id: "costume_world", label: "Build wardrobe continuity", player_task: "Track workwear, hats, wear, dust, heat and class distinctions while preserving repeatability across the schedule." },
      { id: "anamorphic_tests", label: "Test anamorphic families", player_task: "Compare modified C-Series, E-Series, Super High Speed, anamorphized SP and the vintage 43mm option for flare, contrast, softness and focus behavior before assigning them." },
      { id: "camera_bodies", label: "Configure camera bodies", player_task: "Plan Panaflex Platinum and Millennium XL use without turning the documented body list into a per-shot claim." },
      { id: "day_stock", label: "Plan day stock", player_task: "Use Vision2 50D 5201 as the documented day stock and schedule around the exposure demands of broad exterior work." },
      { id: "night_stock", label: "Plan night stock", player_task: "Use Vision2 200T 5217 as the documented night stock while keeping unverified push-processing or exposure-index claims open." },
      { id: "photochemical_dailies", label: "Build the dailies loop", player_task: "Plan printed dailies and a photochemical review path instead of assuming digital onset or DI feedback." },
      { id: "no_di_finish", label: "Protect photochemical finishing", player_task: "Keep negative, timing and print decisions legible and separate the few digital effects from an otherwise no-DI workflow." },
      { id: "mine_location", label: "Stage the real mine", player_task: "Coordinate actor movement, limited access and safe overhead lighting in the documented mine location." },
      { id: "mine_set", label: "Build the second mine", player_task: "Use the separate tall built set where control and access are needed, preserving continuity with the real mine without claiming they are one location." },
      { id: "derrick_build", label: "Build the practical derrick", player_task: "Treat the pine derrick as a one-time physical effects asset whose construction, camera access and collapse behavior must be planned together." },
      { id: "fire_environment", label: "Clear the environmental gate", player_task: "Test soil before the burn, contain fuel, prove post-burn conditions and keep the production accountable for contamination risk." },
      { id: "fuel_system", label: "Engineer the fuel jet", player_task: "Use high-volume remotely activated pumping, spark control and ignition redundancy before bringing cast or cameras into exposure zones." },
      { id: "simulated_oil", label: "Test with simulated oil", player_task: "Run the water-based non-toxic substitute first so timing and nozzle behavior can be rehearsed without dropping fuel onto the ground." },
      { id: "fire_camera_map", label: "Map fire cameras", player_task: "Separate operated cameras, protected firebox/crash-box positions and no-operator zones around the derrick before ignition." },
      { id: "fire_wardrobe", label: "Protect performers and wardrobe", player_task: "Coordinate flameproofed costume, distance, heat exposure and escape routes separately from crew Nomex protection." },
      { id: "initial_explosion_vfx", label: "Isolate the digital explosion layer", player_task: "Keep the ILM-assisted initial explosion distinct from the photographed fuel jet, burning derrick and practical collapse." },
      { id: "one_time_event", label: "Treat the burn as one-time", player_task: "Prioritize irreplaceable coverage because the wooden structure may not survive for a planned second night." },
      { id: "collapse_decision", label: "Call the collapse", player_task: "Let safety authority override the shot list when the smoldering structure can no longer be trusted to remain standing." },
      { id: "continuity_repair", label: "Repair fire continuity", player_task: "Reconcile magic hour, full night, actor reverses and missing planned angles without pretending the event can be recreated identically." },
      { id: "performance_geography", label: "Protect performance geography", player_task: "Keep Plainview, Eli, workers and background performers spatially legible within the built landscape and hazardous work zones." },
      { id: "industrial_sound", label: "Build industrial sound", player_task: "Separate drilling machinery, footsteps, wind, dialogue and impact detail before sound editing and mix decisions." },
      { id: "greenwood_score", label: "Shape the score layer", player_task: "Use Greenwood's documented story-and-scenery-driven writing process as a musical strategy without confusing score with location sound." },
      { id: "editorial_handoff", label: "Hand off to editorial", player_task: "Track geography, exposure changes, fire-state continuity, performance axes and one-time-event limitations for Dylan Tichenor's cut." },
      { id: "reception_boundary", label: "Separate production from reception", player_task: "Use Academy recognition for cinematography, editing, art direction, sound editing and picture as downstream evidence, not proof of undocumented methods." },
      { id: "unknowns_register", label: "Maintain the unknowns register", player_task: "Leave undocumented per-shot focal lengths, T-stops, filters, camera counts, exact VFX totals and exposure settings unresolved until title-specific evidence supports them." }
    ]
  }
] as const;

export function mergeChapterEighteenThereWillBeBloodExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenThereWillBeBloodExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_there_will_be_blood_verified",
      source: { list_id: "manual_chapter_eighteen_there_will_be_blood_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
