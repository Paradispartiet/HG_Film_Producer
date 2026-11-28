import type { SourceBackedCaseWorkshop } from "./scenarioProductionSourceWorkshops.js";

export const sourceWorkshops2024 = [
  {
    "scenarioId": "scenario_the_brutalist_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Large-format workflow, architectural design and location acoustics",
      "nb": "Storformatflyt, arkitektonisk design og stedsakustikk",
      "fr": "Chaîne grand format, architecture et acoustique des lieux",
      "pt": "Fluxo de grande formato, arquitetura e acústica local"
    },
    "sources": [
      {
        "id": "s4",
        "title": "DP Lol Crawley BSC harnesses KODAK film and 8-perf VistaVision on The Brutalist",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/the-brutalist/"
      },
      {
        "id": "s5",
        "title": "The Brutalist Producers on the Demands and Delights of Building a Masterpiece",
        "publisher": "Motion Picture Association / The Credits",
        "url": "https://www.motionpictures.org/2025/02/the-brutalist-producers-on-the-demands-and-delights-of-building-a-masterpiece/"
      },
      {
        "id": "s6",
        "title": "In The Brutalist, Judy Becker's Spectacular Production Design Is the Film's Other Main Character",
        "publisher": "Vogue",
        "url": "https://www.vogue.com/article/the-brutalist-production-design-judy-becker-interview"
      },
      {
        "id": "s7",
        "title": "The Brutalist's Oscar-Nominated DP on Shooting VistaVision, More",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/the-brutalists-oscar-nominated-dp-on-shooting-vistavision-more/"
      },
      {
        "id": "s8",
        "title": "Why Oscar contender The Brutalist was shot on VistaVision",
        "publisher": "RedShark News",
        "url": "https://www.redsharknews.com/why-epic-period-drama-movie-the-brutalist-was-shot-on-vistavision"
      },
      {
        "id": "s9",
        "title": "Behind the scenes on The Brutalist",
        "publisher": "RedShark News",
        "url": "https://www.redsharknews.com/behind-the-scenes-on-the-brutalist"
      },
      {
        "id": "s10",
        "title": "Behind The Brutalist's Expressive Sound – with Sound Designer Andy Neil",
        "publisher": "A Sound Effect",
        "url": "https://www.asoundeffect.com/the-brutalist-film-sound/"
      },
      {
        "id": "s11",
        "title": "The Brutalist Composer Daniel Blumberg on His Striking, Oscar-Nominated Score",
        "publisher": "Pitchfork",
        "url": "https://pitchfork.com/features/interview/the-brutalist-composer-daniel-blumberg-on-his-striking-oscar-nominated-score/"
      }
    ],
    "questions": [
      {
        "id": "brutalist-format",
        "area": "camera",
        "prompt": {
          "en": "How should VistaVision scans and exhibition formats be tracked?",
          "nb": "Hvordan bør VistaVision-skann og visningsformater registreres?",
          "fr": "Comment suivre scans VistaVision et formats de projection ?",
          "pt": "Como acompanhar scans VistaVision e formatos de exibição?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Separate acquisition, scan masters and delivery versions",
              "nb": "Skill opptak, skannmastere og leveranseversjoner",
              "fr": "Séparer captation, masters scannés et livraisons",
              "pt": "Separar captação, masters digitalizados e entregas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat 70mm projection as the camera format",
              "nb": "Behandle 70 mm-visning som kameraformatet",
              "fr": "Traiter la projection 70 mm comme format caméra",
              "pt": "Tratar projeção 70 mm como formato de câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Keep only the smallest delivery file",
              "nb": "Behold bare den minste leveransefilen",
              "fr": "Garder uniquement le plus petit fichier livré",
              "pt": "Guardar apenas o menor ficheiro entregue"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak and Jancsó document VistaVision acquisition, 6K scans and multiple deliveries. Build a provenance ledger that distinguishes these stages.",
          "nb": "Kodak og Jancsó dokumenterer VistaVision-opptak, 6K-skann og flere leveranser. Lag en kildeopphavslogg som skiller trinnene.",
          "fr": "Kodak et Jancsó documentent VistaVision, scans 6K et livraisons multiples. Créez un registre distinguant ces étapes.",
          "pt": "Kodak e Jancsó documentam VistaVision, scans 6K e várias entregas. Crie registo distinguindo etapas."
        },
        "sourceIds": [
          "s4",
          "s8",
          "s9"
        ]
      },
      {
        "id": "brutalist-architecture",
        "area": "research",
        "prompt": {
          "en": "How can a fictional building combine models and existing structures?",
          "nb": "Hvordan kan en fiktiv bygning kombinere modeller og eksisterende bygg?",
          "fr": "Comment un bâtiment fictif combine-t-il maquettes et structures existantes ?",
          "pt": "Como pode edifício fictício combinar maquetes e estruturas existentes?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume the whole building existed at one location",
              "nb": "Anta at hele bygningen eksisterte på ett sted",
              "fr": "Supposer que tout le bâtiment existait en un seul lieu",
              "pt": "Supor que todo edifício existia num local"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore scale relationships between components",
              "nb": "Ignorer skalaforhold mellom komponentene",
              "fr": "Ignorer les rapports d’échelle entre éléments",
              "pt": "Ignorar relações de escala entre componentes"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Map built, found and digital elements before filming",
              "nb": "Kartlegg bygde, eksisterende og digitale elementer før opptak",
              "fr": "Cartographier éléments construits, trouvés et numériques",
              "pt": "Mapear elementos construídos, encontrados e digitais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The design accounts describe models, adapted Hungarian locations and selective digital additions. Plan an original architectural composite with a scale map.",
          "nb": "Designkildene beskriver modeller, tilpassede ungarske steder og selektive digitale tillegg. Planlegg en egen arkitekturkompositt med skalakart.",
          "fr": "Les sources décrivent maquettes, lieux hongrois adaptés et ajouts numériques. Concevez un composite architectural avec plan d’échelle.",
          "pt": "As fontes descrevem maquetes, locais húngaros adaptados e adições digitais. Planeie composição arquitetónica com mapa de escala."
        },
        "sourceIds": [
          "s5",
          "s6",
          "s7"
        ]
      },
      {
        "id": "brutalist-acoustics",
        "area": "sound",
        "prompt": {
          "en": "How can architectural acoustics inform music and sound design?",
          "nb": "Hvordan kan arkitektonisk akustikk informere musikk og lyddesign?",
          "fr": "Comment l’acoustique architecturale nourrit-elle musique et son ?",
          "pt": "Como pode acústica arquitetónica informar música e som?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat all score recordings as production dialogue",
              "nb": "Behandle alle musikkopptak som opptaksdialog",
              "fr": "Traiter toute musique comme dialogue de tournage",
              "pt": "Tratar música como diálogo de rodagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare safe location recordings and original instrumental sketches",
              "nb": "Sammenlign trygge stedsopptak og egne instrumentskisser",
              "fr": "Comparer prises de lieux sûres et esquisses instrumentales",
              "pt": "Comparar gravações locais seguras e esboços instrumentais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use one generic reverberation for every space",
              "nb": "Bruk én generisk romklang i alle rom",
              "fr": "Utiliser une réverbération générique partout",
              "pt": "Usar uma reverberação genérica em todos os espaços"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The sound designer discusses architectural perspective; Blumberg describes prepared piano and quarry acoustics. Test original recordings in contrasting safe spaces.",
          "nb": "Lyddesigneren omtaler arkitektonisk perspektiv; Blumberg beskriver preparert piano og steinbruddsakustikk. Prøv egne opptak i kontrasterende trygge rom.",
          "fr": "Le concepteur son évoque l’architecture ; Blumberg le piano préparé et l’acoustique de carrière. Testez des sons originaux dans des lieux sûrs.",
          "pt": "O designer de som aborda arquitetura; Blumberg piano preparado e acústica de pedreira. Teste sons originais em espaços seguros."
        },
        "sourceIds": [
          "s10",
          "s11"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_all_we_imagine_as_light_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Seasonal production, documentary texture and monsoon sound",
      "nb": "Sesongproduksjon, dokumentarisk tekstur og monsunlyd",
      "fr": "Production saisonnière, texture documentaire et son de mousson",
      "pt": "Produção sazonal, textura documental e som de monção"
    },
    "sources": [
      {
        "id": "s1",
        "title": "All We Imagine as Light — international press kit",
        "publisher": "Festival de Cannes",
        "url": "https://cdn.festival-cannes.com/media/uploads/2024/05/174238.pdf"
      },
      {
        "id": "s4",
        "title": "All We Imagine as Light wins the Grand Prix at the 2024 Cannes Film Festival",
        "publisher": "Cooke Optics",
        "url": "https://cookeoptics.com/news-and-events/all-we-imagine-as-light-shot-on-cooke-s4-i-lenses-wins-the-grand-prix-at-the-2024-cannes-film-festival/"
      },
      {
        "id": "s5",
        "title": "How Payal Kapadia blended documentary and fiction for All We Imagine as Light",
        "publisher": "Screen International",
        "url": "https://www.screendaily.com/features/how-payal-kapadia-blended-documentary-and-fiction-for-all-we-imagine-as-light/5200549.article"
      },
      {
        "id": "s6",
        "title": "I Had Given Up on this Film: Payal Kapadia on All We Imagine as Light",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/127929-interview-payal-kapadia-all-we-imagine-as-light/"
      },
      {
        "id": "s7",
        "title": "Payal Kapadia AMA on All We Imagine as Light",
        "publisher": "Reddit r/india",
        "url": "https://www.reddit.com/r/india/comments/1hl9lwc/hi_im_payal_kapadia_its_time_for_an_ama_on_rindia/"
      },
      {
        "id": "s8",
        "title": "Love Is Political: Payal Kapadia on All We Imagine as Light",
        "publisher": "RogerEbert.com",
        "url": "https://www.rogerebert.com/interviews/love-is-political-payal-kapadia-on-all-we-imagine-as-light"
      }
    ],
    "questions": [
      {
        "id": "imaginelight-season",
        "area": "research",
        "prompt": {
          "en": "How can two seasonal shooting blocks inform a film's development?",
          "nb": "Hvordan kan to sesongbaserte opptaksblokker forme en films utvikling?",
          "fr": "Comment deux périodes saisonnières nourrissent-elles un film ?",
          "pt": "Como podem dois blocos sazonais informar desenvolvimento do filme?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Review a provisional cut and plan the next block accordingly",
              "nb": "Gjennomgå foreløpig klipp og planlegg neste blokk deretter",
              "fr": "Revoir le prémontage et adapter le bloc suivant",
              "pt": "Rever montagem provisória e adaptar bloco seguinte"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume footage cannot be reviewed between blocks",
              "nb": "Anta at opptak ikke kan vurderes mellom blokkene",
              "fr": "Supposer que les prises ne se revoient pas entre blocs",
              "pt": "Supor que imagens não podem ser revistas entre blocos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore seasonal continuity in the schedule",
              "nb": "Ignorer sesongkontinuitet i opptaksplanen",
              "fr": "Ignorer la continuité saisonnière du planning",
              "pt": "Ignorar continuidade sazonal do calendário"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kapadia describes monsoon and later coastal blocks with a rough-cut review between them. Plan a fictional two-block production with a review checkpoint.",
          "nb": "Kapadia beskriver monsun- og kystblokker med grovklippgjennomgang imellom. Planlegg en fiktiv produksjon i to blokker med gjennomgangspunkt.",
          "fr": "Kapadia décrit deux périodes et un prémontage intermédiaire. Planifiez une fiction en deux blocs avec revue.",
          "pt": "Kapadia descreve dois períodos e montagem provisória intermédia. Planeie ficção em dois blocos com revisão."
        },
        "sourceIds": [
          "s1",
          "s5"
        ]
      },
      {
        "id": "imaginelight-texture",
        "area": "camera",
        "prompt": {
          "en": "How can small-camera material coexist with planned fictional photography?",
          "nb": "Hvordan kan småkameraopptak sameksistere med planlagt fiksjonsfoto?",
          "fr": "Comment des prises légères coexistent-elles avec une fiction préparée ?",
          "pt": "Como podem imagens de câmara pequena coexistir com ficção planeada?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every shot came from the same camera",
              "nb": "Anta at alle bilder kom fra samme kamera",
              "fr": "Supposer que tous les plans viennent de la même caméra",
              "pt": "Supor que todos os planos vêm da mesma câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Call fictional images authentic documentary evidence",
              "nb": "Kall fiktive bilder autentiske dokumentarbevis",
              "fr": "Appeler les images fictives des preuves documentaires",
              "pt": "Chamar imagens fictícias de provas documentais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track capture provenance and compare deliberate texture tests",
              "nb": "Registrer opptaksopphav og sammenlign bevisste teksturprøver",
              "fr": "Documenter la captation et comparer les essais de texture",
              "pt": "Registar captação e comparar testes de textura"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Das and Kapadia describe digital capture, a small additional camera and deliberate texture. Test original images while keeping fiction and observation distinct.",
          "nb": "Das og Kapadia beskriver digitale opptak, et lite tilleggskamera og bevisst tekstur. Prøv egne bilder og hold fiksjon og observasjon adskilt.",
          "fr": "Das et Kapadia décrivent captation numérique, petite caméra et texture voulue. Testez des images en distinguant fiction et observation.",
          "pt": "Das e Kapadia descrevem captação digital, câmara pequena e textura deliberada. Teste imagens distinguindo ficção e observação."
        },
        "sourceIds": [
          "s4",
          "s6",
          "s7"
        ]
      },
      {
        "id": "imaginelight-rain",
        "area": "sound",
        "prompt": {
          "en": "How can weather become a coordinated sensory design element?",
          "nb": "Hvordan kan vær bli et samordnet sanselig designelement?",
          "fr": "Comment la météo devient-elle un élément sensoriel coordonné ?",
          "pt": "Como pode clima tornar-se elemento sensorial coordenado?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat weather sound as unrelated to the image palette",
              "nb": "Behandle værlyd som urelatert til bildepaletten",
              "fr": "Traiter la météo sonore comme étrangère à la palette",
              "pt": "Tratar som climático como alheio à paleta"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare light, costume texture and safe ambient recordings",
              "nb": "Sammenlign lys, kostymetekstur og trygge miljølydopptak",
              "fr": "Comparer lumière, textures des costumes et ambiances sûres",
              "pt": "Comparar luz, textura de figurino e ambientes seguros"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Add identical rain effects to every scene",
              "nb": "Legg identiske regneffekter i alle scener",
              "fr": "Ajouter la même pluie à chaque scène",
              "pt": "Adicionar chuva idêntica a cada cena"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kapadia describes rain, humidity, blue-gray light and sound as connected choices. Design a harmless original rainy-day study with coordinated image and sound.",
          "nb": "Kapadia beskriver regn, fuktighet, blågrått lys og lyd som sammenhengende valg. Lag en ufarlig regnværsstudie med samordnet bilde og lyd.",
          "fr": "Kapadia décrit pluie, humidité, lumière bleu-gris et son liés. Concevez une étude sûre coordonnant image et son.",
          "pt": "Kapadia descreve chuva, humidade, luz azul-cinza e som ligados. Crie estudo seguro coordenando imagem e som."
        },
        "sourceIds": [
          "s5",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_seed_of_the_sacred_fig_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Location preparation, available light and editorial perspective",
      "nb": "Stedsforberedelse, tilgjengelig lys og klippeperspektiv",
      "fr": "Préparation des lieux, lumière disponible et perspective de montage",
      "pt": "Preparação de locais, luz disponível e perspetiva de montagem"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Interview with The Seed of the Sacred Fig Director Mohammad Rasoulof",
        "publisher": "Film Festival Today",
        "url": "https://filmfestivaltoday.com/interviews/interview-with-the-seed-of-the-sacred-fig-director-mohammad-rasoulof"
      },
      {
        "id": "s5",
        "title": "The Seed of the Sacred Fig Director Mohammad Rasoulof on Filming in Secret and the Repression of the Islamic Republic",
        "publisher": "The Film Stage",
        "url": "https://thefilmstage.com/the-seed-of-the-sacred-fig-director-mohammad-rasoulof-on-filming-in-secret-and-the-repression-of-the-iranian-republic/"
      },
      {
        "id": "s6",
        "title": "The Seed of the Sacred Fig",
        "publisher": "European Film Academy",
        "url": "https://www.europeanfilmacademy.org/the-seed-of-the-sacred-fig/"
      },
      {
        "id": "s7",
        "title": "The Seed of the Sacred Fig — Interview with Editor Andrew Bird",
        "publisher": "Offscreen Central",
        "url": "https://offscreencentral.com/2025/01/03/the-seed-of-the-sacred-fig-interview-with-editor-andrew-bird/"
      }
    ],
    "questions": [
      {
        "id": "sacredfig-space",
        "area": "research",
        "prompt": {
          "en": "How can advance location research support a constrained production?",
          "nb": "Hvordan kan forhåndsresearch av steder støtte en begrenset produksjon?",
          "fr": "Comment les repérages préalables aident-ils une production contrainte ?",
          "pt": "Como pode pesquisa prévia de locais apoiar produção limitada?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan permitted locations and rehearse spatial relationships",
              "nb": "Planlegg tillatte steder og øv inn romforbindelser",
              "fr": "Prévoir des lieux autorisés et répéter les relations spatiales",
              "pt": "Planear locais autorizados e ensaiar relações espaciais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume location limitations remove preparation needs",
              "nb": "Anta at stedsbegrensninger fjerner behovet for forberedelse",
              "fr": "Supposer que les contraintes dispensent de préparation",
              "pt": "Supor que restrições dispensam preparação"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore actor sightlines when planning interiors",
              "nb": "Ignorer skuespillernes siktlinjer ved interiørplanlegging",
              "fr": "Ignorer les axes des acteurs dans les intérieurs",
              "pt": "Ignorar linhas de visão dos atores nos interiores"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rasoulof describes advance selection and apartment mise-en-scène. Study a permitted neutral interior, without attempting to replicate the production's security-sensitive circumstances.",
          "nb": "Rasoulof beskriver forhåndsvalg og leilighetsiscenesettelse. Studer et tillatt nøytralt interiør uten å gjenskape produksjonens sikkerhetsfølsomme forhold.",
          "fr": "Rasoulof décrit repérages et mise en scène intérieure. Étudiez un intérieur autorisé sans reproduire les circonstances sensibles de production.",
          "pt": "Rasoulof descreve seleção prévia e encenação interior. Estude interior autorizado sem reproduzir circunstâncias sensíveis da produção."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      },
      {
        "id": "sacredfig-light",
        "area": "camera",
        "prompt": {
          "en": "How can limited lighting resources shape a visual plan?",
          "nb": "Hvordan kan begrensede lysressurser forme en bildeplan?",
          "fr": "Comment des moyens lumineux limités façonnent-ils un plan visuel ?",
          "pt": "Como podem recursos de luz limitados moldar plano visual?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Use identical exposure regardless of light changes",
              "nb": "Bruk identisk eksponering uansett lysendringer",
              "fr": "Employer la même exposition malgré les variations",
              "pt": "Usar exposição igual apesar das mudanças de luz"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer all camera details from a single source",
              "nb": "Utled alle kameradetaljer fra én enkelt kilde",
              "fr": "Déduire tous les détails caméra d’une seule source",
              "pt": "Deduzir detalhes de câmara de uma única fonte"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test available light at different times in a permitted space",
              "nb": "Prøv tilgjengelig lys til ulike tider i et tillatt rom",
              "fr": "Tester la lumière disponible à divers moments dans un lieu autorisé",
              "pt": "Testar luz disponível em vários horários num local autorizado"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rasoulof describes natural-light-first scouting and a limited package. Test a legal, ordinary scene with a daylight log and distinguish equipment reports from shooting methods.",
          "nb": "Rasoulof beskriver research med naturlig lys først og begrenset utstyr. Prøv en ordinær lovlig scene med dagslyslogg og skill utstyrskilder fra opptaksmetoder.",
          "fr": "Rasoulof décrit repérages selon la lumière naturelle et moyens limités. Testez une scène autorisée avec journal lumineux en distinguant matériel et méthode.",
          "pt": "Rasoulof descreve pesquisa segundo luz natural e recursos limitados. Teste cena autorizada com diário de luz distinguindo equipamento e método."
        },
        "sourceIds": [
          "s3",
          "s5"
        ]
      },
      {
        "id": "sacredfig-perspective",
        "area": "research",
        "prompt": {
          "en": "How can a revised edit change the audience's narrative perspective?",
          "nb": "Hvordan kan revidert klipp endre publikums fortellerperspektiv?",
          "fr": "Comment un remontage modifie-t-il le point de vue du public ?",
          "pt": "Como pode remontagem alterar perspetiva narrativa do público?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard credited editorial contributions from records",
              "nb": "Fjern krediterte klippebidrag fra dokumentasjonen",
              "fr": "Effacer les contributions de montage des dossiers",
              "pt": "Apagar contributos de montagem dos registos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare alternative scene orders and record changes in knowledge",
              "nb": "Sammenlign alternative scenerekkefølger og registrer kunnskapsendringer",
              "fr": "Comparer les ordres de scènes et noter les changements de savoir",
              "pt": "Comparar ordens de cenas e registar mudanças de conhecimento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume an early ending must remain unchanged",
              "nb": "Anta at en tidlig slutt må forbli uendret",
              "fr": "Supposer que la fin initiale doit rester intacte",
              "pt": "Supor que final inicial deve ficar intacto"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Bird describes narrative tightening, revised perspective and ending changes. Compare original fictional edit outlines while retaining attribution and version history.",
          "nb": "Bird beskriver narrativ innstramming, revidert perspektiv og endret slutt. Sammenlign egne fiktive klippeplaner med bevart kreditering og versjonshistorikk.",
          "fr": "Bird décrit resserrement, perspective révisée et fin modifiée. Comparez des structures fictives en gardant crédits et versions.",
          "pt": "Bird descreve condensação, perspetiva revista e final alterado. Compare estruturas fictícias mantendo créditos e versões."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_furiosa_a_mad_max_saga_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Previsualization, physical-digital continuity and immersive mixing",
      "nb": "Forhåndsvisualisering, fysisk-digital kontinuitet og romlig miks",
      "fr": "Prévisualisation, continuité physique-numérique et mixage immersif",
      "pt": "Pré-visualização, continuidade físico-digital e mistura imersiva"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Putting the motion in pictures with Adam Kuiper",
        "publisher": "Screen NSW",
        "url": "https://www.screen.nsw.gov.au/news/putting-the-motion-in-pictures-with-adam-kuiper"
      },
      {
        "id": "s4",
        "title": "Simon Duggan ASC ACS on Furiosa: A Mad Max Saga",
        "publisher": "ARRI Rental",
        "url": "https://www.arrirental.com/en/about/overview/news/simon-duggan-asc-acs-on-furiosa-a-mad-max-saga"
      },
      {
        "id": "s6",
        "title": "Furiosa Art Director Jacinta Leong on Building Flying Motorcycles & That Breathtaking 15-Minute Action Sequence",
        "publisher": "Motion Picture Association - The Credits",
        "url": "https://www.motionpictures.org/2024/05/furiosa-art-director-jacinta-leong-on-building-flying-motorcycles-that-breathtaking-15-minute-action-sequence/"
      },
      {
        "id": "s7",
        "title": "Making Madness: A Closer Look at DNEG's Work on Furiosa: A Mad Max Saga",
        "publisher": "DNEG",
        "url": "https://www.dneg.com/news/making-madness-a-closer-look-at-dnegs-work-on-furiosa-a-mad-max-saga"
      },
      {
        "id": "s8",
        "title": "Furiosa",
        "publisher": "Framestore",
        "url": "https://www.framestore.com/work/furiosa"
      },
      {
        "id": "s9",
        "title": "Furiosa",
        "publisher": "The Rough Cut",
        "url": "https://theroughcutpod.com/furiosa/"
      },
      {
        "id": "s10",
        "title": "Furiosa: A Mad Max Saga - Creator Talks",
        "publisher": "Dolby",
        "url": "https://www.youtube.com/watch?v=8jCAkWquriE"
      },
      {
        "id": "s11",
        "title": "Furiosa",
        "publisher": "Tom Holkenborg",
        "url": "https://tomholkenborg.com/work/furiosa"
      }
    ],
    "questions": [
      {
        "id": "furiosa-previs",
        "area": "camera",
        "prompt": {
          "en": "How can previs coordinate physical foregrounds with digital backgrounds?",
          "nb": "Hvordan kan previs samordne fysiske forgrunner med digitale bakgrunner?",
          "fr": "Comment la prévisualisation coordonne-t-elle avant-plans et fonds numériques ?",
          "pt": "Como pode pré-visualização coordenar primeiros planos físicos e fundos digitais?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test a static miniature and match virtual camera references",
              "nb": "Prøv en statisk miniatyr og samordne virtuelle kamerareferanser",
              "fr": "Tester une miniature statique et harmoniser les références caméra",
              "pt": "Testar miniatura estática e harmonizar referências de câmara"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all environments were photographed intact",
              "nb": "Anta at alle miljøer ble fotografert intakte",
              "fr": "Supposer que tous les décors furent filmés intacts",
              "pt": "Supor que todos os cenários foram filmados intactos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Plan foreground and background with unrelated geometry",
              "nb": "Planlegg forgrunn og bakgrunn med urelatert geometri",
              "fr": "Prévoir avant-plan et fond avec géométries incompatibles",
              "pt": "Planear primeiro plano e fundo com geometrias incompatíveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ARRI and Framestore describe previs, extensions and safety-driven digital alternatives. Test a harmless tabletop composite rather than recreating vehicle action.",
          "nb": "ARRI og Framestore beskriver previs, utvidelser og sikkerhetsstyrte digitale alternativer. Prøv en ufarlig bordmodellkompositt fremfor kjøretøyaction.",
          "fr": "ARRI et Framestore décrivent prévisualisation, extensions et alternatives sûres. Testez une maquette sans recréer de cascades.",
          "pt": "ARRI e Framestore descrevem pré-visualização, extensões e alternativas seguras. Teste maquete sem recriar acrobacias."
        },
        "sourceIds": [
          "s2",
          "s4",
          "s8"
        ]
      },
      {
        "id": "furiosa-handoff",
        "area": "animation",
        "prompt": {
          "en": "How should practical and digital asset versions be coordinated?",
          "nb": "Hvordan bør praktiske og digitale ressursversjoner samordnes?",
          "fr": "Comment coordonner les versions d’éléments pratiques et numériques ?",
          "pt": "Como coordenar versões de recursos práticos e digitais?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume digital models need no physical reference",
              "nb": "Anta at digitale modeller ikke trenger fysisk referanse",
              "fr": "Supposer que les modèles numériques n’exigent aucune référence physique",
              "pt": "Supor que modelos digitais dispensam referência física"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard earlier composites when editorial changes",
              "nb": "Forkast tidligere kompositter ved klippeendringer",
              "fr": "Écarter les anciens composites lors des changements de montage",
              "pt": "Descartar composições anteriores quando montagem muda"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track construction references and verify digital counterparts",
              "nb": "Registrer byggereferanser og verifiser digitale motstykker",
              "fr": "Suivre les références de construction et vérifier les équivalents numériques",
              "pt": "Registar referências de construção e verificar equivalentes digitais"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Art department and vendor accounts describe physical assets, digital counterparts and evolving postvis. Create a versioned neutral object study with an explicit handoff log.",
          "nb": "Kunst- og leverandørkildene beskriver fysiske ressurser, digitale motstykker og postvis i utvikling. Lag en versjonert nøytral objektstudie med overleveringslogg.",
          "fr": "Les sources décrivent objets physiques, équivalents numériques et postvis évolutive. Créez une étude d’objet versionnée.",
          "pt": "As fontes descrevem objetos físicos, equivalentes digitais e postvis evolutiva. Crie estudo de objeto versionado."
        },
        "sourceIds": [
          "s6",
          "s7",
          "s8"
        ]
      },
      {
        "id": "furiosa-mix",
        "area": "sound",
        "prompt": {
          "en": "How can recurring music and effects coexist in an immersive mix?",
          "nb": "Hvordan kan tilbakevendende musikk og effekter sameksistere i en romlig miks?",
          "fr": "Comment musique récurrente et effets coexistent-ils dans un mixage immersif ?",
          "pt": "Como podem música recorrente e efeitos coexistir numa mistura imersiva?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat the picture assembly as the final sound mix",
              "nb": "Behandle bildesammenstillingen som endelig lydmiks",
              "fr": "Traiter l’assemblage image comme mixage final",
              "pt": "Tratar assemblagem de imagem como mistura final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare spatial placement and leave room for distinct motifs",
              "nb": "Sammenlign romplassering og gi rom for særpregede motiver",
              "fr": "Comparer placements spatiaux et laisser place aux motifs",
              "pt": "Comparar colocação espacial e reservar espaço para motivos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Make music and effects equally loud throughout",
              "nb": "Gjør musikk og effekter like høye hele tiden",
              "fr": "Rendre musique et effets également forts partout",
              "pt": "Tornar música e efeitos igualmente altos sempre"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Dolby documents the final mix and music/sound handoffs; Holkenborg describes recurring motifs. Test original safe-level layers and compare their balance.",
          "nb": "Dolby dokumenterer sluttmiks og musikk-/lydoverleveringer; Holkenborg beskriver motiver. Prøv egne lydlag på trygt nivå og sammenlign balansen.",
          "fr": "Dolby documente mixage et échanges musique-son ; Holkenborg les motifs. Testez des couches originales à niveau sûr.",
          "pt": "Dolby documenta mistura e transições música-som; Holkenborg motivos. Teste camadas originais a nível seguro."
        },
        "sourceIds": [
          "s9",
          "s10",
          "s11"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_emilia_perez_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Studio reconstruction, camera latitude and musical staging",
      "nb": "Studiorekonstruksjon, bildebeskjæringsrom og musikalsk iscenesettelse",
      "fr": "Reconstruction en studio, latitude de cadrage et mise en scène musicale",
      "pt": "Reconstrução em estúdio, latitude de quadro e encenação musical"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Emilia Pérez",
        "publisher": "Pathé Films",
        "url": "https://www.pathefilms.com/fr/films/emilia-perez/"
      },
      {
        "id": "s3",
        "title": "Emilia Perez press kit",
        "publisher": "Why Not Productions / Page 114 / Unifrance",
        "url": "https://medias.unifrance.org/medias/126/75/281470/presse/emilia-perez-presskit-french.pdf"
      },
      {
        "id": "s4",
        "title": "Paul Guilhaume, AFC, looks back at the technical challenges of shooting Jacques Audiard's Emilia Perez",
        "publisher": "AFC",
        "url": "https://www.afcinema.com/Paul-Guilhaume-AFC-looks-back-at-the-technical-challenges-of-shooting-Jacques-Audiard-s-Emilia-Perez.html"
      },
      {
        "id": "s5",
        "title": "Les sorties cinéma du mois de juin 2023 et les tournages produits avec les moyens techniques de TSF",
        "publisher": "AFC / TSF",
        "url": "https://www.afcinema.com/Les-sorties-cinema-du-mois-de-juin-2023-et-les-tournages-produits-avec-les-moyens-techniques-de-TSF.html"
      },
      {
        "id": "s6",
        "title": "Gaffer Thomas Garreau lights up Emilia Pérez with ARRI",
        "publisher": "ARRI",
        "url": "https://www.arri.com/news-en/gaffer-thomas-garreau-lights-up-emilia-perez-with-arri"
      }
    ],
    "questions": [
      {
        "id": "emiliaperez-set",
        "area": "research",
        "prompt": {
          "en": "How can a studio recreation preserve a coherent fictional geography?",
          "nb": "Hvordan kan en studiorekonstruksjon bevare sammenhengende fiktiv geografi?",
          "fr": "Comment une reconstruction en studio préserve-t-elle une géographie cohérente ?",
          "pt": "Como pode reconstrução em estúdio preservar geografia fictícia coerente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare researched location references with shared set plans",
              "nb": "Sammenlign undersøkte stedsreferanser med felles kulisseplaner",
              "fr": "Comparer références documentées et plans communs de décors",
              "pt": "Comparar referências pesquisadas e plantas comuns de cenários"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all scenes were filmed in the represented city",
              "nb": "Anta at alle scener ble filmet i byen de viser",
              "fr": "Supposer que toutes les scènes furent tournées dans la ville représentée",
              "pt": "Supor que todas as cenas foram filmadas na cidade representada"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat studio lighting as unrelated to set layout",
              "nb": "Behandle studiobelysning som urelatert til kulisseplanen",
              "fr": "Traiter la lumière studio comme indépendante du décor",
              "pt": "Tratar iluminação de estúdio como independente do cenário"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The AFC and ARRI interviews document location scouting, studio builds and lighting previs. Plan an original fictional interior with documented reference and construction choices.",
          "nb": "AFC- og ARRI-intervjuene dokumenterer befaring, studiobygging og lysprevis. Planlegg et eget fiktivt interiør med dokumenterte referanse- og byggevalg.",
          "fr": "Les entretiens AFC et ARRI documentent repérages, décors et prévisualisation lumière. Concevez un intérieur original avec choix documentés.",
          "pt": "Entrevistas AFC e ARRI documentam pesquisa, cenários e previs de luz. Planeie interior original com escolhas documentadas."
        },
        "sourceIds": [
          "s4",
          "s6"
        ]
      },
      {
        "id": "emiliaperez-reframe",
        "area": "camera",
        "prompt": {
          "en": "How can acquisition latitude support editorial reframing responsibly?",
          "nb": "Hvordan kan opptakets beskjæringsrom støtte klippens nye utsnitt?",
          "fr": "Comment la latitude de captation soutient-elle le recadrage au montage ?",
          "pt": "Como pode latitude de captação apoiar reenquadramento na montagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every digital zoom as an optical zoom",
              "nb": "Behandle all digital zoom som optisk zoom",
              "fr": "Traiter chaque zoom numérique comme zoom optique",
              "pt": "Tratar cada zoom digital como zoom ótico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard the original frame after cropping",
              "nb": "Forkast originalutsnittet etter beskjæring",
              "fr": "Écarter le cadre original après recadrage",
              "pt": "Descartar quadro original após corte"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve camera originals and test alternate framing with clear records",
              "nb": "Bevar kameraoriginaler og prøv alternative utsnitt med tydelig logg",
              "fr": "Préserver les originaux et tester des cadres avec traçabilité",
              "pt": "Preservar originais e testar quadros com rastreabilidade"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Guilhaume describes full-frame capture and editorial reframing. Test alternative crops of an original scene and distinguish capture from postproduction framing.",
          "nb": "Guilhaume beskriver fullformatopptak og nye utsnitt i klippen. Prøv alternative beskjæringer av en egen scene og skill opptak fra etterarbeidsutsnitt.",
          "fr": "Guilhaume décrit plein format et recadrage au montage. Testez des cadres originaux en distinguant captation et postproduction.",
          "pt": "Guilhaume descreve formato completo e reenquadramento na montagem. Teste quadros originais distinguindo captação e pós-produção."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "emiliaperez-musical",
        "area": "sound",
        "prompt": {
          "en": "How can choreography and original music share a production plan?",
          "nb": "Hvordan kan koreografi og original musikk dele en produksjonsplan?",
          "fr": "Comment chorégraphie et musique originale partagent-elles un plan de production ?",
          "pt": "Como podem coreografia e música original partilhar plano de produção?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer every recording method from the musical genre",
              "nb": "Utled alle opptaksmetoder fra musikalsjangeren",
              "fr": "Déduire toutes les méthodes d’enregistrement du genre musical",
              "pt": "Deduzir métodos de gravação do género musical"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Coordinate movement cues and musical timing with credited collaborators",
              "nb": "Samordne bevegelsessignaler og musikktiming med krediterte samarbeidspartnere",
              "fr": "Coordonner mouvements et rythme avec les collaborateurs crédités",
              "pt": "Coordenar movimentos e ritmo com colaboradores creditados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Plan music without considering performer movement",
              "nb": "Planlegg musikk uten å vurdere utøverbevegelse",
              "fr": "Prévoir la musique sans considérer les mouvements",
              "pt": "Planear música sem considerar movimento dos intérpretes"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The press kit establishes distinct choreography, music and sound roles; the AFC interview describes post flexibility. Plan a short original musical scene with shared timing cues.",
          "nb": "Pressepakken dokumenterer egne koreografi-, musikk- og lydroller; AFC beskriver fleksibelt etterarbeid. Planlegg en kort egen musikalsk scene med felles timing.",
          "fr": "Le dossier établit les rôles distincts ; l’AFC décrit la souplesse de postproduction. Préparez une scène musicale originale avec repères communs.",
          "pt": "O dossier estabelece funções distintas; AFC descreve flexibilidade de pós-produção. Planeie cena musical original com marcas comuns."
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
    "scenarioId": "scenario_kinds_of_kindness_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Triptych development, photochemical texture and score sketches",
      "nb": "Tredelt utvikling, analog tekstur og musikkskisser",
      "fr": "Développement en triptyque, texture argentique et esquisses musicales",
      "pt": "Desenvolvimento em tríptico, textura em película e esboços musicais"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Kinds of Kindness Production Notes",
        "publisher": "Searchlight Pictures / Festival de Cannes",
        "url": "https://cdn.festival-cannes.com/media/uploads/2024/05/174220.pdf"
      },
      {
        "id": "s3",
        "title": "Robbie Ryan BSC ISC / Kinds of Kindness",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/kinds-of-kindness/"
      },
      {
        "id": "s4",
        "title": "Kinds of Kindness",
        "publisher": "Searchlight Pictures",
        "url": "https://press.searchlightpictures.com/kinds-of-kindness"
      }
    ],
    "questions": [
      {
        "id": "kindness-triptych",
        "area": "research",
        "prompt": {
          "en": "How can a recurring ensemble link separate stories?",
          "nb": "Hvordan kan et tilbakevendende ensemble knytte separate fortellinger sammen?",
          "fr": "Comment un ensemble récurrent relie-t-il des récits distincts ?",
          "pt": "Como pode elenco recorrente ligar histórias distintas?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Design distinct roles and test recurring dramatic patterns",
              "nb": "Utform ulike roller og prøv tilbakevendende dramatiske mønstre",
              "fr": "Concevoir des rôles distincts et tester des motifs récurrents",
              "pt": "Conceber papéis distintos e testar padrões recorrentes"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume recurring actors always play the same character",
              "nb": "Anta at tilbakevendende skuespillere alltid spiller samme karakter",
              "fr": "Supposer que les mêmes acteurs jouent toujours le même personnage",
              "pt": "Supor que atores recorrentes interpretam sempre a mesma personagem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove every connection between the separate stories",
              "nb": "Fjern alle forbindelser mellom de separate fortellingene",
              "fr": "Supprimer tous les liens entre les récits",
              "pt": "Eliminar todas as ligações entre histórias"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production notes describe a triptych and recurring ensemble. Design three original short scenes with distinct roles and a deliberate recurring formal pattern.",
          "nb": "Produksjonsnotatene beskriver et triptyk og tilbakevendende ensemble. Utform tre egne kortscener med ulike roller og et bevisst tilbakevendende formmønster.",
          "fr": "Les notes décrivent triptyque et ensemble récurrent. Concevez trois scènes originales avec rôles distincts et motif formel commun.",
          "pt": "As notas descrevem tríptico e elenco recorrente. Conceba três cenas originais com papéis distintos e padrão formal comum."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      },
      {
        "id": "kindness-stock",
        "area": "camera",
        "prompt": {
          "en": "How should monochrome and color film-stock tests be documented?",
          "nb": "Hvordan bør monokrome og fargede filmtypeprøver dokumenteres?",
          "fr": "Comment documenter les essais de pellicules monochromes et couleur ?",
          "pt": "Como documentar testes de películas monocromáticas e a cores?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume all dream sequences use the same processing",
              "nb": "Anta at alle drømmesekvenser bruker samme fremkalling",
              "fr": "Supposer que tous les rêves utilisent le même traitement",
              "pt": "Supor que sonhos usam o mesmo processamento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Identify film stock solely from the finished image",
              "nb": "Identifiser filmtype bare fra sluttbildet",
              "fr": "Identifier la pellicule par la seule image finale",
              "pt": "Identificar película apenas pela imagem final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record each stock and compare its intended visual function",
              "nb": "Registrer hver filmtype og sammenlign tilsiktet bildefunksjon",
              "fr": "Documenter chaque pellicule et comparer sa fonction visuelle",
              "pt": "Registar cada película e comparar função visual"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kodak documents color stocks and Double-X; the notes distinguish dream imagery. Compare original tonal tests and record acquisition and finishing separately.",
          "nb": "Kodak dokumenterer fargefilm og Double-X; notatene skiller drømmebilder. Sammenlign egne toneprøver og registrer opptak og ferdigstilling separat.",
          "fr": "Kodak documente couleur et Double-X ; les notes distinguent les rêves. Comparez des essais originaux en séparant captation et finition.",
          "pt": "Kodak documenta cor e Double-X; notas distinguem sonhos. Compare testes originais separando captação e acabamento."
        },
        "sourceIds": [
          "s2",
          "s3"
        ]
      },
      {
        "id": "kindness-score",
        "area": "sound",
        "prompt": {
          "en": "How can script and set images guide early musical sketches?",
          "nb": "Hvordan kan manus og kulissebilder styre tidlige musikkskisser?",
          "fr": "Comment scénario et photos de décor guident-ils les esquisses musicales ?",
          "pt": "Como podem argumento e fotos de cenário orientar esboços musicais?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume early music can never be revised",
              "nb": "Anta at tidlig musikk aldri kan revideres",
              "fr": "Supposer que la musique précoce est irrévisable",
              "pt": "Supor que música inicial nunca pode ser revista"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop original motifs before testing them against edited scenes",
              "nb": "Utvikle egne motiver før de prøves mot klippede scener",
              "fr": "Développer des motifs originaux puis les tester au montage",
              "pt": "Desenvolver motivos originais e testá-los na montagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Use finished film music as the only reference",
              "nb": "Bruk ferdig filmmusikk som eneste referanse",
              "fr": "Utiliser la musique finale comme seule référence",
              "pt": "Usar música final como única referência"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production notes describe Fendrix developing piano and choir ideas from script and set photos. Test original musical sketches against an invented short scene.",
          "nb": "Produksjonsnotatene beskriver Fendrix' piano- og korideer fra manus og kulissebilder. Prøv egne musikkskisser mot en oppdiktet kortscene.",
          "fr": "Les notes décrivent des idées piano et chœur issues du scénario et des décors. Testez des esquisses originales sur une scène fictive.",
          "pt": "As notas descrevem ideias de piano e coro a partir do argumento e cenários. Teste esboços originais numa cena fictícia."
        },
        "sourceIds": [
          "s2"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_grand_tour_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Location-led writing, distributed photography and studio texture",
      "nb": "Stedsstyrt skriving, distribuert foto og studiotekstur",
      "fr": "Écriture par les lieux, photographie distribuée et texture studio",
      "pt": "Escrita guiada por locais, fotografia distribuída e textura de estúdio"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Grand Tour",
        "publisher": "Uma Pedra no Sapato",
        "url": "https://www.umapedranosapato.com/film/grand-tour/"
      },
      {
        "id": "s3",
        "title": "Interview: Miguel Gomes on Grand Tour",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/interview-miguel-gomes-on-grand-tour-dennis-lim/"
      },
      {
        "id": "s4",
        "title": "Grand Tour, or the romantic escapades of a free-spirited director",
        "publisher": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/2024/grand-tour-or-the-romantic-escapades-of-a-free-spirited-director/"
      },
      {
        "id": "s5",
        "title": "Rui Poças: O que mais conta no cinema são as ideias",
        "publisher": "C7nema",
        "url": "https://c7nema.net/entrevistas/item/126583-rui-pocas-o-que-mais-conta-no-cinema-sao-as-ideias.html"
      }
    ],
    "questions": [
      {
        "id": "grandtour-writing",
        "area": "research",
        "prompt": {
          "en": "How can location images inform later screenplay development?",
          "nb": "Hvordan kan stedsbilder informere senere manusutvikling?",
          "fr": "Comment des images de lieux nourrissent-elles l’écriture ultérieure ?",
          "pt": "Como podem imagens de locais informar escrita posterior?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Review location footage and mark fictional additions explicitly",
              "nb": "Gjennomgå stedsopptak og merk fiktive tillegg tydelig",
              "fr": "Revoir les prises de lieux et signaler les ajouts fictifs",
              "pt": "Rever imagens de locais e identificar adições fictícias"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every later scene as a historical location record",
              "nb": "Behandle alle senere scener som historiske stedsopptak",
              "fr": "Traiter chaque scène ultérieure comme archive du lieu",
              "pt": "Tratar cada cena posterior como arquivo local"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore location material once the script changes",
              "nb": "Ignorer stedsmateriale når manuset endres",
              "fr": "Ignorer les images de lieux après modification du scénario",
              "pt": "Ignorar material local após mudança do argumento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Gomes describes location journeys, remote continuation and later screenplay work. Make a fictional montage plan that distinguishes observed images from invented scenes.",
          "nb": "Gomes beskriver stedsreiser, fjernarbeid og senere manusutvikling. Lag en fiktiv montasjeplan som skiller observerte bilder fra oppdiktede scener.",
          "fr": "Gomes décrit voyages, continuation distante et écriture ultérieure. Créez un montage distinguant observation et fiction.",
          "pt": "Gomes descreve viagens, continuação remota e escrita posterior. Crie montagem distinguindo observação e ficção."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "grandtour-credits",
        "area": "research",
        "prompt": {
          "en": "How can cinematography from several teams retain clear authorship records?",
          "nb": "Hvordan kan foto fra flere team bevare tydelige opphavsopplysninger?",
          "fr": "Comment préserver les crédits de plusieurs équipes image ?",
          "pt": "Como preservar créditos de várias equipas de fotografia?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Attribute every shot to one credited cinematographer",
              "nb": "Tilskriv alle bilder én kreditert fotograf",
              "fr": "Attribuer chaque plan à un seul chef opérateur crédité",
              "pt": "Atribuir cada plano a um único diretor de fotografia"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard phase details when compiling credits",
              "nb": "Forkast faseopplysninger når kreditering samles",
              "fr": "Écarter les détails des phases lors des crédits",
              "pt": "Descartar detalhes de fases ao compilar créditos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record team contributions and distinguish location and studio phases",
              "nb": "Registrer teambidrag og skill steds- og studiofaser",
              "fr": "Documenter les apports et distinguer phases extérieures et studio",
              "pt": "Registar contributos e distinguir fases de local e estúdio"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The producer record and cinematographer interview describe three credited photographers and distinct studio/location phases. Create a hypothetical contribution ledger without inventing shot-level ownership.",
          "nb": "Produsentkilden og fotointervjuet beskriver tre krediterte fotografer og ulike studio-/stedsfaser. Lag en tenkt bidragslogg uten å finne på bildeopphav.",
          "fr": "Le producteur et l’entretien décrivent trois chefs opérateurs et des phases distinctes. Créez un registre fictif sans inventer les attributions par plan.",
          "pt": "Produtor e entrevista descrevem três fotógrafos e fases distintas. Crie registo fictício sem inventar atribuições por plano."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s5"
        ]
      },
      {
        "id": "grandtour-studio",
        "area": "camera",
        "prompt": {
          "en": "How can a monochrome studio scene evoke earlier cinema?",
          "nb": "Hvordan kan en monokrom studioscene fremkalle tidligere filmuttrykk?",
          "fr": "Comment une scène studio monochrome évoque-t-elle le cinéma ancien ?",
          "pt": "Como pode cena de estúdio monocromática evocar cinema anterior?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Select grayscale solely as a generic nostalgia filter",
              "nb": "Velg gråtoner bare som generisk nostalgifilter",
              "fr": "Choisir le gris comme simple filtre nostalgique",
              "pt": "Escolher cinzento apenas como filtro nostálgico"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare controlled light and historical framing references",
              "nb": "Sammenlign kontrollert lys og historiske utsnittsreferanser",
              "fr": "Comparer lumière contrôlée et références de cadrage anciennes",
              "pt": "Comparar luz controlada e referências antigas de enquadramento"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume period style requires exact historical equipment",
              "nb": "Anta at tidsstil krever eksakt historisk utstyr",
              "fr": "Supposer que le style exige le matériel historique exact",
              "pt": "Supor que estilo exige equipamento histórico exato"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The cinematographer describes monochrome 16mm studio work and incandescent-light inspiration. Test an original safe lighting arrangement without copying historical electrical equipment.",
          "nb": "Fotografen beskriver monokromt 16 mm-studioarbeid og glødelampeinspirasjon. Prøv et eget trygt lysoppsett uten å kopiere historisk elektrisk utstyr.",
          "fr": "Le chef opérateur décrit 16 mm monochrome et inspiration incandescente. Testez une lumière originale sûre sans reproduire le matériel électrique ancien.",
          "pt": "O fotógrafo descreve 16 mm monocromático e inspiração incandescente. Teste luz original segura sem reproduzir equipamento elétrico antigo."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_sentimental_value_2025",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "House continuity, historical virtual sets and script-led composition",
      "nb": "Huskontinuitet, historiske virtuelle kulisser og manusbasert komposisjon",
      "fr": "Continuité de maison, décors virtuels historiques et composition par scénario",
      "pt": "Continuidade da casa, cenários virtuais históricos e composição pelo argumento"
    },
    "sources": [
      {
        "id": "s2",
        "title": "DP Kasper Tuxen DFF harnessed KODAK film to depict the purity of human connection in Joachim Trier's award-winning 'Sentimental Value'",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/sentimental-value/"
      },
      {
        "id": "s3",
        "title": "Production: Sentimental Value",
        "publisher": "Definition",
        "url": "https://definitionmagazine.com/features/production-sentimental-value/"
      },
      {
        "id": "s4",
        "title": "Inside Joachim Trier's Sentimental Value: Oslo's Architecture, Dragon Style Heritage and Norway's Studio Craft",
        "publisher": "Norwegian Film Commission",
        "url": "https://www.norwegianfilm.com/news/inside-joachim-trier-s-sentimental-value-oslo-s-architecture-dragon-style-heritage-and-norway-s"
      },
      {
        "id": "s5",
        "title": "We Live in Time: Joachim Trier on Sentimental Value",
        "publisher": "RogerEbert.com",
        "url": "https://www.rogerebert.com/interviews/sentimental-value-joachim-trier-interview"
      },
      {
        "id": "s6",
        "title": "Editor Olivier Bugge Coutte's Process on Oscar-Nominated Sentimental Value",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/editor-olivier-bugge-couttes-process-on-oscar-nominated-sentimental-value/"
      },
      {
        "id": "s7",
        "title": "Music That Fills Space: An Interview with Hania Rani About Her Film Score for Sentimental Value",
        "publisher": "Culture.pl",
        "url": "https://culture.pl/en/article/music-that-fills-space-an-interview-with-hania-rani-about-her-film-score-for-sentimental-value"
      }
    ],
    "questions": [
      {
        "id": "affeksjon-house",
        "area": "research",
        "prompt": {
          "en": "How can one house communicate several decades of fictional history?",
          "nb": "Hvordan kan ett hus formidle flere tiår med fiktiv historie?",
          "fr": "Comment une maison transmet-elle plusieurs décennies d’histoire fictive ?",
          "pt": "Como pode uma casa transmitir décadas de história fictícia?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Map recurring rooms and design documented period changes",
              "nb": "Kartlegg tilbakevendende rom og utform dokumenterte tidsendringer",
              "fr": "Cartographier les pièces récurrentes et leurs changements d’époque",
              "pt": "Mapear divisões recorrentes e mudanças de época documentadas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Redesign every room without preserving spatial relationships",
              "nb": "Redesign alle rom uten å bevare romforbindelser",
              "fr": "Redessiner chaque pièce sans préserver les relations spatiales",
              "pt": "Redesenhar divisões sem preservar relações espaciais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every historic interior is an unchanged real location",
              "nb": "Anta at alle historiske interiører er uendrede virkelige steder",
              "fr": "Supposer que tous les intérieurs historiques sont des lieux intacts",
              "pt": "Supor que interiores históricos são locais intactos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Trier and the Film Commission describe a Frogner villa, replica and decade-specific redressing. Design an original house timeline with continuity references.",
          "nb": "Trier og Film Commission beskriver en Frogner-villa, kopi og tidsbestemt ommøblering. Lag en egen hustidslinje med kontinuitetsreferanser.",
          "fr": "Trier et la commission décrivent villa, réplique et changements par décennie. Créez une chronologie de maison avec références.",
          "pt": "Trier e a comissão descrevem vila, réplica e mudanças por década. Crie cronologia de casa com referências."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "affeksjon-virtual",
        "area": "camera",
        "prompt": {
          "en": "How can virtual exterior views support seasonal continuity indoors?",
          "nb": "Hvordan kan virtuelle utsyn støtte sesongkontinuitet innendørs?",
          "fr": "Comment des vues virtuelles soutiennent-elles la continuité saisonnière en intérieur ?",
          "pt": "Como podem vistas virtuais apoiar continuidade sazonal em interiores?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat virtual views as unaltered location photography",
              "nb": "Behandle virtuelle utsyn som uendrede stedsopptak",
              "fr": "Traiter les vues virtuelles comme prises réelles intactes",
              "pt": "Tratar vistas virtuais como imagens reais intactas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore exposure differences between interior and exterior",
              "nb": "Ignorer eksponeringsforskjeller mellom inne og ute",
              "fr": "Ignorer les écarts d’exposition entre intérieur et extérieur",
              "pt": "Ignorar diferenças de exposição entre interior e exterior"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test window perspective, light matching and source versions",
              "nb": "Prøv vindusperspektiv, lystilpasning og kildeversjoner",
              "fr": "Tester perspective des fenêtres, lumière et versions sources",
              "pt": "Testar perspetiva de janelas, luz e versões de origem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Tuxen and the location record describe LED-wall work and reconstructed exterior references. Test a small original window composite with separate source records.",
          "nb": "Tuxen og stedskilden beskriver LED-veggarbeid og rekonstruerte utsynsreferanser. Prøv en liten egen vinduskompositt med separate kildelogger.",
          "fr": "Tuxen et la source lieux décrivent LED et extérieurs reconstruits. Testez un composite de fenêtre avec sources séparées.",
          "pt": "Tuxen e a fonte de locais descrevem LED e exteriores reconstruídos. Teste composição de janela com fontes separadas."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "affeksjon-music",
        "area": "sound",
        "prompt": {
          "en": "How can a script-led score adapt to unexpected emotional tones in footage?",
          "nb": "Hvordan kan manusbasert musikk tilpasses uventede følelsestoner i opptak?",
          "fr": "Comment une musique née du scénario s’adapte-t-elle au ton des prises ?",
          "pt": "Como pode música guiada pelo argumento adaptar-se ao tom das imagens?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Use music to explain every removed line of dialogue",
              "nb": "Bruk musikk til å forklare hver fjernet replikk",
              "fr": "Employer la musique pour expliquer chaque réplique retirée",
              "pt": "Usar música para explicar cada fala retirada"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original sketches against several edited versions",
              "nb": "Sammenlign egne musikkskisser mot flere klippeversjoner",
              "fr": "Comparer des esquisses originales à plusieurs montages",
              "pt": "Comparar esboços originais com várias montagens"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep the first musical interpretation regardless of footage",
              "nb": "Behold første musikalske tolkning uansett opptak",
              "fr": "Garder la première interprétation malgré les prises",
              "pt": "Manter primeira interpretação apesar das imagens"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Rani describes script-first composing and later reinterpretation; the editor describes substantial reductions. Test original music against a revised fictional scene.",
          "nb": "Rani beskriver manusbasert komposisjon og senere nytolkning; klipperen beskriver betydelige kutt. Prøv egen musikk mot en revidert fiktiv scene.",
          "fr": "Rani décrit composition sur scénario puis réinterprétation ; le monteur des réductions. Testez une musique originale sur une scène révisée.",
          "pt": "Rani descreve composição pelo argumento e reinterpretação; montador reduções. Teste música original numa cena revista."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  }
] as const satisfies readonly SourceBackedCaseWorkshop[];
