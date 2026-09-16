import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type DevelopmentPathCopy = {
  readonly title: string;
  readonly description: string;
  readonly consequence: string;
};

type StudioCareerDevelopmentCopy = {
  readonly panel: {
    readonly eyebrow: (projectLabel: string) => string;
    readonly heading: (projectLabel: string) => string;
    readonly intro: string;
    readonly applied: string;
    readonly prompt: string;
    readonly finish: string;
  };
  readonly paths: {
    readonly mentor: DevelopmentPathCopy;
    readonly location: DevelopmentPathCopy;
    readonly script: DevelopmentPathCopy;
  };
  readonly mentor: {
    readonly required: string;
    readonly sectionLabel: string;
    readonly heading: string;
    readonly intro: string;
    readonly techniqueUnlock: string;
    readonly strategicGuidance: string;
    readonly actionHint: string;
    readonly apply: string;
  };
  readonly location: {
    readonly required: string;
    readonly sectionLabel: string;
    readonly heading: string;
    readonly intro: string;
    readonly historyLed: string;
    readonly authenticityLed: string;
    readonly productionLed: string;
    readonly actionHint: string;
    readonly runScout: string;
  };
  readonly script: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly intro: string;
    readonly selectedTemplate: string;
    readonly structure: string;
    readonly starterScenes: string;
    readonly evaluation: string;
    readonly engineScored: string;
    readonly actionHint: string;
    readonly shapeScript: string;
  };
  readonly progress: (completedCount: number) => string;
};

