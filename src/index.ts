import { addSceneToScript } from "./core/addSceneToScript.js";
import { applyColorDecision } from "./core/applyColorDecision.js";
import { applyEditDecision } from "./core/applyEditDecision.js";
import { applyMentorLesson } from "./core/applyMentorLesson.js";
import { applyMusicDecision } from "./core/applyMusicDecision.js";
import { applyProductionChoice } from "./core/applyProductionChoice.js";
import { applyProductionEvent } from "./core/applyProductionEvent.js";
import { applySoundDecision } from "./core/applySoundDecision.js";
import { attachLocationToProject } from "./core/attachLocationToProject.js";
import { calculateCastingChemistry } from "./core/calculateCastingChemistry.js";
import { calculateFilmResult } from "./core/calculateFilmResult.js";
import { castActor, scoreActorForProject } from "./core/castActor.js";
import { createFilmProject } from "./core/createFilmProject.js";
import { createPostProductionPlan } from "./core/createPostProductionPlan.js";
import { createProductionSchedule } from "./core/createProductionSchedule.js";
import { createScript } from "./core/createScript.js";
import { createTrailerCut } from "./core/createTrailerCut.js";
import { createStudio } from "./core/createStudio.js";
import { estimateSceneShootDifficulty } from "./core/estimateSceneShootDifficulty.js";
import { evaluatePostProduction } from "./core/evaluatePostProduction.js";
import { evaluateProductionTeam } from "./core/evaluateProductionTeam.js";
import { evaluateShootResult } from "./core/evaluateShootResult.js";
import { evaluateScript } from "./core/evaluateScript.js";
import { findMentorsForProblem } from "./core/findMentorsForProblem.js";
import { getMentorAdvice } from "./core/getMentorAdvice.js";
import { hireCrewMember } from "./core/hireCrewMember.js";
import { scoreCrewMemberForProject } from "./core/scoreCrewMemberForProject.js";
import { resolveShootDay } from "./core/resolveShootDay.js";
import { runTestScreening } from "./core/runTestScreening.js";
import { scoutLocations } from "./core/scoutLocations.js";
import { loadFilmData } from "./data/filmData.js";
import type { CrewDiscipline } from "./domain/crew.js";
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

// 10. Score candidates and hire a small key crew for the film's desired style.
const desiredCrewDisciplines: readonly CrewDiscipline[] = [
  "directing",
  "cinematography",
  "editing"
];
const desiredStyleTags = ["intimate", "naturalistic", "character_first"] as const;
let staffedProject = locationSelection.project;
const hiredCrew = [];

for (const discipline of desiredCrewDisciplines) {
  const rankedCandidates = data.crewMembers
    .filter((crewMember) => crewMember.discipline === discipline)
    .map((crewMember) => ({
      crewMember,
      score: scoreCrewMemberForProject(staffedProject, crewMember, desiredStyleTags)
    }))
    .sort((left, right) => right.score.totalScore - left.score.totalScore);
  const bestCandidate = rankedCandidates[0];
  if (!bestCandidate) {
    throw new Error(`Seed data has no crew member for discipline "${discipline}".`);
  }

  const hire = hireCrewMember(staffedProject, bestCandidate.crewMember, bestCandidate.score);
  staffedProject = hire.project;
  hiredCrew.push(bestCandidate);
}

// 11. Score the actor pool and cast the two strongest project fits.
const rankedActors = data.actors
  .map((actor) => ({ actor, score: scoreActorForProject(staffedProject, actor) }))
  .sort((left, right) => right.score.totalScore - left.score.totalScore);
const chosenActors = rankedActors.slice(0, 2);
if (chosenActors.length < 2) {
  throw new Error("Casting requires at least two actors in seed data.");
}

for (const candidate of chosenActors) {
  staffedProject = castActor(staffedProject, candidate.actor, candidate.score).project;
}

// 12. Measure cast chemistry and evaluate the complete attached team.
const chemistry = calculateCastingChemistry(chosenActors.map((candidate) => candidate.actor));
const productionTeam = evaluateProductionTeam(staffedProject, data.crewMembers, data.actors);

// 13. Turn the script into a practical production schedule.
const schedule = createProductionSchedule(staffedProject, scenes);

