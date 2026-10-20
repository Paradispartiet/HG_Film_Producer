import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

/** Display-only labels for the source's canonical film genre vocabulary.
 * Never write these strings to scenarios, search filters, IDs or persistence.
 * Unrecognised genres deliberately retain their canonical spelling.
 */
export const CANONICAL_FILM_GENRES = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
  "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "History",
  "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller",
  "War", "Western",
] as const;

type FilmGenre = (typeof CANONICAL_FILM_GENRES)[number];

const FILM_GENRE_PRESENTATION: Readonly<Record<Exclude<FilmWorkLanguage, "en">, Readonly<Record<FilmGenre, string>>>> = {
  nb: {
    Action: "Actionfilm", Adventure: "Eventyr", Animation: "Animasjon",
    Biography: "Biografi", Comedy: "Komedie", Crime: "Krim",
    Documentary: "Dokumentar", Drama: "Drama", Family: "Familie",
    Fantasy: "Fantasy", "Film-Noir": "Film noir", History: "Historisk",
    Horror: "Skrekk", Music: "Musikk", Mystery: "Mysterium",
    Romance: "Romantikk", "Sci-Fi": "Science fiction", Sport: "Sport",
    Thriller: "Thriller", War: "Krig", Western: "Western",
  },
  fr: {
    Action: "Action", Adventure: "Aventure", Animation: "Animation",
    Biography: "Biographie", Comedy: "Comédie", Crime: "Policier",
    Documentary: "Documentaire", Drama: "Drame", Family: "Famille",
    Fantasy: "Fantastique", "Film-Noir": "Film noir", History: "Historique",
    Horror: "Horreur", Music: "Musique", Mystery: "Mystère",
    Romance: "Romance", "Sci-Fi": "Science-fiction", Sport: "Sport",
    Thriller: "Thriller", War: "Guerre", Western: "Western",
  },
  pt: {
    Action: "Ação", Adventure: "Aventura", Animation: "Animação",
    Biography: "Biografia", Comedy: "Comédia", Crime: "Crime",
    Documentary: "Documentário", Drama: "Drama", Family: "Família",
    Fantasy: "Fantasia", "Film-Noir": "Film noir", History: "Histórico",
    Horror: "Terror", Music: "Música", Mystery: "Mistério",
    Romance: "Romance", "Sci-Fi": "Ficção científica", Sport: "Desporto",
    Thriller: "Suspense", War: "Guerra", Western: "Faroeste",
  },
};

export function presentFilmGenreLabel(language: FilmWorkLanguage, canonical: string): string {
  if (language === "en") return canonical;
  const labels = FILM_GENRE_PRESENTATION[language];
  return Object.prototype.hasOwnProperty.call(labels, canonical)
    ? labels[canonical as FilmGenre]
    : canonical;
}
