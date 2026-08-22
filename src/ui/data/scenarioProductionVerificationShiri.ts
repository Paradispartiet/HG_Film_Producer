import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const shiriProductionCaseVerification = {
  scenarioId: "scenario_shiri_1999",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "Shiri is verified as a 1999 South Korean KangJeGyu Films production directed by Kang Je-gyu and released domestically on 13 February 1999. KOFIC's film database records Lee Kwan-hark as producer, Byeon Mu-rim in investment, KangJeGyu Films as production company, Korean language and 125 minutes. KOFIC's industrial-history material places the film within Samsung's late-1990s film investment/distribution activity and notes Korea Technology Finance Corporation support. Budget evidence is not uniform: KOFIC's Kang Je-gyu profile reports 2.4 billion won, a later KOFIC investment history reports 3 billion won, and Kang told the Los Angeles Times in 2002 that the film cost about US$5 million. These figures remain separately attributed historical reports rather than being normalized into a single audited budget. Contemporary Korean reporting says Kang worked on the screenplay for roughly two years and revised it repeatedly during production; KOFIC also lists Beak Woon-hak and Jeon Yun-su as script editors. Craft credits require explicit reconciliation. A Korean cinematheque database and KoreaFilm record identify Kim Sung-bok as cinematographer, Won Myung-jun as lighting director, Park Gok-ji as editor, Lee Dong-jun as composer, Lee Byung-ha for production sound, Kim Seok-won for sound, Jung Do-ahn for practical special effects, Cho Sung-bae for visual effects and Jung Doo-hong for action direction. Contemporary 1999 Daejong coverage independently confirms Won's lighting award, Park's editing award and Lee/Kim's sound-technology award, while award nomination reporting lists Kim Sung-bok's cinematography. KOFIC's current film page instead lists Hwang Suh-shik as director of photography; that institutional catalogue conflict is preserved, with Kim Sung-bok used as canonical DP because multiple Korean production/award sources converge on him and other Korean credit records place Hwang in the camera team. Contemporary March 1999 reporting distinguishes practical gunfire/explosion effects from computer graphics and miniatures and documents a purpose-built aquarium set and injuries during the aquarium shoot. A July 1999 Yonhap report on the Making Shiri documentary records firearms training, aquarium preparation, building-explosion preparation and interviews with craft department heads, and also notes deleted material restored for an overseas director's cut. Those accounts are historical production evidence only. Present-day weapons, breakaway glass, pyrotechnics, explosions and wire/stunt work require qualified department heads, controlled weapons procedures, certified materials/rigging, performer-specific rehearsal, barriers, emergency/medical planning and applicable labor/safety rules; safer non-firing or digital alternatives should be preferred where feasible. Runtime evidence varies between KOFIC's 125 minutes and KoreaFilm's 120 minutes, so 125 is canonical gameplay runtime and 120/125 is preserved as catalogue/version variance. KOFIC and contemporary Korean reporting document the film's domestic breakthrough, while KOFIC's later retrospective tracks subsequent mainstream theatrical release in Japan and Hong Kong and broader overseas circulation. Reception, awards and export success remain downstream evidence and do not prove undocumented camera, effects, stunt, sound or intelligence-practice details.",
  sources: [
    {
      title: "SHIRI (1999)",
      publisher: "Korean Film Council / KoBiz",
      url: "https://www.koreanfilm.or.kr/eng/films/index/filmsView.jsp?category=ALL&mode=INDEX_FILMS_LIST&movieCd=19990084&pageIndex=1&pageRowSize=10&s_genre=ALL&searchKeyword=SHIRI&searchType=ALL&strMenuId=010401",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "National film-industry record for 125 minutes, 13 February 1999 release, Kang Je-gyu direction, Lee Kwan-hark production, Byeon Mu-rim investment, KangJeGyu Films and staff including script editors, Hwang Suh-shik DP listing and Jung Do-ahn special effects."
    },
    {
      title: "Investment & Distribution Structure in Korean Film Industry",
      publisher: "Korean Film Council / KoBiz",
      url: "https://www.koreanfilm.or.kr/eng/news/ko_pick.jsp?blbdComCd=601029&mode=VIEW&pageIndex=1&pageRowSize=10&seq=98",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Industry-history source placing Shiri in Samsung's late film-investment period, reporting a 3-billion-won budget and Korea Technology Finance Corporation support."
    },
    {
      title: "A Look Back at Shiri – Korea's International Breakthrough 26 Years On",
      publisher: "Korean Film Council / KoBiz",
      url: "https://www.koreanfilm.or.kr/eng/news/ko_pick.jsp?blbdComCd=601029&mode=VIEW&pageIndex=1&pageRowSize=10&seq=144",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "KOFIC retrospective for Korean-blockbuster context, later Japan/Hong Kong mainstream release and broader international breakthrough. Its US$5-million retrospective figure is kept alongside, not substituted for, other budget reports."
    },
    {
      title: "KANG Jekyu",
      publisher: "Korean Film Council / KoBiz",
      url: "https://www.koreanfilm.or.kr/eng/films/index/peopleView.jsp?peopleCd=10000854",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional filmmaker profile reporting a 2.4-billion-won Shiri production cost and situating the film in the rise of Korean-style blockbusters."
    },
    {
      title: "A Korean Detente",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-2002-feb-08-et-matsumoto8-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Kang Je-gyu interview describing Samsung financial support, an approximately US$5-million production and the need for careful production budgeting. Used as first-person management testimony, not an audited ledger or action-effects instruction."
    },
    {
      title: "Samsung Research Institute analyzes five reasons for Shiri's success",
      publisher: "Yonhap News Agency",
      url: "https://www.yna.co.kr/view/AKR19990309003000002",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Contemporary March 1999 report describing roughly two years of screenplay work, repeated revisions, production planning and staged marketing."
    },
    {
      title: "The people who made Shiri",
      publisher: "Seoul Shinmun",
      url: "https://www.seoul.co.kr/news/seoulPrintNew.php?id=19990306013003",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Contemporary production feature distinguishing Jung Do-ahn practical effects, Cho Sung-bae CG/miniatures and Jung Doo-hong action direction, and documenting the aquarium production and injuries. Historical risk details are not treated as present-day instructions."
    },
    {
      title: "Making Shiri production-process video to be released",
      publisher: "Yonhap News Agency",
      url: "https://www.yna.co.kr/view/AKR19990726000300005",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "Contemporary report on the Making Shiri documentary, including department-head interviews, preparation/training footage and deleted scenes restored for an overseas director's cut; used only as historical production/version evidence."
    },
    {
      title: "Shiri (SHIRI)",
      publisher: "Korean Cinematheque film database",
      url: "https://www.cinematheque.co.kr/cinema/19990084",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Detailed Korean credit record naming Byeon Mu-rim, Kim Sung-bok, Won Myung-jun, Park Gok-ji, Lee Dong-jun, Lee Byung-ha, Kim Seok-won, Jung Do-ahn, Cho Sung-bae and Jung Doo-hong, while listing Hwang Suh-shik within the camera team."
    },
    {
      title: "Shiri (1999, Swiri)",
      publisher: "KoreaFilm",
      url: "https://www.koreafilm.co.kr/database/movie/swiri/swiri.htm",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Korean production record for KangJeGyu Films, Kang Je-gyu screenplay/direction, Kim Sung-bok cinematography, Won Myung-jun lighting, Samsung distribution, 120 minutes and 1999 Daejong craft awards."
    },
    {
      title: "The 36th Daejong Film Awards ceremony",
      publisher: "The Korea Economic Daily",
      url: "https://www.hankyung.com/article/1999040900101",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "Contemporary awards record confirming Shiri's Won Myung-jun lighting, Park Gok-ji editing, Lee Byung-ha/Kim Seok-won sound-technology and Kang Je-gyu/Byeon Mu-rim planning awards. Awards are corroboration of credited departments, not technique specifications."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
