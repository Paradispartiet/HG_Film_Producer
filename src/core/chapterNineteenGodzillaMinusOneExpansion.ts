import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenGodzillaMinusOneExpansionDefinitions = [
  {
    id: "scenario_godzilla_minus_one_2023",
    title: "Godzilla Minus One",
    originalTitle: "Gojira -1.0",
    aliases: ["Godzilla Minus One", "Godzilla -1.0", "Gojira -1.0"],
    year: 2023,
    titleType: "Movie",
    runtimeMins: 125,
    directors: ["Takashi Yamazaki"],
    genres: ["Action", "Drama", "Science Fiction"],
    sourceId: "toho_godzilla_minus_one_2023",
    sourceUrl: "https://godzilla-minuszero.toho-movie.jp/minusone/",
    scenarioType: "regional_global_takashi_yamazaki_toho_robot_shirogumi_postwar_japan_period_reconstruction_storyboard_previz_postvis_sony_venice_2_6k_venice_two_camera_x_ocn_xt_zeiss_supreme_prime_angenieux_ez_location_sea_practical_set_cg_extension_green_screen_610_vfx_cuts_35_vfx_artists_single_vendor_maya_houdini_nuke_zbrush_mudbox_water_simulation_digital_destruction_no_mocap_godzilla_animation_dolby_atmos_2023",
    premise: "Build Godzilla Minus One as Chapter 19's regional/global production case by treating Takashi Yamazaki's Japanese studio film as an integrated system of postwar historical reconstruction, location cinematography, compact physical builds, single-vendor visual effects and director-led iteration. Toho's official materials establish a 2023 Japanese release, a 125-minute feature and Yamazaki as director, screenwriter and VFX lead. That role concentration is central to the case: VFX Voice records Yamazaki explaining that writing, directing and VFX supervision could feed each other directly, reducing approval ambiguity while also forcing him to confront the production consequences of choices he had written and shot. The film's production budget is not locked to the widely repeated $15 million figure. Yamazaki told MovieMaker that it was less than $15 million while describing that level as comparatively high for a Japanese production; the playable case therefore records only the directly supported upper-bound statement and leaves the exact final negative cost, VFX allocation, financing waterfall, tax structure and recoupment unresolved. Shirogumi's Chofu studio was the sole VFX vendor. VFX Voice and Autodesk's Shirogumi case study document a 35-person VFX team; VFX Voice records 610 VFX cuts covering roughly two thirds of the film and about eight months of full post-VFX work after photography, with some modelling and scene design already underway before the shoot. These figures describe the VFX unit, not the complete cast and crew. Yamazaki storyboarded the VFX material extensively, then built simple-CG previs with staff. Elements closely connected to live photography were prepared before shooting; full-CG material needed for editorial rhythm could be postvised after photography. Rather than a concept-art-heavy handoff model, Yamazaki often worked beside artists and gave direct notes. Autodesk documents the same-floor generalist culture: Yamazaki, VFX supervisor Kiyoko Shibuya and CG director Masaki Takahashi reviewed work while artists were encouraged to propose improvements. The creature pipeline did not use motion capture for Godzilla. Yamazaki and animators iterated the waist height, posture and walk to balance a divine/god-like weight with monster aggression. ZBrush, Mudbox, Maya and Houdini were among the documented modelling/CG tools, while Shirogumi materials and industry reporting identify Nuke for compositing. The case does not infer that every shot used every package. Historical reconstruction and VFX were designed together. Yamazaki and the assistant-director team gathered photos and moving-image references for 1947 Tokyo. Existing open sets did not match and the production could not afford to construct a full Ginza district, so a parking-lot road surface, curbs/sidewalks and limited storefront elements were built physically and the city was extended digitally. MovieMaker records Yamazaki's broader rule: keep a practical environment immediately around actors, however small, then extend with CG and green screen. This is a film-specific resource strategy, not a universal low-budget recipe. The marine work linked physical risk and digital complexity. Yamazaki wanted the first ocean battle photographed at sea for documentary-like texture; unstable weather and seasickness made the shoot difficult, while the real complex waves then made the CG interaction harder. Sony's cinematography case study documents Kōzō Shibasaki's choice of the full-frame VENICE system partly for handling on the small boat and internal ND filters, plus low-ceiling barracks where full frame allowed a 24mm lens with less distortion than the ultra-wide Super35 alternative he was considering. The production used two cameras throughout: A camera VENICE 2 6K and B camera VENICE, with an additional drone for marine scenes. Eleven Zeiss Supreme Primes from 21mm to 200mm were the principal lenses, with an Angénieux EZ-series zoom used at sea. Sony documents X-OCN XT acquisition, dramatic scenes in 6K at 1.85:1, composite plates at 3:2 and a 2K CinemaScope finish, generally shooting around EI 3200 on the 2500 base. These are camera-department records and should not be generalized to all Japanese VFX cinema. Water simulation became a major storage and compute problem. VFX Voice records Yamazaki saying a young artist's hobby ocean simulation was persuasive enough that the scenario gained more ocean material, but the team lacked abundant server storage; accumulated data exceeded one petabyte and cuts had to be deleted as work became available. The first ocean battle combined photographed small-boat material, natural waves, CG waves and Godzilla; SideFX's Shirogumi presentation separately emphasizes Houdini destruction and water simulation. The Ginza heat-ray sequence likewise combines physically grounded photography, digital period reconstruction, destruction and atmospherics. Practical effects remained important inside this digital system: small physical sets anchored performers, actors physically rocked themselves in a stationary boat set instead of using hydraulic motion hardware for some material, and real marine photography supplied wave complexity that VFX had to match. Sound followed its own evidentiary chain. Toho home-media materials confirm Japanese Dolby Atmos among the release formats. PHILE WEB's Dolby production interview with sound-effects designer Natsuko Inoue documents that the Atmos version was not merely a conservative extension of the 7.1 balance: Yamazaki pushed the team to shape an Atmos-specific immersive balance for spectacle. Current locked sources identify Inoue in sound effects and Hisafumi Takeuchi as production/post-production sound mixer, but they do not establish every recording device, microphone, Foley prop, roar-source element, stem map or mastering setting. The Academy records Godzilla Minus One as the 2024 Visual Effects winner credited to Takashi Yamazaki, Kiyoko Shibuya, Masaki Takahashi and Tatsuji Nojima. The Oscar is reception/industry recognition; it is not used as evidence for undocumented workflow details. The central historical lesson is that the film's resource scale cannot be explained by one magic number. A compact VFX team succeeded through long shared experience, a single-vendor/generalist culture, direct director-VFX feedback, aggressive planning through storyboards/previs/postvis, practical anchors around actors, targeted digital extensions and close integration between editorial decisions and effects feasibility. The player must preserve both the strengths and the costs of that model: concentrated authorship can accelerate decisions but centralizes responsibility; compact teams can communicate quickly but still face enormous shot, storage and simulation loads; real ocean photography can add texture while making matching harder; and historical reconstruction can save construction cost through digital extension only by increasing research, tracking, modelling, compositing and review work.",
    requiredChoicesSeed: {
      screenplay: ["takashi_yamazaki_writer_director_vfx", "postwar_1947_reconstruction", "human_drama_kaiju_interlock", "storyboard_vfx_design", "budget_under_15m_boundary"],
      camera: ["sony_venice_2_6k_a_camera", "sony_venice_b_camera", "x_ocn_xt", "zeiss_supreme_primes", "angenieux_ez_marine", "real_ocean_photography", "practical_actor_anchor_cg_extension"],
      editing: ["previs_before_shoot", "postvis_for_editorial_rhythm", "director_vfx_feedback_loop", "610_vfx_cuts", "eight_month_post_vfx"],
      sound: ["natsuko_inoue_sound_effects", "hisafumi_takeuchi_production_post_mix", "dolby_atmos_specific_balance", "spectacle_immersion", "complete_sound_chain_unknown"],
      themes: ["film_history", "2023", "godzilla_minus_one", "regional_global", "japanese_vfx", "postwar_reconstruction", "compact_vfx_team", "practical_digital_integration", "chapter19"]
    },
    learningGoals: [
      "Explain Godzilla Minus One as Chapter 19's regional/global production case after Flow.",
      "Identify Takashi Yamazaki's combined director, screenwriter and VFX-supervisor roles.",
      "Use Toho's 125-minute official runtime record.",
      "Explain why the film's exact budget remains unresolved despite widespread $15 million reporting.",
      "Preserve Yamazaki's directly supported statement that the budget was below $15 million.",
      "Identify Shirogumi as the sole VFX vendor.",
      "Distinguish the 35-person VFX team from the film's total cast and crew.",
      "Explain the 610 VFX-cut count and its roughly two-thirds-of-runtime significance.",
      "Explain the approximately eight-month full post-VFX period without erasing pre-shoot modelling and scene design.",
      "Explain Yamazaki's storyboard-first planning for VFX material.",
      "Distinguish previs made before shooting from postvis used after photography for editorial rhythm.",
      "Explain how director/VFX-supervisor role concentration shortened some feedback loops while centralizing responsibility.",
      "Explain Shirogumi's same-floor generalist review culture.",
      "Identify Kiyoko Shibuya and Masaki Takahashi as key VFX leadership alongside Yamazaki.",
      "Explain why Godzilla's movement was hand-authored without motion capture.",
      "Explain walk/posture iteration as creature-character design rather than merely technical animation.",
      "Identify ZBrush, Mudbox, Maya, Houdini and Nuke as documented tools without assigning every package to every shot.",
      "Explain 1947 visual research as a prerequisite for period reconstruction.",
      "Explain why existing open sets could not simply stand in for the required Ginza streetscape.",
      "Explain the parking-lot practical road/storefront build plus digital city extension.",
      "Explain the practical-near-performer / CG-extension strategy as title-specific resource allocation.",
      "Identify Kōzō Shibasaki as cinematographer.",
      "Explain why location handling and internal ND filters mattered for small-boat photography.",
      "Explain the full-frame 24mm choice in low-ceiling barracks as a distortion/space decision.",
      "Identify the two-camera VENICE 2 6K plus VENICE configuration.",
      "Identify drone photography as an additional marine tool rather than part of the constant two-camera pair.",
      "Identify Zeiss Supreme Primes 21-200mm as the principal lens set.",
      "Identify the Angénieux EZ-series zoom as a documented marine lens choice.",
      "Explain X-OCN XT as the documented acquisition format.",
      "Distinguish 6K 1.85 dramatic capture, 3:2 composite plates and 2K CinemaScope finishing.",
      "Explain why real ocean photography supplied convincing texture while increasing VFX matching complexity.",
      "Explain the first ocean battle as a live-action/CG wave/creature integration problem.",
      "Explain why a promising ocean simulation led Yamazaki to expand ocean material in the scenario.",
      "Explain the reported one-petabyte-plus data burden as a storage constraint, not a quality metric.",
      "Explain why limited server capacity forced active deletion/turnover of completed cuts.",
      "Explain Houdini's role in water/destruction work without treating it as the only effects package.",
      "Explain Ginza destruction as a combination of period research, practical actor space, digital architecture, destruction and atmospherics.",
      "Explain why practical effects and digital effects should not be treated as opposing production philosophies in this film.",
      "Explain the stationary boat-set performer-rocking solution as one documented economy, not a universal technique.",
      "Identify Natsuko Inoue's sound-effects role and Hisafumi Takeuchi's production/post-mix role.",
      "Explain the Atmos-specific rebalance as a distinct exhibition sound decision.",
      "Separate Dolby Atmos delivery evidence from unsupported microphone, Foley and stem assumptions.",
      "Explain how the human drama and Godzilla material were designed to remain narratively interdependent.",
      "Explain why close-up Godzilla detail was an image-design requirement for fear and scale.",
      "Explain how historical accuracy constraints can increase VFX/art-department work even when full physical sets are avoided.",
      "Separate Academy Award recognition from evidence about how the shots were produced.",
      "Reject the claim that 35 VFX artists proves the whole feature was made by 35 people.",
      "Reject the claim that the film establishes a universal $15 million benchmark for blockbuster-quality VFX.",
      "Maintain uncertainty around exact final budget, financing waterfall, exact VFX spend, total film crew, per-shot software, render hardware, server topology, camera settings outside documented ranges, complete sound chain and distribution economics.",
      "Close the production audit only when historical reconstruction, live photography, VFX planning, team structure, water/destruction, sound and uncertainty boundaries agree."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Godzilla Minus One evidence hierarchy", player_task: "Separate Toho/Sony/Academy institutional records from direct filmmaker, Shirogumi and specialist trade testimony before promoting claims." },
      { id: "budget_boundary", label: "Freeze the budget ambiguity", player_task: "Record only the filmmaker-supported below-$15-million boundary and leave exact negative cost and financing unresolved." },
      { id: "role_concentration", label: "Map Yamazaki's three roles", player_task: "Connect screenplay, directing and VFX supervision without treating concentrated authorship as cost-free." },
      { id: "historical_research", label: "Research 1947 Japan", player_task: "Collect period photographs and moving-image references before designing Ginza and other postwar environments." },
      { id: "storyboards", label: "Storyboard VFX-dependent action", player_task: "Lock effects-heavy staging early enough to drive live photography, digital layout and resource estimates." },
      { id: "previs", label: "Build simple-CG previs", player_task: "Previsualize effects material tied to photography before the shoot so camera and VFX share geometry and intent." },
      { id: "practical_anchor", label: "Build practical actor space", player_task: "Construct only the road, curb, storefront or boat environment actors need physically, then plan controlled digital extension." },
      { id: "ginza_extension", label: "Reconstruct Ginza digitally", player_task: "Extend the parking-lot build into a researched 1947 city without inventing modern structures or signs." },
      { id: "camera_package", label: "Lock the VENICE package", player_task: "Use VENICE 2 6K as A camera and VENICE as B camera with the documented X-OCN XT pipeline." },
      { id: "lens_package", label: "Choose lenses by environment", player_task: "Use the Supreme Prime set as the main package and the Angénieux EZ zoom where marine handling requires it." },
      { id: "marine_capture", label: "Shoot the sea battle on location", player_task: "Capture real small-boat movement and natural waves while planning for difficult CG interaction and unstable weather." },
      { id: "barracks_geometry", label: "Protect low-ceiling interiors", player_task: "Use full-frame field of view to avoid unnecessary ultra-wide distortion in constrained barracks spaces." },
      { id: "postvis", label: "Postvis full-CG editorial beats", player_task: "After photography, build postvis where full-CG material must establish timing before final effects work." },
      { id: "vfx_team", label: "Structure the 35-person VFX unit", player_task: "Keep the 35-person figure attached only to Shirogumi's VFX team and preserve the wider production workforce boundary." },
      { id: "generalist_floor", label: "Use the shared-floor review model", player_task: "Enable direct Yamazaki/Shibuya/Takahashi review while allowing artists to propose technical and visual improvements." },
      { id: "godzilla_model", label: "Build high-detail Godzilla", player_task: "Develop a creature that withstands unusually close camera distance using the documented sculpting/modelling tool family." },
      { id: "godzilla_walk", label: "Author the Godzilla walk", player_task: "Iterate waist, posture and movement by animation rather than motion capture to balance god-like weight and monster threat." },
      { id: "ocean_simulation", label: "Solve the digital ocean", player_task: "Match CG creature wakes and waves to complex photographed water rather than replacing the live-action sea texture wholesale." },
      { id: "storage_pressure", label: "Budget the simulation data", player_task: "Treat the one-petabyte-plus reported data volume and limited server capacity as active production constraints." },
      { id: "destruction", label: "Build Ginza destruction", player_task: "Combine CG architecture, atmospherics, debris and destruction with actor-grounded photography and researched geography." },
      { id: "heat_ray", label: "Design the heat-ray escalation", player_task: "Coordinate dorsal-fin mechanism, blast timing, destruction scale and post-blast environment as one effects beat." },
      { id: "compositing", label: "Integrate practical and digital layers", player_task: "Use compositing to unify limited physical builds, plates, green-screen material, digital city work, water and creature elements." },
      { id: "shot_review", label: "Keep approvals close to the artists", player_task: "Exploit the single-vendor feedback loop for iteration without confusing direct communication with unlimited labor capacity." },
      { id: "vfx_schedule", label: "Protect the eight-month VFX push", player_task: "Schedule the 610-cut post workload while acknowledging that asset work began before principal photography ended." },
      { id: "production_sound", label: "Preserve production sound", player_task: "Keep Hisafumi Takeuchi's location-recording role distinct from later sound-effects and exhibition-mix work." },
      { id: "sound_effects", label: "Build the effects sound world", player_task: "Coordinate Natsuko Inoue's sound-effects work with creature scale, destruction and postwar human perspective." },
      { id: "atmos", label: "Create an Atmos-specific balance", player_task: "Treat the Dolby Atmos mix as its own immersive balance rather than simply preserving the earlier 7.1 spatial distribution." },
      { id: "human_drama", label: "Protect the human-scale story", player_task: "Keep survivor guilt, family and civilian action structurally connected to the kaiju spectacle rather than as filler between effects sequences." },
      { id: "uncertainty_register", label: "Freeze unsupported production details", player_task: "Leave exact budget, financing, total crew, per-shot software, render hardware, server topology and complete sound-delivery records unresolved." },
      { id: "anti_myth_audit", label: "Reject the cheap-VFX miracle myth", player_task: "Check that compact staffing is explained through planning, experience, tool integration and labor rather than a simplistic do-more-with-less claim." },
      { id: "reception_boundary", label: "Separate Oscar recognition from workflow evidence", player_task: "Use the Academy win to establish industry recognition, not to infer undocumented methods or budgets." },
      { id: "production_verification", label: "Close the Godzilla Minus One production audit", player_task: "Verify the role structure, historical reconstruction, VENICE capture, practical/digital integration, 610-cut VFX system, sound workflow and uncertainty boundaries before canonical promotion." }
    ]
  }
] as const;

export function mergeChapterNineteenGodzillaMinusOneExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenGodzillaMinusOneExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_godzilla_minus_one_verified",
      source: { list_id: "manual_chapter_nineteen_godzilla_minus_one_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