// 14. Estimate each scene's shoot pressure with the selected location context.
const sceneDifficulties = scenes.map((scene) => estimateSceneShootDifficulty(scene, {
  locationLogistics: bestLocation.productionModifiers.logistics,
  actorCount: scene.characterIds.length
}));

// 15. Apply a deterministic production event to the first day.
const firstShootDay = schedule.shootDays[0];
if (!firstShootDay) {
  throw new Error("The production schedule did not create a shoot day.");
}
const shootEvent = data.productionEvents.find(
  (candidate) => candidate.id === "production_event_transport_delay"
);
if (!shootEvent) {
  throw new Error("Seed data is missing the 'transport_delay' production event.");
}
const eventApplication = applyProductionEvent(firstShootDay, shootEvent);

// 16. Resolve the day and evaluate the shoot completed so far.
const shootDayResult = resolveShootDay(eventApplication.shootDay, scenes, data.productionEvents);
const shootEvaluation = evaluateShootResult(staffedProject, schedule, [shootDayResult]);

// 17. Build the first cut through edit, sound, music, and color decisions.
let postPlan = createPostProductionPlan(staffedProject);
const editDecision = requireSeed(data.editDecisions, "edit_tighten_middle_act", "edit decision");
const soundDecision = requireSeed(data.soundDecisions, "sound_dialogue_clarity", "sound decision");
const musicDecision = requireSeed(data.musicDecisions, "music_recurring_motif", "music decision");
const colorDecision = requireSeed(data.colorDecisions, "color_naturalistic_grade", "color decision");
postPlan = applyEditDecision(postPlan, editDecision).plan;
postPlan = applySoundDecision(postPlan, soundDecision).plan;
postPlan = applyMusicDecision(postPlan, musicDecision).plan;
postPlan = applyColorDecision(postPlan, colorDecision).plan;

// 18. Screen the cut, position a trailer, and evaluate the complete post workflow.
const testScreening = runTestScreening(staffedProject, postPlan, shootEvaluation, evaluation);
const trailerStrategy = requireSeed(
  data.trailerStrategies,
  "trailer_character_journey",
  "trailer strategy"
);
const trailerResult = createTrailerCut(staffedProject, postPlan, trailerStrategy);
const postProduction = evaluatePostProduction(
  staffedProject,
  postPlan,
  {
    edits: [editDecision],
    sound: [soundDecision],
    music: [musicDecision],
    color: [colorDecision]
  },
  testScreening,
  trailerResult
);

// 19. Resolve one production choice using the game's recommended option.
const choice = data.productionChoices.find((candidate) => candidate.id === "choice_slow_middle");
if (!choice) {
  throw new Error("Seed data is missing the 'choice_slow_middle' production choice.");
}
const { project: updatedProject, outcome } = applyProductionChoice(staffedProject, choice);

// 20. Calculate a film result shaped by both the production team and locked cut.
const result = calculateFilmResult(updatedProject, productionTeam, postProduction);

// 21. Log a readable summary of the complete production loop.
console.log("HG Film Producer — full production and post-production demo\n");

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

console.log("Hired crew:");
for (const candidate of hiredCrew) {
  console.log(
    `  • ${candidate.crewMember.name} — ${candidate.crewMember.discipline}, fit ${candidate.score.totalScore}/100, fee ${candidate.crewMember.fee.toLocaleString("en-US")}`
  );
}
console.log("");

console.log("Cast:");
for (const candidate of chosenActors) {
  console.log(
    `  • ${candidate.actor.name} — ${candidate.actor.actingStyle}, fit ${candidate.score.totalScore}/100, star power ${candidate.actor.starPower}`
  );
}
console.log(`  chemistry ${chemistry.chemistryScore}/100 — ${chemistry.note}`);
console.log(`  shared tags: ${chemistry.sharedTags.join(", ") || "none"}`);
console.log(`  tension tags: ${chemistry.tensionTags.join(", ") || "none"}\n`);

console.log("Production team evaluation:");
console.log(
  `  overall ${productionTeam.overall}, crew ${productionTeam.crewScore}, cast ${productionTeam.castScore}, chemistry ${productionTeam.chemistryScore}`
);
console.log(
  `  reliability ${productionTeam.reliabilityScore}, budget pressure ${productionTeam.budgetPressure}%`
);
for (const teamNote of productionTeam.notes) {
  console.log(`  - ${teamNote}`);
}
console.log("");

