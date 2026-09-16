import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

const PRE_PRODUCTION_DISCIPLINE_IDS = ["directing", "cinematography", "editing"] as const;
type PreProductionDisciplineId = (typeof PRE_PRODUCTION_DISCIPLINE_IDS)[number];

type StudioCareerPreProductionCopy = {
  readonly panel: {
    readonly eyebrow: (projectLabel?: string) => string;
    readonly heading: (projectTitle: string) => string;
    readonly intro: string;
    readonly missingLocation: string;
    readonly missingCrew: Readonly<Record<PreProductionDisciplineId, string>>;
    readonly missingCast: string;
    readonly lockFailure: string;
    readonly selectionSummary: (crewCount: number, actorCount: number) => string;
    readonly lockEnds: (projectLabel?: string) => string;
    readonly lock: string;
    readonly lockFor: (projectLabel: string) => string;
  };
  readonly location: {
    readonly step: string;
    readonly heading: string;
    readonly intro: string;
    readonly developmentPick: string;
  };
  readonly crew: {
    readonly step: string;
    readonly heading: string;
    readonly intro: string;
    readonly required: string;
    readonly disciplines: Readonly<Record<PreProductionDisciplineId, string>>;
    readonly experience: string;
    readonly reliability: string;
    readonly fee: string;
  };
  readonly casting: {
    readonly step: string;
    readonly heading: string;
    readonly intro: string;
    readonly starPower: string;
    readonly reliability: string;
    readonly fee: string;
  };
  readonly returning: {
    readonly workedTogether: (filmCount: number) => string;
    readonly studioRegular: string;
  };
  readonly result: {
    readonly lockedEyebrow: (projectLabel?: string) => string;
    readonly report: string;
    readonly shootUnlocked: string;
    readonly ready: string;
    readonly selectedLocation: string;
    readonly locationFit: string;
    readonly locationNotes: (count: number) => string;
    readonly keyCrew: (count: number) => string;
    readonly cast: (count: number) => string;
    readonly actor: string;
    readonly castingChemistry: string;
    readonly sharedTags: string;
    readonly evaluation: string;
    readonly overall: (score: number) => string;
    readonly crewScore: string;
    readonly castScore: string;
    readonly chemistry: string;
    readonly reliability: string;
    readonly budgetPressure: string;
    readonly scoreAria: (label: string, value: number) => string;
  };
};

