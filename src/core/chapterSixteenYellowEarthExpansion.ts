import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenYellowEarthExpansionDefinitions = [
  {
    id: "scenario_yellow_earth_1984",
    title: "Yellow Earth",
    originalTitle: "Huang tu di",
    aliases: ["Huang Tudi", "黄土地"],
    year: 1984,
    titleType: "Movie",
    runtimeMins: 89,
    directors: ["Chen Kaige"],
    genres: ["Drama", "History", "Music"],
    premise: "Build Yellow Earth as a 1984 Mainland Chinese state-studio production whose historical importance comes from a specific institutional opening at Guangxi Film Studio and from coordinated image, landscape, folk-music and narrative choices, not from treating the Fifth Generation as a single style. Academic film history identifies the studio's Youth Production Unit as the production setting that gave recently graduated filmmakers unusual room to work after the Cultural Revolution; BFI, UCLA and the Hong Kong Film Archive identify Chen Kaige as director, Zhang Yimou as cinematographer and Guangxi Film Studio as the production company. Keep the film's represented late-1930s/early-1940s rural Shaanxi world separate from its 1984 Reform-era production context. The story follows Gu Qing, an Eighth Route Army arts worker collecting folk songs, and Cuiqiao, whose arranged marriage and desire for another life make the film's politics emerge through landscape, ritual, song and withheld speech rather than through a simple liberation narrative. Preserve screenplay-credit provenance instead of forcing one false authority: BFI credits Zhang Ziliang, while the Hong Kong Film Archive credits Chen Kaige and Zhang Ziliang and identifies Ke Lan as the original-story source. Harvard documents the film as 35 mm, color and 89 minutes and describes stationary camera, natural lighting, a limited color palette, rural topography, costume texture and songs as a deliberate cinematic system. UCLA likewise describes the film's break with Seventeen Years-style socialist realism through poetic symbolism, scroll-painting-like composition and traditional folk music. Treat Zhang Yimou's cinematography as authored collaboration with Chen rather than generic 'beautiful landscape': human figures are repeatedly subordinated to the loess plateau, horizons and negative space, while static framing and natural light make social environment material. Zhao Jiping's own production recollections add a separate music-research layer: he recalls Chen, Zhang and art director He Qun approaching him in late 1983, then spending more than a month in northern Shaanxi in early 1984 discussing the film and researching regional musical culture; later accounts describe the score drawing on northern Shaanxi folk elements, including Ansai material. Keep this field research distinct from claims that the fiction itself is documentary. The Hong Kong Film Archive credits Pei Xiaonan for editing and Guo Keqi as production manager, while BFI and UCLA catalog Guo as producer; retain that role-label variance rather than silently normalizing it. Institutional runtime records also differ: IFFR catalogs 86 minutes, Harvard and BFI 89, and a later Hong Kong Film Archive DCP 91. Use 89 minutes canonically because Harvard and BFI converge, but preserve 86/89/91 as catalog or presentation provenance without inventing undocumented cuts. Do not invent camera body, lens package, film-stock emulsion, exposure ratios, sound-recorder or microphone models, exact location dates, production budget, laboratory process or censorship chronology beyond what the cited sources actually establish.",
    sourceId: "hkfa_yellow_earth_1984",
    sourceUrl: "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2016-10-1-10.html",
    scenarioType: "guangxi_youth_unit_fifth_generation_state_studio_landscape_natural_light_folk_music_production",
    requiredChoicesSeed: {
      screenplay: ["ke_lan_source_story_adaptation", "preserve_chen_kaige_zhang_ziliang_credit_provenance", "represented_rural_1939_1940_vs_1984_production_context"],
      camera: ["zhang_yimou_static_landscape_composition", "natural_light_limited_color_palette", "35mm_color_no_invented_camera_lens_stock_or_exposure_package"],
      editing: ["pei_xiaonan_stasis_movement_landscape_song_structure", "withheld_dialogue_and_ritual_duration", "89_minute_canonical_preserve_86_91_catalog_variance"],
      sound: ["zhao_jiping_shaanbei_field_research", "folk_song_and_waist_drum_as_structural_music", "no_invented_recorder_microphone_or_orchestration_chain"],
      themes: ["film_history", "1980s", "mainland_china", "fifth_generation", "guangxi_film_studio", "youth_production_unit", "state_studio", "shaanxi", "loess_plateau", "landscape", "natural_light", "35mm", "folk_music", "zhao_jiping", "zhang_yimou", "socialist_realism_break", "women_and_arranged_marriage", "version_provenance"],
    },
    learningGoals: [
      "Model Yellow Earth as a Guangxi Film Studio and Youth Production Unit production rather than reducing Fifth Generation cinema to an aesthetic label.",
      "Separate the film's represented late-1930s/early-1940s rural Shaanxi setting from the institutional conditions of production in 1984 Mainland China.",
      "Preserve screenplay-credit provenance across BFI and Hong Kong Film Archive records instead of inventing one artificially certain authorship line.",
      "Treat Zhang Yimou's cinematography as a system of static framing, landscape scale, negative space, natural light and restrained color rather than generic pictorial beauty.",
      "Use Harvard's 35 mm/color record while refusing unsupported camera body, lens, stock-emulsion or exposure specifications.",
      "Explain how landscape, bodies, ritual and sparse dialogue reorganize socialist-realist narrative expectations without claiming that the film abandons narrative altogether.",
      "Keep Pei Xiaonan's editing authorship visible and connect cutting/duration to the balance between stasis, song, ritual and bursts of collective movement.",
      "Treat Zhao Jiping's northern-Shaanxi field research as a production process that informed the score and folk-song system rather than as an unsourced claim of documentary authenticity.",
      "Keep the Ansai waist-drum and regional song traditions as cultural and sonic material whose filmic use is selected and organized by the production team.",
      "Preserve Guo Keqi's producer/production-manager catalog variance rather than silently converting distinct institutional role labels into one certainty.",
      "Use 89 minutes canonically because Harvard and BFI converge while retaining 86- and 91-minute institutional records as presentation/catalog provenance only.",
      "Treat the film's international recognition as circulation history downstream from the Guangxi production process, not as the cause of its original formal decisions.",
      "Keep Fifth Generation, Mainland China, Hong Kong New Wave and Taiwan New Cinema institutionally distinct even when Chapter 16 compares their roughly contemporaneous transformations.",
      "Avoid inventing production budget, exact shoot dates, censorship chronology, lab process, sound chain or technical specifications absent from the cited evidence.",
    ],
    phases: [
      { id: "pitch", label: "Use a regional state studio opening to rethink historical drama", player_task: "Frame the project inside Guangxi Film Studio's young-production opportunity and define a rural historical subject that can be made formally distinct without pretending the state-studio context disappears." },
      { id: "research", label: "Separate represented history from 1984 production research", player_task: "Map the late-1930s/early-1940s story world, northern-Shaanxi landscape, folk traditions and Reform-era production context as related but non-identical historical layers." },
      { id: "screenplay", label: "Build politics through song, ritual and withheld speech", player_task: "Adapt the Ke Lan source material through the sourced screenplay tradition while making Cuiqiao's constrained choices, Gu Qing's promises and social custom legible without a simplistic propaganda resolution." },
      { id: "performance", label: "Stage people as part of a social landscape", player_task: "Direct the small principal ensemble and collective ritual scenes so gestures, work, silence, song and spatial relation carry meaning without inventing an undocumented rehearsal or casting method." },
      { id: "design", label: "Let location, clothing and ritual material remain historically specific", player_task: "Coordinate rural spaces, objects, clothing textures and ceremony with the landscape image system while avoiding unsupported fabrication or sourcing claims." },
      { id: "cinematography", label: "Make land and negative space active dramatic forces", player_task: "Use Zhang Yimou's documented static compositions, natural light and controlled palette on 35 mm while leaving camera, lens, stock and exposure details unset where sources do not support them." },
      { id: "editing", label: "Balance stasis with ritual and collective movement", player_task: "Use Pei Xiaonan's editing layer to organize long visual attention, sparse dialogue, songs, wedding ritual and the waist-drum sequence without forcing modern continuity tempo onto the material." },
      { id: "sound", label: "Build the musical world from field-informed regional traditions", player_task: "Use Zhao Jiping's documented Shaanbei research and regional folk elements as sourced musical foundations while refusing invented recording equipment or orchestration details." },
      { id: "release", label: "Separate original 1984 production from international and later DCP circulation", player_task: "Track Guangxi production, subsequent festival recognition and later catalog/DCP runtimes as distinct layers, preserving 86/89/91-minute provenance without inventing cuts." },
    ],
  },
] as const;

export function mergeChapterSixteenYellowEarthExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenYellowEarthExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_yellow_earth_verified",
      source: { list_id: "manual_chapter_sixteen_yellow_earth_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
