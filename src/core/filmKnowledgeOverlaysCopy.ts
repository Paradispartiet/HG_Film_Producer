import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const FILM_RESEARCH_STATUS_IDS = ["all", "needs_research", "seeded", "verified"] as const;
export type FilmResearchStatusDisplayId = (typeof FILM_RESEARCH_STATUS_IDS)[number];

export const FILM_CRAFT_DOMAIN_IDS = ["all", "screenplay", "cinematography", "editing", "sound"] as const;
export type FilmCraftDomainDisplayId = (typeof FILM_CRAFT_DOMAIN_IDS)[number];

type FilmKnowledgeOverlaysCopy = {
  readonly research: {
    readonly triggerKicker: string;
    readonly triggerTitle: string;
    readonly dialogAria: string;
    readonly kicker: string;
    readonly heading: string;
    readonly intro: string;
    readonly closeAria: string;
    readonly summaryAria: string;
    readonly totalCatalogue: string;
    readonly films: string;
    readonly verified: string;
    readonly seeded: string;
    readonly needsResearch: string;
    readonly completePercent: (percent: number) => string;
    readonly provisional: string;
    readonly priorityQueue: string;
    readonly verifiedProgress: (percent: number) => string;
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly filterAria: string;
    readonly statusLabels: Readonly<Record<FilmResearchStatusDisplayId, string>>;
    readonly queueSummary: (count: number) => string;
    readonly directorNotRegistered: string;
    readonly craftStatements: (count: number) => string;
    readonly learningGoals: (count: number) => string;
    readonly noResults: string;
    readonly actions: {
      readonly filmAtlas: "Film Atlas";
      readonly filmDirector: "Film Director";
    };
  };
  readonly craft: {
    readonly triggerKicker: string;
    readonly triggerTitle: string;
    readonly dialogAria: string;
    readonly kicker: string;
    readonly heading: string;
    readonly intro: string;
    readonly closeAria: string;
    readonly filmLens: string;
    readonly allRegisteredTechniques: string;
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly filterAria: string;
    readonly domainLabels: Readonly<Record<FilmCraftDomainDisplayId, string>>;
    readonly techniquesMatched: (count: number, filmTitle: string) => string;
    readonly techniquesTotal: (count: number, total: number) => string;
    readonly analysisQuestion: string;
    readonly productionUse: string;
    readonly noResults: string;
  };
};

