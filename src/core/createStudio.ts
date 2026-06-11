import type { Studio } from "../domain/film.js";
import { asStudioId, type StudioId, type TechniqueId } from "../domain/ids.js";

export interface CreateStudioInput {
  readonly name: string;
  readonly id?: string;
  readonly startingMoney?: number;
  readonly startingReputation?: number;
  readonly startingPrestige?: number;
  readonly unlockedTechniqueIds?: readonly TechniqueId[];
}

const DEFAULT_STARTING_MONEY = 1_000_000;
const DEFAULT_STARTING_REPUTATION = 10;
const DEFAULT_STARTING_PRESTIGE = 5;

/**
 * Create a fresh studio: starting money, reputation and prestige, any techniques
 * the studio begins with, and no active or completed films.
 */
export function createStudio(input: CreateStudioInput): Studio {
  const id: StudioId = asStudioId(input.id ?? `studio_${slug(input.name)}`);

  return {
    id,
    name: input.name,
    money: input.startingMoney ?? DEFAULT_STARTING_MONEY,
    reputation: input.startingReputation ?? DEFAULT_STARTING_REPUTATION,
    prestige: input.startingPrestige ?? DEFAULT_STARTING_PRESTIGE,
    unlockedTechniqueIds: input.unlockedTechniqueIds ?? [],
    activeFilmProjectIds: [],
    completedFilmProjectIds: []
  };
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}
