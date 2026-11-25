import type { FilmWorkLanguage } from "../../core/filmWorkLanguage.js";

/**
 * Thirty-one pre-existing Production Cases receive evidence-backed craft decisions.
 *
 * These are OPTIONAL learning exercises, not replacements for their canonical
 * six-mission Production Cases. They do not mutate progress, unlock gameplay,
 * or change a case's existing verification status.
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
  },
  {
    scenarioId: "scenario_all_the_beauty_and_the_bloodshed_2022",
    status: "editorial_learning_exercise_not_case_verified",
    introduction: t("All the Beauty and the Bloodshed (2022) combines intimate audio interviews, Nan Goldin's photographic work and contemporary activism. Explore documentary collaboration, the integrity of archival images and thematic editing.", "All the Beauty and the Bloodshed (2022) kombinerer fortrolige lydintervjuer, Nan Goldins fotografiske arbeid og samtidsaktivisme. Utforsk dokumentarsamarbeid, arkivbildenes integritet og tematisk klipping.", "All the Beauty and the Bloodshed (2022) associe entretiens sonores intimes, travail photographique de Nan Goldin et militantisme contemporain. Explorez la collaboration documentaire, l'intégrité des archives et le montage thématique.", "All the Beauty and the Bloodshed (2022) combina entrevistas sonoras íntimas, o trabalho fotográfico de Nan Goldin e ativismo contemporâneo. Explore a colaboração documental, a integridade das imagens de arquivo e a montagem temática."),
    sources: [
  {
    "id": "poitras-pov",
    "title": "Laura Poitras on All the Beauty and the Bloodshed and Harnessing Nan Goldin's Fight",
    "publisher": "POV Magazine",
    "url": "https://povmagazine.com/laura-poitras-on-all-the-beauty-and-the-bloodshed-and-harnessing-nan-goldins-fight/"
  },
  {
    "id": "schulman-criterion",
    "title": "All the Beauty and the Bloodshed: The Highest Stakes",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/8413-all-the-beauty-and-the-bloodshed-the-highest-stakes"
  },
  {
    "id": "poitras-vogue",
    "title": "All the Beauty and the Bloodshed Is So Much More Than a Portrait of an Artist",
    "publisher": "Vogue magazine",
    "url": "https://www.vogue.com/article/all-the-beauty-and-the-bloodshed-laura-poitras-interview"
  },
  {
    "id": "poitras-berliner",
    "title": "Beauty, bloodshed, risk, refuge: Laura Poitras on her film about Nan Goldin",
    "publisher": "The Berliner",
    "url": "https://www.the-berliner.com/film/laura-poitras-interview-nan-goldin-all-the-beauty-and-the-bloodshed/"
  },
  {
    "id": "praxis-credits",
    "title": "All the Beauty and the Bloodshed — production credits",
    "publisher": "Praxis Films",
    "url": "https://www.praxisfilms.org/films/all-the-beauty-and-the-bloodshed"
  }
],
    questions: [
      { id: "beauty-audio", area: "sound", prompt: t("Which interview setup reflects Poitras's documented approach to Goldin's personal recollections?", "Hvilket intervjuoppsett samsvarer med Poitras’ dokumenterte tilnærming til Goldins personlige minner?", "Quel dispositif d'entretien correspond à l'approche documentée de Poitras des souvenirs personnels de Goldin ?", "Que configuração de entrevista corresponde à abordagem documentada de Poitras às memórias pessoais de Goldin?"), options: [{ id: "large-crew", label: t("Bring a large lighting and camera crew into each intimate conversation", "Ta med et stort lys- og kamerateam inn i hver fortrolige samtale", "Faire intervenir une grande équipe image et lumière dans chaque conversation intime", "Levar uma grande equipa de imagem e luz para cada conversa íntima") },
          { id: "audio-conversation", label: t("Agree on an audio-only conversation and allow pauses to remain meaningful", "Avtal en samtale med bare lydopptak og la pausene beholde sin betydning", "Convenir d'un entretien sonore sans caméra et respecter le sens des silences", "Combinar uma conversa apenas com som e respeitar o significado das pausas") },
          { id: "script-testimony", label: t("Replace the participant's recollections with scripted narration by another performer", "Erstatt deltakerens minner med manusfestet fortellerstemme fra en annen utøver", "Remplacer les souvenirs de la participante par une narration écrite jouée par une autre personne", "Substituir as memórias da participante por narração escrita interpretada por outra pessoa") }], bestSupportedOptionId: "audio-conversation", explanation: t("Poitras told POV that the intimacy of the recorded voice and pauses persuaded her to keep the conversations audio-only, rather than introducing cameras and lights. In a learning exercise, agree on recording conditions and respect a participant's ability to pause or decline; intimacy is not a license to demand disclosure.", "Poitras fortalte POV at nærheten i stemmen og pausene fikk henne til å beholde samtalene som rene lydopptak fremfor å innføre kamera og lys. I en læringsoppgave skal opptaksvilkår avtales, og deltakeren kunne ta pause eller avslå. Nærhet gir ingen rett til å kreve personlige betroelser.", "Poitras explique à POV que l'intimité de la voix et des silences l'a conduite à conserver des entretiens uniquement sonores. Pour un exercice, convenir des conditions d'enregistrement et respecter le droit de faire une pause ou de refuser ; l'intimité n'autorise pas à exiger des confidences.", "Poitras explicou à POV que a intimidade da voz e das pausas a levou a manter entrevistas apenas sonoras. Num exercício, combinar as condições de gravação e respeitar o direito de fazer uma pausa ou recusar; a intimidade não autoriza exigir confidências."), sourceIds: ["poitras-pov","poitras-vogue"] },
      { id: "beauty-archive", area: "research", prompt: t("How should the edit present Goldin's photographs while preserving their authorship and visual integrity?", "Hvordan bør klippingen presentere Goldins fotografier og bevare deres opphav og visuelle integritet?", "Comment le montage peut-il présenter les photographies de Goldin en préservant leur attribution et leur intégrité visuelle ?", "Como deve a montagem apresentar as fotografias de Goldin preservando a autoria e a integridade visual?"), options: [{ id: "crop-for-motion", label: t("Crop and zoom every photograph to imitate a moving camera", "Beskjær og zoom inn i hvert fotografi for å etterligne et bevegelig kamera", "Recadrer et agrandir chaque photographie pour imiter une caméra mobile", "Recortar e ampliar cada fotografia para imitar uma câmara em movimento") },
          { id: "anonymous-archive", label: t("Treat photographs as anonymous illustrations without attribution or contextual review", "Behandle fotografiene som anonyme illustrasjoner uten kreditering eller kontekstgjennomgang", "Traiter les photographies comme des illustrations anonymes sans attribution ni examen du contexte", "Tratar as fotografias como ilustrações anónimas sem atribuição nem revisão do contexto") },
          { id: "respect-frame", label: t("Retain the full photographic frame and slideshow character, collaborating with the artist", "Behold hele fotografiets utsnitt og lysbildefremvisningens karakter i samarbeid med kunstneren", "Conserver le cadre photographique entier et le caractère du diaporama en collaboration avec l'artiste", "Conservar o enquadramento fotográfico integral e o carácter da projeção em colaboração com a artista") }], bestSupportedOptionId: "respect-frame", explanation: t("Sarah Schulman's Criterion essay describes retaining the photograph edges and slideshow form rather than cropping or zooming. Poitras also describes Goldin's participation in selecting images and reviewing edits. For a new project, verify permissions and credits separately; collaboration alone does not establish every archival right.", "Sarah Schulmans Criterion-essay beskriver bevarte bildekanter og lysbildeformat fremfor beskjæring eller zoom. Poitras beskriver også Goldins bidrag til bildevalg og klippegjennomgang. I nye prosjekter må rettigheter og kreditering etterprøves separat; samarbeid alene dokumenterer ikke alle arkivrettigheter.", "L'essai de Sarah Schulman pour Criterion décrit la préservation des bords des images et du diaporama sans recadrage ni zoom. Poitras décrit aussi la participation de Goldin au choix des images et à la relecture du montage. Vérifier séparément les autorisations et les crédits de tout nouveau projet.", "O ensaio de Sarah Schulman para Criterion descreve a preservação dos limites das imagens e da projeção sem recorte ou ampliação. Poitras descreve a participação de Goldin na seleção e revisão da montagem. Num novo projeto, verificar separadamente autorizações e créditos."), sourceIds: ["schulman-criterion","poitras-vogue","praxis-credits"] },
      { id: "beauty-interweave", area: "research", prompt: t("Which editing structure reflects the relationship between the artist's earlier life and contemporary activism?", "Hvilken klippestruktur gjenspeiler forholdet mellom kunstnerens tidligere liv og samtidige aktivisme?", "Quelle structure de montage reflète le rapport entre la vie passée de l'artiste et son militantisme contemporain ?", "Que estrutura de montagem reflete a relação entre a vida anterior da artista e o ativismo contemporâneo?"), options: [{ id: "interwoven-strands", label: t("Interweave the present campaign and earlier life through carefully developed thematic connections", "Flett samtidens kampanje og tidligere liv sammen gjennom gjennomarbeidede tematiske forbindelser", "Entrelacer la campagne présente et la vie passée par des liens thématiques soigneusement élaborés", "Entrelaçar a campanha atual e a vida anterior através de ligações temáticas cuidadosamente elaboradas") },
          { id: "chronology-only", label: t("Separate the biography from activism into two strictly chronological unrelated blocks", "Skill biografi og aktivisme i to strengt kronologiske blokker uten sammenheng", "Séparer biographie et militantisme en deux blocs strictement chronologiques sans lien", "Separar biografia e ativismo em dois blocos estritamente cronológicos sem ligação") },
          { id: "erase-source", label: t("Replace all testimony and archive material with anonymous expert commentary", "Erstatt alle vitnesbyrd og arkivmateriale med anonyme ekspertkommentarer", "Remplacer tous les témoignages et archives par des commentaires anonymes d'experts", "Substituir todos os testemunhos e arquivos por comentários anónimos de especialistas") }], bestSupportedOptionId: "interwoven-strands", explanation: t("Poitras explains that the contemporary PAIN campaign was a narrative thread from the outset, while thematic connections developed in editing. Praxis credits Amy Foote, Joe Bini and Brian A. Kates as editors. Juxtaposition can illuminate relationships without equating distinct crises or substituting for independent verification of factual claims.", "Poitras forklarer at den samtidige PAIN-kampanjen var en fortellertråd fra starten, mens de tematiske forbindelsene utviklet seg under klippingen. Praxis krediterer Amy Foote, Joe Bini og Brian A. Kates som klippere. Sammenstilling kan belyse forbindelser uten å likestille ulike kriser eller erstatte uavhengig faktakontroll.", "Poitras explique que la campagne contemporaine de PAIN constituait dès le début un fil narratif, tandis que les liens thématiques se sont développés au montage. Praxis crédite Amy Foote, Joe Bini et Brian A. Kates. Le rapprochement ne remplace pas la vérification indépendante des faits.", "Poitras explica que a campanha contemporânea de PAIN era desde o início um fio narrativo e que as ligações temáticas se desenvolveram na montagem. Praxis credita Amy Foote, Joe Bini e Brian A. Kates. A justaposição não substitui a verificação independente dos factos."), sourceIds: ["poitras-berliner","praxis-credits"] }
    ]
  },
  {
    "scenarioId": "scenario_russian_ark_2002",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Russian Ark turns continuous camera movement into a production challenge joining digital recording, ensemble choreography and post-production. These choices teach the workflow without recreating its physical burden.",
      "nb": "Russian Ark gjør sammenhengende kamerabevegelse til en produksjonsutfordring som forener digitalopptak, ensemblekoreografi og etterarbeid. Valgene lærer arbeidsflyten uten å gjenskape den fysiske belastningen.",
      "fr": "Russian Ark transforme le mouvement continu en défi de captation numérique, de chorégraphie collective et de postproduction. L'exercice enseigne le processus sans reproduire l'effort physique.",
      "pt": "Russian Ark transforma o movimento contínuo num desafio de captação digital, coreografia coletiva e pós-produção. O exercício ensina o processo sem reproduzir o esforço físico."
    },
    "sources": [
      {
        "id": "production",
        "title": "Russian Ark — Production Notes",
        "publisher": "Cinema.com",
        "url": "https://cinema.com/articles/2015/russian-ark-production-notes.phtml"
      },
      {
        "id": "project",
        "title": "Russian Ark — project and credits",
        "publisher": "Alexander Sokurov / Hermitage Bridge Studio",
        "url": "https://sokurov.spb.ru/promo/russian_ark/en/ark_pln2.html"
      },
      {
        "id": "taz",
        "title": "Man entwickelt spezielle Muskeln",
        "publisher": "taz — die tageszeitung",
        "url": "https://taz.de/Man-entwickelt-spezielle-Muskeln/%21783542/"
      },
      {
        "id": "dff",
        "title": "Russian Ark: Tilman Büttner interview",
        "publisher": "Deutsches Filminstitut & Filmmuseum",
        "url": "https://www.dff.film/video/entfesselte-bilder-gespraech-mit-kameramann-tilman-buettner-von-russian-ark-2002/"
      },
      {
        "id": "cannes",
        "title": "Russian Ark — competition film record",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/russian-ark/"
      }
    ],
    "questions": [
      {
        "id": "ark-capture",
        "area": "camera",
        "prompt": {
          "en": "Which recording strategy addressed the planned feature-length uninterrupted camera movement?",
          "nb": "Hvilken opptaksstrategi løste behovet for en sammenhengende kamerabevegelse i spillefilmlengde?",
          "fr": "Quelle stratégie de captation répondait au mouvement continu prévu pour tout le film ?",
          "pt": "Que estratégia de captação respondia ao movimento contínuo previsto para toda a longa-metragem?"
        },
        "options": [
          {
            "id": "film-magazine",
            "label": {
              "en": "Rely on changing conventional film magazines during the continuous take",
              "nb": "Basere opptaket på skifte av tradisjonelle filmmagasiner under den sammenhengende tagningen",
              "fr": "Compter sur des changements de magasins de pellicule pendant la prise continue",
              "pt": "Depender de trocas de carregadores de película durante a tomada contínua"
            }
          },
          {
            "id": "disk",
            "label": {
              "en": "Plan continuous digital HD capture to a portable hard-disk recorder",
              "nb": "Planlegg sammenhengende digitalt HD-opptak til en bærbar harddiskopptaker",
              "fr": "Prévoir une captation HD numérique continue sur un enregistreur portable à disque dur",
              "pt": "Planear captação HD digital contínua num gravador portátil de disco rígido"
            }
          },
          {
            "id": "screening",
            "label": {
              "en": "Treat a hypothetical exhibition copy as the original camera recording medium",
              "nb": "Behandle en tenkt visningskopi som kameraets opprinnelige opptaksmedium",
              "fr": "Traiter une copie de projection hypothétique comme support original de captation",
              "pt": "Tratar uma cópia de exibição hipotética como suporte original de captação"
            }
          }
        ],
        "bestSupportedOptionId": "disk",
        "explanation": {
          "en": "The existing production-note dossier describes a portable prototype hard-disk recorder for feature-length uncompressed HD acquisition, because conventional film magazines and HD tape could not sustain the planned take. Keep acquisition separate from exhibition; exact camera and recorder models remain unspecified.",
          "nb": "De eksisterende produksjonsnotatene beskriver en bærbar harddiskprototype for ukomprimert HD i spillefilmlengde, fordi vanlige filmmagasiner og HD-bånd ikke kunne romme tagningen. Skill opptak fra visning; eksakte kamera- og opptakermodeller er ikke fastslått.",
          "fr": "Le dossier de production décrit un prototype portable à disque dur pour une captation HD non compressée de longue durée, les magasins et bandes HD ordinaires étant insuffisants. Distinguez captation et projection ; les modèles exacts restent indéterminés.",
          "pt": "O dossier de produção descreve um protótipo portátil de disco rígido para captação HD não comprimida de longa duração, pois os carregadores e fitas HD comuns eram insuficientes. Separe captação e exibição; os modelos exatos permanecem indeterminados."
        },
        "sourceIds": [
          "production",
          "project"
        ]
      },
      {
        "id": "ark-choreography",
        "area": "research",
        "prompt": {
          "en": "How can a crew prepare a continuous scene across several rooms with a limited location-access window?",
          "nb": "Hvordan kan et team forberede en sammenhengende scene gjennom flere rom når tilgangen til stedet er begrenset?",
          "fr": "Comment préparer une scène continue traversant plusieurs salles avec un accès limité au lieu ?",
          "pt": "Como preparar uma cena contínua em várias salas com acesso limitado ao local?"
        },
        "options": [
          {
            "id": "improvise",
            "label": {
              "en": "Leave transitions and performer movements entirely unplanned until recording begins",
              "nb": "La overganger og skuespillerbevegelser være helt uplanlagt til opptaket starter",
              "fr": "Laisser toutes les transitions et déplacements sans préparation avant la prise",
              "pt": "Deixar todas as transições e movimentos sem planeamento até à gravação"
            }
          },
          {
            "id": "museum",
            "label": {
              "en": "Use original museum objects as handling props without permission",
              "nb": "Bruk originale museumsgjenstander som rekvisitter uten tillatelse",
              "fr": "Manipuler les objets originaux du musée comme accessoires sans autorisation",
              "pt": "Usar objetos originais do museu como adereços sem autorização"
            }
          },
          {
            "id": "rehearse",
            "label": {
              "en": "Rehearse sections and transitions, coordinate cues, and protect the location and crew",
              "nb": "Øv på delscener og overganger, samordne signaler og beskytt opptakssted og team",
              "fr": "Répéter les sections et transitions, coordonner les repères et protéger le lieu et l'équipe",
              "pt": "Ensaiar secções e transições, coordenar sinais e proteger o local e a equipa"
            }
          }
        ],
        "bestSupportedOptionId": "rehearse",
        "explanation": {
          "en": "The existing production notes describe advance preparation and a one-day shoot, and Büttner's interview describes a moving support team and aborted starts. DFF contextualizes the scale. For an exercise use a short authorized route, safe movement, consent and breaks instead of reproducing the physical demands.",
          "nb": "Produksjonsnotatene beskriver forberedelser og én opptaksdag; Büttners intervju beskriver et bevegelig støtteteam og avbrutte forsøk. DFF setter omfanget i kontekst. Bruk en kort godkjent rute, trygg bevegelse, samtykke og pauser i øvelsen.",
          "fr": "Les notes décrivent la préparation et une journée de tournage ; Büttner décrit une équipe mobile et des tentatives interrompues. DFF contextualise l'échelle. Prévoir un parcours court autorisé, des déplacements sûrs, le consentement et des pauses.",
          "pt": "As notas descrevem preparação e um dia de rodagem; Büttner descreve uma equipa móvel e tentativas interrompidas. DFF contextualiza a escala. Use um percurso curto autorizado, movimentos seguros, consentimento e pausas."
        },
        "sourceIds": [
          "production",
          "taz",
          "dff"
        ]
      },
      {
        "id": "ark-post",
        "area": "sound",
        "prompt": {
          "en": "What does the uninterrupted picture take establish about the film's sound and finishing workflow?",
          "nb": "Hva fastslår den sammenhengende bildetagningen om filmens lyd- og ferdigstillingsarbeid?",
          "fr": "Que démontre la prise d'image continue sur le son et la finition du film ?",
          "pt": "O que demonstra a tomada de imagem contínua sobre o som e a finalização?"
        },
        "options": [
          {
            "id": "finish",
            "label": {
              "en": "Preserve continuous picture time while separately planning sound mixing and colour finishing",
              "nb": "Bevar sammenhengende bildetid samtidig som lydmiks og fargebearbeiding planlegges separat",
              "fr": "Préserver le temps continu de l'image tout en planifiant séparément mixage et étalonnage",
              "pt": "Preservar o tempo contínuo da imagem e planear separadamente mistura e correção de cor"
            }
          },
          {
            "id": "untouched",
            "label": {
              "en": "Assume the one-take film had no sound mixing or picture finishing",
              "nb": "Anta at filmen i én tagning verken hadde lydmiks eller bildeetterarbeid",
              "fr": "Supposer que le film en une prise n'a eu ni mixage ni finition de l'image",
              "pt": "Pressupor que o filme numa tomada não teve mistura nem finalização de imagem"
            }
          },
          {
            "id": "runtime",
            "label": {
              "en": "Treat different catalogue running times as proof of an undocumented picture cut",
              "nb": "Behandle ulike oppgitte spilletider som bevis på et udokumentert bildeklipp",
              "fr": "Traiter les durées divergentes comme preuve d'une coupe non documentée",
              "pt": "Tratar durações divergentes como prova de um corte não documentado"
            }
          }
        ],
        "bestSupportedOptionId": "finish",
        "explanation": {
          "en": "The official project credits distinguish digital imaging, colour correction, VFX and sound. Büttner's interview describes colour and brightness adjustment, visible-lamp removal and electronic reframing. A single take does not mean no post-production; the precise sound-sync and mix chain remain unspecified.",
          "nb": "Prosjektets offisielle kreditering skiller digital bildebehandling, fargekorrigering, VFX og lyd. Büttner beskriver justering av farge og lysstyrke, fjerning av synlige lamper og digital omramming. Én tagning betyr ikke fravær av etterarbeid; den nøyaktige lydkjeden er ikke fastslått.",
          "fr": "Le générique officiel distingue image numérique, étalonnage, effets et son. Büttner décrit des corrections de couleur et luminosité, le retrait de lampes visibles et le recadrage. Une prise unique n'exclut pas la postproduction ; la chaîne sonore exacte reste inconnue.",
          "pt": "Os créditos oficiais distinguem imagem digital, correção de cor, efeitos e som. Büttner descreve ajustes de cor e brilho, remoção de luzes visíveis e reenquadramento. Uma tomada única não elimina a pós-produção; a cadeia sonora exata permanece indeterminada."
        },
        "sourceIds": [
          "project",
          "taz"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_atanarjuat_the_fast_runner_2001",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore Inuit-led collaboration, oral-story adaptation and digital production using the film's existing reviewed source dossier, with respect for community authority.",
      "nb": "Utforsk inuittledet samarbeid, adaptasjon av muntlig fortellertradisjon og digital produksjon med filmens eksisterende kildegrunnlag og respekt for lokalsamfunnets myndighet.",
      "fr": "Explorer collaboration dirigée par les Inuits, adaptation orale et production numérique à partir du dossier existant, dans le respect de l'autorité communautaire.",
      "pt": "Explorar colaboração liderada pelos Inuit, adaptação oral e produção digital com o dossier existente, respeitando autoridade comunitária."
    },
    "sources": [
      {
        "id": "isuma-press",
        "title": "Atanarjuat (The Fast Runner) Press Kit",
        "publisher": "Igloolik Isuma Productions",
        "url": "https://www.isuma.tv/sites/default/themes/atanarjuat/files/Atan_presskit.pdf"
      },
      {
        "id": "isuma-facts",
        "title": "Facts at a glance — Atanarjuat",
        "publisher": "IsumaTV / Igloolik Isuma Productions",
        "url": "https://www.isuma.tv/en/atanarjuat/facts-glance"
      },
      {
        "id": "nfb",
        "title": "Atanarjuat the Fast Runner",
        "publisher": "National Film Board of Canada",
        "url": "https://www.nfb.ca/film/atanarjuat_the_fast_runner_en/"
      },
      {
        "id": "angilirq",
        "title": "Interview with Paul Apak Angilirq",
        "publisher": "IsumaTV / Igloolik Isuma Productions",
        "url": "https://www.isuma.tv/node/5555/"
      },
      {
        "id": "cannes",
        "title": "Atanarjuat The Fast Runner",
        "publisher": "Festival de Cannes",
        "url": "https://cinemadedemain.festival-cannes.com/en/f/atanarjuat-the-fast-runner/"
      }
    ],
    "questions": [
      {
        "id": "atanarjuat-oral",
        "area": "research",
        "prompt": {
          "en": "How can a screenplay adaptation respect the community knowledge behind an oral narrative?",
          "nb": "Hvordan kan en manusadaptasjon respektere lokalsamfunnets kunnskap bak en muntlig fortelling?",
          "fr": "Comment une adaptation peut-elle respecter les savoirs communautaires d'un récit oral ?",
          "pt": "Como pode uma adaptação respeitar os saberes comunitários de uma narrativa oral?"
        },
        "options": [
          {
            "id": "universal",
            "label": {
              "en": "Treat one published version as the definitive account and omit the other narrators",
              "nb": "Behandle én publisert versjon som den endelige fortellingen og utelat de andre fortellerne",
              "fr": "Traiter une version publiée comme définitive et écarter les autres narrateurs",
              "pt": "Tratar uma versão publicada como definitiva e excluir os outros narradores"
            }
          },
          {
            "id": "collaborate",
            "label": {
              "en": "Consult authorized storytellers, compare accounts, and review the adapted script together",
              "nb": "Rådfør deg med autoriserte fortellere, sammenlign versjoner og gjennomgå det adapterte manuset sammen",
              "fr": "Consulter les narrateurs autorisés, comparer les récits et relire ensemble le scénario adapté",
              "pt": "Consultar narradores autorizados, comparar relatos e rever em conjunto o argumento adaptado"
            }
          },
          {
            "id": "documentary",
            "label": {
              "en": "Present the dramatized screenplay as an exact documentary record of historical events",
              "nb": "Presenter det dramatiserte manuset som et eksakt dokumentarisk referat av historiske hendelser",
              "fr": "Présenter le scénario dramatisé comme un relevé documentaire exact des événements historiques",
              "pt": "Apresentar o argumento dramatizado como um registo documental exato dos acontecimentos históricos"
            }
          }
        ],
        "bestSupportedOptionId": "collaborate",
        "explanation": {
          "en": "The existing Isuma production dossier records Angilirq's interviews with eight elders, collaborative Inuktitut screenwriting and elder review. The NFB distinguishes the result from documentary. New exercises should use an original fictional story or material explicitly authorized by its knowledge holders; cultural knowledge is not automatically free to reproduce.",
          "nb": "Isumas eksisterende produksjonsdokumentasjon beskriver Angilirqs intervjuer med åtte eldre, samarbeid om manus på inuktitut og gjennomgang med eldre. NFB skiller resultatet fra dokumentarfilm. Nye øvelser bør bruke en egen fiktiv fortelling eller uttrykkelig godkjent materiale; kulturell kunnskap er ikke automatisk fritt tilgjengelig for gjengivelse.",
          "fr": "Le dossier Isuma décrit les entretiens d'Angilirq avec huit aînés, l'écriture collective en inuktitut et leur relecture. L'ONF distingue le résultat du documentaire. Utiliser une fiction originale ou des récits explicitement autorisés ; les savoirs culturels ne sont pas librement reproductibles par défaut.",
          "pt": "O dossier Isuma descreve entrevistas de Angilirq com oito anciãos, escrita coletiva em inuktitut e revisão pelos anciãos. O NFB distingue o resultado do documentário. Usar ficção original ou material expressamente autorizado; saberes culturais não são automaticamente livres para reprodução."
        },
        "sourceIds": [
          "isuma-press",
          "angilirq",
          "nfb"
        ]
      },
      {
        "id": "atanarjuat-crew",
        "area": "research",
        "prompt": {
          "en": "Which production plan best reflects the documented Inuit-led collaboration and local training?",
          "nb": "Hvilken produksjonsplan gjenspeiler best det dokumenterte inuittledede samarbeidet og den lokale opplæringen?",
          "fr": "Quel plan reflète le mieux la collaboration dirigée par les Inuits et la formation locale documentées ?",
          "pt": "Que plano reflete melhor a colaboração liderada pelos Inuit e a formação local documentadas?"
        },
        "options": [
          {
            "id": "external",
            "label": {
              "en": "Give visiting specialists all creative authority and assign local participants only background roles",
              "nb": "Gi tilreisende spesialister all kreativ myndighet og tildel lokale deltakere bare bakgrunnsroller",
              "fr": "Donner toute l'autorité créative aux spécialistes visiteurs et reléguer les participants locaux à l'arrière-plan",
              "pt": "Dar toda a autoridade criativa a especialistas visitantes e relegar participantes locais a papéis secundários"
            }
          },
          {
            "id": "fixed",
            "label": {
              "en": "Copy traditional objects from photographs without consulting their makers or community experts",
              "nb": "Kopier tradisjonelle gjenstander fra fotografier uten å rådføre deg med skapere eller lokalsamfunnets fagpersoner",
              "fr": "Copier des objets traditionnels depuis des photos sans consulter leurs créateurs ni experts communautaires",
              "pt": "Copiar objetos tradicionais de fotografias sem consultar criadores ou especialistas comunitários"
            }
          },
          {
            "id": "local",
            "label": {
              "en": "Plan local creative leadership, agreed training, credited craft expertise and safe location access",
              "nb": "Planlegg lokal kreativ ledelse, avtalt opplæring, kreditert håndverkskompetanse og trygg tilgang til opptakssteder",
              "fr": "Prévoir direction créative locale, formation convenue, savoir-faire crédité et accès sûr aux lieux",
              "pt": "Planear liderança criativa local, formação acordada, saber artesanal creditado e acesso seguro aos locais"
            }
          }
        ],
        "bestSupportedOptionId": "local",
        "explanation": {
          "en": "Isuma's press kit reports an all-Inuit cast, an approximately 90 percent Inuit technical crew, local trainees and collaboration with elders and artists on costumes, props and sets. These are production-specific accounts, not universal staffing quotas. A learning production must agree on authority, consent, compensation and appropriate permissions rather than reproduce culturally specific objects without authorization.",
          "nb": "Isumas pressepakke oppgir et utelukkende inuittisk skuespillerensemble, omtrent 90 prosent inuittisk teknisk team, lokal opplæring og samarbeid med eldre og kunstnere om kostymer, rekvisitter og scenografi. Dette er filmspesifikke opplysninger, ikke universelle bemanningskvoter. Avtal myndighet, samtykke, honorar og tillatelser fremfor å gjenskape kulturspesifikke gjenstander uten godkjenning.",
          "fr": "Le dossier Isuma indique une distribution entièrement inuite, une équipe technique inuite à environ 90 %, des stagiaires locaux et la collaboration d'aînés et d'artistes aux costumes et décors. Ce ne sont pas des quotas universels. Un exercice doit convenir de l'autorité, du consentement, de la rémunération et des autorisations.",
          "pt": "O dossier Isuma indica elenco inteiramente Inuit, equipa técnica aproximadamente 90% Inuit, formação local e colaboração de anciãos e artistas em figurinos e cenários. Não são quotas universais. Acordar autoridade, consentimento, remuneração e autorizações numa nova produção."
        },
        "sourceIds": [
          "isuma-press",
          "isuma-facts",
          "nfb"
        ]
      },
      {
        "id": "atanarjuat-format",
        "area": "camera",
        "prompt": {
          "en": "How should the film's digital acquisition and theatrical transfer be recorded in a production study?",
          "nb": "Hvordan bør filmens digitale opptak og kinooverføring dokumenteres i en produksjonsstudie?",
          "fr": "Comment documenter la captation numérique et le transfert cinéma dans une étude de production ?",
          "pt": "Como documentar a captação digital e a transferência para cinema num estudo de produção?"
        },
        "options": [
          {
            "id": "separate",
            "label": {
              "en": "Record Digital Betacam acquisition and the later 35mm transfer as distinct stages",
              "nb": "Registrer Digital Betacam-opptak og senere overføring til 35 mm som ulike faser",
              "fr": "Enregistrer la captation Digital Betacam et le transfert ultérieur en 35 mm comme étapes distinctes",
              "pt": "Registar captação Digital Betacam e transferência posterior para 35 mm como etapas distintas"
            }
          },
          {
            "id": "film",
            "label": {
              "en": "Assume a 35mm exhibition print proves the scenes were originally shot on film",
              "nb": "Anta at en 35 mm-visningskopi beviser at scenene opprinnelig ble filmet på filmrull",
              "fr": "Supposer qu'une copie 35 mm prouve une captation originale sur pellicule",
              "pt": "Pressupor que uma cópia de 35 mm prova captação original em película"
            }
          },
          {
            "id": "speculate",
            "label": {
              "en": "Invent the exact camera body, lens and transfer settings from the finished image",
              "nb": "Finn på eksakt kamerahus, objektiv og overføringsinnstillinger fra det ferdige bildet",
              "fr": "Inventer le boîtier, l'objectif et les réglages de transfert à partir de l'image finale",
              "pt": "Inventar corpo de câmara, objetiva e definições de transferência pela imagem final"
            }
          }
        ],
        "bestSupportedOptionId": "separate",
        "explanation": {
          "en": "The existing Isuma production dossier documents 16:9 Digital Betacam acquisition, and both Isuma and the NFB credit Digital Film Group for digital-to-film transfer. Cannes records the completed 172-minute feature. These records do not establish the exact camera body, lens, sound hardware or transfer settings. An exercise can plan a modern digital workflow without imitating hazardous location conditions.",
          "nb": "Isumas eksisterende produksjonsdokumentasjon oppgir Digital Betacam-opptak i 16:9, og både Isuma og NFB krediterer Digital Film Group for digital-til-film-overføring. Cannes oppgir en ferdig film på 172 minutter. Kildene fastslår ikke eksakt kamerahus, objektiv, lydutstyr eller overføringsinnstillinger. En øvelse kan planlegge et moderne digitalt opptak uten å etterligne farlige forhold på opptaksstedet.",
          "fr": "Le dossier Isuma indique une captation Digital Betacam 16:9 ; Isuma et l'ONF créditent Digital Film Group pour le transfert sur pellicule. Cannes indique 172 minutes. Ces notices n'établissent ni boîtier, ni objectif, ni matériel sonore précis. Un exercice peut proposer une captation moderne sans reproduire des conditions dangereuses.",
          "pt": "O dossier Isuma indica captação Digital Betacam 16:9; Isuma e NFB creditam Digital Film Group pela transferência para película. Cannes indica 172 minutos. Os registos não estabelecem câmara, objetiva, áudio ou parâmetros exatos. Um exercício pode planear captação moderna sem reproduzir condições perigosas."
        },
        "sourceIds": [
          "isuma-press",
          "nfb",
          "cannes"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_blacksmith_scene_1893",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Make a short staged work scene using the constraints of the Edison laboratory's fixed-camera production system. These exercises adapt evidence from the existing film dossier.",
      "nb": "Lag en kort iscenesatt arbeidsscene med utgangspunkt i Edison-laboratoriets faste kamera. Øvelsene bygger på filmens eksisterende kildemateriale.",
      "fr": "Réalisez une courte scène de travail mise en scène selon les contraintes de la caméra fixe du laboratoire Edison. Les exercices reprennent le dossier existant.",
      "pt": "Crie uma breve cena de trabalho encenada com as limitações da câmara fixa do laboratório Edison. Os exercícios retomam o dossier existente."
    },
    "sources": [
      {
        "id": "moma",
        "title": "Blacksmithing Scene",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/collection/works/316644"
      },
      {
        "id": "nps",
        "title": "Black Maria Grand Reopening",
        "publisher": "National Park Service",
        "url": "https://www.nps.gov/edis/learn/news/black-maria-reopening.htm"
      },
      {
        "id": "loc",
        "title": "National Film Registry descriptions and essays",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      }
    ],
    "questions": [
      {
        "id": "blacksmith-staging",
        "area": "research",
        "prompt": {
          "en": "How should you describe the performance filmed in Blacksmith Scene?",
          "nb": "Hvordan bør du beskrive fremføringen i Blacksmith Scene?",
          "fr": "Comment décrire la performance filmée dans Blacksmith Scene ?",
          "pt": "Como descrever a atuação filmada em Blacksmith Scene?"
        },
        "options": [
          {
            "id": "observed",
            "label": {
              "en": "An unarranged record of workers in their usual workplace",
              "nb": "Et uarrangert opptak av arbeidere på sin vanlige arbeidsplass",
              "fr": "Un enregistrement spontané d'ouvriers sur leur lieu de travail habituel",
              "pt": "Um registo espontâneo de operários no seu local habitual"
            }
          },
          {
            "id": "staged",
            "label": {
              "en": "Laboratory employees staging recognizable work for the camera",
              "nb": "Laboratorieansatte som iscenesetter gjenkjennelig arbeid for kameraet",
              "fr": "Des employés du laboratoire mettent en scène un travail reconnaissable",
              "pt": "Funcionários do laboratório encenam um trabalho reconhecível"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "A written screenplay whose exact dialogue survives",
              "nb": "Et bevart skriftlig manus med nøyaktig dialog",
              "fr": "Un scénario écrit dont les dialogues exacts subsistent",
              "pt": "Um argumento escrito com diálogos exatos preservados"
            }
          }
        ],
        "bestSupportedOptionId": "staged",
        "explanation": {
          "en": "The existing MoMA and Library of Congress dossier identifies the performers as Edison laboratory employees. Recognizable labor does not make the recording an unarranged actuality. A modern exercise can stage safe, nonhazardous gestures with consenting performers.",
          "nb": "Det eksisterende MoMA- og Library of Congress-materialet identifiserer utøverne som Edison-ansatte. Gjenkjennelig arbeid er ikke det samme som uarrangert virkelighet. En moderne øvelse kan iscenesette trygge bevegelser med samtykke.",
          "fr": "Le dossier MoMA et Library of Congress identifie des employés d'Edison. Un travail reconnaissable n'est pas nécessairement spontané. L'exercice moderne peut mettre en scène des gestes sans danger avec consentement.",
          "pt": "O dossier MoMA e Library of Congress identifica funcionários de Edison. Um trabalho reconhecível não é necessariamente espontâneo. O exercício moderno pode encenar gestos seguros com consentimento."
        },
        "sourceIds": [
          "moma",
          "loc"
        ]
      },
      {
        "id": "blacksmith-frame",
        "area": "camera",
        "prompt": {
          "en": "How can a fixed frame carry the work, pause and return to work?",
          "nb": "Hvordan kan et fast bilde romme arbeid, pause og gjenopptatt arbeid?",
          "fr": "Comment un cadre fixe peut-il montrer le travail, la pause et la reprise ?",
          "pt": "Como pode um enquadramento fixo mostrar o trabalho, a pausa e a retoma?"
        },
        "options": [
          {
            "id": "coverage",
            "label": {
              "en": "Record several close-ups and assemble the action through continuity cuts",
              "nb": "Ta flere nærbilder og bygg handlingen med kontinuitetsklipp",
              "fr": "Filmer plusieurs gros plans et construire l'action au montage",
              "pt": "Filmar vários planos próximos e montar a ação em continuidade"
            }
          },
          {
            "id": "moving",
            "label": {
              "en": "Follow each performer with a moving camera throughout the scene",
              "nb": "Følg hver utøver med bevegelig kamera gjennom scenen",
              "fr": "Suivre chaque interprète avec une caméra mobile",
              "pt": "Seguir cada intérprete com uma câmara móvel"
            }
          },
          {
            "id": "tableau",
            "label": {
              "en": "Arrange readable gestures and timing inside one stationary composition",
              "nb": "Ordne lesbare bevegelser og timing i én fast komposisjon",
              "fr": "Organiser des gestes lisibles et leur rythme dans un cadre immobile",
              "pt": "Organizar gestos legíveis e ritmo numa composição imóvel"
            }
          }
        ],
        "bestSupportedOptionId": "tableau",
        "explanation": {
          "en": "The existing MoMA dossier describes a fixed, single unedited take. Blocking and the sequence of visible actions therefore carry meaning without coverage or later continuity cutting. This is a staging exercise rather than a claim about a written script.",
          "nb": "MoMA-materialet beskriver én fast, uklippet tagning. Plassering og rekkefølgen av synlige handlinger bærer derfor meningen uten dekningsbilder eller kontinuitetsklipp. Dette er en iscenesettelsesøvelse, ikke en påstand om bevart manus.",
          "fr": "Le dossier MoMA décrit une prise fixe sans montage. Placement et succession des gestes portent le sens sans plans de couverture ni raccords. Il s'agit d'un exercice de mise en scène, non d'une affirmation sur un scénario écrit.",
          "pt": "O dossier MoMA descreve uma tomada fixa sem montagem. Posição e sequência dos gestos criam sentido sem planos de cobertura ou cortes de continuidade. É um exercício de encenação, não uma afirmação sobre argumento escrito."
        },
        "sourceIds": [
          "moma"
        ]
      },
      {
        "id": "blacksmith-light",
        "area": "camera",
        "prompt": {
          "en": "What production problem did the rotating Black Maria studio and opening roof address?",
          "nb": "Hvilket produksjonsproblem løste det roterbare Black Maria-studioet med åpningsbart tak?",
          "fr": "Quel problème résolvaient le studio Black Maria pivotant et son toit ouvrant ?",
          "pt": "Que problema resolviam o estúdio Black Maria rotativo e o teto móvel?"
        },
        "options": [
          {
            "id": "sunlight",
            "label": {
              "en": "Orient the set to use strong daylight for early photographic capture",
              "nb": "Orienter scenen mot dagslyset for tidlig fotografisk opptak",
              "fr": "Orienter le plateau pour exploiter la lumière naturelle en photographie",
              "pt": "Orientar o cenário para aproveitar a luz natural na captação"
            }
          },
          {
            "id": "sound",
            "label": {
              "en": "Isolate synchronized multitrack dialogue recording",
              "nb": "Isoler synkronisert dialogopptak på flere spor",
              "fr": "Isoler l'enregistrement multipiste synchrone des dialogues",
              "pt": "Isolar gravação multipista sincronizada dos diálogos"
            }
          },
          {
            "id": "projection",
            "label": {
              "en": "Turn the studio itself into a public projection screen",
              "nb": "Gjør selve studioet til et offentlig projeksjonslerret",
              "fr": "Transformer le studio en écran public de projection",
              "pt": "Transformar o estúdio num ecrã público de projeção"
            }
          }
        ],
        "bestSupportedOptionId": "sunlight",
        "explanation": {
          "en": "The National Park Service record in the existing dossier describes the studio's circular track and opening roof for maximum sunlight. Treat lighting as part of the production architecture; distinguish Kinetograph capture from Kinetoscope viewing. Use a safe indoor daylight test instead of reconstructing the machinery.",
          "nb": "National Park Service-materialet beskriver studioets sirkulære spor og takåpning for mest mulig sollys. Se lys som del av produksjonsarkitekturen; skill Kinetograph-opptak fra Kinetoscope-visning. Bruk en trygg dagslysprøve innendørs i stedet for å rekonstruere maskineriet.",
          "fr": "Le dossier National Park Service décrit la voie circulaire et le toit ouvrant pour maximiser la lumière. L'éclairage relève de l'architecture de production ; distinguez captation Kinetograph et visionnement Kinetoscope. Préférez un essai sûr en lumière naturelle.",
          "pt": "O dossier National Park Service descreve a via circular e o teto móvel para maximizar a luz. A iluminação integra a arquitetura de produção; distinga captação Kinetograph e visionamento Kinetoscope. Prefira um ensaio seguro com luz natural."
        },
        "sourceIds": [
          "nps",
          "moma"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_workers_leaving_lumiere_factory_1895",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Design a short actuality around a real threshold, a limited recording duration and different versions of a repeated event. The choices draw on the existing Lumière dossier.",
      "nb": "Utform en kort aktualitetsfilm rundt en virkelig terskel, begrenset opptakstid og ulike versjoner av en gjentatt hendelse. Valgene bygger på det eksisterende Lumière-materialet.",
      "fr": "Concevez une courte actualité autour d'un seuil réel, d'une durée limitée et de versions d'un événement répété. Les choix reprennent le dossier Lumière existant.",
      "pt": "Crie uma breve atualidade em torno de uma passagem real, duração limitada e versões de um acontecimento repetido. As escolhas retomam o dossier Lumière existente."
    },
    "sources": [
      {
        "id": "lumiere",
        "title": "Le Cinématographe Lumière",
        "publisher": "Institut Lumière",
        "url": "https://www.institut-lumiere.org/le-cinematographe-lumiere"
      },
      {
        "id": "bfi",
        "title": "In the beginning: cinema's murky origin story",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/origins-cinema-early-inventors-pioneers"
      },
      {
        "id": "loc",
        "title": "Documentary and Actuality Films",
        "publisher": "Library of Congress",
        "url": "https://guides.loc.gov/french-and-francophone-film/movements-and-genres/documentary-and-actuality"
      },
      {
        "id": "acmi",
        "title": "Workers Leaving the Lumiere Factory",
        "publisher": "Australian Centre for the Moving Image",
        "url": "https://www.acmi.net.au/works/5476--workers-leaving-the-lumiere-factory/"
      }
    ],
    "questions": [
      {
        "id": "lumiere-threshold",
        "area": "camera",
        "prompt": {
          "en": "How can a short fixed view organize people crossing a factory gate?",
          "nb": "Hvordan kan et kort, fast bilde organisere mennesker som passerer en fabrikkport?",
          "fr": "Comment organiser les passages à travers une porte d'usine dans un plan fixe bref ?",
          "pt": "Como organizar passagens por um portão de fábrica num plano fixo breve?"
        },
        "options": [
          {
            "id": "track",
            "label": {
              "en": "Track every individual through the street with a moving camera",
              "nb": "Følg hver enkelt gjennom gaten med bevegelig kamera",
              "fr": "Suivre chaque individu dans la rue avec une caméra mobile",
              "pt": "Seguir cada pessoa na rua com uma câmara móvel"
            }
          },
          {
            "id": "gate",
            "label": {
              "en": "Frame the threshold with room for movement and time the start of recording",
              "nb": "Ram inn porten med plass til bevegelse og planlegg opptaksstart",
              "fr": "Cadrer le seuil avec de l'espace pour le mouvement et choisir le début de prise",
              "pt": "Enquadrar a passagem com espaço para movimento e escolher o início da captação"
            }
          },
          {
            "id": "reverse",
            "label": {
              "en": "Use shot and reverse shot to explain every departure",
              "nb": "Bruk bilde og motbilde til å forklare hver avgang",
              "fr": "Employer champ et contrechamp pour expliquer chaque départ",
              "pt": "Usar campo e contracampo para explicar cada saída"
            }
          }
        ],
        "bestSupportedOptionId": "gate",
        "explanation": {
          "en": "The existing BFI and Institut Lumière records describe a portable apparatus with limited recording capacity. The factory-gate view uses fixed framing and movement within it. In an exercise, choose a safe authorized threshold and coordinate consent, timing and crowd space.",
          "nb": "BFI- og Institut Lumière-materialet beskriver et bærbart apparat med begrenset opptakskapasitet. Fabrikkportbildet bruker fast ramme og bevegelse inni den. Velg et trygt, godkjent sted og planlegg samtykke, timing og plass.",
          "fr": "Le dossier BFI et Institut Lumière décrit un appareil portable à capacité limitée. Le plan de la porte repose sur le cadre fixe et le mouvement interne. Choisissez un lieu autorisé et sûr, le consentement, le rythme et l'espace.",
          "pt": "O dossier BFI e Institut Lumière descreve um aparelho portátil de capacidade limitada. O plano do portão usa enquadramento fixo e movimento interno. Escolha um local seguro e autorizado, consentimento, ritmo e espaço."
        },
        "sourceIds": [
          "bfi",
          "lumiere"
        ]
      },
      {
        "id": "lumiere-versions",
        "area": "research",
        "prompt": {
          "en": "How should you handle the existence of different surviving factory-gate views?",
          "nb": "Hvordan bør du håndtere at ulike versjoner av fabrikkportbildet er bevart?",
          "fr": "Comment traiter l'existence de plusieurs vues conservées de la porte d'usine ?",
          "pt": "Como lidar com diferentes versões preservadas da vista do portão?"
        },
        "options": [
          {
            "id": "single",
            "label": {
              "en": "Treat every surviving copy as an identical record of one event",
              "nb": "Behandle alle bevarte kopier som identiske opptak av én hendelse",
              "fr": "Traiter chaque copie conservée comme le même enregistrement",
              "pt": "Tratar cada cópia preservada como registo idêntico"
            }
          },
          {
            "id": "fiction",
            "label": {
              "en": "Declare the film entirely fictional solely because versions differ",
              "nb": "Erklær filmen helt fiktiv bare fordi versjonene er ulike",
              "fr": "Déclarer le film entièrement fictif parce que les versions diffèrent",
              "pt": "Declarar o filme totalmente ficcional porque as versões diferem"
            }
          },
          {
            "id": "compare",
            "label": {
              "en": "Identify versions separately and compare their visible movement and framing",
              "nb": "Identifiser versjonene separat og sammenlign synlig bevegelse og innramming",
              "fr": "Identifier les versions séparément et comparer mouvement et cadre visibles",
              "pt": "Identificar versões separadamente e comparar movimento e enquadramento"
            }
          }
        ],
        "bestSupportedOptionId": "compare",
        "explanation": {
          "en": "The existing ACMI record catalogues distinct surviving versions. Library of Congress contextualizes actuality as produced nonfiction rather than inherently neutral evidence. Compare visible differences without inventing exact instructions to the people filmed.",
          "nb": "ACMI-materialet katalogfører ulike bevarte versjoner. Library of Congress plasserer aktualitetsfilmen som produsert sakprosa, ikke automatisk nøytralt bevis. Sammenlign synlige forskjeller uten å dikte opp instruksjoner til de filmede.",
          "fr": "Le dossier ACMI catalogue plusieurs versions conservées. Library of Congress situe l'actualité comme non-fiction produite, non comme preuve neutre par nature. Comparez les différences visibles sans inventer les consignes données aux personnes filmées.",
          "pt": "O dossier ACMI cataloga versões distintas preservadas. Library of Congress contextualiza a atualidade como não ficção produzida, não prova automaticamente neutra. Compare diferenças visíveis sem inventar instruções às pessoas filmadas."
        },
        "sourceIds": [
          "acmi",
          "loc"
        ]
      },
      {
        "id": "lumiere-apparatus",
        "area": "camera",
        "prompt": {
          "en": "What does the Cinématographe teach about capture, printing and exhibition?",
          "nb": "Hva lærer Cinématographe oss om opptak, kopiering og visning?",
          "fr": "Qu'enseigne le Cinématographe sur la captation, le tirage et la projection ?",
          "pt": "O que ensina o Cinématographe sobre captação, cópia e projeção?"
        },
        "options": [
          {
            "id": "system",
            "label": {
              "en": "Distinguish the apparatus functions and the conditions for each viewing event",
              "nb": "Skill apparatets funksjoner og vilkårene for hver visningshendelse",
              "fr": "Distinguer les fonctions de l'appareil et les conditions de chaque projection",
              "pt": "Distinguir funções do aparelho e condições de cada exibição"
            }
          },
          {
            "id": "only",
            "label": {
              "en": "Treat filming and public exhibition as the same historical event",
              "nb": "Behandle opptak og offentlig visning som samme historiske hendelse",
              "fr": "Assimiler tournage et projection publique au même événement",
              "pt": "Tratar filmagem e exibição pública como o mesmo acontecimento"
            }
          },
          {
            "id": "first",
            "label": {
              "en": "Declare every earlier moving-image system irrelevant to cinema history",
              "nb": "Erklær alle tidligere levende-bilde-systemer irrelevante for filmhistorien",
              "fr": "Déclarer tous les systèmes antérieurs sans rapport avec l'histoire du cinéma",
              "pt": "Declarar todos os sistemas anteriores irrelevantes para a história do cinema"
            }
          }
        ],
        "bestSupportedOptionId": "system",
        "explanation": {
          "en": "The existing Institut Lumière and BFI records place the apparatus in the development of recording and projected cinema, with distinct demonstration and commercial exhibition contexts. A useful production study separates these operations without claiming a universal first film.",
          "nb": "Institut Lumière- og BFI-materialet plasserer apparatet i utviklingen av opptak og projisert film, med forskjellige demonstrasjons- og kommersielle visningskontekster. Skill operasjonene uten å påstå at dette er verdens første film.",
          "fr": "Le dossier Institut Lumière et BFI situe l'appareil dans le développement de la captation et de la projection, avec des démonstrations et séances commerciales distinctes. Séparez ces opérations sans proclamer un premier film universel.",
          "pt": "O dossier Institut Lumière e BFI situa o aparelho no desenvolvimento da captação e projeção, com demonstrações e sessões comerciais distintas. Separe as operações sem proclamar um primeiro filme universal."
        },
        "sourceIds": [
          "lumiere",
          "bfi"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_fire_1901",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Williamson's rescue story connects separate places through action. Use an original, harmless storyboard to explore how editing builds a coherent journey.",
      "nb": "Williamsons redningsfortelling knytter ulike steder sammen gjennom handling. Bruk et eget, ufarlig storyboard for å utforske hvordan klipping skaper en sammenhengende reise.",
      "fr": "Le récit de sauvetage de Williamson relie des lieux distincts par l'action. Explorez la continuité du trajet dans un storyboard original et sans danger.",
      "pt": "A narrativa de salvamento de Williamson liga lugares distintos pela ação. Explore a continuidade do percurso num storyboard original e seguro."
    },
    "sources": [
      {
        "id": "sase",
        "title": "Fire! — archive record 8389",
        "publisher": "Screen Archive South East",
        "url": "https://screenarchive.brighton.ac.uk/detail/8389/"
      },
      {
        "id": "eastman",
        "title": "James Card Program #2: Development of the Narrative",
        "publisher": "George Eastman Museum",
        "url": "https://www.eastman.org/event/film-screenings/james-card-program-2-development-narrative-35mm-16mm"
      }
    ],
    "questions": [
      {
        "id": "fire-action-chain",
        "area": "research",
        "prompt": {
          "en": "How can several separate views become a single readable rescue narrative?",
          "nb": "Hvordan kan flere separate bilder bli en sammenhengende redningsfortelling?",
          "fr": "Comment plusieurs vues distinctes peuvent-elles former un récit de sauvetage lisible ?",
          "pt": "Como podem várias vistas separadas formar uma narrativa de salvamento legível?"
        },
        "options": [
          {
            "id": "random",
            "label": {
              "en": "Arrange unrelated images without a visible connection between actions",
              "nb": "Sett sammen urelaterte bilder uten synlig sammenheng mellom handlingene",
              "fr": "Assembler des images sans lien visible entre les actions",
              "pt": "Montar imagens sem ligação visível entre as ações"
            }
          },
          {
            "id": "sequence",
            "label": {
              "en": "Connect an alarm, response and arrival through successive readable compositions",
              "nb": "Knytt varsel, respons og ankomst sammen med lesbare komposisjoner i rekkefølge",
              "fr": "Relier alerte, réponse et arrivée par des compositions successives lisibles",
              "pt": "Ligar alerta, resposta e chegada por composições sucessivas legíveis"
            }
          },
          {
            "id": "static",
            "label": {
              "en": "Keep every stage of the story in one undifferentiated view",
              "nb": "Behold alle fortellingens stadier i ett udifferensiert bilde",
              "fr": "Garder toutes les étapes dans une seule vue indifférenciée",
              "pt": "Manter todas as etapas numa única vista indiferenciada"
            }
          }
        ],
        "bestSupportedOptionId": "sequence",
        "explanation": {
          "en": "The existing Screen Archive South East dossier describes the alarm, mobilization, journey and staged rescue. Eastman Museum places the film in the development of multi-scene narrative. Design a coherent chain of fictional actions, without claiming to reproduce the exact historical shot list.",
          "nb": "Screen Archive South East-materialet beskriver varsel, mobilisering, ferd og iscenesatt redning. Eastman Museum plasserer filmen i utviklingen av fortelling over flere scener. Lag en sammenhengende fiktiv handlingskjede uten å påstå at den gjengir den nøyaktige historiske klippelisten.",
          "fr": "Le dossier Screen Archive South East décrit l'alerte, la mobilisation, le trajet et le sauvetage mis en scène. Eastman Museum situe le film dans le développement du récit en plusieurs scènes. Construisez une chaîne fictive sans prétendre reproduire le découpage exact.",
          "pt": "O dossier Screen Archive South East descreve alerta, mobilização, percurso e salvamento encenado. Eastman Museum situa o filme no desenvolvimento da narrativa em várias cenas. Crie uma sequência fictícia sem alegar reproduzir a lista histórica de planos."
        },
        "sourceIds": [
          "sase",
          "eastman"
        ]
      },
      {
        "id": "fire-location",
        "area": "camera",
        "prompt": {
          "en": "What should a learner distinguish when a fictional event is staged in a real place?",
          "nb": "Hva må eleven skille mellom når en fiktiv hendelse iscenesettes på et virkelig sted?",
          "fr": "Que distinguer lorsqu'un événement fictif est mis en scène dans un lieu réel ?",
          "pt": "O que distinguir quando um acontecimento fictício é encenado num local real?"
        },
        "options": [
          {
            "id": "document",
            "label": {
              "en": "Treat real streets and buildings as proof that every event actually happened",
              "nb": "Behandle virkelige gater og bygninger som bevis for at hele hendelsen fant sted",
              "fr": "Prendre les lieux réels pour preuve que tout s'est réellement passé",
              "pt": "Tomar ruas e edifícios reais como prova de que tudo aconteceu"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore spatial relationships because the scene is fictional",
              "nb": "Ignorer romlige forbindelser fordi scenen er fiktiv",
              "fr": "Ignorer les relations spatiales puisque la scène est fictive",
              "pt": "Ignorar relações espaciais por se tratar de ficção"
            }
          },
          {
            "id": "distinguish",
            "label": {
              "en": "Separate the real location from the staged action and map the fictional geography",
              "nb": "Skill virkelig opptakssted fra iscenesatt handling og kartlegg det fiktive rommet",
              "fr": "Distinguer lieu réel et action mise en scène et schématiser l'espace fictif",
              "pt": "Distinguir local real de ação encenada e esquematizar o espaço fictício"
            }
          }
        ],
        "bestSupportedOptionId": "distinguish",
        "explanation": {
          "en": "The regional archive identifies Williamson's 1901 fiction production and its staged rescue. Real locations help make space legible without authenticating the fictional action. Draw a small location diagram for your own harmless story.",
          "nb": "Det regionale arkivet identifiserer Williamsons fiksjonsfilm fra 1901 og den iscenesatte redningen. Virkelige steder gjør rommet lesbart uten å bekrefte den fiktive handlingen. Tegn en enkel stedsskisse til din egen ufarlige fortelling.",
          "fr": "Les archives régionales identifient la fiction de Williamson de 1901 et le sauvetage mis en scène. Les lieux réels rendent l'espace lisible sans authentifier l'action fictive. Dessinez un petit schéma pour votre récit sans danger.",
          "pt": "O arquivo regional identifica a ficção de Williamson de 1901 e o salvamento encenado. Locais reais tornam o espaço legível sem autenticar a ação fictícia. Desenhe um esquema simples para a sua narrativa segura."
        },
        "sourceIds": [
          "sase"
        ]
      },
      {
        "id": "fire-safe-storyboard",
        "area": "research",
        "prompt": {
          "en": "How can you study the film's suspense without recreating a dangerous rescue?",
          "nb": "Hvordan kan du studere filmens spenning uten å gjenskape en farlig redning?",
          "fr": "Comment étudier le suspense du film sans reproduire un sauvetage dangereux ?",
          "pt": "Como estudar o suspense do filme sem reproduzir um salvamento perigoso?"
        },
        "options": [
          {
            "id": "board",
            "label": {
              "en": "Use a drawn storyboard or harmless fictional problem to test pacing and space",
              "nb": "Bruk et tegnet storyboard eller et ufarlig fiktivt problem for å teste tempo og rom",
              "fr": "Utiliser un storyboard dessiné ou un problème fictif sans danger pour tester rythme et espace",
              "pt": "Usar um storyboard desenhado ou um problema fictício seguro para testar ritmo e espaço"
            }
          },
          {
            "id": "hazard",
            "label": {
              "en": "Treat a hazardous reenactment as necessary for learning the editing method",
              "nb": "Behandle en farlig gjenskaping som nødvendig for å lære klippemetoden",
              "fr": "Considérer une reconstitution dangereuse comme nécessaire à l'apprentissage du montage",
              "pt": "Considerar uma reconstituição perigosa necessária para aprender a montagem"
            }
          },
          {
            "id": "spectacle",
            "label": {
              "en": "Replace the study of narrative with spectacle alone",
              "nb": "Erstatt studiet av fortelling med spektakel alene",
              "fr": "Remplacer l'étude du récit par le seul spectacle",
              "pt": "Substituir o estudo da narrativa apenas pelo espetáculo"
            }
          }
        ],
        "bestSupportedOptionId": "board",
        "explanation": {
          "en": "The archive's rescue narrative supplies a historical example of connected action, not a safety protocol. The learning goal is spatial and temporal storytelling. Use drawings, objects or a harmless invented situation instead of fire or a physical rescue.",
          "nb": "Arkivets redningsfortelling gir et historisk eksempel på sammenhengende handling, ikke en sikkerhetsprosedyre. Målet er romlig og tidslig fortelling. Bruk tegninger, gjenstander eller en ufarlig oppdiktet situasjon i stedet for brann eller fysisk redning.",
          "fr": "Le récit des archives fournit un exemple historique d'action liée, non un protocole de sécurité. L'objectif est la narration spatiale et temporelle. Utilisez dessins, objets ou une situation inventée sans danger plutôt que feu ou sauvetage physique.",
          "pt": "A narrativa do arquivo oferece um exemplo histórico de ação ligada, não um protocolo de segurança. O objetivo é narrar espaço e tempo. Use desenhos, objetos ou uma situação inventada segura em vez de fogo ou salvamento físico."
        },
        "sourceIds": [
          "sase",
          "eastman"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_life_of_an_american_fireman_1903",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Compare two ways of arranging screen time and learn why a film's surviving version matters for editing history. Use an original storyboard rather than reenacting a rescue.",
      "nb": "Sammenlign to måter å ordne filmtid på, og lær hvorfor filmens bevarte versjon er viktig for klippehistorien. Bruk et eget storyboard fremfor å gjenskape en redning.",
      "fr": "Comparez deux organisations du temps filmique et comprenez l'importance de la version conservée pour l'histoire du montage. Utilisez un storyboard original sans reconstituer un sauvetage.",
      "pt": "Compare duas organizações do tempo fílmico e aprenda por que a versão preservada importa para a história da montagem. Use um storyboard original sem reencenar um salvamento."
    },
    "sources": [
      {
        "id": "loc",
        "title": "The Life of an American Fireman (1903)",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/static/programs/national-film-preservation-board/film-registry/descriptions.html"
      },
      {
        "id": "bfi",
        "title": "The Innovators 1900-1910: Time After Time",
        "publisher": "British Film Institute",
        "url": "https://old.bfi.org.uk/sightandsound/feature/145"
      },
      {
        "id": "moma",
        "title": "Edwin S. Porter: A Portrait",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/explore/inside_out/2009/09/22/an-auteurist-history-of-film-a-portrait-of-edwin-s-porte/"
      }
    ],
    "questions": [
      {
        "id": "fireman-provenance",
        "area": "research",
        "prompt": {
          "en": "What should you check before attributing a cross-cut rescue sequence to the 1903 original?",
          "nb": "Hva bør du sjekke før du tilskriver en kryssklippet redningssekvens til originalen fra 1903?",
          "fr": "Que vérifier avant d'attribuer un sauvetage en montage alterné à l'original de 1903 ?",
          "pt": "O que verificar antes de atribuir uma sequência em montagem alternada ao original de 1903?"
        },
        "options": [
          {
            "id": "date",
            "label": {
              "en": "Assume that every surviving edit has the release year's shot order",
              "nb": "Anta at alle bevarte klipp har utgivelsesårets bilderekkefølge",
              "fr": "Supposer que chaque montage conservé suit l'ordre de l'année de sortie",
              "pt": "Supor que cada montagem preservada segue a ordem do ano de estreia"
            }
          },
          {
            "id": "modern",
            "label": {
              "en": "Prefer the most familiar modern edit without investigating its origin",
              "nb": "Foretrekk det mest kjente moderne klippet uten å undersøke opphavet",
              "fr": "Préférer le montage moderne le plus connu sans étudier sa provenance",
              "pt": "Preferir a montagem moderna mais conhecida sem investigar a origem"
            }
          },
          {
            "id": "deposit",
            "label": {
              "en": "Identify the version and compare it with the original copyright-deposit evidence",
              "nb": "Identifiser versjonen og sammenlign den med det opprinnelige deponeringsmaterialet",
              "fr": "Identifier la version et la comparer aux documents originaux du dépôt de copyright",
              "pt": "Identificar a versão e compará-la com a documentação original do depósito de direitos"
            }
          }
        ],
        "bestSupportedOptionId": "deposit",
        "explanation": {
          "en": "The existing Library of Congress record explains that a later cross-cut reedit was mistaken for the original until scholars examined the copyright paper print. Establish provenance before using shot order as evidence of historical innovation.",
          "nb": "Library of Congress-materialet forklarer at en senere kryssklippet versjon ble mistolket som originalen frem til forskere undersøkte papirkopien deponert for opphavsrett. Fastslå versjonens opphav før du bruker klipperekkefølgen som bevis på historisk nyskaping.",
          "fr": "Le dossier Library of Congress explique qu'un remontage alterné ultérieur fut pris pour l'original jusqu'à l'examen du tirage papier déposé. Établissez la provenance avant d'utiliser l'ordre des plans comme preuve d'innovation historique.",
          "pt": "O dossier Library of Congress explica que uma remontagem alternada posterior foi tomada pelo original até ao exame da cópia em papel depositada. Estabeleça a proveniência antes de usar a ordem dos planos como prova de inovação histórica."
        },
        "sourceIds": [
          "loc"
        ]
      },
      {
        "id": "fireman-temporal",
        "area": "research",
        "prompt": {
          "en": "Which storyboard comparison best explores the difference between repeated action and alternating viewpoints?",
          "nb": "Hvilken storyboard-sammenligning utforsker best forskjellen mellom gjentatt handling og vekslende perspektiver?",
          "fr": "Quelle comparaison de storyboards explore le mieux l'action répétée et les points de vue alternés ?",
          "pt": "Que comparação de storyboards explora melhor ação repetida e pontos de vista alternados?"
        },
        "options": [
          {
            "id": "viewpoints",
            "label": {
              "en": "Show one complete harmless action from each viewpoint, then compare an alternating arrangement",
              "nb": "Vis én hel ufarlig handling fra hvert perspektiv, og sammenlign med en vekslende rekkefølge",
              "fr": "Montrer une action sans danger complète de chaque point de vue puis comparer un montage alterné",
              "pt": "Mostrar uma ação segura completa de cada ponto de vista e comparar com uma montagem alternada"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Shuffle the images without tracking what happens in each view",
              "nb": "Bland bildene uten å følge hva som skjer i hvert perspektiv",
              "fr": "Mélanger les images sans suivre l'action dans chaque vue",
              "pt": "Misturar imagens sem seguir a ação em cada vista"
            }
          },
          {
            "id": "equate",
            "label": {
              "en": "Assume every repeated view and every alternating cut has identical temporal meaning",
              "nb": "Anta at gjentatte bilder og vekslende klipp alltid har samme tidsbetydning",
              "fr": "Supposer que répétition et alternance ont toujours le même sens temporel",
              "pt": "Supor que repetição e alternância têm sempre o mesmo sentido temporal"
            }
          }
        ],
        "bestSupportedOptionId": "viewpoints",
        "explanation": {
          "en": "The existing BFI dossier describes the original ending as complete action inside followed by its replay outside, distinct from a later intercut version. Use a fictional action to compare perceived repetition and simultaneity; this storyboard is not a reconstruction of the film's exact shots.",
          "nb": "Det eksisterende BFI-materialet beskriver originalslutten som fullført handling innendørs, deretter gjentatt utendørs, til forskjell fra en senere kryssklippet versjon. Bruk en fiktiv handling til å sammenligne opplevd gjentakelse og samtidighet; storyboardet rekonstruerer ikke filmens eksakte bilder.",
          "fr": "Le dossier BFI décrit la fin originale comme une action achevée à l'intérieur puis rejouée à l'extérieur, contrairement au remontage alterné. Comparez répétition et simultanéité perçues dans une action fictive ; ce storyboard ne reconstruit pas les plans exacts.",
          "pt": "O dossier BFI descreve o final original como ação completa no interior seguida da sua repetição no exterior, distinta da remontagem alternada. Compare repetição e simultaneidade percebidas numa ação fictícia; este storyboard não reconstrói os planos exatos."
        },
        "sourceIds": [
          "loc",
          "bfi"
        ]
      },
      {
        "id": "fireman-history",
        "area": "research",
        "prompt": {
          "en": "How can a film historian explain the case's importance without making an unsupported first-ever claim?",
          "nb": "Hvordan kan en filmhistoriker forklare filmens betydning uten en udokumentert påstand om å være først?",
          "fr": "Comment expliquer l'importance du film sans prétendre à une première absolue non étayée ?",
          "pt": "Como explicar a importância do filme sem afirmar uma estreia absoluta não fundamentada?"
        },
        "options": [
          {
            "id": "first",
            "label": {
              "en": "Declare that one film invented every later editing technique",
              "nb": "Erklær at én film oppfant alle senere klippeteknikker",
              "fr": "Déclarer qu'un film a inventé toutes les techniques de montage ultérieures",
              "pt": "Declarar que um filme inventou todas as técnicas de montagem posteriores"
            }
          },
          {
            "id": "evidence",
            "label": {
              "en": "Identify the version, evidence, historical context and remaining uncertainties",
              "nb": "Identifiser versjon, belegg, historisk kontekst og gjenstående usikkerhet",
              "fr": "Identifier version, preuves, contexte historique et incertitudes restantes",
              "pt": "Identificar versão, evidência, contexto histórico e incertezas restantes"
            }
          },
          {
            "id": "dismiss",
            "label": {
              "en": "Dismiss the film's importance because its original edit differs from later conventions",
              "nb": "Avvis filmens betydning fordi originalklippen avviker fra senere konvensjoner",
              "fr": "Écarter son importance parce que le montage original diffère des conventions ultérieures",
              "pt": "Descartar a importância por a montagem original diferir das convenções posteriores"
            }
          }
        ],
        "bestSupportedOptionId": "evidence",
        "explanation": {
          "en": "MoMA places Porter in early American narrative history, and the Library of Congress record documents the importance of version research. Historical significance does not require an absolute invention claim. Record the institution, version and limitations supporting your interpretation.",
          "nb": "MoMA plasserer Porter i tidlig amerikansk fortellingshistorie, og Library of Congress dokumenterer betydningen av versjonsforskning. Historisk betydning krever ikke en absolutt oppfinnerpåstand. Noter institusjon, versjon og begrensninger som støtter tolkningen.",
          "fr": "MoMA situe Porter dans l'histoire du récit américain et Library of Congress documente l'importance de l'étude des versions. L'importance historique n'exige pas une revendication d'invention absolue. Notez institution, version et limites.",
          "pt": "MoMA situa Porter na história da narrativa americana e Library of Congress documenta a importância do estudo de versões. A importância histórica não exige reivindicar invenção absoluta. Registe instituição, versão e limites."
        },
        "sourceIds": [
          "moma",
          "loc"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_great_train_robbery_1903",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore how the 1903 Edison film connects studio and location images, temporal organization and exhibition choices.",
      "nb": "Utforsk hvordan Edison-filmen fra 1903 kombinerer studio og opptakssteder, tidsorganisering og visningsvalg.",
      "fr": "Explorez comment le film Edison de 1903 associe studio, décors naturels, organisation temporelle et choix de projection.",
      "pt": "Explore como o filme Edison de 1903 combina estúdio, exteriores, organização temporal e escolhas de exibição."
    },
    "sources": [
      {
        "id": "loc",
        "title": "The great train robbery",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/00694220/"
      },
      {
        "id": "moma",
        "title": "Edwin S. Porter. The Great Train Robbery. 1903",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/collection/works/304708"
      },
      {
        "id": "bfi",
        "title": "The Innovators 1900-1910: Time After Time",
        "publisher": "British Film Institute",
        "url": "https://old.bfi.org.uk/sightandsound/feature/145"
      },
      {
        "id": "nga",
        "title": "Cine-Concert: The Great Train Robbery followed by Sand!",
        "publisher": "National Gallery of Art",
        "url": "https://www.nga.gov/calendar/treasures-american-cinema-westerns-reel-americana/cine-concert-great-train-robbery-followed-sand?evd=202604191800"
      }
    ],
    "questions": [
      {
        "id": "train-space",
        "area": "camera",
        "prompt": {
          "en": "How could an original storyboard connect interior and exterior spaces?",
          "nb": "Hvordan kan et eget storyboard knytte sammen innendørs og utendørs rom?",
          "fr": "Comment relier intérieur et extérieur dans un storyboard original ?",
          "pt": "Como ligar interiores e exteriores num storyboard original?"
        },
        "options": [
          {
            "id": "single",
            "label": {
              "en": "Keep every event in one unchanging interior",
              "nb": "Behold alle hendelser i ett uforanderlig interiør",
              "fr": "Garder tous les événements dans un intérieur fixe",
              "pt": "Manter todos os acontecimentos num interior fixo"
            }
          },
          {
            "id": "hybrid",
            "label": {
              "en": "Combine drawn interior and exterior views with readable spatial relations",
              "nb": "Kombiner tegnede inne- og utebilder med lesbare romforhold",
              "fr": "Combiner des vues dessinées intérieures et extérieures aux rapports spatiaux lisibles",
              "pt": "Combinar vistas desenhadas de interiores e exteriores com relações espaciais claras"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Choose unrelated views without establishing their relationship",
              "nb": "Velg urelaterte bilder uten å etablere sammenhengen",
              "fr": "Choisir des vues sans établir leur relation",
              "pt": "Escolher vistas sem estabelecer a sua relação"
            }
          }
        ],
        "bestSupportedOptionId": "hybrid",
        "explanation": {
          "en": "The repository's LOC and MoMA records describe a studio-location hybrid. Test the idea using drawings or models, not live railway action. This exercise is not an exact shot reconstruction.",
          "nb": "LOC- og MoMA-oppføringene beskriver en kombinasjon av studio og opptakssteder. Prøv prinsippet med tegninger eller modeller, ikke handling på en virkelig jernbane. Oppgaven rekonstruerer ikke eksakte bilder.",
          "fr": "Les notices LOC et MoMA décrivent une production mêlant studio et extérieurs. Testez le principe par dessins ou maquettes, jamais sur une voie ferrée réelle. Ce n'est pas une reconstruction exacte.",
          "pt": "Os registos LOC e MoMA descrevem uma produção de estúdio e exteriores. Teste o princípio com desenhos ou maquetes, nunca numa ferrovia real. O exercício não reconstrói planos exatos."
        },
        "sourceIds": [
          "loc",
          "moma"
        ]
      },
      {
        "id": "train-time",
        "area": "research",
        "prompt": {
          "en": "How should an editor study temporal relations in this 1903 film?",
          "nb": "Hvordan bør en klipper undersøke tidsforhold i denne filmen fra 1903?",
          "fr": "Comment étudier les relations temporelles dans ce film de 1903 ?",
          "pt": "Como estudar as relações temporais neste filme de 1903?"
        },
        "options": [
          {
            "id": "historical",
            "label": {
              "en": "Compare scene organization with contemporary practices and note uncertainties",
              "nb": "Sammenlign sceneorganisering med samtidens praksis og noter usikkerhet",
              "fr": "Comparer l'organisation des scènes aux pratiques contemporaines et noter les incertitudes",
              "pt": "Comparar a organização das cenas com práticas da época e registar incertezas"
            }
          },
          {
            "id": "modern",
            "label": {
              "en": "Assume that modern continuity rules already governed every cut",
              "nb": "Anta at moderne kontinuitetsregler allerede styrte hvert klipp",
              "fr": "Supposer que les règles modernes gouvernaient chaque coupe",
              "pt": "Supor que as regras modernas já regiam todos os cortes"
            }
          },
          {
            "id": "inventor",
            "label": {
              "en": "Credit the film with inventing all narrative editing",
              "nb": "Gi filmen æren for å ha oppfunnet all fortellende klipping",
              "fr": "Attribuer au film l'invention de tout montage narratif",
              "pt": "Atribuir ao filme a invenção de toda a montagem narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "historical",
        "explanation": {
          "en": "The existing BFI dossier warns against retrofitting later continuity grammar or a single-inventor story. Compare scene relationships within the film's historical context rather than claiming a universal first.",
          "nb": "Den eksisterende BFI-dokumentasjonen advarer mot å påføre senere kontinuitetsregler eller en fortelling om én oppfinner. Sammenlign sceneforhold i filmens historiske kontekst uten å hevde en universell førsteplass.",
          "fr": "Le dossier BFI met en garde contre l'application rétroactive des règles ultérieures et le récit d'un inventeur unique. Comparez les relations entre scènes dans leur contexte historique.",
          "pt": "O dossier BFI alerta contra projetar regras posteriores de continuidade ou um inventor único. Compare relações entre cenas no contexto histórico, sem afirmar uma primeira vez universal."
        },
        "sourceIds": [
          "bfi",
          "moma"
        ]
      },
      {
        "id": "train-exhibition",
        "area": "research",
        "prompt": {
          "en": "How should a curator account for the film's direct-address image?",
          "nb": "Hvordan bør en kurator forholde seg til filmens direkte henvendelse til publikum?",
          "fr": "Comment un commissaire doit-il traiter l'image adressée au public ?",
          "pt": "Como deve um curador abordar a imagem dirigida ao público?"
        },
        "options": [
          {
            "id": "fixed",
            "label": {
              "en": "Assume every historical screening used one fixed ending",
              "nb": "Anta at alle historiske visninger brukte én fast avslutning",
              "fr": "Supposer une fin fixe pour toutes les projections historiques",
              "pt": "Supor um final fixo em todas as projeções históricas"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore presentation history and label every copy identical",
              "nb": "Ignorer visningshistorien og merk alle kopier som identiske",
              "fr": "Ignorer l'histoire de la projection et déclarer les copies identiques",
              "pt": "Ignorar a história da exibição e declarar todas as cópias idênticas"
            }
          },
          {
            "id": "context",
            "label": {
              "en": "Document the print and distinguish exhibition choices from narrative structure",
              "nb": "Dokumenter kopien og skill visningsvalg fra fortellingens struktur",
              "fr": "Documenter la copie et distinguer choix de projection et structure narrative",
              "pt": "Documentar a cópia e distinguir escolhas de exibição da estrutura narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "context",
        "explanation": {
          "en": "The existing case documentation treats the direct-address image as a flexible attraction, not a compulsory modern ending. Record the specific print and presentation evidence before interpreting its position.",
          "nb": "Eksisterende dokumentasjon behandler den direkte henvendelsen som et fleksibelt attraksjonselement, ikke en obligatorisk moderne slutt. Noter den konkrete kopien og visningsbelegget før plasseringen tolkes.",
          "fr": "Le dossier traite cette adresse au public comme une attraction flexible, non comme une fin moderne obligatoire. Identifiez la copie et les preuves de projection avant d'interpréter sa position.",
          "pt": "O dossier trata essa interpelação como atração flexível, não como final moderno obrigatório. Registe a cópia e as evidências de exibição antes de interpretar a sua posição."
        },
        "sourceIds": [
          "nga",
          "bfi"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_rescued_by_rover_1905",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Study repeated routes, animal performance and replacement-version history in this 1905 British fiction.",
      "nb": "Studer gjentatte ruter, dyreprestasjon og versjonshistorie i denne britiske fiksjonsfilmen fra 1905.",
      "fr": "Étudiez les trajets répétés, le jeu animal et l'histoire des versions de cette fiction britannique de 1905.",
      "pt": "Estude percursos repetidos, interpretação animal e história das versões nesta ficção britânica de 1905."
    },
    "sources": [
      {
        "id": "bfi",
        "title": "Rescued by Rover (1905)",
        "publisher": "BFI Screenonline",
        "url": "https://www.screenonline.org.uk/film/id/514859/index.html"
      },
      {
        "id": "sase",
        "title": "Rescued by Rover",
        "publisher": "Screen Archive South East",
        "url": "https://screenarchive.brighton.ac.uk/detail/8407/"
      },
      {
        "id": "dfi",
        "title": "Rescued by Rover",
        "publisher": "Danish Film Institute",
        "url": "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/120019"
      },
      {
        "id": "museum",
        "title": "A dog detective, fairies, and Sherlock Holmes’ dressing gown",
        "publisher": "Science Museum",
        "url": "https://blog.sciencemuseum.org.uk/dog-detective-fairies-sherlock-holmes-dressing-gown/"
      }
    ],
    "questions": [
      {
        "id": "rover-route",
        "area": "camera",
        "prompt": {
          "en": "How can repeated journeys make an original storyboard easier to follow?",
          "nb": "Hvordan kan gjentatte turer gjøre et eget storyboard lettere å følge?",
          "fr": "Comment rendre un storyboard original plus lisible grâce aux trajets répétés ?",
          "pt": "Como tornar um storyboard original mais legível com percursos repetidos?"
        },
        "options": [
          {
            "id": "landmarks",
            "label": {
              "en": "Reuse recognizable landmarks and consistent movement direction",
              "nb": "Gjenbruk gjenkjennelige landemerker og konsekvent bevegelsesretning",
              "fr": "Réutiliser des repères reconnaissables et une direction cohérente",
              "pt": "Reutilizar marcos reconhecíveis e uma direção coerente"
            }
          },
          {
            "id": "shuffle",
            "label": {
              "en": "Shuffle landmarks and directions without a narrative reason",
              "nb": "Bland landemerker og retninger uten fortellermessig grunn",
              "fr": "Mélanger repères et directions sans raison narrative",
              "pt": "Misturar marcos e direções sem razão narrativa"
            }
          },
          {
            "id": "caption",
            "label": {
              "en": "Replace spatial relationships entirely with explanatory captions",
              "nb": "Erstatt romforhold fullstendig med forklarende tekstplakater",
              "fr": "Remplacer les relations spatiales par des cartons explicatifs",
              "pt": "Substituir relações espaciais por legendas explicativas"
            }
          }
        ],
        "bestSupportedOptionId": "landmarks",
        "explanation": {
          "en": "The BFI dossier describes clear route-based multi-shot storytelling. Repeat a simple fictional route with drawings to test spatial comprehension; do not claim this film alone invented continuity editing.",
          "nb": "BFI-dokumentasjonen beskriver tydelig rutebasert fortelling over flere bilder. Gjenta en enkel fiktiv rute med tegninger for å teste romforståelse, uten å hevde at filmen alene oppfant kontinuitetsklipping.",
          "fr": "Le dossier BFI décrit un récit clair fondé sur les trajets et plusieurs plans. Répétez un parcours fictif dessiné pour tester la compréhension spatiale, sans attribuer l'invention du montage de continuité à ce seul film.",
          "pt": "O dossier BFI descreve uma narrativa clara baseada em percursos e vários planos. Repita um percurso fictício desenhado para testar a compreensão espacial, sem atribuir a invenção da continuidade a este único filme."
        },
        "sourceIds": [
          "bfi",
          "sase"
        ]
      },
      {
        "id": "rover-performance",
        "area": "camera",
        "prompt": {
          "en": "How can you study the action-bearing role of the dog without risking animal welfare?",
          "nb": "Hvordan kan du studere hundens handlingsbærende rolle uten å risikere dyrevelferden?",
          "fr": "Comment étudier le rôle narratif du chien sans compromettre son bien-être ?",
          "pt": "Como estudar o papel narrativo do cão sem comprometer o bem-estar animal?"
        },
        "options": [
          {
            "id": "repeat",
            "label": {
              "en": "Demand repeated stressful performances from an animal",
              "nb": "Krev gjentatte stressende prestasjoner fra et dyr",
              "fr": "Imposer des prises stressantes répétées à un animal",
              "pt": "Exigir atuações stressantes repetidas de um animal"
            }
          },
          {
            "id": "draw",
            "label": {
              "en": "Use drawings or a toy to plan readable cues and reactions",
              "nb": "Bruk tegninger eller en leke til å planlegge tydelige signaler og reaksjoner",
              "fr": "Utiliser des dessins ou un jouet pour prévoir des indices et réactions lisibles",
              "pt": "Usar desenhos ou um brinquedo para planear sinais e reações claros"
            }
          },
          {
            "id": "erase",
            "label": {
              "en": "Remove the action-bearing character from the narrative",
              "nb": "Fjern den handlingsbærende figuren fra fortellingen",
              "fr": "Supprimer le personnage moteur du récit",
              "pt": "Retirar da narrativa a personagem que conduz a ação"
            }
          }
        ],
        "bestSupportedOptionId": "draw",
        "explanation": {
          "en": "The archive record describes a dog-led rescue narrative, and the Science Museum dossier identifies Blair. The exercise isolates causal storytelling through drawings or props, not a claim about historical animal-training methods.",
          "nb": "Arkivoppføringen beskriver en redningsfortelling ledet av en hund, og Science Museum identifiserer Blair. Øvelsen isolerer årsakssammenheng med tegninger eller rekvisitter, uten påstander om historisk dyretrening.",
          "fr": "La notice d'archive décrit un sauvetage mené par un chien et le dossier Science Museum identifie Blair. L'exercice isole la causalité par dessins ou accessoires, sans prétendre documenter le dressage historique.",
          "pt": "O registo de arquivo descreve um salvamento conduzido por um cão e o dossier Science Museum identifica Blair. O exercício isola a causalidade com desenhos ou objetos, sem afirmar métodos históricos de treino animal."
        },
        "sourceIds": [
          "sase",
          "museum"
        ]
      },
      {
        "id": "rover-versions",
        "area": "research",
        "prompt": {
          "en": "What should a researcher do when surviving copies may derive from replacement shoots?",
          "nb": "Hva bør en forsker gjøre når bevarte kopier kan stamme fra nye opptak?",
          "fr": "Que faire si les copies conservées peuvent provenir de nouveaux tournages ?",
          "pt": "O que fazer quando cópias preservadas podem vir de novas filmagens?"
        },
        "options": [
          {
            "id": "same",
            "label": {
              "en": "Treat every surviving copy as the identical original negative",
              "nb": "Behandle alle bevarte kopier som det identiske originalnegativet",
              "fr": "Traiter toutes les copies comme le négatif original identique",
              "pt": "Tratar todas as cópias como o mesmo negativo original"
            }
          },
          {
            "id": "guess",
            "label": {
              "en": "Assign an exact version date without supporting evidence",
              "nb": "Fastsett en eksakt versjonsdato uten dokumentasjon",
              "fr": "Attribuer une date précise sans preuve",
              "pt": "Atribuir uma data exata sem evidência"
            }
          },
          {
            "id": "compare",
            "label": {
              "en": "Compare archival records and identify version uncertainty",
              "nb": "Sammenlign arkivoppføringer og identifiser usikkerhet om versjonen",
              "fr": "Comparer les notices d'archives et identifier l'incertitude de version",
              "pt": "Comparar registos de arquivo e identificar incerteza de versão"
            }
          }
        ],
        "bestSupportedOptionId": "compare",
        "explanation": {
          "en": "The Science Museum dossier describes re-shooting after negatives wore out under high demand. Record the archive, version and evidence; do not infer an exact lineage for an unidentified copy.",
          "nb": "Science Museum-dokumentasjonen beskriver nye opptak etter at negativer ble slitt ut av stor etterspørsel. Noter arkiv, versjon og belegg; ikke anta et eksakt opphav for en uidentifisert kopi.",
          "fr": "Le dossier Science Museum décrit de nouveaux tournages après l'usure des négatifs due à la demande. Notez archive, version et preuves ; n'inférez pas la filiation exacte d'une copie non identifiée.",
          "pt": "O dossier Science Museum descreve novas filmagens após o desgaste dos negativos devido à procura. Registe arquivo, versão e evidência; não deduza a linhagem exata de uma cópia não identificada."
        },
        "sourceIds": [
          "museum",
          "dfi"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_corbett_fitzsimmons_fight_1897",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore event recording, exhibition technology and archive provenance.",
      "nb": "Utforsk hendelsesopptak, visningsteknologi og arkivhistorie.",
      "fr": "Explorez la captation d'événements, la projection et la provenance archivistique.",
      "pt": "Explore a captação de eventos, a projeção e a proveniência arquivística."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Corbett-Fitzsimmons fight--excerpts",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/2023602024/"
      },
      {
        "id": "s1",
        "title": "From our archives: Corbett vs. Fitzsimmons, the fight of the century and the earliest feature film",
        "publisher": "National Science and Media Museum",
        "url": "https://blog.scienceandmediamuseum.org.uk/corbett-fitzsimmons-fight-film-fragment/"
      },
      {
        "id": "s2",
        "title": "Fight Pictures: A History of Boxing and Early Cinema — The Corbett-Fitzsimmons Fight",
        "publisher": "University of California Press / JSTOR",
        "url": "https://www.jstor.org/stable/10.1525/j.ctt1pnd60.9"
      },
      {
        "id": "s3",
        "title": "Corbett and Fitzsimmons Fight",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/28825-CORBETT-AND-FITZSIMMONS-FIGHT"
      }
    ],
    "questions": [
      {
        "id": "corbett-duration",
        "area": "camera",
        "prompt": {
          "en": "How would you storyboard a harmless event while preserving its duration?",
          "nb": "Hvordan vil du tegne en ufarlig hendelse og bevare varigheten?",
          "fr": "Comment scénariser un événement sans danger en préservant sa durée ?",
          "pt": "Como planear um evento seguro preservando a sua duração?"
        },
        "options": [
          {
            "id": "handoff",
            "label": {
              "en": "Plan coverage changes around the unfolding event",
              "nb": "Planlegg bildebytter rundt hendelsens faktiske forløp",
              "fr": "Prévoir les changements de prise selon le déroulement réel",
              "pt": "Planear mudanças de captação segundo o decorrer do evento"
            }
          },
          {
            "id": "fiction",
            "label": {
              "en": "Replace event chronology with invented dramatic beats",
              "nb": "Erstatt hendelsesforløpet med oppdiktede dramatiske vendepunkter",
              "fr": "Remplacer la chronologie par des péripéties inventées",
              "pt": "Substituir a cronologia por momentos dramáticos inventados"
            }
          },
          {
            "id": "fragment",
            "label": {
              "en": "Record only a fragment and label it the complete event",
              "nb": "Vis bare et fragment og kall det hele hendelsen",
              "fr": "Montrer un fragment en le présentant comme complet",
              "pt": "Mostrar um fragmento como se fosse o evento completo"
            }
          }
        ],
        "bestSupportedOptionId": "handoff",
        "explanation": {
          "en": "The museum dossier documents multiple cameras and extended coverage. In a drawing exercise, plan handoffs that preserve chronology; do not confuse surviving fragments with the complete original.",
          "nb": "Museumsdokumentasjonen beskriver flere kameraer og langvarig dekning. Planlegg overganger i en tegneøvelse som bevarer kronologien; skill bevarte fragmenter fra originalens helhet.",
          "fr": "Le dossier du musée décrit plusieurs caméras et une captation prolongée. Planifiez les transitions dans un dessin en préservant la chronologie ; distinguez fragments et original complet.",
          "pt": "O dossier do museu descreve várias câmaras e captação prolongada. Planeie transições num desenho preservando a cronologia; distinga fragmentos do original completo."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "corbett-exhibition",
        "area": "sound",
        "prompt": {
          "en": "What connects capture technology to the historical screening experience?",
          "nb": "Hva knytter opptaksteknologien til den historiske visningen?",
          "fr": "Qu'est-ce qui relie la captation à la projection historique ?",
          "pt": "O que liga a captação à exibição histórica?"
        },
        "options": [
          {
            "id": "sync",
            "label": {
              "en": "Assume commentary was recorded as synchronized sound",
              "nb": "Anta at kommentaren ble tatt opp som synkron lyd",
              "fr": "Supposer un commentaire enregistré en son synchrone",
              "pt": "Supor comentários gravados em som sincronizado"
            }
          },
          {
            "id": "system",
            "label": {
              "en": "Match the projection system and keep live commentary separate",
              "nb": "Tilpass projeksjonssystemet og hold levende kommentar adskilt",
              "fr": "Adapter le système de projection et distinguer le commentaire en direct",
              "pt": "Adequar o sistema de projeção e separar o comentário ao vivo"
            }
          },
          {
            "id": "any",
            "label": {
              "en": "Assume any projector can show any historical format",
              "nb": "Anta at enhver projektor kan vise alle historiske formater",
              "fr": "Supposer que tout projecteur accepte tous les formats historiques",
              "pt": "Supor que qualquer projetor aceita todos os formatos históricos"
            }
          }
        ],
        "bestSupportedOptionId": "system",
        "explanation": {
          "en": "The Library of Congress dossier describes special projection requirements and live expert commentary. The recorded image and the live presentation are different parts of the exhibition system.",
          "nb": "Library of Congress beskriver spesielle projeksjonskrav og levende ekspertkommentar. Opptaksbildet og den levende presentasjonen er ulike deler av visningssystemet.",
          "fr": "Le dossier de la Library of Congress décrit un projecteur spécifique et un commentaire en direct. L'image enregistrée et la présentation sont deux composantes distinctes.",
          "pt": "O dossier da Library of Congress descreve requisitos especiais de projeção e comentário ao vivo. A imagem registada e a apresentação são componentes distintos."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "corbett-provenance",
        "area": "research",
        "prompt": {
          "en": "How should conflicting catalogue credits and later reproductions be handled?",
          "nb": "Hvordan bør motstridende katalogkrediteringer og senere reproduksjoner behandles?",
          "fr": "Comment traiter les crédits contradictoires et les reproductions ultérieures ?",
          "pt": "Como tratar créditos contraditórios e reproduções posteriores?"
        },
        "options": [
          {
            "id": "combine",
            "label": {
              "en": "Merge all credits and versions into a single record",
              "nb": "Slå sammen alle krediteringer og versjoner til én oppføring",
              "fr": "Fusionner tous les crédits et versions en une notice",
              "pt": "Fundir todos os créditos e versões num único registo"
            }
          },
          {
            "id": "complete",
            "label": {
              "en": "Declare surviving fragments the complete original",
              "nb": "Erklær bevarte fragmenter som den fullstendige originalen",
              "fr": "Déclarer les fragments comme l'original complet",
              "pt": "Declarar os fragmentos como o original completo"
            }
          },
          {
            "id": "separate",
            "label": {
              "en": "Separate original and facsimile using explicit archival evidence",
              "nb": "Skill original og faksimile ved hjelp av eksplisitte arkivbelegg",
              "fr": "Distinguer original et fac-similé par des preuves archivistiques explicites",
              "pt": "Distinguir original e fac-símile por evidência arquivística explícita"
            }
          }
        ],
        "bestSupportedOptionId": "separate",
        "explanation": {
          "en": "The existing LOC record distinguishes the Rector/Stuart original from Lubin's later facsimile. Use AFI only for the narrower camera and duration evidence; document conflicting credits and fragmentary survival.",
          "nb": "LOC-oppføringen skiller Rector/Stuart-originalen fra Lubins senere faksimile. Bruk AFI bare til avgrenset kamera- og varighetsbelegg; dokumenter motstridende kreditering og fragmentarisk bevaring.",
          "fr": "La notice LOC distingue l'original Rector/Stuart du fac-similé de Lubin. Limitez l'AFI aux données de caméra et de durée ; documentez les crédits contradictoires et la conservation fragmentaire.",
          "pt": "O registo LOC distingue o original Rector/Stuart do fac-símile de Lubin. Limite a AFI aos dados de câmara e duração; documente créditos contraditórios e preservação fragmentária."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_employees_leaving_browns_atlas_works_sheffield_1901",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore how local recognition, staging and showmanship shape actuality films.",
      "nb": "Utforsk hvordan lokal gjenkjennelse, iscenesettelse og visning former aktualitetsfilm.",
      "fr": "Explorez comment la reconnaissance locale, la mise en scène et la projection façonnent les actualités.",
      "pt": "Explore como o reconhecimento local, a encenação e a exibição moldam filmes de atualidades."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Employees Leaving Brown's Atlas Works, Sheffield (1901)",
        "publisher": "British Film Institute",
        "url": "https://player.bfi.org.uk/free/film/watch-employees-leaving-browns-atlas-works-sheffield-1901-1901-online"
      },
      {
        "id": "s1",
        "title": "Mitchell & Kenyon's Edwardian Britain",
        "publisher": "BFI National Archive",
        "url": "https://replay.bfi.org.uk/collection/430"
      },
      {
        "id": "s2",
        "title": "Introducing our Writer in Residence, Désirée Reynolds",
        "publisher": "Sheffield Libraries / Sheffield City Archives",
        "url": "https://shefflibraries.blogspot.com/2021/07/introducing-our-writer-in-residence.html"
      },
      {
        "id": "s3",
        "title": "A very short history of cinema",
        "publisher": "National Science and Media Museum",
        "url": "https://blog.scienceandmediamuseum.org.uk/very-short-history-of-cinema/"
      }
    ],
    "questions": [
      {
        "id": "browns-recognition",
        "area": "camera",
        "prompt": {
          "en": "How could you design a local-recognition exercise with consenting participants?",
          "nb": "Hvordan kan du lage en lokal gjenkjennelsesøvelse med samtykkende deltakere?",
          "fr": "Comment créer un exercice de reconnaissance locale avec des participants consentants ?",
          "pt": "Como criar um exercício de reconhecimento local com participantes que consentem?"
        },
        "options": [
          {
            "id": "anonymous",
            "label": {
              "en": "Remove all recognizable people and places",
              "nb": "Fjern alle gjenkjennelige personer og steder",
              "fr": "Supprimer les personnes et lieux reconnaissables",
              "pt": "Remover pessoas e lugares reconhecíveis"
            }
          },
          {
            "id": "recognize",
            "label": {
              "en": "Frame recognizable places and consenting participants or use drawings",
              "nb": "Ram inn gjenkjennelige steder og samtykkende deltakere eller bruk tegninger",
              "fr": "Cadrer des lieux reconnaissables et des participants consentants ou dessiner",
              "pt": "Enquadrar lugares reconhecíveis e participantes que consentem ou desenhar"
            }
          },
          {
            "id": "secret",
            "label": {
              "en": "Film people secretly for the recognition exercise",
              "nb": "Film personer i skjul for gjenkjennelsesøvelsen",
              "fr": "Filmer les personnes à leur insu pour l'exercice",
              "pt": "Filmar pessoas em segredo para o exercício"
            }
          }
        ],
        "bestSupportedOptionId": "recognize",
        "explanation": {
          "en": "The BFI collection dossier connects local subjects to paying local audiences. An original exercise can explore recognition through voluntary participation or drawings, without assuming historical consent practices.",
          "nb": "BFI-samlingen knytter lokale motiver til betalende lokalt publikum. En egen øvelse kan undersøke gjenkjennelse gjennom frivillig deltakelse eller tegninger, uten å anta historisk samtykkepraksis.",
          "fr": "Le dossier BFI relie sujets locaux et publics locaux payants. Un exercice original peut explorer la reconnaissance par participation volontaire ou dessin, sans présumer des pratiques historiques de consentement.",
          "pt": "O dossier BFI liga temas locais a públicos locais pagantes. Um exercício original pode explorar reconhecimento por participação voluntária ou desenho, sem pressupor práticas históricas de consentimento."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "browns-staging",
        "area": "research",
        "prompt": {
          "en": "How should you interpret visible crowd organization in an actuality?",
          "nb": "Hvordan bør du tolke synlig organisering av folkemengden i en aktualitetsfilm?",
          "fr": "Comment interpréter l'organisation visible de la foule dans une actualité ?",
          "pt": "Como interpretar a organização visível da multidão numa atualidade?"
        },
        "options": [
          {
            "id": "neutral",
            "label": {
              "en": "Treat every filmed action as entirely spontaneous",
              "nb": "Behandle enhver filmet handling som helt spontan",
              "fr": "Considérer toute action filmée comme entièrement spontanée",
              "pt": "Considerar toda ação filmada inteiramente espontânea"
            }
          },
          {
            "id": "identify",
            "label": {
              "en": "State the possible commissioner identification as certain",
              "nb": "Oppgi den mulige identifikasjonen av bestilleren som sikker",
              "fr": "Présenter l'identification possible du commanditaire comme certaine",
              "pt": "Apresentar a possível identificação do comitente como certa"
            }
          },
          {
            "id": "distinguish",
            "label": {
              "en": "Distinguish observed activity from staging and uncertain identities",
              "nb": "Skill observert aktivitet fra iscenesettelse og usikre identiteter",
              "fr": "Distinguer activité observée, mise en scène et identités incertaines",
              "pt": "Distinguir atividade observada, encenação e identidades incertas"
            }
          }
        ],
        "bestSupportedOptionId": "distinguish",
        "explanation": {
          "en": "The BFI film record describes marshaling the crowd and treats the Thomas connection as possible, not certain. Local historical evidence can be valuable without being an unmediated record.",
          "nb": "BFI beskriver organisering av folkemengden og omtaler Thomas-forbindelsen som mulig, ikke sikker. Lokalhistorisk belegg kan være verdifullt uten å være en uformidlet registrering.",
          "fr": "La notice BFI décrit l'organisation de la foule et présente le lien avec Thomas comme possible, non certain. Un document local peut être précieux sans être un enregistrement sans médiation.",
          "pt": "O registo BFI descreve a organização da multidão e trata a ligação a Thomas como possível, não certa. A evidência local pode ser valiosa sem ser um registo sem mediação."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "browns-audience",
        "area": "sound",
        "prompt": {
          "en": "How could a producer connect local commissioning and exhibition?",
          "nb": "Hvordan kan en produsent knytte lokal bestilling og visning sammen?",
          "fr": "Comment relier commande locale et projection ?",
          "pt": "Como ligar encomenda local e exibição?"
        },
        "options": [
          {
            "id": "local",
            "label": {
              "en": "Design for a local audience and separate live presentation from capture",
              "nb": "Planlegg for et lokalt publikum og skill levende visning fra opptaket",
              "fr": "Concevoir pour un public local et distinguer présentation et captation",
              "pt": "Planear para um público local e separar apresentação e captação"
            }
          },
          {
            "id": "sync",
            "label": {
              "en": "Treat variable live accompaniment as original synchronized sound",
              "nb": "Behandle varierende levende akkompagnement som original synkron lyd",
              "fr": "Traiter l'accompagnement variable comme son synchrone original",
              "pt": "Tratar acompanhamento variável como som sincronizado original"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore commissioning and the intended paying audience",
              "nb": "Ignorer bestillingen og det tiltenkte betalende publikummet",
              "fr": "Ignorer la commande et le public payant visé",
              "pt": "Ignorar a encomenda e o público pagante pretendido"
            }
          }
        ],
        "bestSupportedOptionId": "local",
        "explanation": {
          "en": "The BFI archive describes showman commissions and paid local screenings; the museum supplies broader exhibition context. Do not infer a particular soundtrack or accompaniment for this film from that general history.",
          "nb": "BFI-arkivet beskriver bestillinger fra visningsaktører og lokale betalingsvisninger; museet gir bredere visningskontekst. Ikke utled et bestemt lydspor eller akkompagnement for denne filmen fra generell historie.",
          "fr": "Les archives BFI décrivent commandes et séances locales payantes ; le musée fournit le contexte général. N'en déduisez pas une bande sonore ou un accompagnement précis pour ce film.",
          "pt": "O arquivo BFI descreve encomendas e sessões locais pagas; o museu fornece o contexto geral. Não deduza daí uma banda sonora ou acompanhamento específico para este filme."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_uncle_josh_at_the_moving_picture_show_1902",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Study fictional spectators, visible projection apparatus and comic escalation.",
      "nb": "Studer fiktive tilskuere, synlig projeksjonsutstyr og komisk opptrapping.",
      "fr": "Étudiez les spectateurs fictifs, le dispositif de projection et l'escalade comique.",
      "pt": "Estude espectadores fictícios, o dispositivo de projeção e a escalada cómica."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Uncle Josh at the moving picture show",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/00694324/"
      },
      {
        "id": "s1",
        "title": "Comedy — Edison motion pictures",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/genres/comedy/"
      },
      {
        "id": "s2",
        "title": "Uncle Josh at the Moving Picture Show",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/28980-UNCLE-JOSH-AT-THE-MOVING-PICTURE-SHOW"
      },
      {
        "id": "s3",
        "title": "Viewing Positions: Ways of Seeing Film",
        "publisher": "Rutgers University Press",
        "url": "https://www.rutgersuniversitypress.org/viewing-positions/9780813521336"
      }
    ],
    "questions": [
      {
        "id": "josh-space",
        "area": "camera",
        "prompt": {
          "en": "How would you make a fictional spectator and screen relationship readable?",
          "nb": "Hvordan vil du gjøre forholdet mellom en fiktiv tilskuer og lerretet tydelig?",
          "fr": "Comment rendre lisible la relation entre spectateur fictif et écran ?",
          "pt": "Como tornar legível a relação entre espectador fictício e ecrã?"
        },
        "options": [
          {
            "id": "hide",
            "label": {
              "en": "Hide the spatial relationship behind unrelated close-ups",
              "nb": "Skjul romforholdet bak urelaterte nærbilder",
              "fr": "Masquer la relation spatiale par des gros plans sans lien",
              "pt": "Ocultar a relação espacial com grandes planos desligados"
            }
          },
          {
            "id": "space",
            "label": {
              "en": "Use a drawing or safe model showing spectator and screen together",
              "nb": "Bruk en tegning eller trygg modell som viser tilskuer og lerret sammen",
              "fr": "Utiliser un dessin ou une maquette sûre réunissant spectateur et écran",
              "pt": "Usar um desenho ou maquete segura que mostre espectador e ecrã"
            }
          },
          {
            "id": "destroy",
            "label": {
              "en": "Use real equipment damage as the production method",
              "nb": "Bruk virkelig skade på utstyr som produksjonsmetode",
              "fr": "Endommager réellement le matériel comme méthode de production",
              "pt": "Danificar equipamento real como método de produção"
            }
          }
        ],
        "bestSupportedOptionId": "space",
        "explanation": {
          "en": "The LOC synopsis makes the projected attractions and the apparatus part of the comedy. A safe original model can preserve this spatial relation without reconstructing the exact historical setup.",
          "nb": "LOC-sammendraget gjør de projiserte attraksjonene og apparatet til deler av komikken. En trygg, egen modell kan bevare romforholdet uten å rekonstruere det eksakte historiske oppsettet.",
          "fr": "Le résumé LOC intègre attractions projetées et dispositif à la comédie. Une maquette originale et sûre peut préserver cette relation sans reconstruire exactement le dispositif historique.",
          "pt": "A sinopse LOC integra atrações projetadas e dispositivo na comédia. Uma maquete original segura pode preservar a relação sem reconstruir exatamente a instalação histórica."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "josh-comedy",
        "area": "camera",
        "prompt": {
          "en": "How could you build escalating reactions in an original silent comedy?",
          "nb": "Hvordan kan du bygge stadig sterkere reaksjoner i en egen stumfilmkomedie?",
          "fr": "Comment construire une escalade de réactions dans une comédie muette originale ?",
          "pt": "Como construir reações crescentes numa comédia muda original?"
        },
        "options": [
          {
            "id": "beats",
            "label": {
              "en": "Arrange contrasting visual cues and progressively stronger reactions",
              "nb": "Ordne kontrasterende visuelle signaler og gradvis sterkere reaksjoner",
              "fr": "Organiser des indices visuels contrastés et des réactions croissantes",
              "pt": "Organizar sinais visuais contrastantes e reações crescentes"
            }
          },
          {
            "id": "unrelated",
            "label": {
              "en": "Choose disconnected reactions without readable causes",
              "nb": "Velg løsrevne reaksjoner uten tydelige årsaker",
              "fr": "Choisir des réactions sans causes lisibles",
              "pt": "Escolher reações desligadas sem causas legíveis"
            }
          },
          {
            "id": "modern",
            "label": {
              "en": "Assert that modern coverage conventions were used historically",
              "nb": "Påstå at moderne dekningskonvensjoner ble brukt historisk",
              "fr": "Affirmer l'usage historique des conventions modernes de couverture",
              "pt": "Afirmar o uso histórico de convenções modernas de cobertura"
            }
          }
        ],
        "bestSupportedOptionId": "beats",
        "explanation": {
          "en": "LOC and AFI document a comic progression through projected attractions and reactions. Create your own visual beats; this is a learning exercise, not a claim about later shot conventions in the original.",
          "nb": "LOC og AFI dokumenterer en komisk utvikling gjennom projiserte attraksjoner og reaksjoner. Lag egne visuelle hendelser; dette er en øvelse, ikke en påstand om senere klippekonvensjoner i originalen.",
          "fr": "LOC et AFI documentent une progression comique par attractions et réactions. Créez vos propres étapes visuelles ; l'exercice ne suppose pas les conventions de découpage ultérieures dans l'original.",
          "pt": "LOC e AFI documentam uma progressão cómica por atrações e reações. Crie os seus próprios momentos visuais; o exercício não pressupõe convenções posteriores de montagem no original."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "josh-spectators",
        "area": "research",
        "prompt": {
          "en": "What can the fictional spectator establish about real early audiences?",
          "nb": "Hva kan den fiktive tilskueren dokumentere om virkelig tidlig filmpublikum?",
          "fr": "Que peut établir le spectateur fictif sur les publics réels du premier cinéma ?",
          "pt": "O que pode o espectador fictício demonstrar sobre os públicos reais do cinema inicial?"
        },
        "options": [
          {
            "id": "all",
            "label": {
              "en": "Declare that every early spectator misunderstood projected images",
              "nb": "Erklær at alle tidlige tilskuere misforsto projiserte bilder",
              "fr": "Déclarer que tous les premiers spectateurs comprenaient mal les images",
              "pt": "Declarar que todos os primeiros espectadores não entendiam imagens projetadas"
            }
          },
          {
            "id": "record",
            "label": {
              "en": "Treat a scripted comedy as direct documentary evidence",
              "nb": "Behandle en manusbasert komedie som direkte dokumentarisk belegg",
              "fr": "Traiter une comédie scénarisée comme preuve documentaire directe",
              "pt": "Tratar uma comédia encenada como prova documental direta"
            }
          },
          {
            "id": "separate",
            "label": {
              "en": "Distinguish comic convention from independently documented audience behaviour",
              "nb": "Skill komisk konvensjon fra uavhengig dokumentert publikumsatferd",
              "fr": "Distinguer convention comique et comportement du public documenté indépendamment",
              "pt": "Distinguir convenção cómica de comportamento do público documentado independentemente"
            }
          }
        ],
        "bestSupportedOptionId": "separate",
        "explanation": {
          "en": "The LOC comedy history identifies a comic stereotype, while the Rutgers volume provides a historiographic framework for questioning universal credulity. Real audience behaviour requires independent evidence.",
          "nb": "LOCs komediehistorie identifiserer en komisk stereotypi, mens Rutgers-boken gir et historiefaglig rammeverk for å problematisere universell godtroenhet. Virkelig publikumsatferd krever uavhengig belegg.",
          "fr": "L'histoire de la comédie LOC identifie un stéréotype ; le volume Rutgers offre un cadre historiographique pour interroger la crédulité universelle. Le comportement réel exige des preuves indépendantes.",
          "pt": "A história da comédia LOC identifica um estereótipo; o volume Rutgers oferece um quadro historiográfico para questionar a credulidade universal. O comportamento real exige evidência independente."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_a_trip_to_the_moon_1902",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore Méliès's constructed fantasy spaces, camera transformations and the restoration of the colour version.",
      "nb": "Utforsk Méliès' konstruerte fantasirom, kameraforvandlinger og restaureringen av fargeversjonen.",
      "fr": "Explorez les espaces fantastiques construits par Méliès, les transformations à la caméra et la restauration de la version en couleurs.",
      "pt": "Explore os espaços fantásticos construídos por Méliès, as transformações na câmara e o restauro da versão a cores."
    },
    "sources": [
      {
        "id": "cannes-film",
        "title": "Le Voyage dans la lune (A Trip to the Moon)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/le-voyage-dans-la-lune/"
      },
      {
        "id": "cannes-return",
        "title": "A Trip to the Moon – a return journey",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2011/a-trip-to-the-moon-a-return-journey/"
      },
      {
        "id": "cannes-classics",
        "title": "Cannes Classics 2011",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/2011/cannes-classics-2011/"
      },
      {
        "id": "loc",
        "title": "Lost 19th century film by Méliès discovered at the Library",
        "publisher": "Library of Congress",
        "url": "https://blogs.loc.gov/loc/2026/02/lost-19th-century-film-by-melies-discovered-at-the-library/"
      }
    ],
    "questions": [
      {
        "id": "moon-tableaux",
        "area": "camera",
        "prompt": {
          "en": "How could an original fantasy tableau make its imaginary world readable?",
          "nb": "Hvordan kan et eget fantasitablå gjøre den oppdiktede verdenen lesbar?",
          "fr": "Comment rendre lisible un monde imaginaire dans un tableau fantastique original ?",
          "pt": "Como tornar legível um mundo imaginário num quadro fantástico original?"
        },
        "options": [
          {
            "id": "tableau",
            "label": {
              "en": "Compose a drawn stage with layered scenery and visible entrances",
              "nb": "Komponer en tegnet scene med dekor i flere plan og synlige innganger",
              "fr": "Composer une scène dessinée avec des décors en profondeur et des entrées visibles",
              "pt": "Compor um palco desenhado com cenários em profundidade e entradas visíveis"
            }
          },
          {
            "id": "real",
            "label": {
              "en": "Treat the imagined voyage as a documentary recording",
              "nb": "Behandle den oppdiktede reisen som et dokumentaropptak",
              "fr": "Traiter le voyage imaginaire comme un documentaire",
              "pt": "Tratar a viagem imaginária como um registo documental"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Combine unrelated fragments without spatial design",
              "nb": "Kombiner urelaterte fragmenter uten romlig utforming",
              "fr": "Combiner des fragments sans organisation spatiale",
              "pt": "Combinar fragmentos sem organização espacial"
            }
          }
        ],
        "bestSupportedOptionId": "tableau",
        "explanation": {
          "en": "The existing Cannes and Library of Congress dossiers place Méliès in a constructed fantasy and studio tradition. Draw an original tableau to study composition and depth; do not infer an exact historical set plan.",
          "nb": "Cannes- og LOC-dokumentasjonen plasserer Méliès i en tradisjon med konstruert fantasi og studioarbeid. Tegn et eget tablå for å studere komposisjon og dybde; ikke utled en eksakt historisk scenografi.",
          "fr": "Les dossiers Cannes et LOC situent Méliès dans une tradition de fantaisie construite en studio. Dessinez un tableau original pour étudier composition et profondeur, sans déduire un plan historique exact.",
          "pt": "Os dossiers Cannes e LOC situam Méliès numa tradição de fantasia construída em estúdio. Desenhe um quadro original para estudar composição e profundidade, sem deduzir um cenário histórico exato."
        },
        "sourceIds": [
          "cannes-film",
          "loc"
        ]
      },
      {
        "id": "moon-transformation",
        "area": "camera",
        "prompt": {
          "en": "How could a safe tabletop exercise explore an apparent magical transformation?",
          "nb": "Hvordan kan en trygg bordøvelse utforske en tilsynelatende magisk forvandling?",
          "fr": "Comment explorer une transformation magique apparente dans un exercice de table sans danger ?",
          "pt": "Como explorar uma transformação mágica aparente num exercício de mesa seguro?"
        },
        "options": [
          {
            "id": "continuous",
            "label": {
              "en": "Record a continuous view without changing any object",
              "nb": "Ta opp et sammenhengende bilde uten å endre noen gjenstand",
              "fr": "Filmer en continu sans modifier aucun objet",
              "pt": "Filmar continuamente sem alterar nenhum objeto"
            }
          },
          {
            "id": "substitution",
            "label": {
              "en": "Keep framing stable and compare two images with a substituted object",
              "nb": "Hold utsnittet stabilt og sammenlign to bilder der en gjenstand er byttet ut",
              "fr": "Garder le cadrage stable et comparer deux images avec un objet substitué",
              "pt": "Manter o enquadramento estável e comparar duas imagens com um objeto substituído"
            }
          },
          {
            "id": "digital",
            "label": {
              "en": "Attribute modern digital effects to the original film",
              "nb": "Tilskriv originalfilmen moderne digitale effekter",
              "fr": "Attribuer des effets numériques modernes au film original",
              "pt": "Atribuir efeitos digitais modernos ao filme original"
            }
          }
        ],
        "bestSupportedOptionId": "substitution",
        "explanation": {
          "en": "The LOC dossier documents camera stoppage among Méliès's broader methods. A two-image object substitution illustrates the principle; it is not a verified shot-by-shot reconstruction of this film.",
          "nb": "LOC-dokumentasjonen beskriver kamerastans som en av Méliès' bredere metoder. Et gjenstandsbytte mellom to bilder illustrerer prinsippet; det er ikke en verifisert rekonstruksjon av filmens enkelte bilder.",
          "fr": "Le dossier LOC décrit l'arrêt de caméra parmi les méthodes générales de Méliès. Une substitution d'objet entre deux images illustre le principe, sans reconstituer les plans exacts du film.",
          "pt": "O dossier LOC descreve a paragem da câmara entre os métodos gerais de Méliès. A substituição de um objeto entre duas imagens ilustra o princípio, sem reconstruir os planos exatos do filme."
        },
        "sourceIds": [
          "loc",
          "cannes-return"
        ]
      },
      {
        "id": "moon-restoration",
        "area": "research",
        "prompt": {
          "en": "How should a researcher describe the restored colour version and its music?",
          "nb": "Hvordan bør en forsker beskrive den restaurerte fargeversjonen og musikken?",
          "fr": "Comment décrire la version en couleurs restaurée et sa musique ?",
          "pt": "Como descrever a versão a cores restaurada e a sua música?"
        },
        "options": [
          {
            "id": "original",
            "label": {
              "en": "Describe the modern soundtrack as original synchronized sound from 1902",
              "nb": "Beskriv det moderne lydsporet som original synkron lyd fra 1902",
              "fr": "Présenter la musique moderne comme son synchrone original de 1902",
              "pt": "Apresentar a música moderna como som sincronizado original de 1902"
            }
          },
          {
            "id": "identical",
            "label": {
              "en": "Treat all surviving prints and restorations as identical",
              "nb": "Behandle alle bevarte kopier og restaureringer som identiske",
              "fr": "Traiter toutes les copies et restaurations comme identiques",
              "pt": "Tratar todas as cópias e restauros como idênticos"
            }
          },
          {
            "id": "provenance",
            "label": {
              "en": "Identify the recovered colour material, restoration and later soundtrack separately",
              "nb": "Identifiser det gjenfunne fargematerialet, restaureringen og det senere lydsporet hver for seg",
              "fr": "Identifier séparément le matériau couleur retrouvé, la restauration et la musique ultérieure",
              "pt": "Identificar separadamente o material a cores recuperado, o restauro e a música posterior"
            }
          }
        ],
        "bestSupportedOptionId": "provenance",
        "explanation": {
          "en": "Cannes documents the recovered colour material, frame-by-frame restoration and new music by Air for the restored presentation. Separate the 1902 production, the surviving print and the later restoration soundtrack.",
          "nb": "Cannes dokumenterer gjenfunnet fargemateriale, restaurering bilde for bilde og ny musikk av Air til den restaurerte visningen. Skill produksjonen fra 1902, den bevarte kopien og restaureringens senere lydspor.",
          "fr": "Cannes documente le matériau couleur retrouvé, la restauration image par image et la nouvelle musique d'Air. Distinguez la production de 1902, la copie conservée et la musique ultérieure de la restauration.",
          "pt": "Cannes documenta o material a cores recuperado, o restauro imagem a imagem e a nova música de Air. Distinga a produção de 1902, a cópia preservada e a música posterior do restauro."
        },
        "sourceIds": [
          "cannes-film",
          "cannes-return",
          "cannes-classics"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_grandmas_reading_glass_1900",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore motivated detail views, visual perspective and historical interpretation in Smith's 1900 film.",
      "nb": "Utforsk motiverte detaljbilder, synsvinkel og historisk tolkning i Smiths film fra 1900.",
      "fr": "Explorez les détails motivés, le point de vue et l'interprétation historique du film de Smith de 1900.",
      "pt": "Explore os pormenores motivados, o ponto de vista e a interpretação histórica do filme de Smith de 1900."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Grandma's Reading Glass",
        "publisher": "British Film Institute",
        "url": "https://replay.bfi.org.uk/video/419/bc4007f9-c8fa-5293-846a-de032dc142af"
      },
      {
        "id": "s1",
        "title": "Inventing Film Language",
        "publisher": "BFI National Archive",
        "url": "https://replay.bfi.org.uk/collection/419"
      },
      {
        "id": "s2",
        "title": "Grandma's Reading Glass — Title ID 8372",
        "publisher": "Screen Archive South East",
        "url": "https://screenarchive.brighton.ac.uk/detail/8372/"
      },
      {
        "id": "s3",
        "title": "Cinematographic camera, 1899/1900 [?]",
        "publisher": "Christie's",
        "url": "https://www.christies.com/en/lot/lot-3045373"
      },
      {
        "id": "s5",
        "title": "Grandma’s Reading Glass (1900)",
        "publisher": "University of Bologna Research Archive",
        "url": "https://cris.unibo.it/handle/11585/962676"
      }
    ],
    "questions": [
      {
        "id": "glass-gaze",
        "area": "camera",
        "prompt": {
          "en": "How can a detail image be motivated by a character's act of looking?",
          "nb": "Hvordan kan et detaljbilde motiveres av at en figur ser på noe?",
          "fr": "Comment motiver une image de détail par le regard d'un personnage ?",
          "pt": "Como motivar uma imagem de pormenor pelo olhar de uma personagem?"
        },
        "options": [
          {
            "id": "look",
            "label": {
              "en": "Show a character looking, then a related enlarged object",
              "nb": "Vis en figur som ser, deretter en tilhørende forstørret gjenstand",
              "fr": "Montrer un personnage qui regarde, puis un objet agrandi correspondant",
              "pt": "Mostrar uma personagem a olhar e depois um objeto ampliado relacionado"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Insert an unrelated detail with no visible motivation",
              "nb": "Sett inn en urelatert detalj uten synlig motivasjon",
              "fr": "Insérer un détail sans rapport ni motivation visible",
              "pt": "Inserir um pormenor sem relação nem motivação visível"
            }
          },
          {
            "id": "caption",
            "label": {
              "en": "Replace every visual relationship with explanatory captions",
              "nb": "Erstatt alle visuelle sammenhenger med forklarende tekstplakater",
              "fr": "Remplacer toutes les relations visuelles par des cartons explicatifs",
              "pt": "Substituir todas as relações visuais por legendas explicativas"
            }
          }
        ],
        "bestSupportedOptionId": "look",
        "explanation": {
          "en": "The BFI and regional archive dossiers connect enlarged views to the boy's magnifying glass. Make a new storyboard that establishes the act of looking before showing a related detail.",
          "nb": "BFI og det regionale arkivet knytter forstørrede bilder til guttens forstørrelsesglass. Lag et nytt storyboard som etablerer blikket før en tilhørende detalj vises.",
          "fr": "Les dossiers BFI et de l'archive régionale relient les vues agrandies à la loupe du garçon. Créez un storyboard qui établit le regard avant le détail correspondant.",
          "pt": "Os dossiers BFI e do arquivo regional ligam as vistas ampliadas à lupa do rapaz. Crie um storyboard que estabeleça o olhar antes do pormenor correspondente."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "glass-mask",
        "area": "camera",
        "prompt": {
          "en": "How could you distinguish an enlarged optical view from the surrounding composition?",
          "nb": "Hvordan kan du skille et forstørret optisk bilde fra komposisjonen rundt?",
          "fr": "Comment distinguer une vue optique agrandie de la composition environnante ?",
          "pt": "Como distinguir uma vista ótica ampliada da composição envolvente?"
        },
        "options": [
          {
            "id": "same",
            "label": {
              "en": "Keep every view identical in scale and framing",
              "nb": "Behold identisk størrelse og utsnitt i alle bilder",
              "fr": "Conserver une échelle et un cadrage identiques partout",
              "pt": "Manter escala e enquadramento idênticos em todas as vistas"
            }
          },
          {
            "id": "mask",
            "label": {
              "en": "Compare a wide drawing with a circular framed detail",
              "nb": "Sammenlign en vid tegning med en sirkelformet innrammet detalj",
              "fr": "Comparer un dessin large et un détail encadré par un cercle",
              "pt": "Comparar um desenho amplo com um pormenor enquadrado por um círculo"
            }
          },
          {
            "id": "claim",
            "label": {
              "en": "Attribute a modern digital lens system to the original",
              "nb": "Tilskriv originalen et moderne digitalt objektivsystem",
              "fr": "Attribuer au film original un système optique numérique moderne",
              "pt": "Atribuir ao original um sistema ótico digital moderno"
            }
          }
        ],
        "bestSupportedOptionId": "mask",
        "explanation": {
          "en": "The regional archive describes enlarged circular views, and the historical catalogue reproduced in the apparatus dossier documents circular masks. Use paper cutouts to explore the visual distinction without claiming an exact apparatus reconstruction.",
          "nb": "Det regionale arkivet beskriver forstørrede sirkelbilder, og den historiske katalogen i apparatdokumentasjonen beskriver sirkelmasker. Bruk papirutklipp til å utforske forskjellen uten å hevde en eksakt rekonstruksjon.",
          "fr": "L'archive régionale décrit des vues circulaires agrandies et le catalogue historique reproduit dans le dossier technique documente les caches circulaires. Explorez la distinction avec du papier, sans prétendre reconstruire l'appareil exact.",
          "pt": "O arquivo regional descreve vistas circulares ampliadas e o catálogo histórico reproduzido no dossier técnico documenta máscaras circulares. Explore a distinção com papel, sem alegar uma reconstrução exata do aparelho."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "glass-history",
        "area": "research",
        "prompt": {
          "en": "How should you describe this early experiment in represented gaze?",
          "nb": "Hvordan bør du beskrive dette tidlige forsøket med å fremstille blikk?",
          "fr": "Comment décrire cette expérience ancienne de représentation du regard ?",
          "pt": "Como descrever esta experiência inicial de representação do olhar?"
        },
        "options": [
          {
            "id": "first",
            "label": {
              "en": "Declare that Smith invented every later viewpoint convention",
              "nb": "Erklær at Smith oppfant alle senere synsvinkelkonvensjoner",
              "fr": "Déclarer que Smith a inventé toutes les conventions ultérieures du regard",
              "pt": "Declarar que Smith inventou todas as convenções posteriores do olhar"
            }
          },
          {
            "id": "modern",
            "label": {
              "en": "Treat early inserts as identical to classical subjective viewpoint",
              "nb": "Behandle tidlige innklipp som identiske med klassisk subjektiv synsvinkel",
              "fr": "Traiter les inserts anciens comme identiques au point de vue subjectif classique",
              "pt": "Tratar os insertos iniciais como idênticos ao ponto de vista subjetivo clássico"
            }
          },
          {
            "id": "context",
            "label": {
              "en": "Compare the early device with later conventions and related experiments",
              "nb": "Sammenlign det tidlige grepet med senere konvensjoner og beslektede forsøk",
              "fr": "Comparer le procédé ancien aux conventions ultérieures et aux expériences voisines",
              "pt": "Comparar o recurso inicial com convenções posteriores e experiências relacionadas"
            }
          }
        ],
        "bestSupportedOptionId": "context",
        "explanation": {
          "en": "The BFI collection places the film among multiple visual-language experiments, while the Bologna scholarship distinguishes early represented gaze from later classical subjectivity. Explain the contribution without claiming a sole inventor.",
          "nb": "BFI plasserer filmen blant flere forsøk med filmspråk, mens Bologna-forskningen skiller tidlig fremstilt blikk fra senere klassisk subjektivitet. Forklar bidraget uten å utpeke én oppfinner.",
          "fr": "La collection BFI situe le film parmi plusieurs expériences de langage visuel ; la recherche de Bologne distingue le regard ancien de la subjectivité classique. Expliquez cet apport sans désigner un inventeur unique.",
          "pt": "A coleção BFI situa o filme entre várias experiências de linguagem visual; a investigação de Bolonha distingue o olhar inicial da subjetividade clássica. Explique o contributo sem indicar um inventor único."
        },
        "sourceIds": [
          "s1",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_histoire_d_un_crime_1901",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore multi-tableau narrative, represented memory and Pathé's production context.",
      "nb": "Utforsk fortelling i flere tablåer, fremstilt erindring og Pathés produksjonskontekst.",
      "fr": "Explorez le récit en plusieurs tableaux, le souvenir représenté et le contexte de production de Pathé.",
      "pt": "Explore a narrativa em vários quadros, a memória representada e o contexto de produção da Pathé."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Il y a 160 ans naissait Ferdinand Zecca",
        "publisher": "Centre national du cinéma et de l'image animée (CNC)",
        "url": "https://www.cnc.fr/cinema/actualites/il-y-a-160-ans-naissait-ferdinand-zecca_2165740"
      },
      {
        "id": "s1",
        "title": "Pathé – Our history",
        "publisher": "Pathé",
        "url": "https://www.pathe.com/en/pathe/"
      },
      {
        "id": "s2",
        "title": "Histoire de Pathé",
        "publisher": "Fondation Jérôme Seydoux-Pathé",
        "url": "https://www.fondation-jeromeseydoux-pathe.com/cms/histoire_pathe"
      },
      {
        "id": "s4",
        "title": "Historical Dictionary of French Cinema",
        "publisher": "Scarecrow Press / Bloomsbury",
        "url": "https://www.bloomsbury.com/us/historical-dictionary-of-french-cinema-9780810854918/"
      }
    ],
    "questions": [
      {
        "id": "crime-memory",
        "area": "camera",
        "prompt": {
          "en": "How could a drawing show present experience and a remembered event together?",
          "nb": "Hvordan kan en tegning vise nåtidig opplevelse og et minne samtidig?",
          "fr": "Comment montrer ensemble une expérience présente et un souvenir dans un dessin ?",
          "pt": "Como mostrar juntos uma experiência presente e uma recordação num desenho?"
        },
        "options": [
          {
            "id": "planes",
            "label": {
              "en": "Use distinct scenic planes for present action and represented memory",
              "nb": "Bruk adskilte sceniske plan for nåtidig handling og fremstilt minne",
              "fr": "Employer des plans scéniques distincts pour le présent et le souvenir",
              "pt": "Usar planos cénicos distintos para a ação presente e a memória representada"
            }
          },
          {
            "id": "erase",
            "label": {
              "en": "Remove all cues separating past and present experience",
              "nb": "Fjern alle tegn som skiller fortid og nåtidig opplevelse",
              "fr": "Supprimer tous les indices distinguant passé et présent",
              "pt": "Remover todos os sinais que distinguem passado e presente"
            }
          },
          {
            "id": "literal",
            "label": {
              "en": "Label the remembered scene as a documentary record",
              "nb": "Merk minnescenen som en dokumentarisk registrering",
              "fr": "Présenter la scène remémorée comme un document direct",
              "pt": "Apresentar a cena recordada como registo documental"
            }
          }
        ],
        "bestSupportedOptionId": "planes",
        "explanation": {
          "en": "The scholarly dictionary dossier describes two scenic sets visible within one composition during the recollection. Draw an original harmless memory scene using distinct planes rather than reconstructing the film's exact staging.",
          "nb": "Det faglige oppslagsverket beskriver to sceniske dekorasjoner synlige i én komposisjon under erindringen. Tegn en egen ufarlig minnescene med adskilte plan fremfor å rekonstruere filmens eksakte iscenesettelse.",
          "fr": "Le dictionnaire spécialisé décrit deux décors visibles dans une même composition pendant le souvenir. Dessinez une scène de mémoire originale et sans danger avec des plans distincts, sans reconstruire la mise en scène exacte.",
          "pt": "O dicionário especializado descreve dois cenários visíveis na mesma composição durante a recordação. Desenhe uma cena de memória original e segura com planos distintos, sem reconstruir a encenação exata."
        },
        "sourceIds": [
          "s4"
        ]
      },
      {
        "id": "crime-tableaux",
        "area": "camera",
        "prompt": {
          "en": "How could multiple tableaux develop a longer fictional narrative?",
          "nb": "Hvordan kan flere tablåer utvikle en lengre fiktiv fortelling?",
          "fr": "Comment plusieurs tableaux peuvent-ils développer un récit fictif plus long ?",
          "pt": "Como podem vários quadros desenvolver uma narrativa ficcional mais longa?"
        },
        "options": [
          {
            "id": "unrelated",
            "label": {
              "en": "Arrange unrelated images without a readable narrative connection",
              "nb": "Ordne urelaterte bilder uten lesbar fortellermessig sammenheng",
              "fr": "Disposer des images sans relation narrative lisible",
              "pt": "Organizar imagens sem relação narrativa legível"
            }
          },
          {
            "id": "sequence",
            "label": {
              "en": "Arrange distinct fictional scenes with clear causal and temporal links",
              "nb": "Ordne adskilte fiktive scener med tydelige årsaks- og tidsforhold",
              "fr": "Organiser des scènes fictives distinctes aux liens causaux et temporels clairs",
              "pt": "Organizar cenas fictícias distintas com relações causais e temporais claras"
            }
          },
          {
            "id": "single",
            "label": {
              "en": "Keep every event in an unchanging unrelated composition",
              "nb": "Behold alle hendelser i en uforanderlig og urelatert komposisjon",
              "fr": "Garder tous les événements dans une composition fixe sans lien",
              "pt": "Manter todos os acontecimentos numa composição fixa sem relação"
            }
          }
        ],
        "bestSupportedOptionId": "sequence",
        "explanation": {
          "en": "The CNC dossier emphasizes Zecca's expanded footage and multiple tableaux. An original story about an everyday misunderstanding can test narrative links without claiming to reproduce the historical film's sequence.",
          "nb": "CNC-dokumentasjonen fremhever Zeccas økte filmlengde og flere tablåer. En egen fortelling om en hverdagslig misforståelse kan teste fortellerforbindelser uten å gjengi filmens historiske sekvens.",
          "fr": "Le dossier CNC souligne la longueur accrue et les tableaux multiples chez Zecca. Une histoire originale de malentendu quotidien permet de tester les liens narratifs sans reproduire la séquence historique.",
          "pt": "O dossier CNC destaca a maior metragem e os vários quadros de Zecca. Uma história original sobre um mal-entendido quotidiano permite testar ligações narrativas sem reproduzir a sequência histórica."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "crime-context",
        "area": "research",
        "prompt": {
          "en": "How should you relate this film's narrative innovation to its production context?",
          "nb": "Hvordan bør du knytte filmens fortellergrep til produksjonskonteksten?",
          "fr": "Comment relier l'innovation narrative du film à son contexte de production ?",
          "pt": "Como relacionar a inovação narrativa do filme com o contexto de produção?"
        },
        "options": [
          {
            "id": "first",
            "label": {
              "en": "Claim the film uniquely invented the cinematic flashback",
              "nb": "Hevd at filmen alene oppfant filmens tilbakeblikk",
              "fr": "Affirmer que ce film a inventé à lui seul le flash-back",
              "pt": "Afirmar que o filme inventou sozinho o flashback"
            }
          },
          {
            "id": "isolated",
            "label": {
              "en": "Ignore Pathé's emerging production service and catalogue genres",
              "nb": "Ignorer Pathés fremvoksende produksjonstjeneste og katalogsjangre",
              "fr": "Ignorer le service de production naissant et les genres du catalogue Pathé",
              "pt": "Ignorar o serviço de produção emergente e os géneros do catálogo Pathé"
            }
          },
          {
            "id": "system",
            "label": {
              "en": "Connect the formal device to Pathé's organization and acknowledge uncertainty",
              "nb": "Knytt fortellergrepet til Pathés organisering og anerkjenn usikkerhet",
              "fr": "Relier le procédé à l'organisation de Pathé et reconnaître les incertitudes",
              "pt": "Relacionar o recurso com a organização da Pathé e reconhecer a incerteza"
            }
          }
        ],
        "bestSupportedOptionId": "system",
        "explanation": {
          "en": "The CNC and Pathé foundation dossiers place the film within Zecca's developing multi-tableau drama and company production organization. Describe the supported historical significance without an absolute first-flashback claim.",
          "nb": "CNC og Pathé-stiftelsen plasserer filmen i Zeccas utvikling av drama i flere tablåer og selskapets produksjonsorganisering. Beskriv dokumentert historisk betydning uten å hevde det første tilbakeblikket noensinne.",
          "fr": "Les dossiers CNC et Fondation Pathé situent le film dans le développement des drames en tableaux et de l'organisation de production. Décrivez son importance étayée sans revendiquer un premier flash-back absolu.",
          "pt": "Os dossiers CNC e Fundação Pathé situam o filme no desenvolvimento do drama em quadros e da organização de produção. Descreva a importância documentada sem afirmar um primeiro flashback absoluto."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Study staged topical fiction, uncertain reconstruction and imperial representation in Williamson's 1900 film.",
      "nb": "Studer iscenesatt aktualitetsfiksjon, usikker rekonstruksjon og imperial representasjon i Williamsons film fra 1900.",
      "fr": "Étudiez la fiction d'actualité mise en scène, la reconstruction incertaine et la représentation impériale dans le film de Williamson de 1900.",
      "pt": "Estude a ficção de atualidade encenada, a reconstrução incerta e a representação imperial no filme de Williamson de 1900."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Attack on a China Mission - Bluejackets to the Rescue",
        "publisher": "British Film Institute",
        "url": "https://replay.bfi.org.uk/video/bd0d85a8-9027-5da8-b23c-3a2687695135"
      },
      {
        "id": "s1",
        "title": "Attack on a China Mission (Bluejackets to the Rescue) — Title ID 8382",
        "publisher": "Screen Archive South East",
        "url": "https://screenarchive.brighton.ac.uk/detail/8382/"
      },
      {
        "id": "s2",
        "title": "Cross-cutting in the face of history: The case of Attack on a China Mission",
        "publisher": "Early Popular Visual Culture / Taylor & Francis",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/17460650902775328"
      },
      {
        "id": "s4",
        "title": "All England Was Present at that Siege: Imperial Defences and Island Stories in British Culture",
        "publisher": "Oxford Academic / History Workshop Journal",
        "url": "https://academic.oup.com/hwj/article/93/1/159/6555067"
      },
      {
        "id": "s5",
        "title": "Peking Plots: Fictionalizing the Boxer Rebellion of 1900",
        "publisher": "Cambridge University Press",
        "url": "https://www.cambridge.org/core/journals/victorian-literature-and-culture/article/abs/peking-plots-fictionalizing-the-boxer-rebellion-of-1900/967087D1D32D8AE004692F99DD50EA8E"
      }
    ],
    "questions": [
      {
        "id": "mission-space",
        "area": "camera",
        "prompt": {
          "en": "How could you test the relationship between two fictional spaces without reconstructing a violent scene?",
          "nb": "Hvordan kan du undersøke forholdet mellom to fiktive rom uten å rekonstruere en voldsscene?",
          "fr": "Comment étudier la relation entre deux espaces fictifs sans reconstruire une scène violente ?",
          "pt": "Como estudar a relação entre dois espaços fictícios sem reconstruir uma cena violenta?"
        },
        "options": [
          {
            "id": "draw",
            "label": {
              "en": "Draw two connected spaces in an original everyday story",
              "nb": "Tegn to sammenhengende rom i en egen hverdagsfortelling",
              "fr": "Dessiner deux espaces reliés dans un récit quotidien original",
              "pt": "Desenhar dois espaços ligados numa história quotidiana original"
            }
          },
          {
            "id": "unrelated",
            "label": {
              "en": "Use unrelated views without establishing any spatial relationship",
              "nb": "Bruk urelaterte bilder uten å etablere romlig sammenheng",
              "fr": "Employer des vues sans rapport ni relation spatiale établie",
              "pt": "Usar vistas sem relação espacial estabelecida"
            }
          },
          {
            "id": "exact",
            "label": {
              "en": "Present an invented storyboard as an authenticated historical reconstruction",
              "nb": "Presenter et oppdiktet storyboard som en autentisert historisk rekonstruksjon",
              "fr": "Présenter un storyboard inventé comme reconstruction historique authentifiée",
              "pt": "Apresentar um storyboard inventado como reconstrução histórica autenticada"
            }
          }
        ],
        "bestSupportedOptionId": "draw",
        "explanation": {
          "en": "The BFI and regional archive records describe staged fiction and surviving views. Explore spatial connections through an original nonviolent drawing exercise; it does not establish the original shot order.",
          "nb": "BFI og det regionale arkivet beskriver iscenesatt fiksjon og bevarte bilder. Utforsk romlige forbindelser i en egen ikke-voldelig tegneøvelse; den fastslår ikke den opprinnelige bilderekkefølgen.",
          "fr": "Les notices BFI et régionales décrivent une fiction mise en scène et des vues conservées. Étudiez les liens spatiaux par un dessin original non violent ; il n'établit pas l'ordre original des plans.",
          "pt": "Os registos BFI e regionais descrevem ficção encenada e vistas preservadas. Explore ligações espaciais num desenho original não violento; não estabelece a ordem original dos planos."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "mission-versions",
        "area": "research",
        "prompt": {
          "en": "What should a researcher do when catalogue descriptions and surviving versions disagree?",
          "nb": "Hva bør en forsker gjøre når katalogbeskrivelser og bevarte versjoner ikke stemmer overens?",
          "fr": "Que faire si les descriptions de catalogue et les versions conservées divergent ?",
          "pt": "O que fazer quando descrições de catálogo e versões preservadas divergem?"
        },
        "options": [
          {
            "id": "latest",
            "label": {
              "en": "Assume the latest reconstruction is necessarily the original",
              "nb": "Anta at den nyeste rekonstruksjonen nødvendigvis er originalen",
              "fr": "Supposer que la dernière reconstruction est nécessairement l'original",
              "pt": "Supor que a reconstrução mais recente é necessariamente o original"
            }
          },
          {
            "id": "compare",
            "label": {
              "en": "Compare catalogue evidence, surviving copies and later reconstruction decisions",
              "nb": "Sammenlign katalogbelegg, bevarte kopier og senere rekonstruksjonsvalg",
              "fr": "Comparer les catalogues, les copies conservées et les choix de reconstruction",
              "pt": "Comparar catálogos, cópias preservadas e escolhas de reconstrução"
            }
          },
          {
            "id": "first",
            "label": {
              "en": "Use the catalogue alone to assert a universal first in editing",
              "nb": "Bruk bare katalogen til å hevde en universell førstegang i klippehistorien",
              "fr": "Utiliser le seul catalogue pour affirmer une première absolue du montage",
              "pt": "Usar apenas o catálogo para afirmar uma estreia absoluta na montagem"
            }
          }
        ],
        "bestSupportedOptionId": "compare",
        "explanation": {
          "en": "Dulac and Gaudreault's study in the existing dossier describes discrepancies between rediscovered copies, catalogue descriptions and later reconstruction. Keep those evidence layers distinct; no certain original cross-cutting order is asserted here.",
          "nb": "Dulac og Gaudreaults studie i dokumentasjonen beskriver avvik mellom gjenfunne kopier, katalogbeskrivelser og senere rekonstruksjon. Hold belegglagene adskilt; ingen sikker original kryssklippstruktur fastslås her.",
          "fr": "L'étude de Dulac et Gaudreault décrit des écarts entre copies retrouvées, catalogues et reconstruction ultérieure. Distinguez ces niveaux de preuve ; aucun ordre original de montage alterné n'est affirmé ici.",
          "pt": "O estudo de Dulac e Gaudreault descreve divergências entre cópias recuperadas, catálogos e reconstrução posterior. Distinga estes níveis de evidência; não se afirma aqui uma ordem original certa de montagem alternada."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "mission-representation",
        "area": "research",
        "prompt": {
          "en": "How should you contextualize the film's representation of historical events?",
          "nb": "Hvordan bør du kontekstualisere filmens fremstilling av historiske hendelser?",
          "fr": "Comment contextualiser la représentation des événements historiques dans le film ?",
          "pt": "Como contextualizar a representação dos acontecimentos históricos no filme?"
        },
        "options": [
          {
            "id": "document",
            "label": {
              "en": "Treat the staged fiction as authentic footage from China",
              "nb": "Behandle iscenesatt fiksjon som autentiske opptak fra Kina",
              "fr": "Traiter la fiction mise en scène comme images authentiques de Chine",
              "pt": "Tratar a ficção encenada como imagens autênticas da China"
            }
          },
          {
            "id": "repeat",
            "label": {
              "en": "Repeat the film's stereotypes as reliable historical descriptions",
              "nb": "Gjenta filmens stereotypier som pålitelige historiske beskrivelser",
              "fr": "Répéter les stéréotypes du film comme descriptions historiques fiables",
              "pt": "Repetir os estereótipos do filme como descrições históricas fiáveis"
            }
          },
          {
            "id": "context",
            "label": {
              "en": "Identify fiction, racist characterization and the British imperial context",
              "nb": "Identifiser fiksjon, rasistisk karakterisering og britisk imperial kontekst",
              "fr": "Identifier la fiction, les caractérisations racistes et le contexte impérial britannique",
              "pt": "Identificar a ficção, as caracterizações racistas e o contexto imperial britânico"
            }
          }
        ],
        "bestSupportedOptionId": "context",
        "explanation": {
          "en": "BFI flags racist characterization; the Oxford and Cambridge scholarship in the dossier situates the fictionalization within British imperial culture. Distinguish representation from historical evidence and seek independent perspectives rather than reproducing stereotypes.",
          "nb": "BFI advarer om rasistisk karakterisering; Oxford- og Cambridge-forskningen i dokumentasjonen plasserer fiksjonaliseringen i britisk imperial kultur. Skill fremstilling fra historisk belegg og søk uavhengige perspektiver fremfor å gjenta stereotypier.",
          "fr": "Le BFI signale des caractérisations racistes ; les travaux Oxford et Cambridge situent la fiction dans la culture impériale britannique. Distinguez représentation et preuve historique, et recherchez des perspectives indépendantes plutôt que de reproduire les stéréotypes.",
          "pt": "O BFI assinala caracterizações racistas; os estudos Oxford e Cambridge situam a ficção na cultura imperial britânica. Distinga representação e evidência histórica e procure perspetivas independentes em vez de reproduzir estereótipos."
        },
        "sourceIds": [
          "s0",
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_lonely_villa_1909",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore parallel narrative, communication and the historical development of suspense in Biograph's 1909 film.",
      "nb": "Utforsk parallellfortelling, kommunikasjon og den historiske utviklingen av spenning i Biographs film fra 1909.",
      "fr": "Explorez le récit parallèle, la communication et le développement historique du suspense dans le film Biograph de 1909.",
      "pt": "Explore a narrativa paralela, a comunicação e o desenvolvimento histórico do suspense no filme Biograph de 1909."
    },
    "sources": [
      {
        "id": "s0",
        "title": "The lonely villa",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/2015600152/"
      },
      {
        "id": "s3",
        "title": "Heard over the phone: The Lonely Villa and the de Lorde tradition of the terrors of technology",
        "publisher": "Oxford Academic / Screen",
        "url": "https://academic.oup.com/screen/article-abstract/32/2/184/1630430"
      },
      {
        "id": "s4",
        "title": "Thinking in Pictures: Dramatic Structure in D. W. Griffith's Biograph Films",
        "publisher": "University of California Press",
        "url": "https://www.ucpress.edu/books/thinking-in-pictures/paper"
      },
      {
        "id": "s5",
        "title": "D.W. Griffith And The Origins Of American Narrative Film: The Early Years at Biograph",
        "publisher": "University of Illinois Press",
        "url": "https://www.press.uillinois.edu/books/?id=p063664"
      }
    ],
    "questions": [
      {
        "id": "villa-parallel",
        "area": "camera",
        "prompt": {
          "en": "How can an original benign story make simultaneous activity in separate spaces clear?",
          "nb": "Hvordan kan en egen ufarlig fortelling tydeliggjøre samtidig aktivitet i adskilte rom?",
          "fr": "Comment rendre lisibles des activités simultanées dans des espaces distincts avec un récit original sans danger ?",
          "pt": "Como tornar claras atividades simultâneas em espaços distintos numa história original inofensiva?"
        },
        "options": [
          {
            "id": "parallel",
            "label": {
              "en": "Alternate two clearly established fictional spaces during a shared everyday task",
              "nb": "Veksle mellom to tydelig etablerte fiktive rom under en felles hverdagsoppgave",
              "fr": "Alterner deux espaces fictifs bien établis pendant une tâche quotidienne commune",
              "pt": "Alternar dois espaços fictícios bem estabelecidos durante uma tarefa quotidiana comum"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Switch between unrelated images without any shared narrative purpose",
              "nb": "Veksle mellom urelaterte bilder uten felles fortellermessig formål",
              "fr": "Passer entre des images sans rapport ni objectif narratif commun",
              "pt": "Alternar imagens sem relação nem objetivo narrativo comum"
            }
          },
          {
            "id": "one",
            "label": {
              "en": "Remove every indication that the activities share a time frame",
              "nb": "Fjern alle tegn på at aktivitetene deler en tidsramme",
              "fr": "Supprimer tout indice indiquant un cadre temporel commun",
              "pt": "Eliminar todos os sinais de um quadro temporal comum"
            }
          }
        ],
        "bestSupportedOptionId": "parallel",
        "explanation": {
          "en": "The existing scholarship treats parallel narrative as a central formal feature. Use a harmless original task, such as preparing a shared surprise, to compare the readability of alternating views without reconstructing the film's violent plot.",
          "nb": "Den eksisterende forskningen behandler parallellfortelling som et sentralt formgrep. Bruk en egen ufarlig oppgave, som å forberede en felles overraskelse, til å sammenligne lesbarheten i vekslende bilder uten å rekonstruere filmens voldelige handling.",
          "fr": "Les travaux cités traitent le récit parallèle comme un procédé central. Utilisez une tâche originale sans danger, comme préparer une surprise commune, pour comparer la lisibilité des vues alternées sans reconstruire l'intrigue violente.",
          "pt": "Os estudos citados tratam a narrativa paralela como recurso central. Use uma tarefa original inofensiva, como preparar uma surpresa comum, para comparar a clareza das vistas alternadas sem reconstruir o enredo violento."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "villa-communication",
        "area": "sound",
        "prompt": {
          "en": "How can a communication device connect separate spaces in a silent-film exercise?",
          "nb": "Hvordan kan et kommunikasjonsapparat knytte sammen adskilte rom i en stumfilmøvelse?",
          "fr": "Comment un dispositif de communication peut-il relier des espaces distincts dans un exercice de cinéma muet ?",
          "pt": "Como pode um dispositivo de comunicação ligar espaços distintos num exercício de cinema mudo?"
        },
        "options": [
          {
            "id": "audio",
            "label": {
              "en": "Assume the historical silent film contains recorded telephone dialogue",
              "nb": "Anta at den historiske stumfilmen inneholder innspilt telefondialog",
              "fr": "Supposer que le film muet contient un dialogue téléphonique enregistré",
              "pt": "Supor que o filme mudo contém diálogo telefónico gravado"
            }
          },
          {
            "id": "visual",
            "label": {
              "en": "Show the communication cue and the related visual response in another space",
              "nb": "Vis kommunikasjonssignalet og den tilhørende visuelle responsen i et annet rom",
              "fr": "Montrer le signal de communication et la réponse visuelle correspondante dans un autre espace",
              "pt": "Mostrar o sinal de comunicação e a resposta visual correspondente noutro espaço"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Treat communication as an unrelated decorative object",
              "nb": "Behandle kommunikasjonen som en urelatert dekorativ gjenstand",
              "fr": "Traiter la communication comme un objet décoratif sans rapport",
              "pt": "Tratar a comunicação como um objeto decorativo sem relação"
            }
          }
        ],
        "bestSupportedOptionId": "visual",
        "explanation": {
          "en": "Gunning's study in the dossier connects the telephone motif with parallel narrative. In a new silent exercise, make communication legible through visual cues and responses; do not attribute synchronized dialogue to the historical production.",
          "nb": "Gunnings studie i dokumentasjonen knytter telefonmotivet til parallellfortellingen. Gjør kommunikasjonen lesbar med visuelle signaler og responser i en ny stumfilmøvelse; ikke tilskriv den historiske produksjonen synkron dialog.",
          "fr": "L'étude de Gunning relie le motif du téléphone au récit parallèle. Dans un nouvel exercice muet, rendez la communication lisible par des signes et réponses visuels, sans attribuer de dialogue synchrone à la production historique.",
          "pt": "O estudo de Gunning liga o motivo do telefone à narrativa paralela. Num novo exercício mudo, torne a comunicação clara por sinais e respostas visuais, sem atribuir diálogo sincronizado à produção histórica."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "villa-history",
        "area": "research",
        "prompt": {
          "en": "How should you explain the film's contribution to the history of parallel editing?",
          "nb": "Hvordan bør du forklare filmens bidrag til parallellklippingens historie?",
          "fr": "Comment expliquer la contribution du film à l'histoire du montage alterné ?",
          "pt": "Como explicar o contributo do filme para a história da montagem alternada?"
        },
        "options": [
          {
            "id": "inventor",
            "label": {
              "en": "Attribute all cross-cutting exclusively to Griffith",
              "nb": "Tilskriv all kryssklipping utelukkende til Griffith",
              "fr": "Attribuer tout le montage alterné exclusivement à Griffith",
              "pt": "Atribuir toda a montagem alternada exclusivamente a Griffith"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore earlier international experiments and production conditions",
              "nb": "Ignorer tidligere internasjonale forsøk og produksjonsvilkår",
              "fr": "Ignorer les expériences internationales antérieures et les conditions de production",
              "pt": "Ignorar experiências internacionais anteriores e condições de produção"
            }
          },
          {
            "id": "development",
            "label": {
              "en": "Describe the contribution within wider international and industrial developments",
              "nb": "Beskriv bidraget innenfor en bredere internasjonal og industriell utvikling",
              "fr": "Décrire l'apport dans une évolution internationale et industrielle plus large",
              "pt": "Descrever o contributo numa evolução internacional e industrial mais ampla"
            }
          }
        ],
        "bestSupportedOptionId": "development",
        "explanation": {
          "en": "The university-press scholarship recorded in the dossier explicitly notes earlier international intercutting practices and wider industrial changes. Describe Griffith's contribution as a historical development, not a sole-inventor claim.",
          "nb": "Universitetsforlagenes forskning i dokumentasjonen omtaler tidligere internasjonal kryssklipping og bredere industrielle endringer. Beskriv Griffiths bidrag som en historisk utvikling, ikke som en påstand om én oppfinner.",
          "fr": "Les travaux universitaires cités évoquent des pratiques internationales antérieures de montage et des transformations industrielles. Décrivez l'apport de Griffith comme une évolution historique, non comme une invention individuelle exclusive.",
          "pt": "Os estudos universitários citados referem práticas internacionais anteriores de montagem e transformações industriais. Descreva o contributo de Griffith como evolução histórica, não como invenção individual exclusiva."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_story_of_the_kelly_gang_1906",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore feature-length production, touring exhibition and the limits of surviving fragments.",
      "nb": "Utforsk langfilmproduksjon, turnévisning og grensene for bevarte fragmenter.",
      "fr": "Explorez la production de longs métrages, les projections itinérantes et les limites des fragments conservés.",
      "pt": "Explore a produção de longas-metragens, a exibição itinerante e os limites dos fragmentos preservados."
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Story of the Kelly Gang",
        "publisher": "National Film and Sound Archive of Australia (NFSA)",
        "url": "https://www.nfsa.gov.au/stories/articles/story-kelly-gang"
      },
      {
        "id": "s1",
        "title": "THE STORY OF THE KELLY GANG [1906] : [PORDENONE RESTORATION] - TITLE VERSION",
        "publisher": "NFSA Pro",
        "url": "https://pro.nfsa.gov.au/titles/RSKFBH59"
      },
      {
        "id": "s2",
        "title": "The Story of the Kelly Gang (1906) – Memory of the World",
        "publisher": "UNESCO Memory of the World",
        "url": "https://www.unesco.org/en/memory-world/story-kelly-gang-1906"
      },
      {
        "id": "s3",
        "title": "The Story of the Kelly Gang (1906)",
        "publisher": "British Film Institute (BFI)",
        "url": "https://www.bfi.org.uk/film/e8572cbd-21d7-593c-9ca5-7364ea3fc6e6/the-story-of-the-kelly-gang"
      }
    ],
    "questions": [
      {
        "id": "kelly-reels",
        "area": "camera",
        "prompt": {
          "en": "How could you plan a long fictional programme using several reels?",
          "nb": "Hvordan kan du planlegge et langt fiktivt program fordelt på flere filmruller?",
          "fr": "Comment organiser un long programme fictif sur plusieurs bobines ?",
          "pt": "Como planear um longo programa fictício em várias bobinas?"
        },
        "options": [
          {
            "id": "reels",
            "label": {
              "en": "Plan connected narrative sections and reel transitions",
              "nb": "Planlegg sammenhengende fortellingsdeler og overganger mellom rullene",
              "fr": "Prévoir des parties narratives reliées et les transitions entre bobines",
              "pt": "Planear partes narrativas ligadas e transições entre bobinas"
            }
          },
          {
            "id": "short",
            "label": {
              "en": "Treat the entire programme as one unrelated short attraction",
              "nb": "Behandle hele programmet som én løsrevet kort attraksjon",
              "fr": "Traiter tout le programme comme une attraction courte isolée",
              "pt": "Tratar todo o programa como uma atração curta isolada"
            }
          },
          {
            "id": "exact",
            "label": {
              "en": "Present an invented plan as the authentic historical reel breakdown",
              "nb": "Presenter en oppdiktet plan som den autentiske historiske rullinndelingen",
              "fr": "Présenter un plan inventé comme le découpage historique authentique",
              "pt": "Apresentar um plano inventado como a divisão histórica autêntica"
            }
          }
        ],
        "bestSupportedOptionId": "reels",
        "explanation": {
          "en": "The NFSA dossier describes an original of about five reels. Plan a harmless original fictional journey in several connected parts; this exercise does not recover the historical reel breakdown.",
          "nb": "NFSA-dokumentasjonen beskriver en original på omtrent fem ruller. Planlegg en egen ufarlig fiktiv reise i flere sammenhengende deler; øvelsen rekonstruerer ikke den historiske rullinndelingen.",
          "fr": "Le dossier NFSA décrit un original d'environ cinq bobines. Planifiez un voyage fictif original et sans danger en plusieurs parties liées ; l'exercice ne restitue pas le découpage historique.",
          "pt": "O dossier NFSA descreve um original de cerca de cinco bobinas. Planeie uma viagem fictícia original e segura em partes ligadas; o exercício não recupera a divisão histórica."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "kelly-exhibition",
        "area": "sound",
        "prompt": {
          "en": "How should you account for live presentation during early touring exhibition?",
          "nb": "Hvordan bør du ta hensyn til levende presentasjon under tidlig turnévisning?",
          "fr": "Comment prendre en compte la présentation en direct lors des projections itinérantes ?",
          "pt": "Como considerar a apresentação ao vivo nas exibições itinerantes iniciais?"
        },
        "options": [
          {
            "id": "sync",
            "label": {
              "en": "Describe live narration as synchronized sound recorded on the film",
              "nb": "Beskriv levende fortellerstemme som synkron lyd innspilt på filmen",
              "fr": "Décrire la narration en direct comme du son synchrone enregistré sur le film",
              "pt": "Descrever a narração ao vivo como som sincronizado gravado no filme"
            }
          },
          {
            "id": "live",
            "label": {
              "en": "Separate photographed material from narration and live effects",
              "nb": "Skill det fotograferte materialet fra fortellerstemme og levende lydeffekter",
              "fr": "Distinguer les images filmées de la narration et des effets en direct",
              "pt": "Separar o material filmado da narração e dos efeitos ao vivo"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore the exhibition conditions when planning the programme",
              "nb": "Ignorer visningsforholdene når programmet planlegges",
              "fr": "Ignorer les conditions de projection dans la préparation du programme",
              "pt": "Ignorar as condições de exibição ao planear o programa"
            }
          }
        ],
        "bestSupportedOptionId": "live",
        "explanation": {
          "en": "NFSA Pro describes a lecturer and live effects accompanying the presentation. Distinguish these exhibition practices from the photographed work and do not attribute a recorded synchronized soundtrack to it.",
          "nb": "NFSA Pro beskriver en forteller og levende effekter under visningen. Skill denne visningspraksisen fra det fotograferte verket, og ikke tilskriv filmen et innspilt synkront lydspor.",
          "fr": "NFSA Pro décrit un bonimenteur et des effets en direct pendant la projection. Distinguez ces pratiques des images filmées sans attribuer de bande sonore synchrone enregistrée au film.",
          "pt": "NFSA Pro descreve um narrador e efeitos ao vivo durante a exibição. Distinga estas práticas das imagens filmadas sem atribuir ao filme uma banda sonora sincronizada gravada."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "kelly-fragments",
        "area": "research",
        "prompt": {
          "en": "How should a historian present the surviving restored material?",
          "nb": "Hvordan bør en historiker presentere det bevarte restaurerte materialet?",
          "fr": "Comment présenter le matériel restauré qui subsiste ?",
          "pt": "Como apresentar o material restaurado que sobreviveu?"
        },
        "options": [
          {
            "id": "complete",
            "label": {
              "en": "Label the restored fragments as the entire original feature",
              "nb": "Merk de restaurerte fragmentene som hele den opprinnelige langfilmen",
              "fr": "Présenter les fragments restaurés comme le long métrage original complet",
              "pt": "Apresentar os fragmentos restaurados como a longa-metragem original completa"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "Fill all missing scenes with guesses and label them archival evidence",
              "nb": "Fyll alle manglende scener med gjetninger og kall dem arkivbelegg",
              "fr": "Combler les scènes manquantes par des hypothèses présentées comme preuves",
              "pt": "Preencher cenas em falta com suposições apresentadas como provas"
            }
          },
          {
            "id": "limits",
            "label": {
              "en": "Distinguish surviving footage, reconstruction and missing material",
              "nb": "Skill bevarte opptak, rekonstruksjon og manglende materiale",
              "fr": "Distinguer images conservées, reconstruction et matériel manquant",
              "pt": "Distinguir imagens preservadas, reconstrução e material em falta"
            }
          }
        ],
        "bestSupportedOptionId": "limits",
        "explanation": {
          "en": "NFSA and UNESCO document the landmark feature scale and fragmentary survival. Explain its historical importance without claiming that a complete original survives or that feature cinema had one universal inventor.",
          "nb": "NFSA og UNESCO dokumenterer langfilmformatets betydning og fragmentarisk bevaring. Forklar den historiske betydningen uten å hevde at hele originalen er bevart eller at langfilmen hadde én universell oppfinner.",
          "fr": "NFSA et UNESCO documentent l'importance du format long et la conservation fragmentaire. Expliquez cet apport sans prétendre que l'original complet subsiste ni désigner un inventeur unique du long métrage.",
          "pt": "NFSA e UNESCO documentam a importância do formato longo e a preservação fragmentária. Explique o contributo sem afirmar que o original completo sobrevive ou indicar um inventor único da longa-metragem."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_queen_elizabeth_1912",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore star prestige, costume design, distribution rights and print history.",
      "nb": "Utforsk stjerneprestisje, kostymedesign, distribusjonsrettigheter og kopihistorie.",
      "fr": "Explorez le prestige des vedettes, les costumes, les droits de distribution et l'histoire des copies.",
      "pt": "Explore o prestígio das estrelas, os figurinos, os direitos de distribuição e a história das cópias."
    },
    "sources": [
      {
        "id": "s0",
        "title": "La Reine Elisabeth",
        "publisher": "Fondation Jérôme Seydoux-Pathé",
        "url": "https://www.fondation-jeromeseydoux-pathe.com/event/2251"
      },
      {
        "id": "s1",
        "title": "Strike a pose: fashion and film through the ages",
        "publisher": "BFI Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/strike-pose-fashion-film-through-ages"
      },
      {
        "id": "s2",
        "title": "Short Film Program 1 — Modern Matinees: Iris Barry's History of Film",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/events/5818"
      },
      {
        "id": "s3",
        "title": "Queen Elizabeth — Research Catalog",
        "publisher": "New York Public Library",
        "url": "https://test.nypl.org/research/research-catalog/bib/b15562649"
      }
    ],
    "questions": [
      {
        "id": "queen-costume",
        "area": "camera",
        "prompt": {
          "en": "How can costume and framing support a prestige performance?",
          "nb": "Hvordan kan kostyme og bildeutsnitt understøtte en prestisjepreget skuespillerprestasjon?",
          "fr": "Comment le costume et le cadrage peuvent-ils soutenir une interprétation de prestige ?",
          "pt": "Como podem figurino e enquadramento apoiar uma interpretação de prestígio?"
        },
        "options": [
          {
            "id": "costume",
            "label": {
              "en": "Develop an original costume sketch and framing that make the performance readable",
              "nb": "Lag en egen kostymeskisse og et utsnitt som gjør prestasjonen tydelig",
              "fr": "Créer un croquis original de costume et un cadrage qui rendent le jeu lisible",
              "pt": "Criar um esboço original de figurino e um enquadramento que tornem a interpretação legível"
            }
          },
          {
            "id": "neutral",
            "label": {
              "en": "Ignore the visual relationship between costume and performance",
              "nb": "Ignorer det visuelle forholdet mellom kostyme og prestasjon",
              "fr": "Ignorer la relation visuelle entre costume et interprétation",
              "pt": "Ignorar a relação visual entre figurino e interpretação"
            }
          },
          {
            "id": "copy",
            "label": {
              "en": "Claim an invented costume sketch is an authenticated Poiret design",
              "nb": "Hevd at en oppdiktet kostymeskisse er et autentisert Poiret-design",
              "fr": "Présenter un croquis inventé comme un dessin authentifié de Poiret",
              "pt": "Apresentar um esboço inventado como um desenho autenticado de Poiret"
            }
          }
        ],
        "bestSupportedOptionId": "costume",
        "explanation": {
          "en": "BFI documents Poiret's stylized costumes for Bernhardt. Explore how design and framing support an original fictional performance; the exercise does not reproduce an authenticated historical costume.",
          "nb": "BFI dokumenterer Poirets stiliserte kostymer for Bernhardt. Utforsk hvordan design og utsnitt støtter en egen fiktiv prestasjon; øvelsen gjengir ikke et autentisert historisk kostyme.",
          "fr": "Le BFI documente les costumes stylisés de Poiret pour Bernhardt. Explorez le lien entre design, cadrage et jeu fictif original ; l'exercice ne reproduit pas un costume historique authentifié.",
          "pt": "O BFI documenta os figurinos estilizados de Poiret para Bernhardt. Explore a relação entre design, enquadramento e interpretação fictícia original; o exercício não reproduz um figurino histórico autenticado."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "queen-rights",
        "area": "research",
        "prompt": {
          "en": "How should you distinguish production from international distribution?",
          "nb": "Hvordan bør du skille produksjon fra internasjonal distribusjon?",
          "fr": "Comment distinguer la production de la distribution internationale ?",
          "pt": "Como distinguir a produção da distribuição internacional?"
        },
        "options": [
          {
            "id": "same",
            "label": {
              "en": "Assign all production and distribution credits to the rights buyer",
              "nb": "Tilskriv alle produksjons- og distribusjonskrediteringer rettighetskjøperen",
              "fr": "Attribuer tous les crédits de production et de distribution à l'acheteur des droits",
              "pt": "Atribuir todos os créditos de produção e distribuição ao comprador dos direitos"
            }
          },
          {
            "id": "roles",
            "label": {
              "en": "Map French production separately from US rights and presentation",
              "nb": "Kartlegg fransk produksjon adskilt fra amerikanske rettigheter og visning",
              "fr": "Cartographier séparément la production française et les droits et projections américains",
              "pt": "Mapear separadamente a produção francesa e os direitos e exibição nos EUA"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore territorial rights when explaining the feature economy",
              "nb": "Ignorer territorielle rettigheter når langfilmøkonomien forklares",
              "fr": "Ignorer les droits territoriaux pour expliquer l'économie du long métrage",
              "pt": "Ignorar os direitos territoriais ao explicar a economia da longa-metragem"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "The Pathé foundation identifies Le Film d'Art production, while BFI documents Zukor's US rights purchase. Explain how distribution helped the feature economy without transferring the French production credit to the distributor.",
          "nb": "Pathé-stiftelsen identifiserer Le Film d'Art-produksjonen, mens BFI dokumenterer Zukors kjøp av USA-rettigheter. Forklar distribusjonens rolle uten å overføre fransk produksjonskreditering til distributøren.",
          "fr": "La Fondation Pathé identifie la production du Film d'Art ; le BFI documente l'achat des droits américains par Zukor. Expliquez le rôle de la distribution sans transférer le crédit de production français.",
          "pt": "A Fundação Pathé identifica a produção Le Film d'Art e o BFI documenta a compra dos direitos americanos por Zukor. Explique a distribuição sem transferir o crédito de produção francês."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "queen-prints",
        "area": "research",
        "prompt": {
          "en": "How should you report different catalogue durations and credits?",
          "nb": "Hvordan bør du rapportere ulike katalogvarigheter og krediteringer?",
          "fr": "Comment rendre compte des durées et crédits divergents des catalogues ?",
          "pt": "Como relatar durações e créditos diferentes nos catálogos?"
        },
        "options": [
          {
            "id": "force",
            "label": {
              "en": "Choose one duration and claim it applies to every surviving print",
              "nb": "Velg én varighet og hev at den gjelder alle bevarte kopier",
              "fr": "Choisir une durée et l'attribuer à toutes les copies conservées",
              "pt": "Escolher uma duração e atribuí-la a todas as cópias preservadas"
            }
          },
          {
            "id": "average",
            "label": {
              "en": "Average conflicting records into a new asserted original duration",
              "nb": "Beregn gjennomsnittet av sprikende oppføringer som en ny påstått originalvarighet",
              "fr": "Moyenner les notices divergentes pour affirmer une nouvelle durée originale",
              "pt": "Calcular a média dos registos divergentes como suposta duração original"
            }
          },
          {
            "id": "attribute",
            "label": {
              "en": "Attribute each duration and credit to its specific source and version",
              "nb": "Knytt hver varighet og kreditering til sin konkrete kilde og versjon",
              "fr": "Attribuer chaque durée et crédit à sa source et à sa version",
              "pt": "Atribuir cada duração e crédito à respetiva fonte e versão"
            }
          }
        ],
        "bestSupportedOptionId": "attribute",
        "explanation": {
          "en": "The Pathé, MoMA and NYPL records describe different durations and credits. Preserve those differences and distinguish later musical accompaniment from synchronized original sound rather than declaring one universal version.",
          "nb": "Pathé-, MoMA- og NYPL-oppføringene beskriver ulike varigheter og krediteringer. Bevar forskjellene og skill senere musikkakkompagnement fra synkron originallyd fremfor å erklære én universell versjon.",
          "fr": "Les notices Pathé, MoMA et NYPL décrivent des durées et crédits différents. Préservez ces différences et distinguez l'accompagnement musical ultérieur du son synchrone original sans déclarer une version universelle.",
          "pt": "Os registos Pathé, MoMA e NYPL descrevem durações e créditos distintos. Preserve as diferenças e distinga acompanhamento musical posterior de som sincronizado original, sem declarar uma versão universal."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_traffic_in_souls_1913",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore feature economics, the separation of production and distribution, and evidence behind publicity.",
      "nb": "Utforsk langfilmøkonomi, skillet mellom produksjon og distribusjon og belegg bak markedsføringen.",
      "fr": "Explorez l'économie du long métrage, la séparation entre production et distribution et les preuves derrière la publicité.",
      "pt": "Explore a economia da longa-metragem, a separação entre produção e distribuição e a evidência por trás da publicidade."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Traffic in Souls / Where Are My Children?",
        "publisher": "UCLA Film & Television Archive",
        "url": "https://cinema.ucla.edu/events/traffic-in-souls-1913-where-are-my-children-1916-2012-05-10/"
      },
      {
        "id": "s1",
        "title": "Traffic in Souls",
        "publisher": "American Film Institute Catalog",
        "url": "https://catalog.afi.com/Film/2111-TRAFFIC-IN-SOULS"
      },
      {
        "id": "s2",
        "title": "Traffic in Souls — Motion picture copyright descriptions collection",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/s1229l01767/"
      },
      {
        "id": "s3",
        "title": "The long take: Great footage",
        "publisher": "British Film Institute / Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage"
      },
      {
        "id": "s4",
        "title": "National Film Registry 2006",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/loc/lcib/07012/film.html"
      }
    ],
    "questions": [
      {
        "id": "traffic-economics",
        "area": "research",
        "prompt": {
          "en": "How would you evaluate the risk of a longer theatrical programme?",
          "nb": "Hvordan vil du vurdere risikoen ved et lengre kinoprogram?",
          "fr": "Comment évaluer le risque d'un programme de projection plus long ?",
          "pt": "Como avaliar o risco de um programa de exibição mais longo?"
        },
        "options": [
          {
            "id": "model",
            "label": {
              "en": "Compare hypothetical production costs, bookings and audience assumptions",
              "nb": "Sammenlign hypotetiske produksjonskostnader, visningsavtaler og publikumsantakelser",
              "fr": "Comparer coûts de production, réservations et hypothèses de public fictifs",
              "pt": "Comparar custos de produção, reservas de sessões e pressupostos de público hipotéticos"
            }
          },
          {
            "id": "guarantee",
            "label": {
              "en": "Assume every longer film guarantees the same commercial success",
              "nb": "Anta at alle lengre filmer garanterer samme kommersielle suksess",
              "fr": "Supposer que tout film plus long garantit le même succès commercial",
              "pt": "Supor que todo filme mais longo garante o mesmo sucesso comercial"
            }
          },
          {
            "id": "cost",
            "label": {
              "en": "Ignore exhibition bookings when discussing production risk",
              "nb": "Ignorer visningsavtaler når produksjonsrisiko diskuteres",
              "fr": "Ignorer les réservations de salles dans l'analyse du risque",
              "pt": "Ignorar as reservas de sessões na análise do risco"
            }
          }
        ],
        "bestSupportedOptionId": "model",
        "explanation": {
          "en": "UCLA records reported returns and bookings, while BFI places the case in the transition toward longer programmes. Use hypothetical figures to examine risk; do not treat reported historical returns as guaranteed future results.",
          "nb": "UCLA dokumenterer rapporterte inntekter og visningsavtaler, mens BFI plasserer filmen i overgangen til lengre programmer. Bruk hypotetiske tall til å undersøke risiko; ikke behandle rapporterte historiske inntekter som garanterte fremtidige resultater.",
          "fr": "UCLA rapporte des recettes et des réservations de salles ; le BFI situe le film dans la transition vers des programmes plus longs. Utilisez des chiffres hypothétiques pour étudier le risque, sans garantir des résultats futurs.",
          "pt": "A UCLA regista receitas e reservas de sessões relatadas; o BFI situa o filme na transição para programas mais longos. Use valores hipotéticos para estudar o risco, sem garantir resultados futuros."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "traffic-roles",
        "area": "research",
        "prompt": {
          "en": "How should you record the companies responsible for the film?",
          "nb": "Hvordan bør du registrere selskapene som stod bak filmen?",
          "fr": "Comment identifier les sociétés responsables du film ?",
          "pt": "Como registar as empresas responsáveis pelo filme?"
        },
        "options": [
          {
            "id": "merge",
            "label": {
              "en": "Combine every company role into an undifferentiated producer credit",
              "nb": "Slå sammen alle selskapsroller til én udifferensiert produsentkreditering",
              "fr": "Fusionner tous les rôles des sociétés en un crédit de production indistinct",
              "pt": "Fundir todos os papéis das empresas num crédito de produção indiferenciado"
            }
          },
          {
            "id": "separate",
            "label": {
              "en": "Distinguish production company, distributor and copyright claimant",
              "nb": "Skill produksjonsselskap, distributør og innehaver av opphavsrettskrav",
              "fr": "Distinguer société de production, distributeur et titulaire déclaré du copyright",
              "pt": "Distinguir produtora, distribuidora e titular declarado dos direitos de autor"
            }
          },
          {
            "id": "infer",
            "label": {
              "en": "Infer production authorship solely from the copyright registration",
              "nb": "Utled produksjonsansvar utelukkende fra opphavsrettsregistreringen",
              "fr": "Déduire la production uniquement de l'enregistrement du copyright",
              "pt": "Deduzir a produção apenas do registo de direitos de autor"
            }
          }
        ],
        "bestSupportedOptionId": "separate",
        "explanation": {
          "en": "AFI identifies IMP production and Universal distribution, and the LOC copyright record names Universal as claimant. Document these distinct functions rather than treating copyright metadata as complete production attribution.",
          "nb": "AFI identifiserer IMP-produksjon og Universal-distribusjon, og LOCs opphavsrettsoppføring navngir Universal som kravshaver. Dokumenter de ulike funksjonene fremfor å behandle registreringen som fullstendig produksjonskreditering.",
          "fr": "L'AFI identifie la production IMP et la distribution Universal ; la notice LOC désigne Universal comme titulaire déclaré. Documentez ces fonctions distinctes plutôt que de traiter le copyright comme un crédit de production complet.",
          "pt": "A AFI identifica a produção IMP e a distribuição Universal; o registo LOC indica a Universal como titular declarado. Documente estas funções distintas em vez de tratar o registo como crédito de produção completo."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "traffic-publicity",
        "area": "research",
        "prompt": {
          "en": "How should a researcher interpret promotional claims about a staged social melodrama?",
          "nb": "Hvordan bør en forsker tolke markedsføringspåstander om et iscenesatt sosialt melodrama?",
          "fr": "Comment interpréter les affirmations publicitaires sur un mélodrame social mis en scène ?",
          "pt": "Como interpretar afirmações publicitárias sobre um melodrama social encenado?"
        },
        "options": [
          {
            "id": "endorsement",
            "label": {
              "en": "Treat every advertised institutional endorsement as confirmed",
              "nb": "Behandle enhver annonsert institusjonell støtte som bekreftet",
              "fr": "Considérer toute approbation institutionnelle annoncée comme confirmée",
              "pt": "Tratar todo apoio institucional anunciado como confirmado"
            }
          },
          {
            "id": "documentary",
            "label": {
              "en": "Treat fictional scenes filmed on real streets as documentary proof",
              "nb": "Behandle fiktive scener filmet i virkelige gater som dokumentarisk bevis",
              "fr": "Traiter les scènes fictives filmées dans de vraies rues comme preuves documentaires",
              "pt": "Tratar cenas fictícias filmadas em ruas reais como prova documental"
            }
          },
          {
            "id": "evidence",
            "label": {
              "en": "Separate fiction, promotional claims and independently verified evidence",
              "nb": "Skill fiksjon, markedsføringspåstander og uavhengig verifisert belegg",
              "fr": "Distinguer fiction, affirmations publicitaires et preuves vérifiées indépendamment",
              "pt": "Distinguir ficção, afirmações publicitárias e evidência verificada independentemente"
            }
          }
        ],
        "bestSupportedOptionId": "evidence",
        "explanation": {
          "en": "AFI records publicity invoking investigations and a denial of authorization, while UCLA documents real locations used for staged fiction. Neither publicity nor location footage validates the film's social claims; examine independent evidence.",
          "nb": "AFI omtaler markedsføring som viste til undersøkelser og en benektelse av godkjenning, mens UCLA dokumenterer virkelige opptakssteder brukt til iscenesatt fiksjon. Verken reklame eller opptakssteder bekrefter filmens sosiale påstander; undersøk uavhengig belegg.",
          "fr": "L'AFI signale une publicité invoquant des enquêtes et un démenti d'autorisation ; UCLA documente des lieux réels utilisés pour une fiction. Ni la publicité ni les lieux ne valident les affirmations sociales du film ; recherchez des preuves indépendantes.",
          "pt": "A AFI regista publicidade que invocava investigações e uma negação de autorização; a UCLA documenta locais reais usados para ficção. Nem a publicidade nem os locais validam as afirmações sociais do filme; procure evidência independente."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
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
