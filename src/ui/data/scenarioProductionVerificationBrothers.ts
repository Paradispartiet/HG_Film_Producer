import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const brothersProductionCaseVerification = {
  scenarioId: "scenario_brothers_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's eight-year maternal family-documentary production, Fenris Film context, DV-HD-Super 16 image archive, 450 hours of footage, three-year edit, domestic observation, changing child-camera relationship, credited sound and music work, Norwegian theatrical release and international documentary awards are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Brødre",
      publisher: "Fenris Film",
      url: "https://fenrisfilm.squarespace.com/brdre",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The producer's official film page identifies the eight-year childhood project, Aslaug Holm as director and cinematographer, Tore Buvarp as producer, the three editors, Kaada's music, credited sound design, theatrical release and principal awards."
    },
    {
      title: "Hot Docs 2016 Women Directors: Meet Aslaug Holm — Brothers",
      publisher: "Women and Hollywood",
      url: "https://medium.com/women-and-hollywood/2016-hot-docs-women-directors-meet-aslaug-holm-brothers-3e4b9b595e02",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Holm explains the film's focus on her sons' changing relationship, the conflict between documentary attention and motherhood, more than eight years of filming and an editing process lasting three years."
    },
    {
      title: "En samtale med regissør Aslaug Holm om kinodokumentaren Brødre",
      publisher: "Montages",
      url: "https://montages.no/nyheter/en-samtale-med-regissor-aslaug-holm-om-kinodokumentaren-brodre/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The TIFF filmmaker conversation documents Holm's long dual process as mother and filmmaker, her portrait of her sons' childhood and the work of forming one coherent film from almost a decade of recordings."
    },
    {
      title: "Review: Brothers",
      publisher: "POV Magazine",
      url: "https://povmagazine.com/articles/view/review-brothers",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Hot Docs review describes the film's personal narration, interwoven family history, visual collage of styles and periods, mundane domestic actions, humour and associative movement between childhood moments."
    },
    {
      title: "Brothers (intl. version)",
      publisher: "LevelK",
      url: "https://www.levelk.dk/films/brothers-2702",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The international sales record verifies the eight-year production, DV-HD-Super 16 formats, DCP and Dolby presentation, Aslaug Holm's writing and cinematography, the editing team, sound editors, producer, financiers and festival-award history."
    },
    {
      title: "Two Norwegian documentaries win at Hot Docs in Toronto",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/308876/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The industry report records 450 hours filmed across eight years for the Fenris Film production and confirms the Best International Feature award at Hot Docs."
    },
    {
      title: "Brothers Triumph At HotDocs",
      publisher: "Nordisk Film & TV Fond",
      url: "https://nordiskfilmogtvfond.com/news/extras/brothers-triumph-hotdocs",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "The Nordic fund verifies its production support, Fenris Film, LevelK sales, the eight-year filming period and the Hot Docs Best International Feature Documentary award."
    },
    {
      title: "Brødre",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/brodre-2",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The national film database verifies Holm's direction and cinematography, Kjell Vassdal's additional photography, the three credited editors, John Erik Kaada's composition, Fenris Film and Danish theatrical distribution."
    },
    {
      title: "Brothers",
      publisher: "Taiwan International Documentary Festival",
      url: "https://www.tidf.org.tw/en/films/20916",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The official festival record identifies the Norwegian colour DCP, the close mother-filmed childhood and brotherhood portrait, CPH:DOX selection and the 2016 International Competition Grand Prize."
    },
    {
      title: "Brødre",
      publisher: "Shortcut Oslo",
      url: "https://www.shortcutoslo.no/work/brodre-fenris",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The post-production company record verifies Fenris Film, Aslaug Holm's direction, credited sound personnel, grading, mastering and the practical post-production structure supporting the family documentary."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
