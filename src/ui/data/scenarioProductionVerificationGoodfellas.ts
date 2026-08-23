import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const goodfellasProductionCaseVerification = {
  scenarioId: "scenario_goodfellas_1990",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Goodfellas is verified conservatively as a 1990 American studio-auteur gangster production directed by Martin Scorsese, written by Nicholas Pileggi and Scorsese from Pileggi's Wiseguy, produced by Irwin Winkler, photographed by Michael Ballhaus and edited by Thelma Schoonmaker. AFI supplies the principal credits, the Irwin Winkler Productions/Warner Bros. production framework, Warner Bros. distribution, a spring-summer 1989 New York-area location record, specific Copacabana production-design/camera-route evidence, sound credits, an Arriflex camera-and-lenses credit, selected-theatre Dolby Stereo SR presentation, ratings/preview history and a 146-minute duration. The American Society of Cinematographers' Ballhaus retrospective documents Goodfellas-specific visual choices including wide/long focal-length extremes, high angles, harsh/direct lighting, rich color and darkness; it also documents Ballhaus, Steadicam operator Larry McConkey and assistant director Joe Reidy blocking the approximately three-minute Copacabana shot with Scorsese, whose recollection was about twelve takes, and Ballhaus's dolly/zoom idea for the diner turning point. BFI lists 145 minutes, so the 145/146-minute institutional discrepancy is preserved rather than flattened. The Library of Congress later describes the pop-song soundtrack as a cohesive thread across the film's decades and records the film's National Film Registry status; this is used for music/reception context, not projected backward into unsupported production detail. Exact final budget, complete daily schedule, exhaustive location ledger, exact Arriflex bodies, lens models, film stocks, filtration/exposure settings, edit hardware, music-clearance terms, full cue chronology, production-sound hardware, track topology, lab path and definitive cut genealogy remain unset where the reviewed sources do not establish them.",
  sources: [
    {
      title: "Goodfellas",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/55206-GOODFELLAS",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional production-history and credit anchor for Scorsese, Pileggi, Winkler, Ballhaus, Schoonmaker, Zea, Warner Bros., New York-area 1989 production, Copacabana location alteration/tracking shot, sound personnel, Arriflex credit, selected-theatre Dolby Stereo SR, ratings/preview history and 146-minute duration."
    },
    {
      title: "In Memoriam: Michael Ballhaus, ASC, BVK (1935-2017)",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/news/in-memoriam-michael-ballhaus-asc-1935-2017/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC craft retrospective preserving Ballhaus's Goodfellas-specific account of focal-length extremes, high angles, harsh/direct lighting, rich color/darkness, the approximately three-minute Copacabana Steadicam choreography with Larry McConkey and Joe Reidy, Scorsese's '12 takes or so' recollection, and the diner dolly/zoom."
    },
    {
      title: "GoodFellas (1990)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/b573c997-0970-5531-8f89-b193e2f8b143/goodfellas",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional cross-check for 1990 US feature, Scorsese direction, Winkler production, Pileggi/Scorsese writing and a 145-minute runtime, preserving a one-minute discrepancy with AFI's 146-minute record."
    },
    {
      title: "Goodfellas (1990) — National Film Registry description",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Preservation/reception source describing the true-life mob-informant basis and the pop-song soundtrack as a cohesive thread across the decades; National Film Registry status is kept downstream from original production evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
