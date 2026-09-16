import type { PostDecisionType, PostProductionStat, PostStatChanges, TrailerStrategyType } from "../domain/post.js";
import { getFilmWorkIntlLocale, type FilmWorkLanguage } from "./filmWorkLanguage.js";

type ProjectLabel = "first film" | `film ${number}`;
type ChoiceLabelKey = "edit" | "sound" | "music" | "color" | "trailer";

interface DecisionSectionCopy {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly effects: readonly [string, string];
}

interface PostProductionCopy {
  readonly panel: {
    readonly startEyebrow: (projectLabel: ProjectLabel) => string;
    readonly heading: (projectLabel: ProjectLabel, projectTitle: string) => string;
    readonly description: string;
    readonly choiceLabels: Readonly<Record<ChoiceLabelKey, string>>;
    readonly missingChoices: (labels: readonly string[]) => string;
    readonly selectedCount: (count: number) => string;
    readonly lockHint: string;
    readonly lockButton: (projectLabel: ProjectLabel) => string;
  };
  readonly edit: DecisionSectionCopy & { readonly pacing: string; readonly structure: string };
  readonly sound: DecisionSectionCopy & { readonly immersion: string; readonly clarity: string };
  readonly music: DecisionSectionCopy & { readonly emotion: string; readonly identity: string };
  readonly color: DecisionSectionCopy & { readonly visual: string; readonly mood: string };
  readonly trailer: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly description: string;
    readonly audience: string;
    readonly promise: string;
    readonly riskCost: string;
    readonly strategyTypes: Readonly<Record<TrailerStrategyType, string>>;
  };
  readonly decisionCard: {
    readonly types: Readonly<Record<PostDecisionType, string>>;
    readonly decision: string;
    readonly solves: string;
    readonly risk: string;
    readonly cost: string;
  };
  readonly screening: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly description: string;
    readonly metrics: {
      readonly clarity: string;
      readonly pacing: string;
      readonly emotion: string;
      readonly audienceHook: string;
      readonly confusionRisk: string;
    };
    readonly recommendedChanges: string;
    readonly noRevision: string;
  };
  readonly result: {
    readonly metrics: {
      readonly edit: string;
      readonly sound: string;
      readonly music: string;
      readonly color: string;
      readonly screening: string;
      readonly trailer: string;
      readonly lockedCut: string;
      readonly overall: string;
    };
    readonly lockedEyebrow: (projectLabel: ProjectLabel) => string;
    readonly heading: (projectLabel: ProjectLabel) => string;
    readonly overall: string;
    readonly finalEyebrow: string;
    readonly scorecardHeading: string;
    readonly totalCost: (formattedCost: string) => string;
    readonly nextStep: string;
    readonly nextMessage: (projectLabel: ProjectLabel) => string;
    readonly statLabels: Readonly<Record<PostProductionStat, string>>;
  };
}

