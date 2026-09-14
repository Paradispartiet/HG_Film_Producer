import { getFilmWorkIntlLocale, type FilmWorkLanguage } from "./filmWorkLanguage.js";

export type FilmDirectorProjectCopy = {
  readonly heroKicker: string;
  readonly heroDescription: string;
  readonly projectProgress: string;
  readonly progressAria: (percent: number) => string;
  readonly sceneShotCount: (sceneCount: number, shotCount: number) => string;
  readonly referenceFilm: string;
  readonly openFilmAnalysis: string;
  readonly clearProject: string;
  readonly clearProjectConfirm: (filmTitle: string) => string;
  readonly projectCopied: string;
  readonly copyFailed: string;
  readonly copyCompleteProject: string;
  readonly projectScenes: string;
  readonly addScene: string;
  readonly sceneTitleFallback: (sceneNumber: number) => string;
  readonly sceneCardSummary: (decisionCount: number, decisionTotal: number, shotCount: number) => string;
  readonly duplicateScene: string;
  readonly deleteScene: string;
  readonly sceneAutosaveNote: string;
  readonly deleteSceneConfirm: (sceneTitle: string) => string;
  readonly scenePosition: (sceneNumber: number, sceneCount: number) => string;
  readonly activeSceneSummary: (decisionCount: number, decisionTotal: number, shotCount: number) => string;
  readonly sceneCopied: string;
  readonly copyActiveScene: string;
  readonly savedOnThisDevice: string;
  readonly lastProjectChange: string;
  readonly scenesInProject: string;
  readonly shotCardsPlanned: string;
  readonly decisionsDefined: string;
  readonly notRecorded: string;
};

