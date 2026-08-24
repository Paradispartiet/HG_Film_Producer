import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenZodiacExpansionDefinitions = [
  {
    id: "scenario_zodiac_2007",
    title: "Zodiac",
    originalTitle: "Zodiac",
    year: 2007,
    titleType: "Movie",
    runtimeMins: 158,
    directors: ["David Fincher"],
    genres: ["Drama", "Crime", "Mystery"],
    sourceId: "asc_zodiac_2007",
    sourceUrl: "https://theasc.com/article/flashback-zodiac/",
    scenarioType: "viper_filmstream_uncompressed_444_tapeless_dmag_lto_digital_negative_custom_conform_di_filmout_2007",
    premise: "Build Zodiac as a Chapter 18 anchor for the moment digital acquisition becomes a data-management and post-production system, not merely a new camera. American Cinematographer documents Thomson Viper FilmStream HD capture and says Zodiac was among the first Hollywood features to use an uncompressed-HD-to-drive workflow. Fincher and Harris Savides tested the entire chain before principal photography, deliberately pushing exposure extremes and carrying Viper material through grading, film-out, release print and large-screen projection so capture decisions were judged against theatrical delivery. Savides used Zeiss DigiPrimes, often wide open with ND filtration, and a Lee 20 CC magenta filter to counter the raw green bias; the production avoided in-camera manipulation because protecting a clean 4:4:4 source was central. The Post Magazine workflow record makes the deeper historical shift explicit: approximately 18 million DPX files were acquired in 4:4:4 1920x1080p to S.two DFRs using D.Mag drives. Rock Paper Scissors transferred set data through A.Dock to LTO-3, performed QC and pixel-for-pixel verification, created two pristine digital-negative clones, stored one off-site, and reports a complete read-back/bit-by-bit verification of 144 TB without losing a frame. Editorial simultaneously generated DVCPRO HD media through a Shake/Final Cut pipeline, while the same facility assumed functions historically associated with a lab: archive, dailies, data management, conform and some effects. A custom conform application rebuilt the online from original 1920x1080 10-bit 4:4:4 DPX files; PIX carried frame-, shot-, sequence- and comment-level review data. Technicolor Digital Intermediates and colorist Stephen Nakamura handled DI grading, while later Lowry/DTS processing addressed noise, dead pixels, ringing and detail consistency across the show before files returned to TDI and were recorded to 35mm. Preserve the boundary between acquisition and theatrical output: Zodiac is an all-data principal digital-acquisition case, but its release pipeline still explicitly includes 35mm output. Preserve the Viper's limitations as part of the lesson: highlight shoulder/overexposure was a concern, raw output looked flat/green, the camera needed tethered recording and technical support, and Savides stressed that uncompressed data cannot rescue bad exposure. Production design and cinematography pursued mundane period naturalism rather than technological spectacle, drawing on Stephen Shore, William Eggleston and police-file photographs. The Chronicle newsroom was built in Los Angeles' Terminal Annex, with practical fluorescent fixtures and controlled daylight. Sound was equally research-heavy: Mix documents Ren Klyce, Richard Hymns, David Parker and Michael Semanick at Skywalker/Tyrell, period-specific recordings of IBM Selectrics, manual typewriters, telephones and vehicles, and David Shire's score growing from temp use of his The Conversation music to roughly 37 minutes of original score. AFI and BFI both record a 158-minute release and confirm David Fincher, James Vanderbilt, Harris Savides, Angus Wall, Donald Graham Burt and David Shire. Do not invent 2K sensor capture, a tape-based camera master, an exact universal exposure index, a claim that 4:4:4 means unlimited dynamic range, a digital-only theatrical release, a fully CGI San Francisco, or a claim that data management removed the need for rigorous archival redundancy.",
    requiredChoicesSeed: {
      screenplay: ["fact_dense_investigative_structure", "objective_observational_style", "no_killer_pov_gimmick"],
      camera: ["viper_filmstream_uncompressed_hd", "clean_444_capture", "digiprime_nd_magenta_filter", "monitor_based_judgment", "no_false_2k_capture_claim"],
      editing: ["dmag_ingest", "lto3_dual_digital_negative", "pixel_verification", "dvcpro_hd_proxy", "pix_review_database", "custom_dpx_conform", "technicolor_di", "lowry_dts_processing", "35mm_output"],
      sound: ["period_typewriter_phone_vehicle_recording", "skywalker_tyrell_post", "shire_score_from_temp_to_original", "no_generic_period_sound_library_claim"],
      themes: ["film_history", "2000s", "zodiac", "david_fincher", "harris_savides", "angus_wall", "viper_filmstream", "uncompressed_hd", "444", "1920x1080", "dmag", "stwo", "lto3", "digital_negative", "pixel_verification", "144tb", "18_million_dpx", "dvcpro_hd", "final_cut_pro", "shake", "pix", "custom_conform", "digital_intermediate", "stephen_nakamura", "lowry_dts", "filmout", "period_naturalism", "ren_klyce", "david_shire"],
    },
    learningGoals: [
      "Explain why Zodiac is historically important as an all-data workflow, not merely because it used a Viper camera.",
      "Identify Thomson Viper FilmStream as uncompressed HD-to-drive acquisition and keep that distinct from later 2K/4K sensor-language.",
      "Explain why Fincher and Savides tested the complete pipeline through grading, film-out, release print and theater projection before photography.",
      "Treat 4:4:4 capture as a color-sampling/data-preservation choice, not as a promise of unlimited highlight latitude or recoverability.",
      "Preserve Savides' warning that uncompressed data cannot rescue exposure beyond the sensor's usable range.",
      "Explain the practical consequences of tethered Viper recording, technical support, raw green/flat monitoring and the need to learn representational monitors.",
      "Use Zeiss DigiPrimes, wide-open operation, ND filtration and the Lee 20 CC magenta filter as documented parts of the camera strategy without inventing per-shot lens metadata.",
      "Connect period naturalism to Stephen Shore, William Eggleston and Zodiac police-file photography rather than treating digital clarity as the desired look by itself.",
      "Explain why the Chronicle newsroom combined a large constructed set, practical fluorescent lighting and controlled daylight.",
      "Model D.Mag as temporary set-side storage that had to enter a verified archival pipeline rather than as a permanent master.",
      "Explain the D.Mag-to-A.Dock-to-LTO-3 path and why two pristine clones plus off-site storage constituted a digital-negative protection strategy.",
      "Use Post Magazine's pixel-for-pixel and bit-by-bit verification language to show that digital negatives require active integrity checking.",
      "Keep the documented 144 TB archive and approximately 18 million DPX files as scale evidence without generalizing those figures to every digital production.",
      "Separate original 1920x1080 10-bit 4:4:4 DPX camera data from DVCPRO HD editorial proxies.",
      "Explain how Shake/FCP processing created editable media while preserving the high-quality source for conform and finishing.",
      "Show how Rock Paper Scissors absorbed laboratory-like tasks: archiving, dailies, data management, conform and selected effects work.",
      "Treat PIX as production communication infrastructure linking frames, shots, sequences and Fincher's remote comments.",
      "Explain why doubling from one Viper to two cameras increased render/dailies pressure and forced the pipeline to scale.",
      "Describe the custom conform as reconstruction of the final timeline from original DPX frames rather than export from low-resolution proxies.",
      "Connect Technicolor DI grading to the look established in camera and in preproduction tests rather than assuming DI was used to invent the look afterward.",
      "Explain Lowry/DTS image processing as bounded repair/enhancement for noise, dead pixels, ringing and consistency, not as proof that capture quality was irrelevant.",
      "Preserve the final return to TDI and 35mm recording as evidence that digital capture and data post could still terminate in photochemical theatrical delivery.",
      "Explain why VFX plate delivery becomes simpler when original frame ranges are already data files inside editorial infrastructure.",
      "Keep hundreds of TV-monitor composites and limited cleanup work distinct from a false claim that the film's period world was primarily CGI.",
      "Use Ren Klyce's period-specific typewriter, telephone and vehicle recording as evidence that sonic historical authenticity was produced, not inherited automatically.",
      "Explain how David Shire's score emerged from a sound-design/source-music plan and collaborative PIX review rather than being fixed at the start.",
      "Use 158 minutes for gameplay because AFI and BFI converge on that runtime.",
      "Compare Zodiac with Collateral: both use Viper-era technology, but Zodiac's Chapter 18 distinction is the end-to-end tapeless digital-negative/data pipeline rather than hybrid low-light acquisition.",
    ],
    phases: [
      { id: "pipeline_test", label: "Test capture through release print before principal photography", player_task: "Push exposure extremes on the Viper, grade and film-out the tests, then project the release-print result at theater scale before locking the production pipeline." },
      { id: "capture_444", label: "Capture a clean uncompressed 4:4:4 source", player_task: "Record Viper FilmStream HD without baking unnecessary camera manipulation into the source, protecting full-resolution image data for downstream conform and grading." },
      { id: "lens_filter_strategy", label: "Control depth, filtration and green-biased raw output", player_task: "Use DigiPrimes, ND filtration and the documented 20 CC magenta compensation while keeping exposure inside the Viper's highlight and shadow limits." },
      { id: "monitor_learning", label: "Learn what the HD monitors do and do not represent", player_task: "Judge lighting through high-end monitors calibrated by prior film-out tests, remembering that on-set display is a representation rather than the final theatrical image." },
      { id: "period_naturalism", label: "Make digital clarity serve mundane period truth", player_task: "Use Shore, Eggleston and police-file references to restrain color, camera movement and lighting so the image supports factual accumulation rather than technological spectacle." },
      { id: "newsroom_build", label: "Build and light the Chronicle as an information machine", player_task: "Coordinate Terminal Annex construction, hanging practical fluorescents, daylight control and wide compositions while avoiding Viper highlight clipping." },
      { id: "dmag_capture", label: "Treat set-side D.Mag as the beginning of custody, not the archive", player_task: "Move each D.Mag promptly into an ingest/QC system with clear identifiers and no assumption that a single drive is a protected negative." },
      { id: "lto_negative", label: "Create and verify redundant digital negatives", player_task: "Transfer through A.Dock to LTO-3, QC the images, create two pristine clones, verify them pixel-for-pixel/bit-for-bit and place one copy off-site." },
      { id: "proxy_editorial", label: "Generate editorial proxies without confusing them with source masters", player_task: "Use Shake/FCP processing to make DVCPRO HD editorial media while preserving original DPX frames for final conform." },
      { id: "dailies_scale", label: "Scale dailies when a second camera doubles the footage stream", player_task: "Expand rendering capacity and tracking when the two-camera strategy increases volume instead of allowing backlog to weaken verification or editorial access." },
      { id: "pix_review", label: "Attach creative notes to frame- and sequence-level records", player_task: "Use PIX-style database review so remote director comments remain linked to exact editorial objects rather than becoming detached email prose." },
      { id: "custom_conform", label: "Rebuild the online from original DPX files", player_task: "Use the custom conform tool to assemble the approved cut from 1920x1080 10-bit 4:4:4 source frames, not from DVCPRO HD proxies." },
      { id: "vfx_delivery", label: "Deliver exact source frame ranges directly to effects vendors", player_task: "Copy authenticated DPX ranges for Digital Domain, Matte World and other vendors so extensions or revisions match the production source precisely." },
      { id: "di_grade", label: "Grade at Technicolor inside the look established during prep", player_task: "Work with Stephen Nakamura to control contrast and color while preserving Savides' naturalism and avoiding a post-hoc reinvention of the photographed look." },
      { id: "image_repair", label: "Repair digital artifacts without erasing the medium", player_task: "Use Lowry/DTS processing to address noise, dead pixels, ringing and consistency, validating wedges so enhancement does not become uncontrolled smoothing." },
      { id: "sound_period", label: "Record the period soundscape as specific objects", player_task: "Build typewriter, telephone and vehicle layers from period-specific recordings and perspectives rather than relying on a generic historical ambience library." },
      { id: "score_evolution", label: "Let score emerge through picture, sound design and PIX review", player_task: "Develop David Shire's cues from the Conversation-derived temp idea into original score while balancing them against Klyce's designed period sound." },
      { id: "filmout", label: "Return the finished digital pipeline to 35mm theatrical output", player_task: "Send final processed DPX back through TDI and 35mm recording, comparing the film result with the release-print tests that defined the pipeline in prep." },
    ],
  },
] as const;

export function mergeChapterEighteenZodiacExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenZodiacExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_zodiac_verified",
      source: { list_id: "manual_chapter_eighteen_zodiac_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