export const STUDIO_CAREER_POST_PRODUCTION_COPY: Readonly<Record<FilmWorkLanguage, PostProductionCopy>> = {
  en: {
    panel: {
      startEyebrow: (projectLabel) => projectLabel === "first film" ? "Start post-production" : `Start post-production for ${formatProjectLabel("en", projectLabel)}`,
      heading: (projectLabel, projectTitle) => projectLabel === "first film" ? "Edit suite & finishing desk" : `Finish ${projectTitle}`,
      description: "Shape the locked cut, test it with an audience, and define the trailer promise.",
      choiceLabels: { edit: "an edit decision", sound: "a sound decision", music: "a music decision", color: "a color decision", trailer: "a trailer strategy" },
      missingChoices: (labels) => `Choose ${formatList("en", labels)} before locking post-production.`,
      selectedCount: (count) => `${count}/5 finishing choices selected`,
      lockHint: "Locking runs the test screening, trailer cut and post-production evaluation.",
      lockButton: (projectLabel) => projectLabel === "first film" ? "Lock post-production" : `Lock post-production for ${formatProjectLabel("en", projectLabel)}`
    },
    edit: { eyebrow: "Editorial", heading: "Shape the cut", description: "Choose the cut strategy that controls rhythm and story structure.", effects: ["Pacing", "Structure"], pacing: "Pacing", structure: "Structure" },
    sound: { eyebrow: "Sound", heading: "Build the soundscape", description: "Balance immersion with story and dialogue clarity.", effects: ["Immersion", "Clarity"], immersion: "Immersion", clarity: "Clarity" },
    music: { eyebrow: "Music", heading: "Set the musical language", description: "Choose how the score carries emotion and gives the film an identity.", effects: ["Emotion", "Identity"], emotion: "Emotion", identity: "Identity" },
    color: { eyebrow: "Color", heading: "Finish the image", description: "Lock the visual treatment and emotional atmosphere of the final cut.", effects: ["Visual", "Mood"], visual: "Visual", mood: "Mood" },
    trailer: {
      eyebrow: "Positioning", heading: "Cut the trailer", description: "Choose the promise that will introduce this film to its first audience.", audience: "Audience", promise: "Promise", riskCost: "Risk / cost",
      strategyTypes: { prestige: "prestige", audience_hook: "audience hook", genre_promise: "genre promise", mystery: "mystery", character: "character", spectacle: "spectacle", festival: "festival" }
    },
    decisionCard: { types: { edit: "Edit", sound: "Sound", music: "Music", color: "Color" }, decision: "decision", solves: "Solves", risk: "Risk", cost: "Cost" },
    screening: { eyebrow: "Test screening", heading: "Audience room readout", description: "Deterministic feedback from the current cut and first shoot-day evidence.", metrics: { clarity: "Clarity", pacing: "Pacing", emotion: "Emotion", audienceHook: "Audience hook", confusionRisk: "Confusion risk" }, recommendedChanges: "Recommended changes", noRevision: "No major revision priority was identified." },
    result: {
      metrics: { edit: "Edit", sound: "Sound", music: "Music", color: "Color", screening: "Test screening", trailer: "Trailer", lockedCut: "Locked cut", overall: "Overall" },
      lockedEyebrow: (projectLabel) => projectLabel === "first film" ? "Post-production locked" : `${formatProjectLabel("en", projectLabel)} post-production locked`,
      heading: (projectLabel) => projectLabel === "first film" ? "Finishing report" : `${formatProjectLabel("en", projectLabel)} finishing report`,
      overall: "Overall", finalEyebrow: "Final evaluation", scorecardHeading: "Locked-cut scorecard", totalCost: (cost) => `Total finishing cost ${cost}`, nextStep: "Next step",
      nextMessage: (projectLabel) => projectLabel === "first film" ? "Release is next, but is not part of this playable step." : `Next step: release ${formatProjectLabel("en", projectLabel)}`,
      statLabels: { quality: "quality", pacing: "pacing", structure: "structure", emotion: "emotion", visualStyle: "visual style", sound: "sound", audienceAppeal: "audience appeal", criticalAppeal: "critical appeal", clarity: "clarity", immersion: "immersion", identity: "identity", mood: "mood", genreClarity: "genre clarity" }
    }
  },
  nb: {
    panel: {
      startEyebrow: (projectLabel) => projectLabel === "first film" ? "Start postproduksjon" : `Start postproduksjon for ${formatProjectLabel("nb", projectLabel)}`,
      heading: (projectLabel, projectTitle) => projectLabel === "first film" ? "Klipperom og ferdigstillingsbord" : `Fullfør ${projectTitle}`,
      description: "Form den låste klippen, test den med et publikum og definer løftet i traileren.",
      choiceLabels: { edit: "en klippebeslutning", sound: "en lydbeslutning", music: "en musikkbeslutning", color: "en fargebeslutning", trailer: "en trailerstrategi" },
      missingChoices: (labels) => `Velg ${formatList("nb", labels)} før du låser postproduksjonen.`,
      selectedCount: (count) => `${count}/5 ferdigstillingsvalg valgt`,
      lockHint: "Låsing kjører testvisning, trailerklipp og evaluering av postproduksjonen.",
      lockButton: (projectLabel) => projectLabel === "first film" ? "Lås postproduksjon" : `Lås postproduksjon for ${formatProjectLabel("nb", projectLabel)}`
    },
    edit: { eyebrow: "Klipp", heading: "Form klippen", description: "Velg klippestrategien som styrer rytme og historiestruktur.", effects: ["Tempo", "Struktur"], pacing: "Tempo", structure: "Struktur" },
    sound: { eyebrow: "Lyd", heading: "Bygg lydbildet", description: "Balanser innlevelse med historie og tydelig dialog.", effects: ["Innlevelse", "Tydelighet"], immersion: "Innlevelse", clarity: "Tydelighet" },
    music: { eyebrow: "Musikk", heading: "Sett det musikalske språket", description: "Velg hvordan musikken bærer følelser og gir filmen en identitet.", effects: ["Følelse", "Identitet"], emotion: "Følelse", identity: "Identitet" },
    color: { eyebrow: "Farge", heading: "Ferdigstill bildet", description: "Lås det visuelle uttrykket og den emosjonelle atmosfæren i sluttklippen.", effects: ["Visuelt", "Stemning"], visual: "Visuelt", mood: "Stemning" },
    trailer: {
      eyebrow: "Posisjonering", heading: "Klipp traileren", description: "Velg løftet som skal introdusere filmen for sitt første publikum.", audience: "Publikum", promise: "Løfte", riskCost: "Risiko / kostnad",
      strategyTypes: { prestige: "prestisje", audience_hook: "publikumskrok", genre_promise: "sjangerløfte", mystery: "mysterium", character: "karakter", spectacle: "spektakel", festival: "festival" }
    },
    decisionCard: { types: { edit: "Klipp", sound: "Lyd", music: "Musikk", color: "Farge" }, decision: "beslutning", solves: "Løser", risk: "Risiko", cost: "Kostnad" },
    screening: { eyebrow: "Testvisning", heading: "Tilbakemelding fra publikum", description: "Deterministisk tilbakemelding fra gjeldende klipp og bevis fra første opptaksdag.", metrics: { clarity: "Tydelighet", pacing: "Tempo", emotion: "Følelse", audienceHook: "Publikumskrok", confusionRisk: "Forvirringsrisiko" }, recommendedChanges: "Anbefalte endringer", noRevision: "Ingen større revisjonsprioritet ble identifisert." },
    result: {
      metrics: { edit: "Klipp", sound: "Lyd", music: "Musikk", color: "Farge", screening: "Testvisning", trailer: "Trailer", lockedCut: "Låst klipp", overall: "Totalt" },
      lockedEyebrow: (projectLabel) => projectLabel === "first film" ? "Postproduksjon låst" : `${formatProjectLabel("nb", projectLabel)} – postproduksjon låst`,
      heading: (projectLabel) => projectLabel === "first film" ? "Ferdigstillingsrapport" : `${formatProjectLabel("nb", projectLabel)} – ferdigstillingsrapport`,
      overall: "Totalt", finalEyebrow: "Sluttevaluering", scorecardHeading: "Resultatkort for låst klipp", totalCost: (cost) => `Total ferdigstillingskostnad ${cost}`, nextStep: "Neste steg",
      nextMessage: (projectLabel) => projectLabel === "first film" ? "Lansering er neste steg, men er ikke del av dette spillbare steget." : `Neste steg: lanser ${formatProjectLabel("nb", projectLabel)}`,
      statLabels: { quality: "kvalitet", pacing: "tempo", structure: "struktur", emotion: "følelse", visualStyle: "visuell stil", sound: "lyd", audienceAppeal: "publikumsappell", criticalAppeal: "kritikerappell", clarity: "tydelighet", immersion: "innlevelse", identity: "identitet", mood: "stemning", genreClarity: "sjangerklarhet" }
    }
  },
  fr: {
    panel: {
      startEyebrow: (projectLabel) => projectLabel === "first film" ? "Commencer la postproduction" : `Commencer la postproduction de ${formatProjectLabel("fr", projectLabel)}`,
      heading: (projectLabel, projectTitle) => projectLabel === "first film" ? "Salle de montage et finition" : `Finaliser ${projectTitle}`,
      description: "Façonnez le montage verrouillé, testez-le auprès d'un public et définissez la promesse de la bande-annonce.",
      choiceLabels: { edit: "une décision de montage", sound: "une décision sonore", music: "une décision musicale", color: "une décision d'étalonnage", trailer: "une stratégie de bande-annonce" },
      missingChoices: (labels) => `Choisissez ${formatList("fr", labels)} avant de verrouiller la postproduction.`,
      selectedCount: (count) => `${count}/5 choix de finition sélectionnés`,
      lockHint: "Le verrouillage lance la projection test, le montage de la bande-annonce et l'évaluation de la postproduction.",
      lockButton: (projectLabel) => projectLabel === "first film" ? "Verrouiller la postproduction" : `Verrouiller la postproduction de ${formatProjectLabel("fr", projectLabel)}`
    },
    edit: { eyebrow: "Montage", heading: "Façonner le montage", description: "Choisissez la stratégie de montage qui contrôle le rythme et la structure du récit.", effects: ["Rythme", "Structure"], pacing: "Rythme", structure: "Structure" },
    sound: { eyebrow: "Son", heading: "Construire le paysage sonore", description: "Équilibrez l'immersion avec le récit et la clarté des dialogues.", effects: ["Immersion", "Clarté"], immersion: "Immersion", clarity: "Clarté" },
    music: { eyebrow: "Musique", heading: "Définir le langage musical", description: "Choisissez comment la musique porte l'émotion et donne une identité au film.", effects: ["Émotion", "Identité"], emotion: "Émotion", identity: "Identité" },
    color: { eyebrow: "Étalonnage", heading: "Finaliser l'image", description: "Verrouillez le traitement visuel et l'atmosphère émotionnelle du montage final.", effects: ["Visuel", "Ambiance"], visual: "Visuel", mood: "Ambiance" },
    trailer: {
      eyebrow: "Positionnement", heading: "Monter la bande-annonce", description: "Choisissez la promesse qui présentera ce film à son premier public.", audience: "Public", promise: "Promesse", riskCost: "Risque / coût",
      strategyTypes: { prestige: "prestige", audience_hook: "accroche public", genre_promise: "promesse de genre", mystery: "mystère", character: "personnage", spectacle: "spectacle", festival: "festival" }
    },
    decisionCard: { types: { edit: "Montage", sound: "Son", music: "Musique", color: "Étalonnage" }, decision: "décision", solves: "Résout", risk: "Risque", cost: "Coût" },
    screening: { eyebrow: "Projection test", heading: "Retour du public", description: "Retour déterministe fondé sur le montage actuel et les éléments de la première journée de tournage.", metrics: { clarity: "Clarté", pacing: "Rythme", emotion: "Émotion", audienceHook: "Accroche public", confusionRisk: "Risque de confusion" }, recommendedChanges: "Changements recommandés", noRevision: "Aucune priorité de révision majeure n'a été identifiée." },
    result: {
      metrics: { edit: "Montage", sound: "Son", music: "Musique", color: "Étalonnage", screening: "Projection test", trailer: "Bande-annonce", lockedCut: "Montage verrouillé", overall: "Global" },
      lockedEyebrow: (projectLabel) => projectLabel === "first film" ? "Postproduction verrouillée" : `${formatProjectLabel("fr", projectLabel)} – postproduction verrouillée`,
      heading: (projectLabel) => projectLabel === "first film" ? "Rapport de finition" : `${formatProjectLabel("fr", projectLabel)} – rapport de finition`,
      overall: "Global", finalEyebrow: "Évaluation finale", scorecardHeading: "Tableau de bord du montage verrouillé", totalCost: (cost) => `Coût total de finition ${cost}`, nextStep: "Étape suivante",
      nextMessage: (projectLabel) => projectLabel === "first film" ? "La sortie est la prochaine étape, mais elle ne fait pas partie de cette étape jouable." : `Étape suivante : sortir ${formatProjectLabel("fr", projectLabel)}`,
      statLabels: { quality: "qualité", pacing: "rythme", structure: "structure", emotion: "émotion", visualStyle: "style visuel", sound: "son", audienceAppeal: "attrait public", criticalAppeal: "attrait critique", clarity: "clarté", immersion: "immersion", identity: "identité", mood: "ambiance", genreClarity: "clarté du genre" }
    }
  },
  pt: {
    panel: {
      startEyebrow: (projectLabel) => projectLabel === "first film" ? "Iniciar pós-produção" : `Iniciar pós-produção de ${formatProjectLabel("pt", projectLabel)}`,
      heading: (projectLabel, projectTitle) => projectLabel === "first film" ? "Sala de montagem e finalização" : `Finalizar ${projectTitle}`,
      description: "Dê forma à montagem fechada, teste-a com um público e defina a promessa do trailer.",
      choiceLabels: { edit: "uma decisão de montagem", sound: "uma decisão de som", music: "uma decisão de música", color: "uma decisão de cor", trailer: "uma estratégia de trailer" },
      missingChoices: (labels) => `Escolha ${formatList("pt", labels)} antes de fechar a pós-produção.`,
      selectedCount: (count) => `${count}/5 escolhas de finalização selecionadas`,
      lockHint: "Fechar executa a sessão de teste, o corte do trailer e a avaliação da pós-produção.",
      lockButton: (projectLabel) => projectLabel === "first film" ? "Fechar pós-produção" : `Fechar pós-produção de ${formatProjectLabel("pt", projectLabel)}`
    },
    edit: { eyebrow: "Montagem", heading: "Dar forma à montagem", description: "Escolha a estratégia de montagem que controla o ritmo e a estrutura da história.", effects: ["Ritmo", "Estrutura"], pacing: "Ritmo", structure: "Estrutura" },
    sound: { eyebrow: "Som", heading: "Construir a paisagem sonora", description: "Equilibre a imersão com a história e a clareza do diálogo.", effects: ["Imersão", "Clareza"], immersion: "Imersão", clarity: "Clareza" },
    music: { eyebrow: "Música", heading: "Definir a linguagem musical", description: "Escolha como a música transporta emoção e dá identidade ao filme.", effects: ["Emoção", "Identidade"], emotion: "Emoção", identity: "Identidade" },
    color: { eyebrow: "Cor", heading: "Finalizar a imagem", description: "Feche o tratamento visual e a atmosfera emocional da montagem final.", effects: ["Visual", "Ambiente"], visual: "Visual", mood: "Ambiente" },
    trailer: {
      eyebrow: "Posicionamento", heading: "Montar o trailer", description: "Escolha a promessa que apresentará este filme ao seu primeiro público.", audience: "Público", promise: "Promessa", riskCost: "Risco / custo",
      strategyTypes: { prestige: "prestígio", audience_hook: "gancho de público", genre_promise: "promessa de género", mystery: "mistério", character: "personagem", spectacle: "espetáculo", festival: "festival" }
    },
    decisionCard: { types: { edit: "Montagem", sound: "Som", music: "Música", color: "Cor" }, decision: "decisão", solves: "Resolve", risk: "Risco", cost: "Custo" },
    screening: { eyebrow: "Sessão de teste", heading: "Leitura da sala", description: "Feedback determinístico da montagem atual e das evidências do primeiro dia de rodagem.", metrics: { clarity: "Clareza", pacing: "Ritmo", emotion: "Emoção", audienceHook: "Gancho de público", confusionRisk: "Risco de confusão" }, recommendedChanges: "Alterações recomendadas", noRevision: "Não foi identificada nenhuma prioridade de revisão importante." },
    result: {
      metrics: { edit: "Montagem", sound: "Som", music: "Música", color: "Cor", screening: "Sessão de teste", trailer: "Trailer", lockedCut: "Montagem fechada", overall: "Global" },
      lockedEyebrow: (projectLabel) => projectLabel === "first film" ? "Pós-produção fechada" : `${formatProjectLabel("pt", projectLabel)} – pós-produção fechada`,
      heading: (projectLabel) => projectLabel === "first film" ? "Relatório de finalização" : `${formatProjectLabel("pt", projectLabel)} – relatório de finalização`,
      overall: "Global", finalEyebrow: "Avaliação final", scorecardHeading: "Quadro da montagem fechada", totalCost: (cost) => `Custo total de finalização ${cost}`, nextStep: "Próximo passo",
      nextMessage: (projectLabel) => projectLabel === "first film" ? "O lançamento é o próximo passo, mas não faz parte desta etapa jogável." : `Próximo passo: lançar ${formatProjectLabel("pt", projectLabel)}`,
      statLabels: { quality: "qualidade", pacing: "ritmo", structure: "estrutura", emotion: "emoção", visualStyle: "estilo visual", sound: "som", audienceAppeal: "apelo ao público", criticalAppeal: "apelo crítico", clarity: "clareza", immersion: "imersão", identity: "identidade", mood: "ambiente", genreClarity: "clareza de género" }
    }
  }
};

