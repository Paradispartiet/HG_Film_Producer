import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { CAMERA_COURSE_LESSONS, type CameraCourseLesson } from "./filmSchoolCameraCourse.js";

export type CameraLessonCopy = {
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

type CameraLessonId =
  | "shot_size_composition"
  | "camera_position_perspective"
  | "lenses_depth"
  | "camera_movement"
  | "focus_attention";

const canonicalNorwegian = Object.fromEntries(
  CAMERA_COURSE_LESSONS.map((lesson) => [lesson.id, toCopy(lesson)]),
) as Record<CameraLessonId, CameraLessonCopy>;

const localizedCopy: Record<Exclude<FilmWorkLanguage, "nb">, Record<CameraLessonId, CameraLessonCopy>> = {
  en: {
    shot_size_composition: {
      title: "Shot size, composition and dramatic function",
      summary: "Choose how much the audience should see, what should dominate, and when a new framing genuinely changes the scene.",
      principle: "Shot size is not merely a scale. It distributes information, intimacy and attention, so it needs a concrete dramatic function within the scene’s development.",
      filmAnalysisQuestion: "How does the film use distance, empty space and restrained close-ups to organize the child’s attention and the audience’s uncertainty?",
      practicePrompt: "Plan four shots of the same dramatic moment: wide shot, two-shot, medium close-up and close-up. Write what new information or emotional change each shot must deliver.",
      checklist: [
        "Each shot size has its own dramatic function.",
        "The composition clearly establishes what the audience should discover first.",
        "The close-up is used for an actual change, not automatically for important dialogue.",
      ],
      quiz: {
        question: "What is the strongest reason to cut to a close-up?",
        options: [
          "The scene has remained in the wide shot long enough.",
          "The close-up makes the production feel more cinematic.",
          "The shot reveals a decisive discovery that cannot be read as precisely in the wider framing.",
          "Every dialogue scene needs at least one close-up.",
        ],
        explanation: "Shot size should be chosen according to what the audience needs to experience or understand at that moment, not by a mechanical coverage rule.",
      },
    },
    camera_position_perspective: {
      title: "Camera position, perspective and space",
      summary: "Understand how distance, height, direction and optical perspective determine the relationship between audience, character and environment.",
      principle: "The camera’s physical position determines perspective. The director must distinguish moving the camera from changing focal length because those choices shape space and relationships in different ways.",
      filmAnalysisQuestion: "How do changing camera positions and spatial layers make the historical conflict personal, unstable and physically immediate?",
      practicePrompt: "Draw the same two-person scene from three camera positions: close to the axis, perpendicular to the relationship, and far back in the space. Describe how each position changes power, proximity and background.",
      checklist: [
        "The camera position is justified by the audience’s relationship to the action.",
        "The difference between physical distance and focal length is described.",
        "The axis of action and screen direction are controlled or deliberately broken.",
      ],
      quiz: {
        question: "What happens when the camera moves closer to the subject and a wider lens is used to keep roughly the same framing?",
        options: [
          "Perspective stays identical because the framing is similar.",
          "Space and distance relationships feel more extended, and near–far differences become more pronounced.",
          "Only the exposure changes.",
          "The background always becomes sharper.",
        ],
        explanation: "Perspective is governed by camera position. A wider lens used from a shorter distance emphasizes near–far relationships even when subject size remains similar.",
      },
    },
    lenses_depth: {
      title: "Focal length, lens choice and depth of field",
      summary: "Choose optics according to how space, faces, background and simultaneous action should feel.",
      principle: "Lens choice is part of staging. Focal length, camera distance, aperture and focus must be planned together because they determine both perspective and how much of the space can be read at once.",
      filmAnalysisQuestion: "How does the film use precise spatial distances, planes of focus and restrained optics to make body, institution and power legible at the same time?",
      practicePrompt: "Create two optical versions of the same scene. Version A uses deep focus and simultaneous action in foreground and background. Version B isolates one character with shallow depth of field. Explain which version best expresses the scene’s purpose.",
      checklist: [
        "The lens choice describes a spatial experience, not merely a millimetre value.",
        "Depth of field is tied to how much information the audience should be able to read at once.",
        "Camera distance, aperture and focus are considered as one system.",
      ],
      quiz: {
        question: "What is the main dramatic difference between shallow focus and deep focus?",
        options: [
          "Shallow focus is only for close-ups and deep focus only for wide shots.",
          "Shallow focus restricts legible attention to a narrower plane, while deep focus can keep several depth planes meaningful at the same time.",
          "Deep focus always requires a zoom lens.",
          "Shallow focus automatically makes the performance stronger.",
        ],
        explanation: "The focus range controls what simultaneous information the audience can read. It is a storytelling choice, not merely an aesthetic effect.",
      },
    },
    camera_movement: {
      title: "Camera movement and motivation",
      summary: "Decide when the camera should rotate, travel, be handheld or remain still, and what the movement changes for the audience.",
      principle: "Camera movement becomes meaningful when it responds to action, reveals space, changes perspective or redirects the audience’s attention. Movement without function becomes generic energy.",
      filmAnalysisQuestion: "How does the combination of restrained camera work, long observations and precise movements create sustained practical and moral pressure?",
      practicePrompt: "Plan one scene in three versions: static camera, a dolly move and handheld camera. Describe exactly when the movement begins, what it follows or reveals, and why one version is the right choice.",
      checklist: [
        "The movement starts on a concrete dramatic impulse.",
        "It is clear whether the camera rotates or physically changes position and perspective.",
        "The choice between static, stabilized and handheld language is justified.",
      ],
      quiz: {
        question: "What distinguishes a dolly move from a zoom?",
        options: [
          "A dolly can only move forward.",
          "A zoom changes perspective, while a dolly only changes framing.",
          "A dolly changes the camera’s physical position and therefore perspective; a zoom changes focal length from the same position.",
          "There is no visible difference if the subject remains the same size.",
        ],
        explanation: "Physical camera movement changes perspective and the relationship between depth planes. A zoom changes angle of view without moving the viewpoint.",
      },
    },
    focus_attention: {
      title: "Focus, attention and shot planning",
      summary: "Plan where the viewer’s attention should sit within the frame, and use focus shifts only when attention genuinely needs to move.",
      principle: "Focus is a narrative priority. A focus pull or rack focus should be timed to a discovery, reaction or change in depth and must belong to an executable shot plan.",
      filmAnalysisQuestion: "How does the film keep attention on the boy and his surroundings through naturalistic framing, responsive cinematography and precise reaction shots?",
      practicePrompt: "Write a five-shot plan with shot size, camera position, lens family and focus priority. At least one shot must shift focus between two depth planes at a specific dramatic moment.",
      checklist: [
        "Each shot has a defined dramatic function and focus subject.",
        "The focus shift occurs on a concrete information or reaction change.",
        "The plan can be tested practically with blocking, eyelines and the chosen optics.",
      ],
      quiz: {
        question: "When is a rack focus most justified?",
        options: [
          "When the shot has lasted more than five seconds.",
          "When the focus shift transfers the audience’s attention to new dramatic information in another depth plane.",
          "When the background looks visually attractive.",
          "When the production wants to avoid a cut regardless of the reason.",
        ],
        explanation: "A marked focus shift should perform a clear change in information or attention, not merely demonstrate the technique.",
      },
    },
  },
  fr: {
    shot_size_composition: {
      title: "Échelle de plan, composition et fonction dramatique",
      summary: "Choisissez ce que le public doit voir, ce qui doit dominer et le moment où un nouveau cadrage transforme réellement la scène.",
      principle: "L’échelle de plan n’est pas qu’une taille. Elle distribue l’information, la proximité et l’attention ; elle doit donc remplir une fonction dramatique concrète dans l’évolution de la scène.",
      filmAnalysisQuestion: "Comment le film utilise-t-il la distance, le vide et des gros plans retenus pour organiser l’attention de l’enfant et l’incertitude du public ?",
      practicePrompt: "Planifiez quatre plans du même moment dramatique : plan large, plan à deux, plan rapproché et gros plan. Écrivez quelle information nouvelle ou quelle évolution émotionnelle chacun doit apporter.",
      checklist: [
        "Chaque échelle de plan possède sa propre fonction dramatique.",
        "La composition indique clairement ce que le public doit découvrir en premier.",
        "Le gros plan accompagne un changement réel et n’est pas utilisé automatiquement pour un dialogue important.",
      ],
      quiz: {
        question: "Quelle est la meilleure raison de passer à un gros plan ?",
        options: [
          "La scène est restée assez longtemps en plan large.",
          "Le gros plan rend la production plus cinématographique.",
          "Le plan révèle une découverte décisive qui ne peut pas être lue avec la même précision dans un cadrage plus large.",
          "Toute scène dialoguée doit comporter au moins un gros plan.",
        ],
        explanation: "L’échelle de plan doit dépendre de ce que le public doit éprouver ou comprendre à cet instant, et non d’une règle mécanique de couverture.",
      },
    },
    camera_position_perspective: {
      title: "Position de caméra, perspective et espace",
      summary: "Comprenez comment la distance, la hauteur, la direction et la perspective optique déterminent la relation entre le public, le personnage et l’environnement.",
      principle: "La position physique de la caméra détermine la perspective. La réalisation doit distinguer le déplacement de la caméra du changement de focale, car ces choix façonnent l’espace et les relations de manières différentes.",
      filmAnalysisQuestion: "Comment les changements de position de caméra et les couches spatiales rendent-ils le conflit historique personnel, instable et physiquement proche ?",
      practicePrompt: "Dessinez la même scène à deux personnages depuis trois positions de caméra : près de l’axe, perpendiculaire à la relation et loin en retrait dans l’espace. Décrivez comment chaque position modifie le pouvoir, la proximité et l’arrière-plan.",
      checklist: [
        "La position de caméra est justifiée par la relation du public à l’action.",
        "La différence entre distance physique et focale est décrite.",
        "L’axe d’action et la direction écran sont maîtrisés ou délibérément rompus.",
      ],
      quiz: {
        question: "Que se passe-t-il lorsque la caméra se rapproche du sujet et qu’un objectif plus grand-angle est utilisé pour conserver à peu près le même cadrage ?",
        options: [
          "La perspective reste identique puisque le cadrage est similaire.",
          "L’espace et les rapports de distance paraissent plus étendus, et les différences entre proche et lointain deviennent plus marquées.",
          "Seule l’exposition change.",
          "L’arrière-plan devient toujours plus net.",
        ],
        explanation: "La perspective dépend de la position de la caméra. Un objectif plus grand-angle utilisé à plus courte distance accentue les rapports proche–lointain même lorsque la taille du sujet reste similaire.",
      },
    },
    lenses_depth: {
      title: "Focale, choix d’objectif et profondeur de champ",
      summary: "Choisissez l’optique selon la manière dont l’espace, les visages, l’arrière-plan et les actions simultanées doivent être perçus.",
      principle: "Le choix d’objectif fait partie de la mise en scène. Focale, distance caméra, ouverture et mise au point doivent être pensés ensemble, car ils déterminent à la fois la perspective et la quantité d’espace lisible simultanément.",
      filmAnalysisQuestion: "Comment le film utilise-t-il des distances spatiales précises, des plans de netteté et une optique retenue pour rendre simultanément lisibles le corps, l’institution et le pouvoir ?",
      practicePrompt: "Créez deux versions optiques de la même scène. La version A utilise une grande profondeur de champ et des actions simultanées au premier plan et à l’arrière-plan. La version B isole un personnage avec une faible profondeur de champ. Expliquez laquelle exprime le mieux l’intention de la scène.",
      checklist: [
        "Le choix d’objectif décrit une expérience de l’espace et pas seulement une valeur en millimètres.",
        "La profondeur de champ est liée à la quantité d’informations que le public doit pouvoir lire simultanément.",
        "Distance caméra, ouverture et mise au point sont envisagées comme un seul système.",
      ],
      quiz: {
        question: "Quelle est la principale différence dramatique entre faible et grande profondeur de champ ?",
        options: [
          "La faible profondeur de champ ne sert qu’aux gros plans et la grande profondeur de champ qu’aux plans larges.",
          "La faible profondeur de champ limite l’attention lisible à une zone plus étroite, tandis qu’une grande profondeur de champ peut maintenir plusieurs plans significatifs simultanément.",
          "Une grande profondeur de champ exige toujours un zoom.",
          "Une faible profondeur de champ renforce automatiquement le jeu de l’acteur.",
        ],
        explanation: "La zone de netteté détermine quelles informations simultanées le public peut lire. C’est un choix narratif, pas seulement un effet esthétique.",
      },
    },
    camera_movement: {
      title: "Mouvement de caméra et motivation",
      summary: "Décidez quand la caméra doit pivoter, se déplacer, être portée ou rester immobile, et ce que ce mouvement change pour le public.",
      principle: "Le mouvement de caméra devient signifiant lorsqu’il répond à l’action, révèle l’espace, modifie la perspective ou déplace l’attention du public. Un mouvement sans fonction n’est qu’une énergie générique.",
      filmAnalysisQuestion: "Comment l’association d’une caméra retenue, de longues observations et de déplacements précis crée-t-elle une pression pratique et morale continue ?",
      practicePrompt: "Planifiez une scène en trois versions : caméra fixe, mouvement de dolly et caméra portée. Décrivez précisément quand le mouvement commence, ce qu’il suit ou révèle, et pourquoi une version est la plus juste.",
      checklist: [
        "Le mouvement démarre sur une impulsion dramatique concrète.",
        "Il est clair si la caméra pivote ou si elle change physiquement de position et de perspective.",
        "Le choix entre caméra fixe, stabilisée et portée est justifié.",
      ],
      quiz: {
        question: "Qu’est-ce qui distingue un mouvement de dolly d’un zoom ?",
        options: [
          "Un dolly ne peut avancer que vers l’avant.",
          "Un zoom change la perspective tandis qu’un dolly ne change que le cadrage.",
          "Un dolly déplace physiquement la caméra et change donc la perspective ; un zoom modifie la focale depuis la même position.",
          "Il n’existe aucune différence visible si le sujet conserve la même taille.",
        ],
        explanation: "Le déplacement physique de la caméra modifie la perspective et les rapports entre les plans de profondeur. Le zoom change l’angle de champ sans déplacer le point de vue.",
      },
    },
    focus_attention: {
      title: "Mise au point, attention et plan de prises de vues",
      summary: "Planifiez où doit se porter le regard dans l’image et n’utilisez un changement de mise au point que lorsque l’attention doit réellement se déplacer.",
      principle: "La mise au point est une priorité narrative. Un changement de point ou rack focus doit coïncider avec une découverte, une réaction ou un changement en profondeur et s’inscrire dans un plan de prises de vues réalisable.",
      filmAnalysisQuestion: "Comment le film maintient-il l’attention sur le garçon et son environnement grâce à des cadrages naturalistes, une photographie réactive et des plans de réaction précis ?",
      practicePrompt: "Écrivez un plan de cinq prises avec échelle de plan, position caméra, famille d’objectifs et priorité de mise au point. Au moins un plan doit déplacer le point entre deux plans de profondeur à un moment dramatique précis.",
      checklist: [
        "Chaque plan possède une fonction dramatique et un sujet de mise au point définis.",
        "Le changement de point correspond à une évolution concrète de l’information ou de la réaction.",
        "Le plan peut être testé concrètement avec la mise en place, les regards et l’optique choisie.",
      ],
      quiz: {
        question: "Quand un rack focus est-il le plus justifié ?",
        options: [
          "Lorsque le plan dure depuis plus de cinq secondes.",
          "Lorsque le changement de point transfère l’attention du public vers une nouvelle information dramatique située dans un autre plan de profondeur.",
          "Lorsque l’arrière-plan est visuellement séduisant.",
          "Lorsque la production veut éviter une coupe quelle qu’en soit la raison.",
        ],
        explanation: "Un changement de point marqué doit produire un changement clair d’information ou d’attention, et non simplement démontrer la technique.",
      },
    },
  },
  pt: {
    shot_size_composition: {
      title: "Escala do plano, composição e função dramática",
      summary: "Escolha quanto o público deve ver, o que deve dominar e quando um novo enquadramento altera realmente a cena.",
      principle: "A escala do plano não é apenas um tamanho. Distribui informação, proximidade e atenção e, por isso, deve ter uma função dramática concreta na evolução da cena.",
      filmAnalysisQuestion: "Como usa o filme a distância, o espaço vazio e grandes planos contidos para organizar a atenção da criança e a incerteza do público?",
      practicePrompt: "Planeie quatro planos do mesmo momento dramático: plano geral, plano de dois, plano médio aproximado e grande plano. Escreva que nova informação ou mudança emocional cada plano deve transmitir.",
      checklist: [
        "Cada escala de plano tem uma função dramática própria.",
        "A composição mostra claramente o que o público deve descobrir primeiro.",
        "O grande plano é usado perante uma mudança real, não automaticamente por haver diálogo importante.",
      ],
      quiz: {
        question: "Qual é a melhor justificação para passar a um grande plano?",
        options: [
          "A cena já permaneceu tempo suficiente no plano geral.",
          "O grande plano torna a produção mais cinematográfica.",
          "O plano revela uma descoberta decisiva que não pode ser lida com a mesma precisão num enquadramento mais aberto.",
          "Todas as cenas de diálogo precisam de pelo menos um grande plano.",
        ],
        explanation: "A escala do plano deve ser escolhida a partir do que o público precisa de experimentar ou compreender naquele momento, e não por uma regra mecânica de cobertura.",
      },
    },
    camera_position_perspective: {
      title: "Posição da câmara, perspetiva e espaço",
      summary: "Compreenda como distância, altura, direção e perspetiva ótica determinam a relação entre público, personagem e ambiente.",
      principle: "A posição física da câmara determina a perspetiva. O realizador deve distinguir entre deslocar a câmara e alterar a distância focal, porque estas escolhas moldam o espaço e as relações de formas diferentes.",
      filmAnalysisQuestion: "Como tornam as mudanças de posição da câmara e as camadas espaciais o conflito histórico pessoal, instável e fisicamente próximo?",
      practicePrompt: "Desenhe a mesma cena de duas personagens a partir de três posições de câmara: perto do eixo, perpendicular à relação e recuada no espaço. Descreva como cada posição altera poder, proximidade e fundo.",
      checklist: [
        "A posição da câmara é justificada pela relação do público com a ação.",
        "A diferença entre distância física e distância focal é descrita.",
        "O eixo de ação e a direção no ecrã são controlados ou quebrados deliberadamente.",
      ],
      quiz: {
        question: "O que acontece quando a câmara se aproxima do motivo e se usa uma objetiva mais grande-angular para manter aproximadamente o mesmo enquadramento?",
        options: [
          "A perspetiva fica idêntica porque o enquadramento é semelhante.",
          "O espaço e as relações de distância parecem mais expandidos, e as diferenças entre perto e longe tornam-se mais evidentes.",
          "Só muda a exposição.",
          "O fundo fica sempre mais nítido.",
        ],
        explanation: "A perspetiva é determinada pela posição da câmara. Uma objetiva mais grande-angular usada a menor distância acentua as relações perto–longe mesmo quando o tamanho do motivo permanece semelhante.",
      },
    },
    lenses_depth: {
      title: "Distância focal, escolha de objetiva e profundidade de campo",
      summary: "Escolha a ótica em função de como espaço, rostos, fundo e ação simultânea devem ser sentidos.",
      principle: "A escolha da objetiva faz parte da encenação. Distância focal, distância da câmara, abertura e foco devem ser planeados em conjunto, porque determinam tanto a perspetiva como quanto do espaço pode ser lido simultaneamente.",
      filmAnalysisQuestion: "Como usa o filme distâncias espaciais precisas, planos de foco e ótica contida para tornar simultaneamente legíveis o corpo, a instituição e o poder?",
      practicePrompt: "Crie duas versões óticas da mesma cena. A versão A usa grande profundidade de campo e ação simultânea em primeiro plano e no fundo. A versão B isola uma personagem com pouca profundidade de campo. Explique qual exprime melhor a intenção da cena.",
      checklist: [
        "A escolha de objetiva descreve uma experiência espacial, não apenas um valor em milímetros.",
        "A profundidade de campo está ligada à quantidade de informação que o público deve conseguir ler ao mesmo tempo.",
        "Distância da câmara, abertura e foco são considerados como um único sistema.",
      ],
      quiz: {
        question: "Qual é a principal diferença dramática entre foco seletivo e grande profundidade de campo?",
        options: [
          "O foco seletivo serve apenas para grandes planos e a grande profundidade de campo apenas para planos gerais.",
          "O foco seletivo limita a atenção legível a um plano mais estreito, enquanto a grande profundidade de campo pode manter vários planos de profundidade significativos em simultâneo.",
          "A grande profundidade de campo exige sempre uma objetiva zoom.",
          "O foco seletivo torna automaticamente a interpretação mais forte.",
        ],
        explanation: "A zona de nitidez controla que informação simultânea o público consegue ler. É uma escolha narrativa, não apenas um efeito estético.",
      },
    },
    camera_movement: {
      title: "Movimento de câmara e motivação",
      summary: "Decida quando a câmara deve rodar, deslocar-se, ser operada à mão ou ficar imóvel, e o que esse movimento altera para o público.",
      principle: "O movimento de câmara ganha significado quando responde à ação, revela espaço, altera a perspetiva ou desloca a atenção do público. Movimento sem função torna-se apenas energia genérica.",
      filmAnalysisQuestion: "Como cria a combinação de câmara contida, observações longas e deslocações precisas uma pressão prática e moral persistente?",
      practicePrompt: "Planeie uma cena em três versões: câmara estática, movimento de dolly e câmara à mão. Descreva exatamente quando o movimento começa, o que segue ou revela, e por que razão uma versão é a mais adequada.",
      checklist: [
        "O movimento começa com um impulso dramático concreto.",
        "É claro se a câmara roda ou se desloca fisicamente, alterando a perspetiva.",
        "A escolha entre linguagem estática, estabilizada e câmara à mão é justificada.",
      ],
      quiz: {
        question: "O que distingue um movimento de dolly de um zoom?",
        options: [
          "Um dolly só pode avançar.",
          "Um zoom altera a perspetiva, enquanto um dolly altera apenas o enquadramento.",
          "Um dolly altera a posição física da câmara e, por isso, a perspetiva; um zoom altera a distância focal a partir da mesma posição.",
          "Não há diferença visível se o motivo mantiver o mesmo tamanho.",
        ],
        explanation: "O deslocamento físico da câmara altera a perspetiva e a relação entre planos de profundidade. O zoom altera o ângulo de visão sem deslocar o ponto de vista.",
      },
    },
    focus_attention: {
      title: "Foco, atenção e plano de filmagem",
      summary: "Planeie onde deve estar a atenção do público dentro do enquadramento e use mudanças de foco apenas quando a atenção tiver realmente de se deslocar.",
      principle: "O foco é uma prioridade narrativa. Uma mudança de foco ou rack focus deve ser sincronizada com uma descoberta, reação ou alteração em profundidade e integrar um plano de filmagem executável.",
      filmAnalysisQuestion: "Como mantém o filme a atenção no rapaz e no seu ambiente através de enquadramentos naturalistas, fotografia responsiva e planos de reação precisos?",
      practicePrompt: "Escreva um plano de cinco planos com escala, posição da câmara, família de objetivas e prioridade de foco. Pelo menos um plano deve deslocar o foco entre dois planos de profundidade num momento dramático específico.",
      checklist: [
        "Cada plano tem uma função dramática e um motivo de foco definidos.",
        "A mudança de foco acontece perante uma alteração concreta de informação ou reação.",
        "O plano pode ser testado na prática com marcação, linhas de olhar e a ótica escolhida.",
      ],
      quiz: {
        question: "Quando é que um rack focus é mais justificado?",
        options: [
          "Quando o plano já dura há mais de cinco segundos.",
          "Quando a mudança de foco transfere a atenção do público para nova informação dramática noutro plano de profundidade.",
          "Quando o fundo é visualmente bonito.",
          "Quando a produção quer evitar um corte independentemente da razão.",
        ],
        explanation: "Uma mudança de foco marcada deve realizar uma alteração clara de informação ou atenção, não apenas demonstrar a técnica.",
      },
    },
  },
};

export const CAMERA_LESSON_COPY: Readonly<Record<FilmWorkLanguage, Readonly<Record<CameraLessonId, CameraLessonCopy>>>> = {
  ...localizedCopy,
  nb: canonicalNorwegian,
};

export function getCameraLessonCopy(language: FilmWorkLanguage, lesson: CameraCourseLesson): CameraLessonCopy {
  return CAMERA_LESSON_COPY[language][lesson.id as CameraLessonId] ?? toCopy(lesson);
}

function toCopy(lesson: CameraCourseLesson): CameraLessonCopy {
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
