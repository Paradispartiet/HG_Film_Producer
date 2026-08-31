import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenFlowExpansionDefinitions = [
  {
    id: "scenario_flow_2024",
    title: "Flow",
    originalTitle: "Straume",
    aliases: ["Flow", "Straume"],
    year: 2024,
    titleType: "Movie",
    runtimeMins: 85,
    directors: ["Gints Zilbalodis"],
    genres: ["Animation", "Adventure", "Fantasy"],
    sourceId: "festival_cannes_flow_2024",
    sourceUrl: "https://www.festival-cannes.com/en/f/flow/",
    scenarioType: "independent_low_mid_budget_gints_zilbalodis_dream_well_sacrebleu_take_five_latvia_france_belgium_blender_eevee_real_time_rendering_virtual_camera_long_takes_no_storyboards_hand_animation_no_motion_capture_water_tools_cell_fluids_flip_fluids_custom_scripts_small_team_cross_border_character_animation_sound_mix_no_dialogue_sinfonietta_riga_2024",
    premise: "Build Flow as Chapter 19's independent/low-mid-budget animation case by treating Gints Zilbalodis's production as a tightly coupled system in which a small transnational team, open-source software, virtual cinematography, hand-keyed animal performance, water simulation, sound, music and financing constraints shaped one another. Festival de Cannes records the Latvia-France-Belgium feature in Un Certain Regard in 2024 at 85 minutes, directed by Gints Zilbalodis and written by Zilbalodis with Matiss Kaza, with music by Zilbalodis and Rihards Zalupe. Latvia's national film database records the Latvian title Straume, Dream Well Studio as the principal studio, Sacrebleu Productions and Take Five as co-producers, and an 84-minute national database runtime. The playable case uses Cannes's 85-minute institutional record while preserving the 84-minute Latvian/Cineuropa figure as catalogue variance rather than silently collapsing conflicting records. Zilbalodis's own production account establishes a roughly five-and-a-half-year process beginning in 2019. The first year combined writing, learning Blender and seeking financing; initial funding arrived in 2020; concept artists, riggers and developers joined in 2021; French and Belgian co-producers joined in 2022; and full production scaled in 2023. The Latvian studio was physically small: around 15 to 20 people contributed there across the project, but usually only three to five were working at the same time because departments overlapped rather than operating as a large simultaneous factory. This staffing fact must not be inflated into a claim that the entire international production had only 15 to 20 contributors. Screen Daily and co-producer interviews separate the work geographically: writing, pre-production, design, modelling, effects, lighting, music and much of post were centered in Latvia, while significant character animation and sound work were carried by French and Belgian partners. CEE Animation records producer Gregory Zalcman's account that Take Five handled about 20 percent of the animation plus foley and mixing. Cineuropa's Eurimages co-production episode confirms Dream Well, Sacrebleu and Take Five as the producing partnership and Eurimages support, but the locked evidence does not establish a complete audited financing waterfall, exact national percentages, cash-flow schedule, tax-incentive ledger or recoupment corridor. A €3.5 million budget is directly reported by the co-producer interview and Latvian public-sector reporting; later English-language trade coverage sometimes converts this to approximately $3.7 million. The case preserves the euro figure as the source-native production-budget anchor and treats dollar values as conversions rather than separate budgets. Blender was not merely a low-cost substitute. Zilbalodis switched after Away, initially attracted by EEVEE's speed and ability to judge camera, lighting and look together. He describes Flow as made entirely with Blender and rendered in EEVEE, with 4K frames taking roughly 0.5 to 10 seconds, no render farm, the final render completed on his own PC and no compositing pass; color and look adjustments were handled through shaders. The production upgraded Blender cautiously over several years: early work began around 2.8, the team later used 2.9/3.0-era builds, character animators standardized on 3.3 during the 2023 production phase, and Zilbalodis imported finished animation into 3.6 for lighting. This is evidence of version-managed pragmatism, not proof that all files or departments used one uniform version at every stage. The workflow deliberately rejected conventional storyboards. Zilbalodis built previz/animatics directly in 3D, roughing environments and virtual-camera movement so concept artists could rebuild or refine assets at the same scale and position. He describes the camera and mise-en-scene as primary storytelling instruments because the film has no spoken dialogue. Long takes and relatively sparse cutting move between close detail and wide space, while virtual-camera motion is keyframed and layered rather than captured through a physical camera-performance system. An Animation Layers add-on helped create different handheld-motion components; Zilbalodis tested live virtual-camera recording but rejected it as too imprecise for his needs. Character performance followed a separate logic. Animation World Network records Zilbalodis saying the team studied extensive animal reference but hand animated the performances and did not use motion capture. The animals were kept behaviorally animal-like rather than anthropomorphized through speech; stylization supports readable performance without turning movement into human acting in animal bodies. The long-take design created pipeline pressure because a single shot could contain multiple characters and extensive environments, making ordinary shot-optimization assumptions less useful. French and Belgian animation teams therefore optimized working scenes and rigs, after which Zilbalodis imported their animation back into heavier environment files for final lighting and look work. Water was a production system of its own. Zilbalodis says only two people handled the water effects in the Latvian team, while different scenes required different solutions rather than one universal simulator. Mārtiņš Upītis developed water tools and a Blender add-on; Konstantīns Višņevskis handled smaller simulations, shaders, stylized fur and feather research, rigging and modelling alongside other tasks. The Blender account identifies Cell Fluids and FLIP Fluids among the techniques combined for large waves and detail, with additional tools such as GeoScatter, Bagapie vegetation/rain utilities and Copy Global Transform used where useful. These tool names are evidence of a particular Flow pipeline, not a prescription that independent animation should reproduce the same stack. Sound and music are equally structural because the film has no dialogue. Cineuropa records Zilbalodis's account that camera movement, silence and breathing space carry emotional information normally supplied by words. He began composing while the screenplay was still developing, allowing music to influence rhythm and edit; Rihards Zalupe later contributed orchestration, adaptation and new material, with strings recorded with Sinfonietta Riga. CEE Animation's co-producer interview says Take Five handled foley and mixing and stresses that mix intensity was critical in a dialogue-free film. The case therefore treats sound effects, animal vocalization, ambience, music and silence as narrative information rather than background polish. Locked sources do not establish a complete microphone library, every animal-vocal provenance record, all foley props, exact mix-stage hardware, stem layout, loudness targets or delivery package, so those remain unresolved. Flow's central historical lesson is not that free software automatically democratizes feature animation. It is that a production can deliberately redesign authorship, staffing and pipeline around a small team: previz can replace storyboards for a director who thinks spatially; real-time raster rendering can collapse some look-development boundaries; custom tools can target the few technically dominant problems; hand animation can preserve animal behavior without mocap; and international co-production can supply specialist labor that a small domestic sector cannot easily staff. Every claimed efficiency has a corresponding coordination cost in file scale, version control, long-shot complexity, water tools, cross-border handoff, sound dependence and a director carrying unusually many creative roles. The player must build a production that respects those coupled constraints without converting Flow into either a romantic one-person miracle or a generic Blender tutorial.",
    requiredChoicesSeed: {
      screenplay: ["gints_zilbalodis_matiss_kaza_screenplay", "wordless_visual_narrative", "aqua_origin_reworked", "teamwork_theme", "no_human_exposition", "runtime_variance_84_85"],
      camera: ["virtual_camera", "long_take_mise_en_scene", "direct_3d_previz", "blender_eevee", "animation_layers_camera_motion", "no_renderfarm", "shader_based_final_look", "no_compositing"],
      editing: ["gints_zilbalodis_editorial_authorship", "minimal_cutting", "music_during_writing", "chronological_discovery", "long_take_pipeline", "no_deleted_scene_claim_boundary"],
      sound: ["dialogue_free_sound_storytelling", "take_five_foley_and_mix", "gurwal_coic_gallas", "animal_behavior_sound", "silence_breathing_space", "gints_zilbalodis_rihards_zalupe_score", "sinfonietta_riga_strings", "full_sound_chain_unknown"],
      themes: ["film_history", "2024", "flow", "straume", "independent_low_mid_budget", "latvian_animation", "european_coproduction", "open_source_animation", "small_team_pipeline", "chapter19"]
    },
    learningGoals: [
      "Explain Flow as Chapter 19's independent/low-mid-budget rotation case after Anatomy of a Fall.",
      "Use Cannes's 85-minute record as the canonical playable runtime while preserving the 84-minute Latvian/Cineuropa catalogue variant.",
      "Identify Gints Zilbalodis as director and co-writer with Matiss Kaza.",
      "Identify Dream Well Studio, Sacrebleu Productions and Take Five as the core Latvia-France-Belgium production partnership.",
      "Separate principal Latvian production work from French and Belgian character-animation and sound contributions.",
      "Explain why the Latvian 15-to-20-person studio figure must not be mistaken for the total international crew size.",
      "Explain the five-and-a-half-year project timeline beginning in 2019.",
      "Track writing, Blender learning and financing search as overlapping first-year development tasks.",
      "Explain the 2020 funding step without inventing a complete financing ledger.",
      "Explain why concept artists, riggers and tool developers joined before full character-animation scale-up.",
      "Explain the significance of French and Belgian co-producers joining in 2022.",
      "Explain full production in 2023 as the point when character-animation staffing stabilized.",
      "Use the source-native €3.5 million budget as the budget anchor while treating dollar figures as currency conversion.",
      "Distinguish Eurimages support from a fully audited financing waterfall.",
      "Explain why Blender was chosen for workflow speed and integration, not only because it is free.",
      "Identify EEVEE as the documented renderer used for the finished film.",
      "Explain the reported 0.5-to-10-second 4K frame renders as title-specific evidence rather than a general Blender benchmark.",
      "Explain the no-render-farm final render on Zilbalodis's PC as a consequence of this specific EEVEE pipeline.",
      "Explain the no-compositing statement and shader-based look adjustments without generalizing it to all CG animation.",
      "Track the controlled Blender-version progression from 2.8-era development to 3.3 character animation and 3.6 lighting.",
      "Explain why version upgrades were tested and later constrained once more animators were sharing production files.",
      "Explain direct 3D previz as Flow's replacement for conventional storyboards.",
      "Explain how rough 3D environments preserved scale and placement for concept-art and set-dressing handoffs.",
      "Explain virtual-camera movement as a writing and staging tool in a dialogue-free film.",
      "Explain long takes and minimal editing as mechanisms for spatial immersion and animal-scale point of view.",
      "Explain why live virtual-camera recording was tested but rejected as too imprecise.",
      "Identify Animation Layers as a documented tool for layered camera-motion behaviors.",
      "Explain why the animals were hand animated rather than motion captured.",
      "Explain the role of extensive animal reference in maintaining species-specific behavior.",
      "Distinguish behavioral authenticity from photorealistic surface detail.",
      "Explain why long multi-character takes create unusually heavy scene-management problems.",
      "Explain the France/Belgium optimization handoff before animation was imported back into heavier Latvian scenes.",
      "Explain why water required multiple tools and scene-specific solutions rather than one universal simulation.",
      "Identify Mārtiņš Upītis and Konstantīns Višņevskis as key technical contributors without inflating their responsibilities beyond documented evidence.",
      "Explain that only two people handling water in the Latvian team signals specialization, not technical simplicity.",
      "Identify Cell Fluids and FLIP Fluids as documented components of the water-effects toolset.",
      "Treat GeoScatter, Bagapie utilities and Copy Global Transform as pipeline examples rather than mandatory recipes.",
      "Explain why a dialogue-free film makes sound, animal vocalization, ambience and silence narrative-bearing systems.",
      "Explain Take Five's documented role in roughly 20 percent of animation plus foley and mixing.",
      "Explain why mix intensity matters when spoken dialogue cannot carry emphasis.",
      "Explain Zilbalodis composing during screenplay development as an editorial and structural choice.",
      "Identify Rihards Zalupe as co-composer and collaborator on orchestration/adaptation/new material.",
      "Identify Sinfonietta Riga string recording as a documented handcrafted music element.",
      "Explain why early music could shape pacing before picture was final.",
      "Separate production method from later festival and awards success.",
      "Explain how small-team multi-role authorship can increase both flexibility and coordination risk.",
      "Explain how international co-production supplied specialist capacity unavailable in the small Latvian animation sector.",
      "Maintain an uncertainty register for full crew size, exact financing percentages, tax incentives, cash flow, every Blender add-on/version per department, asset/version-control topology, complete sound libraries, mix hardware, deliverables and recoupment.",
      "Reject the claim that Flow proves open-source tools eliminate the need for specialist labor or production capital.",
      "Build a closing production audit that checks co-production roles, virtual-camera grammar, hand animation, water tooling, render/look pipeline, sound/music structure and evidence boundaries before Production Verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Flow evidence hierarchy", player_task: "Separate Cannes and Latvian institutional records from direct filmmaker, co-producer, Blender and trade testimony before promoting claims." },
      { id: "runtime_boundary", label: "Preserve the 84/85-minute record", player_task: "Use Cannes's 85-minute runtime for the playable record while logging the Latvian/Cineuropa 84-minute catalogue variance." },
      { id: "coproduction_map", label: "Map the three-country production", player_task: "Assign Dream Well, Sacrebleu and Take Five only the responsibilities directly supported by sources and leave undocumented splits unresolved." },
      { id: "budget_boundary", label: "Lock the budget evidence", player_task: "Use the documented €3.5 million figure without inventing a complete financing waterfall or treating converted dollar figures as a second budget." },
      { id: "five_year_timeline", label: "Build the five-and-a-half-year timeline", player_task: "Separate 2019 development, 2020 funding, 2021 team/tool growth, 2022 co-producer expansion and 2023 full production." },
      { id: "small_team_model", label: "Design the small Latvian studio", player_task: "Plan for a 15-to-20-person Latvian contributor pool with only a few people active at once, without claiming this equals the total international crew." },
      { id: "direct_3d_previz", label: "Replace storyboards with 3D previz", player_task: "Block environments, timing and camera directly in Blender so later artists inherit usable scale and spatial intent." },
      { id: "virtual_camera_grammar", label: "Write with the virtual camera", player_task: "Use camera movement and mise-en-scene to carry emotional information that spoken dialogue would otherwise provide." },
      { id: "long_take_design", label: "Commit to long-take geography", player_task: "Design shots that can move between intimate behavior and wide environmental scale without losing spatial clarity." },
      { id: "camera_motion_layers", label: "Layer camera movement", player_task: "Build controlled standstill, walking and running motion components rather than relying on imprecise live virtual-camera capture." },
      { id: "blender_pipeline", label: "Lock Blender as the integrated platform", player_task: "Keep previz, animation handoff, lighting, look development and final rendering inside the documented Blender-centered workflow." },
      { id: "version_policy", label: "Control Blender versions", player_task: "Test upgrades early, then stabilize animation work on 3.3 and final lighting/look work on 3.6 as documented." },
      { id: "eevee_render", label: "Design for EEVEE", player_task: "Exploit fast interactive rendering for camera and lighting decisions while treating the reported render times as Flow-specific evidence." },
      { id: "no_renderfarm", label: "Protect the no-render-farm constraint", player_task: "Keep final rendering feasible on the documented local-PC path rather than silently adding farm infrastructure." },
      { id: "shader_finish", label: "Finish the image in shaders", player_task: "Make shot-level color and material adjustments in the shader/lighting system without inventing an undocumented compositing pipeline." },
      { id: "character_reference", label: "Research real animal behavior", player_task: "Gather species-specific movement reference before animation so performance remains animal-like rather than humanized." },
      { id: "hand_animation", label: "Hand animate the performances", player_task: "Build character acting without motion capture while preserving species behavior and readable emotional timing." },
      { id: "animation_handoff", label: "Structure France/Belgium animation handoff", player_task: "Let specialist animation teams optimize rigs and scenes, then return finished animation for integration into heavier environment files." },
      { id: "long_take_optimization", label: "Protect heavy long takes", player_task: "Strip working scenes to interaction-critical assets for animation while preserving a path back to the full environment for final shots." },
      { id: "water_problem_split", label: "Split water by behavior", player_task: "Treat puddles, lakes, seas, waves and splashes as distinct technical problems instead of forcing one simulator onto every shot." },
      { id: "water_tools", label: "Integrate water tools", player_task: "Combine documented Cell Fluids, FLIP Fluids and custom tooling only where each technique solves the relevant scale of water behavior." },
      { id: "technical_artist_roles", label: "Protect technical multi-role labor", player_task: "Budget time for water, splashes, shaders, fur, feathers, rigging, modelling and scripts without pretending a small team eliminates specialization." },
      { id: "set_dressing", label: "Refine environments after previz", player_task: "Hand rough scene geometry to concept/set-dressing artists while preserving world position and scale for round-trip integration." },
      { id: "sound_structure", label: "Write the dialogue-free sound arc", player_task: "Use animal vocalization, ambience, effects, silence and mix intensity as narrative syntax rather than decorative fill." },
      { id: "foley_mix_handoff", label: "Lock Take Five sound work", player_task: "Coordinate the documented Belgian foley and mixing responsibility with the picture's long-take timing and absence of dialogue." },
      { id: "music_early", label: "Compose before picture lock", player_task: "Develop music while screenplay and animatic are still moving so score can influence rhythm rather than merely follow final cuts." },
      { id: "orchestration", label: "Expand the score collaboratively", player_task: "Bring Rihards Zalupe into orchestration, adaptation and new composition without erasing Zilbalodis's early thematic authorship." },
      { id: "sinfonietta_riga", label: "Record the string layer", player_task: "Use the documented Sinfonietta Riga recording as a handcrafted counterweight to the digital image pipeline." },
      { id: "editorial_restraint", label: "Protect sparse cutting", player_task: "Let virtual-camera movement carry internal shot progression and reserve cuts for structural rhythm rather than exposition." },
      { id: "uncertainty_register", label: "Freeze unsupported details", player_task: "Keep financing percentages, complete crew totals, asset/version-control architecture, full sound-library provenance and delivery specifications explicitly unresolved." },
      { id: "anti_myth_audit", label: "Reject the open-source miracle myth", player_task: "Check that the case credits capital, specialist labor, custom tools and international partners rather than claiming free software made the production effortless." },
      { id: "production_verification", label: "Close the Flow production audit", player_task: "Verify co-production roles, five-and-a-half-year timeline, Blender/EEVEE path, virtual camera, hand animation, water tooling, sound/music structure and uncertainty boundaries before canonical promotion." }
    ]
  }
] as const;

export function mergeChapterNineteenFlowExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenFlowExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_flow_verified",
      source: { list_id: "manual_chapter_nineteen_flow_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
