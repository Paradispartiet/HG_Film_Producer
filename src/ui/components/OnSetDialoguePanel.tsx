import type { ProducerPriorityId, ProducerPrioritySummary } from "../../core/applyProducerPriority.js";
import { getOnSetConversation, ON_SET_DIALOGUE_COPY } from "../../core/studioCareerOnSetDialogue.js";
import { describeTeamContinuity, type TeamContinuity } from "../../core/studioCareerTeamContinuity.js";
import { describeOnSetFollowUp } from "../../core/studioCareerDialogueFollowUp.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface OnSetDialoguePanelProps {
  readonly eventId: string;
  readonly priority: ProducerPriorityId;
  readonly summary: ProducerPrioritySummary;
  readonly continuity?: TeamContinuity | undefined;
  readonly confirmed?: boolean;
}

/** A dialogue using the *real* producer decision and shoot resolver; no separate scoring. */
export function OnSetDialoguePanel({ eventId, priority, summary, continuity, confirmed = false }: OnSetDialoguePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = ON_SET_DIALOGUE_COPY[language];
  const conversation = getOnSetConversation(language, eventId, priority, summary);
  const previousDay = continuity ? describeTeamContinuity(language, continuity) : undefined;
  const spokenFollowUp = describeOnSetFollowUp(language, eventId, continuity);
  if (!conversation) return null;
  return (
    <section className="shoot-desk-section on-set-dialogue" aria-live={confirmed ? "off" : "polite"}>
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.heading}</span><h3>{conversation.speaker}</h3></div>
        {!confirmed && <p>{copy.forecast}</p>}
      </div>
      {previousDay && (
        <div className="on-set-dialogue-continuity" data-focus-shifted={continuity?.shiftedPriority ? "true" : "false"}>
          <strong>{previousDay.heading}</strong>
          <p>{previousDay.summary}</p>
          {previousDay.followUp && <p>{previousDay.followUp}</p>}
        </div>
      )}
      <div className="on-set-dialogue-turn on-set-dialogue-concern">
        <strong>{conversation.speaker}</strong><p>{conversation.concern}</p>
      </div>
      {spokenFollowUp && (
        <div className="on-set-dialogue-turn on-set-dialogue-follow-up">
          <strong>{conversation.speaker}</strong><p>{spokenFollowUp}</p>
        </div>
      )}
      <div className="on-set-dialogue-turn on-set-dialogue-producer">
        <strong>{conversation.producer}</strong><p>{conversation.reply}</p>
      </div>
      <div className="on-set-dialogue-turn on-set-dialogue-reaction">
        <strong>{copy.response}</strong><p>{conversation.teamResponse}</p>
      </div>
      <p className="on-set-dialogue-lesson">{conversation.lesson}</p>
    </section>
  );
}
