import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenDuneExpansionDefinitions = [
  {
    id: "scenario_dune_2021",
    title: "Dune",
    originalTitle: "Dune",
    aliases: ["Dune: Part One"],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 155,
    directors: ["Denis Villeneuve"],
    genres: ["Adventure", "Drama", "Sci-Fi"],
    sourceId: "venice_dune_2021",
    sourceUrl: "https://www.labiennale.org/en/cinema/2021/lineup/out-competition/dune",
    scenarioType: "large_format_digital_alexa_lf_panavision_ultra_vista_h_series_imax_hybrid_filmout_35mm_fotokem_location_desert_practical_vfx_sandscreen_dneg_production_design_remote_editorial_2021",
    premise: "Build Dune as the fourth source-first Chapter 19 Production Case and keep its production systems distinct instead of reducing the film to a generic effects blockbuster. Venice anchors Denis Villeneuve as director, Jon Spaihts/Villeneuve/Eric Roth as screenwriters, Greig Fraser as cinematographer, Patrice Vermette as production designer, Jacqueline West and Bob Morgan as costume designers, Joe Walker as editor, Hans Zimmer as composer, Mark Mangini and Theo Green in supervising sound, Paul Lambert in visual effects, a 155-minute running time and a multinational production footprint spanning the United States, Hungary, Jordan, the United Arab Emirates, Norway and Canada. ARRI documents that principal photography used ALEXA LF with Panavision Ultra Vista and H-series large-format lenses and later an ALEXA Mini LF prototype, including extensive aerial desert work; the case therefore treats large-format digital capture as title-specific evidence rather than a generic IMAX label. American Cinematographer documents an unusual hybrid finish: extensive film-versus-digital tests led the filmmakers to capture digitally, complete the main grade, laser-record the timed digital master to Kodak Vision3 5254 digital-intermediate film stock at FotoKem, scan it back to digital and apply final grading touches. That process is a finishing transform, not evidence that Dune was photographed on 35mm negative. Patrice Vermette's production-design testimony places design development from February 2018 and describes roughly 125 to 130 illustrations after seven months forming a visual bible/cookbook that aligned sets, props, planets and wider world-building before production; these figures are preserved as his scoped account rather than converted into a complete asset inventory. The VFX case keeps practical and digital work complementary. DNEG/Foundry reporting describes practical foundations for many shots, including helicopters used as reference/plate foundations for ornithopters, gasoline flames used as lighting and reflection references for later effects, and sand-colored screens on Arrakis so foreground light, spill and reflections belonged to the desert palette. Sandscreens are therefore a production/compositing strategy, not evidence that no blue or green screens were used anywhere. Foundry also documents Nuke as DNEG's compositing tool for its Dune work, deep-data handling and specific shield-effect techniques, but the case does not generalize one vendor's pipeline into a complete whole-film software map. Joe Walker's editorial testimony documents a process that began in Budapest/on set, continued in Los Angeles and shifted to distributed remote collaboration after the pandemic shutdown; the added time allowed further experimentation and refinement, but the case does not rewrite principal photography as a pandemic-era production. Walker also describes constant cross-talk among edit, sound and music, including temporary/iterative sound ideas used to test story choices. Sound is treated as an authored production system through credited supervising sound editors Mark Mangini and Theo Green and title-specific interviews, while exact microphones, preamps, plug-in chains, session topology and final mix routing remain unresolved unless directly sourced. The player must coordinate adaptation structure, large-format camera choices, desert location logistics, monumental production design, costume and stillsuit fabrication, practical photography, sandscreens, physical effects, VFX replacement and integration, editorial iteration, hybrid photochemical/digital finishing, sound/music collaboration, theatrical/IMAX presentation and pandemic-era post-production continuity while refusing unsupported exact budget allocations, department headcounts, complete camera/lens serial inventory, every filtration choice, per-shot exposure values, all VFX vendor shot counts, full software versions, exact DI settings beyond the documented film-out path, proprietary compositing templates, complete sound recording chains, final mix topology or a claim that theatrical/streaming distribution proves production financing or creative authorship.",
    requiredChoicesSeed: {
      screenplay: ["spaihts_villeneuve_roth", "adapt_first_half", "worldbuilding_economy", "politics_ecology_religion", "part_one_boundary", "runtime_provenance"],
      camera: ["greig_fraser", "alexa_lf", "alexa_mini_lf", "panavision_ultra_vista", "panavision_h_series", "large_format_depth", "desert_location_light", "shot_parameters_unknown"],
      editing: ["joe_walker", "budapest_on_set_edit", "los_angeles_edit", "pandemic_remote_post", "sound_music_cross_talk", "hybrid_finish_handoff", "runtime_provenance"],
      sound: ["mark_mangini", "theo_green", "hans_zimmer", "sound_music_boundary", "iterative_temp_sound", "recording_chain_unknown"],
      themes: ["film_history", "2021", "dune", "denis_villeneuve", "greig_fraser", "patrice_vermette", "joe_walker", "paul_lambert", "jacqueline_west", "bob_morgan", "alexa_lf", "alexa_mini_lf", "ultra_vista", "h_series", "large_format", "imax", "desert_location", "sandscreen", "practical_vfx", "dneg", "nuke", "hybrid_finish", "fotokem", "kodak_vision3_5254", "remote_post", "chapter19"]
    },
    learningGoals: [
      "Explain Dune as the fourth source-first Chapter 19 Production Case and distinguish large-format digital capture, practical/location photography, VFX integration and photochemical/digital finishing as separate production layers.",
      "Use the Venice/BFI 155-minute record as the playable runtime anchor while preserving alternate distribution-version durations outside the canonical scenario.",
      "Identify Denis Villeneuve as director and Jon Spaihts, Denis Villeneuve and Eric Roth as the screenplay team.",
      "Identify Greig Fraser as cinematographer, Patrice Vermette as production designer, Joe Walker as editor and Jacqueline West/Bob Morgan as costume designers.",
      "Identify Paul Lambert as visual effects supervisor and Mark Mangini/Theo Green as supervising sound editors from institutional credit records.",
      "Explain that ARRI documents ALEXA LF as the primary camera system and ALEXA Mini LF prototype use during later production, including aerial desert work.",
      "Identify Panavision Ultra Vista and H-series large-format lenses without inventing a shot-by-shot lens ledger.",
      "Explain why large-format capture changes field of view and depth relationships without reducing cinematography to sensor size alone.",
      "Keep exact ISO, stop, filtration, focus distance, shutter, camera body assignment and lens serial number unresolved at shot level unless title-specific records establish them.",
      "Explain that Dune was photographed digitally even though film became a material part of the finishing pipeline.",
      "Describe the documented FotoKem hybrid finish as digital master to film-out to scan-back to digital, followed by final grading touches.",
      "Identify Kodak Vision3 5254 digital-intermediate film stock as the documented film-out stock rather than calling it the camera negative.",
      "Explain why the hybrid finish was designed to add optical/photochemical character while retaining the digital capture architecture.",
      "Reject the false claim that Dune was shot on 35mm simply because the final image passed through film.",
      "Identify IMAX/premium theatrical framing as an exhibition and composition constraint while keeping capture, finishing and projection evidence distinct.",
      "Explain that Patrice Vermette began production-design work in February 2018 and used extended preproduction to define the film's worlds.",
      "Use Vermette's roughly 125 to 130 illustrations after seven months as a scoped testimony about design development, not a complete asset count.",
      "Explain the visual-bible/cookbook function as cross-department alignment for sets, props, planets, skies and world logic.",
      "Explain why monumental architecture, scale and material choices had to coordinate with costume, blocking, photography and VFX rather than exist as isolated concept art.",
      "Treat the multinational production footprint as a logistics and authorship context without inferring country-by-country spend or crew allocation.",
      "Explain why Jordan and UAE desert photography provides real light, atmosphere, scale and surface behavior that VFX can inherit.",
      "Explain DNEG's practical-foundation approach: physical plates and effects can provide reference for light, dust, reflections and integration even when the final object is digital.",
      "Identify helicopter photography as a documented foundation/reference strategy for ornithopter integration without claiming every ornithopter shot used the same method.",
      "Identify practical gasoline flames as lighting/reflection references for later effects in the spaceport attack without claiming all explosions were practical.",
      "Explain sandscreens as sand-colored backing designed to preserve natural desert light, reflection and spill on foreground elements.",
      "Reject the stronger claim that sandscreens replaced all blue- or green-screen work across the production.",
      "Explain the roto/key/multiplicative compositing logic documented by DNEG/Foundry without turning one vendor technique into a universal compositing recipe.",
      "Identify Nuke as DNEG's documented compositing tool on Dune while refusing to infer the complete whole-film software stack.",
      "Explain that deep compositing and large shot complexity are vendor-pipeline evidence, not proof of one monolithic production system.",
      "Use the shield-effect case to explain that some effects were solved through frame-sensitive compositing and hand-authored reveal decisions rather than a single procedural preset.",
      "Explain that visual-effects realism depended on coordination among practical photography, cinematography, special effects, animation, FX, environment and compositing.",
      "Identify Joe Walker's edit as beginning in Budapest/on set and continuing in Los Angeles before the pandemic forced remote collaboration.",
      "Explain that pandemic remote work affected post-production and editorial collaboration rather than principal photography's original production model.",
      "Explain Walker's account that remote time allowed additional reflection and experimentation without turning schedule disruption into a universal creative benefit.",
      "Explain editorial cross-talk with sound and music as an iterative story-development tool rather than a rigid downstream handoff.",
      "Keep exact edit-software versions, shared-storage topology, proxy settings, remote-review stack and conform recipe unresolved unless directly sourced.",
      "Identify Hans Zimmer as composer while keeping score authorship distinct from supervising sound editing and re-recording responsibilities.",
      "Identify Mark Mangini and Theo Green as supervising sound editors and treat Dune's sonic world as a designed production layer.",
      "Explain why temporary sound experiments in editorial can test narrative ideas before final performance or mix elements are recorded.",
      "Keep exact microphones, field recorders, preamps, DAW versions, plug-ins, track counts, stems and final mix routing outside the verified layer unless directly sourced.",
      "Explain how adaptation economy, architecture, costume, cinematography, sound, music and VFX jointly make unfamiliar world rules legible.",
      "Explain why Dune belongs in Chapter 19 even though principal photography finished before the pandemic: its post-production, release context and large-scale production systems bridge the transition into the 2020s.",
      "Separate production chronology from delayed release and platform/theatrical distribution history.",
      "Reject a claim that Warner Bros. distribution or streaming availability proves department financing shares or creative-control boundaries.",
      "Maintain an uncertainty register for budget allocations, production-company shares, detailed schedule, department headcounts, complete lens/camera ledger, filtration, per-shot exposure, vendor shot counts, software versions, DI parameters beyond the sourced film-out process, sound chains and final mix topology.",
      "Explain Dune's historical significance as a large-scale 2021 production whose realism comes from coordinated physical environments, large-format digital capture, practical references, complex VFX, hybrid photochemical finishing and dense sound/music authorship rather than from one dominant technology.",
      "Build a closing production audit that checks runtime/credits provenance, capture-versus-finish distinction, design preproduction, location/practical foundations, sandscreen boundaries, vendor-specific VFX evidence, editorial pandemic chronology, sound/music boundaries and unresolved claims before production verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Dune evidence hierarchy", player_task: "Separate Venice/BFI credits and runtime, ARRI camera records, ASC/FotoKem finishing testimony, Vermette design testimony, DNEG/Foundry VFX reporting, Joe Walker editorial testimony and sound interviews before promoting claims." },
      { id: "runtime_credits", label: "Lock runtime and principal credits", player_task: "Use 155 minutes and the Venice/BFI department credits as the canonical institutional anchor." },
      { id: "adaptation_boundary", label: "Define Part One", player_task: "Shape the adaptation around the selected first-film arc while keeping later-novel material outside the current production case." },
      { id: "worldbuilding_economy", label: "Make world rules legible", player_task: "Coordinate exposition, design, performance and sound so political, ecological and religious systems are understandable without encyclopedic dialogue." },
      { id: "design_preproduction", label: "Build the design bible", player_task: "Use Vermette's long preproduction and visual-bible process as alignment evidence without inventing a complete concept-art inventory." },
      { id: "architectural_scale", label: "Establish monumental scale", player_task: "Coordinate set mass, human scale, blocking and frame design so architecture carries political and environmental meaning." },
      { id: "costume_systems", label: "Integrate costume and world design", player_task: "Coordinate West/Morgan costume systems with climate, hierarchy, movement and production design while keeping unsourced fabrication counts bounded." },
      { id: "location_strategy", label: "Ground Arrakis in real environments", player_task: "Use desert locations for light, atmosphere, terrain and scale while distinguishing photographed geography from fictional world identity." },
      { id: "large_format_capture", label: "Build the large-format camera system", player_task: "Use ALEXA LF, later Mini LF and Panavision Ultra Vista/H-series evidence without inventing a shot-by-shot package ledger." },
      { id: "desert_exposure", label: "Protect desert image behavior", player_task: "Balance faces, costumes, sand, sky and heat while keeping exact per-shot exposure and filtration unresolved." },
      { id: "imax_composition", label: "Plan premium-format composition", player_task: "Protect composition across theatrical presentation formats without conflating exhibition aspect ratios with camera-negative format." },
      { id: "practical_foundations", label: "Give VFX physical evidence", player_task: "Capture practical plates, dust, flames, reflections and movement references that digital elements can inherit." },
      { id: "ornithopter_reference", label: "Build ornithopter integration", player_task: "Use documented helicopter/practical reference where supported and preserve uncertainty about methods in other shots." },
      { id: "sandscreen", label: "Use sandscreens deliberately", player_task: "Match backing color to desert light and spill so foreground integration remains physically plausible while preserving other chroma-key methods where used." },
      { id: "special_effects", label: "Coordinate physical effects", player_task: "Use on-set fire, dust, wind and mechanical effects as performance and lighting inputs without pretending every final effect remains practical." },
      { id: "vfx_vendor_boundary", label: "Bound vendor evidence", player_task: "Use DNEG-specific workflow testimony only for the work it documents and keep the full vendor/software map unresolved." },
      { id: "deep_compositing", label: "Manage complex composites", player_task: "Coordinate large deep-data composites and multi-department passes while keeping proprietary templates and infrastructure outside the canonical claim layer." },
      { id: "shield_effect", label: "Version shield behavior", player_task: "Preserve readability and impact direction through frame-sensitive compositing rather than assuming one automatic procedural solution." },
      { id: "editorial_on_set", label: "Start editorial during production", player_task: "Use Walker's Budapest/on-set editing context to test story structure while photography is still active." },
      { id: "editorial_la", label: "Continue the long-form cut", player_task: "Develop pacing, performance and world clarity after production moves into Los Angeles post." },
      { id: "remote_post", label: "Shift post-production remotely", player_task: "Preserve the pandemic transition to distributed editorial collaboration without rewriting principal photography as remote production." },
      { id: "sound_edit_cross_talk", label: "Iterate sound inside the cut", player_task: "Use temporary and exploratory sound ideas to test narrative meaning while keeping final sound authorship distinct." },
      { id: "music_edit_cross_talk", label: "Coordinate score and editorial", player_task: "Allow music ideas to affect pacing and structure without collapsing Zimmer's role into editing or sound-design authorship." },
      { id: "picture_lock_handoff", label: "Prepare the finishing handoff", player_task: "Version editorial decisions into VFX, color, sound and delivery while keeping exact conform topology unresolved." },
      { id: "digital_grade", label: "Complete the principal digital grade", player_task: "Establish the timed digital master before the sourced film-out step." },
      { id: "filmout_5254", label: "Record the image to film", player_task: "Use FotoKem's documented Kodak Vision3 5254 DI film-out as a finishing transform, not a camera-negative rewrite." },
      { id: "scan_back", label: "Scan the film-out back to digital", player_task: "Recover the photochemical transform into the digital pipeline while retaining range and detail for final work." },
      { id: "final_grade", label: "Apply final grading touches", player_task: "Finish the hybrid image after scan-back without inventing unsourced node trees, LUT stacks or printer-light values." },
      { id: "sound_design", label: "Build the sonic world", player_task: "Coordinate Mangini/Green sound design with place, scale, machinery, bodies and the Voice while keeping exact recording chains source-bounded." },
      { id: "theatrical_delivery", label: "Separate production from exhibition", player_task: "Treat IMAX/premium presentation and release strategy as delivery/circulation layers rather than proof of capture medium or financing." },
      { id: "unknowns_register", label: "Maintain the Dune unknowns register", player_task: "Track budget shares, headcounts, schedule detail, full camera/lens ledger, filtration, per-shot exposure, VFX vendor totals, software versions, DI specifics, sound chains and mix topology explicitly." },
      { id: "delivery_review", label: "Audit the complete Dune production system", player_task: "Verify provenance, adaptation boundary, design development, capture/finish distinction, physical/VFX integration, sandscreen scope, editorial chronology, sound/music authorship and remaining unknowns before production verification." }
    ]
  }
] as const;

export function mergeChapterNineteenDuneExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenDuneExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_dune_verified",
      source: { list_id: "manual_chapter_nineteen_dune_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
