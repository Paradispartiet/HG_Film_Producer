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

test("next-project result chrome and statuses are localized", () => {
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.nb.nextProject.result.nextStatus, "Neste status");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.fr.nextProject.result.status.postProductionLocked, "Postproduction verrouillée");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.pt.nextProject.result.newProjectPackage, "Novo pacote de projeto");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.en.nextProject.result.status.readyForDevelopment, "Ready for development");
});

test("next-project result helpers preserve film, career, and handoff values", () => {
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.en.nextProject.result.created(3), "Film 3 created");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.nb.nextProject.result.careerPeriod(2029, "Q3", 2), "År 2029 · Q3 · 2 fullførte filmer");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.fr.nextProject.result.pipelineHeading(4), "Pipeline du film 4");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.pt.nextProject.result.handoff.nextStep(3, "release"), "Próximo passo: aplicar o filme 3 ao estúdio/carreira");
});

test("next-project base pipeline copy is localized without changing canonical step data", () => {
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.nb.nextProject.result.pipeline.studioCarriedForward, "Studio videreført");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.fr.nextProject.result.pipeline.scriptTemplateSelected, "Modèle de scénario sélectionné");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.pt.nextProject.result.pipeline.setupComplete(3), "Configuração do filme 3 concluída · desenvolvimento ainda não iniciado");
  assert.equal(STUDIO_CAREER_SUMMARY_COPY.en.nextProject.result.pipeline.moneyAvailable("Northline", "$120,000"), "Northline · $120,000 available");
});
