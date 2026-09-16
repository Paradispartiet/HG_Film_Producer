import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type ShootDayStatus = "planned" | "completed" | "delayed" | "cancelled";
type ProductionEventType = "weather" | "technical" | "performance" | "location" | "budget" | "conflict" | "inspiration" | "safety" | "logistics";
type ProductionEventSeverity = "minor" | "moderate" | "major";

type StudioCareerShootCopy = {
  readonly projectLabel: (label: string) => string;
  readonly panel: {
    readonly eyebrow: (label: string) => string;
    readonly heading: (label: string) => string;
    readonly intro: (label: string) => string;
    readonly eventSelected: string;
    readonly selectEvent: string;
    readonly dayProgress: (day: number, total: number, label: string) => string;
    readonly resolveDay: (day: number) => string;
  };
  readonly schedule: {
    readonly eyebrow: string;
    readonly heading: (label: string) => string;
    readonly dayOf: (day: number, total: number) => string;
    readonly plannedScenes: string;
    readonly plannedCost: string;
    readonly contingencyHeld: (amount: string) => string;
    readonly location: string;
    readonly lockedFromPreProduction: string;
    readonly status: string;
    readonly resolvedDays: (resolved: number, total: number) => string;
    readonly statuses: Readonly<Record<ShootDayStatus, string>>;
  };
  readonly difficulty: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly intro: (label: string) => string;
    readonly score: string;
    readonly conflictLoad: string;
    readonly emotionalLoad: string;
    readonly pacingPressure: string;
    readonly techniqueComplexity: string;
    readonly locationLogistics: string;
  };
  readonly event: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly intro: (label: string) => string;
    readonly costImpact: string;
    readonly delay: string;
    readonly upside: string;
    readonly possible: string;
    readonly no: string;
    readonly delayDays: (days: number) => string;
    readonly types: Readonly<Record<ProductionEventType, string>>;
    readonly severities: Readonly<Record<ProductionEventSeverity, string>>;
  };
  readonly dayResult: {
    readonly eyebrow: string;
    readonly heading: (label: string, day: number) => string;
    readonly takeQuality: (quality: number) => string;
    readonly completedScenes: string;
    readonly delayedScenes: string;
    readonly noScenesDelayed: string;
    readonly costSpent: string;
    readonly scheduleDeltaLabel: string;
    readonly scheduleDelta: (days: number) => string;
  };
  readonly evaluation: {
    readonly eyebrow: string;
    readonly heading: (label: string) => string;
    readonly overall: (value: number) => string;
    readonly completedDays: string;
    readonly delayedDays: string;
    readonly totalCostSpent: string;
    readonly averageTakeQuality: string;
    readonly scheduleHealth: string;
    readonly budgetHealth: string;
    readonly productionMorale: string;
    readonly overallLabel: string;
    readonly nextStep: string;
    readonly nextMessage: (label: string) => string;
  };
};

function numberedLabel(label: string): string {
  return label.replace(/^film\s+/i, "Film ");
}

