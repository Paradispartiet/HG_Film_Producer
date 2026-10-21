import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { presentVerifiedFilmStudyDonorChoice, presentVerifiedFilmStudyDonorChoiceSummary } from "./filmStudyVerifiedDonorChoices.js";
import { VERTIGO_FILM_HISTORY_ROWS } from "./filmStudyVertigoHistoryRows.js";
import { BREATHLESS_FILM_HISTORY_ROWS } from "./filmStudyBreathlessHistoryRows.js";

/**
 * Source-locked presentation for the reviewed film-history cases.
 * Canonical profile/choice/source data and grading are never changed.
 * Each row is [exact canonical English text, Norwegian, French, Portuguese].
 * Unknown claims, unreviewed donor-film distractors and source citations stay canonical
 * until their own source-based editorial translation is reviewed.
 */
type HistoryTextRow = readonly [canonical: string, nb: string, fr: string, pt: string];

export const FILM_HISTORY_PRESENTATION_ROWS = {
  scenario_vertigo_1958: VERTIGO_FILM_HISTORY_ROWS,
  scenario_breathless_1960: BREATHLESS_FILM_HISTORY_ROWS,
  scenario_bicycle_thieves_1948: [
    [
      "Postwar Italian neorealism",
      "Italiensk neorealisme etter krigen",
      "Néoréalisme italien de l'après-guerre",
      "Neorrealismo italiano do pós-guerra",
    ],
    [
      "Italian neorealism",
      "Italiensk neorealisme",
      "Néoréalisme italien",
      "Neorrealismo italiano",
    ],
    [
      "Location realism",
      "Realisme på autentiske opptakssteder",
      "Réalisme des décors naturels",
      "Realismo em locais reais",
    ],
    [
      "Nonprofessional performance",
      "Skuespill med ikke-profesjonelle",
      "Interprétation par des non-professionnels",
      "Interpretação por não profissionais",
    ],
    [
      "Neorealism turned away from polished studio illusion toward streets, ordinary labor and the consequences of war and poverty.",
      "Neorealismen vendte seg bort fra studioenes polerte illusjoner og mot gatene, vanlige arbeidsfolk og følgene av krig og fattigdom.",
      "Le néoréalisme délaisse l'illusion soignée des studios pour les rues, le travail ordinaire et les conséquences de la guerre et de la pauvreté.",
      "O neorrealismo afastou-se da ilusão polida dos estúdios para filmar as ruas, o trabalho comum e as consequências da guerra e da pobreza.",
    ],
    [
      "Rome locations, nonprofessional performers and a simple object-driven search make unemployment and family dignity concrete at human scale.",
      "Opptakssteder i Roma, ikke-profesjonelle skuespillere og letingen etter én gjenstand gjør arbeidsløshet og familiens verdighet håndgripelige i menneskelig målestokk.",
      "Les rues de Rome, les interprètes non professionnels et la quête d'un objet rendent le chômage et la dignité familiale concrets à hauteur humaine.",
      "As ruas de Roma, os intérpretes não profissionais e a procura de um objeto tornam concretos o desemprego e a dignidade familiar à escala humana.",
    ],
    [
      "The film became a central reference for social realism, location production and stories built around everyday material stakes.",
      "Filmen ble en sentral referanse for sosialrealisme, opptak på autentiske steder og fortellinger om konkrete materielle behov i hverdagen.",
      "Le film est devenu une référence majeure pour le réalisme social, le tournage en décors naturels et les récits fondés sur les besoins matériels quotidiens.",
      "O filme tornou-se uma referência central para o realismo social, as filmagens em locais reais e as histórias assentes em necessidades materiais quotidianas.",
    ],
    [
      "Which movement best explains the union of postwar social pressure, street locations and nonprofessional casting?",
      "Hvilken filmbevegelse forklarer best sammenhengen mellom etterkrigstidens sosiale press, opptak i gatene og ikke-profesjonelle skuespillere?",
      "Quel mouvement explique le mieux l'association des tensions sociales de l'après-guerre, des tournages dans la rue et d'acteurs non professionnels ?",
      "Que movimento explica melhor a combinação da pressão social do pós-guerra, das filmagens nas ruas e de atores não profissionais?",
    ],
    [
      "The story and production are rooted in postwar Roman economic reality.",
      "Fortellingen og produksjonen er forankret i de økonomiske forholdene i etterkrigstidens Roma.",
      "Le récit et la production s'enracinent dans la réalité économique de la Rome d'après-guerre.",
      "A história e a produção estão enraizadas na realidade económica da Roma do pós-guerra.",
    ],
    [
      "The film is a core Italian neorealist case.",
      "Filmen er et kjerneeksempel på italiensk neorealisme.",
      "Le film est un exemple majeur du néoréalisme italien.",
      "O filme é um exemplo fundamental do neorrealismo italiano.",
    ],
    [
      "De Sica uses restrained staging and visual rhymes rather than display-oriented virtuosity.",
      "De Sica bruker tilbakeholden iscenesettelse og visuelle rim fremfor demonstrativ virtuositet.",
      "De Sica privilégie une mise en scène retenue et des échos visuels plutôt qu'une virtuosité ostentatoire.",
      "De Sica privilegia a encenação contida e as rimas visuais em vez de um virtuosismo exibicionista.",
    ],
    [
      "Nonprofessional performers are directed toward emotionally precise, socially grounded behavior.",
      "De ikke-profesjonelle skuespillerne ledes mot følelsesmessig presist spill som er forankret i sosiale forhold.",
      "Les interprètes non professionnels sont dirigés vers un jeu émotionnellement précis et ancré dans la réalité sociale.",
      "Os intérpretes não profissionais são dirigidos para atuações emocionalmente precisas e socialmente fundamentadas.",
    ],
    [
      "Real streets and locations replace a heavily designed studio world.",
      "Virkelige gater og steder erstatter et omfattende utformet studiomiljø.",
      "Les rues et les lieux réels remplacent les décors de studio élaborés.",
      "Ruas e locais reais substituem cenários de estúdio elaborados.",
    ],
    [
      "The fiction borrows location observation and social detail from documentary practice.",
      "Fiksjonsfilmen låner observasjoner fra autentiske steder og sosiale detaljer fra dokumentarisk praksis.",
      "La fiction emprunte au documentaire l'observation sur place et l'attention aux détails sociaux.",
      "A ficção inspira-se na observação em locais reais e nos pormenores sociais da prática documental.",
    ],
    [
      "Effects are not central to the neorealist method.",
      "Effekter er ikke sentrale i den neorealistiske metoden.",
      "Les effets ne sont pas au cœur de la méthode néoréaliste.",
      "Os efeitos não são centrais ao método neorrealista.",
    ],
  ],
  scenario_lost_in_translation_2003: [
    [
      "Early-2000s American independent and transnational location cinema",
      "Amerikansk uavhengig og transnasjonal stedsfilm fra tidlig 2000-tall",
      "Cinéma indépendant américain et tournage transnational en décors réels au début des années 2000",
      "Cinema independente americano e produção transnacional em locais reais do início dos anos 2000",
    ],
    [
      "Independent auteur cinema",
      "Uavhengig auteurfilm",
      "Cinéma d'auteur indépendant",
      "Cinema de autor independente",
    ],
    [
      "City film",
      "Byfilm",
      "Film urbain",
      "Filme urbano",
    ],
    [
      "Mood-led romantic drama",
      "Stemningsdrevet romantisk drama",
      "Drame romantique porté par l'atmosphère",
      "Drama romântico guiado pela atmosfera",
    ],
    [
      "It follows city films and intimate independent dramas that let location, waiting and social dislocation carry narrative weight.",
      "Den bygger på byfilmer og intime uavhengige dramaer der steder, venting og sosial fremmedgjøring bærer fortellingen.",
      "Le film s'inscrit dans la lignée des films urbains et des drames indépendants intimistes, où les lieux, l'attente et le dépaysement social portent le récit.",
      "O filme segue a tradição dos filmes urbanos e dos dramas independentes intimistas em que os lugares, a espera e o desenraizamento social sustentam a narrativa.",
    ],
    [
      "A small crew, 35mm photography, improvised material and on-the-run Tokyo production turn jet lag and cultural displacement into the film's form.",
      "Et lite filmteam, 35 mm-fotografering, improvisert materiale og raske opptak i Tokyo gjør jetlag og kulturell fremmedgjøring til en del av filmens form.",
      "Une petite équipe, des images tournées en 35 mm, des séquences improvisées et un tournage mobile à Tokyo transforment le décalage horaire et le dépaysement culturel en forme cinématographique.",
      "Uma pequena equipa, a fotografia em 35 mm, material improvisado e filmagens rápidas em Tóquio transformam o jet lag e o deslocamento cultural na forma do filme.",
    ],
    [
      "The case became a durable example of how location, music and incomplete intimacy can organize a feature more strongly than conventional plot mechanics.",
      "Filmen ble et varig eksempel på hvordan steder, musikk og ufullendt nærhet kan strukturere en spillefilm sterkere enn konvensjonell handlingsoppbygging.",
      "Le film est devenu un exemple durable de la manière dont les lieux, la musique et une intimité inachevée peuvent structurer un long métrage plus fortement qu'une intrigue conventionnelle.",
      "O filme tornou-se um exemplo duradouro de como os lugares, a música e a intimidade incompleta podem estruturar uma longa-metragem mais do que os mecanismos convencionais do enredo.",
    ],
    [
      "Which production history best explains why Tokyo feels like both a real city and a subjective dream?",
      "Hvilken produksjonshistorie forklarer best hvorfor Tokyo oppleves både som en virkelig by og som en subjektiv drøm?",
      "Quelle histoire de production explique le mieux pourquoi Tokyo paraît à la fois une ville réelle et un rêve subjectif ?",
      "Que história de produção explica melhor por que razão Tóquio parece simultaneamente uma cidade real e um sonho subjetivo?",
    ],
    [
      "The film was made with a small mobile crew working rapidly in Tokyo locations.",
      "Filmen ble laget av et lite, mobilt team som arbeidet raskt på opptakssteder i Tokyo.",
      "Le film a été réalisé par une petite équipe mobile travaillant rapidement dans des lieux de Tokyo.",
      "O filme foi realizado por uma pequena equipa móvel que trabalhou rapidamente em locais de Tóquio.",
    ],
    [
      "Direction allows pauses, observation and improvisation to shape the emotional line.",
      "Regien lar pauser, observasjon og improvisasjon forme den følelsesmessige utviklingen.",
      "La mise en scène laisse les pauses, l'observation et l'improvisation façonner la trajectoire émotionnelle.",
      "A realização permite que pausas, observação e improvisação moldem a trajetória emocional.",
    ],
    [
      "Intimacy is carried through restrained behavior, glances and partially improvised encounters.",
      "Nærheten formidles gjennom tilbakeholdent spill, blikk og delvis improviserte møter.",
      "L'intimité passe par des gestes retenus, des regards et des rencontres partiellement improvisées.",
      "A intimidade é transmitida através de comportamentos contidos, olhares e encontros parcialmente improvisados.",
    ],
    [
      "The Park Hyatt and Tokyo locations operate as emotional architecture rather than neutral backgrounds.",
      "Park Hyatt og opptaksstedene i Tokyo fungerer som følelsesladet arkitektur, ikke som nøytrale bakgrunner.",
      "Le Park Hyatt et les lieux de Tokyo constituent une architecture émotionnelle plutôt que de simples décors neutres.",
      "O Park Hyatt e os locais de Tóquio funcionam como arquitetura emocional, e não como cenários neutros.",
    ],
    [
      "Production reporting documents 35mm photography.",
      "Produksjonsreportasjer dokumenterer opptak på 35 mm.",
      "Les reportages de production attestent l'emploi du 35 mm.",
      "As reportagens de produção documentam a fotografia em 35 mm.",
    ],
    [
      "Dream-pop references, karaoke and curated music are structural parts of the film's emotional world.",
      "Referanser til drømmepop, karaoke og nøye utvalgt musikk er strukturelle deler av filmens følelsesverden.",
      "Les références à la dream pop, le karaoké et la musique choisie avec soin structurent l'univers émotionnel du film.",
      "As referências à dream pop, o karaoke e a música cuidadosamente selecionada estruturam o universo emocional do filme.",
    ],
    [
      "The mobile location practice borrows observational immediacy without becoming documentary.",
      "Den mobile arbeidsmåten på opptakssteder låner observasjonens umiddelbarhet uten å bli dokumentar.",
      "Le tournage mobile en décors réels emprunte l'immédiateté de l'observation sans devenir documentaire.",
      "A prática móvel de filmagem em locais reais utiliza a imediatez da observação sem se tornar documental.",
    ],
  ],
  scenario_12_angry_men_1957: [
    ["Late-classical American chamber cinema adapted from television",
     "Amerikansk kammerfilm fra den sene klassiske perioden, basert på fjernsynsdrama",
     "Cinéma de chambre américain de la fin de l'âge classique, adapté de la télévision",
     "Cinema de câmara americano do fim do período clássico, adaptado da televisão"],
    ["Television-to-film adaptation", "Fra fjernsyn til film", "Adaptation de la télévision au cinéma", "Adaptação da televisão ao cinema"],
    ["Courtroom and jury drama", "Rettssals- og jurydrama", "Drame judiciaire et de jury", "Drama judicial e de júri"],
    ["One-room ensemble staging", "Ensemblespill i ett rom", "Mise en scène chorale dans une seule pièce", "Encenação de conjunto numa única sala"],
    ["The project grows from live television drama and the theatrical tradition of concentrating conflict in one room.",
     "Prosjektet springer ut av direktesendt fjernsynsdrama og teatertradisjonen med å samle konflikten i ett rom.",
     "Le projet est issu du téléthéâtre en direct et de la tradition théâtrale consistant à concentrer le conflit dans une seule pièce.",
     "O projeto nasce do teleteatro em direto e da tradição teatral de concentrar o conflito numa única sala."],
    ["A lean 17-day production turns planned blocking, lens progression, faces and argument rhythm into cinematic escalation inside a single jury room.",
     "En stram produksjon på 17 dager gjør planlagte skuespillerposisjoner, gradvise objektivvalg, ansikter og argumentasjonens rytme til en filmatisk opptrapping i ett juryrom.",
     "Un tournage resserré de 17 jours transforme les déplacements planifiés, l'évolution des focales, les visages et le rythme des débats en montée dramatique au sein d'une seule salle des jurés.",
     "Uma produção concentrada de 17 dias transforma a marcação de atores, a progressão das objetivas, os rostos e o ritmo dos argumentos numa escalada cinematográfica dentro de uma única sala de jurados."],
    ["It remains a foundational teaching case for converting limited space into visual, editorial and performance development.",
     "Filmen er fortsatt et grunnleggende undervisningseksempel på hvordan begrenset rom kan skape utvikling i bildearbeid, klipp og skuespill.",
     "Le film reste un cas pédagogique fondamental pour montrer comment un espace restreint peut faire évoluer l'image, le montage et le jeu.",
     "O filme continua a ser um caso pedagógico fundamental sobre como transformar um espaço limitado em desenvolvimento visual, de montagem e de interpretação."],
    ["Which historical origin best explains the film's concentration on ensemble argument and planned camera progression?",
     "Hvilket historisk opphav forklarer best filmens vekt på ensembledebatt og planlagt kamerautvikling?",
     "Quelle origine historique explique le mieux la place accordée au débat choral et à la progression planifiée de la caméra ?",
     "Que origem histórica explica melhor o enfoque do filme no debate de conjunto e na progressão planeada da câmara?"],
    ["The feature developed from a television drama and was produced through a tightly planned 17-day shoot.",
     "Spillefilmen ble utviklet fra et fjernsynsdrama og spilt inn gjennom en nøye planlagt opptaksperiode på 17 dager.",
     "Le long métrage est issu d'un télédrame et a été tourné selon un calendrier rigoureux de 17 jours.",
     "A longa-metragem nasceu de um drama televisivo e foi rodada segundo um plano rigoroso de 17 dias."],
    ["Sidney Lumet organizes power through blocking, rehearsal and a gradual change in camera distance.",
     "Sidney Lumet skildrer makt gjennom skuespillerplassering, prøver og en gradvis endring i kameraavstanden.",
     "Sidney Lumet organise les rapports de pouvoir par les déplacements, les répétitions et une modification progressive de la distance de la caméra.",
     "Sidney Lumet organiza as relações de poder através da marcação, dos ensaios e da mudança gradual da distância da câmara."],
    ["The ensemble's shifting alliances and reactions carry the film's action.",
     "Ensemblets skiftende allianser og reaksjoner driver filmens handling.",
     "Les alliances changeantes et les réactions de la troupe portent l'action du film.",
     "As alianças mutáveis e as reações do elenco sustentam a ação do filme."],
    ["A single jury-room set is treated as an increasingly compressed dramatic machine.",
     "Juryrommet behandles som et dramatisk maskineri som oppleves stadig trangere.",
     "Le décor unique de la salle des jurés devient une machine dramatique de plus en plus oppressante.",
     "O cenário único da sala de jurados funciona como uma máquina dramática cada vez mais opressiva."],
    ["The room's changing pressure is visible, but lighting still needs dedicated source review.",
     "Det økende presset i rommet er synlig, men lyssettingen krever fortsatt en egen kildegjennomgang.",
     "La pression croissante dans la pièce est perceptible, mais l'éclairage nécessite encore une vérification documentaire spécifique.",
     "A pressão crescente na sala é visível, mas a iluminação ainda exige uma verificação documental específica."],
    ["The documented lens progression moves from wider views toward telephoto compression and faces.",
     "Den dokumenterte objektivutviklingen går fra videre utsnitt mot telekompresjon og ansikter.",
     "La progression documentée des focales passe de plans larges à la compression au téléobjectif et aux visages.",
     "A progressão documentada das objetivas passa de planos mais abertos à compressão por teleobjetiva e aos rostos."],
    ["Effects are not central to the chamber-drama method.",
     "Effekter står ikke sentralt i kammerdramaets metode.",
     "Les effets ne sont pas essentiels à la méthode du drame de chambre.",
     "Os efeitos não são centrais ao método do drama de câmara."],
    ["The case is a staged dramatic adaptation rather than documentary practice.",
     "Dette er en iscenesatt dramatisering, ikke dokumentarisk praksis.",
     "Il s'agit d'une adaptation dramatique mise en scène, et non d'une démarche documentaire.",
     "Trata-se de uma adaptação dramática encenada, e não de uma prática documental."],
  ],
  scenario_the_machinist_2004: [
    ["Early-2000s transnational psychological thriller",
     "Transnasjonal psykologisk thriller fra tidlig 2000-tall",
     "Thriller psychologique transnational du début des années 2000",
     "Thriller psicológico transnacional do início dos anos 2000"],
    ["Psychological thriller", "Psykologisk thriller", "Thriller psychologique", "Thriller psicológico"],
    ["Industrial-location cinema", "Film med industrielle opptakssteder", "Cinéma tourné dans des lieux industriels", "Cinema rodado em locais industriais"],
    ["35mm production", "35 mm-produksjon", "Production en 35 mm", "Produção em 35 mm"],
    ["It draws on subjective thrillers that make perception, guilt and bodily experience unreliable.",
     "Filmen bygger på subjektive thrillere der sansning, skyld og kroppslig erfaring blir upålitelige.",
     "Le film s'inscrit dans la lignée des thrillers subjectifs où perception, culpabilité et expérience corporelle deviennent incertaines.",
     "O filme segue a tradição dos thrillers subjetivos em que a perceção, a culpa e a experiência corporal se tornam pouco fiáveis."],
    ["A Barcelona-based production removes clear cultural markers and turns industrial locations, 35mm texture and mechanical sound into an unnamed nightmare world.",
     "En produksjon med base i Barcelona fjerner tydelige kulturelle kjennetegn og gjør industrimiljøer, 35 mm-filmens tekstur og mekaniske lyder til en navnløs marerittverden.",
     "Une production établie à Barcelone efface les repères culturels explicites et transforme les lieux industriels, la texture du 35 mm et les sons mécaniques en un univers cauchemardesque sans nom.",
     "Uma produção sediada em Barcelona apaga referências culturais explícitas e transforma locais industriais, a textura dos 35 mm e os sons mecânicos num mundo de pesadelo sem nome."],
    ["The case shows how a modest transnational production can create a distinctive psychological space without relying on large-scale spectacle.",
     "Eksempelet viser hvordan en beskjeden transnasjonal produksjon kan skape et særegent psykologisk rom uten å støtte seg på stort spektakel.",
     "Ce cas montre comment une production transnationale modeste peut créer un espace psychologique singulier sans recourir au grand spectacle.",
     "O caso mostra como uma produção transnacional modesta pode criar um espaço psicológico singular sem depender de espetáculo em grande escala."],
    ["Which historical position best explains how The Machinist turns production limits into an aesthetic system?",
     "Hvilken filmhistorisk plassering forklarer best hvordan The Machinist gjør produksjonsbegrensninger til et estetisk system?",
     "Quel contexte historique explique le mieux la manière dont The Machinist transforme ses contraintes de production en système esthétique ?",
     "Que contexto histórico explica melhor como The Machinist transforma as limitações de produção num sistema estético?"],
    ["The production used Barcelona-area locations to construct a deliberately displaced industrial world.",
     "Produksjonen brukte opptakssteder i Barcelona-området for å skape en bevisst fremmedgjort industriverden.",
     "La production a utilisé des lieux de tournage autour de Barcelone pour construire un monde industriel volontairement délocalisé.",
     "A produção utilizou locais na zona de Barcelona para construir um mundo industrial deliberadamente deslocado."],
    ["Direction organizes mundane objects, bodily deterioration and an old-fashioned nightmare rhythm around subjective pressure.",
     "Regien samler hverdagsgjenstander, kroppslig forfall og en gammeldags marerittrytme rundt et subjektivt press.",
     "La mise en scène organise les objets ordinaires, la dégradation du corps et un rythme de cauchemar à l'ancienne autour d'une pression subjective.",
     "A realização organiza objetos banais, deterioração física e um ritmo de pesadelo à moda antiga em torno da pressão subjetiva."],
    ["Industrial, transport and amusement locations form the film's hostile physical system.",
     "Industriområder, transportmiljøer og fornøyelsessteder utgjør filmens fiendtlige fysiske system.",
     "Les lieux industriels, de transport et de divertissement forment le système physique hostile du film.",
     "Locais industriais, de transporte e de diversão compõem o sistema físico hostil do filme."],
    ["Institutional production records confirm 35mm capture.",
     "Institusjonelle produksjonsregistre bekrefter opptak på 35 mm-film.",
     "Les archives institutionnelles de production confirment une prise de vues en 35 mm.",
     "Os registos institucionais da produção confirmam a captação em película de 35 mm."],
    ["Music belongs inside the wider restrained sound system, but still needs its own source review.",
     "Musikken inngår i det større, tilbakeholdne lydbildet, men trenger fortsatt egen kildegjennomgang.",
     "La musique participe au dispositif sonore plus large et retenu, mais exige encore une vérification documentaire particulière.",
     "A música integra o dispositivo sonoro mais amplo e contido, mas ainda necessita de verificação documental própria."],
    ["The case is driven primarily by performance, location, image and sound rather than effects spectacle.",
     "Filmen drives først og fremst av skuespill, opptakssteder, bilde og lyd, ikke av effektspektakel.",
     "Ce cas repose avant tout sur le jeu, les lieux, l'image et le son, plutôt que sur des effets spectaculaires.",
     "O caso assenta sobretudo na interpretação, nos locais, na imagem e no som, e não no espetáculo de efeitos."],
    ["Documentary method is not central to this fiction case.",
     "Dokumentarisk metode står ikke sentralt i denne fiksjonsfilmen.",
     "La méthode documentaire n'est pas centrale dans ce cas de fiction.",
     "O método documental não é central neste caso de ficção."],
  ],
  scenario_the_lives_of_others_2006: [
    ["Post-reunification German historical cinema",
     "Tysk historisk film etter gjenforeningen",
     "Cinéma historique allemand d'après la réunification",
     "Cinema histórico alemão posterior à reunificação"],
    ["Political surveillance drama", "Politisk overvåkingsdrama", "Drame politique de surveillance", "Drama político de vigilância"],
    ["Historical reconstruction", "Historisk rekonstruksjon", "Reconstitution historique", "Reconstituição histórica"],
    ["Moral chamber drama", "Moralsk kammerdrama", "Drame moral de chambre", "Drama moral de câmara"],
    ["The film inherits the political thriller's interest in institutions, observation and compromised private life.",
     "Filmen viderefører den politiske thrillerens interesse for institusjoner, overvåking og et privatliv under press.",
     "Le film hérite de l'intérêt du thriller politique pour les institutions, l'observation et la vie privée compromise.",
     "O filme herda o interesse do thriller político pelas instituições, pela observação e pela vida privada comprometida."],
    ["Made after German reunification, it reconstructs the analogue surveillance culture of the GDR through researched spaces, listening technology and restrained performance.",
     "Filmen ble laget etter den tyske gjenforeningen og gjenskaper DDRs analoge overvåkingskultur gjennom grundig undersøkte miljøer, avlyttingsteknologi og tilbakeholdent skuespill.",
     "Réalisé après la réunification allemande, le film reconstitue la culture de surveillance analogique de la RDA grâce à des lieux documentés, des technologies d'écoute et un jeu retenu.",
     "Realizado após a reunificação alemã, o filme reconstitui a cultura de vigilância analógica da RDA através de espaços investigados, tecnologias de escuta e interpretações contidas."],
    ["It demonstrates how recent political history can be taught through procedure, sound, design and incremental moral change rather than exposition alone.",
     "Filmen viser hvordan nyere politisk historie kan formidles gjennom prosedyrer, lyd, scenografi og gradvis moralsk endring, ikke bare gjennom forklarende dialog.",
     "Il montre comment enseigner l'histoire politique récente par les procédures, le son, les décors et une évolution morale progressive, plutôt que par la seule exposition.",
     "Mostra como a história política recente pode ser ensinada através de procedimentos, som, cenografia e mudança moral gradual, e não apenas por exposição verbal."],
    ["Which historical lens best connects the GDR subject to the film's listening-based craft?",
     "Hvilket historisk perspektiv knytter best DDR-tematikken til filmens lyd- og lyttebaserte virkemidler?",
     "Quelle perspective historique relie le mieux le sujet de la RDA au travail cinématographique fondé sur l'écoute ?",
     "Que perspetiva histórica relaciona melhor o tema da RDA com os recursos cinematográficos assentes na escuta?"],
    ["The case is grounded in research into Stasi practice and GDR visual culture.",
     "Eksempelet bygger på undersøkelser av Stasis praksis og DDRs visuelle kultur.",
     "Ce cas s'appuie sur des recherches sur les pratiques de la Stasi et la culture visuelle de la RDA.",
     "O caso baseia-se em investigação sobre as práticas da Stasi e a cultura visual da RDA."],
    ["The low-budget production built historical credibility through research, locations, analogue equipment and controlled design.",
     "Lavbudsjettproduksjonen skapte historisk troverdighet gjennom undersøkelser, opptakssteder, analogt utstyr og gjennomført scenografi.",
     "La production à petit budget a construit sa crédibilité historique par la recherche, les lieux de tournage, le matériel analogique et une direction artistique maîtrisée.",
     "A produção de baixo orçamento construiu credibilidade histórica através de pesquisa, locais, equipamento analógico e cenografia controlada."],
    ["Direction keeps moral transformation small, procedural and performance-led.",
     "Regien lar den moralske forandringen være dempet, knyttet til prosedyrer og båret av skuespillet.",
     "La mise en scène rend la transformation morale discrète, procédurale et portée par le jeu des acteurs.",
     "A realização mantém a transformação moral subtil, processual e conduzida pela interpretação."],
    ["Restrained acting supports the conflict between institutional duty and private conscience.",
     "Tilbakeholdent skuespill understøtter konflikten mellom institusjonell plikt og personlig samvittighet.",
     "Un jeu retenu soutient le conflit entre devoir institutionnel et conscience individuelle.",
     "A interpretação contida sustenta o conflito entre dever institucional e consciência privada."],
    ["Muted interiors and period surveillance equipment make the political system tangible.",
     "Dempede interiører og tidstypisk overvåkingsutstyr gjør det politiske systemet håndgripelig.",
     "Des intérieurs sourds et des appareils de surveillance d'époque rendent le système politique tangible.",
     "Interiores de tons apagados e equipamento de vigilância da época tornam o sistema político tangível."],
    ["Historical research informs the fiction, although the film is not a documentary.",
     "Historiske undersøkelser ligger til grunn for fiksjonen, selv om filmen ikke er en dokumentar.",
     "La recherche historique nourrit la fiction, bien que le film ne soit pas un documentaire.",
     "A investigação histórica informa a ficção, embora o filme não seja um documentário."],
    ["Effects are not central to the film's historical or dramatic method.",
     "Effekter står ikke sentralt i filmens historiske eller dramatiske metode.",
     "Les effets ne sont pas essentiels à la démarche historique ou dramatique du film.",
     "Os efeitos não são centrais ao método histórico ou dramático do filme."],
  ],
} as const satisfies Readonly<Record<string, readonly HistoryTextRow[]>>;

