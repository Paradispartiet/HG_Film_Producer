import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import { getScandinavianEuropeanExpansionDefinition } from "../../core/scandinavianEuropeanExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getEasternIberianBritishExpansionProductionBrief } from "./scenarioProductionBriefsEasternIberianBritishExpansion";

export function getScandinavianEuropeanExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getScandinavianEuropeanExpansionDefinition(scenario);
  if (!definition) return getEasternIberianBritishExpansionProductionBrief(scenario);
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
