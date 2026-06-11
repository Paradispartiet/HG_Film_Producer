import type {
  CharacterId,
  GenreId,
  LocationId,
  SceneFunctionId,
  SceneId,
  ScriptId,
  ScriptTemplateId,
  TechniqueId
} from "./ids.js";

/**
 * How a script is shaped at the macro level. The structure biases how scenes
 * are expected to flow and feeds directly into the structure and originality
 * scores during evaluation.
 */
export type ScriptStructure =
  | "three_act"
  | "hero_journey"
  | "ensemble"
  | "episodic"
  | "experimental"
  | "documentary";

/**
 * Why a scene exists in the story. Every scene fills exactly one dramatic
 * function; this is what makes a scene earn its place rather than just fill
 * runtime.
 */
export type SceneFunctionKind =
  | "opening"
  | "setup"
  | "inciting_incident"
  | "confrontation"
  | "midpoint"
  | "reveal"
  | "chase"
  | "intimacy"
  | "reversal"
  | "climax"
  | "aftermath";

/**
 * Classic dramatic archetypes used to describe a character's role in the story.
 */
export type CharacterArchetype =
  | "protagonist"
  | "antagonist"
  | "mentor"
  | "ally"
  | "love_interest"
  | "trickster"
  | "shapeshifter"
  | "everyman";

/**
 * The scene-level stats a technique can move. Kept deliberately small for now;
 * these are the levers evaluation reads.
 */
export type SceneStat = "conflictLevel" | "pacing" | "emotionalWeight";

export type SceneStatChanges = Readonly<Partial<Record<SceneStat, number>>>;

/**
 * A person in the story. A character has a want (goal) and a weakness (flaw),
 * and may be linked to other characters through relationships.
 */
export interface Character {
  readonly id: CharacterId;
  readonly name: string;
  readonly archetype: CharacterArchetype;
  readonly goal: string;
  readonly flaw: string;
  readonly relationshipIds: readonly CharacterId[];
}

/**
 * A single dramatic unit. Conflict, pacing and emotional weight are 0..100
 * gameplay dials; the function explains why the scene is here at all.
 */
export interface Scene {
  readonly id: SceneId;
  readonly title: string;
  readonly functionId: SceneFunctionId;
  readonly locationId: LocationId | null;
  readonly characterIds: readonly CharacterId[];
  readonly mood: string;
  /** How much dramatic conflict drives the scene, 0 .. 100. */
  readonly conflictLevel: number;
  /** How fast the scene moves, 0 (still) .. 100 (frantic). */
  readonly pacing: number;
  /** How much emotional charge the scene carries, 0 .. 100. */
  readonly emotionalWeight: number;
  readonly techniqueIdsUsed: readonly TechniqueId[];
}

/**
 * The manuscript. It owns its characters and scenes by id and tracks which
 * draft it is on, so revisions are first-class.
 */
export interface Script {
  readonly id: ScriptId;
  readonly title: string;
  readonly logline: string;
  readonly genreId: GenreId;
  readonly theme: string;
  readonly structure: ScriptStructure;
  readonly protagonistCharacterId: CharacterId | null;
  readonly characterIds: readonly CharacterId[];
  readonly sceneIds: readonly SceneId[];
  readonly draftNumber: number;
}

/**
 * The individual axes a script is scored on, each 0 .. 100.
 */
export interface ScriptEvaluationScores {
  readonly structure: number;
  readonly character: number;
  readonly conflict: number;
  readonly pacing: number;
  readonly emotion: number;
  readonly originality: number;
  readonly productionFeasibility: number;
}

/**
 * The result of reading a script: per-axis scores, an overall number and a few
 * readable notes so the player understands the verdict.
 */
export interface ScriptEvaluation {
  readonly scriptId: ScriptId;
  readonly sceneCount: number;
  readonly scores: ScriptEvaluationScores;
  readonly overall: number;
  readonly notes: readonly string[];
}

/**
 * The result of applying a craft technique to a scene: the updated scene plus a
 * small, readable summary of what changed.
 */
export interface SceneTechniqueApplicationResult {
  readonly scene: Scene;
  readonly techniqueId: TechniqueId;
  readonly alreadyApplied: boolean;
  readonly statChanges: SceneStatChanges;
  readonly note: string;
}

/**
 * Seed data describing a dramatic function a scene can fulfil. This is the
 * "why" catalogue scenes are built against.
 */
export interface SceneFunction {
  readonly id: SceneFunctionId;
  readonly kind: SceneFunctionKind;
  readonly name: string;
  readonly purpose: string;
  readonly typicalRisk: string;
  readonly usefulTechniqueIds: readonly TechniqueId[];
}

/**
 * Seed data describing a ready-made script shape a player can start from: a
 * genre, a structure, a default theme and the scenes and techniques that
 * usually fit the form.
 */
export interface ScriptTemplate {
  readonly id: ScriptTemplateId;
  readonly title: string;
  readonly genreId: GenreId;
  readonly structure: ScriptStructure;
  readonly defaultTheme: string;
  readonly recommendedSceneFunctions: readonly SceneFunctionId[];
  readonly recommendedTechniqueIds: readonly TechniqueId[];
}
