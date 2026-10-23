import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { DirectorBriefFieldId } from "./directorBrief.js";
import type { DirectorShotFieldId } from "./directorProject.js";

/** Every playable Film Director answer is selected, never typed. */
export type DirectorShotChoiceFieldId = Exclude<DirectorShotFieldId, "shotSize">;

export const DIRECTOR_BRIEF_CHOICES: Record<FilmWorkLanguage, Record<DirectorBriefFieldId, readonly string[]>> = {
  "nb": {
    "sceneTitle": [
      "Opptrapping – konflikten blir vanskeligere å unngå",
      "Avsløring – ny informasjon endrer scenens retning",
      "Beslutning – hovedpersonen må velge en handling"
    ],
    "sceneContext": [
      "En opplysning holdes tilbake – publikum leter etter tegn",
      "Et ønske møter motstand – scenen starter med konkret konflikt",
      "En tidligere beslutning får konsekvenser – situasjonen er allerede i endring"
    ],
    "sceneObjective": [
      "Avslør et avgjørende spor – publikum må revurdere situasjonen",
      "La en person miste eller vinne kontroll – maktforholdet endres",
      "Få hovedpersonen til å handle – scenen avsluttes med en tydelig beslutning"
    ],
    "audienceEffect": [
      "Skap forventning med et uavklart spørsmål – publikum følger etter ledetråder",
      "Bygg empati gjennom en sårbar reaksjon – publikum forstår personens behov",
      "La en detalj endre mening – publikum opplever overraskelse uten forklaringsreplikk"
    ],
    "conflictTurn": [
      "Motparten nekter å gi etter – hovedpersonen må prøve en ny strategi",
      "En tilsynelatende liten detalj avslører en løgn – balansen snur",
      "Hovedpersonen trekker tilbake et løfte – relasjonen endres"
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
      "Gi én rekvisitt en konkret funksjon i vendepunktet – tingen blir dramatisk viktig",
      "La dører og møbler begrense bevegelsene – rommet skaper motstand",
      "Bruk kostymeforskjeller til å vise hvem som har makt – status kan leses visuelt"
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
      "Velg én hovedlocation og færre kameraforflytninger – frigjør tid til skuespillerregi",
      "Planlegg de mest krevende bildene mens lyset er stabilt – reduser risiko for brudd i kontinuiteten",
      "Del scenen i enkle opptaksoppsett – bevar den dramatiske hensikten uten unødvendige riggskifter"
    ],
    "proofOfIntent": [
      "Vis scenen uten forklarende replikk – sjekk om publikum forstår vendepunktet",
      "Vis to versjoner med ulik blocking – sjekk hvilken som klarest viser maktskiftet",
      "Spill av lyd før bildet avslører hendelsen – sjekk om publikum forventer riktig endring"
    ]
  },
  "en": {
    "sceneTitle": [
      "Escalation – make the conflict harder to avoid",
      "Revelation – new information redirects the scene",
      "Decision – force the protagonist to take action"
    ],
    "sceneContext": [
      "A fact is withheld – viewers search for clues",
      "One goal meets resistance – begin with an active conflict",
      "An earlier choice has consequences – enter during a changing situation"
    ],
    "sceneObjective": [
      "Reveal decisive evidence – make viewers reassess the situation",
      "Shift who controls the space – change the balance of power",
      "Force the protagonist to act – end on a clear decision"
    ],
    "audienceEffect": [
      "Build anticipation with an unanswered question – invite viewers to follow clues",
      "Build empathy through a vulnerable reaction – reveal what the character needs",
      "Change the meaning of a small detail – create a surprise without exposition"
    ],
    "conflictTurn": [
      "The opponent refuses to yield – the protagonist must change tactics",
      "A small detail exposes a lie – the advantage switches sides",
      "The protagonist withdraws a promise – the relationship changes"
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
      "Give one prop a role in the reversal – make the object dramatically necessary",
      "Let doors and furniture constrain movement – the room becomes an obstacle",
      "Use contrasting costume details to signal status – make power visible without dialogue"
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
      "Use one main location and fewer camera moves – protect rehearsal and performance time",
      "Schedule the hardest shots while light is consistent – reduce continuity risk",
      "Group shots into simple setups – preserve dramatic intent without excessive resets"
    ],
    "proofOfIntent": [
      "Screen the scene without an explanatory line – check whether viewers understand the reversal",
      "Compare two blocking versions – check which reveals the shift of power more clearly",
      "Play the crucial sound before showing its source – check what viewers expect next"
    ]
  },
  "fr": {
    "sceneTitle": [
      "Escalade – rendre le conflit plus difficile à éviter",
      "Révélation – une information nouvelle réoriente la scène",
      "Décision – obliger le protagoniste à agir"
    ],
    "sceneContext": [
      "Une information est cachée – le public cherche des indices",
      "Un objectif rencontre une résistance – commencer par un conflit actif",
      "Un choix antérieur a des conséquences – entrer dans une situation déjà changeante"
    ],
    "sceneObjective": [
      "Révéler une preuve décisive – amener le public à revoir la situation",
      "Faire basculer le contrôle de l’espace – changer le rapport de force",
      "Pousser le protagoniste à agir – terminer sur une décision claire"
    ],
    "audienceEffect": [
      "Créer l’attente avec une question sans réponse – inviter à chercher des indices",
      "Créer de l’empathie par une réaction vulnérable – révéler le besoin du personnage",
      "Changer le sens d’un détail – surprendre sans dialogue explicatif"
    ],
    "conflictTurn": [
      "L’adversaire ne cède pas – le protagoniste doit changer de tactique",
      "Un petit détail dévoile un mensonge – l’avantage change de camp",
      "Le protagoniste retire sa promesse – la relation se transforme"
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
      "Donner à un accessoire une fonction dans le basculement – le rendre nécessaire à l’action",
      "Utiliser portes et meubles pour limiter le déplacement – transformer le lieu en obstacle",
      "Contraster les costumes pour révéler le statut – montrer le pouvoir sans paroles"
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
      "Utiliser un seul lieu principal et moins de mouvements – réserver du temps au jeu des acteurs",
      "Tourner les plans difficiles sous une lumière stable – réduire les problèmes de raccord",
      "Regrouper les plans par dispositifs simples – garder l’intention sans installations inutiles"
    ],
    "proofOfIntent": [
      "Projeter sans réplique explicative – vérifier que le public comprend le basculement",
      "Comparer deux placements d’acteurs – vérifier lequel montre mieux le changement de pouvoir",
      "Faire entendre le son avant sa source – vérifier ce que le public anticipe"
    ]
  },
  "pt": {
    "sceneTitle": [
      "Escalada – tornar o conflito mais difícil de evitar",
      "Revelação – nova informação altera o rumo da cena",
      "Decisão crucial – levar o protagonista a escolher uma ação"
    ],
    "sceneContext": [
      "Uma informação é ocultada – o público procura pistas",
      "Um objetivo encontra resistência – começar com um conflito ativo",
      "Uma escolha anterior tem consequências – entrar numa situação já em mudança"
    ],
    "sceneObjective": [
      "Revelar uma prova decisiva – levar o público a reavaliar a situação",
      "Mudar quem domina o espaço – alterar o equilíbrio de poder",
      "Obrigar o protagonista a agir – terminar com uma decisão clara"
    ],
    "audienceEffect": [
      "Criar expectativa com uma pergunta em aberto – convidar o público a seguir pistas",
      "Criar empatia com uma reação vulnerável – revelar uma necessidade",
      "Mudar o significado de um detalhe – surpreender sem explicações"
    ],
    "conflictTurn": [
      "O adversário não cede – o protagonista tem de mudar de tática",
      "Um pequeno detalhe revela uma mentira – a vantagem muda de lado",
      "O protagonista retira uma promessa – a relação transforma-se"
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
      "Dar a um adereço uma função na viragem – tornar o objeto necessário à ação",
      "Usar portas e móveis para limitar movimentos – transformar o espaço num obstáculo",
      "Contrastar elementos de figurino para revelar estatuto – mostrar poder sem palavras"
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
      "Usar uma localização principal e menos movimentos de câmara – preservar tempo para os atores",
      "Filmar os planos difíceis com luz estável – reduzir problemas de continuidade",
      "Agrupar planos em montagens simples – manter a intenção com menos mudanças de equipamento"
    ],
    "proofOfIntent": [
      "Mostrar a cena sem fala explicativa – testar se o público compreende a viragem",
      "Comparar duas marcações de atores – testar qual revela melhor a mudança de poder",
      "Fazer ouvir o som antes de revelar a fonte – testar o que o público espera"
    ]
  }
};

