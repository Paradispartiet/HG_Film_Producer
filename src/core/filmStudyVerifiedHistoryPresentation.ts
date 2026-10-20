import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { presentVerifiedFilmStudyDonorChoice } from "./filmStudyVerifiedDonorChoices.js";

/**
 * Source-locked presentation for the first three verified film-history cases.
 * Canonical profile/choice/source data and grading are never changed.
 * Each row is [exact canonical English text, Norwegian, French, Portuguese].
 * Unknown claims, donor-film distractors and source citations stay canonical
 * until their own source-based editorial translation is reviewed.
 */
type HistoryTextRow = readonly [canonical: string, nb: string, fr: string, pt: string];

export const FILM_HISTORY_PRESENTATION_ROWS = {
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
