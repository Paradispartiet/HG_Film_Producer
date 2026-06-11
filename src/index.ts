import { addSceneToScript } from "./core/addSceneToScript.js";
import { applyMentorLesson } from "./core/applyMentorLesson.js";
import { applyProductionChoice } from "./core/applyProductionChoice.js";
import { attachLocationToProject } from "./core/attachLocationToProject.js";
import { calculateFilmResult } from "./core/calculateFilmResult.js";
import { createFilmProject } from "./core/createFilmProject.js";
import { createScript } from "./core/createScript.js";
import { createStudio } from "./core/createStudio.js";
import { evaluateScript } from "./core/evaluateScript.js";
import { findMentorsForProblem } from "./core/findMentorsForProblem.js";
import { getMentorAdvice } from "./core/getMentorAdvice.js";
import { scoutLocations } from "./core/scoutLocations.js";
import { loadFilmData } from "./data/filmData.js";
import { asCharacterId, asSceneId } from "./domain/ids.js";
import type { FilmStat } from "./domain/knowledge.js";
import type { Character, Scene } from "./domain/script.js";

const data = loadFilmData();

// 1. A new studio.
const studio = createStudio({ name: "Nordlys Film" });

// 2. Build a film project from a script template so genre and structure agree.
const template = data.scriptTemplates.find((t) => t.id === "script_template_intimate_drama");
if (!template) {
  throw new Error("Seed data is missing the 'intimate_drama' script template.");
}

const genre = data.genres.find((candidate) => candidate.id === template.genreId);
if (!genre) {
  throw new Error(`Seed data is missing genre "${template.genreId}".`);
}

const project = createFilmProject({
  title: "The Long Winter",
  genreId: genre.id,
  scale: genre.recommendedScale
});

// 3. A script seeded from the template, with a protagonist.
const protagonist: Character = {
  id: asCharacterId("character_marit"),
  name: "Marit",
  archetype: "protagonist",
  goal: "Reconcile with her estranged father before it is too late.",
  flaw: "She mistakes silence for strength.",
  relationshipIds: [asCharacterId("character_johan")]
};

const father: Character = {
  id: asCharacterId("character_johan"),
  name: "Johan",
  archetype: "mentor",
  goal: "Be forgiven without having to ask.",
  flaw: "Pride he calls dignity.",
  relationshipIds: [protagonist.id]
};

let script = createScript({
  title: "The Long Winter",
  logline: "A daughter returns to a frozen northern town to face the father she swore she had forgotten.",
  genreId: genre.id,
  theme: template.defaultTheme,
  structure: template.structure,
  protagonistCharacterId: protagonist.id,
  characterIds: [protagonist.id, father.id]
});

// 4. Add three scenes, each fulfilling a distinct dramatic function.
const location = data.locations.find((candidate) => candidate.id === "location_oslo_apartment");
const locationId = location ? location.id : null;

const scenes: Scene[] = [
  {
    id: asSceneId("scene_arrival"),
    title: "Arrival in the dark",
    functionId: requireSceneFunction("scene_function_opening"),
    locationId: null,
    characterIds: [protagonist.id],
    mood: "cold, withholding",
    conflictLevel: 30,
    pacing: 35,
    emotionalWeight: 45,
    techniqueIdsUsed: []
  },
  {
    id: asSceneId("scene_doorway"),
    title: "The doorway",
    functionId: requireSceneFunction("scene_function_inciting_incident"),
    locationId,
    characterIds: [protagonist.id, father.id],
    mood: "tense, brittle",
    conflictLevel: 65,
    pacing: 50,
    emotionalWeight: 60,
    techniqueIdsUsed: []
  },
  {
    id: asSceneId("scene_kitchen_table"),
    title: "The kitchen table",
    functionId: requireSceneFunction("scene_function_intimacy"),
    locationId,
    characterIds: [protagonist.id, father.id],
    mood: "fragile, warming",
    conflictLevel: 55,
    pacing: 25,
    emotionalWeight: 80,
    techniqueIdsUsed: []
  }
];

for (const scene of scenes) {
  script = addSceneToScript(script, scene);
}

// 5. Evaluate the script against its scenes.
const evaluation = evaluateScript(script, scenes);

// 6. Find a lesson for a concrete production problem.
const matchingLessons = findMentorsForProblem(data.mentorLessons, ["scene_lacks_tension"]);
const chosenLesson = matchingLessons[0];
if (!chosenLesson) {
  throw new Error("Seed data has no mentor lesson for 'scene_lacks_tension'.");
}

// 7. Turn the lesson into player-facing advice and apply it to the project.
const mentorAdvice = getMentorAdvice(chosenLesson);
const mentorApplication = applyMentorLesson(project, chosenLesson);

// 8. Scout locations against a creative and practical brief.
const scoutingBrief = data.locationScoutingBriefs.find(
  (candidate) => candidate.id === "location_brief_intimate_drama"
);
if (!scoutingBrief) {
  throw new Error("Seed data is missing the 'intimate_drama' location scouting brief.");
}

const scouting = scoutLocations(mentorApplication.project, data.locations, scoutingBrief);
const bestLocationScore = scouting.rankedLocations[0];
if (!bestLocationScore) {
  throw new Error("Location scouting requires at least one candidate location.");
}

const bestLocation = data.locations.find(
  (candidate) => candidate.id === bestLocationScore.locationId
);
if (!bestLocation) {
  throw new Error(`Scouting returned an unknown location "${bestLocationScore.locationId}".`);
}

