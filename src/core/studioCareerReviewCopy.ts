import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type ProjectLabel = "first film" | `film ${number}`;

interface CareerReviewCopy {
  readonly overview: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly scoreAria: (score: number) => string;
    readonly completedFilms: string;
    readonly yearEvaluation: string;
    readonly strategicGoal: string;
    readonly studioIdentity: string;
  };
  readonly panel: {
    readonly eyebrow: string;
    readonly heading: (projectLabel: ProjectLabel) => string;
    readonly description: string;
    readonly closeYear: (projectLabel: ProjectLabel) => string;
    readonly releaseBeforeApply: (projectLabel: ProjectLabel) => string;
    readonly releaseReady: string;
    readonly outcome: (projectTitle: string, score: number) => string;
    readonly persistenceNotice: string;
  };
  readonly result: {
    readonly studioUpdated: string;
    readonly yearClosed: (projectNumber: number) => string;
    readonly ledgerDescription: (title: string) => string;
    readonly completedFilmRecorded: (title: string) => string;
    readonly careerYearEvaluated: (score: number) => string;
    readonly identity: string;
    readonly milestonesUnlocked: string;
    readonly noneThisReview: string;
    readonly nextStep: string;
    readonly nextProject: (projectNumber: number) => string;
    readonly nextProjectNote: string;
    readonly formingIdentity: string;
  };
  readonly studioDelta: {
    readonly ledger: string;
    readonly beforeAfter: string;
    readonly money: string;
    readonly reputation: string;
    readonly prestige: string;
    readonly note: string;
  };
  readonly completedFilm: {
    readonly summary: string;
    readonly quality: string;
    readonly audienceAppeal: string;
    readonly criticalAppeal: string;
    readonly grossRevenue: string;
    readonly netRevenue: string;
    readonly awardsWon: string;
    readonly awardWinsRecorded: string;
  };
  readonly careerYear: {
    readonly label: string;
    readonly reviewHeading: (year: number) => string;
    readonly nextQuarter: string;
    readonly income: string;
    readonly expenses: string;
    readonly completedFilms: string;
    readonly careerEvaluation: string;
    readonly yearProfit: string;
    readonly cashHealth: string;
    readonly reputationGrowth: string;
    readonly prestigeGrowth: string;
    readonly awardMomentum: string;
  };
  readonly decisionReview: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly introduction: string;
    readonly development: string;
    readonly team: string;
    readonly shoot: string;
    readonly edit: string;
    readonly scriptOutcome: (scenes: number, score: number) => string;
    readonly locationOutcome: (name: string, score: number) => string;
    readonly mentorOutcome: (technique: string) => string;
    readonly teamChoice: (crew: number, actors: number) => string;
    readonly teamOutcome: (crewScore: number, chemistry: number) => string;
    readonly shootChoice: (days: number) => string;
    readonly shootOutcome: (takeQuality: number, eventCost: string) => string;
    readonly finalResult: string;
    readonly quality: string;
    readonly audience: string;
    readonly critics: string;
    readonly reputation: string;
    readonly nextFilmLesson: string;
    readonly learningSignal: (score: number) => string;
    readonly noBonus: string;
    readonly lessons: Readonly<Record<"script" | "casting" | "shoot" | "edit", string>>;
  };
  readonly goal: {
    readonly label: string;
    readonly releaseContributed: string;
    readonly noConfirmedProgress: string;
    readonly helpfulResult: string;
    readonly trackingPending: string;
    readonly note: string;
  };
}

