import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const twentyEightDaysLaterProductionCaseVerification = {
  scenarioId: "scenario_28_days_later_2002",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "28 Days Later is verified as a 2002 United Kingdom/USA production case in which low-resolution MiniDV acquisition, aggressive London location logistics, multi-camera coverage, deliberate shutter/exposure choices, production design, sound labor, editorial rhythm and a substantial digital-to-photochemical finishing chain must remain distinct. The BFI records Danny Boyle as director, Andrew Macdonald as producer, Alex Garland as writer and 113 minutes as running time. BFI programme credits identify Anthony Dod Mantle as director of photography, Chris Gill as editor, Mark Tildesley as production designer, John Murphy as composer, Glenn Freemantle as sound designer, John Rodda as sound recordist, Clear as special visual-effects provider, Clare St. John as post-production supervisor and Moving Picture Company as digital lab. American Cinematographer's original July 2003 production account documents the choice of MiniDV to protect difficult London location ambitions, the use of as many as eight Canon XL1 cameras during brief traffic-control windows, PAL XL1 4x3 capture matted for 16x9 in Frame Movie Mode, Canon EC 6-40mm and EJ 50-150mm lenses on Optex adapters, ND and one-to-two-stop underexposure strategies, sky plates, day-for-night lighting/design coordination, fast shutter for infected close views and deliberate restraint of camera movement elsewhere. The same account documents Clear's upconversion to 125 D-1 tapes, seven D-1 masters after editing/conform, roughly a month of MPC tape-to-tape grading with Jean-Clement Sorret, Linux Shake treatment, FilmTel enhancement/interpolation to 2K, a slight enlargement to 1.85:1, Arrilaser recording to Kodak Vision Color Intermediate 5242, a Fuji HiCon 3519D answer print at Technicolor London and Kodak Vision 2383 release prints through Deluxe. Later Danny Boyle testimony specifically links Chris Gill's editing to the high-shutter DV texture and rapid cutting. The verification therefore supports a precise exercise in location-access tradeoffs, small-camera multi-camera coordination, low-resolution image management, editorial selection and digital-to-film finishing while rejecting unsupported claims that the camera was HD or native 2K, that D-1 upconversion restored lost source detail, that fast shutter means handheld chaos, that every shot was a visual effect, or that later genre influence proves a production innovation claim.",
  sources: [
    {
      title: "28 Days Later... (2002)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/bd4cc955-a617-5a8b-b164-aed26d582552/28-days-later",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional film record supporting 2002, United Kingdom/USA, Danny Boyle, producer Andrew Macdonald, screenwriter Alex Garland and 113-minute running time."
    },
    {
      title: "28 Days Later: All the Rage",
      publisher: "American Cinematographer / American Society of Cinematographers",
      url: "https://theasc.com/article/28-days-later-all-the-rage/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Original July 2003 production reporting with Anthony Dod Mantle documenting MiniDV/Canon XL1 choice, up to eight cameras for London, PAL Frame Movie Mode, Canon EC/EJ lenses and Optex adapters, exposure/filter/shutter strategy, day-for-night work, Tildesley design coordination, Clear D-1 upconversion, MPC grading, Linux Shake/FilmTel 2K enhancement, Arrilaser 5242 film-out and answer/release print stocks."
    },
    {
      title: "28 Days Later... - BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/in%20dreams%20are%20monsters/2022/10/31/28-days-later/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "BFI programme-credit transcription supporting Anthony Dod Mantle, Chris Gill, Mark Tildesley, John Murphy, Glenn Freemantle, John Rodda, dialogue/ADR/Foley/re-recording personnel, Clear, MPC and Clare St. John. Used to map departments without inventing equipment or mix procedures."
    },
    {
      title: "Danny Boyle: 'There's this theory, which I think is true, that your first film is always your best film'",
      publisher: "Film Talk",
      url: "https://filmtalk.org/2025/06/26/danny-boyle/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Later direct Danny Boyle interview supporting that editor Chris Gill responded strongly to the high-shutter video texture and used rapid cutting as part of the film's editorial energy. Used as retrospective practitioner testimony, not as a substitute for the 2003 production record."
    },
    {
      title: "Release the Beastgrip: DP Anthony Dod Mantle on 28 Years Later",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/132924-interview-cinematographer-anthony-dod-mantle-28-years-later/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Retrospective direct interview in which Dod Mantle recalls the original Canon XL1 and places 28 Days Later in his prior low-resolution digital practice. Used only as corroborating retrospective context, with the ASC production article controlling detailed technical claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
