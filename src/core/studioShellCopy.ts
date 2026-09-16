import { getFilmWorkIntlLocale, type FilmWorkLanguage } from "./filmWorkLanguage.js";

type StudioShellCopy = {
  readonly navigation: {
    readonly navigationAria: string;
    readonly returnAria: string;
    readonly productTitle: "Film Producer";
    readonly studioOffice: string;
  };
  readonly header: {
    readonly kicker: string;
    readonly studioType: string;
    readonly availableCapital: string;
    readonly reputation: string;
    readonly prestige: string;
    readonly currentPeriod: string;
    readonly year: (year: number) => string;
  };
};

export const STUDIO_SHELL_COPY = {
  en: {
    navigation: {
      navigationAria: "Game navigation",
      returnAria: "Return to Filmverket",
      productTitle: "Film Producer",
      studioOffice: "Studio office",
    },
    header: {
      kicker: "Studio command",
      studioType: "Independent motion picture studio",
      availableCapital: "Available capital",
      reputation: "Reputation",
      prestige: "Prestige",
      currentPeriod: "Current period",
      year: (year) => `Year ${year}`,
    },
  },
  nb: {
    navigation: {
      navigationAria: "Spillnavigasjon",
      returnAria: "Tilbake til Filmverket",
      productTitle: "Film Producer",
      studioOffice: "Studiokontor",
    },
    header: {
      kicker: "Studiostyring",
      studioType: "Uavhengig filmstudio",
      availableCapital: "Tilgjengelig kapital",
      reputation: "Omdømme",
      prestige: "Prestisje",
      currentPeriod: "Nåværende periode",
      year: (year) => `År ${year}`,
    },
  },
  fr: {
    navigation: {
      navigationAria: "Navigation du jeu",
      returnAria: "Retour à Filmverket",
      productTitle: "Film Producer",
      studioOffice: "Bureau du studio",
    },
    header: {
      kicker: "Direction du studio",
      studioType: "Studio de cinéma indépendant",
      availableCapital: "Capital disponible",
      reputation: "Réputation",
      prestige: "Prestige",
      currentPeriod: "Période actuelle",
      year: (year) => `Année ${year}`,
    },
  },
  pt: {
    navigation: {
      navigationAria: "Navegação do jogo",
      returnAria: "Voltar ao Filmverket",
      productTitle: "Film Producer",
      studioOffice: "Escritório do estúdio",
    },
    header: {
      kicker: "Direção do estúdio",
      studioType: "Estúdio de cinema independente",
      availableCapital: "Capital disponível",
      reputation: "Reputação",
      prestige: "Prestígio",
      currentPeriod: "Período atual",
      year: (year) => `Ano ${year}`,
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioShellCopy>;

export function formatStudioMoney(language: FilmWorkLanguage, value: number): string {
  return value.toLocaleString(getFilmWorkIntlLocale(language), {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
