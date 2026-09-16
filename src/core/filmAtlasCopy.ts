import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const FILM_ATLAS_TAB_IDS = ["analysis", "timeline"] as const;
export type FilmAtlasTabId = (typeof FILM_ATLAS_TAB_IDS)[number];

export const FILM_ATLAS_SORT_IDS = ["catalogue", "year", "title"] as const;
export type FilmAtlasSortId = (typeof FILM_ATLAS_SORT_IDS)[number];

export const FILM_ATLAS_VERIFICATION_IDS = ["verified", "seeded", "needs_research"] as const;
export type FilmAtlasVerificationId = (typeof FILM_ATLAS_VERIFICATION_IDS)[number];

export const FILM_ATLAS_CRAFT_LENS_IDS = ["screenplay", "cinematography", "editing", "sound"] as const;
export type FilmAtlasCraftLensId = (typeof FILM_ATLAS_CRAFT_LENS_IDS)[number];

type FilmAtlasCopy = {
  readonly productTitle: "Film Atlas";
  readonly noFilmsAvailable: string;
  readonly documentTimeline: string;
  readonly notFound: {
    readonly kicker: string;
    readonly title: string;
    readonly description: (filmSlug: string) => string;
    readonly openAtlas: string;
  };
  readonly pageKicker: string;
  readonly pageIntro: string;
  readonly viewsAria: string;
  readonly tabs: Readonly<Record<FilmAtlasTabId, string>>;
  readonly controls: {
    readonly search: string;
    readonly searchPlaceholder: string;
    readonly genre: string;
    readonly allGenres: string;
    readonly order: string;
  };
  readonly sortOptions: Readonly<Record<FilmAtlasSortId, string>>;
  readonly resultsShown: (count: number) => string;
  readonly directorNotRegistered: string;
  readonly noResults: string;
  readonly runtimeNotRegistered: string;
  readonly catalogueRating: string;
  readonly verificationLabels: Readonly<Record<FilmAtlasVerificationId, string>>;
  readonly analysis: {
    readonly genreConstruction: string;
    readonly toneAndAffect: string;
    readonly craftLenses: Readonly<Record<FilmAtlasCraftLensId, string>>;
    readonly learningKicker: string;
    readonly learningGoals: string;
    readonly historyKicker: string;
    readonly decadeCinema: (decade: string) => string;
    readonly cataloguePosition: (position: number, total: number) => string;
    readonly previous: string;
    readonly next: string;
    readonly startOfCatalogue: string;
    readonly endOfCatalogue: string;
    readonly previousFilm: (filmLabel: string) => string;
    readonly nextFilm: (filmLabel: string) => string;
  };
  readonly actions: {
    readonly directorLab: string;
    readonly productionCases: "Production Cases";
    readonly openProductionCases: string;
    readonly copyFilmLink: string;
    readonly linkCopied: string;
  };
  readonly timeline: {
    readonly kicker: string;
    readonly title: string;
    readonly intro: string;
    readonly filmCount: (count: number) => string;
    readonly openAnalysis: string;
  };
};

