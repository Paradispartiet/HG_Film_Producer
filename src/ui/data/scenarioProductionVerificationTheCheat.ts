import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theCheatProductionCaseVerification = {
  scenarioId: "scenario_the_cheat_1915",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "AFI, the Library of Congress, UCLA Film & Television Archive, The Film Foundation and MoMA support The Cheat as a 1915 Jesse L. Lasky Feature Play Company feature distributed by Paramount, directed by Cecil B. DeMille, written by Hector Turnbull and Jeanie Macpherson, photographed by Alvin Wyckoff and art-directed by Wilfred Buckland. The sources support its selective low-key visual style, elaborate interiors, Hayakawa's star-making restrained performance and the need to treat its anti-Asian sexual-threat construction critically rather than as neutral craft. AFI also documents the 1918 Paramount reissue that renamed and re-identified Hayakawa's character and identifies the Robert Israel score on the restored reissue print as a 1994 addition. The Production Case therefore teaches company style, star construction and version history while explicitly refusing to reproduce racialized coercion as a gameplay objective.",
  sources: [
    {
      title: "The Cheat — AFI Catalog",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Catalog/moviedetails/1815",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "AFI documents the Lasky production and Paramount distribution companies, DeMille, Turnbull, Macpherson, Wyckoff and Buckland credits, 1915 production/release dates, silent black-and-white five-reel properties, imported carved furniture, the 1916 Japanese American protest, the 1918 character re-identification and the 1994 Robert Israel score on the restored reissue print."
    },
    {
      title: "The Cheat (1915) — National Film Registry description",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "The Library of Congress characterizes the film as an early DeMille silent melodrama with elaborate production design and identifies Hayakawa's subtle, menacing performance as the work that made him a cinema star."
    },
    {
      title: "The Cheat / The Golden Chance",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/the-cheat-the-golden-chance-02-07-15/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "UCLA's archive program records The Cheat as a 59-minute 35mm black-and-white silent presentation and confirms the Lasky company, DeMille, Turnbull, Macpherson and Wyckoff production credits."
    },
    {
      title: "Out of the Vaults: Cecil B. deMille's The Cheat, 1915",
      publisher: "The Film Foundation",
      url: "https://www.film-foundation.org/hfpa-cheat",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The Film Foundation discusses the film's Rembrandt-like low-key illumination, silhouettes and shadows, Hayakawa's restrained screen performance, the racist construction surrounding his role, and restoration work rebuilding a 1915-oriented version from surviving reissue material."
    },
    {
      title: "D. W. Griffith's Competitors: Ince and DeMille",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/explore/inside_out/2009/12/01/d-w-griffiths-competitors-ince-and-demille/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "MoMA places The Cheat within DeMille's early visually distinctive work, notes its role in Hayakawa's ascent to stardom, and explicitly identifies its exploitation of racial-mixing taboo and racialized perversity/corruption."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
