import type { Scene } from "../domain/script.js";

/**
 * Producing means identifying what the writer needs to strengthen before
 * shooting; the player never selects shots or directs a performance here.
 */
export const SCRIPT_PRODUCER_NOTE_IDS = ["character_depth", "dramatic_stakes", "scene_momentum"] as const;
export type ScriptProducerNoteId = (typeof SCRIPT_PRODUCER_NOTE_IDS)[number];

/** Deterministic draft revisions with an explicit dramatic tradeoff. */
export function applyScriptProducerNote(
  scenes: readonly Scene[],
  noteId?: ScriptProducerNoteId
): readonly Scene[] {
  if (!noteId) return scenes; // Existing callers retain their original starter draft.
  if (!SCRIPT_PRODUCER_NOTE_IDS.includes(noteId)) throw new Error(`Unknown script note: ${noteId}`);
  return scenes.map((scene) => {
    if (noteId === "character_depth") return {
      ...scene,
      emotionalWeight: clamp(scene.emotionalWeight + 16),
      pacing: clamp(scene.pacing - 8)
    };
    if (noteId === "dramatic_stakes") return {
      ...scene,
      conflictLevel: clamp(scene.conflictLevel + 16),
      pacing: clamp(scene.pacing - 4),
      emotionalWeight: clamp(scene.emotionalWeight + 4)
    };
    return {
      ...scene,
      pacing: clamp(scene.pacing + 18),
      conflictLevel: clamp(scene.conflictLevel - 5),
      emotionalWeight: clamp(scene.emotionalWeight - 7)
    };
  });
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, value));
}
