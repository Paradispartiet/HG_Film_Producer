import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type {
  ProductionCaseLearningHint,
  ProductionCaseLearningHintType,
  ProductionCaseLearningNextAction,
  ProductionCaseLearningReport,
} from "./productionCaseLearning.js";

export type ProductionCaseLearningGuidancePresentation = {
  readonly label: string;
  readonly description: string;
};

type ProductionCaseLearningCopy = {
  readonly hints: Record<ProductionCaseLearningHintType, ProductionCaseLearningGuidancePresentation>;
  readonly nextActions: {
    readonly choose: ProductionCaseLearningGuidancePresentation;
    readonly complete: ProductionCaseLearningGuidancePresentation;
  };
  readonly summaries: {
    readonly revisit: string;
    readonly developing: string;
    readonly clear: string;
  };
};

export const PRODUCTION_CASE_LEARNING_COPY: Record<FilmWorkLanguage, ProductionCaseLearningCopy> = {
  en: {
    hints: {
      choose: {
        label: "Choose an approach",
        description: "Read the film-specific targets and choose the approach that best explains how this part of the film works.",
      },
      revisit: {
        label: "Revisit this phase",
        description: "Compare your choice with the film-specific targets and the explanation before choosing again.",
      },
      compare: {
        label: "Compare the alternatives",
        description: "Your choice identifies part of the method. Compare it with the closest alternative to see what is more precise for this film.",
      },
    },
    nextActions: {
      choose: {
        label: "Choose an approach",
        description: "Study the targets and choose the explanation that best fits the film.",
      },
      complete: {
        label: "Complete the phase",
        description: "Read the feedback and learning focus, then mark the phase complete.",
      },
    },
    summaries: {
      revisit: "You completed the case. Some phases are worth revisiting so the film's method becomes clearer.",
      developing: "You completed the case and identified the main methods. Compare the partly fitting choices to sharpen the distinctions.",
      clear: "You completed the case and identified the film-specific method clearly across every phase.",
    },
  },
  nb: {
    hints: {
      choose: {
        label: "Velg en tilnærming",
        description: "Les de filmspesifikke målene og velg tilnærmingen som best forklarer hvordan denne delen av filmen fungerer.",
      },
      revisit: {
        label: "Gå tilbake til denne fasen",
        description: "Sammenlign valget ditt med de filmspesifikke målene og forklaringen før du velger på nytt.",
      },
      compare: {
        label: "Sammenlign alternativene",
        description: "Valget ditt identifiserer en del av metoden. Sammenlign det med det nærmeste alternativet for å se hva som er mest presist for denne filmen.",
      },
    },
    nextActions: {
      choose: {
        label: "Velg en tilnærming",
        description: "Studer målene og velg forklaringen som passer filmen best.",
      },
      complete: {
        label: "Fullfør fasen",
        description: "Les tilbakemeldingen og læringsfokuset, og marker deretter fasen som fullført.",
      },
    },
    summaries: {
      revisit: "Du har fullført caset. Noen faser er verdt å gå tilbake til, slik at filmens metode blir tydeligere.",
      developing: "Du har fullført caset og identifisert hovedmetodene. Sammenlign valgene som bare delvis passer, for å skjerpe forskjellene.",
      clear: "Du har fullført caset og identifisert den filmspesifikke metoden tydelig i alle faser.",
    },
  },
  fr: {
    hints: {
      choose: {
        label: "Choisissez une approche",
        description: "Lisez les objectifs propres au film et choisissez l’approche qui explique le mieux le fonctionnement de cette partie du film.",
      },
      revisit: {
        label: "Revenez sur cette phase",
        description: "Comparez votre choix aux objectifs propres au film et à l’explication avant de choisir à nouveau.",
      },
      compare: {
        label: "Comparez les options",
        description: "Votre choix identifie une partie de la méthode. Comparez-le à l’option la plus proche pour voir ce qui est le plus précis pour ce film.",
      },
    },
    nextActions: {
      choose: {
        label: "Choisissez une approche",
        description: "Étudiez les objectifs et choisissez l’explication qui correspond le mieux au film.",
      },
      complete: {
        label: "Terminez la phase",
        description: "Lisez le retour et l’objectif d’apprentissage, puis marquez la phase comme terminée.",
      },
    },
    summaries: {
      revisit: "Vous avez terminé le cas. Certaines phases méritent d’être revues afin de mieux comprendre la méthode du film.",
      developing: "Vous avez terminé le cas et identifié les principales méthodes. Comparez les choix qui ne conviennent que partiellement afin d’affiner les distinctions.",
      clear: "Vous avez terminé le cas et identifié clairement la méthode propre au film dans chaque phase.",
    },
  },
  pt: {
    hints: {
      choose: {
        label: "Escolha uma abordagem",
        description: "Leia os objetivos específicos do filme e escolha a abordagem que melhor explica como esta parte do filme funciona.",
      },
      revisit: {
        label: "Reveja esta fase",
        description: "Compare a sua escolha com os objetivos específicos do filme e com a explicação antes de escolher novamente.",
      },
      compare: {
        label: "Compare as alternativas",
        description: "A sua escolha identifica parte do método. Compare-a com a alternativa mais próxima para perceber o que é mais preciso para este filme.",
      },
    },
    nextActions: {
      choose: {
        label: "Escolha uma abordagem",
        description: "Estude os objetivos e escolha a explicação que melhor se adequa ao filme.",
      },
      complete: {
        label: "Conclua a fase",
        description: "Leia o feedback e o foco de aprendizagem e, em seguida, marque a fase como concluída.",
      },
    },
    summaries: {
      revisit: "Concluiu o caso. Vale a pena rever algumas fases para tornar mais claro o método do filme.",
      developing: "Concluiu o caso e identificou os principais métodos. Compare as escolhas que apenas se adequam parcialmente para tornar as distinções mais precisas.",
      clear: "Concluiu o caso e identificou claramente o método específico do filme em todas as fases.",
    },
  },
};

export function getProductionCaseLearningHintPresentation(
  language: FilmWorkLanguage,
  hint: ProductionCaseLearningHint,
): ProductionCaseLearningGuidancePresentation {
  return PRODUCTION_CASE_LEARNING_COPY[language].hints[hint.hintType];
}

export function getProductionCaseLearningNextActionPresentation(
  language: FilmWorkLanguage,
  action: ProductionCaseLearningNextAction,
): ProductionCaseLearningGuidancePresentation {
  const copy = PRODUCTION_CASE_LEARNING_COPY[language];
  if (action.actionType === "choose") return copy.nextActions.choose;
  if (action.actionType === "complete") return copy.nextActions.complete;
  if (action.label === PRODUCTION_CASE_LEARNING_COPY.en.hints.revisit.label) return copy.hints.revisit;
  if (action.label === PRODUCTION_CASE_LEARNING_COPY.en.hints.compare.label) return copy.hints.compare;
  return { label: action.label, description: action.description };
}

export function getProductionCaseLearningSummary(
  language: FilmWorkLanguage,
  report: Pick<ProductionCaseLearningReport, "revisitPhases" | "developingPhases">,
): string {
  const summaries = PRODUCTION_CASE_LEARNING_COPY[language].summaries;
  if (report.revisitPhases.length > 0) return summaries.revisit;
  if (report.developingPhases.length > 0) return summaries.developing;
  return summaries.clear;
}
