import type { FilmWorkLanguage } from "../../core/filmWorkLanguage.js";

/**
 * Four pre-existing Production Cases receive evidence-backed craft decisions.
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
