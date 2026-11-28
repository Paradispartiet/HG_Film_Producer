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
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