export const STUDIO_CAREER_REVIEW_COPY: Readonly<Record<FilmWorkLanguage, CareerReviewCopy>> = {
  en: {
    overview: {
      eyebrow: "Long view",
      heading: "Studio career",
      scoreAria: (score) => `Career score ${score} out of 100`,
      completedFilms: "Completed films",
      yearEvaluation: "Year evaluation",
      strategicGoal: "Strategic goal",
      studioIdentity: "Studio identity"
    },
    panel: {
      eyebrow: "Career review",
      heading: (projectLabel) => `Finish ${formatProjectLabel("en", projectLabel, false)} career review`,
      description: "End this film year: post the release outcome, record the completed film, then unlock the next film setup.",
      closeYear: (projectLabel) => `Close ${formatProjectLabel("en", projectLabel, false)} year`,
      releaseBeforeApply: (projectLabel) => `Release ${formatProjectLabel("en", projectLabel, false)} before applying its result to the studio.`,
      releaseReady: "Release result ready",
      outcome: (projectTitle, score) => `${projectTitle} · outcome ${score}/100`,
      persistenceNotice: "This action updates in-memory studio and career state only. Persistence is not enabled yet."
    },
    result: {
      studioUpdated: "Studio updated",
      yearClosed: (projectNumber) => projectNumber === 1 ? "Film year closed" : `Film ${projectNumber} year closed`,
      ledgerDescription: (title) => `${title} is now part of the studio ledger, filmography, career evaluation, and identity profile.`,
      completedFilmRecorded: (title) => `Completed film recorded: ${title}`,
      careerYearEvaluated: (score) => `Career year evaluated at ${score}/100`,
      identity: "Identity",
      milestonesUnlocked: "Milestones unlocked",
      noneThisReview: "None this review",
      nextStep: "Next step",
      nextProject: (projectNumber) => projectNumber === 1 ? "Start next project" : `Start Film ${projectNumber + 1}`,
      nextProjectNote: "The next project is not created automatically in this step.",
      formingIdentity: "forming"
    },
    studioDelta: { ledger: "Studio ledger", beforeAfter: "Before / after", money: "Money", reputation: "Reputation", prestige: "Prestige", note: "Release effects and any earned milestone rewards are included in the final totals." },
    completedFilm: { summary: "Completed film summary", quality: "Quality", audienceAppeal: "Audience appeal", criticalAppeal: "Critical appeal", grossRevenue: "Gross revenue", netRevenue: "Net revenue", awardsWon: "Awards won", awardWinsRecorded: "Award wins recorded" },
    careerYear: { label: "Career year", reviewHeading: (year) => `Year ${year} review`, nextQuarter: "Next quarter", income: "Income", expenses: "Expenses", completedFilms: "Completed films", careerEvaluation: "Career evaluation", yearProfit: "Year profit", cashHealth: "Cash health", reputationGrowth: "Reputation growth", prestigeGrowth: "Prestige growth", awardMomentum: "Award momentum" },
    decisionReview: {
      eyebrow: "Production reflection",
      heading: "How this film came together",
      introduction: "Your recorded decisions and the results observed at each stage. The final score depends on the full simulation, not any one choice alone.",
      development: "Development",
      team: "Cast and crew",
      shoot: "Shooting",
      edit: "Editing",
      scriptOutcome: (scenes, score) => `${scenes} scenes · script evaluation ${score}/100`,
      locationOutcome: (name, score) => `${name} · location fit ${score}/100`,
      mentorOutcome: (technique) => `Technique: ${technique}`,
      teamChoice: (crew, actors) => `${crew} crew · ${actors} actors`,
      teamOutcome: (crewScore, chemistry) => `Crew evaluation ${crewScore}/100 · casting chemistry ${chemistry}/100`,
      shootChoice: (days) => `${days} shooting days with selected set events`,
      shootOutcome: (take, cost) => `Average take quality ${take}/100 · combined event cost impact ${cost}`,
      finalResult: "The finished film and studio impact",
      quality: "Film quality",
      audience: "Audience appeal",
      critics: "Critical appeal",
      reputation: "Reputation change",
      nextFilmLesson: "A focus for the next film",
      learningSignal: (score) => `This was the lowest available production signal (${score}/100).`,
      noBonus: "An editorial suggestion based on this film's results, not a new score or a gameplay bonus.",
      lessons: {
        script: "Give the next script another development pass.",
        casting: "Prioritize actor chemistry when building the next cast.",
        shoot: "Plan the next shoot around stronger takes and fewer disruptions.",
        edit: "Reserve time to refine the next film's final cut."
      }
    },
    goal: { label: "Strategic goal", releaseContributed: "Release contributed", noConfirmedProgress: "No confirmed progress yet", helpfulResult: "Helpful result", trackingPending: "Tracking pending", note: "Full strategic-goal progress tracking is not enabled yet. This review keeps the selected goal visible without inventing a progress percentage." }
  },
  nb: {
    overview: {
      eyebrow: "Langt perspektiv",
      heading: "Studiokarriere",
      scoreAria: (score) => `Karrierescore ${score} av 100`,
      completedFilms: "Fullførte filmer",
      yearEvaluation: "Årsvurdering",
      strategicGoal: "Strategisk mål",
      studioIdentity: "Studioidentitet"
    },
    panel: {
      eyebrow: "Karrieregjennomgang",
      heading: (projectLabel) => `Fullfør karrieregjennomgangen for ${formatProjectLabel("nb", projectLabel, false)}`,
      description: "Avslutt filmåret: bokfør lanseringsresultatet, registrer den fullførte filmen og åpne oppsettet for neste film.",
      closeYear: (projectLabel) => `Avslutt året for ${formatProjectLabel("nb", projectLabel, true)}`,
      releaseBeforeApply: (projectLabel) => `Lanser ${formatProjectLabel("nb", projectLabel, false)} før resultatet føres inn i studioet.`,
      releaseReady: "Lanseringsresultatet er klart",
      outcome: (projectTitle, score) => `${projectTitle} · resultat ${score}/100`,
      persistenceNotice: "Denne handlingen oppdaterer bare studio- og karrierestatus i minnet. Lagring er ikke aktivert ennå."
    },
    result: {
      studioUpdated: "Studio oppdatert",
      yearClosed: (projectNumber) => projectNumber === 1 ? "Filåret avsluttet" : `Året for Film ${projectNumber} avsluttet`,
      ledgerDescription: (title) => `${title} er nå del av studioets hovedbok, filmografi, karrierevurdering og identitetsprofil.`,
      completedFilmRecorded: (title) => `Fullført film registrert: ${title}`,
      careerYearEvaluated: (score) => `Karriereåret vurdert til ${score}/100`,
      identity: "Identitet",
      milestonesUnlocked: "Milepæler låst opp",
      noneThisReview: "Ingen i denne gjennomgangen",
      nextStep: "Neste steg",
      nextProject: (projectNumber) => projectNumber === 1 ? "Start neste prosjekt" : `Start Film ${projectNumber + 1}`,
      nextProjectNote: "Neste prosjekt opprettes ikke automatisk i dette steget.",
      formingIdentity: "under utvikling"
    },
    studioDelta: { ledger: "Studiohovedbok", beforeAfter: "Før / etter", money: "Penger", reputation: "Omdømme", prestige: "Prestisje", note: "Effekter fra lanseringen og eventuelle opptjente milepælbelønninger er med i sluttallene." },
    completedFilm: { summary: "Oppsummering av fullført film", quality: "Kvalitet", audienceAppeal: "Publikumsappell", criticalAppeal: "Kritikerappell", grossRevenue: "Bruttoinntekt", netRevenue: "Nettoinntekt", awardsWon: "Priser vunnet", awardWinsRecorded: "Registrerte prisgevinster" },
    careerYear: { label: "Karriereår", reviewHeading: (year) => `Gjennomgang av år ${year}`, nextQuarter: "Neste kvartal", income: "Inntekter", expenses: "Utgifter", completedFilms: "Fullførte filmer", careerEvaluation: "Karrierevurdering", yearProfit: "Årsresultat", cashHealth: "Likviditet", reputationGrowth: "Omdømmevekst", prestigeGrowth: "Prestisjevekst", awardMomentum: "Prismomentum" },
    decisionReview: {
      eyebrow: "Produksjonserfaring",
      heading: "Slik ble filmen til",
      introduction: "Valgene dine og resultatene som ble registrert i hver fase. Sluttresultatet bygger på hele simuleringen, ikke ett enkelt valg.",
      development: "Utvikling",
      team: "Skuespillere og stab",
      shoot: "Innspilling",
      edit: "Klipp",
      scriptOutcome: (scenes, score) => `${scenes} scener · manusvurdering ${score}/100`,
      locationOutcome: (name, score) => `${name} · lokasjonstilpasning ${score}/100`,
      mentorOutcome: (technique) => `Teknikk: ${technique}`,
      teamChoice: (crew, actors) => `${crew} i stab · ${actors} skuespillere`,
      teamOutcome: (crewScore, chemistry) => `Stabsvurdering ${crewScore}/100 · samspill ${chemistry}/100`,
      shootChoice: (days) => `${days} opptaksdager med valgte hendelser`,
      shootOutcome: (take, cost) => `Gjennomsnittlig tagning ${take}/100 · samlet kostnadseffekt fra hendelser ${cost}`,
      finalResult: "Ferdig film og effekt på studioet",
      quality: "Filmkvalitet",
      audience: "Publikumsappell",
      critics: "Kritikerappell",
      reputation: "Endring i omdømme",
      nextFilmLesson: "Ta med til neste film",
      learningSignal: (score) => `Dette var det laveste tilgjengelige produksjonstallet (${score}/100).`,
      noBonus: "Et råd basert på filmens resultater, ikke en ny poengsum eller en spillbonus.",
      lessons: {
        script: "Bruk mer tid på manusutviklingen i neste film.",
        casting: "Prioriter samspillet mellom skuespillerne i neste rollebesetning.",
        shoot: "Planlegg neste innspilling for bedre tagninger og færre forstyrrelser.",
        edit: "Sett av tid til å videreutvikle klippen i neste film."
      }
    },
    goal: { label: "Strategisk mål", releaseContributed: "Lanseringen bidro", noConfirmedProgress: "Ingen bekreftet fremgang ennå", helpfulResult: "Nyttig resultat", trackingPending: "Sporing avventer", note: "Full sporing av fremgang mot strategiske mål er ikke aktivert ennå. Gjennomgangen viser det valgte målet uten å finne på en fremgangsprosent." }
  },
  fr: {
    overview: {
      eyebrow: "Vision à long terme",
      heading: "Carrière du studio",
      scoreAria: (score) => `Score de carrière ${score} sur 100`,
      completedFilms: "Films terminés",
      yearEvaluation: "Évaluation de l’année",
      strategicGoal: "Objectif stratégique",
      studioIdentity: "Identité du studio"
    },
    panel: {
      eyebrow: "Bilan de carrière",
      heading: (projectLabel) => `Finaliser le bilan de carrière de ${formatProjectLabel("fr", projectLabel, false)}`,
      description: "Clôturez cette année de cinéma : comptabilisez le résultat de la sortie, enregistrez le film terminé puis débloquez la configuration du film suivant.",
      closeYear: (projectLabel) => `Clore l’année de ${formatProjectLabel("fr", projectLabel, false)}`,
      releaseBeforeApply: (projectLabel) => `Sortez ${formatProjectLabel("fr", projectLabel, false)} avant d’appliquer son résultat au studio.`,
      releaseReady: "Résultat de sortie prêt",
      outcome: (projectTitle, score) => `${projectTitle} · résultat ${score}/100`,
      persistenceNotice: "Cette action met uniquement à jour l’état du studio et de la carrière en mémoire. La persistance n’est pas encore activée."
    },
    result: {
      studioUpdated: "Studio mis à jour",
      yearClosed: (projectNumber) => projectNumber === 1 ? "Année du premier film clôturée" : `Année du film ${projectNumber} clôturée`,
      ledgerDescription: (title) => `${title} fait désormais partie du registre du studio, de la filmographie, de l’évaluation de carrière et du profil d’identité.`,
      completedFilmRecorded: (title) => `Film terminé enregistré : ${title}`,
      careerYearEvaluated: (score) => `Année de carrière évaluée à ${score}/100`,
      identity: "Identité",
      milestonesUnlocked: "Jalons débloqués",
      noneThisReview: "Aucun lors de cette évaluation",
      nextStep: "Étape suivante",
      nextProject: (projectNumber) => projectNumber === 1 ? "Démarrer le projet suivant" : `Démarrer le film ${projectNumber + 1}`,
      nextProjectNote: "Le projet suivant n’est pas créé automatiquement à cette étape.",
      formingIdentity: "en formation"
    },
    studioDelta: { ledger: "Registre du studio", beforeAfter: "Avant / après", money: "Trésorerie", reputation: "Réputation", prestige: "Prestige", note: "Les effets de la sortie et les éventuelles récompenses de jalons sont inclus dans les totaux finaux." },
    completedFilm: { summary: "Résumé du film terminé", quality: "Qualité", audienceAppeal: "Attrait public", criticalAppeal: "Attrait critique", grossRevenue: "Recettes brutes", netRevenue: "Recettes nettes", awardsWon: "Prix remportés", awardWinsRecorded: "Prix remportés enregistrés" },
    careerYear: { label: "Année de carrière", reviewHeading: (year) => `Bilan de l’année ${year}`, nextQuarter: "Trimestre suivant", income: "Revenus", expenses: "Dépenses", completedFilms: "Films terminés", careerEvaluation: "Évaluation de carrière", yearProfit: "Résultat annuel", cashHealth: "Santé de trésorerie", reputationGrowth: "Progression de réputation", prestigeGrowth: "Progression de prestige", awardMomentum: "Dynamique des prix" },
    decisionReview: {
      eyebrow: "Bilan de production",
      heading: "Comment le film a pris forme",
      introduction: "Vos choix et les résultats enregistrés à chaque étape. Le bilan final provient de l'ensemble de la simulation, pas d'un seul choix.",
      development: "Développement",
      team: "Distribution et équipe",
      shoot: "Tournage",
      edit: "Montage",
      scriptOutcome: (scenes, score) => `${scenes} scènes · scénario ${score}/100`,
      locationOutcome: (name, score) => `${name} · adéquation du lieu ${score}/100`,
      mentorOutcome: (technique) => `Technique : ${technique}`,
      teamChoice: (crew, actors) => `${crew} membres d'équipe · ${actors} acteurs`,
      teamOutcome: (crewScore, chemistry) => `Équipe ${crewScore}/100 · alchimie ${chemistry}/100`,
      shootChoice: (days) => `${days} jours avec événements choisis`,
      shootOutcome: (take, cost) => `Qualité moyenne des prises ${take}/100 · impact financier des événements ${cost}`,
      finalResult: "Film terminé et impact sur le studio",
      quality: "Qualité du film",
      audience: "Attrait public",
      critics: "Attrait critique",
      reputation: "Variation de réputation",
      nextFilmLesson: "Piste pour le prochain film",
      learningSignal: (score) => `C'est l'indicateur de production le plus faible disponible (${score}/100).`,
      noBonus: "Une suggestion tirée des résultats, sans nouveau score ni bonus.",
      lessons: {
        script: "Retravailler davantage le scénario du prochain film.",
        casting: "Privilégier l'alchimie des acteurs pour la prochaine distribution.",
        shoot: "Mieux préparer les prises et les imprévus du prochain tournage.",
        edit: "Prévoir davantage de temps pour affiner le prochain montage."
      }
    },
    goal: { label: "Objectif stratégique", releaseContributed: "La sortie a contribué", noConfirmedProgress: "Aucune progression confirmée", helpfulResult: "Résultat favorable", trackingPending: "Suivi en attente", note: "Le suivi complet de la progression des objectifs stratégiques n’est pas encore activé. Ce bilan garde l’objectif sélectionné visible sans inventer de pourcentage de progression." }
  },
  pt: {
    overview: {
      eyebrow: "Visão a longo prazo",
      heading: "Carreira do estúdio",
      scoreAria: (score) => `Pontuação da carreira ${score} de 100`,
      completedFilms: "Filmes concluídos",
      yearEvaluation: "Avaliação do ano",
      strategicGoal: "Objetivo estratégico",
      studioIdentity: "Identidade do estúdio"
    },
    panel: {
      eyebrow: "Revisão de carreira",
      heading: (projectLabel) => `Concluir a revisão de carreira de ${formatProjectLabel("pt", projectLabel, false)}`,
      description: "Encerre este ano de cinema: registe o resultado do lançamento, registe o filme concluído e desbloqueie a configuração do filme seguinte.",
      closeYear: (projectLabel) => `Encerrar o ano de ${formatProjectLabel("pt", projectLabel, false)}`,
      releaseBeforeApply: (projectLabel) => `Lance ${formatProjectLabel("pt", projectLabel, false)} antes de aplicar o resultado ao estúdio.`,
      releaseReady: "Resultado do lançamento pronto",
      outcome: (projectTitle, score) => `${projectTitle} · resultado ${score}/100`,
      persistenceNotice: "Esta ação atualiza apenas o estado do estúdio e da carreira em memória. A persistência ainda não está ativada."
    },
    result: {
      studioUpdated: "Estúdio atualizado",
      yearClosed: (projectNumber) => projectNumber === 1 ? "Ano do primeiro filme encerrado" : `Ano do filme ${projectNumber} encerrado`,
      ledgerDescription: (title) => `${title} faz agora parte do registo do estúdio, da filmografia, da avaliação de carreira e do perfil de identidade.`,
      completedFilmRecorded: (title) => `Filme concluído registado: ${title}`,
      careerYearEvaluated: (score) => `Ano de carreira avaliado em ${score}/100`,
      identity: "Identidade",
      milestonesUnlocked: "Marcos desbloqueados",
      noneThisReview: "Nenhum nesta revisão",
      nextStep: "Passo seguinte",
      nextProject: (projectNumber) => projectNumber === 1 ? "Iniciar projeto seguinte" : `Iniciar Filme ${projectNumber + 1}`,
      nextProjectNote: "O projeto seguinte não é criado automaticamente neste passo.",
      formingIdentity: "em formação"
    },
    studioDelta: { ledger: "Registo do estúdio", beforeAfter: "Antes / depois", money: "Dinheiro", reputation: "Reputação", prestige: "Prestígio", note: "Os efeitos do lançamento e quaisquer recompensas de marcos obtidas estão incluídos nos totais finais." },
    completedFilm: { summary: "Resumo do filme concluído", quality: "Qualidade", audienceAppeal: "Apelo ao público", criticalAppeal: "Apelo crítico", grossRevenue: "Receita bruta", netRevenue: "Receita líquida", awardsWon: "Prémios ganhos", awardWinsRecorded: "Prémios ganhos registados" },
    careerYear: { label: "Ano de carreira", reviewHeading: (year) => `Revisão do ano ${year}`, nextQuarter: "Trimestre seguinte", income: "Receitas", expenses: "Despesas", completedFilms: "Filmes concluídos", careerEvaluation: "Avaliação de carreira", yearProfit: "Resultado anual", cashHealth: "Saúde financeira", reputationGrowth: "Crescimento de reputação", prestigeGrowth: "Crescimento de prestígio", awardMomentum: "Impulso de prémios" },
    decisionReview: {
      eyebrow: "Balanço da produção",
      heading: "Como este filme ganhou forma",
      introduction: "As escolhas e os resultados registados em cada fase. O resultado final depende de toda a simulação, não de uma única escolha.",
      development: "Desenvolvimento",
      team: "Elenco e equipa",
      shoot: "Rodagem",
      edit: "Montagem",
      scriptOutcome: (scenes, score) => `${scenes} cenas · avaliação do guião ${score}/100`,
      locationOutcome: (name, score) => `${name} · adequação do local ${score}/100`,
      mentorOutcome: (technique) => `Técnica: ${technique}`,
      teamChoice: (crew, actors) => `${crew} membros da equipa · ${actors} atores`,
      teamOutcome: (crewScore, chemistry) => `Avaliação da equipa ${crewScore}/100 · química ${chemistry}/100`,
      shootChoice: (days) => `${days} dias com acontecimentos escolhidos`,
      shootOutcome: (take, cost) => `Qualidade média das tomadas ${take}/100 · impacto total dos acontecimentos ${cost}`,
      finalResult: "Filme concluído e impacto no estúdio",
      quality: "Qualidade do filme",
      audience: "Apelo ao público",
      critics: "Apelo crítico",
      reputation: "Variação da reputação",
      nextFilmLesson: "Foco para o próximo filme",
      learningSignal: (score) => `Este foi o indicador de produção disponível mais baixo (${score}/100).`,
      noBonus: "Sugestão baseada nos resultados do filme, sem pontuação nova nem bónus.",
      lessons: {
        script: "Dedicar mais tempo ao guião do próximo filme.",
        casting: "Dar prioridade à química dos atores no próximo elenco.",
        shoot: "Preparar melhor as tomadas e os imprevistos da próxima rodagem.",
        edit: "Reservar tempo para aperfeiçoar a montagem do próximo filme."
      }
    },
    goal: { label: "Objetivo estratégico", releaseContributed: "O lançamento contribuiu", noConfirmedProgress: "Ainda sem progresso confirmado", helpfulResult: "Resultado útil", trackingPending: "Acompanhamento pendente", note: "O acompanhamento completo do progresso dos objetivos estratégicos ainda não está ativado. Esta revisão mantém o objetivo selecionado visível sem inventar uma percentagem de progresso." }
  }
};

function formatProjectLabel(language: FilmWorkLanguage, projectLabel: ProjectLabel, capitalized: boolean): string {
  const filmNumber = projectLabel.match(/^film (\d+)$/)?.[1];
  if (filmNumber) return `${language === "pt" ? "filme" : "Film"} ${filmNumber}`;
  const labels: Readonly<Record<FilmWorkLanguage, string>> = { en: "first film", nb: "første film", fr: "premier film", pt: "primeiro filme" };
  const label = labels[language];
  return capitalized ? label.charAt(0).toUpperCase() + label.slice(1) : label;
}
