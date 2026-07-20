import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import { getItalyFranceGermanyBeneluxExpansionDefinition } from "../../core/italyFranceGermanyBeneluxExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

export function getItalyFranceGermanyBeneluxExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getItalyFranceGermanyBeneluxExpansionDefinition(scenario);
  if (!definition) return undefined;
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
