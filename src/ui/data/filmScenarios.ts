import seedData from "../../../data/film/scenarios/film_scenarios_seed.json";

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

export const filmScenarioSeedData = seedData as FilmScenarioSeedFile;

export function getClassicFilmScenarios() {
  return filmScenarioSeedData.scenarios;
}

export function getFilmScenarioById(id: string) {
  return getClassicFilmScenarios().find((scenario) => scenario.id === id);
}
