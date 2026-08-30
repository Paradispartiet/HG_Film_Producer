import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenDriveMyCarExpansionDefinitions = [
  {
    id: "scenario_drive_my_car_2021",
    title: "Drive My Car",
    originalTitle: "Doraibu mai ka",
    aliases: ["Drive My Car"],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 179,
    directors: ["Ryusuke Hamaguchi"],
    genres: ["Drama"],
    sourceId: "festival_cannes_drive_my_car_2021",
    sourceUrl: "https://www.festival-cannes.com/en/f/drive-my-car/",
    scenarioType: "auteur_festival_japanese_location_production_murakami_adaptation_multilingual_theatre_rehearsal_method_pandemic_shutdown_busan_to_hiroshima_relocation_red_saab_sync_sound_alexa_mini_ultra_prime_single_camera_two_camera_car_rig_naturalistic_lighting_long_form_editing_di_2021",
    premise: "Build Drive My Car as Chapter 19's auteur/festival production case while keeping authorship concrete: adaptation, rehearsal, multilingual coordination, real-location logistics, pandemic interruption, car/sound engineering, camera and lighting choices, long-form editing and finishing must each be supported separately. Festival de Cannes locks the 2021 Japanese feature at 179 minutes with Ryusuke Hamaguchi as director and co-screenwriter with Takamasa Oe. The Match Factory records C&I Entertainment, Culture Entertainment and Bitters End as production companies; producer Teruhisa Yamamoto; Hidetoshi Shinomiya as cinematographer; Taiki Takai as lighting director; Kadoaki Izuta as sound operator; Azusa Yamazaki as editor; Eiko Ishibashi as composer; Miki Nomura as re-recording mixer; Korean coordinator Mizy Kwon; and a 1.85:1, 2K, 5.1 technical delivery with multiple original languages. Cinematography World documents an all-real-location shoot spanning Tokyo, Hiroshima and Hokkaido; a planned 40-day production beginning in March 2020; ten Tokyo shooting days before a coronavirus stop lasting nearly half a year; a November restart; and the planned Pusan/Busan material being relocated to Hiroshima because overseas travel remained restricted. Shinomiya records ARRI ALEXA Mini with Ultra Prime lenses, mainly single-camera operation by himself, occasional second-camera work by Ryuichi Shimokawa, no dedicated grip on set so the camera crew repeatedly rigged the Saab, a single LUT used in-camera, predominantly naturalistic location lighting supplemented with HMI/LED/tungsten sources, and final DI at Imagica Tokyo with colorist Yumeto Kitayama. ARRI separately documents the ability to place two ALEXA Minis in the cramped Saab, the camera's low/no-fan-noise advantage, nearly 90 percent of car scenes being pre-calculated, and M-Series lighting used broadly enough to let actors and cars move without frequent relighting. BFI and Screen Daily document Hamaguchi's rehearsal system of repeated, emotionally neutral script readings until language becomes embodied, a multilingual Uncle Vanya production using Japanese plus other spoken languages and Korean Sign Language, the time required for skilled interpreters to handle nuance, and Hamaguchi's preference for playing scenes through from beginning to end rather than constantly stopping. A Hamaguchi interview published by Yahoo/Deadline documents development beginning after the project was proposed in 2018, shooting beginning in March 2020, pandemic-era rewrites, and the choice to abandon the source story's yellow convertible for a closed red Saab because synchronized dialogue recording inside the car made wind noise from a roofless vehicle undesirable while the red body also read more strongly in the landscape. Frame.io's interview with editor Azusa Yamazaki documents a post workflow in which Hamaguchi finished principal photography before entering the edit, then watched rushes with Yamazaki for days before they began cutting together; this supports a long-form editorial method without licensing unsupported claims about every software setting or storage path. The player must coordinate source rights and adaptation boundaries, Murakami/Chekhov intertext, neutral line-reading rehearsals, multilingual casting and interpretation, Korean Sign Language, location scouting, pandemic shutdown/restart, Busan-to-Hiroshima relocation, Tokyo/Hiroshima/Hokkaido geography, real-location access, red Saab selection, synchronized dialogue constraints, car rigging, ALEXA Mini/Ultra Prime capture, mainly single-camera coverage, selective two-camera car work, naturalistic lighting, one-LUT simplicity, long scenes played through, long-form editorial review, 179-minute release metadata, DI, sound, music, public support and festival circulation while keeping exact budget, financing shares, rights terms, actor contracts, interpreter contracts, sign-language consultation details, complete shooting calendar, every location permit, complete car-rig geometry, camera serials, codecs, frame rates, exposure values, full lighting inventory, exact sound kit, editorial hardware/storage, full Avid project topology, LUT transform values, color-management settings, mix-chain details and distribution deal terms unresolved unless title-specific public evidence establishes them.",
    requiredChoicesSeed: {
      screenplay: ["murakami_adaptation", "takamasa_oe_coscreenplay", "uncle_vanya_structure", "multilingual_theatre", "rehearsal_method", "179_minute_runtime"],
      camera: ["hidetoshi_shinomiya", "alexa_mini", "ultra_primes", "1_85_1", "mainly_single_camera", "two_minis_in_saab", "naturalistic_lighting", "single_lut", "imagica_di", "shot_metadata_unknown"],
      editing: ["azusa_yamazaki", "post_after_principal_photography", "joint_rushes_review", "long_form_structure", "performance_continuity", "editorial_topology_unknown"],
      sound: ["kadoaki_izuta", "miki_nomura", "sync_dialogue_in_car", "closed_roof_saab", "5_1_delivery", "sound_chain_unknown"],
      themes: ["film_history", "2021", "drive_my_car", "ryusuke_hamaguchi", "japanese_cinema", "auteur_festival", "adaptation", "rehearsal", "multilingual_production", "korean_sign_language", "interpreters", "pandemic_shutdown", "hiroshima", "location_production", "red_saab", "sync_sound", "alexa_mini", "long_form_editing", "balanced_rotation", "chapter19"]
    },
    learningGoals: [
      "Explain Drive My Car as the second case in Chapter 19's balanced rotation and the first auteur/festival lane case after Nomadland.",
      "Use Cannes' 179-minute record as the canonical playable runtime anchor while preserving the 178-minute craft-interview wording as version or rounding variance rather than treating one source as defective.",
      "Identify Ryusuke Hamaguchi as director and co-screenwriter with Takamasa Oe from Cannes and Match Factory records.",
      "Separate Haruki Murakami source rights, Hamaguchi/Oe adaptation authorship and Anton Chekhov's Uncle Vanya as distinct textual layers.",
      "Explain why adaptation is a production process involving rights, rewriting, structure and performance design rather than a simple transfer of plot.",
      "Identify C&I Entertainment, Culture Entertainment and Bitters End as production companies from the Match Factory record without inferring undisclosed financing percentages.",
      "Identify Teruhisa Yamamoto as producer and preserve associate/executive producer roles as distinct functions rather than collapsing all credits into one producer category.",
      "Explain the Japanese public-support entries in the Match Factory record as institutional financing/support evidence without inventing amounts or shares.",
      "Explain Hamaguchi's repeated emotionally neutral line-reading method as a rehearsal system intended to embed text in performers' bodies before expressive choices expand.",
      "Distinguish extensive text rehearsal before shooting from the limited acting/technical rehearsal reported by Shinomiya on the shooting day.",
      "Explain why scenes played from beginning to end impose different continuity, focus, camera and performance demands than heavily fragmented stop-start coverage.",
      "Explain how limited pre-take acting rehearsal increases the production importance of reliable camera systems and skilled focus pulling.",
      "Explain the multilingual Uncle Vanya production as a coordination problem across spoken languages, interpretation, timing, gesture and Korean Sign Language rather than a decorative festival-world detail.",
      "Explain Screen Daily's point that skilled interpreters are needed and nuance takes time, while keeping exact interpreter staffing and contracts unresolved.",
      "Keep sign-language coaching, Deaf-community consultation and accessibility workflow unresolved unless title-specific public evidence establishes those details.",
      "Use the Match Factory language list as release/metadata evidence while distinguishing it from the smaller set of languages explicitly foregrounded in on-set interview testimony.",
      "Explain why Hamaguchi's rehearsal method and multilingual staging make listening, timing and nonverbal response production variables rather than purely thematic concepts.",
      "Explain the original plan for a 40-day shoot beginning in March 2020 and why the first ten Tokyo days cannot be extrapolated into a complete surviving schedule.",
      "Explain the coronavirus shutdown lasting nearly half a year as a title-specific production interruption, not proof that every 2020 film followed the same shutdown pattern.",
      "Explain the November restart and cancellation of the planned Pusan/Busan shoot as a production response to continuing overseas-travel restrictions.",
      "Explain how relocating the story to Hiroshima required script, scouting, geography, logistics and visual redesign rather than merely substituting a city name.",
      "Identify Tokyo, Hiroshima and Hokkaido as documented production geographies while keeping the complete location list and permit history unresolved.",
      "Explain an all-real-location production as an access, weather, sound, power, movement and scheduling system rather than the absence of production design.",
      "Identify Hidetoshi Shinomiya as cinematographer and Taiki Takai as lighting director while preserving transliteration differences across sources.",
      "Identify ARRI ALEXA Mini and Ultra Prime lenses as the verified principal camera/lens combination.",
      "Explain the 1.85:1 aspect-ratio choice as a balance between people and location according to Shinomiya, without treating aspect ratio as a universal auteur signature.",
      "Explain mainly single-camera shooting with Shinomiya operating, plus occasional second-camera work by Ryuichi Shimokawa, as a flexible coverage system.",
      "Explain why the cramped Saab could still take two ALEXA Minis for selected scenes and why camera size and fan noise mattered to performance and synchronized dialogue.",
      "Explain the absence of a dedicated grip on set as a title-specific crew configuration that transferred repeated Saab-rigging labor to the camera crew.",
      "Keep exact mounts, suction systems, safety tethering, load ratings and rig geometry unresolved because the verified sources do not publish a complete engineering plan.",
      "Explain the source story's yellow convertible versus the film's closed red Saab as both an aesthetic and synchronized-sound production decision.",
      "Explain why a roof reduced wind-noise risk for dialogue but does not prove all car dialogue was captured identically or without later sound work.",
      "Identify Kadoaki Izuta as sound operator and Miki Nomura as re-recording mixer from the Match Factory record while keeping the full location-sound and mix chain unresolved.",
      "Explain ARRI's claim that nearly 90 percent of car scenes were pre-calculated as evidence of detailed car-scene planning, not that 90 percent of the whole film was storyboard-locked.",
      "Explain naturalistic lighting as predominantly using location light with HMI, LED and tungsten supplementation rather than 'no lighting.'",
      "Explain broad lighting that allowed actors and cars to move without constant relighting as a scheduling and performance-enabling choice.",
      "Explain Shinomiya's single-LUT strategy as production simplification while keeping exact LUT transform values, color-space configuration and monitoring calibration unresolved.",
      "Explain why weather dependence and magic-hour timing can become schedule-critical when natural light is part of the photographic design.",
      "Identify the final DI at Imagica Tokyo with colorist Yumeto Kitayama while preserving the craft source's 178-minute wording as runtime variance.",
      "Identify Azusa Yamazaki as editor and explain the documented workflow of beginning the collaborative edit after principal photography rather than cutting a conventional editor's assembly during the shoot.",
      "Explain Hamaguchi and Yamazaki spending days watching rushes together as a selection method in which every take remained a potential editorial resource.",
      "Keep exact Avid version, storage layout, assistant-editor database, proxy format, backup policy and conform topology outside the verified layer unless sourced.",
      "Explain the official 2K and 5.1 technical metadata as delivery evidence rather than proof of every intermediate resolution or mix stage.",
      "Identify Eiko Ishibashi as composer without inventing recording-session, licensing or score-placement workflows not established by the locked sources.",
      "Separate Cannes competition/award circulation from production authorship and reject the inference that festival success proves the production method superior.",
      "Maintain an uncertainty register for budget, financing shares, rights terms, public-support amounts, contracts, interpreters, sign-language consultation, exact schedule, permits, camera settings, rig engineering, lighting, sound, editorial infrastructure, color transforms and mix details.",
      "Explain Drive My Car's Chapter 19 importance as a production history of preparation and translation: text becomes embodied performance, travel restrictions reshape geography, a car choice links image to sound, and long-form post turns sustained takes into a 179-minute structure.",
      "Build a closing production audit that checks source hierarchy, adaptation rights, rehearsal evidence, multilingual coordination, pandemic chronology, location geography, car/sound boundaries, camera-lighting facts, post workflow and unresolved claims before Production Verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Drive My Car evidence hierarchy", player_task: "Separate Cannes/Match Factory metadata from cinematography, directing, editing and production interviews before promoting any craft claim." },
      { id: "runtime_credits", label: "Lock runtime and principal credits", player_task: "Use the 179-minute Cannes/Match Factory record as canonical metadata while retaining the 178-minute craft-reference variance explicitly." },
      { id: "rights_adaptation", label: "Separate rights from adaptation authorship", player_task: "Track Murakami source rights, Hamaguchi/Oe screenplay work and Chekhov material as distinct production inputs." },
      { id: "rehearsal_text", label: "Run emotionally neutral line readings", player_task: "Use repeated text reading to embed language before performance modulation without confusing pre-shoot preparation with on-set technical rehearsal." },
      { id: "performance_baseline", label: "Convert rehearsal into embodied performance", player_task: "Let actors move beyond the neutral baseline only after words can be delivered without forcing preselected emotional clichés." },
      { id: "multilingual_casting", label: "Coordinate the multilingual ensemble", player_task: "Schedule spoken-language, interpretation and Korean Sign Language needs as production dependencies rather than thematic decoration." },
      { id: "interpreter_time", label: "Budget time for linguistic nuance", player_task: "Protect rehearsal and communication time for skilled interpreters while leaving exact staffing and contracts unresolved." },
      { id: "long_scene_method", label: "Play scenes through", player_task: "Plan camera, sound, focus and continuity so scenes can run from beginning to end rather than being broken into constant stops." },
      { id: "initial_schedule", label: "Build the original March 2020 plan", player_task: "Anchor the first plan around a documented 40-day target while refusing to invent the unsourced day-by-day calendar." },
      { id: "pandemic_stop", label: "Record the pandemic production stop", player_task: "Separate the ten completed Tokyo days from the nearly half-year interruption and preserve what became obsolete in the original plan." },
      { id: "restart_replan", label: "Replan for the November restart", player_task: "Rebuild availability, travel, locations and sequence dependencies before resuming production." },
      { id: "busan_hiroshima", label: "Relocate Busan to Hiroshima", player_task: "Treat the overseas-travel restriction as a script, scouting, logistics and visual redesign problem rather than a simple label swap." },
      { id: "real_location_map", label: "Map Tokyo, Hiroshima and Hokkaido", player_task: "Coordinate documented real-location geography without claiming a complete public permit or location ledger." },
      { id: "location_weather", label: "Schedule around real weather and light", player_task: "Protect natural-light and magic-hour opportunities while accounting for the production risk of weather dependence." },
      { id: "camera_package", label: "Lock ALEXA Mini and Ultra Primes", player_task: "Use the verified principal package and 1.85:1 frame while keeping codec, sensor mode, serials and lens-by-shot metadata unresolved." },
      { id: "single_camera", label: "Prioritize mainly single-camera performance coverage", player_task: "Let Shinomiya's operated camera remain primary and add a second camera only where the scene or car geometry justifies it." },
      { id: "saab_two_camera", label: "Fit two Minis into the Saab", player_task: "Use compact cameras selectively for two-angle car coverage without inventing the exact proprietary mounting geometry." },
      { id: "grip_overlap", label: "Absorb Saab rigging into the camera crew", player_task: "Plan repeated setup labor explicitly because the documented production had no dedicated grip on set." },
      { id: "red_saab", label: "Choose the closed red Saab", player_task: "Balance landscape visibility and synchronized-dialogue requirements when replacing the source story's yellow convertible." },
      { id: "sync_sound", label: "Protect synchronous car dialogue", player_task: "Treat roof, wind, fan noise and actor intelligibility as linked sound/camera constraints while keeping the complete sound kit unresolved." },
      { id: "car_precalc", label: "Pre-calculate car-scene reveals", player_task: "Design the documented majority of car scenes carefully enough that camera position and reveal timing support sustained performance." },
      { id: "naturalistic_lighting", label: "Light without over-artificializing", player_task: "Use location light first and supplement with HMI, LED, tungsten or M-Series sources when needed." },
      { id: "broad_light", label: "Light spaces for actor and car movement", player_task: "Create sufficient playable space to reduce relighting interruptions and protect performance flow." },
      { id: "single_lut", label: "Keep one production LUT", player_task: "Use a consistent pre-made LUT to simplify monitoring while leaving transform values and color-management architecture unresolved." },
      { id: "production_sound", label: "Track sound authorship", player_task: "Map Kadoaki Izuta's production-sound role and Miki Nomura's re-recording role without inventing microphones, recorders or mix routing." },
      { id: "editing_handoff", label: "Enter editorial after principal photography", player_task: "Preserve Hamaguchi's directing focus during production, then move into the documented joint rushes-review workflow with Azusa Yamazaki." },
      { id: "rushes_review", label: "Watch the rushes before cutting", player_task: "Treat every take as a possible resource and spend time establishing the material's internal logic before constructing the long-form edit." },
      { id: "long_form_edit", label: "Build the 179-minute structure", player_task: "Balance theatre rehearsal, car dialogue, travel and grief across sustained sequences without equating duration with lack of editorial selection." },
      { id: "di_finish", label: "Finish at Imagica Tokyo", player_task: "Carry the pre-made LUT logic into final DI with Yumeto Kitayama while keeping exact color pipeline and deliverable transforms unresolved." },
      { id: "delivery_metadata", label: "Separate 2K and 5.1 delivery facts", player_task: "Record official technical delivery metadata without projecting it backward onto every acquisition and intermediate stage." },
      { id: "festival_circulation", label: "Map Cannes circulation separately", player_task: "Keep competition and awards in the release/reception layer rather than using them as proof of production causality." },
      { id: "unknowns_register", label: "Maintain the Drive My Car unknowns register", player_task: "Track finance, rights, contracts, interpreter/sign-language details, schedule, permits, rigging, camera, lighting, sound, editorial, color and mix unknowns explicitly." },
      { id: "delivery_review", label: "Audit the complete Drive My Car production system", player_task: "Verify adaptation, rehearsal, multilingual production, pandemic chronology, location decisions, Saab image/sound logic, camera-lighting evidence, editorial finishing and unresolved claims before production verification." }
    ]
  }
] as const;

export function mergeChapterNineteenDriveMyCarExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenDriveMyCarExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_drive_my_car_verified",
      source: { list_id: "manual_chapter_nineteen_drive_my_car_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