console.log("Script evaluation:");
console.log(`  overall ${evaluation.overall} across ${evaluation.sceneCount} scenes`);
console.log(`  structure ${evaluation.scores.structure}, character ${evaluation.scores.character}, conflict ${evaluation.scores.conflict}`);
console.log(`  pacing ${evaluation.scores.pacing}, emotion ${evaluation.scores.emotion}, originality ${evaluation.scores.originality}, feasibility ${evaluation.scores.productionFeasibility}`);
for (const evaluationNote of evaluation.notes) {
  console.log(`  - ${evaluationNote}`);
}
console.log("");

console.log("Production schedule:");
console.log(
  `  ${schedule.totalPlannedDays} days, planned ${schedule.plannedBudget.toLocaleString("en-US")}, contingency ${schedule.contingencyBudget.toLocaleString("en-US")}`
);
for (const day of schedule.shootDays) {
  console.log(
    `  • day ${day.dayNumber}: ${day.sceneIds.join(", ")} at ${day.locationId ?? "unassigned location"}, cost ${day.plannedCost.toLocaleString("en-US")}`
  );
}
console.log("  Scene difficulty:");
for (const difficulty of sceneDifficulties) {
  console.log(`    - ${difficulty.sceneId}: ${difficulty.difficultyScore}/100`);
}
console.log("");

console.log(`Shoot event: ${shootEvent.title} (${shootEvent.severity})`);
console.log(`  ${eventApplication.note}`);
console.log("Shoot day result:");
console.log(
  `  take quality ${shootDayResult.takeQuality}, cost ${shootDayResult.costSpent.toLocaleString("en-US")}, schedule delta +${shootDayResult.scheduleDeltaDays}`
);
console.log(`  completed: ${shootDayResult.completedSceneIds.join(", ") || "none"}`);
console.log(`  delayed: ${shootDayResult.delayedSceneIds.join(", ") || "none"}`);
for (const shootNote of shootDayResult.notes) {
  console.log(`  - ${shootNote}`);
}
console.log("");

console.log("Shoot evaluation:");
console.log(
  `  overall ${shootEvaluation.overall}, take quality ${shootEvaluation.averageTakeQuality}, schedule health ${shootEvaluation.scheduleHealth}, budget health ${shootEvaluation.budgetHealth}, morale ${shootEvaluation.productionMorale}`
);
console.log(
  `  completed days ${shootEvaluation.completedDays}, delayed days ${shootEvaluation.delayedDays}, spent ${shootEvaluation.totalCostSpent.toLocaleString("en-US")}`
);
for (const shootNote of shootEvaluation.notes) {
  console.log(`  - ${shootNote}`);
}
console.log("");

console.log("Post-production evaluation:");
console.log(
  `  overall ${postProduction.overall}, locked cut ${postProduction.lockedCutQuality}, edit ${postProduction.editScore}, sound ${postProduction.soundScore}, music ${postProduction.musicScore}, color ${postProduction.colorScore}`
);
console.log(
  `  screening ${postProduction.testScreeningScore}, trailer ${postProduction.trailerScore}, cost ${postProduction.totalCost.toLocaleString("en-US")}`
);
for (const postNote of postProduction.notes) {
  console.log(`  - ${postNote}`);
}
console.log("");

console.log(`Trailer: ${trailerStrategy.title}`);
console.log(
  `  audience ${trailerResult.audienceInterest}, critics ${trailerResult.criticInterest}, genre clarity ${trailerResult.genreClarity}, spoiler risk ${trailerResult.spoilerRisk}`
);
console.log(`  ${trailerResult.note}\n`);

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
console.log(`  budget spent ${result.budgetSpent.toLocaleString("en-US")}`);
console.log(`  revenue estimate ${result.revenueEstimate.toLocaleString("en-US")}`);
console.log(`  reputation ${signed(result.reputationDelta)}, prestige ${signed(result.prestigeDelta)}`);

function requireSeed<TItem extends { readonly id: string }>(
  items: readonly TItem[],
  id: string,
  label: string
): TItem {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`Seed data is missing ${label} "${id}".`);
  }
  return item;
}

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
