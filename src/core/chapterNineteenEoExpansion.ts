import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenEoExpansionDefinitions = [
  {
    id: "scenario_eo_2022",
    title: "EO",
    originalTitle: "IO",
    aliases: ["EO", "IO"],
    year: 2022,
    titleType: "Movie",
    runtimeMins: 88,
    directors: ["Jerzy Skolimowski"],
    genres: ["Drama", "Road Movie"],
    sourceId: "festival_de_cannes_eo_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/eo/",
    scenarioType: "award_priority_cannes_jury_prize_poland_italy_two_year_pandemic_interrupted_location_road_movie_six_donkeys_animal_welfare_reactive_camera_master_plus_donkey_pov_color_red_sound_score_subjectivity_finance_boundary_2022",
    premise: "Build EO as Chapter 19's next award-priority Production Case because Festival de Cannes records Jerzy Skolimowski's film as the 2022 Jury Prize winner ex aequo. That prize establishes award priority, not workflow evidence. Runtime provenance must remain versioned: Cannes lists EO at 86 minutes, while the British Film Institute and BBFC list the UK release at approximately 88 minutes. The playable record uses 88 minutes for the documented UK release while preserving the 86-minute Cannes record separately; the current evidence does not establish the exact master lineage between them. Cannes credits Jerzy Skolimowski as director, Ewa Piaskowska and Skolimowski as screenwriters, Michał Dymek as cinematographer, Agnieszka Glińska as editor and Paweł Mykietyn among the music credits. Screen Daily identifies Warsaw-based Skopia Film and producer/co-writer Ewa Piaskowska as the Polish production base, Italy's Alia Film as co-producer, Jeremy Thomas/Recorded Picture Company as executive-production support and HanWay Films for sales. The same production account documents Polish Film Institute support, including the cash-rebate incentive, two Polish regional funds, Strefa Kultury, Polish equity investors and HBO Europe. Those records establish named financing components but do not establish the complete final budget, equity percentages, cash-flow schedule, sales guarantees, recoupment waterfall or final cost, so those remain unresolved. EO was a road movie whose production was stretched across roughly two years by the pandemic. Screen Daily records a minimal-crew first shooting day in Custonaci, Sicily, in early 2020 just before pandemic shutdowns and a final shooting day outside Rome in early March 2022, with substantial location work across Poland between those Italian portions. This long calendar span is not the same thing as continuous principal photography; the exact number of shooting days, unit days, hiatus dates, daily pages, company moves and restart protocols remain unresolved. The central performance system was built around real donkeys rather than conventional human blocking. Later direct interviews identify six Sardinian donkeys used for EO and describe the production treating them as non-actors whose natural behavior could not be forced through ordinary performance direction. Skolimowski spent extensive off-camera time bonding with the animals, used calm voices and carrots, and followed their movement rather than expecting them to reproduce fixed marks. In simple A-to-B movement, animal motivation could be created by placing another donkey at the destination rather than coercing the principal animal. These interviews establish selected animal-handling practices but not the complete veterinary, transport, handler, welfare, insurance or regulatory ledger, which remains unresolved. The production repeatedly solved dangerous or uncooperative action through cinema rather than making the animal perform it. Skolimowski's fence-jump example is explicit: the donkey approached a horizontal beam, the beam was then dropped out of its supports and followed with the camera, and sound completed the illusion. That establishes a practical editorial/sound trick, not a stunt performed by the donkey. The visual grammar paired objective coverage with the animal's subjective point of view. Skolimowski says scenes were normally established in an objective master and then covered again from EO's POV, often through different camera movement, pacing or attention to detail. The donkey's large eyes and close coverage were used as an emotional bridge to the audience. Michał Dymek's American Society of Cinematographers conversation confirms that the unpredictability of an animal actor forced a reactive approach unlike normal tightly repeatable blocking. Dymek also describes balancing extensive preparation against Skolimowski's freestyle method, using bold red in dusk-set material and sometimes constructing one apparent scene from five different locations and two stages. These sources establish a reactive, modular cinematography system, but they do not provide a complete camera-body, lens, filtration, recording-codec, lighting, grip, drone, stabilization, exposure, data or color-pipeline ledger. No unsupported camera-model claim is therefore added to canonical. The film's visual experimentation also includes drones and effects in subjective passages, as Skolimowski discusses in interviews, but the present source set does not establish a complete VFX vendor or shot census, so effects remain bounded rather than generalized. Location geography was a production system of its own. Piaskowska describes the Polish route including Podkarpackie wilderness, Mazury, historic stables and Wilanów Palace, while the Italian portions included Sicily and Rome. The film therefore combines real geographic variety with episodic continuity through the donkey's perspective. Complete permits, location fees, accommodation, transport, customs, animal-travel and border-compliance records remain unresolved. Editing and sound are central to how performance becomes story. The film's animal behavior is not scripted in the same repeatable way as human dialogue coverage, so editing converts reactive material into continuity and point of view. Agnieszka Glińska is the credited editor, and Piaskowska names long-time collaborator Radek Ochnio as sound designer. Skolimowski's fence example demonstrates picture and sound jointly manufacturing an action that the animal did not physically perform. The film also uses industrial and environmental sound as a contrast between nature and destructive human systems, while score operates as an interior-monologue layer for EO. Skolimowski explicitly describes asking composer Paweł Mykietyn to use music to reach what is happening inside the donkey's mind. This establishes score as subjective narration rather than simply background accompaniment. The complete edit schedule, NLE/storage/proxy/conform history, production-sound recorder/microphone package, ADR/Foley sessions, sound editorial workstation/plugin chain, premix/final-mix dates, stem layout, score recording sessions and music-delivery ledger remain unresolved. EO's production history is therefore useful because constraint and ethics are inseparable from form: the pandemic fractures the calendar; the animal performer makes conventional repeatable blocking impossible; a reactive camera and repeated objective/POV coverage turn unpredictability into grammar; editing and sound safely create actions that cannot be demanded from the animal; location travel supplies episodic variety; and music/sound carry subjective interiority where dialogue cannot. Award status, financing, animal welfare, performance, cinematography, editing, sound and runtime versions are kept as separate evidence layers. The locked evidence still does not establish the complete final budget, all production and post dates, full animal-welfare/regulatory documentation, exact shoot-day census, complete camera/lens/light/grip/data/color package, all drone/VFX/effects work, all locations/permits/logistics, full edit infrastructure, complete audio chain, full music recording/licensing history or exact lineage between Cannes's 86-minute version and the 88-minute UK release. Those remain explicit unresolved boundaries.",
    requiredChoicesSeed: {
      screenplay: ["award_priority_not_workflow_evidence", "cannes_uk_runtime_provenance", "animal_subjective_road_structure", "finance_components_not_total_budget", "pandemic_calendar_boundary"],
      camera: ["objective_master_plus_donkey_pov", "reactive_animal_camera", "red_dusk_strategy", "multi_location_stage_compositing_boundary", "full_camera_ledger_unresolved"],
      editing: ["animal_behavior_to_continuity", "safe_action_through_editing", "objective_subjective_structure", "pandemic_material_continuity", "edit_infrastructure_unresolved"],
      sound: ["sound_completes_safe_action_illusion", "industrial_nature_contrast", "score_as_inner_monologue", "picture_sound_separate_but_coupled", "full_audio_ledger_unresolved"],
      themes: ["film_history", "2022", "eo", "poland", "italy", "animal_welfare", "road_movie", "pandemic", "subjective_camera", "chapter19"]
    },
    learningGoals: [
      "Explain why the 2022 Cannes Jury Prize establishes award priority without proving workflow.",
      "Preserve Cannes's 86-minute record separately from the approximately 88-minute UK release.",
      "Use 88 minutes as the playable UK-release runtime without inventing exact master lineage.",
      "Identify Jerzy Skolimowski as director and co-screenwriter.",
      "Identify Ewa Piaskowska as co-screenwriter and Polish producer.",
      "Identify Michał Dymek as cinematographer.",
      "Identify Agnieszka Glińska as editor.",
      "Identify Paweł Mykietyn as the principal documented composer used for EO's subjective score function.",
      "Recognize Skopia Film as the Polish production base.",
      "Recognize Alia Film as the documented Italian co-producer.",
      "Recognize Jeremy Thomas/Recorded Picture Company and HanWay Films as documented executive-production/sales participants.",
      "Recognize Polish Film Institute and regional/public support without treating support records as the total budget.",
      "Recognize Polish equity and HBO Europe as financing components without inventing shares.",
      "Keep final budget, equity percentages, cash flow and recoupment unresolved.",
      "Explain why the roughly two-year calendar does not equal two years of continuous shooting.",
      "Recognize the early-2020 Sicily start and March-2022 Rome-area finish as pandemic-bracketing production evidence.",
      "Recognize major location work across Poland and Italy.",
      "Keep exact shooting-day count and restart protocols unresolved.",
      "Recognize six donkeys playing EO across the production.",
      "Explain why donkey performance is natural behavior rather than repeatable acting.",
      "Explain the importance of calm handling, bonding and carrots as documented practical tools.",
      "Explain A-to-B animal motivation through another donkey rather than coercive blocking.",
      "Keep complete veterinary, handler, transport, welfare and insurance ledgers unresolved.",
      "Explain the fence-jump sequence as a safe camera/edit/sound illusion rather than a performed stunt.",
      "Distinguish objective master coverage from donkey-POV coverage.",
      "Explain how camera movement and duration change the meaning of the same location in POV coverage.",
      "Explain close attention to the donkey's eyes as an emotional bridge.",
      "Explain why animal unpredictability forced reactive cinematography.",
      "Explain the tension between Dymek's preparation and Skolimowski's freestyle direction.",
      "Recognize the documented use of bold red in dusk-set material.",
      "Recognize that one apparent scene could be built from five locations and two stages.",
      "Keep camera body, lens, filtration, codec, grip, lighting and data records unresolved without direct evidence.",
      "Recognize drone/effects experimentation without inventing a VFX shot census.",
      "Explain location geography as episodic production infrastructure.",
      "Recognize Podkarpackie, Mazury, Wilanów Palace, Sicily and Rome as documented location references.",
      "Keep permit, accommodation, transport, customs and animal-travel records unresolved.",
      "Explain editing as the system that converts unrepeatable animal behavior into continuity.",
      "Explain picture/sound collaboration in manufacturing safe impossible actions.",
      "Recognize Radek Ochnio as a documented sound-design collaborator through producer reporting.",
      "Explain industrial sound as a contrast with natural quiet.",
      "Explain score as a form of EO's interior monologue.",
      "Distinguish score function from production sound and sound design.",
      "Keep NLE, storage, proxy, conform and archive history unresolved.",
      "Keep recorder, microphone, ADR, Foley, plugin, premix, stem and final-mix records unresolved.",
      "Keep score recording, orchestration, cue and licensing details unresolved.",
      "Explain how pandemic interruption changed production logistics without being treated as an aesthetic choice by itself.",
      "Explain how animal ethics constrain and generate formal choices.",
      "Explain why a road movie with an animal protagonist needs modular location continuity.",
      "Explain why subjective cinematography does not erase objective scene geography.",
      "Explain why Cannes award status is reception evidence rather than proof that every production choice was correct.",
      "Keep all unsupported camera-model claims out of canonical.",
      "Keep complete drone, VFX and special-effects ledgers unresolved.",
      "Preserve the distinction between observed animal behavior and edited narrative meaning.",
      "Close the case only when award, runtime versions, finance, pandemic schedule, animal handling, camera method, edit, sound and uncertainty boundaries agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock Cannes Jury Prize", player_task: "Use the prize for priority, never as workflow proof." },
      { id: "runtime_versions", label: "Version the runtime", player_task: "Keep Cannes 86 and UK 88-minute records separate." },
      { id: "finance_map", label: "Map production finance", player_task: "Record named Polish/Italian/public/equity/HBO components without inventing the total budget." },
      { id: "pandemic_calendar", label: "Map the interrupted calendar", player_task: "Separate the two-year span from actual shoot days." },
      { id: "italy_start", label: "Start in Sicily", player_task: "Use the minimal early-2020 shoot as the first documented production marker." },
      { id: "poland_route", label: "Build the Polish road", player_task: "Plan episodic locations around the donkey's journey." },
      { id: "italy_finish", label: "Finish near Rome", player_task: "Close the documented calendar without inventing missing unit days." },
      { id: "six_donkeys", label: "Cast EO across six animals", player_task: "Treat each donkey as a natural performer, not an interchangeable prop." },
      { id: "animal_bond", label: "Build trust", player_task: "Use calm handling, presence and food rewards rather than force." },
      { id: "animal_blocking", label: "Motivate movement", player_task: "Let animal behavior drive blocking wherever possible." },
      { id: "welfare_boundary", label: "Freeze welfare unknowns", player_task: "Do not invent veterinary, transport or regulatory records." },
      { id: "safe_stunt_illusion", label: "Fake the fence jump", player_task: "Create unsafe action through camera, edit and sound rather than animal risk." },
      { id: "objective_master", label: "Establish geography", player_task: "Shoot objective coverage before subjective interpretation." },
      { id: "donkey_pov", label: "Enter EO's perspective", player_task: "Repeat the scene through movement, detail and duration shaped by the animal." },
      { id: "eye_closeups", label: "Use the eyes", player_task: "Build emotional connection through close visual attention." },
      { id: "reactive_camera", label: "React to behavior", player_task: "Let unpredictable animal movement alter camera decisions." },
      { id: "prep_vs_freestyle", label: "Balance preparation and improvisation", player_task: "Protect prepared systems while remaining open to animal-driven change." },
      { id: "red_dusk", label: "Design the red passages", player_task: "Use color as a subjective visual system without generalizing it to the entire film." },
      { id: "modular_scene", label: "Assemble across locations", player_task: "Understand how one scene can span multiple real places and stages." },
      { id: "camera_boundary", label: "Freeze unverified gear", player_task: "Do not invent cameras, lenses or exposure settings absent from the locked sources." },
      { id: "location_logistics", label: "Preserve road geography", player_task: "Separate documented places from unresolved permit and transport ledgers." },
      { id: "animal_edit", label: "Edit behavior into continuity", player_task: "Shape natural action without pretending the donkey repeated human marks." },
      { id: "sound_action", label: "Complete action with sound", player_task: "Use audio to finish safe cinematic illusions." },
      { id: "industrial_nature", label: "Build the sound contrast", player_task: "Oppose industrial disturbance with natural quiet." },
      { id: "score_interiority", label: "Score the inner monologue", player_task: "Use music to express EO's subjective emotional state." },
      { id: "audio_boundary", label: "Freeze audio unknowns", player_task: "Keep production sound, ADR, Foley, mix and score-session details explicit as unresolved." },
      { id: "version_boundary", label: "Freeze master uncertainty", player_task: "Do not collapse 86 and 88 minutes without source proof." },
      { id: "uncertainty_register", label: "Freeze undocumented ledgers", player_task: "Keep budget, schedule, welfare, gear, effects, logistics and post unknowns visible." },
      { id: "production_verification", label: "Close EO audit", player_task: "Verify award, versions, finance, calendar, animals, camera grammar, edit, sound and uncertainty before canonical promotion." }
    ]
  }
] as const;

export function mergeChapterNineteenEoExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenEoExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_eo_verified",
      source: { list_id: "manual_chapter_nineteen_eo_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
