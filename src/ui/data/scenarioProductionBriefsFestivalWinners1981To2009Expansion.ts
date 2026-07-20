import { getFestivalWinners1981To2009ExpansionDefinition } from "../../core/festivalWinners1981To2009Expansion.js";
import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getFestivalWinners2010To2024ExpansionProductionBrief } from "./scenarioProductionBriefsFestivalWinners2010To2024Expansion";

export function getFestivalWinners1981To2009ExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getFestivalWinners1981To2009ExpansionDefinition(scenario);
  if (!definition) return getFestivalWinners2010To2024ExpansionProductionBrief(scenario);
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
