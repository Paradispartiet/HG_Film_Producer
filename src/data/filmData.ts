import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { Actor, CrewMember } from "../domain/crew.js";
import type { Genre, KnowledgeEntry, Role, Technique } from "../domain/knowledge.js";
import type { Location, LocationScoutingBrief } from "../domain/location.js";
import type { MentorLesson } from "../domain/mentor.js";
import type { Mentor } from "../domain/people.js";
import type { ProductionChoice } from "../domain/production.js";
import type {
  ColorDecision,
  EditDecision,
  MusicDecision,
  SoundDecision,
  TrailerStrategy
} from "../domain/post.js";
import type { SceneFunction, ScriptTemplate } from "../domain/script.js";
import type { ProductionEvent } from "../domain/shoot.js";
import type {
  AudienceSegment,
  Award,
  CriticProfile,
  Festival,
  ReleaseStrategy
} from "../domain/release.js";

/**
 * All seed data for the film world, loaded from data/film/*.json.
 *
 * Loading is intentionally simple for now: read JSON from disk at call time and
 * trust the file shape. Validation gets its own pass later (validateFilmData).
 */
export interface FilmData {
  readonly roles: readonly Role[];
  readonly crewMembers: readonly CrewMember[];
  readonly actors: readonly Actor[];
  readonly genres: readonly Genre[];
  readonly techniques: readonly Technique[];
  readonly mentors: readonly Mentor[];
  readonly mentorLessons: readonly MentorLesson[];
  readonly locations: readonly Location[];
  readonly locationScoutingBriefs: readonly LocationScoutingBrief[];
  readonly productionChoices: readonly ProductionChoice[];
  readonly knowledgeEntries: readonly KnowledgeEntry[];
  readonly sceneFunctions: readonly SceneFunction[];
  readonly scriptTemplates: readonly ScriptTemplate[];
  readonly productionEvents: readonly ProductionEvent[];
  readonly editDecisions: readonly EditDecision[];
  readonly soundDecisions: readonly SoundDecision[];
  readonly musicDecisions: readonly MusicDecision[];
  readonly colorDecisions: readonly ColorDecision[];
  readonly trailerStrategies: readonly TrailerStrategy[];
  readonly releaseStrategies: readonly ReleaseStrategy[];
  readonly festivals: readonly Festival[];
  readonly criticProfiles: readonly CriticProfile[];
  readonly audienceSegments: readonly AudienceSegment[];
  readonly awards: readonly Award[];
}

// data/film lives at the repo root, two levels up from this module in both the
// src/ layout and the compiled dist/ layout.
const DATA_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../../data/film");

function readJson<T>(fileName: string): T {
  const raw = readFileSync(resolve(DATA_DIR, fileName), "utf-8");
  return JSON.parse(raw) as T;
}

export function loadFilmData(): FilmData {
  return {
    roles: readJson<Role[]>("roles.json"),
    crewMembers: readJson<CrewMember[]>("crew_members.json"),
    actors: readJson<Actor[]>("actors.json"),
    genres: readJson<Genre[]>("genres.json"),
    techniques: readJson<Technique[]>("techniques.json"),
    mentors: readJson<Mentor[]>("mentors.json"),
    mentorLessons: readJson<MentorLesson[]>("mentor_lessons.json"),
    locations: readJson<Location[]>("locations.json"),
    locationScoutingBriefs: readJson<LocationScoutingBrief[]>("location_scouting_briefs.json"),
    productionChoices: readJson<ProductionChoice[]>("production_choices.json"),
    knowledgeEntries: readJson<KnowledgeEntry[]>("knowledge_entries.json"),
    sceneFunctions: readJson<SceneFunction[]>("scene_functions.json"),
    scriptTemplates: readJson<ScriptTemplate[]>("script_templates.json"),
    productionEvents: readJson<ProductionEvent[]>("production_events.json"),
    editDecisions: readJson<EditDecision[]>("edit_decisions.json"),
    soundDecisions: readJson<SoundDecision[]>("sound_decisions.json"),
    musicDecisions: readJson<MusicDecision[]>("music_decisions.json"),
    colorDecisions: readJson<ColorDecision[]>("color_decisions.json"),
    trailerStrategies: readJson<TrailerStrategy[]>("trailer_strategies.json"),
    releaseStrategies: readJson<ReleaseStrategy[]>("release_strategies.json"),
    festivals: readJson<Festival[]>("festivals.json"),
    criticProfiles: readJson<CriticProfile[]>("critic_profiles.json"),
    audienceSegments: readJson<AudienceSegment[]>("audience_segments.json"),
    awards: readJson<Award[]>("awards.json")
  };
}
