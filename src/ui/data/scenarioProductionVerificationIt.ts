import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const itProductionCaseVerification = {
  scenarioId: "scenario_it_1927",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "AFI, the Library of Congress and UCLA Film & Television Archive support It as a 1927 Paramount Famous Lasky star vehicle produced within Paramount's coordinated Glyn adaptation/publicity strategy. AFI credits Hope Loring and Louis D. Lighton for scenario, Elinor Glyn for adaptation, Clarence Badger for direction, Josef von Sternberg for additional direction during Badger's illness, H. Kinley Martin for photography and E. Lloyd Sheldon for editing, and documents Paramount production/distribution and the Glyn media arrangement. The Library of Congress explicitly describes Paramount's effort to capitalize on Glyn's popularity and Bow's promoted embodiment of 'It,' while UCLA confirms the 72-minute 35mm black-and-white silent presentation and core craft credits. The Production Case therefore teaches star construction as media, performance and studio coordination while refusing to turn period publicity objectification into an appearance-scoring mechanic.",
  sources: [
    {
      title: "It — AFI Catalog",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/9977-IT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents Paramount Famous Lasky production and Paramount distribution, the Glyn adaptation deal and Hearst/Cosmopolitan publication context, Loring/Lighton/Glyn/Marion writing credits, Badger/von Sternberg/Keays direction credits, H. Kinley Martin photography, E. Lloyd Sheldon editing, the late-1926 production history and 72-minute 1927 release."
    },
    {
      title: "It (1927) — National Film Registry description",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The Library of Congress describes Glyn's Cosmopolitan concept, Paramount's decision to capitalize on her popularity, the publicity claim that Bow personified 'It,' and Bow's central star presence, supporting the case's media-and-star-system framing."
    },
    {
      title: "It / Children of Divorce",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/it-1927-children-of-divorce-1927-01-11-13/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "UCLA identifies It as a 1927, 72-minute, 35mm, black-and-white silent film and confirms Famous Players-Lasky, Clarence Badger, Loring/Lighton, H. Kinley Martin and E. Lloyd Sheldon credits while presenting Bow's role as a defining star vehicle."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
