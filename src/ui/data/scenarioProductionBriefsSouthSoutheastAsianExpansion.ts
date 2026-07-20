import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import { getSouthSoutheastAsianExpansionDefinition } from "../../core/southSoutheastAsianExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getFestivalWinners1981To2009ExpansionProductionBrief } from "./scenarioProductionBriefsFestivalWinners1981To2009Expansion";

export function getSouthSoutheastAsianExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getSouthSoutheastAsianExpansionDefinition(scenario);
  if (!definition) return getFestivalWinners1981To2009ExpansionProductionBrief(scenario);
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
