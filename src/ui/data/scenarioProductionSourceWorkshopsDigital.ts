import type { SourceBackedCaseWorkshop } from "./scenarioProductionSourceWorkshops.js";

import { contemporarySourceWorkshops } from "./scenarioProductionSourceWorkshopsContemporary.js";

export const digitalSourceWorkshops = [
  {
    "scenarioId": "scenario_zodiac_2007",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Digital capture, archive custody and period sound",
      "nb": "Digitalt opptak, arkivforvaltning og tidsriktig lyd",
      "fr": "Captation numérique, archivage et son d’époque",
      "pt": "Captação digital, arquivo e som de época"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Zodiac: Cold Case File",
        "publisher": "American Society of Cinematographers / American Cinematographer",
        "url": "https://theasc.com/article/flashback-zodiac/"
      },
      {
        "id": "s1",
        "title": "Edit This! - Zodiac's Sign of the Times",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2007/January-1-2007/EDIT-THIS-ZODIACS-SIGN-OF-THE-TIMES.aspx"
      },
      {
        "id": "s2",
        "title": "Unraveling the Sound for Zodiac",
        "publisher": "Mix",
        "url": "https://www.mixonline.com/sfp/unraveling-sound-zodiac-369163"
      },
      {
        "id": "s3",
        "title": "Zodiac",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/64556-ZODIAC"
      }
    ],
    "questions": [
      {
        "id": "zodiac-pipeline",
        "area": "camera",
        "prompt": {
          "en": "How should a digital capture workflow be evaluated?",
          "nb": "Hvordan bør en digital opptaksflyt vurderes?",
          "fr": "Comment évaluer une chaîne de captation numérique ?",
          "pt": "Como avaliar um fluxo de captação digital?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test capture through grading and projection",
              "nb": "Test opptak gjennom gradering og visning",
              "fr": "Tester la captation jusqu’à la projection",
              "pt": "Testar a captação até à projeção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Judge only the on-set monitor image",
              "nb": "Vurder bare bildet på opptaksmonitoren",
              "fr": "Juger uniquement l’image du moniteur",
              "pt": "Avaliar apenas a imagem do monitor"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the final projection conditions",
              "nb": "Ignorer de endelige visningsforholdene",
              "fr": "Ignorer les conditions finales de projection",
              "pt": "Ignorar as condições finais de projeção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC describes testing through grading and projection. Compare the full workflow instead of assuming that the monitor predicts the final image.",
          "nb": "ASC beskriver prøver frem til gradering og visning. Sammenlign hele arbeidsflyten fremfor å anta at monitoren forutsier sluttbildet.",
          "fr": "L’ASC décrit des essais jusqu’à la projection. Comparez toute la chaîne sans supposer que le moniteur prédit l’image finale.",
          "pt": "A ASC descreve testes até à projeção. Compare todo o fluxo sem supor que o monitor prevê a imagem final."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "zodiac-archive",
        "area": "research",
        "prompt": {
          "en": "How should editing media relate to camera originals?",
          "nb": "Hvordan bør klippemedier forholde seg til kameraoriginaler?",
          "fr": "Comment relier médias de montage et originaux caméra ?",
          "pt": "Como relacionar meios de montagem e originais de câmara?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace all originals with editing copies",
              "nb": "Erstatt alle originaler med klippekopier",
              "fr": "Remplacer tous les originaux par les copies de montage",
              "pt": "Substituir originais por cópias de montagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Keep only one unverified working copy",
              "nb": "Behold bare én uverifisert arbeidskopi",
              "fr": "Conserver une seule copie de travail non vérifiée",
              "pt": "Guardar uma única cópia de trabalho não verificada"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Verify independent archives and use proxies",
              "nb": "Verifiser uavhengige arkiver og bruk proxyfiler",
              "fr": "Vérifier des archives indépendantes et utiliser des proxys",
              "pt": "Verificar arquivos independentes e utilizar proxies"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Post describes two verified digital-negative copies and distinct editorial proxies. Design a small archive that can be independently restored.",
          "nb": "Post beskriver to verifiserte digitalnegativer og egne klippeproxyer. Lag et lite arkiv som kan gjenopprettes uavhengig.",
          "fr": "Post décrit deux copies vérifiées et des proxys distincts. Concevez une petite archive restaurable indépendamment.",
          "pt": "A Post descreve duas cópias verificadas e proxies distintos. Crie um pequeno arquivo recuperável de forma independente."
        },
        "sourceIds": [
          "s1"
        ]
      },
      {
        "id": "zodiac-sound",
        "area": "sound",
        "prompt": {
          "en": "How can sound establish a reconstructed period?",
          "nb": "Hvordan kan lyd etablere en rekonstruert tidsperiode?",
          "fr": "Comment le son peut-il établir une époque reconstituée ?",
          "pt": "Como pode o som estabelecer uma época reconstruída?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Cover every environmental sound with music",
              "nb": "Dekk alle miljølyder med musikk",
              "fr": "Couvrir tous les sons ambiants de musique",
              "pt": "Cobrir todos os sons ambientes com música"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Research and record period-appropriate objects",
              "nb": "Undersøk og ta opp tidsriktige gjenstander",
              "fr": "Rechercher et enregistrer des objets d’époque",
              "pt": "Pesquisar e gravar objetos adequados à época"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reuse modern sounds without checking their dates",
              "nb": "Gjenbruk moderne lyder uten å sjekke årstall",
              "fr": "Réutiliser des sons modernes sans vérifier les dates",
              "pt": "Reutilizar sons modernos sem verificar datas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mix documents period-specific everyday sound recordings. Make an original dated reference list and compare how these sounds support the setting.",
          "nb": "Mix dokumenterer tidsriktige hverdagslyder. Lag en original datert referanseliste og sammenlign hvordan lydene støtter miljøet.",
          "fr": "Mix documente des sons quotidiens d’époque. Créez une liste datée et comparez leur apport au décor.",
          "pt": "A Mix documenta sons quotidianos da época. Crie uma lista datada e compare o contributo para o cenário."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_walle_2008",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Robot gesture, color scripts and sonic identity",
      "nb": "Robotbevegelse, fargemanus og lydidentitet",
      "fr": "Gestes robotiques, scripts de couleur et identité sonore",
      "pt": "Gestos robóticos, guiões de cor e identidade sonora"
    },
    "sources": [
      {
        "id": "s0",
        "title": "WALL-E",
        "publisher": "Pixar Animation Studios",
        "url": "https://www.pixar.com/wall-e"
      },
      {
        "id": "s1",
        "title": "The Walt Disney Studios Rolls Out Slate Through 2012",
        "publisher": "The Walt Disney Company",
        "url": "https://thewaltdisneycompany.com/press-releases/the-walt-disney-studios-rolls-out-slate-of-10-new-animated-motion-pictures-through-2012/"
      },
      {
        "id": "s2",
        "title": "WALL-E (2008)",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/33246-wall-e"
      },
      {
        "id": "s3",
        "title": "The 81st Academy Awards",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/2009"
      }
    ],
    "questions": [
      {
        "id": "walle-gesture",
        "area": "animation",
        "prompt": {
          "en": "How can a robot convey emotion without explanatory dialogue?",
          "nb": "Hvordan kan en robot formidle følelser uten forklarende dialog?",
          "fr": "Comment un robot exprime-t-il une émotion sans dialogue explicatif ?",
          "pt": "Como exprime um robô emoção sem diálogo explicativo?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test expressive poses and movement timing",
              "nb": "Prøv uttrykksfulle positurer og bevegelsesrytme",
              "fr": "Tester les poses expressives et le rythme des mouvements",
              "pt": "Testar poses expressivas e ritmo de movimento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every gesture through narration",
              "nb": "Forklar hver gest gjennom fortellerstemme",
              "fr": "Expliquer chaque geste par une narration",
              "pt": "Explicar cada gesto através de narração"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Give every emotion identical movements",
              "nb": "Gi alle følelser identiske bevegelser",
              "fr": "Donner les mêmes mouvements à chaque émotion",
              "pt": "Dar movimentos idênticos a todas as emoções"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Pixar and Criterion document visual storytelling and design development. Create an original dialogue-free animation and test its readability.",
          "nb": "Pixar og Criterion dokumenterer visuell fortelling og designutvikling. Lag en original dialogfri animasjon og prøv tydeligheten.",
          "fr": "Pixar et Criterion documentent le récit visuel et le développement graphique. Créez une animation originale sans dialogue et testez sa lisibilité.",
          "pt": "Pixar e Criterion documentam narrativa visual e design. Crie uma animação original sem diálogo e teste a sua legibilidade."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "walle-palette",
        "area": "animation",
        "prompt": {
          "en": "How can color scripts distinguish story environments?",
          "nb": "Hvordan kan fargemanus skille fortellingens miljøer?",
          "fr": "Comment les scripts de couleur distinguent-ils les décors ?",
          "pt": "Como distinguem guiões de cor os ambientes narrativos?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose colors randomly for each individual shot",
              "nb": "Velg tilfeldige farger for hvert enkelt bilde",
              "fr": "Choisir les couleurs au hasard pour chaque plan",
              "pt": "Escolher cores ao acaso para cada plano"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Give contrasting worlds the same palette",
              "nb": "Gi kontrasterende verdener samme palett",
              "fr": "Donner la même palette aux mondes opposés",
              "pt": "Dar a mesma paleta a mundos contrastantes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan palette and light changes across scenes",
              "nb": "Planlegg palett- og lysendringer gjennom scenene",
              "fr": "Planifier les changements de palette et de lumière",
              "pt": "Planear mudanças de paleta e iluminação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion preserves Eggleston's color scripts and Pixar describes the different environments. Design an original visual progression before detailed rendering.",
          "nb": "Criterion bevarer Egglestons fargemanus, og Pixar beskriver ulike miljøer. Lag en original visuell utvikling før detaljert rendering.",
          "fr": "Criterion conserve les scripts d’Eggleston et Pixar décrit les décors. Concevez une progression visuelle originale avant le rendu détaillé.",
          "pt": "A Criterion preserva guiões de Eggleston e a Pixar descreve ambientes. Crie uma progressão visual original antes da renderização."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "walle-voice",
        "area": "sound",
        "prompt": {
          "en": "How can sound distinguish nonverbal characters?",
          "nb": "Hvordan kan lyd skille karakterer uten tale?",
          "fr": "Comment le son distingue-t-il des personnages non verbaux ?",
          "pt": "Como distingue o som personagens não verbais?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use music alone to represent every movement",
              "nb": "Bruk bare musikk til å representere alle bevegelser",
              "fr": "Employer uniquement la musique pour chaque mouvement",
              "pt": "Usar apenas música para representar cada movimento"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop a distinct sonic vocabulary for each character",
              "nb": "Utvikle et eget lydvokabular for hver karakter",
              "fr": "Développer un vocabulaire sonore propre à chaque personnage",
              "pt": "Desenvolver um vocabulário sonoro para cada personagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign identical sounds to every character",
              "nb": "Gi alle karakterer identiske lyder",
              "fr": "Attribuer des sons identiques à tous les personnages",
              "pt": "Atribuir sons idênticos a todas as personagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Disney credits Ben Burtt and Thomas Newman; Academy records distinguish sound and score. Compare original character sounds with and without music.",
          "nb": "Disney krediterer Ben Burtt og Thomas Newman; Akademiet skiller lyd og musikk. Sammenlign originale karakterlyder med og uten musikk.",
          "fr": "Disney crédite Ben Burtt et Thomas Newman ; l’Académie distingue son et musique. Comparez des sons originaux avec et sans musique.",
          "pt": "A Disney credita Ben Burtt e Thomas Newman; a Academia distingue som e música. Compare sons originais com e sem música."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_slumdog_millionaire_2008",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Hybrid image capture, training and local collaboration",
      "nb": "Hybridopptak, opplæring og lokalt samarbeid",
      "fr": "Captation hybride, formation et collaboration locale",
      "pt": "Captação híbrida, formação e colaboração local"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Slumdog Millionaire Shot With Innovative SI-2K Digital Cinema Camera",
        "publisher": "Silicon Imaging",
        "url": "https://www.siliconimaging.com/DigitalCinema/News/PR_01_31_09_Slumdog.html"
      },
      {
        "id": "s1",
        "title": "Digitale Cinematographie 2009: Slumdog Millionaire workflow",
        "publisher": "film-tv-video.de",
        "url": "https://www.film-tv-video.de/event/2009/07/07/digitale-cinematographie-2009-red-festspiele-in-munchen/"
      },
      {
        "id": "s3",
        "title": "Slumdog Millionaire - AFI FEST 2008",
        "publisher": "American Film Institute / AFI FEST",
        "url": "https://fest.afi.com/2008/galas-2008/slumdog-millionaire/"
      },
      {
        "id": "s5",
        "title": "Interview: Danny Boyle, Director of Slumdog Millionaire",
        "publisher": "Connect2Mason",
        "url": "https://www.connect2mason.com/interview_dab_boyle"
      }
    ],
    "questions": [
      {
        "id": "slumdog-hybrid",
        "area": "camera",
        "prompt": {
          "en": "How should camera choices respond to location constraints?",
          "nb": "Hvordan bør kameravalg tilpasses forholdene på opptaksstedet?",
          "fr": "Comment adapter les choix caméra aux contraintes du lieu ?",
          "pt": "Como adaptar escolhas de câmara às condições do local?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare mobile digital and film approaches by scene",
              "nb": "Sammenlign mobile digitale og filmbaserte løsninger per scene",
              "fr": "Comparer solutions numériques mobiles et film selon la scène",
              "pt": "Comparar soluções digitais móveis e em película por cena"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Declare every scene digital without evidence",
              "nb": "Erklær alle scener digitale uten bevis",
              "fr": "Déclarer chaque scène numérique sans preuve",
              "pt": "Declarar todas as cenas digitais sem provas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Select a format solely by its marketing label",
              "nb": "Velg format bare etter markedsføringen",
              "fr": "Choisir un format pour son seul nom commercial",
              "pt": "Escolher formato apenas pela designação comercial"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Silicon Imaging and Ciupek describe mobile SI-2K and 35mm night work. Compare scene constraints without inventing a percentage for either format.",
          "nb": "Silicon Imaging og Ciupek beskriver mobil SI-2K og nattopptak på 35 mm. Sammenlign scenebehov uten å finne på formatprosenter.",
          "fr": "Silicon Imaging et Ciupek décrivent SI-2K mobile et nuits en 35 mm. Comparez les contraintes sans inventer de pourcentages.",
          "pt": "Silicon Imaging e Ciupek descrevem SI-2K móvel e noites em 35 mm. Compare condições sem inventar percentagens."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "slumdog-training",
        "area": "research",
        "prompt": {
          "en": "How should a crew adopt unfamiliar digital equipment?",
          "nb": "Hvordan bør et filmteam ta i bruk ukjent digitalt utstyr?",
          "fr": "Comment une équipe adopte-t-elle un matériel numérique inconnu ?",
          "pt": "Como deve uma equipa adotar equipamento digital desconhecido?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Skip training and rely on one storage device",
              "nb": "Hopp over opplæring og stol på én lagringsenhet",
              "fr": "Omettre la formation et dépendre d’un seul stockage",
              "pt": "Dispensar formação e depender de um único armazenamento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat disk redundancy as a complete archive",
              "nb": "Behandle diskredundans som et fullstendig arkiv",
              "fr": "Traiter la redondance comme une archive complète",
              "pt": "Tratar redundância como arquivo completo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan training and verified separate backups",
              "nb": "Planlegg opplæring og verifiserte separate sikkerhetskopier",
              "fr": "Prévoir formation et sauvegardes distinctes vérifiées",
              "pt": "Planear formação e cópias de segurança separadas e verificadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ciupek describes local assistant training and a separate backup sent to England. Design a small workflow that can recover from a lost working copy.",
          "nb": "Ciupek beskriver opplæring av lokale assistenter og en separat kopi sendt til England. Lag en arbeidsflyt som tåler tap av arbeidskopien.",
          "fr": "Ciupek décrit la formation locale et une copie séparée envoyée en Angleterre. Concevez un flux permettant la restauration.",
          "pt": "Ciupek descreve formação local e uma cópia enviada para Inglaterra. Crie um fluxo que permita recuperar a cópia de trabalho."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "slumdog-collaboration",
        "area": "sound",
        "prompt": {
          "en": "How can local collaborators shape a location scene?",
          "nb": "Hvordan kan lokale samarbeidspartnere forme en stedbasert scene?",
          "fr": "Comment les collaborateurs locaux façonnent-ils une scène située ?",
          "pt": "Como podem colaboradores locais moldar uma cena situada?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase conflicting credits from production records",
              "nb": "Fjern avvikende krediteringer fra produksjonsloggen",
              "fr": "Effacer les crédits divergents des dossiers",
              "pt": "Apagar créditos divergentes dos registos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Include local language, casting and sound expertise",
              "nb": "Inkluder lokal språk-, casting- og lydkompetanse",
              "fr": "Intégrer les compétences locales de langue, casting et son",
              "pt": "Integrar competências locais de língua, elenco e som"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat local speech as irrelevant background noise",
              "nb": "Behandle lokalt språk som uvesentlig bakgrunnsstøy",
              "fr": "Traiter la parole locale comme bruit de fond inutile",
              "pt": "Tratar a fala local como ruído de fundo irrelevante"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Boyle describes Tandan's local collaboration and live sound; AFI FEST retains her directing credit. Record contributions and catalogue differences explicitly.",
          "nb": "Boyle beskriver Tandans lokale samarbeid og reallyd; AFI FEST bevarer regikrediteringen hennes. Registrer bidrag og katalogforskjeller tydelig.",
          "fr": "Boyle décrit la collaboration de Tandan et le son direct ; AFI FEST conserve son crédit de réalisation. Documentez les contributions et divergences.",
          "pt": "Boyle descreve a colaboração de Tandan e o som direto; AFI FEST preserva o crédito de realização. Registe contributos e divergências."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_class_2008",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ensemble rehearsal, camera coverage and classroom voices",
      "nb": "Ensembleprøver, kameraopptak og klasseromsstemmer",
      "fr": "Répétitions collectives, prises et voix en classe",
      "pt": "Ensaios coletivos, captação e vozes em sala"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Entre les murs (The Class)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/entre-les-murs/"
      },
      {
        "id": "s1",
        "title": "Entre les murs (2008)",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/637604a5-968b-5646-ad54-b7597d79cfa1/entre-les-murs"
      },
      {
        "id": "s3",
        "title": "Exclusive: Laurent Cantet Teaches The Class",
        "publisher": "ComingSoon.net",
        "url": "https://www.comingsoon.net/movies/features/51112-exclusive-laurent-cantet-teaches-the-class"
      }
    ],
    "questions": [
      {
        "id": "theclass-rehearsal",
        "area": "research",
        "prompt": {
          "en": "How can rehearsal develop a classroom ensemble?",
          "nb": "Hvordan kan prøver utvikle et klasseromsensemble?",
          "fr": "Comment les répétitions développent-elles un ensemble scolaire ?",
          "pt": "Como podem os ensaios desenvolver um elenco escolar?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Develop relationships through guided fictional exercises",
              "nb": "Utvikle relasjoner gjennom veiledede fiktive øvelser",
              "fr": "Développer les relations par des exercices fictifs guidés",
              "pt": "Desenvolver relações através de exercícios fictícios guiados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Demand fixed performances before the first rehearsal",
              "nb": "Krev faste prestasjoner før første prøve",
              "fr": "Exiger un jeu fixé avant la première répétition",
              "pt": "Exigir interpretações fixas antes do primeiro ensaio"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat participants as interchangeable extras",
              "nb": "Behandle deltakerne som utskiftbare statister",
              "fr": "Traiter les participants comme figurants interchangeables",
              "pt": "Tratar participantes como figurantes intercambiáveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cantet describes extended rehearsal and character discovery. Create a consent-based fictional workshop rather than assuming the finished film is unscripted reality.",
          "nb": "Cantet beskriver langvarige prøver og karakterutvikling. Lag et fiktivt verksted med samtykke fremfor å anta at filmen er uskrevet virkelighet.",
          "fr": "Cantet décrit de longues répétitions et la découverte des personnages. Concevez un atelier fictif et consenti.",
          "pt": "Cantet descreve ensaios prolongados e descoberta de personagens. Crie uma oficina fictícia com consentimento."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "theclass-coverage",
        "area": "camera",
        "prompt": {
          "en": "How can simultaneous coverage preserve live exchanges?",
          "nb": "Hvordan kan samtidige opptak bevare levende samtaler?",
          "fr": "Comment les prises simultanées préservent-elles les échanges vivants ?",
          "pt": "Como pode a captação simultânea preservar trocas vivas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Put every camera at the same viewpoint",
              "nb": "Plasser alle kameraer i samme synsvinkel",
              "fr": "Placer toutes les caméras au même point de vue",
              "pt": "Colocar todas as câmaras no mesmo ponto de vista"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Interrupt each exchange to repeat identical coverage",
              "nb": "Avbryt hver samtale for å gjenta identiske opptak",
              "fr": "Interrompre chaque échange pour des prises identiques",
              "pt": "Interromper cada troca para repetir captação idêntica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan complementary views and unobtrusive crew space",
              "nb": "Planlegg utfyllende vinkler og diskret plass til teamet",
              "fr": "Prévoir des angles complémentaires et un espace discret",
              "pt": "Planear ângulos complementares e espaço discreto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cantet describes three cameras and a modified classroom. Test complementary coverage of a fictional discussion without copying the original floor plan.",
          "nb": "Cantet beskriver tre kameraer og et ombygget klasserom. Prøv utfyllende opptak av en fiktiv diskusjon uten å kopiere originalplanen.",
          "fr": "Cantet décrit trois caméras et une salle modifiée. Testez des angles complémentaires sur une discussion fictive.",
          "pt": "Cantet descreve três câmaras e uma sala modificada. Teste ângulos complementares numa discussão fictícia."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "theclass-voices",
        "area": "sound",
        "prompt": {
          "en": "How can overlapping speech remain dramatically readable?",
          "nb": "Hvordan kan overlappende tale forbli dramatisk forståelig?",
          "fr": "Comment les paroles superposées restent-elles lisibles ?",
          "pt": "Como podem falas sobrepostas manter-se legíveis?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace all interruptions with isolated narration",
              "nb": "Erstatt alle avbrytelser med isolert fortellerstemme",
              "fr": "Remplacer toute interruption par une narration isolée",
              "pt": "Substituir interrupções por narração isolada"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test selective listening and the balance of voices",
              "nb": "Prøv selektiv lytting og balansen mellom stemmene",
              "fr": "Tester l’écoute sélective et l’équilibre des voix",
              "pt": "Testar escuta seletiva e equilíbrio das vozes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Give every voice identical prominence at all times",
              "nb": "Gi alle stemmer lik fremtreden hele tiden",
              "fr": "Donner la même présence à chaque voix en permanence",
              "pt": "Dar a mesma presença a todas as vozes sempre"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes records the sound team and Cantet describes live exchanges. Compare mixes that preserve ensemble energy and intelligibility in a new scene.",
          "nb": "Cannes krediterer lydteamet, og Cantet beskriver levende samtaler. Sammenlign mikser som bevarer ensembleenergi og forståelighet i en ny scene.",
          "fr": "Cannes crédite l’équipe son et Cantet décrit les échanges vivants. Comparez des mixages préservant énergie et intelligibilité.",
          "pt": "Cannes credita a equipa de som e Cantet descreve trocas vivas. Compare misturas que preservem energia e inteligibilidade."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_district_9_2009",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Documentary style, digital creatures and improvisation",
      "nb": "Dokumentarstil, digitale skapninger og improvisasjon",
      "fr": "Style documentaire, créatures numériques et improvisation",
      "pt": "Estilo documental, criaturas digitais e improvisação"
    },
    "sources": [
      {
        "id": "s0",
        "title": "District 9",
        "publisher": "fxguide",
        "url": "https://www.fxguide.com/fxfeatured/district_9/"
      },
      {
        "id": "s1",
        "title": "District 9",
        "publisher": "Weta Workshop",
        "url": "https://www.wetaworkshop.com/projects/district-9"
      },
      {
        "id": "s2",
        "title": "Sharlto Copley moves in front of the camera for District 9",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/archives/la-xpm-2009-aug-13-et-performance13-story.html"
      },
      {
        "id": "s3",
        "title": "District 9: Interview with Director Neill Blomkamp",
        "publisher": "Emanuel Levy",
        "url": "https://emanuellevy.com/interviews/district-9-interview-with-director-neill-blomkamp-6/"
      }
    ],
    "questions": [
      {
        "id": "district9-media",
        "area": "camera",
        "prompt": {
          "en": "How can fictional media fragments build a coherent world?",
          "nb": "Hvordan kan fiktive mediefragmenter bygge en sammenhengende verden?",
          "fr": "Comment des fragments médiatiques fictifs construisent-ils un monde cohérent ?",
          "pt": "Como podem fragmentos mediáticos fictícios construir um mundo coerente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Define distinct visual rules for each fictional medium",
              "nb": "Definer ulike bilderegler for hvert fiktive medium",
              "fr": "Définir des règles visuelles propres à chaque média fictif",
              "pt": "Definir regras visuais para cada meio fictício"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Make every media fragment visually identical",
              "nb": "Gjør alle mediefragmenter visuelt identiske",
              "fr": "Rendre tous les fragments visuellement identiques",
              "pt": "Tornar todos os fragmentos visualmente idênticos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Present fictional reports as actual documentary evidence",
              "nb": "Presenter fiktive reportasjer som ekte dokumentasjon",
              "fr": "Présenter des reportages fictifs comme preuves réelles",
              "pt": "Apresentar reportagens fictícias como provas reais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Blomkamp describes mock-documentary, corporate and broadcast forms. Create explicitly fictional fragments with coherent but distinguishable visual conventions.",
          "nb": "Blomkamp beskriver liksomdokumentar, bedriftsvideo og kringkasting. Lag tydelig fiktive fragmenter med sammenhengende, men ulike bilderegler.",
          "fr": "Blomkamp décrit faux documentaire, vidéo institutionnelle et diffusion. Créez des fragments explicitement fictifs aux conventions distinctes.",
          "pt": "Blomkamp descreve falso documentário, vídeo institucional e emissão. Crie fragmentos claramente fictícios com convenções distintas."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "district9-integration",
        "area": "animation",
        "prompt": {
          "en": "How can a digital character fit handheld footage?",
          "nb": "Hvordan kan en digital karakter passe inn i håndholdte opptak?",
          "fr": "Comment intégrer un personnage numérique à des prises mobiles ?",
          "pt": "Como integrar uma personagem digital em imagens móveis?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Render the character without matching camera movement",
              "nb": "Render karakteren uten å tilpasse kamerabevegelsen",
              "fr": "Rendre le personnage sans suivre le mouvement caméra",
              "pt": "Renderizar a personagem sem adaptar movimento da câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat physical design and digital effects as unrelated",
              "nb": "Behandle fysisk design og digitale effekter som urelaterte",
              "fr": "Traiter design physique et effets numériques comme indépendants",
              "pt": "Tratar design físico e efeitos digitais como independentes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Match light, motion and tracking to the live plate",
              "nb": "Tilpass lys, bevegelse og sporing til realopptaket",
              "fr": "Adapter lumière, mouvement et suivi à la prise réelle",
              "pt": "Adaptar luz, movimento e rastreio à imagem real"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "fxguide describes tracking and the raw visual style; Weta documents coordinated design. Test a fictional object in handheld footage with matched motion and lighting.",
          "nb": "fxguide beskriver sporing og rå bildestil; Weta dokumenterer samordnet design. Prøv et fiktivt objekt i håndholdte opptak med tilpasset bevegelse og lys.",
          "fr": "fxguide décrit le suivi et Weta le design coordonné. Testez un objet fictif dans des prises mobiles avec mouvement et lumière adaptés.",
          "pt": "A fxguide descreve rastreio e a Weta design coordenado. Teste um objeto fictício em imagens móveis com movimento e luz adequados."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "district9-improv",
        "area": "research",
        "prompt": {
          "en": "How can improvisation support fictional procedural dialogue?",
          "nb": "Hvordan kan improvisasjon støtte fiktiv prosedyredialog?",
          "fr": "Comment l’improvisation sert-elle un dialogue procédural fictif ?",
          "pt": "Como pode improvisação apoiar diálogo procedural fictício?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume improvisation eliminates editorial decisions",
              "nb": "Anta at improvisasjon fjerner behovet for klippevalg",
              "fr": "Supposer que l’improvisation élimine les choix de montage",
              "pt": "Supor que improvisação elimina decisões de montagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Set agreed fictional objectives and allow responsive dialogue",
              "nb": "Sett avtalte fiktive mål og tillat responsiv dialog",
              "fr": "Fixer des objectifs fictifs convenus et permettre un dialogue réactif",
              "pt": "Definir objetivos fictícios acordados e permitir diálogo responsivo"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove every objective before the actors improvise",
              "nb": "Fjern alle mål før skuespillerne improviserer",
              "fr": "Supprimer tous les objectifs avant l’improvisation",
              "pt": "Eliminar todos os objetivos antes da improvisação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Copley describes improvised dialogue and Blomkamp describes spontaneous interviews. Compare guided takes without claiming that every scene was improvised.",
          "nb": "Copley beskriver improvisert dialog og Blomkamp spontane intervjuer. Sammenlign veiledede tagninger uten å påstå at alle scener var improvisert.",
          "fr": "Copley décrit le dialogue improvisé et Blomkamp les entretiens spontanés. Comparez des prises guidées sans généraliser à toutes les scènes.",
          "pt": "Copley descreve diálogo improvisado e Blomkamp entrevistas espontâneas. Compare tomadas orientadas sem generalizar a todas as cenas."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_alamar_2009",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Fictional structure, observational filming and exhibition formats",
      "nb": "Fiksjonsstruktur, observerende opptak og visningsformater",
      "fr": "Structure fictionnelle, observation et formats de projection",
      "pt": "Estrutura ficcional, observação e formatos de exibição"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Alamar",
        "publisher": "International Film Festival Rotterdam",
        "url": "https://iffr.com/en/2010/films/alamar"
      },
      {
        "id": "s1",
        "title": "Alamar",
        "publisher": "UCLA Film & Television Archive",
        "url": "https://cinema.ucla.edu/events/alamar-01-07-18"
      },
      {
        "id": "s2",
        "title": "A Conversation With Pedro Gonzalez-Rubio",
        "publisher": "Hammer to Nail",
        "url": "https://www.hammertonail.com/interviews/a-conversation-with-pedro-gonzalez-rubio-alamar/"
      },
      {
        "id": "s3",
        "title": "Pedro González-Rubio over Alamar",
        "publisher": "Filmkrant",
        "url": "https://filmkrant.nl/interview/pedro-gonzalez-rubio-over-alamar/"
      }
    ],
    "questions": [
      {
        "id": "alamar-fiction",
        "area": "research",
        "prompt": {
          "en": "How can designed fiction remain open to spontaneous events?",
          "nb": "Hvordan kan planlagt fiksjon være åpen for spontane hendelser?",
          "fr": "Comment une fiction construite reste-t-elle ouverte aux événements spontanés ?",
          "pt": "Como pode ficção planeada manter-se aberta a acontecimentos espontâneos?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan a simple story and allow observed variation",
              "nb": "Planlegg en enkel fortelling og tillat observerte variasjoner",
              "fr": "Prévoir un récit simple et accepter les variations observées",
              "pt": "Planear uma narrativa simples e permitir variações observadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Script every gesture as a fixed instruction",
              "nb": "Skriv hver gest som en fast instruksjon",
              "fr": "Scénariser chaque geste comme instruction fixe",
              "pt": "Escrever cada gesto como instrução fixa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Call every filmed event unstaged documentary truth",
              "nb": "Kall alle filmede hendelser uiscenesatt dokumentarsannhet",
              "fr": "Qualifier tout événement de vérité documentaire non mise en scène",
              "pt": "Chamar cada acontecimento de verdade documental não encenada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "UCLA describes a semi-documentary and González-Rubio discusses designed fiction open to spontaneity. Distinguish planned events and observed variation in a new exercise.",
          "nb": "UCLA beskriver en semidokumentar, og González-Rubio omtaler planlagt fiksjon åpen for spontanitet. Skill planlagte hendelser og observerte variasjoner.",
          "fr": "UCLA décrit un semi-documentaire et González-Rubio une fiction ouverte à la spontanéité. Distinguez événements prévus et variations observées.",
          "pt": "A UCLA descreve um semidocumentário e González-Rubio ficção aberta à espontaneidade. Distinga acontecimentos previstos e variações observadas."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "alamar-place",
        "area": "camera",
        "prompt": {
          "en": "How should natural surroundings influence observational filming?",
          "nb": "Hvordan bør naturmiljø påvirke observerende opptak?",
          "fr": "Comment le milieu naturel influence-t-il le tournage d’observation ?",
          "pt": "Como deve o ambiente natural influenciar a filmagem de observação?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Rearrange the habitat to fit every frame",
              "nb": "Omform naturmiljøet for å tilpasse hvert utsnitt",
              "fr": "Modifier l’habitat pour adapter chaque cadrage",
              "pt": "Alterar o habitat para adaptar cada enquadramento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Impose a rigid studio schedule regardless of place",
              "nb": "Påtving en stiv studioplan uavhengig av stedet",
              "fr": "Imposer un planning rigide sans tenir compte du lieu",
              "pt": "Impor calendário rígido sem considerar o local"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan low-impact observation around local conditions",
              "nb": "Planlegg skånsom observasjon ut fra lokale forhold",
              "fr": "Prévoir une observation à faible impact selon le lieu",
              "pt": "Planear observação de baixo impacto segundo condições locais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The director interviews connect the reef setting to observational choices. Design a low-impact location exercise without reconstructing the original production procedure.",
          "nb": "Regissørintervjuene knytter revmiljøet til observasjonsvalg. Lag en skånsom stedsøvelse uten å rekonstruere originalproduksjonens prosedyrer.",
          "fr": "Les entretiens relient le récif aux choix d’observation. Concevez un exercice à faible impact sans reconstituer les procédures originales.",
          "pt": "As entrevistas ligam o recife às escolhas de observação. Crie um exercício de baixo impacto sem reconstruir procedimentos originais."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "alamar-format",
        "area": "research",
        "prompt": {
          "en": "How should different acquisition and exhibition records be preserved?",
          "nb": "Hvordan bør ulike opptaks- og visningsopplysninger bevares?",
          "fr": "Comment conserver les mentions distinctes de captation et projection ?",
          "pt": "Como preservar registos distintos de captação e exibição?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase one format to simplify the catalogue",
              "nb": "Slett ett format for å forenkle katalogen",
              "fr": "Effacer un format pour simplifier le catalogue",
              "pt": "Apagar um formato para simplificar o catálogo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record HDCAM and 35mm exhibition separately",
              "nb": "Registrer HDCAM og 35 mm-visning separat",
              "fr": "Documenter séparément HDCAM et projection 35 mm",
              "pt": "Registar HDCAM e exibição em 35 mm separadamente"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer the camera from the exhibition print",
              "nb": "Utled kameraet fra visningskopien",
              "fr": "Déduire la caméra de la copie de projection",
              "pt": "Deduzir a câmara da cópia de exibição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "IFFR records HDCAM and UCLA preserves a 35mm exhibition record. Keep both with provenance rather than equating acquisition and presentation.",
          "nb": "IFFR registrerer HDCAM, og UCLA bevarer en 35 mm-visningsopplysning. Behold begge med kildeopphav fremfor å likestille opptak og visning.",
          "fr": "IFFR mentionne HDCAM et UCLA une projection 35 mm. Conservez les deux avec leur provenance sans assimiler captation et présentation.",
          "pt": "O IFFR regista HDCAM e a UCLA exibição em 35 mm. Preserve ambos com proveniência sem equiparar captação e apresentação."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_uncle_boonmee_2010",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Analogue memory, night treatment and natural sound",
      "nb": "Analogt minne, nattbehandling og naturlyd",
      "fr": "Mémoire analogique, traitement nocturne et son naturel",
      "pt": "Memória analógica, tratamento noturno e som natural"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Uncle Boonmee Who Can Recall His Past Lives - Press Notes",
        "publisher": "Strand Releasing",
        "url": "https://strandreleasing.com/wp-content/uploads/2015/01/Uncle-Boonmee-PK.pdf"
      },
      {
        "id": "s3",
        "title": "Cinema Reborn: Apichatpong Weerasethakul Interview",
        "publisher": "ScreenAnarchy",
        "url": "https://screenanarchy.com/2011/02/memories-and-reincarnation-apichapong-weerasethakul-interview.html"
      },
      {
        "id": "s4",
        "title": "Apichatpong Weerasethakul",
        "publisher": "The A.V. Club",
        "url": "https://www.avclub.com/apichatpong-weerasethakul-1798224451"
      },
      {
        "id": "s5",
        "title": "Sound on Film: Uncle Boonmee",
        "publisher": "Designing Sound",
        "url": "https://designingsound.org/2011/02/04/sound-on-film-uncle-boonmee/"
      },
      {
        "id": "s6",
        "title": "Uncle Boonmee: 10 Years Later",
        "publisher": "Thai Film Archive",
        "url": "https://fapot.or.th/main/information/article/view/298/1"
      }
    ],
    "questions": [
      {
        "id": "uncleboonmee-memory",
        "area": "camera",
        "prompt": {
          "en": "How can image texture serve cinematic memory?",
          "nb": "Hvordan kan bildetekstur støtte filmhistoriske minner?",
          "fr": "Comment la texture d’image sert-elle la mémoire du cinéma ?",
          "pt": "Como pode a textura da imagem servir a memória do cinema?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare textures in relation to narrative memory",
              "nb": "Sammenlign teksturer i forhold til fortellingens minne",
              "fr": "Comparer les textures selon la mémoire du récit",
              "pt": "Comparar texturas em relação à memória narrativa"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose the newest format regardless of story purpose",
              "nb": "Velg nyeste format uavhengig av fortellingens formål",
              "fr": "Choisir le format le plus récent sans égard au récit",
              "pt": "Escolher o formato mais recente sem atender à narrativa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer acquisition solely from the release format",
              "nb": "Utled opptaksformat bare fra visningsformatet",
              "fr": "Déduire la captation du seul format de diffusion",
              "pt": "Deduzir captação apenas do formato de exibição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Apichatpong links Super 16 to memories of changing cinema; Strand records a separate release format. Compare original textures without conflating those stages.",
          "nb": "Apichatpong knytter Super 16 til minner om film i endring; Strand oppgir eget visningsformat. Sammenlign egne teksturer uten å blande trinnene.",
          "fr": "Apichatpong relie le Super 16 à la mémoire d’un cinéma en mutation ; Strand indique un format distinct. Comparez des textures sans confondre ces étapes.",
          "pt": "Apichatpong liga Super 16 à memória de cinema em transformação; Strand indica formato distinto. Compare texturas sem confundir etapas."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s6"
        ]
      },
      {
        "id": "uncleboonmee-night",
        "area": "camera",
        "prompt": {
          "en": "How can location scouting support a day-for-night look?",
          "nb": "Hvordan kan stedsbefaring støtte dag-for-natt-uttrykket?",
          "fr": "Comment les repérages servent-ils la nuit américaine ?",
          "pt": "Como podem os locais apoiar um visual de noite americana?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply one identical grade regardless of location light",
              "nb": "Bruk identisk gradering uansett lyset på stedet",
              "fr": "Appliquer le même étalonnage quelle que soit la lumière",
              "pt": "Aplicar a mesma gradação independentemente da luz"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume grading removes the need for scouting",
              "nb": "Anta at gradering fjerner behovet for befaring",
              "fr": "Supposer que l’étalonnage dispense de repérages",
              "pt": "Supor que gradação dispensa pesquisa de locais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test foliage, natural light and restrained color treatment",
              "nb": "Prøv vegetasjon, naturlig lys og dempet fargebehandling",
              "fr": "Tester feuillage, lumière naturelle et traitement coloré mesuré",
              "pt": "Testar folhagem, luz natural e tratamento cromático contido"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The A.V. Club interview documents foliage scouting and blue post treatment. Test your own locations rather than claiming exact original exposure values.",
          "nb": "A.V. Club-intervjuet dokumenterer vegetasjonsbefaring og blå etterbehandling. Prøv egne steder fremfor å påstå eksakte originale eksponeringsverdier.",
          "fr": "L’entretien A.V. Club documente le choix du feuillage et le traitement bleu. Testez vos lieux sans inventer les expositions originales.",
          "pt": "A entrevista A.V. Club documenta escolha de folhagem e tratamento azul. Teste locais próprios sem inventar exposições originais."
        },
        "sourceIds": [
          "s4",
          "s6"
        ]
      },
      {
        "id": "uncleboonmee-ambience",
        "area": "sound",
        "prompt": {
          "en": "How can natural ambience establish a scene’s sense of place?",
          "nb": "Hvordan kan naturlig miljølyd etablere scenens stedsfølelse?",
          "fr": "Comment l’ambiance naturelle établit-elle le sentiment du lieu ?",
          "pt": "Como pode o ambiente natural estabelecer o sentido de lugar?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Suppress every ambient sound under continuous music",
              "nb": "Undertrykk all miljølyd under konstant musikk",
              "fr": "Supprimer toute ambiance sous une musique continue",
              "pt": "Suprimir ambiente sob música contínua"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record distinct ambient layers and preserve spatial character",
              "nb": "Ta opp ulike miljølydlag og bevar romlig karakter",
              "fr": "Enregistrer des couches distinctes et préserver leur spatialité",
              "pt": "Gravar camadas distintas e preservar caráter espacial"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace natural sounds with generic library noise",
              "nb": "Erstatt naturlyder med generisk biblioteklyd",
              "fr": "Remplacer les sons naturels par des bruitages génériques",
              "pt": "Substituir sons naturais por ruído genérico"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kalayanamitr describes recordings of insects, birds and weather. Make an original ambience and preserve the distinction between recording provenance and fictional geography.",
          "nb": "Kalayanamitr beskriver opptak av insekter, fugler og vær. Lag original miljølyd og skill opptaksopphav fra fiktiv geografi.",
          "fr": "Kalayanamitr décrit les enregistrements d’insectes, oiseaux et météo. Créez une ambiance originale en distinguant provenance et géographie fictive.",
          "pt": "Kalayanamitr descreve gravações de insetos, aves e meteorologia. Crie um ambiente original distinguindo proveniência e geografia fictícia."
        },
        "sourceIds": [
          "s2",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_social_network_2010",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "File-based editing, composite performance and dialogue mixing",
      "nb": "Filbasert klipping, komposittspill og dialogmiks",
      "fr": "Montage sur fichiers, jeu composite et mixage dialogue",
      "pt": "Montagem por ficheiros, interpretação composta e mistura de diálogo"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Workflow Innovations for The Social Network",
        "publisher": "Digital Cinema Report",
        "url": "https://www.digitalcinemareport.com/workflow-innovations-for-the-social-network/"
      },
      {
        "id": "s2",
        "title": "The Social Network",
        "publisher": "Computer Graphics World",
        "url": "https://www.cgw.com/Press-Center/News/2010/The-Social-Network.aspx"
      },
      {
        "id": "s3",
        "title": "The Social Network's Image Experts",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2010/October-1-2010/The-Social-Networks-Image-Experts.aspx"
      },
      {
        "id": "s4",
        "title": "Helping Fincher Build His Social Network",
        "publisher": "Animation World Network / VFXWorld",
        "url": "https://www.awn.com/vfxworld/helping-fincher-build-his-social-network"
      },
      {
        "id": "s5",
        "title": "Q&A With Ren Klyce, Sound Editor for The Social Network",
        "publisher": "OurStage Magazine",
        "url": "https://blog.ourstage.com/2010/10/17/qa-with-ren-klyce-sound-editor-for-the-social-network/"
      },
      {
        "id": "s6",
        "title": "The Social Network",
        "publisher": "American Film Institute",
        "url": "https://catalog.afi.com/Film/66175-THE-SOCIAL-NETWORK"
      }
    ],
    "questions": [
      {
        "id": "socialnetwork-metadata",
        "area": "research",
        "prompt": {
          "en": "How should proxies and finishing files retain their source links?",
          "nb": "Hvordan bør proxy- og sluttfiler bevare kildekoblingene?",
          "fr": "Comment les proxys et fichiers de finition gardent-ils leurs liens sources ?",
          "pt": "Como devem proxies e ficheiros finais preservar ligações de origem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Track source identifiers from original through conform",
              "nb": "Spor kildeidentifikatorer fra original til konformering",
              "fr": "Suivre les identifiants sources jusqu’au conformage",
              "pt": "Rastrear identificadores de origem até à conformação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace original files permanently with editing proxies",
              "nb": "Erstatt originalfiler permanent med klippeproxyer",
              "fr": "Remplacer définitivement les originaux par les proxys",
              "pt": "Substituir permanentemente originais por proxies"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Rename every file without retaining source correspondence",
              "nb": "Gi alle filer nye navn uten å bevare kildekoblingen",
              "fr": "Renommer les fichiers sans conserver la correspondance",
              "pt": "Renomear ficheiros sem preservar correspondência"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Workflow reports describe duplicate archives, ProRes proxies, metadata and DPX conform. Make a small project with traceable links from final shots to originals.",
          "nb": "Arbeidsflytberetninger beskriver dobbeltarkiv, ProRes-proxyer, metadata og DPX-konformering. Lag et lite prosjekt med sporbare koblinger fra sluttbilder til originaler.",
          "fr": "Les rapports décrivent archives doubles, proxys, métadonnées et conformage DPX. Créez un projet avec liens traçables vers les originaux.",
          "pt": "Os relatos descrevem arquivos duplos, proxies, metadados e conformação DPX. Crie um projeto com ligações rastreáveis aos originais."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "socialnetwork-twins",
        "area": "animation",
        "prompt": {
          "en": "How should composite performance preserve actor contributions?",
          "nb": "Hvordan bør komposittspill bevare skuespillernes bidrag?",
          "fr": "Comment un jeu composite préserve-t-il les apports des acteurs ?",
          "pt": "Como deve interpretação composta preservar contributos dos atores?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Credit only the face visible in the finished image",
              "nb": "Krediter bare ansiktet som vises i sluttbildet",
              "fr": "Créditer uniquement le visage visible dans l’image finale",
              "pt": "Creditar apenas o rosto visível na imagem final"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every composite uses the same technique",
              "nb": "Anta at alle kompositter bruker samme teknikk",
              "fr": "Supposer que chaque composite emploie la même technique",
              "pt": "Supor que cada composição usa a mesma técnica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Document physical performance and effects work separately",
              "nb": "Dokumenter fysisk spill og effektarbeid separat",
              "fr": "Documenter séparément jeu physique et effets",
              "pt": "Documentar interpretação física e efeitos separadamente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "VFX accounts document Josh Pence's physical performance and facial replacement. Design a consent-based test and retain distinct performance and effects credits.",
          "nb": "VFX-kilder dokumenterer Josh Pences fysiske spill og ansiktsutskifting. Lag en samtykkebasert prøve og bevar separate spill- og effektkrediteringer.",
          "fr": "Les sources VFX documentent le jeu physique de Josh Pence et le remplacement facial. Concevez un essai consenti et préservez les crédits distincts.",
          "pt": "Fontes VFX documentam interpretação física de Josh Pence e substituição facial. Crie teste consentido e preserve créditos distintos."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "socialnetwork-dialogue",
        "area": "sound",
        "prompt": {
          "en": "How can environmental sound compete with rapid dialogue?",
          "nb": "Hvordan kan miljølyd konkurrere med rask dialog?",
          "fr": "Comment le son ambiant rivalise-t-il avec un dialogue rapide ?",
          "pt": "Como pode o som ambiente competir com diálogo rápido?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Keep identical balance in every narrative environment",
              "nb": "Behold identisk balanse i alle fortellingsmiljøer",
              "fr": "Garder un équilibre identique dans chaque environnement",
              "pt": "Manter equilíbrio idêntico em cada ambiente narrativo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare intelligibility and pressure in alternative mixes",
              "nb": "Sammenlign forståelighet og press i alternative mikser",
              "fr": "Comparer intelligibilité et pression dans plusieurs mixages",
              "pt": "Comparar inteligibilidade e pressão em misturas alternativas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Make every ambient track inaudible beneath dialogue",
              "nb": "Gjør alle miljølydspor uhørbare under dialog",
              "fr": "Rendre toute ambiance inaudible sous les dialogues",
              "pt": "Tornar todo ambiente inaudível sob diálogo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Klyce describes Fincher allowing the bar ambience to compete with dialogue. Compare mixes of a new fictional exchange without copying exact historical levels.",
          "nb": "Klyce beskriver hvordan Fincher lot barmiljøet konkurrere med dialogen. Sammenlign mikser av en ny fiktiv samtale uten å kopiere historiske nivåer.",
          "fr": "Klyce décrit la concurrence voulue entre le bar et le dialogue. Comparez des mixages d’un nouvel échange fictif sans copier les niveaux historiques.",
          "pt": "Klyce descreve a concorrência entre o bar e o diálogo. Compare misturas de uma nova troca fictícia sem copiar níveis históricos."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_tree_of_life_2011",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Available light, hybrid effects and editorial collaboration",
      "nb": "Tilgjengelig lys, hybride effekter og klippesamarbeid",
      "fr": "Lumière disponible, effets hybrides et montage collectif",
      "pt": "Luz disponível, efeitos híbridos e montagem coletiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Tree of Life",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/the-tree-of-life/"
      },
      {
        "id": "s1",
        "title": "Emmanuel Lubezki AMC, ASC / The Tree of Life",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/emmanuel-lubezki-amc-asc-the-tree-of-life/"
      },
      {
        "id": "s2",
        "title": "The Tree of Life (2011)",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/68352-THE-TREE-OF-LIFE"
      },
      {
        "id": "s3",
        "title": "VFX supe Dan Glass on The Tree of Life",
        "publisher": "fxguide",
        "url": "https://www.fxguide.com/fxfeatured/vfx-supe-dan-glass-on-the-tree-of-life/"
      },
      {
        "id": "s4",
        "title": "Mark Yoshikawa Talks of Editing Terrence Malick, Christopher Guest, and the new Reminiscence",
        "publisher": "CineMontage / Motion Picture Editors Guild",
        "url": "https://cinemontage.org/mark-yoshikawa-talks-of-editing-terrence-malick-christopher-guest-and-the-new-reminiscence/"
      }
    ],
    "questions": [
      {
        "id": "treeoflife-light",
        "area": "camera",
        "prompt": {
          "en": "How can production design support available-light photography?",
          "nb": "Hvordan kan scenografi støtte fotografering med tilgjengelig lys?",
          "fr": "Comment le décor peut-il servir la lumière disponible ?",
          "pt": "Como pode a cenografia apoiar a fotografia com luz disponível?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test window orientation and schedule around changing light",
              "nb": "Prøv vindusretning og planlegg etter skiftende lys",
              "fr": "Tester l’orientation des fenêtres et planifier selon la lumière",
              "pt": "Testar orientação das janelas e planear segundo a luz"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose interiors without considering daylight access",
              "nb": "Velg interiører uten å vurdere tilgang på dagslys",
              "fr": "Choisir les intérieurs sans considérer la lumière du jour",
              "pt": "Escolher interiores sem considerar a luz do dia"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume available light excludes all design intervention",
              "nb": "Anta at tilgjengelig lys utelukker alle scenografiske inngrep",
              "fr": "Supposer que la lumière disponible exclut toute intervention de décor",
              "pt": "Supor que luz disponível exclui intervenção cenográfica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lubezki describes Fisk's window alterations, and AFI documents three matched houses used to follow light. Test your own location without generalizing the original lighting exceptions.",
          "nb": "Lubezki beskriver Fisks vindusendringer, og AFI dokumenterer tre tilpassede hus for å følge lyset. Prøv egne steder uten å generalisere originalens lysunntak.",
          "fr": "Lubezki décrit les fenêtres modifiées par Fisk et l’AFI trois maisons adaptées à la lumière. Testez vos lieux sans généraliser les exceptions originales.",
          "pt": "Lubezki descreve alterações nas janelas por Fisk e o AFI três casas adaptadas à luz. Teste locais próprios sem generalizar exceções originais."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "treeoflife-creation",
        "area": "animation",
        "prompt": {
          "en": "How can practical imagery and simulation support a creation sequence?",
          "nb": "Hvordan kan praktiske bilder og simulering støtte en skapelsessekvens?",
          "fr": "Comment images pratiques et simulation servent-elles une séquence de création ?",
          "pt": "Como podem imagens práticas e simulação apoiar uma sequência de criação?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Insist that every image must be purely practical",
              "nb": "Insister på at alle bilder må være rent praktiske",
              "fr": "Exiger que chaque image soit entièrement pratique",
              "pt": "Exigir que todas as imagens sejam inteiramente práticas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat artistic simulations as proof of scientific accuracy",
              "nb": "Behandle kunstneriske simuleringer som bevis på vitenskapelig nøyaktighet",
              "fr": "Traiter les simulations artistiques comme preuve scientifique",
              "pt": "Tratar simulações artísticas como prova científica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop practical plates and simulation-informed composites",
              "nb": "Utvikle praktiske bildeelementer og simuleringsbaserte kompositter",
              "fr": "Développer des éléments filmés et composites informés par simulation",
              "pt": "Desenvolver elementos filmados e composições informadas por simulação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Dan Glass describes photographed phenomena, scientific simulation and digital compositing. Build an original abstract effects test and distinguish scientific references from artistic interpretation.",
          "nb": "Dan Glass beskriver fotograferte fenomener, vitenskapelig simulering og digital kompositering. Lag en original abstrakt effektprøve og skill faglige referanser fra kunstnerisk tolkning.",
          "fr": "Dan Glass décrit phénomènes filmés, simulation scientifique et compositing numérique. Créez un essai abstrait original en distinguant références et interprétation artistique.",
          "pt": "Dan Glass descreve fenómenos filmados, simulação científica e composição digital. Crie um teste abstrato original distinguindo referências e interpretação artística."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      },
      {
        "id": "treeoflife-editors",
        "area": "research",
        "prompt": {
          "en": "How should a multi-editor project track its shared assembly?",
          "nb": "Hvordan bør et prosjekt med flere klippere følge den felles sammenstillingen?",
          "fr": "Comment suivre un montage partagé entre plusieurs monteurs ?",
          "pt": "Como acompanhar uma montagem partilhada entre vários montadores?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Merge every edit without retaining version history",
              "nb": "Slå sammen alle klipp uten å bevare versjonshistorikken",
              "fr": "Fusionner tous les montages sans conserver les versions",
              "pt": "Fundir todas as montagens sem preservar versões"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use shared version records and preserve collaborative credits",
              "nb": "Bruk felles versjonslogger og bevar samarbeidets krediteringer",
              "fr": "Utiliser des versions partagées et préserver les crédits collectifs",
              "pt": "Usar registos de versões partilhados e preservar créditos coletivos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign every sequence to one editor without evidence",
              "nb": "Tildel hver sekvens én klipper uten dokumentasjon",
              "fr": "Attribuer chaque séquence à un monteur sans preuve",
              "pt": "Atribuir cada sequência a um montador sem provas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes lists five editors and Yoshikawa confirms his continuing assembly role. Create a collaborative edit log without inventing historical sequence ownership.",
          "nb": "Cannes oppgir fem klippere, og Yoshikawa bekrefter sin gjennomgående sammenstillingsrolle. Lag en felles klippelogg uten å finne på historisk sekvenseierskap.",
          "fr": "Cannes crédite cinq monteurs et Yoshikawa confirme son rôle continu. Créez un journal collectif sans inventer les attributions historiques.",
          "pt": "Cannes credita cinco montadores e Yoshikawa confirma o seu papel contínuo. Crie um registo coletivo sem inventar atribuições históricas."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_a_separation_2011",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Rehearsed naturalism, camera viewpoint and information control",
      "nb": "Innøvd naturalisme, kameraperspektiv og informasjonsstyring",
      "fr": "Naturalisme répété, point de vue caméra et contrôle de l’information",
      "pt": "Naturalismo ensaiado, perspetiva da câmara e controlo da informação"
    },
    "sources": [
      {
        "id": "s0",
        "title": "A Separation press kit",
        "publisher": "Sony Pictures Classics",
        "url": "https://www.sonyclassics.com/aseparation/aseparation_presskit.pdf"
      },
      {
        "id": "s1",
        "title": "The Past press kit - interview with cinematographer Mahmoud Kalari",
        "publisher": "Sony Pictures Classics",
        "url": "https://www.sonyclassics.com/thepast/thepast_presskit.pdf"
      },
      {
        "id": "s2",
        "title": "Jodaeiye Nader az Simin",
        "publisher": "Viennale",
        "url": "https://www.viennale.at/en/films/jodaeiye-nader-az-simin"
      },
      {
        "id": "s6",
        "title": "Asghar Farhadi: A Separation",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/36713-asghar-farhadi-a-separation/"
      },
      {
        "id": "s8",
        "title": "Interview with Iranian film editor Haideh Safiyari",
        "publisher": "Film International",
        "url": "https://filmint.nu/interview-with-iranian-film-editor-haideh-safiyari-ali-moosavi/"
      }
    ],
    "questions": [
      {
        "id": "aseparation-rehearsal",
        "area": "research",
        "prompt": {
          "en": "How can carefully rehearsed performance still feel natural?",
          "nb": "Hvordan kan nøye innøvd skuespill fortsatt føles naturlig?",
          "fr": "Comment un jeu soigneusement répété peut-il rester naturel ?",
          "pt": "Como pode uma interpretação ensaiada continuar natural?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse the script precisely while allowing motivated refinements",
              "nb": "Øv inn manuset presist og tillat begrunnede justeringer",
              "fr": "Répéter précisément le scénario tout en permettant des ajustements",
              "pt": "Ensaiar o argumento com precisão permitindo ajustes motivados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace the screenplay with unrestricted improvisation",
              "nb": "Erstatt manuset med ubegrenset improvisasjon",
              "fr": "Remplacer le scénario par une improvisation illimitée",
              "pt": "Substituir o argumento por improvisação ilimitada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Forbid every adjustment even if a scene requires it",
              "nb": "Forby alle justeringer selv når scenen krever det",
              "fr": "Interdire tout ajustement même si la scène l’exige",
              "pt": "Proibir qualquer ajuste mesmo quando a cena o exige"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Farhadi describes detailed preparation and Kalari recalls occasional last-minute changes. Treat naturalism as planned craft with room for specific adjustments, not an absence of scripting.",
          "nb": "Farhadi beskriver detaljert forberedelse, og Kalari husker enkelte sene endringer. Behandle naturalisme som planlagt håndverk med rom for justeringer, ikke fravær av manus.",
          "fr": "Farhadi décrit une préparation détaillée et Kalari des ajustements tardifs. Traitez le naturalisme comme un travail préparé et ajustable, non comme une absence de scénario.",
          "pt": "Farhadi descreve preparação detalhada e Kalari ajustes tardios. Trate naturalismo como trabalho planeado e ajustável, não como ausência de argumento."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "aseparation-viewpoint",
        "area": "camera",
        "prompt": {
          "en": "How can handheld framing act as an observing viewpoint?",
          "nb": "Hvordan kan håndholdt utsnitt fungere som et observerende perspektiv?",
          "fr": "Comment un cadrage à main levée devient-il un regard observateur ?",
          "pt": "Como pode enquadramento à mão funcionar como perspetiva observadora?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Move continuously regardless of dramatic attention",
              "nb": "Beveg kameraet kontinuerlig uavhengig av dramatisk oppmerksomhet",
              "fr": "Bouger sans cesse indépendamment de l’attention dramatique",
              "pt": "Mover continuamente sem atender à atenção dramática"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Claim handheld filming makes a scene documentary evidence",
              "nb": "Påstå at håndholdt filming gjør scenen til dokumentarbevis",
              "fr": "Affirmer que la caméra portée rend une scène documentaire",
              "pt": "Afirmar que câmara à mão torna a cena prova documental"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Follow motivated shifts of attention between characters",
              "nb": "Følg begrunnede oppmerksomhetsskifter mellom karakterer",
              "fr": "Suivre les déplacements motivés de l’attention entre personnages",
              "pt": "Seguir mudanças motivadas de atenção entre personagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kalari calls the camera a third eye and describes predominantly handheld photography. Compare motivated camera attention in a fictional scene without equating technique with factual recording.",
          "nb": "Kalari kaller kameraet et tredje øye og beskriver hovedsakelig håndholdt foto. Sammenlign begrunnet kameraoppmerksomhet i en fiktiv scene uten å likestille teknikk med dokumentasjon.",
          "fr": "Kalari décrit une caméra troisième œil, surtout portée. Comparez l’attention motivée dans une scène fictive sans assimiler technique et preuve documentaire.",
          "pt": "Kalari descreve a câmara como terceiro olho, sobretudo à mão. Compare atenção motivada numa cena fictícia sem equiparar técnica a prova documental."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "aseparation-information",
        "area": "sound",
        "prompt": {
          "en": "How can editing and restrained music preserve moral uncertainty?",
          "nb": "Hvordan kan klipp og tilbakeholden musikk bevare moralsk usikkerhet?",
          "fr": "Comment montage et musique retenue préservent-ils l’incertitude morale ?",
          "pt": "Como podem montagem e música contida preservar incerteza moral?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume naturalism requires no editorial construction",
              "nb": "Anta at naturalisme ikke krever klippekonstruksjon",
              "fr": "Supposer que le naturalisme exclut la construction au montage",
              "pt": "Supor que naturalismo exclui construção na montagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test when information arrives without imposing a musical verdict",
              "nb": "Prøv når informasjon kommer uten å påtvinge en musikalsk dom",
              "fr": "Tester l’arrivée des informations sans imposer un verdict musical",
              "pt": "Testar chegada de informação sem impor um veredicto musical"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reveal every fact immediately and underscore every judgment",
              "nb": "Avslør alle fakta straks og understrek hver dom musikalsk",
              "fr": "Révéler tous les faits immédiatement et souligner chaque jugement",
              "pt": "Revelar todos os factos de imediato e sublinhar cada juízo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Farhadi explains controlling information through editing and withholding score until the credits; Safiyari recalls editing during shooting. Compare alternative information orders without prescribing a verdict.",
          "nb": "Farhadi forklarer informasjonsstyring gjennom klipp og fravær av musikk før rulleteksten; Safiyari husker klipping under opptak. Sammenlign informasjonsrekkefølger uten å foreskrive en dom.",
          "fr": "Farhadi explique le contrôle de l’information et l’absence de musique avant le générique ; Safiyari évoque le montage pendant le tournage. Comparez des ordres sans imposer de verdict.",
          "pt": "Farhadi explica controlo da informação e ausência de música até aos créditos; Safiyari recorda montagem durante rodagem. Compare ordens sem impor veredicto."
        },
        "sourceIds": [
          "s6",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_pina_2011",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Stereoscopic choreography, live performance and stereo post",
      "nb": "Stereoskopisk koreografi, liveopptak og stereoetterarbeid",
      "fr": "Chorégraphie stéréoscopique, spectacle vivant et postproduction stéréo",
      "pt": "Coreografia estereoscópica, espetáculo ao vivo e pós-produção estéreo"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Pina: Infos zur Produktion",
        "publisher": "film-tv-video.de",
        "url": "https://www.film-tv-video.de/productions/2011/02/25/pina-infos-zur-produktion/"
      },
      {
        "id": "s3",
        "title": "Interview: Wim Wenders about PINA & 3D",
        "publisher": "thefilmbook / American Cinematographer interview material",
        "url": "https://thefilmbook.net/2013/08/wim-wenders-about-pina-3d/"
      },
      {
        "id": "s4",
        "title": "Das Werk completes 3D Pina",
        "publisher": "TVBEurope",
        "url": "https://www.tvbeurope.com/production-post/das-werk-completes-3d-pina"
      },
      {
        "id": "s5",
        "title": "Pina",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/movie/pina_780cc75bfb1ce05ae040007f01001bcf"
      }
    ],
    "questions": [
      {
        "id": "pina-depth",
        "area": "camera",
        "prompt": {
          "en": "How should stereoscopic framing respond to dance movement?",
          "nb": "Hvordan bør stereoskopisk bildekomposisjon følge dansebevegelse?",
          "fr": "Comment le cadrage stéréoscopique répond-il au mouvement dansé ?",
          "pt": "Como deve enquadramento estereoscópico responder ao movimento da dança?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse spatial composition and review depth with choreography",
              "nb": "Øv på romlig komposisjon og vurder dybde sammen med koreografien",
              "fr": "Répéter la composition spatiale et revoir la profondeur avec la chorégraphie",
              "pt": "Ensaiar composição espacial e rever profundidade com a coreografia"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose depth independently of the dancers’ positions",
              "nb": "Velg dybde uavhengig av dansernes posisjoner",
              "fr": "Choisir la profondeur indépendamment des positions des danseurs",
              "pt": "Escolher profundidade independentemente das posições dos bailarinos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume stereo depth can be judged from one flat image",
              "nb": "Anta at stereodybde kan vurderes fra ett flatt bilde",
              "fr": "Supposer que la profondeur stéréo se juge sur une image plate",
              "pt": "Supor que profundidade estéreo se avalia numa imagem plana"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schmidt describes extensive stereo tests and stage planning; Wenders discusses bodily presence in 3D. Plan a safe original dance study and compare depth with movement.",
          "nb": "Schmidt beskriver omfattende stereoprøver og sceneplanlegging; Wenders omtaler kroppslig nærvær i 3D. Planlegg en trygg original dansestudie og sammenlign dybde med bevegelse.",
          "fr": "Schmidt décrit essais stéréo et préparation du plateau ; Wenders évoque la présence corporelle en 3D. Concevez une étude dansée sûre et comparez profondeur et mouvement.",
          "pt": "Schmidt descreve testes estéreo e planeamento do palco; Wenders aborda presença corporal em 3D. Planeie estudo de dança seguro e compare profundidade e movimento."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "pina-live",
        "area": "research",
        "prompt": {
          "en": "How should a camera team prepare for a live performance?",
          "nb": "Hvordan bør kamerateamet forberede et liveopptak?",
          "fr": "Comment une équipe caméra prépare-t-elle un spectacle vivant ?",
          "pt": "Como deve a equipa de câmara preparar um espetáculo ao vivo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the performance can be stopped for every camera change",
              "nb": "Anta at forestillingen kan stoppes ved hvert kameraskifte",
              "fr": "Supposer que le spectacle peut s’arrêter à chaque changement caméra",
              "pt": "Supor que o espetáculo pode parar a cada mudança de câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore rehearsal and camera positions until the audience arrives",
              "nb": "Ignorer prøver og kameraposisjoner til publikum ankommer",
              "fr": "Ignorer répétitions et positions jusqu’à l’arrivée du public",
              "pt": "Ignorar ensaios e posições até à chegada do público"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan coverage and calibration before the uninterrupted performance",
              "nb": "Planlegg dekning og kalibrering før den uavbrutte forestillingen",
              "fr": "Prévoir prises et calibration avant la représentation continue",
              "pt": "Planear cobertura e calibração antes do espetáculo contínuo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schmidt and TVBEurope document long stereo takes during live performances. Rehearse a continuous event plan without assuming repeated takes will be available.",
          "nb": "Schmidt og TVBEurope dokumenterer lange stereotagninger under liveforestillinger. Øv på en sammenhengende arrangementsplan uten å anta at nye tagninger er tilgjengelige.",
          "fr": "Schmidt et TVBEurope documentent de longues prises stéréo en spectacle. Répétez un plan continu sans supposer que les prises pourront être répétées.",
          "pt": "Schmidt e TVBEurope documentam tomadas estéreo longas ao vivo. Ensaie um plano contínuo sem supor que as tomadas podem repetir-se."
        },
        "sourceIds": [
          "s2",
          "s4",
          "s5"
        ]
      },
      {
        "id": "pina-stereo",
        "area": "camera",
        "prompt": {
          "en": "How should tested lenses and stereo post records be distinguished?",
          "nb": "Hvordan bør testede objektiver og stereoetterarbeid dokumenteres adskilt?",
          "fr": "Comment distinguer objectifs testés et dossiers de postproduction stéréo ?",
          "pt": "Como distinguir objetivas testadas e registos de pós-produção estéreo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard stereo pairing information during the conform",
              "nb": "Forkast informasjon om stereopar under konformeringen",
              "fr": "Écarter les informations de paires stéréo au conformage",
              "pt": "Descartar informações dos pares estéreo durante conformação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record tested equipment separately from confirmed final-shot usage",
              "nb": "Registrer testet utstyr separat fra bekreftet bruk i sluttbilder",
              "fr": "Documenter le matériel testé séparément de son usage confirmé",
              "pt": "Registar equipamento testado separadamente do uso confirmado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Claim every tested focal length appears in the finished film",
              "nb": "Påstå at alle testede brennvidder finnes i den ferdige filmen",
              "fr": "Affirmer que chaque focale testée apparaît dans le film final",
              "pt": "Afirmar que todas as focais testadas aparecem no filme final"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schmidt lists tested focal lengths while Wenders describes mostly 10mm use; TVBEurope records stereo conform. Preserve the differences and verify paired media in a small exercise.",
          "nb": "Schmidt oppgir testede brennvidder mens Wenders beskriver hovedsakelig 10 mm; TVBEurope dokumenterer stereokonformering. Bevar forskjellene og verifiser mediepar i en øvelse.",
          "fr": "Schmidt liste les focales testées, Wenders décrit surtout le 10 mm et TVBEurope le conformage stéréo. Préservez ces distinctions et vérifiez les paires.",
          "pt": "Schmidt lista focais testadas, Wenders descreve sobretudo 10 mm e TVBEurope conformação estéreo. Preserve diferenças e verifique pares de meios."
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
    "scenarioId": "scenario_amour_2012",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Studio apartment, continuity and performer care",
      "nb": "Studioleilighet, kontinuitet og omsorg for skuespillere",
      "fr": "Appartement de studio, continuité et soin des interprètes",
      "pt": "Apartamento de estúdio, continuidade e cuidado dos intérpretes"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Amour",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/f/amour/"
      },
      {
        "id": "s1",
        "title": "Amour bilingual press kit",
        "publisher": "Festival de Cannes / Les Films du Losange",
        "url": "https://cdn.festival-cannes.com/media/uploads/2023/03/76898.pdf"
      },
      {
        "id": "s3",
        "title": "Michael Haneke talks about AMOUR",
        "publisher": "Austrian Films",
        "url": "https://www.austrianfilms.com/news/en/michael_haneke_talks_about_amour"
      },
      {
        "id": "s4",
        "title": "Darius Khondji AFC / Amour",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/darius-khondji-afc-amour/"
      },
      {
        "id": "s5",
        "title": "Michael Haneke investigates ages-old issues in Amour",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment/envelope/la-xpm-2012-dec-13-la-en-michael-haneke-amour-20121213-story.html"
      }
    ],
    "questions": [
      {
        "id": "amour-apartment",
        "area": "research",
        "prompt": {
          "en": "How can a studio apartment feel lived in while supporting camera movement?",
          "nb": "Hvordan kan en studioleilighet føles bebodd og samtidig støtte kamerabevegelse?",
          "fr": "Comment un appartement de studio paraît-il habité tout en permettant les mouvements caméra ?",
          "pt": "Como pode um apartamento de estúdio parecer habitado e permitir movimento da câmara?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Design a coherent floor plan and test movement surfaces",
              "nb": "Utform en sammenhengende planløsning og prøv bevegelsesflater",
              "fr": "Concevoir un plan cohérent et tester les surfaces de déplacement",
              "pt": "Conceber planta coerente e testar superfícies de movimento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose decorative rooms without testing their connections",
              "nb": "Velg dekorative rom uten å teste forbindelsene",
              "fr": "Choisir des pièces décoratives sans tester leurs connexions",
              "pt": "Escolher divisões decorativas sem testar ligações"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the apartment was an unaltered documentary location",
              "nb": "Anta at leiligheten var et uendret dokumentarisk opptakssted",
              "fr": "Supposer que l’appartement était un lieu documentaire intact",
              "pt": "Supor que apartamento era local documental intacto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Haneke describes a reconstructed family floor plan; Khondji describes previs and dolly-floor preparation. Design your own functional apartment rather than claiming its exact dimensions.",
          "nb": "Haneke beskriver en rekonstruert familieplan; Khondji omtaler previs og gulvforberedelse. Utform en egen funksjonell leilighet uten å påstå eksakte originalmål.",
          "fr": "Haneke décrit un plan familial reconstruit ; Khondji évoque prévisualisation et préparation du sol. Concevez un appartement fonctionnel sans inventer les dimensions.",
          "pt": "Haneke descreve planta familiar reconstruída; Khondji aborda pré-visualização e piso. Conceba apartamento funcional sem inventar dimensões."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "amour-continuity",
        "area": "camera",
        "prompt": {
          "en": "How can lighting and performance continuity be coordinated over a long shoot?",
          "nb": "Hvordan kan lys- og spillekontinuitet samordnes gjennom et langt opptak?",
          "fr": "Comment coordonner la continuité de lumière et de jeu sur un long tournage ?",
          "pt": "Como coordenar continuidade de luz e interpretação numa rodagem longa?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Change lighting arbitrarily between connected scenes",
              "nb": "Endre lyset vilkårlig mellom sammenhengende scener",
              "fr": "Modifier arbitrairement la lumière entre scènes liées",
              "pt": "Alterar luz arbitrariamente entre cenas ligadas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume near-chronological shooting guarantees continuity",
              "nb": "Anta at nesten kronologisk opptak garanterer kontinuitet",
              "fr": "Supposer que le tournage presque chronologique garantit la continuité",
              "pt": "Supor que rodagem quase cronológica garante continuidade"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track scene progression and document repeatable lighting choices",
              "nb": "Følg sceneutviklingen og dokumenter gjentakbare lysvalg",
              "fr": "Suivre la progression et documenter des choix lumineux reproductibles",
              "pt": "Acompanhar progressão e documentar escolhas luminosas repetíveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Khondji describes controlled studio lighting and almost chronological shooting. Create a continuity record that links the dramatic progression to the planned light changes.",
          "nb": "Khondji beskriver kontrollert studiobelysning og nesten kronologisk opptak. Lag en kontinuitetslogg som knytter dramatisk utvikling til planlagte lysendringer.",
          "fr": "Khondji décrit lumière contrôlée et tournage presque chronologique. Créez un suivi reliant progression dramatique et changements lumineux.",
          "pt": "Khondji descreve luz controlada e rodagem quase cronológica. Crie registo ligando progressão dramática e mudanças de luz."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "amour-care",
        "area": "research",
        "prompt": {
          "en": "How should physically demanding performance be prepared responsibly?",
          "nb": "Hvordan bør fysisk krevende skuespill forberedes ansvarlig?",
          "fr": "Comment préparer de manière responsable un jeu physiquement exigeant ?",
          "pt": "Como preparar interpretação fisicamente exigente de forma responsável?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore consent and specialist advice during rehearsal",
              "nb": "Ignorer samtykke og fagråd under prøvene",
              "fr": "Ignorer consentement et avis spécialisés en répétition",
              "pt": "Ignorar consentimento e parecer especializado no ensaio"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Consult specialists and test safe accommodations with performers",
              "nb": "Rådfør deg med fagpersoner og prøv trygge tilpasninger med utøverne",
              "fr": "Consulter des spécialistes et tester des adaptations sûres avec les acteurs",
              "pt": "Consultar especialistas e testar adaptações seguras com intérpretes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Demand physical discomfort to guarantee authenticity",
              "nb": "Krev fysisk ubehag for å garantere autentisitet",
              "fr": "Exiger un inconfort physique pour garantir l’authenticité",
              "pt": "Exigir desconforto físico para garantir autenticidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The press kit credits care consultants, and Haneke describes adjustments for a demanding scene. Design a consent-based rehearsal with safe alternatives and qualified advice.",
          "nb": "Pressepakken krediterer omsorgsfaglige rådgivere, og Haneke beskriver tilpasninger for en krevende scene. Lag en samtykkebasert prøve med trygge alternativer og kvalifiserte råd.",
          "fr": "Le dossier crédite des consultants en soins et Haneke décrit des adaptations. Concevez une répétition consentie avec alternatives sûres et conseils qualifiés.",
          "pt": "O dossier credita consultores de cuidados e Haneke descreve adaptações. Crie ensaio consentido com alternativas seguras e orientação qualificada."
        },
        "sourceIds": [
          "s1",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_holy_motors_2012",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Constraint-led production, transformations and digital image processes",
      "nb": "Begrensningsstyrt produksjon, forvandlinger og digitale bildeprosesser",
      "fr": "Production sous contraintes, transformations et procédés numériques",
      "pt": "Produção sob restrições, transformações e processos digitais"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Holy Motors",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/holy-motors/"
      },
      {
        "id": "s1",
        "title": "Holy Motors English press kit",
        "publisher": "Festival de Cannes / Pierre Grise Production",
        "url": "https://cdn.festival-cannes.com/media/uploads/2023/03/76897.pdf"
      },
      {
        "id": "s2",
        "title": "Holy Motors",
        "publisher": "La Cinémathèque française",
        "url": "https://www.cinematheque.fr/film/116263.html"
      },
      {
        "id": "s3",
        "title": "I Need to Feel When I Make a Film That I'm Not the Same Person Who Made the One Before: Director Leos Carax on Holy Motors",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/54957-leos-carax-holy-motors/"
      },
      {
        "id": "s4",
        "title": "Holy Motors",
        "publisher": "Harvard Film Archive",
        "url": "https://harvardfilmarchive.org/calendar/holy-motors-2013-02/1"
      }
    ],
    "questions": [
      {
        "id": "holymotors-constraints",
        "area": "research",
        "prompt": {
          "en": "How can production limitations shape a modular story?",
          "nb": "Hvordan kan produksjonsbegrensninger forme en modulær fortelling?",
          "fr": "Comment les contraintes façonnent-elles un récit modulaire ?",
          "pt": "Como podem restrições moldar uma narrativa modular?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Design linked episodes around available actors and locations",
              "nb": "Utform sammenknyttede episoder rundt tilgjengelige utøvere og steder",
              "fr": "Concevoir des épisodes liés autour des acteurs et lieux disponibles",
              "pt": "Conceber episódios ligados em torno de atores e locais disponíveis"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep an unaffordable location plan without revision",
              "nb": "Behold en ubetalelig stedsplan uten revisjon",
              "fr": "Conserver un plan de lieux inabordable sans révision",
              "pt": "Manter um plano de locais incomportável sem revisão"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove every recurring element from the separate episodes",
              "nb": "Fjern alle tilbakevendende elementer fra episodene",
              "fr": "Supprimer tout élément récurrent des épisodes",
              "pt": "Eliminar todos os elementos recorrentes dos episódios"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Carax describes a fast Paris production with Lavant and a small budget. Design a new linked-episode concept around realistic constraints rather than copying an undocumented budget.",
          "nb": "Carax beskriver rask Paris-produksjon med Lavant og lite budsjett. Lag et nytt episodekonsept rundt realistiske begrensninger uten å kopiere udokumenterte budsjettall.",
          "fr": "Carax décrit un tournage rapide à Paris avec Lavant et un petit budget. Concevez des épisodes liés selon des contraintes réalistes sans inventer de budget.",
          "pt": "Carax descreve rodagem rápida em Paris com Lavant e orçamento pequeno. Conceba episódios ligados sob restrições realistas sem inventar valores."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s4"
        ]
      },
      {
        "id": "holymotors-transformation",
        "area": "research",
        "prompt": {
          "en": "How can one performer anchor sharply different fictional identities?",
          "nb": "Hvordan kan én utøver forankre svært ulike fiktive identiteter?",
          "fr": "Comment un interprète relie-t-il des identités fictives très différentes ?",
          "pt": "Como pode um intérprete ligar identidades fictícias muito diferentes?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical physical behavior for every fictional identity",
              "nb": "Bruk identisk fysisk atferd for alle fiktive identiteter",
              "fr": "Employer le même comportement physique pour chaque identité",
              "pt": "Usar comportamento físico idêntico em todas as identidades"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat makeup and performance planning as unrelated tasks",
              "nb": "Behandle sminke og spilleplanlegging som urelaterte oppgaver",
              "fr": "Traiter maquillage et jeu comme tâches indépendantes",
              "pt": "Tratar maquilhagem e interpretação como tarefas independentes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan distinct movement, costume and makeup approaches per episode",
              "nb": "Planlegg ulike bevegelses-, kostyme- og sminkegrep per episode",
              "fr": "Prévoir des gestes, costumes et maquillages distincts par épisode",
              "pt": "Planear gestos, figurinos e maquilhagem distintos por episódio"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The festival record and press kit identify Lavant and specialist makeup and effects roles. Plan distinct fictional transformations while preserving a coherent performer-centered structure.",
          "nb": "Festivaloppføringen og pressepakken identifiserer Lavant og spesialiserte sminke- og effektroller. Planlegg ulike fiktive forvandlinger med en sammenhengende utøverbasert struktur.",
          "fr": "Le dossier et la fiche du festival identifient Lavant et les métiers du maquillage et des effets. Prévoyez des transformations distinctes dans une structure cohérente.",
          "pt": "O dossier e o festival identificam Lavant e equipas especializadas. Planeie transformações fictícias distintas numa estrutura coerente centrada no intérprete."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "holymotors-digital",
        "area": "animation",
        "prompt": {
          "en": "How can experimental digital imagery be documented clearly?",
          "nb": "Hvordan kan eksperimentelle digitale bilder dokumenteres tydelig?",
          "fr": "Comment documenter clairement des images numériques expérimentales ?",
          "pt": "Como documentar claramente imagens digitais experimentais?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent a software recipe from the finished appearance",
              "nb": "Finn på en programvareoppskrift fra sluttbildet",
              "fr": "Inventer une recette logicielle à partir de l’apparence finale",
              "pt": "Inventar uma receita de software a partir da aparência final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate capture records from intentional post-image experiments",
              "nb": "Skill opptaksdokumentasjon fra tilsiktede bildeeksperimenter i etterarbeidet",
              "fr": "Distinguer captation et expérimentations volontaires en postproduction",
              "pt": "Separar registos de captação de experiências intencionais na pós-produção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every visual distortion as a camera malfunction",
              "nb": "Behandle alle bildeforvrengninger som kamerafeil",
              "fr": "Traiter toute distorsion comme une panne caméra",
              "pt": "Tratar toda distorção visual como avaria da câmara"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Cinémathèque identifies RED Epic, datamoshing and motion capture. Test an original digital image transformation without assuming exact historical software or settings.",
          "nb": "Cinémathèque identifiserer RED Epic, datamoshing og bevegelsesopptak. Prøv en original digital bildeforvandling uten å anta eksakt historisk programvare eller innstillinger.",
          "fr": "La Cinémathèque identifie RED Epic, datamoshing et capture de mouvement. Testez une transformation originale sans inventer logiciels ou réglages historiques.",
          "pt": "A Cinémathèque identifica RED Epic, datamoshing e captura de movimento. Teste transformação original sem inventar software ou parâmetros históricos."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_gravity_2013",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Previsualized editorial, interactive light and spatial sound",
      "nb": "Forhåndsvisualisert klipp, interaktivt lys og romlyd",
      "fr": "Montage prévisualisé, lumière interactive et son spatial",
      "pt": "Montagem pré-visualizada, luz interativa e som espacial"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Gravity",
        "publisher": "Framestore",
        "url": "https://www.framestore.com/work/gravity"
      },
      {
        "id": "s1",
        "title": "Preparing for Gravity",
        "publisher": "Framestore",
        "url": "https://www.framestore.com/news/preparing-gravity"
      },
      {
        "id": "s2",
        "title": "Deconstructing Gravity",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/events/deconstructing-gravity"
      },
      {
        "id": "s3",
        "title": "History of ARRI - Emmanuel Lubezki",
        "publisher": "ARRI",
        "url": "https://100.arri.com/timeline/event/59ad95b027fc605792b770b0"
      },
      {
        "id": "s5",
        "title": "The Art of the Cut: Gravity co-Editor and Oscar Winner Mark Sanger Explains His Craft and Style",
        "publisher": "ProVideo Coalition",
        "url": "https://www.provideocoalition.com/gravity-co-editor-and-oscar-nominee-mark-sanger/"
      },
      {
        "id": "s6",
        "title": "The Sound of Gravity",
        "publisher": "SoundWorks Collection",
        "url": "https://soundworkscollection.com/videos/gravity"
      },
      {
        "id": "s7",
        "title": "How the sound masters of Gravity broke the rules to make noise in a vacuum",
        "publisher": "The Verge",
        "url": "https://www.theverge.com/2013/10/10/4822482/the-sound-design-of-gravity-glenn-freemantle-skip-lievsay"
      }
    ],
    "questions": [
      {
        "id": "gravity-previs",
        "area": "animation",
        "prompt": {
          "en": "How should an effects-led sequence be planned before photography?",
          "nb": "Hvordan bør en effektdrevet sekvens planlegges før opptak?",
          "fr": "Comment préparer une séquence dominée par les effets avant tournage ?",
          "pt": "Como planear uma sequência dominada por efeitos antes da rodagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Use an editable previs to coordinate timing and production handoffs",
              "nb": "Bruk redigerbar previs for å samordne timing og produksjonsoverganger",
              "fr": "Utiliser une prévisualisation modifiable pour coordonner rythme et transmissions",
              "pt": "Usar pré-visualização editável para coordenar ritmo e transições"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Postpone all editorial decisions until effects are completed",
              "nb": "Utsett alle klippevalg til effektene er ferdige",
              "fr": "Reporter tous les choix de montage jusqu’à la fin des effets",
              "pt": "Adiar todas as decisões de montagem até terminar os efeitos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume each department can plan independently of the sequence",
              "nb": "Anta at hver avdeling kan planlegge uavhengig av sekvensen",
              "fr": "Supposer que chaque département planifie indépendamment",
              "pt": "Supor que cada departamento planeia independentemente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Framestore and Sanger describe previs as editorial and the later performance feedback loop. Build a short animatic with explicit handoffs instead of assuming conventional coverage.",
          "nb": "Framestore og Sanger beskriver previs som klipp og den senere tilbakeføringen av skuespill. Lag en kort animatic med tydelige overleveringer fremfor å anta konvensjonell dekning.",
          "fr": "Framestore et Sanger décrivent la prévisualisation comme montage et la boucle de jeu. Créez une animatique courte avec transmissions explicites.",
          "pt": "Framestore e Sanger descrevem pré-visualização como montagem e retorno da interpretação. Crie animática curta com transições explícitas."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s5"
        ]
      },
      {
        "id": "gravity-lightbox",
        "area": "camera",
        "prompt": {
          "en": "What is the distinction between interactive illumination and a final digital environment?",
          "nb": "Hva skiller interaktiv belysning fra et ferdig digitalt miljø?",
          "fr": "Quelle différence entre éclairage interactif et environnement numérique final ?",
          "pt": "Qual a diferença entre iluminação interativa e ambiente digital final?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the lighting display supplies every final background pixel",
              "nb": "Anta at lysdisplayet leverer alle endelige bakgrunnspiksler",
              "fr": "Supposer que l’écran lumineux fournit chaque pixel du décor final",
              "pt": "Supor que o ecrã luminoso fornece cada píxel do fundo final"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore lighting direction when integrating photographed elements",
              "nb": "Ignorer lysretning når fotograferte elementer integreres",
              "fr": "Ignorer la direction lumineuse lors de l’intégration",
              "pt": "Ignorar direção da luz ao integrar elementos filmados"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test photographed faces under changing light before compositing",
              "nb": "Prøv fotograferte ansikter under skiftende lys før kompositering",
              "fr": "Tester les visages filmés sous lumière variable avant compositing",
              "pt": "Testar rostos filmados sob luz variável antes da composição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Framestore describes LED illumination around photographed faces and CG environments; ARRI documents the live-action camera. Test small-scale lighting without reproducing industrial equipment.",
          "nb": "Framestore beskriver LED-lys rundt fotograferte ansikter og digitale miljøer; ARRI dokumenterer realopptakskameraet. Prøv lys i liten skala uten å gjenskape industriutstyr.",
          "fr": "Framestore décrit l’éclairage LED des visages et les décors numériques ; ARRI documente la caméra réelle. Testez l’éclairage à petite échelle sans reproduire les machines.",
          "pt": "Framestore descreve iluminação LED de rostos e ambientes digitais; ARRI documenta a câmara real. Teste iluminação em pequena escala sem reproduzir máquinas."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      },
      {
        "id": "gravity-soundfield",
        "area": "sound",
        "prompt": {
          "en": "How can point of audition guide a scene set in a vacuum?",
          "nb": "Hvordan kan lytteperspektivet styre en scene i vakuum?",
          "fr": "Comment le point d’écoute guide-t-il une scène dans le vide ?",
          "pt": "Como pode o ponto de escuta orientar uma cena no vácuo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat surround and stereo output as identical mix records",
              "nb": "Behandle surround- og stereoutdata som identiske miksopplysninger",
              "fr": "Traiter sorties surround et stéréo comme des mixages identiques",
              "pt": "Tratar saídas surround e estéreo como misturas idênticas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish contact, body and radio sounds from exterior silence",
              "nb": "Skill kontaktlyd, kroppslyd og radio fra utvendig stillhet",
              "fr": "Distinguer sons de contact, corporels et radio du silence extérieur",
              "pt": "Distinguir sons de contacto, corporais e rádio do silêncio exterior"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use ordinary airborne exterior sound without narrative justification",
              "nb": "Bruk vanlig luftbåren utelyd uten fortellermessig begrunnelse",
              "fr": "Employer des sons extérieurs aériens sans justification narrative",
              "pt": "Usar sons exteriores aéreos sem justificação narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Freemantle and Lievsay describe contact, bodily and radio sound choices developed during previs. Create a fictional point-of-audition test and document the intended spatial mix.",
          "nb": "Freemantle og Lievsay beskriver kontakt-, kropps- og radiolydvalg utviklet under previs. Lag en fiktiv lytteperspektivprøve og dokumenter den tilsiktede rommiksen.",
          "fr": "Freemantle et Lievsay décrivent sons de contact, corporels et radio élaborés en prévisualisation. Créez un essai fictif de point d’écoute et documentez le mixage spatial.",
          "pt": "Freemantle e Lievsay descrevem sons de contacto, corpo e rádio desenvolvidos na pré-visualização. Crie teste fictício de ponto de escuta e documente mistura espacial."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_ida_2013",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Monochrome finishing, portrait framing and shared authorship",
      "nb": "Monokromt etterarbeid, portrettutsnitt og delt opphav",
      "fr": "Finition monochrome, cadrage portrait et attribution partagée",
      "pt": "Acabamento monocromático, enquadramento de retrato e autoria partilhada"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Ida",
        "publisher": "Opus Film",
        "url": "https://opusfilm.com/films/feature-films/ida"
      },
      {
        "id": "s1",
        "title": "IDA Award Press Notes 2014",
        "publisher": "Music Box Films / Phoenix Film / Opus Film",
        "url": "https://www.musicboxfilms.com/wp-content/uploads/2018/09/IDA_AWARD_PRESS_NOTES_2014.pdf"
      },
      {
        "id": "s3",
        "title": "Three Scenes from Ida",
        "publisher": "The Film Book",
        "url": "https://thefilmbook.net/2015/01/three-scenes-from-ida/"
      },
      {
        "id": "s4",
        "title": "Squaring the Circles: Pawel Pawlikowski on Ida",
        "publisher": "Senses of Cinema",
        "url": "https://www.sensesofcinema.com/2014/feature-articles/squaring-the-circles-pawel-pawlikowski-on-ida/"
      },
      {
        "id": "s5",
        "title": "Ida",
        "publisher": "FilmPolski.pl",
        "url": "https://filmpolski.pl/fp/index.php?film=1229196"
      }
    ],
    "questions": [
      {
        "id": "ida-monochrome",
        "area": "camera",
        "prompt": {
          "en": "How should color capture and monochrome finishing be recorded?",
          "nb": "Hvordan bør fargeopptak og monokromt etterarbeid dokumenteres?",
          "fr": "Comment documenter captation couleur et finition monochrome ?",
          "pt": "Como documentar captação a cores e acabamento monocromático?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Keep camera originals and monochrome grade decisions distinct",
              "nb": "Hold kameraoriginaler og monokrome graderingsvalg adskilt",
              "fr": "Distinguer originaux caméra et choix d’étalonnage monochrome",
              "pt": "Distinguir originais de câmara e escolhas de gradação monocromática"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume black-and-white release means black-and-white capture",
              "nb": "Anta at svart-hvitt-visning betyr svart-hvitt-opptak",
              "fr": "Supposer qu’une diffusion monochrome implique une captation monochrome",
              "pt": "Supor que exibição monocromática implica captação monocromática"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard the color source immediately after conversion",
              "nb": "Forkast fargekilden straks etter konvertering",
              "fr": "Écarter la source couleur immédiatement après conversion",
              "pt": "Descartar fonte a cores logo após conversão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Craft reporting documents color ARRIRAW and monochrome conversion at DI Factory. Compare tonal grades from original material without conflating acquisition with finishing.",
          "nb": "Fagrapportering dokumenterer ARRIRAW i farger og monokrom konvertering hos DI Factory. Sammenlign tonegraderinger fra originalmaterialet uten å blande opptak og etterarbeid.",
          "fr": "Les sources techniques documentent ARRIRAW couleur et conversion monochrome chez DI Factory. Comparez les tonalités sans confondre captation et finition.",
          "pt": "Fontes técnicas documentam ARRIRAW a cores e conversão monocromática na DI Factory. Compare tonalidades sem confundir captação e acabamento."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "ida-framing",
        "area": "camera",
        "prompt": {
          "en": "How can an Academy-like frame use negative space expressively?",
          "nb": "Hvordan kan et Academy-lignende format bruke negativt rom uttrykksfullt?",
          "fr": "Comment un cadre proche du format Academy exploite-t-il l’espace négatif ?",
          "pt": "Como pode um quadro próximo do formato Academy explorar espaço negativo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Always center every face regardless of dramatic purpose",
              "nb": "Sentrer alltid hvert ansikt uavhengig av dramatisk formål",
              "fr": "Centrer toujours chaque visage sans égard au récit",
              "pt": "Centrar sempre cada rosto sem atender à narrativa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a wider frame is automatically more expressive",
              "nb": "Anta at bredere format automatisk er mer uttrykksfullt",
              "fr": "Supposer qu’un cadre large est automatiquement plus expressif",
              "pt": "Supor que quadro mais largo é automaticamente mais expressivo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare headroom and placement against narrative perspective",
              "nb": "Sammenlign luft over hodet og plassering mot fortellerperspektivet",
              "fr": "Comparer espace au-dessus des têtes et placement selon le récit",
              "pt": "Comparar espaço acima da cabeça e posição segundo a narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Pawlikowski discusses 4:3 portrait framing and negative space; FilmPolski records a 1.33 label. Test your own compositions and retain catalogue variance rather than inventing an exact raster.",
          "nb": "Pawlikowski omtaler 4:3-portrettutsnitt og negativt rom; FilmPolski oppgir 1,33. Prøv egne komposisjoner og bevar katalogvariasjon fremfor å finne på eksakt pikselraster.",
          "fr": "Pawlikowski décrit portrait 4:3 et espace négatif ; FilmPolski indique 1,33. Testez vos compositions en préservant les variantes sans inventer de raster exact.",
          "pt": "Pawlikowski descreve retrato 4:3 e espaço negativo; FilmPolski indica 1,33. Teste composições preservando variantes sem inventar raster exato."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "ida-credits",
        "area": "research",
        "prompt": {
          "en": "How should a cinematography handoff be credited and documented?",
          "nb": "Hvordan bør et fotografskifte krediteres og dokumenteres?",
          "fr": "Comment créditer et documenter un relais de direction photo ?",
          "pt": "Como creditar e documentar uma transição na direção de fotografia?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove preparation work from the production record",
              "nb": "Fjern forberedelsesarbeid fra produksjonsloggen",
              "fr": "Supprimer le travail préparatoire du dossier",
              "pt": "Retirar preparação do registo de produção"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve shared credits and distinguish known contributions",
              "nb": "Bevar delte krediteringer og skill dokumenterte bidrag",
              "fr": "Préserver les crédits partagés et distinguer les apports connus",
              "pt": "Preservar créditos partilhados e distinguir contributos conhecidos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign every shot to one cinematographer without documentation",
              "nb": "Tildel hvert bilde én fotograf uten dokumentasjon",
              "fr": "Attribuer chaque plan à un directeur photo sans preuve",
              "pt": "Atribuir cada plano a um diretor de fotografia sem provas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Opus and the press notes preserve the shared cinematography credit; craft reporting describes the workflow. Document a hypothetical handoff without inventing shot-level authorship.",
          "nb": "Opus og pressepakken bevarer delt fotokreditering; fagkilder beskriver arbeidsflyten. Dokumenter et tenkt fotografskifte uten å finne på opphav på bildenivå.",
          "fr": "Opus et le dossier préservent le crédit photo partagé ; les sources techniques décrivent le flux. Documentez un relais fictif sans inventer l’attribution des plans.",
          "pt": "Opus e o dossier preservam crédito fotográfico partilhado; fontes técnicas descrevem o fluxo. Documente uma transição fictícia sem inventar autoria de planos."
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
    "scenarioId": "scenario_boyhood_2014",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Long-term production, evolving script and editorial continuity",
      "nb": "Langtidsproduksjon, manusutvikling og klippekontinuitet",
      "fr": "Production longue, scénario évolutif et continuité du montage",
      "pt": "Produção prolongada, argumento evolutivo e continuidade da montagem"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Richard Linklater and Ellar Coltrane: Making Boyhood was a dear process",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2014/jul/06/richard-linklater-ellar-coltrane-boyhood-interview-dear-process"
      },
      {
        "id": "s1",
        "title": "The Making of a Boy: Richard Linklater on his 12-Year Labor of Love, Boyhood",
        "publisher": "MovieMaker Magazine",
        "url": "https://www.moviemaker.com/richard-linklater-making-boyhood/"
      },
      {
        "id": "s2",
        "title": "Interview: Sandra Adair",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/interview-sandra-adair-boyhood/"
      },
      {
        "id": "s3",
        "title": "Editing Boyhood: Dealing with Changing Technology",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/88632-editing-boyhood-dealing-with-changing-technology/"
      }
    ],
    "questions": [
      {
        "id": "boyhood-calendar",
        "area": "research",
        "prompt": {
          "en": "How should a project filmed over many years be organized?",
          "nb": "Hvordan bør et prosjekt filmet over mange år organiseres?",
          "fr": "Comment organiser un projet filmé sur plusieurs années ?",
          "pt": "Como organizar um projeto filmado ao longo de vários anos?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan recurring sessions and maintain a continuity journal",
              "nb": "Planlegg tilbakevendende opptak og før en kontinuitetslogg",
              "fr": "Prévoir des sessions régulières et tenir un journal de continuité",
              "pt": "Planear sessões regulares e manter um diário de continuidade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat each session as an unrelated short film",
              "nb": "Behandle hvert opptak som en urelatert kortfilm",
              "fr": "Traiter chaque session comme un court métrage indépendant",
              "pt": "Tratar cada sessão como curta-metragem independente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Freeze every detail before the first session",
              "nb": "Fastlås alle detaljer før første opptak",
              "fr": "Figer chaque détail avant la première session",
              "pt": "Fixar todos os detalhes antes da primeira sessão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Linklater describes annual filming and repeated revision. Plan a fictional long-term project with consent, recurring sessions and documented continuity.",
          "nb": "Linklater beskriver årlige opptak og gjentatt revisjon. Planlegg et fiktivt langtidsprosjekt med samtykke, tilbakevendende opptak og dokumentert kontinuitet.",
          "fr": "Linklater décrit des tournages annuels et des révisions répétées. Prévoyez un projet fictif consenti avec sessions régulières et continuité documentée.",
          "pt": "Linklater descreve filmagens anuais e revisões sucessivas. Planeie um projeto fictício consentido com sessões regulares e continuidade documentada."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "boyhood-script",
        "area": "research",
        "prompt": {
          "en": "How can changing observations inform a developing screenplay?",
          "nb": "Hvordan kan skiftende observasjoner informere et manus i utvikling?",
          "fr": "Comment des observations nouvelles nourrissent-elles un scénario évolutif ?",
          "pt": "Como podem novas observações alimentar um argumento evolutivo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume natural dialogue must be completely unscripted",
              "nb": "Anta at naturlig dialog må være helt uskrevet",
              "fr": "Supposer qu’un dialogue naturel doit être totalement improvisé",
              "pt": "Supor que diálogo natural tem de ser totalmente improvisado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard earlier character choices after each session",
              "nb": "Forkast tidligere karaktervalg etter hvert opptak",
              "fr": "Abandonner les choix antérieurs après chaque session",
              "pt": "Abandonar escolhas anteriores após cada sessão"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Revise scripted scenes while preserving character development",
              "nb": "Revider manusfestede scener og bevar karakterutviklingen",
              "fr": "Réviser les scènes écrites en préservant l’évolution des personnages",
              "pt": "Rever cenas escritas preservando a evolução das personagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Guardian interview describes scripted dialogue shaped by observations; Adair discusses rhythm and body language. Try revising a scene without assuming that naturalism means improvisation.",
          "nb": "Guardian-intervjuet beskriver manusdialog formet av observasjoner; Adair omtaler rytme og kroppsspråk. Prøv en revisjon uten å anta at naturalisme betyr improvisasjon.",
          "fr": "Le Guardian décrit des dialogues écrits nourris d’observations ; Adair parle du rythme et des gestes. Révisez une scène sans assimiler naturalisme et improvisation.",
          "pt": "O Guardian descreve diálogo escrito informado por observações; Adair aborda ritmo e gestos. Reveja uma cena sem equiparar naturalismo a improvisação."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "boyhood-archive",
        "area": "research",
        "prompt": {
          "en": "How should editorial work survive changing technology?",
          "nb": "Hvordan bør klippearbeid overleve skiftende teknologi?",
          "fr": "Comment préserver le montage malgré l’évolution technologique ?",
          "pt": "Como preservar a montagem apesar das mudanças tecnológicas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Depend on one proprietary project file indefinitely",
              "nb": "Stol på én proprietær prosjektfil på ubestemt tid",
              "fr": "Dépendre indéfiniment d’un seul fichier propriétaire",
              "pt": "Depender indefinidamente de um único ficheiro proprietário"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve originals, version histories and tested migrations",
              "nb": "Bevar originaler, versjonshistorikk og testede migreringer",
              "fr": "Préserver originaux, historique des versions et migrations testées",
              "pt": "Preservar originais, histórico de versões e migrações testadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Delete earlier cuts whenever a new version is made",
              "nb": "Slett tidligere klipp hver gang en ny versjon lages",
              "fr": "Effacer les montages antérieurs à chaque nouvelle version",
              "pt": "Apagar montagens anteriores a cada nova versão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editors describe repeated recutting and changing systems across twelve years. Design a versioned archive that preserves access to earlier decisions and original material.",
          "nb": "Klipperne beskriver gjentatt omklipping og skiftende systemer gjennom tolv år. Lag et versjonert arkiv som bevarer tilgang til tidligere valg og originalmateriale.",
          "fr": "Les monteurs décrivent remontages et changements de systèmes sur douze ans. Concevez une archive versionnée préservant décisions et originaux.",
          "pt": "Os montadores descrevem remontagens e mudanças de sistemas ao longo de doze anos. Crie arquivo versionado preservando decisões e originais."
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
    "scenarioId": "scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Apparent continuity, coordinated blocking and percussion",
      "nb": "Tilsynelatende kontinuitet, samordnet blokkering og perkusjon",
      "fr": "Continuité apparente, déplacements coordonnés et percussion",
      "pt": "Continuidade aparente, marcações coordenadas e percussão"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Cinematographer Emmanuel Lubezki aimed high on Birdman",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment/envelope/la-et-mn-en-emmanuel-lubezki-20150122-story.html"
      },
      {
        "id": "s1",
        "title": "Invisibly Invaluable: Birdman Editors Douglas Crise & Stephen Mirrione – Part I",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2015/01/invisibly-invaluable-birdman-editors-douglas-crise-stephen-mirrione-part-i/"
      },
      {
        "id": "s2",
        "title": "Invisibly Invaluable: Birdman Editors Douglas Crise & Stephen Mirrione – Part II",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2015/01/invisibly-invaluable-birdman-editors-douglas-crise-stephen-mirrione-part-ii/"
      },
      {
        "id": "s3",
        "title": "How Birdman Composer Improvised the Year's Most Audacious Film Score",
        "publisher": "TheWrap",
        "url": "https://www.thewrap.com/how-birdman-composer-improvised-the-years-most-audacious-film-score/"
      }
    ],
    "questions": [
      {
        "id": "birdman-blocking",
        "area": "camera",
        "prompt": {
          "en": "How can actors and camera share a continuous backstage path?",
          "nb": "Hvordan kan skuespillere og kamera dele en sammenhengende bane bak scenen?",
          "fr": "Comment acteurs et caméra partagent-ils un trajet continu en coulisses ?",
          "pt": "Como podem atores e câmara partilhar um percurso contínuo nos bastidores?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse coordinated movement, cues and camera clearance",
              "nb": "Øv på samordnet bevegelse, signaler og fri kamerabane",
              "fr": "Répéter mouvements coordonnés, signaux et passage caméra",
              "pt": "Ensaiar movimentos coordenados, sinais e passagem da câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Plan camera movement without consulting the performers",
              "nb": "Planlegg kamerabevegelse uten å rådføre deg med utøverne",
              "fr": "Planifier la caméra sans consulter les interprètes",
              "pt": "Planear a câmara sem consultar os intérpretes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume long takes remove the need for rehearsals",
              "nb": "Anta at lange tagninger fjerner behovet for prøver",
              "fr": "Supposer que les plans longs dispensent de répétitions",
              "pt": "Supor que planos longos dispensam ensaios"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lubezki and the editors describe intensive coordination and rehearsal. Test a safe, short backstage movement with agreed cues rather than reproducing the film's exact staging.",
          "nb": "Lubezki og klipperne beskriver intensiv samordning og prøver. Prøv en kort, trygg bevegelse med avtalte signaler fremfor å gjenskape filmens eksakte iscenesettelse.",
          "fr": "Lubezki et les monteurs décrivent coordination et répétitions intensives. Testez un trajet court et sûr avec signaux convenus.",
          "pt": "Lubezki e os montadores descrevem coordenação e ensaios intensivos. Teste percurso curto e seguro com sinais acordados."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "birdman-joins",
        "area": "camera",
        "prompt": {
          "en": "How should apparent single-take continuity be constructed?",
          "nb": "Hvordan bør tilsynelatende kontinuitet i én tagning konstrueres?",
          "fr": "Comment construire la continuité apparente d’un plan unique ?",
          "pt": "Como construir continuidade aparente de um plano único?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Claim every continuous-looking image was filmed without cuts",
              "nb": "Påstå at alle sammenhengende bilder ble filmet uten klipp",
              "fr": "Affirmer que toute image continue a été tournée sans coupe",
              "pt": "Afirmar que toda imagem contínua foi filmada sem cortes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore changes in lighting and performance across joins",
              "nb": "Ignorer lys- og spilleendringer ved skjøtene",
              "fr": "Ignorer les variations de lumière et de jeu aux raccords",
              "pt": "Ignorar mudanças de luz e interpretação nas junções"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan transitions and test visual and rhythmic continuity",
              "nb": "Planlegg overganger og prøv visuell og rytmisk kontinuitet",
              "fr": "Prévoir les raccords et tester la continuité visuelle et rythmique",
              "pt": "Planear transições e testar continuidade visual e rítmica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editors describe carefully prepared invisible transitions and unusual postproduction. Compare perceived continuity with the documented construction of your own short sequence.",
          "nb": "Klipperne beskriver nøye forberedte usynlige overganger og uvanlig etterarbeid. Sammenlign opplevd kontinuitet med dokumentert konstruksjon av egen kortsekvens.",
          "fr": "Les monteurs décrivent des raccords invisibles préparés et une postproduction inhabituelle. Comparez continuité perçue et construction documentée de votre séquence.",
          "pt": "Os montadores descrevem junções invisíveis preparadas e pós-produção invulgar. Compare continuidade percebida e construção documentada da sua sequência."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "birdman-drums",
        "area": "sound",
        "prompt": {
          "en": "How can percussion shape the rhythm of a continuous scene?",
          "nb": "Hvordan kan perkusjon forme rytmen i en sammenhengende scene?",
          "fr": "Comment la percussion façonne-t-elle le rythme d’une scène continue ?",
          "pt": "Como pode a percussão moldar o ritmo de uma cena contínua?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the score can replace all performance rhythm",
              "nb": "Anta at musikken kan erstatte all spillerytme",
              "fr": "Supposer que la musique remplace tout rythme du jeu",
              "pt": "Supor que música substitui todo ritmo da interpretação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test original rhythmic patterns against movement and pauses",
              "nb": "Prøv originale rytmemønstre mot bevegelse og pauser",
              "fr": "Tester des motifs rythmiques originaux face aux mouvements et pauses",
              "pt": "Testar padrões rítmicos originais perante movimento e pausas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the same beat regardless of dramatic changes",
              "nb": "Bruk samme puls uavhengig av dramatiske endringer",
              "fr": "Garder le même rythme malgré les changements dramatiques",
              "pt": "Manter a mesma pulsação apesar das mudanças dramáticas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sánchez and Iñárritu describe improvised percussion as an internal pulse. Create an original rhythm study and compare how sound interacts with actor and camera movement.",
          "nb": "Sánchez og Iñárritu beskriver improvisert perkusjon som indre puls. Lag en original rytmestudie og sammenlign hvordan lyd samspiller med skuespiller og kamera.",
          "fr": "Sánchez et Iñárritu décrivent la percussion improvisée comme pulsation interne. Créez une étude rythmique originale et comparez son interaction avec le jeu et la caméra.",
          "pt": "Sánchez e Iñárritu descrevem percussão improvisada como pulsação interna. Crie estudo rítmico original e compare interação com atores e câmara."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_ex_machina_2014",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Architectural isolation, practical light and performance-led effects",
      "nb": "Arkitektonisk isolasjon, praktisk lys og spillstyrte effekter",
      "fr": "Isolement architectural, éclairage pratique et effets guidés par le jeu",
      "pt": "Isolamento arquitetónico, luz prática e efeitos guiados pela interpretação"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Rob Hardy BSC / Ex Machina",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/rob-hardy-bsc-ex-machina/"
      },
      {
        "id": "s1",
        "title": "Ex Machina: the making of Ava",
        "publisher": "fxguide",
        "url": "https://www.fxguide.com/fxfeatured/ex-machina-the-making-of-ava/"
      },
      {
        "id": "s2",
        "title": "Ex Machina",
        "publisher": "Norwegian Film Commission",
        "url": "https://www.norwegianfilm.com/filmography/ex-machina"
      },
      {
        "id": "s3",
        "title": "Ex Machina's Stunning Mansion is Mostly Real",
        "publisher": "Vanity Fair",
        "url": "https://www.vanityfair.com/hollywood/2015/04/ex-machina-location"
      }
    ],
    "questions": [
      {
        "id": "exmachina-architecture",
        "area": "research",
        "prompt": {
          "en": "How can real architecture and constructed sets form one fictional space?",
          "nb": "Hvordan kan ekte arkitektur og bygde kulisser danne ett fiktivt rom?",
          "fr": "Comment architecture réelle et décors construits forment-ils un espace fictif ?",
          "pt": "Como podem arquitetura real e cenários construídos formar um espaço fictício?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map spatial relationships and match design features across locations",
              "nb": "Kartlegg romforbindelser og samordne design på tvers av steder",
              "fr": "Cartographier les relations spatiales et harmoniser les décors",
              "pt": "Mapear relações espaciais e harmonizar elementos entre locais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all interiors were filmed at the same real location",
              "nb": "Anta at alle interiører ble filmet på samme virkelige sted",
              "fr": "Supposer que tous les intérieurs ont été filmés au même lieu réel",
              "pt": "Supor que todos os interiores foram filmados no mesmo local real"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose visually unrelated rooms without considering transitions",
              "nb": "Velg visuelt urelaterte rom uten å vurdere overgangene",
              "fr": "Choisir des pièces sans rapport ni réflexion sur les transitions",
              "pt": "Escolher divisões sem relação nem considerar transições"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Norwegian Film Commission and Digby describe Juvet and constructed underground sets. Design an original spatial map distinguishing real locations from built elements.",
          "nb": "Norwegian Film Commission og Digby beskriver Juvet og bygde underjordiske kulisser. Lag et originalt romkart som skiller ekte steder fra bygde elementer.",
          "fr": "La Norwegian Film Commission et Digby décrivent Juvet et les décors souterrains construits. Créez un plan distinguant lieux réels et éléments construits.",
          "pt": "A Norwegian Film Commission e Digby descrevem Juvet e cenários subterrâneos construídos. Crie planta distinguindo locais reais e elementos construídos."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "exmachina-glass",
        "area": "camera",
        "prompt": {
          "en": "How can lighting and glass partitions support a dialogue scene?",
          "nb": "Hvordan kan lys og glassvegger støtte en dialogscene?",
          "fr": "Comment lumière et cloisons vitrées servent-elles une scène dialoguée ?",
          "pt": "Como podem luz e divisórias de vidro apoiar uma cena de diálogo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Ignore reflections until the final rendering stage",
              "nb": "Ignorer refleksjoner frem til endelig rendering",
              "fr": "Ignorer les reflets jusqu’au rendu final",
              "pt": "Ignorar reflexos até à renderização final"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Light every surface equally without testing the glass",
              "nb": "Belys alle flater likt uten å prøve glasset",
              "fr": "Éclairer toutes les surfaces également sans tester le verre",
              "pt": "Iluminar todas as superfícies igualmente sem testar o vidro"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test reflections and practical lighting with actor positions",
              "nb": "Prøv refleksjoner og praktiske lyskilder sammen med skuespillerplassering",
              "fr": "Tester reflets et éclairage pratique avec les positions des acteurs",
              "pt": "Testar reflexos e luz prática com posições dos atores"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Hardy describes embedded practicals, reflections and geometric barriers. Compare lighting tests on a small transparent partition to see how separation changes the scene.",
          "nb": "Hardy beskriver integrerte lyskilder, refleksjoner og geometriske barrierer. Sammenlign lysprøver på en liten gjennomsiktig skillevegg for å se hvordan avstand endrer scenen.",
          "fr": "Hardy décrit sources intégrées, reflets et barrières géométriques. Comparez des essais sur une cloison transparente pour étudier la séparation.",
          "pt": "Hardy descreve fontes integradas, reflexos e barreiras geométricas. Compare testes numa divisória transparente para estudar a separação."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "exmachina-ava",
        "area": "animation",
        "prompt": {
          "en": "How can digital body elements preserve a photographed performance?",
          "nb": "Hvordan kan digitale kroppselementer bevare fotografert skuespill?",
          "fr": "Comment des éléments corporels numériques préservent-ils le jeu filmé ?",
          "pt": "Como podem elementos corporais digitais preservar interpretação filmada?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat long takes as eliminating the need for compositing",
              "nb": "Anta at lange tagninger fjerner behovet for kompositering",
              "fr": "Supposer que les plans longs dispensent de compositing",
              "pt": "Supor que planos longos dispensam composição"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track movement and preserve the performer’s timing and presence",
              "nb": "Spor bevegelse og bevar utøverens timing og nærvær",
              "fr": "Suivre le mouvement et préserver rythme et présence de l’interprète",
              "pt": "Rastrear movimento e preservar ritmo e presença do intérprete"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace performance timing without consulting the actor footage",
              "nb": "Erstatt spillerytmen uten å se skuespilleropptaket",
              "fr": "Remplacer le rythme du jeu sans consulter les prises",
              "pt": "Substituir ritmo da interpretação sem consultar as imagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Whitehurst describes early design collaboration, tracking and preservation of live performance through body replacement. Try a consent-based composite and compare it with the original movement.",
          "nb": "Whitehurst beskriver designsamarbeid, sporing og bevaring av realspill gjennom kroppserstatning. Prøv en samtykkebasert kompositt og sammenlign med originalbevegelsen.",
          "fr": "Whitehurst décrit collaboration, suivi et préservation du jeu lors du remplacement corporel. Testez un composite consenti et comparez au mouvement original.",
          "pt": "Whitehurst descreve colaboração, rastreio e preservação da interpretação na substituição corporal. Teste composição consentida e compare com movimento original."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_mad_max_fury_road_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Action readability, storyboard coordination and vehicle sound",
      "nb": "Handlingslesbarhet, storyboardsamarbeid og kjøretøylyd",
      "fr": "Lisibilité de l’action, coordination du découpage et son des véhicules",
      "pt": "Legibilidade da ação, coordenação de storyboard e som dos veículos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "John Seale ACS ASC / Mad Max: Fury Road",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/john-seale-acs-asc-mad-max-fury-road/"
      },
      {
        "id": "s1",
        "title": "ASC Breakfast Club 2015: John Seale",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/asc-breakfast-club-2015-video-collection"
      },
      {
        "id": "s2",
        "title": "Mad Max: Fury Road – The Story Behind Its Most Insane Stunts",
        "publisher": "Rolling Stone Australia",
        "url": "https://au.rollingstone.com/movies/movie-reviews/mad-max-fury-road-the-story-behind-its-most-insane-stunts-679/"
      },
      {
        "id": "s3",
        "title": "Miking the Madness: Sound for Mad Max Fury Road",
        "publisher": "AudioTechnology",
        "url": "https://www.audiotechnology.com/features/milking-the-madness-sound-for-mad-max-fury-poad"
      }
    ],
    "questions": [
      {
        "id": "furyroad-center",
        "area": "camera",
        "prompt": {
          "en": "How can rapid cutting remain spatially readable?",
          "nb": "Hvordan kan rask klipping forbli romlig forståelig?",
          "fr": "Comment un montage rapide reste-t-il spatialement lisible ?",
          "pt": "Como pode montagem rápida permanecer espacialmente legível?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test consistent points of visual attention across cuts",
              "nb": "Prøv konsekvente visuelle oppmerksomhetspunkter på tvers av klipp",
              "fr": "Tester des points d’attention cohérents entre les coupes",
              "pt": "Testar pontos de atenção visual coerentes entre cortes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Scatter key subjects randomly across every frame",
              "nb": "Spre viktige motiver tilfeldig over hvert utsnitt",
              "fr": "Disperser les sujets essentiels au hasard dans chaque cadre",
              "pt": "Dispersar motivos principais ao acaso em cada quadro"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume speed alone makes editing understandable",
              "nb": "Anta at hastighet alene gjør klippen forståelig",
              "fr": "Supposer que la vitesse seule rend le montage lisible",
              "pt": "Supor que velocidade por si só torna a montagem legível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Seale describes center-framing to support fast editing. Test the technique with harmless object movement and compare how viewers follow points of attention.",
          "nb": "Seale beskriver sentrert komposisjon for rask klipp. Prøv teknikken med ufarlig objektbevegelse og sammenlign hvordan publikum følger oppmerksomhetspunktene.",
          "fr": "Seale décrit le cadrage centré pour le montage rapide. Testez avec des objets en mouvement sans danger et comparez le suivi du regard.",
          "pt": "Seale descreve enquadramento centrado para montagem rápida. Teste com objetos em movimento sem perigo e compare o seguimento do olhar."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "furyroad-storyboard",
        "area": "research",
        "prompt": {
          "en": "How should a complex practical sequence be coordinated across departments?",
          "nb": "Hvordan bør en kompleks praktisk sekvens samordnes mellom avdelinger?",
          "fr": "Comment coordonner une séquence pratique complexe entre départements ?",
          "pt": "Como coordenar uma sequência prática complexa entre departamentos?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Let each department devise unrelated action independently",
              "nb": "La hver avdeling utforme urelatert handling på egen hånd",
              "fr": "Laisser chaque département concevoir une action indépendante",
              "pt": "Deixar cada departamento conceber ação independente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace rehearsal and safety checks with spontaneous filming",
              "nb": "Erstatt prøver og sikkerhetskontroller med spontane opptak",
              "fr": "Remplacer répétitions et contrôles par un tournage spontané",
              "pt": "Substituir ensaios e verificações por filmagem espontânea"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use shared storyboards, qualified specialists and safety approvals",
              "nb": "Bruk felles storyboard, kvalifiserte fagpersoner og sikkerhetsgodkjenning",
              "fr": "Utiliser découpage partagé, spécialistes qualifiés et validation de sécurité",
              "pt": "Usar storyboard partilhado, especialistas qualificados e aprovação de segurança"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The craft accounts describe storyboard-led production and coordinated practical work. Use a tabletop storyboard exercise, not a recreation of dangerous vehicle stunts.",
          "nb": "Fagkildene beskriver storyboardstyrt produksjon og samordnet praktisk arbeid. Bruk en bordmodelløvelse, ikke en gjenskaping av farlige kjøretøystunt.",
          "fr": "Les sources décrivent découpage et travail pratique coordonnés. Utilisez une maquette de table, sans reproduire de cascades dangereuses.",
          "pt": "As fontes descrevem storyboard e trabalho prático coordenado. Use uma maquete de mesa, sem reproduzir acrobacias perigosas."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "furyroad-engines",
        "area": "sound",
        "prompt": {
          "en": "How can vehicle sound give fictional machines distinct identities?",
          "nb": "Hvordan kan kjøretøylyd gi fiktive maskiner egne identiteter?",
          "fr": "Comment le son donne-t-il aux véhicules fictifs des identités distinctes ?",
          "pt": "Como pode o som dar identidades distintas a veículos fictícios?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume picture editing determines the entire sound identity",
              "nb": "Anta at bildeklipp bestemmer hele lydidentiteten",
              "fr": "Supposer que le montage image détermine toute identité sonore",
              "pt": "Supor que montagem de imagem determina toda identidade sonora"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Combine safe recorded sound layers into distinct sonic profiles",
              "nb": "Kombiner trygt innspilte lydlag til egne lydprofiler",
              "fr": "Combiner des couches sonores enregistrées en sécurité",
              "pt": "Combinar camadas sonoras gravadas em segurança"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use an identical engine recording for every machine",
              "nb": "Bruk samme motoropptak for alle maskiner",
              "fr": "Employer le même enregistrement moteur pour chaque machine",
              "pt": "Usar a mesma gravação de motor para todas as máquinas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Osmo describes dedicated vehicle recordings and layered sonic identities. Create original sound profiles from safe recordings and compare their narrative function.",
          "nb": "Osmo beskriver egne kjøretøyopptak og lagdelte lydidentiteter. Lag originale lydprofiler fra trygge opptak og sammenlign fortellerfunksjonen.",
          "fr": "Osmo décrit des prises dédiées et des identités sonores stratifiées. Créez des profils originaux à partir de sons sûrs et comparez leur fonction.",
          "pt": "Osmo descreve gravações dedicadas e identidades sonoras em camadas. Crie perfis originais com sons seguros e compare a função narrativa."
        },
        "sourceIds": [
          "s3",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_son_of_saul_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Restricted viewpoint, testimony and offscreen sound",
      "nb": "Avgrenset perspektiv, vitnesbyrd og lyd utenfor bildet",
      "fr": "Point de vue restreint, témoignage et son hors champ",
      "pt": "Perspetiva restrita, testemunho e som fora de campo"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Son of Saul",
        "publisher": "Sony Pictures Classics",
        "url": "https://www.sonyclassics.com/sonofsaul/"
      },
      {
        "id": "s2",
        "title": "Hell on Earth: László Nemes on Son of Saul",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/96169-hell-on-earth/"
      },
      {
        "id": "s3",
        "title": "2015 in Review: 6 Cinematography Trends",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/post/the-film-book/2015-in-review-6-trends/"
      },
      {
        "id": "s4",
        "title": "László Rajk • Production designer",
        "publisher": "Cineuropa",
        "url": "https://cineuropa.org/en/interview/307299/"
      },
      {
        "id": "s6",
        "title": "Anatomy of a Contender: Son of Saul",
        "publisher": "The Hollywood Reporter / Sony Pictures Classics",
        "url": "https://www.sonyclassics.com/sonofsaul/hollywoodreporter-sonofsaul.pdf"
      }
    ],
    "questions": [
      {
        "id": "sonofsaul-representation",
        "area": "research",
        "prompt": {
          "en": "How should historical testimony guide a restricted representation?",
          "nb": "Hvordan bør historiske vitnesbyrd veilede en avgrenset fremstilling?",
          "fr": "Comment le témoignage historique guide-t-il une représentation restreinte ?",
          "pt": "Como deve testemunho histórico orientar uma representação restrita?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Consult testimony and historians while setting explicit limits on depiction",
              "nb": "Rådfør deg med vitnesbyrd og historikere og sett tydelige fremstillingsgrenser",
              "fr": "Consulter témoignages et historiens en fixant des limites explicites",
              "pt": "Consultar testemunhos e historiadores definindo limites explícitos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat emotional intensity as proof of historical accuracy",
              "nb": "Behandle følelsesintensitet som bevis på historisk nøyaktighet",
              "fr": "Traiter l’intensité émotionnelle comme preuve historique",
              "pt": "Tratar intensidade emocional como prova histórica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a constructed set proves the exact historical geography",
              "nb": "Anta at en kulisse beviser den eksakte historiske geografien",
              "fr": "Supposer qu’un décor construit prouve la géographie historique exacte",
              "pt": "Supor que cenário construído prova geografia histórica exata"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nemes describes testimony research and limits on depiction; Rajk describes functional rather than literal reconstruction. Document sources and ethical boundaries before designing any fictional study.",
          "nb": "Nemes beskriver vitnesbyrd og fremstillingsgrenser; Rajk beskriver funksjonell fremfor bokstavelig rekonstruksjon. Dokumenter kilder og etiske grenser før en fiktiv studie utformes.",
          "fr": "Nemes décrit les témoignages et les limites de représentation ; Rajk une reconstruction fonctionnelle. Documentez sources et limites éthiques avant toute étude fictive.",
          "pt": "Nemes descreve testemunhos e limites de representação; Rajk reconstrução funcional. Documente fontes e limites éticos antes de qualquer estudo fictício."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "sonofsaul-focus",
        "area": "camera",
        "prompt": {
          "en": "How can restricted framing limit what a viewer knows?",
          "nb": "Hvordan kan avgrenset bildekomposisjon begrense hva publikum vet?",
          "fr": "Comment un cadrage restreint limite-t-il le savoir du spectateur ?",
          "pt": "Como pode enquadramento restrito limitar o conhecimento do público?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Reveal every offscreen event through explanatory wide shots",
              "nb": "Avslør alle hendelser utenfor bildet med forklarende totalbilder",
              "fr": "Révéler chaque événement hors champ par des plans larges explicatifs",
              "pt": "Revelar cada acontecimento fora de campo por planos gerais explicativos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume narrow framing makes a fictional account historically complete",
              "nb": "Anta at smalt utsnitt gjør en fiktiv beretning historisk fullstendig",
              "fr": "Supposer qu’un cadrage étroit rend un récit historiquement complet",
              "pt": "Supor que enquadramento estreito torna relato historicamente completo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test a companion viewpoint with controlled depth of field",
              "nb": "Prøv et ledsagerperspektiv med kontrollert dybdeskarphet",
              "fr": "Tester un point de vue compagnon avec profondeur de champ contrôlée",
              "pt": "Testar perspetiva de acompanhante com profundidade de campo controlada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sources describe camera-as-companion, shallow focus and restricted framing. Test the formal principle in an unrelated neutral scene without reenacting historical suffering.",
          "nb": "Kildene beskriver kamera som ledsager, liten dybdeskarphet og avgrenset utsnitt. Prøv formprinsippet i en urelatert nøytral scene uten å gjenskape historisk lidelse.",
          "fr": "Les sources décrivent caméra compagne, faible profondeur et cadrage restreint. Testez le principe dans une scène neutre sans rejouer la souffrance historique.",
          "pt": "As fontes descrevem câmara acompanhante, pouca profundidade e quadro restrito. Teste o princípio numa cena neutra sem reencenar sofrimento histórico."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      },
      {
        "id": "sonofsaul-offscreen",
        "area": "sound",
        "prompt": {
          "en": "How can offscreen sound convey space without visual exposition?",
          "nb": "Hvordan kan lyd utenfor bildet formidle rom uten visuell forklaring?",
          "fr": "Comment le son hors champ transmet-il l’espace sans exposition visuelle ?",
          "pt": "Como pode som fora de campo transmitir espaço sem exposição visual?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat designed sound as an authentic historical recording",
              "nb": "Behandle designet lyd som et autentisk historisk opptak",
              "fr": "Traiter le son conçu comme un enregistrement historique authentique",
              "pt": "Tratar som concebido como gravação histórica autêntica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Build layered sound and distinguish audible from visible information",
              "nb": "Bygg lagdelt lyd og skill hørbar fra synlig informasjon",
              "fr": "Construire des couches sonores et distinguer audible et visible",
              "pt": "Construir camadas sonoras e distinguir informação audível e visível"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Illustrate every sound with an explanatory close-up",
              "nb": "Illustrer hver lyd med et forklarende nærbilde",
              "fr": "Illustrer chaque son par un gros plan explicatif",
              "pt": "Ilustrar cada som com um grande plano explicativo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production accounts describe layered multilingual sound supplying withheld information. Test offscreen space using ordinary neutral sounds and distinguish construction from historical evidence.",
          "nb": "Produksjonskildene beskriver lagdelt flerspråklig lyd som formidler tilbakeholdt informasjon. Prøv lydrom med vanlige nøytrale lyder og skill konstruksjon fra historiske bevis.",
          "fr": "Les sources décrivent un son multilingue stratifié transmettant des informations retenues. Testez le hors-champ avec des sons neutres et distinguez construction et preuve.",
          "pt": "As fontes descrevem som multilingue em camadas transmitindo informação retida. Teste fora de campo com sons neutros e distinga construção de prova."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_victoria_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Continuous performance, rehearsed movement and real-time structure",
      "nb": "Sammenhengende spill, innøvd bevegelse og sanntidsstruktur",
      "fr": "Jeu continu, déplacements répétés et structure en temps réel",
      "pt": "Interpretação contínua, movimentos ensaiados e estrutura em tempo real"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Victoria: director describes a madcap heist film that's a one-take wonder",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2015/oct/07/victoria-director-sebastian-schipper-one-take-heist-film"
      },
      {
        "id": "s1",
        "title": "What It's Like to Shoot an Entire Feature-Length Film in One Take",
        "publisher": "VICE",
        "url": "https://www.vice.com/en/article/sebastian-schipper-victoria-interview/"
      },
      {
        "id": "s2",
        "title": "We Watch Films with Our Nervous Systems: Sebastian Schipper on Victoria",
        "publisher": "RogerEbert.com",
        "url": "https://www.rogerebert.com/interviews/we-watch-films-with-our-nervous-systems-sebastian-schipper-on-victoria"
      },
      {
        "id": "s3",
        "title": "This Director of This Movie Shot in a Single Take Doesn't Resent Birdman, Actually",
        "publisher": "Vanity Fair",
        "url": "https://www.vanityfair.com/hollywood/2015/10/victoria-director-interview"
      }
    ],
    "questions": [
      {
        "id": "victoria-route",
        "area": "camera",
        "prompt": {
          "en": "How should an uninterrupted location sequence be rehearsed?",
          "nb": "Hvordan bør en uavbrutt stedssekvens øves inn?",
          "fr": "Comment répéter une séquence continue en décors réels ?",
          "pt": "Como ensaiar uma sequência contínua em locais reais?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a short safe path with coordinated cues and permissions",
              "nb": "Øv på en kort trygg rute med samordnede signaler og tillatelser",
              "fr": "Répéter un trajet court et sûr avec signaux et autorisations",
              "pt": "Ensaiar um percurso curto e seguro com sinais e autorizações"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a continuous take requires no location preparation",
              "nb": "Anta at en sammenhengende tagning ikke krever stedsforberedelse",
              "fr": "Supposer qu’un plan continu ne demande aucun repérage",
              "pt": "Supor que plano contínuo dispensa preparação de locais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Depend on hidden cuts to repair every movement",
              "nb": "Stol på skjulte klipp for å reparere alle bevegelser",
              "fr": "Compter sur les coupes cachées pour réparer chaque mouvement",
              "pt": "Depender de cortes ocultos para reparar cada movimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schipper describes extensive rehearsal and continuous movement across locations. Design a short neutral route with permission and safe rehearsal rather than reproducing the original story action.",
          "nb": "Schipper beskriver omfattende prøver og sammenhengende bevegelse mellom steder. Lag en kort nøytral rute med tillatelse og trygg øving fremfor å gjenskape originalhandlingen.",
          "fr": "Schipper décrit des répétitions et déplacements continus. Concevez un trajet neutre et court, autorisé et répété en sécurité, sans reproduire l’action originale.",
          "pt": "Schipper descreve ensaios e movimentos contínuos. Crie percurso neutro curto, autorizado e ensaiado em segurança, sem reproduzir a ação original."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "victoria-improv",
        "area": "research",
        "prompt": {
          "en": "How can improvised dialogue fit a structured continuous performance?",
          "nb": "Hvordan kan improvisert dialog passe inn i strukturert sammenhengende spill?",
          "fr": "Comment un dialogue improvisé s’inscrit-il dans un jeu continu structuré ?",
          "pt": "Como pode diálogo improvisado integrar interpretação contínua estruturada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all shared objectives before the performance",
              "nb": "Fjern alle felles mål før spillet",
              "fr": "Supprimer tous les objectifs communs avant le jeu",
              "pt": "Eliminar objetivos comuns antes da interpretação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Require every improvisation to follow identical wording",
              "nb": "Krev at all improvisasjon følger identisk ordlyd",
              "fr": "Exiger des formulations identiques pour toute improvisation",
              "pt": "Exigir formulações idênticas em toda improvisação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree on scene objectives and allow responsive dialogue",
              "nb": "Avtal scenemål og tillat responsiv dialog",
              "fr": "Convenir des objectifs et permettre un dialogue réactif",
              "pt": "Acordar objetivos e permitir diálogo responsivo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schipper describes a scenario without fixed dialogue and emphasizes actor connection. Test a fictional conversation with agreed objectives and freely responsive wording.",
          "nb": "Schipper beskriver et scenario uten fast dialog og vektlegger skuespillerkontakt. Prøv en fiktiv samtale med avtalte mål og fritt responsiv ordlyd.",
          "fr": "Schipper décrit un scénario sans dialogue fixé et souligne la relation entre acteurs. Testez une conversation fictive avec objectifs convenus et paroles libres.",
          "pt": "Schipper descreve cenário sem diálogo fixo e ligação entre atores. Teste conversa fictícia com objetivos acordados e palavras livres."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "victoria-duration",
        "area": "research",
        "prompt": {
          "en": "How can real-time storytelling sustain attention without editorial ellipses?",
          "nb": "Hvordan kan sanntidsfortelling holde oppmerksomheten uten klippeellipser?",
          "fr": "Comment le temps réel maintient-il l’attention sans ellipses de montage ?",
          "pt": "Como pode narrativa em tempo real manter atenção sem elipses de montagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume continuous duration automatically creates engagement",
              "nb": "Anta at sammenhengende varighet automatisk skaper engasjement",
              "fr": "Supposer que la durée continue crée automatiquement l’intérêt",
              "pt": "Supor que duração contínua gera automaticamente interesse"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare complete takes and assess changes in pace within each",
              "nb": "Sammenlign hele tagninger og vurder temposkifter innenfor hver",
              "fr": "Comparer des prises complètes et leurs variations de rythme",
              "pt": "Comparar tomadas completas e suas variações de ritmo"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Evaluate only isolated dramatic highlights from each take",
              "nb": "Vurder bare isolerte dramatiske høydepunkter fra hver tagning",
              "fr": "Évaluer seulement les moments forts isolés de chaque prise",
              "pt": "Avaliar apenas momentos fortes isolados de cada tomada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schipper describes choosing a complete attempt and the embodied experience of unbroken duration. Compare short complete fictional takes and assess internal rhythm, not just the length.",
          "nb": "Schipper beskriver valg av en hel tagning og kroppslig opplevelse av uavbrutt varighet. Sammenlign korte komplette fiktive tagninger og vurder indre rytme, ikke bare lengde.",
          "fr": "Schipper décrit le choix d’une prise complète et l’expérience de durée continue. Comparez des prises fictives courtes et leur rythme interne.",
          "pt": "Schipper descreve escolha de tomada completa e experiência de duração contínua. Compare tomadas fictícias curtas e ritmo interno, não apenas duração."
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
    "scenarioId": "scenario_the_revenant_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Seasonal light, location continuity and invisible effects",
      "nb": "Sesonglys, stedskontinuitet og usynlige effekter",
      "fr": "Lumière saisonnière, continuité des lieux et effets invisibles",
      "pt": "Luz sazonal, continuidade de locais e efeitos invisíveis"
    },
    "sources": [
      {
        "id": "s1",
        "title": "ALEXA XT and ALEXA 65 on The Revenant",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/alexa-xt-and-alexa-65-on-the-revenant-"
      },
      {
        "id": "s2",
        "title": "Wrap Shot: The Revenant",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/wrap-shot-the-revenant"
      },
      {
        "id": "s3",
        "title": "Emmanuel Lubezki AMC ASC / The Revenant",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/emmanuel-lubezki-amc-asc-the-revenant/"
      },
      {
        "id": "s5",
        "title": "The Revenant",
        "publisher": "Industrial Light & Magic",
        "url": "https://www.ilm.com/vfx/the-revenant/"
      },
      {
        "id": "s6",
        "title": "The Revenant",
        "publisher": "MPC",
        "url": "https://www.mpcvfx.com/en/filmography/revenant/"
      },
      {
        "id": "s7",
        "title": "Editing: The Revenant",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2016/January-1-2016/Editing-The-Revenant.aspx"
      },
      {
        "id": "s8",
        "title": "Designing for the Screen: An Interview with Jack Fisk",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/3923-designing-for-the-screen-an-interview-with-jack-fisk"
      }
    ],
    "questions": [
      {
        "id": "revenant-daylight",
        "area": "camera",
        "prompt": {
          "en": "How should a remote production plan for changing daylight and weather?",
          "nb": "Hvordan bør en avsides produksjon planlegge for skiftende dagslys og vær?",
          "fr": "Comment préparer un tournage isolé aux variations de lumière et météo ?",
          "pt": "Como preparar rodagem remota para variações de luz e clima?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan daylight windows, safe alternatives and continuity references",
              "nb": "Planlegg dagslysvinduer, trygge alternativer og kontinuitetsreferanser",
              "fr": "Prévoir créneaux de lumière, alternatives sûres et références de continuité",
              "pt": "Planear janelas de luz, alternativas seguras e referências de continuidade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep the same schedule regardless of weather and season",
              "nb": "Behold samme plan uavhengig av vær og sesong",
              "fr": "Garder le même planning malgré météo et saisons",
              "pt": "Manter calendário idêntico apesar de clima e estação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume natural light eliminates every need for planning",
              "nb": "Anta at naturlig lys fjerner ethvert planleggingsbehov",
              "fr": "Supposer que la lumière naturelle dispense de toute préparation",
              "pt": "Supor que luz natural dispensa qualquer preparação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC describes short winter daylight and a move for snow continuity; Lubezki describes bounded lighting exceptions. Plan a safe local test with weather alternatives rather than copying harsh working conditions.",
          "nb": "ASC beskriver korte vinterdager og flytting for snøkontinuitet; Lubezki beskriver avgrensede lysunntak. Planlegg en trygg lokal prøve med væralternativer fremfor å kopiere krevende arbeidsforhold.",
          "fr": "L’ASC décrit les jours courts et un déplacement pour la neige ; Lubezki précise des exceptions lumineuses. Prévoyez un essai local sûr avec alternatives météo.",
          "pt": "A ASC descreve dias curtos e deslocação para continuidade da neve; Lubezki refere exceções de iluminação. Planeie teste local seguro com alternativas climáticas."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "revenant-composite",
        "area": "animation",
        "prompt": {
          "en": "How should continuous-looking composite footage be documented?",
          "nb": "Hvordan bør sammenhengende komposittopptak dokumenteres?",
          "fr": "Comment documenter des images composites à continuité apparente ?",
          "pt": "Como documentar imagens compostas de continuidade aparente?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a seamless image proves one uninterrupted original take",
              "nb": "Anta at et sømløst bilde beviser én uavbrutt originaltagning",
              "fr": "Supposer qu’une image continue prouve une prise originale ininterrompue",
              "pt": "Supor que imagem contínua prova uma tomada original ininterrupta"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase practical contributions from the effects record",
              "nb": "Fjern praktiske bidrag fra effektloggen",
              "fr": "Effacer les apports pratiques du dossier d’effets",
              "pt": "Apagar contributos práticos do registo de efeitos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track photographed elements, joins and digital contributions separately",
              "nb": "Registrer fotograferte elementer, skjøter og digitale bidrag separat",
              "fr": "Documenter séparément éléments filmés, raccords et apports numériques",
              "pt": "Registar separadamente elementos filmados, junções e contributos digitais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ILM and MPC describe multiple photographed elements integrated into continuous-seeming sequences. Make a neutral composite study and preserve the provenance of each element.",
          "nb": "ILM og MPC beskriver flere fotograferte elementer integrert i tilsynelatende sammenhengende sekvenser. Lag en nøytral komposittstudie og bevar hvert elements kildeopphav.",
          "fr": "ILM et MPC décrivent plusieurs éléments filmés intégrés à des séquences continues en apparence. Créez une étude composite neutre et conservez la provenance de chaque élément.",
          "pt": "ILM e MPC descrevem vários elementos filmados integrados em sequências aparentemente contínuas. Crie estudo composto neutro e preserve proveniência de cada elemento."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      },
      {
        "id": "revenant-editorial",
        "area": "research",
        "prompt": {
          "en": "How can editorial planning support a location-based production?",
          "nb": "Hvordan kan klippeplanlegging støtte en stedbasert produksjon?",
          "fr": "Comment le montage préparatoire aide-t-il un tournage en décors réels ?",
          "pt": "Como pode preparação de montagem apoiar produção em locais reais?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat design and editorial plans as unrelated documents",
              "nb": "Behandle design- og klippeplaner som urelaterte dokumenter",
              "fr": "Traiter les plans de décor et montage comme indépendants",
              "pt": "Tratar planos de design e montagem como independentes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review rehearsal footage and coordinate early departmental handoffs",
              "nb": "Gjennomgå prøveopptak og samordne tidlige overleveringer mellom avdelinger",
              "fr": "Examiner les répétitions filmées et coordonner les transmissions précoces",
              "pt": "Rever ensaios filmados e coordenar transições antecipadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Wait until every shoot is finished before reviewing rhythm",
              "nb": "Vent til alle opptak er ferdige før rytmen vurderes",
              "fr": "Attendre la fin de tout tournage pour examiner le rythme",
              "pt": "Esperar pelo fim de toda rodagem para rever ritmo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mirrione describes editorial involvement before and during filming; Fisk describes location-led design. Build a small rehearsal review and shared handoff log without inventing original shot allocations.",
          "nb": "Mirrione beskriver klippeinvolvering før og under opptak; Fisk beskriver stedbasert design. Lag en liten gjennomgang av prøveopptak og felles overleveringslogg uten å finne på originalens bildeansvar.",
          "fr": "Mirrione décrit le montage avant et pendant le tournage ; Fisk le décor lié aux lieux. Créez une revue de répétition et un journal partagé sans inventer les attributions originales.",
          "pt": "Mirrione descreve montagem antes e durante rodagem; Fisk design ligado aos locais. Crie revisão de ensaio e registo partilhado sem inventar atribuições originais."
        },
        "sourceIds": [
          "s7",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_moonlight_2016",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Single-camera intimacy, triptych continuity and musical transformation",
      "nb": "Ettkameranærhet, tredelt kontinuitet og musikalsk transformasjon",
      "fr": "Intimité à une caméra, continuité du triptyque et transformation musicale",
      "pt": "Intimidade com uma câmara, continuidade do tríptico e transformação musical"
    },
    "sources": [
      {
        "id": "s0",
        "title": "A One-Camera Show: DP James Laxton on Moonlight",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/100603-a-one-camera-show-dp-james-laxton-on-moonlight/"
      },
      {
        "id": "s1",
        "title": "Moonlight: DP James Laxton creates poetic look on ALEXA",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/-moonlight-dp-james-laxton-creates-poetic-look-on-alexa"
      },
      {
        "id": "s2",
        "title": "The A-List: Moonlight director Barry Jenkins",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/the-a-list-moonlight-director-barry-jenkins/"
      },
      {
        "id": "s3",
        "title": "Inside Looking Out: Barry Jenkins on Moonlight",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/100314-inside-looking-out/"
      },
      {
        "id": "s4",
        "title": "All The Way Home with Barry Jenkins & Greta Gerwig",
        "publisher": "A24",
        "url": "https://a24films.com/notes/2018/02/episode-01-all-the-way-home-with-barry-jenkins-greta-gerwig"
      },
      {
        "id": "s5",
        "title": "Director Barry Jenkins on the Music That Made Moonlight",
        "publisher": "Pitchfork",
        "url": "https://pitchfork.com/thepitch/1377-director-barry-jenkins-on-the-music-that-made-moonlight/"
      }
    ],
    "questions": [
      {
        "id": "moonlight-camera",
        "area": "camera",
        "prompt": {
          "en": "How can a single-camera approach protect performance momentum?",
          "nb": "Hvordan kan ettkameraopptak bevare skuespillets flyt?",
          "fr": "Comment une approche à une caméra préserve-t-elle l’élan du jeu ?",
          "pt": "Como pode abordagem de uma câmara preservar a dinâmica da interpretação?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan motivated coverage and test proximity with the performers",
              "nb": "Planlegg begrunnet dekning og prøv nærhet med utøverne",
              "fr": "Prévoir des prises motivées et tester la proximité avec les acteurs",
              "pt": "Planear cobertura motivada e testar proximidade com intérpretes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume multiple cameras were used because coverage looks extensive",
              "nb": "Anta at flere kameraer ble brukt fordi dekningen virker omfattende",
              "fr": "Supposer plusieurs caméras parce que la couverture paraît étendue",
              "pt": "Supor várias câmaras porque cobertura parece extensa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose every angle without considering performance rhythm",
              "nb": "Velg alle vinkler uten hensyn til spillerytmen",
              "fr": "Choisir les angles sans considérer le rythme du jeu",
              "pt": "Escolher ângulos sem considerar ritmo da interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Laxton documents a one-camera production and performance-centered decisions. Test proximity and coverage in a short consent-based dialogue scene without claiming exact original setups.",
          "nb": "Laxton dokumenterer ettkameraproduksjon og valg sentrert om skuespillet. Prøv nærhet og dekning i en kort samtykkebasert dialogscene uten å påstå eksakte originaloppsett.",
          "fr": "Laxton documente une caméra unique et des choix centrés sur le jeu. Testez proximité et couverture dans une scène consentie sans inventer les dispositifs originaux.",
          "pt": "Laxton documenta uma câmara e escolhas centradas na interpretação. Teste proximidade e cobertura numa cena consentida sem inventar dispositivos originais."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "moonlight-triptych",
        "area": "research",
        "prompt": {
          "en": "How can three performers convey continuity across life stages?",
          "nb": "Hvordan kan tre utøvere formidle kontinuitet gjennom livsfaser?",
          "fr": "Comment trois interprètes transmettent-ils une continuité entre âges de la vie ?",
          "pt": "Como podem três intérpretes transmitir continuidade entre fases da vida?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Demand identical physical gestures at every life stage",
              "nb": "Krev identiske fysiske gester i alle livsfaser",
              "fr": "Exiger des gestes physiques identiques à chaque âge",
              "pt": "Exigir gestos físicos idênticos em todas as fases"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Apply arbitrary color divisions without considering character",
              "nb": "Bruk vilkårlige fargeinndelinger uten hensyn til karakteren",
              "fr": "Appliquer des divisions chromatiques arbitraires sans considérer le personnage",
              "pt": "Aplicar divisões cromáticas arbitrárias sem considerar personagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare emotional motifs, gestures and character-led color choices",
              "nb": "Sammenlign emosjonelle motiver, gester og karakterstyrte fargevalg",
              "fr": "Comparer motifs émotionnels, gestes et couleurs guidées par le personnage",
              "pt": "Comparar motivos emocionais, gestos e cores guiadas pela personagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jenkins describes emotional continuity across three actors and character-led color collaboration. Create an original triptych study using related emotional motifs rather than identical performances.",
          "nb": "Jenkins beskriver emosjonell kontinuitet mellom tre skuespillere og karakterstyrt fargesamarbeid. Lag en original tredelt studie med beslektede følelsesmotiver fremfor identisk spill.",
          "fr": "Jenkins décrit la continuité émotionnelle entre trois acteurs et la couleur guidée par le personnage. Créez un triptyque original avec motifs apparentés plutôt que jeux identiques.",
          "pt": "Jenkins descreve continuidade emocional entre três atores e cor guiada pela personagem. Crie tríptico original com motivos relacionados em vez de interpretações idênticas."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "moonlight-music",
        "area": "sound",
        "prompt": {
          "en": "How can a musical theme transform across narrative chapters?",
          "nb": "Hvordan kan et musikalsk tema transformeres gjennom fortellingens kapitler?",
          "fr": "Comment un thème musical se transforme-t-il entre chapitres narratifs ?",
          "pt": "Como pode um tema musical transformar-se entre capítulos narrativos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use unrelated themes without considering narrative development",
              "nb": "Bruk urelaterte temaer uten hensyn til fortellingens utvikling",
              "fr": "Employer des thèmes sans rapport avec l’évolution du récit",
              "pt": "Usar temas sem relação com evolução narrativa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop original related motifs and study their cultural context",
              "nb": "Utvikle originale beslektede motiver og undersøk kulturkonteksten",
              "fr": "Développer des motifs originaux apparentés et étudier leur contexte culturel",
              "pt": "Desenvolver motivos originais relacionados e estudar contexto cultural"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat slowing any piece of music as culturally equivalent",
              "nb": "Behandle nedbremsing av vilkårlig musikk som kulturelt identisk",
              "fr": "Traiter tout ralentissement musical comme culturellement équivalent",
              "pt": "Tratar abrandamento de qualquer música como culturalmente equivalente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jenkins describes Britell's script-derived themes and chopped-and-screwed influences rooted in Southern hip-hop. Create original motifs and document the specific cultural reference rather than generalizing the technique.",
          "nb": "Jenkins beskriver Britells manusbaserte temaer og chopped-and-screwed-inspirasjon fra sørstatshiphop. Lag originale motiver og dokumenter den konkrete kulturreferansen fremfor å generalisere teknikken.",
          "fr": "Jenkins décrit les thèmes de Britell et l’influence chopped-and-screwed du hip-hop du Sud. Créez des motifs originaux et documentez la référence culturelle précise.",
          "pt": "Jenkins descreve temas de Britell e influência chopped-and-screwed do hip-hop do Sul. Crie motivos originais e documente a referência cultural específica."
        },
        "sourceIds": [
          "s5",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_i_daniel_blake_2016",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Social research, local casting and chronological revelation",
      "nb": "Sosial research, lokal casting og kronologisk avsløring",
      "fr": "Recherche sociale, casting local et révélation chronologique",
      "pt": "Pesquisa social, elenco local e revelação cronológica"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Ken Loach starts 'I, Daniel Blake' shoot",
        "publisher": "Screen Daily",
        "url": "https://www.screendaily.com/news/ken-loach-starts-i-daniel-blake-shoot/5096060.article"
      },
      {
        "id": "s2",
        "title": "Casting I, Daniel Blake",
        "publisher": "Criterion Collection",
        "url": "https://www.criterion.com/current/posts/5306-casting-i-daniel-blake"
      },
      {
        "id": "s3",
        "title": "Film of the week: I, Daniel Blake",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-i-daniel-blake"
      },
      {
        "id": "s4",
        "title": "Films on film sweep Cannes 2016 as Robbie Ryan BSC shines",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/films-film-sweep-cannes-2016-robbie-ryan-bsc-shines/"
      },
      {
        "id": "s7",
        "title": "Ken Loach and Hayley Squires on making I, Daniel Blake",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/culture/2026/apr/13/ken-loach-made-i-daniel-blake-film-food-banks"
      }
    ],
    "questions": [
      {
        "id": "danielblake-research",
        "area": "research",
        "prompt": {
          "en": "How should welfare procedures be adapted into fictional drama?",
          "nb": "Hvordan bør velferdsprosedyrer bearbeides til fiktivt drama?",
          "fr": "Comment adapter les procédures sociales en fiction ?",
          "pt": "Como adaptar procedimentos sociais à ficção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare documented procedures with interview testimony",
              "nb": "Sammenlign dokumenterte prosedyrer med intervjuvitnesbyrd",
              "fr": "Comparer procédures documentées et témoignages",
              "pt": "Comparar procedimentos documentados e testemunhos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Invent procedures without any research",
              "nb": "Finn på prosedyrer uten å undersøke dem",
              "fr": "Inventer des procédures sans recherche",
              "pt": "Inventar procedimentos sem pesquisa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat one fictional scene as universal evidence",
              "nb": "Behandle én fiktiv scene som universelt bevis",
              "fr": "Traiter une scène fictive comme preuve universelle",
              "pt": "Tratar uma cena fictícia como prova universal"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Laverty's research and the BFI analysis connect administrative processes to dramatic structure. Distinguish sourced procedures from fictional compression.",
          "nb": "Lavertys research og BFI-analysen knytter administrative prosesser til dramaet. Skill dokumenterte prosedyrer fra fiktiv komprimering.",
          "fr": "La recherche de Laverty et l’analyse du BFI relient procédures et drame. Distinguez faits documentés et condensation fictive.",
          "pt": "A pesquisa de Laverty e a análise do BFI ligam procedimentos e drama. Distinga factos documentados de condensação fictícia."
        },
        "sourceIds": [
          "s3",
          "s7"
        ]
      },
      {
        "id": "danielblake-casting",
        "area": "research",
        "prompt": {
          "en": "How can a local ensemble be cast responsibly?",
          "nb": "Hvordan kan et lokalt ensemble castes på en ansvarlig måte?",
          "fr": "Comment constituer un ensemble local de manière responsable ?",
          "pt": "Como selecionar um elenco local de forma responsável?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume regional identity guarantees acting ability",
              "nb": "Anta at regional identitet garanterer skuespillerferdighet",
              "fr": "Supposer que l’origine régionale garantit le talent",
              "pt": "Supor que origem regional garante talento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ask performers to disclose private hardship publicly",
              "nb": "Be utøvere offentliggjøre private vanskeligheter",
              "fr": "Demander aux acteurs de divulguer leurs difficultés privées",
              "pt": "Pedir aos atores que divulguem dificuldades privadas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use supported auditions and respect individual experience",
              "nb": "Bruk tilrettelagte prøver og respekter individuell erfaring",
              "fr": "Prévoir des auditions accompagnées et respecter les expériences",
              "pt": "Prever audições acompanhadas e respeitar experiências individuais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents local casting and novice performers; Screen Daily confirms regional production. Design a consent-based audition without demanding personal disclosure.",
          "nb": "Criterion dokumenterer lokal casting og nybegynnere; Screen Daily bekrefter regional produksjon. Lag en samtykkebasert prøve uten krav om privat utlevering.",
          "fr": "Criterion documente casting local et débutants ; Screen Daily confirme le tournage régional. Concevez une audition consentie sans exiger de confidences.",
          "pt": "A Criterion documenta elenco local e principiantes; Screen Daily confirma rodagem regional. Planeie audição consentida sem exigir confidências."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "danielblake-revelation",
        "area": "camera",
        "prompt": {
          "en": "How can chronological revelation support a performance?",
          "nb": "Hvordan kan kronologisk avsløring støtte skuespillet?",
          "fr": "Comment la révélation chronologique sert-elle le jeu ?",
          "pt": "Como pode revelação cronológica apoiar a interpretação?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume 35mm capture determines actor reactions",
              "nb": "Anta at 35 mm-opptak bestemmer skuespillerreaksjoner",
              "fr": "Supposer que le 35 mm détermine les réactions",
              "pt": "Supor que 35 mm determina reações dos atores"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree on boundaries and introduce fictional information in stages",
              "nb": "Avtal grenser og introduser fiktiv informasjon trinnvis",
              "fr": "Convenir de limites et introduire progressivement les informations fictives",
              "pt": "Acordar limites e introduzir informação fictícia por etapas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Withhold safety information to provoke genuine distress",
              "nb": "Hold tilbake sikkerhetsinformasjon for å fremkalle ekte uro",
              "fr": "Cacher des informations de sécurité pour provoquer la détresse",
              "pt": "Ocultar informação de segurança para provocar sofrimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Loach and Squires describe restricted future-script access. Try staged fictional disclosure with informed consent; never withhold safety information or confuse the approach with film format.",
          "nb": "Loach og Squires beskriver begrenset tilgang til fremtidig manus. Prøv trinnvis fiktiv avsløring med informert samtykke; hold aldri tilbake sikkerhetsinformasjon.",
          "fr": "Loach et Squires décrivent un accès limité au scénario futur. Testez une révélation fictive consentie sans jamais cacher les informations de sécurité.",
          "pt": "Loach e Squires descrevem acesso limitado ao argumento futuro. Teste revelação fictícia consentida sem ocultar informação de segurança."
        },
        "sourceIds": [
          "s7",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_i_am_not_your_negro_2016",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Text-led documentary, archival provenance and rights clearance",
      "nb": "Tekststyrt dokumentar, arkivopphav og rettighetsavklaring",
      "fr": "Documentaire guidé par le texte, provenance et droits",
      "pt": "Documentário guiado pelo texto, proveniência e direitos"
    },
    "sources": [
      {
        "id": "s1",
        "title": "I Am Not Your Negro",
        "publisher": "PBS Independent Lens",
        "url": "https://www.pbs.org/independentlens/documentaries/i-am-not-your-negro/"
      },
      {
        "id": "s2",
        "title": "I Am Not Your Negro Press Kit",
        "publisher": "Magnolia Pictures",
        "url": "https://www.magpictures.com/presskit.aspx?id=9f588349-a711-4eb6-8150-210b7bb6eb80"
      },
      {
        "id": "s3",
        "title": "The AFI FEST Interview: I AM NOT YOUR NEGRO Director Raoul Peck",
        "publisher": "American Film Institute",
        "url": "https://www.afi.com/news/the-afi-fest-interview-i-am-not-your-negro-director-raoul-peck/"
      },
      {
        "id": "s4",
        "title": "The POV Interview: Raoul Peck Talks I Am Not Your Negro",
        "publisher": "POV Magazine",
        "url": "https://povmagazine.com/i-am-not-your-negro-interview/"
      },
      {
        "id": "s5",
        "title": "How Editor Alexandra Strauss Cut an Impossible Film",
        "publisher": "No Film School",
        "url": "https://nofilmschool.com/2017/02/i-am-not-your-negro-oscar-editor-alexandra-strauss-interview"
      },
      {
        "id": "s6",
        "title": "I Am Not Your Negro Remixes James Baldwin with America's Tradition of On-Screen Racism",
        "publisher": "MovieMaker Magazine",
        "url": "https://www.moviemaker.com/i-am-not-your-negro-james-baldwin-tradition-on-screen-racism/"
      }
    ],
    "questions": [
      {
        "id": "iamnotyournegro-text",
        "area": "research",
        "prompt": {
          "en": "How can archival editing remain anchored in an author's text?",
          "nb": "Hvordan kan arkivklipping forankres i en forfatters tekst?",
          "fr": "Comment ancrer le montage d’archives dans le texte d’un auteur ?",
          "pt": "Como ancorar montagem de arquivo no texto de um autor?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map passages to documented images and editorial interpretations",
              "nb": "Knytt tekstpassasjer til dokumenterte bilder og redaksjonelle tolkninger",
              "fr": "Relier passages, images documentées et interprétations éditoriales",
              "pt": "Ligar passagens, imagens documentadas e interpretações editoriais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute newly written commentary to the original author",
              "nb": "Tilskriv nyskrevet kommentar til originalforfatteren",
              "fr": "Attribuer un nouveau commentaire à l’auteur original",
              "pt": "Atribuir comentário novo ao autor original"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose images solely because they look emotionally similar",
              "nb": "Velg bilder bare fordi de virker følelsesmessig like",
              "fr": "Choisir des images uniquement pour leur ressemblance émotionnelle",
              "pt": "Escolher imagens apenas pela semelhança emocional"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Peck describes a Baldwin-centered text-first process and Strauss describes building structure from diverse images. Preserve the distinction between original words and editorial argument.",
          "nb": "Peck beskriver en Baldwin-forankret tekststyrt prosess og Strauss en struktur av ulike bilder. Bevar skillet mellom originalord og redaksjonelt argument.",
          "fr": "Peck décrit une démarche centrée sur Baldwin et Strauss une structure d’images diverses. Distinguez paroles originales et argument éditorial.",
          "pt": "Peck descreve abordagem centrada em Baldwin e Strauss estrutura de imagens diversas. Distinga palavras originais e argumento editorial."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      },
      {
        "id": "iamnotyournegro-rights",
        "area": "research",
        "prompt": {
          "en": "How should archive rights be tracked during a documentary edit?",
          "nb": "Hvordan bør arkivrettigheter registreres under dokumentarklipping?",
          "fr": "Comment suivre les droits d’archives pendant le montage documentaire ?",
          "pt": "Como acompanhar direitos de arquivo na montagem documental?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume public accessibility grants unlimited reuse rights",
              "nb": "Anta at offentlig tilgang gir ubegrenset gjenbruksrett",
              "fr": "Supposer que l’accès public autorise toute réutilisation",
              "pt": "Supor que acesso público permite reutilização ilimitada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove the source log after assembling the first cut",
              "nb": "Fjern kildeloggen etter første klipp",
              "fr": "Supprimer le registre des sources après le premier montage",
              "pt": "Eliminar o registo de fontes após primeira montagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record provenance, permissions and qualified legal review",
              "nb": "Registrer kildeopphav, tillatelser og kvalifisert juridisk vurdering",
              "fr": "Documenter provenance, autorisations et examen juridique qualifié",
              "pt": "Registar proveniência, autorizações e revisão jurídica qualificada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Peck describes estate access, licensing distinctions and legal review across edits. Design a rights ledger; do not assume that one production's legal determination transfers to another.",
          "nb": "Peck beskriver arkivtilgang, lisensforskjeller og juridisk gjennomgang. Lag en rettighetslogg; ikke anta at én produksjons juridiske vurdering gjelder en annen.",
          "fr": "Peck décrit accès aux archives, licences et examen juridique. Créez un registre des droits sans transposer automatiquement une décision juridique.",
          "pt": "Peck descreve acesso a arquivos, licenças e revisão jurídica. Crie registo de direitos sem transferir automaticamente uma decisão jurídica."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "iamnotyournegro-layers",
        "area": "camera",
        "prompt": {
          "en": "How should new documentary footage relate to historical archive images?",
          "nb": "Hvordan bør nye dokumentaropptak forholde seg til historiske arkivbilder?",
          "fr": "Comment relier nouvelles prises documentaires et images d’archives ?",
          "pt": "Como relacionar novas imagens documentais e arquivos históricos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all contextual dates from the editorial records",
              "nb": "Fjern alle kontekstuelle datoer fra klippeloggen",
              "fr": "Supprimer toutes les dates contextuelles des dossiers",
              "pt": "Eliminar datas contextuais dos registos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Label time and provenance while testing meaningful juxtapositions",
              "nb": "Merk tid og kildeopphav og prøv meningsfulle sammenstillinger",
              "fr": "Identifier dates et provenance et tester des rapprochements",
              "pt": "Identificar datas e proveniência e testar justaposições"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present all newly shot images as archival recordings",
              "nb": "Presenter alle nye opptak som arkivopptak",
              "fr": "Présenter toute prise nouvelle comme image d’archives",
              "pt": "Apresentar todas as imagens novas como arquivo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production sources describe deliberate intercutting of contemporary and archival material. Test an original montage that preserves dates and separates documented fact from interpretive juxtaposition.",
          "nb": "Produksjonskildene beskriver bevisst sammenklipping av samtids- og arkivmateriale. Prøv en original montasje som bevarer datoer og skiller fakta fra tolkende sammenstilling.",
          "fr": "Les sources décrivent le montage de prises contemporaines et d’archives. Testez un montage original préservant dates et distinction entre faits et interprétation.",
          "pt": "As fontes descrevem montagem de imagens contemporâneas e de arquivo. Teste montagem original preservando datas e distinguindo factos de interpretação."
        },
        "sourceIds": [
          "s2",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_get_out_2017",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Visual escalation, performance timing and practical-digital effects",
      "nb": "Visuell eskalering, spillerytme og praktisk-digitale effekter",
      "fr": "Escalade visuelle, rythme du jeu et effets hybrides",
      "pt": "Escalada visual, ritmo da interpretação e efeitos híbridos"
    },
    "sources": [
      {
        "id": "s1",
        "title": "GET OUT",
        "publisher": "AFI Catalog",
        "url": "https://catalog.afi.com/Film/70923-GET-OUT"
      },
      {
        "id": "s2",
        "title": "DP Toby Oliver on Get Out, Cheating the Sunken Place and Color Grading Trailers",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/102038-dp-toby-oliver-on-get-out-cheating-the-sunken-place-and-color-grading-trailers/"
      },
      {
        "id": "s3",
        "title": "Get Out — Toby Oliver, ACS",
        "publisher": "American Society of Cinematographers",
        "url": "https://staging.ascmag.com/podcasts/get-out-toby-oliver-acs"
      },
      {
        "id": "s4",
        "title": "Editor Gregory Plotkin on Working With Jordan Peele on Get Out",
        "publisher": "Yahoo Entertainment / Deadline",
        "url": "https://www.yahoo.com/entertainment/editor-gregory-plotkin-working-jordan-180847198.html"
      }
    ],
    "questions": [
      {
        "id": "getout-look",
        "area": "camera",
        "prompt": {
          "en": "How can visual treatment shift from social realism toward horror?",
          "nb": "Hvordan kan bildeuttrykk gå fra sosial realisme mot skrekk?",
          "fr": "Comment passer visuellement du réalisme social à l’horreur ?",
          "pt": "Como passar visualmente do realismo social ao terror?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test gradual changes in light and framing across the scene",
              "nb": "Prøv gradvise endringer i lys og utsnitt gjennom scenen",
              "fr": "Tester des changements progressifs de lumière et cadrage",
              "pt": "Testar mudanças graduais de luz e enquadramento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the same visual intensity for every narrative beat",
              "nb": "Bruk samme visuelle intensitet ved alle dramatiske vendepunkter",
              "fr": "Garder la même intensité visuelle pour chaque moment",
              "pt": "Manter intensidade visual igual em cada momento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a color treatment without reviewing the performance",
              "nb": "Velg fargebehandling uten å vurdere skuespillet",
              "fr": "Choisir un étalonnage sans examiner le jeu",
              "pt": "Escolher gradação sem avaliar interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Oliver describes multiple look treatments and a movement from naturalistic space toward horror. Test a fictional scene with a gradual visual shift rather than copying exact LUT settings.",
          "nb": "Oliver beskriver flere bildeuttrykk og overgang fra naturalisme mot skrekk. Prøv en fiktiv scene med gradvis visuelt skifte uten å kopiere LUT-innstillinger.",
          "fr": "Oliver décrit plusieurs rendus et le passage du naturalisme à l’horreur. Testez une transition fictive sans inventer les réglages LUT.",
          "pt": "Oliver descreve vários visuais e passagem do naturalismo ao terror. Teste transição fictícia sem inventar parâmetros LUT."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "getout-timing",
        "area": "research",
        "prompt": {
          "en": "How can an edit balance comic timing and growing unease?",
          "nb": "Hvordan kan klipping balansere komisk timing og økende uro?",
          "fr": "Comment équilibrer rythme comique et malaise croissant au montage ?",
          "pt": "Como equilibrar ritmo cómico e inquietação crescente na montagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Cut at an identical interval throughout the scene",
              "nb": "Klipp med identisk intervall gjennom hele scenen",
              "fr": "Couper à intervalles identiques dans toute la scène",
              "pt": "Cortar em intervalos idênticos durante a cena"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the actors' timing in favor of a fixed rhythm",
              "nb": "Ignorer skuespillernes timing til fordel for fast rytme",
              "fr": "Ignorer le rythme des acteurs au profit d’un rythme fixe",
              "pt": "Ignorar ritmo dos atores em favor de ritmo fixo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare reaction holds and pauses before selecting a cut",
              "nb": "Sammenlign reaksjonsbilder og pauser før valg av klipp",
              "fr": "Comparer réactions prolongées et pauses avant le choix de coupe",
              "pt": "Comparar reações prolongadas e pausas antes de escolher corte"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Plotkin discusses suspense and comedy timing, longer holds and performance-first editing. Compare alternate cuts of an original neutral conversation.",
          "nb": "Plotkin omtaler spennings- og komedietiming, lengre bilder og spillstyrt klipp. Sammenlign alternative klipp av en original nøytral samtale.",
          "fr": "Plotkin décrit rythme comique, suspense et plans prolongés guidés par le jeu. Comparez plusieurs montages d’une conversation originale neutre.",
          "pt": "Plotkin descreve ritmo cómico, suspense e planos prolongados guiados pela interpretação. Compare montagens de conversa original neutra."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "getout-effects",
        "area": "animation",
        "prompt": {
          "en": "How can an abstract visual effect be tested during editorial?",
          "nb": "Hvordan kan en abstrakt visuell effekt prøves under klipping?",
          "fr": "Comment tester un effet visuel abstrait pendant le montage ?",
          "pt": "Como testar efeito visual abstrato durante montagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Postpone every timing decision until final effects delivery",
              "nb": "Utsett alle timingvalg til endelig effektlevering",
              "fr": "Reporter tous les choix de rythme jusqu’aux effets finaux",
              "pt": "Adiar decisões de ritmo até entrega dos efeitos finais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use safe practical elements and temporary composites for timing",
              "nb": "Bruk trygge praktiske elementer og midlertidige kompositter for timing",
              "fr": "Utiliser des éléments pratiques sûrs et composites temporaires",
              "pt": "Usar elementos práticos seguros e composições temporárias"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the temporary composite is the final visual effect",
              "nb": "Anta at midlertidig kompositt er ferdig visuell effekt",
              "fr": "Supposer que le composite temporaire est l’effet final",
              "pt": "Supor que composição temporária é efeito final"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Oliver describes practical methods for the Sunken Place and Plotkin recalls temporary editorial work. Test an unrelated abstract effect and distinguish temporary from final imagery.",
          "nb": "Oliver beskriver praktiske metoder for Sunken Place og Plotkin midlertidig klippearbeid. Prøv en urelatert abstrakt effekt og skill midlertidige fra endelige bilder.",
          "fr": "Oliver décrit les méthodes pratiques du Sunken Place et Plotkin les essais de montage. Testez un effet abstrait distinct en séparant provisoire et final.",
          "pt": "Oliver descreve métodos práticos do Sunken Place e Plotkin ensaios de montagem. Teste efeito abstrato independente distinguindo temporário e final."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_dunkirk_2017",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Interlocking time, format provenance and integrated sound",
      "nb": "Sammenvevd tid, formatopphav og integrert lyd",
      "fr": "Temps entrecroisés, provenance des formats et son intégré",
      "pt": "Tempos entrecruzados, proveniência dos formatos e som integrado"
    },
    "sources": [
      {
        "id": "s0",
        "title": "WWII on a Grand Scale",
        "publisher": "Directors Guild of America",
        "url": "https://www.dga.org/craft/dgaq/issues/1703-summer-2017/wwii-dunkirk"
      },
      {
        "id": "s1",
        "title": "Kodak large format film enables IMAX and 65mm capture on Christopher Nolan's Dunkirk",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/dunkirk-imax/"
      },
      {
        "id": "s2",
        "title": "Watch Dunkirk Discussion with Hoyte van Hoytema, ASC, FSF, NSC",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/article/dunkirk-discussion-with-hoyte-van-hoytema-asc-fsf-nsc/"
      },
      {
        "id": "s4",
        "title": "Art of the Cut with Lee Smith, ACE on Dunkirk",
        "publisher": "ProVideo Coalition",
        "url": "https://www.provideocoalition.com/art-cut-oscar-nominated-editor-lee-smith-ace-dunkirk/"
      },
      {
        "id": "s5",
        "title": "You Are There: The Realism of Dunkirk",
        "publisher": "Mix",
        "url": "https://www.mixonline.com/sfp/you-are-there-430474"
      },
      {
        "id": "s6",
        "title": "A Life in Pictures: Christopher Nolan",
        "publisher": "BAFTA",
        "url": "https://www.bafta.org/media-centre/press-releases/a-life-in-pictures-christopher-nolan/"
      }
    ],
    "questions": [
      {
        "id": "dunkirk-time",
        "area": "research",
        "prompt": {
          "en": "How can multiple narrative times remain clear in a cross-cut sequence?",
          "nb": "Hvordan kan flere fortellingstider forbli tydelige i en kryssklippet sekvens?",
          "fr": "Comment clarifier plusieurs temporalités dans un montage alterné ?",
          "pt": "Como clarificar várias temporalidades numa montagem alternada?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map each timeline and verify points of convergence",
              "nb": "Kartlegg hver tidslinje og verifiser møtepunktene",
              "fr": "Cartographier chaque temporalité et vérifier les convergences",
              "pt": "Mapear cada linha temporal e verificar convergências"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all intercut events as simultaneous without evidence",
              "nb": "Behandle alle kryssklippede hendelser som samtidige uten dokumentasjon",
              "fr": "Traiter tous les événements alternés comme simultanés sans preuve",
              "pt": "Tratar todos os acontecimentos alternados como simultâneos sem prova"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove timeline markers from the editorial plan",
              "nb": "Fjern tidslinjemerker fra klippeplanen",
              "fr": "Supprimer les repères temporels du plan de montage",
              "pt": "Eliminar marcadores temporais do plano de montagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nolan describes different narrative time frames and Smith uses chronology cards. Design an unrelated three-timeline animatic and test where viewers perceive convergence.",
          "nb": "Nolan beskriver ulike fortellingstider og Smith bruker kronologikort. Lag en urelatert animatic med tre tidslinjer og prøv hvor seerne oppfatter sammenfall.",
          "fr": "Nolan décrit des temporalités distinctes et Smith des cartes chronologiques. Créez une animatique indépendante et testez les convergences perçues.",
          "pt": "Nolan descreve temporalidades distintas e Smith cartões cronológicos. Crie animática independente e teste convergências percebidas."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "dunkirk-format",
        "area": "camera",
        "prompt": {
          "en": "How should different large-format capture records be preserved?",
          "nb": "Hvordan bør ulike storformatopptak dokumenteres?",
          "fr": "Comment conserver les mentions des différents formats de captation ?",
          "pt": "Como preservar registos de diferentes formatos de captação?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all footage was acquired in one film format",
              "nb": "Anta at alle opptak brukte ett filmformat",
              "fr": "Supposer que toutes les prises utilisent un seul format",
              "pt": "Supor que todas as imagens usam um só formato"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Resolve different production estimates by inventing an average",
              "nb": "Løs ulike produksjonsanslag ved å finne på et gjennomsnitt",
              "fr": "Résoudre les estimations divergentes par une moyenne inventée",
              "pt": "Resolver estimativas divergentes inventando média"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record capture format and presentation ratio separately",
              "nb": "Registrer opptaksformat og visningsformat separat",
              "fr": "Documenter séparément captation et ratio de projection",
              "pt": "Registar separadamente captação e proporção de exibição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak and ASC document both 15-perf and 5-perf formats with different IMAX estimates. Preserve the source-specific estimates and distinguish release versions from acquisition.",
          "nb": "Kodak og ASC dokumenterer både 15-perf og 5-perf med ulike IMAX-anslag. Bevar kildespesifikke anslag og skill visningsversjoner fra opptak.",
          "fr": "Kodak et ASC documentent les deux formats et des estimations IMAX distinctes. Préservez les estimations et distinguez diffusion et captation.",
          "pt": "Kodak e ASC documentam ambos formatos e estimativas IMAX distintas. Preserve estimativas e distinga exibição de captação."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "dunkirk-rhythm",
        "area": "sound",
        "prompt": {
          "en": "How can sound bridges link separate narrative timelines?",
          "nb": "Hvordan kan lydbroer knytte sammen ulike fortellingstider?",
          "fr": "Comment des ponts sonores relient-ils des temporalités distinctes ?",
          "pt": "Como podem pontes sonoras ligar temporalidades distintas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat effects, music and editorial rhythm as independent outputs",
              "nb": "Behandle effekter, musikk og klipperytme som uavhengige leveranser",
              "fr": "Traiter effets, musique et rythme comme sorties indépendantes",
              "pt": "Tratar efeitos, música e ritmo como saídas independentes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test original recurring sound motifs across editorial transitions",
              "nb": "Prøv originale tilbakevendende lydmotiver over klippeoverganger",
              "fr": "Tester des motifs sonores originaux entre transitions",
              "pt": "Testar motivos sonoros originais entre transições"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use unrelated music to conceal every chronology change",
              "nb": "Bruk uvedkommende musikk til å skjule alle tidsskifter",
              "fr": "Employer une musique sans rapport pour cacher chaque changement",
              "pt": "Usar música sem relação para esconder mudanças temporais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Smith and Nolan describe sound and score integrated with editorial rhythm. Create a neutral suspense exercise using original sound bridges and assess temporal clarity.",
          "nb": "Smith og Nolan beskriver lyd og musikk integrert med klipperytme. Lag en nøytral spenningsøvelse med originale lydbroer og vurder tidsklarhet.",
          "fr": "Smith et Nolan décrivent son et musique intégrés au rythme. Créez un exercice neutre avec ponts sonores originaux et évaluez la clarté temporelle.",
          "pt": "Smith e Nolan descrevem som e música integrados no ritmo. Crie exercício neutro com pontes sonoras originais e avalie clareza temporal."
        },
        "sourceIds": [
          "s4",
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_florida_project_2017",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Community research, child viewpoint and hybrid color workflow",
      "nb": "Lokalsamfunnsresearch, barneperspektiv og hybrid fargeflyt",
      "fr": "Recherche communautaire, regard enfantin et chaîne couleur hybride",
      "pt": "Pesquisa comunitária, olhar infantil e fluxo cromático híbrido"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Florida Project director, Sean Baker, urges other filmmakers to shoot on film",
        "publisher": "Eastman Kodak Company",
        "url": "https://www.kodak.com/en/motion/blog-post/the-florida-project/"
      },
      {
        "id": "s1",
        "title": "It's a Small World: Sean Baker on The Florida Project, Shooting 35mm and Going Union",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/103243-its-a-small-world/"
      },
      {
        "id": "s2",
        "title": "Interview: Sean Baker",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/interview-sean-baker-florida-project/"
      },
      {
        "id": "s4",
        "title": "The Florida Project Team on the Casting Process and the Power of Cinema",
        "publisher": "Film at Lincoln Center",
        "url": "https://www.filmlinc.org/nyff2017/daily/watch-the-florida-project-team-on-the-casting-process-and-the-power-of-cinema/"
      },
      {
        "id": "s5",
        "title": "Color Plays Big Role in Director Sean Baker's The Florida Project",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/color-plays-big-role-director-sean-bakers-florida-project/"
      },
      {
        "id": "s6",
        "title": "The DP-Colorist Relationship: The Florida Project",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2018/May-1-2018/The-DP-Colorist-Relationship-I-The-Florida-Proje.aspx"
      }
    ],
    "questions": [
      {
        "id": "floridaproject-community",
        "area": "research",
        "prompt": {
          "en": "How should a fictional film research a real community responsibly?",
          "nb": "Hvordan bør en fiksjonsfilm undersøke et virkelig lokalsamfunn ansvarlig?",
          "fr": "Comment documenter une communauté réelle de manière responsable ?",
          "pt": "Como pesquisar comunidade real de forma responsável?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Consult residents and workers with consent and preserve privacy",
              "nb": "Rådfør deg med beboere og ansatte med samtykke og vern privatlivet",
              "fr": "Consulter résidents et travailleurs avec consentement et confidentialité",
              "pt": "Consultar residentes e trabalhadores com consentimento e privacidade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume one news report fully represents the community",
              "nb": "Anta at én nyhetsartikkel representerer hele miljøet",
              "fr": "Supposer qu’un reportage représente toute la communauté",
              "pt": "Supor que uma notícia representa toda a comunidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use identifiable private details without permission",
              "nb": "Bruk identifiserbare private detaljer uten tillatelse",
              "fr": "Utiliser des détails privés identifiables sans autorisation",
              "pt": "Usar detalhes privados identificáveis sem autorização"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak and Film Comment describe field research and the real motel setting. Develop a fictional community study that distinguishes informed observation from invented characters.",
          "nb": "Kodak og Film Comment beskriver feltresearch og det virkelige motellmiljøet. Utvikle en fiktiv miljøstudie som skiller informert observasjon fra oppdiktede karakterer.",
          "fr": "Kodak et Film Comment décrivent recherche de terrain et motel réel. Créez une étude fictive distinguant observation et personnages inventés.",
          "pt": "Kodak e Film Comment descrevem pesquisa de campo e motel real. Crie estudo fictício distinguindo observação de personagens inventadas."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "floridaproject-viewpoint",
        "area": "camera",
        "prompt": {
          "en": "How can a child's viewpoint shape color and performance choices?",
          "nb": "Hvordan kan barneperspektiv forme farge- og spillevalg?",
          "fr": "Comment le regard enfantin façonne-t-il couleur et jeu ?",
          "pt": "Como pode o olhar infantil moldar cor e interpretação?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Demand adult-style emotional performance from children",
              "nb": "Krev voksent følelsesspill fra barn",
              "fr": "Exiger un jeu émotionnel adulte des enfants",
              "pt": "Exigir interpretação emocional adulta de crianças"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a palette unrelated to the character's perspective",
              "nb": "Velg en palett uten forbindelse til karakterperspektivet",
              "fr": "Choisir une palette sans rapport avec le personnage",
              "pt": "Escolher paleta sem relação com a perspetiva da personagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate color tests and age-appropriate supported rehearsal",
              "nb": "Samordne fargeprøver og alderstilpassede tilrettelagte prøver",
              "fr": "Coordonner essais couleur et répétitions adaptées à l’âge",
              "pt": "Coordenar testes de cor e ensaios adaptados à idade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Baker describes coaching and flexible child performance; Zabé describes color balancing childhood perception and adult reality. Plan a neutral viewpoint study with appropriate safeguards.",
          "nb": "Baker beskriver veiledning og fleksibelt barnespill; Zabé beskriver fargebalanse mellom barneblikk og voksenvirkelighet. Planlegg en nøytral perspektivstudie med nødvendige trygghetstiltak.",
          "fr": "Baker décrit accompagnement des enfants et Zabé l’équilibre chromatique des regards enfantin et adulte. Préparez une étude neutre avec protections adaptées.",
          "pt": "Baker descreve acompanhamento infantil e Zabé equilíbrio cromático entre olhares infantil e adulto. Planeie estudo neutro com proteção adequada."
        },
        "sourceIds": [
          "s1",
          "s4",
          "s6"
        ]
      },
      {
        "id": "floridaproject-hybrid",
        "area": "camera",
        "prompt": {
          "en": "How should mixed capture formats be matched during finishing?",
          "nb": "Hvordan bør blandede opptaksformater samordnes under etterarbeid?",
          "fr": "Comment harmoniser des formats de captation mixtes en finition ?",
          "pt": "Como harmonizar formatos de captação mistos no acabamento?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard original formats after matching the final color",
              "nb": "Forkast originalformatene etter fargetilpasning",
              "fr": "Écarter les formats originaux après harmonisation",
              "pt": "Descartar formatos originais após correspondência cromática"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve source records and compare color-matching tests",
              "nb": "Bevar kildeopplysninger og sammenlign fargetilpasningsprøver",
              "fr": "Conserver les mentions sources et comparer des essais colorimétriques",
              "pt": "Preservar registos de origem e comparar testes de correspondência cromática"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Claim every image originated on 35mm film",
              "nb": "Påstå at alle bilder opprinnelig ble tatt på 35 mm",
              "fr": "Affirmer que toutes les images proviennent du 35 mm",
              "pt": "Afirmar que todas as imagens tiveram origem em 35 mm"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Daley documents film stocks, digital night work and phone imagery matched in post. Test matching original clips while retaining the distinction between capture and finishing.",
          "nb": "Daley dokumenterer filmtyper, digitale nattopptak og mobilbilder tilpasset i etterarbeid. Prøv å samordne egne klipp og bevar skillet mellom opptak og ferdigstilling.",
          "fr": "Daley documente pellicules, nuits numériques et images de téléphone harmonisées en postproduction. Testez vos plans en distinguant captation et finition.",
          "pt": "Daley documenta películas, noites digitais e imagens de telefone harmonizadas. Teste planos próprios distinguindo captação e acabamento."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_roma_2018",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Memory-led design, monochrome workflow and offscreen voices",
      "nb": "Minnebasert scenografi, monokrom arbeidsflyt og stemmer utenfor bildet",
      "fr": "Décor guidé par la mémoire, chaîne monochrome et voix hors champ",
      "pt": "Cenografia guiada pela memória, fluxo monocromático e vozes fora de campo"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Roma: Memories of Mexico",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/article/roma-memories-of-mexico/"
      },
      {
        "id": "s2",
        "title": "Roma by Alfonso Cuarón — Production Notes",
        "publisher": "Netflix production notes preserved by in70mm.com",
        "url": "https://www.in70mm.com/presents/1963_blow_up/titel/r/roma/press/index.htm"
      },
      {
        "id": "s3",
        "title": "Editing Roma: An Emotional Journey from Indie to Oscars",
        "publisher": "Frame.io",
        "url": "https://blog.frame.io/2019/02/04/adam-gough-roma/"
      },
      {
        "id": "s4",
        "title": "Skip Lievsay and Craig Henighan on Designing the Sound of Alfonso Cuarón's Roma",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/106491-skip-lievsay-craig-henighan-alfonso-cuaron-roma/"
      },
      {
        "id": "s6",
        "title": "Four Netflix Films Added to the Criterion Collection",
        "publisher": "Netflix",
        "url": "https://about.netflix.com/news/four-netflix-films-added-to-the-criterion-collection"
      }
    ],
    "questions": [
      {
        "id": "roma-memory",
        "area": "research",
        "prompt": {
          "en": "How should personal memory inform a reconstructed period setting?",
          "nb": "Hvordan bør personlige minner informere et rekonstruert tidsmiljø?",
          "fr": "Comment la mémoire personnelle nourrit-elle un décor d’époque ?",
          "pt": "Como pode memória pessoal informar cenário de época?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare remembered details with research and design records",
              "nb": "Sammenlign erindrede detaljer med research og designlogger",
              "fr": "Comparer souvenirs, recherche et dossiers de décor",
              "pt": "Comparar detalhes recordados com pesquisa e registos de design"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every remembered detail is an independently verified fact",
              "nb": "Anta at alle erindrede detaljer er uavhengig bekreftede fakta",
              "fr": "Supposer que chaque souvenir est un fait vérifié indépendamment",
              "pt": "Supor que cada memória é facto verificado independentemente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat reconstructed interiors as unchanged historical locations",
              "nb": "Behandle rekonstruerte interiører som uendrede historiske steder",
              "fr": "Traiter les intérieurs reconstruits comme lieux historiques intacts",
              "pt": "Tratar interiores reconstruídos como locais históricos intactos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC and the production notes document transformed locations and reconstructed family spaces. Build an original memory-based design board separating research, recollection and invention.",
          "nb": "ASC og produksjonsnotatene dokumenterer omformede steder og rekonstruerte familierom. Lag et originalt minnebasert designkart som skiller research, erindring og diktning.",
          "fr": "L’ASC et les notes décrivent des lieux transformés et espaces familiaux reconstruits. Créez une planche distinguant recherche, souvenir et invention.",
          "pt": "A ASC e as notas documentam locais transformados e espaços familiares reconstruídos. Crie painel distinguindo pesquisa, memória e invenção."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "roma-mono",
        "area": "camera",
        "prompt": {
          "en": "How should color acquisition and monochrome editing be linked?",
          "nb": "Hvordan bør fargeopptak og monokrom klipping kobles?",
          "fr": "Comment relier captation couleur et montage monochrome ?",
          "pt": "Como ligar captação a cores e montagem monocromática?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard color originals once monochrome proxies exist",
              "nb": "Forkast fargeoriginaler når monokrome proxyer finnes",
              "fr": "Écarter les originaux couleur dès que les proxys existent",
              "pt": "Descartar originais a cores quando existem proxies"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer acquisition format from the final grayscale image",
              "nb": "Utled opptaksformat fra det ferdige gråtonebildet",
              "fr": "Déduire la captation de l’image finale en niveaux de gris",
              "pt": "Deduzir captação a partir da imagem final em cinzento"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Keep color originals and verify monochrome viewing transforms",
              "nb": "Behold fargeoriginaler og verifiser monokrome visningstransformer",
              "fr": "Conserver les originaux couleur et vérifier les transformations monochromes",
              "pt": "Preservar originais a cores e verificar transformações monocromáticas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cuarón's craft account and Gough's interview distinguish color acquisition, monochrome editorial viewing and finishing. Test the separate stages using a short original clip.",
          "nb": "Cuaróns fagberetning og Goughs intervju skiller fargeopptak, monokrom klippevisning og ferdigstilling. Prøv de separate trinnene med et eget kortklipp.",
          "fr": "Les entretiens de Cuarón et Gough distinguent captation couleur, visionnage monochrome et finition. Testez ces étapes sur un plan original.",
          "pt": "Os relatos de Cuarón e Gough distinguem captação a cores, visualização monocromática e acabamento. Teste etapas num plano original."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "roma-voices",
        "area": "sound",
        "prompt": {
          "en": "How can background voices create an offscreen world?",
          "nb": "Hvordan kan bakgrunnsstemmer skape en verden utenfor bildet?",
          "fr": "Comment les voix de fond créent-elles un monde hors champ ?",
          "pt": "Como podem vozes de fundo criar um mundo fora de campo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume an immersive mix removes the need for sound design",
              "nb": "Anta at rommiks fjerner behovet for lyddesign",
              "fr": "Supposer qu’un mixage immersif dispense de conception sonore",
              "pt": "Supor que mistura imersiva dispensa design sonoro"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Write and record specific background voices for spatial placement",
              "nb": "Skriv og ta opp spesifikke bakgrunnsstemmer for romlig plassering",
              "fr": "Écrire et enregistrer des voix spécifiques pour placement spatial",
              "pt": "Escrever e gravar vozes específicas para colocação espacial"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the same indistinct crowd recording in every setting",
              "nb": "Bruk samme utydelige folkemengdeopptak i alle miljøer",
              "fr": "Utiliser le même brouhaha indistinct dans chaque décor",
              "pt": "Usar a mesma multidão indistinta em todos os ambientes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound team describes specifically written background voices and Atmos placement. Create a fictional sound scene with original voices and deliberate spatial relationships.",
          "nb": "Lydteamet beskriver spesialskrevne bakgrunnsstemmer og Atmos-plassering. Lag en fiktiv lydscene med egne stemmer og bevisste romlige forhold.",
          "fr": "L’équipe son décrit des voix écrites spécifiquement et leur placement Atmos. Créez une scène sonore fictive avec voix originales et relations spatiales.",
          "pt": "A equipa de som descreve vozes escritas especificamente e colocação Atmos. Crie cena sonora fictícia com vozes originais e relações espaciais."
        },
        "sourceIds": [
          "s4",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_cold_war_2018",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Elliptical time, monochrome image tests and musical geography",
      "nb": "Elliptisk tid, monokrome bildeprøver og musikalsk geografi",
      "fr": "Temps elliptique, essais monochromes et géographie musicale",
      "pt": "Tempo elíptico, testes monocromáticos e geografia musical"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Zimna wojna",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/film/21f2d998-4b45-58b0-8661-c649bc2ed11f/zimna-wojna"
      },
      {
        "id": "s2",
        "title": "Opposites Attract: Cold War",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/opposites-attract-cold-war"
      },
      {
        "id": "s3",
        "title": "Lukasz Zal PSC Crafts a Stark Aesthetic for Cold War",
        "publisher": "Codex",
        "url": "https://codex.online/casestudies/Lukasz-Zal-PSC-Crafts-a-Stark-Aesthetic-for-Cold-War"
      },
      {
        "id": "s4",
        "title": "Interview: Pawel Pawlikowski on Cold War",
        "publisher": "Film4",
        "url": "https://www.film4productions.com/news/interview/2018-05/interview-pawel-pawlikowski-cold-war"
      },
      {
        "id": "s5",
        "title": "Cold War",
        "publisher": "Opus Film",
        "url": "https://www.opusfilm.com/films/feature-films/cold-war"
      }
    ],
    "questions": [
      {
        "id": "coldwar-ellipsis",
        "area": "research",
        "prompt": {
          "en": "How can an elliptical story convey change across years?",
          "nb": "Hvordan kan en elliptisk fortelling formidle endring over år?",
          "fr": "Comment un récit elliptique transmet-il le changement sur plusieurs années ?",
          "pt": "Como pode narrativa elíptica transmitir mudança ao longo de anos?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Select turning points and test what viewers infer between them",
              "nb": "Velg vendepunkter og prøv hva publikum utleder mellom dem",
              "fr": "Choisir les tournants et tester les inférences du public",
              "pt": "Selecionar pontos de viragem e testar inferências do público"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every missing year through lengthy narration",
              "nb": "Forklar hvert manglende år med lang fortellerstemme",
              "fr": "Expliquer chaque année absente par une longue narration",
              "pt": "Explicar cada ano ausente com narração longa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all recurring motifs between the episodes",
              "nb": "Fjern alle tilbakevendende motiver mellom episodene",
              "fr": "Supprimer les motifs récurrents entre épisodes",
              "pt": "Eliminar motivos recorrentes entre episódios"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Pawlikowski describes an anti-biopic built through ellipsis. Design a short fictional series of turning points and test whether the omitted intervals remain understandable.",
          "nb": "Pawlikowski beskriver en antibiografi bygget gjennom ellipser. Lag en kort fiktiv serie vendepunkter og prøv om utelatte intervaller forblir forståelige.",
          "fr": "Pawlikowski décrit un anti-biopic elliptique. Créez des tournants fictifs et vérifiez la compréhension des intervalles omis.",
          "pt": "Pawlikowski descreve anti-biografia elíptica. Crie pontos de viragem fictícios e teste compreensão dos intervalos omitidos."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "coldwar-tests",
        "area": "camera",
        "prompt": {
          "en": "How should a monochrome production choose its capture method?",
          "nb": "Hvordan bør en monokrom produksjon velge opptaksmetode?",
          "fr": "Comment une production monochrome choisit-elle sa captation ?",
          "pt": "Como deve produção monocromática escolher método de captação?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a black-and-white image proves film-origin capture",
              "nb": "Anta at svart-hvitt-bildet beviser analogt filmopptak",
              "fr": "Supposer qu’une image monochrome prouve une captation argentique",
              "pt": "Supor que imagem monocromática prova captação em película"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose camera settings solely from the theatrical runtime",
              "nb": "Velg kamerainnstillinger bare ut fra spilletiden",
              "fr": "Choisir les réglages selon la seule durée de projection",
              "pt": "Escolher parâmetros apenas pela duração de exibição"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare acquisition tests through the intended monochrome finish",
              "nb": "Sammenlign opptaksprøver gjennom tilsiktet monokromt etterarbeid",
              "fr": "Comparer essais de captation jusqu’à la finition monochrome",
              "pt": "Comparar testes de captação até acabamento monocromático"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Żal describes film and digital tests; Codex documents color ARRIRAW and monochrome finishing. Compare original test images without confusing acquisition with the final aesthetic.",
          "nb": "Żal beskriver film- og digitalprøver; Codex dokumenterer farge-ARRIRAW og monokrom ferdigstilling. Sammenlign egne prøvebilder uten å blande opptak og slutt­uttrykk.",
          "fr": "Żal décrit essais argentiques et numériques ; Codex documente ARRIRAW couleur et finition monochrome. Comparez vos essais sans confondre captation et esthétique finale.",
          "pt": "Żal descreve testes em película e digitais; Codex documenta ARRIRAW a cores e acabamento monocromático. Compare testes sem confundir captação e estética final."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "coldwar-music",
        "area": "sound",
        "prompt": {
          "en": "How can recurring music express changes of place and time?",
          "nb": "Hvordan kan tilbakevendende musikk uttrykke skifte i sted og tid?",
          "fr": "Comment une musique récurrente exprime-t-elle les changements de lieu et d’époque ?",
          "pt": "Como pode música recorrente exprimir mudanças de lugar e tempo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use unrelated pieces without considering narrative chronology",
              "nb": "Bruk urelaterte stykker uten å vurdere fortellingens kronologi",
              "fr": "Employer des pièces sans rapport avec la chronologie",
              "pt": "Usar peças sem relação com cronologia narrativa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop original motifs with researched musical context",
              "nb": "Utvikle originale motiver med undersøkt musikalsk kontekst",
              "fr": "Développer des motifs originaux dans un contexte musical documenté",
              "pt": "Desenvolver motivos originais com contexto musical pesquisado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every arrangement as culturally interchangeable",
              "nb": "Behandle alle arrangementer som kulturelt utskiftbare",
              "fr": "Traiter tous les arrangements comme culturellement interchangeables",
              "pt": "Tratar arranjos como culturalmente intercambiáveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Pawlikowski describes music as a third character and connects it to geography and time. Create original variations with documented context rather than copying the film's arrangements.",
          "nb": "Pawlikowski beskriver musikk som en tredje karakter knyttet til geografi og tid. Lag originale variasjoner med dokumentert kontekst fremfor å kopiere arrangementene.",
          "fr": "Pawlikowski décrit la musique comme troisième personnage lié au lieu et au temps. Créez des variations originales avec contexte documenté.",
          "pt": "Pawlikowski descreve música como terceira personagem ligada a lugar e tempo. Crie variações originais com contexto documentado."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_burning_2018",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Adaptation, restricted knowledge and patient ambiguity",
      "nb": "Adaptasjon, avgrenset kunnskap og tålmodig tvetydighet",
      "fr": "Adaptation, savoir restreint et ambiguïté patiente",
      "pt": "Adaptação, conhecimento restrito e ambiguidade paciente"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Burning",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/burning/"
      },
      {
        "id": "s1",
        "title": "Burning (2018)",
        "publisher": "Korean Film Council",
        "url": "https://koreanfilm.or.kr/eng/films/index/filmsView.jsp?movieCd=20173202"
      },
      {
        "id": "s2",
        "title": "Lee Chang-dong's Burning on Track to Set Theaters Ablaze in 2018",
        "publisher": "Korean Film Council",
        "url": "https://www.koreanfilm.or.kr/eng/news/news.jsp?blbdComCd=601006&mode=VIEW&seq=4703"
      },
      {
        "id": "s3",
        "title": "Burning review: Lee Changdong's drama sparks with rage and imagination",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/reviews/burning-review-lee-changdongs-drama-sparks-rage-imagination"
      }
    ],
    "questions": [
      {
        "id": "burning-adaptation",
        "area": "research",
        "prompt": {
          "en": "How can a short-story adaptation expand its social world?",
          "nb": "Hvordan kan en novelleadaptasjon utvide sin sosiale verden?",
          "fr": "Comment une adaptation de nouvelle élargit-elle son monde social ?",
          "pt": "Como pode adaptação de conto ampliar o mundo social?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Identify source elements and develop clearly marked new material",
              "nb": "Identifiser kildeelementer og utvikle tydelig merket nytt materiale",
              "fr": "Identifier les éléments sources et développer de nouveaux apports signalés",
              "pt": "Identificar elementos de origem e desenvolver material novo assinalado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute every new scene to the original short story",
              "nb": "Tilskriv alle nye scener til originalnovellen",
              "fr": "Attribuer chaque nouvelle scène à la nouvelle originale",
              "pt": "Atribuir cada nova cena ao conto original"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat adaptation as a literal transcription without interpretation",
              "nb": "Behandle adaptasjon som ordrett gjengivelse uten tolkning",
              "fr": "Traiter l’adaptation comme transcription littérale sans interprétation",
              "pt": "Tratar adaptação como transcrição literal sem interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "KOFIC identifies the Murakami adaptation and BFI discusses its expanded social context. Plan an original adaptation study and label newly created material separately.",
          "nb": "KOFIC identifiserer Murakami-adaptasjonen og BFI omtaler den utvidede sosiale konteksten. Planlegg en original adaptasjonsstudie og merk nyskapt materiale separat.",
          "fr": "KOFIC identifie l’adaptation de Murakami et le BFI son contexte social élargi. Préparez une étude originale et identifiez séparément les apports.",
          "pt": "KOFIC identifica adaptação de Murakami e BFI o contexto social ampliado. Planeie estudo original e identifique material novo separadamente."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "burning-view",
        "area": "camera",
        "prompt": {
          "en": "How can restricted viewpoint preserve uncertainty in a fictional scene?",
          "nb": "Hvordan kan avgrenset perspektiv bevare usikkerhet i en fiktiv scene?",
          "fr": "Comment un point de vue restreint préserve-t-il l’incertitude ?",
          "pt": "Como pode perspetiva restrita preservar incerteza numa cena fictícia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Provide omniscient confirmation of each character suspicion",
              "nb": "Gi allvitende bekreftelse på hver karakters mistanke",
              "fr": "Confirmer chaque soupçon par un regard omniscient",
              "pt": "Confirmar cada suspeita por olhar omnisciente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat ambiguous visual details as proven factual evidence",
              "nb": "Behandle tvetydige visuelle detaljer som bevist fakta",
              "fr": "Traiter les détails ambigus comme preuves établies",
              "pt": "Tratar detalhes ambíguos como provas estabelecidas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Show observable details without confirming every inference",
              "nb": "Vis observerbare detaljer uten å bekrefte alle slutninger",
              "fr": "Montrer des détails observables sans confirmer chaque inférence",
              "pt": "Mostrar detalhes observáveis sem confirmar cada inferência"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI analysis emphasizes restricted viewpoint and constructive ambiguity. Test a neutral fictional scene with observable clues while retaining multiple interpretations; this is formal analysis, not a documented shot recipe.",
          "nb": "BFI-analysen fremhever avgrenset perspektiv og konstruktiv tvetydighet. Prøv en nøytral fiktiv scene med spor og flere tolkninger; dette er formanalyse, ikke en dokumentert bildeoppskrift.",
          "fr": "L’analyse BFI souligne point de vue restreint et ambiguïté. Testez une scène neutre à indices observables et plusieurs interprétations ; analyse formelle, non recette documentée.",
          "pt": "A análise BFI destaca perspetiva restrita e ambiguidade. Teste cena neutra com indícios e várias interpretações; análise formal, não receita documentada."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "burning-duration",
        "area": "sound",
        "prompt": {
          "en": "How can duration and ambient sound leave room for interpretation?",
          "nb": "Hvordan kan varighet og miljølyd gi rom for tolkning?",
          "fr": "Comment durée et ambiance laissent-elles place à l’interprétation ?",
          "pt": "Como podem duração e som ambiente dar espaço à interpretação?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume slow pacing automatically creates meaningful ambiguity",
              "nb": "Anta at langsomt tempo automatisk skaper meningsfull tvetydighet",
              "fr": "Supposer qu’un rythme lent crée automatiquement l’ambiguïté",
              "pt": "Supor que ritmo lento cria automaticamente ambiguidade"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare held compositions and understated ambient cues",
              "nb": "Sammenlign fastholdte utsnitt og diskrete miljølydsignaler",
              "fr": "Comparer cadres prolongés et indices sonores discrets",
              "pt": "Comparar quadros prolongados e indícios sonoros discretos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use explicit musical cues to settle every uncertainty",
              "nb": "Bruk tydelige musikkinnslag til å avgjøre all usikkerhet",
              "fr": "Employer des signaux musicaux explicites pour résoudre toute incertitude",
              "pt": "Usar sinais musicais explícitos para resolver toda incerteza"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "BFI describes patient visual and sonic control, while KOFIC records the production. Compare alternate durations and original ambient layers without inventing technical settings.",
          "nb": "BFI beskriver tålmodig visuell og lydlig kontroll, mens KOFIC dokumenterer produksjonen. Sammenlign alternative varigheter og egne miljølydlag uten å finne på tekniske innstillinger.",
          "fr": "Le BFI analyse la maîtrise patiente de l’image et du son, KOFIC documente la production. Comparez durées et ambiances originales sans inventer de réglages.",
          "pt": "O BFI analisa controlo paciente da imagem e som, KOFIC documenta produção. Compare durações e ambientes originais sem inventar parâmetros."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_shoplifters_2018",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Hybrid set geography, adaptive editing and child performance",
      "nb": "Hybrid scenografi, adaptiv klipping og barneskuespill",
      "fr": "Géographie de décors hybrides, montage adaptatif et jeu enfantin",
      "pt": "Geografia de cenários híbridos, montagem adaptativa e interpretação infantil"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Manbiki Kazoku ('Shoplifters'): Interview with DP Ryuto Kondo",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/ryuto-kondo/"
      },
      {
        "id": "s1",
        "title": "MANBIKI KAZOKU (SHOPLIFTERS)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/manbiki-kazoku/"
      },
      {
        "id": "s2",
        "title": "Is blood enough? Koreeda Hirokazu on makeshift families and Shoplifters",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/interviews/blood-enough-koreeda-hirokazu-makeshift-families-shoplifters"
      },
      {
        "id": "s3",
        "title": "SHOPLIFTERS",
        "publisher": "Foreign Correspondents' Club of Japan",
        "url": "https://www.fccj.or.jp/committee-blog/shoplifters"
      },
      {
        "id": "s4",
        "title": "Foreign Contenders: Shoplifters Director Hirokazu Kore-eda on Father Figures and His Methods of Working with Children",
        "publisher": "MovieMaker Magazine",
        "url": "https://www.moviemaker.com/foreign-contenders-shoplifters-hirokazu-kore-eda/"
      }
    ],
    "questions": [
      {
        "id": "shoplifters-house",
        "area": "research",
        "prompt": {
          "en": "How can a real house and reconstructed interiors feel like one space?",
          "nb": "Hvordan kan et ekte hus og rekonstruerte interiører føles som ett rom?",
          "fr": "Comment une maison réelle et des intérieurs reconstruits forment-ils un seul espace ?",
          "pt": "Como podem casa real e interiores reconstruídos parecer um só espaço?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Match spatial relationships and recurring design features",
              "nb": "Samordne romforbindelser og tilbakevendende designtrekk",
              "fr": "Harmoniser relations spatiales et éléments récurrents",
              "pt": "Harmonizar relações espaciais e elementos recorrentes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the exterior and interiors as unrelated fictional geography",
              "nb": "Behandle eksteriør og interiører som urelatert fiktiv geografi",
              "fr": "Traiter extérieur et intérieurs comme géographies sans rapport",
              "pt": "Tratar exterior e interiores como geografias sem relação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every room was filmed inside the real house",
              "nb": "Anta at alle rom ble filmet inne i det virkelige huset",
              "fr": "Supposer que toutes les pièces ont été filmées dans la maison réelle",
              "pt": "Supor que todas as divisões foram filmadas na casa real"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kore-eda describes combining real house material and recreated interiors. Design a fictional floor plan and distinguish practical location material from constructed sets.",
          "nb": "Kore-eda beskriver kombinasjon av ekte husopptak og gjenskapte interiører. Lag en fiktiv planløsning og skill stedsopptak fra bygde kulisser.",
          "fr": "Kore-eda décrit maison réelle et intérieurs recréés. Concevez un plan fictif distinguant prises en décors réels et constructions.",
          "pt": "Kore-eda descreve casa real e interiores recriados. Crie planta fictícia distinguindo locais reais de cenários construídos."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "shoplifters-dailyedit",
        "area": "camera",
        "prompt": {
          "en": "How can daily editorial review inform a developing shoot?",
          "nb": "Hvordan kan daglig klippegjennomgang informere et opptak i utvikling?",
          "fr": "Comment le montage quotidien nourrit-il un tournage évolutif ?",
          "pt": "Como pode revisão diária de montagem informar rodagem evolutiva?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every provisional edit as a locked final sequence",
              "nb": "Behandle alle foreløpige klipp som låste sluttsekvenser",
              "fr": "Traiter chaque montage provisoire comme séquence définitive",
              "pt": "Tratar montagem provisória como sequência definitiva"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume film acquisition prevents any on-set editorial feedback",
              "nb": "Anta at filmopptak hindrer all klippetilbakemelding på settet",
              "fr": "Supposer que l’argentique interdit tout retour du montage",
              "pt": "Supor que película impede retorno de montagem no set"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review provisional cuts and plan motivated additional coverage",
              "nb": "Gjennomgå foreløpige klipp og planlegg begrunnede tilleggsopptak",
              "fr": "Examiner les montages provisoires et prévoir des prises motivées",
              "pt": "Rever montagens provisórias e planear captação adicional motivada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kondo describes 35mm photography and daily video-assist edits that changed inserts and generated scenes. Test provisional editing with a clear change log.",
          "nb": "Kondo beskriver 35 mm-opptak og daglig klipping fra videoassist som endret innskudd og skapte scener. Prøv foreløpig klipping med tydelig endringslogg.",
          "fr": "Kondo décrit le 35 mm et des montages vidéo quotidiens modifiant inserts et scènes. Testez un montage provisoire avec journal des changements.",
          "pt": "Kondo descreve 35 mm e montagens diárias por vídeo que alteraram inserções e cenas. Teste montagem provisória com registo de mudanças."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "shoplifters-children",
        "area": "research",
        "prompt": {
          "en": "How can child performers be supported without demanding recited delivery?",
          "nb": "Hvordan kan barneskuespillere støttes uten krav om innstudert resitasjon?",
          "fr": "Comment accompagner les enfants sans exiger un jeu récité ?",
          "pt": "Como apoiar intérpretes infantis sem exigir recitação?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat spontaneity as a reason to omit safeguards",
              "nb": "Behandle spontanitet som grunn til å droppe trygghetstiltak",
              "fr": "Traiter la spontanéité comme raison d’omettre les protections",
              "pt": "Tratar espontaneidade como razão para omitir proteção"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use age-appropriate guided play and informed guardian consent",
              "nb": "Bruk alderstilpasset veiledet lek og informert samtykke fra foresatte",
              "fr": "Utiliser jeu guidé adapté à l’âge et consentement parental éclairé",
              "pt": "Usar jogo orientado adequado à idade e consentimento informado dos responsáveis"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Require children to disclose difficult personal experiences",
              "nb": "Krev at barn forteller om vanskelige personlige erfaringer",
              "fr": "Exiger que les enfants révèlent leurs expériences difficiles",
              "pt": "Exigir que crianças revelem experiências pessoais difíceis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kore-eda describes avoiding rote script drilling for inexperienced children. Create a neutral age-appropriate exercise with appropriate safeguards, without assuming the method is universally suitable.",
          "nb": "Kore-eda beskriver å unngå mekanisk manusdrilling for uerfarne barn. Lag en nøytral alderstilpasset øvelse med trygghetstiltak, uten å anta at metoden alltid passer.",
          "fr": "Kore-eda décrit l’évitement de la récitation mécanique. Créez un exercice neutre adapté à l’âge avec protections, sans universaliser la méthode.",
          "pt": "Kore-eda descreve evitar recitação mecânica. Crie exercício neutro adequado à idade com proteção, sem universalizar o método."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_spider_man_into_the_spider_verse_2018",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Animation cadence, graphic rendering and early editorial",
      "nb": "Animasjonsrytme, grafisk rendering og tidlig klipping",
      "fr": "Cadence animée, rendu graphique et montage précoce",
      "pt": "Cadência de animação, renderização gráfica e montagem inicial"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Spider-Man™: Into the Spider-Verse",
        "publisher": "Sony Pictures Imageworks",
        "url": "https://www.imageworks.com/node/1371"
      },
      {
        "id": "s1",
        "title": "Creating A Stylized Universe for Sony's Spider-Man: Into the Spider-Verse",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/creating-stylized-universe-sonys-spider-man-spider-verse"
      },
      {
        "id": "s2",
        "title": "Rewriting the Visual Rule Book on 'Spider-Man: Into the Spider-Verse'",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/rewriting-visual-rule-book-spider-man-spider-verse"
      },
      {
        "id": "s3",
        "title": "ART OF THE CUT on editing Spider-Man: Into the Spider-Verse",
        "publisher": "ProVideo Coalition",
        "url": "https://www.provideocoalition.com/aotc-spiderverse/"
      },
      {
        "id": "s4",
        "title": "The Sound of Spider Man: Into the Spider-Verse",
        "publisher": "SoundWorks Collection",
        "url": "https://next.soundworkscollection.com/posts/the-sound-of-spider-man-into-the-spiderverse"
      }
    ],
    "questions": [
      {
        "id": "spiderverse-cadence",
        "area": "animation",
        "prompt": {
          "en": "How can variable frame cadence express character movement?",
          "nb": "Hvordan kan variabel bildefrekvens i animasjonen uttrykke karakterbevegelse?",
          "fr": "Comment une cadence variable exprime-t-elle le mouvement du personnage ?",
          "pt": "Como pode cadência variável exprimir movimento da personagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare ones and twos while preserving readable motion",
              "nb": "Sammenlign animasjon på enere og toere og bevar lesbar bevegelse",
              "fr": "Comparer animation sur une et deux images en gardant le mouvement lisible",
              "pt": "Comparar animação em uns e dois mantendo movimento legível"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all characters use one fixed animation cadence",
              "nb": "Anta at alle karakterer bruker én fast animasjonsrytme",
              "fr": "Supposer que tous les personnages suivent une cadence fixe",
              "pt": "Supor que todas as personagens usam cadência fixa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every held frame as an accidental technical error",
              "nb": "Behandle hvert fastholdt bilde som en tilfeldig teknisk feil",
              "fr": "Traiter chaque image tenue comme erreur technique",
              "pt": "Tratar cada imagem mantida como erro técnico"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Imageworks and editorial reporting document flexible stepped animation. Create original movement tests with differing exposure cadence rather than applying one rule to every shot.",
          "nb": "Imageworks og klippekilder dokumenterer fleksibel trinnvis animasjon. Lag egne bevegelsesprøver med ulik bilderytme fremfor å bruke én regel på alle bilder.",
          "fr": "Imageworks et les sources de montage décrivent une animation à cadence flexible. Créez des essais originaux avec différentes cadences sans règle universelle.",
          "pt": "Imageworks e fontes de montagem documentam animação em cadência flexível. Crie testes originais com cadências distintas sem regra universal."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s3"
        ]
      },
      {
        "id": "spiderverse-graphics",
        "area": "animation",
        "prompt": {
          "en": "How can a graphic print-inspired look be integrated into a CG pipeline?",
          "nb": "Hvordan kan et grafisk trykkinspirert uttrykk integreres i en CG-arbeidsflyt?",
          "fr": "Comment intégrer un rendu inspiré de l’imprimé à une chaîne CG ?",
          "pt": "Como integrar visual inspirado em impressão num fluxo CG?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Add one generic filter after all rendering is finished",
              "nb": "Legg på ett generisk filter når all rendering er ferdig",
              "fr": "Ajouter un filtre générique après tout le rendu",
              "pt": "Adicionar filtro genérico após toda renderização"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume hand-drawn effects exclude three-dimensional simulation",
              "nb": "Anta at håndtegnede effekter utelukker tredimensjonal simulering",
              "fr": "Supposer que les effets dessinés excluent la simulation 3D",
              "pt": "Supor que efeitos desenhados excluem simulação tridimensional"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test line work, halftones and compositing as coordinated stages",
              "nb": "Prøv linjer, rasterpunkter og kompositering som samordnede trinn",
              "fr": "Tester traits, trames et compositing comme étapes coordonnées",
              "pt": "Testar linhas, meios-tons e composição como etapas coordenadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Imageworks and AWN document coordinated line work, print-inspired texture, simulation and artist-led compositing. Build a small original graphic test with distinct controllable layers.",
          "nb": "Imageworks og AWN dokumenterer samordnet linjearbeid, trykktekstur, simulering og kunstnerstyrt kompositering. Lag en liten original grafisk prøve med separate kontrollerbare lag.",
          "fr": "Imageworks et AWN documentent traits, texture imprimée, simulation et compositing artistique. Créez un essai graphique original avec couches contrôlables.",
          "pt": "Imageworks e AWN documentam linhas, textura impressa, simulação e composição artística. Crie teste gráfico original com camadas controláveis."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "spiderverse-editorial",
        "area": "sound",
        "prompt": {
          "en": "How can early editorial and sound protect emotion during animation revisions?",
          "nb": "Hvordan kan tidlig klipp og lyd bevare følelser gjennom animasjonsrevisjoner?",
          "fr": "Comment montage et son précoces préservent-ils l’émotion durant les révisions ?",
          "pt": "Como podem montagem e som iniciais preservar emoção durante revisões?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard previous versions after every animation revision",
              "nb": "Forkast tidligere versjoner etter hver animasjonsrevisjon",
              "fr": "Écarter les versions précédentes après chaque révision",
              "pt": "Descartar versões anteriores após cada revisão"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare animatic versions with original temporary sound cues",
              "nb": "Sammenlign animatic-versjoner med egne midlertidige lydinnslag",
              "fr": "Comparer versions d’animatique avec sons provisoires originaux",
              "pt": "Comparar versões de animática com sons temporários originais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Wait until final rendering to test all story timing",
              "nb": "Vent til endelig rendering med å prøve fortellingens timing",
              "fr": "Attendre le rendu final pour tester le rythme du récit",
              "pt": "Esperar renderização final para testar ritmo narrativo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Fisher describes editorial involvement from story development and SoundWorks describes character-specific sound. Test a versioned animatic with original temporary cues before detailed production.",
          "nb": "Fisher beskriver klipp fra fortellingsutviklingen og SoundWorks karakterspesifikk lyd. Prøv en versjonert animatic med egne midlertidige innslag før detaljert produksjon.",
          "fr": "Fisher décrit le montage dès le développement et SoundWorks les sons propres aux personnages. Testez une animatique versionnée avec sons originaux provisoires.",
          "pt": "Fisher descreve montagem desde desenvolvimento e SoundWorks sons próprios das personagens. Teste animática versionada com sons originais temporários."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_parasite_2019",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Designed geography, selective coverage and acoustic detail",
      "nb": "Konstruert geografi, selektiv dekning og akustiske detaljer",
      "fr": "Géographie construite, prises sélectives et détails acoustiques",
      "pt": "Geografia construída, captação seletiva e detalhes acústicos"
    },
    "sources": [
      {
        "id": "s3",
        "title": "ARRI SkyPanel shines in Academy Award-winning film Parasite",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-skypanel-shines-in-academy-award-winning-film-parasite-"
      },
      {
        "id": "s4",
        "title": "How Parasite production designer Lee Ha Jun built the film's iconic house",
        "publisher": "Screen Daily",
        "url": "https://www.screendaily.com/features/how-parasite-production-designer-lee-ha-jun-built-the-films-iconic-house/5146742.article"
      },
      {
        "id": "s5",
        "title": "Parasite Editor Jinmo Yang Teaches Us How to Edit Without Coverage",
        "publisher": "No Film School",
        "url": "https://nofilmschool.com/parasite-editor-interview"
      },
      {
        "id": "s6",
        "title": "ART OF THE CUT with the editor of 2019 Cannes Palme d'Or winner Parasite",
        "publisher": "ProVideo Coalition",
        "url": "https://www.provideocoalition.com/aotc-parasite/"
      },
      {
        "id": "s7",
        "title": "Perfecting Parasite's award-winning sound - with Ralph Tae-Young Choi",
        "publisher": "A Sound Effect",
        "url": "https://www.asoundeffect.com/parasite-sound/"
      }
    ],
    "questions": [
      {
        "id": "parasite-space",
        "area": "research",
        "prompt": {
          "en": "How can a set be designed around camera and actor movement?",
          "nb": "Hvordan kan en kulisse utformes rundt kamera- og skuespillerbevegelse?",
          "fr": "Comment concevoir un décor autour des mouvements caméra et acteurs ?",
          "pt": "Como conceber um cenário em torno dos movimentos da câmara e dos atores?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test sightlines and blocking with a scaled floor plan",
              "nb": "Prøv siktlinjer og blokkering med en målsatt plan",
              "fr": "Tester axes visuels et déplacements sur un plan à l’échelle",
              "pt": "Testar linhas de visão e marcações numa planta à escala"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose room dimensions without considering camera placement",
              "nb": "Velg rommål uten å vurdere kameraplassering",
              "fr": "Choisir les dimensions sans considérer la caméra",
              "pt": "Escolher dimensões sem considerar a câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every interior was an existing location",
              "nb": "Anta at alle interiører var eksisterende steder",
              "fr": "Supposer que tous les intérieurs existaient déjà",
              "pt": "Supor que todos os interiores já existiam"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lee Ha-jun describes camera-led construction and vertical spatial design. Develop a new set plan that coordinates framing and movement.",
          "nb": "Lee Ha-jun beskriver kamerastyrt bygging og vertikal romdesign. Utform en ny kulisseplan som samordner utsnitt og bevegelse.",
          "fr": "Lee Ha-jun décrit une construction guidée par la caméra et la verticalité. Concevez un décor coordonnant cadre et mouvement.",
          "pt": "Lee Ha-jun descreve construção guiada pela câmara e verticalidade. Conceba cenário que coordene enquadramento e movimento."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "parasite-coverage",
        "area": "camera",
        "prompt": {
          "en": "How can planned coverage protect precise dramatic timing?",
          "nb": "Hvordan kan planlagt dekning bevare presis dramatisk timing?",
          "fr": "Comment des prises planifiées préservent-elles le rythme dramatique ?",
          "pt": "Como pode captação planeada preservar ritmo dramático?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Record arbitrary angles with no intended editorial purpose",
              "nb": "Ta opp vilkårlige vinkler uten klippeformål",
              "fr": "Filmer des angles arbitraires sans fonction au montage",
              "pt": "Filmar ângulos arbitrários sem função na montagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every scene requires a conventional master shot",
              "nb": "Anta at alle scener krever et konvensjonelt totalbilde",
              "fr": "Supposer que chaque scène exige un plan maître",
              "pt": "Supor que cada cena exige um plano geral mestre"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Storyboard essential angles and compare performance timing",
              "nb": "Lag storyboard for nødvendige vinkler og sammenlign spillerytme",
              "fr": "Prévoir les angles essentiels et comparer le rythme du jeu",
              "pt": "Planear ângulos essenciais e comparar ritmo da interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Yang Jin-mo describes extensive storyboarding and unconventional coverage. Test a short scene with selected angles and verify its editability.",
          "nb": "Yang Jin-mo beskriver omfattende storyboard og uvanlig dekning. Prøv en kort scene med utvalgte vinkler og verifiser klippbarheten.",
          "fr": "Yang Jin-mo décrit un découpage poussé et des prises atypiques. Testez une scène courte avec des angles choisis.",
          "pt": "Yang Jin-mo descreve storyboard detalhado e captação atípica. Teste uma cena curta com ângulos selecionados."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "parasite-doors",
        "area": "sound",
        "prompt": {
          "en": "How can sounds distinguish different fictional homes?",
          "nb": "Hvordan kan lyder skille ulike fiktive hjem?",
          "fr": "Comment les sons distinguent-ils des foyers fictifs ?",
          "pt": "Como podem sons distinguir casas fictícias?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the sound notes created during picture editing",
              "nb": "Ignorer lydnotatene fra bildeklippen",
              "fr": "Ignorer les notes son du montage image",
              "pt": "Ignorar notas de som da montagem de imagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record distinct door and room sounds for each setting",
              "nb": "Ta opp særpregede dør- og romlyder for hvert miljø",
              "fr": "Enregistrer portes et ambiances distinctes pour chaque lieu",
              "pt": "Gravar portas e ambientes distintos para cada local"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reuse an identical door sound in every environment",
              "nb": "Gjenbruk identisk dørlyd i alle miljøer",
              "fr": "Réutiliser le même son de porte partout",
              "pt": "Reutilizar o mesmo som de porta em todos os locais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Choi describes distinct door sounds and location acoustics, while Yang describes temporary sound in editorial. Compare original acoustic signatures in an exercise.",
          "nb": "Choi beskriver særegne dørlyder og stedsakustikk, mens Yang beskriver midlertidig lyd i klippen. Sammenlign originale akustiske signaturer.",
          "fr": "Choi décrit des portes et acoustiques distinctes, Yang le son provisoire. Comparez des signatures acoustiques originales.",
          "pt": "Choi descreve portas e acústicas distintas, Yang o som provisório. Compare assinaturas acústicas originais."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_irishman_2019",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Hybrid capture, performance-preserving effects and temporal editing",
      "nb": "Hybridopptak, spillbevarende effekter og tidsklipping",
      "fr": "Captation hybride, effets préservant le jeu et montage temporel",
      "pt": "Captação híbrida, efeitos que preservam interpretação e montagem temporal"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Rodrigo Prieto ASC, AMC on shooting The Irishman",
        "publisher": "ARRI Rental",
        "url": "https://www.arrirental.com/en/about/overview/news/rodrigo-prieto-asc-amc-on-shooting-the-irishman"
      },
      {
        "id": "s2",
        "title": "Martin Scorsese and DP Rodrigo Prieto harness Kodak film and digital capture on The Irishman",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/martin-scorsese-the-irishman/"
      },
      {
        "id": "s3",
        "title": "The Irishman",
        "publisher": "Industrial Light & Magic",
        "url": "https://www.ilm.com/vfx/the-irishman/"
      },
      {
        "id": "s4",
        "title": "The Irishman's Oscar-Nominated Editor Thelma Schoonmaker on her 53-year Collaboration with Martin Scorsese",
        "publisher": "Motion Picture Association – The Credits",
        "url": "https://www.motionpictures.org/2020/01/the-irishmans-oscar-nominated-editor-thelma-schoonmaker-on-her-53-year-collaboration-with-martin-scorsese/"
      },
      {
        "id": "s5",
        "title": "Tom Fleischman and Sound Editors Eugene Gearty and Philip Stockton Reveal the Silent Secrets of The Irishman",
        "publisher": "CineMontage / Motion Picture Editors Guild",
        "url": "https://cinemontage.org/tom-fleischman-and-sound-editors-eugene-gearty-and-phillip-stockton-reveal-the-silent-secrets-of-the-irishman/"
      }
    ],
    "questions": [
      {
        "id": "irishman-hybrid",
        "area": "camera",
        "prompt": {
          "en": "How should hybrid film and digital acquisition be documented?",
          "nb": "Hvordan bør hybride film- og digitalopptak dokumenteres?",
          "fr": "Comment documenter une captation mixte argentique et numérique ?",
          "pt": "Como documentar captação híbrida em película e digital?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Track each capture method and its intended finishing path",
              "nb": "Registrer hver opptaksmetode og planlagt ferdigstilling",
              "fr": "Suivre chaque méthode de captation et sa finition prévue",
              "pt": "Registar cada método de captação e acabamento previsto"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Declare every shot digital because effects were used",
              "nb": "Erklær alle bilder digitale fordi effekter ble brukt",
              "fr": "Déclarer tous les plans numériques à cause des effets",
              "pt": "Declarar todos os planos digitais devido aos efeitos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat film and digital source records as interchangeable",
              "nb": "Behandle film- og digitalkilder som utskiftbare",
              "fr": "Traiter les sources argentiques et numériques comme interchangeables",
              "pt": "Tratar fontes em película e digitais como intercambiáveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ARRI and Kodak describe a custom digital rig and separate 35mm work. Preserve capture provenance instead of inferring one format for every shot.",
          "nb": "ARRI og Kodak beskriver en digital spesialrigg og separate 35 mm-opptak. Bevar opptaksopphav fremfor å anta ett format for alle bilder.",
          "fr": "ARRI et Kodak décrivent un dispositif numérique et des prises 35 mm séparées. Préservez la provenance sans généraliser.",
          "pt": "ARRI e Kodak descrevem dispositivo digital e captação 35 mm separada. Preserve proveniência sem generalizar."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "irishman-face",
        "area": "animation",
        "prompt": {
          "en": "How can facial effects preserve the original acting choices?",
          "nb": "Hvordan kan ansiktseffekter bevare skuespillerens opprinnelige valg?",
          "fr": "Comment les effets faciaux préservent-ils les choix de jeu ?",
          "pt": "Como podem efeitos faciais preservar escolhas de interpretação?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace every expression with a generic facial template",
              "nb": "Erstatt alle uttrykk med en generisk ansiktsmal",
              "fr": "Remplacer chaque expression par un modèle facial générique",
              "pt": "Substituir cada expressão por modelo facial genérico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Judge the result without consulting the photographed performance",
              "nb": "Vurder resultatet uten å se det fotograferte spillet",
              "fr": "Juger le résultat sans consulter le jeu filmé",
              "pt": "Avaliar resultado sem consultar interpretação filmada"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review consented performance references against effect versions",
              "nb": "Sammenlign samtykkebaserte spillreferanser med effektversjoner",
              "fr": "Comparer des références de jeu consenties aux versions d’effets",
              "pt": "Comparar referências consentidas de interpretação com versões de efeitos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ILM describes markerless performance capture and Schoonmaker discusses editorial review of facial detail. Test a consented fictional transformation while retaining the original performance.",
          "nb": "ILM beskriver markørløs registrering og Schoonmaker klippegjennomgang av ansiktsdetaljer. Prøv en samtykkebasert fiktiv forvandling og bevar originalspillet.",
          "fr": "ILM décrit une captation sans marqueurs et Schoonmaker la revue du jeu facial. Testez une transformation consentie en préservant le jeu original.",
          "pt": "ILM descreve captação sem marcadores e Schoonmaker revisão facial na montagem. Teste transformação consentida preservando interpretação original."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s4"
        ]
      },
      {
        "id": "irishman-time",
        "area": "research",
        "prompt": {
          "en": "How can abrupt temporal shifts remain emotionally coherent?",
          "nb": "Hvordan kan brå tidsskifter forbli emosjonelt sammenhengende?",
          "fr": "Comment des sauts temporels brusques restent-ils émotionnellement cohérents ?",
          "pt": "Como podem saltos temporais abruptos manter coerência emocional?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume sound must fill every silent pause",
              "nb": "Anta at lyd må fylle hver stille pause",
              "fr": "Supposer que le son doit combler chaque silence",
              "pt": "Supor que som deve preencher cada silêncio"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare recurring gestures and restrained sound across time jumps",
              "nb": "Sammenlign tilbakevendende gester og dempet lyd over tidshopp",
              "fr": "Comparer gestes récurrents et son retenu entre les époques",
              "pt": "Comparar gestos recorrentes e som contido entre épocas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every transition with unrelated narration",
              "nb": "Forklar hver overgang med urelatert fortellerstemme",
              "fr": "Expliquer chaque transition par une narration sans rapport",
              "pt": "Explicar cada transição com narração sem relação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schoonmaker discusses abrupt transitions and the sound team describes restraint. Test a short original time-jump montage and assess the emotional link.",
          "nb": "Schoonmaker beskriver brå overganger og lydteamet tilbakeholdenhet. Prøv en kort original tidshoppmontasje og vurder følelsessammenhengen.",
          "fr": "Schoonmaker décrit des transitions abruptes et l’équipe son la retenue. Testez un montage temporel original et son lien émotionnel.",
          "pt": "Schoonmaker descreve transições abruptas e a equipa de som contenção. Teste montagem temporal original e ligação emocional."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_1917_2019",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Rehearsal-led space, continuous illusion and editorial feedback",
      "nb": "Prøvestyrt rom, kontinuitetsillusjon og klippetilbakemelding",
      "fr": "Espace guidé par les répétitions, continuité et retour du montage",
      "pt": "Espaço guiado por ensaios, continuidade e retorno da montagem"
    },
    "sources": [
      {
        "id": "s1",
        "title": "The immersive camera movement of 1917",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/the-immersive-camera-movement-of-1917-"
      },
      {
        "id": "s2",
        "title": "How Cinematographer Roger Deakins & Team Pulled Off the One-Shot Masterpiece 1917",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2019/12/how-cinematographer-roger-deakins-team-pulled-off-the-one-shot-masterpiece-1917/"
      },
      {
        "id": "s3",
        "title": "1917's Production Designer on Building a World at War",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2020/01/1917s-production-designer-on-building-a-world-at-war/"
      },
      {
        "id": "s4",
        "title": "How Editor Lee Smith & Sound Editor Oliver Tarney Crafted the Immersive Story of 1917",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2020/01/how-editor-lee-smith-sound-editor-oliver-tarney-crafted-the-immersive-story-of-1917/"
      },
      {
        "id": "s5",
        "title": "1917's Oscar-Nominated VFX Supervisor on Creating Relentless Immersion",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2020/01/1917s-oscar-nominated-vfx-supervisor-on-creating-relentless-immersion/"
      },
      {
        "id": "s6",
        "title": "Screenwriter Krysty Wilson-Cairns on Helping Sam Mendes Write the WWI Epic 1917",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2019/12/screenwriter-krysty-wilson-cairns-on-helping-sam-mendes-write-the-wwi-epic-1917/"
      }
    ],
    "questions": [
      {
        "id": "film1917-distance",
        "area": "research",
        "prompt": {
          "en": "How can rehearsal determine the dimensions of a moving-camera set?",
          "nb": "Hvordan kan prøver bestemme dimensjonene i en kulisse for bevegelig kamera?",
          "fr": "Comment les répétitions déterminent-elles les dimensions d’un décor mobile ?",
          "pt": "Como podem ensaios determinar dimensões de um cenário para câmara móvel?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Measure neutral scene duration and adapt a safe rehearsal space",
              "nb": "Mål varigheten av en nøytral scene og tilpass et trygt prøverom",
              "fr": "Mesurer une scène neutre et adapter un espace de répétition sûr",
              "pt": "Medir duração de cena neutra e adaptar espaço de ensaio seguro"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Build all sets before discussing actor or camera movement",
              "nb": "Bygg alle kulisser før skuespiller- og kamerabevegelse diskuteres",
              "fr": "Construire tous les décors avant de discuter des mouvements",
              "pt": "Construir cenários antes de discutir movimentos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every scripted page demands an identical physical distance",
              "nb": "Anta at hver manusside krever identisk fysisk avstand",
              "fr": "Supposer que chaque page exige une distance identique",
              "pt": "Supor que cada página exige distância idêntica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Production accounts describe rehearsal-led dimensions and continuous duration from writing onward. Test this relationship in a neutral walking scene, not a recreation of combat.",
          "nb": "Produksjonskildene beskriver prøvestyrte dimensjoner og sammenhengende varighet fra manusstadiet. Prøv sammenhengen i en nøytral gåscene, ikke en gjenskaping av kamp.",
          "fr": "Les sources décrivent des dimensions issues des répétitions et une durée continue dès l’écriture. Testez dans une marche neutre, sans reconstituer de combat.",
          "pt": "As fontes descrevem dimensões guiadas por ensaios e duração contínua desde a escrita. Teste numa caminhada neutra, sem recriar combate."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s6"
        ]
      },
      {
        "id": "film1917-joins",
        "area": "camera",
        "prompt": {
          "en": "How should a continuous-looking sequence be verified in editorial?",
          "nb": "Hvordan bør en tilsynelatende sammenhengende sekvens verifiseres i klippen?",
          "fr": "Comment vérifier au montage une séquence apparemment continue ?",
          "pt": "Como verificar na montagem sequência aparentemente contínua?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Claim apparent continuity proves there are no edits",
              "nb": "Påstå at opplevd kontinuitet beviser fravær av klipp",
              "fr": "Affirmer que la continuité apparente prouve l’absence de coupes",
              "pt": "Afirmar que continuidade aparente prova ausência de cortes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore changes in camera motion at transitions",
              "nb": "Ignorer kamerabevegelsens endringer ved overganger",
              "fr": "Ignorer les variations de mouvement aux raccords",
              "pt": "Ignorar mudanças de movimento nas transições"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare planned transitions and document the actual joins",
              "nb": "Sammenlign planlagte overganger og dokumenter faktiske skjøter",
              "fr": "Comparer raccords prévus et documenter les jonctions réelles",
              "pt": "Comparar transições previstas e documentar junções reais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editorial and VFX accounts describe seam protection and invisible joins. Compare an original neutral sequence and its source clips to distinguish perception from construction.",
          "nb": "Klipp- og effektkildene beskriver beskyttelse av skjøter og usynlige overganger. Sammenlign en original nøytral sekvens og kildeklippene for å skille opplevelse fra konstruksjon.",
          "fr": "Les sources montage et VFX décrivent des raccords invisibles. Comparez une séquence neutre et ses prises sources pour distinguer perception et construction.",
          "pt": "Fontes de montagem e efeitos descrevem junções invisíveis. Compare sequência neutra e tomadas originais para distinguir perceção de construção."
        },
        "sourceIds": [
          "s1",
          "s4",
          "s5"
        ]
      },
      {
        "id": "film1917-sound",
        "area": "sound",
        "prompt": {
          "en": "How can sound density change during a continuous scene?",
          "nb": "Hvordan kan lydtetthet endres i en sammenhengende scene?",
          "fr": "Comment la densité sonore varie-t-elle dans une scène continue ?",
          "pt": "Como pode densidade sonora variar numa cena contínua?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat continuous imagery as requiring continuous music",
              "nb": "Behandle sammenhengende bilder som krav om kontinuerlig musikk",
              "fr": "Supposer que la continuité visuelle impose une musique continue",
              "pt": "Supor que continuidade visual exige música contínua"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan contrasting layers and review changes with picture editorial",
              "nb": "Planlegg kontrasterende lag og vurder endringer sammen med bildeklipp",
              "fr": "Prévoir des couches contrastées et revoir les variations au montage",
              "pt": "Planear camadas contrastantes e rever mudanças na montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep every ambient layer equally loud throughout",
              "nb": "Hold alle miljølydlag like høye hele tiden",
              "fr": "Garder toutes les ambiances au même niveau",
              "pt": "Manter todas as camadas ambientais igualmente altas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The department accounts describe sound infrastructure and deliberate density modulation. Test a neutral soundscape with changing focus in a short scene.",
          "nb": "Avdelingskildene beskriver lydinfrastruktur og bevisst variasjon i tetthet. Prøv et nøytralt lydlandskap med skiftende fokus i en kort scene.",
          "fr": "Les équipes décrivent infrastructure et modulation sonore. Testez un paysage sonore neutre avec variations d’attention.",
          "pt": "As equipas descrevem infraestrutura e modulação sonora. Teste paisagem sonora neutra com foco variável."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_portrait_of_a_lady_on_fire_2019",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Portrait lighting, memory structure and sparse music",
      "nb": "Portrettlys, minnestruktur og sparsom musikk",
      "fr": "Lumière du portrait, mémoire et musique rare",
      "pt": "Luz de retrato, memória e música esparsa"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Portrait de la jeune fille en feu (Portrait of a Lady on Fire)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/portrait-de-la-jeune-fille-en-feu/"
      },
      {
        "id": "s1",
        "title": "Screenwriters' Lecture Series 2019: Céline Sciamma",
        "publisher": "BAFTA",
        "url": "https://www.bafta.org/media-centre/press-releases/screenwriters-lecture-series-2019-celine-sciamma/"
      },
      {
        "id": "s2",
        "title": "Claire Mathon AFC on Portrait of a Lady on Fire",
        "publisher": "RED Digital Cinema",
        "url": "https://www.reddigitalcinema.com/stories/claire-mathon-afc"
      },
      {
        "id": "s3",
        "title": "Claire Mathon AFC: Portrait of a Lady on Fire",
        "publisher": "Film and Digital Times",
        "url": "https://www.fdtimes.com/2020/05/17/claire-mathon-afc-portrait-of-a-lady-on-fire/"
      },
      {
        "id": "s4",
        "title": "Interview: Céline Sciamma on Portrait of a Lady on Fire",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/article/interview-celine-sciamma-portrait-of-a-lady-on-fire/"
      },
      {
        "id": "s5",
        "title": "Portrait of a Lady on Fire",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/30469-portrait-of-a-lady-on-fire"
      }
    ],
    "questions": [
      {
        "id": "portraitfire-portrait",
        "area": "camera",
        "prompt": {
          "en": "How can portrait photography coordinate lighting and painted reference?",
          "nb": "Hvordan kan portrettfotografi samordne lys og maleriske referanser?",
          "fr": "Comment la photographie de portrait coordonne-t-elle lumière et peinture ?",
          "pt": "Como pode fotografia de retrato coordenar luz e referências pictóricas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test soft facial light and tonal relationships with original references",
              "nb": "Prøv mykt ansiktslys og toneforhold med egne referanser",
              "fr": "Tester lumière douce et rapports tonals avec des références originales",
              "pt": "Testar luz suave e relações tonais com referências originais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose every lighting decision solely by camera resolution",
              "nb": "Velg alle lysbeslutninger bare etter kameraoppløsning",
              "fr": "Choisir l’éclairage uniquement selon la résolution caméra",
              "pt": "Escolher iluminação apenas pela resolução da câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the film's paintings as generic background decorations",
              "nb": "Behandle filmens malerier som generisk bakgrunnspynt",
              "fr": "Traiter les peintures comme décor générique",
              "pt": "Tratar pinturas como decoração genérica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mathon describes facial lighting and camera tests; Criterion documents the film's artwork. Make a new portrait study with coordinated visual references.",
          "nb": "Mathon beskriver ansiktslys og kameraprøver; Criterion dokumenterer filmens malerier. Lag en ny portrettstudie med samordnede visuelle referanser.",
          "fr": "Mathon décrit lumière du visage et essais caméra ; Criterion documente les tableaux. Créez une étude de portrait avec références coordonnées.",
          "pt": "Mathon descreve luz facial e testes de câmara; Criterion documenta pinturas. Crie estudo de retrato com referências coordenadas."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s5"
        ]
      },
      {
        "id": "portraitfire-memory",
        "area": "research",
        "prompt": {
          "en": "How can a memory-led narrative omit connective scenes?",
          "nb": "Hvordan kan en minnestyrt fortelling utelate forbindelsesscener?",
          "fr": "Comment un récit de mémoire peut-il omettre les scènes de liaison ?",
          "pt": "Como pode narrativa de memória omitir cenas de ligação?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Insert explanatory scenes between every remembered event",
              "nb": "Sett inn forklaringsscener mellom hver erindret hendelse",
              "fr": "Insérer des scènes explicatives entre chaque souvenir",
              "pt": "Inserir cenas explicativas entre cada memória"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume memory and chronology must be identical",
              "nb": "Anta at erindring og kronologi må være identiske",
              "fr": "Supposer que mémoire et chronologie doivent être identiques",
              "pt": "Supor que memória e cronologia devem ser idênticas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Select meaningful encounters and test transitions between them",
              "nb": "Velg meningsfulle møter og prøv overgangene mellom dem",
              "fr": "Choisir des rencontres significatives et tester leurs transitions",
              "pt": "Selecionar encontros significativos e testar transições"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sciamma describes desired-scene writing and removal of connective scenes. Design an original memory structure and evaluate whether its emotional progression remains legible.",
          "nb": "Sciamma beskriver skriving av ønskede scener og fjerning av forbindelsesscener. Lag en original minnestruktur og vurder om følelsesutviklingen forblir tydelig.",
          "fr": "Sciamma décrit l’écriture des scènes désirées et la suppression des liaisons. Concevez une mémoire originale et évaluez sa progression émotionnelle.",
          "pt": "Sciamma descreve escrita de cenas desejadas e eliminação de ligações. Conceba memória original e avalie progressão emocional."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "portraitfire-music",
        "area": "sound",
        "prompt": {
          "en": "How can rare music become a shared dramatic event?",
          "nb": "Hvordan kan sjelden musikk bli en felles dramatisk hendelse?",
          "fr": "Comment une musique rare devient-elle un événement dramatique partagé ?",
          "pt": "Como pode música rara tornar-se acontecimento dramático partilhado?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat music as unrelated to memory or character experience",
              "nb": "Behandle musikk som urelatert til minner og karakteropplevelse",
              "fr": "Traiter la musique comme étrangère à la mémoire et au vécu",
              "pt": "Tratar música como alheia à memória e experiência"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare silence with an original cue heard by the characters",
              "nb": "Sammenlign stillhet med et originalt musikkinnslag karakterene hører",
              "fr": "Comparer silence et musique originale entendue par les personnages",
              "pt": "Comparar silêncio e música original ouvida pelas personagens"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Fill every dialogue scene with background scoring",
              "nb": "Fyll alle dialogscener med bakgrunnsmusikk",
              "fr": "Remplir chaque dialogue de musique de fond",
              "pt": "Preencher cada diálogo com música de fundo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sciamma describes withholding conventional score and using music as experience and memory. Test an original musical event against silence without reproducing the film's music.",
          "nb": "Sciamma beskriver fravær av konvensjonell filmmusikk og musikk som opplevelse og minne. Prøv et originalt musikkinnslag mot stillhet uten å gjenskape filmens musikk.",
          "fr": "Sciamma décrit l’absence de musique conventionnelle et la musique comme expérience et mémoire. Testez un événement musical original face au silence.",
          "pt": "Sciamma descreve ausência de música convencional e música como experiência e memória. Teste acontecimento musical original perante silêncio."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_atlantics_2019",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Day-night acquisition, situated casting and late poetic writing",
      "nb": "Dag-natt-opptak, stedbasert casting og sen poetisk skriving",
      "fr": "Captation jour-nuit, casting situé et écriture poétique tardive",
      "pt": "Captação dia-noite, elenco situado e escrita poética tardia"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Atlantique",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/atlantique/"
      },
      {
        "id": "s1",
        "title": "Portrait de la jeune fille en feu et Atlantique – entretiens avec Claire Mathon",
        "publisher": "CineCimes",
        "url": "https://cinecimes.fr/portrait-de-la-jeune-fille-en-feu-et-atlantique-entretiens-avec-claire-mathon-directrice-de-la-photographie/"
      },
      {
        "id": "s2",
        "title": "Entretiens avec les laureats du Prix de la CST 2019",
        "publisher": "Commission Superieure Technique de l'Image et du Son",
        "url": "https://prix.cst.fr/entretiens-avec-les-laureats-du-prix-de-la-cst-2019/"
      },
      {
        "id": "s3",
        "title": "La Lettre de l'AFC 298",
        "publisher": "Association Francaise des directrices et directeurs de la photographie cinematographique",
        "url": "https://www.afcinema.com/IMG/pdf/4/a/8/lettre_298.pdf"
      },
      {
        "id": "s4",
        "title": "Mati Diop on Atlantique",
        "publisher": "British Vogue",
        "url": "https://www.vogue.co.uk/arts-and-lifestyle/article/mati-diop-interview"
      },
      {
        "id": "s5",
        "title": "ScreenTalks Archive: Mati Diop on Atlantics",
        "publisher": "Barbican",
        "url": "https://www.barbican.org.uk/read-watch-listen/screentalks-archive-mati-diop-on-atlantics"
      }
    ],
    "questions": [
      {
        "id": "atlantics-night",
        "area": "camera",
        "prompt": {
          "en": "How should day and night capture choices be compared?",
          "nb": "Hvordan bør opptaksvalg for dag og natt sammenlignes?",
          "fr": "Comment comparer les choix de captation de jour et de nuit ?",
          "pt": "Como comparar escolhas de captação de dia e noite?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test available-light conditions and preserve equipment provenance",
              "nb": "Prøv tilgjengelige lysforhold og bevar utstyrets kildeopphav",
              "fr": "Tester la lumière disponible et conserver la provenance du matériel",
              "pt": "Testar luz disponível e preservar proveniência do equipamento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume both camera records name exactly the same model",
              "nb": "Anta at begge kameraopplysninger angir nøyaktig samme modell",
              "fr": "Supposer que les sources nomment exactement le même modèle",
              "pt": "Supor que fontes nomeiam exatamente o mesmo modelo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose night settings without testing actual local light",
              "nb": "Velg nattinnstillinger uten å prøve lyset på stedet",
              "fr": "Choisir les réglages nocturnes sans tester la lumière locale",
              "pt": "Escolher parâmetros noturnos sem testar luz local"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mathon describes separate day and night strategies, with differing VariCam descriptions in equipment sources. Retain that uncertainty and test your own light conditions.",
          "nb": "Mathon beskriver separate dag- og nattstrategier, med ulike VariCam-beskrivelser i utstyrskildene. Bevar usikkerheten og prøv egne lysforhold.",
          "fr": "Mathon décrit des stratégies jour et nuit et les sources divergent sur le VariCam. Gardez cette incertitude et testez votre lumière.",
          "pt": "Mathon descreve estratégias de dia e noite e fontes divergem sobre VariCam. Preserve incerteza e teste luz própria."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "atlantics-place",
        "area": "research",
        "prompt": {
          "en": "How can casting and social geography support a situated story?",
          "nb": "Hvordan kan casting og sosial geografi støtte en stedbasert fortelling?",
          "fr": "Comment casting et géographie sociale servent-ils un récit situé ?",
          "pt": "Como podem elenco e geografia social apoiar narrativa situada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat local identity as a substitute for individual characterization",
              "nb": "Behandle lokal identitet som erstatning for individuell karakterisering",
              "fr": "Traiter l’identité locale comme substitut à la caractérisation",
              "pt": "Tratar identidade local como substituto de caracterização"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the social setting when selecting fictional locations",
              "nb": "Ignorer det sosiale miljøet ved valg av fiktive steder",
              "fr": "Ignorer le contexte social lors du choix des lieux",
              "pt": "Ignorar contexto social ao escolher locais fictícios"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Consult local collaborators and distinguish fictional roles from real lives",
              "nb": "Rådfør deg med lokale samarbeidspartnere og skill fiktive roller fra virkelige liv",
              "fr": "Consulter les collaborateurs locaux et distinguer fiction et vies réelles",
              "pt": "Consultar colaboradores locais e distinguir ficção de vidas reais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Diop discusses casting and Dakar's social geography. Design a consent-based fictional place study without making individuals stand for an entire community.",
          "nb": "Diop omtaler casting og Dakars sosiale geografi. Lag en samtykkebasert fiktiv stedsstudie uten å la enkeltpersoner representere et helt samfunn.",
          "fr": "Diop évoque casting et géographie sociale de Dakar. Concevez une étude fictive consentie sans faire représenter toute une communauté par une personne.",
          "pt": "Diop aborda elenco e geografia social de Dakar. Crie estudo fictício consentido sem fazer uma pessoa representar toda a comunidade."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "atlantics-poetry",
        "area": "sound",
        "prompt": {
          "en": "How can late-written poetic text alter a film's emotional structure?",
          "nb": "Hvordan kan sent skrevet poetisk tekst endre filmens følelsesstruktur?",
          "fr": "Comment un texte poétique tardif modifie-t-il la structure émotionnelle ?",
          "pt": "Como pode texto poético tardio alterar estrutura emocional do filme?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume late writing cannot change the film's structure",
              "nb": "Anta at sen skriving ikke kan endre filmens struktur",
              "fr": "Supposer qu’une écriture tardive ne change pas la structure",
              "pt": "Supor que escrita tardia não altera estrutura"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test original spoken text against the existing cut and music",
              "nb": "Prøv original muntlig tekst mot eksisterende klipp og musikk",
              "fr": "Tester un texte parlé original face au montage et à la musique",
              "pt": "Testar texto falado original perante montagem e música"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Record every addition as if it came from principal photography",
              "nb": "Registrer alle tillegg som om de kom fra hovedopptak",
              "fr": "Enregistrer tout ajout comme issu du tournage principal",
              "pt": "Registar cada adição como se viesse da rodagem principal"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Diop describes a poetic text written near the end of editing and deliberate musical collaboration. Try original spoken text while documenting the distinction between production stages.",
          "nb": "Diop beskriver poetisk tekst skrevet mot slutten av klippen og bevisst musikalsk samarbeid. Prøv original muntlig tekst og dokumenter skillet mellom produksjonsstadiene.",
          "fr": "Diop décrit un texte poétique tardif et une collaboration musicale choisie. Testez un texte original en distinguant les étapes.",
          "pt": "Diop descreve texto poético tardio e colaboração musical deliberada. Teste texto original distinguindo etapas."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_lighthouse_2019",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Historical texture, narrow framing and optical testing",
      "nb": "Historisk tekstur, smalt utsnitt og optiske prøver",
      "fr": "Texture historique, cadre étroit et essais optiques",
      "pt": "Textura histórica, quadro estreito e testes óticos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Stormy Isle: The Lighthouse",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/stormy-isle-the-lighthouse"
      },
      {
        "id": "s1",
        "title": "Jarin Blaschke and Dan Sasaki Discuss Vintage and Custom Lenses",
        "publisher": "Panavision",
        "url": "https://www.panavision.com/highlights/highlights-detail/jarin-blaschke-and-dan-sasaki-discuss-vintage-and-custom-lenses"
      },
      {
        "id": "s2",
        "title": "How The Lighthouse Created That Ominous Visual Style",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment-arts/movies/story/2019-11-12/crafts-lighthouse"
      }
    ],
    "questions": [
      {
        "id": "lighthouse-frame",
        "area": "camera",
        "prompt": {
          "en": "How can a narrow frame change the relationship between figure and space?",
          "nb": "Hvordan kan et smalt utsnitt endre forholdet mellom figur og rom?",
          "fr": "Comment un cadre étroit modifie-t-il le rapport figure-espace ?",
          "pt": "Como pode quadro estreito alterar relação entre figura e espaço?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare vertical compositions in a neutral interior",
              "nb": "Sammenlign vertikale komposisjoner i et nøytralt interiør",
              "fr": "Comparer compositions verticales dans un intérieur neutre",
              "pt": "Comparar composições verticais num interior neutro"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume wider framing always communicates isolation better",
              "nb": "Anta at bredere utsnitt alltid formidler isolasjon bedre",
              "fr": "Supposer qu’un cadre large communique toujours mieux l’isolement",
              "pt": "Supor que quadro largo comunica sempre melhor isolamento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose an aspect ratio without testing character placement",
              "nb": "Velg sideforhold uten å prøve karakterplassering",
              "fr": "Choisir un ratio sans tester le placement des personnages",
              "pt": "Escolher proporção sem testar posição da personagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Blaschke and Sasaki discuss the 1.19 frame and historical optical references. Test your own compositions rather than treating the ratio as a universal rule.",
          "nb": "Blaschke og Sasaki omtaler 1,19-formatet og historiske optiske referanser. Prøv egne komposisjoner fremfor å gjøre formatet til en universell regel.",
          "fr": "Blaschke et Sasaki évoquent le cadre 1,19 et ses références historiques. Testez vos compositions sans universaliser le ratio.",
          "pt": "Blaschke e Sasaki abordam quadro 1,19 e referências históricas. Teste composições sem universalizar a proporção."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "lighthouse-tones",
        "area": "camera",
        "prompt": {
          "en": "How can monochrome tests approximate an earlier photographic response?",
          "nb": "Hvordan kan monokrome prøver tilnærme et eldre fotografisk uttrykk?",
          "fr": "Comment des essais monochromes évoquent-ils une réponse photographique ancienne ?",
          "pt": "Como podem testes monocromáticos evocar resposta fotográfica antiga?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every black-and-white film uses the same spectral response",
              "nb": "Anta at alle svart-hvitt-filmer har samme spektralrespons",
              "fr": "Supposer que tous les films monochromes ont la même réponse spectrale",
              "pt": "Supor que todos os filmes monocromáticos têm resposta espectral igual"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer exact filter settings from the final image alone",
              "nb": "Utled eksakte filterinnstillinger fra sluttbildet alene",
              "fr": "Déduire les réglages exacts du seul résultat",
              "pt": "Deduzir parâmetros exatos apenas da imagem final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare tonal response under controlled lighting with reference images",
              "nb": "Sammenlign tonegjengivelse i kontrollert lys med referansebilder",
              "fr": "Comparer la réponse tonale sous lumière contrôlée avec des références",
              "pt": "Comparar resposta tonal sob luz controlada com referências"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC and the Los Angeles Times document Double-X and a custom filter approximating an older response. Compare original tonal tests without inventing historical optical specifications.",
          "nb": "ASC og Los Angeles Times dokumenterer Double-X og et spesialfilter som tilnærmer eldre respons. Sammenlign egne toneprøver uten å finne på optiske spesifikasjoner.",
          "fr": "ASC et Los Angeles Times documentent Double-X et filtre adapté. Comparez vos essais tonals sans inventer de spécifications historiques.",
          "pt": "ASC e Los Angeles Times documentam Double-X e filtro adaptado. Compare testes tonais sem inventar especificações históricas."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "lighthouse-set",
        "area": "research",
        "prompt": {
          "en": "How can period construction and lens tests inform each other?",
          "nb": "Hvordan kan historisk kulissebygging og objektivprøver informere hverandre?",
          "fr": "Comment construction d’époque et essais optiques s’informent-ils mutuellement ?",
          "pt": "Como podem construção de época e testes óticos informar-se mutuamente?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume vintage optics make historical research unnecessary",
              "nb": "Anta at eldre optikk gjør historisk research unødvendig",
              "fr": "Supposer que les optiques anciennes dispensent de recherche historique",
              "pt": "Supor que óticas antigas dispensam pesquisa histórica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test material textures at the intended framing and lighting",
              "nb": "Prøv materialteksturer med planlagt utsnitt og lys",
              "fr": "Tester textures de matériaux avec cadre et lumière prévus",
              "pt": "Testar texturas com enquadramento e luz previstos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Select materials without viewing them through the camera",
              "nb": "Velg materialer uten å se dem gjennom kameraet",
              "fr": "Choisir les matériaux sans les voir à la caméra",
              "pt": "Escolher materiais sem vê-los pela câmara"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The craft sources describe a built lighthouse and purpose-selected vintage optics. Create a small material study coordinating period reference, light and lens choice.",
          "nb": "Fagkildene beskriver et bygget fyr og målrettet valgt eldre optikk. Lag en liten materialstudie som samordner tidsreferanser, lys og objektivvalg.",
          "fr": "Les sources décrivent un phare construit et des optiques anciennes choisies. Créez une étude de matériaux coordonnant époque, lumière et optique.",
          "pt": "As fontes descrevem farol construído e óticas antigas selecionadas. Crie estudo de materiais coordenando época, luz e objetiva."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_tenet_2020",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Directional motion, mixed formats and processed sound",
      "nb": "Retningsstyrt bevegelse, blandede formater og bearbeidet lyd",
      "fr": "Mouvement directionnel, formats mixtes et son traité",
      "pt": "Movimento direcional, formatos mistos e som processado"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Tenet DP Hoyte van Hoytema FSF NSC ASC says the big screen is best for movies",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/hoyte-van-hoytema-fsf-nsc-asc-on-getting-tenet-on-to-the-big-screen/"
      },
      {
        "id": "s2",
        "title": "Lenses & Cameras used on Tenet",
        "publisher": "Panavision",
        "url": "https://www.panavision.com/highlights/credits/credits-detail/tenet"
      },
      {
        "id": "s3",
        "title": "Warner Bros. Pictures' and Christopher Nolan's Tenet To Open In IMAX 70mm",
        "publisher": "IMAX",
        "url": "https://www.imax.com/news/experience-tenet-IMAX-70mm?page=1"
      },
      {
        "id": "s5",
        "title": "Behind the VFX of TENET",
        "publisher": "DNEG",
        "url": "https://www.dneg.com/news/behind-the-vfx-of-tenet"
      },
      {
        "id": "s6",
        "title": "Wonder Woman and Tenet Sound Designer Richard King",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/wonder-woman-and-tenet-sound-designer-richard-king/"
      },
      {
        "id": "s7",
        "title": "Ludwig Goransson discusses Tenet score in Variety",
        "publisher": "USC Thornton School of Music",
        "url": "https://music.usc.edu/ludwig-goransson-discusses-tenet-score-in-variety/"
      },
      {
        "id": "s8",
        "title": "How Do Composers Score Music During a Pandemic? One Single Instrument At a Time",
        "publisher": "Rolling Stone",
        "url": "https://au.rollingstone.com/music/music-features/tenet-film-score-composers-pandemic-20914/"
      }
    ],
    "questions": [
      {
        "id": "tenet-direction",
        "area": "camera",
        "prompt": {
          "en": "How can opposite motion directions be made readable in an edit?",
          "nb": "Hvordan kan motsatte bevegelsesretninger gjøres lesbare i klippen?",
          "fr": "Comment rendre lisibles des directions de mouvement opposées au montage ?",
          "pt": "Como tornar direções opostas de movimento legíveis na montagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Storyboard neutral object motion and label its intended direction",
              "nb": "Lag storyboard for nøytral objektbevegelse og merk tilsiktet retning",
              "fr": "Prévoir des mouvements d’objets neutres et signaler leur direction",
              "pt": "Planear movimento neutro de objetos e indicar direção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume reversing footage preserves every physical detail naturally",
              "nb": "Anta at reversert opptak naturlig bevarer alle fysiske detaljer",
              "fr": "Supposer que l’inversion conserve naturellement chaque détail physique",
              "pt": "Supor que inversão preserva naturalmente cada detalhe físico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Mix directions without reviewing visual continuity",
              "nb": "Bland retninger uten å vurdere visuell kontinuitet",
              "fr": "Mélanger les directions sans revoir la continuité",
              "pt": "Misturar direções sem rever continuidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Van Hoytema describes forward and backward capture. Test the distinction with a harmless tabletop object and document intended movement rather than recreating action scenes.",
          "nb": "Van Hoytema beskriver forlengs og baklengs opptak. Prøv skillet med et ufarlig bordobjekt og dokumenter bevegelsen fremfor å gjenskape actionscener.",
          "fr": "Van Hoytema décrit des prises dans les deux sens. Testez avec un objet de table sans danger et documentez le mouvement sans recréer d’action.",
          "pt": "Van Hoytema descreve captação em ambos sentidos. Teste com objeto de mesa sem perigo e documente movimento sem recriar ação."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "tenet-formats",
        "area": "research",
        "prompt": {
          "en": "How should a large-format effects workflow preserve source lineage?",
          "nb": "Hvordan bør en storformatbasert effektflyt bevare kildeopphav?",
          "fr": "Comment préserver la provenance dans une chaîne d’effets grand format ?",
          "pt": "Como preservar proveniência num fluxo de efeitos de grande formato?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer every shot's acquisition format from the cinema screen",
              "nb": "Utled alle bilders opptaksformat fra kinolerretet",
              "fr": "Déduire la captation de chaque plan de l’écran de cinéma",
              "pt": "Deduzir captação de cada plano a partir do ecrã"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat a digital effects scan as proof of digital camera acquisition",
              "nb": "Behandle en digital effektskann som bevis på digitalt kameraopptak",
              "fr": "Traiter un scan d’effets comme preuve de captation numérique",
              "pt": "Tratar digitalização de efeitos como prova de captação digital"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record acquisition, scanned elements and final presentation separately",
              "nb": "Registrer opptak, skannede elementer og sluttvisning separat",
              "fr": "Documenter séparément captation, éléments scannés et projection",
              "pt": "Registar separadamente captação, elementos digitalizados e exibição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Production and vendor accounts distinguish large-format acquisition, effects scans and presentation. Create a provenance log that keeps the stages separate.",
          "nb": "Produksjons- og leverandørkildene skiller storformatopptak, effektskann og visning. Lag en kildeopphavslogg som holder trinnene adskilt.",
          "fr": "Les sources distinguent captation grand format, scans d’effets et projection. Créez un registre séparant les étapes.",
          "pt": "As fontes distinguem captação de grande formato, digitalização de efeitos e exibição. Crie registo separando etapas."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3",
          "s5"
        ]
      },
      {
        "id": "tenet-music",
        "area": "sound",
        "prompt": {
          "en": "How can processed sound distinguish unusual narrative movement?",
          "nb": "Hvordan kan bearbeidet lyd skille uvanlig narrativ bevegelse?",
          "fr": "Comment un son traité distingue-t-il un mouvement narratif inhabituel ?",
          "pt": "Como pode som processado distinguir movimento narrativo invulgar?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume remote score recording describes the principal shoot",
              "nb": "Anta at fjerninnspilling av musikk beskriver hovedopptakene",
              "fr": "Supposer que l’enregistrement musical distant décrit le tournage principal",
              "pt": "Supor que gravação musical remota descreve rodagem principal"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original stretched or reversed textures with intelligible dialogue",
              "nb": "Sammenlign originale strukne eller reverserte teksturer med forståelig dialog",
              "fr": "Comparer textures originales étirées ou inversées et dialogue intelligible",
              "pt": "Comparar texturas originais esticadas ou invertidas com diálogo inteligível"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply the same distortion to every dialogue and music track",
              "nb": "Bruk samme forvrengning på alle dialog- og musikkspor",
              "fr": "Appliquer la même distorsion à tous les dialogues et musiques",
              "pt": "Aplicar mesma distorção a todos os diálogos e músicas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "King discusses dialogue work and Göransson's accounts describe processed music and remote recording. Test original audio textures and preserve separate production and post records.",
          "nb": "King omtaler dialogarbeid og Göransson bearbeidet musikk og fjerninnspilling. Prøv originale lydteksturer og bevar separate opptaks- og etterarbeidslogger.",
          "fr": "King décrit le dialogue et Göransson la musique traitée et distante. Testez des textures originales en séparant tournage et postproduction.",
          "pt": "King aborda diálogo e Göransson música processada e remota. Teste texturas originais separando rodagem e pós-produção."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_nomadland_2020",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Participant boundaries, mobile photography and landscape sound",
      "nb": "Deltakergrenser, mobil fotografering og landskapslyd",
      "fr": "Limites des participants, photographie mobile et son du paysage",
      "pt": "Limites dos participantes, fotografia móvel e som da paisagem"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Nomadland",
        "publisher": "Searchlight Pictures",
        "url": "https://www.searchlightpictures.com/nomadland/?pp=1"
      },
      {
        "id": "s2",
        "title": "Nomadland: New Naturalism",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/nomadland-new-naturalism/"
      },
      {
        "id": "s3",
        "title": "How Do You Connect with Someone with a Camera? It's a Hard Thing to Talk About: DP Joshua James Richards on Shooting Nomadland",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/111365-how-do-you-connect-with-someone-with-a-camera-its-a-hard-thing-to-talk-about-dp-joshua-james-richards-on-shooting-nomadland/"
      },
      {
        "id": "s4",
        "title": "BAFTA Film Sessions 2021: Director",
        "publisher": "BAFTA",
        "url": "https://www.bafta.org/media-centre/press-releases/bafta-film-sessions-2021-director/"
      },
      {
        "id": "s5",
        "title": "The Sound of Nomadland",
        "publisher": "SoundWorks Collection",
        "url": "https://next.soundworkscollection.com/posts/the-sound-of-nomadland"
      }
    ],
    "questions": [
      {
        "id": "nomadland-people",
        "area": "research",
        "prompt": {
          "en": "How can fiction involve real participants responsibly?",
          "nb": "Hvordan kan fiksjon involvere virkelige deltakere på en ansvarlig måte?",
          "fr": "Comment une fiction implique-t-elle des participants réels de façon responsable ?",
          "pt": "Como pode ficção envolver participantes reais responsavelmente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Discuss consent and distinguish personal testimony from fictional scenes",
              "nb": "Avklar samtykke og skill personlige vitnesbyrd fra fiktive scener",
              "fr": "Discuter du consentement et distinguer témoignage et fiction",
              "pt": "Discutir consentimento e distinguir testemunho de ficção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume appearing in a film grants unlimited use of personal stories",
              "nb": "Anta at medvirkning gir ubegrenset bruk av personlige historier",
              "fr": "Supposer qu’apparaître autorise tout usage des récits personnels",
              "pt": "Supor que participação autoriza uso ilimitado de histórias pessoais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat all filmed participants as invented characters",
              "nb": "Behandle alle filmede deltakere som oppdiktede karakterer",
              "fr": "Traiter tous les participants comme des personnages inventés",
              "pt": "Tratar todos os participantes como personagens inventadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Searchlight identifies real nomad participants and Richards discusses relationships and boundaries. Plan a fictional collaborative exercise with explicit consent and privacy limits.",
          "nb": "Searchlight identifiserer virkelige nomadedeltakere og Richards omtaler relasjoner og grenser. Planlegg en fiktiv samarbeidsøvelse med tydelig samtykke og personvern.",
          "fr": "Searchlight identifie des participants nomades et Richards évoque les limites. Prévoyez une collaboration fictive avec consentement et confidentialité.",
          "pt": "Searchlight identifica participantes nómadas e Richards aborda limites. Planeie colaboração fictícia com consentimento e privacidade."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "nomadland-light",
        "area": "camera",
        "prompt": {
          "en": "How can a small mobile crew respond to changing available light?",
          "nb": "Hvordan kan et lite mobilt team tilpasse seg skiftende tilgjengelig lys?",
          "fr": "Comment une petite équipe mobile répond-elle à la lumière changeante ?",
          "pt": "Como pode pequena equipa móvel responder a luz variável?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume available light removes the need for preparation",
              "nb": "Anta at tilgjengelig lys fjerner behovet for forberedelse",
              "fr": "Supposer que la lumière disponible dispense de préparation",
              "pt": "Supor que luz disponível dispensa preparação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose camera positions without considering participant comfort",
              "nb": "Velg kameraposisjoner uten å vurdere deltakernes komfort",
              "fr": "Choisir les positions caméra sans considérer le confort",
              "pt": "Escolher posições de câmara sem considerar conforto"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan flexible scene windows and test compact lighting options",
              "nb": "Planlegg fleksible scenevinduer og prøv kompakte lysalternativer",
              "fr": "Prévoir des créneaux flexibles et tester des éclairages compacts",
              "pt": "Planear janelas flexíveis e testar iluminação compacta"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The craft accounts describe a small crew, available light and mobile configurations. Test a safe, compact local filming plan without claiming every scene was naturally lit.",
          "nb": "Fagkildene beskriver et lite team, tilgjengelig lys og mobile oppsett. Prøv en trygg kompakt opptaksplan uten å påstå at alle scener hadde naturlig lys.",
          "fr": "Les sources décrivent petite équipe, lumière disponible et dispositifs mobiles. Testez un plan local sûr sans généraliser la lumière naturelle.",
          "pt": "As fontes descrevem equipa pequena, luz disponível e dispositivos móveis. Teste plano local seguro sem generalizar luz natural."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "nomadland-sound",
        "area": "sound",
        "prompt": {
          "en": "How can landscape sound support a restrained editorial approach?",
          "nb": "Hvordan kan landskapslyd støtte en tilbakeholden klippestil?",
          "fr": "Comment le son du paysage soutient-il un montage retenu ?",
          "pt": "Como pode som da paisagem apoiar montagem contida?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all quiet moments to maintain a fixed pace",
              "nb": "Fjern alle stille øyeblikk for å opprettholde fast tempo",
              "fr": "Supprimer tous les silences pour garder un rythme fixe",
              "pt": "Eliminar silêncios para manter ritmo fixo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare location ambience and tonal transitions without forcing emotion",
              "nb": "Sammenlign stedslyd og toneoverganger uten å påtvinge følelser",
              "fr": "Comparer ambiances et transitions tonales sans imposer d’émotion",
              "pt": "Comparar ambientes e transições tonais sem impor emoção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the same atmospheric sound in every geographical setting",
              "nb": "Bruk samme atmosfærelyd på alle geografiske steder",
              "fr": "Employer la même ambiance dans tous les lieux",
              "pt": "Usar o mesmo ambiente em todos os lugares"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Zhao describes editorial choices about tone; the sound team describes landscape-specific restraint. Create an original sound montage that allows listeners room for interpretation.",
          "nb": "Zhao beskriver klippevalg om tone, og lydteamet stedsspesifikk tilbakeholdenhet. Lag en original lydmontasje som gir lytteren rom for tolkning.",
          "fr": "Zhao décrit les choix de tonalité et l’équipe son la retenue liée aux lieux. Créez un montage original laissant place à l’interprétation.",
          "pt": "Zhao descreve escolhas de tonalidade e a equipa sonora contenção ligada aos locais. Crie montagem original com espaço para interpretação."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_soul_2020",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Dual-world design, culturally informed lighting and musical performance",
      "nb": "Design av to verdener, kulturforankret lys og musikalsk spill",
      "fr": "Design de deux mondes, lumière culturellement informée et jeu musical",
      "pt": "Design de dois mundos, luz culturalmente informada e interpretação musical"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Soul",
        "publisher": "Pixar Animation Studios",
        "url": "https://www.pixar.com/soul"
      },
      {
        "id": "s3",
        "title": "Cinematography with Soul",
        "publisher": "Pixar RenderMan",
        "url": "https://renderman.pixar.com/stories/cinematography-with-soul"
      },
      {
        "id": "s4",
        "title": "An Inside Look at the Animation in Pixar's Soul",
        "publisher": "Disney News",
        "url": "https://news.disney.com/animators-of-pixar-soul"
      },
      {
        "id": "s6",
        "title": "Soul (film)",
        "publisher": "D23",
        "url": "https://d23.com/a-to-z/soul-film/"
      },
      {
        "id": "s7",
        "title": "The Music Behind Pixar's Soul",
        "publisher": "Disney News",
        "url": "https://news.disney.com/music-for-soul"
      },
      {
        "id": "s8",
        "title": "A Behind-the-Scenes Look at the Heart and Soul of Pixar's Latest Feature",
        "publisher": "ACM SIGGRAPH Blog",
        "url": "https://blog.siggraph.org/2020/12/a-behind-the-scenes-look-at-the-heart-and-soul-of-pixars-latest-feature.html/"
      },
      {
        "id": "s9",
        "title": "How Soul directors created Pixar's first Black protagonist",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment-arts/movies/story/2020-11-19/pixar-soul-pete-docter-kemp-powers"
      },
      {
        "id": "s10",
        "title": "ART OF THE CUT on editing PIXAR's Soul with Kevin Nolting, ACE",
        "publisher": "ProVideo Coalition",
        "url": "https://www.provideocoalition.com/art-of-the-cut-soul/"
      }
    ],
    "questions": [
      {
        "id": "soul-worlds",
        "area": "animation",
        "prompt": {
          "en": "How can two animated worlds communicate different narrative rules?",
          "nb": "Hvordan kan to animerte verdener formidle ulike fortellerregler?",
          "fr": "Comment deux mondes animés communiquent-ils des règles narratives différentes ?",
          "pt": "Como podem dois mundos animados comunicar regras narrativas diferentes?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Develop distinct shape and line systems with readable character motion",
              "nb": "Utvikle ulike form- og linjesystemer med lesbar karakterbevegelse",
              "fr": "Développer formes et traits distincts avec mouvement lisible",
              "pt": "Desenvolver formas e linhas distintas com movimento legível"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical rendering and motion rules for both worlds",
              "nb": "Bruk identiske render- og bevegelsesregler i begge verdener",
              "fr": "Employer les mêmes règles de rendu et mouvement",
              "pt": "Usar regras idênticas de renderização e movimento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Design abstract characters without testing expression clarity",
              "nb": "Utform abstrakte karakterer uten å prøve uttrykkets tydelighet",
              "fr": "Concevoir les personnages abstraits sans tester leur expressivité",
              "pt": "Conceber personagens abstratas sem testar clareza expressiva"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Pixar describes distinct world design and new line techniques. Make an original two-world style study and test character readability across both.",
          "nb": "Pixar beskriver ulik verdensdesign og nye linjeteknikker. Lag en original toverdensstudie og prøv karakterenes lesbarhet i begge.",
          "fr": "Pixar décrit deux univers et de nouvelles techniques de trait. Créez une étude originale et testez la lisibilité des personnages.",
          "pt": "Pixar descreve mundos distintos e novas técnicas de linha. Crie estudo original e teste legibilidade das personagens."
        },
        "sourceIds": [
          "s2",
          "s4",
          "s8"
        ]
      },
      {
        "id": "soul-lighting",
        "area": "animation",
        "prompt": {
          "en": "How can character shading be developed with culturally informed references?",
          "nb": "Hvordan kan karakterskyggelegging utvikles med kulturforankrede referanser?",
          "fr": "Comment développer l’ombrage des personnages avec des références culturellement informées ?",
          "pt": "Como desenvolver sombreamento de personagens com referências culturalmente informadas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume one generic shading preset fits all characters",
              "nb": "Anta at én generisk skyggeleggingsmal passer alle karakterer",
              "fr": "Supposer qu’un préréglage générique convient à tous",
              "pt": "Supor que predefinição genérica serve todas as personagens"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat photographic reference and cultural consultation as irrelevant",
              "nb": "Behandle fotoreferanser og kulturrådgivning som uvesentlig",
              "fr": "Traiter références photo et consultation culturelle comme inutiles",
              "pt": "Tratar referências fotográficas e consulta cultural como irrelevantes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Consult relevant expertise and test varied skin and hair rendering",
              "nb": "Rådfør deg med relevant ekspertise og prøv variert hud- og hårrendering",
              "fr": "Consulter des spécialistes et tester diverses peaux et chevelures",
              "pt": "Consultar especialistas e testar renderização variada de pele e cabelo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "RenderMan and Disney accounts describe dedicated Black-skin and hair development and consultation. Test original characters with varied lighting and seek informed feedback rather than universalizing one preset.",
          "nb": "RenderMan og Disney beskriver særskilt utvikling av svart hud og hår samt rådgivning. Prøv egne karakterer i variert lys og søk kvalifisert tilbakemelding fremfor å generalisere én mal.",
          "fr": "RenderMan et Disney décrivent le travail sur peaux et cheveux noirs et la consultation. Testez des personnages originaux et sollicitez des avis informés.",
          "pt": "RenderMan e Disney descrevem trabalho de pele e cabelo negros e consulta. Teste personagens originais sob luz variada e procure avaliação informada."
        },
        "sourceIds": [
          "s3",
          "s6",
          "s9"
        ]
      },
      {
        "id": "soul-jazz",
        "area": "sound",
        "prompt": {
          "en": "How can animated musical performance align with credible playing gestures?",
          "nb": "Hvordan kan animert musikkspill samsvare med troverdige spillebevegelser?",
          "fr": "Comment le jeu musical animé s’aligne-t-il sur des gestes crédibles ?",
          "pt": "Como pode interpretação musical animada alinhar-se com gestos credíveis?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat jazz performance and otherworldly score as the same task",
              "nb": "Behandle jazzspill og musikk for den andre verdenen som samme oppgave",
              "fr": "Traiter jazz et musique de l’autre monde comme une seule tâche",
              "pt": "Tratar jazz e música do outro mundo como tarefa igual"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use consented performance references and original music to test synchronization",
              "nb": "Bruk samtykkebaserte spillreferanser og original musikk for å prøve synkronisering",
              "fr": "Utiliser des références consenties et une musique originale pour tester la synchronisation",
              "pt": "Usar referências consentidas e música original para testar sincronização"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Animate unrelated hand movements without listening to the music",
              "nb": "Animer urelaterte håndbevegelser uten å lytte til musikken",
              "fr": "Animer des gestes sans rapport sans écouter la musique",
              "pt": "Animar gestos sem relação sem ouvir música"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Disney describes Batiste's piano reference and separate score roles; Nolting describes early music in editorial. Test an original musical gesture and preserve the division of contributions.",
          "nb": "Disney beskriver Batistes pianoreferanser og separate musikkroller; Nolting beskriver tidlig musikk i klippen. Prøv en original musikalsk gest og bevar bidragsskillet.",
          "fr": "Disney décrit les références piano de Batiste et les rôles distincts ; Nolting la musique précoce au montage. Testez un geste musical original.",
          "pt": "Disney descreve referências de piano de Batiste e funções distintas; Nolting música inicial na montagem. Teste gesto musical original."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s10"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_wolfwalkers_2020",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Graphic world contrast, hybrid perspective and iterative animatics",
      "nb": "Grafisk verdenskontrast, hybrid perspektiv og iterative animatics",
      "fr": "Contraste graphique, perspective hybride et animatiques itératives",
      "pt": "Contraste gráfico, perspetiva híbrida e animáticas iterativas"
    },
    "sources": [
      {
        "id": "s2",
        "title": "A First Look at 'Wolfwalkers,' Tomm Moore's New Feature (Trailer Exclusive)",
        "publisher": "Cartoon Brew",
        "url": "https://www.cartoonbrew.com/feature-film/first-look-wolfwalkers-tomm-moores-new-feature-trailer-exclusive-149399.html"
      },
      {
        "id": "s3",
        "title": "Director Tomm Moore Reveals New Details About 'Wolfwalkers,' Coming to Apple TV+ (Annecy WIP)",
        "publisher": "Cartoon Brew",
        "url": "https://www.cartoonbrew.com/feature-film/director-tomm-moore-reveals-new-details-about-wolfwalkers-coming-to-apple-tv-annecy-wip-193335.html"
      },
      {
        "id": "s4",
        "title": "2D Isn't Dead, It Just Became Something Different: Using Blender For Wolfwalkers",
        "publisher": "Blender",
        "url": "https://www.blender.org/user-stories/2d-isnt-dead-it-just-became-something-different-using-blender-for-wolfwalkers/"
      },
      {
        "id": "s5",
        "title": "Tomm Moore and Ross Stewart Talk 'Wolfwalkers'",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/tomm-moore-and-ross-stewart-talk-wolfwalkers"
      },
      {
        "id": "s6",
        "title": "'Wolfwalkers' Story Artist Iker Maidagan Has Written A Priceless Account Of The Film's Development",
        "publisher": "Cartoon Brew",
        "url": "https://www.cartoonbrew.com/educational/wolfwalkers-story-artist-iker-maidagan-has-written-a-priceless-account-of-the-films-development-203223.html"
      }
    ],
    "questions": [
      {
        "id": "wolfwalkers-styles",
        "area": "animation",
        "prompt": {
          "en": "How can contrasting graphic styles express different fictional environments?",
          "nb": "Hvordan kan kontrasterende grafiske stiler uttrykke ulike fiktive miljøer?",
          "fr": "Comment des styles graphiques opposés expriment-ils des décors différents ?",
          "pt": "Como podem estilos gráficos contrastantes exprimir ambientes fictícios?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Develop distinct geometric and organic line systems",
              "nb": "Utvikle ulike geometriske og organiske linjesystemer",
              "fr": "Développer des systèmes de traits géométriques et organiques",
              "pt": "Desenvolver sistemas de linhas geométricas e orgânicas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Give every environment identical perspective and line texture",
              "nb": "Gi alle miljøer identisk perspektiv og linjetekstur",
              "fr": "Donner à tous les décors les mêmes perspectives et traits",
              "pt": "Dar a todos os ambientes perspetiva e linha iguais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose visual styles independently of story viewpoint",
              "nb": "Velg visuell stil uavhengig av fortellerperspektivet",
              "fr": "Choisir les styles indépendamment du point de vue",
              "pt": "Escolher estilos independentemente da perspetiva narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Moore describes contrasting block-print and forest forms. Create an original visual contrast and test how it communicates different viewpoints.",
          "nb": "Moore beskriver kontrast mellom blokktrykk og skogformer. Lag en original visuell kontrast og prøv hvordan den formidler ulike perspektiver.",
          "fr": "Moore décrit le contraste entre gravure et forêt. Créez un contraste original et testez les points de vue communiqués.",
          "pt": "Moore descreve contraste entre gravura e floresta. Crie contraste original e teste perspetivas comunicadas."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "wolfwalkers-wolfvision",
        "area": "animation",
        "prompt": {
          "en": "How can three-dimensional previsualization support hand-drawn perspective?",
          "nb": "Hvordan kan tredimensjonal forhåndsvisualisering støtte håndtegnet perspektiv?",
          "fr": "Comment la prévisualisation 3D sert-elle une perspective dessinée ?",
          "pt": "Como pode pré-visualização 3D apoiar perspetiva desenhada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume hand-drawn appearance rules out digital spatial planning",
              "nb": "Anta at håndtegnet uttrykk utelukker digital romplanlegging",
              "fr": "Supposer que le dessin exclut toute planification spatiale numérique",
              "pt": "Supor que desenho exclui planeamento espacial digital"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Apply the Wolfvision cadence to every scene without evidence",
              "nb": "Bruk Wolfvision-rytmen på alle scener uten dokumentasjon",
              "fr": "Appliquer la cadence Wolfvision à toutes les scènes sans preuve",
              "pt": "Aplicar cadência Wolfvision a todas as cenas sem provas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use simple 3D motion guides and develop original drawn layers",
              "nb": "Bruk enkle 3D-bevegelsesguider og utvikle egne tegnede lag",
              "fr": "Utiliser des guides 3D simples et créer des couches dessinées originales",
              "pt": "Usar guias 3D simples e criar camadas desenhadas originais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Blender and AWN accounts describe 3D planning followed by paper-based rendering. Test a small original moving perspective while keeping the technique's scope explicit.",
          "nb": "Blender og AWN beskriver 3D-planlegging etterfulgt av papirbasert rendering. Prøv et lite originalt bevegelig perspektiv og avgrens teknikkens omfang.",
          "fr": "Blender et AWN décrivent la préparation 3D suivie d’un rendu sur papier. Testez une perspective mobile originale en délimitant la technique.",
          "pt": "Blender e AWN descrevem planeamento 3D seguido de desenho em papel. Teste perspetiva móvel original delimitando a técnica."
        },
        "sourceIds": [
          "s3",
          "s4",
          "s5"
        ]
      },
      {
        "id": "wolfwalkers-animatic",
        "area": "research",
        "prompt": {
          "en": "How should successive animatics guide story development?",
          "nb": "Hvordan bør successive animatics styre fortellingsutviklingen?",
          "fr": "Comment des animatiques successives guident-elles le récit ?",
          "pt": "Como devem animáticas sucessivas orientar desenvolvimento narrativo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a single storyboard pass resolves every story problem",
              "nb": "Anta at én storyboardrunde løser alle fortellingsproblemer",
              "fr": "Supposer qu’un seul découpage résout tous les problèmes",
              "pt": "Supor que uma ronda de storyboard resolve todos os problemas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Keep versions and compare story clarity before committing to animation",
              "nb": "Behold versjoner og sammenlign fortellingens tydelighet før animasjon",
              "fr": "Conserver les versions et comparer la clarté avant animation",
              "pt": "Preservar versões e comparar clareza antes da animação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard each previous animatic immediately after revision",
              "nb": "Forkast hver tidligere animatic straks etter revisjon",
              "fr": "Écarter chaque animatique précédente après révision",
              "pt": "Descartar animática anterior após revisão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cartoon Brew documents multiple animatics and a dedicated story-team process. Build a versioned original sequence and compare how revisions affect clarity and rhythm.",
          "nb": "Cartoon Brew dokumenterer flere animatics og et eget fortellingsteam. Lag en versjonert original sekvens og sammenlign hvordan revisjoner påvirker tydelighet og rytme.",
          "fr": "Cartoon Brew documente plusieurs animatiques et une équipe narrative dédiée. Créez une séquence versionnée et comparez clarté et rythme.",
          "pt": "Cartoon Brew documenta várias animáticas e equipa narrativa dedicada. Crie sequência versionada e compare clareza e ritmo."
        },
        "sourceIds": [
          "s2",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_collective_2020",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Observational access, location sound and documentary editing",
      "nb": "Observerende tilgang, stedslyd og dokumentarklipping",
      "fr": "Accès observationnel, son direct et montage documentaire",
      "pt": "Acesso observacional, som direto e montagem documental"
    },
    "sources": [
      {
        "id": "s0",
        "title": "COLLECTIVE",
        "publisher": "European Film Academy",
        "url": "https://vod.europeanfilmacademy.org/videos/collective"
      },
      {
        "id": "s2",
        "title": "Collective - Complete Press Kit and Production Notes",
        "publisher": "Magnolia Pictures",
        "url": "https://magpictures.com/resources/presskits/COLLECTIVE/COLLECTIVEfinalnotes.pdf"
      },
      {
        "id": "s3",
        "title": "Incompetence was killing the victims: Alexander Nanau on his health-service expose Collective",
        "publisher": "BFI / Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/interviews/alexander-nanau-collective-expose-romanian-nightclub-fire-health-service-corruption"
      },
      {
        "id": "s4",
        "title": "Interviews: Alexander Nanau on Collective",
        "publisher": "Reverse Shot / Museum of the Moving Image",
        "url": "https://www.reverseshot.org/interviews/entry/2731/collective_nanau"
      },
      {
        "id": "s5",
        "title": "Incendiary: Director Alexander Nanau on His Explosive Investigative Documentary, Collective",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/109368-incendiary/"
      }
    ],
    "questions": [
      {
        "id": "collective-access",
        "area": "research",
        "prompt": {
          "en": "How can a documentary build long-term observational access?",
          "nb": "Hvordan kan en dokumentar bygge langvarig observerende tilgang?",
          "fr": "Comment un documentaire construit-il un accès observationnel durable ?",
          "pt": "Como pode um documentário construir acesso observacional duradouro?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Build trust and agree on consent and access boundaries",
              "nb": "Bygg tillit og avtal samtykke og tilgangsgrenser",
              "fr": "Construire la confiance et convenir des limites d’accès",
              "pt": "Construir confiança e acordar limites de acesso"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Stage invented incidents for the camera",
              "nb": "Iscenesett oppdiktede hendelser for kameraet",
              "fr": "Mettre en scène des incidents inventés",
              "pt": "Encenar incidentes inventados"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume access means unlimited permission",
              "nb": "Anta at tilgang betyr ubegrenset tillatelse",
              "fr": "Supposer que l’accès vaut autorisation illimitée",
              "pt": "Supor que acesso significa autorização ilimitada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nanau describes non-intervention and long-term trust; the production notes establish extended shooting. Plan a consent-based exercise without manufacturing documentary events.",
          "nb": "Nanau beskriver ikke-inngripen og langvarig tillit; produksjonsnotatene dokumenterer langvarige opptak. Planlegg en samtykkebasert øvelse uten å dikte dokumentarhendelser.",
          "fr": "Nanau décrit non-intervention et confiance durable ; les notes attestent un long tournage. Préparez un exercice consenti sans inventer d’événements.",
          "pt": "Nanau descreve não intervenção e confiança duradoura; as notas documentam rodagem longa. Planeie exercício consentido sem inventar acontecimentos."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      },
      {
        "id": "collective-sound",
        "area": "sound",
        "prompt": {
          "en": "How can a small crew record natural conversation responsibly?",
          "nb": "Hvordan kan et lite team ta opp naturlig samtale ansvarlig?",
          "fr": "Comment une petite équipe enregistre-t-elle une conversation naturelle ?",
          "pt": "Como pode uma equipa pequena gravar uma conversa natural?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Record private conversations without permission",
              "nb": "Ta opp private samtaler uten tillatelse",
              "fr": "Enregistrer les conversations privées sans permission",
              "pt": "Gravar conversas privadas sem autorização"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace all speech with invented dialogue",
              "nb": "Erstatt all tale med oppdiktet dialog",
              "fr": "Remplacer les paroles par des dialogues inventés",
              "pt": "Substituir falas por diálogo inventado"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree on microphones and review intelligibility with participants",
              "nb": "Avtal mikrofonbruk og vurder forståelighet med deltakerne",
              "fr": "Convenir des micros et revoir l’intelligibilité avec les participants",
              "pt": "Acordar microfones e rever inteligibilidade com participantes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nanau describes a minimal field presence and changing sound methods. Compare disclosed recording options in a neutral scene while respecting privacy.",
          "nb": "Nanau beskriver liten feltstab og skiftende lydmetoder. Sammenlign åpne opptaksvalg i en nøytral scene med respekt for personvernet.",
          "fr": "Nanau décrit une présence réduite et des méthodes sonores évolutives. Comparez des dispositifs déclarés en respectant la vie privée.",
          "pt": "Nanau descreve presença reduzida e métodos sonoros evolutivos. Compare dispositivos declarados respeitando privacidade."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "collective-edit",
        "area": "research",
        "prompt": {
          "en": "How can a documentary edit respond to unfolding events?",
          "nb": "Hvordan kan dokumentarklipping tilpasses hendelser i utvikling?",
          "fr": "Comment le montage documentaire répond-il aux événements en cours ?",
          "pt": "Como pode montagem documental responder a acontecimentos em evolução?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent connecting events for dramatic clarity",
              "nb": "Finn på forbindelseshendelser for dramatisk klarhet",
              "fr": "Inventer des événements de liaison",
              "pt": "Inventar acontecimentos de ligação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Keep a chronology and compare structural versions",
              "nb": "Før kronologi og sammenlign strukturelle versjoner",
              "fr": "Tenir une chronologie et comparer les structures",
              "pt": "Manter cronologia e comparar estruturas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Force footage into the first outline",
              "nb": "Tving materialet inn i første disposisjon",
              "fr": "Forcer les images dans le premier plan",
              "pt": "Forçar imagens no primeiro plano"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nanau describes an evolving structure and extended collaboration in editing. Compare arrangements of documented material while retaining dates and evidence.",
          "nb": "Nanau beskriver en struktur i utvikling og langvarig klippesamarbeid. Sammenlign sammenstillinger av dokumentert materiale og bevar datoer og bevis.",
          "fr": "Nanau décrit une structure évolutive et un montage collaboratif. Comparez des agencements en conservant dates et preuves.",
          "pt": "Nanau descreve estrutura evolutiva e montagem colaborativa. Compare arranjos preservando datas e evidências."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_another_round_2020",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ensemble relationships, intimate photography and fictional premise",
      "nb": "Ensemblerelasjoner, nært foto og fiktivt premiss",
      "fr": "Relations collectives, photographie intime et prémisse fictive",
      "pt": "Relações coletivas, fotografia íntima e premissa fictícia"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Another Round",
        "publisher": "Danish Film Institute",
        "url": "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/druk"
      },
      {
        "id": "s1",
        "title": "Thomas Vinterberg invites The Hunt's actors to binge drinking",
        "publisher": "Nordisk Film & TV Fond",
        "url": "https://nordiskfilmogtvfond.com/news/stories/thomas-vinterberg-invites-the-hunts-actors-to-binge-drinking"
      },
      {
        "id": "s2",
        "title": "Oscar winner Another Round finished with DaVinci Resolve",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/?p=35489"
      },
      {
        "id": "s3",
        "title": "Druk (Another Round)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/druk/"
      }
    ],
    "questions": [
      {
        "id": "anotherround-ensemble",
        "area": "research",
        "prompt": {
          "en": "How can an ensemble maintain evolving character relationships?",
          "nb": "Hvordan kan et ensemble bevare karakterrelasjoner i utvikling?",
          "fr": "Comment maintenir des relations évolutives dans un ensemble ?",
          "pt": "Como manter relações evolutivas num elenco?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse shared histories and track relationship changes",
              "nb": "Øv inn felles historier og følg relasjonsendringer",
              "fr": "Répéter les histoires communes et suivre les relations",
              "pt": "Ensaiar histórias comuns e acompanhar relações"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every performer as an isolated unit",
              "nb": "Behandle hver utøver som isolert enhet",
              "fr": "Traiter chaque acteur comme unité isolée",
              "pt": "Tratar cada ator como unidade isolada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore continuity between ensemble scenes",
              "nb": "Ignorer kontinuitet mellom ensemblescener",
              "fr": "Ignorer la continuité entre scènes collectives",
              "pt": "Ignorar continuidade entre cenas coletivas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The DFI and production report establish the returning ensemble and coordinated departments. Design an original rehearsal around a shared map of relationships.",
          "nb": "DFI og produksjonsrapporten dokumenterer ensemblet og samordnede avdelinger. Lag en original prøve rundt et felles relasjonskart.",
          "fr": "Le DFI et le rapport documentent l’ensemble et les équipes. Créez une répétition originale autour d’une carte des relations.",
          "pt": "O DFI e o relatório documentam elenco e equipas. Crie ensaio original com mapa de relações."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "anotherround-look",
        "area": "camera",
        "prompt": {
          "en": "How can handheld photography support intimate acting?",
          "nb": "Hvordan kan håndholdt foto støtte nært skuespill?",
          "fr": "Comment la caméra portée soutient-elle un jeu intime ?",
          "pt": "Como pode fotografia à mão apoiar interpretação íntima?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume handheld motion guarantees authenticity",
              "nb": "Anta at håndholdt bevegelse garanterer autentisitet",
              "fr": "Supposer que la caméra portée garantit l’authenticité",
              "pt": "Supor que câmara à mão garante autenticidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose vintage optics without testing faces",
              "nb": "Velg eldre optikk uten å prøve ansikter",
              "fr": "Choisir des optiques anciennes sans tester les visages",
              "pt": "Escolher óticas antigas sem testar rostos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test restrained movement and soft light on faces",
              "nb": "Prøv tilbakeholden bevegelse og mykt ansiktslys",
              "fr": "Tester mouvement retenu et lumière douce des visages",
              "pt": "Testar movimento contido e luz suave nos rostos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematography account describes handheld ALEXA Mini, vintage K35 lenses and limited lighting. Test an original look rather than inventing universal settings.",
          "nb": "Fotokilden beskriver håndholdt ALEXA Mini, eldre K35-optikk og begrenset lys. Prøv et eget uttrykk fremfor å finne på universelle innstillinger.",
          "fr": "La source décrit ALEXA Mini portée, K35 anciennes et lumière limitée. Testez un rendu original sans inventer de réglages universels.",
          "pt": "A fonte descreve ALEXA Mini à mão, K35 antigas e luz limitada. Teste visual original sem inventar parâmetros universais."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "anotherround-premise",
        "area": "research",
        "prompt": {
          "en": "How can a fictional experiment organize dramatic consequences?",
          "nb": "Hvordan kan et fiktivt eksperiment organisere dramatiske konsekvenser?",
          "fr": "Comment une expérience fictive organise-t-elle les conséquences dramatiques ?",
          "pt": "Como pode experiência fictícia organizar consequências dramáticas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Present fictional results as scientific proof",
              "nb": "Presenter fiktive resultater som vitenskapelig bevis",
              "fr": "Présenter des résultats fictifs comme preuve scientifique",
              "pt": "Apresentar resultados fictícios como prova científica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Map invented rules and consequences without risky experiments",
              "nb": "Kartlegg oppdiktede regler og konsekvenser uten risikoforsøk",
              "fr": "Cartographier règles fictives et conséquences sans expérience risquée",
              "pt": "Mapear regras fictícias e consequências sem experiências arriscadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Ask performers to reproduce risky character behavior",
              "nb": "Be utøvere gjenskape risikofylt karakteratferd",
              "fr": "Demander aux acteurs de reproduire des conduites risquées",
              "pt": "Pedir aos atores que reproduzam comportamentos arriscados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes and the production report describe the structured experiment premise. Use a harmless fictional exercise; the movie does not establish a health intervention.",
          "nb": "Cannes og produksjonsrapporten beskriver det strukturerte eksperimentpremisset. Bruk en ufarlig fiktiv øvelse; filmen dokumenterer ikke et helsetiltak.",
          "fr": "Cannes et le rapport décrivent la prémisse expérimentale. Utilisez un exercice fictif sans risque ; le film ne prouve pas une intervention de santé.",
          "pt": "Cannes e o relatório descrevem premissa experimental. Use exercício fictício sem risco; o filme não comprova intervenção de saúde."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_dune_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Shared visual design, hybrid finishing and sonic worldbuilding",
      "nb": "Felles visuell design, hybrid ferdigstilling og lydverdensbygging",
      "fr": "Design visuel partagé, finition hybride et univers sonore",
      "pt": "Design visual partilhado, acabamento híbrido e universo sonoro"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Dune",
        "publisher": "La Biennale di Venezia",
        "url": "https://www.labiennale.org/en/cinema/2021/lineup/out-competition/dune"
      },
      {
        "id": "s1",
        "title": "ARRI ALEXA Mini LF camera ships and inspires cinematographers worldwide",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-alexa-mini-lf-camera-ships-and-inspires-cinematographers-worldwide"
      },
      {
        "id": "s2",
        "title": "Dune: Part One — Hybrid Finishing: Digital to Film (and Back)",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/dune-hybrid-finishing-digital-to-film-and-back/"
      },
      {
        "id": "s3",
        "title": "How production designer Patrice Vermette built the world of Dune",
        "publisher": "Wix Studio",
        "url": "https://www.wix.com/studio/blog/dune-production-designer-patrice-vermette"
      },
      {
        "id": "s5",
        "title": "Art of the Cut: Behind the Scenes of Dune with Editor Joe Walker, ACE",
        "publisher": "Frame.io",
        "url": "https://blog.frame.io/2021/10/27/art-of-the-cut-dune-joe-walker/"
      },
      {
        "id": "s6",
        "title": "Designing Dune's Extraordinary Sound, with Mark Mangini and Theo Green",
        "publisher": "A Sound Effect",
        "url": "https://www.asoundeffect.com/dunes-extraordinary-sound-a-sound-effect-podcast-17/"
      }
    ],
    "questions": [
      {
        "id": "dune-bible",
        "area": "research",
        "prompt": {
          "en": "How can a visual bible coordinate a large fictional world?",
          "nb": "Hvordan kan en visuell håndbok samordne en stor fiktiv verden?",
          "fr": "Comment une bible visuelle coordonne-t-elle un vaste univers ?",
          "pt": "Como pode uma bíblia visual coordenar um vasto universo fictício?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Develop shared references and version them across departments",
              "nb": "Utvikle felles referanser og versjoner dem på tvers av avdelinger",
              "fr": "Développer des références communes et les versionner entre équipes",
              "pt": "Desenvolver referências comuns e versioná-las entre equipas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Let departments invent incompatible design rules",
              "nb": "La avdelinger finne på uforenlige designregler",
              "fr": "Laisser les équipes inventer des règles incompatibles",
              "pt": "Deixar equipas inventar regras incompatíveis"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat concept art as exact records of finished shots",
              "nb": "Behandle konseptkunst som eksakte sluttbilder",
              "fr": "Traiter les concepts comme relevés des plans finaux",
              "pt": "Tratar conceitos como registos dos planos finais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Vermette describes months of design development and a shared visual bible. Create original references for an invented world and track design changes.",
          "nb": "Vermette beskriver måneder med designutvikling og en felles visuell håndbok. Lag egne referanser for en oppdiktet verden og registrer designendringer.",
          "fr": "Vermette décrit des mois de développement et une bible commune. Créez des références originales et suivez les changements.",
          "pt": "Vermette descreve meses de desenvolvimento e bíblia comum. Crie referências originais e acompanhe mudanças."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "dune-finish",
        "area": "camera",
        "prompt": {
          "en": "How should digital capture and a film-out finish be distinguished?",
          "nb": "Hvordan bør digitalt opptak og filmoverføring i etterarbeid skilles?",
          "fr": "Comment distinguer captation numérique et finition par transfert film ?",
          "pt": "Como distinguir captação digital e acabamento por transferência para película?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Claim film-out proves film camera acquisition",
              "nb": "Påstå at filmoverføring beviser analogt kameraopptak",
              "fr": "Affirmer que le transfert prouve une captation argentique",
              "pt": "Afirmar que transferência prova captação em película"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard digital masters after creating intermediates",
              "nb": "Forkast digitalmastere etter opprettelse av mellomledd",
              "fr": "Écarter les masters numériques après les intermédiaires",
              "pt": "Descartar masters digitais após intermediários"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track digital originals, film-out and scan-back separately",
              "nb": "Registrer digitaloriginaler, filmoverføring og tilbakeskann separat",
              "fr": "Suivre originaux numériques, transfert film et rescan séparément",
              "pt": "Registar originais digitais, transferência e redigitalização separadamente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ARRI documents digital capture; Fraser and FotoKem describe film-out and scan-back. Draw a workflow diagram that separates acquisition and finishing.",
          "nb": "ARRI dokumenterer digitalt opptak; Fraser og FotoKem beskriver filmoverføring og tilbakeskann. Tegn en arbeidsflyt som skiller opptak og ferdigstilling.",
          "fr": "ARRI documente la captation numérique ; Fraser et FotoKem décrivent transfert et rescan. Dessinez une chaîne séparant captation et finition.",
          "pt": "ARRI documenta captação digital; Fraser e FotoKem descrevem transferência e redigitalização. Desenhe fluxo separando captação e acabamento."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "dune-sound",
        "area": "sound",
        "prompt": {
          "en": "How can invented sounds form a coherent fictional environment?",
          "nb": "Hvordan kan oppdiktede lyder danne et sammenhengende fiktivt miljø?",
          "fr": "Comment des sons inventés forment-ils un environnement cohérent ?",
          "pt": "Como podem sons inventados formar ambiente fictício coerente?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Delay all sound exploration until final picture lock",
              "nb": "Utsett all lydutforsking til endelig bildelås",
              "fr": "Reporter toute exploration sonore au verrouillage image",
              "pt": "Adiar exploração sonora até bloqueio final da imagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop original sound families and review them during editing",
              "nb": "Utvikle originale lydfamilier og vurder dem under klipping",
              "fr": "Développer des familles sonores et les revoir au montage",
              "pt": "Desenvolver famílias sonoras e revê-las na montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign unrelated effects to recurring objects",
              "nb": "Tildel urelaterte effekter til tilbakevendende objekter",
              "fr": "Attribuer des effets sans rapport aux objets récurrents",
              "pt": "Atribuir efeitos sem relação a objetos recorrentes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Walker describes iterative collaboration between editing, music and sound; the sound team discusses a designed sonic world. Test an original family of sounds.",
          "nb": "Walker beskriver iterativt klippe-, musikk- og lydsamarbeid; lydteamet omtaler en utformet lydverden. Prøv en original familie av lyder.",
          "fr": "Walker décrit les échanges montage, musique et son ; l’équipe son un univers conçu. Testez une famille sonore originale.",
          "pt": "Walker descreve colaboração montagem, música e som; a equipa sonora um universo concebido. Teste família sonora original."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_drive_my_car_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Multilingual rehearsal, confined framing and performance selection",
      "nb": "Flerspråklige prøver, trange utsnitt og valg av spill",
      "fr": "Répétitions multilingues, cadrage exigu et sélection du jeu",
      "pt": "Ensaios multilingues, enquadramento restrito e seleção de interpretação"
    },
    "sources": [
      {
        "id": "s2",
        "title": "How Japanese DP Hidetoshi Shinomiya JSC brought the rhythms of the road and free-moving actors to Drive My Car",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/how-japanese-dp-hidetoshi-shinomiya-jsc-brought-the-rhythms-of-the-road-and-free-moving-actors-to-drive-my-car/"
      },
      {
        "id": "s3",
        "title": "ARRI cameras and lights behind the cinematography of Drive My Car",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-behind-the-cinematography-of-drive-my-car/268506-268506"
      },
      {
        "id": "s4",
        "title": "On the road with Hamaguchi Ryūsuke",
        "publisher": "BFI / Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/interviews/hamaguchi-ryusuke-drive-my-car"
      },
      {
        "id": "s5",
        "title": "In conversation: Ryusuke Hamaguchi and Hidetoshi Nishijima on adapting Drive My Car for screen",
        "publisher": "Screen Daily",
        "url": "https://www.screendaily.com/features/in-conversation-ryusuke-hamaguchi-and-hidetoshi-nishijima-on-adapting-drive-my-car-for-screen/5165498.article"
      },
      {
        "id": "s6",
        "title": "Drive My Car Director Ryusuke Hamaguchi On Being Behind The Wheel Of The Worldwide Hit That Stormed The Oscars",
        "publisher": "Deadline / Yahoo Entertainment",
        "url": "https://www.yahoo.com/entertainment/drive-car-director-ryusuke-hamaguchi-160313429.html"
      },
      {
        "id": "s7",
        "title": "Art of the Cut: Navigating love and loss in Drive My Car",
        "publisher": "Frame.io",
        "url": "https://blog.frame.io/2022/04/20/art-of-the-cut-navigating-love-and-loss-in-drive-my-car/"
      }
    ],
    "questions": [
      {
        "id": "drivemycar-reading",
        "area": "research",
        "prompt": {
          "en": "How can repeated readings support multilingual acting?",
          "nb": "Hvordan kan gjentatte lesninger støtte flerspråklig skuespill?",
          "fr": "Comment des lectures répétées soutiennent-elles le jeu multilingue ?",
          "pt": "Como podem leituras repetidas apoiar interpretação multilingue?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse text and rhythm with qualified language collaborators",
              "nb": "Øv tekst og rytme med kvalifiserte språksamarbeidere",
              "fr": "Répéter texte et rythme avec des spécialistes des langues",
              "pt": "Ensaiar texto e ritmo com especialistas linguísticos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every actor understands every language",
              "nb": "Anta at alle skuespillere forstår alle språk",
              "fr": "Supposer que chaque acteur comprend toutes les langues",
              "pt": "Supor que cada ator compreende todas as línguas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace sign-language expertise with invented gestures",
              "nb": "Erstatt tegnspråkkompetanse med oppdiktede gester",
              "fr": "Remplacer l’expertise en signes par des gestes inventés",
              "pt": "Substituir competência em língua gestual por gestos inventados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Hamaguchi describes repeated neutral readings and skilled interpreters. Plan a supported rehearsal with qualified language and sign-language collaborators.",
          "nb": "Hamaguchi beskriver gjentatte nøytrale lesninger og dyktige tolker. Planlegg tilrettelagte prøver med kvalifiserte språk- og tegnspråksamarbeidere.",
          "fr": "Hamaguchi décrit lectures neutres répétées et interprètes qualifiés. Préparez une répétition avec spécialistes des langues et des signes.",
          "pt": "Hamaguchi descreve leituras neutras repetidas e intérpretes qualificados. Planeie ensaio com especialistas linguísticos e gestuais."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "drivemycar-interior",
        "area": "camera",
        "prompt": {
          "en": "How can a confined dialogue space accommodate image and sound?",
          "nb": "Hvordan kan et trangt dialogrom tilpasses bilde og lyd?",
          "fr": "Comment un espace exigu accueille-t-il image et son ?",
          "pt": "Como pode espaço restrito acomodar imagem e som?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose angles without checking sightlines or noise",
              "nb": "Velg vinkler uten å sjekke siktlinjer eller støy",
              "fr": "Choisir les angles sans vérifier axes ni bruit",
              "pt": "Escolher ângulos sem verificar linhas de visão ou ruído"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every scene used two cameras simultaneously",
              "nb": "Anta at alle scener brukte to kameraer samtidig",
              "fr": "Supposer que chaque scène utilisait deux caméras",
              "pt": "Supor que cada cena usou duas câmaras"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test framing and microphone clearance in a safe stationary setup",
              "nb": "Prøv utsnitt og mikrofonplass i et trygt stillestående oppsett",
              "fr": "Tester cadre et place des micros dans un dispositif fixe et sûr",
              "pt": "Testar enquadramento e espaço de microfones num dispositivo fixo seguro"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The camera accounts describe compact planned setups and synchronized dialogue. Test a stationary mock-up rather than recreating filming in moving traffic.",
          "nb": "Kamerakildene beskriver kompakte planlagte oppsett og synkrondialog. Prøv en stillestående modell fremfor å gjenskape filming i trafikk.",
          "fr": "Les sources décrivent dispositifs compacts et dialogue synchrone. Testez une maquette fixe sans recréer de tournage en circulation.",
          "pt": "As fontes descrevem dispositivos compactos e diálogo síncrono. Teste maquete fixa sem recriar rodagem no trânsito."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s6"
        ]
      },
      {
        "id": "drivemycar-takes",
        "area": "research",
        "prompt": {
          "en": "How can an editor respect complete scene performances?",
          "nb": "Hvordan kan en klipper respektere sammenhengende scenespill?",
          "fr": "Comment respecter les interprétations complètes au montage ?",
          "pt": "Como pode montagem respeitar interpretações completas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose isolated lines without considering the scene",
              "nb": "Velg isolerte replikker uten å vurdere scenen",
              "fr": "Choisir des répliques isolées sans considérer la scène",
              "pt": "Escolher falas isoladas sem considerar a cena"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review entire takes and record motivated selections",
              "nb": "Gjennomgå hele tagninger og registrer begrunnede valg",
              "fr": "Examiner les prises entières et noter les choix motivés",
              "pt": "Rever tomadas completas e registar escolhas motivadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard all takes except the last",
              "nb": "Forkast alle tagninger unntatt den siste",
              "fr": "Écarter toutes les prises sauf la dernière",
              "pt": "Descartar todas as tomadas exceto a última"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Hamaguchi discusses playing scenes through and Yamazaki describes joint rushes review. Compare complete original takes before making editorial choices.",
          "nb": "Hamaguchi omtaler gjennomspilling av scener og Yamazaki felles gjennomgang av dagsopptak. Sammenlign hele egne tagninger før klippevalg.",
          "fr": "Hamaguchi évoque des scènes jouées intégralement et Yamazaki la revue commune des rushes. Comparez des prises complètes avant montage.",
          "pt": "Hamaguchi aborda cenas completas e Yamazaki revisão conjunta de brutos. Compare tomadas completas antes de montar."
        },
        "sourceIds": [
          "s5",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_flee_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Audio-led editing, anonymity and animation handoffs",
      "nb": "Lydstyrt klipping, anonymitet og animasjonsoverleveringer",
      "fr": "Montage guidé par le son, anonymat et transmissions animées",
      "pt": "Montagem guiada pelo som, anonimato e transições de animação"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Flee director on his Sundance-selected animated documentary",
        "publisher": "Nordisk Film & TV Fond",
        "url": "https://nordiskfilmogtvfond.com/news/stories/flee-director-on-his-sundance-selected-animated-documentary"
      },
      {
        "id": "s3",
        "title": "It Is Always Tempting in Animation to Show More Than You Need to: Art Director Jess Nicholls on Flee",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/111057-it-is-always-tempting-in-animation-to-show-more-than-you-need-to-art-director-jess-nicholls-on-flee/"
      },
      {
        "id": "s4",
        "title": "Editor Janus Billeskov Jansen Explains His Role In Constructing The Narrative Of Flee",
        "publisher": "Cartoon Brew",
        "url": "https://www.cartoonbrew.com/feature-film/editor-janus-billeskov-jansen-explains-his-role-in-constructing-the-narrative-of-flee-214304.html"
      },
      {
        "id": "s5",
        "title": "Oscar Contender Flee Needed to Be Animated—Here's Why",
        "publisher": "Backstage",
        "url": "https://www.backstage.com/magazine/article/flee-movie-animation-director-interview-74880/"
      },
      {
        "id": "s6",
        "title": "Using Sound to Bridge Animation and Archive Footage in Flee",
        "publisher": "A Sound Effect",
        "url": "https://www.asoundeffect.com/flee-sound/"
      },
      {
        "id": "s7",
        "title": "Flee — Music by Uno Helmersson",
        "publisher": "Milan Records",
        "url": "https://www.milanrecords.com/release/flee/"
      }
    ],
    "questions": [
      {
        "id": "flee-audio",
        "area": "research",
        "prompt": {
          "en": "How can testimony guide an animated documentary's timing?",
          "nb": "Hvordan kan vitnesbyrd styre en animert dokumentars timing?",
          "fr": "Comment le témoignage guide-t-il le rythme d’un documentaire animé ?",
          "pt": "Como pode testemunho orientar ritmo de documentário animado?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Build a consented audio edit and test rough drawings",
              "nb": "Bygg et samtykkebasert lydklipp og prøv grovtegninger",
              "fr": "Construire un montage audio consenti et tester des esquisses",
              "pt": "Construir montagem áudio consentida e testar esboços"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Invent testimony to fit finished animation",
              "nb": "Finn på vitnesbyrd for å passe ferdig animasjon",
              "fr": "Inventer des témoignages pour l’animation terminée",
              "pt": "Inventar testemunhos para animação terminada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore archival discoveries after the first cut",
              "nb": "Ignorer arkivfunn etter første klipp",
              "fr": "Ignorer les découvertes d’archives après le premier montage",
              "pt": "Ignorar descobertas de arquivo após primeira montagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jansen describes audio-led editing, animatic feedback and archival discoveries. Test a neutral consented recording and revise drawings without fabricating testimony.",
          "nb": "Jansen beskriver lydstyrt klipping, animatic-tilbakemelding og arkivfunn. Prøv et nøytralt opptak med samtykke og revider tegninger uten å dikte vitnesbyrd.",
          "fr": "Jansen décrit montage sonore, animatiques et découvertes d’archives. Testez un enregistrement neutre consenti sans inventer de témoignage.",
          "pt": "Jansen descreve montagem sonora, animáticas e descobertas de arquivo. Teste gravação neutra consentida sem inventar testemunho."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "flee-privacy",
        "area": "animation",
        "prompt": {
          "en": "How can animation help protect a documentary participant's identity?",
          "nb": "Hvordan kan animasjon bidra til å beskytte en dokumentardeltakers identitet?",
          "fr": "Comment l’animation peut-elle protéger l’identité d’un participant ?",
          "pt": "Como pode animação ajudar a proteger identidade de participante documental?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume drawn images remove every identity clue",
              "nb": "Anta at tegnede bilder fjerner alle identitetsspor",
              "fr": "Supposer que le dessin supprime tout indice d’identité",
              "pt": "Supor que desenho elimina qualquer pista de identidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Reveal private details merely for visual realism",
              "nb": "Avslør private detaljer bare for visuell realisme",
              "fr": "Révéler des détails privés au nom du réalisme",
              "pt": "Revelar detalhes privados apenas por realismo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree on anonymity limits and review identifying details",
              "nb": "Avtal anonymitetsgrenser og gjennomgå identifiserende detaljer",
              "fr": "Convenir des limites d’anonymat et revoir les détails identifiants",
              "pt": "Acordar limites de anonimato e rever detalhes identificadores"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ladekjær describes animation as an anonymity strategy and Rasmussen describes different animation modes. Evaluate privacy separately from style in a fictional exercise.",
          "nb": "Ladekjær beskriver animasjon som anonymitetsstrategi og Rasmussen ulike animasjonsformer. Vurder personvern separat fra stil i en fiktiv øvelse.",
          "fr": "Ladekjær décrit une stratégie d’anonymat et Rasmussen des modes distincts. Évaluez séparément confidentialité et style.",
          "pt": "Ladekjær descreve estratégia de anonimato e Rasmussen modos distintos. Avalie privacidade separadamente do estilo."
        },
        "sourceIds": [
          "s2",
          "s5"
        ]
      },
      {
        "id": "flee-handoff",
        "area": "sound",
        "prompt": {
          "en": "How can distributed animation and sound teams maintain continuity?",
          "nb": "Hvordan kan distribuerte animasjons- og lydteam bevare kontinuitet?",
          "fr": "Comment des équipes distribuées maintiennent-elles la continuité ?",
          "pt": "Como podem equipas distribuídas manter continuidade?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use music to drown out every testimony",
              "nb": "Bruk musikk til å overdøve alle vitnesbyrd",
              "fr": "Couvrir tous les témoignages par la musique",
              "pt": "Abafar todos os testemunhos com música"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use versioned references and shared animatics for sound review",
              "nb": "Bruk versjonerte referanser og felles animatics ved lydgjennomgang",
              "fr": "Utiliser références versionnées et animatiques communes pour le son",
              "pt": "Usar referências versionadas e animáticas partilhadas para som"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Send unlabelled versions to different departments",
              "nb": "Send umerkede versjoner til ulike avdelinger",
              "fr": "Envoyer des versions non identifiées aux équipes",
              "pt": "Enviar versões sem identificação a equipas diferentes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sources document distributed animation and a voice-centered soundtrack. Design a shared handoff log and check how sound and image remain aligned.",
          "nb": "Kildene dokumenterer distribuert animasjon og et stemmesentrert lydbilde. Lag en felles overleveringslogg og kontroller samordningen av lyd og bilde.",
          "fr": "Les sources documentent animation distribuée et bande sonore centrée sur la voix. Créez un journal commun et vérifiez la cohérence image-son.",
          "pt": "As fontes documentam animação distribuída e banda centrada na voz. Crie registo comum e verifique alinhamento imagem-som."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_worst_person_in_the_world_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Oslo locations, film-origin photography and temporal continuity",
      "nb": "Oslo-steder, analog fotografering og tidskontinuitet",
      "fr": "Lieux d’Oslo, photographie argentique et continuité temporelle",
      "pt": "Locais de Oslo, fotografia em película e continuidade temporal"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Verdens verste menneske (The Worst Person in the World)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/verdens-verste-menneske/"
      },
      {
        "id": "s1",
        "title": "The Worst Person in the World - BFI Southbank Programme Notes",
        "publisher": "British Film Institute",
        "url": "https://bfidatadigipres.github.io/new%20releases/2022/03/28/worst-person-in-the-world/"
      },
      {
        "id": "s2",
        "title": "DP Kasper Tuxen DFF lenses a modern-day love story on 35mm",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/dp-kasper-tuxen-dff-lenses-a-modern-day-love-story-on-35mm-for-joachim-triers-2021-cannes-contender-the-worst-person-in-the-world/"
      },
      {
        "id": "s3",
        "title": "Verdens verste menneske nominert til to Oscar",
        "publisher": "Norwegian Film Institute",
        "url": "https://www.nfi.no/nyheter/verdens-verste-menneske-nominert-til-to-oscar"
      }
    ],
    "questions": [
      {
        "id": "worstperson-oslo",
        "area": "research",
        "prompt": {
          "en": "How can city locations express a changing character perspective?",
          "nb": "Hvordan kan bysteder uttrykke et skiftende karakterperspektiv?",
          "fr": "Comment les lieux urbains expriment-ils un point de vue changeant ?",
          "pt": "Como podem locais urbanos exprimir perspetiva variável?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Scout contrasting everyday locations and map narrative functions",
              "nb": "Undersøk kontrasterende hverdagssteder og kartlegg fortellerfunksjonene",
              "fr": "Repérer des lieux quotidiens contrastés et leurs fonctions narratives",
              "pt": "Pesquisar locais quotidianos contrastantes e funções narrativas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose locations solely for postcard beauty",
              "nb": "Velg steder bare etter postkortskjønnhet",
              "fr": "Choisir les lieux pour leur seule beauté touristique",
              "pt": "Escolher locais apenas pela beleza turística"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the city as unrelated background decoration",
              "nb": "Behandle byen som urelatert bakgrunnsdekor",
              "fr": "Traiter la ville comme décor sans rapport",
              "pt": "Tratar cidade como fundo decorativo sem relação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "NFI places the film in Trier's Oslo trilogy; Tuxen discusses location and light research. Develop an original city-based character map.",
          "nb": "NFI plasserer filmen i Triers Oslo-trilogi; Tuxen omtaler steds- og lysresearch. Utvikle et originalt bybasert karakterkart.",
          "fr": "Le NFI situe le film dans la trilogie d’Oslo ; Tuxen évoque repérages et lumière. Créez une carte urbaine originale du personnage.",
          "pt": "O NFI situa filme na trilogia de Oslo; Tuxen aborda locais e luz. Crie mapa urbano original da personagem."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "worstperson-performance",
        "area": "camera",
        "prompt": {
          "en": "How can film-origin photography leave room for actor freedom?",
          "nb": "Hvordan kan analog fotografering gi rom for skuespillerfrihet?",
          "fr": "Comment le tournage argentique laisse-t-il de la liberté aux acteurs ?",
          "pt": "Como pode fotografia em película permitir liberdade aos atores?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume film stock guarantees spontaneous performance",
              "nb": "Anta at filmtypen garanterer spontant spill",
              "fr": "Supposer que la pellicule garantit le jeu spontané",
              "pt": "Supor que película garante interpretação espontânea"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Restrict all movement without performer discussion",
              "nb": "Begrens all bevegelse uten samtale med utøverne",
              "fr": "Limiter les mouvements sans discuter avec les acteurs",
              "pt": "Limitar movimentos sem discutir com intérpretes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test framing and light within agreed performance boundaries",
              "nb": "Prøv utsnitt og lys innenfor avtalte spillerammer",
              "fr": "Tester cadre et lumière dans des limites de jeu convenues",
              "pt": "Testar enquadramento e luz dentro de limites acordados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Tuxen describes 35mm discipline, controlled lighting and actor freedom. Compare original framing tests rather than attributing performance quality to film format.",
          "nb": "Tuxen beskriver 35 mm-disiplin, kontrollert lys og skuespillerfrihet. Sammenlign egne utsnitt fremfor å tilskrive spillekvalitet til filmformat.",
          "fr": "Tuxen décrit discipline du 35 mm, lumière contrôlée et liberté. Comparez des cadrages sans attribuer la qualité du jeu au format.",
          "pt": "Tuxen descreve disciplina de 35 mm, luz controlada e liberdade. Compare enquadramentos sem atribuir qualidade ao formato."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "worstperson-freeze",
        "area": "camera",
        "prompt": {
          "en": "How can a stylized interruption of time retain visual continuity?",
          "nb": "Hvordan kan et stilisert tidsbrudd bevare visuell kontinuitet?",
          "fr": "Comment un arrêt temporel stylisé préserve-t-il la continuité visuelle ?",
          "pt": "Como pode interrupção temporal estilizada preservar continuidade visual?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Confuse screen duration with actual shooting time",
              "nb": "Forveksle skjermvarighet med faktisk opptakstid",
              "fr": "Confondre durée à l’écran et temps de tournage",
              "pt": "Confundir duração no ecrã com tempo de rodagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record continuity references and test across shooting sessions",
              "nb": "Registrer kontinuitetsreferanser og prøv på tvers av opptaksøkter",
              "fr": "Documenter les références et tester entre sessions de tournage",
              "pt": "Registar referências e testar entre sessões de rodagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume daylight and weather always match automatically",
              "nb": "Anta at dagslys og vær alltid samsvarer automatisk",
              "fr": "Supposer que lumière et météo se raccordent automatiquement",
              "pt": "Supor que luz e clima correspondem automaticamente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Tuxen describes continuity across multiple days for the frozen-time sequence. Test a short original interruption and document the visual continuity.",
          "nb": "Tuxen beskriver kontinuitet over flere dager for sekvensen med frosset tid. Prøv et kort originalt tidsbrudd og dokumenter visuell kontinuitet.",
          "fr": "Tuxen décrit la continuité sur plusieurs jours du temps figé. Testez une interruption originale et documentez les raccords.",
          "pt": "Tuxen descreve continuidade durante vários dias para tempo congelado. Teste interrupção original e documente continuidade."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_titane_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Color planning, practical-digital effects and structural revision",
      "nb": "Fargeplanlegging, praktisk-digitale effekter og strukturrevisjon",
      "fr": "Planification couleur, effets hybrides et révision structurelle",
      "pt": "Planeamento cromático, efeitos híbridos e revisão estrutural"
    },
    "sources": [
      {
        "id": "s1",
        "title": "The cinematography of Titane",
        "publisher": "British Cinematographer / ZEISS",
        "url": "https://britishcinematographer.co.uk/zeiss-talking-cinematography-the-cinematography-of-titane/"
      },
      {
        "id": "s2",
        "title": "Belgian DP Ruben Impens SBC and director Julia Ducournau push the boundaries on 2021's most shocking movie Titane",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/titane/"
      },
      {
        "id": "s3",
        "title": "Breaking Bodies: Julia Ducournau on Titane",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/112369-breaking-bodies-julia-ducournau-on-titane/"
      },
      {
        "id": "s4",
        "title": "TITANE: Julia Ducournau talks one of 2021's most celebrated horror films",
        "publisher": "Rue Morgue",
        "url": "https://rue-morgue.com/titane-julia-ducournau-talks-one-of-2021s-most-celebrated-horror-films/"
      },
      {
        "id": "s6",
        "title": "Julia Ducournau on the Transformative Arc of Titane and Empathetic Values of Dark Humor",
        "publisher": "The Film Stage",
        "url": "https://thefilmstage.com/julia-ducournau-on-the-transformative-arc-of-titane-and-empathetic-values-of-dark-humor/"
      }
    ],
    "questions": [
      {
        "id": "titane-color",
        "area": "camera",
        "prompt": {
          "en": "How can color planning support changing narrative environments?",
          "nb": "Hvordan kan fargeplanlegging støtte skiftende fortellingsmiljøer?",
          "fr": "Comment une palette planifiée soutient-elle des décors changeants ?",
          "pt": "Como pode planeamento cromático apoiar ambientes variáveis?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Create reference tests and adapt them during grading",
              "nb": "Lag referanseprøver og tilpass dem under gradering",
              "fr": "Créer des essais de référence et les adapter à l’étalonnage",
              "pt": "Criar testes de referência e adaptá-los na gradação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose one arbitrary color for every transition",
              "nb": "Velg én vilkårlig farge for alle overganger",
              "fr": "Choisir une couleur arbitraire pour chaque transition",
              "pt": "Escolher uma cor arbitrária para todas as transições"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the camera model alone determines the palette",
              "nb": "Anta at kameramodellen alene bestemmer paletten",
              "fr": "Supposer que la caméra seule détermine la palette",
              "pt": "Supor que modelo da câmara determina sozinho a paleta"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Impens describes planned light and color and subsequent grading. Develop original palette tests for fictional environments and record revisions.",
          "nb": "Impens beskriver planlagt lys og farge samt senere gradering. Utvikle egne palettprøver for fiktive miljøer og registrer revisjoner.",
          "fr": "Impens décrit lumière et couleur planifiées puis étalonnage. Développez des palettes originales et notez les révisions.",
          "pt": "Impens descreve luz e cor planeadas e gradação posterior. Desenvolva paletas originais e registe revisões."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "titane-effects",
        "area": "animation",
        "prompt": {
          "en": "How can practical makeup and digital effects be coordinated safely?",
          "nb": "Hvordan kan praktisk sminke og digitale effekter samordnes trygt?",
          "fr": "Comment coordonner maquillage pratique et effets numériques en sécurité ?",
          "pt": "Como coordenar maquilhagem prática e efeitos digitais em segurança?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Demand painful effects to avoid digital work",
              "nb": "Krev smertefulle effekter for å unngå digitalt arbeid",
              "fr": "Exiger des effets douloureux pour éviter le numérique",
              "pt": "Exigir efeitos dolorosos para evitar trabalho digital"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume practical makeup eliminates all postproduction",
              "nb": "Anta at praktisk sminke fjerner alt etterarbeid",
              "fr": "Supposer que le maquillage élimine toute postproduction",
              "pt": "Supor que maquilhagem elimina toda pós-produção"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use qualified specialists and review harmless mock-up composites",
              "nb": "Bruk kvalifiserte spesialister og gjennomgå ufarlige prøvekompositter",
              "fr": "Consulter des spécialistes et revoir des composites d’essai sans danger",
              "pt": "Consultar especialistas e rever composições de teste sem perigo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ducournau describes prosthetics and specialist practical and visual-effects collaboration. Plan a harmless object-based test rather than reenacting injury.",
          "nb": "Ducournau beskriver proteser og spesialistsamarbeid mellom praktiske og visuelle effekter. Planlegg en ufarlig objektprøve fremfor å gjenskape skade.",
          "fr": "Ducournau décrit prothèses et collaboration entre spécialistes. Prévoyez un essai d’objet sans danger, sans rejouer de blessure.",
          "pt": "Ducournau descreve próteses e colaboração entre especialistas. Planeie teste de objeto sem perigo, sem reencenar lesão."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "titane-structure",
        "area": "research",
        "prompt": {
          "en": "How can editorial consultation support an unusual narrative structure?",
          "nb": "Hvordan kan klipperådgivning støtte en uvanlig fortellingsstruktur?",
          "fr": "Comment une consultation au montage soutient-elle une structure atypique ?",
          "pt": "Como pode consulta de montagem apoiar estrutura atípica?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat any consultation as proof of co-authorship",
              "nb": "Behandle all rådgivning som bevis på medforfatterskap",
              "fr": "Traiter toute consultation comme preuve de coécriture",
              "pt": "Tratar toda consulta como prova de coautoria"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare scene arrangements and preserve authorship records",
              "nb": "Sammenlign scenerekkefølger og bevar opphavsregistrering",
              "fr": "Comparer les ordres de scènes et préserver les crédits",
              "pt": "Comparar ordens de cenas e preservar créditos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Force every draft into the same three-act template",
              "nb": "Tving alle utkast inn i samme treaktsmal",
              "fr": "Forcer chaque version dans le même modèle en trois actes",
              "pt": "Forçar versões no mesmo modelo de três atos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ducournau describes a layered structure and Bouzy's writing-stage consultation. Test alternative arrangements while distinguishing editorial advice from screenplay credit.",
          "nb": "Ducournau beskriver lagdelt struktur og Bouzys rådgivning under skriving. Prøv alternative rekkefølger og skill klipperåd fra manuskreditering.",
          "fr": "Ducournau décrit structure stratifiée et consultation de Bouzy. Testez d’autres ordres en distinguant conseil et crédit de scénario.",
          "pt": "Ducournau descreve estrutura em camadas e consulta de Bouzy. Teste ordens distinguindo conselho e crédito de argumento."
        },
        "sourceIds": [
          "s3",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_power_of_the_dog_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Prepared framing, constructed landscapes and sonic tension",
      "nb": "Forberedt utsnitt, konstruerte landskap og lydspenning",
      "fr": "Cadrage préparé, paysages construits et tension sonore",
      "pt": "Enquadramento preparado, paisagens construídas e tensão sonora"
    },
    "sources": [
      {
        "id": "s3",
        "title": "2022 Oscar winners rely on ARRI cameras and lenses",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/2022-oscar-winners-rely-on-arri-cameras-and-lenses"
      },
      {
        "id": "s5",
        "title": "The Power of the Dog cinematographer Ari Wegner",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2021/September-October-2021/-I-The-Power-of-the-Dog-I-cinematographer-Ari-We.aspx"
      },
      {
        "id": "s6",
        "title": "The Best Way to Fight the Sun is With the Sun: DP Ari Wegner on The Power of the Dog",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/112712-dp-ari-wegner-the-power-of-the-dog/"
      },
      {
        "id": "s7",
        "title": "The Power of the Dog Production Designers Built a House from Scratch",
        "publisher": "Netflix Tudum",
        "url": "https://www.netflix.com/tudum/articles/the-power-of-the-dog-production-designers-built-a-house-from-scratch"
      },
      {
        "id": "s9",
        "title": "Art of the Cut: Cutting the Tension in The Power of the Dog",
        "publisher": "Frame.io Insider",
        "url": "https://blog.frame.io/2022/01/19/art-of-the-cut-the-power-of-the-dog/"
      },
      {
        "id": "s11",
        "title": "The Oscar-Nominated Sounds of The Power of the Dog",
        "publisher": "Netflix Tudum",
        "url": "https://www.netflix.com/tudum/articles/oscar-nominated-sounds-of-the-power-of-the-dog"
      },
      {
        "id": "s12",
        "title": "Exploring Audio with Robert Mackenzie in The Power of the Dog",
        "publisher": "PremiumBeat",
        "url": "https://www.premiumbeat.com/blog/power-of-the-dog-robert-mackenzie/"
      },
      {
        "id": "s14",
        "title": "The invisible effects of The Power of the Dog",
        "publisher": "Befores & Afters",
        "url": "https://beforesandafters.com/2022/08/24/the-invisible-effects-of-the-power-of-the-dog/"
      }
    ],
    "questions": [
      {
        "id": "powerofthedog-prep",
        "area": "camera",
        "prompt": {
          "en": "How can thorough storyboarding leave room for on-set discoveries?",
          "nb": "Hvordan kan grundig storyboard gi rom for oppdagelser på settet?",
          "fr": "Comment un découpage approfondi permet-il des découvertes au tournage ?",
          "pt": "Como pode storyboard aprofundado permitir descobertas na rodagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test lenses and frames while allowing motivated adjustments",
              "nb": "Prøv objektiver og utsnitt og tillat begrunnede justeringer",
              "fr": "Tester optiques et cadres en permettant des ajustements motivés",
              "pt": "Testar objetivas e enquadramentos permitindo ajustes motivados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Prohibit changes after the first storyboard",
              "nb": "Forby endringer etter første storyboard",
              "fr": "Interdire les changements après le premier découpage",
              "pt": "Proibir mudanças após primeiro storyboard"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Select lenses solely by equipment availability",
              "nb": "Velg objektiver bare ut fra tilgjengelig utstyr",
              "fr": "Choisir les optiques selon la seule disponibilité",
              "pt": "Escolher objetivas apenas por disponibilidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wegner describes extensive preparation, lens tests and on-day discoveries. Make a storyboard with tested alternatives and record reasons for adjustments.",
          "nb": "Wegner beskriver omfattende forberedelse, objektivprøver og oppdagelser på opptaksdagen. Lag storyboard med testede alternativer og registrer endringsgrunnene.",
          "fr": "Wegner décrit préparation, essais optiques et découvertes au tournage. Créez un découpage avec variantes testées et motifs des ajustements.",
          "pt": "Wegner descreve preparação, testes óticos e descobertas na rodagem. Crie storyboard com variantes testadas e motivos de ajustes."
        },
        "sourceIds": [
          "s3",
          "s5",
          "s6"
        ]
      },
      {
        "id": "powerofthedog-ranch",
        "area": "research",
        "prompt": {
          "en": "How can constructed settings connect to surrounding landscapes?",
          "nb": "Hvordan kan konstruerte miljøer forbindes med omliggende landskap?",
          "fr": "Comment des décors construits se relient-ils au paysage ?",
          "pt": "Como podem cenários construídos ligar-se à paisagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all views came from one real ranch",
              "nb": "Anta at alle utsyn kom fra én ekte ranch",
              "fr": "Supposer que toutes les vues viennent d’un ranch réel",
              "pt": "Supor que todas as vistas vêm de um rancho real"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat stage backgrounds as unrelated landscapes",
              "nb": "Behandle studiobakgrunner som urelaterte landskap",
              "fr": "Traiter les fonds de studio comme paysages sans rapport",
              "pt": "Tratar fundos de estúdio como paisagens sem relação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Match design and sightlines across physical and digital elements",
              "nb": "Samordne design og siktlinjer mellom fysiske og digitale elementer",
              "fr": "Harmoniser design et axes entre éléments physiques et numériques",
              "pt": "Harmonizar design e linhas de visão entre elementos físicos e digitais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sources describe a constructed ranch, stage backgrounds and digital extensions. Design an original fictional environment separating found, built and digital components.",
          "nb": "Kildene beskriver en bygget ranch, studiobakgrunner og digitale utvidelser. Utform et fiktivt miljø som skiller eksisterende, bygde og digitale komponenter.",
          "fr": "Les sources décrivent ranch construit, fonds de studio et extensions numériques. Créez un décor distinguant éléments trouvés, construits et numériques.",
          "pt": "As fontes descrevem rancho construído, fundos de estúdio e extensões digitais. Crie cenário distinguindo elementos encontrados, construídos e digitais."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s14"
        ]
      },
      {
        "id": "powerofthedog-tension",
        "area": "sound",
        "prompt": {
          "en": "How can sound and score develop tension together during editing?",
          "nb": "Hvordan kan lyd og musikk utvikle spenning sammen under klipping?",
          "fr": "Comment son et musique développent-ils la tension ensemble au montage ?",
          "pt": "Como podem som e música desenvolver tensão juntos na montagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use constant loud cues to resolve every uncertainty",
              "nb": "Bruk konstant høy musikk til å avgjøre all usikkerhet",
              "fr": "Utiliser des signaux forts pour résoudre toute incertitude",
              "pt": "Usar sinais fortes para resolver toda incerteza"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Exchange original musical sketches and sound studies during revisions",
              "nb": "Utveksle originale musikkskisser og lydstudier under revisjoner",
              "fr": "Échanger esquisses musicales originales et études sonores pendant les révisions",
              "pt": "Trocar esboços musicais originais e estudos sonoros durante revisões"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Complete both departments' work without reviewing overlap",
              "nb": "Fullfør begge avdelingenes arbeid uten å vurdere overlapping",
              "fr": "Achever les travaux sans examiner leur recouvrement",
              "pt": "Concluir trabalhos sem rever sobreposição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mackenzie describes parallel sound and score development; Sciberras discusses editorial tension. Test original alternatives while preserving interpretive space.",
          "nb": "Mackenzie beskriver parallell lyd- og musikkutvikling; Sciberras omtaler klippespenning. Prøv egne alternativer og bevar tolkningsrom.",
          "fr": "Mackenzie décrit son et musique en parallèle ; Sciberras la tension du montage. Testez des alternatives originales en préservant l’interprétation.",
          "pt": "Mackenzie descreve som e música em paralelo; Sciberras tensão de montagem. Teste alternativas originais preservando interpretação."
        },
        "sourceIds": [
          "s9",
          "s11",
          "s12"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_coda_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Signed dialogue framing, language review and perspective sound",
      "nb": "Tegnspråkutsnitt, språkgjennomgang og perspektivlyd",
      "fr": "Cadrage du dialogue signé, révision linguistique et son perspectif",
      "pt": "Enquadramento de diálogo gestual, revisão linguística e som de perspetiva"
    },
    "sources": [
      {
        "id": "s1",
        "title": "AFI Alumni Siân Heder and Paula Huidobro on their Sundance Award-Winning Film CODA",
        "publisher": "American Film Institute",
        "url": "https://www.afi.com/news/afi-alumni-sian-heder-and-paula-huidobro-on-their-sundance-award-winning-film-coda/"
      },
      {
        "id": "s2",
        "title": "Filmmaker Interview: SIÂN HEDER, director of CODA",
        "publisher": "SAGindie",
        "url": "https://www.sagindie.org/interviews/sian-heder-coda/"
      },
      {
        "id": "s4",
        "title": "The Complexities of Being a Hearing Child in a Deaf Family: DP Paula Huidobro on CODA",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/111174-the-complexities-of-being-a-hearing-child-in-a-deaf-family-dp-paula-huidobro-on-coda/"
      },
      {
        "id": "s5",
        "title": "Shot on VENICE: How DP Paula Huidobro Won Best Picture of the Year with CODA",
        "publisher": "Sony Cine",
        "url": "https://sony-cinematography.com/articles/shot-on-venice-how-dp-paula-huidobro-created-the-visual-language-that-won-best-picture-of-the-year/"
      },
      {
        "id": "s6",
        "title": "Director's Chair: Sian Heder — CODA",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2021/July-August-2021/Directors-Chair-Sian-Heder-i-CODA-i-.aspx"
      },
      {
        "id": "s7",
        "title": "How the subtlety of sound swells emotional intimacy in Coda",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment-arts/awards/story/2021-12-14/how-the-subtlety-of-sound-swells-the-emotional-intimacy-behind-coda"
      }
    ],
    "questions": [
      {
        "id": "coda-sign",
        "area": "camera",
        "prompt": {
          "en": "How should framing support a signed conversation?",
          "nb": "Hvordan bør utsnitt støtte en samtale på tegnspråk?",
          "fr": "Comment le cadrage soutient-il une conversation signée ?",
          "pt": "Como deve enquadramento apoiar conversa em língua gestual?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Consult fluent signers and preserve hands, faces and sightlines",
              "nb": "Rådfør deg med tegnspråkkyndige og bevar hender, ansikter og siktlinjer",
              "fr": "Consulter des signeurs compétents et préserver mains, visages et axes",
              "pt": "Consultar utilizadores fluentes e preservar mãos, rostos e linhas de visão"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Crop hands out for conventional close-ups",
              "nb": "Beskjær hendene bort for konvensjonelle nærbilder",
              "fr": "Éliminer les mains pour des gros plans conventionnels",
              "pt": "Cortar mãos para grandes planos convencionais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every sign language has identical grammar",
              "nb": "Anta at alle tegnspråk har identisk grammatikk",
              "fr": "Supposer que toutes les langues des signes ont la même grammaire",
              "pt": "Supor que todas as línguas gestuais têm gramática igual"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Heder and Huidobro discuss ASL masters and visible hands and sightlines. Plan an exercise with fluent collaborators rather than inventing signs.",
          "nb": "Heder og Huidobro omtaler ASL-fagpersoner, synlige hender og siktlinjer. Planlegg en øvelse med kompetente samarbeidspartnere fremfor å finne på tegn.",
          "fr": "Heder et Huidobro évoquent spécialistes ASL, mains visibles et axes. Préparez un exercice avec signeurs compétents sans inventer de signes.",
          "pt": "Heder e Huidobro abordam especialistas ASL, mãos visíveis e linhas de visão. Planeie exercício com utilizadores fluentes sem inventar sinais."
        },
        "sourceIds": [
          "s1",
          "s4",
          "s5"
        ]
      },
      {
        "id": "coda-editorial",
        "area": "research",
        "prompt": {
          "en": "How can an editor preserve meaning in signed dialogue?",
          "nb": "Hvordan kan en klipper bevare mening i tegnspråkdialog?",
          "fr": "Comment le montage préserve-t-il le sens du dialogue signé ?",
          "pt": "Como pode montagem preservar sentido de diálogo gestual?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Edit signs solely according to subtitle duration",
              "nb": "Klipp tegn bare etter undertekstens varighet",
              "fr": "Monter les signes selon la seule durée des sous-titres",
              "pt": "Montar sinais apenas pela duração das legendas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove interpreter guidance before editorial checks",
              "nb": "Fjern tolkeveiledning før klippekontroller",
              "fr": "Retirer l’aide des interprètes avant les vérifications",
              "pt": "Remover orientação dos intérpretes antes das verificações"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use qualified review and track translation notes by take",
              "nb": "Bruk kvalifisert gjennomgang og knytt oversettelsesnotater til tagninger",
              "fr": "Faire réviser par des spécialistes et suivre les notes par prise",
              "pt": "Usar revisão qualificada e registar notas por tomada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Heder describes ASL guide tracks and language-master notes. Design a review log that respects the meaning and timing of the original signed performance.",
          "nb": "Heder beskriver ASL-veiledningsspor og fagnotater. Lag en gjennomgangslogg som respekterer meningen og timingen i originalspillet på tegnspråk.",
          "fr": "Heder décrit pistes guides ASL et notes des spécialistes. Créez un suivi respectant sens et rythme du jeu signé original.",
          "pt": "Heder descreve pistas guia ASL e notas de especialistas. Crie registo respeitando sentido e ritmo da interpretação gestual original."
        },
        "sourceIds": [
          "s2",
          "s6"
        ]
      },
      {
        "id": "coda-sound",
        "area": "sound",
        "prompt": {
          "en": "How can sound perspective change without generalizing Deaf experience?",
          "nb": "Hvordan kan lydperspektiv endres uten å generalisere døves erfaring?",
          "fr": "Comment varier le point d’écoute sans uniformiser l’expérience sourde ?",
          "pt": "Como variar perspetiva sonora sem uniformizar experiência de pessoas surdas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume live singing needs no editorial review",
              "nb": "Anta at livesang ikke krever klippegjennomgang",
              "fr": "Supposer que le chant direct ne demande aucune révision",
              "pt": "Supor que canto ao vivo dispensa revisão"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Consult collaborators and test scene-specific listening perspectives",
              "nb": "Rådfør deg med samarbeidspartnere og prøv scenespesifikke lytteperspektiver",
              "fr": "Consulter les collaborateurs et tester des points d’écoute propres aux scènes",
              "pt": "Consultar colaboradores e testar perspetivas de escuta específicas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply the same silence effect to every Deaf character",
              "nb": "Bruk samme stillhetseffekt for alle døve karakterer",
              "fr": "Appliquer le même silence à chaque personnage sourd",
              "pt": "Aplicar mesmo silêncio a toda personagem surda"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound team describes live singing and perspective-based mixing. Test a fictional scene with informed feedback without claiming one mix represents all Deaf experience.",
          "nb": "Lydteamet beskriver livesang og perspektivbasert miks. Prøv en fiktiv scene med informert tilbakemelding uten å påstå at én miks representerer alle døves erfaring.",
          "fr": "L’équipe décrit chant direct et mixage perspectif. Testez une scène avec avis informés sans prétendre représenter toutes les expériences sourdes.",
          "pt": "A equipa descreve canto ao vivo e mistura de perspetiva. Teste cena com parecer informado sem representar todas as experiências surdas."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_memoria_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Long takes, situated listening and iterative sound",
      "nb": "Lange tagninger, stedbasert lytting og iterativ lyd",
      "fr": "Plans longs, écoute située et son itératif",
      "pt": "Planos longos, escuta situada e som iterativo"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Seeing the world through film and Memoria",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/memoria/"
      },
      {
        "id": "s2",
        "title": "Uncle Boonmee: 10 Years Later — quarantine talk with Apichatpong Weerasethakul",
        "publisher": "Thai Film Archive",
        "url": "https://fapot.or.th/main/information/article/view/298/1"
      },
      {
        "id": "s3",
        "title": "Even If the Wind Blows It Gives Us Something To Work With: DP Sayombhu Mukdeeprom on Shooting Memoria",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/112726-even-if-the-wind-blows-it-gives-us-something-to-work-with-dp-sayombhu-mukdeeprom-on-shooting-apichatpong-weerasethakuls-memoria/"
      },
      {
        "id": "s4",
        "title": "In the Quiet Moments: The Memoria Sound Team of Akritchalerm Kalayanamitr, Richard Hocks and Javier Umpierrez",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/112910-interview-akritchalerm-kalayanamitr-richard-hocks-javier-umpierrez-sound-designer-memoria/"
      },
      {
        "id": "s5",
        "title": "Apichatpong on Memoria, his odyssey into the soundscapes of Colombia",
        "publisher": "BFI Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/apichatpong-memoria-his-odyssey-into-soundscapes-colombia"
      },
      {
        "id": "s6",
        "title": "Interview with the Director",
        "publisher": "Memoria official film site",
        "url": "https://memoriathefilm.com/apichatpong-weerasethakul/"
      }
    ],
    "questions": [
      {
        "id": "memoria-duration",
        "area": "camera",
        "prompt": {
          "en": "How should a long film take be planned within recording limits?",
          "nb": "Hvordan bør en lang filmtagning planlegges innenfor opptaksgrenser?",
          "fr": "Comment préparer un plan long dans les limites du support ?",
          "pt": "Como planear plano longo dentro dos limites de gravação?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse duration and track available recording capacity",
              "nb": "Øv inn varighet og registrer tilgjengelig opptakskapasitet",
              "fr": "Répéter la durée et suivre la capacité d’enregistrement",
              "pt": "Ensaiar duração e acompanhar capacidade de gravação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every magazine holds unlimited recording time",
              "nb": "Anta at hvert magasin har ubegrenset opptakstid",
              "fr": "Supposer que chaque magasin a une durée illimitée",
              "pt": "Supor que cada magazine tem duração ilimitada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore location conditions until the final take",
              "nb": "Ignorer stedsforhold frem til siste tagning",
              "fr": "Ignorer les conditions du lieu jusqu’à la prise finale",
              "pt": "Ignorar condições locais até tomada final"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak and the Thai Film Archive describe film rolls and long-take discipline; the DP discusses adaptation to locations. Plan a take within your own equipment limits.",
          "nb": "Kodak og Thai Film Archive beskriver filmruller og langtagningdisiplin; fotografen omtaler stedstilpasning. Planlegg en tagning innenfor eget utstyrs grenser.",
          "fr": "Kodak et les archives thaïes décrivent bobines et plans longs ; le chef opérateur l’adaptation aux lieux. Planifiez une prise dans les limites du matériel.",
          "pt": "Kodak e arquivo tailandês descrevem bobinas e planos longos; o fotógrafo adaptação local. Planeie tomada dentro dos limites do equipamento."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "memoria-listen",
        "area": "sound",
        "prompt": {
          "en": "How can listening inform the portrayal of a landscape?",
          "nb": "Hvordan kan lytting informere fremstillingen av et landskap?",
          "fr": "Comment l’écoute nourrit-elle la représentation d’un paysage ?",
          "pt": "Como pode escuta informar representação de paisagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat local language and acoustics as interchangeable",
              "nb": "Behandle lokalt språk og akustikk som utskiftbare",
              "fr": "Traiter langue et acoustique locale comme interchangeables",
              "pt": "Tratar língua e acústica local como intercambiáveis"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace all settings with one generic ambience",
              "nb": "Erstatt alle miljøer med én generisk atmosfærelyd",
              "fr": "Remplacer tous les lieux par une ambiance générique",
              "pt": "Substituir todos os locais por ambiente genérico"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record permitted ambient references and compare spatial qualities",
              "nb": "Ta opp tillatte miljølydreferanser og sammenlign romlige egenskaper",
              "fr": "Enregistrer des ambiances autorisées et comparer leurs qualités spatiales",
              "pt": "Gravar ambientes autorizados e comparar qualidades espaciais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Apichatpong describes Colombia as a sonic experience; the sound sources document location ambience. Create a listening journal distinguishing recorded and designed sounds.",
          "nb": "Apichatpong beskriver Colombia som lydopplevelse; lydkildene dokumenterer stedslyd. Lag en lyttelogg som skiller opptatte og utformede lyder.",
          "fr": "Apichatpong décrit la Colombie comme expérience sonore ; les sources documentent les ambiances. Créez un journal distinguant sons enregistrés et conçus.",
          "pt": "Apichatpong descreve Colômbia como experiência sonora; fontes documentam ambientes. Crie diário distinguindo sons gravados e concebidos."
        },
        "sourceIds": [
          "s4",
          "s5",
          "s6"
        ]
      },
      {
        "id": "memoria-signature",
        "area": "sound",
        "prompt": {
          "en": "How can a recurring sound be refined without fixing its meaning?",
          "nb": "Hvordan kan en tilbakevendende lyd foredles uten å fastlåse meningen?",
          "fr": "Comment affiner un son récurrent sans imposer sa signification ?",
          "pt": "Como refinar som recorrente sem impor significado?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use one unreviewed effect throughout the film",
              "nb": "Bruk én ugjennomgått effekt gjennom hele filmen",
              "fr": "Utiliser un effet non vérifié dans tout le film",
              "pt": "Usar efeito não revisto durante todo filme"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original sound versions at comfortable listening levels",
              "nb": "Sammenlign originale lydversjoner ved behagelige lyttenivåer",
              "fr": "Comparer des versions originales à niveaux confortables",
              "pt": "Comparar versões originais em níveis confortáveis"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Make the sound as loud as possible",
              "nb": "Gjør lyden så høy som mulig",
              "fr": "Rendre le son aussi fort que possible",
              "pt": "Tornar som tão alto quanto possível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound team describes iterative development of the signature sound; the director emphasizes sound and silence. Compare original alternatives safely in their scene context.",
          "nb": "Lydteamet beskriver iterativ utvikling av signaturlyden; regissøren vektlegger lyd og stillhet. Sammenlign egne alternativer trygt i scenekontekst.",
          "fr": "L’équipe décrit le développement itératif du son signature ; le réalisateur insiste sur le silence. Comparez des alternatives originales en sécurité dans leur contexte.",
          "pt": "A equipa descreve desenvolvimento iterativo do som assinatura; o realizador enfatiza silêncio. Compare alternativas originais em segurança no contexto."
        },
        "sourceIds": [
          "s4",
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_annette_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Live singing, puppetry and location substitution",
      "nb": "Livesang, dukkespill og stedserstatning",
      "fr": "Chant direct, marionnettes et substitution des lieux",
      "pt": "Canto ao vivo, marionetas e substituição de locais"
    },
    "sources": [
      {
        "id": "s0",
        "title": "ANNETTE",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/annette/"
      },
      {
        "id": "s1",
        "title": "Annette - Shot on VENICE",
        "publisher": "Sony Cine",
        "url": "https://sony-cinematography.com/shot-on-sony/annette/"
      },
      {
        "id": "s2",
        "title": "Annette - English press booklet",
        "publisher": "CG Cinéma International / Unifrance",
        "url": "https://medias.unifrance.org/medias/83/178/242259/presse/annette-dossier-de-presse-anglais.pdf"
      },
      {
        "id": "s3",
        "title": "Leos Carax: D’Adam Driver, j’ai tout de suite pensé…",
        "publisher": "Le Monde",
        "url": "https://www.lemonde.fr/culture/article/2021/07/06/leos-carax-je-crois-toujours-que-le-cinema-existe-pour-nous-changer_6087116_3246.html"
      }
    ],
    "questions": [
      {
        "id": "annette-singing",
        "area": "sound",
        "prompt": {
          "en": "How can live singing be coordinated with prerecorded backup?",
          "nb": "Hvordan kan livesang samordnes med forhåndsinnspilt reserve?",
          "fr": "Comment coordonner chant direct et secours préenregistré ?",
          "pt": "Como coordenar canto ao vivo e apoio pré-gravado?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test original vocal takes and preserve synchronized backup tracks",
              "nb": "Prøv originale vokaltagninger og bevar synkroniserte reservespor",
              "fr": "Tester des prises vocales originales et garder des pistes synchronisées",
              "pt": "Testar tomadas vocais originais e preservar pistas sincronizadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every song was added after filming",
              "nb": "Anta at alle sanger ble lagt til etter opptak",
              "fr": "Supposer que chaque chanson a été ajoutée après tournage",
              "pt": "Supor que cada canção foi acrescentada após rodagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard live recordings before comparing performance",
              "nb": "Forkast liveopptak før sammenligning av spill",
              "fr": "Écarter les prises directes avant de comparer le jeu",
              "pt": "Descartar gravações ao vivo antes de comparar interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The official press book documents live singing with prerecorded backup. Design an original musical exercise comparing synchronized takes without copying the film's songs.",
          "nb": "Den offisielle presseboken dokumenterer livesang med forhåndsinnspilt reserve. Lag en original musikkøvelse med synkroniserte tagninger uten å kopiere filmens sanger.",
          "fr": "Le dossier officiel documente chant direct et secours préenregistré. Créez un exercice musical original avec prises synchronisées sans copier les chansons.",
          "pt": "O dossier oficial documenta canto ao vivo e apoio pré-gravado. Crie exercício musical original com tomadas sincronizadas sem copiar canções."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "annette-puppet",
        "area": "animation",
        "prompt": {
          "en": "How can physical puppetry be combined with limited digital cleanup?",
          "nb": "Hvordan kan fysisk dukkespill kombineres med begrenset digital opprydding?",
          "fr": "Comment combiner marionnette physique et retouches numériques limitées ?",
          "pt": "Como combinar marioneta física e retoques digitais limitados?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace every practical performance with animation",
              "nb": "Erstatt alt praktisk spill med animasjon",
              "fr": "Remplacer tout jeu pratique par animation",
              "pt": "Substituir interpretação prática por animação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume physical puppets eliminate compositing needs",
              "nb": "Anta at fysiske dukker fjerner kompositeringsbehov",
              "fr": "Supposer que les marionnettes dispensent de compositing",
              "pt": "Supor que marionetas dispensam composição"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate puppet motion and camera references for cleanup",
              "nb": "Samordne dukkebevegelse og kamerareferanser for opprydding",
              "fr": "Coordonner mouvements et références caméra pour les retouches",
              "pt": "Coordenar movimentos e referências de câmara para retoques"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The press book documents practical puppets and limited post erasure. Test an original puppet or object while preserving its physical performance in the composite.",
          "nb": "Presseboken dokumenterer praktiske dukker og begrenset digital fjerning. Prøv en original dukke eller gjenstand og bevar det fysiske spillet i kompositten.",
          "fr": "Le dossier documente marionnettes pratiques et effacement limité. Testez un objet original en préservant son jeu physique.",
          "pt": "O dossier documenta marionetas práticas e remoção limitada. Teste objeto original preservando interpretação física."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "annette-locations",
        "area": "research",
        "prompt": {
          "en": "How can several filming regions represent one fictional city?",
          "nb": "Hvordan kan flere opptaksregioner representere én fiktiv by?",
          "fr": "Comment plusieurs régions de tournage représentent-elles une ville fictive ?",
          "pt": "Como podem várias regiões de rodagem representar uma cidade fictícia?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose substitutes without checking visual continuity",
              "nb": "Velg erstatningssteder uten å sjekke visuell kontinuitet",
              "fr": "Choisir des substitutions sans vérifier les raccords",
              "pt": "Escolher substitutos sem verificar continuidade visual"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Match architectural references and document substitutions",
              "nb": "Samordne arkitekturreferanser og dokumenter stedserstatninger",
              "fr": "Harmoniser références architecturales et documenter les substitutions",
              "pt": "Harmonizar referências arquitetónicas e documentar substituições"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every scene was shot where the story takes place",
              "nb": "Anta at alle scener ble filmet på handlingsstedet",
              "fr": "Supposer que chaque scène fut tournée au lieu représenté",
              "pt": "Supor que cada cena foi filmada no local representado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Carax describes limited Los Angeles filming and recreations in Belgium and Germany. Plan an original location map distinguishing actual filming and fictional geography.",
          "nb": "Carax beskriver begrensede Los Angeles-opptak og gjenskapelser i Belgia og Tyskland. Lag et originalt stedskart som skiller faktiske opptak og fiktiv geografi.",
          "fr": "Carax décrit un tournage limité à Los Angeles et des recréations en Belgique et Allemagne. Créez une carte distinguant lieux réels et fictifs.",
          "pt": "Carax descreve rodagem limitada em Los Angeles e recriações na Bélgica e Alemanha. Crie mapa distinguindo locais reais e fictícios."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_aftersun_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Childhood images, rehearsed intimacy and memory montage",
      "nb": "Barndomsbilder, innøvd nærhet og minnemontasje",
      "fr": "Images d’enfance, intimité répétée et montage de mémoire",
      "pt": "Imagens de infância, intimidade ensaiada e montagem de memória"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Aftersun",
        "publisher": "La Semaine de la Critique",
        "url": "https://www.semainedelacritique.com/en/edition/2022/movie/aftersun"
      },
      {
        "id": "s1",
        "title": "DP Gregory Oke captured the color of memory on 35mm for Aftersun",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/aftersun/"
      },
      {
        "id": "s2",
        "title": "Postcard from the edge: Charlotte Wells on Aftersun",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/postcard-from-edge-charlotte-wells-aftersun"
      },
      {
        "id": "s3",
        "title": "A Note from Charlotte Wells",
        "publisher": "A24",
        "url": "https://a24films.com/notes/2022/10/a-note-from-charlotte-wells"
      }
    ],
    "questions": [
      {
        "id": "aftersun-archive",
        "area": "research",
        "prompt": {
          "en": "How can personal archives inspire fictional memories?",
          "nb": "Hvordan kan personlige arkiver inspirere fiktive minner?",
          "fr": "Comment les archives personnelles inspirent-elles des souvenirs fictifs ?",
          "pt": "Como podem arquivos pessoais inspirar memórias fictícias?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate remembered details, permissions and invented scenes",
              "nb": "Skill erindrede detaljer, tillatelser og oppdiktede scener",
              "fr": "Distinguer souvenirs, autorisations et scènes inventées",
              "pt": "Distinguir memórias, autorizações e cenas inventadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every invented scene as a verified autobiography",
              "nb": "Behandle alle oppdiktede scener som verifisert selvbiografi",
              "fr": "Traiter chaque invention comme autobiographie vérifiée",
              "pt": "Tratar cada invenção como autobiografia verificada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Reuse private family recordings without consent",
              "nb": "Gjenbruk private familieopptak uten samtykke",
              "fr": "Réutiliser des vidéos familiales sans consentement",
              "pt": "Reutilizar vídeos familiares sem consentimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wells describes family photos and video as starting material for fiction. Make a fictional memory board that distinguishes personal references from invented events.",
          "nb": "Wells beskriver familiefoto og video som utgangspunkt for fiksjon. Lag et fiktivt minnekart som skiller personlige referanser fra oppdiktede hendelser.",
          "fr": "Wells décrit les photos et vidéos familiales comme point de départ. Créez une planche fictive distinguant références et événements inventés.",
          "pt": "Wells descreve fotos e vídeos familiares como ponto de partida. Crie painel fictício distinguindo referências e acontecimentos inventados."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "aftersun-rehearsal",
        "area": "camera",
        "prompt": {
          "en": "How can photography support a rehearsed parent-child relationship?",
          "nb": "Hvordan kan foto støtte en innøvd forelder-barn-relasjon?",
          "fr": "Comment la photographie soutient-elle une relation parent-enfant répétée ?",
          "pt": "Como pode fotografia apoiar uma relação parental ensaiada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Require children to disclose private distress for authenticity",
              "nb": "Krev at barn avslører privat uro for autentisitet",
              "fr": "Exiger des confidences douloureuses pour l’authenticité",
              "pt": "Exigir revelação de sofrimento privado para autenticidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose lensing without reviewing actor movement",
              "nb": "Velg optikk uten å vurdere skuespillerbevegelse",
              "fr": "Choisir les optiques sans examiner les mouvements",
              "pt": "Escolher óticas sem rever movimentos dos atores"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test framing with age-appropriate supported rehearsals",
              "nb": "Prøv utsnitt med alderstilpassede tilrettelagte prøver",
              "fr": "Tester les cadres avec des répétitions adaptées à l’âge",
              "pt": "Testar enquadramentos com ensaios adaptados à idade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Oke describes six weeks of preparation and two weeks of rehearsals. Test framing and performance together in a neutral, safeguarded fictional exercise.",
          "nb": "Oke beskriver seks ukers forberedelse og to ukers prøver. Prøv utsnitt og spill sammen i en nøytral fiktiv øvelse med trygghetstiltak.",
          "fr": "Oke décrit six semaines de préparation et deux de répétitions. Testez ensemble cadre et jeu dans un exercice fictif protégé.",
          "pt": "Oke descreve seis semanas de preparação e duas de ensaios. Teste enquadramento e interpretação num exercício fictício protegido."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "aftersun-memory",
        "area": "sound",
        "prompt": {
          "en": "How can contrasting image textures and music suggest remembered time?",
          "nb": "Hvordan kan kontrasterende bildeteksturer og musikk antyde erindret tid?",
          "fr": "Comment textures et musique suggèrent-elles le temps remémoré ?",
          "pt": "Como podem texturas e música sugerir tempo recordado?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a period song proves the exact date of a scene",
              "nb": "Anta at en tidsriktig sang beviser scenens eksakte dato",
              "fr": "Supposer qu’une chanson d’époque prouve la date exacte",
              "pt": "Supor que canção de época prova data exata"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare fictional camcorder fragments with original sound cues",
              "nb": "Sammenlign fiktive videokamerafragmenter med egne lydinnslag",
              "fr": "Comparer des fragments de caméscope fictifs et des sons originaux",
              "pt": "Comparar fragmentos fictícios de vídeo com sons originais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every remembered detail through continuous narration",
              "nb": "Forklar alle minner gjennom kontinuerlig fortellerstemme",
              "fr": "Expliquer chaque souvenir par une narration continue",
              "pt": "Explicar cada memória com narração contínua"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wells discusses the camcorder viewpoint, editorial discoveries and period songs. Compare original fragments and sound transitions without copying the film's music.",
          "nb": "Wells omtaler videokameraperspektiv, klippeoppdagelser og tidsriktige sanger. Sammenlign egne fragmenter og lydoverganger uten å kopiere filmens musikk.",
          "fr": "Wells évoque le caméscope, les découvertes de montage et les chansons d’époque. Comparez des fragments et transitions originaux sans copier la musique.",
          "pt": "Wells aborda vídeo, descobertas de montagem e canções de época. Compare fragmentos e transições originais sem copiar música."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_everything_everywhere_all_at_once_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Distinct universe grammar, compact effects teams and sonic transitions",
      "nb": "Ulike universgrammatikker, små effektteam og lydoverganger",
      "fr": "Grammaires d’univers, petites équipes d’effets et transitions sonores",
      "pt": "Gramáticas de universos, equipas pequenas de efeitos e transições sonoras"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Everything Everywhere All at Once Producer Jonathan Wang on Making an Oscar Juggernaut",
        "publisher": "The Credits / Motion Picture Association",
        "url": "https://www.motionpictures.org/2023/01/everything-everywhere-all-at-once-producer-jonathan-wang-on-making-an-oscar-juggernaut/"
      },
      {
        "id": "s2",
        "title": "The Silliest Use of IMAX in the History of IMAX: DP Larkin Seiple on Everything Everywhere All at Once",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/114590-interview-cinematographer-larkin-seiple-everything-everywhere-all-at-once/"
      },
      {
        "id": "s3",
        "title": "All These Different Michelles Are the Stars of Their Different Stories: The Daniels on Everything Everywhere All At Once",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/113871-everything-everywhere-all-at-once/"
      },
      {
        "id": "s4",
        "title": "The 2023 Oscar for Best Picture goes to Everything Everywhere All at Once",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-cameras-lenses-and-lighting-shine-behind-2023-oscar-winners/the-2023-oscar-for-best-picture-goes-to-everything-everywhere-al-312720"
      },
      {
        "id": "s5",
        "title": "The invisible VFX of Everything Everywhere All at Once",
        "publisher": "befores & afters",
        "url": "https://beforesandafters.com/2022/08/03/magazine-preview-the-invisible-vfx-of-everything-everywhere-all-at-once/"
      },
      {
        "id": "s6",
        "title": "Everything Everywhere All at Once - Editing a Movie Made of Movies",
        "publisher": "Frame.io",
        "url": "https://blog.frame.io/2022/04/13/art-of-the-cut-everything-everywhere-all-at-once/"
      },
      {
        "id": "s7",
        "title": "Inside The Sound of Everything Everywhere All At Once",
        "publisher": "Mix",
        "url": "https://www.mixonline.com/news/everything-everywhere-all-at-once"
      },
      {
        "id": "s8",
        "title": "Adobe Video and 3D Technologies take center stage at the 2023 Oscars",
        "publisher": "Adobe",
        "url": "https://blog.adobe.com/en/publish/2023/03/13/adobe-video-3d-tech-center-stage-2023-oscars"
      }
    ],
    "questions": [
      {
        "id": "everything-grammar",
        "area": "camera",
        "prompt": {
          "en": "How can fictional universes remain visually distinguishable?",
          "nb": "Hvordan kan fiktive universer forbli visuelt adskilte?",
          "fr": "Comment distinguer visuellement des univers fictifs ?",
          "pt": "Como distinguir visualmente universos fictícios?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Assign each universe tested framing, optics and color rules",
              "nb": "Gi hvert univers testede regler for utsnitt, optikk og farge",
              "fr": "Attribuer à chaque univers des règles testées de cadre, optique et couleur",
              "pt": "Atribuir a cada universo regras testadas de quadro, ótica e cor"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Change every visual rule randomly in each shot",
              "nb": "Endre alle bilderegler tilfeldig i hvert bilde",
              "fr": "Changer toutes les règles au hasard à chaque plan",
              "pt": "Mudar regras ao acaso em cada plano"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use identical image treatment without narrative motivation",
              "nb": "Bruk identisk bildebehandling uten dramatisk begrunnelse",
              "fr": "Employer le même traitement sans motivation narrative",
              "pt": "Usar tratamento igual sem motivação narrativa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Seiple and the Daniels describe distinct lens, aspect-ratio and color languages. Design original style tests and verify that viewers recognize each invented universe.",
          "nb": "Seiple og Daniels beskriver ulike objektiv-, format- og fargespråk. Lag egne stilprøver og sjekk at seere gjenkjenner hvert oppdiktet univers.",
          "fr": "Seiple et les Daniels décrivent des langages optiques et chromatiques distincts. Créez des essais originaux et vérifiez la reconnaissance des univers.",
          "pt": "Seiple e Daniels descrevem linguagens óticas e cromáticas distintas. Crie testes originais e verifique reconhecimento dos universos."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "everything-effects",
        "area": "animation",
        "prompt": {
          "en": "How can a compact effects team prioritize a complex film?",
          "nb": "Hvordan kan et lite effektteam prioritere en kompleks film?",
          "fr": "Comment une petite équipe d’effets priorise-t-elle un film complexe ?",
          "pt": "Como pode equipa pequena de efeitos priorizar um filme complexo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Build every effect from scratch regardless of useful footage",
              "nb": "Bygg alle effekter fra bunnen uansett nyttige opptak",
              "fr": "Créer chaque effet de zéro malgré les prises utiles",
              "pt": "Criar cada efeito do zero apesar de imagens úteis"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a small team means no review process",
              "nb": "Anta at et lite team ikke trenger gjennomgang",
              "fr": "Supposer qu’une petite équipe dispense de vérification",
              "pt": "Supor que equipa pequena dispensa revisão"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan practical source elements and track composite revisions",
              "nb": "Planlegg praktiske bildeelementer og følg komposittrevisjoner",
              "fr": "Prévoir éléments pratiques et suivre les révisions de composites",
              "pt": "Planear elementos práticos e acompanhar revisões de composições"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Stoltz describes a five-person core effects team and practical-base compositing. Plan a small original effects sequence with clear ownership and versioning.",
          "nb": "Stoltz beskriver et effektkjerneteam på fem og kompositering med praktiske elementer. Planlegg en liten original effektsekvens med tydelig ansvar og versjonering.",
          "fr": "Stoltz décrit cinq personnes au cœur des effets et des composites pratiques. Préparez une séquence originale avec responsabilités et versions.",
          "pt": "Stoltz descreve núcleo de cinco pessoas e composição com base prática. Planeie sequência original com responsabilidades e versões."
        },
        "sourceIds": [
          "s1",
          "s5",
          "s8"
        ]
      },
      {
        "id": "everything-transition",
        "area": "sound",
        "prompt": {
          "en": "How can recurring sound help viewers follow rapid universe transitions?",
          "nb": "Hvordan kan tilbakevendende lyd hjelpe seerne å følge raske universoverganger?",
          "fr": "Comment le son récurrent aide-t-il à suivre les changements d’univers ?",
          "pt": "Como pode som recorrente ajudar a seguir transições de universos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Wait for picture lock before testing all sonic continuity",
              "nb": "Vent til bildelås før all lydkontinuitet prøves",
              "fr": "Attendre le verrouillage image pour tester la continuité sonore",
              "pt": "Esperar bloqueio de imagem para testar continuidade sonora"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test original transition cues during rough-cut review",
              "nb": "Prøv originale overgangslyder under grovklippgjennomgang",
              "fr": "Tester des sons de transition originaux au prémontage",
              "pt": "Testar sons de transição originais na montagem provisória"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Introduce unrelated sounds at every transition",
              "nb": "Introduser urelaterte lyder ved hver overgang",
              "fr": "Introduire des sons sans rapport à chaque transition",
              "pt": "Introduzir sons sem relação em cada transição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rogers describes temporary editorial sound and the sound team documents a recurring transition language. Compare original cues against a short montage before locking it.",
          "nb": "Rogers beskriver midlertidig klippelyd og lydteamet dokumenterer et tilbakevendende overgangsspråk. Sammenlign egne innslag mot en kort montasje før bildelås.",
          "fr": "Rogers décrit le son provisoire et l’équipe un langage récurrent de transition. Comparez des sons originaux avant verrouillage du montage.",
          "pt": "Rogers descreve som temporário e a equipa uma linguagem recorrente. Compare sons originais antes de bloquear montagem."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_banshees_of_inisherin_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Period costume, landscape relationships and tonal editing",
      "nb": "Historiske kostymer, landskapsrelasjoner og toneklipping",
      "fr": "Costumes d’époque, paysage et montage tonal",
      "pt": "Figurinos de época, paisagem e montagem tonal"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Banshees of Inisherin",
        "publisher": "La Biennale di Venezia",
        "url": "https://www.labiennale.org/en/cinema/2022/venezia-79-competition/banshees-inisherin"
      },
      {
        "id": "s1",
        "title": "The Banshees of Inisherin",
        "publisher": "Searchlight Pictures",
        "url": "https://www.searchlightpictures.com/the-banshees-of-inisherin"
      },
      {
        "id": "s2",
        "title": "A Wardrobe of Coats: Costume Designer Eimer Ní Mhaoldomhnaigh on The Banshees of Inisherin",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/117783-interview-costume-designer-eimer-ni-mhaoldomhnaigh-the-banshees-of-inisherin/"
      },
      {
        "id": "s3",
        "title": "Banshees of Inisherin editor says key was testing options",
        "publisher": "TheWrap",
        "url": "https://www.thewrap.com/banshees-of-inisherin-editing-mikkel-eg-nielsen-interview/"
      }
    ],
    "questions": [
      {
        "id": "banshees-costume",
        "area": "research",
        "prompt": {
          "en": "How can period clothing express character and environment?",
          "nb": "Hvordan kan historiske klær uttrykke karakter og miljø?",
          "fr": "Comment les vêtements d’époque expriment-ils personnage et milieu ?",
          "pt": "Como podem roupas de época exprimir personagem e ambiente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Research practical clothing and test color against locations",
              "nb": "Undersøk praktiske klær og prøv farger mot opptakssteder",
              "fr": "Documenter les vêtements pratiques et tester les couleurs en décor",
              "pt": "Pesquisar vestuário prático e testar cores nos locais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose costumes only for decorative beauty",
              "nb": "Velg kostymer bare for dekorativ skjønnhet",
              "fr": "Choisir les costumes pour leur seule beauté",
              "pt": "Escolher figurinos apenas pela beleza"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore historical material and character occupation",
              "nb": "Ignorer historiske materialer og karakterens yrke",
              "fr": "Ignorer matières historiques et métier du personnage",
              "pt": "Ignorar materiais históricos e profissão da personagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ní Mhaoldomhnaigh describes period research and island clothing choices. Design a fictional costume board linking practical materials, character and landscape.",
          "nb": "Ní Mhaoldomhnaigh beskriver historisk research og klær for øymiljøet. Lag et fiktivt kostymekart som knytter materialer, karakter og landskap sammen.",
          "fr": "Ní Mhaoldomhnaigh décrit recherche historique et vêtements insulaires. Créez une planche reliant matières, personnage et paysage.",
          "pt": "Ní Mhaoldomhnaigh descreve pesquisa histórica e vestuário insular. Crie painel ligando materiais, personagem e paisagem."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "banshees-landscape",
        "area": "camera",
        "prompt": {
          "en": "How can landscape and costume work together in a composition?",
          "nb": "Hvordan kan landskap og kostymer samspille i et utsnitt?",
          "fr": "Comment paysage et costumes dialoguent-ils dans un cadre ?",
          "pt": "Como podem paisagem e figurinos dialogar no enquadramento?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose camera angles without examining costume contrast",
              "nb": "Velg kameravinkler uten å undersøke kostymekontrast",
              "fr": "Choisir les angles sans examiner le contraste des costumes",
              "pt": "Escolher ângulos sem examinar contraste dos figurinos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume period costumes require one fixed lens",
              "nb": "Anta at historiske kostymer krever ett fast objektiv",
              "fr": "Supposer que les costumes imposent une optique fixe",
              "pt": "Supor que figurinos exigem uma objetiva fixa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare silhouette and palette in contrasting outdoor frames",
              "nb": "Sammenlign silhuett og palett i kontrasterende utendørsutsnitt",
              "fr": "Comparer silhouettes et palettes dans différents cadres extérieurs",
              "pt": "Comparar silhuetas e paletas em quadros exteriores distintos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The costume interview describes collaboration with landscape and character design. Test original outdoor compositions without inventing exact camera settings.",
          "nb": "Kostymeintervjuet beskriver samarbeid med landskap og karakterdesign. Prøv egne utendørsutsnitt uten å finne på eksakte kamerainnstillinger.",
          "fr": "L’entretien décrit la collaboration avec paysage et personnages. Testez des cadres extérieurs sans inventer de réglages caméra.",
          "pt": "A entrevista descreve colaboração com paisagem e personagens. Teste quadros exteriores sem inventar parâmetros de câmara."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "banshees-tone",
        "area": "sound",
        "prompt": {
          "en": "How can dialogue pauses shift a scene between comedy and drama?",
          "nb": "Hvordan kan dialogpauser flytte en scene mellom komedie og drama?",
          "fr": "Comment les pauses font-elles passer une scène de la comédie au drame ?",
          "pt": "Como podem pausas deslocar cena entre comédia e drama?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Explain every tonal change with emphatic music",
              "nb": "Forklar alle toneskifter med påtrengende musikk",
              "fr": "Expliquer chaque changement par une musique insistante",
              "pt": "Explicar cada mudança com música insistente"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare alternate reaction holds and restrained sound cues",
              "nb": "Sammenlign alternative reaksjonsbilder og dempede lydinnslag",
              "fr": "Comparer réactions prolongées et sons retenus",
              "pt": "Comparar reações prolongadas e sons contidos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Cut every exchange at an identical pace",
              "nb": "Klipp alle samtaler i identisk tempo",
              "fr": "Monter chaque échange au même rythme",
              "pt": "Montar cada troca ao mesmo ritmo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nielsen describes testing editorial options for comedy, drama, performance and sound. Compare alternate versions of a new neutral conversation.",
          "nb": "Nielsen beskriver prøving av klippevalg for komedie, drama, spill og lyd. Sammenlign alternative versjoner av en ny nøytral samtale.",
          "fr": "Nielsen décrit des variantes de montage pour comédie, drame, jeu et son. Comparez des versions d’une conversation neutre originale.",
          "pt": "Nielsen descreve variantes de montagem para comédia, drama, interpretação e som. Compare versões de conversa neutra original."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_triangle_of_sadness_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Textual storyboards, composite framing and ensemble satire",
      "nb": "Tekstbasert storyboard, sammensatte bilder og ensemblesatire",
      "fr": "Découpage textuel, cadres composites et satire collective",
      "pt": "Storyboard textual, quadros compostos e sátira coletiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Triangle of Sadness",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/triangle-of-sadness/"
      },
      {
        "id": "s1",
        "title": "ARRI technology behind the scenes of Cannes 2022",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-technology-in-cannes-2022"
      },
      {
        "id": "s2",
        "title": "Fredrik Wenzel FSF: Triangle of Sadness",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/ship-of-fools-fredrik-wenzel-fsf-triangle-of-sadness/"
      }
    ],
    "questions": [
      {
        "id": "triangle-prep",
        "area": "research",
        "prompt": {
          "en": "How can a prose-like script become a shared shooting plan?",
          "nb": "Hvordan kan et prosalignende manus bli en felles opptaksplan?",
          "fr": "Comment un scénario en prose devient-il un plan de tournage commun ?",
          "pt": "Como pode argumento em prosa tornar-se plano de rodagem comum?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Translate scene descriptions into blocking and textual shot plans",
              "nb": "Oversett scenebeskrivelser til blokkering og tekstbaserte bildeplaner",
              "fr": "Traduire descriptions en placements et découpage textuel",
              "pt": "Traduzir descrições em marcações e planos textuais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Skip scene breakdown because the script is already written",
              "nb": "Hopp over scenenedbrytning fordi manuset er skrevet",
              "fr": "Omettre le découpage puisque le scénario est écrit",
              "pt": "Omitir decupagem porque argumento já está escrito"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Let departments interpret spatial relations independently",
              "nb": "La avdelingene tolke romforhold uavhengig",
              "fr": "Laisser les équipes interpréter l’espace indépendamment",
              "pt": "Deixar equipas interpretar espaço independentemente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wenzel describes thirty-five days of scene breakdown and textual storyboarding. Prepare a shared plan for an original ensemble scene.",
          "nb": "Wenzel beskriver 35 dager med scenenedbrytning og tekstbasert storyboard. Forbered en felles plan for en original ensemblescene.",
          "fr": "Wenzel décrit trente-cinq jours de découpage textuel. Préparez un plan commun pour une scène collective originale.",
          "pt": "Wenzel descreve trinta e cinco dias de decupagem textual. Prepare plano comum para cena coletiva original."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "triangle-composite",
        "area": "animation",
        "prompt": {
          "en": "How can selected details from different takes form a coherent frame?",
          "nb": "Hvordan kan utvalgte detaljer fra ulike tagninger danne ett sammenhengende bilde?",
          "fr": "Comment des détails de prises distinctes forment-ils un cadre cohérent ?",
          "pt": "Como podem detalhes de tomadas distintas formar quadro coerente?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a finished image always represents one intact take",
              "nb": "Anta at et ferdig bilde alltid representerer én intakt tagning",
              "fr": "Supposer que chaque image finale vient d’une prise intacte",
              "pt": "Supor que cada imagem final vem de uma tomada intacta"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Join elements without checking perspective or timing",
              "nb": "Slå sammen elementer uten å sjekke perspektiv eller timing",
              "fr": "Assembler sans vérifier perspective ni rythme",
              "pt": "Juntar elementos sem verificar perspetiva ou ritmo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track source takes and verify visual and performance continuity",
              "nb": "Spor kildetagninger og verifiser visuell kontinuitet og spill",
              "fr": "Suivre les prises sources et vérifier continuité visuelle et jeu",
              "pt": "Rastrear tomadas de origem e verificar continuidade visual e interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wenzel describes stitching takes, inserts and frame extensions. Create a neutral composite test with explicit source tracking rather than attributing exact methods to particular shots.",
          "nb": "Wenzel beskriver sammensying av tagninger, innskudd og bildeutvidelser. Lag en nøytral komposittprøve med tydelig kildesporing uten å tilskrive bestemte bilder eksakte metoder.",
          "fr": "Wenzel décrit assemblages, inserts et extensions. Créez un composite neutre avec traçabilité sans attribuer de méthode exacte à un plan.",
          "pt": "Wenzel descreve junções, inserções e extensões. Crie composição neutra rastreável sem atribuir método exato a um plano."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "triangle-satire",
        "area": "camera",
        "prompt": {
          "en": "How can ensemble staging communicate unequal social relationships?",
          "nb": "Hvordan kan ensembleiscenesettelse formidle ulike sosiale maktforhold?",
          "fr": "Comment le placement collectif communique-t-il des rapports sociaux inégaux ?",
          "pt": "Como pode encenação coletiva comunicar relações sociais desiguais?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat social position as proof of individual character traits",
              "nb": "Behandle sosial posisjon som bevis på individuelle karaktertrekk",
              "fr": "Traiter la position sociale comme preuve du caractère",
              "pt": "Tratar posição social como prova de traços individuais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare sightlines and reaction timing in a fictional group scene",
              "nb": "Sammenlign siktlinjer og reaksjonstiming i en fiktiv gruppescene",
              "fr": "Comparer axes et rythme des réactions dans une scène fictive",
              "pt": "Comparar linhas de visão e ritmo de reações em cena fictícia"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Place every participant identically without dramatic purpose",
              "nb": "Plasser alle deltakere identisk uten dramatisk formål",
              "fr": "Placer tous les participants pareillement sans raison dramatique",
              "pt": "Colocar todos os participantes igualmente sem motivo dramático"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The director-DP preparation account documents detailed blocking and the fashion-world starting point. Test an original satirical group scene as a formal exercise, not a reconstruction.",
          "nb": "Regissør-fotografkilden dokumenterer detaljert blokkering og moteverdenen som utgangspunkt. Prøv en original satirisk gruppescene som formøvelse, ikke rekonstruksjon.",
          "fr": "La source décrit placements détaillés et point de départ dans la mode. Testez une satire collective originale, non une reconstitution.",
          "pt": "A fonte descreve marcações detalhadas e origem no mundo da moda. Teste sátira coletiva original, não reconstrução."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_decision_to_leave_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Restricted camera grammar, composite locations and invisible effects",
      "nb": "Avgrenset kameragrammatikk, sammensatte steder og usynlige effekter",
      "fr": "Grammaire caméra restreinte, lieux composites et effets invisibles",
      "pt": "Gramática de câmara restrita, locais compostos e efeitos invisíveis"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Kim Ji-yong / Heojil Kyolshim • Decision To Leave",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/come-what-may-kim-ji-yong-heojil-kyolshim-decision-to-leave/"
      },
      {
        "id": "s3",
        "title": "Kim Ji-yong / Decision to Leave",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/kim-ji-yong-decision-to-leave/"
      },
      {
        "id": "s4",
        "title": "DECISION TO LEAVE LEAVES THE VISUAL EFFECTS DECISIONS TO LEE JOEN-HYOUNG",
        "publisher": "VFX Voice",
        "url": "https://vfxvoice.com/decision-to-leave-leaves-the-visual-effects-decisions-to-lee-joen-hyoung/"
      }
    ],
    "questions": [
      {
        "id": "decision-view",
        "area": "camera",
        "prompt": {
          "en": "How can camera rules shape restricted narrative knowledge?",
          "nb": "Hvordan kan kameraregler forme avgrenset fortellerkunnskap?",
          "fr": "Comment des règles caméra façonnent-elles un savoir narratif restreint ?",
          "pt": "Como podem regras de câmara moldar conhecimento narrativo restrito?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Storyboard viewpoint limits and motivated exceptions",
              "nb": "Lag storyboard for perspektivgrenser og begrunnede unntak",
              "fr": "Prévoir limites du point de vue et exceptions motivées",
              "pt": "Planear limites de perspetiva e exceções motivadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reveal every character's private knowledge from the start",
              "nb": "Avslør alle karakterers private kunnskap fra starten",
              "fr": "Révéler tous les savoirs privés dès le départ",
              "pt": "Revelar todo conhecimento privado desde o início"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Change camera rules at random between connected shots",
              "nb": "Endre kameraregler tilfeldig mellom sammenhengende bilder",
              "fr": "Changer les règles caméra au hasard entre plans liés",
              "pt": "Mudar regras de câmara ao acaso entre planos ligados"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Park and Kim describe shot-by-shot planning and restricted camera rules. Create a neutral scene with explicit viewpoint constraints and test what viewers can infer.",
          "nb": "Park og Kim beskriver detaljert bildeplanlegging og avgrensede kameraregler. Lag en nøytral scene med tydelige perspektivgrenser og prøv hva seerne kan utlede.",
          "fr": "Park et Kim décrivent découpage détaillé et règles restreintes. Créez une scène neutre aux limites explicites et testez les inférences.",
          "pt": "Park e Kim descrevem planeamento detalhado e regras restritas. Crie cena neutra com limites explícitos e teste inferências."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "decision-geography",
        "area": "research",
        "prompt": {
          "en": "How can different locations be combined into one fictional landscape?",
          "nb": "Hvordan kan ulike steder kombineres til ett fiktivt landskap?",
          "fr": "Comment réunir plusieurs lieux en un paysage fictif ?",
          "pt": "Como reunir vários locais numa paisagem fictícia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all parts of a location sequence share one real site",
              "nb": "Anta at alle deler av en stedssekvens deler ett virkelig sted",
              "fr": "Supposer que toute séquence se déroule sur un seul lieu réel",
              "pt": "Supor que toda sequência decorre num único local real"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore weather and light differences between source images",
              "nb": "Ignorer vær- og lysforskjeller mellom kildebilder",
              "fr": "Ignorer les différences de météo et lumière entre sources",
              "pt": "Ignorar diferenças de clima e luz entre imagens de origem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Match horizon, light and spatial references in advance",
              "nb": "Samordne horisont, lys og romreferanser på forhånd",
              "fr": "Harmoniser horizon, lumière et références spatiales",
              "pt": "Harmonizar horizonte, luz e referências espaciais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematography interviews document a finale constructed from three beaches. Plan a safe original landscape study using still photographs and a provenance map.",
          "nb": "Fotointervjuene dokumenterer en finale bygget av tre strender. Planlegg en trygg original landskapsstudie med stillbilder og kildeopphavskart.",
          "fr": "Les entretiens documentent un final construit à partir de trois plages. Préparez une étude sûre avec photos fixes et carte de provenance.",
          "pt": "As entrevistas documentam final construído a partir de três praias. Planeie estudo seguro com fotografias e mapa de proveniência."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "decision-invisible",
        "area": "animation",
        "prompt": {
          "en": "How can invisible effects support a carefully designed frame?",
          "nb": "Hvordan kan usynlige effekter støtte et nøye utformet bilde?",
          "fr": "Comment les effets invisibles servent-ils un cadre soigneusement conçu ?",
          "pt": "Como podem efeitos invisíveis apoiar quadro cuidadosamente concebido?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every invisible effect as a replacement for cinematography",
              "nb": "Behandle alle usynlige effekter som erstatning for foto",
              "fr": "Traiter tout effet invisible comme substitut à la photographie",
              "pt": "Tratar efeito invisível como substituto da fotografia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review subtle composite revisions against the photographed plate",
              "nb": "Vurder diskrete komposittrevisjoner mot realopptaket",
              "fr": "Revoir les retouches discrètes face à la prise originale",
              "pt": "Rever retoques discretos perante a imagem original"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the effects count to infer the exact method of every shot",
              "nb": "Bruk effektantallet til å utlede eksakt metode for hvert bilde",
              "fr": "Déduire la méthode de chaque plan du nombre d’effets",
              "pt": "Deduzir método de cada plano pelo número de efeitos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The VFX interview reports extensive invisible digital mise-en-scène; Park and Kim describe planned integration. Test a neutral subtle composite without inventing shot-specific claims.",
          "nb": "Effektintervjuet omtaler omfattende usynlig digital iscenesettelse; Park og Kim beskriver planlagt integrasjon. Prøv en nøytral diskret kompositt uten å finne på bildespesifikke påstander.",
          "fr": "L’entretien VFX décrit une mise en scène numérique invisible et les cinéastes son intégration. Testez un composite discret sans inventer de détails par plan.",
          "pt": "A entrevista VFX descreve encenação digital invisível e os cineastas integração planeada. Teste composição discreta sem inventar detalhes por plano."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_all_quiet_on_the_western_front_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Material continuity, confined composition and subjective sound",
      "nb": "Materialkontinuitet, avgrenset bildekomposisjon og subjektiv lyd",
      "fr": "Continuité matérielle, cadre restreint et son subjectif",
      "pt": "Continuidade material, quadro restrito e som subjetivo"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Shot on ARRI equipment and serviced by ARRI Rental, All Quiet on the Western Front wins the Oscar for Cinematography",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-cameras-lenses-and-lighting-shine-behind-2023-oscar-winners/shot-on-arri-equipment-and-serviced-by-arri-rental-all-quiet-on-312722"
      },
      {
        "id": "s3",
        "title": "How was All Quiet on The Western Front Made?",
        "publisher": "Netflix Tudum",
        "url": "https://www.netflix.com/tudum/articles/making-of-all-quiet-on-the-western-front-bts"
      },
      {
        "id": "s4",
        "title": "Oscar-Nominated Sound Designer Frank Kruse Makes Some Noise on All Quiet on the Western Front",
        "publisher": "The Credits / Motion Picture Association",
        "url": "https://www.motionpictures.org/2023/03/oscar-nominated-sound-designer-frank-kruse-makes-some-noise-on-all-quiet-on-the-western-front/"
      },
      {
        "id": "s5",
        "title": "Filmmaking: Netflix's All Quiet on the Western Front",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2023/January-February-2023/Filmmaking-Netflixs-I-All-Quiet-on-the-Western-F.aspx"
      },
      {
        "id": "s7",
        "title": "All Quiet on the Western Front Editor Sven Budelmann on Cutting the Authentically German Take on World War I",
        "publisher": "Awards Daily",
        "url": "https://www.awardsdaily.com/2022/12/14/all-quiet-on-the-western-front-editor-sven-budelmann-on-cutting-the-authentically-german-take-on-world-war-i/"
      },
      {
        "id": "s8",
        "title": "Oscar-Nominated Makeup & Hair Designer Heike Merker Paints With Mud & Blood in All Quiet on the Western Front",
        "publisher": "The Credits / Motion Picture Association",
        "url": "https://www.motionpictures.org/2023/03/oscar-nominated-makeup-hair-designer-heike-merker-paints-with-mud-blood-in-all-quiet-on-the-western-front/"
      }
    ],
    "questions": [
      {
        "id": "allquiet2022-continuity",
        "area": "research",
        "prompt": {
          "en": "How can weathering continuity be tracked across nonchronological shooting?",
          "nb": "Hvordan kan slitasjekontinuitet følges ved ikke-kronologisk opptak?",
          "fr": "Comment suivre le vieillissement des matières en tournage non chronologique ?",
          "pt": "Como acompanhar desgaste material em rodagem não cronológica?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Create scene-indexed reference photos and material-state records",
              "nb": "Lag scenebaserte referansebilder og logger for materialtilstand",
              "fr": "Créer photos de référence et états des matières par scène",
              "pt": "Criar fotografias de referência e estados materiais por cena"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply identical wear to every stage of the story",
              "nb": "Bruk identisk slitasje i alle fortellingens faser",
              "fr": "Appliquer la même usure à chaque étape du récit",
              "pt": "Aplicar desgaste idêntico em todas as etapas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Rely on memory instead of documenting changing material states",
              "nb": "Stol på hukommelsen fremfor å dokumentere skiftende materialtilstander",
              "fr": "Se fier à la mémoire sans documenter les états",
              "pt": "Confiar na memória sem documentar estados materiais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Production and makeup accounts describe mud and material continuity. Practice with harmless fabric samples and scene records, not a recreation of historical suffering.",
          "nb": "Produksjons- og sminkekildene beskriver gjørme og materialkontinuitet. Øv med ufarlige stoffprøver og scenelogger, ikke gjenskaping av historisk lidelse.",
          "fr": "Les sources décrivent boue et continuité matérielle. Exercez-vous avec des tissus et fiches de scène sans rejouer la souffrance historique.",
          "pt": "As fontes descrevem lama e continuidade material. Pratique com tecidos e fichas de cena sem reencenar sofrimento histórico."
        },
        "sourceIds": [
          "s3",
          "s8"
        ]
      },
      {
        "id": "allquiet2022-frame",
        "area": "camera",
        "prompt": {
          "en": "How can a confined set accommodate large-format framing?",
          "nb": "Hvordan kan en avgrenset kulisse tilpasses storformatutsnitt?",
          "fr": "Comment un décor exigu accueille-t-il un cadrage grand format ?",
          "pt": "Como pode cenário restrito acomodar enquadramento de grande formato?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a larger sensor eliminates spatial constraints",
              "nb": "Anta at større sensor fjerner rombegrensninger",
              "fr": "Supposer qu’un grand capteur supprime les contraintes spatiales",
              "pt": "Supor que sensor maior elimina restrições espaciais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Build a set without discussing camera access",
              "nb": "Bygg kulisse uten å diskutere kameratilgang",
              "fr": "Construire le décor sans discuter l’accès caméra",
              "pt": "Construir cenário sem discutir acesso da câmara"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test safe camera clearance and perspective in a neutral mock-up",
              "nb": "Prøv trygg kameraplass og perspektiv i en nøytral modell",
              "fr": "Tester dégagement caméra et perspective dans une maquette neutre",
              "pt": "Testar espaço de câmara e perspetiva numa maquete neutra"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Friend discusses large-format equipment in constrained sets; the making-of describes extensive layout preparation. Test a safe neutral interior without reenacting combat.",
          "nb": "Friend omtaler storformatutstyr i trange kulisser; produksjonskilden beskriver omfattende planlegging. Prøv et trygt nøytralt interiør uten å gjenskape kamp.",
          "fr": "Friend évoque le grand format en espace restreint et le making-of la préparation. Testez un intérieur neutre sans rejouer de combat.",
          "pt": "Friend aborda grande formato em espaços restritos e a fonte preparação. Teste interior neutro sem recriar combate."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "allquiet2022-sound",
        "area": "sound",
        "prompt": {
          "en": "How can a subjective sound perspective be built from recorded material?",
          "nb": "Hvordan kan subjektivt lydperspektiv bygges fra innspilt materiale?",
          "fr": "Comment construire un point d’écoute subjectif à partir de prises sonores ?",
          "pt": "Como construir perspetiva sonora subjetiva a partir de gravações?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat designed sounds as actual historical recordings",
              "nb": "Behandle designede lyder som ekte historiske opptak",
              "fr": "Traiter les sons conçus comme archives historiques",
              "pt": "Tratar sons concebidos como arquivos históricos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record safe ambient layers and compare selective listening in context",
              "nb": "Ta opp trygge miljølydlag og sammenlign selektiv lytting i kontekst",
              "fr": "Enregistrer des ambiances sûres et comparer l’écoute sélective",
              "pt": "Gravar ambientes seguros e comparar escuta seletiva"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Make every layer equally prominent throughout",
              "nb": "Gjør alle lag like fremtredende hele tiden",
              "fr": "Donner la même présence à toutes les couches",
              "pt": "Dar presença igual a todas as camadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kruse describes wild-track planning and subjective design, while Budelmann discusses pacing. Test an unrelated neutral soundscape and distinguish recording from design.",
          "nb": "Kruse beskriver planlegging av separate stedslyder og subjektiv design, mens Budelmann omtaler tempo. Prøv et urelatert nøytralt lydlandskap og skill opptak fra design.",
          "fr": "Kruse décrit ambiances et conception subjective, Budelmann le rythme. Testez un paysage sonore neutre en distinguant prise et conception.",
          "pt": "Kruse descreve ambientes e design subjetivo, Budelmann ritmo. Teste paisagem sonora neutra distinguindo gravação e design."
        },
        "sourceIds": [
          "s4",
          "s5",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_avatar_the_way_of_water_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Performance reference, virtual geometry and iterative visual effects",
      "nb": "Spillreferanse, virtuell geometri og iterative visuelle effekter",
      "fr": "Référence de jeu, géométrie virtuelle et effets itératifs",
      "pt": "Referência de interpretação, geometria virtual e efeitos iterativos"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Total Immersion for Avatar: The Way of Water",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/articles/avatar-the-way-of-water"
      },
      {
        "id": "s2",
        "title": "Our Work on Avatar: The Way of Water",
        "publisher": "Weta FX",
        "url": "https://www-ext.wetafx.co.nz/articles/our-work-on-avatar-the-way-of-water"
      },
      {
        "id": "s3",
        "title": "Avatar: The Way of Water",
        "publisher": "THE THIRD FLOOR",
        "url": "https://thethirdfloorinc.com/5836/avatar-the-way-of-water/"
      },
      {
        "id": "s4",
        "title": "Avatar: The Way of Water",
        "publisher": "Sony Cine",
        "url": "https://sony-cinematography.com/shot-on-sony/avatar-the-way-of-water/"
      },
      {
        "id": "s5",
        "title": "Behind the Scenes Workflows of Every 2023 Oscars Best Picture Nominee",
        "publisher": "Frame.io",
        "url": "https://blog.frame.io/2023/03/12/2023-oscar-best-picture-workflow-breakdown-every-nominee/"
      }
    ],
    "questions": [
      {
        "id": "avatarwater-capture",
        "area": "animation",
        "prompt": {
          "en": "How can reference footage preserve performance during digital character creation?",
          "nb": "Hvordan kan referanseopptak bevare skuespill ved digital karakterutvikling?",
          "fr": "Comment les prises de référence préservent-elles le jeu numérique ?",
          "pt": "Como podem imagens de referência preservar interpretação digital?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare consented performance references with animation revisions",
              "nb": "Sammenlign samtykkebaserte spillreferanser med animasjonsrevisjoner",
              "fr": "Comparer références consenties et révisions d’animation",
              "pt": "Comparar referências consentidas e revisões de animação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace every facial gesture with one generic template",
              "nb": "Erstatt alle ansiktsgester med én generisk mal",
              "fr": "Remplacer chaque geste facial par un modèle générique",
              "pt": "Substituir gestos faciais por modelo genérico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat capture data as a finished character render",
              "nb": "Behandle opptaksdata som ferdig karakterrendering",
              "fr": "Traiter les données de capture comme rendu final",
              "pt": "Tratar dados de captura como renderização final"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ASC and Weta describe multi-angle reference and facial performance development. Test a consented dry-land gesture study, without replicating underwater capture conditions.",
          "nb": "ASC og Weta beskriver flervinkelreferanse og ansiktsspillutvikling. Prøv en samtykkebasert geststudie på land uten å gjenskape undervannsopptak.",
          "fr": "ASC et Weta décrivent références multiangles et jeu facial. Testez un geste consenti à sec sans reproduire la capture sous-marine.",
          "pt": "ASC e Weta descrevem referências multiângulo e interpretação facial. Teste gesto consentido em terra sem recriar captura subaquática."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "avatarwater-geometry",
        "area": "camera",
        "prompt": {
          "en": "How can virtual and physical sets share a spatial reference?",
          "nb": "Hvordan kan virtuelle og fysiske kulisser dele en romreferanse?",
          "fr": "Comment décors virtuels et physiques partagent-ils une référence spatiale ?",
          "pt": "Como podem cenários virtuais e físicos partilhar referência espacial?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a virtual preview is the final rendered image",
              "nb": "Anta at virtuell forhåndsvisning er ferdig rendering",
              "fr": "Supposer que l’aperçu virtuel est le rendu final",
              "pt": "Supor que prévia virtual é renderização final"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore discrepancies between real and virtual geometry",
              "nb": "Ignorer avvik mellom virkelig og virtuell geometri",
              "fr": "Ignorer les écarts entre géométries réelle et virtuelle",
              "pt": "Ignorar diferenças entre geometrias real e virtual"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use scaled geometry and verify alignment in preview",
              "nb": "Bruk målsatt geometri og verifiser samsvar i forhåndsvisning",
              "fr": "Utiliser géométrie à l’échelle et vérifier l’alignement en aperçu",
              "pt": "Usar geometria à escala e verificar alinhamento na prévia"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "THE THIRD FLOOR documents techvis from physical scans and Simulcam supervision. Test alignment between a tabletop model and a simple virtual scene.",
          "nb": "THE THIRD FLOOR dokumenterer techvis fra fysiske skann og Simulcam-oppfølging. Prøv samsvar mellom en bordmodell og en enkel virtuell scene.",
          "fr": "THE THIRD FLOOR documente techvis depuis scans physiques et Simulcam. Testez l’alignement d’une maquette et d’une scène virtuelle.",
          "pt": "THE THIRD FLOOR documenta techvis de digitalizações físicas e Simulcam. Teste alinhamento entre maquete e cena virtual."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s4"
        ]
      },
      {
        "id": "avatarwater-handoff",
        "area": "research",
        "prompt": {
          "en": "How can editorial choices remain traceable through virtual production?",
          "nb": "Hvordan kan klippevalg forbli sporbare gjennom virtuell produksjon?",
          "fr": "Comment garder les choix de montage traçables en production virtuelle ?",
          "pt": "Como manter escolhas de montagem rastreáveis em produção virtual?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat performance selection and final compositing as one step",
              "nb": "Behandle spillvalg og sluttkompositering som ett trinn",
              "fr": "Traiter sélection du jeu et compositing final comme une étape",
              "pt": "Tratar seleção de interpretação e composição final como uma etapa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Version performance selections, virtual cameras and effects handoffs",
              "nb": "Versjoner spillvalg, virtuelle kameraer og effektoverleveringer",
              "fr": "Versionner choix de jeu, caméras virtuelles et livraisons d’effets",
              "pt": "Versionar escolhas de interpretação, câmaras virtuais e entregas de efeitos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Overwrite previous selections without retaining references",
              "nb": "Overskriv tidligere valg uten å beholde referanser",
              "fr": "Écraser les choix antérieurs sans garder de références",
              "pt": "Sobrescrever escolhas anteriores sem guardar referências"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rivkin describes performance selection, virtual-camera construction and delivery versioning. Design a small original handoff ledger that preserves the source of each decision.",
          "nb": "Rivkin beskriver spillvalg, virtuell kamerabygging og leveranseversjonering. Lag en liten egen overleveringslogg som bevarer opphavet til hvert valg.",
          "fr": "Rivkin décrit sélection du jeu, caméra virtuelle et versions de livraison. Créez un registre préservant la provenance des choix.",
          "pt": "Rivkin descreve seleção de interpretação, câmara virtual e versões de entrega. Crie registo preservando origem de cada decisão."
        },
        "sourceIds": [
          "s2",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_oppenheimer_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Large-format provenance, parallel workprints and original sound motifs",
      "nb": "Storformatopphav, parallelle arbeidskopier og originale lydmotiver",
      "fr": "Provenance grand format, copies de travail parallèles et motifs sonores",
      "pt": "Proveniência de grande formato, cópias de trabalho paralelas e motivos sonoros"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Cinematographer Hoyte van Hoytema gets up-close & personal using Kodak 65MM large-format film on Christopher Nolan's Oppenheimer",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/oppenheimer/"
      },
      {
        "id": "s2",
        "title": "DP Van Hoytema and FotoKem talk 65mm and Oppenheimer",
        "publisher": "FotoKem",
        "url": "https://fotokem.com/oppenheimer-hoytema-fotokem/"
      },
      {
        "id": "s3",
        "title": "Clubhouse Conversations — Oppenheimer",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/videos/clubhouse-conversations-oppenheimer"
      },
      {
        "id": "s6",
        "title": "The Oscar-Nominated Sound Team Behind Oppenheimer",
        "publisher": "Dolby Creator Talks",
        "url": "https://podcasts.apple.com/us/podcast/180-the-oscar-nominated-sound-team-behind-oppenheimer/id1549901182?i=1000645197114"
      },
      {
        "id": "s7",
        "title": "Double Oscar Nominee Richard King Unveils the Aural Secrets of Oppenheimer and Maestro",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2024/03/double-oscar-nominee-richard-king-unveils-the-aural-secrets-of-oppenheimer-and-maestro/"
      },
      {
        "id": "s8",
        "title": "Oppenheimer editor Jennifer Lame feels the pressure",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment-arts/awards/story/2023-11-28/oppenheimer-editor-jennifer-lame-christopher-nolan"
      },
      {
        "id": "s9",
        "title": "Oppenheimer Composer Ludwig Göransson Creates a New Kind of Atomic Scale",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2023/07/oppenheimer-composer-ludwig-goransson-creates-a-new-kind-of-atomic-scale/"
      }
    ],
    "questions": [
      {
        "id": "oppenheimer-format",
        "area": "camera",
        "prompt": {
          "en": "How should different large-format negative stocks be documented?",
          "nb": "Hvordan bør ulike storformatnegativer dokumenteres?",
          "fr": "Comment documenter différentes pellicules négatives grand format ?",
          "pt": "Como documentar diferentes películas negativas de grande formato?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate stock, camera format, lab process and release records",
              "nb": "Skill filmtype, kameraformat, laboratorieprosess og visningslogger",
              "fr": "Distinguer pellicule, format caméra, laboratoire et diffusion",
              "pt": "Distinguir película, formato de câmara, laboratório e exibição"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer original stock solely from the final image",
              "nb": "Utled original filmtype bare fra sluttbildet",
              "fr": "Déduire la pellicule originale du seul résultat",
              "pt": "Deduzir película original apenas da imagem final"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume monochrome and color negatives use identical lab chemistry",
              "nb": "Anta at monokrome og fargenegativer bruker identisk laboratoriekjemi",
              "fr": "Supposer une chimie identique pour couleur et monochrome",
              "pt": "Supor química idêntica para cor e monocromático"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak and FotoKem document special 65mm monochrome development and distinct lab processes. Draw a provenance diagram without inventing processing specifications.",
          "nb": "Kodak og FotoKem dokumenterer særskilt monokrom 65 mm-utvikling og ulike laboratorieprosesser. Tegn et kildeopphavsdiagram uten å finne på prosesspesifikasjoner.",
          "fr": "Kodak et FotoKem documentent le 65 mm monochrome et des procédés distincts. Dessinez un schéma sans inventer de spécifications.",
          "pt": "Kodak e FotoKem documentam 65 mm monocromático e processos distintos. Desenhe diagrama sem inventar especificações."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "oppenheimer-workprint",
        "area": "research",
        "prompt": {
          "en": "How can a digital edit and physical workprint stay synchronized?",
          "nb": "Hvordan kan digital klipping og fysisk arbeidskopi holdes synkronisert?",
          "fr": "Comment synchroniser montage numérique et copie de travail physique ?",
          "pt": "Como sincronizar montagem digital e cópia de trabalho física?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard source identifiers once the first edit is assembled",
              "nb": "Forkast kildeidentifikatorer når første klipp er satt sammen",
              "fr": "Écarter les identifiants après le premier montage",
              "pt": "Descartar identificadores após primeira montagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a digital export automatically conforms the physical print",
              "nb": "Anta at digital eksport automatisk konformerer fysisk kopi",
              "fr": "Supposer qu’un export numérique conforme automatiquement la copie",
              "pt": "Supor que exportação digital conforma automaticamente a cópia"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track source identifiers and compare corresponding edit versions",
              "nb": "Spor kildeidentifikatorer og sammenlign tilsvarende klippeversjoner",
              "fr": "Suivre les identifiants sources et comparer les versions correspondantes",
              "pt": "Rastrear identificadores de origem e comparar versões correspondentes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "FotoKem describes keycode and workprint integration; Lame describes parallel digital and physical review. Test a small mock conform log with matched identifiers.",
          "nb": "FotoKem beskriver keycode og arbeidskopiintegrasjon; Lame omtaler parallell digital og fysisk gjennomgang. Prøv en liten simulert konformlogg med samsvarende identifikatorer.",
          "fr": "FotoKem décrit intégration keycode et copie de travail ; Lame la revue parallèle. Testez un registre fictif de conformage avec identifiants correspondants.",
          "pt": "FotoKem descreve integração keycode e cópia de trabalho; Lame revisão paralela. Teste registo simulado com identificadores correspondentes."
        },
        "sourceIds": [
          "s2",
          "s8"
        ]
      },
      {
        "id": "oppenheimer-motif",
        "area": "sound",
        "prompt": {
          "en": "How can recurring sound connect subjective memory and editorial rhythm?",
          "nb": "Hvordan kan tilbakevendende lyd knytte subjektivt minne og klipperytme sammen?",
          "fr": "Comment un son récurrent relie-t-il mémoire subjective et rythme du montage ?",
          "pt": "Como pode som recorrente ligar memória subjetiva e ritmo de montagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every sonic transition requires maximum volume",
              "nb": "Anta at hver lydovergang krever maksimalt volum",
              "fr": "Supposer que toute transition exige le volume maximal",
              "pt": "Supor que toda transição exige volume máximo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop original restrained motifs and compare their placement in the cut",
              "nb": "Utvikle originale dempede motiver og sammenlign plassering i klippen",
              "fr": "Développer des motifs originaux retenus et comparer leur placement",
              "pt": "Desenvolver motivos originais contidos e comparar colocação na montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Copy the film's exact music as a permanent temporary track",
              "nb": "Kopier filmens eksakte musikk som permanent midlertidig spor",
              "fr": "Copier la musique exacte comme piste provisoire permanente",
              "pt": "Copiar música exata como pista provisória permanente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "King discusses subjective sound and recurring motifs; Göransson describes original music used during rough cuts. Create an unrelated safe sound study using original material.",
          "nb": "King omtaler subjektiv lyd og tilbakevendende motiver; Göransson beskriver original musikk i grovklipp. Lag en urelatert trygg lydstudie med eget materiale.",
          "fr": "King évoque son subjectif et motifs récurrents ; Göransson musique originale au prémontage. Créez une étude sonore indépendante et sûre.",
          "pt": "King aborda som subjetivo e motivos recorrentes; Göransson música original na montagem provisória. Crie estudo sonoro independente e seguro."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s9"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_barbie_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Scaled scenic construction, coordinated color and musical editing",
      "nb": "Skalert kulissebygging, samordnet farge og musikalsk klipping",
      "fr": "Décors à échelle réduite, couleur coordonnée et montage musical",
      "pt": "Cenários em escala reduzida, cor coordenada e montagem musical"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Rodrigo Prieto ASC AMC: The cinematography of Barbie",
        "publisher": "Panavision",
        "url": "https://www.panavision.com/highlights/highlights-detail/collector%27s-edition"
      },
      {
        "id": "s4",
        "title": "Pretty in Pink With Barbie Production Designer Sarah Greenwood & Set Decorator Katie Spencer",
        "publisher": "Motion Picture Association - The Credits",
        "url": "https://www.motionpictures.org/2023/07/barbie-production-designer-sarah-greenwood-set-dec-katie-spencer/"
      },
      {
        "id": "s5",
        "title": "What's Inside Ken's Fur Coat, and More Secrets from Barbie's Costume Designer",
        "publisher": "Vanity Fair",
        "url": "https://www.vanityfair.com/hollywood/2023/07/barbie-costume-designer-interview"
      },
      {
        "id": "s6",
        "title": "Barbie Editor Nick Houy Talks Workflow and VFX",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/barbie-editor-nick-houy-talks-workflow-and-vfx/"
      },
      {
        "id": "s7",
        "title": "Barbie Editor Nick Houy on Leaving Only the A-Plus Jokes",
        "publisher": "Motion Picture Association - The Credits",
        "url": "https://www.motionpictures.org/2023/08/barbie-editor-nick-houy-on-leaving-only-the-a-plus-jokes/"
      },
      {
        "id": "s8",
        "title": "Hit Makers Mark Ronson and Andrew Wyatt on Adding a Pop Punch to Barbie Soundtrack",
        "publisher": "Motion Picture Association - The Credits",
        "url": "https://www.motionpictures.org/2024/01/hit-makers-mark-ronson-and-andrew-wyatt-on-adding-a-pop-punch-to-barbie-soundtrack-2/"
      }
    ],
    "questions": [
      {
        "id": "barbie-scale",
        "area": "research",
        "prompt": {
          "en": "How can reduced scenic scale support a deliberately artificial world?",
          "nb": "Hvordan kan redusert kulisseskala støtte en bevisst kunstig verden?",
          "fr": "Comment une échelle réduite sert-elle un univers volontairement artificiel ?",
          "pt": "Como pode escala reduzida apoiar universo deliberadamente artificial?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test model proportions, performer sightlines and camera perspective",
              "nb": "Prøv modellproporsjoner, siktlinjer og kameraperspektiv",
              "fr": "Tester proportions, axes des acteurs et perspective caméra",
              "pt": "Testar proporções, linhas de visão e perspetiva da câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Build every prop at real-world scale without testing the effect",
              "nb": "Bygg alle rekvisitter i virkelig størrelse uten å prøve uttrykket",
              "fr": "Construire chaque accessoire à taille réelle sans essai",
              "pt": "Construir adereços em tamanho real sem teste"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume physical sets exclude every digital correction",
              "nb": "Anta at fysiske kulisser utelukker alle digitale rettelser",
              "fr": "Supposer que les décors physiques excluent toute retouche",
              "pt": "Supor que cenários físicos excluem retoques digitais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Design testimony describes a roughly 23 percent reduction and open-front houses; the camera account discusses scenic gags. Test an original tabletop scale model rather than copying the set.",
          "nb": "Designkilden beskriver cirka 23 prosent reduksjon og åpne husfronter; fotokilden omtaler kulisseeffekter. Prøv en egen bordmodell fremfor å kopiere kulissen.",
          "fr": "La source décor décrit une réduction d’environ 23 % et des maisons ouvertes ; la source photo des gags scéniques. Testez une maquette originale.",
          "pt": "A fonte de cenografia descreve redução de cerca de 23% e casas abertas; a fonte de fotografia truques cénicos. Teste maquete original."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      },
      {
        "id": "barbie-palette",
        "area": "camera",
        "prompt": {
          "en": "How can costume and set colors be coordinated before filming?",
          "nb": "Hvordan kan kostyme- og kulissefarger samordnes før opptak?",
          "fr": "Comment coordonner les couleurs des costumes et décors avant tournage ?",
          "pt": "Como coordenar cores de figurinos e cenários antes da rodagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose costume colors independently from set design",
              "nb": "Velg kostymefarger uavhengig av scenografi",
              "fr": "Choisir les costumes indépendamment du décor",
              "pt": "Escolher cores de figurinos independentemente da cenografia"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume one color swatch predicts every photographed surface",
              "nb": "Anta at én fargeprøve forutsier alle fotograferte flater",
              "fr": "Supposer qu’un échantillon prédit toutes les surfaces filmées",
              "pt": "Supor que uma amostra prevê todas as superfícies filmadas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review shared swatches under intended lighting and camera tests",
              "nb": "Gjennomgå felles fargeprøver under planlagt lys og kameraprøver",
              "fr": "Examiner les échantillons communs sous la lumière et la caméra prévues",
              "pt": "Rever amostras comuns sob luz e câmara previstas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Durran describes costume and set color integration; the design and camera interviews document a controlled visual grammar. Test an original shared palette with different materials.",
          "nb": "Durran beskriver integrasjon av kostyme- og kulissefarger; design- og fotokildene dokumenterer kontrollert bildegrammatikk. Prøv en egen felles palett med ulike materialer.",
          "fr": "Durran décrit l’intégration des couleurs costumes et décors ; les sources documentent une grammaire visuelle contrôlée. Testez une palette originale sur diverses matières.",
          "pt": "Durran descreve integração das cores de figurinos e cenários; fontes documentam gramática visual controlada. Teste paleta original em materiais diversos."
        },
        "sourceIds": [
          "s2",
          "s4",
          "s5"
        ]
      },
      {
        "id": "barbie-music",
        "area": "sound",
        "prompt": {
          "en": "How can a musical sequence be revised without losing comic timing?",
          "nb": "Hvordan kan en musikalsk sekvens revideres uten å miste komisk timing?",
          "fr": "Comment réviser une séquence musicale sans perdre le rythme comique ?",
          "pt": "Como rever sequência musical sem perder ritmo cómico?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat songs and underscore as interchangeable layers",
              "nb": "Behandle sanger og underleggingsmusikk som utskiftbare lag",
              "fr": "Traiter chansons et musique de fond comme interchangeables",
              "pt": "Tratar canções e música de fundo como intercambiáveis"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original musical edits and preserve distinct song and score roles",
              "nb": "Sammenlign egne musikalske klipp og bevar ulike roller for sang og filmmusikk",
              "fr": "Comparer montages musicaux originaux et distinguer chanson et musique de film",
              "pt": "Comparar montagens musicais originais e distinguir canção e música de filme"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Lock all musical timing before reviewing performances",
              "nb": "Lås all musikalsk timing før gjennomgang av spill",
              "fr": "Verrouiller le rythme musical avant de revoir le jeu",
              "pt": "Bloquear ritmo musical antes de rever interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editor discusses musical recutting and comedy selection; music testimony describes separate song and score development. Test original music and reaction timing together.",
          "nb": "Klipperen omtaler musikalsk omklipping og komedievalg; musikkilden beskriver separat sang- og scoreutvikling. Prøv egen musikk og reaksjonstiming sammen.",
          "fr": "Le monteur évoque remontage musical et comédie ; la source musique distingue chansons et partition. Testez musique originale et réactions ensemble.",
          "pt": "O montador aborda remontagem musical e comédia; a fonte musical distingue canções e partitura. Teste música original e reações em conjunto."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s8"
        ]
      }
    ]
  },
  ...contemporarySourceWorkshops
] as const satisfies readonly SourceBackedCaseWorkshop[];
