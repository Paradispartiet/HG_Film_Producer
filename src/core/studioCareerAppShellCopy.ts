import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type StudioCareerAppShellCopy = {
  readonly productName: "HG Film Producer";
  readonly newStudioFallback: string;
  readonly navigation: {
    readonly ariaLabel: string;
    readonly workspace: string;
    readonly demoInspection: string;
    readonly productionCases: "Production Cases";
    readonly experimentalCareer: string;
    readonly titleScreen: string;
  };
  readonly footer: {
    readonly demoInspection: string;
    readonly productionCases: string;
    readonly experimentalCareer: string;
  };
  readonly demo: {
    readonly kicker: string;
    readonly heading: string;
    readonly intro: string;
  };
  readonly career: {
    readonly productionCasesKicker: string;
    readonly experimentalKicker: string;
    readonly productionCasesHeading: string;
    readonly experimentalHeading: string;
    readonly productionCasesIntro: string;
    readonly experimentalIntro: string;
    readonly reset: string;
  };
};

export const STUDIO_CAREER_APP_SHELL_COPY = {
  en: {
    productName: "HG Film Producer",
    newStudioFallback: "New studio",
    navigation: {
      ariaLabel: "Dashboard mode",
      workspace: "Production workspace",
      demoInspection: "Demo inspection",
      productionCases: "Production Cases",
      experimentalCareer: "Experimental Career",
      titleScreen: "Title screen",
    },
    footer: {
      demoInspection: "Demo inspection",
      productionCases: "Stable Production Cases MVP",
      experimentalCareer: "Experimental Studio Career branch",
    },
    demo: {
      kicker: "Portfolio overview",
      heading: "Production desk",
      intro: "One deterministic studio run, live from the HG simulation engine.",
    },
    career: {
      productionCasesKicker: "Production Cases · stable MVP",
      experimentalKicker: "Experimental Studio Career",
      productionCasesHeading: "Your production case",
      experimentalHeading: "Your studio slate",
      productionCasesIntro: "You are playing a Production Case through the studio pipeline. Make the case choices phase by phase, complete every mission, then read the Case report.",
      experimentalIntro: "This branch is playable but not the main MVP. Follow the current phase card, make the next film decision, then use career review to start Film Two.",
      reset: "Reset career",
    },
  },
  nb: {
    productName: "HG Film Producer",
    newStudioFallback: "Nytt studio",
    navigation: {
      ariaLabel: "Dashboardmodus",
      workspace: "Produksjonsarbeidsflate",
      demoInspection: "Demoinspeksjon",
      productionCases: "Production Cases",
      experimentalCareer: "Eksperimentell karriere",
      titleScreen: "Tittelskjerm",
    },
    footer: {
      demoInspection: "Demoinspeksjon",
      productionCases: "Stabil Production Cases-MVP",
      experimentalCareer: "Eksperimentell studiokarrieregren",
    },
    demo: {
      kicker: "Porteføljeoversikt",
      heading: "Produksjonsbord",
      intro: "Én deterministisk studiorunde, direkte fra HG-simuleringsmotoren.",
    },
    career: {
      productionCasesKicker: "Production Cases · stabil MVP",
      experimentalKicker: "Eksperimentell studiokarriere",
      productionCasesHeading: "Din produksjonscase",
      experimentalHeading: "Studioets prosjektportefølje",
      productionCasesIntro: "Du spiller en Production Case gjennom studiopipelinen. Ta case-valgene fase for fase, fullfør hvert oppdrag og les deretter caserapporten.",
      experimentalIntro: "Denne grenen er spillbar, men er ikke hoved-MVP-en. Følg kortet for aktiv fase, ta neste filmbeslutning, og bruk karrieregjennomgangen til å starte Film Two.",
      reset: "Nullstill karriere",
    },
  },
  fr: {
    productName: "HG Film Producer",
    newStudioFallback: "Nouveau studio",
    navigation: {
      ariaLabel: "Mode du tableau de bord",
      workspace: "Espace de production",
      demoInspection: "Inspection de la démo",
      productionCases: "Production Cases",
      experimentalCareer: "Carrière expérimentale",
      titleScreen: "Écran titre",
    },
    footer: {
      demoInspection: "Inspection de la démo",
      productionCases: "MVP Production Cases stable",
      experimentalCareer: "Branche de carrière Studio expérimentale",
    },
    demo: {
      kicker: "Vue d’ensemble du portefeuille",
      heading: "Bureau de production",
      intro: "Une simulation de studio déterministe, en direct du moteur de simulation HG.",
    },
    career: {
      productionCasesKicker: "Production Cases · MVP stable",
      experimentalKicker: "Carrière Studio expérimentale",
      productionCasesHeading: "Votre cas de production",
      experimentalHeading: "Votre portefeuille de studio",
      productionCasesIntro: "Vous parcourez un Production Case dans le pipeline du studio. Faites les choix du cas phase par phase, terminez chaque mission, puis consultez le rapport du cas.",
      experimentalIntro: "Cette branche est jouable, mais ce n’est pas le MVP principal. Suivez la carte de la phase active, prenez la prochaine décision de film, puis utilisez le bilan de carrière pour démarrer Film Two.",
      reset: "Réinitialiser la carrière",
    },
  },
  pt: {
    productName: "HG Film Producer",
    newStudioFallback: "Novo estúdio",
    navigation: {
      ariaLabel: "Modo do painel",
      workspace: "Espaço de produção",
      demoInspection: "Inspeção da demo",
      productionCases: "Production Cases",
      experimentalCareer: "Carreira experimental",
      titleScreen: "Ecrã de título",
    },
    footer: {
      demoInspection: "Inspeção da demo",
      productionCases: "MVP estável de Production Cases",
      experimentalCareer: "Ramo experimental de Studio Career",
    },
    demo: {
      kicker: "Visão geral da carteira",
      heading: "Mesa de produção",
      intro: "Uma sessão de estúdio determinística, em direto do motor de simulação HG.",
    },
    career: {
      productionCasesKicker: "Production Cases · MVP estável",
      experimentalKicker: "Carreira de estúdio experimental",
      productionCasesHeading: "O seu caso de produção",
      experimentalHeading: "A carteira do seu estúdio",
      productionCasesIntro: "Está a jogar um Production Case através do pipeline do estúdio. Tome as decisões do caso fase a fase, conclua cada missão e depois leia o relatório do caso.",
      experimentalIntro: "Este ramo é jogável, mas não é o MVP principal. Siga o cartão da fase atual, tome a próxima decisão do filme e use a revisão de carreira para iniciar Film Two.",
      reset: "Repor carreira",
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerAppShellCopy>;
