import type { SourceBackedCaseWorkshop } from "./scenarioProductionSourceWorkshops.js";

export const postwarSourceWorkshops = [
  {
    "scenarioId": "scenario_the_night_of_the_hunter_1955",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Expressionist light and child-centered fable",
      "nb": "Ekspresjonistisk lys og barnets fabelperspektiv",
      "fr": "Lumière expressionniste et fable centrée sur l’enfant",
      "pt": "Luz expressionista e fábula centrada na criança"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Night of the Hunter",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/51604-THE-NIGHT-OF-THE-HUNTER"
      },
      {
        "id": "s1",
        "title": "The Night of the Hunter",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/27525-the-night-of-the-hunter"
      },
      {
        "id": "s2",
        "title": "The Night of the Hunter",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/909-the-night-of-the-hunter"
      },
      {
        "id": "s3",
        "title": "Happy Halloween: It's the Night of the Hunter",
        "publisher": "Library of Congress",
        "url": "https://blogs.loc.gov/now-see-hear/2023/10/happy-halloween-its-the-night-of-the-hunter-1955/"
      }
    ],
    "questions": [
      {
        "id": "thenightofthehunter-silhouette",
        "area": "camera",
        "prompt": {
          "en": "How can silhouettes express a child's fearful viewpoint?",
          "nb": "Hvordan kan silhuetter uttrykke barnets fryktpregede perspektiv?",
          "fr": "Comment les silhouettes expriment-elles le regard inquiet de l’enfant ?",
          "pt": "Como podem silhuetas exprimir o olhar assustado da criança?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Design stark outlines and controlled shadow",
              "nb": "Utform tydelige silhuetter og kontrollerte skygger",
              "fr": "Concevoir contours nets et ombres maîtrisées",
              "pt": "Criar contornos nítidos e sombras controladas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Light every surface with equal intensity",
              "nb": "Belys alle flater med samme intensitet",
              "fr": "Éclairer chaque surface avec la même intensité",
              "pt": "Iluminar todas as superfícies com igual intensidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the stylized images as documentary footage",
              "nb": "Behandle stiliserte bilder som dokumentaropptak",
              "fr": "Traiter les images stylisées comme des archives",
              "pt": "Tratar imagens estilizadas como registos documentais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes Expressionist imagery and AFI credits Stanley Cortez. Design original shadows rather than claiming an exact historical lighting setup.",
          "nb": "Criterion beskriver ekspresjonistiske bilder og AFI krediterer Stanley Cortez. Lag egne skygger uten å hevde et eksakt historisk lysoppsett.",
          "fr": "Criterion décrit les images expressionnistes et l’AFI crédite Cortez. Concevez des ombres originales sans prétendre restituer l’éclairage exact.",
          "pt": "A Criterion descreve imagens expressionistas e a AFI credita Cortez. Crie sombras originais sem alegar reproduzir a iluminação exata."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "thenightofthehunter-viewpoint",
        "area": "research",
        "prompt": {
          "en": "How should the river journey be staged as a fable?",
          "nb": "Hvordan bør elvereisen iscenesettes som en fabel?",
          "fr": "Comment mettre en scène le voyage fluvial comme une fable ?",
          "pt": "Como encenar a viagem fluvial como uma fábula?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Explain all images as literal historical events",
              "nb": "Forklar alle bilder som bokstavelige historiske hendelser",
              "fr": "Expliquer toute image comme événement historique littéral",
              "pt": "Explicar todas as imagens como eventos históricos literais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Shape landscapes and scale around child perception",
              "nb": "Form landskap og skala rundt barnets opplevelse",
              "fr": "Façonner paysage et échelle selon le regard enfantin",
              "pt": "Moldar paisagem e escala ao olhar infantil"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use unrelated spectacle instead of viewpoint",
              "nb": "Bruk urelatert spektakel i stedet for perspektiv",
              "fr": "Employer du spectacle sans rapport avec le regard",
              "pt": "Usar espetáculo sem relação com o ponto de vista"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's production account describes the child-centered river sequence. Create a fictional storyboard in which scale and space convey a fable rather than neutral observation.",
          "nb": "Criterions produksjonsberetning beskriver barnas elvesekvens. Lag et fiktivt storyboard der skala og rom formidler en fabel fremfor nøytral observasjon.",
          "fr": "Le récit de production Criterion décrit la séquence fluviale centrée sur les enfants. Créez un storyboard où espace et échelle expriment la fable.",
          "pt": "O relato Criterion descreve a sequência fluvial centrada nas crianças. Crie um storyboard em que espaço e escala exprimam a fábula."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "thenightofthehunter-credits",
        "area": "research",
        "prompt": {
          "en": "How should this independent production be credited?",
          "nb": "Hvordan bør denne uavhengige produksjonen krediteres?",
          "fr": "Comment créditer cette production indépendante ?",
          "pt": "Como creditar esta produção independente?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute every image to the director alone",
              "nb": "Tilskriv alle bilder til regissøren alene",
              "fr": "Attribuer toute image au seul réalisateur",
              "pt": "Atribuir cada imagem apenas ao realizador"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat restoration as original production work",
              "nb": "Behandle restaurering som opprinnelig produksjonsarbeid",
              "fr": "Traiter la restauration comme production originale",
              "pt": "Tratar restauro como produção original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record producer, director, writer and craft departments",
              "nb": "Registrer produsent, regissør, manusforfatter og fagavdelinger",
              "fr": "Consigner producteur, réalisateur, scénariste et métiers",
              "pt": "Registar produtor, realizador, argumentista e departamentos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records Gregory, Agee, Cortez and Brown; Criterion documents later restoration. Separate the original collaboration from preservation work.",
          "nb": "AFI dokumenterer Gregory, Agee, Cortez og Brown; Criterion dokumenterer senere restaurering. Skill opprinnelig samarbeid fra bevaringsarbeid.",
          "fr": "L’AFI documente Gregory, Agee, Cortez et Brown ; Criterion documente la restauration. Distinguez collaboration originale et préservation.",
          "pt": "A AFI documenta Gregory, Agee, Cortez e Brown; a Criterion documenta o restauro. Separe colaboração original e preservação."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_seventh_seal_1957",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Medieval imagery, theatrical origins and limited production resources",
      "nb": "Middelalderbilder, teateropphav og knappe produksjonsressurser",
      "fr": "Images médiévales, origines théâtrales et ressources limitées",
      "pt": "Imagens medievais, origens teatrais e recursos limitados"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Seventh Seal",
        "publisher": "Ingmar Bergman Foundation",
        "url": "https://www.ingmarbergman.se/en/production/seventh-seal"
      },
      {
        "id": "s1",
        "title": "On The Seventh Seal",
        "publisher": "Ingmar Bergman Foundation",
        "url": "https://www.ingmarbergman.se/en/production/seventh-seal-0"
      },
      {
        "id": "s2",
        "title": "The Seventh Seal",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/173-the-seventh-seal"
      },
      {
        "id": "s3",
        "title": "The Seventh Seal (1957)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/1d619311-3358-529c-999f-de7dffc0843c/the-seventh-seal"
      }
    ],
    "questions": [
      {
        "id": "theseventhseal-tableau",
        "area": "camera",
        "prompt": {
          "en": "How can a tableau translate medieval visual references into cinema?",
          "nb": "Hvordan kan et tablå oversette middelalderens bildereferanser til film?",
          "fr": "Comment un tableau traduit-il des références médiévales au cinéma ?",
          "pt": "Como pode um quadro traduzir referências medievais para cinema?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat allegory as literal medieval documentation",
              "nb": "Behandle allegori som bokstavelig middelalderdokumentasjon",
              "fr": "Traiter l’allégorie comme archive médiévale littérale",
              "pt": "Tratar alegoria como documento medieval literal"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Stage expressive silhouettes and deliberate group arrangements",
              "nb": "Iscenesett uttrykksfulle silhuetter og bevisste gruppeplasseringer",
              "fr": "Mettre en scène silhouettes expressives et groupes composés",
              "pt": "Encenar silhuetas expressivas e grupos compostos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Copy a painting without considering screen duration",
              "nb": "Kopier et maleri uten å vurdere filmens varighet",
              "fr": "Copier une peinture sans considérer la durée",
              "pt": "Copiar uma pintura sem considerar a duração"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Bergman's account identifies church painting and the dance of death; BFI discusses Fischer's silhouettes. Design a new tableau that translates rather than copies the reference.",
          "nb": "Bergmans beretning identifiserer kirkemalerier og dødsdans; BFI drøfter Fischers silhuetter. Lag et nytt tablå som oversetter fremfor å kopiere referansen.",
          "fr": "Bergman évoque peintures d’église et danse macabre ; le BFI analyse les silhouettes. Créez un tableau qui transpose la référence.",
          "pt": "Bergman refere pinturas de igrejas e dança da morte; o BFI analisa silhuetas. Crie um quadro que transponha a referência."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "theseventhseal-adapt",
        "area": "research",
        "prompt": {
          "en": "How can a stage play become a cinematic allegory?",
          "nb": "Hvordan kan et teaterstykke bli en filmatisk allegori?",
          "fr": "Comment une pièce de théâtre devient-elle une allégorie filmique ?",
          "pt": "Como pode uma peça tornar-se uma alegoria cinematográfica?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Film the stage unchanged without considering framing",
              "nb": "Film scenen uendret uten å vurdere utsnitt",
              "fr": "Filmer la scène intacte sans considérer le cadre",
              "pt": "Filmar o palco sem considerar o enquadramento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the story is a record of historical facts",
              "nb": "Anta at fortellingen dokumenterer historiske fakta",
              "fr": "Supposer que le récit est un relevé de faits historiques",
              "pt": "Supor que a narrativa regista factos históricos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Adapt performance and spatial design to the screen",
              "nb": "Tilpass spill og romlig utforming til lerretet",
              "fr": "Adapter jeu et espace aux exigences de l’écran",
              "pt": "Adaptar interpretação e espaço ao ecrã"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Bergman Foundation documents Wood Painting origins, while Bergman explains contemporary fear through medieval forms. Separate theatrical origin from cinematic invention.",
          "nb": "Bergman-stiftelsen dokumenterer opphavet i Wood Painting, mens Bergman forklarer samtidens frykt gjennom middelalderformer. Skill teateropphav fra filmatisk nyskaping.",
          "fr": "La Fondation documente Wood Painting et Bergman explique la peur contemporaine par des formes médiévales. Distinguez origine théâtrale et invention filmique.",
          "pt": "A Fundação documenta Wood Painting e Bergman explica medo contemporâneo por formas medievais. Distinga origem teatral e invenção cinematográfica."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "theseventhseal-budget",
        "area": "research",
        "prompt": {
          "en": "How should a short, low-budget production be planned?",
          "nb": "Hvordan bør en kort produksjon med lavt budsjett planlegges?",
          "fr": "Comment organiser une production courte à petit budget ?",
          "pt": "Como planear uma produção curta de baixo orçamento?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Prioritize essential scenes, rehearsals and shared design",
              "nb": "Prioriter nødvendige scener, prøver og felles design",
              "fr": "Privilégier scènes essentielles, répétitions et décors coordonnés",
              "pt": "Priorizar cenas essenciais, ensaios e cenografia coordenada"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume unlimited shooting days and resources",
              "nb": "Anta ubegrensede opptaksdager og ressurser",
              "fr": "Supposer des jours et ressources illimités",
              "pt": "Supor dias de filmagem e recursos ilimitados"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent exact historical costs without evidence",
              "nb": "Dikt opp eksakte historiske kostnader uten dokumentasjon",
              "fr": "Inventer des coûts historiques exacts sans preuves",
              "pt": "Inventar custos históricos exatos sem provas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Foundation documents limited resources and a thirty-six-day shoot; Criterion credits distinct departments. Build a fictional schedule without inventing historical costs.",
          "nb": "Stiftelsen dokumenterer begrensede ressurser og 36 opptaksdager; Criterion krediterer ulike avdelinger. Lag en fiktiv plan uten oppdiktede historiske kostnader.",
          "fr": "La Fondation documente les ressources limitées et trente-six jours ; Criterion crédite les métiers. Créez un calendrier fictif sans inventer les coûts.",
          "pt": "A Fundação documenta recursos limitados e trinta e seis dias; a Criterion credita departamentos. Crie um calendário fictício sem inventar custos."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_ashes_and_diamonds_1958",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Compressed historical time and Polish Film School craft",
      "nb": "Komprimert historisk tid og den polske filmskolens håndverk",
      "fr": "Temps historique comprimé et cinéma de l’école polonaise",
      "pt": "Tempo histórico comprimido e cinema da escola polaca"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Popiół i diament",
        "publisher": "Filmoteka Narodowa – Instytut Audiowizualny",
        "url": "https://www.fina.gov.pl/lista-polskiego-dziedzictwa-filmowego/popiol-i-diament/"
      },
      {
        "id": "s1",
        "title": "POPIÓŁ I DIAMENT",
        "publisher": "FilmPolski.pl",
        "url": "https://www.filmpolski.pl/fp/index.php/122374"
      },
      {
        "id": "s2",
        "title": "Ashes and Diamonds (1958)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/c180424f-7b46-5095-8f9f-ea1600eedfaf/ashes-and-diamonds"
      },
      {
        "id": "s3",
        "title": "Ashes and Diamonds",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/342-ashes-and-diamonds"
      }
    ],
    "questions": [
      {
        "id": "ashesanddiamonds-time",
        "area": "research",
        "prompt": {
          "en": "How can a single-day narrative concentrate political conflict?",
          "nb": "Hvordan kan en fortelling over ett døgn konsentrere politisk konflikt?",
          "fr": "Comment un récit d’une journée concentre-t-il le conflit politique ?",
          "pt": "Como pode uma narrativa de um dia concentrar conflito político?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all connections between scenes and time",
              "nb": "Fjern alle forbindelser mellom scener og tid",
              "fr": "Supprimer les liens entre scènes et temps",
              "pt": "Eliminar ligações entre cenas e tempo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use fiction as an exhaustive account of the war",
              "nb": "Bruk fiksjonen som uttømmende beretning om krigen",
              "fr": "Utiliser la fiction comme récit exhaustif de la guerre",
              "pt": "Usar ficção como relato exaustivo da guerra"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Arrange encounters around a clear dramatic timeline",
              "nb": "Ordne møtene rundt en tydelig dramatisk tidslinje",
              "fr": "Organiser les rencontres selon une chronologie dramatique",
              "pt": "Organizar encontros numa cronologia dramática clara"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes compressed political conflict and FINA records the adaptation. Create an original timeline that separates narrative compression from historical evidence.",
          "nb": "BFI beskriver komprimert politisk konflikt og FINA dokumenterer adaptasjonen. Lag en egen tidslinje som skiller fortellingskomprimering fra historisk dokumentasjon.",
          "fr": "Le BFI décrit le conflit comprimé et FINA documente l’adaptation. Créez une chronologie distinguant compression narrative et preuve historique.",
          "pt": "O BFI descreve conflito comprimido e a FINA documenta a adaptação. Crie uma cronologia distinguindo compressão narrativa e prova histórica."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "ashesanddiamonds-image",
        "area": "camera",
        "prompt": {
          "en": "How can recurring objects carry dramatic associations?",
          "nb": "Hvordan kan tilbakevendende gjenstander bære dramatiske assosiasjoner?",
          "fr": "Comment des objets récurrents portent-ils des associations dramatiques ?",
          "pt": "Como podem objetos recorrentes transmitir associações dramáticas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compose objects and actors in contrasting contexts",
              "nb": "Komponer gjenstander og aktører i kontrasterende sammenhenger",
              "fr": "Composer objets et acteurs dans des contextes contrastés",
              "pt": "Compor objetos e atores em contextos contrastantes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign every object a single universal meaning",
              "nb": "Gi alle gjenstander én universell betydning",
              "fr": "Attribuer à chaque objet un sens universel",
              "pt": "Atribuir a cada objeto um significado universal"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the relationship between design and photography",
              "nb": "Ignorer forholdet mellom scenografi og foto",
              "fr": "Ignorer les rapports entre décor et photographie",
              "pt": "Ignorar a relação entre cenografia e fotografia"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "FINA and FilmPolski credit Wójcik and Mann. Design a new object motif through coordinated photography and design, without prescribing a single historical interpretation.",
          "nb": "FINA og FilmPolski krediterer Wójcik og Mann. Lag et eget gjenstandsmotiv gjennom samordnet foto og scenografi uten å fastsette én historisk tolkning.",
          "fr": "FINA et FilmPolski créditent Wójcik et Mann. Créez un motif original par coordination du décor et de l’image, sans imposer une interprétation.",
          "pt": "A FINA e a FilmPolski creditam Wójcik e Mann. Crie um motivo original coordenando fotografia e cenografia, sem impor interpretação única."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "ashesanddiamonds-context",
        "area": "research",
        "prompt": {
          "en": "How should the Polish Film School context be documented?",
          "nb": "Hvordan bør den polske filmskolens kontekst dokumenteres?",
          "fr": "Comment documenter le contexte de l’école polonaise ?",
          "pt": "Como documentar o contexto da escola polaca?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every Polish filmmaker shared one political position",
              "nb": "Anta at alle polske filmskapere hadde samme politiske syn",
              "fr": "Supposer une position politique commune à tous les cinéastes",
              "pt": "Supor posição política comum a todos os cineastas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate production credits, political context and later reception",
              "nb": "Skill produksjonskreditering, politisk kontekst og senere mottakelse",
              "fr": "Distinguer crédits, contexte politique et réception ultérieure",
              "pt": "Distinguir créditos, contexto político e receção posterior"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat festival recognition as evidence of every craft decision",
              "nb": "Bruk festivalanerkjennelse som bevis for alle håndverksvalg",
              "fr": "Prendre les prix pour preuve de chaque choix technique",
              "pt": "Tomar prémios como prova de cada escolha técnica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "FINA records production and Venice recognition, and Criterion situates the Polish Film School. Keep institutional evidence distinct from retrospective interpretation.",
          "nb": "FINA dokumenterer produksjon og Venezia-anerkjennelse, og Criterion plasserer den polske filmskolen. Skill institusjonell dokumentasjon fra retrospektiv tolkning.",
          "fr": "FINA documente production et Venise ; Criterion situe l’école polonaise. Distinguez les preuves institutionnelles des interprétations rétrospectives.",
          "pt": "A FINA documenta produção e Veneza; a Criterion situa a escola polaca. Distinga prova institucional de interpretação retrospetiva."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_touch_of_evil_1958",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Moving-camera choreography, source music and editorial history",
      "nb": "Kamerakoreografi, kildemusikk og klippehistorie",
      "fr": "Chorégraphie de caméra, musique diégétique et montage",
      "pt": "Coreografia de câmara, música diegética e montagem"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Touch of Evil",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/53683-TOUCH-OF-EVIL"
      },
      {
        "id": "s1",
        "title": "The Essential Orson Welles - Touch of Evil",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/events/essential-orson-welles-touch-evil"
      },
      {
        "id": "s2",
        "title": "Behind the scenes: Touch of Evil",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/behind-scenes-touch-evil"
      },
      {
        "id": "s3",
        "title": "The Mancini Touch",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/7893-the-mancini-touch"
      }
    ],
    "questions": [
      {
        "id": "touchofevil-movement",
        "area": "camera",
        "prompt": {
          "en": "How can a moving camera follow several staged actions?",
          "nb": "Hvordan kan et bevegelig kamera følge flere iscenesatte handlinger?",
          "fr": "Comment une caméra mobile suit-elle plusieurs actions mises en scène ?",
          "pt": "Como pode uma câmara móvel acompanhar várias ações encenadas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Storyboard actor and camera movements as coordinated beats",
              "nb": "Lag storyboard for samordnede skuespiller- og kamerabevegelser",
              "fr": "Préparer les mouvements coordonnés des acteurs et de la caméra",
              "pt": "Criar storyboard para movimentos coordenados de atores e câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Move the camera independently of every performer",
              "nb": "Beveg kameraet uavhengig av alle skuespillere",
              "fr": "Déplacer la caméra indépendamment de tous les acteurs",
              "pt": "Mover a câmara independentemente de todos os atores"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume one historical shot defines the entire film",
              "nb": "Anta at ett historisk bilde definerer hele filmen",
              "fr": "Supposer qu’un plan historique définit tout le film",
              "pt": "Supor que um plano histórico define todo o filme"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Academy documents the opening's camera and actor choreography; BFI credits Lathrop's coordination. Practice with a benign fictional movement scene, not an exact reenactment.",
          "nb": "Academy dokumenterer åpningssekvensens koreografi; BFI beskriver Lathrops samordning. Øv med en ufarlig fiktiv bevegelsesscene, ikke eksakt gjenskaping.",
          "fr": "L’Académie documente la chorégraphie d’ouverture et le BFI la coordination de Lathrop. Exercez-vous avec une scène fictive sans reconstitution exacte.",
          "pt": "A Academia documenta a coreografia inicial e o BFI a coordenação de Lathrop. Pratique com uma cena fictícia inofensiva, sem reconstituição exata."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "touchofevil-music",
        "area": "sound",
        "prompt": {
          "en": "How can music originating in a scene shape its spatial atmosphere?",
          "nb": "Hvordan kan musikk fra scenens miljø forme romatmosfæren?",
          "fr": "Comment la musique issue de la scène façonne-t-elle son atmosphère spatiale ?",
          "pt": "Como pode a música proveniente da cena moldar a atmosfera espacial?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Confuse all source music with non-diegetic score",
              "nb": "Forveksle all kildemusikk med ekstern filmmusikk",
              "fr": "Confondre musique diégétique et musique de fosse",
              "pt": "Confundir música diegética com banda musical externa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Vary audible music according to the imagined source and distance",
              "nb": "Varier hørbar musikk etter tenkt kilde og avstand",
              "fr": "Varier la musique audible selon source et distance imaginées",
              "pt": "Variar música audível conforme fonte e distância imaginadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical loud music in every location",
              "nb": "Bruk identisk høy musikk på alle steder",
              "fr": "Utiliser une musique forte identique en chaque lieu",
              "pt": "Usar música alta idêntica em todos os locais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes Mancini's source-music conception. Create original cues with spatial variation, distinguishing music within the scene from external score.",
          "nb": "Criterion beskriver Mancinis kildemusikkonsept. Lag egne lydinnslag med romlig variasjon og skill scenemusikk fra ekstern filmmusikk.",
          "fr": "Criterion décrit la conception diégétique de Mancini. Créez des repères originaux variant dans l’espace et distinguez les deux usages musicaux.",
          "pt": "A Criterion descreve a conceção diegética de Mancini. Crie marcas originais com variação espacial e distinga os dois usos musicais."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "touchofevil-versions",
        "area": "research",
        "prompt": {
          "en": "How should an editorially revised opening be compared?",
          "nb": "Hvordan bør en redaksjonelt revidert åpning sammenlignes?",
          "fr": "Comment comparer une ouverture révisée au montage ?",
          "pt": "Como comparar uma abertura revista na montagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every release has the same opening soundtrack",
              "nb": "Anta at alle utgaver har samme åpningslydspor",
              "fr": "Supposer une bande sonore d’ouverture identique partout",
              "pt": "Supor a mesma banda sonora inicial em todas as versões"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat a restoration as an untouched original release",
              "nb": "Behandle en restaurering som en urørt originalutgave",
              "fr": "Traiter une restauration comme sortie originale intacte",
              "pt": "Tratar um restauro como lançamento original intacto"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Identify each edition and compare its sound choices",
              "nb": "Identifiser hver utgave og sammenlign dens lydvalg",
              "fr": "Identifier chaque version et comparer ses choix sonores",
              "pt": "Identificar cada versão e comparar as escolhas sonoras"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents removal of imposed opening music in a later restoration. Record the edition and the editorial decision rather than conflating releases.",
          "nb": "Criterion dokumenterer fjerning av pålagt åpningsmusikk i en senere restaurering. Registrer utgaven og klippevalget fremfor å blande utgivelser.",
          "fr": "Criterion documente la suppression de musique ajoutée lors d’une restauration. Notez la version et le choix de montage plutôt que de confondre les éditions.",
          "pt": "A Criterion documenta a remoção de música imposta num restauro posterior. Registe versão e decisão de montagem sem confundir edições."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_vertigo_1958",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Subjective camera, visual motifs and narrative revelation",
      "nb": "Subjektivt kamera, bildemotiver og fortellingens avsløring",
      "fr": "Caméra subjective, motifs visuels et révélation narrative",
      "pt": "Câmara subjetiva, motivos visuais e revelação narrativa"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Vertigo: Hitchcock's Acrophobic Vision",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/flashback-vertigo"
      },
      {
        "id": "s1",
        "title": "Behind the Camera on Vertigo",
        "publisher": "Turner Classic Movies",
        "url": "https://www.tcm.com/articles/89391/behind-the-camera-6-18-and-12-3-vertigo"
      },
      {
        "id": "s2",
        "title": "The Big Idea Behind Vertigo",
        "publisher": "Turner Classic Movies",
        "url": "https://www.tcm.com/articles/89390/the-big-idea-6-18-and-12-3-vertigo"
      }
    ],
    "questions": [
      {
        "id": "vertigo-perspective",
        "area": "camera",
        "prompt": {
          "en": "How can changing perspective convey subjective unease?",
          "nb": "Hvordan kan endret perspektiv formidle subjektivt ubehag?",
          "fr": "Comment un changement de perspective traduit-il un malaise subjectif ?",
          "pt": "Como pode uma mudança de perspetiva transmitir desconforto subjetivo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Test the effect in a hazardous elevated location",
              "nb": "Test effekten på et farlig sted i høyden",
              "fr": "Tester l’effet dans un lieu élevé dangereux",
              "pt": "Testar o efeito num local elevado perigoso"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare controlled changes in scale and perspective",
              "nb": "Sammenlign kontrollerte endringer i skala og perspektiv",
              "fr": "Comparer des variations maîtrisées d’échelle et de perspective",
              "pt": "Comparar variações controladas de escala e perspetiva"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all camera movements as emotionally identical",
              "nb": "Behandle alle kamerabevegelser som følelsesmessig identiske",
              "fr": "Traiter tous les mouvements comme émotionnellement identiques",
              "pt": "Tratar todos os movimentos como emocionalmente idênticos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC documents the zoom-dolly effect and other optical work. Compare perspective on paper or in a safe floor-level setup without inventing historical lens settings.",
          "nb": "ASC dokumenterer zoom-dolly-effekten og optisk arbeid. Sammenlign perspektiv på papir eller i et trygt oppsett på gulvnivå uten oppdiktede objektivinnstillinger.",
          "fr": "L’ASC documente l’effet travelling-zoom et les trucages. Comparez les perspectives sur papier ou au sol, sans inventer les réglages historiques.",
          "pt": "A ASC documenta o efeito zoom-dolly e trabalho ótico. Compare perspetivas no papel ou ao nível do chão sem inventar regulações históricas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "vertigo-motifs",
        "area": "camera",
        "prompt": {
          "en": "How can a recurring visual motif change meaning over time?",
          "nb": "Hvordan kan et tilbakevendende bildemotiv endre betydning over tid?",
          "fr": "Comment un motif visuel récurrent change-t-il de sens avec le temps ?",
          "pt": "Como pode um motivo visual recorrente mudar de sentido com o tempo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply a single color mechanically to every scene",
              "nb": "Bruk én farge mekanisk på alle scener",
              "fr": "Appliquer une couleur mécaniquement à chaque scène",
              "pt": "Aplicar uma cor mecanicamente a todas as cenas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every repeated object has one fixed meaning",
              "nb": "Anta at alle gjentatte gjenstander har én fast betydning",
              "fr": "Supposer un sens fixe pour chaque objet répété",
              "pt": "Supor significado fixo para cada objeto repetido"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Repeat a color or shape in contrasting narrative contexts",
              "nb": "Gjenta en farge eller form i kontrasterende fortellingssammenhenger",
              "fr": "Répéter une couleur ou forme dans des contextes narratifs contrastés",
              "pt": "Repetir uma cor ou forma em contextos narrativos contrastantes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC discusses color and visual motifs; TCM records controlled location and effects work. Develop an original motif without treating interpretation as a production fact.",
          "nb": "ASC drøfter farger og bildemotiver; TCM dokumenterer kontrollerte stedsopptak og effekter. Utvikle et eget motiv uten å behandle tolkning som produksjonsfakta.",
          "fr": "L’ASC analyse couleurs et motifs ; TCM documente lieux et effets. Créez un motif original sans confondre interprétation et fait de production.",
          "pt": "A ASC analisa cores e motivos; a TCM documenta locais e efeitos. Crie um motivo original sem confundir interpretação com facto de produção."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "vertigo-revelation",
        "area": "research",
        "prompt": {
          "en": "How does the timing of a revelation change suspense?",
          "nb": "Hvordan endrer tidspunktet for en avsløring spenningen?",
          "fr": "Comment le moment d’une révélation modifie-t-il le suspense ?",
          "pt": "Como altera o momento de uma revelação o suspense?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare audience knowledge with character knowledge",
              "nb": "Sammenlign publikums kunnskap med figurens kunnskap",
              "fr": "Comparer savoir du public et savoir du personnage",
              "pt": "Comparar conhecimento do público e da personagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume suspense always requires withholding all information",
              "nb": "Anta at spenning alltid krever at all informasjon holdes tilbake",
              "fr": "Supposer que le suspense exige toujours de cacher toute information",
              "pt": "Supor que suspense exige sempre ocultar toda informação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Make every character learn the same facts simultaneously",
              "nb": "La alle figurer få vite de samme fakta samtidig",
              "fr": "Faire apprendre les mêmes faits à tous simultanément",
              "pt": "Fazer todos conhecerem os mesmos factos simultaneamente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "TCM's screenplay history documents the decision to reveal the secret before Scottie knows it. Design two fictional information timelines and compare suspense.",
          "nb": "TCMs manushistorie dokumenterer valget om å avsløre hemmeligheten før Scottie vet den. Lag to fiktive informasjonstidslinjer og sammenlign spenningen.",
          "fr": "L’histoire du scénario chez TCM documente la révélation avant Scottie. Concevez deux chronologies fictives de l’information et comparez le suspense.",
          "pt": "A história do argumento na TCM documenta a revelação antes de Scottie. Crie duas cronologias fictícias de informação e compare o suspense."
        },
        "sourceIds": [
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_paisan_1946",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Episodic realism, location substitutions and multilingual sound",
      "nb": "Episodisk realisme, stedserstatninger og flerspråklig lyd",
      "fr": "Réalisme épisodique, substitutions de lieux et son multilingue",
      "pt": "Realismo episódico, substituição de locais e som multilingue"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Paisan (1946)",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/2415-paisan"
      },
      {
        "id": "s1",
        "title": "Paisan: More Real Than Real",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/1357-paisan-more-real-than-real"
      },
      {
        "id": "s2",
        "title": "Paisan (1946)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/f6d498b8-db58-51bf-9da2-21afb1145ebf/paisan"
      },
      {
        "id": "s3",
        "title": "Roberto Rossellini",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/film/489"
      },
      {
        "id": "s4",
        "title": "La Cineteca Nazionale presenta a Venezia, nella sezione Venezia Classici, quattro restauri",
        "publisher": "CSC – Cineteca Nazionale",
        "url": "https://www.fondazionecsc.it/la-cineteca-nazionale-presenta-a-venezia-nella-sezione-venezia-classici-quattro-restauri-2/"
      }
    ],
    "questions": [
      {
        "id": "paisan-episodes",
        "area": "research",
        "prompt": {
          "en": "How can six independent episodes form a coherent feature?",
          "nb": "Hvordan kan seks selvstendige episoder danne en sammenhengende langfilm?",
          "fr": "Comment six épisodes autonomes forment-ils un long métrage cohérent ?",
          "pt": "Como podem seis episódios autónomos formar uma longa-metragem coerente?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Force every episode into the same character arc",
              "nb": "Tving alle episoder inn i samme karakterutvikling",
              "fr": "Imposer le même arc de personnage à tous les épisodes",
              "pt": "Impor o mesmo arco de personagem a todos os episódios"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the episodes as unedited newsreel material",
              "nb": "Behandle episodene som uklippet ukerevymateriale",
              "fr": "Traiter les épisodes comme actualités non montées",
              "pt": "Tratar episódios como atualidades não montadas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Connect episodes through chronology, themes and distinct encounters",
              "nb": "Knytt episodene sammen gjennom kronologi, temaer og ulike møter",
              "fr": "Relier épisodes par chronologie, thèmes et rencontres distinctes",
              "pt": "Ligar episódios por cronologia, temas e encontros distintos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion and BFI document six liberation encounters. Plan original connected episodes while distinguishing constructed fiction from direct historical footage.",
          "nb": "Criterion og BFI dokumenterer seks frigjøringsmøter. Planlegg egne sammenhengende episoder og skill konstruert fiksjon fra direkte historiske opptak.",
          "fr": "Criterion et le BFI documentent six rencontres de libération. Concevez des épisodes reliés distinguant fiction construite et archives directes.",
          "pt": "A Criterion e o BFI documentam seis encontros de libertação. Planeie episódios ligados distinguindo ficção construída e imagens históricas."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "paisan-location",
        "area": "camera",
        "prompt": {
          "en": "How should an alternative filming location be documented?",
          "nb": "Hvordan bør et alternativt opptakssted dokumenteres?",
          "fr": "Comment documenter un lieu de tournage de substitution ?",
          "pt": "Como documentar um local de filmagem de substituição?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record fictional setting separately from actual filming location",
              "nb": "Registrer fiktivt miljø separat fra faktisk opptakssted",
              "fr": "Noter séparément le lieu fictif et le lieu de tournage",
              "pt": "Registar separadamente cenário fictício e local real de filmagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the fictional location is always the real location",
              "nb": "Anta at det fiktive stedet alltid er det virkelige",
              "fr": "Supposer que le lieu fictif est toujours le lieu réel",
              "pt": "Supor que o local fictício é sempre o local real"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore location changes when revising the story",
              "nb": "Ignorer stedsendringer når fortellingen revideres",
              "fr": "Ignorer les changements de lieux en révisant le récit",
              "pt": "Ignorar mudanças de local ao rever a narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "MacCabe documents location substitutions and a changed Naples storyline. Maintain a fictional production log linking setting, actual place and script revision.",
          "nb": "MacCabe dokumenterer stedserstatninger og en endret Napoli-fortelling. Før en fiktiv produksjonslogg som knytter miljø, sted og manusrevisjon sammen.",
          "fr": "MacCabe documente substitutions et récit napolitain modifié. Tenez un journal fictif reliant lieu narratif, lieu réel et révision.",
          "pt": "MacCabe documenta substituições e narrativa de Nápoles alterada. Mantenha um registo fictício ligando cenário, local real e revisão."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "paisan-dubbing",
        "area": "sound",
        "prompt": {
          "en": "How should multilingual dialogue be planned and credited?",
          "nb": "Hvordan bør flerspråklig dialog planlegges og krediteres?",
          "fr": "Comment prévoir et créditer les dialogues multilingues ?",
          "pt": "Como planear e creditar diálogos multilingues?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase every language distinction in the production record",
              "nb": "Fjern alle språkforskjeller i produksjonsdokumentasjonen",
              "fr": "Effacer toute distinction linguistique du dossier",
              "pt": "Apagar todas as distinções linguísticas do dossier"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish performance, dialect and postproduction dubbing",
              "nb": "Skill skuespill, dialekt og dubbing i etterarbeidet",
              "fr": "Distinguer interprétation, dialecte et doublage en postproduction",
              "pt": "Distinguir interpretação, dialeto e dobragem na pós-produção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all dialogue was recorded synchronously on location",
              "nb": "Anta at all dialog ble tatt opp synkront på location",
              "fr": "Supposer que tout dialogue fut enregistré en son direct",
              "pt": "Supor que todo diálogo foi gravado em som direto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "MacCabe records dubbing for Carmela and the friars. Document the spoken and replacement voices without generalizing the sound workflow to every scene.",
          "nb": "MacCabe dokumenterer dubbing av Carmela og munkene. Dokumenter tale og erstatningsstemmer uten å generalisere lydarbeidet til alle scener.",
          "fr": "MacCabe documente le doublage de Carmela et des frères. Notez les voix jouées et remplacées sans généraliser à toutes les scènes.",
          "pt": "MacCabe documenta a dobragem de Carmela e dos frades. Registe vozes originais e substituídas sem generalizar a todas as cenas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_red_shoes_1948",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ballet, Technicolor and collaborative previsualization",
      "nb": "Ballett, Technicolor og samordnet forhåndsvisualisering",
      "fr": "Ballet, Technicolor et prévisualisation collective",
      "pt": "Ballet, Technicolor e pré-visualização coletiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Red Shoes (1948)",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/233-the-red-shoes"
      },
      {
        "id": "s1",
        "title": "5 things to know about The Red Shoes",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/red-shoes-michael-powell-emeric-pressburger"
      },
      {
        "id": "s2",
        "title": "10 great British Technicolor films",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-british-technicolor-films"
      },
      {
        "id": "s3",
        "title": "The 21st Academy Awards | 1949",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1949"
      },
      {
        "id": "s4",
        "title": "The Red Shoes. 1948",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/events/9701"
      }
    ],
    "questions": [
      {
        "id": "theredshoes-color",
        "area": "camera",
        "prompt": {
          "en": "How can color designs guide a ballet sequence before filming?",
          "nb": "Hvordan kan fargedesign styre en ballettsekvens før opptak?",
          "fr": "Comment la conception des couleurs guide-t-elle un ballet avant tournage ?",
          "pt": "Como pode o desenho de cor orientar um ballet antes da filmagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Prepare a color storyboard shared by dance and camera teams",
              "nb": "Lag fargestoryboard som deles av danse- og kamerateam",
              "fr": "Préparer un storyboard couleur partagé par danse et caméra",
              "pt": "Preparar storyboard de cor partilhado por dança e câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose every palette only after filming ends",
              "nb": "Velg alle paletter først etter at opptakene er ferdige",
              "fr": "Choisir toutes les palettes après le tournage",
              "pt": "Escolher todas as paletas após a filmagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat digital grading as the historical Technicolor process",
              "nb": "Behandle digital fargegradering som historisk Technicolor",
              "fr": "Assimiler étalonnage numérique et Technicolor historique",
              "pt": "Equiparar gradação digital ao Technicolor histórico"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI documents Heckroth's planned colors and a preparatory film from sketches. Develop a new previsualization rather than claiming to replicate historical technology.",
          "nb": "BFI dokumenterer Heckroths planlagte farger og en forberedende film av skisser. Lag egen forhåndsvisualisering uten å hevde å kopiere historisk teknologi.",
          "fr": "Le BFI documente couleurs planifiées et film préparatoire de Heckroth. Créez une prévisualisation sans prétendre reproduire la technologie historique.",
          "pt": "O BFI documenta cores planeadas e filme preparatório de Heckroth. Crie uma pré-visualização sem alegar replicar a tecnologia histórica."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "theredshoes-dance",
        "area": "camera",
        "prompt": {
          "en": "How can cinematic ballet differ from recording a stage performance?",
          "nb": "Hvordan kan filmballett skille seg fra opptak av en sceneforestilling?",
          "fr": "Comment un ballet filmé diffère-t-il d’une captation scénique ?",
          "pt": "Como pode um ballet cinematográfico diferir de uma gravação de palco?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute all ballet decisions to the director alone",
              "nb": "Tilskriv alle ballettvalg til regissøren alene",
              "fr": "Attribuer tous les choix du ballet au seul réalisateur",
              "pt": "Atribuir todas as escolhas do ballet apenas ao realizador"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate choreography, framing and editorial transitions",
              "nb": "Samordne koreografi, utsnitt og klippeoverganger",
              "fr": "Coordonner chorégraphie, cadrage et transitions de montage",
              "pt": "Coordenar coreografia, enquadramento e transições de montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep every camera decision unrelated to movement",
              "nb": "Hold alle kameravalg urelatert til bevegelsen",
              "fr": "Dissocier tous les choix de caméra du mouvement",
              "pt": "Dissociar todas as escolhas de câmara do movimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion credits Helpmann, Massine, Cardiff and Mills. Plan an original short movement study showing how choreography, photography and editing work together.",
          "nb": "Criterion krediterer Helpmann, Massine, Cardiff og Mills. Planlegg en egen kort bevegelsesstudie som viser samspill mellom koreografi, foto og klipp.",
          "fr": "Criterion crédite Helpmann, Massine, Cardiff et Mills. Concevez une étude originale montrant les liens entre chorégraphie, image et montage.",
          "pt": "A Criterion credita Helpmann, Massine, Cardiff e Mills. Planeie um estudo original mostrando a relação entre coreografia, fotografia e montagem."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "theredshoes-score",
        "area": "sound",
        "prompt": {
          "en": "How should dance and score collaboration be organized?",
          "nb": "Hvordan bør samarbeidet mellom dans og filmmusikk organiseres?",
          "fr": "Comment organiser la collaboration entre danse et musique ?",
          "pt": "Como organizar a colaboração entre dança e música?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the entire feature was filmed to playback",
              "nb": "Anta at hele langfilmen ble tatt opp til avspilling",
              "fr": "Supposer que tout le film fut tourné en playback",
              "pt": "Supor que toda a longa foi filmada com playback"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the score until the choreography is finished",
              "nb": "Ignorer musikken til koreografien er ferdig",
              "fr": "Ignorer la musique jusqu’à la fin de la chorégraphie",
              "pt": "Ignorar música até terminar a coreografia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree shared timing references with composer and choreographer",
              "nb": "Avtal felles tidsreferanser med komponist og koreograf",
              "fr": "Convenir de repères temporels avec compositeur et chorégraphe",
              "pt": "Acordar referências temporais com compositor e coreógrafo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion credits Easdale, Helpmann and Beecham; the Academy recognizes the score. Plan shared timing without claiming a uniform historical playback method.",
          "nb": "Criterion krediterer Easdale, Helpmann og Beecham; Academy anerkjenner musikken. Planlegg felles timing uten å hevde en ensartet historisk avspillingsmetode.",
          "fr": "Criterion crédite Easdale, Helpmann et Beecham ; l’Académie distingue la musique. Prévoyez des repères sans généraliser le playback historique.",
          "pt": "A Criterion credita Easdale, Helpmann e Beecham; a Academia reconhece a música. Planeie referências sem generalizar o playback histórico."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_sunset_boulevard_1950",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Studio self-reflection, constructed spaces and revised openings",
      "nb": "Studioets selvrefleksjon, konstruerte rom og reviderte åpninger",
      "fr": "Autoportrait du studio, espaces construits et ouvertures révisées",
      "pt": "Autorreflexão do estúdio, espaços construídos e aberturas revistas"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Sunset Blvd. (1950)",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/26513-SUNSET-BLVD"
      },
      {
        "id": "s1",
        "title": "The 23rd Academy Awards | 1951",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1951"
      },
      {
        "id": "s2",
        "title": "Complete National Film Registry Listing",
        "publisher": "Library of Congress / National Film Preservation Board",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/"
      },
      {
        "id": "s3",
        "title": "Sunset Blvd. (1950)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/f43ad3dd-1b5b-5f19-aa10-5f29d8f33da2/sunset-blvd"
      },
      {
        "id": "s4",
        "title": "I am NOT going to write my memoirs!: Gloria Swanson",
        "publisher": "BFI / Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/i-am-not-going-write-my-memoirs-gloria-swanson-talks-pictures"
      }
    ],
    "questions": [
      {
        "id": "sunsetboulevard-memory",
        "area": "research",
        "prompt": {
          "en": "How can cinema history become part of a fictional story?",
          "nb": "Hvordan kan filmhistorie bli en del av en fiktiv fortelling?",
          "fr": "Comment l’histoire du cinéma entre-t-elle dans un récit fictif ?",
          "pt": "Como pode a história do cinema integrar uma narrativa fictícia?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the provenance of reused film material",
              "nb": "Ignorer proveniensen til gjenbrukt filmmateriale",
              "fr": "Ignorer la provenance des images réemployées",
              "pt": "Ignorar a proveniência das imagens reutilizadas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish archival material, performers and fictional characters",
              "nb": "Skill arkivmateriale, skuespillere og fiktive figurer",
              "fr": "Distinguer archives, interprètes et personnages fictifs",
              "pt": "Distinguir arquivo, intérpretes e personagens fictícias"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every fictional character as an actual biography",
              "nb": "Behandle alle fiktive figurer som faktiske biografier",
              "fr": "Traiter chaque personnage comme une biographie réelle",
              "pt": "Tratar cada personagem como biografia real"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI and BFI document silent-era material and Swanson's industrial memory. Create an original fictional reference while distinguishing biography from characterization.",
          "nb": "AFI og BFI dokumenterer stumfilmmateriale og Swansons bransjehistorie. Lag en egen fiktiv referanse og skill biografi fra rollefigur.",
          "fr": "L’AFI et le BFI documentent les images muettes et la mémoire de Swanson. Créez une référence fictive distinguant biographie et personnage.",
          "pt": "A AFI e o BFI documentam imagens mudas e memória de Swanson. Crie referência fictícia distinguindo biografia e personagem."
        },
        "sourceIds": [
          "s0",
          "s3",
          "s4"
        ]
      },
      {
        "id": "sunsetboulevard-space",
        "area": "camera",
        "prompt": {
          "en": "How can real locations and studio replicas form one screen world?",
          "nb": "Hvordan kan virkelige steder og studiokopier danne én filmverden?",
          "fr": "Comment lieux réels et répliques de studio forment-ils un univers cohérent ?",
          "pt": "Como podem locais reais e réplicas de estúdio formar um mundo coerente?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every exterior and interior shares one actual address",
              "nb": "Anta at alle eksteriører og interiører har samme faktiske adresse",
              "fr": "Supposer une même adresse réelle pour tout extérieur et intérieur",
              "pt": "Supor um endereço real único para exteriores e interiores"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore continuity when combining the spaces",
              "nb": "Ignorer kontinuitet når rommene kombineres",
              "fr": "Ignorer les raccords en combinant les espaces",
              "pt": "Ignorar continuidade ao combinar espaços"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Match spatial references across sets and locations",
              "nb": "Sørg for samsvar i romlige referanser mellom kulisser og locations",
              "fr": "Faire correspondre les repères spatiaux entre décors et lieux",
              "pt": "Fazer corresponder referências espaciais entre cenários e locais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents mansion locations, added pool and constructed replicas. Design a fictional location-set plan that keeps actual and represented places separate.",
          "nb": "AFI dokumenterer herskapshus, tilføyd basseng og konstruerte kopier. Lag en fiktiv steds- og kulisseplan som skiller faktiske og representerte steder.",
          "fr": "L’AFI documente demeure, piscine ajoutée et répliques. Concevez un plan fictif distinguant lieux réels et représentés.",
          "pt": "A AFI documenta mansão, piscina acrescentada e réplicas. Crie um plano fictício distinguindo locais reais e representados."
        },
        "sourceIds": [
          "s0"
        ]
      },
      {
        "id": "sunsetboulevard-preview",
        "area": "research",
        "prompt": {
          "en": "How should a preview-driven opening revision be recorded?",
          "nb": "Hvordan bør en åpningsrevisjon etter prøvevisning dokumenteres?",
          "fr": "Comment documenter une ouverture révisée après projection test ?",
          "pt": "Como documentar uma abertura revista após sessão de teste?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record the original version, response and editorial change",
              "nb": "Registrer originalversjon, respons og klippeendring",
              "fr": "Consigner version initiale, réaction et modification",
              "pt": "Registar versão inicial, reação e alteração editorial"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a removed opening was never filmed",
              "nb": "Anta at en fjernet åpning aldri ble filmet",
              "fr": "Supposer qu’une ouverture supprimée ne fut jamais tournée",
              "pt": "Supor que uma abertura removida nunca foi filmada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat all runtime listings as exact copies of one edition",
              "nb": "Behandle alle spilletidsoppføringer som samme utgave",
              "fr": "Traiter toutes les durées comme une édition identique",
              "pt": "Tratar todas as durações como uma edição idêntica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records the rejected morgue opening and preview-driven change. Maintain a fictional revision log rather than treating the release as the only production evidence.",
          "nb": "AFI dokumenterer den forkastede likhusåpningen og endringen etter prøvevisning. Før en fiktiv revisjonslogg fremfor å behandle utgivelsen som eneste produksjonsbevis.",
          "fr": "L’AFI documente l’ouverture de morgue rejetée après projection test. Tenez un journal de révision fictif sans réduire les preuves à la sortie finale.",
          "pt": "A AFI documenta a abertura na morgue rejeitada após teste. Mantenha um registo fictício de revisão sem reduzir provas ao lançamento final."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_los_olvidados_1950",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Social research, hybrid locations and alternate endings",
      "nb": "Sosial research, kombinerte opptakssteder og alternative slutter",
      "fr": "Recherche sociale, lieux hybrides et fins alternatives",
      "pt": "Pesquisa social, locais híbridos e finais alternativos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Original negative of Luis Buñuel's Los olvidados (1950)",
        "publisher": "UNESCO Memory of the World",
        "url": "https://www.unesco.org/en/memory-world/lac/original-negative-luis-bunuels-los-olvidados-1950"
      },
      {
        "id": "s1",
        "title": "Tercer Ciclo Restaurados por el valor y la memoria audiovisual",
        "publisher": "Filmoteca UNAM",
        "url": "https://www.filmoteca.unam.mx/tercer-ciclo-restaurados-por-el-valor-y-la-memoria-audiovisual/"
      },
      {
        "id": "s2",
        "title": "Modernización en la gran ciudad. Los olvidados (Luis Buñuel, 1950)",
        "publisher": "Instituto Cervantes / Centro Virtual Cervantes",
        "url": "https://cvc.cervantes.es/artes/cine/mexico_ilustrado/olvidados.htm"
      },
      {
        "id": "s3",
        "title": "Los Olvidados",
        "publisher": "The Film Foundation / World Cinema Project",
        "url": "https://www.film-foundation.org/world-cinema?page=4&sortBy=title&sortOrder=1"
      },
      {
        "id": "s4",
        "title": "LOS OLVIDADOS — 1951 Competition",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/los-olvidados-3/"
      }
    ],
    "questions": [
      {
        "id": "losolvidados-research",
        "area": "research",
        "prompt": {
          "en": "How can social research inform a fictional film responsibly?",
          "nb": "Hvordan kan sosial research informere en fiktiv film på ansvarlig vis?",
          "fr": "Comment une recherche sociale nourrit-elle une fiction de façon responsable ?",
          "pt": "Como pode pesquisa social informar uma ficção de forma responsável?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every fictional event as verified social evidence",
              "nb": "Behandle alle fiktive hendelser som verifiserte sosiale bevis",
              "fr": "Traiter chaque événement fictif comme preuve sociale vérifiée",
              "pt": "Tratar cada evento fictício como prova social verificada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Reduce vulnerable people to stereotypical imagery",
              "nb": "Reduser sårbare mennesker til stereotype bilder",
              "fr": "Réduire les personnes vulnérables à des images stéréotypées",
              "pt": "Reduzir pessoas vulneráveis a imagens estereotipadas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate documented research from invented characters and events",
              "nb": "Skill dokumentert research fra oppdiktede figurer og hendelser",
              "fr": "Distinguer recherche documentée et personnages ou événements inventés",
              "pt": "Distinguir pesquisa documentada e personagens ou eventos inventados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "UNESCO records two years of research and writing. Create an original research plan that respects participants and separates evidence from fictional transformation.",
          "nb": "UNESCO dokumenterer to års research og manusarbeid. Lag en egen researchplan som respekterer medvirkende og skiller dokumentasjon fra fiktiv bearbeiding.",
          "fr": "L’UNESCO documente deux ans de recherche et d’écriture. Créez un plan respectueux distinguant preuves et transformation fictionnelle.",
          "pt": "A UNESCO documenta dois anos de pesquisa e escrita. Crie um plano respeitoso distinguindo provas e transformação ficcional."
        },
        "sourceIds": [
          "s0"
        ]
      },
      {
        "id": "losolvidados-locations",
        "area": "camera",
        "prompt": {
          "en": "How can city locations and studio scenes support a coherent visual style?",
          "nb": "Hvordan kan bylocations og studioscener støtte en sammenhengende bildestil?",
          "fr": "Comment lieux urbains et studio soutiennent-ils un style visuel cohérent ?",
          "pt": "Como podem locais urbanos e estúdio apoiar um estilo visual coerente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Coordinate visual references while recording the two methods separately",
              "nb": "Samordne bildereferanser og dokumenter de to metodene separat",
              "fr": "Coordonner références visuelles en documentant les deux méthodes séparément",
              "pt": "Coordenar referências visuais documentando os dois métodos separadamente"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every shot was filmed in the actual street",
              "nb": "Anta at alle bilder ble tatt opp i den virkelige gaten",
              "fr": "Supposer que tous les plans furent tournés dans la rue réelle",
              "pt": "Supor que todos os planos foram filmados na rua real"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the credited cinematography and design teams",
              "nb": "Ignorer de krediterte foto- og scenografiteamene",
              "fr": "Ignorer les équipes créditées de photographie et décor",
              "pt": "Ignorar equipas creditadas de fotografia e cenografia"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "UNAM documents Tepeyac studios and Mexico City locations; Cervantes records Figueroa and Fitzgerald. Plan a new hybrid scene without inventing exact historical shot assignments.",
          "nb": "UNAM dokumenterer Tepeyac-studioer og Mexico City-locations; Cervantes krediterer Figueroa og Fitzgerald. Planlegg en ny hybridscene uten oppdiktede historiske bildeplasseringer.",
          "fr": "UNAM documente studios Tepeyac et lieux de Mexico ; Cervantes crédite Figueroa et Fitzgerald. Concevez une scène hybride sans inventer les lieux de chaque plan.",
          "pt": "A UNAM documenta estúdios Tepeyac e locais da Cidade do México; Cervantes credita Figueroa e Fitzgerald. Planeie uma cena híbrida sem inventar locais de cada plano."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "losolvidados-ending",
        "area": "research",
        "prompt": {
          "en": "How should an alternate ending be treated in a film dossier?",
          "nb": "Hvordan bør en alternativ slutt behandles i en filmmappe?",
          "fr": "Comment traiter une fin alternative dans un dossier de film ?",
          "pt": "Como tratar um final alternativo num dossier de filme?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use runtime differences alone to identify the ending",
              "nb": "Bruk bare spilletidsforskjeller til å identifisere slutten",
              "fr": "Identifier la fin uniquement par les différences de durée",
              "pt": "Identificar o final apenas por diferenças de duração"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish the released ending, alternate footage and restoration",
              "nb": "Skill den utgitte slutten, alternative opptak og restaurering",
              "fr": "Distinguer fin sortie, images alternatives et restauration",
              "pt": "Distinguir final lançado, imagens alternativas e restauro"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the alternate ending replaced every released version",
              "nb": "Anta at den alternative slutten erstattet alle utgitte versjoner",
              "fr": "Supposer que la fin alternative a remplacé toutes les versions",
              "pt": "Supor que o final alternativo substituiu todas as versões"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "UNESCO documents the secretly filmed alternative ending; the Film Foundation documents preservation and restoration. Label version provenance explicitly rather than guessing from duration.",
          "nb": "UNESCO dokumenterer den hemmelig filmede alternative slutten; Film Foundation dokumenterer bevaring og restaurering. Merk utgaveproveniens eksplisitt fremfor å gjette ut fra spilletid.",
          "fr": "L’UNESCO documente la fin alternative secrète ; la Film Foundation documente préservation et restauration. Indiquez la provenance sans deviner par durée.",
          "pt": "A UNESCO documenta o final alternativo secreto; a Film Foundation documenta preservação e restauro. Indique proveniência sem adivinhar pela duração."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_ugetsu_1953",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Period drama, literary adaptation and flowing camera movement",
      "nb": "Periodedrama, litterær adaptasjon og flytende kamera",
      "fr": "Film historique, adaptation littéraire et caméra fluide",
      "pt": "Drama de época, adaptação literária e câmara fluida"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Ugetsu",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/369-ugetsu"
      },
      {
        "id": "s1",
        "title": "Ugetsu Monogatari",
        "publisher": "La Biennale di Venezia / ASAC",
        "url": "https://asac.labiennale.org/attivita/cinema/4018"
      },
      {
        "id": "s2",
        "title": "Ugetsu: From the Other Shore",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/401-ugetsu-from-the-other-shore"
      },
      {
        "id": "s3",
        "title": "Ugetsu Monogatari (1953)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/cf595a9f-f9cf-5581-9d1b-2d04df5715ae/ugetsu-monogatari"
      },
      {
        "id": "s4",
        "title": "Out of the Vaults: Ugetsu, 1953",
        "publisher": "The Film Foundation",
        "url": "https://www.film-foundation.org/hfpa-ugetsu"
      }
    ],
    "questions": [
      {
        "id": "ugetsu-adapt",
        "area": "research",
        "prompt": {
          "en": "How should multiple literary sources inform the adaptation?",
          "nb": "Hvordan bør flere litterære kilder forme adaptasjonen?",
          "fr": "Comment plusieurs sources littéraires doivent-elles nourrir l’adaptation ?",
          "pt": "Como devem várias fontes literárias orientar a adaptação?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Combine motifs around the cost of war",
              "nb": "Foren motiver rundt krigens kostnad",
              "fr": "Unir les motifs autour du coût de la guerre",
              "pt": "Unir motivos em torno do custo da guerra"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Adapt only one tale word for word",
              "nb": "Adapter bare én fortelling ordrett",
              "fr": "Adapter un seul récit mot à mot",
              "pt": "Adaptar apenas um conto palavra por palavra"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase the civilian point of view",
              "nb": "Fjern sivilbefolkningens perspektiv",
              "fr": "Effacer le point de vue des civils",
              "pt": "Apagar o ponto de vista dos civis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Criterion essay describes the fusion of Ueda and Maupassant and the emphasis on ordinary people harmed by war.",
          "nb": "Criterion-essayet beskriver kombinasjonen av Ueda og Maupassant og vektleggingen av vanlige mennesker rammet av krig.",
          "fr": "L’essai Criterion décrit la fusion d’Ueda et Maupassant et l’accent sur les victimes civiles de la guerre.",
          "pt": "O ensaio Criterion descreve a fusão de Ueda e Maupassant e o foco nas vítimas civis da guerra."
        },
        "sourceIds": [
          "s2",
          "s0"
        ]
      },
      {
        "id": "ugetsu-movement",
        "area": "camera",
        "prompt": {
          "en": "How can a supernatural encounter unfold within a moving shot?",
          "nb": "Hvordan kan et overnaturlig møte utspille seg i et bevegelig bilde?",
          "fr": "Comment déployer une rencontre surnaturelle dans un plan mobile ?",
          "pt": "Como desenvolver um encontro sobrenatural num plano móvel?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace spatial staging with unrelated inserts",
              "nb": "Erstatt romlig iscenesettelse med urelaterte innklipp",
              "fr": "Remplacer la mise en espace par des inserts sans lien",
              "pt": "Substituir a encenação espacial por insertos sem relação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Claim a specific crane model without evidence",
              "nb": "Påstå en bestemt kranmodell uten belegg",
              "fr": "Affirmer un modèle de grue sans preuve",
              "pt": "Afirmar um modelo de grua sem provas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse movement and transitions within the frame",
              "nb": "Øv på bevegelse og overganger i bildet",
              "fr": "Répéter les mouvements et transitions dans le cadre",
              "pt": "Ensaiar movimentos e transições dentro do quadro"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Miyagawa's recollection supports crane-based staging; it does not establish the exact hardware of an individual shot.",
          "nb": "Miyagawas erindring støtter kranbasert iscenesettelse, men fastslår ikke utstyret i hvert enkelt opptak.",
          "fr": "Le souvenir de Miyagawa étaye les mouvements de grue sans identifier le matériel de chaque plan.",
          "pt": "A memória de Miyagawa sustenta o uso de grua sem identificar o equipamento de cada plano."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "ugetsu-edition",
        "area": "research",
        "prompt": {
          "en": "How should the 96 and 97 minute listings be recorded?",
          "nb": "Hvordan bør oppføringene på 96 og 97 minutter registreres?",
          "fr": "Comment consigner les durées de 96 et 97 minutes ?",
          "pt": "Como registar as durações de 96 e 97 minutos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat restoration as original camera work",
              "nb": "Behandle restaurering som opprinnelig kameraarbeid",
              "fr": "Confondre restauration et prise de vues originale",
              "pt": "Confundir restauro com a filmagem original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record edition and institutional provenance separately",
              "nb": "Registrer utgave og institusjonell proveniens separat",
              "fr": "Consigner séparément édition et provenance institutionnelle",
              "pt": "Registar separadamente edição e proveniência institucional"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Declare an alternate cut from duration alone",
              "nb": "Erklær en alternativ klippversjon ut fra lengden alene",
              "fr": "Déclarer un montage alternatif d’après la durée seule",
              "pt": "Declarar uma montagem alternativa só pela duração"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion and Venice list different durations; the Film Foundation documents later restoration, not a proven alternate cut.",
          "nb": "Criterion og Venezia oppgir ulike lengder; Film Foundation dokumenterer senere restaurering, ikke en påvist alternativ klippversjon.",
          "fr": "Criterion et Venise donnent des durées différentes ; la Film Foundation documente une restauration ultérieure, non un montage alternatif établi.",
          "pt": "Criterion e Veneza indicam durações distintas; a Film Foundation documenta restauro posterior, não uma montagem alternativa comprovada."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_a_man_escaped_1956",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Restricted viewpoint, material objects and offscreen sound",
      "nb": "Begrenset perspektiv, materielle objekter og lyd utenfor bildet",
      "fr": "Point de vue restreint, objets et son hors champ",
      "pt": "Ponto de vista restrito, objetos e som fora de campo"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Un condamné à mort s'est échappé",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/46782.html"
      },
      {
        "id": "s1",
        "title": "A Man Escaped",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/27848-a-man-escaped"
      },
      {
        "id": "s2",
        "title": "A Man Escaped: Quintessential Bresson",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/2628-a-man-escaped-quintessential-bresson"
      },
      {
        "id": "s3",
        "title": "10 Things I Learned: A Man Escaped",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5589-10-things-i-learned-a-man-escaped"
      },
      {
        "id": "s4",
        "title": "Montluc avant/après : une découverte photographique",
        "publisher": "Mémorial national de la prison de Montluc",
        "url": "https://www.memorial-montluc.fr/ressources/montluc-en-photos"
      },
      {
        "id": "s5",
        "title": "Un condamné à mort s'est échappé",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/un-condamne-a-mort-s-est-echappe/"
      }
    ],
    "questions": [
      {
        "id": "amanescaped-sound",
        "area": "sound",
        "prompt": {
          "en": "How can an unseen corridor become intelligible?",
          "nb": "Hvordan kan en usett korridor bli forståelig?",
          "fr": "Comment rendre intelligible un couloir invisible ?",
          "pt": "Como tornar inteligível um corredor invisível?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Show every source of sound immediately",
              "nb": "Vis alle lydkilder umiddelbart",
              "fr": "Montrer immédiatement chaque source sonore",
              "pt": "Mostrar imediatamente cada fonte sonora"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Cover every cue with continuous music",
              "nb": "Dekk alle signaler med kontinuerlig musikk",
              "fr": "Couvrir chaque indice de musique continue",
              "pt": "Cobrir todas as pistas com música contínua"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Design distinct offscreen cues for movement and distance",
              "nb": "Utform tydelige lydsignaler for bevegelse og avstand utenfor bildet",
              "fr": "Créer des indices sonores distincts de mouvement et de distance",
              "pt": "Criar pistas sonoras distintas de movimento e distância"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes Bresson's restricted viewpoint and structural offscreen sound; build a fictional cue sheet rather than a literal reconstruction.",
          "nb": "Criterion beskriver Bressons begrensede perspektiv og strukturelle lyd utenfor bildet; lag et fiktivt lydskjema, ikke en bokstavelig rekonstruksjon.",
          "fr": "Criterion décrit le regard restreint et le son hors champ structurel ; concevez un plan sonore fictif plutôt qu’une reconstitution.",
          "pt": "A Criterion descreve o ponto de vista restrito e o som estrutural fora de campo; crie um plano sonoro fictício, não uma reconstrução."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "amanescaped-objects",
        "area": "research",
        "prompt": {
          "en": "How should researched objects shape a fictional scene?",
          "nb": "Hvordan bør undersøkte gjenstander forme en fiktiv scene?",
          "fr": "Comment les objets documentés doivent-ils façonner une scène fictive ?",
          "pt": "Como devem os objetos pesquisados moldar uma cena fictícia?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace object work with expository dialogue",
              "nb": "Erstatt gjenstandsarbeidet med forklarende dialog",
              "fr": "Remplacer le travail des objets par un dialogue explicatif",
              "pt": "Substituir o trabalho com objetos por diálogo explicativo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use documented references for tactile continuity",
              "nb": "Bruk dokumenterte referanser for taktil kontinuitet",
              "fr": "Utiliser les références documentées pour la continuité tactile",
              "pt": "Usar referências documentadas para continuidade tátil"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Invent exact historical specifications",
              "nb": "Finn på eksakte historiske spesifikasjoner",
              "fr": "Inventer des spécifications historiques exactes",
              "pt": "Inventar especificações históricas exatas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion records preserved props as references and Devigny's adviser role; distinguish reference evidence from the new fictional staging.",
          "nb": "Criterion dokumenterer bevarte gjenstander som referanser og Devignys rådgiverrolle; skill kildebelegg fra ny fiktiv iscenesettelse.",
          "fr": "Criterion documente les objets conservés et le rôle de conseiller de Devigny ; distinguez les références de la nouvelle mise en scène.",
          "pt": "A Criterion documenta objetos preservados e a consultoria de Devigny; distinga referências da nova encenação fictícia."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "amanescaped-framing",
        "area": "camera",
        "prompt": {
          "en": "How can consistent framing support restricted knowledge?",
          "nb": "Hvordan kan konsekvent innramming støtte begrenset kunnskap?",
          "fr": "Comment un cadrage cohérent sert-il un savoir restreint ?",
          "pt": "Como pode um enquadramento coerente apoiar o conhecimento restrito?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse actor position within a consistent framing rule",
              "nb": "Øv på skuespillerposisjon innen en konsekvent billedregel",
              "fr": "Répéter les positions dans une règle de cadrage cohérente",
              "pt": "Ensaiar posições dos atores com uma regra de enquadramento coerente"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Change viewpoint randomly on every cut",
              "nb": "Bytt perspektiv tilfeldig ved hvert klipp",
              "fr": "Changer de point de vue au hasard à chaque coupe",
              "pt": "Mudar de ponto de vista ao acaso em cada corte"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer an undocumented camera body",
              "nb": "Utled et udokumentert kamerahus",
              "fr": "Déduire un boîtier non documenté",
              "pt": "Inferir um corpo de câmara não documentado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion reports a fixed focal length and mixed studio and location work; continuity is a staging problem, not a claim about undocumented equipment.",
          "nb": "Criterion omtaler fast brennvidde og både studio- og stedsopptak; kontinuitet er et iscenesettelsesproblem, ikke en påstand om udokumentert utstyr.",
          "fr": "Criterion signale une focale fixe et des tournages en studio et en décor réel ; la continuité relève de la mise en scène, non du matériel inconnu.",
          "pt": "A Criterion refere distância focal fixa e filmagem em estúdio e local real; a continuidade é uma questão de encenação, não de equipamento desconhecido."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_400_blows_1959",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Autobiographical youth, location work and unresolved endings",
      "nb": "Selvbiografisk ungdom, stedsopptak og åpne avslutninger",
      "fr": "Jeunesse autobiographique, décors réels et fin ouverte",
      "pt": "Juventude autobiográfica, locais reais e finais abertos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "On Film",
        "publisher": "The New Yorker",
        "url": "https://www.newyorker.com/magazine/1960/02/20/on-film"
      },
      {
        "id": "s1",
        "title": "The 400 Blows",
        "publisher": "Turner Classic Movies",
        "url": "https://www.tcm.com/articles/88149/the-400-blows"
      },
      {
        "id": "s2",
        "title": "The 400 Blows: finding that beach and the Paris locations today",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/400-blows-francois-truffaut-locations"
      },
      {
        "id": "s3",
        "title": "The 400 Blows: Close to Home",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/528-the-400-blows-close-to-home"
      }
    ],
    "questions": [
      {
        "id": "the400blows-youth",
        "area": "research",
        "prompt": {
          "en": "How should autobiographical material shape a child character?",
          "nb": "Hvordan bør selvbiografisk materiale forme en barnefigur?",
          "fr": "Comment le matériau autobiographique doit-il façonner un enfant ?",
          "pt": "Como deve o material autobiográfico moldar uma personagem infantil?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Reduce adolescence to a moral lesson",
              "nb": "Reduser ungdomstiden til en moralsk lekse",
              "fr": "Réduire l’adolescence à une leçon morale",
              "pt": "Reduzir a adolescência a uma lição moral"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Transform remembered experience into a fictional viewpoint",
              "nb": "Form om erindret erfaring til et fiktivt perspektiv",
              "fr": "Transformer le souvenir en point de vue fictif",
              "pt": "Transformar a memória num ponto de vista fictício"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every scene as literal autobiography",
              "nb": "Behandle hver scene som bokstavelig selvbiografi",
              "fr": "Traiter chaque scène comme autobiographie littérale",
              "pt": "Tratar cada cena como autobiografia literal"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Truffaut's interview and Criterion's essay connect the film to personal experience without making the fictional character identical to the filmmaker.",
          "nb": "Truffauts intervju og Criterion-essayet knytter filmen til personlig erfaring uten å gjøre fiksjonsfiguren identisk med filmskaperen.",
          "fr": "L’entretien de Truffaut et l’essai Criterion relient le film à son expérience sans identifier le personnage au cinéaste.",
          "pt": "A entrevista de Truffaut e o ensaio Criterion ligam o filme à experiência pessoal sem identificar a personagem com o cineasta."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "the400blows-street",
        "area": "camera",
        "prompt": {
          "en": "How should a small crew plan a Paris street scene?",
          "nb": "Hvordan bør et lite team planlegge en gatescene i Paris?",
          "fr": "Comment une petite équipe doit-elle préparer une scène de rue à Paris ?",
          "pt": "Como deve uma pequena equipa planear uma cena de rua em Paris?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Scout routes and design mobile observational coverage",
              "nb": "Undersøk ruter og planlegg mobil observerende dekning",
              "fr": "Repérer les trajets et prévoir une couverture mobile d’observation",
              "pt": "Reconhecer percursos e planear cobertura móvel de observação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a large studio infrastructure",
              "nb": "Forutsett en stor studioinfrastruktur",
              "fr": "Supposer une infrastructure de grand studio",
              "pt": "Pressupor uma grande infraestrutura de estúdio"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the geography of the locations",
              "nb": "Ignorer opptaksstedenes geografi",
              "fr": "Ignorer la géographie des lieux",
              "pt": "Ignorar a geografia dos locais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The interview and BFI location study support an inexpensive small-crew production and meaningful real locations; plan the route before shooting.",
          "nb": "Intervjuet og BFIs stedsstudie støtter rimelig produksjon med lite team og meningsfulle virkelige steder; planlegg ruten før opptak.",
          "fr": "L’entretien et l’étude BFI attestent une petite équipe et des lieux réels significatifs ; préparez le trajet avant le tournage.",
          "pt": "A entrevista e o estudo do BFI sustentam uma equipa pequena e locais reais significativos; planeie o percurso antes da rodagem."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "the400blows-ending",
        "area": "research",
        "prompt": {
          "en": "How can an ending preserve uncertainty after physical movement?",
          "nb": "Hvordan kan en avslutning bevare usikkerhet etter fysisk bevegelse?",
          "fr": "Comment conserver l’incertitude après un mouvement physique ?",
          "pt": "Como preservar a incerteza após o movimento físico?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Resolve every conflict with explanatory titles",
              "nb": "Løs alle konflikter med forklarende tekstplakater",
              "fr": "Résoudre chaque conflit par des cartons explicatifs",
              "pt": "Resolver todos os conflitos com títulos explicativos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Cut away before the emotional turning point",
              "nb": "Klipp bort før det emosjonelle vendepunktet",
              "fr": "Couper avant le tournant émotionnel",
              "pt": "Cortar antes do ponto de viragem emocional"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Contrast a sustained run with a held final image",
              "nb": "Sett et vedvarende løp opp mot et fastholdt sluttbilde",
              "fr": "Opposer une course prolongée à une image finale figée",
              "pt": "Contrapor uma corrida prolongada a uma imagem final fixa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI traces the final tracking run and freeze-frame; use their contrast to design an original unresolved ending.",
          "nb": "BFI følger den avsluttende løpesekvensen og frysebildet; bruk kontrasten til å utforme en egen åpen avslutning.",
          "fr": "Le BFI analyse la course finale et l’arrêt sur image ; exploitez leur contraste pour une fin ouverte originale.",
          "pt": "O BFI analisa a corrida final e a imagem congelada; use o contraste para criar um final aberto original."
        },
        "sourceIds": [
          "s2",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_breathless_1960",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Small-crew street production and discontinuous montage",
      "nb": "Gateproduksjon med lite team og diskontinuerlig montasje",
      "fr": "Tournage de rue en petite équipe et montage discontinu",
      "pt": "Filmagem de rua com equipa reduzida e montagem descontínua"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Breathless",
        "publisher": "Turner Classic Movies",
        "url": "https://www.tcm.com/articles/87665/breathless"
      },
      {
        "id": "s1",
        "title": "Behind the Camera - Breathless",
        "publisher": "Turner Classic Movies",
        "url": "https://www.tcm.com/articles/615686/behind-the-camera-breathless"
      },
      {
        "id": "s2",
        "title": "Where to begin with Jean-Luc Godard – the early stuff",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/where-begin-jean-luc-godard-early-stuff"
      },
      {
        "id": "s3",
        "title": "The Big Idea - Breathless",
        "publisher": "Turner Classic Movies",
        "url": "https://www.tcm.com/articles/615685/the-big-idea-breathless"
      }
    ],
    "questions": [
      {
        "id": "breathless-street",
        "area": "camera",
        "prompt": {
          "en": "How can mobile coverage retain street immediacy?",
          "nb": "Hvordan kan mobil dekning bevare gatens umiddelbarhet?",
          "fr": "Comment une couverture mobile conserve-t-elle l’immédiateté de la rue ?",
          "pt": "Como pode a cobertura móvel preservar a imediatez da rua?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan lightweight coverage around actual street conditions",
              "nb": "Planlegg lett opptaksdekning ut fra faktiske gateforhold",
              "fr": "Prévoir un dispositif léger adapté aux conditions de rue",
              "pt": "Planear cobertura leve adaptada às condições da rua"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Rebuild all locations as studio sets",
              "nb": "Bygg alle opptakssteder som studiosett",
              "fr": "Reconstruire tous les lieux en studio",
              "pt": "Reconstruir todos os locais em estúdio"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Insist on identical classical coverage for every scene",
              "nb": "Krev identisk klassisk dekning i alle scener",
              "fr": "Imposer une couverture classique identique partout",
              "pt": "Impor cobertura clássica idêntica em todas as cenas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "TCM and BFI describe the low-budget street shoot and Coutard's mobile camera; plan original movement without claiming an exact historical setup.",
          "nb": "TCM og BFI beskriver lavbudsjettopptak i gatene og Coutards mobile kamera; planlegg egen bevegelse uten å hevde et eksakt historisk oppsett.",
          "fr": "TCM et BFI décrivent le tournage de rue économique et la caméra mobile de Coutard ; concevez un mouvement original sans prétendre reproduire le dispositif.",
          "pt": "TCM e BFI descrevem a rodagem económica na rua e a câmara móvel de Coutard; planeie movimento original sem alegar reproduzir o dispositivo."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "breathless-cuts",
        "area": "research",
        "prompt": {
          "en": "How can an edit shorten a take while retaining its rough rhythm?",
          "nb": "Hvordan kan en klippversjon forkorte et opptak og bevare den ujevne rytmen?",
          "fr": "Comment raccourcir un plan tout en gardant son rythme heurté ?",
          "pt": "Como encurtar um plano mantendo o ritmo irregular?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Hide every omission with a neutral insert",
              "nb": "Skjul alle utelatelser med nøytrale innklipp",
              "fr": "Masquer chaque omission par un insert neutre",
              "pt": "Ocultar todas as omissões com um inserto neutro"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use discontinuity without comparing alternatives",
              "nb": "Bruk diskontinuitet uten å sammenligne alternativer",
              "fr": "Employer la discontinuité sans comparer les variantes",
              "pt": "Usar descontinuidade sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test purposeful omissions within continuous action",
              "nb": "Prøv målrettede utelatelser innen sammenhengende handling",
              "fr": "Tester des omissions voulues dans une action continue",
              "pt": "Testar omissões propositadas numa ação contínua"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "TCM recounts Godard's explanation of shortening the first edit; compare a smooth cut with a deliberately disruptive cut.",
          "nb": "TCM gjengir Godards forklaring om forkorting av første klipp; sammenlign en jevn klippversjon med en bevisst forstyrrende versjon.",
          "fr": "TCM rapporte l’explication de Godard sur le raccourcissement du premier montage ; comparez une version fluide et une version heurtée.",
          "pt": "A TCM relata a explicação de Godard sobre encurtar a primeira montagem; compare uma versão fluida com outra deliberadamente descontínua."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "breathless-dialogue",
        "area": "research",
        "prompt": {
          "en": "How can evolving dialogue remain manageable during production?",
          "nb": "Hvordan kan dialog i utvikling håndteres under produksjon?",
          "fr": "Comment gérer un dialogue en évolution pendant le tournage ?",
          "pt": "Como gerir diálogo em evolução durante a rodagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard all scene and revision records",
              "nb": "Forkast alle scene- og revisjonsnotater",
              "fr": "Abandonner toute trace des scènes et révisions",
              "pt": "Descartar todos os registos de cenas e revisões"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Maintain daily revisions and performance continuity notes",
              "nb": "Før daglige revisjoner og kontinuitetsnotater for spill",
              "fr": "Tenir des révisions quotidiennes et des notes de continuité du jeu",
              "pt": "Manter revisões diárias e notas de continuidade interpretativa"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every line was fixed before shooting",
              "nb": "Anta at alle replikker var fastlagt før opptak",
              "fr": "Supposer chaque réplique fixée avant le tournage",
              "pt": "Supor todas as falas fixadas antes da rodagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "TCM describes the synopsis and dialogue written during production; a revision log is a practical exercise, not an assertion about Godard's actual paperwork.",
          "nb": "TCM beskriver synopsis og dialog skrevet under produksjon; en revisjonslogg er en praktisk øvelse, ikke en påstand om Godards faktiske papirarbeid.",
          "fr": "TCM décrit le synopsis et les dialogues écrits en cours de tournage ; un journal de révisions est un exercice, non une affirmation sur les documents de Godard.",
          "pt": "A TCM descreve a sinopse e o diálogo escrito durante a rodagem; um registo de revisões é um exercício, não uma afirmação sobre os documentos de Godard."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_hiroshima_mon_amour_1959",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Memory montage, documentary origins and international collaboration",
      "nb": "Minnemontasje, dokumentarisk opphav og internasjonalt samarbeid",
      "fr": "Montage de mémoire, origine documentaire et collaboration internationale",
      "pt": "Montagem da memória, origem documental e colaboração internacional"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Hiroshima mon amour",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/c174bd34-e556-5507-8a89-95b460698eb6/hiroshima-mon-amour"
      },
      {
        "id": "s1",
        "title": "Hiroshima mon amour",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/217-hiroshima-mon-amour"
      },
      {
        "id": "s2",
        "title": "10 great directorial debuts of the 1950s",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-directorial-debuts-1950s"
      },
      {
        "id": "s3",
        "title": "Cannes Classics 2013",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2013/cannes-classics-2013/"
      }
    ],
    "questions": [
      {
        "id": "hiroshimamonamour-memory",
        "area": "research",
        "prompt": {
          "en": "How can personal memory interact with public history?",
          "nb": "Hvordan kan personlig minne samspille med offentlig historie?",
          "fr": "Comment la mémoire personnelle dialogue-t-elle avec l’histoire publique ?",
          "pt": "Como pode a memória pessoal interagir com a história pública?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat fictional dialogue as archival testimony",
              "nb": "Behandle fiktiv dialog som arkivvitnesbyrd",
              "fr": "Traiter le dialogue fictif comme témoignage d’archive",
              "pt": "Tratar diálogo fictício como testemunho de arquivo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove historical context from every juxtaposition",
              "nb": "Fjern historisk kontekst fra alle sammenstillinger",
              "fr": "Retirer le contexte historique de chaque juxtaposition",
              "pt": "Retirar contexto histórico de cada justaposição"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish fictional memory from documented historical material",
              "nb": "Skill fiktivt minne fra dokumentert historisk materiale",
              "fr": "Distinguer mémoire fictive et matériau historique documenté",
              "pt": "Distinguir memória fictícia de material histórico documentado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI traces the documentary commission into Duras's fiction; keep a clear evidence boundary while designing fragmented memory.",
          "nb": "BFI følger dokumentaroppdraget inn i Duras' fiksjon; behold et tydelig kildeskille når fragmenterte minner utformes.",
          "fr": "Le BFI retrace le passage de la commande documentaire à la fiction de Duras ; maintenez une distinction des preuves dans le montage de mémoire.",
          "pt": "O BFI acompanha a passagem da encomenda documental à ficção de Duras; mantenha a distinção das provas na montagem da memória."
        },
        "sourceIds": [
          "s2",
          "s0"
        ]
      },
      {
        "id": "hiroshimamonamour-teams",
        "area": "camera",
        "prompt": {
          "en": "How should two national production teams coordinate imagery?",
          "nb": "Hvordan bør to nasjonale produksjonsteam samordne bildene?",
          "fr": "Comment deux équipes nationales doivent-elles coordonner les images ?",
          "pt": "Como devem duas equipas nacionais coordenar as imagens?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Avoid coordination between production units",
              "nb": "Unngå samordning mellom opptaksenhetene",
              "fr": "Éviter la coordination entre unités de tournage",
              "pt": "Evitar coordenação entre unidades de rodagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree on visual continuity and document separate credits",
              "nb": "Avtal visuell kontinuitet og dokumenter separate krediteringer",
              "fr": "Convenir de la continuité visuelle et documenter les crédits distincts",
              "pt": "Acordar continuidade visual e documentar créditos distintos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Credit one cinematographer for every sequence",
              "nb": "Krediter én fotograf for alle sekvenser",
              "fr": "Créditer un seul chef opérateur pour toutes les séquences",
              "pt": "Creditar um só diretor de fotografia por todas as sequências"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion records Vierny and Takahashi and the Franco-Japanese production; design a coordination sheet without inventing undocumented task assignments.",
          "nb": "Criterion dokumenterer Vierny og Takahashi og fransk-japansk produksjon; lag et samordningsskjema uten å dikte opp udokumentert arbeidsdeling.",
          "fr": "Criterion documente Vierny, Takahashi et la coproduction franco-japonaise ; concevez une fiche de coordination sans inventer les tâches historiques.",
          "pt": "A Criterion documenta Vierny, Takahashi e a coprodução franco-japonesa; crie uma ficha de coordenação sem inventar tarefas históricas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "hiroshimamonamour-rhythm",
        "area": "sound",
        "prompt": {
          "en": "How can voices link images from different moments?",
          "nb": "Hvordan kan stemmer knytte bilder fra forskjellige tidspunkter sammen?",
          "fr": "Comment les voix relient-elles des images de moments différents ?",
          "pt": "Como podem vozes ligar imagens de momentos diferentes?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test dialogue bridges across discontinuous images",
              "nb": "Prøv dialogbroer over diskontinuerlige bilder",
              "fr": "Tester des ponts de dialogue entre images discontinues",
              "pt": "Testar pontes de diálogo entre imagens descontínuas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Require every voice to explain the visible image",
              "nb": "Krev at hver stemme forklarer det synlige bildet",
              "fr": "Exiger que chaque voix explique l’image visible",
              "pt": "Exigir que cada voz explique a imagem visível"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Claim the restored soundtrack was newly composed",
              "nb": "Påstå at det restaurerte lydsporet er nykomponert",
              "fr": "Affirmer que la bande restaurée a été nouvellement composée",
              "pt": "Afirmar que a banda restaurada foi composta de novo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes fragmented dialogue and memory; Criterion records the monaural presentation and collaborative music credits. Explore their relationship in an original sound sketch.",
          "nb": "BFI beskriver fragmentert dialog og minne; Criterion dokumenterer monolyd og musikksamarbeidet. Utforsk forholdet i en egen lydskisse.",
          "fr": "Le BFI décrit dialogue et mémoire fragmentés ; Criterion documente le son mono et les crédits musicaux. Explorez leur relation dans une esquisse originale.",
          "pt": "O BFI descreve diálogo e memória fragmentados; a Criterion documenta som mono e créditos musicais. Explore a relação num esboço sonoro original."
        },
        "sourceIds": [
          "s2",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_l_avventura_1960",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Landscape, duration and fragile location production",
      "nb": "Landskap, varighet og sårbar stedsproduksjon",
      "fr": "Paysage, durée et tournage en extérieur fragile",
      "pt": "Paisagem, duração e rodagem em locais vulneráveis"
    },
    "sources": [
      {
        "id": "s0",
        "title": "L'avventura",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/209-l-avventura"
      },
      {
        "id": "s1",
        "title": "L'avventura: the film that redefined the cinema",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/l-avventura-michelangelo-antonioni-1960-greatest-films-poll"
      },
      {
        "id": "s2",
        "title": "L'Avventura - Cannes Classics restored print",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/l-avventura-2/"
      },
      {
        "id": "s3",
        "title": "Cannes Classics 2020",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/press/press-releases/cannes-classics-2020/"
      }
    ],
    "questions": [
      {
        "id": "lavventura-space",
        "area": "camera",
        "prompt": {
          "en": "How can landscape carry emotional displacement?",
          "nb": "Hvordan kan landskapet formidle emosjonell forskyvning?",
          "fr": "Comment le paysage peut-il porter le déplacement émotionnel ?",
          "pt": "Como pode a paisagem transmitir deslocação emocional?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use landscape only as decorative background",
              "nb": "Bruk landskapet bare som dekorativ bakgrunn",
              "fr": "Utiliser le paysage uniquement comme décor",
              "pt": "Usar a paisagem apenas como fundo decorativo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Frame figures in relation to terrain and empty space",
              "nb": "Ram inn figurer i forhold til terreng og tomrom",
              "fr": "Cadrer les figures par rapport au terrain et au vide",
              "pt": "Enquadrar figuras em relação ao terreno e ao vazio"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Fill every frame with explanatory close-ups",
              "nb": "Fyll hvert bilde med forklarende nærbilder",
              "fr": "Remplir chaque cadre de gros plans explicatifs",
              "pt": "Preencher cada quadro com grandes planos explicativos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes the shift toward landscape and duration; Criterion records Scavarda's widescreen photography. Test the emotional effect of spatial composition.",
          "nb": "BFI beskriver dreiningen mot landskap og varighet; Criterion dokumenterer Scavardas bredformatfoto. Prøv den emosjonelle virkningen av romlig komposisjon.",
          "fr": "Le BFI décrit le déplacement vers paysage et durée ; Criterion documente l’image large de Scavarda. Testez l’effet émotionnel de la composition spatiale.",
          "pt": "O BFI descreve a mudança para paisagem e duração; a Criterion documenta a fotografia panorâmica de Scavarda. Teste o efeito emocional da composição espacial."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "lavventura-finance",
        "area": "research",
        "prompt": {
          "en": "How should an exposed island shoot handle financial disruption?",
          "nb": "Hvordan bør et utsatt øyopptak håndtere økonomisk avbrudd?",
          "fr": "Comment gérer une rupture financière sur un tournage insulaire exposé ?",
          "pt": "Como gerir uma interrupção financeira numa rodagem insular exposta?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Budget contingency and reschedule essential scenes",
              "nb": "Sett av reservebudsjett og omplanlegg nødvendige scener",
              "fr": "Prévoir une réserve et reprogrammer les scènes essentielles",
              "pt": "Prever uma reserva e reagendar cenas essenciais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume financing cannot change during shooting",
              "nb": "Anta at finansieringen ikke kan endres under opptak",
              "fr": "Supposer le financement immuable pendant le tournage",
              "pt": "Supor que o financiamento não muda durante a rodagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent exact historical cost figures",
              "nb": "Finn på eksakte historiske kostnadstall",
              "fr": "Inventer des coûts historiques précis",
              "pt": "Inventar custos históricos exatos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI documents financing difficulties on Lisca Bianca; contingency planning is an original production exercise, not a reconstructed historical budget.",
          "nb": "BFI dokumenterer finansieringsproblemer på Lisca Bianca; reserveplanlegging er en egen produksjonsøvelse, ikke et rekonstruert historisk budsjett.",
          "fr": "Le BFI documente les problèmes financiers à Lisca Bianca ; la réserve est un exercice de production, non un budget historique reconstitué.",
          "pt": "O BFI documenta dificuldades financeiras em Lisca Bianca; a reserva é um exercício de produção, não um orçamento histórico reconstruído."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "lavventura-duration",
        "area": "research",
        "prompt": {
          "en": "How can a mystery scene resist a conventional resolution?",
          "nb": "Hvordan kan en mysteriescene motstå en konvensjonell løsning?",
          "fr": "Comment une scène de mystère résiste-t-elle à une résolution conventionnelle ?",
          "pt": "Como pode uma cena de mistério resistir a uma resolução convencional?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain the mystery in every following scene",
              "nb": "Forklar mysteriet i hver påfølgende scene",
              "fr": "Expliquer le mystère dans chaque scène suivante",
              "pt": "Explicar o mistério em cada cena seguinte"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove every pause and unresolved gesture",
              "nb": "Fjern alle pauser og uavklarte gester",
              "fr": "Supprimer pauses et gestes irrésolus",
              "pt": "Eliminar todas as pausas e gestos irresolutos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Let duration and changing relationships redirect attention",
              "nb": "La varighet og skiftende relasjoner omdirigere oppmerksomheten",
              "fr": "Laisser durée et relations changeantes rediriger l’attention",
              "pt": "Deixar duração e relações mutáveis redirecionarem a atenção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes the formal turn away from mystery causality; compare two edits to see how duration changes audience attention.",
          "nb": "BFI beskriver den formelle vendingen bort fra mysteriets årsakskjede; sammenlign to klipp for å se hvordan varighet endrer publikums oppmerksomhet.",
          "fr": "Le BFI décrit l’abandon de la causalité du mystère ; comparez deux montages pour observer l’effet de la durée sur l’attention.",
          "pt": "O BFI descreve o afastamento da causalidade do mistério; compare duas montagens para observar o efeito da duração na atenção."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_jules_and_jim_1962",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Literary adaptation, mobile images and compressed narrative time",
      "nb": "Litterær adaptasjon, mobile bilder og komprimert fortellingstid",
      "fr": "Adaptation littéraire, images mobiles et temps narratif condensé",
      "pt": "Adaptação literária, imagens móveis e tempo narrativo comprimido"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Jules and Jim",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/218-jules-and-jim"
      },
      {
        "id": "s1",
        "title": "Jules et Jim (1962)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/5d2fd6c5-beb4-5e2f-b16b-0bca499cc797/jules-et-jim"
      },
      {
        "id": "s2",
        "title": "Jules et Jim",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/51574.html"
      },
      {
        "id": "s3",
        "title": "Jules et Jim (Jules and Jim). 1962. Directed by Francois Truffaut",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/events/4337"
      }
    ],
    "questions": [
      {
        "id": "julesandjim-adapt",
        "area": "research",
        "prompt": {
          "en": "How can a literary story spanning years become a compact screenplay?",
          "nb": "Hvordan kan en litterær historie over flere år bli et konsentrert manus?",
          "fr": "Comment condenser un récit littéraire de plusieurs années en scénario ?",
          "pt": "Como condensar uma história literária de vários anos num argumento?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Select turning points and bridge intervals with narration",
              "nb": "Velg vendepunkter og bygg bro over intervaller med fortellerstemme",
              "fr": "Choisir les tournants et relier les intervalles par la narration",
              "pt": "Escolher pontos de viragem e ligar intervalos pela narração"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Give every elapsed day equal screen time",
              "nb": "Gi hver forløpte dag like lang skjermtid",
              "fr": "Donner à chaque jour écoulé le même temps d’écran",
              "pt": "Dar a cada dia decorrido igual tempo de ecrã"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove the literary source from the credits",
              "nb": "Fjern den litterære kilden fra krediteringen",
              "fr": "Retirer la source littéraire du générique",
              "pt": "Retirar a fonte literária dos créditos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents the Roché adaptation and MoMA describes discontinuous story architecture; design a new timeline with selective ellipses.",
          "nb": "Criterion dokumenterer Roché-adaptasjonen og MoMA beskriver diskontinuerlig fortellingsstruktur; lag en ny tidslinje med selektive ellipser.",
          "fr": "Criterion documente l’adaptation de Roché et le MoMA décrit la structure discontinue ; créez une chronologie avec ellipses choisies.",
          "pt": "A Criterion documenta a adaptação de Roché e o MoMA descreve a estrutura descontínua; crie uma cronologia com elipses seletivas."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "julesandjim-movement",
        "area": "camera",
        "prompt": {
          "en": "How can outdoor movement express changing relationships?",
          "nb": "Hvordan kan bevegelse utendørs uttrykke skiftende relasjoner?",
          "fr": "Comment le mouvement en extérieur exprime-t-il des relations changeantes ?",
          "pt": "Como pode o movimento ao ar livre exprimir relações mutáveis?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep every performer isolated in static portraits",
              "nb": "Hold hver utøver isolert i statiske portretter",
              "fr": "Isoler chaque interprète dans des portraits statiques",
              "pt": "Isolar cada intérprete em retratos estáticos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute the visual style to editing alone",
              "nb": "Tilskriv bildestilen bare klippingen",
              "fr": "Attribuer le style visuel au seul montage",
              "pt": "Atribuir o estilo visual apenas à montagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse group movement and mobile camera timing",
              "nb": "Øv på gruppebevegelse og mobil kameratiming",
              "fr": "Répéter les déplacements du groupe et le rythme de la caméra mobile",
              "pt": "Ensaiar movimentos do grupo e ritmo da câmara móvel"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes open-air spontaneity and Criterion credits Coutard; design a coordinated movement exercise without claiming exact historical blocking.",
          "nb": "BFI beskriver spontanitet utendørs og Criterion krediterer Coutard; lag en samordnet bevegelsesøvelse uten å hevde eksakt historisk iscenesettelse.",
          "fr": "Le BFI décrit la spontanéité en extérieur et Criterion crédite Coutard ; concevez un exercice de mouvement sans prétendre reproduire le placement historique.",
          "pt": "O BFI descreve espontaneidade ao ar livre e a Criterion credita Coutard; crie um exercício de movimento sem alegar reproduzir a marcação histórica."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "julesandjim-score",
        "area": "sound",
        "prompt": {
          "en": "How can music and montage share responsibility for pacing?",
          "nb": "Hvordan kan musikk og montasje dele ansvaret for rytmen?",
          "fr": "Comment musique et montage partagent-ils la responsabilité du rythme ?",
          "pt": "Como podem música e montagem partilhar a responsabilidade pelo ritmo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase the editor and composer's separate credits",
              "nb": "Fjern klipperens og komponistens separate kreditering",
              "fr": "Effacer les crédits distincts du monteur et du compositeur",
              "pt": "Apagar os créditos distintos da montadora e do compositor"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare musical bridges against visual transitions",
              "nb": "Sammenlign musikalske broer med visuelle overganger",
              "fr": "Comparer les ponts musicaux aux transitions visuelles",
              "pt": "Comparar pontes musicais com transições visuais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use music solely to mask every cut",
              "nb": "Bruk musikk bare til å skjule alle klipp",
              "fr": "Utiliser la musique uniquement pour masquer les coupes",
              "pt": "Usar música apenas para ocultar todos os cortes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion and the Cinémathèque credit Bouché's editing and Delerue's music separately; explore their interaction with an original cue plan.",
          "nb": "Criterion og Cinémathèque krediterer Bouchés klipp og Delerues musikk separat; utforsk samspillet med en egen musikkplan.",
          "fr": "Criterion et la Cinémathèque créditent séparément le montage de Bouché et la musique de Delerue ; explorez leur interaction dans un plan original.",
          "pt": "A Criterion e a Cinémathèque creditam separadamente a montagem de Bouché e a música de Delerue; explore a interação num plano original."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_persona_1966",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Facial close-ups, fractured montage and performance identity",
      "nb": "Ansiktsnærbilder, brutt montasje og identitet i skuespillet",
      "fr": "Gros plans de visages, montage fracturé et identité du jeu",
      "pt": "Grandes planos faciais, montagem fragmentada e identidade interpretativa"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Persona",
        "publisher": "Swedish Film Institute",
        "url": "https://www.filminstitutet.se/sv/fa-kunskap-om-film/ta-del-av-filmsamlingarna/filmer/persona/"
      },
      {
        "id": "s1",
        "title": "Feature Film - Productions - Persona",
        "publisher": "Ingmar Bergman Archive",
        "url": "https://www.ingmarbergman.se/en/production/persona"
      },
      {
        "id": "s2",
        "title": "Persona (1966)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/d58fc7f8-fd9a-5f17-88e8-c87f27856486/persona"
      },
      {
        "id": "s3",
        "title": "Persona",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/28491-persona"
      }
    ],
    "questions": [
      {
        "id": "persona-faces",
        "area": "camera",
        "prompt": {
          "en": "How can close-ups make identity feel unstable?",
          "nb": "Hvordan kan nærbilder gjøre identiteten ustabil?",
          "fr": "Comment les gros plans peuvent-ils rendre l’identité instable ?",
          "pt": "Como podem os grandes planos tornar a identidade instável?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Rely exclusively on distant establishing shots",
              "nb": "Stol utelukkende på fjerne oversiktsbilder",
              "fr": "S’appuyer uniquement sur des plans d’ensemble éloignés",
              "pt": "Depender exclusivamente de planos gerais distantes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assert exact lighting ratios from the image alone",
              "nb": "Påstå eksakte lysforhold ut fra bildet alene",
              "fr": "Affirmer des rapports lumineux précis d’après l’image seule",
              "pt": "Afirmar relações de iluminação exatas só pela imagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test facial framing and contrasting light in paired portraits",
              "nb": "Prøv ansiktsutsnitt og kontrasterende lys i parvise portretter",
              "fr": "Tester cadrage des visages et lumière contrastée dans des portraits appariés",
              "pt": "Testar enquadramento facial e luz contrastante em retratos emparelhados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Bergman Archive records Nykvist's emphasis on close-ups and tests; design original lighting experiments without inventing historical ratios.",
          "nb": "Bergmanarkivet dokumenterer Nykvists vekt på nærbilder og tester; utform egne lysforsøk uten å dikte opp historiske lysforhold.",
          "fr": "Les archives Bergman documentent les gros plans et essais de Nykvist ; concevez des tests originaux sans inventer les rapports historiques.",
          "pt": "O arquivo Bergman documenta grandes planos e testes de Nykvist; crie experiências próprias sem inventar relações históricas."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "persona-performance",
        "area": "research",
        "prompt": {
          "en": "How should two contrasting performances be rehearsed?",
          "nb": "Hvordan bør to kontrasterende skuespillerprestasjoner øves inn?",
          "fr": "Comment répéter deux interprétations contrastées ?",
          "pt": "Como ensaiar duas interpretações contrastantes?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Explain every ambiguity through additional dialogue",
              "nb": "Forklar all tvetydighet med ekstra dialog",
              "fr": "Expliquer toute ambiguïté par du dialogue supplémentaire",
              "pt": "Explicar toda a ambiguidade com diálogo adicional"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare speech, silence and listening across takes",
              "nb": "Sammenlign tale, stillhet og lytting på tvers av opptak",
              "fr": "Comparer parole, silence et écoute entre prises",
              "pt": "Comparar fala, silêncio e escuta entre tomadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Require both performers to use identical expression",
              "nb": "Krev at begge utøverne bruker identiske uttrykk",
              "fr": "Exiger des deux interprètes une expression identique",
              "pt": "Exigir expressão idêntica das duas intérpretes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI highlights the central performances and blurred identities; Criterion documents the cast and crafts. Use rehearsal variations rather than a single psychological verdict.",
          "nb": "BFI fremhever hovedrollene og uklare identiteter; Criterion dokumenterer rollebesetning og fagarbeid. Bruk øvingsvariasjoner fremfor én psykologisk fasit.",
          "fr": "Le BFI souligne les interprétations et identités brouillées ; Criterion documente les métiers. Variez les répétitions plutôt que d’imposer un verdict psychologique.",
          "pt": "O BFI destaca as interpretações e identidades difusas; a Criterion documenta os créditos. Varie os ensaios em vez de impor um veredito psicológico."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "persona-rupture",
        "area": "research",
        "prompt": {
          "en": "How can a montage reveal the medium itself?",
          "nb": "Hvordan kan en montasje synliggjøre selve mediet?",
          "fr": "Comment un montage peut-il révéler le médium lui-même ?",
          "pt": "Como pode uma montagem revelar o próprio meio?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Design a deliberate rupture and compare its effect on spectatorship",
              "nb": "Utform et bevisst brudd og sammenlign virkningen på tilskueren",
              "fr": "Concevoir une rupture délibérée et comparer son effet sur le spectateur",
              "pt": "Conceber uma rutura deliberada e comparar o efeito no espectador"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Smooth away every self-reflexive interruption",
              "nb": "Glatt bort alle selvrefleksive avbrudd",
              "fr": "Effacer chaque interruption réflexive",
              "pt": "Suavizar todas as interrupções autorreflexivas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat a fictional rupture as an accidental projection failure",
              "nb": "Behandle et fiktivt brudd som en tilfeldig projeksjonsfeil",
              "fr": "Traiter une rupture fictive comme une panne accidentelle de projection",
              "pt": "Tratar uma rutura fictícia como falha acidental de projeção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI identifies the fractured opening and self-reflexive ruptures; the Bergman Archive documents projector tests. Create a new montage with a purposeful break.",
          "nb": "BFI identifiserer den brutte åpningen og selvrefleksive brudd; Bergmanarkivet dokumenterer projektortester. Lag en ny montasje med et målrettet brudd.",
          "fr": "Le BFI décrit l’ouverture fragmentée et les ruptures réflexives ; les archives Bergman documentent les essais de projecteur. Créez un montage avec rupture intentionnelle.",
          "pt": "O BFI descreve a abertura fragmentada e ruturas autorreflexivas; o arquivo Bergman documenta testes de projeção. Crie uma montagem com rutura intencional."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_8_1_2_1963",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Creative crisis, subjective time and film production as subject",
      "nb": "Kreativ krise, subjektiv tid og filmproduksjon som tema",
      "fr": "Crise créatrice, temps subjectif et tournage comme sujet",
      "pt": "Crise criativa, tempo subjetivo e rodagem como tema"
    },
    "sources": [
      {
        "id": "s0",
        "title": "8½",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/3b1e80a4-111a-5fff-b799-7c50460d6284/812"
      },
      {
        "id": "s1",
        "title": "8½",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/150-8-1-2"
      },
      {
        "id": "s2",
        "title": "8½",
        "publisher": "Fellini Museum",
        "url": "https://fellinimuseum.it/en/8-1-2/"
      },
      {
        "id": "s3",
        "title": "The 36th Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1964"
      }
    ],
    "questions": [
      {
        "id": "812-dream",
        "area": "research",
        "prompt": {
          "en": "How can dreams interrupt the production narrative?",
          "nb": "Hvordan kan drømmer avbryte produksjonsfortellingen?",
          "fr": "Comment les rêves interrompent-ils le récit du tournage ?",
          "pt": "Como podem os sonhos interromper a narrativa da rodagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Link recurring motifs across reality and fantasy",
              "nb": "Knytt gjentatte motiver på tvers av virkelighet og fantasi",
              "fr": "Relier les motifs récurrents entre réalité et fantasme",
              "pt": "Ligar motivos recorrentes entre realidade e fantasia"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every dream with a factual caption",
              "nb": "Forklar hver drøm med en faktatekst",
              "fr": "Expliquer chaque rêve par un carton factuel",
              "pt": "Explicar cada sonho com uma legenda factual"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all shifts in subjective time",
              "nb": "Fjern alle skift i subjektiv tid",
              "fr": "Supprimer les variations du temps subjectif",
              "pt": "Eliminar todas as mudanças de tempo subjetivo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes dream digressions within the director's crisis; the museum records the unfinished project. Design your own motif transitions.",
          "nb": "BFI beskriver drømmeavstikkere i regissørens krise; museet dokumenterer det uferdige prosjektet. Utform egne motivoverganger.",
          "fr": "Le BFI décrit les rêves dans la crise du réalisateur ; le musée documente le projet inachevé. Concevez vos propres transitions.",
          "pt": "O BFI descreve sonhos na crise do realizador; o museu documenta o projeto inacabado. Crie transições próprias."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "812-design",
        "area": "camera",
        "prompt": {
          "en": "How can a set express the scale of an unrealized film?",
          "nb": "Hvordan kan et sett uttrykke omfanget av en urealisert film?",
          "fr": "Comment un décor exprime-t-il l’ampleur d’un film irréalisé ?",
          "pt": "Como pode um cenário exprimir a escala de um filme não realizado?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Leave costume decisions until after photography",
              "nb": "Utsett kostymevalg til etter fotograferingen",
              "fr": "Reporter les choix de costumes après la prise de vues",
              "pt": "Adiar escolhas de figurino até depois da filmagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute every visual decision to one person",
              "nb": "Tilskriv alle visuelle valg én person",
              "fr": "Attribuer chaque choix visuel à une personne",
              "pt": "Atribuir todas as escolhas visuais a uma pessoa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate silhouette, architecture and costume contrast",
              "nb": "Samordne silhuett, arkitektur og kostymekontrast",
              "fr": "Coordonner silhouette, architecture et contraste des costumes",
              "pt": "Coordenar silhueta, arquitetura e contraste dos figurinos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion credits Di Venanzo and Gherardi separately; the Academy recognizes costume design. Develop a collaborative visual plan.",
          "nb": "Criterion krediterer Di Venanzo og Gherardi separat; Oscar-arkivet anerkjenner kostymedesignet. Utform en felles visuell plan.",
          "fr": "Criterion distingue Di Venanzo et Gherardi ; l’Académie reconnaît les costumes. Élaborez un plan visuel collectif.",
          "pt": "A Criterion distingue Di Venanzo e Gherardi; a Academia reconhece os figurinos. Elabore um plano visual coletivo."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "812-music",
        "area": "sound",
        "prompt": {
          "en": "How can recurring music connect disconnected episodes?",
          "nb": "Hvordan kan gjentakende musikk knytte adskilte episoder sammen?",
          "fr": "Comment une musique récurrente relie-t-elle des épisodes disjoints ?",
          "pt": "Como pode a música recorrente ligar episódios descontínuos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Credit the score as work by the editor",
              "nb": "Krediter musikken som klipperens arbeid",
              "fr": "Attribuer la partition au monteur",
              "pt": "Atribuir a partitura ao montador"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test a recurring theme against different image rhythms",
              "nb": "Prøv et tilbakevendende tema mot ulike bilderytmer",
              "fr": "Tester un thème récurrent sur différents rythmes visuels",
              "pt": "Testar um tema recorrente com ritmos visuais distintos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use one unchanging cue at every transition",
              "nb": "Bruk ett uendret signal ved alle overganger",
              "fr": "Utiliser un signal identique à chaque transition",
              "pt": "Usar um sinal idêntico em cada transição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion credits Catozzo's editing and Rota's score; BFI describes the digressions. Compare original cue placements rather than copying the score.",
          "nb": "Criterion krediterer Catozzos klipp og Rotas musikk; BFI beskriver avstikkerne. Sammenlign egne plasseringer fremfor å kopiere musikken.",
          "fr": "Criterion distingue montage et musique ; le BFI décrit les digressions. Comparez des placements originaux plutôt que de copier la partition.",
          "pt": "A Criterion distingue montagem e música; o BFI descreve as digressões. Compare colocações originais sem copiar a partitura."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_contempt_1963",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Widescreen staging, producer negotiations and multilingual sound",
      "nb": "Bredformat, produsentforhandlinger og flerspråklig lyd",
      "fr": "Mise en scène large, négociation et son multilingue",
      "pt": "Encenação panorâmica, negociação e som multilingue"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Contempt",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/239-contempt"
      },
      {
        "id": "s1",
        "title": "Le Mépris (1963)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/e4a2c85e-6d21-5e57-9a58-e0374d74ec06/le-mepris"
      },
      {
        "id": "s2",
        "title": "Le Mépris",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/48813.html"
      },
      {
        "id": "s3",
        "title": "Le Mépris, Jean-Luc Godard's incandescent poem",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2023/le-mepris-jean-luc-godard-s-incandescent-poem/"
      }
    ],
    "questions": [
      {
        "id": "contempt-negotiation",
        "area": "research",
        "prompt": {
          "en": "How should a producer's requested scene be evaluated?",
          "nb": "Hvordan bør en scene bestilt av produsenten vurderes?",
          "fr": "Comment évaluer une scène demandée par le producteur ?",
          "pt": "Como avaliar uma cena pedida pelo produtor?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Accept every request without creative discussion",
              "nb": "Godta alle krav uten kreativ diskusjon",
              "fr": "Accepter toute demande sans discussion créative",
              "pt": "Aceitar todos os pedidos sem discussão criativa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent undocumented contract clauses",
              "nb": "Finn på udokumenterte kontraktsklausuler",
              "fr": "Inventer des clauses contractuelles non documentées",
              "pt": "Inventar cláusulas contratuais não documentadas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare narrative purpose, contractual constraints and consent",
              "nb": "Sammenlign fortellingsformål, kontraktsvilkår og samtykke",
              "fr": "Comparer fonction narrative, contraintes contractuelles et consentement",
              "pt": "Comparar função narrativa, limites contratuais e consentimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI records a producer-demanded scene; Criterion describes commercial production. Evaluate a fictional negotiation without inventing historical terms.",
          "nb": "BFI dokumenterer en produsentbestilt scene; Criterion beskriver kommersiell produksjon. Vurder en fiktiv forhandling uten å dikte historiske vilkår.",
          "fr": "Le BFI documente une scène exigée ; Criterion décrit la production commerciale. Évaluez une négociation fictive sans inventer les clauses historiques.",
          "pt": "O BFI documenta uma cena exigida; a Criterion descreve a produção comercial. Avalie uma negociação fictícia sem inventar condições históricas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "contempt-apartment",
        "area": "camera",
        "prompt": {
          "en": "How can widescreen blocking express a couple's distance?",
          "nb": "Hvordan kan iscenesettelse i bredformat uttrykke avstand mellom et par?",
          "fr": "Comment le cadre large exprime-t-il la distance d’un couple ?",
          "pt": "Como pode o quadro panorâmico exprimir a distância de um casal?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore eyelines and spatial relationships",
              "nb": "Ignorer blikkretninger og romlige forhold",
              "fr": "Ignorer les regards et les relations spatiales",
              "pt": "Ignorar olhares e relações espaciais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse movement across architectural divisions",
              "nb": "Øv på bevegelse på tvers av arkitektoniske skiller",
              "fr": "Répéter les mouvements à travers les divisions architecturales",
              "pt": "Ensaiar movimentos através das divisões arquitetónicas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Frame every exchange as isolated close-ups",
              "nb": "Ram inn hver replikkveksling som isolerte nærbilder",
              "fr": "Cadrer chaque échange en gros plans isolés",
              "pt": "Enquadrar cada troca em grandes planos isolados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes the extended apartment staging and Criterion identifies CinemaScope photography. Test how blocking changes the relationship within the frame.",
          "nb": "BFI beskriver den lange leilighetssekvensen og Criterion identifiserer CinemaScope. Prøv hvordan iscenesettelsen endrer forholdet i bildet.",
          "fr": "Le BFI décrit la longue scène d’appartement et Criterion le CinemaScope. Testez comment les déplacements modifient la relation dans le cadre.",
          "pt": "O BFI descreve a longa cena do apartamento e a Criterion o CinemaScope. Teste como a marcação altera a relação no quadro."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "contempt-language",
        "area": "sound",
        "prompt": {
          "en": "How should a multilingual soundtrack be documented?",
          "nb": "Hvordan bør et flerspråklig lydspor dokumenteres?",
          "fr": "Comment documenter une bande sonore multilingue ?",
          "pt": "Como documentar uma banda sonora multilingue?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Track language, translation and release version separately",
              "nb": "Registrer språk, oversettelse og utgivelsesversjon separat",
              "fr": "Consigner séparément langue, traduction et version",
              "pt": "Registar separadamente língua, tradução e versão"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every dubbed release as the same soundtrack",
              "nb": "Behandle alle dubbede utgaver som samme lydspor",
              "fr": "Traiter chaque doublage comme la même bande sonore",
              "pt": "Tratar cada dobragem como a mesma banda sonora"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer the original language from subtitles alone",
              "nb": "Utled originalspråket bare fra undertekstene",
              "fr": "Déduire la langue originale des seuls sous-titres",
              "pt": "Deduzir a língua original apenas pelas legendas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion notes multilingual soundtrack history; the Cinémathèque records the international production. Label the edition before comparing dialogue.",
          "nb": "Criterion omtaler flerspråklig lydhistorie; Cinémathèque dokumenterer samproduksjonen. Merk utgaven før dialog sammenlignes.",
          "fr": "Criterion note l’histoire multilingue ; la Cinémathèque documente la coproduction. Identifiez la version avant de comparer les dialogues.",
          "pt": "A Criterion refere a história multilingue; a Cinémathèque documenta a coprodução. Identifique a versão antes de comparar diálogos."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_leopard_1963",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Historical adaptation, ballroom logistics and release versions",
      "nb": "Historisk adaptasjon, ballsallogistikk og utgivelsesversjoner",
      "fr": "Adaptation historique, logistique du bal et versions",
      "pt": "Adaptação histórica, logística do baile e versões"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Leopard",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/790-the-leopard"
      },
      {
        "id": "s1",
        "title": "Remembrance of Things Past: The Leopard",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/326-remembrance-of-things-past-the-leopard"
      },
      {
        "id": "s2",
        "title": "The Leopard by Luchino Visconti in Special Screening",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2010/the-leopard-by-luchino-visconti-in-special-screening/"
      },
      {
        "id": "s3",
        "title": "Scorsese Restores The Leopard and Revives Cannes's Golden Age",
        "publisher": "The Film Foundation",
        "url": "https://www.film-foundation.org/scorsese-restores-the-leopard-and-revives-cannes-golden-age"
      }
    ],
    "questions": [
      {
        "id": "theleopard-adapt",
        "area": "research",
        "prompt": {
          "en": "How can a historical adaptation change chronology responsibly?",
          "nb": "Hvordan kan en historisk adaptasjon endre kronologien på en ansvarlig måte?",
          "fr": "Comment modifier la chronologie dans une adaptation historique ?",
          "pt": "Como alterar responsavelmente a cronologia numa adaptação histórica?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove the source novel from the credits",
              "nb": "Fjern kilderomanen fra krediteringen",
              "fr": "Retirer le roman source du générique",
              "pt": "Retirar o romance original dos créditos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record changes and preserve the character's historical viewpoint",
              "nb": "Registrer endringer og bevar figurens historiske perspektiv",
              "fr": "Consigner les changements et préserver le regard historique du personnage",
              "pt": "Registar mudanças e preservar o olhar histórico da personagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present every invented scene as literary fact",
              "nb": "Presenter hver oppdiktet scene som litterært faktum",
              "fr": "Présenter chaque scène inventée comme un fait littéraire",
              "pt": "Apresentar cada cena inventada como facto literário"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's essay identifies changed chronology and added material in the adaptation. Compare a fictional scene plan with the literary source.",
          "nb": "Criterion-essayet identifiserer endret kronologi og tillegg i adaptasjonen. Sammenlign en fiktiv sceneplan med den litterære kilden.",
          "fr": "L’essai Criterion relève les changements chronologiques et ajouts. Comparez un plan fictif avec la source littéraire.",
          "pt": "O ensaio Criterion identifica alterações cronológicas e adições. Compare um plano fictício com a fonte literária."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "theleopard-ball",
        "area": "camera",
        "prompt": {
          "en": "How should a large ballroom scene be organized?",
          "nb": "Hvordan bør en stor ballsalscene organiseres?",
          "fr": "Comment organiser une grande scène de bal ?",
          "pt": "Como organizar uma grande cena de baile?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan continuity for costumes, lighting and ensemble movement",
              "nb": "Planlegg kontinuitet for kostymer, lys og ensemblebevegelse",
              "fr": "Prévoir la continuité des costumes, lumières et déplacements",
              "pt": "Planear continuidade de figurinos, luz e movimentos do elenco"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Change every costume between matching takes",
              "nb": "Bytt alle kostymer mellom sammenhengende opptak",
              "fr": "Changer tous les costumes entre prises raccordées",
              "pt": "Mudar todos os figurinos entre tomadas de continuidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every shot can be finished in one night",
              "nb": "Anta at alle opptak kan fullføres på én natt",
              "fr": "Supposer que tous les plans tiennent en une nuit",
              "pt": "Supor que todos os planos cabem numa noite"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes documents the prolonged palace shoot and lighting challenges; Criterion credits the craft departments. Prepare an original continuity plan.",
          "nb": "Cannes dokumenterer det langvarige palassopptaket og lysutfordringene; Criterion krediterer fagavdelingene. Lag en egen kontinuitetsplan.",
          "fr": "Cannes documente le long tournage au palais et les difficultés lumineuses ; Criterion crédite les métiers. Préparez un plan de continuité.",
          "pt": "Cannes documenta a longa rodagem no palácio e desafios de luz; a Criterion credita os departamentos. Prepare um plano de continuidade."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "theleopard-versions",
        "area": "research",
        "prompt": {
          "en": "How should two documented release versions be compared?",
          "nb": "Hvordan bør to dokumenterte utgivelsesversjoner sammenlignes?",
          "fr": "Comment comparer deux versions de sortie documentées ?",
          "pt": "Como comparar duas versões de lançamento documentadas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume restoration created the American version",
              "nb": "Anta at restaureringen skapte den amerikanske versjonen",
              "fr": "Supposer que la restauration a créé la version américaine",
              "pt": "Supor que o restauro criou a versão americana"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Identify missing scenes from runtime alone",
              "nb": "Identifiser manglende scener bare fra spilletiden",
              "fr": "Identifier les scènes absentes par la seule durée",
              "pt": "Identificar cenas ausentes apenas pela duração"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Log language, duration and scene differences by edition",
              "nb": "Loggfør språk, lengde og sceneforskjeller per utgave",
              "fr": "Noter langue, durée et différences de scènes par édition",
              "pt": "Registar língua, duração e diferenças de cenas por edição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion identifies Italian and American versions; the Film Foundation documents later restoration. Compare actual editions before claiming scene differences.",
          "nb": "Criterion identifiserer italiensk og amerikansk versjon; Film Foundation dokumenterer senere restaurering. Sammenlign faktiske utgaver før sceneforskjeller fastslås.",
          "fr": "Criterion identifie les versions italienne et américaine ; la Film Foundation documente la restauration. Comparez les éditions avant d’affirmer des différences.",
          "pt": "A Criterion identifica versões italiana e americana; a Film Foundation documenta restauro posterior. Compare edições antes de afirmar diferenças."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_last_year_at_marienbad_1961",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Shot-by-shot writing, architectural movement and uncertain memory",
      "nb": "Bilde-for-bilde-manus, arkitektonisk bevegelse og usikkert minne",
      "fr": "Découpage écrit, mouvement architectural et mémoire incertaine",
      "pt": "Decupagem escrita, movimento arquitetónico e memória incerta"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Last Year at Marienbad",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/1517-last-year-at-marienbad"
      },
      {
        "id": "s1",
        "title": "Alain Robbe-Grillet: Imagination, if it's vivid enough, is always in the present tense",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/alain-robbe-grillet-interview-last-year-marienbad"
      },
      {
        "id": "s2",
        "title": "Last Year at Marienbad",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/559f0508-65b1-56d3-819c-5ee14529eeda/last-year-at-marienbad"
      },
      {
        "id": "s3",
        "title": "L'annee derniere a Marienbad - Venice Classics",
        "publisher": "La Biennale di Venezia",
        "url": "https://www.labiennale.org/en/cinema/2018/lineup/venice-classics/l%E2%80%99ann%C3%A9e-derni%C3%A8re-%C3%A0-marienbad-last-year-marienbad"
      }
    ],
    "questions": [
      {
        "id": "lastyearatmarienbad-decoupage",
        "area": "research",
        "prompt": {
          "en": "How can a screenplay anticipate image and sound relationships?",
          "nb": "Hvordan kan et manus forberede forholdet mellom bilde og lyd?",
          "fr": "Comment un scénario anticipe-t-il les relations image et son ?",
          "pt": "Como pode um argumento antecipar relações entre imagem e som?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Write a shot list with dialogue and sound cues",
              "nb": "Skriv en opptaksliste med dialog og lydsignaler",
              "fr": "Écrire un découpage avec dialogues et indications sonores",
              "pt": "Escrever uma lista de planos com diálogos e indicações sonoras"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Postpone all sound decisions until distribution",
              "nb": "Utsett alle lydvalg til distribusjon",
              "fr": "Reporter tous les choix sonores à la distribution",
              "pt": "Adiar todas as escolhas sonoras até à distribuição"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the script contained only dialogue",
              "nb": "Anta at manuset bare inneholdt dialog",
              "fr": "Supposer que le scénario ne contenait que des dialogues",
              "pt": "Supor que o argumento continha apenas diálogo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Robbe-Grillet's BFI interview describes direct shot-by-shot writing with sound. Criterion records the collaborators. Build an original integrated shot plan.",
          "nb": "Robbe-Grillets BFI-intervju beskriver direkte bilde-for-bilde-manus med lyd. Criterion dokumenterer samarbeidet. Lag en egen integrert opptaksplan.",
          "fr": "L’entretien BFI décrit le découpage avec son ; Criterion documente les collaborateurs. Créez un plan de tournage intégré.",
          "pt": "A entrevista do BFI descreve decupagem com som; a Criterion documenta os colaboradores. Crie um plano integrado."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "lastyearatmarienbad-architecture",
        "area": "camera",
        "prompt": {
          "en": "How can camera movement make architecture feel uncertain?",
          "nb": "Hvordan kan kamerabevegelse gjøre arkitekturen uavklart?",
          "fr": "Comment le mouvement de caméra rend-il l’architecture incertaine ?",
          "pt": "Como pode o movimento de câmara tornar a arquitetura incerta?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Map every corridor with explanatory graphics",
              "nb": "Kartlegg alle korridorer med forklarende grafikk",
              "fr": "Cartographier chaque couloir par des graphiques explicatifs",
              "pt": "Mapear cada corredor com gráficos explicativos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all recurring spatial motifs",
              "nb": "Fjern alle tilbakevendende romlige motiver",
              "fr": "Supprimer tous les motifs spatiaux récurrents",
              "pt": "Eliminar todos os motivos espaciais recorrentes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Repeat routes with controlled changes in framing",
              "nb": "Gjenta ruter med kontrollerte endringer i utsnitt",
              "fr": "Répéter les parcours avec des variations de cadrage",
              "pt": "Repetir percursos com mudanças controladas de enquadramento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI identifies gliding camera movement and château architecture; Criterion documents widescreen presentation. Test a repeated route in original footage.",
          "nb": "BFI identifiserer glidende kamera og slottsarkitektur; Criterion dokumenterer bredformat. Prøv en gjentatt rute i egne opptak.",
          "fr": "Le BFI identifie les mouvements glissants et l’architecture ; Criterion documente le format large. Testez un parcours répété dans vos images.",
          "pt": "O BFI identifica movimento fluido e arquitetura; a Criterion documenta o formato panorâmico. Teste um percurso repetido em imagens próprias."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "lastyearatmarienbad-memory",
        "area": "research",
        "prompt": {
          "en": "How can conflicting recollections remain unresolved in editing?",
          "nb": "Hvordan kan motstridende minner forbli uavklarte i klippingen?",
          "fr": "Comment laisser des souvenirs contradictoires irrésolus au montage ?",
          "pt": "Como manter recordações contraditórias sem resolução na montagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Reorder everything into one explicit timeline",
              "nb": "Ordne alt i én uttrykkelig tidslinje",
              "fr": "Tout réordonner en une chronologie explicite",
              "pt": "Reordenar tudo numa cronologia explícita"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Vary repeated events without declaring a definitive chronology",
              "nb": "Varier gjentatte hendelser uten å erklære en endelig kronologi",
              "fr": "Varier les événements répétés sans imposer de chronologie",
              "pt": "Variar acontecimentos repetidos sem impor uma cronologia"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Label one recollection as documentary proof",
              "nb": "Merk ett minne som dokumentarisk bevis",
              "fr": "Qualifier un souvenir de preuve documentaire",
              "pt": "Classificar uma recordação como prova documental"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes fractured time and Robbe-Grillet's account of present-tense imagination. Compare alternate edits while preserving uncertainty.",
          "nb": "BFI beskriver brutt tid og Robbe-Grillets tanker om forestilling i nåtid. Sammenlign klippversjoner som bevarer usikkerheten.",
          "fr": "Le BFI décrit le temps fracturé et l’imagination au présent selon Robbe-Grillet. Comparez des montages qui préservent l’incertitude.",
          "pt": "O BFI descreve tempo fragmentado e imaginação no presente segundo Robbe-Grillet. Compare montagens que preservem a incerteza."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_umbrellas_of_cherbourg_1964",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Sung dialogue, coordinated colour and restoration provenance",
      "nb": "Sunget dialog, samordnet farge og restaureringsproveniens",
      "fr": "Dialogue chanté, couleur coordonnée et provenance du restauro",
      "pt": "Diálogo cantado, cor coordenada e proveniência do restauro"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Umbrellas of Cherbourg",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/c3b5e349-11c4-5b3c-9c00-12316ec4fb6e/the-umbrellas-of-cherbourg"
      },
      {
        "id": "s1",
        "title": "The Umbrellas of Cherbourg",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/27933-the-umbrellas-of-cherbourg"
      },
      {
        "id": "s2",
        "title": "Restoring The Umbrellas of Cherbourg",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/3232-restoring-the-umbrellas-of-cherbourg"
      },
      {
        "id": "s3",
        "title": "Les Parapluies de Cherbourg",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/les-parapluies-de-cherbourg-2/"
      }
    ],
    "questions": [
      {
        "id": "theumbrellasofcherbourg-singing",
        "area": "sound",
        "prompt": {
          "en": "How should fully sung dialogue guide production timing?",
          "nb": "Hvordan bør helsunget dialog styre produksjonens timing?",
          "fr": "Comment le dialogue entièrement chanté guide-t-il le rythme du tournage ?",
          "pt": "Como deve o diálogo inteiramente cantado orientar o ritmo da rodagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat songs as detachable background music",
              "nb": "Behandle sangene som løsrevet bakgrunnsmusikk",
              "fr": "Traiter les chants comme musique de fond détachable",
              "pt": "Tratar canções como música de fundo destacável"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore dialogue duration during rehearsal",
              "nb": "Ignorer dialogens varighet under øving",
              "fr": "Ignorer la durée du dialogue pendant les répétitions",
              "pt": "Ignorar a duração do diálogo nos ensaios"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse action to a timed original vocal track",
              "nb": "Øv inn handling til et tidsbestemt eget vokalspor",
              "fr": "Répéter l’action sur une piste vocale originale minutée",
              "pt": "Ensaiar a ação com uma faixa vocal original temporizada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes the all-sung conception and Criterion credits Legrand and Demy. Compose an original brief vocal exercise and coordinate action with timing.",
          "nb": "BFI beskriver det helsungne konseptet og Criterion krediterer Legrand og Demy. Lag en egen kort vokaløvelse og samordne handling og timing.",
          "fr": "Le BFI décrit la conception chantée ; Criterion crédite Legrand et Demy. Créez un exercice vocal original et coordonnez l’action.",
          "pt": "O BFI descreve a conceção cantada; a Criterion credita Legrand e Demy. Crie um exercício vocal original e coordene a ação."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "theumbrellasofcherbourg-colour",
        "area": "camera",
        "prompt": {
          "en": "How can costumes and walls share a colour narrative?",
          "nb": "Hvordan kan kostymer og vegger dele en fargefortelling?",
          "fr": "Comment costumes et murs partagent-ils un récit chromatique ?",
          "pt": "Como podem figurinos e paredes partilhar uma narrativa cromática?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume colour has no narrative function",
              "nb": "Anta at farge ikke har fortellingsfunksjon",
              "fr": "Supposer que la couleur n’a aucune fonction narrative",
              "pt": "Supor que a cor não tem função narrativa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Create a palette linking characters and changing spaces",
              "nb": "Lag en palett som knytter figurer og skiftende rom",
              "fr": "Créer une palette reliant personnages et espaces changeants",
              "pt": "Criar uma paleta que ligue personagens e espaços mutáveis"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose every department's colours independently",
              "nb": "Velg hver fagavdelings farger uavhengig",
              "fr": "Choisir les couleurs de chaque département séparément",
              "pt": "Escolher as cores de cada departamento isoladamente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes Evein's colour design and Criterion credits costume and camera departments. Test a shared palette in a fictional sequence.",
          "nb": "BFI beskriver Eveins fargedesign og Criterion krediterer kostyme og kamera. Prøv en felles palett i en fiktiv sekvens.",
          "fr": "Le BFI décrit les couleurs d’Evein ; Criterion crédite costumes et image. Testez une palette commune dans une séquence fictive.",
          "pt": "O BFI descreve as cores de Evein; a Criterion credita figurinos e imagem. Teste uma paleta comum numa sequência fictícia."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "theumbrellasofcherbourg-restoration",
        "area": "research",
        "prompt": {
          "en": "How should restored colour be distinguished from production evidence?",
          "nb": "Hvordan bør restaurert farge skilles fra produksjonsbelegg?",
          "fr": "Comment distinguer couleur restaurée et preuves de production ?",
          "pt": "Como distinguir cor restaurada de provas da produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record preservation materials and edition provenance",
              "nb": "Registrer bevaringsmaterialer og utgavens proveniens",
              "fr": "Consigner les éléments de conservation et la provenance",
              "pt": "Registar materiais de preservação e proveniência da edição"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer an exact original lighting setup from the restoration",
              "nb": "Utled eksakt originalt lysoppsett fra restaureringen",
              "fr": "Déduire un éclairage original exact de la restauration",
              "pt": "Deduzir iluminação original exata do restauro"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat digital restoration as the original shoot",
              "nb": "Behandle digital restaurering som det opprinnelige opptaket",
              "fr": "Confondre restauration numérique et tournage original",
              "pt": "Confundir restauro digital e rodagem original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents the later three-strip colour restoration and soundtrack; preserve this history separately from the original cinematography credits.",
          "nb": "Criterion dokumenterer senere trefargerestaurering og lydspor; hold denne historien atskilt fra opprinnelig fotografkreditering.",
          "fr": "Criterion documente la restauration trichrome et sonore ; distinguez cette histoire des crédits de photographie originaux.",
          "pt": "A Criterion documenta restauro tricromático e sonoro; distinga esta história dos créditos originais de fotografia."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_dr_strangelove_1964",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Satirical adaptation, institutional scenography and ensemble performance",
      "nb": "Satirisk adaptasjon, institusjonell scenografi og ensemblespill",
      "fr": "Adaptation satirique, décor institutionnel et jeu collectif",
      "pt": "Adaptação satírica, cenografia institucional e interpretação coletiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/23082-DR-STRANGELOVEORHOWILEARNEDTOSTOPWORRYINGANDLOVETHEBOMB"
      },
      {
        "id": "s1",
        "title": "Behind the scenes: Dr Strangelove",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/behind-scenes-dr-strangelove"
      },
      {
        "id": "s2",
        "title": "Celebrating Kubrick's Dr Strangelove at 50",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/celebrating-kubricks-dr-strangelove-50"
      },
      {
        "id": "s3",
        "title": "The 37th Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1965"
      }
    ],
    "questions": [
      {
        "id": "drstrangelove-satire",
        "area": "research",
        "prompt": {
          "en": "How can serious research support a satirical screenplay?",
          "nb": "Hvordan kan seriøs research støtte et satirisk manus?",
          "fr": "Comment une recherche sérieuse nourrit-elle un scénario satirique ?",
          "pt": "Como pode pesquisa séria apoiar um argumento satírico?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard all historical context in the adaptation",
              "nb": "Forkast all historisk kontekst i adaptasjonen",
              "fr": "Écarter tout contexte historique de l’adaptation",
              "pt": "Descartar todo o contexto histórico na adaptação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use research to expose contradictions through fictional dialogue",
              "nb": "Bruk research til å avdekke motsetninger gjennom fiktiv dialog",
              "fr": "Employer la recherche pour révéler les contradictions par le dialogue fictif",
              "pt": "Usar pesquisa para revelar contradições por diálogo fictício"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present invented comic dialogue as archival testimony",
              "nb": "Presenter oppdiktet komisk dialog som arkivvitnesbyrd",
              "fr": "Présenter le dialogue comique inventé comme témoignage d’archive",
              "pt": "Apresentar diálogo cómico inventado como testemunho de arquivo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI and BFI document Kubrick's research and the turn from thriller to satire. Develop fictional institutional dialogue rather than treating comedy as evidence.",
          "nb": "AFI og BFI dokumenterer Kubricks research og overgangen fra thriller til satire. Lag fiktiv institusjonsdialog fremfor å behandle komedien som bevis.",
          "fr": "AFI et BFI documentent les recherches et le passage du thriller à la satire. Créez un dialogue institutionnel fictif sans le traiter comme preuve.",
          "pt": "AFI e BFI documentam pesquisa e passagem de thriller a sátira. Crie diálogo institucional fictício sem o tratar como prova."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "drstrangelove-room",
        "area": "camera",
        "prompt": {
          "en": "How can a fictional meeting room communicate institutional power?",
          "nb": "Hvordan kan et fiktivt møterom formidle institusjonell makt?",
          "fr": "Comment une salle de réunion fictive exprime-t-elle le pouvoir institutionnel ?",
          "pt": "Como pode uma sala de reuniões fictícia exprimir poder institucional?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Coordinate scale, seating and motivated lighting",
              "nb": "Samordne skala, sitteplassering og motivert lys",
              "fr": "Coordonner échelle, placement et lumière motivée",
              "pt": "Coordenar escala, lugares e luz motivada"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the set as a verified real-world facility",
              "nb": "Behandle settet som et verifisert virkelig anlegg",
              "fr": "Traiter le décor comme une installation réelle vérifiée",
              "pt": "Tratar o cenário como instalação real verificada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore performers' positions in the composition",
              "nb": "Ignorer skuespillernes posisjoner i komposisjonen",
              "fr": "Ignorer la position des interprètes dans la composition",
              "pt": "Ignorar posições dos intérpretes na composição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI production photographs and the archive feature document Ken Adam's designed space. Make an original fictional room emphasizing hierarchy, not a technical reconstruction.",
          "nb": "BFIs produksjonsbilder og arkivartikkel dokumenterer Ken Adams design. Lag et eget fiktivt rom som uttrykker hierarki, ikke en teknisk rekonstruksjon.",
          "fr": "Les photos et archives BFI documentent le décor de Ken Adam. Concevez une salle fictive exprimant la hiérarchie, non une reconstruction technique.",
          "pt": "As fotos e arquivos do BFI documentam o cenário de Ken Adam. Crie uma sala fictícia que exprima hierarquia, não uma reconstrução técnica."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "drstrangelove-roles",
        "area": "research",
        "prompt": {
          "en": "How should one performer prepare several contrasting characters?",
          "nb": "Hvordan bør én skuespiller forberede flere kontrasterende figurer?",
          "fr": "Comment un interprète prépare-t-il plusieurs personnages contrastés ?",
          "pt": "Como deve um intérprete preparar várias personagens contrastantes?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use an identical performance for every role",
              "nb": "Bruk identisk spill i alle rollene",
              "fr": "Employer un jeu identique pour chaque rôle",
              "pt": "Usar interpretação idêntica em cada papel"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Credit the actor as sole screenplay author",
              "nb": "Krediter skuespilleren som eneste manusforfatter",
              "fr": "Créditer l’acteur comme seul scénariste",
              "pt": "Creditar o ator como único argumentista"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Keep separate voice, gesture and continuity notes",
              "nb": "Før separate notater for stemme, gestikk og kontinuitet",
              "fr": "Tenir des notes distinctes de voix, gestes et continuité",
              "pt": "Manter notas distintas de voz, gestos e continuidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records Sellers's multiple roles and the separate writing credits; BFI photographs document ensemble direction. Rehearse distinct fictional roles.",
          "nb": "AFI dokumenterer Sellers' flere roller og separate manuskrediteringer; BFI-bilder viser ensembleregi. Øv inn ulike fiktive roller.",
          "fr": "AFI documente les rôles de Sellers et les scénaristes distincts ; les photos BFI montrent la direction du groupe. Répétez des rôles fictifs distincts.",
          "pt": "A AFI documenta papéis de Sellers e créditos distintos de escrita; fotos do BFI mostram direção coletiva. Ensaie papéis fictícios distintos."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_daisies_1966",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Colour collage, improvisation and institutional censorship",
      "nb": "Fargekollasj, improvisasjon og institusjonell sensur",
      "fr": "Collage chromatique, improvisation et censure institutionnelle",
      "pt": "Colagem cromática, improvisação e censura institucional"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Daisies: About",
        "publisher": "National Film Archive, Prague",
        "url": "https://eea.nfa.cz/en/project/daisies/"
      },
      {
        "id": "s1",
        "title": "Digitally restored classics Daisies & The Joke back on the big screen",
        "publisher": "Czech Film Center",
        "url": "https://www.filmcenter.cz/en/news/digitally-restored-classics-daisies-the-joke-back-on-the-big-screen"
      },
      {
        "id": "s2",
        "title": "Daisies (1966)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/80a5e60b-c976-5295-aa1b-7b644fda904a/daisies"
      },
      {
        "id": "s3",
        "title": "Daisies",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/27854-daisies"
      }
    ],
    "questions": [
      {
        "id": "daisies-collage",
        "area": "camera",
        "prompt": {
          "en": "How can colour changes become part of a collage rhythm?",
          "nb": "Hvordan kan fargeskift bli del av en kollasjrytme?",
          "fr": "Comment les changements de couleur participent-ils au rythme du collage ?",
          "pt": "Como podem mudanças de cor integrar o ritmo da colagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test deliberate colour shifts against gesture and montage",
              "nb": "Prøv bevisste fargeskift mot gestikk og montasje",
              "fr": "Tester les variations chromatiques avec gestes et montage",
              "pt": "Testar mudanças deliberadas de cor com gestos e montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Correct every change to uniform natural colour",
              "nb": "Korriger alle skift til ensartet naturtro farge",
              "fr": "Corriger toute variation vers une couleur naturelle uniforme",
              "pt": "Corrigir toda mudança para cor natural uniforme"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent exact historical laboratory recipes",
              "nb": "Finn på eksakte historiske laboratorieoppskrifter",
              "fr": "Inventer des recettes historiques de laboratoire",
              "pt": "Inventar receitas laboratoriais históricas exatas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The NFA documents collage imagery and the credited camera and editing work; BFI describes subversion of film form. Create an original colour experiment.",
          "nb": "NFA dokumenterer kollasjebilder og foto- og klippearbeidet; BFI beskriver brudd med filmformen. Lag et eget fargeeksperiment.",
          "fr": "La NFA documente le collage et les métiers image et montage ; le BFI décrit la subversion formelle. Créez une expérience chromatique originale.",
          "pt": "A NFA documenta colagem e créditos de imagem e montagem; o BFI descreve subversão formal. Crie uma experiência cromática original."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "daisies-improv",
        "area": "research",
        "prompt": {
          "en": "How can improvised dialogue coexist with a structured montage?",
          "nb": "Hvordan kan improvisert dialog sameksistere med strukturert montasje?",
          "fr": "Comment le dialogue improvisé coexiste-t-il avec un montage structuré ?",
          "pt": "Como pode diálogo improvisado coexistir com montagem estruturada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every spoken line was fixed in advance",
              "nb": "Anta at hver replikk var fastlagt på forhånd",
              "fr": "Supposer chaque réplique fixée à l’avance",
              "pt": "Supor cada fala fixada antecipadamente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard all takes after the first improvisation",
              "nb": "Forkast alle opptak etter første improvisasjon",
              "fr": "Écarter toutes les prises après la première improvisation",
              "pt": "Descartar todas as tomadas após a primeira improvisação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record variations and select gestures for rhythmic continuity",
              "nb": "Registrer variasjoner og velg gester for rytmisk kontinuitet",
              "fr": "Consigner les variantes et choisir les gestes pour la continuité rythmique",
              "pt": "Registar variantes e escolher gestos para continuidade rítmica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Czech Film Center documents improvised dialogue and departure from the approved script; NFA credits the editor. Compare variations in an original scene.",
          "nb": "Czech Film Center dokumenterer improvisert dialog og avvik fra godkjent manus; NFA krediterer klipperen. Sammenlign variasjoner i en egen scene.",
          "fr": "Czech Film Center documente l’improvisation et les écarts au scénario approuvé ; la NFA crédite le montage. Comparez des variantes originales.",
          "pt": "Czech Film Center documenta improvisação e desvios do argumento aprovado; a NFA credita a montagem. Compare variantes próprias."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "daisies-censor",
        "area": "research",
        "prompt": {
          "en": "How should institutional objections enter a production history?",
          "nb": "Hvordan bør institusjonelle innvendinger inngå i produksjonshistorien?",
          "fr": "Comment intégrer les objections institutionnelles à l’histoire de production ?",
          "pt": "Como integrar objeções institucionais na história de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer a precise censorship order without documents",
              "nb": "Utled en presis sensurordre uten dokumenter",
              "fr": "Déduire un ordre de censure précis sans documents",
              "pt": "Deduzir uma ordem de censura precisa sem documentos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate approved script, finished work and release record",
              "nb": "Skill godkjent manus, ferdig verk og utgivelseshistorikk",
              "fr": "Distinguer scénario approuvé, œuvre achevée et sortie",
              "pt": "Distinguir argumento aprovado, obra acabada e lançamento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all objections as changes in the final cut",
              "nb": "Behandle alle innvendinger som endringer i sluttklippet",
              "fr": "Traiter toutes les objections comme modifications du montage final",
              "pt": "Tratar todas as objeções como alterações da montagem final"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Czech Film Center documents censorship review and delayed release; Criterion records the restored presentation. Distinguish review, release and preservation.",
          "nb": "Czech Film Center dokumenterer sensurvurdering og forsinket utgivelse; Criterion dokumenterer restaurert visning. Skill vurdering, utgivelse og bevaring.",
          "fr": "Czech Film Center documente la censure et la sortie retardée ; Criterion documente la restauration. Distinguez examen, sortie et conservation.",
          "pt": "Czech Film Center documenta censura e lançamento tardio; a Criterion documenta restauro. Distinga avaliação, lançamento e preservação."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_battle_of_algiers_1966",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Constructed documentary appearance, historical attribution and sound perspective",
      "nb": "Konstruert dokumentarpreg, historisk attribusjon og lydperspektiv",
      "fr": "Apparence documentaire construite, attribution historique et perspective sonore",
      "pt": "Aparência documental construída, atribuição histórica e perspetiva sonora"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Battle of Algiers at 55",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/battle-algiers-gillo-pontecorvo"
      },
      {
        "id": "s1",
        "title": "The Battle of Algiers",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/248-the-battle-of-algiers"
      },
      {
        "id": "s2",
        "title": "The Battle of Algiers",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/events/10511"
      },
      {
        "id": "s3",
        "title": "The 41st Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1969"
      }
    ],
    "questions": [
      {
        "id": "thebattleofalgiers-evidence",
        "area": "research",
        "prompt": {
          "en": "How should reconstructed historical scenes be labeled?",
          "nb": "Hvordan bør rekonstruerte historiske scener merkes?",
          "fr": "Comment identifier des scènes historiques reconstituées ?",
          "pt": "Como identificar cenas históricas reconstituídas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every newsreel-like image as archival footage",
              "nb": "Behandle alle aktualitetsliknende bilder som arkivopptak",
              "fr": "Traiter toute image de style actualités comme archive",
              "pt": "Tratar toda imagem de estilo jornalístico como arquivo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use realistic grain as proof of authenticity",
              "nb": "Bruk realistisk filmkorn som bevis på autentisitet",
              "fr": "Utiliser le grain réaliste comme preuve d’authenticité",
              "pt": "Usar grão realista como prova de autenticidade"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish staged images from contemporary archival evidence",
              "nb": "Skill iscenesatte bilder fra samtidige arkivkilder",
              "fr": "Distinguer images mises en scène et archives contemporaines",
              "pt": "Distinguir imagens encenadas de arquivos contemporâneos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes the constructed newsreel appearance; Criterion documents the fiction's production credits. Keep visual resemblance separate from historical corroboration.",
          "nb": "BFI beskriver det konstruerte aktualitetspreget; Criterion dokumenterer fiksjonens produksjonskreditering. Skill visuell likhet fra historisk bekreftelse.",
          "fr": "Le BFI décrit l’apparence d’actualités construite ; Criterion documente les crédits de fiction. Distinguez ressemblance et corroboration historique.",
          "pt": "O BFI descreve a aparência jornalística construída; a Criterion documenta os créditos da ficção. Distinga semelhança de corroboração histórica."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "thebattleofalgiers-collaboration",
        "area": "research",
        "prompt": {
          "en": "How should a cross-national historical production credit collaborators?",
          "nb": "Hvordan bør en internasjonal historisk produksjon kreditere samarbeidspartnere?",
          "fr": "Comment une coproduction historique crédite-t-elle ses collaborateurs ?",
          "pt": "Como deve uma coprodução histórica creditar colaboradores?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume participation guarantees complete historical accuracy",
              "nb": "Anta at deltakelse garanterer full historisk nøyaktighet",
              "fr": "Supposer que la participation garantit l’exactitude historique",
              "pt": "Supor que participação garante exatidão histórica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record documented roles and distinguish production from interpretation",
              "nb": "Registrer dokumenterte roller og skill produksjon fra tolkning",
              "fr": "Consigner les rôles documentés et distinguer production et interprétation",
              "pt": "Registar papéis documentados e distinguir produção de interpretação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute the whole film solely to its director",
              "nb": "Tilskriv hele filmen bare regissøren",
              "fr": "Attribuer tout le film au seul réalisateur",
              "pt": "Atribuir todo o filme apenas ao realizador"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion records the Algerian-Italian collaborators and MoMA notes Maldoror's contribution. Credit documented work without equating involvement with independent verification.",
          "nb": "Criterion dokumenterer algerisk-italienske samarbeidspartnere og MoMA omtaler Maldorors bidrag. Krediter dokumentert arbeid uten å likestille deltakelse med uavhengig verifisering.",
          "fr": "Criterion documente la collaboration algéro-italienne et le MoMA la contribution de Maldoror. Créditez les apports sans confondre participation et vérification indépendante.",
          "pt": "A Criterion documenta colaboração argelino-italiana e o MoMA a contribuição de Maldoror. Credite os contributos sem confundir participação com verificação independente."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "thebattleofalgiers-sound",
        "area": "sound",
        "prompt": {
          "en": "How can music influence interpretation of historical images?",
          "nb": "Hvordan kan musikk påvirke tolkningen av historiske bilder?",
          "fr": "Comment la musique influence-t-elle l’interprétation d’images historiques ?",
          "pt": "Como pode a música influenciar a interpretação de imagens históricas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare contrasting original cues and discuss their perspective",
              "nb": "Sammenlign kontrasterende egne lydtemaer og drøft perspektivet",
              "fr": "Comparer des motifs sonores originaux contrastés et discuter leur point de vue",
              "pt": "Comparar motivos sonoros originais contrastantes e discutir a perspetiva"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every musical cue as neutral historical evidence",
              "nb": "Behandle hvert musikalsk signal som nøytralt historisk bevis",
              "fr": "Traiter chaque motif musical comme preuve historique neutre",
              "pt": "Tratar cada motivo musical como prova histórica neutra"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the distinction between score and recorded ambience",
              "nb": "Ignorer skillet mellom musikk og opptakslyd",
              "fr": "Ignorer la distinction entre partition et ambiance enregistrée",
              "pt": "Ignorar a distinção entre partitura e ambiente gravado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI discusses contrasting musical registers and MoMA documents the score and sound palette. Compare original nonviolent scene cues to examine interpretive framing.",
          "nb": "BFI drøfter kontrasterende musikalske uttrykk og MoMA dokumenterer musikk og lydpalett. Sammenlign egne lydtemaer til en ikkevoldelig scene for å undersøke tolkning.",
          "fr": "Le BFI examine les registres musicaux contrastés et le MoMA la palette sonore. Comparez des motifs originaux pour une scène non violente afin d’étudier le cadrage interprétatif.",
          "pt": "O BFI analisa registos musicais contrastantes e o MoMA a paleta sonora. Compare motivos originais para uma cena não violenta e examine o enquadramento interpretativo."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_black_girl_1966",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Postcolonial production, interior voice and costume collaboration",
      "nb": "Postkolonial produksjon, indre stemme og kostymesamarbeid",
      "fr": "Production postcoloniale, voix intérieure et collaboration aux costumes",
      "pt": "Produção pós-colonial, voz interior e colaboração nos figurinos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Black Girl",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/28849-black-girl"
      },
      {
        "id": "s1",
        "title": "Black Girl: Self, Possessed",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/4402-black-girl-self-possessed"
      },
      {
        "id": "s2",
        "title": "10 Things I Learned: Black Girl",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5582-10-things-i-learned-black-girl"
      },
      {
        "id": "s3",
        "title": "Black Girl / La Noire de...",
        "publisher": "The Film Foundation – World Cinema Project",
        "url": "https://www.film-foundation.org/world-cinema"
      },
      {
        "id": "s4",
        "title": "La Noire de...",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/63130.html"
      },
      {
        "id": "s5",
        "title": "10 great films from 1966",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-films-1966"
      }
    ],
    "questions": [
      {
        "id": "blackgirl-voice",
        "area": "sound",
        "prompt": {
          "en": "How can interior narration express a character's perspective?",
          "nb": "Hvordan kan indre fortellerstemme uttrykke figurens perspektiv?",
          "fr": "Comment une voix intérieure exprime-t-elle le regard du personnage ?",
          "pt": "Como pode a voz interior exprimir a perspetiva da personagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan voice performance and document language choices",
              "nb": "Planlegg stemmespill og dokumenter språkvalg",
              "fr": "Préparer la voix et documenter les choix linguistiques",
              "pt": "Planear a voz e documentar escolhas linguísticas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat dubbing as the performer's original recorded voice",
              "nb": "Behandle dubbing som skuespillerens opprinnelige opptaksstemme",
              "fr": "Confondre doublage et voix originale enregistrée",
              "pt": "Confundir dobragem com a voz original gravada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace interior narration with explanatory titles",
              "nb": "Erstatt indre fortellerstemme med forklarende tekstplakater",
              "fr": "Remplacer la voix intérieure par des cartons explicatifs",
              "pt": "Substituir a voz interior por legendas explicativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion credits Toto Bissainthe for Diouana's voice and describes funding constraints on language. Distinguish voice work from screen performance.",
          "nb": "Criterion krediterer Toto Bissainthe for Diouanas stemme og beskriver økonomiske språkbegrensninger. Skill stemmearbeid fra spill foran kamera.",
          "fr": "Criterion crédite Toto Bissainthe pour la voix de Diouana et décrit les contraintes financières de langue. Distinguez voix et jeu à l’écran.",
          "pt": "A Criterion credita Toto Bissainthe pela voz de Diouana e descreve restrições financeiras de língua. Distinga voz e interpretação em cena."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "blackgirl-wardrobe",
        "area": "research",
        "prompt": {
          "en": "How should performer contributions to costume be credited?",
          "nb": "Hvordan bør skuespillerens kostymebidrag krediteres?",
          "fr": "Comment créditer les apports de l’interprète aux costumes ?",
          "pt": "Como creditar os contributos da intérprete para os figurinos?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all garments came from a studio wardrobe",
              "nb": "Anta at alle plagg kom fra et studiogarderobelager",
              "fr": "Supposer que tous les vêtements venaient du studio",
              "pt": "Supor que todas as roupas vieram do guarda-roupa do estúdio"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the performer's material contribution",
              "nb": "Ignorer skuespillerens materielle bidrag",
              "fr": "Ignorer l’apport matériel de l’interprète",
              "pt": "Ignorar o contributo material da intérprete"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record clothing contributions alongside production roles",
              "nb": "Registrer klesbidrag sammen med produksjonsrollene",
              "fr": "Consigner les apports vestimentaires avec les rôles de production",
              "pt": "Registar contributos de vestuário com os papéis de produção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's production notes describe Diop's seamstress practice and her own clothing. Document collaboration without inventing a formal costume credit.",
          "nb": "Criterions produksjonsnotater beskriver Diops arbeid som syerske og egne klær. Dokumenter samarbeidet uten å dikte en formell kostymekreditering.",
          "fr": "Les notes Criterion décrivent le métier de couturière de Diop et ses vêtements. Documentez l’apport sans inventer un crédit officiel.",
          "pt": "As notas Criterion descrevem a costura de Diop e as suas roupas. Documente o contributo sem inventar um crédito oficial."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "blackgirl-funding",
        "area": "research",
        "prompt": {
          "en": "How can limited funding shape a postcolonial production plan?",
          "nb": "Hvordan kan begrenset finansiering forme en postkolonial produksjonsplan?",
          "fr": "Comment un financement limité façonne-t-il une production postcoloniale ?",
          "pt": "Como pode financiamento limitado moldar uma produção pós-colonial?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent a precise historical budget from runtime",
              "nb": "Finn på et presist historisk budsjett ut fra spilletiden",
              "fr": "Inventer un budget historique précis à partir de la durée",
              "pt": "Inventar um orçamento histórico exato pela duração"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Prioritize essential scenes and identify infrastructure constraints",
              "nb": "Prioriter nødvendige scener og identifiser infrastrukturbegrensninger",
              "fr": "Prioriser les scènes essentielles et identifier les contraintes techniques",
              "pt": "Priorizar cenas essenciais e identificar restrições de infraestrutura"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume equal access to all production resources",
              "nb": "Anta lik tilgang til alle produksjonsressurser",
              "fr": "Supposer un accès égal à toutes les ressources",
              "pt": "Supor acesso igual a todos os recursos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes the rejected funding request and budget-scraping conditions; the Film Foundation identifies the production. Draft a fictional resource plan, not a reconstructed budget.",
          "nb": "Criterion beskriver avslått finansieringssøknad og knappe ressurser; Film Foundation identifiserer produksjonen. Lag en fiktiv ressursplan, ikke et rekonstruert budsjett.",
          "fr": "Criterion décrit le refus de financement et les moyens limités ; la Film Foundation identifie la production. Créez un plan fictif, non un budget reconstitué.",
          "pt": "A Criterion descreve a recusa de financiamento e meios escassos; a Film Foundation identifica a produção. Crie um plano fictício, não um orçamento reconstituído."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_bonnie_and_clyde_1967",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Producer-led development, location realism and tonal shifts",
      "nb": "Produsentdrevet utvikling, stedsrealisme og toneskift",
      "fr": "Développement par le producteur, réalisme et variations de ton",
      "pt": "Desenvolvimento pelo produtor, realismo e mudanças de tom"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Bonnie and Clyde",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/19356-BONNIE-AND-CLYDE"
      },
      {
        "id": "s1",
        "title": "Bonnie and Clyde (1967)",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      },
      {
        "id": "s2",
        "title": "Raw Cinematic Realism in the Photography of Bonnie and Clyde",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/flashback-bonnie-and-clyde"
      },
      {
        "id": "s3",
        "title": "A great New Hollywood film for every year (1967 to 1982)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/great-new-hollywood-film-every-year-1967-1982"
      }
    ],
    "questions": [
      {
        "id": "bonnieandclyde-development",
        "area": "research",
        "prompt": {
          "en": "How should a producer coordinate screenplay revisions?",
          "nb": "Hvordan bør en produsent samordne manusrevisjoner?",
          "fr": "Comment un producteur coordonne-t-il les révisions du scénario ?",
          "pt": "Como deve um produtor coordenar revisões do argumento?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute every revision to the lead performer",
              "nb": "Tilskriv alle revisjoner hovedrolleinnehaveren",
              "fr": "Attribuer toutes les révisions à l’interprète principal",
              "pt": "Atribuir todas as revisões ao ator principal"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard the original screenplay attribution",
              "nb": "Forkast den opprinnelige manuskrediteringen",
              "fr": "Écarter les crédits du scénario original",
              "pt": "Descartar os créditos do argumento original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track draft changes and distinguish writing contributions",
              "nb": "Følg manusendringer og skill mellom forfatterbidrag",
              "fr": "Suivre les révisions et distinguer les contributions d’écriture",
              "pt": "Acompanhar revisões e distinguir contributos de escrita"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records Beatty's producing role, Newman and Benton and Towne's rewrites. Keep development and credited authorship distinct.",
          "nb": "AFI dokumenterer Beattys produsentrolle, Newman og Benton og Townes omskrivinger. Skill utvikling fra kreditert forfatterskap.",
          "fr": "L’AFI documente Beatty, Newman, Benton et les révisions de Towne. Distinguez développement et écriture créditée.",
          "pt": "A AFI documenta Beatty, Newman, Benton e revisões de Towne. Distinga desenvolvimento de autoria creditada."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "bonnieandclyde-locations",
        "area": "camera",
        "prompt": {
          "en": "How can a period location retain an unpolished visual texture?",
          "nb": "Hvordan kan et historisk opptakssted bevare et upolert visuelt uttrykk?",
          "fr": "Comment un lieu d’époque garde-t-il une texture visuelle brute ?",
          "pt": "Como pode um local de época conservar uma textura visual crua?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the period details visible in the frame",
              "nb": "Ignorer tidsdetaljene som synes i bildet",
              "fr": "Ignorer les détails d’époque visibles dans le cadre",
              "pt": "Ignorar pormenores de época visíveis no quadro"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Scout suitable interiors and coordinate period design with available light",
              "nb": "Undersøk egnede interiører og samordne tidsriktig design med tilgjengelig lys",
              "fr": "Repérer les intérieurs et coordonner décor d’époque et lumière disponible",
              "pt": "Reconhecer interiores e coordenar cenário de época e luz disponível"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every location requires glossy studio lighting",
              "nb": "Anta at alle steder krever blank studiobelysning",
              "fr": "Supposer que chaque lieu exige un éclairage de studio lisse",
              "pt": "Supor que cada local exige iluminação polida de estúdio"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC records Guffey's account of harsh realism and location interiors; AFI records production locations. Design a fictional nonviolent period scene.",
          "nb": "ASC gjengir Guffeys redegjørelse for rå realisme og interiører; AFI dokumenterer opptakssteder. Utform en fiktiv, ikkevoldelig tidsscene.",
          "fr": "L’ASC rapporte le réalisme de Guffey et les intérieurs ; l’AFI documente les lieux. Concevez une scène d’époque fictive non violente.",
          "pt": "A ASC relata o realismo de Guffey e os interiores; a AFI documenta locais. Crie uma cena de época fictícia não violenta."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "bonnieandclyde-tone",
        "area": "research",
        "prompt": {
          "en": "How can an edit move between comedy and social criticism?",
          "nb": "Hvordan kan klippingen bevege seg mellom komedie og samfunnskritikk?",
          "fr": "Comment le montage passe-t-il de la comédie à la critique sociale ?",
          "pt": "Como pode a montagem passar da comédia à crítica social?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare tonal transitions and their effect on audience sympathy",
              "nb": "Sammenlign toneskift og virkningen på publikums sympati",
              "fr": "Comparer les transitions de ton et leur effet sur la sympathie",
              "pt": "Comparar transições de tom e efeito na simpatia do público"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep every scene at the same emotional temperature",
              "nb": "Hold alle scener på samme emosjonelle temperatur",
              "fr": "Garder toutes les scènes au même registre émotionnel",
              "pt": "Manter todas as cenas no mesmo registo emocional"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat genre mixture as an accidental editing error",
              "nb": "Behandle sjangerblanding som en tilfeldig klippefeil",
              "fr": "Traiter le mélange des genres comme une erreur de montage",
              "pt": "Tratar mistura de géneros como erro de montagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Library of Congress and BFI describe tonal instability and New Hollywood's formal freedom. Compare transitions in an original nonviolent scene.",
          "nb": "Library of Congress og BFI beskriver toneskift og New Hollywoods formfrihet. Sammenlign overganger i en egen ikkevoldelig scene.",
          "fr": "La Library of Congress et le BFI décrivent les variations de ton et la liberté formelle. Comparez des transitions dans une scène originale non violente.",
          "pt": "A Library of Congress e o BFI descrevem mudanças de tom e liberdade formal. Compare transições numa cena original não violenta."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_playtime_1967",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Deep-frame comedy, constructed city and composed sound",
      "nb": "Dybdekomedie, konstruert by og komponert lyd",
      "fr": "Comédie en profondeur, ville construite et son composé",
      "pt": "Comédia em profundidade, cidade construída e som composto"
    },
    "sources": [
      {
        "id": "s0",
        "title": "PlayTime",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/651-playtime"
      },
      {
        "id": "s1",
        "title": "Playtime",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/115-playtime"
      },
      {
        "id": "s2",
        "title": "Jacques Tati: Composing in Sound and Image",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/3337-jacques-tati-composing-in-sound-and-image"
      },
      {
        "id": "s3",
        "title": "10 great films shot in 70mm",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-films-shot-70mm"
      }
    ],
    "questions": [
      {
        "id": "playtime-frame",
        "area": "camera",
        "prompt": {
          "en": "How can several comic actions coexist within one wide frame?",
          "nb": "Hvordan kan flere komiske handlinger eksistere i samme brede bilde?",
          "fr": "Comment plusieurs actions comiques coexistent-elles dans un cadre large ?",
          "pt": "Como podem várias ações cómicas coexistir num quadro amplo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Fill all background space with static decoration",
              "nb": "Fyll all bakgrunn med statisk dekorasjon",
              "fr": "Remplir tout l’arrière-plan de décor immobile",
              "pt": "Preencher todo o fundo com decoração estática"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse simultaneous foreground and background actions",
              "nb": "Øv inn samtidige handlinger i forgrunn og bakgrunn",
              "fr": "Répéter des actions simultanées au premier et à l’arrière-plan",
              "pt": "Ensaiar ações simultâneas em primeiro plano e fundo"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Cut immediately to every separate visual gag",
              "nb": "Klipp umiddelbart til hver enkelt visuelle vits",
              "fr": "Couper immédiatement vers chaque gag visuel",
              "pt": "Cortar imediatamente para cada gag visual"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI explains the large-format need to preserve simultaneous gags; Criterion describes distant framing. Test a wide shot with several readable actions.",
          "nb": "BFI forklarer storformatets betydning for samtidige vitser; Criterion beskriver fjern innramming. Prøv et vidt bilde med flere lesbare handlinger.",
          "fr": "Le BFI explique le grand format pour les gags simultanés ; Criterion décrit le cadrage distant. Testez un plan large à actions multiples.",
          "pt": "O BFI explica o grande formato para gags simultâneos; a Criterion descreve enquadramento distante. Teste um plano amplo com várias ações."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "playtime-city",
        "area": "research",
        "prompt": {
          "en": "How should a purpose-built urban set be budgeted?",
          "nb": "Hvordan bør en spesialbygget bykulisse budsjetteres?",
          "fr": "Comment budgéter un décor urbain construit pour le film ?",
          "pt": "Como orçamentar um cenário urbano construído para o filme?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare construction costs with location alternatives and contingencies",
              "nb": "Sammenlign byggekostnader med stedsalternativer og reserver",
              "fr": "Comparer construction, lieux alternatifs et réserves",
              "pt": "Comparar construção, locais alternativos e reservas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Exclude weather and maintenance from planning",
              "nb": "Utelat vær og vedlikehold fra planleggingen",
              "fr": "Exclure météo et maintenance du plan",
              "pt": "Excluir meteorologia e manutenção do plano"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every constructed building is reusable without cost",
              "nb": "Anta at alle konstruerte bygg kan gjenbrukes gratis",
              "fr": "Supposer que chaque bâtiment est réutilisable gratuitement",
              "pt": "Supor que cada edifício pode ser reutilizado gratuitamente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion and BFI document Tativille's construction and storm damage. Estimate a fictional set with reserves rather than inventing historical costs.",
          "nb": "Criterion og BFI dokumenterer Tativilles konstruksjon og stormskader. Beregn en fiktiv kulisse med reserver fremfor å dikte historiske kostnader.",
          "fr": "Criterion et le BFI documentent Tativille et les dégâts de tempête. Estimez un décor fictif avec réserves, sans inventer les coûts historiques.",
          "pt": "A Criterion e o BFI documentam Tativille e danos de tempestade. Estime um cenário fictício com reservas, sem inventar custos históricos."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "playtime-sound",
        "area": "sound",
        "prompt": {
          "en": "How can sound direct attention within a crowded image?",
          "nb": "Hvordan kan lyd styre oppmerksomheten i et tett befolket bilde?",
          "fr": "Comment le son dirige-t-il l’attention dans une image peuplée ?",
          "pt": "Como pode o som orientar a atenção numa imagem povoada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Give every sound equal prominence throughout",
              "nb": "Gi alle lyder like stor fremtreden hele tiden",
              "fr": "Donner à tous les sons la même présence",
              "pt": "Dar a todos os sons a mesma presença"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Require dialogue to explain every background action",
              "nb": "Krev at dialog forklarer hver bakgrunnshandling",
              "fr": "Exiger que le dialogue explique chaque action de fond",
              "pt": "Exigir que o diálogo explique cada ação de fundo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compose distinct sound cues for selected visual details",
              "nb": "Komponer tydelige lydsignaler for utvalgte bildedetaljer",
              "fr": "Composer des indices sonores distincts pour certains détails",
              "pt": "Compor sinais sonoros distintos para detalhes selecionados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's sound essay describes separately composed tracks and attention cues; its film record lists soundtrack versions. Create an original cue map.",
          "nb": "Criterions lydessay beskriver separat komponerte lydspor og oppmerksomhetssignaler; filmoppføringen viser lydversjoner. Lag et eget lydkart.",
          "fr": "L’essai Criterion décrit les pistes composées séparément et les indices sonores ; la fiche recense les versions. Créez une carte sonore originale.",
          "pt": "O ensaio Criterion descreve faixas compostas separadamente e sinais de atenção; a ficha lista versões. Crie um mapa sonoro original."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_memories_of_underdevelopment_1968",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Archive-fiction montage, institutional context and preservation",
      "nb": "Arkiv- og fiksjonsmontasje, institusjonell kontekst og bevaring",
      "fr": "Montage archives-fiction, contexte institutionnel et préservation",
      "pt": "Montagem arquivo-ficção, contexto institucional e preservação"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Memories of Underdevelopment",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/29220-memories-of-underdevelopment"
      },
      {
        "id": "s1",
        "title": "Memories of Underdevelopment: Imaging History",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5883-memories-of-underdevelopment-imaging-history"
      },
      {
        "id": "s2",
        "title": "10 Things I Learned: Memories of Underdevelopment",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5893-10-things-i-learned-memories-of-underdevelopment"
      },
      {
        "id": "s3",
        "title": "Memories of Underdevelopment / Memorias del subdesarrollo",
        "publisher": "The Film Foundation – World Cinema Project",
        "url": "https://www.film-foundation.org/world-cinema?page=1.&sortBy=country&sortOrder=1"
      },
      {
        "id": "s4",
        "title": "Memories of Underdevelopment (1968)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/6bb5b3dc-3a99-5d91-ac9e-9cf52c4995ca/memories-of-underdevelopment"
      },
      {
        "id": "s5",
        "title": "Memorias del subdesarrollo",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/memorias-del-subdesarrollo/"
      }
    ],
    "questions": [
      {
        "id": "memoriesofunderdevelopment-archive",
        "area": "research",
        "prompt": {
          "en": "How should archival fragments be integrated into fictional memory?",
          "nb": "Hvordan bør arkivfragmenter integreres i fiktive minner?",
          "fr": "Comment intégrer des fragments d’archives à une mémoire fictive ?",
          "pt": "Como integrar fragmentos de arquivo numa memória fictícia?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Log source provenance and distinguish footage from fictional viewpoint",
              "nb": "Loggfør kildeproveniens og skill opptak fra fiktivt perspektiv",
              "fr": "Consigner la provenance et distinguer images et regard fictif",
              "pt": "Registar proveniência e distinguir imagens de olhar fictício"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the protagonist's interpretation as archival fact",
              "nb": "Behandle hovedfigurens tolkning som arkivfaktum",
              "fr": "Traiter l’interprétation du personnage comme un fait d’archive",
              "pt": "Tratar interpretação da personagem como facto de arquivo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove the origin of every inserted image",
              "nb": "Fjern opphavet til alle innklipte bilder",
              "fr": "Effacer l’origine de chaque image insérée",
              "pt": "Apagar a origem de cada imagem inserida"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes ICAIC newsreel fragments within Sergio's perspective; BFI describes fragmented fiction. Build an annotated montage of cleared material.",
          "nb": "Criterion beskriver ICAIC-aktualitetsklipp i Sergios perspektiv; BFI beskriver fragmentert fiksjon. Lag en annotert montasje med klarert materiale.",
          "fr": "Criterion décrit les actualités ICAIC dans le regard de Sergio ; le BFI décrit la fiction fragmentée. Créez un montage annoté de matériaux autorisés.",
          "pt": "A Criterion descreve atualidades ICAIC no olhar de Sergio; o BFI descreve ficção fragmentada. Crie montagem anotada com materiais autorizados."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "memoriesofunderdevelopment-institution",
        "area": "research",
        "prompt": {
          "en": "How should a film institution's role be described in production history?",
          "nb": "Hvordan bør en filminstitusjons rolle beskrives i produksjonshistorien?",
          "fr": "Comment décrire le rôle d’un institut dans l’histoire de production ?",
          "pt": "Como descrever o papel de um instituto na história da produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume collective production eliminates individual authorship",
              "nb": "Anta at kollektiv produksjon fjerner individuelt forfatterskap",
              "fr": "Supposer que la production collective efface les auteurs",
              "pt": "Supor que produção coletiva elimina autoria individual"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Confuse represented events with the production year",
              "nb": "Forveksle skildrede hendelser med produksjonsåret",
              "fr": "Confondre les événements représentés et l’année de production",
              "pt": "Confundir acontecimentos representados e ano de produção"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish institutional support from artistic interpretation",
              "nb": "Skill institusjonell støtte fra kunstnerisk tolkning",
              "fr": "Distinguer soutien institutionnel et interprétation artistique",
              "pt": "Distinguir apoio institucional e interpretação artística"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes ICAIC's founding and collective ethos; Film Foundation identifies ICAIC as producer. Keep historical setting and production chronology separate.",
          "nb": "Criterion beskriver ICAICs grunnleggelse og kollektive ideal; Film Foundation identifiserer ICAIC som produksjonsselskap. Skill historisk handlingstid fra produksjonskronologi.",
          "fr": "Criterion décrit la fondation et l’idéal collectif de l’ICAIC ; la Film Foundation identifie la production. Distinguez époque représentée et tournage.",
          "pt": "A Criterion descreve fundação e ideal coletivo do ICAIC; a Film Foundation identifica a produção. Distinga época representada e rodagem."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "memoriesofunderdevelopment-preservation",
        "area": "research",
        "prompt": {
          "en": "How should restored archival inserts be documented?",
          "nb": "Hvordan bør restaurerte arkivinnklipp dokumenteres?",
          "fr": "Comment documenter les inserts d’archives restaurés ?",
          "pt": "Como documentar inserções de arquivo restauradas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Declare new cuts solely from catalogue runtime variance",
              "nb": "Erklær nye klippversjoner bare fra varierende kataloglengde",
              "fr": "Déclarer des montages nouveaux sur la seule durée des catalogues",
              "pt": "Declarar novas montagens apenas pela duração dos catálogos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record element provenance and distinguish original from duplicate materials",
              "nb": "Registrer elementproveniens og skill original- og duplikatmateriale",
              "fr": "Consigner la provenance et distinguer originaux et duplicatas",
              "pt": "Registar proveniência e distinguir originais de duplicados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every frame survives as original camera negative",
              "nb": "Anta at hvert bilde er bevart som originalt kameranegativ",
              "fr": "Supposer que chaque image subsiste en négatif original",
              "pt": "Supor que cada imagem sobrevive em negativo original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Film Foundation documents duplicate elements for archival footage and Cannes records a restored duration. Record material history without inventing alternate cuts.",
          "nb": "Film Foundation dokumenterer duplikatelementer for arkivopptak og Cannes oppgir restaurert lengde. Registrer materialhistorien uten å dikte alternative klipp.",
          "fr": "La Film Foundation documente les duplicatas d’archives et Cannes la durée restaurée. Consignez l’histoire matérielle sans inventer de versions.",
          "pt": "A Film Foundation documenta duplicados de arquivo e Cannes a duração restaurada. Registe história material sem inventar versões."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_night_of_the_living_dead_1968",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Independent collective, constrained scheduling and media inserts",
      "nb": "Uavhengig kollektiv, begrenset opptaksplan og medieinnklipp",
      "fr": "Collectif indépendant, calendrier contraint et inserts médiatiques",
      "pt": "Coletivo independente, calendário limitado e inserções mediáticas"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Night of the Living Dead",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/19843-NIGHT-OF-THE-LIVING-DEAD"
      },
      {
        "id": "s1",
        "title": "Night of the Living Dead (1968)",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/91783945/night-of-the-living-dead-1968/"
      },
      {
        "id": "s2",
        "title": "Night of the Living Dead",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/calendar/film/565"
      },
      {
        "id": "s3",
        "title": "Night of the Living Dead",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/29331-night-of-the-living-dead"
      }
    ],
    "questions": [
      {
        "id": "nightofthelivingdead-collective",
        "area": "research",
        "prompt": {
          "en": "How should a small independent collective allocate production duties?",
          "nb": "Hvordan bør et lite uavhengig kollektiv fordele produksjonsoppgaver?",
          "fr": "Comment un petit collectif indépendant répartit-il les tâches ?",
          "pt": "Como deve um pequeno coletivo independente distribuir tarefas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every role needs a separate large department",
              "nb": "Anta at hver rolle trenger en stor separat avdeling",
              "fr": "Supposer que chaque rôle exige un grand département",
              "pt": "Supor que cada função exige um grande departamento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Leave shared tasks without any responsible person",
              "nb": "La felles oppgaver stå uten ansvarlig person",
              "fr": "Laisser les tâches partagées sans responsable",
              "pt": "Deixar tarefas partilhadas sem responsável"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Assign responsibilities and log overlapping craft roles",
              "nb": "Fordel ansvar og registrer overlappende fagroller",
              "fr": "Attribuer les responsabilités et noter les rôles multiples",
              "pt": "Atribuir responsabilidades e registar funções sobrepostas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents Image Ten and overlapping roles; MoMA describes limited resources. Draft a responsibility map for a fictional small production.",
          "nb": "AFI dokumenterer Image Ten og overlappende roller; MoMA beskriver knappe ressurser. Lag et ansvarskart for en fiktiv liten produksjon.",
          "fr": "L’AFI documente Image Ten et les rôles multiples ; le MoMA décrit les moyens limités. Créez une carte des responsabilités fictive.",
          "pt": "A AFI documenta Image Ten e funções sobrepostas; o MoMA descreve meios limitados. Crie um mapa de responsabilidades fictício."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "nightofthelivingdead-schedule",
        "area": "research",
        "prompt": {
          "en": "How can continuity survive shooting spread over months?",
          "nb": "Hvordan kan kontinuiteten bevares ved opptak fordelt over måneder?",
          "fr": "Comment préserver les raccords sur plusieurs mois de tournage ?",
          "pt": "Como preservar continuidade em filmagens ao longo de meses?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume elapsed calendar time equals actual shooting days",
              "nb": "Anta at kalendertid er lik faktiske opptaksdager",
              "fr": "Confondre durée calendaire et jours de tournage",
              "pt": "Confundir tempo de calendário e dias de rodagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Maintain appearance and location continuity records between sessions",
              "nb": "Før kontinuitetsnotater om utseende og steder mellom økter",
              "fr": "Tenir des fiches de raccord des apparences et lieux",
              "pt": "Manter registos de continuidade de aparência e locais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard reference photographs after each session",
              "nb": "Forkast referansebilder etter hver økt",
              "fr": "Jeter les photos de référence après chaque séance",
              "pt": "Descartar fotografias de referência após cada sessão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "MoMA distinguishes shooting days from the nine-month production span; AFI records locations. Plan a fictional schedule with continuity checkpoints.",
          "nb": "MoMA skiller opptaksdager fra den ni måneder lange produksjonsperioden; AFI dokumenterer steder. Lag en fiktiv plan med kontinuitetspunkter.",
          "fr": "Le MoMA distingue jours de tournage et période de neuf mois ; l’AFI recense les lieux. Créez un calendrier fictif avec contrôles de raccord.",
          "pt": "O MoMA distingue dias de rodagem e período de nove meses; a AFI regista locais. Crie calendário fictício com pontos de continuidade."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "nightofthelivingdead-media",
        "area": "sound",
        "prompt": {
          "en": "How can fictional media broadcasts change a scene's perspective?",
          "nb": "Hvordan kan fiktive mediesendinger endre scenens perspektiv?",
          "fr": "Comment des émissions fictives modifient-elles le regard d’une scène ?",
          "pt": "Como podem emissões fictícias alterar a perspetiva de uma cena?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Distinguish screen-world reporting from external audience information",
              "nb": "Skill rapportering inne i filmverdenen fra ekstern publikumsinformasjon",
              "fr": "Distinguer reportage diégétique et information du spectateur",
              "pt": "Distinguir reportagem diegética de informação do espectador"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Label all fictional broadcasts as authentic archive material",
              "nb": "Merk alle fiktive sendinger som autentisk arkivmateriale",
              "fr": "Étiqueter toutes les émissions fictives comme archives authentiques",
              "pt": "Rotular todas as emissões fictícias como arquivo autêntico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use every broadcast to repeat the visible action",
              "nb": "Bruk hver sending til å gjenta den synlige handlingen",
              "fr": "Faire répéter l’action visible à chaque émission",
              "pt": "Usar cada emissão para repetir a ação visível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The dossier describes television inserts, rough sound and editorial movement; MoMA and AFI document sound and editing. Design an original fictional bulletin without claiming documentary status.",
          "nb": "Dossieret beskriver TV-innklipp, rå lyd og klipperytme; MoMA og AFI dokumenterer lyd og klipp. Lag en egen fiktiv melding uten å hevde dokumentarstatus.",
          "fr": "Le dossier décrit inserts télévisés, son brut et montage ; le MoMA et l’AFI documentent les métiers. Créez un bulletin fictif sans statut documentaire.",
          "pt": "O dossiê descreve inserções televisivas, som cru e montagem; o MoMA e a AFI documentam os ofícios. Crie um boletim fictício sem estatuto documental."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_2001_a_space_odyssey_1968",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Collaborative science fiction, optical effects and large-format image",
      "nb": "Felles science fiction-utvikling, optiske effekter og storformatbilde",
      "fr": "Science-fiction collaborative, effets optiques et grand format",
      "pt": "Ficção científica colaborativa, efeitos óticos e grande formato"
    },
    "sources": [
      {
        "id": "s0",
        "title": "2001: A Space Odyssey",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/23399-2001-ASPACEODYSSEY"
      },
      {
        "id": "s1",
        "title": "2001: A Space Odyssey film-registry essay",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/index-of-essays/"
      },
      {
        "id": "s2",
        "title": "Filming 2001: A Space Odyssey",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/filming-2001-a-space-odyssey"
      },
      {
        "id": "s3",
        "title": "Beyond the Frame: 2001: A Space Odyssey",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/beyond-the-frame-2001-a-space-odyssey-1968"
      }
    ],
    "questions": [
      {
        "id": "2001aspaceodyssey-development",
        "area": "research",
        "prompt": {
          "en": "How should a science-fiction concept develop across writing and design?",
          "nb": "Hvordan bør et science fiction-konsept utvikles mellom manus og design?",
          "fr": "Comment développer un concept de science-fiction entre écriture et décor ?",
          "pt": "Como desenvolver um conceito de ficção científica entre escrita e design?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Credit all development to a single author",
              "nb": "Krediter all utvikling til én forfatter",
              "fr": "Attribuer tout le développement à un auteur",
              "pt": "Atribuir todo o desenvolvimento a um autor"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Iterate story concepts with visual and technical feasibility notes",
              "nb": "Videreutvikle fortellingskonsepter med visuelle og tekniske gjennomføringsnotater",
              "fr": "Faire évoluer le récit avec notes de faisabilité visuelle et technique",
              "pt": "Iterar conceitos narrativos com notas de viabilidade visual e técnica"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Fix every visual detail before story development",
              "nb": "Fastsett alle visuelle detaljer før fortellingsutvikling",
              "fr": "Fixer tous les détails visuels avant le récit",
              "pt": "Fixar todos os detalhes visuais antes da história"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents Kubrick and Clarke's development and the production departments. Plan a fictional concept through collaborative iterations.",
          "nb": "AFI dokumenterer Kubrick og Clarkes utvikling og fagavdelingene. Planlegg et fiktivt konsept gjennom samarbeidende revisjoner.",
          "fr": "L’AFI documente le développement Kubrick-Clarke et les départements. Concevez un concept fictif par itérations collaboratives.",
          "pt": "A AFI documenta desenvolvimento Kubrick-Clarke e departamentos. Planeie conceito fictício através de iterações colaborativas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "2001aspaceodyssey-effects",
        "area": "camera",
        "prompt": {
          "en": "How can miniature footage match a fictional live-action image?",
          "nb": "Hvordan kan miniatyropptak passe sammen med et fiktivt realopptak?",
          "fr": "Comment raccorder des miniatures à une image en prise de vues réelle ?",
          "pt": "Como ligar imagens de miniaturas a uma imagem de ação real fictícia?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test scale, perspective and consistent image movement",
              "nb": "Prøv skala, perspektiv og konsekvent bildebevegelse",
              "fr": "Tester échelle, perspective et mouvement cohérent",
              "pt": "Testar escala, perspetiva e movimento coerente"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all miniature images match without testing",
              "nb": "Anta at alle miniatyrbilder passer uten testing",
              "fr": "Supposer que toutes les miniatures raccordent sans essais",
              "pt": "Supor que todas as miniaturas coincidem sem testes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the visual relationship between effects and live action",
              "nb": "Ignorer forholdet mellom effekter og realopptak",
              "fr": "Ignorer le rapport entre effets et prise de vues réelle",
              "pt": "Ignorar relação entre efeitos e ação real"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC documents repeatable movement, miniature photography and optical work. Design a small fictional visual-effects test without asserting an exact historical workflow.",
          "nb": "ASC dokumenterer gjentakbar bevegelse, miniatyrfoto og optisk arbeid. Lag en liten fiktiv effekttest uten å påstå en eksakt historisk arbeidsflyt.",
          "fr": "L’ASC documente mouvements répétables, miniatures et optique. Créez un petit test fictif sans prétendre reproduire le processus historique.",
          "pt": "A ASC documenta movimento repetível, miniaturas e trabalho ótico. Crie um pequeno teste fictício sem alegar reproduzir o processo histórico."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "2001aspaceodyssey-format",
        "area": "camera",
        "prompt": {
          "en": "How should a large-format image influence set preparation?",
          "nb": "Hvordan bør et storformatbilde påvirke forberedelsen av kulisser?",
          "fr": "Comment le grand format influence-t-il la préparation des décors ?",
          "pt": "Como deve o grande formato influenciar preparação dos cenários?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the format hides every unfinished detail",
              "nb": "Anta at formatet skjuler alle uferdige detaljer",
              "fr": "Supposer que le format cache tous les détails inachevés",
              "pt": "Supor que o formato esconde todos os detalhes inacabados"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Select the presentation format after ignoring photography tests",
              "nb": "Velg visningsformat etter å ha ignorert fototester",
              "fr": "Choisir le format de diffusion sans considérer les essais photo",
              "pt": "Escolher formato de exibição ignorando testes de fotografia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test visible detail and exposure with the design department",
              "nb": "Prøv synlige detaljer og eksponering sammen med scenografiavdelingen",
              "fr": "Tester détail visible et exposition avec les décorateurs",
              "pt": "Testar detalhe visível e exposição com o departamento de design"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records the format and ASC describes exposure tests and practical illumination. Coordinate design and camera checks for an original set.",
          "nb": "AFI dokumenterer formatet og ASC beskriver eksponeringstester og praktisk belysning. Samordne design- og kamerakontroll for en egen kulisse.",
          "fr": "L’AFI recense le format et l’ASC les essais d’exposition et l’éclairage pratique. Coordonnez les essais pour un décor original.",
          "pt": "A AFI regista o formato e a ASC descreve testes de exposição e iluminação prática. Coordene testes de design e câmara para cenário original."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_godfather_1972",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Adaptation and studio negotiation, period palette and musical motifs",
      "nb": "Adaptasjon og studioforhandling, tidsriktig palett og musikalske motiver",
      "fr": "Adaptation et négociation, palette d’époque et motifs musicaux",
      "pt": "Adaptação e negociação, paleta de época e motivos musicais"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Godfather",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/54023-THE-GODFATHER"
      },
      {
        "id": "s1",
        "title": "The Godfather (1972)",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      },
      {
        "id": "s2",
        "title": "On Location with The Godfather: A Discussion with Gordon Willis",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/on-loacatiom-with-the-godfather-a-discussion-with-gordon-willis"
      },
      {
        "id": "s3",
        "title": "Wrap Shot: The Godfather",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/wrap-shot-the-godfather"
      }
    ],
    "questions": [
      {
        "id": "thegodfather-casting",
        "area": "research",
        "prompt": {
          "en": "How can casting discussions preserve adaptation priorities?",
          "nb": "Hvordan kan rollebesetningsdiskusjoner bevare adaptasjonens prioriteringer?",
          "fr": "Comment les discussions de casting préservent-elles les priorités de l’adaptation ?",
          "pt": "Como podem discussões de elenco preservar prioridades da adaptação?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare character needs, audition evidence and producer constraints",
              "nb": "Sammenlign figurbehov, prøvespill og produsentkrav",
              "fr": "Comparer besoins des personnages, auditions et contraintes des producteurs",
              "pt": "Comparar necessidades das personagens, audições e restrições dos produtores"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Select every performer solely by current star status",
              "nb": "Velg alle skuespillere bare etter stjernestatus",
              "fr": "Choisir chaque interprète uniquement selon sa célébrité",
              "pt": "Escolher cada intérprete apenas pela fama atual"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent historical studio contract terms",
              "nb": "Finn på historiske studiokontraktsvilkår",
              "fr": "Inventer des clauses historiques de studio",
              "pt": "Inventar cláusulas históricas de estúdio"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents the Puzo adaptation and casting disputes. Use a fictional casting brief to distinguish creative priorities from documented history.",
          "nb": "AFI dokumenterer Puzo-adaptasjonen og rollebesetningskonfliktene. Bruk en fiktiv castingbrief for å skille kreative prioriteringer fra dokumentert historie.",
          "fr": "L’AFI documente l’adaptation de Puzo et les conflits de casting. Utilisez une fiche fictive pour distinguer création et histoire documentée.",
          "pt": "A AFI documenta adaptação de Puzo e conflitos de elenco. Use uma ficha fictícia para distinguir prioridades criativas da história documentada."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "thegodfather-palette",
        "area": "camera",
        "prompt": {
          "en": "How can a restrained period palette support dramatic intimacy?",
          "nb": "Hvordan kan en dempet tidspalett støtte dramatisk intimitet?",
          "fr": "Comment une palette d’époque sobre soutient-elle l’intimité dramatique ?",
          "pt": "Como pode uma paleta de época contida apoiar intimidade dramática?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Brighten every shadow to the same level",
              "nb": "Lys opp alle skygger til samme nivå",
              "fr": "Éclaircir toutes les ombres au même niveau",
              "pt": "Clarear todas as sombras ao mesmo nível"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the restored image reveals exact original lighting ratios",
              "nb": "Anta at restaurert bilde avslører eksakte originale lysforhold",
              "fr": "Supposer que l’image restaurée révèle les rapports lumineux exacts",
              "pt": "Supor que a imagem restaurada revela relações de luz exatas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate muted design colours and test facial exposure",
              "nb": "Samordne dempede designfarger og prøv ansiktseksponering",
              "fr": "Coordonner couleurs sobres et tester l’exposition des visages",
              "pt": "Coordenar cores contidas e testar exposição facial"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Willis describes the period palette and exposure choices in ASC; the Registry notes deliberate darkness. Test an original portrait and record its limits.",
          "nb": "Willis beskriver tidspalett og eksponeringsvalg i ASC; filmregisteret omtaler bevisst mørke. Prøv et eget portrett og registrer begrensningene.",
          "fr": "Willis décrit palette et exposition dans l’ASC ; le registre note l’obscurité voulue. Testez un portrait original et notez ses limites.",
          "pt": "Willis descreve paleta e exposição na ASC; o registo nota escuridão deliberada. Teste um retrato original e registe limites."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "thegodfather-music",
        "area": "sound",
        "prompt": {
          "en": "How can recurring music link family scenes across a narrative?",
          "nb": "Hvordan kan gjentakende musikk knytte familiescener sammen i fortellingen?",
          "fr": "Comment une musique récurrente relie-t-elle des scènes familiales ?",
          "pt": "Como pode música recorrente ligar cenas familiares na narrativa?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute musical decisions to cinematography alone",
              "nb": "Tilskriv musikalske valg bare filmfotografiet",
              "fr": "Attribuer les choix musicaux à la seule photographie",
              "pt": "Atribuir escolhas musicais apenas à fotografia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Vary an original theme according to scene perspective",
              "nb": "Varier et eget tema etter scenens perspektiv",
              "fr": "Varier un thème original selon le point de vue de la scène",
              "pt": "Variar um tema original segundo a perspetiva da cena"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Repeat an identical cue regardless of dramatic context",
              "nb": "Gjenta identisk musikk uansett dramatisk kontekst",
              "fr": "Répéter un motif identique quel que soit le contexte",
              "pt": "Repetir motivo idêntico independentemente do contexto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Registry identifies Rota's recurring melancholy score and AFI records separate music credits. Compare original thematic variations without copying the film's music.",
          "nb": "Filmregisteret identifiserer Rotas tilbakevendende melankolske musikk og AFI dokumenterer musikkreditering. Sammenlign egne temavariasjoner uten å kopiere musikken.",
          "fr": "Le registre identifie les motifs mélancoliques de Rota et l’AFI les crédits musicaux. Comparez des variations originales sans copier la musique.",
          "pt": "O registo identifica motivos melancólicos de Rota e a AFI os créditos musicais. Compare variações originais sem copiar a música."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_touki_bouki_1973",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Associative montage, infrastructure and conflicting source credits",
      "nb": "Assosiativ montasje, infrastruktur og motstridende kildekreditering",
      "fr": "Montage associatif, infrastructure et crédits divergents",
      "pt": "Montagem associativa, infraestrutura e créditos divergentes"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Touki bouki",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/28412-touki-bouki"
      },
      {
        "id": "s1",
        "title": "Touki bouki: Mambéty and Modernity",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/2988-touki-bouki-mambety-and-modernity"
      },
      {
        "id": "s2",
        "title": "Touki Bouki",
        "publisher": "The Film Foundation – World Cinema Project",
        "url": "https://www.film-foundation.org/world-cinema?page=5&sortBy=country&sortOrder=1"
      },
      {
        "id": "s3",
        "title": "Touki Bouki (1973)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/9a363fae-8f64-54e3-88f8-b07a06d2d1dd/touki-bouki"
      },
      {
        "id": "s4",
        "title": "Touki Bouki",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/touki-bouki/"
      }
    ],
    "questions": [
      {
        "id": "toukibouki-montage",
        "area": "sound",
        "prompt": {
          "en": "How can sound and image create an associative transition?",
          "nb": "Hvordan kan lyd og bilde skape en assosiativ overgang?",
          "fr": "Comment le son et l’image créent-ils une transition associative ?",
          "pt": "Como podem som e imagem criar uma transição associativa?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Require every sound to match its visible source",
              "nb": "Krev at all lyd samsvarer med synlig lydkilde",
              "fr": "Exiger que chaque son corresponde à sa source visible",
              "pt": "Exigir que todo o som corresponda à fonte visível"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Explain each association with a literal caption",
              "nb": "Forklar hver assosiasjon med en bokstavelig tekstplakat",
              "fr": "Expliquer chaque association par un carton littéral",
              "pt": "Explicar cada associação com legenda literal"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test recurring sounds against contrasting fictional images",
              "nb": "Prøv tilbakevendende lyder mot kontrasterende fiktive bilder",
              "fr": "Tester des sons récurrents sur des images fictives contrastées",
              "pt": "Testar sons recorrentes com imagens fictícias contrastantes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's essay describes sound-image disjunction and associative editing in Senegalese modernism. Make a new montage with original or cleared sounds.",
          "nb": "Criterion-essayet beskriver lyd-bilde-brudd og assosiativ klipping i senegalesisk modernisme. Lag en ny montasje med egne eller klarerte lyder.",
          "fr": "L’essai Criterion décrit disjonction son-image et montage associatif dans le modernisme sénégalais. Créez un montage avec sons originaux ou autorisés.",
          "pt": "O ensaio Criterion descreve disjunção som-imagem e montagem associativa no modernismo senegalês. Crie montagem com sons originais ou autorizados."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "toukibouki-infrastructure",
        "area": "research",
        "prompt": {
          "en": "How should a small production plan for external laboratory dependence?",
          "nb": "Hvordan bør en liten produksjon planlegge avhengighet av eksterne laboratorier?",
          "fr": "Comment une petite production prévoit-elle sa dépendance aux laboratoires externes ?",
          "pt": "Como deve uma pequena produção planear dependência de laboratórios externos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat infrastructure constraints as proof of derivative style",
              "nb": "Behandle infrastrukturbegrensninger som bevis på etterlignet stil",
              "fr": "Traiter les contraintes techniques comme preuve de style dérivé",
              "pt": "Tratar limitações técnicas como prova de estilo derivado"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Map processing access, transport and postproduction dependencies",
              "nb": "Kartlegg tilgang til fremkalling, transport og etterarbeidsavhengigheter",
              "fr": "Cartographier accès au traitement, transport et dépendances de postproduction",
              "pt": "Mapear acesso a processamento, transporte e dependências de pós-produção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume local shooting guarantees local processing",
              "nb": "Anta at lokale opptak garanterer lokal fremkalling",
              "fr": "Supposer que le tournage local garantit le traitement local",
              "pt": "Supor que rodagem local garante processamento local"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents French infrastructure dependence and Film Foundation records GTC Paris. Plan fictional logistics without reducing Senegalese authorship to imported influence.",
          "nb": "Criterion dokumenterer avhengighet av fransk infrastruktur og Film Foundation registrerer GTC Paris. Planlegg fiktiv logistikk uten å redusere senegalesisk forfatterskap til importert påvirkning.",
          "fr": "Criterion documente la dépendance française et la Film Foundation GTC Paris. Planifiez une logistique fictive sans réduire l’auteur sénégalais à une influence importée.",
          "pt": "A Criterion documenta dependência francesa e a Film Foundation GTC Paris. Planeie logística fictícia sem reduzir autoria senegalesa a influência importada."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "toukibouki-credits",
        "area": "research",
        "prompt": {
          "en": "How should conflicting cinematography credits be recorded?",
          "nb": "Hvordan bør motstridende fotografkrediteringer registreres?",
          "fr": "Comment consigner des crédits de photographie divergents ?",
          "pt": "Como registar créditos de fotografia divergentes?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Preserve each institution's attribution with its provenance",
              "nb": "Bevar hver institusjons kreditering med proveniens",
              "fr": "Conserver l’attribution de chaque institution et sa provenance",
              "pt": "Preservar atribuição de cada instituição e proveniência"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose one credit and silently erase the others",
              "nb": "Velg én kreditering og slett de andre i stillhet",
              "fr": "Choisir un crédit et effacer les autres sans le signaler",
              "pt": "Escolher um crédito e apagar silenciosamente os restantes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer an exact division of shooting duties from names alone",
              "nb": "Utled en eksakt opptaksfordeling bare fra navn",
              "fr": "Déduire une répartition précise du tournage des seuls noms",
              "pt": "Deduzir divisão exata da rodagem apenas pelos nomes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion names Bracher, Cannes names Sow and Film Foundation lists both. Retain the disagreement rather than inventing a division of labor.",
          "nb": "Criterion navngir Bracher, Cannes navngir Sow og Film Foundation oppgir begge. Bevar uenigheten fremfor å dikte en arbeidsdeling.",
          "fr": "Criterion nomme Bracher, Cannes nomme Sow et la Film Foundation les deux. Conservez la divergence sans inventer une répartition.",
          "pt": "A Criterion nomeia Bracher, Cannes nomeia Sow e a Film Foundation ambos. Preserve a divergência sem inventar divisão do trabalho."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_aguirre_the_wrath_of_god_1972",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Location logistics, landscape composition and musical atmosphere",
      "nb": "Stedslogistikk, landskapskomposisjon og musikalsk atmosfære",
      "fr": "Logistique en extérieur, composition paysagère et atmosphère musicale",
      "pt": "Logística em exteriores, composição da paisagem e atmosfera musical"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Aguirre, Wrath of God",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/9fa0c60c-1f79-5d0c-923c-396a6dfa317d/aguirre-wrath-of-god"
      },
      {
        "id": "s1",
        "title": "Great beginnings: Aguirre, Wrath of God",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/great-beginnings-aguirre-wrath-god"
      },
      {
        "id": "s2",
        "title": "On location with Werner Herzog",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/location-werner-herzog"
      },
      {
        "id": "s3",
        "title": "Aguirre, der Zorn Gottes",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/movie/aguirre-der-zorn-gottes_ea43d4a704605006e03053d50b37753d"
      }
    ],
    "questions": [
      {
        "id": "aguirrethewrathofgod-logistics",
        "area": "research",
        "prompt": {
          "en": "How should a small crew plan a remote landscape shoot?",
          "nb": "Hvordan bør et lite team planlegge opptak i et avsides landskap?",
          "fr": "Comment une petite équipe prépare-t-elle un tournage isolé ?",
          "pt": "Como deve uma pequena equipa preparar uma rodagem remota?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan safe access, weather contingencies and local collaboration",
              "nb": "Planlegg trygg adkomst, værreserver og lokalt samarbeid",
              "fr": "Prévoir accès sûr, aléas météo et collaboration locale",
              "pt": "Planear acesso seguro, contingências meteorológicas e colaboração local"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume transport and weather never affect the schedule",
              "nb": "Anta at transport og vær aldri påvirker planen",
              "fr": "Supposer que transport et météo ne modifient jamais le calendrier",
              "pt": "Supor que transporte e clima nunca alteram o calendário"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent historical expenses from the landscape alone",
              "nb": "Dikt opp historiske utgifter fra landskapet alene",
              "fr": "Inventer les dépenses historiques à partir du paysage",
              "pt": "Inventar despesas históricas apenas pela paisagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI documents the small crew and real Peruvian locations; filmportal identifies the production. Develop a safe fictional schedule rather than reenacting historical risks.",
          "nb": "BFI dokumenterer det lille teamet og virkelige steder i Peru; filmportal identifiserer produksjonen. Lag en trygg fiktiv plan fremfor å gjenskape historisk risiko.",
          "fr": "Le BFI documente la petite équipe et les lieux péruviens ; filmportal identifie la production. Créez un calendrier fictif sûr sans reproduire les risques historiques.",
          "pt": "O BFI documenta a pequena equipa e os locais peruanos; filmportal identifica a produção. Crie um calendário fictício seguro sem reproduzir riscos históricos."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "aguirrethewrathofgod-landscape",
        "area": "camera",
        "prompt": {
          "en": "How can a landscape establish the scale of human ambition?",
          "nb": "Hvordan kan landskap etablere omfanget av menneskelig ambisjon?",
          "fr": "Comment le paysage traduit-il l’échelle de l’ambition humaine ?",
          "pt": "Como pode a paisagem traduzir a escala da ambição humana?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use only isolated faces without spatial context",
              "nb": "Bruk bare isolerte ansikter uten romlig kontekst",
              "fr": "Utiliser uniquement des visages isolés sans contexte spatial",
              "pt": "Usar apenas rostos isolados sem contexto espacial"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every landscape as an artificial matte",
              "nb": "Behandle hvert landskap som et kunstig bakgrunnsbilde",
              "fr": "Traiter tout paysage comme un cache artificiel",
              "pt": "Tratar toda paisagem como fundo artificial"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Contrast distant figures with increasingly intimate framing",
              "nb": "Sett fjerne figurer opp mot stadig tettere utsnitt",
              "fr": "Opposer figures lointaines et cadrages de plus en plus intimes",
              "pt": "Contrastar figuras distantes com enquadramentos cada vez mais íntimos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI analyses the opening's shift from landscape mass to human detail. Test a comparable spatial progression in original footage without duplicating the sequence.",
          "nb": "BFI analyserer åpningens skifte fra landskapsmasse til menneskelige detaljer. Prøv en tilsvarende romlig utvikling i egne opptak uten å kopiere sekvensen.",
          "fr": "Le BFI analyse le passage du paysage aux détails humains. Testez une progression spatiale comparable dans des images originales sans copier la séquence.",
          "pt": "O BFI analisa a passagem da paisagem ao detalhe humano. Teste uma progressão espacial semelhante em imagens próprias sem copiar a sequência."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "aguirrethewrathofgod-atmosphere",
        "area": "sound",
        "prompt": {
          "en": "How can music complicate the meaning of a landscape?",
          "nb": "Hvordan kan musikk gjøre landskapets betydning mer sammensatt?",
          "fr": "Comment la musique complexifie-t-elle le sens du paysage ?",
          "pt": "Como pode a música tornar mais complexo o significado da paisagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute the score to the camera department",
              "nb": "Tilskriv musikken kameraavdelingen",
              "fr": "Attribuer la musique au département image",
              "pt": "Atribuir a música ao departamento de imagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare an original atmospheric cue with natural ambience",
              "nb": "Sammenlign et eget atmosfærisk lydtema med naturlig atmosfærelyd",
              "fr": "Comparer un motif atmosphérique original à l’ambiance naturelle",
              "pt": "Comparar um motivo atmosférico original com som ambiente natural"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use music only to duplicate visible movement",
              "nb": "Bruk musikk bare til å gjenta synlig bevegelse",
              "fr": "Utiliser la musique uniquement pour doubler le mouvement visible",
              "pt": "Usar música apenas para duplicar movimento visível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Filmportal credits Popol Vuh and separate sound and editing roles. Explore an original cue as interpretation rather than historical reconstruction.",
          "nb": "Filmportal krediterer Popol Vuh og separate lyd- og klipperoller. Utforsk et eget lydtema som tolkning fremfor historisk rekonstruksjon.",
          "fr": "Filmportal crédite Popol Vuh et distingue son et montage. Explorez un motif original comme interprétation plutôt que reconstitution historique.",
          "pt": "Filmportal credita Popol Vuh e distingue som e montagem. Explore um motivo original como interpretação em vez de reconstrução histórica."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_mean_streets_1973",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Personal screenplay, location continuity and popular music",
      "nb": "Personlig manus, stedskontinuitet og populærmusikk",
      "fr": "Scénario personnel, continuité des lieux et musique populaire",
      "pt": "Argumento pessoal, continuidade de locais e música popular"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Mean Streets",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/55020-MEAN-STREETS"
      },
      {
        "id": "s1",
        "title": "Mean Streets",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/616bf2e0-be08-578b-8493-4de6ca709503/mean-streets"
      },
      {
        "id": "s2",
        "title": "Jukebox and Johnny Boy",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/jukebox-johnny-boy"
      },
      {
        "id": "s3",
        "title": "Where to begin with Martin Scorsese",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/where-begin-with-martin-scorsese"
      }
    ],
    "questions": [
      {
        "id": "meanstreets-screenplay",
        "area": "research",
        "prompt": {
          "en": "How can autobiographical observation inform fictional characters?",
          "nb": "Hvordan kan selvbiografisk observasjon forme fiktive figurer?",
          "fr": "Comment l’observation autobiographique nourrit-elle des personnages fictifs ?",
          "pt": "Como pode a observação autobiográfica informar personagens fictícias?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every fictional event as a verified personal memory",
              "nb": "Behandle hver fiktiv hendelse som et verifisert personlig minne",
              "fr": "Traiter chaque événement fictif comme un souvenir vérifié",
              "pt": "Tratar cada acontecimento fictício como memória verificada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase the co-writer from the development record",
              "nb": "Fjern medforfatteren fra utviklingshistorikken",
              "fr": "Effacer le coscénariste du dossier de développement",
              "pt": "Apagar o coargumentista do registo de desenvolvimento"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Transform observed social relationships into original dramatic scenes",
              "nb": "Omform observerte sosiale relasjoner til egne dramatiske scener",
              "fr": "Transformer les relations sociales observées en scènes originales",
              "pt": "Transformar relações sociais observadas em cenas dramáticas originais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI situates the film in Scorsese's personal cinema and credits Mardik Martin; AFI documents long development. Distinguish inspiration from factual biography.",
          "nb": "BFI plasserer filmen i Scorseses personlige filmkunst og krediterer Mardik Martin; AFI dokumenterer lang utvikling. Skill inspirasjon fra faktisk biografi.",
          "fr": "Le BFI situe le film dans le cinéma personnel de Scorsese et crédite Mardik Martin ; l’AFI documente le développement. Distinguez inspiration et biographie factuelle.",
          "pt": "O BFI situa o filme no cinema pessoal de Scorsese e credita Mardik Martin; a AFI documenta desenvolvimento. Distinga inspiração de biografia factual."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s3"
        ]
      },
      {
        "id": "meanstreets-locations",
        "area": "camera",
        "prompt": {
          "en": "How can footage from different cities share a coherent setting?",
          "nb": "Hvordan kan opptak fra ulike byer skape ett sammenhengende miljø?",
          "fr": "Comment des images de villes différentes forment-elles un lieu cohérent ?",
          "pt": "Como podem imagens de cidades diferentes formar um espaço coerente?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore differences in entrances and directions",
              "nb": "Ignorer forskjeller i innganger og retninger",
              "fr": "Ignorer les différences d’entrées et de directions",
              "pt": "Ignorar diferenças de entradas e direções"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Match architectural details, light and screen geography",
              "nb": "Samordne arkitekturdetaljer, lys og filmens romgeografi",
              "fr": "Raccorder détails architecturaux, lumière et géographie filmique",
              "pt": "Conciliar detalhes arquitetónicos, luz e geografia fílmica"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all photographed streets belong to the story city",
              "nb": "Anta at alle fotograferte gater ligger i fortellingens by",
              "fr": "Supposer que toutes les rues filmées appartiennent à la ville du récit",
              "pt": "Supor que todas as ruas filmadas pertencem à cidade da história"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records production in New York and Los Angeles. Plan fictional location continuity without inventing exact historical scene assignments.",
          "nb": "AFI dokumenterer produksjon i New York og Los Angeles. Planlegg fiktiv stedskontinuitet uten å dikte opp historisk scenefordeling.",
          "fr": "L’AFI documente New York et Los Angeles. Planifiez des raccords fictifs sans inventer l’attribution historique des scènes.",
          "pt": "A AFI documenta Nova Iorque e Los Angeles. Planeie continuidade fictícia sem inventar a atribuição histórica das cenas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "meanstreets-jukebox",
        "area": "sound",
        "prompt": {
          "en": "How can popular music shape a character's entrance?",
          "nb": "Hvordan kan populærmusikk forme en figurs entré?",
          "fr": "Comment la musique populaire façonne-t-elle l’entrée d’un personnage ?",
          "pt": "Como pode a música popular moldar a entrada de uma personagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test cleared musical cues against gesture and editorial rhythm",
              "nb": "Prøv klarerte musikktemaer mot gestikk og klipperytme",
              "fr": "Tester des motifs musicaux autorisés avec gestes et rythme du montage",
              "pt": "Testar motivos musicais autorizados com gestos e ritmo de montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Select songs only by their chart position",
              "nb": "Velg sanger bare etter listeplassering",
              "fr": "Choisir les chansons uniquement selon leur classement",
              "pt": "Escolher canções apenas pela posição nas tabelas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a recorded song requires no rights clearance",
              "nb": "Anta at en innspilt sang ikke trenger rettighetsklarering",
              "fr": "Supposer qu’un enregistrement ne nécessite aucun droit",
              "pt": "Supor que uma gravação não requer autorização"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI analyses popular music as a structural element and AFI notes the absence of a conventional score. Compare original or licensed cues rather than copying the soundtrack.",
          "nb": "BFI analyserer populærmusikk som strukturelt element og AFI omtaler fravær av tradisjonell filmmusikk. Sammenlign egne eller lisensierte lydtemaer fremfor å kopiere lydsporet.",
          "fr": "Le BFI analyse la musique populaire comme structure et l’AFI note l’absence de partition classique. Comparez des motifs originaux ou autorisés sans copier la bande sonore.",
          "pt": "O BFI analisa a música popular como estrutura e a AFI regista ausência de partitura convencional. Compare motivos originais ou licenciados sem copiar a banda sonora."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_spirit_of_the_beehive_1973",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Child viewpoint, historical ellipsis and poetic sound",
      "nb": "Barneperspektiv, historiske ellipser og poetisk lyd",
      "fr": "Regard enfantin, ellipse historique et son poétique",
      "pt": "Olhar infantil, elipse histórica e som poético"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Spirit of the Beehive",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/367-the-spirit-of-the-beehive"
      },
      {
        "id": "s1",
        "title": "The Spirit of the Beehive",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/351aef87-fadc-521d-aada-811575f8051d/the-spirit-of-the-beehive"
      },
      {
        "id": "s2",
        "title": "Where to begin with Víctor Erice",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/where-begin-with-victor-erice"
      },
      {
        "id": "s3",
        "title": "The return of Spirit of the Beehive director Víctor Erice",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2024/apr/01/spirit-of-the-beehive-director-victor-erice-close-your-eyes"
      }
    ],
    "questions": [
      {
        "id": "thespiritofthebeehive-child",
        "area": "research",
        "prompt": {
          "en": "How should a child-centred scene be rehearsed responsibly?",
          "nb": "Hvordan bør en scene med barneperspektiv øves inn ansvarlig?",
          "fr": "Comment répéter de manière responsable une scène centrée sur un enfant ?",
          "pt": "Como ensaiar responsavelmente uma cena centrada numa criança?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the young performer's emotional comfort",
              "nb": "Ignorer den unge skuespillerens følelsesmessige trygghet",
              "fr": "Ignorer le confort émotionnel du jeune interprète",
              "pt": "Ignorar o conforto emocional da criança intérprete"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use age-appropriate explanation and supported performance choices",
              "nb": "Bruk alderstilpasset forklaring og trygge valg i skuespillet",
              "fr": "Employer des explications adaptées à l’âge et un jeu accompagné",
              "pt": "Usar explicações adequadas à idade e interpretação acompanhada"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume confusion between fiction and reality improves every take",
              "nb": "Anta at forvirring mellom fiksjon og virkelighet forbedrer hvert opptak",
              "fr": "Supposer que confondre fiction et réalité améliore chaque prise",
              "pt": "Supor que confundir ficção e realidade melhora cada tomada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Torrent's recollections document childhood casting and emotional difficulty; Criterion preserves cast interviews. Design supportive rehearsal rather than reproducing distress.",
          "nb": "Torrents erindringer dokumenterer barnecasting og følelsesmessige utfordringer; Criterion bevarer intervjuer. Utform trygg øving fremfor å gjenskape ubehag.",
          "fr": "Torrent évoque son casting enfant et des difficultés émotionnelles ; Criterion conserve des entretiens. Concevez une répétition accompagnée sans reproduire la détresse.",
          "pt": "Torrent recorda o elenco infantil e dificuldades emocionais; a Criterion preserva entrevistas. Crie um ensaio apoiado sem reproduzir sofrimento."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "thespiritofthebeehive-history",
        "area": "research",
        "prompt": {
          "en": "How can historical context emerge without explanatory dialogue?",
          "nb": "Hvordan kan historisk kontekst tre frem uten forklarende dialog?",
          "fr": "Comment faire émerger le contexte historique sans dialogue explicatif ?",
          "pt": "Como pode o contexto histórico emergir sem diálogo explicativo?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Research period details and use purposeful narrative ellipses",
              "nb": "Undersøk tidsdetaljer og bruk målrettede fortellingsellipser",
              "fr": "Rechercher les détails d’époque et employer des ellipses choisies",
              "pt": "Pesquisar detalhes de época e usar elipses narrativas deliberadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the represented year as the production year",
              "nb": "Behandle handlingens år som produksjonsåret",
              "fr": "Confondre l’année représentée et celle du tournage",
              "pt": "Confundir o ano representado com o ano da rodagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Explain every ambiguity through a history lecture",
              "nb": "Forklar hver tvetydighet med en historietime",
              "fr": "Expliquer chaque ambiguïté par un cours d’histoire",
              "pt": "Explicar cada ambiguidade com uma aula de história"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI distinguishes the 1940 setting from late-Franco production and discusses gaps and silences. Build a new scene with researched context and controlled omission.",
          "nb": "BFI skiller handlingen i 1940 fra produksjonen under senfrankismen og drøfter hull og stillhet. Lag en ny scene med historisk research og bevisst utelatelse.",
          "fr": "Le BFI distingue le cadre de 1940 du tournage sous le franquisme tardif et analyse les silences. Créez une scène documentée avec ellipses maîtrisées.",
          "pt": "O BFI distingue o cenário de 1940 da produção no franquismo tardio e analisa silêncios. Crie uma cena pesquisada com omissões controladas."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "thespiritofthebeehive-silence",
        "area": "sound",
        "prompt": {
          "en": "How can silence and distant sound guide a child's attention?",
          "nb": "Hvordan kan stillhet og fjern lyd styre et barns oppmerksomhet?",
          "fr": "Comment silence et son lointain orientent-ils l’attention d’un enfant ?",
          "pt": "Como podem silêncio e som distante orientar a atenção de uma criança?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Fill each pause with explanatory speech",
              "nb": "Fyll hver pause med forklarende tale",
              "fr": "Remplir chaque pause de paroles explicatives",
              "pt": "Preencher cada pausa com fala explicativa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Keep every background sound at maximum prominence",
              "nb": "Hold alle bakgrunnslyder maksimalt fremtredende",
              "fr": "Donner une présence maximale à tous les sons de fond",
              "pt": "Dar presença máxima a todos os sons de fundo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use sparse original ambience and selective sound-image contrast",
              "nb": "Bruk sparsom egen atmosfærelyd og selektiv lyd-bilde-kontrast",
              "fr": "Employer une ambiance originale discrète et des contrastes son-image",
              "pt": "Usar ambiente original discreto e contraste seletivo entre som e imagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes restrained sound-image juxtaposition and childhood spectatorship. Compare sparse and explanatory versions of an original scene.",
          "nb": "BFI beskriver tilbakeholden lyd-bilde-sammenstilling og barnets tilskuerperspektiv. Sammenlign sparsomme og forklarende versjoner av en egen scene.",
          "fr": "Le BFI décrit la juxtaposition sobre du son et de l’image et le regard enfantin. Comparez versions sobres et explicatives d’une scène originale.",
          "pt": "O BFI descreve justaposição contida de som e imagem e olhar infantil. Compare versões contidas e explicativas de uma cena original."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_ali_fear_eats_the_soul_1974",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Social melodrama, spatial exclusion and compressed production",
      "nb": "Sosialt melodrama, romlig utestenging og komprimert produksjon",
      "fr": "Mélodrame social, exclusion spatiale et tournage condensé",
      "pt": "Melodrama social, exclusão espacial e rodagem condensada"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Ali: Fear Eats the Soul",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/152-ali-fear-eats-the-soul"
      },
      {
        "id": "s1",
        "title": "Ali: Fear Eats the Soul: One Love, Two Oppressions",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/1067-ali-fear-eats-the-soul-one-love-two-oppressions"
      },
      {
        "id": "s2",
        "title": "6 reasons to watch Fear Eats the Soul",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/6-reasons-watch-fear-eats-soul"
      },
      {
        "id": "s3",
        "title": "Angst essen Seele auf (Ali: Fear Eats the Soul)",
        "publisher": "Rainer Werner Fassbinder Foundation",
        "url": "https://www.fassbinderfoundation.de/movies/angst-essen-seele-auf/?lang=en"
      }
    ],
    "questions": [
      {
        "id": "alifeareatsthesoul-space",
        "area": "camera",
        "prompt": {
          "en": "How can framing make social exclusion visible?",
          "nb": "Hvordan kan utsnitt synliggjøre sosial utestenging?",
          "fr": "Comment le cadrage rend-il visible l’exclusion sociale ?",
          "pt": "Como pode o enquadramento tornar visível a exclusão social?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Use doorways, distance and group placement to express separation",
              "nb": "Bruk døråpninger, avstand og gruppeplassering til å uttrykke adskillelse",
              "fr": "Utiliser portes, distance et placement des groupes pour exprimer la séparation",
              "pt": "Usar portas, distância e posição dos grupos para exprimir separação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Frame each person without any shared spatial relationship",
              "nb": "Ram inn hver person uten felles romlig relasjon",
              "fr": "Cadrer chacun sans relation spatiale commune",
              "pt": "Enquadrar cada pessoa sem relação espacial comum"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace all visual exclusion with explanatory captions",
              "nb": "Erstatt all visuell utestenging med forklarende tekster",
              "fr": "Remplacer toute exclusion visuelle par des cartons explicatifs",
              "pt": "Substituir toda exclusão visual por legendas explicativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's essay analyses stillness and spatialized oppression. Test an original non-discriminatory rehearsal exercise showing social distance.",
          "nb": "Criterion-essayet analyserer stillhet i bildet og romlig undertrykking. Prøv en egen, ikke-diskriminerende øvelse som viser sosial avstand.",
          "fr": "L’essai Criterion analyse immobilité et oppression spatiale. Testez un exercice original non discriminatoire montrant la distance sociale.",
          "pt": "O ensaio Criterion analisa imobilidade e opressão espacial. Teste um exercício original não discriminatório que mostre distância social."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "alifeareatsthesoul-schedule",
        "area": "research",
        "prompt": {
          "en": "How can a compressed schedule preserve deliberate staging?",
          "nb": "Hvordan kan en komprimert opptaksplan bevare gjennomtenkt iscenesettelse?",
          "fr": "Comment un calendrier condensé préserve-t-il une mise en scène réfléchie ?",
          "pt": "Como pode um calendário condensado preservar encenação deliberada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all preparation because the shoot is short",
              "nb": "Fjern alle forberedelser fordi opptaksperioden er kort",
              "fr": "Supprimer toute préparation parce que le tournage est court",
              "pt": "Eliminar toda preparação porque a rodagem é curta"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the historical schedule as a universal rule",
              "nb": "Behandle den historiske planen som en universell regel",
              "fr": "Traiter le calendrier historique comme une règle universelle",
              "pt": "Tratar o calendário histórico como regra universal"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Prioritize rehearsal, group compatible setups and track continuity",
              "nb": "Prioriter øving, grupper kompatible oppsett og følg kontinuitet",
              "fr": "Prioriser répétitions, regrouper dispositifs compatibles et suivre les raccords",
              "pt": "Priorizar ensaios, agrupar configurações compatíveis e seguir continuidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI documents the fifteen-day shoot and the foundation records the craft team. Design a realistic fictional plan, not a mandatory historical schedule.",
          "nb": "BFI dokumenterer femten dagers opptak og stiftelsen registrerer fagteamet. Lag en realistisk fiktiv plan, ikke en obligatorisk historisk tidsplan.",
          "fr": "Le BFI documente quinze jours de tournage et la fondation les métiers. Créez un calendrier fictif réaliste plutôt qu’une règle historique.",
          "pt": "O BFI documenta quinze dias de rodagem e a fundação os departamentos. Crie um plano fictício realista, não uma regra histórica."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "alifeareatsthesoul-melodrama",
        "area": "research",
        "prompt": {
          "en": "How can melodrama combine empathy with critical distance?",
          "nb": "Hvordan kan melodrama forene empati med kritisk avstand?",
          "fr": "Comment le mélodrame associe-t-il empathie et distance critique ?",
          "pt": "Como pode o melodrama combinar empatia com distância crítica?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat genre influence as proof of identical authorship",
              "nb": "Behandle sjangerpåvirkning som bevis på identisk forfatterskap",
              "fr": "Traiter l’influence du genre comme preuve d’une même signature",
              "pt": "Tratar influência de género como prova de autoria idêntica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare restrained performance and emotionally charged composition",
              "nb": "Sammenlign tilbakeholdent spill og følelsesladet komposisjon",
              "fr": "Comparer jeu retenu et composition émotionnelle",
              "pt": "Comparar interpretação contida e composição emocional"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reduce characters to fixed social stereotypes",
              "nb": "Reduser figurer til fastlåste sosiale stereotypier",
              "fr": "Réduire les personnages à des stéréotypes sociaux",
              "pt": "Reduzir personagens a estereótipos sociais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion traces Sirk's influence and the balance between involvement and critical distance; BFI discusses racism and convention. Develop a new scene with individual agency.",
          "nb": "Criterion følger påvirkningen fra Sirk og balansen mellom innlevelse og kritisk avstand; BFI drøfter rasisme og normer. Utform en ny scene med individuell handlekraft.",
          "fr": "Criterion retrace l’influence de Sirk et la distance critique ; le BFI évoque racisme et conventions. Créez une scène préservant l’autonomie individuelle.",
          "pt": "A Criterion acompanha a influência de Sirk e a distância crítica; o BFI discute racismo e convenções. Crie uma cena com autonomia individual."
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
    "scenarioId": "scenario_jaws_1975",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Marine logistics, withheld imagery and musical suspense",
      "nb": "Maritim logistikk, tilbakeholdte bilder og musikalsk spenning",
      "fr": "Logistique maritime, image retenue et suspense musical",
      "pt": "Logística marítima, imagem contida e suspense musical"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Jaws",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/55193-JAWS"
      },
      {
        "id": "s1",
        "title": "Jaws (1975)",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      },
      {
        "id": "s2",
        "title": "On Location with Jaws",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/on-location-with-jaws"
      },
      {
        "id": "s3",
        "title": "Bill Butler, ASC on His Transition From Tape to Film to Jaws",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/bill-butler-asc-tape-to-film-to-jaws"
      }
    ],
    "questions": [
      {
        "id": "jaws-marine",
        "area": "research",
        "prompt": {
          "en": "How should a fictional water shoot handle uncertain conditions?",
          "nb": "Hvordan bør et fiktivt vannopptak håndtere usikre forhold?",
          "fr": "Comment préparer un tournage fictif sur l’eau aux conditions incertaines ?",
          "pt": "Como deve uma rodagem fictícia na água lidar com condições incertas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume weather will match every planned shooting day",
              "nb": "Anta at været passer hver planlagte opptaksdag",
              "fr": "Supposer que la météo convient à chaque journée",
              "pt": "Supor que o tempo coincide com cada dia planeado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Continue filming despite unsafe water conditions",
              "nb": "Fortsett opptak tross utrygge vannforhold",
              "fr": "Poursuivre le tournage malgré des conditions dangereuses",
              "pt": "Continuar a filmar apesar de condições aquáticas inseguras"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan professional water safety and alternate dry-land setups",
              "nb": "Planlegg profesjonell vannsikkerhet og alternative opptaksoppsett på land",
              "fr": "Prévoir sécurité aquatique professionnelle et dispositifs à terre",
              "pt": "Prever segurança aquática profissional e alternativas em terra"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC records the weather and marine challenges; AFI documents production disruptions. Build a fictional schedule with clear stop criteria and contingency scenes.",
          "nb": "ASC dokumenterer vær- og marine utfordringer; AFI omtaler produksjonsavbrudd. Lag en fiktiv plan med tydelige stoppkriterier og reservescener.",
          "fr": "L’ASC documente météo et difficultés maritimes ; l’AFI recense les interruptions. Créez un calendrier fictif avec critères d’arrêt et scènes de réserve.",
          "pt": "A ASC documenta clima e dificuldades marítimas; a AFI regista interrupções. Crie calendário fictício com critérios de paragem e cenas de reserva."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      },
      {
        "id": "jaws-withholding",
        "area": "camera",
        "prompt": {
          "en": "How can an unseen fictional creature create suspense?",
          "nb": "Hvordan kan en usett fiktiv skapning skape spenning?",
          "fr": "Comment une créature fictive invisible crée-t-elle du suspense ?",
          "pt": "Como pode uma criatura fictícia invisível criar suspense?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume an unreliable effect must remain in every scene",
              "nb": "Anta at en upålitelig effekt må beholdes i hver scene",
              "fr": "Supposer qu’un effet peu fiable doit rester dans chaque scène",
              "pt": "Supor que um efeito pouco fiável deve ficar em cada cena"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use reactions, framing and selective revelation",
              "nb": "Bruk reaksjoner, utsnitt og selektiv avsløring",
              "fr": "Employer réactions, cadrage et révélation progressive",
              "pt": "Usar reações, enquadramento e revelação seletiva"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Show the complete creature in every shot",
              "nb": "Vis hele skapningen i hvert bilde",
              "fr": "Montrer la créature entière dans chaque plan",
              "pt": "Mostrar a criatura completa em cada plano"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents practical-effect failures and Fields's editing; Butler discusses the water-level viewpoint. Test an original suspense sequence in a safe controlled setting.",
          "nb": "AFI dokumenterer svikt i praktiske effekter og Fields' klipping; Butler drøfter perspektivet ved vannflaten. Prøv en egen spenningssekvens i trygge kontrollerte omgivelser.",
          "fr": "L’AFI documente les difficultés d’effets et le montage de Fields ; Butler évoque le regard au niveau de l’eau. Testez une séquence originale en lieu sûr.",
          "pt": "A AFI documenta falhas de efeitos e montagem de Fields; Butler aborda o olhar ao nível da água. Teste uma sequência original em ambiente seguro."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "jaws-score",
        "area": "sound",
        "prompt": {
          "en": "How can an original musical motif signal unseen narrative tension?",
          "nb": "Hvordan kan et eget musikalsk motiv signalisere usett dramatisk spenning?",
          "fr": "Comment un motif musical original signale-t-il une tension invisible ?",
          "pt": "Como pode um motivo musical original sinalizar tensão narrativa invisível?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Vary cue placement and contrast music with silence",
              "nb": "Varier plasseringen av lydtemaer og sett musikk mot stillhet",
              "fr": "Varier les placements musicaux et opposer musique et silence",
              "pt": "Variar a colocação musical e contrastar música com silêncio"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Copy the film's famous theme note for note",
              "nb": "Kopier filmens berømte tema tone for tone",
              "fr": "Copier le thème célèbre note pour note",
              "pt": "Copiar o tema famoso nota por nota"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Keep tension music constant from beginning to end",
              "nb": "Hold spenningsmusikken konstant fra start til slutt",
              "fr": "Garder la musique de tension constante du début à la fin",
              "pt": "Manter música de tensão constante do início ao fim"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI credits Williams and the Registry discusses suspense and score. Compare newly composed cues without reproducing the copyrighted music.",
          "nb": "AFI krediterer Williams og filmregisteret drøfter spenning og musikk. Sammenlign nykomponerte temaer uten å gjengi den opphavsrettslig beskyttede musikken.",
          "fr": "L’AFI crédite Williams et le registre analyse suspense et musique. Comparez des motifs nouvellement composés sans reproduire la musique protégée.",
          "pt": "A AFI credita Williams e o registo analisa suspense e música. Compare motivos novos sem reproduzir a música protegida."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_dog_day_afternoon_1975",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ensemble rehearsal, changing daylight and media perspective",
      "nb": "Ensembleøving, skiftende dagslys og medieperspektiv",
      "fr": "Répétition collective, lumière changeante et regard médiatique",
      "pt": "Ensaio coletivo, luz variável e perspetiva mediática"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Dog Day Afternoon",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Catalog/moviedetails/55464"
      },
      {
        "id": "s1",
        "title": "Dog Day Afternoon",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/9afbfe9b-9438-5877-9f1b-bebd23ef1914/dog-day-afternoon"
      },
      {
        "id": "s2",
        "title": "Where to begin with Sidney Lumet",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/where-begin-with-sidney-lumet"
      },
      {
        "id": "s3",
        "title": "Victor J. Kemper, ASC — A Fitting Candidate for Kudos",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/victor-j-kemper-fitting-candidate-for-kudos"
      }
    ],
    "questions": [
      {
        "id": "dogdayafternoon-rehearsal",
        "area": "research",
        "prompt": {
          "en": "How can ensemble rehearsal support a contained drama?",
          "nb": "Hvordan kan ensembleøving støtte et drama i et avgrenset rom?",
          "fr": "Comment les répétitions collectives soutiennent-elles un drame en espace clos ?",
          "pt": "Como podem ensaios coletivos apoiar um drama em espaço limitado?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the camera team's observation of rehearsal",
              "nb": "Ignorer kamerateamets observasjon av øving",
              "fr": "Ignorer l’observation des répétitions par l’équipe image",
              "pt": "Ignorar a observação dos ensaios pela equipa de imagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track listening, blocking and changing relationships across rehearsals",
              "nb": "Følg lytting, plassering og skiftende relasjoner gjennom øvingene",
              "fr": "Suivre écoute, déplacements et relations changeantes pendant les répétitions",
              "pt": "Acompanhar escuta, marcações e relações mutáveis nos ensaios"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Rehearse each performer in permanent isolation",
              "nb": "Øv med hver skuespiller permanent isolert",
              "fr": "Répéter avec chaque interprète toujours isolé",
              "pt": "Ensaiar cada intérprete permanentemente isolado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kemper describes observing Lumet's rehearsals; AFI records the ensemble and craft credits. Prepare a fictional non-criminal contained drama with shared rehearsal notes.",
          "nb": "Kemper beskriver observasjon av Lumets øvinger; AFI dokumenterer ensemble og fagkreditering. Forbered et fiktivt drama uten kriminalitet med felles øvingsnotater.",
          "fr": "Kemper décrit son observation des répétitions de Lumet ; l’AFI recense les métiers. Préparez un drame fictif sans crime avec des notes communes.",
          "pt": "Kemper descreve observar ensaios de Lumet; a AFI regista os ofícios. Prepare um drama fictício sem crime com notas partilhadas."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "dogdayafternoon-daylight",
        "area": "camera",
        "prompt": {
          "en": "How can changing daylight convey the passage of story time?",
          "nb": "Hvordan kan skiftende dagslys formidle fortellingstidens gang?",
          "fr": "Comment la lumière changeante exprime-t-elle le temps du récit ?",
          "pt": "Como pode a luz variável transmitir a passagem do tempo narrativo?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map story-time lighting states and maintain shot continuity",
              "nb": "Kartlegg lysstadier i fortellingstiden og bevar billedkontinuitet",
              "fr": "Cartographier les états lumineux du récit et préserver les raccords",
              "pt": "Mapear estados luminosos do tempo narrativo e manter continuidade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every scene occurs under identical lighting",
              "nb": "Anta at alle scener foregår under identisk lys",
              "fr": "Supposer que toutes les scènes ont une lumière identique",
              "pt": "Supor que todas as cenas ocorrem sob luz idêntica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent exact historical exposure settings from a still",
              "nb": "Dikt opp eksakte historiske eksponeringsinnstillinger fra et stillbilde",
              "fr": "Inventer des réglages historiques précis depuis une image fixe",
              "pt": "Inventar definições históricas exatas a partir de imagem fixa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kemper recalls changing interior light and the rejection of polished Hollywood imagery. Design a light continuity plan for an original fictional room.",
          "nb": "Kemper erindrer skiftende interiørlys og avvisning av polert Hollywood-estetikk. Lag en lyskontinuitetsplan for et eget fiktivt rom.",
          "fr": "Kemper évoque la lumière intérieure changeante et le refus du brillant hollywoodien. Créez un plan de raccord lumineux pour un espace fictif.",
          "pt": "Kemper recorda luz interior variável e rejeição do brilho de Hollywood. Crie um plano de continuidade luminosa para espaço fictício."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "dogdayafternoon-media",
        "area": "sound",
        "prompt": {
          "en": "How can fictional media coverage change a character's public image?",
          "nb": "Hvordan kan fiktiv mediedekning endre en figurs offentlige image?",
          "fr": "Comment une couverture médiatique fictive modifie-t-elle l’image publique d’un personnage ?",
          "pt": "Como pode cobertura mediática fictícia alterar a imagem pública de uma personagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Present invented media excerpts as authentic reporting",
              "nb": "Presenter oppdiktede medieklipp som autentisk journalistikk",
              "fr": "Présenter des extraits inventés comme reportages authentiques",
              "pt": "Apresentar excertos inventados como reportagem autêntica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume public perception equals objective truth",
              "nb": "Anta at offentlig oppfatning er objektiv sannhet",
              "fr": "Supposer que la perception publique est la vérité objective",
              "pt": "Supor que perceção pública é verdade objetiva"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Contrast private dialogue with a clearly fictional public broadcast",
              "nb": "Sett privat dialog opp mot en tydelig fiktiv offentlig sending",
              "fr": "Opposer dialogue privé et diffusion publique clairement fictive",
              "pt": "Contrastar diálogo privado com emissão pública claramente fictícia"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI discusses media spectacle and social pressures; AFI identifies the real-event adaptation. Explore a fictional public disagreement without treating dramatization as evidence.",
          "nb": "BFI drøfter mediespektakel og sosialt press; AFI identifiserer adaptasjonen av virkelige hendelser. Utforsk en fiktiv offentlig uenighet uten å behandle dramatisering som bevis.",
          "fr": "Le BFI analyse spectacle médiatique et pressions sociales ; l’AFI identifie l’adaptation. Explorez un désaccord public fictif sans traiter la fiction comme preuve.",
          "pt": "O BFI analisa espetáculo mediático e pressões sociais; a AFI identifica a adaptação. Explore um desacordo público fictício sem tratar dramatização como prova."
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
    "scenarioId": "scenario_taxi_driver_1976",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Unreliable viewpoint, expressionist city and contrasting music",
      "nb": "Upålitelig perspektiv, ekspresjonistisk by og kontrasterende musikk",
      "fr": "Regard non fiable, ville expressionniste et musique contrastée",
      "pt": "Olhar não fiável, cidade expressionista e música contrastante"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Taxi Driver",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/67969-TAXI-DRIVER"
      },
      {
        "id": "s1",
        "title": "Taxi Driver",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/d964bfb7-729b-5181-85f8-35b1bd3a21a3/taxi-driver"
      },
      {
        "id": "s2",
        "title": "Taxi Driver: 5 films that influenced Scorsese's masterpiece",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/taxi-driver-5-films-that-influenced-scorseses-masterpiece"
      },
      {
        "id": "s3",
        "title": "In Memoriam: Michael Chapman, ASC",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/news/in-memoriam-michael-chapman-asc"
      }
    ],
    "questions": [
      {
        "id": "taxidriver-viewpoint",
        "area": "research",
        "prompt": {
          "en": "How can a film distinguish subjective narration from factual reality?",
          "nb": "Hvordan kan en film skille subjektiv fortellerstemme fra faktisk virkelighet?",
          "fr": "Comment distinguer narration subjective et réalité factuelle au cinéma ?",
          "pt": "Como pode um filme distinguir narração subjetiva de realidade factual?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Contrast fictional narration with independent visual context",
              "nb": "Sett fiktiv fortellerstemme opp mot selvstendig visuell kontekst",
              "fr": "Opposer narration fictive et contexte visuel indépendant",
              "pt": "Contrastar narração fictícia com contexto visual independente"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the protagonist's judgments as objective evidence",
              "nb": "Behandle hovedfigurens vurderinger som objektive bevis",
              "fr": "Traiter les jugements du protagoniste comme preuves objectives",
              "pt": "Tratar juízos do protagonista como provas objetivas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all evidence of the narrator's limited perspective",
              "nb": "Fjern alle tegn på fortellerens begrensede perspektiv",
              "fr": "Supprimer tout indice du regard limité du narrateur",
              "pt": "Eliminar todos os indícios da perspetiva limitada do narrador"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI discusses urban disillusionment and literary and cinematic influences; AFI credits Schrader's screenplay. Explore critical distance in an original nonviolent scene.",
          "nb": "BFI drøfter urban desillusjon og litterære og filmatiske påvirkninger; AFI krediterer Schraders manus. Utforsk kritisk avstand i en egen ikkevoldelig scene.",
          "fr": "Le BFI analyse désillusion urbaine et influences littéraires et filmiques ; l’AFI crédite Schrader. Explorez la distance critique dans une scène originale non violente.",
          "pt": "O BFI analisa desilusão urbana e influências literárias e fílmicas; a AFI credita Schrader. Explore distância crítica numa cena original não violenta."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "taxidriver-city",
        "area": "camera",
        "prompt": {
          "en": "How can urban lighting express a fictional character's isolation?",
          "nb": "Hvordan kan bylyset uttrykke en fiktiv figurs isolasjon?",
          "fr": "Comment la lumière urbaine exprime-t-elle l’isolement d’un personnage fictif ?",
          "pt": "Como pode a luz urbana exprimir isolamento de uma personagem fictícia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat expressionist images as neutral urban documentation",
              "nb": "Behandle ekspresjonistiske bilder som nøytral bydokumentasjon",
              "fr": "Traiter les images expressionnistes comme documentation neutre",
              "pt": "Tratar imagens expressionistas como documentação neutra"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer precise historical camera settings from colour alone",
              "nb": "Utled presise historiske kamerainnstillinger bare fra farge",
              "fr": "Déduire les réglages historiques précis de la seule couleur",
              "pt": "Deduzir definições históricas da câmara apenas pela cor"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test reflected light, colour contrast and subjective framing",
              "nb": "Prøv reflektert lys, fargekontrast og subjektiv innramming",
              "fr": "Tester lumière réfléchie, contraste chromatique et cadrage subjectif",
              "pt": "Testar luz refletida, contraste cromático e enquadramento subjetivo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI discusses neon and steam; Chapman recalls rejecting a newsreel look. Develop an original visual test that separates interpretation from documentary evidence.",
          "nb": "BFI drøfter neonlys og damp; Chapman erindrer avvisningen av aktualitetsestetikk. Lag en egen visuell test som skiller tolkning fra dokumentarisk belegg.",
          "fr": "Le BFI analyse néons et vapeur ; Chapman rappelle le refus du style actualités. Créez un essai distinguant interprétation et preuve documentaire.",
          "pt": "O BFI analisa néon e vapor; Chapman recorda rejeição da estética jornalística. Crie um teste que distinga interpretação de prova documental."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "taxidriver-music",
        "area": "sound",
        "prompt": {
          "en": "How can contrasting musical moods challenge a subjective image?",
          "nb": "Hvordan kan kontrasterende musikalske stemninger utfordre et subjektivt bilde?",
          "fr": "Comment des ambiances musicales contrastées interrogent-elles une image subjective ?",
          "pt": "Como podem ambientes musicais contrastantes questionar uma imagem subjetiva?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Credit the musical score to the editor alone",
              "nb": "Krediter filmmusikken bare til klipperen",
              "fr": "Attribuer la partition uniquement au monteur",
              "pt": "Atribuir a partitura apenas ao montador"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original cues that create tenderness or unease",
              "nb": "Sammenlign egne lydtemaer som skaper ømhet eller uro",
              "fr": "Comparer des motifs originaux suscitant tendresse ou malaise",
              "pt": "Comparar motivos originais que criam ternura ou inquietação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every cue confirms the character's judgments",
              "nb": "Anta at hvert lydtema bekrefter figurens vurderinger",
              "fr": "Supposer que chaque motif confirme les jugements du personnage",
              "pt": "Supor que cada motivo confirma os juízos da personagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes Herrmann's forceful and nostalgic music, and AFI identifies separate music and editing roles. Test new musical moods without copying the score.",
          "nb": "BFI beskriver Herrmanns kraftfulle og nostalgiske musikk, og AFI identifiserer separate musikk- og klipperoller. Prøv nye stemninger uten å kopiere musikken.",
          "fr": "Le BFI décrit la musique puissante et nostalgique de Herrmann et l’AFI distingue les métiers. Testez des ambiances nouvelles sans copier la partition.",
          "pt": "O BFI descreve música poderosa e nostálgica de Herrmann e a AFI distingue os ofícios. Teste ambientes novos sem copiar a partitura."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_star_wars_1977",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Used-future design, effects coordination and invented sound worlds",
      "nb": "Brukt fremtidsdesign, effektkoordinering og oppdiktede lydverdener",
      "fr": "Futur patiné, coordination des effets et univers sonores inventés",
      "pt": "Futuro usado, coordenação de efeitos e mundos sonoros inventados"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Star Wars",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/55187-STAR-WARS"
      },
      {
        "id": "s1",
        "title": "Star Wars (1977)",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      },
      {
        "id": "s2",
        "title": "Beyond The Frame: Star Wars: Episode IV — A New Hope",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/beyond-the-frame-star-wars-episode-iv-a-new-hope-1977"
      },
      {
        "id": "s3",
        "title": "The 50th Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1978"
      }
    ],
    "questions": [
      {
        "id": "starwars-design",
        "area": "camera",
        "prompt": {
          "en": "How can fictional technology appear to have a history?",
          "nb": "Hvordan kan fiktiv teknologi se ut til å ha en historie?",
          "fr": "Comment une technologie fictive peut-elle sembler avoir une histoire ?",
          "pt": "Como pode tecnologia fictícia parecer ter uma história?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Make every prop uniformly new and pristine",
              "nb": "Gjør alle rekvisitter ensartet nye og plettfrie",
              "fr": "Rendre tous les accessoires uniformément neufs",
              "pt": "Tornar todos os adereços uniformemente novos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy recognizable props without creating an original design",
              "nb": "Kopier gjenkjennelige rekvisitter uten å lage eget design",
              "fr": "Copier des accessoires reconnaissables sans création originale",
              "pt": "Copiar adereços reconhecíveis sem criar design original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Design coherent signs of wear, repair and repeated use",
              "nb": "Utform sammenhengende tegn på slitasje, reparasjon og gjentatt bruk",
              "fr": "Concevoir des signes cohérents d’usure, de réparation et d’usage",
              "pt": "Conceber sinais coerentes de desgaste, reparação e uso repetido"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents the used-future aesthetic and Academy records recognize art direction. Design an original fictional everyday object with a plausible history.",
          "nb": "AFI dokumenterer estetikken med en brukt fremtid og Oscar-arkivet anerkjenner scenografien. Utform en egen fiktiv hverdagsgjenstand med en troverdig historie.",
          "fr": "L’AFI documente le futur patiné et l’Académie reconnaît la direction artistique. Concevez un objet quotidien fictif original avec une histoire plausible.",
          "pt": "A AFI documenta o futuro usado e a Academia reconhece direção artística. Crie um objeto quotidiano fictício original com história plausível."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "starwars-pipeline",
        "area": "camera",
        "prompt": {
          "en": "How should miniature effects and live action be coordinated?",
          "nb": "Hvordan bør miniatyreffekter og realopptak samordnes?",
          "fr": "Comment coordonner effets de miniatures et prises de vues réelles ?",
          "pt": "Como coordenar efeitos de miniaturas e imagens de ação real?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume visual effects alone establish narrative continuity",
              "nb": "Anta at visuelle effekter alene etablerer fortellingskontinuitet",
              "fr": "Supposer que les effets seuls assurent la continuité narrative",
              "pt": "Supor que efeitos visuais sozinhos estabelecem continuidade narrativa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Share reference framing, movement and shot identifiers",
              "nb": "Del referanseutsnitt, bevegelse og opptaksidentifikatorer",
              "fr": "Partager cadrages de référence, mouvements et identifiants de plans",
              "pt": "Partilhar enquadramentos de referência, movimentos e identificadores de planos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat each effects shot as independent of the scene",
              "nb": "Behandle hvert effektopptak uavhengig av scenen",
              "fr": "Traiter chaque plan d’effets comme indépendant de la scène",
              "pt": "Tratar cada plano de efeitos como independente da cena"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents the custom effects pipeline and ASC records miniature photography; the Registry stresses integration into narrative. Plan a small original effects test.",
          "nb": "AFI dokumenterer den spesialtilpassede effektkjeden og ASC miniatyrfoto; filmregisteret vektlegger integrasjon i fortellingen. Planlegg en liten egen effekttest.",
          "fr": "L’AFI documente la chaîne d’effets et l’ASC les miniatures ; le registre souligne leur intégration au récit. Préparez un petit essai original.",
          "pt": "A AFI documenta a cadeia de efeitos e a ASC as miniaturas; o registo destaca integração narrativa. Planeie um pequeno teste original."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "starwars-soundworld",
        "area": "sound",
        "prompt": {
          "en": "How can invented sounds give fictional objects a consistent identity?",
          "nb": "Hvordan kan oppdiktede lyder gi fiktive gjenstander en konsekvent identitet?",
          "fr": "Comment des sons inventés donnent-ils une identité cohérente aux objets fictifs ?",
          "pt": "Como podem sons inventados dar identidade coerente a objetos fictícios?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Create a library of original sounds with documented variations",
              "nb": "Lag et bibliotek av egne lyder med dokumenterte variasjoner",
              "fr": "Créer une bibliothèque de sons originaux avec variantes documentées",
              "pt": "Criar biblioteca de sons originais com variantes documentadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the same unrelated sound for every object",
              "nb": "Bruk samme urelaterte lyd for alle gjenstander",
              "fr": "Employer le même son sans rapport pour tous les objets",
              "pt": "Usar o mesmo som sem relação para todos os objetos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the film's distinctive sound recordings without permission",
              "nb": "Kopier filmens særpregede lydopptak uten tillatelse",
              "fr": "Copier les enregistrements distinctifs du film sans autorisation",
              "pt": "Copiar gravações distintivas do filme sem autorização"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records Burtt's sound work and the Academy recognizes his special achievement. Design new sounds and distinguish effects, voices and music in the cue sheet.",
          "nb": "AFI dokumenterer Burtts lydarbeid og Oscar-arkivet anerkjenner hans særprestasjon. Lag nye lyder og skill effekter, stemmer og musikk i lydplanen.",
          "fr": "L’AFI documente le travail de Burtt et l’Académie reconnaît sa contribution. Créez des sons nouveaux et distinguez effets, voix et musique.",
          "pt": "A AFI documenta o trabalho de Burtt e a Academia reconhece a contribuição. Crie sons novos e distinga efeitos, vozes e música no plano sonoro."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_amarcord_1973",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Collective memory and studio reconstruction",
      "nb": "Kollektiv erindring og studiorekonstruksjon",
      "fr": "Mémoire collective et reconstruction en studio",
      "pt": "Memória coletiva e reconstrução em estúdio"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Amarcord",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/208-amarcord"
      },
      {
        "id": "s1",
        "title": "Amarcord: Federico of the Spirits",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/445-amarcord-federico-of-the-spirits"
      },
      {
        "id": "s2",
        "title": "Amarcord",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/90096ab6-3f75-50a9-a167-f9da9cc38bfd/amarcord"
      },
      {
        "id": "s3",
        "title": "Amarcord",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/amarcord/"
      }
    ],
    "questions": [
      {
        "id": "amarcord-memory",
        "area": "research",
        "prompt": {
          "en": "How can episodic memories form a coherent fictional town?",
          "nb": "Hvordan kan episodiske minner danne en sammenhengende fiktiv by?",
          "fr": "Comment des souvenirs épisodiques composent-ils une ville fictive cohérente ?",
          "pt": "Como podem memórias episódicas formar uma cidade fictícia coerente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Link recurring characters, seasons and places",
              "nb": "Knytt tilbakevendende figurer, årstider og steder sammen",
              "fr": "Relier personnages, saisons et lieux récurrents",
              "pt": "Ligar personagens, estações e locais recorrentes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present all memories as verified autobiography",
              "nb": "Presenter alle minner som verifisert selvbiografi",
              "fr": "Présenter tout souvenir comme autobiographie vérifiée",
              "pt": "Apresentar todas as memórias como autobiografia verificada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Give each episode no relationship to the others",
              "nb": "La hver episode være uten forbindelse til de andre",
              "fr": "Priver chaque épisode de lien avec les autres",
              "pt": "Deixar cada episódio sem relação com os outros"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion and BFI describe the imagined town, caricature and episodic childhood material. Design fictional memories without treating them as literal biography.",
          "nb": "Criterion og BFI beskriver den forestilte byen, karikaturen og episodisk barndomsmateriale. Lag fiktive minner uten å behandle dem som bokstavelig biografi.",
          "fr": "Criterion et le BFI décrivent ville imaginée, caricature et enfance épisodique. Créez des souvenirs fictifs sans les traiter comme biographie littérale.",
          "pt": "A Criterion e o BFI descrevem cidade imaginada, caricatura e infância episódica. Crie memórias fictícias sem as tratar como biografia literal."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "amarcord-sets",
        "area": "camera",
        "prompt": {
          "en": "How can a studio town suggest a remembered rather than literal place?",
          "nb": "Hvordan kan en studioby antyde et erindret fremfor bokstavelig sted?",
          "fr": "Comment une ville de studio évoque-t-elle un lieu remémoré plutôt que littéral ?",
          "pt": "Como pode uma cidade de estúdio evocar um local lembrado e não literal?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Separate design from every photographic choice",
              "nb": "Skill scenografi fra alle fotografiske valg",
              "fr": "Séparer le décor de tout choix photographique",
              "pt": "Separar cenografia de todas as escolhas fotográficas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate stylized sets, costumes and color references",
              "nb": "Samordne stiliserte kulisser, kostymer og fargereferanser",
              "fr": "Coordonner décors stylisés, costumes et références chromatiques",
              "pt": "Coordenar cenários estilizados, figurinos e referências cromáticas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the town was recorded entirely on location",
              "nb": "Anta at hele byen ble tatt opp på location",
              "fr": "Supposer que toute la ville fut filmée sur place",
              "pt": "Supor que toda a cidade foi filmada no local"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents the Cinecittà reconstruction and credits Rotunno and Donati. Create an original color and set plan that acknowledges their collaborative craft.",
          "nb": "Criterion dokumenterer Cinecittà-rekonstruksjonen og krediterer Rotunno og Donati. Lag en egen farge- og kulisseplan som anerkjenner samarbeidet.",
          "fr": "Criterion documente la reconstruction à Cinecittà et crédite Rotunno et Donati. Créez un plan original de couleurs et décors reconnaissant leur collaboration.",
          "pt": "A Criterion documenta reconstrução na Cinecittà e credita Rotunno e Donati. Crie um plano original de cor e cenário que reconheça a colaboração."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "amarcord-history",
        "area": "research",
        "prompt": {
          "en": "How should the Fascist-era setting be analyzed?",
          "nb": "Hvordan bør miljøet fra fascisttiden analyseres?",
          "fr": "Comment analyser le contexte de l’époque fasciste ?",
          "pt": "Como analisar o contexto da época fascista?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat caricature as neutral documentary evidence",
              "nb": "Behandle karikatur som nøytral dokumentasjon",
              "fr": "Traiter la caricature comme preuve documentaire neutre",
              "pt": "Tratar caricatura como prova documental neutra"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the political setting of the fictional town",
              "nb": "Ignorer den fiktive byens politiske kontekst",
              "fr": "Ignorer le contexte politique de la ville fictive",
              "pt": "Ignorar o contexto político da cidade fictícia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish historical context from satirical exaggeration",
              "nb": "Skill historisk kontekst fra satirisk overdrivelse",
              "fr": "Distinguer contexte historique et exagération satirique",
              "pt": "Distinguir contexto histórico de exagero satírico"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion and BFI situate the film in provincial Fascist Italy and social satire. Compare the fictional representation with independent historical evidence.",
          "nb": "Criterion og BFI plasserer filmen i fascisttidens provins-Italia og sosial satire. Sammenlign fiksjonen med uavhengig historisk dokumentasjon.",
          "fr": "Criterion et le BFI situent le film dans l’Italie fasciste provinciale et la satire sociale. Comparez la fiction à des preuves historiques indépendantes.",
          "pt": "A Criterion e o BFI situam o filme na Itália fascista provincial e sátira social. Compare a ficção com provas históricas independentes."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_manila_in_the_claws_of_light_1975",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Urban labor, mixed casting and restored editions",
      "nb": "Byarbeid, blandet casting og restaurerte utgaver",
      "fr": "Travail urbain, distribution mixte et éditions restaurées",
      "pt": "Trabalho urbano, elenco misto e edições restauradas"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Manila in the Claws of Light",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/29221-manila-in-the-claws-of-light"
      },
      {
        "id": "s1",
        "title": "Manila in the Claws of Light: A Proletarian Inferno",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5741-manila-in-the-claws-of-light-a-proletarian-inferno"
      },
      {
        "id": "s2",
        "title": "Bringing the Grit to Philippine Cinema",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5748-bringing-the-grit-to-philippine-cinema"
      },
      {
        "id": "s3",
        "title": "Manila in the Claws of Light / Maynila sa mga kuko ng liwanag",
        "publisher": "The Film Foundation – World Cinema Project",
        "url": "https://www.film-foundation.org/world-cinema?page=5&sortBy=country&sortOrder=1"
      },
      {
        "id": "s4",
        "title": "Maynila: Sa mga Kuko ng Liwanag (Manila in the Claws of Light)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/maynila-sa-mga-kuko-ng-liwanag/"
      },
      {
        "id": "s5",
        "title": "Maynila sa mga kuko ng liwanag (1975)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/e7c93a2a-7243-56c8-96d4-9b4602b977ed/maynila-sa-mga-kuko-ng-liwanag"
      }
    ],
    "questions": [
      {
        "id": "manilaintheclawsoflight-city",
        "area": "camera",
        "prompt": {
          "en": "How can city locations show the pressures of working life?",
          "nb": "Hvordan kan byopptak vise arbeidslivets belastninger?",
          "fr": "Comment les lieux urbains montrent-ils les pressions du travail ?",
          "pt": "Como podem locais urbanos mostrar as pressões do trabalho?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat staged scenes as direct documentary evidence",
              "nb": "Behandle iscenesatte scener som direkte dokumentasjon",
              "fr": "Traiter les scènes jouées comme preuves directes",
              "pt": "Tratar cenas encenadas como provas diretas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Connect people, built environments and material conditions",
              "nb": "Knytt mennesker, bygde miljøer og materielle forhold sammen",
              "fr": "Relier personnes, environnement bâti et conditions matérielles",
              "pt": "Ligar pessoas, ambiente construído e condições materiais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reduce the city to picturesque background scenery",
              "nb": "Reduser byen til pittoresk bakgrunnsdekor",
              "fr": "Réduire la ville à un décor pittoresque",
              "pt": "Reduzir a cidade a cenário pitoresco"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion scholarship describes Manila locations and labor politics. Create a fictional image study that preserves social context and distinguishes realism from documentary proof.",
          "nb": "Criterion-forskning beskriver Manila-locations og arbeidspolitikk. Lag en fiktiv bildestudie som bevarer sosial kontekst og skiller realisme fra dokumentasjon.",
          "fr": "Criterion analyse les lieux de Manille et la politique du travail. Créez une étude fictive respectant le contexte et distinguant réalisme et preuve.",
          "pt": "A Criterion analisa locais de Manila e política laboral. Crie um estudo fictício que preserve contexto e distinga realismo de prova."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "manilaintheclawsoflight-casting",
        "area": "research",
        "prompt": {
          "en": "How should a mixed professional and community cast be approached?",
          "nb": "Hvordan bør et blandet profesjonelt og lokalt ensemble tilnærmes?",
          "fr": "Comment aborder une distribution professionnelle et communautaire mixte ?",
          "pt": "Como abordar um elenco misto profissional e comunitário?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume community participants need no direction",
              "nb": "Anta at lokale medvirkende ikke trenger regi",
              "fr": "Supposer que les participants locaux n’ont besoin d’aucune direction",
              "pt": "Supor que participantes locais dispensam direção"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use vulnerable participants without meaningful consent",
              "nb": "Bruk sårbare medvirkende uten reelt samtykke",
              "fr": "Utiliser des participants vulnérables sans consentement réel",
              "pt": "Usar participantes vulneráveis sem consentimento efetivo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use informed consent and clear collaborative direction",
              "nb": "Bruk informert samtykke og tydelig samarbeidsbasert regi",
              "fr": "Recourir au consentement éclairé et à une direction collaborative claire",
              "pt": "Usar consentimento informado e direção colaborativa clara"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion production material documents Brocka's mix of professional and nonprofessional performers. Design a new consent-based rehearsal that respects participant agency.",
          "nb": "Criterion-materialet dokumenterer Brockas blanding av profesjonelle og amatører. Lag en ny samtykkebasert prøve som respekterer medvirkendes selvbestemmelse.",
          "fr": "Les documents Criterion décrivent le mélange d’acteurs professionnels et non professionnels. Concevez une répétition consentie respectant leur autonomie.",
          "pt": "O material Criterion documenta a mistura de atores profissionais e não profissionais. Crie um ensaio consentido que respeite a autonomia dos participantes."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "manilaintheclawsoflight-versions",
        "area": "research",
        "prompt": {
          "en": "How should runtime and restored editions be documented?",
          "nb": "Hvordan bør spilletid og restaurerte utgaver dokumenteres?",
          "fr": "Comment documenter durées et éditions restaurées ?",
          "pt": "Como documentar durações e edições restauradas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record each edition and its institutional provenance",
              "nb": "Registrer hver utgave og dens institusjonelle proveniens",
              "fr": "Consigner chaque édition et sa provenance institutionnelle",
              "pt": "Registar cada edição e a sua proveniência institucional"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all runtime differences indicate censorship",
              "nb": "Anta at alle spilletidsforskjeller skyldes sensur",
              "fr": "Supposer que toute différence de durée indique la censure",
              "pt": "Supor que toda diferença de duração indica censura"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat restoration as original cinematography",
              "nb": "Behandle restaurering som opprinnelig fotoarbeid",
              "fr": "Traiter le restauro comme photographie originale",
              "pt": "Tratar restauro como fotografia original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion, Film Foundation and Cannes record versions and restoration materials. Preserve runtime differences without assigning undocumented causes or conflating restoration and production.",
          "nb": "Criterion, Film Foundation og Cannes dokumenterer utgaver og restaureringsmateriale. Bevar spilletidsforskjeller uten udokumenterte årsaker eller sammenblanding av restaurering og produksjon.",
          "fr": "Criterion, Film Foundation et Cannes documentent versions et restauration. Préservez les écarts de durée sans causes inventées ni confusion avec la production.",
          "pt": "A Criterion, Film Foundation e Cannes documentam versões e restauro. Preserve diferenças de duração sem causas inventadas nem confusão com produção."
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
    "scenarioId": "scenario_the_battle_of_chile_part_i_1975",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Documentary evidence and collective labor in exile",
      "nb": "Dokumentarisk belegg og kollektivt arbeid i eksil",
      "fr": "Preuves documentaires et travail collectif en exil",
      "pt": "Provas documentais e trabalho coletivo no exílio"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Battle of Chile I - II - III",
        "publisher": "Patricio Guzmán",
        "url": "https://www.patricio-guzman.com/en/la-batalla-de-chile-i-ii-iii"
      },
      {
        "id": "s1",
        "title": "La batalla de Chile",
        "publisher": "Memoria Chilena – Biblioteca Nacional de Chile",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-96647.html"
      },
      {
        "id": "s2",
        "title": "The Battle of Chile: The Insurrection of the Bourgeoisie",
        "publisher": "IDFA Archive",
        "url": "https://www.idfa.nl/en/film/8f9ea725-b676-4c10-a35a-d6fc7aa17a7a/the-battle-of-chile-the-insurrection-of-the-bourgeoisie/"
      },
      {
        "id": "s3",
        "title": "The Battle of Chile, Part One: The Insurrection of the Bourgeoisie",
        "publisher": "Harvard Film Archive",
        "url": "https://harvardfilmarchive.org/calendar/battle-of-chile-part-one-the-insurrection-of-the-bourgeoisie-202"
      },
      {
        "id": "s4",
        "title": "The Battle of Chile - Restored!",
        "publisher": "Icarus Films",
        "url": "https://icarusfilms.com/if-bocbd"
      }
    ],
    "questions": [
      {
        "id": "thebattleofchileparti-evidence",
        "area": "research",
        "prompt": {
          "en": "How should political documentary footage be documented?",
          "nb": "Hvordan bør politiske dokumentaropptak dokumenteres?",
          "fr": "Comment documenter des images de documentaire politique ?",
          "pt": "Como documentar imagens de documentário político?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a camera image explains all historical causes",
              "nb": "Anta at et kamerabilde forklarer alle historiske årsaker",
              "fr": "Supposer qu’une image explique toutes les causes historiques",
              "pt": "Supor que uma imagem explica todas as causas históricas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard context when selecting archival excerpts",
              "nb": "Forkast konteksten ved valg av arkivutdrag",
              "fr": "Écarter le contexte lors du choix d’extraits",
              "pt": "Descartar contexto ao selecionar excertos de arquivo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record provenance, context and limits of each source",
              "nb": "Registrer proveniens, kontekst og begrensninger for hver kilde",
              "fr": "Consigner provenance, contexte et limites de chaque source",
              "pt": "Registar proveniência, contexto e limites de cada fonte"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "IDFA and Memoria Chilena describe the documentary's political context and field coverage. Build a source log for archival analysis, distinguishing recorded events from editorial interpretation.",
          "nb": "IDFA og Memoria Chilena beskriver dokumentarens politiske kontekst og feltopptak. Lag en kildelogg for arkivanalyse som skiller registrerte hendelser fra klippetolkning.",
          "fr": "IDFA et Memoria Chilena décrivent contexte politique et travail de terrain. Créez un registre de sources distinguant événements enregistrés et interprétation du montage.",
          "pt": "A IDFA e Memoria Chilena descrevem contexto político e trabalho de campo. Crie um registo de fontes distinguindo eventos registados e interpretação da montagem."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "thebattleofchileparti-crew",
        "area": "research",
        "prompt": {
          "en": "How can a documentary credit its field and editing collaborators?",
          "nb": "Hvordan kan en dokumentar kreditere felt- og klippemedarbeidere?",
          "fr": "Comment un documentaire crédite-t-il son équipe de terrain et de montage ?",
          "pt": "Como pode um documentário creditar colaboradores de campo e montagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate field recording, editing and institutional support credits",
              "nb": "Skill kreditering for feltopptak, klipp og institusjonell støtte",
              "fr": "Distinguer crédits de terrain, montage et soutien institutionnel",
              "pt": "Distinguir créditos de campo, montagem e apoio institucional"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Credit only the director and omit field collaborators",
              "nb": "Krediter bare regissøren og utelat feltmedarbeidere",
              "fr": "Créditer seulement le réalisateur et oublier l’équipe de terrain",
              "pt": "Creditar apenas o realizador e omitir colaboradores de campo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later restoration as part of original field capture",
              "nb": "Behandle senere restaurering som del av opprinnelig feltopptak",
              "fr": "Traiter la restauration comme captation originale",
              "pt": "Tratar restauro posterior como captação original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Guzmán and Memoria Chilena identify the field team, Chaskel's editing and Cuban postproduction. Preserve separate contributions and the context of exile.",
          "nb": "Guzmán og Memoria Chilena identifiserer feltteamet, Chaskels klipp og kubansk etterarbeid. Bevar separate bidrag og eksilkonteksten.",
          "fr": "Guzmán et Memoria Chilena identifient équipe de terrain, montage de Chaskel et postproduction cubaine. Préservez les contributions et le contexte de l’exil.",
          "pt": "Guzmán e Memoria Chilena identificam equipa de campo, montagem de Chaskel e pós-produção cubana. Preserve contributos distintos e contexto do exílio."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "thebattleofchileparti-sound",
        "area": "sound",
        "prompt": {
          "en": "How can archival sound be contextualized during editing?",
          "nb": "Hvordan kan arkivlyd kontekstualiseres under klipping?",
          "fr": "Comment contextualiser le son d’archives au montage ?",
          "pt": "Como contextualizar som de arquivo durante a montagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use narration to erase uncertainty in the record",
              "nb": "Bruk fortellerstemme til å fjerne usikkerhet i dokumentasjonen",
              "fr": "Utiliser la narration pour effacer les incertitudes",
              "pt": "Usar narração para apagar incertezas do registo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Document the relation between voices, recordings and edited images",
              "nb": "Dokumenter forholdet mellom stemmer, opptak og klippede bilder",
              "fr": "Documenter le rapport entre voix, enregistrements et images montées",
              "pt": "Documentar relação entre vozes, gravações e imagens montadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every audio fragment belongs to any chosen image",
              "nb": "Anta at alle lydfragmenter tilhører et vilkårlig bilde",
              "fr": "Supposer que tout fragment sonore correspond à toute image",
              "pt": "Supor que qualquer fragmento sonoro pertence a qualquer imagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Guzmán identifies separate sound recordings and IDFA credits Bernardo Menz. Preserve audio provenance and mark editorial juxtaposition instead of implying undocumented synchronization.",
          "nb": "Guzmán identifiserer separate lydopptak og IDFA krediterer Bernardo Menz. Bevar lydproveniens og merk redaksjonell sammenstilling fremfor å antyde udokumentert synkronisering.",
          "fr": "Guzmán identifie des enregistrements sonores et IDFA crédite Bernardo Menz. Préservez provenance et indiquez les rapprochements de montage sans synchronisation inventée.",
          "pt": "Guzmán identifica gravações sonoras e IDFA credita Bernardo Menz. Preserve proveniência e assinale justaposição editorial sem sincronização inventada."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_a_clockwork_orange_1971",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Constructed futures, visual progression and musical counterpoint",
      "nb": "Konstruert fremtid, visuell utvikling og musikalsk kontrapunkt",
      "fr": "Futur construit, progression visuelle et contrepoint musical",
      "pt": "Futuro construído, progressão visual e contraponto musical"
    },
    "sources": [
      {
        "id": "s0",
        "title": "A Clockwork Orange",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/54041-A-CLOCKWORKORANGE"
      },
      {
        "id": "s1",
        "title": "The Old Ultra-Violence: A Clockwork Orange",
        "publisher": "American Cinematographer",
        "url": "https://staging.ascmag.com/articles/the-old-ultra-violence-a-clockwork-orange"
      },
      {
        "id": "s2",
        "title": "A Clockwork Orange (1971)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/42658f34-6e1f-5712-990e-4a64564d666f/a-clockwork-orange"
      },
      {
        "id": "s3",
        "title": "Stanley Kubrick's Britain",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/stanley-kubricks-britain/"
      }
    ],
    "questions": [
      {
        "id": "aclockworkorange-architecture",
        "area": "camera",
        "prompt": {
          "en": "How can existing architecture suggest a fictional future?",
          "nb": "Hvordan kan eksisterende arkitektur antyde en fiktiv fremtid?",
          "fr": "Comment une architecture existante évoque-t-elle un futur fictif ?",
          "pt": "Como pode a arquitetura existente sugerir um futuro fictício?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Select locations and coordinate original design elements",
              "nb": "Velg opptakssteder og samordne egne designelementer",
              "fr": "Choisir les lieux et coordonner des éléments originaux",
              "pt": "Escolher locais e coordenar elementos originais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all futuristic buildings were built as sets",
              "nb": "Anta at alle fremtidsbygninger ble bygget som kulisser",
              "fr": "Supposer que tous les bâtiments futuristes sont des décors",
              "pt": "Supor que todos os edifícios futuristas são cenários"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the visual relationship between different locations",
              "nb": "Ignorer det visuelle forholdet mellom ulike steder",
              "fr": "Ignorer les rapports visuels entre les lieux",
              "pt": "Ignorar relações visuais entre locais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI identifies actual British modernist sites used in the film. Build an original location plan that distinguishes existing architecture from fictional design.",
          "nb": "BFI identifiserer faktiske britiske modernistiske steder brukt i filmen. Lag en egen stedsplan som skiller eksisterende arkitektur fra fiktiv design.",
          "fr": "Le BFI identifie des sites modernistes britanniques. Créez un plan original distinguant architecture existante et design fictif.",
          "pt": "O BFI identifica locais modernistas britânicos. Crie um plano original distinguindo arquitetura existente de design fictício."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "aclockworkorange-progression",
        "area": "camera",
        "prompt": {
          "en": "How can visual style change across three narrative phases?",
          "nb": "Hvordan kan bildestilen endres gjennom tre fortellingsfaser?",
          "fr": "Comment le style visuel évolue-t-il en trois phases narratives ?",
          "pt": "Como pode o estilo visual mudar em três fases narrativas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer exact historical exposure from a modern copy",
              "nb": "Utled eksakt historisk eksponering fra en moderne kopi",
              "fr": "Déduire l’exposition historique exacte d’une copie moderne",
              "pt": "Deduzir exposição histórica exata de uma cópia moderna"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Create contrasting palettes and framing rules for each phase",
              "nb": "Lag kontrasterende paletter og utsnittsregler for hver fase",
              "fr": "Créer des palettes et cadrages distincts pour chaque phase",
              "pt": "Criar paletas e enquadramentos distintos para cada fase"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply one unchanging visual treatment to all phases",
              "nb": "Bruk én uforanderlig bildebehandling i alle faser",
              "fr": "Appliquer un traitement visuel identique à toutes les phases",
              "pt": "Aplicar um tratamento visual idêntico a todas as fases"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC describes John Alcott's visual progression and collaboration with Kubrick. Develop three original visual studies without inventing historical camera settings.",
          "nb": "ASC beskriver John Alcotts visuelle utvikling og samarbeid med Kubrick. Lag tre egne bildestudier uten å dikte opp historiske kamerainnstillinger.",
          "fr": "L’ASC décrit la progression visuelle d’Alcott et sa collaboration avec Kubrick. Créez trois études sans inventer les réglages historiques.",
          "pt": "A ASC descreve progressão visual de Alcott e colaboração com Kubrick. Crie três estudos sem inventar regulações históricas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "aclockworkorange-counterpoint",
        "area": "sound",
        "prompt": {
          "en": "How can musical counterpoint complicate a fictional image?",
          "nb": "Hvordan kan musikalsk kontrapunkt komplisere et fiktivt bilde?",
          "fr": "Comment le contrepoint musical complexifie-t-il une image fictive ?",
          "pt": "Como pode o contraponto musical complexificar uma imagem fictícia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume music must always duplicate the image's mood",
              "nb": "Anta at musikken alltid må gjenta bildets stemning",
              "fr": "Supposer que la musique doit toujours doubler l’ambiance de l’image",
              "pt": "Supor que a música deve sempre duplicar o ambiente da imagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy Wendy Carlos's recordings without authorization",
              "nb": "Kopier Wendy Carlos' innspillinger uten tillatelse",
              "fr": "Copier les enregistrements de Wendy Carlos sans autorisation",
              "pt": "Copiar gravações de Wendy Carlos sem autorização"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare contrasting original cues against a benign scene",
              "nb": "Sammenlign kontrasterende egne lydinnslag mot en ufarlig scene",
              "fr": "Comparer des motifs originaux contrastés sur une scène inoffensive",
              "pt": "Comparar motivos originais contrastantes numa cena inofensiva"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC and BFI document Carlos's electronic-classical contribution. Test original musical contrasts and discuss their ethical implications without reproducing the film's violence.",
          "nb": "ASC og BFI dokumenterer Carlos' elektronisk-klassiske bidrag. Test egne musikkontraster og drøft etiske konsekvenser uten å gjenskape filmens vold.",
          "fr": "L’ASC et le BFI documentent l’apport électronique et classique de Carlos. Testez des contrastes originaux et leurs implications éthiques sans reproduire la violence du film.",
          "pt": "A ASC e o BFI documentam o contributo eletrónico e clássico de Carlos. Teste contrastes originais e implicações éticas sem reproduzir a violência do filme."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_scenes_from_a_marriage_1974",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Television intimacy, performance and edition structure",
      "nb": "TV-intimitet, skuespill og utgavestruktur",
      "fr": "Intimité télévisuelle, jeu et structure des versions",
      "pt": "Intimidade televisiva, interpretação e estrutura das versões"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Scenes from a Marriage",
        "publisher": "Ingmar Bergman Foundation",
        "url": "https://www.ingmarbergman.se/en/production/scenes-marriage"
      },
      {
        "id": "s1",
        "title": "Media gallery for Scenes from a Marriage",
        "publisher": "Ingmar Bergman Foundation",
        "url": "https://www.ingmarbergman.se/en/production/scenes-marriage/media"
      },
      {
        "id": "s2",
        "title": "Scenes from a Marriage",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/710-scenes-from-a-marriage"
      },
      {
        "id": "s3",
        "title": "Scenes from a Marriage: Natural Antagonists",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/318-scenes-from-a-marriage-natural-antagonists"
      }
    ],
    "questions": [
      {
        "id": "scenesfromamarriage-format",
        "area": "research",
        "prompt": {
          "en": "How should a serial drama be planned for television?",
          "nb": "Hvordan bør en dramaserie planlegges for fjernsyn?",
          "fr": "Comment planifier une série dramatique pour la télévision ?",
          "pt": "Como planear uma série dramática para televisão?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume television requires a large theatrical budget",
              "nb": "Anta at TV krever et stort kinobudsjett",
              "fr": "Supposer que la télévision exige un grand budget de cinéma",
              "pt": "Supor que televisão exige um grande orçamento de cinema"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Map episode arcs and shared production resources",
              "nb": "Kartlegg episodeforløp og felles produksjonsressurser",
              "fr": "Cartographier les arcs des épisodes et ressources communes",
              "pt": "Mapear arcos dos episódios e recursos comuns"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all episodes as unrelated short films",
              "nb": "Behandle alle episoder som urelaterte kortfilmer",
              "fr": "Traiter chaque épisode comme un court métrage sans lien",
              "pt": "Tratar cada episódio como curta-metragem sem ligação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Bergman archive documents a six-part television conception and modest 16 mm production. Plan an original serial with coherent arcs and realistic resources.",
          "nb": "Bergman-arkivet dokumenterer en TV-serie i seks deler og beskjeden 16 mm-produksjon. Planlegg en egen serie med sammenhengende forløp og realistiske ressurser.",
          "fr": "Les archives Bergman documentent six épisodes et une production modeste en 16 mm. Planifiez une série originale cohérente et réaliste.",
          "pt": "O arquivo Bergman documenta seis episódios e produção modesta em 16 mm. Planeie uma série original coerente e realista."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "scenesfromamarriage-intimacy",
        "area": "camera",
        "prompt": {
          "en": "How can close-ups support nuanced dialogue performances?",
          "nb": "Hvordan kan nærbilder støtte nyansert dialogspill?",
          "fr": "Comment les gros plans soutiennent-ils un jeu dialogué nuancé ?",
          "pt": "Como podem grandes planos apoiar interpretação dialogada subtil?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use extreme close-ups regardless of performance needs",
              "nb": "Bruk ekstreme nærbilder uavhengig av spillets behov",
              "fr": "Employer des très gros plans sans tenir compte du jeu",
              "pt": "Usar grandes planos extremos sem atender à interpretação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace rehearsals with constant camera movement",
              "nb": "Erstatt prøvene med konstant kamerabevegelse",
              "fr": "Remplacer les répétitions par des mouvements constants",
              "pt": "Substituir ensaios por movimentos constantes de câmara"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate distance, pauses and actor eyelines during rehearsal",
              "nb": "Samordne avstand, pauser og blikkretning under prøvene",
              "fr": "Coordonner distance, pauses et regards pendant les répétitions",
              "pt": "Coordenar distância, pausas e olhares durante ensaios"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes intimate 16 mm close-ups, and the archive documents actor collaboration. Stage a new dialogue study that lets performance motivate framing.",
          "nb": "Criterion beskriver intime 16 mm-nærbilder, og arkivet dokumenterer skuespillersamarbeid. Lag en ny dialogstudie der spillet motiverer utsnitt.",
          "fr": "Criterion décrit les gros plans intimes en 16 mm et les archives documentent la collaboration. Créez une étude où le jeu motive le cadre.",
          "pt": "A Criterion descreve grandes planos íntimos em 16 mm e o arquivo documenta colaboração. Crie um estudo em que a interpretação motive o enquadramento."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "scenesfromamarriage-editions",
        "area": "research",
        "prompt": {
          "en": "How should the television and theatrical versions be compared?",
          "nb": "Hvordan bør TV- og kinoversjonene sammenlignes?",
          "fr": "Comment comparer les versions télévisée et cinéma ?",
          "pt": "Como comparar as versões televisiva e cinematográfica?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map episode material and the later theatrical compression",
              "nb": "Kartlegg episodemateriale og den senere kinoforkortelsen",
              "fr": "Cartographier les épisodes et la condensation pour le cinéma",
              "pt": "Mapear episódios e condensação posterior para cinema"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat both editions as identical in duration and rhythm",
              "nb": "Behandle begge utgaver som identiske i varighet og rytme",
              "fr": "Traiter les deux versions comme identiques en durée et rythme",
              "pt": "Tratar ambas versões como idênticas em duração e ritmo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume theatrical compression proves missing footage was lost",
              "nb": "Anta at kinoforkortelsen beviser at opptak gikk tapt",
              "fr": "Supposer que la condensation prouve la perte des images",
              "pt": "Supor que condensação prova perda de imagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion distinguishes the five-hour television edition from the three-hour theatrical cut. Compare structural choices using identified editions rather than guessing from isolated clips.",
          "nb": "Criterion skiller den fem timer lange TV-utgaven fra den tre timer lange kinoversjonen. Sammenlign struktur med identifiserte utgaver fremfor å gjette ut fra enkeltklipp.",
          "fr": "Criterion distingue la version télévisée de cinq heures du montage cinéma de trois heures. Comparez les structures à partir de versions identifiées.",
          "pt": "A Criterion distingue a versão televisiva de cinco horas do corte de cinema de três horas. Compare estruturas com versões identificadas."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_manhattan_1979",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Monochrome city imagery, widescreen staging and constructed effects",
      "nb": "Monokrome bybilder, bredformat og konstruerte effekter",
      "fr": "Ville monochrome, écran large et effets construits",
      "pt": "Cidade monocromática, ecrã largo e efeitos construídos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Manhattan",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/67202-MANHATTAN"
      },
      {
        "id": "s1",
        "title": "Manhattan",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/2108fa88-82d7-5b0f-a54a-887263d24059/manhattan"
      },
      {
        "id": "s2",
        "title": "Gordon Willis: a career in 12 pictures",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/gordon-willis-career-12-pictures"
      },
      {
        "id": "s3",
        "title": "Manhattan: Black-and-White Romantic Realism",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/manhattan-black-and-white-romantic-realism"
      }
    ],
    "questions": [
      {
        "id": "manhattan-monochrome",
        "area": "camera",
        "prompt": {
          "en": "How can monochrome photography express a city's romantic image?",
          "nb": "Hvordan kan svart-hvitt-foto uttrykke et romantisk bybilde?",
          "fr": "Comment la photographie monochrome exprime-t-elle une ville romantique ?",
          "pt": "Como pode fotografia monocromática exprimir uma cidade romântica?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all differences between foreground and background",
              "nb": "Fjern alle forskjeller mellom forgrunn og bakgrunn",
              "fr": "Supprimer toute différence entre premier plan et fond",
              "pt": "Eliminar diferenças entre primeiro plano e fundo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat stylized city imagery as complete documentary evidence",
              "nb": "Behandle stiliserte bybilder som fullstendig dokumentasjon",
              "fr": "Traiter les images stylisées comme preuve documentaire complète",
              "pt": "Tratar imagens estilizadas como prova documental completa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Design tonal separation and purposeful silhouettes",
              "nb": "Utform toneskille og målrettede silhuetter",
              "fr": "Concevoir séparation tonale et silhouettes motivées",
              "pt": "Conceber separação tonal e silhuetas motivadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI and ASC describe Willis's monochrome romantic realism and controlled exposure. Design an original city study that separates expressive imagery from documentary claims.",
          "nb": "BFI og ASC beskriver Willis' monokrome romantiske realisme og kontrollerte eksponering. Lag en egen bystudie som skiller uttrykksfulle bilder fra dokumentariske påstander.",
          "fr": "Le BFI et l’ASC décrivent le réalisme romantique monochrome de Willis. Créez une étude urbaine distinguant expression et preuve documentaire.",
          "pt": "O BFI e a ASC descrevem realismo romântico monocromático de Willis. Crie um estudo urbano distinguindo expressão de prova documental."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "manhattan-widescreen",
        "area": "camera",
        "prompt": {
          "en": "How can a wide frame carry a quiet conversation?",
          "nb": "Hvordan kan et bredt bilde bære en stille samtale?",
          "fr": "Comment un cadre large porte-t-il une conversation calme ?",
          "pt": "Como pode um quadro largo sustentar uma conversa calma?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compose performers and negative space within a stable frame",
              "nb": "Komponer skuespillere og tomrom innenfor et stabilt utsnitt",
              "fr": "Composer interprètes et espace vide dans un cadre stable",
              "pt": "Compor intérpretes e espaço vazio num quadro estável"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Center every performer in unrelated tight close-ups",
              "nb": "Sentrer hver skuespiller i urelaterte tette nærbilder",
              "fr": "Centrer chaque acteur dans des gros plans sans lien",
              "pt": "Centrar cada intérprete em grandes planos sem relação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the wide format determines acting style by itself",
              "nb": "Anta at bredformatet alene bestemmer spillestilen",
              "fr": "Supposer que le format large détermine seul le jeu",
              "pt": "Supor que formato largo determina sozinho a interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Willis's ASC account describes static widescreen staging and Panavision. Storyboard an original conversation where spacing and attention motivate the composition.",
          "nb": "Willis' ASC-beretning beskriver statisk bredformatsiscenesettelse og Panavision. Lag storyboard for en samtale der avstand og oppmerksomhet motiverer komposisjonen.",
          "fr": "Willis décrit à l’ASC le cadre large statique et Panavision. Créez un storyboard où distances et attention motivent la composition.",
          "pt": "Willis descreve à ASC encenação estática em ecrã largo e Panavision. Crie storyboard em que distâncias e atenção motivem a composição."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "manhattan-planetarium",
        "area": "research",
        "prompt": {
          "en": "How should a constructed planetarium image be documented?",
          "nb": "Hvordan bør et konstruert planetariumsbilde dokumenteres?",
          "fr": "Comment documenter une image de planétarium construite ?",
          "pt": "Como documentar uma imagem de planetário construída?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat modern digital effects as the original process",
              "nb": "Behandle moderne digitale effekter som originalprosessen",
              "fr": "Traiter les effets numériques comme procédé original",
              "pt": "Tratar efeitos digitais modernos como processo original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate location references, practical elements and composites",
              "nb": "Skill stedsreferanser, praktiske elementer og kompositter",
              "fr": "Distinguer références de lieux, éléments pratiques et composites",
              "pt": "Distinguir referências de locais, elementos práticos e compósitos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all celestial imagery was filmed directly in space",
              "nb": "Anta at alle himmelbilder ble filmet direkte i verdensrommet",
              "fr": "Supposer que toutes les images célestes furent filmées dans l’espace",
              "pt": "Supor que todas as imagens celestes foram filmadas no espaço"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC records Willis's use of mattes, mirrors and models for the planetarium. Plan an original safe tabletop study while preserving the distinction between historical and modern techniques.",
          "nb": "ASC dokumenterer Willis' bruk av masker, speil og modeller i planetariet. Lag en egen trygg bordmodellstudie og skill historiske og moderne teknikker.",
          "fr": "L’ASC documente caches, miroirs et maquettes du planétarium. Planifiez une étude originale sur table distinguant techniques historiques et modernes.",
          "pt": "A ASC documenta máscaras, espelhos e modelos do planetário. Planeie um estudo original de mesa distinguindo técnicas históricas e modernas."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_raging_bull_1980",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Contrasting visual registers, editing and version evidence",
      "nb": "Kontrasterende bilderegistre, klipping og utgavebelegg",
      "fr": "Registres visuels contrastés, montage et versions",
      "pt": "Registos visuais contrastantes, montagem e versões"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Raging Bull",
        "publisher": "AFI Catalog of Feature Films",
        "url": "https://catalog.afi.com/Film/54882-RAGING-BULL"
      },
      {
        "id": "s1",
        "title": "In Memoriam: Michael Chapman, ASC (1935-2020)",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/news/in-memoriam-michael-chapman-asc/"
      },
      {
        "id": "s2",
        "title": "Raging Bull (1980)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/0caff9bf-8c22-568b-b70e-c211b22dba41/raging-bull"
      },
      {
        "id": "s3",
        "title": "The 53rd Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1981"
      }
    ],
    "questions": [
      {
        "id": "ragingbull-registers",
        "area": "camera",
        "prompt": {
          "en": "How can domestic scenes and performance scenes differ visually?",
          "nb": "Hvordan kan hjemlige scener og oppvisningsscener skille seg visuelt?",
          "fr": "Comment différencier visuellement scènes domestiques et de spectacle ?",
          "pt": "Como diferenciar visualmente cenas domésticas e de espetáculo?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Contrast observational framing with stylized movement",
              "nb": "Sett observerende utsnitt opp mot stilisert bevegelse",
              "fr": "Opposer cadrage d’observation et mouvement stylisé",
              "pt": "Contrastar enquadramento de observação com movimento estilizado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply identical framing and movement to every scene",
              "nb": "Bruk identisk utsnitt og bevegelse i alle scener",
              "fr": "Appliquer cadrage et mouvement identiques partout",
              "pt": "Aplicar enquadramento e movimento idênticos em todas as cenas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Recreate physical blows to obtain realism",
              "nb": "Gjenskap fysiske slag for å oppnå realisme",
              "fr": "Reproduire des coups physiques pour obtenir du réalisme",
              "pt": "Recriar golpes físicos para obter realismo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Chapman describes naturalistic domestic scenes versus balletic ring imagery. Compare two original non-contact movement studies without reproducing dangerous action.",
          "nb": "Chapman beskriver naturalistiske hjemmescener mot ballettaktige ringbilder. Sammenlign to egne kontaktfrie bevegelsesstudier uten å gjenskape farlig handling.",
          "fr": "Chapman décrit scènes domestiques naturalistes et images chorégraphiques du ring. Comparez deux études originales sans contact ni action dangereuse.",
          "pt": "Chapman descreve cenas domésticas naturalistas e imagens coreográficas do ringue. Compare dois estudos originais sem contacto nem ação perigosa."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "ragingbull-editing",
        "area": "sound",
        "prompt": {
          "en": "How can expressive sound change the rhythm of edited movement?",
          "nb": "Hvordan kan uttrykksfull lyd endre rytmen i klippet bevegelse?",
          "fr": "Comment le son expressif modifie-t-il le rythme du mouvement monté ?",
          "pt": "Como pode som expressivo alterar o ritmo do movimento montado?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the contribution of the editor and sound team",
              "nb": "Ignorer bidragene fra klipper og lydteam",
              "fr": "Ignorer l’apport du montage et de l’équipe son",
              "pt": "Ignorar contributos da montagem e equipa de som"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original sound accents with silence and image cuts",
              "nb": "Sammenlign egne lydaksenter med stillhet og bildeklipp",
              "fr": "Comparer accents sonores originaux, silence et coupes",
              "pt": "Comparar acentos sonoros originais, silêncio e cortes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every recorded sound must match a visible action",
              "nb": "Anta at alle lyder må samsvare med en synlig handling",
              "fr": "Supposer que tout son correspond à une action visible",
              "pt": "Supor que todo som corresponde a uma ação visível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents expressive sound and the Academy recognizes Schoonmaker's editing. Design an original benign movement montage that credits editing and sound separately.",
          "nb": "AFI dokumenterer uttrykksfull lyd, og Academy anerkjenner Schoonmakers klipping. Lag en egen ufarlig bevegelsesmontasje med separat kreditering av klipp og lyd.",
          "fr": "L’AFI documente le son expressif et l’Académie distingue le montage de Schoonmaker. Créez un montage inoffensif créditant séparément image et son.",
          "pt": "A AFI documenta som expressivo e a Academia distingue montagem de Schoonmaker. Crie uma montagem inofensiva creditando separadamente montagem e som."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "ragingbull-home_movies",
        "area": "research",
        "prompt": {
          "en": "How should color home-movie material be distinguished from the main feature?",
          "nb": "Hvordan bør fargede hjemmefilmopptak skilles fra hovedfilmen?",
          "fr": "Comment distinguer les films familiaux en couleur du long métrage principal ?",
          "pt": "Como distinguir filmes domésticos a cores da longa-metragem principal?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every scene was captured in the same format",
              "nb": "Anta at alle scener ble tatt opp i samme format",
              "fr": "Supposer que toutes les scènes ont le même format",
              "pt": "Supor que todas as cenas foram captadas no mesmo formato"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat fictional home movies as the actual family's archive",
              "nb": "Behandle fiktive hjemmefilmer som familiens faktiske arkiv",
              "fr": "Traiter les films familiaux fictifs comme archives réelles",
              "pt": "Tratar filmes domésticos fictícios como arquivo real"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record the separate image format and narrative function",
              "nb": "Registrer separat bildeformat og fortellingsfunksjon",
              "fr": "Noter le format distinct et sa fonction narrative",
              "pt": "Registar formato de imagem distinto e função narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Chapman's ASC account distinguishes monochrome photography from separate color 16 mm home-movie material. Label original fictional inserts by format and narrative purpose.",
          "nb": "Chapmans ASC-beretning skiller svart-hvitt-foto fra separat 16 mm-hjemmefilmmateriale i farger. Merk egne fiktive innslag etter format og fortellingsformål.",
          "fr": "Chapman distingue à l’ASC la photographie monochrome des films familiaux couleur en 16 mm. Identifiez vos inserts fictifs par format et fonction.",
          "pt": "Chapman distingue à ASC fotografia monocromática de filmes domésticos a cores em 16 mm. Identifique inserções fictícias por formato e função."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_raiders_of_the_lost_ark_1981",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Storyboard coordination, optical effects and layered sound",
      "nb": "Storyboard-samordning, optiske effekter og lagdelt lyd",
      "fr": "Coordination du storyboard, effets optiques et son stratifié",
      "pt": "Coordenação de storyboard, efeitos óticos e som em camadas"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Raiders of the Lost Ark",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/67250-RAIDERS-OF-THE-LOST-ARK"
      },
      {
        "id": "s1",
        "title": "Of Narrow Misses and Close Calls: Raiders of the Lost Ark — Directing",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/flashback-raiders-of-the-lost-ark-directing/"
      },
      {
        "id": "s2",
        "title": "Raiders of the Lost Ark",
        "publisher": "Industrial Light & Magic",
        "url": "https://www.ilm.com/vfx/raiders-of-the-lost-ark/"
      },
      {
        "id": "s3",
        "title": "The 54th Academy Awards | 1982",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1982"
      },
      {
        "id": "s4",
        "title": "Inside the World of Indiana Jones",
        "publisher": "Lucasfilm",
        "url": "https://www.lucasfilm.com/news/inside-the-world-of-indiana-jones/"
      },
      {
        "id": "s5",
        "title": "All Four Indiana Jones Movie Adventures on 4K Ultra HD for the First Time",
        "publisher": "Lucasfilm",
        "url": "https://www.lucasfilm.com/news/all-four-indiana-jones-movie-adventures-on-4k-ultra-hd-for-the-first-time/"
      }
    ],
    "questions": [
      {
        "id": "raidersofthelostark-planning",
        "area": "research",
        "prompt": {
          "en": "How should a complex adventure production coordinate separate departments?",
          "nb": "Hvordan bør en kompleks eventyrfilm samordne ulike avdelinger?",
          "fr": "Comment coordonner les métiers d’une production d’aventure complexe ?",
          "pt": "Como coordenar departamentos de uma produção de aventura complexa?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Attempt dangerous stunts to validate an initial sketch",
              "nb": "Forsøk farlige stunt for å validere en første skisse",
              "fr": "Tenter des cascades dangereuses pour valider un croquis",
              "pt": "Tentar acrobacias perigosas para validar um esboço"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Share storyboards, visual references and continuity notes",
              "nb": "Del storyboard, bildereferanser og kontinuitetsnotater",
              "fr": "Partager storyboards, références visuelles et notes de raccord",
              "pt": "Partilhar storyboards, referências visuais e notas de continuidade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Let each department independently redefine the visual plan",
              "nb": "La hver avdeling omdefinere bildeplanen uavhengig",
              "fr": "Laisser chaque métier redéfinir seul le plan visuel",
              "pt": "Deixar cada departamento redefinir sozinho o plano visual"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Spielberg's production account documents extensive storyboarding and crew collaboration. Plan a harmless fictional sequence on paper, not an actual stunt.",
          "nb": "Spielbergs produksjonsberetning dokumenterer omfattende storyboardarbeid og samarbeid. Planlegg en ufarlig fiktiv sekvens på papir, ikke et faktisk stunt.",
          "fr": "Le récit de Spielberg documente storyboards détaillés et collaboration. Planifiez une séquence fictive inoffensive sur papier, sans cascade réelle.",
          "pt": "O relato de Spielberg documenta storyboards extensos e colaboração. Planeie uma sequência fictícia inofensiva no papel, sem acrobacia real."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "raidersofthelostark-composite",
        "area": "camera",
        "prompt": {
          "en": "How can separate miniature and matte images form one fictional effect?",
          "nb": "Hvordan kan separate miniatyr- og maskebilder danne én fiktiv effekt?",
          "fr": "Comment maquettes et caches distincts composent-ils un effet fictif ?",
          "pt": "Como podem miniaturas e máscaras formar um efeito fictício?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume optical compositing needs no alignment",
              "nb": "Anta at optisk kompositering ikke trenger justering",
              "fr": "Supposer que le compositing optique n’exige aucun alignement",
              "pt": "Supor que composição ótica dispensa alinhamento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Describe a modern digital composite as the historical process",
              "nb": "Beskriv et moderne digitalt kompositt som historisk prosess",
              "fr": "Décrire un composite numérique comme procédé historique",
              "pt": "Descrever um compósito digital como processo histórico"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan matching perspective, light and composite layers",
              "nb": "Planlegg samsvarende perspektiv, lys og komposittlag",
              "fr": "Prévoir perspective, lumière et couches de composition cohérentes",
              "pt": "Planear perspetiva, luz e camadas de composição coerentes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ILM documents matte painting, puppet photography and multi-pass compositing. Design an original tabletop effect and distinguish historical optical work from digital alternatives.",
          "nb": "ILM dokumenterer matte painting, dukkefoto og kompositering i flere pass. Lag en egen bordmodelleffekt og skill historisk optisk arbeid fra digitale alternativer.",
          "fr": "ILM documente peintures sur cache, marionnettes et compositing multipasse. Concevez un effet original sur table en distinguant optique et numérique.",
          "pt": "A ILM documenta pinturas de máscara, marionetas e composição em várias passagens. Crie um efeito original de mesa distinguindo ótica e digital."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "raidersofthelostark-foley",
        "area": "sound",
        "prompt": {
          "en": "How can layered recordings suggest a fictional environment?",
          "nb": "Hvordan kan lagdelte opptak antyde et fiktivt miljø?",
          "fr": "Comment des enregistrements superposés évoquent-ils un environnement fictif ?",
          "pt": "Como podem gravações em camadas sugerir um ambiente fictício?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record safe original textures and combine them by function",
              "nb": "Ta opp trygge egne lydteksturer og kombiner dem etter funksjon",
              "fr": "Enregistrer des textures originales sûres et les combiner par fonction",
              "pt": "Gravar texturas originais seguras e combiná-las por função"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reuse recognizable franchise effects without permission",
              "nb": "Gjenbruk gjenkjennelige franchiseeffekter uten tillatelse",
              "fr": "Réutiliser des effets reconnaissables sans autorisation",
              "pt": "Reutilizar efeitos reconhecíveis sem autorização"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute sound effects and music to the same role",
              "nb": "Tilskriv lydeffekter og musikk samme fagrolle",
              "fr": "Attribuer effets et musique au même métier",
              "pt": "Atribuir efeitos e música à mesma função"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lucasfilm describes Burtt's layered source recordings, and the Academy recognizes distinct sound contributions. Create an original sound palette using benign household materials.",
          "nb": "Lucasfilm beskriver Burtts lagdelte kildeopptak, og Academy anerkjenner ulike lydbidrag. Lag en egen lydpalett med ufarlige husholdningsmaterialer.",
          "fr": "Lucasfilm décrit les enregistrements superposés de Burtt et l’Académie distingue les métiers du son. Créez une palette originale avec des matériaux domestiques sûrs.",
          "pt": "A Lucasfilm descreve gravações em camadas de Burtt e a Academia distingue contributos sonoros. Crie uma paleta original com materiais domésticos seguros."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_blade_runner_1982",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Retrofit city design, layered lighting and release history",
      "nb": "Påbygget bydesign, lagdelt lys og utgivelseshistorie",
      "fr": "Ville réaménagée, lumière stratifiée et versions",
      "pt": "Cidade readaptada, luz em camadas e versões"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Blade Runner",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/68260-BLADE-RUNNER"
      },
      {
        "id": "s1",
        "title": "Blade Runner: Cronenweth's Photography",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/blade-runner-cronenweths-photography/"
      },
      {
        "id": "s2",
        "title": "Discussing the Set Design of Blade Runner",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/blade-runner-set-design/"
      },
      {
        "id": "s3",
        "title": "Blade Runner: Special Photographic Effects",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/blade-runner-photographic-effects/"
      }
    ],
    "questions": [
      {
        "id": "bladerunner-retrofit",
        "area": "research",
        "prompt": {
          "en": "How can a fictional future city feel accumulated over time?",
          "nb": "Hvordan kan en fiktiv fremtidsby virke oppbygget over tid?",
          "fr": "Comment une ville futuriste fictive paraît-elle construite au fil du temps ?",
          "pt": "Como pode uma cidade futura fictícia parecer acumulada ao longo do tempo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Make every building identical and newly constructed",
              "nb": "Gjør alle bygninger identiske og nybygde",
              "fr": "Rendre tous les bâtiments identiques et neufs",
              "pt": "Tornar todos os edifícios idênticos e novos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the film's recognizable city designs exactly",
              "nb": "Kopier filmens gjenkjennelige bydesign nøyaktig",
              "fr": "Copier exactement les décors reconnaissables du film",
              "pt": "Copiar exatamente os cenários reconhecíveis do filme"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Layer old structures with distinct new functional additions",
              "nb": "Legg ulike nye funksjonelle påbygg til gamle strukturer",
              "fr": "Superposer structures anciennes et ajouts fonctionnels nouveaux",
              "pt": "Sobrepor estruturas antigas e novos elementos funcionais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC design reporting describes Paull and Mead's retrofit city logic. Sketch a distinct fictional streetscape, recognizing the design as fiction rather than prediction.",
          "nb": "ASCs scenografirapport beskriver Paull og Meads påbyggingslogikk. Skisser et eget fiktivt gatebilde og forstå designen som fiksjon, ikke spådom.",
          "fr": "L’ASC décrit la logique de transformation urbaine de Paull et Mead. Dessinez une rue fictive distincte sans prendre le design pour une prédiction.",
          "pt": "A ASC descreve a lógica de readaptação urbana de Paull e Mead. Esboce uma rua fictícia distinta sem tomar o design por previsão."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "bladerunner-light",
        "area": "camera",
        "prompt": {
          "en": "How can layered light make a fictional interior visually deep?",
          "nb": "Hvordan kan lagdelt lys gi et fiktivt interiør visuell dybde?",
          "fr": "Comment la lumière stratifiée donne-t-elle de la profondeur à un intérieur fictif ?",
          "pt": "Como pode luz em camadas dar profundidade a um interior fictício?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan backlight and practical sources across depth planes",
              "nb": "Planlegg motlys og praktiske lyskilder i ulike dybdeplan",
              "fr": "Prévoir contre-jour et sources pratiques sur plusieurs plans",
              "pt": "Planear contraluz e fontes práticas em vários planos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Illuminate every depth plane with identical flat light",
              "nb": "Belys alle dybdeplan med identisk flatt lys",
              "fr": "Éclairer tous les plans d’une lumière plate identique",
              "pt": "Iluminar todos os planos com luz plana idêntica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer exact historical lighting ratios from a still image",
              "nb": "Utled eksakte historiske lysforhold fra ett stillbilde",
              "fr": "Déduire les rapports historiques exacts d’une image fixe",
              "pt": "Deduzir relações históricas exatas de uma imagem fixa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Contemporary ASC reporting documents Cronenweth's backlight, practical neon and reflective light. Design a safe original lighting diagram without inventing exact historical settings.",
          "nb": "Samtidig ASC-rapportering dokumenterer Cronenweths motlys, praktiske neonlys og reflekslys. Lag et trygt eget lysskjema uten oppdiktede historiske innstillinger.",
          "fr": "L’ASC documente contre-jour, néons pratiques et lumière réfléchie de Cronenweth. Créez un schéma sûr sans inventer les réglages historiques.",
          "pt": "A ASC documenta contraluz, néon prático e luz refletida de Cronenweth. Crie um esquema seguro sem inventar regulações históricas."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "bladerunner-cuts",
        "area": "research",
        "prompt": {
          "en": "How should multiple release cuts be compared responsibly?",
          "nb": "Hvordan bør ulike utgivelsesversjoner sammenlignes ansvarlig?",
          "fr": "Comment comparer plusieurs montages sortis de manière rigoureuse ?",
          "pt": "Como comparar várias versões lançadas de forma rigorosa?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer the exact cut from a single publicity still",
              "nb": "Utled eksakt utgave fra ett reklamebilde",
              "fr": "Déduire le montage exact d’une seule photo promotionnelle",
              "pt": "Deduzir a versão exata de uma única foto promocional"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Identify edition, runtime and documented editorial differences",
              "nb": "Identifiser utgave, spilletid og dokumenterte klippeforskjeller",
              "fr": "Identifier version, durée et différences de montage documentées",
              "pt": "Identificar versão, duração e diferenças de montagem documentadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all releases have identical picture and sound",
              "nb": "Anta at alle utgaver har identisk bilde og lyd",
              "fr": "Supposer que toutes les versions ont image et son identiques",
              "pt": "Supor que todas as versões têm imagem e som idênticos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records multiple runtimes and cut histories. Compare explicitly identified editions rather than treating a later reissue as the original theatrical version.",
          "nb": "AFI dokumenterer flere spilletider og klippehistorier. Sammenlign eksplisitt identifiserte utgaver fremfor å behandle en senere gjenutgivelse som original kinoversjon.",
          "fr": "L’AFI documente plusieurs durées et montages. Comparez des versions identifiées sans prendre une ressortie pour la version cinéma originale.",
          "pt": "A AFI documenta várias durações e montagens. Compare versões identificadas sem tomar uma reedição pela versão de cinema original."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_et_the_extra_terrestrial_1982",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Child-height perspective, practical character and effect planning",
      "nb": "Barnehøyt perspektiv, praktisk figur og effektplanlegging",
      "fr": "Perspective à hauteur d’enfant, personnage pratique et effets",
      "pt": "Perspetiva à altura da criança, personagem prática e efeitos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "E.T.: The Extra-Terrestrial",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/67140-ET-THEEXTRA-TERRESTRIAL"
      },
      {
        "id": "s1",
        "title": "The Cinematography of E.T.",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/flashback-the-cinematography-of-e-t-1"
      },
      {
        "id": "s2",
        "title": "Steven Spielberg and E.T. the Extra-Terrestrial",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/spielberg-et-the-extraterrestrial"
      },
      {
        "id": "s3",
        "title": "E.T. The Extra-Terrestrial — 1982 (55th Academy Awards)",
        "publisher": "Academy Awards Database",
        "url": "https://awardsdatabase.oscars.org/search/getresults?query=%7B%22FilmTitle%22%3A%22e.t.%22%2C%22Sort%22%3A%222-Film%20Title-Alpha%22%2C%22AwardShowNumberFrom%22%3A0%2C%22AwardShowNumberTo%22%3A0%2C%22Search%22%3A30%7D"
      }
    ],
    "questions": [
      {
        "id": "ettheextraterrestrial-height",
        "area": "camera",
        "prompt": {
          "en": "How can camera height express a child's experience of a room?",
          "nb": "Hvordan kan kamerahøyde uttrykke barnets opplevelse av et rom?",
          "fr": "Comment la hauteur de caméra traduit-elle l’expérience d’une pièce par un enfant ?",
          "pt": "Como pode altura da câmara exprimir experiência infantil de uma sala?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare low viewpoints and selective framing of adult figures",
              "nb": "Sammenlign lave synspunkter og selektivt utsnitt av voksne figurer",
              "fr": "Comparer points de vue bas et cadrages sélectifs des adultes",
              "pt": "Comparar pontos de vista baixos e enquadramentos seletivos de adultos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the same elevated angle for every viewpoint",
              "nb": "Bruk samme høye vinkel for alle perspektiver",
              "fr": "Employer le même angle élevé pour tous les regards",
              "pt": "Usar o mesmo ângulo elevado para todos os pontos de vista"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume camera height alone creates emotional identification",
              "nb": "Anta at kamerahøyde alene skaper følelsesmessig identifikasjon",
              "fr": "Supposer que la hauteur seule crée l’identification émotionnelle",
              "pt": "Supor que altura da câmara cria sozinha identificação emocional"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Daviau's contemporary ASC account documents the child-height camera strategy. Design a new room study that links camera position with performance and attention.",
          "nb": "Daviau beskriver barnehøy kameraføring i en samtidig ASC-beretning. Lag en ny romstudie som knytter kameraposisjon til skuespill og oppmerksomhet.",
          "fr": "Daviau documente à l’ASC la caméra à hauteur d’enfant. Créez une étude originale reliant position, jeu et attention.",
          "pt": "Daviau documenta à ASC a câmara à altura da criança. Crie um estudo original ligando posição, interpretação e atenção."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "ettheextraterrestrial-character",
        "area": "research",
        "prompt": {
          "en": "How should a practical fictional character's performance be credited?",
          "nb": "Hvordan bør en praktisk fiktiv figurs fremføring krediteres?",
          "fr": "Comment créditer le jeu d’un personnage fictif pratique ?",
          "pt": "Como creditar a interpretação de uma personagem fictícia prática?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume all character imagery was digitally animated",
              "nb": "Anta at alle figurbilder ble digitalt animert",
              "fr": "Supposer que toutes les images du personnage sont numériques",
              "pt": "Supor que todas as imagens da personagem são animação digital"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record design, movement performance, voice and image roles",
              "nb": "Registrer design, bevegelsesspill, stemme og bildefagroller",
              "fr": "Consigner design, mouvements, voix et métiers de l’image",
              "pt": "Registar design, movimentos, voz e funções de imagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute all performance solely to the creature designer",
              "nb": "Tilskriv alt spill utelukkende figurdesigneren",
              "fr": "Attribuer tout le jeu au seul concepteur de la créature",
              "pt": "Atribuir toda interpretação apenas ao designer da criatura"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI identifies Rambaldi's creature work and distinct movement, voice and effects credits. Plan a simple original puppet scene that recognizes each contribution.",
          "nb": "AFI identifiserer Rambaldis figurarbeid og separate bevegelses-, stemme- og effektbidrag. Planlegg en enkel egen dukkescene som anerkjenner hvert bidrag.",
          "fr": "L’AFI identifie le travail de Rambaldi et les crédits distincts de mouvement, voix et effets. Concevez une scène originale de marionnette reconnaissant chaque apport.",
          "pt": "A AFI identifica trabalho de Rambaldi e créditos distintos de movimento, voz e efeitos. Planeie uma cena original de marioneta reconhecendo cada contributo."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "ettheextraterrestrial-previsualization",
        "area": "camera",
        "prompt": {
          "en": "Which scenes benefit most from detailed effect storyboards?",
          "nb": "Hvilke scener har mest nytte av detaljerte effektstoryboards?",
          "fr": "Quelles scènes bénéficient le plus de storyboards d’effets détaillés ?",
          "pt": "Que cenas beneficiam mais de storyboards de efeitos detalhados?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Require identical planning detail for every ordinary conversation",
              "nb": "Krev identisk planleggingsdetalj for alle vanlige samtaler",
              "fr": "Exiger le même détail pour chaque conversation ordinaire",
              "pt": "Exigir detalhe idêntico para cada conversa comum"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Leave complex composite alignment entirely to chance",
              "nb": "Overlat kompleks komposittjustering helt til tilfeldighetene",
              "fr": "Laisser l’alignement complexe au hasard",
              "pt": "Deixar alinhamento complexo inteiramente ao acaso"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Previsualize composite-dependent shots while allowing ordinary scenes flexibility",
              "nb": "Forhåndsvisualiser komposittavhengige bilder og gi hverdagsscener fleksibilitet",
              "fr": "Prévisualiser les plans composites et garder de la souplesse ailleurs",
              "pt": "Pré-visualizar planos compósitos e manter flexibilidade nas cenas comuns"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Spielberg describes ordinary scenes left unstoryboarded and precisely planned ILM shots. Select the planning level according to the needs of a new fictional scene.",
          "nb": "Spielberg beskriver vanlige scener uten storyboard og presist planlagte ILM-bilder. Velg planleggingsnivå etter behovene i en ny fiktiv scene.",
          "fr": "Spielberg décrit des scènes ordinaires sans storyboard et des plans ILM précis. Choisissez le niveau de préparation selon les besoins d’une scène originale.",
          "pt": "Spielberg descreve cenas comuns sem storyboard e planos ILM precisos. Escolha o nível de preparação conforme as necessidades de uma cena original."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_aliens_1986",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Effects department coordination, practical imagery and sequel form",
      "nb": "Samordning av effektavdelinger, praktiske bilder og oppfølgerform",
      "fr": "Coordination des effets, images pratiques et forme de suite",
      "pt": "Coordenação de efeitos, imagens práticas e forma de sequela"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Aliens",
        "publisher": "AFI Catalog of Feature Films",
        "url": "https://catalog.afi.com/Film/68347-ALIENS"
      },
      {
        "id": "s1",
        "title": "Aliens Lands at Academy to Inaugurate Prime Tech Series",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://digitalcollections.oscars.org/digital/api/collection/p15759coll4/id/3819/download"
      },
      {
        "id": "s2",
        "title": "The 59th Academy Awards (1987)",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1987"
      },
      {
        "id": "s3",
        "title": "Aliens (1986)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/f6770cd5-0ccb-5c65-be26-b5a920c05edf/aliens"
      }
    ],
    "questions": [
      {
        "id": "aliens-departments",
        "area": "research",
        "prompt": {
          "en": "How should a production distinguish creature, miniature and optical effects teams?",
          "nb": "Hvordan bør en produksjon skille figur-, miniatyr- og optiske effektteam?",
          "fr": "Comment distinguer équipes de créatures, maquettes et effets optiques ?",
          "pt": "Como distinguir equipas de criaturas, miniaturas e efeitos óticos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the awards list as a complete shot-by-shot workflow",
              "nb": "Behandle prislisten som en fullstendig arbeidsflyt bilde for bilde",
              "fr": "Traiter les récompenses comme processus complet plan par plan",
              "pt": "Tratar os prémios como processo completo plano a plano"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Map responsibilities and handoffs between distinct departments",
              "nb": "Kartlegg ansvar og overleveringer mellom ulike avdelinger",
              "fr": "Cartographier responsabilités et échanges entre métiers distincts",
              "pt": "Mapear responsabilidades e passagens entre departamentos distintos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Credit every effect to a single department without evidence",
              "nb": "Krediter alle effekter én avdeling uten dokumentasjon",
              "fr": "Créditer tous les effets à un seul métier sans preuve",
              "pt": "Creditar todos os efeitos a um departamento sem provas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Academy retrospective distinguishes creature, miniature and visual-effects supervision. Draw an original effects workflow with explicit credits and no invented historical shot assignments.",
          "nb": "Academys retrospektiv skiller figur-, miniatyr- og visuelle effektansvar. Tegn en egen effektflyt med tydelig kreditering uten oppdiktede historiske bildelister.",
          "fr": "La rétrospective de l’Académie distingue créatures, maquettes et effets visuels. Dessinez un processus original avec crédits explicites sans inventer les plans historiques.",
          "pt": "A retrospetiva da Academia distingue criaturas, miniaturas e efeitos visuais. Desenhe um fluxo original com créditos explícitos sem inventar planos históricos."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "aliens-practical",
        "area": "camera",
        "prompt": {
          "en": "How can practical imagery and optical composites be compared?",
          "nb": "Hvordan kan praktiske bilder og optiske kompositter sammenlignes?",
          "fr": "Comment comparer images pratiques et composites optiques ?",
          "pt": "Como comparar imagens práticas e compósitos óticos?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every effect was produced using one technique",
              "nb": "Anta at alle effekter ble produsert med én teknikk",
              "fr": "Supposer que tous les effets relèvent d’une seule technique",
              "pt": "Supor que todos os efeitos foram produzidos com uma técnica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use hazardous mechanical effects for a classroom demonstration",
              "nb": "Bruk farlige mekaniske effekter i en undervisningsdemonstrasjon",
              "fr": "Employer des effets mécaniques dangereux en démonstration",
              "pt": "Usar efeitos mecânicos perigosos numa demonstração didática"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test safe small-scale models and compare layering options",
              "nb": "Test trygge småskalaprototyper og sammenlign lagdelingsvalg",
              "fr": "Tester des maquettes sûres et comparer les options de couches",
              "pt": "Testar modelos seguros e comparar opções de camadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Academy technical account describes extensive in-camera solutions alongside optical compositing. Compare harmless tabletop alternatives while documenting their limitations.",
          "nb": "Academys tekniske beretning beskriver løsninger i kamera sammen med optisk kompositering. Sammenlign ufarlige bordmodellalternativer og dokumenter begrensningene.",
          "fr": "L’Académie décrit solutions à la prise de vues et compositing optique. Comparez des alternatives inoffensives sur table en documentant leurs limites.",
          "pt": "A Academia descreve soluções na câmara e composição ótica. Compare alternativas inofensivas de mesa documentando as limitações."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "aliens-sequel",
        "area": "research",
        "prompt": {
          "en": "How can a sequel change genre emphasis while retaining continuity?",
          "nb": "Hvordan kan en oppfølger endre sjangervekt og samtidig bevare kontinuitet?",
          "fr": "Comment une suite change-t-elle d’accent générique tout en gardant la continuité ?",
          "pt": "Como pode uma sequela mudar a ênfase de género mantendo continuidade?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare narrative rhythm and ensemble roles in two fictional concepts",
              "nb": "Sammenlign fortellingsrytme og ensembleroller i to fiktive konsepter",
              "fr": "Comparer rythme narratif et rôles collectifs dans deux concepts fictifs",
              "pt": "Comparar ritmo narrativo e papéis coletivos em dois conceitos fictícios"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a sequel must reproduce every scene from its predecessor",
              "nb": "Anta at en oppfølger må gjenta alle scener fra forgjengeren",
              "fr": "Supposer qu’une suite doit reproduire toutes les scènes précédentes",
              "pt": "Supor que uma sequela deve reproduzir todas as cenas anteriores"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat genre labels as proof of specific production techniques",
              "nb": "Behandle sjangerbetegnelser som bevis på bestemte produksjonsteknikker",
              "fr": "Prendre les genres pour preuve de techniques précises",
              "pt": "Tomar géneros como prova de técnicas específicas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI identifies the sequel's shift toward action, and AFI documents its distinct development. Compare original narrative concepts without treating reception labels as production evidence.",
          "nb": "BFI identifiserer oppfølgerens dreining mot action, og AFI dokumenterer dens eget utviklingsarbeid. Sammenlign egne fortellingskonsepter uten å behandle sjangermerking som produksjonsbevis.",
          "fr": "Le BFI identifie le virage vers l’action et l’AFI documente le développement distinct. Comparez des concepts originaux sans prendre les genres pour preuves de production.",
          "pt": "O BFI identifica a mudança para ação e a AFI documenta desenvolvimento distinto. Compare conceitos originais sem tomar géneros por provas de produção."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_mephisto_1981",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Adaptation, costume and international co-production",
      "nb": "Adaptasjon, kostymer og internasjonal samproduksjon",
      "fr": "Adaptation, costumes et coproduction internationale",
      "pt": "Adaptação, figurinos e coprodução internacional"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Mephisto",
        "publisher": "National Film Institute Hungary",
        "url": "https://nfi.hu/en/films/mephisto.html"
      },
      {
        "id": "s1",
        "title": "Mephisto – How it was made",
        "publisher": "National Film Institute Hungary",
        "url": "https://nfi.hu/articles/show/mephisto-2"
      },
      {
        "id": "s2",
        "title": "Mephisto",
        "publisher": "filmportal.de / DFF",
        "url": "https://www.filmportal.de/film/mephisto_1abf2db05a9d4771a558e133ed8d237f"
      },
      {
        "id": "s3",
        "title": "Mephisto",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/mephisto/"
      },
      {
        "id": "s4",
        "title": "National Film Institute Film Archive Sales Catalogue – Mephisto",
        "publisher": "National Film Institute Hungary Film Archive",
        "url": "https://nfi.hu/file/documents/2/2498/filmarchivum_sales_catalog_ok_boritoval.pdf"
      }
    ],
    "questions": [
      {
        "id": "mephisto-adaptation",
        "area": "research",
        "prompt": {
          "en": "How should a literary adaptation about political compromise be developed?",
          "nb": "Hvordan bør en romanadaptasjon om politiske kompromisser utvikles?",
          "fr": "Comment développer une adaptation littéraire sur le compromis politique ?",
          "pt": "Como desenvolver uma adaptação literária sobre compromisso político?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare the novel, screenplay and historical context",
              "nb": "Sammenlign romanen, manuset og historisk kontekst",
              "fr": "Comparer roman, scénario et contexte historique",
              "pt": "Comparar romance, argumento e contexto histórico"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the fictional protagonist as a complete historical biography",
              "nb": "Behandle den fiktive hovedfiguren som en fullstendig historisk biografi",
              "fr": "Traiter le protagoniste fictif comme une biographie complète",
              "pt": "Tratar o protagonista fictício como biografia completa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the source novel during development",
              "nb": "Ignorer forelegget under utviklingen",
              "fr": "Ignorer le roman source pendant le développement",
              "pt": "Ignorar o romance de origem durante o desenvolvimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "NFI traces Durniok's involvement and the Klaus Mann source novel. Separate the adaptation's fictional construction from independent historical evidence.",
          "nb": "NFI dokumenterer Durnioks medvirkning og Klaus Manns roman. Skill adaptasjonens fiktive konstruksjon fra uavhengig historisk dokumentasjon.",
          "fr": "Le NFI documente Durniok et le roman de Klaus Mann. Distinguez construction fictionnelle et preuves historiques indépendantes.",
          "pt": "O NFI documenta Durniok e o romance de Klaus Mann. Distinga construção ficcional de provas históricas independentes."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "mephisto-costume",
        "area": "camera",
        "prompt": {
          "en": "How can costume changes communicate a performer's changing public identity?",
          "nb": "Hvordan kan kostymeskifter formidle en skuespillers skiftende offentlige identitet?",
          "fr": "Comment les costumes expriment-ils l’évolution de l’identité publique d’un acteur ?",
          "pt": "Como podem figurinos comunicar mudanças na identidade pública de um ator?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute every visual decision to the lead actor alone",
              "nb": "Tilskriv alle visuelle valg hovedskuespilleren alene",
              "fr": "Attribuer chaque choix visuel au seul acteur principal",
              "pt": "Atribuir todas as escolhas visuais apenas ao ator principal"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate costume silhouettes, performance and photographic references",
              "nb": "Samordne kostymesilhuetter, skuespill og fotografiske referanser",
              "fr": "Coordonner silhouettes, jeu et références photographiques",
              "pt": "Coordenar silhuetas, interpretação e referências fotográficas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical costume choices throughout every dramatic phase",
              "nb": "Bruk identiske kostymevalg i alle dramatiske faser",
              "fr": "Employer les mêmes costumes à chaque phase dramatique",
              "pt": "Usar figurinos idênticos em todas as fases dramáticas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "NFI highlights Gyarmathy's costume work and filmportal records department credits. Design original costumes that express public identity without copying the film's wardrobe.",
          "nb": "NFI fremhever Gyarmathys kostymearbeid og filmportal dokumenterer fagkreditering. Lag egne kostymer som uttrykker offentlig identitet uten å kopiere filmen.",
          "fr": "Le NFI souligne les costumes de Gyarmathy et filmportal recense les métiers. Concevez des costumes originaux exprimant l’identité publique.",
          "pt": "O NFI destaca os figurinos de Gyarmathy e filmportal regista os créditos. Crie figurinos originais que exprimam identidade pública."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "mephisto-editions",
        "area": "research",
        "prompt": {
          "en": "How should conflicting runtime records be handled?",
          "nb": "Hvordan bør motstridende spilletidsoppføringer håndteres?",
          "fr": "Comment traiter des durées contradictoires ?",
          "pt": "Como tratar registos de duração contraditórios?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Force all catalogue entries into a single runtime",
              "nb": "Tving alle katalogoppføringer til én spilletid",
              "fr": "Ramener toutes les notices à une durée unique",
              "pt": "Forçar todas as fichas a uma duração única"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer censorship solely from the runtime difference",
              "nb": "Utled sensur utelukkende fra spilletidsforskjellen",
              "fr": "Déduire la censure de la seule différence de durée",
              "pt": "Deduzir censura apenas pela diferença de duração"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Label each edition with its catalogue and restoration provenance",
              "nb": "Merk hver utgave med katalog- og restaureringsproveniens",
              "fr": "Identifier chaque édition avec son catalogue et sa restauration",
              "pt": "Identificar cada edição com catálogo e proveniência do restauro"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Filmportal records an original 145-minute version; NFI lists different catalogue and restored runtimes. Retain the provenance instead of inventing a cause for each difference.",
          "nb": "Filmportal dokumenterer en originalutgave på 145 minutter; NFI oppgir andre katalog- og restaurerte spilletider. Bevar proveniensen uten å dikte opp årsaker til forskjellene.",
          "fr": "Filmportal indique une version originale de 145 minutes et le NFI d’autres durées. Conservez la provenance sans inventer les causes des écarts.",
          "pt": "Filmportal regista uma versão original de 145 minutos e o NFI outras durações. Preserve a proveniência sem inventar causas para diferenças."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_missing_1982",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Historical adaptation, substituted locations and collaborative authorship",
      "nb": "Historisk adaptasjon, stedserstatninger og kollektivt opphav",
      "fr": "Adaptation historique, lieux de substitution et écriture collective",
      "pt": "Adaptação histórica, locais de substituição e autoria coletiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Missing",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/56847-MISSING"
      },
      {
        "id": "s1",
        "title": "Missing",
        "publisher": "Festival de Cannes",
        "url": "https://cinemadedemain.festival-cannes.com/en/f/missing/"
      },
      {
        "id": "s2",
        "title": "Academy Awards Database – Costa-Gavras",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://awardsdatabase.oscars.org/Search/GetResults?query=%7B%22Nominee%22%3A%22Costa-Gavras%22%2C%22Sort%22%3A%221-Nominee-Alpha%22%2C%22Search%22%3A%22Basic%22%7D"
      }
    ],
    "questions": [
      {
        "id": "missing-research",
        "area": "research",
        "prompt": {
          "en": "How can a film based on historical events acknowledge uncertainty?",
          "nb": "Hvordan kan en film basert på historiske hendelser synliggjøre usikkerhet?",
          "fr": "Comment un film fondé sur des faits historiques reconnaît-il les incertitudes ?",
          "pt": "Como pode um filme baseado em factos históricos reconhecer incertezas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat an award as proof of historical accuracy",
              "nb": "Behandle en pris som bevis på historisk nøyaktighet",
              "fr": "Prendre un prix pour preuve d’exactitude historique",
              "pt": "Tomar um prémio como prova de rigor histórico"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate documented events, dramatized dialogue and interpretation",
              "nb": "Skill dokumenterte hendelser, dramatisert dialog og tolkning",
              "fr": "Distinguer faits documentés, dialogues dramatisés et interprétation",
              "pt": "Distinguir factos documentados, diálogos dramatizados e interpretação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present all dramatized dialogue as verified quotations",
              "nb": "Presenter all dramatisert dialog som verifiserte sitater",
              "fr": "Présenter tous les dialogues dramatisés comme citations vérifiées",
              "pt": "Apresentar todos os diálogos dramatizados como citações verificadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents the adaptation and political context, while the Academy records the writing award. A fictionalized historical narrative requires separate evidence for factual claims.",
          "nb": "AFI dokumenterer adaptasjonen og politisk kontekst, mens Academy registrerer manusprisen. En dramatisert historisk fortelling krever separat belegg for faktapåstander.",
          "fr": "L’AFI documente adaptation et contexte politique ; l’Académie recense le prix d’écriture. Les affirmations factuelles exigent des preuves distinctes.",
          "pt": "A AFI documenta adaptação e contexto político; a Academia regista o prémio de escrita. Afirmações factuais exigem provas distintas."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "missing-substitution",
        "area": "camera",
        "prompt": {
          "en": "How should a substituted filming location be represented in production notes?",
          "nb": "Hvordan bør et erstatningssted for opptak beskrives i produksjonsnotater?",
          "fr": "Comment décrire un lieu de tournage de substitution dans les notes ?",
          "pt": "Como descrever um local de filmagem de substituição nas notas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Label the filming location as historical evidence of the setting",
              "nb": "Merk opptaksstedet som historisk bevis for miljøet",
              "fr": "Présenter le lieu de tournage comme preuve historique du décor",
              "pt": "Apresentar o local de filmagem como prova histórica do cenário"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore continuity between studio and exterior footage",
              "nb": "Ignorer kontinuitet mellom studio og eksteriøropptak",
              "fr": "Ignorer les raccords entre studio et extérieurs",
              "pt": "Ignorar continuidade entre estúdio e exteriores"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record actual locations separately from represented locations",
              "nb": "Registrer faktiske opptakssteder separat fra representerte steder",
              "fr": "Noter séparément lieux réels et lieux représentés",
              "pt": "Registar locais reais separadamente dos locais representados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI identifies Mexico City, Acapulco and Churubusco as the substitution system. Plan a fictional location log that distinguishes screen geography from production geography.",
          "nb": "AFI identifiserer Mexico City, Acapulco og Churubusco som erstatningssystemet. Lag en fiktiv stedslogg som skiller filmgeografi fra opptaksgeografi.",
          "fr": "L’AFI identifie Mexico, Acapulco et Churubusco comme lieux de substitution. Créez un registre fictif distinguant géographie narrative et tournage.",
          "pt": "A AFI identifica Cidade do México, Acapulco e Churubusco como substituições. Crie um registo fictício distinguindo geografia narrativa e filmagem."
        },
        "sourceIds": [
          "s0"
        ]
      },
      {
        "id": "missing-music",
        "area": "sound",
        "prompt": {
          "en": "How can music support a political drama without claiming factual authority?",
          "nb": "Hvordan kan musikk støtte et politisk drama uten å gjøre krav på faktaautoritet?",
          "fr": "Comment la musique soutient-elle un drame politique sans prétendre établir des faits ?",
          "pt": "Como pode música apoiar um drama político sem reivindicar autoridade factual?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test an original cue against dialogue and silence",
              "nb": "Test et eget musikkinnslag mot dialog og stillhet",
              "fr": "Tester un motif original face au dialogue et au silence",
              "pt": "Testar um motivo original com diálogo e silêncio"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use music as evidence that a historical claim is true",
              "nb": "Bruk musikk som bevis på at en historisk påstand er sann",
              "fr": "Utiliser la musique comme preuve d’un fait historique",
              "pt": "Usar música como prova de uma afirmação histórica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the existing soundtrack instead of creating a new cue",
              "nb": "Kopier det eksisterende lydsporet fremfor å lage et eget innslag",
              "fr": "Copier la bande sonore plutôt que créer un motif original",
              "pt": "Copiar a banda sonora em vez de criar um motivo original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes credits Vangelis alongside the film's distinct writing and image departments. Create an original musical study and distinguish emotional framing from evidence.",
          "nb": "Cannes krediterer Vangelis ved siden av manus- og fotoavdelingene. Lag en egen musikkstudie og skill emosjonell innramming fra dokumentasjon.",
          "fr": "Cannes crédite Vangelis aux côtés des métiers de l’écriture et de l’image. Créez une étude musicale distinguant émotion et preuve.",
          "pt": "Cannes credita Vangelis junto dos departamentos de escrita e imagem. Crie um estudo musical distinguindo emoção de prova."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_official_story_1985",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Research, intimate drama and restoration history",
      "nb": "Research, intimt drama og restaureringshistorie",
      "fr": "Recherche, drame intime et histoire du restauro",
      "pt": "Pesquisa, drama íntimo e história do restauro"
    },
    "sources": [
      {
        "id": "s0",
        "title": "La historia oficial",
        "publisher": "Cine Nacional",
        "url": "https://cinenacional.com/pelicula/la-historia-oficial"
      },
      {
        "id": "s1",
        "title": "La Historia Oficial (The Official Story)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/la-historia-oficial/"
      },
      {
        "id": "s2",
        "title": "Cannes Classics - The Official Story by Luis Puenzo (1985)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2015/cannes-classics-the-official-story-by-luis-puenzo-1985/"
      },
      {
        "id": "s3",
        "title": "The Official Story",
        "publisher": "Pyramide International",
        "url": "https://inter.pyramidefilms.com/pyramide-international-catalogue-t/the-official-story.html"
      },
      {
        "id": "s4",
        "title": "La Historia Oficial (The Official Version, 1984), Directed by Luis Puenzo",
        "publisher": "Cambridge University Press",
        "url": "https://www.cambridge.org/core/books/abs/companion-to-latin-american-film/la-historia-oficial-the-official-version-1984-directed-by-luis-puenzo/0F002BAD91466033F56A70265839A801"
      },
      {
        "id": "s5",
        "title": "Writing Nominations for Foreign Language Films",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://awardsdatabase.oscars.org/Help/Statistics?file=Wri-ForLangNoms.pdf"
      }
    ],
    "questions": [
      {
        "id": "theofficialstory-testimony",
        "area": "research",
        "prompt": {
          "en": "How can testimony inform a fictional family drama ethically?",
          "nb": "Hvordan kan vitnesbyrd informere et fiktivt familiedrama på etisk vis?",
          "fr": "Comment des témoignages nourrissent-ils éthiquement un drame familial fictif ?",
          "pt": "Como podem testemunhos informar eticamente um drama familiar fictício?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every private recollection as public material",
              "nb": "Behandle enhver privat erindring som offentlig materiale",
              "fr": "Traiter tout souvenir privé comme matériau public",
              "pt": "Tratar toda recordação privada como material público"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use fictional scenes as direct proof of individual identities",
              "nb": "Bruk fiktive scener som direkte bevis på enkeltpersoners identitet",
              "fr": "Utiliser la fiction comme preuve directe d’identités individuelles",
              "pt": "Usar ficção como prova direta de identidades individuais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Protect participants and distinguish research from invented scenes",
              "nb": "Beskytt medvirkende og skill research fra oppdiktede scener",
              "fr": "Protéger les participants et distinguer recherche et scènes inventées",
              "pt": "Proteger participantes e distinguir pesquisa de cenas inventadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Puenzo describes journalist-led research into appropriated children. Plan a consent-based fictional research workflow that respects privacy and avoids unsupported identification.",
          "nb": "Puenzo beskriver journalistledet research om bortførte barn. Lag en samtykkebasert fiktiv researchflyt som respekterer privatliv og unngår udokumentert identifisering.",
          "fr": "Puenzo décrit une recherche journalistique sur les enfants appropriés. Concevez une recherche fictive fondée sur le consentement et respectueuse de la vie privée.",
          "pt": "Puenzo descreve pesquisa jornalística sobre crianças apropriadas. Conceba pesquisa fictícia baseada em consentimento e respeito pela privacidade."
        },
        "sourceIds": [
          "s2"
        ]
      },
      {
        "id": "theofficialstory-interior",
        "area": "camera",
        "prompt": {
          "en": "How can a domestic scene suggest a change in a character's understanding?",
          "nb": "Hvordan kan en hjemmescene antyde endring i en figurs forståelse?",
          "fr": "Comment une scène domestique suggère-t-elle un changement de compréhension ?",
          "pt": "Como pode uma cena doméstica sugerir mudança na compreensão de uma personagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Coordinate framing, pauses and the actor's changing attention",
              "nb": "Samordne utsnitt, pauser og skuespillerens skiftende oppmerksomhet",
              "fr": "Coordonner cadrage, pauses et attention changeante de l’acteur",
              "pt": "Coordenar enquadramento, pausas e atenção variável do ator"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every realization through explicit dialogue alone",
              "nb": "Forklar enhver erkjennelse gjennom eksplisitt dialog alene",
              "fr": "Expliquer chaque prise de conscience par le seul dialogue",
              "pt": "Explicar cada descoberta apenas por diálogo explícito"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the director alone determines every photographic choice",
              "nb": "Anta at regissøren alene bestemmer alle fotografiske valg",
              "fr": "Supposer que le réalisateur décide seul de toute image",
              "pt": "Supor que o realizador decide sozinho todas as imagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Argentine film record credits Monti and Macías for photography and editing. Develop an original domestic scene with distinct performance, image and editorial contributions.",
          "nb": "Den argentinske filmregistreringen krediterer Monti og Macías for foto og klipp. Utvikle en egen hjemmescene med særskilte bidrag fra spill, bilde og klipp.",
          "fr": "Le registre argentin crédite Monti et Macías pour image et montage. Développez une scène originale reconnaissant jeu, image et montage.",
          "pt": "O registo argentino credita Monti e Macías por fotografia e montagem. Desenvolva uma cena original reconhecendo interpretação, imagem e montagem."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "theofficialstory-preservation",
        "area": "research",
        "prompt": {
          "en": "How should the restored film be compared with release records?",
          "nb": "Hvordan bør den restaurerte filmen sammenlignes med utgivelsesoppføringer?",
          "fr": "Comment comparer le film restauré aux notices de sortie ?",
          "pt": "Como comparar o filme restaurado com registos de lançamento?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every runtime difference proves a missing scene",
              "nb": "Anta at enhver spilletidsforskjell beviser en manglende scene",
              "fr": "Supposer que toute différence de durée prouve une scène manquante",
              "pt": "Supor que qualquer diferença de duração prova uma cena em falta"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record release dates, catalogue runtimes and restoration provenance",
              "nb": "Registrer utgivelsesdatoer, katalogspilletider og restaureringsproveniens",
              "fr": "Noter dates de sortie, durées et provenance du restauro",
              "pt": "Registar datas, durações e proveniência do restauro"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the later DCP as the original negative itself",
              "nb": "Behandle den senere DCP-en som selve originalnegativet",
              "fr": "Traiter le DCP ultérieur comme le négatif original",
              "pt": "Tratar o DCP posterior como o próprio negativo original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes documents the restoration from the original negative, while the distributor lists a distinct DCP duration. Record the edition without inferring undocumented cuts.",
          "nb": "Cannes dokumenterer restaurering fra originalnegativet, mens distributøren oppgir en annen DCP-spilletid. Registrer utgaven uten å utlede udokumenterte klipp.",
          "fr": "Cannes documente le restauro du négatif original et le distributeur une durée DCP distincte. Identifiez la version sans inférer de coupes non documentées.",
          "pt": "Cannes documenta restauro do negativo original e o distribuidor uma duração DCP distinta. Identifique a edição sem inferir cortes não documentados."
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
    "scenarioId": "scenario_come_and_see_1985",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Testimony-based literature, subjective image and expressive sound",
      "nb": "Vitnesbyrdsbasert litteratur, subjektive bilder og uttrykksfull lyd",
      "fr": "Littérature testimoniale, image subjective et son expressif",
      "pt": "Literatura testemunhal, imagem subjetiva e som expressivo"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Come and See press notes",
        "publisher": "Janus Films / The Criterion Collection",
        "url": "https://s3.amazonaws.com/criterion-production/janus_promo_packages/359-/ComeAndSee_press-notes_r1_original.pdf"
      },
      {
        "id": "s1",
        "title": "Come and See",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/28895-come-and-see"
      },
      {
        "id": "s2",
        "title": "Read and See: Ales Adamovich and Literature out of Fire",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/7023-read-and-see-ales-adamovich-and-literature-out-of-fire"
      },
      {
        "id": "s3",
        "title": "Иди и смотри",
        "publisher": "Mosfilm",
        "url": "https://www.mosfilm.ru/cinema/films/idi-i-smotri/"
      }
    ],
    "questions": [
      {
        "id": "comeandsee-literature",
        "area": "research",
        "prompt": {
          "en": "How should testimony-based literature be used in a war-film study?",
          "nb": "Hvordan bør vitnesbyrdsbasert litteratur brukes i en studie av krigsfilm?",
          "fr": "Comment utiliser une littérature testimoniale dans une étude de film de guerre ?",
          "pt": "Como usar literatura testemunhal num estudo de cinema de guerra?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Distinguish survivor accounts, literary construction and film adaptation",
              "nb": "Skill overlevendes beretninger, litterær konstruksjon og filmadaptasjon",
              "fr": "Distinguer récits de survivants, construction littéraire et adaptation",
              "pt": "Distinguir relatos de sobreviventes, construção literária e adaptação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all fictional scenes as literal eyewitness records",
              "nb": "Behandle alle fiktive scener som bokstavelige øyenvitneberetninger",
              "fr": "Traiter toute fiction comme témoignage oculaire littéral",
              "pt": "Tratar toda ficção como testemunho ocular literal"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove the historical context from the literary analysis",
              "nb": "Fjern den historiske konteksten fra litteraturanalysen",
              "fr": "Supprimer le contexte historique de l’analyse littéraire",
              "pt": "Retirar o contexto histórico da análise literária"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's Adamovich essay documents the testimony-based literary sources. Compare their provenance and transformation into fiction without conflating dramatization and eyewitness evidence.",
          "nb": "Criterions Adamovich-essay dokumenterer de vitnesbyrdsbaserte litterære kildene. Sammenlign proveniens og bearbeiding til fiksjon uten å blande dramatisering og øyenvitnebelegg.",
          "fr": "L’essai Criterion sur Adamovich documente les sources testimoniales. Comparez leur provenance et transformation sans confondre fiction et témoignage direct.",
          "pt": "O ensaio Criterion sobre Adamovich documenta as fontes testemunhais. Compare proveniência e transformação sem confundir ficção e testemunho direto."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "comeandsee-viewpoint",
        "area": "camera",
        "prompt": {
          "en": "How can a close-up convey a character's limited perception?",
          "nb": "Hvordan kan et nærbilde formidle en figurs begrensede opplevelse?",
          "fr": "Comment un gros plan traduit-il la perception limitée d’un personnage ?",
          "pt": "Como pode um grande plano transmitir a perceção limitada de uma personagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Expose performers to actual danger for a classroom exercise",
              "nb": "Utsett skuespillere for reell fare i en undervisningsøvelse",
              "fr": "Exposer les acteurs à un danger réel en exercice",
              "pt": "Expor intérpretes a perigo real num exercício"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare distance, gaze and selective environmental information",
              "nb": "Sammenlign avstand, blikk og selektiv miljøinformasjon",
              "fr": "Comparer distance, regard et informations environnementales choisies",
              "pt": "Comparar distância, olhar e informação ambiental seletiva"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every close-up provides an objective account of events",
              "nb": "Anta at alle nærbilder gir en objektiv beretning om hendelsene",
              "fr": "Supposer que chaque gros plan donne un récit objectif",
              "pt": "Supor que todo grande plano fornece um relato objetivo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes subjective camera work, and the press notes credit Rodionov. Use a safe, nonviolent fictional scene to study the limits of perception, not a reenactment of wartime harm.",
          "nb": "Criterion beskriver subjektiv kameraføring, og pressenotatene krediterer Rodionov. Bruk en trygg, ikke-voldelig fiktiv scene til å studere persepsjon, ikke gjenskaping av krigsskade.",
          "fr": "Criterion décrit la caméra subjective et le dossier crédite Rodionov. Étudiez la perception dans une fiction sûre et non violente, sans reconstituer les violences de guerre.",
          "pt": "A Criterion descreve câmara subjetiva e as notas creditam Rodionov. Estude perceção numa ficção segura e não violenta, sem recriar violência de guerra."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "comeandsee-sound",
        "area": "sound",
        "prompt": {
          "en": "How can subjective sound differ from ordinary environmental recording?",
          "nb": "Hvordan kan subjektiv lyd skille seg fra vanlige miljøopptak?",
          "fr": "Comment un son subjectif diffère-t-il d’un enregistrement ambiant ordinaire ?",
          "pt": "Como pode som subjetivo diferir de uma gravação ambiental comum?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use excessive volume to create discomfort in the audience",
              "nb": "Bruk overdreven lydstyrke for å skape ubehag hos publikum",
              "fr": "Employer un volume excessif pour gêner le public",
              "pt": "Usar volume excessivo para causar desconforto no público"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume expressive sound is factual evidence of what happened",
              "nb": "Anta at uttrykksfull lyd er faktabevis for hendelsene",
              "fr": "Supposer que le son expressif prouve les faits",
              "pt": "Supor que som expressivo prova os acontecimentos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare safe original sound layers with a neutral ambient track",
              "nb": "Sammenlign trygge egne lydlag med et nøytralt miljølydspor",
              "fr": "Comparer couches sonores originales sûres et ambiance neutre",
              "pt": "Comparar camadas sonoras originais seguras com ambiente neutro"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion identifies expressionistic sound design. Create a safe original listening comparison at comfortable volume, distinguishing fictional perception from objective recording.",
          "nb": "Criterion identifiserer ekspresjonistisk lyddesign. Lag en trygg egen lyttesammenligning ved behagelig volum og skill fiktiv persepsjon fra objektivt opptak.",
          "fr": "Criterion identifie le son expressionniste. Créez une comparaison originale à volume confortable distinguant perception fictive et enregistrement objectif.",
          "pt": "A Criterion identifica som expressionista. Crie uma comparação original a volume confortável distinguindo perceção fictícia de gravação objetiva."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_yellow_earth_1984",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Landscape composition, studio context and regional music",
      "nb": "Landskapskomposisjon, studiokontekst og regional musikk",
      "fr": "Composition paysagère, contexte de studio et musique régionale",
      "pt": "Composição paisagística, contexto de estúdio e música regional"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Yellow Earth",
        "publisher": "Harvard Film Archive",
        "url": "https://harvardfilmarchive.org/programs/yellow-earth-by-chen-kaige/1"
      },
      {
        "id": "s1",
        "title": "Huang Tudi (1984)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/af92655b-324c-559c-9869-c6735545a5c2/huang-tudi"
      },
      {
        "id": "s2",
        "title": "Yellow Earth / Red Sorghum",
        "publisher": "UCLA Film & Television Archive",
        "url": "https://cinema.ucla.edu/events/yellow-earth-mainland-china-1984-red-sorghum-mainland-china-1987-2013-11-15/"
      },
      {
        "id": "s3",
        "title": "Yellow Earth",
        "publisher": "Hong Kong Film Archive",
        "url": "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2016-10-1-10.html"
      },
      {
        "id": "s4",
        "title": "Zhang Yimou -- An Internationally Acclaimed Filmmaker",
        "publisher": "ChinaCulture.org",
        "url": "https://en.chinaculture.org/library/2008-01/18/content_38459.htm"
      },
      {
        "id": "s5",
        "title": "赵季平：影视配乐不是‘嫁鸡随鸡，嫁狗随狗’的艺术",
        "publisher": "People.cn",
        "url": "https://yn.people.com.cn/n2/2020/0708/c372315-34141930.html"
      },
      {
        "id": "s6",
        "title": "Yellow Earth",
        "publisher": "International Film Festival Rotterdam",
        "url": "https://iffr.com/en/iffr/1986/films/yellow-earth"
      }
    ],
    "questions": [
      {
        "id": "yellowearth-landscape",
        "area": "camera",
        "prompt": {
          "en": "How can landscape composition express the relationship between people and terrain?",
          "nb": "Hvordan kan landskapskomposisjon uttrykke forholdet mellom mennesker og terreng?",
          "fr": "Comment la composition paysagère exprime-t-elle le rapport entre personnes et terrain ?",
          "pt": "Como pode a composição paisagística exprimir a relação entre pessoas e terreno?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat all rural landscapes as culturally interchangeable",
              "nb": "Behandle alle rurale landskap som kulturelt utskiftbare",
              "fr": "Traiter tous les paysages ruraux comme interchangeables",
              "pt": "Tratar todas as paisagens rurais como culturalmente equivalentes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare horizon placement, scale and restrained color choices",
              "nb": "Sammenlign horisontplassering, skala og tilbakeholdne fargevalg",
              "fr": "Comparer horizon, échelle et choix chromatiques retenus",
              "pt": "Comparar horizonte, escala e escolhas cromáticas contidas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Fill every frame with decorative landscape detail",
              "nb": "Fyll hvert bilde med dekorative landskapsdetaljer",
              "fr": "Remplir chaque cadre de détails paysagers décoratifs",
              "pt": "Encher cada quadro de detalhes paisagísticos decorativos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Harvard describes stationary camera, limited color and rural topography; UCLA notes scroll-painting-like composition. Design an original landscape study that respects its specific setting.",
          "nb": "Harvard beskriver statisk kamera, begrensede farger og rural topografi; UCLA omtaler komposisjon inspirert av rullemaleri. Lag en egen landskapsstudie som respekterer stedets særpreg.",
          "fr": "Harvard décrit caméra fixe, couleurs limitées et topographie ; UCLA note la composition de peinture en rouleau. Créez une étude respectant le lieu.",
          "pt": "Harvard descreve câmara fixa, cor limitada e topografia; UCLA refere composição de pintura em rolo. Crie um estudo que respeite o local."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "yellowearth-studio",
        "area": "research",
        "prompt": {
          "en": "How should the film's studio and generational context be documented?",
          "nb": "Hvordan bør filmens studio- og generasjonskontekst dokumenteres?",
          "fr": "Comment documenter le contexte de studio et de génération du film ?",
          "pt": "Como documentar o contexto de estúdio e geração do filme?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute the entire Fifth Generation movement to one film alone",
              "nb": "Tilskriv hele femtegenerasjonsbevegelsen én film alene",
              "fr": "Attribuer toute la Cinquième Génération à un seul film",
              "pt": "Atribuir toda a Quinta Geração a um único filme"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume studio support means every creative choice was prescribed",
              "nb": "Anta at studiostøtte betyr at alle kreative valg var foreskrevet",
              "fr": "Supposer que le soutien du studio impose tous les choix créatifs",
              "pt": "Supor que apoio do estúdio prescreve todas as escolhas criativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record institutional opportunities and distinct collaborator roles",
              "nb": "Registrer institusjonelle muligheter og ulike medarbeiderroller",
              "fr": "Consigner possibilités institutionnelles et rôles distincts",
              "pt": "Registar oportunidades institucionais e funções distintas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "UCLA and HKFA identify Guangxi Film Studio and the credited team; the cultural-institution history describes the Youth Production Unit. Distinguish institutional opportunity from individual artistic decisions.",
          "nb": "UCLA og HKFA identifiserer Guangxi Film Studio og filmteamet; institusjonshistorien beskriver ungdomsproduksjonsenheten. Skill institusjonelle muligheter fra individuelle kunstneriske valg.",
          "fr": "UCLA et HKFA identifient Guangxi et l’équipe ; l’histoire institutionnelle décrit l’unité jeunesse. Distinguez opportunité institutionnelle et choix artistiques.",
          "pt": "UCLA e HKFA identificam Guangxi e a equipa; a história institucional descreve a unidade juvenil. Distinga oportunidade institucional de escolhas artísticas."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "yellowearth-music",
        "area": "sound",
        "prompt": {
          "en": "How can regional musical research inform an original film score?",
          "nb": "Hvordan kan regional musikkresearch informere egen filmmusikk?",
          "fr": "Comment une recherche musicale régionale nourrit-elle une partition originale ?",
          "pt": "Como pode pesquisa musical regional informar uma banda musical original?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Document musical traditions and collaborate with knowledgeable practitioners",
              "nb": "Dokumenter musikktradisjoner og samarbeid med kunnskapsrike utøvere",
              "fr": "Documenter les traditions et collaborer avec des praticiens compétents",
              "pt": "Documentar tradições e colaborar com praticantes experientes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use any folk recording as a generic regional sound",
              "nb": "Bruk ethvert folkemusikkopptak som generisk regional lyd",
              "fr": "Utiliser tout enregistrement folklorique comme son régional générique",
              "pt": "Usar qualquer gravação folclórica como som regional genérico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume research grants permission to reuse protected recordings",
              "nb": "Anta at research gir tillatelse til å gjenbruke beskyttede opptak",
              "fr": "Supposer que la recherche autorise la réutilisation d’enregistrements protégés",
              "pt": "Supor que pesquisa autoriza reutilizar gravações protegidas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Zhao Jiping recalls field research in northern Shaanxi and regional folk elements. Develop an original music plan with attribution and permission, not a generic cultural imitation.",
          "nb": "Zhao Jiping beskriver feltresearch i nordlige Shaanxi og regionale folkemusikkelementer. Lag en egen musikkplan med kreditering og tillatelser, ikke generell kulturell imitasjon.",
          "fr": "Zhao Jiping évoque ses recherches au nord du Shaanxi. Créez un plan musical original avec attribution et autorisations, sans imitation culturelle générique.",
          "pt": "Zhao Jiping recorda pesquisa no norte de Shaanxi. Crie um plano musical original com atribuição e permissões, sem imitação cultural genérica."
        },
        "sourceIds": [
          "s2",
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_police_story_1985",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Urban spatial design, action continuity and specialist collaboration",
      "nb": "Byrom, actionkontinuitet og spesialistsamarbeid",
      "fr": "Espace urbain, continuité de l’action et collaboration spécialisée",
      "pt": "Espaço urbano, continuidade da ação e colaboração especializada"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Police Story",
        "publisher": "Hong Kong Film Archive",
        "url": "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2018-1-1-3.html"
      },
      {
        "id": "s1",
        "title": "Police Story (4K Digitally Restored Version)",
        "publisher": "Hong Kong Film Archive",
        "url": "https://www.filmarchive.gov.hk/en/web/hkfa/2024/martial/pe-event-2024-martial-fs-film18.html"
      },
      {
        "id": "s2",
        "title": "Police Story",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/29544-police-story"
      },
      {
        "id": "s3",
        "title": "Police Story and Police Story 2: Law and Disorder",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/6325-police-story-and-police-story-2-law-and-disorder"
      },
      {
        "id": "s4",
        "title": "Police Story / Police Story 2",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/boxsets/1554-police-story-police-story-2"
      },
      {
        "id": "s5",
        "title": "10 Questions for Jackie Chan",
        "publisher": "TIME",
        "url": "https://content.time.com/time/subscriber/article/0,33009,1888989,00.html"
      }
    ],
    "questions": [
      {
        "id": "policestory-space",
        "area": "camera",
        "prompt": {
          "en": "How can urban architecture organize a fictional movement sequence?",
          "nb": "Hvordan kan byarkitektur organisere en fiktiv bevegelsessekvens?",
          "fr": "Comment l’architecture urbaine organise-t-elle une séquence de mouvement fictive ?",
          "pt": "Como pode arquitetura urbana organizar uma sequência fictícia de movimento?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Cut randomly between unrelated spaces without orientation",
              "nb": "Klipp tilfeldig mellom urelaterte rom uten orientering",
              "fr": "Couper au hasard entre espaces sans orientation",
              "pt": "Cortar aleatoriamente entre espaços sem orientação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Reproduce hazardous historical stunt movements in real locations",
              "nb": "Gjenskap farlige historiske stuntbevegelser på virkelige steder",
              "fr": "Reproduire des cascades dangereuses dans des lieux réels",
              "pt": "Reproduzir acrobacias perigosas em locais reais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Storyboard spatial landmarks and clear visual transitions",
              "nb": "Lag storyboard med romlige landemerker og tydelige bildeoverganger",
              "fr": "Prévoir repères spatiaux et transitions visuelles claires",
              "pt": "Criar storyboard com referências espaciais e transições claras"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "HKFA documents the shift toward Hong Kong urban locations. Analyze spatial continuity using a harmless fictional storyboard, not the recreation of dangerous stunts.",
          "nb": "HKFA dokumenterer overgangen til urbane opptakssteder i Hongkong. Analyser romlig kontinuitet med et ufarlig fiktivt storyboard, ikke gjenskaping av farlige stunt.",
          "fr": "HKFA documente le passage aux lieux urbains de Hong Kong. Analysez la continuité spatiale par un storyboard fictif sans cascades dangereuses.",
          "pt": "HKFA documenta a passagem para locais urbanos de Hong Kong. Analise continuidade espacial com storyboard fictício sem acrobacias perigosas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "policestory-roles",
        "area": "research",
        "prompt": {
          "en": "How should specialist contributions to an action film be credited?",
          "nb": "Hvordan bør spesialistbidrag i en actionfilm krediteres?",
          "fr": "Comment créditer les contributions spécialisées dans un film d’action ?",
          "pt": "Como creditar contributos especializados num filme de ação?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Distinguish writing, choreography, performance and editing credits",
              "nb": "Skill manus-, koreografi-, skuespill- og klippekreditering",
              "fr": "Distinguer écriture, chorégraphie, jeu et montage",
              "pt": "Distinguir escrita, coreografia, interpretação e montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Credit all contributions exclusively to the lead performer",
              "nb": "Krediter alle bidrag utelukkende hovedskuespilleren",
              "fr": "Créditer tous les apports au seul acteur principal",
              "pt": "Creditar todos os contributos apenas ao ator principal"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later restoration credits as original choreography credits",
              "nb": "Behandle restaureringskreditering som opprinnelig koreografikreditering",
              "fr": "Traiter les crédits de restauration comme ceux de chorégraphie originale",
              "pt": "Tratar créditos de restauro como coreografia original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion records Chan, Tang, the specialist team and the editorial credits. Create a collaboration chart that preserves distinct responsibilities without inventing individual shot assignments.",
          "nb": "Criterion dokumenterer Chan, Tang, spesialistteamet og klippekrediteringen. Lag et samarbeidskart som bevarer ulike ansvar uten oppdiktede bildelister.",
          "fr": "Criterion recense Chan, Tang, l’équipe spécialisée et le montage. Créez un tableau de collaboration sans inventer les responsabilités plan par plan.",
          "pt": "A Criterion regista Chan, Tang, equipa especializada e montagem. Crie um quadro de colaboração sem inventar responsabilidades plano a plano."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "policestory-continuity",
        "area": "camera",
        "prompt": {
          "en": "How can editing clarify the rhythm of a safe movement study?",
          "nb": "Hvordan kan klipping tydeliggjøre rytmen i en trygg bevegelsesstudie?",
          "fr": "Comment le montage clarifie-t-il le rythme d’une étude de mouvement sûre ?",
          "pt": "Como pode montagem clarificar o ritmo de um estudo seguro de movimento?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume historical risk-taking is required for good choreography",
              "nb": "Anta at historisk risikotaking er nødvendig for god koreografi",
              "fr": "Supposer que la prise de risque historique est nécessaire",
              "pt": "Supor que risco histórico é necessário para boa coreografia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare matching gestures and reactions across planned shots",
              "nb": "Sammenlign samsvarende bevegelser og reaksjoner i planlagte bilder",
              "fr": "Comparer gestes et réactions raccordés entre plans prévus",
              "pt": "Comparar gestos e reações correspondentes entre planos previstos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use disconnected cuts without considering movement rhythm",
              "nb": "Bruk frakoblede klipp uten å vurdere bevegelsesrytme",
              "fr": "Employer des coupes disjointes sans considérer le rythme",
              "pt": "Usar cortes desconexos sem considerar ritmo de movimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion describes the specialist team's coordination and credits the editors. Compare non-contact movement clips or paper sequences; historical production risk is not a recommended method.",
          "nb": "Criterion beskriver spesialistteamets samordning og krediterer klipperne. Sammenlign kontaktfrie bevegelsesklipp eller papirsekvenser; historisk risiko er ikke en anbefalt metode.",
          "fr": "Criterion décrit la coordination de l’équipe et crédite les monteurs. Comparez des mouvements sans contact ou sur papier ; le risque historique n’est pas une méthode conseillée.",
          "pt": "A Criterion descreve coordenação da equipa e credita os montadores. Compare movimentos sem contacto ou em papel; risco histórico não é método recomendado."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_my_beautiful_laundrette_1985",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Television financing, London locations and theatrical circulation",
      "nb": "TV-finansiering, London-opptakssteder og kinodistribusjon",
      "fr": "Financement télévisuel, lieux londoniens et diffusion en salle",
      "pt": "Financiamento televisivo, locais londrinos e circulação em cinema"
    },
    "sources": [
      {
        "id": "s0",
        "title": "My Beautiful Laundrette",
        "publisher": "Film4 Productions",
        "url": "https://www.film4productions.com/productions/1985/my-beautiful-laundrette"
      },
      {
        "id": "s1",
        "title": "My Beautiful Laundrette: Postcolonialism in the Wash",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/3634-my-beautiful-laundrette-postcolonialism-in-the-wash"
      },
      {
        "id": "s2",
        "title": "My Beautiful Laundrette",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/28044-my-beautiful-laundrette"
      },
      {
        "id": "s3",
        "title": "40 years of My Beautiful Laundrette: how the London locations look today",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/my-beautiful-laundrette-london-locations"
      },
      {
        "id": "s4",
        "title": "David Rose, influential TV producer and Film Four founder, dies age 92",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/news/david-rose-tv-producer-film-four-founder-dies"
      },
      {
        "id": "s5",
        "title": "10 Things I Learned: My Beautiful Laundrette",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5590-10-things-i-learned-my-beautiful-laundrette"
      },
      {
        "id": "s6",
        "title": "My Beautiful Laundrette",
        "publisher": "BFI Distribution",
        "url": "https://www.bfi.org.uk/bfi-distribution/bfi-international-distribution/touring-programmes/love"
      }
    ],
    "questions": [
      {
        "id": "mybeautifullaundrette-finance",
        "area": "research",
        "prompt": {
          "en": "How can a broadcaster-backed film be planned with limited resources?",
          "nb": "Hvordan kan en kringkasterfinansiert film planlegges med begrensede ressurser?",
          "fr": "Comment planifier un film soutenu par une chaîne avec des ressources limitées ?",
          "pt": "Como planear um filme apoiado por televisão com recursos limitados?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Align schedule, format and essential locations with the budget",
              "nb": "Tilpass tidsplan, format og nødvendige steder til budsjettet",
              "fr": "Adapter calendrier, format et lieux essentiels au budget",
              "pt": "Adaptar calendário, formato e locais essenciais ao orçamento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume theatrical success was guaranteed before production",
              "nb": "Anta at kinosuksess var garantert før produksjonen",
              "fr": "Supposer que le succès en salle était garanti avant production",
              "pt": "Supor que sucesso em cinema estava garantido antes da produção"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Omit the role of the broadcaster and producers",
              "nb": "Utelat kringkasterens og produsentenes rolle",
              "fr": "Omettre le rôle de la chaîne et des producteurs",
              "pt": "Omitir o papel da televisão e dos produtores"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Film4 and Criterion document the television conception, Working Title and modest six-week production. Draft a fictional resource plan without treating later theatrical success as a production guarantee.",
          "nb": "Film4 og Criterion dokumenterer TV-opphavet, Working Title og en beskjeden seksukersproduksjon. Lag en fiktiv ressursplan uten å behandle senere kinosuksess som en garanti.",
          "fr": "Film4 et Criterion documentent la conception TV, Working Title et six semaines de production. Concevez un plan fictif sans présumer le succès en salle.",
          "pt": "Film4 e Criterion documentam conceção televisiva, Working Title e seis semanas de produção. Crie um plano fictício sem presumir sucesso em cinema."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s4"
        ]
      },
      {
        "id": "mybeautifullaundrette-location",
        "area": "camera",
        "prompt": {
          "en": "How can a working neighborhood location shape a fictional relationship drama?",
          "nb": "Hvordan kan et arbeidsnabolag forme et fiktivt relasjonsdrama?",
          "fr": "Comment un quartier de travail façonne-t-il un drame relationnel fictif ?",
          "pt": "Como pode um bairro de trabalho moldar um drama relacional fictício?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer every resident's experience from the fictional characters",
              "nb": "Utled alle beboeres erfaringer fra de fiktive figurene",
              "fr": "Déduire l’expérience de tous les habitants des personnages fictifs",
              "pt": "Deduzir experiências de todos os moradores das personagens fictícias"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Connect the workplace, street and character relationships",
              "nb": "Knytt arbeidssted, gate og figurenes relasjoner sammen",
              "fr": "Relier lieu de travail, rue et rapports entre personnages",
              "pt": "Ligar local de trabalho, rua e relações das personagens"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the neighborhood as interchangeable decorative background",
              "nb": "Behandle nabolaget som utskiftbar dekorativ bakgrunn",
              "fr": "Traiter le quartier comme décor interchangeable",
              "pt": "Tratar o bairro como cenário decorativo intercambiável"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI documents South London locations including the laundrette. Design an original scene in which the workplace and surrounding streets shape relationships without stereotyping the community.",
          "nb": "BFI dokumenterer opptakssteder i Sør-London, inkludert vaskeriet. Lag en egen scene der arbeidssted og gater former relasjoner uten stereotypisering av lokalmiljøet.",
          "fr": "Le BFI documente les lieux du sud de Londres, dont la laverie. Créez une scène où travail et rues façonnent les relations sans stéréotyper la communauté.",
          "pt": "O BFI documenta locais do sul de Londres, incluindo a lavandaria. Crie uma cena onde trabalho e ruas moldem relações sem estereotipar a comunidade."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "mybeautifullaundrette-format",
        "area": "research",
        "prompt": {
          "en": "How should a television-origin film's theatrical transfer be documented?",
          "nb": "Hvordan bør en films overgang fra TV-opphav til kino dokumenteres?",
          "fr": "Comment documenter le transfert en salle d’un film conçu pour la télévision ?",
          "pt": "Como documentar a passagem para cinema de um filme concebido para televisão?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the theatrical print determines the original capture format",
              "nb": "Anta at kinokopien bestemmer det opprinnelige opptaksformatet",
              "fr": "Supposer que la copie cinéma détermine le format de captation",
              "pt": "Supor que cópia de cinema determina o formato de captação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later repertory circulation as original production evidence",
              "nb": "Behandle senere repertoarvisninger som opprinnelig produksjonsbevis",
              "fr": "Traiter la diffusion ultérieure comme preuve de production originale",
              "pt": "Tratar circulação posterior como prova de produção original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate original capture format from later distribution formats",
              "nb": "Skill opprinnelig opptaksformat fra senere distribusjonsformater",
              "fr": "Distinguer format de captation et formats de diffusion ultérieurs",
              "pt": "Distinguir formato de captação de formatos posteriores de distribuição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents Stapleton's 16 mm photography and a subsequent 35 mm blow-up. Record capture and exhibition separately when comparing editions.",
          "nb": "Criterion dokumenterer Stapletons 16 mm-foto og senere oppblåsing til 35 mm. Registrer opptak og visning separat ved sammenligning av utgaver.",
          "fr": "Criterion documente la photographie 16 mm de Stapleton et le gonflage en 35 mm. Notez séparément captation et projection.",
          "pt": "A Criterion documenta fotografia em 16 mm de Stapleton e ampliação para 35 mm. Registe captação e exibição separadamente."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_yeelen_1987",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Natural light, collaborative production and selective cultural representation",
      "nb": "Naturlig lys, kollektiv produksjon og selektiv kulturrepresentasjon",
      "fr": "Lumière naturelle, production collective et représentation culturelle sélective",
      "pt": "Luz natural, produção coletiva e representação cultural seletiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Yeelen (Brightness) – BFI Southbank Programme Notes",
        "publisher": "British Film Institute",
        "url": "https://bfidatadigipres.github.io/in%20the%20black%20fantastic/2022/07/03/yeelen/"
      },
      {
        "id": "s1",
        "title": "Yeelen (La Lumière)",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/38127.html"
      },
      {
        "id": "s2",
        "title": "Yeelen",
        "publisher": "Festival de Cannes",
        "url": "https://cinemadedemain.festival-cannes.com/en/f/yeelen/"
      },
      {
        "id": "s3",
        "title": "Komo on Screen, in Seeing the Unseen",
        "publisher": "Indiana University Press",
        "url": "https://publish.iupress.indiana.edu/read/seeing-the-unseen/section/5f7b3e8c-2d24-4f9f-8925-8d350ebd521e"
      },
      {
        "id": "s4",
        "title": "Yeelen - Das Licht",
        "publisher": "filmportal.de / DFF",
        "url": "https://www.filmportal.de/en/movie/yeelen-das-licht_"
      },
      {
        "id": "s5",
        "title": "Souleymane Cissé: The Work, the Wind, and the Light",
        "publisher": "MUBI Notebook",
        "url": "https://mubi.com/de/notebook/posts/souleymane-cisse-the-work-the-wind-and-the-light"
      }
    ],
    "questions": [
      {
        "id": "yeelen-light",
        "area": "camera",
        "prompt": {
          "en": "How can changing natural light guide a location production?",
          "nb": "Hvordan kan skiftende naturlig lys styre en locationproduksjon?",
          "fr": "Comment la lumière naturelle changeante guide-t-elle un tournage en extérieur ?",
          "pt": "Como pode luz natural variável orientar uma produção em exteriores?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore changing conditions when scheduling a fictional shoot",
              "nb": "Ignorer skiftende forhold ved planlegging av fiktive opptak",
              "fr": "Ignorer les conditions changeantes dans le calendrier fictif",
              "pt": "Ignorar condições variáveis ao planear uma filmagem fictícia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan visual continuity around light and practical weather constraints",
              "nb": "Planlegg visuell kontinuitet rundt lys og praktiske værbegrensninger",
              "fr": "Prévoir continuité visuelle selon lumière et contraintes météorologiques",
              "pt": "Planear continuidade visual segundo luz e limitações meteorológicas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the same natural light is available throughout every day",
              "nb": "Anta at samme naturlige lys er tilgjengelig gjennom alle dager",
              "fr": "Supposer une lumière naturelle identique toute la journée",
              "pt": "Supor luz natural idêntica durante todo o dia"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The scholarly production study documents Ferragut's seasonal and daily light constraints; Cissé recalls natural-production difficulties. Design a safe fictional schedule with contingency days.",
          "nb": "Produksjonsstudien dokumenterer Ferraguts sesong- og dagslysbegrensninger; Cissé beskriver vanskelige naturforhold. Lag en trygg fiktiv opptaksplan med reservedager.",
          "fr": "L’étude documente les contraintes lumineuses de Ferragut ; Cissé évoque les difficultés naturelles. Concevez un calendrier fictif sûr avec jours de réserve.",
          "pt": "O estudo documenta limitações de luz de Ferragut; Cissé recorda dificuldades naturais. Crie um calendário fictício seguro com dias de reserva."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      },
      {
        "id": "yeelen-collaboration",
        "area": "research",
        "prompt": {
          "en": "How should a multi-year international production be documented?",
          "nb": "Hvordan bør en flerårig internasjonal produksjon dokumenteres?",
          "fr": "Comment documenter une production internationale sur plusieurs années ?",
          "pt": "Como documentar uma produção internacional de vários anos?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every credited collaborator worked throughout all filming",
              "nb": "Anta at alle krediterte medarbeidere arbeidet under hele opptaksperioden",
              "fr": "Supposer que chaque collaborateur crédité a travaillé tout le tournage",
              "pt": "Supor que cada colaborador creditado trabalhou durante toda a filmagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase discrepancies between institutions by guessing exact dates",
              "nb": "Fjern institusjonelle avvik ved å gjette eksakte datoer",
              "fr": "Effacer les divergences institutionnelles en inventant les dates",
              "pt": "Apagar divergências institucionais inventando datas exatas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track co-production roles, revisions and changes in crew credits",
              "nb": "Følg samproduksjonsroller, revisjoner og endringer i teamkreditering",
              "fr": "Suivre rôles de coproduction, révisions et changements de crédits",
              "pt": "Acompanhar funções de coprodução, revisões e mudanças de créditos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI and Cinémathèque identify the international production and departments; research documents interruptions and changes in cinematography. Preserve credit provenance without inventing dates.",
          "nb": "BFI og Cinémathèque identifiserer internasjonal produksjon og fagavdelinger; forskning dokumenterer avbrudd og fotoskifter. Bevar krediteringsproveniens uten oppdiktede datoer.",
          "fr": "Le BFI et la Cinémathèque identifient coproduction et métiers ; la recherche documente interruptions et changements d’image. Préservez la provenance sans inventer de dates.",
          "pt": "O BFI e a Cinémathèque identificam coprodução e departamentos; pesquisa documenta interrupções e mudanças de fotografia. Preserve proveniência sem inventar datas."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s3"
        ]
      },
      {
        "id": "yeelen-representation",
        "area": "research",
        "prompt": {
          "en": "How should culturally specific ritual imagery be discussed in a film study?",
          "nb": "Hvordan bør kulturspesifikke ritualbilder drøftes i en filmstudie?",
          "fr": "Comment aborder des images rituelles culturellement spécifiques dans une étude ?",
          "pt": "Como discutir imagens rituais culturalmente específicas num estudo de cinema?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Recognize selective representation and respect limits of cultural knowledge",
              "nb": "Anerkjenn selektiv representasjon og respekter grenser for kulturkunnskap",
              "fr": "Reconnaître représentation sélective et limites du savoir culturel",
              "pt": "Reconhecer representação seletiva e limites do conhecimento cultural"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat fictional imagery as complete disclosure of a living tradition",
              "nb": "Behandle fiktive bilder som fullstendig avsløring av en levende tradisjon",
              "fr": "Traiter la fiction comme révélation complète d’une tradition vivante",
              "pt": "Tratar ficção como revelação completa de uma tradição viva"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use ritual imagery as interchangeable exotic decoration",
              "nb": "Bruk ritualbilder som utskiftbar eksotisk pynt",
              "fr": "Utiliser les images rituelles comme décor exotique interchangeable",
              "pt": "Usar imagens rituais como decoração exótica intercambiável"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Komo scholarship describes Cissé's selective representation rather than total disclosure. Analyze the film's image choices without claiming access to restricted knowledge or generalizing across cultures.",
          "nb": "Komo-forskningen beskriver Cissés selektive representasjon fremfor total avsløring. Analyser filmens bildevalg uten å hevde tilgang til avgrenset kunnskap eller generalisere på tvers av kulturer.",
          "fr": "L’étude sur le Komo décrit une représentation sélective plutôt qu’une révélation totale. Analysez les images sans prétendre accéder à un savoir réservé ni généraliser.",
          "pt": "O estudo sobre Komo descreve representação seletiva e não revelação total. Analise imagens sem reivindicar acesso a conhecimento reservado nem generalizar culturas."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_sugar_cane_alley_1983",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Period color, community casting and musical memory",
      "nb": "Historiske farger, lokal casting og musikalsk erindring",
      "fr": "Couleurs d’époque, casting local et mémoire musicale",
      "pt": "Cor de época, elenco local e memória musical"
    },
    "sources": [
      {
        "id": "s0",
        "title": "La Rue Cases Nègres — Visa 56059",
        "publisher": "Centre national du cinéma et de l'image animée (CNC)",
        "url": "https://www.cnc.fr/professionnels/visas-et-classification/56059"
      },
      {
        "id": "s1",
        "title": "Rue Cases-Nègres (Euzhan Palcy, 1983)",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/50527.html"
      },
      {
        "id": "s2",
        "title": "Rue Cases-Nègres (1983)",
        "publisher": "Euzhan Palcy — official film archive",
        "url": "https://euzhanpalcyweb.wixsite.com/euzhan-palcy-fr/rue-cases-negres"
      },
      {
        "id": "s3",
        "title": "Rue Cases-Nègres — Collège au cinéma dossier 186, interview with Euzhan Palcy",
        "publisher": "CNC / Réseau Canopé",
        "url": "https://cdn.reseau-canope.fr/archivage/valid/N-9297-13844.pdf"
      },
      {
        "id": "s4",
        "title": "Rue Cases Nègres",
        "publisher": "Film France — CNC",
        "url": "https://www.filmfrance.net/films/rue-cases-negres/"
      }
    ],
    "questions": [
      {
        "id": "sugarcanealley-palette",
        "area": "camera",
        "prompt": {
          "en": "How can period design avoid a generic nostalgic appearance?",
          "nb": "Hvordan kan historisk scenografi unngå et generelt nostalgisk uttrykk?",
          "fr": "Comment éviter un aspect nostalgique générique dans un décor d’époque ?",
          "pt": "Como evitar um aspeto nostálgico genérico na cenografia de época?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Coordinate surface textures, costumes and color tests",
              "nb": "Samordne overflateteksturer, kostymer og fargeprøver",
              "fr": "Coordonner textures, costumes et essais de couleur",
              "pt": "Coordenar texturas, figurinos e testes de cor"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply an identical sepia filter to every scene",
              "nb": "Bruk identisk sepiafilter i alle scener",
              "fr": "Appliquer le même filtre sépia à chaque scène",
              "pt": "Aplicar o mesmo filtro sépia a todas as cenas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the design team's material research",
              "nb": "Ignorer scenografiteamets materialresearch",
              "fr": "Ignorer les recherches matérielles des décorateurs",
              "pt": "Ignorar pesquisa material da equipa de cenografia"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Palcy's CNC interview describes rejecting sepia and coordinating patina, lighting and color. Design a distinct period palette through material research.",
          "nb": "Palcys CNC-intervju beskriver avvisningen av sepia og samordning av patina, lys og farge. Lag en egen historisk palett gjennom materialresearch.",
          "fr": "L’entretien CNC décrit le refus du sépia et la coordination de patine, lumière et couleur. Créez une palette originale fondée sur les matériaux.",
          "pt": "A entrevista CNC descreve rejeição do sépia e coordenação de pátina, luz e cor. Crie uma paleta original baseada em materiais."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "sugarcanealley-casting",
        "area": "research",
        "prompt": {
          "en": "How should casting for a literary adaptation respect its local setting?",
          "nb": "Hvordan bør casting til en romanadaptasjon respektere lokalmiljøet?",
          "fr": "Comment le casting d’une adaptation respecte-t-il son milieu local ?",
          "pt": "Como deve o elenco de uma adaptação respeitar o contexto local?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every performance as literal historical testimony",
              "nb": "Behandle hvert skuespillerbidrag som bokstavelig historisk vitnesbyrd",
              "fr": "Traiter chaque jeu comme témoignage historique littéral",
              "pt": "Tratar toda interpretação como testemunho histórico literal"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use contextual research and consent-based rehearsals",
              "nb": "Bruk kontekstuell research og samtykkebaserte prøver",
              "fr": "Utiliser recherche contextualisée et répétitions consenties",
              "pt": "Usar pesquisa contextual e ensaios consentidos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Select performers solely through generic stereotypes",
              "nb": "Velg skuespillere bare gjennom generelle stereotypier",
              "fr": "Choisir les interprètes selon des stéréotypes génériques",
              "pt": "Selecionar intérpretes apenas por estereótipos genéricos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The CNC interview documents casting and the official film page identifies Zobel's adaptation and languages. Distinguish fictional performance from documentary testimony.",
          "nb": "CNC-intervjuet dokumenterer casting, og filmsiden identifiserer Zobel-adaptasjonen og språkene. Skill fiktivt spill fra dokumentariske vitnesbyrd.",
          "fr": "L’entretien CNC documente le casting et la fiche officielle identifie Zobel et les langues. Distinguez jeu fictif et témoignage documentaire.",
          "pt": "A entrevista CNC documenta elenco e a ficha oficial identifica Zobel e idiomas. Distinga interpretação ficcional de testemunho documental."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "sugarcanealley-songs",
        "area": "sound",
        "prompt": {
          "en": "How should traditional songs and newly composed music be distinguished?",
          "nb": "Hvordan bør tradisjonelle sanger skilles fra nykomponert musikk?",
          "fr": "Comment distinguer chants traditionnels et musique nouvellement composée ?",
          "pt": "Como distinguir canções tradicionais de música recém-composta?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all regional music as interchangeable background",
              "nb": "Behandle all regional musikk som utskiftbar bakgrunn",
              "fr": "Traiter toute musique régionale comme fond interchangeable",
              "pt": "Tratar música regional como fundo intercambiável"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every historical song was written for the film",
              "nb": "Anta at alle historiske sanger ble skrevet til filmen",
              "fr": "Supposer que tous les chants historiques furent écrits pour le film",
              "pt": "Supor que todas as canções históricas foram escritas para o filme"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Document provenance, permissions and separate musical credits",
              "nb": "Dokumenter proveniens, tillatelser og separate musikkbidrag",
              "fr": "Documenter provenance, autorisations et crédits distincts",
              "pt": "Documentar proveniência, permissões e créditos distintos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Palcy distinguishes composed music, traditional rhythms and retained workers' songs in the CNC interview. Plan an original cue sheet with provenance and attribution.",
          "nb": "Palcy skiller komponert musikk, tradisjonelle rytmer og bevarte arbeidssanger i CNC-intervjuet. Lag en egen lydplan med proveniens og kreditering.",
          "fr": "Palcy distingue musique composée, rythmes traditionnels et chants de travailleurs. Créez un plan sonore avec provenance et attribution.",
          "pt": "Palcy distingue música composta, ritmos tradicionais e canções de trabalhadores. Crie um plano sonoro com proveniência e atribuição."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_terminator_1984",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Night photography, independent resources and practical creature design",
      "nb": "Nattfoto, uavhengige ressurser og praktisk figurdesign",
      "fr": "Photographie nocturne, ressources indépendantes et créatures pratiques",
      "pt": "Fotografia noturna, recursos independentes e criaturas práticas"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Terminator",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/57224-THE-TERMINATOR"
      },
      {
        "id": "s1",
        "title": "Adam Greenberg on The Terminator",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/the-terminator/"
      },
      {
        "id": "s2",
        "title": "The Terminator came to me in a dream: a new interview with James Cameron",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/interviews/terminator-james-cameron"
      }
    ],
    "questions": [
      {
        "id": "theterminator-night",
        "area": "camera",
        "prompt": {
          "en": "How can limited night lighting support a fictional noir atmosphere?",
          "nb": "Hvordan kan begrenset nattbelysning støtte en fiktiv noir-atmosfære?",
          "fr": "Comment un éclairage nocturne limité soutient-il une atmosphère noire fictive ?",
          "pt": "Como pode iluminação noturna limitada apoiar uma atmosfera noir fictícia?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume darkness removes the need for exposure tests",
              "nb": "Anta at mørke fjerner behovet for eksponeringsprøver",
              "fr": "Supposer que l’obscurité dispense des essais d’exposition",
              "pt": "Supor que escuridão dispensa testes de exposição"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan motivated contrast and selective backlighting",
              "nb": "Planlegg motivert kontrast og selektivt motlys",
              "fr": "Prévoir contrastes motivés et contre-jour sélectif",
              "pt": "Planear contrastes motivados e contraluz seletiva"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Illuminate every area with identical flat light",
              "nb": "Belys alle områder med identisk flatt lys",
              "fr": "Éclairer toutes les zones avec une lumière plate identique",
              "pt": "Iluminar todas as áreas com luz plana idêntica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Greenberg's ASC account describes hard contrast and backlight under budget constraints. Sketch a safe lighting study without claiming an exact historical setup.",
          "nb": "Greenbergs ASC-beretning beskriver hard kontrast og motlys under budsjettbegrensninger. Skisser en trygg lysstudie uten å hevde et eksakt historisk oppsett.",
          "fr": "Greenberg décrit à l’ASC contraste et contre-jour sous contraintes budgétaires. Esquissez une étude sûre sans prétendre restituer le dispositif exact.",
          "pt": "Greenberg descreve à ASC contraste e contraluz sob limites orçamentais. Esboce um estudo seguro sem alegar reproduzir o dispositivo exato."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "theterminator-models",
        "area": "camera",
        "prompt": {
          "en": "How can different practical models serve different fictional shots?",
          "nb": "Hvordan kan ulike praktiske modeller tjene ulike fiktive bilder?",
          "fr": "Comment différents modèles pratiques servent-ils différents plans fictifs ?",
          "pt": "Como podem diferentes modelos práticos servir diferentes planos fictícios?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Require a single model for every possible shot",
              "nb": "Krev én modell for alle tenkelige bilder",
              "fr": "Exiger un modèle unique pour tous les plans",
              "pt": "Exigir um modelo único para todos os planos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use hazardous mechanical effects in a classroom demonstration",
              "nb": "Bruk farlige mekaniske effekter i en undervisningsdemonstrasjon",
              "fr": "Employer des effets mécaniques dangereux en classe",
              "pt": "Usar efeitos mecânicos perigosos numa aula"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Choose model scale and articulation according to framing",
              "nb": "Velg modellskala og bevegelighet etter utsnitt",
              "fr": "Choisir échelle et articulation selon le cadrage",
              "pt": "Escolher escala e articulação conforme enquadramento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cameron distinguishes several Winston creature systems, including a stop-motion miniature. Compare benign tabletop models rather than replicating hazardous effects.",
          "nb": "Cameron skiller flere av Winstons figursystemer, inkludert stop-motion-miniatyr. Sammenlign ufarlige bordmodeller fremfor å gjenskape farlige effekter.",
          "fr": "Cameron distingue plusieurs dispositifs de Winston, dont une miniature animée. Comparez des maquettes inoffensives sans reproduire d’effets dangereux.",
          "pt": "Cameron distingue sistemas de Winston, incluindo miniatura animada. Compare modelos inofensivos sem reproduzir efeitos perigosos."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "theterminator-development",
        "area": "research",
        "prompt": {
          "en": "How should a small independent feature track development and effects work?",
          "nb": "Hvordan bør en liten uavhengig langfilm følge utvikling og effektarbeid?",
          "fr": "Comment suivre développement et effets d’un petit long métrage indépendant ?",
          "pt": "Como acompanhar desenvolvimento e efeitos de uma pequena longa independente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record treatment revisions and separate production department responsibilities",
              "nb": "Registrer treatmentrevisjoner og separate avdelingsansvar",
              "fr": "Consigner révisions du traitement et responsabilités distinctes",
              "pt": "Registar revisões do tratamento e responsabilidades distintas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Credit all development and effects to one person",
              "nb": "Krediter all utvikling og effektarbeid til én person",
              "fr": "Créditer développement et effets à une seule personne",
              "pt": "Creditar desenvolvimento e efeitos a uma única pessoa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later franchise success as guaranteed financing",
              "nb": "Behandle senere franchisesuksess som garantert finansiering",
              "fr": "Traiter le succès ultérieur comme financement garanti",
              "pt": "Tratar sucesso posterior como financiamento garantido"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents the independent production and effects chronology, while Cameron recalls story development. Separate development evidence from subsequent commercial reception.",
          "nb": "AFI dokumenterer uavhengig produksjon og effektkronologi, mens Cameron beskriver historieutviklingen. Skill utviklingsbelegg fra senere kommersiell mottakelse.",
          "fr": "L’AFI documente production indépendante et effets ; Cameron évoque le développement. Distinguez preuves de développement et réception commerciale ultérieure.",
          "pt": "A AFI documenta produção independente e efeitos; Cameron recorda desenvolvimento. Distinga provas de desenvolvimento de receção comercial posterior."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_back_to_the_future_1985",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Recasting, period continuity and coordinated optical effects",
      "nb": "Omcasting, periodekontinuitet og samordnede optiske effekter",
      "fr": "Changement de casting, continuité historique et effets optiques",
      "pt": "Mudança de elenco, continuidade de época e efeitos óticos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Back to the Future",
        "publisher": "AFI Catalog of Feature Films",
        "url": "https://catalog.afi.com/Film/55763-BACK-TO-THE-FUTURE"
      },
      {
        "id": "s1",
        "title": "Dean Cundey Remembers Back to the Future",
        "publisher": "Industrial Light & Magic",
        "url": "https://www.ilm.com/back-to-the-future-dean-cundey-interview-ilm-vfx/"
      },
      {
        "id": "s2",
        "title": "Back to the Future Production Notes",
        "publisher": "Universal City Studios / Amblin Entertainment official Back to the Future site",
        "url": "https://www.backtothefuture.com/movies/production-notes-1985"
      },
      {
        "id": "s3",
        "title": "Back to the Future Credits",
        "publisher": "Universal City Studios / Amblin Entertainment official Back to the Future site",
        "url": "https://www.backtothefuture.com/movies/credits-1985"
      },
      {
        "id": "s4",
        "title": "Back to the Future (1985)",
        "publisher": "Amblin",
        "url": "https://amblin.com/movie/back-to-the-future/"
      }
    ],
    "questions": [
      {
        "id": "backtothefuture-recast",
        "area": "research",
        "prompt": {
          "en": "How should a lead performer replacement be managed in production?",
          "nb": "Hvordan bør utskifting av hovedskuespiller håndteres i produksjonen?",
          "fr": "Comment gérer le remplacement d’un acteur principal en production ?",
          "pt": "Como gerir substituição de um ator principal na produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all previously filmed footage can be reused unchanged",
              "nb": "Anta at alle tidligere opptak kan gjenbrukes uendret",
              "fr": "Supposer que toutes les images antérieures restent utilisables",
              "pt": "Supor que todas as imagens anteriores podem ser reutilizadas sem alterações"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the replacement performer's other commitments",
              "nb": "Ignorer den nye skuespillerens øvrige forpliktelser",
              "fr": "Ignorer les autres engagements du nouvel interprète",
              "pt": "Ignorar outros compromissos do novo intérprete"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Audit affected scenes, schedules and continuity requirements",
              "nb": "Kartlegg berørte scener, tidsplaner og kontinuitetskrav",
              "fr": "Recenser scènes touchées, calendriers et exigences de raccord",
              "pt": "Mapear cenas afetadas, calendários e requisitos de continuidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI and the production notes document Fox replacing Stoltz and overlapping television commitments. Design a fictional rescheduling plan respecting cast and crew constraints.",
          "nb": "AFI og produksjonsnotatene dokumenterer at Fox erstattet Stoltz og overlappende TV-forpliktelser. Lag en fiktiv omplanlegging som respekterer teamets begrensninger.",
          "fr": "L’AFI et les notes documentent le remplacement par Fox et ses engagements TV. Concevez un calendrier fictif respectant les contraintes de l’équipe.",
          "pt": "A AFI e as notas documentam substituição por Fox e compromissos televisivos. Crie um calendário fictício que respeite limitações da equipa."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "backtothefuture-periods",
        "area": "camera",
        "prompt": {
          "en": "How can one fictional town remain recognizable across two time periods?",
          "nb": "Hvordan kan én fiktiv by forbli gjenkjennelig gjennom to tidsperioder?",
          "fr": "Comment une ville fictive reste-t-elle reconnaissable à deux époques ?",
          "pt": "Como pode uma cidade fictícia permanecer reconhecível em duas épocas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Keep spatial landmarks while changing period design details",
              "nb": "Behold romlige landemerker og endre tidsriktige designdetaljer",
              "fr": "Garder les repères spatiaux tout en modifiant les détails d’époque",
              "pt": "Manter referências espaciais alterando detalhes de época"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace every landmark between the two time periods",
              "nb": "Erstatt alle landemerker mellom tidsperiodene",
              "fr": "Remplacer tous les repères entre les deux époques",
              "pt": "Substituir todas as referências entre as duas épocas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use identical costumes and props in both periods",
              "nb": "Bruk identiske kostymer og rekvisitter i begge perioder",
              "fr": "Employer costumes et accessoires identiques aux deux époques",
              "pt": "Usar figurinos e adereços idênticos nas duas épocas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Official credits identify design, costume and photographic departments, while production notes describe the Universal base and age makeup. Plan original paired period designs.",
          "nb": "Offisielle krediteringer identifiserer scenografi, kostyme og foto, mens produksjonsnotater beskriver Universal-basen og alderssminke. Lag egne sammenhørende periodedesign.",
          "fr": "Les crédits identifient décor, costume et image ; les notes décrivent Universal et le maquillage d’âge. Concevez deux décors d’époque liés.",
          "pt": "Os créditos identificam cenografia, figurinos e imagem; notas descrevem Universal e maquilhagem de idade. Crie dois desenhos de época ligados."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "backtothefuture-effects",
        "area": "camera",
        "prompt": {
          "en": "How can a small number of composite shots be planned efficiently?",
          "nb": "Hvordan kan et begrenset antall komposittbilder planlegges effektivt?",
          "fr": "Comment planifier efficacement un petit nombre de plans composites ?",
          "pt": "Como planear eficientemente um pequeno número de planos compósitos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every shot required a visual effect",
              "nb": "Anta at alle bilder krevde en visuell effekt",
              "fr": "Supposer que chaque plan exigeait un effet visuel",
              "pt": "Supor que cada plano exigia um efeito visual"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Identify required layers and share reference frames before filming",
              "nb": "Identifiser nødvendige lag og del referansebilder før opptak",
              "fr": "Identifier les couches requises et partager des références avant tournage",
              "pt": "Identificar camadas necessárias e partilhar referências antes da filmagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Leave matching perspective and lighting entirely to postproduction",
              "nb": "Overlat samsvar i perspektiv og lys helt til etterarbeidet",
              "fr": "Laisser toute cohérence de perspective et lumière à la postproduction",
              "pt": "Deixar toda coerência de perspetiva e luz para pós-produção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cundey's ILM retrospective describes fewer than thirty effects shots and live-action coordination. Plan a benign original miniature composite with explicit reference requirements.",
          "nb": "Cundeys ILM-retrospektiv beskriver færre enn tretti effektbilder og samordning med realfilm. Planlegg et ufarlig miniatyrkompositt med tydelige referansekrav.",
          "fr": "Le récit ILM de Cundey décrit moins de trente effets et la coordination avec les prises réelles. Concevez un composite miniature inoffensif avec références explicites.",
          "pt": "O relato ILM de Cundey descreve menos de trinta efeitos e coordenação com filmagem real. Planeie um compósito de miniatura inofensivo com referências explícitas."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_shes_gotta_have_it_1986",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Independent financing, Brooklyn settings and monochrome contrast",
      "nb": "Uavhengig finansiering, Brooklyn-miljøer og monokrom kontrast",
      "fr": "Financement indépendant, Brooklyn et contraste monochrome",
      "pt": "Financiamento independente, Brooklyn e contraste monocromático"
    },
    "sources": [
      {
        "id": "s0",
        "title": "She's Gotta Have It",
        "publisher": "AFI Catalog of Feature Films",
        "url": "https://catalog.afi.com/Film/57471-SHES-GOTTAHAVEIT"
      },
      {
        "id": "s1",
        "title": "Where to begin with Spike Lee",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/where-begin-with-spike-lee"
      },
      {
        "id": "s2",
        "title": "She's Gotta Have It",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/926-she-s-gotta-have-it"
      },
      {
        "id": "s3",
        "title": "Brief Descriptions and Expanded Essays of National Film Registry Titles",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      }
    ],
    "questions": [
      {
        "id": "shesgottahaveit-budget",
        "area": "research",
        "prompt": {
          "en": "How can a small independent film allocate scarce production resources?",
          "nb": "Hvordan kan en liten uavhengig film fordele knappe produksjonsressurser?",
          "fr": "Comment un petit film indépendant répartit-il ses ressources limitées ?",
          "pt": "Como pode um pequeno filme independente distribuir recursos escassos?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Prioritize essential scenes while budgeting for permits and worker protection",
              "nb": "Prioriter nødvendige scener og budsjetter for tillatelser og arbeidervern",
              "fr": "Prioriser scènes essentielles, autorisations et protection des travailleurs",
              "pt": "Priorizar cenas essenciais, licenças e proteção dos trabalhadores"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Omit insurance and permissions to imitate historical production",
              "nb": "Utelat forsikring og tillatelser for å etterligne historisk produksjon",
              "fr": "Omettre assurances et autorisations pour imiter la production historique",
              "pt": "Omitir seguros e licenças para imitar produção histórica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later distribution revenue as guaranteed initial funding",
              "nb": "Behandle senere distribusjonsinntekter som garantert startfinansiering",
              "fr": "Traiter les recettes ultérieures comme financement initial garanti",
              "pt": "Tratar receitas posteriores como financiamento inicial garantido"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records the twelve-day low-budget production and difficult working conditions. Learn from its resource constraints without reproducing unsafe or unauthorized practices.",
          "nb": "AFI dokumenterer tolvdagers lavbudsjettproduksjon og vanskelige arbeidsforhold. Lær av ressursbegrensningene uten å gjenta utrygge eller uautoriserte praksiser.",
          "fr": "L’AFI documente douze jours de tournage et des conditions difficiles. Étudiez les contraintes sans reproduire les pratiques dangereuses ou non autorisées.",
          "pt": "A AFI documenta doze dias de filmagem e condições difíceis. Estude limitações sem reproduzir práticas inseguras ou não autorizadas."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "shesgottahaveit-color",
        "area": "camera",
        "prompt": {
          "en": "How can a single color sequence contrast with a monochrome feature?",
          "nb": "Hvordan kan én fargesekvens kontrastere med en monokrom langfilm?",
          "fr": "Comment une séquence couleur contraste-t-elle avec un film monochrome ?",
          "pt": "Como pode uma sequência a cores contrastar com uma longa monocromática?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the entire feature was originally shot in color",
              "nb": "Anta at hele langfilmen opprinnelig ble tatt opp i farger",
              "fr": "Supposer que tout le film fut tourné en couleur",
              "pt": "Supor que toda a longa foi filmada a cores"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Give the color transition a specific narrative and rhythmic purpose",
              "nb": "Gi fargeovergangen et bestemt fortellingsmessig og rytmisk formål",
              "fr": "Donner à la transition couleur une fonction narrative et rythmique",
              "pt": "Dar à transição de cor uma função narrativa e rítmica"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Introduce color randomly without narrative motivation",
              "nb": "Introduser farge tilfeldig uten fortellingsmessig motivasjon",
              "fr": "Introduire la couleur au hasard sans motivation narrative",
              "pt": "Introduzir cor aleatoriamente sem motivação narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI and BFI distinguish the predominantly black-and-white film from its color dance sequence. Design an original transition and acknowledge Dickerson's cinematography.",
          "nb": "AFI og BFI skiller den hovedsakelig svart-hvite filmen fra dansesekvensen i farger. Lag en egen overgang og anerkjenn Dickersons fotoarbeid.",
          "fr": "L’AFI et le BFI distinguent le noir et blanc dominant de la danse en couleur. Créez une transition originale et reconnaissez l’image de Dickerson.",
          "pt": "A AFI e o BFI distinguem preto e branco dominante da dança a cores. Crie uma transição original e reconheça a fotografia de Dickerson."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "shesgottahaveit-format",
        "area": "research",
        "prompt": {
          "en": "How should an independent film's capture and release formats be recorded?",
          "nb": "Hvordan bør en uavhengig films opptaks- og utgivelsesformater registreres?",
          "fr": "Comment noter les formats de captation et de sortie d’un film indépendant ?",
          "pt": "Como registar formatos de captação e lançamento de um filme independente?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer the original capture format from a later print alone",
              "nb": "Utled originalt opptaksformat fra en senere kopi alene",
              "fr": "Déduire la captation uniquement d’une copie ultérieure",
              "pt": "Deduzir captação original apenas de uma cópia posterior"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat registry selection as original production documentation",
              "nb": "Behandle registerutvelgelse som opprinnelig produksjonsdokumentasjon",
              "fr": "Traiter l’inscription au registre comme preuve de production originale",
              "pt": "Tratar seleção para registo como prova de produção original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish Super 16 capture from the later theatrical print",
              "nb": "Skill Super 16-opptak fra den senere kinokopien",
              "fr": "Distinguer captation Super 16 et copie cinéma ultérieure",
              "pt": "Distinguir captação Super 16 e cópia de cinema posterior"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI documents Super 16 origination and 35 mm blow-up; the Library records later preservation recognition. Keep capture, release and reception separate.",
          "nb": "AFI dokumenterer Super 16-opptak og oppblåsing til 35 mm; biblioteket registrerer senere bevaringsanerkjennelse. Skill opptak, utgivelse og mottakelse.",
          "fr": "L’AFI documente Super 16 et gonflage 35 mm ; la Bibliothèque note la reconnaissance ultérieure. Distinguez captation, sortie et réception.",
          "pt": "A AFI documenta Super 16 e ampliação 35 mm; a Biblioteca regista reconhecimento posterior. Distinga captação, lançamento e receção."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_a_better_tomorrow_1986",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Collaborative adaptation, actor-centered rhythm and studio history",
      "nb": "Kollektiv adaptasjon, skuespillersentrert rytme og studiohistorie",
      "fr": "Adaptation collective, rythme centré sur le jeu et histoire des studios",
      "pt": "Adaptação coletiva, ritmo centrado na interpretação e história dos estúdios"
    },
    "sources": [
      {
        "id": "s0",
        "title": "A Better Tomorrow (4K Digitally Restored Version)",
        "publisher": "Hong Kong Film Archive",
        "url": "https://www.filmarchive.gov.hk/en/web/hkfa/2025/mtgseoul/pe-event-2025-mtgseoul-fs-film05.html"
      },
      {
        "id": "s1",
        "title": "A Better Tomorrow",
        "publisher": "Hong Kong Film Archive",
        "url": "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2016-9-1-11.html"
      },
      {
        "id": "s2",
        "title": "John Woo on beginnings and A Better Tomorrow",
        "publisher": "BFI Southbank / Sight and Sound",
        "url": "https://bfidatadigipres.github.io/bullets%20and%20brotherhood%3Cbr%3Ethe%20films%20of%20john%20woo/2026/07/03/better-tomorrow/"
      },
      {
        "id": "s3",
        "title": "I use musical theory to shoot an action sequence: an exclusive online interview with John Woo",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/interviews/john-woo-better-tomorrow-killer-hard-boiled"
      },
      {
        "id": "s4",
        "title": "The Essence of Entertainment: Cinema City's Glory Days",
        "publisher": "Hong Kong Film Archive",
        "url": "https://www.filmarchive.gov.hk/documents/6.-Research-and-Publication/06-05_Publications/04_Film-Companies/The-Essence-of-Entertainment---Cinema-Citys-Glory-Days/topicalvolumes_intro30_e.pdf"
      }
    ],
    "questions": [
      {
        "id": "abettertomorrow-adaptation",
        "area": "research",
        "prompt": {
          "en": "How can a remake introduce a new character without losing its source relationship?",
          "nb": "Hvordan kan en nyinnspilling introdusere en ny figur uten å miste forholdet til forelegget?",
          "fr": "Comment un remake introduit-il un personnage nouveau sans perdre son rapport à la source ?",
          "pt": "Como pode um remake introduzir uma personagem nova mantendo relação com a fonte?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore collaborative screenplay development entirely",
              "nb": "Ignorer kollektiv manusutvikling fullstendig",
              "fr": "Ignorer complètement l’écriture collective",
              "pt": "Ignorar completamente desenvolvimento coletivo do argumento"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare retained themes and new dramatic relationships",
              "nb": "Sammenlign beholdte temaer og nye dramatiske relasjoner",
              "fr": "Comparer thèmes conservés et nouveaux rapports dramatiques",
              "pt": "Comparar temas mantidos e novas relações dramáticas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every character as unchanged from the earlier film",
              "nb": "Behandle alle figurer som uendret fra den tidligere filmen",
              "fr": "Traiter chaque personnage comme inchangé depuis le film précédent",
              "pt": "Tratar cada personagem como inalterada do filme anterior"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "HKFA identifies the remake lineage and the new character Mark; Woo recalls shared development. Map changes in an original fictional adaptation without conflating versions.",
          "nb": "HKFA identifiserer nyinnspillingslinjen og den nye figuren Mark; Woo beskriver felles utvikling. Kartlegg endringer i en egen fiktiv adaptasjon uten å blande versjoner.",
          "fr": "HKFA identifie la filiation du remake et le nouveau personnage Mark ; Woo évoque le développement partagé. Cartographiez une adaptation originale sans confondre les versions.",
          "pt": "HKFA identifica a linhagem do remake e a nova personagem Mark; Woo recorda desenvolvimento partilhado. Mapeie uma adaptação original sem confundir versões."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "abettertomorrow-rhythm",
        "area": "camera",
        "prompt": {
          "en": "How can musical thinking inform a safe movement montage?",
          "nb": "Hvordan kan musikalsk tenkning informere en trygg bevegelsesmontasje?",
          "fr": "Comment une pensée musicale nourrit-elle un montage de mouvements sûr ?",
          "pt": "Como pode pensamento musical informar uma montagem segura de movimentos?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Require actual dangerous action to create rhythmic energy",
              "nb": "Krev faktisk farlig handling for å skape rytmisk energi",
              "fr": "Exiger une action dangereuse pour créer une énergie rythmique",
              "pt": "Exigir ação perigosa para criar energia rítmica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use one identical shot duration regardless of performance",
              "nb": "Bruk identisk bildelengde uansett skuespill",
              "fr": "Utiliser une durée identique quel que soit le jeu",
              "pt": "Usar duração idêntica independentemente da interpretação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare accents, pauses and shot durations in a benign scene",
              "nb": "Sammenlign aksenter, pauser og bildelengder i en ufarlig scene",
              "fr": "Comparer accents, pauses et durées dans une scène inoffensive",
              "pt": "Comparar acentos, pausas e durações numa cena inofensiva"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Woo discusses actor-centered direction and musical rhythm in his interview. Study non-contact movement with original cues, without assigning general techniques to specific historical shots.",
          "nb": "Woo drøfter skuespillersentrert regi og musikalsk rytme i intervjuet. Studer kontaktfri bevegelse med egne signaler uten å tilskrive generelle teknikker bestemte historiske bilder.",
          "fr": "Woo évoque direction des acteurs et rythme musical. Étudiez des mouvements sans contact avec des motifs originaux sans attribuer ses méthodes générales à des plans précis.",
          "pt": "Woo aborda direção de atores e ritmo musical. Estude movimentos sem contacto com motivos originais sem atribuir métodos gerais a planos específicos."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "abettertomorrow-studio",
        "area": "research",
        "prompt": {
          "en": "How should an independent workshop's partnership with a studio be credited?",
          "nb": "Hvordan bør et uavhengig verksteds samarbeid med et studio krediteres?",
          "fr": "Comment créditer le partenariat d’un atelier indépendant avec un studio ?",
          "pt": "Como creditar parceria de uma oficina independente com um estúdio?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate development support, production companies and creative roles",
              "nb": "Skill utviklingsstøtte, produksjonsselskaper og kreative roller",
              "fr": "Distinguer soutien au développement, sociétés et rôles créatifs",
              "pt": "Distinguir apoio ao desenvolvimento, empresas e funções criativas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute all production work to one director",
              "nb": "Tilskriv alt produksjonsarbeid én regissør",
              "fr": "Attribuer toute production à un seul réalisateur",
              "pt": "Atribuir toda produção a um único realizador"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume commercial success proves a specific financing arrangement",
              "nb": "Anta at kommersiell suksess beviser en bestemt finansieringsavtale",
              "fr": "Supposer que le succès prouve un financement précis",
              "pt": "Supor que sucesso prova um financiamento específico"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "HKFA documents Cinema City and Film Workshop's partnership, while Woo recalls Tsui Hark's support. Preserve distinct institutional and creative contributions.",
          "nb": "HKFA dokumenterer Cinema City og Film Workshops partnerskap, mens Woo beskriver Tsui Harks støtte. Bevar ulike institusjonelle og kreative bidrag.",
          "fr": "HKFA documente le partenariat Cinema City et Film Workshop ; Woo évoque le soutien de Tsui Hark. Préservez les contributions distinctes.",
          "pt": "HKFA documenta parceria Cinema City e Film Workshop; Woo recorda apoio de Tsui Hark. Preserve contributos distintos."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_robocop_1987",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Subjective framing, miniature effects and editorial versions",
      "nb": "Subjektivt utsnitt, miniatyreffekter og klippeversjoner",
      "fr": "Cadrage subjectif, effets miniatures et versions montées",
      "pt": "Enquadramento subjetivo, efeitos de miniaturas e versões editadas"
    },
    "sources": [
      {
        "id": "s0",
        "title": "RoboCop",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/67061-ROBOCOP"
      },
      {
        "id": "s1",
        "title": "RoboCop (1987) / Jost Vacano, ASC, BVK",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/podcasts/robocop-1987-jost-vacano-asc"
      },
      {
        "id": "s2",
        "title": "Tried-and-True Style for RoboCop",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/robocop-tippett-animation"
      },
      {
        "id": "s3",
        "title": "The 60th Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1988"
      },
      {
        "id": "s4",
        "title": "RoboCop (1987)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/531da7bc-ea13-57f2-997c-ebf02239623d/robocop"
      }
    ],
    "questions": [
      {
        "id": "robocop-reveal",
        "area": "camera",
        "prompt": {
          "en": "How can framing delay the reveal of a fictional character design?",
          "nb": "Hvordan kan utsnitt forsinke avsløringen av en fiktiv figurdesign?",
          "fr": "Comment le cadrage retarde-t-il la révélation d’un personnage fictif ?",
          "pt": "Como pode enquadramento adiar revelação do design de uma personagem fictícia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Show the complete design identically in every frame",
              "nb": "Vis hele designen identisk i hvert bilde",
              "fr": "Montrer le design complet de façon identique partout",
              "pt": "Mostrar design completo de forma idêntica em todos os planos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume subjective framing is equivalent to objective documentation",
              "nb": "Anta at subjektivt utsnitt tilsvarer objektiv dokumentasjon",
              "fr": "Supposer que le cadre subjectif équivaut à une preuve objective",
              "pt": "Supor que enquadramento subjetivo equivale a documentação objetiva"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Sequence partial views, reactions and later wider framing",
              "nb": "Sett delutsnitt, reaksjoner og senere bredere utsnitt i rekkefølge",
              "fr": "Enchaîner vues partielles, réactions et cadrages plus larges",
              "pt": "Sequenciar vistas parciais, reações e enquadramentos mais amplos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Vacano's ASC account describes subjective framing and a delayed full-body reveal. Create an original benign character introduction with planned visual information.",
          "nb": "Vacanos ASC-beretning beskriver subjektivt utsnitt og forsinket helfiguravsløring. Lag en egen ufarlig figurintroduksjon med planlagt bildeinformasjon.",
          "fr": "Vacano décrit à l’ASC le cadrage subjectif et la révélation différée. Créez une introduction originale avec information visuelle planifiée.",
          "pt": "Vacano descreve à ASC enquadramento subjetivo e revelação tardia. Crie uma introdução original com informação visual planeada."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "robocop-miniature",
        "area": "camera",
        "prompt": {
          "en": "How can a miniature effect be integrated with a photographed background?",
          "nb": "Hvordan kan en miniatyreffekt integreres med en fotografert bakgrunn?",
          "fr": "Comment intégrer une miniature à un arrière-plan photographié ?",
          "pt": "Como integrar um efeito de miniatura com um fundo fotografado?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Match scale, perspective and light using safe tabletop models",
              "nb": "Samordne skala, perspektiv og lys med trygge bordmodeller",
              "fr": "Accorder échelle, perspective et lumière avec des maquettes sûres",
              "pt": "Combinar escala, perspetiva e luz com modelos seguros de mesa"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Ignore background geometry when composing the miniature",
              "nb": "Ignorer bakgrunnsgeometri ved komposisjon av miniatyren",
              "fr": "Ignorer la géométrie du fond lors de la composition",
              "pt": "Ignorar geometria do fundo ao compor a miniatura"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the historical effects were all digitally generated",
              "nb": "Anta at de historiske effektene var digitalt generert",
              "fr": "Supposer que tous les effets historiques étaient numériques",
              "pt": "Supor que todos os efeitos históricos eram digitais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC documents Tippett's stop-motion team and rear-projected backgrounds. Compare original tabletop techniques while distinguishing optical and digital processes.",
          "nb": "ASC dokumenterer Tippetts stop-motion-team og bakprojiserte bakgrunner. Sammenlign egne bordmodellteknikker og skill optiske og digitale prosesser.",
          "fr": "L’ASC documente l’équipe stop motion de Tippett et les fonds rétroprojetés. Comparez des maquettes originales en distinguant optique et numérique.",
          "pt": "A ASC documenta equipa stop motion de Tippett e fundos retroprojetados. Compare técnicas originais de mesa distinguindo ótica e digital."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "robocop-versions",
        "area": "research",
        "prompt": {
          "en": "How should a film's rating-related revisions be documented?",
          "nb": "Hvordan bør en films aldersgrenserelevante revisjoner dokumenteres?",
          "fr": "Comment documenter les révisions liées à la classification d’un film ?",
          "pt": "Como documentar revisões ligadas à classificação de um filme?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later home-video metadata as the sole production record",
              "nb": "Behandle senere hjemmevideometadata som eneste produksjonsbelegg",
              "fr": "Traiter les métadonnées vidéo ultérieures comme seule preuve",
              "pt": "Tratar metadados de vídeo posteriores como único registo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record documented edits and identify each released edition",
              "nb": "Registrer dokumenterte klipp og identifiser hver utgitte utgave",
              "fr": "Consigner modifications documentées et identifier chaque version sortie",
              "pt": "Registar cortes documentados e identificar cada edição lançada"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume any runtime difference proves a particular cut",
              "nb": "Anta at enhver spilletidsforskjell beviser et bestemt klipp",
              "fr": "Supposer que tout écart de durée prouve une coupe précise",
              "pt": "Supor que toda diferença de duração prova um corte específico"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI records rating-related versioning; BFI and AFI give different catalogue runtimes. Keep edition provenance and documented revisions separate from conjecture.",
          "nb": "AFI dokumenterer versjoner knyttet til aldersgrense; BFI og AFI oppgir ulike spilletider. Skill utgaveproveniens og dokumenterte revisjoner fra gjetning.",
          "fr": "L’AFI documente les versions liées à la classification ; BFI et AFI donnent des durées différentes. Distinguez provenance, révisions et conjectures.",
          "pt": "A AFI documenta versões ligadas à classificação; BFI e AFI indicam durações distintas. Distinga proveniência, revisões e conjecturas."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_salaam_bombay_1988",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ethical workshops, location naturalism and international financing",
      "nb": "Etiske verksteder, stedsnaturalisme og internasjonal finansiering",
      "fr": "Ateliers éthiques, naturalisme des lieux et financement international",
      "pt": "Oficinas éticas, naturalismo dos locais e financiamento internacional"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Salaam Bombay!: A View from the Streets",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/9008-salaam-bombay-a-view-from-the-streets"
      },
      {
        "id": "s1",
        "title": "Mira Nair interview: street-child workshop and Salaam Bombay! development",
        "publisher": "The Christian Science Monitor",
        "url": "https://www.csmonitor.com/1988/1012/lfl07.html"
      },
      {
        "id": "s2",
        "title": "Salaam Bombay!",
        "publisher": "Directors' Fortnight / Quinzaine des cinéastes",
        "url": "https://www.quinzaine-cineastes.fr/en/film/salaam-bombay"
      },
      {
        "id": "s3",
        "title": "Salaam Bombay",
        "publisher": "Danish Film Institute",
        "url": "https://www.dfi.dk/viden-om-film/filmdatabasen/film/salaam-bombay"
      },
      {
        "id": "s4",
        "title": "Salaam Bombay! - 1988 Caméra d'or",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/salaam-bombay/"
      },
      {
        "id": "s5",
        "title": "The 61st Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1989"
      }
    ],
    "questions": [
      {
        "id": "salaambombay-workshop",
        "area": "research",
        "prompt": {
          "en": "How should a film workshop with young participants be organized today?",
          "nb": "Hvordan bør et filmverksted med unge deltakere organiseres i dag?",
          "fr": "Comment organiser aujourd’hui un atelier de cinéma avec de jeunes participants ?",
          "pt": "Como organizar hoje uma oficina de cinema com jovens participantes?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Provide consent, safeguarding, fair compensation and age-appropriate activities",
              "nb": "Sørg for samtykke, trygghet, rettferdig betaling og alderstilpassede aktiviteter",
              "fr": "Prévoir consentement, protection, rémunération juste et activités adaptées",
              "pt": "Garantir consentimento, proteção, remuneração justa e atividades adequadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use personal experiences without permission or support",
              "nb": "Bruk personlige erfaringer uten tillatelse eller støtte",
              "fr": "Utiliser les expériences personnelles sans permission ni soutien",
              "pt": "Usar experiências pessoais sem autorização ou apoio"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat vulnerability as a substitute for acting preparation",
              "nb": "Behandle sårbarhet som erstatning for skuespillerforberedelse",
              "fr": "Traiter la vulnérabilité comme substitut à la préparation du jeu",
              "pt": "Tratar vulnerabilidade como substituto da preparação interpretativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nair and Criterion describe paid workshops, mime and improvisation. Design a present-day fictional workshop with child protection and informed consent rather than copying historical procedures uncritically.",
          "nb": "Nair og Criterion beskriver betalte verksteder, mime og improvisasjon. Lag et moderne fiktivt verksted med barnevern og informert samtykke fremfor ukritisk historisk gjenskaping.",
          "fr": "Nair et Criterion décrivent ateliers rémunérés, mime et improvisation. Concevez un atelier fictif actuel avec protection des enfants et consentement éclairé.",
          "pt": "Nair e Criterion descrevem oficinas pagas, mímica e improvisação. Conceba uma oficina fictícia atual com proteção infantil e consentimento informado."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "salaambombay-street",
        "area": "camera",
        "prompt": {
          "en": "How can location photography show everyday life without reducing people to scenery?",
          "nb": "Hvordan kan stedsfoto vise hverdagsliv uten å redusere mennesker til dekor?",
          "fr": "Comment filmer le quotidien en extérieur sans réduire les personnes à un décor ?",
          "pt": "Como fotografar o quotidiano em exteriores sem reduzir pessoas a cenário?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat fictional scenes as unmediated documentary testimony",
              "nb": "Behandle fiktive scener som uformidlet dokumentarisk vitnesbyrd",
              "fr": "Traiter la fiction comme témoignage documentaire immédiat",
              "pt": "Tratar ficção como testemunho documental imediato"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Frame people as agents within specific social and spatial contexts",
              "nb": "Komponer mennesker som handlende personer i bestemte sosiale og romlige sammenhenger",
              "fr": "Cadrer les personnes comme acteurs dans leur contexte social et spatial",
              "pt": "Enquadrar pessoas como agentes em contextos sociais e espaciais específicos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use anonymous hardship as interchangeable visual decoration",
              "nb": "Bruk anonym nød som utskiftbar visuell dekor",
              "fr": "Utiliser la détresse anonyme comme décor interchangeable",
              "pt": "Usar sofrimento anónimo como decoração visual intercambiável"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion distinguishes the crafted fiction and Sissel's location photography. Plan an original respectful scene that separates visual realism from documentary proof.",
          "nb": "Criterion skiller den bearbeidede fiksjonen og Sissels stedsfoto. Planlegg en egen respektfull scene som skiller visuell realisme fra dokumentarisk bevis.",
          "fr": "Criterion distingue fiction construite et photographie de Sissel. Concevez une scène respectueuse distinguant réalisme et preuve documentaire.",
          "pt": "A Criterion distingue ficção construída e fotografia de Sissel. Planeie uma cena respeitosa distinguindo realismo e prova documental."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      },
      {
        "id": "salaambombay-finance",
        "area": "research",
        "prompt": {
          "en": "How should international co-production partnerships be mapped?",
          "nb": "Hvordan bør internasjonale samproduksjonspartnerskap kartlegges?",
          "fr": "Comment cartographier les partenariats internationaux de coproduction ?",
          "pt": "Como mapear parcerias internacionais de coprodução?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every listed organization supplied equal financing",
              "nb": "Anta at alle oppførte organisasjoner ga lik finansiering",
              "fr": "Supposer que chaque organisme a fourni le même financement",
              "pt": "Supor que cada organização forneceu financiamento igual"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat awards as evidence of the original funding amounts",
              "nb": "Behandle priser som bevis på opprinnelige finansieringsbeløp",
              "fr": "Traiter les prix comme preuve des montants initiaux",
              "pt": "Tratar prémios como prova dos montantes originais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record each partner's documented role and separate festival reception",
              "nb": "Registrer hver partners dokumenterte rolle og skill festivalmottakelse",
              "fr": "Consigner le rôle attesté de chaque partenaire et distinguer la réception",
              "pt": "Registar função documentada de cada parceiro e distinguir receção em festivais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Directors' Fortnight and DFI document production partners; Cannes records later recognition. Build a source-based partner map without inventing financial shares.",
          "nb": "Directors' Fortnight og DFI dokumenterer produksjonspartnere; Cannes registrerer senere anerkjennelse. Lag et kildebasert partnerkart uten oppdiktede finansieringsandeler.",
          "fr": "La Quinzaine et le DFI documentent les partenaires ; Cannes note la reconnaissance ultérieure. Cartographiez les partenaires sans inventer les parts financières.",
          "pt": "A Quinzena e o DFI documentam parceiros; Cannes regista reconhecimento posterior. Mapeie parceiros sem inventar participações financeiras."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_do_the_right_thing_1989",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Neighborhood production, heat palette and commissioned music",
      "nb": "Nabolagsproduksjon, varm fargepalett og bestilt musikk",
      "fr": "Production de quartier, palette de chaleur et musique commandée",
      "pt": "Produção de bairro, paleta de calor e música encomendada"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Do the Right Thing",
        "publisher": "AFI Catalog of Feature Films",
        "url": "https://catalog.afi.com/Film/67050-DO-THE-RIGHT-THING"
      },
      {
        "id": "s1",
        "title": "Do the Right Thing",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/286-do-the-right-thing"
      },
      {
        "id": "s2",
        "title": "A Palette That Sizzles On-Screen",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/6519-a-palette-that-sizzles-on-screen"
      },
      {
        "id": "s3",
        "title": "Interview: Spike Lee on Do The Right Thing",
        "publisher": "Film Comment / Film at Lincoln Center",
        "url": "https://www.filmcomment.com/article/interview-spike-lee/"
      },
      {
        "id": "s4",
        "title": "Do the right thing",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/89714497/"
      },
      {
        "id": "s5",
        "title": "Chuck D on Fight the Power",
        "publisher": "NPR / VPM",
        "url": "https://www.vpm.org/npr-news/npr-news/2023-02-18/chuck-d-on-his-new-hip-hop-documentary-fight-the-power"
      }
    ],
    "questions": [
      {
        "id": "dotherightthing-neighborhood",
        "area": "research",
        "prompt": {
          "en": "How can a location production collaborate respectfully with a neighborhood?",
          "nb": "Hvordan kan en stedsproduksjon samarbeide respektfullt med et nabolag?",
          "fr": "Comment un tournage en extérieur collabore-t-il respectueusement avec un quartier ?",
          "pt": "Como pode uma produção em exteriores colaborar respeitosamente com um bairro?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume historical security arrangements apply everywhere",
              "nb": "Anta at historiske sikkerhetsordninger gjelder overalt",
              "fr": "Supposer que les dispositifs historiques de sécurité s’appliquent partout",
              "pt": "Supor que medidas históricas de segurança se aplicam em toda parte"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan communication, permissions and community consultation",
              "nb": "Planlegg kommunikasjon, tillatelser og dialog med lokalmiljøet",
              "fr": "Prévoir communication, autorisations et consultation locale",
              "pt": "Planear comunicação, licenças e consulta à comunidade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat residents as obstacles without consulting them",
              "nb": "Behandle beboere som hindringer uten å rådføre seg med dem",
              "fr": "Traiter les habitants comme obstacles sans les consulter",
              "pt": "Tratar moradores como obstáculos sem consultá-los"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI and Lee's interview document Bed-Stuy production and community relations. Design a new consent-based location plan, not a reproduction of historical security arrangements.",
          "nb": "AFI og Lees intervju dokumenterer Bed-Stuy-produksjon og forholdet til lokalmiljøet. Lag en ny samtykkebasert stedsplan, ikke en gjenskaping av historiske sikkerhetsordninger.",
          "fr": "L’AFI et Lee documentent le tournage à Bed-Stuy et les rapports locaux. Concevez un plan fondé sur le consentement, sans reproduire les dispositifs historiques.",
          "pt": "A AFI e Lee documentam produção em Bed-Stuy e relações locais. Crie um plano baseado em consentimento, sem reproduzir medidas históricas."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "dotherightthing-heat",
        "area": "camera",
        "prompt": {
          "en": "How can a color palette suggest heat in a fictional street scene?",
          "nb": "Hvordan kan en fargepalett antyde varme i en fiktiv gatescene?",
          "fr": "Comment une palette chromatique suggère-t-elle la chaleur d’une rue fictive ?",
          "pt": "Como pode uma paleta cromática sugerir calor numa rua fictícia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply a single extreme filter regardless of the performers",
              "nb": "Bruk ett ekstremt filter uansett skuespillerne",
              "fr": "Appliquer un filtre extrême sans égard aux interprètes",
              "pt": "Aplicar um filtro extremo sem atender aos intérpretes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Expose the cast to dangerous temperatures for authenticity",
              "nb": "Utsett skuespillerne for farlige temperaturer for autentisitet",
              "fr": "Exposer les acteurs à des températures dangereuses pour l’authenticité",
              "pt": "Expor intérpretes a temperaturas perigosas por autenticidade"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate set colors, costumes and tested skin-tone rendering",
              "nb": "Samordne scenografifarger, kostymer og testet gjengivelse av hudtoner",
              "fr": "Coordonner couleurs des décors, costumes et rendu testé des carnations",
              "pt": "Coordenar cores dos cenários, figurinos e reprodução testada de tons de pele"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion's craft supplement describes Lee and Dickerson's deliberate heat palette and care in photographing the cast. Design a safe color study without requiring actual heat.",
          "nb": "Criterions fagtillegg beskriver Lee og Dickersons bevisste varmepalett og omtanke i fotografering av ensemblet. Lag en trygg fargestudie uten å kreve faktisk varme.",
          "fr": "Le supplément Criterion décrit la palette chaude de Lee et Dickerson et le soin apporté aux carnations. Créez une étude sûre sans chaleur réelle.",
          "pt": "O suplemento Criterion descreve paleta quente de Lee e Dickerson e cuidado com tons de pele. Crie um estudo seguro sem calor real."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "dotherightthing-song",
        "area": "sound",
        "prompt": {
          "en": "How can a commissioned song differ from a film score and location sound?",
          "nb": "Hvordan kan en bestilt sang skille seg fra filmmusikk og stedslyd?",
          "fr": "Comment une chanson commandée diffère-t-elle de la partition et du son direct ?",
          "pt": "Como pode uma canção encomendada diferir da banda musical e som local?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Assign separate creative briefs and credit each contribution",
              "nb": "Gi separate kreative oppdrag og krediter hvert bidrag",
              "fr": "Définir des briefs distincts et créditer chaque contribution",
              "pt": "Definir propostas criativas distintas e creditar cada contributo"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute every musical and sound contribution to one person",
              "nb": "Tilskriv alle musikk- og lydbidrag én person",
              "fr": "Attribuer toute musique et tout son à une seule personne",
              "pt": "Atribuir toda música e som a uma única pessoa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the commissioned recording rather than develop original material",
              "nb": "Kopier den bestilte innspillingen fremfor å utvikle eget materiale",
              "fr": "Copier l’enregistrement commandé plutôt que créer un matériau original",
              "pt": "Copiar gravação encomendada em vez de criar material original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Chuck D describes Lee commissioning the song, while Criterion credits the score and sound departments separately. Design a new original song brief and sound plan with distinct authorship.",
          "nb": "Chuck D beskriver at Lee bestilte sangen, mens Criterion krediterer filmmusikk og lydavdelinger separat. Lag et eget sangoppdrag og lydplan med tydelig opphav.",
          "fr": "Chuck D décrit la commande de Lee ; Criterion distingue partition et métiers du son. Concevez une chanson originale et un plan sonore avec auteurs distincts.",
          "pt": "Chuck D descreve encomenda de Lee; a Criterion distingue música e departamentos de som. Crie proposta original de canção e plano sonoro com autoria distinta."
        },
        "sourceIds": [
          "s1",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_brazil_1985",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Retro-futurist design, editorial conflict and musical motifs",
      "nb": "Retrofuturistisk design, klippekonflikt og musikkmotiver",
      "fr": "Design rétrofuturiste, conflit de montage et motifs musicaux",
      "pt": "Design retrofuturista, conflito de montagem e motivos musicais"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Brazil",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/211-brazil"
      },
      {
        "id": "s1",
        "title": "Brazil (1985)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/bb840dfa-f69d-576b-bd99-dfa28efd4595/brazil"
      },
      {
        "id": "s2",
        "title": "Capturing A Brazil Look: An Interview With Production Designer Norman Garwood",
        "publisher": "Wide Angle / Closeup",
        "url": "https://wideanglecloseup.com/garwood.html"
      },
      {
        "id": "s3",
        "title": "Brazil",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/59-brazil"
      },
      {
        "id": "s4",
        "title": "Brazil (1985)",
        "publisher": "Michael Kamen Official Website",
        "url": "https://www.michaelkamen.com/catalogue/brazil"
      }
    ],
    "questions": [
      {
        "id": "brazil-design",
        "area": "camera",
        "prompt": {
          "en": "How can a fictional bureaucracy acquire a distinctive visual identity?",
          "nb": "Hvordan kan et fiktivt byråkrati få en særegen visuell identitet?",
          "fr": "Comment donner une identité visuelle à une bureaucratie fictive ?",
          "pt": "Como dar identidade visual a uma burocracia fictícia?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Coordinate historical references, textures and repeated infrastructure",
              "nb": "Samordne historiske referanser, teksturer og gjentatt infrastruktur",
              "fr": "Coordonner références historiques, textures et infrastructures répétées",
              "pt": "Coordenar referências históricas, texturas e infraestruturas recorrentes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use unrelated decorative motifs in every room",
              "nb": "Bruk urelaterte dekorative motiver i hvert rom",
              "fr": "Employer des motifs décoratifs sans lien dans chaque pièce",
              "pt": "Usar motivos decorativos sem ligação em cada sala"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume futuristic design must exclude historical references",
              "nb": "Anta at fremtidsdesign må utelukke historiske referanser",
              "fr": "Supposer que le futur exclut les références historiques",
              "pt": "Supor que o futuro exclui referências históricas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Garwood describes Art Deco research, duct systems and collaboration with Pratt. Sketch a distinct fictional interior with coordinated design and photography.",
          "nb": "Garwood beskriver art deco-research, rørsystemer og samarbeid med Pratt. Skisser et eget fiktivt interiør med samordnet scenografi og foto.",
          "fr": "Garwood décrit les recherches Art déco, les conduits et la collaboration avec Pratt. Dessinez un intérieur fictif coordonnant décor et image.",
          "pt": "Garwood descreve pesquisa Art déco, condutas e colaboração com Pratt. Esboce um interior fictício com cenografia e fotografia coordenadas."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "brazil-cuts",
        "area": "research",
        "prompt": {
          "en": "How should conflicting editorial versions of a film be compared?",
          "nb": "Hvordan bør motstridende klippeversjoner av en film sammenlignes?",
          "fr": "Comment comparer des versions de montage contradictoires ?",
          "pt": "Como comparar versões de montagem contraditórias?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat studio and director versions as identical",
              "nb": "Behandle studioets og regissørens versjoner som identiske",
              "fr": "Traiter les versions studio et réalisateur comme identiques",
              "pt": "Tratar versões do estúdio e realizador como idênticas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Identify each cut and compare its narrative resolution",
              "nb": "Identifiser hver versjon og sammenlign fortellingens avslutning",
              "fr": "Identifier chaque montage et comparer son dénouement",
              "pt": "Identificar cada versão e comparar o seu desfecho"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the shortest version is always the original",
              "nb": "Anta at den korteste versjonen alltid er originalen",
              "fr": "Supposer que la version courte est toujours originale",
              "pt": "Supor que a versão curta é sempre a original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents the 143-minute director-approved edition and the 94-minute studio version. Compare editorial decisions using identified editions, not runtime alone.",
          "nb": "Criterion dokumenterer den regissørgodkjente utgaven på 143 minutter og studioversjonen på 94 minutter. Sammenlign klippevalg med identifiserte utgaver, ikke spilletid alene.",
          "fr": "Criterion documente le montage approuvé de 143 minutes et celui du studio de 94 minutes. Comparez les choix à partir des éditions identifiées.",
          "pt": "A Criterion documenta a versão aprovada de 143 minutos e a do estúdio de 94 minutos. Compare escolhas com edições identificadas."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "brazil-motif",
        "area": "sound",
        "prompt": {
          "en": "How can a repeated melody change meaning across a satirical film?",
          "nb": "Hvordan kan en gjentatt melodi endre betydning gjennom en satirisk film?",
          "fr": "Comment une mélodie récurrente change-t-elle de sens dans une satire ?",
          "pt": "Como pode uma melodia recorrente mudar de sentido numa sátira?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Repeat an unchanged recording regardless of scene context",
              "nb": "Gjenta et uendret opptak uansett scenekontekst",
              "fr": "Répéter un enregistrement inchangé sans égard au contexte",
              "pt": "Repetir gravação inalterada sem considerar o contexto"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Attribute the source melody to the film composer alone",
              "nb": "Tilskriv kildemelodien filmkomponisten alene",
              "fr": "Attribuer la mélodie source au seul compositeur du film",
              "pt": "Atribuir a melodia original apenas ao compositor do filme"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Vary an original motif's arrangement and dramatic placement",
              "nb": "Varier arrangement og dramatisk plassering av et eget motiv",
              "fr": "Varier l’arrangement et la place dramatique d’un motif original",
              "pt": "Variar arranjo e colocação dramática de um motivo original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kamen's archive describes the score's use of Ary Barroso's song. Create a new motif and distinguish source composition, arrangement and performance credits.",
          "nb": "Kamens arkiv beskriver filmmusikkens bruk av Ary Barrosos sang. Lag et eget motiv og skill opphav, arrangement og fremføring.",
          "fr": "Les archives de Kamen décrivent l’usage de la chanson de Barroso. Créez un motif original et distinguez composition, arrangement et interprétation.",
          "pt": "O arquivo de Kamen descreve o uso da canção de Barroso. Crie um motivo original e distinga composição, arranjo e interpretação."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_cinema_paradiso_1988",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Cinema-going spaces, archival montage and release editions",
      "nb": "Kinorom, arkivmontasje og utgivelsesversjoner",
      "fr": "Espaces du cinéma, montage d’archives et versions",
      "pt": "Espaços de cinema, montagem de arquivo e versões"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Cinema Paradiso (1988)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/01d342da-9a63-59d2-b9c3-c8465bcdf2c8/cinema-paradiso"
      },
      {
        "id": "s1",
        "title": "10 great films about cinemagoing",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-films-about-cinemagoing"
      },
      {
        "id": "s2",
        "title": "Nuovo Cinema Paradiso",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/nuovo-cinema-paradiso/"
      },
      {
        "id": "s3",
        "title": "1990 Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1990"
      },
      {
        "id": "s4",
        "title": "Cinema Paradiso 4K UHD+Blu-ray",
        "publisher": "Arrow Films",
        "url": "https://www.arrowfilms.com/p/cinema-paradiso-4k-uhdblu-ray/12613127/"
      },
      {
        "id": "s5",
        "title": "1991 Film Awards results",
        "publisher": "BAFTA",
        "url": "https://www.bafta.org/awards/film?award-year=1991"
      }
    ],
    "questions": [
      {
        "id": "cinemaparadiso-space",
        "area": "camera",
        "prompt": {
          "en": "How can a cinema interior become a recurring narrative setting?",
          "nb": "Hvordan kan et kinointeriør bli et tilbakevendende fortellingsrom?",
          "fr": "Comment une salle de cinéma devient-elle un lieu narratif récurrent ?",
          "pt": "Como pode uma sala de cinema tornar-se um espaço narrativo recorrente?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore spatial relationships between viewer and screen",
              "nb": "Ignorer romlige forhold mellom tilskuer og lerret",
              "fr": "Ignorer les rapports spatiaux entre spectateur et écran",
              "pt": "Ignorar relações espaciais entre espetador e ecrã"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Connect auditorium, projection booth and audience viewpoints",
              "nb": "Knytt sal, maskinrom og publikums synsvinkler sammen",
              "fr": "Relier salle, cabine de projection et regards du public",
              "pt": "Ligar sala, cabine de projeção e pontos de vista do público"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all cinema spaces as interchangeable backgrounds",
              "nb": "Behandle alle kinorom som utskiftbare bakgrunner",
              "fr": "Traiter tous les espaces de cinéma comme décors interchangeables",
              "pt": "Tratar todos os espaços de cinema como cenários intercambiáveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI identifies the booth and town-square projection as organizing spaces. Design an original cinema-going scene with coherent geography and distinct viewer perspectives.",
          "nb": "BFI identifiserer maskinrommet og projeksjonen på torget som organiserende rom. Lag en egen kinoscene med sammenhengende geografi og ulike tilskuerperspektiver.",
          "fr": "Le BFI identifie la cabine et la projection sur la place comme espaces structurants. Concevez une scène originale aux perspectives distinctes.",
          "pt": "O BFI identifica cabine e projeção na praça como espaços estruturantes. Crie uma cena original com geografia coerente e perspetivas distintas."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "cinemaparadiso-montage",
        "area": "research",
        "prompt": {
          "en": "How should a montage of excerpts from other films be assembled responsibly?",
          "nb": "Hvordan bør en montasje av utdrag fra andre filmer settes sammen ansvarlig?",
          "fr": "Comment composer de manière responsable un montage d’extraits de films ?",
          "pt": "Como montar excertos de outros filmes de forma responsável?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use unidentified excerpts without recording their origins",
              "nb": "Bruk uidentifiserte utdrag uten å registrere opphav",
              "fr": "Utiliser des extraits non identifiés sans noter leur origine",
              "pt": "Usar excertos não identificados sem registar origem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a new montage changes ownership of the source images",
              "nb": "Anta at en ny montasje endrer eierskapet til kildebildene",
              "fr": "Supposer que le montage change la propriété des images sources",
              "pt": "Supor que nova montagem altera propriedade das imagens originais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Document provenance, permissions and the new editorial purpose",
              "nb": "Dokumenter proveniens, tillatelser og det nye klippeformålet",
              "fr": "Documenter provenance, autorisations et nouvelle fonction du montage",
              "pt": "Documentar proveniência, permissões e nova função da montagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI discusses the final montage of censored kisses and Arrow documents its production supplement. Plan an original montage using cleared or self-produced footage.",
          "nb": "BFI drøfter sluttmontasjen med sensurerte kyss, og Arrow dokumenterer produksjonstillegget. Planlegg en egen montasje med klarerte eller egenproduserte opptak.",
          "fr": "Le BFI analyse le montage final et Arrow documente son supplément. Concevez un montage original avec des images autorisées ou autoproduites.",
          "pt": "O BFI analisa a montagem final e a Arrow documenta o suplemento. Planeie montagem original com imagens autorizadas ou próprias."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "cinemaparadiso-editions",
        "area": "research",
        "prompt": {
          "en": "How should theatrical and extended versions be evaluated?",
          "nb": "Hvordan bør kino- og langversjoner vurderes?",
          "fr": "Comment évaluer les versions cinéma et longue ?",
          "pt": "Como avaliar versões de cinema e versões longas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare identified editions and their narrative structures",
              "nb": "Sammenlign identifiserte utgaver og deres fortellingsstruktur",
              "fr": "Comparer les éditions identifiées et leurs structures narratives",
              "pt": "Comparar edições identificadas e estruturas narrativas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every archive lists the same release version",
              "nb": "Anta at alle arkiver oppgir samme utgivelsesversjon",
              "fr": "Supposer que toutes les archives indiquent la même version",
              "pt": "Supor que todos os arquivos indicam a mesma versão"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use an award to decide which cut is historically original",
              "nb": "Bruk en pris til å avgjøre hvilken versjon som historisk er original",
              "fr": "Utiliser un prix pour déterminer le montage historiquement original",
              "pt": "Usar um prémio para decidir qual montagem é historicamente original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Arrow records the 124-minute theatrical and 174-minute director's cut; BFI lists an expanded 175-minute record. Preserve edition provenance and avoid forced normalization.",
          "nb": "Arrow dokumenterer kinoutgaven på 124 minutter og regissørutgaven på 174; BFI oppgir en utvidet utgave på 175 minutter. Bevar utgaveproveniens uten tvungen normalisering.",
          "fr": "Arrow documente les versions de 124 et 174 minutes ; le BFI en indique 175. Préservez la provenance des éditions sans uniformisation forcée.",
          "pt": "A Arrow documenta versões de 124 e 174 minutos; o BFI indica 175. Preserve proveniência sem normalização forçada."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_goodfellas_1990",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Moving-camera choreography, montage and period music",
      "nb": "Kamerakoreografi, montasje og periodemusikk",
      "fr": "Chorégraphie de caméra, montage et musique d’époque",
      "pt": "Coreografia de câmara, montagem e música de época"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Goodfellas",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/55206-GOODFELLAS"
      },
      {
        "id": "s1",
        "title": "In Memoriam: Michael Ballhaus, ASC, BVK (1935-2017)",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/news/in-memoriam-michael-ballhaus-asc-1935-2017/"
      },
      {
        "id": "s2",
        "title": "GoodFellas (1990)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/b573c997-0970-5531-8f89-b193e2f8b143/goodfellas"
      },
      {
        "id": "s3",
        "title": "Goodfellas (1990) — National Film Registry description",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
      }
    ],
    "questions": [
      {
        "id": "goodfellas-movement",
        "area": "camera",
        "prompt": {
          "en": "How can a moving camera reveal successive social spaces?",
          "nb": "Hvordan kan et bevegelig kamera avdekke flere sosiale rom?",
          "fr": "Comment une caméra mobile révèle-t-elle des espaces sociaux successifs ?",
          "pt": "Como pode uma câmara móvel revelar espaços sociais sucessivos?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Move the camera without considering performers or geography",
              "nb": "Beveg kameraet uten å vurdere skuespillere eller geografi",
              "fr": "Déplacer la caméra sans considérer acteurs ni géographie",
              "pt": "Mover a câmara sem considerar atores nem geografia"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a continuous shot needs no preparation",
              "nb": "Anta at en sammenhengende tagning ikke trenger forberedelse",
              "fr": "Supposer qu’un plan continu ne demande aucune préparation",
              "pt": "Supor que um plano contínuo dispensa preparação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a benign route with coordinated performers and framing",
              "nb": "Øv på en ufarlig rute med samordnet skuespill og utsnitt",
              "fr": "Répéter un parcours inoffensif avec jeu et cadrage coordonnés",
              "pt": "Ensaiar percurso inofensivo com interpretação e enquadramento coordenados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ballhaus's ASC account describes the Copacabana camera choreography and collaborators. Plan an original harmless walk-through rather than duplicating the historical shot.",
          "nb": "Ballhaus' ASC-beretning beskriver Copacabana-koreografien og medarbeiderne. Planlegg en egen ufarlig gjennomgang fremfor å kopiere den historiske tagningen.",
          "fr": "Le récit ASC de Ballhaus décrit la chorégraphie et ses collaborateurs. Concevez un parcours original inoffensif sans copier le plan historique.",
          "pt": "O relato ASC de Ballhaus descreve coreografia e colaboradores. Planeie percurso original inofensivo sem copiar o plano histórico."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "goodfellas-montage",
        "area": "research",
        "prompt": {
          "en": "How can an adaptation compress years without implying a complete historical account?",
          "nb": "Hvordan kan en adaptasjon komprimere år uten å antyde en fullstendig historisk beretning?",
          "fr": "Comment condenser des années sans prétendre à un récit historique complet ?",
          "pt": "Como condensar anos sem sugerir um relato histórico completo?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map selected narrative events and mark omitted intervals",
              "nb": "Kartlegg valgte fortellingshendelser og marker utelatte perioder",
              "fr": "Cartographier événements choisis et intervalles omis",
              "pt": "Mapear eventos narrativos escolhidos e intervalos omitidos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every dramatized scene as independently verified testimony",
              "nb": "Behandle alle dramatiserte scener som uavhengig verifiserte vitnesbyrd",
              "fr": "Traiter chaque scène dramatisée comme témoignage vérifié",
              "pt": "Tratar cada cena dramatizada como testemunho verificado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the editor contributes nothing to temporal structure",
              "nb": "Anta at klipperen ikke bidrar til tidsstrukturen",
              "fr": "Supposer que le montage ne contribue pas à la temporalité",
              "pt": "Supor que montagem não contribui para estrutura temporal"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI identifies the Pileggi adaptation and Schoonmaker's editing; the Registry describes the true-life basis. Design a fictional chronology that distinguishes selection from evidence.",
          "nb": "AFI identifiserer Pileggi-adaptasjonen og Schoonmakers klipping; filmregisteret beskriver det virkelige forelegget. Lag en fiktiv kronologi som skiller utvalg fra dokumentasjon.",
          "fr": "L’AFI identifie l’adaptation et le montage de Schoonmaker ; le registre décrit la base réelle. Concevez une chronologie distinguant sélection et preuve.",
          "pt": "A AFI identifica adaptação e montagem de Schoonmaker; o registo descreve base real. Crie cronologia que distinga seleção de prova."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "goodfellas-music",
        "area": "sound",
        "prompt": {
          "en": "How can period songs help organize a multi-decade narrative?",
          "nb": "Hvordan kan periodesanger bidra til å organisere en fortelling over flere tiår?",
          "fr": "Comment des chansons d’époque structurent-elles un récit sur plusieurs décennies ?",
          "pt": "Como podem canções de época estruturar uma narrativa de várias décadas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the soundtrack proves the depicted events occurred",
              "nb": "Anta at lydsporet beviser at hendelsene fant sted",
              "fr": "Supposer que la bande sonore prouve les faits représentés",
              "pt": "Supor que banda sonora prova os eventos representados"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Build a dated cue plan with licensed or original music",
              "nb": "Lag en datert lydplan med lisensiert eller egen musikk",
              "fr": "Créer un plan sonore daté avec musique autorisée ou originale",
              "pt": "Criar plano sonoro datado com música licenciada ou original"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose all cues without regard to historical period",
              "nb": "Velg alle lydinnslag uten hensyn til tidsperiode",
              "fr": "Choisir tous les morceaux sans égard à leur époque",
              "pt": "Escolher todas as músicas sem considerar a época"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Registry identifies pop songs as a cohesive thread across decades. Build a new cue plan that distinguishes temporal atmosphere from historical evidence.",
          "nb": "Filmregisteret identifiserer poplåter som en sammenbindende tråd på tvers av tiår. Lag en egen lydplan som skiller tidsatmosfære fra historisk dokumentasjon.",
          "fr": "Le registre identifie les chansons pop comme fil conducteur. Créez un plan distinguant ambiance temporelle et preuve historique.",
          "pt": "O registo identifica canções pop como fio condutor. Crie plano que distinga ambiente temporal de prova histórica."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_boyz_n_the_hood_1991",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Creative control, neighborhood collaboration and social context",
      "nb": "Kreativ kontroll, nabolagssamarbeid og sosial kontekst",
      "fr": "Contrôle créatif, collaboration locale et contexte social",
      "pt": "Controlo criativo, colaboração local e contexto social"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Boyz N the Hood (1991)",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/58786-BOYZ-N-THE-HOOD"
      },
      {
        "id": "s1",
        "title": "John Singleton",
        "publisher": "Television Academy Interviews",
        "url": "https://interviews.televisionacademy.com/interviews/john-singleton"
      },
      {
        "id": "s2",
        "title": "Boyz N the Hood",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/boyz-n-the-hood/"
      },
      {
        "id": "s3",
        "title": "Boyz N' the Hood - restored print",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/boyz-n-the-hood-2/"
      },
      {
        "id": "s4",
        "title": "1992 Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/1992/M"
      },
      {
        "id": "s5",
        "title": "BOYZ N THE HOOD 25th Anniversary Celebration and Conversation",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/events/boyz-n-hood-25th-anniversary-screening-and-conversation"
      },
      {
        "id": "s6",
        "title": "Complete National Film Registry Listing",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/"
      },
      {
        "id": "s7",
        "title": "John Singleton: A Celebration",
        "publisher": "USC Visions & Voices / School of Cinematic Arts",
        "url": "https://visionsandvoices.usc.edu/wp-content/uploads/2022/09/JohnSingleton_ThemeGuide.pdf"
      },
      {
        "id": "s8",
        "title": "AFI Movie Club: Boyz N the Hood",
        "publisher": "American Film Institute",
        "url": "https://www.afi.com/news/afi-movie-club-boyz-n-the-hood/"
      }
    ],
    "questions": [
      {
        "id": "boyznthehood-authorship",
        "area": "research",
        "prompt": {
          "en": "How can a first-time writer-director preserve creative responsibility?",
          "nb": "Hvordan kan en debuterende manusforfatter-regissør bevare kreativt ansvar?",
          "fr": "Comment un auteur-réalisateur débutant préserve-t-il sa responsabilité créative ?",
          "pt": "Como pode um argumentista-realizador estreante preservar responsabilidade criativa?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Clarify directing rights and shared producer responsibilities",
              "nb": "Avklar regirettigheter og delte produsentansvar",
              "fr": "Clarifier droits de réalisation et responsabilités des producteurs",
              "pt": "Clarificar direitos de realização e responsabilidades dos produtores"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume selling a script guarantees directing control",
              "nb": "Anta at manussalg garanterer regikontroll",
              "fr": "Supposer que vendre un scénario garantit la réalisation",
              "pt": "Supor que vender argumento garante controlo de realização"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore collaboration when documenting authorship",
              "nb": "Ignorer samarbeid ved dokumentasjon av opphav",
              "fr": "Ignorer la collaboration dans les crédits",
              "pt": "Ignorar colaboração ao documentar autoria"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Singleton's oral history describes insisting on directing, and AFI documents the Columbia development context. Prepare a fictional collaboration agreement with clear roles.",
          "nb": "Singletons muntlige historie beskriver kravet om å regissere, og AFI dokumenterer Columbia-utviklingen. Lag en fiktiv samarbeidsavtale med tydelige roller.",
          "fr": "Singleton raconte avoir insisté pour réaliser ; l’AFI documente Columbia. Préparez un accord fictif aux responsabilités claires.",
          "pt": "Singleton relata ter insistido em realizar; a AFI documenta Columbia. Prepare acordo fictício com funções claras."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s8"
        ]
      },
      {
        "id": "boyznthehood-neighborhood",
        "area": "camera",
        "prompt": {
          "en": "How can neighborhood spaces contribute to a coming-of-age story?",
          "nb": "Hvordan kan nabolagsrom bidra til en oppvekstfortelling?",
          "fr": "Comment les espaces du quartier contribuent-ils à un récit d’apprentissage ?",
          "pt": "Como podem espaços do bairro contribuir para uma história de amadurecimento?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat fiction as proof about every neighborhood resident",
              "nb": "Behandle fiksjon som bevis om alle nabolagets beboere",
              "fr": "Traiter la fiction comme preuve sur tous les habitants",
              "pt": "Tratar ficção como prova sobre todos os moradores"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Connect recurring homes and streets to character relationships",
              "nb": "Knytt tilbakevendende hjem og gater til figurenes relasjoner",
              "fr": "Relier maisons et rues récurrentes aux rapports entre personnages",
              "pt": "Ligar casas e ruas recorrentes às relações das personagens"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use every location as interchangeable generic background",
              "nb": "Bruk alle steder som utskiftbar generisk bakgrunn",
              "fr": "Utiliser tous les lieux comme décor interchangeable",
              "pt": "Usar todos os locais como cenário genérico intercambiável"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AFI and Singleton's interview document South Central filming and local connections. Plan a respectful fictional location study without generalizing individual experiences.",
          "nb": "AFI og Singleton-intervjuet dokumenterer opptak i South Central og lokale forbindelser. Lag en respektfull fiktiv stedsstudie uten å generalisere individuelle erfaringer.",
          "fr": "L’AFI et Singleton documentent le tournage à South Central. Concevez une étude respectueuse sans généraliser les expériences individuelles.",
          "pt": "A AFI e Singleton documentam filmagem em South Central. Crie estudo respeitoso sem generalizar experiências individuais."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "boyznthehood-score",
        "area": "sound",
        "prompt": {
          "en": "How can a coming-of-age scene use music without reducing its social context?",
          "nb": "Hvordan kan en oppvekstscene bruke musikk uten å forenkle den sosiale konteksten?",
          "fr": "Comment une scène d’apprentissage utilise-t-elle la musique sans réduire son contexte social ?",
          "pt": "Como pode uma cena de amadurecimento usar música sem reduzir o contexto social?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use one musical stereotype to represent an entire community",
              "nb": "Bruk én musikalsk stereotypi til å representere et helt lokalmiljø",
              "fr": "Utiliser un stéréotype musical pour représenter toute une communauté",
              "pt": "Usar estereótipo musical para representar toda uma comunidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Credit all recorded sound to the composer alone",
              "nb": "Krediter all innspilt lyd til komponisten alene",
              "fr": "Créditer tout le son au seul compositeur",
              "pt": "Creditar todo som apenas ao compositor"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare an original musical cue with dialogue and ambient sound",
              "nb": "Sammenlign et eget musikkinnslag med dialog og miljølyd",
              "fr": "Comparer un motif original au dialogue et aux sons ambiants",
              "pt": "Comparar motivo original com diálogo e som ambiente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes credits Stanley Clarke, and AFI identifies distinct sound roles. Develop an original sound plan with separate authorship and respectful context.",
          "nb": "Cannes krediterer Stanley Clarke, og AFI identifiserer ulike lydroller. Lag en egen lydplan med separat opphav og respektfull kontekst.",
          "fr": "Cannes crédite Stanley Clarke et l’AFI identifie les métiers du son. Créez un plan original avec auteurs distincts et contexte respecté.",
          "pt": "Cannes credita Stanley Clarke e a AFI identifica funções de som. Crie plano original com autoria distinta e contexto respeitado."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_my_own_private_idaho_1991",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Hybrid adaptation, collaborative performance and ambiguous endings",
      "nb": "Hybridadaptasjon, kollektivt skuespill og åpne slutter",
      "fr": "Adaptation hybride, jeu collectif et fins ambiguës",
      "pt": "Adaptação híbrida, interpretação coletiva e finais ambíguos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "My Own Private Idaho (1991)",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/58952-MY-OWN-PRIVATE-IDAHO"
      },
      {
        "id": "s1",
        "title": "My Own Private Idaho (1991)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/8c8e43ca-ffbf-5d40-9429-0f609bd437a1/my-own-private-idaho"
      },
      {
        "id": "s2",
        "title": "My Own Private Idaho – BFI Southbank Programme Notes",
        "publisher": "British Film Institute",
        "url": "https://bfidatadigipres.github.io/pdf/2022-02-08-my-own-private-idaho.pdf"
      },
      {
        "id": "s3",
        "title": "My Own Private Idaho",
        "publisher": "La Biennale di Venezia Historical Archive",
        "url": "https://asac.labiennale.org/attivita/cinema/7743"
      },
      {
        "id": "s4",
        "title": "My Own Private Idaho",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/249-my-own-private-idaho"
      },
      {
        "id": "s5",
        "title": "Gus Van Sant interview",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2009/jan/19/guardian-interview-gus-van-sant"
      },
      {
        "id": "s6",
        "title": "Gus Van Sant: Swimming Against the Current",
        "publisher": "Focus Features",
        "url": "https://www.focusfeatures.com/article/gus_van_sant__swimming_against_the_current"
      },
      {
        "id": "s7",
        "title": "Adams and Ollman: Paul Lee and Gus Van Sant in Conversation",
        "publisher": "Karma",
        "url": "https://karmakarma.org/texts/adams-and-ollman-paul-lee-and-gus-van-sant-in-convo-april-2021/"
      },
      {
        "id": "s8",
        "title": "My Own Private Idaho (1991)",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/events/my-own-private-idaho-1991"
      },
      {
        "id": "s9",
        "title": "25 Films Named to National Film Registry for Preservation",
        "publisher": "Library of Congress",
        "url": "https://www.loc.gov/item/prn-24-105/25-films-named-to-national-film-registry-for-preservation/2024-12-18/"
      }
    ],
    "questions": [
      {
        "id": "myownprivateidaho-hybrid",
        "area": "research",
        "prompt": {
          "en": "How can several writing projects become one coherent screenplay?",
          "nb": "Hvordan kan flere skriveprosjekter bli ett sammenhengende manus?",
          "fr": "Comment plusieurs projets d’écriture deviennent-ils un scénario cohérent ?",
          "pt": "Como podem vários projetos de escrita tornar-se um argumento coerente?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume all material comes from a single source text",
              "nb": "Anta at alt materiale kommer fra ett forelegg",
              "fr": "Supposer que tout provient d’un seul texte source",
              "pt": "Supor que todo material vem de um único texto"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Map shared themes and define distinct narrative registers",
              "nb": "Kartlegg felles temaer og definer ulike fortellingsregistre",
              "fr": "Cartographier thèmes communs et registres narratifs distincts",
              "pt": "Mapear temas comuns e registos narrativos distintos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Join unrelated scenes without considering their dramatic function",
              "nb": "Slå sammen urelaterte scener uten å vurdere dramatisk funksjon",
              "fr": "Assembler des scènes sans considérer leur fonction dramatique",
              "pt": "Juntar cenas sem considerar função dramática"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Van Sant describes combining three writing projects; the Academy identifies the Shakespeare adaptation context. Plan a new hybrid script with documented source relationships.",
          "nb": "Van Sant beskriver sammenslåingen av tre skriveprosjekter; Academy identifiserer Shakespeare-konteksten. Lag et nytt hybridmanus med dokumenterte kildeforhold.",
          "fr": "Van Sant décrit trois projets réunis ; l’Académie identifie le contexte shakespearien. Concevez un scénario hybride aux sources documentées.",
          "pt": "Van Sant descreve três projetos reunidos; a Academia identifica contexto shakespeariano. Crie argumento híbrido com fontes documentadas."
        },
        "sourceIds": [
          "s5",
          "s8"
        ]
      },
      {
        "id": "myownprivateidaho-performance",
        "area": "research",
        "prompt": {
          "en": "How should an actor's contribution to a rewritten scene be documented?",
          "nb": "Hvordan bør en skuespillers bidrag til en omskrevet scene dokumenteres?",
          "fr": "Comment documenter l’apport d’un acteur à une scène réécrite ?",
          "pt": "Como documentar contributo de um ator para uma cena reescrita?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all changes as solely the director's work",
              "nb": "Behandle alle endringer som regissørens arbeid alene",
              "fr": "Traiter tous les changements comme le seul travail du réalisateur",
              "pt": "Tratar todas as mudanças como trabalho exclusivo do realizador"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Claim exact authorship of undocumented dialogue",
              "nb": "Hevd eksakt opphav til udokumentert dialog",
              "fr": "Affirmer l’auteur exact de dialogues non documentés",
              "pt": "Afirmar autoria exata de diálogos não documentados"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Keep revision notes and agree appropriate contribution credits",
              "nb": "Behold revisjonsnotater og avtal passende kreditering av bidrag",
              "fr": "Conserver notes de révision et convenir des crédits appropriés",
              "pt": "Manter notas de revisão e acordar créditos adequados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Van Sant describes Phoenix expanding a short scene during work with Reeves. Record collaboration in a fictional rehearsal without inventing exact historical line attribution.",
          "nb": "Van Sant beskriver at Phoenix utvidet en kort scene i arbeidet med Reeves. Dokumenter samarbeid i en fiktiv prøve uten å dikte opp historisk replikkopphav.",
          "fr": "Van Sant décrit Phoenix développant une scène avec Reeves. Documentez une répétition fictive sans inventer l’attribution des répliques historiques.",
          "pt": "Van Sant descreve Phoenix a expandir uma cena com Reeves. Documente ensaio fictício sem inventar autoria de falas históricas."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      },
      {
        "id": "myownprivateidaho-ending",
        "area": "camera",
        "prompt": {
          "en": "How can an ambiguous ending remain purposeful rather than arbitrary?",
          "nb": "Hvordan kan en åpen slutt være målrettet fremfor tilfeldig?",
          "fr": "Comment une fin ambiguë reste-t-elle intentionnelle plutôt qu’arbitraire ?",
          "pt": "Como pode um final ambíguo manter intenção em vez de arbitrariedade?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Resolve thematic patterns while leaving selected events uncertain",
              "nb": "Avslutt tematiske mønstre og la utvalgte hendelser være uavklarte",
              "fr": "Résoudre les motifs thématiques tout en laissant certains faits incertains",
              "pt": "Resolver padrões temáticos deixando certos eventos incertos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all thematic connections from the final scene",
              "nb": "Fjern alle tematiske forbindelser fra sluttscenen",
              "fr": "Supprimer tous les liens thématiques de la scène finale",
              "pt": "Eliminar todas as ligações temáticas da cena final"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the audience must receive a single explicit answer",
              "nb": "Anta at publikum må få ett eksplisitt svar",
              "fr": "Supposer que le public doit recevoir une réponse unique",
              "pt": "Supor que público deve receber resposta explícita única"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Van Sant discusses his decision to keep the ending ambiguous. Storyboard two original endings and compare the thematic effect without declaring a single correct interpretation of the film.",
          "nb": "Van Sant drøfter valget om å holde slutten åpen. Lag storyboard for to egne slutter og sammenlign tematisk effekt uten å fastsette én riktig filmtolkning.",
          "fr": "Van Sant évoque sa fin ambiguë. Dessinez deux fins originales et comparez leur effet sans imposer une interprétation unique.",
          "pt": "Van Sant discute o final ambíguo. Crie storyboard de dois finais originais e compare efeito sem impor interpretação única."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_hyenas_1992",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Cross-cultural adaptation, costume materials and production continuity",
      "nb": "Tverrkulturell adaptasjon, kostymematerialer og produksjonskontinuitet",
      "fr": "Adaptation interculturelle, matériaux de costumes et continuité",
      "pt": "Adaptação intercultural, materiais de figurinos e continuidade"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Hyènes / Hyenas",
        "publisher": "Swiss Films",
        "url": "https://www.swissfilms.ch/en/movie/hyenes/714482b9e80344ae9f5dd7958d0a094f"
      },
      {
        "id": "s1",
        "title": "Hyènes (Djibril Diop Mambéty, 1992)",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/38206.html"
      },
      {
        "id": "s2",
        "title": "Hyènes",
        "publisher": "Images francophones",
        "url": "https://www.imagesfrancophones.org/catalogue/hyenes-284"
      },
      {
        "id": "s3",
        "title": "Moussa Sene Absa",
        "publisher": "Metrograph Journal",
        "url": "https://metrograph.com/moussa-sene-absa/"
      },
      {
        "id": "s4",
        "title": "The Hyena's Last Laugh: A Conversation with Djibril Diop Mambéty",
        "publisher": "Metrograph Journal",
        "url": "https://metrograph.com/a-conversation-with-djibril-diop-mambety/"
      },
      {
        "id": "s5",
        "title": "HYÈNES (HYENAS)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/hyenes/"
      },
      {
        "id": "s6",
        "title": "Hyenas restoration record",
        "publisher": "The Film Foundation",
        "url": "https://www.film-foundation.org/news?page=56"
      }
    ],
    "questions": [
      {
        "id": "hyenas-adaptation",
        "area": "research",
        "prompt": {
          "en": "How can a play be adapted into a distinct cultural setting?",
          "nb": "Hvordan kan et teaterstykke adapteres til et særegent kulturmiljø?",
          "fr": "Comment adapter une pièce à un contexte culturel distinct ?",
          "pt": "Como adaptar uma peça a um contexto cultural distinto?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the new setting as merely decorative scenery",
              "nb": "Behandle det nye miljøet som ren dekorativ bakgrunn",
              "fr": "Traiter le nouveau contexte comme simple décor",
              "pt": "Tratar novo contexto como mero cenário decorativo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the adaptation represents every local tradition",
              "nb": "Anta at adaptasjonen representerer alle lokale tradisjoner",
              "fr": "Supposer que l’adaptation représente toutes les traditions locales",
              "pt": "Supor que adaptação representa todas as tradições locais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rework social relationships and setting through contextual research",
              "nb": "Bearbeid sosiale relasjoner og miljø gjennom kontekstuell research",
              "fr": "Retravailler rapports sociaux et milieu par une recherche contextualisée",
              "pt": "Reformular relações sociais e ambiente com pesquisa contextual"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Swiss and Cannes records identify Mambéty's Dürrenmatt adaptation and Wolof production. Develop an original contextual adaptation without conflating distinct cultural traditions.",
          "nb": "Sveitsiske og Cannes-oppføringer identifiserer Mambétys Dürrenmatt-adaptasjon og wolofproduksjon. Utvikle en egen kontekstuell adaptasjon uten å blande ulike tradisjoner.",
          "fr": "Les notices suisse et Cannes identifient l’adaptation de Dürrenmatt en wolof. Développez une adaptation contextualisée sans confondre les traditions.",
          "pt": "Registos suíço e Cannes identificam adaptação de Dürrenmatt em wolof. Desenvolva adaptação contextual sem confundir tradições."
        },
        "sourceIds": [
          "s0",
          "s5"
        ]
      },
      {
        "id": "hyenas-costume",
        "area": "camera",
        "prompt": {
          "en": "How can inexpensive costume materials acquire dramatic meaning?",
          "nb": "Hvordan kan rimelige kostymematerialer få dramatisk betydning?",
          "fr": "Comment des matériaux de costumes peu coûteux acquièrent-ils un sens dramatique ?",
          "pt": "Como podem materiais baratos de figurino adquirir sentido dramático?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test texture, silhouette and material associations within the scene",
              "nb": "Test tekstur, silhuett og materialassosiasjoner i scenen",
              "fr": "Tester texture, silhouette et associations matérielles dans la scène",
              "pt": "Testar textura, silhueta e associações materiais na cena"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Equate material price with expressive quality",
              "nb": "Likestill materialpris med uttrykkskvalitet",
              "fr": "Assimiler le prix du matériau à sa qualité expressive",
              "pt": "Equiparar preço do material a qualidade expressiva"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy culturally specific costume imagery without context",
              "nb": "Kopier kulturspesifikke kostymebilder uten kontekst",
              "fr": "Copier des costumes culturellement spécifiques sans contexte",
              "pt": "Copiar figurinos culturalmente específicos sem contexto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mambéty discusses inexpensive costume materials and their meaning; institutional credits identify Oumou Sy. Design original materials with a clear dramatic rationale and attribution.",
          "nb": "Mambéty drøfter rimelige kostymematerialer og betydningen deres; institusjonelle krediteringer identifiserer Oumou Sy. Lag egne materialvalg med dramatisk begrunnelse og kreditering.",
          "fr": "Mambéty évoque des matériaux modestes et leur sens ; les crédits identifient Oumou Sy. Concevez des choix originaux justifiés et crédités.",
          "pt": "Mambéty discute materiais baratos e seu significado; créditos identificam Oumou Sy. Crie escolhas originais justificadas e creditadas."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "hyenas-schedule",
        "area": "research",
        "prompt": {
          "en": "How should a production resume after an extended interruption?",
          "nb": "Hvordan bør en produksjon gjenopptas etter et lengre avbrudd?",
          "fr": "Comment reprendre une production après une longue interruption ?",
          "pt": "Como retomar uma produção após uma longa interrupção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a documented grant equals the complete production budget",
              "nb": "Anta at et dokumentert tilskudd tilsvarer hele produksjonsbudsjettet",
              "fr": "Supposer qu’une aide documentée égale le budget total",
              "pt": "Supor que apoio documentado equivale ao orçamento total"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review footage, continuity, responsibilities and remaining resources",
              "nb": "Gjennomgå opptak, kontinuitet, ansvar og gjenværende ressurser",
              "fr": "Examiner images, raccords, responsabilités et ressources restantes",
              "pt": "Rever imagens, continuidade, responsabilidades e recursos restantes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Restart without checking previously recorded material",
              "nb": "Start på nytt uten å undersøke tidligere opptak",
              "fr": "Reprendre sans vérifier les images déjà tournées",
              "pt": "Retomar sem verificar material já gravado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Absa describes two shooting periods, while the production record identifies a specific aid entry. Plan a fictional restart without inventing the total historical budget.",
          "nb": "Absa beskriver to opptaksperioder, mens produksjonsregisteret identifiserer en bestemt støtteoppføring. Lag en fiktiv gjenopptakelsesplan uten å dikte opp historisk totalbudsjett.",
          "fr": "Absa décrit deux périodes de tournage et le registre identifie une aide précise. Concevez une reprise fictive sans inventer le budget total.",
          "pt": "Absa descreve dois períodos de filmagem e o registo identifica apoio específico. Planeie retoma fictícia sem inventar orçamento total."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_piano_1993",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Independent financing, expressive landscape and cultural collaboration",
      "nb": "Uavhengig finansiering, uttrykksfullt landskap og kultursamarbeid",
      "fr": "Financement indépendant, paysage expressif et collaboration culturelle",
      "pt": "Financiamento independente, paisagem expressiva e colaboração cultural"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Memories of making The Piano – 25 years of Jane Campion's wild, windswept masterpiece",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/interviews/piano-jane-campion-jan-chapman"
      },
      {
        "id": "s1",
        "title": "The Piano",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/f/the-piano/"
      },
      {
        "id": "s2",
        "title": "The Piano",
        "publisher": "NZ On Screen",
        "url": "https://www.nzonscreen.com/videos/the-piano-1993/"
      },
      {
        "id": "s3",
        "title": "The Piano: Ada makes a deal",
        "publisher": "National Film and Sound Archive of Australia",
        "url": "https://www.nfsa.gov.au/collection/item/piano-ada-makes-deal"
      },
      {
        "id": "s4",
        "title": "Marae - The Piano Story",
        "publisher": "NZ On Screen",
        "url": "https://www.nzonscreen.com/all-series/marae/marae-the-piano-story-1993/"
      },
      {
        "id": "s5",
        "title": "The Piano (1992)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/cabb66ca-3bd6-562c-8c37-e704712b8ded/the-piano"
      },
      {
        "id": "s6",
        "title": "The Piano archive review: Jane Campion's realm of the senses",
        "publisher": "BFI / Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/reviews/piano-archive-review-jane-campions-realm-senses"
      },
      {
        "id": "s7",
        "title": "Stuart Dryburgh: on working with Jane Campion, Vincent Ward and Lee Tamahori",
        "publisher": "NZ On Screen",
        "url": "https://www.nzonscreen.com/interviews/stuart-dryburgh-on-working-with-jane-campion-vincent-ward-and-lee-tamahori/"
      }
    ],
    "questions": [
      {
        "id": "thepiano-financing",
        "area": "research",
        "prompt": {
          "en": "How can international financing preserve a director's creative plan?",
          "nb": "Hvordan kan internasjonal finansiering bevare regissørens kreative plan?",
          "fr": "Comment le financement international préserve-t-il le projet créatif du réalisateur ?",
          "pt": "Como pode financiamento internacional preservar o plano criativo do realizador?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Document financing conditions and negotiate creative responsibilities",
              "nb": "Dokumenter finansieringsvilkår og forhandle kreative ansvarsområder",
              "fr": "Documenter conditions de financement et négocier les responsabilités créatives",
              "pt": "Documentar condições de financiamento e negociar responsabilidades criativas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all prospective financiers offer identical terms",
              "nb": "Anta at alle potensielle finansieringspartnere tilbyr identiske vilkår",
              "fr": "Supposer que tous les financeurs offrent les mêmes conditions",
              "pt": "Supor que todos os financiadores oferecem condições idênticas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later awards as a guarantee of initial funding",
              "nb": "Behandle senere priser som garanti for opprinnelig finansiering",
              "fr": "Traiter les prix ultérieurs comme garantie du financement initial",
              "pt": "Tratar prémios posteriores como garantia de financiamento inicial"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Chapman describes failed financing attempts, the Ciby 2000 route and creative freedom. Compare hypothetical financing arrangements without inventing historical contract terms.",
          "nb": "Chapman beskriver mislykkede finansieringsforsøk, Ciby 2000-løsningen og kreativ frihet. Sammenlign fiktive finansieringsordninger uten å dikte opp historiske kontraktsvilkår.",
          "fr": "Chapman décrit les tentatives de financement, Ciby 2000 et la liberté créative. Comparez des accords fictifs sans inventer les clauses historiques.",
          "pt": "Chapman descreve tentativas de financiamento, Ciby 2000 e liberdade criativa. Compare acordos fictícios sem inventar cláusulas históricas."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "thepiano-landscape",
        "area": "camera",
        "prompt": {
          "en": "How can an exterior landscape support an intimate dramatic scene?",
          "nb": "Hvordan kan et eksteriørt landskap støtte en intim dramatisk scene?",
          "fr": "Comment un paysage extérieur soutient-il une scène dramatique intime ?",
          "pt": "Como pode uma paisagem exterior apoiar uma cena dramática íntima?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore safety and permissions at the filming location",
              "nb": "Ignorer sikkerhet og tillatelser på opptaksstedet",
              "fr": "Ignorer sécurité et autorisations sur le lieu de tournage",
              "pt": "Ignorar segurança e licenças no local de filmagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate scale, actor placement and practical weather planning",
              "nb": "Samordne skala, skuespillerplassering og praktisk værplanlegging",
              "fr": "Coordonner échelle, placement des acteurs et préparation météorologique",
              "pt": "Coordenar escala, posição dos atores e planeamento meteorológico"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use landscape as unrelated decorative spectacle",
              "nb": "Bruk landskap som urelatert dekorativt spektakel",
              "fr": "Utiliser le paysage comme spectacle décoratif sans lien",
              "pt": "Usar paisagem como espetáculo decorativo sem ligação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Chapman describes storyboard preparation and the contemporaneous set report documents Karekare Beach. Develop a new location study with safe practical constraints and acknowledge Dryburgh's contribution.",
          "nb": "Chapman beskriver storyboardforberedelser, og opptaksreportasjen dokumenterer Karekare Beach. Lag en egen stedsstudie med trygge praktiske rammer og anerkjenn Dryburghs bidrag.",
          "fr": "Chapman évoque les storyboards et le reportage documente Karekare Beach. Concevez une étude sûre des lieux en reconnaissant l’apport de Dryburgh.",
          "pt": "Chapman descreve storyboards e reportagem documenta Karekare Beach. Crie estudo seguro de local reconhecendo contributo de Dryburgh."
        },
        "sourceIds": [
          "s0",
          "s4",
          "s7"
        ]
      },
      {
        "id": "thepiano-culture",
        "area": "research",
        "prompt": {
          "en": "How should culturally specific representation be planned for a historical film?",
          "nb": "Hvordan bør kulturspesifikk representasjon planlegges i en historisk film?",
          "fr": "Comment préparer une représentation culturelle spécifique dans un film historique ?",
          "pt": "Como planear representação cultural específica num filme histórico?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat one historical consultation as universal cultural authorization",
              "nb": "Behandle én historisk konsultasjon som universell kulturtillatelse",
              "fr": "Traiter une consultation historique comme autorisation culturelle universelle",
              "pt": "Tratar uma consulta histórica como autorização cultural universal"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy culturally significant imagery without seeking permission",
              "nb": "Kopier kulturbetydningsfulle bilder uten å innhente tillatelse",
              "fr": "Copier des images culturellement significatives sans autorisation",
              "pt": "Copiar imagens culturalmente significativas sem permissão"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Consult relevant communities and document specific permissions and roles",
              "nb": "Rådfør deg med relevante lokalmiljøer og dokumenter konkrete tillatelser og roller",
              "fr": "Consulter les communautés concernées et documenter autorisations et rôles",
              "pt": "Consultar comunidades relevantes e documentar permissões e funções"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The contemporaneous Marae report identifies Māori participants and advisers. Plan a new consent-based consultation process without treating the historical production as blanket permission.",
          "nb": "Den samtidige Marae-reportasjen identifiserer maoriske medvirkende og rådgivere. Planlegg en ny samtykkebasert konsultasjon uten å behandle den historiske produksjonen som generell tillatelse.",
          "fr": "Le reportage Marae identifie des participants et conseillers māori. Planifiez une consultation consentie sans prendre la production historique pour autorisation générale.",
          "pt": "A reportagem Marae identifica participantes e consultores maori. Planeie consulta consentida sem tratar produção histórica como autorização geral."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_hoop_dreams_1994",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Longitudinal documentary, video workflow and editorial evidence",
      "nb": "Langtidsdokumentar, videoarbeidsflyt og klippebelegg",
      "fr": "Documentaire longitudinal, chaîne vidéo et preuves de montage",
      "pt": "Documentário longitudinal, fluxo de vídeo e evidência de montagem"
    },
    "sources": [
      {
        "id": "s0",
        "title": "HOOP DREAMS",
        "publisher": "American Film Institute Catalog",
        "url": "https://catalog.afi.com/Film/60030-HOOP-DREAMS"
      },
      {
        "id": "s1",
        "title": "Hoop Dreams",
        "publisher": "Kartemquin Films",
        "url": "https://kartemquin.org/film/hoop-dreams/"
      },
      {
        "id": "s2",
        "title": "Hoop dreams",
        "publisher": "Danish Film Institute",
        "url": "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/hoop-dreams"
      },
      {
        "id": "s3",
        "title": "Hoop Dreams",
        "publisher": "UCLA Film & Television Archive",
        "url": "https://www.cinema.ucla.edu/events/2024/03/09/hoop-dreams"
      },
      {
        "id": "s4",
        "title": "Steve James on Kartemquin Films",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/4023-steve-james-on-kartemquin-films"
      },
      {
        "id": "s5",
        "title": "Conversation with Steve James",
        "publisher": "Wednesday Journal",
        "url": "https://www.oakpark.com/2015/11/17/a-conversation-with-steve-james/"
      },
      {
        "id": "s6",
        "title": "Meet the Director: Steve James",
        "publisher": "Directors Guild of America Visual History",
        "url": "https://www.dga.org/Craft/VisualHistory/Interviews/Steve-James"
      }
    ],
    "questions": [
      {
        "id": "hoopdreams-longitudinal",
        "area": "research",
        "prompt": {
          "en": "How should a documentary following participants over several years be organized?",
          "nb": "Hvordan bør en dokumentar som følger deltakere over flere år organiseres?",
          "fr": "Comment organiser un documentaire suivant des participants plusieurs années ?",
          "pt": "Como organizar documentário que acompanha participantes durante vários anos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume all participant trajectories can be predicted in advance",
              "nb": "Anta at alle deltakerforløp kan forutsies på forhånd",
              "fr": "Supposer que toutes les trajectoires sont prévisibles",
              "pt": "Supor que todas as trajetórias são previsíveis"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Renew consent and maintain chronological records and support plans",
              "nb": "Forny samtykke og før kronologiske registre og støtteplaner",
              "fr": "Renouveler le consentement et tenir des registres chronologiques",
              "pt": "Renovar consentimento e manter registos cronológicos e planos de apoio"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat initial consent as unlimited permission for every later use",
              "nb": "Behandle førstegangssamtykke som ubegrenset tillatelse til all senere bruk",
              "fr": "Traiter le consentement initial comme autorisation illimitée",
              "pt": "Tratar consentimento inicial como autorização ilimitada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kartemquin and James describe the multi-year project. Plan a fictional longitudinal documentary with ongoing consent and explicit provisions for changing circumstances.",
          "nb": "Kartemquin og James beskriver flerårsprosjektet. Planlegg en fiktiv langtidsdokumentar med løpende samtykke og tydelige rammer for endrede omstendigheter.",
          "fr": "Kartemquin et James décrivent le projet pluriannuel. Concevez un documentaire longitudinal fictif avec consentement continu et adaptation aux circonstances.",
          "pt": "Kartemquin e James descrevem projeto plurianual. Planeie documentário longitudinal fictício com consentimento contínuo e adaptação às circunstâncias."
        },
        "sourceIds": [
          "s1",
          "s4",
          "s6"
        ]
      },
      {
        "id": "hoopdreams-video",
        "area": "camera",
        "prompt": {
          "en": "How can a low-budget documentary choose an appropriate recording workflow?",
          "nb": "Hvordan kan en lavbudsjettdokumentar velge en passende opptaksflyt?",
          "fr": "Comment un documentaire à petit budget choisit-il une chaîne de captation adaptée ?",
          "pt": "Como pode um documentário de baixo orçamento escolher fluxo de captação adequado?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose a costly format regardless of available resources",
              "nb": "Velg et kostbart format uansett tilgjengelige ressurser",
              "fr": "Choisir un format coûteux sans égard aux ressources",
              "pt": "Escolher formato caro sem considerar recursos disponíveis"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume historical video editing was identical to modern digital editing",
              "nb": "Anta at historisk videoklipping var identisk med moderne digital klipping",
              "fr": "Supposer que le montage vidéo historique était identique au numérique moderne",
              "pt": "Supor que montagem de vídeo histórica era idêntica à digital moderna"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Balance recording costs, broadcast needs and reliable backup",
              "nb": "Balanser opptakskostnader, kringkastingsbehov og pålitelig sikkerhetskopi",
              "fr": "Équilibrer coûts, exigences de diffusion et sauvegarde fiable",
              "pt": "Equilibrar custos, necessidades de emissão e cópias fiáveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "James describes the choice of broadcast-quality video and the VHS linear offline workflow. Compare practical modern alternatives while preserving the historical distinction.",
          "nb": "James beskriver valget av kringkastingsvideo og lineær VHS-offlineklipping. Sammenlign praktiske moderne alternativer og bevar det historiske skillet.",
          "fr": "James décrit la vidéo de qualité diffusion et le montage linéaire VHS. Comparez des options modernes sans effacer la distinction historique.",
          "pt": "James descreve vídeo de qualidade de emissão e montagem linear VHS. Compare opções modernas preservando distinção histórica."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "hoopdreams-editing",
        "area": "research",
        "prompt": {
          "en": "How can hundreds of hours of documentary footage be selected transparently?",
          "nb": "Hvordan kan hundrevis av timer med dokumentaropptak velges ut transparent?",
          "fr": "Comment sélectionner de façon transparente des centaines d’heures documentaires ?",
          "pt": "Como selecionar transparentemente centenas de horas documentais?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Log source context, themes, dates and editorial omissions",
              "nb": "Loggfør kildekontekst, temaer, datoer og redaksjonelle utelatelser",
              "fr": "Consigner contexte, thèmes, dates et omissions éditoriales",
              "pt": "Registar contexto, temas, datas e omissões editoriais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard all contextual information once clips are selected",
              "nb": "Forkast all kontekstinformasjon når klipp er valgt",
              "fr": "Supprimer tout contexte après sélection des extraits",
              "pt": "Descartar todo contexto após seleção de excertos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Present editorial compression as a complete record of participants' lives",
              "nb": "Presenter redaksjonell komprimering som fullstendig dokumentasjon av deltakernes liv",
              "fr": "Présenter la condensation comme dossier complet de la vie des participants",
              "pt": "Apresentar condensação editorial como registo completo da vida dos participantes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Archive and oral-history sources describe roughly 250 hours of footage and distinct editing credits. Build a fictional selection log that preserves context and acknowledges omissions.",
          "nb": "Arkiv- og muntlige historiekilder beskriver rundt 250 timer opptak og separate klippekrediteringer. Lag en fiktiv utvalgslogg som bevarer kontekst og anerkjenner utelatelser.",
          "fr": "Les archives et témoignages décrivent environ 250 heures et des crédits de montage distincts. Créez un registre fictif préservant contexte et omissions.",
          "pt": "Arquivos e história oral descrevem cerca de 250 horas e créditos distintos de montagem. Crie registo fictício preservando contexto e omissões."
        },
        "sourceIds": [
          "s0",
          "s3",
          "s6"
        ]
      }
    ]
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
