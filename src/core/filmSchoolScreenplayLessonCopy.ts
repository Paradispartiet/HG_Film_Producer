import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { SCREENPLAY_COURSE_LESSONS, type ScreenplayCourseLesson } from "./filmSchoolScreenplayCourse.js";

export type ScreenplayLessonCopy = {
  readonly title: string;
  readonly summary: string;
  readonly principle: string;
  readonly filmAnalysisQuestion: string;
  readonly practicePrompt: string;
  readonly checklist: readonly string[];
  readonly quiz: {
    readonly question: string;
    readonly options: readonly string[];
    readonly explanation: string;
  };
};

type ScreenplayLessonId =
  | "context_point_of_view"
  | "objective_obstacle_stakes"
  | "beats_turn_reversal"
  | "subtext_playable_action"
  | "setup_payoff_sequence";

const canonicalNorwegian = Object.fromEntries(
  SCREENPLAY_COURSE_LESSONS.map((lesson) => [lesson.id, toCopy(lesson)]),
) as Record<ScreenplayLessonId, ScreenplayLessonCopy>;

const localizedCopy: Record<Exclude<FilmWorkLanguage, "nb">, Record<ScreenplayLessonId, ScreenplayLessonCopy>> = {
  en: {
    context_point_of_view: {
      title: "Context, information and point of view",
      summary: "Define what is already true, what the audience knows, and whose experience organizes the scene.",
      principle: "A scene begins before the first line of dialogue. The director must understand the given circumstances and control the audience’s access to information.",
      filmAnalysisQuestion: "How does the film restrict information so that the child’s experience becomes the audience’s way into the world?",
      practicePrompt: "Write four sentences: what happened before the scene, what the protagonist knows, what the audience knows, and which decisive piece of information is being withheld.",
      checklist: [
        "Time, place and relationship are concrete.",
        "The audience’s knowledge is separated from the character’s knowledge.",
        "Exposition is tied to action rather than explanation alone.",
      ],
      quiz: {
        question: "What most precisely describes a scene’s point of view?",
        options: [
          "Which lens the cinematographer uses.",
          "Who or what the audience’s knowledge and experience are organized around.",
          "How many characters are in the frame.",
          "Whether the scene was shot chronologically.",
        ],
        explanation: "Point of view concerns access to experience and information, not only the physical camera angle.",
      },
    },
    objective_obstacle_stakes: {
      title: "Objective, obstacle and stakes",
      summary: "Make the scene playable by defining what someone is trying to achieve, what stops them, and what failure costs.",
      principle: "Dramatic pressure emerges when a concrete objective meets active resistance under meaningful consequences.",
      filmAnalysisQuestion: "How do a concrete mission and historical time pressure make the protagonist’s private doubt dramatically playable?",
      practicePrompt: "Phrase the scene objective as an active result: ‘X wants to get Y to …’. Then add the obstacle and the concrete consequence of failure.",
      checklist: [
        "The objective can succeed or fail within the scene.",
        "The obstacle acts actively against the objective.",
        "The stakes are concrete, not merely a general feeling.",
      ],
      quiz: {
        question: "Which formulation is a playable scene objective?",
        options: [
          "She is sad.",
          "He feels pressure.",
          "She wants to get her brother to stay in the room.",
          "The scene should feel intense.",
        ],
        explanation: "A scene objective describes a result the character actively tries to create in relation to someone or something.",
      },
    },
    beats_turn_reversal: {
      title: "Beats, turning point and reversal",
      summary: "Break the scene into small changes and identify the moment that forces the action in a new direction.",
      principle: "A scene is not one continuous level of intensity. It consists of beats in which tactics, information, power, or emotional value change.",
      filmAnalysisQuestion: "How do small rejections and new ultimatums gradually change the value and balance of power in the scenes?",
      practicePrompt: "Divide a scene into at least three beats. Describe what changes in each beat and mark the moment that functions as the scene’s decisive turning point.",
      checklist: [
        "Every beat contains a real change.",
        "The turning point changes the available courses of action.",
        "Any reversal carries the opposite value from the expectation before it.",
      ],
      quiz: {
        question: "What distinguishes a turning point from an ordinary line of dialogue?",
        options: [
          "It is always the longest line in the scene.",
          "It changes direction, power, or the available courses of action in the scene.",
          "It must occur halfway through the scene.",
          "It requires a cut to a close-up.",
        ],
        explanation: "A turning point is defined by its dramatic function, not by its placement, length, or shot size.",
      },
    },
    subtext_playable_action: {
      title: "Subtext and playable action",
      summary: "Translate feelings and hidden needs into actions an actor can actually attempt on a scene partner.",
      principle: "A director should give action, circumstance, and resistance rather than ask an actor to manufacture a particular emotion.",
      filmAnalysisQuestion: "How does the film let what the characters do for one another express more than the dialogue states directly?",
      practicePrompt: "Choose one line with subtext. Write what the character is actually trying to do to the other person, using an active verb: persuade, disarm, conceal, test, or pressure.",
      checklist: [
        "The subtext differs meaningfully from the literal wording.",
        "The action can be directed toward a scene partner.",
        "The response emerges through listening rather than predetermined delivery.",
      ],
      quiz: {
        question: "Which direction is the most playable?",
        options: [
          "Be more hurt.",
          "Make the scene stronger.",
          "Get her to admit that she is lying.",
          "Show the audience that you are afraid.",
        ],
        explanation: "A playable action gives the actor a concrete attempt directed at the partner, not a demand to demonstrate an emotion.",
      },
    },
    setup_payoff_sequence: {
      title: "Setup, payoff and scene placement",
      summary: "Connect scene details to larger arcs so information has later consequences and the scene performs necessary work within the sequence.",
      principle: "An effective scene works in the present moment while also preparing, changing, or paying off something in the film’s larger structure.",
      filmAnalysisQuestion: "How do everyday routines and character details gain new meaning when the final action pays them off?",
      practicePrompt: "Find one setup in the scene and write how it should pay off later. Also explain the scene’s function in the larger sequence and in the character’s emotional arc.",
      checklist: [
        "The setup is clear enough to register without being overexplained.",
        "The payoff changes understanding, action, or feeling.",
        "The scene has a defined function within the surrounding sequence.",
      ],
      quiz: {
        question: "What makes a setup and payoff dramatically effective?",
        options: [
          "The same object appears twice without changing meaning.",
          "An established element later has a consequence or gains new meaning.",
          "The audience receives the full explanation the first time the element appears.",
          "The setup must always be a physical prop.",
        ],
        explanation: "A setup and payoff can involve information, action, sound, relationship, or an object; what matters is the later consequence.",
      },
    },
  },
  fr: {
    context_point_of_view: {
      title: "Contexte, information et point de vue",
      summary: "Définissez ce qui est déjà vrai, ce que le public sait et à travers quelle expérience la scène s’organise.",
      principle: "Une scène commence avant la première réplique. La réalisation doit comprendre les circonstances données et contrôler l’accès du public à l’information.",
      filmAnalysisQuestion: "Comment le film limite-t-il l’information afin que l’expérience de l’enfant devienne la porte d’entrée du public dans ce monde ?",
      practicePrompt: "Écrivez quatre phrases : ce qui s’est passé avant la scène, ce que sait le personnage principal, ce que sait le public et quelle information décisive est retenue.",
      checklist: [
        "Le temps, le lieu et la relation sont concrètement définis.",
        "Le savoir du public est distingué de celui du personnage.",
        "L’exposition est liée à l’action plutôt qu’à la seule explication.",
      ],
      quiz: {
        question: "Qu’est-ce qui décrit le plus précisément le point de vue d’une scène ?",
        options: [
          "L’objectif utilisé par la direction de la photographie.",
          "La personne ou l’élément autour duquel s’organisent le savoir et l’expérience du public.",
          "Le nombre de personnages présents dans le cadre.",
          "Le fait que la scène ait été tournée chronologiquement.",
        ],
        explanation: "Le point de vue concerne l’accès à l’expérience et à l’information, pas seulement l’angle physique de la caméra.",
      },
    },
    objective_obstacle_stakes: {
      title: "Objectif, obstacle et enjeu",
      summary: "Rendez la scène jouable en définissant ce que quelqu’un tente d’obtenir, ce qui l’en empêche et ce que coûte l’échec.",
      principle: "La pression dramatique naît lorsqu’un objectif concret rencontre une résistance active sous la menace de conséquences significatives.",
      filmAnalysisQuestion: "Comment une mission concrète et la pression du temps historique rendent-elles le doute intime du protagoniste dramatiquement jouable ?",
      practicePrompt: "Formulez l’objectif de la scène comme un résultat actif : « X veut amener Y à… ». Ajoutez ensuite l’obstacle et la conséquence concrète d’un échec.",
      checklist: [
        "L’objectif peut réussir ou échouer dans la scène.",
        "L’obstacle agit activement contre l’objectif.",
        "L’enjeu est concret et ne se réduit pas à un sentiment général.",
      ],
      quiz: {
        question: "Quelle formulation constitue un objectif de scène jouable ?",
        options: [
          "Elle est triste.",
          "Il se sent sous pression.",
          "Elle veut convaincre son frère de rester dans la pièce.",
          "La scène doit être intense.",
        ],
        explanation: "Un objectif de scène décrit un résultat que le personnage tente activement de produire face à quelqu’un ou quelque chose.",
      },
    },
    beats_turn_reversal: {
      title: "Beats, point de bascule et renversement",
      summary: "Décomposez la scène en petits changements et repérez le moment qui oblige l’action à prendre une nouvelle direction.",
      principle: "Une scène n’est pas une intensité uniforme. Elle est faite de beats où changent la tactique, l’information, le pouvoir ou la valeur émotionnelle.",
      filmAnalysisQuestion: "Comment de petits rejets et de nouveaux ultimatums modifient-ils progressivement la valeur des scènes et le rapport de force ?",
      practicePrompt: "Divisez une scène en au moins trois beats. Décrivez ce qui change dans chacun et indiquez le moment qui constitue le point de bascule décisif de la scène.",
      checklist: [
        "Chaque beat contient un changement réel.",
        "Le point de bascule modifie les possibilités d’action.",
        "Un éventuel renversement porte une valeur opposée à l’attente qui le précède.",
      ],
      quiz: {
        question: "Qu’est-ce qui distingue un point de bascule d’une réplique ordinaire ?",
        options: [
          "C’est toujours la réplique la plus longue de la scène.",
          "Il change la direction, le pouvoir ou les possibilités d’action dans la scène.",
          "Il doit se produire au milieu de la scène.",
          "Il exige un gros plan.",
        ],
        explanation: "Le point de bascule se définit par sa fonction dramatique, non par sa position, sa longueur ou la taille du plan.",
      },
    },
    subtext_playable_action: {
      title: "Sous-texte et action jouable",
      summary: "Transformez les émotions et les besoins cachés en actions qu’un acteur peut réellement tenter sur son partenaire de jeu.",
      principle: "La réalisation devrait donner une action, une circonstance et une résistance plutôt que demander à l’acteur de produire une émotion déterminée.",
      filmAnalysisQuestion: "Comment le film laisse-t-il les actions des personnages les uns envers les autres exprimer davantage que ce que les répliques expliquent directement ?",
      practicePrompt: "Choisissez une réplique porteuse de sous-texte. Écrivez ce que le personnage essaie réellement de faire à l’autre à l’aide d’un verbe actif : convaincre, désarmer, cacher, tester ou mettre sous pression.",
      checklist: [
        "Le sous-texte s’écarte de façon significative du sens littéral.",
        "L’action peut être dirigée vers un partenaire.",
        "La réponse naît de l’écoute et non d’une manière de dire prédéterminée.",
      ],
      quiz: {
        question: "Quelle direction d’acteur est la plus jouable ?",
        options: [
          "Sois plus blessé.",
          "Rends la scène plus forte.",
          "Obtiens d’elle qu’elle reconnaisse qu’elle ment.",
          "Montre au public que tu as peur.",
        ],
        explanation: "Une action jouable donne à l’acteur une tentative concrète dirigée vers son partenaire, et non l’ordre de montrer une émotion.",
      },
    },
    setup_payoff_sequence: {
      title: "Planting, payoff et place de la scène",
      summary: "Reliez les détails de la scène à des trajectoires plus larges afin que l’information produise des conséquences plus tard et que la scène accomplisse son travail dans la séquence.",
      principle: "Une scène efficace agit dans l’instant tout en préparant, modifiant ou accomplissant quelque chose dans la structure générale du film.",
      filmAnalysisQuestion: "Comment les routines quotidiennes et les détails de personnage prennent-ils un sens nouveau lorsque l’action finale les accomplit ?",
      practicePrompt: "Repérez un élément préparé dans la scène et écrivez comment il devra être accompli plus tard. Expliquez aussi la fonction de la scène dans la séquence plus large et dans l’arc émotionnel du personnage.",
      checklist: [
        "La préparation est assez claire pour être perçue sans être surexpliquée.",
        "L’accomplissement modifie la compréhension, l’action ou l’émotion.",
        "La scène a une fonction définie dans la séquence qui l’entoure.",
      ],
      quiz: {
        question: "Qu’est-ce qui rend une préparation et son accomplissement dramatiquement efficaces ?",
        options: [
          "Le même objet apparaît deux fois sans changer de sens.",
          "Un élément établi produit plus tard une conséquence ou acquiert un nouveau sens.",
          "Le public reçoit toute l’explication dès la première apparition de l’élément.",
          "La préparation doit toujours être un accessoire physique.",
        ],
        explanation: "La préparation et l’accomplissement peuvent concerner une information, une action, un son, une relation ou un objet ; l’essentiel est la conséquence ultérieure.",
      },
    },
  },
  pt: {
    context_point_of_view: {
      title: "Contexto, informação e ponto de vista",
      summary: "Defina o que já é verdade, o que o público sabe e através de quem a cena é experienciada.",
      principle: "Uma cena começa antes da primeira fala. A realização tem de compreender as circunstâncias dadas e controlar o acesso do público à informação.",
      filmAnalysisQuestion: "Como limita o filme a informação para que a experiência da criança se torne a entrada do público naquele mundo?",
      practicePrompt: "Escreva quatro frases: o que aconteceu antes da cena, o que sabe a personagem principal, o que sabe o público e que informação decisiva está a ser retida.",
      checklist: [
        "O tempo, o lugar e a relação estão concretizados.",
        "O conhecimento do público está separado do conhecimento da personagem.",
        "A exposição está ligada à ação e não apenas à explicação.",
      ],
      quiz: {
        question: "O que descreve com maior precisão o ponto de vista de uma cena?",
        options: [
          "A objetiva utilizada pela direção de fotografia.",
          "A pessoa ou elemento em torno do qual se organizam o conhecimento e a experiência do público.",
          "O número de personagens presentes no enquadramento.",
          "Se a cena foi filmada por ordem cronológica.",
        ],
        explanation: "O ponto de vista diz respeito ao acesso à experiência e à informação, não apenas ao ângulo físico da câmara.",
      },
    },
    objective_obstacle_stakes: {
      title: "Objetivo, obstáculo e risco",
      summary: "Torne a cena jogável definindo o que alguém tenta alcançar, o que o impede e o que custa falhar.",
      principle: "A pressão dramática surge quando um objetivo concreto encontra resistência ativa perante consequências significativas.",
      filmAnalysisQuestion: "Como tornam uma missão concreta e a pressão do tempo histórico a dúvida privada do protagonista dramaticamente jogável?",
      practicePrompt: "Formule o objetivo da cena como um resultado ativo: «X quer levar Y a…». Acrescente depois o obstáculo e a consequência concreta de falhar.",
      checklist: [
        "O objetivo pode ter sucesso ou falhar dentro da cena.",
        "O obstáculo atua ativamente contra o objetivo.",
        "O que está em risco é concreto, não apenas um sentimento geral.",
      ],
      quiz: {
        question: "Qual destas formulações é um objetivo de cena jogável?",
        options: [
          "Ela está triste.",
          "Ele sente pressão.",
          "Ela quer levar o irmão a ficar na sala.",
          "A cena deve ser intensa.",
        ],
        explanation: "Um objetivo de cena descreve um resultado que a personagem tenta ativamente criar em relação a alguém ou alguma coisa.",
      },
    },
    beats_turn_reversal: {
      title: "Beats, ponto de viragem e reversão",
      summary: "Divida a cena em pequenas mudanças e encontre o momento que obriga a ação a seguir numa nova direção.",
      principle: "Uma cena não é uma intensidade uniforme. É composta por beats nos quais mudam a tática, a informação, o poder ou o valor emocional.",
      filmAnalysisQuestion: "Como alteram pequenas rejeições e novos ultimatos, gradualmente, o valor das cenas e o equilíbrio de poder?",
      practicePrompt: "Divida uma cena em pelo menos três beats. Descreva o que muda em cada beat e assinale o momento que constitui o ponto de viragem decisivo da cena.",
      checklist: [
        "Cada beat contém uma mudança real.",
        "O ponto de viragem altera as possibilidades de ação.",
        "Uma eventual reversão tem um valor oposto à expectativa anterior.",
      ],
      quiz: {
        question: "O que distingue um ponto de viragem de uma fala comum?",
        options: [
          "É sempre a fala mais longa da cena.",
          "Altera a direção, o poder ou as possibilidades de ação na cena.",
          "Tem de surgir a meio da cena.",
          "Exige um corte para grande plano.",
        ],
        explanation: "O ponto de viragem é definido pela sua função dramática, não pela posição, duração ou escala do plano.",
      },
    },
    subtext_playable_action: {
      title: "Subtexto e ação jogável",
      summary: "Traduza emoções e necessidades ocultas em ações que o ator possa realmente tentar sobre o parceiro de cena.",
      principle: "A realização deve dar ação, circunstância e resistência em vez de pedir ao ator que produza uma emoção específica.",
      filmAnalysisQuestion: "Como permite o filme que aquilo que as personagens fazem umas pelas outras exprima mais do que as falas explicam diretamente?",
      practicePrompt: "Escolha uma fala com subtexto. Escreva o que a personagem tenta realmente fazer à outra usando um verbo ativo: convencer, desarmar, esconder, testar ou pressionar.",
      checklist: [
        "O subtexto difere de forma significativa do sentido literal.",
        "A ação pode ser dirigida a um parceiro de cena.",
        "A resposta nasce da escuta, não de uma entrega predeterminada.",
      ],
      quiz: {
        question: "Qual destas indicações de realização é mais jogável?",
        options: [
          "Fica mais magoado.",
          "Torna a cena mais forte.",
          "Leva-a a admitir que está a mentir.",
          "Mostra ao público que tens medo.",
        ],
        explanation: "Uma ação jogável dá ao ator uma tentativa concreta dirigida ao parceiro, não uma ordem para demonstrar uma emoção.",
      },
    },
    setup_payoff_sequence: {
      title: "Preparação, payoff e posição da cena",
      summary: "Ligue os detalhes da cena a percursos maiores para que a informação tenha consequências posteriores e a cena cumpra uma função necessária na sequência.",
      principle: "Uma cena eficaz funciona no momento presente e, ao mesmo tempo, prepara, altera ou concretiza algo na estrutura maior do filme.",
      filmAnalysisQuestion: "Como ganham as rotinas quotidianas e os detalhes das personagens um novo significado quando a ação final os concretiza?",
      practicePrompt: "Encontre uma preparação na cena e escreva como deverá ter payoff mais tarde. Explique também a função da cena na sequência maior e no arco emocional da personagem.",
      checklist: [
        "A preparação é suficientemente clara para ser registada, sem ser excessivamente explicada.",
        "O payoff altera a compreensão, a ação ou a emoção.",
        "A cena tem uma função definida na sequência em que se insere.",
      ],
      quiz: {
        question: "O que torna uma preparação e um payoff dramaticamente eficazes?",
        options: [
          "O mesmo objeto aparece duas vezes sem mudar de significado.",
          "Um elemento estabelecido tem mais tarde uma consequência ou adquire novo significado.",
          "O público recebe toda a explicação na primeira vez que o elemento aparece.",
          "A preparação tem sempre de ser um adereço físico.",
        ],
        explanation: "A preparação e o payoff podem envolver informação, ação, som, relação ou objeto; o essencial é a consequência posterior.",
      },
    },
  },
};

export const SCREENPLAY_LESSON_COPY: Readonly<Record<FilmWorkLanguage, Readonly<Record<ScreenplayLessonId, ScreenplayLessonCopy>>>> = {
  ...localizedCopy,
  nb: canonicalNorwegian,
};

export function getScreenplayLessonCopy(language: FilmWorkLanguage, lesson: ScreenplayCourseLesson): ScreenplayLessonCopy {
  return SCREENPLAY_LESSON_COPY[language][lesson.id as ScreenplayLessonId] ?? toCopy(lesson);
}

function toCopy(lesson: ScreenplayCourseLesson): ScreenplayLessonCopy {
  return {
    title: lesson.title,
    summary: lesson.summary,
    principle: lesson.principle,
    filmAnalysisQuestion: lesson.film.analysisQuestion,
    practicePrompt: lesson.practicePrompt,
    checklist: lesson.checklist,
    quiz: {
      question: lesson.quiz.question,
      options: lesson.quiz.options,
      explanation: lesson.quiz.explanation,
    },
  };
}
