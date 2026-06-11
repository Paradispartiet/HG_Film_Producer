import { asScriptId, type CharacterId, type GenreId, type ScriptId, type SceneId } from "../domain/ids.js";
import type { Script, ScriptStructure } from "../domain/script.js";

export interface CreateScriptInput {
  readonly title: string;
  readonly logline: string;
  readonly genreId: GenreId;
  readonly theme: string;
  readonly structure: ScriptStructure;
  readonly id?: string;
  readonly protagonistCharacterId?: CharacterId | null;
  readonly characterIds?: readonly CharacterId[];
  readonly sceneIds?: readonly SceneId[];
  readonly draftNumber?: number;
}

/**
 * Create a new script. A script starts on draft 1 with a title, logline, genre,
 * theme and structure, and no characters or scenes unless they are supplied.
 */
export function createScript(input: CreateScriptInput): Script {
  const id: ScriptId = asScriptId(input.id ?? `script_${slug(input.title)}`);

  return {
    id,
    title: input.title,
    logline: input.logline,
    genreId: input.genreId,
    theme: input.theme,
    structure: input.structure,
    protagonistCharacterId: input.protagonistCharacterId ?? null,
    characterIds: input.characterIds ?? [],
    sceneIds: input.sceneIds ?? [],
    draftNumber: input.draftNumber ?? 1
  };
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}
