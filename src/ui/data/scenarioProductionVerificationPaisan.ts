import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const paisanProductionCaseVerification = {
  scenarioId: "scenario_paisan_1946",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "Criterion, BFI, MoMA and CSC support Paisan as a six-episode postwar Italian production moving from Sicily to the Po Valley through location work, a mixed cast of actors and nonprofessionals, multilingual Allied-Italian encounters and deliberately constructed postproduction realism. Criterion credits Roberto Rossellini as director and producer with Rod Geiger participating in production; Sergio Amidei on story with Federico Fellini, Geiger, Alfred Hayes, Klaus Mann, Marcello Pagliero and Rossellini collaborating; Otello Martelli as cinematographer; Eraldo Da Roma as editor; Ovidio Del Grande on sound; Renzo Rossellini on music; and Massimo Mida and Fellini as assistant directors. Colin MacCabe's Criterion production history records that Rome Open City's success allowed a budget around ten times larger with American money, that Rossellini revised stories in response to people and locations encountered during production, that the Naples caves at Mergellina caused him to abandon an earlier Naples storyline, that the untrained fifteen-year-old playing Carmela came from a Neapolitan village and had to be dubbed because her speech could not pass for Sicilian, and that a monastery near Salerno stood in for the northern monastery setting while the friars' Neapolitan speech was dubbed into Romagnolo. BFI independently describes the film as six liberation encounters shot on location with nonprofessionals alongside actors. MoMA characterizes Rossellini's postwar method through actuality, location shooting and everyday people alongside professionals. CSC documents Paisan inside Progetto Rossellini and the restored film's 2013 Venice presentation, supporting a distinct preservation/version layer. The case therefore treats realism as organized production rather than raw transcription and does not invent exact camera bodies, lenses, stocks, microphones, shooting dates, vehicle rigs or a uniform synchronous-sound workflow where the sources do not establish them.",
  sources: [
    {
      title: "Paisan (1946)",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/2415-paisan",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion verifies the six-episode liberation structure, mixed actor/nonprofessional cast, multilingual release form and principal production credits: Rossellini/Geiger, Amidei and collaborators, Martelli, Da Roma, Del Grande, Renzo Rossellini, Mida and Fellini."
    },
    {
      title: "Paisan: More Real Than Real",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/1357-paisan-more-real-than-real",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Colin MacCabe documents the larger post-Rome Open City financing base, nonprofessional casting, Carmela's dubbing, monastery-location substitution and dialect dubbing, Mergellina caves changing the Naples story, and Rossellini's fiction/documentary intermixture."
    },
    {
      title: "Paisan (1946)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/f6d498b8-db58-51bf-9da2-21afb1145ebf/paisan",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI independently confirms six encounters following liberation from Sicily to the Po Valley, location shooting, a nonprofessional cast alongside actors and Rossellini/Geiger production credits."
    },
    {
      title: "Roberto Rossellini",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/film/489",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "MoMA places Paisan among Rossellini's central neorealist works and characterizes his postwar actuality through location shooting and everyday people alongside professional actors, supporting the chapter's crafted-realism comparison."
    },
    {
      title: "La Cineteca Nazionale presenta a Venezia, nella sezione Venezia Classici, quattro restauri",
      publisher: "CSC – Cineteca Nazionale",
      url: "https://www.fondazionecsc.it/la-cineteca-nazionale-presenta-a-venezia-nella-sezione-venezia-classici-quattro-restauri-2/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "CSC documents Paisan's restoration within Progetto Rossellini, involving Cineteca Nazionale, Cineteca di Bologna, Cinecittà Luce and Coproduction Office, and its 2013 Venezia Classici presentation. Restoration is kept separate from original production evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
