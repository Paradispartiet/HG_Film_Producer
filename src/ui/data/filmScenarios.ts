import seedData from "../../../data/film/scenarios/film_scenarios_seed.json";
import { mergeEarlyCinemaExpansion } from "../../core/earlyCinemaExpansion.js";
import { mergeChapterOneEarlyCinemaExpansion } from "../../core/chapterOneEarlyCinemaExpansion.js";
import { mergeChapterOneRescuedByRoverExpansion } from "../../core/chapterOneRescuedByRoverExpansion.js";
import { mergeChapterTwoExhibitionExpansion } from "../../core/chapterTwoExhibitionExpansion.js";
import { mergeChapterThreeNarrativeExpansion } from "../../core/chapterThreeNarrativeExpansion.js";
import { mergeChapterFourIndustryExpansion } from "../../core/chapterFourIndustryExpansion.js";
import { mergeChapterFiveInternationalExpansion } from "../../core/chapterFiveInternationalExpansion.js";
import { mergeChapterSixHollywoodExpansion } from "../../core/chapterSixHollywoodExpansion.js";
import { mergeChapterSevenWeimarExpansion } from "../../core/chapterSevenWeimarExpansion.js";
import { mergeChapterEightFrenchAvantGardeExpansion } from "../../core/chapterEightFrenchAvantGardeExpansion.js";
import { mergeChapterNineSovietMontageExpansion } from "../../core/chapterNineSovietMontageExpansion.js";
import { mergeChapterTenSilentCinemasExpansion } from "../../core/chapterTenSilentCinemasExpansion.js";
import { mergeChapterTenLaborersLoveExpansion } from "../../core/chapterTenLaborersLoveExpansion.js";
import { mergeChapterTenAThrowOfDiceExpansion } from "../../core/chapterTenAThrowOfDiceExpansion.js";
import { mergeChapterTenGrowthOfTheSoilExpansion } from "../../core/chapterTenGrowthOfTheSoilExpansion.js";
import { mergeChapterTenOrochiExpansion } from "../../core/chapterTenOrochiExpansion.js";
import { mergeChapterTenRedHeroineExpansion } from "../../core/chapterTenRedHeroineExpansion.js";
import { mergeEastAsianAuteurExpansion } from "../../core/eastAsianAuteurExpansion.js";
import { mergeEasternIberianBritishExpansion } from "../../core/easternIberianBritishExpansion.js";
import { mergeFestivalWinners1981To2009Expansion } from "../../core/festivalWinners1981To2009Expansion.js";
import { mergeFestivalWinners2010To2024Expansion } from "../../core/festivalWinners2010To2024Expansion.js";
import { mergeItalyFranceGermanyBeneluxExpansion } from "../../core/italyFranceGermanyBeneluxExpansion.js";
import { mergeJapaneseAuteurExpansion } from "../../core/japaneseAuteurExpansion.js";
import { mergeModernCanonExpansion } from "../../core/modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "../../core/priorityIndieExpansion.js";
import { mergeScandinavianEuropeanExpansion } from "../../core/scandinavianEuropeanExpansion.js";
import { mergeSouthKoreanCinemaExpansion } from "../../core/southKoreanCinemaExpansion.js";
import { mergeSouthSoutheastAsianExpansion } from "../../core/southSoutheastAsianExpansion.js";

export type FilmScenarioSeed = {
  readonly id: string;
  readonly status: string;
  readonly source: {
    readonly list_id: string;
    readonly position: number;
    readonly imdb_id: string;
    readonly url: string;
  };
  readonly film: {
    readonly title: string;
    readonly original_title: string;
    readonly year: number;
    readonly title_type: string;
    readonly runtime_mins: number;
    readonly directors: readonly string[];
    readonly genres: readonly string[];
    readonly genre_keys: readonly string[];
    readonly imdb_rating: number;
    readonly user_rating: number;
  };
  readonly scenario_type: string;
  readonly production_challenge: string;
  readonly required_choices_seed: Record<string, readonly string[]>;
  readonly phases: readonly {
    readonly id: string;
    readonly label: string;
    readonly player_task: string;
  }[];
  readonly learning_goals_seed: readonly string[];
  readonly manual_enrichment_needed: readonly string[];
};

export type FilmScenarioSeedFile = {
  readonly schema_version: string;
  readonly source_list_id: string;
  readonly scenario_count: number;
  readonly note: string;
  readonly scenarios: readonly FilmScenarioSeed[];
};

