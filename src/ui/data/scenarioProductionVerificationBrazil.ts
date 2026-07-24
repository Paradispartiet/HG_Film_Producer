import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const brazilVerificationRecords = [
  {
    scenarioId: "scenario_brazil_1985",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The retro-futurist bureaucracy, collaborative design process, industrial and built locations, 1.85:1 photography, optical and model effects, transformed Brazil theme and contested release versions are supported by BFI, Criterion, production-designer and composer records.",
    sources: [
      {
        title: "Brazil",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/211-brazil",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The director-approved edition records the 143-minute 1.85:1 color presentation, principal writing and craft credits, production design, costume, effects, score and the existence of the studio's ninety-four-minute happy-ending version."
      },
      {
        title: "Brazil (1985)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/bb840dfa-f69d-576b-bd99-dfa28efd4595/brazil",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "BFI identifies the Orwell-Fellini-Kafka lineage, Norman Garwood's retro-futuristic production design, the bureaucratic satire, Gilliam's battle with Universal and the film's later influence on cinematic dystopias."
      },
      {
        title: "Capturing A Brazil Look: An Interview With Production Designer Norman Garwood",
        publisher: "Wide Angle / Closeup",
        url: "https://wideanglecloseup.com/garwood.html",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Garwood details the 1930s and Art Deco research, collaborative design with Gilliam and Acheson, duct systems, color coding, built ministry interiors, industrial locations, forced perspective and early coordination with cinematographer Roger Pratt."
      },
      {
        title: "Brazil",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/current/posts/59-brazil",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing"],
        note: "The historical essay documents Universal's demand for a more accessible version, the clandestine screenings, Los Angeles critics' awards, eventual US release and Academy nominations for screenplay and production design."
      },
      {
        title: "Brazil (1985)",
        publisher: "Michael Kamen Official Website",
        url: "https://www.michaelkamen.com/catalogue/brazil",
        sourceKind: "archive_feature",
        supports: ["overall", "sound"],
        note: "The composer's archive documents Kamen's composing, orchestration, conducting and score production, the National Philharmonic sessions at Abbey Road, Kate Bush's vocal and the cue structure built around Ary Barroso's Brazil."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
