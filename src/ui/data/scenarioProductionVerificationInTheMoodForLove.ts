import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const inTheMoodForLoveProductionCaseVerification = {
  scenarioId: "scenario_in_the_mood_for_love_2000",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "In the Mood for Love is verified conservatively as Wong Kar Wai's 2000 Hong Kong/French feature whose production evolved across a long, interrupted shoot and was shaped by a documented cinematography handoff, multi-role design/editing authorship, music-led formal decisions and a late Cannes finish. In a 2025 BFI Sight and Sound interview Wong reconstructs the film's genesis from several earlier project ideas, confirms that a sex scene and 1970s material were shot and removed, says Christopher Doyle completed roughly 80 percent of the film and set its visual tone before Mark Lee Ping-bin took over, describes their approaches as different but complementary, and recalls cutting to the Cannes deadline with a mono-sound premiere copy. Criterion provides the principal modern credit anchor for Wong as director/producer/writer, Doyle and Lee as cinematographers, William Chang Suk Ping as production designer/editor/costume designer and Michael Galasso as a music credit, plus a 98-minute duration. The original Cannes 2000 catalogue separately records Wong, Doyle, Lee, William Chang and additional editor Ming-Iam Wong, lists a 90-minute duration and records the film's competition/award context; that record is preserved as institutional credit/runtime variance rather than silently harmonized. American Cinematographer's 2002 production account describes an approximately fifteen-month shoot affected by the Asian financial crisis and Wong's evolving method. In a contemporaneous AV Club interview Wong describes stops around performer schedules and the production moving into Bangkok after locations encountered during work on 2046 became useful for In the Mood for Love. BFI Player identifies the current 4K restoration as made from the 35mm original camera negative, establishing a photochemical source boundary while keeping modern restoration distinct from original production. Exact camera bodies, lenses, film-stock numbers, filtration, exposure settings, lighting package, sound hardware, edit system, full financing structure, budget, daily schedule, exact scene allocation between Doyle and Lee, exhaustive location ledger, complete deleted-scene chronology, music-rights terms, print genealogy and definitive version history remain unset where the reviewed sources do not establish them.",
  sources: [
    {
      title: "Wong Kar Wai on In the Mood for Love at 25 – a new interview",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/wong-kar-wai-mood-love-25",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Direct Wong Kar Wai retrospective testimony on the project's changing genesis, removed sex-scene/1970s material, Doyle-to-Lee cinematography handoff, Umebayashi/Nat King Cole music choices, repetition/memory, Cannes-deadline editing and the mono premiere copy."
    },
    {
      title: "In the Mood for Love (2000)",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/198-in-the-mood-for-love",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Modern institutional credit/runtime anchor: Wong director/producer/writer, Christopher Doyle and Mark Lee Ping Bing cinematography, William Chang Suk Ping production design/editing/costume, Michael Galasso music, 98 minutes and current director-approved restoration context."
    },
    {
      title: "In the Mood for Love",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/in-the-mood-for-love-3/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Original 2000 competition record preserving Wong, Doyle, Lee, William Chang, additional editor Ming-Iam Wong and music credit Danny Chung, plus a 90-minute catalogue duration and the film's Cannes awards."
    },
    {
      title: "DVD Playback: In the Mood for Love",
      publisher: "American Cinematographer",
      url: "https://theasc.com/magazine/dec02/dvd/page2.html",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Production-history account describing the roughly fifteen-month shoot, financial disruption during the Asian financial crisis and Wong's evolving production/editing method."
    },
    {
      title: "Wong Kar-Wai",
      publisher: "The A.V. Club",
      url: "https://www.avclub.com/wong-kar-wai-1798208135",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Contemporaneous Wong interview describing financing and performer-schedule interruptions and the production's move into Bangkok after locations encountered while working on 2046 became useful for In the Mood for Love."
    },
    {
      title: "Watch In the Mood for Love online",
      publisher: "British Film Institute",
      url: "https://player.bfi.org.uk/rentals/film/watch-in-the-mood-for-love-2000-online",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "BFI restoration record identifying the 4K restoration as derived from the 35mm original camera negative and approved by Wong Kar Wai; used to establish the photochemical source boundary without inferring unsourced camera/lens/stock details."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