export const STUDIO_CAREER_DEVELOPMENT_COPY = {
  en: {
    panel: {
      eyebrow: (projectLabel) => `${projectLabel} development`,
      heading: (projectLabel) => `Develop ${projectLabel}`,
      intro: "Your producer’s desk can take on any combination of these actions. Finish development when you’re ready to move on.",
      applied: "Applied",
      prompt: "Select a development path to open its working brief.",
      finish: "Finish development",
    },
    paths: {
      mentor: {
        title: "Ask a mentor",
        description: "Apply one focused lesson to the project.",
        consequence: "Craft guidance or a technique unlock",
      },
      location: {
        title: "Scout locations",
        description: "Rank real production options against a brief.",
        consequence: "One top location attached",
      },
      script: {
        title: "Shape the script",
        description: "Build and evaluate three starter scenes.",
        consequence: "A scored starter draft",
      },
    },
    mentor: {
      required: "Choose a mentor lesson before applying this path.",
      sectionLabel: "Creative counsel",
      heading: "Choose one mentor lesson",
      intro: "Bring one focused craft principle into the project before production expands.",
      techniqueUnlock: "Technique unlock",
      strategicGuidance: "Strategic guidance",
      actionHint: "One development action completes this step.",
      apply: "Apply mentor lesson",
    },
    location: {
      required: "Choose a scouting brief before running the location scout.",
      sectionLabel: "Scouting desk",
      heading: "Set the location brief",
      intro: "The engine will score every available location and attach the strongest match.",
      historyLed: "History-led",
      authenticityLed: "Authenticity-led",
      productionLed: "Production-led",
      actionHint: "The top-scoring location will be attached to the project.",
      runScout: "Run location scout",
    },
    script: {
      sectionLabel: "Writers’ table",
      heading: "Shape a starter script",
      intro: "Create and evaluate the first three story beats from the template chosen during setup.",
      selectedTemplate: "Selected template",
      structure: "Structure",
      starterScenes: "Starter scenes",
      evaluation: "Evaluation",
      engineScored: "Engine scored",
      actionHint: "This creates a starter draft, not a full scene editor.",
      shapeScript: "Shape starter script",
    },
    progress: (completedCount) => `${completedCount} of 3 development action${completedCount === 1 ? "" : "s"} applied.`,
  },
  nb: {
    panel: {
      eyebrow: (projectLabel) => `Utvikling av ${projectLabel}`,
      heading: (projectLabel) => `Utvikle ${projectLabel}`,
      intro: "Produsentbordet kan gjennomføre hvilken som helst kombinasjon av disse handlingene. Avslutt utviklingen når du er klar til å gå videre.",
      applied: "Gjennomført",
      prompt: "Velg en utviklingsretning for å åpne arbeidsbriefen.",
      finish: "Avslutt utvikling",
    },
    paths: {
      mentor: {
        title: "Spør en mentor",
        description: "Bruk én fokusert lærdom i prosjektet.",
        consequence: "Faglig veiledning eller opplåsing av teknikk",
      },
      location: {
        title: "Finn innspillingssteder",
        description: "Vurder reelle produksjonsalternativer mot en brief.",
        consequence: "Beste innspillingssted knyttes til prosjektet",
      },
      script: {
        title: "Form manuset",
        description: "Bygg og vurder tre startscener.",
        consequence: "Et poengsatt førsteutkast",
      },
    },
    mentor: {
      required: "Velg en mentorlærdom før du gjennomfører denne retningen.",
      sectionLabel: "Kreativ rådgivning",
      heading: "Velg én mentorlærdom",
      intro: "Ta med ett fokusert håndverksprinsipp inn i prosjektet før produksjonen utvides.",
      techniqueUnlock: "Låser opp teknikk",
      strategicGuidance: "Strategisk veiledning",
      actionHint: "Én utviklingshandling fullfører dette steget.",
      apply: "Bruk mentorlærdom",
    },
    location: {
      required: "Velg en scoutingbrief før du kjører locationsøket.",
      sectionLabel: "Locationarbeid",
      heading: "Fastsett locationbriefen",
      intro: "Motoren vurderer alle tilgjengelige innspillingssteder og knytter det sterkeste treffet til prosjektet.",
      historyLed: "Historiedrevet",
      authenticityLed: "Autentisitetsdrevet",
      productionLed: "Produksjonsdrevet",
      actionHint: "Innspillingsstedet med høyest poengsum knyttes til prosjektet.",
      runScout: "Kjør locationsøk",
    },
    script: {
      sectionLabel: "Forfatterbordet",
      heading: "Form et første manusutkast",
      intro: "Opprett og vurder de tre første fortellingsslagene fra malen som ble valgt i oppsettet.",
      selectedTemplate: "Valgt mal",
      structure: "Struktur",
      starterScenes: "Startscener",
      evaluation: "Vurdering",
      engineScored: "Vurdert av motoren",
      actionHint: "Dette lager et førsteutkast, ikke en full sceneditor.",
      shapeScript: "Form førsteutkast",
    },
    progress: (completedCount) => `${completedCount} av 3 utviklingshandlinger gjennomført.`,
  },
  fr: {
    panel: {
      eyebrow: (projectLabel) => `Développement de ${projectLabel}`,
      heading: (projectLabel) => `Développer ${projectLabel}`,
      intro: "Votre bureau de production peut combiner librement ces actions. Terminez le développement lorsque vous êtes prêt à passer à la suite.",
      applied: "Appliqué",
      prompt: "Sélectionnez une voie de développement pour ouvrir son brief de travail.",
      finish: "Terminer le développement",
    },
    paths: {
      mentor: {
        title: "Consulter un mentor",
        description: "Appliquez un enseignement ciblé au projet.",
        consequence: "Conseil de métier ou déblocage d’une technique",
      },
      location: {
        title: "Repérer des lieux",
        description: "Classez des options de production réelles selon un brief.",
        consequence: "Le meilleur lieu est rattaché au projet",
      },
      script: {
        title: "Façonner le scénario",
        description: "Construisez et évaluez trois scènes de départ.",
        consequence: "Un premier jet évalué",
      },
    },
    mentor: {
      required: "Choisissez un enseignement de mentor avant d’appliquer cette voie.",
      sectionLabel: "Conseil créatif",
      heading: "Choisir un enseignement de mentor",
      intro: "Intégrez un principe de métier ciblé au projet avant que la production ne s’élargisse.",
      techniqueUnlock: "Technique débloquée",
      strategicGuidance: "Conseil stratégique",
      actionHint: "Une action de développement suffit pour terminer cette étape.",
      apply: "Appliquer l’enseignement",
    },
    location: {
      required: "Choisissez un brief de repérage avant de lancer le repérage des lieux.",
      sectionLabel: "Bureau de repérage",
      heading: "Définir le brief de repérage",
      intro: "Le moteur évalue chaque lieu disponible et rattache au projet la meilleure correspondance.",
      historyLed: "Priorité historique",
      authenticityLed: "Priorité à l’authenticité",
      productionLed: "Priorité à la production",
      actionHint: "Le lieu ayant obtenu le meilleur score sera rattaché au projet.",
      runScout: "Lancer le repérage",
    },
    script: {
      sectionLabel: "Table des scénaristes",
      heading: "Façonner un scénario de départ",
      intro: "Créez et évaluez les trois premiers temps narratifs à partir du modèle choisi lors de la configuration.",
      selectedTemplate: "Modèle sélectionné",
      structure: "Structure",
      starterScenes: "Scènes de départ",
      evaluation: "Évaluation",
      engineScored: "Évalué par le moteur",
      actionHint: "Cela crée un premier jet, pas un éditeur de scènes complet.",
      shapeScript: "Façonner le premier jet",
    },
    progress: (completedCount) => `${completedCount} action${completedCount === 1 ? "" : "s"} de développement sur 3 appliquée${completedCount === 1 ? "" : "s"}.`,
  },
  pt: {
    panel: {
      eyebrow: (projectLabel) => `Desenvolvimento de ${projectLabel}`,
      heading: (projectLabel) => `Desenvolver ${projectLabel}`,
      intro: "A mesa de produção pode combinar livremente estas ações. Termine o desenvolvimento quando estiver pronto para avançar.",
      applied: "Aplicado",
      prompt: "Selecione um percurso de desenvolvimento para abrir o respetivo briefing de trabalho.",
      finish: "Terminar desenvolvimento",
    },
    paths: {
      mentor: {
        title: "Consultar um mentor",
        description: "Aplique uma lição focada ao projeto.",
        consequence: "Orientação de ofício ou desbloqueio de técnica",
      },
      location: {
        title: "Procurar localizações",
        description: "Classifique opções reais de produção segundo um briefing.",
        consequence: "A melhor localização fica associada",
      },
      script: {
        title: "Moldar o argumento",
        description: "Construa e avalie três cenas iniciais.",
        consequence: "Um primeiro rascunho pontuado",
      },
    },
    mentor: {
      required: "Escolha uma lição de mentor antes de aplicar este percurso.",
      sectionLabel: "Aconselhamento criativo",
      heading: "Escolher uma lição de mentor",
      intro: "Introduza um princípio de ofício focado no projeto antes de a produção se expandir.",
      techniqueUnlock: "Técnica desbloqueada",
      strategicGuidance: "Orientação estratégica",
      actionHint: "Uma ação de desenvolvimento conclui este passo.",
      apply: "Aplicar lição do mentor",
    },
    location: {
      required: "Escolha um briefing de localização antes de procurar localizações.",
      sectionLabel: "Mesa de localizações",
      heading: "Definir o briefing de localização",
      intro: "O motor avalia todas as localizações disponíveis e associa ao projeto a correspondência mais forte.",
      historyLed: "Orientado pela história",
      authenticityLed: "Orientado pela autenticidade",
      productionLed: "Orientado pela produção",
      actionHint: "A localização com a melhor pontuação será associada ao projeto.",
      runScout: "Procurar localização",
    },
    script: {
      sectionLabel: "Mesa de argumentistas",
      heading: "Moldar um argumento inicial",
      intro: "Crie e avalie os três primeiros momentos narrativos a partir do modelo escolhido na configuração.",
      selectedTemplate: "Modelo selecionado",
      structure: "Estrutura",
      starterScenes: "Cenas iniciais",
      evaluation: "Avaliação",
      engineScored: "Avaliado pelo motor",
      actionHint: "Isto cria um primeiro rascunho, não um editor de cenas completo.",
      shapeScript: "Moldar argumento inicial",
    },
    progress: (completedCount) => completedCount === 1
      ? "1 de 3 ação de desenvolvimento aplicada."
      : `${completedCount} de 3 ações de desenvolvimento aplicadas.`,
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerDevelopmentCopy>;
