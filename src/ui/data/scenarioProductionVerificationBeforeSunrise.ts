import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const beforeSunriseVerificationRecords = [
  {
    scenarioId: "scenario_before_sunrise_1995",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's approximately three-million-dollar Castle Rock production, Vienna regional subsidy and local spend, American-Austrian crew structure, collaborative screenplay and rehearsal process, real-location city design, colour 35mm image, Avid dialogue editing, restored surround track, festival recognition, trilogy afterlife and National Film Registry preservation are supported by contemporary filmmaker testimony and institutional, trade, craft, archive and preservation records.",
    sources: [
      {
        title: "Vienna, Texas: Linklater's Junior Year Abroad",
        publisher: "Filmmaker Magazine",
        url: "https://filmmakermagazine.com/archives/issues/winter1995/vienna.php",
        sourceKind: "trade_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "This contemporary production report documents the roughly $3 million budget, $500,000 Vienna subsidy, $1.5 million local spend, Castle Rock deal, Austrian coproducer, local crew, Moviecam equipment, film stock, laboratory, location permissions, night-shoot constraints and Austin postproduction."
      },
      {
        title: "The first kiss takes so long: Richard Linklater on Before Sunrise",
        publisher: "BFI Sight and Sound",
        url: "https://www.bfi.org.uk/sight-and-sound/features/first-kiss-takes-so-long-richard-linklater-before-sunrise",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Linklater's 1995 interview records the autobiographical origin, the two-characters-under-a-microscope method, Vienna selection, delayed physical progression, interaction-driven structure, Rohmerian context and the deliberate use of a female cowriter and actor challenge to resist romantic cliché."
      },
      {
        title: "Julie Delpy and Ethan Hawke: how we made the Before Sunrise trilogy",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/film/2019/nov/04/julie-delpy-ethan-hawke-how-we-made-before-sunrise-trilogy-sunset-midnight",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Delpy and Hawke describe the audition-through-conversation process, collaborative rewriting, the requirement that all three principal creators agree on scenes, the effort to preserve a full female voice and continued writing during the Vienna shoot."
      },
      {
        title: "Romancing a Trilogy: Sandra Adair Edits Before Midnight",
        publisher: "CineMontage",
        url: "https://cinemontage.org/sandra-adair-before-midnight/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "editing"],
        note: "Sandra Adair documents weeks of intensive rehearsal, the rough Vienna assembly, her first Avid feature, Austin collaboration with Linklater and the editorial task of shaping dense dialogue through playfulness, intimacy, connection and precisely placed reaction shots."
      },
      {
        title: "Before Sunrise",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/28692-before-sunrise",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Criterion provides the principal production credits, original 1.85:1 presentation, director-approved 2K restoration, restored 2.0 surround audio, behind-the-scenes production material and the film's continuing placement inside the restored Before Trilogy."
      },
      {
        title: "30 years of Before Sunrise: retracing Celine and Jesse's footsteps in Vienna",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/before-sunrise-richard-linklater-vienna-locations",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography"],
        note: "BFI identifies the bridge, square, record store, church, cafe, streets and alleys used by the production and shows how recurring real locations allow walking, conversation and the final empty-city montage to make Vienna an active dramatic system."
      },
      {
        title: "Before Sunrise",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/sunrise",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "The institutional film record confirms Richard Linklater and Kim Krizan's screenplay, Anne Walker-McBay's production, Lee Daniel's photography, Sandra Adair's editing, Fred Frith's music, Florian Reichmann's design, Castle Rock production and colour Technicolor and Dolby presentation."
      },
      {
        title: "Richard Linklater, Julie Delpy and Ethan Hawke on Their Before Trilogy",
        publisher: "Motion Picture Association",
        url: "https://www.motionpictures.org/2014/01/richard-linklater-julie-delpy-ethan-hawke-on-their-before-trilogy/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "The creators describe workshopping Linklater and Krizan's script from the first audition and building the film's credibility from sustained chemistry, shared authorship, hyper-literate conversation and the practical dramatic deadline of one night before departure."
      },
      {
        title: "Before Sunrise",
        publisher: "Irish Film Institute",
        url: "https://ifi.ie/film/before-sunrise-3/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "IFI records the rapid Linklater-Krizan writing process, the loose city structure inherited from Slacker and Dazed and Confused, the film's European art-cinema relationship and Linklater's Silver Bear for Best Director at Berlin."
      },
      {
        title: "Library Names 25 Films to the National Film Registry for Preservation",
        publisher: "Library of Congress",
        url: "https://newsroom.loc.gov/news/library-names-25-films-to-the-national-film-registry-for-preservation/s/54d2521d-cc42-4987-9c75-4a08d2d901e1",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The official preservation announcement lists Before Sunrise among the 25 films selected for the 2025 National Film Registry because of their cultural, historic or aesthetic importance to United States film heritage."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
