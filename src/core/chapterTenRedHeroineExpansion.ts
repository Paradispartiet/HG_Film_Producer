import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTenRedHeroineExpansionDefinitions = [
  {
    id: "scenario_the_red_heroine_1929",
    title: "The Red Heroine",
    originalTitle: "红侠",
    aliases: ["Red Heroine", "Hongxia", "Hong xia", "The Red Errant Knight", "紅俠"],
    year: 1929,
    titleType: "Feature",
    runtimeMins: 101,
    directors: ["Wen Yimin"],
    genres: ["Action", "Fantasy"],
    premise: "Build The Red Heroine / Hongxia as the surviving 1929 section of Youlian Film Company's thirteen-part Red Knight-Errant serial, never as a reconstruction of the complete lost serial. Wen Yimin directs and writes, Fan Xuepeng anchors the female wuxia performance, Yao Shiquan photographs and Hu Xuguang handles art/design. China Film Archive and NFAJ document stunt photography, set mechanisms, swordplay and supernatural-fantasy effects; the player must coordinate those crafts with clear action geography, performance and serial storytelling rather than treating wuxia as a generic wire-fu or modern effects preset. Preserve the production's gender and violence boundaries: abduction, coercion and threatened sexual violence are narrative dangers, not rewardable spectacle, while the heroine's martial agency must not be reduced to novelty or fetish. Preserve archive boundaries too: UCLA identifies the film as the only surviving section of a thirteen-part serial, so no missing installment, connective scene or production fact may be invented merely to make the serial feel complete. The surviving section exists in materially different modern presentations—UCLA lists about 94 minutes, China Film Archive about 101 minutes, and NFAJ has screened a much longer 18-fps version—so projection speed, restoration and intertitle versions must remain explicit. The photographed work is silent; modern live accompaniment and restored-screening music belong to later exhibition, not a synchronized 1929 soundtrack.",
    sourceId: "manual_the_red_heroine_1929",
    sourceUrl: "https://www.cfa.org.cn/cfaen/gz/dymlcx/dy/2023053116474486795/index.html",
    scenarioType: "shanghai_youlian_wuxia_serial_fragment_trick_effects_production",
    requiredChoicesSeed: {
      screenplay: ["wen_yimin_surviving_serial_section", "serial_context_without_invented_installments", "female_wuxia_agency_without_exploitation"],
      camera: ["yao_shiquan_action_legibility", "stunt_photography_and_set_mechanisms", "supernatural_effects_not_documentary_reality"],
      editing: ["serial_section_causal_arc", "action_reaction_and_rescue_geography", "projection_speed_runtime_version_control"],
      sound: ["silent_1929_production", "modern_live_accompaniment_is_exhibition", "no_invented_original_sync_score"],
      themes: ["film_history", "chinese_silent_cinema", "shanghai", "youlian", "wuxia", "female_action_stardom", "serial_fragment", "archive_survival"],
    },
    learningGoals: [
      "Treat The Red Heroine as one surviving section of a thirteen-part Youlian serial and prohibit the player from inventing lost installments, missing connective scenes or complete-serial production facts that the surviving evidence cannot support.",
      "Keep Wen Yimin's writing/direction, Yao Shiquan's cinematography, Hu Xuguang's design and Fan Xuepeng's starring performance visible as distinct production contributions rather than collapsing the film into a generic wuxia label.",
      "Build swordplay, stunt photography, set mechanisms and supernatural effects through readable spatial cause and effect without importing modern wire-work, digital compositing or contemporary action grammar as undocumented historical fact.",
      "Model Fan Xuepeng's heroine as an active martial protagonist while refusing to turn abduction, coercion, sexual threat or female peril into bonus spectacle or a measure of historical authenticity.",
      "Use the film to explain the late-1920s Shanghai wuxia boom and serial economics while keeping one surviving Youlian section distinct from the much larger, mostly lost production culture around it.",
      "Preserve version history: archive presentations around 94, 101 and 132 minutes reflect different surviving materials, projection speeds, restorations and intertitle/presentation states rather than one certain immutable 1929 runtime.",
      "Separate the silent photographed production from later live musical accompaniment and modern archive presentation, and keep surviving English/Chinese/Japanese intertitle states distinct rather than pretending they reproduce one universal original text.",
    ],
    phases: [
      { id: "pitch", label: "A surviving serial section", player_task: "Define a playable feature-length surviving section whose dramatic arc works on its own while every missing installment remains explicitly outside the reconstruction." },
      { id: "research", label: "Youlian, wuxia and fragment research", player_task: "Ground Wen Yimin, Fan Xuepeng, Yao Shiquan, Hu Xuguang, Youlian, the thirteen-part serial context, stunt/set mechanisms, format and archive-version history in institutional sources." },
      { id: "screenplay", label: "Serial context without fabrication", player_task: "Structure the surviving section's abduction, martial intervention, supernatural action and resolution without inventing scenes or facts from the twelve non-surviving installments." },
      { id: "casting", label: "Female action agency", player_task: "Direct Fan Xuepeng's heroine as a decisive martial agent and keep endangered characters human rather than converting sexual threat, captivity or rescue into exploitative spectacle." },
      { id: "production_design", label: "Hu Xuguang's mechanisms and spaces", player_task: "Coordinate interiors, elevated spaces, traps, set mechanisms and fantasy environments so action remains spatially readable and documented design labor stays visible." },
      { id: "cinematography", label: "Yao Shiquan and stunt legibility", player_task: "Frame bodies, swordplay, stunt photography and trick effects so setup and payoff remain intelligible without pretending that later action technologies were available in 1929." },
      { id: "editing", label: "Action rhythm with fragment boundaries", player_task: "Build momentum from setup, movement, reaction and consequence while labeling any abrupt narrative edges as serial-survival limits rather than silently repairing them." },
      { id: "sound", label: "Silent production, changing presentation", player_task: "Keep the photographed film silent and separate later live accompaniment and intertitle-language versions from claims about the 1929 production soundtrack." },
      { id: "release", label: "Wuxia boom, censorship and survival", player_task: "Model late-1920s Shanghai serial production, wuxia popularity, later suppression/censorship context and archive survival without turning the surviving episode into a complete industry sample." },
    ],
  },
] as const;

export function mergeChapterTenRedHeroineExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTenRedHeroineExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_ten_red_heroine_verified",
      source: {
        list_id: "manual_chapter_ten_red_heroine_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: definition.titleType,
        runtime_mins: definition.runtimeMins,
        directors: definition.directors,
        genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0,
        user_rating: 0,
      },
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
