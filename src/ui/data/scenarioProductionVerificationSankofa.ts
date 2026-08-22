import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const sankofaProductionCaseVerification = {
  scenarioId: "scenario_sankofa_1993",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "Sankofa is verified as Haile Gerima's independently controlled 1993 Black diasporic historical feature, produced through a transnational low-budget network and later self-distributed when conventional U.S. distributors declined it. UCLA Film & Television Archive credits Gerima as director, producer, writer and editor, Augustin E. Cubano as cinematographer, and records a 35mm color 124-minute film. BFI likewise records a 1993 USA/Germany/Ghana/Burkina Faso production at 124 minutes. A BFI programme expands the original production package to Negod Gwad/Ngod Gward Productions in co-production with the Ghana National Commission on Culture, DiProCi, NDR and WDR, in association with Channel Four, and credits Shirikiana Aina as co-producer, Ada Marie Babino as line producer, Charles Nuckolls as production manager, Kerry Marshall as production designer, Tracey White as costume designer and David J. White for music. Contemporary Los Angeles Times reporting states that Gerima and Aina used foundation grants, bartered plane tickets and lodging and credit-card purchases and finished the film for less than $1 million; that figure is preserved as a ceiling rather than treated as an exact budget. Gerima also described moving plantation production from Louisiana to Jamaica after costs rose and returning to Africa roughly a year later to finish the remaining film in about three weeks. Merawi Gerima independently recalls the Jamaica set and Shirikiana Aina fundraising in the United States to keep the underfunded production moving. Washington Post reporting documents Gerima's long research into slavery and resistance histories and his account of Kofi Ghanaba entering an absorbed performance state that the camera had to follow rather than mechanically control; this remains title-specific performance evidence and is not generalized into a claim of total improvisation. The reviewed sources support 35mm color but do not establish camera body, lens package, stock, exposure, lighting, laboratory or color-timing workflow. Sound-role records vary between institutional catalogues, so Marko A. Costanzo and Don White/re-recording records remain source-specific rather than being collapsed into an invented unified sound chain. Runtime records vary around 123, 124 and 125 minutes; 124 is used as the canonical gameplay runtime because UCLA and BFI converge there. Distribution is kept separate from manufacture: contemporary reporting documents Mypheduh Films, community-organized theater rentals, post-screening discussions and use of early Washington-run revenue to create additional prints and expand to other cities. BFI/Sight and Sound later describes this circulation as community organizing. Later restoration and ARRAY/Netflix release are preservation/distribution layers and are not used to infer original 1992-93 production technique.",
  sources: [
    {
      title: "Sankofa",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/collections/la-rebellion/sankofa/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional L.A. Rebellion record crediting Haile Gerima as director, producer, writer and editor, Augustin E. Cubano as cinematographer, and recording USA/Ghana/Burkina Faso/Germany, 35mm color and 124 minutes."
    },
    {
      title: "Sankofa (1993)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/84338d2e-36bf-5532-9fcf-44b30f282767/sankofa",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI catalogue independently records Gerima as director/producer/writer, the USA/Germany/Ghana/Burkina Faso production context and 124-minute running time."
    },
    {
      title: "SANKOFA – In the Black Fantastic programme",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/pdf/2022-07-02-sankofa.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Programme credit record for the Negod Gwad/Ngod Gward production, Ghana National Commission on Culture, DiProCi, NDR/WDR and Channel Four network; Shirikiana Aina, Ada Marie Babino and Charles Nuckolls production roles; Cubano cinematography, Gerima editing, Kerry Marshall design, Tracey White costume, David J. White music and Don White re-recording. It lists a 125-minute exhibition record."
    },
    {
      title: "'Sankofa' Takes a Different Route to Theaters",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-1994-01-25-fi-15137-story.html",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Contemporary production/distribution reporting that Gerima and Shirikiana Aina used foundation grants, barter and credit-card purchases, finished the film for less than $1 million, then used a Washington community premiere and theater run to finance additional prints and expansion after distributors declined the film."
    },
    {
      title: "'Sankofa': A Saga of Slavery Reaches the Big Screen",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-1995-05-29-ca-7370-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Gerima's first-person account of shifting planned plantation material from Louisiana to Jamaica after costs rose, then returning to Africa roughly a year later and completing the remaining production in about three weeks; also documents Mypheduh's city-by-city self-distribution system."
    },
    {
      title: "Merawi Gerima on Haile Gerima",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/black-film-bulletin-merawi-gerima-haile-gerima",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "First-person family production memory of the Jamaica set, Shirikiana Aina fundraising to sustain the underfunded shoot, Gerima editing on a Steenbeck over roughly two years, and the later community-organizing model of theatrical circulation."
    },
    {
      title: "Haile Gerima: decolonising film",
      publisher: "BFI Sight and Sound / Black Film Bulletin",
      url: "https://www.bfi.org.uk/sight-and-sound/features/black-film-bulletin-haile-gerima-decolonising-film",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Gerima's own account that he distributed Sankofa because conventional distributors would not take it, and that Black audiences and community support proved a viable alternative circulation base."
    },
    {
      title: "Haile Gerima, Menace II the Status Quo",
      publisher: "The Washington Post",
      url: "https://www.washingtonpost.com/archive/lifestyle/style/1993/10/24/haile-gerima-menace-ii-the-status-quo/91b30153-a795-49a9-a452-29fa286313ea/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Contemporary interview documenting Gerima's long slavery/resistance research and his title-specific account of Kofi Ghanaba's absorbed Sankofa performance, which the camera followed rather than treating as a conventionally repeatable take."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
