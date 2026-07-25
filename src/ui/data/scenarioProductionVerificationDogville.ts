import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const dogvilleProductionCaseVerification = {
  scenarioId: "scenario_dogville_2003",
  status: "verified",
  verifiedAt: "2026-07-25",
  summary: "Dogville's post-Dogme theatrical abstraction, Denmark-led multinational production, chalk-plan town, ensemble mime, shared von Trier-Dod Mantle digital camera system, computer-controlled stage lighting, chaptered narration, sound-created invisible architecture, Baroque music and composited overhead views are supported by ten inspectable institutional, craft, production and performer sources.",
  sources: [
    {
      title: "Dogville",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/dogville/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The official Cannes record confirms the 2003 competition presentation and credits Lars von Trier for direction and screenplay, Anthony Dod Mantle for cinematography, Peter Grant for production design and Molly Malene Stensgaard for editing."
    },
    {
      title: "Dogville",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/dogville",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI documents the six-country production, Zentropa and producer Vibeke Windeløv, complete camera, design, costume, makeup, editing, sound, visual-effects, grading and music departments, and the film's Danish release and institutional record."
    },
    {
      title: "Dogville",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/dogville/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA records the multinational production and principal crew, the 2003 European Director award for Lars von Trier, the European Cinematographer award for Anthony Dod Mantle and nominations for film and screenplay."
    },
    {
      title: "The Road to Dogville",
      publisher: "Wired",
      url: "https://www.wired.com/2004/03/the-road-to-dogville/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Anthony Dod Mantle details the chalk-plan soundstage, sparse props, green-painted removable elements, hundreds of lights, thirteen suspended Sony mini-DV cameras, CineAlta overhead photography and compositing of coded camera streams into the town views."
    },
    {
      title: "900 Lights and a 50-Pound Lars-Cam",
      publisher: "The Village Voice",
      url: "https://www.villagevoice.com/900-lights-and-a-50-pound-lars-cam/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Mantle describes the single chalk-outlined stage, roughly nine hundred lights, suspended digital cameras, the shared division of camera operation and the heavy mobile Lars-cam used by von Trier for most of the performance coverage."
    },
    {
      title: "Director Can Call — and Film — the Shots",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-2004-apr-25-ca-right25-story.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The production feature documents the lightly dressed Depression-era stage, the specially designed high-definition camera system that gave von Trier maximum mobility and the intricate live dimmer controls used beside the stage."
    },
    {
      title: "A-list Meets Arthouse: When Megastar Actors Work for Auteurs",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/list-meets-arthouse-when-megastar-actors-work-auteurs",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "BFI identifies the unusually high-profile ensemble performing on white floor outlines with little physical scenery, and specifically notes that invisible doors are communicated through mime and sound effects."
    },
    {
      title: "Lars von Trier Behind the Curtain",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/culture/persons-of-interest/lars-von-trier-behind-the-curtain",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The filmmaker profile places Dogville after Dogme 95, identifies the bare soundstage as a Depression-era town and connects von Trier's self-imposed rules, theatrical suggestion and chaptered dialogue to his wider method of forcing new formal solutions."
    },
    {
      title: "Sound Makes the Picture",
      publisher: "Mix",
      url: "https://www.mixonline.com/sfp/sound-makes-picture-369136",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Kristian Eidnes Andersen discusses sound-design problems being conceived in the script and identifies Dogville within the von Trier collaboration in which designed sound must supply material, rhythm and space that the image deliberately withholds."
    },
    {
      title: "Nicole Kidman Will Never Forget Choking on Dogville Set with a Metal Dog Collar On",
      publisher: "People",
      url: "https://people.com/nicole-kidman-choking-movie-set-director-thought-acting-8747539",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Kidman recalls being drawn to von Trier's tape-on-the-floor concept, the cast living together during production and the physical reality of Grace's heavy metal collar, grounding the abstract stage in demanding ensemble and bodily performance."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
