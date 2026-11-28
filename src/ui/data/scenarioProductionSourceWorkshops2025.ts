import type { SourceBackedCaseWorkshop } from "./scenarioProductionSourceWorkshops.js";

export const sourceWorkshops2025 = [
  {
    "scenarioId": "scenario_sinners_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Large-format photography, historical music research and live sound",
      "nb": "Storformatfotografi, historisk musikkresearch og liveopptak",
      "fr": "Photographie grand format, recherche musicale et son direct",
      "pt": "Fotografia de grande formato, pesquisa musical e som direto"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Autumn Durald Arkapaw ASC created an immersive experience and slices of cinematic history shooting KODAK large format 65mm film for Ryan Coogler's sensational Sinners",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/sinners/"
      },
      {
        "id": "s4",
        "title": "Autumn Durald Arkapaw ASC on filming Sinners in Ultra Panavision 70 and IMAX",
        "publisher": "Panavision",
        "url": "https://www.panavision.com/highlights/highlights-detail/autumn-durald-arkapaw-asc-on-filming-sinners-in-ultra-panavision-70-and-imax"
      },
      {
        "id": "s5",
        "title": "Sinners Production Designer Hannah Beachler on Conjuring Ryan Coogler's Supernatural Stunner",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2025/05/sinners-production-designer-hannah-beachler-on-conjuring-ryan-cooglers-supernatural-stunner/"
      },
      {
        "id": "s6",
        "title": "Pinstripes and Blood Spatter: Costume Designer Ruth E. Carter on Making Dark Magic in Sinners",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2025/05/pinstripes-and-blood-spatter-costume-designer-ruth-e-carter-on-making-dark-magic-in-sinners/"
      },
      {
        "id": "s7",
        "title": "Sinners Oscar-Nominated Sound Mixer Chris Welcker on Rigging Michael B. Jordan's Twin Conversations",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2026/01/sinners-oscar-nominated-sound-mixer-chris-weckler-on-rigging-michael-b-jordans-twins/"
      },
      {
        "id": "s9",
        "title": "We're recreating the devil's music: composer Ludwig Göransson on Sinners",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/interviews/were-recreating-devils-music-composer-ludwig-goransson-sinners"
      }
    ],
    "questions": [
      {
        "id": "sinners-format",
        "area": "camera",
        "prompt": {
          "en": "How can several large-format presentation ratios guide framing?",
          "nb": "Hvordan kan flere storformatvisninger styre bildekomposisjonen?",
          "fr": "Comment plusieurs formats de projection guident-ils le cadre ?",
          "pt": "Como podem formatos de exibição distintos orientar enquadramento?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test common framing guides and preserve format-specific records",
              "nb": "Prøv felles utsnittsguider og bevar formatspesifikke logger",
              "fr": "Tester des guides communs et conserver les données par format",
              "pt": "Testar guias comuns e preservar registos por formato"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every exhibition version has identical framing",
              "nb": "Anta at alle visningsversjoner har identisk utsnitt",
              "fr": "Supposer que toutes les versions ont le même cadre",
              "pt": "Supor que versões de exibição têm quadro idêntico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer acquisition format from the widest release alone",
              "nb": "Utled opptaksformat bare fra den bredeste visningen",
              "fr": "Déduire la captation de la seule version la plus large",
              "pt": "Deduzir captação apenas da versão mais larga"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak and Panavision describe 5-perf and 15-perf capture and framing guides. Test original compositions across several presentation ratios.",
          "nb": "Kodak og Panavision beskriver 5-perf- og 15-perf-opptak og utsnittsguider. Prøv egne komposisjoner i flere visningsformater.",
          "fr": "Kodak et Panavision décrivent captation 5-perf et 15-perf et guides. Testez des compositions originales dans plusieurs ratios.",
          "pt": "Kodak e Panavision descrevem captação 5-perf e 15-perf e guias. Teste composições originais em várias proporções."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "sinners-music",
        "area": "research",
        "prompt": {
          "en": "How can historical music research inform a fictional performance space?",
          "nb": "Hvordan kan historisk musikkresearch informere et fiktivt spillerom?",
          "fr": "Comment la recherche musicale historique nourrit-elle un espace de jeu fictif ?",
          "pt": "Como pode pesquisa musical histórica informar espaço de atuação fictício?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every musical tradition as interchangeable",
              "nb": "Behandle alle musikktradisjoner som utskiftbare",
              "fr": "Traiter toutes les traditions musicales comme interchangeables",
              "pt": "Tratar tradições musicais como intercambiáveis"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose costumes without considering musician movement",
              "nb": "Velg kostymer uten å vurdere musikernes bevegelse",
              "fr": "Choisir les costumes sans considérer les gestes des musiciens",
              "pt": "Escolher figurinos sem considerar movimentos dos músicos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Consult cultural specialists and coordinate set and musical rehearsals",
              "nb": "Rådfør deg med kulturfagfolk og samordne kulisse- og musikkprøver",
              "fr": "Consulter des spécialistes et coordonner décor et répétitions musicales",
              "pt": "Consultar especialistas e coordenar cenário e ensaios musicais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The design and composer interviews describe historical research and cross-department rehearsals. Plan an original performance with culturally informed references and attributed contributions.",
          "nb": "Design- og komponistintervjuene beskriver historisk research og prøver på tvers av avdelinger. Planlegg eget spill med kulturforankrede referanser og krediterte bidrag.",
          "fr": "Les entretiens décrivent recherche historique et répétitions communes. Préparez un jeu original avec références culturelles et crédits.",
          "pt": "Entrevistas descrevem pesquisa histórica e ensaios conjuntos. Planeie atuação original com referências culturais e créditos."
        },
        "sourceIds": [
          "s5",
          "s6",
          "s9"
        ]
      },
      {
        "id": "sinners-sound",
        "area": "sound",
        "prompt": {
          "en": "How can camera noise and live musical performance be balanced?",
          "nb": "Hvordan kan kamerastøy og levende musikkspill balanseres?",
          "fr": "Comment équilibrer bruit de caméra et musique jouée en direct ?",
          "pt": "Como equilibrar ruído de câmara e música ao vivo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace every live performance without listening to the original",
              "nb": "Erstatt alt livespill uten å lytte til originalen",
              "fr": "Remplacer tout jeu direct sans écouter l’original",
              "pt": "Substituir atuação ao vivo sem ouvir original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record original live takes and separate clean audio references",
              "nb": "Ta opp egne livetagninger og separate rene lydreferanser",
              "fr": "Enregistrer prises originales en direct et références sonores propres",
              "pt": "Gravar tomadas originais ao vivo e referências sonoras limpas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every live recording is automatically suitable for release",
              "nb": "Anta at alle liveopptak automatisk egner seg til visning",
              "fr": "Supposer que toute prise directe convient à la diffusion",
              "pt": "Supor que gravação ao vivo serve automaticamente para exibição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound account describes camera-noise mitigation and sound-only takes; the composer describes live performance. Compare original audio versions while preserving synchronization.",
          "nb": "Lydkilden beskriver demping av kamerastøy og egne lydtagninger; komponisten omtaler livespill. Sammenlign egne lydversjoner med bevart synkronisering.",
          "fr": "La source son décrit bruit de caméra et prises son seules ; le compositeur le jeu direct. Comparez des versions synchronisées.",
          "pt": "A fonte sonora descreve ruído de câmara e tomadas só de som; compositor atuação ao vivo. Compare versões sincronizadas."
        },
        "sourceIds": [
          "s3",
          "s7",
          "s9"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_one_battle_after_another_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "VistaVision framing, daily editorial review and sonic identity",
      "nb": "VistaVision-utsnitt, daglig klippegjennomgang og lydidentitet",
      "fr": "Cadre VistaVision, revue quotidienne et identité sonore",
      "pt": "Quadro VistaVision, revisão diária e identidade sonora"
    },
    "sources": [
      {
        "id": "s2",
        "title": "How director Paul Thomas Anderson and DP Michael Bauman Re-Imagined 35mm VistaVision for the action-packed 'One Battle After Another'",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/one-battle-after-another/"
      },
      {
        "id": "s4",
        "title": "One Battle After Another editor, alum Andy Jurgensen, to discuss the political thriller on campus",
        "publisher": "UC Santa Barbara",
        "url": "https://news.ucsb.edu/2025/022097/one-battle-after-another-editor-alum-andy-jurgensen-discuss-political-thriller-campus"
      },
      {
        "id": "s5",
        "title": "How One Battle After Another editor Andy Jurgensen crafted the iconic river of hills car chase",
        "publisher": "Screen Daily",
        "url": "https://www.screendaily.com/interviews/how-one-battle-after-another-editor-crafted-the-iconic-river-of-hills-car-chase/5211078.article"
      },
      {
        "id": "s6",
        "title": "Revolutionary Sounds: Sound Editor Christopher Scarabosio on One Battle After Another",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/132799-revolutionary-sounds-sound-editor-christopher-scarabosio-on-one-battle-after-another/"
      },
      {
        "id": "s7",
        "title": "One Battle After Another [Soundtrack]",
        "publisher": "Nonesuch Records",
        "url": "https://www.nonesuch.com/albums/one-battle-after-another-soundtrack"
      },
      {
        "id": "s8",
        "title": "One Battle After Another",
        "publisher": "British Board of Film Classification",
        "url": "https://www.bbfc.co.uk/release/one-battle-after-another-q29sbgvjdglvbjpwwc0xmdi5mdix"
      }
    ],
    "questions": [
      {
        "id": "onebattle-format",
        "area": "camera",
        "prompt": {
          "en": "How should a mixed camera-format production preserve acquisition records?",
          "nb": "Hvordan bør en produksjon med blandede kameraformater bevare opptakslogger?",
          "fr": "Comment conserver les données d’une production aux formats mixtes ?",
          "pt": "Como preservar registos de produção com formatos mistos?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Log the actual camera format and intended framing for each setup",
              "nb": "Loggfør faktisk kameraformat og planlagt utsnitt per oppsett",
              "fr": "Noter format réel et cadre prévu pour chaque dispositif",
              "pt": "Registar formato real e enquadramento previsto por dispositivo"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Declare every shot VistaVision regardless of documented exceptions",
              "nb": "Erklær alle bilder VistaVision uansett dokumenterte unntak",
              "fr": "Déclarer tous les plans VistaVision malgré les exceptions",
              "pt": "Declarar planos VistaVision apesar das exceções"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer the camera format from runtime metadata",
              "nb": "Utled kameraformat fra spilletidsmetadata",
              "fr": "Déduire le format caméra de la durée",
              "pt": "Deduzir formato de câmara da duração"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak documents VistaVision and dialogue-camera exceptions. Create a hypothetical capture ledger separating original format, framing and exhibition records.",
          "nb": "Kodak dokumenterer VistaVision og unntak for dialogkamera. Lag en tenkt opptakslogg som skiller originalformat, utsnitt og visning.",
          "fr": "Kodak documente VistaVision et exceptions de dialogue. Créez un registre fictif séparant captation, cadre et diffusion.",
          "pt": "Kodak documenta VistaVision e exceções de diálogo. Crie registo fictício separando captação, quadro e exibição."
        },
        "sourceIds": [
          "s2",
          "s8"
        ]
      },
      {
        "id": "onebattle-review",
        "area": "research",
        "prompt": {
          "en": "How can daily screenings reveal problems before a shoot ends?",
          "nb": "Hvordan kan daglige visninger avdekke problemer før opptak avsluttes?",
          "fr": "Comment les projections quotidiennes révèlent-elles les problèmes avant la fin du tournage ?",
          "pt": "Como podem sessões diárias revelar problemas antes do fim da rodagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Wait until every location has been released before reviewing material",
              "nb": "Vent til alle opptakssteder er frigitt før materialet vurderes",
              "fr": "Attendre la libération de tous les lieux avant de revoir les images",
              "pt": "Esperar libertação de locais antes de rever imagens"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard rejected versions before evaluating their rhythm",
              "nb": "Forkast avviste versjoner før rytmen vurderes",
              "fr": "Écarter les versions rejetées avant d’évaluer le rythme",
              "pt": "Descartar versões rejeitadas antes de avaliar ritmo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare rough cuts and record motivated requests for additional coverage",
              "nb": "Sammenlign grovklipp og registrer begrunnede ønsker om tilleggsopptak",
              "fr": "Comparer prémontages et noter les demandes motivées de prises supplémentaires",
              "pt": "Comparar montagens provisórias e registar pedidos motivados de captação adicional"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editor describes daily screenings and iterative motion and rhythm review. Test alternate edits of a neutral sequence using a documented review log.",
          "nb": "Klipperen beskriver daglige visninger og iterativ bevegelses- og rytmevurdering. Prøv alternative klipp av en nøytral sekvens med dokumentert gjennomgangslogg.",
          "fr": "Le monteur décrit projections quotidiennes et révision du rythme. Testez des montages neutres avec journal de revue.",
          "pt": "O montador descreve sessões diárias e revisão de ritmo. Teste montagens neutras com diário de revisão."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "onebattle-sound",
        "area": "sound",
        "prompt": {
          "en": "How can early sound collaboration support the rhythm of a moving-image sequence?",
          "nb": "Hvordan kan tidlig lydsamarbeid støtte rytmen i en bildesekvens?",
          "fr": "Comment la collaboration sonore précoce soutient-elle le rythme des images ?",
          "pt": "Como pode colaboração sonora inicial apoiar ritmo de imagens?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Delay every audio decision until final delivery",
              "nb": "Utsett alle lydvalg til endelig leveranse",
              "fr": "Reporter toutes les décisions sonores à la livraison",
              "pt": "Adiar decisões sonoras até entrega final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test original object sounds and musical sketches during editing",
              "nb": "Prøv egne objektlyder og musikkskisser under klipping",
              "fr": "Tester sons d’objets originaux et esquisses musicales au montage",
              "pt": "Testar sons de objetos originais e esboços musicais na montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical sound signatures for all recurring objects",
              "nb": "Bruk identiske lydsignaturer for alle tilbakevendende objekter",
              "fr": "Utiliser les mêmes signatures pour tous les objets",
              "pt": "Usar assinaturas iguais para todos os objetos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editor and sound mixer describe early handoffs and iterative sound work. Compare original tabletop-motion sounds against a short edit rather than recreating dangerous action.",
          "nb": "Klipperen og lydmikseren beskriver tidlige overleveringer og iterativt lydarbeid. Sammenlign egne lyder fra bordmodellbevegelser mot et kortklipp fremfor farlig action.",
          "fr": "Le monteur et le mixeur décrivent échanges précoces et son itératif. Comparez des sons d’objets neutres sans recréer d’action dangereuse.",
          "pt": "Montador e misturador descrevem transições iniciais e som iterativo. Compare sons de objetos neutros sem recriar ação perigosa."
        },
        "sourceIds": [
          "s5",
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_it_was_just_an_accident_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Available-light realism, selective coverage and parallel editorial",
      "nb": "Tilgjengelig lys, selektiv dekning og parallell klipping",
      "fr": "Réalisme en lumière disponible, prises sélectives et montage parallèle",
      "pt": "Realismo em luz disponível, captação seletiva e montagem paralela"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Amin Jafari / It Was Just an Accident",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/amin-jafari-it-was-just-an-accident/"
      },
      {
        "id": "s3",
        "title": "Notes on It Was Just an Accident",
        "publisher": "Definition Magazine",
        "url": "https://definitionmagazine.com/features/notes-on-it-was-just-an-accident/"
      },
      {
        "id": "s4",
        "title": "We Should Narrate Exactly What We See: Jafar Panahi on It Was Just an Accident",
        "publisher": "The Film Stage",
        "url": "https://thefilmstage.com/we-should-narrate-exactly-what-we-see-jafar-panahi-on-it-was-just-an-accident/"
      },
      {
        "id": "s5",
        "title": "My Method is Invisible Editing: Editor Amir Etminan on It Was Just an Accident",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/132619-interview-editor-amir-etminan-it-was-just-an-accident/"
      },
      {
        "id": "s6",
        "title": "Courage & Conviction: Editor Amir Etminan on It Was Just an Accident",
        "publisher": "CineMontage",
        "url": "https://cinemontage.org/courage-conviction-neither-police-interrogation-nor-tech-limitations-could-stop-the-editor-of-the-oscar-nominated-iranian-film-it-was-just-an-accident/"
      },
      {
        "id": "s7",
        "title": "It Was Just an Accident co-writer Mehdi Mahmoudian",
        "publisher": "Variety Australia",
        "url": "https://au.variety.com/2026/film/news/it-was-just-an-accident-co-writer-arrested-iran-32570/"
      }
    ],
    "questions": [
      {
        "id": "justaccident-light",
        "area": "camera",
        "prompt": {
          "en": "How can available light inform a fictional interior's realism?",
          "nb": "Hvordan kan tilgjengelig lys forme et fiktivt interiørs realisme?",
          "fr": "Comment la lumière disponible nourrit-elle le réalisme intérieur ?",
          "pt": "Como pode luz disponível informar realismo interior?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Study natural and practical light in a permitted neutral room",
              "nb": "Studer naturlig og praktisk lys i et tillatt nøytralt rom",
              "fr": "Étudier lumière naturelle et pratique dans un lieu autorisé",
              "pt": "Estudar luz natural e prática num local autorizado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every location works under identical lighting",
              "nb": "Anta at alle steder fungerer med identisk lys",
              "fr": "Supposer que tous les lieux fonctionnent sous la même lumière",
              "pt": "Supor que locais funcionam com luz idêntica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat limited equipment as proof of documentary authenticity",
              "nb": "Behandle begrenset utstyr som bevis på dokumentarisk autentisitet",
              "fr": "Traiter le matériel limité comme preuve d’authenticité documentaire",
              "pt": "Tratar equipamento limitado como prova de autenticidade documental"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jafari and Panahi describe available-light realism and specific capture exceptions. Test a legal fictional interior and document its light choices without reproducing security-sensitive conditions.",
          "nb": "Jafari og Panahi beskriver realisme med tilgjengelig lys og enkelte opptaksunntak. Prøv et lovlig fiktivt interiør og dokumenter lysvalg uten å gjenskape sikkerhetsfølsomme forhold.",
          "fr": "Jafari et Panahi décrivent lumière disponible et exceptions. Testez un intérieur fictif autorisé sans reproduire de circonstances sensibles.",
          "pt": "Jafari e Panahi descrevem luz disponível e exceções. Teste interior fictício autorizado sem reproduzir circunstâncias sensíveis."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "justaccident-coverage",
        "area": "research",
        "prompt": {
          "en": "How can a held dialogue scene sustain changing relationships?",
          "nb": "Hvordan kan en fastholdt dialogscene opprettholde skiftende relasjoner?",
          "fr": "Comment une scène dialoguée prolongée maintient-elle des relations changeantes ?",
          "pt": "Como pode cena dialogada prolongada sustentar relações variáveis?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Require genuine distress to create convincing performance",
              "nb": "Krev ekte uro for å skape overbevisende spill",
              "fr": "Exiger une détresse réelle pour un jeu convaincant",
              "pt": "Exigir sofrimento real para interpretação convincente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume limited coverage removes the need for editorial review",
              "nb": "Anta at begrenset dekning fjerner behovet for klippegjennomgang",
              "fr": "Supposer que peu de prises dispensent de revue",
              "pt": "Supor que cobertura limitada dispensa revisão"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a neutral conversation and compare complete takes",
              "nb": "Øv inn en nøytral samtale og sammenlign hele tagninger",
              "fr": "Répéter une conversation neutre et comparer les prises entières",
              "pt": "Ensaiar conversa neutra e comparar tomadas completas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editor describes selective coverage and extended performance. Test a consented ordinary dialogue exercise, without reenacting coercion or trauma.",
          "nb": "Klipperen beskriver selektiv dekning og sammenhengende spill. Prøv en ordinær dialogøvelse med samtykke, uten å gjenskape tvang eller traumer.",
          "fr": "Le monteur décrit prises sélectives et jeu prolongé. Testez un dialogue ordinaire consenti, sans rejouer coercition ni traumatisme.",
          "pt": "O montador descreve cobertura seletiva e atuação prolongada. Teste diálogo comum consentido sem reencenar coerção ou trauma."
        },
        "sourceIds": [
          "s5",
          "s7"
        ]
      },
      {
        "id": "justaccident-edit",
        "area": "research",
        "prompt": {
          "en": "How can parallel editing support a compact production?",
          "nb": "Hvordan kan parallell klipping støtte en kompakt produksjon?",
          "fr": "Comment un montage parallèle soutient-il une petite production ?",
          "pt": "Como pode montagem paralela apoiar produção compacta?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Leave take approval decisions undocumented",
              "nb": "La godkjenning av tagninger forbli udokumentert",
              "fr": "Laisser les validations de prises sans trace",
              "pt": "Deixar aprovações de tomadas sem registo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve original media and link reviewed proxies to take records",
              "nb": "Bevar originalmedier og knytt gjennomgåtte proxyer til tagninger",
              "fr": "Préserver les originaux et relier proxys revus aux prises",
              "pt": "Preservar originais e ligar proxies revistos a tomadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace original footage with low-resolution editorial proxies",
              "nb": "Erstatt originalopptak med lavoppløselige klippeproxyer",
              "fr": "Remplacer les originaux par les proxys basse résolution",
              "pt": "Substituir originais por proxies de baixa resolução"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Etminan describes daily backup, proxies and parallel editing. Design a small conventional editing workflow with verified backups and explicit take approval.",
          "nb": "Etminan beskriver daglig sikkerhetskopi, proxyer og parallell klipping. Lag en liten ordinær klippeflyt med verifiserte sikkerhetskopier og tydelig godkjenning.",
          "fr": "Etminan décrit sauvegardes, proxys et montage parallèle. Concevez une chaîne ordinaire avec sauvegardes vérifiées et validation des prises.",
          "pt": "Etminan descreve cópias, proxies e montagem paralela. Conceba fluxo comum com cópias verificadas e aprovação de tomadas."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_sirat_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Super 16 texture, researched environments and pre-shoot music",
      "nb": "Super 16-tekstur, undersøkte miljøer og musikk før opptak",
      "fr": "Texture Super 16, décors documentés et musique avant tournage",
      "pt": "Textura Super 16, ambientes pesquisados e música prévia"
    },
    "sources": [
      {
        "id": "s3",
        "title": "KODAK Super 16mm proves a sure-fire winner for DP Mauro Herce AEC on Óliver Laxe's hypnotic and existential desert odyssey 'Sirāt'",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/sirat/"
      },
      {
        "id": "s4",
        "title": "Interview: Oliver Laxe on Sirât",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/interview-oliver-laxe-on-sirat/"
      },
      {
        "id": "s5",
        "title": "The Sound of Sirât, with Director Óliver Laxe",
        "publisher": "Dolby Creator Lab",
        "url": "https://www.dolby.com/creator-lab/podcast/sound-sirat-director-oliver-laxe/"
      },
      {
        "id": "s6",
        "title": "Existential Rave: Kangding Ray on Scoring Sirāt",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/132234-interview-composer-kangding-ray-sirat/"
      },
      {
        "id": "s7",
        "title": "How Spanish Oscar hopeful 'Sirât' threw the year's hottest rave",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment-arts/awards/story/2025-12-03/sirat-rave-scene-explained"
      }
    ],
    "questions": [
      {
        "id": "sirat-texture",
        "area": "camera",
        "prompt": {
          "en": "How can capture-format tests inform a landscape film's texture?",
          "nb": "Hvordan kan opptaksformatprøver informere en landskapsfilms tekstur?",
          "fr": "Comment les essais de format nourrissent-ils la texture d’un film de paysage ?",
          "pt": "Como podem testes de formato informar textura de filme de paisagem?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare safe landscape tests and document the selected workflow",
              "nb": "Sammenlign trygge landskapsprøver og dokumenter valgt arbeidsflyt",
              "fr": "Comparer essais de paysage sûrs et documenter la chaîne retenue",
              "pt": "Comparar testes seguros de paisagem e documentar fluxo escolhido"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume grain alone determines the narrative meaning",
              "nb": "Anta at filmkorn alene bestemmer fortellingens mening",
              "fr": "Supposer que le grain seul détermine le sens",
              "pt": "Supor que grão sozinho determina significado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore differences between capture and scan resolution",
              "nb": "Ignorer forskjeller mellom opptak og skanneoppløsning",
              "fr": "Ignorer les différences entre captation et résolution de scan",
              "pt": "Ignorar diferenças entre captação e resolução de scan"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Herce describes a change from 35mm to Super 16 and the scan chain. Compare original texture tests in safe conditions without reenacting hazardous production situations.",
          "nb": "Herce beskriver overgang fra 35 mm til Super 16 og skannekjeden. Sammenlign egne teksturprøver under trygge forhold uten å gjenskape farlige opptakssituasjoner.",
          "fr": "Herce décrit passage du 35 mm au Super 16 et scans. Comparez des textures originales en sécurité sans recréer de situations dangereuses.",
          "pt": "Herce descreve passagem de 35 mm a Super 16 e scans. Compare texturas originais em segurança sem recriar situações perigosas."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "sirat-design",
        "area": "research",
        "prompt": {
          "en": "How can research with music communities shape a fictional setting?",
          "nb": "Hvordan kan research med musikkmiljøer forme et fiktivt miljø?",
          "fr": "Comment la recherche auprès de communautés musicales façonne-t-elle un décor fictif ?",
          "pt": "Como pode pesquisa com comunidades musicais moldar ambiente fictício?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat community experience as generic visual decoration",
              "nb": "Behandle miljøets erfaring som generisk bildepynt",
              "fr": "Traiter l’expérience communautaire comme simple décoration",
              "pt": "Tratar experiência comunitária como decoração genérica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy private participant material without permission",
              "nb": "Kopier privat deltakermateriale uten tillatelse",
              "fr": "Copier des documents privés sans autorisation",
              "pt": "Copiar material privado sem autorização"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Consult participants and design a safe scaled reference model",
              "nb": "Rådfør deg med deltakere og lag en trygg skalert referansemodell",
              "fr": "Consulter les participants et créer une maquette sûre",
              "pt": "Consultar participantes e criar maquete segura"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ateca researched free-party collectives and built a speaker-wall setting. Create an original fictional design with credited consultation and a safe model rather than a live event.",
          "nb": "Ateca undersøkte free-party-miljøer og bygde en høyttalervegg. Lag et eget fiktivt design med kreditert rådgivning og trygg modell fremfor et livearrangement.",
          "fr": "Ateca a étudié les collectifs et construit un mur d’enceintes. Créez un décor fictif avec consultation créditée et maquette sûre.",
          "pt": "Ateca pesquisou coletivos e construiu parede de colunas. Crie cenário fictício com consulta creditada e maquete segura."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      },
      {
        "id": "sirat-music",
        "area": "sound",
        "prompt": {
          "en": "How can music composed before shooting influence the eventual edit?",
          "nb": "Hvordan kan musikk komponert før opptak påvirke den endelige klippen?",
          "fr": "Comment la musique composée avant tournage influence-t-elle le montage ?",
          "pt": "Como pode música composta antes da rodagem influenciar montagem final?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use excessive playback volume as the main creative method",
              "nb": "Bruk overdreven avspillingsstyrke som hovedmetode",
              "fr": "Utiliser un volume excessif comme méthode créative principale",
              "pt": "Usar volume excessivo como método criativo principal"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test original rhythmic sketches against movement and revise after editing",
              "nb": "Prøv egne rytmeskisser mot bevegelse og revider etter klipping",
              "fr": "Tester des esquisses rythmiques originales et les réviser au montage",
              "pt": "Testar esboços rítmicos originais e revê-los na montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume music must remain unchanged after photography",
              "nb": "Anta at musikken må forbli uendret etter opptak",
              "fr": "Supposer que la musique doit rester intacte après tournage",
              "pt": "Supor que música deve ficar intacta após rodagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kangding Ray describes extensive pre-shoot music development and later refinement. Compare original sketches at comfortable levels against a neutral movement study.",
          "nb": "Kangding Ray beskriver omfattende musikkutvikling før opptak og senere foredling. Sammenlign egne skisser på behagelige nivåer mot en nøytral bevegelsesstudie.",
          "fr": "Kangding Ray décrit musique préparée en amont et affinée ensuite. Comparez des esquisses originales à niveau confortable sur un mouvement neutre.",
          "pt": "Kangding Ray descreve música prévia e refinamento posterior. Compare esboços originais em nível confortável com movimento neutro."
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
    "scenarioId": "scenario_sound_of_falling_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Memory-image research, nonlinear editorial and early sound dramaturgy",
      "nb": "Minnebilde-research, ikke-lineær klipping og tidlig lyddramaturgi",
      "fr": "Recherche d’images-mémoires, montage non linéaire et dramaturgie sonore",
      "pt": "Pesquisa de imagens-memória, montagem não linear e dramaturgia sonora"
    },
    "sources": [
      {
        "id": "s4",
        "title": "Fabian Gamper / Sound of Falling",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/fabian-gamper-sound-of-falling/"
      },
      {
        "id": "s5",
        "title": "TALKING TO… Fabian Gamper",
        "publisher": "Swiss Films",
        "url": "https://www.swissfilms.ch/en/news/talking-to-fabian-gamper/7408"
      },
      {
        "id": "s6",
        "title": "Interview: Evelyn Rack, Editor of joint Cannes Jury Prize-winning Sound of Falling",
        "publisher": "Berlinale Talents",
        "url": "https://www.berlinale-talents.de/bt/page/c/Interview-EvelynRack"
      },
      {
        "id": "s7",
        "title": "Evelyn Rack On Editing the Documentary Puzzle of Sound of Falling",
        "publisher": "The Contending",
        "url": "https://thecontending.com/evelyn-rack-interview/"
      },
      {
        "id": "s8",
        "title": "A Sound Mind: Billie Mind is the sound artist who worked on Sound of Falling",
        "publisher": "The Berliner",
        "url": "https://www.the-berliner.com/features/billie-mind-sound-artist-sound-of-falling/"
      },
      {
        "id": "s9",
        "title": "History with a Capital H: Mascha Schilinski on Cannes 2025 Award-Winner Sound of Falling",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/130868-interview-mascha-schilinski-cannes-2025-sound-of-falling/"
      }
    ],
    "questions": [
      {
        "id": "soundfalling-memory",
        "area": "camera",
        "prompt": {
          "en": "How can camera movement convey fragmentary fictional memory?",
          "nb": "Hvordan kan kamerabevegelse formidle fragmentert fiktiv erindring?",
          "fr": "Comment le mouvement caméra transmet-il une mémoire fictive fragmentaire ?",
          "pt": "Como pode movimento de câmara transmitir memória fictícia fragmentária?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test subjective framing and movement with documented visual references",
              "nb": "Prøv subjektive utsnitt og bevegelse med dokumenterte bildereferanser",
              "fr": "Tester cadres subjectifs et mouvements avec références documentées",
              "pt": "Testar enquadramentos subjetivos e movimento com referências documentadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat a memory-like image as a verified historical recording",
              "nb": "Behandle et minnelignende bilde som verifisert historisk opptak",
              "fr": "Traiter une image-mémoire comme archive historique vérifiée",
              "pt": "Tratar imagem de memória como gravação histórica verificada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume vintage lenses determine the meaning of memory alone",
              "nb": "Anta at eldre optikk alene bestemmer minnets mening",
              "fr": "Supposer que les optiques anciennes seules définissent la mémoire",
              "pt": "Supor que óticas antigas sozinhas definem memória"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematography accounts describe memory-image research, physical camera interaction and vintage optics. Create an original fictional memory test with explicit visual choices.",
          "nb": "Fotokildene beskriver minnebilde-research, fysisk kamerasamspill og eldre optikk. Lag en egen fiktiv minneprøve med tydelige bildevalg.",
          "fr": "Les sources décrivent images-mémoires, interaction caméra et optiques anciennes. Créez un essai fictif avec choix visuels explicites.",
          "pt": "As fontes descrevem imagens-memória, interação de câmara e óticas antigas. Crie teste fictício com escolhas visuais explícitas."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "soundfalling-structure",
        "area": "research",
        "prompt": {
          "en": "How can a mosaic narrative connect multiple time periods without strict chronology?",
          "nb": "Hvordan kan en mosaikkfortelling knytte flere tidsperioder sammen uten streng kronologi?",
          "fr": "Comment un récit mosaïque relie-t-il plusieurs époques sans chronologie stricte ?",
          "pt": "Como pode narrativa em mosaico ligar épocas sem cronologia rigorosa?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all timeline identifiers before comparing the versions",
              "nb": "Fjern alle tidslinjemerker før versjonene sammenlignes",
              "fr": "Supprimer les repères temporels avant comparaison",
              "pt": "Remover marcadores temporais antes de comparar"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume nonchronological structure requires random scene order",
              "nb": "Anta at ikke-kronologisk struktur krever tilfeldig scenerekkefølge",
              "fr": "Supposer qu’un récit non chronologique exige un ordre aléatoire",
              "pt": "Supor que estrutura não cronológica exige ordem aleatória"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Label timelines and compare emotional connections across edit versions",
              "nb": "Merk tidslinjer og sammenlign følelsesforbindelser mellom klippeversjoner",
              "fr": "Identifier les temporalités et comparer les liens émotionnels entre montages",
              "pt": "Identificar linhas temporais e comparar ligações emocionais entre montagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rack describes color-coded timelines and repeated emotional restructuring. Build a small fictional mosaic with labeled chronology and test several narrative orders.",
          "nb": "Rack beskriver fargekodede tidslinjer og gjentatt følelsesstyrt omstrukturering. Lag en liten fiktiv mosaikk med merket kronologi og prøv flere rekkefølger.",
          "fr": "Rack décrit temporalités colorées et restructuration émotionnelle. Créez une mosaïque fictive avec chronologie repérée et plusieurs ordres.",
          "pt": "Rack descreve linhas temporais coloridas e reestruturação emocional. Crie mosaico fictício com cronologia marcada e várias ordens."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s9"
        ]
      },
      {
        "id": "soundfalling-sound",
        "area": "sound",
        "prompt": {
          "en": "How can a sound library develop alongside a changing screenplay?",
          "nb": "Hvordan kan et lydbibliotek utvikles sammen med et skiftende manus?",
          "fr": "Comment une sonothèque évolue-t-elle avec un scénario changeant ?",
          "pt": "Como pode biblioteca sonora evoluir com argumento variável?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every library sound as a finished narrative cue",
              "nb": "Behandle hver biblioteklyd som ferdig fortellerinnslag",
              "fr": "Traiter chaque son de bibliothèque comme motif définitif",
              "pt": "Tratar som de biblioteca como motivo definitivo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Collect original sound references and revise motif associations with the script",
              "nb": "Samle egne lydreferanser og revider motivkoblinger med manuset",
              "fr": "Collecter des références originales et réviser les motifs avec le scénario",
              "pt": "Recolher referências originais e rever motivos com o argumento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Wait for picture lock before collecting any sound references",
              "nb": "Vent til bildelås før noen lydreferanser samles",
              "fr": "Attendre le verrouillage image avant toute référence sonore",
              "pt": "Esperar bloqueio de imagem antes de recolher referências sonoras"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mind describes early involvement and parallel sound-library and dramaturgy work. Create a versioned original library and test its associations in a neutral fictional sequence.",
          "nb": "Mind beskriver tidlig involvering og parallelt lydbibliotek- og dramaturgiarbeid. Lag et versjonert eget bibliotek og prøv koblingene i en nøytral fiktiv sekvens.",
          "fr": "Mind décrit implication précoce, sonothèque et dramaturgie parallèles. Créez une bibliothèque originale versionnée et testez ses associations.",
          "pt": "Mind descreve participação inicial, biblioteca e dramaturgia paralelas. Crie biblioteca original versionada e teste associações."
        },
        "sourceIds": [
          "s7",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_resurrection_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Chapter-specific film languages, continuous movement and evolving music",
      "nb": "Kapittelspesifikke filmspråk, sammenhengende bevegelse og musikk i utvikling",
      "fr": "Langages filmiques par chapitre, mouvement continu et musique évolutive",
      "pt": "Linguagens cinematográficas por capítulo, movimento contínuo e música evolutiva"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Exclusive Interview | Bi Gan on Creating Resurrection",
        "publisher": "UK-China Film Collab",
        "url": "https://www.ukchinafilm.com/bi-gan-resurrection/"
      },
      {
        "id": "s4",
        "title": "A Conversation with Bi Gan (RESURRECTION)",
        "publisher": "Hammer to Nail",
        "url": "https://www.hammertonail.com/interviews/bi-gan/"
      },
      {
        "id": "s5",
        "title": "The Dream Machine: Bi Gan on Resurrection",
        "publisher": "MUBI Notebook",
        "url": "https://mubi.com/en/notebook/posts/the-dream-machine-bi-gan-on-resurrection"
      },
      {
        "id": "s6",
        "title": "World-Building: Bi Gan on Resurrection",
        "publisher": "Screen Slate",
        "url": "https://www.screenslate.com/articles/world-building-bi-gan-resurrection"
      },
      {
        "id": "s7",
        "title": "How charming it is to make a silent film: Bi Gan on Resurrection",
        "publisher": "BFI Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/interviews/how-charming-it-make-silent-film-bi-gan-resurrection"
      },
      {
        "id": "s8",
        "title": "Cinema Will Not Come to an End: Bi Gan on Resurrection",
        "publisher": "The Film Stage",
        "url": "https://thefilmstage.com/cinema-will-not-come-to-an-end-bi-gan-on-resurrection/"
      }
    ],
    "questions": [
      {
        "id": "resurrection-chapters",
        "area": "research",
        "prompt": {
          "en": "How can distinct historical film languages share one narrative framework?",
          "nb": "Hvordan kan ulike historiske filmspråk dele én fortellingsramme?",
          "fr": "Comment plusieurs langages filmiques historiques partagent-ils un cadre narratif ?",
          "pt": "Como podem linguagens cinematográficas históricas partilhar estrutura narrativa?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Define chapter-specific visual rules and a shared recurring framework",
              "nb": "Definer kapittelspesifikke bilderegler og en felles tilbakevendende ramme",
              "fr": "Définir des règles visuelles par chapitre et un cadre commun",
              "pt": "Definir regras visuais por capítulo e estrutura comum"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical historical conventions for all chapters",
              "nb": "Bruk identiske historiske konvensjoner i alle kapitler",
              "fr": "Employer les mêmes conventions historiques pour tous les chapitres",
              "pt": "Usar convenções históricas idênticas em todos os capítulos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Change every visual rule without considering narrative links",
              "nb": "Endre alle bilderegler uten å vurdere fortellingskoblinger",
              "fr": "Changer les règles sans considérer les liens narratifs",
              "pt": "Mudar regras sem considerar ligações narrativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Bi Gan describes historical film languages and distinct chapter design resets. Plan three original visual studies that retain a common narrative motif.",
          "nb": "Bi Gan beskriver historiske filmspråk og ulike designskifter mellom kapitler. Planlegg tre egne bildestudier med et felles fortellingsmotiv.",
          "fr": "Bi Gan décrit langages historiques et changements de décor par chapitre. Concevez trois études originales avec motif narratif commun.",
          "pt": "Bi Gan descreve linguagens históricas e mudanças por capítulo. Planeie três estudos originais com motivo narrativo comum."
        },
        "sourceIds": [
          "s3",
          "s7"
        ]
      },
      {
        "id": "resurrection-movement",
        "area": "camera",
        "prompt": {
          "en": "How can continuous camera movement coordinate set geography and changing light?",
          "nb": "Hvordan kan sammenhengende kamerabevegelse samordne kulissegeografi og skiftende lys?",
          "fr": "Comment un mouvement continu coordonne-t-il espace et lumière changeante ?",
          "pt": "Como pode movimento contínuo coordenar espaço e luz variável?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume sunrise timing will repeat exactly on every day",
              "nb": "Anta at soloppgang gjentar seg nøyaktig hver dag",
              "fr": "Supposer que le lever du soleil se répète exactement",
              "pt": "Supor que nascer do sol se repete exatamente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Construct a set without testing its movement path",
              "nb": "Bygg en kulisse uten å prøve bevegelsesbanen",
              "fr": "Construire un décor sans tester le trajet",
              "pt": "Construir cenário sem testar percurso"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a safe short path and record light continuity references",
              "nb": "Øv en trygg kort bane og registrer lyskontinuitetsreferanser",
              "fr": "Répéter un trajet court et sûr et noter les références lumineuses",
              "pt": "Ensaiar percurso curto e seguro e registar referências de luz"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Bi Gan describes coordinated location preparation and weather-dependent long takes. Test a brief neutral walk with alternative light plans rather than replicating the original action.",
          "nb": "Bi Gan beskriver samordnet stedsforberedelse og væravhengige langtagninger. Prøv en kort nøytral gåscene med alternative lysplaner fremfor originalhandlingen.",
          "fr": "Bi Gan décrit préparation coordonnée et plans dépendants de la météo. Testez une marche neutre avec alternatives lumineuses.",
          "pt": "Bi Gan descreve preparação coordenada e planos dependentes do clima. Teste caminhada neutra com alternativas de luz."
        },
        "sourceIds": [
          "s5",
          "s6",
          "s8"
        ]
      },
      {
        "id": "resurrection-music",
        "area": "sound",
        "prompt": {
          "en": "How can an early composer collaboration evolve across narrative chapters?",
          "nb": "Hvordan kan tidlig komponistsamarbeid utvikle seg gjennom fortellingens kapitler?",
          "fr": "Comment une collaboration musicale précoce évolue-t-elle entre chapitres ?",
          "pt": "Como pode colaboração musical inicial evoluir entre capítulos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every chapter's soundscape as unrelated to the others",
              "nb": "Behandle hvert kapittels lydbilde som urelatert til de øvrige",
              "fr": "Traiter chaque paysage sonore comme indépendant des autres",
              "pt": "Tratar cada paisagem sonora como independente das outras"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop original motifs and compare their transformations during editing",
              "nb": "Utvikle egne motiver og sammenlign forvandlingene under klipping",
              "fr": "Développer des motifs originaux et comparer leurs transformations",
              "pt": "Desenvolver motivos originais e comparar transformações"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Require a final score before the screenplay is complete",
              "nb": "Krev ferdig filmmusikk før manuset er ferdig",
              "fr": "Exiger une musique finale avant la fin du scénario",
              "pt": "Exigir música final antes de concluir argumento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Bi Gan discusses early M83 collaboration and chapter-specific soundscape transformation. Create original musical textures and review their relationships across a fictional montage.",
          "nb": "Bi Gan omtaler tidlig M83-samarbeid og kapittelspesifikk lydforvandling. Lag egne musikkteksturer og vurder forbindelsene i en fiktiv montasje.",
          "fr": "Bi Gan évoque collaboration précoce avec M83 et transformations sonores. Créez des textures originales et examinez leurs liens dans un montage fictif.",
          "pt": "Bi Gan aborda colaboração inicial com M83 e transformações sonoras. Crie texturas originais e reveja ligações numa montagem fictícia."
        },
        "sourceIds": [
          "s4",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_secret_agent_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Historical city design, imperfect optics and archival sound",
      "nb": "Historisk bydesign, uperfekt optikk og arkivlyd",
      "fr": "Décor urbain historique, optiques imparfaites et archives sonores",
      "pt": "Design urbano histórico, óticas imperfeitas e arquivo sonoro"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Evgenia Alexandrova AFC shoots The Secret Agent with ARRI's ALEXA 35",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/evgenia-alexandrova-afc-the-secret-agent-with-arri-alexa-35"
      },
      {
        "id": "s3",
        "title": "A Conversation with Kleber Mendonça Filho (THE SECRET AGENT)",
        "publisher": "Hammer to Nail",
        "url": "https://www.hammertonail.com/interviews/mendonca-filho/"
      },
      {
        "id": "s4",
        "title": "Thales Junqueira: O Agente Secreto",
        "publisher": "ABCine",
        "url": "https://abcine.org.br/entrevistas/thales-junqueira-o-agente-secreto/"
      },
      {
        "id": "s5",
        "title": "Editing: The Secret Agent",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Publications/Post-Magazine/2026/January-February-2026/Editing-I-The-Secret-Agent-I-.aspx"
      },
      {
        "id": "s6",
        "title": "Kleber Mendonca Filho breaks down four key scenes from The Secret Agent",
        "publisher": "Screen Daily",
        "url": "https://www.screendaily.com/features/kleber-mendonca-filho-breaks-down-four-key-scenes-from-the-secret-agent-the-film-has-multiple-layers-of-storytelling/5214226.article"
      },
      {
        "id": "s7",
        "title": "Evgenia Alexandrova AFC / The Secret Agent",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/evgenia-alexandrova-afc-the-secret-agent/"
      }
    ],
    "questions": [
      {
        "id": "secretagent-city",
        "area": "research",
        "prompt": {
          "en": "How can existing city locations support a researched period setting?",
          "nb": "Hvordan kan eksisterende bysteder støtte et undersøkt historisk miljø?",
          "fr": "Comment des lieux urbains existants servent-ils un décor d’époque documenté ?",
          "pt": "Como podem locais urbanos existentes apoiar cenário de época pesquisado?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare archival references and document built and adapted elements",
              "nb": "Sammenlign arkivreferanser og dokumenter bygde og tilpassede elementer",
              "fr": "Comparer archives et documenter éléments construits et adaptés",
              "pt": "Comparar arquivos e documentar elementos construídos e adaptados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every existing building as an unchanged period location",
              "nb": "Behandle alle eksisterende bygg som uendrede historiske steder",
              "fr": "Traiter chaque bâtiment comme lieu d’époque intact",
              "pt": "Tratar edifícios existentes como locais de época intactos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore local historical material when designing the setting",
              "nb": "Ignorer lokalt historisk materiale ved utforming av miljøet",
              "fr": "Ignorer les documents historiques locaux lors de la conception",
              "pt": "Ignorar material histórico local ao conceber cenário"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The director and production designer describe archive research, preserved Recife locations and constructed elements. Make a fictional period design map with source records.",
          "nb": "Regissøren og scenografen beskriver arkivresearch, bevarte Recife-steder og bygde elementer. Lag et fiktivt historisk designkart med kildelogger.",
          "fr": "Le réalisateur et le décorateur décrivent archives, lieux préservés et constructions. Créez un plan fictif d’époque avec sources.",
          "pt": "Realizador e designer descrevem arquivos, locais preservados e construções. Crie mapa fictício de época com fontes."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "secretagent-optics",
        "area": "camera",
        "prompt": {
          "en": "How can older lenses shape digital photography without implying film capture?",
          "nb": "Hvordan kan eldre objektiver forme digitalt foto uten å antyde analogt opptak?",
          "fr": "Comment des optiques anciennes façonnent-elles le numérique sans impliquer l’argentique ?",
          "pt": "Como podem óticas antigas moldar digital sem implicar captação em película?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer analog camera acquisition from lens imperfections",
              "nb": "Utled analogt kameraopptak fra objektivets ujevnheter",
              "fr": "Déduire une captation argentique des imperfections optiques",
              "pt": "Deduzir captação em película das imperfeições óticas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every older lens produces identical image characteristics",
              "nb": "Anta at alle eldre objektiver gir identiske bildeegenskaper",
              "fr": "Supposer que toutes les optiques anciennes donnent le même rendu",
              "pt": "Supor que óticas antigas produzem características iguais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare optical tests and record the actual digital capture path",
              "nb": "Sammenlign optiske prøver og registrer den faktiske digitale opptaksflyten",
              "fr": "Comparer essais optiques et documenter la captation numérique réelle",
              "pt": "Comparar testes óticos e registar captação digital real"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ARRI and the director describe digital capture with older anamorphic lenses and an explicit distinction from fake film emulation. Test original optics and preserve acquisition provenance.",
          "nb": "ARRI og regissøren beskriver digitalt opptak med eldre anamorf optikk og et tydelig skille fra kunstig filmemulering. Prøv egen optikk og bevar opptaksopphav.",
          "fr": "ARRI et le réalisateur décrivent numérique et anamorphiques anciennes, distincts de l’émulation film. Testez des optiques et gardez la provenance.",
          "pt": "ARRI e realizador descrevem digital e anamórficas antigas, distintos de emulação. Teste óticas e preserve proveniência."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s7"
        ]
      },
      {
        "id": "secretagent-archive",
        "area": "sound",
        "prompt": {
          "en": "How can archived city recordings inform a fictional historical soundscape?",
          "nb": "Hvordan kan arkiverte byopptak informere et fiktivt historisk lydbilde?",
          "fr": "Comment des archives sonores urbaines nourrissent-elles un paysage historique fictif ?",
          "pt": "Como podem gravações urbanas arquivadas informar paisagem sonora histórica fictícia?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove provenance labels once the mix is finished",
              "nb": "Fjern kildeopphavsmerking når miksen er ferdig",
              "fr": "Retirer les mentions de provenance après mixage",
              "pt": "Remover etiquetas de proveniência após mistura"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Label dates and permissions and distinguish designed sound from archival sources",
              "nb": "Merk datoer og tillatelser og skill designet lyd fra arkivkilder",
              "fr": "Indiquer dates et autorisations et distinguer sons conçus et archives",
              "pt": "Identificar datas e autorizações e distinguir sons concebidos de arquivos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all historical-sounding audio is from the depicted year",
              "nb": "Anta at all historisk klingende lyd er fra året som vises",
              "fr": "Supposer que tout son ancien date de l’année représentée",
              "pt": "Supor que som antigo data do ano representado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mendonça Filho describes using later personal VHS recordings as city-sound references; editors discuss sound perspective. Create a neutral sound study preserving source dates and the distinction from reconstruction.",
          "nb": "Mendonça Filho beskriver senere personlige VHS-opptak som bylydreferanser; klipperne omtaler lydperspektiv. Lag en nøytral lydstudie med bevarte kildedatoer og skille fra rekonstruksjon.",
          "fr": "Mendonça Filho décrit des VHS personnelles ultérieures comme références ; les monteurs le point d’écoute. Créez une étude neutre préservant dates et distinction de la reconstruction.",
          "pt": "Mendonça Filho descreve VHS pessoais posteriores como referências; montadores perspetiva sonora. Crie estudo neutro preservando datas e distinção de reconstrução."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
