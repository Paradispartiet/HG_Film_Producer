import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aSomewhatGentleManProductionCaseVerification = {
  scenarioId: "scenario_a_somewhat_gentle_man_2010",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's collaborative Kim Fupz Aakeson adaptation, compact low-budget Oslo production, Nordic ensemble, Philip Øgaard photography, Gert Wibe design, Jens Christian Fodstad editing, Halfdan E music and Berlinale context are supported by four inspectable institutional and filmmaker sources.",
  sources: [
    {
      title: "A somewhat gentle man",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/en-ganske-rar-mand",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI records Hans Petter Moland, Kim Fupz Aakeson, Paradox, producers Finn Gjerdrum and Stein B. Kvae, Philip Øgaard, Jens Christian Fodstad, Gert Wibe, Halfdan E and the principal cast."
    },
    {
      title: "Hans Petter Moland — Director",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/138831/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Moland explains the roughly two-million-euro scale, short schedule, Nordic ensemble, collaborative revision of Aakeson's script and the way locations and actors continued the writing process."
    },
    {
      title: "Hans Petter Moland: An Extremely Funny Gentleman",
      publisher: "Nordisk Film & TV Fond",
      url: "https://nordiskfilmogtvfond.com/news/stories/hans-petter-moland-an-extremely-funny-gentleman",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The director describes a moderate budget, concentrated Oslo geography, the old-factory production base and the established ensemble atmosphere used to protect performance and tone."
    },
    {
      title: "Hans Petter Moland, A Somewhat Gentle Man",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/18391-hans-peter-moland-a-somewhat-gentle-man/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Moland discusses the low-budget short-schedule production, Stellan Skarsgård's restrained performance, ageing dignity, crime-comedy balance and the film's deliberately understated title and tone."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const trollHunterProductionCaseVerification = {
  scenarioId: "scenario_troll_hunter_2010",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's found-footage folklore screenplay, western-Norway locations, Filmkameratene production, Hallvard Bræin photography, Per-Erik Eriksen editing, deadpan documentary performance and Storm Studios creature pipeline are supported by four inspectable location, trade and filmmaker sources.",
  sources: [
    {
      title: "Troll Hunter — Film Locations",
      publisher: "Western Norway Film Commission",
      url: "https://www.wnfc.no/filmography/troll-hunter",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The regional film commission records the Filmkameratene production, Volda, Sogndal and Årdal locations, found-footage mockumentary premise, folklore basis and international cult legacy."
    },
    {
      title: "Troll Hunter (Trolljegeren)",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/193926/en/newsdetail/484027/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cineuropa documents André Øvredal, producers John M. Jacobsen and Sveinung Golimo, Hallvard Bræin, Per-Erik Eriksen, Stina Lunde, Johan Husvik and the Norwegian production partners."
    },
    {
      title: "Myth Buffer: With Trollhunter, André Øvredal Modernizes Fairy Tales",
      publisher: "Wired",
      url: "https://www.wired.com/2011/06/trollhunter-andre-ovredal/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Øvredal explains repeated rewrites, the producer-suggested government conspiracy, folklore rules, documentary humour, practical realism, the 3.5-million-dollar budget and roughly one million dollars of CGI."
    },
    {
      title: "Troll Hunter — Storm Studios",
      publisher: "Maxon",
      url: "https://www.maxon.net/en/article/troll-hunter-storm-studios",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The effects case study documents Storm Studios' creature modeling, grooming, animation, lighting, compositing and environmental integration for multiple troll species inside handheld location photography."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const detachmentProductionCaseVerification = {
  scenarioId: "scenario_detachment_2011",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's ex-teacher screenplay, Adrien Brody-centred reinterpretation, truthful and improvised ensemble method, Tony Kaye cinematography, Barry Alexander Brown and Geoffrey Richman editing, Jade Healy design and festival legacy are supported by five inspectable sources from four publishers.",
  sources: [
    {
      title: "Be Original, Kill Your Ego, and Pray",
      publisher: "Tribeca",
      url: "https://tribecafilm.com/news/512c15881c7d76d9a900091c-be-original-kill-your-ego",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Kaye identifies Carl Lund as an ex-teacher, explains re-centring the material around Brody, truthful performance, open casting, structured improvisation and editing as the final rewrite."
    },
    {
      title: "Detachment — 2011 Tribeca Festival",
      publisher: "Tribeca",
      url: "https://tribecafilm.com/festival/archive/detachment",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The festival archive records Tony Kaye as director and cinematographer, Carl Lund, producers, editors Barry Alexander Brown and Geoffrey Richman, production designer Jade Healy and Adrien Brody as executive producer."
    },
    {
      title: "Adrien Brody on Detachment",
      publisher: "Vanity Fair",
      url: "https://www.vanityfair.com/hollywood/2012/03/adrien-brody-detachment-tony-kaye-woody-allen-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Brody connects his performance to his teacher father and public-school upbringing, describes the social purpose of the project, Kaye's spontaneous visual method and his own producing role."
    },
    {
      title: "Tony Kaye: I hope I'm having a moment now",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2012/jul/06/detachment-tony-kaye-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Kaye describes stripped-to-the-bone cinematography, letting actors act freely and positioning the camera in response, while placing Detachment after his documentary and commercial work."
    },
    {
      title: "2011 — Festival du Cinéma Américain de Deauville",
      publisher: "Festival du Cinéma Américain de Deauville",
      url: "https://www.festival-deauville.com/en/history/2011/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official festival history records Detachment as the winner of both the Cartier Revelation Prize and the international critics prize in the 2011 competition."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const hugoProductionCaseVerification = {
  scenarioId: "scenario_hugo_2011",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's Selznick adaptation, Méliès history, GK Films-led international production, Dante Ferretti design, Sandy Powell costume, Robert Richardson native-3D photography, Thelma Schoonmaker editing, sound, music and visual effects are supported by four inspectable institutional and craft sources.",
  sources: [
    {
      title: "Hugo",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/hugo",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI records the US-UK-French production, Scorsese, John Logan, Brian Selznick, Robert Richardson, Thelma Schoonmaker, Dante Ferretti, Sandy Powell, Howard Shore and the principal cast."
    },
    {
      title: "A 3-D Journey Back to the Future: Behind Robert Richardson's Work on Hugo",
      publisher: "MovieMaker Magazine",
      url: "https://www.moviemaker.com/hugo-robert-richardson/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Richardson explains paired-camera native 3D rather than conversion, live stereoscopic monitoring, Autochrome references, depth planning and the integration of Ferretti's sets and Powell's costumes into the image."
    },
    {
      title: "The 84th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2012",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The Academy records Hugo's five wins for cinematography, art direction, sound editing, sound mixing and visual effects, alongside its picture, direction, screenplay, costume, editing and score nominations."
    },
    {
      title: "With Hugo, Martin Scorsese Makes a Masterful 3-D Movie for the Ages",
      publisher: "Wired",
      url: "https://www.wired.com/2011/11/hugo-review/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The production feature connects Scorsese, Logan, Ferretti and Richardson to the 1930s Paris clockwork world, Méliès recovery, stereoscopic spectacle and cinema-history structure."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const nextFour2010_2011VerificationRecords = [
  aSomewhatGentleManProductionCaseVerification,
  trollHunterProductionCaseVerification,
  detachmentProductionCaseVerification,
  hugoProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
