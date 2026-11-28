import type { SourceBackedCaseWorkshop } from "./scenarioProductionSourceWorkshops.js";

export const worldCinemaSourceWorkshops = [
  {
    "scenarioId": "scenario_living_in_bondage_1992",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Video economics, distribution and production roles",
      "nb": "Videoøkonomi, distribusjon og produksjonsroller",
      "fr": "Économie vidéo, distribution et rôles de production",
      "pt": "Economia de vídeo, distribuição e funções de produção"
    },
    "sources": [
      {
        "id": "s0",
        "title": "From Living in Bondage to Queen Amina: An Aesthetic Evaluation of Contemporary Nollywood",
        "publisher": "SAGE Open",
        "url": "https://journals.sagepub.com/doi/10.1177/21582440211032620"
      },
      {
        "id": "s1",
        "title": "The New Nollywood: Professionalization or Gentrification of Cultural Industry",
        "publisher": "SAGE Open",
        "url": "https://journals.sagepub.com/doi/full/10.1177/2158244020940994"
      },
      {
        "id": "s2",
        "title": "Living in Bondage: Money and Values",
        "publisher": "Oxford Academic / University of Chicago Press",
        "url": "https://academic.oup.com/chicago-scholarship-online/book/18664/chapter-abstract/176869060"
      },
      {
        "id": "s3",
        "title": "The African Film Industry: Trends, Challenges and Opportunities for Growth",
        "publisher": "UNESCO",
        "url": "https://www.unesco.org/creativity/sites/default/files/medias/fichiers/2023/01/379165eng.pdf"
      },
      {
        "id": "s4",
        "title": "Around the world in melodrama: 9 countries, 45 essential films",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/features/around-world-melodrama-9-countries-45-essential-films"
      }
    ],
    "questions": [
      {
        "id": "bondage-format",
        "area": "camera",
        "prompt": {
          "en": "Why test video capture for a limited-budget feature?",
          "nb": "Hvorfor prøve videoopptak for en lavbudsjettfilm?",
          "fr": "Pourquoi tester la vidéo pour un film à petit budget ?",
          "pt": "Porquê testar vídeo num filme de baixo orçamento?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare equipment and duplication costs against image requirements",
              "nb": "Sammenlign utstyrs- og kopieringskostnader med bildekrav",
              "fr": "Comparer coûts de matériel et duplication aux besoins d’image",
              "pt": "Comparar custos de equipamento e duplicação com requisitos de imagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose celluloid regardless of available financing",
              "nb": "Velg celluloid uansett tilgjengelig finansiering",
              "fr": "Choisir la pellicule sans tenir compte du financement",
              "pt": "Escolher película independentemente do financiamento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume inexpensive video guarantees commercial success",
              "nb": "Anta at billig video garanterer kommersiell suksess",
              "fr": "Supposer que la vidéo bon marché garantit le succès",
              "pt": "Supor que vídeo barato garante sucesso"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "SAGE and UNESCO document video as a lower-cost alternative to celluloid. Compare hypothetical workflows rather than treating format as a guarantee of success.",
          "nb": "SAGE og UNESCO dokumenterer video som rimeligere alternativ til celluloid. Sammenlign tenkte arbeidsflyter uten å gjøre format til suksessgaranti.",
          "fr": "SAGE et UNESCO documentent la vidéo comme alternative économique. Comparez des chaînes fictives sans en déduire un succès garanti.",
          "pt": "SAGE e UNESCO documentam vídeo como alternativa económica. Compare fluxos hipotéticos sem garantir sucesso."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "bondage-distribution",
        "area": "research",
        "prompt": {
          "en": "How can home-video distribution change a production plan?",
          "nb": "Hvordan kan hjemmevideodistribusjon endre en produksjonsplan?",
          "fr": "Comment la vidéo domestique modifie-t-elle un plan de production ?",
          "pt": "Como pode distribuição doméstica alterar plano de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Budget only for a nationwide theatrical release",
              "nb": "Budsjetter bare for landsdekkende kinovisning",
              "fr": "Budgéter uniquement une sortie nationale en salles",
              "pt": "Orçamentar apenas lançamento nacional em cinema"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every distributor is also the director",
              "nb": "Anta at alle distributører også er regissører",
              "fr": "Supposer que chaque distributeur est réalisateur",
              "pt": "Supor que todo distribuidor é realizador"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan duplication, rights and audience access alongside production",
              "nb": "Planlegg kopiering, rettigheter og publikumstilgang sammen med produksjon",
              "fr": "Prévoir duplication, droits et accès du public avec la production",
              "pt": "Planear duplicação, direitos e acesso do público com produção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Haynes and BFI describe the emerging cassette market and marketer financing. Design a hypothetical direct-release budget separating production and distribution.",
          "nb": "Haynes og BFI beskriver kassettmarkedet og finansiering fra markedsaktører. Lag et tenkt direkteutgivelsesbudsjett som skiller produksjon og distribusjon.",
          "fr": "Haynes et le BFI décrivent marché des cassettes et financement. Créez un budget fictif séparant production et distribution.",
          "pt": "Haynes e BFI descrevem mercado de cassetes e financiamento. Crie orçamento fictício separando produção e distribuição."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s4"
        ]
      },
      {
        "id": "bondage-roles",
        "area": "research",
        "prompt": {
          "en": "How should early Nigerian video-film credits be documented?",
          "nb": "Hvordan bør tidlige nigerianske videofilmkrediteringer dokumenteres?",
          "fr": "Comment documenter les crédits des premiers films vidéo nigérians ?",
          "pt": "Como documentar créditos dos primeiros filmes de vídeo nigerianos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat a budget estimate as an audited account",
              "nb": "Behandle et budsjettanslag som revidert regnskap",
              "fr": "Traiter une estimation comme un compte audité",
              "pt": "Tratar estimativa como conta auditada"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish writer-producer, director and financier roles",
              "nb": "Skill manusforfatter-produsent, regissør og finansieringsroller",
              "fr": "Distinguer auteur-producteur, réalisateur et financeur",
              "pt": "Distinguir argumentista-produtor, realizador e financiador"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign all creative credits to the cassette marketer",
              "nb": "Tildel alle kreative krediteringer til kassettmarkedsføreren",
              "fr": "Attribuer tous les crédits créatifs au vendeur de cassettes",
              "pt": "Atribuir créditos criativos ao vendedor de cassetes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The research distinguishes Ogunjiofor, Rapu and Nnebue's contributions. Create a role ledger preserving each source's attribution and estimated costs.",
          "nb": "Forskningen skiller Ogunjiofors, Rapus og Nnebues bidrag. Lag en rollelogg med kildenes kreditering og kostnadsanslag.",
          "fr": "Les recherches distinguent leurs contributions. Créez un registre préservant les attributions et coûts estimés.",
          "pt": "As pesquisas distinguem os contributos. Crie registo preservando atribuições e custos estimados."
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
    "scenarioId": "scenario_birds_of_passage_2018",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Wayuu collaboration, genre transformation and observational framing",
      "nb": "Wayuu-samarbeid, sjangerforvandling og observerende utsnitt",
      "fr": "Collaboration wayuu, transformation des genres et cadre observationnel",
      "pt": "Colaboração wayuu, transformação de géneros e enquadramento observacional"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Sortie en salles : Parajos de verano (Les Oiseaux de passage), réalisé par deux réalisateurs issus de l’Atelier",
        "publisher": "Festival de Cannes — Cinéma de Demain",
        "url": "https://cinemadedemain.festival-cannes.com/2019/sortie-en-salles-parajos-de-verano-les-oiseaux-de-passage-realise-par-deux-realisateurs-issus-de-latelier/"
      },
      {
        "id": "s2",
        "title": "Kodak 35mm paints an emotional picture of Colombia’s nascent drugs trade in 'Pájaros de Verano' ('Birds of Passage')",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/pajaros-de-verano/"
      },
      {
        "id": "s3",
        "title": "Industry Insights: Interview with Birds of Passage director Cristina Gallego",
        "publisher": "Reclaim The Frame",
        "url": "https://www.reclaimtheframe.org/post/industry-insights-interview-with-birds-of-passage-director-cristina-gallego"
      },
      {
        "id": "s4",
        "title": "Birds of Passage",
        "publisher": "New Zealand International Film Festival",
        "url": "https://www.nziff.co.nz/2018/archive/birds-of-passage/"
      }
    ],
    "questions": [
      {
        "id": "birdswayuu-community",
        "area": "research",
        "prompt": {
          "en": "How can cultural collaborators shape a fictional genre film?",
          "nb": "Hvordan kan kulturelle samarbeidspartnere forme en fiktiv sjangerfilm?",
          "fr": "Comment des collaborateurs culturels façonnent-ils un film de genre ?",
          "pt": "Como podem colaboradores culturais moldar filme de género?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Consult qualified community members and credit contributions",
              "nb": "Rådfør deg med kvalifiserte medlemmer av lokalsamfunnet og krediter bidrag",
              "fr": "Consulter des membres qualifiés et créditer leurs apports",
              "pt": "Consultar membros qualificados e creditar contributos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat ritual details as interchangeable exotic decoration",
              "nb": "Behandle ritualdetaljer som utskiftbar eksotisk pynt",
              "fr": "Traiter les rituels comme décoration exotique interchangeable",
              "pt": "Tratar rituais como decoração exótica intercambiável"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Invent community customs without consulting anyone",
              "nb": "Finn på lokalsamfunnets skikker uten å rådføre deg",
              "fr": "Inventer les coutumes sans consultation",
              "pt": "Inventar costumes sem consulta"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Gallego describes collaboration with Wayuu specialists and crew. Design a fictional research plan with consent, attribution and community review.",
          "nb": "Gallego beskriver samarbeid med Wayuu-fagfolk og filmarbeidere. Lag en fiktiv researchplan med samtykke, kreditering og lokal gjennomgang.",
          "fr": "Gallego décrit la collaboration avec spécialistes et équipe wayuu. Préparez une recherche avec consentement, crédits et revue communautaire.",
          "pt": "Gallego descreve colaboração com especialistas e equipa wayuu. Planeie pesquisa com consentimento, créditos e revisão comunitária."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "birdswayuu-genre",
        "area": "research",
        "prompt": {
          "en": "How can a genre convention change when the viewpoint changes?",
          "nb": "Hvordan kan en sjangerkonvensjon endres når perspektivet endres?",
          "fr": "Comment une convention de genre change-t-elle avec le point de vue ?",
          "pt": "Como pode convenção de género mudar com a perspetiva?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply a conventional male-centered plot without reviewing context",
              "nb": "Bruk en konvensjonell mannssentrert handling uten å vurdere kontekst",
              "fr": "Appliquer une intrigue masculine sans revoir le contexte",
              "pt": "Aplicar trama masculina sem rever contexto"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Reduce all genre differences to costume changes",
              "nb": "Reduser alle sjangerforskjeller til kostymeskifter",
              "fr": "Réduire les différences de genre aux costumes",
              "pt": "Reduzir diferenças de género a figurinos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare character agency and social relationships across outlines",
              "nb": "Sammenlign karakterenes handlekraft og sosiale relasjoner mellom disposisjoner",
              "fr": "Comparer l’autonomie des personnages et relations sociales entre plans",
              "pt": "Comparar agência das personagens e relações sociais entre planos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Gallego and Guerra discuss female viewpoint and intersecting genre frames. Compare original story outlines without claiming they represent actual Wayuu life.",
          "nb": "Gallego og Guerra omtaler kvinnelig perspektiv og kryssende sjangerrammer. Sammenlign egne disposisjoner uten å hevde at de representerer virkelig Wayuu-liv.",
          "fr": "Gallego et Guerra évoquent regard féminin et genres croisés. Comparez des récits originaux sans prétendre représenter la vie wayuu.",
          "pt": "Gallego e Guerra abordam olhar feminino e géneros cruzados. Compare narrativas originais sem alegar representar vida wayuu."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "birdswayuu-frame",
        "area": "camera",
        "prompt": {
          "en": "How can restrained camera movement support landscape and performance?",
          "nb": "Hvordan kan tilbakeholden kamerabevegelse støtte landskap og skuespill?",
          "fr": "Comment un mouvement caméra retenu soutient-il paysage et jeu ?",
          "pt": "Como pode movimento contido apoiar paisagem e interpretação?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume widescreen composition removes the need for blocking",
              "nb": "Anta at bredformat fjerner behovet for blokkering",
              "fr": "Supposer que le cadre large dispense de placement",
              "pt": "Supor que quadro largo dispensa marcações"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare static compositions using researched location references",
              "nb": "Sammenlign statiske komposisjoner med undersøkte stedsreferanser",
              "fr": "Comparer des cadres fixes avec références de lieux documentées",
              "pt": "Comparar quadros fixos com referências de locais pesquisadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Move the camera continuously without dramatic purpose",
              "nb": "Beveg kameraet kontinuerlig uten dramatisk formål",
              "fr": "Bouger constamment la caméra sans raison dramatique",
              "pt": "Mover câmara continuamente sem motivo dramático"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak documents Gallego's 35mm and mostly static approach. Test a neutral landscape scene with deliberate placement and separately recorded capture choices.",
          "nb": "Kodak dokumenterer Gallegos 35 mm og stort sett statiske tilnærming. Prøv en nøytral landskapsscene med bevisst plassering og separate opptakslogger.",
          "fr": "Kodak documente le 35 mm et les cadres surtout fixes. Testez une scène neutre avec placements et données de captation.",
          "pt": "Kodak documenta 35 mm e quadros sobretudo fixos. Teste cena neutra com marcações e dados de captação."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_motorcycle_diaries_2004",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Route research, adaptation and responsive location photography",
      "nb": "Ruteresearch, adaptasjon og fleksibelt stedsfoto",
      "fr": "Recherche de parcours, adaptation et photographie réactive",
      "pt": "Pesquisa de percurso, adaptação e fotografia responsiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The Motorcycle Diaries - BFI Southbank Programme Notes",
        "publisher": "British Film Institute",
        "url": "https://bfidatadigipres.github.io/big%20screen%20classics/2022/09/10/motorcycle-diaries/"
      },
      {
        "id": "s1",
        "title": "One For Road: Focus Book Club Takes Along The Motorcycle Diaries",
        "publisher": "Focus Features",
        "url": "https://www.focusfeatures.com/article/focusbookclub-the-motorcycle-diaries_walter-salles"
      },
      {
        "id": "s2",
        "title": "Walter Salles",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2004/aug/26/features"
      },
      {
        "id": "s3",
        "title": "Script to Screen: Motorcycle Diaries",
        "publisher": "Austin PBS",
        "url": "https://www.pbs.org/video/script-to-screen-motorcycle-diaries-pgudi6/"
      },
      {
        "id": "s6",
        "title": "What to Watch: 8 Sundance Films About Hitchhikers",
        "publisher": "Sundance Institute",
        "url": "https://www.sundance.org/blogs/what-to-watch-8-sundance-films-about-hitchhikers/"
      },
      {
        "id": "s9",
        "title": "The Motorcycle Diaries: An Interview with Director Walter Salles",
        "publisher": "Blackfilm",
        "url": "https://www.blackfilm.com/20040917/features/waltersalles.shtml"
      }
    ],
    "questions": [
      {
        "id": "motorcycle-route",
        "area": "research",
        "prompt": {
          "en": "How can route research shape a fictional road film?",
          "nb": "Hvordan kan ruteresearch forme en fiktiv roadmovie?",
          "fr": "Comment la recherche d’un parcours façonne-t-elle un road movie ?",
          "pt": "Como pode pesquisa de percurso moldar filme de estrada?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Document route references and distinguish planned and discovered scenes",
              "nb": "Dokumenter rutereferanser og skill planlagte og oppdagede scener",
              "fr": "Documenter le parcours et distinguer scènes prévues et découvertes",
              "pt": "Documentar percurso e distinguir cenas previstas e descobertas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every road encounter as a verified historical event",
              "nb": "Behandle alle veimøter som verifiserte historiske hendelser",
              "fr": "Traiter chaque rencontre comme événement historique vérifié",
              "pt": "Tratar encontros como acontecimentos históricos verificados"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Fix all locations before conducting any research",
              "nb": "Fastsett alle steder før noen research",
              "fr": "Fixer tous les lieux avant toute recherche",
              "pt": "Fixar locais antes de pesquisa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Salles describes years of research and repeated route journeys. Plan an original safe local route with clearly identified fictional additions.",
          "nb": "Salles beskriver mange års research og gjentatte rutereiser. Planlegg en egen trygg lokal rute med tydelig identifiserte fiktive tillegg.",
          "fr": "Salles décrit des années de recherche et plusieurs voyages. Préparez un parcours local sûr avec ajouts fictifs identifiés.",
          "pt": "Salles descreve anos de pesquisa e viagens repetidas. Planeie percurso local seguro com adições fictícias identificadas."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "motorcycle-adapt",
        "area": "research",
        "prompt": {
          "en": "How can a journal adaptation emphasize character development?",
          "nb": "Hvordan kan en dagbokadaptasjon fremheve karakterutvikling?",
          "fr": "Comment adapter un journal en privilégiant l’évolution des personnages ?",
          "pt": "Como adaptar diário privilegiando evolução das personagens?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute invented dialogue directly to the original journals",
              "nb": "Tilskriv oppdiktet dialog direkte til originaldagbøkene",
              "fr": "Attribuer les dialogues inventés aux journaux originaux",
              "pt": "Atribuir diálogo inventado aos diários originais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat later historical reputation as the character's only motivation",
              "nb": "Behandle senere historisk omdømme som karakterens eneste motivasjon",
              "fr": "Traiter la réputation ultérieure comme seule motivation",
              "pt": "Tratar reputação posterior como única motivação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare source passages and map changing character relationships",
              "nb": "Sammenlign kildepassasjer og kartlegg skiftende karakterrelasjoner",
              "fr": "Comparer les passages sources et cartographier les relations",
              "pt": "Comparar passagens de origem e mapear relações"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rivera and Salles describe adaptation and attention to the travellers before later mythology. Create a fictional transformation outline distinguishing source and invention.",
          "nb": "Rivera og Salles beskriver adaptasjon og de reisende før senere mytedannelse. Lag en fiktiv utviklingsplan som skiller kilde fra diktning.",
          "fr": "Rivera et Salles décrivent adaptation et voyageurs avant la mythologie. Créez un récit distinguant source et invention.",
          "pt": "Rivera e Salles descrevem adaptação e viajantes antes da mitologia. Crie narrativa distinguindo fonte e invenção."
        },
        "sourceIds": [
          "s3",
          "s6",
          "s9"
        ]
      },
      {
        "id": "motorcycle-location",
        "area": "camera",
        "prompt": {
          "en": "How can a compact camera crew respond to unplanned location discoveries?",
          "nb": "Hvordan kan et kompakt kamerateam reagere på uplanlagte stedsoppdagelser?",
          "fr": "Comment une petite équipe réagit-elle aux découvertes imprévues ?",
          "pt": "Como pode pequena equipa responder a descobertas imprevistas?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume natural light always requires no exposure tests",
              "nb": "Anta at naturlig lys aldri krever eksponeringsprøver",
              "fr": "Supposer que la lumière naturelle dispense d’essais",
              "pt": "Supor que luz natural dispensa testes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Allow safe schedule flexibility and obtain consent for new footage",
              "nb": "Tillat trygg fleksibilitet og innhent samtykke til nye opptak",
              "fr": "Prévoir une souplesse sûre et obtenir les consentements",
              "pt": "Prever flexibilidade segura e obter consentimento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Film unsuspecting people without considering their consent",
              "nb": "Film uvitende personer uten å vurdere samtykke",
              "fr": "Filmer des personnes à leur insu sans considérer le consentement",
              "pt": "Filmar pessoas sem considerar consentimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Salles describes compact Super 16 work and improvisation. Test an ordinary permitted outdoor scene with a flexible shot plan.",
          "nb": "Salles beskriver kompakt Super 16-arbeid og improvisasjon. Prøv en ordinær tillatt utendørsscene med fleksibel bildeplan.",
          "fr": "Salles décrit Super 16 et improvisation. Testez une scène extérieure autorisée avec plan souple.",
          "pt": "Salles descreve Super 16 e improvisação. Teste cena exterior autorizada com plano flexível."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_lunchbox_2013",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Delivery-system research, city locations and specific ambient sound",
      "nb": "Research av leveringssystem, bysteder og spesifikk miljølyd",
      "fr": "Recherche du système de livraison, lieux urbains et ambiances spécifiques",
      "pt": "Pesquisa do sistema de entregas, locais urbanos e ambientes específicos"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Ritesh Batra, The Lunchbox",
        "publisher": "Screen Daily",
        "url": "https://www.screendaily.com/features/ritesh-batra-the-lunchbox/5059580.article"
      },
      {
        "id": "s4",
        "title": "Director Ritesh Batra on his Mumbai Set Love Story The Lunchbox",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2014/02/director-ritesh-batra-on-his-mumbai-set-love-story-the-lunchbox/"
      },
      {
        "id": "s5",
        "title": "The Lunchbox has two stories - one everyone sees, another's happening inside",
        "publisher": "India Today",
        "url": "https://www.indiatoday.in/movies/bollywood/story/ritesh-batra-the-lunchbox-director-irrfan-khan-nimrat-kaur-211825-2013-09-20"
      },
      {
        "id": "s6",
        "title": "In conversation: Ritesh Batra, director of The Lunchbox",
        "publisher": "Business of Cinema",
        "url": "https://businessofcinema.com/bollywood_news/conversation-ritesh-batra-director-lunchbox/104436"
      },
      {
        "id": "s7",
        "title": "Q&A: Ritesh Batra, director of The Lunchbox",
        "publisher": "The Eagle",
        "url": "https://www.theeagleonline.com/article/2014/01/qa-ritesh-batra-director-of-the-lunchbox"
      },
      {
        "id": "s9",
        "title": "World tucks into Lunchbox",
        "publisher": "Civil Society Magazine",
        "url": "https://civilsocietystaging.mahiti.org/lifestyle/world-tucks-into-lunchbox/"
      }
    ],
    "questions": [
      {
        "id": "lunchbox-object",
        "area": "research",
        "prompt": {
          "en": "How can an everyday delivery object become a narrative link?",
          "nb": "Hvordan kan en hverdagslig leveringsgjenstand bli en fortellerforbindelse?",
          "fr": "Comment un objet de livraison quotidien devient-il un lien narratif ?",
          "pt": "Como pode objeto quotidiano de entrega tornar-se ligação narrativa?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Study real object use and invent a clearly fictional relationship",
              "nb": "Undersøk ekte gjenstandsbruk og dikt en tydelig fiktiv relasjon",
              "fr": "Étudier l’usage réel et inventer une relation clairement fictive",
              "pt": "Estudar uso real e inventar relação claramente fictícia"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Copy private messages from real delivery workers",
              "nb": "Kopier private meldinger fra virkelige leveringsarbeidere",
              "fr": "Copier les messages privés des livreurs",
              "pt": "Copiar mensagens privadas de entregadores"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the practical delivery system entirely",
              "nb": "Ignorer hele det praktiske leveringssystemet",
              "fr": "Ignorer entièrement le système de livraison",
              "pt": "Ignorar totalmente sistema de entregas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Batra describes research with dabbawalas generating the fictional premise. Design a neutral story around an everyday object with consented research.",
          "nb": "Batra beskriver research med dabbawalaer som utgangspunkt for fiksjon. Lag en nøytral historie rundt en hverdagsgjenstand med samtykkebasert research.",
          "fr": "Batra décrit la recherche auprès des dabbawalas à l’origine du récit. Créez une histoire neutre issue d’une recherche consentie.",
          "pt": "Batra descreve pesquisa com dabbawalas na origem da ficção. Crie história neutra com pesquisa consentida."
        },
        "sourceIds": [
          "s4",
          "s7"
        ]
      },
      {
        "id": "lunchbox-city",
        "area": "camera",
        "prompt": {
          "en": "How can real urban locations shape a planned fictional scene?",
          "nb": "Hvordan kan virkelige bysteder forme en planlagt fiktiv scene?",
          "fr": "Comment les lieux urbains réels façonnent-ils une scène fictive ?",
          "pt": "Como podem locais urbanos reais moldar cena fictícia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all city scenes were shot in a controlled studio",
              "nb": "Anta at alle byscener ble tatt opp i kontrollert studio",
              "fr": "Supposer que toutes les scènes urbaines furent tournées en studio",
              "pt": "Supor que cenas urbanas foram filmadas em estúdio"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore ambient conditions during location preparation",
              "nb": "Ignorer miljøforhold under stedsforberedelse",
              "fr": "Ignorer les conditions ambiantes lors des repérages",
              "pt": "Ignorar condições ambientais na preparação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Scout permitted locations and test framing around existing movement",
              "nb": "Undersøk tillatte steder og prøv utsnitt rundt eksisterende bevegelse",
              "fr": "Repérer des lieux autorisés et tester les cadres selon les mouvements",
              "pt": "Pesquisar locais autorizados e testar quadros conforme movimentos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Batra describes months of preparation and Mumbai location photography. Plan an ordinary authorized street-scene exercise with alternative framing.",
          "nb": "Batra beskriver måneders forberedelse og stedsfoto i Mumbai. Planlegg en ordinær tillatt gatesceneøvelse med alternative utsnitt.",
          "fr": "Batra décrit des mois de préparation et tournage à Mumbai. Préparez une scène de rue autorisée avec cadres alternatifs.",
          "pt": "Batra descreve meses de preparação e rodagem em Mumbai. Planeie cena de rua autorizada com quadros alternativos."
        },
        "sourceIds": [
          "s3",
          "s6"
        ]
      },
      {
        "id": "lunchbox-ambience",
        "area": "sound",
        "prompt": {
          "en": "How can specific local sounds distinguish fictional environments?",
          "nb": "Hvordan kan spesifikke lokale lyder skille fiktive miljøer?",
          "fr": "Comment des sons locaux spécifiques distinguent-ils des lieux fictifs ?",
          "pt": "Como podem sons locais específicos distinguir ambientes fictícios?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every collected recording as final mixed audio",
              "nb": "Behandle alle innsamlede opptak som ferdig mikset lyd",
              "fr": "Traiter chaque enregistrement comme mixage final",
              "pt": "Tratar gravações recolhidas como mistura final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Collect permitted location-specific sounds and compare them in the edit",
              "nb": "Samle tillatte stedsspesifikke lyder og sammenlign dem i klippen",
              "fr": "Collecter des sons locaux autorisés et les comparer au montage",
              "pt": "Recolher sons locais autorizados e compará-los na montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace every city sound with one generic traffic track",
              "nb": "Erstatt alle bylyder med ett generisk trafikkspor",
              "fr": "Remplacer tous les sons urbains par une piste de circulation",
              "pt": "Substituir sons urbanos por faixa genérica de trânsito"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Batra describes Kaczmarek's extensive Mumbai recordings, including office and delivery sounds. Create an original location-sound catalogue and test two environments.",
          "nb": "Batra beskriver Kaczmareks omfattende Mumbai-opptak, blant annet kontor- og leveringslyder. Lag en egen stedslydkatalog og prøv to miljøer.",
          "fr": "Batra décrit les nombreuses prises de Mumbai, notamment bureaux et livraisons. Créez un catalogue sonore original et testez deux lieux.",
          "pt": "Batra descreve gravações de Mumbai, incluindo escritórios e entregas. Crie catálogo sonoro original e teste dois ambientes."
        },
        "sourceIds": [
          "s5",
          "s9"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_capernaum_2018",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ethical casting, child-height framing and restrained editorial",
      "nb": "Etisk casting, barnehøydeutsnitt og tilbakeholden klipping",
      "fr": "Casting éthique, cadre à hauteur d’enfant et montage retenu",
      "pt": "Elenco ético, quadro à altura da criança e montagem contida"
    },
    "sources": [
      {
        "id": "s0",
        "title": "BAFTA Screenwriters Lecture Series: Nadine Labaki",
        "publisher": "BAFTA",
        "url": "https://www.bafta.org/media-centre/press-releases/bafta-screenwriters-lecture-series-nadine-labaki/"
      },
      {
        "id": "s1",
        "title": "ALEXA XT and ALEXA Mini behind award-winning Lebanese film Capernaum",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/alexa-xt-and-alexa-mini-behind-capernaum-"
      },
      {
        "id": "s3",
        "title": "Capernaum",
        "publisher": "Sony Pictures Classics",
        "url": "https://www.sonyclassics.com/film/capernaum/"
      }
    ],
    "questions": [
      {
        "id": "capernaum-casting",
        "area": "research",
        "prompt": {
          "en": "How can research inform casting without exploiting personal hardship?",
          "nb": "Hvordan kan research informere casting uten å utnytte personlige vanskeligheter?",
          "fr": "Comment la recherche informe-t-elle le casting sans exploiter les difficultés personnelles ?",
          "pt": "Como pode pesquisa informar elenco sem explorar dificuldades pessoais?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Use informed consent and supported age-appropriate fictional auditions",
              "nb": "Bruk informert samtykke og tilrettelagte alderstilpassede fiksjonsprøver",
              "fr": "Prévoir consentement et auditions fictives adaptées à l’âge",
              "pt": "Prever consentimento e audições fictícias adaptadas à idade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Require participants to relive actual distress on camera",
              "nb": "Krev at deltakere gjenopplever virkelig uro foran kameraet",
              "fr": "Exiger de revivre une détresse réelle devant la caméra",
              "pt": "Exigir reviver sofrimento real perante câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume lived experience automatically establishes consent",
              "nb": "Anta at levd erfaring automatisk innebærer samtykke",
              "fr": "Supposer que l’expérience vécue vaut consentement",
              "pt": "Supor que experiência vivida implica consentimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Labaki describes research, real-life casting and rewriting. Design a neutral fictional audition with child safeguards and no required personal disclosures.",
          "nb": "Labaki beskriver research, casting fra virkeligheten og omskriving. Lag en nøytral fiktiv prøve med barnetrygghet og uten krav om private avsløringer.",
          "fr": "Labaki décrit recherche, casting réel et réécriture. Créez une audition fictive protégée sans confidences imposées.",
          "pt": "Labaki descreve pesquisa, elenco real e reescrita. Crie audição fictícia protegida sem confidências exigidas."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      },
      {
        "id": "capernaum-height",
        "area": "camera",
        "prompt": {
          "en": "How can camera height support a child's fictional viewpoint?",
          "nb": "Hvordan kan kamerahøyde støtte et barns fiktive perspektiv?",
          "fr": "Comment la hauteur caméra sert-elle le point de vue d’un enfant ?",
          "pt": "Como pode altura de câmara apoiar perspetiva fictícia infantil?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use adult eye-level framing for every viewpoint",
              "nb": "Bruk voksen øyehøyde for alle perspektiver",
              "fr": "Employer la hauteur adulte pour tous les points de vue",
              "pt": "Usar altura adulta para todas as perspetivas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat handheld motion as proof that footage is documentary",
              "nb": "Behandle håndholdt bevegelse som bevis på dokumentaropptak",
              "fr": "Traiter la caméra portée comme preuve documentaire",
              "pt": "Tratar câmara à mão como prova documental"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test child-height framing with safe, flexible lighting",
              "nb": "Prøv utsnitt i barnehøyde med trygg fleksibel belysning",
              "fr": "Tester des cadres à hauteur d’enfant avec lumière sûre et souple",
              "pt": "Testar quadros à altura infantil com luz segura e flexível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Aoun describes child-height handheld framing and adaptive lighting. Compare neutral original compositions without inferring documentary truth from style.",
          "nb": "Aoun beskriver håndholdte utsnitt i barnehøyde og tilpasset lys. Sammenlign egne nøytrale komposisjoner uten å utlede dokumentarisk sannhet fra stil.",
          "fr": "Aoun décrit caméra portée à hauteur d’enfant et lumière adaptée. Comparez des cadres neutres sans déduire une vérité documentaire du style.",
          "pt": "Aoun descreve câmara à altura infantil e luz adaptada. Compare quadros neutros sem deduzir verdade documental do estilo."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "capernaum-edit",
        "area": "sound",
        "prompt": {
          "en": "How can an extensive edit avoid imposing emotion through music?",
          "nb": "Hvordan kan omfattende klipping unngå å påtvinge følelser gjennom musikk?",
          "fr": "Comment un long montage évite-t-il d’imposer l’émotion par la musique ?",
          "pt": "Como pode montagem extensa evitar impor emoção pela música?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard all footage that differs from the initial script",
              "nb": "Forkast alle opptak som avviker fra originalmanuset",
              "fr": "Écarter toute prise différente du scénario initial",
              "pt": "Descartar imagens diferentes do argumento inicial"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare restrained original score and unscored performance versions",
              "nb": "Sammenlign dempet egen musikk med spilleversjoner uten musikk",
              "fr": "Comparer musique originale retenue et versions sans musique",
              "pt": "Comparar música original contida e versões sem música"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Score every difficult moment at maximum intensity",
              "nb": "Musikklegg alle vanskelige øyeblikk med maksimal intensitet",
              "fr": "Musicaliser chaque moment difficile à intensité maximale",
              "pt": "Musicalizar momentos difíceis com intensidade máxima"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production notes describe hundreds of hours of footage and a reduced score. Compare fictional edits that leave interpretive room for performance.",
          "nb": "Produksjonsnotatene beskriver hundrevis av opptakstimer og redusert musikk. Sammenlign fiktive klipp som gir spillet tolkningsrom.",
          "fr": "Les notes décrivent des centaines d’heures et une musique réduite. Comparez des montages fictifs laissant place au jeu.",
          "pt": "As notas descrevem centenas de horas e música reduzida. Compare montagens fictícias deixando espaço à interpretação."
        },
        "sourceIds": [
          "s0",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_where_is_the_friend_s_house_1987",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Rural geography, object-led dramaturgy and restoration provenance",
      "nb": "Landsbygeografi, gjenstandsdrevet dramaturgi og restaureringsopphav",
      "fr": "Géographie rurale, dramaturgie par objet et provenance de restauration",
      "pt": "Geografia rural, dramaturgia por objeto e proveniência de restauro"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Where Is the Friend's House?",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/28638-where-is-the-friends-house"
      },
      {
        "id": "s1",
        "title": "The Koker Trilogy: Journeys of the Heart",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/6555-the-koker-trilogy-journeys-of-the-heart"
      },
      {
        "id": "s3",
        "title": "Where Is the Friend's House?",
        "publisher": "Eye Filmmuseum",
        "url": "https://www.eyefilm.nl/en/whats-on/where-is-the-friends-house/1405393"
      },
      {
        "id": "s4",
        "title": "Where Is the Friend's House?",
        "publisher": "DreamLab Films",
        "url": "https://www.dreamlabfilms.com/where-is-the-friends-house/"
      },
      {
        "id": "s5",
        "title": "Where Is the Friend's House?",
        "publisher": "Film at Lincoln Center",
        "url": "https://www.filmlinc.org/films/where-is-the-friends-house/"
      }
    ],
    "questions": [
      {
        "id": "friendhouse-quest",
        "area": "research",
        "prompt": {
          "en": "How can a simple object motivate a fictional journey?",
          "nb": "Hvordan kan en enkel gjenstand motivere en fiktiv reise?",
          "fr": "Comment un objet simple motive-t-il un trajet fictif ?",
          "pt": "Como pode objeto simples motivar percurso fictício?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map an ordinary goal and the ethical choices along its route",
              "nb": "Kartlegg et hverdagsmål og etiske valg langs ruten",
              "fr": "Cartographier un but ordinaire et les choix éthiques du trajet",
              "pt": "Mapear objetivo comum e escolhas éticas do percurso"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Add unrelated spectacle to every narrative encounter",
              "nb": "Legg urelatert spektakel til hvert fortellermøte",
              "fr": "Ajouter un spectacle sans rapport à chaque rencontre",
              "pt": "Adicionar espetáculo sem relação a cada encontro"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat all fictional incidents as historical facts",
              "nb": "Behandle alle fiktive hendelser som historiske fakta",
              "fr": "Traiter les incidents fictifs comme faits historiques",
              "pt": "Tratar incidentes fictícios como factos históricos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion and Lincoln Center describe the notebook quest and conflict between obedience and conscience. Plan an original everyday journey around a different object.",
          "nb": "Criterion og Lincoln Center beskriver notatbokjakten og konflikten mellom lydighet og samvittighet. Planlegg en egen hverdagsreise rundt en annen gjenstand.",
          "fr": "Criterion et Lincoln Center décrivent quête et conflit moral. Concevez un trajet original autour d’un autre objet.",
          "pt": "Criterion e Lincoln Center descrevem busca e conflito moral. Planeie percurso original com outro objeto."
        },
        "sourceIds": [
          "s0",
          "s5"
        ]
      },
      {
        "id": "friendhouse-place",
        "area": "camera",
        "prompt": {
          "en": "How can rural geography guide a sequence's visual continuity?",
          "nb": "Hvordan kan landsbygeografi styre en sekvens visuelle kontinuitet?",
          "fr": "Comment la géographie rurale guide-t-elle les raccords visuels ?",
          "pt": "Como pode geografia rural orientar continuidade visual?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Ignore spatial relationships between successive shots",
              "nb": "Ignorer romforbindelser mellom påfølgende bilder",
              "fr": "Ignorer les relations spatiales entre plans",
              "pt": "Ignorar relações espaciais entre planos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the countryside is merely interchangeable scenery",
              "nb": "Anta at landsbygda bare er utskiftbar kulisse",
              "fr": "Supposer que la campagne est un décor interchangeable",
              "pt": "Supor que campo é cenário intercambiável"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Sketch landmarks and test recurring viewpoints in a safe location",
              "nb": "Skisser landemerker og prøv tilbakevendende utsnitt på et trygt sted",
              "fr": "Esquisser les repères et tester des vues récurrentes en lieu sûr",
              "pt": "Esboçar marcos e testar vistas recorrentes em local seguro"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sources identify Koker-area locations and countryside as central to the journey. Test a new neutral route and map visual orientation without inventing shot details.",
          "nb": "Kildene identifiserer Koker-området og landskapet som sentralt for reisen. Prøv en ny nøytral rute og kartlegg orientering uten å dikte bildedetaljer.",
          "fr": "Les sources situent le récit près de Koker et soulignent le paysage. Testez un trajet neutre et cartographiez l’orientation.",
          "pt": "As fontes situam narrativa perto de Koker e destacam paisagem. Teste percurso neutro e mapeie orientação."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s5"
        ]
      },
      {
        "id": "friendhouse-restore",
        "area": "research",
        "prompt": {
          "en": "How should restoration data be distinguished from original production credits?",
          "nb": "Hvordan bør restaureringsdata skilles fra opprinnelig produksjonskreditering?",
          "fr": "Comment distinguer données de restauration et crédits originaux ?",
          "pt": "Como distinguir dados de restauro e créditos originais?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat restoration personnel as the original sound crew",
              "nb": "Behandle restaureringspersonell som opprinnelig lydteam",
              "fr": "Traiter les restaurateurs comme équipe son originale",
              "pt": "Tratar restauradores como equipa sonora original"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record restoration resolution, presentation and original credits separately",
              "nb": "Registrer restaureringsoppløsning, visning og originalkreditering separat",
              "fr": "Noter séparément résolution de restauration, diffusion et crédits",
              "pt": "Registar separadamente resolução de restauro, exibição e créditos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer the original camera sensor from a 2K restoration",
              "nb": "Utled original kamerasensor fra en 2K-restaurering",
              "fr": "Déduire le capteur original d’une restauration 2K",
              "pt": "Deduzir sensor original de restauro 2K"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents a 2K restoration and monaural presentation; DreamLab records original craft credits. Create separate provenance fields without guessing acquisition equipment.",
          "nb": "Criterion dokumenterer 2K-restaurering og mono; DreamLab registrerer opprinnelig fagkreditering. Lag separate opphavsfelt uten å gjette opptaksutstyr.",
          "fr": "Criterion documente restauration 2K et mono ; DreamLab les crédits originaux. Créez des champs distincts sans deviner le matériel.",
          "pt": "Criterion documenta restauro 2K e mono; DreamLab créditos originais. Crie campos distintos sem adivinhar equipamento."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_kitchen_stories_2003",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Historical domestic research, controlled space and deadpan timing",
      "nb": "Historisk hjemmearbeidsresearch, kontrollert rom og tørr komisk timing",
      "fr": "Recherche domestique historique, espace contrôlé et rythme impassible",
      "pt": "Pesquisa doméstica histórica, espaço controlado e ritmo impassível"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Fortnight - Kitchen Stories",
        "publisher": "Cineuropa",
        "url": "https://cineuropa.org/en/newsdetail/29924/"
      },
      {
        "id": "s5",
        "title": "Salmer fra kjøkkenet",
        "publisher": "Cinemateket",
        "url": "https://www.cinemateket.no/filmer/salmer-fra-kjokkenet"
      },
      {
        "id": "s6",
        "title": "Household utensils",
        "publisher": "Nationalmuseum",
        "url": "https://collection.nationalmuseum.se/en/collection/item/213171/"
      },
      {
        "id": "s7",
        "title": "Delicately put and yet awfully fun",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/archives/la-xpm-2004-feb-20-et-kenny20-story.html"
      },
      {
        "id": "s8",
        "title": "Long day's journey to the fridge",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2003/may/20/artsfeatures.cannes2003"
      }
    ],
    "questions": [
      {
        "id": "kitchen-history",
        "area": "research",
        "prompt": {
          "en": "How can a real historical institution inspire fictional satire?",
          "nb": "Hvordan kan en virkelig historisk institusjon inspirere fiktiv satire?",
          "fr": "Comment une institution historique inspire-t-elle une satire fictive ?",
          "pt": "Como pode instituição histórica inspirar sátira fictícia?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate archival institutional facts from invented observation rules",
              "nb": "Skill arkiverte institusjonsfakta fra oppdiktede observasjonsregler",
              "fr": "Distinguer faits institutionnels et règles fictives d’observation",
              "pt": "Distinguir factos institucionais e regras fictícias de observação"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every satirical event as a verified research record",
              "nb": "Behandle alle satiriske hendelser som verifisert forskningsmateriale",
              "fr": "Traiter chaque satire comme archive scientifique vérifiée",
              "pt": "Tratar sátira como registo científico verificado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Conduct intrusive observations without household consent",
              "nb": "Utfør påtrengende observasjoner uten husstandens samtykke",
              "fr": "Mener des observations intrusives sans consentement",
              "pt": "Fazer observações intrusivas sem consentimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Nationalmuseum documents the Swedish home research institute; Cinemateket contextualizes the film's satire. Design a harmless fictional observation exercise with consent.",
          "nb": "Nationalmuseum dokumenterer det svenske hjemforskningsinstituttet; Cinemateket kontekstualiserer satiren. Lag en ufarlig fiktiv observasjonsøvelse med samtykke.",
          "fr": "Nationalmuseum documente l’institut ; Cinemateket contextualise la satire. Concevez une observation fictive consentie et sûre.",
          "pt": "Nationalmuseum documenta instituto; Cinemateket contextualiza sátira. Conceba observação fictícia consentida e segura."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      },
      {
        "id": "kitchen-space",
        "area": "camera",
        "prompt": {
          "en": "How can a controlled kitchen layout support visual comedy?",
          "nb": "Hvordan kan en kontrollert kjøkkenplan støtte visuell komedie?",
          "fr": "Comment un plan de cuisine contrôlé sert-il la comédie visuelle ?",
          "pt": "Como pode planta controlada de cozinha apoiar comédia visual?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Move furniture randomly between connected shots",
              "nb": "Flytt møbler tilfeldig mellom sammenhengende bilder",
              "fr": "Déplacer les meubles au hasard entre plans liés",
              "pt": "Mover móveis ao acaso entre planos ligados"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose framing independently of the observer's position",
              "nb": "Velg utsnitt uavhengig av observatørens plassering",
              "fr": "Choisir le cadre sans considérer la position de l’observateur",
              "pt": "Escolher quadro sem considerar posição do observador"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test sightlines, furniture placement and restricted framing",
              "nb": "Prøv siktlinjer, møbelplassering og avgrensede utsnitt",
              "fr": "Tester axes, meubles et cadres restreints",
              "pt": "Testar linhas de visão, móveis e quadros restritos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cineuropa and Cinemateket describe minimalist interiors and controlled kitchen geography. Make an original floor plan and test its comic spatial relationships.",
          "nb": "Cineuropa og Cinemateket beskriver minimalistiske interiører og kontrollert kjøkkengeografi. Lag en egen planløsning og prøv komiske romforhold.",
          "fr": "Cineuropa et Cinemateket décrivent intérieurs minimalistes et géographie contrôlée. Créez un plan original et testez les rapports comiques.",
          "pt": "Cineuropa e Cinemateket descrevem interiores minimalistas e geografia controlada. Crie planta original e teste relações cómicas."
        },
        "sourceIds": [
          "s3",
          "s5",
          "s7"
        ]
      },
      {
        "id": "kitchen-timing",
        "area": "research",
        "prompt": {
          "en": "How can restrained performance create deadpan comic timing?",
          "nb": "Hvordan kan tilbakeholdent skuespill skape tørr komisk timing?",
          "fr": "Comment un jeu retenu crée-t-il un rythme comique impassible ?",
          "pt": "Como pode interpretação contida criar ritmo cómico impassível?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume restrained acting needs no rehearsal or timing",
              "nb": "Anta at tilbakeholdent spill ikke trenger prøver eller timing",
              "fr": "Supposer que le jeu retenu dispense de répétitions",
              "pt": "Supor que interpretação contida dispensa ensaios"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare pauses and small gestures in the same composition",
              "nb": "Sammenlign pauser og små gester i samme komposisjon",
              "fr": "Comparer pauses et petits gestes dans le même cadre",
              "pt": "Comparar pausas e pequenos gestos no mesmo quadro"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Add an emphatic reaction to every quiet beat",
              "nb": "Legg en påtrengende reaksjon til hvert stille øyeblikk",
              "fr": "Ajouter une réaction appuyée à chaque silence",
              "pt": "Adicionar reação enfática a cada silêncio"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Contemporary reviews describe controlled color, veteran performances and restrained absurdity. Compare original takes of a neutral silent exchange as a formal exercise.",
          "nb": "Samtidige anmeldelser beskriver kontrollert farge, erfarent spill og tilbakeholden absurditet. Sammenlign egne tagninger av en nøytral ordløs utveksling som formøvelse.",
          "fr": "Les critiques décrivent couleur contrôlée, jeu expérimenté et absurdité retenue. Comparez des prises originales d’un échange silencieux neutre.",
          "pt": "Críticas descrevem cor controlada, atuação experiente e absurdo contido. Compare tomadas originais de troca silenciosa neutra."
        },
        "sourceIds": [
          "s7",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_brothers_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Longitudinal documentary, family boundaries and format archive",
      "nb": "Langtidsdokumentar, familiegrenser og formatarkiv",
      "fr": "Documentaire longitudinal, limites familiales et archives de formats",
      "pt": "Documentário longitudinal, limites familiares e arquivo de formatos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Brødre",
        "publisher": "Fenris Film",
        "url": "https://fenrisfilm.squarespace.com/brdre"
      },
      {
        "id": "s1",
        "title": "Hot Docs 2016 Women Directors: Meet Aslaug Holm — Brothers",
        "publisher": "Women and Hollywood",
        "url": "https://medium.com/women-and-hollywood/2016-hot-docs-women-directors-meet-aslaug-holm-brothers-3e4b9b595e02"
      },
      {
        "id": "s2",
        "title": "En samtale med regissør Aslaug Holm om kinodokumentaren Brødre",
        "publisher": "Montages",
        "url": "https://montages.no/nyheter/en-samtale-med-regissor-aslaug-holm-om-kinodokumentaren-brodre/"
      },
      {
        "id": "s3",
        "title": "Review: Brothers",
        "publisher": "POV Magazine",
        "url": "https://povmagazine.com/articles/view/review-brothers"
      },
      {
        "id": "s4",
        "title": "Brothers (intl. version)",
        "publisher": "LevelK",
        "url": "https://www.levelk.dk/films/brothers-2702"
      },
      {
        "id": "s5",
        "title": "Two Norwegian documentaries win at Hot Docs in Toronto",
        "publisher": "Cineuropa",
        "url": "https://cineuropa.org/en/newsdetail/308876/"
      }
    ],
    "questions": [
      {
        "id": "brothers-consent",
        "area": "research",
        "prompt": {
          "en": "How should consent be revisited in a long family documentary?",
          "nb": "Hvordan bør samtykke vurderes på nytt i en lang familiedokumentar?",
          "fr": "Comment réexaminer le consentement dans un documentaire familial long ?",
          "pt": "Como revisitar consentimento num documentário familiar longo?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Review boundaries regularly and protect children's private moments",
              "nb": "Gjennomgå grenser regelmessig og vern barns private øyeblikk",
              "fr": "Réexaminer les limites et protéger les moments privés des enfants",
              "pt": "Rever limites regularmente e proteger momentos privados infantis"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume family membership provides permanent filming permission",
              "nb": "Anta at familietilhørighet gir permanent opptakstillatelse",
              "fr": "Supposer que la famille donne une permission permanente",
              "pt": "Supor que pertencer à família dá autorização permanente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Prioritize recording over every caregiving responsibility",
              "nb": "Prioriter opptak fremfor alle omsorgsoppgaver",
              "fr": "Privilégier le tournage sur toute responsabilité de soin",
              "pt": "Priorizar filmagem sobre responsabilidades de cuidado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Holm discusses the tension between motherhood and filmmaking over eight years. Plan a consent-based fictional documentary protocol with ongoing review and privacy safeguards.",
          "nb": "Holm omtaler spenningen mellom morsrolle og filmarbeid over åtte år. Lag en samtykkebasert tenkt dokumentarprotokoll med løpende gjennomgang og personvern.",
          "fr": "Holm évoque la tension entre maternité et tournage sur huit ans. Préparez un protocole consenti avec revue continue et confidentialité.",
          "pt": "Holm aborda tensão entre maternidade e filmagem durante oito anos. Planeie protocolo consentido com revisão contínua e privacidade."
        },
        "sourceIds": [
          "s0",
          "s1",
          "s2"
        ]
      },
      {
        "id": "brothers-archive",
        "area": "camera",
        "prompt": {
          "en": "How can several recording formats be preserved in a long project?",
          "nb": "Hvordan kan flere opptaksformater bevares i et langvarig prosjekt?",
          "fr": "Comment préserver plusieurs formats dans un projet de longue durée ?",
          "pt": "Como preservar vários formatos num projeto longo?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Convert everything and delete all original files",
              "nb": "Konverter alt og slett alle originalfiler",
              "fr": "Convertir tout et effacer les originaux",
              "pt": "Converter tudo e apagar originais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume final DCP format describes every camera original",
              "nb": "Anta at endelig DCP-format beskriver alle kameraoriginaler",
              "fr": "Supposer que le DCP final décrit chaque original caméra",
              "pt": "Supor que DCP final descreve cada original de câmara"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Catalogue originals by date and format before creating proxies",
              "nb": "Katalogiser originaler etter dato og format før proxyer opprettes",
              "fr": "Cataloguer les originaux par date et format avant les proxys",
              "pt": "Catalogar originais por data e formato antes de proxies"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "LevelK documents DV, HD and Super 16; Cineuropa reports extensive footage. Design a hypothetical archive with original media, dates and derivative files separated.",
          "nb": "LevelK dokumenterer DV, HD og Super 16; Cineuropa omtaler omfattende opptak. Lag et tenkt arkiv med originalmedier, datoer og avledede filer adskilt.",
          "fr": "LevelK documente DV, HD et Super 16 ; Cineuropa l’ampleur des prises. Créez une archive fictive séparant originaux, dates et dérivés.",
          "pt": "LevelK documenta DV, HD e Super 16; Cineuropa a extensão das imagens. Crie arquivo fictício separando originais, datas e derivados."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "brothers-montage",
        "area": "research",
        "prompt": {
          "en": "How can a long documentary edit connect ordinary moments across years?",
          "nb": "Hvordan kan lang dokumentarklipping knytte hverdagsøyeblikk sammen over år?",
          "fr": "Comment un long montage relie-t-il des moments ordinaires sur plusieurs années ?",
          "pt": "Como pode montagem longa ligar momentos comuns ao longo de anos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Include private footage regardless of participant boundaries",
              "nb": "Inkluder private opptak uansett deltakernes grenser",
              "fr": "Inclure les images privées sans respecter les limites",
              "pt": "Incluir imagens privadas sem respeitar limites"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare recurring motifs while preserving original chronology records",
              "nb": "Sammenlign tilbakevendende motiver og bevar opprinnelig kronologilogg",
              "fr": "Comparer les motifs récurrents en conservant la chronologie originale",
              "pt": "Comparar motivos recorrentes preservando cronologia original"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Invent dates to make every emotional transition seem chronological",
              "nb": "Finn på datoer for å gjøre alle følelsesoverganger kronologiske",
              "fr": "Inventer des dates pour rendre les transitions chronologiques",
              "pt": "Inventar datas para tornar transições cronológicas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Holm describes a three-year edit; POV discusses associative montage and family history. Compare fictional archival outlines without falsifying chronology.",
          "nb": "Holm beskriver tre års klipping; POV omtaler assosiativ montasje og familiehistorie. Sammenlign fiktive arkivdisposisjoner uten å forfalske kronologi.",
          "fr": "Holm décrit trois ans de montage ; POV le montage associatif. Comparez des structures fictives sans falsifier la chronologie.",
          "pt": "Holm descreve três anos de montagem; POV montagem associativa. Compare estruturas fictícias sem falsificar cronologia."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_drommer_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Trilogy collaboration, first-person voice and intimate framing",
      "nb": "Trilogisamarbeid, førstepersonsstemme og intime utsnitt",
      "fr": "Collaboration de trilogie, voix à la première personne et cadre intime",
      "pt": "Colaboração de trilogia, voz em primeira pessoa e quadro íntimo"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Filmsamtalen med Cecilie Semec og Jens Christian Fodstad",
        "publisher": "Rushprint",
        "url": "https://rushprint.no/2025/04/filmsamtalen-med-cecilie-semec-og-jens-christian-fodstad/"
      },
      {
        "id": "s4",
        "title": "Dreams",
        "publisher": "Karlovy Vary International Film Festival",
        "url": "https://www.kviff.com/en/programme/film/75/45946-dreams"
      },
      {
        "id": "s5",
        "title": "Analysen: Drømmer (2024)",
        "publisher": "Montages",
        "url": "https://montages.no/2024/11/analysen-drommer-2024/"
      }
    ],
    "questions": [
      {
        "id": "drommer-trilogy",
        "area": "research",
        "prompt": {
          "en": "How can a trilogy share collaborators while retaining distinct film languages?",
          "nb": "Hvordan kan en trilogi dele samarbeidspartnere og samtidig bevare ulike filmspråk?",
          "fr": "Comment une trilogie partage-t-elle une équipe tout en gardant des langages distincts ?",
          "pt": "Como pode trilogia partilhar equipa mantendo linguagens distintas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Document shared roles and develop separate visual rules for each film",
              "nb": "Dokumenter felles roller og utvikle egne bilderegler for hver film",
              "fr": "Documenter les rôles communs et développer des règles propres à chaque film",
              "pt": "Documentar funções comuns e desenvolver regras próprias para cada filme"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical visual approaches merely because the crew is shared",
              "nb": "Bruk identiske bildeuttrykk bare fordi teamet er felles",
              "fr": "Employer les mêmes approches visuelles uniquement parce que l’équipe est commune",
              "pt": "Usar abordagens iguais apenas porque equipa é comum"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume one film's credits automatically apply to all others",
              "nb": "Anta at én films kreditering automatisk gjelder alle andre",
              "fr": "Supposer que les crédits d’un film valent pour les autres",
              "pt": "Supor que créditos de um filme valem para outros"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rushprint describes Semec and Fodstad's collaboration across three films and distinct visual approaches. Plan an original three-part project with a shared team and separate style notes.",
          "nb": "Rushprint beskriver Semec og Fodstads samarbeid på tre filmer og ulike bildeuttrykk. Planlegg et eget tredelt prosjekt med felles team og separate stilnotater.",
          "fr": "Rushprint décrit collaboration sur trois films et approches distinctes. Préparez un projet original en trois parties avec notes de style séparées.",
          "pt": "Rushprint descreve colaboração em três filmes e abordagens distintas. Planeie projeto original em três partes com notas de estilo separadas."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "drommer-voice",
        "area": "sound",
        "prompt": {
          "en": "How can first-person narration guide without repeating the images?",
          "nb": "Hvordan kan førstepersonsfortelling veilede uten å gjenta bildene?",
          "fr": "Comment une voix à la première personne guide-t-elle sans répéter les images ?",
          "pt": "Como pode narração em primeira pessoa orientar sem repetir imagens?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Describe every visible action verbatim in the narration",
              "nb": "Beskriv alle synlige handlinger ordrett i fortellerstemmen",
              "fr": "Décrire littéralement chaque action visible",
              "pt": "Descrever literalmente cada ação visível"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the narrator's interpretation as objective evidence",
              "nb": "Behandle fortellerens tolkning som objektivt bevis",
              "fr": "Traiter l’interprétation du narrateur comme preuve objective",
              "pt": "Tratar interpretação do narrador como prova objetiva"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original narration that adds perspective with silent versions",
              "nb": "Sammenlign egen fortellerstemme som tilfører perspektiv med stille versjoner",
              "fr": "Comparer une narration originale ajoutant un point de vue à des versions muettes",
              "pt": "Comparar narração original que acrescenta perspetiva com versões silenciosas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Montages analyzes the first-person voice and guiding editorial form. Test original narration against a neutral scene as formal analysis, not a claim about recording methods.",
          "nb": "Montages analyserer førstepersonsstemmen og den veiledende klippeformen. Prøv egen fortellerstemme mot en nøytral scene som formanalyse, ikke påstand om opptaksmetode.",
          "fr": "Montages analyse voix et forme de montage. Testez une narration originale sur une scène neutre sans prétendre connaître la méthode d’enregistrement.",
          "pt": "Montages analisa voz e montagem. Teste narração original em cena neutra sem alegar conhecer método de gravação."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "drommer-closeup",
        "area": "camera",
        "prompt": {
          "en": "How can close-ups preserve a character's subjective perspective?",
          "nb": "Hvordan kan nærbilder bevare en karakters subjektive perspektiv?",
          "fr": "Comment les gros plans préservent-ils un point de vue subjectif ?",
          "pt": "Como podem grandes planos preservar perspetiva subjetiva?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer exact lens settings from a critical analysis alone",
              "nb": "Utled eksakte objektivinnstillinger bare fra en kritisk analyse",
              "fr": "Déduire les réglages exacts d’une seule critique",
              "pt": "Deduzir parâmetros exatos apenas de análise crítica"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare consented performance tests and motivated reaction framing",
              "nb": "Sammenlign samtykkebaserte spilleprøver og begrunnede reaksjonsutsnitt",
              "fr": "Comparer essais de jeu consentis et cadres de réaction motivés",
              "pt": "Comparar ensaios consentidos e quadros de reação motivados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose extreme close-ups for every scene without review",
              "nb": "Velg ekstreme nærbilder for alle scener uten vurdering",
              "fr": "Choisir des très gros plans partout sans revue",
              "pt": "Escolher grandes planos extremos em tudo sem revisão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rushprint describes collaboration; Montages identifies close-up emphasis. Compare original framing tests without inventing undocumented camera or lens specifications.",
          "nb": "Rushprint beskriver samarbeid; Montages identifiserer vekt på nærbilder. Sammenlign egne utsnitt uten å finne på udokumenterte kamera- eller objektivspesifikasjoner.",
          "fr": "Rushprint décrit collaboration ; Montages les gros plans. Comparez des cadres sans inventer de spécifications caméra ou optiques.",
          "pt": "Rushprint descreve colaboração; Montages grandes planos. Compare quadros sem inventar especificações de câmara ou óticas."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_four_daughters_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Hybrid documentary, participant agency and ethical reconstruction",
      "nb": "Hybriddokumentar, deltakerstyring og etisk rekonstruksjon",
      "fr": "Documentaire hybride, autonomie des participants et reconstruction éthique",
      "pt": "Documentário híbrido, autonomia de participantes e reconstrução ética"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Four Daughters Press Kit",
        "publisher": "Festival de Cannes / Tanit Films / The Party Film Sales",
        "url": "https://cdn.festival-cannes.com/media/uploads/2023/05/159327.pdf"
      },
      {
        "id": "s2",
        "title": "Kaouther Ben Hania employs a unique approach In Competition",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2023/kaouther-ben-hania-employs-a-unique-approach-in-competition/"
      },
      {
        "id": "s3",
        "title": "A Journey That Allowed Us to Harness the Power of Storytelling: Kaouther Ben Hania on Four Daughters",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/123431-interview-four-daughters-kaouther-ben-hania/"
      },
      {
        "id": "s4",
        "title": "Kaouther Ben Hania - Director of Four Daughters",
        "publisher": "Cineuropa",
        "url": "https://cineuropa.org/en/interview/442834/"
      },
      {
        "id": "s5",
        "title": "In Four Daughters, a shattered Tunisian family triumphs over trauma",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment-arts/awards/story/2024-02-13/doc-four-daughters"
      },
      {
        "id": "s6",
        "title": "A very emotional shoot: behind Four Daughters, an unusual, Oscar-tipped film",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2024/jan/10/a-very-emotional-shoot-behind-four-daughters-an-unusual-oscar-tipped-film"
      }
    ],
    "questions": [
      {
        "id": "fourdaughters-reenact",
        "area": "research",
        "prompt": {
          "en": "How can a documentary distinguish reenactment from recorded testimony?",
          "nb": "Hvordan kan en dokumentar skille rekonstruksjon fra innspilt vitnesbyrd?",
          "fr": "Comment un documentaire distingue-t-il reconstitution et témoignage ?",
          "pt": "Como pode documentário distinguir reconstrução de testemunho?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Label fictional reconstructions and preserve participant control over boundaries",
              "nb": "Merk fiktive rekonstruksjoner og bevar deltakerkontroll over grenser",
              "fr": "Identifier les reconstitutions et préserver le contrôle des limites",
              "pt": "Identificar reconstruções e preservar controlo dos limites"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present every performed reconstruction as authentic archive footage",
              "nb": "Presenter alle spilte rekonstruksjoner som ekte arkivopptak",
              "fr": "Présenter toute reconstitution comme archive authentique",
              "pt": "Apresentar reconstruções como arquivos autênticos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Require participants to reenact distressing memories",
              "nb": "Krev at deltakere gjenskaper belastende minner",
              "fr": "Exiger de rejouer des souvenirs douloureux",
              "pt": "Exigir reencenar memórias dolorosas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ben Hania describes actors as mirrors and real participants influencing reconstruction. Plan a neutral fictional memory exercise with clear distinction between testimony and performance.",
          "nb": "Ben Hania beskriver skuespillere som speil og deltakere som påvirker rekonstruksjon. Planlegg en nøytral fiktiv minneøvelse med tydelig skille mellom vitnesbyrd og spill.",
          "fr": "Ben Hania décrit acteurs-miroirs et participants influençant la reconstruction. Préparez un exercice neutre distinguant témoignage et jeu.",
          "pt": "Ben Hania descreve atores como espelhos e participantes na reconstrução. Planeie exercício neutro distinguindo testemunho e interpretação."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s4"
        ]
      },
      {
        "id": "fourdaughters-safety",
        "area": "research",
        "prompt": {
          "en": "How should a documentary set handle a participant's request to stop?",
          "nb": "Hvordan bør et dokumentarsett håndtere en deltakers ønske om å stoppe?",
          "fr": "Comment un plateau documentaire répond-il à une demande d’arrêt ?",
          "pt": "Como deve set documental responder a pedido de parar?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Continue recording because the scene is emotionally valuable",
              "nb": "Fortsett opptak fordi scenen er følelsesmessig verdifull",
              "fr": "Continuer car la scène est émotionnellement précieuse",
              "pt": "Continuar porque cena tem valor emocional"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat initial consent as irrevocable permission",
              "nb": "Behandle innledende samtykke som ugjenkallelig tillatelse",
              "fr": "Traiter le consentement initial comme irrévocable",
              "pt": "Tratar consentimento inicial como irrevogável"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Stop recording and revisit consent before any voluntary restart",
              "nb": "Stopp opptaket og avklar samtykke før eventuell frivillig omstart",
              "fr": "Arrêter et réexaminer le consentement avant toute reprise volontaire",
              "pt": "Parar e rever consentimento antes de reinício voluntário"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production accounts document safe-space discussions and stopping or restarting. Design a consent protocol for a neutral exercise, without reenacting trauma.",
          "nb": "Produksjonskildene dokumenterer trygghetsdiskusjoner og stopp eller omstart. Lag en samtykkeprotokoll for en nøytral øvelse uten å gjenskape traumer.",
          "fr": "Les sources décrivent discussions de sécurité et arrêts ou reprises. Créez un protocole consenti sans rejouer de traumatisme.",
          "pt": "As fontes descrevem discussões de segurança e pausas ou reinícios. Crie protocolo consentido sem reencenar trauma."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s6"
        ]
      },
      {
        "id": "fourdaughters-space",
        "area": "camera",
        "prompt": {
          "en": "How can a shared studio space make reconstruction visible as a process?",
          "nb": "Hvordan kan et felles studiorom synliggjøre rekonstruksjon som prosess?",
          "fr": "Comment un studio partagé rend-il visible le processus de reconstitution ?",
          "pt": "Como pode estúdio partilhado tornar visível processo de reconstrução?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume studio footage is unaltered historical material",
              "nb": "Anta at studioopptak er uendret historisk materiale",
              "fr": "Supposer que les prises studio sont des archives intactes",
              "pt": "Supor que imagens de estúdio são arquivos intactos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare framing that identifies performers and the constructed setting",
              "nb": "Sammenlign utsnitt som identifiserer utøvere og det konstruerte miljøet",
              "fr": "Comparer des cadres identifiant interprètes et décor construit",
              "pt": "Comparar quadros identificando intérpretes e cenário construído"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Hide every sign that the setting was constructed",
              "nb": "Skjul alle tegn på at miljøet ble konstruert",
              "fr": "Cacher tout signe que le décor est construit",
              "pt": "Ocultar sinais de que cenário foi construído"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes and the Los Angeles Times document the Tunis hotel setting and direct-to-camera approach. Test a fictional neutral reconstruction that shows its own production context.",
          "nb": "Cannes og Los Angeles Times dokumenterer hotellmiljøet i Tunis og direkte kameraform. Prøv en nøytral fiktiv rekonstruksjon som viser sin egen produksjonskontekst.",
          "fr": "Cannes et Los Angeles Times documentent hôtel de Tunis et adresse caméra. Testez une reconstitution fictive montrant son contexte de production.",
          "pt": "Cannes e Los Angeles Times documentam hotel em Tunes e olhar direto à câmara. Teste reconstrução fictícia mostrando contexto de produção."
        },
        "sourceIds": [
          "s2",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_taste_of_cherry_1997",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Separate performances, car framing and the video epilogue",
      "nb": "Separate opptak, bilutsnitt og videoepilogen",
      "fr": "Jeu séparé, cadre automobile et épilogue vidéo",
      "pt": "Interpretação separada, quadro no carro e epílogo em vídeo"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Taste of Cherry",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/242-taste-of-cherry"
      },
      {
        "id": "s2",
        "title": "Taste of Cherry",
        "publisher": "Harvard Film Archive",
        "url": "https://harvardfilmarchive.org/calendar/taste-of-cherry-2023-05"
      },
      {
        "id": "s5",
        "title": "Taste of Cherry",
        "publisher": "Turner Classic Movies",
        "url": "https://www.tcm.com/articles/276345/taste-of-cherry"
      },
      {
        "id": "s6",
        "title": "Abbas Kiarostami interview",
        "publisher": "The Iranian",
        "url": "https://www.iranian.com/Arts/Aug98/Kiarostami/"
      },
      {
        "id": "s7",
        "title": "Taste of Cherry",
        "publisher": "Busan International Film Festival",
        "url": "https://www.biff.kr/eng/html/archive/arc_history_view.asp?m_idx=23813&pyear=2016"
      },
      {
        "id": "s9",
        "title": "How the Film Distributor Zeitgeist Made History",
        "publisher": "The New Yorker",
        "url": "https://www.newyorker.com/culture/the-front-row/how-the-film-distributor-zeitgeist-made-history"
      }
    ],
    "questions": [
      {
        "id": "cherry-dialogue",
        "area": "research",
        "prompt": {
          "en": "The apparent conversations were assembled from separately filmed performances. What would you test in a new production exercise?",
          "nb": "De tilsynelatende samtalene ble satt sammen av separat innspilte prestasjoner. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les conversations apparentes ont été assemblées à partir de prises séparées. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "As conversas aparentes foram montadas a partir de interpretações filmadas separadamente. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record matching eyelines and pauses separately",
              "nb": "Ta opp samsvarende blikkretninger og pauser separat",
              "fr": "Filmer séparément des regards et pauses raccordés",
              "pt": "Filmar separadamente olhares e pausas correspondentes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Require both actors in every shot",
              "nb": "Krev begge skuespillerne i hvert opptak",
              "fr": "Exiger les deux acteurs dans chaque plan",
              "pt": "Exigir ambos os atores em cada plano"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the offscreen response",
              "nb": "Ignorer reaksjonen utenfor bildet",
              "fr": "Ignorer la réponse hors champ",
              "pt": "Ignorar a resposta fora de campo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The apparent conversations were assembled from separately filmed performances. In a hypothetical exercise: Record matching eyelines and pauses separately.",
          "nb": "De tilsynelatende samtalene ble satt sammen av separat innspilte prestasjoner. I en tenkt øvelse: Ta opp samsvarende blikkretninger og pauser separat.",
          "fr": "Les conversations apparentes ont été assemblées à partir de prises séparées. Dans un exercice fictif : Filmer séparément des regards et pauses raccordés.",
          "pt": "As conversas aparentes foram montadas a partir de interpretações filmadas separadamente. Num exercício hipotético: Filmar separadamente olhares e pausas correspondentes."
        },
        "sourceIds": [
          "s5",
          "s2"
        ]
      },
      {
        "id": "cherry-car",
        "area": "camera",
        "prompt": {
          "en": "Kiarostami discusses fixed camera positions and accepting window reflections. What would you test in a new production exercise?",
          "nb": "Kiarostami beskriver faste kameraposisjoner og aksept av vindusreflekser. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Kiarostami évoque les positions fixes et les reflets acceptés. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Kiarostami descreve posições fixas e a aceitação de reflexos. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Change angles at random between lines",
              "nb": "Bytt vinkel tilfeldig mellom replikkene",
              "fr": "Changer d’angle au hasard entre répliques",
              "pt": "Mudar o ângulo ao acaso entre falas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test reflections and framing with a stationary car",
              "nb": "Prøv refleksjoner og utsnitt i en stillestående bil",
              "fr": "Tester reflets et cadrage dans une voiture immobile",
              "pt": "Testar reflexos e enquadramento num carro parado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all reflections digitally before testing",
              "nb": "Fjern alle refleksjoner digitalt før prøver",
              "fr": "Supprimer tous les reflets avant les essais",
              "pt": "Eliminar todos os reflexos antes dos testes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kiarostami discusses fixed camera positions and accepting window reflections. In a hypothetical exercise: Test reflections and framing with a stationary car.",
          "nb": "Kiarostami beskriver faste kameraposisjoner og aksept av vindusreflekser. I en tenkt øvelse: Prøv refleksjoner og utsnitt i en stillestående bil.",
          "fr": "Kiarostami évoque les positions fixes et les reflets acceptés. Dans un exercice fictif : Tester reflets et cadrage dans une voiture immobile.",
          "pt": "Kiarostami descreve posições fixas e a aceitação de reflexos. Num exercício hipotético: Testar reflexos e enquadramento num carro parado."
        },
        "sourceIds": [
          "s6",
          "s2"
        ]
      },
      {
        "id": "cherry-epilogue",
        "area": "camera",
        "prompt": {
          "en": "The video epilogue disrupts the feature’s established visual world. What would you test in a new production exercise?",
          "nb": "Videoepilogen bryter med spillefilmens etablerte bildeverden. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "L’épilogue vidéo rompt avec l’univers visuel établi. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O epílogo em vídeo rompe com o universo visual estabelecido. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Match every image to the feature’s texture",
              "nb": "Tilpass alle bilder til spillefilmens tekstur",
              "fr": "Uniformiser toutes les textures sur celles du film",
              "pt": "Uniformizar todas as texturas com as do filme"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the epilogue as an accidental outtake",
              "nb": "Behandle epilogen som et tilfeldig restopptak",
              "fr": "Traiter l’épilogue comme une chute accidentelle",
              "pt": "Tratar o epílogo como uma sobra acidental"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare an ending that exposes the filmmaking apparatus",
              "nb": "Sammenlign en slutt som synliggjør filmapparatet",
              "fr": "Comparer une fin révélant le dispositif de tournage",
              "pt": "Comparar um final que revela o dispositivo de filmagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The video epilogue disrupts the feature’s established visual world. In a hypothetical exercise: Compare an ending that exposes the filmmaking apparatus.",
          "nb": "Videoepilogen bryter med spillefilmens etablerte bildeverden. I en tenkt øvelse: Sammenlign en slutt som synliggjør filmapparatet.",
          "fr": "L’épilogue vidéo rompt avec l’univers visuel établi. Dans un exercice fictif : Comparer une fin révélant le dispositif de tournage.",
          "pt": "O epílogo em vídeo rompe com o universo visual estabelecido. Num exercício hipotético: Comparar um final que revela o dispositivo de filmagem."
        },
        "sourceIds": [
          "s0",
          "s7",
          "s9"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_taxi_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Mobile framing, performed reality and image authorship",
      "nb": "Mobilt utsnitt, iscenesatt virkelighet og bildeopphav",
      "fr": "Cadre mobile, réalité jouée et propriété des images",
      "pt": "Quadro móvel, realidade encenada e autoria das imagens"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Taxi Tehran review",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/reviews/taxi-tehran-review"
      },
      {
        "id": "s1",
        "title": "Film of the Week: Taxi",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/blog/film-of-the-week-taxi/"
      },
      {
        "id": "s4",
        "title": "Taxi: A Banned Filmmaker Works From the Road",
        "publisher": "NPR",
        "url": "https://www.capradio.org/news/npr/story?storyid=444742781"
      },
      {
        "id": "s5",
        "title": "Jafar Panahi's Taxi",
        "publisher": "Kino Lorber",
        "url": "https://kinolorber.com/film/jafarpanahistaxi"
      },
      {
        "id": "s9",
        "title": "Tehran Taxi pressbook",
        "publisher": "New Wave Films",
        "url": "https://www.newwavefilms.co.uk/assets/1112/Taxi_Tehran_pressbook_with_cert.pdf"
      }
    ],
    "questions": [
      {
        "id": "taxipanahi-frame",
        "area": "camera",
        "prompt": {
          "en": "The dashboard camera turns the taxi interior into a limited recording space. What would you test in a new production exercise?",
          "nb": "Dashbordkameraet gjør drosjeinteriøret til et avgrenset opptaksrom. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "La caméra du tableau de bord délimite l’espace de tournage. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "A câmara no painel delimita o espaço de filmagem. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse passenger blocking in a parked vehicle",
              "nb": "Øv passasjerenes plassering i en parkert bil",
              "fr": "Répéter les placements dans un véhicule à l’arrêt",
              "pt": "Ensaiar posições dos passageiros num veículo parado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Plan only aerial establishing shots",
              "nb": "Planlegg bare oversiktsbilder fra luften",
              "fr": "Prévoir uniquement des vues aériennes",
              "pt": "Planear apenas planos aéreos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a fixed frame captures every reaction",
              "nb": "Anta at fast utsnitt fanger alle reaksjoner",
              "fr": "Supposer que le cadre fixe saisit toute réaction",
              "pt": "Supor que o quadro fixo capta todas as reações"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The dashboard camera turns the taxi interior into a limited recording space. In a hypothetical exercise: Rehearse passenger blocking in a parked vehicle.",
          "nb": "Dashbordkameraet gjør drosjeinteriøret til et avgrenset opptaksrom. I en tenkt øvelse: Øv passasjerenes plassering i en parkert bil.",
          "fr": "La caméra du tableau de bord délimite l’espace de tournage. Dans un exercice fictif : Répéter les placements dans un véhicule à l’arrêt.",
          "pt": "A câmara no painel delimita o espaço de filmagem. Num exercício hipotético: Ensaiar posições dos passageiros num veículo parado."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "taxipanahi-performance",
        "area": "research",
        "prompt": {
          "en": "The passenger episodes deliberately blur fiction and observation. What would you test in a new production exercise?",
          "nb": "Passasjerepisodene gjør skillet mellom fiksjon og observasjon uklart. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les épisodes brouillent délibérément fiction et observation. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Os episódios confundem deliberadamente ficção e observação. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all ambiguity through explanatory captions",
              "nb": "Fjern all tvetydighet med forklarende tekster",
              "fr": "Éliminer toute ambiguïté par des cartons explicatifs",
              "pt": "Eliminar toda ambiguidade com legendas explicativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Distinguish observed behaviour from scripted performance in notes",
              "nb": "Skill observert atferd fra manusstyrt spill i notatene",
              "fr": "Distinguer comportement observé et jeu écrit dans les notes",
              "pt": "Distinguir comportamento observado de atuação escrita nas notas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Label all passengers as documentary witnesses",
              "nb": "Merk alle passasjerer som dokumentarvitner",
              "fr": "Présenter tous les passagers comme témoins documentaires",
              "pt": "Identificar todos os passageiros como testemunhas documentais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The passenger episodes deliberately blur fiction and observation. In a hypothetical exercise: Distinguish observed behaviour from scripted performance in notes.",
          "nb": "Passasjerepisodene gjør skillet mellom fiksjon og observasjon uklart. I en tenkt øvelse: Skill observert atferd fra manusstyrt spill i notatene.",
          "fr": "Les épisodes brouillent délibérément fiction et observation. Dans un exercice fictif : Distinguer comportement observé et jeu écrit dans les notes.",
          "pt": "Os episódios confundem deliberadamente ficção e observação. Num exercício hipotético: Distinguir comportamento observado de atuação escrita nas notas."
        },
        "sourceIds": [
          "s1",
          "s5"
        ]
      },
      {
        "id": "taxipanahi-credits",
        "area": "research",
        "prompt": {
          "en": "The film’s unusual credit situation makes authorship and image ownership part of its form. What would you test in a new production exercise?",
          "nb": "Filmens uvanlige kreditering gjør opphav og bildeeierskap til del av formen. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les crédits inhabituels inscrivent l’auteur et la propriété des images dans la forme. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Os créditos invulgares integram autoria e propriedade das imagens na forma. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Publish every participant’s identity automatically",
              "nb": "Publiser automatisk alle deltakeres identitet",
              "fr": "Publier automatiquement l’identité de chacun",
              "pt": "Publicar automaticamente a identidade de todos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat missing credits as proof of missing collaborators",
              "nb": "Tolk manglende kreditering som bevis på fravær av medarbeidere",
              "fr": "Prendre l’absence de crédits pour une absence de collaborateurs",
              "pt": "Tomar a falta de créditos como ausência de colaboradores"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan consent and safe attribution with participants",
              "nb": "Planlegg samtykke og trygg kreditering med deltakerne",
              "fr": "Prévoir consentement et attribution sûre avec les participants",
              "pt": "Planear consentimento e atribuição segura com participantes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The film’s unusual credit situation makes authorship and image ownership part of its form. In a hypothetical exercise: Plan consent and safe attribution with participants.",
          "nb": "Filmens uvanlige kreditering gjør opphav og bildeeierskap til del av formen. I en tenkt øvelse: Planlegg samtykke og trygg kreditering med deltakerne.",
          "fr": "Les crédits inhabituels inscrivent l’auteur et la propriété des images dans la forme. Dans un exercice fictif : Prévoir consentement et attribution sûre avec les participants.",
          "pt": "Os créditos invulgares integram autoria e propriedade das imagens na forma. Num exercício hipotético: Planear consentimento e atribuição segura com participantes."
        },
        "sourceIds": [
          "s0",
          "s9"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_norte_the_end_of_history_2013",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Parallel narrative, durational framing and environmental sound",
      "nb": "Parallellfortelling, varighet og miljølyd",
      "fr": "Récit parallèle, durée et son ambiant",
      "pt": "Narrativa paralela, duração e som ambiente"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Norte, Hangganan ng Kasaysayan",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/norte-hangganan-ng-kasaysayan/"
      },
      {
        "id": "s1",
        "title": "A Conversation with Lav Diaz",
        "publisher": "Harvard Film Archive",
        "url": "https://harvardfilmarchive.org/conversations/107"
      },
      {
        "id": "s3",
        "title": "Norte, the End of History",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/collection/works/316865"
      },
      {
        "id": "s4",
        "title": "Film of the week: Norte, the End of History",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-norte-end-history"
      },
      {
        "id": "s5",
        "title": "Cannes 2013: Norte, the End of History",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/article/cannes-2013-dennis-lim/"
      },
      {
        "id": "s6",
        "title": "Intervista a Lav Diaz",
        "publisher": "Uzak",
        "url": "https://www.uzak.it/rivista/uzak-11/lo-stato-delle-cose/intervista-a-lav-diaz.html"
      }
    ],
    "questions": [
      {
        "id": "norte-adapt",
        "area": "research",
        "prompt": {
          "en": "Diaz redistributes the moral problem of Crime and Punishment across several lives. What would you test in a new production exercise?",
          "nb": "Diaz fordeler det moralske problemet fra Forbrytelse og straff på flere liv. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Diaz redistribue le dilemme de Crime et Châtiment entre plusieurs vies. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Diaz redistribui o dilema de Crime e Castigo por várias vidas. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map the consequences across parallel character arcs",
              "nb": "Kartlegg konsekvensene i parallelle karakterforløp",
              "fr": "Cartographier les conséquences dans des trajectoires parallèles",
              "pt": "Mapear consequências em percursos paralelos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Follow the novel scene for scene",
              "nb": "Følg romanen scene for scene",
              "fr": "Suivre le roman scène par scène",
              "pt": "Seguir o romance cena a cena"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Resolve every subplot through the protagonist",
              "nb": "Løs alle sidehistorier gjennom hovedpersonen",
              "fr": "Résoudre chaque intrigue par le protagoniste",
              "pt": "Resolver todas as subtramas pelo protagonista"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Diaz redistributes the moral problem of Crime and Punishment across several lives. In a hypothetical exercise: Map the consequences across parallel character arcs.",
          "nb": "Diaz fordeler det moralske problemet fra Forbrytelse og straff på flere liv. I en tenkt øvelse: Kartlegg konsekvensene i parallelle karakterforløp.",
          "fr": "Diaz redistribue le dilemme de Crime et Châtiment entre plusieurs vies. Dans un exercice fictif : Cartographier les conséquences dans des trajectoires parallèles.",
          "pt": "Diaz redistribui o dilema de Crime e Castigo por várias vidas. Num exercício hipotético: Mapear consequências em percursos paralelos."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "norte-duration",
        "area": "camera",
        "prompt": {
          "en": "Static and near-static long takes make ordinary time central to the film. What would you test in a new production exercise?",
          "nb": "Statiske og nesten statiske langtakes gjør hverdagstid sentral. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les longs plans fixes ou quasi fixes donnent une place centrale au temps ordinaire. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Planos longos fixos ou quase fixos tornam central o tempo quotidiano. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Extend the shot without rehearsing action",
              "nb": "Forleng opptaket uten å øve handlingen",
              "fr": "Allonger le plan sans répéter l’action",
              "pt": "Alongar o plano sem ensaiar a ação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test a complete routine in a sustained wide shot",
              "nb": "Prøv en hel rutine i et vedvarende totalbilde",
              "fr": "Tester une routine entière dans un plan large prolongé",
              "pt": "Testar uma rotina inteira num plano geral prolongado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Cut at each small movement automatically",
              "nb": "Klipp automatisk ved hver liten bevegelse",
              "fr": "Couper automatiquement à chaque mouvement",
              "pt": "Cortar automaticamente a cada movimento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Static and near-static long takes make ordinary time central to the film. In a hypothetical exercise: Test a complete routine in a sustained wide shot.",
          "nb": "Statiske og nesten statiske langtakes gjør hverdagstid sentral. I en tenkt øvelse: Prøv en hel rutine i et vedvarende totalbilde.",
          "fr": "Les longs plans fixes ou quasi fixes donnent une place centrale au temps ordinaire. Dans un exercice fictif : Tester une routine entière dans un plan large prolongé.",
          "pt": "Planos longos fixos ou quase fixos tornam central o tempo quotidiano. Num exercício hipotético: Testar uma rotina inteira num plano geral prolongado."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      },
      {
        "id": "norte-environment",
        "area": "sound",
        "prompt": {
          "en": "Diaz describes minimal manipulation and restrained added sound. What would you test in a new production exercise?",
          "nb": "Diaz beskriver minimal bearbeiding og tilbakeholden bruk av tillagt lyd. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Diaz décrit une manipulation minimale et des ajouts sonores mesurés. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Diaz descreve manipulação mínima e som acrescentado contido. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace every environment with stock effects",
              "nb": "Erstatt alle lydmiljøer med standardeffekter",
              "fr": "Remplacer chaque ambiance par des effets de banque",
              "pt": "Substituir todos os ambientes por efeitos de arquivo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Fill all pauses with dramatic music",
              "nb": "Fyll alle pauser med dramatisk musikk",
              "fr": "Remplir toutes les pauses de musique dramatique",
              "pt": "Preencher todas as pausas com música dramática"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record location ambience and compare a restrained mix",
              "nb": "Ta opp stedslyd og sammenlign en tilbakeholden miks",
              "fr": "Enregistrer l’ambiance du lieu et comparer un mix sobre",
              "pt": "Gravar ambiente local e comparar uma mistura contida"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Diaz describes minimal manipulation and restrained added sound. In a hypothetical exercise: Record location ambience and compare a restrained mix.",
          "nb": "Diaz beskriver minimal bearbeiding og tilbakeholden bruk av tillagt lyd. I en tenkt øvelse: Ta opp stedslyd og sammenlign en tilbakeholden miks.",
          "fr": "Diaz décrit une manipulation minimale et des ajouts sonores mesurés. Dans un exercice fictif : Enregistrer l’ambiance du lieu et comparer un mix sobre.",
          "pt": "Diaz descreve manipulação mínima e som acrescentado contido. Num exercício hipotético: Gravar ambiente local e comparar uma mistura contida."
        },
        "sourceIds": [
          "s6",
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_rrr_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Previsualization, continuity and hybrid effects production",
      "nb": "Previsualisering, kontinuitet og hybride filmeffekter",
      "fr": "Prévisualisation, continuité et effets hybrides",
      "pt": "Pré-visualização, continuidade e efeitos híbridos"
    },
    "sources": [
      {
        "id": "s2",
        "title": "ARRI ALEXA LF, Signature Primes, and SkyPanels on RRR",
        "publisher": "ARRI",
        "url": "https://www.arri.com/en/learn-help/learn-help-camera-system/camera-workflows/rrr"
      },
      {
        "id": "s3",
        "title": "RRR cinematography: K. K. Senthil Kumar",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/rrr-k-k-senthil-kumar"
      },
      {
        "id": "s4",
        "title": "RRR: Director S.S. Rajamouli and DP K.K. Senthil Kumar",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/rrr-director-s-s-rajamouli-and-dp-k-k-senthil-kumar/"
      },
      {
        "id": "s5",
        "title": "Sabu Cyril on designing RRR",
        "publisher": "Cinema Express",
        "url": "https://www.cinemaexpress.com/telugu/interviews/2022/mar/31/sabu-cyril-on-designing-rrr-30615.html"
      },
      {
        "id": "s7",
        "title": "RRR Visual Effects",
        "publisher": "Digital Domain",
        "url": "https://digitaldomain.com/work/rrr/"
      },
      {
        "id": "s8",
        "title": "S.S. Rajamouli on the bridge sequence in RRR",
        "publisher": "RogerEbert.com",
        "url": "https://www.rogerebert.com/interviews/ss-rajamouli-rrr-interview"
      }
    ],
    "questions": [
      {
        "id": "rrr-previs",
        "area": "research",
        "prompt": {
          "en": "The cinematographer describes storyboards and previs as shared planning tools. What would you test in a new production exercise?",
          "nb": "Filmfotografen beskriver storyboard og previs som felles planleggingsverktøy. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Le directeur photo décrit storyboard et prévisualisation comme outils communs de préparation. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O diretor de fotografia descreve storyboard e pré-visualização como ferramentas comuns. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Review a previs animatic with departments before a fictional shoot",
              "nb": "Gjennomgå en previs-animatikk med fagavdelingene før et fiktivt opptak",
              "fr": "Revoir une animatique avec les départements avant un tournage fictif",
              "pt": "Rever uma animática com os departamentos antes de uma filmagem fictícia"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign all shot planning to final post-production",
              "nb": "Overlat all opptaksplanlegging til etterarbeidet",
              "fr": "Reporter toute préparation des plans à la postproduction",
              "pt": "Adiar todo o planeamento para a pós-produção"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat previs as a final approved image",
              "nb": "Behandle previs som et endelig godkjent bilde",
              "fr": "Traiter la prévisualisation comme image finale validée",
              "pt": "Tratar a pré-visualização como imagem final aprovada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematographer describes storyboards and previs as shared planning tools. In a hypothetical exercise: Review a previs animatic with departments before a fictional shoot.",
          "nb": "Filmfotografen beskriver storyboard og previs som felles planleggingsverktøy. I en tenkt øvelse: Gjennomgå en previs-animatikk med fagavdelingene før et fiktivt opptak.",
          "fr": "Le directeur photo décrit storyboard et prévisualisation comme outils communs de préparation. Dans un exercice fictif : Revoir une animatique avec les départements avant un tournage fictif.",
          "pt": "O diretor de fotografia descreve storyboard e pré-visualização como ferramentas comuns. Num exercício hipotético: Rever uma animática com os departamentos antes de uma filmagem fictícia."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "rrr-continuity",
        "area": "camera",
        "prompt": {
          "en": "Extended production required detailed camera reports to match returning material. What would you test in a new production exercise?",
          "nb": "Langvarig produksjon krevde detaljerte kamerarapporter for å matche senere opptak. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "La production prolongée exigeait des rapports caméra détaillés pour les raccords. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "A produção prolongada exigiu relatórios de câmara detalhados para continuidade. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Change exposure arbitrarily on return",
              "nb": "Endre eksponeringen vilkårlig ved gjenopptak",
              "fr": "Changer arbitrairement l’exposition à la reprise",
              "pt": "Alterar arbitrariamente a exposição no regresso"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Log lighting, lens and framing for each setup",
              "nb": "Loggfør lys, objektiv og utsnitt for hvert oppsett",
              "fr": "Consigner lumière, objectif et cadre de chaque installation",
              "pt": "Registar luz, objetiva e quadro de cada montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Rely solely on the operator’s memory",
              "nb": "Stol utelukkende på fotografens hukommelse",
              "fr": "Compter uniquement sur la mémoire de l’opérateur",
              "pt": "Confiar apenas na memória do operador"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Extended production required detailed camera reports to match returning material. In a hypothetical exercise: Log lighting, lens and framing for each setup.",
          "nb": "Langvarig produksjon krevde detaljerte kamerarapporter for å matche senere opptak. I en tenkt øvelse: Loggfør lys, objektiv og utsnitt for hvert oppsett.",
          "fr": "La production prolongée exigeait des rapports caméra détaillés pour les raccords. Dans un exercice fictif : Consigner lumière, objectif et cadre de chaque installation.",
          "pt": "A produção prolongada exigiu relatórios de câmara detalhados para continuidade. Num exercício hipotético: Registar luz, objetiva e quadro de cada montagem."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      },
      {
        "id": "rrr-hybrid",
        "area": "camera",
        "prompt": {
          "en": "The bridge sequence combined full-size builds, miniature elements and visual effects. What would you test in a new production exercise?",
          "nb": "Brosekvensen kombinerte fullskala kulisser, miniatyrer og visuelle effekter. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "La séquence du pont combinait décors grandeur nature, miniatures et effets visuels. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "A sequência da ponte combinou cenários à escala real, miniaturas e efeitos visuais. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose one technique regardless of shot needs",
              "nb": "Velg én teknikk uansett bildebehov",
              "fr": "Choisir une seule technique quels que soient les plans",
              "pt": "Escolher uma técnica independentemente dos planos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Leave all matching until the final composite",
              "nb": "Utsett all samsvarskontroll til sluttkompositering",
              "fr": "Reporter tous les raccords au composite final",
              "pt": "Adiar toda a correspondência para a composição final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Match scale and lighting across harmless tabletop elements and digital plates",
              "nb": "Match skala og lys i ufarlige bordmodeller og digitale bildeelementer",
              "fr": "Accorder échelle et lumière entre maquettes inoffensives et plaques numériques",
              "pt": "Harmonizar escala e luz entre maquetes inofensivas e imagens digitais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The bridge sequence combined full-size builds, miniature elements and visual effects. In a hypothetical exercise: Match scale and lighting across harmless tabletop elements and digital plates.",
          "nb": "Brosekvensen kombinerte fullskala kulisser, miniatyrer og visuelle effekter. I en tenkt øvelse: Match skala og lys i ufarlige bordmodeller og digitale bildeelementer.",
          "fr": "La séquence du pont combinait décors grandeur nature, miniatures et effets visuels. Dans un exercice fictif : Accorder échelle et lumière entre maquettes inoffensives et plaques numériques.",
          "pt": "A sequência da ponte combinou cenários à escala real, miniaturas e efeitos visuais. Num exercício hipotético: Harmonizar escala e luz entre maquetes inofensivas e imagens digitais."
        },
        "sourceIds": [
          "s5",
          "s7",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_boy_from_heaven_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Location substitution, lens discipline and co-production",
      "nb": "Stedserstatning, objektivdisiplin og samproduksjon",
      "fr": "Substitution de lieux, discipline optique et coproduction",
      "pt": "Substituição de locais, disciplina ótica e coprodução"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Boy from Heaven",
        "publisher": "Atmo",
        "url": "https://www.atmo.se/films/boy-from-heaven"
      },
      {
        "id": "s2",
        "title": "Boy from Heaven producer Kristina Åberg on working with Tarik Saleh",
        "publisher": "Nordisk Film & TV Fond",
        "url": "https://nordiskfilmogtvfond.com/news/stories/boy-from-heaven-producer-kristina-aberg-on-working-with-tarik-saleh"
      },
      {
        "id": "s3",
        "title": "Four co-productions competing for Palme d’Or in Cannes",
        "publisher": "Film i Väst",
        "url": "https://filmivast.com/news-press/news/four-co-productions-competing-for-palme-dor-in-cannes"
      },
      {
        "id": "s4",
        "title": "ARRI technology behind the scenes of Cannes 2022",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-technology-in-cannes-2022"
      },
      {
        "id": "s5",
        "title": "Cannes Cinematography: Here Are the Cameras and Lenses Used to Shoot 49 Films",
        "publisher": "IndieWire",
        "url": "https://www.indiewire.com/features/general/cannes-2022-cinematography-cameras-lenses-1234725082/"
      },
      {
        "id": "s6",
        "title": "Walad min al-Janna",
        "publisher": "Danish Film Institute",
        "url": "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/116834"
      }
    ],
    "questions": [
      {
        "id": "boyheaven-location",
        "area": "research",
        "prompt": {
          "en": "Istanbul locations substituted for the story’s Egyptian setting. What would you test in a new production exercise?",
          "nb": "Steder i Istanbul erstattet historiens egyptiske miljø. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Des lieux d’Istanbul ont remplacé le cadre égyptien du récit. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Locais de Istambul substituíram o ambiente egípcio da história. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare architecture and cultural details with advisers",
              "nb": "Sammenlign arkitektur og kulturelle detaljer med rådgivere",
              "fr": "Comparer architecture et détails culturels avec des conseillers",
              "pt": "Comparar arquitetura e detalhes culturais com consultores"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all religious buildings are interchangeable",
              "nb": "Anta at alle religiøse bygg er utskiftbare",
              "fr": "Supposer que tous les édifices religieux sont interchangeables",
              "pt": "Supor que todos os edifícios religiosos são intercambiáveis"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Hide geographical differences without research",
              "nb": "Skjul geografiske forskjeller uten research",
              "fr": "Masquer les différences géographiques sans recherche",
              "pt": "Ocultar diferenças geográficas sem pesquisa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Istanbul locations substituted for the story’s Egyptian setting. In a hypothetical exercise: Compare architecture and cultural details with advisers.",
          "nb": "Steder i Istanbul erstattet historiens egyptiske miljø. I en tenkt øvelse: Sammenlign arkitektur og kulturelle detaljer med rådgivere.",
          "fr": "Des lieux d’Istanbul ont remplacé le cadre égyptien du récit. Dans un exercice fictif : Comparer architecture et détails culturels avec des conseillers.",
          "pt": "Locais de Istambul substituíram o ambiente egípcio da história. Num exercício hipotético: Comparar arquitetura e detalhes culturais com consultores."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "boyheaven-lens",
        "area": "camera",
        "prompt": {
          "en": "Pierre Aïm describes a single scope lens used for documentary-like proximity. What would you test in a new production exercise?",
          "nb": "Pierre Aïm beskriver ett scopeobjektiv for dokumentarisk nærhet. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Pierre Aïm décrit un seul objectif scope pour une proximité documentaire. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Pierre Aïm descreve uma única objetiva scope para proximidade documental. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Select a lens only by its price",
              "nb": "Velg objektiv bare etter pris",
              "fr": "Choisir un objectif uniquement selon son prix",
              "pt": "Escolher uma objetiva apenas pelo preço"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test actor distance and blocking with one focal length",
              "nb": "Prøv skuespilleravstand og plassering med én brennvidde",
              "fr": "Tester distance et déplacements avec une seule focale",
              "pt": "Testar distância e movimentos com uma só distância focal"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Change focal length for every emotional beat",
              "nb": "Bytt brennvidde ved hvert følelsesmessige skifte",
              "fr": "Changer de focale à chaque variation émotionnelle",
              "pt": "Mudar a distância focal a cada mudança emocional"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Pierre Aïm describes a single scope lens used for documentary-like proximity. In a hypothetical exercise: Test actor distance and blocking with one focal length.",
          "nb": "Pierre Aïm beskriver ett scopeobjektiv for dokumentarisk nærhet. I en tenkt øvelse: Prøv skuespilleravstand og plassering med én brennvidde.",
          "fr": "Pierre Aïm décrit un seul objectif scope pour une proximité documentaire. Dans un exercice fictif : Tester distance et déplacements avec une seule focale.",
          "pt": "Pierre Aïm descreve uma única objetiva scope para proximidade documental. Num exercício hipotético: Testar distância e movimentos com uma só distância focal."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "boyheaven-coproduction",
        "area": "research",
        "prompt": {
          "en": "The production records identify a four-country co-production and multiple shooting territories. What would you test in a new production exercise?",
          "nb": "Produksjonskildene identifiserer en samproduksjon mellom fire land og flere opptaksområder. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les dossiers identifient une coproduction de quatre pays et plusieurs territoires de tournage. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Os registos identificam uma coprodução de quatro países e vários territórios de filmagem. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer equal financing from four countries",
              "nb": "Utled lik finansiering fra fire land",
              "fr": "Déduire un financement égal des quatre pays",
              "pt": "Deduzir financiamento igual dos quatro países"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat shooting country as sole producer",
              "nb": "Behandle opptakslandet som eneste produsent",
              "fr": "Traiter le pays de tournage comme seul producteur",
              "pt": "Tratar o país de filmagem como único produtor"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate partner credits, location plans and unknown financing shares",
              "nb": "Skill partnerkreditering, stedsplaner og ukjente finansieringsandeler",
              "fr": "Séparer crédits des partenaires, lieux et parts financières inconnues",
              "pt": "Separar créditos dos parceiros, locais e participações financeiras desconhecidas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production records identify a four-country co-production and multiple shooting territories. In a hypothetical exercise: Separate partner credits, location plans and unknown financing shares.",
          "nb": "Produksjonskildene identifiserer en samproduksjon mellom fire land og flere opptaksområder. I en tenkt øvelse: Skill partnerkreditering, stedsplaner og ukjente finansieringsandeler.",
          "fr": "Les dossiers identifient une coproduction de quatre pays et plusieurs territoires de tournage. Dans un exercice fictif : Séparer crédits des partenaires, lieux et parts financières inconnues.",
          "pt": "Os registos identificam uma coprodução de quatro países e vários territórios de filmagem. Num exercício hipotético: Separar créditos dos parceiros, locais e participações financeiras desconhecidas."
        },
        "sourceIds": [
          "s1",
          "s3",
          "s6"
        ]
      }
    ]
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
