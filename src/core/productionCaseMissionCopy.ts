import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const PRODUCTION_CASE_MISSION_PHASES = [
  "case_orientation",
  "screenplay",
  "cinematography",
  "editing",
  "sound",
  "reflection",
] as const;

export type ProductionCaseMissionCopyPhase = (typeof PRODUCTION_CASE_MISSION_PHASES)[number];
export type ProductionCaseMissionChoiceQuality = "match" | "partial" | "miss";

export type ProductionCaseMissionPresentation = {
  readonly title: string;
  readonly prompt: string;
  readonly learningFocus: string;
};

type ProductionCaseMissionTemplate = {
  readonly title: string;
  readonly prompt: (caseTitle: string) => string;
  readonly learningFocus: string;
};

export type ProductionCaseMissionUiCopy = {
  readonly phases: Record<ProductionCaseMissionCopyPhase, ProductionCaseMissionTemplate>;
  readonly phaseComplete: string;
  readonly currentPhase: string;
  readonly openPhase: string;
  readonly completePhase: string;
  readonly undoComplete: string;
  readonly learningLabel: string;
  readonly feedback: {
    readonly match: string;
    readonly partial: (sourceTitle: string) => string;
    readonly miss: (sourceTitle: string) => string;
    readonly chooseBeforeCompleting: string;
  };
};

