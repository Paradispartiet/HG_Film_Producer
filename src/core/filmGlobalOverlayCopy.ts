import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const FILM_RESEARCH_STATUS_FILTER_IDS = ["all", "needs_research", "seeded", "verified"] as const;
export type FilmResearchStatusFilterId = (typeof FILM_RESEARCH_STATUS_FILTER_IDS)[number];

export const FILM_CRAFT_DOMAIN_FILTER_IDS = ["all", "screenplay", "cinematography", "editing", "sound"] as const;
export type FilmCraftDomainFilterId = (typeof FILM_CRAFT_DOMAIN_FILTER_IDS)[number];

type FilmGlobalOverlayCopy = {
  readonly research: {
    readonly triggerEyebrow: string;
    readonly triggerTitle: string;
    readonly dialogAria: string;
    readonly headerEyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly closeAria: string;
    readonly summaryAria: string;
    readonly totalCatalogue: string;
    readonly films: string;
    readonly verified: string;
    readonly complete: (percent: number) => string;
    readonly seeded: string;
    readonly provisional: string;
    readonly needsResearch: string;
    readonly priorityQueue: string;
    readonly verifiedAria: (percent: number) => string;
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly filterAria: string;
    readonly statusLabels: Readonly<Record<FilmResearchStatusFilterId, string>>;
    readonly queueSummary: (count: number) => string;
    readonly directorNotRegistered: string;
    readonly craftStatements: (count: number) => string;
    readonly learningGoals: (count: number) => string;
    readonly atlasProduct: "Film Atlas";
    readonly directorProduct: "Film Director";
    readonly empty: string;
  };
  readonly craft: {
    readonly triggerEyebrow: string;
    readonly triggerTitle: string;
    readonly dialogAria: string;
    readonly headerEyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly closeAria: string;
    readonly filmLens: string;
    readonly allRegisteredTechniques: string;
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly filterAria: string;
    readonly domainLabels: Readonly<Record<FilmCraftDomainFilterId, string>>;
    readonly matchedToFilm: (count: number, filmTitle: string) => string;
    readonly ofTechniques: (count: number, total: number) => string;
    readonly analysisQuestion: string;
    readonly productionUse: string;
    readonly empty: string;
  };
};