export const STUDIO_CAREER_SHOOT_COPY = {
  en: {
    projectLabel: (label) => label === "first film" ? "first film" : numberedLabel(label),
    panel: {
      eyebrow: (label) => label === "first film" ? "Start shoot" : `Start shoot for ${numberedLabel(label)}`,
      heading: (label) => label === "first film" ? "On-set production desk" : `${numberedLabel(label)} shoot`,
      intro: (label) => `Work through every scheduled shoot day, applying one event and resolving the result each day, for ${label === "first film" ? "the first film" : numberedLabel(label)}.`,
      eventSelected: "Production event selected. Ready to resolve.",
      selectEvent: "Select one production event to continue.",
      dayProgress: (day, total, label) => `Day ${day} of ${total} for ${label === "first film" ? "the first film" : numberedLabel(label)}.`,
      resolveDay: (day) => `Resolve day ${day}`,
    },
    schedule: {
      eyebrow: "Production schedule",
      heading: (label) => label === "first film" ? "Shoot schedule" : `${numberedLabel(label)} shoot schedule`,
      dayOf: (day, total) => `Day ${day} of ${total}`,
      plannedScenes: "Planned scenes",
      plannedCost: "Planned cost",
      contingencyHeld: (amount) => `${amount} contingency held`,
      location: "Location",
      lockedFromPreProduction: "Locked from pre-production",
      status: "Status",
      resolvedDays: (resolved, total) => `${resolved}/${total} shoot days resolved`,
      statuses: { planned: "Planned", completed: "Completed", delayed: "Delayed", cancelled: "Cancelled" },
    },
    difficulty: {
      eyebrow: "Scene pressure",
      heading: "Difficulty cards",
      intro: (label) => `Starter scenes for the first playable shoot step of ${label === "first film" ? "the first film" : numberedLabel(label)}.`,
      score: "Difficulty score",
      conflictLoad: "Conflict load",
      emotionalLoad: "Emotional load",
      pacingPressure: "Pacing pressure",
      techniqueComplexity: "Technique complexity",
      locationLogistics: "Location logistics",
    },
    event: {
      eyebrow: "On-set variable",
      heading: "Choose one production event",
      intro: (label) => `Apply a deterministic event before resolving the ${label === "first film" ? "first-film" : numberedLabel(label)} shoot day.`,
      costImpact: "Cost impact",
      delay: "Delay",
      upside: "Upside",
      possible: "Possible",
      no: "No",
      delayDays: (days) => `${days} day${days === 1 ? "" : "s"}`,
      types: { weather: "Weather", technical: "Technical", performance: "Performance", location: "Location", budget: "Budget", conflict: "Conflict", inspiration: "Inspiration", safety: "Safety", logistics: "Logistics" },
      severities: { minor: "Minor", moderate: "Moderate", major: "Major" },
    },
    dayResult: {
      eyebrow: "Resolved day",
      heading: (label, day) => label === "first film" ? `Day ${day} result` : `${numberedLabel(label)} day ${day} result`,
      takeQuality: (quality) => `Take quality ${quality}`,
      completedScenes: "Completed scenes",
      delayedScenes: "Delayed scenes",
      noScenesDelayed: "No scenes delayed",
      costSpent: "Cost spent",
      scheduleDeltaLabel: "Schedule delta",
      scheduleDelta: (days) => `${days} day${days === 1 ? "" : "s"}`,
    },
    evaluation: {
      eyebrow: "Production evaluation",
      heading: (label) => label === "first film" ? "Shoot readout" : `${numberedLabel(label)} shoot readout`,
      overall: (value) => `Overall ${value}`,
      completedDays: "Completed days",
      delayedDays: "Delayed days",
      totalCostSpent: "Total cost spent",
      averageTakeQuality: "Average take quality",
      scheduleHealth: "Schedule health",
      budgetHealth: "Budget health",
      productionMorale: "Production morale",
      overallLabel: "Overall",
      nextStep: "Next step",
      nextMessage: (label) => label === "first film" ? "Post-production unlocks after every scheduled shoot day is resolved." : `Next step: post-production for ${numberedLabel(label)}`,
    },
  },
  nb: {
    projectLabel: (label) => label === "first film" ? "første film" : numberedLabel(label),
    panel: {
      eyebrow: (label) => label === "first film" ? "Start opptak" : `Start opptak for ${numberedLabel(label)}`,
      heading: (label) => label === "first film" ? "Produksjonsbord på sett" : `${numberedLabel(label)} – opptak`,
      intro: (label) => `Gå gjennom hver planlagte opptaksdag, bruk én hendelse og løs dagens resultat for ${label === "first film" ? "første film" : numberedLabel(label)}.`,
      eventSelected: "Produksjonshendelse valgt. Klar til å løse dagen.",
      selectEvent: "Velg én produksjonshendelse for å fortsette.",
      dayProgress: (day, total, label) => `Dag ${day} av ${total} for ${label === "first film" ? "første film" : numberedLabel(label)}.`,
      resolveDay: (day) => `Løs dag ${day}`,
    },
    schedule: {
      eyebrow: "Produksjonsplan",
      heading: (label) => label === "first film" ? "Opptaksplan" : `Opptaksplan for ${numberedLabel(label)}`,
      dayOf: (day, total) => `Dag ${day} av ${total}`,
      plannedScenes: "Planlagte scener",
      plannedCost: "Planlagt kostnad",
      contingencyHeld: (amount) => `${amount} holdt i reserve`,
      location: "Location",
      lockedFromPreProduction: "Låst fra preproduksjon",
      status: "Status",
      resolvedDays: (resolved, total) => `${resolved}/${total} opptaksdager løst`,
      statuses: { planned: "Planlagt", completed: "Fullført", delayed: "Forsinket", cancelled: "Avlyst" },
    },
    difficulty: {
      eyebrow: "Scenepress",
      heading: "Vanskelighetskort",
      intro: (label) => `Startscener for det første spillbare opptakssteget i ${label === "first film" ? "første film" : numberedLabel(label)}.`,
      score: "Vanskelighetsgrad",
      conflictLoad: "Konfliktbelastning",
      emotionalLoad: "Emosjonell belastning",
      pacingPressure: "Tempo-press",
      techniqueComplexity: "Teknisk kompleksitet",
      locationLogistics: "Locationlogistikk",
    },
    event: {
      eyebrow: "Variabel på sett",
      heading: "Velg én produksjonshendelse",
      intro: (label) => `Bruk en deterministisk hendelse før opptaksdagen for ${label === "first film" ? "første film" : numberedLabel(label)} løses.`,
      costImpact: "Kostnadseffekt",
      delay: "Forsinkelse",
      upside: "Oppside",
      possible: "Mulig",
      no: "Nei",
      delayDays: (days) => `${days} dag${days === 1 ? "" : "er"}`,
      types: { weather: "Vær", technical: "Teknisk", performance: "Skuespill", location: "Location", budget: "Budsjett", conflict: "Konflikt", inspiration: "Inspirasjon", safety: "Sikkerhet", logistics: "Logistikk" },
      severities: { minor: "Mindre", moderate: "Moderat", major: "Alvorlig" },
    },
    dayResult: {
      eyebrow: "Løst opptaksdag",
      heading: (label, day) => label === "first film" ? `Resultat dag ${day}` : `${numberedLabel(label)} – resultat dag ${day}`,
      takeQuality: (quality) => `Tagning ${quality}`,
      completedScenes: "Fullførte scener",
      delayedScenes: "Forsinkede scener",
      noScenesDelayed: "Ingen scener forsinket",
      costSpent: "Kostnad brukt",
      scheduleDeltaLabel: "Planavvik",
      scheduleDelta: (days) => `${days} dag${days === 1 ? "" : "er"}`,
    },
    evaluation: {
      eyebrow: "Produksjonsevaluering",
      heading: (label) => label === "first film" ? "Opptaksrapport" : `Opptaksrapport for ${numberedLabel(label)}`,
      overall: (value) => `Totalt ${value}`,
      completedDays: "Fullførte dager",
      delayedDays: "Forsinkede dager",
      totalCostSpent: "Total kostnad",
      averageTakeQuality: "Gjennomsnittlig tagning",
      scheduleHealth: "Planstatus",
      budgetHealth: "Budsjettstatus",
      productionMorale: "Produksjonsmoral",
      overallLabel: "Totalt",
      nextStep: "Neste steg",
      nextMessage: (label) => label === "first film" ? "Postproduksjon låses opp når alle planlagte opptaksdager er løst." : `Neste steg: postproduksjon for ${numberedLabel(label)}`,
    },
  },
  fr: {
    projectLabel: (label) => label === "first film" ? "premier film" : numberedLabel(label),
    panel: {
      eyebrow: (label) => label === "first film" ? "Démarrer le tournage" : `Démarrer le tournage de ${numberedLabel(label)}`,
      heading: (label) => label === "first film" ? "Bureau de production sur le plateau" : `Tournage de ${numberedLabel(label)}`,
      intro: (label) => `Parcourez chaque journée de tournage planifiée, appliquez un événement et résolvez son résultat pour ${label === "first film" ? "le premier film" : numberedLabel(label)}.`,
      eventSelected: "Événement de production sélectionné. Prêt à résoudre la journée.",
      selectEvent: "Sélectionnez un événement de production pour continuer.",
      dayProgress: (day, total, label) => `Jour ${day} sur ${total} pour ${label === "first film" ? "le premier film" : numberedLabel(label)}.`,
      resolveDay: (day) => `Résoudre le jour ${day}`,
    },
    schedule: {
      eyebrow: "Plan de production",
      heading: (label) => label === "first film" ? "Plan de tournage" : `Plan de tournage de ${numberedLabel(label)}`,
      dayOf: (day, total) => `Jour ${day} sur ${total}`,
      plannedScenes: "Scènes prévues",
      plannedCost: "Coût prévu",
      contingencyHeld: (amount) => `${amount} de réserve`,
      location: "Lieu",
      lockedFromPreProduction: "Verrouillé depuis la préproduction",
      status: "Statut",
      resolvedDays: (resolved, total) => `${resolved}/${total} jours de tournage résolus`,
      statuses: { planned: "Planifié", completed: "Terminé", delayed: "Retardé", cancelled: "Annulé" },
    },
    difficulty: {
      eyebrow: "Pression des scènes",
      heading: "Cartes de difficulté",
      intro: (label) => `Scènes de départ pour la première étape jouable de tournage de ${label === "first film" ? "le premier film" : numberedLabel(label)}.`,
      score: "Score de difficulté",
      conflictLoad: "Charge conflictuelle",
      emotionalLoad: "Charge émotionnelle",
      pacingPressure: "Pression du rythme",
      techniqueComplexity: "Complexité technique",
      locationLogistics: "Logistique des lieux",
    },
    event: {
      eyebrow: "Variable de plateau",
      heading: "Choisir un événement de production",
      intro: (label) => `Appliquez un événement déterministe avant de résoudre la journée de tournage de ${label === "first film" ? "le premier film" : numberedLabel(label)}.`,
      costImpact: "Impact sur le coût",
      delay: "Retard",
      upside: "Potentiel positif",
      possible: "Possible",
      no: "Non",
      delayDays: (days) => `${days} jour${days === 1 ? "" : "s"}`,
      types: { weather: "Météo", technical: "Technique", performance: "Interprétation", location: "Lieu", budget: "Budget", conflict: "Conflit", inspiration: "Inspiration", safety: "Sécurité", logistics: "Logistique" },
      severities: { minor: "Mineur", moderate: "Modéré", major: "Majeur" },
    },
    dayResult: {
      eyebrow: "Journée résolue",
      heading: (label, day) => label === "first film" ? `Résultat du jour ${day}` : `${numberedLabel(label)} · résultat du jour ${day}`,
      takeQuality: (quality) => `Qualité de prise ${quality}`,
      completedScenes: "Scènes terminées",
      delayedScenes: "Scènes retardées",
      noScenesDelayed: "Aucune scène retardée",
      costSpent: "Coût dépensé",
      scheduleDeltaLabel: "Écart de planning",
      scheduleDelta: (days) => `${days} jour${days === 1 ? "" : "s"}`,
    },
    evaluation: {
      eyebrow: "Évaluation de production",
      heading: (label) => label === "first film" ? "Bilan du tournage" : `Bilan du tournage de ${numberedLabel(label)}`,
      overall: (value) => `Global ${value}`,
      completedDays: "Jours terminés",
      delayedDays: "Jours retardés",
      totalCostSpent: "Coût total dépensé",
      averageTakeQuality: "Qualité moyenne des prises",
      scheduleHealth: "Santé du planning",
      budgetHealth: "Santé du budget",
      productionMorale: "Moral de la production",
      overallLabel: "Global",
      nextStep: "Étape suivante",
      nextMessage: (label) => label === "first film" ? "La postproduction se débloque lorsque toutes les journées planifiées sont résolues." : `Étape suivante : postproduction de ${numberedLabel(label)}`,
    },
  },
  pt: {
    projectLabel: (label) => label === "first film" ? "primeiro filme" : numberedLabel(label),
    panel: {
      eyebrow: (label) => label === "first film" ? "Iniciar rodagem" : `Iniciar rodagem de ${numberedLabel(label)}`,
      heading: (label) => label === "first film" ? "Mesa de produção em rodagem" : `Rodagem de ${numberedLabel(label)}`,
      intro: (label) => `Percorra cada dia de rodagem planeado, aplique um evento e resolva o resultado de cada dia para ${label === "first film" ? "o primeiro filme" : numberedLabel(label)}.`,
      eventSelected: "Evento de produção selecionado. Pronto para resolver o dia.",
      selectEvent: "Selecione um evento de produção para continuar.",
      dayProgress: (day, total, label) => `Dia ${day} de ${total} para ${label === "first film" ? "o primeiro filme" : numberedLabel(label)}.`,
      resolveDay: (day) => `Resolver dia ${day}`,
    },
    schedule: {
      eyebrow: "Plano de produção",
      heading: (label) => label === "first film" ? "Plano de rodagem" : `Plano de rodagem de ${numberedLabel(label)}`,
      dayOf: (day, total) => `Dia ${day} de ${total}`,
      plannedScenes: "Cenas planeadas",
      plannedCost: "Custo planeado",
      contingencyHeld: (amount) => `${amount} em contingência`,
      location: "Localização",
      lockedFromPreProduction: "Fechado na pré-produção",
      status: "Estado",
      resolvedDays: (resolved, total) => `${resolved}/${total} dias de rodagem resolvidos`,
      statuses: { planned: "Planeado", completed: "Concluído", delayed: "Atrasado", cancelled: "Cancelado" },
    },
    difficulty: {
      eyebrow: "Pressão da cena",
      heading: "Cartões de dificuldade",
      intro: (label) => `Cenas iniciais para o primeiro passo jogável de rodagem de ${label === "first film" ? "o primeiro filme" : numberedLabel(label)}.`,
      score: "Pontuação de dificuldade",
      conflictLoad: "Carga de conflito",
      emotionalLoad: "Carga emocional",
      pacingPressure: "Pressão de ritmo",
      techniqueComplexity: "Complexidade técnica",
      locationLogistics: "Logística de localização",
    },
    event: {
      eyebrow: "Variável de rodagem",
      heading: "Escolher um evento de produção",
      intro: (label) => `Aplique um evento determinístico antes de resolver o dia de rodagem de ${label === "first film" ? "o primeiro filme" : numberedLabel(label)}.`,
      costImpact: "Impacto no custo",
      delay: "Atraso",
      upside: "Potencial positivo",
      possible: "Possível",
      no: "Não",
      delayDays: (days) => `${days} dia${days === 1 ? "" : "s"}`,
      types: { weather: "Meteorologia", technical: "Técnico", performance: "Interpretação", location: "Localização", budget: "Orçamento", conflict: "Conflito", inspiration: "Inspiração", safety: "Segurança", logistics: "Logística" },
      severities: { minor: "Ligeiro", moderate: "Moderado", major: "Grave" },
    },
    dayResult: {
      eyebrow: "Dia resolvido",
      heading: (label, day) => label === "first film" ? `Resultado do dia ${day}` : `${numberedLabel(label)} · resultado do dia ${day}`,
      takeQuality: (quality) => `Qualidade da tomada ${quality}`,
      completedScenes: "Cenas concluídas",
      delayedScenes: "Cenas atrasadas",
      noScenesDelayed: "Nenhuma cena atrasada",
      costSpent: "Custo gasto",
      scheduleDeltaLabel: "Desvio do plano",
      scheduleDelta: (days) => `${days} dia${days === 1 ? "" : "s"}`,
    },
    evaluation: {
      eyebrow: "Avaliação da produção",
      heading: (label) => label === "first film" ? "Relatório da rodagem" : `Relatório da rodagem de ${numberedLabel(label)}`,
      overall: (value) => `Geral ${value}`,
      completedDays: "Dias concluídos",
      delayedDays: "Dias atrasados",
      totalCostSpent: "Custo total gasto",
      averageTakeQuality: "Qualidade média das tomadas",
      scheduleHealth: "Saúde do plano",
      budgetHealth: "Saúde do orçamento",
      productionMorale: "Moral da produção",
      overallLabel: "Geral",
      nextStep: "Próximo passo",
      nextMessage: (label) => label === "first film" ? "A pós-produção é desbloqueada quando todos os dias de rodagem planeados estiverem resolvidos." : `Próximo passo: pós-produção de ${numberedLabel(label)}`,
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerShootCopy>;