export const DIRECTOR_SHOT_CHOICES: Record<FilmWorkLanguage, Record<DirectorShotChoiceFieldId, readonly string[]>> = {
  "nb": {
    "title": [
      "Etablerende innstilling – viser rommet og personenes plassering",
      "Reaksjonsinnstilling – lar et ansikt endre betydningen av en replikk",
      "Detaljinnstilling – avslører informasjon som endrer handlingen"
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
      "Vidvinkel nær motivet – rom og avstand oppleves tydeligere",
      "Normal brennvidde og moderat avstand – relasjonen oppleves mindre stilisert",
      "Teleoptikk med stor kameraavstand – bakgrunnen oppleves komprimert og personen isoleres"
    ],
    "subjectAction": [
      "La en person stoppe før døråpningen – nølingen viser motstand",
      "La to personer bytte plass ved bordet – maktforholdet endres fysisk",
      "La en hånd skjule og deretter vise en gjenstand – informasjon avsløres gjennom handling"
    ],
    "dramaticPurpose": [
      "Vis hvem som kontrollerer rommet før konflikten – etabler en tydelig maktbalanse",
      "Hold på en reaksjon etter en replikk – la publikum tolke den annerledes",
      "Vis gjenstanden som blir avgjørende – gi neste handling et nytt mål"
    ],
    "sound": [
      "Hold dialogen tydelig og demp bakgrunnslyden – prioriter undertekst i replikkene",
      "La romlyden dominere mellom replikkene – pausen blir merkbar",
      "Bruk en gjenkjennelig lyd utenfor bildet – varsle noe før kameraet viser det"
    ],
    "estimatedDuration": [
      "Kort, cirka 2–4 sekunder – gi rask orientering eller detaljinformasjon",
      "Middels, cirka 5–8 sekunder – gi plass til én tydelig handling og reaksjon",
      "Lang, cirka 9–15 sekunder – la en uavbrutt utvikling bygge spenning"
    ]
  },
  "en": {
    "title": [
      "Establishing shot – clarify space and character positions",
      "Reaction shot – let a face change the meaning of a line",
      "Insert shot – reveal information that redirects the action"
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
      "Use a wide lens close to the subject – emphasize spatial relationships",
      "Choose a normal focal length at moderate distance – keep the relationship understated",
      "Use a longer lens from farther away – compress the background and isolate the subject"
    ],
    "subjectAction": [
      "Have a character stop before the doorway – hesitation reveals resistance",
      "Have two characters trade places at a table – shift the power dynamic physically",
      "Have a hand conceal then reveal an object – disclose information through action"
    ],
    "dramaticPurpose": [
      "Reveal who controls the room before conflict starts – establish a visible power balance",
      "Hold on a reaction after a line – invite a new interpretation of the dialogue",
      "Reveal the decisive object – give the next action a new objective"
    ],
    "sound": [
      "Keep dialogue clear and reduce background sound – foreground subtext in the exchange",
      "Let room tone fill the gaps between lines – make the pauses tangible",
      "Introduce a recognizable off-screen sound – signal an event before showing it"
    ],
    "estimatedDuration": [
      "Short, about 2–4 seconds – orient quickly or reveal a detail",
      "Medium, about 5–8 seconds – allow one clear action and reaction",
      "Long, about 9–15 seconds – build tension through uninterrupted development"
    ]
  },
  "fr": {
    "title": [
      "Plan d’ensemble – montrer l’espace et les positions des personnages",
      "Plan de réaction – faire changer le sens d’une réplique grâce à un visage",
      "Plan de détail – dévoiler une information qui réoriente l’action"
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
      "Grand-angle près du sujet – renforcer les relations spatiales",
      "Focale normale à distance modérée – garder une relation discrète",
      "Longue focale à distance – comprimer l’arrière-plan et isoler le sujet"
    ],
    "subjectAction": [
      "Faire arrêter un personnage devant la porte – l’hésitation montre la résistance",
      "Faire échanger deux places à table – transformer physiquement le rapport de force",
      "Faire cacher puis montrer un objet avec une main – révéler par l’action"
    ],
    "dramaticPurpose": [
      "Montrer qui contrôle le lieu avant le conflit – établir le rapport de force",
      "Rester sur une réaction après une réplique – susciter une interprétation nouvelle",
      "Révéler l’objet décisif – donner un nouvel objectif à l’action suivante"
    ],
    "sound": [
      "Garder les dialogues clairs et réduire le fond sonore – privilégier le sous-texte",
      "Laisser l’ambiance remplir les blancs entre les répliques – rendre les pauses sensibles",
      "Introduire un son reconnaissable hors champ – annoncer avant de montrer"
    ],
    "estimatedDuration": [
      "Court, environ 2–4 secondes – orienter vite ou révéler un détail",
      "Moyen, environ 5–8 secondes – laisser une action et sa réaction",
      "Long, environ 9–15 secondes – créer la tension sans interruption"
    ]
  },
  "pt": {
    "title": [
      "Plano de apresentação – mostrar espaço e posições das personagens",
      "Plano de reação – deixar um rosto mudar o sentido de uma fala",
      "Plano de detalhe – revelar informação que altera a ação"
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
      "Usar grande angular perto do sujeito – acentuar relações espaciais",
      "Escolher distância focal normal e câmara moderadamente afastada – manter a relação discreta",
      "Usar teleobjetiva a maior distância – comprimir o fundo e isolar a personagem"
    ],
    "subjectAction": [
      "Fazer a personagem parar antes da porta – a hesitação revela resistência",
      "Fazer duas personagens trocar de lugar à mesa – mudar fisicamente o poder",
      "Fazer uma mão ocultar e depois mostrar um objeto – revelar através da ação"
    ],
    "dramaticPurpose": [
      "Mostrar quem controla o espaço antes do conflito – estabelecer a relação de poder",
      "Manter uma reação depois de uma fala – permitir nova interpretação do diálogo",
      "Revelar o objeto decisivo – dar um novo objetivo à ação seguinte"
    ],
    "sound": [
      "Manter o diálogo claro e reduzir o som de fundo – realçar o subtexto",
      "Deixar o som ambiente preencher os intervalos entre falas – tornar as pausas percetíveis",
      "Introduzir um som reconhecível fora de campo – anunciar antes de mostrar"
    ],
    "estimatedDuration": [
      "Curto, cerca de 2–4 segundos – orientar depressa ou revelar um detalhe",
      "Médio, cerca de 5–8 segundos – permitir uma ação e uma reação",
      "Longo, cerca de 9–15 segundos – criar tensão sem interrupção"
    ]
  }
};

export const DIRECTOR_CHOOSE_COPY: Record<FilmWorkLanguage, string> = {
  nb: "Velg ett svaralternativ",
  en: "Choose an answer",
  fr: "Choisir une réponse",
  pt: "Escolhe uma resposta",
};