export const FILM_DIRECTOR_PROJECT_COPY: Record<FilmWorkLanguage, FilmDirectorProjectCopy> = {
  en: {
    heroKicker: "Multi-scene directing workspace",
    heroDescription: "Build one directing project from connected scenes. Give each scene its own dramatic plan, then translate that plan into an ordered shot list.",
    projectProgress: "Project progress",
    progressAria: (percent) => `${percent}% complete`,
    sceneShotCount: (sceneCount, shotCount) => `${sceneCount} scene${sceneCount === 1 ? "" : "s"} · ${shotCount} shot${shotCount === 1 ? "" : "s"}`,
    referenceFilm: "Reference film",
    openFilmAnalysis: "Open film analysis",
    clearProject: "Clear project",
    clearProjectConfirm: (filmTitle) => `Clear every Film Director scene and shot card for ${filmTitle}?`,
    projectCopied: "Project copied",
    copyFailed: "Copy failed",
    copyCompleteProject: "Copy complete project",
    projectScenes: "Project scenes",
    addScene: "+ Add scene",
    sceneTitleFallback: (sceneNumber) => `Scene ${sceneNumber}`,
    sceneCardSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} decisions · ${shotCount} shot${shotCount === 1 ? "" : "s"}`,
    duplicateScene: "Duplicate scene",
    deleteScene: "Delete scene",
    sceneAutosaveNote: "Scenes and shots are saved automatically on this device for this reference film.",
    deleteSceneConfirm: (sceneTitle) => `Delete ${sceneTitle || "this scene"} and all of its shot cards?`,
    scenePosition: (sceneNumber, sceneCount) => `Scene ${sceneNumber} of ${sceneCount}`,
    activeSceneSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} directing decisions · ${shotCount} shot${shotCount === 1 ? "" : "s"}`,
    sceneCopied: "Scene copied",
    copyActiveScene: "Copy active scene",
    savedOnThisDevice: "Saved on this device",
    lastProjectChange: "Last project change:",
    scenesInProject: "scenes in project",
    shotCardsPlanned: "shot cards planned",
    decisionsDefined: "decisions defined",
    notRecorded: "not recorded",
  },
  nb: {
    heroKicker: "Arbeidsflate for regi med flere scener",
    heroDescription: "Bygg ett regiprosjekt av sammenhengende scener. Gi hver scene sin egen dramatiske plan, og oversett deretter planen til en ordnet innstillingsliste.",
    projectProgress: "Prosjektfremdrift",
    progressAria: (percent) => `${percent}% fullført`,
    sceneShotCount: (sceneCount, shotCount) => `${sceneCount} scene${sceneCount === 1 ? "" : "r"} · ${shotCount} innstilling${shotCount === 1 ? "" : "er"}`,
    referenceFilm: "Referansefilm",
    openFilmAnalysis: "Åpne filmanalyse",
    clearProject: "Tøm prosjekt",
    clearProjectConfirm: (filmTitle) => `Tømme alle Film Director-scener og innstillingskort for ${filmTitle}?`,
    projectCopied: "Prosjekt kopiert",
    copyFailed: "Kopiering mislyktes",
    copyCompleteProject: "Kopier hele prosjektet",
    projectScenes: "Prosjektscener",
    addScene: "+ Legg til scene",
    sceneTitleFallback: (sceneNumber) => `Scene ${sceneNumber}`,
    sceneCardSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} beslutninger · ${shotCount} innstilling${shotCount === 1 ? "" : "er"}`,
    duplicateScene: "Dupliser scene",
    deleteScene: "Slett scene",
    sceneAutosaveNote: "Scener og innstillinger lagres automatisk på denne enheten for denne referansefilmen.",
    deleteSceneConfirm: (sceneTitle) => `Slette ${sceneTitle || "denne scenen"} og alle innstillingskortene?`,
    scenePosition: (sceneNumber, sceneCount) => `Scene ${sceneNumber} av ${sceneCount}`,
    activeSceneSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} regibeslutninger · ${shotCount} innstilling${shotCount === 1 ? "" : "er"}`,
    sceneCopied: "Scene kopiert",
    copyActiveScene: "Kopier aktiv scene",
    savedOnThisDevice: "Lagret på denne enheten",
    lastProjectChange: "Siste prosjektendring:",
    scenesInProject: "scener i prosjektet",
    shotCardsPlanned: "planlagte innstillingskort",
    decisionsDefined: "definerte beslutninger",
    notRecorded: "ikke registrert",
  },
  fr: {
    heroKicker: "Espace de réalisation multi-scènes",
    heroDescription: "Construisez un projet de réalisation à partir de scènes liées. Donnez à chaque scène son propre plan dramatique, puis traduisez-le en une liste de plans ordonnée.",
    projectProgress: "Avancement du projet",
    progressAria: (percent) => `${percent} % terminé`,
    sceneShotCount: (sceneCount, shotCount) => `${sceneCount} scène${sceneCount === 1 ? "" : "s"} · ${shotCount} plan${shotCount === 1 ? "" : "s"}`,
    referenceFilm: "Film de référence",
    openFilmAnalysis: "Ouvrir l’analyse du film",
    clearProject: "Effacer le projet",
    clearProjectConfirm: (filmTitle) => `Effacer toutes les scènes Film Director et toutes les fiches de plan pour ${filmTitle} ?`,
    projectCopied: "Projet copié",
    copyFailed: "Échec de la copie",
    copyCompleteProject: "Copier le projet complet",
    projectScenes: "Scènes du projet",
    addScene: "+ Ajouter une scène",
    sceneTitleFallback: (sceneNumber) => `Scène ${sceneNumber}`,
    sceneCardSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} décisions · ${shotCount} plan${shotCount === 1 ? "" : "s"}`,
    duplicateScene: "Dupliquer la scène",
    deleteScene: "Supprimer la scène",
    sceneAutosaveNote: "Les scènes et les plans sont enregistrés automatiquement sur cet appareil pour ce film de référence.",
    deleteSceneConfirm: (sceneTitle) => `Supprimer ${sceneTitle || "cette scène"} et toutes ses fiches de plan ?`,
    scenePosition: (sceneNumber, sceneCount) => `Scène ${sceneNumber} sur ${sceneCount}`,
    activeSceneSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} décisions de réalisation · ${shotCount} plan${shotCount === 1 ? "" : "s"}`,
    sceneCopied: "Scène copiée",
    copyActiveScene: "Copier la scène active",
    savedOnThisDevice: "Enregistré sur cet appareil",
    lastProjectChange: "Dernière modification du projet :",
    scenesInProject: "scènes dans le projet",
    shotCardsPlanned: "fiches de plan prévues",
    decisionsDefined: "décisions définies",
    notRecorded: "non enregistré",
  },
  pt: {
    heroKicker: "Espaço de realização com várias cenas",
    heroDescription: "Construa um projeto de realização a partir de cenas ligadas. Dê a cada cena o seu próprio plano dramático e traduza-o depois numa lista ordenada de planos.",
    projectProgress: "Progresso do projeto",
    progressAria: (percent) => `${percent}% concluído`,
    sceneShotCount: (sceneCount, shotCount) => `${sceneCount} cena${sceneCount === 1 ? "" : "s"} · ${shotCount} plano${shotCount === 1 ? "" : "s"}`,
    referenceFilm: "Filme de referência",
    openFilmAnalysis: "Abrir análise do filme",
    clearProject: "Limpar projeto",
    clearProjectConfirm: (filmTitle) => `Limpar todas as cenas do Film Director e todos os cartões de plano de ${filmTitle}?`,
    projectCopied: "Projeto copiado",
    copyFailed: "Falha ao copiar",
    copyCompleteProject: "Copiar projeto completo",
    projectScenes: "Cenas do projeto",
    addScene: "+ Adicionar cena",
    sceneTitleFallback: (sceneNumber) => `Cena ${sceneNumber}`,
    sceneCardSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} decisões · ${shotCount} plano${shotCount === 1 ? "" : "s"}`,
    duplicateScene: "Duplicar cena",
    deleteScene: "Eliminar cena",
    sceneAutosaveNote: "As cenas e os planos são guardados automaticamente neste dispositivo para este filme de referência.",
    deleteSceneConfirm: (sceneTitle) => `Eliminar ${sceneTitle || "esta cena"} e todos os respetivos cartões de plano?`,
    scenePosition: (sceneNumber, sceneCount) => `Cena ${sceneNumber} de ${sceneCount}`,
    activeSceneSummary: (decisionCount, decisionTotal, shotCount) => `${decisionCount}/${decisionTotal} decisões de realização · ${shotCount} plano${shotCount === 1 ? "" : "s"}`,
    sceneCopied: "Cena copiada",
    copyActiveScene: "Copiar cena ativa",
    savedOnThisDevice: "Guardado neste dispositivo",
    lastProjectChange: "Última alteração do projeto:",
    scenesInProject: "cenas no projeto",
    shotCardsPlanned: "cartões de plano planeados",
    decisionsDefined: "decisões definidas",
    notRecorded: "sem registo",
  },
};

export function formatFilmDirectorProjectSavedTime(language: FilmWorkLanguage, value: string): string {
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) return FILM_DIRECTOR_PROJECT_COPY[language].notRecorded;
  return new Intl.DateTimeFormat(getFilmWorkIntlLocale(language), { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp));
}
