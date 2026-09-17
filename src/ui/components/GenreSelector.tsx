import { STUDIO_SETUP_COPY } from "../../core/studioSetupCopy";
import type { Genre } from "../../domain/knowledge.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface GenreSelectorProps {
  readonly genres: readonly Genre[];
  readonly value: string;
  readonly error?: string | undefined;
  readonly onChange: (genreId: string) => void;
}

export function GenreSelector({ genres, value, error, onChange }: GenreSelectorProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_SETUP_COPY[language].genre;

  return (
    <fieldset className="setup-fieldset">
      <legend>{copy.legend}</legend>
      <div className="choice-grid choice-grid--genre">
        {genres.map((genre) => {
          const presentation = copy.presentation(genre);
          return (
            <label className={value === genre.id ? "choice-card choice-card--selected" : "choice-card"} key={genre.id}>
              <input
                checked={value === genre.id}
                name="genre"
                onChange={() => onChange(genre.id)}
                type="radio"
                value={genre.id}
              />
              <strong>{presentation.name}</strong>
              <span>{presentation.summary}</span>
            </label>
          );
        })}
      </div>
      {error && <span className="field-error">{error}</span>}
    </fieldset>
  );
}
