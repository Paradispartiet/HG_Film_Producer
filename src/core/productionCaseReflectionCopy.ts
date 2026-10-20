import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const PRODUCTION_CASE_REFLECTION_CATEGORIES = ["genre","tone","screenplay","cinematography","editing","sound","learning"] as const;
export const PRODUCTION_CASE_REFLECTION_PHASES = ["development","pre_production","shoot","post_production","release"] as const;

type TargetCategory = (typeof PRODUCTION_CASE_REFLECTION_CATEGORIES)[number];
type PhaseId = (typeof PRODUCTION_CASE_REFLECTION_PHASES)[number];
type Assessment = "reconsider" | "partial" | "clear";
type VerificationStatus = "needs_research" | "seeded" | "verified";

type ProductionCaseReflectionCopy = {
  readonly checklist: {
    readonly eyebrow: string; readonly heading: string; readonly intro: string;
    readonly categories: Readonly<Record<TargetCategory, string>>;
  };
  readonly alignment: {
    readonly eyebrow: string; readonly heading: string; readonly note: string;
    readonly summaries: Readonly<Record<Assessment, string>>;
  };
  readonly result: {
    readonly eyebrow: string; readonly heading: string;
    readonly whatToReview: string; readonly note: string;
  };
  readonly phases: {
    readonly eyebrow: string; readonly heading: string; readonly intro: string;
    readonly noTargets: string; readonly caseShootDescription: string;
    readonly caseTitles: Readonly<Record<PhaseId, string>>;
    readonly seedTitles: Readonly<Record<PhaseId, string>>;
    readonly seedDescriptions: Readonly<Record<PhaseId, string>>;
  };
  readonly recap: {
    readonly eyebrow: string; readonly heading: string; readonly exploredTitle: string;
    readonly identified: string; readonly review: string; readonly noSelected: string;
    readonly noRemaining: string; readonly replay: string;
    readonly sourceVerified: string; readonly openSource: string;
    readonly revisitOnePhase: string;
    readonly intros: Readonly<Record<Assessment, string>>;
    readonly verificationNotes: Readonly<Record<VerificationStatus, string>>;
    readonly sourceCount: (count: number, date: string) => string;
    readonly compareMethod: (label: string) => string;
  };
};

