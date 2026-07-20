import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import { getPriorityIndieExpansionDefinition } from "../../core/priorityIndieExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getEastAsianAuteurExpansionProductionBrief } from "./scenarioProductionBriefsEastAsianAuteurExpansion";

export function getPriorityIndieExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getPriorityIndieExpansionDefinition(scenario);
  if (!definition) return getEastAsianAuteurExpansionProductionBrief(scenario);
  const blueprint = createModernCanonBriefBlueprint(definition);

  return {
    scenarioId: scenario.id,
    briefType: "production_case",
    title: `${scenario.film.title} production brief`,
    logline: definition.premise,
    genreTargets: definition.genres,
    toneTargets: blueprint.toneTargets,
    screenplayTargets: blueprint.screenplayTargets,
    cinematographyTargets: blueprint.cinematographyTargets,
    editingTargets: blueprint.editingTargets,
    soundTargets: blueprint.soundTargets,
    learningGoals: blueprint.learningGoals,
    verificationStatus: "needs_research",
  };
}
