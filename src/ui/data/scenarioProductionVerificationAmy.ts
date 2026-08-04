import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const amyProductionCaseVerification = {
  scenarioId: "scenario_amy_2015",
  status: "verified",
  verifiedAt: "2026-08-04",
  summary: "The case's On the Corner-Film4 archival music-documentary production, extensive private and public archive, approximately one hundred audio interviews, no-visible-talking-head method, lyric-led biography, twenty-month Chris King edit, heterogeneous source formats, sound and music reconstruction, Cannes launch and Academy-BAFTA legacy are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Amy",
      publisher: "A24",
      url: "https://a24films.com/films/amy",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "The official United States distributor page identifies the 2015 feature, extensive unseen archive footage and previously unheard tracks and records its Documentary Feature award recognition."
    },
    {
      title: "Amy",
      publisher: "Film4",
      url: "https://www.film4productions.com/productions/2015/amy",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Film4's production archive verifies its involvement, the 128-minute feature, Asif Kapadia's direction and the documentary's focus on Winehouse's story and surrounding public culture."
    },
    {
      title: "Making Amy: how we created our Winehouse documentary",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/interviews/making-amy-how-we-created-our-winehouse-documentary",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Kapadia, producer James Gay-Rees and editor Chris King explain the research, witness testimony, professional and amateur video, photographs, private access and editorial decisions used to construct the portrait."
    },
    {
      title: "AMY",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/amy/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "The official Midnight Screenings record verifies the United Kingdom feature, 2015 selection, Asif Kapadia direction, Chris King editing, Antonio Pinto music, runtime and On the Corner Films production contact."
    },
    {
      title: "WATCH: Asif Kapadia on Oscar-Nominated Amy",
      publisher: "International Documentary Association",
      url: "https://documentary.org/blog/watch-asif-kapadia-oscar-nominated-amy",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Kapadia discusses excluding visible talking heads, searching online and private archives and making public complicity and media treatment part of the documentary's argument."
    },
    {
      title: "Asif Kapadia on Amy: The drinking, the bulimia, the drugs – nobody stopped it",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2015/jun/27/asif-kapadia-amy-winehouse-doc",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "The production interview records roughly one hundred interviews, a three-year process, twenty months of editing, the archive-only visual strategy, lack of guiding narration and the contested ethics of selecting testimony."
    },
    {
      title: "Amy from the archives",
      publisher: "Televisual",
      url: "https://www.televisual.com/news/amy-from-the-archives_bid-791/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The craft feature details recorded interviews and archive audio replacing talking heads, the complex patchwork of footage, Kapadia's emphasis on sound and the technically demanding integration of music, image and testimony."
    },
    {
      title: "Chatting With Director Asif Kapadia About his Oscar-Nominated Doc Amy",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2016/02/chatting-director-asif-kapadia-about-his-oscar-nominated-doc-amy/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Kapadia describes twenty months spent with Gay-Rees and King examining more than one thousand hours of footage, locating direct-to-camera private moments and using witness stories to identify the songs' biographical origins."
    },
    {
      title: "Film Awards 2016",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/?award-year=2016",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "BAFTA's official results record Amy as the 2016 Documentary winner, supporting the film's British institutional recognition and the reception of its archive, editorial and musical construction."
    },
    {
      title: "The 88th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2016",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "The Academy records Amy as the 2016 Documentary Feature winner for Asif Kapadia and James Gay-Rees, establishing the production's international awards legacy."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
