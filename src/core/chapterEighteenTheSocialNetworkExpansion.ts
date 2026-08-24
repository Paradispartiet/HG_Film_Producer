import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenTheSocialNetworkExpansionDefinitions = [
  {
    id: "scenario_the_social_network_2010",
    title: "The Social Network",
    originalTitle: "The Social Network",
    year: 2010,
    titleType: "Movie",
    runtimeMins: 120,
    directors: ["David Fincher"],
    genres: ["Biography", "Drama"],
    sourceId: "american_cinematographer_social_network_2010",
    sourceUrl: "https://cms.red.com/blog/stg-250103-1122/articles/social-network-help-beta-test-red-mysterium-x-chip.frag.html",
    scenarioType: "red_one_mysterium_x_4k_lto4_prores_metadata_dpx_editorial_conform_invisible_vfx_2010",
    premise: "Build The Social Network as a Chapter 18 anchor for a mature file-based digital production in which acquisition, archive, editorial, conform, invisible visual effects, color and sound are designed as one continuous system. American Cinematographer's title-specific production account, preserved in RED's archive, describes David Fincher and Jeff Cronenweth using RED One cameras with beta Mysterium-X sensors and a workflow that intentionally advanced and simplified lessons from Zodiac and The Curious Case of Benjamin Button. Trade documentation records the film as shot mostly at 4K 2:1 4096x2048 REDCODE 42, with additional 4K high-speed material, and AFI independently records that it was shot on RED digital cameras. Do not reduce this to a camera-model story: Joe Wolcott's workflow team built portable systems for Boston, Baltimore and Los Angeles, making duplicate LTO-4 archives of RED camera media while transcoding to ProRes for immediate editorial use. Lead data wrangler/assistant editor Tyler Nelson tracked footage and VFX in FileMaker Pro, used RED Rocket/RocketCine-X to create ProRes 422 LT offline media, and generated DPX material from original R3D files for VFX and final conform. This moves data management, archive verification, metadata and conform into the editorial ecosystem rather than treating a laboratory as a separate downstream black box. Preserve the distinction between camera originals, editorial proxies and DPX finishing files: ProRes LT is not the camera master, and DPX is not proof that acquisition was uncompressed. Post sources document that the DI conform was assembled in After Effects CS5, with Premiere used as a bridge from Final Cut EDLs, while Light Iron colorist Ian Vertovec graded DPX files on Quantel Pablo and delivered a 2K DCP; 35mm prints were made for non-digital theatres. Preserve that output boundary: a film print at the end does not make principal photography photochemical. The image system also normalizes extensive but often invisible VFX. Contemporary post reporting places the count near one thousand, while an HPA workflow presentation cites roughly 1,200; preserve this source-count spread rather than force a false exact total. Effects included split screens, stabilization, reframing, selective-focus work and the Winklevoss construction: Armie Hammer performed one twin while Josh Pence performed the other, with Lola VFX using tracked/reprojected facial material for a subset of shots and split-screen methods elsewhere. Do not describe Pence as a disposable stand-in; his physical performance is part of the composite. The production also generated unusually large editorial volume: later editor interviews record an 85-day shoot, 324 hours captured and 281 hours printed/selected for editorial. Treat those as bounded retrospective workflow figures, not universal Fincher rules. Sound is equally designed. Ren Klyce describes Fincher deliberately wanting the opening bar's sound-pressure level to overtake dialogue, and he was involved before photography on the Henley sequence, researching 'In the Hall of the Mountain King' as material that Trent Reznor and Atticus Ross could transform. The score therefore enters picture planning rather than arriving only after lock. AFI and BFI converge on 120 minutes and principal credits: Fincher, Aaron Sorkin, producers Scott Rudin/Dana Brunetti/Michael De Luca/Ceán Chaffin, Cronenweth, editors Angus Wall/Kirk Baxter, production designer Donald Graham Burt, and composers Trent Reznor/Atticus Ross. Do not claim the film invented RED workflows, tapeless production, digital conform, invisible VFX or electronic scoring. Its historical value is how comprehensively these practices are normalized into a disciplined studio-feature workflow where editorial owns far more of the image-data chain than a photochemical-era cutting room would have.",
    requiredChoicesSeed: {
      screenplay: ["sorkin_deposition_structure", "rapid_dialogue_scene_architecture", "multiple_accounts_boundary", "no_false_documentary_truth_claim"],
      camera: ["red_one_mysterium_x", "4k_redcode42", "low_light_dynamic_range", "multiple_camera_workflow", "no_false_uncompressed_capture_claim"],
      editing: ["duplicate_lto4_archive", "prores_lt_offline", "filemaker_metadata", "r3d_to_dpx", "after_effects_conform", "pablo_2k_grade", "camera_original_proxy_finish_boundary"],
      sound: ["bar_dialogue_masking", "klyce_preproduction_sound", "mountain_king_preplanned_music", "reznor_ross_score", "dialogue_music_effects_balance"],
      themes: ["film_history", "2010", "the_social_network", "david_fincher", "jeff_cronenweth", "red_one", "mysterium_x", "4k", "redcode42", "lto4", "prores_422_lt", "filemaker", "r3d", "dpx", "after_effects", "final_cut_pro", "quantel_pablo", "light_iron", "ian_vertovec", "angus_wall", "kirk_baxter", "tyler_nelson", "invisible_vfx", "winklevoss", "lola_vfx", "ren_klyce", "trent_reznor", "atticus_ross", "runtime_boundary"],
    },
    learningGoals: [
      "Explain why The Social Network represents a mature file-based production system rather than merely an early RED-camera experiment.",
      "Identify RED One with beta Mysterium-X as the principal digital acquisition platform documented for the production.",
      "Preserve the title-specific recording boundary: the film was shot mostly at 4K 2:1 REDCODE 42, not as uncompressed 4:4:4 acquisition like Zodiac's Viper path.",
      "Explain why Fincher and Cronenweth tested the Mysterium-X sensor for low-light latitude, highlight behavior and shadow performance rather than choosing digital capture as an abstract ideology.",
      "Separate original R3D camera media from ProRes 422 LT editorial proxies and DPX finishing/VFX files.",
      "Explain why duplicate LTO-4 archives are a production-safety system, not merely a post-production storage detail.",
      "Show how portable archive/transcode stations let the same workflow travel across Boston, Baltimore and Los Angeles.",
      "Treat Tyler Nelson's data-wrangling and assistant-editor work as authorship of workflow integrity: metadata, transcodes, VFX tracking and conform depend on it.",
      "Explain how FileMaker Pro linked footage, editorial decisions and VFX records into a master metadata system.",
      "Explain why near-real-time RED Rocket transcodes changed the relationship between camera wrap and editorial access without replacing the original R3D masters.",
      "Explain how a Final Cut EDL, Premiere bridge and After Effects conform could preserve frame-accurate editorial decisions while reconnecting to DPX derived from camera originals.",
      "Keep conform distinct from color grading: editorial assembled the DI in After Effects while Light Iron/Ian Vertovec performed the final grade on Quantel Pablo.",
      "Preserve the 4K-to-2K boundary: 4K acquisition and selected processing do not mean the final DCP was 4K.",
      "Explain why 35mm release prints for non-digital theatres are an exhibition-output fact, not evidence of photochemical principal photography.",
      "Treat split screens, stabilization, reframing and selective-focus work as invisible VFX that can reshape ostensibly realistic dialogue scenes.",
      "Preserve the VFX-count discrepancy: contemporary reports place the film near-1,000 effects shots while an HPA presentation cites about 1,200.",
      "Explain the Winklevoss solution as a combination of Armie Hammer's performance, Josh Pence's full-body performance, face reprojection/replacement and split-screen techniques.",
      "Do not erase Josh Pence or his physical performance from the performance history simply because facial replacement hides him in many finished shots.",
      "Explain why an 85-day shoot generating 324 hours of material and 281 hours selected for editorial creates a metadata and editorial-management problem, not just a large number of takes.",
      "Use those 85-day/324-hour/281-hour figures as bounded retrospective reports, not as a universal rule for Fincher productions.",
      "Explain how Angus Wall and Kirk Baxter could work in parallel while sharing a disciplined editorial organization.",
      "Connect Aaron Sorkin's deposition structure and rapid dialogue to editing choices that avoid mechanically cutting on every line.",
      "Explain why the opening bar deliberately allows environmental sound pressure to compete with dialogue rather than treating intelligibility as the only sound goal.",
      "Keep production/location sound, sound editing/design and final re-recording conceptually separate even when Ren Klyce helps shape the overall sonic strategy.",
      "Explain how Klyce's pre-shoot work on the Henley sequence made music research a production-planning input rather than a post-lock afterthought.",
      "Treat Reznor and Ross's electronic transformation of 'In the Hall of the Mountain King' as a picture-and-music design decision tied to the rowing sequence.",
      "Explain why the Reznor/Ross score's electronic/acoustic textures create historical and emotional distance without claiming the score simply illustrates computers.",
      "Use 120 minutes for gameplay because AFI and BFI converge there while retaining classification/home-video variants as version metadata when relevant.",
      "Do not claim The Social Network invented tapeless production, RED acquisition, LTO archive, digital conform, invisible VFX or electronic film scoring.",
      "Compare The Social Network with Zodiac: Zodiac foregrounds early uncompressed Viper/D.Mag digital-negative custody, while The Social Network normalizes RED compressed camera originals, proxy editorial, metadata databases and editorial-owned conform.",
      "Compare The Social Network with Avatar: Avatar moves scene construction into virtual production; The Social Network uses digital tools largely to make photographed reality more controlled, repeatable and invisibly malleable.",
    ],
    phases: [
      { id: "workflow_test", label: "Test the complete RED-to-release path before principal photography", player_task: "Validate Mysterium-X exposure, REDCODE recording, archive, proxy editorial, DPX reconnection, grade and release output as one chain before the production depends on it." },
      { id: "camera_package", label: "Configure RED One Mysterium-X for Fincher/Cronenweth low-light work", player_task: "Set the RED One beta Mysterium-X package around 4K REDCODE 42 acquisition and tested low-light latitude without mislabeling the compressed R3D originals as uncompressed capture." },
      { id: "take_metadata", label: "Keep large multi-take coverage identifiable from camera through editorial", player_task: "Maintain camera, slate, take and lens metadata so repeated performances and multiple-camera material remain searchable rather than becoming anonymous file volume." },
      { id: "archive_lto", label: "Create duplicate verified LTO-4 camera archives", player_task: "Offload RED camera media, create duplicate LTO-4 archive copies and preserve original R3D identity before editorial proxies are treated as disposable working media." },
      { id: "proxy_transcode", label: "Feed editorial quickly without demoting camera originals", player_task: "Use RED Rocket/RocketCine-X to generate ProRes 422 LT proxies for immediate Final Cut editorial while maintaining explicit links back to the R3D masters." },
      { id: "metadata_database", label: "Make FileMaker the bridge among footage, editorial and VFX", player_task: "Track reels/files, takes, VFX status and editorial references in a master database so later DPX pulls and conform decisions can be reproduced." },
      { id: "parallel_editorial", label: "Organize Wall/Baxter parallel editorial without fragmenting the film", player_task: "Let Angus Wall and Kirk Baxter assemble and refine different material while preserving common bins, naming, references and reel-level review discipline." },
      { id: "dialogue_rhythm", label: "Cut Sorkin's rapid dialogue without cutting on every line", player_task: "Use reactions, pauses and shot duration to preserve power shifts and comprehension even when the spoken text is extremely fast." },
      { id: "vfx_turnover", label: "Generate traceable DPX plates from original R3D media", player_task: "Use EDL/database references to pull the correct original frames into DPX sequences for VFX, preserving frame accuracy and source identity." },
      { id: "winklevoss", label: "Build the twins from two performances rather than one erased body", player_task: "Combine Armie Hammer and Josh Pence performances through split screens and tracked face-reprojection/replacement where needed, preserving Pence's physical contribution in the production record." },
      { id: "invisible_vfx", label: "Use effects to stabilize, reframe and reshape realism invisibly", player_task: "Coordinate split screens, stabilization, selective focus, painting and repositioning so technical control serves performance continuity without advertising itself as spectacle." },
      { id: "conform", label: "Reconnect the offline edit to high-quality DPX in editorial", player_task: "Bridge the Final Cut EDL through Premiere and build the frame-accurate After Effects conform against reference picture rather than grading low-resolution proxies." },
      { id: "grade", label: "Grade the conformed DPX at Light Iron", player_task: "Deliver the conformed DPX pipeline to Ian Vertovec/Light Iron for Quantel Pablo color work, maintaining the chosen log/gamma handling and 2K DCP target." },
      { id: "release_boundary", label: "Deliver digital cinema and photochemical exhibition outputs without confusing capture history", player_task: "Master the 2K DCP and create 35mm prints for non-digital venues while retaining the fact that principal photography originated on RED digital cameras." },
      { id: "bar_sound", label: "Let the opening bar threaten dialogue intelligibility on purpose", player_task: "Mix crowd/music/environment pressure high enough to create Fincher's desired social discomfort while preserving just enough dialogue comprehension for the scene to function." },
      { id: "henley_music", label: "Design music before shooting the rowing sequence", player_task: "Use Ren Klyce's preproduction research into 'In the Hall of the Mountain King' and Reznor/Ross's electronic treatment as a rhythmic input for the Henley sequence before final editorial." },
      { id: "score_mix", label: "Integrate Reznor/Ross electronics with dialogue and designed sound", player_task: "Balance electronic/acoustic score textures against dialogue and environmental sound so the film's technological unease emerges from the mix rather than from literal computer sound effects." },
      { id: "evidence_boundary", label: "Keep workflow counts and innovation claims source-bounded", player_task: "Record near-1,000 versus about-1,200 VFX reports and the 85-day/324-hour/281-hour editorial figures as source-specific evidence, while avoiding unsupported claims that this production invented the component technologies." },
    ],
  },
] as const;

export function mergeChapterEighteenTheSocialNetworkExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenTheSocialNetworkExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_the_social_network_verified",
      source: { list_id: "manual_chapter_eighteen_the_social_network_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
