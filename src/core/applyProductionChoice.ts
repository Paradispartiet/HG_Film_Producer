import type { FilmProject } from "../domain/film.js";
import type {
  ProductionChoice,
  ProductionChoiceOption,
  ProductionChoiceOutcome
} from "../domain/production.js";

export interface ApplyProductionChoiceResult {
  readonly project: FilmProject;
  readonly outcome: ProductionChoiceOutcome;
}

/**
 * Resolve a production choice for a project.
 *
 * If no option id is given the game's recommended (best) option is used. The
 * project is returned with any unlocked technique added to the techniques it
 * uses, alongside a small outcome describing what changed and what was learned.
 */
export function applyProductionChoice(
  project: FilmProject,
  choice: ProductionChoice,
  optionId: string = choice.bestOptionId
): ApplyProductionChoiceResult {
  const option = findOption(choice, optionId);

  const techniqueIdsUsed =
    option.unlocksTechniqueId && !project.techniqueIdsUsed.includes(option.unlocksTechniqueId)
      ? [...project.techniqueIdsUsed, option.unlocksTechniqueId]
      : project.techniqueIdsUsed;

  const project_: FilmProject = { ...project, techniqueIdsUsed };

  const outcome: ProductionChoiceOutcome = {
    choiceId: choice.id,
    selectedOptionId: option.id,
    isBestOption: option.id === choice.bestOptionId,
    statChanges: option.statChanges,
    unlockedTechniqueId: option.unlocksTechniqueId,
    unlockedKnowledgeEntryId: option.unlocksKnowledgeEntryId
  };

  return { project: project_, outcome };
}

function findOption(choice: ProductionChoice, optionId: string): ProductionChoiceOption {
  const option = choice.options.find((candidate) => candidate.id === optionId);
  if (!option) {
    throw new Error(`Unknown option "${optionId}" for production choice "${choice.id}".`);
  }
  return option;
}
