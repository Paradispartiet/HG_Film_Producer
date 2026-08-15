import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theCrowdProductionCaseVerification = {
  scenarioId: "scenario_the_crowd_1928",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "AFI, the Library of Congress and the Academy support The Crowd as King Vidor's 1928 MGM/Loew's silent feature, written by Vidor and John V. A. Weaver, photographed by Henry Sharp, with settings credited to Cedric Gibbons and A. Arnold Gillespie and editing by Hugh Wynn. Institutional sources document concealed-camera New York exteriors, the celebrated movement from city scale into the vast office, and a production/release process in which multiple endings were previewed and two endings were made available to exhibitors. AFI also separates the 1928 black-and-white silent release from the 1981 Brownlow-Gill restoration with Carl Davis's new score. The Production Case therefore teaches large-studio organization, social realism, location/studio integration, continuity and version control without inventing an unsupported effects recipe or collapsing restoration history into original production.",
  sources: [
    {
      title: "The Crowd — AFI Catalog",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/3514-THE-CROWD",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI identifies MGM/Loew's production and distribution, Vidor and John V. A. Weaver's screenplay, Henry Sharp's photography, Cedric Gibbons and A. Arnold Gillespie's settings, Hugh Wynn's editing, André Ani's wardrobe, black-and-white silent 98-minute/nine-reel properties, concealed-camera New York work, multiple previewed endings, two exhibitor-selectable release endings, and the later 1981 restoration with Carl Davis score."
    },
    {
      title: "The Crowd (1928) — National Film Registry description",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The Library of Congress highlights Henry Sharp's dynamic interior cinematography, the move from skyscraper scale into the sea of office desks, concealed-camera New York/Coney Island exteriors, the Vidor-Weaver screenplay and Boardman/Murray's naturalistic performances."
    },
    {
      title: "The 1st Academy Awards — 1929",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1929",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy records The Crowd as a nominee for Unique and Artistic Picture and King Vidor as a nominee for Directing (Dramatic Picture), supporting its contemporary institutional recognition without turning awards into production evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
