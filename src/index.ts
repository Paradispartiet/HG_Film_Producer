import { applyProductionChoice } from "./core/applyProductionChoice.js";
import { calculateFilmResult } from "./core/calculateFilmResult.js";
import { createFilmProject } from "./core/createFilmProject.js";
import { createStudio } from "./core/createStudio.js";
import { loadFilmData } from "./data/filmData.js";

const data = loadFilmData();

// 1. A new studio.
const studio = createStudio({ name: "Nordlys Film" });

// 2. A new film project in a genre that exists in the seed data.
const drama = data.genres.find((genre) => genre.id === "genre_drama");
if (!drama) {
  throw new Error("Seed data is missing the drama genre.");
}

const project = createFilmProject({
  title: "The Long Winter",
  genreId: drama.id,
  scale: drama.recommendedScale
});

// 3. Resolve one production choice using the game's recommended option.
const choice = data.productionChoices.find((candidate) => candidate.id === "choice_slow_middle");
if (!choice) {
  throw new Error("Seed data is missing the 'choice_slow_middle' production choice.");
}

const { project: updatedProject, outcome } = applyProductionChoice(project, choice);

// 4. Calculate a film result from the updated project.
const result = calculateFilmResult(updatedProject);

// 5. Log a readable summary.
console.log("HG Film Producer — first studio engine demo\n");

console.log(`Studio:   ${studio.name}`);
console.log(`  money ${studio.money.toLocaleString("en-US")}, reputation ${studio.reputation}, prestige ${studio.prestige}\n`);

console.log(`Project:  ${updatedProject.title} (${drama.name}, ${updatedProject.scale})`);
console.log(`  status ${updatedProject.status}, budget ${updatedProject.budget.toLocaleString("en-US")}\n`);

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

function formatStatChanges(changes: Readonly<Partial<Record<string, number>>>): string {
  const entries = Object.entries(changes);
  if (entries.length === 0) {
    return "none";
  }
  return entries.map(([stat, value]) => `${stat} ${signed(value ?? 0)}`).join(", ");
}

function signed(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}
