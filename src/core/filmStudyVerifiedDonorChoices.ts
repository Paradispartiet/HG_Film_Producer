import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

/**
 * Six display-only translations of exact source-backed distractor options.
 * The immutable label is selected by the existing Film Study quiz; fingerprint
 * and source ID are audited against the real data module in CI.
 * Nothing in this file changes the question, the donor, the choice ID or grade.
 */
type DonorChoice = {
  readonly donorScenarioId: string;
  readonly canonicalLength: number;
  readonly canonicalHash: number;
  readonly preview: string;
  readonly text: Readonly<Record<"nb" | "fr" | "pt", string>>;
};

export const FILM_STUDY_VERIFIED_DONOR_CHOICES: Readonly<
  Record<string, Partial<Record<"partial" | "miss", DonorChoice>>>
> = {
  scenario_12_angry_men_1957: {
    partial: {
      donorScenarioId: "scenario_the_fall_of_the_romanov_dynasty_1927",
      canonicalLength: 486,
      canonicalHash: 413694069,
      preview: "1927 Soviet compilation documentary",
      text: {
        nb: `Sovjetisk montasjedokumentar fra 1927, der Esfir Shub bruker arkivsøk, utvalg, bevaring, mellomtekster og klipping til å fremme et nytt syn på Romanov-regimet og revolusjonen: BFI dokumenterer at Shub brukte to måneder på å lete i arkiver i Leningrad, samarbeidet med forskeren Mark Tseitlin og klippet omkring 60 000 meter materiale ned til rundt 1 500 meter. Produksjonen er derfor avhengig av arkivarbeid, dokumentert opphav og redaksjonelle valg snarere enn ordinære filmopptak.`,
        fr: `Documentaire soviétique de montage de 1927 dans lequel Esfir Shub transforme la recherche en archives, la sélection, la conservation, les intertitres et le montage en une nouvelle argumentation sur le régime des Romanov et la révolution : le BFI indique que Shub a passé deux mois à explorer les archives de Leningrad, a travaillé avec le chercheur Mark Tseitlin et a réduit environ 60 000 mètres de pellicule à quelque 1 500 mètres. La production dépend donc du travail archivistique, de la provenance des documents et des choix de montage plutôt que d'un tournage principal.`,
        pt: `Documentário soviético de montagem de 1927 em que Esfir Shub transforma a pesquisa em arquivos, a seleção, a preservação, os intertítulos e a montagem num novo argumento sobre o regime Romanov e a revolução: o BFI regista que Shub passou dois meses a pesquisar arquivos em Leninegrado, trabalhou com o investigador Mark Tseitlin e reduziu cerca de 60 000 metros de material a aproximadamente 1 500 metros. A produção depende, portanto, do trabalho de arquivo, da proveniência dos documentos e da seleção editorial, e não de filmagens principais.`,
      },
    },
    miss: {
      donorScenarioId: "scenario_dunkirk_2017",
      canonicalLength: 949,
      canonicalHash: 378682035,
      preview: "2017 digital-convergence countercurrent",
      text: {
        nb: `En motstrøm til digital konvergens i 2017: Sammenvevde tidsforløp på land, til sjøs og i luften, filmet på 15-perforasjons IMAX og 5-perforasjons 65 mm-negativ, med logistikk for opptak på land, i luften og til sjøs, praktiske effekter supplert av usynlige digitale effekter i 6,1K, fotokjemisk ferdigstilling og samlet press fra klipp, lyd og musikk: Dunkirk knytter tre fiktive overlevelsesforløp med ulik varighet til et produksjonsopplegg med virkelige strender og tidevann, arbeid på sjøen, fly, vanntanker og to storformatkameraer. Omtrent 70–75 prosent av den ferdige filmen oppgis å være filmet med 15-perforasjons IMAX, mens roligere scener med dialog hovedsakelig bruker 5-perforasjons 65 mm. Kjøretøy i full størrelse, miniatyrer, praktiske effekter, statister og silhuettfigurer gir fysiske elementer; 429 VFX-opptak i 6,1K utvider og reparerer dem. FotoKem og Dan Muscarella bevarer en fotokjemisk ferdigstilling. Lee Smith, Richard King og Hans Zimmer samordner bilde, opptakslyd, utformet lyd, tikkelyder og en Shepard-lignende spenningsoppbygging til de tre tidslinjene møtes.`,
        fr: `Contre-courant de la convergence numérique en 2017 : durées entrelacées sur terre, en mer et dans les airs, tournées sur négatif IMAX à 15 perforations et 65 mm à 5 perforations, logistique des lieux, des avions et des bateaux, éléments pratiques complétés d'effets visuels invisibles en 6,1K, finition photochimique et tension coordonnée entre montage, son et musique : Dunkirk relie trois parcours fictifs de survie, de durées différentes, à des tournages sur de vraies plages soumises aux marées, en mer, dans les airs et en bassins, avec deux caméras grand format. Environ 70 à 75 % du film fini aurait été tourné en IMAX à 15 perforations, le 65 mm à 5 perforations servant surtout aux dialogues plus calmes. Véhicules grandeur nature, miniatures, effets pratiques, figurants et silhouettes découpées fournissent des éléments physiques ; 429 plans à effets visuels en 6,1K les prolongent ou les corrigent. FotoKem et Dan Muscarella préservent une finition photochimique. Lee Smith, Richard King et Hans Zimmer coordonnent image, sons directs, création sonore, tic-tac et montée de tension de type Shepard jusqu'à la convergence des trois temporalités.`,
        pt: `Contracorrente da convergência digital em 2017: durações entrelaçadas em terra, no mar e no ar, captadas em negativo IMAX de 15 perfurações e 65 mm de 5 perfurações, logística de locais, aviões e barcos, efeitos práticos complementados por efeitos visuais discretos em 6,1K, acabamento fotoquímico e tensão integrada entre montagem, som e música: Dunkirk liga três percursos ficcionais de sobrevivência com durações diferentes a uma produção em praias e marés reais, no mar, com aviões, tanques de água e duas câmaras de grande formato. Cerca de 70 a 75% do filme final terá sido captado em IMAX de 15 perfurações, enquanto as cenas de diálogo mais calmas utilizaram sobretudo 65 mm de 5 perfurações. Veículos à escala real, miniaturas, efeitos práticos, figurantes e silhuetas recortadas oferecem elementos físicos; 429 planos de efeitos visuais em 6,1K prolongam-nos e corrigem-nos. FotoKem e Dan Muscarella preservam um acabamento fotoquímico. Lee Smith, Richard King e Hans Zimmer articulam imagem, som direto, desenho sonoro, tiquetaque e uma escalada de tensão semelhante à ilusão de Shepard até as três linhas temporais convergirem.`,
      },
    },
  },
  scenario_the_machinist_2004: {
    partial: {
      donorScenarioId: "scenario_robocop_1987",
      canonicalLength: 902,
      canonicalHash: 3672357580,
      preview: "mid-1980s Orion/Tobor production",
      text: {
        nb: `Orion/Tobor-produksjon fra midten av 1980-årene, med hovedopptak fra august til begynnelsen av november 1986, kinopremiere i 1987 og senere utvidelse til en filmserie: AFI dokumenterer produksjonsstart 6. august 1986, med arkitektur i Dallas og studioer i Las Colinas som et fiktivt Detroit, før sluttarbeidet ble flyttet til stålverket Wheeling-Pittsburgh. Tidsplanen ble utvidet, budsjettet økte fra 11 til 13,1 millioner dollar, og Orion godkjente senere ytterligere 600 000 dollar til lydeffekter og symfonisk filmmusikk i etterarbeidet. Rob Bottins RoboCop-drakt på 25 pund, Peter Wellers og Moni Yakims fire måneders bevegelsesarbeid, Phil Tippetts ED-209-system med fullskalamodeller og miniatyrer, andre avdelinger for optiske effekter, mattebilder og praktiske effekter, Jost Vacanos subjektive kameraføring, Frank J. Uriostes klipp, lagdelt lydredigering og miks samt Basil Poledouris' musikk beskrives som samordnede, men separate produksjonssystemer.`,
        fr: `Production Orion/Tobor du milieu des années 1980, avec prises de vues principales d'août à début novembre 1986, sortie en salles en 1987 puis développement ultérieur de la franchise : l'AFI documente un tournage commencé le 6 août 1986, utilisant l'architecture de Dallas et les studios de Las Colinas pour représenter un Detroit fictif, avant les scènes finales tournées à l'aciérie Wheeling-Pittsburgh. Le calendrier s'est allongé, le budget est passé de 11 à 13,1 millions de dollars, puis Orion a approuvé 600 000 dollars supplémentaires pour les effets sonores de postproduction et la partition symphonique. Le costume RoboCop de Rob Bottin, pesant vingt-cinq livres, les quatre mois de travail corporel de Peter Weller et Moni Yakim, le dispositif ED-209 grandeur nature et miniature de Phil Tippett, les autres équipes d'effets optiques, de caches et d'effets pratiques, la caméra subjective de Jost Vacano, le montage de Frank J. Urioste, le montage et le mixage sonores à plusieurs niveaux ainsi que la musique de Basil Poledouris sont décrits comme des systèmes de production coordonnés mais distincts.`,
        pt: `Produção Orion/Tobor de meados dos anos 1980, com filmagens principais de agosto ao início de novembro de 1986, estreia em sala em 1987 e posterior expansão da franquia: o AFI documenta o início da produção em 6 de agosto de 1986, utilizando a arquitetura de Dallas e os estúdios de Las Colinas para representar uma Detroit ficcional, antes das filmagens finais na siderurgia Wheeling-Pittsburgh. O calendário foi prolongado, o orçamento subiu de 11 para 13,1 milhões de dólares e a Orion aprovou depois mais 600 000 dólares para efeitos sonoros de pós-produção e partitura sinfónica. O fato RoboCop de Rob Bottin, com vinte e cinco libras, os quatro meses de trabalho de movimento de Peter Weller e Moni Yakim, o sistema ED-209 à escala real e em miniatura de Phil Tippett, as restantes equipas de efeitos óticos, pinturas matte e efeitos práticos, a estratégia de câmara subjetiva de Jost Vacano, a montagem de Frank J. Urioste, a edição e mistura de som em camadas e a música de Basil Poledouris são tratados como sistemas de produção coordenados, mas distintos.`,
      },
    },
    miss: {
      donorScenarioId: "scenario_avatar_the_way_of_water_2022",
      canonicalLength: 1868,
      canonicalHash: 1125186761,
      preview: "2022 mature virtual production",
      text: {
        nb: `Moden virtuell filmproduksjon i 2022: undervannsopptak av skuespillerprestasjoner, virtuell kameraføring, stereoskopiske realopptak, høy bildefrekvens (HFR) og omfattende digitale effekter for vann og ansikter: The Way of Water organiserer produksjonen rundt at skuespill, kamera og sluttbilde først skilles og deretter knyttes sammen igjen. 20th Century Studios oppgir at James Camerons film varer 192 minutter, med Cameron og Jon Landau som produsenter. American Cinematographer dokumenterer fotograf Russell Carpenter ASC, et spesialbygget undervannsområde for opptak av skuespillerbevegelser, forskning på markører i nær-ultrafiolett lys fordi vanlig infrarødt lys fungerte dårlig under vann, flytende perler som dempet refleksjoner i overflaten som forstyrret registreringen, fysiske gjenstander i tanken som skuespillerne kunne samhandle med, og et referansevideosystem med 12–16 kameraer. Cameron forteller at han la fra seg det virtuelle kameraet etter grov iscenesettelse for å prioritere skuespillet, og først senere brukte virtuell kameraføring til å velge bildeutsnitt av prestasjonene. Simulcam og dybdebevisst integrasjon knyttet fysiske og digitale rom sammen under realopptakene. Det stereoskopiske realopptakssystemet brukte Sony VENICE/Rialto-deler i en ombygd Fusion-rigg, med utvalgte opptak i 48 bilder per sekund for å gi tydeligere bevegelse og bedre 3D-visning. Weta FX dokumenterer 3 240 VFX-opptak, hvorav 2 225 vannopptak, samt nye systemer for simulering av vann, ansiktsanimasjon ut fra deformasjon, øyelinjer fra kabelkamera og sanntidskompositering med dybdeinformasjon. The Third Floor dokumenterer forhåndsvisualisering, oppbygging av miljøer, arbeid med Weta Gazebo VCAM, skanning av fysiske sett til teknisk planlegging og Simulcam-støtte under opptak. Klipperen Stephen Rivkin beskriver en arbeidsrekkefølge styrt av skuespillet: velg opptak av prestasjonene, legg til figurer og miljøer, bygg virtuelle kamerainnstillinger, godkjenn dem og gå videre mot Weta FX' endelige rendering og maler for realopptak. Lydteamet beskriver en miks der tydelighet prioriteres og konkurrerende lyder dempes i en visuelt og teknisk tett film.`,
        fr: `Production virtuelle aboutie en 2022 : capture de performance sous-marine, photographie virtuelle, prises de vues réelles stéréoscopiques, fréquence d'images élevée (HFR) et effets visuels massifs pour l'eau et les visages : The Way of Water organise la fabrication autour de la séparation puis de la réunion du jeu, de la caméra et de l'image finale. 20th Century Studios indique qu'il s'agit d'un film de James Cameron de 192 minutes, produit par Cameron et Jon Landau. American Cinematographer documente Russell Carpenter ASC à la photographie, un volume de capture de performance sous-marin sur mesure, des recherches sur les marqueurs en proche ultraviolet parce que l'infrarouge classique fonctionnait mal dans l'eau, des billes flottantes réduisant les reflets de surface qui perturbaient la capture, des objets physiques permettant l'interaction dans le bassin et un dispositif vidéo de référence de 12 à 16 caméras. Cameron explique avoir écarté la caméra virtuelle après la mise en place initiale pour donner la priorité au jeu, puis être revenu à la photographie virtuelle afin de cadrer les performances sélectionnées. Simulcam et l'intégration tenant compte de la profondeur ont relié les espaces physiques et numériques pendant les prises de vues réelles. Le système stéréoscopique réel utilisait des composants Sony VENICE/Rialto dans un dispositif Fusion modifié ; certaines séquences à 48 images par seconde amélioraient la lisibilité des mouvements et la 3D. Weta FX documente 3 240 plans à effets visuels, dont 2 225 plans d'eau, ainsi que de nouveaux systèmes de simulation de l'eau, de rendu facial fondé sur la déformation, de lignes de regard par caméra sur câble et de composition en temps réel tenant compte de la profondeur. The Third Floor documente la prévisualisation, l'assemblage des environnements, le travail avec Weta Gazebo VCAM, les scans de décors physiques pour la préparation technique et l'assistance Simulcam sur le plateau. Stephen Rivkin décrit un ordre de montage centré sur le jeu : sélectionner les prises de performance, ajouter personnages et environnements, construire les plans de caméra virtuelle, les valider, puis avancer vers le rendu final de Weta FX et les modèles de prises de vues réelles. L'équipe son explique que le mixage privilégie la clarté en réduisant la concurrence sonore dans un film visuellement et techniquement dense.`,
        pt: `Produção virtual madura em 2022: captura de desempenho debaixo de água, cinematografia virtual, imagem real estereoscópica, alta taxa de fotogramas (HFR) e efeitos visuais de grande escala para água e rostos: The Way of Water organiza a produção em torno da separação e posterior reunião de interpretação, câmara e imagem final. A 20th Century Studios regista um filme de James Cameron com 192 minutos, produzido por Cameron e Jon Landau. A American Cinematographer documenta Russell Carpenter ASC na fotografia, um volume de captura subaquática feito à medida, investigação de marcadores em quase ultravioleta porque o infravermelho convencional funcionava mal na água, esferas flutuantes que reduziam reflexos de superfície prejudiciais à captura, objetos físicos no tanque para interação dos atores e um conjunto de vídeo de referência com 12 a 16 câmaras. Cameron explica que afastou a câmara virtual após o bloqueio inicial para dar prioridade à interpretação e só depois voltou à cinematografia virtual para enquadrar as atuações selecionadas. O Simulcam e a integração sensível à profundidade voltaram a ligar espaços físicos e digitais nas filmagens reais. O sistema estereoscópico de imagem real utilizou componentes Sony VENICE/Rialto numa plataforma Fusion redesenhada, com cenas selecionadas a 48 fotogramas por segundo para melhorar a clareza do movimento e a apresentação 3D. A Weta FX documenta 3 240 planos com efeitos visuais, incluindo 2 225 planos de água, e novos sistemas de simulação de água, desempenho facial baseado em deformações, linhas de olhar por câmara suspensa em cabo e composição em tempo real com informação de profundidade. A The Third Floor documenta pré-visualização, montagem de ambientes, trabalho com Weta Gazebo VCAM, digitalizações de cenários físicos para planeamento técnico e apoio Simulcam durante a rodagem. O montador Stephen Rivkin descreve uma sequência de trabalho orientada pela interpretação: selecionar tomadas de captura, acrescentar personagens e ambientes, construir planos com câmara virtual, aprová-los e avançar para a renderização final da Weta FX e os modelos de filmagem real. A equipa de som descreve uma mistura centrada na clareza e na redução de sons concorrentes num filme visual e tecnicamente denso.`,
      },
    },
  },
  scenario_the_lives_of_others_2006: {
    partial: {
      donorScenarioId: "scenario_enthusiasm_1930",
      canonicalLength: 543,
      canonicalHash: 1715791960,
      preview: "1930 Soviet Ukrainian/Donbas early sound",
      text: {
        nb: `Tidlig lydfilm fra sovjetisk Ukraina og Donbas i 1930: manglende synkronisering, industriell opptaksstedslyd, politisk dokumentarmontasje og senere restaureringshistorie for bilde og lyd: Enthusiasm gjør femårsplanen og industrialiseringen av Donbas til en tydelig politisk konstruert dokumentar. BFI fremhever utfyllende og kontrapunktisk lyd, maskiner, stemmer og fraværet av konvensjonelle fortellerkommentarer. Restaureringshistorien til Østerrikes filmmuseum viser at forholdet mellom lyd og bilde også er overlevert gjennom senere inngrep i synkroniseringen.`,
        fr: `Débuts du cinéma sonore en Ukraine soviétique et dans le Donbass en 1930 : non-synchronisation, sons enregistrés sur des sites industriels, montage documentaire politique et histoire des restaurations ultérieures de l'image et du son : Enthusiasm transforme le plan quinquennal et l'industrialisation du Donbass en construction documentaire ouvertement politique. Le BFI souligne les sons complémentaires et contrapuntiques, les machines, les voix et l'absence de commentaire conventionnel. L'histoire des restaurations de l'Österreichisches Filmmuseum montre également que le rapport image-son nous est parvenu à travers des interventions de synchronisation postérieures.`,
        pt: `Primeiro cinema sonoro da Ucrânia soviética e do Donbass em 1930: ausência de sincronização, som gravado em locais industriais, montagem documental política e história das posteriores restaurações de imagem e som: Enthusiasm transforma o plano quinquenal e a industrialização do Donbass numa construção documental abertamente política. O BFI destaca sons complementares e contrapontísticos, maquinaria, vozes e a ausência de comentário convencional. A história da restauração do Museu Austríaco do Cinema esclarece ainda que a relação entre imagem e som sobrevive através de intervenções posteriores de sincronização.`,
      },
    },
    miss: {
      donorScenarioId: "scenario_the_gold_rush_1925",
      canonicalLength: 675,
      canonicalHash: 3197439026,
      preview: "1925 mature American silent feature production",
      text: {
        nb: `Amerikansk langfilmproduksjon i den modne stumfilmperioden i 1925: Charles Chaplin Productions med distribusjon gjennom United Artists, der stjernen også er produsent og opphavsperson, med omfattende opptakssteder, studiobygging, effekter og komisk dramaturgi i spillefilmlengde: Chaplin skriver, regisserer, produserer, klipper og spiller hovedrollen. Roland Totheroh står for foto og Charles D. Hall leder scenografien, mens en stor stab kombinerer to uker med opptak i snølandskapet ved Truckee med omfattende produksjon i Chaplin Studios. Bildet av menneskemengden ved Chilkoot-passet bruker hundrevis av statister. Hovedopptakene fortsetter deretter i Hollywood, der en stor kunstig fjellkjede og kontrollerte sett gjør farlig geografi om til et miljø som kan brukes gjentatte ganger til komedie.`,
        fr: `Production américaine de long métrage muet arrivée à maturité en 1925 : Charles Chaplin Productions distribuée par United Artists, réunissant l'autorité de la vedette-producteur, l'ampleur des tournages en extérieur, la construction en studio, les effets et la dramaturgie comique du long métrage : Chaplin écrit, réalise, produit, monte et interprète le rôle principal, tandis que Roland Totheroh assure la photographie et Charles D. Hall dirige les décors. Une grande équipe combine deux semaines de tournage dans les paysages enneigés de Truckee et une production prolongée aux Chaplin Studios. L'image de la foule au col de Chilkoot mobilise des centaines de figurants ; le tournage principal revient ensuite à Hollywood, où une vaste chaîne de montagnes artificielle et des décors contrôlés transforment un paysage dangereux en espace comique réutilisable.`,
        pt: `Produção americana amadurecida de longas-metragens mudas em 1925: Charles Chaplin Productions com distribuição pela United Artists, reunindo autoria da estrela-produtora, grande escala de locais de rodagem, construção em estúdio, efeitos e dramaturgia cómica de longa-metragem: Chaplin escreve, realiza, produz, monta e protagoniza, enquanto Roland Totheroh assegura a fotografia e Charles D. Hall dirige a direção artística. Uma grande equipa combina duas semanas de trabalho na neve de Truckee com uma produção extensa nos Chaplin Studios. A imagem da multidão no passo de Chilkoot envolve centenas de figurantes; as filmagens principais regressam depois a Hollywood, onde uma vasta cordilheira artificial e cenários controlados transformam uma geografia perigosa num espaço cómico repetível.`,
      },
    },
  },
};

export function canonicalFilmStudyOptionFingerprint(value: string): { readonly length: number; readonly hash: number } {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return { length: value.length, hash };
}

export function presentVerifiedFilmStudyDonorChoice(
  language: FilmWorkLanguage,
  targetScenarioId: string,
  quality: "match" | "partial" | "miss",
  canonicalOption: string,
): string {
  if (language === "en" || quality === "match") return canonicalOption;
  const entry = FILM_STUDY_VERIFIED_DONOR_CHOICES[targetScenarioId]?.[quality];
  if (!entry) return canonicalOption;
  const fingerprint = canonicalFilmStudyOptionFingerprint(canonicalOption);
  return fingerprint.length === entry.canonicalLength && fingerprint.hash === entry.canonicalHash
    && canonicalOption.startsWith(entry.preview)
    ? entry.text[language]
    : canonicalOption;
}
