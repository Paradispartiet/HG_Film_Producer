import pulse from "../../../data/film/candidates/pulse-2001.json";
import searching from "../../../data/film/candidates/searching-2018.json";
import host from "../../../data/film/candidates/host-2020.json";
import type { SourceBackedCaseWorkshop, WorkshopQuestion, WorkshopText, WorkshopSource, WorkshopOption } from "./scenarioProductionSourceWorkshops";

export type FilmStudyCandidate = {
  readonly schemaVersion: number;
  readonly candidateId: string;
  readonly proposedScenarioId: string;
  readonly routeSlug: string;
  readonly status: string;
  readonly book: { readonly chapter: number; readonly decision: string };
  readonly identity: { readonly title: string; readonly originalTitle: string; readonly year: number; readonly directors: readonly string[]; readonly country: string; readonly runtimeNote: string };
  readonly article: { readonly title: string; readonly paragraphs: readonly { readonly text: string; readonly sourceIds: readonly string[] }[] };
  readonly production: Readonly<Record<string, string>>;
  readonly sources: readonly WorkshopSource[];
  readonly workshopIntroduction: WorkshopText;
  readonly phases: readonly { readonly id: string; readonly questionId: string; readonly title: WorkshopText; readonly deliverable: WorkshopText }[];
  readonly questions: readonly { readonly id: string; readonly area: string; readonly prompt: WorkshopText; readonly options: readonly WorkshopOption[]; readonly bestSupportedOptionId: string; readonly explanation: WorkshopText; readonly sourceIds: readonly string[] }[];
  readonly review: { readonly runtimeAdmission: boolean; readonly bookLinkApproved: boolean; readonly studyPreview: boolean };
};

// Explicit imports keep the editorial registry deterministic. Never append these to the playable catalogue.
const editorialCandidates: readonly FilmStudyCandidate[] = [pulse, searching, host];

function normalizeTitle(title: string): string {
  return title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function getFilmStudyCandidates(): readonly FilmStudyCandidate[] {
  return editorialCandidates.filter(candidate =>
    candidate.schemaVersion === 1 && candidate.status === "editorial_candidate_not_admitted"
    && candidate.review.studyPreview && !candidate.review.runtimeAdmission && !candidate.review.bookLinkApproved);
}

export function getFilmStudyCandidateBySlug(slug: string | undefined): FilmStudyCandidate | undefined {
  return getFilmStudyCandidates().find(candidate => candidate.routeSlug === slug);
}

export function findFilmStudyCandidateForReference(chapter: number, title: string, year: number): FilmStudyCandidate | undefined {
  const normalized = normalizeTitle(title);
  const matches = getFilmStudyCandidates().filter(candidate => candidate.book.chapter === chapter
    && candidate.identity.year === year && [candidate.identity.title, candidate.identity.originalTitle].some(value => normalizeTitle(value) === normalized));
  return matches.length === 1 ? matches[0] : undefined;
}

export function createCandidateWorkshop(candidate: FilmStudyCandidate): SourceBackedCaseWorkshop {
  const questions: WorkshopQuestion[] = candidate.questions.map(q => {
    const [first, second, third] = q.options;
    if (!first || !second || !third || q.options.length !== 3) throw new Error("Invalid candidate workshop options: " + q.id);
    const area = q.area;
    if (area !== "camera" && area !== "sound" && area !== "research" && area !== "animation") throw new Error("Invalid candidate workshop area: " + q.id);
    return { ...q, area, options: [first, second, third] };
  });
  return {
    scenarioId: candidate.candidateId,
    status: "editorial_learning_exercise_not_case_verified",
    introduction: candidate.workshopIntroduction,
    sources: candidate.sources,
    questions,
  };
}
