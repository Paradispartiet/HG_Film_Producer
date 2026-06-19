import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

export type ScenarioTargetCategory =
  | "genre"
  | "tone"
  | "screenplay"
  | "cinematography"
  | "editing"
  | "sound"
  | "learning";

export type ScenarioTargetItem = {
  readonly id: string;
  readonly category: ScenarioTargetCategory;
  readonly label: string;
};

export type ScenarioTargetChecklist = readonly ScenarioTargetItem[];

const categoryLabels: Record<ScenarioTargetCategory, string> = {
  genre: "Genre",
  tone: "Tone",
  screenplay: "Screenplay",
  cinematography: "Cinematography",
  editing: "Editing",
  sound: "Sound",
  learning: "Learning goals"
};

export function createScenarioTargetChecklist(brief: ScenarioProductionBrief): ScenarioTargetChecklist {
  return [
    ...createCategoryItems("genre", brief.genreTargets),
    ...createCategoryItems("tone", brief.toneTargets),
    ...createCategoryItems("screenplay", brief.screenplayTargets),
    ...createCategoryItems("cinematography", brief.cinematographyTargets),
    ...createCategoryItems("editing", brief.editingTargets),
    ...createCategoryItems("sound", brief.soundTargets),
    ...createCategoryItems("learning", brief.learningGoals)
  ];
}

export function getScenarioTargetCount(checklist: ScenarioTargetChecklist) {
  return checklist.length;
}

export function getScenarioTargetCategoryLabel(category: ScenarioTargetCategory) {
  return categoryLabels[category];
}

function createCategoryItems(category: ScenarioTargetCategory, labels: readonly string[]) {
  return labels.map((label, index) => ({
    id: `${category}-${index + 1}-${slugify(label)}`,
    category,
    label
  }));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "target";
}
