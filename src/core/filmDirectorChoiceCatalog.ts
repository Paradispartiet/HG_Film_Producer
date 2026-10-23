import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { DirectorBriefFieldId } from "./directorBrief.js";
import type { DirectorShotFieldId } from "./directorProject.js";

/** Every playable Film Director answer is selected, never typed. */
export type DirectorShotChoiceFieldId = Exclude<DirectorShotFieldId, "shotSize">;

export const DIRECTOR_BRIEF_CHOICES: Record<FilmWorkLanguage, Record<DirectorBriefFieldId, readonly string[]>> = {
  "nb": {
    "sceneTitle": [
      "Åpningsscene",
      "Konfrontasjon",
      "Vendepunkt"
    ],
    "sceneContext": [
      "En hemmelighet er i ferd med å avsløres",
      "To personer vil forskjellige ting",
      "Hovedpersonen må ta et vanskelig valg"
    ],
    "sceneObjective": [
      "Avsløre en viktig opplysning",
      "Endre maktbalansen mellom personene",
      "Vise et avgjørende indre valg"
    ],
    "audienceEffect": [
      "Skape uro og forventning",
      "Bygge nærhet og empati",
      "Overraske med en ny forståelse"
    ],
    "conflictTurn": [
      "Motstanden tvinger frem en innrømmelse",
      "En ny hendelse snur situasjonen",
      "Personen velger å bryte med planen"
    ],
    "formalStrategy": [
      "Vis motstanden i samme ubrutte tagning – publikum opplever presset uten klippepause",
      "Vis handlingen fra ulike perspektiver – klippene avslører motstridende forståelser",
      "Hold igjen et viktig bilde til vendepunktet – styr når publikum får vite mer"
    ],
    "blocking": [
      "La personen med makt oppta midten av rommet – de andre må forholde seg til plasseringen",
      "La avstanden mellom personene øke gjennom scenen – konflikten blir synlig",
      "La en person sperre utgangen – bevegelse i rommet blir en del av motstanden"
    ],
    "performanceDirection": [
      "La skuespilleren skjule følelsen mens kroppen røper den – undertekst fremfor forklaring",
      "La motparten reagere før hovedreplikken er ferdig – et brudd i kontrollen blir synlig",
      "La et avgjørende valg spilles gjennom nøling og handling – ikke en forklarende monolog"
    ],
    "productionDesign": [
      "Bruk få rekvisitter med tydelig betydning",
      "La rommet vise personens status",
      "Bruk miljøet til å skape motstand"
    ],
    "shotPlan": [
      "Etabler rommet i total før du går nær – publikum forstår hvor presset kommer fra",
      "Hold på den lyttende personen under avsløringen – reaksjonen bærer scenen",
      "Begrens dekningen til hovedpersonens perspektiv – vi oppdager informasjon samtidig"
    ],
    "cameraMovementLenses": [
      "Hold kameraet i ro og la skuespillerne bevege seg – plasseringen viser hvem som styrer",
      "Følg hovedpersonen håndholdt gjennom trangt rom – usikkerhet oppstår gjennom nærhet",
      "Flytt kameraet langsomt inn ved en erkjennelse – utsnittet markerer en endring"
    ],
    "lightingPalette": [
      "Bruk én motivert vinduslyskilde – retningen gir et forståelig og begrenset rom",
      "La motlys skjule et ansikt til valget tas – lys brukes til å holde igjen informasjon",
      "Bruk kjølig grunnlys og én varm lyskilde – fargekontrast viser tilhørighet"
    ],
    "editingRhythm": [
      "Hold tagningen gjennom en vanskelig pause – la skuespillerens reaksjon få tid",
      "Klipp på hver endring i maktbalansen – rytmen følger dramatisk handling",
      "Vis motpartens reaksjon før svaret – publikum må tolke det som ikke sies"
    ],
    "soundStrategy": [
      "La lyden fra rommet fortsette under pausen – stillheten oppleves som levende",
      "La en lyd utenfor bildet avbryte samtalen – verden utenfor påvirker konflikten",
      "Demp miljølyden idet en person forstår sannheten – oppmerksomheten snevres inn"
    ],
    "practicalConstraints": [
      "Forenkle til én innspillingsplass",
      "Bruk få skuespillere og enkle oppsett",
      "Planlegg for begrenset lys og tid"
    ],
    "proofOfIntent": [
      "Test om publikum kan forklare vendepunktet uten en ekstra replikk",
      "Test om publikum oppfatter maktendringen bare gjennom plassering og blikk",
      "Test om publikum hører den avgjørende hendelsen før den blir vist"
    ]
  },
  "en": {
    "sceneTitle": [
      "Opening scene",
      "Confrontation",
      "Turning point"
    ],
    "sceneContext": [
      "A secret is about to be revealed",
      "Two characters want different things",
      "The protagonist faces a difficult choice"
    ],
    "sceneObjective": [
      "Reveal essential information",
      "Shift the balance of power",
      "Show a decisive internal choice"
    ],
    "audienceEffect": [
      "Create unease and anticipation",
      "Build closeness and empathy",
      "Surprise with a new understanding"
    ],
    "conflictTurn": [
      "Resistance forces an admission",
      "A new event reverses the situation",
      "A character abandons the plan"
    ],
    "formalStrategy": [
      "Keep the confrontation in one uninterrupted take – the pressure remains visible without a cut",
      "Contrast opposing viewpoints in the edit – reveal that characters understand events differently",
      "Withhold one decisive image until the reversal – control when the audience knows more"
    ],
    "blocking": [
      "Place the dominant character at the center – others must negotiate that position",
      "Increase the distance between characters as the scene develops – make separation visible",
      "Have one character block the exit – movement through the room becomes an obstacle"
    ],
    "performanceDirection": [
      "Have the actor conceal emotion while the body betrays it – convey subtext without explanation",
      "Let the other actor react before the main line is finished – expose a loss of control",
      "Play the decision through hesitation and action – avoid an explanatory speech"
    ],
    "productionDesign": [
      "Use a few meaningful props",
      "Let the room reveal character status",
      "Use the environment as an obstacle"
    ],
    "shotPlan": [
      "Establish the room wide before moving close – clarify where the pressure comes from",
      "Hold on the listener during the revelation – let the reaction carry the scene",
      "Restrict coverage to the protagonist's viewpoint – audience and character discover together"
    ],
    "cameraMovementLenses": [
      "Lock the camera and let actors move – position shows who controls the room",
      "Follow the protagonist handheld through a tight space – proximity creates uncertainty",
      "Push in slowly on the realization – framing registers a change in understanding"
    ],
    "lightingPalette": [
      "Motivate the key light from a window – make the space coherent and constrained",
      "Keep a face in backlight until the decision – use light to delay information",
      "Combine a cool base with one warm source – color contrast suggests belonging"
    ],
    "editingRhythm": [
      "Stay in the take through an uncomfortable pause – give the reaction time",
      "Cut when the power balance shifts – let rhythm follow dramatic action",
      "Show the listener's reaction before the answer – invite interpretation of the unspoken"
    ],
    "soundStrategy": [
      "Keep room tone under the pause – silence still feels inhabited",
      "Let an off-screen sound interrupt dialogue – outside events alter the conflict",
      "Lower the ambience at a realization – narrow attention without a speech"
    ],
    "practicalConstraints": [
      "Simplify to one location",
      "Use a small cast and basic setups",
      "Plan around limited time and light"
    ],
    "proofOfIntent": [
      "Test whether viewers can explain the turning point without an extra line",
      "Test whether blocking and eyelines reveal the power shift on their own",
      "Test whether viewers hear the crucial event before it is shown"
    ]
  },
  "fr": {
    "sceneTitle": [
      "Scène d’ouverture",
      "Confrontation",
      "Tournant décisif"
    ],
    "sceneContext": [
      "Un secret va être révélé",
      "Deux personnages poursuivent des buts opposés",
      "Le protagoniste doit faire un choix difficile"
    ],
    "sceneObjective": [
      "Révéler une information essentielle",
      "Modifier le rapport de force",
      "Montrer un choix intérieur décisif"
    ],
    "audienceEffect": [
      "Créer une attente inquiète",
      "Renforcer la proximité et l’empathie",
      "Surprendre par une nouvelle compréhension"
    ],
    "conflictTurn": [
      "La résistance provoque un aveu",
      "Un événement renverse la situation",
      "Un personnage abandonne son plan"
    ],
    "formalStrategy": [
      "Filmer l’affrontement en un plan continu – la pression reste visible sans coupe",
      "Monter des points de vue opposés – révéler des interprétations contradictoires",
      "Retarder une image décisive jusqu’au basculement – maîtriser le savoir du public"
    ],
    "blocking": [
      "Placer le personnage dominant au centre – les autres doivent négocier sa position",
      "Augmenter progressivement l’écart entre les personnages – rendre la rupture visible",
      "Faire bloquer la sortie par un personnage – l’espace devient un obstacle"
    ],
    "performanceDirection": [
      "Faire cacher l’émotion tandis que le corps la trahit – privilégier le sous-texte",
      "Faire réagir le partenaire avant la fin de la réplique – montrer une perte de contrôle",
      "Jouer le choix par l’hésitation et l’action – éviter le discours explicatif"
    ],
    "productionDesign": [
      "Choisir peu d’accessoires significatifs",
      "Faire révéler le statut par le décor",
      "Transformer le lieu en obstacle"
    ],
    "shotPlan": [
      "Présenter d’abord le lieu en plan large – clarifier la source de la pression",
      "Rester sur celui qui écoute pendant la révélation – laisser porter la réaction",
      "Limiter les plans au point de vue du protagoniste – découvrir avec lui"
    ],
    "cameraMovementLenses": [
      "Fixer la caméra et laisser bouger les acteurs – la position révèle le pouvoir",
      "Suivre le protagoniste à l’épaule dans un lieu étroit – créer l’incertitude par la proximité",
      "Avancer lentement vers un visage lors de la prise de conscience – marquer le changement"
    ],
    "lightingPalette": [
      "Motiver la lumière principale par une fenêtre – garder un espace cohérent",
      "Garder un visage en contre-jour jusqu’au choix – retarder la révélation",
      "Associer une base froide à une source chaude – suggérer l’appartenance par la couleur"
    ],
    "editingRhythm": [
      "Garder le plan pendant un silence pénible – donner du temps à la réaction",
      "Couper à chaque changement de rapport de force – suivre l’action dramatique",
      "Montrer la réaction avant la réponse – faire interpréter ce qui n’est pas dit"
    ],
    "soundStrategy": [
      "Maintenir les sons du lieu sous la pause – donner de la vie au silence",
      "Faire interrompre le dialogue par un son hors champ – laisser le monde agir",
      "Atténuer l’ambiance à la prise de conscience – concentrer l’attention"
    ],
    "practicalConstraints": [
      "Limiter le tournage à un lieu",
      "Utiliser peu d’acteurs et de dispositifs",
      "Prévoir peu de temps et de lumière"
    ],
    "proofOfIntent": [
      "Vérifier que le public comprend le basculement sans réplique ajoutée",
      "Vérifier que les positions et regards révèlent seuls le rapport de force",
      "Vérifier que le public entend l’événement décisif avant de le voir"
    ]
  },
  "pt": {
    "sceneTitle": [
      "Cena de abertura",
      "Confronto",
      "Ponto de viragem"
    ],
    "sceneContext": [
      "Um segredo está prestes a ser revelado",
      "Duas personagens querem coisas diferentes",
      "O protagonista enfrenta uma escolha difícil"
    ],
    "sceneObjective": [
      "Revelar informação essencial",
      "Alterar o equilíbrio de poder",
      "Mostrar uma escolha interior decisiva"
    ],
    "audienceEffect": [
      "Criar inquietação e expectativa",
      "Aproximar o público das personagens",
      "Surpreender com uma nova compreensão"
    ],
    "conflictTurn": [
      "A resistência obriga a uma confissão",
      "Um acontecimento inverte a situação",
      "Uma personagem abandona o plano"
    ],
    "formalStrategy": [
      "Manter o confronto num plano contínuo – deixar a pressão visível sem cortes",
      "Montar pontos de vista opostos – revelar interpretações contraditórias",
      "Adiar uma imagem decisiva até à viragem – controlar o que o público sabe"
    ],
    "blocking": [
      "Colocar a personagem dominante no centro – os outros negociam essa posição",
      "Aumentar a distância entre personagens – tornar a separação visível",
      "Fazer uma personagem bloquear a saída – o espaço torna-se obstáculo"
    ],
    "performanceDirection": [
      "Ocultar a emoção nas palavras e revelá-la no corpo – mostrar subtexto",
      "Fazer o outro ator reagir antes do fim da fala – mostrar perda de controlo",
      "Representar a decisão com hesitação e ação – evitar discurso explicativo"
    ],
    "productionDesign": [
      "Usar poucos adereços significativos",
      "Deixar o espaço revelar o estatuto",
      "Transformar o ambiente num obstáculo"
    ],
    "shotPlan": [
      "Estabelecer primeiro o espaço em plano aberto – esclarecer a origem da pressão",
      "Manter a câmara em quem escuta durante a revelação – valorizar a reação",
      "Limitar os planos ao ponto de vista do protagonista – descobrir com ele"
    ],
    "cameraMovementLenses": [
      "Fixar a câmara e deixar os atores moverem-se – o posicionamento revela poder",
      "Seguir o protagonista à mão por um espaço apertado – criar incerteza pela proximidade",
      "Aproximar lentamente a câmara na descoberta – assinalar uma mudança"
    ],
    "lightingPalette": [
      "Justificar a luz principal por uma janela – dar coerência ao espaço",
      "Manter um rosto em contraluz até à escolha – atrasar a revelação",
      "Combinar base fria com uma fonte quente – sugerir pertença pela cor"
    ],
    "editingRhythm": [
      "Manter o plano durante uma pausa difícil – dar tempo à reação",
      "Cortar em cada mudança de poder – seguir a ação dramática",
      "Mostrar a reação antes da resposta – convidar a interpretar o silêncio"
    ],
    "soundStrategy": [
      "Manter o som ambiente durante a pausa – dar vida ao silêncio",
      "Interromper o diálogo com som fora de campo – trazer o exterior para o conflito",
      "Reduzir o ambiente na descoberta – concentrar a atenção"
    ],
    "practicalConstraints": [
      "Simplificar para uma única localização",
      "Usar poucos atores e montagens simples",
      "Planear com luz e tempo limitados"
    ],
    "proofOfIntent": [
      "Testar se o público compreende a viragem sem diálogo adicional",
      "Testar se posições e olhares mostram sozinhos a mudança de poder",
      "Testar se o público ouve o acontecimento decisivo antes de o ver"
    ]
  }
};

