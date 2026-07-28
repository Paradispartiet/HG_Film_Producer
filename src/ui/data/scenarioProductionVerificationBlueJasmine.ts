import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const blueJasmineProductionCaseVerification = {
  scenarioId: "scenario_blue_jasmine_2013",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "Official credits, production notes, filmmaker and actor interviews, costume reporting, institutional film records and Academy history support Blue Jasmine as a nonlinear New York-San Francisco class-performance breakdown built through associative memory, location contrast, designer remnants, actor-led social identity, editing, sound and jazz.",
  sources: [
    {
      title: "Blue Jasmine press kit",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/bluejasmine/bluejasmine_presskit.pdf",
      sourceKind: "production_archive",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official production notes and credits document the New York past and San Francisco present, associative flashback structure, cast and department heads, title music, location contrast and the production's balance of tragic and absurd behaviour."
    },
    {
      title: "Blue Jasmine",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/blue-jasmine",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming Woody Allen's direction and screenplay, producers Letty Aronson, Stephen Tenenbaum and Edward Walson, Javier Aguirresarobe cinematography, Alisa Lepselter editing and Santo Loquasto production design."
    },
    {
      title: "Film of the week: Blue Jasmine",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-blue-jasmine",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Sight and Sound supplies the principal crew, colour 2.35:1 and Dolby Digital presentation and analyzes Jasmine's compulsive speech, temporal construction and the contrast between her social performance and material circumstances."
    },
    {
      title: "Interview: Woody Allen on Blue Jasmine",
      publisher: "Time Out",
      url: "https://www.timeout.com/film/interview-woody-allen-on-blue-jasmine",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Allen discusses money, status, Blanchett's performance and his jazz-record practice, supporting the relationship among class identity, actor-centred direction and the source-music system."
    },
    {
      title: "Cate Blanchett's Audition for Blue Jasmine Lasted Less Than Two Minutes",
      publisher: "Vanity Fair",
      url: "https://www.vanityfair.com/style/2013/07/cate-blanchett-blue-jasmine-audition",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Contemporary premiere interviews document Allen's economical casting and direction, Blanchett's script-led preparation and the actors' experience of a fast, practical production method."
    },
    {
      title: "Cate Blanchett's Blue Jasmine wardrobe",
      publisher: "British Vogue",
      url: "https://www.vogue.co.uk/article/cate-blanchett-blue-jasmine-karl-lagerfeld-costumes",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The costume feature documents Chanel and Fendi pieces and Karl Lagerfeld's custom contributions, showing how recognisable luxury objects carry Jasmine's former class position into her reduced present."
    },
    {
      title: "Blue Jasmine costume designer interview",
      publisher: "Town & Country",
      url: "https://www.townandcountrymag.com/style/fashion-trends/g578/blue-jasmine-cate-blanchett-costume-designer-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Suzy Benzinger explains the Chanel jacket as a security blanket, the Hermès bag and repeated luxury remnants, directly supporting costume as an active narrative record of wealth, denial and deterioration."
    },
    {
      title: "The story behind Cate Blanchett's Blue Jasmine costumes",
      publisher: "Allure",
      url: "https://www.allure.com/story/cate-blanchett-blue-jasmine-costume-designer",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Benzinger describes sourcing, fitting, distressing and repeating designer garments and jewellery, confirming that wardrobe condition and reuse were planned to register Jasmine's changing physical and social state."
    },
    {
      title: "Woody Allen to Cate Blanchett on first Blue Jasmine takes: Awful",
      publisher: "CBS News",
      url: "https://www.cbsnews.com/news/woody-allen-to-cate-blanchett-on-1st-blue-jasmine-takes-awful/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Blanchett connects her performance research to Ruth Madoff's visible shame and describes Allen's sparse direction, supporting the construction of Jasmine through actor-led adjustments rather than explanatory staging."
    },
    {
      title: "Academy Awards search: Cate Blanchett",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://awardsdatabase.oscars.org/Search/GetResults?query=%7B%22Nominee%22%3A%22cate+blanchett%22%2C%22Sort%22%3A%221-Nominee-Alpha%22%2C%22Search%22%3A%22Basic%22%7D",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official Academy database confirms Cate Blanchett's Actress in a Leading Role win for Blue Jasmine, anchoring the film's immediate and continuing performance legacy."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const blueJasmineVerificationRecords = [
  blueJasmineProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
