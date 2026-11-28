import type { SourceBackedCaseWorkshop } from "./scenarioProductionSourceWorkshops.js";

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
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