export const DIRECTOR_SHOT_CHOICES: Record<FilmWorkLanguage, Record<DirectorShotChoiceFieldId, readonly string[]>> = {
  "nb": {
    "title": [
      "Etablerende bilde",
      "Reaksjonsbilde",
      "Avgjørende detalj"
    ],
    "cameraPosition": [
      "Sett kamera i øyehøyde – personene fremstår som likeverdige",
      "Bruk lav vinkel mot den som dominerer – posisjonen forsterker overtaket",
      "Bruk høy vinkel når personen mister kontroll – rommet virker større enn personen"
    ],
    "movement": [
      "Bruk statisk kamera mens konflikten vokser – bevegelsen skjer mellom personene",
      "Kjør langsomt inn på avgjørelsen – øk følelsen av uunngåelighet",
      "Følg personen håndholdt mot døren – nærheten skaper uro"
    ],
    "lens": [
      "Vidvinkel viser miljøet",
      "Normal brennvidde viser naturlig rom",
      "Telelinse isolerer personen"
    ],
    "subjectAction": [
      "Personen går inn og stopper opp",
      "To personer bytter plass i rommet",
      "En hånd avslører en viktig gjenstand"
    ],
    "dramaticPurpose": [
      "Vis hvem som har kontroll over rommet før konflikten begynner",
      "La et reaksjonsbilde snu publikums oppfatning av en replikk",
      "Avslør en gjenstand som endrer målet for neste handling"
    ],
    "sound": [
      "Prioriter tydelig dialog",
      "Prioriter romlyd og atmosfære",
      "Bruk stillhet og lyd utenfor bildet"
    ],
    "estimatedDuration": [
      "Kort: 2–4 sekunder",
      "Middels: 5–8 sekunder",
      "Lang: 9–15 sekunder"
    ]
  },
  "en": {
    "title": [
      "Establishing shot",
      "Reaction shot",
      "Decisive detail"
    ],
    "cameraPosition": [
      "Place the camera at eye level – keep the characters on equal footing",
      "Use a low angle on the dominant character – amplify their advantage",
      "Use a high angle as control slips – make the space overwhelm the character"
    ],
    "movement": [
      "Lock off the camera as conflict rises – motion happens between characters",
      "Push in slowly toward the decision – build a feeling of inevitability",
      "Track the character handheld toward the door – proximity adds unease"
    ],
    "lens": [
      "Wide lens reveals the environment",
      "Normal lens keeps natural space",
      "Telephoto isolates the character"
    ],
    "subjectAction": [
      "Character enters and pauses",
      "Two characters exchange positions",
      "A hand reveals an important object"
    ],
    "dramaticPurpose": [
      "Establish who controls the space before the conflict begins",
      "Use a reaction to change the meaning of the previous line",
      "Reveal an object that changes the next action's objective"
    ],
    "sound": [
      "Prioritize clear dialogue",
      "Prioritize room tone and atmosphere",
      "Use silence and off-screen sound"
    ],
    "estimatedDuration": [
      "Short: 2–4 seconds",
      "Medium: 5–8 seconds",
      "Long: 9–15 seconds"
    ]
  },
  "fr": {
    "title": [
      "Plan d’ensemble",
      "Plan de réaction",
      "Détail décisif"
    ],
    "cameraPosition": [
      "Caméra à hauteur des yeux – personnages placés sur un pied d’égalité",
      "Contre-plongée sur le personnage dominant – accentuer son avantage",
      "Plongée quand le contrôle disparaît – rendre l’espace écrasant"
    ],
    "movement": [
      "Caméra fixe pendant la montée du conflit – le mouvement reste entre les acteurs",
      "Avancer lentement vers la décision – accentuer l’inéluctable",
      "Suivre le personnage à l’épaule jusqu’à la porte – créer l’inquiétude"
    ],
    "lens": [
      "Grand-angle pour montrer le décor",
      "Focale normale pour un espace naturel",
      "Téléobjectif pour isoler le personnage"
    ],
    "subjectAction": [
      "Le personnage entre et s’arrête",
      "Deux personnages échangent leurs places",
      "Une main révèle un objet important"
    ],
    "dramaticPurpose": [
      "Montrer qui contrôle l’espace avant le début du conflit",
      "Faire changer le sens de la réplique précédente grâce à une réaction",
      "Révéler un objet qui modifie le but de l’action suivante"
    ],
    "sound": [
      "Privilégier un dialogue intelligible",
      "Privilégier ambiance et son du lieu",
      "Utiliser silence et son hors champ"
    ],
    "estimatedDuration": [
      "Court : 2–4 secondes",
      "Moyen : 5–8 secondes",
      "Long : 9–15 secondes"
    ]
  },
  "pt": {
    "title": [
      "Plano de apresentação",
      "Plano de reação",
      "Detalhe decisivo"
    ],
    "cameraPosition": [
      "Câmara à altura dos olhos – colocar as personagens em igualdade",
      "Ângulo baixo sobre quem domina – reforçar a vantagem",
      "Ângulo alto quando o controlo se perde – tornar o espaço esmagador"
    ],
    "movement": [
      "Câmara fixa enquanto o conflito aumenta – os atores criam o movimento",
      "Aproximação lenta à decisão – criar sensação de inevitabilidade",
      "Seguir a personagem à mão até à porta – acrescentar inquietação"
    ],
    "lens": [
      "Grande angular mostra o ambiente",
      "Distância focal normal mostra o espaço",
      "Teleobjetiva isola a personagem"
    ],
    "subjectAction": [
      "A personagem entra e para",
      "Duas personagens trocam de lugar",
      "Uma mão revela um objeto importante"
    ],
    "dramaticPurpose": [
      "Mostrar quem controla o espaço antes de começar o conflito",
      "Mudar o sentido da fala anterior através de uma reação",
      "Revelar um objeto que altera o objetivo da ação seguinte"
    ],
    "sound": [
      "Privilegiar diálogo claro",
      "Privilegiar som ambiente e atmosfera",
      "Usar silêncio e som fora de campo"
    ],
    "estimatedDuration": [
      "Curto: 2–4 segundos",
      "Médio: 5–8 segundos",
      "Longo: 9–15 segundos"
    ]
  }
};

export const DIRECTOR_CHOOSE_COPY: Record<FilmWorkLanguage, string> = {
  nb: "Velg ett svaralternativ",
  en: "Choose an answer",
  fr: "Choisir une réponse",
  pt: "Escolhe uma resposta",
};
