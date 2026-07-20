import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import { getFestivalWinners2010To2024ExpansionDefinition } from "../../core/festivalWinners2010To2024Expansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

export function getFestivalWinners2010To2024ExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getFestivalWinners2010To2024ExpansionDefinition(scenario);
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