const GENERIC_CHOICE_FEEDBACK: readonly HistoryTextRow[] = [
  ["This connects the film's historical position directly to its documented production method.",
   "Dette knytter filmens historiske plassering direkte til den dokumenterte produksjonsmetoden.",
   "Cela relie directement la place historique du film à sa méthode de production documentée.",
   "Isto relaciona diretamente a posição histórica do filme com o seu método de produção documentado."],
  ["This is a real film-historical explanation, but it belongs to a different case and production tradition.",
   "Dette er en reell filmhistorisk forklaring, men den gjelder en annen film og produksjonstradisjon.",
   "C'est une explication historique valable, mais elle concerne un autre film et une autre tradition de production.",
   "Esta é uma explicação histórica válida, mas pertence a outro filme e a outra tradição de produção."],
  ["This places the film inside the wrong historical and technical system.",
   "Dette plasserer filmen i feil historisk og teknisk system.",
   "Cela situe le film dans un système historique et technique erroné.",
   "Isto coloca o filme num sistema histórico e técnico errado."],
];

const presentationByScenario: ReadonlyMap<string, ReadonlyMap<string, HistoryTextRow>> = new Map(
  Object.entries(FILM_HISTORY_PRESENTATION_ROWS).map(([scenarioId, rows]) => [
    scenarioId, new Map<string, HistoryTextRow>([...rows, ...GENERIC_CHOICE_FEEDBACK].map((row) => [row[0], row])),
  ]),
);

