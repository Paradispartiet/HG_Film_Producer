import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type StudioCareerSummaryCopy = {
  readonly summary: {
    readonly kicker: string;
    readonly heading: string;
    readonly editSetup: string;
    readonly strategicGoal: string;
    readonly project: string;
    readonly scriptTemplate: string;
    readonly development: {
      readonly label: string;
      readonly completed: string;
      readonly ready: string;
      readonly completedDetail: (pathLabel: string) => string;
      readonly readyDetail: string;
    };
    readonly preProduction: {
      readonly label: string;
      readonly locked: string;
      readonly open: string;
      readonly lockedDetail: (crewCount: number, actorCount: number) => string;
      readonly openDetail: string;
    };
    readonly shoot: {
      readonly label: string;
      readonly complete: string;
      readonly unlocked: string;
      readonly completedDetail: (dayCount: number, averageQuality: number) => string;
      readonly openDetail: string;
    };
    readonly postProduction: {
      readonly label: string;
      readonly complete: string;
      readonly open: string;
      readonly completedDetail: (quality: number) => string;
      readonly openDetail: string;
    };
    readonly release: {
      readonly label: string;
      readonly released: string;
      readonly open: string;
      readonly releasedDetail: (overall: number, careerApplied: boolean) => string;
      readonly openDetail: string;
    };
    readonly career: {
      readonly label: string;
      readonly updated: string;
      readonly reviewReady: string;
      readonly updatedDetail: (year: number) => string;
      readonly readyDetail: string;
    };
  };
  readonly nextProject: {
    readonly validation: {
      readonly projectTitle: string;
      readonly genre: string;
      readonly scriptTemplate: string;
    };
    readonly creator: {
      readonly completeKicker: (projectNumber: number) => string;
      readonly setupHeading: (projectNumber: number) => string;
      readonly intro: string;
    };
    readonly form: {
      readonly greenlight: (projectNumber: number) => string;
      readonly heading: string;
      readonly intro: string;
      readonly titleLabel: string;
      readonly titlePlaceholder: string;
      readonly carryHeading: string;
      readonly carryDetail: (previousFilmLabel: string, projectNumber: number) => string;
      readonly createFilm: (projectNumber: number) => string;
    };
  };
};

