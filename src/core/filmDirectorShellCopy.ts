import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { FilmverketSection } from "./filmverketRoutes.js";

export const FILM_DIRECTOR_SHELL_NAV_IDS = [
  "home",
  "producer",
  "atlas",
  "director",
  "school",
  "history",
  "research",
] as const satisfies readonly FilmverketSection[];

export type FilmDirectorShellCopy = {
  readonly navAria: string;
  readonly navLabels: Readonly<Record<FilmverketSection, string>>;
  readonly noFilmsAvailable: string;
  readonly unknownFilmAddress: string;
  readonly filmNotFound: string;
  readonly noReferenceMatchesPrefix: string;
  readonly openDirector: string;
  readonly footerDetail: string;
  readonly documentTitle: (filmTitle: string | undefined) => string;
};

function filmDirectorDocumentTitle(filmTitle: string | undefined): string {
  return filmTitle ? `${filmTitle} · Film Director · FilmWork` : "Film Director · FilmWork";
}

export const FILM_DIRECTOR_SHELL_COPY: Record<FilmWorkLanguage, FilmDirectorShellCopy> = {
  en: {
    navAria: "FilmWork sections",
    navLabels: {
      home: "Front page",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Research",
    },
    noFilmsAvailable: "No films are available.",
    unknownFilmAddress: "Unknown film address",
    filmNotFound: "Film not found",
    noReferenceMatchesPrefix: "No Film Director reference matches",
    openDirector: "Open Film Director",
    footerDetail: "Project · scenes · directing briefs · shot cards",
    documentTitle: filmDirectorDocumentTitle,
  },
  nb: {
    navAria: "FilmWork-seksjoner",
    navLabels: {
      home: "Forside",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Forskning",
    },
    noFilmsAvailable: "Ingen filmer er tilgjengelige.",
    unknownFilmAddress: "Ukjent filmadresse",
    filmNotFound: "Fant ikke filmen",
    noReferenceMatchesPrefix: "Ingen Film Director-referanse samsvarer med",
    openDirector: "Åpne Film Director",
    footerDetail: "Prosjekt · scener · regibriefer · shot cards",
    documentTitle: filmDirectorDocumentTitle,
  },
  fr: {
    navAria: "Sections FilmWork",
    navLabels: {
      home: "Accueil",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Recherche",
    },
    noFilmsAvailable: "Aucun film n’est disponible.",
    unknownFilmAddress: "Adresse de film inconnue",
    filmNotFound: "Film introuvable",
    noReferenceMatchesPrefix: "Aucune référence Film Director ne correspond à",
    openDirector: "Ouvrir Film Director",
    footerDetail: "Projet · scènes · briefs de réalisation · fiches de plan",
    documentTitle: filmDirectorDocumentTitle,
  },
  pt: {
    navAria: "Secções do FilmWork",
    navLabels: {
      home: "Início",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Investigação",
    },
    noFilmsAvailable: "Não há filmes disponíveis.",
    unknownFilmAddress: "Endereço de filme desconhecido",
    filmNotFound: "Filme não encontrado",
    noReferenceMatchesPrefix: "Nenhuma referência do Film Director corresponde a",
    openDirector: "Abrir Film Director",
    footerDetail: "Projeto · cenas · briefs de realização · fichas de plano",
    documentTitle: filmDirectorDocumentTitle,
  },
};