const importedSeedData = seedData as FilmScenarioSeedFile;
const historicalScenarios = mergeEarlyCinemaExpansion(importedSeedData.scenarios);
const chapterOneEarlyCinemaScenarios = mergeChapterOneEarlyCinemaExpansion(historicalScenarios);
const chapterOneCompleteScenarios = mergeChapterOneRescuedByRoverExpansion(chapterOneEarlyCinemaScenarios);
const chapterTwoExhibitionScenarios = mergeChapterTwoExhibitionExpansion(chapterOneCompleteScenarios);
const chapterThreeNarrativeScenarios = mergeChapterThreeNarrativeExpansion(chapterTwoExhibitionScenarios);
const chapterFourIndustryScenarios = mergeChapterFourIndustryExpansion(chapterThreeNarrativeScenarios);
const chapterFiveInternationalScenarios = mergeChapterFiveInternationalExpansion(chapterFourIndustryScenarios);
const chapterSixHollywoodScenarios = mergeChapterSixHollywoodExpansion(chapterFiveInternationalScenarios);
const chapterSevenWeimarScenarios = mergeChapterSevenWeimarExpansion(chapterSixHollywoodScenarios);
const chapterEightFrenchAvantGardeScenarios = mergeChapterEightFrenchAvantGardeExpansion(chapterSevenWeimarScenarios);
const chapterNineSovietMontageScenarios = mergeChapterNineSovietMontageExpansion(chapterEightFrenchAvantGardeScenarios);
const chapterTenSilentCinemasScenarios = mergeChapterTenSilentCinemasExpansion(chapterNineSovietMontageScenarios);
const chapterTenLaborersLoveScenarios = mergeChapterTenLaborersLoveExpansion(chapterTenSilentCinemasScenarios);
const chapterTenAThrowOfDiceScenarios = mergeChapterTenAThrowOfDiceExpansion(chapterTenLaborersLoveScenarios);
const chapterTenGrowthOfTheSoilScenarios = mergeChapterTenGrowthOfTheSoilExpansion(chapterTenAThrowOfDiceScenarios);
const chapterTenOrochiScenarios = mergeChapterTenOrochiExpansion(chapterTenGrowthOfTheSoilScenarios);
const chapterTenRedHeroineScenarios = mergeChapterTenRedHeroineExpansion(chapterTenOrochiScenarios);
const modernCanonScenarios = mergeModernCanonExpansion(chapterTenRedHeroineScenarios);
const priorityIndieScenarios = mergePriorityIndieExpansion(modernCanonScenarios);
const eastAsianAuteurScenarios = mergeEastAsianAuteurExpansion(priorityIndieScenarios);
const japaneseAuteurScenarios = mergeJapaneseAuteurExpansion(eastAsianAuteurScenarios);
const southKoreanScenarios = mergeSouthKoreanCinemaExpansion(japaneseAuteurScenarios);
const southSoutheastAsianScenarios = mergeSouthSoutheastAsianExpansion(southKoreanScenarios);
const earlyFestivalWinnerScenarios = mergeFestivalWinners1981To2009Expansion(southSoutheastAsianScenarios);
const recentFestivalWinnerScenarios = mergeFestivalWinners2010To2024Expansion(earlyFestivalWinnerScenarios);
const scandinavianEuropeanScenarios = mergeScandinavianEuropeanExpansion(recentFestivalWinnerScenarios);
const easternIberianBritishScenarios = mergeEasternIberianBritishExpansion(scandinavianEuropeanScenarios);
const mergedScenarios = mergeItalyFranceGermanyBeneluxExpansion(easternIberianBritishScenarios);

export const filmScenarioSeedData: FilmScenarioSeedFile = {
  ...importedSeedData,
  source_list_id: `${importedSeedData.source_list_id}+manual_early_cinema_expansion_2026+manual_chapter_one_early_cinema_expansion_2026+manual_chapter_two_exhibition_expansion_2026+manual_chapter_three_narrative_expansion_2026+manual_chapter_four_industry_expansion_2026+manual_chapter_five_international_expansion_2026+manual_chapter_six_hollywood_expansion_2026+manual_chapter_seven_weimar_expansion_2026+manual_chapter_eight_french_avant_garde_expansion_2026+manual_chapter_nine_soviet_montage_expansion_2026+manual_chapter_ten_silent_cinemas_expansion_2026+manual_chapter_ten_laborers_love_expansion_2026+manual_chapter_ten_a_throw_of_dice_expansion_2026+manual_chapter_ten_growth_of_the_soil_expansion_2026+manual_chapter_ten_orochi_expansion_2026+manual_chapter_ten_red_heroine_expansion_2026+manual_modern_indie_asian_prize_expansion_2026+manual_priority_indie_completion_2026+manual_east_asian_auteur_expansion_2026+manual_japanese_auteur_expansion_2026+manual_south_korean_cinema_expansion_2026+manual_south_southeast_asian_expansion_2026+manual_festival_winners_1981_2009_expansion_2026+manual_festival_winner_2010_2024_expansion_2026+manual_scandinavian_european_expansion_2026+manual_eastern_iberian_british_expansion_2026+manual_italy_france_germany_benelux_expansion_2026`,
  scenario_count: mergedScenarios.length,
  note: `${importedSeedData.note} The requested historical expansion, Chapter 1 early-cinema Atlas completion, Chapter 2 exhibition-system expansion, Chapter 3 narrative-form expansion, Chapter 4 company/patent/feature-transition expansion, Chapter 5 international/series expansion, Chapter 6 Hollywood studio/star-system expansion, Chapter 7 Weimar-cinema expansion, Chapter 8 French avant-garde expansion, Chapter 9 Soviet montage expansion, Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, Growth of the Soil, Orochi, and The Red Heroine, modern independent/Asian/prize-cinema expansion, 20-film priority-indie completion, 11-film East Asian auteur expansion, seven-film Japanese auteur expansion, four-film South Korean cinema expansion, seven-film South and Southeast Asian expansion, eleven-film 1981-2009 festival-winner expansion, final eleven-film 2010-2024 festival-winner expansion, 22-film Scandinavian and European balancing round, 24-film Eastern, Iberian, Balkan, British and Irish round, and 28-film Italy, France, Germany and Benelux round reuse matching entries and append only missing titles. The agreed 98-film correction remains complete.`,
  scenarios: mergedScenarios,
};

export function getClassicFilmScenarios() {
  return filmScenarioSeedData.scenarios;
}

export function getFilmScenarioById(id: string) {
  return getClassicFilmScenarios().find((scenario) => scenario.id === id);
}