export const FILM_KNOWLEDGE_OVERLAYS_COPY = {
  en: {
    research: {
      triggerKicker: "Editorial system",
      triggerTitle: "Research control",
      dialogAria: "Film research control room",
      kicker: "FilmWork editorial control",
      heading: "Research control room",
      intro: "Keep verified film knowledge separate from provisional seeds and unfinished research. Every row now opens the same film directly in Film Atlas or Film Director.",
      closeAria: "Close research control room",
      summaryAria: "Research status summary",
      totalCatalogue: "Total catalogue",
      films: "films",
      verified: "Verified",
      seeded: "Seeded",
      needsResearch: "Needs research",
      completePercent: (percent) => `${percent}% complete`,
      provisional: "provisional",
      priorityQueue: "priority queue",
      verifiedProgress: (percent) => `${percent}% verified`,
      searchLabel: "Search film, year, or director",
      searchPlaceholder: "Example: 1970, Bergman, Bicycle…",
      filterAria: "Filter research status",
      statusLabels: { all: "All", needs_research: "Needs research", seeded: "Seeded", verified: "Verified" },
      queueSummary: (count) => `${count} films shown · unfinished work appears first`,
      directorNotRegistered: "Director not registered",
      craftStatements: (count) => `${count} craft statements`,
      learningGoals: (count) => `${count} learning goals`,
      noResults: "No films match this research filter.",
      actions: { filmAtlas: "Film Atlas", filmDirector: "Film Director" },
    },
    craft: {
      triggerKicker: "Film science",
      triggerTitle: "Craft library",
      dialogAria: "Film craft library",
      kicker: "Filmverket knowledge system",
      heading: "Craft library",
      intro: "Formal techniques described as observable construction—not vague style labels.",
      closeAria: "Close craft library",
      filmLens: "Film lens",
      allRegisteredTechniques: "All registered techniques",
      searchLabel: "Search technique or function",
      searchPlaceholder: "Example: silence, blocking, rhythm…",
      filterAria: "Filter by craft domain",
      domainLabels: { all: "All", screenplay: "Screenplay", cinematography: "Image", editing: "Editing", sound: "Sound" },
      techniquesMatched: (count, filmTitle) => `${count} techniques matched to ${filmTitle}`,
      techniquesTotal: (count, total) => `${count} of ${total} techniques`,
      analysisQuestion: "Analysis question",
      productionUse: "Production use",
      noResults: "No techniques match this film and filter yet.",
    },
  },
  nb: {
    research: {
      triggerKicker: "Redaksjonelt system",
      triggerTitle: "Research-kontroll",
      dialogAria: "Kontrollrom for filmresearch",
      kicker: "FilmWork redaksjonskontroll",
      heading: "Kontrollrom for research",
      intro: "Hold verifisert filmkunnskap adskilt fra foreløpige utgangspunkt og uferdig research. Hver rad åpner nå den samme filmen direkte i Film Atlas eller Film Director.",
      closeAria: "Lukk kontrollrom for research",
      summaryAria: "Oppsummering av researchstatus",
      totalCatalogue: "Total katalog",
      films: "filmer",
      verified: "Verifisert",
      seeded: "Foreløpig",
      needsResearch: "Trenger research",
      completePercent: (percent) => `${percent}% fullført`,
      provisional: "foreløpig",
      priorityQueue: "prioritetskø",
      verifiedProgress: (percent) => `${percent}% verifisert`,
      searchLabel: "Søk etter film, år eller regissør",
      searchPlaceholder: "Eksempel: 1970, Bergman, Bicycle…",
      filterAria: "Filtrer researchstatus",
      statusLabels: { all: "Alle", needs_research: "Trenger research", seeded: "Foreløpig", verified: "Verifisert" },
      queueSummary: (count) => `${count} filmer vises · uferdig arbeid vises først`,
      directorNotRegistered: "Regissør ikke registrert",
      craftStatements: (count) => `${count} fagutsagn`,
      learningGoals: (count) => `${count} læringsmål`,
      noResults: "Ingen filmer samsvarer med dette researchfilteret.",
      actions: { filmAtlas: "Film Atlas", filmDirector: "Film Director" },
    },
    craft: {
      triggerKicker: "Filmvitenskap",
      triggerTitle: "Fagbibliotek",
      dialogAria: "Bibliotek for filmfaglige teknikker",
      kicker: "Filmverkets kunnskapssystem",
      heading: "Fagbibliotek",
      intro: "Formelle teknikker beskrevet som observerbar konstruksjon – ikke vage stilmerkelapper.",
      closeAria: "Lukk fagbibliotek",
      filmLens: "Filmfilter",
      allRegisteredTechniques: "Alle registrerte teknikker",
      searchLabel: "Søk etter teknikk eller funksjon",
      searchPlaceholder: "Eksempel: stillhet, blocking, rytme…",
      filterAria: "Filtrer etter fagområde",
      domainLabels: { all: "Alle", screenplay: "Manus", cinematography: "Bilde", editing: "Klipp", sound: "Lyd" },
      techniquesMatched: (count, filmTitle) => `${count} teknikker knyttet til ${filmTitle}`,
      techniquesTotal: (count, total) => `${count} av ${total} teknikker`,
      analysisQuestion: "Analysespørsmål",
      productionUse: "Bruk i produksjon",
      noResults: "Ingen teknikker samsvarer med denne filmen og filteret ennå.",
    },
  },
  fr: {
    research: {
      triggerKicker: "Système éditorial",
      triggerTitle: "Contrôle de la recherche",
      dialogAria: "Salle de contrôle de la recherche cinéma",
      kicker: "Contrôle éditorial FilmWork",
      heading: "Salle de contrôle de la recherche",
      intro: "Distinguez les connaissances cinématographiques vérifiées des bases provisoires et des recherches inachevées. Chaque ligne ouvre désormais directement le même film dans Film Atlas ou Film Director.",
      closeAria: "Fermer la salle de contrôle de la recherche",
      summaryAria: "Résumé du statut de la recherche",
      totalCatalogue: "Catalogue total",
      films: "films",
      verified: "Vérifiés",
      seeded: "Provisoires",
      needsResearch: "Recherche nécessaire",
      completePercent: (percent) => `${percent}% terminé`,
      provisional: "provisoire",
      priorityQueue: "file prioritaire",
      verifiedProgress: (percent) => `${percent}% vérifié`,
      searchLabel: "Rechercher un film, une année ou une réalisation",
      searchPlaceholder: "Exemple : 1970, Bergman, Bicycle…",
      filterAria: "Filtrer le statut de la recherche",
      statusLabels: { all: "Tous", needs_research: "Recherche nécessaire", seeded: "Provisoire", verified: "Vérifié" },
      queueSummary: (count) => `${count} films affichés · les travaux inachevés apparaissent en premier`,
      directorNotRegistered: "Réalisation non renseignée",
      craftStatements: (count) => `${count} observations techniques`,
      learningGoals: (count) => `${count} objectifs d’apprentissage`,
      noResults: "Aucun film ne correspond à ce filtre de recherche.",
      actions: { filmAtlas: "Film Atlas", filmDirector: "Film Director" },
    },
    craft: {
      triggerKicker: "Études cinématographiques",
      triggerTitle: "Bibliothèque technique",
      dialogAria: "Bibliothèque des techniques cinématographiques",
      kicker: "Système de connaissances Filmverket",
      heading: "Bibliothèque technique",
      intro: "Des techniques formelles décrites comme des constructions observables, et non comme de vagues étiquettes de style.",
      closeAria: "Fermer la bibliothèque technique",
      filmLens: "Filtre par film",
      allRegisteredTechniques: "Toutes les techniques enregistrées",
      searchLabel: "Rechercher une technique ou une fonction",
      searchPlaceholder: "Exemple : silence, blocking, rythme…",
      filterAria: "Filtrer par domaine technique",
      domainLabels: { all: "Tous", screenplay: "Scénario", cinematography: "Image", editing: "Montage", sound: "Son" },
      techniquesMatched: (count, filmTitle) => `${count} techniques associées à ${filmTitle}`,
      techniquesTotal: (count, total) => `${count} techniques sur ${total}`,
      analysisQuestion: "Question d’analyse",
      productionUse: "Usage en production",
      noResults: "Aucune technique ne correspond encore à ce film et à ce filtre.",
    },
  },
  pt: {
    research: {
      triggerKicker: "Sistema editorial",
      triggerTitle: "Controlo de pesquisa",
      dialogAria: "Sala de controlo da pesquisa de cinema",
      kicker: "Controlo editorial FilmWork",
      heading: "Sala de controlo da pesquisa",
      intro: "Mantenha o conhecimento cinematográfico verificado separado das bases provisórias e da pesquisa inacabada. Cada linha abre agora diretamente o mesmo filme no Film Atlas ou no Film Director.",
      closeAria: "Fechar a sala de controlo da pesquisa",
      summaryAria: "Resumo do estado da pesquisa",
      totalCatalogue: "Catálogo total",
      films: "filmes",
      verified: "Verificados",
      seeded: "Provisórios",
      needsResearch: "Precisa de pesquisa",
      completePercent: (percent) => `${percent}% concluído`,
      provisional: "provisório",
      priorityQueue: "fila prioritária",
      verifiedProgress: (percent) => `${percent}% verificado`,
      searchLabel: "Pesquisar filme, ano ou realização",
      searchPlaceholder: "Exemplo: 1970, Bergman, Bicycle…",
      filterAria: "Filtrar estado da pesquisa",
      statusLabels: { all: "Todos", needs_research: "Precisa de pesquisa", seeded: "Provisório", verified: "Verificado" },
      queueSummary: (count) => `${count} filmes apresentados · o trabalho inacabado aparece primeiro`,
      directorNotRegistered: "Realização não registada",
      craftStatements: (count) => `${count} observações técnicas`,
      learningGoals: (count) => `${count} objetivos de aprendizagem`,
      noResults: "Nenhum filme corresponde a este filtro de pesquisa.",
      actions: { filmAtlas: "Film Atlas", filmDirector: "Film Director" },
    },
    craft: {
      triggerKicker: "Estudos de cinema",
      triggerTitle: "Biblioteca técnica",
      dialogAria: "Biblioteca de técnicas cinematográficas",
      kicker: "Sistema de conhecimento Filmverket",
      heading: "Biblioteca técnica",
      intro: "Técnicas formais descritas como construção observável, não como rótulos vagos de estilo.",
      closeAria: "Fechar a biblioteca técnica",
      filmLens: "Filtro por filme",
      allRegisteredTechniques: "Todas as técnicas registadas",
      searchLabel: "Pesquisar técnica ou função",
      searchPlaceholder: "Exemplo: silêncio, blocking, ritmo…",
      filterAria: "Filtrar por domínio técnico",
      domainLabels: { all: "Todos", screenplay: "Argumento", cinematography: "Imagem", editing: "Montagem", sound: "Som" },
      techniquesMatched: (count, filmTitle) => `${count} técnicas associadas a ${filmTitle}`,
      techniquesTotal: (count, total) => `${count} de ${total} técnicas`,
      analysisQuestion: "Questão de análise",
      productionUse: "Uso em produção",
      noResults: "Nenhuma técnica corresponde ainda a este filme e filtro.",
    },
  },
} as const satisfies Record<FilmWorkLanguage, FilmKnowledgeOverlaysCopy>;

export function getFilmResearchStatusLabel(language: FilmWorkLanguage, status: FilmResearchStatusDisplayId) {
  return FILM_KNOWLEDGE_OVERLAYS_COPY[language].research.statusLabels[status];
}

export function getFilmCraftDomainLabel(language: FilmWorkLanguage, domain: FilmCraftDomainDisplayId) {
  return FILM_KNOWLEDGE_OVERLAYS_COPY[language].craft.domainLabels[domain];
}
