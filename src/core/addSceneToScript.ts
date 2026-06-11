import type { CharacterId } from "../domain/ids.js";
import type { Scene, Script } from "../domain/script.js";

/**
 * Add a scene to a script, returning a brand new script. The original inputs
 * are never mutated.
 *
 * The scene's id is appended (deduplicated), and any characters the scene
 * introduces are folded into the script's character list so the manuscript
 * always knows who appears in it.
 */
export function addSceneToScript(script: Script, scene: Scene): Script {
  const sceneIds = script.sceneIds.includes(scene.id)
    ? script.sceneIds
    : [...script.sceneIds, scene.id];

  const characterIds = mergeUnique(script.characterIds, scene.characterIds);

  return {
    ...script,
    sceneIds,
    characterIds
  };
}

function mergeUnique(
  existing: readonly CharacterId[],
  incoming: readonly CharacterId[]
): readonly CharacterId[] {
  const additions = incoming.filter((id) => !existing.includes(id));
  return additions.length === 0 ? existing : [...existing, ...additions];
}
