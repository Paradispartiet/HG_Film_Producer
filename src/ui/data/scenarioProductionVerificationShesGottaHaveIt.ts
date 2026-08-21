import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const shesGottaHaveItProductionCaseVerification = {
  scenarioId: "scenario_shes_gotta_have_it_1986",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "She's Gotta Have It is verified as a Forty Acres and a Mule Filmworks Brooklyn microbudget production shaped by a failed earlier financing attempt, transferred and credited grant support, a twelve-day shoot, Super 16mm black-and-white origination with one color sequence, concentrated family/friend labor, and later fundraising for a 35mm blow-up after festival acceptance. AFI traces the project to the collapse of Spike Lee's planned 1984 Messenger feature, records an $18,000 New York State Council on the Arts grant transferred to the new project, identifies additional funding acknowledgements, cites a $175,000 budget, and documents the Super 16-to-35mm path. AFI also states that the film was shot entirely in Brooklyn, naming Fort Greene, Bedford-Stuyvesant, Brooklyn Heights, Downtown Brooklyn and Crown Heights, and records that Lee used a non-union crew without permits or insurance. Those production conditions are retained only as historical risk evidence and are explicitly not treated as a contemporary recommendation. Ernest Dickerson is cinematographer, Wynn Thomas production designer, John Michael Reefer costume designer, Spike Lee editor, Barry Alexander Brown sound designer and Bill Lee composer; production recording, boom, Foley, ADR, effects editorial and mixing roles are separately credited. BFI independently records the film as Lee's 1986 feature debut and describes the black-and-white feature with a single color dance sequence, a $175,000 budget and Brooklyn production. Criterion identifies Dickerson's visual contribution and the low-budget ingenuity of the finished film. The Library of Congress records the film's 2019 National Film Registry selection. The case does not invent camera body, lens series, stock emulsion, focal lengths, exposure ratios, lighting recipes, recorder, microphone, mix console, laboratory recipe, exact daily call sheets, permit logistics or individual compensation terms.",
  sources: [
    {
      title: "She's Gotta Have It",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/57471-SHES-GOTTAHAVEIT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents the failed Messenger financing, transferred NYSCA grant, other funding acknowledgements, twelve-day/$175,000 production, Super 16 black-and-white origination with one color sequence, 35mm blow-up, Brooklyn locations, non-union/unpermitted/uninsured conditions, principal craft credits, sound-department separation, Island Pictures distribution, ratings revisions and release history."
    },
    {
      title: "Where to begin with Spike Lee",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/where-begin-with-spike-lee",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI independently characterizes the feature as predominantly black and white with one color dance sequence, made on a $175,000 budget and filmed in Brooklyn, and places it within Black American independent cinema."
    },
    {
      title: "She's Gotta Have It",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/926-she-s-gotta-have-it",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Criterion's historical essay identifies the $175,000 final cost including post-production, describes the low-budget production mode, and credits Ernest Dickerson's visual contribution while situating the film within independent Black cinema."
    },
    {
      title: "Brief Descriptions and Expanded Essays of National Film Registry Titles",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Library of Congress records She's Gotta Have It as a National Film Registry title and identifies it as a landmark early expression of Spike Lee's independent filmmaking voice; this supports preservation/reception history, not undocumented production technique."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