export const STUDIO_CAREER_SUMMARY_COPY = {
  en: {
    summary: {
      kicker: "Project summary",
      heading: "Project brief",
      editSetup: "Edit setup",
      strategicGoal: "Strategic goal",
      project: "Project",
      scriptTemplate: "Script template",
      development: {
        label: "Development status",
        completed: "Action completed",
        ready: "Ready for development",
        completedDetail: (pathLabel) => `${pathLabel} has been applied.`,
        readyDetail: "Choose one early development action.",
      },
      preProduction: {
        label: "Pre-production status",
        locked: "Production locked",
        open: "Production office open",
        lockedDetail: (crewCount, actorCount) => `${crewCount} crew and ${actorCount} actors are attached.`,
        openDetail: "Confirm a location, hire key crew and cast at least two actors.",
      },
      shoot: {
        label: "Shoot status",
        complete: "Shoot complete",
        unlocked: "Start shoot unlocked",
        completedDetail: (dayCount, averageQuality) => `${dayCount} shoot day${dayCount === 1 ? "" : "s"} resolved with ${averageQuality} average take quality.`,
        openDetail: "Choose one production event and resolve each scheduled shoot day.",
      },
      postProduction: {
        label: "Post-production status",
        complete: "Locked cut complete",
        open: "Edit suite open",
        completedDetail: (quality) => `Locked cut quality ${quality}. Release is unlocked.`,
        openDetail: "Choose edit, sound, music, color and trailer strategies.",
      },
      release: {
        label: "Release status",
        released: "Film released",
        open: "Distribution desk open",
        releasedDetail: (overall, careerApplied) => `Release outcome ${overall}/100. ${careerApplied ? "Studio state is updated." : "Studio and career application comes next."}`,
        openDetail: "Choose one release strategy and one festival.",
      },
      career: {
        label: "Career status",
        updated: "Studio updated",
        reviewReady: "Review ready",
        updatedDetail: (year) => `Year ${year} evaluated. Next step: start next project.`,
        readyDetail: "Close the film year to apply the release result.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Enter a title for the next project.",
        genre: "Select a genre.",
        scriptTemplate: "Select a script template.",
      },
      creator: {
        completeKicker: (projectNumber) => `Film ${projectNumber} complete`,
        setupHeading: (projectNumber) => `Film ${projectNumber} setup`,
        intro: "The previous film is complete. Set up the next film from the updated studio and career state, then continue the experimental pipeline.",
      },
      form: {
        greenlight: (projectNumber) => `Greenlight film ${projectNumber}`,
        heading: "Package the next project",
        intro: "Choose the new film. Development remains a separate next step.",
        titleLabel: "Next project title",
        titlePlaceholder: "e.g. Northern Exposure",
        carryHeading: "Carry the studio forward",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} stays recorded; film ${projectNumber} begins at setup only.`,
        createFilm: (projectNumber) => `Create film ${projectNumber}`,
      },
    },
  },
  nb: {
    summary: {
      kicker: "Prosjektsammendrag",
      heading: "Prosjektbrief",
      editSetup: "Rediger oppsett",
      strategicGoal: "Strategisk mål",
      project: "Prosjekt",
      scriptTemplate: "Manusmal",
      development: {
        label: "Utviklingsstatus",
        completed: "Handling fullført",
        ready: "Klar for utvikling",
        completedDetail: (pathLabel) => `${pathLabel} er gjennomført.`,
        readyDetail: "Velg én tidlig utviklingshandling.",
      },
      preProduction: {
        label: "Status for preproduksjon",
        locked: "Produksjonen er låst",
        open: "Produksjonskontoret er åpent",
        lockedDetail: (crewCount, actorCount) => `${crewCount} i crew og ${actorCount} skuespillere er tilknyttet.`,
        openDetail: "Bekreft en location, hyr nøkkelcrew og cast minst to skuespillere.",
      },
      shoot: {
        label: "Opptaksstatus",
        complete: "Opptak fullført",
        unlocked: "Opptaksstart låst opp",
        completedDetail: (dayCount, averageQuality) => `${dayCount} opptaksdag${dayCount === 1 ? "" : "er"} fullført med ${averageQuality} i gjennomsnittlig take-kvalitet.`,
        openDetail: "Velg én produksjonshendelse og gjennomfør hver planlagte opptaksdag.",
      },
      postProduction: {
        label: "Status for postproduksjon",
        complete: "Låst klipp fullført",
        open: "Klipperommet er åpent",
        completedDetail: (quality) => `Kvalitet på låst klipp: ${quality}. Lansering er låst opp.`,
        openDetail: "Velg strategier for klipp, lyd, musikk, farge og trailer.",
      },
      release: {
        label: "Lanseringsstatus",
        released: "Filmen er lansert",
        open: "Distribusjonsbordet er åpent",
        releasedDetail: (overall, careerApplied) => `Lanseringsresultat ${overall}/100. ${careerApplied ? "Studiostatusen er oppdatert." : "Oppdatering av studio og karriere er neste steg."}`,
        openDetail: "Velg én lanseringsstrategi og én festival.",
      },
      career: {
        label: "Karrierestatus",
        updated: "Studio oppdatert",
        reviewReady: "Evaluering klar",
        updatedDetail: (year) => `År ${year} er evaluert. Neste steg: start neste prosjekt.`,
        readyDetail: "Avslutt filmåret for å anvende lanseringsresultatet.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Skriv inn en tittel for neste prosjekt.",
        genre: "Velg en sjanger.",
        scriptTemplate: "Velg en manusmal.",
      },
      creator: {
        completeKicker: (projectNumber) => `Film ${projectNumber} fullført`,
        setupHeading: (projectNumber) => `Oppsett for film ${projectNumber}`,
        intro: "Forrige film er fullført. Sett opp neste film fra den oppdaterte studio- og karrierestatusen, og fortsett deretter den eksperimentelle pipelinen.",
      },
      form: {
        greenlight: (projectNumber) => `Gi grønt lys til film ${projectNumber}`,
        heading: "Pakk neste prosjekt",
        intro: "Velg den nye filmen. Utvikling er fortsatt et eget neste steg.",
        titleLabel: "Tittel på neste prosjekt",
        titlePlaceholder: "f.eks. Nordlys",
        carryHeading: "Viderefør studioet",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} forblir registrert; film ${projectNumber} starter bare i oppsettet.`,
        createFilm: (projectNumber) => `Opprett film ${projectNumber}`,
      },
    },
  },
  fr: {
    summary: {
      kicker: "Résumé du projet",
      heading: "Brief du projet",
      editSetup: "Modifier la configuration",
      strategicGoal: "Objectif stratégique",
      project: "Projet",
      scriptTemplate: "Modèle de scénario",
      development: {
        label: "État du développement",
        completed: "Action terminée",
        ready: "Prêt pour le développement",
        completedDetail: (pathLabel) => `${pathLabel} a été appliqué.`,
        readyDetail: "Choisissez une action de développement initiale.",
      },
      preProduction: {
        label: "État de la préproduction",
        locked: "Production verrouillée",
        open: "Bureau de production ouvert",
        lockedDetail: (crewCount, actorCount) => `${crewCount} membres de l’équipe et ${actorCount} interprètes sont attachés au projet.`,
        openDetail: "Confirmez un lieu, recrutez l’équipe clé et distribuez au moins deux rôles.",
      },
      shoot: {
        label: "État du tournage",
        complete: "Tournage terminé",
        unlocked: "Démarrage du tournage débloqué",
        completedDetail: (dayCount, averageQuality) => `${dayCount} jour${dayCount === 1 ? "" : "s"} de tournage résolu${dayCount === 1 ? "" : "s"} avec une qualité moyenne des prises de ${averageQuality}.`,
        openDetail: "Choisissez un événement de production et résolvez chaque journée de tournage planifiée.",
      },
      postProduction: {
        label: "État de la postproduction",
        complete: "Montage verrouillé terminé",
        open: "Salle de montage ouverte",
        completedDetail: (quality) => `Qualité du montage verrouillé : ${quality}. La sortie est débloquée.`,
        openDetail: "Choisissez les stratégies de montage, son, musique, étalonnage et bande-annonce.",
      },
      release: {
        label: "État de la sortie",
        released: "Film sorti",
        open: "Distribution ouverte",
        releasedDetail: (overall, careerApplied) => `Résultat de sortie ${overall}/100. ${careerApplied ? "L’état du studio est mis à jour." : "La mise à jour du studio et de la carrière vient ensuite."}`,
        openDetail: "Choisissez une stratégie de sortie et un festival.",
      },
      career: {
        label: "État de la carrière",
        updated: "Studio mis à jour",
        reviewReady: "Bilan prêt",
        updatedDetail: (year) => `Année ${year} évaluée. Étape suivante : lancer le projet suivant.`,
        readyDetail: "Clôturez l’année du film pour appliquer le résultat de sortie.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Saisissez un titre pour le projet suivant.",
        genre: "Sélectionnez un genre.",
        scriptTemplate: "Sélectionnez un modèle de scénario.",
      },
      creator: {
        completeKicker: (projectNumber) => `Film ${projectNumber} terminé`,
        setupHeading: (projectNumber) => `Configuration du film ${projectNumber}`,
        intro: "Le film précédent est terminé. Configurez le suivant à partir de l’état actualisé du studio et de la carrière, puis poursuivez le pipeline expérimental.",
      },
      form: {
        greenlight: (projectNumber) => `Feu vert pour le film ${projectNumber}`,
        heading: "Monter le projet suivant",
        intro: "Choisissez le nouveau film. Le développement reste une étape distincte.",
        titleLabel: "Titre du projet suivant",
        titlePlaceholder: "p. ex. Exposition nordique",
        carryHeading: "Faire avancer le studio",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} reste enregistré ; le film ${projectNumber} commence uniquement à la configuration.`,
        createFilm: (projectNumber) => `Créer le film ${projectNumber}`,
      },
    },
  },
  pt: {
    summary: {
      kicker: "Resumo do projeto",
      heading: "Briefing do projeto",
      editSetup: "Editar configuração",
      strategicGoal: "Objetivo estratégico",
      project: "Projeto",
      scriptTemplate: "Modelo de argumento",
      development: {
        label: "Estado do desenvolvimento",
        completed: "Ação concluída",
        ready: "Pronto para desenvolvimento",
        completedDetail: (pathLabel) => `${pathLabel} foi aplicado.`,
        readyDetail: "Escolha uma ação inicial de desenvolvimento.",
      },
      preProduction: {
        label: "Estado da pré-produção",
        locked: "Produção fechada",
        open: "Escritório de produção aberto",
        lockedDetail: (crewCount, actorCount) => `${crewCount} elementos da equipa e ${actorCount} intérpretes estão associados ao projeto.`,
        openDetail: "Confirme uma localização, contrate a equipa principal e escolha pelo menos dois intérpretes.",
      },
      shoot: {
        label: "Estado da rodagem",
        complete: "Rodagem concluída",
        unlocked: "Início da rodagem desbloqueado",
        completedDetail: (dayCount, averageQuality) => `${dayCount} dia${dayCount === 1 ? "" : "s"} de rodagem resolvido${dayCount === 1 ? "" : "s"} com qualidade média das tomadas de ${averageQuality}.`,
        openDetail: "Escolha um evento de produção e resolva cada dia de rodagem agendado.",
      },
      postProduction: {
        label: "Estado da pós-produção",
        complete: "Montagem final concluída",
        open: "Sala de montagem aberta",
        completedDetail: (quality) => `Qualidade da montagem final: ${quality}. O lançamento está desbloqueado.`,
        openDetail: "Escolha estratégias de montagem, som, música, cor e trailer.",
      },
      release: {
        label: "Estado do lançamento",
        released: "Filme lançado",
        open: "Distribuição aberta",
        releasedDetail: (overall, careerApplied) => `Resultado do lançamento ${overall}/100. ${careerApplied ? "O estado do estúdio foi atualizado." : "A atualização do estúdio e da carreira vem a seguir."}`,
        openDetail: "Escolha uma estratégia de lançamento e um festival.",
      },
      career: {
        label: "Estado da carreira",
        updated: "Estúdio atualizado",
        reviewReady: "Revisão pronta",
        updatedDetail: (year) => `Ano ${year} avaliado. Próximo passo: iniciar o projeto seguinte.`,
        readyDetail: "Feche o ano do filme para aplicar o resultado do lançamento.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Introduza um título para o projeto seguinte.",
        genre: "Selecione um género.",
        scriptTemplate: "Selecione um modelo de argumento.",
      },
      creator: {
        completeKicker: (projectNumber) => `Filme ${projectNumber} concluído`,
        setupHeading: (projectNumber) => `Configuração do filme ${projectNumber}`,
        intro: "O filme anterior está concluído. Configure o seguinte a partir do estado atualizado do estúdio e da carreira e continue depois o pipeline experimental.",
      },
      form: {
        greenlight: (projectNumber) => `Dar luz verde ao filme ${projectNumber}`,
        heading: "Estruturar o projeto seguinte",
        intro: "Escolha o novo filme. O desenvolvimento continua a ser um passo seguinte separado.",
        titleLabel: "Título do projeto seguinte",
        titlePlaceholder: "por ex., Exposição do Norte",
        carryHeading: "Levar o estúdio adiante",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} permanece registado; o filme ${projectNumber} começa apenas na configuração.`,
        createFilm: (projectNumber) => `Criar filme ${projectNumber}`,
      },
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerSummaryCopy>;
