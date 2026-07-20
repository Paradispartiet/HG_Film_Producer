import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import { getModernCanonExpansionDefinition } from "../../core/modernCanonExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getPriorityIndieExpansionProductionBrief } from "./scenarioProductionBriefsPriorityIndieExpansion";

export function getModernCanonExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getModernCanonExpansionDefinition(scenario);
  if (!definition) return getPriorityIndieExpansionProductionBrief(scenario);
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
