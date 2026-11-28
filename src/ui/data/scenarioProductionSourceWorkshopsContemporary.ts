import type { SourceBackedCaseWorkshop } from "./scenarioProductionSourceWorkshops.js";

import { sourceWorkshops2024 } from "./scenarioProductionSourceWorkshops2024.js";
import { sourceWorkshops2025 } from "./scenarioProductionSourceWorkshops2025.js";

import { worldCinemaSourceWorkshops } from "./scenarioProductionSourceWorkshopsWorldCinema.js";

export const contemporarySourceWorkshops = [
  {
    "scenarioId": "scenario_anatomy_of_a_fall_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Courtroom coverage, sound evidence and uncertain memory",
      "nb": "Rettssalsdekning, lydbevis og usikre minner",
      "fr": "Couverture du procès, preuve sonore et mémoire incertaine",
      "pt": "Cobertura judicial, prova sonora e memória incerta"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Simon Beaufils • Anatomy Of A Fall",
        "publisher": "Cinematography World",
        "url": "https://www.cinematography.world/simon-beaufils-afc-anatomy-of-a-fall/"
      },
      {
        "id": "s2",
        "title": "Simon Beaufils on Anatomy of a Fall",
        "publisher": "Film and Digital Times",
        "url": "https://www.fdtimes.com/pdfs/free/125FDTimes-April2026-150.pdf"
      },
      {
        "id": "s4",
        "title": "Reverse-Engineering Murder: Editing Anatomy of a Fall",
        "publisher": "Frame.io Insider",
        "url": "https://blog.frame.io/2024/02/22/reverse-engineering-murder-editing-anatomy-of-a-fall/"
      },
      {
        "id": "s5",
        "title": "Justine Triet • Director of Anatomy of a Fall",
        "publisher": "Cineuropa",
        "url": "https://cineuropa.org/en/interview/442904/"
      },
      {
        "id": "s6",
        "title": "Center of Gravity: Justine Triet on Anatomy of a Fall",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/122968-center-of-gravity-justine-triet-on-anatomy-of-a-fall/"
      },
      {
        "id": "s7",
        "title": "Examining the Alien Nature of the Family Unit: Justine Triet Discusses Anatomy of a Fall",
        "publisher": "Script Magazine",
        "url": "https://scriptmag.com/interviews-features/examining-the-alien-nature-of-the-family-unit-justine-triet-discusses-anatomy-of-a-fall"
      }
    ],
    "questions": [
      {
        "id": "anatomy-coverage",
        "area": "camera",
        "prompt": {
          "en": "How can two cameras support a courtroom dialogue scene?",
          "nb": "Hvordan kan to kameraer støtte en dialogscene i retten?",
          "fr": "Comment deux caméras servent-elles une scène de procès ?",
          "pt": "Como podem duas câmaras servir uma cena de tribunal?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Plan complementary views and preserve reaction timing",
              "nb": "Planlegg utfyllende vinkler og bevar reaksjonstiming",
              "fr": "Prévoir des angles complémentaires et préserver les réactions",
              "pt": "Planear ângulos complementares e preservar reações"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Place both cameras at identical viewpoints",
              "nb": "Plasser begge kameraer i identisk synsvinkel",
              "fr": "Placer les deux caméras au même endroit",
              "pt": "Colocar ambas as câmaras no mesmo ângulo"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore dialogue rhythm when selecting coverage",
              "nb": "Ignorer dialogrytmen ved valg av dekning",
              "fr": "Ignorer le rythme du dialogue dans le découpage",
              "pt": "Ignorar ritmo do diálogo ao escolher cobertura"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Beaufils and Sénéchal describe two-camera courtroom coverage. Test complementary viewpoints in an invented neutral hearing.",
          "nb": "Beaufils og Sénéchal beskriver tokameradekning i retten. Prøv utfyllende perspektiver i en oppdiktet nøytral høring.",
          "fr": "Beaufils et Sénéchal décrivent deux caméras au tribunal. Testez des points de vue complémentaires dans une audience fictive.",
          "pt": "Beaufils e Sénéchal descrevem duas câmaras no tribunal. Teste perspetivas complementares numa audiência fictícia."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s4"
        ]
      },
      {
        "id": "anatomy-archive",
        "area": "sound",
        "prompt": {
          "en": "How can an audio record convey events beyond the visible frame?",
          "nb": "Hvordan kan et lydopptak formidle hendelser utenfor bildet?",
          "fr": "Comment un enregistrement sonore transmet-il des événements hors champ ?",
          "pt": "Como pode gravação sonora transmitir acontecimentos fora do quadro?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat every ambiguous sound as conclusive proof",
              "nb": "Behandle hver tvetydige lyd som avgjørende bevis",
              "fr": "Traiter chaque son ambigu comme preuve définitive",
              "pt": "Tratar som ambíguo como prova definitiva"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Illustrate every sound with an omniscient image",
              "nb": "Illustrer hver lyd med et allvitende bilde",
              "fr": "Illustrer chaque son par une image omnisciente",
              "pt": "Ilustrar cada som com imagem omnisciente"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare audible evidence with multiple possible interpretations",
              "nb": "Sammenlign hørbare spor med flere mulige tolkninger",
              "fr": "Comparer les indices audibles et plusieurs interprétations",
              "pt": "Comparar indícios audíveis com várias interpretações"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Triet describes sound archives as a writing decision. Create a fictional audio fragment and distinguish what can be heard from what is inferred.",
          "nb": "Triet beskriver lydarkiver som et manusvalg. Lag et fiktivt lydfragment og skill det hørbare fra det man utleder.",
          "fr": "Triet décrit les archives sonores comme choix d’écriture. Créez un fragment fictif distinguant audible et déduction.",
          "pt": "Triet descreve arquivos sonoros como opção de escrita. Crie fragmento fictício distinguindo audível e inferência."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      },
      {
        "id": "anatomy-memory",
        "area": "research",
        "prompt": {
          "en": "How can a flashback retain uncertainty about its viewpoint?",
          "nb": "Hvordan kan et tilbakeblikk bevare usikkerhet om perspektivet?",
          "fr": "Comment un flashback conserve-t-il une incertitude de point de vue ?",
          "pt": "Como pode flashback preservar incerteza de perspetiva?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all conflicting perspectives from the narrative",
              "nb": "Fjern alle motstridende perspektiver fra fortellingen",
              "fr": "Éliminer les perspectives contradictoires du récit",
              "pt": "Eliminar perspetivas contraditórias da narrativa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare alternative placements and limit claims of certainty",
              "nb": "Sammenlign alternative plasseringer og begrens påstander om sikkerhet",
              "fr": "Comparer les placements et limiter les affirmations certaines",
              "pt": "Comparar posições e limitar afirmações de certeza"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present reconstructed memories as objective records",
              "nb": "Presenter rekonstruerte minner som objektive opptak",
              "fr": "Présenter les souvenirs reconstruits comme archives objectives",
              "pt": "Apresentar memórias reconstruídas como registos objetivos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Sénéchal discusses the argument flashback and its point-of-view problem. Compare edits of a fictional recollection without resolving every ambiguity.",
          "nb": "Sénéchal omtaler krangeltilbakeblikket og perspektivproblemet. Sammenlign klipp av et fiktivt minne uten å løse all tvetydighet.",
          "fr": "Sénéchal évoque le problème de perspective du flashback. Comparez des montages d’un souvenir fictif sans tout résoudre.",
          "pt": "Sénéchal aborda o problema de perspetiva do flashback. Compare montagens de memória fictícia sem resolver toda ambiguidade."
        },
        "sourceIds": [
          "s4",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_the_zone_of_interest_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Ethical historical research, remote observation and offscreen sound",
      "nb": "Etisk historisk research, fjernobservasjon og lyd utenfor bildet",
      "fr": "Recherche historique éthique, observation distante et son hors champ",
      "pt": "Pesquisa histórica ética, observação remota e som fora de campo"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Lukasz Zal PSC / The Zone of Interest",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/lukasz-zal-psc-the-zone-of-interest/"
      },
      {
        "id": "s3",
        "title": "A Note from The Zone of Interest Creative Team",
        "publisher": "A24",
        "url": "https://a24films.com/notes/2024/02/jonathan-glazer-collaborator-letter"
      },
      {
        "id": "s4",
        "title": "Director Jonathan Glazer and the Sound of The Zone of Interest",
        "publisher": "Dolby Creator Lab",
        "url": "https://www.dolby.com/creator-lab/podcast/zone-of-interest/"
      },
      {
        "id": "s5",
        "title": "Sounds that Cannot Be Unheard: Sound Designer Johnnie Burn on The Zone of Interest",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/123965-interview-sound-designer-johnnie-burn-the-zone-of-interest/"
      },
      {
        "id": "s7",
        "title": "The Zone of Interest Sound Designer Johnnie Burn on Creating the Soundscape From Hell",
        "publisher": "Motion Picture Association – The Credits",
        "url": "https://www.motionpictures.org/2024/01/the-zone-of-interest-sound-designer-johnnie-burn-on-creating-the-soundscape-from-hell/"
      },
      {
        "id": "s8",
        "title": "Crafting authenticity through a naturalistic grade on The Zone of Interest",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/crafting-authenticity-through-a-naturalistic-grade-on-the-zone-of-interest/"
      }
    ],
    "questions": [
      {
        "id": "zoneinterest-research",
        "area": "research",
        "prompt": {
          "en": "How should historical sound research be separated from reconstruction?",
          "nb": "Hvordan bør historisk lydresearch skilles fra rekonstruksjon?",
          "fr": "Comment distinguer recherche sonore historique et reconstitution ?",
          "pt": "Como distinguir pesquisa sonora histórica de reconstrução?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Document testimony and mark reconstructed audio explicitly",
              "nb": "Dokumenter vitnesbyrd og merk rekonstruert lyd tydelig",
              "fr": "Documenter les témoignages et signaler le son reconstruit",
              "pt": "Documentar testemunhos e identificar som reconstruído"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Present designed audio as an authentic archival recording",
              "nb": "Presenter designet lyd som autentisk arkivopptak",
              "fr": "Présenter le son conçu comme archive authentique",
              "pt": "Apresentar som concebido como arquivo autêntico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat historical research as unnecessary for fictional design",
              "nb": "Behandle historisk research som unødvendig for fiksjonsdesign",
              "fr": "Traiter la recherche historique comme superflue",
              "pt": "Tratar pesquisa histórica como desnecessária"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Burn describes extensive historical sound research. Develop a source ledger, without recreating atrocity or claiming invented sounds are historical evidence.",
          "nb": "Burn beskriver omfattende historisk lydresearch. Lag en kildelogg uten å gjenskape grusomheter eller kalle oppdiktet lyd historiske bevis.",
          "fr": "Burn décrit une recherche sonore approfondie. Créez un registre sans recréer d’atrocités ni présenter des sons inventés comme preuves.",
          "pt": "Burn descreve pesquisa sonora extensa. Crie registo sem recriar atrocidades nem apresentar sons inventados como provas."
        },
        "sourceIds": [
          "s3",
          "s5",
          "s7"
        ]
      },
      {
        "id": "zoneinterest-observation",
        "area": "camera",
        "prompt": {
          "en": "How can remote camera coverage support uninterrupted performance?",
          "nb": "Hvordan kan fjernstyrt kameradekning støtte uavbrutt skuespill?",
          "fr": "Comment les caméras distantes soutiennent-elles le jeu continu ?",
          "pt": "Como pode captação remota apoiar interpretação contínua?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Record performers without their informed consent",
              "nb": "Ta opp utøvere uten informert samtykke",
              "fr": "Filmer les interprètes sans consentement éclairé",
              "pt": "Filmar intérpretes sem consentimento informado"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume fixed cameras eliminate editorial choices",
              "nb": "Anta at faste kameraer fjerner klippevalg",
              "fr": "Supposer que les caméras fixes éliminent les choix de montage",
              "pt": "Supor que câmaras fixas eliminam escolhas de montagem"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Agree on recording boundaries and test complementary fixed views",
              "nb": "Avtal opptaksgrenser og prøv utfyllende faste utsnitt",
              "fr": "Convenir des limites et tester des vues fixes complémentaires",
              "pt": "Acordar limites e testar vistas fixas complementares"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The craft accounts describe remote multi-camera work and matching. Test a disclosed setup in a neutral room with consenting performers.",
          "nb": "Fagkildene beskriver fjernstyrt flerkameraarbeid og bildesamordning. Prøv et åpent oppsett i et nøytralt rom med samtykkende utøvere.",
          "fr": "Les sources décrivent plusieurs caméras distantes et leurs raccords. Testez un dispositif déclaré dans une pièce neutre avec consentement.",
          "pt": "As fontes descrevem várias câmaras remotas e correspondência visual. Teste dispositivo declarado numa sala neutra com consentimento."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s8"
        ]
      },
      {
        "id": "zoneinterest-offscreen",
        "area": "sound",
        "prompt": {
          "en": "How can sound and picture convey different spaces simultaneously?",
          "nb": "Hvordan kan lyd og bilde formidle ulike rom samtidig?",
          "fr": "Comment son et image transmettent-ils simultanément des espaces distincts ?",
          "pt": "Como podem som e imagem transmitir espaços distintos simultaneamente?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume offscreen sound is unrelated to narrative meaning",
              "nb": "Anta at lyd utenfor bildet er urelatert til fortellermening",
              "fr": "Supposer le hors-champ sonore sans rapport avec le récit",
              "pt": "Supor som fora de campo sem relação com narrativa"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test independent neutral sound layers beyond the visible scene",
              "nb": "Prøv uavhengige nøytrale lydlag utenfor den synlige scenen",
              "fr": "Tester des couches sonores neutres indépendantes hors champ",
              "pt": "Testar camadas sonoras neutras independentes fora do quadro"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Show every source of sound in an explanatory cutaway",
              "nb": "Vis alle lydkilder i et forklarende innklipp",
              "fr": "Montrer chaque source sonore par un insert explicatif",
              "pt": "Mostrar cada fonte sonora num plano explicativo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Glazer and Burn discuss hear-rather-than-see construction. Use an unrelated everyday scene to study the relation of visible and audible space.",
          "nb": "Glazer og Burn omtaler en konstruksjon der man hører fremfor å se. Bruk en urelatert hverdagsscene til å studere synlig og hørbart rom.",
          "fr": "Glazer et Burn décrivent une construction par l’écoute. Étudiez le rapport image-son dans une scène quotidienne indépendante.",
          "pt": "Glazer e Burn descrevem construção pela escuta. Estude relação imagem-som numa cena quotidiana independente."
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
    "scenarioId": "scenario_poor_things_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Hybrid miniature worlds, optical texture and score-led design",
      "nb": "Hybride miniatyrverdener, optisk tekstur og musikkstyrt design",
      "fr": "Mondes miniatures hybrides, texture optique et conception musicale",
      "pt": "Mundos híbridos em miniatura, textura ótica e design musical"
    },
    "sources": [
      {
        "id": "s2",
        "title": "DP Robbie Ryan ISC BSC conjured up colorful, atmospheric looks for 'Poor Things' using KODAK 35mm B&W, color negative and EKTACHROME Reversal film stocks",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/poor-things/"
      },
      {
        "id": "s3",
        "title": "Creating the look of 'Poor Things': flying trams, Belle Époque inspirations and Emma Stone's hair",
        "publisher": "Screen International",
        "url": "https://www.screendaily.com/features/creating-the-look-of-poor-things-flying-trams-belle-epoque-inspirations-and-emma-stones-hair/5188265.article"
      },
      {
        "id": "s4",
        "title": "Poor Things: Simon Hughes (Production VFX Supervisor) & Tallulah Baker (VFX Producer) – Union VFX",
        "publisher": "The Art of VFX",
        "url": "https://www.artofvfx.com/poor-things-simon-hughes-production-vfx-supervisor-tallulah-baker-vfx-producer-union-vfx/"
      },
      {
        "id": "s5",
        "title": "How 'Poor Things' Designer Holly Waddington Turned Victorian Fashion on Its Head",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://newsletter.oscars.org/features/holly-waddington-poor-things-interview"
      },
      {
        "id": "s6",
        "title": "The Rough Cut: Bringing Yorgos Lanthimos' Poor Things to Life",
        "publisher": "Frame.io Insider",
        "url": "https://blog.frame.io/2023/12/14/rough-cut-yorgos-lanthimos-poor-things/"
      },
      {
        "id": "s7",
        "title": "Inner Soundtrack: Composer Jerskin Fendrix on Poor Things",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/123969-interview-composer-jerskin-fendrix-poor-things/"
      },
      {
        "id": "s8",
        "title": "Extradimensional Counterpoint: Johnnie Burn, Sound Designer",
        "publisher": "MUBI Notebook",
        "url": "https://mubi.com/de/notebook/posts/extradimensional-counterpoint-johnnie-burn-sound-designer"
      }
    ],
    "questions": [
      {
        "id": "poorthings-world",
        "area": "research",
        "prompt": {
          "en": "How can miniature and full-size sets share a fictional visual language?",
          "nb": "Hvordan kan miniatyrer og fullskalakulisser dele et fiktivt bildespråk?",
          "fr": "Comment miniatures et décors grandeur nature partagent-ils un langage visuel ?",
          "pt": "Como podem miniaturas e cenários em escala real partilhar linguagem visual?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Match scale references and test composite perspective",
              "nb": "Samordne skalareferanser og prøv komposittperspektiv",
              "fr": "Harmoniser les références d’échelle et tester la perspective",
              "pt": "Harmonizar referências de escala e testar perspetiva"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose miniature designs unrelated to the full-size sets",
              "nb": "Velg miniatyrdesign uten forbindelse til fullskalakulisser",
              "fr": "Choisir des miniatures sans rapport avec les grands décors",
              "pt": "Escolher miniaturas sem relação com cenários reais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every fictional environment as a fully digital image",
              "nb": "Behandle alle fiktive miljøer som heldigitale bilder",
              "fr": "Traiter chaque décor comme image entièrement numérique",
              "pt": "Tratar cada ambiente como imagem inteiramente digital"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The design and VFX interviews describe shared visual development and miniature, full-size and CG combinations. Test an original tabletop world.",
          "nb": "Design- og effektintervjuene beskriver felles visuell utvikling og kombinasjon av miniatyrer, fullskala og CG. Prøv en egen bordmodellverden.",
          "fr": "Les entretiens décrivent développement partagé et combinaisons de miniatures, décors et CG. Testez un monde miniature original.",
          "pt": "As entrevistas descrevem desenvolvimento partilhado e combinações de miniaturas, cenários e CG. Teste mundo original em maquete."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "poorthings-optics",
        "area": "camera",
        "prompt": {
          "en": "How can unusual optics and costume shapes be tested together?",
          "nb": "Hvordan kan uvanlig optikk og kostymeformer prøves sammen?",
          "fr": "Comment tester ensemble des optiques atypiques et des formes de costumes ?",
          "pt": "Como testar óticas invulgares e formas de figurinos em conjunto?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a single lens is best for every costume",
              "nb": "Anta at ett objektiv er best for alle kostymer",
              "fr": "Supposer une optique idéale pour tous les costumes",
              "pt": "Supor uma objetiva ideal para todos os figurinos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore how framing changes the apparent silhouette",
              "nb": "Ignorer hvordan utsnitt endrer den synlige silhuetten",
              "fr": "Ignorer l’effet du cadre sur la silhouette",
              "pt": "Ignorar efeito do enquadramento na silhueta"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare lens distortion and silhouette under planned lighting",
              "nb": "Sammenlign objektivforvrengning og silhuett under planlagt lys",
              "fr": "Comparer distorsion optique et silhouette sous la lumière prévue",
              "pt": "Comparar distorção ótica e silhueta sob luz prevista"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ryan documents varied lenses and stocks; the costume interview describes oversized forms. Compare an original costume sample across optical tests.",
          "nb": "Ryan dokumenterer ulike objektiver og filmtyper; kostymeintervjuet beskriver overdimensjonerte former. Sammenlign en egen kostymeprøve i optiske tester.",
          "fr": "Ryan documente diverses optiques et pellicules ; l’entretien costumes décrit des formes volumineuses. Comparez un échantillon original.",
          "pt": "Ryan documenta óticas e películas variadas; a entrevista descreve formas volumosas. Compare amostra original em testes óticos."
        },
        "sourceIds": [
          "s2",
          "s5"
        ]
      },
      {
        "id": "poorthings-score",
        "area": "sound",
        "prompt": {
          "en": "How can an early score influence sound design during editing?",
          "nb": "Hvordan kan tidlig filmmusikk påvirke lyddesign under klipping?",
          "fr": "Comment une musique précoce influence-t-elle le design sonore au montage ?",
          "pt": "Como pode música inicial influenciar design sonoro na montagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Delay all interaction until the final mix is locked",
              "nb": "Utsett all samhandling til sluttmiksen er låst",
              "fr": "Reporter tout échange après verrouillage du mixage",
              "pt": "Adiar interação até bloqueio da mistura final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare original score sketches with alternate environmental layers",
              "nb": "Sammenlign egne musikkskisser med alternative miljølydlag",
              "fr": "Comparer esquisses musicales originales et ambiances alternatives",
              "pt": "Comparar esboços musicais originais e ambientes alternativos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Keep every sound layer equally prominent in every passage",
              "nb": "Hold alle lydlag like fremtredende i alle passasjer",
              "fr": "Garder toutes les couches au même niveau partout",
              "pt": "Manter todas as camadas igualmente presentes em tudo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Fendrix and Burn describe close score and sound collaboration. Test original cues with and without environmental sound to compare their narrative effects.",
          "nb": "Fendrix og Burn beskriver tett musikk- og lydsamarbeid. Prøv egne innslag med og uten miljølyd for å sammenligne fortellervirkning.",
          "fr": "Fendrix et Burn décrivent leur collaboration. Testez des sons originaux avec et sans ambiance pour comparer les effets narratifs.",
          "pt": "Fendrix e Burn descrevem colaboração. Teste sons originais com e sem ambiente para comparar efeitos narrativos."
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
    "scenarioId": "scenario_killers_of_the_flower_moon_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Community collaboration, look provenance and editorial structure",
      "nb": "Lokalsamfunnssamarbeid, bildeopphav og klippestruktur",
      "fr": "Collaboration communautaire, provenance visuelle et structure de montage",
      "pt": "Colaboração comunitária, proveniência visual e estrutura de montagem"
    },
    "sources": [
      {
        "id": "s0",
        "title": "Killers of the Flower Moon",
        "publisher": "American Film Institute",
        "url": "https://watch.afi.com/movie/killers-of-the-flower-moon"
      },
      {
        "id": "s1",
        "title": "Killers of the Flower Moon: Greed, Hubris and Homicide",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/killers-of-the-flower-moon-greed-hubris-and-homicide"
      },
      {
        "id": "s2",
        "title": "Osage Nation on Killers of the Flower Moon",
        "publisher": "Osage Nation",
        "url": "https://www.osagenation-nsn.gov/news-events/news/osage-nation-killers-flower-moon"
      },
      {
        "id": "s3",
        "title": "Killers of the Flower Moon Costume Designer Jacqueline West on the Power of the Osage Blanket",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2023/10/killers-of-the-flower-moon-costume-designer-jacqueline-west-on-the-power-of-the-osage-blanket/"
      },
      {
        "id": "s4",
        "title": "Where Was Killers of the Flower Moon Filmed?",
        "publisher": "Architectural Digest",
        "url": "https://www.architecturaldigest.com/story/where-was-killers-of-the-flower-moon-filmed"
      },
      {
        "id": "s6",
        "title": "Editor Thelma Schoonmaker talks Killers of the Flower Moon",
        "publisher": "Frame.io",
        "url": "https://blog.frame.io/2023/11/16/the-rough-cut-killers-of-the-flower-moon/"
      },
      {
        "id": "s7",
        "title": "Oscar-Nominated DP Rodrigo Prieto on Killers of the Flower Moon",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/oscar-nominated-dp-rodrigo-prieto-on-scorseses-killers-of-the-flower-moon/"
      },
      {
        "id": "s8",
        "title": "Finessing Killers of the Flower Moon at Company 3",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/finessing-killers-of-the-flower-moon-at-company-3"
      }
    ],
    "questions": [
      {
        "id": "killersflower-consultation",
        "area": "research",
        "prompt": {
          "en": "How should cultural design research include the represented community?",
          "nb": "Hvordan bør kulturhistorisk designresearch inkludere det representerte samfunnet?",
          "fr": "Comment associer la communauté représentée à la recherche de décor ?",
          "pt": "Como incluir a comunidade representada na pesquisa de design?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Invite qualified community collaborators and record permissions and credits",
              "nb": "Inviter kvalifiserte lokale samarbeidspartnere og registrer tillatelser og kreditering",
              "fr": "Inviter des collaborateurs qualifiés et noter autorisations et crédits",
              "pt": "Convidar colaboradores qualificados e registar autorizações e créditos"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat community consultation as optional visual decoration",
              "nb": "Behandle lokalsamfunnsråd som valgfri visuell pynt",
              "fr": "Traiter la consultation comme décoration facultative",
              "pt": "Tratar consulta comunitária como decoração facultativa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Replace cultural research with generic period references",
              "nb": "Erstatt kulturresearch med generiske tidsreferanser",
              "fr": "Remplacer la recherche culturelle par des références génériques",
              "pt": "Substituir pesquisa cultural por referências genéricas"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Osage Nation documents language teachers and Osage-made clothing; design interviews describe collaboration. Plan a respectful fictional research process with attributed contributions.",
          "nb": "Osage Nation dokumenterer språklærere og Osage-produserte klær; designintervjuer beskriver samarbeid. Planlegg respektfull fiktiv research med krediterte bidrag.",
          "fr": "La Nation Osage documente enseignants et vêtements osages ; les entretiens décrivent la collaboration. Préparez une recherche respectueuse avec crédits.",
          "pt": "A Nação Osage documenta professores e vestuário osage; entrevistas descrevem colaboração. Planeie pesquisa respeitosa com créditos."
        },
        "sourceIds": [
          "s2",
          "s3",
          "s4"
        ]
      },
      {
        "id": "killersflower-look",
        "area": "camera",
        "prompt": {
          "en": "How can different historical image textures retain source provenance?",
          "nb": "Hvordan kan ulike historiske bildeteksturer bevare kildeopphav?",
          "fr": "Comment différentes textures historiques conservent-elles leur provenance ?",
          "pt": "Como podem texturas históricas preservar proveniência?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume an archival-looking image is authentic archival footage",
              "nb": "Anta at et arkivlignende bilde er ekte arkivopptak",
              "fr": "Supposer qu’une image d’allure ancienne est une archive authentique",
              "pt": "Supor que imagem de aspeto antigo é arquivo autêntico"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Use one untested look for every narrative context",
              "nb": "Bruk ett uprøvd uttrykk i alle fortellingskontekster",
              "fr": "Employer un rendu non testé dans tous les contextes",
              "pt": "Usar visual não testado em todos os contextos"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Record camera originals and tested emulation choices separately",
              "nb": "Registrer kameraoriginaler og testede emuleringsvalg separat",
              "fr": "Documenter séparément originaux et choix d’émulation",
              "pt": "Registar separadamente originais e escolhas de emulação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Prieto and Lucas describe multiple capture and look systems. Make an original texture test and distinguish emulation from genuine archival material.",
          "nb": "Prieto og Lucas beskriver flere opptaks- og bildesystemer. Lag en egen teksturprøve og skill emulering fra ekte arkivmateriale.",
          "fr": "Prieto et Lucas décrivent plusieurs systèmes. Créez un essai original distinguant émulation et archives authentiques.",
          "pt": "Prieto e Lucas descrevem vários sistemas. Crie teste original distinguindo emulação de arquivo autêntico."
        },
        "sourceIds": [
          "s1",
          "s7",
          "s8"
        ]
      },
      {
        "id": "killersflower-structure",
        "area": "research",
        "prompt": {
          "en": "How can repeated screenings refine a long historical drama?",
          "nb": "Hvordan kan gjentatte visninger foredle et langt historisk drama?",
          "fr": "Comment des projections répétées affinent-elles un drame historique long ?",
          "pt": "Como podem sessões repetidas refinar drama histórico longo?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove historical context without tracking the consequences",
              "nb": "Fjern historisk kontekst uten å følge konsekvensene",
              "fr": "Retirer le contexte sans suivre les conséquences",
              "pt": "Retirar contexto sem acompanhar consequências"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare versions against character focus and evidence boundaries",
              "nb": "Sammenlign versjoner mot karakterfokus og dokumentasjonsgrenser",
              "fr": "Comparer les versions selon personnages et limites documentaires",
              "pt": "Comparar versões segundo personagens e limites documentais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Judge every version only by its running time",
              "nb": "Vurder hver versjon bare etter spilletiden",
              "fr": "Juger chaque version uniquement par sa durée",
              "pt": "Avaliar cada versão apenas pela duração"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Schoonmaker describes repeated screenings and recuts with a relationship as structural center. Compare fictional outlines and retain a record of contextual changes.",
          "nb": "Schoonmaker beskriver gjentatte visninger og omklipping med en relasjon som strukturelt sentrum. Sammenlign fiktive disposisjoner og loggfør kontekstendringer.",
          "fr": "Schoonmaker décrit projections et remontages autour d’une relation. Comparez des structures fictives et notez les changements contextuels.",
          "pt": "Schoonmaker descreve sessões e remontagens em torno de relação. Compare estruturas fictícias e registe mudanças contextuais."
        },
        "sourceIds": [
          "s0",
          "s6"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_perfect_days_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Observational fiction, apartment light and catalogue provenance",
      "nb": "Observerende fiksjon, leilighetslys og katalogopphav",
      "fr": "Fiction observationnelle, lumière intérieure et provenance des catalogues",
      "pt": "Ficção observacional, luz interior e proveniência de catálogos"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Why Wim Wenders Blurred the Lines Between Reality and Fiction in 'Anselm' and 'Perfect Days'",
        "publisher": "TheWrap",
        "url": "https://www.thewrap.com/wim-wenders-interview-anselm-perfect-days/"
      },
      {
        "id": "s3",
        "title": "Wim Wenders on failure, Werner Herzog, and the joy of the public toilet",
        "publisher": "Dazed",
        "url": "https://www.dazeddigital.com/film-tv/article/62008/1/wim-wenders-perfect-day-public-toilet-interview-2024"
      },
      {
        "id": "s4",
        "title": "Perfect Days",
        "publisher": "Franz Lustig",
        "url": "https://franzlustig.com/work/features/"
      },
      {
        "id": "s5",
        "title": "About Franz Lustig",
        "publisher": "Franz Lustig",
        "url": "https://franzlustig.com/about/"
      },
      {
        "id": "s6",
        "title": "Perfect Days",
        "publisher": "The Match Factory",
        "url": "https://www.the-match-factory.com/catalogue/films/perfect-days.html"
      },
      {
        "id": "s7",
        "title": "Perfect Days",
        "publisher": "filmportal.de",
        "url": "https://www.filmportal.de/en/movie/perfect-days_2b0a7a3eab9c4d3dbe31017798dc38c7"
      },
      {
        "id": "s8",
        "title": "Perfect Days",
        "publisher": "Haut et Court",
        "url": "https://www.hautetcourt.com/en/films/perfect-days/"
      },
      {
        "id": "s9",
        "title": "Perfect Days: Where the Light Comes Through",
        "publisher": "The Criterion Collection",
        "url": "https://www.criterion.com/current/posts/8536-perfect-days-where-the-light-comes-through"
      }
    ],
    "questions": [
      {
        "id": "perfectdays-routine",
        "area": "camera",
        "prompt": {
          "en": "How can a small crew observe a fictional daily routine?",
          "nb": "Hvordan kan et lite team observere en fiktiv hverdagsrutine?",
          "fr": "Comment une petite équipe observe-t-elle une routine fictive ?",
          "pt": "Como pode pequena equipa observar rotina fictícia?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Rehearse a simple routine and test discreet motivated framing",
              "nb": "Øv en enkel rutine og prøv diskrete begrunnede utsnitt",
              "fr": "Répéter une routine simple et tester un cadre discret motivé",
              "pt": "Ensaiar rotina simples e testar quadro discreto motivado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat documentary-like photography as proof of actual events",
              "nb": "Behandle dokumentarisk foto som bevis for faktiske hendelser",
              "fr": "Traiter le style documentaire comme preuve d’événements réels",
              "pt": "Tratar estilo documental como prova de acontecimentos reais"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Add elaborate camera moves unrelated to the routine",
              "nb": "Legg til omfattende kamerabevegelser uten forbindelse til rutinen",
              "fr": "Ajouter des mouvements complexes sans rapport avec la routine",
              "pt": "Adicionar movimentos complexos sem relação com rotina"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wenders describes documentary-like fiction with shoulder-mounted photography. Test an original routine with consenting performers, separating fictional action from observation.",
          "nb": "Wenders beskriver dokumentarisk fiksjon med skulderkamera. Prøv en egen rutine med samtykkende utøvere og skill fiksjon fra observasjon.",
          "fr": "Wenders décrit une fiction documentaire à la caméra d’épaule. Testez une routine consentie en distinguant fiction et observation.",
          "pt": "Wenders descreve ficção documental com câmara ao ombro. Teste rotina consentida distinguindo ficção de observação."
        },
        "sourceIds": [
          "s2",
          "s9"
        ]
      },
      {
        "id": "perfectdays-light",
        "area": "camera",
        "prompt": {
          "en": "How can a room's changing daylight shape a shooting plan?",
          "nb": "Hvordan kan skiftende dagslys i et rom forme opptaksplanen?",
          "fr": "Comment la lumière changeante d’une pièce façonne-t-elle le tournage ?",
          "pt": "Como pode luz variável de uma sala moldar plano de rodagem?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose the schedule without inspecting daylight changes",
              "nb": "Velg opptaksplan uten å undersøke dagslysendringer",
              "fr": "Choisir le planning sans observer les variations de lumière",
              "pt": "Escolher calendário sem observar variações de luz"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume the camera model alone determines naturalism",
              "nb": "Anta at kameramodellen alene bestemmer naturalisme",
              "fr": "Supposer que la caméra seule détermine le naturalisme",
              "pt": "Supor que modelo de câmara determina naturalismo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Observe light over time and test modest enhancements",
              "nb": "Observer lyset over tid og prøv beskjedne lysforsterkninger",
              "fr": "Observer la lumière dans le temps et tester des apports modestes",
              "pt": "Observar luz ao longo do tempo e testar reforços modestos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wenders describes studying apartment light with Lustig for a full preparation day. Make an original daylight journal before choosing a short scene's lighting.",
          "nb": "Wenders beskriver en hel forberedelsesdag med Lustig for å studere leilighetslys. Lag egen dagslyslogg før lysvalg i en kort scene.",
          "fr": "Wenders décrit une journée d’étude de la lumière avec Lustig. Créez un journal avant de choisir l’éclairage d’une scène.",
          "pt": "Wenders descreve um dia de estudo da luz com Lustig. Crie diário antes de escolher iluminação de uma cena."
        },
        "sourceIds": [
          "s3",
          "s4"
        ]
      },
      {
        "id": "perfectdays-records",
        "area": "research",
        "prompt": {
          "en": "How should conflicting catalogue and shooting records be handled?",
          "nb": "Hvordan bør motstridende katalog- og opptaksopplysninger håndteres?",
          "fr": "Comment traiter des données de catalogue et tournage divergentes ?",
          "pt": "Como tratar registos divergentes de catálogo e rodagem?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Delete the record that contradicts the preferred source",
              "nb": "Slett opplysningen som motsier foretrukket kilde",
              "fr": "Supprimer la donnée qui contredit la source préférée",
              "pt": "Apagar registo que contradiz fonte preferida"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve each source's version and identify unresolved differences",
              "nb": "Bevar hver kildes versjon og identifiser uavklarte forskjeller",
              "fr": "Préserver chaque version et identifier les divergences non résolues",
              "pt": "Preservar cada versão e identificar divergências por resolver"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Average incompatible aspect ratios into a new value",
              "nb": "Beregn gjennomsnitt av uforenlige bildeformater til en ny verdi",
              "fr": "Moyenner des ratios incompatibles en une valeur nouvelle",
              "pt": "Calcular média de proporções incompatíveis numa nova medida"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Wenders and Lustig give sixteen- and seventeen-day accounts, while distributors differ on framing. Preserve provenance rather than inventing a reconciliation.",
          "nb": "Wenders og Lustig oppgir seksten og sytten dager, mens distributører har ulike formatopplysninger. Bevar kildeopphavet fremfor å finne på en harmonisering.",
          "fr": "Wenders et Lustig donnent seize et dix-sept jours ; les distributeurs divergent sur le cadre. Préservez la provenance sans inventer de conciliation.",
          "pt": "Wenders e Lustig indicam dezasseis e dezassete dias; distribuidores divergem no formato. Preserve proveniência sem inventar conciliação."
        },
        "sourceIds": [
          "s2",
          "s5",
          "s6",
          "s7",
          "s8"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_fallen_leaves_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Economical staging, internal rhythm and analog documentation",
      "nb": "Økonomisk iscenesettelse, indre rytme og analog dokumentasjon",
      "fr": "Mise en scène économe, rythme interne et documentation argentique",
      "pt": "Encenação económica, ritmo interno e documentação em película"
    },
    "sources": [
      {
        "id": "s4",
        "title": "Fallen Leaves",
        "publisher": "The Match Factory",
        "url": "https://www.the-match-factory.com/catalogue/films/fallen-leaves.html"
      },
      {
        "id": "s5",
        "title": "Festival de Cannes productions 2023 shot with ARRI equipment",
        "publisher": "ARRI",
        "url": "https://www.arri.com/resource/blob/322248/c73bcfde53aeec99162df0696e1a65ea/2023-05-26a-arri-cannes-filmlist-preview-data.pdf"
      },
      {
        "id": "s7",
        "title": "Interview with Alma Pöysti about Fallen Leaves",
        "publisher": "neol.jp",
        "url": "https://www.neol.jp/movie-2/125285/2/"
      },
      {
        "id": "s8",
        "title": "Fallen Leaves, a Finnish Romcom to Rival Notting Hill",
        "publisher": "AnOther",
        "url": "https://www.anothermag.com/design-living/15285/fallen-leaves-film-review-aki-kaurismaki-jussi-vatanen-alma-poysti-interview"
      }
    ],
    "questions": [
      {
        "id": "fallenleaves-take",
        "area": "research",
        "prompt": {
          "en": "How can a limited-take approach preserve performance quality?",
          "nb": "Hvordan kan få tagninger bevare spillekvalitet?",
          "fr": "Comment un nombre limité de prises préserve-t-il la qualité du jeu ?",
          "pt": "Como pode número limitado de tomadas preservar qualidade da interpretação?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Coordinate readiness while allowing necessary retakes",
              "nb": "Samordne beredskap og tillat nødvendige nye tagninger",
              "fr": "Coordonner la préparation tout en permettant des reprises nécessaires",
              "pt": "Coordenar preparação permitindo repetições necessárias"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Ban retakes even when safety or clarity requires them",
              "nb": "Forby nye tagninger selv når trygghet eller tydelighet krever dem",
              "fr": "Interdire les reprises même si sécurité ou clarté l’exigent",
              "pt": "Proibir repetições mesmo quando segurança ou clareza exigem"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume fewer takes guarantee better acting",
              "nb": "Anta at færre tagninger garanterer bedre skuespill",
              "fr": "Supposer que moins de prises garantissent un meilleur jeu",
              "pt": "Supor que menos tomadas garantem melhor interpretação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Pöysti and Vatanen describe Kaurismäki's limited-take preference. Test an economical neutral scene without imposing a universal one-take rule.",
          "nb": "Pöysti og Vatanen beskriver Kaurismäkis preferanse for få tagninger. Prøv en økonomisk nøytral scene uten å påtvinge en universell éntagningregel.",
          "fr": "Pöysti et Vatanen décrivent la préférence pour peu de prises. Testez une scène neutre sans imposer une règle universelle.",
          "pt": "Pöysti e Vatanen descrevem preferência por poucas tomadas. Teste cena neutra sem impor regra universal."
        },
        "sourceIds": [
          "s7",
          "s8"
        ]
      },
      {
        "id": "fallenleaves-rhythm",
        "area": "camera",
        "prompt": {
          "en": "How can a held frame communicate a scene's internal rhythm?",
          "nb": "Hvordan kan et fastholdt utsnitt formidle scenens indre rytme?",
          "fr": "Comment un cadre prolongé transmet-il le rythme interne d’une scène ?",
          "pt": "Como pode quadro prolongado transmitir ritmo interno de cena?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Cut whenever a performer stops speaking",
              "nb": "Klipp hver gang en utøver slutter å snakke",
              "fr": "Couper chaque fois qu’un acteur cesse de parler",
              "pt": "Cortar sempre que um ator deixa de falar"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume static framing eliminates the need for timing",
              "nb": "Anta at statisk utsnitt fjerner behovet for timing",
              "fr": "Supposer qu’un cadre fixe dispense de rythme",
              "pt": "Supor que quadro fixo dispensa ritmo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare pauses, gestures and prop placement within one composition",
              "nb": "Sammenlign pauser, gester og rekvisittplassering i ett utsnitt",
              "fr": "Comparer pauses, gestes et accessoires dans un seul cadre",
              "pt": "Comparar pausas, gestos e adereços num quadro"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The actors discuss long-take staging and rhythm within the frame. Compare original versions of a quiet dialogue with different pauses.",
          "nb": "Skuespillerne omtaler langtagninger og rytme i utsnittet. Sammenlign egne versjoner av en rolig dialog med ulike pauser.",
          "fr": "Les acteurs évoquent plans longs et rythme dans le cadre. Comparez des versions originales d’un dialogue calme avec différentes pauses.",
          "pt": "Os atores abordam planos longos e ritmo no quadro. Compare versões originais de diálogo calmo com pausas distintas."
        },
        "sourceIds": [
          "s7",
          "s8"
        ]
      },
      {
        "id": "fallenleaves-format",
        "area": "research",
        "prompt": {
          "en": "How should analog capture and distribution format be documented?",
          "nb": "Hvordan bør analogt opptak og distribusjonsformat dokumenteres?",
          "fr": "Comment documenter captation argentique et format de diffusion ?",
          "pt": "Como documentar captação em película e formato de distribuição?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat a digital release as proof of digital capture",
              "nb": "Behandle digital visning som bevis for digitalt opptak",
              "fr": "Traiter une diffusion numérique comme preuve de captation numérique",
              "pt": "Tratar exibição digital como prova de captação digital"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Separate confirmed capture facts from release specifications",
              "nb": "Skill bekreftede opptaksfakta fra visningsspesifikasjoner",
              "fr": "Distinguer faits de captation et spécifications de diffusion",
              "pt": "Distinguir factos de captação e especificações de exibição"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Infer an exact camera body from a 35mm release record",
              "nb": "Utled eksakt kamerahus fra en 35 mm-visningsopplysning",
              "fr": "Déduire le boîtier exact d’une diffusion 35 mm",
              "pt": "Deduzir corpo de câmara exato de registo de exibição 35 mm"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "ARRI lists analog equipment; Pöysti confirms 35mm capture and sales records list DCP and 35mm. Retain the differences and avoid inventing stock or camera details.",
          "nb": "ARRI oppgir analogt utstyr; Pöysti bekrefter 35 mm-opptak og salgskilder oppgir DCP og 35 mm. Bevar forskjellene uten å finne på filmtype eller kamerahus.",
          "fr": "ARRI indique l’analogique ; Pöysti confirme le 35 mm et les ventes le DCP et 35 mm. Gardez les distinctions sans inventer de matériel.",
          "pt": "ARRI indica equipamento analógico; Pöysti confirma 35 mm e vendas DCP e 35 mm. Preserve distinções sem inventar equipamento."
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
    "scenarioId": "scenario_the_boy_and_the_heron_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Storyboard-led development, drawing supervision and hybrid compositing",
      "nb": "Storyboardstyrt utvikling, tegningsoppfølging og hybrid kompositering",
      "fr": "Développement par storyboard, supervision du dessin et compositing hybride",
      "pt": "Desenvolvimento por storyboard, supervisão de desenho e composição híbrida"
    },
    "sources": [
      {
        "id": "s1",
        "title": "The Boy and the Heron",
        "publisher": "Studio Ghibli",
        "url": "https://studioghibli.jp/films/the-boy-and-the-heron/"
      },
      {
        "id": "s3",
        "title": "The Boy and the Heron - BFI Southbank Programme Notes",
        "publisher": "British Film Institute / Sight and Sound",
        "url": "https://bfidatadigipres.github.io/new%20releases/2023/12/27/boy-and-the-heron/"
      },
      {
        "id": "s4",
        "title": "The Boy and the Heron Animator on Miyazaki's Most Personal Film",
        "publisher": "Backstage",
        "url": "https://www.backstage.com/magazine/article/boy-and-the-heron-animation-interview-takeshi-honda-76868/"
      },
      {
        "id": "s5",
        "title": "Art and Craft: Atsushi Okui on The Boy and the Heron",
        "publisher": "Film Comment",
        "url": "https://www.filmcomment.com/art-and-craft-atsushi-okui-on-the-boy-and-the-heron/"
      },
      {
        "id": "s6",
        "title": "Why Boy and the Heron May Not Be Miyazaki's Last Film",
        "publisher": "TheWrap",
        "url": "https://www.thewrap.com/the-boy-and-the-heron-hayao-miyazaki-interview/"
      }
    ],
    "questions": [
      {
        "id": "boyheron-story",
        "area": "research",
        "prompt": {
          "en": "How can an evolving storyboard guide an animated story?",
          "nb": "Hvordan kan et storyboard i utvikling styre en animert fortelling?",
          "fr": "Comment un storyboard évolutif guide-t-il un récit animé ?",
          "pt": "Como pode storyboard evolutivo orientar narrativa animada?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Version narrative drawings and review their evolving structure",
              "nb": "Versjoner fortellingstegninger og vurder strukturen i utvikling",
              "fr": "Versionner les dessins narratifs et revoir leur structure",
              "pt": "Versionar desenhos narrativos e rever estrutura em evolução"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Freeze all sequences before any visual discovery",
              "nb": "Fastlås alle sekvenser før visuell utforsking",
              "fr": "Figer toutes les séquences avant toute découverte visuelle",
              "pt": "Fixar todas as sequências antes de descoberta visual"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume an evolving storyboard needs no production tracking",
              "nb": "Anta at et storyboard i utvikling ikke trenger produksjonsoppfølging",
              "fr": "Supposer qu’un storyboard évolutif dispense de suivi",
              "pt": "Supor que storyboard evolutivo dispensa acompanhamento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Ghibli and Suzuki describe organic storyboard development. Create a short original storyboard with versions and explicit review checkpoints.",
          "nb": "Ghibli og Suzuki beskriver organisk storyboardutvikling. Lag et kort eget storyboard med versjoner og tydelige gjennomgangspunkter.",
          "fr": "Ghibli et Suzuki décrivent un développement organique. Créez un storyboard original avec versions et étapes de revue.",
          "pt": "Ghibli e Suzuki descrevem desenvolvimento orgânico. Crie storyboard original com versões e etapas de revisão."
        },
        "sourceIds": [
          "s1",
          "s3"
        ]
      },
      {
        "id": "boyheron-motion",
        "area": "animation",
        "prompt": {
          "en": "How can drawing supervision preserve subtle everyday motion?",
          "nb": "Hvordan kan tegningsoppfølging bevare subtile hverdagsbevegelser?",
          "fr": "Comment la supervision du dessin préserve-t-elle les gestes quotidiens ?",
          "pt": "Como pode supervisão de desenho preservar gestos quotidianos subtis?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Replace all motion with the same repeated pose",
              "nb": "Erstatt all bevegelse med samme gjentatte positur",
              "fr": "Remplacer tout mouvement par une pose répétée",
              "pt": "Substituir movimento por pose repetida"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat complex hand drawing as requiring no supervision",
              "nb": "Behandle kompleks håndtegning som om den ikke trenger oppfølging",
              "fr": "Traiter le dessin complexe comme exempt de supervision",
              "pt": "Tratar desenho complexo como dispensando supervisão"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare observed movement references and reviewed key drawings",
              "nb": "Sammenlign observerte bevegelsesreferanser og gjennomgåtte nøkkeltegninger",
              "fr": "Comparer références de mouvement et dessins clés révisés",
              "pt": "Comparar referências de movimento e desenhos-chave revistos"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Honda describes precise everyday motion and layered supervisory review. Animate an original ordinary gesture and compare corrections against the observed reference.",
          "nb": "Honda beskriver presise hverdagsbevegelser og oppfølging i flere ledd. Animer en egen hverdagsgest og sammenlign rettelser med observert referanse.",
          "fr": "Honda décrit gestes quotidiens précis et supervision à plusieurs niveaux. Animez un geste original et comparez les corrections aux références.",
          "pt": "Honda descreve gestos quotidianos precisos e supervisão em níveis. Anime gesto original e compare correções com referência."
        },
        "sourceIds": [
          "s3",
          "s4",
          "s6"
        ]
      },
      {
        "id": "boyheron-layers",
        "area": "animation",
        "prompt": {
          "en": "How can drawn and digital layers be combined without losing their character?",
          "nb": "Hvordan kan tegnede og digitale lag kombineres uten å miste særpreget?",
          "fr": "Comment combiner couches dessinées et numériques sans perdre leur caractère ?",
          "pt": "Como combinar camadas desenhadas e digitais sem perder caráter?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Flatten every source layer before testing the final look",
              "nb": "Slå sammen alle kildelag før slutt­uttrykket prøves",
              "fr": "Aplatir toutes les couches avant les essais finaux",
              "pt": "Achatar todas as camadas antes de testar visual final"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Preserve paper textures and track selective digital additions",
              "nb": "Bevar papirteksturer og registrer selektive digitale tillegg",
              "fr": "Préserver les textures papier et suivre les ajouts numériques",
              "pt": "Preservar texturas de papel e registar adições digitais"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every digital composite is fully 3D character animation",
              "nb": "Anta at alle digitale kompositter er heldigital 3D-karakteranimasjon",
              "fr": "Supposer que tout composite numérique est une animation 3D intégrale",
              "pt": "Supor que composição digital é animação 3D integral"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Okui describes paper and paint sources, selective CGI and digital compositing. Test an original layered image with explicit source and finish records.",
          "nb": "Okui beskriver papir- og malingskilder, selektiv CGI og digital kompositering. Prøv et eget lagdelt bilde med dokumentert opphav og ferdigstilling.",
          "fr": "Okui décrit papier, peinture, CGI sélective et compositing. Testez une image originale en documentant sources et finition.",
          "pt": "Okui descreve papel, pintura, CGI seletiva e composição. Teste imagem original documentando fontes e acabamento."
        },
        "sourceIds": [
          "s1",
          "s5"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_godzilla_minus_one_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Compact effects production, reference-based environments and spatial sound",
      "nb": "Kompakt effektproduksjon, referansebaserte miljøer og romlyd",
      "fr": "Production d’effets compacte, décors référencés et son spatial",
      "pt": "Produção compacta de efeitos, ambientes referenciados e som espacial"
    },
    "sources": [
      {
        "id": "s0",
        "title": "映画『ゴジラ-1.0』公式サイト",
        "publisher": "Toho",
        "url": "https://godzilla-minuszero.toho-movie.jp/minusone/"
      },
      {
        "id": "s1",
        "title": "Godzilla Minus One Director Takashi Yamazaki on Its Striking Connection to Oppenheimer",
        "publisher": "MovieMaker",
        "url": "https://www.moviemaker.com/godzilla-minus-one-takashi-yamazaki-oppenheimer/"
      },
      {
        "id": "s2",
        "title": "Godzilla Minus One Gains Global Recognition",
        "publisher": "VFX Voice",
        "url": "https://vfxvoice.com/godzilla-minus-one-gains-global-recognition/"
      },
      {
        "id": "s3",
        "title": "Godzilla -1.0を制作したジェネラリスト集団 白組に25の質問",
        "publisher": "Autodesk AREA JAPAN",
        "url": "https://area.autodesk.jp/case/movie_tv/godzilla-minus-one/"
      },
      {
        "id": "s5",
        "title": "Godzilla Minus One | Shirogumi",
        "publisher": "SideFX",
        "url": "https://www.sidefx.com/learn/talks/godzilla-minus-one-shirogumi/"
      },
      {
        "id": "s6",
        "title": "ZOZOマリンでゴジラが咆哮？ 実在感を突き詰めた『ゴジラ-1.0』、ドルビーアトモス音響制作の裏側を訊く",
        "publisher": "PHILE WEB",
        "url": "https://www.phileweb.com/news/d-av/202310/31/59219.html"
      },
      {
        "id": "s7",
        "title": "The 96th Academy Awards | 2024",
        "publisher": "Academy of Motion Picture Arts and Sciences",
        "url": "https://www.oscars.org/oscars/ceremonies/2024"
      }
    ],
    "questions": [
      {
        "id": "godzillaminus-workflow",
        "area": "research",
        "prompt": {
          "en": "How can a compact effects team coordinate revisions efficiently?",
          "nb": "Hvordan kan et lite effektteam samordne revisjoner effektivt?",
          "fr": "Comment une petite équipe d’effets coordonne-t-elle efficacement les révisions ?",
          "pt": "Como pode equipa pequena de efeitos coordenar revisões eficientemente?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Use shared shot ownership and frequent review of versions",
              "nb": "Bruk delt oversikt over bildeansvar og hyppig versjonsgjennomgang",
              "fr": "Partager les responsabilités et revoir fréquemment les versions",
              "pt": "Partilhar responsabilidades e rever versões frequentemente"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Send unlabelled revisions to independent artists",
              "nb": "Send umerkede revisjoner til uavhengige kunstnere",
              "fr": "Envoyer des révisions non identifiées aux artistes",
              "pt": "Enviar revisões sem identificação a artistas"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a small team eliminates the need for planning",
              "nb": "Anta at et lite team fjerner behovet for planlegging",
              "fr": "Supposer qu’une petite équipe dispense de planification",
              "pt": "Supor que equipa pequena dispensa planeamento"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Yamazaki and Shirogumi describe a compact effects unit and collaborative review. Plan a small original composite with a version ledger.",
          "nb": "Yamazaki og Shirogumi beskriver et kompakt effektteam og felles gjennomgang. Planlegg en liten egen kompositt med versjonslogg.",
          "fr": "Yamazaki et Shirogumi décrivent une petite équipe et des revues communes. Préparez un composite original avec registre de versions.",
          "pt": "Yamazaki e Shirogumi descrevem equipa compacta e revisão conjunta. Planeie composição original com registo de versões."
        },
        "sourceIds": [
          "s0",
          "s2",
          "s3"
        ]
      },
      {
        "id": "godzillaminus-water",
        "area": "animation",
        "prompt": {
          "en": "How can water simulation be evaluated against photographed references?",
          "nb": "Hvordan kan vannsimulering vurderes mot fotograferte referanser?",
          "fr": "Comment évaluer une simulation d’eau face à des références filmées ?",
          "pt": "Como avaliar simulação de água perante referências filmadas?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume every simulated surface behaves identically",
              "nb": "Anta at alle simulerte overflater oppfører seg identisk",
              "fr": "Supposer que toutes les surfaces simulées se comportent pareil",
              "pt": "Supor que todas as superfícies simuladas se comportam igualmente"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Ignore the lighting of the photographed elements",
              "nb": "Ignorer lyset i de fotograferte elementene",
              "fr": "Ignorer la lumière des éléments filmés",
              "pt": "Ignorar luz dos elementos filmados"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare small-scale safe water references with simulation tests",
              "nb": "Sammenlign trygge vannreferanser i liten skala med simuleringer",
              "fr": "Comparer références d’eau sûres à petite échelle et simulations",
              "pt": "Comparar referências seguras de água em pequena escala e simulações"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The effects accounts describe photographed ocean references and procedural water work. Compare a harmless tabletop or digital water study without recreating hazardous filming.",
          "nb": "Effektkildene beskriver havreferanser og prosedyrebasert vannarbeid. Sammenlign en ufarlig bordmodell eller digital vannstudie uten farlige opptak.",
          "fr": "Les sources décrivent références océaniques et eau procédurale. Comparez une étude numérique ou miniature sans tournage dangereux.",
          "pt": "As fontes descrevem referências oceânicas e água procedural. Compare estudo digital ou em maquete sem rodagem perigosa."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s5"
        ]
      },
      {
        "id": "godzillaminus-mix",
        "area": "sound",
        "prompt": {
          "en": "How should different spatial mix versions be evaluated?",
          "nb": "Hvordan bør ulike romlige miksversjoner vurderes?",
          "fr": "Comment évaluer différentes versions de mixage spatial ?",
          "pt": "Como avaliar diferentes versões de mistura espacial?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Judge a spatial mix only by its maximum volume",
              "nb": "Vurder en romlig miks bare etter maksimalt volum",
              "fr": "Juger un mixage spatial par son seul volume maximal",
              "pt": "Avaliar mistura espacial apenas pelo volume máximo"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare listening positions and document format-specific decisions",
              "nb": "Sammenlign lytteposisjoner og dokumenter formatspesifikke valg",
              "fr": "Comparer positions d’écoute et documenter les choix par format",
              "pt": "Comparar posições de escuta e documentar escolhas por formato"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume a new output format preserves every balance unchanged",
              "nb": "Anta at nytt utdataformat bevarer alle balanser uendret",
              "fr": "Supposer qu’un nouveau format conserve tous les équilibres",
              "pt": "Supor que novo formato conserva todos os equilíbrios"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Inoue and Yamazaki describe a specific Atmos rebalance. Test original neutral sound layers at comfortable levels and record differences between mix versions.",
          "nb": "Inoue og Yamazaki beskriver en særskilt Atmos-rebalansering. Prøv egne nøytrale lydlag på behagelige nivåer og registrer miksforskjeller.",
          "fr": "Inoue et Yamazaki décrivent un rééquilibrage Atmos. Testez des couches neutres à niveau confortable et notez les différences.",
          "pt": "Inoue e Yamazaki descrevem reequilíbrio Atmos. Teste camadas neutras em nível confortável e registe diferenças."
        },
        "sourceIds": [
          "s6",
          "s7"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_spider_man_across_the_spider_verse_2023",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Painterly worlds, collage grammar and animatic revision",
      "nb": "Maleriske verdener, kollasjgrammatikk og animatic-revisjon",
      "fr": "Mondes picturaux, grammaire du collage et révision d’animatique",
      "pt": "Mundos pictóricos, gramática de colagem e revisão de animática"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Beyond The Screen: The Creators Behind The Spider-Verse",
        "publisher": "Sony Group",
        "url": "https://www.sony.com/en/brand/beyondthescreen/acrossthespiderverse/"
      },
      {
        "id": "s4",
        "title": "Mike Lasker Breaks Down the Breakdown of Spider-Man: Across the Spider-Verse VFX",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/vfxworld/mike-lasker-breaks-down-breakdown-spider-man-across-spider-verse-vfx"
      },
      {
        "id": "s5",
        "title": "Unpacking The Spot and Hobie's Disruptive Styles in Spider-Man: Across the Spider-Verse",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/unpacking-spot-and-hobies-disruptive-styles-spider-man-across-spider-verse"
      },
      {
        "id": "s6",
        "title": "Spider-Man: Across the Spider-Verse Ups the Visual and Narrative Ante",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/spider-man-across-spider-verse-ups-visual-and-narrative-ante"
      },
      {
        "id": "s7",
        "title": "Fine-Tuning the Spider-Verse: A Chat with Justin K. Thompson",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/fine-tuning-spider-verse-chat-justin-k-thompson"
      },
      {
        "id": "s8",
        "title": "Art of the Cut: Spider Man Across the Spider Verse",
        "publisher": "Boris FX",
        "url": "https://borisfx.com/blog/aotc/art-of-the-cut-spider-man-across-the-spider-verse/"
      }
    ],
    "questions": [
      {
        "id": "acrossverse-brush",
        "area": "animation",
        "prompt": {
          "en": "How can painterly brush fields respond to narrative emotion?",
          "nb": "Hvordan kan maleriske penselfelt følge fortellingens følelser?",
          "fr": "Comment des champs de touches picturales répondent-ils à l’émotion narrative ?",
          "pt": "Como podem campos de pinceladas responder à emoção narrativa?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test animated textures and color changes alongside character movement",
              "nb": "Prøv animerte teksturer og fargeskifter sammen med karakterbevegelse",
              "fr": "Tester textures animées et couleurs avec le mouvement du personnage",
              "pt": "Testar texturas animadas e cores com movimento da personagem"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Apply an identical static texture across all emotional beats",
              "nb": "Bruk identisk statisk tekstur i alle følelsesøyeblikk",
              "fr": "Appliquer une texture statique identique à chaque émotion",
              "pt": "Aplicar textura estática idêntica a cada emoção"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat painterly rendering as unrelated to art direction",
              "nb": "Behandle malerisk rendering som urelatert til visuell regi",
              "fr": "Traiter le rendu pictural comme indépendant de la direction artistique",
              "pt": "Tratar renderização pictórica como independente da direção artística"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Sony and AWN accounts describe custom brush systems and shot-specific direction. Develop an original painterly animation test with changing visual parameters.",
          "nb": "Sony og AWN beskriver egne penselsystemer og bildespesifikk visuell regi. Utvikle en egen malerisk animasjonsprøve med skiftende bildeparametere.",
          "fr": "Sony et AWN décrivent outils de touches et direction par plan. Développez un essai pictural original aux paramètres variables.",
          "pt": "Sony e AWN descrevem ferramentas de pinceladas e direção por plano. Desenvolva teste pictórico original com parâmetros variáveis."
        },
        "sourceIds": [
          "s2",
          "s4"
        ]
      },
      {
        "id": "acrossverse-collage",
        "area": "animation",
        "prompt": {
          "en": "How can intentional visual inconsistency remain readable in motion?",
          "nb": "Hvordan kan bevisst visuell inkonsistens forbli lesbar i bevegelse?",
          "fr": "Comment une incohérence visuelle voulue reste-t-elle lisible en mouvement ?",
          "pt": "Como pode inconsistência visual intencional permanecer legível em movimento?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Change every layer arbitrarily without checking motion",
              "nb": "Endre alle lag vilkårlig uten å sjekke bevegelse",
              "fr": "Changer chaque couche au hasard sans vérifier le mouvement",
              "pt": "Mudar camadas ao acaso sem verificar movimento"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Remove all handmade variation to standardize the appearance",
              "nb": "Fjern all håndlaget variasjon for å standardisere uttrykket",
              "fr": "Supprimer toute variation manuelle pour standardiser le rendu",
              "pt": "Remover variação manual para padronizar visual"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Set collage rules and test silhouette and action clarity",
              "nb": "Sett kollasjregler og prøv tydelighet i silhuett og handling",
              "fr": "Définir des règles de collage et tester silhouettes et action",
              "pt": "Definir regras de colagem e testar silhueta e ação"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The production-design interview describes punk-zine and scanned-collage systems. Test a distinct original collage character rather than copying the film's artwork.",
          "nb": "Designintervjuet beskriver punkfanziner og skannede kollasjsystemer. Prøv en egen kollasjkarakter fremfor å kopiere filmens kunstverk.",
          "fr": "L’entretien décrit fanzines punk et collages numérisés. Testez un personnage original sans copier les œuvres du film.",
          "pt": "A entrevista descreve fanzines punk e colagens digitalizadas. Teste personagem original sem copiar arte do filme."
        },
        "sourceIds": [
          "s2",
          "s5"
        ]
      },
      {
        "id": "acrossverse-animatic",
        "area": "research",
        "prompt": {
          "en": "How can animatic screening guide revision of a complex animated sequence?",
          "nb": "Hvordan kan animatic-visning styre revisjon av en kompleks animert sekvens?",
          "fr": "Comment une projection d’animatique guide-t-elle une séquence complexe ?",
          "pt": "Como pode exibição de animática orientar sequência complexa?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard prior versions before comparing narrative clarity",
              "nb": "Forkast tidligere versjoner før fortellingsklarhet sammenlignes",
              "fr": "Écarter les anciennes versions avant de comparer la clarté",
              "pt": "Descartar versões anteriores antes de comparar clareza"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Track feedback and compare story revisions before detailed rendering",
              "nb": "Følg tilbakemeldinger og sammenlign fortellingsrevisjoner før detaljert rendering",
              "fr": "Suivre les retours et comparer les révisions avant le rendu détaillé",
              "pt": "Acompanhar comentários e comparar revisões antes de renderização detalhada"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the first animatic as a finished locked sequence",
              "nb": "Behandle første animatic som ferdig låst sekvens",
              "fr": "Traiter la première animatique comme séquence verrouillée",
              "pt": "Tratar primeira animática como sequência bloqueada"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Dos Santos and Andrews describe iterative animatics and editorial involvement in story construction. Compare versions of an original short sequence and record why changes were made.",
          "nb": "Dos Santos og Andrews beskriver iterative animatics og klippeinvolvering i fortellingsbygging. Sammenlign egne sekvensversjoner og registrer endringsgrunnene.",
          "fr": "Dos Santos et Andrews décrivent animatiques itératives et montage narratif. Comparez des versions originales et notez les raisons des changements.",
          "pt": "Dos Santos e Andrews descrevem animáticas iterativas e montagem narrativa. Compare versões originais e registe motivos das mudanças."
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
    "scenarioId": "scenario_dune_part_two_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Infrared material tests, hybrid finishing and environmental sound",
      "nb": "Infrarøde materialprøver, hybrid ferdigstilling og miljølyd",
      "fr": "Essais infrarouges de matières, finition hybride et son environnemental",
      "pt": "Testes infravermelhos de materiais, acabamento híbrido e som ambiental"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Expanding the View for Dune: Part Two",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/expanding-view-dune-part-two/"
      },
      {
        "id": "s5",
        "title": "Obviously, We Couldn't Get Three Sandworms for That Day: DP Greig Fraser on Dune: Part Two",
        "publisher": "Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/126135-interview-cinematographer-greig-fraser-dune-part-two/"
      },
      {
        "id": "s6",
        "title": "FotoKem's SHIFT analog intermediate process",
        "publisher": "FotoKem",
        "url": "https://fotokem.com/shift-analog-intermediate/"
      },
      {
        "id": "s10",
        "title": "Oscar-Nominated VFX Supervisor Paul Lambert on Infrared Insanity in Dune: Part Two",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2025/02/oscar-nominated-vfx-supervisor-paul-lambert-on-infrared-insanity-in-dune-part-two/"
      },
      {
        "id": "s12",
        "title": "Designing Dune Part Two's Breathtaking Sound",
        "publisher": "A Sound Effect",
        "url": "https://www.asoundeffect.com/dune-part-two-sound/"
      },
      {
        "id": "s13",
        "title": "Architect of Arrakis: Dune: Part Two Editor Joe Walker on Forging a Ferocious Masterpiece",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2024/03/architect-of-arrakis-dune-part-two-editor-joe-walker-on-forging-a-ferocious-masterpiece/"
      },
      {
        "id": "s14",
        "title": "Hans Zimmer on Unearthing New Sounds for Dune: Part Two",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2024/03/hans-zimmer-on-unearthing-new-sounds-for-dune-part-two/"
      },
      {
        "id": "s15",
        "title": "Dune: Part Two Costume Designer Jacqueline West on Creating a Goth Rock God in Feyd-Rautha",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2024/03/dune-part-two-costume-designer-jacqueline-west-on-creating-a-goth-rock-god-in-feyd-rautha/"
      }
    ],
    "questions": [
      {
        "id": "dunetwo-material",
        "area": "camera",
        "prompt": {
          "en": "How should materials be tested for an unusual spectral imaging process?",
          "nb": "Hvordan bør materialer prøves for en uvanlig spektral bildeprosess?",
          "fr": "Comment tester les matières pour un procédé spectral inhabituel ?",
          "pt": "Como testar materiais para processo espectral invulgar?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Compare actual material response under the intended imaging conditions",
              "nb": "Sammenlign faktisk materialrespons under planlagte bildeforhold",
              "fr": "Comparer la réponse réelle des matières dans les conditions prévues",
              "pt": "Comparar resposta real dos materiais nas condições previstas"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume visible-light appearance predicts infrared response exactly",
              "nb": "Anta at synlig lys forutsier infrarød respons nøyaktig",
              "fr": "Supposer que l’apparence visible prédit exactement l’infrarouge",
              "pt": "Supor que aparência visível prevê exatamente infravermelho"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Choose fabric solely from ordinary color swatches",
              "nb": "Velg stoff bare fra vanlige fargeprøver",
              "fr": "Choisir les tissus uniquement par nuanciers ordinaires",
              "pt": "Escolher tecidos apenas por amostras comuns"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Fraser and West describe infrared photography and fabric testing. Design a harmless material reference comparison without inventing historical camera settings.",
          "nb": "Fraser og West beskriver infrarødt foto og stoffprøver. Lag en ufarlig materialreferansesammenligning uten å finne på historiske kamerainnstillinger.",
          "fr": "Fraser et West décrivent infrarouge et essais de tissus. Créez une comparaison sûre sans inventer les réglages historiques.",
          "pt": "Fraser e West descrevem infravermelho e testes de tecidos. Crie comparação segura sem inventar parâmetros históricos."
        },
        "sourceIds": [
          "s3",
          "s10",
          "s15"
        ]
      },
      {
        "id": "dunetwo-finish",
        "area": "research",
        "prompt": {
          "en": "How should a digital-film-digital finishing chain be recorded?",
          "nb": "Hvordan bør digital-film-digital ferdigstilling dokumenteres?",
          "fr": "Comment documenter une chaîne de finition numérique-film-numérique ?",
          "pt": "Como documentar cadeia de acabamento digital-película-digital?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Treat the film intermediate as the original camera negative",
              "nb": "Behandle filmmellomleddet som kameraoriginalnegativet",
              "fr": "Traiter l’intermédiaire comme négatif caméra original",
              "pt": "Tratar intermédio como negativo original da câmara"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Infer the acquisition format only from theatrical presentation",
              "nb": "Utled opptaksformat bare fra kinovisningen",
              "fr": "Déduire la captation de la seule projection en salle",
              "pt": "Deduzir captação apenas da exibição em cinema"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Identify digital acquisition, film intermediate and rescan separately",
              "nb": "Identifiser digitalt opptak, filmmellomledd og tilbakeskann separat",
              "fr": "Identifier séparément captation numérique, intermédiaire film et rescan",
              "pt": "Identificar separadamente captação digital, intermédio em película e redigitalização"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Fraser and FotoKem document film-out and scan-back. Draw a source-provenance diagram separating acquisition, intermediate and release versions.",
          "nb": "Fraser og FotoKem dokumenterer filmoverføring og tilbakeskann. Tegn et kildeopphavsdiagram som skiller opptak, mellomledd og visningsversjoner.",
          "fr": "Fraser et FotoKem documentent transfert et rescan. Dessinez un schéma distinguant captation, intermédiaire et diffusion.",
          "pt": "Fraser e FotoKem documentam transferência e redigitalização. Desenhe diagrama distinguindo captação, intermédio e exibição."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      },
      {
        "id": "dunetwo-sand",
        "area": "sound",
        "prompt": {
          "en": "How can environmental recordings shape an imagined sonic world?",
          "nb": "Hvordan kan miljøopptak forme en forestilt lydverden?",
          "fr": "Comment les prises environnementales façonnent-elles un univers sonore imaginaire ?",
          "pt": "Como podem gravações ambientais moldar universo sonoro imaginado?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume music and effects never need shared review",
              "nb": "Anta at musikk og effekter aldri trenger felles gjennomgang",
              "fr": "Supposer que musique et effets ne demandent jamais de revue commune",
              "pt": "Supor que música e efeitos nunca precisam de revisão conjunta"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Build original sound families from safe sources and review them in context",
              "nb": "Bygg egne lydfamilier fra trygge kilder og vurder dem i kontekst",
              "fr": "Créer des familles sonores de sources sûres et les revoir en contexte",
              "pt": "Criar famílias sonoras de fontes seguras e revê-las em contexto"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Reuse every earlier sound unchanged in the new film",
              "nb": "Gjenbruk alle tidligere lyder uendret i den nye filmen",
              "fr": "Réutiliser tous les sons anciens sans modification",
              "pt": "Reutilizar todos os sons anteriores sem alteração"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "King describes environment-derived sound and rebuilt earlier elements; Walker and Zimmer discuss collaboration. Test original safe texture layers rather than recreating film sounds.",
          "nb": "King beskriver miljøbasert lyd og omarbeidede tidligere elementer; Walker og Zimmer omtaler samarbeid. Prøv egne trygge teksturlag fremfor å gjenskape filmlyd.",
          "fr": "King décrit sons environnementaux et éléments remaniés ; Walker et Zimmer la collaboration. Testez des textures originales sûres sans reproduire le film.",
          "pt": "King descreve sons ambientais e elementos refeitos; Walker e Zimmer colaboração. Teste texturas originais seguras sem recriar som do filme."
        },
        "sourceIds": [
          "s12",
          "s13",
          "s14"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_flow_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Direct 3D storytelling, observed animal motion and real-time rendering",
      "nb": "Direkte 3D-fortelling, observert dyrebevegelse og sanntidsrendering",
      "fr": "Récit 3D direct, mouvement animal observé et rendu temps réel",
      "pt": "Narrativa 3D direta, movimento animal observado e renderização em tempo real"
    },
    "sources": [
      {
        "id": "s2",
        "title": "Making Flow – Interview with director Gints Zilbalodis",
        "publisher": "Blender",
        "url": "https://www.blender.org/user-stories/making-flow-an-interview-with-director-gints-zilbalodis/"
      },
      {
        "id": "s3",
        "title": "The animation of Flow",
        "publisher": "Blender Conference",
        "url": "https://conference.blender.org/2024/presentations/3929/"
      },
      {
        "id": "s4",
        "title": "Gints Zilbalodis • Director of Flow",
        "publisher": "Cineuropa",
        "url": "https://cineuropa.org/en/interview/462710/"
      },
      {
        "id": "s5",
        "title": "CEEA Talks: Gints Zilbalodis about FLOW",
        "publisher": "CEE Animation",
        "url": "https://ceeanimation.eu/news/ceea-talks-gints-zilbalodis-about-flow-id-prefer-to-be-a-capybara/"
      },
      {
        "id": "s7",
        "title": "Flow: Cat-aloging Gints Zilbalodis' Journey of Teamwork and Self Discovery",
        "publisher": "Animation World Network",
        "url": "https://www.awn.com/animationworld/flow-cat-aloging-gints-zilbalodis-journey-teamwork-and-self-discovery"
      }
    ],
    "questions": [
      {
        "id": "flow-previz",
        "area": "animation",
        "prompt": {
          "en": "How can direct 3D previsualization guide dialogue-free storytelling?",
          "nb": "Hvordan kan direkte 3D-forhåndsvisualisering styre dialogfri fortelling?",
          "fr": "Comment la prévisualisation 3D directe guide-t-elle un récit sans dialogue ?",
          "pt": "Como pode pré-visualização 3D direta orientar narrativa sem diálogo?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test camera movement and staging in an editable scene",
              "nb": "Prøv kamerabevegelse og iscenesettelse i en redigerbar scene",
              "fr": "Tester mouvements caméra et mise en scène dans une scène modifiable",
              "pt": "Testar movimento de câmara e encenação numa cena editável"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Render every scene before assessing its narrative clarity",
              "nb": "Render alle scener før fortellingsklarheten vurderes",
              "fr": "Rendre toutes les scènes avant d’évaluer leur clarté",
              "pt": "Renderizar cenas antes de avaliar clareza narrativa"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume dialogue-free storytelling needs no structural revision",
              "nb": "Anta at dialogfri fortelling ikke trenger strukturrevisjon",
              "fr": "Supposer qu’un récit sans dialogue dispense de révision",
              "pt": "Supor que narrativa sem diálogo dispensa revisão"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Zilbalodis describes direct 3D planning and camera-led dialogue-free narrative. Create an original simple animatic and revise it before detailed animation.",
          "nb": "Zilbalodis beskriver direkte 3D-planlegging og kamerastyrt dialogfri fortelling. Lag en enkel egen animatic og revider før detaljert animasjon.",
          "fr": "Zilbalodis décrit planification 3D directe et récit sans dialogue guidé par caméra. Créez une animatique originale et révisez-la.",
          "pt": "Zilbalodis descreve planeamento 3D direto e narrativa sem diálogo guiada por câmara. Crie animática original e reveja-a."
        },
        "sourceIds": [
          "s2",
          "s4",
          "s7"
        ]
      },
      {
        "id": "flow-animals",
        "area": "animation",
        "prompt": {
          "en": "How can animal movement references guide expressive hand animation?",
          "nb": "Hvordan kan referanser til dyrebevegelse styre uttrykksfull håndanimasjon?",
          "fr": "Comment les références animales guident-elles l’animation expressive à la main ?",
          "pt": "Como podem referências animais orientar animação expressiva manual?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Give every species identical timing and locomotion",
              "nb": "Gi alle arter identisk timing og bevegelsesmønster",
              "fr": "Donner à chaque espèce les mêmes mouvements et rythmes",
              "pt": "Dar a todas as espécies movimento e ritmo idênticos"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume realistic animation necessarily uses motion capture",
              "nb": "Anta at realistisk animasjon nødvendigvis bruker bevegelsesopptak",
              "fr": "Supposer que l’animation réaliste exige la capture de mouvement",
              "pt": "Supor que animação realista exige captura de movimento"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Observe species-specific motion and test readable animated gestures",
              "nb": "Observer artsspesifikk bevegelse og prøv lesbare animerte gester",
              "fr": "Observer les mouvements propres aux espèces et tester des gestes lisibles",
              "pt": "Observar movimento por espécie e testar gestos animados legíveis"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "AWN documents animal-reference study and hand animation without motion capture. Test a new animal gesture using ethically obtained observations.",
          "nb": "AWN dokumenterer studier av dyr og håndanimasjon uten bevegelsesopptak. Prøv en ny dyregest med etisk innhentede observasjoner.",
          "fr": "AWN documente l’étude animale et l’animation manuelle sans capture. Testez un geste animal inédit avec observations éthiques.",
          "pt": "AWN documenta estudo animal e animação manual sem captura. Teste gesto animal novo com observações éticas."
        },
        "sourceIds": [
          "s3",
          "s7"
        ]
      },
      {
        "id": "flow-render",
        "area": "research",
        "prompt": {
          "en": "How can a small animation production manage long-shot file complexity?",
          "nb": "Hvordan kan et lite animasjonsteam håndtere filkompleksitet ved lange tagninger?",
          "fr": "Comment une petite production animée gère-t-elle les fichiers de plans longs ?",
          "pt": "Como pode pequena produção animada gerir complexidade de ficheiros de planos longos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume every workflow requires a separate render farm",
              "nb": "Anta at alle arbeidsflyter krever en egen renderfarm",
              "fr": "Supposer que toute chaîne nécessite une ferme de rendu",
              "pt": "Supor que todo fluxo exige uma quinta de renderização"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Test scene performance and preserve recoverable project versions",
              "nb": "Prøv scenehastighet og bevar gjenopprettbare prosjektversjoner",
              "fr": "Tester les performances et conserver des versions récupérables",
              "pt": "Testar desempenho da cena e preservar versões recuperáveis"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Depend on one unversioned project file throughout production",
              "nb": "Stol på én uversjonert prosjektfil gjennom hele produksjonen",
              "fr": "Dépendre d’un fichier unique sans versions",
              "pt": "Depender de um ficheiro sem versões durante produção"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "The Blender accounts describe EEVEE rendering, long-shot file constraints and version policy. Design a small original scene with measured performance and recovery tests.",
          "nb": "Blender-kildene beskriver EEVEE-rendering, filgrenser ved lange tagninger og versjonspolicy. Lag en liten egen scene med målt ytelse og gjenopprettingsprøver.",
          "fr": "Les sources Blender décrivent EEVEE, limites de fichiers et versions. Créez une petite scène avec mesures et essais de restauration.",
          "pt": "As fontes Blender descrevem EEVEE, limites de ficheiros e versões. Crie pequena cena com medidas e testes de recuperação."
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
    "scenarioId": "scenario_the_substance_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Symbolic sets, practical-digital effects and dual sonic worlds",
      "nb": "Symbolske kulisser, praktisk-digitale effekter og doble lydverdener",
      "fr": "Décors symboliques, effets hybrides et doubles univers sonores",
      "pt": "Cenários simbólicos, efeitos híbridos e universos sonoros duplos"
    },
    "sources": [
      {
        "id": "s3",
        "title": "Benjamin Kracun BSC / The Substance",
        "publisher": "British Cinematographer",
        "url": "https://britishcinematographer.co.uk/benjamin-kracun-bsc-the-substance/"
      },
      {
        "id": "s4",
        "title": "The Substance: A Star Is...",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/articles/the-substance-kracun-fargeat"
      },
      {
        "id": "s5",
        "title": "The Substance of Nightmares: Oscar-Nominated Makeup Effects Master Pierre Olivier Persin on His Terrifying Transformations",
        "publisher": "Motion Picture Association – The Credits",
        "url": "https://www.motionpictures.org/2025/02/the-substance-of-nightmares-oscar-nominated-makeup-effects-master-pierre-olivier-persin-on-his-terrifying-transformations/"
      },
      {
        "id": "s6",
        "title": "The Substance",
        "publisher": "Noid Studio",
        "url": "https://www.noid-studio.com/work/the-substance/"
      },
      {
        "id": "s7",
        "title": "Editing Oscar-nominee The Substance with Premiere Pro",
        "publisher": "Adobe",
        "url": "https://blog.adobe.com/en/publish/2025/02/13/editing-oscar-nominee-the-substance-with-premiere-pro"
      },
      {
        "id": "s8",
        "title": "Oscar-Nominated The Substance Writer/Director Coralie Fargeat",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/tag/director-coralie-fargeat/"
      },
      {
        "id": "s9",
        "title": "Raffertie: From The Conservatory to The Substance",
        "publisher": "Ableton",
        "url": "https://www.ableton.com/en/blog/raffertie-from-the-conservatory-to-the-substance/"
      }
    ],
    "questions": [
      {
        "id": "substance-design",
        "area": "camera",
        "prompt": {
          "en": "How can a symbolic studio environment guide close-up photography?",
          "nb": "Hvordan kan et symbolsk studiomiljø styre nærbildefotografi?",
          "fr": "Comment un décor symbolique guide-t-il les gros plans ?",
          "pt": "Como pode cenário simbólico orientar grandes planos?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Test surface textures and close-focus framing under intended light",
              "nb": "Prøv overflateteksturer og nærfokusutsnitt under planlagt lys",
              "fr": "Tester textures de surface et cadrage rapproché sous la lumière prévue",
              "pt": "Testar texturas e enquadramento próximo sob luz prevista"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose macro framing without inspecting material texture",
              "nb": "Velg makroutsnitt uten å undersøke materialtekstur",
              "fr": "Choisir les gros plans sans examiner les textures",
              "pt": "Escolher planos próximos sem examinar textura"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume a studio set must reproduce real geography literally",
              "nb": "Anta at en studiokulisse må gjengi ekte geografi bokstavelig",
              "fr": "Supposer qu’un décor doit reproduire littéralement la géographie",
              "pt": "Supor que cenário deve reproduzir geografia literalmente"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Kracun and Fargeat describe a symbolic studio geography and close-focus optics. Test a neutral original material study and record framing choices.",
          "nb": "Kracun og Fargeat beskriver symbolsk studiogeografi og nærfokusoptikk. Prøv en nøytral egen materialstudie og registrer utsnittsvalg.",
          "fr": "Kracun et Fargeat décrivent géographie symbolique et optiques rapprochées. Testez une étude neutre et notez les choix de cadre.",
          "pt": "Kracun e Fargeat descrevem geografia simbólica e óticas próximas. Teste estudo neutro e registe escolhas de enquadramento."
        },
        "sourceIds": [
          "s3",
          "s4",
          "s8"
        ]
      },
      {
        "id": "substance-effects",
        "area": "animation",
        "prompt": {
          "en": "How can practical object effects and digital cleanup be coordinated?",
          "nb": "Hvordan kan praktiske objekteffekter og digital opprydding samordnes?",
          "fr": "Comment coordonner effets d’objets pratiques et retouches numériques ?",
          "pt": "Como coordenar efeitos práticos de objetos e retoques digitais?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Demand harmful physical procedures for convincing effects",
              "nb": "Krev skadelige fysiske prosedyrer for overbevisende effekter",
              "fr": "Exiger des procédés physiques nocifs pour des effets convaincants",
              "pt": "Exigir procedimentos físicos nocivos para efeitos convincentes"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume practical effects eliminate every digital task",
              "nb": "Anta at praktiske effekter fjerner alle digitale oppgaver",
              "fr": "Supposer que les effets pratiques éliminent toute tâche numérique",
              "pt": "Supor que efeitos práticos eliminam toda tarefa digital"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Use harmless mock-ups and record source layers for compositing",
              "nb": "Bruk ufarlige modeller og registrer kildelag for kompositering",
              "fr": "Utiliser des maquettes sans danger et documenter les couches sources",
              "pt": "Usar maquetes sem perigo e documentar camadas de origem"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Persin and Noid describe practical and digital collaboration. Test a harmless object transformation with documented handoffs, not a simulation of bodily injury.",
          "nb": "Persin og Noid beskriver praktisk og digitalt samarbeid. Prøv en ufarlig objektforvandling med dokumentert overlevering, ikke simulering av kroppsskade.",
          "fr": "Persin et Noid décrivent collaboration pratique et numérique. Testez une transformation d’objet sûre, sans simulation de blessure.",
          "pt": "Persin e Noid descrevem colaboração prática e digital. Teste transformação segura de objeto, sem simular lesão."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      },
      {
        "id": "substance-sound",
        "area": "sound",
        "prompt": {
          "en": "How can recurring sonic motifs distinguish contrasting narrative states?",
          "nb": "Hvordan kan tilbakevendende lydmotiver skille kontrasterende fortellingstilstander?",
          "fr": "Comment des motifs sonores distinguent-ils des états narratifs opposés ?",
          "pt": "Como podem motivos sonoros distinguir estados narrativos opostos?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Make every recurring cue identical in loudness and duration",
              "nb": "Gjør alle tilbakevendende innslag identiske i lydnivå og varighet",
              "fr": "Donner à chaque motif le même niveau et la même durée",
              "pt": "Dar a cada motivo o mesmo nível e duração"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Develop related original textures and test transitions during editing",
              "nb": "Utvikle beslektede egne teksturer og prøv overganger under klipping",
              "fr": "Développer des textures originales apparentées et tester les transitions",
              "pt": "Desenvolver texturas originais relacionadas e testar transições"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Assign unrelated music without reviewing the scene's rhythm",
              "nb": "Tildel urelatert musikk uten å vurdere scenens rytme",
              "fr": "Attribuer une musique sans rapport sans revoir le rythme",
              "pt": "Atribuir música sem relação sem rever ritmo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Raffertie describes dual sonic worlds and recurring motifs; the editors discuss sound-led revision. Test original cues at comfortable levels across a neutral montage.",
          "nb": "Raffertie beskriver to lydverdener og tilbakevendende motiver; klipperne omtaler lydstyrt revisjon. Prøv egne innslag på behagelige nivåer i en nøytral montasje.",
          "fr": "Raffertie décrit deux univers sonores et motifs récurrents ; les monteurs la révision par le son. Testez des sons originaux à niveau confortable.",
          "pt": "Raffertie descreve dois mundos sonoros e motivos; montadores revisão pelo som. Teste sons originais a nível confortável."
        },
        "sourceIds": [
          "s7",
          "s8",
          "s9"
        ]
      }
    ]
  },
  {
    "scenarioId": "scenario_anora_2024",
    "status": "editorial_learning_exercise_not_case_verified",
    "introduction": {
      "en": "Location-led color, multilingual editorial and overlapping dialogue",
      "nb": "Stedsstyrt farge, flerspråklig klipping og overlappende dialog",
      "fr": "Couleur des lieux, montage multilingue et dialogues superposés",
      "pt": "Cor dos locais, montagem multilingue e diálogos sobrepostos"
    },
    "sources": [
      {
        "id": "s1",
        "title": "Shooting on KODAK 35mm film, DP Drew Daniels summoned a spirit of the '70s for Sean Baker's Cannes-winning tragi-comedy 'Anora'",
        "publisher": "Kodak",
        "url": "https://www.kodak.com/en/motion/blog-post/anora/"
      },
      {
        "id": "s2",
        "title": "Anora Ignites Bride War",
        "publisher": "American Cinematographer",
        "url": "https://theasc.com/article/anora-ignites-bride-war/"
      },
      {
        "id": "s3",
        "title": "How Anora's DP & Production Designer Brought a Deconstructed Cinderella to New York",
        "publisher": "Motion Picture Association — The Credits",
        "url": "https://www.motionpictures.org/2025/01/how-anoras-dp-production-designer-brought-a-deconstructed-cinderella-to-new-york/"
      },
      {
        "id": "s4",
        "title": "Oscar-Nominated Sean Baker on Directing and Editing Anora",
        "publisher": "postPerspective",
        "url": "https://postperspective.com/oscar-nominated-sean-baker-on-directing-and-editing-anora/"
      },
      {
        "id": "s5",
        "title": "Oscar Winner Sean Baker on Editing Anora",
        "publisher": "Curzon",
        "url": "https://www.curzon.com/journal/sean-baker-anora/"
      },
      {
        "id": "s6",
        "title": "Anora: Creating the soundtrack for Sean Baker's latest feature",
        "publisher": "Post Magazine",
        "url": "https://www.postmagazine.com/Press-Center/Daily-News/2024/-I-Anora-I-Creating-the-soundtrack-for-Sean-Bake.aspx"
      }
    ],
    "questions": [
      {
        "id": "anora-location",
        "area": "camera",
        "prompt": {
          "en": "How can existing locations guide a film's color and coverage plan?",
          "nb": "Hvordan kan eksisterende opptakssteder styre farge- og dekningsplanen?",
          "fr": "Comment les lieux existants guident-ils couleur et découpage ?",
          "pt": "Como podem locais existentes orientar plano de cor e cobertura?"
        },
        "options": [
          {
            "id": "supported",
            "label": {
              "en": "Scout reflections, light and color before testing motivated angles",
              "nb": "Undersøk refleksjoner, lys og farge før begrunnede vinkler prøves",
              "fr": "Repérer reflets, lumière et couleur avant les angles motivés",
              "pt": "Pesquisar reflexos, luz e cor antes de testar ângulos motivados"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Choose every angle before visiting the actual room",
              "nb": "Velg alle vinkler før besøk i det faktiske rommet",
              "fr": "Choisir chaque angle avant de visiter la pièce",
              "pt": "Escolher ângulos antes de visitar a sala"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Assume existing locations require no design coordination",
              "nb": "Anta at eksisterende steder ikke trenger designsamordning",
              "fr": "Supposer que les lieux réels dispensent de coordination décor",
              "pt": "Supor que locais reais dispensam coordenação de design"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Daniels and Phelps describe scout-led preparation and controlled color in real locations. Test an original interior and note how reflections affect framing.",
          "nb": "Daniels og Phelps beskriver befaringstyrt forberedelse og kontrollert farge på ekte steder. Prøv et eget interiør og noter hvordan refleksjoner påvirker utsnittet.",
          "fr": "Daniels et Phelps décrivent repérages et couleur contrôlée. Testez un intérieur original et notez les effets des reflets.",
          "pt": "Daniels e Phelps descrevem pesquisa de locais e cor controlada. Teste interior original e registe efeito dos reflexos."
        },
        "sourceIds": [
          "s1",
          "s2",
          "s3"
        ]
      },
      {
        "id": "anora-languages",
        "area": "research",
        "prompt": {
          "en": "How can multilingual dailies support a chronological fine cut?",
          "nb": "Hvordan kan flerspråklige dagsopptak støtte kronologisk finklipp?",
          "fr": "Comment des rushes multilingues soutiennent-ils un montage fin chronologique ?",
          "pt": "Como podem brutos multilingues apoiar montagem fina cronológica?"
        },
        "options": [
          {
            "id": "alternative-a",
            "label": {
              "en": "Assume subtitles convey every nuance without review",
              "nb": "Anta at undertekster formidler alle nyanser uten gjennomgang",
              "fr": "Supposer que les sous-titres transmettent toutes les nuances sans revue",
              "pt": "Supor que legendas transmitem nuances sem revisão"
            }
          },
          {
            "id": "alternative-b",
            "label": {
              "en": "Discard dialogue notes before the final editorial decisions",
              "nb": "Forkast dialognotater før endelige klippevalg",
              "fr": "Écarter les notes de dialogue avant les choix finaux",
              "pt": "Descartar notas de diálogo antes de escolhas finais"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Maintain qualified translations linked to takes and edit versions",
              "nb": "Bevar kvalifiserte oversettelser knyttet til tagninger og klippeversjoner",
              "fr": "Conserver des traductions qualifiées liées aux prises et versions",
              "pt": "Manter traduções qualificadas ligadas a tomadas e versões"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Baker describes translated dailies and chronological fine cutting without an assembly. Create a small translation and version ledger for a fictional conversation.",
          "nb": "Baker beskriver oversatte dagsopptak og kronologisk finklipp uten grovsammenstilling. Lag en liten oversettelses- og versjonslogg for en fiktiv samtale.",
          "fr": "Baker décrit rushes traduits et montage fin chronologique sans assemblage. Créez un registre de traduction et versions pour une conversation fictive.",
          "pt": "Baker descreve brutos traduzidos e montagem fina cronológica sem assemblagem. Crie registo de tradução e versões para conversa fictícia."
        },
        "sourceIds": [
          "s4",
          "s5"
        ]
      },
      {
        "id": "anora-dialogue",
        "area": "sound",
        "prompt": {
          "en": "How can overlapping dialogue remain intelligible without losing location energy?",
          "nb": "Hvordan kan overlappende dialog forbli forståelig uten å miste stedsenergien?",
          "fr": "Comment rendre intelligible un dialogue superposé sans perdre l’énergie du lieu ?",
          "pt": "Como tornar diálogo sobreposto inteligível sem perder energia do local?"
        },
        "options": [
          {
            "id": "alternative-b",
            "label": {
              "en": "Treat every overlapping voice as equally important in every moment",
              "nb": "Behandle alle overlappende stemmer som like viktige hele tiden",
              "fr": "Traiter toutes les voix comme également importantes à tout instant",
              "pt": "Tratar todas as vozes como igualmente importantes sempre"
            }
          },
          {
            "id": "supported",
            "label": {
              "en": "Compare selective voice balance and retained environmental sound",
              "nb": "Sammenlign selektiv stemmebalanse og bevart miljølyd",
              "fr": "Comparer équilibre sélectif des voix et ambiance conservée",
              "pt": "Comparar equilíbrio seletivo de vozes e ambiente preservado"
            }
          },
          {
            "id": "alternative-a",
            "label": {
              "en": "Remove every location sound beneath the dialogue",
              "nb": "Fjern all stedslyd under dialogen",
              "fr": "Supprimer tout son du lieu sous les dialogues",
              "pt": "Remover todo som local sob diálogo"
            }
          }
        ],
        "bestSupportedOptionId": "supported",
        "explanation": {
          "en": "Hay and Warrin describe overlapping dialogue, retained location noise and dialogue-focused mixing. Compare original mixes of a neutral group conversation.",
          "nb": "Hay og Warrin beskriver overlappende dialog, bevart stedsstøy og dialogfokusert miks. Sammenlign egne mikser av en nøytral gruppesamtale.",
          "fr": "Hay et Warrin décrivent dialogues superposés, bruit du lieu et mixage centré sur les voix. Comparez des mixages originaux d’une conversation neutre.",
          "pt": "Hay e Warrin descrevem diálogo sobreposto, ruído local e mistura centrada nas vozes. Compare misturas originais de conversa neutra."
        },
        "sourceIds": [
          "s5",
          "s6"
        ]
      }
    ]
  },
  ...sourceWorkshops2024,
  ...sourceWorkshops2025,
  ...worldCinemaSourceWorkshops
] as const satisfies readonly SourceBackedCaseWorkshop[];
