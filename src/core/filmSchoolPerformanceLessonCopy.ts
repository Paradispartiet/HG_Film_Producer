import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { PERFORMANCE_COURSE_LESSONS, type PerformanceCourseLesson } from "./filmSchoolPerformanceCourse.js";

export type PerformanceLessonCopy = {
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

type PerformanceLessonId =
  | "circumstances_intention"
  | "playable_action_listening"
  | "blocking_power_movement"
  | "eyeline_marks_camera"
  | "rehearsal_adjustment_continuity";

const canonicalNorwegian = Object.fromEntries(
  PERFORMANCE_COURSE_LESSONS.map((lesson) => [lesson.id, toCopy(lesson)]),
) as Record<PerformanceLessonId, PerformanceLessonCopy>;

const localizedCopy: Record<Exclude<FilmWorkLanguage, "nb">, Record<PerformanceLessonId, PerformanceLessonCopy>> = {
  en: {
    circumstances_intention: {
      title: "Given circumstances, objective and intention",
      summary: "Give the actor concrete facts and a clear attempt instead of a general mood.",
      principle: "Performance becomes playable when the actor knows what is already true, what the character wants to achieve, and what the character is trying to do to the scene partner right now.",
      filmAnalysisQuestion: "How do environment, social position and concrete needs make the boy’s actions legible without the film explaining his feelings?",
      practicePrompt: "Write five given circumstances for a scene. Then phrase the scene objective as ‘X wants to get Y to …’ and choose one active verb for the character’s first intention.",
      checklist: [
        "The facts can be observed or inferred from the screenplay.",
        "The objective can succeed or fail within the scene.",
        "The intention is phrased as something the character does to the partner.",
      ],
      quiz: {
        question: "Which direction gives the actor the most playable material?",
        options: [
          "Be lonelier.",
          "Make the scene darker.",
          "Get the teacher to let you leave without revealing why.",
          "Show the audience that you are afraid.",
        ],
        explanation: "A concrete action toward a partner can be attempted, fail and be adjusted. An emotion label only describes a desired result.",
      },
    },
    playable_action_listening: {
      title: "Playable action, subtext and listening",
      summary: "Let the response arise from the partner instead of locking the line into a predetermined delivery.",
      principle: "The director can shape subtext through active verbs and circumstances, but the performance must still receive and respond to what actually happens in the take.",
      filmAnalysisQuestion: "How do the characters shift tactics through listening, provocation and defence while the dialogue conceals other needs?",
      practicePrompt: "Choose six lines from a dialogue scene. Write one active verb over each beat and describe what the character must hear or see in the partner before the tactic changes.",
      checklist: [
        "The chosen verbs can be directed toward the partner.",
        "At least one beat changes action because of listening.",
        "The subtext is clear without the actor having to demonstrate it directly.",
      ],
      quiz: {
        question: "What is active listening in a film take?",
        options: [
          "Waiting for your own line with the correct facial expression.",
          "Receiving the partner’s action so the response can arise in the moment.",
          "Playing more quietly than the other actor.",
          "Avoiding pauses in the dialogue.",
        ],
        explanation: "Listening is an active reception of the partner’s action, not merely technical waiting for the next line.",
      },
    },
    blocking_power_movement: {
      title: "Blocking, power and motivated movement",
      summary: "Organize bodies and movement so the space expresses action, pressure and changing relationships.",
      principle: "Blocking is dramatic when movement grows from the character’s need and changes distance, access, dominance or the audience’s information.",
      filmAnalysisQuestion: "How does the film use distance, stillness, bodies and placement to make ideological and physical power visible?",
      practicePrompt: "Draw a simple room from above. Place two characters and one important object. Plan three motivated movements that change power or access, and write why each movement happens at that exact moment.",
      checklist: [
        "Every movement has a cause in the action.",
        "Distance or power relations change at least once.",
        "Physical business supports the scene instead of becoming random activity.",
      ],
      quiz: {
        question: "When is a movement motivated?",
        options: [
          "When the actor is moved because the frame would otherwise look empty.",
          "When the movement grows from the character’s action, information or situation.",
          "When the camera moves at the same time.",
          "When it appears in the shot list.",
        ],
        explanation: "Production can adapt blocking, but the audience reads the scene more clearly when movement has a legible dramatic cause.",
      },
    },
    eyeline_marks_camera: {
      title: "Eyelines, marks and the camera relationship",
      summary: "Preserve the credibility of the performance while eyelines, focus, lighting and screen direction work technically.",
      principle: "Precise film blocking requires the director to unite the actor’s attention with camera geometry without making the technique visible as technique.",
      filmAnalysisQuestion: "How do the long takes keep space, eyelines and bodily pressure clear while the characters must handle several demands at once?",
      practicePrompt: "Plan a three-person conversation. Mark the axis of action, eyelines and two floor marks. Describe one small cheat that helps the camera without changing the character’s intention.",
      checklist: [
        "The audience can understand who is looking at whom.",
        "Marks are tied to action rather than mechanical stopping points.",
        "Any cheat preserves the relationship and the performance.",
      ],
      quiz: {
        question: "What is a cheat in blocking?",
        options: [
          "A mistake hidden in the edit.",
          "A small adjustment of a body or object for the camera’s needs.",
          "An improvised line.",
          "A break from the shooting schedule.",
        ],
        explanation: "A cheat discreetly adjusts placement so face, light, focus or composition works without making the space feel changed.",
      },
    },
    rehearsal_adjustment_continuity: {
      title: "Rehearsal, adjustment and continuity between takes",
      summary: "Use rehearsal to find the scene, then use the takes to improve one concrete thing at a time.",
      principle: "A useful adjustment describes what should be done differently and when, while the director protects the scene’s emotional arc and continuity.",
      filmAnalysisQuestion: "How do the performances preserve a clear emotional development through repeated encounters, small tactical shifts and precise reactions?",
      practicePrompt: "Describe three takes of the same scene. Take 1 maps the action. Then give one concrete adjustment for take 2 and one new adjustment for take 3. Write what must remain continuous across all three.",
      checklist: [
        "Each adjustment changes only one clear relationship.",
        "The direction says what the actor should do, not which emotion should be displayed.",
        "The emotional arc and necessary continuity are documented.",
      ],
      quiz: {
        question: "Which adjustment is the most precise between two takes?",
        options: [
          "More energy.",
          "Be less theatrical.",
          "Next time, wait until she takes the key before you try to stop her.",
          "Do it better, but keep the feeling.",
        ],
        explanation: "The note changes timing and action concretely. The actor can perform it without having to interpret a vague quality judgment.",
      },
    },
  },
  fr: {
    circumstances_intention: {
      title: "Circonstances données, objectif et intention",
      summary: "Donnez à l’acteur des faits concrets et une tentative claire plutôt qu’une ambiance générale.",
      principle: "Le jeu devient praticable lorsque l’acteur sait ce qui est déjà vrai, ce que le personnage veut obtenir et ce qu’il tente de faire à son partenaire dans l’instant.",
      filmAnalysisQuestion: "Comment le milieu, la position sociale et les besoins concrets rendent-ils les actions du garçon lisibles sans que le film explique ses émotions ?",
      practicePrompt: "Écrivez cinq circonstances données pour une scène. Formulez ensuite l’objectif sous la forme « X veut amener Y à… » et choisissez un verbe d’action pour la première intention du personnage.",
      checklist: [
        "Les faits peuvent être observés ou déduits du scénario.",
        "L’objectif peut réussir ou échouer dans la scène.",
        "L’intention est formulée comme une action du personnage sur son partenaire.",
      ],
      quiz: {
        question: "Quelle indication donne à l’acteur le matériau le plus jouable ?",
        options: [
          "Sois plus seul.",
          "Rends la scène plus sombre.",
          "Obtiens du professeur qu’il te laisse partir sans révéler pourquoi.",
          "Montre au public que tu as peur.",
        ],
        explanation: "Une action concrète dirigée vers un partenaire peut être tentée, échouer puis être ajustée. Une étiquette émotionnelle ne décrit qu’un résultat souhaité.",
      },
    },
    playable_action_listening: {
      title: "Action jouable, sous-texte et écoute",
      summary: "Laissez la réponse naître du partenaire au lieu d’enfermer la réplique dans une manière de dire prédéterminée.",
      principle: "La réalisation peut orienter le sous-texte par des verbes actifs et des circonstances, mais le jeu doit encore recevoir et traiter ce qui se passe réellement pendant la prise.",
      filmAnalysisQuestion: "Comment les personnages changent-ils de tactique par l’écoute, la provocation et la défense tandis que les répliques dissimulent d’autres besoins ?",
      practicePrompt: "Choisissez six répliques d’une scène dialoguée. Écrivez un verbe actif au-dessus de chaque beat et décrivez ce que le personnage doit entendre ou voir chez son partenaire avant de changer de tactique.",
      checklist: [
        "Les verbes choisis peuvent être dirigés vers le partenaire.",
        "Au moins un beat change d’action à cause de l’écoute.",
        "Le sous-texte est clair sans que l’acteur ait à le démontrer directement.",
      ],
      quiz: {
        question: "Qu’est-ce que l’écoute active pendant une prise ?",
        options: [
          "Attendre sa propre réplique avec la bonne expression du visage.",
          "Recevoir l’action du partenaire pour que la réponse puisse naître dans l’instant.",
          "Jouer moins fort que l’autre acteur.",
          "Éviter les silences dans le dialogue.",
        ],
        explanation: "L’écoute est une réception active de l’action du partenaire, pas une simple attente technique de la prochaine réplique.",
      },
    },
    blocking_power_movement: {
      title: "Mise en place, pouvoir et mouvement motivé",
      summary: "Organisez les corps et les déplacements afin que l’espace exprime l’action, la pression et l’évolution des relations.",
      principle: "La mise en place devient dramatique lorsque le mouvement naît du besoin du personnage et modifie la distance, l’accès, la domination ou l’information du public.",
      filmAnalysisQuestion: "Comment le film utilise-t-il la distance, l’immobilité, les corps et leur placement pour rendre visibles le pouvoir idéologique et physique ?",
      practicePrompt: "Dessinez une pièce simple vue du dessus. Placez deux personnages et un objet important. Prévoyez trois déplacements motivés qui modifient le pouvoir ou l’accès, puis écrivez pourquoi chacun se produit précisément à ce moment-là.",
      checklist: [
        "Chaque déplacement a une cause dans l’action.",
        "La distance ou le rapport de force change au moins une fois.",
        "L’activité physique soutient la scène sans devenir une agitation arbitraire.",
      ],
      quiz: {
        question: "Quand un déplacement est-il motivé ?",
        options: [
          "Quand on déplace l’acteur parce que le cadre serait sinon vide.",
          "Quand le mouvement découle de l’action, de l’information ou de la situation du personnage.",
          "Quand la caméra bouge en même temps.",
          "Quand il figure dans la liste des plans.",
        ],
        explanation: "La production peut adapter la mise en place, mais la scène est plus lisible lorsque le mouvement possède une cause dramatique identifiable.",
      },
    },
    eyeline_marks_camera: {
      title: "Regards, marques et relation à la caméra",
      summary: "Préservez la crédibilité du jeu tout en faisant fonctionner techniquement les regards, la mise au point, la lumière et la direction écran.",
      principle: "Une mise en place précise au cinéma exige de relier l’attention de l’acteur à la géométrie de la caméra sans rendre la technique visible comme telle.",
      filmAnalysisQuestion: "Comment les plans longs maintiennent-ils la clarté de l’espace, des regards et de la pression physique alors que les personnages doivent gérer plusieurs exigences simultanées ?",
      practicePrompt: "Préparez une conversation à trois. Marquez l’axe d’action, les regards et deux marques au sol. Décrivez un petit cheat qui aide la caméra sans modifier l’intention du personnage.",
      checklist: [
        "Le public peut comprendre qui regarde qui.",
        "Les marques sont liées à l’action plutôt qu’à des arrêts mécaniques.",
        "Un éventuel cheat préserve la relation et le jeu.",
      ],
      quiz: {
        question: "Qu’est-ce qu’un cheat dans la mise en place ?",
        options: [
          "Une erreur cachée au montage.",
          "Un léger ajustement du corps ou d’un objet pour les besoins de la caméra.",
          "Une réplique improvisée.",
          "Un écart par rapport au plan de tournage.",
        ],
        explanation: "Un cheat ajuste discrètement le placement pour que le visage, la lumière, la mise au point ou la composition fonctionne sans donner l’impression que l’espace a changé.",
      },
    },
    rehearsal_adjustment_continuity: {
      title: "Répétition, ajustement et continuité entre les prises",
      summary: "Utilisez la répétition pour trouver la scène, puis les prises pour améliorer un élément concret à la fois.",
      principle: "Un bon ajustement décrit ce qui doit être fait autrement et à quel moment, tout en protégeant l’arc émotionnel et la continuité de la scène.",
      filmAnalysisQuestion: "Comment les interprétations conservent-elles une évolution émotionnelle claire à travers des rencontres répétées, de petits changements tactiques et des réactions précises ?",
      practicePrompt: "Décrivez trois prises de la même scène. La prise 1 cartographie l’action. Donnez ensuite un ajustement concret pour la prise 2 et un nouvel ajustement pour la prise 3. Écrivez ce qui doit rester continu dans les trois.",
      checklist: [
        "Chaque ajustement ne modifie qu’un rapport clairement identifié.",
        "L’indication dit ce que l’acteur doit faire, pas quelle émotion il doit montrer.",
        "L’arc émotionnel et la continuité nécessaire sont documentés.",
      ],
      quiz: {
        question: "Quel ajustement est le plus précis entre deux prises ?",
        options: [
          "Plus d’énergie.",
          "Sois moins théâtral.",
          "La prochaine fois, attends qu’elle prenne la clé avant d’essayer de l’arrêter.",
          "Fais-le mieux, mais garde l’émotion.",
        ],
        explanation: "L’indication modifie concrètement le timing et l’action. L’acteur peut l’exécuter sans devoir interpréter un jugement de qualité vague.",
      },
    },
  },
  pt: {
    circumstances_intention: {
      title: "Circunstâncias dadas, objetivo e intenção",
      summary: "Dê ao ator factos concretos e uma tentativa clara em vez de uma atmosfera geral.",
      principle: "A interpretação torna-se jogável quando o ator sabe o que já é verdade, o que a personagem quer alcançar e o que está a tentar fazer ao parceiro de cena naquele momento.",
      filmAnalysisQuestion: "Como tornam o ambiente, a posição social e as necessidades concretas as ações do rapaz legíveis sem o filme explicar os seus sentimentos?",
      practicePrompt: "Escreva cinco circunstâncias dadas para uma cena. Depois formule o objetivo como «X quer levar Y a…» e escolha um verbo ativo para a primeira intenção da personagem.",
      checklist: [
        "Os factos podem ser observados ou inferidos a partir do argumento.",
        "O objetivo pode ser alcançado ou falhar dentro da cena.",
        "A intenção é formulada como algo que a personagem faz ao parceiro.",
      ],
      quiz: {
        question: "Que indicação dá ao ator o material mais jogável?",
        options: [
          "Fica mais sozinho.",
          "Torna a cena mais sombria.",
          "Faz com que o professor te deixe sair sem revelares porquê.",
          "Mostra ao público que tens medo.",
        ],
        explanation: "Uma ação concreta dirigida a um parceiro pode ser tentada, falhar e ser ajustada. Um rótulo emocional descreve apenas um resultado desejado.",
      },
    },
    playable_action_listening: {
      title: "Ação jogável, subtexto e escuta",
      summary: "Deixe a resposta nascer do parceiro em vez de prender a fala a uma forma de dizer predeterminada.",
      principle: "O realizador pode orientar o subtexto através de verbos ativos e circunstâncias, mas a interpretação tem de receber e responder ao que realmente acontece no take.",
      filmAnalysisQuestion: "Como mudam as personagens de tática através da escuta, da provocação e da defesa enquanto as falas escondem outras necessidades?",
      practicePrompt: "Escolha seis falas de uma cena de diálogo. Escreva um verbo ativo sobre cada beat e descreva o que a personagem precisa de ouvir ou ver no parceiro antes de mudar de tática.",
      checklist: [
        "Os verbos escolhidos podem ser dirigidos ao parceiro.",
        "Pelo menos um beat muda de ação por causa da escuta.",
        "O subtexto é claro sem o ator ter de o demonstrar diretamente.",
      ],
      quiz: {
        question: "O que é escuta ativa num take?",
        options: [
          "Esperar pela própria fala com a expressão facial certa.",
          "Receber a ação do parceiro para que a resposta possa nascer no momento.",
          "Representar com menos intensidade do que o outro ator.",
          "Evitar pausas no diálogo.",
        ],
        explanation: "Escutar é receber ativamente a ação do parceiro, não apenas esperar tecnicamente pela fala seguinte.",
      },
    },
    blocking_power_movement: {
      title: "Marcação, poder e movimento motivado",
      summary: "Organize corpos e movimentos para que o espaço expresse ação, pressão e relações em mudança.",
      principle: "A marcação é dramática quando o movimento nasce da necessidade da personagem e altera distância, acesso, domínio ou a informação do público.",
      filmAnalysisQuestion: "Como usa o filme a distância, a imobilidade, o corpo e a posição para tornar visíveis o poder ideológico e físico?",
      practicePrompt: "Desenhe uma sala simples vista de cima. Coloque duas personagens e um objeto importante. Planeie três movimentos motivados que alterem poder ou acesso e escreva por que razão cada movimento acontece exatamente naquele momento.",
      checklist: [
        "Cada movimento tem uma causa na ação.",
        "A distância ou a relação de poder muda pelo menos uma vez.",
        "A atividade física apoia a cena sem se transformar em agitação aleatória.",
      ],
      quiz: {
        question: "Quando é que um movimento é motivado?",
        options: [
          "Quando se desloca o ator porque o enquadramento ficaria vazio.",
          "Quando o movimento nasce da ação, da informação ou da situação da personagem.",
          "Quando a câmara se move ao mesmo tempo.",
          "Quando está na lista de planos.",
        ],
        explanation: "A produção pode adaptar a marcação, mas a cena torna-se mais legível quando o movimento tem uma causa dramática clara.",
      },
    },
    eyeline_marks_camera: {
      title: "Linhas de olhar, marcas e relação com a câmara",
      summary: "Preserve a credibilidade da interpretação enquanto linhas de olhar, foco, luz e direção no ecrã funcionam tecnicamente.",
      principle: "Uma marcação cinematográfica precisa exige que o realizador una a atenção do ator à geometria da câmara sem tornar a técnica visível como técnica.",
      filmAnalysisQuestion: "Como mantêm os planos longos o espaço, os olhares e a pressão corporal claros enquanto as personagens têm de responder a várias exigências em simultâneo?",
      practicePrompt: "Planeie uma conversa entre três pessoas. Marque o eixo de ação, as linhas de olhar e duas marcas no chão. Descreva um pequeno cheat que ajude a câmara sem alterar a intenção da personagem.",
      checklist: [
        "O público consegue perceber quem olha para quem.",
        "As marcas estão ligadas à ação em vez de serem pontos de paragem mecânicos.",
        "Qualquer cheat preserva a relação e a interpretação.",
      ],
      quiz: {
        question: "O que é um cheat na marcação?",
        options: [
          "Um erro escondido na montagem.",
          "Um pequeno ajuste do corpo ou de um objeto para responder às necessidades da câmara.",
          "Uma fala improvisada.",
          "Uma quebra do plano de rodagem.",
        ],
        explanation: "Um cheat ajusta discretamente a posição para que rosto, luz, foco ou composição funcionem sem que o espaço pareça ter mudado.",
      },
    },
    rehearsal_adjustment_continuity: {
      title: "Ensaio, ajuste e continuidade entre takes",
      summary: "Use o ensaio para encontrar a cena e os takes para melhorar uma coisa concreta de cada vez.",
      principle: "Um bom ajuste descreve o que deve ser feito de modo diferente e quando, enquanto o realizador protege o arco emocional e a continuidade da cena.",
      filmAnalysisQuestion: "Como preservam as interpretações uma evolução emocional clara através de encontros repetidos, pequenas mudanças táticas e reações precisas?",
      practicePrompt: "Descreva três takes da mesma cena. O take 1 mapeia a ação. Depois dê um ajuste concreto para o take 2 e um novo ajuste para o take 3. Escreva o que tem de permanecer contínuo nos três.",
      checklist: [
        "Cada ajuste altera apenas uma relação claramente definida.",
        "A indicação diz o que o ator deve fazer, não que emoção deve mostrar.",
        "O arco emocional e a continuidade necessária estão documentados.",
      ],
      quiz: {
        question: "Qual é o ajuste mais preciso entre dois takes?",
        options: [
          "Mais energia.",
          "Sê menos teatral.",
          "Da próxima vez, espera até ela pegar na chave antes de tentares impedi-la.",
          "Faz melhor, mas mantém a emoção.",
        ],
        explanation: "A indicação altera de forma concreta o timing e a ação. O ator consegue executá-la sem ter de interpretar um juízo de qualidade vago.",
      },
    },
  },
};

export const PERFORMANCE_LESSON_COPY: Readonly<Record<FilmWorkLanguage, Readonly<Record<PerformanceLessonId, PerformanceLessonCopy>>>> = {
  ...localizedCopy,
  nb: canonicalNorwegian,
};

export function getPerformanceLessonCopy(language: FilmWorkLanguage, lesson: PerformanceCourseLesson): PerformanceLessonCopy {
  return PERFORMANCE_LESSON_COPY[language][lesson.id as PerformanceLessonId] ?? toCopy(lesson);
}

function toCopy(lesson: PerformanceCourseLesson): PerformanceLessonCopy {
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
