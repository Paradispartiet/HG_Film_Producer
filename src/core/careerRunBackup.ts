import type { CareerRunState } from "../ui/state/careerRunState.js";

const BACKUP_FORMAT = "filmwork-studio-career-backup";
const BACKUP_VERSION = 1;
const MAX_BACKUP_CHARACTERS = 4_000_000;

type UnknownRecord = Record<string, unknown>;
const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isOptionalResult = (value: unknown): boolean =>
  value === null || isRecord(value);

function isValidCareerRun(value: unknown): value is CareerRunState {
  if (!isRecord(value) || value.version !== 1 || !Array.isArray(value.projects)) return false;
  if (value.projects.length < 1 || value.projects.length > 200) return false;
  const ids = new Set<string>();
  let previousNumber = 0;
  for (const project of value.projects) {
    if (!isRecord(project) || typeof project.id !== "string" || !project.id.trim() ||
        project.id.length > 200 || ids.has(project.id)) return false;
    ids.add(project.id);
    if (!Number.isSafeInteger(project.projectNumber) || (project.projectNumber as number) <= previousNumber) return false;
    previousNumber = project.projectNumber as number;
    if (!isRecord(project.run) || !isRecord(project.run.project) ||
        typeof project.run.project.title !== "string" ||
        !project.run.project.title.trim() || project.run.project.title.length > 400) return false;
    if (!Array.isArray(project.developmentResults) ||
        !Array.isArray(project.shootDayResults) ||
        !project.developmentResults.every(isRecord) ||
        !project.shootDayResults.every(isRecord)) return false;
    if (!isRecord(project.preProductionSelections) ||
        !Array.isArray(project.preProductionSelections.selectedCrewIds) ||
        !Array.isArray(project.preProductionSelections.selectedActorIds) ||
        !isRecord(project.postProductionChoices) || !isRecord(project.releaseChoices)) return false;
    for (const field of [
      "developmentResult", "preProductionResult", "shootResult",
      "postProductionResult", "releaseResult", "careerApplicationResult",
    ]) if (!isOptionalResult(project[field])) return false;
  }
  return true;
}

export function createCareerRunBackup(state: CareerRunState): string {
  if (!isValidCareerRun(state)) throw new Error("Cannot export an empty or invalid saved career");
  return JSON.stringify({
    format: BACKUP_FORMAT,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    state,
  }, null, 2);
}

export type CareerBackupPreview =
  | { readonly ok: true; readonly state: CareerRunState; readonly filmCount: number; readonly lastFilmTitle: string }
  | { readonly ok: false; readonly reason: "invalid" | "too_large" };

export function previewCareerRunBackup(text: string): CareerBackupPreview {
  if (text.length > MAX_BACKUP_CHARACTERS) return { ok: false, reason: "too_large" };
  try {
    const parsed: unknown = JSON.parse(text);
    if (!isRecord(parsed) || parsed.format !== BACKUP_FORMAT ||
        parsed.version !== BACKUP_VERSION || !isValidCareerRun(parsed.state)) return { ok: false, reason: "invalid" };
    const state = parsed.state;
    return {
      ok: true,
      state,
      filmCount: state.projects.length,
      lastFilmTitle: state.projects[state.projects.length - 1]!.run.project.title,
    };
  } catch {
    return { ok: false, reason: "invalid" };
  }
}
