import seedData from "../../../data/film/scenarios/film_scenarios_seed.json";
import { mergeEarlyCinemaExpansion } from "../../core/earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "../../core/eastAsianAuteurExpansion.js";
import { mergeFestivalWinners1981To2009Expansion } from "../../core/festivalWinners1981To2009Expansion.js";
import { mergeJapaneseAuteurExpansion } from "../../core/japaneseAuteurExpansion.js";
import { mergeModernCanonExpansion } from "../../core/modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "../../core/priorityIndieExpansion.js";
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
const modernCanonScenarios = mergeModernCanonExpansion(historicalScenarios);
const priorityIndieScenarios = mergePriorityIndieExpansion(modernCanonScenarios);
const eastAsianAuteurScenarios = mergeEastAsianAuteurExpansion(priorityIndieScenarios);
const japaneseAuteurScenarios = mergeJapaneseAuteurExpansion(eastAsianAuteurScenarios);
const southKoreanScenarios = mergeSouthKoreanCinemaExpansion(japaneseAuteurScenarios);
const southSoutheastAsianScenarios = mergeSouthSoutheastAsianExpansion(southKoreanScenarios);
const mergedScenarios = mergeFestivalWinners1981To2009Expansion(southSoutheastAsianScenarios);

export const filmScenarioSeedData: FilmScenarioSeedFile = {
  ...importedSeedData,
  source_list_id: `${importedSeedData.source_list_id}+manual_early_cinema_expansion_2026+manual_modern_indie_asian_prize_expansion_2026+manual_priority_indie_completion_2026+manual_east_asian_auteur_expansion_2026+manual_japanese_auteur_expansion_2026+manual_south_korean_cinema_expansion_2026+manual_south_southeast_asian_expansion_2026+manual_festival_winners_1981_2009_expansion_2026`,
  scenario_count: mergedScenarios.length,
  note: `${importedSeedData.note} The requested historical expansion, modern independent/Asian/prize-cinema expansion, 20-film priority-indie completion, 11-film East Asian auteur expansion, seven-film Japanese auteur expansion, four-film South Korean cinema expansion, seven-film South and Southeast Asian expansion, and eleven-film 1981-2009 festival-winner expansion reuse matching entries and append only missing titles.`,
  scenarios: mergedScenarios,
};

export function getClassicFilmScenarios() {
  return filmScenarioSeedData.scenarios;
}

export function getFilmScenarioById(id: string) {
  return getClassicFilmScenarios().find((scenario) => scenario.id === id);
}
