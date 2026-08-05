import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const driftersProductionCaseVerification = {
  scenarioId: "scenario_drifters_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's Swedish social-political thriller structure, social-work research, lived-experience ensemble, Malin Levanon's embodied preparation, illegal caravan-community geography, nearly continuous handheld proximity, award-winning editing, costume and production design, restrained music and international festival reception are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Drifters",
      publisher: "Mer Film",
      url: "https://www.merfilm.no/en/films/drifters",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The distributor records the social-political drama-thriller premise, Grönlund's earlier social-work experience, the roughly ninety-percent nonprofessional ensemble and performers drawn from addiction, crime, policing and social-work experience."
    },
    {
      title: "Tjuvheder – socialrealistisk överlevnadsthriller",
      publisher: "Sveriges Radio",
      url: "https://www.sverigesradio.se/artikel/6278930",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The review describes six professional actors, an illegal caravan camp in Huddinge, money as the survival engine and a production shot approximately ninety-nine percent handheld with the camera kept very close to the action."
    },
    {
      title: "Filmprat: Peter Grönlund og Malin Levanon om Tjuvheder",
      publisher: "Montages",
      url: "https://montages.no/nyheter/filmprat-en-samtale-med-regissor-peter-gronlund-og-skuespiller-malin-levanon-om-tjuvheder/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The filmmaker conversation connects the screenplay and direction to Grönlund's social-work experience and documents Levanon's close collaboration, environmental exploration and construction of Minna from practical knowledge rather than external imitation."
    },
    {
      title: "Jag gick ner 25 kilo på fyra månader",
      publisher: "Aftonbladet",
      url: "https://www.aftonbladet.se/nojesbladet/film/a/6nVga8/jag-gick-ner-25-kilo-pa-4-manader",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Levanon and Grönlund describe prison stays, dental alteration, scars, a twenty-five-kilogram weight loss, performers playing near their own experience and the director's creation of a safe production environment for a vulnerable mixed ensemble."
    },
    {
      title: "Hon spelar hemlös knarklangare",
      publisher: "SVT",
      url: "https://www.svt.se/kultur/hon-spelar-hemlos-knarklangare",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "SVT documents Levanon's preparation and the use of amateur supporting performers with lived experience, while Grönlund explains the intention to show recognisable human beings rather than symbolic images of homelessness and addiction."
    },
    {
      title: "Tjuvheder / Drifters",
      publisher: "San Sebastián International Film Festival",
      url: "https://www.sansebastianfestival.com/2015/sections_and_films/new_directors/7/631384/in",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official New Directors record verifies Peter Grönlund's screenplay and direction, B-Reel Feature Films, Frida Bargo, Staffan Övgård photography, Kristofer Nordin editing, Johan Testad music, DCP presentation and The Match Factory sales."
    },
    {
      title: "Grattis alla vinnare!",
      publisher: "Guldbaggegalan",
      url: "https://www.guldbaggen.se/grattis-alla-vinnare/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "The official Swedish awards record identifies Tjuvheder as the evening's leading film with five Guldbaggar for Malin Levanon, Peter Grönlund's screenplay, Kristofer Nordin's editing, Mia Andersson's costumes and Kajsa Severin's production design."
    },
    {
      title: "Swedish film in Toronto, San Sebastián and Busan",
      publisher: "Swedish Film Institute",
      url: "https://www.filminstitutet.se/en/about-us/press-service/press-archive-old/2015/swedish-film-in-toronto-san-sebastian-and-busan/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The national film-institute record places Grönlund's debut in San Sebastián, describes it as a socio-political thriller and verifies B-Reel Feature Films, Swedish Film Institute support and The Match Factory's international-sales role."
    },
    {
      title: "Drifters",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/298521/rl/1/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The European film record verifies the 92-minute Swedish production, release and festival history together with Peter Grönlund, Staffan Övgård, Kristofer Nordin, Mia Andersson, Johan Testad and B-Reel Feature Films."
    },
    {
      title: "Tjuvheder / Drifters",
      publisher: "Nordische Filmtage Lübeck",
      url: "https://nordische-filmtage.de/en/programm/movie/view/2016/7776.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Nordic festival programme details Minna's ADHD, drug dependence, rent debt, flight to the illegal trailer camp and the community's fragile rules, emphasizing the film's refusal to sugar-coat or sentimentalise her fight for dignity."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
