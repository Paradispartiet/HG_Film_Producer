import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_SUMMARY_COPY } from "./studioCareerSummaryCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;

test("studio career summary copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_SUMMARY_COPY), languages);
});

test("run summary copy localizes headings and status narratives", () => {
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.en.summary.heading, "Project brief");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.nb.summary.heading, "Prosjektbrief");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.fr.summary.editSetup, "Modifier la configuration");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.pt.summary.career.reviewReady, "Revisão pronta");
  assert.match(STUDIO_CAREER_SUMMARY_COPY.nb.summary.shoot.completedDetail(3, 84), /3 opptaksdager/);
});

test("next-project copy localizes validation and dynamic film labels", () => {
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.en.nextProject.validation.projectTitle, "Enter a title for the next project.");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.nb.nextProject.validation.genre, "Velg en sjanger.");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.fr.nextProject.form.greenlight(2), "Feu vert pour le film 2");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.pt.nextProject.creator.setupHeading(3), "Configuração do filme 3");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.nb.nextProject.form.createFilm(4), "Opprett film 4");
});
