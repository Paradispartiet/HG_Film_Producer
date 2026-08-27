import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const coldWarProductionCaseVerification = {
  scenarioId: "scenario_cold_war_2018",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Cold War / Zimna wojna is verified as a 2018 Chapter 18 Production Case in which an elliptical fourteen-year romance, music-led historical structure, Polish/French/UK co-production, long location preparation and a digital-to-monochrome pipeline operate as one production system. BFI anchors a 90-minute catalogue version, while BFI Sight and Sound and Cannes carry shorter timings that remain version/festival metadata. Opus Film and Film4 document the transnational production network and key department credits. Paweł Pawlikowski describes music as a third character and an anti-biopic, repeatedly rewritten structure. Łukasz Żal's title-specific ASC/Codex accounts document six months of prep, roughly thirty recce days, a January-to-August 2017 calendar with breaks, practical Poland/Croatia/Paris production and Paris-interior substitution, side-by-side 35mm/ALEXA testing, ARRI ALEXA XT with Codex ARRIRAW 3.4K Open Gate/XR capture, color acquisition monitored in monochrome and desaturated in post, Academy/4:3 composition, Ultra Prime and documented zoom use, a majority 32mm strategy, Poland-versus-Paris lens/depth changes, mostly single-camera operation with two cameras for Mazurek performance material, and a shot-specific East/West Berlin construction with substantial post generation. Jarosław Kamiński's editorial role, the sound credits of Maciej Pawłowski and Mirosław Makowski, and folk/jazz/pop music provenance are retained as distinct authorship layers. Exact total budget, financing percentages, principal-photography day count, complete lens-by-shot map, universal exposures, LUT mathematics, data topology, complete VFX stack, edit-system version, production-sound hardware, music-rights fees and final mix topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "Zimna wojna",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/21f2d998-4b45-58b0-8661-c649bc2ed11f/zimna-wojna",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue anchor for the 90-minute version and core directing, producing, writing and craft credits."
    },
    {
      title: "ZIMNA WOJNA (COLD WAR)",
      publisher: "Festival de Cannes",
      url: "https://cinemadedemain.festival-cannes.com/en/f/zimna-wojna/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Festival record supporting the Poland/UK/France production identity, 84-minute festival listing and principal craft credits."
    },
    {
      title: "Opposites Attract: Cold War",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/articles/opposites-attract-cold-war",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Żal's title-specific account of 35mm/ALEXA tests, focal-length strategy, framing, lighting, camera-count rules, locations and selective Berlin VFX construction."
    },
    {
      title: "Lukasz Zal PSC Crafts a Stark Aesthetic for Cold War",
      publisher: "Codex",
      url: "https://codex.online/casestudies/Lukasz-Zal-PSC-Crafts-a-Stark-Aesthetic-for-Cold-War",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Workflow case study documenting ALEXA XT, Codex XR, ARRIRAW 3.4K Open Gate, color-to-monochrome lineage, Ultra Primes/other lenses, DI Factory and six-month prep/seven-month production span."
    },
    {
      title: "Interview: Pawel Pawlikowski on Cold War",
      publisher: "Film4",
      url: "https://www.film4productions.com/news/interview/2018-05/interview-pawel-pawlikowski-cold-war",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Pawlikowski describes the anti-biopic/elliptical structure, music as a third character, folk research and the relation of music to time and geography."
    },
    {
      title: "Cold War",
      publisher: "Opus Film",
      url: "https://www.opusfilm.com/films/feature-films/cold-war",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer record documenting the Poland/UK/France production, Opus/Apocalypso/MK network, producers, cinematography, production design, costume, sound and music-arrangement credits."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
