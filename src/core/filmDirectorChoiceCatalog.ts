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
      "Hold igjen informasjon til siste bilde",
      "La kontrasten mellom bilder fortelle",
      "La handlingen utvikle seg i ett langt opptak"
    ],
    "blocking": [
      "La personene nærme seg hverandre",
      "Bruk avstand for å vise konflikt",
      "La én person ta kontroll over rommet"
    ],
    "performanceDirection": [
      "Spill følelsene under overflaten",
      "Bruk pauser og blikk fremfor replikker",
      "La reaksjonen komme før ordene"
    ],
    "productionDesign": [
      "Bruk få rekvisitter med tydelig betydning",
      "La rommet vise personens status",
      "Bruk miljøet til å skape motstand"
    ],
    "shotPlan": [
      "Begynn bredt og gå gradvis tettere",
      "Prioriter reaksjonsbilder",
      "Hold deg til ett tydelig synspunkt"
    ],
    "cameraMovementLenses": [
      "Statisk kamera og rolig utsnitt",
      "Håndholdt kamera tett på handlingen",
      "Langsom kamerabevegelse som avslører rommet"
    ],
    "lightingPalette": [
      "Mykt lys med varme toner",
      "Hard kontrast og markerte skygger",
      "Kjølig, dempet lys som skaper avstand"
    ],
    "editingRhythm": [
      "Lange tagninger med rom for pauser",
      "Raskere klipp når konflikten øker",
      "Hold igjen klippet til reaksjonen er tydelig"
    ],
    "soundStrategy": [
      "La romlyd bære stemningen",
      "Bruk stillhet ved vendepunktet",
      "La lyd utenfor bildet varsle endring"
    ],
    "practicalConstraints": [
      "Forenkle til én innspillingsplass",
      "Bruk få skuespillere og enkle oppsett",
      "Planlegg for begrenset lys og tid"
    ],
    "proofOfIntent": [
      "Publikum forstår vendepunktet uten forklaring",
      "Blikk og plassering viser maktforholdet",
      "Lyd og klipp støtter den tilsiktede følelsen"
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
      "Withhold information until the final image",
      "Tell the story through contrasting images",
      "Let the action unfold in a long take"
    ],
    "blocking": [
      "Bring characters gradually closer",
      "Use distance to show conflict",
      "Let one character control the space"
    ],
    "performanceDirection": [
      "Keep emotion beneath the surface",
      "Use pauses and glances over dialogue",
      "Let the reaction come before words"
    ],
    "productionDesign": [
      "Use a few meaningful props",
      "Let the room reveal character status",
      "Use the environment as an obstacle"
    ],
    "shotPlan": [
      "Start wide and move gradually closer",
      "Prioritize reaction shots",
      "Stay with one clear point of view"
    ],
    "cameraMovementLenses": [
      "Static camera and calm framing",
      "Handheld camera close to action",
      "Slow camera move revealing the space"
    ],
    "lightingPalette": [
      "Soft light with warm tones",
      "Hard contrast and distinct shadows",
      "Cool muted light creating distance"
    ],
    "editingRhythm": [
      "Long takes with room for pauses",
      "Cut faster as the conflict grows",
      "Delay the cut until the reaction lands"
    ],
    "soundStrategy": [
      "Let room tone establish the mood",
      "Use silence at the turning point",
      "Use off-screen sound to signal change"
    ],
    "practicalConstraints": [
      "Simplify to one location",
      "Use a small cast and basic setups",
      "Plan around limited time and light"
    ],
    "proofOfIntent": [
      "The turning point reads without explanation",
      "Gaze and blocking show the power dynamic",
      "Sound and editing support the intended feeling"
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
      "Retenir l’information jusqu’au dernier plan",
      "Raconter par des images contrastées",
      "Déployer l’action en un plan long"
    ],
    "blocking": [
      "Rapprocher progressivement les personnages",
      "Montrer le conflit par la distance",
      "Laisser un personnage dominer l’espace"
    ],
    "performanceDirection": [
      "Garder l’émotion sous la surface",
      "Privilégier pauses et regards aux paroles",
      "Faire précéder les mots par la réaction"
    ],
    "productionDesign": [
      "Choisir peu d’accessoires significatifs",
      "Faire révéler le statut par le décor",
      "Transformer le lieu en obstacle"
    ],
    "shotPlan": [
      "Commencer large puis se rapprocher",
      "Privilégier les plans de réaction",
      "Adopter un seul point de vue clair"
    ],
    "cameraMovementLenses": [
      "Caméra fixe et cadre calme",
      "Caméra portée près de l’action",
      "Mouvement lent révélant l’espace"
    ],
    "lightingPalette": [
      "Lumière douce et tons chauds",
      "Contraste dur et ombres marquées",
      "Lumière froide et discrète"
    ],
    "editingRhythm": [
      "Plans longs laissant des pauses",
      "Accélérer les coupes avec le conflit",
      "Retarder la coupe pour montrer la réaction"
    ],
    "soundStrategy": [
      "Utiliser les sons du lieu pour l’ambiance",
      "Employer le silence au tournant",
      "Annoncer le changement par le hors-champ"
    ],
    "practicalConstraints": [
      "Limiter le tournage à un lieu",
      "Utiliser peu d’acteurs et de dispositifs",
      "Prévoir peu de temps et de lumière"
    ],
    "proofOfIntent": [
      "Le tournant est compris sans explication",
      "Regards et positions montrent le pouvoir",
      "Son et montage créent l’effet voulu"
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
      "Guardar informação até à imagem final",
      "Narrar por imagens contrastantes",
      "Deixar a ação decorrer num plano longo"
    ],
    "blocking": [
      "Aproximar gradualmente as personagens",
      "Usar a distância para mostrar conflito",
      "Dar o controlo do espaço a uma personagem"
    ],
    "performanceDirection": [
      "Manter a emoção contida",
      "Privilegiar pausas e olhares",
      "Mostrar a reação antes das palavras"
    ],
    "productionDesign": [
      "Usar poucos adereços significativos",
      "Deixar o espaço revelar o estatuto",
      "Transformar o ambiente num obstáculo"
    ],
    "shotPlan": [
      "Começar aberto e aproximar gradualmente",
      "Privilegiar planos de reação",
      "Manter um ponto de vista claro"
    ],
    "cameraMovementLenses": [
      "Câmara fixa com enquadramento calmo",
      "Câmara à mão perto da ação",
      "Movimento lento que revela o espaço"
    ],
    "lightingPalette": [
      "Luz suave com tons quentes",
      "Contraste forte e sombras definidas",
      "Luz fria e discreta que cria distância"
    ],
    "editingRhythm": [
      "Planos longos com pausas",
      "Acelerar os cortes com o conflito",
      "Adiar o corte até à reação"
    ],
    "soundStrategy": [
      "Usar o som ambiente para criar atmosfera",
      "Usar silêncio no ponto de viragem",
      "Sinalizar mudança com som fora de campo"
    ],
    "practicalConstraints": [
      "Simplificar para uma única localização",
      "Usar poucos atores e montagens simples",
      "Planear com luz e tempo limitados"
    ],
    "proofOfIntent": [
      "A viragem é clara sem explicação",
      "Olhares e posições mostram o poder",
      "Som e montagem sustentam a emoção"
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
      "Kamera i øyehøyde",
      "Lav kameravinkel",
      "Høy kameravinkel"
    ],
    "movement": [
      "Statisk innstilling",
      "Rolig innkjøring",
      "Håndholdt følgebevegelse"
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
      "Etablere sted og forhold",
      "Vise reaksjonen på ny informasjon",
      "Avsløre et avgjørende spor"
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
      "Eye-level camera",
      "Low camera angle",
      "High camera angle"
    ],
    "movement": [
      "Locked-off shot",
      "Slow push-in",
      "Handheld tracking move"
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
      "Establish setting and relationships",
      "Show a response to new information",
      "Reveal a decisive clue"
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
      "Caméra à hauteur des yeux",
      "Contre-plongée",
      "Plongée"
    ],
    "movement": [
      "Plan fixe",
      "Lent mouvement avant",
      "Suivi à l’épaule"
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
      "Présenter le lieu et les relations",
      "Montrer la réaction à une information",
      "Révéler un indice décisif"
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
      "Câmara à altura dos olhos",
      "Ângulo baixo",
      "Ângulo alto"
    ],
    "movement": [
      "Plano fixo",
      "Aproximação lenta",
      "Seguimento com câmara à mão"
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
      "Apresentar o lugar e as relações",
      "Mostrar reação a nova informação",
      "Revelar uma pista decisiva"
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