export function presentVerifiedFilmHistoryText(
  language: FilmWorkLanguage,
  scenarioId: string,
  original: string,
): string {
  if (language === "en") return original;
  const row = presentationByScenario.get(scenarioId)?.get(original);
  if (!row) return original;
  return row[language === "nb" ? 1 : language === "fr" ? 2 : 3];
}

/** Match options and source-backed donor distractors are translated in the display layer only. */
export function presentVerifiedFilmHistoryChoice(
  language: FilmWorkLanguage,
  scenarioId: string,
  originalLabel: string,
  quality: "match" | "partial" | "miss" = "match",
): string {
  if (language === "en") return originalLabel;
  if (quality !== "match") return presentVerifiedFilmStudyDonorChoice(language, scenarioId, quality, originalLabel);
  const rows = FILM_HISTORY_PRESENTATION_ROWS[scenarioId as keyof typeof FILM_HISTORY_PRESENTATION_ROWS];
  if (!rows) return originalLabel;
  const canonicalPeriod = rows[0]?.[0];
  const translatedPeriod = rows[0]?.[language === "nb" ? 1 : language === "fr" ? 2 : 3];
  const canonicalMoment = rows[5]?.[0];
  const translatedMoment = rows[5]?.[language === "nb" ? 1 : language === "fr" ? 2 : 3];
  return canonicalPeriod && canonicalMoment && translatedPeriod && translatedMoment
    && originalLabel === `${canonicalPeriod}: ${canonicalMoment}`
    ? `${translatedPeriod}: ${translatedMoment}`
    : originalLabel;
}

/**
 * Deliberately shorter, source-locked title for the reviewed film
 * exercises. The full historical statement must remain independently readable.
 * Other films and changed canonical statements retain the original answer UI.
 */
export function presentVerifiedFilmHistoryChoiceSummary(
  language: FilmWorkLanguage,
  scenarioId: string,
  originalLabel: string,
  quality: "match" | "partial" | "miss",
): string | undefined {
  const rows = FILM_HISTORY_PRESENTATION_ROWS[scenarioId as keyof typeof FILM_HISTORY_PRESENTATION_ROWS];
  if (!rows) return undefined;
  if (quality !== "match") {
    return presentVerifiedFilmStudyDonorChoiceSummary(language, scenarioId, quality, originalLabel);
  }
  const period = rows[0]?.[0];
  const moment = rows[5]?.[0];
  if (!period || !moment || originalLabel !== `${period}: ${moment}`) return undefined;
  return presentVerifiedFilmHistoryText(language, scenarioId, period);
}
