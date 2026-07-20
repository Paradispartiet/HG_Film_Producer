export const DIRECTOR_BRIEF_FIELDS = [
  { id: "sceneTitle", label: "Scene title" },
  { id: "sceneContext", label: "Scene context" },
  { id: "sceneObjective", label: "Scene objective" },
  { id: "audienceEffect", label: "Audience effect" },
  { id: "conflictTurn", label: "Conflict and turn" },
  { id: "formalStrategy", label: "Formal strategy" },
  { id: "blocking", label: "Blocking" },
  { id: "performanceDirection", label: "Performance direction" },
  { id: "productionDesign", label: "Production design" },
  { id: "shotPlan", label: "Shot plan" },
  { id: "cameraMovementLenses", label: "Camera, movement, and lenses" },
  { id: "lightingPalette", label: "Lighting and palette" },
  { id: "editingRhythm", label: "Editing rhythm" },
  { id: "soundStrategy", label: "Sound strategy" },
  { id: "practicalConstraints", label: "Practical constraints" },
  { id: "proofOfIntent", label: "Proof of intent" },
] as const;

export type DirectorBriefFieldId = (typeof DIRECTOR_BRIEF_FIELDS)[number]["id"];

export type DirectorBriefIdentity = {
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
};

export type DirectorBriefDraft = DirectorBriefIdentity &
  Record<DirectorBriefFieldId, string> & {
    readonly version: 1;
    readonly updatedAt: string;
  };

export function createBlankDirectorBrief(identity: DirectorBriefIdentity, now = new Date().toISOString()): DirectorBriefDraft {
  return {
    version: 1,
    filmId: identity.filmId,
    filmTitle: identity.filmTitle,
    filmYear: identity.filmYear,
    updatedAt: now,
    sceneTitle: "",
    sceneContext: "",
    sceneObjective: "",
    audienceEffect: "",
    conflictTurn: "",
    formalStrategy: "",
    blocking: "",
    performanceDirection: "",
    productionDesign: "",
    shotPlan: "",
    cameraMovementLenses: "",
    lightingPalette: "",
    editingRhythm: "",
    soundStrategy: "",
    practicalConstraints: "",
    proofOfIntent: "",
  };
}

export function coerceDirectorBriefDraft(
  value: unknown,
  identity: DirectorBriefIdentity,
  now = new Date().toISOString(),
): DirectorBriefDraft {
  const record = isRecord(value) ? value : {};
  const draft = createBlankDirectorBrief(identity, stringValue(record.updatedAt) || now);
  const fields = Object.fromEntries(
    DIRECTOR_BRIEF_FIELDS.map((field) => [field.id, stringValue(record[field.id])]),
  ) as Record<DirectorBriefFieldId, string>;

  return {
    ...draft,
    ...fields,
  };
}

export function getDirectorBriefStorageKey(filmId: string): string {
  return `hg_film_director_brief_v1:${filmId}`;
}

export function countCompletedDirectorBriefFields(draft: DirectorBriefDraft): number {
  return DIRECTOR_BRIEF_FIELDS.reduce(
    (count, field) => count + (draft[field.id].trim().length > 0 ? 1 : 0),
    0,
  );
}

export function buildDirectorBriefText(draft: DirectorBriefDraft): string {
  const lines = [
    "FILM DIRECTOR BRIEF",
    `${draft.filmTitle} (${draft.filmYear})`,
    draft.sceneTitle.trim() ? `Scene: ${draft.sceneTitle.trim()}` : "Scene: —",
    "",
  ];

  for (const field of DIRECTOR_BRIEF_FIELDS) {
    if (field.id === "sceneTitle") continue;
    lines.push(field.label.toUpperCase());
    lines.push(draft[field.id].trim() || "—");
    lines.push("");
  }

  lines.push(`Updated: ${draft.updatedAt}`);
  return lines.join("\n");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value : "";
}
