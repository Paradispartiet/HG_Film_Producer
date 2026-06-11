import type {
  GenreId,
  KnowledgeEntryId,
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

export type {
  Location,
  LocationGenreBonus,
  LocationProductionModifiers
} from "./location.js";

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
