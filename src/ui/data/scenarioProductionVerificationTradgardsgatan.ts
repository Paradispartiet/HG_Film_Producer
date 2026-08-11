import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const tradgardsgatanProductionCaseVerification = {
  scenarioId: "scenario_tradgardsgatan_2017",
  status: "verified",
  verifiedAt: "2026-08-11",
  summary: "Trädgårdsgatan's autobiographical family-memory basis, unsupported independent financing, collective Köpingebro shoot, location-led rehearsal, child-and-parent performance system, credited design/editing/sound/music departments, festival trajectory and award-winning cinematography are supported by filmmaker, institutional, festival, trade and contemporary press sources.",
  sources: [
    {
      title: "Kristoffer Jönsson, årets Guldbaggevinnare",
      publisher: "Föreningen Sveriges Filmfotografer",
      url: "https://fsfsweden.se/kristoffer-jonsson-arets-guldbaggevinnare/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Jönsson describes the Wallander-group origins, difficult financing, collective production in which the team lived together, advance work with actors at the principal farm and his broader preference for character-rooted scene construction and longer observation."
    },
    {
      title: "Trädgårdsgatan",
      publisher: "Svenska Filminstitutet",
      url: "https://www.filminstitutet.se/sv/ovrigt/startsidans-snurra/tradgardsgatan/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Film Institute identifies Trädgårdsgatan as Olof Spaak's feature debut, records its Swedish theatrical launch and summarizes the adult return to a childhood summer shaped by parental addiction and temporary family life."
    },
    {
      title: "Filmer utan stöd",
      publisher: "Svenska Filminstitutet",
      url: "https://www.filminstitutet.se/sv/nyheter/2019/filmer-utan-stod/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "SFI's analysis of Swedish features released without Film Institute production support explicitly includes Trädgårdsgatan among the 2018 fiction releases made outside that production-support route."
    },
    {
      title: "Karin Franz Körlof: ‘Gick ner fem, sex kilo på några veckor’",
      publisher: "Aftonbladet",
      url: "https://www.aftonbladet.se/nojesbladet/film/a/4dAmnE/jag-gick-ner-fem-sex-kilo-pa-nagra-veckor",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The interview documents the project as loosely based on producer Sofie Palage's upbringing, the Österlen/Köpingebro shoot, years of development outside advance SFI production support and Körlof's intensive physical preparation for Linda."
    },
    {
      title: "Giffoni Experience 2017 Diary",
      publisher: "Giffoni Film Festival",
      url: "https://www.giffonifilmfestival.it/en/diario-gff-2017.html",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official 2017 festival record lists Garden Lane by Olof Spaak as the Generator +18 Gryphon Award winner, documenting the film's international festival recognition before its Swedish theatrical release."
    },
    {
      title: "Guldbaggevinnarna 2019!",
      publisher: "Guldbaggegalan",
      url: "https://www.guldbaggen.se/guldbaggevinnarna-2019/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "The official Swedish film-awards record identifies Kristoffer Jönsson as the winner for Best Cinematography for Trädgårdsgatan, supporting the film's later craft recognition."
    },
    {
      title: "Garden Lane",
      publisher: "The Yellow Affair",
      url: "https://www.yellowaffair.com/garden-lane",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The official sales page records Olof Spaak, Gunnar Järvstad, Sofie Palage, Primodrom Produktion, the principal cast, Swedish production identity, HD/DCP delivery and the film's Giffoni, Haugesund and Gothenburg festival circulation."
    },
    {
      title: "Filmrecension: Trädgårdsgatan",
      publisher: "SVT Nyheter",
      url: "https://www.svt.se/kultur/filmrecension-tradgardsgatan",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "SVT's contemporary review describes Kristoffer Jönsson's photography as differentiating perspectives on the same family and identifies the dry fields, beach, domestic gatherings, multiple time planes and child-centred performances as central formal materials."
    },
    {
      title: "Minnets opålitlighet i Trädgårdsgatan",
      publisher: "Sveriges Radio",
      url: "https://www.sverigesradio.se/artikel/7011972",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Sveriges Radio explicitly frames the feature around unreliable childhood memory, two different adult histories of the same upbringing and the relationship between addiction, family separation and later recollection."
    },
    {
      title: "Theo Lindberg",
      publisher: "Nordic Women in Film",
      url: "https://nordicwomeninfilm.com/person/theo-lindberg/",
      sourceKind: "film_institute",
      supports: ["editing"],
      note: "The Nordic Women in Film professional record identifies Theo Lindberg's primary profession as film editor and lists Trädgårdsgatan (2017) among the credited editing work."
    },
    {
      title: "Frida Hoas",
      publisher: "The Talent Group",
      url: "https://www.thetalentgroup.eu/production-designers/frida-hoas/",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "The production designer's professional filmography lists Trädgårdsgatan, directed by Olof Spaak for Primodrom Produktion, supporting Frida Hoas's production-design authorship of the film's rural and domestic environments."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
