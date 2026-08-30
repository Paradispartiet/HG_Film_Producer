import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenCodaExpansionDefinitions = [
  {
    id: "scenario_coda_2021",
    title: "CODA",
    originalTitle: "CODA",
    aliases: ["CODA"],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 111,
    directors: ["Siân Heder"],
    genres: ["Drama", "Music", "Romance"],
    sourceId: "afi_coda_2021",
    sourceUrl: "https://watch.afi.com/movie/coda-4",
    scenarioType: "independent_low_mid_budget_coda_2021_vendome_pathe_no_distributor_at_shoot_sundance_apple_acquisition_gloucester_deaf_cast_asl_masters_accessible_set_fishing_boat_sony_venice_6k_arri_signature_lf_40mm_large_format_naturalistic_live_sign_sound_live_singing_interpreter_editorial_track_three_hour_first_cut_flashcut_formosa_mels_remote_grade_covid_post",
    premise: "Build CODA as Chapter 19's independent low/mid-budget case by treating its production history as one linked system of financing choices, authentic Deaf casting, American Sign Language translation and on-set access, Gloucester fishing logistics, large-format digital cinematography, live performance sound, editorial translation infrastructure and pandemic-disrupted postproduction. AFI records the 111-minute 2021 feature written and directed by Siân Heder, photographed by Paula Huidobro, edited by Geraud Brisson, production-designed by Diane Lederman and produced by Jérôme Seydoux, Patrick Wachsberger, Philippe Rousselet and Fabrice Gianfermi. Heder says the project was developed at Lionsgate but its star-driven financing assumptions conflicted with her insistence on Deaf actors in Deaf roles and an unknown teenage lead. Wachsberger, Rousselet/Vendôme and Pathé moved the project into an independently financed production made without a distributor in place. Apple's later Sundance acquisition therefore belongs to distribution/circulation history, not proof that Apple financed principal photography. Heder worked with Deaf collaborators from writing through post. AFI records two ASL masters, Alexandria Wailes and Anne Tomasetti: Wailes helped transform scripted intention into ASL, while Tomasetti worked with actors and monitored ASL scenes on set for authenticity, regionalisms and family-specific signing. Hands and sightlines therefore had to remain visible, actors needed visual access to one another and conventional face-only close-up/blocking habits could not simply be imported from spoken-dialogue filmmaking. Huidobro describes learning Gloucester fishing logistics and Deaf-set communication while pursuing a subtle naturalistic visual language. She documents Sony VENICE 6K capture with ARRI Signature LF primes, frequent 40mm use, large-format landscape and portrait goals and high-ISO night capability. Boat work constrained crew size, fishing activity, scheduling and camera placement. Production mixer Jared Detsikas recorded expressive vocalizations and signing-associated body sounds live and coordinated wireless/overhead boom coverage with costume to reduce rustle. Singing was designed for live capture with playback/earpiece support. Supervising sound editor Martin Pinsonnault and re-recording mixer Alexandra Fehrman describe perspective, contrast and deliberate transitions into and out of silence as authored sound design. Geraud Brisson received a separate interpreter guide track for ASL scenes because he did not sign, and an ASL master kept detailed authenticity/framing notes. Heder reports an initial cut around three hours and removal of roughly thirty-plus shot scenes. Editing was completed at Flashcut before COVID changed finishing plans. Color correction was completed remotely with Mels in Montreal, while final sound moved to Los Angeles/Formosa Group; Mels also handled limited cleanup VFX. The locked evidence supports the production as independent and later reporting places it around a $10 million/month-long scale, but no audited budget or complete finance structure is available here. Exact financing shares, insurance, payroll, full day-by-day schedule, permits, fishing-safety records, camera media/data inventory, complete lens and lighting packages, interpreter/accessibility costs, NLE/storage architecture, ADR/foley/stem routing, music economics, color transforms and distribution recoupment remain unresolved. Those remain unresolved. The player must coordinate an independent feature in which ethical casting and accessibility alter financing, writing, blocking, camera, sound, edit and post rather than appearing as a late compliance layer.",
    requiredChoicesSeed: {
      screenplay: ["sian_heder_adaptation", "gloucester_fishing_rewrite", "deaf_collaborator_feedback", "asl_translation", "specific_family_not_generic_deafness"],
      camera: ["sony_venice_6k", "arri_signature_lf", "40mm_bias", "large_format_portraits", "gloucester_landscapes", "hands_in_frame", "visual_sightlines", "boat_constraints", "naturalistic_style"],
      editing: ["geraud_brisson", "asl_interpreter_guide_track", "asl_master_notes", "three_hour_initial_cut", "thirty_plus_scenes_removed", "flashcut", "nle_storage_unknown"],
      sound: ["jared_detsikas_production_sound", "martin_pinsonnault_supervising_sound", "alexandra_fehrman_final_mix", "live_asl_body_sound", "live_singing", "perspective_silence", "formosa_group", "full_stem_chain_unknown"],
      themes: ["film_history", "2021", "coda", "independent_low_mid_budget", "deaf_casting", "asl", "accessibility", "gloucester", "fishing", "sony_venice", "sound_perspective", "independent_financing", "platform_acquisition", "chapter19"]
    },
    learningGoals: [
      "Explain CODA as Chapter 19's independent low/mid-budget rotation case after Saint Omer.",
      "Use AFI's 111-minute record as the canonical playable runtime anchor.",
      "Identify Siân Heder as writer/director and Paula Huidobro as cinematographer.",
      "Identify Geraud Brisson as editor and Diane Lederman as production designer.",
      "Identify Jérôme Seydoux, Patrick Wachsberger, Philippe Rousselet and Fabrice Gianfermi as documented producers.",
      "Separate Lionsgate development from the independently financed final production.",
      "Explain why star-driven financing assumptions conflicted with authentic Deaf casting and an unknown teenage lead.",
      "Explain Wachsberger, Vendôme and Pathé's independent-production role without inventing financing shares.",
      "Separate production financing from Apple's later Sundance acquisition and distribution.",
      "Explain authentic Deaf casting as a production-system decision rather than only a representational outcome.",
      "Identify Marlee Matlin, Troy Kotsur and Daniel Durant as Deaf principal performers.",
      "Explain Heder's use of Deaf collaborators from script development through post.",
      "Identify Alexandria Wailes and Anne Tomasetti as the documented ASL masters.",
      "Explain ASL translation as transformation of scripted intention rather than word-for-word substitution.",
      "Explain regional and family-specific signing as continuity and authenticity work.",
      "Explain why hands must remain visible when ASL carries dialogue.",
      "Explain why visual sightlines change blocking when performers must see one another to communicate.",
      "Explain why face-only close-ups can remove essential linguistic information.",
      "Explain how varied coverage can preserve signs without defaulting to constant medium shots.",
      "Explain interpreter access and Deaf-set communication as normal production infrastructure.",
      "Explain Gloucester as a researched working fishing community rather than scenic backdrop.",
      "Explain fishing restrictions and marine expertise as scheduling and logistics inputs.",
      "Explain why a small working fishing boat constrains crew size, camera position and planning.",
      "Explain the naturalistic visual style as a deliberate cinematographic choice.",
      "Identify Sony VENICE 6K as the documented camera system.",
      "Identify ARRI Signature LF primes as the documented lens family.",
      "Explain Huidobro's frequent 40mm use without inventing a complete lens map.",
      "Explain large-format resolution as useful for Gloucester landscapes and portraits.",
      "Explain VENICE high-ISO capability as a documented consideration for night work.",
      "Explain why camera grammar had to preserve facial performance and signed language together.",
      "Explain production sound for Deaf performers as active expressive capture.",
      "Identify Jared Detsikas as production sound mixer.",
      "Explain live capture of vocalizations, breaths, hand/body sounds and environment.",
      "Explain costume and sound collaboration to minimize clothing rustle.",
      "Explain overhead boom coverage and camera/audio negotiation as production strategy.",
      "Explain live singing with playback/earpiece support as distinct from simple lip sync.",
      "Identify Martin Pinsonnault as supervising sound editor and Alexandra Fehrman as final re-recording mixer.",
      "Explain silence as a designed perspective transition dependent on surrounding sound.",
      "Explain the concert perspective shift as authored sound storytelling.",
      "Explain location response/reverb work as a way to ground music in photographed spaces.",
      "Explain why ASL scenes required an interpreter guide track for Geraud Brisson.",
      "Explain ASL-master continuity notes as an editorial verification layer.",
      "Explain the roughly three-hour first cut and removal of thirty-plus shot scenes as structural editing evidence.",
      "Identify Flashcut as the documented editing location while keeping NLE/storage details unresolved.",
      "Explain how COVID struck after picture editing but before color and final sound were fully finished.",
      "Explain remote color correction with Mels in Montreal as a pandemic-era finishing adaptation.",
      "Identify Formosa Group in Los Angeles as the documented final sound location.",
      "Explain limited cleanup VFX as support for spontaneous location shooting rather than a dominant effects pipeline.",
      "Explain Apple acquisition/release as circulation history after independent production.",
      "Maintain an uncertainty register for audited budget, financing shares, insurance, schedule, permits, fishing safety, camera/data, lighting, accessibility costs, NLE/storage, ADR/foley, mix stems, music economics, color transforms and recoupment.",
      "Build a closing production audit covering financing boundary, Deaf collaboration, ASL workflow, Gloucester logistics, camera grammar, live sound/music, edit, COVID post and distribution boundary."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the CODA evidence hierarchy", player_task: "Separate institutional records, filmmaker testimony, sound-team interviews and later reporting before promoting claims." },
      { id: "financing_boundary", label: "Separate development from final financing", player_task: "Track Lionsgate development, the independent move and later Apple acquisition without collapsing them into one funding source." },
      { id: "casting_principle", label: "Lock authentic Deaf casting", player_task: "Treat Deaf performers in Deaf roles as a non-negotiable creative and production requirement." },
      { id: "deaf_collaboration", label: "Build Deaf collaboration into prep", player_task: "Use lived-experience collaborators to challenge hearing assumptions in writing, design, blocking and post." },
      { id: "asl_translation", label: "Translate the script into ASL", player_task: "Work through meaning, regionalism and family dynamics rather than literal English substitution." },
      { id: "asl_master_system", label: "Assign ASL masters", player_task: "Separate translation/research work from actor/on-set monitoring while preserving documented roles." },
      { id: "gloucester_research", label: "Research Gloucester", player_task: "Learn the fishing community, regulations, geography and working rhythms before locking scenes." },
      { id: "boat_logistics", label: "Plan the fishing boat", player_task: "Limit crew and equipment to the practical capacity and safety needs of a working small boat." },
      { id: "visual_contract", label: "Define the naturalistic visual contract", player_task: "Keep style subtle and character-led while preserving geography for work, family and signed dialogue." },
      { id: "camera_package", label: "Lock VENICE large format", player_task: "Use Sony VENICE 6K and ARRI Signature LF primes for landscape resolution and portraiture." },
      { id: "lens_bias", label: "Build around the 40mm", player_task: "Use the documented 40mm preference as a baseline without inventing a complete lens chart." },
      { id: "sign_framing", label: "Keep signs in frame", player_task: "Frame faces, hands and upper bodies so linguistic information survives the shot." },
      { id: "visual_sightlines", label: "Protect visual communication", player_task: "Block Deaf characters so they can see one another instead of using conventions that break sightlines." },
      { id: "coverage_design", label: "Vary coverage without losing ASL", player_task: "Find over-shoulder, profile, group and moving compositions that preserve signs." },
      { id: "night_capture", label: "Plan low-light work", player_task: "Use the documented high-ISO benefit of VENICE while keeping the unverified lighting package unresolved." },
      { id: "production_sound", label: "Capture expressive production sound", player_task: "Record vocalizations, breaths, hand/body contact and environment cleanly even when dialogue is visual." },
      { id: "costume_sound", label: "Coordinate costume and microphones", player_task: "Reduce clothing rustle and preserve boom/wireless options around expressive movement." },
      { id: "live_music", label: "Prepare live singing", player_task: "Coordinate playback, earpieces, performers and production sound so singing can feel physically present." },
      { id: "interpreter_edit_track", label: "Record an ASL editor guide", player_task: "Provide Geraud Brisson with an interpreter guide track aligned to signed scenes." },
      { id: "asl_continuity_notes", label: "Carry ASL notes into post", player_task: "Use ASL-master notes to flag dropped, inaccurate or poorly framed signs." },
      { id: "assembly", label: "Build the long assembly", player_task: "Accept the roughly three-hour first cut as material for structural discovery." },
      { id: "editorial_restructure", label: "Find the final film", player_task: "Remove scenes and reshape arcs while protecting Deaf-family specificity, Ruby's point of view and signed continuity." },
      { id: "perspective_sound", label: "Design hearing perspective", player_task: "Use sound density, silence and transitions to shift audience alignment." },
      { id: "concert_silence", label: "Build the concert perspective shift", player_task: "Construct the move into Deaf-family experience using surrounding sonic context and deliberate silence." },
      { id: "location_reverb", label: "Ground music in spaces", player_task: "Use captured room response and mix choices so music belongs to the photographed environment." },
      { id: "covid_handoff", label: "Replan post under COVID", player_task: "Keep picture-edit continuity while moving finishing tasks across Montreal and Los Angeles." },
      { id: "remote_grade", label: "Manage remote color", player_task: "Coordinate Heder, Huidobro, DIT/colorist and Mels while monitoring display mismatch risk." },
      { id: "final_sound", label: "Finish sound at Formosa", player_task: "Carry Montreal sound work into Los Angeles final mixing without inventing undocumented stem routing." },
      { id: "cleanup_vfx", label: "Use limited cleanup VFX", player_task: "Remove distracting land or visible earpieces where needed while keeping location spontaneity intact." },
      { id: "distribution_boundary", label: "Separate acquisition from production", player_task: "Treat Sundance and Apple's later deal as circulation evidence, not retrospective production financing." },
      { id: "uncertainty_register", label: "Protect unresolved claims", player_task: "Keep budget allocation, schedule, permits, data, lighting, accessibility costs, full post chain and recoupment unresolved without stronger sources." },
      { id: "production_verification", label: "Close the CODA case", player_task: "Verify financing boundary, accessibility, ASL, fishing logistics, image, sound, edit, finishing and distribution claims before canonical promotion." }
    ]
  }
] as const;

export function mergeChapterNineteenCodaExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenCodaExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_coda_verified",
      source: { list_id: "manual_chapter_nineteen_coda_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
