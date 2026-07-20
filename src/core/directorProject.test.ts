import assert from "node:assert/strict";
import test from "node:test";

import {
  addDirectorScene,
  addDirectorShot,
  buildDirectorProjectText,
  coerceDirectorProject,
  createBlankDirectorProject,
  createDirectorEntityId,
  duplicateDirectorScene,
  duplicateDirectorShot,
  getDirectorProjectStorageKey,
  moveDirectorShot,
  removeDirectorScene,
  updateDirectorShot,
} from "./directorProject.js";

const identity = {
  filmId: "mulholland_drive",
  filmTitle: "Mulholland Drive",
  filmYear: 2001,
} as const;

const firstSceneId = "scene_1";
const now = "2026-07-20T12:00:00.000Z";

test("creates a project with one active scene", () => {
  const project = createBlankDirectorProject(identity, firstSceneId, now);
  assert.equal(project.scenes.length, 1);
  assert.equal(project.activeSceneId, firstSceneId);
  assert.equal(project.scenes[0]?.brief.sceneTitle, "Scene 1");
  assert.deepEqual(project.scenes[0]?.shots, []);
});

test("adds scenes and keeps the new scene active", () => {
  const first = createBlankDirectorProject(identity, firstSceneId, now);
  const second = addDirectorScene(first, "scene_2", now);
  assert.equal(second.scenes.length, 2);
  assert.equal(second.activeSceneId, "scene_2");
  assert.equal(second.scenes[1]?.brief.sceneTitle, "Scene 2");
});

test("does not allow deleting the final scene", () => {
  const project = createBlankDirectorProject(identity, firstSceneId, now);
  assert.equal(removeDirectorScene(project, firstSceneId, "unused", now), project);
});

test("duplicates a scene with independent shot ids", () => {
  let project = createBlankDirectorProject(identity, firstSceneId, now);
  project = addDirectorShot(project, firstSceneId, "shot_1", now);
  project = updateDirectorShot(project, firstSceneId, "shot_1", "dramaticPurpose", "Reveal the fracture.", now);
  project = duplicateDirectorScene(project, firstSceneId, "scene_2", ["shot_2"], now);

  assert.equal(project.scenes.length, 2);
  assert.equal(project.scenes[1]?.shots[0]?.id, "shot_2");
  assert.equal(project.scenes[1]?.shots[0]?.dramaticPurpose, "Reveal the fracture.");
  assert.match(project.scenes[1]?.brief.sceneTitle ?? "", /copy$/);
});

test("creates, duplicates, updates, and reorders shot cards", () => {
  let project = createBlankDirectorProject(identity, firstSceneId, now);
  project = addDirectorShot(project, firstSceneId, "shot_1", now);
  project = updateDirectorShot(project, firstSceneId, "shot_1", "title", "Wide entrance", now);
  project = duplicateDirectorShot(project, firstSceneId, "shot_1", "shot_2", now);
  project = moveDirectorShot(project, firstSceneId, "shot_2", -1, now);

  const shots = project.scenes[0]?.shots ?? [];
  assert.deepEqual(shots.map((shot) => shot.id), ["shot_2", "shot_1"]);
  assert.equal(shots[0]?.title, "Wide entrance copy");
});

test("coerces malformed saved data to a usable project", () => {
  const project = coerceDirectorProject(
    {
      activeSceneId: "missing",
      scenes: [
        {
          id: "scene_a",
          brief: { sceneTitle: "Opening", blocking: 99 },
          shots: [{ id: "shot_a", title: "Master", lens: 35, sound: "Room tone" }],
        },
      ],
    },
    identity,
    firstSceneId,
    now,
  );

  assert.equal(project.activeSceneId, "scene_a");
  assert.equal(project.scenes[0]?.brief.sceneTitle, "Opening");
  assert.equal(project.scenes[0]?.brief.blocking, "");
  assert.equal(project.scenes[0]?.shots[0]?.title, "Master");
  assert.equal(project.scenes[0]?.shots[0]?.lens, "");
  assert.equal(project.scenes[0]?.shots[0]?.sound, "Room tone");
});

test("exports the complete scene project and shot list", () => {
  let project = createBlankDirectorProject(identity, firstSceneId, now);
  project = addDirectorShot(project, firstSceneId, "shot_1", now);
  project = updateDirectorShot(project, firstSceneId, "shot_1", "title", "Club master", now);
  project = updateDirectorShot(project, firstSceneId, "shot_1", "sound", "Playback and room response", now);
  const text = buildDirectorProjectText(project);

  assert.match(text, /FILM DIRECTOR PROJECT/);
  assert.match(text, /Mulholland Drive \(2001\)/);
  assert.match(text, /SCENE 1/);
  assert.match(text, /SHOT LIST/);
  assert.match(text, /Club master/);
  assert.match(text, /Playback and room response/);
});

test("uses stable project storage keys and entity ids", () => {
  assert.equal(getDirectorProjectStorageKey(identity.filmId), "hg_film_director_project_v1:mulholland_drive");
  assert.equal(createDirectorEntityId("scene", 1000, 0.25), "scene_rs_5dhs");
});
