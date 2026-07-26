import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const kitchenStoriesProductionCaseVerification = {
  scenarioId: "scenario_kitchen_stories_2003",
  status: "verified",
  verifiedAt: "2026-07-26",
  summary: "The film's basis in Swedish postwar home research, Norwegian-Swedish coproduction, rule-driven observer screenplay, restrained veteran performances, Billy Johansson period design, Philip Øgaard 35 mm photography, Pål Gengenbach editing, sparse practical sound, Hans Mathisen music and international festival recognition are supported by ten inspectable institutional, archival, festival and contemporary sources.",
  sources: [
    {
      title: "Salmer fra kjøkkenet",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/salmer-fra-kokkenet",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The institutional record verifies the Norwegian production, Bent Hamer direction and screenplay, principal cast, Philip Øgaard cinematography, Pål Gengenbach editing, Hans Mathisen music and the production companies behind the film."
    },
    {
      title: "Kitchen Stories",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/kitchen-stories/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA records the 2003 feature selection and credits Hamer and Jörgen Bergmark, cinematographer Philip Øgaard, editor Pål Gengenbach, production designer Billy Johansson, costume designer Karen Fabritius Gram, makeup artist Eva Rygh and composer Hans Mathisen."
    },
    {
      title: "Salmer fra kjøkkenet",
      publisher: "Quinzaine des cinéastes",
      url: "https://www.quinzaine-cineastes.fr/en/film/salmer-fra-kjokkenet",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The Directors' Fortnight archive records the 2003 Cannes selection, BulBul Film and Bob Film coproduction, international sales context and the FIPRESCI and European Distribution recognition associated with the film."
    },
    {
      title: "Fortnight - Kitchen Stories",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/29924/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The contemporaneous industry report documents the postwar kitchen-research premise, minimalist Scandinavian interiors, snowbound rural setting, DKK 18.6 million budget and Norwegian-Swedish public and broadcasting coproduction structure."
    },
    {
      title: "Salmer fra kjøkkenet",
      publisher: "Nasjonalbiblioteket",
      url: "https://www.nb.no/filmografi/show?id=796702",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Norwegian filmography preserves the original synopsis and detailed national credits for Bent Hamer, Jörgen Bergmark, Philip Øgaard, Hans Mathisen and the production departments, grounding the film in Norwegian film history."
    },
    {
      title: "Salmer fra kjøkkenet",
      publisher: "Cinemateket",
      url: "https://www.cinemateket.no/filmer/salmer-fra-kjokkenet",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Cinemateket explains the postwar kitchen-efficiency context, the observation rules and the 18 field researchers, and records the 35 mm, 1.85:1 presentation used for the film's controlled kitchen geography."
    },
    {
      title: "Household utensils",
      publisher: "Nationalmuseum",
      url: "https://collection.nationalmuseum.se/en/collection/item/213171/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The museum collection documents that Hemmens forskningsinstitut was founded in 1944 to rationalize domestic work through scientific methods, verifying the functionalist home-research history that the screenplay turns into satire."
    },
    {
      title: "Delicately put and yet awfully fun",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-2004-feb-20-et-kenny20-story.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The contemporary review identifies the carefully modulated veteran performances and Billy Johansson's controlled color scheme, supporting the film's precise deadpan relationship among acting, design and comic timing."
    },
    {
      title: "Long day's journey to the fridge",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2003/may/20/artsfeatures.cannes2003",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "The Cannes report describes the caravan procession, time-and-motion experiment and Hamer's restrained absurdity as the film reached international audiences through Directors' Fortnight."
    },
    {
      title: "Kitchen Stories, Bent Hamer",
      publisher: "Festival La Rochelle Cinéma",
      url: "https://festival-larochelle.org/film/kitchen-stories/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The festival catalog verifies Philip Øgaard's image, Pål Gengenbach's editing, Billy Johansson's sets, Hans Mathisen's music and Morten Solum and Petter Fladeby's sound credits, completing the craft record."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
