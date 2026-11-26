import type { FilmWorkLanguage } from "../../core/filmWorkLanguage.js";

/**
 * Fifty-four pre-existing Production Cases receive evidence-backed craft decisions.
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
  },
  {
    "scenarioId": "scenario_fantomas_1913",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore recurring characters, literary adaptation and the identity of individual films within the Gaumont cycle.",
      "nb": "Utforsk gjennomgående figurer, litterær adaptasjon og de enkelte filmenes identitet i Gaumont-serien.",
      "fr": "Explorez les personnages récurrents, l'adaptation littéraire et l'identité des films du cycle Gaumont.",
      "pt": "Explore personagens recorrentes, adaptação literária e a identidade dos filmes do ciclo Gaumont."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Fantômas (Feuillade)",
        "publisher": "Gaumont",
        "url": "https://www.gaumont.com/en/movie/fantomas-0"
      },
      {
        "id": "s1",
        "title": "Fantômas — Louis Feuillade, 1913",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/48519.html"
      },
      {
        "id": "s2",
        "title": "Juve contre Fantômas — conventional title record",
        "publisher": "Bibliothèque nationale de France",
        "url": "https://catalogue.bnf.fr/ark:/12148/cb16462208q"
      },
      {
        "id": "s3",
        "title": "Le Mort qui tue — conventional title record",
        "publisher": "Bibliothèque nationale de France",
        "url": "https://catalogue.bnf.fr/ark:/12148/cb16472192c"
      }
    ],
    "questions": [
      {
        "id": "fantomas-cycle",
        "area": "research",
        "prompt": {
          "en": "How can an original fictional series maintain continuity between distinct films?",
          "nb": "Hvordan kan en egen fiktiv serie bevare kontinuitet mellom selvstendige filmer?",
          "fr": "Comment une série fictive originale peut-elle maintenir la continuité entre des films distincts ?",
          "pt": "Como pode uma série ficcional original manter a continuidade entre filmes distintos?"
        },
        "options": [
          {
            "id": "memory",
            "label": {
              "en": "Give recurring characters recognizable traits and each film a distinct narrative identity",
              "nb": "Gi gjennomgående figurer gjenkjennelige trekk og hver film en egen fortellingsidentitet",
              "fr": "Donner aux personnages récurrents des traits reconnaissables et à chaque film une identité narrative propre",
              "pt": "Dar às personagens recorrentes traços reconhecíveis e a cada filme uma identidade narrativa própria"
            }
          },
          {
            "id": "reset",
            "label": {
              "en": "Discard all recurring character relationships after each film",
              "nb": "Forkast alle gjennomgående figurrelasjoner etter hver film",
              "fr": "Supprimer toutes les relations récurrentes après chaque film",
              "pt": "Eliminar todas as relações recorrentes após cada filme"
            }
          },
          {
            "id": "template",
            "label": {
              "en": "Assume every film follows a later television episode formula",
              "nb": "Anta at alle filmene følger en senere TV-episodeformel",
              "fr": "Supposer que chaque film suit une formule télévisuelle ultérieure",
              "pt": "Supor que cada filme segue uma fórmula televisiva posterior"
            }
          }
        ],
        "bestSupportedOptionId": "memory",
        "explanation": {
          "en": "Gaumont identifies the recurring ensemble, while the BnF records identify individual entries in a five-film cycle. Design a new benign fictional series with continuity and distinct instalments without imposing a later serial formula.",
          "nb": "Gaumont identifiserer det gjennomgående ensemblet, mens BnF registrerer enkeltfilmer i en serie på fem. Lag en egen ufarlig fiksjonsserie med kontinuitet og selvstendige deler uten å påføre en senere serieformel.",
          "fr": "Gaumont identifie la distribution récurrente et la BnF distingue les films d'un cycle de cinq. Concevez une fiction originale sans danger qui associe continuité et parties distinctes sans imposer une formule sérielle ultérieure.",
          "pt": "A Gaumont identifica o elenco recorrente e a BnF distingue os filmes de um ciclo de cinco. Crie uma ficção original inofensiva com continuidade e partes distintas sem impor uma fórmula serial posterior."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      },
      {
        "id": "fantomas-adaptation",
        "area": "research",
        "prompt": {
          "en": "How should a producer document the relationship between literature and a film cycle?",
          "nb": "Hvordan bør en produsent dokumentere forholdet mellom litteratur og en filmserie?",
          "fr": "Comment documenter le rapport entre littérature et cycle cinématographique ?",
          "pt": "Como documentar a relação entre literatura e ciclo cinematográfico?"
        },
        "options": [
          {
            "id": "erase",
            "label": {
              "en": "Omit the source authors when documenting the adaptation",
              "nb": "Utelat kildeforfatterne når adaptasjonen dokumenteres",
              "fr": "Omettre les auteurs des œuvres adaptées",
              "pt": "Omitir os autores das obras adaptadas"
            }
          },
          {
            "id": "credits",
            "label": {
              "en": "Distinguish the literary authors, film adaptation and production company",
              "nb": "Skill de litterære forfatterne, filmadaptasjonen og produksjonsselskapet",
              "fr": "Distinguer auteurs littéraires, adaptation et société de production",
              "pt": "Distinguir autores literários, adaptação e produtora"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "Attribute the entire literary and film history to a single creator",
              "nb": "Tilskriv hele litteratur- og filmhistorien én enkelt skaper",
              "fr": "Attribuer toute l'histoire littéraire et filmique à un seul créateur",
              "pt": "Atribuir toda a história literária e cinematográfica a um único criador"
            }
          }
        ],
        "bestSupportedOptionId": "credits",
        "explanation": {
          "en": "The Cinémathèque record credits Souvestre and Allain alongside Feuillade and the Gaumont production. Preserve the documented contributions and distinguish literary authorship from the film adaptation and its industrial organization.",
          "nb": "Cinémathèque-oppføringen krediterer Souvestre og Allain sammen med Feuillade og Gaumont-produksjonen. Bevar de dokumenterte bidragene og skill litterært forfatterskap fra filmadaptasjon og industriell organisering.",
          "fr": "La notice de la Cinémathèque crédite Souvestre et Allain aux côtés de Feuillade et de Gaumont. Préservez ces contributions et distinguez création littéraire, adaptation et organisation industrielle.",
          "pt": "O registo da Cinémathèque credita Souvestre e Allain juntamente com Feuillade e Gaumont. Preserve estes contributos e distinga autoria literária, adaptação e organização industrial."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "fantomas-programme",
        "area": "research",
        "prompt": {
          "en": "How should you describe the different durations of modern cycle presentations?",
          "nb": "Hvordan bør du beskrive ulike varigheter for moderne visninger av filmserien?",
          "fr": "Comment décrire les durées différentes des présentations modernes du cycle ?",
          "pt": "Como descrever as diferentes durações das apresentações modernas do ciclo?"
        },
        "options": [
          {
            "id": "universal",
            "label": {
              "en": "Assign one programme runtime to every individual film",
              "nb": "Tilordne én programvarighet til hver enkelt film",
              "fr": "Attribuer une seule durée de programme à chaque film",
              "pt": "Atribuir uma única duração de programa a cada filme"
            }
          },
          {
            "id": "sound",
            "label": {
              "en": "Describe modern musical accompaniment as original synchronized sound",
              "nb": "Beskriv moderne musikkakkompagnement som synkron originallyd",
              "fr": "Décrire l'accompagnement musical moderne comme son synchrone original",
              "pt": "Descrever acompanhamento musical moderno como som sincronizado original"
            }
          },
          {
            "id": "version",
            "label": {
              "en": "Identify the catalogue, individual film or programme and presentation version",
              "nb": "Identifiser katalogen, enkeltfilmen eller programmet og visningsversjonen",
              "fr": "Identifier le catalogue, le film individuel ou programme et la version présentée",
              "pt": "Identificar catálogo, filme individual ou programa e versão apresentada"
            }
          }
        ],
        "bestSupportedOptionId": "version",
        "explanation": {
          "en": "Gaumont and the Cinémathèque describe different modern programme durations; BnF distinguishes individual entries. Report each version separately and do not turn modern accompaniment into an original synchronized soundtrack.",
          "nb": "Gaumont og Cinémathèque oppgir ulike moderne programvarigheter; BnF skiller enkeltfilmene. Oppgi hver versjon separat og ikke gjør moderne akkompagnement til et opprinnelig synkront lydspor.",
          "fr": "Gaumont et la Cinémathèque donnent des durées de programme différentes ; la BnF distingue les films. Décrivez chaque version séparément sans transformer l'accompagnement moderne en bande sonore synchrone originale.",
          "pt": "Gaumont e Cinémathèque indicam diferentes durações de programa; a BnF distingue os filmes. Descreva cada versão separadamente sem transformar acompanhamento moderno em banda sonora sincronizada original."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_cabiria_1914",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore large-scale visual design, mobile framing and the distinction between silent and later sound editions.",
      "nb": "Utforsk storskala visuell utforming, bevegelige utsnitt og skillet mellom stumfilm og senere lydversjoner.",
      "fr": "Explorez la conception visuelle à grande échelle, le cadre mobile et la distinction entre éditions muette et sonore ultérieure.",
      "pt": "Explore a conceção visual em grande escala, o enquadramento móvel e a distinção entre edições muda e sonora posterior."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Cabiria — restored silent films record",
        "publisher": "Museo Nazionale del Cinema",
        "url": "https://www2.museocinema.it/restauri/muti_restaurati.php?id=34&l=en"
      },
      {
        "id": "s1",
        "title": "Cabiria — Giovanni Pastrone, 1914",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/43134.html"
      },
      {
        "id": "s2",
        "title": "Cabiria & Cabiria. The restoration",
        "publisher": "Museo Nazionale del Cinema",
        "url": "https://www.museocinema.it/en/exhibitions/cabiria-cabiria-restoration-0"
      },
      {
        "id": "s3",
        "title": "10 great silent epics — Cabiria (1914)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-silent-epics"
      }
    ],
    "questions": [
      {
        "id": "cabiria-space",
        "area": "camera",
        "prompt": {
          "en": "How can a miniature set help you study the relationship between architecture and moving framing?",
          "nb": "Hvordan kan en miniatyrscenografi hjelpe deg å studere forholdet mellom arkitektur og bevegelige utsnitt?",
          "fr": "Comment une maquette peut-elle aider à étudier le rapport entre architecture et cadre mobile ?",
          "pt": "Como pode uma maquete ajudar a estudar a relação entre arquitetura e enquadramento móvel?"
        },
        "options": [
          {
            "id": "reveal",
            "label": {
              "en": "Plan a safe tabletop camera movement that gradually reveals spatial depth",
              "nb": "Planlegg en trygg kamerabevegelse på bordet som gradvis avdekker romdybden",
              "fr": "Prévoir un mouvement de caméra sur maquette qui révèle progressivement la profondeur",
              "pt": "Planear um movimento de câmara seguro sobre a maquete que revele gradualmente a profundidade"
            }
          },
          {
            "id": "size",
            "label": {
              "en": "Assume that larger scenery alone guarantees clearer visual storytelling",
              "nb": "Anta at større dekorasjoner alene garanterer tydeligere visuell fortelling",
              "fr": "Supposer que de grands décors garantissent à eux seuls un récit visuel clair",
              "pt": "Supor que cenários maiores garantem por si só uma narrativa visual clara"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "Claim the film invented every form of camera movement",
              "nb": "Hevd at filmen oppfant alle former for kamerabevegelse",
              "fr": "Affirmer que le film a inventé toutes les formes de mouvement de caméra",
              "pt": "Afirmar que o filme inventou todas as formas de movimento de câmara"
            }
          }
        ],
        "bestSupportedOptionId": "reveal",
        "explanation": {
          "en": "The BFI dossier emphasizes Cabiria's scale and tracking shots. An original miniature exercise can compare fixed framing with gradual spatial revelation without claiming to reconstruct an exact historical shot or inventorship.",
          "nb": "BFI-dokumentasjonen fremhever Cabirias skala og kamerakjøringer. En egen miniatyrøvelse kan sammenligne fast utsnitt med gradvis romlig avdekking uten å hevde eksakt historisk rekonstruksjon eller oppfinnerskap.",
          "fr": "Le dossier BFI souligne l'échelle de Cabiria et ses travellings. Une maquette originale permet de comparer cadre fixe et révélation progressive de l'espace sans prétendre restituer un plan historique exact ou une invention exclusive.",
          "pt": "O dossier BFI destaca a escala de Cabiria e os travellings. Uma maquete original permite comparar enquadramento fixo e revelação gradual do espaço sem alegar reconstrução exata ou invenção exclusiva."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "cabiria-team",
        "area": "research",
        "prompt": {
          "en": "How should the credits of a large historical spectacle be represented?",
          "nb": "Hvordan bør krediteringen av en stor historisk spektakkelfilm fremstilles?",
          "fr": "Comment représenter les crédits d'un grand spectacle historique ?",
          "pt": "Como representar os créditos de um grande espetáculo histórico?"
        },
        "options": [
          {
            "id": "single",
            "label": {
              "en": "Attribute every image, set and effect to the director alone",
              "nb": "Tilskriv alle bilder, dekorasjoner og effekter regissøren alene",
              "fr": "Attribuer toutes les images, décors et effets au seul réalisateur",
              "pt": "Atribuir todas as imagens, cenários e efeitos apenas ao realizador"
            }
          },
          {
            "id": "collaboration",
            "label": {
              "en": "Map documented roles in design, cinematography, effects and production",
              "nb": "Kartlegg dokumenterte roller innen scenografi, foto, effekter og produksjon",
              "fr": "Cartographier les rôles documentés dans les décors, l'image, les effets et la production",
              "pt": "Mapear os papéis documentados em cenografia, fotografia, efeitos e produção"
            }
          },
          {
            "id": "guess",
            "label": {
              "en": "Assign undocumented technical roles to the best-known contributors",
              "nb": "Tilordne udokumenterte tekniske roller til de mest kjente bidragsyterne",
              "fr": "Attribuer des rôles techniques non documentés aux collaborateurs les plus connus",
              "pt": "Atribuir funções técnicas não documentadas aos colaboradores mais conhecidos"
            }
          }
        ],
        "bestSupportedOptionId": "collaboration",
        "explanation": {
          "en": "The museum and Cinémathèque records identify Itala Film, Pastrone and a cinematography team including Segundo de Chomón, who is also credited for effects coordination. Preserve supported roles rather than reducing the entire production to one person.",
          "nb": "Museet og Cinémathèque identifiserer Itala Film, Pastrone og et fototeam med Segundo de Chomón, som også krediteres for effektkoordinering. Bevar dokumenterte roller fremfor å redusere hele produksjonen til én person.",
          "fr": "Le musée et la Cinémathèque identifient Itala Film, Pastrone et une équipe image comprenant Segundo de Chomón, également crédité pour les effets. Préservez les rôles attestés sans réduire la production à une seule personne.",
          "pt": "O museu e a Cinémathèque identificam Itala Film, Pastrone e uma equipa de fotografia com Segundo de Chomón, também creditado pelos efeitos. Preserve os papéis documentados sem reduzir a produção a uma só pessoa."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "cabiria-editions",
        "area": "sound",
        "prompt": {
          "en": "How should a researcher distinguish the reconstructed 1914 edition and the later sound reissue?",
          "nb": "Hvordan bør en forsker skille den rekonstruerte 1914-utgaven fra den senere lydutgaven?",
          "fr": "Comment distinguer l'édition de 1914 reconstruite et la réédition sonore ultérieure ?",
          "pt": "Como distinguir a edição de 1914 reconstruída da reedição sonora posterior?"
        },
        "options": [
          {
            "id": "collapse",
            "label": {
              "en": "Treat both editions as one unchanged original master",
              "nb": "Behandle begge utgavene som én uendret originalmaster",
              "fr": "Traiter les deux éditions comme un original unique et inchangé",
              "pt": "Tratar ambas as edições como um original único e inalterado"
            }
          },
          {
            "id": "sync",
            "label": {
              "en": "Assume the original musical programme was synchronized recorded sound",
              "nb": "Anta at det opprinnelige musikkprogrammet var synkront innspilt lyd",
              "fr": "Supposer que le programme musical original était du son synchrone enregistré",
              "pt": "Supor que o programa musical original era som sincronizado gravado"
            }
          },
          {
            "id": "editions",
            "label": {
              "en": "Document the editions, surviving elements and musical presentation separately",
              "nb": "Dokumenter utgavene, bevarte elementer og musikkpresentasjonen separat",
              "fr": "Documenter séparément les éditions, les éléments conservés et la présentation musicale",
              "pt": "Documentar separadamente as edições, os elementos preservados e a apresentação musical"
            }
          }
        ],
        "bestSupportedOptionId": "editions",
        "explanation": {
          "en": "The museum documents a reconstructed 1914 edition and a substantially altered 1931 sound reissue, as well as live performance of the Pizzetti/Mazza score. Keep the restoration decisions and music history tied to the relevant edition.",
          "nb": "Museet dokumenterer en rekonstruert 1914-utgave og en vesentlig endret lydutgave fra 1931, samt levende fremføring av musikken til Pizzetti og Mazza. Knytt restaureringsvalgene og musikkhistorien til riktig utgave.",
          "fr": "Le musée documente une édition de 1914 reconstruite, une réédition sonore de 1931 remaniée et l'exécution en direct de la musique de Pizzetti et Mazza. Reliez les choix de restauration et la musique à l'édition concernée.",
          "pt": "O museu documenta uma edição de 1914 reconstruída, uma reedição sonora de 1931 alterada e a execução ao vivo da música de Pizzetti e Mazza. Relacione as decisões de restauro e a música com a edição correspondente."
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
    "scenarioId": "scenario_afgrunden_1910",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore performance-led filmmaking, compact production and Asta Nielsen's international screen identity.",
      "nb": "Utforsk skuespillerdrevet filmproduksjon, konsentrerte opptak og Asta Nielsens internasjonale stjerneidentitet.",
      "fr": "Explorez la mise en scène centrée sur le jeu, la production resserrée et l'identité internationale d'Asta Nielsen.",
      "pt": "Explore a realização centrada na interpretação, a produção concentrada e a identidade internacional de Asta Nielsen."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Afgrunden — Film Database",
        "publisher": "Det Danske Filminstitut",
        "url": "https://www.dfi.dk/viden-om-film/filmdatabasen/film/afgrunden-0"
      },
      {
        "id": "s1",
        "title": "Asta Nielsen: the silent muse",
        "publisher": "British Film Institute / Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/asta-nielsen-silent-muse"
      },
      {
        "id": "s2",
        "title": "Afgrunden — Danish Silent Film streaming record",
        "publisher": "Det Danske Filminstitut / Stumfilm.dk",
        "url": "https://www.stumfilm.dk/stumfilm/streaming/film/afgrunden"
      },
      {
        "id": "s3",
        "title": "Dansk filmhistorie: 1910-1919",
        "publisher": "Det Danske Filminstitut",
        "url": "https://www.dfi.dk/viden-om-film/filmhistorie/dansk-filmhistorie-1910-1919"
      }
    ],
    "questions": [
      {
        "id": "afgrunden-performance",
        "area": "camera",
        "prompt": {
          "en": "How can framing and rehearsal support an expressive silent performance?",
          "nb": "Hvordan kan utsnitt og prøver støtte et uttrykksfullt stumfilmspill?",
          "fr": "Comment le cadrage et les répétitions peuvent-ils soutenir un jeu muet expressif ?",
          "pt": "Como podem o enquadramento e os ensaios apoiar uma interpretação muda expressiva?"
        },
        "options": [
          {
            "id": "gesture",
            "label": {
              "en": "Rehearse subtle gestures and compare framing that makes them readable",
              "nb": "Øv på subtile gester og sammenlign utsnitt som gjør dem lesbare",
              "fr": "Répéter des gestes subtils et comparer les cadres qui les rendent lisibles",
              "pt": "Ensaiar gestos subtis e comparar enquadramentos que os tornam legíveis"
            }
          },
          {
            "id": "exaggerate",
            "label": {
              "en": "Require every emotion to use the same exaggerated gesture",
              "nb": "Krev at alle følelser uttrykkes med den samme overdrevne gesten",
              "fr": "Exiger le même geste exagéré pour chaque émotion",
              "pt": "Exigir o mesmo gesto exagerado para todas as emoções"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore the performer when choosing every camera position",
              "nb": "Ignorer skuespilleren ved valg av alle kamerastandpunkter",
              "fr": "Ignorer l'interprète dans le choix de chaque position de caméra",
              "pt": "Ignorar o intérprete ao escolher todas as posições da câmara"
            }
          }
        ],
        "bestSupportedOptionId": "gesture",
        "explanation": {
          "en": "The BFI and DFI dossiers discuss Nielsen's restrained and psychologically expressive performance. Compare framing and gesture in an original everyday scene; this does not assert that Nielsen invented naturalistic film acting.",
          "nb": "BFI og DFI beskriver Nielsens tilbakeholdne og psykologisk uttrykksfulle spill. Sammenlign utsnitt og gester i en egen hverdagsscene; dette innebærer ikke at Nielsen oppfant naturalistisk filmspill.",
          "fr": "Les dossiers BFI et DFI décrivent le jeu retenu et psychologiquement expressif de Nielsen. Comparez cadrages et gestes dans une scène quotidienne originale, sans lui attribuer l'invention du jeu naturaliste.",
          "pt": "Os dossiers BFI e DFI descrevem a interpretação contida e psicologicamente expressiva de Nielsen. Compare enquadramentos e gestos numa cena quotidiana original, sem lhe atribuir a invenção da interpretação naturalista."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "afgrunden-resources",
        "area": "research",
        "prompt": {
          "en": "How could a small production prioritize limited shooting time and resources?",
          "nb": "Hvordan kan en liten produksjon prioritere begrenset opptakstid og ressurser?",
          "fr": "Comment une petite production peut-elle hiérarchiser son temps et ses moyens limités ?",
          "pt": "Como pode uma pequena produção priorizar tempo e recursos limitados?"
        },
        "options": [
          {
            "id": "scale",
            "label": {
              "en": "Spend every resource on unrelated elaborate scenery",
              "nb": "Bruk alle ressursene på omfattende dekorasjoner uten fortellingsfunksjon",
              "fr": "Consacrer tous les moyens à des décors élaborés sans lien avec le récit",
              "pt": "Gastar todos os recursos em cenários elaborados sem relação com a narrativa"
            }
          },
          {
            "id": "focus",
            "label": {
              "en": "Plan a manageable schedule around performance, location and readable staging",
              "nb": "Planlegg en gjennomførbar opptaksplan rundt spill, opptakssteder og tydelig iscenesettelse",
              "fr": "Prévoir un calendrier réaliste centré sur le jeu, les lieux et la mise en scène lisible",
              "pt": "Planear um calendário viável centrado na interpretação, locais e encenação legível"
            }
          },
          {
            "id": "copy",
            "label": {
              "en": "Treat a hypothetical schedule as the original production's exact shooting log",
              "nb": "Presenter en hypotetisk plan som originalproduksjonens eksakte opptakslogg",
              "fr": "Présenter un calendrier fictif comme le journal exact du tournage original",
              "pt": "Apresentar um calendário hipotético como o diário exato da rodagem original"
            }
          }
        ],
        "bestSupportedOptionId": "focus",
        "explanation": {
          "en": "The BFI dossier reports a compact eight-day production and several Copenhagen-area locations; DFI identifies the production roles. Build a hypothetical schedule with realistic limits, without claiming to reconstruct the original daily shooting plan.",
          "nb": "BFI-dokumentasjonen beskriver åtte opptaksdager og flere steder i København-området; DFI identifiserer produksjonsrollene. Lag en hypotetisk plan med realistiske rammer uten å hevde at den gjenskaper den opprinnelige dagsplanen.",
          "fr": "Le dossier BFI rapporte huit jours de tournage et plusieurs lieux dans la région de Copenhague ; le DFI identifie les rôles de production. Élaborez un calendrier hypothétique réaliste sans prétendre restituer le plan quotidien original.",
          "pt": "O dossier BFI relata oito dias de rodagem e vários locais na região de Copenhaga; o DFI identifica as funções de produção. Crie um calendário hipotético realista sem alegar reconstituir o plano diário original."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "afgrunden-preservation",
        "area": "research",
        "prompt": {
          "en": "How should you describe the surviving digital presentation and Nielsen's historical significance?",
          "nb": "Hvordan bør du beskrive den bevarte digitale visningen og Nielsens historiske betydning?",
          "fr": "Comment décrire la présentation numérique conservée et l'importance historique de Nielsen ?",
          "pt": "Como descrever a apresentação digital preservada e a importância histórica de Nielsen?"
        },
        "options": [
          {
            "id": "untouched",
            "label": {
              "en": "Present the surviving digital version as an untouched original master",
              "nb": "Presenter den bevarte digitale versjonen som en urørt originalmaster",
              "fr": "Présenter la version numérique conservée comme un original intact",
              "pt": "Apresentar a versão digital preservada como um original intocado"
            }
          },
          {
            "id": "first",
            "label": {
              "en": "Use international success to claim that one performer invented all screen acting",
              "nb": "Bruk internasjonal suksess til å hevde at én skuespiller oppfant alt filmspill",
              "fr": "Utiliser le succès international pour attribuer tout le jeu cinématographique à une seule interprète",
              "pt": "Usar o sucesso internacional para atribuir toda a interpretação cinematográfica a uma única atriz"
            }
          },
          {
            "id": "context",
            "label": {
              "en": "Document preservation changes and distinguish star reception from original material",
              "nb": "Dokumenter bevaringsendringer og skill stjernemottakelsen fra originalmaterialet",
              "fr": "Documenter les interventions de conservation et distinguer la réception de la vedette du matériau original",
              "pt": "Documentar intervenções de conservação e distinguir a receção da estrela do material original"
            }
          }
        ],
        "bestSupportedOptionId": "context",
        "explanation": {
          "en": "The DFI streaming record describes deterioration and recovered dance material; DFI's film history connects the film to Nielsen's international career. Explain these different evidence layers without treating a digital presentation as an unchanged original.",
          "nb": "DFIs strømmeoppføring beskriver nedbrytning og gjenfunnet dansemateriale; filmhistorien knytter filmen til Nielsens internasjonale karriere. Forklar disse ulike belegglagene uten å behandle en digital visning som en uendret original.",
          "fr": "La notice de diffusion du DFI décrit la dégradation et les images de danse retrouvées ; son histoire du cinéma relie le film à la carrière internationale de Nielsen. Distinguez ces preuves sans assimiler la présentation numérique à un original intact.",
          "pt": "O registo de difusão do DFI descreve deterioração e imagens de dança recuperadas; a história do cinema do DFI liga o filme à carreira internacional de Nielsen. Distinga estas evidências sem tratar a apresentação digital como original inalterado."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_atlantis_1913",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore literary adaptation, export-oriented feature production and the provenance of alternative endings.",
      "nb": "Utforsk litterær adaptasjon, eksportrettet langfilmproduksjon og proveniensen til alternative avslutninger.",
      "fr": "Explorez l'adaptation littéraire, la production de longs métrages pour l'exportation et la provenance des fins alternatives.",
      "pt": "Explore a adaptação literária, a produção de longas-metragens para exportação e a proveniência de finais alternativos."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Atlantis — Film Database",
        "publisher": "Det Danske Filminstitut",
        "url": "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/atlantis-1"
      },
      {
        "id": "s1",
        "title": "Danish Film History: 1910-1920",
        "publisher": "Det Danske Filminstitut",
        "url": "https://www.dfi.dk/en/english/danish-film-history/danish-film-history-1910-1920"
      },
      {
        "id": "s2",
        "title": "Atlantis — Danish Silent Film streaming record",
        "publisher": "Det Danske Filminstitut / Stumfilm.dk",
        "url": "https://www.stumfilm.dk/en/stumfilm/streaming/film/atlantis"
      }
    ],
    "questions": [
      {
        "id": "atlantis-adaptation",
        "area": "research",
        "prompt": {
          "en": "How should you plan and credit a feature adapted from a novel?",
          "nb": "Hvordan bør du planlegge og kreditere en langfilm basert på en roman?",
          "fr": "Comment planifier et créditer un long métrage adapté d'un roman ?",
          "pt": "Como planear e creditar uma longa-metragem adaptada de um romance?"
        },
        "options": [
          {
            "id": "roles",
            "label": {
              "en": "Distinguish source author, screenwriters, direction and production responsibilities",
              "nb": "Skill kildeforfatter, manusforfattere, regi og produksjonsansvar",
              "fr": "Distinguer auteur du roman, scénaristes, réalisation et responsabilités de production",
              "pt": "Distinguir autor do romance, argumentistas, realização e responsabilidades de produção"
            }
          },
          {
            "id": "collapse",
            "label": {
              "en": "Credit all literary and cinematic work to the studio alone",
              "nb": "Krediter alt litterært og filmatisk arbeid bare til studioet",
              "fr": "Attribuer tout le travail littéraire et cinématographique au seul studio",
              "pt": "Atribuir todo o trabalho literário e cinematográfico apenas ao estúdio"
            }
          },
          {
            "id": "literal",
            "label": {
              "en": "Assume that every scene and image is identical to the novel",
              "nb": "Anta at alle scener og bilder er identiske med romanen",
              "fr": "Supposer que chaque scène et image est identique au roman",
              "pt": "Supor que todas as cenas e imagens são idênticas ao romance"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "DFI identifies Hauptmann's novel, the screenwriters Schröder and Garde, director Blom and Nordisk. A new adaptation plan should document these distinct kinds of creative responsibility without assuming that the film duplicates the source text.",
          "nb": "DFI identifiserer Hauptmanns roman, manusforfatterne Schröder og Garde, regissør Blom og Nordisk. En ny adaptasjonsplan bør dokumentere ulike typer kreativt ansvar uten å anta at filmen kopierer kildeteksten.",
          "fr": "Le DFI identifie le roman de Hauptmann, les scénaristes Schröder et Garde, le réalisateur Blom et Nordisk. Un projet d'adaptation doit distinguer ces responsabilités créatives sans supposer que le film reproduit le texte.",
          "pt": "O DFI identifica o romance de Hauptmann, os argumentistas Schröder e Garde, o realizador Blom e a Nordisk. Um projeto de adaptação deve distinguir estas responsabilidades criativas sem supor que o filme duplica o texto."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "atlantis-scale",
        "area": "camera",
        "prompt": {
          "en": "How can a producer explore ambitious feature design without assuming spectacle guarantees success?",
          "nb": "Hvordan kan en produsent utforske ambisiøs langfilmdesign uten å anta at spektakel garanterer suksess?",
          "fr": "Comment explorer une conception ambitieuse sans supposer que le spectacle garantit le succès ?",
          "pt": "Como explorar uma conceção ambiciosa sem supor que o espetáculo garante sucesso?"
        },
        "options": [
          {
            "id": "unlimited",
            "label": {
              "en": "Assume that increasing scale always guarantees artistic and commercial success",
              "nb": "Anta at større skala alltid garanterer kunstnerisk og kommersiell suksess",
              "fr": "Supposer qu'une échelle accrue garantit toujours le succès artistique et commercial",
              "pt": "Supor que aumentar a escala garante sempre sucesso artístico e comercial"
            }
          },
          {
            "id": "model",
            "label": {
              "en": "Compare a modest storyboard with a safe miniature set and evaluate their narrative value",
              "nb": "Sammenlign et beskjedent storyboard med trygg miniatyrscenografi og vurder fortellerverdien",
              "fr": "Comparer un storyboard modeste et une maquette sûre en évaluant leur valeur narrative",
              "pt": "Comparar um storyboard modesto e uma maquete segura avaliando o valor narrativo"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "Attribute undocumented effects techniques to the historical production",
              "nb": "Tilskriv den historiske produksjonen udokumenterte effektteknikker",
              "fr": "Attribuer des techniques d'effets non documentées à la production historique",
              "pt": "Atribuir técnicas de efeitos não documentadas à produção histórica"
            }
          }
        ],
        "bestSupportedOptionId": "model",
        "explanation": {
          "en": "DFI's history frames Atlantis as an ambitious internationally oriented Nordisk feature whose scale did not ensure success. Compare safe miniature and storyboard alternatives for an invented scene; do not infer historical effects methods from this exercise.",
          "nb": "DFIs filmhistorie beskriver Atlantis som en ambisiøs, internasjonalt orientert Nordisk-produksjon der skala ikke sikret suksess. Sammenlign trygge miniatyr- og storyboardalternativer for en oppdiktet scene; ikke utled historiske effektmetoder fra øvelsen.",
          "fr": "L'histoire du DFI présente Atlantis comme un long métrage Nordisk ambitieux et international dont l'ampleur ne garantissait pas le succès. Comparez maquette et storyboard pour une scène inventée, sans en déduire les techniques historiques d'effets.",
          "pt": "A história do DFI apresenta Atlantis como uma longa-metragem Nordisk ambiciosa e internacional cuja escala não garantiu sucesso. Compare maquete e storyboard para uma cena inventada, sem deduzir técnicas históricas de efeitos."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "atlantis-endings",
        "area": "research",
        "prompt": {
          "en": "How should alternative market endings and modern presentation choices be documented?",
          "nb": "Hvordan bør alternative markedsavslutninger og moderne visningsvalg dokumenteres?",
          "fr": "Comment documenter les fins alternatives selon les marchés et les choix de présentation modernes ?",
          "pt": "Como documentar finais alternativos por mercado e escolhas modernas de apresentação?"
        },
        "options": [
          {
            "id": "universal",
            "label": {
              "en": "Declare that every market received one identical ending",
              "nb": "Erklær at alle markeder fikk én identisk avslutning",
              "fr": "Déclarer que tous les marchés ont reçu une fin identique",
              "pt": "Declarar que todos os mercados receberam um final idêntico"
            }
          },
          {
            "id": "sound",
            "label": {
              "en": "Treat the modern recorded music as synchronized original production sound",
              "nb": "Behandle den moderne innspilte musikken som synkron originallyd",
              "fr": "Traiter la musique moderne enregistrée comme du son synchrone original",
              "pt": "Tratar a música moderna gravada como som sincronizado original"
            }
          },
          {
            "id": "versions",
            "label": {
              "en": "Record each ending's documented market and distinguish later music and intertitles",
              "nb": "Registrer hver avslutnings dokumenterte marked og skill ut senere musikk og mellomtekster",
              "fr": "Consigner le marché documenté de chaque fin et distinguer musique ultérieure et intertitres",
              "pt": "Registar o mercado documentado de cada final e distinguir música posterior e intertítulos"
            }
          }
        ],
        "bestSupportedOptionId": "versions",
        "explanation": {
          "en": "DFI records two endings including an unhappy ending for the Russian market. The streaming record identifies English intertitles and modern Robert Israel music. Keep historical ending evidence and archival presentation metadata separate rather than inventing an identical universal print.",
          "nb": "DFI registrerer to avslutninger, inkludert en ulykkelig slutt for det russiske markedet. Strømmeoppføringen identifiserer engelske mellomtekster og moderne musikk av Robert Israel. Hold historiske sluttversjoner og arkivvisningens metadata adskilt fremfor å dikte opp én universell kopi.",
          "fr": "Le DFI recense deux fins, dont une malheureuse destinée au marché russe. La notice de diffusion indique des intertitres anglais et une musique moderne de Robert Israel. Distinguez les preuves sur les fins et les métadonnées de présentation au lieu d'inventer une copie universelle.",
          "pt": "O DFI regista dois finais, incluindo um infeliz para o mercado russo. O registo de difusão identifica intertítulos ingleses e música moderna de Robert Israel. Distinga a evidência dos finais e os metadados de apresentação, sem inventar uma cópia universal."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_general_1926",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Study Keaton's visual comedy, collaborative production and silent-era exhibition through safe original exercises.",
      "nb": "Studer Keatons visuelle komikk, produksjonssamarbeid og stumfilmvisning gjennom trygge, selvstendige øvelser.",
      "fr": "Étudiez la comédie visuelle de Keaton, la production collective et la projection muette par des exercices originaux sans danger.",
      "pt": "Estude a comédia visual de Keaton, a produção colaborativa e a exibição muda através de exercícios originais seguros."
    },
    "sources": [
      {
        "id": "s0",
        "title": "The General (1926)",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/9303-THE-GENERAL"
      },
      {
        "id": "s1",
        "title": "The General (1926)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/136a6211-90d9-5d18-b047-7967deac8bab/the-general"
      },
      {
        "id": "s2",
        "title": "The birth of action: 10 sensational stunts from the silent era",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/birth-action-10-sensational-stunts-from-silent-era"
      },
      {
        "id": "s3",
        "title": "Buster's Best",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/explore/inside_out/2010/03/16/busters-best/"
      },
      {
        "id": "s4",
        "title": "Buster Keaton in The General",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/2021563520"
      }
    ],
    "questions": [
      {
        "id": "general-visual-comedy",
        "area": "camera",
        "prompt": {
          "en": "How could you test the clarity of a physical gag in a safe original scene?",
          "nb": "Hvordan kan du teste tydeligheten i en fysisk vits i en trygg, selvstendig scene?",
          "fr": "Comment tester la lisibilité d'un gag physique dans une scène originale sans danger ?",
          "pt": "Como testar a clareza de um gag físico numa cena original segura?"
        },
        "options": [
          {
            "id": "clear",
            "label": {
              "en": "Draw the character and a harmless everyday object in a readable shared space",
              "nb": "Tegn figuren og en ufarlig hverdagsgjenstand i et tydelig felles rom",
              "fr": "Dessiner le personnage et un objet quotidien inoffensif dans un espace commun lisible",
              "pt": "Desenhar a personagem e um objeto quotidiano inofensivo num espaço comum legível"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Use unrelated close-ups that obscure the cause and effect",
              "nb": "Bruk urelaterte nærbilder som skjuler årsak og virkning",
              "fr": "Utiliser des gros plans sans rapport qui masquent cause et effet",
              "pt": "Usar grandes planos sem relação que escondem causa e efeito"
            }
          },
          {
            "id": "danger",
            "label": {
              "en": "Attempt to reproduce dangerous historical physical action",
              "nb": "Forsøk å gjenskape farlig historisk fysisk handling",
              "fr": "Tenter de reproduire une action physique historique dangereuse",
              "pt": "Tentar reproduzir uma ação física histórica perigosa"
            }
          }
        ],
        "bestSupportedOptionId": "clear",
        "explanation": {
          "en": "MoMA places Keaton's comedy in the relationship between body, objects and film form; BFI emphasizes the action-comedy combination. Compare drawn frames of a harmless everyday gag, not real railway action or historical stunts.",
          "nb": "MoMA plasserer Keatons komikk i forholdet mellom kropp, gjenstander og filmform; BFI fremhever kombinasjonen av handling og komikk. Sammenlign tegnede bilder av en ufarlig hverdagsvits, ikke virkelig jernbanehandling eller historiske stunt.",
          "fr": "Le MoMA situe la comédie de Keaton dans les rapports entre corps, objets et forme filmique ; le BFI souligne l'association action et comédie. Comparez des dessins d'un gag quotidien sans danger, sans action ferroviaire réelle ni cascade historique.",
          "pt": "O MoMA situa a comédia de Keaton na relação entre corpo, objetos e forma fílmica; o BFI destaca a combinação de ação e comédia. Compare desenhos de um gag quotidiano seguro, sem ação ferroviária real nem acrobacias históricas."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "general-collaboration",
        "area": "research",
        "prompt": {
          "en": "How should the film's production achievement be credited?",
          "nb": "Hvordan bør filmens produksjonsprestasjon krediteres?",
          "fr": "Comment attribuer les mérites de cette production cinématographique ?",
          "pt": "Como atribuir os méritos desta produção cinematográfica?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Attribute all documented crafts to the screen star alone",
              "nb": "Tilskriv alle dokumenterte fagfunksjoner filmstjernen alene",
              "fr": "Attribuer tous les métiers documentés à la seule vedette",
              "pt": "Atribuir todos os ofícios documentados apenas à estrela"
            }
          },
          {
            "id": "team",
            "label": {
              "en": "Distinguish independent production, direction, cinematography and technical collaboration",
              "nb": "Skill uavhengig produksjon, regi, filmfoto og teknisk samarbeid",
              "fr": "Distinguer production indépendante, réalisation, photographie et collaboration technique",
              "pt": "Distinguir produção independente, realização, fotografia e colaboração técnica"
            }
          },
          {
            "id": "guess",
            "label": {
              "en": "Invent precise undocumented responsibilities for every participant",
              "nb": "Finn på nøyaktige udokumenterte ansvarsområder for alle deltakerne",
              "fr": "Inventer des responsabilités précises non documentées pour chaque participant",
              "pt": "Inventar responsabilidades precisas não documentadas para todos os participantes"
            }
          }
        ],
        "bestSupportedOptionId": "team",
        "explanation": {
          "en": "AFI's record identifies Buster Keaton Productions, Schenck, co-directors Keaton and Bruckman, photographers Haines and Jennings, and technical director Gabourie. Preserve supported credits and acknowledge unknown details rather than treating every craft as a solo achievement.",
          "nb": "AFIs oppføring identifiserer Buster Keaton Productions, Schenck, regissørene Keaton og Bruckman, fotografene Haines og Jennings og teknisk leder Gabourie. Bevar dokumenterte krediteringer og anerkjenn ukjente detaljer fremfor å tilskrive alt én person.",
          "fr": "La notice AFI identifie Buster Keaton Productions, Schenck, les coréalisateurs Keaton et Bruckman, les opérateurs Haines et Jennings et le directeur technique Gabourie. Préservez les crédits attestés et reconnaissez les détails inconnus.",
          "pt": "O registo AFI identifica Buster Keaton Productions, Schenck, os correalizadores Keaton e Bruckman, os operadores Haines e Jennings e o diretor técnico Gabourie. Preserve os créditos documentados e reconheça os pormenores desconhecidos."
        },
        "sourceIds": [
          "s0"
        ]
      },
      {
        "id": "general-cue-sheet",
        "area": "sound",
        "prompt": {
          "en": "What can a surviving silent-era music cue sheet establish?",
          "nb": "Hva kan et bevart musikkskjema fra stumfilmtiden dokumentere?",
          "fr": "Que peut établir une feuille d'indications musicales conservée de l'époque muette ?",
          "pt": "O que pode estabelecer uma folha de indicações musicais preservada da época muda?"
        },
        "options": [
          {
            "id": "fixed",
            "label": {
              "en": "Treat it as proof of a fixed synchronized original recording",
              "nb": "Behandle den som bevis på et fast synkront originalopptak",
              "fr": "La traiter comme preuve d'un enregistrement original synchrone fixe",
              "pt": "Tratá-la como prova de uma gravação original sincronizada fixa"
            }
          },
          {
            "id": "all",
            "label": {
              "en": "Assume every historical venue used exactly the same accompaniment",
              "nb": "Anta at alle historiske visningssteder brukte nøyaktig samme akkompagnement",
              "fr": "Supposer que chaque salle historique utilisait exactement le même accompagnement",
              "pt": "Supor que todas as salas históricas usavam exatamente o mesmo acompanhamento"
            }
          },
          {
            "id": "context",
            "label": {
              "en": "Document the cue sheet as evidence of accompaniment practice, not recorded dialogue",
              "nb": "Dokumenter musikkskjemaet som belegg for akkompagnementspraksis, ikke innspilt dialog",
              "fr": "Documenter la feuille comme preuve de pratiques d'accompagnement, non de dialogue enregistré",
              "pt": "Documentar a folha como evidência de práticas de acompanhamento, não de diálogo gravado"
            }
          }
        ],
        "bestSupportedOptionId": "context",
        "explanation": {
          "en": "The Library of Congress preserves a contemporary thematic music cue sheet, while AFI identifies the silent release format. A cue sheet documents musical presentation guidance; it does not prove a single recorded original soundtrack or identical performances in every venue.",
          "nb": "Library of Congress bevarer et samtidig tematisk musikkskjema, mens AFI identifiserer stumfilmformatet. Musikkskjemaet dokumenterer veiledning for musikkvisning; det beviser ikke ett innspilt originallydspor eller identiske fremføringer på alle visningssteder.",
          "fr": "La Library of Congress conserve une feuille thématique contemporaine et l'AFI identifie le format muet. La feuille atteste des indications d'accompagnement, non une bande originale enregistrée unique ni des exécutions identiques partout.",
          "pt": "A Library of Congress preserva uma folha temática contemporânea e a AFI identifica o formato mudo. A folha documenta orientações de acompanhamento, não uma banda sonora original gravada única nem execuções idênticas em todas as salas."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_cheat_1915",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore expressive illumination, collaborative studio design and critical interpretation of historical representations.",
      "nb": "Utforsk uttrykksfull lyssetting, samarbeid om studioscenografi og kritisk tolkning av historiske fremstillinger.",
      "fr": "Explorez l'éclairage expressif, les décors conçus en collaboration et l'interprétation critique des représentations historiques.",
      "pt": "Explore a iluminação expressiva, os cenários colaborativos e a interpretação crítica das representações históricas."
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Cheat — AFI Catalog",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Catalog/moviedetails/1815"
      },
      {
        "id": "s1",
        "title": "The Cheat (1915) — National Film Registry description",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      },
      {
        "id": "s2",
        "title": "The Cheat / The Golden Chance",
        "publisher": "UCLA Film & Television Archive",
        "url": "https://cinema.ucla.edu/events/the-cheat-the-golden-chance-02-07-15/"
      },
      {
        "id": "s3",
        "title": "Out of the Vaults: Cecil B. deMille's The Cheat, 1915",
        "publisher": "The Film Foundation",
        "url": "https://www.film-foundation.org/hfpa-cheat"
      },
      {
        "id": "s4",
        "title": "D. W. Griffith's Competitors: Ince and DeMille",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/explore/inside_out/2009/12/01/d-w-griffiths-competitors-ince-and-demille/"
      }
    ],
    "questions": [
      {
        "id": "cheat-light",
        "area": "camera",
        "prompt": {
          "en": "How can selective lighting make an ordinary fictional interior expressive?",
          "nb": "Hvordan kan selektiv lyssetting gjøre et vanlig fiktivt interiør uttrykksfullt?",
          "fr": "Comment un éclairage sélectif peut-il rendre expressif un intérieur fictif ordinaire ?",
          "pt": "Como pode a iluminação seletiva tornar expressivo um interior fictício comum?"
        },
        "options": [
          {
            "id": "contrast",
            "label": {
              "en": "Compare light and shadow in an original tabletop sketch",
              "nb": "Sammenlign lys og skygge i en egen skisse av en bordmodell",
              "fr": "Comparer lumière et ombre dans un croquis original de maquette",
              "pt": "Comparar luz e sombra num esboço original de maquete"
            }
          },
          {
            "id": "uniform",
            "label": {
              "en": "Remove all tonal variation regardless of the narrative purpose",
              "nb": "Fjern alle tonevariasjoner uansett fortellingsformål",
              "fr": "Supprimer toute variation tonale indépendamment du récit",
              "pt": "Eliminar toda a variação tonal independentemente da narrativa"
            }
          },
          {
            "id": "exact",
            "label": {
              "en": "Claim the sketch reproduces the exact historical lighting setup",
              "nb": "Hevd at skissen gjengir det eksakte historiske lysoppsettet",
              "fr": "Prétendre reproduire exactement le dispositif historique d'éclairage",
              "pt": "Afirmar que o esboço reproduz a instalação histórica exata"
            }
          }
        ],
        "bestSupportedOptionId": "contrast",
        "explanation": {
          "en": "The Film Foundation describes selective low-key illumination and silhouettes. Compare an original neutral interior using drawings; study visual emphasis without imitating the film's racialized narrative or claiming exact equipment reconstruction.",
          "nb": "Film Foundation beskriver selektiv lavmælt lyssetting og silhuetter. Sammenlign tegninger av et eget nøytralt interiør; studer visuelt fokus uten å etterligne filmens rasialiserte fortelling eller hevde en eksakt rekonstruksjon.",
          "fr": "La Film Foundation décrit un éclairage contrasté et des silhouettes. Comparez des dessins d'un intérieur neutre original ; étudiez l'accent visuel sans imiter le récit racialisé ni prétendre reconstruire le matériel exact.",
          "pt": "A Film Foundation descreve iluminação contrastada e silhuetas. Compare desenhos de um interior neutro original; estude a ênfase visual sem imitar a narrativa racializada nem alegar reconstruir o equipamento exato."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      },
      {
        "id": "cheat-collaboration",
        "area": "research",
        "prompt": {
          "en": "How should the distinctive studio style be credited?",
          "nb": "Hvordan bør den særpregede studiostilen krediteres?",
          "fr": "Comment attribuer les contributions au style distinctif du studio ?",
          "pt": "Como atribuir os contributos para o estilo distintivo do estúdio?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Assign every visual contribution to the director alone",
              "nb": "Tilskriv alle visuelle bidrag regissøren alene",
              "fr": "Attribuer toute contribution visuelle au seul réalisateur",
              "pt": "Atribuir todo contributo visual apenas ao realizador"
            }
          },
          {
            "id": "team",
            "label": {
              "en": "Distinguish direction, writing, photography, design and performance",
              "nb": "Skill regi, manus, filmfoto, scenografi og skuespillerprestasjon",
              "fr": "Distinguer réalisation, écriture, photographie, décors et interprétation",
              "pt": "Distinguir realização, escrita, fotografia, cenografia e interpretação"
            }
          },
          {
            "id": "distributor",
            "label": {
              "en": "Treat the distribution company as the only creative author",
              "nb": "Behandle distribusjonsselskapet som eneste kreative opphav",
              "fr": "Traiter le distributeur comme seul auteur créatif",
              "pt": "Tratar a distribuidora como único autor criativo"
            }
          }
        ],
        "bestSupportedOptionId": "team",
        "explanation": {
          "en": "AFI and UCLA identify the Lasky production, DeMille, the writers and Wyckoff; AFI also credits Buckland's design. Preserve collaborative roles and distinguish Paramount distribution from production.",
          "nb": "AFI og UCLA identifiserer Lasky-produksjonen, DeMille, manusforfatterne og Wyckoff; AFI krediterer også Bucklands scenografi. Bevar samarbeidsrollene og skill Paramounts distribusjon fra produksjon.",
          "fr": "AFI et UCLA identifient la production Lasky, DeMille, les scénaristes et Wyckoff ; AFI crédite aussi les décors de Buckland. Préservez les rôles collectifs et distinguez distribution Paramount et production.",
          "pt": "AFI e UCLA identificam a produção Lasky, DeMille, os argumentistas e Wyckoff; AFI credita também os cenários de Buckland. Preserve os papéis colaborativos e distinga a distribuição Paramount da produção."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "cheat-context",
        "area": "research",
        "prompt": {
          "en": "How should the 1915 film and its 1918 reissue be discussed critically?",
          "nb": "Hvordan bør filmen fra 1915 og nyutgivelsen fra 1918 drøftes kritisk?",
          "fr": "Comment discuter de manière critique le film de 1915 et sa réédition de 1918 ?",
          "pt": "Como discutir criticamente o filme de 1915 e a reedição de 1918?"
        },
        "options": [
          {
            "id": "neutral",
            "label": {
              "en": "Treat racist characterization as a neutral account of real people",
              "nb": "Behandle rasistisk karakterisering som en nøytral beskrivelse av virkelige mennesker",
              "fr": "Traiter les caractérisations racistes comme un portrait neutre de personnes réelles",
              "pt": "Tratar caracterizações racistas como retrato neutro de pessoas reais"
            }
          },
          {
            "id": "collapse",
            "label": {
              "en": "Treat the reissue and later restored score as unchanged original material",
              "nb": "Behandle nyutgivelsen og senere restaureringsmusikk som uendret originalmateriale",
              "fr": "Traiter la réédition et la musique restaurée ultérieure comme un original inchangé",
              "pt": "Tratar a reedição e a música restaurada posterior como original inalterado"
            }
          },
          {
            "id": "critical",
            "label": {
              "en": "Document the stereotype, protests, changed character identity and version history",
              "nb": "Dokumenter stereotypien, protestene, endret figuridentitet og versjonshistorien",
              "fr": "Documenter le stéréotype, les protestations, l'identité modifiée et l'histoire des versions",
              "pt": "Documentar o estereótipo, os protestos, a identidade alterada e a história das versões"
            }
          }
        ],
        "bestSupportedOptionId": "critical",
        "explanation": {
          "en": "AFI documents protest and the character's re-identification in 1918; the Film Foundation and MoMA contextualize racialized representation. Distinguish historical critique from craft practice and identify the later score as a separate presentation layer.",
          "nb": "AFI dokumenterer protest og endringen i figurens identitet i 1918; Film Foundation og MoMA kontekstualiserer rasialisert fremstilling. Skill historisk kritikk fra håndverksøvelse og identifiser senere musikk som et eget visningslag.",
          "fr": "AFI documente les protestations et la modification de l'identité du personnage en 1918 ; la Film Foundation et le MoMA contextualisent la représentation racialisée. Distinguez critique historique et exercice technique, et identifiez la musique ultérieure comme une couche de présentation distincte.",
          "pt": "AFI documenta protestos e a alteração da identidade da personagem em 1918; a Film Foundation e o MoMA contextualizam a representação racializada. Distinga crítica histórica de prática técnica e identifique a música posterior como camada de apresentação distinta."
        },
        "sourceIds": [
          "s0",
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_gold_rush_1925",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore independent star production, location and studio integration, and the differences between silent and sound editions.",
      "nb": "Utforsk uavhengig stjerneproduksjon, samspillet mellom location og studio og forskjellene mellom stumfilm- og lydutgaver.",
      "fr": "Explorez la production indépendante d'une vedette, l'intégration des lieux et du studio, et les différences entre éditions muette et sonore.",
      "pt": "Explore a produção independente de uma estrela, a integração de locais e estúdio e as diferenças entre edições muda e sonora."
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Gold Rush — AFI Catalog",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/9427-THE-GOLD-RUSH"
      },
      {
        "id": "s1",
        "title": "Filming The Gold Rush",
        "publisher": "Charlie Chaplin / Roy Export",
        "url": "https://www.charliechaplin.com/en/films/2-The-Gold-Rush/articles/5-Filming-The-Gold-Rush"
      },
      {
        "id": "s2",
        "title": "The Music of The Gold Rush",
        "publisher": "Charlie Chaplin / Roy Export",
        "url": "https://www.charliechaplin.com/en/films/2-The-Gold-Rush/articles/248-The-Music-of-The-Gold-Rush"
      },
      {
        "id": "s3",
        "title": "La febbre dell'oro — 4K restoration",
        "publisher": "Cineteca di Bologna",
        "url": "https://cinetecadibologna.it/distribuzione/film/la-febbre-delloro/"
      }
    ],
    "questions": [
      {
        "id": "goldrush-world",
        "area": "camera",
        "prompt": {
          "en": "How could a miniature exercise combine a location reference with a constructed set?",
          "nb": "Hvordan kan en miniatyrøvelse kombinere en stedsreferanse med en konstruert scenografi?",
          "fr": "Comment une maquette peut-elle associer une référence de lieu à un décor construit ?",
          "pt": "Como pode uma maquete combinar uma referência de local com um cenário construído?"
        },
        "options": [
          {
            "id": "match",
            "label": {
              "en": "Compare a landscape drawing and miniature for consistent scale and framing",
              "nb": "Sammenlign en landskapstegning og en miniatyr med hensyn til skala og utsnitt",
              "fr": "Comparer un dessin de paysage et une maquette pour la cohérence d'échelle et de cadre",
              "pt": "Comparar um desenho de paisagem e uma maquete quanto à coerência de escala e enquadramento"
            }
          },
          {
            "id": "separate",
            "label": {
              "en": "Ignore the visual relationship between location and constructed scenery",
              "nb": "Ignorer den visuelle sammenhengen mellom opptakssted og konstruert dekor",
              "fr": "Ignorer le rapport visuel entre lieu et décor construit",
              "pt": "Ignorar a relação visual entre local e cenário construído"
            }
          },
          {
            "id": "hazard",
            "label": {
              "en": "Recreate hazardous historical conditions instead of using a model",
              "nb": "Gjenskap farlige historiske forhold i stedet for å bruke en modell",
              "fr": "Recréer des conditions historiques dangereuses au lieu d'une maquette",
              "pt": "Recriar condições históricas perigosas em vez de usar uma maquete"
            }
          }
        ],
        "bestSupportedOptionId": "match",
        "explanation": {
          "en": "Chaplin's archive documents the Truckee shoot and constructed mountain scenery in Hollywood. Compare safe drawings and a miniature of an invented setting to explore visual continuity, not to reproduce dangerous historical production conditions.",
          "nb": "Chaplins arkiv dokumenterer Truckee-opptakene og konstruert fjellscenografi i Hollywood. Sammenlign trygge tegninger og en miniatyr av et oppdiktet sted for å utforske visuell kontinuitet, ikke for å gjenskape farlige historiske produksjonsforhold.",
          "fr": "Les archives Chaplin documentent le tournage à Truckee et les montagnes construites à Hollywood. Comparez des dessins et une maquette sûre d'un lieu inventé pour étudier la continuité visuelle, non les conditions historiques dangereuses.",
          "pt": "O arquivo Chaplin documenta a rodagem em Truckee e a montanha construída em Hollywood. Compare desenhos e uma maquete segura de um local inventado para explorar continuidade visual, sem reproduzir condições históricas perigosas."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "goldrush-independence",
        "area": "research",
        "prompt": {
          "en": "How should you map star-producer control, craft collaboration and distribution?",
          "nb": "Hvordan bør du kartlegge stjerneprodusentens kontroll, fagsamarbeid og distribusjon?",
          "fr": "Comment cartographier le contrôle de la vedette-producteur, les collaborations et la distribution ?",
          "pt": "Como mapear o controlo da estrela-produtora, a colaboração técnica e a distribuição?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Assume Chaplin personally performed every credited craft task",
              "nb": "Anta at Chaplin personlig utførte alle krediterte fagoppgaver",
              "fr": "Supposer que Chaplin a personnellement accompli toutes les tâches créditées",
              "pt": "Supor que Chaplin executou pessoalmente todas as tarefas creditadas"
            }
          },
          {
            "id": "roles",
            "label": {
              "en": "Distinguish Chaplin's multiple roles, the craft team and United Artists distribution",
              "nb": "Skill Chaplins mange roller, fagteamet og United Artists-distribusjonen",
              "fr": "Distinguer les multiples rôles de Chaplin, l'équipe technique et la distribution United Artists",
              "pt": "Distinguir os vários papéis de Chaplin, a equipa técnica e a distribuição United Artists"
            }
          },
          {
            "id": "studio",
            "label": {
              "en": "Identify United Artists as the sole maker of the film",
              "nb": "Identifiser United Artists som filmens eneste produsent",
              "fr": "Identifier United Artists comme seul producteur du film",
              "pt": "Identificar a United Artists como única produtora do filme"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "AFI records Chaplin's production, writing, direction and editing roles, the photography and design credits and United Artists distribution. Independent creative control and collaboration can coexist; record documented roles separately.",
          "nb": "AFI registrerer Chaplins produksjon, manus, regi og klipp, foto- og scenografikrediteringer og United Artists-distribusjon. Uavhengig kreativ kontroll og samarbeid kan eksistere samtidig; registrer dokumenterte roller separat.",
          "fr": "AFI recense production, écriture, réalisation et montage de Chaplin, les crédits image et décors et la distribution United Artists. Contrôle indépendant et collaboration peuvent coexister ; consignez les rôles séparément.",
          "pt": "AFI regista produção, escrita, realização e montagem de Chaplin, créditos de fotografia e cenografia e distribuição United Artists. Controlo independente e colaboração podem coexistir; registe os papéis separadamente."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "goldrush-versions",
        "area": "sound",
        "prompt": {
          "en": "How should you distinguish the 1925 release from Chaplin's 1942 reissue?",
          "nb": "Hvordan bør du skille utgivelsen fra 1925 fra Chaplins nyutgivelse i 1942?",
          "fr": "Comment distinguer la sortie de 1925 de la réédition de Chaplin en 1942 ?",
          "pt": "Como distinguir a estreia de 1925 da reedição de Chaplin em 1942?"
        },
        "options": [
          {
            "id": "original",
            "label": {
              "en": "Attribute the 1942 recorded narration and score to the original silent release",
              "nb": "Tilskriv fortellerstemmen og musikken fra 1942 den opprinnelige stumfilmutgivelsen",
              "fr": "Attribuer narration enregistrée et musique de 1942 à la sortie muette originale",
              "pt": "Atribuir narração gravada e música de 1942 à estreia muda original"
            }
          },
          {
            "id": "identical",
            "label": {
              "en": "Assume both editions have the same footage and presentation",
              "nb": "Anta at begge utgavene har identisk opptaksmateriale og visning",
              "fr": "Supposer que les deux éditions ont les mêmes images et la même présentation",
              "pt": "Supor que ambas as edições têm as mesmas imagens e apresentação"
            }
          },
          {
            "id": "distinguish",
            "label": {
              "en": "Document the silent accompaniment, later narration and score, and editing changes",
              "nb": "Dokumenter stumfilmakkompagnement, senere fortellerstemme og musikk samt klippeendringer",
              "fr": "Documenter l'accompagnement muet, la narration et la musique ultérieures, et les changements de montage",
              "pt": "Documentar acompanhamento mudo, narração e música posteriores e alterações de montagem"
            }
          }
        ],
        "bestSupportedOptionId": "distinguish",
        "explanation": {
          "en": "The Chaplin archive distinguishes the compiled 1925 accompaniment from the newly composed synchronized score, narration and altered footage of the 1942 edition. Tie each claim to the edition and keep restoration metadata separate.",
          "nb": "Chaplins arkiv skiller det sammenstilte akkompagnementet fra 1925 fra den nykomponerte synkrone musikken, fortellerstemmen og endrede opptak i 1942-utgaven. Knytt hver påstand til riktig utgave og hold restaureringsmetadata adskilt.",
          "fr": "Les archives Chaplin distinguent l'accompagnement compilé de 1925 de la musique synchronisée nouvelle, de la narration et des images modifiées en 1942. Reliez chaque affirmation à son édition et séparez les métadonnées de restauration.",
          "pt": "O arquivo Chaplin distingue o acompanhamento compilado de 1925 da nova música sincronizada, narração e imagens alteradas de 1942. Relacione cada afirmação com a edição correspondente e separe os metadados de restauro."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_it_1927",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore silent performance, adaptation and the studio construction of a star image.",
      "nb": "Utforsk stumfilmspill, adaptasjon og studioets utvikling av en stjerneidentitet.",
      "fr": "Explorez le jeu muet, l'adaptation et la construction d'une image de vedette par le studio.",
      "pt": "Explore a interpretação muda, a adaptação e a construção da imagem de estrela pelo estúdio."
    },
    "sources": [
      {
        "id": "s0",
        "title": "It — AFI Catalog",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/9977-IT"
      },
      {
        "id": "s1",
        "title": "It (1927) — National Film Registry description",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      },
      {
        "id": "s2",
        "title": "It / Children of Divorce",
        "publisher": "UCLA Film & Television Archive",
        "url": "https://cinema.ucla.edu/events/it-1927-children-of-divorce-1927-01-11-13/"
      }
    ],
    "questions": [
      {
        "id": "it-performance",
        "area": "camera",
        "prompt": {
          "en": "How can you build a recognizable fictional character without rating a performer's appearance?",
          "nb": "Hvordan kan du utvikle en gjenkjennelig fiktiv figur uten å rangere skuespillerens utseende?",
          "fr": "Comment créer un personnage reconnaissable sans noter l'apparence de l'interprète ?",
          "pt": "Como criar uma personagem reconhecível sem avaliar a aparência do intérprete?"
        },
        "options": [
          {
            "id": "gesture",
            "label": {
              "en": "Compare gestures, costume sketches and framing that support character agency",
              "nb": "Sammenlign gester, kostymeskisser og utsnitt som støtter figurens handlekraft",
              "fr": "Comparer gestes, croquis de costumes et cadrages qui soutiennent l'autonomie du personnage",
              "pt": "Comparar gestos, esboços de figurinos e enquadramentos que apoiem a autonomia da personagem"
            }
          },
          {
            "id": "rating",
            "label": {
              "en": "Reduce character identity to a numerical beauty rating",
              "nb": "Reduser figurens identitet til en tallfestet skjønnhetsvurdering",
              "fr": "Réduire l'identité du personnage à une note de beauté",
              "pt": "Reduzir a identidade da personagem a uma nota de beleza"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore acting and framing when planning a star vehicle",
              "nb": "Ignorer skuespillerarbeid og utsnitt når en stjernefilm planlegges",
              "fr": "Ignorer le jeu et le cadrage dans la conception d'un film de vedette",
              "pt": "Ignorar interpretação e enquadramento ao planear um filme de estrela"
            }
          }
        ],
        "bestSupportedOptionId": "gesture",
        "explanation": {
          "en": "UCLA and the Library of Congress describe Bow's central star presence. An original exercise can explore how performance and visual choices communicate character, without reproducing period publicity as appearance scoring.",
          "nb": "UCLA og Library of Congress beskriver Bows sentrale stjernenærvær. En egen øvelse kan utforske hvordan spill og visuelle valg formidler karakter, uten å gjenskape tidens markedsføring som utseendepoeng.",
          "fr": "UCLA et la Library of Congress décrivent la présence centrale de Bow. Un exercice original explore le jeu et les choix visuels sans transformer la publicité d'époque en notation physique.",
          "pt": "UCLA e Library of Congress descrevem a presença central de Bow. Um exercício original explora interpretação e escolhas visuais sem transformar publicidade histórica em avaliação física."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "it-publicity",
        "area": "research",
        "prompt": {
          "en": "How should a producer connect adaptation, promotion and film production?",
          "nb": "Hvordan bør en produsent knytte adaptasjon, markedsføring og filmproduksjon sammen?",
          "fr": "Comment relier adaptation, promotion et production cinématographique ?",
          "pt": "Como relacionar adaptação, promoção e produção cinematográfica?"
        },
        "options": [
          {
            "id": "fiction",
            "label": {
              "en": "Treat promotional claims as objective descriptions of every performer",
              "nb": "Behandle reklamepåstander som objektive beskrivelser av alle skuespillere",
              "fr": "Traiter les slogans publicitaires comme descriptions objectives de chaque interprète",
              "pt": "Tratar afirmações publicitárias como descrições objetivas de cada intérprete"
            }
          },
          {
            "id": "system",
            "label": {
              "en": "Map the literary concept, media arrangement, studio and publicity separately",
              "nb": "Kartlegg litterært konsept, medieavtale, studio og markedsføring hver for seg",
              "fr": "Cartographier séparément le concept littéraire, l'accord médiatique, le studio et la publicité",
              "pt": "Mapear separadamente o conceito literário, o acordo mediático, o estúdio e a publicidade"
            }
          },
          {
            "id": "erase",
            "label": {
              "en": "Remove the literary and media context from the production account",
              "nb": "Fjern litteratur- og mediekonteksten fra produksjonsbeskrivelsen",
              "fr": "Supprimer le contexte littéraire et médiatique du récit de production",
              "pt": "Eliminar o contexto literário e mediático do relato de produção"
            }
          }
        ],
        "bestSupportedOptionId": "system",
        "explanation": {
          "en": "AFI records Glyn's adaptation and the publication arrangement; the Library of Congress describes Paramount's publicity strategy around Bow. Distinguish documented commercial coordination from the claims used to market a star.",
          "nb": "AFI dokumenterer Glyns adaptasjon og publiseringsavtalen; Library of Congress beskriver Paramounts markedsføring av Bow. Skill dokumentert kommersielt samarbeid fra påstandene brukt til å markedsføre en stjerne.",
          "fr": "AFI documente l'adaptation de Glyn et l'accord de publication ; la Library of Congress décrit la stratégie publicitaire de Paramount autour de Bow. Distinguez coordination commerciale et slogans.",
          "pt": "AFI documenta a adaptação de Glyn e o acordo de publicação; a Library of Congress descreve a estratégia publicitária da Paramount em torno de Bow. Distinga coordenação comercial de afirmações promocionais."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "it-credits",
        "area": "research",
        "prompt": {
          "en": "How should different levels of directing and craft credits be recorded?",
          "nb": "Hvordan bør ulike regi- og fagkrediteringer registreres?",
          "fr": "Comment consigner les différents crédits de réalisation et des métiers du film ?",
          "pt": "Como registar os diferentes créditos de realização e das funções técnicas?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Attribute all directing and craft contributions to one famous name",
              "nb": "Tilskriv all regi og alle fagbidrag ett kjent navn",
              "fr": "Attribuer toute réalisation et tous les métiers à un seul nom célèbre",
              "pt": "Atribuir toda a realização e funções técnicas a um único nome famoso"
            }
          },
          {
            "id": "guess",
            "label": {
              "en": "Invent a precise division of work not supported by the records",
              "nb": "Finn på en nøyaktig arbeidsdeling som kildene ikke støtter",
              "fr": "Inventer une répartition précise du travail sans preuve",
              "pt": "Inventar uma divisão precisa do trabalho sem apoio documental"
            }
          },
          {
            "id": "credit",
            "label": {
              "en": "Keep the source-specific direction credits and separate writing, photography and editing",
              "nb": "Behold kildespesifikke regikrediteringer og skill manus, foto og klipp",
              "fr": "Conserver les crédits de réalisation selon les sources et distinguer scénario, image et montage",
              "pt": "Manter créditos de realização por fonte e distinguir argumento, fotografia e montagem"
            }
          }
        ],
        "bestSupportedOptionId": "credit",
        "explanation": {
          "en": "AFI records additional direction and multiple writing credits, while UCLA confirms core craft credits and the silent presentation. Preserve the source-specific distinctions rather than inferring an exact undocumented division of labour.",
          "nb": "AFI registrerer tilleggsregi og flere manusbidrag, mens UCLA bekrefter sentrale fagkrediteringer og stumfilmvisningen. Bevar kildespesifikke forskjeller fremfor å utlede en udokumentert arbeidsdeling.",
          "fr": "AFI recense une réalisation additionnelle et plusieurs crédits d'écriture ; UCLA confirme les principaux métiers et la projection muette. Préservez les distinctions documentées sans déduire une répartition inconnue.",
          "pt": "AFI regista realização adicional e vários créditos de escrita; UCLA confirma funções centrais e exibição muda. Preserve as distinções documentadas sem deduzir uma divisão de trabalho desconhecida."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_wings_1927",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore large-unit collaboration, readable visual scale and the distinction between release and restoration editions.",
      "nb": "Utforsk samarbeid i store produksjonsteam, tydelig visuell skala og skillet mellom utgivelses- og restaureringsversjoner.",
      "fr": "Explorez la collaboration de grandes équipes, la lisibilité de l'échelle visuelle et les distinctions entre éditions de sortie et de restauration.",
      "pt": "Explore a colaboração de grandes equipas, a clareza da escala visual e a distinção entre edições de estreia e restauro."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Wings — AFI Catalog",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/13362-WINGS"
      },
      {
        "id": "s1",
        "title": "Wings — 2011 digital restoration screening",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/events/wings-2011"
      },
      {
        "id": "s2",
        "title": "The 1st Academy Awards — 1929",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1929"
      },
      {
        "id": "s3",
        "title": "Films Selected to the National Film Registry 1997",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/loc/lcib/9712/nfr.html"
      }
    ],
    "questions": [
      {
        "id": "wings-space",
        "area": "camera",
        "prompt": {
          "en": "How could a safe tabletop exercise explore visual clarity across a large fictional space?",
          "nb": "Hvordan kan en trygg bordøvelse utforske visuell tydelighet i et stort fiktivt rom?",
          "fr": "Comment une maquette sûre peut-elle explorer la lisibilité d'un vaste espace fictif ?",
          "pt": "Como pode uma maquete segura explorar a clareza de um grande espaço fictício?"
        },
        "options": [
          {
            "id": "map",
            "label": {
              "en": "Draw a benign fictional scene with landmarks and consistent viewpoints",
              "nb": "Tegn en ufarlig fiktiv scene med landemerker og konsistente synsvinkler",
              "fr": "Dessiner une scène fictive sans danger avec repères et points de vue cohérents",
              "pt": "Desenhar uma cena fictícia inofensiva com referências e pontos de vista coerentes"
            }
          },
          {
            "id": "risk",
            "label": {
              "en": "Attempt real historical stunt activity instead of a drawing",
              "nb": "Forsøk virkelig historisk stuntaktivitet fremfor en tegning",
              "fr": "Tenter des cascades historiques réelles au lieu d'un dessin",
              "pt": "Tentar acrobacias históricas reais em vez de um desenho"
            }
          },
          {
            "id": "confuse",
            "label": {
              "en": "Remove all spatial relationships between the selected views",
              "nb": "Fjern alle romlige forbindelser mellom de valgte bildene",
              "fr": "Supprimer toutes les relations spatiales entre les vues choisies",
              "pt": "Eliminar todas as relações espaciais entre as vistas escolhidas"
            }
          }
        ],
        "bestSupportedOptionId": "map",
        "explanation": {
          "en": "AFI and the Academy document a large specialist photography team. Use drawings of an invented everyday scene to compare spatial clarity across views; this is not an aviation or stunt exercise and does not reconstruct the film's action.",
          "nb": "AFI og Academy dokumenterer et stort spesialisert fototeam. Bruk tegninger av en oppdiktet hverdagsscene til å sammenligne romlig tydelighet; dette er ingen fly- eller stuntøvelse og rekonstruerer ikke filmens handling.",
          "fr": "AFI et l'Academy documentent une importante équipe image spécialisée. Utilisez des dessins d'une scène quotidienne inventée pour comparer la lisibilité spatiale, sans exercice aérien ni cascade ni reconstitution de l'action.",
          "pt": "AFI e Academy documentam uma grande equipa especializada de fotografia. Use desenhos de uma cena quotidiana inventada para comparar clareza espacial, sem exercício aéreo, acrobacias ou reconstrução da ação."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "wings-team",
        "area": "research",
        "prompt": {
          "en": "How should a researcher represent a large studio production's specialist collaboration?",
          "nb": "Hvordan bør en forsker fremstille spesialistsamarbeidet i en stor studioproduksjon?",
          "fr": "Comment représenter la collaboration spécialisée d'une grande production de studio ?",
          "pt": "Como representar a colaboração especializada de uma grande produção de estúdio?"
        },
        "options": [
          {
            "id": "single",
            "label": {
              "en": "Credit every specialist contribution to the director alone",
              "nb": "Krediter alle spesialistbidrag til regissøren alene",
              "fr": "Attribuer toutes les contributions spécialisées au seul réalisateur",
              "pt": "Atribuir todos os contributos especializados apenas ao realizador"
            }
          },
          {
            "id": "roles",
            "label": {
              "en": "Document production, photography, editing, design and engineering credits separately",
              "nb": "Dokumenter produksjon, foto, klipp, scenografi og tekniske krediteringer separat",
              "fr": "Documenter séparément production, image, montage, décors et ingénierie",
              "pt": "Documentar separadamente produção, fotografia, montagem, cenografia e engenharia"
            }
          },
          {
            "id": "award",
            "label": {
              "en": "Treat a film award as proof of every undocumented production claim",
              "nb": "Behandle en filmpris som bevis på alle udokumenterte produksjonspåstander",
              "fr": "Traiter un prix comme preuve de toute affirmation de production non documentée",
              "pt": "Tratar um prémio como prova de toda afirmação de produção não documentada"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "AFI and the Academy identify the production team and technical credits; the Academy separately records Pomeroy's Engineering Effects award. Map documented roles without inferring an operational effects method or attributing all craft to one filmmaker.",
          "nb": "AFI og Academy identifiserer produksjonsteamet og tekniske krediteringer; Academy registrerer også Pomeroys effektpris. Kartlegg dokumenterte roller uten å utlede en operativ effektmetode eller tilskrive alt én filmskaper.",
          "fr": "AFI et l'Academy identifient les équipes et crédits techniques ; l'Academy consigne séparément le prix d'effets de Pomeroy. Cartographiez les rôles sans déduire de méthode opérationnelle ni tout attribuer à une personne.",
          "pt": "AFI e Academy identificam equipas e créditos técnicos; a Academy regista separadamente o prémio de efeitos de Pomeroy. Mapeie papéis sem deduzir um método operacional nem atribuir tudo a uma pessoa."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "wings-versions",
        "area": "sound",
        "prompt": {
          "en": "How should the 1927 roadshow, later national release and restored presentation be distinguished?",
          "nb": "Hvordan bør turnévisningen fra 1927, senere nasjonal utgivelse og restaurert visning skilles?",
          "fr": "Comment distinguer les projections itinérantes de 1927, la sortie nationale ultérieure et la restauration ?",
          "pt": "Como distinguir a exibição itinerante de 1927, a estreia nacional posterior e a apresentação restaurada?"
        },
        "options": [
          {
            "id": "original",
            "label": {
              "en": "Attribute every later sound and colour choice to the first release",
              "nb": "Tilskriv alle senere lyd- og fargevalg den første utgivelsen",
              "fr": "Attribuer tous les choix sonores et chromatiques ultérieurs à la première sortie",
              "pt": "Atribuir todas as escolhas posteriores de som e cor à primeira estreia"
            }
          },
          {
            "id": "identical",
            "label": {
              "en": "Assume all versions have identical presentation elements",
              "nb": "Anta at alle versjoner har identiske visningselementer",
              "fr": "Supposer que toutes les versions ont des éléments de présentation identiques",
              "pt": "Supor que todas as versões têm elementos de apresentação idênticos"
            }
          },
          {
            "id": "layers",
            "label": {
              "en": "Document the release-specific sound additions and restoration choices separately",
              "nb": "Dokumenter utgivelsesspesifikke lydtillegg og restaureringsvalg separat",
              "fr": "Documenter séparément les ajouts sonores de sortie et les choix de restauration",
              "pt": "Documentar separadamente os acréscimos sonoros de estreia e as escolhas de restauro"
            }
          }
        ],
        "bestSupportedOptionId": "layers",
        "explanation": {
          "en": "AFI distinguishes the 1927 roadshow from the 1929 national release with added score and sound effects. The Academy describes the 2011 restoration's colour treatment and live organ presentation. Keep these edition-specific facts separate.",
          "nb": "AFI skiller turnévisningen fra 1927 fra den nasjonale utgivelsen i 1929 med tilført musikk og lydeffekter. Academy beskriver fargebehandlingen i restaureringen fra 2011 og levende orgelmusikk. Hold utgavespesifikke fakta adskilt.",
          "fr": "AFI distingue les projections de 1927 de la sortie nationale de 1929 avec musique et effets sonores ajoutés. L'Academy décrit la couleur restaurée en 2011 et l'orgue en direct. Séparez ces faits propres aux éditions.",
          "pt": "AFI distingue a exibição de 1927 da estreia nacional de 1929 com música e efeitos sonoros acrescentados. A Academy descreve a cor restaurada em 2011 e o órgão ao vivo. Separe estes factos específicos das edições."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_crowd_1928",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore the relationship between urban scale, ordinary characters, studio craft and the history of alternate endings.",
      "nb": "Utforsk forholdet mellom urban skala, hverdagsfigurer, studiohåndverk og historien til alternative avslutninger.",
      "fr": "Explorez le rapport entre échelle urbaine, personnages ordinaires, métiers du studio et histoire des fins alternatives.",
      "pt": "Explore a relação entre escala urbana, personagens comuns, ofícios de estúdio e história dos finais alternativos."
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Crowd — AFI Catalog",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/3514-THE-CROWD"
      },
      {
        "id": "s1",
        "title": "The Crowd (1928) — National Film Registry description",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      },
      {
        "id": "s2",
        "title": "The 1st Academy Awards — 1929",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1929"
      }
    ],
    "questions": [
      {
        "id": "crowd-scale",
        "area": "camera",
        "prompt": {
          "en": "How can a drawn city-to-interior sequence communicate the relationship between an individual and a large institution?",
          "nb": "Hvordan kan en tegnet sekvens fra by til interiør formidle forholdet mellom individet og en stor institusjon?",
          "fr": "Comment une séquence dessinée de la ville à l'intérieur peut-elle montrer le rapport entre individu et institution ?",
          "pt": "Como pode uma sequência desenhada da cidade ao interior mostrar a relação entre indivíduo e instituição?"
        },
        "options": [
          {
            "id": "scale",
            "label": {
              "en": "Compare city scale, a shared interior and an individual character in connected drawings",
              "nb": "Sammenlign byskala, et felles interiør og én figur i sammenhengende tegninger",
              "fr": "Comparer échelle urbaine, intérieur collectif et personnage dans des dessins reliés",
              "pt": "Comparar escala urbana, interior coletivo e personagem em desenhos ligados"
            }
          },
          {
            "id": "unrelated",
            "label": {
              "en": "Use disconnected images with no relationship to the character",
              "nb": "Bruk løsrevne bilder uten forbindelse til figuren",
              "fr": "Utiliser des images disjointes sans rapport avec le personnage",
              "pt": "Usar imagens desligadas sem relação com a personagem"
            }
          },
          {
            "id": "claim",
            "label": {
              "en": "Claim the drawing reveals an exact undocumented historical effects technique",
              "nb": "Hevd at tegningen avslører en eksakt udokumentert historisk effektteknikk",
              "fr": "Affirmer que le dessin révèle une technique historique non documentée",
              "pt": "Afirmar que o desenho revela uma técnica histórica não documentada"
            }
          }
        ],
        "bestSupportedOptionId": "scale",
        "explanation": {
          "en": "The Library of Congress describes the transition from skyscraper scale to a vast office. Draw a new setting to compare the social meaning of scale and framing without asserting an exact historical effects recipe.",
          "nb": "Library of Congress beskriver overgangen fra skyskraperskala til et enormt kontor. Tegn et nytt miljø for å sammenligne sosial betydning av skala og utsnitt uten å hevde en eksakt historisk effektmetode.",
          "fr": "La Library of Congress décrit le passage de l'échelle des gratte-ciel à un vaste bureau. Dessinez un nouveau lieu pour comparer le sens social de l'échelle et du cadre sans prétendre connaître la technique exacte.",
          "pt": "A Library of Congress descreve a passagem da escala dos arranha-céus para um vasto escritório. Desenhe um novo local para comparar o sentido social da escala e enquadramento sem afirmar conhecer a técnica exata."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "crowd-location",
        "area": "research",
        "prompt": {
          "en": "How could you combine location observation and studio planning in a consent-aware exercise?",
          "nb": "Hvordan kan du kombinere stedsobservasjon og studioplanlegging i en øvelse som ivaretar samtykke?",
          "fr": "Comment combiner observation des lieux et préparation en studio dans un exercice respectant le consentement ?",
          "pt": "Como combinar observação de locais e planeamento de estúdio num exercício que respeite o consentimento?"
        },
        "options": [
          {
            "id": "hidden",
            "label": {
              "en": "Secretly record identifiable strangers to imitate historical practice",
              "nb": "Film identifiserbare fremmede i skjul for å etterligne historisk praksis",
              "fr": "Filmer secrètement des inconnus identifiables pour imiter la pratique historique",
              "pt": "Filmar secretamente desconhecidos identificáveis para imitar a prática histórica"
            }
          },
          {
            "id": "consent",
            "label": {
              "en": "Use drawings, unoccupied settings or consenting collaborators to plan the connection",
              "nb": "Bruk tegninger, tomme miljøer eller samtykkende samarbeidspartnere til å planlegge forbindelsen",
              "fr": "Utiliser dessins, lieux vides ou collaborateurs consentants pour préparer le raccord",
              "pt": "Usar desenhos, locais vazios ou colaboradores que consintam para planear a ligação"
            }
          },
          {
            "id": "erase",
            "label": {
              "en": "Ignore the distinction between location material and constructed interiors",
              "nb": "Ignorer forskjellen mellom stedsmateriale og konstruerte interiører",
              "fr": "Ignorer la distinction entre lieux réels et intérieurs construits",
              "pt": "Ignorar a distinção entre locais reais e interiores construídos"
            }
          }
        ],
        "bestSupportedOptionId": "consent",
        "explanation": {
          "en": "AFI and the Library of Congress describe historical New York location work, including concealed cameras. Study location and studio integration through privacy-respecting original materials; historical practice is not a direction to repeat it.",
          "nb": "AFI og Library of Congress beskriver historiske opptak i New York, inkludert skjulte kameraer. Studer samspillet mellom sted og studio med egne personvernvennlige materialer; historisk praksis er ikke en oppfordring til å gjenta den.",
          "fr": "AFI et la Library of Congress décrivent les tournages historiques à New York, notamment en caméra cachée. Étudiez l'intégration des lieux et du studio avec des matériaux respectueux de la vie privée, sans reproduire cette pratique.",
          "pt": "AFI e Library of Congress descrevem filmagens históricas em Nova Iorque, incluindo câmaras ocultas. Estude a integração de locais e estúdio com materiais que respeitem a privacidade, sem repetir essa prática."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "crowd-endings",
        "area": "research",
        "prompt": {
          "en": "How should the alternative endings and later restoration score be documented?",
          "nb": "Hvordan bør de alternative avslutningene og den senere restaureringsmusikken dokumenteres?",
          "fr": "Comment documenter les fins alternatives et la musique de restauration ultérieure ?",
          "pt": "Como documentar os finais alternativos e a música de restauro posterior?"
        },
        "options": [
          {
            "id": "one",
            "label": {
              "en": "Declare one ending to be the only release option without evidence",
              "nb": "Erklær én avslutning som eneste utgivelsesalternativ uten belegg",
              "fr": "Déclarer une fin seule option de sortie sans preuve",
              "pt": "Declarar um final como única opção de estreia sem evidência"
            }
          },
          {
            "id": "score",
            "label": {
              "en": "Describe the later Carl Davis score as original synchronized production sound",
              "nb": "Beskriv Carl Davis' senere musikk som synkron originallyd",
              "fr": "Décrire la musique ultérieure de Carl Davis comme son synchrone original",
              "pt": "Descrever a música posterior de Carl Davis como som sincronizado original"
            }
          },
          {
            "id": "versions",
            "label": {
              "en": "Distinguish previewed endings, exhibitor options and the later restoration presentation",
              "nb": "Skill forhåndsviste avslutninger, kinoenes valg og den senere restaurerte visningen",
              "fr": "Distinguer fins testées, options des exploitants et présentation restaurée ultérieure",
              "pt": "Distinguir finais testados, opções dos exibidores e apresentação restaurada posterior"
            }
          }
        ],
        "bestSupportedOptionId": "versions",
        "explanation": {
          "en": "AFI records multiple previewed endings, two options made available to exhibitors and the later 1981 restoration with Carl Davis music. Preserve the differences between production decisions, release options and archival presentation.",
          "nb": "AFI registrerer flere forhåndsviste avslutninger, to alternativer tilgjengelige for kinoene og restaureringen fra 1981 med musikk av Carl Davis. Bevar forskjellene mellom produksjonsvalg, utgivelsesalternativer og arkivvisning.",
          "fr": "AFI recense plusieurs fins testées, deux options proposées aux exploitants et la restauration de 1981 avec musique de Carl Davis. Préservez les différences entre choix de production, options de sortie et présentation archivistique.",
          "pt": "AFI regista vários finais testados, duas opções oferecidas aos exibidores e o restauro de 1981 com música de Carl Davis. Preserve as diferenças entre decisões de produção, opções de estreia e apresentação arquivística."
        },
        "sourceIds": [
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_cabinet_of_dr_caligari_1920",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore graphic architecture, stylized performance and narrative ambiguity in Expressionist cinema.",
      "nb": "Utforsk grafisk arkitektur, stilisert skuespill og fortellermessig tvetydighet i ekspresjonistisk film.",
      "fr": "Explorez l'architecture graphique, le jeu stylisé et l'ambiguïté narrative du cinéma expressionniste.",
      "pt": "Explore a arquitetura gráfica, a interpretação estilizada e a ambiguidade narrativa do cinema expressionista."
    },
    "sources": [
      {
        "id": "s0",
        "title": "100 years of The Cabinet of Dr. Caligari",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/100-years-cabinet-dr-caligari"
      },
      {
        "id": "s1",
        "title": "Das Cabinet des Dr. Caligari",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/movie/das-cabinet-des-dr-caligari_ea43d4a69c1a5006e03053d50b37753d"
      },
      {
        "id": "s2",
        "title": "Be Caligari! – The Virtual Cabinet",
        "publisher": "Deutsche Kinemathek",
        "url": "https://www.deutsche-kinemathek.de/en/visit/exhibitions/be-caligari-virtual-cabinet"
      },
      {
        "id": "s3",
        "title": "Der expressionistische Film",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/node/6103/material/758439"
      }
    ],
    "questions": [
      {
        "id": "caligari-design",
        "area": "camera",
        "prompt": {
          "en": "How can a constructed interior communicate a fictional character's uncertainty?",
          "nb": "Hvordan kan et konstruert interiør formidle en fiktiv figurs usikkerhet?",
          "fr": "Comment un intérieur construit peut-il exprimer l'incertitude d'un personnage fictif ?",
          "pt": "Como pode um interior construído comunicar a incerteza de uma personagem fictícia?"
        },
        "options": [
          {
            "id": "graphic",
            "label": {
              "en": "Compare angular forms and painted shadows in original drawings",
              "nb": "Sammenlign kantete former og malte skygger i egne tegninger",
              "fr": "Comparer formes anguleuses et ombres peintes dans des dessins originaux",
              "pt": "Comparar formas angulares e sombras pintadas em desenhos originais"
            }
          },
          {
            "id": "neutral",
            "label": {
              "en": "Assume all architectural choices have identical expressive effects",
              "nb": "Anta at alle arkitektoniske valg har identisk uttrykksvirkning",
              "fr": "Supposer que tous les choix architecturaux ont le même effet expressif",
              "pt": "Supor que todas as escolhas arquitetónicas têm o mesmo efeito expressivo"
            }
          },
          {
            "id": "copy",
            "label": {
              "en": "Claim the original exercise reproduces an authenticated historical set",
              "nb": "Hevd at øvelsen gjenskaper et autentisert historisk filmsett",
              "fr": "Prétendre que l'exercice reproduit un décor historique authentifié",
              "pt": "Afirmar que o exercício reproduz um cenário histórico autenticado"
            }
          }
        ],
        "bestSupportedOptionId": "graphic",
        "explanation": {
          "en": "BFI and the contemporary filmportal record connect angular architecture, graphic lighting and psychological expression. Use an original drawn room to test how visual form contributes to mood without claiming an exact historical reconstruction.",
          "nb": "BFI og den samtidige filmportal-oppføringen knytter kantete arkitektur og grafisk lys til psykologisk uttrykk. Bruk et eget tegnet rom til å teste hvordan visuell form skaper stemning uten å hevde en eksakt historisk rekonstruksjon.",
          "fr": "Le BFI et la notice contemporaine de filmportal relient architecture anguleuse, lumière graphique et expression psychologique. Dessinez une pièce originale pour étudier l'atmosphère sans prétendre à une reconstruction exacte.",
          "pt": "O BFI e o registo contemporâneo da filmportal ligam arquitetura angular, luz gráfica e expressão psicológica. Desenhe uma divisão original para estudar a atmosfera sem alegar uma reconstrução exata."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "caligari-frame",
        "area": "research",
        "prompt": {
          "en": "How could a framing narrative change the interpretation of a fictional event?",
          "nb": "Hvordan kan en rammefortelling endre tolkningen av en fiktiv hendelse?",
          "fr": "Comment un récit-cadre peut-il modifier l'interprétation d'un événement fictif ?",
          "pt": "Como pode uma narrativa-quadro alterar a interpretação de um acontecimento fictício?"
        },
        "options": [
          {
            "id": "fixed",
            "label": {
              "en": "Declare that a framing story can never alter interpretation",
              "nb": "Erklær at en rammefortelling aldri kan endre tolkningen",
              "fr": "Déclarer qu'un récit-cadre ne peut jamais modifier l'interprétation",
              "pt": "Declarar que uma narrativa-quadro nunca pode alterar a interpretação"
            }
          },
          {
            "id": "perspective",
            "label": {
              "en": "Compare two readings of an invented everyday event with different narrators",
              "nb": "Sammenlign to lesninger av en oppdiktet hverdagshendelse med ulike fortellere",
              "fr": "Comparer deux lectures d'un événement quotidien inventé avec des narrateurs différents",
              "pt": "Comparar duas leituras de um acontecimento quotidiano inventado com narradores diferentes"
            }
          },
          {
            "id": "diagnose",
            "label": {
              "en": "Treat stylized design as a clinical diagnosis of a real person",
              "nb": "Behandle stilisert scenografi som en klinisk diagnose av en virkelig person",
              "fr": "Traiter le décor stylisé comme un diagnostic clinique d'une personne réelle",
              "pt": "Tratar cenários estilizados como diagnóstico clínico de uma pessoa real"
            }
          }
        ],
        "bestSupportedOptionId": "perspective",
        "explanation": {
          "en": "The BFI account discusses the ambiguous frame story and psychological world. Compare alternative narrative frames for an original event; retain interpretive uncertainty instead of turning fiction or visual style into a real-world diagnosis.",
          "nb": "BFI drøfter den tvetydige rammefortellingen og den psykologiske verdenen. Sammenlign alternative fortellerrammer for en egen hendelse; bevar tolkningsusikkerheten fremfor å gjøre fiksjon eller visuell stil til en virkelig diagnose.",
          "fr": "Le BFI examine le récit-cadre ambigu et l'univers psychologique. Comparez des cadres narratifs pour un événement original ; préservez l'incertitude interprétative sans transformer la fiction ou le style en diagnostic réel.",
          "pt": "O BFI aborda a narrativa-quadro ambígua e o universo psicológico. Compare enquadramentos narrativos para um acontecimento original; preserve a incerteza interpretativa sem transformar ficção ou estilo num diagnóstico real."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "caligari-restoration",
        "area": "research",
        "prompt": {
          "en": "How should restored tinting and intertitles be documented?",
          "nb": "Hvordan bør restaurert fargetoning og mellomtekster dokumenteres?",
          "fr": "Comment documenter les teintes et intertitres restaurés ?",
          "pt": "Como documentar as tintagens e os intertítulos restaurados?"
        },
        "options": [
          {
            "id": "untouched",
            "label": {
              "en": "Describe every digital presentation as an untouched original print",
              "nb": "Beskriv enhver digital visning som en urørt originalkopi",
              "fr": "Décrire toute présentation numérique comme une copie originale intacte",
              "pt": "Descrever toda apresentação digital como uma cópia original intacta"
            }
          },
          {
            "id": "erase",
            "label": {
              "en": "Ignore missing elements and restoration decisions entirely",
              "nb": "Ignorer manglende elementer og restaureringsvalg fullstendig",
              "fr": "Ignorer entièrement les éléments manquants et les choix de restauration",
              "pt": "Ignorar completamente elementos em falta e decisões de restauro"
            }
          },
          {
            "id": "layers",
            "label": {
              "en": "Distinguish surviving elements, reconstructed material and presentation choices",
              "nb": "Skill bevarte elementer, rekonstruert materiale og visningsvalg",
              "fr": "Distinguer éléments conservés, matériaux reconstruits et choix de présentation",
              "pt": "Distinguir elementos preservados, materiais reconstruídos e escolhas de apresentação"
            }
          }
        ],
        "bestSupportedOptionId": "layers",
        "explanation": {
          "en": "Filmportal records the tinted silent format; Deutsche Kinemathek documents restoration from surviving elements and replacement material. Identify the edition and distinguish original evidence from reconstruction and later presentation.",
          "nb": "Filmportal registrerer det fargetonede stumfilmformatet; Deutsche Kinemathek dokumenterer restaurering fra bevarte elementer og erstatningsmateriale. Identifiser utgaven og skill originalbelegg fra rekonstruksjon og senere visning.",
          "fr": "Filmportal recense le format muet teinté ; la Deutsche Kinemathek documente les éléments conservés et de remplacement. Identifiez l'édition et distinguez preuves originales, reconstruction et présentation ultérieure.",
          "pt": "Filmportal regista o formato mudo tingido; a Deutsche Kinemathek documenta elementos preservados e de substituição. Identifique a edição e distinga evidência original, reconstrução e apresentação posterior."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_nosferatu_1922",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore location-based atmosphere, expressive silhouettes and version-aware silent-film presentation.",
      "nb": "Utforsk stedsbasert atmosfære, uttrykksfulle silhuetter og versjonsbevisst stumfilmvisning.",
      "fr": "Explorez l'atmosphère des lieux réels, les silhouettes expressives et la présentation des versions muettes.",
      "pt": "Explore a atmosfera dos locais reais, as silhuetas expressivas e a apresentação das versões mudas."
    },
    "sources": [
      {
        "id": "s1",
        "title": "10 great German expressionist films",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-german-expressionist-films"
      },
      {
        "id": "s2",
        "title": "Nosferatu – production and versions",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/film/nosferatu_d70835e558264328a39112994449d17f"
      },
      {
        "id": "s3",
        "title": "Contemporary review of Nosferatu",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/node/3737/material/693225"
      }
    ],
    "questions": [
      {
        "id": "nosferatu-location",
        "area": "camera",
        "prompt": {
          "en": "How could familiar architecture become uncanny in a fictional scene without altering the actual location?",
          "nb": "Hvordan kan kjent arkitektur bli uhyggelig i en fiktiv scene uten å endre det virkelige stedet?",
          "fr": "Comment une architecture familière peut-elle devenir inquiétante dans une fiction sans modifier le lieu réel ?",
          "pt": "Como pode uma arquitetura familiar tornar-se inquietante numa ficção sem alterar o local real?"
        },
        "options": [
          {
            "id": "frame",
            "label": {
              "en": "Compare drawn viewpoints and shadows in an original architectural study",
              "nb": "Sammenlign tegnede synsvinkler og skygger i en egen arkitekturstudie",
              "fr": "Comparer points de vue dessinés et ombres dans une étude architecturale originale",
              "pt": "Comparar pontos de vista desenhados e sombras num estudo arquitetónico original"
            }
          },
          {
            "id": "paint",
            "label": {
              "en": "Assume German Expressionist films always required entirely painted sets",
              "nb": "Anta at tyske ekspresjonistiske filmer alltid krevde fullstendig malte kulisser",
              "fr": "Supposer que les films expressionnistes allemands exigeaient toujours des décors entièrement peints",
              "pt": "Supor que filmes expressionistas alemães exigiam sempre cenários totalmente pintados"
            }
          },
          {
            "id": "copy",
            "label": {
              "en": "Present a hypothetical image as authenticated historical location evidence",
              "nb": "Presenter et hypotetisk bilde som autentisert historisk stedsbelegg",
              "fr": "Présenter une image hypothétique comme preuve historique authentifiée du lieu",
              "pt": "Apresentar uma imagem hipotética como evidência histórica autenticada do local"
            }
          }
        ],
        "bestSupportedOptionId": "frame",
        "explanation": {
          "en": "The BFI comparison distinguishes Nosferatu's real architecture and landscapes from wholly painted studio worlds. Study how framing and shadows transform an invented location drawing without claiming to reconstruct an exact shot.",
          "nb": "BFIs sammenligning skiller Nosferatus virkelige arkitektur og landskap fra fullstendig malte studioverdener. Studer hvordan utsnitt og skygger forvandler en egen stedstegning uten å hevde å rekonstruere et eksakt bilde.",
          "fr": "La comparaison du BFI distingue les architectures et paysages réels de Nosferatu des décors entièrement peints. Étudiez comment cadrage et ombres transforment un dessin original sans prétendre restituer un plan exact.",
          "pt": "A comparação do BFI distingue arquitetura e paisagens reais de Nosferatu de cenários totalmente pintados. Estude como enquadramento e sombras transformam um desenho original sem alegar reconstruir um plano exato."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "nosferatu-silhouette",
        "area": "camera",
        "prompt": {
          "en": "How could an original nonviolent scene use a silhouette to create atmosphere?",
          "nb": "Hvordan kan en egen ikke-voldelig scene bruke en silhuett til å skape atmosfære?",
          "fr": "Comment une scène originale non violente peut-elle créer une atmosphère par une silhouette ?",
          "pt": "Como pode uma cena original não violenta criar atmosfera através de uma silhueta?"
        },
        "options": [
          {
            "id": "flat",
            "label": {
              "en": "Use identical outlines and framing regardless of the desired atmosphere",
              "nb": "Bruk identiske konturer og utsnitt uansett ønsket atmosfære",
              "fr": "Utiliser des contours et cadres identiques quelle que soit l'atmosphère",
              "pt": "Usar contornos e enquadramentos idênticos independentemente da atmosfera"
            }
          },
          {
            "id": "study",
            "label": {
              "en": "Compare paper silhouettes against different drawn backgrounds",
              "nb": "Sammenlign papirsilhuetter mot ulike tegnede bakgrunner",
              "fr": "Comparer des silhouettes en papier sur différents fonds dessinés",
              "pt": "Comparar silhuetas de papel sobre diferentes fundos desenhados"
            }
          },
          {
            "id": "equipment",
            "label": {
              "en": "Invent the precise historical equipment from the silhouette alone",
              "nb": "Finn på det nøyaktige historiske utstyret ut fra silhuetten alene",
              "fr": "Inventer le matériel historique précis à partir de la seule silhouette",
              "pt": "Inventar o equipamento histórico preciso apenas a partir da silhueta"
            }
          }
        ],
        "bestSupportedOptionId": "study",
        "explanation": {
          "en": "BFI and the contemporary review discuss physical presence, shadows and the film's visual atmosphere. Compare harmless paper shapes to explore contrast and scale; this is an original exercise, not evidence of exact historical lighting equipment.",
          "nb": "BFI og den samtidige anmeldelsen omtaler fysisk nærvær, skygger og filmens visuelle atmosfære. Sammenlign ufarlige papirformer for å utforske kontrast og skala; dette er en egen øvelse, ikke belegg for eksakt historisk lysutstyr.",
          "fr": "Le BFI et la critique contemporaine évoquent présence physique, ombres et atmosphère visuelle. Comparez des formes en papier pour étudier contraste et échelle ; ce n'est pas une preuve du matériel historique exact.",
          "pt": "O BFI e a crítica contemporânea abordam presença física, sombras e atmosfera visual. Compare formas de papel para estudar contraste e escala; não é evidência do equipamento histórico exato."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "nosferatu-edition",
        "area": "sound",
        "prompt": {
          "en": "How should historical musical accompaniment and restored editions be distinguished?",
          "nb": "Hvordan bør historisk musikkakkompagnement og restaurerte utgaver skilles?",
          "fr": "Comment distinguer accompagnement musical historique et éditions restaurées ?",
          "pt": "Como distinguir acompanhamento musical histórico e edições restauradas?"
        },
        "options": [
          {
            "id": "recorded",
            "label": {
              "en": "Treat the original cinema music as proof of recorded synchronized dialogue",
              "nb": "Behandle den opprinnelige kinomusikken som bevis på innspilt synkron dialog",
              "fr": "Traiter la musique de cinéma originale comme preuve d'un dialogue synchrone enregistré",
              "pt": "Tratar a música cinematográfica original como prova de diálogo sincronizado gravado"
            }
          },
          {
            "id": "universal",
            "label": {
              "en": "Assume all restored prints use the same images and music",
              "nb": "Anta at alle restaurerte kopier bruker identiske bilder og musikk",
              "fr": "Supposer que toutes les copies restaurées utilisent les mêmes images et la même musique",
              "pt": "Supor que todas as cópias restauradas usam as mesmas imagens e música"
            }
          },
          {
            "id": "version",
            "label": {
              "en": "Record the specific edition and separate its music from production format",
              "nb": "Registrer den konkrete utgaven og skill dens musikk fra produksjonsformatet",
              "fr": "Consigner l'édition précise et distinguer sa musique du format de production",
              "pt": "Registar a edição específica e distinguir a sua música do formato de produção"
            }
          }
        ],
        "bestSupportedOptionId": "version",
        "explanation": {
          "en": "Filmportal's version record and contemporary review document musical presentation, including Erdmann's score. Tie each claim to its source and distinguish silent production from the accompaniment and the specific restored edition.",
          "nb": "Filmportals versjonsoppføring og den samtidige anmeldelsen dokumenterer musikkvisning, inkludert Erdmanns musikk. Knytt hver påstand til kilden og skill stumfilmproduksjon fra akkompagnement og den konkrete restaurerte utgaven.",
          "fr": "La notice des versions de filmportal et la critique contemporaine documentent la présentation musicale, dont la partition d'Erdmann. Reliez chaque affirmation à sa source et distinguez production muette, accompagnement et édition restaurée.",
          "pt": "O registo de versões da filmportal e a crítica contemporânea documentam a apresentação musical, incluindo a partitura de Erdmann. Relacione cada afirmação com a fonte e distinga produção muda, acompanhamento e edição restaurada."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_last_laugh_1924",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore motivated camera movement, visual narration and collaborative studio craft.",
      "nb": "Utforsk motivert kamerabevegelse, visuell fortelling og samarbeid om studiohåndverk.",
      "fr": "Explorez le mouvement de caméra motivé, la narration visuelle et les métiers collectifs du studio.",
      "pt": "Explore o movimento de câmara motivado, a narração visual e os ofícios colaborativos do estúdio."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Der letzte Mann",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/movie/der-letzte-mann_ea43d4a6d0975006e03053d50b37753d"
      },
      {
        "id": "s1",
        "title": "Die entfesselte Kamera",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/thema/die-entfesselte-kamera"
      },
      {
        "id": "s2",
        "title": "Dream Factory and State Enterprise – The History of Ufa",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/topic/dream-factory-and-state-enterprise-the-history-of-ufa"
      },
      {
        "id": "s3",
        "title": "10 great films of 1924",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-films-1924"
      },
      {
        "id": "s4",
        "title": "F. W. Murnaus Tabu – Die Edition der Outtakes",
        "publisher": "Deutsche Kinemathek",
        "url": "https://www.deutsche-kinemathek.de/de/sammlungen-archive/sammlung-digital/murnaus-tabu"
      }
    ],
    "questions": [
      {
        "id": "lastlaugh-motion",
        "area": "camera",
        "prompt": {
          "en": "How can camera movement express a character's changing experience of a space?",
          "nb": "Hvordan kan kamerabevegelse uttrykke en figurs endrede opplevelse av et rom?",
          "fr": "Comment le mouvement de caméra peut-il exprimer l'expérience changeante d'un lieu par un personnage ?",
          "pt": "Como pode o movimento de câmara expressar a experiência variável de um espaço pela personagem?"
        },
        "options": [
          {
            "id": "motivated",
            "label": {
              "en": "Draw a sequence comparing static framing and character-motivated movement",
              "nb": "Tegn en sekvens som sammenligner fast utsnitt og bevegelse motivert av figuren",
              "fr": "Dessiner une séquence comparant cadre fixe et mouvement motivé par le personnage",
              "pt": "Desenhar uma sequência comparando quadro fixo e movimento motivado pela personagem"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Add unrelated motion to every image",
              "nb": "Legg tilfeldig bevegelse til hvert bilde",
              "fr": "Ajouter un mouvement sans rapport à chaque image",
              "pt": "Acrescentar movimento sem relação a cada imagem"
            }
          },
          {
            "id": "first",
            "label": {
              "en": "Declare that this film invented all moving-camera practice",
              "nb": "Erklær at denne filmen oppfant all bevegelig kamerabruk",
              "fr": "Déclarer que ce film a inventé toute caméra mobile",
              "pt": "Declarar que este filme inventou toda a prática da câmara móvel"
            }
          }
        ],
        "bestSupportedOptionId": "motivated",
        "explanation": {
          "en": "Filmportal describes Freund's unusually systematic mobile-camera practice, not a first-ever invention. Compare drawn viewpoints in an original scene, without claiming to reconstruct the historical apparatus.",
          "nb": "Filmportal beskriver Freunds uvanlig systematiske bevegelige kamerabruk, ikke en førstegangsoppfinnelse. Sammenlign tegnede synsvinkler i en egen scene uten å hevde å rekonstruere det historiske apparatet.",
          "fr": "Filmportal décrit la mobilité systématique de Freund, non une invention absolue. Comparez des points de vue dessinés dans une scène originale sans prétendre reconstruire l'appareil historique.",
          "pt": "Filmportal descreve a mobilidade sistemática de Freund, não uma invenção absoluta. Compare pontos de vista desenhados numa cena original sem alegar reconstruir o aparelho histórico."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "lastlaugh-visual",
        "area": "research",
        "prompt": {
          "en": "How could a silent scene convey a change in social status with minimal text?",
          "nb": "Hvordan kan en stumfilmscene formidle endret sosial status med lite tekst?",
          "fr": "Comment une scène muette peut-elle exprimer un changement de statut social avec peu de texte ?",
          "pt": "Como pode uma cena muda comunicar uma mudança de estatuto social com pouco texto?"
        },
        "options": [
          {
            "id": "explain",
            "label": {
              "en": "Explain every gesture using unrelated written commentary",
              "nb": "Forklar hver gest med løsrevet skriftlig kommentar",
              "fr": "Expliquer chaque geste par un commentaire écrit sans rapport",
              "pt": "Explicar cada gesto com comentário escrito sem relação"
            }
          },
          {
            "id": "visual",
            "label": {
              "en": "Compare performance, objects and framing as narrative information",
              "nb": "Sammenlign spill, gjenstander og utsnitt som fortellingsinformasjon",
              "fr": "Comparer jeu, objets et cadrage comme informations narratives",
              "pt": "Comparar interpretação, objetos e enquadramento como informação narrativa"
            }
          },
          {
            "id": "absolute",
            "label": {
              "en": "Claim the film contains no intertitle or exceptional coda whatsoever",
              "nb": "Hevd at filmen ikke har noen mellomtekst eller særskilt epilog",
              "fr": "Affirmer que le film ne contient aucun intertitre ni épilogue exceptionnel",
              "pt": "Afirmar que o filme não contém qualquer intertítulo nem epílogo excecional"
            }
          }
        ],
        "bestSupportedOptionId": "visual",
        "explanation": {
          "en": "BFI discusses Jannings' performance, subjective images and near-absence of intertitles, as well as the exceptional satirical coda. Test visual storytelling in an invented everyday scene without erasing the film's documented exception.",
          "nb": "BFI omtaler Jannings' spill, subjektive bilder og nesten fraværende mellomtekster, samt den særskilte satiriske epilogen. Prøv visuell fortelling i en egen hverdagsscene uten å viske ut filmens dokumenterte unntak.",
          "fr": "Le BFI évoque le jeu de Jannings, les images subjectives, la quasi-absence d'intertitres et l'épilogue satirique. Testez une narration visuelle originale sans effacer cette exception documentée.",
          "pt": "O BFI aborda a interpretação de Jannings, imagens subjetivas, a quase ausência de intertítulos e o epílogo satírico. Experimente uma narrativa visual original sem apagar esta exceção documentada."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "lastlaugh-team",
        "area": "research",
        "prompt": {
          "en": "How should the mobile visual style be attributed within UFA's production system?",
          "nb": "Hvordan bør den bevegelige visuelle stilen tilskrives innenfor UFAs produksjonssystem?",
          "fr": "Comment attribuer le style visuel mobile au sein du système de production UFA ?",
          "pt": "Como atribuir o estilo visual móvel no sistema de produção da UFA?"
        },
        "options": [
          {
            "id": "director",
            "label": {
              "en": "Assign every documented visual contribution to Murnau alone",
              "nb": "Tilskriv alle dokumenterte visuelle bidrag Murnau alene",
              "fr": "Attribuer toutes les contributions visuelles documentées au seul Murnau",
              "pt": "Atribuir todas as contribuições visuais documentadas apenas a Murnau"
            }
          },
          {
            "id": "later",
            "label": {
              "en": "Use Murnau's later Hollywood career as proof of every production detail",
              "nb": "Bruk Murnaus senere Hollywood-karriere som bevis for alle produksjonsdetaljer",
              "fr": "Utiliser la carrière hollywoodienne ultérieure comme preuve de chaque détail",
              "pt": "Usar a carreira posterior em Hollywood como prova de cada pormenor"
            }
          },
          {
            "id": "collaboration",
            "label": {
              "en": "Document the distinct roles of director, writer, camera, design and producer",
              "nb": "Dokumenter de ulike rollene til regissør, manusforfatter, foto, scenografi og produsent",
              "fr": "Documenter les rôles distincts de réalisation, scénario, image, décors et production",
              "pt": "Documentar os papéis distintos de realização, argumento, fotografia, cenografia e produção"
            }
          }
        ],
        "bestSupportedOptionId": "collaboration",
        "explanation": {
          "en": "Filmportal documents Murnau, Mayer, Freund, Herlth, Röhrig and Pommer within UFA's organization. Treat camera mobility as a collaborative production achievement rather than an isolated invention; keep later international reception separate.",
          "nb": "Filmportal dokumenterer Murnau, Mayer, Freund, Herlth, Röhrig og Pommer innenfor UFAs organisasjon. Behandle kamerabevegelse som en felles produksjonsprestasjon fremfor en isolert oppfinnelse; skill senere internasjonal mottakelse ut.",
          "fr": "Filmportal documente Murnau, Mayer, Freund, Herlth, Röhrig et Pommer dans l'organisation UFA. Considérez la mobilité comme une réalisation collective, non une invention isolée ; distinguez la réception internationale ultérieure.",
          "pt": "Filmportal documenta Murnau, Mayer, Freund, Herlth, Röhrig e Pommer na organização UFA. Considere a mobilidade uma realização colaborativa, não invenção isolada; distinga a receção internacional posterior."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_metropolis_1927",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore monumental design, collaborative effects and the reconstruction of a complex silent film.",
      "nb": "Utforsk monumental scenografi, effektsamarbeid og rekonstruksjonen av en kompleks stumfilm.",
      "fr": "Explorez les décors monumentaux, les effets collectifs et la reconstruction d'un film muet complexe.",
      "pt": "Explore cenários monumentais, efeitos colaborativos e reconstrução de um filme mudo complexo."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Metropolis",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/movie/metropolis_ea43d4a6990b5006e03053d50b37753d"
      },
      {
        "id": "s1",
        "title": "Fritz Lang's Metropolis Over Time",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/topic/fritz-langs-metropolis-over-time"
      },
      {
        "id": "s2",
        "title": "Metropolis",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/bda6ff8a-ed7e-5942-980d-c2910c0120ec/metropolis"
      },
      {
        "id": "s3",
        "title": "Fritz Langs Metropolis",
        "publisher": "Deutsche Kinemathek",
        "url": "https://www.deutsche-kinemathek.de/en/node/787"
      },
      {
        "id": "s4",
        "title": "Metropolis – Memory of the World",
        "publisher": "UNESCO",
        "url": "https://www.unesco.org/en/memory-world/metropolis-sicherungsstuck-nr-1-negative-restored-and-reconstructed-version-2001"
      }
    ],
    "questions": [
      {
        "id": "metropolis-city",
        "area": "camera",
        "prompt": {
          "en": "How can an original miniature city express a fictional society's differences in power?",
          "nb": "Hvordan kan en egen miniatyrby uttrykke maktforskjeller i et fiktivt samfunn?",
          "fr": "Comment une ville miniature originale peut-elle exprimer les rapports de pouvoir d'une société fictive ?",
          "pt": "Como pode uma cidade em miniatura original expressar diferenças de poder numa sociedade fictícia?"
        },
        "options": [
          {
            "id": "scale",
            "label": {
              "en": "Compare architectural levels, scale and character placement in drawn designs",
              "nb": "Sammenlign arkitektoniske nivåer, skala og figurplassering i tegnede utkast",
              "fr": "Comparer niveaux architecturaux, échelle et placement des personnages dans des dessins",
              "pt": "Comparar níveis arquitetónicos, escala e posição de personagens em desenhos"
            }
          },
          {
            "id": "decor",
            "label": {
              "en": "Treat every architectural difference as purely decorative",
              "nb": "Behandle alle arkitektoniske forskjeller som rent dekorative",
              "fr": "Traiter chaque différence architecturale comme purement décorative",
              "pt": "Tratar todas as diferenças arquitetónicas como puramente decorativas"
            }
          },
          {
            "id": "exact",
            "label": {
              "en": "Claim a new sketch proves the precise historical effects apparatus",
              "nb": "Hevd at en ny skisse beviser det nøyaktige historiske effektapparatet",
              "fr": "Affirmer qu'un nouveau croquis prouve le dispositif historique exact des effets",
              "pt": "Afirmar que um novo esboço prova o equipamento histórico exato de efeitos"
            }
          }
        ],
        "bestSupportedOptionId": "scale",
        "explanation": {
          "en": "The BFI connects the future city, social inequality and miniature imagery; UNESCO recognizes the architectural significance. Use an original drawing to explore spatial hierarchy without claiming to reproduce the original effects setup.",
          "nb": "BFI knytter fremtidsbyen til sosial ulikhet og miniatyrbilder; UNESCO anerkjenner den arkitektoniske betydningen. Bruk en egen tegning til å utforske romlig hierarki uten å hevde å gjenskape det originale effektoppsettet.",
          "fr": "Le BFI relie ville future, inégalités et miniatures ; l'UNESCO reconnaît l'importance architecturale. Utilisez un dessin original pour étudier la hiérarchie spatiale sans prétendre reproduire les effets originaux.",
          "pt": "O BFI relaciona cidade futura, desigualdade e miniaturas; a UNESCO reconhece a importância arquitetónica. Use um desenho original para estudar a hierarquia espacial sem alegar reproduzir os efeitos originais."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      },
      {
        "id": "metropolis-craft",
        "area": "research",
        "prompt": {
          "en": "How should a production plan represent the collaboration behind a large constructed world?",
          "nb": "Hvordan bør en produksjonsplan fremstille samarbeidet bak en stor konstruert verden?",
          "fr": "Comment un plan de production doit-il représenter la collaboration derrière un vaste monde construit ?",
          "pt": "Como deve um plano de produção representar a colaboração por trás de um grande mundo construído?"
        },
        "options": [
          {
            "id": "single",
            "label": {
              "en": "Attribute all design and camera contributions to Lang alone",
              "nb": "Tilskriv alle scenografiske og fotografiske bidrag Lang alene",
              "fr": "Attribuer tous les apports des décors et de l'image au seul Lang",
              "pt": "Atribuir todas as contribuições de cenografia e fotografia apenas a Lang"
            }
          },
          {
            "id": "roles",
            "label": {
              "en": "Map the documented writing, photography, design and production roles",
              "nb": "Kartlegg dokumenterte roller innen manus, foto, scenografi og produksjon",
              "fr": "Cartographier les rôles documentés du scénario, de l'image, des décors et de la production",
              "pt": "Mapear funções documentadas de argumento, fotografia, cenografia e produção"
            }
          },
          {
            "id": "guess",
            "label": {
              "en": "Infer exact undocumented responsibilities from the final images",
              "nb": "Utled eksakte udokumenterte ansvarsområder fra de ferdige bildene",
              "fr": "Déduire des responsabilités précises non documentées à partir des images finales",
              "pt": "Deduzir responsabilidades exatas não documentadas a partir das imagens finais"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "Filmportal and Deutsche Kinemathek document UFA, Pommer, Lang, von Harbou, camera and design contributions, and surviving production artifacts. Separate documented credits from hypotheses about individual effects.",
          "nb": "Filmportal og Deutsche Kinemathek dokumenterer UFA, Pommer, Lang, von Harbou, foto- og scenografibidrag samt bevarte produksjonsgjenstander. Skill dokumentert kreditering fra hypoteser om enkelte effekter.",
          "fr": "Filmportal et la Deutsche Kinemathek documentent UFA, Pommer, Lang, von Harbou, les contributions image et décors et les objets conservés. Distinguez crédits attestés et hypothèses sur les effets.",
          "pt": "Filmportal e Deutsche Kinemathek documentam UFA, Pommer, Lang, von Harbou, contribuições de fotografia e cenografia e objetos preservados. Distinga créditos documentados de hipóteses sobre efeitos."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "metropolis-restoration",
        "area": "sound",
        "prompt": {
          "en": "How should different cuts, recovered footage and music be described?",
          "nb": "Hvordan bør ulike klippeversjoner, gjenfunne opptak og musikk beskrives?",
          "fr": "Comment décrire les différents montages, les images retrouvées et la musique ?",
          "pt": "Como descrever diferentes montagens, imagens recuperadas e música?"
        },
        "options": [
          {
            "id": "universal",
            "label": {
              "en": "Treat all circulating copies as one complete unchanged original",
              "nb": "Behandle alle sirkulerende kopier som én komplett uendret original",
              "fr": "Traiter toutes les copies en circulation comme un original complet et inchangé",
              "pt": "Tratar todas as cópias em circulação como um original completo e inalterado"
            }
          },
          {
            "id": "erase",
            "label": {
              "en": "Ignore missing material and the archival reconstruction history",
              "nb": "Ignorer manglende materiale og arkivenes rekonstruksjonshistorie",
              "fr": "Ignorer les matériaux manquants et l'histoire de la reconstruction archivistique",
              "pt": "Ignorar materiais em falta e a história da reconstrução arquivística"
            }
          },
          {
            "id": "provenance",
            "label": {
              "en": "Identify the edition, surviving elements, reconstruction and score evidence",
              "nb": "Identifiser utgaven, bevarte elementer, rekonstruksjon og musikkbelegg",
              "fr": "Identifier l'édition, les éléments conservés, la reconstruction et les preuves musicales",
              "pt": "Identificar edição, elementos preservados, reconstrução e evidência musical"
            }
          }
        ],
        "bestSupportedOptionId": "provenance",
        "explanation": {
          "en": "Filmportal and Deutsche Kinemathek document recutting, the Buenos Aires discovery and the 2010 nearly complete reconstruction, with Huppertz's music. Distinguish surviving evidence, reconstruction and presentation rather than assuming one intact master.",
          "nb": "Filmportal og Deutsche Kinemathek dokumenterer omklipping, funnet i Buenos Aires og den nesten komplette rekonstruksjonen fra 2010 med Huppertz' musikk. Skill bevart belegg, rekonstruksjon og visning fremfor å anta én intakt master.",
          "fr": "Filmportal et la Deutsche Kinemathek documentent les remontages, la découverte à Buenos Aires et la reconstruction presque complète de 2010 avec la musique de Huppertz. Distinguez preuves conservées, reconstruction et présentation.",
          "pt": "Filmportal e Deutsche Kinemathek documentam remontagens, a descoberta em Buenos Aires e a reconstrução quase completa de 2010 com música de Huppertz. Distinga evidência preservada, reconstrução e apresentação."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_pandoras_box_1929",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore naturalistic performance, social spaces and the history of adaptation and circulation.",
      "nb": "Utforsk naturalistisk skuespill, sosiale rom og adaptasjons- og distribusjonshistorie.",
      "fr": "Explorez le jeu naturaliste, les espaces sociaux et l'histoire de l'adaptation et de la circulation.",
      "pt": "Explore interpretação naturalista, espaços sociais e história da adaptação e circulação."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Die Büchse der Pandora",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/movie/die-buchse-der-pandora_ea43d4a69b2c5006e03053d50b37753d"
      },
      {
        "id": "s1",
        "title": "G. W. Pabst",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/person/g-w-pabst_c5b49311e6c44fafa3c1329cc833aca4"
      },
      {
        "id": "s2",
        "title": "Louise Brooks",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/person/louise-brooks_f92cd465f41c417095f57586b2bf6181"
      },
      {
        "id": "s3",
        "title": "Where to begin with G.W. Pabst",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/where-begin-gw-pabst"
      },
      {
        "id": "s4",
        "title": "Availability — Die Büchse der Pandora",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/node/10095/availability"
      }
    ],
    "questions": [
      {
        "id": "pandora-performance",
        "area": "camera",
        "prompt": {
          "en": "How could an original scene communicate a character's relationship with changing social surroundings?",
          "nb": "Hvordan kan en egen scene formidle en figurs forhold til skiftende sosiale omgivelser?",
          "fr": "Comment une scène originale peut-elle exprimer le rapport d'un personnage à des milieux sociaux changeants ?",
          "pt": "Como pode uma cena original comunicar a relação de uma personagem com ambientes sociais variáveis?"
        },
        "options": [
          {
            "id": "gesture",
            "label": {
              "en": "Compare gestures, framing and settings that communicate choices and relationships",
              "nb": "Sammenlign gester, utsnitt og miljøer som formidler valg og relasjoner",
              "fr": "Comparer gestes, cadrages et décors exprimant choix et relations",
              "pt": "Comparar gestos, enquadramento e ambientes que expressem escolhas e relações"
            }
          },
          {
            "id": "rating",
            "label": {
              "en": "Reduce the character to appearance or sexuality scores",
              "nb": "Reduser figuren til poeng for utseende eller seksualitet",
              "fr": "Réduire le personnage à des notes d'apparence ou de sexualité",
              "pt": "Reduzir a personagem a notas de aparência ou sexualidade"
            }
          },
          {
            "id": "uniform",
            "label": {
              "en": "Assume every Weimar film uses the same stylized visual approach",
              "nb": "Anta at alle Weimar-filmer bruker samme stiliserte visuelle tilnærming",
              "fr": "Supposer que tous les films de Weimar adoptent la même approche stylisée",
              "pt": "Supor que todos os filmes de Weimar usam a mesma abordagem estilizada"
            }
          }
        ],
        "bestSupportedOptionId": "gesture",
        "explanation": {
          "en": "BFI and filmportal discuss Pabst's naturalism and Brooks's distinctive performance in changing social spaces. Study an original everyday interaction through gesture and composition, without scoring identity or appearance.",
          "nb": "BFI og filmportal omtaler Pabsts naturalisme og Brooks' særpregede spill i skiftende sosiale rom. Studer en egen hverdagslig interaksjon gjennom gest og komposisjon uten å poengsette identitet eller utseende.",
          "fr": "Le BFI et filmportal évoquent le naturalisme de Pabst et le jeu singulier de Brooks dans des espaces sociaux variés. Étudiez une interaction quotidienne originale par le geste et la composition, sans noter identité ni apparence.",
          "pt": "O BFI e filmportal abordam o naturalismo de Pabst e a interpretação singular de Brooks em espaços sociais variados. Estude uma interação quotidiana original por gesto e composição, sem pontuar identidade ou aparência."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "pandora-adaptation",
        "area": "research",
        "prompt": {
          "en": "How should you describe the relationship between adaptation, performance and production credits?",
          "nb": "Hvordan bør forholdet mellom adaptasjon, skuespill og produksjonskreditering beskrives?",
          "fr": "Comment décrire le rapport entre adaptation, interprétation et crédits de production ?",
          "pt": "Como descrever a relação entre adaptação, interpretação e créditos de produção?"
        },
        "options": [
          {
            "id": "single",
            "label": {
              "en": "Assign every literary and screen contribution to the director",
              "nb": "Tilskriv alle litterære og filmatiske bidrag regissøren",
              "fr": "Attribuer tous les apports littéraires et filmiques au réalisateur",
              "pt": "Atribuir todas as contribuições literárias e fílmicas ao realizador"
            }
          },
          {
            "id": "credits",
            "label": {
              "en": "Distinguish source plays, adaptation, direction, acting, design and photography",
              "nb": "Skill kildeskuespill, adaptasjon, regi, skuespill, scenografi og foto",
              "fr": "Distinguer pièces sources, adaptation, réalisation, jeu, décors et image",
              "pt": "Distinguir peças originais, adaptação, realização, interpretação, cenografia e fotografia"
            }
          },
          {
            "id": "identity",
            "label": {
              "en": "Use fictional characterization as evidence about a real performer's identity",
              "nb": "Bruk fiktiv karakterisering som belegg for en virkelig skuespillers identitet",
              "fr": "Utiliser la caractérisation fictive comme preuve de l'identité réelle d'un interprète",
              "pt": "Usar caracterização ficcional como prova da identidade real de um intérprete"
            }
          }
        ],
        "bestSupportedOptionId": "credits",
        "explanation": {
          "en": "Filmportal identifies Wedekind's plays, Vajda's adaptation, Pabst and the Nero-Film team. Document distinct creative responsibilities and analyze fictional representation without treating a role as proof of a performer's private identity.",
          "nb": "Filmportal identifiserer Wedekinds skuespill, Vajdas adaptasjon, Pabst og Nero-Film-teamet. Dokumenter ulike kreative ansvarsområder og analyser fiktiv fremstilling uten å behandle en rolle som bevis for skuespillerens private identitet.",
          "fr": "Filmportal identifie les pièces de Wedekind, l'adaptation de Vajda, Pabst et l'équipe Nero-Film. Documentez les responsabilités distinctes et analysez la représentation fictive sans déduire l'identité privée de l'interprète.",
          "pt": "Filmportal identifica peças de Wedekind, adaptação de Vajda, Pabst e equipa Nero-Film. Documente responsabilidades distintas e analise a representação ficcional sem deduzir a identidade privada do intérprete."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "pandora-versions",
        "area": "research",
        "prompt": {
          "en": "How should a researcher describe different national and later archival versions?",
          "nb": "Hvordan bør en forsker beskrive ulike nasjonale og senere arkivversjoner?",
          "fr": "Comment décrire les différentes versions nationales et archivistiques ultérieures ?",
          "pt": "Como descrever diferentes versões nacionais e arquivísticas posteriores?"
        },
        "options": [
          {
            "id": "same",
            "label": {
              "en": "Assume every national and modern version contains identical material",
              "nb": "Anta at alle nasjonale og moderne versjoner inneholder identisk materiale",
              "fr": "Supposer que chaque version nationale et moderne contient le même matériau",
              "pt": "Supor que todas as versões nacionais e modernas contêm material idêntico"
            }
          },
          {
            "id": "unverified",
            "label": {
              "en": "Present modern home-video runtime as the unique original duration",
              "nb": "Presenter moderne hjemmevideovarighet som den eneste originalvarigheten",
              "fr": "Présenter la durée vidéo moderne comme l'unique durée originale",
              "pt": "Apresentar a duração de vídeo moderna como a única duração original"
            }
          },
          {
            "id": "edition",
            "label": {
              "en": "Identify documented release, censorship, reconstruction and access-copy differences",
              "nb": "Identifiser dokumenterte forskjeller i utgivelse, sensur, rekonstruksjon og tilgangskopi",
              "fr": "Identifier les différences documentées de sortie, censure, reconstruction et copie d'accès",
              "pt": "Identificar diferenças documentadas de estreia, censura, reconstrução e cópia de acesso"
            }
          }
        ],
        "bestSupportedOptionId": "edition",
        "explanation": {
          "en": "Filmportal records the German original, American-version work, later reconstruction and modern availability. Tie each claim to the particular record and distinguish modern music and access metadata from the original production.",
          "nb": "Filmportal registrerer den tyske originalen, arbeid med amerikansk versjon, senere rekonstruksjon og moderne tilgjengelighet. Knytt hver påstand til den konkrete oppføringen og skill moderne musikk og tilgangsmetadata fra originalproduksjonen.",
          "fr": "Filmportal recense l'original allemand, le travail de version américaine, la reconstruction et la disponibilité modernes. Reliez chaque affirmation à sa notice et distinguez musique et accès modernes de la production originale.",
          "pt": "Filmportal regista o original alemão, trabalho de versão americana, reconstrução e disponibilidade modernas. Relacione cada afirmação com o registo e distinga música e acesso modernos da produção original."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_coeur_fidele_1923",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore subjective perception, rhythmic editing and collaborative French Impressionist production.",
      "nb": "Utforsk subjektiv persepsjon, rytmisk klipping og samarbeid i fransk impresjonistisk filmproduksjon.",
      "fr": "Explorez la perception subjective, le montage rythmique et la production collective impressionniste française.",
      "pt": "Explore a perceção subjetiva, a montagem rítmica e a produção colaborativa impressionista francesa."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Cœur fidèle",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/48086.html"
      },
      {
        "id": "s1",
        "title": "Jean Epstein — Catalogue des restaurations et tirages",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/catalogues/restaurations-tirages/corpus.php?id=7"
      },
      {
        "id": "s2",
        "title": "10 great films of 1923",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-films-1923"
      },
      {
        "id": "s3",
        "title": "10 great silent romances",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-silent-romances"
      }
    ],
    "questions": [
      {
        "id": "coeur-rhythm",
        "area": "camera",
        "prompt": {
          "en": "How could editing rhythm change the experience of an ordinary fictional fairground?",
          "nb": "Hvordan kan klipperytmen endre opplevelsen av et vanlig fiktivt tivoli?",
          "fr": "Comment le rythme du montage peut-il modifier l'expérience d'une fête foraine fictive ?",
          "pt": "Como pode o ritmo da montagem alterar a experiência de uma feira fictícia?"
        },
        "options": [
          {
            "id": "rhythm",
            "label": {
              "en": "Compare two drawn sequences with different durations and viewpoints",
              "nb": "Sammenlign to tegnede sekvenser med ulike varigheter og synsvinkler",
              "fr": "Comparer deux séquences dessinées aux durées et points de vue différents",
              "pt": "Comparar duas sequências desenhadas com durações e pontos de vista diferentes"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Change every image at random without considering perception",
              "nb": "Endre hvert bilde tilfeldig uten hensyn til persepsjon",
              "fr": "Modifier chaque image au hasard sans considérer la perception",
              "pt": "Alterar cada imagem ao acaso sem considerar a perceção"
            }
          },
          {
            "id": "copy",
            "label": {
              "en": "Claim the exercise reproduces the exact historical editing pattern",
              "nb": "Hevd at øvelsen gjengir det eksakte historiske klippemønsteret",
              "fr": "Prétendre reproduire le montage historique exact",
              "pt": "Afirmar que o exercício reproduz a montagem histórica exata"
            }
          }
        ],
        "bestSupportedOptionId": "rhythm",
        "explanation": {
          "en": "BFI highlights subjective camera work and the fairground sequence. Compare the rhythm of original drawings to explore perception and emotion, without presenting an invented sequence as the historical cut.",
          "nb": "BFI fremhever subjektivt kamera og tivolisekvensen. Sammenlign rytmen i egne tegninger for å utforske persepsjon og følelser uten å fremstille en oppdiktet sekvens som den historiske klippen.",
          "fr": "Le BFI souligne la caméra subjective et la fête foraine. Comparez le rythme de dessins originaux pour explorer perception et émotion sans les présenter comme le montage historique.",
          "pt": "O BFI destaca a câmara subjetiva e a feira. Compare o ritmo de desenhos originais para explorar perceção e emoção sem os apresentar como a montagem histórica."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "coeur-photogenie",
        "area": "research",
        "prompt": {
          "en": "How should photogénie be approached as a historical film-theory concept?",
          "nb": "Hvordan bør fotogeni behandles som et historisk filmteoretisk begrep?",
          "fr": "Comment aborder la photogénie comme notion historique de théorie du cinéma ?",
          "pt": "Como abordar a fotogenia como conceito histórico de teoria cinematográfica?"
        },
        "options": [
          {
            "id": "preset",
            "label": {
              "en": "Define it as a single universal camera filter",
              "nb": "Definer begrepet som ett universelt kamerafilter",
              "fr": "Le définir comme un filtre de caméra universel",
              "pt": "Definir o conceito como um filtro universal de câmara"
            }
          },
          {
            "id": "theory",
            "label": {
              "en": "Compare transformations of an object through framing, duration and movement",
              "nb": "Sammenlign hvordan en gjenstand forvandles gjennom utsnitt, varighet og bevegelse",
              "fr": "Comparer les transformations d'un objet par le cadre, la durée et le mouvement",
              "pt": "Comparar transformações de um objeto pelo enquadramento, duração e movimento"
            }
          },
          {
            "id": "score",
            "label": {
              "en": "Assign a definitive numerical photogénie score to all films",
              "nb": "Gi alle filmer en definitiv numerisk fotogenipoengsum",
              "fr": "Attribuer à tous les films une note définitive de photogénie",
              "pt": "Atribuir a todos os filmes uma nota definitiva de fotogenia"
            }
          }
        ],
        "bestSupportedOptionId": "theory",
        "explanation": {
          "en": "The Cinémathèque's Epstein corpus connects photogénie with time, movement and transformation. Explore the concept through contrasting original images rather than reducing a historical theory to a fixed effect or score.",
          "nb": "Cinémathèques Epstein-korpus knytter fotogeni til tid, bevegelse og forvandling. Utforsk begrepet gjennom kontrasterende egne bilder fremfor å redusere historisk teori til en fast effekt eller poengsum.",
          "fr": "Le corpus Epstein de la Cinémathèque relie la photogénie au temps, au mouvement et à la transformation. Explorez la notion par des images originales contrastées plutôt que par un effet ou une note fixe.",
          "pt": "O corpus Epstein da Cinémathèque relaciona fotogenia com tempo, movimento e transformação. Explore o conceito com imagens originais contrastantes em vez de um efeito ou nota fixa."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "coeur-credits",
        "area": "research",
        "prompt": {
          "en": "How should the film's creative collaboration and formal experiments be credited?",
          "nb": "Hvordan bør filmens kreative samarbeid og formeksperimenter krediteres?",
          "fr": "Comment attribuer les collaborations créatives et les expériences formelles du film ?",
          "pt": "Como atribuir as colaborações criativas e experiências formais do filme?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Credit every contribution and technique exclusively to Jean Epstein",
              "nb": "Tilskriv alle bidrag og teknikker utelukkende Jean Epstein",
              "fr": "Attribuer chaque contribution et technique au seul Jean Epstein",
              "pt": "Atribuir cada contributo e técnica exclusivamente a Jean Epstein"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "Declare that the film invented every technique it uses",
              "nb": "Erklær at filmen oppfant alle teknikkene den bruker",
              "fr": "Déclarer que le film invente toutes les techniques utilisées",
              "pt": "Declarar que o filme inventou todas as técnicas utilizadas"
            }
          },
          {
            "id": "team",
            "label": {
              "en": "Distinguish the Epstein writing collaboration, camera team and production company",
              "nb": "Skill Epstein-samarbeidet om manus, kamerateamet og produksjonsselskapet",
              "fr": "Distinguer l'écriture des Epstein, l'équipe image et la société de production",
              "pt": "Distinguir a escrita dos Epstein, a equipa de fotografia e a produtora"
            }
          }
        ],
        "bestSupportedOptionId": "team",
        "explanation": {
          "en": "The Cinémathèque identifies Jean and Marie Epstein, Paul Guichard, camera operators and Pathé Consortium Cinéma. Preserve documented roles and its caution about treating the film's synthesis as an invention of every technique.",
          "nb": "Cinémathèque identifiserer Jean og Marie Epstein, Paul Guichard, kameraoperatører og Pathé Consortium Cinéma. Bevar dokumenterte roller og forbeholdet mot å fremstille filmens syntese som oppfinnelsen av alle teknikkene.",
          "fr": "La Cinémathèque identifie Jean et Marie Epstein, Paul Guichard, les opérateurs et Pathé Consortium Cinéma. Préservez les rôles attestés et sa réserve envers les affirmations d'invention de toutes les techniques.",
          "pt": "A Cinémathèque identifica Jean e Marie Epstein, Paul Guichard, operadores e Pathé Consortium Cinéma. Preserve os papéis documentados e a reserva quanto à invenção de todas as técnicas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_smiling_madame_beudet_1923",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore interior subjectivity, domestic space and feminist interpretation in Germaine Dulac's film.",
      "nb": "Utforsk indre subjektivitet, hjemmets rom og feministisk tolkning i Germaine Dulacs film.",
      "fr": "Explorez la subjectivité intérieure, l'espace domestique et l'interprétation féministe du film de Germaine Dulac.",
      "pt": "Explore a subjetividade interior, o espaço doméstico e a interpretação feminista do filme de Germaine Dulac."
    },
    "sources": [
      {
        "id": "s0",
        "title": "La Souriante madame Beudet",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/57083.html"
      },
      {
        "id": "s1",
        "title": "Germaine Dulac : sensations cinégraphiques à la Maison des rêves",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/article/1755.html"
      },
      {
        "id": "s2",
        "title": "Programme Germaine Dulac",
        "publisher": "Fondation Jérôme Seydoux-Pathé",
        "url": "https://www.fondation-jeromeseydoux-pathe.com/event/3234"
      },
      {
        "id": "s3",
        "title": "10 great films of 1923 — The Smiling Madame Beudet",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-films-1923"
      }
    ],
    "questions": [
      {
        "id": "beudet-inner",
        "area": "camera",
        "prompt": {
          "en": "How can an original visual sequence distinguish an imagined moment from everyday surroundings?",
          "nb": "Hvordan kan en egen visuell sekvens skille et forestilt øyeblikk fra hverdagslige omgivelser?",
          "fr": "Comment une séquence visuelle originale peut-elle distinguer un moment imaginé du cadre quotidien ?",
          "pt": "Como pode uma sequência visual original distinguir um momento imaginado do ambiente quotidiano?"
        },
        "options": [
          {
            "id": "contrast",
            "label": {
              "en": "Compare ordinary room drawings with associative images of a character's imagined freedom",
              "nb": "Sammenlign tegninger av et vanlig rom med assosiative bilder av figurens forestilte frihet",
              "fr": "Comparer des dessins d'une pièce ordinaire et des images associatives de liberté imaginée",
              "pt": "Comparar desenhos de uma divisão comum com imagens associativas de liberdade imaginada"
            }
          },
          {
            "id": "literal",
            "label": {
              "en": "Treat every imagined image as a literal event in the story",
              "nb": "Behandle alle forestilte bilder som bokstavelige hendelser i fortellingen",
              "fr": "Traiter chaque image imaginée comme un événement littéral du récit",
              "pt": "Tratar cada imagem imaginada como acontecimento literal da narrativa"
            }
          },
          {
            "id": "erase",
            "label": {
              "en": "Remove the character's perspective from every framing choice",
              "nb": "Fjern figurens perspektiv fra alle valg av utsnitt",
              "fr": "Supprimer le point de vue du personnage de chaque cadrage",
              "pt": "Eliminar o ponto de vista da personagem de cada enquadramento"
            }
          }
        ],
        "bestSupportedOptionId": "contrast",
        "explanation": {
          "en": "Cinémathèque scholarship and BFI connect Dulac's associative imagery with women's interior lives and the contrast between domestic constraint and imagination. Explore this through a new benign scene, not a reenactment of the film.",
          "nb": "Cinémathèques fagstoff og BFI knytter Dulacs assosiative bilder til kvinners indre liv og kontrasten mellom hjemmets begrensninger og fantasi. Utforsk dette gjennom en egen ufarlig scene, ikke en rekonstruksjon av filmen.",
          "fr": "La Cinémathèque et le BFI relient les images associatives de Dulac à la vie intérieure des femmes et au contraste entre contrainte domestique et imagination. Explorez ce lien dans une nouvelle scène sans danger.",
          "pt": "A Cinémathèque e o BFI relacionam imagens associativas de Dulac com a vida interior das mulheres e o contraste entre restrição doméstica e imaginação. Explore essa relação numa nova cena inofensiva."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "beudet-pointofview",
        "area": "research",
        "prompt": {
          "en": "How should the film's feminist perspective inform a new production exercise?",
          "nb": "Hvordan bør filmens feministiske perspektiv informere en ny produksjonsøvelse?",
          "fr": "Comment le point de vue féministe du film doit-il éclairer un nouvel exercice de production ?",
          "pt": "Como deve a perspetiva feminista do filme orientar um novo exercício de produção?"
        },
        "options": [
          {
            "id": "stereotype",
            "label": {
              "en": "Replace character choices with a fixed stereotype of women",
              "nb": "Erstatt figurens valg med en fast stereotypi om kvinner",
              "fr": "Remplacer les choix du personnage par un stéréotype fixe des femmes",
              "pt": "Substituir as escolhas da personagem por um estereótipo fixo das mulheres"
            }
          },
          {
            "id": "agency",
            "label": {
              "en": "Explore whose perspective organizes the images and whose choices are constrained",
              "nb": "Utforsk hvilket perspektiv som organiserer bildene og hvilke valg som begrenses",
              "fr": "Examiner quel point de vue organise les images et quels choix sont limités",
              "pt": "Examinar que perspetiva organiza as imagens e que escolhas são limitadas"
            }
          },
          {
            "id": "first",
            "label": {
              "en": "Declare a single film the invention of all feminist cinema",
              "nb": "Erklær én film som oppfinnelsen av all feministisk film",
              "fr": "Déclarer un film à l'origine de tout cinéma féministe",
              "pt": "Declarar um filme como invenção de todo o cinema feminista"
            }
          }
        ],
        "bestSupportedOptionId": "agency",
        "explanation": {
          "en": "BFI describes the film's explicitly feminist stance and the Cinémathèque situates it in Dulac's wider work. Analyze point of view and agency without stereotyping characters or asserting a universal first-film claim.",
          "nb": "BFI beskriver filmens uttrykkelig feministiske holdning, og Cinémathèque plasserer den i Dulacs bredere arbeid. Analyser synsvinkel og handlekraft uten å stereotypisere figurer eller hevde en universell førstefilm.",
          "fr": "Le BFI décrit la position féministe du film et la Cinémathèque le situe dans l'œuvre de Dulac. Analysez point de vue et autonomie sans stéréotypes ni affirmation de primauté absolue.",
          "pt": "O BFI descreve a posição feminista do filme e a Cinémathèque situa-o na obra de Dulac. Analise perspetiva e autonomia sem estereótipos nem alegações de primazia absoluta."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "beudet-versions",
        "area": "research",
        "prompt": {
          "en": "How should different archive durations and adaptation credits be documented?",
          "nb": "Hvordan bør ulike arkivvarigheter og adaptasjonskrediteringer dokumenteres?",
          "fr": "Comment documenter les différentes durées d'archives et les crédits d'adaptation ?",
          "pt": "Como documentar diferentes durações de arquivo e créditos de adaptação?"
        },
        "options": [
          {
            "id": "average",
            "label": {
              "en": "Average the two durations and claim a definitive original runtime",
              "nb": "Beregn gjennomsnittet av varighetene og hev én definitiv originalvarighet",
              "fr": "Moyenner les durées pour affirmer une durée originale définitive",
              "pt": "Calcular a média das durações e afirmar uma duração original definitiva"
            }
          },
          {
            "id": "solo",
            "label": {
              "en": "Assign all writing and production credits to the director alone",
              "nb": "Tilskriv alle manus- og produksjonsbidrag regissøren alene",
              "fr": "Attribuer tous les crédits d'écriture et de production à la seule réalisatrice",
              "pt": "Atribuir todos os créditos de escrita e produção apenas à realizadora"
            }
          },
          {
            "id": "records",
            "label": {
              "en": "Keep each copy duration and documented adaptation and production roles separate",
              "nb": "Hold hver kopis varighet og dokumenterte adaptasjons- og produksjonsroller adskilt",
              "fr": "Distinguer la durée de chaque copie et les rôles attestés d'adaptation et de production",
              "pt": "Distinguir a duração de cada cópia e os papéis documentados de adaptação e produção"
            }
          }
        ],
        "bestSupportedOptionId": "records",
        "explanation": {
          "en": "The Cinémathèque lists 36 minutes and Fondation Pathé records a 38-minute Eye Filmmuseum print. Both document collaborative credits. Keep copy-specific duration and credited roles distinct rather than inventing a definitive master.",
          "nb": "Cinémathèque oppgir 36 minutter, mens Fondation Pathé registrerer en 38-minutters kopi fra Eye Filmmuseum. Begge dokumenterer samarbeid. Hold kopispesifikk varighet og krediterte roller adskilt fremfor å dikte opp en definitiv master.",
          "fr": "La Cinémathèque indique 36 minutes et la Fondation Pathé une copie de 38 minutes d'Eye Filmmuseum. Toutes deux documentent des collaborations. Distinguez durées des copies et crédits sans inventer un original définitif.",
          "pt": "A Cinémathèque indica 36 minutos e a Fondation Pathé uma cópia de 38 minutos do Eye Filmmuseum. Ambas documentam colaborações. Distinga duração de cada cópia e créditos sem inventar um original definitivo."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_entr_acte_1924",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore experimental image rhythm, cross-art commissions and event-specific exhibition.",
      "nb": "Utforsk eksperimentell billedrytme, bestillingsverk på tvers av kunstarter og visning knyttet til et arrangement.",
      "fr": "Explorez le rythme visuel expérimental, les commandes interdisciplinaires et la projection événementielle.",
      "pt": "Explore o ritmo visual experimental, as encomendas interdisciplinares e a exibição ligada a eventos."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Entr'acte",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/47671.html"
      },
      {
        "id": "s1",
        "title": "Restaurations — Entr'acte, René Clair, 1924",
        "publisher": "Fondation Jérôme Seydoux-Pathé",
        "url": "https://www.fondation-jeromeseydoux-pathe.com/cms/restaurations"
      },
      {
        "id": "s2",
        "title": "Entr'acte",
        "publisher": "Centre Pompidou",
        "url": "https://www.centrepompidou.fr/fr/ressources/oeuvre/cByj8A"
      },
      {
        "id": "s3",
        "title": "10 great films of 1924 — Entr'acte",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-films-1924"
      }
    ],
    "questions": [
      {
        "id": "entracte-rhythm",
        "area": "camera",
        "prompt": {
          "en": "How could an original paper-animation exercise explore comic rhythm and visual transformation?",
          "nb": "Hvordan kan en egen papiranimasjon utforske komisk rytme og visuell forvandling?",
          "fr": "Comment une animation originale en papier peut-elle explorer le rythme comique et la transformation visuelle ?",
          "pt": "Como pode uma animação original em papel explorar o ritmo cómico e a transformação visual?"
        },
        "options": [
          {
            "id": "rhythm",
            "label": {
              "en": "Compare repetition, changed image duration and playful visual associations",
              "nb": "Sammenlign gjentakelse, endret bildevarighet og lekne visuelle assosiasjoner",
              "fr": "Comparer répétition, variation des durées et associations visuelles ludiques",
              "pt": "Comparar repetição, variação da duração e associações visuais lúdicas"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Assume that experimental cinema requires entirely random editing",
              "nb": "Anta at eksperimentell film krever fullstendig tilfeldig klipping",
              "fr": "Supposer que le cinéma expérimental exige un montage entièrement aléatoire",
              "pt": "Supor que o cinema experimental exige montagem inteiramente aleatória"
            }
          },
          {
            "id": "first",
            "label": {
              "en": "Claim Clair invented every animation and trick-film technique",
              "nb": "Hevd at Clair oppfant alle animasjons- og trickfilmteknikker",
              "fr": "Affirmer que Clair a inventé toutes les techniques d'animation et de trucage",
              "pt": "Afirmar que Clair inventou todas as técnicas de animação e trucagem"
            }
          }
        ],
        "bestSupportedOptionId": "rhythm",
        "explanation": {
          "en": "Fondation Pathé documents frame-by-frame and accelerated imagery and earlier trick-film traditions; BFI describes rapid editing and playful reversals. Compare invented paper shapes and durations, not a reconstruction of the historical scenes.",
          "nb": "Fondation Pathé dokumenterer bilde-for-bilde-opptak, akselererte bilder og tidligere trickfilmtradisjoner; BFI beskriver rask klipping og lekne omvendinger. Sammenlign egne papirformer og varigheter, ikke en rekonstruksjon av de historiske scenene.",
          "fr": "La Fondation Pathé documente les images par image, accélérations et traditions de trucage ; le BFI décrit montage rapide et renversements ludiques. Comparez des formes en papier et durées originales, sans reconstituer les scènes historiques.",
          "pt": "A Fondation Pathé documenta imagens quadro a quadro, aceleração e tradições de trucagem; o BFI descreve montagem rápida e inversões lúdicas. Compare formas de papel e durações originais, sem reconstituir as cenas históricas."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "entracte-commission",
        "area": "research",
        "prompt": {
          "en": "How should you plan a short film commissioned for an interdisciplinary performance?",
          "nb": "Hvordan bør du planlegge en kortfilm bestilt til en tverrkunstnerisk forestilling?",
          "fr": "Comment préparer un court métrage commandé pour un spectacle interdisciplinaire ?",
          "pt": "Como preparar uma curta-metragem encomendada para um espetáculo interdisciplinar?"
        },
        "options": [
          {
            "id": "ignore",
            "label": {
              "en": "Ignore the event programme and the collaborators from other arts",
              "nb": "Ignorer arrangementsprogrammet og samarbeidspartnere fra andre kunstarter",
              "fr": "Ignorer le programme du spectacle et les collaborateurs des autres arts",
              "pt": "Ignorar o programa do espetáculo e os colaboradores de outras artes"
            }
          },
          {
            "id": "event",
            "label": {
              "en": "Coordinate film duration, performance context and distinct creative roles",
              "nb": "Samordne filmens varighet, forestillingskontekst og ulike kreative roller",
              "fr": "Coordonner durée du film, contexte du spectacle et rôles créatifs distincts",
              "pt": "Coordenar duração do filme, contexto do espetáculo e papéis criativos distintos"
            }
          },
          {
            "id": "solo",
            "label": {
              "en": "Credit every theatrical, visual and musical contribution to the director",
              "nb": "Tilskriv alle teatrale, visuelle og musikalske bidrag regissøren",
              "fr": "Attribuer tous les apports scéniques, visuels et musicaux au réalisateur",
              "pt": "Atribuir todos os contributos cénicos, visuais e musicais ao realizador"
            }
          }
        ],
        "bestSupportedOptionId": "event",
        "explanation": {
          "en": "Centre Pompidou connects the film to Relâche, while the Cinémathèque identifies Clair, Picabia, de Maré, Berliet and Satie. Plan a fictional arts event around the film's function and the collaborators' documented distinct roles.",
          "nb": "Centre Pompidou knytter filmen til Relâche, mens Cinémathèque identifiserer Clair, Picabia, de Maré, Berliet og Satie. Planlegg et fiktivt kunstarrangement rundt filmens funksjon og samarbeidspartnernes dokumenterte ulike roller.",
          "fr": "Le Centre Pompidou relie le film à Relâche ; la Cinémathèque identifie Clair, Picabia, de Maré, Berliet et Satie. Préparez un événement fictif en tenant compte de la fonction du film et des rôles distincts.",
          "pt": "O Centre Pompidou relaciona o filme com Relâche; a Cinémathèque identifica Clair, Picabia, de Maré, Berliet e Satie. Planeie um evento fictício considerando a função do filme e os papéis distintos."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "entracte-versions",
        "area": "sound",
        "prompt": {
          "en": "How should the original accompaniment and later changes to the film be documented?",
          "nb": "Hvordan bør det opprinnelige musikkakkompagnementet og senere endringer i filmen dokumenteres?",
          "fr": "Comment documenter l'accompagnement original et les modifications ultérieures du film ?",
          "pt": "Como documentar o acompanhamento original e as alterações posteriores do filme?"
        },
        "options": [
          {
            "id": "identical",
            "label": {
              "en": "Assume all circulating editions contain identical images and music",
              "nb": "Anta at alle tilgjengelige utgaver har identiske bilder og musikk",
              "fr": "Supposer que toutes les éditions contiennent les mêmes images et la même musique",
              "pt": "Supor que todas as edições contêm imagens e música idênticas"
            }
          },
          {
            "id": "soundtrack",
            "label": {
              "en": "Treat the original accompaniment as proof of recorded synchronized dialogue",
              "nb": "Behandle det opprinnelige akkompagnementet som bevis for innspilt synkron dialog",
              "fr": "Traiter l'accompagnement original comme preuve de dialogue synchrone enregistré",
              "pt": "Tratar o acompanhamento original como prova de diálogo sincronizado gravado"
            }
          },
          {
            "id": "edition",
            "label": {
              "en": "Separate the original event, the 1967 removals and the later restoration",
              "nb": "Skill det opprinnelige arrangementet, klippene som ble fjernet i 1967, og senere restaurering",
              "fr": "Distinguer l'événement original, les retraits de 1967 et la restauration ultérieure",
              "pt": "Distinguir o evento original, os cortes de 1967 e o restauro posterior"
            }
          }
        ],
        "bestSupportedOptionId": "edition",
        "explanation": {
          "en": "Fondation Pathé documents Satie's accompaniment, Clair's later removals and restoration from surviving materials. The Cinémathèque records another presentation duration. Identify the edition instead of declaring a single unchanged original runtime.",
          "nb": "Fondation Pathé dokumenterer Saties akkompagnement, Clairs senere fjerning av materiale og restaurering fra bevarte elementer. Cinémathèque oppgir en annen visningsvarighet. Identifiser utgaven fremfor å erklære én uendret originalvarighet.",
          "fr": "La Fondation Pathé documente l'accompagnement de Satie, les retraits ultérieurs de Clair et la restauration à partir d'éléments conservés. La Cinémathèque indique une autre durée. Identifiez l'édition sans affirmer une durée originale unique.",
          "pt": "A Fondation Pathé documenta o acompanhamento de Satie, os cortes posteriores de Clair e o restauro de materiais preservados. A Cinémathèque indica outra duração. Identifique a edição sem afirmar uma duração original única."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_napoleon_1927",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore triple-screen composition, collective production and the complex history of an epic's editions.",
      "nb": "Utforsk treskjermskomposisjon, kollektiv produksjon og den komplekse versjonshistorien til en storfilm.",
      "fr": "Explorez la composition sur trois écrans, la production collective et l'histoire complexe des versions d'une épopée.",
      "pt": "Explore a composição em três ecrãs, a produção coletiva e a história complexa das edições de uma epopeia."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Napoléon vu par Abel Gance",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/48685.html"
      },
      {
        "id": "s1",
        "title": "The Napoléon Comet: The Expert Appraisal of a Collection",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/article/662.html"
      },
      {
        "id": "s2",
        "title": "Machines — Le triple écran d'Abel Gance",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/exposition-machines-guide.html"
      },
      {
        "id": "s3",
        "title": "Napoleon: 10 unmissable highlights from Abel Gance's five-and-a-half-hour masterpiece",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/napoleon-highlights-abel-gance-silent-film"
      },
      {
        "id": "s4",
        "title": "Napoléon vu par Abel Gance — current Grande Version parts 1 and 2",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/154798.html"
      }
    ],
    "questions": [
      {
        "id": "napoleon-triptych",
        "area": "camera",
        "prompt": {
          "en": "How could a three-panel storyboard explore the relationship between adjacent images?",
          "nb": "Hvordan kan et storyboard med tre paneler utforske forholdet mellom tilstøtende bilder?",
          "fr": "Comment un storyboard à trois panneaux peut-il explorer les rapports entre images adjacentes ?",
          "pt": "Como pode um storyboard de três painéis explorar a relação entre imagens adjacentes?"
        },
        "options": [
          {
            "id": "panels",
            "label": {
              "en": "Compare a continuous landscape panorama with three related independent images",
              "nb": "Sammenlign et sammenhengende landskapspanorama med tre beslektede selvstendige bilder",
              "fr": "Comparer un panorama paysager continu et trois images indépendantes liées",
              "pt": "Comparar um panorama paisagístico contínuo e três imagens independentes relacionadas"
            }
          },
          {
            "id": "single",
            "label": {
              "en": "Assume three panels can only repeat the same central image",
              "nb": "Anta at tre paneler bare kan gjenta det samme sentrale bildet",
              "fr": "Supposer que trois panneaux ne peuvent que répéter l'image centrale",
              "pt": "Supor que três painéis só podem repetir a imagem central"
            }
          },
          {
            "id": "reconstruct",
            "label": {
              "en": "Claim the new storyboard is an authenticated historical projection plan",
              "nb": "Hevd at det nye storyboardet er en autentisert historisk visningsplan",
              "fr": "Affirmer que le nouveau storyboard est un plan de projection historique authentifié",
              "pt": "Afirmar que o novo storyboard é um plano de projeção histórico autenticado"
            }
          }
        ],
        "bestSupportedOptionId": "panels",
        "explanation": {
          "en": "The Cinémathèque's machine exhibit explains adjacent projections and their ability to present separate images or a panorama. Draw a new nonviolent landscape triptych to compare these compositional relationships without claiming an exact historical reconstruction.",
          "nb": "Cinémathèques maskinutstilling forklarer tilstøtende projeksjoner og muligheten for separate bilder eller et panorama. Tegn en egen ikke-voldelig landskapstriptyk for å sammenligne komposisjonsforholdene uten å hevde en eksakt historisk rekonstruksjon.",
          "fr": "L'exposition des machines de la Cinémathèque explique les projections adjacentes, distinctes ou panoramiques. Dessinez un triptyque paysager original sans violence pour comparer ces rapports, sans prétendre reconstruire exactement la projection historique.",
          "pt": "A exposição de máquinas da Cinémathèque explica projeções adjacentes, distintas ou panorâmicas. Desenhe um tríptico paisagístico original não violento para comparar estas relações, sem alegar reconstrução histórica exata."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "napoleon-team",
        "area": "research",
        "prompt": {
          "en": "How should a producer document a complex multi-camera production's creative collaboration?",
          "nb": "Hvordan bør en produsent dokumentere kreativt samarbeid i en kompleks flerkameraproduksjon?",
          "fr": "Comment documenter la collaboration créative d'une production complexe à plusieurs caméras ?",
          "pt": "Como documentar a colaboração criativa de uma produção complexa com várias câmaras?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Assign every camera, design and editing contribution to the director alone",
              "nb": "Tilskriv alle foto-, scenografi- og klippebidrag regissøren alene",
              "fr": "Attribuer tous les apports image, décors et montage au seul réalisateur",
              "pt": "Atribuir todas as contribuições de fotografia, cenografia e montagem apenas ao realizador"
            }
          },
          {
            "id": "roles",
            "label": {
              "en": "Record cinematographers, editors, designers and production companies separately",
              "nb": "Registrer filmfotografer, klippere, scenografer og produksjonsselskaper hver for seg",
              "fr": "Consigner séparément opérateurs, monteurs, décorateurs et sociétés de production",
              "pt": "Registar separadamente diretores de fotografia, montadores, cenógrafos e produtoras"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "Infer undocumented crew responsibilities from the scale of the finished film",
              "nb": "Utled udokumenterte teamroller fra den ferdige filmens omfang",
              "fr": "Déduire des responsabilités non documentées de l'ampleur du film achevé",
              "pt": "Deduzir funções não documentadas da escala do filme final"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "The Cinémathèque catalogue credits several cinematographers and Gance and Beaugé in editing, alongside extensive specialist labour. Distinguish the documented roles and collaborative apparatus from unsupported claims of individual invention.",
          "nb": "Cinémathèques katalog krediterer flere fotografer og Gance og Beaugé for klipp, sammen med omfattende spesialistarbeid. Skill dokumenterte roller og felles produksjonsapparat fra udokumenterte påstander om individuelle oppfinnelser.",
          "fr": "Le catalogue de la Cinémathèque crédite plusieurs opérateurs, Gance et Beaugé au montage et de nombreux spécialistes. Distinguez les rôles attestés et le dispositif collectif des affirmations d'invention individuelle non étayées.",
          "pt": "O catálogo da Cinémathèque credita vários diretores de fotografia, Gance e Beaugé na montagem e numerosos especialistas. Distinga papéis documentados e o dispositivo coletivo de alegações de invenção individual sem apoio."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "napoleon-editions",
        "area": "research",
        "prompt": {
          "en": "How should a researcher describe the different 1927 presentations, export cuts and modern reconstruction?",
          "nb": "Hvordan bør en forsker beskrive de ulike visningene i 1927, eksportversjonene og moderne rekonstruksjon?",
          "fr": "Comment décrire les différentes projections de 1927, les montages d'exportation et la reconstruction moderne ?",
          "pt": "Como descrever as diferentes apresentações de 1927, montagens de exportação e reconstrução moderna?"
        },
        "options": [
          {
            "id": "universal",
            "label": {
              "en": "Treat the modern two-part presentation as an untouched original master",
              "nb": "Behandle den moderne todelte visningen som en urørt originalmaster",
              "fr": "Traiter la présentation moderne en deux parties comme un original intact",
              "pt": "Tratar a apresentação moderna em duas partes como original intacto"
            }
          },
          {
            "id": "average",
            "label": {
              "en": "Average different catalogue runtimes to invent one original duration",
              "nb": "Beregn gjennomsnittet av katalogvarigheter for å finne på én originalvarighet",
              "fr": "Moyenner les durées des catalogues pour inventer une durée originale",
              "pt": "Calcular a média das durações dos catálogos para inventar uma duração original"
            }
          },
          {
            "id": "provenance",
            "label": {
              "en": "Document each presentation and cut with its own archival evidence",
              "nb": "Dokumenter hver visning og klippeversjon med sitt eget arkivbelegg",
              "fr": "Documenter chaque projection et montage avec ses propres preuves d'archives",
              "pt": "Documentar cada apresentação e montagem com a sua própria evidência de arquivo"
            }
          }
        ],
        "bestSupportedOptionId": "provenance",
        "explanation": {
          "en": "The Cinémathèque distinguishes the Opéra and Apollo presentations, export recutting and later reconstruction. Its Grande Version record describes two modern parts. Keep edition-specific evidence separate rather than merging durations into a supposedly universal original.",
          "nb": "Cinémathèque skiller Opéra- og Apollo-visningene, omklipping for eksport og senere rekonstruksjon. Oppføringen for Grande Version beskriver to moderne deler. Hold utgavespesifikt belegg adskilt fremfor å slå sammen varigheter til en antatt universell original.",
          "fr": "La Cinémathèque distingue les projections Opéra et Apollo, les remontages d'exportation et la reconstruction ultérieure. Sa notice Grande Version décrit deux parties modernes. Séparez les preuves propres aux éditions sans inventer un original universel.",
          "pt": "A Cinémathèque distingue as apresentações Opéra e Apollo, remontagens de exportação e reconstrução posterior. O registo Grande Version descreve duas partes modernas. Separe evidências de cada edição sem inventar um original universal."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_un_chien_andalou_1929",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore Surrealist image associations, collaborative authorship and alternative exhibition through original harmless exercises.",
      "nb": "Utforsk surrealistiske billedassosiasjoner, felles forfatterskap og alternativ filmvisning gjennom egne ufarlige øvelser.",
      "fr": "Explorez les associations d'images surréalistes, la création collective et la projection alternative par des exercices originaux sans danger.",
      "pt": "Explore associações de imagens surrealistas, autoria colaborativa e exibição alternativa através de exercícios originais seguros."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Un chien andalou",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/47197.html"
      },
      {
        "id": "s1",
        "title": "Salvador Dalí: Creator/Collaborator",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/film/610"
      },
      {
        "id": "s2",
        "title": "Luis Buñuel",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/collection/artists/31258"
      },
      {
        "id": "s3",
        "title": "10 great French avant-garde films of the 1920s",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-french-avant-garde-films-1920s"
      }
    ],
    "questions": [
      {
        "id": "andalou-association",
        "area": "camera",
        "prompt": {
          "en": "How can a sequence of harmless objects suggest dream logic without conventional continuity?",
          "nb": "Hvordan kan en sekvens av ufarlige gjenstander antyde drømmelogikk uten konvensjonell kontinuitet?",
          "fr": "Comment une suite d'objets inoffensifs peut-elle suggérer une logique onirique sans continuité classique ?",
          "pt": "Como pode uma sequência de objetos inofensivos sugerir lógica onírica sem continuidade convencional?"
        },
        "options": [
          {
            "id": "association",
            "label": {
              "en": "Compare drawn images linked by shape, movement or an unexpected association",
              "nb": "Sammenlign tegnede bilder forbundet gjennom form, bevegelse eller en uventet assosiasjon",
              "fr": "Comparer des dessins liés par la forme, le mouvement ou une association inattendue",
              "pt": "Comparar desenhos ligados por forma, movimento ou associação inesperada"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Assume every Surrealist sequence is completely random",
              "nb": "Anta at enhver surrealistisk sekvens er fullstendig tilfeldig",
              "fr": "Supposer que toute séquence surréaliste est entièrement aléatoire",
              "pt": "Supor que toda sequência surrealista é inteiramente aleatória"
            }
          },
          {
            "id": "harm",
            "label": {
              "en": "Reproduce the historical film's harmful imagery literally",
              "nb": "Gjenskap filmens skadelige bilder bokstavelig",
              "fr": "Reproduire littéralement les images nocives du film historique",
              "pt": "Reproduzir literalmente as imagens nocivas do filme histórico"
            }
          }
        ],
        "bestSupportedOptionId": "association",
        "explanation": {
          "en": "MoMA describes dream-like visual poetry and BFI identifies discontinuous montage and transformations. Explore associations through paper drawings of everyday objects; no injury to people or animals is part of the exercise.",
          "nb": "MoMA beskriver drømmeaktig visuell poesi, og BFI identifiserer diskontinuerlig montasje og forvandlinger. Utforsk assosiasjoner med papirtegnede hverdagsgjenstander; skade på mennesker eller dyr inngår ikke i øvelsen.",
          "fr": "Le MoMA décrit une poésie visuelle onirique et le BFI identifie montage discontinu et transformations. Explorez des associations avec des dessins d'objets quotidiens, sans blesser personnes ni animaux.",
          "pt": "O MoMA descreve poesia visual onírica e o BFI identifica montagem descontínua e transformações. Explore associações com desenhos de objetos quotidianos, sem ferir pessoas ou animais."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "andalou-authorship",
        "area": "research",
        "prompt": {
          "en": "How should a small collaborative avant-garde production be credited?",
          "nb": "Hvordan bør en liten avantgardefilm med flere samarbeidspartnere krediteres?",
          "fr": "Comment créditer une petite production d'avant-garde collective ?",
          "pt": "Como creditar uma pequena produção de vanguarda colaborativa?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Attribute every creative and technical role to one famous artist",
              "nb": "Tilskriv alle kreative og tekniske roller én berømt kunstner",
              "fr": "Attribuer tous les rôles créatifs et techniques à un seul artiste célèbre",
              "pt": "Atribuir todos os papéis criativos e técnicos a um único artista famoso"
            }
          },
          {
            "id": "roles",
            "label": {
              "en": "Distinguish the shared scenario, direction, photography, design and production roles",
              "nb": "Skill det felles manuset, regi, foto, scenografi og produksjonsroller",
              "fr": "Distinguer scénario partagé, réalisation, image, décors et production",
              "pt": "Distinguir argumento partilhado, realização, fotografia, cenografia e produção"
            }
          },
          {
            "id": "ignore",
            "label": {
              "en": "Ignore the documented collaborators because the budget was small",
              "nb": "Ignorer dokumenterte samarbeidspartnere fordi budsjettet var lite",
              "fr": "Ignorer les collaborateurs attestés parce que le budget était modeste",
              "pt": "Ignorar colaboradores documentados porque o orçamento era pequeno"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "The Cinémathèque records Buñuel and Dalí's screenplay collaboration alongside photography, design and production credits. MoMA contextualizes the partnership. Small-scale independent production does not erase collective authorship.",
          "nb": "Cinémathèque dokumenterer Buñuel og Dalís manussamarbeid sammen med foto-, scenografi- og produksjonskrediteringer. MoMA setter samarbeidet i kontekst. Småskala uavhengig produksjon opphever ikke kollektivt forfatterskap.",
          "fr": "La Cinémathèque recense le scénario de Buñuel et Dalí ainsi que les crédits image, décors et production. Le MoMA contextualise leur partenariat. Une petite production indépendante n'efface pas la création collective.",
          "pt": "A Cinémathèque regista o argumento de Buñuel e Dalí e créditos de fotografia, cenografia e produção. O MoMA contextualiza a parceria. Uma pequena produção independente não apaga a autoria coletiva."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "andalou-exhibition",
        "area": "research",
        "prompt": {
          "en": "How should you distinguish original exhibition from later restored access copies?",
          "nb": "Hvordan bør du skille original filmvisning fra senere restaurerte tilgangskopier?",
          "fr": "Comment distinguer la projection originale des copies d'accès restaurées ultérieures ?",
          "pt": "Como distinguir a exibição original das cópias de acesso restauradas posteriores?"
        },
        "options": [
          {
            "id": "universal",
            "label": {
              "en": "Treat every modern copy as the exact original exhibition experience",
              "nb": "Behandle enhver moderne kopi som den eksakte opprinnelige visningsopplevelsen",
              "fr": "Traiter chaque copie moderne comme l'expérience exacte de la projection originale",
              "pt": "Tratar cada cópia moderna como a experiência exata da exibição original"
            }
          },
          {
            "id": "commercial",
            "label": {
              "en": "Assume every avant-garde short followed standard feature distribution",
              "nb": "Anta at enhver avantgardekortfilm fulgte vanlig langfilmdistribusjon",
              "fr": "Supposer que tout court métrage d'avant-garde suivait la distribution classique",
              "pt": "Supor que toda curta de vanguarda seguia distribuição convencional"
            }
          },
          {
            "id": "context",
            "label": {
              "en": "Record the specialist venue, financing context and restoration separately",
              "nb": "Registrer spesialkinoen, finansieringskonteksten og restaureringen separat",
              "fr": "Consigner séparément le lieu spécialisé, le financement et la restauration",
              "pt": "Registar separadamente o local especializado, financiamento e restauro"
            }
          }
        ],
        "bestSupportedOptionId": "context",
        "explanation": {
          "en": "The Cinémathèque records the Studio des Ursulines presentation and later digital restoration; BFI describes small-scale family financing. Keep the alternative exhibition and production context separate from the modern access object.",
          "nb": "Cinémathèque registrerer visningen på Studio des Ursulines og senere digital restaurering; BFI beskriver familiefinansiering i liten skala. Hold alternativ visnings- og produksjonskontekst adskilt fra den moderne tilgangskopien.",
          "fr": "La Cinémathèque recense la projection au Studio des Ursulines et la restauration numérique ultérieure ; le BFI décrit un financement familial modeste. Distinguez contexte de projection et de production de l'objet d'accès moderne.",
          "pt": "A Cinémathèque regista a exibição no Studio des Ursulines e restauro digital posterior; o BFI descreve financiamento familiar modesto. Distinga o contexto de exibição e produção do objeto de acesso moderno."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_passion_of_joan_of_arc_1928",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore expressive close-ups, emotional coherence and the distinction between historical records and dramatic adaptation.",
      "nb": "Utforsk uttrykksfulle nærbilder, emosjonell sammenheng og skillet mellom historiske dokumenter og dramatisk adaptasjon.",
      "fr": "Explorez les gros plans expressifs, la cohérence émotionnelle et la distinction entre documents historiques et adaptation dramatique.",
      "pt": "Explore grandes planos expressivos, coerência emocional e a distinção entre documentos históricos e adaptação dramática."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Where to begin with Carl Dreyer",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/where-begin-carl-dreyer"
      },
      {
        "id": "s1",
        "title": "4 rules of filmmaking and how The Passion of Joan of Arc breaks them",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/passion-joan-arc-carl-dreyer-style"
      },
      {
        "id": "s2",
        "title": "The peak of silent cinema",
        "publisher": "BFI Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/peak-silent-cinema"
      },
      {
        "id": "s3",
        "title": "Carl Th. Dreyer",
        "publisher": "Danish Film Institute",
        "url": "https://www.dfi.dk/en/viden-om-film/filmdatabasen/person/carl-th-dreyer"
      }
    ],
    "questions": [
      {
        "id": "joan-closeup",
        "area": "camera",
        "prompt": {
          "en": "How could a neutral fictional conversation use close-ups to express a character's changing feelings?",
          "nb": "Hvordan kan en nøytral fiktiv samtale bruke nærbilder til å uttrykke figurens skiftende følelser?",
          "fr": "Comment une conversation fictive neutre peut-elle exprimer les émotions changeantes par les gros plans ?",
          "pt": "Como pode uma conversa fictícia neutra expressar emoções variáveis através de grandes planos?"
        },
        "options": [
          {
            "id": "faces",
            "label": {
              "en": "Compare drawn facial expressions, framing and simplified backgrounds",
              "nb": "Sammenlign tegnede ansiktsuttrykk, utsnitt og forenklede bakgrunner",
              "fr": "Comparer expressions faciales dessinées, cadrages et fonds simplifiés",
              "pt": "Comparar expressões faciais desenhadas, enquadramentos e fundos simplificados"
            }
          },
          {
            "id": "cost",
            "label": {
              "en": "Assume sparse screen space proves the entire production was inexpensive",
              "nb": "Anta at sparsomme bilder beviser at hele produksjonen var billig",
              "fr": "Supposer qu'un espace à l'écran dépouillé prouve une production bon marché",
              "pt": "Supor que espaço visual austero prova uma produção barata"
            }
          },
          {
            "id": "rating",
            "label": {
              "en": "Judge a performer's skill only by appearance",
              "nb": "Vurder skuespillerens ferdighet bare etter utseende",
              "fr": "Juger le talent de l'interprète uniquement selon son apparence",
              "pt": "Avaliar o talento do intérprete apenas pela aparência"
            }
          }
        ],
        "bestSupportedOptionId": "faces",
        "explanation": {
          "en": "BFI describes close-ups and sparse décor, while Sight and Sound notes substantial sets and Falconetti's performance. Compare original drawings of expressions and backgrounds; minimalist imagery does not itself establish low production costs.",
          "nb": "BFI beskriver nærbilder og sparsom dekor, mens Sight and Sound omtaler omfattende kulisser og Falconettis spill. Sammenlign egne tegninger av uttrykk og bakgrunner; minimalistiske bilder beviser ikke lave produksjonskostnader.",
          "fr": "Le BFI décrit gros plans et décors dépouillés, tandis que Sight and Sound évoque des décors importants et le jeu de Falconetti. Comparez des dessins originaux ; une image minimaliste ne prouve pas un faible coût.",
          "pt": "O BFI descreve grandes planos e cenários austeros, enquanto Sight and Sound refere cenários substanciais e a interpretação de Falconetti. Compare desenhos originais; uma imagem minimalista não prova baixo custo."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "joan-editing",
        "area": "camera",
        "prompt": {
          "en": "How might a sequence remain emotionally coherent while departing from conventional continuity?",
          "nb": "Hvordan kan en sekvens bevare emosjonell sammenheng samtidig som den avviker fra konvensjonell kontinuitet?",
          "fr": "Comment une séquence peut-elle rester émotionnellement cohérente en s'écartant des raccords classiques ?",
          "pt": "Como pode uma sequência manter coerência emocional ao afastar-se da continuidade convencional?"
        },
        "options": [
          {
            "id": "rule",
            "label": {
              "en": "Assume every sequence must follow every continuity convention",
              "nb": "Anta at alle sekvenser må følge alle kontinuitetskonvensjoner",
              "fr": "Supposer que toute séquence doit respecter chaque convention de raccord",
              "pt": "Supor que toda sequência deve seguir todas as convenções de continuidade"
            }
          },
          {
            "id": "emotion",
            "label": {
              "en": "Compare conventional and deliberately discontinuous edits of an invented conversation",
              "nb": "Sammenlign konvensjonell og bevisst diskontinuerlig klipping av en oppdiktet samtale",
              "fr": "Comparer des montages classiques et volontairement discontinus d'une conversation inventée",
              "pt": "Comparar montagens convencionais e deliberadamente descontínuas de uma conversa inventada"
            }
          },
          {
            "id": "random",
            "label": {
              "en": "Remove all narrative and emotional relationships between the images",
              "nb": "Fjern alle fortellingsmessige og emosjonelle forbindelser mellom bildene",
              "fr": "Supprimer tout rapport narratif et émotionnel entre les images",
              "pt": "Eliminar todas as relações narrativas e emocionais entre as imagens"
            }
          }
        ],
        "bestSupportedOptionId": "emotion",
        "explanation": {
          "en": "BFI analyzes Dreyer's departures from matching eyelines and master shots while emphasizing emotional coherence. Compare two original storyboard edits to see how each shapes attention; neither is a universal rule.",
          "nb": "BFI analyserer Dreyers avvik fra samsvarende blikkretninger og oversiktsbilder, samtidig som emosjonell sammenheng fremheves. Sammenlign to egne storyboardklipp for å se hvordan de former oppmerksomheten; ingen er en universell regel.",
          "fr": "Le BFI analyse les écarts de Dreyer aux raccords de regard et plans d'ensemble tout en soulignant la cohérence émotionnelle. Comparez deux montages dessinés originaux ; aucun n'est une règle universelle.",
          "pt": "O BFI analisa os desvios de Dreyer em raccords de olhar e planos gerais, salientando coerência emocional. Compare duas montagens desenhadas originais; nenhuma é uma regra universal."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "joan-history",
        "area": "research",
        "prompt": {
          "en": "How should trial documents, dramatic compression and recovered film versions be documented?",
          "nb": "Hvordan bør rettsdokumenter, dramatisk komprimering og gjenfunne filmversjoner dokumenteres?",
          "fr": "Comment documenter les actes du procès, la compression dramatique et les versions retrouvées ?",
          "pt": "Como documentar os autos do julgamento, a compressão dramática e as versões recuperadas?"
        },
        "options": [
          {
            "id": "literal",
            "label": {
              "en": "Treat the film as an unedited audiovisual record of the historical trial",
              "nb": "Behandle filmen som et uredigert audiovisuelt opptak av den historiske rettssaken",
              "fr": "Traiter le film comme un enregistrement audiovisuel non monté du procès historique",
              "pt": "Tratar o filme como gravação audiovisual não montada do julgamento histórico"
            }
          },
          {
            "id": "same",
            "label": {
              "en": "Assume all surviving release copies contain the same original editing",
              "nb": "Anta at alle bevarte utgivelseskopier inneholder samme originalklipp",
              "fr": "Supposer que toutes les copies conservées ont le même montage original",
              "pt": "Supor que todas as cópias preservadas têm a mesma montagem original"
            }
          },
          {
            "id": "distinguish",
            "label": {
              "en": "Separate documentary sources, fictional adaptation, release cuts and recovery history",
              "nb": "Skill dokumentkilder, dramatisk adaptasjon, utgivelsesklipp og gjenfinningshistorie",
              "fr": "Distinguer sources documentaires, adaptation dramatique, montages de sortie et redécouverte",
              "pt": "Distinguir fontes documentais, adaptação dramática, montagens de estreia e redescoberta"
            }
          }
        ],
        "bestSupportedOptionId": "distinguish",
        "explanation": {
          "en": "BFI documents the trial-transcript basis and compression into a single day; Sight and Sound describes shortening and the recovery in Oslo. Distinguish historical evidence from dramatic construction and identify the particular surviving edition.",
          "nb": "BFI dokumenterer rettsprotokollene som kilde og komprimeringen til én dag; Sight and Sound beskriver forkorting og gjenoppdagelsen i Oslo. Skill historisk belegg fra dramatisk konstruksjon og identifiser den konkrete bevarte utgaven.",
          "fr": "Le BFI documente les transcriptions du procès et leur compression en une journée ; Sight and Sound décrit les coupes et la redécouverte à Oslo. Distinguez preuves historiques et construction dramatique, puis identifiez l'édition conservée.",
          "pt": "O BFI documenta as transcrições do julgamento e compressão num dia; Sight and Sound descreve cortes e a redescoberta em Oslo. Distinga evidência histórica de construção dramática e identifique a edição preservada."
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
    "scenarioId": "scenario_mother_1926",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore performance-centered montage, literary adaptation and version-specific exhibition in Pudovkin's film.",
      "nb": "Utforsk skuespillersentrert montasje, litterær adaptasjon og utgavespesifikk visning i Pudovkins film.",
      "fr": "Explorez le montage centré sur le jeu, l'adaptation littéraire et les versions de projection chez Poudovkine.",
      "pt": "Explore a montagem centrada na interpretação, a adaptação literária e as versões de exibição no filme de Pudovkin."
    },
    "sources": [
      {
        "id": "s0",
        "title": "Russian Films in the Library of Congress — MAT' (MOTHER)",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/rr/mopic/findaid/russian.html"
      },
      {
        "id": "s1",
        "title": "10 great Soviet films of the 1920s",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-soviet-films-1920s"
      },
      {
        "id": "s2",
        "title": "Mother",
        "publisher": "Harvard Film Archive",
        "url": "https://harvardfilmarchive.org/calendar/mother-2017-10"
      },
      {
        "id": "s3",
        "title": "MAT (1926)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/0adcb28e-fae8-5b9b-b946-1a4fcca56a04/mat"
      }
    ],
    "questions": [
      {
        "id": "mother-linkage",
        "area": "camera",
        "prompt": {
          "en": "How can a sequence of connected images develop a fictional character's emotional change?",
          "nb": "Hvordan kan en sekvens med sammenhengende bilder utvikle en fiktiv figurs følelsesmessige endring?",
          "fr": "Comment une suite d'images reliées peut-elle développer l'évolution émotionnelle d'un personnage fictif ?",
          "pt": "Como pode uma sequência de imagens ligadas desenvolver a mudança emocional de uma personagem fictícia?"
        },
        "options": [
          {
            "id": "link",
            "label": {
              "en": "Connect a gesture, an observed object and a reaction in an original everyday scene",
              "nb": "Knytt en gest, en observert gjenstand og en reaksjon sammen i en egen hverdagsscene",
              "fr": "Relier un geste, un objet observé et une réaction dans une scène quotidienne originale",
              "pt": "Ligar um gesto, um objeto observado e uma reação numa cena quotidiana original"
            }
          },
          {
            "id": "arbitrary",
            "label": {
              "en": "Shuffle the drawings without considering character or performance",
              "nb": "Bland tegningene uten hensyn til figur eller skuespill",
              "fr": "Mélanger les dessins sans tenir compte du personnage ni du jeu",
              "pt": "Baralhar os desenhos sem considerar a personagem nem a interpretação"
            }
          },
          {
            "id": "law",
            "label": {
              "en": "Declare linkage the only valid form of cinematic montage",
              "nb": "Erklær sammenkobling som den eneste gyldige montasjeformen",
              "fr": "Déclarer que la liaison est la seule forme valide de montage",
              "pt": "Declarar a ligação como única forma válida de montagem"
            }
          }
        ],
        "bestSupportedOptionId": "link",
        "explanation": {
          "en": "BFI distinguishes Pudovkin's linkage approach from Eisenstein's collision model, while Harvard emphasizes performance nuance. Compare original storyboard edits and consider how the sequence builds character; neither theory is a universal law.",
          "nb": "BFI skiller Pudovkins sammenkobling fra Eisensteins kollisjonsmodell, mens Harvard fremhever nyanser i skuespillet. Sammenlign egne storyboardklipp og vurder hvordan sekvensen bygger karakter; ingen av teoriene er en universell lov.",
          "fr": "Le BFI distingue la liaison chez Poudovkine de la collision chez Eisenstein ; Harvard souligne les nuances du jeu. Comparez des montages dessinés originaux pour étudier la construction du personnage, sans ériger une théorie en loi universelle.",
          "pt": "O BFI distingue a ligação de Pudovkin da colisão de Eisenstein; Harvard destaca nuances da interpretação. Compare montagens desenhadas originais para estudar a construção da personagem, sem transformar uma teoria em lei universal."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "mother-adaptation",
        "area": "research",
        "prompt": {
          "en": "How should a researcher document the literary source and collaborative film production?",
          "nb": "Hvordan bør en forsker dokumentere litterær kilde og kollektiv filmproduksjon?",
          "fr": "Comment documenter la source littéraire et la production cinématographique collective ?",
          "pt": "Como documentar a fonte literária e a produção cinematográfica colaborativa?"
        },
        "options": [
          {
            "id": "solo",
            "label": {
              "en": "Attribute the novel, adaptation and technical work to the director alone",
              "nb": "Tilskriv romanen, adaptasjonen og det tekniske arbeidet regissøren alene",
              "fr": "Attribuer le roman, l'adaptation et les métiers techniques au seul réalisateur",
              "pt": "Atribuir o romance, a adaptação e o trabalho técnico apenas ao realizador"
            }
          },
          {
            "id": "roles",
            "label": {
              "en": "Distinguish the novelist, screenwriter, director, cast, photography and design",
              "nb": "Skill romanforfatter, manusforfatter, regissør, skuespillere, foto og scenografi",
              "fr": "Distinguer romancier, scénariste, réalisateur, interprètes, image et décors",
              "pt": "Distinguir romancista, argumentista, realizador, elenco, fotografia e cenografia"
            }
          },
          {
            "id": "literal",
            "label": {
              "en": "Treat the adaptation as a documentary recording of the novel's events",
              "nb": "Behandle adaptasjonen som et dokumentarisk opptak av romanens hendelser",
              "fr": "Traiter l'adaptation comme un enregistrement documentaire des événements du roman",
              "pt": "Tratar a adaptação como um registo documental dos acontecimentos do romance"
            }
          }
        ],
        "bestSupportedOptionId": "roles",
        "explanation": {
          "en": "The Library of Congress identifies Gorky's novel, Zarkhi's adaptation, Pudovkin and the credited cast and craft team. Document their distinct roles and treat the adaptation as constructed dramatic representation rather than a direct historical record.",
          "nb": "Library of Congress identifiserer Gorkijs roman, Zarkhis adaptasjon, Pudovkin og de krediterte skuespillerne og fagarbeiderne. Dokumenter ulike roller og behandle adaptasjonen som konstruert dramatisk fremstilling, ikke en direkte historisk dokumentasjon.",
          "fr": "La Library of Congress identifie le roman de Gorki, l'adaptation de Zarkhi, Poudovkine, les interprètes et les techniciens. Documentez les rôles distincts et considérez l'adaptation comme une construction dramatique, non comme un document direct.",
          "pt": "A Library of Congress identifica o romance de Górki, a adaptação de Zarkhi, Pudovkin, elenco e equipa técnica. Documente papéis distintos e trate a adaptação como construção dramática, não como registo histórico direto."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "mother-versions",
        "area": "sound",
        "prompt": {
          "en": "How should the different recorded presentation durations and music be described?",
          "nb": "Hvordan bør de ulike registrerte visningsvarighetene og musikken beskrives?",
          "fr": "Comment décrire les différentes durées de projection documentées et la musique ?",
          "pt": "Como descrever as diferentes durações de exibição documentadas e a música?"
        },
        "options": [
          {
            "id": "average",
            "label": {
              "en": "Average the archive runtimes to invent one definitive original duration",
              "nb": "Beregn gjennomsnittet av arkivvarighetene for å finne på én definitiv originalvarighet",
              "fr": "Moyenner les durées d'archives pour inventer une durée originale définitive",
              "pt": "Calcular a média das durações de arquivo para inventar uma duração original definitiva"
            }
          },
          {
            "id": "sync",
            "label": {
              "en": "Attribute later musical presentation to original synchronized dialogue",
              "nb": "Tilskriv senere musikkvisning opprinnelig synkron dialog",
              "fr": "Attribuer la musique ultérieure à un dialogue synchrone original",
              "pt": "Atribuir música de exibição posterior a diálogo sincronizado original"
            }
          },
          {
            "id": "copies",
            "label": {
              "en": "Identify the separate institutional runtime records and presentation-specific music",
              "nb": "Identifiser de ulike institusjonelle varighetsoppføringene og visningsspesifikk musikk",
              "fr": "Identifier les durées institutionnelles distinctes et la musique propre à la projection",
              "pt": "Identificar os registos institucionais de duração distintos e a música específica da exibição"
            }
          }
        ],
        "bestSupportedOptionId": "copies",
        "explanation": {
          "en": "BFI records a 106-minute duration, while Harvard documents a 90-minute 35mm presentation with a later music track. Preserve the separate records and distinguish silent production from a particular accompaniment.",
          "nb": "BFI registrerer en varighet på 106 minutter, mens Harvard dokumenterer en 90-minutters 35mm-visning med et senere musikkspor. Bevar de separate oppføringene og skill stumfilmproduksjon fra et bestemt akkompagnement.",
          "fr": "Le BFI indique 106 minutes ; Harvard documente une projection 35 mm de 90 minutes avec une piste musicale ultérieure. Préservez les notices distinctes et distinguez production muette et accompagnement particulier.",
          "pt": "O BFI regista 106 minutos; Harvard documenta uma apresentação de 90 minutos em 35 mm com faixa musical posterior. Preserve os registos distintos e distinga produção muda de um acompanhamento específico."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_fall_of_the_romanov_dynasty_1927",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Explore archival provenance, editorial selection and preservation through transparent compilation exercises.",
      "nb": "Utforsk arkivproveniens, redaksjonell utvelgelse og bevaring gjennom transparente kompilasjonsøvelser.",
      "fr": "Explorez la provenance archivistique, la sélection éditoriale et la préservation par des exercices de compilation transparents.",
      "pt": "Explore proveniência de arquivo, seleção editorial e preservação através de exercícios transparentes de compilação."
    },
    "sources": [
      {
        "id": "s0",
        "title": "10 great Soviet films of the 1920s",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-soviet-films-1920s"
      },
      {
        "id": "s1",
        "title": "Padeniye dinasti Romanovikh (The Fall of the Romanov Dynasty)",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/collection/works/301141"
      },
      {
        "id": "s2",
        "title": "The Fall of the Romanov Dynasty — Carte Blanche: Joan Jonas",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/events/9537"
      },
      {
        "id": "s3",
        "title": "A MOVIE Shorts Program 1",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/events/2310"
      }
    ],
    "questions": [
      {
        "id": "shub-provenance",
        "area": "research",
        "prompt": {
          "en": "What should be recorded before editing a collection of existing archival images?",
          "nb": "Hva bør registreres før en samling eksisterende arkivbilder klippes sammen?",
          "fr": "Que faut-il consigner avant de monter une collection d'images d'archives existantes ?",
          "pt": "O que deve ser registado antes de montar uma coleção de imagens de arquivo existentes?"
        },
        "options": [
          {
            "id": "provenance",
            "label": {
              "en": "Record each image's origin, date when known, original context and uncertainties",
              "nb": "Registrer hvert bildes opphav, dato når kjent, opprinnelig kontekst og usikkerheter",
              "fr": "Consigner l'origine, la date connue, le contexte initial et les incertitudes de chaque image",
              "pt": "Registar origem, data conhecida, contexto inicial e incertezas de cada imagem"
            }
          },
          {
            "id": "strip",
            "label": {
              "en": "Remove all provenance labels to make the compilation seem seamless",
              "nb": "Fjern alle proveniensopplysninger for å få kompilasjonen til å virke sømløs",
              "fr": "Supprimer toute indication de provenance pour rendre la compilation homogène",
              "pt": "Remover indicações de proveniência para tornar a compilação homogénea"
            }
          },
          {
            "id": "invent",
            "label": {
              "en": "Invent dates and locations for unidentified archival material",
              "nb": "Finn på datoer og steder for uidentifisert arkivmateriale",
              "fr": "Inventer dates et lieux pour les archives non identifiées",
              "pt": "Inventar datas e locais para materiais de arquivo não identificados"
            }
          }
        ],
        "bestSupportedOptionId": "provenance",
        "explanation": {
          "en": "BFI documents Shub's extensive archival search and the collaboration with Tseitlin. An original compilation plan should preserve source identity and uncertainty; selection is creative work, not permission to manufacture facts.",
          "nb": "BFI dokumenterer Shubs omfattende arkivsøk og samarbeidet med Tseitlin. En egen kompilasjonsplan bør bevare kildeidentitet og usikkerhet; utvelgelse er kreativt arbeid, ikke tillatelse til å dikte opp fakta.",
          "fr": "Le BFI documente les recherches d'archives de Choub et sa collaboration avec Tseitlin. Un projet de compilation doit préserver identité et incertitudes des sources ; sélectionner ne permet pas d'inventer des faits.",
          "pt": "O BFI documenta a pesquisa de arquivo de Shub e a colaboração com Tseitlin. Um plano de compilação deve preservar identidade e incertezas das fontes; selecionar não autoriza inventar factos."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "shub-context",
        "area": "camera",
        "prompt": {
          "en": "How can two arrangements of the same existing images be compared responsibly?",
          "nb": "Hvordan kan to sammenstillinger av de samme eksisterende bildene sammenlignes på en ansvarlig måte?",
          "fr": "Comment comparer de manière responsable deux agencements des mêmes images existantes ?",
          "pt": "Como comparar responsavelmente dois arranjos das mesmas imagens existentes?"
        },
        "options": [
          {
            "id": "neutral",
            "label": {
              "en": "Present every editorial arrangement as a neutral record of events",
              "nb": "Presenter enhver redaksjonell sammenstilling som en nøytral dokumentasjon av hendelser",
              "fr": "Présenter chaque agencement éditorial comme un document neutre des événements",
              "pt": "Apresentar cada arranjo editorial como registo neutro dos acontecimentos"
            }
          },
          {
            "id": "compare",
            "label": {
              "en": "Compare two labeled edits of original neutral drawings and explain the changed emphasis",
              "nb": "Sammenlign to merkede klipp av egne nøytrale tegninger og forklar endret vektlegging",
              "fr": "Comparer deux montages légendés de dessins neutres originaux et expliquer les différences d'accent",
              "pt": "Comparar duas montagens identificadas de desenhos neutros originais e explicar a mudança de ênfase"
            }
          },
          {
            "id": "mislabel",
            "label": {
              "en": "Use a fabricated caption to turn an unrelated image into apparent evidence",
              "nb": "Bruk en oppdiktet bildetekst for å gjøre et urelatert bilde til tilsynelatende bevis",
              "fr": "Utiliser une légende inventée pour transformer une image sans rapport en preuve apparente",
              "pt": "Usar uma legenda inventada para transformar uma imagem sem relação em prova aparente"
            }
          }
        ],
        "bestSupportedOptionId": "compare",
        "explanation": {
          "en": "MoMA discusses Shub's transformation of existing material, and BFI documents selection and intertitle collaboration. Compare arrangements of benign original drawings with transparent labels and commentary; changed emphasis does not create new historical facts.",
          "nb": "MoMA omtaler Shubs bearbeiding av eksisterende materiale, og BFI dokumenterer utvelgelse og samarbeid om mellomtekster. Sammenlign sammenstillinger av egne ufarlige tegninger med tydelige merkelapper og kommentar; endret vektlegging skaper ikke nye historiske fakta.",
          "fr": "Le MoMA évoque la transformation de matériaux existants par Choub ; le BFI documente la sélection et les intertitres. Comparez des dessins originaux anodins avec légendes transparentes ; une nouvelle emphase ne crée pas de nouveaux faits historiques.",
          "pt": "O MoMA aborda a transformação de material existente por Shub; o BFI documenta seleção e intertítulos. Compare desenhos originais inofensivos com legendas transparentes; uma nova ênfase não cria novos factos históricos."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "shub-preservation",
        "area": "research",
        "prompt": {
          "en": "How should preservation and differing screening records be represented in the research notes?",
          "nb": "Hvordan bør bevaring og ulike visningsoppføringer fremstilles i forskningsnotatene?",
          "fr": "Comment représenter la préservation et les différentes notices de projection dans les notes de recherche ?",
          "pt": "Como representar preservação e diferentes registos de exibição nas notas de investigação?"
        },
        "options": [
          {
            "id": "discard",
            "label": {
              "en": "Discard unselected original material once a compilation is finished",
              "nb": "Kast originalmateriale som ikke ble valgt når kompilasjonen er ferdig",
              "fr": "Éliminer les matériaux originaux non sélectionnés après la compilation",
              "pt": "Descartar materiais originais não selecionados após a compilação"
            }
          },
          {
            "id": "same",
            "label": {
              "en": "Assume all archival presentations have identical duration and accompaniment",
              "nb": "Anta at alle arkivvisninger har identisk varighet og akkompagnement",
              "fr": "Supposer que toutes les projections d'archives ont la même durée et le même accompagnement",
              "pt": "Supor que todas as exibições de arquivo têm duração e acompanhamento idênticos"
            }
          },
          {
            "id": "preserve",
            "label": {
              "en": "Preserve originals and document the selected edition, duration and accompaniment separately",
              "nb": "Bevar originalene og dokumenter valgt utgave, varighet og akkompagnement separat",
              "fr": "Préserver les originaux et documenter séparément édition, durée et accompagnement",
              "pt": "Preservar originais e documentar separadamente edição, duração e acompanhamento"
            }
          }
        ],
        "bestSupportedOptionId": "preserve",
        "explanation": {
          "en": "BFI notes that Shub's work preserved footage that might otherwise have been lost. MoMA records different presentation durations and later accompaniment. Keep preservation history and edition-specific evidence distinct from the new compilation.",
          "nb": "BFI påpeker at Shubs arbeid bevarte opptak som ellers kunne gått tapt. MoMA registrerer ulike visningsvarigheter og senere akkompagnement. Hold bevaringshistorie og utgavespesifikt belegg adskilt fra den nye kompilasjonen.",
          "fr": "Le BFI souligne que Choub a préservé des images qui auraient pu disparaître. Le MoMA documente des durées différentes et un accompagnement ultérieur. Distinguez histoire de la préservation, preuves propres aux éditions et nouvelle compilation.",
          "pt": "O BFI salienta que Shub preservou imagens que poderiam ter-se perdido. O MoMA regista durações diferentes e acompanhamento posterior. Distinga história de preservação, evidência específica da edição e nova compilação."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
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
