import type { FilmWorkLanguage } from "../../core/filmWorkLanguage.js";

/**
 * Eleven pre-existing Production Cases receive evidence-backed craft decisions.
 *
 * These are OPTIONAL learning exercises, not replacements for their canonical
 * six-mission Production Cases. They do not mutate progress, unlock gameplay,
 * or change the research-pending verification status.
 */
export type WorkshopText = Readonly<Record<FilmWorkLanguage, string>>;
export type WorkshopSource = {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly publisher: string;
};
export type WorkshopOption = {
  readonly id: string;
  readonly label: WorkshopText;
};
export type WorkshopQuestion = {
  readonly id: string;
  readonly area: "camera" | "sound" | "animation" | "research";
  readonly prompt: WorkshopText;
  readonly options: readonly [WorkshopOption, WorkshopOption, WorkshopOption];
  readonly bestSupportedOptionId: string;
  readonly explanation: WorkshopText;
  readonly sourceIds: readonly string[];
};
export type SourceBackedCaseWorkshop = {
  readonly scenarioId: string;
  readonly status: "editorial_learning_exercise_not_case_verified";
  readonly introduction: WorkshopText;
  readonly sources: readonly WorkshopSource[];
  readonly questions: readonly WorkshopQuestion[];
};
const t = (en: string, nb: string, fr: string, pt: string): WorkshopText =>
  ({ en, nb, fr, pt });

