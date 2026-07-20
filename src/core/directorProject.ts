import {
  buildDirectorBriefText,
  coerceDirectorBriefDraft,
  countCompletedDirectorBriefFields,
  createBlankDirectorBrief,
  type DirectorBriefDraft,
  type DirectorBriefIdentity,
} from "./directorBrief.js";

export const DIRECTOR_SHOT_FIELDS = [
  "title",
  "shotSize",
  "cameraPosition",
  "movement",
  "lens",
  "subjectAction",
  "dramaticPurpose",
  "sound",
  "estimatedDuration",
] as const;

export type DirectorShotFieldId = (typeof DIRECTOR_SHOT_FIELDS)[number];

export type DirectorShotCard = Record<DirectorShotFieldId, string> & {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type DirectorScene = {
  readonly id: string;
  readonly brief: DirectorBriefDraft;
  readonly shots: readonly DirectorShotCard[];
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type DirectorProject = DirectorBriefIdentity & {
  readonly version: 1;
  readonly activeSceneId: string;
  readonly scenes: readonly DirectorScene[];
  readonly createdAt: string;
  readonly updatedAt: string;
};

export function createDirectorEntityId(prefix: "scene" | "shot", now = Date.now(), random = Math.random()): string {
  const randomPart = Math.floor(Math.max(0, Math.min(0.999999999, random)) * 1_000_000)
    .toString(36)
    .padStart(4, "0");
  return `${prefix}_${now.toString(36)}_${randomPart}`;
}

export function createBlankDirectorShot(id: string, now = new Date().toISOString()): DirectorShotCard {
  return {
    id,
    createdAt: now,
    updatedAt: now,
    title: "",
    shotSize: "",
    cameraPosition: "",
    movement: "",
    lens: "",
    subjectAction: "",
    dramaticPurpose: "",
    sound: "",
    estimatedDuration: "",
  };
}

export function createBlankDirectorScene(
  identity: DirectorBriefIdentity,
  sceneId: string,
  sceneNumber: number,
  now = new Date().toISOString(),
): DirectorScene {
  return {
    id: sceneId,
    brief: {
      ...createBlankDirectorBrief(identity, now),
      sceneTitle: `Scene ${sceneNumber}`,
    },
    shots: [],
    createdAt: now,
    updatedAt: now,
  };
}

export function createBlankDirectorProject(
  identity: DirectorBriefIdentity,
  sceneId: string,
  now = new Date().toISOString(),
): DirectorProject {
  const scene = createBlankDirectorScene(identity, sceneId, 1, now);
  return {
    version: 1,
    ...identity,
    activeSceneId: scene.id,
    scenes: [scene],
    createdAt: now,
    updatedAt: now,
  };
}

export function createDirectorProjectFromBrief(
  brief: DirectorBriefDraft,
  sceneId: string,
  now = new Date().toISOString(),
): DirectorProject {
  const scene: DirectorScene = {
    id: sceneId,
    brief: {
      ...brief,
      updatedAt: now,
    },
    shots: [],
    createdAt: brief.updatedAt || now,
    updatedAt: now,
  };
  return {
    version: 1,
    filmId: brief.filmId,
    filmTitle: brief.filmTitle,
    filmYear: brief.filmYear,
    activeSceneId: scene.id,
    scenes: [scene],
    createdAt: brief.updatedAt || now,
    updatedAt: now,
  };
}

export function coerceDirectorProject(
  value: unknown,
  identity: DirectorBriefIdentity,
  fallbackSceneId: string,
  now = new Date().toISOString(),
): DirectorProject {
  if (!isRecord(value)) return createBlankDirectorProject(identity, fallbackSceneId, now);

  const rawScenes = Array.isArray(value.scenes) ? value.scenes : [];
  const usedSceneIds = new Set<string>();
  const scenes = rawScenes.flatMap((candidate, index) => {
    if (!isRecord(candidate)) return [];
    const sceneId = uniqueId(stringValue(candidate.id) || `${fallbackSceneId}_${index + 1}`, usedSceneIds);
    usedSceneIds.add(sceneId);
    const brief = coerceDirectorBriefDraft(candidate.brief, identity, now);
    const usedShotIds = new Set<string>();
    const shots = (Array.isArray(candidate.shots) ? candidate.shots : []).flatMap((shot, shotIndex) => {
      if (!isRecord(shot)) return [];
      const shotId = uniqueId(stringValue(shot.id) || `shot_${sceneId}_${shotIndex + 1}`, usedShotIds);
      usedShotIds.add(shotId);
      return [coerceDirectorShot(shot, shotId, now)];
    });
    const createdAt = stringValue(candidate.createdAt) || now;
    return [{
      id: sceneId,
      brief,
      shots,
      createdAt,
      updatedAt: stringValue(candidate.updatedAt) || brief.updatedAt || now,
    } satisfies DirectorScene];
  });

  if (scenes.length === 0) return createBlankDirectorProject(identity, fallbackSceneId, now);
  const requestedActiveId = stringValue(value.activeSceneId);
  const activeSceneId = scenes.some((scene) => scene.id === requestedActiveId)
    ? requestedActiveId
    : scenes[0]?.id ?? fallbackSceneId;

  return {
    version: 1,
    ...identity,
    activeSceneId,
    scenes,
    createdAt: stringValue(value.createdAt) || now,
    updatedAt: stringValue(value.updatedAt) || now,
  };
}

export function addDirectorScene(
  project: DirectorProject,
  sceneId: string,
  now = new Date().toISOString(),
): DirectorProject {
  const scene = createBlankDirectorScene(project, sceneId, project.scenes.length + 1, now);
  return {
    ...project,
    activeSceneId: scene.id,
    scenes: [...project.scenes, scene],
    updatedAt: now,
  };
}

export function duplicateDirectorScene(
  project: DirectorProject,
  sourceSceneId: string,
  newSceneId: string,
  shotIds: readonly string[],
  now = new Date().toISOString(),
): DirectorProject {
  const source = project.scenes.find((scene) => scene.id === sourceSceneId);
  if (!source) return project;
  const copy: DirectorScene = {
    id: newSceneId,
    brief: {
      ...source.brief,
      sceneTitle: `${source.brief.sceneTitle.trim() || "Untitled scene"} copy`,
      updatedAt: now,
    },
    shots: source.shots.map((shot, index) => ({
      ...shot,
      id: shotIds[index] ?? `${newSceneId}_shot_${index + 1}`,
      createdAt: now,
      updatedAt: now,
    })),
    createdAt: now,
    updatedAt: now,
  };
  const sourceIndex = project.scenes.findIndex((scene) => scene.id === sourceSceneId);
  const nextScenes = [...project.scenes];
  nextScenes.splice(sourceIndex + 1, 0, copy);
  return {
    ...project,
    activeSceneId: copy.id,
    scenes: nextScenes,
    updatedAt: now,
  };
}

export function removeDirectorScene(
  project: DirectorProject,
  sceneId: string,
  replacementSceneId: string,
  now = new Date().toISOString(),
): DirectorProject {
  if (project.scenes.length <= 1) return project;
  const sceneIndex = project.scenes.findIndex((scene) => scene.id === sceneId);
  if (sceneIndex < 0) return project;
  const scenes = project.scenes.filter((scene) => scene.id !== sceneId);
  const preferred = scenes[Math.min(sceneIndex, scenes.length - 1)];
  return {
    ...project,
    activeSceneId: preferred?.id ?? replacementSceneId,
    scenes,
    updatedAt: now,
  };
}

export function updateDirectorSceneBrief(
  project: DirectorProject,
  sceneId: string,
  brief: DirectorBriefDraft,
  now = new Date().toISOString(),
): DirectorProject {
  return mapScene(project, sceneId, (scene) => ({
    ...scene,
    brief: { ...brief, updatedAt: now },
    updatedAt: now,
  }), now);
}

export function addDirectorShot(
  project: DirectorProject,
  sceneId: string,
  shotId: string,
  now = new Date().toISOString(),
): DirectorProject {
  return mapScene(project, sceneId, (scene) => ({
    ...scene,
    shots: [...scene.shots, createBlankDirectorShot(shotId, now)],
    updatedAt: now,
  }), now);
}

export function updateDirectorShot(
  project: DirectorProject,
  sceneId: string,
  shotId: string,
  field: DirectorShotFieldId,
  value: string,
  now = new Date().toISOString(),
): DirectorProject {
  return mapScene(project, sceneId, (scene) => ({
    ...scene,
    shots: scene.shots.map((shot) => shot.id === shotId ? { ...shot, [field]: value, updatedAt: now } : shot),
    updatedAt: now,
  }), now);
}

export function duplicateDirectorShot(
  project: DirectorProject,
  sceneId: string,
  shotId: string,
  newShotId: string,
  now = new Date().toISOString(),
): DirectorProject {
  return mapScene(project, sceneId, (scene) => {
    const shotIndex = scene.shots.findIndex((shot) => shot.id === shotId);
    if (shotIndex < 0) return scene;
    const source = scene.shots[shotIndex];
    if (!source) return scene;
    const copy = {
      ...source,
      id: newShotId,
      title: `${source.title.trim() || `Shot ${shotIndex + 1}`} copy`,
      createdAt: now,
      updatedAt: now,
    };
    const shots = [...scene.shots];
    shots.splice(shotIndex + 1, 0, copy);
    return { ...scene, shots, updatedAt: now };
  }, now);
}

export function removeDirectorShot(
  project: DirectorProject,
  sceneId: string,
  shotId: string,
  now = new Date().toISOString(),
): DirectorProject {
  return mapScene(project, sceneId, (scene) => ({
    ...scene,
    shots: scene.shots.filter((shot) => shot.id !== shotId),
    updatedAt: now,
  }), now);
}

export function moveDirectorShot(
  project: DirectorProject,
  sceneId: string,
  shotId: string,
  direction: -1 | 1,
  now = new Date().toISOString(),
): DirectorProject {
  return mapScene(project, sceneId, (scene) => {
    const fromIndex = scene.shots.findIndex((shot) => shot.id === shotId);
    const toIndex = fromIndex + direction;
    if (fromIndex < 0 || toIndex < 0 || toIndex >= scene.shots.length) return scene;
    const shots = [...scene.shots];
    const [shot] = shots.splice(fromIndex, 1);
    if (!shot) return scene;
    shots.splice(toIndex, 0, shot);
    return { ...scene, shots, updatedAt: now };
  }, now);
}

export function countCompletedDirectorShotFields(shot: DirectorShotCard): number {
  return DIRECTOR_SHOT_FIELDS.reduce((count, field) => count + (shot[field].trim() ? 1 : 0), 0);
}

export function countCompletedDirectorProjectFields(project: DirectorProject): number {
  return project.scenes.reduce(
    (count, scene) => count
      + countCompletedDirectorBriefFields(scene.brief)
      + scene.shots.reduce((shotCount, shot) => shotCount + countCompletedDirectorShotFields(shot), 0),
    0,
  );
}

export function buildDirectorProjectText(project: DirectorProject): string {
  const lines = [
    "FILM DIRECTOR PROJECT",
    `${project.filmTitle} (${project.filmYear})`,
    `${project.scenes.length} scene${project.scenes.length === 1 ? "" : "s"}`,
    "",
  ];
  project.scenes.forEach((scene, sceneIndex) => {
    lines.push(`SCENE ${sceneIndex + 1}`);
    lines.push(buildDirectorBriefText(scene.brief));
    lines.push("SHOT LIST");
    if (scene.shots.length === 0) {
      lines.push("—");
    } else {
      scene.shots.forEach((shot, shotIndex) => {
        lines.push(`${shotIndex + 1}. ${shot.title.trim() || "Untitled shot"}`);
        for (const field of DIRECTOR_SHOT_FIELDS) {
          if (field === "title") continue;
          lines.push(`${humanizeShotField(field)}: ${shot[field].trim() || "—"}`);
        }
        lines.push("");
      });
    }
    lines.push("");
  });
  lines.push(`Updated: ${project.updatedAt}`);
  return lines.join("\n");
}

export function getDirectorProjectStorageKey(filmId: string): string {
  return `hg_film_director_project_v1:${filmId}`;
}

function coerceDirectorShot(value: Record<string, unknown>, id: string, now: string): DirectorShotCard {
  const fields = Object.fromEntries(
    DIRECTOR_SHOT_FIELDS.map((field) => [field, stringValue(value[field])]),
  ) as Record<DirectorShotFieldId, string>;
  return {
    id,
    ...fields,
    createdAt: stringValue(value.createdAt) || now,
    updatedAt: stringValue(value.updatedAt) || now,
  };
}

function mapScene(
  project: DirectorProject,
  sceneId: string,
  mapper: (scene: DirectorScene) => DirectorScene,
  now: string,
): DirectorProject {
  let changed = false;
  const scenes = project.scenes.map((scene) => {
    if (scene.id !== sceneId) return scene;
    const mapped = mapper(scene);
    changed = mapped !== scene;
    return mapped;
  });
  return changed ? { ...project, scenes, updatedAt: now } : project;
}

function humanizeShotField(field: DirectorShotFieldId): string {
  const labels: Record<DirectorShotFieldId, string> = {
    title: "Title",
    shotSize: "Shot size",
    cameraPosition: "Camera position",
    movement: "Movement",
    lens: "Lens",
    subjectAction: "Subject action",
    dramaticPurpose: "Dramatic purpose",
    sound: "Sound",
    estimatedDuration: "Estimated duration",
  };
  return labels[field];
}

function uniqueId(candidate: string, used: ReadonlySet<string>): string {
  if (!used.has(candidate)) return candidate;
  let suffix = 2;
  while (used.has(`${candidate}_${suffix}`)) suffix += 1;
  return `${candidate}_${suffix}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value : "";
}
