import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenShiriExpansionDefinitions = [
  {
    id: "scenario_shiri_1999",
    title: "Shiri",
    originalTitle: "쉬리",
    year: 1999,
    titleType: "Movie",
    runtimeMins: 125,
    directors: ["Kang Je-gyu"],
    genres: ["Action", "Drama", "Romance", "Thriller"],
    premise: "Build Shiri as a 1999 South Korean commercial-action production that made the emerging Korean blockbuster system visible through scale, financing, effects coordination, star casting and domestic distribution, without turning its later success into a myth that one film single-handedly created the Korean industry. KOFIC records Kang Je-gyu as director, Lee Kwan-hark as producer, Byeon Mu-rim in investment, KangJeGyu Films as production company, a 13 February 1999 release and a 125-minute runtime. KOFIC's industrial histories separately describe Samsung backing, financing support that also included the Korea Technology Finance Corporation, and reported production costs that vary across its own records: Kang's people profile gives 2.4 billion won, while a later Ko-Pick investment history gives 3 billion won. A 2002 Los Angeles Times interview with Kang describes the production as costing about US$5 million. Preserve those figures as differently framed historical reports rather than converting them into one supposedly audited budget. Contemporary Korean reporting says Kang developed the screenplay for roughly two years and revised it repeatedly during production, while the KOFIC record lists Beak Woon-hak and Jeon Yun-su as script editors. Treat scripting and revision as a production system rather than a fixed text. Craft credits also require source reconciliation. A Korean cinematheque database, KoreaFilm's contemporary-style production record and 1999 award coverage identify Kim Sung-bok as principal cinematographer, with Won Myung-jun on lighting, Park Gok-ji editing, Lee Dong-jun music, Lee Byung-ha production sound, Kim Seok-won sound, Jung Do-ahn practical special effects, Cho Sung-bae visual effects/miniatures and Jung Doo-hong action direction. KOFIC's current film page instead lists Hwang Suh-shik as director of photography; preserve that institutional catalogue variance explicitly rather than silently overwriting it. Use Kim Sung-bok as the canonical cinematography credit because multiple Korean production/award records converge there, while Hwang remains documented as part of the camera team in other Korean records. Production reporting from March 1999 distinguishes practical gunfire/explosion effects from computer graphics and miniature work and describes a purpose-built aquarium set, practical breakage and injuries during the aquarium shoot. A July 1999 Yonhap report on the Making Shiri documentary also records firearms training, aquarium checks, building-explosion preparation and interviews with department heads. These are historical records of what happened, not contemporary instructions. Present-day weapons, breakaway glass, pyrotechnics, wirework and explosions require qualified department heads, controlled weapons protocols, certified materials/rigging, rehearsals, barriers, PPE where appropriate, medical/emergency planning and applicable labor/safety rules; safer non-firing or digital alternatives should be preferred when they can achieve the creative goal. Keep Jung Do-ahn's practical effects, Cho Sung-bae's CG/miniatures and Jung Doo-hong's martial-arts/stunt direction as separate production systems. Park Gok-ji's editing, Lee Byung-ha/Kim Seok-won's sound and Lee Dong-jun's score remain separate finishing departments; 1999 Daejong reporting corroborates the lighting, editing, sound-technology and planning awards without using awards as proof of undocumented technique. Runtime records vary: KOFIC gives 125 minutes while KoreaFilm gives 120. Use 125 minutes as canonical gameplay runtime because it is the current national film-industry record, while preserving 120/125 as catalogue/version variance. KOFIC and contemporary Korean reporting document the film's extraordinary domestic commercial impact, while KOFIC's later retrospective describes its subsequent mainstream releases in Japan and Hong Kong and wider international circulation. Keep domestic release, later overseas distribution and awards downstream from original production. The story's North/South conflict belongs to the film's political and market context, but neither plot nor reception is evidence for real intelligence practice or factual consensus about inter-Korean politics. Do not invent camera bodies, lenses, stocks, exposure, laboratory process, weapon loads, explosive charges, wire loads/heights, exact stunt choreography, CG software, miniature scales, sound hardware, mix format, shooting schedule, unit size or location-permit details absent from the reviewed sources.",
    sourceId: "kofic_shiri_1999",
    sourceUrl: "https://www.koreanfilm.or.kr/eng/films/index/filmsView.jsp?category=ALL&mode=INDEX_FILMS_LIST&movieCd=19990084",
    scenarioType: "south_korean_blockbuster_finance_practical_effects_cg_action_distribution",
    requiredChoicesSeed: {
      screenplay: ["two_year_development_and_revisions", "script_editor_roles_visible", "political_plot_not_factual_proof"],
      camera: ["kim_sung_bok_canonical_with_hwang_suh_shik_catalogue_variance", "lighting_department_separate", "no_invented_camera_lens_stock_exposure_or_lab"],
      editing: ["park_gok_ji_editorial_authorship", "domestic_and_overseas_versions_separate", "awards_not_technique_proof"],
      sound: ["lee_byung_ha_kim_seok_won_sound_layer", "lee_dong_jun_music_separate", "no_invented_sound_hardware_mix_format"],
      themes: ["film_history", "1990s", "south_korea", "korean_blockbuster", "kang_je_gyu", "kangjegyu_films", "samsung", "film_finance", "kim_sung_bok", "hwang_suh_shik_credit_variance", "won_myung_jun", "park_gok_ji", "lee_dong_jun", "lee_byung_ha", "kim_seok_won", "jung_do_ahn", "cho_sung_bae", "jung_doo_hong", "practical_effects", "visual_effects", "miniatures", "action_direction", "runtime_variance", "safety_boundary"],
    },
    learningGoals: [
      "Model Shiri as one highly consequential production inside an already changing South Korean industry, not as a lone-inventor origin myth for Korean cinema.",
      "Keep KangJeGyu Films production, Samsung backing/distribution and other financing support institutionally distinct instead of collapsing them into one company role.",
      "Preserve the 2.4-billion-won, 3-billion-won and roughly US$5-million budget reports as differently framed historical evidence rather than one normalized audited figure.",
      "Use the roughly two-year writing process and repeated revisions as production-development evidence while keeping script-editor credits visible.",
      "Use Kim Sung-bok as canonical cinematography credit from convergent Korean production/award records while preserving KOFIC's Hwang Suh-shik DP listing as catalogue variance.",
      "Keep Won Myung-jun's lighting work distinct from cinematography rather than folding lighting into a single camera credit.",
      "Keep Jung Do-ahn's practical special effects, Cho Sung-bae's CG/miniature work and Jung Doo-hong's action direction as separate production systems.",
      "Use contemporary aquarium-set and practical-effects reporting to study production coordination without treating injury or risk exposure as evidence of desirable practice.",
      "Treat historical firearms training, blanks, breakaway materials and explosive effects as descriptive evidence only; present-day work requires independent professional safety controls and safer alternatives where feasible.",
      "Keep Park Gok-ji's editing distinct from screenplay revision and from later international/director's-cut version history.",
      "Keep Lee Byung-ha/Kim Seok-won's sound work and Lee Dong-jun's score separate from effects and image production.",
      "Preserve 120/125-minute catalogue variance while using KOFIC's 125-minute national-industry record as canonical gameplay runtime.",
      "Separate original domestic production/release from later Japan, Hong Kong and wider international distribution.",
      "Use awards and box-office records as reception/industry evidence only, never as proof of undocumented on-set technique.",
      "Treat the North/South conflict as narrative and historical-market context rather than factual evidence about intelligence or military practice.",
      "Do not infer exact camera, lens, stock, exposure, lab, VFX-software, miniature-scale, sound-hardware or mix specifications absent from source evidence.",
      "Do not infer weapon loads, explosive quantities, wire loads/heights, stunt choreography, unit size, exact schedule or permitting details from general production anecdotes.",
    ],
    phases: [
      { id: "package_and_finance", label: "Assemble a Korean commercial-action package at unprecedented local scale", player_task: "Separate KangJeGyu Films production from Samsung backing/distribution and other financing support; preserve 2.4bn/3bn won/about-US$5m reports without converting them into one audited budget." },
      { id: "script_development", label: "Develop and repeatedly revise the espionage-action screenplay", player_task: "Use the roughly two-year development and repeated-revision record while keeping Kang's authorship and Beak Woon-hak/Jeon Yun-su script-editor roles distinct." },
      { id: "camera_lighting_design", label: "Coordinate cinematography, lighting and production design", player_task: "Use Kim Sung-bok as canonical DP with Hwang Suh-shik preserved as catalogue variance; keep Won Myung-jun's lighting distinct and leave unsupported camera/lens/stock/exposure/lab details unset." },
      { id: "action_preparation", label: "Prepare performers and action departments for large-scale set pieces", player_task: "Treat historical firearms/action training as evidence only; for present-day planning require qualified action, armory and safety personnel, controlled rehearsal and safer alternatives rather than replicating undocumented methods." },
      { id: "practical_effects", label: "Execute practical gunfire, breakage and explosion effects", player_task: "Keep Jung Do-ahn's practical-effects department distinct from CG. Historical aquarium injuries are a safety warning, not a production benchmark; do not infer charges, weapon loads or breakaway specifications." },
      { id: "visual_effects_and_miniatures", label: "Extend practical action with CG and miniature work", player_task: "Keep Cho Sung-bae's visual-effects/miniature contribution separate from practical effects and leave unsupported software, hardware, miniature-scale and compositing-pipeline details unset." },
      { id: "principal_photography", label: "Shoot a star-led domestic action thriller at feature scale", player_task: "Coordinate cast, camera, lighting, art, sound and action departments without inventing exact locations, schedule length, unit size or permit arrangements not established by reviewed sources." },
      { id: "edit_sound_music", label: "Finish picture, sound and score as distinct craft systems", player_task: "Credit Park Gok-ji editing, Lee Byung-ha/Kim Seok-won sound and Lee Dong-jun music separately; do not reverse-engineer sound hardware, mix layout or editorial technology from awards." },
      { id: "domestic_release", label: "Launch through the Korean theatrical market", player_task: "Use the 13 February 1999 release and documented domestic breakthrough as industrial evidence while avoiding deterministic claims that one film alone caused the industry's growth." },
      { id: "international_and_version_history", label: "Track later circulation without rewriting the 1999 production", player_task: "Preserve 120/125 runtime variance, later overseas release and director's-cut material as downstream version/distribution history rather than evidence about original on-set technique." },
    ],
  },
] as const;

export function mergeChapterSeventeenShiriExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenShiriExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Swiri"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_shiri_verified",
      source: { list_id: "manual_chapter_seventeen_shiri_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
