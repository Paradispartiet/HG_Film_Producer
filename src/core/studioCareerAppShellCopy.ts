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
    readonly filmResult: {
      readonly eyebrow: string;
      readonly heading: string;
      readonly quality: string;
      readonly audienceAppeal: string;
      readonly criticalAppeal: string;
      readonly budgetSpent: string;
      readonly revenueEstimate: string;
    };
    readonly release: {
      readonly eyebrow: string;
      readonly heading: string;
      readonly breakEvenCleared: string;
      readonly belowBreakEven: string;
      readonly strategy: string;
      readonly festivalResult: string;
      readonly selected: string;
      readonly notSelected: string;
      readonly reviewSummary: string;
      readonly audienceSummary: string;
      readonly revenueResult: string;
      readonly awardsOutcome: string;
      readonly audienceValue: (score: number, viewers: string) => string;
      readonly revenueValue: (gross: string, net: string) => string;
      readonly awardsValue: (nominations: number, wins: number) => string;
    };
    readonly systems: {
      readonly eyebrow: string;
      readonly heading: string;
      readonly represented: string;
      readonly onlineCount: (count: number) => string;
    };
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
      filmResult: {
        eyebrow: "Locked picture",
        heading: "Film result",
        quality: "Quality",
        audienceAppeal: "Audience appeal",
        criticalAppeal: "Critical appeal",
        budgetSpent: "Budget spent",
        revenueEstimate: "Revenue estimate",
      },
      release: {
        eyebrow: "Market response",
        heading: "Release report",
        breakEvenCleared: "Break-even cleared",
        belowBreakEven: "Below break-even",
        strategy: "Strategy",
        festivalResult: "Festival result",
        selected: "Selected",
        notSelected: "Not selected",
        reviewSummary: "Review summary",
        audienceSummary: "Audience summary",
        revenueResult: "Revenue result",
        awardsOutcome: "Awards outcome",
        audienceValue: (score, viewers) => `${score}/100 satisfaction · ${viewers} viewers`,
        revenueValue: (gross, net) => `${gross} gross · ${net} net`,
        awardsValue: (nominations, wins) => `${nominations} nomination${nominations === 1 ? "" : "s"} · ${wins} win${wins === 1 ? "" : "s"}`,
      },
      systems: {
        eyebrow: "Integration layer",
        heading: "System status",
        represented: "represented",
        onlineCount: (count) => `${count}/${count} online`,
      },
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
      filmResult: {
        eyebrow: "Ferdig klippet film",
        heading: "Filmresultat",
        quality: "Kvalitet",
        audienceAppeal: "Publikumsappell",
        criticalAppeal: "Kritikerappell",
        budgetSpent: "Brukt budsjett",
        revenueEstimate: "Anslåtte inntekter",
      },
      release: {
        eyebrow: "Markedsrespons",
        heading: "Lanseringsrapport",
        breakEvenCleared: "Balansepunktet nådd",
        belowBreakEven: "Under balansepunktet",
        strategy: "Strategi",
        festivalResult: "Festivalresultat",
        selected: "Utvalgt",
        notSelected: "Ikke utvalgt",
        reviewSummary: "Anmeldelsesoversikt",
        audienceSummary: "Publikumsoversikt",
        revenueResult: "Inntektsresultat",
        awardsOutcome: "Priser og nominasjoner",
        audienceValue: (score, viewers) => `${score}/100 tilfredshet · ${viewers} seere`,
        revenueValue: (gross, net) => `${gross} brutto · ${net} netto`,
        awardsValue: (nominations, wins) => `${nominations} nominasjon${nominations === 1 ? "" : "er"} · ${wins} seier${wins === 1 ? "" : "e"}`,
      },
      systems: {
        eyebrow: "Integrasjonslag",
        heading: "Systemstatus",
        represented: "representert",
        onlineCount: (count) => `${count}/${count} tilkoblet`,
      },
    },
    career: {
      productionCasesKicker: "Production Cases · stabil MVP",
      experimentalKicker: "Eksperimentell studiokarriere",
      productionCasesHeading: "Din produksjonscase",
      experimentalHeading: "Studioets prosjektportefølje",
      productionCasesIntro: "Du spiller en Production Case gjennom studiopipelinen. Ta case-valgene fase for fase, fullfør hvert oppdrag og les deretter caserapporten.",
      experimentalIntro: "Denne grenen er spillbar, men er ikke hoved-MVP-en. Følg kortet for aktiv fase, ta neste filmbeslutning, og bruk karrieregjennomgangen til å starte film nummer to.",
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
      filmResult: {
        eyebrow: "Film finalisé",
        heading: "Résultat du film",
        quality: "Qualité",
        audienceAppeal: "Attrait du public",
        criticalAppeal: "Accueil critique",
        budgetSpent: "Budget dépensé",
        revenueEstimate: "Recettes estimées",
      },
      release: {
        eyebrow: "Réaction du marché",
        heading: "Bilan de sortie",
        breakEvenCleared: "Seuil de rentabilité atteint",
        belowBreakEven: "Sous le seuil de rentabilité",
        strategy: "Stratégie",
        festivalResult: "Résultat en festival",
        selected: "Sélectionné",
        notSelected: "Non sélectionné",
        reviewSummary: "Bilan critique",
        audienceSummary: "Bilan du public",
        revenueResult: "Résultat financier",
        awardsOutcome: "Récompenses",
        audienceValue: (score, viewers) => `${score}/100 de satisfaction · ${viewers} spectateurs`,
        revenueValue: (gross, net) => `${gross} brut · ${net} net`,
        awardsValue: (nominations, wins) => `${nominations} nomination${nominations === 1 ? "" : "s"} · ${wins} victoire${wins === 1 ? "" : "s"}`,
      },
      systems: {
        eyebrow: "Couche d’intégration",
        heading: "État du système",
        represented: "représenté",
        onlineCount: (count) => `${count}/${count} en ligne`,
      },
    },
    career: {
      productionCasesKicker: "Production Cases · MVP stable",
      experimentalKicker: "Carrière Studio expérimentale",
      productionCasesHeading: "Votre cas de production",
      experimentalHeading: "Votre portefeuille de studio",
      productionCasesIntro: "Vous parcourez un Production Case dans le pipeline du studio. Faites les choix du cas phase par phase, terminez chaque mission, puis consultez le rapport du cas.",
      experimentalIntro: "Cette branche est jouable, mais ce n’est pas le MVP principal. Suivez la carte de la phase active, prenez la prochaine décision de film, puis utilisez le bilan de carrière pour démarrer le deuxième film.",
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
      filmResult: {
        eyebrow: "Montagem final fechada",
        heading: "Resultado do filme",
        quality: "Qualidade",
        audienceAppeal: "Apelo junto do público",
        criticalAppeal: "Receção da crítica",
        budgetSpent: "Orçamento gasto",
        revenueEstimate: "Receita estimada",
      },
      release: {
        eyebrow: "Resposta do mercado",
        heading: "Relatório de lançamento",
        breakEvenCleared: "Ponto de equilíbrio atingido",
        belowBreakEven: "Abaixo do ponto de equilíbrio",
        strategy: "Estratégia",
        festivalResult: "Resultado em festivais",
        selected: "Selecionado",
        notSelected: "Não selecionado",
        reviewSummary: "Resumo da crítica",
        audienceSummary: "Resumo do público",
        revenueResult: "Resultado financeiro",
        awardsOutcome: "Prémios e nomeações",
        audienceValue: (score, viewers) => `${score}/100 de satisfação · ${viewers} espectadores`,
        revenueValue: (gross, net) => `${gross} brutos · ${net} líquidos`,
        awardsValue: (nominations, wins) => `${nominations} nomeaç${nominations === 1 ? "ão" : "ões"} · ${wins} vitória${wins === 1 ? "" : "s"}`,
      },
      systems: {
        eyebrow: "Camada de integração",
        heading: "Estado do sistema",
        represented: "representado",
        onlineCount: (count) => `${count}/${count} ativos`,
      },
    },
    career: {
      productionCasesKicker: "Production Cases · MVP estável",
      experimentalKicker: "Carreira de estúdio experimental",
      productionCasesHeading: "O seu caso de produção",
      experimentalHeading: "A carteira do seu estúdio",
      productionCasesIntro: "Está a jogar um Production Case através do pipeline do estúdio. Tome as decisões do caso fase a fase, conclua cada missão e depois leia o relatório do caso.",
      experimentalIntro: "Este ramo é jogável, mas não é o MVP principal. Siga o cartão da fase atual, tome a próxima decisão do filme e use a revisão de carreira para iniciar o segundo filme.",
      reset: "Repor carreira",
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerAppShellCopy>;
