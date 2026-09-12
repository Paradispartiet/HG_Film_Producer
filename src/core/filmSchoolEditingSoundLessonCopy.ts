import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { EDITING_SOUND_COURSE_LESSONS, type EditingSoundCourseLesson } from "./filmSchoolEditingSoundCourse.js";

export type EditingSoundLessonCopy = {
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

type EditingSoundLessonId =
  | "coverage_performance_rhythm"
  | "ellipsis_time_structure"
  | "sound_space_perspective"
  | "music_spotting_mix"
  | "lock_grade_delivery";

const canonicalNorwegian = Object.fromEntries(
  EDITING_SOUND_COURSE_LESSONS.map((lesson) => [lesson.id, toCopy(lesson)]),
) as Record<EditingSoundLessonId, EditingSoundLessonCopy>;

const localizedCopy: Record<Exclude<FilmWorkLanguage, "nb">, Record<EditingSoundLessonId, EditingSoundLessonCopy>> = {
  en: {
    coverage_performance_rhythm: {
      title: "Coverage, performance and editing rhythm",
      summary: "Build the scene from the takes and reactions that best express the action, not from an automatic coverage template.",
      principle: "Editing begins in the shooting plan. The director must capture enough material to shape performance and information, but every shot and every cut must still have a concrete dramatic function.",
      filmAnalysisQuestion: "How does the film protect the duration, pauses and reactions of the performances while editing makes the power shifts in the family conversations clear?",
      practicePrompt: "Create an editing plan for a two-person scene with a master, two singles and one reaction shot. Describe which performance moments must be protected, where you will delay a cut, and what determines the rhythm.",
      checklist: [
        "Every planned shot creates a clear editing option or dramatic value.",
        "The rhythm follows changes in action and listening, not merely alternating dialogue.",
        "Reactions and pauses are planned as active material.",
      ],
      quiz: {
        question: "What is the best reason to cut from the person speaking to the person listening?",
        options: [
          "The dialogue has lasted more than five seconds.",
          "The listener’s reaction changes how the audience understands the line or the relationship.",
          "Every dialogue scene must alternate evenly between faces.",
          "The editor needs to use every camera setup.",
        ],
        explanation: "A reaction cut is strongest when the reception of an action adds or changes dramatic information.",
      },
    },
    ellipsis_time_structure: {
      title: "Ellipsis, montage and cinematic time",
      summary: "Decide what the audience must see, what they can infer and how time jumps can make development clearer rather than more confusing.",
      principle: "Cinematic time is created through selection. Ellipsis, montage and cross-cutting must compress or juxtapose action without losing the emotional and causal orientation the audience needs.",
      filmAnalysisQuestion: "How does the film let major time jumps, repeated places and changing songs make historical change visible without explanatory bridge scenes?",
      practicePrompt: "Compress one week into a sequence of six shots. Mark which actions are omitted, what connects the time jumps, and how the audience can still understand the change in character or situation.",
      checklist: [
        "Every omitted stretch of time can be understood through clues before or after the cut.",
        "Transitions use action, form, sound or idea as a connecting element.",
        "The compression preserves the emotional development.",
      ],
      quiz: {
        question: "When does an ellipsis work best?",
        options: [
          "When it removes everything that is difficult to film.",
          "When the audience can reconstruct what was omitted and the jump sharpens the development of the scene or sequence.",
          "When every time jump is explained with a title card.",
          "When the film needs to become shorter regardless of continuity.",
        ],
        explanation: "A good ellipsis removes time or action but leaves enough cause, consequence and emotional orientation for the jump to become meaningful.",
      },
    },
    sound_space_perspective: {
      title: "Sound perspective, space and subjectivity",
      summary: "Build place and the audience’s listening position with production sound, ambience, room tone, distance and transitions between shots.",
      principle: "Sound is not merely support for the image. Perspective, room tone, ambience and sound that begins before or continues after a cut can control geography, expectation and subjective experience.",
      filmAnalysisQuestion: "How does the film use water, ventilation, distant traffic, reverberation and sudden silence to make ordinary spaces unstable and threatening?",
      practicePrompt: "Create a sound map for one scene with foreground, middle ground, background and off-screen sound. Plan at least one J-cut and one L-cut, and write when the sound perspective should become more subjective.",
      checklist: [
        "The place has a defined base sound and clear distance layers.",
        "The J- and L-cuts perform a transition in information or attention.",
        "Subjective sound has a precise dramatic start and end point.",
      ],
      quiz: {
        question: "What makes sound perspective dramatically legible?",
        options: [
          "Every sound has the same level and clarity.",
          "Distance, space, direction or subjectivity changes in line with the audience’s position in the scene.",
          "Background sound is removed completely.",
          "Dialogue is always louder than the rest of the mix.",
        ],
        explanation: "Sound perspective organizes where sounds appear to exist and how the audience is physically or subjectively positioned in relation to them.",
      },
    },
    music_spotting_mix: {
      title: "Music, sound bridges and final mix",
      summary: "Decide when music should begin, what it should do and how dialogue, effects, ambience and music are prioritized in the mix.",
      principle: "Music and mixing distribute attention over time. Diegetic and non-diegetic elements, spotting and sound bridges should have agreed functions so the music does not simply repeat the emotion already shown by the image.",
      filmAnalysisQuestion: "How are factory sound, trains and repeated work rhythms transformed into music, and how does the mix separate realistic space from musical fantasy?",
      practicePrompt: "Spot one three-minute scene. Mark exactly where the music begins and ends, whether it is diegetic, what it adds, and which sound elements should take priority through three important moments.",
      checklist: [
        "Every music cue has a defined dramatic function.",
        "The transition between diegetic and non-diegetic sound is planned.",
        "Mix priority changes deliberately between dialogue, body, space, effects and music.",
      ],
      quiz: {
        question: "What is a precise outcome of a spotting session?",
        options: [
          "A list of all the music the director likes.",
          "Agreed in- and out-points and a dramatic function for each music or sound cue.",
          "A finished final mix with no further work.",
          "A requirement for music under every emotional scene.",
        ],
        explanation: "Spotting makes placement, duration and function concrete before composition, sound work and mixing are finalized.",
      },
    },
    lock_grade_delivery: {
      title: "Picture lock, grading, master and delivery",
      summary: "Lock the film in the right order, verify that image and sound follow the same intention and quality-control the actual exhibition master.",
      principle: "Finishing is a creative and technical chain. Picture lock protects the timeline before final mix and grading, while colour space, output transform, DCP and quality control determine whether the film’s intention survives to exhibition.",
      filmAnalysisQuestion: "How does the film make the difference between observed spaces and video confessions legible through image format, texture, editing rhythm and sonic intimacy?",
      practicePrompt: "Create a finishing plan from approved fine cut to exhibition-ready master. Describe picture lock, sound deliveries, grading, output transform, DCP check and three concrete errors that quality control must catch.",
      checklist: [
        "The order between picture lock, final mix, grading and master is clear.",
        "Colour space and output transform are tied to the actual exhibition format.",
        "Quality control covers image, sound, subtitles and synchronization.",
      ],
      quiz: {
        question: "Why should picture lock come before final sound mix and conformed grading?",
        options: [
          "Because the editor is not allowed to see the finished film.",
          "Because changes in image order and duration can otherwise invalidate or misalign completed sound and colour work.",
          "Because a DCP can contain only one scene.",
          "Because grading determines the screenplay structure.",
        ],
        explanation: "Final mix, grading and delivery are built on a stable timeline. Later picture changes create new synchronization, conform and quality-control problems.",
      },
    },
  },
  fr: {
    coverage_performance_rhythm: {
      title: "Couverture, jeu et rythme de montage",
      summary: "Construisez la scène à partir des prises et des réactions qui expriment le mieux l’action, et non d’un modèle automatique de couverture.",
      principle: "Le montage commence dès le plan de tournage. La réalisation doit obtenir assez de matière pour façonner le jeu et l’information, mais chaque plan et chaque coupe doivent conserver une fonction dramatique concrète.",
      filmAnalysisQuestion: "Comment le film préserve-t-il la durée du jeu, les pauses et les réactions tout en rendant lisibles par le montage les déplacements de pouvoir dans les conversations familiales ?",
      practicePrompt: "Créez un plan de montage pour une scène à deux personnages avec un plan maître, deux plans individuels et un plan de réaction. Décrivez les moments de jeu à préserver, les endroits où retarder une coupe et ce qui détermine le rythme.",
      checklist: [
        "Chaque plan prévu offre une possibilité de montage claire ou une valeur dramatique.",
        "Le rythme suit les changements d’action et d’écoute, pas seulement l’alternance des répliques.",
        "Les réactions et les pauses sont prévues comme matière active.",
      ],
      quiz: {
        question: "Quelle est la meilleure raison de couper de la personne qui parle vers celle qui écoute ?",
        options: [
          "Le dialogue dure depuis plus de cinq secondes.",
          "La réaction de l’auditeur modifie la manière dont le public comprend la réplique ou la relation.",
          "Toute scène dialoguée doit alterner régulièrement entre les visages.",
          "Le monteur doit utiliser tous les axes caméra.",
        ],
        explanation: "Une coupe sur réaction est la plus forte lorsque la réception de l’action ajoute ou modifie une information dramatique.",
      },
    },
    ellipsis_time_structure: {
      title: "Ellipses, montage et temps cinématographique",
      summary: "Décidez ce que le public doit voir, ce qu’il peut déduire et comment les sauts temporels peuvent clarifier l’évolution au lieu de l’obscurcir.",
      principle: "Le temps cinématographique se construit par sélection. Ellipses, montage et montage alterné doivent compresser ou juxtaposer l’action sans perdre l’orientation émotionnelle et causale dont le public a besoin.",
      filmAnalysisQuestion: "Comment le film rend-il visible le changement historique grâce à de grands sauts temporels, des lieux répétés et des chansons changeantes sans scènes explicatives intermédiaires ?",
      practicePrompt: "Compressez une semaine en une séquence de six plans. Indiquez quelles actions sont omises, ce qui relie les sauts temporels et comment le public comprend encore l’évolution du personnage ou de la situation.",
      checklist: [
        "Chaque segment de temps omis peut être compris grâce à des indices avant ou après la coupe.",
        "Les transitions utilisent l’action, la forme, le son ou l’idée comme lien.",
        "La compression préserve l’évolution émotionnelle.",
      ],
      quiz: {
        question: "Quand une ellipse fonctionne-t-elle le mieux ?",
        options: [
          "Lorsqu’elle supprime tout ce qui est difficile à filmer.",
          "Lorsque le public peut reconstruire ce qui a été omis et que le saut renforce l’évolution de la scène ou de la séquence.",
          "Lorsque chaque saut temporel est expliqué par un carton.",
          "Lorsque le film doit être raccourci quelle que soit la continuité.",
        ],
        explanation: "Une bonne ellipse retire du temps ou de l’action mais laisse assez de cause, de conséquence et d’orientation émotionnelle pour rendre le saut significatif.",
      },
    },
    sound_space_perspective: {
      title: "Perspective sonore, espace et subjectivité",
      summary: "Construisez le lieu et la position d’écoute du public avec le son direct, les ambiances, le son de pièce, la distance et les transitions entre les plans.",
      principle: "Le son n’est pas seulement un soutien de l’image. Perspective, son de pièce, ambiance et sons qui commencent avant ou continuent après une coupe peuvent orienter la géographie, l’attente et l’expérience subjective.",
      filmAnalysisQuestion: "Comment le film utilise-t-il l’eau, la ventilation, la circulation lointaine, la réverbération et les silences brusques pour rendre des espaces ordinaires instables et menaçants ?",
      practicePrompt: "Créez une carte sonore d’une scène avec premier plan, plan intermédiaire, arrière-plan et sons hors champ. Planifiez au moins une J-cut et une L-cut, puis indiquez quand la perspective sonore doit devenir plus subjective.",
      checklist: [
        "Le lieu possède un son de base défini et des plans de distance clairs.",
        "Les J- et L-cuts réalisent une transition d’information ou d’attention.",
        "Le son subjectif possède un point de départ et de fin dramatique précis.",
      ],
      quiz: {
        question: "Qu’est-ce qui rend la perspective sonore dramatiquement lisible ?",
        options: [
          "Tous les sons ont le même niveau et la même clarté.",
          "La distance, l’espace, la direction ou la subjectivité changent selon la place du public dans la scène.",
          "Le son d’arrière-plan est entièrement supprimé.",
          "Le dialogue est toujours plus fort que le reste du mixage.",
        ],
        explanation: "La perspective sonore organise l’endroit où les sons semblent exister et la position physique ou subjective du public par rapport à eux.",
      },
    },
    music_spotting_mix: {
      title: "Musique, ponts sonores et mixage final",
      summary: "Décidez quand la musique doit commencer, ce qu’elle doit accomplir et comment dialogue, effets, ambiances et musique sont hiérarchisés dans le mixage.",
      principle: "Musique et mixage distribuent l’attention dans le temps. Éléments diégétiques et non diégétiques, spotting et ponts sonores doivent avoir des fonctions convenues afin que la musique ne se contente pas de répéter l’émotion déjà montrée par l’image.",
      filmAnalysisQuestion: "Comment les sons d’usine, les trains et les rythmes répétitifs du travail sont-ils transformés en musique, et comment le mixage distingue-t-il l’espace réaliste de la fantaisie musicale ?",
      practicePrompt: "Faites le spotting d’une scène de trois minutes. Indiquez précisément où la musique commence et se termine, si elle est diégétique, ce qu’elle apporte et quels éléments sonores doivent être prioritaires à trois moments importants.",
      checklist: [
        "Chaque entrée musicale possède une fonction dramatique définie.",
        "La transition entre son diégétique et non diégétique est planifiée.",
        "La priorité du mixage change volontairement entre dialogue, corps, espace, effets et musique.",
      ],
      quiz: {
        question: "Quel est un résultat précis d’une spotting session ?",
        options: [
          "Une liste de toutes les musiques que le réalisateur aime.",
          "Des points d’entrée et de sortie convenus et une fonction dramatique pour chaque intervention musicale ou sonore.",
          "Un mixage final terminé sans travail supplémentaire.",
          "L’obligation de mettre de la musique sous toutes les scènes émotionnelles.",
        ],
        explanation: "Le spotting rend concrets le placement, la durée et la fonction avant que la composition, le travail sonore et le mixage soient finalisés.",
      },
    },
    lock_grade_delivery: {
      title: "Verrouillage image, étalonnage, master et livraison",
      summary: "Verrouillez le film dans le bon ordre, vérifiez que l’image et le son suivent la même intention et contrôlez la qualité du master réellement destiné à la projection.",
      principle: "La finition est une chaîne créative et technique. Le picture lock protège la timeline avant le mixage final et l’étalonnage, tandis que l’espace colorimétrique, l’output transform, le DCP et le contrôle qualité déterminent si l’intention du film survit jusqu’à la projection.",
      filmAnalysisQuestion: "Comment le film rend-il lisible la différence entre les espaces observés et les confessions vidéo grâce au format d’image, à la texture, au rythme de montage et à la proximité sonore ?",
      practicePrompt: "Créez un plan de finition depuis le montage fin approuvé jusqu’au master prêt pour la projection. Décrivez le picture lock, les livraisons son, l’étalonnage, l’output transform, le contrôle DCP et trois erreurs concrètes que le contrôle qualité doit détecter.",
      checklist: [
        "L’ordre entre picture lock, mixage final, étalonnage et master est clair.",
        "L’espace colorimétrique et l’output transform sont liés au format réel de projection.",
        "Le contrôle qualité couvre image, son, sous-titres et synchronisation.",
      ],
      quiz: {
        question: "Pourquoi le picture lock doit-il précéder le mixage son final et l’étalonnage conformé ?",
        options: [
          "Parce que le monteur n’a pas le droit de voir le film terminé.",
          "Parce que des changements d’ordre ou de durée des images peuvent sinon invalider ou désynchroniser un travail son et couleur déjà terminé.",
          "Parce qu’un DCP ne peut contenir qu’une seule scène.",
          "Parce que l’étalonnage détermine la structure du scénario.",
        ],
        explanation: "Le mixage final, l’étalonnage et les livraisons reposent sur une timeline stable. Des changements image tardifs créent de nouveaux problèmes de synchronisation, de conformation et de contrôle qualité.",
      },
    },
  },
  pt: {
    coverage_performance_rhythm: {
      title: "Cobertura, interpretação e ritmo de montagem",
      summary: "Construa a cena a partir das tomadas e reações que melhor exprimem a ação, não a partir de um modelo automático de cobertura.",
      principle: "A montagem começa já no plano de rodagem. A realização deve captar material suficiente para moldar interpretação e informação, mas cada plano e cada corte devem continuar a ter uma função dramática concreta.",
      filmAnalysisQuestion: "Como protege o filme a duração das interpretações, as pausas e as reações enquanto a montagem torna claras as mudanças de poder nas conversas familiares?",
      practicePrompt: "Crie um plano de montagem para uma cena a duas personagens com master, dois singles e um plano de reação. Descreva que momentos de interpretação devem ser protegidos, onde vai adiar um corte e o que determina o ritmo.",
      checklist: [
        "Cada plano previsto oferece uma possibilidade clara de montagem ou valor dramático.",
        "O ritmo segue mudanças de ação e escuta, não apenas a alternância de falas.",
        "Reações e pausas são planeadas como material ativo.",
      ],
      quiz: {
        question: "Qual é a melhor razão para cortar de quem fala para quem escuta?",
        options: [
          "O diálogo dura há mais de cinco segundos.",
          "A reação de quem escuta altera a forma como o público entende a fala ou a relação.",
          "Todas as cenas de diálogo devem alternar regularmente entre rostos.",
          "O montador precisa de usar todas as posições de câmara.",
        ],
        explanation: "Um corte para reação é mais forte quando a receção da ação acrescenta ou altera informação dramática.",
      },
    },
    ellipsis_time_structure: {
      title: "Elipses, montagem e tempo cinematográfico",
      summary: "Decida o que o público precisa de ver, o que pode inferir e como saltos temporais podem tornar a evolução mais clara em vez de mais confusa.",
      principle: "O tempo cinematográfico é criado pela seleção. Elipses, montagem e montagem paralela devem comprimir ou justapor ação sem perder a orientação emocional e causal de que o público precisa.",
      filmAnalysisQuestion: "Como deixa o filme grandes saltos temporais, lugares repetidos e canções em mudança tornar visível a transformação histórica sem cenas explicativas intermédias?",
      practicePrompt: "Comprima uma semana numa sequência de seis planos. Marque que ações são omitidas, o que liga os saltos temporais e como o público continua a compreender a mudança da personagem ou da situação.",
      checklist: [
        "Cada intervalo de tempo omitido pode ser compreendido através de pistas antes ou depois do corte.",
        "As transições usam ação, forma, som ou ideia como elemento de ligação.",
        "A compressão preserva o desenvolvimento emocional.",
      ],
      quiz: {
        question: "Quando funciona melhor uma elipse?",
        options: [
          "Quando remove tudo o que é difícil de filmar.",
          "Quando o público consegue reconstruir o que foi omitido e o salto intensifica o desenvolvimento da cena ou sequência.",
          "Quando cada salto temporal é explicado por um cartão de texto.",
          "Quando o filme precisa de ficar mais curto independentemente da continuidade.",
        ],
        explanation: "Uma boa elipse remove tempo ou ação, mas deixa causa, consequência e orientação emocional suficientes para tornar o salto significativo.",
      },
    },
    sound_space_perspective: {
      title: "Perspetiva sonora, espaço e subjetividade",
      summary: "Construa o lugar e a posição de escuta do público com som direto, ambiente, room tone, distância e transições entre planos.",
      principle: "O som não é apenas apoio à imagem. Perspetiva, room tone, ambiente e som que começa antes ou continua depois de um corte podem orientar geografia, expectativa e experiência subjetiva.",
      filmAnalysisQuestion: "Como usa o filme água, ventilação, trânsito distante, reverberação e silêncio súbito para tornar espaços comuns instáveis e ameaçadores?",
      practicePrompt: "Crie um mapa sonoro para uma cena com primeiro plano, plano intermédio, fundo e som fora de campo. Planeie pelo menos um J-cut e um L-cut e escreva quando a perspetiva sonora deve tornar-se mais subjetiva.",
      checklist: [
        "O lugar tem um som-base definido e planos de distância claros.",
        "Os J- e L-cuts realizam uma transição de informação ou atenção.",
        "O som subjetivo tem um ponto dramático preciso de início e fim.",
      ],
      quiz: {
        question: "O que torna a perspetiva sonora dramaticamente legível?",
        options: [
          "Todos os sons têm o mesmo nível e clareza.",
          "Distância, espaço, direção ou subjetividade mudam de acordo com a posição do público na cena.",
          "O som de fundo é completamente removido.",
          "O diálogo está sempre mais alto do que o resto da mistura.",
        ],
        explanation: "A perspetiva sonora organiza onde os sons parecem existir e como o público é colocado física ou subjetivamente em relação a eles.",
      },
    },
    music_spotting_mix: {
      title: "Música, pontes sonoras e mistura final",
      summary: "Decida quando a música deve começar, o que deve fazer e como diálogo, efeitos, ambiente e música são priorizados na mistura.",
      principle: "Música e mistura distribuem atenção ao longo do tempo. Elementos diegéticos e não diegéticos, spotting e pontes sonoras devem ter funções acordadas para que a música não se limite a repetir a emoção já mostrada pela imagem.",
      filmAnalysisQuestion: "Como são transformados sons de fábrica, comboios e ritmos repetidos de trabalho em música, e como separa a mistura o espaço realista da fantasia musical?",
      practicePrompt: "Faça o spotting de uma cena de três minutos. Indique exatamente onde a música começa e termina, se é diegética, o que acrescenta e que elementos sonoros devem ter prioridade em três momentos importantes.",
      checklist: [
        "Cada entrada musical tem uma função dramática definida.",
        "A transição entre som diegético e não diegético é planeada.",
        "A prioridade da mistura muda deliberadamente entre diálogo, corpo, espaço, efeitos e música.",
      ],
      quiz: {
        question: "Qual é um resultado preciso de uma spotting session?",
        options: [
          "Uma lista de toda a música de que o realizador gosta.",
          "Pontos de entrada e saída acordados e uma função dramática para cada intervenção musical ou sonora.",
          "Uma mistura final concluída sem trabalho adicional.",
          "Uma exigência de música em todas as cenas emocionais.",
        ],
        explanation: "O spotting torna concretos colocação, duração e função antes de composição, trabalho de som e mistura serem finalizados.",
      },
    },
    lock_grade_delivery: {
      title: "Bloqueio de imagem, correção de cor, master e entrega",
      summary: "Bloqueie o filme pela ordem correta, confirme que imagem e som seguem a mesma intenção e faça controlo de qualidade do master real de exibição.",
      principle: "A finalização é uma cadeia criativa e técnica. O picture lock protege a timeline antes da mistura final e da correção de cor, enquanto espaço de cor, output transform, DCP e controlo de qualidade determinam se a intenção do filme sobrevive até à exibição.",
      filmAnalysisQuestion: "Como torna o filme legível a diferença entre espaços observados e confissões em vídeo através de formato de imagem, textura, ritmo de montagem e proximidade sonora?",
      practicePrompt: "Crie um plano de finalização desde o fine cut aprovado até ao master pronto para exibição. Descreva picture lock, entregas de som, correção de cor, output transform, controlo de DCP e três erros concretos que o controlo de qualidade deve detetar.",
      checklist: [
        "A ordem entre picture lock, mistura final, correção de cor e master é clara.",
        "O espaço de cor e o output transform estão ligados ao formato real de exibição.",
        "O controlo de qualidade cobre imagem, som, legendas e sincronização.",
      ],
      quiz: {
        question: "Porque deve o picture lock acontecer antes da mistura final de som e da correção de cor conformada?",
        options: [
          "Porque o montador não pode ver o filme terminado.",
          "Porque alterações à ordem e duração da imagem podem tornar inválido ou desalinhado trabalho de som e cor já concluído.",
          "Porque um DCP só pode conter uma cena.",
          "Porque a correção de cor determina a estrutura do argumento.",
        ],
        explanation: "Mistura final, correção de cor e entregas assentam numa timeline estável. Alterações tardias à imagem criam novos problemas de sincronização, conform e controlo de qualidade.",
      },
    },
  },
};

export const EDITING_SOUND_LESSON_COPY: Readonly<Record<FilmWorkLanguage, Readonly<Record<EditingSoundLessonId, EditingSoundLessonCopy>>>> = {
  ...localizedCopy,
  nb: canonicalNorwegian,
};

export function getEditingSoundLessonCopy(language: FilmWorkLanguage, lesson: EditingSoundCourseLesson): EditingSoundLessonCopy {
  return EDITING_SOUND_LESSON_COPY[language][lesson.id as EditingSoundLessonId] ?? toCopy(lesson);
}

function toCopy(lesson: EditingSoundCourseLesson): EditingSoundLessonCopy {
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