export const FILM_ATLAS_COPY = {
  en: {
    productTitle: "Film Atlas",
    noFilmsAvailable: "No films are available yet.",
    documentTimeline: "Timeline",
    notFound: {
      kicker: "Unknown film address",
      title: "Film not found",
      description: (filmSlug) => `No catalogue film matches ${filmSlug}. The address may be outdated or incomplete.`,
      openAtlas: "Open Film Atlas",
    },
    pageKicker: "Film construction, catalogue and chronology",
    pageIntro: "Analyse individual films or move through the same catalogue chronologically. Film History is now the separate textbook layer.",
    viewsAria: "Film Atlas views",
    tabs: { analysis: "Film analysis", timeline: "Timeline" },
    controls: { search: "Search", searchPlaceholder: "Film, director, genre…", genre: "Genre", allGenres: "All genres", order: "Order" },
    sortOptions: { catalogue: "Catalogue", year: "Year", title: "Title" },
    resultsShown: (count) => `${count} films shown`,
    directorNotRegistered: "Director not registered",
    noResults: "No films match these filters.",
    runtimeNotRegistered: "Runtime not registered",
    catalogueRating: "Catalogue rating",
    verificationLabels: { verified: "Research verified", seeded: "Seeded analysis", needs_research: "Research enrichment pending" },
    analysis: {
      genreConstruction: "Genre construction",
      toneAndAffect: "Tone and affect",
      craftLenses: {
        screenplay: "Screenplay and dramaturgy",
        cinematography: "Cinematography and mise-en-scène",
        editing: "Editing and temporal construction",
        sound: "Sound, music, dialogue, and silence",
      },
      learningKicker: "What this film can teach",
      learningGoals: "Film-science learning goals",
      historyKicker: "Historical placement inside the catalogue",
      decadeCinema: (decade) => `${decade} cinema`,
      cataloguePosition: (position, total) => `This work is film ${position} of ${total} in the current chronological catalogue.`,
      previous: "Previous",
      next: "Next",
      startOfCatalogue: "Start of catalogue",
      endOfCatalogue: "End of catalogue",
      previousFilm: (filmLabel) => filmLabel,
      nextFilm: (filmLabel) => filmLabel,
    },
    actions: {
      directorLab: "Open in Director Lab",
      productionCases: "Production Cases",
      openProductionCases: "Open Production Cases",
      copyFilmLink: "Copy film link",
      linkCopied: "Link copied",
    },
    timeline: {
      kicker: "Chronological catalogue",
      title: "Timeline",
      intro: "The full Film Atlas catalogue ordered by year. Select any film to return to its permanent analysis page.",
      filmCount: (count) => `${count} films`,
      openAnalysis: "Open analysis →",
    },
  },
  nb: {
    productTitle: "Film Atlas",
    noFilmsAvailable: "Ingen filmer er tilgjengelige ennå.",
    documentTimeline: "Tidslinje",
    notFound: {
      kicker: "Ukjent filmadresse",
      title: "Fant ikke filmen",
      description: (filmSlug) => `Ingen film i katalogen samsvarer med ${filmSlug}. Adressen kan være utdatert eller ufullstendig.`,
      openAtlas: "Åpne Film Atlas",
    },
    pageKicker: "Filmkonstruksjon, katalog og kronologi",
    pageIntro: "Analyser enkeltfilmer eller gå kronologisk gjennom den samme katalogen. Film History er nå det separate læreboklaget.",
    viewsAria: "Visninger i Film Atlas",
    tabs: { analysis: "Filmanalyse", timeline: "Tidslinje" },
    controls: { search: "Søk", searchPlaceholder: "Film, regissør, sjanger…", genre: "Sjanger", allGenres: "Alle sjangre", order: "Rekkefølge" },
    sortOptions: { catalogue: "Katalog", year: "År", title: "Tittel" },
    resultsShown: (count) => `${count} filmer vises`,
    directorNotRegistered: "Regissør ikke registrert",
    noResults: "Ingen filmer passer disse filtrene.",
    runtimeNotRegistered: "Spilletid ikke registrert",
    catalogueRating: "Katalogvurdering",
    verificationLabels: { verified: "Forskning verifisert", seeded: "Grunnanalyse", needs_research: "Forskningsberikelse gjenstår" },
    analysis: {
      genreConstruction: "Sjangerkonstruksjon",
      toneAndAffect: "Tone og affekt",
      craftLenses: {
        screenplay: "Manus og dramaturgi",
        cinematography: "Foto og mise-en-scène",
        editing: "Klipp og temporal konstruksjon",
        sound: "Lyd, musikk, dialog og stillhet",
      },
      learningKicker: "Hva denne filmen kan lære deg",
      learningGoals: "Filmfaglige læringsmål",
      historyKicker: "Historisk plassering i katalogen",
      decadeCinema: (decade) => `Film fra ${decade}`,
      cataloguePosition: (position, total) => `Dette verket er film ${position} av ${total} i den nåværende kronologiske katalogen.`,
      previous: "Forrige",
      next: "Neste",
      startOfCatalogue: "Starten av katalogen",
      endOfCatalogue: "Slutten av katalogen",
      previousFilm: (filmLabel) => filmLabel,
      nextFilm: (filmLabel) => filmLabel,
    },
    actions: {
      directorLab: "Åpne i Director Lab",
      productionCases: "Production Cases",
      openProductionCases: "Åpne Production Cases",
      copyFilmLink: "Kopier filmlenke",
      linkCopied: "Lenke kopiert",
    },
    timeline: {
      kicker: "Kronologisk katalog",
      title: "Tidslinje",
      intro: "Hele Film Atlas-katalogen sortert etter år. Velg en film for å gå tilbake til den permanente analysesiden.",
      filmCount: (count) => `${count} ${count === 1 ? "film" : "filmer"}`,
      openAnalysis: "Åpne analyse →",
    },
  },
  fr: {
    productTitle: "Film Atlas",
    noFilmsAvailable: "Aucun film n’est encore disponible.",
    documentTimeline: "Chronologie",
    notFound: {
      kicker: "Adresse de film inconnue",
      title: "Film introuvable",
      description: (filmSlug) => `Aucun film du catalogue ne correspond à ${filmSlug}. L’adresse est peut-être obsolète ou incomplète.`,
      openAtlas: "Ouvrir Film Atlas",
    },
    pageKicker: "Construction filmique, catalogue et chronologie",
    pageIntro: "Analysez des films individuellement ou parcourez le même catalogue chronologiquement. Film History constitue désormais la couche de manuel distincte.",
    viewsAria: "Vues de Film Atlas",
    tabs: { analysis: "Analyse du film", timeline: "Chronologie" },
    controls: { search: "Rechercher", searchPlaceholder: "Film, réalisation, genre…", genre: "Genre", allGenres: "Tous les genres", order: "Ordre" },
    sortOptions: { catalogue: "Catalogue", year: "Année", title: "Titre" },
    resultsShown: (count) => `${count} films affichés`,
    directorNotRegistered: "Réalisation non renseignée",
    noResults: "Aucun film ne correspond à ces filtres.",
    runtimeNotRegistered: "Durée non renseignée",
    catalogueRating: "Note du catalogue",
    verificationLabels: { verified: "Recherche vérifiée", seeded: "Analyse initiale", needs_research: "Enrichissement de la recherche en attente" },
    analysis: {
      genreConstruction: "Construction du genre",
      toneAndAffect: "Ton et affect",
      craftLenses: {
        screenplay: "Scénario et dramaturgie",
        cinematography: "Image et mise en scène",
        editing: "Montage et construction temporelle",
        sound: "Son, musique, dialogue et silence",
      },
      learningKicker: "Ce que ce film peut enseigner",
      learningGoals: "Objectifs d’apprentissage en études cinématographiques",
      historyKicker: "Position historique dans le catalogue",
      decadeCinema: (decade) => `Cinéma des ${decade}`,
      cataloguePosition: (position, total) => `Cette œuvre est le film ${position} sur ${total} dans le catalogue chronologique actuel.`,
      previous: "Précédent",
      next: "Suivant",
      startOfCatalogue: "Début du catalogue",
      endOfCatalogue: "Fin du catalogue",
      previousFilm: (filmLabel) => filmLabel,
      nextFilm: (filmLabel) => filmLabel,
    },
    actions: {
      directorLab: "Ouvrir dans Director Lab",
      productionCases: "Production Cases",
      openProductionCases: "Ouvrir Production Cases",
      copyFilmLink: "Copier le lien du film",
      linkCopied: "Lien copié",
    },
    timeline: {
      kicker: "Catalogue chronologique",
      title: "Chronologie",
      intro: "L’ensemble du catalogue Film Atlas classé par année. Sélectionnez un film pour revenir à sa page d’analyse permanente.",
      filmCount: (count) => `${count} ${count === 1 ? "film" : "films"}`,
      openAnalysis: "Ouvrir l’analyse →",
    },
  },
  pt: {
    productTitle: "Film Atlas",
    noFilmsAvailable: "Ainda não há filmes disponíveis.",
    documentTimeline: "Cronologia",
    notFound: {
      kicker: "Endereço de filme desconhecido",
      title: "Filme não encontrado",
      description: (filmSlug) => `Nenhum filme do catálogo corresponde a ${filmSlug}. O endereço pode estar desatualizado ou incompleto.`,
      openAtlas: "Abrir Film Atlas",
    },
    pageKicker: "Construção cinematográfica, catálogo e cronologia",
    pageIntro: "Analise filmes individualmente ou percorra o mesmo catálogo por ordem cronológica. Film History é agora a camada de manual separada.",
    viewsAria: "Vistas do Film Atlas",
    tabs: { analysis: "Análise do filme", timeline: "Cronologia" },
    controls: { search: "Pesquisar", searchPlaceholder: "Filme, realização, género…", genre: "Género", allGenres: "Todos os géneros", order: "Ordem" },
    sortOptions: { catalogue: "Catálogo", year: "Ano", title: "Título" },
    resultsShown: (count) => `${count} filmes apresentados`,
    directorNotRegistered: "Realização não registada",
    noResults: "Nenhum filme corresponde a estes filtros.",
    runtimeNotRegistered: "Duração não registada",
    catalogueRating: "Classificação do catálogo",
    verificationLabels: { verified: "Pesquisa verificada", seeded: "Análise inicial", needs_research: "Enriquecimento da pesquisa pendente" },
    analysis: {
      genreConstruction: "Construção de género",
      toneAndAffect: "Tom e afeto",
      craftLenses: {
        screenplay: "Argumento e dramaturgia",
        cinematography: "Fotografia e mise-en-scène",
        editing: "Montagem e construção temporal",
        sound: "Som, música, diálogo e silêncio",
      },
      learningKicker: "O que este filme pode ensinar",
      learningGoals: "Objetivos de aprendizagem em estudos de cinema",
      historyKicker: "Posição histórica no catálogo",
      decadeCinema: (decade) => `Cinema dos ${decade}`,
      cataloguePosition: (position, total) => `Esta obra é o filme ${position} de ${total} no catálogo cronológico atual.`,
      previous: "Anterior",
      next: "Seguinte",
      startOfCatalogue: "Início do catálogo",
      endOfCatalogue: "Fim do catálogo",
      previousFilm: (filmLabel) => filmLabel,
      nextFilm: (filmLabel) => filmLabel,
    },
    actions: {
      directorLab: "Abrir no Director Lab",
      productionCases: "Production Cases",
      openProductionCases: "Abrir Production Cases",
      copyFilmLink: "Copiar ligação do filme",
      linkCopied: "Ligação copiada",
    },
    timeline: {
      kicker: "Catálogo cronológico",
      title: "Cronologia",
      intro: "O catálogo completo do Film Atlas ordenado por ano. Selecione um filme para regressar à respetiva página de análise permanente.",
      filmCount: (count) => `${count} ${count === 1 ? "filme" : "filmes"}`,
      openAnalysis: "Abrir análise →",
    },
  },
} as const satisfies Record<FilmWorkLanguage, FilmAtlasCopy>;

export function getFilmAtlasVerificationLabel(language: FilmWorkLanguage, status: FilmAtlasVerificationId) {
  return FILM_ATLAS_COPY[language].verificationLabels[status];
}
