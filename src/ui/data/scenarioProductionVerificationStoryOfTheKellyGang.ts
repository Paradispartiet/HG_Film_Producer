import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const storyOfTheKellyGangProductionCaseVerification = {
  scenarioId: "scenario_the_story_of_the_kelly_gang_1906",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "NFSA, UNESCO and BFI evidence supports The Story of the Kelly Gang as a 1906 Charles Tait Australian production made at feature-length scale, chiefly using locations outside Melbourne and circulating as a major commercial attraction. NFSA preservation records describe an original length of roughly 4000 feet on five reels and lecturer/live-effects exhibition practice, while only fragments of the original survive. The Production Case therefore verifies multi-reel scale, location production, producer-exhibitor organization, touring/exhibition practice and fragmentary preservation without claiming that the surviving restoration is complete or that a single film invented feature cinema.",
  sources: [
    {
      title: "The Story of the Kelly Gang",
      publisher: "National Film and Sound Archive of Australia (NFSA)",
      url: "https://www.nfsa.gov.au/stories/articles/story-kelly-gang",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "NFSA documents the Boxing Day 1906 Melbourne opening, the over-hour Australian production, commercial/touring success, loss of complete prints and the 2006 reconstruction of nearly a quarter of the film. This source anchors feature scale and preservation boundaries rather than an intact-film claim."
    },
    {
      title: "THE STORY OF THE KELLY GANG [1906] : [PORDENONE RESTORATION] - TITLE VERSION",
      publisher: "NFSA Pro",
      url: "https://pro.nfsa.gov.au/titles/RSKFBH59",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "NFSA Pro records that the film was chiefly shot on the Veitch family estate at Heidelberg, that the original presentation used an onstage lecturer with behind-the-scenes sound effects, and that the original was about 4000 feet on five reels. It also explicitly labels the surviving material incomplete."
    },
    {
      title: "The Story of the Kelly Gang (1906) – Memory of the World",
      publisher: "UNESCO Memory of the World",
      url: "https://www.unesco.org/en/memory-world/story-kelly-gang-1906",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "UNESCO identifies Charles Tait as director, describes the original as more than one hour and treats the surviving fragments and publicity material as documentary heritage associated with the emergence of the feature-film format. The Production Case keeps that landmark status while avoiding a universal lone-inventor narrative."
    },
    {
      title: "The Story of the Kelly Gang (1906)",
      publisher: "British Film Institute (BFI)",
      url: "https://www.bfi.org.uk/film/e8572cbd-21d7-593c-9ca5-7364ea3fc6e6/the-story-of-the-kelly-gang",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI independently identifies the 1906 Australian film and Charles Tait as director. It is used as a separate institutional identity check, not as evidence for details the record does not supply."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
