import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { DirectorBriefFieldId } from "./directorBrief.js";
import { DIRECTOR_BRIEF_CHOICES } from "./filmDirectorChoiceCatalog.js";

/** Existing, film-specific reference techniques. Never generate fictitious film facts. */
export type DirectorFilmReference = {
  readonly toneTargets: readonly string[];
  readonly screenplayTargets: readonly string[];
  readonly cinematographyTargets: readonly string[];
  readonly editingTargets: readonly string[];
  readonly soundTargets: readonly string[];
  readonly learningGoals: readonly string[];
};

type ReferenceCategory = keyof DirectorFilmReference;
const referenceByField: Partial<Record<DirectorBriefFieldId, readonly [ReferenceCategory, number]>> = {
  sceneContext: ["screenplayTargets", 0],
  sceneObjective: ["screenplayTargets", 1],
  audienceEffect: ["toneTargets", 0],
  conflictTurn: ["screenplayTargets", 2],
  formalStrategy: ["cinematographyTargets", 0],
  blocking: ["cinematographyTargets", 1],
  performanceDirection: ["toneTargets", 1],
  productionDesign: ["cinematographyTargets", 0],
  shotPlan: ["cinematographyTargets", 2],
  cameraMovementLenses: ["cinematographyTargets", 1],
  lightingPalette: ["cinematographyTargets", 2],
  editingRhythm: ["editingTargets", 0],
  soundStrategy: ["soundTargets", 0],
  proofOfIntent: ["learningGoals", 0],
};

export const DIRECTOR_REFERENCE_LABEL: Record<FilmWorkLanguage, string> = {
  nb: "Fra den valgte filmens produksjonsbrief",
  en: "From the selected film's production brief",
  fr: "Du brief de production du film choisi",
  pt: "Do briefing de produção do filme escolhido",
};

export function getDirectorBriefChoices(
  language: FilmWorkLanguage,
  field: DirectorBriefFieldId,
  filmReference: DirectorFilmReference,
  presentReference: (source: string) => string,
): readonly string[] {
  const choices = DIRECTOR_BRIEF_CHOICES[language][field];
  const source = referenceByField[field];
  if (!source) return choices;
  const original = filmReference[source[0]][source[1]];
  const presented = original ? presentReference(original).trim() : "";
  if (!presented || choices.includes(presented)) return choices;
  return [...choices, presented];
}