const workshops: readonly SourceBackedCaseWorkshop[] = [
  {
    scenarioId: "scenario_the_celebration_1998",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t(
      "Festen (1998) broke with polished studio conventions through the Dogme 95 production method. Choose how documented craft decisions change the film rather than treating the manifesto as a perfect technical record.",
      "Festen (1998) brøt med polert studiofilm gjennom Dogme 95. Velg hvordan dokumenterte håndverksgrep endrer filmen, uten å behandle manifestet som en feilfri teknisk produksjonsrapport.",
      "Festen (1998) rompt avec le cinéma de studio poli grâce au Dogme 95. Choisissez des procédés documentés sans prendre le manifeste pour une fiche technique infaillible.",
      "Festen (1998) rompe com o cinema de estúdio polido através do Dogma 95. Escolha métodos documentados sem tomar o manifesto por um relatório técnico infalível."
    ),
    sources: [
      { id: "criterion", title: "The Celebration", publisher: "The Criterion Collection", url: "https://www.criterion.com/films/28059-the-celebration" },
      { id: "criterion-camera", title: "10 Things I Learned: The Celebration", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/7673-10-things-i-learned-the-celebration" },
      { id: "bfi-dogme", title: "Where to begin with Dogme 95", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-with-dogme-95" },
      { id: "bfi-digital", title: "Early years of digital cinema", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/attack-zeros-ones-early-years-digital-cinema-told-david-lynch-miranda-july-michael-mann-more" },
    ],
    questions: [
      {
        id: "festen-camera", area: "camera",
        prompt: t("Which image system serves the family's escalating dinner confrontation?",
          "Hvilket bildesystem passer til den stadig mer intense familiekonflikten?",
          "Quel dispositif d'image sert la confrontation familiale grandissante ?",
          "Que sistema de imagem serve a crescente confrontação familiar?"),
        options: [
          { id: "handheld-dv", label: t("Mobile handheld digital video near the actors, with available-light texture",
            "Bevegelig, håndholdt digitalvideo nær skuespillerne, med eksisterende lys",
            "Vidéo numérique portée, proche des acteurs, avec la lumière disponible",
            "Vídeo digital à mão, perto dos atores, com luz existente") },
          { id: "studio-crane", label: t("Controlled crane shots and high-key studio lighting",
            "Kontrollerte kranbevegelser og jevnt studiolys",
            "Travellings de grue et éclairage de studio uniforme",
            "Movimentos de grua e iluminação uniforme de estúdio") },
          { id: "cg-rebuild", label: t("Re-create the family gathering entirely with digital characters",
            "Gjenskap familieselskapet med dataanimerte figurer",
            "Recréer le repas entièrement avec des personnages numériques",
            "Recriar a reunião familiar com personagens digitais") },
        ],
        bestSupportedOptionId: "handheld-dv",
        explanation: t("Criterion and BFI document Anthony Dod Mantle's intimate handheld digital image and the use of available light. The scene remains staged drama, not unmediated reality.",
          "Criterion og BFI dokumenterer Anthony Dod Mantles nære, håndholdte digitalfoto og eksisterende lys. Scenen er fortsatt iscenesatt drama, ikke uformidlet virkelighet.",
          "Criterion et le BFI documentent la vidéo numérique portée d’Anthony Dod Mantle et la lumière disponible. Cela reste une fiction mise en scène.",
          "Criterion e BFI documentam a câmara digital à mão de Anthony Dod Mantle e a luz disponível. Continua a ser uma ficção encenada."),
        sourceIds: ["criterion", "bfi-dogme"]
      },
      {
        id: "festen-sound", area: "sound",
        prompt: t("How does the sound reinforce the struggle at the dinner table?",
          "Hvordan forsterker lyden maktkampen rundt middagsbordet?",
          "Comment le son renforce-t-il la lutte autour de la table ?",
          "Como é que o som reforça a disputa à mesa?"),
        options: [
          { id: "voices-room", label: t("Keep clashing voices and noisy room ambience audible",
            "Behold stemmer som snakker i munnen på hverandre, og tydelig romlyd",
            "Garder les voix qui se chevauchent et les bruits de la salle",
            "Manter vozes sobrepostas e o ruído da sala") },
          { id: "grand-score", label: t("Replace the conversation with a continuous orchestral score",
            "Erstatt samtalene med sammenhengende orkestermusikk",
            "Remplacer les voix par une musique orchestrale continue",
            "Substituir as vozes por música orquestral contínua") },
          { id: "silent-captions", label: t("Remove all location sound and use only silent intertitles",
            "Fjern all opptakslyd og bruk bare stumfilmtekster",
            "Supprimer tout son direct et n'utiliser que des intertitres",
            "Remover todo o som direto e usar apenas intertítulos") },
        ],
        bestSupportedOptionId: "voices-room",
        explanation: t("Criterion describes diegetic, cacophonous sound as part of Festen's emotional force. This is a craft choice, not a claim that all microphone details are independently known.",
          "Criterion beskriver kaotisk lyd fra filmens eget miljø som en del av virkningen. Det er et dokumentert uttrykk, ikke en påstand om at alle mikrofondetaljer er kjent.",
          "Criterion décrit la cacophonie diégétique comme un élément de la force du film, sans pour autant établir chaque détail de microphone.",
          "Criterion descreve a cacofonia diegética como parte da força do filme, sem estabelecer todos os pormenores dos microfones."),
        sourceIds: ["criterion"]
      },
      {
        id: "festen-camera-uncertainty", area: "research",
        prompt: t("Criterion and a BFI interview name different Sony models. What should a responsible production lesson claim?",
          "Criterion og et BFI-intervju oppgir ulike Sony-modeller. Hva bør en ansvarlig leksjon slå fast?",
          "Criterion et un entretien du BFI citent des modèles Sony différents. Que peut affirmer une leçon responsable ?",
          "Criterion e uma entrevista do BFI citam modelos Sony diferentes. O que deve afirmar uma lição responsável?"),
        options: [
          { id: "model-uncertain", label: t("Teach handheld digital-video production and mark the exact camera model unresolved",
            "Forklar håndholdt digitalvideo og merk den eksakte kameramodellen som uavklart",
            "Expliquer la vidéo numérique portée et laisser le modèle précis non résolu",
            "Explicar o vídeo digital à mão e assinalar o modelo exato como não resolvido") },
          { id: "pc7-certain", label: t("State that Sony PC7 is conclusively established by every source",
            "Slå fast at alle kilder entydig bekrefter Sony PC7",
            "Affirmer que toutes les sources confirment le Sony PC7",
            "Afirmar que todas as fontes confirmam o Sony PC7") },
          { id: "pc3-certain", label: t("State that Sony PC3 is conclusively established by every source",
            "Slå fast at alle kilder entydig bekrefter Sony PC3",
            "Affirmer que toutes les sources confirment le Sony PC3",
            "Afirmar que todas as fontes confirmam o Sony PC3") },
        ],
        bestSupportedOptionId: "model-uncertain",
        explanation: t("Criterion's production feature names PC7; BFI's digital-cinema oral history names PC3. The contradiction must remain visible until better primary production evidence is found.",
          "Criterion oppgir PC7, mens BFIs muntlige digitalfilmhistorie oppgir PC3. Motsetningen må være synlig til bedre originaldokumentasjon finnes.",
          "Criterion indique PC7, tandis que l'histoire orale du BFI cite PC3. Il faut signaler la contradiction tant qu'une source de production primaire ne tranche pas.",
          "Criterion indica PC7, enquanto a história oral do BFI cita PC3. A divergência deve permanecer visível até surgir documentação primária melhor."),
        sourceIds: ["criterion-camera", "bfi-digital"]
      },
    ]
  },
  {
    scenarioId: "scenario_waltz_with_bashir_2008",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t(
      "Waltz with Bashir (2008) is an animated documentary about fragmented recollection. This exercise examines the production method, not a final verdict on historical events.",
      "Waltz with Bashir (2008) er en animert dokumentar om fragmenterte minner. Oppgavene gjelder produksjonsmetoden, ikke en endelig dom over historiske hendelser.",
      "Waltz with Bashir (2008) est un documentaire animé sur la mémoire fragmentée. L'exercice porte sur la fabrication, pas sur un verdict historique.",
      "Waltz with Bashir (2008) é um documentário animado sobre memórias fragmentadas. O exercício analisa a produção, não um veredicto histórico."
    ),
    sources: [
      { id: "folman", title: "Interview with Ari Folman", publisher: "Sony Pictures Classics", url: "https://www.sonyclassics.com/waltzwithbashir/aboutAri.html" },
      { id: "cannes", title: "Waltz with Bashir: 2008 press conference", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/en/2008/press-conference-waltz-with-bashir/" },
    ],
    questions: [
      {
        id: "bashir-animation", area: "animation",
        prompt: t("How was the film's animated documentary image developed?",
          "Hvordan ble dokumentarens animerte bilder utviklet?",
          "Comment les images animées du documentaire ont-elles été créées ?",
          "Como foram criadas as imagens animadas do documentário?"),
        options: [
          { id: "drawn-storyboards", label: t("Recorded interviews were edited, storyboarded and redrawn with cut-out, traditional and 3D techniques",
            "Opptak av intervjuer ble klippet, tegnet som storyboard og animert med utklipp, tradisjonell animasjon og 3D",
            "Les entretiens ont été montés puis redessinés avec des storyboards, des découpages, de l’animation classique et 3D",
            "As entrevistas foram montadas e redesenhadas com storyboards, recortes, animação tradicional e 3D") },
          { id: "rotoscoped", label: t("Every drawing was traced over filmed live-action actors using rotoscoping",
            "Alle tegningene ble rotoskopert direkte fra filmopptak av skuespillere",
            "Chaque dessin a été décalqué sur des acteurs filmés par rotoscopie",
            "Cada desenho foi decalcado sobre atores filmados por rotoscopia") },
          { id: "motion-capture", label: t("The film was made entirely from photorealistic motion-capture avatars",
            "Filmen ble skapt utelukkende med fotorealistiske bevegelsesfangede figurer",
            "Le film a été fait uniquement avec des avatars photoréalistes capturés en mouvement",
            "O filme foi feito apenas com avatares fotorrealistas de captura de movimento") },
        ],
        bestSupportedOptionId: "drawn-storyboards",
        explanation: t("Ari Folman explicitly says the film was not rotoscoped. Yoni Goodman and David Polonsky helped turn recorded interviews and storyboards into drawn animation.",
          "Ari Folman sier uttrykkelig at filmen ikke er rotoskopert. Yoni Goodman og David Polonsky videreutviklet intervjuer og storyboard til tegnet animasjon.",
          "Ari Folman précise que le film n'est pas rotoscopié. Yoni Goodman et David Polonsky ont transformé entretiens et storyboards en animation dessinée.",
          "Ari Folman afirma que o filme não foi rotoscopiado. Yoni Goodman e David Polonsky converteram entrevistas e storyboards em animação desenhada."),
        sourceIds: ["folman", "cannes"]
      },
      {
        id: "bashir-research", area: "research",
        prompt: t("What is the correct boundary between an interview about a production and historical proof?",
          "Hvor går grensen mellom et intervju om filmproduksjonen og historisk bevis?",
          "Quelle est la limite entre un témoignage sur la production et une preuve historique ?",
          "Qual é o limite entre um testemunho sobre a produção e uma prova histórica?"),
        options: [
          { id: "separate-evidence", label: t("Use the director's testimony for his method; verify historical events with independent records",
            "Bruk regissørens forklaring om metoden; etterprøv historiske hendelser med uavhengige kilder",
            "Utiliser le réalisateur comme source sur sa méthode ; vérifier l'histoire indépendamment",
            "Usar o realizador como fonte do método; verificar a história de forma independente") },
          { id: "memory-proof", label: t("Treat the film's reconstructed memories as objective proof of every event",
            "Behandle filmens rekonstruerte minner som objektivt bevis for alle hendelser",
            "Traiter les souvenirs reconstruits comme des preuves objectives de tout",
            "Tratar as memórias reconstruídas como prova objetiva de tudo") },
          { id: "no-historical-context", label: t("Avoid any historical checking because animation is automatically fiction",
            "Unngå historisk kildekontroll fordi animasjon automatisk er fiksjon",
            "Éviter toute vérification puisque l'animation serait forcément fictive",
            "Evitar verificação histórica porque animação seria sempre ficção") },
        ],
        bestSupportedOptionId: "separate-evidence",
        explanation: t("The interview is primary evidence of Folman's intended workflow and his perspective, not independent proof of responsibility for the Sabra and Shatila massacre. Historical findings require separate sources.",
          "Intervjuet er primærkilde til Folmans arbeidsmetode og perspektiv, ikke uavhengig bevis om ansvaret for massakren i Sabra og Shatila. Historiske konklusjoner krever egne kilder.",
          "L'entretien renseigne sur la méthode et le point de vue de Folman, non sur la responsabilité historique du massacre de Sabra et Chatila. Celle-ci exige d'autres sources.",
          "A entrevista documenta o método e a perspetiva de Folman, não a responsabilidade histórica pelo massacre de Sabra e Shatila, que exige fontes independentes."),
        sourceIds: ["folman"]
      },
      {
        id: "bashir-voice", area: "sound",
        prompt: t("Which workflow best preserves testimony while building an animated film?",
          "Hvilken arbeidsflyt bevarer vitneutsagn samtidig som man bygger en animasjonsfilm?",
          "Quelle méthode conserve les témoignages dans un film d'animation ?",
          "Que processo preserva testemunhos na criação de um filme animado?"),
        options: [
          { id: "edit-voices-first", label: t("Record and edit interview voices first, then develop the animation around them",
            "Spill inn og klipp intervjuene først; bygg deretter animasjonen rundt stemmene",
            "Enregistrer et monter les voix avant de construire l'animation",
            "Gravar e montar as vozes antes de construir a animação") },
          { id: "silent-first", label: t("Finish a silent cartoon first and invent the witnesses afterwards",
            "Fullfør en stum tegnefilm først og finn på vitnene etterpå",
            "Finir un dessin animé muet puis inventer les témoins",
            "Concluir um desenho animado mudo e inventar testemunhas depois") },
          { id: "random-dialogue", label: t("Replace the interviews with improvised fictional dialogue without attribution",
            "Erstatt intervjuene med improvisert fiksjonsdialog uten kildeangivelse",
            "Remplacer les entretiens par des dialogues fictifs improvisés non attribués",
            "Substituir as entrevistas por diálogos fictícios improvisados sem atribuição") },
        ],
        bestSupportedOptionId: "edit-voices-first",
        explanation: t("Folman's production account describes a video edit of interviews preceding the storyboard and illustrated animation. This is a documented sequence, not a universal rule for animation.",
          "Folman beskriver en videoklipp av intervjuene før storyboard og tegnet animasjon. Det er dokumentert arbeidsrekkefølge, ikke en allmenn regel.",
          "Folman décrit un montage vidéo des entretiens avant les storyboards et l'animation. Ce procédé n'est pas universel.",
          "Folman descreve a montagem das entrevistas antes dos storyboards e da animação. Não é uma regra universal."),
        sourceIds: ["folman"]
      }
    ]
  },
  {
    scenarioId: "scenario_tangerine_2015",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t(
      "Tangerine (2015) used small cameras without abandoning professional sound, research or collaboration. Identify the real production choices rather than treating a smartphone as a complete crew.",
      "Tangerine (2015) brukte små kameraer, men også profesjonell lyd, forarbeid og samarbeid. Finn de faktiske produksjonsvalgene i stedet for å behandle mobilen som et helt filmteam.",
      "Tangerine (2015) utilise de petits appareils sans renoncer au son professionnel, à la recherche ou à la collaboration. Repérez les véritables choix de production.",
      "Tangerine (2015) usou pequenas câmaras sem dispensar som profissional, pesquisa e colaboração. Identifique as escolhas reais de produção."
    ),
    sources: [
      { id: "academy-camera", title: "Sean Baker's Tangerine iPhone", publisher: "Academy Museum of Motion Pictures", url: "https://www.academymuseum.org/en/collection/sean-bakers-tangerine-iphone" },
      { id: "baker-interview", title: "Sean Baker and Chris Bergoch discuss Tangerine", publisher: "Selling Your Screenplay", url: "https://www.sellingyourscreenplay.com/podcast-transcripts/sys-podcast-episode-110-sean-baker-chris-bergoch-talk-about-their-sundance-comedy-drama-tangerine-transcript/" },
      { id: "film-independent", title: "Sean Baker on Tangerine's production", publisher: "Film Independent", url: "https://www.filmindependent.org/blog/directors-close-up-recap-tangerine-filmmakers-phone-in-the-years-most-innovative-indie/" }
    ],
    questions: [
      {
        id: "tangerine-camera", area: "camera",
        prompt: t("Which camera system did the crew actually use?",
          "Hvilket kamerasystem brukte filmteamet?",
          "Quel dispositif de prise de vues a été utilisé ?",
          "Que equipamento de imagem foi usado?"),
        options: [
          { id: "iphone-lens", label: t("iPhone 5s, FiLMiC Pro, an anamorphic lens adapter and stabilization",
            "iPhone 5s, FiLMiC Pro, anamorfisk linseadapter og stabilisering",
            "iPhone 5s, FiLMiC Pro, adaptateur anamorphique et stabilisation",
            "iPhone 5s, FiLMiC Pro, adaptador anamórfico e estabilização") },
          { id: "celluloid", label: t("35mm photochemical camera with studio cranes throughout",
            "35 mm filmkamera og studiokraner gjennom hele filmen",
            "Caméra argentique 35 mm et grues de studio partout",
            "Câmara de película de 35 mm e gruas de estúdio") },
          { id: "unmodified-phone", label: t("An unmodified smartphone using only its default camera app",
            "En uendret mobil med bare standardkameraappen",
            "Un téléphone non modifié avec sa seule application native",
            "Um telemóvel sem acessórios com a aplicação de origem") },
        ],
        bestSupportedOptionId: "iphone-lens",
        explanation: t("The Academy Museum preserves an actual production iPhone 5s with the Moondog Labs anamorphic adapter. Baker describes FiLMiC Pro and separate stabilization.",
          "Academy Museum oppbevarer en ekte iPhone 5s fra opptaket, med anamorfisk adapter fra Moondog Labs. Baker beskriver FiLMiC Pro og egen stabilisering.",
          "L'Academy Museum conserve un iPhone 5s du tournage avec un adaptateur Moondog Labs. Baker décrit FiLMiC Pro et la stabilisation.",
          "O Academy Museum guarda um iPhone 5s usado na rodagem com adaptador Moondog Labs. Baker descreve FiLMiC Pro e estabilização."),
        sourceIds: ["academy-camera", "baker-interview"]
      },
      {
        id: "tangerine-sound", area: "sound",
        prompt: t("What supplied the movie's production dialogue and location sound?",
          "Hva ble brukt til å ta opp dialog og miljølyd?",
          "Comment les dialogues et les ambiances ont-ils été enregistrés ?",
          "Como foram gravados os diálogos e o som ambiente?"),
        options: [
          { id: "pro-sound", label: t("A separate professional sound-recording setup, synchronized in post",
            "Et eget profesjonelt lydopptak som ble synkronisert i etterarbeidet",
            "Un dispositif sonore professionnel distinct, synchronisé en postproduction",
            "Um sistema de som profissional separado, sincronizado na pós-produção") },
          { id: "phone-mic", label: t("Only the phone's built-in microphone throughout",
            "Bare mobilens innebygde mikrofon gjennom hele filmen",
            "Uniquement le micro intégré au téléphone",
            "Apenas o microfone integrado no telemóvel") },
          { id: "silent-dub", label: t("No location audio; every voice was invented as dubbing later",
            "Ingen opptakslyd; all dialog ble funnet på som etterdubbing",
            "Aucun son direct ; tous les dialogues furent inventés au doublage",
            "Sem som direto; todas as falas foram inventadas na dobragem") },
        ],
        bestSupportedOptionId: "pro-sound",
        explanation: t("Baker and Film Independent describe professional location recording, independent of the iPhone image. Small-camera filmmaking still depends on a dedicated sound department.",
          "Baker og Film Independent beskriver profesjonelle lydopptak, uavhengig av mobilbildene. En liten kamerarigg erstatter ikke en lydavdeling.",
          "Baker et Film Independent décrivent un son professionnel séparé de l'image iPhone. Une petite caméra ne remplace pas le travail du son.",
          "Baker e Film Independent descrevem som profissional separado da imagem do iPhone. Uma câmara pequena não substitui o trabalho do som."),
        sourceIds: ["baker-interview", "film-independent"]
      },
      {
        id: "tangerine-research", area: "research",
        prompt: t("How should the film's social world inform casting and the screenplay?",
          "Hvordan bør miljøet filmen skildrer, prege casting og manus?",
          "Comment le milieu social du film doit-il guider l'écriture et le casting ?",
          "Como deve o contexto social influenciar o argumento e o elenco?"),
        options: [
          { id: "collaborative-research", label: t("Research with people from the neighborhood and collaborate on a scripted fiction",
            "Gjør forarbeid med folk fra miljøet og skap en fiksjonsfortelling i samarbeid",
            "Faire des recherches avec les habitants et construire ensemble une fiction écrite",
            "Pesquisar com pessoas da comunidade e colaborar numa ficção escrita") },
          { id: "secret-shoot", label: t("Secretly film vulnerable people and present their lives as unconsented documentary proof",
            "Film sårbare mennesker i hemmelighet og framstill livene deres som dokumentariske bevis",
            "Filmer des personnes vulnérables en secret et présenter cela comme preuve documentaire",
            "Filmar pessoas vulneráveis às escondidas e apresentar como prova documental") },
          { id: "no-writing", label: t("Skip the writing and all participant discussion because the camera is inexpensive",
            "Dropp både manus og samtaler med medvirkende fordi kameraet er billig",
            "Renoncer à l'écriture et aux échanges car la caméra coûte peu",
            "Dispensar o argumento e o diálogo com participantes porque a câmara é barata") },
        ],
        bestSupportedOptionId: "collaborative-research",
        explanation: t("Baker and co-writer Chris Bergoch describe extended research and collaboration, rather than a movie improvised solely because a cheap camera was available. Participants' agency and safety matter.",
          "Baker og medforfatter Chris Bergoch beskriver omfattende forarbeid og samarbeid, ikke en film improvisert bare fordi kameraet var billig. Medvirkendes medbestemmelse og trygghet er viktige.",
          "Baker et son coscénariste Chris Bergoch décrivent un long travail d'enquête et de collaboration. Le consentement et la sécurité des participants comptent.",
          "Baker e o coargumentista Chris Bergoch descrevem pesquisa e colaboração prolongadas. A participação e a segurança das pessoas importam."),
        sourceIds: ["baker-interview", "film-independent"]
      }
    ]
  },
  {
    scenarioId: "scenario_cure_1997",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t(
      "Cure (1997) turns ordinary space, sustained performance and withheld explanation into psychological dread. Explore how Kiyoshi Kurosawa's documented choices shape the film without resolving its ambiguity.",
      "Cure (1997) skaper psykologisk uro gjennom hverdagslige rom, sammenhengende skuespill og tilbakeholdt forklaring. Utforsk Kiyoshi Kurosawas dokumenterte valg uten å oppløse filmens tvetydighet.",
      "Cure (1997) crée une inquiétude psychologique par les espaces ordinaires, le jeu continu et les explications retenues. Explorez les choix documentés de Kiyoshi Kurosawa sans dissiper son ambiguïté.",
      "Cure (1997) cria inquietação psicológica através dos espaços comuns, da interpretação contínua e das explicações omitidas. Explore as escolhas documentadas de Kiyoshi Kurosawa sem eliminar a ambiguidade."
    ),
    sources: [
      { id: "tiff-qa", title: "Kurosawa, Yakusho Discuss the Monsters Within Us [Cure: Q&A]", publisher: "Tokyo International Film Festival", url: "https://2018.tiff-jp.net/news/en/?p=14792" },
      { id: "criterion-credits", title: "Cure (1997): Cast and credits", publisher: "The Criterion Collection", url: "https://www.criterion.com/films/27666-cure" },
      { id: "fujiwara", title: "Cure: Erasure — Chris Fujiwara", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/7959-cure-erasure" },
    ],
    questions: [
      {
        id: "cure-duration", area: "camera",
        prompt: t("How can a conversation change emotional direction without an explanatory cut?",
          "Hvordan kan en samtale endre følelsesmessig retning uten et forklarende klipp?",
          "Comment une conversation peut-elle changer de direction émotionnelle sans coupe explicative ?",
          "Como pode uma conversa mudar de direção emocional sem um corte explicativo?"),
        options: [
          { id: "sustained-performance", label: t("Hold a sustained medium shot and let the actor's performance shift within it",
            "Behold en lengre halvtotal og la skuespillerens uttrykk endre seg i bildet",
            "Maintenir un plan moyen prolongé et laisser le jeu évoluer dans le cadre",
            "Manter um plano médio prolongado e deixar a interpretação evoluir no enquadramento") },
          { id: "constant-reaction-cuts", label: t("Cut to a separate reaction close-up after every spoken phrase",
            "Klipp til et eget reaksjonsnærbilde etter hver replikk",
            "Couper vers un gros plan de réaction après chaque réplique",
            "Cortar para um grande plano de reação após cada fala") },
          { id: "expository-narrator", label: t("Have a narrator explain every change in the character's feelings",
            "La en forteller forklare hver endring i figurens følelser",
            "Faire expliquer chaque changement émotionnel par un narrateur",
            "Usar um narrador para explicar cada mudança emocional da personagem") },
        ],
        bestSupportedOptionId: "sustained-performance",
        explanation: t("At the 2018 Tokyo festival Q&A, Kurosawa connected his economical film shooting to his V-cinema experience. The discussion highlights long takes in which Yakusho can change his expression without a cut. This is a craft approach, not a universal ban on editing.",
          "Under festivalsamtalen i Tokyo i 2018 knyttet Kurosawa sin økonomiske filmproduksjon til erfaringen fra V-cinema. Samtalen fremhever lange tagninger der Yakusho endrer uttrykk uten klipp. Dette er et håndverksgrep, ikke et generelt klippeforbud.",
          "Lors de la rencontre de Tokyo en 2018, Kurosawa a relié son économie de tournage à son expérience du V-cinema. Les plans longs permettent à Yakusho de changer d'expression sans coupe. Ce procédé n'interdit pas le montage.",
          "Na conversa de Tóquio em 2018, Kurosawa associou a economia de rodagem à experiência no V-cinema. Os planos longos permitem a Yakusho mudar de expressão sem corte. Esta opção não proíbe a montagem."),
        sourceIds: ["tiff-qa", "criterion-credits"]
      },
      {
        id: "cure-space", area: "camera",
        prompt: t("How can a domestic scene express distance between people who occupy the same room?",
          "Hvordan kan en hjemmescene uttrykke avstand mellom personer som befinner seg i samme rom?",
          "Comment une scène domestique peut-elle exprimer la distance entre deux personnes dans la même pièce ?",
          "Como pode uma cena doméstica expressar distância entre pessoas no mesmo espaço?"),
        options: [
          { id: "isolated-closeups", label: t("Show only alternating faces and remove the shared room from view",
            "Vis bare vekslende ansiktsnærbilder og fjern det felles rommet fra bildet",
            "Alterner uniquement les visages en supprimant la pièce commune du cadre",
            "Alternar apenas rostos e retirar do enquadramento o espaço comum") },
          { id: "foreground-background", label: t("Compose foreground and background actions within a shared frame",
            "Komponer handling i forgrunn og bakgrunn innenfor samme bilde",
            "Composer les actions du premier plan et de l'arrière-plan dans un cadre commun",
            "Compor ações em primeiro plano e no fundo dentro do mesmo enquadramento") },
          { id: "caption-emotions", label: t("Insert titles explaining exactly what each person feels",
            "Legg inn tekstplakater som forklarer nøyaktig hva hver person føler",
            "Insérer des cartons expliquant précisément les sentiments de chacun",
            "Inserir cartões que expliquem exatamente o que cada pessoa sente") },
        ],
        bestSupportedOptionId: "foreground-background",
        explanation: t("Chris Fujiwara discusses the apartment composition with Takabe in front and Fumie moving behind him. The shared frame can make their separation visible. This is critical analysis of the finished image, not a claim about the exact lens or lighting setup.",
          "Chris Fujiwara analyserer leilighetsbildet med Takabe i forgrunnen og Fumie i bevegelse bak ham. Det felles bildet kan synliggjøre avstanden mellom dem. Dette er analyse av den ferdige filmen, ikke dokumentasjon av objektiv eller lysrigg.",
          "Chris Fujiwara analyse le plan de l'appartement, Takabe devant et Fumie en mouvement derrière lui. Le cadre partagé rend leur séparation perceptible. C'est une analyse du film achevé, non une preuve du dispositif optique ou lumineux.",
          "Chris Fujiwara analisa o plano do apartamento, com Takabe à frente e Fumie em movimento atrás. O quadro partilhado torna visível a distância entre ambos. É análise do filme acabado, não prova da objetiva ou da iluminação utilizada."),
        sourceIds: ["fujiwara", "criterion-credits"]
      },
      {
        id: "cure-ending", area: "research",
        prompt: t("What editorial decision is supported by Kurosawa's account of the final restaurant scene?",
          "Hvilket klippevalg støttes av Kurosawas beretning om den avsluttende restaurantscenen?",
          "Quel choix de montage est étayé par le récit de Kurosawa sur la scène finale au restaurant ?",
          "Que decisão de montagem é sustentada pelo relato de Kurosawa sobre a cena final no restaurante?"),
        options: [
          { id: "resolve-all-motives", label: t("Add an explicit explanation of every character's motive",
            "Legg inn en entydig forklaring av alle figurenes motiver",
            "Ajouter une explication explicite des motivations de chaque personnage",
            "Acrescentar uma explicação explícita das motivações de cada personagem") },
          { id: "prove-hypnosis", label: t("Present the fictional story as scientific proof of hypnosis",
            "Framstill fiksjonsfortellingen som vitenskapelig bevis for hypnose",
            "Présenter la fiction comme une preuve scientifique de l'hypnose",
            "Apresentar a ficção como prova científica da hipnose") },
          { id: "withhold-explicit-action", label: t("Remove the more explicit continuation and preserve the ending's uncertainty",
            "Fjern den mer eksplisitte fortsettelsen og behold slutten tvetydig",
            "Supprimer la suite plus explicite et préserver l'incertitude de la fin",
            "Retirar a continuação mais explícita e preservar a incerteza do final") },
        ],
        bestSupportedOptionId: "withhold-explicit-action",
        explanation: t("Kurosawa told the Tokyo festival audience that he filmed a more explicit continuation but removed it from the released ending. That production account supports the omission; it does not establish one definitive interpretation or a real-world psychological mechanism.",
          "Kurosawa fortalte festivalpublikummet i Tokyo at han filmet en mer eksplisitt fortsettelse, men fjernet den fra den utgitte slutten. Produksjonsberetningen støtter utelatelsen, ikke én endelig tolkning eller en virkelig psykologisk mekanisme.",
          "Kurosawa a raconté au public de Tokyo avoir tourné une suite plus explicite avant de la retirer du montage final. Ce témoignage confirme l'omission, pas une interprétation unique ni un mécanisme psychologique réel.",
          "Kurosawa relatou ao público de Tóquio que filmou uma continuação mais explícita, mas a retirou da versão final. O relato sustenta a omissão, não uma interpretação única nem um mecanismo psicológico real."),
        sourceIds: ["tiff-qa", "fujiwara"]
      }
    ]
  },
  {
    scenarioId: "scenario_the_host_2006",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("The Host (2006) brings a digital creature into familiar Seoul riverside spaces. Explore the collaboration between live-action filmmaking, creature effects and family drama.",
      "The Host (2006) plasserer et digitalt monster i Seouls kjente elvelandskap. Utforsk samspillet mellom realfilm, skapningseffekter og familiedrama.",
      "The Host (2006) introduit une créature numérique dans les espaces familiers des berges de Séoul. Explorez la collaboration entre prises de vues réelles, effets de créature et drame familial.",
      "The Host (2006) introduz uma criatura digital nas margens familiares do rio em Seul. Explore a colaboração entre filmagem real, efeitos de criatura e drama familiar."),
    sources: [
      { id: "kofic", title: "Korean Films at the 59th Cannes Film Festival", publisher: "Korean Film Council", url: "https://koreanfilm.or.kr/eng/news/news.jsp?blbdComCd=601008&mode=VIEW&seq=390" },
      { id: "kpbs", title: "The Host / Interview with Bong Joon Ho", publisher: "KPBS Public Media", url: "https://www.kpbs.org/news/arts-culture/2007/03/09/the-hostinterview-with-bong-joon-ho" },
      { id: "bong-practical", title: "Interview: Bong Joon Ho — Host Stories", publisher: "Combustible Celluloid", url: "https://www.combustiblecelluloid.com/interviews/bongjoonho.shtml" },
      { id: "folk-museum", title: "The Host — Encyclopedia of Korean Folk Culture", publisher: "National Folk Museum of Korea", url: "https://folkency.nfm.go.kr/en/topic/detail/11845" },
    ],
    questions: [
      {
        id: "host-water", area: "animation",
        prompt: t("How can the digital creature's contact with the river gain convincing physical texture?",
          "Hvordan kan den digitale skapningens kontakt med elven få troverdig fysisk tekstur?",
          "Comment donner une texture physique convaincante au contact de la créature numérique avec le fleuve ?",
          "Como dar textura física convincente ao contacto da criatura digital com o rio?"),
        options: [
          { id: "digital-only", label: t("Remove all photographed water interaction and rely entirely on synthetic imagery", "Fjern alle filmede vannbevegelser og bruk bare syntetiske bilder", "Supprimer toute interaction filmée avec l'eau et utiliser uniquement des images synthétiques", "Eliminar toda a interação filmada com a água e usar apenas imagens sintéticas") },
          { id: "practical-splash", label: t("Combine a photographed practical splash with the composited digital creature", "Kombiner et filmet fysisk vannsprut med den digitalt innkomponerte skapningen", "Combiner une éclaboussure filmée avec la créature numérique intégrée", "Combinar um salpico filmado com a criatura digital integrada") },
          { id: "avoid-water", label: t("Keep the creature and the river in separate shots throughout", "Hold skapningen og elven i separate bilder gjennom hele filmen", "Maintenir la créature et le fleuve dans des plans séparés tout au long du film", "Manter a criatura e o rio em planos separados durante todo o filme") },
        ],
        bestSupportedOptionId: "practical-splash",
        explanation: t("Bong describes filming a real splash with a physical stand-in, then replacing it digitally. The filmed water interaction anchors the synthetic creature in the location. This example is not a claim that every effects shot used the same method.",
          "Bong beskriver filming av et ekte vannsprut med en fysisk erstatning som senere ble byttet ut digitalt. Vannbevegelsen forankrer den digitale skapningen i miljøet. Ikke alle effektbilder må ha brukt samme metode.",
          "Bong décrit une éclaboussure réelle filmée avec un substitut physique, ensuite remplacé numériquement. L'eau filmée ancre la créature dans le lieu. Cela ne décrit pas tous les plans à effets.",
          "Bong descreve um salpico real filmado com um substituto físico, depois trocado digitalmente. A água filmada ancora a criatura no local. Isto não significa que todos os planos de efeitos usaram o mesmo método."),
        sourceIds: ["bong-practical", "folk-museum"]
      },
      {
        id: "host-pipeline", area: "animation",
        prompt: t("Which division of production work is supported by accounts of the creature pipeline?",
          "Hvilken arbeidsdeling støttes av kildene om produksjonen av skapningen?",
          "Quelle répartition du travail est étayée par les récits de fabrication de la créature ?",
          "Que divisão de trabalho é sustentada pelos relatos da criação da criatura?"),
        options: [
          { id: "shared-pipeline", label: t("Coordinate Korean design, overseas creature workshops and The Orphanage's digital effects", "Samordne koreansk design, utenlandske skapningsverksteder og The Orphanages digitale effekter", "Coordonner la conception coréenne, les ateliers de créatures étrangers et les effets numériques de The Orphanage", "Coordenar o design coreano, oficinas internacionais de criaturas e os efeitos digitais de The Orphanage") },
          { id: "single-miniature", label: t("Assign the entire creature to one miniature unit with no digital effects", "Overlat hele skapningen til én miniatyravdeling uten digitale effekter", "Confier toute la créature à une seule équipe de maquettes sans effets numériques", "Entregar toda a criatura a uma equipa de miniaturas sem efeitos digitais") },
          { id: "fully-local-cg", label: t("Keep all design, modeling and digital effects within a single domestic team", "La én lokal avdeling utføre alt design, modellering og digitale effekter", "Confier toute la conception, la modélisation et les effets numériques à une seule équipe nationale", "Manter o design, a modelação e os efeitos digitais numa única equipa nacional") },
        ],
        bestSupportedOptionId: "shared-pipeline",
        explanation: t("The Korean Film Council and National Folk Museum describe international collaboration: Jang Hee-chul's design, Weta Workshop and John Cox's Creature Workshop, and digital work by The Orphanage. The sources support a distributed workflow rather than one studio doing everything.",
          "Korean Film Council og det koreanske folkemuseet beskriver internasjonalt samarbeid: Jang Hee-chuls design, Weta Workshop og John Cox's Creature Workshop, samt digitalt arbeid hos The Orphanage. Dette var en fordelt arbeidsprosess.",
          "Le Korean Film Council et le musée national du folklore décrivent une collaboration internationale : conception de Jang Hee-chul, Weta Workshop et John Cox's Creature Workshop, puis travail numérique de The Orphanage. Le travail était réparti.",
          "O Korean Film Council e o Museu Nacional do Folclore descrevem colaboração internacional: design de Jang Hee-chul, Weta Workshop e John Cox's Creature Workshop, e trabalho digital de The Orphanage. O processo foi distribuído."),
        sourceIds: ["kofic", "folk-museum"]
      },
      {
        id: "host-family", area: "research",
        prompt: t("What approach to setting and performance supports Bong's intended mixture of monster film and family drama?",
          "Hvilken tilnærming til miljø og skuespill støtter Bongs blanding av monsterfilm og familiedrama?",
          "Quelle approche du décor et du jeu soutient le mélange voulu de film de monstre et de drame familial ?",
          "Que abordagem ao espaço e à interpretação sustenta a combinação de filme de monstro e drama familiar?"),
        options: [
          { id: "anonymous-arena", label: t("Replace familiar public spaces with an anonymous fantasy arena", "Erstatt kjente offentlige rom med en anonym fantasiscene", "Remplacer les lieux publics familiers par une arène fantastique anonyme", "Substituir espaços públicos familiares por uma arena fantástica anónima") },
          { id: "effects-first", label: t("Let spectacle replace the family's emotional reactions and comic contradictions", "La effektspektaklet erstatte familiens følelser og komiske motsetninger", "Laisser le spectacle remplacer les réactions émotionnelles et les contradictions comiques de la famille", "Deixar o espetáculo substituir as emoções e contradições cómicas da família") },
          { id: "grounded-family", label: t("Ground the creature in an ordinary riverside setting and sustain specific family performances", "Forankre skapningen i et hverdagslig elvemiljø og behold familiens særegne skuespill", "Ancrer la créature dans un paysage fluvial ordinaire et préserver le jeu singulier de la famille", "Ancorar a criatura num cenário fluvial quotidiano e manter as interpretações específicas da família") },
        ],
        bestSupportedOptionId: "grounded-family",
        explanation: t("In his KPBS interview Bong connects the shock to the familiar Han River and credits Song Kang-ho's performance with making the digital creature feel more credible. The family's sadness and humor are part of this approach, not interruptions to the effects.",
          "I KPBS-intervjuet knytter Bong sjokket til den velkjente Han-elven og fremhever Song Kang-hos skuespill som viktig for skapningens troverdighet. Familiens sorg og humor er en del av grepet, ikke avbrudd i effektene.",
          "Dans son entretien à KPBS, Bong relie le choc au fleuve Han familier et souligne que le jeu de Song Kang-ho rend la créature numérique crédible. La tristesse et l'humour familiaux font partie du procédé.",
          "Na entrevista à KPBS, Bong liga o choque ao familiar rio Han e salienta que a interpretação de Song Kang-ho torna a criatura digital credível. A tristeza e o humor da família fazem parte da abordagem."),
        sourceIds: ["kpbs"]
      }
    ]
  },
  {
    scenarioId: "scenario_still_life_2006",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("Still Life (2006) combines digital location filmmaking, fictional searches and imagined events within a landscape undergoing rapid change. Explore Jia Zhangke's documented approach without confusing fiction with historical evidence.",
      "Still Life (2006) kombinerer digitale stedsopptak, fiktive letehistorier og forestilte hendelser i et landskap i rask endring. Utforsk Jia Zhangkes dokumenterte arbeidsmåte uten å forveksle fiksjon med historiske bevis.",
      "Still Life (2006) mêle tournage numérique en décors réels, recherches fictionnelles et événements imaginaires dans un paysage en mutation rapide. Explorez la méthode documentée de Jia Zhangke sans confondre fiction et preuve historique.",
      "Still Life (2006) combina filmagem digital em locais reais, buscas ficcionais e acontecimentos imaginados numa paisagem em rápida transformação. Explore o método documentado de Jia Zhangke sem confundir ficção com prova histórica."),
    sources: [
      { id: "probe-interview", title: "Filmmaker Jia Zhangke on the forgotten people of Three Gorges", publisher: "Probe International", url: "https://journal.probeinternational.org/2006/10/16/filmmaker-jia-zhangke-forgotten-people-three-gorges/" },
      { id: "cinergie-hd", title: "Jia Zhang-Ke — interview and digital cinematography discussion", publisher: "Cinergie", url: "https://www.cinergie.be/article/jia-zhang-ke" },
      { id: "doors-interview", title: "Jia Zhangke: I wanted to acknowledge the sensory link between contemporary history and ancient times", publisher: "Doors Art and Culture Agency", url: "https://www.doors-agency.com/en/2022/01/19/jia-zhangke-i-wanted-to-acknowledge-the-sensory-link-between-contemporary-history-and-ancient-times/" },
      { id: "iffr-credits", title: "Still Life — 2007 festival programme and credits", publisher: "International Film Festival Rotterdam", url: "https://iffr.com/en/iffr/2007/films/still-life" },
      { id: "photogenie-diptych", title: "We should think of realism as an expanding concept: A conversation with Jia Zhangke", publisher: "photogénie", url: "https://photogenie.be/we-should-think-of-realism-as-an-expanding-concept-a-conversation-with-jia-zhangke/" },
    ],
    questions: [
      {
        id: "still-life-location", area: "camera",
        prompt: t("How can the camera team respond to a town being transformed during production?",
          "Hvordan kan kamerateamet reagere på en by som forandres mens filmen produseres?",
          "Comment l'équipe image peut-elle réagir à une ville qui se transforme pendant le tournage ?",
          "Como pode a equipa de imagem responder a uma cidade que se transforma durante a rodagem?"),
        options: [
          { id: "fixed-studio", label: t("Rebuild an unchanging town in a studio and avoid actual locations", "Bygg opp en uforanderlig studioby og unngå de virkelige stedene", "Reconstruire une ville immuable en studio et éviter les lieux réels", "Reconstruir uma cidade imutável em estúdio e evitar os locais reais") },
          { id: "responsive-digital", label: t("Use flexible digital location shooting to observe demolition and new construction", "Bruk fleksible digitale stedsopptak til å observere riving og nybygging", "Employer un tournage numérique souple sur place pour observer démolition et construction", "Usar filmagem digital flexível no local para observar demolição e construção") },
          { id: "archive-only", label: t("Replace all new location footage with unrelated archival city images", "Erstatt alle nye stedsopptak med arkivbilder av andre byer", "Remplacer toutes les nouvelles prises de vues par des archives de villes sans rapport", "Substituir todas as novas imagens locais por arquivos de cidades sem relação") },
        ],
        bestSupportedOptionId: "responsive-digital",
        explanation: t("Jia described filming in Fengjie and Wushan while old buildings were demolished and new ones built. His comments on HD emphasize the freedom to wait and repeat takes. IFFR credits Yu Lik-wai and lists a 35mm festival format; that listing alone does not establish the acquisition medium.",
          "Jia beskriver opptak i Fengjie og Wushan mens gamle bygninger ble revet og nye reist. Han fremhever HD-opptakenes frihet til å vente og gjenta tagninger. IFFR krediterer Yu Lik-wai og oppgir 35 mm som festivalformat, noe som alene ikke fastslår opptaksmediet.",
          "Jia décrit le tournage à Fengjie et Wushan, entre démolition et construction. Il souligne la liberté d'attendre et de refaire les prises en HD. L'IFFR crédite Yu Lik-wai et indique un format de festival 35 mm, qui ne suffit pas à établir le support de captation.",
          "Jia descreve filmagens em Fengjie e Wushan entre demolições e construções. Destaca a liberdade de esperar e repetir planos em HD. O IFFR credita Yu Lik-wai e indica um formato de festival de 35 mm, que não determina por si só o suporte de captação."),
        sourceIds: ["probe-interview", "cinergie-hd", "iffr-credits"]
      },
      {
        id: "still-life-diptych", area: "research",
        prompt: t("How should the documentary Dong inform the making of the related fiction film?",
          "Hvordan bør dokumentaren Dong prege arbeidet med den beslektede fiksjonsfilmen?",
          "Comment le documentaire Dong doit-il nourrir la fabrication de la fiction associée ?",
          "Como deve o documentário Dong informar a realização da ficção relacionada?"),
        options: [
          { id: "literal-proof", label: t("Treat every invented fictional action as a verified documentary event", "Behandle enhver oppdiktet handling som en verifisert dokumentarisk hendelse", "Traiter chaque action fictionnelle inventée comme un fait documentaire vérifié", "Tratar cada ação ficcional inventada como um acontecimento documental verificado") },
          { id: "ignore-observation", label: t("Ignore observations from the documentary and keep the projects entirely unrelated", "Se bort fra dokumentarens observasjoner og hold prosjektene helt atskilt", "Ignorer les observations du documentaire et rendre les projets entièrement indépendants", "Ignorar as observações do documentário e manter os projetos totalmente desligados") },
          { id: "observe-transform", label: t("Let observed lives and places inspire fiction while preserving the distinction between genres", "La observerte liv og steder inspirere fiksjonen, men behold skillet mellom sjangrene", "Laisser les vies et lieux observés inspirer la fiction tout en distinguant les genres", "Deixar vidas e locais observados inspirarem a ficção, preservando a distinção entre géneros") },
        ],
        bestSupportedOptionId: "observe-transform",
        explanation: t("Jia recalls going to the region to film painter Liu Xiaodong for Dong. Observing the landscape and workers inspired Still Life, and Han Sanming appears in both works. The director describes them as a diptych, not as interchangeable factual records.",
          "Jia forteller at han reiste til området for å filme maleren Liu Xiaodong til Dong. Landskapet og arbeiderne inspirerte Still Life, og Han Sanming medvirker i begge filmene. Regissøren beskriver dem som et diptyk, ikke som utskiftbare faktakilder.",
          "Jia raconte être venu filmer le peintre Liu Xiaodong pour Dong. Le paysage et les travailleurs ont inspiré Still Life, et Han Sanming apparaît dans les deux œuvres. Le réalisateur parle d'un diptyque, non de documents factuels interchangeables.",
          "Jia recorda ter ido filmar o pintor Liu Xiaodong para Dong. A paisagem e os trabalhadores inspiraram Still Life, e Han Sanming surge em ambas as obras. O realizador descreve um díptico, não registos factuais intercambiáveis."),
        sourceIds: ["doors-interview", "photogenie-diptych"]
      },
      {
        id: "still-life-surreal", area: "animation",
        prompt: t("What purpose can a fantastical digital image serve within an otherwise realist film?",
          "Hvilken funksjon kan et fantastisk digitalt bilde ha i en ellers realistisk film?",
          "Quelle fonction une image numérique fantastique peut-elle remplir dans un film par ailleurs réaliste ?",
          "Que função pode uma imagem digital fantástica ter num filme predominantemente realista?"),
        options: [
          { id: "express-dislocation", label: t("Use an imagined event to express how bewildering rapid physical change feels", "Bruk en forestilt hendelse til å uttrykke hvor fremmedgjørende raske fysiske endringer oppleves", "Utiliser un événement imaginaire pour exprimer le désarroi face aux transformations rapides", "Usar um acontecimento imaginado para expressar a estranheza de mudanças físicas rápidas") },
          { id: "document-ufo", label: t("Present the flying building as factual proof of an extraordinary historical event", "Presenter den flygende bygningen som faktabevis for en ekstraordinær historisk hendelse", "Présenter le bâtiment volant comme preuve d'un événement historique extraordinaire", "Apresentar o edifício voador como prova de um acontecimento histórico extraordinário") },
          { id: "replace-realism", label: t("Remove all social observation and turn the entire film into an effects showcase", "Fjern all sosial observasjon og gjør hele filmen til en effektoppvisning", "Supprimer toute observation sociale et transformer le film en démonstration d'effets", "Eliminar toda a observação social e transformar o filme numa demonstração de efeitos") },
        ],
        bestSupportedOptionId: "express-dislocation",
        explanation: t("Jia explains that the landscape felt strangely unreal and that the flying memorial building was an imaginative response to the speed of change. The digital effect expresses a subjective experience; it is not evidence that a building actually flew.",
          "Jia forklarer at landskapet virket underlig uvirkelig, og at den flygende minnebygningen var et fantasigrep som svarte på endringstempoet. Den digitale effekten uttrykker en subjektiv erfaring, ikke at en bygning faktisk fløy.",
          "Jia explique que le paysage semblait irréel et que le monument volant répondait par l'imagination à la vitesse des transformations. L'effet numérique exprime une expérience subjective, non le vol réel d'un bâtiment.",
          "Jia explica que a paisagem parecia irreal e que o monumento voador era uma resposta imaginativa à velocidade das mudanças. O efeito digital exprime uma experiência subjetiva, não o voo real de um edifício."),
        sourceIds: ["doors-interview"]
      }
    ]
  },
  {
    scenarioId: "scenario_platform_2000",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("Platform (2000) follows a provincial performance troupe through a decade of social transformation. Explore how Jia Zhangke and cinematographer Yu Lik-wai use distance, duration and collaboration to make historical change perceptible.",
      "Platform (2000) følger en provinsiell artistgruppe gjennom et tiår med samfunnsendringer. Utforsk hvordan Jia Zhangke og filmfotograf Yu Lik-wai bruker avstand, varighet og samarbeid for å gjøre historiske endringer merkbare.",
      "Platform (2000) suit une troupe provinciale pendant une décennie de transformations sociales. Explorez comment Jia Zhangke et le chef opérateur Yu Lik-wai rendent ces changements perceptibles par la distance, la durée et la collaboration.",
      "Platform (2000) acompanha uma companhia artística provincial durante uma década de transformação social. Explore como Jia Zhangke e o diretor de fotografia Yu Lik-wai tornam a mudança histórica percetível através da distância, duração e colaboração."),
    sources: [
      { id: "senses-jia", title: "Cinema with an Accent – Interview with Jia Zhangke, Director of Platform", publisher: "Senses of Cinema", url: "https://www.sensesofcinema.com/2001/feature-articles/zhangke_interview/" },
      { id: "nantes-interview", title: "Interview with Jia Zhang Ke at Nantes", publisher: "FilmFestivals.com", url: "https://www.filmfestivals.com/fr/node/178894" },
      { id: "screen-review", title: "Platform — Derek Malcolm's contemporary review and credits", publisher: "Screen International", url: "https://www.screendaily.com/platform/404251.article" },
    ],
    questions: [
      {
        id: "platform-distance", area: "camera",
        prompt: t("How can the camera preserve a sense of historical distance while showing the troupe's everyday life?",
          "Hvordan kan kameraet bevare historisk avstand samtidig som det viser artistgruppens hverdagsliv?",
          "Comment la caméra peut-elle préserver une distance historique tout en montrant la vie quotidienne de la troupe ?",
          "Como pode a câmara preservar uma distância histórica ao mostrar o quotidiano da companhia?"),
        options: [
          { id: "explanatory-closeups", label: t("Use frequent explanatory close-ups to dictate where viewers look", "Bruk hyppige forklarende nærbilder for å styre publikums blikk", "Multiplier les gros plans explicatifs pour diriger le regard", "Usar grandes planos explicativos frequentes para dirigir o olhar") },
          { id: "observational-distance", label: t("Step back and hold wider, sustained views of people within their surroundings", "Trekk kameraet tilbake og behold vide, langvarige bilder av mennesker i omgivelsene", "Reculer la caméra et maintenir des plans larges et prolongés des personnages dans leur milieu", "Recuar a câmara e manter planos amplos e prolongados das pessoas no seu meio") },
          { id: "constant-pov", label: t("Show every event exclusively from one character's moving point of view", "Vis alle hendelser utelukkende fra én figurs bevegelige synsvinkel", "Montrer chaque événement exclusivement du point de vue mobile d'un personnage", "Mostrar todos os acontecimentos apenas do ponto de vista móvel de uma personagem") },
        ],
        bestSupportedOptionId: "observational-distance",
        explanation: t("In Senses of Cinema, Jia contrasts the close, handheld immediacy of Xiao Wu with the more distant observer in Platform. Wider compositions and sustained takes allow viewers to attend to people and surroundings. He also rejects the idea that this is absolute objectivity.",
          "I Senses of Cinema sammenligner Jia den nære, håndholdte umiddelbarheten i Xiao Wu med den mer distanserte observatøren i Platform. Vide komposisjoner og lange tagninger lar publikum studere mennesker og omgivelser. Han avviser samtidig at dette er absolutt objektivitet.",
          "Dans Senses of Cinema, Jia oppose l'immédiateté de la caméra portée de Xiao Wu au regard plus distant de Platform. Plans larges et prises longues permettent d'observer les personnes et leur milieu, sans prétendre à une objectivité absolue.",
          "Na Senses of Cinema, Jia contrapõe a proximidade da câmara à mão de Xiao Wu ao olhar mais distante de Platform. Planos amplos e prolongados permitem observar pessoas e espaços, sem pretender uma objetividade absoluta."),
        sourceIds: ["senses-jia", "screen-review"]
      },
      {
        id: "platform-duration", area: "camera",
        prompt: t("How can the production convey the experience of waiting rather than simply communicate that time has passed?",
          "Hvordan kan produksjonen formidle opplevelsen av å vente, ikke bare fortelle at tiden har gått?",
          "Comment la réalisation peut-elle transmettre l'expérience de l'attente plutôt que simplement indiquer que le temps a passé ?",
          "Como pode a realização transmitir a experiência da espera em vez de apenas indicar que o tempo passou?"),
        options: [
          { id: "rapid-montage", label: t("Compress every idle moment into a rapid montage of highlights", "Komprimer alle stille øyeblikk til en rask montasje av høydepunkter", "Comprimer tous les moments d'inaction en un montage rapide de temps forts", "Comprimir todos os momentos de inação numa montagem rápida de destaques") },
          { id: "time-caption", label: t("Replace the actors' waiting with a caption announcing elapsed time", "Erstatt skuespillernes venting med en tekstplakat som angir tiden", "Remplacer l'attente des acteurs par un carton indiquant le temps écoulé", "Substituir a espera dos atores por um cartão que indique o tempo decorrido") },
          { id: "preserved-time", label: t("Keep the mundane conversation and pauses unfolding within a continuous take", "La den hverdagslige samtalen og pausene utspille seg i én sammenhengende tagning", "Laisser la conversation ordinaire et les silences se dérouler dans une prise continue", "Deixar a conversa quotidiana e as pausas decorrerem num plano contínuo") },
        ],
        bestSupportedOptionId: "preserved-time",
        explanation: t("Jia explains that a prolonged scene of people smoking and talking conveys stagnation through its actual duration. Breaking it into shorter pieces would change that experience. This supports a particular choice about time, not a rule that all films must avoid montage.",
          "Jia forklarer at en lang scene der mennesker røyker og snakker, formidler stillstand gjennom selve varigheten. Kortere klipp ville endret opplevelsen. Dette støtter et bestemt tidslig grep, ikke et generelt forbud mot montasje.",
          "Jia explique qu'une longue scène de conversation et de cigarettes transmet la stagnation par sa durée même. La fragmenter modifierait cette expérience. Ce choix temporel n'est pas une interdiction générale du montage.",
          "Jia explica que uma cena longa de conversa e cigarros transmite a estagnação pela própria duração. Fragmentá-la mudaria a experiência. Esta escolha temporal não constitui uma proibição geral da montagem."),
        sourceIds: ["senses-jia", "nantes-interview"]
      },
      {
        id: "platform-performance", area: "research",
        prompt: t("Which rehearsal and performance approach is consistent with Jia's account of his working method?",
          "Hvilken tilnærming til prøver og skuespill samsvarer med Jias beskrivelse av arbeidsmetoden?",
          "Quelle méthode de répétition et de jeu correspond au récit de Jia sur son travail ?",
          "Que método de ensaio e interpretação corresponde ao relato de Jia sobre o seu trabalho?"),
        options: [
          { id: "guided-improvisation", label: t("Keep the scripted dramatic purpose, allow actors to vary dialogue and rehearse on set", "Behold scenens manusfestede formål, la skuespillerne variere replikkene og prøv på settet", "Conserver l'intention dramatique écrite, laisser varier les répliques et répéter sur le plateau", "Manter a intenção dramática escrita, permitir variações no diálogo e ensaiar no local") },
          { id: "no-script-no-purpose", label: t("Discard the written scene and give the cast no dramatic purpose", "Forkast den skrevne scenen og gi skuespillerne intet dramatisk formål", "Abandonner la scène écrite et ne donner aucun objectif dramatique aux acteurs", "Abandonar a cena escrita e não dar qualquer objetivo dramático aos atores") },
          { id: "no-variation", label: t("Require every word to be identical and forbid all actor contributions", "Krev at hvert ord er identisk og forby alle bidrag fra skuespillerne", "Exiger des mots strictement identiques et interdire toute contribution des acteurs", "Exigir palavras rigorosamente idênticas e proibir contribuições dos atores") },
        ],
        bestSupportedOptionId: "guided-improvisation",
        explanation: t("Jia says dialogue was written, but actors could find their own phrasing while preserving the scene's purpose. Rehearsal began on set once the camera and lighting were prepared. Improvisation and a written screenplay can therefore coexist.",
          "Jia sier at replikkene var skrevet, men at skuespillerne kunne finne egne formuleringer så lenge scenens formål ble bevart. Prøvene begynte på settet etter at kamera og lys var klargjort. Improvisasjon og et skrevet manus kan dermed eksistere side om side.",
          "Jia indique que les dialogues étaient écrits, mais que les acteurs pouvaient les reformuler en conservant l'intention de la scène. Les répétitions commençaient sur le plateau après la préparation de la caméra et de la lumière.",
          "Jia afirma que os diálogos estavam escritos, mas os atores podiam reformulá-los mantendo a intenção da cena. Os ensaios começavam no local após a preparação da câmara e da iluminação."),
        sourceIds: ["senses-jia"]
      }
    ]
  },
  {
    scenarioId: "scenario_raise_the_red_lantern_1991",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("Raise the Red Lantern (1991) makes architecture, recurring color and constructed ceremony expressive elements of an enclosed historical drama. Explore their visual function without confusing invention with historical documentation.", "Raise the Red Lantern (1991) gjør arkitektur, gjentatte farger og konstruerte seremonier til uttrykksmidler i et innelukket historisk drama. Utforsk den visuelle funksjonen uten å forveksle fiksjon med historisk dokumentasjon.", "Raise the Red Lantern (1991) transforme l'architecture, les couleurs récurrentes et les cérémonies construites en éléments expressifs d'un drame historique clos. Explorez leur fonction sans confondre invention et documentation.", "Raise the Red Lantern (1991) transforma arquitetura, cores recorrentes e cerimónias construídas em elementos expressivos de um drama histórico fechado. Explore a função visual sem confundir invenção e documentação."),
    sources: [
  {
    "id": "pingyao-masterclass",
    "title": "Pingyao 2019: Zhang Yimou – Masterclass",
    "publisher": "Desistfilm",
    "url": "https://desistfilm.com/pingyao-2019-zhang-yimou-masterclass/"
  },
  {
    "id": "bfi-compound",
    "title": "10 great country house films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-country-house-films"
  },
  {
    "id": "reverse-shot",
    "title": "Raise the Red Lantern — visual analysis",
    "publisher": "Reverse Shot",
    "url": "https://www.reverseshot.org/symposiums/entry/2738/raise_red_lantern"
  },
  {
    "id": "ritual-study",
    "title": "Inventing Rituals: Cultural Politics in Zhang Yimou’s Historical Films",
    "publisher": "Senses of Cinema",
    "url": "https://www.sensesofcinema.com/2018/feature-articles/zhang-yimou-cultural-politics/"
  }
],
    questions: [
      { id: "lantern-architecture", area: "camera", prompt: t("How can a fixed camera make a courtyard's architecture part of the drama?", "Hvordan kan et fast kamera gjøre gårdsarkitekturen til en del av dramaet?", "Comment une caméra fixe peut-elle intégrer l'architecture de la cour au drame ?", "Como pode uma câmara fixa integrar a arquitetura do pátio no drama?"), options: [{ id: "architectural-frame", label: t("Hold a composed wide view so walls, entrances and people share the frame", "Behold et komponert oversiktsbilde der murer, innganger og mennesker deler bildeflaten", "Maintenir un plan large composé où murs, entrées et personnes partagent le cadre", "Manter um plano amplo composto onde muros, entradas e pessoas partilham o quadro") },
          { id: "isolated-faces", label: t("Remove all architecture by using only tight facial close-ups", "Fjern all arkitektur ved å bruke utelukkende tette ansiktsnærbilder", "Supprimer toute architecture en utilisant uniquement des gros plans serrés", "Eliminar toda a arquitetura usando apenas grandes planos fechados") },
          { id: "constant-tracking", label: t("Keep the camera tracking continuously to avoid every static view", "La kameraet bevege seg kontinuerlig for å unngå alle statiske bilder", "Déplacer sans cesse la caméra pour éviter tout plan fixe", "Mover continuamente a câmara para evitar todos os planos fixos") }], bestSupportedOptionId: "architectural-frame", explanation: t("At the 2019 Pingyao masterclass Zhang explained that he relocated the adaptation to Shanxi and sought fixed compositions. The Qiao Family Compound provides the physical setting; its framing turns enclosure into an expressive choice rather than merely a backdrop.", "Under mesterklassen i Pingyao i 2019 fortalte Zhang at han flyttet adaptasjonen til Shanxi og ønsket faste komposisjoner. Qiao-familiens anlegg gir den fysiske rammen; innrammingen gjør innestengtheten til et uttrykksgrep fremfor bare en bakgrunn.", "À Pingyao en 2019, Zhang a expliqué avoir déplacé l'adaptation au Shanxi et recherché des compositions fixes. La demeure Qiao fournit le lieu réel ; le cadrage transforme l'enfermement en choix expressif plutôt qu'en simple décor.", "Em Pingyao, em 2019, Zhang explicou que deslocou a adaptação para Shanxi e procurou composições fixas. O complexo da família Qiao fornece o espaço físico; o enquadramento transforma o confinamento numa escolha expressiva."), sourceIds: ["pingyao-masterclass","bfi-compound"] },
      { id: "lantern-color", area: "camera", prompt: t("Which color and composition strategy makes changing household status visible?", "Hvilken farge- og komposisjonsstrategi synliggjør endringer i status i husholdningen?", "Quelle stratégie de couleur et de composition rend visibles les changements de statut dans la maison ?", "Que estratégia de cor e composição torna visíveis as mudanças de estatuto na casa?"), options: [{ id: "uniform-red", label: t("Flood every courtyard with the same red light regardless of the story", "Fyll alle gårdsrom med det samme røde lyset uavhengig av fortellingen", "Inonder toutes les cours de la même lumière rouge indépendamment du récit", "Inundar todos os pátios com a mesma luz vermelha independentemente da narrativa") },
          { id: "selective-red", label: t("Contrast selective red lantern accents with cooler surroundings in recurring compositions", "Sett utvalgte røde lanterneaksenter mot kjøligere omgivelser i gjentatte komposisjoner", "Opposer des accents rouges sélectifs à un environnement plus froid dans des compositions récurrentes", "Contrastar acentos vermelhos seletivos com ambientes mais frios em composições recorrentes") },
          { id: "random-palette", label: t("Change the color palette randomly without a narrative relationship", "Endre fargepaletten tilfeldig uten sammenheng med fortellingen", "Modifier la palette au hasard sans rapport avec le récit", "Alterar aleatoriamente a paleta sem relação com a narrativa") }], bestSupportedOptionId: "selective-red", explanation: t("Reverse Shot identifies the recurring contrast of illuminated red lanterns with blue night surroundings and formal frames. Zhang's account connects the lighting cycle to his adaptation. This supports the visual contrast, not a claim about exact lamp wattage, stock or exposure.", "Reverse Shot beskriver den gjentatte kontrasten mellom lysende røde lanterner, blå nattomgivelser og formelle bilder. Zhang knytter lyssyklusen til adaptasjonen. Dette støtter den visuelle kontrasten, ikke påstander om eksakt lampeeffekt, filmtype eller eksponering.", "Reverse Shot relève le contraste récurrent entre lanternes rouges lumineuses, nuit bleue et cadres formels. Zhang relie le cycle lumineux à son adaptation. Cela étaye le contraste visuel, non la puissance des lampes, la pellicule ou l'exposition exacte.", "Reverse Shot identifica o contraste recorrente entre lanternas vermelhas, noite azul e enquadramentos formais. Zhang liga o ciclo de luz à adaptação. Isto sustenta o contraste visual, não a potência das lâmpadas, a película ou a exposição exata."), sourceIds: ["reverse-shot","pingyao-masterclass"] },
      { id: "lantern-ritual", area: "research", prompt: t("How should a filmmaker label the household's lantern ceremony in historical teaching material?", "Hvordan bør filmskaperen omtale husholdningens lanterneseremoni i historisk undervisningsmateriale?", "Comment présenter la cérémonie des lanternes dans un support pédagogique historique ?", "Como apresentar a cerimónia das lanternas num material pedagógico histórico?"), options: [{ id: "universal-custom", label: t("Describe it as a universal historical custom without further evidence", "Beskriv den som en universell historisk skikk uten ytterligere dokumentasjon", "La présenter comme une coutume historique universelle sans autre preuve", "Descrevê-la como um costume histórico universal sem outras provas") },
          { id: "building-proves-ritual", label: t("Treat the real filming location as proof that every ceremony occurred there", "Bruk det virkelige opptaksstedet som bevis for at alle seremoniene fant sted der", "Prendre le lieu réel du tournage comme preuve que toutes les cérémonies y existaient", "Tomar o local real de filmagem como prova de que todas as cerimónias lá ocorreram") },
          { id: "constructed-ritual", label: t("Identify it as a constructed dramatic ritual and research historical practices separately", "Identifiser den som et konstruert dramatisk ritual og undersøk historiske praksiser separat", "L'identifier comme un rituel dramatique construit et étudier séparément les pratiques historiques", "Identificá-la como ritual dramático construído e pesquisar separadamente as práticas históricas") }], bestSupportedOptionId: "constructed-ritual", explanation: t("Zhang describes adding the lantern cycle; Radha O'Meara's study likewise treats the central rituals as inventions for the film. Their symbolic depiction of social control is open to analysis, but neither a real location nor a convincing performance verifies a historical custom.", "Zhang beskriver hvordan han la til lanternesyklusen; Radha O'Mearas studie behandler også de sentrale ritualene som filmskapte. Deres symbolske skildring av sosial kontroll kan analyseres, men verken et virkelig sted eller overbevisende skuespill bekrefter en historisk skikk.", "Zhang décrit l'ajout du cycle des lanternes ; l'étude de Radha O'Meara analyse également les rituels centraux comme des inventions filmiques. Leur représentation symbolique du contrôle social peut être étudiée sans la confondre avec une coutume vérifiée.", "Zhang descreve a introdução do ciclo das lanternas; o estudo de Radha O'Meara também analisa os rituais centrais como invenções do filme. A representação simbólica do controlo social pode ser estudada sem ser confundida com um costume comprovado."), sourceIds: ["pingyao-masterclass","ritual-study"] }
    ]
  },
  {
    scenarioId: "scenario_a_city_of_sadness_1989",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("A City of Sadness (1989) connects Taiwan's political transition to the daily experience of a fictional family. Explore spatial staging, synchronized sound and indirect historical narration without treating the drama as an archival record.", "A City of Sadness (1989) knytter Taiwans politiske overgang til en fiktiv families hverdag. Utforsk romlig iscenesettelse, synkronlyd og indirekte historiefortelling uten å behandle dramaet som et arkivdokument.", "A City of Sadness (1989) relie la transition politique de Taïwan au quotidien d'une famille fictive. Explorez la mise en scène spatiale, le son synchrone et le récit historique indirect sans traiter la fiction comme une archive.", "A City of Sadness (1989) liga a transição política de Taiwan ao quotidiano de uma família fictícia. Explore a encenação espacial, o som síncrono e a narrativa histórica indireta sem tratar a ficção como documento de arquivo."),
    sources: [
  {
    "id": "ucla-city",
    "title": "A City of Sadness — screening notes and credits",
    "publisher": "UCLA Film & Television Archive",
    "url": "https://cinema.ucla.edu/events/a-city-of-sadness-taiwan-1989-12-08-13/"
  },
  {
    "id": "harvard-city",
    "title": "A City of Sadness — programme notes",
    "publisher": "Harvard Film Archive",
    "url": "https://harvardfilmarchive.org/programs/a-city-of-sadness-by-hou-hsiao"
  },
  {
    "id": "tu-interview",
    "title": "Fathering sync sound",
    "publisher": "Taipei Times",
    "url": "https://www.taipeitimes.com/News/feat/archives/2001/06/17/0000090444"
  },
  {
    "id": "tu-award",
    "title": "Tu Duu-Chih — National Award for Arts",
    "publisher": "National Culture and Arts Foundation",
    "url": "https://www.ncafroc.org.tw/artsaward/winnerDetail%401233?lang=en_US"
  },
  {
    "id": "smithsonian-hou",
    "title": "Freer and Sackler Galleries Host First Major Film Retrospective of Hou Hsiao-hsien in More Than a Decade",
    "publisher": "Smithsonian Institution",
    "url": "https://www.si.edu/es/newsdesk/releases/freer-and-sackler-galleries-host-first-major-film-retrospective-hou-hsiao-hsien-more-decade"
  }
],
    questions: [
      { id: "sadness-depth", area: "camera", prompt: t("How can a family scene allow viewers to observe relationships across the room?", "Hvordan kan en familiescene la publikum observere relasjoner på tvers av rommet?", "Comment une scène familiale peut-elle permettre d'observer les relations dans toute la pièce ?", "Como pode uma cena familiar permitir observar as relações em todo o espaço?"), options: [{ id: "sustained-depth", label: t("Hold a precisely composed long take with action distributed through the depth of the room", "Behold en presist komponert lang tagning med handling fordelt i rommets dybde", "Maintenir une prise longue précisément composée avec des actions réparties dans la profondeur", "Manter um plano longo e cuidadosamente composto com ações distribuídas em profundidade") },
          { id: "fragment-all", label: t("Break every interaction into isolated close-ups that remove the shared space", "Del opp all samhandling i isolerte nærbilder som fjerner det felles rommet", "Fragmenter chaque interaction en gros plans isolés qui suppriment l'espace commun", "Fragmentar cada interação em grandes planos isolados que eliminam o espaço comum") },
          { id: "explain-relationships", label: t("Replace the family's shared activity with a narrator describing every relationship", "Erstatt familiens felles aktivitet med en forteller som beskriver alle relasjonene", "Remplacer l'activité commune par un narrateur décrivant chaque relation", "Substituir a atividade comum por um narrador que descreve cada relação") }], bestSupportedOptionId: "sustained-depth", explanation: t("UCLA credits Chen Huai-en as cinematographer and describes Hou's sustained shots and deep compositions. The Smithsonian likewise emphasizes staging in depth. This supports a spatial approach to performance, not an assertion about a specific lens or shot duration.", "UCLA krediterer Chen Huai-en som filmfotograf og beskriver Hous lange tagninger og dybdekomposisjoner. Smithsonian fremhever også iscenesettelsen i dybden. Dette støtter et romlig grep i personregien, ikke en påstand om et bestemt objektiv eller en eksakt tagningstid.", "L'UCLA crédite Chen Huai-en à l'image et décrit les prises longues et les compositions en profondeur de Hou. Le Smithsonian souligne aussi la mise en scène en profondeur. Cela étaye un choix spatial, non une focale ou une durée précise.", "A UCLA credita Chen Huai-en na fotografia e descreve os planos longos e as composições em profundidade de Hou. O Smithsonian destaca também a encenação em profundidade. Isto sustenta uma escolha espacial, não uma objetiva ou duração exata."), sourceIds: ["ucla-city","smithsonian-hou"] },
      { id: "sadness-sync", area: "sound", prompt: t("Which sound-recording method reflects Tu Duu-Chih's documented contribution to the production?", "Hvilken lydopptaksmetode gjenspeiler Tu Duu-Chihs dokumenterte bidrag til produksjonen?", "Quelle méthode de prise de son correspond à la contribution documentée de Tu Duu-Chih ?", "Que método de captação sonora reflete o contributo documentado de Tu Duu-Chih?"), options: [{ id: "studio-replace", label: t("Replace every location performance with dialogue recorded later in a studio", "Erstatt alle stedlige skuespillerprestasjoner med replikker tatt opp senere i studio", "Remplacer toutes les performances sur place par des dialogues enregistrés ensuite en studio", "Substituir todas as interpretações no local por diálogos gravados depois em estúdio") },
          { id: "sync-location", label: t("Record synchronized sound during filming and coordinate the sound and camera departments", "Ta opp synkronlyd under filmingen og samordne lyd- og kameraavdelingen", "Enregistrer le son synchrone au tournage et coordonner les équipes son et image", "Gravar som síncrono durante a rodagem e coordenar as equipas de som e imagem") },
          { id: "music-only", label: t("Discard recorded speech and build the entire soundtrack from music alone", "Forkast taleopptakene og bygg hele lydsporet utelukkende av musikk", "Écarter les paroles enregistrées et construire toute la bande-son uniquement avec de la musique", "Descartar as falas gravadas e construir toda a banda sonora apenas com música") }], bestSupportedOptionId: "sync-location", explanation: t("Tu's Taipei Times interview and National Culture and Arts Foundation profile describe the production as a milestone for synchronized sound in Taiwanese cinema. Recording alongside the image helps retain the voices and rhythms of performance; it does not mean that no sound editing or later mixing occurred.", "Tus intervju i Taipei Times og profilen hos National Culture and Arts Foundation beskriver produksjonen som en milepæl for synkronlyd i taiwansk film. Opptak sammen med bildet bevarer stemmer og rytme, men utelukker ikke lydredigering og senere miks.", "L'entretien de Tu au Taipei Times et son profil à la fondation nationale des arts décrivent un tournant du son synchrone à Taïwan. La prise simultanée conserve les voix et rythmes du jeu, sans exclure montage sonore ni mixage ultérieur.", "A entrevista de Tu ao Taipei Times e o perfil na fundação nacional das artes descrevem um marco do som síncrono em Taiwan. A gravação simultânea preserva as vozes e ritmos da interpretação, sem excluir edição sonora ou mistura posterior."), sourceIds: ["tu-interview","tu-award"] },
      { id: "sadness-history", area: "research", prompt: t("How can a fictional family story represent historical upheaval without claiming that every scene is documentary evidence?", "Hvordan kan en fiktiv familiehistorie skildre historiske omveltninger uten å påstå at hver scene er dokumentariske bevis?", "Comment un récit familial fictif peut-il représenter un bouleversement historique sans présenter chaque scène comme preuve documentaire ?", "Como pode uma história familiar fictícia representar uma transformação histórica sem apresentar cada cena como prova documental?"), options: [{ id: "fiction-as-record", label: t("Treat every fictional conversation as a verified transcript of historical events", "Behandle hver fiktive samtale som en verifisert utskrift av historiske hendelser", "Traiter chaque conversation fictive comme une transcription historique vérifiée", "Tratar cada conversa fictícia como uma transcrição histórica verificada") },
          { id: "erase-languages", label: t("Remove linguistic differences and explain all historical changes through a single narrator", "Fjern språkforskjellene og forklar alle historiske endringer gjennom én forteller", "Supprimer les différences linguistiques et expliquer tous les changements par un narrateur unique", "Eliminar diferenças linguísticas e explicar todas as mudanças através de um único narrador") },
          { id: "family-perspective", label: t("Show consequences through family life, varied languages, written text and offscreen events; verify history separately", "Vis konsekvenser gjennom familieliv, ulike språk, skrift og hendelser utenfor bildet; etterprøv historien separat", "Montrer les conséquences par la vie familiale, les langues, l'écrit et le hors-champ ; vérifier l'histoire séparément", "Mostrar consequências através da vida familiar, línguas, textos e acontecimentos fora de campo; verificar a história separadamente") }], bestSupportedOptionId: "family-perspective", explanation: t("Harvard Film Archive and UCLA describe how the film brings political change into everyday family life while leaving major events largely offscreen. Harvard also notes written text, voiceover and multiple languages. These are narrative strategies; independently sourced historical records are needed to establish historical facts.", "Harvard Film Archive og UCLA beskriver hvordan filmen lar politiske endringer prege familiens hverdag mens store hendelser i stor grad foregår utenfor bildet. Harvard fremhever også skrift, fortellerstemme og flere språk. Dette er fortellergrep; historiske fakta må etterprøves med uavhengige kilder.", "Harvard et l'UCLA décrivent les conséquences politiques dans la vie familiale, tandis que les événements majeurs restent surtout hors champ. Harvard souligne aussi l'écrit, la voix off et les langues. Ces procédés narratifs ne remplacent pas des sources historiques indépendantes.", "Harvard e a UCLA descrevem as consequências políticas na vida familiar, com grandes acontecimentos sobretudo fora de campo. Harvard destaca ainda texto, voz off e línguas. Estes recursos narrativos não substituem fontes históricas independentes."), sourceIds: ["harvard-city","ucla-city"] }
    ]
  },
  {
    scenarioId: "scenario_vive_l_amour_1994",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("Vive L'Amour (1994) makes physical proximity and emotional distance perceptible through urban space, sparse sound and sustained performance. Explore Tsai Ming-liang's craft choices and distinguish documented production decisions from interpretation.", "Vive L'Amour (1994) gjør fysisk nærhet og følelsesmessig avstand merkbar gjennom byrom, sparsom lyd og langvarig skuespill. Utforsk Tsai Ming-liangs håndverksvalg og skill dokumenterte produksjonsvalg fra fortolkning.", "Vive L'Amour (1994) rend sensibles la proximité physique et la distance émotionnelle par l'espace urbain, le son épuré et le jeu prolongé. Explorez les choix de Tsai Ming-liang en distinguant production documentée et interprétation.", "Vive L'Amour (1994) torna sensíveis a proximidade física e a distância emocional através do espaço urbano, do som contido e da interpretação prolongada. Explore as escolhas de Tsai Ming-liang distinguindo produção documentada e interpretação."),
    sources: [
  {
    "id": "rabbit-interview",
    "title": "Vive l’amour at 30: Tsai Ming-liang revisits his intoxicating masterpiece",
    "publisher": "A Rabbit's Foot",
    "url": "https://a-rabbitsfoot.com/editorial/confessions/vive-lamour-at-30-tsai-ming-liang-revisits-his-intoxicating-masterpiece/"
  },
  {
    "id": "bfi-tsai",
    "title": "Tsai Ming-liang: 90 minutes with the slow cinema master",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/interviews/tsai-ming-liang-deserted"
  },
  {
    "id": "eye-vive",
    "title": "Vive l’amour — programme and collection screening",
    "publisher": "Eye Filmmuseum",
    "url": "https://www.eyefilm.nl/en/whats-on/vive-lamour/1377555"
  },
  {
    "id": "film-movement",
    "title": "Vive L'Amour — restoration and film synopsis",
    "publisher": "Film Movement",
    "url": "https://filmmovement.com/product/vive-l-amour"
  },
  {
    "id": "senses-tsai",
    "title": "Tsai Ming-Liang: Cinematic Painter",
    "publisher": "Senses of Cinema",
    "url": "https://www.sensesofcinema.com/2002/tsai-ming-liang/tsai_painter/"
  }
],
    questions: [
      { id: "vive-location", area: "research", prompt: t("What response to the unfinished park is supported by Tsai's account of filming the ending?", "Hvilken reaksjon på den uferdige parken støttes av Tsais beretning om innspillingen av slutten?", "Quelle réaction au parc inachevé est étayée par le récit de Tsai sur le tournage de la fin ?", "Que reação ao parque inacabado é sustentada pelo relato de Tsai sobre a rodagem do final?"), options: [{ id: "force-planned-ending", label: t("Hide all construction traces and retain the originally hopeful ending", "Skjul alle spor etter byggearbeidet og behold den opprinnelig optimistiske avslutningen", "Masquer les traces du chantier et conserver la fin initialement optimiste", "Ocultar os vestígios das obras e manter o final inicialmente otimista") },
          { id: "adapt-to-place", label: t("Reconsider the emotional direction of the ending in response to the actual unfinished location", "Revurder avslutningens følelsesmessige retning ut fra det virkelige, uferdige opptaksstedet", "Repenser la direction émotionnelle de la fin en fonction du lieu réel inachevé", "Repensar a direção emocional do final em função do local real inacabado") },
          { id: "replace-with-studio", label: t("Replace the park with a generic studio interior without considering its meaning", "Erstatt parken med et generisk studiointeriør uten å vurdere stedets betydning", "Remplacer le parc par un intérieur de studio générique sans considérer son sens", "Substituir o parque por um interior genérico de estúdio sem considerar o seu significado") }], bestSupportedOptionId: "adapt-to-place", explanation: t("In his 2024 interview Tsai recalls planning a more optimistic ending at Daan Park, then changing it after finding the park still under construction. His BFI interview also confirms that the released ending differed from the script. The location became a creative constraint rather than a neutral backdrop.", "I intervjuet fra 2024 forteller Tsai at han planla en mer optimistisk avslutning i Daan-parken, men endret den da parken fortsatt var under bygging. BFI-intervjuet bekrefter også at slutten ble annerledes enn manuset. Stedet ble en kreativ ramme fremfor en nøytral bakgrunn.", "Dans son entretien de 2024, Tsai explique avoir envisagé une fin plus optimiste au parc Daan, puis l'avoir modifiée en découvrant le chantier. L'entretien au BFI confirme aussi l'écart avec le scénario. Le lieu devient une contrainte créative.", "Na entrevista de 2024, Tsai recorda ter planeado um final mais otimista no parque Daan e tê-lo alterado ao encontrar as obras. A entrevista ao BFI confirma também a diferença face ao argumento. O lugar torna-se uma condição criativa."), sourceIds: ["rabbit-interview","bfi-tsai"] },
      { id: "vive-duration", area: "camera", prompt: t("How can the final performance be filmed without prescribing a fixed emotional rhythm to the actor?", "Hvordan kan den avsluttende skuespillerprestasjonen filmes uten å påtvinge skuespilleren en fast følelsesrytme?", "Comment filmer la dernière performance sans imposer un rythme émotionnel fixe à l'actrice ?", "Como filmar a interpretação final sem impor um ritmo emocional fixo à atriz?"), options: [{ id: "reaction-montage", label: t("Build the moment from many brief reaction shots chosen before the performance", "Bygg øyeblikket av mange korte reaksjonsbilder bestemt før skuespillerprestasjonen", "Construire le moment à partir de brefs plans de réaction décidés avant le jeu", "Construir o momento com breves planos de reação decididos antes da interpretação") },
          { id: "narrator-explains", label: t("Have a narrator announce each emotional shift before it occurs", "La en forteller varsle hver følelsesendring før den inntreffer", "Faire annoncer chaque changement émotionnel par un narrateur", "Usar um narrador para anunciar cada mudança emocional") },
          { id: "allow-duration", label: t("Allow the actor room to develop the performance within a sustained take", "Gi skuespilleren rom til å utvikle prestasjonen i en sammenhengende tagning", "Laisser à l'actrice la liberté de développer son jeu dans une prise prolongée", "Dar à atriz espaço para desenvolver a interpretação num plano prolongado") }], bestSupportedOptionId: "allow-duration", explanation: t("Tsai recalls giving Yang Kuei-mei simple direction and allowing her to shape the moment within the remaining film stock. Senses of Cinema discusses how the finished long take lets the viewer experience duration itself. These accounts support sustained performance, without fixing a disputed exact running time or requiring personal distress from the actor.", "Tsai forteller at han ga Yang Kuei-mei en enkel regianvisning og lot henne forme øyeblikket innenfor den gjenværende filmrullen. Senses of Cinema analyserer hvordan den ferdige lange tagningen lar publikum erfare selve varigheten. Det gir rom for skuespillet uten å fastslå eksakt lengde eller kreve personlig belastning.", "Tsai se souvient avoir donné des indications simples à Yang Kuei-mei et lui avoir laissé façonner le moment dans la pellicule restante. Senses of Cinema analyse l'expérience de la durée dans la prise finale. Cela ne fixe ni une durée exacte ni une exigence de souffrance personnelle.", "Tsai recorda ter dado indicações simples a Yang Kuei-mei e deixado a atriz desenvolver o momento na película restante. Senses of Cinema analisa a experiência da duração no plano final. Isto não fixa uma duração exata nem exige sofrimento pessoal da atriz."), sourceIds: ["rabbit-interview","senses-tsai"] },
      { id: "vive-space-sound", area: "sound", prompt: t("How can sound and blocking express isolation inside a shared apartment without explanatory dialogue?", "Hvordan kan lyd og plassering av skuespillere uttrykke ensomhet i en delt leilighet uten forklarende dialog?", "Comment le son et la disposition des acteurs peuvent-ils exprimer l'isolement dans un appartement partagé sans dialogue explicatif ?", "Como podem o som e a disposição dos atores expressar isolamento num apartamento partilhado sem diálogo explicativo?"), options: [{ id: "ambient-gestures", label: t("Let separate movements, small gestures and environmental sounds carry the scene", "La separate bevegelser, små gester og omgivelseslyder bære scenen", "Laisser les mouvements séparés, les petits gestes et les sons ambiants porter la scène", "Deixar movimentos separados, pequenos gestos e sons ambientes conduzir a cena") },
          { id: "explain-all", label: t("Add continuous dialogue that explicitly explains every character's loneliness", "Legg til kontinuerlig dialog som eksplisitt forklarer ensomheten til hver figur", "Ajouter un dialogue continu expliquant explicitement la solitude de chaque personnage", "Acrescentar diálogo contínuo que explique explicitamente a solidão de cada personagem") },
          { id: "erase-environment", label: t("Remove every environmental sound and replace it with continuous explanatory narration", "Fjern alle omgivelseslyder og erstatt dem med kontinuerlig forklarende fortellerstemme", "Supprimer tous les sons ambiants et les remplacer par une narration explicative continue", "Eliminar todos os sons ambientes e substituí-los por narração explicativa contínua") }], bestSupportedOptionId: "ambient-gestures", explanation: t("Eye Filmmuseum emphasizes bodily gestures and city sounds in a film with little speech; Film Movement describes the carefully staged near-encounters in the vacant apartment. These observations support a sparse expressive soundtrack and spatial staging, not a claim about the exact microphone or recording system.", "Eye Filmmuseum fremhever kroppsspråk og bylyder i en film med lite tale; Film Movement beskriver de nøye iscenesatte nesten-møtene i den tomme leiligheten. Dette støtter et sparsomt, uttrykksfullt lydbilde og romlig iscenesettelse, ikke en påstand om bestemt mikrofon eller opptakssystem.", "Eye Filmmuseum souligne les gestes et les sons urbains dans un film peu dialogué ; Film Movement décrit les rencontres manquées dans l'appartement vide. Ces observations étayent un son expressif et une mise en scène spatiale, non un microphone ou système précis.", "Eye Filmmuseum destaca os gestos corporais e sons urbanos num filme com pouca fala; Film Movement descreve os encontros desencontrados no apartamento vazio. Isto sustenta um som expressivo e uma encenação espacial, não um microfone ou sistema de gravação específico."), sourceIds: ["eye-vive","film-movement"] }
    ]
  },
  {
    scenarioId: "scenario_peppermint_candy_1999",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("Peppermint Candy (1999) reverses the usual order of cause and effect to reconsider a fictional life within South Korean history. Explore Lee Chang-dong's shooting order, transitions and narrative construction.", "Peppermint Candy (1999) snur den vanlige rekkefølgen mellom årsak og virkning for å undersøke et fiktivt liv i sørkoreansk historie. Utforsk Lee Chang-dongs opptaksrekkefølge, overganger og fortellerstruktur.", "Peppermint Candy (1999) inverse l'ordre habituel des causes et des effets pour relire une vie fictive dans l'histoire sud-coréenne. Explorez l'ordre du tournage, les transitions et la construction narrative de Lee Chang-dong.", "Peppermint Candy (1999) inverte a ordem habitual de causas e efeitos para reconsiderar uma vida fictícia na história sul-coreana. Explore a ordem de rodagem, as transições e a construção narrativa de Lee Chang-dong."),
    sources: [
  {
    "id": "lee-shooting",
    "title": "Lee Chang-dong: Backwards and Forwards",
    "publisher": "FilmFestivals.com",
    "url": "https://www.filmfestivals.com/blog/editor/lee_chang_dong_backwards_and_forwards"
  },
  {
    "id": "lee-time",
    "title": "Lee Chang-dong in conversation with Phoebe Chen",
    "publisher": "Metrograph Journal",
    "url": "https://metrograph.com/lee-chang-dong-in-conversation-with-phoebe-chen/"
  },
  {
    "id": "lee-transitions",
    "title": "Lee Chang-dong E-Interview",
    "publisher": "AsianCineFest",
    "url": "https://asiancinefest.blogspot.com/2008/05/acf-108-lee-chang-dong-e-interview.html"
  },
  {
    "id": "kofic-candy",
    "title": "A Peppermint Candy — retrospective analysis",
    "publisher": "Korean Film Council",
    "url": "https://www.koreanfilm.or.kr/view/news.jsp?category=IN_FOCUS&seq=265"
  },
  {
    "id": "historical-study",
    "title": "The Cyclical Buildup of Historical Burdens: Reckonings in the Post-democratisation Era",
    "publisher": "Springer",
    "url": "https://link.springer.com/chapter/10.1007/978-3-031-27268-4_9"
  }
],
    questions: [
      { id: "peppermint-shooting", area: "research", prompt: t("Which production schedule reflects Lee's account of working with the lead actor?", "Hvilken opptaksplan samsvarer med Lees beskrivelse av arbeidet med hovedrolleinnehaveren?", "Quel ordre de tournage correspond au récit de Lee sur son travail avec l'acteur principal ?", "Que ordem de rodagem corresponde ao relato de Lee sobre o trabalho com o ator principal?"), options: [{ id: "chronological-shoot", label: t("Film the earlier life stages first and reverse them only during editing", "Film de tidlige livsfasene først og snu dem først under klippingen", "Tourner les premières étapes de la vie puis inverser leur ordre au montage", "Filmar primeiro as fases iniciais da vida e inverter a ordem apenas na montagem") },
          { id: "reverse-shoot", label: t("Follow the reverse order of the screenplay so performance develops toward the earlier life stages", "Følg manusets omvendte rekkefølge slik at skuespillet utvikles mot de tidligere livsfasene", "Suivre l'ordre inverse du scénario pour faire évoluer le jeu vers les premières étapes de la vie", "Seguir a ordem inversa do argumento para desenvolver a interpretação rumo às fases anteriores") },
          { id: "random-shoot", label: t("Choose a random shooting order without considering the performance arc", "Velg tilfeldig opptaksrekkefølge uten å vurdere skuespillets utvikling", "Choisir un ordre de tournage aléatoire sans tenir compte de l'évolution du jeu", "Escolher uma ordem de rodagem aleatória sem considerar a evolução da interpretação") }], bestSupportedOptionId: "reverse-shoot", explanation: t("Lee told FilmFestivals that the backward order guided both writing and filming, despite advice to shoot chronologically. He describes Sul Kyung-gu gradually discovering what the character had lost. This is a reported production choice, not a requirement for every nonlinear film.", "Lee fortalte FilmFestivals at den omvendte rekkefølgen styrte både manus og innspilling, til tross for råd om kronologisk opptak. Han beskriver hvordan Sul Kyung-gu gradvis forstod hva figuren hadde mistet. Dette er et dokumentert produksjonsvalg, ikke et krav til alle ikke-lineære filmer.", "Lee explique à FilmFestivals que l'ordre inverse guidait l'écriture et le tournage malgré les conseils contraires. Sul Kyung-gu découvrait progressivement ce que le personnage avait perdu. Ce choix rapporté n'est pas une règle universelle.", "Lee explicou à FilmFestivals que a ordem inversa orientou escrita e rodagem apesar dos conselhos contrários. Sul Kyung-gu descobriu gradualmente o que a personagem perdera. Esta escolha relatada não é uma regra universal."), sourceIds: ["lee-shooting"] },
      { id: "peppermint-transitions", area: "camera", prompt: t("How can recurring transition images make backward narrative time perceptible?", "Hvordan kan gjentatte overgangsbilder gjøre fortellingens baklengse tidsbevegelse merkbar?", "Comment des images de transition récurrentes rendent-elles perceptible le recul du temps narratif ?", "Como podem imagens de transição recorrentes tornar percetível o recuo do tempo narrativo?"), options: [{ id: "unrelated-inserts", label: t("Insert unrelated scenic footage with no consistent direction or motif", "Sett inn tilfeldige landskapsbilder uten gjennomgående retning eller motiv", "Insérer des paysages sans rapport ni direction ou motif récurrent", "Inserir paisagens sem relação nem direção ou motivo recorrente") },
          { id: "dates-only", label: t("Replace every visual transition with an explanatory date card alone", "Erstatt alle visuelle overganger med bare en forklarende datoplakat", "Remplacer chaque transition visuelle par un simple carton de date", "Substituir cada transição visual apenas por uma indicação de data") },
          { id: "repeated-motion", label: t("Use recurring reverse-motion railway landscape images as a visual link between chapters", "Bruk gjentatte baklengse bilder av jernbanelandskapet som visuell forbindelse mellom kapitlene", "Utiliser des paysages ferroviaires en mouvement inversé pour relier visuellement les chapitres", "Usar imagens recorrentes da paisagem ferroviária em movimento inverso para ligar os capítulos") }], bestSupportedOptionId: "repeated-motion", explanation: t("Lee describes the train as a way to make time visible. The Korean Film Council and historical scholarship identify the reverse-moving interludes as links between earlier chapters. The exercise concerns montage of landscape images, not recreating dangerous action or a particular camera rig.", "Lee beskriver toget som en måte å synliggjøre tid på. Korean Film Council og historieforskning identifiserer de baklengse overgangsbildene som forbindelser mellom tidligere kapitler. Oppgaven gjelder montasje av landskapsbilder, ikke gjenskaping av farlige handlinger eller en bestemt kamerarigg.", "Lee décrit le train comme un moyen de rendre le temps visible. Le Korean Film Council et la recherche historique identifient les interludes inversés comme liens entre les chapitres antérieurs. L'exercice porte sur le montage des paysages, non sur une action dangereuse ou un dispositif précis.", "Lee descreve o comboio como forma de tornar o tempo visível. O Korean Film Council e a investigação histórica identificam os interlúdios invertidos como ligações entre capítulos anteriores. O exercício trata da montagem de paisagens, não da recriação de ações perigosas ou de um equipamento específico."), sourceIds: ["lee-transitions","kofic-candy","historical-study"] },
      { id: "peppermint-causality", area: "research", prompt: t("How can the screenplay investigate historical causality while preserving the distinction between fiction and evidence?", "Hvordan kan manuset undersøke historiske årsakssammenhenger og samtidig skille fiksjon fra dokumentasjon?", "Comment le scénario peut-il explorer la causalité historique tout en distinguant fiction et preuve ?", "Como pode o argumento explorar a causalidade histórica mantendo a distinção entre ficção e prova?"), options: [{ id: "effect-before-cause", label: t("Present consequences before earlier choices, and verify the historical context independently", "Vis konsekvenser før tidligere valg, og etterprøv den historiske konteksten uavhengig", "Présenter les conséquences avant les choix antérieurs et vérifier indépendamment le contexte historique", "Apresentar consequências antes das escolhas anteriores e verificar o contexto histórico de forma independente") },
          { id: "fiction-proves-history", label: t("Use the fictional character's experiences as proof of every historical claim", "Bruk den fiktive figurens erfaringer som bevis for alle historiske påstander", "Utiliser les expériences du personnage fictif comme preuve de chaque affirmation historique", "Usar as experiências da personagem fictícia como prova de todas as afirmações históricas") },
          { id: "single-cause", label: t("Explain every character decision through one inevitable historical cause", "Forklar alle figurens valg gjennom én uunngåelig historisk årsak", "Expliquer chaque choix du personnage par une seule cause historique inévitable", "Explicar cada escolha da personagem por uma única causa histórica inevitável") }], bestSupportedOptionId: "effect-before-cause", explanation: t("In Metrograph, Lee explains that showing effects before causes changes how earlier choices are understood. The Korean Film Council situates the fiction against South Korea's political transformation. Context can illuminate character choices without turning fiction into an archive or implying that history excuses harm.", "I Metrograph forklarer Lee at konsekvenser før årsaker endrer forståelsen av tidligere valg. Korean Film Council plasserer fiksjonen i Sør-Koreas politiske omveltninger. Konteksten kan belyse figurens valg uten å gjøre fiksjonen til et arkiv eller antyde at historien unnskylder skade.", "Dans Metrograph, Lee explique que montrer les effets avant les causes modifie la lecture des choix antérieurs. Le Korean Film Council situe la fiction dans les transformations politiques sud-coréennes. Le contexte éclaire les choix sans transformer la fiction en archive ni excuser les torts.", "Na Metrograph, Lee explica que mostrar efeitos antes das causas altera a leitura das escolhas anteriores. O Korean Film Council situa a ficção nas transformações políticas sul-coreanas. O contexto esclarece escolhas sem transformar a ficção em arquivo nem desculpar danos."), sourceIds: ["lee-time","kofic-candy"] }
    ]
  }
] as const;

export const SOURCE_BACKED_CASE_WORKSHOPS: readonly SourceBackedCaseWorkshop[] = workshops;

export function getSourceBackedCaseWorkshop(
  scenarioId: string
): SourceBackedCaseWorkshop | undefined {
  return workshops.find((workshop) => workshop.scenarioId === scenarioId);
}

export function isBestSupportedWorkshopOption(
  question: WorkshopQuestion,
  optionId: string
): boolean {
  return question.bestSupportedOptionId === optionId;
}
