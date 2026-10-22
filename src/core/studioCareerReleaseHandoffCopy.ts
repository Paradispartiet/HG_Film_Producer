import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

/** Read-only explanation of the already locked post-production outcome at release. */
interface ReleaseHandoffCopy {
  readonly heading: string;
  readonly introduction: string;
  readonly lockedCut: string;
  readonly trailerStrength: string;
  readonly trailerPromise: string;
  readonly audienceInterest: string;
  readonly explanation: string;
  readonly disclaimer: string;
}

export const STUDIO_CAREER_RELEASE_HANDOFF_COPY: Readonly<Record<FilmWorkLanguage, ReleaseHandoffCopy>> = {
  en: {
    heading: "What you bring to release",
    introduction: "Your final cut and the trailer you approved are carried into this release decision.",
    lockedCut: "Locked cut",
    trailerStrength: "Trailer strength",
    trailerPromise: "Your recorded trailer promise",
    audienceInterest: "Trailer audience interest",
    explanation: "The release strategy's audience fit uses the finished film and trailer strength; critics also respond to overall post-production quality.",
    disclaimer: "These are recorded production results, not a forecast for any particular release strategy or a new score."
  },
  nb: {
    heading: "Dette tar du med til lanseringen",
    introduction: "Det ferdige klippet og traileren du godkjente, er grunnlaget for lanseringsvalget.",
    lockedCut: "Ferdig klipp",
    trailerStrength: "Trailerens kvalitet",
    trailerPromise: "Trailerens lagrede publikumsløfte",
    audienceInterest: "Publikumsinteresse for traileren",
    explanation: "Lanseringsstrategiens publikumstilpasning bygger blant annet på filmen og trailerens kvalitet. Kritikertilpasningen påvirkes også av samlet ferdigstillingskvalitet.",
    disclaimer: "Dette er lagrede produksjonsresultater, ikke en prognose for en bestemt lanseringsstrategi eller et nytt poengsystem."
  },
  fr: {
    heading: "Ce que vous apportez à la sortie",
    introduction: "Le montage final et la bande-annonce approuvée accompagnent votre décision de sortie.",
    lockedCut: "Montage final",
    trailerStrength: "Force de la bande-annonce",
    trailerPromise: "Promesse enregistrée de la bande-annonce",
    audienceInterest: "Intérêt du public pour la bande-annonce",
    explanation: "L'adéquation au public dépend notamment du film terminé et de la bande-annonce. La qualité globale de la postproduction contribue aussi à l'adéquation critique.",
    disclaimer: "Il s'agit de résultats enregistrés, pas de prévisions pour une stratégie précise ni d'un nouveau barème."
  },
  pt: {
    heading: "O que leva para o lançamento",
    introduction: "A montagem final e o trailer aprovado acompanham a decisão de lançamento.",
    lockedCut: "Montagem final",
    trailerStrength: "Força do trailer",
    trailerPromise: "Promessa registada do trailer",
    audienceInterest: "Interesse do público pelo trailer",
    explanation: "A adequação ao público depende, entre outros fatores, do filme finalizado e da força do trailer. A qualidade global da pós-produção também contribui para a adequação crítica.",
    disclaimer: "São resultados guardados da produção, não previsões para uma estratégia específica nem um novo sistema de pontos."
  }
};
