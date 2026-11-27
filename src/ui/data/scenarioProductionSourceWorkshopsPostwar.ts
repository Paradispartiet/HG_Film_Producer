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
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
