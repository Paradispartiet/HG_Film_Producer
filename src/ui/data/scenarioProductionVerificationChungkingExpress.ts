import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const chungkingExpressProductionCaseVerification = {
  scenarioId: "scenario_chungking_express_1994",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "Chungking Express is verified as a 1994 Jet Tone Hong Kong production made through an unusually rapid but still highly authored production system. Hong Kong Film Archive records that Wong Kar Wai formed Jet Tone Films Limited with Jeff Lau in 1991 and that Jet Tone produced Chungking Express, Ashes of Time and Fallen Angels. BFI records that Chungking Express was shot in 23 days during a break from Ashes of Time; Criterion scholarship describes a broader roughly three-month start-to-finish project. Those measures are retained as different production windows rather than forced into one schedule. Christopher Doyle's BFI interview records that production started before Wong had completed the screenplay, that the second story was written in one day and that a third story later became Fallen Angels. Doyle also identifies Andrew Lau Wai-keung as cinematographer of the first Brigitte Lin/Takeshi Kaneshiro segment and himself as cinematographer of the Tony Leung/Faye Wong segment. Wong's own 1995 BFI/Sight and Sound interview adds that Lau began the film, left for another project, Doyle took over after Wong encountered him in Tokyo and Doyle reshot some earlier material both to unify the visual system and because Wong had rethought sequences. Doyle describes a fast, ad hoc public-location method in busy Hong Kong and identifies his own Central/Mid-Levels flat as Cop 663's apartment; his later recollection also records real water damage caused by the staged flooding. That consequence is historical evidence and not an effects or property-safety instruction. Criterion's film-specific credit record names Wong as director/writer/producer, Chan Ye Cheng executive producer, Jacky Pang Yee Wah co-producer, Christopher Doyle and Andrew Lau Wai-keung cinematographers, William Chang Suk Ping production designer/editor, Hai Kit Wai and Kong Chi Leung additional editors and Frankie Chan for music. Criterion records color, 1.66:1, Cantonese and 102 minutes; BFI catalogue records 97 minutes and BFI Player 103 minutes. The case preserves 97/102/103 as institutional catalogue/exhibition variance and uses 102 as the canonical gameplay runtime. BFI states the current restoration was made from the 35mm original camera negative, which supports original 35mm negative provenance but not an invented camera, lens, stock, filter, shutter, exposure, lighting or laboratory recipe. BFI scholarship supports the film's kinetic/step-printed aesthetic at a conceptual level but not exact frame duplication, printer or shutter settings. The later restoration remains separate: Criterion records a director-approved 4K restoration with 5.1 audio, while Wong explicitly states that Chungking Express was made before 5.1 and required retooling/remixing for the restored edition. The 5.1 configuration, restoration color decisions and cleanup are therefore not projected backward onto the 1994 production master.",
  sources: [
    {
      title: "Hong Kong Filmmakers Search: WONG Kar-wai",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/documents/6.-Research-and-Publication/06-02-Filmmakers-Search/English/WONG-Kar-wai_e.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional filmmaker history recording Wong's formation of Jet Tone Films Limited with Jeff Lau in 1991 and Jet Tone's production of Chungking Express, Ashes of Time and Fallen Angels."
    },
    {
      title: "Christopher Doyle on shooting Chungking Express for Wong Kar-wai",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/interviews/christopher-doyle-shooting-chungking-express",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Doyle documents the 23-day shoot, Ashes of Time break, unfinished-writing process, one-day second story, third-story migration into Fallen Angels, Andrew Lau first segment, Doyle second segment, busy public locations, adaptive shooting and his apartment location."
    },
    {
      title: "Poet of time: Wong Kar-Wai on Chungking Express",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/poet-time-wong-kar-wai-chungking-express",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Wong's contemporary interview documents Andrew Lau beginning cinematography, Doyle taking over, selective reshoots for visual unity and rewritten sequences, and an intuitive production method shaped through people, space and revision."
    },
    {
      title: "Chungking Express",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/226",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Film-specific edition record for Hong Kong 1994, 102 minutes, color, 1.66:1, Cantonese; Wong writer/director/producer; Chan Ye Cheng executive producer; Jacky Pang Yee Wah co-producer; Doyle and Andrew Lau cinematography; William Chang production design/editing; Hai Kit Wai and Kong Chi Leung editing; Frankie Chan music."
    },
    {
      title: "Watch Chungking Express online",
      publisher: "BFI Player",
      url: "https://player.bfi.org.uk/rentals/film/watch-chungking-express-1994-online",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI exhibition record describing a 23-day production, current 103-minute presentation and later 4K restoration from the 35mm original camera negative. The restoration is not treated as original capture metadata."
    },
    {
      title: "CHUNGKING EXPRESS (1994)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/e764a546-65ee-57e3-b249-7e6dd54ee441/chungking-express",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI catalogue record for Hong Kong 1994 and a 97-minute running time, retained as institutional runtime/version variance rather than used to overwrite other records."
    },
    {
      title: "World of Wong Kar Wai: Director's Note",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/7325-world-of-wong-kar-wai-director-s-note",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Wong explicitly states Chungking Express was made before 5.1 surround and had its settings/configuration retooled for the later restoration, establishing a strict boundary between original and restored sound versions."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
