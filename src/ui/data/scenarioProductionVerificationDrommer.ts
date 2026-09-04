import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const drommerProductionCaseVerification = {
  scenarioId: "scenario_drommer_2024",
  status: "verified",
  verifiedAt: "2026-09-04",
  summary: "Drømmer is verified as a 2024 Norwegian Chapter 19 festival-priority Production Case. NFI locks Haugerud, Motlys, producers Yngve Sæther and Hege Hauff Hvattum, 4 October 2024 Norwegian premiere, 110-minute runtime and NOK 6.35m production support. Berlinale separately locks the 2025 Golden Bear, awarded to the producers, so award year cannot overwrite film year. Rushprint directly documents cinematographer Cecilie Semec and editor Jens Christian Fodstad as recurring collaborators across the three-film 2024 trilogy and describes the compressed calendar, precise communication and deliberate visual differentiation. Karlovy Vary independently credits Semec, Fodstad, Tuva Hølmebakk, Yvonne Stenberg, Gisle Tveito, Anna Berg, Motlys and Oslo Filmfond. Total budget/recoupment, exact shoot schedule, camera/lens/lighting/data package, complete art/costume/makeup ledgers, effects/VFX census, edit infrastructure, full audio chain and music ledger remain unresolved.",
  sources: [
    {
      title: "Drømmer",
      publisher: "Norwegian Film Institute",
      url: "https://www.nfi.no/filmer-og-serier/drommer",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "NFI film record supporting director/writer, Motlys, producers, 4 October 2024 premiere, 110-minute runtime and the documented production-support record."
    },
    {
      title: "Golden Bear for Dag Johan Haugerud's Drømmer in Berlin",
      publisher: "Norwegian Film Institute",
      url: "https://www.nfi.no/nyheter/gullbjoern-til-dag-johan-haugeruds-droemmer-i-berlin",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "NFI separates the 2025 Berlin award event from the film's 2024 Norwegian premiere and records NOK 6.35m production support."
    },
    {
      title: "International Jury 2025 – Golden Bear for Best Film",
      publisher: "Berlin International Film Festival",
      url: "https://www.berlinale.de/en/archive/awards-juries/awards.html",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official Berlinale archive awarding the 2025 Golden Bear for Best Film to Drømmer and naming producers Yngve Sæther and Hege Hauff Hvattum."
    },
    {
      title: "Filmsamtalen med Cecilie Semec og Jens Christian Fodstad",
      publisher: "Rushprint",
      url: "https://rushprint.no/2025/04/filmsamtalen-med-cecilie-semec-og-jens-christian-fodstad/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct craft conversation supporting Semec/Fodstad's roles across Sex, Drømmer and Kjærlighet, the three-film calendar, precise communication, open collaboration and deliberately different visual approaches."
    },
    {
      title: "Dreams",
      publisher: "Karlovy Vary International Film Festival",
      url: "https://www.kviff.com/en/programme/film/75/45946-dreams",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Festival record supporting Norway 2024, 110 minutes and credits for Semec, Fodstad, Anna Berg, Yvonne Stenberg, Gisle Tveito, Tuva Hølmebakk, the producers, Motlys and Oslo Filmfond."
    },
    {
      title: "Analysen: Drømmer (2024)",
      publisher: "Montages",
      url: "https://montages.no/2024/11/analysen-drommer-2024/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Close formal analysis supporting the first-person voice-over, close-up emphasis and comparatively guiding editorial form; not used to infer undocumented equipment or schedule."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
