import type { ProducerPriorityId, ProducerPrioritySummary } from "../../core/applyProducerPriority.js";
import { getOnSetConversation, ON_SET_DIALOGUE_COPY } from "../../core/studioCareerOnSetDialogue.js";
import { ON_SET_DIALOGUE_VIEW_COPY } from "../../core/studioCareerDialogueViewCopy.js";
import { PRODUCER_PRIORITY_COPY } from "../../core/studioCareerProducerPriorityCopy.js";
import { describeTeamContinuity, type TeamContinuity } from "../../core/studioCareerTeamContinuity.js";
import { describeOnSetFollowUp } from "../../core/studioCareerDialogueFollowUp.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface OnSetDialoguePanelProps {
  readonly eventId: string;
  readonly priority: ProducerPriorityId;
  readonly summary: ProducerPrioritySummary;
  readonly continuity?: TeamContinuity | undefined;
  readonly confirmed?: boolean;
  readonly phase?: "full" | "briefing" | "response";
  readonly practicalActionVersion?: 1 | 2 | undefined;
}

/** An existing producer choice and resolver outcome, presented as a three-turn conversation. */
export function OnSetDialoguePanel({ eventId, priority, summary, continuity, confirmed = false, phase = "full", practicalActionVersion }: OnSetDialoguePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = ON_SET_DIALOGUE_COPY[language];
  const view = ON_SET_DIALOGUE_VIEW_COPY[language];
  const conversation = getOnSetConversation(language, eventId, priority, summary, practicalActionVersion);
  const previousDay = continuity ? describeTeamContinuity(language, continuity) : undefined;
  const spokenFollowUp = describeOnSetFollowUp(language, eventId, continuity);
  const status = summary.interrupted ? "stopped" : summary.approachFits ? "matched" : "partial";
  const showBriefing = phase !== "response";
  const showResponse = phase !== "briefing";
  const openNeed = continuity?.shiftedPriority
    ? PRODUCER_PRIORITY_COPY[language].options[continuity.recommendedId].title : undefined;
  if (!conversation) return null;
  return (
    <section className="shoot-desk-section on-set-dialogue" aria-live={confirmed || phase === "briefing" ? "off" : "polite"} data-dialogue-phase={phase} data-dialogue-state={status} data-dialogue-status-mode={confirmed ? "confirmed" : "preview"}>
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.heading}</span><h3>{showBriefing ? conversation.speaker : view.response}</h3></div>
        {!confirmed && showResponse && <p>{copy.forecast}</p>}
      </div>
      {showBriefing && previousDay && (
        <div className="on-set-dialogue-continuity" data-focus-shifted={continuity?.shiftedPriority ? "true" : "false"}>
          <strong>{previousDay.heading}</strong>
          <p>{previousDay.summary}</p>
          {previousDay.followUp && <p>{previousDay.followUp}</p>}
          {openNeed && <strong className="on-set-dialogue-open-need" data-need-id={continuity?.recommendedId}>{view.openNeed(openNeed)}</strong>}
        </div>
      )}
      <div className={`on-set-dialogue-steps on-set-dialogue-steps--${phase}`}>
        {showBriefing && <div className="on-set-dialogue-turn on-set-dialogue-concern">
          <span className="on-set-dialogue-step">{view.concern}</span>
          <strong>{conversation.speaker}</strong><p>{conversation.concern}</p>
          {spokenFollowUp && <p className="on-set-dialogue-follow-up">{spokenFollowUp}</p>}
        </div>}
        {showResponse && <>
        <div className="on-set-dialogue-turn on-set-dialogue-producer">
          <span className="on-set-dialogue-step">{view.producerAction}</span>
          <strong>{conversation.producer}</strong><p>{conversation.reply}</p>
        </div>
        <div className="on-set-dialogue-turn on-set-dialogue-reaction">
          <span className="on-set-dialogue-step">{view.response}</span>
          <strong className="on-set-dialogue-state">{confirmed ? view.status[status] : view.previewStatus[status]}</strong>
          <p>{conversation.teamResponse}</p>
        </div>
        </>}
      </div>
      {showResponse && <p className="on-set-dialogue-lesson"><strong>{view.takeaway}</strong> {conversation.lesson}</p>}
    </section>
  );
}
