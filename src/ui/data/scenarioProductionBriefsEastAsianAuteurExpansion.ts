import { createModernCanonBriefBlueprint } from "../../core/modernCanonBriefBlueprint.js";
import { getEastAsianAuteurExpansionDefinition } from "../../core/eastAsianAuteurExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getJapaneseAuteurExpansionProductionBrief } from "./scenarioProductionBriefsJapaneseAuteurExpansion";

export function getEastAsianAuteurExpansionProductionBrief(
  scenario: FilmScenarioSeed,
): ScenarioProductionBrief | undefined {
  const definition = getEastAsianAuteurExpansionDefinition(scenario);
  if (!definition) return getJapaneseAuteurExpansionProductionBrief(scenario);
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
