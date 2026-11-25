import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { getResolvedFilmHistoryProfile } from "./scenarioFilmStudyProfileResolver";
import { getProductionCaseVerification, type ProductionCaseVerificationArea, type ProductionCaseVerificationRecord } from "./scenarioProductionVerificationRegistry";
import type { FilmStudyArea } from "../../core/filmStudyCoverage";

/**
 * Connect an already verified film's own historical study to the mission library.
 * This is an evidence-mapped brief, not new source verification, a new scenario,
 * or an automatic upgrade of a manually authored production case.
 */
function distinct(values: readonly (string | undefined)[]): string[] {
  return [...new Set(values.filter((v): v is string => typeof v === "string" && v.trim().length > 0).map(v => v.trim()))];
}

function departmentTargets(
  title: string,
  profile: FilmHistoryProfile,
  verification: ProductionCaseVerificationRecord,
  area: ProductionCaseVerificationArea,
  highlights: readonly FilmStudyArea[],
  label: string,
): readonly string[] {
  // Only use the film's own explicitly source-verified notes. Mapped or pending
  // observations must not silently become historically verified craft answers.
  const notes = highlights.flatMap(highlight => profile.technicalHighlights
    .filter(item => item.area === highlight && item.status === "source_verified")
    .map(item => item.note));
  const sourceNotes = verification.sources
    .filter(source => source.supports.includes(area))
    .map(source => source.note);
  const targets = distinct([...notes, ...sourceNotes]);
  if (targets.length === 0) {
    return [
      `Research ${title}'s ${label} before asserting a specific historical technique.`,
      `Keep undocumented ${label} details for ${title} open rather than borrowing a different film's production method.`,
    ];
  }
  if (targets.length === 1) {
    targets.push(`Keep details of ${title}'s ${label} beyond the documented account open to further research.`);
  }
  return targets.slice(0, 4);
}

export function getVerifiedHistoryMappedProductionBrief(scenario: FilmScenarioSeed): ScenarioProductionBrief | undefined {
  const verification = getProductionCaseVerification(scenario.id);
  const profile = getResolvedFilmHistoryProfile(scenario.id);
  if (!verification || verification.status !== "verified" || verification.scenarioId !== scenario.id
    || !profile || profile.scenarioId !== scenario.id || verification.sources.length === 0
    || !profile.moment.trim() || !profile.historyQuestion.trim()) return undefined;

  const title = scenario.film.title;
  const genreTargets = distinct(scenario.film.genres);
  const toneTargets = distinct([...profile.traditions, profile.period]).slice(0, 4);
  const learningGoals = distinct([profile.historyQuestion, profile.after, ...scenario.learning_goals_seed]).slice(0, 4);
  if (genreTargets.length === 0 || toneTargets.length === 0 || learningGoals.length < 2) return undefined;

  return {
    scenarioId: scenario.id,
    briefType: "production_case",
    title: `${title} production brief`,
    logline: profile.moment,
    genreTargets,
    toneTargets,
    screenplayTargets: departmentTargets(title, profile, verification, "screenplay", ["screenplay", "directing", "performance"], "screenplay and staging"),
    cinematographyTargets: departmentTargets(title, profile, verification, "cinematography", ["cinematography", "camera_format", "lighting"], "image and capture"),
    editingTargets: departmentTargets(title, profile, verification, "editing", ["editing", "effects_animation"], "editing and finishing"),
    soundTargets: departmentTargets(title, profile, verification, "sound", ["sound_design", "music"], "sound and music"),
    learningGoals,
    // Inherits only the existing film's source-record status; this mapping itself
    // is not independent editorial approval or proof of every department.
    verificationStatus: verification.status,
  };
}
