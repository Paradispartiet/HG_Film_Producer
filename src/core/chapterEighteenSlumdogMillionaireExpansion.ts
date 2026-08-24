import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenSlumdogMillionaireExpansionDefinitions = [
  {
    id: "scenario_slumdog_millionaire_2008",
    title: "Slumdog Millionaire",
    originalTitle: "Slumdog Millionaire",
    year: 2008,
    titleType: "Movie",
    runtimeMins: 120,
    directors: ["Danny Boyle", "Loveleen Tandan"],
    genres: ["Drama", "Romance"],
    sourceId: "silicon_imaging_slumdog_2009",
    sourceUrl: "https://www.siliconimaging.com/DigitalCinema/News/PR_01_31_09_Slumdog.html",
    scenarioType: "si2k_mini_cineform_raw_35mm_hybrid_mumbai_mobile_backpack_data_grade_sync_sound_2008",
    premise: "Build Slumdog Millionaire as a Chapter 18 anchor for hybrid mobile digital production in dense real locations, not as a simplistic claim that the feature was wholly digital. Silicon Imaging's title-specific production account records that Anthony Dod Mantle and Danny Boyle rejected a repeat of 28 Days Later's MiniDV approach because the Mumbai locations demanded more latitude while still requiring a tiny camera. The SI-2K Mini separated a small 2K camera head from the processing/recording computer, sending raw sensor data over gigabit Ethernet and recording CineForm RAW; the production adapted the system into portable laptop/backpack rigs so operators could move at child height and through crowded slum streets with much less disruption than a full 35mm package. Preserve the hybrid boundary: Dod Mantle also shot multiple 35mm stocks, and Stefan Ciupek later explained that most night photography stayed on pushed 35mm because the SI-2K was not considered adequate for every low-light situation. The point is therefore tactical format choice by scene, not digital replacement ideology. The Mumbai climate made the digital system itself a production problem: heat, dust, rapid movement and computer cooling had to be managed, assistants needed training on unfamiliar equipment, and the camera/data workflow required active supervision. Ciupek describes average SI-2K capture of roughly two to three hours per day, RAID5 protection and a backup copy sent to England; use those as bounded workflow facts rather than universal digital-production rules. At final grading, Dod Mantle described five film stocks being interwoven with SI-2K material at MPC in London with colorist Jean-Clément Soret, so the DI/grade had to reconcile genuinely heterogeneous image sources rather than make everything retrospectively 'the same camera'. Production practice was also locally collaborative. AFI FEST credits Danny Boyle and Loveleen Tandan as directors, while AFI's catalogue lists Boyle; Boyle describes Tandan as a key casting/local-reality collaborator who remained through production and directed second-unit material, and Tandan describes writing Hindi dialogue and becoming co-director. Preserve that credit/work-allocation boundary instead of erasing either record. Sound was similarly location-specific: Boyle emphasizes live Mumbai sound as essential to the texture, while Resul Pookutty describes adapting sync/location recording to dense multi-camera streets and later separating production sound, ambience, effects and post work. Academy records credit Ian Tapp, Richard Pryke and Resul Pookutty for Sound Mixing and Glenn Freemantle/Tom Sayers for Sound Editing; A. R. Rahman is credited for score and songs. AFI and DFI record a 120-minute release, while AFI FEST lists 116 minutes and IFFR lists 110; use 120 for gameplay while preserving those festival/catalogue discrepancies. AFI credits Simon Beaufoy's screenplay from Vikas Swarup's Q & A, Christian Colson producing, Anthony Dod Mantle photography, Chris Dickens editing, Mark Digby production design and A. R. Rahman music. Do not invent a single digital-versus-film percentage, do not claim every night scene was digital, do not call CineForm RAW uncompressed, do not claim the laptop/backpack system removed data-risk, do not reduce Tandan to an honorary credit, and do not treat Mumbai residents or real locations as unmediated documentary truth.",
    requiredChoicesSeed: {
      screenplay: ["beaufoy_adaptation_multiple_timelines", "hindi_dialogue_localization", "quiz_memory_structure", "no_false_single_language_claim"],
      camera: ["si2k_mini_detached_head", "cineform_raw_backpack_capture", "35mm_hybrid_boundary", "heat_dust_cooling", "child_height_mobile_operation", "no_false_all_digital_claim"],
      editing: ["multi_format_ingest", "raid5_backup_to_england", "mpeg_or_proxy_boundary_not_invented", "mpc_london_grade", "five_film_stock_matching"],
      sound: ["mumbai_live_sync_sound", "multi_camera_location_pressure", "production_sound_vs_post_boundary", "rahman_music_integration", "no_false_clean_location_sound_claim"],
      themes: ["film_history", "2000s", "slumdog_millionaire", "danny_boyle", "loveleen_tandan", "anthony_dod_mantle", "stefan_ciupek", "si2k_mini", "cineform_raw", "2k", "backpack_camera", "mumbai", "hybrid_capture", "35mm", "heat", "dust", "raid5", "backup", "mpc", "jean_clement_soret", "resul_pookutty", "sync_sound", "ar_rahman", "chris_dickens", "mark_digby", "runtime_discrepancy", "transnational_production"],
    },
    learningGoals: [
      "Explain why Slumdog Millionaire chose a tiny SI-2K Mini system for mobility and latitude rather than simply repeating the MiniDV method of 28 Days Later.",
      "Identify the SI-2K Mini as a detachable 2K camera head linked to computer recording rather than a conventional self-contained 35mm-style body.",
      "Keep CineForm RAW distinct from uncompressed capture; the system records compressed raw digital negatives even though the sensor stream itself is transferred before development/colorization.",
      "Explain how laptop/backpack recording moved processing mass away from the lens so the operator could work at child height and inside crowded streets.",
      "Treat mobility as an aesthetic and social production choice: smaller equipment reduced disruption and helped camera proximity, but did not make location shooting invisible or ethically neutral.",
      "Preserve the hybrid format boundary: SI-2K material and multiple 35mm stocks coexist, and scene conditions—not ideology—determine which system is used.",
      "Preserve Ciupek's title-specific account that most night photography remained on pushed 35mm instead of inventing an all-digital night workflow.",
      "Explain why heat, dust and rapid movement transformed computing/cooling into camera-department responsibilities.",
      "Model training of local assistants on unfamiliar digital equipment as part of production capacity, not an invisible technical footnote.",
      "Use the bounded two-to-three-hours-per-day SI-2K figure as workload evidence without turning it into a total shooting ratio.",
      "Explain RAID5 plus a copy sent to England as redundancy practice while recognizing that RAID alone is not archival proof.",
      "Show how the final MPC London grade had to reconcile SI-2K digital material with up to five film stocks rather than merely applying a look to homogeneous footage.",
      "Keep Jean-Clément Soret's grading contribution visible as part of the cross-format finishing system.",
      "Explain the difference between digital capture, digital intermediate/color grading and 35mm-origin footage; Chapter 18 treats them as separate transformations.",
      "Preserve the Danny Boyle/Loveleen Tandan credit boundary: AFI and AFI FEST catalogue the directing roles differently, while both filmmakers describe substantive local casting/dialogue/second-unit collaboration.",
      "Explain why Hindi dialogue and local casting were production decisions affecting performance and authenticity rather than decorative localization.",
      "Treat real Mumbai locations as negotiated production environments with crowds, movement and local knowledge rather than as free documentary background.",
      "Connect multiple-camera street shooting to both editorial abundance and location-sound difficulty.",
      "Explain why Boyle valued live Mumbai sound even when dense street noise made conventional dialogue recording unusually difficult.",
      "Keep Resul Pookutty's production/location recording role distinct from later sound editing and re-recording responsibilities.",
      "Use Academy credits to separate Sound Mixing (Ian Tapp, Richard Pryke, Resul Pookutty) from Sound Editing (Glenn Freemantle, Tom Sayers).",
      "Treat A. R. Rahman's score and songs as an authored music layer interacting with image rhythm and location sound rather than as generic 'Indian atmosphere'.",
      "Connect Chris Dickens' editing challenge to the film's multi-timeframe structure, fast street material and heterogeneous camera sources without inventing undocumented software details.",
      "Keep Mark Digby's production design visible alongside real locations; location realism does not mean the production lacked design and controlled environments.",
      "Use 120 minutes for gameplay because AFI and DFI converge there while preserving AFI FEST 116 and IFFR 110 as institutional/festival version records.",
      "Do not infer a precise percentage of SI-2K versus 35mm screen time unless a title-specific authoritative source establishes it consistently.",
      "Compare Slumdog with Zodiac: both rely on digital data, but Slumdog's central problem is mobile hybrid production in difficult locations, whereas Zodiac's is end-to-end digital-negative custody and conform.",
      "Compare Slumdog with Inland Empire: both exploit small digital cameras, but Slumdog pursues higher-quality 2K raw capture within a hybrid industrial workflow rather than embracing standard-definition roughness as the final aesthetic.",
    ],
    phases: [
      { id: "camera_requirement", label: "Define mobility and latitude before choosing the camera", player_task: "Reject both a cumbersome all-35mm plan and inadequate MiniDV by specifying small size, usable highlight latitude and child-height street operation as linked requirements." },
      { id: "si2k_backpack", label: "Separate lens/head mobility from computer recording", player_task: "Configure the SI-2K Mini head with tethered laptop/backpack processing so the operator can move through narrow Mumbai locations while the recording system remains protected and monitored." },
      { id: "heat_dust", label: "Keep the digital camera alive in Mumbai conditions", player_task: "Plan cooling, dust control, cable protection, batteries/power and technical supervision for a computer-dependent camera system under heat and rapid movement." },
      { id: "crew_training", label: "Build local technical capacity for unfamiliar gear", player_task: "Train assistants on the SI-2K/data chain before high-pressure street work so novelty does not become an excuse for unsafe or unverifiable capture." },
      { id: "format_map", label: "Assign SI-2K and 35mm by scene requirement", player_task: "Use the SI-2K mobile digital rig where access and movement drive the shot, preserve 35mm where night/image conditions require it, and track every source format for post." },
      { id: "street_chase", label: "Capture child-height movement without turning crowds into scenery", player_task: "Move the small camera with the children through real streets while coordinating safety, local production knowledge and background activity rather than assuming documentary spontaneity has no production cost." },
      { id: "data_daily", label: "Protect hours of daily SI-2K material", player_task: "Offload and organize roughly two-to-three hours of digital capture on heavy days, use RAID5 as working protection and create the documented England-bound backup without confusing either with a sole master." },
      { id: "film_negative", label: "Protect the photochemical side of the hybrid shoot", player_task: "Maintain stock/lab/exposure metadata for the multiple 35mm stocks so their negative path remains traceable alongside the SI-2K data path." },
      { id: "language_localization", label: "Make Hindi dialogue and local collaboration structural", player_task: "Use Loveleen Tandan's casting/local-language knowledge to shape dialogue and performance decisions while preserving the documented co-directing/second-unit credit boundary." },
      { id: "multi_camera", label: "Use multiple cameras without losing editorial or sound control", player_task: "Exploit simultaneous coverage when street action demands it, but maintain slates/time relationships and sound strategy so abundance does not become unusable material." },
      { id: "live_sound", label: "Record Mumbai as a lived acoustic environment", player_task: "Prioritize live dialogue and location texture where possible, placing microphones and adapting technique to crowd/noise pressure without pretending the raw tracks will be clean." },
      { id: "sound_post", label: "Separate location capture from dialogue repair, editing and re-recording", player_task: "Carry production sound into a post chain where dialogue, effects, ambience and final mix can be rebuilt or balanced while preserving the location character Boyle wanted." },
      { id: "editorial_structure", label: "Build memory, quiz and chronology into one legible rhythm", player_task: "Cut across Jamal's ages, interrogation, game show and remembered events while preserving causal answer-links and avoiding speed that destroys spatial or emotional comprehension." },
      { id: "cross_format_grade", label: "Unify SI-2K and multiple film stocks without erasing their origins", player_task: "At MPC, work with Jean-Clément Soret to balance digital raw and multiple photochemical stocks into a coherent release while retaining source-specific texture and exposure constraints." },
      { id: "production_design_location", label: "Coordinate designed spaces with uncontrolled city environments", player_task: "Use Mark Digby's design system to bridge real locations, controlled sets and game-show spaces so 'location realism' does not become a claim that nothing was constructed." },
      { id: "music_picture", label: "Integrate Rahman's score and songs with the film's kinetic edit", player_task: "Shape transitions among score, songs, source sound and location ambience so music drives rhythm without flattening every Mumbai environment into the same sonic register." },
      { id: "runtime_boundary", label: "Keep conflicting festival/catalogue runtimes inspectable", player_task: "Use 120 minutes for gameplay while retaining AFI FEST 116 and IFFR 110 as separate institutional/festival records rather than silently normalizing them." },
      { id: "credit_boundary", label: "Preserve directing-credit and practical-role evidence", player_task: "Record AFI's Boyle-only catalogue entry alongside AFI FEST's Boyle/Tandan director listing and the filmmakers' own descriptions of casting, Hindi dialogue and second-unit responsibilities." },
    ],
  },
] as const;

export function mergeChapterEighteenSlumdogMillionaireExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenSlumdogMillionaireExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_slumdog_millionaire_verified",
      source: { list_id: "manual_chapter_eighteen_slumdog_millionaire_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