export function formatStudioCareerPostProductionMoney(value: number, language: FilmWorkLanguage): string {
  return value.toLocaleString(getFilmWorkIntlLocale(language), { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function formatStudioCareerPostProductionStats(changes: PostStatChanges, language: FilmWorkLanguage): string {
  const labels = STUDIO_CAREER_POST_PRODUCTION_COPY[language].result.statLabels;
  return Object.entries(changes)
    .map(([stat, value]) => `${labels[stat as PostProductionStat]} ${value !== undefined && value >= 0 ? "+" : ""}${value}`)
    .join(" · ");
}

function formatProjectLabel(language: FilmWorkLanguage, projectLabel: ProjectLabel): string {
  if (projectLabel === "first film") {
    if (language === "nb") return "første film";
    if (language === "fr") return "premier film";
    if (language === "pt") return "primeiro filme";
    return "first film";
  }
  return `Film ${projectLabel.slice("film ".length)}`;
}

function formatList(language: FilmWorkLanguage, items: readonly string[]): string {
  if (items.length === 0) {
    if (language === "nb") return "alle fem ferdigstillingsvalg";
    if (language === "fr") return "les cinq choix de finition";
    if (language === "pt") return "as cinco escolhas de finalização";
    return "all five finishing choices";
  }
  if (items.length === 1) return items[0] ?? "";
  const conjunction = language === "nb" ? "og" : language === "fr" ? "et" : language === "pt" ? "e" : "and";
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} ${conjunction} ${items.at(-1)}`;
}
