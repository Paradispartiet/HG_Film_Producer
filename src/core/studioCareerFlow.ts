export type StudioCareerActivePhase =
  | "development"
  | "pre-production"
  | "shoot"
  | "post-production"
  | "release"
  | "career-application";

export type StudioCareerFlowProject = {
  readonly id: string;
  readonly projectNumber: number;
  readonly developmentResult?: unknown;
  readonly preProductionResult?: unknown;
  readonly shootResult?: unknown;
  readonly postProductionResult?: unknown;
  readonly releaseResult?: unknown;
  readonly careerApplicationResult?: unknown;
};

export function getStudioCareerCurrentPhaseIndex(project: StudioCareerFlowProject): number {
  if (project.releaseResult) return 5;
  if (project.postProductionResult) return 4;
  if (project.shootResult) return 3;
  if (project.preProductionResult) return 2;
  if (project.developmentResult) return 1;
  return 0;
}

export function getStudioCareerActivePhase(project: StudioCareerFlowProject): StudioCareerActivePhase {
  const currentPhase = getStudioCareerCurrentPhaseIndex(project);
  if (currentPhase === 0) return "development";
  if (currentPhase === 1) return "pre-production";
  if (currentPhase === 2) return "shoot";
  if (currentPhase === 3) return "post-production";
  if (currentPhase === 4) return "release";
  return "career-application";
}

export function getStudioCareerActivePanelId(projectId: string): string {
  return `phase-action-${projectId}`;
}

export function shouldCollapseStudioCareerProject(args: {
  readonly isLatest: boolean;
  readonly careerApplicationResult?: unknown;
  readonly manualExpand: boolean | null;
}): boolean {
  return (args.manualExpand === null ? !args.isLatest : !args.manualExpand) && Boolean(args.careerApplicationResult);
}

export function canApplyStudioCareerResult(project: StudioCareerFlowProject): boolean {
  return Boolean(project.releaseResult);
}

export function canCreateNextStudioCareerProject(previousProject: StudioCareerFlowProject): boolean {
  return Boolean(previousProject.careerApplicationResult);
}

/** Only the last fully applied film may offer the next-film creation form.
 * Older completed films remain inspectable but must not start duplicate projects.
 */
export function shouldOfferStudioCareerNextProject(args: {
  readonly isLatest: boolean;
  readonly careerApplicationResult?: unknown;
}): boolean {
  return args.isLatest && Boolean(args.careerApplicationResult);
}

/** The contextual summary follows the most recent film, not Film One forever. */
export function getStudioCareerSummaryProject<T>(projects: readonly T[]): T | undefined {
  return projects.at(-1);
}

export function getStudioCareerReleaseStrategyInputName(projectId: string): string {
  return `${projectId}-release-strategy`;
}

export function getStudioCareerFestivalInputName(projectId: string): string {
  return `${projectId}-festival`;
}
