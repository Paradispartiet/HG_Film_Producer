import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { LIGHTING_DESIGN_COURSE_LESSONS, type LightingDesignCourseLesson } from "./filmSchoolLightingDesignCourse.js";

export type LightingDesignLessonCopy = {
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

type LightingDesignLessonId =
  | "source_direction_quality"
  | "contrast_exposure"
  | "temperature_palette"
  | "world_materials_space"
  | "continuity_color_pipeline";

const canonicalNorwegian = Object.fromEntries(
  LIGHTING_DESIGN_COURSE_LESSONS.map((lesson) => [lesson.id, toCopy(lesson)]),
) as Record<LightingDesignLessonId, LightingDesignLessonCopy>;

const localizedCopy: Record<Exclude<FilmWorkLanguage, "nb">, Record<LightingDesignLessonId, LightingDesignLessonCopy>> = {
  en: {
    source_direction_quality: {
      title: "Source, direction and quality of light",
      summary: "Decide where the light appears to come from, how it shapes the body and why the source exists in the world of the scene.",
      principle: "Lighting becomes dramatically clear when key direction, hardness and visible or implied sources grow from place, time and action instead of being added as generic atmosphere.",
      filmAnalysisQuestion: "How does the film use darkness, limited sources and gradual legibility to make the forest both a physical space and a psychological experience?",
      practicePrompt: "Choose one night or interior scene. Define the key source, one visible practical, the light direction and hardness. Write what the audience must be able to read and what should deliberately remain hidden.",
      checklist: [
        "The key light has a credible source inside or outside the scene.",
        "Hard or soft light is chosen according to action and surfaces.",
        "Darkness and backlight control information without making the action unreadable.",
      ],
      quiz: {
        question: "What makes lighting motivated?",
        options: [
          "Every lamp is visible in the frame.",
          "The light appears to come from credible sources and supports the action of the scene.",
          "The light is realistically measured in lux.",
          "The scene uses only one lamp.",
        ],
        explanation: "Motivated light can be strongly amplified and shaped, but its direction and character should still feel grounded in the world of the scene.",
      },
    },
    contrast_exposure: {
      title: "Contrast, exposure and tonal range",
      summary: "Prioritize which tones must be retained, how deep the shadows may fall and how highlights should behave.",
      principle: "Exposure is a creative priority, not merely correct light level. Director and cinematographer must decide which faces, windows, practicals and dark surfaces carry the scene’s most important information.",
      filmAnalysisQuestion: "How do controlled bright interiors, sterile surfaces and gradual visual isolation make apparent safety feel disturbing?",
      practicePrompt: "Create an exposure plan for an interior with a face, a window and a practical lamp. Write what must retain detail, what may fall toward black or white, and how fill or negative fill shapes the contrast.",
      checklist: [
        "The plan states which tonal regions matter most to the story.",
        "Fill or negative fill is used to control contrast, not merely brightness.",
        "Highlights and shadows are considered against the camera’s dynamic range.",
      ],
      quiz: {
        question: "Which is the most precise exposure decision?",
        options: [
          "Everything in the frame should always sit in the middle of the meter.",
          "The face is prioritized while the window is allowed to run brighter because pressure inside the room matters more than exterior detail.",
          "Highlights must never clip under any circumstances.",
          "The shadows must be raised to the same level as the key light.",
        ],
        explanation: "Exposure means deliberately placing the film’s most important information inside or outside the available tonal range.",
      },
    },
    temperature_palette: {
      title: "Colour temperature, white balance and palette",
      summary: "Build a colour system that binds lighting, costume, landscape and emotional development together.",
      principle: "A palette is a system of dominant, absent and accent colours. Colour temperature, white balance and display transform must be planned so that the system survives from capture to the final image.",
      filmAnalysisQuestion: "How do white fabrics, skin tones, landscape, food and natural elements work together as a historical and cultural colour system?",
      practicePrompt: "Define three dominant colours, one accent colour and one colour to hold back. Connect them to lighting, costume and environment, and describe how white balance and the viewing LUT will preserve the intention.",
      checklist: [
        "The palette describes both colours that are used and colours that are avoided.",
        "Lighting, costume and environment follow the same system.",
        "White balance and LUT are tools for the intention, not random after-effects.",
      ],
      quiz: {
        question: "What distinguishes a colour palette from a list of attractive colours?",
        options: [
          "A palette always uses complementary colours.",
          "A palette distributes colours according to dramatic function, development and department.",
          "A palette must contain at least six colours.",
          "A palette is decided only during grading.",
        ],
        explanation: "A colour system connects repetition, absence and accents to the film’s development and must be shared by cinematography, design, costume and post-production.",
      },
    },
    world_materials_space: {
      title: "Production design, materials and space",
      summary: "Shape the environment so architecture, furniture, texture and props express the character’s room for action.",
      principle: "Production design is not background. Spatial geography, materials, decoration and active props determine how characters can move, what the camera can see and which conflicts the environment makes physical.",
      filmAnalysisQuestion: "How do corridors, wallpaper, heat, furniture and repeated hotel geometry make writing work and industrial pressure physical?",
      practicePrompt: "Draw one room from above and choose three materials, two pieces of furniture and one hero prop. Describe how each choice affects blocking, camera position, sound and the character’s access to the exit.",
      checklist: [
        "The room creates concrete possibilities and obstacles for action.",
        "Materials and decoration support the film’s tone and response to light.",
        "The important prop has a function, a position and continuity requirements.",
      ],
      quiz: {
        question: "When does production design work dramatically?",
        options: [
          "When the room contains many details.",
          "When environment, materials and objects influence action, relationships and the camera’s possibilities.",
          "When every set is built in a studio.",
          "When the design is historically accurate regardless of the scene’s purpose.",
        ],
        explanation: "Detail and accuracy can matter, but the dramatic value of design lies in how the physical world acts on the scene.",
      },
    },
    continuity_color_pipeline: {
      title: "Visual continuity from capture to grading",
      summary: "Preserve or deliberately break lighting, costume, design and colour systematically across shooting order and post-production.",
      principle: "Visual continuity does not mean everything must always stay identical. It means changes in lighting, palette, costume, texture and look are documented and dramatic, so shooting and grading build the same development.",
      filmAnalysisQuestion: "How does the film separate and connect realistic footage and musical fantasies through different image, colour and movement systems?",
      practicePrompt: "Plan a scene shot over two days with one deliberate look change. Create continuity notes for light direction, exposure, costume, makeup, key colours and LUT before and after the change.",
      checklist: [
        "Every element that must match between shooting days is documented.",
        "The deliberate look change has a clear dramatic starting point.",
        "Capture and post-production use the same colour space and display intention.",
      ],
      quiz: {
        question: "What is good visual continuity when a film contains a deliberate style change?",
        options: [
          "Making both sections completely identical in grading.",
          "Documenting what must match and what must change so the transition is controlled and readable.",
          "Allowing each department to choose its own transition.",
          "Avoiding LUTs and colour management.",
        ],
        explanation: "Continuity protects both coherence and planned breaks by making changes traceable through every department and post-production.",
      },
    },
  },
  fr: {
    source_direction_quality: {
      title: "Source, direction et qualité de la lumière",
      summary: "Déterminez d’où la lumière semble provenir, comment elle modèle le corps et pourquoi cette source existe dans le monde de la scène.",
      principle: "L’éclairage devient dramatiquement lisible lorsque la direction principale, la dureté et les sources visibles ou suggérées découlent du lieu, du temps et de l’action plutôt que d’une ambiance générique ajoutée.",
      filmAnalysisQuestion: "Comment le film utilise-t-il l’obscurité, des sources limitées et une lisibilité progressive pour faire de la forêt à la fois un espace physique et une expérience psychique ?",
      practicePrompt: "Choisissez une scène de nuit ou un intérieur. Définissez la source principale, une source pratique visible, la direction et la dureté de la lumière. Écrivez ce que le public doit pouvoir lire et ce qui doit volontairement rester caché.",
      checklist: [
        "La lumière principale possède une source crédible dans ou hors de la scène.",
        "La lumière dure ou douce est choisie selon l’action et les surfaces.",
        "L’obscurité et le contre-jour contrôlent l’information sans rendre l’action illisible.",
      ],
      quiz: {
        question: "Qu’est-ce qui rend un éclairage motivé ?",
        options: [
          "Toutes les lampes sont visibles dans le cadre.",
          "La lumière semble venir de sources crédibles et soutient l’action de la scène.",
          "La lumière est mesurée de manière réaliste en lux.",
          "La scène n’utilise qu’une seule lampe.",
        ],
        explanation: "Une lumière motivée peut être fortement amplifiée et façonnée, mais sa direction et son caractère doivent toujours sembler fondés dans le monde de la scène.",
      },
    },
    contrast_exposure: {
      title: "Contraste, exposition et étendue tonale",
      summary: "Priorisez les tonalités à préserver, la profondeur possible des ombres et le comportement des hautes lumières.",
      principle: "L’exposition est une priorité créative, pas seulement une quantité de lumière correcte. Réalisation et image doivent décider quels visages, fenêtres, sources pratiques et surfaces sombres portent les informations essentielles de la scène.",
      filmAnalysisQuestion: "Comment des intérieurs lumineux contrôlés, des surfaces stériles et un isolement visuel progressif rendent-ils inquiétante une sécurité apparente ?",
      practicePrompt: "Créez un plan d’exposition pour un intérieur avec un visage, une fenêtre et une lampe pratique. Écrivez ce qui doit conserver du détail, ce qui peut tendre vers le noir ou le blanc et comment le fill ou le negative fill façonne le contraste.",
      checklist: [
        "Le plan indique quelles zones tonales sont les plus importantes pour le récit.",
        "Le fill ou le negative fill sert à contrôler le contraste, pas seulement la luminosité.",
        "Les hautes lumières et les ombres sont évaluées par rapport à la dynamique du capteur.",
      ],
      quiz: {
        question: "Quelle décision d’exposition est la plus précise ?",
        options: [
          "Tout dans l’image doit toujours se situer au milieu de la mesure.",
          "Le visage est prioritaire tandis que la fenêtre peut être plus claire parce que la pression dans la pièce importe davantage que le détail extérieur.",
          "Aucune haute lumière ne doit jamais être écrêtée.",
          "Les ombres doivent être remontées au même niveau que la lumière principale.",
        ],
        explanation: "Exposer consiste à placer délibérément les informations les plus importantes du film à l’intérieur ou à l’extérieur de l’étendue tonale disponible.",
      },
    },
    temperature_palette: {
      title: "Température de couleur, balance des blancs et palette",
      summary: "Construisez un système chromatique qui relie lumière, costumes, paysage et évolution émotionnelle.",
      principle: "Une palette est un système de couleurs dominantes, absentes et d’accent. Température de couleur, balance des blancs et transformation d’affichage doivent être planifiées pour que ce système survive de la prise de vues à l’image finale.",
      filmAnalysisQuestion: "Comment les tissus blancs, les carnations, le paysage, la nourriture et les éléments naturels fonctionnent-ils ensemble comme un système chromatique historique et culturel ?",
      practicePrompt: "Définissez trois couleurs dominantes, une couleur d’accent et une couleur à retenir. Reliez-les à la lumière, aux costumes et au décor, puis décrivez comment la balance des blancs et la LUT d’affichage préserveront l’intention.",
      checklist: [
        "La palette décrit à la fois les couleurs utilisées et celles qui sont évitées.",
        "Lumière, costumes et environnement suivent le même système.",
        "La balance des blancs et la LUT servent l’intention au lieu d’être des effets ajoutés au hasard.",
      ],
      quiz: {
        question: "Qu’est-ce qui distingue une palette chromatique d’une liste de jolies couleurs ?",
        options: [
          "La palette utilise toujours des couleurs complémentaires.",
          "La palette répartit les couleurs selon leur fonction dramatique, leur évolution et les départements concernés.",
          "La palette doit contenir au moins six couleurs.",
          "La palette est décidée uniquement pendant l’étalonnage.",
        ],
        explanation: "Un système chromatique relie répétition, absence et accents à l’évolution du film et doit être partagé par l’image, les décors, les costumes et la postproduction.",
      },
    },
    world_materials_space: {
      title: "Décors, matériaux et espace",
      summary: "Façonnez l’environnement afin que l’architecture, le mobilier, les textures et les accessoires expriment la marge d’action du personnage.",
      principle: "Les décors ne sont pas un arrière-plan. Géographie de l’espace, matériaux, décoration et accessoires actifs déterminent comment les personnages peuvent bouger, ce que la caméra peut voir et quels conflits le lieu rend physiques.",
      filmAnalysisQuestion: "Comment les couloirs, le papier peint, la chaleur, le mobilier et la géométrie répétée de l’hôtel rendent-ils physiques le travail d’écriture et la pression industrielle ?",
      practicePrompt: "Dessinez une pièce vue du dessus et choisissez trois matériaux, deux meubles et un accessoire principal. Décrivez comment chaque choix influence le blocking, la position caméra, le son et l’accès du personnage à la sortie.",
      checklist: [
        "L’espace crée des possibilités d’action et des obstacles concrets.",
        "Les matériaux et la décoration soutiennent le ton du film et sa réponse à la lumière.",
        "L’accessoire important possède une fonction, une place et des besoins de continuité.",
      ],
      quiz: {
        question: "Quand les décors fonctionnent-ils dramatiquement ?",
        options: [
          "Quand la pièce contient beaucoup de détails.",
          "Quand l’environnement, les matériaux et les objets influencent l’action, les relations et les possibilités de la caméra.",
          "Quand tous les décors sont construits en studio.",
          "Quand le design est historiquement exact quel que soit l’objectif de la scène.",
        ],
        explanation: "Le détail et l’exactitude peuvent compter, mais la valeur dramatique du design réside dans la manière dont le monde physique agit sur la scène.",
      },
    },
    continuity_color_pipeline: {
      title: "Continuité visuelle de la prise de vues à l’étalonnage",
      summary: "Préservez ou rompez volontairement lumière, costumes, décors et couleur de manière systématique malgré l’ordre de tournage et la postproduction.",
      principle: "La continuité visuelle ne signifie pas que tout doit toujours rester identique. Elle signifie que les changements de lumière, palette, costumes, texture et look sont documentés et dramatiques afin que tournage et étalonnage construisent la même évolution.",
      filmAnalysisQuestion: "Comment le film sépare-t-il et relie-t-il les prises réalistes et les fantasmes musicaux grâce à des systèmes distincts d’image, de couleur et de mouvement ?",
      practicePrompt: "Planifiez une scène tournée sur deux jours avec un changement de look volontaire. Rédigez des notes de continuité pour la direction de lumière, l’exposition, les costumes, le maquillage, les couleurs importantes et la LUT avant et après le changement.",
      checklist: [
        "Tous les éléments qui doivent correspondre entre les jours de tournage sont documentés.",
        "Le changement de look volontaire possède un point de départ dramatique clair.",
        "Le tournage et la postproduction utilisent le même espace colorimétrique et la même intention d’affichage.",
      ],
      quiz: {
        question: "Qu’est-ce qu’une bonne continuité visuelle lorsque le film comporte un changement de style volontaire ?",
        options: [
          "Rendre les deux parties complètement identiques à l’étalonnage.",
          "Documenter ce qui doit correspondre et ce qui doit changer afin que la transition soit contrôlée et lisible.",
          "Laisser chaque département choisir sa propre transition.",
          "Éviter les LUT et la gestion des couleurs.",
        ],
        explanation: "La continuité protège à la fois la cohérence et les ruptures prévues en rendant les changements traçables dans tous les départements et en postproduction.",
      },
    },
  },
  pt: {
    source_direction_quality: {
      title: "Fonte, direção e qualidade da luz",
      summary: "Defina de onde a luz parece vir, como modela o corpo e por que razão essa fonte existe no mundo da cena.",
      principle: "A iluminação torna-se dramaticamente clara quando a direção principal, a dureza e as fontes visíveis ou sugeridas nascem do lugar, do tempo e da ação, em vez de serem acrescentadas como atmosfera genérica.",
      filmAnalysisQuestion: "Como usa o filme escuridão, fontes limitadas e legibilidade gradual para tornar a floresta simultaneamente um espaço físico e uma experiência psicológica?",
      practicePrompt: "Escolha uma cena noturna ou interior. Defina a fonte principal, uma luz prática visível, a direção e a dureza da luz. Escreva o que o público deve conseguir ler e o que deve permanecer deliberadamente escondido.",
      checklist: [
        "A luz principal tem uma fonte credível dentro ou fora da cena.",
        "A luz dura ou suave é escolhida segundo a ação e as superfícies.",
        "A escuridão e o contraluz controlam a informação sem tornar a ação ilegível.",
      ],
      quiz: {
        question: "O que torna uma iluminação motivada?",
        options: [
          "Todas as lâmpadas estão visíveis no enquadramento.",
          "A luz parece vir de fontes credíveis e apoia a ação da cena.",
          "A luz é medida de forma realista em lux.",
          "A cena usa apenas uma lâmpada.",
        ],
        explanation: "A luz motivada pode ser fortemente reforçada e moldada, mas a sua direção e carácter devem continuar a parecer fundamentados no mundo da cena.",
      },
    },
    contrast_exposure: {
      title: "Contraste, exposição e gama tonal",
      summary: "Priorize que tons devem ser preservados, quão profundas podem ficar as sombras e como devem comportar-se as altas luzes.",
      principle: "A exposição é uma prioridade criativa, não apenas uma quantidade correta de luz. Realização e fotografia devem decidir que rostos, janelas, fontes práticas e superfícies escuras transportam a informação mais importante da cena.",
      filmAnalysisQuestion: "Como tornam interiores luminosos controlados, superfícies estéreis e isolamento visual progressivo uma aparente segurança inquietante?",
      practicePrompt: "Crie um plano de exposição para um interior com um rosto, uma janela e uma lâmpada prática. Escreva o que deve conservar detalhe, o que pode aproximar-se do preto ou do branco e como fill ou preenchimento negativo molda o contraste.",
      checklist: [
        "O plano indica que zonas tonais são mais importantes para a história.",
        "Fill ou preenchimento negativo é usado para controlar o contraste, não apenas o brilho.",
        "Altas luzes e sombras são avaliadas face à gama dinâmica da câmara.",
      ],
      quiz: {
        question: "Qual é a decisão de exposição mais precisa?",
        options: [
          "Tudo no enquadramento deve ficar sempre no centro do fotómetro.",
          "O rosto é prioritário, enquanto a janela pode ficar mais clara porque a pressão dentro do espaço importa mais do que o detalhe exterior.",
          "Nenhuma alta luz pode alguma vez recortar.",
          "As sombras devem ser elevadas ao mesmo nível da luz principal.",
        ],
        explanation: "Expor significa colocar deliberadamente a informação mais importante do filme dentro ou fora da gama tonal disponível.",
      },
    },
    temperature_palette: {
      title: "Temperatura de cor, balanço de brancos e paleta",
      summary: "Construa um sistema cromático que ligue iluminação, figurino, paisagem e desenvolvimento emocional.",
      principle: "Uma paleta é um sistema de cores dominantes, ausentes e de acento. Temperatura de cor, balanço de brancos e transformação de visualização devem ser planeados para que o sistema sobreviva da captação à imagem final.",
      filmAnalysisQuestion: "Como funcionam em conjunto tecidos brancos, tons de pele, paisagem, comida e elementos naturais como um sistema cromático histórico e cultural?",
      practicePrompt: "Defina três cores dominantes, uma cor de acento e uma cor a conter. Ligue-as à luz, ao figurino e ao ambiente e descreva como o balanço de brancos e a LUT de visualização vão preservar a intenção.",
      checklist: [
        "A paleta descreve tanto as cores usadas como as cores evitadas.",
        "Iluminação, figurino e ambiente seguem o mesmo sistema.",
        "Balanço de brancos e LUT são ferramentas da intenção, não efeitos posteriores aleatórios.",
      ],
      quiz: {
        question: "O que distingue uma paleta cromática de uma lista de cores bonitas?",
        options: [
          "A paleta usa sempre cores complementares.",
          "A paleta distribui as cores segundo função dramática, desenvolvimento e departamento.",
          "A paleta tem de conter pelo menos seis cores.",
          "A paleta é decidida apenas durante a correção de cor.",
        ],
        explanation: "Um sistema cromático liga repetição, ausência e acentos ao desenvolvimento do filme e deve ser partilhado por fotografia, design, figurino e pós-produção.",
      },
    },
    world_materials_space: {
      title: "Design de produção, materiais e espaço",
      summary: "Molde o ambiente para que arquitetura, mobiliário, textura e adereços expressem a margem de ação da personagem.",
      principle: "O design de produção não é fundo. Geografia espacial, materiais, decoração e adereços ativos determinam como as personagens se podem mover, o que a câmara pode ver e que conflitos o ambiente torna físicos.",
      filmAnalysisQuestion: "Como tornam corredores, papel de parede, calor, mobiliário e a geometria repetida do hotel físicos o trabalho de escrita e a pressão da indústria?",
      practicePrompt: "Desenhe uma divisão vista de cima e escolha três materiais, duas peças de mobiliário e um adereço principal. Descreva como cada escolha afeta marcação, posição de câmara, som e acesso da personagem à saída.",
      checklist: [
        "O espaço cria possibilidades de ação e obstáculos concretos.",
        "Materiais e decoração apoiam o tom do filme e a resposta à luz.",
        "O adereço importante tem função, posição e necessidades de continuidade.",
      ],
      quiz: {
        question: "Quando funciona dramaticamente o design de produção?",
        options: [
          "Quando o espaço contém muitos detalhes.",
          "Quando ambiente, materiais e objetos influenciam ação, relações e possibilidades da câmara.",
          "Quando todos os cenários são construídos em estúdio.",
          "Quando o design é historicamente correto independentemente do objetivo da cena.",
        ],
        explanation: "Detalhe e rigor podem ser importantes, mas o valor dramático do design está em como o mundo físico atua sobre a cena.",
      },
    },
    continuity_color_pipeline: {
      title: "Continuidade visual da captação à correção de cor",
      summary: "Preserve ou rompa deliberadamente luz, figurino, cenografia e cor de forma sistemática através da ordem de rodagem e da pós-produção.",
      principle: "Continuidade visual não significa que tudo tenha de permanecer sempre igual. Significa que mudanças de luz, paleta, figurino, textura e look são documentadas e dramáticas, para que rodagem e correção de cor construam a mesma evolução.",
      filmAnalysisQuestion: "Como separa e liga o filme imagem realista e fantasias musicais através de sistemas diferentes de imagem, cor e movimento?",
      practicePrompt: "Planeie uma cena filmada ao longo de dois dias com uma mudança de look deliberada. Crie notas de continuidade para direção da luz, exposição, figurino, maquilhagem, cores importantes e LUT antes e depois da mudança.",
      checklist: [
        "Todos os elementos que devem corresponder entre dias de rodagem estão documentados.",
        "A mudança deliberada de look tem um ponto de partida dramático claro.",
        "Captação e pós-produção usam o mesmo espaço de cor e a mesma intenção de visualização.",
      ],
      quiz: {
        question: "O que é boa continuidade visual quando o filme tem uma mudança de estilo deliberada?",
        options: [
          "Tornar as duas partes completamente iguais na correção de cor.",
          "Documentar o que deve corresponder e o que deve mudar, para que a transição seja controlada e legível.",
          "Deixar cada departamento escolher a sua própria transição.",
          "Evitar LUTs e gestão de cor.",
        ],
        explanation: "A continuidade protege tanto a coerência como as ruturas planeadas ao tornar as mudanças rastreáveis em todos os departamentos e na pós-produção.",
      },
    },
  },
};

export const LIGHTING_DESIGN_LESSON_COPY: Readonly<Record<FilmWorkLanguage, Readonly<Record<LightingDesignLessonId, LightingDesignLessonCopy>>>> = {
  ...localizedCopy,
  nb: canonicalNorwegian,
};

export function getLightingDesignLessonCopy(language: FilmWorkLanguage, lesson: LightingDesignCourseLesson): LightingDesignLessonCopy {
  return LIGHTING_DESIGN_LESSON_COPY[language][lesson.id as LightingDesignLessonId] ?? toCopy(lesson);
}

function toCopy(lesson: LightingDesignCourseLesson): LightingDesignLessonCopy {
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
