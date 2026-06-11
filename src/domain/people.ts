import type {
  KnowledgeEntryId,
  MentorId,
  RoleId,
  TechniqueId
} from "./ids.js";

/**
 * A mentor is a film-history advisor, not decoration. A mentor connects a
 * production problem to a technique and unlocks knowledge:
 *
 *   role -> problem -> example -> technique -> game choice
 */
export interface Mentor {
  readonly id: MentorId;
  readonly name: string;
  readonly focusRoleId: RoleId;
  readonly domain: string;
  readonly problem: string;
  readonly lesson: string;
  readonly example: string;
  readonly teachesTechniqueIds: readonly TechniqueId[];
  readonly unlocksKnowledgeEntryId: KnowledgeEntryId | null;
}
