import type { Genre } from "../../domain/knowledge.js";

interface GenreSelectorProps {
  readonly genres: readonly Genre[];
  readonly value: string;
  readonly error?: string | undefined;
  readonly onChange: (genreId: string) => void;
}

export function GenreSelector({ genres, value, error, onChange }: GenreSelectorProps) {
  return (
    <fieldset className="setup-fieldset">
      <legend>Genre</legend>
      <div className="choice-grid choice-grid--genre">
        {genres.map((genre) => (
          <label className={value === genre.id ? "choice-card choice-card--selected" : "choice-card"} key={genre.id}>
            <input
              checked={value === genre.id}
              name="genre"
              onChange={() => onChange(genre.id)}
              type="radio"
              value={genre.id}
            />
            <strong>{genre.name}</strong>
            <span>{genre.summary}</span>
          </label>
        ))}
      </div>
      {error && <span className="field-error">{error}</span>}
    </fieldset>
  );
}
