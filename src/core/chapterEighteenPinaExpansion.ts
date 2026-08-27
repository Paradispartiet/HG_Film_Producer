import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenPinaExpansionDefinitions = [
  {
    id: "scenario_pina_2011",
    title: "Pina",
    originalTitle: "Pina",
    aliases: [],
    year: 2011,
    titleType: "Movie",
    runtimeMins: 103,
    directors: ["Wim Wenders"],
    genres: ["Documentary"],
    sourceId: "criterion_pina_2011",
    sourceUrl: "https://www.criterion.com/films/28404-pina",
    scenarioType: "germany_france_uk_native_stereo_3d_digital_dance_documentary_sony_hdc1500_hdc_p1_mirror_rig_hdcam_sr_codex_live_performance_2011",
    premise: "Build Pina as a source-first Chapter 18 Production Case about a 2011 German-French-British dance documentary in which Wim Wenders and Tanztheater Wuppertal used native stereoscopic acquisition, live stage performance, location solos, sparse archival material and a data-heavy post pipeline to translate Pina Bausch's choreography into cinema after her death. Criterion and the official Road Movies record anchor the released feature at 103 minutes and credit Wenders as director, Gian-Piero Ringel as producer, Alain Derobe as stereographer, Hélène Louvart and Jörg Widmer as cinematographers, Erwin M. Schmidt as 3D producer, François Garnier as 3D supervisor and Toni Froschhammer as editor. Filmportal documents that Bausch and Wenders had selected four major works—Café Müller, Le Sacre du printemps, Vollmond and Kontakthof—for the planned film before Bausch died in June 2009, shortly before planned filming; the project was subsequently reconceived with the company rather than photographed as though Bausch remained present for principal photography. Schmidt's title-specific production account documents extensive stereo testing, a full-team Wuppertal test shoot before principal photography, Alain Derobe's prototype mirror rigs, Sony HDC-1500 cameras on a telescopic crane, smaller Sony HDC-P1 systems for Steadicam, Transvideo stereoscopic monitoring and a tightly planned floor-grid, camera-height and crane choreography designed around the dancers' movement. The tested lens package was reduced to 10, 14 and 20 mm DigiPrimes because every lens change required stereo recalibration; Wenders separately describes the finished film as photographed overwhelmingly on a 10 mm Zeiss prime with only very few closer shots on 14 mm, so this case keeps any final-shot use of 20 mm and all exact shot-to-lens maps unresolved. Four dance pieces were recorded live in front of sold-out audiences, with camera movement planned to achieve proximity without obstructing performers, while dancer solos were also filmed around Wuppertal and the surrounding region. Wenders's own account treats 3D as a mise-en-scène problem of depth, bodily volume and camera distance, not as a release-only effect. TVBEurope's postproduction report documents Sony HDC-1500 stereo rigs recording to both HDCAM-SR and Codex, Avid editorial interchange and conform from HDCAM-SR at Pictorion Das Werk. The finished film also contains limited 2D archival imagery, which must remain provenance-distinct from the native stereo material. The player must therefore coordinate stereographer, cinematography, crane and Steadicam teams, live-performance timing, stereo calibration, focal-length continuity, dancer safety and spatial freedom, archival/native-3D provenance, dual recording, editorial conform and postproduction while refusing unsupported interaxial or convergence values, exact shot-to-lens assignments, claims that every frame was captured natively in 3D, claims that Bausch participated in principal photography, unverified reshoot counts, unverified stage-lighting specifications, exact stereo budget figures or detailed sound-post claims beyond the credited personnel and documented evidence.",
    requiredChoicesSeed: {
      screenplay: ["bausch_development_anchor", "posthumous_reconception", "four_work_structure", "dancer_portrait_structure", "archive_native3d_boundary"],
      camera: ["native_stereo_mirror_rig", "alain_derobe_stereography", "sony_hdc1500_crane", "sony_hdcp1_steadicam", "transvideo_calibration", "digiprime_tested_package", "mostly_10mm_final_boundary", "camera_distance_over_zooming", "live_performance_clearance", "stereo_parameter_unknowns"],
      editing: ["toni_froschhammer_credit", "live_performance_multisource_handoff", "archive_native3d_provenance", "avid_codex_hdcamsr_conform", "das_werk_post", "shot_lens_unknowns"],
      sound: ["andre_rigaut_credit", "matthias_lempert_credit", "live_performance_sound_boundary", "sound_post_unknowns"],
      themes: ["film_history", "2011", "pina", "wim_wenders", "pina_bausch", "tanztheater_wuppertal", "dance_documentary", "native_stereo_3d", "alain_derobe", "helene_louvart", "jorg_widmer", "erwin_m_schmidt", "francois_garnier", "sony_hdc1500", "sony_hdcp1", "mirror_rig", "transvideo", "digiprime", "10mm", "live_performance", "wuppertal", "hdcam_sr", "codex", "avid", "das_werk", "archive_provenance"]
    },
    learningGoals: [
      "Explain Pina as a coordinated dance, stereography, camera, live-performance and postproduction system rather than reducing it to a 3D spectacle.",
      "Identify Wim Wenders as director and distinguish his cinematic authorship from Pina Bausch's authorship of the choreography and Tanztheater practice.",
      "Use the 103-minute 2011 released version as the canonical production-case anchor while keeping festival, theatrical and later home-media versions separately versioned if evidence requires it.",
      "Identify Gian-Piero Ringel as producer and preserve the German-French-British co-production context rather than describing the film as a single-company production.",
      "Identify Hélène Louvart and Jörg Widmer as credited cinematographers without inventing a shot-by-shot division of their work.",
      "Identify Alain Derobe as stereographer and explain why stereography was a production department with rig, alignment and depth responsibilities rather than a post-only effect.",
      "Identify Erwin M. Schmidt as 3D producer and François Garnier as 3D supervisor while keeping their documented responsibilities distinct.",
      "Explain that Bausch and Wenders developed the project together and selected four major works before Bausch's death, but do not imply that she participated in the later principal photography.",
      "Name Café Müller, Le Sacre du printemps, Vollmond and Kontakthof as the four major stage works documented in the project's preproduction plan.",
      "Explain how Bausch's death shortly before planned filming forced a production redesign rather than treating the finished film as execution of an unchanged pre-death shooting plan.",
      "Distinguish the staged works, dancer portraits, location solos and archival material as separate source classes that had to be integrated editorially.",
      "Explain why sparse 2D archival images prevent the finished film from being described truthfully as native stereoscopic capture in every frame.",
      "Identify Alain Derobe's prototype mirror rigs as title-specific stereo hardware and avoid generalizing their geometry to every later 3D production.",
      "Identify Sony HDC-1500 cameras as documented cameras on the larger stereo crane rigs.",
      "Identify Sony HDC-P1 cameras as documented smaller camera systems used for Steadicam-oriented stereo work.",
      "Explain how a mirror rig allows two cameras to form a stereoscopic pair while treating exact optical geometry and interaxial settings as shot-specific evidence that must be sourced.",
      "Identify Transvideo monitoring as part of the live stereoscopic calibration and evaluation workflow without inventing undocumented monitor settings.",
      "Explain why stereo alignment had to be checked at high precision before performance capture rather than deferred casually to postproduction.",
      "Explain how extensive tests and a full-team Wuppertal test shoot reduced risk before a schedule in which live performance errors were difficult to repeat.",
      "Explain why a dance documentary can require more geometric preplanning than conventional coverage when a stereo crane must move through performer space safely.",
      "Describe the documented floor-grid, camera-height and crane-path planning as a way to coordinate camera movement with choreography.",
      "Explain why radio communication and shared spatial plans matter when crane, stereography, camera and stage teams must react to a live dance sequence together.",
      "Identify 10, 14 and 20 mm DigiPrimes as the reduced tested lens package reported by the 3D production account.",
      "Preserve Wenders's separate statement that the finished film used a 10 mm Zeiss prime for almost the entire film and only very few closer 14 mm shots.",
      "Do not convert the tested 20 mm option into a claim that specific finished shots used 20 mm when the current evidence does not establish that allocation.",
      "Explain why changing lenses on a stereo rig carried a recalibration cost and therefore affected scheduling and shot design.",
      "Explain Wenders's preference for changing camera distance rather than focal length as a method for preserving perceived stereoscopic space.",
      "Relate wide-angle camera placement to bodily volume and proximity without treating wide lenses as a universal rule for dance cinematography.",
      "Explain why stereoscopic depth can change mise-en-scène decisions about foreground, background, performer spacing and camera travel.",
      "Distinguish interaxial distance, convergence, focal length and camera-to-subject distance as different stereo variables and keep exact values unresolved unless directly documented.",
      "Explain why four major dance pieces were recorded live before audiences and how that condition constrained camera placement, timing and opportunities for repetition.",
      "Explain how the telescopic crane enabled camera proximity while protecting dancer pathways and avoiding visible interference with the performance.",
      "Treat audience presence as a production condition with sightline, sound and reset consequences rather than as incidental background.",
      "Explain why a long live take can create large synchronized data and editorial units even when the finished sequence is extensively cut.",
      "Identify the Wuppertal and regional outdoor solos as a distinct location-production layer rather than assuming all material came from the theater stage.",
      "Explain how urban streets, woods, industrial landscapes and the Schwebebahn extend Bausch's dance world into location-specific cinema.",
      "Keep stage and location lighting claims separate because the current source package does not establish complete fixture plots or exposure settings for every sequence.",
      "Identify Toni Froschhammer as credited editor and avoid assigning individual performances or portrait sequences to uncredited editorial ownership.",
      "Explain how the edit must preserve choreographic legibility while also constructing a filmic rhythm from stage works, portraits, locations and archive material.",
      "Identify HDCAM-SR and Codex as two documented recording paths used during stereo production.",
      "Explain why dual recording can support redundancy, review and postproduction handoff without assuming the two copies served identical downstream functions.",
      "Identify Avid as part of the documented editorial interchange and distinguish offline editorial media from the higher-quality conform source.",
      "Identify conform from HDCAM-SR at Pictorion Das Werk as a documented postproduction step without inventing undocumented codec or grading settings.",
      "Explain why a stereoscopic post pipeline must preserve left/right eye identity, synchronization and metadata across editorial and conform stages.",
      "Explain why review copies and working media must not be confused with final mastering sources in a data-centric post workflow.",
      "Identify André Rigaut as credited sound recordist and Matthias Lempert as credited rerecording mixer while keeping unverified microphone, track-layout and mix-stage details outside the high-confidence layer.",
      "Explain why live dance sound, music playback, audience response and later rerecording are potentially distinct sound layers even when the current sources do not fully expose their technical chain.",
      "Treat the film's documentary status and constructed stereoscopic mise-en-scène as compatible rather than assuming documentary means minimally planned camera work.",
      "Explain how documentary portraits can be highly technically controlled while remaining centered on dancer testimony and bodily presence.",
      "Keep Pina Bausch's artistic legacy and the film's awards or reception separate from evidence for specific camera or postproduction techniques.",
      "Reject unsupported claims that every shot used one focal length, every frame was native 3D, or every stereo parameter remained fixed across the production.",
      "Reject unsupported exact interaxial distances, convergence values, stereo budget figures, reshoot counts, stage-light plots and shot-level lens maps.",
      "Connect uncertainty to production planning by making documented hardware and workflow facts actionable while maintaining an explicit register of unresolved stereo parameters.",
      "Explain Pina's Chapter 18 significance as evidence that digital convergence also produced new capture grammars in which camera, performance, exhibition and postproduction were designed together.",
      "Compare Pina's native stereo strategy with ordinary 2D digital acquisition without treating 3D as a simple quality upgrade or inevitable historical successor.",
      "Build a production plan that protects dancer safety, live-performance integrity, stereo calibration, rig clearance, left/right-eye provenance, archival-format boundaries and post handoff under limited opportunities for repetition."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Pina evidence hierarchy", player_task: "Separate official credits, Wenders testimony, Schmidt's 3D production account, filmportal development history and Das Werk post reporting before promoting details into production facts." },
      { id: "released_version", label: "Lock the released version", player_task: "Use the 103-minute 2011 feature as the canonical production-case version and keep later distribution variants separately versioned." },
      { id: "bausch_development", label: "Preserve Bausch's development role", player_task: "Record Bausch's collaboration in development and selection of the four works without placing her in principal photography after her death." },
      { id: "posthumous_reconception", label: "Reconceive after the loss", player_task: "Treat the company's decision to continue as a structural production redesign involving dancers, portraits, locations and archival remembrance." },
      { id: "four_works", label: "Lock the four-work structure", player_task: "Track Café Müller, Le Sacre du printemps, Vollmond and Kontakthof as distinct performance objects with their own staging and capture requirements." },
      { id: "source_classes", label: "Separate source classes", player_task: "Keep native stereo stage work, stereo location material, dancer portraits and 2D archive footage provenance-distinct through editorial and mastering." },
      { id: "stereo_department", label: "Define stereo authority", player_task: "Assign stereography, 3D supervision, cinematography and 3D production responsibilities explicitly so depth decisions do not disappear between departments." },
      { id: "mirror_rig", label: "Prepare Derobe mirror rigs", player_task: "Commission, test and document the prototype mirror-rig configuration while leaving unsupported geometry values in the unknowns register." },
      { id: "hdc1500_crane", label: "Configure the crane stereo pair", player_task: "Use the documented Sony HDC-1500 pair on the telescopic crane and verify alignment before live performance." },
      { id: "hdcp1_steadicam", label: "Configure the mobile stereo pair", player_task: "Use the smaller Sony HDC-P1 configuration for Steadicam-oriented movement while preserving the same left/right-eye provenance discipline." },
      { id: "transvideo_calibration", label: "Calibrate live stereoscopy", player_task: "Use the Transvideo 3D monitoring workflow to verify stereo overlap and depth behavior before the camera enters dancer space." },
      { id: "test_shoot", label: "Run the full-team stereo test", player_task: "Rehearse camera, crane, stereography and post handoff on a Wuppertal test shoot before principal photography exposes the team to live-performance risk." },
      { id: "lens_package", label: "Reduce the lens package", player_task: "Keep the documented 10/14/20 mm tested DigiPrime set available while planning around the recalibration cost of any lens change." },
      { id: "final_lens_boundary", label: "Protect final lens evidence", player_task: "Use Wenders's mostly-10-mm and rare-14-mm account without assigning 20 mm or any focal length to an individual shot without direct evidence." },
      { id: "distance_strategy", label: "Move the camera instead of zooming space", player_task: "Prefer camera-distance changes when appropriate so stereoscopic depth relationships are not altered casually by focal-length changes." },
      { id: "floor_grid", label: "Map the stage floor", player_task: "Translate choreography into a shared floor grid that lets camera and crane teams anticipate performer paths." },
      { id: "camera_height", label: "Preplan camera height", player_task: "Set planned camera height and viewing geometry for performance passages while preserving the ability to adapt safely to the live event." },
      { id: "crane_path", label: "Design the crane path", player_task: "Preplan telescopic-crane movement against choreography so the camera can approach dancers without entering unsafe or performance-breaking space." },
      { id: "radio_handoff", label: "Coordinate the live camera team", player_task: "Use concise radio cues and a shared spatial plan to synchronize crane, camera, stereography and stage decisions during performance." },
      { id: "audience_performance", label: "Capture live audience performances", player_task: "Treat sold-out audience runs as finite production events with protected sightlines, synchronized recording and limited reset opportunities." },
      { id: "performance_clearance", label: "Protect dancer clearance", player_task: "Make camera proximity subordinate to dancer pathways, stage safety and choreographic integrity even when 3D benefits from physical closeness." },
      { id: "location_solos", label: "Move dance into Wuppertal", player_task: "Plan location solos across streets, woods, industrial sites and transit spaces with separate safety, access and stereo-calibration checks." },
      { id: "archive_boundary", label: "Integrate 2D archive honestly", player_task: "Label archival imagery as a separate 2D source class rather than presenting it as native stereo acquisition." },
      { id: "dual_record", label: "Protect dual recording", player_task: "Maintain synchronized HDCAM-SR and Codex recording paths with clear media identity, checksums or equivalent integrity checks and left/right-eye labels." },
      { id: "data_volume", label: "Plan for long stereo takes", player_task: "Budget media, ingest and verification for long live stereo recordings whose data footprint is far larger than a conventional single-camera take." },
      { id: "editorial_interchange", label: "Hand off to Avid", player_task: "Create editorial media and interchange that preserve timecode, eye identity and performance provenance without confusing offline media with mastering originals." },
      { id: "conform", label: "Conform from HDCAM-SR", player_task: "Rebuild the approved edit from the documented higher-quality HDCAM-SR source path at Das Werk while preserving stereo pairing." },
      { id: "stereo_qc", label: "Run stereo post QC", player_task: "Check eye sync, vertical alignment, depth continuity and archive/native transitions through conform and master review without inventing undocumented numerical targets." },
      { id: "editing", label: "Preserve choreographic legibility in edit", player_task: "Let Toni Froschhammer's edit construct film rhythm without sacrificing the spatial continuity needed to understand bodies and choreography." },
      { id: "sound_boundary", label: "Bound the sound workflow", player_task: "Credit André Rigaut and Matthias Lempert while keeping microphone arrays, track layouts and detailed rerecording architecture unresolved until title-specific sources establish them." },
      { id: "unknowns_register", label: "Maintain the stereo unknowns register", player_task: "Keep exact interaxial, convergence, shot-lens, exposure, reshoot-count, stage-lighting and stereo-budget claims unresolved unless direct evidence proves them." },
      { id: "chapter18_position", label: "Position native 3D in Chapter 18", player_task: "Explain how Pina links digital capture, performance blocking, depth design, data recording, editorial conform and exhibition into one convergence-era production system." },
      { id: "delivery_review", label: "Review the complete production system", player_task: "Audit dancer safety, stereo calibration, live-performance provenance, archive boundaries, dual recording and post handoff before the case is allowed to close." }
    ]
  }
] as const;

export function mergeChapterEighteenPinaExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenPinaExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_pina_verified",
      source: { list_id: "manual_chapter_eighteen_pina_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
