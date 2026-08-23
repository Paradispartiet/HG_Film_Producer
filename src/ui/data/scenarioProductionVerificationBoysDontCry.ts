import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const boysDontCryProductionCaseVerification = {
  scenarioId: "scenario_boys_dont_cry_1999",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Boys Don't Cry is verified conservatively as a 1999 American independent biographical drama directed by Kimberly Peirce and written by Peirce with Andy Bienen. A contemporaneous Filmmaker Magazine interview with Peirce documents the film's central development and production methods: roughly five-and-a-half years of research including Nebraska fieldwork, interviews, trial attendance and extensive court records; rights and legal vetting of screenplay material; a lead-casting search lasting about three years; Hilary Swank's four-week voice/physical/behavioral preparation before production; detailed choreography of intimate scenes; extensive storyboarding that could be revised on set; close camera placement, dolly movement and Brandon-centered point-of-view choices; and seven audience screenings of roughly one hundred people each that informed structural editing. AFI credits producers Jeffrey Sharp, John Hart, Eva Kolodner and Christine Vachon, cinematographer Jim Denault, production designer Michael Shaw, editors Lee Percy and Tracy Granger, composer Nathan Larson, production companies Killer Films and Hart-Sharp Entertainment, and distributor Fox Searchlight Pictures. AFI lists 114 minutes while BFI lists 118 minutes, so runtime/version disagreement is preserved. Contemporary Los Angeles Times reporting says filming began in October 1998 in and around Dallas and places the budget below two million dollars; Yale film notes describe a five-week October-November shoot in and around Greenville, Texas, substituting for Nebraska. These establish a regional production substitution and approximate scale, not an exact final budget or complete schedule. Exact camera bodies, lenses, stocks, lighting package, microphones, edit hardware, laboratory/transfer path, shooting ratio, take counts, full location ledger and definitive cut genealogy remain unset where the reviewed sources do not establish them.",
  sources: [
    {
      title: "Girl Interrupted: Kimberly Peirce's Boys Don't Cry",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/archives/issues/fall1999/boys.php",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Contemporaneous interview with Peirce documenting long-form research, rights/legal vetting, three-year casting search, Swank's four-week preparation, choreography of intimate scenes, storyboards and visual references, close/dolly point-of-view choices and seven audience screenings used during editing."
    },
    {
      title: "Boys Don't Cry",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/60916-BOYS-DON%27T-CRY",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credit and release anchor: 1999 US feature, 114 minutes; Peirce direction, Peirce/Bienen writing; Sharp/Hart/Kolodner/Vachon producing; Denault photography; Shaw production design; Percy/Granger editing; Larson music; Killer Films/Hart-Sharp production; Fox Searchlight distribution."
    },
    {
      title: "Boys Don't Cry (1999)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/e0bd96fc-e1cd-56d7-bcd4-ff4d3e67d51b/boys-dont-cry",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional cross-check for director, producers, writers and principal cast; BFI lists 118 minutes, preserving a meaningful catalog/version discrepancy with AFI's 114-minute record."
    },
    {
      title: "When Looks Can Kill",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-1999-sep-12-ca-9492-story.html",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Contemporary pre-release reporting that filming began in October 1998 in and around Dallas, whose locations substituted for Falls City, and that the production budget was reported below two million dollars. Used as a bounded scale/location source, not an exact cost ledger."
    },
    {
      title: "Film Notes: BOYS DON'T CRY",
      publisher: "Yale University Library",
      url: "https://web.library.yale.edu/film/notes/fn00128",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "University film-history cross-check describing a five-week October-November 1998 shoot in and around Greenville, Texas, substituting for Nebraska, plus the extended research/development path."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
