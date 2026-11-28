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
  },
  {
    "scenarioId": "scenario_bombon_el_perro_2004",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Regional casting, flexible writing and animal performance",
      "nb": "Regional casting, fleksibelt manus og dyremedvirkning",
      "fr": "Casting régional, écriture souple et jeu animal",
      "pt": "Casting regional, escrita flexível e atuação animal"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Bombón, el perro / Bombón, the dog",
        "publisher": "San Sebastián International Film Festival",
        "url": "https://www.sansebastianfestival.com/2004/sections_and_films/official_section/7/520631/in"
      },
      {
        "id": "s3",
        "title": "Carlos Sorín regresa al árido paisaje de la Patagonia con 'Bombón'",
        "publisher": "El País",
        "url": "https://elpais.com/diario/2004/06/04/cine/1086300010_850215.html"
      },
      {
        "id": "s4",
        "title": "Entrevista con Carlos Sorin",
        "publisher": "Cinencuentro",
        "url": "https://www.cinencuentro.com/entrevista-carlos-sorin/"
      },
      {
        "id": "s7",
        "title": "Bombon El Perro",
        "publisher": "Screen International",
        "url": "https://www.screendaily.com/bombon-el-perro/4020293.article"
      },
      {
        "id": "s8",
        "title": "Bombón: El Perro: A quiet and understated masterpiece",
        "publisher": "SBS",
        "url": "https://www.sbs.com.au/whats-on/article/bombon-el-perro-a-quiet-and-understated-masterpiece/c0k8q4gja"
      },
      {
        "id": "s9",
        "title": "Bombon El Perro",
        "publisher": "LondonNet",
        "url": "https://www.londonnet.co.uk/cinema/cinema-interviews/bombon-el-perro/"
      }
    ],
    "questions": [
      {
        "id": "bombon-casting",
        "area": "research",
        "prompt": {
          "en": "Sorín sought nonprofessional performers close to their characters. What would you test in a new production exercise?",
          "nb": "Sorín søkte ikke-profesjonelle utøvere nær karakterene. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Sorín recherchait des non-professionnels proches des personnages. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Sorín procurou intérpretes não profissionais próximos das personagens. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Use voluntary workshops to discover natural behaviour",
              "nb": "Bruk frivillige verksteder for å finne naturlig atferd",
              "fr": "Organiser des ateliers volontaires pour découvrir les gestes naturels",
              "pt": "Usar oficinas voluntárias para descobrir comportamentos naturais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose only performers with famous screen credits",
              "nb": "Velg bare utøvere med kjente filmroller",
              "fr": "Choisir uniquement des acteurs célèbres",
              "pt": "Escolher apenas intérpretes com créditos famosos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sorín sought nonprofessional performers close to their characters. In a hypothetical exercise: Use voluntary workshops to discover natural behaviour.",
          "nb": "Sorín søkte ikke-profesjonelle utøvere nær karakterene. I en tenkt øvelse: Bruk frivillige verksteder for å finne naturlig atferd.",
          "fr": "Sorín recherchait des non-professionnels proches des personnages. Dans un exercice fictif : Organiser des ateliers volontaires pour découvrir les gestes naturels.",
          "pt": "Sorín procurou intérpretes não profissionais próximos das personagens. Num exercício hipotético: Usar oficinas voluntárias para descobrir comportamentos naturais."
        },
        "sourceIds": [
          "s0",
          "s3",
          "s4"
        ]
      },
      {
        "id": "bombon-script",
        "area": "research",
        "prompt": {
          "en": "Sorín describes adapting the screenplay to discoveries during filming. What would you test in a new production exercise?",
          "nb": "Sorín beskriver et manus tilpasset oppdagelser under opptak. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Sorín décrit un scénario adapté aux découvertes du tournage. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Sorín descreve um argumento adaptado às descobertas da filmagem. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review discoveries in rough cuts while preserving dramatic milestones",
              "nb": "Vurder funn i grovklipp mens dramatiske holdepunkter bevares",
              "fr": "Examiner les découvertes au prémontage en préservant les jalons dramatiques",
              "pt": "Rever descobertas na montagem inicial preservando marcos dramáticos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reject all unscripted material automatically",
              "nb": "Avvis automatisk alt materiale utenfor manus",
              "fr": "Rejeter automatiquement tout matériau non écrit",
              "pt": "Rejeitar automaticamente todo material não previsto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sorín describes adapting the screenplay to discoveries during filming. In a hypothetical exercise: Review discoveries in rough cuts while preserving dramatic milestones.",
          "nb": "Sorín beskriver et manus tilpasset oppdagelser under opptak. I en tenkt øvelse: Vurder funn i grovklipp mens dramatiske holdepunkter bevares.",
          "fr": "Sorín décrit un scénario adapté aux découvertes du tournage. Dans un exercice fictif : Examiner les découvertes au prémontage en préservant les jalons dramatiques.",
          "pt": "Sorín descreve um argumento adaptado às descobertas da filmagem. Num exercício hipotético: Rever descobertas na montagem inicial preservando marcos dramáticos."
        },
        "sourceIds": [
          "s4",
          "s7"
        ]
      },
      {
        "id": "bombon-animal",
        "area": "camera",
        "prompt": {
          "en": "The dog’s reserved behaviour contributes to the dramatic tone. What would you test in a new production exercise?",
          "nb": "Hundens tilbakeholdne atferd bidrar til den dramatiske tonen. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Le comportement réservé du chien contribue au ton dramatique. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O comportamento reservado do cão contribui para o tom dramático. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Demand a fixed emotional expression from the animal",
              "nb": "Krev et fast følelsesuttrykk fra dyret",
              "fr": "Exiger une expression émotionnelle fixe de l’animal",
              "pt": "Exigir expressão emocional fixa do animal"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan patient observation with a handler and welfare breaks",
              "nb": "Planlegg tålmodig observasjon med dyrepasser og velferdspauser",
              "fr": "Prévoir observation patiente, soigneur et pauses de bien-être",
              "pt": "Planear observação paciente com tratador e pausas de bem-estar"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The dog’s reserved behaviour contributes to the dramatic tone. In a hypothetical exercise: Plan patient observation with a handler and welfare breaks.",
          "nb": "Hundens tilbakeholdne atferd bidrar til den dramatiske tonen. I en tenkt øvelse: Planlegg tålmodig observasjon med dyrepasser og velferdspauser.",
          "fr": "Le comportement réservé du chien contribue au ton dramatique. Dans un exercice fictif : Prévoir observation patiente, soigneur et pauses de bien-être.",
          "pt": "O comportamento reservado do cão contribui para o tom dramático. Num exercício hipotético: Planear observação paciente com tratador e pausas de bem-estar."
        },
        "sourceIds": [
          "s9",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_last_life_in_the_universe_2003",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Multilingual dialogue, visual contrast and elliptical structure",
      "nb": "Flerspråklig dialog, visuell kontrast og elliptisk struktur",
      "fr": "Dialogue multilingue, contraste visuel et structure elliptique",
      "pt": "Diálogo multilingue, contraste visual e estrutura elíptica"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Last Life in the Universe",
        "publisher": "International Film Festival Rotterdam",
        "url": "https://iffr.com/en/iffr/2004/films/last-life-in-the-universe"
      },
      {
        "id": "s1",
        "title": "Last Life in the Universe",
        "publisher": "Irish Film Institute",
        "url": "https://ifi.ie/film/last-life-in-the-universe/"
      },
      {
        "id": "s3",
        "title": "Stop Making Sense: Pen-ek Ratanaruang's Last Life in the Universe",
        "publisher": "MUBI Notebook",
        "url": "https://mubi.com/nl/notebook/posts/stop-making-sense-pen-ek-ratanaruang-s-last-life-in-the-universe"
      },
      {
        "id": "s4",
        "title": "Review: Last Life in the Universe",
        "publisher": "Slant Magazine",
        "url": "https://www.slantmagazine.com/film/last-life-in-the-universe/"
      },
      {
        "id": "s5",
        "title": "Last Life in the Universe เรื่องรัก น้อยนิด มหาศาล (2003)",
        "publisher": "Asian Film Archive",
        "url": "https://asianfilmarchive.org/event-calendar/last-life-in-the-universe-2003/"
      },
      {
        "id": "s6",
        "title": "The Last Life in the Universe",
        "publisher": "Thessaloniki Film Festival",
        "url": "https://filmfestival.gr/en/tiff/films/the-last-life-in-the-universe/"
      }
    ],
    "questions": [
      {
        "id": "lastlife-language",
        "area": "sound",
        "prompt": {
          "en": "The relationship unfolds through Thai, Japanese and English. What would you test in a new production exercise?",
          "nb": "Relasjonen utvikles gjennom thai, japansk og engelsk. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "La relation se développe en thaï, japonais et anglais. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "A relação desenvolve-se em tailandês, japonês e inglês. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test intelligibility and misunderstandings with language advisers",
              "nb": "Prøv forståelighet og misforståelser med språkrådgivere",
              "fr": "Tester intelligibilité et malentendus avec des conseillers linguistiques",
              "pt": "Testar inteligibilidade e mal-entendidos com consultores linguísticos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Translate every line into one spoken language",
              "nb": "Oversett alle replikker til ett talespråk",
              "fr": "Traduire toutes les répliques dans une seule langue parlée",
              "pt": "Traduzir todas as falas para uma língua falada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The relationship unfolds through Thai, Japanese and English. In a hypothetical exercise: Test intelligibility and misunderstandings with language advisers.",
          "nb": "Relasjonen utvikles gjennom thai, japansk og engelsk. I en tenkt øvelse: Prøv forståelighet og misforståelser med språkrådgivere.",
          "fr": "La relation se développe en thaï, japonais et anglais. Dans un exercice fictif : Tester intelligibilité et malentendus avec des conseillers linguistiques.",
          "pt": "A relação desenvolve-se em tailandês, japonês e inglês. Num exercício hipotético: Testar inteligibilidade e mal-entendidos com consultores linguísticos."
        },
        "sourceIds": [
          "s0",
          "s5"
        ]
      },
      {
        "id": "lastlife-space",
        "area": "camera",
        "prompt": {
          "en": "The contrast between order and disorder shapes the shared space. What would you test in a new production exercise?",
          "nb": "Kontrasten mellom orden og uorden former det felles rommet. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Le contraste entre ordre et désordre façonne l’espace commun. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O contraste entre ordem e desordem molda o espaço partilhado. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test contrasting prop arrangements in identical frames",
              "nb": "Prøv kontrasterende rekvisittplassering i identiske utsnitt",
              "fr": "Tester des accessoires disposés différemment dans des cadres identiques",
              "pt": "Testar arranjos contrastantes de adereços em quadros idênticos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Give both characters identical rooms",
              "nb": "Gi begge karakterene identiske rom",
              "fr": "Donner aux deux personnages des pièces identiques",
              "pt": "Dar a ambas as personagens espaços idênticos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The contrast between order and disorder shapes the shared space. In a hypothetical exercise: Test contrasting prop arrangements in identical frames.",
          "nb": "Kontrasten mellom orden og uorden former det felles rommet. I en tenkt øvelse: Prøv kontrasterende rekvisittplassering i identiske utsnitt.",
          "fr": "Le contraste entre ordre et désordre façonne l’espace commun. Dans un exercice fictif : Tester des accessoires disposés différemment dans des cadres identiques.",
          "pt": "O contraste entre ordem e desordem molda o espaço partilhado. Num exercício hipotético: Testar arranjos contrastantes de adereços em quadros idênticos."
        },
        "sourceIds": [
          "s1",
          "s6"
        ]
      },
      {
        "id": "lastlife-time",
        "area": "research",
        "prompt": {
          "en": "Temporal transitions resist conventional explanatory closure. What would you test in a new production exercise?",
          "nb": "Tidsovergangene motstår konvensjonell forklarende avslutning. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les transitions temporelles résistent à une clôture explicative classique. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "As transições temporais resistem a um fecho explicativo convencional. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Add a date caption to every shot",
              "nb": "Legg en datotekst på hvert bilde",
              "fr": "Ajouter une date à chaque plan",
              "pt": "Adicionar uma data a cada plano"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare two scene orders and track viewer inference",
              "nb": "Sammenlign to scenerekkefølger og kartlegg seerens slutninger",
              "fr": "Comparer deux ordres de scènes et les inférences du public",
              "pt": "Comparar duas ordens de cenas e inferências do público"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Temporal transitions resist conventional explanatory closure. In a hypothetical exercise: Compare two scene orders and track viewer inference.",
          "nb": "Tidsovergangene motstår konvensjonell forklarende avslutning. I en tenkt øvelse: Sammenlign to scenerekkefølger og kartlegg seerens slutninger.",
          "fr": "Les transitions temporelles résistent à une clôture explicative classique. Dans un exercice fictif : Comparer deux ordres de scènes et les inférences du public.",
          "pt": "As transições temporais resistem a um fecho explicativo convencional. Num exercício hipotético: Comparar duas ordens de cenas e inferências do público."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_unknown_pleasures_2002",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Digital texture, compact production and exhibition transfer",
      "nb": "Digital tekstur, konsentrert produksjon og visningsoverføring",
      "fr": "Texture numérique, production légère et transfert de projection",
      "pt": "Textura digital, produção compacta e transferência de exibição"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Attack of the zeros and ones: the early years of digital cinema",
        "publisher": "BFI Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/features/attack-zeros-ones-early-years-digital-cinema-told-david-lynch-miranda-july-michael-mann-more"
      },
      {
        "id": "s2",
        "title": "An Interview with Jia Zhangke",
        "publisher": "Senses of Cinema",
        "url": "https://www.sensesofcinema.com/2004/feature-articles/jia_zhangke/"
      },
      {
        "id": "s3",
        "title": "Interview: Jia Zhang-ke on Ash Is Purest White and the Evolution of China",
        "publisher": "Slant Magazine",
        "url": "https://www.slantmagazine.com/film/interview-jia-zhang-ke-on-ash-is-purest-white-censorship-and-the-evolution-of-china/"
      },
      {
        "id": "s4",
        "title": "Jia Zhangke's Hometown Trilogy: Xiao Wu, Platform, Unknown Pleasures",
        "publisher": "University of California open monograph edition",
        "url": "https://escholarship.org/content/qt02x9977w/qt02x9977w.pdf"
      },
      {
        "id": "s5",
        "title": "Unknown Pleasures",
        "publisher": "Eye Filmmuseum",
        "url": "https://www.eyefilm.nl/en/whats-on/unknown-pleasures/91853"
      }
    ],
    "questions": [
      {
        "id": "unknownpleasures-texture",
        "area": "camera",
        "prompt": {
          "en": "Jia describes DV as an aesthetic choice rather than merely a cheap substitute. What would you test in a new production exercise?",
          "nb": "Jia beskriver DV som et estetisk valg, ikke bare en billig erstatning. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Jia décrit la DV comme choix esthétique et pas seulement économique. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Jia descreve DV como escolha estética, não apenas económica. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare digital texture in different natural light conditions",
              "nb": "Sammenlign digital tekstur under ulike naturlige lysforhold",
              "fr": "Comparer la texture numérique sous différentes lumières naturelles",
              "pt": "Comparar textura digital sob diferentes condições de luz natural"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply film grain before assessing the images",
              "nb": "Legg på filmkorn før bildene vurderes",
              "fr": "Appliquer du grain avant d’évaluer les images",
              "pt": "Aplicar grão antes de avaliar as imagens"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jia describes DV as an aesthetic choice rather than merely a cheap substitute. In a hypothetical exercise: Compare digital texture in different natural light conditions.",
          "nb": "Jia beskriver DV som et estetisk valg, ikke bare en billig erstatning. I en tenkt øvelse: Sammenlign digital tekstur under ulike naturlige lysforhold.",
          "fr": "Jia décrit la DV comme choix esthétique et pas seulement économique. Dans un exercice fictif : Comparer la texture numérique sous différentes lumières naturelles.",
          "pt": "Jia descreve DV como escolha estética, não apenas económica. Num exercício hipotético: Comparar textura digital sob diferentes condições de luz natural."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "unknownpleasures-schedule",
        "area": "research",
        "prompt": {
          "en": "Jia reports a nineteen-day shoot and values digital proximity to performers. What would you test in a new production exercise?",
          "nb": "Jia beskriver nitten opptaksdager og verdsetter digital nærhet til utøverne. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Jia évoque dix-neuf jours de tournage et la proximité numérique des interprètes. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Jia refere dezanove dias de rodagem e valoriza a proximidade digital aos intérpretes. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan compact rehearsals and locations with contingency time",
              "nb": "Planlegg konsentrerte prøver og stedsopptak med reservetid",
              "fr": "Prévoir répétitions et lieux dans un calendrier compact avec marge",
              "pt": "Planear ensaios e locais num calendário compacto com margem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Replicate nineteen days regardless of script size",
              "nb": "Kopier nitten dager uansett manusomfang",
              "fr": "Copier dix-neuf jours quelle que soit la taille du scénario",
              "pt": "Copiar dezanove dias independentemente do argumento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jia reports a nineteen-day shoot and values digital proximity to performers. In a hypothetical exercise: Plan compact rehearsals and locations with contingency time.",
          "nb": "Jia beskriver nitten opptaksdager og verdsetter digital nærhet til utøverne. I en tenkt øvelse: Planlegg konsentrerte prøver og stedsopptak med reservetid.",
          "fr": "Jia évoque dix-neuf jours de tournage et la proximité numérique des interprètes. Dans un exercice fictif : Prévoir répétitions et lieux dans un calendrier compact avec marge.",
          "pt": "Jia refere dezanove dias de rodagem e valoriza a proximidade digital aos intérpretes. Num exercício hipotético: Planear ensaios e locais num calendário compacto com margem."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "unknownpleasures-transfer",
        "area": "camera",
        "prompt": {
          "en": "The dossier distinguishes digital capture, colour adjustment and later film presentation. What would you test in a new production exercise?",
          "nb": "Dokumentasjonen skiller digitalt opptak, fargejustering og senere filmvisning. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Le dossier distingue capture numérique, réglage couleur et projection sur pellicule. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O dossiê distingue captação digital, ajuste de cor e projeção em película. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer the original camera from a 35 mm print",
              "nb": "Utled originalkameraet fra en 35 mm-kopi",
              "fr": "Déduire la caméra originale d’une copie 35 mm",
              "pt": "Deduzir a câmara original de uma cópia de 35 mm"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track acquisition, intermediate and exhibition formats separately",
              "nb": "Registrer opptaks-, mellom- og visningsformater separat",
              "fr": "Consigner séparément formats de capture, intermédiaires et de projection",
              "pt": "Registar separadamente formatos de captação, intermédios e de exibição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The dossier distinguishes digital capture, colour adjustment and later film presentation. In a hypothetical exercise: Track acquisition, intermediate and exhibition formats separately.",
          "nb": "Dokumentasjonen skiller digitalt opptak, fargejustering og senere filmvisning. I en tenkt øvelse: Registrer opptaks-, mellom- og visningsformater separat.",
          "fr": "Le dossier distingue capture numérique, réglage couleur et projection sur pellicule. Dans un exercice fictif : Consigner séparément formats de capture, intermédiaires et de projection.",
          "pt": "O dossiê distingue captação digital, ajuste de cor e projeção em película. Num exercício hipotético: Registar separadamente formatos de captação, intermédios e de exibição."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_shiri_1999",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Budget provenance, revision and department coordination",
      "nb": "Budsjettkilder, manusrevisjon og fagkoordinering",
      "fr": "Provenance budgétaire, réécriture et coordination des équipes",
      "pt": "Proveniência orçamental, revisão e coordenação de equipas"
    },
    "sources": [
      {
        "id": "s0",
        "title": "SHIRI (1999)",
        "publisher": "Korean Film Council / KoBiz",
        "url": "https://www.koreanfilm.or.kr/eng/films/index/filmsView.jsp?category=ALL&mode=INDEX_FILMS_LIST&movieCd=19990084&pageIndex=1&pageRowSize=10&s_genre=ALL&searchKeyword=SHIRI&searchType=ALL&strMenuId=010401"
      },
      {
        "id": "s1",
        "title": "Investment & Distribution Structure in Korean Film Industry",
        "publisher": "Korean Film Council / KoBiz",
        "url": "https://www.koreanfilm.or.kr/eng/news/ko_pick.jsp?blbdComCd=601029&mode=VIEW&pageIndex=1&pageRowSize=10&seq=98"
      },
      {
        "id": "s2",
        "title": "A Look Back at Shiri – Korea's International Breakthrough 26 Years On",
        "publisher": "Korean Film Council / KoBiz",
        "url": "https://www.koreanfilm.or.kr/eng/news/ko_pick.jsp?blbdComCd=601029&mode=VIEW&pageIndex=1&pageRowSize=10&seq=144"
      },
      {
        "id": "s3",
        "title": "KANG Jekyu",
        "publisher": "Korean Film Council / KoBiz",
        "url": "https://www.koreanfilm.or.kr/eng/films/index/peopleView.jsp?peopleCd=10000854"
      },
      {
        "id": "s4",
        "title": "A Korean Detente",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/archives/la-xpm-2002-feb-08-et-matsumoto8-story.html"
      },
      {
        "id": "s5",
        "title": "Samsung Research Institute analyzes five reasons for Shiri's success",
        "publisher": "Yonhap News Agency",
        "url": "https://www.yna.co.kr/view/AKR19990309003000002"
      },
      {
        "id": "s6",
        "title": "The people who made Shiri",
        "publisher": "Seoul Shinmun",
        "url": "https://www.seoul.co.kr/news/seoulPrintNew.php?id=19990306013003"
      },
      {
        "id": "s8",
        "title": "Shiri (SHIRI)",
        "publisher": "Korean Cinematheque film database",
        "url": "https://www.cinematheque.co.kr/cinema/19990084"
      },
      {
        "id": "s10",
        "title": "The 36th Daejong Film Awards ceremony",
        "publisher": "The Korea Economic Daily",
        "url": "https://www.hankyung.com/article/1999040900101"
      }
    ],
    "questions": [
      {
        "id": "shiri-budget",
        "area": "research",
        "prompt": {
          "en": "Reported production costs differ across industry sources. What would you test in a new production exercise?",
          "nb": "Rapporterte produksjonskostnader varierer mellom bransjekilder. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les coûts rapportés diffèrent selon les sources professionnelles. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Os custos relatados divergem entre fontes profissionais. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record each estimate with currency, scope and source",
              "nb": "Registrer hvert anslag med valuta, omfang og kilde",
              "fr": "Consigner chaque estimation avec devise, périmètre et source",
              "pt": "Registar cada estimativa com moeda, âmbito e fonte"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Average estimates into an audited total",
              "nb": "Beregn gjennomsnittet som revidert totalbeløp",
              "fr": "Moyenner les estimations en un total audité",
              "pt": "Calcular a média como total auditado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Reported production costs differ across industry sources. In a hypothetical exercise: Record each estimate with currency, scope and source.",
          "nb": "Rapporterte produksjonskostnader varierer mellom bransjekilder. I en tenkt øvelse: Registrer hvert anslag med valuta, omfang og kilde.",
          "fr": "Les coûts rapportés diffèrent selon les sources professionnelles. Dans un exercice fictif : Consigner chaque estimation avec devise, périmètre et source.",
          "pt": "Os custos relatados divergem entre fontes profissionais. Num exercício hipotético: Registar cada estimativa com moeda, âmbito e fonte."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "shiri-revision",
        "area": "research",
        "prompt": {
          "en": "A contemporary report describes extended screenplay revision and preparation. What would you test in a new production exercise?",
          "nb": "En samtidig reportasje beskriver langvarig manusrevisjon og forberedelse. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Un article contemporain décrit une longue réécriture et préparation. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Uma reportagem contemporânea descreve revisão prolongada e preparação. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare dated draft changes against production requirements",
              "nb": "Sammenlign daterte manusendringer med produksjonskrav",
              "fr": "Comparer les versions datées aux exigences de production",
              "pt": "Comparar versões datadas com requisitos de produção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Lock the first outline before department input",
              "nb": "Lås første disposisjon før fagavdelingenes innspill",
              "fr": "Verrouiller le premier plan avant avis des équipes",
              "pt": "Fixar o primeiro esboço antes do contributo das equipas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "A contemporary report describes extended screenplay revision and preparation. In a hypothetical exercise: Compare dated draft changes against production requirements.",
          "nb": "En samtidig reportasje beskriver langvarig manusrevisjon og forberedelse. I en tenkt øvelse: Sammenlign daterte manusendringer med produksjonskrav.",
          "fr": "Un article contemporain décrit une longue réécriture et préparation. Dans un exercice fictif : Comparer les versions datées aux exigences de production.",
          "pt": "Uma reportagem contemporânea descreve revisão prolongada e preparação. Num exercício hipotético: Comparar versões datadas com requisitos de produção."
        },
        "sourceIds": [
          "s5",
          "s0"
        ]
      },
      {
        "id": "shiri-credits",
        "area": "research",
        "prompt": {
          "en": "The sources distinguish practical effects, digital imagery, editing and action departments. What would you test in a new production exercise?",
          "nb": "Kildene skiller praktiske effekter, digitale bilder, klipp og actionavdeling. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les sources distinguent effets pratiques, images numériques, montage et action. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "As fontes distinguem efeitos práticos, imagens digitais, montagem e ação. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign every effect credit to the director",
              "nb": "Tildel alle effektkrediteringer til regissøren",
              "fr": "Attribuer tous les effets au réalisateur",
              "pt": "Atribuir todos os créditos de efeitos ao realizador"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Assign responsibilities and review handoffs in a safe mock production",
              "nb": "Fordel ansvar og gjennomgå overleveringer i en trygg modellproduksjon",
              "fr": "Répartir responsabilités et transmissions dans une production simulée sûre",
              "pt": "Distribuir responsabilidades e passagens numa produção simulada segura"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sources distinguish practical effects, digital imagery, editing and action departments. In a hypothetical exercise: Assign responsibilities and review handoffs in a safe mock production.",
          "nb": "Kildene skiller praktiske effekter, digitale bilder, klipp og actionavdeling. I en tenkt øvelse: Fordel ansvar og gjennomgå overleveringer i en trygg modellproduksjon.",
          "fr": "Les sources distinguent effets pratiques, images numériques, montage et action. Dans un exercice fictif : Répartir responsabilités et transmissions dans une production simulée sûre.",
          "pt": "As fontes distinguem efeitos práticos, imagens digitais, montagem e ação. Num exercício hipotético: Distribuir responsabilidades e passagens numa produção simulada segura."
        },
        "sourceIds": [
          "s6",
          "s8",
          "s10"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_a_hero_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Character backstories, rehearsal and large-format framing",
      "nb": "Karakterbakgrunn, prøver og storformatutsnitt",
      "fr": "Passé des personnages, répétitions et cadre grand format",
      "pt": "Histórias das personagens, ensaios e enquadramento de grande formato"
    },
    "sources": [
      {
        "id": "s0",
        "title": "GHAHREMAN (A HERO)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/ghahreman/"
      },
      {
        "id": "s1",
        "title": "A Hero — Cannes press kit",
        "publisher": "Memento Production / Asghar Farhadi Production",
        "url": "https://medias.unifrance.org/medias/68/178/242244/presse/a-hero-presskit-english.pdf"
      },
      {
        "id": "s2",
        "title": "ARRI equipment behind the prized films at Cannes",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-equipment-behind-the-prized-films-at-cannes-"
      },
      {
        "id": "s3",
        "title": "Director Asghar Farhadi discusses A Hero",
        "publisher": "Directors Guild of America",
        "url": "https://www.dga.org/events/2022/january2022/gcs_ahero_1120"
      }
    ],
    "questions": [
      {
        "id": "ahero-backstory",
        "area": "research",
        "prompt": {
          "en": "Farhadi describes constructing unseen character histories during preparation. What would you test in a new production exercise?",
          "nb": "Farhadi beskriver utvikling av usynlige karakterhistorier under forberedelsene. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Farhadi décrit la construction de passés invisibles pendant la préparation. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Farhadi descreve a construção de passados invisíveis durante a preparação. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Build character timelines and test conflicting motivations",
              "nb": "Bygg karaktertidslinjer og prøv motstridende motivasjoner",
              "fr": "Construire des chronologies et tester des motivations contradictoires",
              "pt": "Construir cronologias e testar motivações contraditórias"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Put every backstory into spoken exposition",
              "nb": "Legg all bakgrunnshistorie inn i forklarende dialog",
              "fr": "Mettre tout le passé dans des dialogues explicatifs",
              "pt": "Colocar todo o passado em exposição falada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Farhadi describes constructing unseen character histories during preparation. In a hypothetical exercise: Build character timelines and test conflicting motivations.",
          "nb": "Farhadi beskriver utvikling av usynlige karakterhistorier under forberedelsene. I en tenkt øvelse: Bygg karaktertidslinjer og prøv motstridende motivasjoner.",
          "fr": "Farhadi décrit la construction de passés invisibles pendant la préparation. Dans un exercice fictif : Construire des chronologies et tester des motivations contradictoires.",
          "pt": "Farhadi descreve a construção de passados invisíveis durante a preparação. Num exercício hipotético: Construir cronologias e testar motivações contraditórias."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      },
      {
        "id": "ahero-rehearsal",
        "area": "research",
        "prompt": {
          "en": "Farhadi describes extended rehearsal and actor-specific preparation. What would you test in a new production exercise?",
          "nb": "Farhadi beskriver langvarige prøver og individuelt tilpasset skuespillerarbeid. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Farhadi décrit des répétitions prolongées et une préparation adaptée aux acteurs. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Farhadi descreve ensaios prolongados e preparação adaptada aos atores. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Design separate rehearsal tasks before a joint scene",
              "nb": "Lag individuelle prøveoppgaver før en felles scene",
              "fr": "Préparer des exercices distincts avant une scène commune",
              "pt": "Criar exercícios distintos antes de uma cena conjunta"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use only a single table read for everyone",
              "nb": "Bruk bare én felles leseprøve",
              "fr": "Utiliser uniquement une lecture collective",
              "pt": "Usar apenas uma leitura coletiva"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Farhadi describes extended rehearsal and actor-specific preparation. In a hypothetical exercise: Design separate rehearsal tasks before a joint scene.",
          "nb": "Farhadi beskriver langvarige prøver og individuelt tilpasset skuespillerarbeid. I en tenkt øvelse: Lag individuelle prøveoppgaver før en felles scene.",
          "fr": "Farhadi décrit des répétitions prolongées et une préparation adaptée aux acteurs. Dans un exercice fictif : Préparer des exercices distincts avant une scène commune.",
          "pt": "Farhadi descreve ensaios prolongados e preparação adaptada aos atores. Num exercício hipotético: Criar exercícios distintos antes de uma cena conjunta."
        },
        "sourceIds": [
          "s3",
          "s1"
        ]
      },
      {
        "id": "ahero-frame",
        "area": "camera",
        "prompt": {
          "en": "ARRI documents large-format capture while the press kit specifies widescreen delivery. What would you test in a new production exercise?",
          "nb": "ARRI dokumenterer storformatopptak, mens pressematerialet angir bredformatvisning. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "ARRI documente la capture grand format, le dossier précise la diffusion panoramique. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "A ARRI documenta captação de grande formato e o dossier especifica exibição panorâmica. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat sensor size as identical to delivery ratio",
              "nb": "Behandle sensorstørrelse som identisk med visningsformat",
              "fr": "Confondre taille du capteur et rapport de diffusion",
              "pt": "Confundir tamanho do sensor com proporção de exibição"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose a method without comparing its alternatives",
              "nb": "Velg en metode uten å sammenligne alternativer",
              "fr": "Choisir une méthode sans comparer les variantes",
              "pt": "Escolher um método sem comparar alternativas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test group blocking in the intended delivery aspect ratio",
              "nb": "Prøv gruppeplassering innenfor planlagt visningsformat",
              "fr": "Tester le placement du groupe dans le format de diffusion prévu",
              "pt": "Testar movimentos do grupo no formato de exibição previsto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ARRI documents large-format capture while the press kit specifies widescreen delivery. In a hypothetical exercise: Test group blocking in the intended delivery aspect ratio.",
          "nb": "ARRI dokumenterer storformatopptak, mens pressematerialet angir bredformatvisning. I en tenkt øvelse: Prøv gruppeplassering innenfor planlagt visningsformat.",
          "fr": "ARRI documente la capture grand format, le dossier précise la diffusion panoramique. Dans un exercice fictif : Tester le placement du groupe dans le format de diffusion prévu.",
          "pt": "A ARRI documenta captação de grande formato e o dossier especifica exibição panorâmica. Num exercício hipotético: Testar movimentos do grupo no formato de exibição previsto."
        },
        "sourceIds": [
          "s2",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_satantango_1994",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Circular adaptation, choreography and precomposed music",
      "nb": "Sirkulær adaptasjon, koreografi og forhåndskomponert musikk",
      "fr": "Adaptation circulaire, chorégraphie et musique précomposée",
      "pt": "Adaptação circular, coreografia e música pré-composta"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Sátántangó",
        "publisher": "National Film Institute Hungary",
        "url": "https://nfi.hu/alapfilmek-1/alapfilmek-filmek/jatekfilm/satantango.html"
      },
      {
        "id": "s2",
        "title": "Béla Tarr on Sátántangó at 30",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/interviews/bela-tarr-satantango-werckmeister-harmonies"
      },
      {
        "id": "s3",
        "title": "Interview: Béla Tarr, the Complete Works",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/interview-bela-tarr-the-complete-works/"
      },
      {
        "id": "s4",
        "title": "Waiting for the Prince – An Interview with Béla Tarr",
        "publisher": "Senses of Cinema",
        "url": "https://www.sensesofcinema.com/2001/feature-articles/tarr-2/"
      },
      {
        "id": "s5",
        "title": "Béla Tarr Interview",
        "publisher": "DocNomads",
        "url": "https://www.docnomads.eu/academic-board/43-the-docnomads-association-dna/news/365-bela-tarr-interview"
      }
    ],
    "questions": [
      {
        "id": "satantango-structure",
        "area": "research",
        "prompt": {
          "en": "Tarr retains the novel’s six-forward and six-back tango structure. What would you test in a new production exercise?",
          "nb": "Tarr bevarer romanens tangostruktur med seks fram og seks tilbake. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Tarr conserve la structure de tango du roman, six pas avant et six arrière. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Tarr conserva a estrutura de tango do romance, seis passos à frente e seis atrás. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Chart repeated events from distinct viewpoints",
              "nb": "Kartlegg gjentatte hendelser fra ulike synsvinkler",
              "fr": "Cartographier les événements répétés selon différents points de vue",
              "pt": "Mapear acontecimentos repetidos de diferentes pontos de vista"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Flatten all events into a single linear summary",
              "nb": "Gjør alle hendelser til ett lineært sammendrag",
              "fr": "Réduire tous les événements à un résumé linéaire",
              "pt": "Reduzir todos os acontecimentos a um resumo linear"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Repeat scenes without changing audience knowledge",
              "nb": "Gjenta scener uten å endre publikums kunnskap",
              "fr": "Répéter les scènes sans modifier le savoir du public",
              "pt": "Repetir cenas sem alterar o conhecimento do público"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Tarr retains the novel’s six-forward and six-back tango structure. In a hypothetical exercise: Chart repeated events from distinct viewpoints.",
          "nb": "Tarr bevarer romanens tangostruktur med seks fram og seks tilbake. I en tenkt øvelse: Kartlegg gjentatte hendelser fra ulike synsvinkler.",
          "fr": "Tarr conserve la structure de tango du roman, six pas avant et six arrière. Dans un exercice fictif : Cartographier les événements répétés selon différents points de vue.",
          "pt": "Tarr conserva a estrutura de tango do romance, seis passos à frente e seis atrás. Num exercício hipotético: Mapear acontecimentos repetidos de diferentes pontos de vista."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "satantango-movement",
        "area": "camera",
        "prompt": {
          "en": "Tarr and Hranitzky describe rhythm constructed within sustained camera movement. What would you test in a new production exercise?",
          "nb": "Tarr og Hranitzky beskriver rytme skapt i vedvarende kamerabevegelse. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Tarr et Hranitzky décrivent un rythme construit dans le mouvement prolongé. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Tarr e Hranitzky descrevem ritmo construído no movimento prolongado. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Make the take longer without a dramatic purpose",
              "nb": "Gjør opptaket lengre uten dramatisk hensikt",
              "fr": "Allonger la prise sans fonction dramatique",
              "pt": "Alongar o plano sem função dramática"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a continuous movement with actor and camera cues",
              "nb": "Øv en sammenhengende bevegelse med signaler til skuespiller og kamera",
              "fr": "Répéter un mouvement continu avec repères acteurs et caméra",
              "pt": "Ensaiar um movimento contínuo com marcas de atores e câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Leave camera timing entirely to the edit",
              "nb": "Overlat all kameratiming til klippingen",
              "fr": "Laisser tout le rythme caméra au montage",
              "pt": "Deixar todo o ritmo da câmara para a montagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Tarr and Hranitzky describe rhythm constructed within sustained camera movement. In a hypothetical exercise: Rehearse a continuous movement with actor and camera cues.",
          "nb": "Tarr og Hranitzky beskriver rytme skapt i vedvarende kamerabevegelse. I en tenkt øvelse: Øv en sammenhengende bevegelse med signaler til skuespiller og kamera.",
          "fr": "Tarr et Hranitzky décrivent un rythme construit dans le mouvement prolongé. Dans un exercice fictif : Répéter un mouvement continu avec repères acteurs et caméra.",
          "pt": "Tarr e Hranitzky descrevem ritmo construído no movimento prolongado. Num exercício hipotético: Ensaiar um movimento contínuo com marcas de atores e câmara."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "satantango-music",
        "area": "sound",
        "prompt": {
          "en": "Mihály Víg’s precomposed themes could influence timing during filming. What would you test in a new production exercise?",
          "nb": "Mihály Vígs forhåndskomponerte temaer kunne påvirke timing under opptak. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les thèmes précomposés de Mihály Víg pouvaient orienter le rythme du tournage. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Os temas pré-compostos de Mihály Víg podiam orientar o ritmo da filmagem. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Add music only to hide continuity mistakes",
              "nb": "Legg på musikk bare for å skjule kontinuitetsfeil",
              "fr": "Ajouter la musique uniquement pour cacher les faux raccords",
              "pt": "Adicionar música apenas para ocultar falhas de continuidade"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Require every action to hit the same beat",
              "nb": "Krev at alle handlinger treffer samme taktslag",
              "fr": "Exiger que chaque action tombe sur le même temps",
              "pt": "Exigir que cada ação coincida com o mesmo tempo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse with and without an original timing cue",
              "nb": "Øv med og uten et originalt musikalsk tidssignal",
              "fr": "Répéter avec et sans repère musical original",
              "pt": "Ensaiar com e sem referência musical original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mihály Víg’s precomposed themes could influence timing during filming. In a hypothetical exercise: Rehearse with and without an original timing cue.",
          "nb": "Mihály Vígs forhåndskomponerte temaer kunne påvirke timing under opptak. I en tenkt øvelse: Øv med og uten et originalt musikalsk tidssignal.",
          "fr": "Les thèmes précomposés de Mihály Víg pouvaient orienter le rythme du tournage. Dans un exercice fictif : Répéter avec et sans repère musical original.",
          "pt": "Os temas pré-compostos de Mihály Víg podiam orientar o ritmo da filmagem. Num exercício hipotético: Ensaiar com e sem referência musical original."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_4_months_3_weeks_and_2_days_2007",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Period reconstruction, offscreen space and sound editing",
      "nb": "Perioderekonstruksjon, rom utenfor bildet og lydklipp",
      "fr": "Reconstitution historique, hors-champ et montage sonore",
      "pt": "Reconstrução histórica, fora de campo e montagem sonora"
    },
    "sources": [
      {
        "id": "s0",
        "title": "4 Months, 3 Weeks and 2 Days – English Press Kit",
        "publisher": "Festival de Cannes",
        "url": "https://cdn.festival-cannes.com/media/uploads/2023/03/63808.pdf"
      },
      {
        "id": "s2",
        "title": "10 Great Romanian New Wave Films",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/lists/10-great-romanian-new-wave-films"
      },
      {
        "id": "s4",
        "title": "Cristian Mungiu's 4 Months, 3 Weeks and 2 Days",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/archives/issues/winter2008/4months.php"
      },
      {
        "id": "s5",
        "title": "Dana Bunescu: You Make Films Out of Need",
        "publisher": "Films in Frame",
        "url": "https://www.filmsinframe.com/en/interviews/dana-bunescu-editor/"
      }
    ],
    "questions": [
      {
        "id": "fourmonths-period",
        "area": "research",
        "prompt": {
          "en": "The production dossier describes testimony-based writing and reconstruction of 1987 everyday life. What would you test in a new production exercise?",
          "nb": "Produksjonsdokumentasjonen beskriver vitnebasert manus og rekonstruksjon av hverdagslivet i 1987. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Le dossier décrit une écriture issue de témoignages et la reconstitution du quotidien de 1987. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O dossiê descreve escrita baseada em testemunhos e reconstrução do quotidiano de 1987. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Cross-check props and locations against period evidence",
              "nb": "Kontroller rekvisitter og steder mot samtidige kilder",
              "fr": "Vérifier accessoires et lieux avec des sources d’époque",
              "pt": "Confrontar adereços e locais com fontes da época"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use modern objects if their colour matches",
              "nb": "Bruk moderne gjenstander hvis fargen passer",
              "fr": "Utiliser des objets modernes si la couleur convient",
              "pt": "Usar objetos modernos se a cor corresponder"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat one testimony as complete historical proof",
              "nb": "Behandle ett vitnesbyrd som fullstendig historisk bevis",
              "fr": "Traiter un témoignage comme preuve historique complète",
              "pt": "Tratar um testemunho como prova histórica completa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production dossier describes testimony-based writing and reconstruction of 1987 everyday life. In a hypothetical exercise: Cross-check props and locations against period evidence.",
          "nb": "Produksjonsdokumentasjonen beskriver vitnebasert manus og rekonstruksjon av hverdagslivet i 1987. I en tenkt øvelse: Kontroller rekvisitter og steder mot samtidige kilder.",
          "fr": "Le dossier décrit une écriture issue de témoignages et la reconstitution du quotidien de 1987. Dans un exercice fictif : Vérifier accessoires et lieux avec des sources d’époque.",
          "pt": "O dossiê descreve escrita baseada em testemunhos e reconstrução do quotidiano de 1987. Num exercício hipotético: Confrontar adereços e locais com fontes da época."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "fourmonths-offscreen",
        "area": "camera",
        "prompt": {
          "en": "Mungiu describes deliberate single-position staging and the importance of offscreen space. What would you test in a new production exercise?",
          "nb": "Mungiu beskriver bevisst iscenesettelse fra én posisjon og betydningen av rom utenfor bildet. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Mungiu décrit une mise en scène à position unique et l’importance du hors-champ. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Mungiu descreve encenação a partir de uma posição e importância do fora de campo. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Explain every unseen event in narration",
              "nb": "Forklar alle usette hendelser med fortellerstemme",
              "fr": "Expliquer chaque événement invisible en narration",
              "pt": "Explicar cada acontecimento invisível em narração"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a scene where reactions imply unseen activity",
              "nb": "Øv en scene der reaksjoner antyder usett aktivitet",
              "fr": "Répéter une scène où les réactions suggèrent une action invisible",
              "pt": "Ensaiar uma cena em que reações sugerem atividade invisível"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Insert a close-up for every offscreen sound",
              "nb": "Sett inn nærbilde for hver lyd utenfor bildet",
              "fr": "Insérer un gros plan pour chaque son hors champ",
              "pt": "Inserir um grande plano para cada som fora de campo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Mungiu describes deliberate single-position staging and the importance of offscreen space. In a hypothetical exercise: Rehearse a scene where reactions imply unseen activity.",
          "nb": "Mungiu beskriver bevisst iscenesettelse fra én posisjon og betydningen av rom utenfor bildet. I en tenkt øvelse: Øv en scene der reaksjoner antyder usett aktivitet.",
          "fr": "Mungiu décrit une mise en scène à position unique et l’importance du hors-champ. Dans un exercice fictif : Répéter une scène où les réactions suggèrent une action invisible.",
          "pt": "Mungiu descreve encenação a partir de uma posição e importância do fora de campo. Num exercício hipotético: Ensaiar uma cena em que reações sugerem atividade invisível."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      },
      {
        "id": "fourmonths-dinner",
        "area": "sound",
        "prompt": {
          "en": "Bunescu describes detailed reconstruction of the dinner scene’s dialogue and foley. What would you test in a new production exercise?",
          "nb": "Bunescu beskriver detaljert rekonstruksjon av middagsscenens dialog og foley. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Bunescu décrit la reconstruction détaillée des dialogues et bruitages du dîner. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Bunescu descreve reconstrução detalhada do diálogo e dos ruídos do jantar. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace conversation with continuous music",
              "nb": "Erstatt samtalen med sammenhengende musikk",
              "fr": "Remplacer la conversation par une musique continue",
              "pt": "Substituir conversa por música contínua"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a long take needs no sound editing",
              "nb": "Anta at lange opptak ikke trenger lydklipp",
              "fr": "Supposer qu’un plan long ne nécessite aucun montage sonore",
              "pt": "Supor que um plano longo dispensa montagem sonora"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Build a dialogue and ambience edit preserving performance rhythm",
              "nb": "Bygg dialog- og miljølydklipp som bevarer spillets rytme",
              "fr": "Monter dialogues et ambiances en préservant le rythme du jeu",
              "pt": "Montar diálogo e ambiente preservando o ritmo da atuação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Bunescu describes detailed reconstruction of the dinner scene’s dialogue and foley. In a hypothetical exercise: Build a dialogue and ambience edit preserving performance rhythm.",
          "nb": "Bunescu beskriver detaljert rekonstruksjon av middagsscenens dialog og foley. I en tenkt øvelse: Bygg dialog- og miljølydklipp som bevarer spillets rytme.",
          "fr": "Bunescu décrit la reconstruction détaillée des dialogues et bruitages du dîner. Dans un exercice fictif : Monter dialogues et ambiances en préservant le rythme du jeu.",
          "pt": "Bunescu descreve reconstrução detalhada do diálogo e dos ruídos do jantar. Num exercício hipotético: Montar diálogo e ambiente preservando o ritmo da atuação."
        },
        "sourceIds": [
          "s5",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_land_of_mine_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Historical research, coastal daylight and offscreen suspense",
      "nb": "Historisk research, kystlys og spenning utenfor bildet",
      "fr": "Recherche historique, lumière côtière et suspense hors champ",
      "pt": "Pesquisa histórica, luz costeira e suspense fora de campo"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Land of Mine",
        "publisher": "Sony Pictures Classics",
        "url": "https://www.sonyclassics.com/landofmine/"
      },
      {
        "id": "s2",
        "title": "Land of Mine",
        "publisher": "European Film Academy",
        "url": "https://www.europeanfilmawards.eu/efa-movie/land-of-mine/"
      },
      {
        "id": "s7",
        "title": "Know Thine Enemy",
        "publisher": "Interview Magazine",
        "url": "https://www.interviewmagazine.com/film/land-of-mine-martin-zandvliet"
      },
      {
        "id": "s8",
        "title": "Martin Zandvliet on Making the Explosive WWII Drama Land of Mine",
        "publisher": "The Moveable Fest",
        "url": "https://moveablefest.com/martin-zandvliet-land-of-mine/"
      },
      {
        "id": "s9",
        "title": "Land of Mine (Denmark)",
        "publisher": "Golden Globes",
        "url": "https://goldenglobes.com/articles/land-of-mine-denmark/"
      }
    ],
    "questions": [
      {
        "id": "landmine-history",
        "area": "research",
        "prompt": {
          "en": "Zandvliet describes extensive research and the transformation of history into a close moral drama. What would you test in a new production exercise?",
          "nb": "Zandvliet beskriver omfattende research og omforming av historie til et nært moralsk drama. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Zandvliet décrit une recherche approfondie et la transformation en drame moral intime. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Zandvliet descreve pesquisa extensa e a transformação da história em drama moral íntimo. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Keep documented facts separate from fictional character decisions",
              "nb": "Skill dokumenterte fakta fra fiktive karaktervalg",
              "fr": "Séparer les faits documentés des choix fictionnels des personnages",
              "pt": "Separar factos documentados de decisões ficcionais das personagens"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat fictional dialogue as archival testimony",
              "nb": "Behandle fiktiv dialog som arkivvitnesbyrd",
              "fr": "Traiter le dialogue fictif comme témoignage d’archive",
              "pt": "Tratar diálogo ficcional como testemunho de arquivo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Simplify the research to a single moral conclusion",
              "nb": "Forenkle researchen til én moralsk konklusjon",
              "fr": "Réduire la recherche à une conclusion morale unique",
              "pt": "Reduzir a pesquisa a uma única conclusão moral"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Zandvliet describes extensive research and the transformation of history into a close moral drama. In a hypothetical exercise: Keep documented facts separate from fictional character decisions.",
          "nb": "Zandvliet beskriver omfattende research og omforming av historie til et nært moralsk drama. I en tenkt øvelse: Skill dokumenterte fakta fra fiktive karaktervalg.",
          "fr": "Zandvliet décrit une recherche approfondie et la transformation en drame moral intime. Dans un exercice fictif : Séparer les faits documentés des choix fictionnels des personnages.",
          "pt": "Zandvliet descreve pesquisa extensa e a transformação da história em drama moral íntimo. Num exercício hipotético: Separar factos documentados de decisões ficcionais das personagens."
        },
        "sourceIds": [
          "s7",
          "s8"
        ]
      },
      {
        "id": "landmine-daylight",
        "area": "camera",
        "prompt": {
          "en": "The director describes the daylight coast and an actor-following camera. What would you test in a new production exercise?",
          "nb": "Regissøren beskriver kystens dagslys og et kamera som følger skuespillerne. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Le réalisateur décrit la côte en lumière du jour et une caméra suivant les acteurs. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O realizador descreve a costa à luz do dia e uma câmara que segue os atores. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore weather when scheduling matching scenes",
              "nb": "Ignorer været ved planlegging av sammenhengende scener",
              "fr": "Ignorer la météo en planifiant les scènes raccordées",
              "pt": "Ignorar o tempo ao planear cenas ligadas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test exposure and continuity in changing coastal light",
              "nb": "Prøv eksponering og kontinuitet i skiftende kystlys",
              "fr": "Tester exposition et raccords sous une lumière côtière changeante",
              "pt": "Testar exposição e continuidade sob luz costeira variável"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume daylight remains constant all day",
              "nb": "Anta at dagslyset er konstant hele dagen",
              "fr": "Supposer que la lumière du jour reste constante",
              "pt": "Supor que a luz do dia permanece constante"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The director describes the daylight coast and an actor-following camera. In a hypothetical exercise: Test exposure and continuity in changing coastal light.",
          "nb": "Regissøren beskriver kystens dagslys og et kamera som følger skuespillerne. I en tenkt øvelse: Prøv eksponering og kontinuitet i skiftende kystlys.",
          "fr": "Le réalisateur décrit la côte en lumière du jour et une caméra suivant les acteurs. Dans un exercice fictif : Tester exposition et raccords sous une lumière côtière changeante.",
          "pt": "O realizador descreve a costa à luz do dia e uma câmara que segue os atores. Num exercício hipotético: Testar exposição e continuidade sob luz costeira variável."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      },
      {
        "id": "landmine-suspense",
        "area": "sound",
        "prompt": {
          "en": "Sea, birds and breathing form a field of suspense in the film. What would you test in a new production exercise?",
          "nb": "Hav, fugler og pust skaper et spenningsfelt i filmen. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Mer, oiseaux et respiration forment un champ de suspense. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Mar, aves e respiração formam um campo de suspense. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use continuous loud music to signal danger",
              "nb": "Bruk sammenhengende høy musikk for å signalisere fare",
              "fr": "Utiliser une musique forte et continue pour signaler le danger",
              "pt": "Usar música alta contínua para sinalizar perigo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Silence every sound between dialogue lines",
              "nb": "Fjern all lyd mellom replikkene",
              "fr": "Supprimer tous les sons entre les répliques",
              "pt": "Eliminar todos os sons entre falas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Mix ordinary environmental sounds around an unseen fictional event",
              "nb": "Miks vanlige miljølyder rundt en usett fiktiv hendelse",
              "fr": "Mixer des sons ordinaires autour d’un événement fictif invisible",
              "pt": "Misturar sons quotidianos em torno de um acontecimento ficcional invisível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sea, birds and breathing form a field of suspense in the film. In a hypothetical exercise: Mix ordinary environmental sounds around an unseen fictional event.",
          "nb": "Hav, fugler og pust skaper et spenningsfelt i filmen. I en tenkt øvelse: Miks vanlige miljølyder rundt en usett fiktiv hendelse.",
          "fr": "Mer, oiseaux et respiration forment un champ de suspense. Dans un exercice fictif : Mixer des sons ordinaires autour d’un événement fictif invisible.",
          "pt": "Mar, aves e respiração formam um campo de suspense. Num exercício hipotético: Misturar sons quotidianos em torno de um acontecimento ficcional invisível."
        },
        "sourceIds": [
          "s9",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_psychobitch_2019",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Youth research, tailored rehearsal and winter locations",
      "nb": "Ungdomsresearch, tilpassede prøver og vintersteder",
      "fr": "Recherche sur la jeunesse, répétitions adaptées et lieux hivernaux",
      "pt": "Pesquisa sobre juventude, ensaios adaptados e locais de inverno"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Psychobitch",
        "publisher": "Nasjonalbiblioteket – Norsk filmografi",
        "url": "https://www.nb.no/filmografi/show?id=16801718"
      },
      {
        "id": "s1",
        "title": "Psychobitch",
        "publisher": "Filminvest",
        "url": "https://filminvest.no/produksjoner/psychobitch/"
      },
      {
        "id": "s3",
        "title": "Generasjon Prestasjon gjør opprør",
        "publisher": "Filmmagasinet",
        "url": "https://www.filmmagasinet.no/2019/01/generasjon-prestasjon/"
      },
      {
        "id": "s4",
        "title": "Flinkisen og outsideren",
        "publisher": "CINEMA",
        "url": "https://cine.no/2018/12/19/flinkisen-og-outsideren/"
      }
    ],
    "questions": [
      {
        "id": "psychobitch-research",
        "area": "research",
        "prompt": {
          "en": "Lund describes research into conformity and achievement pressure among young people. What would you test in a new production exercise?",
          "nb": "Lund beskriver research på konformitet og prestasjonspress blant ungdom. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Lund décrit ses recherches sur le conformisme et la pression de réussite des jeunes. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Lund descreve pesquisa sobre conformismo e pressão de desempenho juvenil. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test fictional scenes against voluntary anonymised research",
              "nb": "Prøv fiktive scener mot frivillig anonymisert research",
              "fr": "Confronter les scènes fictives à une recherche volontaire anonymisée",
              "pt": "Confrontar cenas fictícias com pesquisa voluntária anonimizada"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use a stereotype as the entire character profile",
              "nb": "Bruk en stereotypi som hele karakterprofilen",
              "fr": "Utiliser un stéréotype comme profil complet",
              "pt": "Usar um estereótipo como perfil completo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat a single interview as representative of all teenagers",
              "nb": "Behandle ett intervju som representativt for alle ungdommer",
              "fr": "Prendre un entretien pour représentatif de tous les adolescents",
              "pt": "Tratar uma entrevista como representativa de todos os adolescentes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lund describes research into conformity and achievement pressure among young people. In a hypothetical exercise: Test fictional scenes against voluntary anonymised research.",
          "nb": "Lund beskriver research på konformitet og prestasjonspress blant ungdom. I en tenkt øvelse: Prøv fiktive scener mot frivillig anonymisert research.",
          "fr": "Lund décrit ses recherches sur le conformisme et la pression de réussite des jeunes. Dans un exercice fictif : Confronter les scènes fictives à une recherche volontaire anonymisée.",
          "pt": "Lund descreve pesquisa sobre conformismo e pressão de desempenho juvenil. Num exercício hipotético: Confrontar cenas fictícias com pesquisa voluntária anonimizada."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "psychobitch-actors",
        "area": "research",
        "prompt": {
          "en": "Lund describes contrasting precise and exploratory approaches among the lead actors. What would you test in a new production exercise?",
          "nb": "Lund beskriver kontrasterende presise og utforskende metoder hos hovedskuespillerne. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Lund décrit des méthodes précises et exploratoires chez les acteurs principaux. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Lund descreve métodos precisos e exploratórios entre os protagonistas. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Avoid agreeing on the scene objective",
              "nb": "Unngå å bli enige om scenens mål",
              "fr": "Éviter de convenir de l’objectif de la scène",
              "pt": "Evitar acordar o objetivo da cena"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Offer different preparation tasks leading to the same dramatic objective",
              "nb": "Tilby ulike forberedelser som leder mot samme dramatiske mål",
              "fr": "Proposer des préparations différentes vers le même objectif dramatique",
              "pt": "Propor preparações diferentes para o mesmo objetivo dramático"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Force both actors to rehearse identically",
              "nb": "Tving begge skuespillerne til identiske prøver",
              "fr": "Imposer aux deux acteurs des répétitions identiques",
              "pt": "Obrigar ambos os atores a ensaiar de forma idêntica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lund describes contrasting precise and exploratory approaches among the lead actors. In a hypothetical exercise: Offer different preparation tasks leading to the same dramatic objective.",
          "nb": "Lund beskriver kontrasterende presise og utforskende metoder hos hovedskuespillerne. I en tenkt øvelse: Tilby ulike forberedelser som leder mot samme dramatiske mål.",
          "fr": "Lund décrit des méthodes précises et exploratoires chez les acteurs principaux. Dans un exercice fictif : Proposer des préparations différentes vers le même objectif dramatique.",
          "pt": "Lund descreve métodos precisos e exploratórios entre os protagonistas. Num exercício hipotético: Propor preparações diferentes para o mesmo objetivo dramático."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      },
      {
        "id": "psychobitch-snow",
        "area": "camera",
        "prompt": {
          "en": "Heavy snowfall in Gjøvik became both a logistical challenge and part of the atmosphere. What would you test in a new production exercise?",
          "nb": "Kraftig snøfall i Gjøvik ble både en logistisk utfordring og del av atmosfæren. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les fortes chutes de neige à Gjøvik ont créé un défi logistique et une atmosphère. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "A neve intensa em Gjøvik tornou-se desafio logístico e parte da atmosfera. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Ignore weather changes between matching scenes",
              "nb": "Ignorer værendringer mellom sammenhengende scener",
              "fr": "Ignorer les changements météo entre scènes raccordées",
              "pt": "Ignorar mudanças do tempo entre cenas ligadas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Keep outdoor schedules fixed regardless of access",
              "nb": "Behold utendørsplanen uansett adkomst",
              "fr": "Maintenir le planning extérieur quel que soit l’accès",
              "pt": "Manter o calendário exterior independentemente do acesso"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan winter continuity, safe access and alternative shooting dates",
              "nb": "Planlegg vinterkontinuitet, trygg adkomst og alternative opptaksdatoer",
              "fr": "Prévoir raccords hivernaux, accès sûr et dates alternatives",
              "pt": "Planear continuidade de inverno, acesso seguro e datas alternativas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Heavy snowfall in Gjøvik became both a logistical challenge and part of the atmosphere. In a hypothetical exercise: Plan winter continuity, safe access and alternative shooting dates.",
          "nb": "Kraftig snøfall i Gjøvik ble både en logistisk utfordring og del av atmosfæren. I en tenkt øvelse: Planlegg vinterkontinuitet, trygg adkomst og alternative opptaksdatoer.",
          "fr": "Les fortes chutes de neige à Gjøvik ont créé un défi logistique et une atmosphère. Dans un exercice fictif : Prévoir raccords hivernaux, accès sûr et dates alternatives.",
          "pt": "A neve intensa em Gjøvik tornou-se desafio logístico e parte da atmosfera. Num exercício hipotético: Planear continuidade de inverno, acesso seguro e datas alternativas."
        },
        "sourceIds": [
          "s3",
          "s4",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_homesick_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Shame-led rewriting, consent and intimate visual form",
      "nb": "Skambasert manusrevisjon, samtykke og intim bildeform",
      "fr": "Réécriture autour de la honte, consentement et forme intime",
      "pt": "Reescrita centrada na vergonha, consentimento e forma íntima"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Den selvdestruktive skammen",
        "publisher": "CINEMA",
        "url": "https://cine.no/2015/03/29/den-selvdestruktive-skammen/"
      },
      {
        "id": "s1",
        "title": "Homesick",
        "publisher": "Maipo Film",
        "url": "https://www.maipo.no/en/movies/homesick"
      },
      {
        "id": "s7",
        "title": "Analysen: De nærmeste (2015)",
        "publisher": "Montages",
        "url": "https://montages.no/2015/04/analysen-de-naermeste-2015/"
      },
      {
        "id": "s8",
        "title": "Blått Lerret web-TV: De nærmeste, Dirk Ohm og Den tilfeldige rockestjerne",
        "publisher": "Rushprint",
        "url": "https://rushprint.no/2015/04/blatt-lerret-web-tv-de-naermeste-dirk-ohm-og-den-tilfeldige-rockestjerne/"
      }
    ],
    "questions": [
      {
        "id": "homesick-rewrite",
        "area": "research",
        "prompt": {
          "en": "Sewitsky and Wilmann describe a screenplay rebuilt around shame and unwantedness. What would you test in a new production exercise?",
          "nb": "Sewitsky og Wilmann beskriver et manus omarbeidet rundt skam og følelsen av å være uønsket. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Sewitsky et Wilmann décrivent une réécriture centrée sur la honte et le rejet. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "Sewitsky e Wilmann descrevem uma reescrita centrada na vergonha e rejeição. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Track how each scene changes the character’s sense of belonging",
              "nb": "Kartlegg hvordan hver scene endrer karakterens tilhørighet",
              "fr": "Suivre l’évolution du sentiment d’appartenance dans chaque scène",
              "pt": "Acompanhar como cada cena altera o sentimento de pertença"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every emotion in direct dialogue",
              "nb": "Forklar alle følelser i direkte dialog",
              "fr": "Expliquer chaque émotion par un dialogue direct",
              "pt": "Explicar cada emoção em diálogo direto"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Rewrite scenes without considering character development",
              "nb": "Skriv om scener uten å vurdere karakterutvikling",
              "fr": "Réécrire sans considérer l’évolution du personnage",
              "pt": "Reescrever sem considerar a evolução da personagem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sewitsky and Wilmann describe a screenplay rebuilt around shame and unwantedness. In a hypothetical exercise: Track how each scene changes the character’s sense of belonging.",
          "nb": "Sewitsky og Wilmann beskriver et manus omarbeidet rundt skam og følelsen av å være uønsket. I en tenkt øvelse: Kartlegg hvordan hver scene endrer karakterens tilhørighet.",
          "fr": "Sewitsky et Wilmann décrivent une réécriture centrée sur la honte et le rejet. Dans un exercice fictif : Suivre l’évolution du sentiment d’appartenance dans chaque scène.",
          "pt": "Sewitsky e Wilmann descrevem uma reescrita centrada na vergonha e rejeição. Num exercício hipotético: Acompanhar como cada cena altera o sentimento de pertença."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      },
      {
        "id": "homesick-consent",
        "area": "research",
        "prompt": {
          "en": "The filmmakers discuss differentiating difficult intimacy scenes and casting through trust. What would you test in a new production exercise?",
          "nb": "Filmskaperne beskriver differensierte vanskelige intimitetsscener og casting basert på tillit. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Les cinéastes évoquent des scènes intimes différenciées et un casting fondé sur la confiance. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "As cineastas descrevem cenas íntimas diferenciadas e casting baseado na confiança. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume initial consent covers every later change",
              "nb": "Anta at første samtykke dekker alle senere endringer",
              "fr": "Supposer que le consentement initial couvre toute modification",
              "pt": "Supor que o consentimento inicial cobre todas as alterações"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree boundaries and choreograph non-explicit scenes with ongoing consent",
              "nb": "Avtal grenser og koreografer ikke-eksplisitte scener med løpende samtykke",
              "fr": "Convenir des limites et chorégraphier des scènes non explicites avec consentement continu",
              "pt": "Acordar limites e coreografar cenas não explícitas com consentimento contínuo"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Surprise performers to obtain an authentic reaction",
              "nb": "Overrask utøverne for å få en autentisk reaksjon",
              "fr": "Surprendre les interprètes pour obtenir une réaction authentique",
              "pt": "Surpreender intérpretes para obter reação autêntica"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The filmmakers discuss differentiating difficult intimacy scenes and casting through trust. In a hypothetical exercise: Agree boundaries and choreograph non-explicit scenes with ongoing consent.",
          "nb": "Filmskaperne beskriver differensierte vanskelige intimitetsscener og casting basert på tillit. I en tenkt øvelse: Avtal grenser og koreografer ikke-eksplisitte scener med løpende samtykke.",
          "fr": "Les cinéastes évoquent des scènes intimes différenciées et un casting fondé sur la confiance. Dans un exercice fictif : Convenir des limites et chorégraphier des scènes non explicites avec consentement continu.",
          "pt": "As cineastas descrevem cenas íntimas diferenciadas e casting baseado na confiança. Num exercício hipotético: Acordar limites e coreografar cenas não explícitas com consentimento contínuo."
        },
        "sourceIds": [
          "s0",
          "s8"
        ]
      },
      {
        "id": "homesick-visual",
        "area": "camera",
        "prompt": {
          "en": "The production account contrasts close handheld pursuit with planned painterly images. What would you test in a new production exercise?",
          "nb": "Produksjonsberetningen kontrasterer tett håndholdt kamera med planlagte maleriske bilder. Hva ville du prøvd i en ny produksjonsøvelse?",
          "fr": "Le récit de production oppose proximité caméra portée et images picturales préparées. Que testeriez-vous dans un nouvel exercice de production ?",
          "pt": "O relato de produção contrapõe proximidade de câmara à mão e imagens pictóricas planeadas. O que testaria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose handheld movement for every scene regardless of meaning",
              "nb": "Velg håndholdt bevegelse i alle scener uansett mening",
              "fr": "Choisir la caméra portée pour toutes les scènes sans égard au sens",
              "pt": "Escolher câmara à mão em todas as cenas independentemente do sentido"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat visual composition as independent of performance",
              "nb": "Behandle bildekomposisjon som uavhengig av skuespillerspill",
              "fr": "Traiter la composition comme indépendante du jeu",
              "pt": "Tratar composição visual como independente da atuação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare handheld proximity and a composed static frame for one emotional beat",
              "nb": "Sammenlign håndholdt nærhet og komponert statisk utsnitt for ett følelsesskifte",
              "fr": "Comparer proximité caméra portée et cadre fixe composé pour un moment émotionnel",
              "pt": "Comparar proximidade de câmara à mão e quadro fixo composto num momento emocional"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production account contrasts close handheld pursuit with planned painterly images. In a hypothetical exercise: Compare handheld proximity and a composed static frame for one emotional beat.",
          "nb": "Produksjonsberetningen kontrasterer tett håndholdt kamera med planlagte maleriske bilder. I en tenkt øvelse: Sammenlign håndholdt nærhet og komponert statisk utsnitt for ett følelsesskifte.",
          "fr": "Le récit de production oppose proximité caméra portée et images picturales préparées. Dans un exercice fictif : Comparer proximité caméra portée et cadre fixe composé pour un moment émotionnel.",
          "pt": "O relato de produção contrapõe proximidade de câmara à mão e imagens pictóricas planeadas. Num exercício hipotético: Comparar proximidade de câmara à mão e quadro fixo composto num momento emocional."
        },
        "sourceIds": [
          "s0",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_broker_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Road locations, parallel rewriting and weather continuity",
      "nb": "Reisesteder, parallell manusrevisjon og værkontinuitet",
      "fr": "Lieux itinérants, réécriture parallèle et raccords météo",
      "pt": "Locais de viagem, reescrita paralela e continuidade meteorológica"
    },
    "sources": [
      {
        "id": "s0",
        "title": "BROKER",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/broker/"
      },
      {
        "id": "s4",
        "title": "KOFIC Korean Cinema Today: Broker location-production report",
        "publisher": "Korean Film Council / KoBiz",
        "url": "https://koreanfilm.or.kr/eng/ebook/magazine/koreanCinemaToday41/1/index-1.html"
      },
      {
        "id": "s5",
        "title": "I Wanted the Story to Start in a Downpour and End With Waves: Hirokazu Kore-eda on Broker",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/118011-interview-hirokazu-kore-eda-broker/"
      },
      {
        "id": "s6",
        "title": "Filming Spots of the Movie Broker",
        "publisher": "Korea Tourism Organization / VisitKorea",
        "url": "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=393082"
      }
    ],
    "questions": [
      {
        "id": "broker-route",
        "area": "research",
        "prompt": {
          "en": "The production report describes overwhelmingly location-based filming along the Korean route. Which approach would you choose for a new production exercise?",
          "nb": "Produksjonsrapporten beskriver overveiende stedsopptak langs den koreanske ruten. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le rapport décrit un tournage essentiellement en décors naturels le long du trajet coréen. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O relatório descreve filmagem sobretudo em locais reais ao longo do percurso coreano. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Group scenes by location while tracking story order",
              "nb": "Grupper scener etter sted og hold styr på fortellingens rekkefølge",
              "fr": "Regrouper les scènes par lieu en suivant l’ordre narratif",
              "pt": "Agrupar cenas por local mantendo a ordem narrativa"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Shoot every scene in script order regardless of travel",
              "nb": "Film alle scener i manusrekkefølge uansett reisevei",
              "fr": "Tourner dans l’ordre du scénario malgré les déplacements",
              "pt": "Filmar na ordem do argumento apesar das deslocações"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume all locations have identical logistical needs",
              "nb": "Anta at alle steder har identiske logistikkbehov",
              "fr": "Supposer que tous les lieux ont les mêmes besoins logistiques",
              "pt": "Supor que todos os locais têm necessidades logísticas idênticas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production report describes overwhelmingly location-based filming along the Korean route. A practical exercise would be to: Group scenes by location while tracking story order.",
          "nb": "Produksjonsrapporten beskriver overveiende stedsopptak langs den koreanske ruten. En praktisk øvelse vil være å: Grupper scener etter sted og hold styr på fortellingens rekkefølge.",
          "fr": "Le rapport décrit un tournage essentiellement en décors naturels le long du trajet coréen. Un exercice pratique consisterait à : Regrouper les scènes par lieu en suivant l’ordre narratif.",
          "pt": "O relatório descreve filmagem sobretudo em locais reais ao longo do percurso coreano. Um exercício prático consistiria em: Agrupar cenas por local mantendo a ordem narrativa."
        },
        "sourceIds": [
          "s4",
          "s6"
        ]
      },
      {
        "id": "broker-rewrite",
        "area": "research",
        "prompt": {
          "en": "Kore-eda describes editing and rewriting alongside shooting. Which approach would you choose for a new production exercise?",
          "nb": "Kore-eda beskriver klipping og omskriving parallelt med opptak. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Kore-eda décrit le montage et la réécriture en parallèle du tournage. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Kore-eda descreve montagem e reescrita em paralelo com a filmagem. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard continuity notes when rewriting an ending",
              "nb": "Kast kontinuitetsnotater når slutten omskrives",
              "fr": "Écarter les notes de raccord en réécrivant la fin",
              "pt": "Descartar notas de continuidade ao reescrever o final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review rough scenes before revising later performances",
              "nb": "Gjennomgå grovklipp før senere skuespillerarbeid revideres",
              "fr": "Revoir les scènes prémontées avant de modifier le jeu ultérieur",
              "pt": "Rever cenas preliminares antes de rever atuações posteriores"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Prevent the editor from seeing unfinished material",
              "nb": "Hindre klipperen i å se uferdig materiale",
              "fr": "Empêcher le monteur de voir les images inachevées",
              "pt": "Impedir o montador de ver material inacabado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kore-eda describes editing and rewriting alongside shooting. A practical exercise would be to: Review rough scenes before revising later performances.",
          "nb": "Kore-eda beskriver klipping og omskriving parallelt med opptak. En praktisk øvelse vil være å: Gjennomgå grovklipp før senere skuespillerarbeid revideres.",
          "fr": "Kore-eda décrit le montage et la réécriture en parallèle du tournage. Un exercice pratique consisterait à : Revoir les scènes prémontées avant de modifier le jeu ultérieur.",
          "pt": "Kore-eda descreve montagem e reescrita em paralelo com a filmagem. Um exercício prático consistiria em: Rever cenas preliminares antes de rever atuações posteriores."
        },
        "sourceIds": [
          "s5",
          "s0"
        ]
      },
      {
        "id": "broker-weather",
        "area": "camera",
        "prompt": {
          "en": "The director describes water and weather as part of the visual concept. Which approach would you choose for a new production exercise?",
          "nb": "Regissøren beskriver vann og vær som del av bildekonseptet. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le réalisateur décrit l’eau et la météo comme éléments du concept visuel. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O realizador descreve água e tempo como parte do conceito visual. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all water imagery before testing",
              "nb": "Fjern alle vannmotiver før prøver",
              "fr": "Supprimer toutes les images d’eau avant les essais",
              "pt": "Eliminar todas as imagens de água antes dos testes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat weather as irrelevant to visual continuity",
              "nb": "Behandle vær som irrelevant for visuell kontinuitet",
              "fr": "Traiter la météo comme sans effet sur les raccords",
              "pt": "Tratar o tempo como irrelevante para a continuidade visual"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track weather and reflections across connected scenes",
              "nb": "Følg vær og refleksjoner i sammenhengende scener",
              "fr": "Suivre météo et reflets entre scènes raccordées",
              "pt": "Acompanhar tempo e reflexos entre cenas ligadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The director describes water and weather as part of the visual concept. A practical exercise would be to: Track weather and reflections across connected scenes.",
          "nb": "Regissøren beskriver vann og vær som del av bildekonseptet. En praktisk øvelse vil være å: Følg vær og refleksjoner i sammenhengende scener.",
          "fr": "Le réalisateur décrit l’eau et la météo comme éléments du concept visuel. Un exercice pratique consisterait à : Suivre météo et reflets entre scènes raccordées.",
          "pt": "O realizador descreve água e tempo como parte do conceito visual. Um exercício prático consistiria em: Acompanhar tempo e reflexos entre cenas ligadas."
        },
        "sourceIds": [
          "s5",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_compartment_no_6_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Confined-space staging, film economy and train sound",
      "nb": "Iscenesettelse i trange rom, filmøkonomi og toglyd",
      "fr": "Mise en scène exiguë, économie de pellicule et son ferroviaire",
      "pt": "Encenação em espaço reduzido, economia de película e som ferroviário"
    },
    "sources": [
      {
        "id": "s0",
        "title": "HYTTI NRO 6 (COMPARTMENT NO. 6)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/hytti-nro-6/"
      },
      {
        "id": "s1",
        "title": "Strangers make connections on a train in Juho Kuosmanen's Cannes-contending Compartment No.6, filmed in 2-perf on Kodak 35mm",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/compartment-no-6/"
      },
      {
        "id": "s2",
        "title": "Compartment No. 6 — Cannes press kit",
        "publisher": "Aamu Film Company / Festival de Cannes",
        "url": "https://cdn.festival-cannes.com/media/uploads/2023/03/124120.pdf"
      }
    ],
    "questions": [
      {
        "id": "compartment-space",
        "area": "camera",
        "prompt": {
          "en": "The crew worked in cramped train interiors with a small team and concealed practical lighting. Which approach would you choose for a new production exercise?",
          "nb": "Teamet arbeidet i trange toginteriører med liten stab og skjult praktisk belysning. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "L’équipe travaillait dans des intérieurs de train exigus avec des éclairages discrets. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A equipa trabalhou em interiores ferroviários apertados com iluminação discreta. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse camera and actor paths in a compartment mock-up",
              "nb": "Øv kamera- og skuespillerbaner i en kupémodell",
              "fr": "Répéter les déplacements dans une maquette de compartiment",
              "pt": "Ensaiar movimentos de câmara e atores numa maquete de compartimento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Schedule a full-size crew inside every compartment",
              "nb": "Planlegg full stab inne i hver kupé",
              "fr": "Prévoir toute l’équipe dans chaque compartiment",
              "pt": "Planear toda a equipa dentro de cada compartimento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose angles without testing available space",
              "nb": "Velg vinkler uten å prøve tilgjengelig plass",
              "fr": "Choisir les angles sans tester l’espace disponible",
              "pt": "Escolher ângulos sem testar o espaço disponível"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The crew worked in cramped train interiors with a small team and concealed practical lighting. A practical exercise would be to: Rehearse camera and actor paths in a compartment mock-up.",
          "nb": "Teamet arbeidet i trange toginteriører med liten stab og skjult praktisk belysning. En praktisk øvelse vil være å: Øv kamera- og skuespillerbaner i en kupémodell.",
          "fr": "L’équipe travaillait dans des intérieurs de train exigus avec des éclairages discrets. Un exercice pratique consisterait à : Répéter les déplacements dans une maquette de compartiment.",
          "pt": "A equipa trabalhou em interiores ferroviários apertados com iluminação discreta. Um exercício prático consistiria em: Ensaiar movimentos de câmara e atores numa maquete de compartimento."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "compartment-stock",
        "area": "camera",
        "prompt": {
          "en": "Passi documents a two-perforation 35 mm capture workflow. Which approach would you choose for a new production exercise?",
          "nb": "Passi dokumenterer en 35 mm-opptaksflyt med to perforeringer. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Passi documente une chaîne de capture 35 mm à deux perforations. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Passi documenta captação em 35 mm de duas perfurações. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume all 35 mm workflows consume equal stock",
              "nb": "Anta at alle 35 mm-arbeidsflyter bruker like mye film",
              "fr": "Supposer que tous les procédés 35 mm consomment autant",
              "pt": "Supor que todos os processos de 35 mm consomem o mesmo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare stock consumption and finishing requirements before choosing format",
              "nb": "Sammenlign filmforbruk og etterarbeidskrav før formatvalg",
              "fr": "Comparer consommation de pellicule et finition avant le choix",
              "pt": "Comparar consumo de película e requisitos de acabamento antes da escolha"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer film consumption only from the runtime",
              "nb": "Utled filmforbruk bare fra spilletiden",
              "fr": "Déduire la consommation seulement de la durée du film",
              "pt": "Deduzir consumo apenas da duração do filme"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Passi documents a two-perforation 35 mm capture workflow. A practical exercise would be to: Compare stock consumption and finishing requirements before choosing format.",
          "nb": "Passi dokumenterer en 35 mm-opptaksflyt med to perforeringer. En praktisk øvelse vil være å: Sammenlign filmforbruk og etterarbeidskrav før formatvalg.",
          "fr": "Passi documente une chaîne de capture 35 mm à deux perforations. Un exercice pratique consisterait à : Comparer consommation de pellicule et finition avant le choix.",
          "pt": "Passi documenta captação em 35 mm de duas perfurações. Um exercício prático consistiria em: Comparar consumo de película e requisitos de acabamento antes da escolha."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "compartment-sound",
        "area": "sound",
        "prompt": {
          "en": "The press kit distinguishes the confined setting from the Dolby Atmos presentation format. Which approach would you choose for a new production exercise?",
          "nb": "Pressematerialet skiller det trange miljøet fra Dolby Atmos-visningsformatet. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le dossier distingue le décor exigu du format de diffusion Dolby Atmos. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O dossier distingue o espaço apertado do formato de exibição Dolby Atmos. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer the recording microphones from the exhibition format",
              "nb": "Utled opptaksmikrofoner fra visningsformatet",
              "fr": "Déduire les microphones du format de diffusion",
              "pt": "Deduzir microfones do formato de exibição"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Erase all carriage ambience to simplify the mix",
              "nb": "Fjern all toglyd for å forenkle miksen",
              "fr": "Effacer toute ambiance du train pour simplifier le mix",
              "pt": "Eliminar todo ambiente ferroviário para simplificar a mistura"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test dialogue against layered carriage ambience",
              "nb": "Prøv dialog mot lagdelt kupé- og toglyd",
              "fr": "Tester les dialogues avec des couches d’ambiance ferroviaire",
              "pt": "Testar diálogo com camadas de ambiente ferroviário"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The press kit distinguishes the confined setting from the Dolby Atmos presentation format. A practical exercise would be to: Test dialogue against layered carriage ambience.",
          "nb": "Pressematerialet skiller det trange miljøet fra Dolby Atmos-visningsformatet. En praktisk øvelse vil være å: Prøv dialog mot lagdelt kupé- og toglyd.",
          "fr": "Le dossier distingue le décor exigu du format de diffusion Dolby Atmos. Un exercice pratique consisterait à : Tester les dialogues avec des couches d’ambiance ferroviaire.",
          "pt": "O dossier distingue o espaço apertado do formato de exibição Dolby Atmos. Um exercício prático consistiria em: Testar diálogo com camadas de ambiente ferroviário."
        },
        "sourceIds": [
          "s0",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_eight_mountains_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Mountain logistics, vertical composition and block production",
      "nb": "Fjellogistikk, vertikal komposisjon og blokkproduksjon",
      "fr": "Logistique de montagne, composition verticale et tournage par blocs",
      "pt": "Logística de montanha, composição vertical e filmagem por blocos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "LE OTTO MONTAGNE (THE EIGHT MOUNTAINS)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/le-otto-montagne/"
      },
      {
        "id": "s1",
        "title": "MOUNTAIN MEN Ruben Impens on The Eight Mountains",
        "publisher": "Belgian Society of Cinematographers",
        "url": "https://www.sbcine.be/?p=12053"
      },
      {
        "id": "s4",
        "title": "Shooting at 3,300 Meters: An interview with the creators of The Eight Mountains",
        "publisher": "Screen Slate",
        "url": "https://www.screenslate.com/articles/shooting-3300-meters-interview-creators-eight-mountains"
      }
    ],
    "questions": [
      {
        "id": "eightmountains-access",
        "area": "research",
        "prompt": {
          "en": "The filmmakers describe demanding mountain access and extended location production. Which approach would you choose for a new production exercise?",
          "nb": "Filmskaperne beskriver krevende fjelladkomst og omfattende stedsopptak. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les cinéastes décrivent des accès difficiles et un tournage prolongé en montagne. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os cineastas descrevem acessos difíceis e filmagem prolongada na montanha. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan safe access, weather margins and crew accommodation",
              "nb": "Planlegg trygg adkomst, værmarginer og innkvartering",
              "fr": "Prévoir accès sûr, marge météo et hébergement",
              "pt": "Planear acesso seguro, margem meteorológica e alojamento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Schedule every high-altitude scene without weather margins",
              "nb": "Planlegg alle høyfjellsscener uten værmargin",
              "fr": "Programmer toutes les scènes d’altitude sans marge météo",
              "pt": "Planear todas as cenas de altitude sem margem meteorológica"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume road access for every mountain location",
              "nb": "Anta veiadkomst til alle fjellsteder",
              "fr": "Supposer un accès routier à chaque lieu de montagne",
              "pt": "Supor acesso rodoviário a todos os locais de montanha"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The filmmakers describe demanding mountain access and extended location production. A practical exercise would be to: Plan safe access, weather margins and crew accommodation.",
          "nb": "Filmskaperne beskriver krevende fjelladkomst og omfattende stedsopptak. En praktisk øvelse vil være å: Planlegg trygg adkomst, værmarginer og innkvartering.",
          "fr": "Les cinéastes décrivent des accès difficiles et un tournage prolongé en montagne. Un exercice pratique consisterait à : Prévoir accès sûr, marge météo et hébergement.",
          "pt": "Os cineastas descrevem acessos difíceis e filmagem prolongada na montanha. Um exercício prático consistiria em: Planear acesso seguro, margem meteorológica e alojamento."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "eightmountains-ratio",
        "area": "camera",
        "prompt": {
          "en": "Impens describes the film’s 4:3 spherical framing. Which approach would you choose for a new production exercise?",
          "nb": "Impens beskriver filmens sfæriske 4:3-utsnitt. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Impens décrit le cadrage sphérique 4:3 du film. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Impens descreve o enquadramento esférico 4:3 do filme. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Crop faces arbitrarily to preserve mountain height",
              "nb": "Beskjær ansikter vilkårlig for å bevare fjellhøyden",
              "fr": "Rogner les visages arbitrairement pour conserver la hauteur",
              "pt": "Cortar rostos arbitrariamente para preservar a altura"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare vertical landscape and human scale in narrow and wide frames",
              "nb": "Sammenlign vertikalt landskap og menneskeskala i smale og brede utsnitt",
              "fr": "Comparer paysage vertical et échelle humaine en cadres étroits et larges",
              "pt": "Comparar paisagem vertical e escala humana em quadros estreitos e largos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose the widest frame without testing composition",
              "nb": "Velg bredeste format uten komposisjonsprøver",
              "fr": "Choisir le cadre le plus large sans tester la composition",
              "pt": "Escolher o quadro mais largo sem testar composição"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Impens describes the film’s 4:3 spherical framing. A practical exercise would be to: Compare vertical landscape and human scale in narrow and wide frames.",
          "nb": "Impens beskriver filmens sfæriske 4:3-utsnitt. En praktisk øvelse vil være å: Sammenlign vertikalt landskap og menneskeskala i smale og brede utsnitt.",
          "fr": "Impens décrit le cadrage sphérique 4:3 du film. Un exercice pratique consisterait à : Comparer paysage vertical et échelle humaine en cadres étroits et larges.",
          "pt": "Impens descreve o enquadramento esférico 4:3 do filme. Um exercício prático consistiria em: Comparar paisagem vertical e escala humana em quadros estreitos e largos."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "eightmountains-blocks",
        "area": "research",
        "prompt": {
          "en": "The co-directors describe learning across several shooting blocks. Which approach would you choose for a new production exercise?",
          "nb": "Medregissørene beskriver læring mellom flere opptaksblokker. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les coréalisateurs décrivent un apprentissage entre plusieurs blocs de tournage. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os correalizadores descrevem aprendizagem entre vários blocos de filmagem. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Avoid reviewing any material until production wraps",
              "nb": "Unngå gjennomgang av materiale før alle opptak er ferdige",
              "fr": "Ne revoir aucune image avant la fin du tournage",
              "pt": "Não rever material até ao fim da filmagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Reset the visual approach without documenting changes",
              "nb": "Nullstill bildeuttrykket uten å dokumentere endringer",
              "fr": "Réinitialiser l’approche visuelle sans documenter les changements",
              "pt": "Reiniciar a abordagem visual sem documentar alterações"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review previous footage and continuity before each new block",
              "nb": "Gjennomgå tidligere opptak og kontinuitet før hver ny blokk",
              "fr": "Revoir les images et raccords avant chaque nouveau bloc",
              "pt": "Rever imagens e continuidade antes de cada novo bloco"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The co-directors describe learning across several shooting blocks. A practical exercise would be to: Review previous footage and continuity before each new block.",
          "nb": "Medregissørene beskriver læring mellom flere opptaksblokker. En praktisk øvelse vil være å: Gjennomgå tidligere opptak og kontinuitet før hver ny blokk.",
          "fr": "Les coréalisateurs décrivent un apprentissage entre plusieurs blocs de tournage. Un exercice pratique consisterait à : Revoir les images et raccords avant chaque nouveau bloc.",
          "pt": "Os correalizadores descrevem aprendizagem entre vários blocos de filmagem. Um exercício prático consistiria em: Rever imagens e continuidade antes de cada novo bloco."
        },
        "sourceIds": [
          "s4",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_tori_and_lokita_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Young performers, handheld choreography and diegetic sound",
      "nb": "Unge utøvere, håndholdt koreografi og diegetisk lyd",
      "fr": "Jeunes interprètes, chorégraphie portée et son diégétique",
      "pt": "Jovens intérpretes, coreografia à mão e som diegético"
    },
    "sources": [
      {
        "id": "s0",
        "title": "TORI ET LOKITA (TORI AND LOKITA)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/tori-et-lokita/"
      },
      {
        "id": "s1",
        "title": "Tori et Lokita",
        "publisher": "Les Films du Fleuve",
        "url": "https://lesfilmsdufleuve.be/en/movies/tori-et-lokita/"
      },
      {
        "id": "s2",
        "title": "Benoit Dervaux and the approach for Tori and Lokita",
        "publisher": "Belgian Society of Cinematographers",
        "url": "https://www.sbcine.be/?p=13130"
      },
      {
        "id": "s3",
        "title": "A Conversation with the Dardenne Brothers (Tori and Lokita)",
        "publisher": "Hammer to Nail",
        "url": "https://www.hammertonail.com/interviews/dardenne-brothers/"
      }
    ],
    "questions": [
      {
        "id": "torilokita-casting",
        "area": "research",
        "prompt": {
          "en": "The directors describe extensive casting and five weeks of rehearsals with the leads. Which approach would you choose for a new production exercise?",
          "nb": "Regissørene beskriver omfattende casting og fem ukers prøver med hovedrollene. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les réalisateurs décrivent un casting étendu et cinq semaines de répétitions. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os realizadores descrevem casting amplo e cinco semanas de ensaios. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Provide age-appropriate rehearsals with clear support and boundaries",
              "nb": "Gi alderstilpassede prøver med tydelig støtte og grenser",
              "fr": "Prévoir des répétitions adaptées à l’âge avec soutien et limites",
              "pt": "Proporcionar ensaios adequados à idade com apoio e limites"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use stressful surprises instead of preparation",
              "nb": "Bruk stressende overraskelser i stedet for forberedelse",
              "fr": "Utiliser des surprises stressantes au lieu de préparer",
              "pt": "Usar surpresas stressantes em vez de preparação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assess candidates only by previous screen credits",
              "nb": "Vurder kandidater bare etter tidligere filmroller",
              "fr": "Évaluer les candidats seulement par leurs rôles antérieurs",
              "pt": "Avaliar candidatos apenas por papéis anteriores"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The directors describe extensive casting and five weeks of rehearsals with the leads. A practical exercise would be to: Provide age-appropriate rehearsals with clear support and boundaries.",
          "nb": "Regissørene beskriver omfattende casting og fem ukers prøver med hovedrollene. En praktisk øvelse vil være å: Gi alderstilpassede prøver med tydelig støtte og grenser.",
          "fr": "Les réalisateurs décrivent un casting étendu et cinq semaines de répétitions. Un exercice pratique consisterait à : Prévoir des répétitions adaptées à l’âge avec soutien et limites.",
          "pt": "Os realizadores descrevem casting amplo e cinco semanas de ensaios. Um exercício prático consistiria em: Proporcionar ensaios adequados à idade com apoio e limites."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      },
      {
        "id": "torilokita-height",
        "area": "camera",
        "prompt": {
          "en": "Dervaux describes handheld operation at the actors’ height and extensive rehearsal. Which approach would you choose for a new production exercise?",
          "nb": "Dervaux beskriver håndholdt kamera i skuespillernes høyde og omfattende prøver. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Dervaux décrit une caméra portée à hauteur des acteurs et de longues répétitions. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Dervaux descreve câmara à mão à altura dos atores e ensaios extensos. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Change camera height without considering character perspective",
              "nb": "Endre kamerahøyde uten å vurdere karakterperspektiv",
              "fr": "Changer la hauteur sans considérer le point de vue",
              "pt": "Mudar altura sem considerar a perspetiva da personagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse actor and operator movement at matching eye height",
              "nb": "Øv skuespillerens og fotografens bevegelser i samsvarende øyehøyde",
              "fr": "Répéter les mouvements à hauteur de regard correspondante",
              "pt": "Ensaiar movimentos de ator e operador à altura do olhar"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Shoot every interaction from a distant overhead position",
              "nb": "Film alle møter fra en fjern posisjon ovenfra",
              "fr": "Filmer toutes les interactions de loin en plongée",
              "pt": "Filmar todas as interações de longe e de cima"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Dervaux describes handheld operation at the actors’ height and extensive rehearsal. A practical exercise would be to: Rehearse actor and operator movement at matching eye height.",
          "nb": "Dervaux beskriver håndholdt kamera i skuespillernes høyde og omfattende prøver. En praktisk øvelse vil være å: Øv skuespillerens og fotografens bevegelser i samsvarende øyehøyde.",
          "fr": "Dervaux décrit une caméra portée à hauteur des acteurs et de longues répétitions. Un exercice pratique consisterait à : Répéter les mouvements à hauteur de regard correspondante.",
          "pt": "Dervaux descreve câmara à mão à altura dos atores e ensaios extensos. Um exercício prático consistiria em: Ensaiar movimentos de ator e operador à altura do olhar."
        },
        "sourceIds": [
          "s2",
          "s0"
        ]
      },
      {
        "id": "torilokita-sound",
        "area": "sound",
        "prompt": {
          "en": "The directors describe a diegetic sound principle with location-derived additions. Which approach would you choose for a new production exercise?",
          "nb": "Regissørene beskriver et diegetisk lydprinsipp med tillegg hentet fra stedet. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les réalisateurs décrivent un principe diégétique avec des ajouts issus des lieux. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os realizadores descrevem um princípio diegético com adições oriundas dos locais. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Add a dramatic score to every emotional transition",
              "nb": "Legg dramatisk musikk på hvert følelsesskifte",
              "fr": "Ajouter une musique dramatique à chaque transition émotionnelle",
              "pt": "Adicionar música dramática a cada transição emocional"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace natural sounds with unrelated stock effects",
              "nb": "Erstatt naturlige lyder med uvedkommende standardeffekter",
              "fr": "Remplacer les sons naturels par des effets sans rapport",
              "pt": "Substituir sons naturais por efeitos sem relação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record room tone and practical sounds for subtle editorial additions",
              "nb": "Ta opp romlyd og praktiske lyder for diskrete klippetillegg",
              "fr": "Enregistrer ambiances et sons réels pour des ajouts discrets",
              "pt": "Gravar ambiente e sons reais para adições discretas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The directors describe a diegetic sound principle with location-derived additions. A practical exercise would be to: Record room tone and practical sounds for subtle editorial additions.",
          "nb": "Regissørene beskriver et diegetisk lydprinsipp med tillegg hentet fra stedet. En praktisk øvelse vil være å: Ta opp romlyd og praktiske lyder for diskrete klippetillegg.",
          "fr": "Les réalisateurs décrivent un principe diégétique avec des ajouts issus des lieux. Un exercice pratique consisterait à : Enregistrer ambiances et sons réels pour des ajouts discrets.",
          "pt": "Os realizadores descrevem um princípio diegético com adições oriundas dos locais. Um exercício prático consistiria em: Gravar ambiente e sons reais para adições discretas."
        },
        "sourceIds": [
          "s3",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_about_dry_grasses_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Long screenplay, seasonal continuity and editorial reduction",
      "nb": "Langt manus, årstidskontinuitet og redaksjonell forkorting",
      "fr": "Scénario long, raccords saisonniers et réduction au montage",
      "pt": "Argumento longo, continuidade sazonal e redução na montagem"
    },
    "sources": [
      {
        "id": "s0",
        "title": "KURU OTLAR USTUNE (ABOUT DRY GRASSES)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/kuru-otlar-ustune/"
      },
      {
        "id": "s3",
        "title": "About Dry Grasses - Technical Info",
        "publisher": "Nuri Bilge Ceylan",
        "url": "https://www.nuribilgeceylan.com/movies/kuruotlar/techinfo.php?mid=4"
      },
      {
        "id": "s4",
        "title": "About Dry Grasses - Credits",
        "publisher": "Nuri Bilge Ceylan",
        "url": "https://www.nuribilgeceylan.com/movies/kuruotlar/credits.php?mid=3"
      },
      {
        "id": "s8",
        "title": "Nuri Bilge Ceylan - Director of About Dry Grasses",
        "publisher": "Cineuropa",
        "url": "https://cineuropa.org/en/interview/442832/"
      },
      {
        "id": "s9",
        "title": "Nuri Bilge Ceylan's About Dry Grasses: A dive into the hinterlands through the eyes of Samet",
        "publisher": "Bianet",
        "url": "https://bianet.org/yazi/nuri-bilge-ceylan-s-about-dry-grasses-a-dive-into-the-hinterlands-through-the-eyes-of-samet-288165"
      }
    ],
    "questions": [
      {
        "id": "drygrasses-writing",
        "area": "research",
        "prompt": {
          "en": "Ceylan describes a teaching diary as a story source and a long collaborative writing process. Which approach would you choose for a new production exercise?",
          "nb": "Ceylan beskriver en lærerdagbok som fortellingskilde og en lang felles skriveprosess. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Ceylan décrit un journal d’enseignant et une longue écriture collective. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Ceylan descreve um diário de professor e uma longa escrita colaborativa. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate diary observations from invented character and dialogue",
              "nb": "Skill dagbokobservasjoner fra oppdiktede karakterer og dialog",
              "fr": "Séparer observations du journal et personnages ou dialogues inventés",
              "pt": "Separar observações do diário de personagens e diálogos inventados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat all diary entries as finished screenplay dialogue",
              "nb": "Behandle alle dagboknotater som ferdig manusdialog",
              "fr": "Traiter chaque note comme dialogue définitif",
              "pt": "Tratar todas as notas como diálogo final"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Repeat the original method without testing its suitability",
              "nb": "Gjenta originalmetoden uten å prøve om den passer",
              "fr": "Répéter la méthode originale sans tester sa pertinence",
              "pt": "Repetir o método original sem testar a sua adequação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ceylan describes a teaching diary as a story source and a long collaborative writing process. A practical exercise would be to: Separate diary observations from invented character and dialogue.",
          "nb": "Ceylan beskriver en lærerdagbok som fortellingskilde og en lang felles skriveprosess. En praktisk øvelse vil være å: Skill dagbokobservasjoner fra oppdiktede karakterer og dialog.",
          "fr": "Ceylan décrit un journal d’enseignant et une longue écriture collective. Un exercice pratique consisterait à : Séparer observations du journal et personnages ou dialogues inventés.",
          "pt": "Ceylan descreve um diário de professor e uma longa escrita colaborativa. Um exercício prático consistiria em: Separar observações do diário de personagens e diálogos inventados."
        },
        "sourceIds": [
          "s8",
          "s9"
        ]
      },
      {
        "id": "drygrasses-seasons",
        "area": "camera",
        "prompt": {
          "en": "The official credits distinguish winter and summer camera and makeup teams. Which approach would you choose for a new production exercise?",
          "nb": "De offisielle krediteringene skiller vinter- og sommerteam for kamera og sminke. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les crédits distinguent les équipes caméra et maquillage d’hiver et d’été. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os créditos distinguem equipas de câmara e maquilhagem de inverno e verão. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Repeat the original method without testing its suitability",
              "nb": "Gjenta originalmetoden uten å prøve om den passer",
              "fr": "Répéter la méthode originale sans tester sa pertinence",
              "pt": "Repetir o método original sem testar a sua adequação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Prepare shared reference images and handover notes between seasonal teams",
              "nb": "Lag felles referansebilder og overleveringsnotater mellom sesongteam",
              "fr": "Préparer références visuelles et notes de transmission entre équipes saisonnières",
              "pt": "Preparar referências visuais e notas de passagem entre equipas sazonais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume different seasonal teams need no shared references",
              "nb": "Anta at ulike sesongteam ikke trenger felles referanser",
              "fr": "Supposer que les équipes saisonnières n’ont pas besoin de références communes",
              "pt": "Supor que equipas sazonais dispensam referências comuns"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The official credits distinguish winter and summer camera and makeup teams. A practical exercise would be to: Prepare shared reference images and handover notes between seasonal teams.",
          "nb": "De offisielle krediteringene skiller vinter- og sommerteam for kamera og sminke. En praktisk øvelse vil være å: Lag felles referansebilder og overleveringsnotater mellom sesongteam.",
          "fr": "Les crédits distinguent les équipes caméra et maquillage d’hiver et d’été. Un exercice pratique consisterait à : Préparer références visuelles et notes de transmission entre équipes saisonnières.",
          "pt": "Os créditos distinguem equipas de câmara e maquilhagem de inverno e verão. Um exercício prático consistiria em: Preparar referências visuais e notas de passagem entre equipas sazonais."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "drygrasses-cut",
        "area": "research",
        "prompt": {
          "en": "Ceylan describes shooting a long script and substantially reducing it in editing. Which approach would you choose for a new production exercise?",
          "nb": "Ceylan beskriver opptak av et langt manus og betydelig forkorting i klippen. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Ceylan décrit le tournage d’un long scénario et sa réduction au montage. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Ceylan descreve filmar um argumento longo e reduzi-lo na montagem. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Delete every long scene regardless of narrative purpose",
              "nb": "Slett alle lange scener uansett fortellerfunksjon",
              "fr": "Supprimer toutes les longues scènes sans tenir compte de leur fonction",
              "pt": "Eliminar todas as cenas longas independentemente da função"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Repeat the original method without testing its suitability",
              "nb": "Gjenta originalmetoden uten å prøve om den passer",
              "fr": "Répéter la méthode originale sans tester sa pertinence",
              "pt": "Repetir o método original sem testar a sua adequação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare scene versions by character function rather than duration alone",
              "nb": "Sammenlign sceneversjoner etter karakterfunksjon, ikke bare varighet",
              "fr": "Comparer les versions selon la fonction dramatique plutôt que la seule durée",
              "pt": "Comparar versões pela função dramática e não só pela duração"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ceylan describes shooting a long script and substantially reducing it in editing. A practical exercise would be to: Compare scene versions by character function rather than duration alone.",
          "nb": "Ceylan beskriver opptak av et langt manus og betydelig forkorting i klippen. En praktisk øvelse vil være å: Sammenlign sceneversjoner etter karakterfunksjon, ikke bare varighet.",
          "fr": "Ceylan décrit le tournage d’un long scénario et sa réduction au montage. Un exercice pratique consisterait à : Comparer les versions selon la fonction dramatique plutôt que la seule durée.",
          "pt": "Ceylan descreve filmar um argumento longo e reduzi-lo na montagem. Um exercício prático consistiria em: Comparar versões pela função dramática e não só pela duração."
        },
        "sourceIds": [
          "s8",
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_holy_spider_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Location substitution, costume and production responsibility",
      "nb": "Stedserstatning, tidskoloritt og produksjonsansvar",
      "fr": "Substitution de lieux, époque et responsabilité de production",
      "pt": "Substituição de locais, época e responsabilidade de produção"
    },
    "sources": [
      {
        "id": "s0",
        "title": "HOLY SPIDER",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/holy-spider/"
      },
      {
        "id": "s1",
        "title": "All these prizewinning Iranian movies are complicit: an interview with Holy Spider director Ali Abbasi",
        "publisher": "BFI Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/interviews/all-these-prizewinning-iranian-movies-are-complicit-interview-with-holy-spider-director-ali-abbasi"
      },
      {
        "id": "s4",
        "title": "International Disruptors: Holy Spider Producer Sol Bondy On The Challenges Of Bringing Ali Abbasi's Iran-Set Oscar Contender To Light",
        "publisher": "Deadline / Yahoo Entertainment",
        "url": "https://www.yahoo.com/entertainment/international-disruptors-holy-spider-producer-120018878.html"
      },
      {
        "id": "s5",
        "title": "HOLY SPIDER",
        "publisher": "Goodfellas",
        "url": "https://goodfellas.film/movie/holy-spider/"
      }
    ],
    "questions": [
      {
        "id": "holyspider-location",
        "area": "research",
        "prompt": {
          "en": "The Iranian setting was recreated in Jordan after another location plan failed. Which approach would you choose for a new production exercise?",
          "nb": "Det iranske miljøet ble gjenskapt i Jordan etter at en annen stedsplan falt bort. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le cadre iranien a été recréé en Jordanie après l’échec d’un autre projet de lieu. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O ambiente iraniano foi recriado na Jordânia após falhar outro plano de localização. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Research architecture and transport with regional advisers",
              "nb": "Undersøk arkitektur og transport med regionale rådgivere",
              "fr": "Étudier architecture et transports avec des conseillers régionaux",
              "pt": "Pesquisar arquitetura e transporte com consultores regionais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume any city can substitute for the setting",
              "nb": "Anta at enhver by kan erstatte miljøet",
              "fr": "Supposer que toute ville peut remplacer le décor",
              "pt": "Supor que qualquer cidade pode substituir o ambiente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose locations solely by rental price",
              "nb": "Velg steder utelukkende etter leiepris",
              "fr": "Choisir les lieux uniquement selon le prix",
              "pt": "Escolher locais apenas pelo preço"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Iranian setting was recreated in Jordan after another location plan failed. A practical exercise would be to: Research architecture and transport with regional advisers.",
          "nb": "Det iranske miljøet ble gjenskapt i Jordan etter at en annen stedsplan falt bort. En praktisk øvelse vil være å: Undersøk arkitektur og transport med regionale rådgivere.",
          "fr": "Le cadre iranien a été recréé en Jordanie après l’échec d’un autre projet de lieu. Un exercice pratique consisterait à : Étudier architecture et transports avec des conseillers régionaux.",
          "pt": "O ambiente iraniano foi recriado na Jordânia após falhar outro plano de localização. Um exercício prático consistiria em: Pesquisar arquitetura e transporte com consultores regionais."
        },
        "sourceIds": [
          "s1",
          "s4"
        ]
      },
      {
        "id": "holyspider-period",
        "area": "research",
        "prompt": {
          "en": "Abbasi describes sourcing period-appropriate cars as a design challenge. Which approach would you choose for a new production exercise?",
          "nb": "Abbasi beskriver anskaffelse av tidstypiske biler som en designutfordring. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Abbasi décrit la recherche de voitures d’époque comme un défi de décoration. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Abbasi descreve encontrar carros da época como desafio de direção artística. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat one photograph as a complete period archive",
              "nb": "Behandle ett fotografi som et komplett tidsarkiv",
              "fr": "Traiter une photo comme une archive complète de l’époque",
              "pt": "Tratar uma fotografia como arquivo completo da época"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Build a researched reference board for vehicles and street details",
              "nb": "Lag en kildebasert referansetavle for biler og gatedetaljer",
              "fr": "Créer un tableau documenté de véhicules et détails de rue",
              "pt": "Criar um painel documentado de veículos e detalhes urbanos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use any modern car with a similar colour",
              "nb": "Bruk en moderne bil med lignende farge",
              "fr": "Utiliser une voiture moderne de couleur similaire",
              "pt": "Usar qualquer carro moderno de cor semelhante"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Abbasi describes sourcing period-appropriate cars as a design challenge. A practical exercise would be to: Build a researched reference board for vehicles and street details.",
          "nb": "Abbasi beskriver anskaffelse av tidstypiske biler som en designutfordring. En praktisk øvelse vil være å: Lag en kildebasert referansetavle for biler og gatedetaljer.",
          "fr": "Abbasi décrit la recherche de voitures d’époque comme un défi de décoration. Un exercice pratique consisterait à : Créer un tableau documenté de véhicules et détails de rue.",
          "pt": "Abbasi descreve encontrar carros da época como desafio de direção artística. Um exercício prático consistiria em: Criar um painel documentado de veículos e detalhes urbanos."
        },
        "sourceIds": [
          "s1",
          "s5"
        ]
      },
      {
        "id": "holyspider-responsibility",
        "area": "research",
        "prompt": {
          "en": "Producer testimony identifies political disruption and performer security as production concerns. Which approach would you choose for a new production exercise?",
          "nb": "Produsentintervjuet identifiserer politiske avbrudd og utøvernes sikkerhet som produksjonshensyn. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le témoignage du producteur identifie les perturbations politiques et la sécurité des interprètes. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O testemunho do produtor identifica perturbações políticas e segurança dos intérpretes. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Publicize participant identities without consultation",
              "nb": "Offentliggjør deltakeridentiteter uten samråd",
              "fr": "Publier les identités sans concertation",
              "pt": "Publicar identidades sem consulta"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat budget approval as a substitute for a safety review",
              "nb": "Behandle budsjettgodkjenning som erstatning for sikkerhetsgjennomgang",
              "fr": "Remplacer l’examen de sécurité par l’approbation du budget",
              "pt": "Substituir análise de segurança pela aprovação orçamental"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review consent, exposure risks and contingency plans with the team",
              "nb": "Gjennomgå samtykke, eksponeringsrisiko og reserveplaner med teamet",
              "fr": "Examiner consentement, risques d’exposition et plans de secours avec l’équipe",
              "pt": "Rever consentimento, riscos de exposição e planos alternativos com a equipa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Producer testimony identifies political disruption and performer security as production concerns. A practical exercise would be to: Review consent, exposure risks and contingency plans with the team.",
          "nb": "Produsentintervjuet identifiserer politiske avbrudd og utøvernes sikkerhet som produksjonshensyn. En praktisk øvelse vil være å: Gjennomgå samtykke, eksponeringsrisiko og reserveplaner med teamet.",
          "fr": "Le témoignage du producteur identifie les perturbations politiques et la sécurité des interprètes. Un exercice pratique consisterait à : Examiner consentement, risques d’exposition et plans de secours avec l’équipe.",
          "pt": "O testemunho do produtor identifica perturbações políticas e segurança dos intérpretes. Um exercício prático consistiria em: Rever consentimento, riscos de exposição e planos alternativos com a equipa."
        },
        "sourceIds": [
          "s4",
          "s0"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_pot_au_feu_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Kitchen choreography, sunlight and culinary sound",
      "nb": "Kjøkkenkoreografi, sollys og matlagingslyd",
      "fr": "Chorégraphie culinaire, soleil et sons de cuisine",
      "pt": "Coreografia culinária, luz solar e sons de cozinha"
    },
    "sources": [
      {
        "id": "s2",
        "title": "La Passion de Dodin Bouffant au cinéma le 8 novembre",
        "publisher": "Bureau d'Accueil des Tournages / Région Pays de la Loire",
        "url": "https://www.solutions-tournages-paysdelaloire.fr/actus/la-passion-de-dodin-bouffant-au-cinema-le-8-novembre/"
      },
      {
        "id": "s4",
        "title": "The Taste of Things: A Feast for the Eyes",
        "publisher": "American Cinematographer / American Society of Cinematographers",
        "url": "https://theasc.com/article/the-taste-of-things-cinematography/"
      },
      {
        "id": "s5",
        "title": "The Taste of Things - BFI Southbank Programme Notes",
        "publisher": "British Film Institute",
        "url": "https://bfidatadigipres.github.io/new%20releases/2024/02/14/taste-of-things/"
      },
      {
        "id": "s7",
        "title": "Interview: Juliette Binoche on Cooking in The Taste of Things",
        "publisher": "Eater",
        "url": "https://www.eater.com/24059659/the-taste-of-things-juliette-binoche-pierre-gagnaire-interview-food-styling"
      },
      {
        "id": "s8",
        "title": "Trần Anh Hùng's Delicious Culinary Movie The Taste of Things Has No Soundtrack. Here's Why",
        "publisher": "MovieMaker Magazine",
        "url": "https://www.moviemaker.com/the-taste-of-things-no-soundtrack-tran-anh-hung/"
      }
    ],
    "questions": [
      {
        "id": "potaufeu-food",
        "area": "research",
        "prompt": {
          "en": "The performers describe culinary coaching and real-food performance. Which approach would you choose for a new production exercise?",
          "nb": "Utøverne beskriver kulinarisk veiledning og arbeid med ekte mat. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les interprètes décrivent un accompagnement culinaire et de vrais aliments. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os intérpretes descrevem orientação culinária e trabalho com alimentos reais. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a safe cooking routine with a culinary adviser",
              "nb": "Øv en trygg matlagingsrutine med en kulinarisk rådgiver",
              "fr": "Répéter une routine de cuisine sûre avec un conseiller culinaire",
              "pt": "Ensaiar uma rotina culinária segura com um consultor"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use unrelated hand movements regardless of the recipe",
              "nb": "Bruk uvedkommende håndbevegelser uansett oppskrift",
              "fr": "Utiliser des gestes sans rapport avec la recette",
              "pt": "Usar gestos sem relação com a receita"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore food continuity between takes",
              "nb": "Ignorer matens kontinuitet mellom opptak",
              "fr": "Ignorer les raccords alimentaires entre prises",
              "pt": "Ignorar continuidade dos alimentos entre tomadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The performers describe culinary coaching and real-food performance. A practical exercise would be to: Rehearse a safe cooking routine with a culinary adviser.",
          "nb": "Utøverne beskriver kulinarisk veiledning og arbeid med ekte mat. En praktisk øvelse vil være å: Øv en trygg matlagingsrutine med en kulinarisk rådgiver.",
          "fr": "Les interprètes décrivent un accompagnement culinaire et de vrais aliments. Un exercice pratique consisterait à : Répéter une routine de cuisine sûre avec un conseiller culinaire.",
          "pt": "Os intérpretes descrevem orientação culinária e trabalho com alimentos reais. Um exercício prático consistiria em: Ensaiar uma rotina culinária segura com um consultor."
        },
        "sourceIds": [
          "s7",
          "s5"
        ]
      },
      {
        "id": "potaufeu-sun",
        "area": "camera",
        "prompt": {
          "en": "The cinematography account discusses the east-facing kitchen and a sunlight-led strategy. Which approach would you choose for a new production exercise?",
          "nb": "Fotointervjuet omtaler det østvendte kjøkkenet og en sollysbasert strategi. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le témoignage photo décrit la cuisine orientée à l’est et une stratégie fondée sur le soleil. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O relato de fotografia descreve a cozinha voltada a leste e estratégia baseada no sol. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Light every angle independently without reference images",
              "nb": "Lyssett hver vinkel separat uten referansebilder",
              "fr": "Éclairer chaque angle sans images de référence",
              "pt": "Iluminar cada ângulo sem imagens de referência"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test the room at different hours and plan matching light",
              "nb": "Prøv rommet til ulike tider og planlegg samsvarende lys",
              "fr": "Tester la pièce à différentes heures et prévoir des raccords lumineux",
              "pt": "Testar a sala a horas diferentes e planear continuidade de luz"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume east-facing windows give constant light",
              "nb": "Anta at østvendte vinduer gir konstant lys",
              "fr": "Supposer que les fenêtres à l’est donnent une lumière constante",
              "pt": "Supor que janelas a leste dão luz constante"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematography account discusses the east-facing kitchen and a sunlight-led strategy. A practical exercise would be to: Test the room at different hours and plan matching light.",
          "nb": "Fotointervjuet omtaler det østvendte kjøkkenet og en sollysbasert strategi. En praktisk øvelse vil være å: Prøv rommet til ulike tider og planlegg samsvarende lys.",
          "fr": "Le témoignage photo décrit la cuisine orientée à l’est et une stratégie fondée sur le soleil. Un exercice pratique consisterait à : Tester la pièce à différentes heures et prévoir des raccords lumineux.",
          "pt": "O relato de fotografia descreve a cozinha voltada a leste e estratégia baseada no sol. Um exercício prático consistiria em: Testar a sala a horas diferentes e planear continuidade de luz."
        },
        "sourceIds": [
          "s4",
          "s2"
        ]
      },
      {
        "id": "potaufeu-sound",
        "area": "sound",
        "prompt": {
          "en": "Hùng describes cooking and environmental sound taking the place of a conventional score. Which approach would you choose for a new production exercise?",
          "nb": "Hùng beskriver matlagingslyd og miljølyd som erstatning for konvensjonell filmmusikk. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Hùng décrit les sons culinaires et ambiants à la place d’une musique conventionnelle. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Hùng descreve sons culinários e ambientais em vez de música convencional. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Add orchestral music to every cooking movement",
              "nb": "Legg orkestermusikk på hver matlagingsbevegelse",
              "fr": "Ajouter une musique orchestrale à chaque geste",
              "pt": "Adicionar música orquestral a cada gesto culinário"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all utensil sounds from the mix",
              "nb": "Fjern alle redskapslyder fra miksen",
              "fr": "Retirer tous les sons d’ustensiles du mixage",
              "pt": "Retirar todos os sons de utensílios da mistura"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Build rhythm from recorded kitchen sounds and room ambience",
              "nb": "Bygg rytme av opptatte kjøkkenlyder og romklang",
              "fr": "Construire le rythme à partir des sons de cuisine et de l’ambiance",
              "pt": "Construir ritmo com sons de cozinha gravados e ambiente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Hùng describes cooking and environmental sound taking the place of a conventional score. A practical exercise would be to: Build rhythm from recorded kitchen sounds and room ambience.",
          "nb": "Hùng beskriver matlagingslyd og miljølyd som erstatning for konvensjonell filmmusikk. En praktisk øvelse vil være å: Bygg rytme av opptatte kjøkkenlyder og romklang.",
          "fr": "Hùng décrit les sons culinaires et ambiants à la place d’une musique conventionnelle. Un exercice pratique consisterait à : Construire le rythme à partir des sons de cuisine et de l’ambiance.",
          "pt": "Hùng descreve sons culinários e ambientais em vez de música convencional. Um exercício prático consistiria em: Construir ritmo com sons de cozinha gravados e ambiente."
        },
        "sourceIds": [
          "s8",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_aheds_knee_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Schedule constraints, expressive camera and format evidence",
      "nb": "Tidsbegrensning, ekspressivt kamera og formatkilder",
      "fr": "Contraintes de calendrier, caméra expressive et preuves de format",
      "pt": "Restrições de calendário, câmara expressiva e provas de formato"
    },
    "sources": [
      {
        "id": "s0",
        "title": "HA’BERECH (AHED'S KNEE)",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/ha-berech/"
      },
      {
        "id": "s1",
        "title": "A Boxing Contest Between the Movie and the Viewer: Nadav Lapid on Ahed's Knee",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/113985-interview-nadav-lapid-aheds-knee/"
      },
      {
        "id": "s2",
        "title": "Ahed's Knee",
        "publisher": "European Film Academy",
        "url": "https://www.europeanfilmawards.eu/efa-movie/aheds-knee/"
      },
      {
        "id": "s4",
        "title": "Ahed's Knee",
        "publisher": "Kino Lorber",
        "url": "https://kinolorber.com/film/aheds-knee"
      }
    ],
    "questions": [
      {
        "id": "ahedsknee-schedule",
        "area": "research",
        "prompt": {
          "en": "Lapid describes an eighteen-day shoot as a formal constraint. Which approach would you choose for a new production exercise?",
          "nb": "Lapid beskriver et atten dagers opptak som en formmessig begrensning. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Lapid décrit un tournage de dix-huit jours comme contrainte formelle. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Lapid descreve uma filmagem de dezoito dias como restrição formal. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Prioritise essential scenes and rehearse complex movements before shooting",
              "nb": "Prioriter nødvendige scener og øv komplekse bevegelser før opptak",
              "fr": "Prioriser les scènes essentielles et répéter les mouvements complexes",
              "pt": "Priorizar cenas essenciais e ensaiar movimentos complexos antes de filmar"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Copy the schedule regardless of the new script",
              "nb": "Kopier tidsplanen uansett nytt manus",
              "fr": "Copier le calendrier quel que soit le nouveau scénario",
              "pt": "Copiar o calendário independentemente do novo argumento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove rehearsal time to increase shot count",
              "nb": "Fjern prøvetid for å øke antallet opptak",
              "fr": "Supprimer les répétitions pour augmenter le nombre de plans",
              "pt": "Eliminar ensaios para aumentar o número de planos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lapid describes an eighteen-day shoot as a formal constraint. A practical exercise would be to: Prioritise essential scenes and rehearse complex movements before shooting.",
          "nb": "Lapid beskriver et atten dagers opptak som en formmessig begrensning. En praktisk øvelse vil være å: Prioriter nødvendige scener og øv komplekse bevegelser før opptak.",
          "fr": "Lapid décrit un tournage de dix-huit jours comme contrainte formelle. Un exercice pratique consisterait à : Prioriser les scènes essentielles et répéter les mouvements complexes.",
          "pt": "Lapid descreve uma filmagem de dezoito dias como restrição formal. Um exercício prático consistiria em: Priorizar cenas essenciais e ensaiar movimentos complexos antes de filmar."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "ahedsknee-camera",
        "area": "camera",
        "prompt": {
          "en": "Lapid describes the camera as an active participant in collaboration with Goldman. Which approach would you choose for a new production exercise?",
          "nb": "Lapid beskriver kameraet som aktiv deltaker i samarbeidet med Goldman. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Lapid décrit la caméra comme participante active avec Goldman. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Lapid descreve a câmara como participante ativa na colaboração com Goldman. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use movement solely to cover editing errors",
              "nb": "Bruk bevegelse bare for å skjule klippefeil",
              "fr": "Utiliser le mouvement uniquement pour masquer les erreurs de montage",
              "pt": "Usar movimento apenas para ocultar erros de montagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare subjective camera movement with a restrained observer frame",
              "nb": "Sammenlign subjektiv kamerabevegelse med et tilbakeholdent observatørutsnitt",
              "fr": "Comparer mouvement subjectif et cadre d’observation sobre",
              "pt": "Comparar movimento subjetivo e quadro de observação contido"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Move the camera randomly during every line",
              "nb": "Beveg kameraet tilfeldig under alle replikker",
              "fr": "Bouger la caméra au hasard à chaque réplique",
              "pt": "Mover a câmara ao acaso durante todas as falas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Lapid describes the camera as an active participant in collaboration with Goldman. A practical exercise would be to: Compare subjective camera movement with a restrained observer frame.",
          "nb": "Lapid beskriver kameraet som aktiv deltaker i samarbeidet med Goldman. En praktisk øvelse vil være å: Sammenlign subjektiv kamerabevegelse med et tilbakeholdent observatørutsnitt.",
          "fr": "Lapid décrit la caméra comme participante active avec Goldman. Un exercice pratique consisterait à : Comparer mouvement subjectif et cadre d’observation sobre.",
          "pt": "Lapid descreve a câmara como participante ativa na colaboração com Goldman. Um exercício prático consistiria em: Comparar movimento subjetivo e quadro de observação contido."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "ahedsknee-format",
        "area": "camera",
        "prompt": {
          "en": "The distributor specifies a widescreen exhibition ratio without documenting acquisition hardware. Which approach would you choose for a new production exercise?",
          "nb": "Distributøren angir bredformatvisning uten å dokumentere opptaksutstyr. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le distributeur précise un format de projection sans documenter le matériel de capture. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O distribuidor indica formato de exibição sem documentar equipamento de captação. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer a specific sensor from the aspect ratio alone",
              "nb": "Utled en bestemt sensor bare fra bildeformatet",
              "fr": "Déduire un capteur précis du seul rapport d’image",
              "pt": "Deduzir sensor específico apenas da proporção de imagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat distribution metadata as a complete camera report",
              "nb": "Behandle distribusjonsmetadata som full kamerarapport",
              "fr": "Traiter les métadonnées de distribution comme rapport caméra complet",
              "pt": "Tratar metadados de distribuição como relatório de câmara completo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate known delivery ratio from unknown acquisition details",
              "nb": "Skill kjent visningsformat fra ukjente opptaksdetaljer",
              "fr": "Séparer le format de diffusion connu des détails de capture inconnus",
              "pt": "Separar formato de exibição conhecido de detalhes de captação desconhecidos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The distributor specifies a widescreen exhibition ratio without documenting acquisition hardware. A practical exercise would be to: Separate known delivery ratio from unknown acquisition details.",
          "nb": "Distributøren angir bredformatvisning uten å dokumentere opptaksutstyr. En praktisk øvelse vil være å: Skill kjent visningsformat fra ukjente opptaksdetaljer.",
          "fr": "Le distributeur précise un format de projection sans documenter le matériel de capture. Un exercice pratique consisterait à : Séparer le format de diffusion connu des détails de capture inconnus.",
          "pt": "O distribuidor indica formato de exibição sem documentar equipamento de captação. Um exercício prático consistiria em: Separar formato de exibição conhecido de detalhes de captação desconhecidos."
        },
        "sourceIds": [
          "s4",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_nitram_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Production constraints, image provenance and responsible representation",
      "nb": "Produksjonsbegrensninger, bildeproveniens og ansvarlig fremstilling",
      "fr": "Contraintes de production, provenance des images et représentation responsable",
      "pt": "Restrições de produção, proveniência de imagens e representação responsável"
    },
    "sources": [
      {
        "id": "s0",
        "title": "NITRAM",
        "publisher": "Festival de Cannes",
        "url": "https://cinemadedemain.festival-cannes.com/en/f/nitram/"
      },
      {
        "id": "s1",
        "title": "Nitram",
        "publisher": "Screen Australia",
        "url": "https://www.screenaustralia.gov.au/screen-guide/nitram-38629/"
      },
      {
        "id": "s3",
        "title": "Germain McMicking ACS on Justin Kurzel's Nitram",
        "publisher": "Australian Cinematographer Magazine",
        "url": "https://acmag.com.au/2021/09/01/nitram/"
      },
      {
        "id": "s4",
        "title": "NITRAM press kit",
        "publisher": "Melbourne International Film Festival / Good Thing Productions",
        "url": "https://miffindustry.com/wp-content/uploads/2021/08/NITRAM-press-kit-14-June-21-V2.pdf"
      }
    ],
    "questions": [
      {
        "id": "nitram-format",
        "area": "camera",
        "prompt": {
          "en": "McMicking describes a film-processing constraint and the decision to use digital capture. Which approach would you choose for a new production exercise?",
          "nb": "McMicking beskriver en fremkallingsbegrensning og valget av digitalt opptak. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "McMicking décrit une contrainte de laboratoire et le choix de la capture numérique. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "McMicking descreve uma restrição de laboratório e a escolha de captação digital. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare feasible workflows with the desired image character",
              "nb": "Sammenlign gjennomførbare arbeidsflyter med ønsket bildekarakter",
              "fr": "Comparer les procédés réalisables au caractère d’image souhaité",
              "pt": "Comparar fluxos viáveis com o carácter visual pretendido"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose a format without checking laboratory availability",
              "nb": "Velg format uten å sjekke laboratorietilgang",
              "fr": "Choisir un format sans vérifier les laboratoires disponibles",
              "pt": "Escolher formato sem verificar disponibilidade de laboratório"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume image texture depends only on the capture medium",
              "nb": "Anta at bildetekstur bare avhenger av opptaksmediet",
              "fr": "Supposer que la texture dépend seulement du support de capture",
              "pt": "Supor que textura depende apenas do meio de captação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "McMicking describes a film-processing constraint and the decision to use digital capture. A practical exercise would be to: Compare feasible workflows with the desired image character.",
          "nb": "McMicking beskriver en fremkallingsbegrensning og valget av digitalt opptak. En praktisk øvelse vil være å: Sammenlign gjennomførbare arbeidsflyter med ønsket bildekarakter.",
          "fr": "McMicking décrit une contrainte de laboratoire et le choix de la capture numérique. Un exercice pratique consisterait à : Comparer les procédés réalisables au caractère d’image souhaité.",
          "pt": "McMicking descreve uma restrição de laboratório e a escolha de captação digital. Um exercício prático consistiria em: Comparar fluxos viáveis com o carácter visual pretendido."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "nitram-archive",
        "area": "research",
        "prompt": {
          "en": "The craft dossier distinguishes video-source material from the principal digital photography. Which approach would you choose for a new production exercise?",
          "nb": "Fagdokumentasjonen skiller videokildemateriale fra hovedopptakene i digitalt format. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le dossier distingue les sources vidéo de la photographie numérique principale. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O dossiê distingue material de vídeo da fotografia digital principal. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard provenance once materials enter the edit",
              "nb": "Kast proveniens når materialet kommer inn i klippen",
              "fr": "Abandonner la provenance dès le montage",
              "pt": "Descartar proveniência quando o material entra na montagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Label archival and newly recorded material separately",
              "nb": "Merk arkivmateriale og nyinnspilt materiale separat",
              "fr": "Identifier séparément archives et images nouvellement tournées",
              "pt": "Identificar separadamente arquivo e material recém-gravado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present recreated imagery as original archive footage",
              "nb": "Presenter rekonstruerte bilder som originale arkivopptak",
              "fr": "Présenter les images recréées comme archives originales",
              "pt": "Apresentar imagens recriadas como arquivo original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The craft dossier distinguishes video-source material from the principal digital photography. A practical exercise would be to: Label archival and newly recorded material separately.",
          "nb": "Fagdokumentasjonen skiller videokildemateriale fra hovedopptakene i digitalt format. En praktisk øvelse vil være å: Merk arkivmateriale og nyinnspilt materiale separat.",
          "fr": "Le dossier distingue les sources vidéo de la photographie numérique principale. Un exercice pratique consisterait à : Identifier séparément archives et images nouvellement tournées.",
          "pt": "O dossiê distingue material de vídeo da fotografia digital principal. Um exercício prático consistiria em: Identificar separadamente arquivo e material recém-gravado."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "nitram-ethics",
        "area": "research",
        "prompt": {
          "en": "The institutional records establish the film as a dramatized production rather than a historical archive. Which approach would you choose for a new production exercise?",
          "nb": "Institusjonskildene dokumenterer filmen som en dramatisert produksjon, ikke et historisk arkiv. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les sources institutionnelles identifient une œuvre dramatisée et non une archive historique. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "As fontes institucionais identificam uma obra dramatizada e não um arquivo histórico. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every dramatic choice as a documented historical fact",
              "nb": "Behandle hvert dramatiske valg som dokumentert historisk faktum",
              "fr": "Traiter chaque choix dramatique comme fait historique établi",
              "pt": "Tratar cada escolha dramática como facto histórico documentado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Omit the distinction between fiction and historical evidence",
              "nb": "Utelat skillet mellom fiksjon og historiske bevis",
              "fr": "Omettre la distinction entre fiction et preuves historiques",
              "pt": "Omitir distinção entre ficção e provas históricas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Focus a fictional ethical review on affected communities and factual boundaries",
              "nb": "Rett en fiktiv etikkgjennomgang mot berørte samfunn og faktagrenser",
              "fr": "Centrer une revue éthique fictive sur les communautés touchées et les limites factuelles",
              "pt": "Centrar revisão ética fictícia nas comunidades afetadas e limites factuais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The institutional records establish the film as a dramatized production rather than a historical archive. A practical exercise would be to: Focus a fictional ethical review on affected communities and factual boundaries.",
          "nb": "Institusjonskildene dokumenterer filmen som en dramatisert produksjon, ikke et historisk arkiv. En praktisk øvelse vil være å: Rett en fiktiv etikkgjennomgang mot berørte samfunn og faktagrenser.",
          "fr": "Les sources institutionnelles identifient une œuvre dramatisée et non une archive historique. Un exercice pratique consisterait à : Centrer une revue éthique fictive sur les communautés touchées et les limites factuelles.",
          "pt": "As fontes institucionais identificam uma obra dramatizada e não um arquivo histórico. Um exercício prático consistiria em: Centrar revisão ética fictícia nas comunidades afetadas e limites factuais."
        },
        "sourceIds": [
          "s0",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_stars_at_noon_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Location identity, humid light and technical metadata",
      "nb": "Stedsidentitet, fuktig lys og tekniske metadata",
      "fr": "Identité des lieux, lumière humide et métadonnées techniques",
      "pt": "Identidade dos locais, luz húmida e metadados técnicos"
    },
    "sources": [
      {
        "id": "s0",
        "title": "STARS AT NOON",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/stars-at-noon/"
      },
      {
        "id": "s1",
        "title": "Meeting the team of Claire Denis' Stars at Noon",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2022/meeting-the-team-of-claire-denis-stars-at-noon/"
      },
      {
        "id": "s2",
        "title": "Stars at Noon",
        "publisher": "Unifrance",
        "url": "https://en.unifrance.org/movie/51655/stars-at-noon"
      },
      {
        "id": "s3",
        "title": "Stars at noon",
        "publisher": "Ad Vitam",
        "url": "https://www.advitamdistribution.com/films/stars-at-noon/"
      },
      {
        "id": "s4",
        "title": "ARRI technology behind the scenes of Cannes 2022",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/arri-technology-in-cannes-2022"
      },
      {
        "id": "s5",
        "title": "Eric Gautier, voyages en lumière",
        "publisher": "CNC",
        "url": "https://www.cnc.fr/cinema/actualites/eric-gautier-voyages-en-lumiere_1973312"
      }
    ],
    "questions": [
      {
        "id": "starsnoon-place",
        "area": "research",
        "prompt": {
          "en": "Cannes records Panama as a shooting location and Unifrance identifies the coproduction. Which approach would you choose for a new production exercise?",
          "nb": "Cannes dokumenterer Panama som opptakssted og Unifrance identifiserer samproduksjonen. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Cannes documente le tournage au Panama et Unifrance identifie la coproduction. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Cannes documenta filmagens no Panamá e Unifrance identifica a coprodução. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Record story setting, shooting country and financing credits separately",
              "nb": "Registrer historiens miljø, opptaksland og finansieringskreditering separat",
              "fr": "Consigner séparément cadre narratif, pays de tournage et crédits financiers",
              "pt": "Registar separadamente ambiente narrativo, país de filmagem e créditos financeiros"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer the story setting from the production country alone",
              "nb": "Utled historiens miljø bare fra produksjonslandet",
              "fr": "Déduire le cadre narratif du seul pays de production",
              "pt": "Deduzir ambiente narrativo apenas do país de produção"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat all locations as interchangeable backgrounds",
              "nb": "Behandle alle steder som utskiftbare bakgrunner",
              "fr": "Traiter tous les lieux comme fonds interchangeables",
              "pt": "Tratar todos os locais como fundos intercambiáveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Cannes records Panama as a shooting location and Unifrance identifies the coproduction. A practical exercise would be to: Record story setting, shooting country and financing credits separately.",
          "nb": "Cannes dokumenterer Panama som opptakssted og Unifrance identifiserer samproduksjonen. En praktisk øvelse vil være å: Registrer historiens miljø, opptaksland og finansieringskreditering separat.",
          "fr": "Cannes documente le tournage au Panama et Unifrance identifie la coproduction. Un exercice pratique consisterait à : Consigner séparément cadre narratif, pays de tournage et crédits financiers.",
          "pt": "Cannes documenta filmagens no Panamá e Unifrance identifica a coprodução. Um exercício prático consistiria em: Registar separadamente ambiente narrativo, país de filmagem e créditos financeiros."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "starsnoon-humidity",
        "area": "camera",
        "prompt": {
          "en": "Gautier describes concentrating on performers’ skin and humidity. Which approach would you choose for a new production exercise?",
          "nb": "Gautier beskriver fokus på utøvernes hud og luftfuktighet. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Gautier décrit son attention à la peau et à l’humidité. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Gautier descreve atenção à pele dos intérpretes e à humidade. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume weather has no influence on skin rendering",
              "nb": "Anta at vær ikke påvirker hudgjengivelse",
              "fr": "Supposer que la météo ne change pas le rendu de peau",
              "pt": "Supor que o tempo não influencia a reprodução da pele"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test close framing and reflected light in a controlled humid look",
              "nb": "Prøv nære utsnitt og reflektert lys i et kontrollert fuktig uttrykk",
              "fr": "Tester plans rapprochés et lumière réfléchie dans un rendu humide contrôlé",
              "pt": "Testar planos próximos e luz refletida num visual húmido controlado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Correct every visible reflection before judging the look",
              "nb": "Korriger alle synlige refleksjoner før uttrykket vurderes",
              "fr": "Corriger chaque reflet avant d’évaluer le rendu",
              "pt": "Corrigir todos os reflexos antes de avaliar o visual"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Gautier describes concentrating on performers’ skin and humidity. A practical exercise would be to: Test close framing and reflected light in a controlled humid look.",
          "nb": "Gautier beskriver fokus på utøvernes hud og luftfuktighet. En praktisk øvelse vil være å: Prøv nære utsnitt og reflektert lys i et kontrollert fuktig uttrykk.",
          "fr": "Gautier décrit son attention à la peau et à l’humidité. Un exercice pratique consisterait à : Tester plans rapprochés et lumière réfléchie dans un rendu humide contrôlé.",
          "pt": "Gautier descreve atenção à pele dos intérpretes e à humidade. Um exercício prático consistiria em: Testar planos próximos e luz refletida num visual húmido controlado."
        },
        "sourceIds": [
          "s5",
          "s4"
        ]
      },
      {
        "id": "starsnoon-versions",
        "area": "research",
        "prompt": {
          "en": "Festival, industry and distributor records give different running times. Which approach would you choose for a new production exercise?",
          "nb": "Festival-, bransje- og distributørkilder angir ulike spilletider. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les sources de festival, professionnelles et de distribution donnent des durées différentes. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Fontes de festival, indústria e distribuição indicam durações diferentes. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Average runtimes and report the result as exact",
              "nb": "Beregn gjennomsnittet og oppgi det som eksakt",
              "fr": "Moyenner les durées et présenter le résultat comme exact",
              "pt": "Calcular média das durações e apresentar como exata"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every discrepancy proves a new director’s cut",
              "nb": "Anta at hvert avvik beviser en ny regissørversjon",
              "fr": "Supposer que chaque écart prouve une nouvelle version du réalisateur",
              "pt": "Supor que cada diferença prova uma nova versão do realizador"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve each runtime with its source and version context",
              "nb": "Behold hver spilletid med kilde og versjonskontekst",
              "fr": "Conserver chaque durée avec sa source et son contexte de version",
              "pt": "Preservar cada duração com fonte e contexto de versão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Festival, industry and distributor records give different running times. A practical exercise would be to: Preserve each runtime with its source and version context.",
          "nb": "Festival-, bransje- og distributørkilder angir ulike spilletider. En praktisk øvelse vil være å: Behold hver spilletid med kilde og versjonskontekst.",
          "fr": "Les sources de festival, professionnelles et de distribution donnent des durées différentes. Un exercice pratique consisterait à : Conserver chaque durée avec sa source et son contexte de version.",
          "pt": "Fontes de festival, indústria e distribuição indicam durações diferentes. Um exercício prático consistiria em: Preservar cada duração com fonte e contexto de versão."
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
    "scenarioId": "scenario_the_little_sister_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Casting, adaptation and natural-light multicamera work",
      "nb": "Casting, adaptasjon og flerkameraarbeid med naturlig lys",
      "fr": "Casting, adaptation et multicaméra en lumière naturelle",
      "pt": "Casting, adaptação e multicâmara com luz natural"
    },
    "sources": [
      {
        "id": "s0",
        "title": "LA PETITE DERNIÈRE",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/la-petite-derniere/"
      },
      {
        "id": "s1",
        "title": "The Little Sister English Press Kit",
        "publisher": "June Films / Katuh Studio / Festival de Cannes",
        "url": "https://cdn.festival-cannes.com/media/uploads/2025/05/189424.pdf"
      },
      {
        "id": "s2",
        "title": "Jérémie Attard voit triple avec l’ALEXA Mini pour « La Petite Dernière »",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-fr/jeremie-attard-en-alexa-mini-pour-la-petite-derniere"
      },
      {
        "id": "s3",
        "title": "Interview with Hafsia Herzi, director of The Little Sister",
        "publisher": "SNCF Group",
        "url": "https://www.groupe-sncf.com/en/group/shoots/interview-hafsia-herzi"
      }
    ],
    "questions": [
      {
        "id": "littlesister-adapt",
        "area": "research",
        "prompt": {
          "en": "The press kit documents adaptation and field research. Which approach would you choose for a new production exercise?",
          "nb": "Pressematerialet dokumenterer adaptasjon og feltresearch. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le dossier documente adaptation et recherche de terrain. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O dossier documenta adaptação e pesquisa de campo. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate observations from fictional scenes",
              "nb": "Skill observasjoner fra fiktive scener",
              "fr": "Séparer observations et scènes fictives",
              "pt": "Separar observações de cenas fictícias"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the novel as a finished shooting script",
              "nb": "Behandle romanen som ferdig opptaksmanus",
              "fr": "Traiter le roman comme scénario de tournage définitif",
              "pt": "Tratar o romance como argumento de rodagem definitivo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace field research with generic stereotypes",
              "nb": "Erstatt feltresearch med generelle stereotypier",
              "fr": "Remplacer la recherche par des stéréotypes",
              "pt": "Substituir pesquisa por estereótipos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The press kit documents adaptation and field research. A practical exercise would be to: Separate observations from fictional scenes.",
          "nb": "Pressematerialet dokumenterer adaptasjon og feltresearch. En praktisk øvelse vil være å: Skill observasjoner fra fiktive scener.",
          "fr": "Le dossier documente adaptation et recherche de terrain. Un exercice pratique consisterait à : Séparer observations et scènes fictives.",
          "pt": "O dossier documenta adaptação e pesquisa de campo. Um exercício prático consistiria em: Separar observações de cenas fictícias."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "littlesister-casting",
        "area": "research",
        "prompt": {
          "en": "Casting callbacks included camera tests and a long search for the lead. Which approach would you choose for a new production exercise?",
          "nb": "Castingprøvene omfattet kameratester og et langt søk etter hovedrollen. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les rappels incluaient des essais caméra et une longue recherche du premier rôle. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "As chamadas incluíram testes de câmara e uma longa procura da protagonista. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Skip testing the lead in the intended visual style",
              "nb": "Hopp over prøver av hovedrollen i planlagt bildestil",
              "fr": "Omettre les essais dans le style visuel prévu",
              "pt": "Omitir testes no estilo visual previsto"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare performance and camera tests with informed consent",
              "nb": "Sammenlign skuespiller- og kameraprøver med informert samtykke",
              "fr": "Comparer jeu et essais caméra avec consentement éclairé",
              "pt": "Comparar atuação e testes de câmara com consentimento informado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Select solely by prior professional credits",
              "nb": "Velg utelukkende etter tidligere profesjonelle roller",
              "fr": "Choisir uniquement selon les rôles professionnels antérieurs",
              "pt": "Escolher apenas por créditos profissionais anteriores"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Casting callbacks included camera tests and a long search for the lead. A practical exercise would be to: Compare performance and camera tests with informed consent.",
          "nb": "Castingprøvene omfattet kameratester og et langt søk etter hovedrollen. En praktisk øvelse vil være å: Sammenlign skuespiller- og kameraprøver med informert samtykke.",
          "fr": "Les rappels incluaient des essais caméra et une longue recherche du premier rôle. Un exercice pratique consisterait à : Comparer jeu et essais caméra avec consentement éclairé.",
          "pt": "As chamadas incluíram testes de câmara e uma longa procura da protagonista. Um exercício prático consistiria em: Comparar atuação e testes de câmara com consentimento informado."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "littlesister-coverage",
        "area": "camera",
        "prompt": {
          "en": "Attard describes long takes with three cameras and extensive prelighting. Which approach would you choose for a new production exercise?",
          "nb": "Attard beskriver lange opptak med tre kameraer og omfattende forhåndslyssetting. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Attard décrit des plans longs à trois caméras et un prééclairage important. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Attard descreve planos longos com três câmaras e pré-iluminação extensa. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Place cameras without checking whether they see each other",
              "nb": "Plasser kameraer uten å sjekke om de ser hverandre",
              "fr": "Placer les caméras sans vérifier leurs champs mutuels",
              "pt": "Colocar câmaras sem verificar se aparecem umas nas outras"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume natural light requires no preparation",
              "nb": "Anta at naturlig lys ikke krever forberedelse",
              "fr": "Supposer que la lumière naturelle ne demande aucune préparation",
              "pt": "Supor que luz natural dispensa preparação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse sightlines and camera clearance before a long take",
              "nb": "Øv blikkretninger og kameraklaring før en lang tagning",
              "fr": "Répéter axes de regard et dégagement des caméras avant une prise longue",
              "pt": "Ensaiar linhas de olhar e espaço das câmaras antes de um plano longo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Attard describes long takes with three cameras and extensive prelighting. A practical exercise would be to: Rehearse sightlines and camera clearance before a long take.",
          "nb": "Attard beskriver lange opptak med tre kameraer og omfattende forhåndslyssetting. En praktisk øvelse vil være å: Øv blikkretninger og kameraklaring før en lang tagning.",
          "fr": "Attard décrit des plans longs à trois caméras et un prééclairage important. Un exercice pratique consisterait à : Répéter axes de regard et dégagement des caméras avant une prise longue.",
          "pt": "Attard descreve planos longos com três câmaras e pré-iluminação extensa. Um exercício prático consistiria em: Ensaiar linhas de olhar e espaço das câmaras antes de um plano longo."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_young_mothers_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ensemble research, real locations and responsive camera",
      "nb": "Ensembleresearch, ekte steder og responsivt kamera",
      "fr": "Recherche chorale, lieux réels et caméra réactive",
      "pt": "Pesquisa de conjunto, locais reais e câmara responsiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "JEUNES MÈRES",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/f/jeunes-meres/"
      },
      {
        "id": "s1",
        "title": "Young Mothers English Press Kit",
        "publisher": "Les Films du Fleuve / Archipel 35 / The Reunion / Festival de Cannes",
        "url": "https://cdn.festival-cannes.com/media/uploads/2025/05/189306.pdf"
      },
      {
        "id": "s2",
        "title": "Benoît Dervaux on capturing Jeunes mères",
        "publisher": "The Belgian Society of Cinematographers",
        "url": "https://www.sbcine.be/?p=14294"
      }
    ],
    "questions": [
      {
        "id": "youngmothers-portraits",
        "area": "research",
        "prompt": {
          "en": "Research developed from one mother’s story into five portraits. Which approach would you choose for a new production exercise?",
          "nb": "Researchen utviklet seg fra én mors historie til fem portretter. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "La recherche est passée d’une mère à cinq portraits. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A pesquisa passou da história de uma mãe a cinco retratos. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map distinct motivations without treating one story as universal",
              "nb": "Kartlegg ulike motivasjoner uten å gjøre én historie universell",
              "fr": "Cartographier des motivations distinctes sans universaliser un récit",
              "pt": "Mapear motivações distintas sem universalizar uma história"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Give every character the same background and voice",
              "nb": "Gi alle karakterene samme bakgrunn og stemme",
              "fr": "Donner à tous les personnages le même passé et la même voix",
              "pt": "Dar a todas as personagens o mesmo passado e voz"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use identifiable personal research without permission",
              "nb": "Bruk identifiserbar personlig research uten tillatelse",
              "fr": "Utiliser des recherches personnelles identifiantes sans permission",
              "pt": "Usar pesquisa pessoal identificável sem autorização"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Research developed from one mother’s story into five portraits. A practical exercise would be to: Map distinct motivations without treating one story as universal.",
          "nb": "Researchen utviklet seg fra én mors historie til fem portretter. En praktisk øvelse vil være å: Kartlegg ulike motivasjoner uten å gjøre én historie universell.",
          "fr": "La recherche est passée d’une mère à cinq portraits. Un exercice pratique consisterait à : Cartographier des motivations distinctes sans universaliser un récit.",
          "pt": "A pesquisa passou da história de uma mãe a cinco retratos. Um exercício prático consistiria em: Mapear motivações distintas sem universalizar uma história."
        },
        "sourceIds": [
          "s1",
          "s0"
        ]
      },
      {
        "id": "youngmothers-location",
        "area": "research",
        "prompt": {
          "en": "The filmmakers chose a real maternal-home location. Which approach would you choose for a new production exercise?",
          "nb": "Filmskaperne valgte et virkelig mødrehjem som opptakssted. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les cinéastes ont choisi un véritable foyer maternel. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os cineastas escolheram uma verdadeira casa de acolhimento materno. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Rebuild every room without consulting its users",
              "nb": "Bygg om alle rom uten å rådføre deg med brukerne",
              "fr": "Transformer chaque pièce sans consulter ses usagers",
              "pt": "Reconstruir cada sala sem consultar os utilizadores"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree privacy boundaries and schedule around existing occupants",
              "nb": "Avtal personverngrenser og planlegg rundt eksisterende beboere",
              "fr": "Fixer les limites de confidentialité et respecter les résidents",
              "pt": "Acordar limites de privacidade e respeitar os residentes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a location agreement covers every resident’s consent",
              "nb": "Anta at stedsavtalen dekker alle beboeres samtykke",
              "fr": "Supposer que l’accord du lieu couvre le consentement de tous",
              "pt": "Supor que o acordo do local cobre o consentimento de todos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The filmmakers chose a real maternal-home location. A practical exercise would be to: Agree privacy boundaries and schedule around existing occupants.",
          "nb": "Filmskaperne valgte et virkelig mødrehjem som opptakssted. En praktisk øvelse vil være å: Avtal personverngrenser og planlegg rundt eksisterende beboere.",
          "fr": "Les cinéastes ont choisi un véritable foyer maternel. Un exercice pratique consisterait à : Fixer les limites de confidentialité et respecter les résidents.",
          "pt": "Os cineastas escolheram uma verdadeira casa de acolhimento materno. Um exercício prático consistiria em: Acordar limites de privacidade e respeitar os residentes."
        },
        "sourceIds": [
          "s1",
          "s2"
        ]
      },
      {
        "id": "youngmothers-movement",
        "area": "camera",
        "prompt": {
          "en": "The cinematographer documents handheld long takes and a natural-light strategy. Which approach would you choose for a new production exercise?",
          "nb": "Filmfotografen dokumenterer håndholdte lange tagninger og en naturlig lysstrategi. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le directeur photo documente les plans longs portés et la lumière naturelle. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O diretor de fotografia documenta planos longos à mão e estratégia de luz natural. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose movement without considering actor paths",
              "nb": "Velg bevegelse uten å ta hensyn til skuespillerbaner",
              "fr": "Choisir les mouvements sans considérer les trajets des acteurs",
              "pt": "Escolher movimentos sem considerar trajetos dos atores"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume natural-light exposure stays constant",
              "nb": "Anta at eksponering i naturlig lys er konstant",
              "fr": "Supposer que l’exposition naturelle reste constante",
              "pt": "Supor que exposição à luz natural permanece constante"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse operator movement and monitor changing exposure",
              "nb": "Øv fotografens bevegelser og følg endringer i eksponering",
              "fr": "Répéter les mouvements caméra et surveiller l’exposition variable",
              "pt": "Ensaiar movimentos do operador e acompanhar exposição variável"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematographer documents handheld long takes and a natural-light strategy. A practical exercise would be to: Rehearse operator movement and monitor changing exposure.",
          "nb": "Filmfotografen dokumenterer håndholdte lange tagninger og en naturlig lysstrategi. En praktisk øvelse vil være å: Øv fotografens bevegelser og følg endringer i eksponering.",
          "fr": "Le directeur photo documente les plans longs portés et la lumière naturelle. Un exercice pratique consisterait à : Répéter les mouvements caméra et surveiller l’exposition variable.",
          "pt": "O diretor de fotografia documenta planos longos à mão e estratégia de luz natural. Um exercício prático consistiria em: Ensaiar movimentos do operador e acompanhar exposição variável."
        },
        "sourceIds": [
          "s2",
          "s1"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_on_the_adamant_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Observational documentary, participant agency and small crews",
      "nb": "Observerende dokumentar, deltakermedvirkning og små team",
      "fr": "Documentaire d’observation, autonomie et petite équipe",
      "pt": "Documentário de observação, autonomia e equipa reduzida"
    },
    "sources": [
      {
        "id": "s0",
        "title": "On the Adamant — Sur l'Adamant",
        "publisher": "Nicolas Philibert",
        "url": "https://www.nicolasphilibert.fr/en/films/sur-ladamant/"
      },
      {
        "id": "s2",
        "title": "On the Adamant press kit",
        "publisher": "Nicolas Philibert",
        "url": "https://www.nicolasphilibert.fr/wp-content/uploads/2025/08/dpresse-va.pdf"
      },
      {
        "id": "s3",
        "title": "On the Adamant: Nicolas Philibert's warm-hearted portrait of a floating mental health centre",
        "publisher": "British Film Institute / Sight and Sound",
        "url": "https://www.bfi.org.uk/sight-and-sound/reviews/adamant-nicolas-philiberts-warm-hearted-portrait-floating-mental-health-centre"
      }
    ],
    "questions": [
      {
        "id": "adamant-consent",
        "area": "research",
        "prompt": {
          "en": "Philibert describes participant refusal as part of the working process. Which approach would you choose for a new production exercise?",
          "nb": "Philibert beskriver deltakernes mulighet til å si nei som del av arbeidsprosessen. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Philibert décrit le refus des participants comme partie du processus. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Philibert descreve a recusa dos participantes como parte do processo. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Respect refusal and revisit consent as circumstances change",
              "nb": "Respekter avslag og avklar samtykke på nytt ved endringer",
              "fr": "Respecter le refus et renouveler le consentement si nécessaire",
              "pt": "Respeitar a recusa e rever consentimento quando necessário"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat access permission as permanent individual consent",
              "nb": "Behandle adgangstillatelse som permanent individuelt samtykke",
              "fr": "Traiter l’accès comme consentement individuel permanent",
              "pt": "Tratar acesso como consentimento individual permanente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Film reluctant participants to preserve continuity",
              "nb": "Film motvillige deltakere for å bevare kontinuitet",
              "fr": "Filmer les participants réticents pour préserver les raccords",
              "pt": "Filmar participantes relutantes para preservar continuidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Philibert describes participant refusal as part of the working process. A practical exercise would be to: Respect refusal and revisit consent as circumstances change.",
          "nb": "Philibert beskriver deltakernes mulighet til å si nei som del av arbeidsprosessen. En praktisk øvelse vil være å: Respekter avslag og avklar samtykke på nytt ved endringer.",
          "fr": "Philibert décrit le refus des participants comme partie du processus. Un exercice pratique consisterait à : Respecter le refus et renouveler le consentement si nécessaire.",
          "pt": "Philibert descreve a recusa dos participantes como parte do processo. Um exercício prático consistiria em: Respeitar a recusa e rever consentimento quando necessário."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "adamant-crew",
        "area": "camera",
        "prompt": {
          "en": "The filmmaker describes a small crew and occasional solo filming. Which approach would you choose for a new production exercise?",
          "nb": "Filmskaperen beskriver et lite team og tidvis opptak alene. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le cinéaste décrit une petite équipe et des tournages parfois en solo. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O cineasta descreve equipa reduzida e filmagem ocasional a solo. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume solo filming guarantees ethical access",
              "nb": "Anta at opptak alene garanterer etisk tilgang",
              "fr": "Supposer que filmer seul garantit un accès éthique",
              "pt": "Supor que filmar sozinho garante acesso ético"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare unobtrusive coverage with the needs of image and sound",
              "nb": "Sammenlign diskret dekning med behovene for bilde og lyd",
              "fr": "Comparer couverture discrète et besoins de l’image et du son",
              "pt": "Comparar cobertura discreta com necessidades de imagem e som"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Add crew members without considering participant comfort",
              "nb": "Legg til medarbeidere uten å vurdere deltakernes komfort",
              "fr": "Ajouter des techniciens sans considérer le confort des participants",
              "pt": "Adicionar técnicos sem considerar conforto dos participantes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The filmmaker describes a small crew and occasional solo filming. A practical exercise would be to: Compare unobtrusive coverage with the needs of image and sound.",
          "nb": "Filmskaperen beskriver et lite team og tidvis opptak alene. En praktisk øvelse vil være å: Sammenlign diskret dekning med behovene for bilde og lyd.",
          "fr": "Le cinéaste décrit une petite équipe et des tournages parfois en solo. Un exercice pratique consisterait à : Comparer couverture discrète et besoins de l’image et du son.",
          "pt": "O cineasta descreve equipa reduzida e filmagem ocasional a solo. Um exercício prático consistiria em: Comparar cobertura discreta com necessidades de imagem e som."
        },
        "sourceIds": [
          "s2",
          "s0"
        ]
      },
      {
        "id": "adamant-portrait",
        "area": "research",
        "prompt": {
          "en": "The film moves between group activities and individual portraits. Which approach would you choose for a new production exercise?",
          "nb": "Filmen veksler mellom gruppeaktiviteter og individuelle portretter. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le film alterne activités collectives et portraits individuels. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O filme alterna atividades coletivas e retratos individuais. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use isolated reactions as proof of medical diagnoses",
              "nb": "Bruk isolerte reaksjoner som bevis på medisinske diagnoser",
              "fr": "Utiliser des réactions isolées comme preuves de diagnostic",
              "pt": "Usar reações isoladas como provas de diagnóstico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all collective context from individual portraits",
              "nb": "Fjern all gruppekontekst fra individuelle portretter",
              "fr": "Retirer tout contexte collectif des portraits individuels",
              "pt": "Retirar todo contexto coletivo dos retratos individuais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review the edit for context and individual agency",
              "nb": "Gjennomgå klippen med vekt på kontekst og individuell medvirkning",
              "fr": "Revoir le montage selon le contexte et l’autonomie individuelle",
              "pt": "Rever montagem segundo contexto e autonomia individual"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The film moves between group activities and individual portraits. A practical exercise would be to: Review the edit for context and individual agency.",
          "nb": "Filmen veksler mellom gruppeaktiviteter og individuelle portretter. En praktisk øvelse vil være å: Gjennomgå klippen med vekt på kontekst og individuell medvirkning.",
          "fr": "Le film alterne activités collectives et portraits individuels. Un exercice pratique consisterait à : Revoir le montage selon le contexte et l’autonomie individuelle.",
          "pt": "O filme alterna atividades coletivas e retratos individuais. Um exercício prático consistiria em: Rever montagem segundo contexto e autonomia individual."
        },
        "sourceIds": [
          "s3",
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_father_mother_sister_brother_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Triptych structure, regional crews and production continuity",
      "nb": "Tredelt struktur, regionale team og produksjonskontinuitet",
      "fr": "Triptyque, équipes régionales et continuité de production",
      "pt": "Tríptico, equipas regionais e continuidade de produção"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Father Mother Sister Brother — Venezia 82 Competition",
        "publisher": "La Biennale di Venezia",
        "url": "https://www.labiennale.org/en/cinema/2025/venezia-82-competition/father-mother-sister-brother"
      },
      {
        "id": "s3",
        "title": "Interview: Jim Jarmusch on Father Mother Sister Brother",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/interview-jim-jarmusch-on-father-mother-sister-brother/"
      },
      {
        "id": "s4",
        "title": "Father Mother Sister Brother — A film by Jim Jarmusch",
        "publisher": "Saint Laurent Productions",
        "url": "https://saintlaurentproductions.ysl.com/father-mother-sister-brother"
      },
      {
        "id": "s5",
        "title": "Jim Jarmusch on Father Mother Sister Brother at Venice",
        "publisher": "Variety",
        "url": "https://variety.com/2025/film/global/jim-jarmusch-mubi-israel-father-mother-sister-brother-venice-film-festival-1236502496/"
      }
    ],
    "questions": [
      {
        "id": "fmsb-triptych",
        "area": "research",
        "prompt": {
          "en": "Jarmusch describes three sections made in separate production blocks. Which approach would you choose for a new production exercise?",
          "nb": "Jarmusch beskriver tre deler laget i separate opptaksblokker. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Jarmusch décrit trois sections réalisées en blocs distincts. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Jarmusch descreve três secções realizadas em blocos distintos. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map recurring motifs while preserving each section’s identity",
              "nb": "Kartlegg gjentatte motiver og bevar hver dels identitet",
              "fr": "Cartographier les motifs récurrents en préservant chaque identité",
              "pt": "Mapear motivos recorrentes preservando identidade de cada secção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Merge the stories into a single continuous chronology",
              "nb": "Slå historiene sammen til én sammenhengende kronologi",
              "fr": "Fusionner les récits en une seule chronologie continue",
              "pt": "Fundir histórias numa cronologia contínua"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jarmusch describes three sections made in separate production blocks. A practical exercise would be to: Map recurring motifs while preserving each section’s identity.",
          "nb": "Jarmusch beskriver tre deler laget i separate opptaksblokker. En praktisk øvelse vil være å: Kartlegg gjentatte motiver og bevar hver dels identitet.",
          "fr": "Jarmusch décrit trois sections réalisées en blocs distincts. Un exercice pratique consisterait à : Cartographier les motifs récurrents en préservant chaque identité.",
          "pt": "Jarmusch descreve três secções realizadas em blocos distintos. Um exercício prático consistiria em: Mapear motivos recorrentes preservando identidade de cada secção."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "fmsb-teams",
        "area": "camera",
        "prompt": {
          "en": "The production used different cinematographer and designer teams across regions. Which approach would you choose for a new production exercise?",
          "nb": "Produksjonen brukte ulike foto- og designteam på tvers av regioner. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "La production a mobilisé différentes équipes photo et décor selon les régions. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A produção usou diferentes equipas de fotografia e cenografia por região. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Share visual principles while allowing local interpretation",
              "nb": "Del visuelle prinsipper og gi rom for lokal fortolkning",
              "fr": "Partager les principes visuels en permettant une interprétation locale",
              "pt": "Partilhar princípios visuais permitindo interpretação local"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Require identical locations and lighting in every region",
              "nb": "Krev identiske steder og lys i hver region",
              "fr": "Exiger des lieux et éclairages identiques partout",
              "pt": "Exigir locais e luz idênticos em cada região"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production used different cinematographer and designer teams across regions. A practical exercise would be to: Share visual principles while allowing local interpretation.",
          "nb": "Produksjonen brukte ulike foto- og designteam på tvers av regioner. En praktisk øvelse vil være å: Del visuelle prinsipper og gi rom for lokal fortolkning.",
          "fr": "La production a mobilisé différentes équipes photo et décor selon les régions. Un exercice pratique consisterait à : Partager les principes visuels en permettant une interprétation locale.",
          "pt": "A produção usou diferentes equipas de fotografia e cenografia por região. Um exercício prático consistiria em: Partilhar princípios visuais permitindo interpretação local."
        },
        "sourceIds": [
          "s3",
          "s0"
        ]
      },
      {
        "id": "fmsb-schedule",
        "area": "research",
        "prompt": {
          "en": "Jarmusch describes about ten shooting days for each section and location constraints. Which approach would you choose for a new production exercise?",
          "nb": "Jarmusch beskriver omtrent ti opptaksdager per del og stedsbegrensninger. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Jarmusch évoque environ dix jours par section et des contraintes de lieux. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Jarmusch refere cerca de dez dias por secção e restrições de locais. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every block has the same resource demands",
              "nb": "Anta at hver blokk har samme ressursbehov",
              "fr": "Supposer que chaque bloc exige les mêmes ressources",
              "pt": "Supor que cada bloco exige os mesmos recursos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan block-specific resources and a shared handover",
              "nb": "Planlegg blokkspesifikke ressurser og felles overlevering",
              "fr": "Prévoir ressources par bloc et transmission commune",
              "pt": "Planear recursos por bloco e passagem comum"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Jarmusch describes about ten shooting days for each section and location constraints. A practical exercise would be to: Plan block-specific resources and a shared handover.",
          "nb": "Jarmusch beskriver omtrent ti opptaksdager per del og stedsbegrensninger. En praktisk øvelse vil være å: Planlegg blokkspesifikke ressurser og felles overlevering.",
          "fr": "Jarmusch évoque environ dix jours par section et des contraintes de lieux. Un exercice pratique consisterait à : Prévoir ressources par bloc et transmission commune.",
          "pt": "Jarmusch refere cerca de dez dias por secção e restrições de locais. Um exercício prático consistiria em: Planear recursos por bloco e passagem comum."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_saint_omer_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Courtroom language, sustained performance and restrained sound",
      "nb": "Rettssalspråk, vedvarende spill og tilbakeholden lyd",
      "fr": "Langage judiciaire, jeu prolongé et son retenu",
      "pt": "Linguagem judicial, interpretação prolongada e som contido"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Claire Mathon AFC • Saint Omer",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/claire-mathon-afc-saint-omer/"
      },
      {
        "id": "s3",
        "title": "Interview: Alice Diop on Saint Omer",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/interview-alice-diop-on-saint-omer/"
      },
      {
        "id": "s4",
        "title": "Saint Omer: How accurate is Alice Diop child-killer movie?",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment-arts/movies/story/2023-01-12/saint-omer-alice-diop-guslangie-malanda-true-story"
      },
      {
        "id": "s5",
        "title": "Interview: Alice Diop on Upending True Crime Conventions with Saint Omer",
        "publisher": "Slant Magazine",
        "url": "https://www.slantmagazine.com/film/alice-diop-interview-saint-omer/"
      },
      {
        "id": "s6",
        "title": "Interview: Alice Diop on the Many Dimensions of Saint Omer",
        "publisher": "The Moveable Fest",
        "url": "https://moveablefest.com/alice-diop-saint-omer-interview/"
      }
    ],
    "questions": [
      {
        "id": "saintomer-language",
        "area": "research",
        "prompt": {
          "en": "Diop describes trial research and extensive use of courtroom language. Which approach would you choose for a new production exercise?",
          "nb": "Diop beskriver rettssaksresearch og omfattende bruk av rettssalens språk. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Diop décrit la recherche du procès et l’usage du langage judiciaire. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Diop descreve pesquisa do julgamento e uso da linguagem judicial. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate sourced testimony from invented character material",
              "nb": "Skill kildebelagt vitnesbyrd fra oppdiktet karaktermateriale",
              "fr": "Séparer témoignages sourcés et éléments fictionnels",
              "pt": "Separar testemunho documentado de material ficcional"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present invented dialogue as a verbatim court transcript",
              "nb": "Presenter oppdiktet dialog som ordrett rettsreferat",
              "fr": "Présenter les dialogues inventés comme transcription exacte",
              "pt": "Apresentar diálogo inventado como transcrição literal"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Diop describes trial research and extensive use of courtroom language. A practical exercise would be to: Separate sourced testimony from invented character material.",
          "nb": "Diop beskriver rettssaksresearch og omfattende bruk av rettssalens språk. En praktisk øvelse vil være å: Skill kildebelagt vitnesbyrd fra oppdiktet karaktermateriale.",
          "fr": "Diop décrit la recherche du procès et l’usage du langage judiciaire. Un exercice pratique consisterait à : Séparer témoignages sourcés et éléments fictionnels.",
          "pt": "Diop descreve pesquisa do julgamento e uso da linguagem judicial. Um exercício prático consistiria em: Separar testemunho documentado de material ficcional."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "saintomer-duration",
        "area": "camera",
        "prompt": {
          "en": "The filmmakers describe sustained takes and chronological courtroom filming. Which approach would you choose for a new production exercise?",
          "nb": "Filmskaperne beskriver lange tagninger og kronologiske rettssalsopptak. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les cinéastes décrivent des prises prolongées et un tournage chronologique. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os cineastas descrevem planos prolongados e filmagem cronológica. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Rehearse sustained listening and allow pauses within the scene",
              "nb": "Øv vedvarende lytting og gi plass til pauser i scenen",
              "fr": "Répéter l’écoute prolongée et laisser des pauses dans la scène",
              "pt": "Ensaiar escuta prolongada e permitir pausas na cena"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Cut away every time a speaker pauses",
              "nb": "Klipp vekk hver gang en taler tar pause",
              "fr": "Couper chaque fois qu’un orateur marque une pause",
              "pt": "Cortar sempre que um orador faz pausa"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The filmmakers describe sustained takes and chronological courtroom filming. A practical exercise would be to: Rehearse sustained listening and allow pauses within the scene.",
          "nb": "Filmskaperne beskriver lange tagninger og kronologiske rettssalsopptak. En praktisk øvelse vil være å: Øv vedvarende lytting og gi plass til pauser i scenen.",
          "fr": "Les cinéastes décrivent des prises prolongées et un tournage chronologique. Un exercice pratique consisterait à : Répéter l’écoute prolongée et laisser des pauses dans la scène.",
          "pt": "Os cineastas descrevem planos prolongados e filmagem cronológica. Um exercício prático consistiria em: Ensaiar escuta prolongada e permitir pausas na cena."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "saintomer-silence",
        "area": "sound",
        "prompt": {
          "en": "Diop describes emotional rhythm and a restrained relationship between sound, silence and music. Which approach would you choose for a new production exercise?",
          "nb": "Diop beskriver følelsesrytme og et tilbakeholdent forhold mellom lyd, stillhet og musikk. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Diop décrit le rythme émotionnel et un rapport retenu entre son, silence et musique. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Diop descreve ritmo emocional e relação contida entre som, silêncio e música. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use continuous music to dictate every emotional response",
              "nb": "Bruk kontinuerlig musikk til å diktere hver følelsesreaksjon",
              "fr": "Utiliser une musique continue pour dicter chaque émotion",
              "pt": "Usar música contínua para ditar cada emoção"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare a quiet dialogue edit with selective musical interventions",
              "nb": "Sammenlign et stille dialogklipp med selektive musikalske innslag",
              "fr": "Comparer un montage de dialogue sobre à des interventions musicales choisies",
              "pt": "Comparar montagem de diálogo sóbria com intervenções musicais seletivas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Diop describes emotional rhythm and a restrained relationship between sound, silence and music. A practical exercise would be to: Compare a quiet dialogue edit with selective musical interventions.",
          "nb": "Diop beskriver følelsesrytme og et tilbakeholdent forhold mellom lyd, stillhet og musikk. En praktisk øvelse vil være å: Sammenlign et stille dialogklipp med selektive musikalske innslag.",
          "fr": "Diop décrit le rythme émotionnel et un rapport retenu entre son, silence et musique. Un exercice pratique consisterait à : Comparer un montage de dialogue sobre à des interventions musicales choisies.",
          "pt": "Diop descreve ritmo emocional e relação contida entre som, silêncio e música. Um exercício prático consistiria em: Comparar montagem de diálogo sóbria com intervenções musicais seletivas."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_nope_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Large-format imagery, practical spaces and offscreen sound",
      "nb": "Storformatbilder, fysiske kulisser og lyd utenfor bildet",
      "fr": "Images grand format, décors réels et son hors champ",
      "pt": "Imagem de grande formato, cenários físicos e som fora de campo"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Nope",
        "publisher": "American Film Institute",
        "url": "https://watch.afi.com/movie/nope"
      },
      {
        "id": "s2",
        "title": "How Hoyte van Hoytema FSF NSC ASC pioneered with Kodak large format film for the supernatural sensation 'Nope'",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/nope/"
      },
      {
        "id": "s3",
        "title": "Nope",
        "publisher": "MPC",
        "url": "https://www.mpcvfx.com/en/filmography/nope/"
      },
      {
        "id": "s4",
        "title": "How 'Nope' Production Designer Ruth De Jong Built & Bloodied the Haywood Ranch",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2022/07/how-nope-production-designer-ruth-de-jong-built-bloodied-the-haywood-ranch/"
      },
      {
        "id": "s6",
        "title": "'Nope' Sound Designer Johnnie Burn Puts the Fear in What We Hear",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2022/08/nope-sound-designer-johnnie-burn-puts-the-fear-in-what-we-hear/"
      },
      {
        "id": "s7",
        "title": "'Nope' Composer Michael Abels on Scoring Jordan Peele's Sci-Fi Epic",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2022/08/nope-composer-michael-abels-on-scoring-jordan-peeles-sci-fi-epic/"
      }
    ],
    "questions": [
      {
        "id": "nope-night",
        "area": "camera",
        "prompt": {
          "en": "The production combined infrared and film imagery for its day-for-night approach. Which approach would you choose for a new production exercise?",
          "nb": "Produksjonen kombinerte infrarøde bilder og filmopptak for dag-for-natt. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "La production a combiné images infrarouges et pellicule pour la nuit américaine. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A produção combinou imagens infravermelhas e película para noite americana. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare matched test plates before approving the composite",
              "nb": "Sammenlign samsvarende prøveopptak før komposittbildet godkjennes",
              "fr": "Comparer les prises tests raccordées avant de valider le composite",
              "pt": "Comparar imagens de teste correspondentes antes de aprovar a composição"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume different capture systems align without testing",
              "nb": "Anta at ulike opptakssystemer samsvarer uten testing",
              "fr": "Supposer que les systèmes concordent sans essai",
              "pt": "Supor que sistemas diferentes coincidem sem testes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Decide the final look solely from a camera specification",
              "nb": "Bestem sluttuttrykket bare ut fra kameraspesifikasjonen",
              "fr": "Décider du rendu final uniquement selon les spécifications caméra",
              "pt": "Decidir o visual final apenas pelas especificações da câmara"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production combined infrared and film imagery for its day-for-night approach. A practical exercise would be to: Compare matched test plates before approving the composite.",
          "nb": "Produksjonen kombinerte infrarøde bilder og filmopptak for dag-for-natt. En praktisk øvelse vil være å: Sammenlign samsvarende prøveopptak før komposittbildet godkjennes.",
          "fr": "La production a combiné images infrarouges et pellicule pour la nuit américaine. Un exercice pratique consisterait à : Comparer les prises tests raccordées avant de valider le composite.",
          "pt": "A produção combinou imagens infravermelhas e película para noite americana. Um exercício prático consistiria em: Comparar imagens de teste correspondentes antes de aprovar a composição."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "nope-space",
        "area": "research",
        "prompt": {
          "en": "The production designer describes usable ranch buildings constructed for multiple viewing directions. Which approach would you choose for a new production exercise?",
          "nb": "Scenografen beskriver brukbare ranchbygninger bygget for flere synsretninger. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le chef décorateur décrit des bâtiments de ranch utilisables sous plusieurs angles. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O diretor de arte descreve edifícios utilizáveis de vários ângulos. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Plan entrances, sightlines and camera positions together",
              "nb": "Planlegg innganger, siktlinjer og kameraposisjoner samlet",
              "fr": "Planifier ensemble entrées, axes de regard et positions caméra",
              "pt": "Planear entradas, linhas de visão e posições de câmara em conjunto"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Design only the front facade regardless of blocking",
              "nb": "Utform bare frontfasaden uavhengig av skuespillernes plassering",
              "fr": "Concevoir seulement la façade sans tenir compte du jeu",
              "pt": "Conceber apenas a fachada sem considerar a marcação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production designer describes usable ranch buildings constructed for multiple viewing directions. A practical exercise would be to: Plan entrances, sightlines and camera positions together.",
          "nb": "Scenografen beskriver brukbare ranchbygninger bygget for flere synsretninger. En praktisk øvelse vil være å: Planlegg innganger, siktlinjer og kameraposisjoner samlet.",
          "fr": "Le chef décorateur décrit des bâtiments de ranch utilisables sous plusieurs angles. Un exercice pratique consisterait à : Planifier ensemble entrées, axes de regard et positions caméra.",
          "pt": "O diretor de arte descreve edifícios utilizáveis de vários ângulos. Um exercício prático consistiria em: Planear entradas, linhas de visão e posições de câmara em conjunto."
        },
        "sourceIds": [
          "s4",
          "s0"
        ]
      },
      {
        "id": "nope-sound",
        "area": "sound",
        "prompt": {
          "en": "The sound team describes offscreen ambiguity and deliberate negative space. Which approach would you choose for a new production exercise?",
          "nb": "Lydteamet beskriver tvetydighet utenfor bildet og bevisst bruk av stillhet. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "L’équipe son décrit l’ambiguïté hors champ et l’usage volontaire du silence. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A equipa de som descreve ambiguidade fora de campo e uso deliberado do silêncio. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Explain every offscreen sound immediately in dialogue",
              "nb": "Forklar all lyd utenfor bildet umiddelbart i dialog",
              "fr": "Expliquer immédiatement chaque son hors champ par le dialogue",
              "pt": "Explicar imediatamente cada som fora de campo no diálogo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test ambiguous sound cues against a restrained visual scene",
              "nb": "Prøv tvetydige lydsignaler mot en visuelt tilbakeholden scene",
              "fr": "Tester des indices sonores ambigus dans une scène visuellement sobre",
              "pt": "Testar sinais sonoros ambíguos numa cena visualmente contida"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound team describes offscreen ambiguity and deliberate negative space. A practical exercise would be to: Test ambiguous sound cues against a restrained visual scene.",
          "nb": "Lydteamet beskriver tvetydighet utenfor bildet og bevisst bruk av stillhet. En praktisk øvelse vil være å: Prøv tvetydige lydsignaler mot en visuelt tilbakeholden scene.",
          "fr": "L’équipe son décrit l’ambiguïté hors champ et l’usage volontaire du silence. Un exercice pratique consisterait à : Tester des indices sonores ambigus dans une scène visuellement sobre.",
          "pt": "A equipa de som descreve ambiguidade fora de campo e uso deliberado do silêncio. Um exercício prático consistiria em: Testar sinais sonoros ambíguos numa cena visualmente contida."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_top_gun_maverick_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Multi-camera coverage, production sound and editorial organisation",
      "nb": "Flerkameradekning, produksjonslyd og klippeorganisering",
      "fr": "Couverture multicaméra, son direct et organisation du montage",
      "pt": "Cobertura multicâmara, som direto e organização da montagem"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Taking Flight with Top Gun: Maverick",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/article/top-gun-maverick/"
      },
      {
        "id": "s3",
        "title": "FRCSW Goes to the Movies: Top Gun: Maverick",
        "publisher": "NAVAIR",
        "url": "https://www.navair.navy.mil/news/FRCSW-Goes-Movies-Top-Gun-Maverick/Tue-05312022-0924"
      },
      {
        "id": "s4",
        "title": "How the Top Gun: Maverick Sound Team Ingeniously Captured Raw Emotion Mid-Flight",
        "publisher": "The Credits / Motion Picture Association",
        "url": "https://www.motionpictures.org/2022/08/how-the-top-gun-maverick-sound-team-ingeniously-captured-raw-emotion-mid-flight-2/"
      },
      {
        "id": "s5",
        "title": "Top Gun: Maverick Director Joe Kosinski — Post, VFX and More",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/top-gun-maverick-tom-cruise-director-joe-kosinski-talks-post-and-workflow/"
      },
      {
        "id": "s6",
        "title": "Top Gun: Maverick VFX Supe Ryan Tudhope on How the U.S. Navy Ended Up Being His Team's Greatest Resource",
        "publisher": "Below the Line",
        "url": "https://mande.net/btl/awards/top-gun-maverick-vfx-ryan-tudhope-interview"
      },
      {
        "id": "s8",
        "title": "Top Gun: Maverick",
        "publisher": "Company 3",
        "url": "https://www.company3.com/videos/top-gun-maverick-3/"
      }
    ],
    "questions": [
      {
        "id": "topgun-coverage",
        "area": "camera",
        "prompt": {
          "en": "The craft accounts describe compact multi-camera coverage under professional engineering oversight. Which approach would you choose for a new production exercise?",
          "nb": "Fagkildene beskriver kompakt flerkameradekning under profesjonelt ingeniørtilsyn. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les sources décrivent une couverture multicaméra compacte sous contrôle technique professionnel. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "As fontes descrevem cobertura multicâmara compacta sob supervisão técnica profissional. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Use a stationary mock-up to test framing and sightlines",
              "nb": "Bruk en stillestående modell for å prøve utsnitt og siktlinjer",
              "fr": "Utiliser une maquette fixe pour tester cadres et axes de regard",
              "pt": "Usar uma maquete estacionária para testar enquadramentos e linhas de visão"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all cameras provide equally useful coverage",
              "nb": "Anta at alle kameraer gir like nyttig dekning",
              "fr": "Supposer que toutes les caméras offrent une couverture équivalente",
              "pt": "Supor que todas as câmaras oferecem cobertura equivalente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The craft accounts describe compact multi-camera coverage under professional engineering oversight. A practical exercise would be to: Use a stationary mock-up to test framing and sightlines.",
          "nb": "Fagkildene beskriver kompakt flerkameradekning under profesjonelt ingeniørtilsyn. En praktisk øvelse vil være å: Bruk en stillestående modell for å prøve utsnitt og siktlinjer.",
          "fr": "Les sources décrivent une couverture multicaméra compacte sous contrôle technique professionnel. Un exercice pratique consisterait à : Utiliser une maquette fixe pour tester cadres et axes de regard.",
          "pt": "As fontes descrevem cobertura multicâmara compacta sob supervisão técnica profissional. Um exercício prático consistiria em: Usar uma maquete estacionária para testar enquadramentos e linhas de visão."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "topgun-dialogue",
        "area": "sound",
        "prompt": {
          "en": "The sound interview documents production dialogue and synchronization challenges. Which approach would you choose for a new production exercise?",
          "nb": "Lydintervjuet dokumenterer opptaksdialog og synkroniseringsutfordringer. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "L’entretien son documente le dialogue direct et les difficultés de synchronisation. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A entrevista de som documenta diálogo direto e desafios de sincronização. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test synchronized dialogue and ambient tracks in a safe studio exercise",
              "nb": "Prøv synkronisert dialog og miljølyd i en trygg studioøvelse",
              "fr": "Tester dialogues synchronisés et ambiances dans un exercice en studio sûr",
              "pt": "Testar diálogo sincronizado e ambientes num exercício seguro de estúdio"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard synchronization records after recording",
              "nb": "Kast synkroniseringsnotater etter opptak",
              "fr": "Éliminer les relevés de synchronisation après enregistrement",
              "pt": "Descartar registos de sincronização após gravação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound interview documents production dialogue and synchronization challenges. A practical exercise would be to: Test synchronized dialogue and ambient tracks in a safe studio exercise.",
          "nb": "Lydintervjuet dokumenterer opptaksdialog og synkroniseringsutfordringer. En praktisk øvelse vil være å: Prøv synkronisert dialog og miljølyd i en trygg studioøvelse.",
          "fr": "L’entretien son documente le dialogue direct et les difficultés de synchronisation. Un exercice pratique consisterait à : Tester dialogues synchronisés et ambiances dans un exercice en studio sûr.",
          "pt": "A entrevista de som documenta diálogo direto e desafios de sincronização. Um exercício prático consistiria em: Testar diálogo sincronizado e ambientes num exercício seguro de estúdio."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "topgun-edit",
        "area": "research",
        "prompt": {
          "en": "The director and effects accounts describe extensive footage and editorial collaboration with VFX. Which approach would you choose for a new production exercise?",
          "nb": "Regissør- og effektkildene beskriver store opptaksmengder og samarbeid mellom klipp og VFX. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les sources décrivent un volume important de rushes et la collaboration montage-VFX. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "As fontes descrevem grande volume de imagens e colaboração entre montagem e efeitos. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Organize all footage only by file creation date",
              "nb": "Organiser alle opptak bare etter filenes opprettelsesdato",
              "fr": "Organiser tous les rushes uniquement par date de création",
              "pt": "Organizar imagens apenas pela data de criação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Tag footage by scene, viewpoint and review status",
              "nb": "Merk opptak etter scene, synsvinkel og gjennomgangsstatus",
              "fr": "Étiqueter les rushes par scène, point de vue et statut de validation",
              "pt": "Etiquetar imagens por cena, ponto de vista e estado de revisão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The director and effects accounts describe extensive footage and editorial collaboration with VFX. A practical exercise would be to: Tag footage by scene, viewpoint and review status.",
          "nb": "Regissør- og effektkildene beskriver store opptaksmengder og samarbeid mellom klipp og VFX. En praktisk øvelse vil være å: Merk opptak etter scene, synsvinkel og gjennomgangsstatus.",
          "fr": "Les sources décrivent un volume important de rushes et la collaboration montage-VFX. Un exercice pratique consisterait à : Étiqueter les rushes par scène, point de vue et statut de validation.",
          "pt": "As fontes descrevem grande volume de imagens e colaboração entre montagem e efeitos. Um exercício prático consistiria em: Etiquetar imagens por cena, ponto de vista e estado de revisão."
        },
        "sourceIds": [
          "s5",
          "s6",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_f1_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Live-event coverage, fictional team identity and sound balance",
      "nb": "Direktearrangement, fiktiv lagidentitet og lydbalanse",
      "fr": "Captation événementielle, identité d’équipe fictive et équilibre sonore",
      "pt": "Captação de evento, identidade fictícia e equilíbrio sonoro"
    },
    "sources": [
      {
        "id": "s3",
        "title": "On the Fast Track for F1: The Movie",
        "publisher": "American Cinematographer / American Society of Cinematographers",
        "url": "https://theasc.com/article/on-the-fast-track-for-f1-the-movie/"
      },
      {
        "id": "s7",
        "title": "How APXGP was brought to life",
        "publisher": "Formula 1",
        "url": "https://www.formula1.com/en/latest/article/how-apxgp-was-brought-to-life-inside-the-rapid-creation-of-f1-the-movies.73ZVNOiyddgPL7jtNhX6Jq.73ZVNOiyddgPL7jtNhX6Jq"
      },
      {
        "id": "s9",
        "title": "Behind the Scenes: Mixing and Editing F1 The Movie",
        "publisher": "Avid",
        "url": "https://connect.avid.com/f1-the-movie-lp.html"
      },
      {
        "id": "s10",
        "title": "The Sound of F1: The Movie",
        "publisher": "Dolby Creator Lab",
        "url": "https://www.dolby.com/creator-lab/podcast/the-sound-of-f1-the-movie/"
      },
      {
        "id": "s11",
        "title": "F1 The Movie Official Synopsis and Credits",
        "publisher": "Apple Original Films / Warner Bros. Pictures",
        "url": "https://www.f1themovie.com/synopsis/"
      }
    ],
    "questions": [
      {
        "id": "f1-event",
        "area": "research",
        "prompt": {
          "en": "The production combined fictional scenes with real racing-event environments. Which approach would you choose for a new production exercise?",
          "nb": "Produksjonen kombinerte fiktive scener med virkelige racingarrangementer. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "La production associait des scènes fictives à de véritables événements automobiles. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A produção combinou cenas fictícias com eventos automobilísticos reais. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan fictional coverage around authorised event windows and continuity",
              "nb": "Planlegg fiktive opptak rundt godkjente tidsvinduer og kontinuitet",
              "fr": "Planifier les scènes selon les créneaux autorisés et les raccords",
              "pt": "Planear cenas segundo horários autorizados e continuidade"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the event schedule can be changed for every shot",
              "nb": "Anta at arrangementsplanen kan endres for hvert opptak",
              "fr": "Supposer que le calendrier peut changer pour chaque plan",
              "pt": "Supor que o calendário pode mudar para cada plano"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production combined fictional scenes with real racing-event environments. A practical exercise would be to: Plan fictional coverage around authorised event windows and continuity.",
          "nb": "Produksjonen kombinerte fiktive scener med virkelige racingarrangementer. En praktisk øvelse vil være å: Planlegg fiktive opptak rundt godkjente tidsvinduer og kontinuitet.",
          "fr": "La production associait des scènes fictives à de véritables événements automobiles. Un exercice pratique consisterait à : Planifier les scènes selon les créneaux autorisés et les raccords.",
          "pt": "A produção combinou cenas fictícias com eventos automobilísticos reais. Um exercício prático consistiria em: Planear cenas segundo horários autorizados e continuidade."
        },
        "sourceIds": [
          "s3",
          "s7"
        ]
      },
      {
        "id": "f1-identity",
        "area": "research",
        "prompt": {
          "en": "The costume account describes creating a fictional team identity within the real racing environment. Which approach would you choose for a new production exercise?",
          "nb": "Kostymekilden beskriver en fiktiv lagidentitet i det virkelige racingmiljøet. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le témoignage costume décrit une identité d’équipe fictive dans un environnement réel. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O relato de figurinos descreve identidade fictícia num ambiente real. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Create a consistent palette and wardrobe continuity board",
              "nb": "Lag en konsekvent palett og kontinuitetstavle for kostymer",
              "fr": "Créer une palette cohérente et un tableau de raccords costumes",
              "pt": "Criar paleta coerente e painel de continuidade de figurinos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Change team colours arbitrarily between connected scenes",
              "nb": "Bytt lagfarger vilkårlig mellom sammenhengende scener",
              "fr": "Changer arbitrairement les couleurs entre scènes raccordées",
              "pt": "Mudar cores da equipa arbitrariamente entre cenas ligadas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The costume account describes creating a fictional team identity within the real racing environment. A practical exercise would be to: Create a consistent palette and wardrobe continuity board.",
          "nb": "Kostymekilden beskriver en fiktiv lagidentitet i det virkelige racingmiljøet. En praktisk øvelse vil være å: Lag en konsekvent palett og kontinuitetstavle for kostymer.",
          "fr": "Le témoignage costume décrit une identité d’équipe fictive dans un environnement réel. Un exercice pratique consisterait à : Créer une palette cohérente et un tableau de raccords costumes.",
          "pt": "O relato de figurinos descreve identidade fictícia num ambiente real. Um exercício prático consistiria em: Criar paleta coerente e painel de continuidade de figurinos."
        },
        "sourceIds": [
          "s7",
          "s11"
        ]
      },
      {
        "id": "f1-mix",
        "area": "sound",
        "prompt": {
          "en": "The editorial and sound accounts describe balancing racing sound, dialogue and music. Which approach would you choose for a new production exercise?",
          "nb": "Klippe- og lydkildene beskriver balansen mellom racinglyd, dialog og musikk. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les témoignages décrivent l’équilibre entre sons de course, dialogue et musique. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os relatos descrevem equilíbrio entre som de corrida, diálogo e música. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Raise all sound layers equally at dramatic moments",
              "nb": "Øk alle lydlag like mye i dramatiske øyeblikk",
              "fr": "Augmenter également toutes les couches aux moments dramatiques",
              "pt": "Aumentar todas as camadas igualmente nos momentos dramáticos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare mixes for dialogue intelligibility and dramatic rhythm",
              "nb": "Sammenlign mikser for dialogforståelse og dramatisk rytme",
              "fr": "Comparer les mixages selon intelligibilité et rythme dramatique",
              "pt": "Comparar misturas por inteligibilidade e ritmo dramático"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editorial and sound accounts describe balancing racing sound, dialogue and music. A practical exercise would be to: Compare mixes for dialogue intelligibility and dramatic rhythm.",
          "nb": "Klippe- og lydkildene beskriver balansen mellom racinglyd, dialog og musikk. En praktisk øvelse vil være å: Sammenlign mikser for dialogforståelse og dramatisk rytme.",
          "fr": "Les témoignages décrivent l’équilibre entre sons de course, dialogue et musique. Un exercice pratique consisterait à : Comparer les mixages selon intelligibilité et rythme dramatique.",
          "pt": "Os relatos descrevem equilíbrio entre som de corrida, diálogo e música. Um exercício prático consistiria em: Comparar misturas por inteligibilidade e ritmo dramático."
        },
        "sourceIds": [
          "s9",
          "s10"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_mitchells_vs_the_machines_2021",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Painterly CG, character viewpoints and animated performance",
      "nb": "Malerisk CG, karakterperspektiv og animert spill",
      "fr": "CG picturale, points de vue et jeu animé",
      "pt": "CG pictórico, pontos de vista e atuação animada"
    },
    "sources": [
      {
        "id": "s4",
        "title": "Sony Pictures Imageworks Joins Forces with The Mitchells vs. the Machines",
        "publisher": "VFX Voice",
        "url": "https://vfxvoice.com/sony-pictures-imageworks-joins-forces-with-the-mitchells-vs-the-machines/"
      },
      {
        "id": "s5",
        "title": "The Mitchells vs. The Machines: A Scrapbook of Art, Nostalgia, and Killer Robots",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/mitchells-vs-machines-scrapbook-art-nostalgia-and-killer-robots"
      },
      {
        "id": "s6",
        "title": "Mike Rianda Talks The Mitchells vs. The Machines",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/mike-rianda-talks-mitchells-vs-machines"
      },
      {
        "id": "s7",
        "title": "The beginning of an explosion: The Mitchells Vs The Machines team on advances in animation",
        "publisher": "Screen International",
        "url": "https://www.screendaily.com/features/the-beginning-of-an-explosion-the-mitchells-vs-the-machines-team-on-advances-in-animation/5166448.article"
      }
    ],
    "questions": [
      {
        "id": "mitchells-texture",
        "area": "camera",
        "prompt": {
          "en": "The artists describe paint-stroke inputs and intentionally imperfect visual surfaces. Which approach would you choose for a new production exercise?",
          "nb": "Kunstnerne beskriver penselstrøk og bevisst uperfekte bildeflater. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les artistes décrivent des coups de pinceau et des surfaces volontairement imparfaites. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Os artistas descrevem pinceladas e superfícies deliberadamente imperfeitas. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare painterly and polished rendering on the same original scene",
              "nb": "Sammenlign malerisk og polert rendering av samme originale scene",
              "fr": "Comparer rendu pictural et lisse sur la même scène originale",
              "pt": "Comparar renderização pictórica e polida na mesma cena original"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove every irregularity before reviewing the design",
              "nb": "Fjern alle uregelmessigheter før designet vurderes",
              "fr": "Retirer toutes les irrégularités avant examen",
              "pt": "Retirar todas as irregularidades antes da revisão"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The artists describe paint-stroke inputs and intentionally imperfect visual surfaces. A practical exercise would be to: Compare painterly and polished rendering on the same original scene.",
          "nb": "Kunstnerne beskriver penselstrøk og bevisst uperfekte bildeflater. En praktisk øvelse vil være å: Sammenlign malerisk og polert rendering av samme originale scene.",
          "fr": "Les artistes décrivent des coups de pinceau et des surfaces volontairement imparfaites. Un exercice pratique consisterait à : Comparer rendu pictural et lisse sur la même scène originale.",
          "pt": "Os artistas descrevem pinceladas e superfícies deliberadamente imperfeitas. Um exercício prático consistiria em: Comparar renderização pictórica e polida na mesma cena original."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "mitchells-viewpoint",
        "area": "research",
        "prompt": {
          "en": "The design accounts distinguish Katie’s subjective visual layer from the surrounding world. Which approach would you choose for a new production exercise?",
          "nb": "Designkildene skiller Katies subjektive bildelag fra verden rundt henne. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les sources distinguent la couche visuelle subjective de Katie du monde environnant. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "As fontes distinguem a camada visual subjetiva de Katie do mundo envolvente. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Define when a character-specific graphic layer enters the scene",
              "nb": "Definer når et karakterspesifikt grafisk lag kommer inn i scenen",
              "fr": "Définir quand une couche graphique subjective entre dans la scène",
              "pt": "Definir quando uma camada gráfica subjetiva entra na cena"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply identical subjective graphics to every character",
              "nb": "Bruk identisk subjektiv grafikk for alle karakterer",
              "fr": "Appliquer des graphismes subjectifs identiques à tous les personnages",
              "pt": "Aplicar grafismos subjetivos idênticos a todas as personagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The design accounts distinguish Katie’s subjective visual layer from the surrounding world. A practical exercise would be to: Define when a character-specific graphic layer enters the scene.",
          "nb": "Designkildene skiller Katies subjektive bildelag fra verden rundt henne. En praktisk øvelse vil være å: Definer når et karakterspesifikt grafisk lag kommer inn i scenen.",
          "fr": "Les sources distinguent la couche visuelle subjective de Katie du monde environnant. Un exercice pratique consisterait à : Définir quand une couche graphique subjective entre dans la scène.",
          "pt": "As fontes distinguem a camada visual subjetiva de Katie do mundo envolvente. Um exercício prático consistiria em: Definir quando uma camada gráfica subjetiva entra na cena."
        },
        "sourceIds": [
          "s4",
          "s7"
        ]
      },
      {
        "id": "mitchells-performance",
        "area": "research",
        "prompt": {
          "en": "The director describes giving animators room to invent performance and staging. Which approach would you choose for a new production exercise?",
          "nb": "Regissøren beskriver hvordan animatørene fikk rom til å utvikle spill og iscenesettelse. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le réalisateur décrit la liberté donnée aux animateurs d’inventer jeu et mise en scène. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O realizador descreve liberdade dos animadores para inventar atuação e encenação. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Require animators to copy every storyboard gesture literally",
              "nb": "Krev at animatørene kopierer hver storyboardbevegelse ordrett",
              "fr": "Exiger une copie littérale de chaque geste du storyboard",
              "pt": "Exigir cópia literal de cada gesto do storyboard"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Review alternate acting beats against the scene intention",
              "nb": "Gjennomgå alternative spillnyanser mot scenens hensikt",
              "fr": "Examiner des variantes de jeu selon l’intention de la scène",
              "pt": "Rever variantes de atuação segundo a intenção da cena"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The director describes giving animators room to invent performance and staging. A practical exercise would be to: Review alternate acting beats against the scene intention.",
          "nb": "Regissøren beskriver hvordan animatørene fikk rom til å utvikle spill og iscenesettelse. En praktisk øvelse vil være å: Gjennomgå alternative spillnyanser mot scenens hensikt.",
          "fr": "Le réalisateur décrit la liberté donnée aux animateurs d’inventer jeu et mise en scène. Un exercice pratique consisterait à : Examiner des variantes de jeu selon l’intention de la scène.",
          "pt": "O realizador descreve liberdade dos animadores para inventar atuação e encenação. Um exercício prático consistiria em: Rever variantes de atuação segundo a intenção da cena."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_guillermo_del_toros_pinocchio_2022",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Puppet continuity, stop-motion lighting and material sound",
      "nb": "Dukkekontinuitet, stop-motion-lys og materiallyd",
      "fr": "Raccords de marionnettes, lumière stop motion et sons de matière",
      "pt": "Continuidade de marionetas, luz stop motion e som material"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Inside the Stop-Motion Magic of Guillermo del Toro's Pinocchio",
        "publisher": "Netflix Tudum",
        "url": "https://www.netflix.com/tudum/articles/pinocchio-stop-motion-behind-the-scenes"
      },
      {
        "id": "s4",
        "title": "Best of 2022: Guillermo del Toro's Pinocchio Animation Supervisor Brian Leif Hansen Packs Puppets With Emotion",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2022/12/guillermo-del-toros-pinocchio-animation-supervisor-brian-leif-hansen-packs-puppets-with-emotion-2/"
      },
      {
        "id": "s5",
        "title": "Guillermo del Toro's Pinocchio crew members. 2022",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/audio/playlist/327/4316"
      },
      {
        "id": "s7",
        "title": "Frank Passingham / Guillermo del Toro's Pinocchio",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/frank-passingham-guillermo-del-toros-pinocchio/"
      },
      {
        "id": "s8",
        "title": "Guillermo del Toro's Pinocchio",
        "publisher": "Boris FX / Art of the Cut",
        "url": "https://borisfx.com/blog/aotc/holly-klein-discuss-editing-the-stop-motion-animated-guillermo-del-toros-pinocchio/"
      },
      {
        "id": "s9",
        "title": "Perfecting Pinocchio's Distinct Sound for Director Del Toro – with Scott Gershin",
        "publisher": "A Sound Effect",
        "url": "https://www.asoundeffect.com/pinocchio-del-toro-film-sound/"
      },
      {
        "id": "s10",
        "title": "Alexandre Desplat. Score for Guillermo del Toro's Pinocchio. 2022",
        "publisher": "Museum of Modern Art",
        "url": "https://www.moma.org/audio/playlist/327/4320"
      }
    ],
    "questions": [
      {
        "id": "pinocchio-puppets",
        "area": "research",
        "prompt": {
          "en": "Production accounts describe duplicate puppets and geographically separated fabrication teams. Which approach would you choose for a new production exercise?",
          "nb": "Produksjonskildene beskriver duplikatdukker og geografisk adskilte fabrikasjonsteam. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les sources décrivent des marionnettes dupliquées et des équipes de fabrication éloignées. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "As fontes descrevem marionetas duplicadas e equipas de fabrico geograficamente separadas. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Maintain reference sheets and revision records for duplicate puppets",
              "nb": "Vedlikehold referanseark og revisjonslogger for duplikatdukker",
              "fr": "Tenir des fiches de référence et des historiques de révision",
              "pt": "Manter fichas de referência e registos de revisão"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Approve the result before comparing any alternatives",
              "nb": "Godkjenn resultatet før noen alternativer sammenlignes",
              "fr": "Valider le résultat avant de comparer les variantes",
              "pt": "Aprovar o resultado antes de comparar alternativas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Production accounts describe duplicate puppets and geographically separated fabrication teams. A practical exercise would be to: Maintain reference sheets and revision records for duplicate puppets.",
          "nb": "Produksjonskildene beskriver duplikatdukker og geografisk adskilte fabrikasjonsteam. En praktisk øvelse vil være å: Vedlikehold referanseark og revisjonslogger for duplikatdukker.",
          "fr": "Les sources décrivent des marionnettes dupliquées et des équipes de fabrication éloignées. Un exercice pratique consisterait à : Tenir des fiches de référence et des historiques de révision.",
          "pt": "As fontes descrevem marionetas duplicadas e equipas de fabrico geograficamente separadas. Um exercício prático consistiria em: Manter fichas de referência e registos de revisão."
        },
        "sourceIds": [
          "s2",
          "s4",
          "s5"
        ]
      },
      {
        "id": "pinocchio-lighting",
        "area": "camera",
        "prompt": {
          "en": "The cinematographer describes layered lighting and multi-pass integration. Which approach would you choose for a new production exercise?",
          "nb": "Filmfotografen beskriver lagdelt lyssetting og integrering av flere opptakspass. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le directeur photo décrit un éclairage en couches et une intégration multipasse. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O diretor de fotografia descreve iluminação em camadas e integração de várias passagens. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record lighting references and lock approved settings for each setup",
              "nb": "Registrer lysreferanser og lås godkjente innstillinger for hvert oppsett",
              "fr": "Consigner les références et verrouiller les réglages validés",
              "pt": "Registar referências e fixar configurações aprovadas por montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Adjust lighting randomly between consecutive animation frames",
              "nb": "Endre lys tilfeldig mellom påfølgende animasjonsbilder",
              "fr": "Modifier la lumière au hasard entre images successives",
              "pt": "Alterar iluminação ao acaso entre fotogramas consecutivos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematographer describes layered lighting and multi-pass integration. A practical exercise would be to: Record lighting references and lock approved settings for each setup.",
          "nb": "Filmfotografen beskriver lagdelt lyssetting og integrering av flere opptakspass. En praktisk øvelse vil være å: Registrer lysreferanser og lås godkjente innstillinger for hvert oppsett.",
          "fr": "Le directeur photo décrit un éclairage en couches et une intégration multipasse. Un exercice pratique consisterait à : Consigner les références et verrouiller les réglages validés.",
          "pt": "O diretor de fotografia descreve iluminação em camadas e integração de várias passagens. Um exercício prático consistiria em: Registar referências e fixar configurações aprovadas por montagem."
        },
        "sourceIds": [
          "s7",
          "s8"
        ]
      },
      {
        "id": "pinocchio-material",
        "area": "sound",
        "prompt": {
          "en": "The sound supervisor and composer describe material identity in sound and music. Which approach would you choose for a new production exercise?",
          "nb": "Lydansvarlig og komponist beskriver materialidentitet i lyd og musikk. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le superviseur son et le compositeur décrivent l’identité matérielle du son et de la musique. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O supervisor de som e o compositor descrevem identidade material no som e na música. Que abordagem escolheria para um novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical movement sounds for all materials",
              "nb": "Bruk identiske bevegelseslyder for alle materialer",
              "fr": "Utiliser les mêmes sons de mouvement pour toutes les matières",
              "pt": "Usar os mesmos sons de movimento para todos os materiais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Copy the original method without testing the new situation",
              "nb": "Kopier originalmetoden uten å prøve den nye situasjonen",
              "fr": "Copier la méthode originale sans tester la nouvelle situation",
              "pt": "Copiar o método original sem testar a nova situação"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record original wood and fabric textures for a character sound study",
              "nb": "Ta opp originale tre- og stofflyder til en karakterlydstudie",
              "fr": "Enregistrer des textures de bois et tissu pour une étude sonore",
              "pt": "Gravar texturas de madeira e tecido para um estudo sonoro"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound supervisor and composer describe material identity in sound and music. A practical exercise would be to: Record original wood and fabric textures for a character sound study.",
          "nb": "Lydansvarlig og komponist beskriver materialidentitet i lyd og musikk. En praktisk øvelse vil være å: Ta opp originale tre- og stofflyder til en karakterlydstudie.",
          "fr": "Le superviseur son et le compositeur décrivent l’identité matérielle du son et de la musique. Un exercice pratique consisterait à : Enregistrer des textures de bois et tissu pour une étude sonore.",
          "pt": "O supervisor de som e o compositor descrevem identidade material no som e na música. Um exercício prático consistiria em: Gravar texturas de madeira e tecido para um estudo sonoro."
        },
        "sourceIds": [
          "s9",
          "s10"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_kpop_demon_hunters_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Stylised animation, song dramaturgy and music-led editing",
      "nb": "Stilisert animasjon, sangdramaturgi og musikkstyrt klipp",
      "fr": "Animation stylisée, dramaturgie des chansons et montage musical",
      "pt": "Animação estilizada, dramaturgia das canções e montagem musical"
    },
    "sources": [
      {
        "id": "s2",
        "title": "From Spider-Man: Into the Spider-Verse to KPop Demon Hunters: Spotlighting the Evolution of SPA × Imageworks Collaborations",
        "publisher": "Sony Group",
        "url": "https://www.sony.com/en/SonyInfo/technology/stories/entries/kpop_demon_hunters/"
      },
      {
        "id": "s3",
        "title": "How Colors Tell the Story of KPop Demon Hunters",
        "publisher": "Netflix Tudum",
        "url": "https://www.netflix.com/tudum/features/kpop-demon-hunters-animators"
      },
      {
        "id": "s4",
        "title": "K-Pop Hitmaker Danny Chung on Crafting the Sound of KPop Demon Hunters",
        "publisher": "Netflix Tudum",
        "url": "https://www.netflix.com/tudum/articles/kpop-demon-hunters-danny-chung"
      },
      {
        "id": "s5",
        "title": "How Golden, the Musical Heart of KPop Demon Hunters, Is Living Up to Its Name",
        "publisher": "Netflix Tudum",
        "url": "https://www.netflix.com/tudum/features/kpop-demon-hunters-golden-oral-history"
      },
      {
        "id": "s6",
        "title": "KPop Demon Hunters Edited on Avid - Interview with Editor Nathan Schauf",
        "publisher": "PRONEWS",
        "url": "https://en.pronews.com/special/20251205120013340.html"
      },
      {
        "id": "s9",
        "title": "Art of the Cut: KPop Demon Hunters",
        "publisher": "Boris FX",
        "url": "https://borisfx.com/blog/aotc/art-of-the-cut-kpop-demon-hunters/"
      }
    ],
    "questions": [
      {
        "id": "kpop-style",
        "area": "camera",
        "prompt": {
          "en": "Hand-keyed animation and expressive motion graphics shape the image. Which approach would you choose in a new production exercise?",
          "nb": "Håndanimert bevegelse og ekspressiv bevegelsesgrafikk former bildet. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "L’animation manuelle et les graphismes expressifs façonnent l’image. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A animação manual e os grafismos expressivos moldam a imagem. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare stylised motion tests with realistic timing",
              "nb": "Sammenlign stiliserte bevegelsesprøver med realistisk timing",
              "fr": "Comparer des essais stylisés à un rythme réaliste",
              "pt": "Comparar testes estilizados com ritmo realista"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical realistic movement for every character",
              "nb": "Bruk identisk realistisk bevegelse for alle karakterer",
              "fr": "Utiliser le même mouvement réaliste pour chaque personnage",
              "pt": "Usar movimento realista idêntico para cada personagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume motion capture alone defines the visual style",
              "nb": "Anta at bevegelsesopptak alene definerer bildestilen",
              "fr": "Supposer que la capture de mouvement définit seule le style",
              "pt": "Supor que captura de movimento define sozinha o estilo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Hand-keyed animation and expressive motion graphics shape the image. In a new exercise, test this approach: Compare stylised motion tests with realistic timing.",
          "nb": "Håndanimert bevegelse og ekspressiv bevegelsesgrafikk former bildet. Prøv denne tilnærmingen i en ny øvelse: Sammenlign stiliserte bevegelsesprøver med realistisk timing.",
          "fr": "L’animation manuelle et les graphismes expressifs façonnent l’image. Dans un nouvel exercice, tester cette approche : Comparer des essais stylisés à un rythme réaliste.",
          "pt": "A animação manual e os grafismos expressivos moldam a imagem. Num novo exercício, testar esta abordagem: Comparar testes estilizados com ritmo realista."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "kpop-songs",
        "area": "research",
        "prompt": {
          "en": "The music team mapped songs to narrative beats before final production. Which approach would you choose in a new production exercise?",
          "nb": "Musikkteamet knyttet sangene til fortellingspunkter før sluttproduksjon. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "L’équipe musicale a lié les chansons aux étapes du récit avant la production finale. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A equipa musical ligou canções a momentos narrativos antes da produção final. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Separate lyrics from all character development",
              "nb": "Løsne sangtekstene fra all karakterutvikling",
              "fr": "Séparer les paroles de toute évolution des personnages",
              "pt": "Separar letras de toda evolução das personagens"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Write an original song brief with a dramatic turning point",
              "nb": "Skriv en original sangbrief med et dramatisk vendepunkt",
              "fr": "Rédiger un brief de chanson originale avec un tournant dramatique",
              "pt": "Criar um briefing de canção original com uma viragem dramática"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose songs solely by chart potential",
              "nb": "Velg sanger utelukkende etter hitpotensial",
              "fr": "Choisir les chansons uniquement pour leur potentiel commercial",
              "pt": "Escolher canções apenas pelo potencial comercial"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The music team mapped songs to narrative beats before final production. In a new exercise, test this approach: Write an original song brief with a dramatic turning point.",
          "nb": "Musikkteamet knyttet sangene til fortellingspunkter før sluttproduksjon. Prøv denne tilnærmingen i en ny øvelse: Skriv en original sangbrief med et dramatisk vendepunkt.",
          "fr": "L’équipe musicale a lié les chansons aux étapes du récit avant la production finale. Dans un nouvel exercice, tester cette approche : Rédiger un brief de chanson originale avec un tournant dramatique.",
          "pt": "A equipa musical ligou canções a momentos narrativos antes da produção final. Num novo exercício, testar esta abordagem: Criar um briefing de canção original com uma viragem dramática."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "kpop-edit",
        "area": "sound",
        "prompt": {
          "en": "Editorial work evolved as storyboards became finished animation, with music synchronization. Which approach would you choose in a new production exercise?",
          "nb": "Klippen utviklet seg fra storyboard til ferdig animasjon med musikksynkronisering. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le montage évoluait du storyboard à l’animation finale avec synchronisation musicale. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A montagem evoluiu do storyboard à animação final com sincronização musical. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Discard timing references after storyboard approval",
              "nb": "Kast tidsreferansene etter storyboardgodkjenning",
              "fr": "Éliminer les repères temporels après validation du storyboard",
              "pt": "Eliminar referências temporais após aprovação do storyboard"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Wait until final rendering to consider music synchronization",
              "nb": "Vent til ferdig rendering med å vurdere musikksynkronisering",
              "fr": "Attendre le rendu final pour considérer la synchronisation",
              "pt": "Esperar pela renderização final para considerar sincronização"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Keep approved music cues aligned across replacement stages",
              "nb": "Hold godkjente musikksignaler synkronisert gjennom utskifting av opptak",
              "fr": "Garder les repères musicaux synchronisés lors des remplacements",
              "pt": "Manter marcas musicais sincronizadas durante substituições"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Editorial work evolved as storyboards became finished animation, with music synchronization. In a new exercise, test this approach: Keep approved music cues aligned across replacement stages.",
          "nb": "Klippen utviklet seg fra storyboard til ferdig animasjon med musikksynkronisering. Prøv denne tilnærmingen i en ny øvelse: Hold godkjente musikksignaler synkronisert gjennom utskifting av opptak.",
          "fr": "Le montage évoluait du storyboard à l’animation finale avec synchronisation musicale. Dans un nouvel exercice, tester cette approche : Garder les repères musicaux synchronisés lors des remplacements.",
          "pt": "A montagem evoluiu do storyboard à animação final com sincronização musical. Num novo exercício, testar esta abordagem: Manter marcas musicais sincronizadas durante substituições."
        },
        "sourceIds": [
          "s6",
          "s9"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_new_world_2005",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Historical environment, natural light and version provenance",
      "nb": "Historisk miljø, naturlig lys og versjonsproveniens",
      "fr": "Décors historiques, lumière naturelle et provenance des versions",
      "pt": "Ambiente histórico, luz natural e proveniência das versões"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The New World",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/films/28713-the-new-world"
      },
      {
        "id": "s2",
        "title": "Film of the Month: The New World",
        "publisher": "BFI Sight and Sound",
        "url": "https://old.bfi.org.uk/sightandsound/review/3131"
      },
      {
        "id": "s3",
        "title": "American Cinematographer, January 2006: The New World / Uncharted Emotions",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/magazine/jan06.htm"
      },
      {
        "id": "s4",
        "title": "The New World",
        "publisher": "American Film Institute",
        "url": "https://watch.afi.com/movie/the-new-world"
      },
      {
        "id": "s5",
        "title": "Dreaming of a New World",
        "publisher": "Cincinnati CityBeat",
        "url": "https://www.citybeat.com/arts/film-dreaming-of-a-new-world-12176425/"
      },
      {
        "id": "s6",
        "title": "Inside the enduring movie homes of Jack Fisk, production design legend",
        "publisher": "Associated Press",
        "url": "https://apnews.com/article/90c5b0a569ae9653985252176d7ead7a"
      }
    ],
    "questions": [
      {
        "id": "newworld-design",
        "area": "research",
        "prompt": {
          "en": "Fisk describes researched physical environments built to accommodate fluid camera movement. Which approach would you choose in a new production exercise?",
          "nb": "Fisk beskriver kildebaserte fysiske miljøer bygget for flytende kamerabevegelse. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Fisk décrit des décors physiques documentés permettant une caméra fluide. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Fisk descreve ambientes físicos pesquisados para movimento fluido de câmara. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Review period details with historians and test camera access",
              "nb": "Gjennomgå periodedetaljer med historikere og prøv kameratilgang",
              "fr": "Vérifier les détails avec des historiens et tester l’accès caméra",
              "pt": "Rever detalhes históricos e testar acesso da câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Build only a facade without considering camera movement",
              "nb": "Bygg bare en fasade uten å vurdere kamerabevegelse",
              "fr": "Construire seulement une façade sans considérer la caméra",
              "pt": "Construir apenas fachada sem considerar movimento de câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat reconstructed spaces as surviving historical buildings",
              "nb": "Behandle rekonstruerte rom som bevarte historiske bygninger",
              "fr": "Traiter les décors reconstruits comme bâtiments historiques subsistants",
              "pt": "Tratar espaços reconstruídos como edifícios históricos sobreviventes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Fisk describes researched physical environments built to accommodate fluid camera movement. In a new exercise, test this approach: Review period details with historians and test camera access.",
          "nb": "Fisk beskriver kildebaserte fysiske miljøer bygget for flytende kamerabevegelse. Prøv denne tilnærmingen i en ny øvelse: Gjennomgå periodedetaljer med historikere og prøv kameratilgang.",
          "fr": "Fisk décrit des décors physiques documentés permettant une caméra fluide. Dans un nouvel exercice, tester cette approche : Vérifier les détails avec des historiens et tester l’accès caméra.",
          "pt": "Fisk descreve ambientes físicos pesquisados para movimento fluido de câmara. Num novo exercício, testar esta abordagem: Rever detalhes históricos e testar acesso da câmara."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      },
      {
        "id": "newworld-light",
        "area": "camera",
        "prompt": {
          "en": "Craft records describe natural-light photography and moving camera work. Which approach would you choose in a new production exercise?",
          "nb": "Fagkildene beskriver fotografering med naturlig lys og bevegelig kamera. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les sources décrivent la lumière naturelle et une caméra mobile. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "As fontes descrevem luz natural e câmara móvel. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Scout light at different hours and rehearse camera paths",
              "nb": "Befar lys til ulike tider og øv kamerabaner",
              "fr": "Repérer la lumière à diverses heures et répéter les trajets caméra",
              "pt": "Observar luz a várias horas e ensaiar trajetos de câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume daylight has the same quality throughout the day",
              "nb": "Anta at dagslyset har samme kvalitet hele dagen",
              "fr": "Supposer que la lumière du jour reste identique",
              "pt": "Supor que luz natural mantém a mesma qualidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Craft records describe natural-light photography and moving camera work. In a new exercise, test this approach: Scout light at different hours and rehearse camera paths.",
          "nb": "Fagkildene beskriver fotografering med naturlig lys og bevegelig kamera. Prøv denne tilnærmingen i en ny øvelse: Befar lys til ulike tider og øv kamerabaner.",
          "fr": "Les sources décrivent la lumière naturelle et une caméra mobile. Dans un nouvel exercice, tester cette approche : Repérer la lumière à diverses heures et répéter les trajets caméra.",
          "pt": "As fontes descrevem luz natural e câmara móvel. Num novo exercício, testar esta abordagem: Observar luz a várias horas e ensaiar trajetos de câmara."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "newworld-versions",
        "area": "research",
        "prompt": {
          "en": "Criterion documents three director-approved versions and a later restoration. Which approach would you choose in a new production exercise?",
          "nb": "Criterion dokumenterer tre regissørgodkjente versjoner og en senere restaurering. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Criterion documente trois versions approuvées et une restauration ultérieure. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Criterion documenta três versões aprovadas e restauro posterior. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Combine every version into one undocumented master",
              "nb": "Slå sammen alle versjoner til én udokumentert master",
              "fr": "Fusionner toutes les versions en un master non documenté",
              "pt": "Fundir todas as versões num master não documentado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Catalogue versions separately from restoration and original production",
              "nb": "Registrer versjoner separat fra restaurering og originalproduksjon",
              "fr": "Cataloguer les versions séparément de la restauration et de la production",
              "pt": "Catalogar versões separadamente de restauro e produção original"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Criterion documents three director-approved versions and a later restoration. In a new exercise, test this approach: Catalogue versions separately from restoration and original production.",
          "nb": "Criterion dokumenterer tre regissørgodkjente versjoner og en senere restaurering. Prøv denne tilnærmingen i en ny øvelse: Registrer versjoner separat fra restaurering og originalproduksjon.",
          "fr": "Criterion documente trois versions approuvées et une restauration ultérieure. Dans un nouvel exercice, tester cette approche : Cataloguer les versions séparément de la restauration et de la production.",
          "pt": "Criterion documenta três versões aprovadas e restauro posterior. Num novo exercício, testar esta abordagem: Catalogar versões separadamente de restauro e produção original."
        },
        "sourceIds": [
          "s0",
          "s4"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_anomalisa_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Sound-play adaptation, miniature continuity and subjective performance",
      "nb": "Lydbasert adaptasjon, miniatyrkontinuitet og subjektivt spill",
      "fr": "Adaptation sonore, raccords miniatures et jeu subjectif",
      "pt": "Adaptação sonora, continuidade de miniaturas e atuação subjetiva"
    },
    "sources": [
      {
        "id": "s0",
        "title": "The AFI FEST Interview: ANOMALISA Directors Charlie Kaufman and Duke Johnson",
        "publisher": "American Film Institute",
        "url": "https://www.afi.com/news/charlie-kaufman-anomalisa-duke-johnson-interview-afi-fest-2015/"
      },
      {
        "id": "s2",
        "title": "Puppets and Pantyhose: DP Joe Passarelli on Anomalisa",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/97174-puppets-and-pantyhose-dp-joe-passarelli-on-anomalisa/"
      },
      {
        "id": "s5",
        "title": "Anomalisa",
        "publisher": "Carter Burwell",
        "url": "https://www.carterburwell.com/projects/Anomalisa.shtml"
      },
      {
        "id": "s6",
        "title": "Directors Close-Up Recap: Anomalisa's Charlie Kaufman and Duke Johnson Explore Heartbreak in Miniature",
        "publisher": "Film Independent",
        "url": "https://www.filmindependent.org/blog/directors-close-up-recap-anomalisas-charlie-kaufman-and-duke-johnson-explore-heartbreak-in-miniature/"
      },
      {
        "id": "s7",
        "title": "Film of the week: Anomalisa",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-anomalisa"
      },
      {
        "id": "s8",
        "title": "Interview: John Joyce (Anomalisa)",
        "publisher": "Interiors",
        "url": "https://www.intjournal.com/interview/john-joyce"
      }
    ],
    "questions": [
      {
        "id": "anomalisa-adapt",
        "area": "sound",
        "prompt": {
          "en": "The feature originated as a sound play with three performers. Which approach would you choose in a new production exercise?",
          "nb": "Spillefilmen hadde opphav i et lydspill med tre utøvere. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le long métrage est issu d’une pièce sonore à trois interprètes. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A longa-metragem nasceu de uma peça sonora com três intérpretes. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Storyboard an original audio scene while preserving meaningful offscreen sound",
              "nb": "Lag storyboard til en original lydscene og bevar meningsfull lyd utenfor bildet",
              "fr": "Créer un storyboard sonore original en préservant le hors-champ sonore",
              "pt": "Criar storyboard de cena sonora original preservando som fora de campo"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Illustrate every sound literally on screen",
              "nb": "Illustrer hver lyd bokstavelig på skjermen",
              "fr": "Illustrer littéralement chaque son à l’écran",
              "pt": "Ilustrar literalmente cada som no ecrã"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace the audio structure before studying its rhythm",
              "nb": "Erstatt lydstrukturen før rytmen undersøkes",
              "fr": "Remplacer la structure sonore avant d’étudier son rythme",
              "pt": "Substituir estrutura sonora antes de estudar o ritmo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The feature originated as a sound play with three performers. In a new exercise, test this approach: Storyboard an original audio scene while preserving meaningful offscreen sound.",
          "nb": "Spillefilmen hadde opphav i et lydspill med tre utøvere. Prøv denne tilnærmingen i en ny øvelse: Lag storyboard til en original lydscene og bevar meningsfull lyd utenfor bildet.",
          "fr": "Le long métrage est issu d’une pièce sonore à trois interprètes. Dans un nouvel exercice, tester cette approche : Créer un storyboard sonore original en préservant le hors-champ sonore.",
          "pt": "A longa-metragem nasceu de uma peça sonora com três intérpretes. Num novo exercício, testar esta abordagem: Criar storyboard de cena sonora original preservando som fora de campo."
        },
        "sourceIds": [
          "s0",
          "s5"
        ]
      },
      {
        "id": "anomalisa-miniatures",
        "area": "camera",
        "prompt": {
          "en": "The cinematography account describes continuity challenges across eighteen miniature stages. Which approach would you choose in a new production exercise?",
          "nb": "Fotokilden beskriver kontinuitetsutfordringer på atten miniatyrscener. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le témoignage photo décrit des défis de raccord sur dix-huit plateaux miniatures. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O relato de fotografia descreve desafios de continuidade em dezoito palcos miniatura. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore small lighting changes because the sets are miniature",
              "nb": "Ignorer små lysendringer fordi kulissene er miniatyrer",
              "fr": "Ignorer les variations de lumière car les décors sont miniatures",
              "pt": "Ignorar variações de luz porque cenários são miniaturas"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Log miniature props, light and camera references between animation sessions",
              "nb": "Loggfør miniatyrrekvisitter, lys og kamerareferanser mellom animasjonsøkter",
              "fr": "Consigner accessoires, lumière et références caméra entre sessions",
              "pt": "Registar adereços, luz e referências de câmara entre sessões"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Move miniature furniture freely between consecutive frames",
              "nb": "Flytt miniatyrmøbler fritt mellom påfølgende bilder",
              "fr": "Déplacer librement les meubles entre images successives",
              "pt": "Mover móveis miniatura livremente entre fotogramas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematography account describes continuity challenges across eighteen miniature stages. In a new exercise, test this approach: Log miniature props, light and camera references between animation sessions.",
          "nb": "Fotokilden beskriver kontinuitetsutfordringer på atten miniatyrscener. Prøv denne tilnærmingen i en ny øvelse: Loggfør miniatyrrekvisitter, lys og kamerareferanser mellom animasjonsøkter.",
          "fr": "Le témoignage photo décrit des défis de raccord sur dix-huit plateaux miniatures. Dans un nouvel exercice, tester cette approche : Consigner accessoires, lumière et références caméra entre sessions.",
          "pt": "O relato de fotografia descreve desafios de continuidade em dezoito palcos miniatura. Num novo exercício, testar esta abordagem: Registar adereços, luz e referências de câmara entre sessões."
        },
        "sourceIds": [
          "s2",
          "s8"
        ]
      },
      {
        "id": "anomalisa-subjectivity",
        "area": "research",
        "prompt": {
          "en": "The recurring faces and voices express a restricted character viewpoint. Which approach would you choose in a new production exercise?",
          "nb": "Gjentatte ansikter og stemmer uttrykker et begrenset karakterperspektiv. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les visages et voix récurrents expriment un point de vue limité. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Rostos e vozes recorrentes exprimem um ponto de vista limitado. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use the same motif regardless of whose viewpoint governs the scene",
              "nb": "Bruk samme motiv uansett hvem som styrer scenens perspektiv",
              "fr": "Utiliser le même motif quel que soit le point de vue",
              "pt": "Usar o mesmo motivo independentemente do ponto de vista"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Explain every visual motif in a spoken narration",
              "nb": "Forklar hvert bildemotiv med fortellerstemme",
              "fr": "Expliquer chaque motif visuel par une narration",
              "pt": "Explicar cada motivo visual por narração"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Design original visual and vocal motifs tied to one character’s perception",
              "nb": "Utform originale bilde- og stemmemotiver knyttet til én karakters opplevelse",
              "fr": "Créer des motifs visuels et vocaux originaux liés à une perception",
              "pt": "Criar motivos visuais e vocais originais ligados a uma perceção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The recurring faces and voices express a restricted character viewpoint. In a new exercise, test this approach: Design original visual and vocal motifs tied to one character’s perception.",
          "nb": "Gjentatte ansikter og stemmer uttrykker et begrenset karakterperspektiv. Prøv denne tilnærmingen i en ny øvelse: Utform originale bilde- og stemmemotiver knyttet til én karakters opplevelse.",
          "fr": "Les visages et voix récurrents expriment un point de vue limité. Dans un nouvel exercice, tester cette approche : Créer des motifs visuels et vocaux originaux liés à une perception.",
          "pt": "Rostos e vozes recorrentes exprimem um ponto de vista limitado. Num novo exercício, testar esta abordagem: Criar motivos visuais e vocais originais ligados a uma perceção."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_amy_2015",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Archive provenance, witness voices and documentary music",
      "nb": "Arkivproveniens, vitnestemmer og dokumentarmusikk",
      "fr": "Provenance des archives, voix témoins et musique documentaire",
      "pt": "Proveniência de arquivo, vozes testemunhais e música documental"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Making Amy: how we created our Winehouse documentary",
        "publisher": "British Film Institute",
        "url": "https://www.bfi.org.uk/interviews/making-amy-how-we-created-our-winehouse-documentary"
      },
      {
        "id": "s4",
        "title": "WATCH: Asif Kapadia on Oscar-Nominated Amy",
        "publisher": "International Documentary Association",
        "url": "https://documentary.org/blog/watch-asif-kapadia-oscar-nominated-amy"
      },
      {
        "id": "s5",
        "title": "Asif Kapadia on Amy: The drinking, the bulimia, the drugs – nobody stopped it",
        "publisher": "The Guardian",
        "url": "https://www.theguardian.com/film/2015/jun/27/asif-kapadia-amy-winehouse-doc"
      },
      {
        "id": "s6",
        "title": "Amy from the archives",
        "publisher": "Televisual",
        "url": "https://www.televisual.com/news/amy-from-the-archives_bid-791/"
      },
      {
        "id": "s7",
        "title": "Chatting With Director Asif Kapadia About his Oscar-Nominated Doc Amy",
        "publisher": "Motion Picture Association",
        "url": "https://www.motionpictures.org/2016/02/chatting-director-asif-kapadia-about-his-oscar-nominated-doc-amy/"
      }
    ],
    "questions": [
      {
        "id": "amy-archive",
        "area": "research",
        "prompt": {
          "en": "The documentary draws on professional and private archival material. Which approach would you choose in a new production exercise?",
          "nb": "Dokumentaren bygger på profesjonelt og privat arkivmateriale. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le documentaire utilise des archives professionnelles et privées. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O documentário utiliza arquivos profissionais e privados. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Log provenance, rights and context before selecting footage",
              "nb": "Loggfør proveniens, rettigheter og kontekst før materialet velges",
              "fr": "Consigner provenance, droits et contexte avant sélection",
              "pt": "Registar proveniência, direitos e contexto antes da seleção"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat publicly posted footage as automatically cleared",
              "nb": "Behandle offentlig publiserte opptak som automatisk klarert",
              "fr": "Traiter les vidéos publiques comme automatiquement autorisées",
              "pt": "Tratar vídeos públicos como automaticamente autorizados"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The documentary draws on professional and private archival material. In a new exercise, test this approach: Log provenance, rights and context before selecting footage.",
          "nb": "Dokumentaren bygger på profesjonelt og privat arkivmateriale. Prøv denne tilnærmingen i en ny øvelse: Loggfør proveniens, rettigheter og kontekst før materialet velges.",
          "fr": "Le documentaire utilise des archives professionnelles et privées. Dans un nouvel exercice, tester cette approche : Consigner provenance, droits et contexte avant sélection.",
          "pt": "O documentário utiliza arquivos profissionais e privados. Num novo exercício, testar esta abordagem: Registar proveniência, direitos e contexto antes da seleção."
        },
        "sourceIds": [
          "s2",
          "s4",
          "s7"
        ]
      },
      {
        "id": "amy-voices",
        "area": "sound",
        "prompt": {
          "en": "Recorded testimony replaces visible talking heads in the documentary. Which approach would you choose in a new production exercise?",
          "nb": "Opptatte vitnestemmer erstatter synlige intervjupersoner i dokumentaren. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les témoignages enregistrés remplacent les intervenants visibles. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Testemunhos gravados substituem entrevistados visíveis. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Check whether archival images accurately contextualise the testimony",
              "nb": "Sjekk om arkivbildene gir vitnesbyrdet korrekt kontekst",
              "fr": "Vérifier que les images contextualisent fidèlement le témoignage",
              "pt": "Verificar se imagens contextualizam corretamente o testemunho"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use unrelated images as proof of a witness claim",
              "nb": "Bruk uvedkommende bilder som bevis for et vitneutsagn",
              "fr": "Utiliser des images sans rapport comme preuve",
              "pt": "Usar imagens sem relação como prova"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Recorded testimony replaces visible talking heads in the documentary. In a new exercise, test this approach: Check whether archival images accurately contextualise the testimony.",
          "nb": "Opptatte vitnestemmer erstatter synlige intervjupersoner i dokumentaren. Prøv denne tilnærmingen i en ny øvelse: Sjekk om arkivbildene gir vitnesbyrdet korrekt kontekst.",
          "fr": "Les témoignages enregistrés remplacent les intervenants visibles. Dans un nouvel exercice, tester cette approche : Vérifier que les images contextualisent fidèlement le témoignage.",
          "pt": "Testemunhos gravados substituem entrevistados visíveis. Num novo exercício, testar esta abordagem: Verificar se imagens contextualizam corretamente o testemunho."
        },
        "sourceIds": [
          "s4",
          "s5",
          "s6"
        ]
      },
      {
        "id": "amy-music",
        "area": "sound",
        "prompt": {
          "en": "The editorial team combined songs, archive audio and witness interviews. Which approach would you choose in a new production exercise?",
          "nb": "Klippeteamet kombinerte sanger, arkivlyd og vitneintervjuer. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "L’équipe de montage combinait chansons, sons d’archives et entretiens. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "A equipa de montagem combinou canções, áudio de arquivo e entrevistas. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use lyrics as independent evidence of disputed facts",
              "nb": "Bruk sangtekster som uavhengig bevis for omstridte fakta",
              "fr": "Utiliser les paroles comme preuve indépendante de faits contestés",
              "pt": "Usar letras como prova independente de factos contestados"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare cleared music excerpts with testimony without masking speech",
              "nb": "Sammenlign klarerte musikkutdrag med vitnesbyrd uten å maskere tale",
              "fr": "Comparer extraits musicaux autorisés et témoignages sans masquer la parole",
              "pt": "Comparar excertos musicais autorizados e testemunhos sem ocultar fala"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The editorial team combined songs, archive audio and witness interviews. In a new exercise, test this approach: Compare cleared music excerpts with testimony without masking speech.",
          "nb": "Klippeteamet kombinerte sanger, arkivlyd og vitneintervjuer. Prøv denne tilnærmingen i en ny øvelse: Sammenlign klarerte musikkutdrag med vitnesbyrd uten å maskere tale.",
          "fr": "L’équipe de montage combinait chansons, sons d’archives et entretiens. Dans un nouvel exercice, tester cette approche : Comparer extraits musicaux autorisés et témoignages sans masquer la parole.",
          "pt": "A equipa de montagem combinou canções, áudio de arquivo e entrevistas. Num novo exercício, testar esta abordagem: Comparar excertos musicais autorizados e testemunhos sem ocultar fala."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_filmworker_2017",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Invisible labour, interview follow-up and restoration records",
      "nb": "Usynlig arbeid, oppfølgingsintervjuer og restaureringsdokumentasjon",
      "fr": "Travail invisible, relances d’entretien et dossiers de restauration",
      "pt": "Trabalho invisível, seguimento de entrevistas e registos de restauro"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Filmworker (2017)",
        "publisher": "IDFA",
        "url": "https://www.idfa.nl/en/film/f0d57b00-e9a3-415d-8be2-b7be72944923/filmworker/"
      },
      {
        "id": "s4",
        "title": "Doc Star of the Month: Leon Vitali, Tony Zierra's Filmworker",
        "publisher": "International Documentary Association",
        "url": "https://www.documentary.org/column/doc-star-month-leon-vitali-tony-zierrasfilmworker"
      },
      {
        "id": "s5",
        "title": "Cannes 2017: Tony Zierra’s Filmworker",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/4562-cannes-2017-tony-zierra-s-filmworker"
      },
      {
        "id": "s6",
        "title": "It’s Kind of Heartbreaking Sometimes to See Actors Try So Hard: Leon Vitali on the Acting Profession, Working with Stanley Kubrick, and Tony Zierra’s Doc, Filmworker",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/105323-its-kind-of-heartbreaking-sometimes-to-see-actors-try-so-hard-leon-vitali-on-the-acting-profession-and-his-stanley-kubrick-doc-filmworker/"
      },
      {
        "id": "s7",
        "title": "Cannes Film Festival: A Six-Letter Word",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/article/cannes-2017-lover-for-a-day-the-florida-project/"
      },
      {
        "id": "s8",
        "title": "Cannes 2017: Stanley Kubrick's mysterious right-hand man steps out of the shadows",
        "publisher": "Los Angeles Times",
        "url": "https://www.latimes.com/entertainment/movies/la-et-mn-kubrick-leon-vitali-20170518-story.html"
      },
      {
        "id": "s10",
        "title": "Cannes 2017: Claire's Camera, Filmworker, Unforgiven",
        "publisher": "RogerEbert.com",
        "url": "https://www.rogerebert.com/festivals/cannes-2017-claires-camerafilmworker-unforgiven"
      }
    ],
    "questions": [
      {
        "id": "filmworker-credits",
        "area": "research",
        "prompt": {
          "en": "Vitali describes work spanning casting, performance coaching and post-production. Which approach would you choose in a new production exercise?",
          "nb": "Vitali beskriver arbeid fra casting og skuespillerveiledning til etterarbeid. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Vitali décrit un travail du casting à la postproduction. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Vitali descreve trabalho do casting à pós-produção. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Create a role ledger distinguishing credited and documented contributions",
              "nb": "Lag en rollelogg som skiller krediterte og dokumenterte bidrag",
              "fr": "Créer un registre distinguant contributions créditées et documentées",
              "pt": "Criar registo distinguindo contribuições creditadas e documentadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute every contribution to the director",
              "nb": "Tilskriv alle bidrag til regissøren",
              "fr": "Attribuer chaque contribution au réalisateur",
              "pt": "Atribuir todas as contribuições ao realizador"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Vitali describes work spanning casting, performance coaching and post-production. In a new exercise, test this approach: Create a role ledger distinguishing credited and documented contributions.",
          "nb": "Vitali beskriver arbeid fra casting og skuespillerveiledning til etterarbeid. Prøv denne tilnærmingen i en ny øvelse: Lag en rollelogg som skiller krediterte og dokumenterte bidrag.",
          "fr": "Vitali décrit un travail du casting à la postproduction. Dans un nouvel exercice, tester cette approche : Créer un registre distinguant contributions créditées et documentées.",
          "pt": "Vitali descreve trabalho do casting à pós-produção. Num novo exercício, testar esta abordagem: Criar registo distinguindo contribuições creditadas e documentadas."
        },
        "sourceIds": [
          "s4",
          "s6"
        ]
      },
      {
        "id": "filmworker-interviews",
        "area": "research",
        "prompt": {
          "en": "The documentary uses multiple witnesses and follow-up questions. Which approach would you choose in a new production exercise?",
          "nb": "Dokumentaren bruker flere vitner og oppfølgingsspørsmål. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Le documentaire utilise plusieurs témoins et des questions de relance. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "O documentário usa múltiplas testemunhas e perguntas de seguimento. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare overlapping accounts and retain disagreements",
              "nb": "Sammenlign overlappende beretninger og behold uenigheter",
              "fr": "Comparer récits convergents et conserver les désaccords",
              "pt": "Comparar relatos convergentes e preservar divergências"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove all testimony contradicting the first interview",
              "nb": "Fjern alle vitneutsagn som motsier første intervju",
              "fr": "Supprimer les témoignages contredisant le premier entretien",
              "pt": "Eliminar testemunhos que contradizem a primeira entrevista"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The documentary uses multiple witnesses and follow-up questions. In a new exercise, test this approach: Compare overlapping accounts and retain disagreements.",
          "nb": "Dokumentaren bruker flere vitner og oppfølgingsspørsmål. Prøv denne tilnærmingen i en ny øvelse: Sammenlign overlappende beretninger og behold uenigheter.",
          "fr": "Le documentaire utilise plusieurs témoins et des questions de relance. Dans un nouvel exercice, tester cette approche : Comparer récits convergents et conserver les désaccords.",
          "pt": "O documentário usa múltiplas testemunhas e perguntas de seguimento. Num novo exercício, testar esta abordagem: Comparar relatos convergentes e preservar divergências."
        },
        "sourceIds": [
          "s1",
          "s5",
          "s10"
        ]
      },
      {
        "id": "filmworker-restoration",
        "area": "camera",
        "prompt": {
          "en": "Interviews document print checks, transfer review and colour timing. Which approach would you choose in a new production exercise?",
          "nb": "Intervjuer dokumenterer kopikontroll, gjennomgang av overføringer og fargetiming. Hvilken tilnærming ville du valgt i en ny produksjonsøvelse?",
          "fr": "Les entretiens documentent contrôle de copies, transferts et étalonnage. Quelle approche choisiriez-vous pour un nouvel exercice de production ?",
          "pt": "Entrevistas documentam controlo de cópias, transferências e correção de cor. Que abordagem escolheria num novo exercício de produção?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat a later restoration as identical to original release material",
              "nb": "Behandle en senere restaurering som identisk med originalt visningsmateriale",
              "fr": "Traiter une restauration comme identique à la copie originale",
              "pt": "Tratar restauro como idêntico ao material original"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Approve the method without checking the requirements",
              "nb": "Godkjenn metoden uten å undersøke kravene",
              "fr": "Valider la méthode sans vérifier les exigences",
              "pt": "Aprovar o método sem verificar os requisitos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record source elements and approval history for a restoration exercise",
              "nb": "Registrer kildemateriale og godkjenningshistorikk for en restaureringsøvelse",
              "fr": "Consigner éléments sources et historique de validation pour un exercice",
              "pt": "Registar elementos fonte e histórico de aprovação para um exercício"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Interviews document print checks, transfer review and colour timing. In a new exercise, test this approach: Record source elements and approval history for a restoration exercise.",
          "nb": "Intervjuer dokumenterer kopikontroll, gjennomgang av overføringer og fargetiming. Prøv denne tilnærmingen i en ny øvelse: Registrer kildemateriale og godkjenningshistorikk for en restaureringsøvelse.",
          "fr": "Les entretiens documentent contrôle de copies, transferts et étalonnage. Dans un nouvel exercice, tester cette approche : Consigner éléments sources et historique de validation pour un exercice.",
          "pt": "Entrevistas documentam controlo de cópias, transferências e correção de cor. Num novo exercício, testar esta abordagem: Registar elementos fonte e histórico de aprovação para um exercício."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s8"
        ]
      }
    ]
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
