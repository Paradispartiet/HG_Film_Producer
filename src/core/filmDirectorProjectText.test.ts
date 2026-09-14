import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import {
  DIRECTOR_SHOT_FIELDS,
  buildDirectorProjectText,
  createBlankDirectorProject,
  type DirectorProject,
  type DirectorShotFieldId,
} from "./directorProject.js";
import { FILM_DIRECTOR_BRIEF_COPY } from "./filmDirectorBriefCopy.js";
import {
  FILM_DIRECTOR_PROJECT_TEXT_COPY,
  buildFilmDirectorProjectText,
  buildFilmDirectorSceneText,
} from "./filmDirectorProjectText.js";
import { FILM_DIRECTOR_SHOT_COPY } from "./filmDirectorShotCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const NOW = "2026-09-14T12:00:00.000Z";

function sampleProject(): DirectorProject {
  const project = createBlankDirectorProject(
    { filmId: "film_test", filmTitle: "Test Film", filmYear: 2026 },
    "scene_test",
    NOW,
  );
  const scene = project.scenes[0];
  assert.ok(scene);
  const briefValues = Object.fromEntries(
    DIRECTOR_BRIEF_FIELDS.map((field) => [field.id, `brief:${field.id}`]),
  ) as Record<DirectorBriefFieldId, string>;
  const shotValues = Object.fromEntries(
    DIRECTOR_SHOT_FIELDS.map((field) => [field, `shot:${field}`]),
  ) as Record<DirectorShotFieldId, string>;
  return {
    ...project,
    scenes: [{
      ...scene,
      brief: { ...scene.brief, ...briefValues },
      shots: [{ id: "shot_test", createdAt: NOW, updatedAt: NOW, ...shotValues }],
    }],
  };
}

test("Film Director project text copy covers all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_PROJECT_TEXT_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("localized project text reuses every deployed brief and shot field label", () => {
  const project = sampleProject();
  for (const language of FILMWORK_LANGUAGES) {
    const text = buildFilmDirectorProjectText(language, project);
    for (const field of DIRECTOR_BRIEF_FIELDS) {
      if (field.id === "sceneTitle") continue;
      assert.ok(text.includes(FILM_DIRECTOR_BRIEF_COPY[language].fields[field.id].label.toUpperCase()), `${language}:brief:${field.id}`);
      assert.ok(text.includes(`brief:${field.id}`), `${language}:brief-value:${field.id}`);
    }
    for (const field of DIRECTOR_SHOT_FIELDS) {
      if (field === "title") continue;
      assert.ok(text.includes(`${FILM_DIRECTOR_SHOT_COPY[language].fields[field]}:`), `${language}:shot:${field}`);
      assert.ok(text.includes(`shot:${field}`), `${language}:shot-value:${field}`);
    }
  }
});

test("localized export chrome is language-specific while canonical core export remains unchanged", () => {
  const project = sampleProject();
  const canonical = buildDirectorProjectText(project);
  assert.ok(canonical.includes("FILM DIRECTOR PROJECT"));
  assert.ok(canonical.includes("SHOT LIST"));

  assert.ok(buildFilmDirectorProjectText("nb", project).includes("INNSTILLINGSLISTE"));
  assert.ok(buildFilmDirectorProjectText("fr", project).includes("LISTE DE PLANS"));
  assert.ok(buildFilmDirectorProjectText("pt", project).includes("LISTA DE PLANOS"));
  assert.notEqual(FILM_DIRECTOR_PROJECT_TEXT_COPY.nb.projectHeading, FILM_DIRECTOR_PROJECT_TEXT_COPY.en.projectHeading);
  assert.notEqual(FILM_DIRECTOR_PROJECT_TEXT_COPY.fr.updatedLabel, FILM_DIRECTOR_PROJECT_TEXT_COPY.en.updatedLabel);
  assert.notEqual(FILM_DIRECTOR_PROJECT_TEXT_COPY.pt.sceneHeading(2), FILM_DIRECTOR_PROJECT_TEXT_COPY.en.sceneHeading(2));
});

test("scene export is scoped to the selected scene without changing project identity", () => {
  const project = sampleProject();
  const first = project.scenes[0];
  assert.ok(first);
  const second = {
    ...first,
    id: "scene_second",
    brief: { ...first.brief, sceneTitle: "Second scene" },
    shots: [],
  };
  const multi: DirectorProject = { ...project, scenes: [first, second], activeSceneId: second.id };
  const text = buildFilmDirectorSceneText("fr", multi, second);
  assert.ok(text.includes("1 scène"));
  assert.ok(text.includes("Second scene"));
  assert.ok(!text.includes("brief:sceneTitle"));
  assert.equal(multi.scenes.length, 2);
  assert.equal(multi.filmId, project.filmId);
});
