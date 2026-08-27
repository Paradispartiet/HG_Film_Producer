import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const idaProductionCaseVerification = {
  scenarioId: "scenario_ida_2013",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Ida is verified as a 2013 Chapter 18 Production Case in which a Poland-Denmark public co-production, stripped-back period staging, an early-production cinematography handoff, ARRI ALEXA 4:3 color ARRIRAW-to-Codex capture and a DI Factory/Nucoda monochrome finish functioned as one production system. Opus Film and Danish Film Institute records establish the Polish-Danish production partnership and principal authorship. The producer-linked press notes anchor an 80-minute version, Phoenix Film/Opus production, Portobello association, Canal+ Poland/Phoenix Film Poland co-production, Polish Film Institute/Eurimages/Danish Film Institute/City of Lodz support, Jaroslaw Kaminski editing, Claus Lynge sound-post responsibility, DI Factory digital post, Michal Herman grading, Ministi Film sound post and Toya Studios playback recording. Detailed cinematography reporting based on Lukasz Zal's production account documents an ARRI ALEXA 4:3 camera, ARRI/Zeiss Ultra Prime lenses supplied by Panavision Poland, color ARRIRAW recorded to Codex and black-and-white conversion in Nucoda at DI Factory. Pawlikowski interviews support black-and-white as deliberate abstraction, the 4:3 frame as a portrait and limited-vision constraint, high headroom/negative space and a preference for a strong primary angle rather than routine coverage. Contemporary accounts preserve Ryszard Lenczewski's preparatory contribution and Lukasz Zal's early move from operator to DP after Lenczewski became ill, without converting that handoff into an unsupported single-author claim. Scene-level lighting documentation proves that the apparently simple naturalistic images could use substantial controlled units including 6K, 1.2K and 575W sources, Kino Flo, Octodome, bounce, negative fill, smoke and Dedolights; these remain scene-specific rather than film-wide prescriptions. FilmPolski and Lodz City of Film document extensive Lodz/regional location production. Sources use both 1.33:1 and 1.37:1 labels, so the case verifies an Academy-like 4:3 composition strategy while retaining exact aspect-label/delivery-raster variance as an explicit uncertainty. Exact budget, shooting-day total, ALEXA submodel, Codex hardware model, full focal-length inventory, shot-to-lens allocation, exposure values, complete lighting diagrams, exact monochrome/grain recipe, production-sound hardware and final delivery raster remain outside the verified layer unless stronger title-specific evidence establishes them.",
  sources: [
    {
      title: "Ida",
      publisher: "Opus Film",
      url: "https://opusfilm.com/films/feature-films/ida",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer record supporting Poland-Denmark, 2013, Pawlikowski/Lenkiewicz screenplay, Zal/Lenczewski cinematography, design/costume/editing credits and the central Opus/Phoenix production structure."
    },
    {
      title: "IDA Award Press Notes 2014",
      publisher: "Music Box Films / Phoenix Film / Opus Film",
      url: "https://www.musicboxfilms.com/wp-content/uploads/2018/09/IDA_AWARD_PRESS_NOTES_2014.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer-linked press notes supporting the 80-minute Poland-Denmark version, production/co-production/support layers, principal crew, DI Factory/Michal Herman post, Claus Lynge/Ministi sound post and Toya playback recording."
    },
    {
      title: "Financing European Arthouse",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/english/financing-european-arthouse",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "Institutional account confirming Opus/Phoenix co-production, Danish Film Institute and Eurimages support, creative/financial development and Danish composer/sound-post participation including Ministi Film and Claus Lynge."
    },
    {
      title: "Three Scenes from Ida",
      publisher: "The Film Book",
      url: "https://thefilmbook.net/2015/01/three-scenes-from-ida/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Detailed cinematography account derived from discussion with Lukasz Zal and American Cinematographer reporting: ALEXA 4:3, ARRI/Zeiss Ultra Primes via Panavision Poland, color ARRIRAW-to-Codex capture, Nucoda/DI Factory monochrome post and scene-specific lighting examples."
    },
    {
      title: "Squaring the Circles: Pawel Pawlikowski on Ida",
      publisher: "Senses of Cinema",
      url: "https://www.sensesofcinema.com/2014/feature-articles/squaring-the-circles-pawel-pawlikowski-on-ida/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Pawlikowski interview supporting black-and-white abstraction, the 4:3 portrait/limited-field strategy, unusual headroom/negative space, single-angle scene preference, bounded camera-movement exceptions and nonprofessional lead casting context."
    },
    {
      title: "Ida",
      publisher: "FilmPolski.pl",
      url: "https://filmpolski.pl/fp/index.php?film=1229196",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Polish institutional catalogue supporting detailed crew, sound/music metadata, 1:1.33 notation and numerous Lodz/regional production locations. Its 79-minute catalogue runtime is preserved as version variance rather than used to overwrite the 80-minute producer anchor."
    },
    {
      title: "Ida",
      publisher: "Lodz UNESCO City of Film",
      url: "https://lodzcityoffilm.com/en/ida-2/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Official city-film record supporting Lodz production context and local locations used to construct the early-1960s world."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
