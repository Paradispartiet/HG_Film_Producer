import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const zodiacProductionCaseVerification = {
  scenarioId: "scenario_zodiac_2007",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Zodiac is verified conservatively as David Fincher's 2007 tapeless Viper FilmStream feature and as an end-to-end digital-negative/data-management production system. American Cinematographer documents Thomson Viper uncompressed HD-to-drive capture, Fincher/Savides pipeline tests carried through grading, film-out, release print and large-screen projection, Zeiss DigiPrimes, ND and 20 CC magenta filtration, 4:4:4 source protection, highlight-shoulder limits, representational HD monitoring, period-naturalist references and Technicolor DI/35mm translation. Post Magazine documents approximately 18 million 4:4:4 1920x1080p DPX files recorded to S.two DFR/D.Mag, A.Dock-to-LTO-3 ingest, QC, two pristine digital-negative clones with one off-site, pixel-for-pixel and complete 144 TB bit-by-bit read-back verification, DVCPRO HD editorial proxies, Apple Shake/Final Cut processing, PIX review infrastructure, custom conform and the editorial team's assumption of laboratory-like archive/dailies/data-management duties. ASC's later enhancement account documents reconstruction from original 1920x1080 10-bit 4:4:4 DPX, Technicolor DI, Lowry/DTS processing for noise, dead pixels, ringing and consistency, and final return to TDI for 35mm recording. Mix documents Ren Klyce's period-specific sound-design work, Skywalker/Tyrell post, David Parker/Michael Semanick/Richard Hymns, and David Shire's score evolving from The Conversation-derived temp material to roughly 37 minutes of original music. AFI and BFI both record a 158-minute release and confirm Fincher, James Vanderbilt, Harris Savides, Angus Wall, Donald Graham Burt and David Shire. The verification does not call the Viper a 2K acquisition camera, does not claim 4:4:4 removes exposure limits, does not confuse DVCPRO HD proxies with camera masters, does not claim digital-only theatrical delivery, and does not turn data management into a single-copy workflow.",
  sources: [
    {
      title: "Zodiac: Cold Case File",
      publisher: "American Society of Cinematographers / American Cinematographer",
      url: "https://theasc.com/article/flashback-zodiac/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Contemporary AC production coverage and later enhancement appendix covering Viper FilmStream capture, full pipeline/release-print testing, DigiPrime/filter strategy, 4:4:4 source protection, exposure/monitoring limits, period-naturalist references, custom conform from original DPX, Technicolor DI, Lowry/DTS processing and 35mm recording."
    },
    {
      title: "Edit This! - Zodiac's Sign of the Times",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2007/January-1-2007/EDIT-THIS-ZODIACS-SIGN-OF-THE-TIMES.aspx",
      sourceKind: "trade_feature",
      supports: ["overall", "editing", "cinematography"],
      note: "Contemporary data-workflow account documenting 18 million DPX files, S.two D.Mag/DFR acquisition, LTO-3 dual digital negatives, pixel/bit verification of 144 TB, off-site copy, DVCPRO HD proxies, Shake/FCP, PIX, custom conform, Technicolor DI and editorial's expanded lab-like responsibilities."
    },
    {
      title: "Unraveling the Sound for Zodiac",
      publisher: "Mix",
      url: "https://www.mixonline.com/sfp/unraveling-sound-zodiac-369163",
      sourceKind: "trade_feature",
      supports: ["overall", "sound", "editing"],
      note: "Contemporary sound-post feature documenting Skywalker/Tyrell workflow, Ren Klyce, Richard Hymns, David Parker, Michael Semanick, period-specific typewriter/telephone/vehicle recording, PIX-assisted score review and David Shire's evolving original score."
    },
    {
      title: "Zodiac",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/64556-ZODIAC",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming the 158-minute 2007 release, David Fincher, James Vanderbilt, Harris Savides, Angus Wall, Donald Graham Burt, David Shire and the Robert Graysmith literary source."
    },
    {
      title: "Zodiac (2007)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/30eb8575-275c-5ee4-9317-9011611ca8ad/zodiac",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Independent institutional confirmation of the 158-minute runtime and principal directing, producing and writing credits."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