export const PRODUCTION_CASE_REFLECTION_COPY = {
  en: {
    checklist: {
      eyebrow: "Film-craft comparison",
      heading: "Production method checklist",
      intro: "Mark the film methods you want to compare while studying this case. These notes guide reflection and do not create a score or rank.",
      categories: {
        genre: "Genre",
        tone: "Tone",
        screenplay: "Screenplay",
        cinematography: "Cinematography",
        editing: "Editing",
        sound: "Sound",
        learning: "Learning goals",
      },
    },
    alignment: {
      eyebrow: "Production intent",
      heading: "Compare the method",
      note: "Use the film-specific explanations to understand why an approach fits, partly fits or should be reconsidered.",
      summaries: {
        reconsider: "Compare the selected approaches with the documented film method and revisit the explanations that do not fit yet.",
        partial: "Some selected approaches connect to the documented film method. Compare the remaining approaches to see where the film works differently.",
        clear: "The selected approaches connect closely to the documented film method. Use the explanations to identify why those methods fit this film.",
      },
    },
    result: {
      eyebrow: "Release reflection",
      heading: "Production case reflection",
      whatToReview: "What to review:",
      note: "Use the explanations to compare your choices with the documented film method before continuing.",
    },
    phases: {
      eyebrow: "Production roadmap",
      heading: "Scenario phase guidance",
      intro: "Use the classic brief as phase-by-phase production intent.",
      noTargets: "No specific targets for this phase yet.",
      caseShootDescription: "Identify the production choices behind the scenes as photography and sound tie into the film's concrete expression.",
      caseTitles: {
        development: "Case orientation + script choices",
        pre_production: "Visual system",
        shoot: "Image and sound on set",
        post_production: "Cutting rhythm + sound world",
        release: "What the film teaches you",
      },
      seedTitles: {
        development: "Development focus",
        pre_production: "Pre-production focus",
        shoot: "Shoot focus",
        post_production: "Post-production focus",
        release: "Release and learning focus",
      },
      seedDescriptions: {
        development: "Study the seeded concept, tone and script decisions before the scenario moves into production.",
        pre_production: "Prepare the visual plan, team choices and production approach around the generic production challenge.",
        shoot: "Use the shooting phase to commit to image, space, rhythm and sound intent.",
        post_production: "Use editing and sound to shape the final production challenge clearly.",
        release: "Read the result as a learning summary of the provisional production choices practiced.",
      },
    },
    recap: {
      eyebrow: "Learning report",
      heading: "Case report",
      exploredTitle: "What this case explored",
      identified: "Methods you identified",
      review: "Review and compare",
      noSelected: "No method is marked for comparison yet. Review the case explanations without penalty.",
      noRemaining: "Use the explanations to compare why the documented methods fit this film.",
      replay: "Use this report to revisit explanations that are still unclear, or continue to another case from Production Cases.",
      sourceVerified: "Source verified",
      openSource: "Open source",
      revisitOnePhase: "Revisit one phase and compare why the documented method works for this film.",
      intros: {
        reconsider: "The report highlights production methods worth comparing again with the film-specific explanations.",
        partial: "The report separates methods you identified from methods worth comparing again.",
        clear: "The report gathers the methods you identified and the film-specific explanations that support them.",
      },
      verificationNotes: {
        needs_research: "This is a seeded learning recap. Film-specific historical claims still need research.",
        seeded: "This recap is generated from seeded scenario data.",
        verified: "This recap is based on verified scenario brief data.",
      },
      sourceCount: (count, date) => `${count} documented sources · verified ${date}`,
      compareMethod: (label) => `Compare method: ${label}`,
    },
  },
  nb: {
    checklist: {
      eyebrow: "Sammenlign filmhåndverk",
      heading: "Sjekkliste for produksjonsmetoder",
      intro: "Marker filmmetodene du vil sammenligne når du studerer dette caset. Notatene støtter refleksjon og gir verken poeng eller rangering.",
      categories: {
        genre: "Sjanger",
        tone: "Tone",
        screenplay: "Manus",
        cinematography: "Foto",
        editing: "Klipp",
        sound: "Lyd",
        learning: "Læringsmål",
      },
    },
    alignment: {
      eyebrow: "Produksjonsintensjon",
      heading: "Sammenlign metoden",
      note: "Bruk de filmspesifikke forklaringene til å forstå hvorfor en tilnærming passer, delvis passer eller bør vurderes på nytt.",
      summaries: {
        reconsider: "Sammenlign de valgte tilnærmingene med filmens dokumenterte metode, og gå tilbake til forklaringene der noe ennå ikke passer.",
        partial: "Noen av tilnærmingene samsvarer med den dokumenterte metoden. Sammenlign de øvrige for å forstå hva filmen gjør annerledes.",
        clear: "De valgte tilnærmingene samsvarer godt med filmens dokumenterte metode. Bruk forklaringene til å forstå hvorfor de passer.",
      },
    },
    result: {
      eyebrow: "Refleksjon ved lansering",
      heading: "Refleksjon over produksjonscaset",
      whatToReview: "Dette bør du se nærmere på:",
      note: "Bruk forklaringene til å sammenligne valgene dine med filmens dokumenterte metode før du går videre.",
    },
    phases: {
      eyebrow: "Produksjonsløp",
      heading: "Faseveiledning for caset",
      intro: "Bruk filmbeskrivelsen til å forstå produksjonsintensjonen fase for fase.",
      noTargets: "Ingen egne mål for denne fasen ennå.",
      caseShootDescription: "Identifiser produksjonsvalgene bak scenene når foto og lyd knyttes til filmens konkrete uttrykk.",
      caseTitles: {
        development: "Orientering i caset og manusvalg",
        pre_production: "Visuelt system",
        shoot: "Bilde og lyd på settet",
        post_production: "Klipprytme og lydverden",
        release: "Dette lærer filmen deg",
      },
      seedTitles: {
        development: "Fokus i utviklingen",
        pre_production: "Fokus i forproduksjonen",
        shoot: "Fokus under innspilling",
        post_production: "Fokus i etterarbeidet",
        release: "Fokus på lansering og læring",
      },
      seedDescriptions: {
        development: "Studer utgangskonseptet, tonen og manusvalgene før caset går videre til produksjon.",
        pre_production: "Forbered bildeplanen, lagvalgene og produksjonsmetoden for den generelle produksjonsutfordringen.",
        shoot: "Bruk innspillingen til å bestemme bilde, rom, rytme og lyduttrykk.",
        post_production: "Bruk klipp og lyd til å forme den endelige produksjonsutfordringen tydelig.",
        release: "Les resultatet som en læringsoppsummering av de foreløpige produksjonsvalgene.",
      },
    },
    recap: {
      eyebrow: "Læringsrapport",
      heading: "Caserapport",
      exploredTitle: "Dette undersøkte caset",
      identified: "Metoder du identifiserte",
      review: "Gå gjennom og sammenlign",
      noSelected: "Ingen metode er valgt for sammenligning ennå. Les caseforklaringene uten poengtrekk.",
      noRemaining: "Bruk forklaringene til å sammenligne hvorfor de dokumenterte metodene passer denne filmen.",
      replay: "Bruk rapporten til å gå tilbake til forklaringer som ennå er uklare, eller gå videre til et nytt case i Production Cases.",
      sourceVerified: "Kildeverifisert",
      openSource: "Åpne kilde",
      revisitOnePhase: "Gå tilbake til én fase og sammenlign hvorfor den dokumenterte metoden fungerer for filmen.",
      intros: {
        reconsider: "Rapporten løfter fram produksjonsmetoder som bør sammenlignes på nytt med de filmspesifikke forklaringene.",
        partial: "Rapporten skiller metodene du identifiserte, fra dem det er verdt å undersøke videre.",
        clear: "Rapporten samler metodene du identifiserte, og de filmspesifikke forklaringene som støtter dem.",
      },
      verificationNotes: {
        needs_research: "Dette er en foreløpig læringsrapport. Filmspesifikke historiske påstander trenger fortsatt forskning.",
        seeded: "Denne rapporten er generert fra foreløpige casedata.",
        verified: "Denne rapporten bygger på verifiserte data fra filmbeskrivelsen.",
      },
      sourceCount: (count, date) => `${count} dokumenterte kilder · verifisert ${date}`,
      compareMethod: (label) => `Sammenlign metode: ${label}`,
    },
  },
  fr: {
    checklist: {
      eyebrow: "Comparaison des techniques cinématographiques",
      heading: "Liste des méthodes de production",
      intro: "Cochez les méthodes que vous souhaitez comparer en étudiant ce cas. Ces notes guident la réflexion sans attribuer de points ni de classement.",
      categories: {
        genre: "Genre",
        tone: "Tonalité",
        screenplay: "Scénario",
        cinematography: "Image",
        editing: "Montage",
        sound: "Son",
        learning: "Objectifs pédagogiques",
      },
    },
    alignment: {
      eyebrow: "Intention de production",
      heading: "Comparer les méthodes",
      note: "Consultez les explications propres au film pour comprendre pourquoi une approche convient, convient partiellement ou mérite d’être reconsidérée.",
      summaries: {
        reconsider: "Comparez les approches choisies à la méthode documentée du film et revoyez les explications qui ne concordent pas encore.",
        partial: "Certaines approches choisies correspondent à la méthode documentée. Comparez les autres pour voir ce que le film fait différemment.",
        clear: "Les approches choisies correspondent étroitement à la méthode documentée. Les explications permettent de comprendre pourquoi.",
      },
    },
    result: {
      eyebrow: "Réflexion après la sortie",
      heading: "Analyse du cas de production",
      whatToReview: "Points à revoir :",
      note: "Avant de poursuivre, confrontez vos choix à la méthode documentée du film à l’aide des explications.",
    },
    phases: {
      eyebrow: "Parcours de production",
      heading: "Guide des phases du cas",
      intro: "Utilisez la fiche du film pour suivre l’intention de production étape par étape.",
      noTargets: "Aucun objectif spécifique pour cette phase pour le moment.",
      caseShootDescription: "Identifiez les choix de production derrière les scènes, lorsque l’image et le son façonnent l’expression du film.",
      caseTitles: {
        development: "Présentation du cas et choix de scénario",
        pre_production: "Système visuel",
        shoot: "Image et son sur le plateau",
        post_production: "Rythme du montage et univers sonore",
        release: "Ce que le film vous apprend",
      },
      seedTitles: {
        development: "Objectifs du développement",
        pre_production: "Objectifs de la préproduction",
        shoot: "Objectifs du tournage",
        post_production: "Objectifs de la postproduction",
        release: "Objectifs de sortie et d’apprentissage",
      },
      seedDescriptions: {
        development: "Étudiez le concept initial, le ton et les choix de scénario avant la mise en production.",
        pre_production: "Préparez les choix visuels, l’équipe et la méthode pour le défi de production générique.",
        shoot: "Profitez du tournage pour définir les intentions d’image, d’espace, de rythme et de son.",
        post_production: "Utilisez le montage et le son pour exprimer clairement le défi de production final.",
        release: "Lisez le résultat comme un bilan des choix de production provisoires mis en pratique.",
      },
    },
    recap: {
      eyebrow: "Rapport d’apprentissage",
      heading: "Rapport du cas",
      exploredTitle: "Ce que ce cas a exploré",
      identified: "Méthodes identifiées",
      review: "Revoir et comparer",
      noSelected: "Aucune méthode n’a encore été cochée. Consultez les explications du cas sans pénalité.",
      noRemaining: "Utilisez les explications pour comprendre pourquoi les méthodes documentées conviennent à ce film.",
      replay: "Utilisez ce rapport pour revoir les explications encore incertaines ou passer à un autre cas de Production Cases.",
      sourceVerified: "Sources vérifiées",
      openSource: "Ouvrir la source",
      revisitOnePhase: "Revenez sur une phase et comparez pourquoi la méthode documentée fonctionne pour ce film.",
      intros: {
        reconsider: "Le rapport souligne les méthodes qui méritent une nouvelle comparaison avec les explications propres au film.",
        partial: "Le rapport distingue les méthodes identifiées de celles à examiner de nouveau.",
        clear: "Le rapport rassemble les méthodes identifiées et les explications propres au film qui les étayent.",
      },
      verificationNotes: {
        needs_research: "Ce rapport pédagogique est provisoire. Les affirmations historiques propres au film nécessitent encore des recherches.",
        seeded: "Ce rapport est produit à partir des données initiales du cas.",
        verified: "Ce rapport repose sur une fiche de cas vérifiée.",
      },
      sourceCount: (count, date) => `${count} sources documentées · vérifiées le ${date}`,
      compareMethod: (label) => `Comparer la méthode : ${label}`,
    },
  },
  pt: {
    checklist: {
      eyebrow: "Comparação das técnicas cinematográficas",
      heading: "Lista de métodos de produção",
      intro: "Assinale os métodos que quer comparar ao estudar este caso. Estas notas orientam a reflexão, sem atribuir pontos nem classificações.",
      categories: {
        genre: "Género",
        tone: "Tom",
        screenplay: "Argumento",
        cinematography: "Fotografia",
        editing: "Montagem",
        sound: "Som",
        learning: "Objetivos de aprendizagem",
      },
    },
    alignment: {
      eyebrow: "Intenção de produção",
      heading: "Comparar os métodos",
      note: "Use as explicações específicas do filme para compreender por que uma abordagem se adequa, se adequa parcialmente ou deve ser reconsiderada.",
      summaries: {
        reconsider: "Compare as abordagens escolhidas com o método documentado do filme e reveja as explicações que ainda não correspondem.",
        partial: "Algumas abordagens escolhidas correspondem ao método documentado. Compare as restantes para perceber onde o filme funciona de outra forma.",
        clear: "As abordagens escolhidas correspondem de perto ao método documentado. Use as explicações para compreender por que são adequadas.",
      },
    },
    result: {
      eyebrow: "Reflexão após o lançamento",
      heading: "Reflexão sobre o caso de produção",
      whatToReview: "O que deve rever:",
      note: "Use as explicações para comparar as suas escolhas com o método documentado do filme antes de avançar.",
    },
    phases: {
      eyebrow: "Percurso de produção",
      heading: "Orientação por fases do caso",
      intro: "Use a descrição do filme para compreender as intenções de produção fase a fase.",
      noTargets: "Ainda não há objetivos específicos para esta fase.",
      caseShootDescription: "Identifique as escolhas de produção por detrás das cenas quando a fotografia e o som definem a expressão concreta do filme.",
      caseTitles: {
        development: "Introdução ao caso e escolhas de argumento",
        pre_production: "Sistema visual",
        shoot: "Imagem e som no plateau",
        post_production: "Ritmo de montagem e universo sonoro",
        release: "O que o filme ensina",
      },
      seedTitles: {
        development: "Foco do desenvolvimento",
        pre_production: "Foco da pré-produção",
        shoot: "Foco da rodagem",
        post_production: "Foco da pós-produção",
        release: "Foco do lançamento e da aprendizagem",
      },
      seedDescriptions: {
        development: "Estude o conceito inicial, o tom e as escolhas de argumento antes de o caso passar à produção.",
        pre_production: "Prepare o plano visual, as escolhas de equipa e a abordagem ao desafio de produção genérico.",
        shoot: "Use a rodagem para definir as intenções de imagem, espaço, ritmo e som.",
        post_production: "Use a montagem e o som para moldar claramente o desafio final de produção.",
        release: "Leia o resultado como um resumo de aprendizagem das escolhas provisórias praticadas.",
      },
    },
    recap: {
      eyebrow: "Relatório de aprendizagem",
      heading: "Relatório do caso",
      exploredTitle: "O que este caso explorou",
      identified: "Métodos que identificou",
      review: "Rever e comparar",
      noSelected: "Ainda não há métodos assinalados para comparação. Reveja as explicações do caso sem penalização.",
      noRemaining: "Use as explicações para comparar por que os métodos documentados se adequam a este filme.",
      replay: "Use este relatório para rever explicações que ainda não são claras ou continue para outro caso em Production Cases.",
      sourceVerified: "Fontes verificadas",
      openSource: "Abrir fonte",
      revisitOnePhase: "Reveja uma fase e compare por que o método documentado funciona para este filme.",
      intros: {
        reconsider: "O relatório destaca métodos de produção que merecem nova comparação com as explicações específicas do filme.",
        partial: "O relatório separa os métodos que identificou dos que merecem ser comparados novamente.",
        clear: "O relatório reúne os métodos que identificou e as explicações específicas do filme que os sustentam.",
      },
      verificationNotes: {
        needs_research: "Este é um relatório de aprendizagem provisório. As afirmações históricas específicas do filme ainda exigem pesquisa.",
        seeded: "Este relatório foi gerado a partir dos dados iniciais do caso.",
        verified: "Este relatório baseia-se em dados verificados da descrição do caso.",
      },
      sourceCount: (count, date) => `${count} fontes documentadas · verificado em ${date}`,
      compareMethod: (label) => `Comparar método: ${label}`,
    },
  },
} as const satisfies Record<FilmWorkLanguage, ProductionCaseReflectionCopy>;
