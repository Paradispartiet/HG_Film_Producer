import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenRrrExpansionDefinitions = [
  {
    id: "scenario_rrr_2022",
    title: "RRR",
    originalTitle: "RRR",
    aliases: ["RRR: Rise Roar Revolt", "Rise Roar Revolt"],
    year: 2022,
    titleType: "Movie",
    runtimeMins: 180,
    directors: ["S.S. Rajamouli"],
    genres: ["Action", "Drama"],
    sourceId: "australian_classification_rrr_2022",
    sourceUrl: "https://www.classification.gov.au/titles/rrr-rise-roar-revolt",
    scenarioType: "regional_global_telugu_industrial_scale_action_epic_large_format_alexa_lf_signature_primes_unreal_previs_stuntvis_practical_sets_miniatures_rigs_vfx_digidoubles_crowd_extension_covid_continuity_multi_year_shoot_dvv_entertainment_original_telugu_multilingual_distribution_imax_3d_platform_circulation_2022",
    premise: "Build RRR as Chapter 19's regional/global rotation case without flattening Telugu cinema into a generic Indian or global-streaming model. The Australian Classification Board records an original 180-minute public-exhibition DCP from India, directed by S. S. Rajamouli, produced by D. V. V. Danayya through DVV Entertainments, in Telugu and English; BFI separately records the 2022 Indian film and identifies Rajamouli as director and writer. ARRI and cinematographer K. K. Senthil Kumar document ALEXA LF with Signature Primes, extensive SkyPanel use, and a shoot whose continuity became unusually difficult when COVID-19 stretched production across four years. Kumar describes keeping detailed camera-report notes for lighting, camera position, movement, exposure and lens settings so revisited scenes could match. American Cinematographer and postPerspective document a long preproduction process using storyboards, Unreal Engine previsualization and stunt visualization for major action sequences; Kumar says he usually operated one ALEXA LF himself, expanding to two or at most three cameras for large action, and describes RRR as the first Indian film he shot in large format with a pipeline intended to survive Dolby Vision, IMAX and 3D exhibition. Production designer Sabu Cyril describes a set-heavy production in Hyderabad using extensions, miniatures, mechanical rigs and dedicated workshop/rehearsal/editing/HOD infrastructure; he reports that the action material alone took about three months, with daily on-set populations commonly around 200 and sometimes reaching 1,000. Rajamouli's bridge sequence demonstrates hybrid construction rather than a simple practical-versus-digital split: full-size upper and lower bridge sets, miniature sections, visual effects and coordinated photography had to intercut at matching scale and light. VFX supervisor Srinivas Mohan reports roughly 2,800 VFX shots across the feature, coordinated over three and a half years with more than a dozen studios, while Digital Domain separately documents 213 shots across four sequences involving previs, digidouble R&D, set extension, crowds, fire, debris and other FX. Reporting also records more than 300 shooting days across Hyderabad, Bulgaria and Ukraine and a very large daily workforce; these scale claims are useful as secondary production context but must not be promoted above department-level primary interviews when details conflict. The Chapter 19 production lesson is therefore not that scale equals quality. The player must coordinate Telugu-language regional-industrial authorship, large-format capture, action previs, stunt rehearsal, practical sets, miniatures, rigs, crowds, VFX, continuity across pandemic interruption, multilingual delivery, theatrical premium formats and later platform circulation while keeping exact final negative/runtime variants, full budget, financing and recoupment, every shooting-day headcount, complete camera serial/body package, all lens focal lengths, codec/frame-rate choices, every lighting diagram, complete stunt safety paperwork, complete miniature scales, all VFX vendor shot allocations, color pipeline, sound mix chain, subtitle/dub workflow and territory-by-territory rights terms unresolved unless title-specific public evidence establishes them.",
    requiredChoicesSeed: {
      screenplay: ["telugu_regional_industry_anchor", "fictionalized_historical_bromance", "action_drama_scale", "multilingual_circulation_without_origin_erasure", "180_minute_original_dcp"],
      camera: ["arri_alexa_lf", "arri_signature_primes", "senthil_kumar_operator", "mostly_single_camera", "two_to_three_cameras_for_large_action", "large_format_premium_exhibition"],
      editing: ["previs_before_principal_photography", "stuntvis_and_mock_shoots", "vfx_turnover_after_sequence_shaping", "pandemic_continuity_management", "exact_edit_system_unknown"],
      sound: ["original_telugu_dialogue", "premium_format_delivery", "production_sound_chain_unknown", "final_mix_chain_unknown", "dub_and_subtitle_workflow_unknown"],
      themes: ["film_history", "2022", "rrr", "ss_rajamouli", "kk_senthil_kumar", "telugu_cinema", "tollywood", "regional_global", "industrial_scale", "large_format", "previsualization", "stuntvis", "production_design", "miniatures", "rigs", "visual_effects", "covid_continuity", "multilingual_distribution", "imax", "chapter19"]
    },
    learningGoals: [
      "Explain why RRR is Chapter 19's regional/global rotation case rather than a generic example of 'Indian cinema.'",
      "Identify Telugu cinema and the Hyderabad-centered production infrastructure as the film's industrial origin while keeping later Hindi and international circulation separate.",
      "Use the Australian Classification record to anchor an original 180-minute 2022 public-exhibition DCP, India as country of origin, Telugu/English language, DVV Danayya as producer and DVV Entertainments as production company.",
      "Identify S.S. Rajamouli as director and writer without treating authorship as proof that every department merely executed fixed instructions.",
      "Explain K.K. Senthil Kumar's long collaboration with Rajamouli as a production relationship that supports shared visual planning but still preserves cinematography as distinct authorship.",
      "Identify ALEXA LF and ARRI Signature Primes as title-specific camera/lens anchors from ARRI and cinematographer interviews.",
      "Explain why Kumar chose large-format capture for epic scale and premium exhibition rather than reducing large format to shallow depth of field alone.",
      "Explain the significance of a workflow intended to support Dolby Vision, IMAX and 3D while keeping exact mastering variants and delivery transforms unresolved.",
      "Explain why RRR could be extremely large in production scale while Kumar still preferred one principal camera for much of the shoot.",
      "Identify two or at most three cameras as Kumar's documented expansion for major action rather than inventing a permanently multi-camera production model.",
      "Explain previsualization as a cross-department coordination artifact connecting direction, cinematography, production design, action and VFX before expensive execution.",
      "Identify Unreal Engine as a documented previs tool for selected large action sequences without claiming the entire film was virtually produced in Unreal.",
      "Explain stunt visualization as rehearsal photography used to test action geography, camera ideas and choreography before principal photography.",
      "Distinguish stuntvis, previs, storyboards and final photography as related but non-identical planning layers.",
      "Explain why action spectacle requires readable geography even when the final image combines live action, miniatures and digital effects.",
      "Use the bridge rescue as a hybrid-construction case: full-size upper and lower sets, miniature sections and VFX had to share scale, lighting and editorial continuity.",
      "Reject a practical-versus-digital binary for RRR because the production repeatedly combines physical sets, mechanical rigs, miniatures, crowds, extensions and CG.",
      "Identify Sabu Cyril's production-design contribution as extending beyond decorative sets into rigs, miniatures, workshops, rehearsal infrastructure and action engineering support.",
      "Explain the Hyderabad production base as an integrated industrial workspace with workshops, rehearsal, editing and department rooms rather than only a shooting location.",
      "Treat Cyril's reported three months of action shooting as a department-level scale indicator without turning it into a complete principal-photography calendar.",
      "Distinguish average daily on-set populations from total production headcount and from vendor-side post-production labor.",
      "Identify Srinivas Mohan's reported 2,800 VFX shots and more than a dozen studios as evidence of distributed post-production coordination.",
      "Treat the 2,800-shot figure as the supervisor's title-specific account rather than a universal threshold for an effects-heavy film.",
      "Identify Digital Domain's 213 shots across four sequences as one vendor contribution inside a much larger VFX ecology.",
      "Explain digidouble R&D, set extension, crowd work, fire, debris and FX as different VFX problem classes requiring different asset and review workflows.",
      "Explain why invisible integration can be a VFX goal even in deliberately spectacular action imagery.",
      "Explain COVID-19 interruption as a continuity and production-management problem, not merely a release-date event.",
      "Identify Kumar's camera-report book as a concrete continuity tool recording lighting setup, camera position and movement, exposure and lens information.",
      "Explain why multi-year revisits raise continuity risks across performers, sets, weather, lighting, lenses, blocking and post-production assumptions.",
      "Separate documented four-year production stretch from the inference that principal photography ran continuously for four years.",
      "Use reports of more than 300 shooting days and very large daily crews as secondary scale context while preserving stronger department-level sources for craft claims.",
      "Explain that scale increases coordination load across transport, scheduling, safety, costume, extras, art, camera, lighting, sound, action and VFX rather than automatically increasing production value.",
      "Explain Telugu-language regional-industrial identity as compatible with simultaneous multilingual and international distribution without renaming the originating production system as pan-Indian by default.",
      "Separate original Telugu theatrical circulation from Hindi Netflix availability and other platform/territory versions.",
      "Explain premium-format theatrical circulation, later streaming availability and international rediscovery as distribution layers rather than evidence about how every shot was produced.",
      "Explain how RRR's international reception made Telugu action cinema newly legible to some overseas audiences without treating global visibility as the start of Telugu cinema history.",
      "Keep budget headlines separate from verified craft claims because reported totals and definitions vary across outlets.",
      "Keep exact financing shares, recoupment, tax incentives, insurance, payroll and territory-rights structures outside the verified layer unless primary documentation is available.",
      "Keep exact camera body serials, complete focal-length map, filters, codecs, frame rates and every lighting fixture assignment unresolved beyond the documented package.",
      "Keep complete stunt-risk assessments, wire/rig specifications and safety paperwork unresolved even where stuntvis and mechanical rigs are documented.",
      "Keep exact VFX vendor shot allocation, asset-transfer topology, color pipeline and final conform architecture unresolved beyond named vendor and supervisor evidence.",
      "Build a closing production audit that preserves regional identity, evidence hierarchy, planning layers, practical/digital hybridity, pandemic continuity, distributed VFX labor and circulation layers before Production Verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the RRR evidence hierarchy", player_task: "Separate classification/institutional records, manufacturer and society craft interviews, department interviews, vendor breakdowns and secondary scale reporting before promoting claims." },
      { id: "regional_origin", label: "Lock Telugu industrial origin", player_task: "Record RRR as a Telugu-language DVV Entertainments production from India before adding multilingual and global circulation layers." },
      { id: "runtime_lock", label: "Lock the original DCP runtime", player_task: "Use the Australian Classification 180-minute original public-exhibition DCP as the playable runtime anchor while tracking other territory/version runtimes separately." },
      { id: "large_format", label: "Choose ALEXA LF large format", player_task: "Use Kumar's documented ALEXA LF and Signature Prime package for the large-format visual baseline." },
      { id: "camera_count", label: "Keep principal camera discipline", player_task: "Preserve Kumar's mostly one-camera method and expand only to two or three cameras where large action requires it." },
      { id: "premium_formats", label: "Plan premium exhibition", player_task: "Protect image decisions for Dolby Vision, IMAX and 3D presentation without inventing undocumented master transforms." },
      { id: "previs", label: "Previsualize major action", player_task: "Use storyboards and Unreal Engine previs where multiple departments need a shared spatial model before build and rehearsal." },
      { id: "stuntvis", label: "Run stunt visualization", player_task: "Film rehearsal action to test choreography, camera angles and geography before expensive principal-photography execution." },
      { id: "production_design", label: "Engineer production design for action", player_task: "Coordinate sets, extensions, workshops, miniatures and mechanical rigs as one production-design system." },
      { id: "bridge_hybrid", label: "Build the bridge as hybrid scale", player_task: "Match full-size upper/lower bridge sets, miniature sections and VFX so cuts preserve scale and light." },
      { id: "action_geography", label: "Protect action geography", player_task: "Keep performer goals, hazards, camera positions and effects handoffs readable through complex spectacle." },
      { id: "crowd_scale", label: "Plan crowd scale", player_task: "Coordinate physical crowds and later digital extension without assuming one technique replaces the other." },
      { id: "vfx_supervision", label: "Map distributed VFX supervision", player_task: "Track the supervisor's thousands of shots and multi-studio workload through sequence ownership, assets and reviews." },
      { id: "digital_domain", label: "Integrate Digital Domain sequences", player_task: "Treat the vendor's 213 shots, previs, digidouble R&D, set extensions, crowds, fire and debris as one documented subset of the total VFX workload." },
      { id: "idigibdouble_boundary", label: "Separate digidoubles from live action", player_task: "Use digital doubles only where required by shot design and safety while preserving clear provenance of practical performance and digital augmentation." },
      { id: "lighting_system", label: "Build scalable controlled lighting", player_task: "Use the documented SkyPanel family and controllable soft-light strategy while keeping scene-by-scene fixture maps unresolved." },
      { id: "pandemic_interrupt", label: "Model pandemic interruption", player_task: "Treat shutdown and restart as scheduling, continuity, labor and asset-preservation problems across a multi-year production." },
      { id: "camera_reports", label: "Maintain continuity camera reports", player_task: "Record lighting, camera position and movement, exposure and lens settings so scenes can be revisited after long interruptions." },
      { id: "revisit_match", label: "Match revisited material", player_task: "Audit performers, sets, blocking, weather, light and camera metadata before continuing scenes shot months or years apart." },
      { id: "action_schedule", label: "Sustain long action schedules", player_task: "Budget rehearsal, reset, rigging, crowd and effects time for action work without inferring a complete shooting calendar from one department interview." },
      { id: "crew_scale", label: "Separate crew-scale metrics", player_task: "Keep daily set population, total production labor and vendor-side post staff as different measurements." },
      { id: "edit_vfx_turnover", label: "Shape sequences before VFX turnover", player_task: "Use edited previs/mock-shoot logic to reduce ambiguity before expensive final VFX work while allowing later editorial refinement." },
      { id: "versioning", label: "Track theatrical and platform versions", player_task: "Separate original Telugu cinema versions, translated/dubbed versions and platform presentations rather than assuming one universal master." },
      { id: "regional_global_distribution", label: "Map regional-to-global circulation", player_task: "Trace Telugu industrial origin through Indian multilingual distribution, premium-format overseas exhibition and later platform access without erasing origin." },
      { id: "budget_boundary", label: "Keep budget claims bounded", player_task: "Record that public budget reporting varies and do not turn headline estimates into verified finance structure." },
      { id: "safety_unknowns", label: "Keep stunt safety unknowns explicit", player_task: "Document planning and rigs without inventing unpublished risk assessments, wire specifications or safety approvals." },
      { id: "camera_unknowns", label: "Maintain camera unknowns", player_task: "Keep complete focal-length, filter, codec, frame-rate and body-serial data outside the verified layer unless title-specific sources establish them." },
      { id: "vfx_unknowns", label: "Maintain VFX unknowns", player_task: "Keep complete vendor shot allocation, asset topology, pipeline versions and conform architecture unresolved beyond named evidence." },
      { id: "sound_unknowns", label: "Maintain sound unknowns", player_task: "Preserve original-language and premium-delivery facts while leaving exact production-recording and final-mix chains unresolved." },
      { id: "delivery_review", label: "Audit the complete RRR production system", player_task: "Verify regional origin, camera evidence, previs/stuntvis, hybrid construction, VFX, pandemic continuity, scale metrics, versioning and unknowns before Production Verification." }
    ]
  }
] as const;

export function mergeChapterNineteenRrrExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenRrrExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_rrr_verified",
      source: { list_id: "manual_chapter_nineteen_rrr_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
