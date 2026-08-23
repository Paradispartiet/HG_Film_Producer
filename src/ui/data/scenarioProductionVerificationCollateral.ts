import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const collateralProductionCaseVerification = {
  scenarioId: "scenario_collateral_2004",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Collateral is verified conservatively as Michael Mann's 2004 hybrid high-definition/35mm Los Angeles production rather than an all-digital feature. American Cinematographer's contemporary technical account documents Paul Cameron's Viper/F900/F950 and pushed-35mm tests, the choice to use Viper VideoStream rather than FilmStream for the desired gained/monitorable image, prototype SRW5000 recording, custom Viper accessories, the transition from early dual-F900 work to later dual-Viper A/B operation, continued F900 use for run-and-gun work, and 35mm use for controlled interiors, day exteriors and selected stunt/variable-frame-rate situations. Beebe states that the big interiors comprised about twenty percent of the picture, which is preserved as a bounded interior figure rather than converted into an unsupported exact total digital-versus-film percentage. The same source documents a twelve-camera hybrid stunt, the custom taxi-lighting system of four working taxis plus three trailer sections, roughly thirty ELD panels per cab, Plexiglas wind protection, waveform/IRE exposure discipline, remote focus at HD monitors, calibrated HD dailies, mixed Los Angeles practical-light color, the extremely low-light glass-office finale, Company 3 digital intermediate work and Laser Pacific 35mm transfer. AFI confirms Michael Mann as director/producer, Stuart Beattie as credited writer, Julie Richardson as producer, Dion Beebe and Paul Cameron as cinematographers, Jim Miller and Paul Rubell as editors, David Wasco as production designer, Lee Orloff as production sound mixer, Elliot Koretz as sound designer/supervisor, Michael Minkler and Myron Nettinga as re-recording mixers, James Newton Howard for music, production from 13 October through late December 2003 and a 120-minute release; BFI independently records 120 minutes. DGA material supports Mann's one-night microcosm, intensive character preparation and the relationship between the special cab rigs, digital process and sustained actor work. The verification does not claim every night shot was digital, does not assign an exact overall HD percentage, does not claim FilmStream raw was the final mode, and does not invent exact codec/data-rate, camera serial, lens-per-shot, universal sensitivity or cinematographer-transition details beyond the reviewed sources.",
  sources: [
    {
      title: "Hell on Wheels: Collateral",
      publisher: "American Society of Cinematographers / American Cinematographer",
      url: "https://theasc.com/articles/hell-on-wheels-collateral",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Contemporary production account by Paul Cameron and Dion Beebe covering HD/35mm testing, Viper VideoStream versus FilmStream, F900/Viper deployment, prototype recording, gain/noise and film-out tests, taxi ELD lighting and mobile rigs, cinematographer transition, remote focus, mixed capture, DI and 35mm laser-out."
    },
    {
      title: "Collateral",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/54371-COLLATERAL",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credit and production record confirming the 120-minute 2004 release, 13 Oct-late Dec 2003 production dates, Stuart Beattie's onscreen writing credit, Mann/Richardson production, Beebe/Cameron cinematography, Miller/Rubell editing, Wasco production design, production-sound, sound-design, re-recording and music credits."
    },
    {
      title: "LAFF 2004 - Michael Mann's Los Angeles",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/Events/2004/06-June-2004/LAFF-2004",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Contemporary Mann/Cruise discussion describing the film as a roughly ten-hour/one-night mobile-hostage structure, extensive character-history preparation, Los Angeles environment as dramatic information, and the digital/special-rig system enabling sustained cab performance without planning to loop everything."
    },
    {
      title: "The Study of Mann",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/craft/dgaq/issues/1201-winter-2012/dga-interview-michael-mann",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Mann retrospectively explains Collateral as a compressed one-night microcosm, details Foxx/Cruise character preparation, discusses long digital takes and identifies music as an active directing/editing tool, including the coyote sequence."
    },
    {
      title: "Collateral (2004)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/9f42613e-2e14-5902-aba5-3bce73f1d4c2/collateral",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional catalogue record confirming Michael Mann, Michael Mann/Julie Richardson, Stuart Beattie, principal cast and 120-minute duration."
    },
    {
      title: "Attack of the zeros and ones: the early years of digital cinema",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/attack-zeros-ones-early-years-digital-cinema-told-david-lynch-miranda-july-michael-mann-more",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Retrospective digital-cinema history quoting Mann on the risk and experiential appeal of early digital capture and identifying Collateral as an early major use of the Viper rather than as an all-digital simplification."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