export const PRODUCTION_CASE_MISSION_UI_COPY: Record<FilmWorkLanguage, ProductionCaseMissionUiCopy> = {
  en: {
    phases: {
      case_orientation: {
        title: "Case orientation",
        prompt: (caseTitle) => `This is not a new film, but a production case in how ${caseTitle} is built. Identify the production problem and match choices to the film's concrete expression.`,
        learningFocus: "Understand how this film solves the overall production challenge.",
      },
      screenplay: {
        title: "Script choices",
        prompt: () => "Understand how this film solves the screenplay phase. Identify the production choices behind the scenes before locking in the development.",
        learningFocus: "Connect premise, conflict, and scene choices to the film's concrete dramaturgy.",
      },
      cinematography: {
        title: "Visual system",
        prompt: () => "Understand how this film solves photography and space. Match the choices to the film's concrete expression.",
        learningFocus: "Read how image choices, space, and blocking make the production problem playable.",
      },
      editing: {
        title: "Cutting rhythm",
        prompt: () => "Understand how this film solves the editing phase. Identify how rhythm, sequencing, and withholding build the case.",
        learningFocus: "See how the edit organizes the audience's understanding of the film.",
      },
      sound: {
        title: "Sound world",
        prompt: () => "Understand how this film solves the sound phase. Match sound choices, silence, and texture to the film's concrete expression.",
        learningFocus: "Use sound as a production choice, not generic mood.",
      },
      reflection: {
        title: "What the film teaches you",
        prompt: () => "This is not a new film, but a case in how the film is built. Summarize what the production choices teach you.",
        learningFocus: "Make the learning specific to this film and its built solutions.",
      },
    },
    phaseComplete: "Complete",
    currentPhase: "Current phase",
    openPhase: "Open phase",
    completePhase: "Complete phase",
    undoComplete: "Undo complete",
    learningLabel: "What this phase teaches:",
    feedback: {
      match: "Matches the case",
      partial: (sourceTitle) => `Close in craft — but this is how ${sourceTitle} solves this phase, not this film.`,
      miss: (sourceTitle) => `That is ${sourceTitle}'s answer — a different production logic than this case.`,
      chooseBeforeCompleting: "Choose an approach before completing this phase.",
    },
  },
  nb: {
    phases: {
      case_orientation: {
        title: "Orientering i caset",
        prompt: (caseTitle) => `Dette er ikke en ny film, men et produksjonscase om hvordan ${caseTitle} er bygget. Identifiser produksjonsproblemet og koble valgene til filmens konkrete uttrykk.`,
        learningFocus: "Forstå hvordan filmen løser den overordnede produksjonsutfordringen.",
      },
      screenplay: {
        title: "Manusvalg",
        prompt: () => "Forstå hvordan filmen løser manusfasen. Identifiser produksjonsvalgene bak scenene før utviklingen låses.",
        learningFocus: "Koble premiss, konflikt og scenevalg til filmens konkrete dramaturgi.",
      },
      cinematography: {
        title: "Visuelt system",
        prompt: () => "Forstå hvordan filmen løser foto og rom. Koble valgene til filmens konkrete uttrykk.",
        learningFocus: "Les hvordan bildevalg, rom og blocking gjør produksjonsproblemet konkret i scenen.",
      },
      editing: {
        title: "Klipperytme",
        prompt: () => "Forstå hvordan filmen løser klippefasen. Identifiser hvordan rytme, rekkefølge og tilbakeholdelse av informasjon bygger caset.",
        learningFocus: "Se hvordan klippen organiserer publikums forståelse av filmen.",
      },
      sound: {
        title: "Lydverden",
        prompt: () => "Forstå hvordan filmen løser lydfasen. Koble lydvalg, stillhet og tekstur til filmens konkrete uttrykk.",
        learningFocus: "Bruk lyd som et produksjonsvalg, ikke som generell stemning.",
      },
      reflection: {
        title: "Hva filmen lærer deg",
        prompt: () => "Dette er ikke en ny film, men et case om hvordan filmen er bygget. Oppsummer hva produksjonsvalgene lærer deg.",
        learningFocus: "Gjør læringen spesifikk for denne filmen og løsningene som faktisk er bygget inn.",
      },
    },
    phaseComplete: "Fullført",
    currentPhase: "Aktiv fase",
    openPhase: "Åpen fase",
    completePhase: "Fullfør fase",
    undoComplete: "Angre fullføring",
    learningLabel: "Dette lærer fasen deg:",
    feedback: {
      match: "Passer til caset",
      partial: (sourceTitle) => `Nært faglig — men det er slik ${sourceTitle} løser denne fasen, ikke denne filmen.`,
      miss: (sourceTitle) => `Det er løsningen i ${sourceTitle} — en annen produksjonslogikk enn i dette caset.`,
      chooseBeforeCompleting: "Velg en tilnærming før du fullfører denne fasen.",
    },
  },
  fr: {
    phases: {
      case_orientation: {
        title: "Orientation du cas",
        prompt: (caseTitle) => `Il ne s’agit pas d’un nouveau film, mais d’un cas de production montrant comment ${caseTitle} est construit. Identifiez le problème de production et reliez les choix à l’expression concrète du film.`,
        learningFocus: "Comprendre comment ce film résout le défi global de production.",
      },
      screenplay: {
        title: "Choix de scénario",
        prompt: () => "Comprenez comment ce film résout la phase d’écriture. Identifiez les choix de production qui façonnent les scènes avant de verrouiller le développement.",
        learningFocus: "Reliez prémisse, conflit et choix de scène à la dramaturgie concrète du film.",
      },
      cinematography: {
        title: "Système visuel",
        prompt: () => "Comprenez comment ce film travaille l’image et l’espace. Reliez les choix à l’expression concrète du film.",
        learningFocus: "Lisez comment les choix d’image, l’espace, les placements et les déplacements rendent le problème de production concret à l’écran.",
      },
      editing: {
        title: "Rythme de montage",
        prompt: () => "Comprenez comment ce film résout la phase de montage. Identifiez comment le rythme, l’enchaînement et la rétention d’information construisent le cas.",
        learningFocus: "Voyez comment le montage organise la compréhension du film par le public.",
      },
      sound: {
        title: "Univers sonore",
        prompt: () => "Comprenez comment ce film résout la phase sonore. Reliez les choix de son, le silence et la texture à l’expression concrète du film.",
        learningFocus: "Utilisez le son comme un choix de production, et non comme une ambiance générique.",
      },
      reflection: {
        title: "Ce que le film vous apprend",
        prompt: () => "Il ne s’agit pas d’un nouveau film, mais d’un cas montrant comment le film est construit. Résumez ce que les choix de production vous apprennent.",
        learningFocus: "Rendez l’apprentissage spécifique à ce film et aux solutions concrètement mises en œuvre.",
      },
    },
    phaseComplete: "Terminée",
    currentPhase: "Phase en cours",
    openPhase: "Phase ouverte",
    completePhase: "Terminer la phase",
    undoComplete: "Annuler la validation",
    learningLabel: "Ce que cette phase vous apprend :",
    feedback: {
      match: "Correspond au cas",
      partial: (sourceTitle) => `Approche proche — mais c’est ainsi que ${sourceTitle} résout cette phase, pas ce film.`,
      miss: (sourceTitle) => `C’est la réponse de ${sourceTitle} — une logique de production différente de ce cas.`,
      chooseBeforeCompleting: "Choisissez une approche avant de terminer cette phase.",
    },
  },
  pt: {
    phases: {
      case_orientation: {
        title: "Orientação do caso",
        prompt: (caseTitle) => `Este não é um novo filme, mas um caso de produção sobre a forma como ${caseTitle} é construído. Identifique o problema de produção e relacione as escolhas com a expressão concreta do filme.`,
        learningFocus: "Compreenda como este filme resolve o desafio global de produção.",
      },
      screenplay: {
        title: "Escolhas de argumento",
        prompt: () => "Compreenda como este filme resolve a fase de argumento. Identifique as escolhas de produção por detrás das cenas antes de fechar o desenvolvimento.",
        learningFocus: "Relacione premissa, conflito e escolhas de cena com a dramaturgia concreta do filme.",
      },
      cinematography: {
        title: "Sistema visual",
        prompt: () => "Compreenda como este filme resolve a fotografia e o espaço. Relacione as escolhas com a expressão concreta do filme.",
        learningFocus: "Leia como as escolhas de imagem, o espaço e a marcação cénica tornam o problema de produção concreto no ecrã.",
      },
      editing: {
        title: "Ritmo de montagem",
        prompt: () => "Compreenda como este filme resolve a fase de montagem. Identifique como o ritmo, a sequência e a retenção de informação constroem o caso.",
        learningFocus: "Veja como a montagem organiza a compreensão do filme pelo público.",
      },
      sound: {
        title: "Universo sonoro",
        prompt: () => "Compreenda como este filme resolve a fase de som. Relacione escolhas sonoras, silêncio e textura com a expressão concreta do filme.",
        learningFocus: "Use o som como uma escolha de produção, não apenas como ambiente genérico.",
      },
      reflection: {
        title: "O que o filme lhe ensina",
        prompt: () => "Este não é um novo filme, mas um caso sobre a forma como o filme é construído. Resuma o que as escolhas de produção lhe ensinam.",
        learningFocus: "Torne a aprendizagem específica deste filme e das soluções concretamente construídas.",
      },
    },
    phaseComplete: "Concluída",
    currentPhase: "Fase atual",
    openPhase: "Fase aberta",
    completePhase: "Concluir fase",
    undoComplete: "Anular conclusão",
    learningLabel: "O que esta fase ensina:",
    feedback: {
      match: "Corresponde ao caso",
      partial: (sourceTitle) => `É uma solução próxima — mas é assim que ${sourceTitle} resolve esta fase, não este filme.`,
      miss: (sourceTitle) => `Essa é a resposta de ${sourceTitle} — uma lógica de produção diferente da deste caso.`,
      chooseBeforeCompleting: "Escolha uma abordagem antes de concluir esta fase.",
    },
  },
};

