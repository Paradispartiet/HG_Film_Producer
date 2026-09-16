import { STUDIO_CAREER_DEVELOPMENT_COPY } from "../../core/studioCareerDevelopmentCopy";
import type { MentorLesson } from "../../domain/mentor.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface MentorChoicePanelProps {
  readonly lessons: readonly MentorLesson[];
  readonly selectedLessonId: string;
  readonly message: string;
  readonly onSelect: (lessonId: string) => void;
  readonly onApply: () => void;
}

export function MentorChoicePanel({
  lessons,
  selectedLessonId,
  message,
  onSelect,
  onApply
}: MentorChoicePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language].mentor;

  return (
    <div className="development-choice-panel">
      <div className="development-choice-heading">
        <div><span className="section-label">{copy.sectionLabel}</span><h3>{copy.heading}</h3></div>
        <p>{copy.intro}</p>
      </div>
      <div className="development-option-grid development-option-grid--lessons">
        {lessons.map((lesson) => (
          <label className={selectedLessonId === lesson.id ? "development-option development-option--selected" : "development-option"} key={lesson.id}>
            <input checked={selectedLessonId === lesson.id} name="mentor-lesson" onChange={() => onSelect(lesson.id)} type="radio" />
            <span className="option-kicker">{formatLabel(lesson.focusArea)}</span>
            <strong>{lesson.title}</strong>
            <span>{lesson.advice}</span>
            <small>{lesson.techniqueId ? copy.techniqueUnlock : copy.strategicGuidance}</small>
          </label>
        ))}
      </div>
      <DevelopmentAction message={message} label={copy.apply} hint={copy.actionHint} onApply={onApply} />
    </div>
  );
}

function DevelopmentAction({ message, label, hint, onApply }: {
  readonly message: string;
  readonly label: string;
  readonly hint: string;
  readonly onApply: () => void;
}) {
  return (
    <div className="development-actions">
      <span className={message ? "inline-message inline-message--error" : "inline-message"} aria-live="polite">
        {message || hint}
      </span>
      <button className="primary-button" onClick={onApply} type="button">{label}</button>
    </div>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
