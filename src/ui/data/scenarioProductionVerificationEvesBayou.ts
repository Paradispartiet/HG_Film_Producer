import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const evesBayouProductionCaseVerification = {
  scenarioId: "scenario_eves_bayou_1997",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Eve's Bayou is verified conservatively as Kasi Lemmons' 1997 American feature-directing debut and a major Black independent production centered on a Louisiana family in 1962. The production case keeps claims at the level supported by stable credit/catalog and preservation records: Lemmons wrote and directed; Amy Vincent is credited for cinematography; Terilyn A. Shropshire for editing; Terence Blanchard for music; and producer credits include Caldecot Chubb and Samuel L. Jackson. The film's value to Chapter 17 is industrial as well as thematic: it expands the decade's Black-cinema history beyond urban male-centered narratives through Black woman-led authorship and regional Louisiana production. Gameplay models Eve Batiste's child-centered point of view, contradictory recollection, family testimony and visions as separate information layers and never assumes that an image is objective merely because it is visualized. The 1962 Louisiana world is treated as a coordinated location/design/costume/prop/performance problem, but no exact parish schedule, location count, build list or production calendar is invented. Amy Vincent's cinematography credit justifies craft analysis of framing, movement, exposure, color and point of view, not unsupported claims about lenses, stocks, filters, camera bodies, lighting ratios or laboratory timing. Shropshire's editorial credit supports modeling present action, recollection, competing accounts and visions as an editorial architecture. Blanchard's music remains distinct from dialogue, atmosphere and silence, with no invented recording or mix hardware. Gameplay uses 109 minutes for the 1997 theatrical case. Later director's-cut/restoration and home-video presentations are downstream version history, while the Library of Congress National Film Registry listing is used only as later preservation/canonization evidence. Exact budget, financing split, shoot length, daily page count, child-performance method and effects technique remain unset where the reviewed sources do not establish them.",
  sources: [
    {
      title: "Complete National Film Registry Listing — Eve's Bayou (1997)",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Authoritative preservation listing confirming Eve's Bayou as a 1997 film later selected for National Film Registry preservation. Used for date and downstream legacy only, not to infer original camera or sound technique."
    },
    {
      title: "Eve's Bayou (1997) — title and credit record",
      publisher: "IMDb",
      url: "https://www.imdb.com/title/tt0119080/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Supporting credit/catalog record for Kasi Lemmons, Amy Vincent, Terilyn A. Shropshire, Terence Blanchard and the 1997 feature identity. Technical equipment details are not inferred from the catalog."
    },
    {
      title: "Eve's Bayou",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Eve%27s_Bayou",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Secondary cross-check for principal credits, 109-minute theatrical runtime, Louisiana/1962 setting and producer credits. It is not used as authority for unsupported production-process detail."
    },
    {
      title: "Eve's Bayou — edition and restoration search record",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/search#stq=Eve%27s%20Bayou",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Used only to keep later restoration/director's-cut presentation history downstream from the 1997 theatrical production case. Later mastering is not projected backward onto the original image or sound pipeline."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