export const STUDIO_CAREER_PRE_PRODUCTION_COPY = {
  en: {
    panel: {
      eyebrow: (projectLabel) => `Start pre-production${projectLabel ? ` for ${projectLabel}` : ""}`,
      heading: (projectTitle) => `${projectTitle} production office`,
      intro: "Turn the development direction into a practical location, crew and casting plan.",
      missingLocation: "Choose or confirm one location before locking pre-production.",
      missingCrew: {
        directing: "Hire one director before locking pre-production.",
        cinematography: "Hire one cinematographer before locking pre-production.",
        editing: "Hire one editor before locking pre-production.",
      },
      missingCast: "Cast at least two actors before locking pre-production.",
      lockFailure: "Pre-production could not be locked.",
      selectionSummary: (crewCount, actorCount) => `${crewCount}/3 key crew · ${actorCount} cast selected`,
      lockEnds: (projectLabel) => `Locking ends this playable pre-production step${projectLabel ? ` for ${projectLabel}` : ""}.`,
      lock: "Lock pre-production",
      lockFor: (projectLabel) => `Lock pre-production for ${projectLabel}`,
    },
    location: {
      step: "01 · Location",
      heading: "Confirm the production base",
      intro: "Select one of the top locations ranked by the scouting engine.",
      developmentPick: "Development pick",
    },
    crew: {
      step: "02 · Key crew",
      heading: "Hire the department leads",
      intro: "Fill directing, cinematography and editing with one scored candidate each.",
      required: "Required",
      disciplines: { directing: "Director", cinematography: "Cinematographer", editing: "Editor" },
      experience: "Experience",
      reliability: "Reliability",
      fee: "Fee",
    },
    casting: {
      step: "03 · Casting",
      heading: "Build the principal cast",
      intro: "Select at least two actors. Chemistry is calculated when the production plan is locked.",
      starPower: "Star power",
      reliability: "Reliability",
      fee: "Fee",
    },
    returning: {
      workedTogether: (filmCount) => `Worked together on ${filmCount} film${filmCount === 1 ? "" : "s"}`,
      studioRegular: "Studio regular",
    },
    result: {
      lockedEyebrow: (projectLabel) => `Pre-production locked${projectLabel ? ` · ${projectLabel}` : ""}`,
      report: "Production team report",
      shootUnlocked: "Shoot unlocked",
      ready: "Ready",
      selectedLocation: "Selected location",
      locationFit: "Location fit",
      locationNotes: (count) => `Location notes · ${count} attached`,
      keyCrew: (count) => `Key crew · ${count}`,
      cast: (count) => `Cast · ${count}`,
      actor: "Actor",
      castingChemistry: "Casting chemistry",
      sharedTags: "Shared tags",
      evaluation: "Production team evaluation",
      overall: (score) => `${score} overall`,
      crewScore: "Crew score",
      castScore: "Cast score",
      chemistry: "Chemistry",
      reliability: "Reliability",
      budgetPressure: "Budget pressure",
      scoreAria: (label, value) => `${label} ${value} out of 100`,
    },
  },
  nb: {
    panel: {
      eyebrow: (projectLabel) => `Start preproduksjon${projectLabel ? ` for ${projectLabel}` : ""}`,
      heading: (projectTitle) => `${projectTitle} – produksjonskontor`,
      intro: "Gjør utviklingsretningen om til en praktisk plan for location, crew og casting.",
      missingLocation: "Velg eller bekreft ett innspillingssted før preproduksjonen låses.",
      missingCrew: {
        directing: "Hyr én regissør før preproduksjonen låses.",
        cinematography: "Hyr én fotograf før preproduksjonen låses.",
        editing: "Hyr én klipper før preproduksjonen låses.",
      },
      missingCast: "Cast minst to skuespillere før preproduksjonen låses.",
      lockFailure: "Preproduksjonen kunne ikke låses.",
      selectionSummary: (crewCount, actorCount) => `${crewCount}/3 nøkkelcrew · ${actorCount} skuespiller${actorCount === 1 ? "" : "e"} valgt`,
      lockEnds: (projectLabel) => `Låsing avslutter dette spillbare preproduksjonssteget${projectLabel ? ` for ${projectLabel}` : ""}.`,
      lock: "Lås preproduksjon",
      lockFor: (projectLabel) => `Lås preproduksjon for ${projectLabel}`,
    },
    location: {
      step: "01 · Location",
      heading: "Bekreft produksjonsbasen",
      intro: "Velg ett av innspillingsstedene som scoutingmotoren har rangert høyest.",
      developmentPick: "Valgt i utvikling",
    },
    crew: {
      step: "02 · Nøkkelcrew",
      heading: "Hyr avdelingslederne",
      intro: "Bemann regi, foto og klipp med én vurdert kandidat i hver rolle.",
      required: "Påkrevd",
      disciplines: { directing: "Regissør", cinematography: "Fotograf", editing: "Klipper" },
      experience: "Erfaring",
      reliability: "Pålitelighet",
      fee: "Honorar",
    },
    casting: {
      step: "03 · Casting",
      heading: "Bygg hovedcastet",
      intro: "Velg minst to skuespillere. Kjemi beregnes når produksjonsplanen låses.",
      starPower: "Stjernekraft",
      reliability: "Pålitelighet",
      fee: "Honorar",
    },
    returning: {
      workedTogether: (filmCount) => `Jobbet sammen på ${filmCount} film${filmCount === 1 ? "" : "er"}`,
      studioRegular: "Fast i studioet",
    },
    result: {
      lockedEyebrow: (projectLabel) => `Preproduksjon låst${projectLabel ? ` · ${projectLabel}` : ""}`,
      report: "Produksjonsteamrapport",
      shootUnlocked: "Innspilling låst opp",
      ready: "Klar",
      selectedLocation: "Valgt innspillingssted",
      locationFit: "Location-treff",
      locationNotes: (count) => `Locationnotater · ${count} vedlagt`,
      keyCrew: (count) => `Nøkkelcrew · ${count}`,
      cast: (count) => `Cast · ${count}`,
      actor: "Skuespiller",
      castingChemistry: "Castingkjemi",
      sharedTags: "Felles tags",
      evaluation: "Vurdering av produksjonsteam",
      overall: (score) => `${score} totalt`,
      crewScore: "Crewscore",
      castScore: "Castscore",
      chemistry: "Kjemi",
      reliability: "Pålitelighet",
      budgetPressure: "Budsjettpress",
      scoreAria: (label, value) => `${label} ${value} av 100`,
    },
  },
  fr: {
    panel: {
      eyebrow: (projectLabel) => `Démarrer la préproduction${projectLabel ? ` pour ${projectLabel}` : ""}`,
      heading: (projectTitle) => `Bureau de production de ${projectTitle}`,
      intro: "Transformez l’orientation du développement en un plan concret de lieux, d’équipe et de casting.",
      missingLocation: "Choisissez ou confirmez un lieu avant de verrouiller la préproduction.",
      missingCrew: {
        directing: "Recrutez un réalisateur avant de verrouiller la préproduction.",
        cinematography: "Recrutez un directeur de la photographie avant de verrouiller la préproduction.",
        editing: "Recrutez un monteur avant de verrouiller la préproduction.",
      },
      missingCast: "Distribuez au moins deux rôles avant de verrouiller la préproduction.",
      lockFailure: "La préproduction n’a pas pu être verrouillée.",
      selectionSummary: (crewCount, actorCount) => `${crewCount}/3 postes clés · ${actorCount} interprète${actorCount === 1 ? "" : "s"} sélectionné${actorCount === 1 ? "" : "s"}`,
      lockEnds: (projectLabel) => `Le verrouillage termine cette étape jouable de préproduction${projectLabel ? ` pour ${projectLabel}` : ""}.`,
      lock: "Verrouiller la préproduction",
      lockFor: (projectLabel) => `Verrouiller la préproduction pour ${projectLabel}`,
    },
    location: {
      step: "01 · Lieu",
      heading: "Confirmer la base de production",
      intro: "Sélectionnez l’un des lieux les mieux classés par le moteur de repérage.",
      developmentPick: "Choix du développement",
    },
    crew: {
      step: "02 · Équipe clé",
      heading: "Recruter les chefs de département",
      intro: "Pourvoyez la réalisation, l’image et le montage avec un candidat évalué pour chaque poste.",
      required: "Obligatoire",
      disciplines: { directing: "Réalisateur", cinematography: "Directeur de la photographie", editing: "Monteur" },
      experience: "Expérience",
      reliability: "Fiabilité",
      fee: "Cachet",
    },
    casting: {
      step: "03 · Casting",
      heading: "Composer la distribution principale",
      intro: "Sélectionnez au moins deux interprètes. L’alchimie est calculée lorsque le plan de production est verrouillé.",
      starPower: "Notoriété",
      reliability: "Fiabilité",
      fee: "Cachet",
    },
    returning: {
      workedTogether: (filmCount) => `${filmCount} film${filmCount === 1 ? "" : "s"} ensemble`,
      studioRegular: "Collaborateur régulier du studio",
    },
    result: {
      lockedEyebrow: (projectLabel) => `Préproduction verrouillée${projectLabel ? ` · ${projectLabel}` : ""}`,
      report: "Rapport de l’équipe de production",
      shootUnlocked: "Tournage débloqué",
      ready: "Prêt",
      selectedLocation: "Lieu sélectionné",
      locationFit: "Adéquation du lieu",
      locationNotes: (count) => `Notes du lieu · ${count} jointe${count === 1 ? "" : "s"}`,
      keyCrew: (count) => `Équipe clé · ${count}`,
      cast: (count) => `Distribution · ${count}`,
      actor: "Interprète",
      castingChemistry: "Alchimie du casting",
      sharedTags: "Tags partagés",
      evaluation: "Évaluation de l’équipe de production",
      overall: (score) => `${score} au total`,
      crewScore: "Score de l’équipe",
      castScore: "Score du casting",
      chemistry: "Alchimie",
      reliability: "Fiabilité",
      budgetPressure: "Pression budgétaire",
      scoreAria: (label, value) => `${label} ${value} sur 100`,
    },
  },
  pt: {
    panel: {
      eyebrow: (projectLabel) => `Iniciar pré-produção${projectLabel ? ` para ${projectLabel}` : ""}`,
      heading: (projectTitle) => `Escritório de produção de ${projectTitle}`,
      intro: "Transforme a direção do desenvolvimento num plano prático de localização, equipa e casting.",
      missingLocation: "Escolha ou confirme uma localização antes de fechar a pré-produção.",
      missingCrew: {
        directing: "Contrate um realizador antes de fechar a pré-produção.",
        cinematography: "Contrate um diretor de fotografia antes de fechar a pré-produção.",
        editing: "Contrate um montador antes de fechar a pré-produção.",
      },
      missingCast: "Escolha pelo menos dois intérpretes antes de fechar a pré-produção.",
      lockFailure: "Não foi possível fechar a pré-produção.",
      selectionSummary: (crewCount, actorCount) => `${crewCount}/3 elementos-chave · ${actorCount} intérprete${actorCount === 1 ? "" : "s"} selecionado${actorCount === 1 ? "" : "s"}`,
      lockEnds: (projectLabel) => `Fechar termina este passo jogável de pré-produção${projectLabel ? ` para ${projectLabel}` : ""}.`,
      lock: "Fechar pré-produção",
      lockFor: (projectLabel) => `Fechar pré-produção para ${projectLabel}`,
    },
    location: {
      step: "01 · Localização",
      heading: "Confirmar a base de produção",
      intro: "Selecione uma das localizações mais bem classificadas pelo motor de scouting.",
      developmentPick: "Escolha do desenvolvimento",
    },
    crew: {
      step: "02 · Equipa principal",
      heading: "Contratar chefes de departamento",
      intro: "Preencha realização, fotografia e montagem com um candidato avaliado para cada função.",
      required: "Obrigatório",
      disciplines: { directing: "Realizador", cinematography: "Diretor de fotografia", editing: "Montador" },
      experience: "Experiência",
      reliability: "Fiabilidade",
      fee: "Remuneração",
    },
    casting: {
      step: "03 · Casting",
      heading: "Formar o elenco principal",
      intro: "Selecione pelo menos dois intérpretes. A química é calculada quando o plano de produção é fechado.",
      starPower: "Notoriedade",
      reliability: "Fiabilidade",
      fee: "Remuneração",
    },
    returning: {
      workedTogether: (filmCount) => filmCount === 1 ? "Trabalhou em conjunto num filme" : `Trabalhou em conjunto em ${filmCount} filmes`,
      studioRegular: "Colaborador regular do estúdio",
    },
    result: {
      lockedEyebrow: (projectLabel) => `Pré-produção fechada${projectLabel ? ` · ${projectLabel}` : ""}`,
      report: "Relatório da equipa de produção",
      shootUnlocked: "Rodagem desbloqueada",
      ready: "Pronto",
      selectedLocation: "Localização selecionada",
      locationFit: "Adequação da localização",
      locationNotes: (count) => `Notas da localização · ${count} anexada${count === 1 ? "" : "s"}`,
      keyCrew: (count) => `Equipa principal · ${count}`,
      cast: (count) => `Elenco · ${count}`,
      actor: "Intérprete",
      castingChemistry: "Química do elenco",
      sharedTags: "Tags partilhadas",
      evaluation: "Avaliação da equipa de produção",
      overall: (score) => `${score} global`,
      crewScore: "Pontuação da equipa",
      castScore: "Pontuação do elenco",
      chemistry: "Química",
      reliability: "Fiabilidade",
      budgetPressure: "Pressão orçamental",
      scoreAria: (label, value) => `${label} ${value} de 100`,
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerPreProductionCopy>;
