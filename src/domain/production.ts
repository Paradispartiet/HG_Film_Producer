import type {
  GenreId,
  KnowledgeEntryId,
  LocationId,
  ProductionChoiceId,
  TechniqueId
} from "./ids.js";
import type { FilmStat } from "./knowledge.js";

/**
 * The phases of a production where the player makes choices.
 */
export type ProductionPhase =
  | "script"
  | "pre_production"
  | "shooting"
  | "post_production"
  | "release";

/**
 * A physical place a film can shoot at, ideally tied to a History Go place.
 * Locations carry genre bonuses and production modifiers so a place is never
 * just a backdrop — it has game value.
 */
export interface LocationGenreBonus {
  readonly genreId: GenreId;
  readonly bonus: number;
}

export interface LocationProductionModifiers {
  /** Cost multiplier applied to the slice of budget spent here (1 = neutral). */
  readonly cost: number;
  /** Logistical difficulty, 0 (trivial) .. 100 (very hard). */
  readonly logistics: number;
  /** How real/specific the place feels on screen, 0 .. 100. */
  readonly authenticity: number;
}

export interface Location {
  readonly id: LocationId;
  readonly name: string;
  readonly city: string;
  readonly type: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly genreBonuses: readonly LocationGenreBonus[];
  readonly productionModifiers: LocationProductionModifiers;
  /** Optional link into a History Go place. */
  readonly hgPlaceId: string | null;
}

/**
 * One selectable answer to a production problem. A good option moves stats in
 * the right direction and may teach a technique or unlock knowledge.
 */
export interface ProductionChoiceOption {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly statChanges: Readonly<Partial<Record<FilmStat, number>>>;
  readonly unlocksTechniqueId: TechniqueId | null;
  readonly unlocksKnowledgeEntryId: KnowledgeEntryId | null;
}

/**
 * A gameplay choice during production: a problem, a set of options and the
 * option the game considers best.
 */
export interface ProductionChoice {
  readonly id: ProductionChoiceId;
  readonly phase: ProductionPhase;
  readonly problem: string;
  readonly prompt: string;
  readonly options: readonly ProductionChoiceOption[];
  readonly bestOptionId: string;
}

/**
 * The result of resolving a production choice: the updated project plus a
 * small, readable summary of what changed and what was learned.
 */
export interface ProductionChoiceOutcome {
  readonly choiceId: ProductionChoiceId;
  readonly selectedOptionId: string;
  readonly isBestOption: boolean;
  readonly statChanges: Readonly<Partial<Record<FilmStat, number>>>;
  readonly unlockedTechniqueId: TechniqueId | null;
  readonly unlockedKnowledgeEntryId: KnowledgeEntryId | null;
}