// 9. Attach the winning location and retain its production impact estimate.
const locationSelection = attachLocationToProject(mentorApplication.project, bestLocation);

// 10. Resolve one production choice using the game's recommended option.
const choice = data.productionChoices.find((candidate) => candidate.id === "choice_slow_middle");
if (!choice) {
  throw new Error("Seed data is missing the 'choice_slow_middle' production choice.");
}
const { project: updatedProject, outcome } = applyProductionChoice(
  locationSelection.project,
  choice
);

// 11. Calculate a film result from the updated project.
const result = calculateFilmResult(updatedProject);

// 12. Log a readable summary of the whole loop.
console.log("HG Film Producer — mentor and location scouting demo\n");

console.log(`Studio:   ${studio.name}`);
console.log(`  money ${studio.money.toLocaleString("en-US")}, reputation ${studio.reputation}, prestige ${studio.prestige}\n`);

console.log(`Project:  ${updatedProject.title} (${genre.name}, ${updatedProject.scale})`);
console.log(`  status ${updatedProject.status}, budget ${updatedProject.budget.toLocaleString("en-US")}\n`);

console.log(`Script:   ${script.title} (draft ${script.draftNumber}, ${script.structure})`);
console.log(`  logline: ${script.logline}`);
console.log(`  theme:   ${script.theme}`);
console.log(`  ${script.characterIds.length} characters, ${script.sceneIds.length} scenes\n`);

console.log("Scenes:");
for (const scene of scenes) {
  const techniques = scene.techniqueIdsUsed.length > 0 ? scene.techniqueIdsUsed.join(", ") : "none";
  console.log(`  • ${scene.title} — conflict ${scene.conflictLevel}, pacing ${scene.pacing}, emotion ${scene.emotionalWeight} [${techniques}]`);
}
console.log("");

const mentor = data.mentors.find((candidate) => candidate.id === mentorAdvice.mentorId);
console.log(`Mentor lesson: ${mentorAdvice.title}${mentor ? ` — ${mentor.name}` : ""}`);
console.log(`  advice: ${mentorAdvice.advice}`);
console.log(`  action: ${mentorAdvice.suggestedAction}`);
console.log(`  stat changes: ${formatStatChanges(mentorAdvice.statChanges)}`);
console.log(`  technique: ${mentorApplication.unlockedTechniqueId ?? "none"}`);
console.log(`  knowledge: ${mentorApplication.unlockedKnowledgeEntryId ?? "none"}`);
console.log(`  ${mentorApplication.note}\n`);

console.log(`Chosen location: ${bestLocation.name} — ${scoutingBrief.title}`);
console.log(`  scouting score: ${bestLocationScore.totalScore}/100`);
console.log(
  `  fit: genre ${bestLocationScore.genreFit}, tags ${bestLocationScore.tagFit}, authenticity ${bestLocationScore.authenticity}, logistics ${bestLocationScore.logisticsFit}, cost ${bestLocationScore.costFit}`
);
console.log(
  `  impact: budget ${locationSelection.impact.budgetMultiplier.toFixed(2)}x, logistics risk ${locationSelection.impact.logisticsRisk}, authenticity +${locationSelection.impact.authenticityBonus}, visual +${locationSelection.impact.visualBonus}, history +${locationSelection.impact.historyBonus}`
);
console.log(`  ${locationSelection.impact.note}\n`);

console.log("Script evaluation:");
console.log(`  overall ${evaluation.overall} across ${evaluation.sceneCount} scenes`);
console.log(`  structure ${evaluation.scores.structure}, character ${evaluation.scores.character}, conflict ${evaluation.scores.conflict}`);
console.log(`  pacing ${evaluation.scores.pacing}, emotion ${evaluation.scores.emotion}, originality ${evaluation.scores.originality}, feasibility ${evaluation.scores.productionFeasibility}`);
for (const evaluationNote of evaluation.notes) {
  console.log(`  - ${evaluationNote}`);
}
console.log("");

console.log(`Choice:   ${choice.problem}`);
console.log(`  picked "${outcome.selectedOptionId}"${outcome.isBestOption ? " (best option)" : ""}`);
console.log(`  stat changes: ${formatStatChanges(outcome.statChanges)}`);
if (outcome.unlockedTechniqueId) {
  console.log(`  unlocked technique: ${outcome.unlockedTechniqueId}`);
}
if (outcome.unlockedKnowledgeEntryId) {
  console.log(`  unlocked knowledge: ${outcome.unlockedKnowledgeEntryId}`);
}
console.log("");

console.log("Film result:");
console.log(`  quality ${result.quality}, audience ${result.audienceAppeal}, critics ${result.criticalAppeal}`);
console.log(`  revenue estimate ${result.revenueEstimate.toLocaleString("en-US")}`);
console.log(`  reputation ${signed(result.reputationDelta)}, prestige ${signed(result.prestigeDelta)}`);

function requireSceneFunction(id: string) {
  const sceneFunction = data.sceneFunctions.find((candidate) => candidate.id === id);
  if (!sceneFunction) {
    throw new Error(`Seed data is missing scene function "${id}".`);
  }
  return sceneFunction.id;
}

function formatStatChanges(changes: Readonly<Partial<Record<FilmStat | string, number>>>): string {
  const entries = Object.entries(changes);
  if (entries.length === 0) {
    return "none";
  }
  return entries.map(([stat, value]) => `${stat} ${signed(value ?? 0)}`).join(", ");
}

function signed(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}