export const FILM_GLOBAL_OVERLAY_COPY = {
  en: {
    research: {
      triggerEyebrow: "Editorial system",
      triggerTitle: "Research control",
      dialogAria: "Film research control room",
      headerEyebrow: "FilmWork editorial control",
      title: "Research control room",
      intro: "Keep verified film knowledge separate from provisional seeds and unfinished research. Every row now opens the same film directly in Film Atlas or Film Director.",
      closeAria: "Close research control room",
      summaryAria: "Research status summary",
      totalCatalogue: "Total catalogue",
      films: "films",
      verified: "Verified",
      complete: (percent) => `${percent}% complete`,
      seeded: "Seeded",
      provisional: "provisional",
      needsResearch: "Needs research",
      priorityQueue: "priority queue",
      verifiedAria: (percent) => `${percent}% verified`,
      searchLabel: "Search film, year, or director",
      searchPlaceholder: "Example: 1970, Bergman, Bicycle…",
      filterAria: "Filter research status",
      statusLabels: { all: "All", needs_research: "Needs research", seeded: "Seeded", verified: "Verified" },
      queueSummary: (count) => `${count} films shown · unfinished work appears first`,
      directorNotRegistered: "Director not registered",
      craftStatements: (count) => `${count} craft statements`,
      learningGoals: (count) => `${count} learning goals`,
      atlasProduct: "Film Atlas",
      directorProduct: "Film Director",
      empty: "No films match this research filter.",
    },
    craft: {
      triggerEyebrow: "Film science",
      triggerTitle: "Craft library",
      dialogAria: "Film craft library",
      headerEyebrow: "Filmverket knowledge system",
      title: "Craft library",
      intro: "Formal techniques described as observable construction—not vague style labels.",
      closeAria: "Close craft library",
      filmLens: "Film lens",
      allRegisteredTechniques: "All registered techniques",
      searchLabel: "Search technique or function",
      searchPlaceholder: "Example: silence, blocking, rhythm…",
      filterAria: "Filter by craft domain",
      domainLabels: { all: "All", screenplay: "Screenplay", cinematography: "Image", editing: "Editing", sound: "Sound" },
      matchedToFilm: (count, filmTitle) => `${count} techniques matched to ${filmTitle}`,
      ofTechniques: (count, total) => `${count} of ${total} techniques`,
      analysisQuestion: "Analysis question",
      productionUse: "Production use",
      empty: "No techniques match this film and filter yet.",
    },
  },
  nb: {
    research: {
      triggerEyebrow: "Redaksjonelt system",
      triggerTitle: "Forskningskontroll",
      dialogAria: "Kontrollrom for filmforskning",
      headerEyebrow: "FilmWork redaksjonell kontroll",
      title: "Kontrollrom for forskning",
      intro: "Hold verifisert filmkunnskap adskilt fra foreløpige utkast og uferdig forskning. Hver rad åpner nå den samme filmen direkte i Film Atlas eller Film Director.",
      closeAria: "Lukk kontrollrom for forskning",
      summaryAria: "Oversikt over forskningsstatus",
      totalCatalogue: "Hele katalogen",
      films: "filmer",
      verified: "Verifisert",
      complete: (percent) => `${percent}% fullført`,
      seeded: "Grunnlagt",
      provisional: "foreløpig",
      needsResearch: "Trenger forskning",
      priorityQueue: "prioritetskø",
      verifiedAria: (percent) => `${percent}% verifisert`,
      searchLabel: "Søk etter film, år eller regissør",
      searchPlaceholder: "Eksempel: 1970, Bergman, Bicycle…",
      filterAria: "Filtrer forskningsstatus",
      statusLabels: { all: "Alle", needs_research: "Trenger forskning", seeded: "Grunnlagt", verified: "Verifisert" },
      queueSummary: (count) => `${count} filmer vises · uferdig arbeid kommer først`,
      directorNotRegistered: "Regissør ikke registrert",
      craftStatements: (count) => `${count} produksjonsfaglige utsagn`,
      learningGoals: (count) => `${count} læringsmål`,
      atlasProduct: "Film Atlas",
      directorProduct: "Film Director",
      empty: "Ingen filmer passer dette forskningsfilteret.",
    },
    craft: {
      triggerEyebrow: "Filmvitenskap",
      triggerTitle: "Håndverksbibliotek",
      dialogAria: "Bibliotek for filmhåndverk",
      headerEyebrow: "Filmverkets kunnskapssystem",
      title: "Håndverksbibliotek",
      intro: "Formelle teknikker beskrevet som observerbar konstruksjon – ikke vage stilmerkelapper.",
      closeAria: "Lukk håndverksbibliotek",
      filmLens: "Filmfilter",
      allRegisteredTechniques: "Alle registrerte teknikker",
      searchLabel: "Søk etter teknikk eller funksjon",
      searchPlaceholder: "Eksempel: stillhet, blokkering, rytme…",
      filterAria: "Filtrer etter håndverksområde",
      domainLabels: { all: "Alle", screenplay: "Manus", cinematography: "Bilde", editing: "Klipp", sound: "Lyd" },
      matchedToFilm: (count, filmTitle) => `${count} teknikker knyttet til ${filmTitle}`,
      ofTechniques: (count, total) => `${count} av ${total} teknikker`,
      analysisQuestion: "Analysespørsmål",
      productionUse: "Bruk i produksjon",
      empty: "Ingen teknikker passer denne filmen og dette filteret ennå.",
    },
  },
  fr: {
    research: {
      triggerEyebrow: "Système éditorial",
      triggerTitle: "Contrôle de la recherche",
      dialogAria: "Salle de contrôle de la recherche cinématographique",
      headerEyebrow: "Contrôle éditorial FilmWork",
      title: "Salle de contrôle de la recherche",
      intro: "Séparez les connaissances cinématographiques vérifiées des données provisoires et des recherches inachevées. Chaque ligne ouvre désormais le même film directement dans Film Atlas ou Film Director.",
      closeAria: "Fermer la salle de contrôle de la recherche",
      summaryAria: "Synthèse de l’état de la recherche",
      totalCatalogue: "Catalogue total",
      films: "films",
      verified: "Vérifiés",
      complete: (percent) => `${percent}% terminé`,
      seeded: "Initialisés",
      provisional: "provisoires",
      needsResearch: "Recherche nécessaire",
      priorityQueue: "file prioritaire",
      verifiedAria: (percent) => `${percent}% vérifié`,
      searchLabel: "Rechercher un film, une année ou une réalisation",
      searchPlaceholder: "Exemple : 1970, Bergman, Bicycle…",
      filterAria: "Filtrer par état de recherche",
      statusLabels: { all: "Tous", needs_research: "Recherche nécessaire", seeded: "Initialisé", verified: "Vérifié" },
      queueSummary: (count) => `${count} films affichés · le travail inachevé apparaît en premier`,
      directorNotRegistered: "Réalisation non renseignée",
      craftStatements: (count) => `${count} observations de fabrication`,
      learningGoals: (count) => `${count} objectifs d’apprentissage`,
      atlasProduct: "Film Atlas",
      directorProduct: "Film Director",
      empty: "Aucun film ne correspond à ce filtre de recherche.",
    },
    craft: {
      triggerEyebrow: "Études cinématographiques",
      triggerTitle: "Bibliothèque des techniques",
      dialogAria: "Bibliothèque des techniques cinématographiques",
      headerEyebrow: "Système de connaissances Filmverket",
      title: "Bibliothèque des techniques",
      intro: "Des techniques formelles décrites comme des constructions observables, et non comme de vagues étiquettes de style.",
      closeAria: "Fermer la bibliothèque des techniques",
      filmLens: "Filtre par film",
      allRegisteredTechniques: "Toutes les techniques enregistrées",
      searchLabel: "Rechercher une technique ou une fonction",
      searchPlaceholder: "Exemple : silence, placement, rythme…",
      filterAria: "Filtrer par domaine de fabrication",
      domainLabels: { all: "Tous", screenplay: "Scénario", cinematography: "Image", editing: "Montage", sound: "Son" },
      matchedToFilm: (count, filmTitle) => `${count} techniques associées à ${filmTitle}`,
      ofTechniques: (count, total) => `${count} techniques sur ${total}`,
      analysisQuestion: "Question d’analyse",
      productionUse: "Usage en production",
      empty: "Aucune technique ne correspond encore à ce film et à ce filtre.",
    },
  },
  pt: {
    research: {
      triggerEyebrow: "Sistema editorial",
      triggerTitle: "Controlo de investigação",
      dialogAria: "Sala de controlo da investigação cinematográfica",
      headerEyebrow: "Controlo editorial FilmWork",
      title: "Sala de controlo da investigação",
      intro: "Mantenha o conhecimento cinematográfico verificado separado dos registos provisórios e da investigação inacabada. Cada linha abre agora o mesmo filme diretamente no Film Atlas ou no Film Director.",
      closeAria: "Fechar sala de controlo da investigação",
      summaryAria: "Resumo do estado da investigação",
      totalCatalogue: "Catálogo total",
      films: "filmes",
      verified: "Verificados",
      complete: (percent) => `${percent}% concluído`,
      seeded: "Iniciais",
      provisional: "provisórios",
      needsResearch: "Precisa de investigação",
      priorityQueue: "fila prioritária",
      verifiedAria: (percent) => `${percent}% verificado`,
      searchLabel: "Pesquisar filme, ano ou realização",
      searchPlaceholder: "Exemplo: 1970, Bergman, Bicycle…",
      filterAria: "Filtrar estado da investigação",
      statusLabels: { all: "Todos", needs_research: "Precisa de investigação", seeded: "Inicial", verified: "Verificado" },
      queueSummary: (count) => `${count} filmes apresentados · o trabalho inacabado aparece primeiro`,
      directorNotRegistered: "Realização não registada",
      craftStatements: (count) => `${count} observações de realização`,
      learningGoals: (count) => `${count} objetivos de aprendizagem`,
      atlasProduct: "Film Atlas",
      directorProduct: "Film Director",
      empty: "Nenhum filme corresponde a este filtro de investigação.",
    },
    craft: {
      triggerEyebrow: "Estudos de cinema",
      triggerTitle: "Biblioteca de técnicas",
      dialogAria: "Biblioteca de técnicas cinematográficas",
      headerEyebrow: "Sistema de conhecimento Filmverket",
      title: "Biblioteca de técnicas",
      intro: "Técnicas formais descritas como construção observável — não como rótulos vagos de estilo.",
      closeAria: "Fechar biblioteca de técnicas",
      filmLens: "Filtro por filme",
      allRegisteredTechniques: "Todas as técnicas registadas",
      searchLabel: "Pesquisar técnica ou função",
      searchPlaceholder: "Exemplo: silêncio, blocking, ritmo…",
      filterAria: "Filtrar por domínio técnico",
      domainLabels: { all: "Todos", screenplay: "Argumento", cinematography: "Imagem", editing: "Montagem", sound: "Som" },
      matchedToFilm: (count, filmTitle) => `${count} técnicas associadas a ${filmTitle}`,
      ofTechniques: (count, total) => `${count} de ${total} técnicas`,
      analysisQuestion: "Questão de análise",
      productionUse: "Uso em produção",
      empty: "Ainda não há técnicas que correspondam a este filme e filtro.",
    },
  },
} as const satisfies Record<FilmWorkLanguage, FilmGlobalOverlayCopy>;
