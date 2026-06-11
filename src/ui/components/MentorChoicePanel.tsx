import type { MentorLesson } from "../../domain/mentor.js";

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
  return (
    <div className="development-choice-panel">
      <div className="development-choice-heading">
        <div><span className="section-label">Creative counsel</span><h3>Choose one mentor lesson</h3></div>
        <p>Bring one focused craft principle into the project before production expands.</p>
      </div>
      <div className="development-option-grid development-option-grid--lessons">
        {lessons.map((lesson) => (
          <label className={selectedLessonId === lesson.id ? "development-option development-option--selected" : "development-option"} key={lesson.id}>
            <input checked={selectedLessonId === lesson.id} name="mentor-lesson" onChange={() => onSelect(lesson.id)} type="radio" />
            <span className="option-kicker">{formatLabel(lesson.focusArea)}</span>
            <strong>{lesson.title}</strong>
            <span>{lesson.advice}</span>
            <small>{lesson.techniqueId ? "Technique unlock" : "Strategic guidance"}</small>
          </label>
        ))}
      </div>
      <DevelopmentAction message={message} label="Apply mentor lesson" onApply={onApply} />
    </div>
  );
}

function DevelopmentAction({ message, label, onApply }: {
  readonly message: string;
  readonly label: string;
  readonly onApply: () => void;
}) {
  return (
    <div className="development-actions">
      <span className={message ? "inline-message inline-message--error" : "inline-message"} aria-live="polite">
        {message || "One development action completes this step."}
      </span>
      <button className="primary-button" onClick={onApply} type="button">{label}</button>
    </div>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
