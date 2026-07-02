import assert from "node:assert/strict";
import test from "node:test";

import { loadFilmData } from "../data/filmData.js";

test("movements and historical films load with unique ids", () => {
  const { movements, historicalFilms } = loadFilmData();

  assert.equal(movements.length, 8);
  assert.equal(new Set(movements.map((movement) => movement.id)).size, movements.length);
  assert.ok(historicalFilms.length > 0);
  assert.equal(new Set(historicalFilms.map((film) => film.id)).size, historicalFilms.length);
});

test("every historical film's movement, when set, exists in movements.json", () => {
  const { movements, historicalFilms } = loadFilmData();
  const movementIds = new Set(movements.map((movement) => movement.id));

  for (const film of historicalFilms) {
    if (film.movementId !== null) {
      assert.ok(movementIds.has(film.movementId), `${film.title} cites an unknown movement "${film.movementId}"`);
    }
  }
});

test("every technique resolves through its knowledge entry to a real historical film", () => {
  const { techniques, knowledgeEntries, historicalFilms } = loadFilmData();
  const knowledgeEntryById = new Map(knowledgeEntries.map((entry) => [entry.id, entry]));
  const historicalFilmIds = new Set(historicalFilms.map((film) => film.id));

  for (const technique of techniques) {
    assert.ok(technique.knowledgeEntryId, `${technique.name} has no knowledge entry`);
    const entry = technique.knowledgeEntryId ? knowledgeEntryById.get(technique.knowledgeEntryId) : undefined;
    assert.ok(entry, `${technique.name}'s knowledge entry "${technique.knowledgeEntryId}" is missing`);
    assert.ok(entry?.relatedHistoricalFilmId, `${technique.name}'s knowledge entry has no historical film example`);
    assert.ok(
      entry?.relatedHistoricalFilmId && historicalFilmIds.has(entry.relatedHistoricalFilmId),
      `${technique.name} cites an unknown historical film "${entry?.relatedHistoricalFilmId}"`
    );
  }
});
