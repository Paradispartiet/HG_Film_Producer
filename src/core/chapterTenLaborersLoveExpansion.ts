import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTenLaborersLoveExpansionDefinitions = [
  {
    id: "scenario_laborers_love_1922",
    title: "Laborer's Love",
    originalTitle: "Laogong zhi aiqing",
    aliases: ["Labourer's Love", "Labor's Love", "Romance of a Fruit Peddler", "Zhi guo yuan"],
    year: 1922,
    titleType: "Short",
    runtimeMins: 24,
    directors: ["Zhang Shichuan"],
    genres: ["Comedy", "Romance"],
    premise: "Build Laborer's Love as a 1922 Shanghai Mingxing production problem in short-form comedy, artisanal ingenuity, bilingual circulation and early studio formation. Mingxing founders Zhang Shichuan and Zheng Zhengqiu divide documented directing and screenwriting responsibilities, Zhang Weitao photographs, and Zheng Zhegu, Yu Ying and Zheng Zhengqiu perform a compact courtship story in which a carpenter-turned-fruit seller converts tools, architecture and urban street space into visual gags. Treat the staircase trap, pulley-like courtship device, falls and other tricks as designed comic mechanics that depend on staging, framing, timing and editing rather than as evidence that Chinese cinema simply copied Hollywood slapstick. Preserve the original Chinese-and-English intertitles as production and circulation evidence while recognizing that the two language tracks can differ in comic wording. Keep photographed silent production separate from live musical accompaniment and from modern recorded scores. Finally, treat the surviving complete film and China Film Archive's later digital/4K restorations as an archive history: its exceptional survival is evidence of preservation bias, not proof that one 22–24 minute short can stand in for the full diversity of Chinese filmmaking in the 1920s.",
    sourceId: "manual_laborers_love_1922",
    sourceUrl: "https://www.filmarchive.gov.hk/en/web/hkfa/2009/early-chinese-films/pe-event-2009-early-chinese-films-fs-film01.html",
    scenarioType: "shanghai_mingxing_bilingual_trick_comedy_production",
    requiredChoicesSeed: {
      screenplay: ["zheng_zhengqiu_compact_courtship_comedy", "artisan_problem_solution_structure", "bilingual_intertitle_version_attention"],
      camera: ["zhang_weitao_gag_legibility", "staircase_and_tool_geography", "trick_photography_without_copying_myth"],
      editing: ["setup_action_payoff_rhythm", "fall_and_staircase_cause_effect", "silent_short_runtime_version_control"],
      sound: ["silent_1922_production", "live_accompaniment_is_exhibition", "modern_recorded_score_not_original_sound"],
      themes: ["film_history", "early_chinese_cinema", "shanghai", "mingxing", "slapstick_comedy", "bilingual_intertitles", "archive_survival"],
    },
    learningGoals: [
      "Model Mingxing as a newly founded Shanghai production company in which Zhang Shichuan, Zheng Zhengqiu and collaborators divided practical filmmaking labor, rather than treating the film as an anonymous national origin myth.",
      "Build physical comedy through readable spatial causes and effects: tools, the street, the doctor's clinic, the staircase and falling bodies must function as a coordinated production system rather than a list of gags.",
      "Use Zhang Weitao's documented cinematography credit to keep framing, trick photography and visual legibility attached to a named craft role without inventing an unsupported camera package or laboratory workflow.",
      "Treat the original Chinese-and-English intertitles as evidence of circulation strategy and multilingual address, while allowing for documented differences between Chinese and English joke wording instead of assuming one text is a literal duplicate of the other.",
      "Recognize influence from international slapstick and Hollywood comedy while preserving local urban situations, Chinese comic conventions and artisanal problem-solving; influence does not make the production a copy.",
      "Keep the original silent film distinct from live accompaniment and modern recorded restoration scores, and keep 22-, 23- and 24-minute modern runtimes as presentation/restoration variation rather than contradictory production facts.",
      "Explain why Laborer's Love is historically valuable as the earliest-known surviving complete Chinese-made fiction film without mistaking exceptional survival for representative coverage of China's much larger lost early-film corpus.",
    ],
    phases: [
      { id: "pitch", label: "Artisan-comedy pitch", player_task: "Define a short courtship comedy in which the protagonist solves romantic and economic problems through tools, spatial ingenuity and escalating physical consequences." },
      { id: "research", label: "Mingxing and survival research", player_task: "Ground Zhang Shichuan, Zheng Zhengqiu, Zhang Weitao, the 1922 Mingxing company, bilingual intertitles, 35mm silent format and archive/restoration history in institutional evidence." },
      { id: "screenplay", label: "Compact setup and payoff", player_task: "Structure fruit-stall courtship, the doctor's condition and the engineered patient-making scheme so each gag advances the marriage bargain rather than functioning as detachable spectacle." },
      { id: "casting", label: "Readable comic bodies", player_task: "Direct Zheng Zhegu, Yu Ying, Zheng Zhengqiu and supporting performers through clear gesture, attraction, irritation and physical reaction without reducing early Chinese performance to a crude or primitive stereotype." },
      { id: "production_design", label: "Street, clinic and staircase machine", player_task: "Coordinate stalls, windows, tools, ropes and the staircase so urban architecture can plausibly become both courtship infrastructure and comic hazard." },
      { id: "cinematography", label: "Frame the mechanism", player_task: "Use Zhang Weitao's camera position and trick-photography logic to keep setup, spatial relation and payoff intelligible while avoiding invented claims about undocumented equipment." },
      { id: "editing", label: "Cause, fall and payoff rhythm", player_task: "Cut between setup, action, reaction and consequence so the staircase scheme is legible as comic engineering and not merely a random montage of falls." },
      { id: "sound", label: "Silent production, live exhibition", player_task: "Keep the photographed film silent, preserve intertitles as textual performance, and separate historical live accompaniment from later recorded restoration scores." },
      { id: "release", label: "Bilingual circulation and archive afterlife", player_task: "Model Chinese/English intertitles, early Mingxing circulation, exceptional survival and later digital/4K restoration as distinct stages in the film's production, exhibition and archival life." },
    ],
  },
] as const;

export function mergeChapterTenLaborersLoveExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTenLaborersLoveExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_ten_laborers_love_verified",
      source: {
        list_id: "manual_chapter_ten_laborers_love_expansion_2026",
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