const PARTIAL_FEEDBACK_PREFIX = "Close in craft — but this is how ";
const PARTIAL_FEEDBACK_SUFFIX = " solves this phase, not this film.";
const MISS_FEEDBACK_PREFIX = "That is ";
const MISS_FEEDBACK_SUFFIX = "'s answer — a different production logic than this case.";

export function getProductionCaseMissionPresentation(
  language: FilmWorkLanguage,
  phase: ProductionCaseMissionCopyPhase,
  caseTitle: string,
): ProductionCaseMissionPresentation {
  const copy = PRODUCTION_CASE_MISSION_UI_COPY[language].phases[phase];
  return {
    title: copy.title,
    prompt: copy.prompt(caseTitle),
    learningFocus: copy.learningFocus,
  };
}

export function getProductionCaseChoiceFeedback(
  language: FilmWorkLanguage,
  quality: ProductionCaseMissionChoiceQuality,
  canonicalFeedback: string,
): string {
  const feedback = PRODUCTION_CASE_MISSION_UI_COPY[language].feedback;
  if (quality === "match") return feedback.match;

  if (quality === "partial") {
    const sourceTitle = extractTemplateValue(canonicalFeedback, PARTIAL_FEEDBACK_PREFIX, PARTIAL_FEEDBACK_SUFFIX);
    return sourceTitle ? feedback.partial(sourceTitle) : canonicalFeedback;
  }

  const sourceTitle = extractTemplateValue(canonicalFeedback, MISS_FEEDBACK_PREFIX, MISS_FEEDBACK_SUFFIX);
  return sourceTitle ? feedback.miss(sourceTitle) : canonicalFeedback;
}

function extractTemplateValue(value: string, prefix: string, suffix: string): string | undefined {
  if (!value.startsWith(prefix) || !value.endsWith(suffix)) return undefined;
  const extracted = value.slice(prefix.length, value.length - suffix.length).trim();
  return extracted || undefined;
}
