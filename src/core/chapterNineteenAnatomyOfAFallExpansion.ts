import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenAnatomyOfAFallExpansionDefinitions = [
  {
    id: "scenario_anatomy_of_a_fall_2023",
    title: "Anatomy of a Fall",
    originalTitle: "Anatomie d'une chute",
    aliases: ["Anatomy of a Fall", "Anatomie d'une chute"],
    year: 2023,
    titleType: "Movie",
    runtimeMins: 151,
    directors: ["Justine Triet"],
    genres: ["Drama", "Crime", "Mystery"],
    sourceId: "festival_cannes_anatomie_d_une_chute_2023",
    sourceUrl: "https://www.festival-cannes.com/en/f/anatomie-d-une-chute/",
    scenarioType: "auteur_festival_justine_triet_arthur_harari_les_films_pelleas_les_films_de_pierre_sandra_huller_milo_machado_graner_simon_beaufils_laurent_senechal_emmanuelle_duplay_alexa_mini_lf_hawk_v_lite_anamorphic_angenieux_optimo_24_290_rear_2x_anamorphic_35mm_2perf_tests_digital_film_emulation_chalet_alps_saintes_courthouse_two_camera_eight_day_courtroom_arrimax_gondola_sound_evidence_recorded_argument_single_flashback_diegetic_music_ambiguity_editorial_2023",
    premise: "Build Anatomy of a Fall as Chapter 19's auteur-festival case by treating Justine Triet's courtroom drama as a production system in which writing, architecture, sound evidence, performance, camera access, lighting logistics and editorial ambiguity continuously constrain one another. Festival de Cannes records the 2023 French feature at 151 minutes, directed by Justine Triet, written by Triet and Arthur Harari, photographed by Simon Beaufils, designed by Emmanuelle Duplay and edited by Laurent Sénéchal, with Julien Sicart, Fanny Martin and Jeanne Delplancq among the principal sound credits. The 151-minute Cannes record is the canonical playable runtime anchor; later distribution pages sometimes list 152 minutes, which is treated as release-context variance rather than a reason to rewrite the institutional Cannes record. Triet and Harari describe the screenplay as a portrait of a couple refracted through a French judicial process. The house was designed in the writing process as a story machine: the fall, window, floors, snow, interior distances and competing hypotheses had to remain spatially legible enough for investigators, lawyers, witnesses and the audience to construct incompatible narratives from the same architecture. Triet also researched French courtroom procedure so the production would not default to American television-court conventions. Sound was conceived during writing as evidence rather than decorative atmosphere. The film begins with sound before image; Samuel's loud looping music contaminates Sandra's interview; later a recorded marital argument is played in court and becomes the basis for the film's single major embodied flashback. Triet describes withholding images so sound could become a material through which characters and spectators seek truth while remaining unable to obtain certainty. The film therefore treats an audio recording as both documentary trace and incomplete narrative object. Cinematography had to preserve that instability. Simon Beaufils reports that the team first tested 35mm 2-perf and liked its grain and color, but production ultimately decided against shooting the feature on celluloid. A second round of tests therefore sought a digital path that could approach the desired 35mm texture. Principal capture used ARRI ALEXA Mini LF cameras with Hawk V-Lite anamorphic lenses; an Angénieux Optimo 24-290mm zoom with a 2x rear anamorphic adapter served as an important second-camera/long-lens option. This is not a generic large-format prestige look: the combination was chosen to preserve faces, movement and unstable observation while still allowing the crew to work quickly in difficult locations. Beaufils describes a method in which Triet prepared precise shot lists but deliberately allowed a controlled 'mess' on set, changing movement and framing as performances developed. The visual system therefore needs both prepared coverage and the capacity to discover shots during takes. Location constraints became camera and lighting constraints. Beaufils identifies the chalet in the Alps, roughly an hour from Grenoble, and the courthouse in Saintes near La Rochelle. He reports that the production had only eight days in the courthouse even though the original screenplay contained close to two hours of courtroom material, forcing a two-camera strategy there. The second camera was often on a tripod with the long Angénieux zoom and rear anamorphic adapter while the primary camera could move more freely. Gaffer Sophie Lelou describes six weeks of work in the mountain chalet, whose large windows exposed roughly 150 degrees of bright snowy exterior. To maintain exposure and directional light across the three-level house, the lighting team placed an ARRIMAX on a gondola about 45 meters high. This is a key production lesson: a naturalistic-looking mountain interior can require large engineered lighting infrastructure precisely because snow, windows and changing daylight make continuity difficult. Editing was involved before photography. Laurent Sénéchal says he read multiple script versions and raised questions about point of view, especially the central argument flashback. He also explains that Triet does not work from a conventional full assembly: he had to organize material quickly and build sequences from performance-driven takes rather than presenting a first chronological assembly. Courtroom coverage often came from two cameras and relatively few takes, which made reaction selection, axis and duration central editorial decisions. The editorial goal was not to solve the case but to guide the audience left and right without making Sandra either obviously manipulative or obviously innocent. Sénéchal describes the argument transition as a carefully staged handoff: the courtroom first establishes the audio as evidence, then the film moves into images whose status remains a cinematic construction rather than objective access to the past. Daniel's later memory images are treated differently, tied to his testimony and subjective reconstruction. The edit also redistributed material, including family photographs, a silent laptop image of Samuel and Daniel's piano, to make the dead husband present while preserving the film's structural absences. Music and sound design obey the same restraint. Triet and Sénéchal describe rejecting a conventional additional score/suspense-music strategy; the recurring instrumental version of 'P.I.M.P.' and Daniel's piano operate within the world of the film, while silence, room tone, speech, recorded sound and offscreen noise carry much of the dramatic pressure. The case must not simplify this into 'no music' or 'no sound design'. Locked sources do not establish a complete audited budget/cash-flow ledger, insurance package, full shooting schedule, all legal-consultant notes, every courtroom-procedure revision, complete location permit file, full camera-body/monitor/codec allocation, every focal length and stop, complete LUT/grain pipeline, all lighting units and power distribution, complete sound microphone/recorder map, every dialogue-edit/ADR/foley/stem decision, full edit-storage/version-control architecture, detailed VFX shot list, music-rights economics, DI decision log, release deliverables or recoupment. Those remain unresolved. The player must coordinate a production in which uncertainty is designed, not repaired: screenplay hypotheses, house geography, recorded evidence, multilingual performance, flexible camera movement, severe location-time limits, engineered naturalism and editorial point of view all have to remain mutually consistent without revealing a definitive answer the film itself withholds.",
    requiredChoicesSeed: {
      screenplay: ["justine_triet_arthur_harari_original_screenplay", "couple_through_judicial_prism", "french_court_procedure_research", "house_as_story_machine", "single_argument_flashback", "truth_uncertainty_boundary"],
      camera: ["alexa_mini_lf", "hawk_v_lite_anamorphic", "angenieux_optimo_24_290", "rear_2x_anamorphic_adapter", "35mm_2perf_tests", "digital_film_emulation", "two_camera_courtroom", "arrimax_gondola_mountain_light"],
      editing: ["laurent_senechal", "no_conventional_assembly", "script_stage_editorial_questions", "courtroom_audio_to_flashback", "ambiguity_balance", "samuel_phantom_presence", "daniel_subjective_memory", "piano_ellipse"],
      sound: ["julien_sicart", "fanny_martin", "jeanne_delplancq", "recorded_argument_as_evidence", "offscreen_music_pressure", "diegetic_music", "silence_and_room_tone", "full_sound_chain_unknown"],
      themes: ["film_history", "2023", "anatomy_of_a_fall", "auteur_festival", "courtroom_drama", "sound_as_evidence", "editorial_ambiguity", "mountain_location", "digital_anamorphic", "chapter19"]
    },
    learningGoals: [
      "Explain Anatomy of a Fall as Chapter 19's auteur-festival rotation case after Killers of the Flower Moon.",
      "Use Festival de Cannes's 151-minute record as the canonical playable runtime anchor while preserving release-runtime variance as context.",
      "Identify Justine Triet as director and Triet with Arthur Harari as screenwriters.",
      "Identify Simon Beaufils as cinematographer, Emmanuelle Duplay as production designer and Laurent Sénéchal as editor.",
      "Identify Julien Sicart, Fanny Martin and Jeanne Delplancq among the Cannes-listed sound credits.",
      "Explain the courtroom as a device for refracting a marriage rather than simply solving a murder.",
      "Explain why French legal-procedure research matters to staging and dialogue.",
      "Explain the chalet architecture as a screenplay and evidence problem.",
      "Track window, floor, snow and body-position hypotheses without converting them into a canonical solution.",
      "Explain why the film withholds the fall itself as part of its evidence design.",
      "Explain sound as a primary evidentiary layer beginning before the first image.",
      "Explain Samuel's looping music as offscreen action that affects interview, character and later interpretation.",
      "Explain the recorded marital argument as both trace evidence and incomplete context.",
      "Explain why the central argument is the film's exceptional embodied flashback rather than proof of objective memory.",
      "Separate Daniel's later memory construction from the marital-argument flashback.",
      "Explain the production's initial 35mm 2-perf tests and why they do not make the released film photochemical.",
      "Identify ARRI ALEXA Mini LF as the principal documented digital camera system.",
      "Identify Hawk V-Lite anamorphics as the principal documented lens family.",
      "Identify the Angénieux Optimo 24-290 with rear 2x anamorphic adapter as a documented second-camera/long-lens path.",
      "Explain the digital test process as an attempt to retain desired 35mm qualities after celluloid was rejected for production.",
      "Explain why the image system is built around unstable observation rather than polished omniscience.",
      "Explain Triet's prepared shot-list plus controlled-mess method as a balance between planning and discovery.",
      "Explain why camera movement could change across takes in response to performance.",
      "Identify the Alpine chalet location as roughly one hour from Grenoble from Beaufils's account.",
      "Identify Saintes as the courthouse location.",
      "Explain the eight-day courthouse limit as a production constraint on nearly two hours of scripted courtroom material.",
      "Explain why two cameras were operationally necessary in the courtroom.",
      "Explain the tripod long-zoom second camera as complementary to freer primary-camera movement.",
      "Explain the chalet's large windows and snowy exterior as an exposure-continuity problem.",
      "Explain the ARRIMAX on a roughly 45-meter gondola as engineered naturalism rather than spectacle lighting.",
      "Explain why six weeks at the chalet still required disciplined lighting continuity.",
      "Explain Sénéchal's involvement while reading script versions as pre-shoot editorial design.",
      "Explain Triet's rejection of a conventional assembly workflow.",
      "Explain how limited takes and two-camera courtroom coverage increase the importance of reaction and duration choices.",
      "Explain editorial ambiguity as maintaining plausible movement between guilt and innocence rather than withholding information arbitrarily.",
      "Explain why the courtroom audio must be established before the argument images appear.",
      "Explain Samuel's family photos and silent laptop image as editorial devices that give presence to an absent character.",
      "Explain Daniel's piano material as both character action and an editorial time/structure device.",
      "Explain why the film avoids a conventional suspense-score solution.",
      "Treat 'P.I.M.P.' and piano as diegetic music functions rather than evidence of a conventional composed score.",
      "Explain how silence, room tone, testimony and recorded sound carry suspense functions often assigned to music.",
      "Explain multilingual speech as a performance and legal-communication layer without inventing unsourced language-direction details.",
      "Distinguish production design, camera blocking and legal hypotheses around the chalet rather than treating the house as a passive backdrop.",
      "Distinguish visual naturalism from low technical intervention: large lights, anamorphic optics and two-camera logistics can produce an apparently unforced image.",
      "Treat the film's Palme d'Or and later awards as reception/circulation evidence, not proof of production method.",
      "Maintain an uncertainty register for budget, full schedule, legal notes, permits, camera allocation, LUT/grain pipeline, lighting inventory, sound routing, edit storage, VFX details, music rights, DI and recoupment.",
      "Reject any reconstruction that resolves Samuel's death more definitely than the film and locked evidence do.",
      "Build a closing production audit that checks spatial logic, sound evidence, camera/lens strategy, location-time constraints, lighting infrastructure, performance flexibility and editorial ambiguity before Production Verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Anatomy evidence hierarchy", player_task: "Separate Cannes credits, direct Triet/Sénéchal/Beaufils testimony, equipment-maker documentation and secondary craft reporting before promoting claims." },
      { id: "uncertainty_rule", label: "Protect the unresolved death", player_task: "Write the production problem so every department can support competing hypotheses without encoding a canonical cause of Samuel's fall." },
      { id: "courtroom_research", label: "Lock French courtroom behavior", player_task: "Use legal research to remove imported US-TV procedure and build credible French testimony, questioning and courtroom movement." },
      { id: "house_geometry", label: "Design the chalet as evidence", player_task: "Track floors, window, exterior snow, access routes and sightlines so each physical hypothesis remains stageable." },
      { id: "sound_evidence", label: "Make recorded sound evidentiary", player_task: "Design the argument recording as an authentic-seeming trace that reveals intimacy without supplying complete context." },
      { id: "offscreen_music", label: "Stage Samuel through offscreen music", player_task: "Use the looping diegetic track to disrupt Sandra's interview and establish Samuel's presence before his body is found." },
      { id: "flashback_boundary", label: "Define the exceptional flashback", player_task: "Let courtroom listening lead into the argument images while preserving their status as a cinematic construction, not objective proof." },
      { id: "film_tests", label: "Test 35mm 2-perf", player_task: "Evaluate the desired grain/color/face rendering on film, then preserve the test as design evidence even after production rejects celluloid capture." },
      { id: "digital_translation", label: "Translate the film target digitally", player_task: "Build a Mini LF test path that approaches the selected photochemical qualities without claiming an undocumented exact emulation recipe." },
      { id: "anamorphic_package", label: "Lock the anamorphic package", player_task: "Coordinate Hawk V-Lites with the Angénieux 24-290 and chosen rear anamorphic adapter so primary and second-camera images remain compatible." },
      { id: "shotlist_insurance", label: "Prepare the shot-list safety net", player_task: "Enter each day with precise coverage options that can survive if exploratory staging fails." },
      { id: "controlled_mess", label: "Allow performance-led discovery", player_task: "Permit camera movement and framing to evolve across takes while preserving scene geography and editorial options." },
      { id: "chalet_location", label: "Lock the Alpine chalet", player_task: "Treat the mountain house as both a narrative object and a difficult daylight/snow location rather than a generic scenic backdrop." },
      { id: "snow_exposure", label: "Balance snowy exteriors", player_task: "Protect faces and interior detail against the bright snow visible through the chalet's broad window field." },
      { id: "arrimax_gondola", label: "Engineer exterior key light", player_task: "Use the documented high gondola ARRIMAX strategy to create controllable direction across the three-level house without pretending the setup is minimal." },
      { id: "courthouse_access", label: "Budget the eight courthouse days", player_task: "Compress nearly two hours of scripted courtroom work into the documented access window before designing coverage." },
      { id: "two_camera_court", label: "Build two-camera courtroom coverage", player_task: "Pair freer primary-camera observation with a long-zoom second camera so testimony and reactions can be captured efficiently." },
      { id: "axis_and_reaction", label: "Protect courtroom point of view", player_task: "Track eyelines, axes and reaction opportunities so fast coverage does not accidentally declare one testimony authoritative." },
      { id: "performance_variation", label: "Capture performance variation", player_task: "Allow actors to alter rhythm and blocking while keeping enough spatial information for Sénéchal to shape ambiguity." },
      { id: "editor_script_read", label: "Bring editorial into script stage", player_task: "Use Sénéchal's pre-shoot questions to identify POV transitions and material-risk before photography." },
      { id: "no_assembly", label: "Plan without a conventional assembly", player_task: "Organize rushes and scene structures quickly because Triet's workflow does not rely on screening a standard full first assembly." },
      { id: "court_audio_handoff", label: "Build the audio-to-image transition", player_task: "Stay in courtroom listening long enough to establish the recording as evidence before crossing into the argument images." },
      { id: "ambiguity_balance", label: "Balance Sandra's ambiguity", player_task: "Select reactions and durations that avoid making Sandra either transparently guilty or transparently innocent." },
      { id: "samuel_presence", label: "Keep Samuel present while absent", player_task: "Use photos, offscreen sound and the silent laptop image to maintain his dramatic presence without adding invented flashbacks." },
      { id: "daniel_memory", label: "Differentiate Daniel's reconstruction", player_task: "Treat Daniel's later remembered images as testimony-shaped subjectivity distinct from the marital argument sequence." },
      { id: "piano_ellipse", label: "Use piano as structural time", player_task: "Deploy Daniel's piano material to carry emotional continuity and temporal transition without adding explanatory montage." },
      { id: "music_restraint", label: "Resist conventional suspense scoring", player_task: "Keep key music within the scene world and let speech, silence and recorded sound carry tension." },
      { id: "dialogue_space", label: "Protect speech and room tone", player_task: "Preserve intelligibility and acoustic differences among chalet, court and recorded evidence without inventing the undocumented final mix chain." },
      { id: "multilingual_performance", label: "Protect multilingual performance", player_task: "Keep language shifts legible as character/legal information while avoiding unsourced claims about every coaching decision." },
      { id: "editorial_reallocation", label: "Reassign material structurally", player_task: "Permit photographed material such as photos, laptop images or piano scenes to move from scripted positions when it strengthens the evidence architecture." },
      { id: "uncertainty_register", label: "Protect unresolved production data", player_task: "Keep budget, complete schedule, legal notes, camera allocation, look pipeline, lighting inventory, sound routing, VFX, music-rights economics and DI details unresolved without stronger sources." },
      { id: "production_verification", label: "Close the Anatomy production audit", player_task: "Verify credits, courtroom/sound design, Mini LF anamorphic strategy, location-lighting constraints and editorial ambiguity before canonical promotion." }
    ]
  }
] as const;

export function mergeChapterNineteenAnatomyOfAFallExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenAnatomyOfAFallExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_anatomy_of_a_fall_verified",
      source: { list_id: "manual_chapter_nineteen_anatomy_of_a_fall_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
