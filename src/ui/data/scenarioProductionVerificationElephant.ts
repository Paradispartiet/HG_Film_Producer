import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const elephantProductionCaseVerification = {
  scenarioId: "scenario_elephant_2003",
  status: "verified",
  verifiedAt: "2026-07-25",
  summary: "The film's immediate post-Columbine context, HBO-backed Portland production, scriptless development with local students, real-school geography, repeated temporal structure, Harris Savides' long-take 35 mm photography, practical lighting, Gus Van Sant's editing, mobile MS stereo, Leslie Shatz sound design, musique concrète, Beethoven, Arvo Pärt and Cannes recognition are supported by ten inspectable institutional, filmmaker, technical and contemporary sources.",
  sources: [
    {
      title: "Elephant",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/elephant/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Cannes record identifies Gus Van Sant, Harris Savides, Gus Van Sant's editing, Leslie Shatz, HBO Films and the principal cast, and confirms the 2003 Palme d'Or and Best Director award."
    },
    {
      title: "Elephant",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/elephant",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI records the United States production, 81-minute feature, Van Sant screenplay and editing, Harris Savides cinematography, Dany Wolf production, HBO company credit and 35 mm 1.37:1 Academy Dolby Digital Stereo technical format."
    },
    {
      title: "Elephant",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/62714-ELEPHANT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The AFI Catalog provides the American production record and detailed creative and technical credits for Van Sant, HBO Films, Dany Wolf, Harris Savides, the student ensemble and the film's post-production departments."
    },
    {
      title: "Agitating the Information: Director Gus Van Sant on his Long-Take Columbine Drama, Elephant",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/105593-agitating-the-information-director-gus-van-sant-on-his-long-take-columbine-drama-elephant/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Van Sant explains the HBO origin, refusal of settled causes, 1.33 framing, Savides's long-take choreography, fast 500 ASA fine-grain stock, practical-light strategy, music discovered during filming, musique concrète and mobile MS stereo that preserved real school and camera sound."
    },
    {
      title: "Gus van Sant",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2009/jan/19/guardian-interview-gus-van-sant",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Van Sant describes the circular long takes, repeated events from different perspectives, HBO development, rejection of a formal screenplay and famous cast, and the influence of Alan Clarke and Béla Tarr."
    },
    {
      title: "Elephant: Interview with Gus Van Sant and Diane Keaton",
      publisher: "AboutFilm.com",
      url: "https://www.aboutfilm.com/features/elephant/feature.htm",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The 2003 production interview documents improvised dialogue, nonprofessional Portland students, the fly-on-the-wall approach, Diane Keaton's executive-producing role and the deliberate move away from standardized narrative filmmaking."
    },
    {
      title: "Elephant",
      publisher: "International Film Festival Rotterdam",
      url: "https://iffr.com/en/iffr/2007/films/elephant",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "IFFR documents the real school building, ordinary local school students, 35 mm format, repeated events from changing perspectives and a documentary feeling produced inside an openly fictional response to Columbine."
    },
    {
      title: "Gus Van Sant: Killers in the hallways",
      publisher: "The Independent",
      url: "https://www.independent.co.uk/arts-entertainment/films/features/gus-van-sant-killers-in-the-hallways-74878.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Van Sant connects the pacing to Béla Tarr and Chantal Akerman, explains abandoning the script after Gerry, developing characters from actual students and staging the final violence without conventional cinematic flourish."
    },
    {
      title: "CREW: Steve McQueen, Kelly Reichardt and Gus Van Sant Share a Secret Weapon—Sound Design by Leslie Shatz",
      publisher: "Fandor Keyframe",
      url: "https://keyframe.fandor.com/crew-leslie-shatz-sound-designer/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Sound designer Leslie Shatz places Elephant within his expressionistic Van Sant collaborations and explains his musique-concrète practice, whole-film sound arcs and movement between documentary recording and stylized mental sound."
    },
    {
      title: "Elephant: New film from Gus Van Sant explores school violence",
      publisher: "The Seattle Times",
      url: "https://archive.seattletimes.com/archive/20031104/elephant040/elephant-new-film-from-gus-van-sant-explores-school-violence",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The contemporary interview records HBO financing, Diane Keaton and Bill Robinson executive production, amateur Portland student casting, improvised dialogue, the 81-minute repeated-perspective structure and Van Sant's refusal of scapegoats or simple solutions."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
