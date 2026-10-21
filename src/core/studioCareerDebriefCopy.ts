import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

interface StudioCareerDebriefCopy {
  readonly heading: string;
  readonly introduction: string;
  readonly handoffHeading: string;
  readonly handoffHint: string;
  readonly development: string;
  readonly preProduction: string;
  readonly shooting: string;
  readonly postProduction: string;
  readonly release: string;
  readonly developmentScore: string;
  readonly chosenLocation: string;
  readonly teamQuality: string;
  readonly shootDays: string;
  readonly takeQuality: string;
  readonly editChoice: string;
  readonly lockedCut: string;
  readonly strategyFit: string;
  readonly releaseOutcome: string;
  readonly studioAfterClose: string;
  readonly netYearNote: string;
  readonly cashChange: string;
  readonly reputationChange: string;
  readonly prestigeChange: string;
  readonly developmentPaths: { readonly mentor: string; readonly location: string; readonly script: string };
}

export const STUDIO_CAREER_DEBRIEF_COPY = {
  en: {
    heading: "How this film came together",
    introduction: "Your actual production decisions and the results measured by the game. These are observations, not invented score bonuses.",
    handoffHeading: "What happened on the previous film",
    handoffHint: "Review the previous production before making the next film's decisions.",
    development: "Development",
    preProduction: "Crew and location",
    shooting: "On set",
    postProduction: "Final cut",
    release: "Release",
    developmentScore: "Development result",
    chosenLocation: "Location",
    teamQuality: "Team evaluation",
    shootDays: "Shoot days",
    takeQuality: "Average take quality",
    editChoice: "Editing decision",
    lockedCut: "Locked cut quality",
    strategyFit: "Release strategy score",
    releaseOutcome: "Release outcome",
    studioAfterClose: "Studio after year close",
    netYearNote: "Net year-close changes also include studio expenses and milestones, not only this film's release.",
    cashChange: "Cash",
    reputationChange: "Reputation",
    prestigeChange: "Prestige",
    developmentPaths: { mentor: "Mentor lesson", location: "Location scout", script: "Script" },
  },
  nb: {
    heading: "Slik ble filmen til",
    introduction: "Valgene du faktisk tok og resultatene spillmotoren beregnet. Ingen oppdiktede poengbonuser.",
    handoffHeading: "Erfaringer fra forrige film",
    handoffHint: "Se hvordan forrige produksjon gikk før du tar valgene for neste film.",
    development: "Utvikling",
    preProduction: "Team og innspillingssted",
    shooting: "På settet",
    postProduction: "Ferdig klipp",
    release: "Lansering",
    developmentScore: "Utviklingsresultat",
    chosenLocation: "Innspillingssted",
    teamQuality: "Teamvurdering",
    shootDays: "Opptaksdager",
    takeQuality: "Gjennomsnittlig tagning",
    editChoice: "Klippevalg",
    lockedCut: "Kvalitet på ferdig klipp",
    strategyFit: "Poeng for lanseringsstrategi",
    releaseOutcome: "Lanseringsresultat",
    studioAfterClose: "Studio etter årsoppgjøret",
    netYearNote: "Netto endringer ved årsoppgjøret omfatter også studioutgifter og milepæler, ikke bare lanseringen.",
    cashChange: "Penger",
    reputationChange: "Omdømme",
    prestigeChange: "Prestisje",
    developmentPaths: { mentor: "Mentorveiledning", location: "Locationsøk", script: "Manus" },
  },
  fr: {
    heading: "Comment ce film a pris forme",
    introduction: "Vos décisions réelles et les résultats calculés par le jeu, sans bonus de score inventés.",
    handoffHeading: "Bilan du film précédent",
    handoffHint: "Revoyez cette production avant de prendre les décisions du prochain film.",
    development: "Développement",
    preProduction: "Équipe et lieu",
    shooting: "Sur le plateau",
    postProduction: "Montage final",
    release: "Sortie",
    developmentScore: "Résultat du développement",
    chosenLocation: "Lieu",
    teamQuality: "Évaluation de l’équipe",
    shootDays: "Jours de tournage",
    takeQuality: "Qualité moyenne des prises",
    editChoice: "Choix de montage",
    lockedCut: "Qualité du montage final",
    strategyFit: "Score de la stratégie de sortie",
    releaseOutcome: "Résultat de la sortie",
    studioAfterClose: "Studio après clôture de l'année",
    netYearNote: "Les variations nettes comprennent aussi les frais du studio et les étapes franchies, pas seulement la sortie du film.",
    cashChange: "Trésorerie",
    reputationChange: "Réputation",
    prestigeChange: "Prestige",
    developmentPaths: { mentor: "Conseil du mentor", location: "Repérage", script: "Scénario" },
  },
  pt: {
    heading: "Como este filme ganhou forma",
    introduction: "As suas decisões reais e os resultados calculados pelo jogo, sem bónus de pontuação inventados.",
    handoffHeading: "Balanço do filme anterior",
    handoffHint: "Reveja esta produção antes de tomar decisões no próximo filme.",
    development: "Desenvolvimento",
    preProduction: "Equipa e localização",
    shooting: "No cenário",
    postProduction: "Montagem final",
    release: "Estreia",
    developmentScore: "Resultado do desenvolvimento",
    chosenLocation: "Localização",
    teamQuality: "Avaliação da equipa",
    shootDays: "Dias de rodagem",
    takeQuality: "Qualidade média das tomadas",
    editChoice: "Decisão de montagem",
    lockedCut: "Qualidade da montagem final",
    strategyFit: "Pontuação da estratégia de estreia",
    releaseOutcome: "Resultado da estreia",
    studioAfterClose: "Estúdio após fecho do ano",
    netYearNote: "As variações líquidas incluem também despesas do estúdio e marcos alcançados, não apenas a estreia do filme.",
    cashChange: "Tesouraria",
    reputationChange: "Reputação",
    prestigeChange: "Prestígio",
    developmentPaths: { mentor: "Conselho do mentor", location: "Procura de localizações", script: "Argumento" },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerDebriefCopy>;
