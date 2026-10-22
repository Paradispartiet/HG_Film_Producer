import { FILM_SCHOOL_CHOICE_ONLY_COPY } from "../../core/filmProducerChoiceOnlyCopy.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface Props {
  readonly lessonId: string;
  readonly options: readonly string[];
  readonly value: string;
  readonly completed: boolean;
  readonly onChange: (option: string) => void;
}

/** All offered approaches are meaningful; this is a planning choice, not a scored right/wrong question. */
export function FilmSchoolPracticeOptions({ lessonId, options, value, completed, onChange }: Props) {
  const [language] = useFilmWorkLanguage();
  const copy = FILM_SCHOOL_CHOICE_ONLY_COPY[language];
  return (
    <fieldset className="school-practice-options">
      <legend>{copy.question}</legend>
      <div role="radiogroup" aria-label={copy.question}>
        {options.map((option, index) => (
          <label className={value === option ? "school-practice-option is-selected" : "school-practice-option"} key={option}>
            <input
              checked={value === option}
              disabled={completed}
              name={`school-practice-${lessonId}`}
              onChange={() => onChange(option)}
              type="radio"
              value={String(index)}
            />
            <span><strong>{String.fromCharCode(65 + index)}</strong> {option}</span>
          </label>
        ))}
      </div>
      <small>{copy.guidance}</small>
    </fieldset>
  );
}
