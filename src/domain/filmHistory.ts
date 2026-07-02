import type { HistoricalFilmId, MovementId } from "./ids.js";

/**
 * A film-historical movement or era. Movements give historical films their
 * context; a film cites the movement it belongs to, not the other way round.
 */
export interface FilmMovement {
  readonly id: MovementId;
  readonly name: string;
  readonly era: string;
  readonly region: string;
  readonly summary: string;
}

/**
 * A real film used as a concrete example. A historical film is only modelled
 * because a knowledge entry cites it as the origin of a technique the player
 * can actually unlock and use.
 */
export interface HistoricalFilm {
  readonly id: HistoricalFilmId;
  readonly title: string;
  readonly year: number;
  readonly director: string;
  readonly movementId: MovementId | null;
  readonly summary: string;
}
