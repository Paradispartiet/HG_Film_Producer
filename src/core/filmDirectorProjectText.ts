import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefDraft } from "./directorBrief.js";
import {
  DIRECTOR_SHOT_FIELDS,
  type DirectorProject,
  type DirectorScene,
} from "./directorProject.js";
import { FILM_DIRECTOR_BRIEF_COPY } from "./filmDirectorBriefCopy.js";
import { FILM_DIRECTOR_SHOT_COPY } from "./filmDirectorShotCopy.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type FilmDirectorProjectTextCopy = {
  readonly projectHeading: string;
  readonly briefHeading: string;
  readonly sceneHeading: (sceneNumber: number) => string;
  readonly sceneLabel: string;
  readonly sceneCount: (count: number) => string;
  readonly shotListHeading: string;
  readonly updatedLabel: string;
};

export const FILM_DIRECTOR_PROJECT_TEXT_COPY: Record<FilmWorkLanguage, FilmDirectorProjectTextCopy> = {
  en: {
    projectHeading: "FILM DIRECTOR PROJECT",
    briefHeading: "FILM DIRECTOR BRIEF",
    sceneHeading: (sceneNumber) => `SCENE ${sceneNumber}`,
    sceneLabel: "Scene:",
    sceneCount: (count) => `${count} ${count === 1 ? "scene" : "scenes"}`,
    shotListHeading: "SHOT LIST",
    updatedLabel: "Updated:",
  },
  nb: {
    projectHeading: "FILM DIRECTOR-PROSJEKT",
    briefHeading: "FILM DIRECTOR-REGIBRIEF",
    sceneHeading: (sceneNumber) => `SCENE ${sceneNumber}`,
    sceneLabel: "Scene:",
    sceneCount: (count) => `${count} ${count === 1 ? "scene" : "scener"}`,
    shotListHeading: "INNSTILLINGSLISTE",
    updatedLabel: "Oppdatert:",
  },
  fr: {
    projectHeading: "PROJET FILM DIRECTOR",
    briefHeading: "BRIEF FILM DIRECTOR",
    sceneHeading: (sceneNumber) => `SCÈNE ${sceneNumber}`,
    sceneLabel: "Scène :",
    sceneCount: (count) => `${count} ${count === 1 ? "scène" : "scènes"}`,
    shotListHeading: "LISTE DE PLANS",
    updatedLabel: "Mis à jour :",
  },
  pt: {
    projectHeading: "PROJETO FILM DIRECTOR",
    briefHeading: "BRIEF FILM DIRECTOR",
    sceneHeading: (sceneNumber) => `CENA ${sceneNumber}`,
    sceneLabel: "Cena:",
    sceneCount: (count) => `${count} ${count === 1 ? "cena" : "cenas"}`,
    shotListHeading: "LISTA DE PLANOS",
    updatedLabel: "Atualizado:",
  },
};

export function buildFilmDirectorBriefText(language: FilmWorkLanguage, draft: DirectorBriefDraft): string {
  const copy = FILM_DIRECTOR_PROJECT_TEXT_COPY[language];
  const briefCopy = FILM_DIRECTOR_BRIEF_COPY[language];
  const lines = [
    copy.briefHeading,
    `${draft.filmTitle} (${draft.filmYear})`,
    `${copy.sceneLabel} ${draft.sceneTitle.trim() || "—"}`,
    "",
  ];

  for (const field of DIRECTOR_BRIEF_FIELDS) {
    if (field.id === "sceneTitle") continue;
    lines.push(briefCopy.fields[field.id].label.toUpperCase());
    lines.push(draft[field.id].trim() || "—");
    lines.push("");
  }

  lines.push(`${copy.updatedLabel} ${draft.updatedAt}`);
  return lines.join("\n");
}

export function buildFilmDirectorProjectText(language: FilmWorkLanguage, project: DirectorProject): string {
  const copy = FILM_DIRECTOR_PROJECT_TEXT_COPY[language];
  const shotCopy = FILM_DIRECTOR_SHOT_COPY[language];
  const lines = [
    copy.projectHeading,
    `${project.filmTitle} (${project.filmYear})`,
    copy.sceneCount(project.scenes.length),
    "",
  ];

  project.scenes.forEach((scene, sceneIndex) => {
    lines.push(copy.sceneHeading(sceneIndex + 1));
    lines.push(buildFilmDirectorBriefText(language, scene.brief));
    lines.push(copy.shotListHeading);
    if (scene.shots.length === 0) {
      lines.push("—");
    } else {
      scene.shots.forEach((shot, shotIndex) => {
        lines.push(`${shotIndex + 1}. ${shot.title.trim() || shotCopy.shotTitleFallback(shotIndex + 1)}`);
        for (const field of DIRECTOR_SHOT_FIELDS) {
          if (field === "title") continue;
          lines.push(`${shotCopy.fields[field]}: ${shot[field].trim() || "—"}`);
        }
        lines.push("");
      });
    }
    lines.push("");
  });

  lines.push(`${copy.updatedLabel} ${project.updatedAt}`);
  return lines.join("\n");
}

export function buildFilmDirectorSceneText(
  language: FilmWorkLanguage,
  project: DirectorProject,
  scene: DirectorScene,
): string {
  return buildFilmDirectorProjectText(language, {
    ...project,
    activeSceneId: scene.id,
    scenes: [scene],
  });
}
